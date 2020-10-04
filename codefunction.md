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
