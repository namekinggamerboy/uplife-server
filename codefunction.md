# code function

{% hint style="info" %}
Here code with example
{% endhint %}

{% hint style="danger" %}
Not includes **<** **>**
{% endhint %}


```js
const up = require("uplife-api");
let command = up.command;
```


## &sendMessage[< enter your text >]
```js
command({
 name: "hii",
 code: "&sendMessage[hello sir👍]"
});
```

## &sendEmbed[< enter embed code>]
```js
command({
 name: "hii",
 code: "&sendEmbed[ &title[Hello sir 👍] ]"
});
```

## &sendImage[<image url>]
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
 code: "`&ping` ms"
});
```
