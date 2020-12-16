## aframe-jsfx

Using game sounds generated by [loov-jsfx](https://github.com/loov/jsfx) in A-Frame.

## how to 

1. generate your sound library [here](http://jsfx.glitch.me/) 
2. add the json to your assets
3. use the component in A-Frame 🥳

## example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello, JSFX</title>
    <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-jsfx@1.0.8/dist/aframe-jsfx.min.js"></script>
  </head>
  <body>
    <a-scene background="color: #FAFAFA" cursor="rayOrigin:mouse">
      <a-assets>
        <a-asset-item id="sounds" src="sounds.json"></a-asset-item>
      </a-assets>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow jsfx="src:#sounds; sound:explosion"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow jsfx="src:#sounds; sound:explosion"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow jsfx="src:#sounds; sound:explosion"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow 
        jsfx__mouseenter="src:#sounds; sound:select;"  
        jsfx__mouseleave="src:#sounds; sound:powerup"
      ></a-plane>
    </a-scene>
  </body>
</html>
```

### properties

| Property  | Description                                      | Default Value            |
| --------  | -----------                                      | ------------------------ |
| src       | source or selector for the json file             |                          |
| sound     | name of a sound entry from the json              | first sound              |
| event     | event that triggers the sound effect             | `click`                  |

## things to try

- you can use editor-mode to switch between sounds
- make sure to press play in editor-mode mode to enable sound events
- you can also add multiple event handlers (see example)
