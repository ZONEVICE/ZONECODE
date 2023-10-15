https://github.com/processing/p5.js/wiki/p5.js-overview#createcanvas

```html
<div id='myContainer'></div>
```

```js
function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
}
```
