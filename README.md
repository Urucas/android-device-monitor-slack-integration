# android-device-monitor-slack-integration
An example on how to integrate android-device-monitor with slack and fire
an alert on a device event.

#Install
```bash
$ git clone https://github.com/Urucas/android-device-monitor-slack-integration.git
&& cd android-device-monitor-slack-integration
$ npm install
```
Before running the project make sure to add the slack **token**, **username**, **channel** you will use inside a ```config.json``` in the root folder. For running this example we create a bot called **android-device-monitor** and a **channel** monitor, our config.json:
```json
{
  "api-token" : "our-private-token-which-we-wont-tell-you",
  "channel" : "#monitor",
  "username" : "android-device-monitor"
}
```

Now you are clear to go...
```bash
npm start
```

It should start monitoring and look something like this;
<img src="https://raw.githubusercontent.com/Urucas/android-device-monitor-slack-integration/master/screen.png" />

A simple example on how to integrate [android-device-monitor](https://github.com/Urucas/android-device-monitor)
with Slack and receive a notification every time an event is fired with your
conected devices.
