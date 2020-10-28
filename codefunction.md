# code function

{% hint style="info" %}
Here code with example

Note: **prefix some [ default prefix enter start function ]**
{% endhint %}

{% hint style="danger" %}
Not includes **<** **>**
{% endhint %}


```js
const up = require("uplife-api");
up.runCommand();
let command = up.command;
```


## &sendMessage[< enter your text >]
```js
command({
 name: "hii",
 code: "&sendMessage[hello sir👍]"
});
```

## &author[< enter embed author Text >]
```js
command({
 name: "hii",
 code: "&author[Hello sir 👍]"
});
```

## &authorIcon[< enter embed author icon url >]
```js
command({
 name: "hii",
 code: "&authorIcon[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &authorURL[< enter embed author url >]
```js
command({
 name: "hii",
 code: "&authorIcon[https://npmjs.com/package/uplife-api]"
});
```

## &title[< enter embed title >]
```js
command({
 name: "hii",
 code: "&title[Hello sir 👍]"
});
```

## &color[< enter embed color >]
```js
command({
 name: "hii",
 code: "&color[#00ff00 <or> lime]"
});
```

## &description[< enter embed description >]
```js
command({
 name: "hii",
 code: "&description[Hello sir 👍]"
});
```

## &field[ < enter embed field NAME> ; < enter embed field Value > ]
```js
command({
 name: "hii",
 code: "&field[Hello sir;👍]"
});
```

## &image[< enter embed image url>]
```js
command({
 name: "hii",
 code: "&image[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &attachment[< enter embed attachment>]
```js
const { Canvas } = require('canvas-constructor');

let image = new Canvas(300, 300)
    .setColor('#AEFD54')
    .printRectangle(5, 5, 290, 290)
    .setColor('#FFAE23')
    .setTextFont('28px Impact')
    .printText('Hello World!', 130, 150)
    .toBuffer();
let cimage = new up.diacord.MessageAttachment(image, "example.png");
command({
 name: "hii",
 code: `&attachment[${cimage}]
        &image[attachment://example.png]`
});
```

## &thumbnail[< enter embed thumbnail url>]
```js
command({
 name: "hii",
 code: "&thumbnail[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &footer[< enter embed footer Text >]
```js
command({
 name: "hii",
 code: "&footer[Hello sir 👍]"
});
```

## &footerIcon[< enter embed footer icon url >]
```js
command({
 name: "hii",
 code: "&footerIcon[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &addTimestamp
```js
command({
 name: "hii",
 code: "&addTimestamp"
});
```

## &sendImage[< enter image url>]
```js
command({
 name: "hii",
 code: "&sendImage[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &ping
```js
command({
 name: "ping",
 code: "&sendMessage[`&ping` ms]"
});
```

## &authorID
```js
command({
 name: "pingMe",
 code: "&sendMessage[<@&authorID>]"
});
```

## &randomColor
```js
command({
 name: "randamcolor",
 code: "&sendMessage[Me generate random colour code &randomColor]"
});
```

## &dm
```js
command({
 name: "dmMe",
 code: "&sendMessage[this message sned dm]"
});
```

## &useChannel[< enter channel ID >]
```js
command({
 name: "useChannel",
 code: "&useChannel[1233444] &sendMessage[this message test message]"
});
```

> This page Work in progress.
