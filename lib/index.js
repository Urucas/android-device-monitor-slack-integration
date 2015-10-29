import request from 'request'
import androidMonitor from 'android-device-monitor'
import config from '../config.json'
import semafor from 'semafor'

export default function monitor() {
  let token = config["api-token"]
  let channel = config["channel"]
  let username = config["username"]
  let logger = semafor()

  let sendConnectionMessage = (device) => {
    let message = `:taco: A device is now connected\r\n"${device.deviceName}" - "${device.serialNumber}"`
    sendMessage(message)
  }

  let sendDisconnectionMessage = (device) => {
    let message = `:bomb: A device has been disconnected\r\n"${device.deviceName}" - "${device.serialNumber}"`
    sendMessage(message)
  }

  let sendMessage = (message, attachment) => {
    let url = "https://slack.com/api/chat.postMessage"
    let formData = {
      token : token,
      channel : channel,
      text: message,
      username : username,
      mrkdwn: true
    }
    logger.log(message)
    logger.log("Trying to send message to slack")
    request.post(url, {form:formData}, (err, response, body) => {
      if(err != null) {
        logger.fail(err.toString())
        return
      }
      try {
        let res = JSON.parse(body)
        if(res.ok) {
          logger.ok("Message successfully sent")
          return
        }
        logger.fail("Error sending message")
        logger.log(body)
      }catch(e){
        logger.fail("Error parsing response")
        logger.log(body)
      }
    })
  }

  androidMonitor({
    onConnection: (device) => {
      sendConnectionMessage(device)
    },
    onDisconnection: (device) => {
      sendDisconnectionMessage(device)
    }
  })
}
