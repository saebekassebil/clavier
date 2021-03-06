# Clavier

![Piano showing a Dm(#11)](http://i.minus.com/iIBKXWmXAhpVe.png)

Render magnificent piano keyboards with velvet borders and everything - All in the trusty DOM.

## Usage

Usage is simple. Just drop the `clavier.js` and `clavier.css` files in your markup, and you should be ready to render some nice keyboards.

```html
<script src='./clavier.js'></script>
<script>
  // Create a piano, 700px wide and 200px high
  var piano = new Clavier(700, 200); 
  
  // Append the piano element to the DOM
  piano.appendTo(document.body)
</script>
```    
Simple, right?

To get that nice pressed inset shadow, you just append a '.pressed' CSS class to a key's class property:

```javascript
// The keys are zero-indexed
piano.key(3).classList.add('pressed');
```

You can take a look in the `examples/` folder if you want to see some simple use-case(s)

## CSS Customization

I'm sure you can style your piano in way many better ways than I've styled this by default. Set it in maple or beech? You got these CSS classes to toy around with:

 - `.clavier-piano` - This is the piano body itself. Be sure to apply an abundancy of padding
 - `.whitekey` - Applies to every white key on the keyboard. 
 				By default it has some rounded borders, but not much else
 - `.blackkey` - Same as for the white keys
 - `.velvet` - Applies to that delicious red velvet border.
 - `.pressed` - A class representing a pressed state of a key - No blue glow by default
 
## API

There's just the `Clavier` object.


### Clavier(width, height[, blacks])
 - The constructor for the Clavier object takes a width and a height - both in pixels.

It also takes an optional `blacks` array, which specifies the positions
of the black keys. It defaults to `[0, 2, 3, 5, 6]` which is a keyboard starting
from note `A`. You could for example set it to `[0, 1, 2, 4, 5]` which results in a keyboard
starting from note `F`.

#### clavier.reset()
 - Resets/rebuilds the entire piano DOM structure

#### clavier.appendTo(DOMElement)
 - Just a sugar method for `DOMElement.appendChild(clavier.element)`

#### clavier.on(type, listener)
 - Registers an event listener on the clavier DOM object

#### clavier.key(number)
 - Returns the (zero-indexed) DOM key at the specified index
 
#### clavier.keys()
 - Returns the number of keys on the piano
 
#### clavier.indexOf(key)
 - Returns the (zero-indexed) index of the given key. Useful for determining which keys has been clicked from a `onclick` event listener, using `event.target`.
