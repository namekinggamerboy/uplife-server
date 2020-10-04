

# Npm information

{% hint style="danger" %}
Your project must be on node 12x
{% endhint %}
```js
npm install uplife-api
```

> # **Start function**

```js
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

**Command function**
```js
const UP = require("uplife-api");
let command = UP.command;
command({
name: "hello",
code: "&sendMessage[Hii]"
});
```
> 👉 All code function Follow[this url](https://harshpatel1735.gitbook.io/uplife-api/codefunction)


**Discord.js Command Header**
```js
const UP = require("uplife-api");
UP.commandHeader({
name: __dirname+"/commands"
})
```


> Don't forget to join our [discord](https://discord.gg/KmngEup) server!
