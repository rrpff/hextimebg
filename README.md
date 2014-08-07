# Hex Time BG

Tiny, simple project. Pass in one or more jQuery selectors and it'll automatically update their background colour every second. Derives the colour from the current hour, minute and second and expresses as a HEX value.

```js
var hexbg = require("hextimebg");
hexbg.init($("body"), $("nav"));
```

To stop: ```hexbg.stop()```
To restart: ```hexbg.loop()```