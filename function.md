# Function wiki

{% hint style="danger" %}
Your project must be on node 10x
{% endhint %}

```javascript
npm install uplife-api
```

## **Start function**

```javascript
const UP = require("uplife-api");
UP.start(
  "[your Bot TOKEN]",
  "[your prefix]",
  "[your user id]",
  {
    ping: "true",
    ping color: "#0099ff",
    util: "true",
    mod: "true",
    giveaway: "true",
    reaction: "🎉",
    giveawaystorage: __dirname+"/giveaways.json",
    giveawayembed: "🎉🎉START GIVEAWAY🎉🎉",
    giveawaymessage: "🎉🎉start giveaway🎉🎉",
    participate: "click to 🎉 participate",
    music: "true",
    youtubekey: "[your youtube api key]",
    economy: "true",
    help: "true"
  });
```

{% hint style="info" %}
Must be start function then use all
{% endhint %}

## **Command function**

```javascript
const UP = require("uplife-api");
UP.runCommand();
let command = UP.command;
command({
name: "hello",
code: "&sendMessage[Hii]"
});
```

> 👉 All code function Follow[this url](https://harshpatel1735.gitbook.io/uplife-api/codefunction)

## **Discord.js Command Header**

```javascript
const UP = require("uplife-api");
UP.commandHeader({
name: __dirname+"/commands"
})
```

> Don't forget to join our [discord](https://discord.gg/KmngEup) server!

