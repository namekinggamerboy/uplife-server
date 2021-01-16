# code function

{% hint style="info" %}
Here code with example

Note: **prefix some \[ default prefix enter start function \]**
{% endhint %}

{% hint style="danger" %}
Not includes **&lt;** **&gt;**
{% endhint %}

```javascript
const up = require("uplife-api");
up.runCommand();
let command = up.command;
```

## &sendMessage\[&lt; enter your text &gt;\]

```javascript
command({
 name: "hii",
 code: "&sendMessage[hello sir👍]"
});
```

## &author\[&lt; enter embed author Text &gt;\]

```javascript
command({
 name: "hii",
 code: "&author[Hello sir 👍]"
});
```

## &authorIcon\[&lt; enter embed author icon url &gt;\]

```javascript
command({
 name: "hii",
 code: "&authorIcon[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &authorURL\[&lt; enter embed author url &gt;\]

```javascript
command({
 name: "hii",
 code: "&authorIcon[https://npmjs.com/package/uplife-api]"
});
```

## &title\[&lt; enter embed title &gt;\]

```javascript
command({
 name: "hii",
 code: "&title[Hello sir 👍]"
});
```

## &color\[&lt; enter embed color &gt;\]

```javascript
command({
 name: "hii",
 code: "&color[#00ff00 <or> lime]"
});
```

## &description\[&lt; enter embed description &gt;\]

```javascript
command({
 name: "hii",
 code: "&description[Hello sir 👍]"
});
```

## &field\[ &lt; enter embed field NAME&gt; ; &lt; enter embed field Value &gt; \]

```javascript
command({
 name: "hii",
 code: "&field[Hello sir;👍]"
});
```

## &image\[&lt; enter embed image url&gt;\]

```javascript
command({
 name: "hii",
 code: "&image[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &attachment\[&lt; enter embed attachment&gt;\]

```javascript
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

## &thumbnail\[&lt; enter embed thumbnail url&gt;\]

```javascript
command({
 name: "hii",
 code: "&thumbnail[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &footer\[&lt; enter embed footer Text &gt;\]

```javascript
command({
 name: "hii",
 code: "&footer[Hello sir 👍]"
});
```

## &footerIcon\[&lt; enter embed footer icon url &gt;\]

```javascript
command({
 name: "hii",
 code: "&footerIcon[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &addTimestamp

```javascript
command({
 name: "hii",
 code: "&addTimestamp"
});
```

## &sendImage\[&lt; enter image url&gt;\]

```javascript
command({
 name: "hii",
 code: "&sendImage[https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif]"
});
```

## &ping

```javascript
command({
 name: "ping",
 code: "&sendMessage[`&ping` ms]"
});
```

## &authorID

```javascript
command({
 name: "pingMe",
 code: "&sendMessage[<@&authorID>]"
});
```

## &randomColor

```javascript
command({
 name: "randamcolor",
 code: "&sendMessage[Me generate random colour code &randomColor]"
});
```

## &dm

```javascript
command({
 name: "dmMe",
 code: "&dm &sendMessage[this message sned dm]"
});
```

## &useChannel\[&lt; enter channel ID &gt;\]

```javascript
command({
 name: "useChannel",
 code: "&useChannel[1233444] &sendMessage[this message test message]"
});
```

## &if[< Config data >]

```javascript
command({
 name: "if",
 code: "&sendMessage[&if[1 > 0;yes this high;no this not high]]"
});
```

```javascript
command({
 name: "if",
 code: "&sendMessage[&if[1 == 1;yes this some;no this not some]]"
});
```

```javascript
command({
 name: "if",
 code: "&sendMessage[&if[1 >= 1;yes this high;no this not high]]"
});
```

```javascript
command({
 name: "if",
 code: "&sendMessage[&if[1 != 1;yes this some;no this not some]]"
});
```

## &authorAvatar

```javascript
command({
 name: "myavatar",
 code: "&sendMessage[&authorAvatar]"
});
```
## &mention[< enter mention type >]

```javascript
command({
 name: "mentionch",
 code: "&sendMessage[<#&mention[0;channel]>]"
});
```

```javascript
command({
 name: "mentionemoji",
 code: "&sendMessage[emoji id-&mention[0;emoji]]"
});
```

```javascript
command({
 name: "mentionuser",
 code: "&sendMessage[<@!&mention[0;user]>]"
});
```

```javascript
command({
 name: "mentionrole",
 code: "&sendMessage[<@&&mention[0;role]>]"
});
```

## &addEmoji[< Add emoji name >;< Emoji url >]

```javascript
command({
name: "addemoji",
code: "&addEmoji[&message[0];&message[1]] &sendMessage[emoji add] &title[Emoji &message[0]]"
});
```

## &message[< message content number >] | &message

```javascript
command({
name: "say",
code: "&sendMessage[&message]"
});
```

```javascript
command({
name: "say",
code: "&sendMessage[&message[0]&mesage[2]]"
});
```
**This up example just give 1 and 3 (input: !say hi hello guys | but bot send output: hi guys)**
> This page Work in progress.
