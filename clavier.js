var Clavier = (function clavierScope() {
  'use strict';
  function create(type) {
    return document.createElement(type);
  }

  function css(el, obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        el.style[i] = obj[i];
      }
    }

    return el;
  }

  function Clavier(width, height) {
    this.width = width;
    this.height = height;
    this.reset();
  }

  Clavier.prototype = {
    reset: function() {
      var w = this.width, h = this.height;

      if (this.element) {
        this.element.innerHTML = '';
      }

      // Create piano element
      var piano = this.element = this.element || create('div');
      piano.className = 'clavier-piano';
      
      // Piano body
      var body = this.body = create('div');
      body.className = 'clavier-body';

      // Calculate keys
      var wHeight = h;
      var wWidth = h * 0.15;
      var bHeight = wHeight * (2/3);
      var bWidth = wWidth / 2;

      var whitekeys = Math.floor((w - 2 * (w/wWidth)) / wWidth);
      var blacks = [0, 2, 3, 5, 6];

      for (var i = 0; i < whitekeys; ++i) {
        // Create white key
        var white = create('div');
        white.className = 'whitekey';
        css(white, { width: wWidth + 'px', height: wHeight + 'px' });
        body.appendChild(white);

        if (blacks.indexOf(i % 7) !== -1 && i !== whitekeys - 1) {
          // Create black key
          var black = create('div');
          black.className = 'blackkey';
          css(black, {
            width: bWidth + 'px',
            height: bHeight + 'px',
            left: i * (wWidth + 2) + bWidth * 1.5 + 'px'
          });
          body.appendChild(black);
        }
      }

      // Velvet border
      var velvet = create('div');
      velvet.className = 'velvet';
      body.appendChild(velvet);

      // Float clear
      var br = create('br');
      css(br, { clear: 'both' });
      body.appendChild(br);
      piano.appendChild(body);
    },

    appendTo: function(el) {
      el.appendChild(this.element);
    },

    on: function(type, listener) {
      this.body.addEventListener(type, listener, false);
    },

    key: function(n) {
      return this.body.childNodes[n];
    },

    keys: function() {
      // Childnodes minus the velvet and the float break
      return this.body.childNodes.length - 2;
    },

    indexOf: function(el) {
      return Array.prototype.indexOf.call(this.body.childNodes, el);
    }
  };

  return Clavier;
})();

