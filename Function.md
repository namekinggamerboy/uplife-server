> # Uplife-api Function

**Start function**
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

