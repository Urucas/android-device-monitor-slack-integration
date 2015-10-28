# android-device-monitor-slack-integration
An example on how to use integrate android-device-monitor with slack, and fire
an alert on your usb devices events

#Install
```bash
$ git clone https://github.com/Urucas/android-device-monitor-slack-integration.git
&& cd android-device-monitor-slack-integration
$ npm install
```
Add the slack token, username, channel you will use. For this example we create
a bot called **android-device-monitor** and a **channel** monitor, and our config.json
looks like this
```json
{
  "api-token" : "our-private-token-which-we-wont-tell-you",
  "channel" : "#monitor",
  "username" : "android-device-monitor"
}
```

Now run the example
```bash
npm start
```

It should look something like this
<img src="https://raw.githubusercontent.com/Urucas/android-device-monitor-slack-integration/master/screen.png" />

A simple example on how to integrate [android-device-monitor](https://github.com/Urucas/android-device-monitor)
with Slack and receive a notification every an event is fired with your
conected devices
