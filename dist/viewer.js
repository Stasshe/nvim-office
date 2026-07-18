"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Global.js
  var require_Global = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Global.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2._registerNode = exports2.Konva = exports2.glob = void 0;
      var PI_OVER_180 = Math.PI / 180;
      function detectBrowser() {
        return typeof window !== "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
      }
      exports2.glob = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
      exports2.Konva = {
        _global: exports2.glob,
        version: "9.3.22",
        isBrowser: detectBrowser(),
        isUnminified: /param/.test(function(param) {
        }.toString()),
        dblClickWindow: 400,
        getAngle(angle) {
          return exports2.Konva.angleDeg ? angle * PI_OVER_180 : angle;
        },
        enableTrace: false,
        pointerEventsEnabled: true,
        autoDrawEnabled: true,
        hitOnDragEnabled: false,
        capturePointerEventsEnabled: false,
        _mouseListenClick: false,
        _touchListenClick: false,
        _pointerListenClick: false,
        _mouseInDblClickWindow: false,
        _touchInDblClickWindow: false,
        _pointerInDblClickWindow: false,
        _mouseDblClickPointerId: null,
        _touchDblClickPointerId: null,
        _pointerDblClickPointerId: null,
        _fixTextRendering: false,
        pixelRatio: typeof window !== "undefined" && window.devicePixelRatio || 1,
        dragDistance: 3,
        angleDeg: true,
        showWarnings: true,
        dragButtons: [0, 1],
        isDragging() {
          return exports2.Konva["DD"].isDragging;
        },
        isTransforming() {
          var _a;
          return (_a = exports2.Konva["Transformer"]) === null || _a === void 0 ? void 0 : _a.isTransforming();
        },
        isDragReady() {
          return !!exports2.Konva["DD"].node;
        },
        releaseCanvasOnDestroy: true,
        document: exports2.glob.document,
        _injectGlobal(Konva2) {
          exports2.glob.Konva = Konva2;
        }
      };
      var _registerNode = (NodeClass) => {
        exports2.Konva[NodeClass.prototype.getClassName()] = NodeClass;
      };
      exports2._registerNode = _registerNode;
      exports2.Konva._injectGlobal(exports2.Konva);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Util.js
  var require_Util = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Util.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Util = exports2.Transform = void 0;
      var Global_1 = require_Global();
      var Transform = class _Transform {
        constructor(m = [1, 0, 0, 1, 0, 0]) {
          this.dirty = false;
          this.m = m && m.slice() || [1, 0, 0, 1, 0, 0];
        }
        reset() {
          this.m[0] = 1;
          this.m[1] = 0;
          this.m[2] = 0;
          this.m[3] = 1;
          this.m[4] = 0;
          this.m[5] = 0;
        }
        copy() {
          return new _Transform(this.m);
        }
        copyInto(tr) {
          tr.m[0] = this.m[0];
          tr.m[1] = this.m[1];
          tr.m[2] = this.m[2];
          tr.m[3] = this.m[3];
          tr.m[4] = this.m[4];
          tr.m[5] = this.m[5];
        }
        point(point) {
          const m = this.m;
          return {
            x: m[0] * point.x + m[2] * point.y + m[4],
            y: m[1] * point.x + m[3] * point.y + m[5]
          };
        }
        translate(x, y) {
          this.m[4] += this.m[0] * x + this.m[2] * y;
          this.m[5] += this.m[1] * x + this.m[3] * y;
          return this;
        }
        scale(sx, sy) {
          this.m[0] *= sx;
          this.m[1] *= sx;
          this.m[2] *= sy;
          this.m[3] *= sy;
          return this;
        }
        rotate(rad) {
          const c = Math.cos(rad);
          const s = Math.sin(rad);
          const m11 = this.m[0] * c + this.m[2] * s;
          const m12 = this.m[1] * c + this.m[3] * s;
          const m21 = this.m[0] * -s + this.m[2] * c;
          const m22 = this.m[1] * -s + this.m[3] * c;
          this.m[0] = m11;
          this.m[1] = m12;
          this.m[2] = m21;
          this.m[3] = m22;
          return this;
        }
        getTranslation() {
          return {
            x: this.m[4],
            y: this.m[5]
          };
        }
        skew(sx, sy) {
          const m11 = this.m[0] + this.m[2] * sy;
          const m12 = this.m[1] + this.m[3] * sy;
          const m21 = this.m[2] + this.m[0] * sx;
          const m22 = this.m[3] + this.m[1] * sx;
          this.m[0] = m11;
          this.m[1] = m12;
          this.m[2] = m21;
          this.m[3] = m22;
          return this;
        }
        multiply(matrix) {
          const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
          const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
          const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
          const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
          const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
          const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
          this.m[0] = m11;
          this.m[1] = m12;
          this.m[2] = m21;
          this.m[3] = m22;
          this.m[4] = dx;
          this.m[5] = dy;
          return this;
        }
        invert() {
          const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
          const m0 = this.m[3] * d;
          const m1 = -this.m[1] * d;
          const m2 = -this.m[2] * d;
          const m3 = this.m[0] * d;
          const m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
          const m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
          this.m[0] = m0;
          this.m[1] = m1;
          this.m[2] = m2;
          this.m[3] = m3;
          this.m[4] = m4;
          this.m[5] = m5;
          return this;
        }
        getMatrix() {
          return this.m;
        }
        decompose() {
          const a = this.m[0];
          const b = this.m[1];
          const c = this.m[2];
          const d = this.m[3];
          const e = this.m[4];
          const f = this.m[5];
          const delta = a * d - b * c;
          const result = {
            x: e,
            y: f,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0
          };
          if (a != 0 || b != 0) {
            const r = Math.sqrt(a * a + b * b);
            result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
            result.scaleX = r;
            result.scaleY = delta / r;
            result.skewX = (a * c + b * d) / delta;
            result.skewY = 0;
          } else if (c != 0 || d != 0) {
            const s = Math.sqrt(c * c + d * d);
            result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            result.scaleX = delta / s;
            result.scaleY = s;
            result.skewX = 0;
            result.skewY = (a * c + b * d) / delta;
          } else {
          }
          result.rotation = exports2.Util._getRotation(result.rotation);
          return result;
        }
      };
      exports2.Transform = Transform;
      var OBJECT_ARRAY = "[object Array]";
      var OBJECT_NUMBER = "[object Number]";
      var OBJECT_STRING = "[object String]";
      var OBJECT_BOOLEAN = "[object Boolean]";
      var PI_OVER_DEG180 = Math.PI / 180;
      var DEG180_OVER_PI = 180 / Math.PI;
      var HASH = "#";
      var EMPTY_STRING = "";
      var ZERO = "0";
      var KONVA_WARNING = "Konva warning: ";
      var KONVA_ERROR = "Konva error: ";
      var RGB_PAREN = "rgb(";
      var COLORS = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 132, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 255, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 203],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [119, 128, 144],
        slategrey: [119, 128, 144],
        snow: [255, 255, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        transparent: [255, 255, 255, 0],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 5]
      };
      var RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
      var animQueue = [];
      var req = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame || function(f) {
        setTimeout(f, 60);
      };
      exports2.Util = {
        _isElement(obj) {
          return !!(obj && obj.nodeType == 1);
        },
        _isFunction(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        },
        _isPlainObject(obj) {
          return !!obj && obj.constructor === Object;
        },
        _isArray(obj) {
          return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
        },
        _isNumber(obj) {
          return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
        },
        _isString(obj) {
          return Object.prototype.toString.call(obj) === OBJECT_STRING;
        },
        _isBoolean(obj) {
          return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
        },
        isObject(val) {
          return val instanceof Object;
        },
        isValidSelector(selector) {
          if (typeof selector !== "string") {
            return false;
          }
          const firstChar = selector[0];
          return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
        },
        _sign(number) {
          if (number === 0) {
            return 1;
          }
          if (number > 0) {
            return 1;
          } else {
            return -1;
          }
        },
        requestAnimFrame(callback) {
          animQueue.push(callback);
          if (animQueue.length === 1) {
            req(function() {
              const queue = animQueue;
              animQueue = [];
              queue.forEach(function(cb) {
                cb();
              });
            });
          }
        },
        createCanvasElement() {
          const canvas = document.createElement("canvas");
          try {
            canvas.style = canvas.style || {};
          } catch (e) {
          }
          return canvas;
        },
        createImageElement() {
          return document.createElement("img");
        },
        _isInDocument(el) {
          while (el = el.parentNode) {
            if (el == document) {
              return true;
            }
          }
          return false;
        },
        _urlToImage(url, callback) {
          const imageObj = exports2.Util.createImageElement();
          imageObj.onload = function() {
            callback(imageObj);
          };
          imageObj.src = url;
        },
        _rgbToHex(r, g, b) {
          return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        _hexToRgb(hex) {
          hex = hex.replace(HASH, EMPTY_STRING);
          const bigint = parseInt(hex, 16);
          return {
            r: bigint >> 16 & 255,
            g: bigint >> 8 & 255,
            b: bigint & 255
          };
        },
        getRandomColor() {
          let randColor = (Math.random() * 16777215 << 0).toString(16);
          while (randColor.length < 6) {
            randColor = ZERO + randColor;
          }
          return HASH + randColor;
        },
        getRGB(color) {
          let rgb;
          if (color in COLORS) {
            rgb = COLORS[color];
            return {
              r: rgb[0],
              g: rgb[1],
              b: rgb[2]
            };
          } else if (color[0] === HASH) {
            return this._hexToRgb(color.substring(1));
          } else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g, ""));
            return {
              r: parseInt(rgb[1], 10),
              g: parseInt(rgb[2], 10),
              b: parseInt(rgb[3], 10)
            };
          } else {
            return {
              r: 0,
              g: 0,
              b: 0
            };
          }
        },
        colorToRGBA(str) {
          str = str || "black";
          return exports2.Util._namedColorToRBA(str) || exports2.Util._hex3ColorToRGBA(str) || exports2.Util._hex4ColorToRGBA(str) || exports2.Util._hex6ColorToRGBA(str) || exports2.Util._hex8ColorToRGBA(str) || exports2.Util._rgbColorToRGBA(str) || exports2.Util._rgbaColorToRGBA(str) || exports2.Util._hslColorToRGBA(str);
        },
        _namedColorToRBA(str) {
          const c = COLORS[str.toLowerCase()];
          if (!c) {
            return null;
          }
          return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1
          };
        },
        _rgbColorToRGBA(str) {
          if (str.indexOf("rgb(") === 0) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            const parts = str.split(/ *, */).map(Number);
            return {
              r: parts[0],
              g: parts[1],
              b: parts[2],
              a: 1
            };
          }
        },
        _rgbaColorToRGBA(str) {
          if (str.indexOf("rgba(") === 0) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            const parts = str.split(/ *, */).map((n, index) => {
              if (n.slice(-1) === "%") {
                return index === 3 ? parseInt(n) / 100 : parseInt(n) / 100 * 255;
              }
              return Number(n);
            });
            return {
              r: parts[0],
              g: parts[1],
              b: parts[2],
              a: parts[3]
            };
          }
        },
        _hex8ColorToRGBA(str) {
          if (str[0] === "#" && str.length === 9) {
            return {
              r: parseInt(str.slice(1, 3), 16),
              g: parseInt(str.slice(3, 5), 16),
              b: parseInt(str.slice(5, 7), 16),
              a: parseInt(str.slice(7, 9), 16) / 255
            };
          }
        },
        _hex6ColorToRGBA(str) {
          if (str[0] === "#" && str.length === 7) {
            return {
              r: parseInt(str.slice(1, 3), 16),
              g: parseInt(str.slice(3, 5), 16),
              b: parseInt(str.slice(5, 7), 16),
              a: 1
            };
          }
        },
        _hex4ColorToRGBA(str) {
          if (str[0] === "#" && str.length === 5) {
            return {
              r: parseInt(str[1] + str[1], 16),
              g: parseInt(str[2] + str[2], 16),
              b: parseInt(str[3] + str[3], 16),
              a: parseInt(str[4] + str[4], 16) / 255
            };
          }
        },
        _hex3ColorToRGBA(str) {
          if (str[0] === "#" && str.length === 4) {
            return {
              r: parseInt(str[1] + str[1], 16),
              g: parseInt(str[2] + str[2], 16),
              b: parseInt(str[3] + str[3], 16),
              a: 1
            };
          }
        },
        _hslColorToRGBA(str) {
          if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
            const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
            const h = Number(hsl[0]) / 360;
            const s = Number(hsl[1]) / 100;
            const l = Number(hsl[2]) / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) {
              val = l * 255;
              return {
                r: Math.round(val),
                g: Math.round(val),
                b: Math.round(val),
                a: 1
              };
            }
            if (l < 0.5) {
              t2 = l * (1 + s);
            } else {
              t2 = l + s - l * s;
            }
            const t1 = 2 * l - t2;
            const rgb = [0, 0, 0];
            for (let i = 0; i < 3; i++) {
              t3 = h + 1 / 3 * -(i - 1);
              if (t3 < 0) {
                t3++;
              }
              if (t3 > 1) {
                t3--;
              }
              if (6 * t3 < 1) {
                val = t1 + (t2 - t1) * 6 * t3;
              } else if (2 * t3 < 1) {
                val = t2;
              } else if (3 * t3 < 2) {
                val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
              } else {
                val = t1;
              }
              rgb[i] = val * 255;
            }
            return {
              r: Math.round(rgb[0]),
              g: Math.round(rgb[1]),
              b: Math.round(rgb[2]),
              a: 1
            };
          }
        },
        haveIntersection(r1, r2) {
          return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
        },
        cloneObject(obj) {
          const retObj = {};
          for (const key in obj) {
            if (this._isPlainObject(obj[key])) {
              retObj[key] = this.cloneObject(obj[key]);
            } else if (this._isArray(obj[key])) {
              retObj[key] = this.cloneArray(obj[key]);
            } else {
              retObj[key] = obj[key];
            }
          }
          return retObj;
        },
        cloneArray(arr) {
          return arr.slice(0);
        },
        degToRad(deg) {
          return deg * PI_OVER_DEG180;
        },
        radToDeg(rad) {
          return rad * DEG180_OVER_PI;
        },
        _degToRad(deg) {
          exports2.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
          return exports2.Util.degToRad(deg);
        },
        _radToDeg(rad) {
          exports2.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
          return exports2.Util.radToDeg(rad);
        },
        _getRotation(radians) {
          return Global_1.Konva.angleDeg ? exports2.Util.radToDeg(radians) : radians;
        },
        _capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        },
        throw(str) {
          throw new Error(KONVA_ERROR + str);
        },
        error(str) {
          console.error(KONVA_ERROR + str);
        },
        warn(str) {
          if (!Global_1.Konva.showWarnings) {
            return;
          }
          console.warn(KONVA_WARNING + str);
        },
        each(obj, func) {
          for (const key in obj) {
            func(key, obj[key]);
          }
        },
        _inRange(val, left, right) {
          return left <= val && val < right;
        },
        _getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
          let x, y, dist;
          const pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
          if (pd2 == 0) {
            x = x1;
            y = y1;
            dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
          } else {
            const u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
            if (u < 0) {
              x = x1;
              y = y1;
              dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
            } else if (u > 1) {
              x = x2;
              y = y2;
              dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
            } else {
              x = x1 + u * (x2 - x1);
              y = y1 + u * (y2 - y1);
              dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
            }
          }
          return [x, y, dist];
        },
        _getProjectionToLine(pt, line, isClosed) {
          const pc = exports2.Util.cloneObject(pt);
          let dist = Number.MAX_VALUE;
          line.forEach(function(p1, i) {
            if (!isClosed && i === line.length - 1) {
              return;
            }
            const p2 = line[(i + 1) % line.length];
            const proj = exports2.Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
            const px = proj[0], py = proj[1], pdist = proj[2];
            if (pdist < dist) {
              pc.x = px;
              pc.y = py;
              dist = pdist;
            }
          });
          return pc;
        },
        _prepareArrayForTween(startArray, endArray, isClosed) {
          const start = [], end = [];
          if (startArray.length > endArray.length) {
            const temp = endArray;
            endArray = startArray;
            startArray = temp;
          }
          for (let n = 0; n < startArray.length; n += 2) {
            start.push({
              x: startArray[n],
              y: startArray[n + 1]
            });
          }
          for (let n = 0; n < endArray.length; n += 2) {
            end.push({
              x: endArray[n],
              y: endArray[n + 1]
            });
          }
          const newStart = [];
          end.forEach(function(point) {
            const pr = exports2.Util._getProjectionToLine(point, start, isClosed);
            newStart.push(pr.x);
            newStart.push(pr.y);
          });
          return newStart;
        },
        _prepareToStringify(obj) {
          let desc;
          obj.visitedByCircularReferenceRemoval = true;
          for (const key in obj) {
            if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) {
              continue;
            }
            desc = Object.getOwnPropertyDescriptor(obj, key);
            if (obj[key].visitedByCircularReferenceRemoval || exports2.Util._isElement(obj[key])) {
              if (desc.configurable) {
                delete obj[key];
              } else {
                return null;
              }
            } else if (exports2.Util._prepareToStringify(obj[key]) === null) {
              if (desc.configurable) {
                delete obj[key];
              } else {
                return null;
              }
            }
          }
          delete obj.visitedByCircularReferenceRemoval;
          return obj;
        },
        _assign(target, source) {
          for (const key in source) {
            target[key] = source[key];
          }
          return target;
        },
        _getFirstPointerId(evt) {
          if (!evt.touches) {
            return evt.pointerId || 999;
          } else {
            return evt.changedTouches[0].identifier;
          }
        },
        releaseCanvas(...canvases) {
          if (!Global_1.Konva.releaseCanvasOnDestroy)
            return;
          canvases.forEach((c) => {
            c.width = 0;
            c.height = 0;
          });
        },
        drawRoundedRectPath(context, width, height, cornerRadius) {
          let topLeft = 0;
          let topRight = 0;
          let bottomLeft = 0;
          let bottomRight = 0;
          if (typeof cornerRadius === "number") {
            topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
          } else {
            topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
            topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
            bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
            bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
          }
          context.moveTo(topLeft, 0);
          context.lineTo(width - topRight, 0);
          context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
          context.lineTo(width, height - bottomRight);
          context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
          context.lineTo(bottomLeft, height);
          context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
          context.lineTo(0, topLeft);
          context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
        }
      };
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Context.js
  var require_Context = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Context.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.HitContext = exports2.SceneContext = exports2.Context = void 0;
      var Util_1 = require_Util();
      var Global_1 = require_Global();
      function simplifyArray(arr) {
        const retArr = [], len = arr.length, util = Util_1.Util;
        for (let n = 0; n < len; n++) {
          let val = arr[n];
          if (util._isNumber(val)) {
            val = Math.round(val * 1e3) / 1e3;
          } else if (!util._isString(val)) {
            val = val + "";
          }
          retArr.push(val);
        }
        return retArr;
      }
      var COMMA = ",";
      var OPEN_PAREN = "(";
      var CLOSE_PAREN = ")";
      var OPEN_PAREN_BRACKET = "([";
      var CLOSE_BRACKET_PAREN = "])";
      var SEMICOLON = ";";
      var DOUBLE_PAREN = "()";
      var EQUALS = "=";
      var CONTEXT_METHODS = [
        "arc",
        "arcTo",
        "beginPath",
        "bezierCurveTo",
        "clearRect",
        "clip",
        "closePath",
        "createLinearGradient",
        "createPattern",
        "createRadialGradient",
        "drawImage",
        "ellipse",
        "fill",
        "fillText",
        "getImageData",
        "createImageData",
        "lineTo",
        "moveTo",
        "putImageData",
        "quadraticCurveTo",
        "rect",
        "roundRect",
        "restore",
        "rotate",
        "save",
        "scale",
        "setLineDash",
        "setTransform",
        "stroke",
        "strokeText",
        "transform",
        "translate"
      ];
      var CONTEXT_PROPERTIES = [
        "fillStyle",
        "strokeStyle",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "letterSpacing",
        "lineCap",
        "lineDashOffset",
        "lineJoin",
        "lineWidth",
        "miterLimit",
        "direction",
        "font",
        "textAlign",
        "textBaseline",
        "globalAlpha",
        "globalCompositeOperation",
        "imageSmoothingEnabled"
      ];
      var traceArrMax = 100;
      var Context = class {
        constructor(canvas) {
          this.canvas = canvas;
          if (Global_1.Konva.enableTrace) {
            this.traceArr = [];
            this._enableTrace();
          }
        }
        fillShape(shape) {
          if (shape.fillEnabled()) {
            this._fill(shape);
          }
        }
        _fill(shape) {
        }
        strokeShape(shape) {
          if (shape.hasStroke()) {
            this._stroke(shape);
          }
        }
        _stroke(shape) {
        }
        fillStrokeShape(shape) {
          if (shape.attrs.fillAfterStrokeEnabled) {
            this.strokeShape(shape);
            this.fillShape(shape);
          } else {
            this.fillShape(shape);
            this.strokeShape(shape);
          }
        }
        getTrace(relaxed, rounded) {
          let traceArr = this.traceArr, len = traceArr.length, str = "", n, trace, method, args;
          for (n = 0; n < len; n++) {
            trace = traceArr[n];
            method = trace.method;
            if (method) {
              args = trace.args;
              str += method;
              if (relaxed) {
                str += DOUBLE_PAREN;
              } else {
                if (Util_1.Util._isArray(args[0])) {
                  str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                } else {
                  if (rounded) {
                    args = args.map((a) => typeof a === "number" ? Math.floor(a) : a);
                  }
                  str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                }
              }
            } else {
              str += trace.property;
              if (!relaxed) {
                str += EQUALS + trace.val;
              }
            }
            str += SEMICOLON;
          }
          return str;
        }
        clearTrace() {
          this.traceArr = [];
        }
        _trace(str) {
          let traceArr = this.traceArr, len;
          traceArr.push(str);
          len = traceArr.length;
          if (len >= traceArrMax) {
            traceArr.shift();
          }
        }
        reset() {
          const pixelRatio = this.getCanvas().getPixelRatio();
          this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
        }
        getCanvas() {
          return this.canvas;
        }
        clear(bounds) {
          const canvas = this.getCanvas();
          if (bounds) {
            this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
          } else {
            this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
          }
        }
        _applyLineCap(shape) {
          const lineCap = shape.attrs.lineCap;
          if (lineCap) {
            this.setAttr("lineCap", lineCap);
          }
        }
        _applyOpacity(shape) {
          const absOpacity = shape.getAbsoluteOpacity();
          if (absOpacity !== 1) {
            this.setAttr("globalAlpha", absOpacity);
          }
        }
        _applyLineJoin(shape) {
          const lineJoin = shape.attrs.lineJoin;
          if (lineJoin) {
            this.setAttr("lineJoin", lineJoin);
          }
        }
        setAttr(attr, val) {
          this._context[attr] = val;
        }
        arc(x, y, radius, startAngle, endAngle, counterClockwise) {
          this._context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        }
        arcTo(x1, y1, x2, y2, radius) {
          this._context.arcTo(x1, y1, x2, y2, radius);
        }
        beginPath() {
          this._context.beginPath();
        }
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
          this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        }
        clearRect(x, y, width, height) {
          this._context.clearRect(x, y, width, height);
        }
        clip(...args) {
          this._context.clip.apply(this._context, args);
        }
        closePath() {
          this._context.closePath();
        }
        createImageData(width, height) {
          const a = arguments;
          if (a.length === 2) {
            return this._context.createImageData(width, height);
          } else if (a.length === 1) {
            return this._context.createImageData(width);
          }
        }
        createLinearGradient(x0, y0, x1, y1) {
          return this._context.createLinearGradient(x0, y0, x1, y1);
        }
        createPattern(image, repetition) {
          return this._context.createPattern(image, repetition);
        }
        createRadialGradient(x0, y0, r0, x1, y1, r1) {
          return this._context.createRadialGradient(x0, y0, r0, x1, y1, r1);
        }
        drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
          const a = arguments, _context = this._context;
          if (a.length === 3) {
            _context.drawImage(image, sx, sy);
          } else if (a.length === 5) {
            _context.drawImage(image, sx, sy, sWidth, sHeight);
          } else if (a.length === 9) {
            _context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          }
        }
        ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
          this._context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
        }
        isPointInPath(x, y, path, fillRule) {
          if (path) {
            return this._context.isPointInPath(path, x, y, fillRule);
          }
          return this._context.isPointInPath(x, y, fillRule);
        }
        fill(...args) {
          this._context.fill.apply(this._context, args);
        }
        fillRect(x, y, width, height) {
          this._context.fillRect(x, y, width, height);
        }
        strokeRect(x, y, width, height) {
          this._context.strokeRect(x, y, width, height);
        }
        fillText(text, x, y, maxWidth) {
          if (maxWidth) {
            this._context.fillText(text, x, y, maxWidth);
          } else {
            this._context.fillText(text, x, y);
          }
        }
        measureText(text) {
          return this._context.measureText(text);
        }
        getImageData(sx, sy, sw, sh) {
          return this._context.getImageData(sx, sy, sw, sh);
        }
        lineTo(x, y) {
          this._context.lineTo(x, y);
        }
        moveTo(x, y) {
          this._context.moveTo(x, y);
        }
        rect(x, y, width, height) {
          this._context.rect(x, y, width, height);
        }
        roundRect(x, y, width, height, radii) {
          this._context.roundRect(x, y, width, height, radii);
        }
        putImageData(imageData, dx, dy) {
          this._context.putImageData(imageData, dx, dy);
        }
        quadraticCurveTo(cpx, cpy, x, y) {
          this._context.quadraticCurveTo(cpx, cpy, x, y);
        }
        restore() {
          this._context.restore();
        }
        rotate(angle) {
          this._context.rotate(angle);
        }
        save() {
          this._context.save();
        }
        scale(x, y) {
          this._context.scale(x, y);
        }
        setLineDash(segments) {
          if (this._context.setLineDash) {
            this._context.setLineDash(segments);
          } else if ("mozDash" in this._context) {
            this._context["mozDash"] = segments;
          } else if ("webkitLineDash" in this._context) {
            this._context["webkitLineDash"] = segments;
          }
        }
        getLineDash() {
          return this._context.getLineDash();
        }
        setTransform(a, b, c, d, e, f) {
          this._context.setTransform(a, b, c, d, e, f);
        }
        stroke(path2d) {
          if (path2d) {
            this._context.stroke(path2d);
          } else {
            this._context.stroke();
          }
        }
        strokeText(text, x, y, maxWidth) {
          this._context.strokeText(text, x, y, maxWidth);
        }
        transform(a, b, c, d, e, f) {
          this._context.transform(a, b, c, d, e, f);
        }
        translate(x, y) {
          this._context.translate(x, y);
        }
        _enableTrace() {
          let that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
          const func = function(methodName) {
            let origMethod = that[methodName], ret;
            that[methodName] = function() {
              args = simplifyArray(Array.prototype.slice.call(arguments, 0));
              ret = origMethod.apply(that, arguments);
              that._trace({
                method: methodName,
                args
              });
              return ret;
            };
          };
          for (n = 0; n < len; n++) {
            func(CONTEXT_METHODS[n]);
          }
          that.setAttr = function() {
            origSetter.apply(that, arguments);
            const prop = arguments[0];
            let val = arguments[1];
            if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") {
              val = val / this.canvas.getPixelRatio();
            }
            that._trace({
              property: prop,
              val
            });
          };
        }
        _applyGlobalCompositeOperation(node) {
          const op = node.attrs.globalCompositeOperation;
          const def = !op || op === "source-over";
          if (!def) {
            this.setAttr("globalCompositeOperation", op);
          }
        }
      };
      exports2.Context = Context;
      CONTEXT_PROPERTIES.forEach(function(prop) {
        Object.defineProperty(Context.prototype, prop, {
          get() {
            return this._context[prop];
          },
          set(val) {
            this._context[prop] = val;
          }
        });
      });
      var SceneContext = class extends Context {
        constructor(canvas, { willReadFrequently = false } = {}) {
          super(canvas);
          this._context = canvas._canvas.getContext("2d", {
            willReadFrequently
          });
        }
        _fillColor(shape) {
          const fill = shape.fill();
          this.setAttr("fillStyle", fill);
          shape._fillFunc(this);
        }
        _fillPattern(shape) {
          this.setAttr("fillStyle", shape._getFillPattern());
          shape._fillFunc(this);
        }
        _fillLinearGradient(shape) {
          const grd = shape._getLinearGradient();
          if (grd) {
            this.setAttr("fillStyle", grd);
            shape._fillFunc(this);
          }
        }
        _fillRadialGradient(shape) {
          const grd = shape._getRadialGradient();
          if (grd) {
            this.setAttr("fillStyle", grd);
            shape._fillFunc(this);
          }
        }
        _fill(shape) {
          const hasColor = shape.fill(), fillPriority = shape.getFillPriority();
          if (hasColor && fillPriority === "color") {
            this._fillColor(shape);
            return;
          }
          const hasPattern = shape.getFillPatternImage();
          if (hasPattern && fillPriority === "pattern") {
            this._fillPattern(shape);
            return;
          }
          const hasLinearGradient = shape.getFillLinearGradientColorStops();
          if (hasLinearGradient && fillPriority === "linear-gradient") {
            this._fillLinearGradient(shape);
            return;
          }
          const hasRadialGradient = shape.getFillRadialGradientColorStops();
          if (hasRadialGradient && fillPriority === "radial-gradient") {
            this._fillRadialGradient(shape);
            return;
          }
          if (hasColor) {
            this._fillColor(shape);
          } else if (hasPattern) {
            this._fillPattern(shape);
          } else if (hasLinearGradient) {
            this._fillLinearGradient(shape);
          } else if (hasRadialGradient) {
            this._fillRadialGradient(shape);
          }
        }
        _strokeLinearGradient(shape) {
          const start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
          if (colorStops) {
            for (let n = 0; n < colorStops.length; n += 2) {
              grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            this.setAttr("strokeStyle", grd);
          }
        }
        _stroke(shape) {
          const dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
          if (shape.hasStroke()) {
            if (!strokeScaleEnabled) {
              this.save();
              const pixelRatio = this.getCanvas().getPixelRatio();
              this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            if (dash && shape.dashEnabled()) {
              this.setLineDash(dash);
              this.setAttr("lineDashOffset", shape.dashOffset());
            }
            this.setAttr("lineWidth", shape.strokeWidth());
            if (!shape.getShadowForStrokeEnabled()) {
              this.setAttr("shadowColor", "rgba(0,0,0,0)");
            }
            const hasLinearGradient = shape.getStrokeLinearGradientColorStops();
            if (hasLinearGradient) {
              this._strokeLinearGradient(shape);
            } else {
              this.setAttr("strokeStyle", shape.stroke());
            }
            shape._strokeFunc(this);
            if (!strokeScaleEnabled) {
              this.restore();
            }
          }
        }
        _applyShadow(shape) {
          var _a, _b, _c;
          const color = (_a = shape.getShadowRGBA()) !== null && _a !== void 0 ? _a : "black", blur = (_b = shape.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
            x: 0,
            y: 0
          }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
          this.setAttr("shadowColor", color);
          this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
          this.setAttr("shadowOffsetX", offset.x * scaleX);
          this.setAttr("shadowOffsetY", offset.y * scaleY);
        }
      };
      exports2.SceneContext = SceneContext;
      var HitContext = class extends Context {
        constructor(canvas) {
          super(canvas);
          this._context = canvas._canvas.getContext("2d", {
            willReadFrequently: true
          });
        }
        _fill(shape) {
          this.save();
          this.setAttr("fillStyle", shape.colorKey);
          shape._fillFuncHit(this);
          this.restore();
        }
        strokeShape(shape) {
          if (shape.hasHitStroke()) {
            this._stroke(shape);
          }
        }
        _stroke(shape) {
          if (shape.hasHitStroke()) {
            const strokeScaleEnabled = shape.getStrokeScaleEnabled();
            if (!strokeScaleEnabled) {
              this.save();
              const pixelRatio = this.getCanvas().getPixelRatio();
              this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            const hitStrokeWidth = shape.hitStrokeWidth();
            const strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
            this.setAttr("lineWidth", strokeWidth);
            this.setAttr("strokeStyle", shape.colorKey);
            shape._strokeFuncHit(this);
            if (!strokeScaleEnabled) {
              this.restore();
            }
          }
        }
      };
      exports2.HitContext = HitContext;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Canvas.js
  var require_Canvas = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Canvas.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.HitCanvas = exports2.SceneCanvas = exports2.Canvas = void 0;
      var Util_1 = require_Util();
      var Context_1 = require_Context();
      var Global_1 = require_Global();
      var _pixelRatio;
      function getDevicePixelRatio() {
        if (_pixelRatio) {
          return _pixelRatio;
        }
        const canvas = Util_1.Util.createCanvasElement();
        const context = canvas.getContext("2d");
        _pixelRatio = (function() {
          const devicePixelRatio = Global_1.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
          return devicePixelRatio / backingStoreRatio;
        })();
        Util_1.Util.releaseCanvas(canvas);
        return _pixelRatio;
      }
      var Canvas = class {
        constructor(config) {
          this.pixelRatio = 1;
          this.width = 0;
          this.height = 0;
          this.isCache = false;
          const conf = config || {};
          const pixelRatio = conf.pixelRatio || Global_1.Konva.pixelRatio || getDevicePixelRatio();
          this.pixelRatio = pixelRatio;
          this._canvas = Util_1.Util.createCanvasElement();
          this._canvas.style.padding = "0";
          this._canvas.style.margin = "0";
          this._canvas.style.border = "0";
          this._canvas.style.background = "transparent";
          this._canvas.style.position = "absolute";
          this._canvas.style.top = "0";
          this._canvas.style.left = "0";
        }
        getContext() {
          return this.context;
        }
        getPixelRatio() {
          return this.pixelRatio;
        }
        setPixelRatio(pixelRatio) {
          const previousRatio = this.pixelRatio;
          this.pixelRatio = pixelRatio;
          this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
        }
        setWidth(width) {
          this.width = this._canvas.width = width * this.pixelRatio;
          this._canvas.style.width = width + "px";
          const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
          _context.scale(pixelRatio, pixelRatio);
        }
        setHeight(height) {
          this.height = this._canvas.height = height * this.pixelRatio;
          this._canvas.style.height = height + "px";
          const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
          _context.scale(pixelRatio, pixelRatio);
        }
        getWidth() {
          return this.width;
        }
        getHeight() {
          return this.height;
        }
        setSize(width, height) {
          this.setWidth(width || 0);
          this.setHeight(height || 0);
        }
        toDataURL(mimeType, quality) {
          try {
            return this._canvas.toDataURL(mimeType, quality);
          } catch (e) {
            try {
              return this._canvas.toDataURL();
            } catch (err) {
              Util_1.Util.error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
              return "";
            }
          }
        }
      };
      exports2.Canvas = Canvas;
      var SceneCanvas = class extends Canvas {
        constructor(config = { width: 0, height: 0, willReadFrequently: false }) {
          super(config);
          this.context = new Context_1.SceneContext(this, {
            willReadFrequently: config.willReadFrequently
          });
          this.setSize(config.width, config.height);
        }
      };
      exports2.SceneCanvas = SceneCanvas;
      var HitCanvas = class extends Canvas {
        constructor(config = { width: 0, height: 0 }) {
          super(config);
          this.hitCanvas = true;
          this.context = new Context_1.HitContext(this);
          this.setSize(config.width, config.height);
        }
      };
      exports2.HitCanvas = HitCanvas;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/DragAndDrop.js
  var require_DragAndDrop = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/DragAndDrop.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.DD = void 0;
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      exports2.DD = {
        get isDragging() {
          let flag = false;
          exports2.DD._dragElements.forEach((elem) => {
            if (elem.dragStatus === "dragging") {
              flag = true;
            }
          });
          return flag;
        },
        justDragged: false,
        get node() {
          let node;
          exports2.DD._dragElements.forEach((elem) => {
            node = elem.node;
          });
          return node;
        },
        _dragElements: /* @__PURE__ */ new Map(),
        _drag(evt) {
          const nodesToFireEvents = [];
          exports2.DD._dragElements.forEach((elem, key) => {
            const { node } = elem;
            const stage = node.getStage();
            stage.setPointersPositions(evt);
            if (elem.pointerId === void 0) {
              elem.pointerId = Util_1.Util._getFirstPointerId(evt);
            }
            const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
            if (!pos) {
              return;
            }
            if (elem.dragStatus !== "dragging") {
              const dragDistance = node.dragDistance();
              const distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
              if (distance < dragDistance) {
                return;
              }
              node.startDrag({ evt });
              if (!node.isDragging()) {
                return;
              }
            }
            node._setDragPosition(evt, elem);
            nodesToFireEvents.push(node);
          });
          nodesToFireEvents.forEach((node) => {
            node.fire("dragmove", {
              type: "dragmove",
              target: node,
              evt
            }, true);
          });
        },
        _endDragBefore(evt) {
          const drawNodes = [];
          exports2.DD._dragElements.forEach((elem) => {
            const { node } = elem;
            const stage = node.getStage();
            if (evt) {
              stage.setPointersPositions(evt);
            }
            const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
            if (!pos) {
              return;
            }
            if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
              exports2.DD.justDragged = true;
              Global_1.Konva._mouseListenClick = false;
              Global_1.Konva._touchListenClick = false;
              Global_1.Konva._pointerListenClick = false;
              elem.dragStatus = "stopped";
            }
            const drawNode = elem.node.getLayer() || elem.node instanceof Global_1.Konva["Stage"] && elem.node;
            if (drawNode && drawNodes.indexOf(drawNode) === -1) {
              drawNodes.push(drawNode);
            }
          });
          drawNodes.forEach((drawNode) => {
            drawNode.draw();
          });
        },
        _endDragAfter(evt) {
          exports2.DD._dragElements.forEach((elem, key) => {
            if (elem.dragStatus === "stopped") {
              elem.node.fire("dragend", {
                type: "dragend",
                target: elem.node,
                evt
              }, true);
            }
            if (elem.dragStatus !== "dragging") {
              exports2.DD._dragElements.delete(key);
            }
          });
        }
      };
      if (Global_1.Konva.isBrowser) {
        window.addEventListener("mouseup", exports2.DD._endDragBefore, true);
        window.addEventListener("touchend", exports2.DD._endDragBefore, true);
        window.addEventListener("touchcancel", exports2.DD._endDragBefore, true);
        window.addEventListener("mousemove", exports2.DD._drag);
        window.addEventListener("touchmove", exports2.DD._drag);
        window.addEventListener("mouseup", exports2.DD._endDragAfter, false);
        window.addEventListener("touchend", exports2.DD._endDragAfter, false);
        window.addEventListener("touchcancel", exports2.DD._endDragAfter, false);
      }
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Validators.js
  var require_Validators = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Validators.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RGBComponent = RGBComponent;
      exports2.alphaComponent = alphaComponent;
      exports2.getNumberValidator = getNumberValidator;
      exports2.getNumberOrArrayOfNumbersValidator = getNumberOrArrayOfNumbersValidator;
      exports2.getNumberOrAutoValidator = getNumberOrAutoValidator;
      exports2.getStringValidator = getStringValidator;
      exports2.getStringOrGradientValidator = getStringOrGradientValidator;
      exports2.getFunctionValidator = getFunctionValidator;
      exports2.getNumberArrayValidator = getNumberArrayValidator;
      exports2.getBooleanValidator = getBooleanValidator;
      exports2.getComponentValidator = getComponentValidator;
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      function _formatValue(val) {
        if (Util_1.Util._isString(val)) {
          return '"' + val + '"';
        }
        if (Object.prototype.toString.call(val) === "[object Number]") {
          return val;
        }
        if (Util_1.Util._isBoolean(val)) {
          return val;
        }
        return Object.prototype.toString.call(val);
      }
      function RGBComponent(val) {
        if (val > 255) {
          return 255;
        } else if (val < 0) {
          return 0;
        }
        return Math.round(val);
      }
      function alphaComponent(val) {
        if (val > 1) {
          return 1;
        } else if (val < 1e-4) {
          return 1e-4;
        }
        return val;
      }
      function getNumberValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            if (!Util_1.Util._isNumber(val)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
            }
            return val;
          };
        }
      }
      function getNumberOrArrayOfNumbersValidator(noOfElements) {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            let isNumber = Util_1.Util._isNumber(val);
            let isValidArray = Util_1.Util._isArray(val) && val.length == noOfElements;
            if (!isNumber && !isValidArray) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ")");
            }
            return val;
          };
        }
      }
      function getNumberOrAutoValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            const isNumber = Util_1.Util._isNumber(val);
            const isAuto = val === "auto";
            if (!(isNumber || isAuto)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
            }
            return val;
          };
        }
      }
      function getStringValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            if (!Util_1.Util._isString(val)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
            }
            return val;
          };
        }
      }
      function getStringOrGradientValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            const isString = Util_1.Util._isString(val);
            const isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]" || val && val["addColorStop"];
            if (!(isString || isGradient)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
            }
            return val;
          };
        }
      }
      function getFunctionValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            if (!Util_1.Util._isFunction(val)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
            }
            return val;
          };
        }
      }
      function getNumberArrayValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            const TypedArray = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
            if (TypedArray && val instanceof TypedArray) {
              return val;
            }
            if (!Util_1.Util._isArray(val)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
            } else {
              val.forEach(function(item) {
                if (!Util_1.Util._isNumber(item)) {
                  Util_1.Util.warn('"' + attr + '" attribute has non numeric element ' + item + ". Make sure that all elements are numbers.");
                }
              });
            }
            return val;
          };
        }
      }
      function getBooleanValidator() {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            const isBool = val === true || val === false;
            if (!isBool) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
            }
            return val;
          };
        }
      }
      function getComponentValidator(components) {
        if (Global_1.Konva.isUnminified) {
          return function(val, attr) {
            if (val === void 0 || val === null) {
              return val;
            }
            if (!Util_1.Util.isObject(val)) {
              Util_1.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
            }
            return val;
          };
        }
      }
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Factory.js
  var require_Factory = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Factory.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Factory = void 0;
      var Util_1 = require_Util();
      var Validators_1 = require_Validators();
      var GET = "get";
      var SET = "set";
      exports2.Factory = {
        addGetterSetter(constructor, attr, def, validator, after) {
          exports2.Factory.addGetter(constructor, attr, def);
          exports2.Factory.addSetter(constructor, attr, validator, after);
          exports2.Factory.addOverloadedGetterSetter(constructor, attr);
        },
        addGetter(constructor, attr, def) {
          const method = GET + Util_1.Util._capitalize(attr);
          constructor.prototype[method] = constructor.prototype[method] || function() {
            const val = this.attrs[attr];
            return val === void 0 ? def : val;
          };
        },
        addSetter(constructor, attr, validator, after) {
          const method = SET + Util_1.Util._capitalize(attr);
          if (!constructor.prototype[method]) {
            exports2.Factory.overWriteSetter(constructor, attr, validator, after);
          }
        },
        overWriteSetter(constructor, attr, validator, after) {
          const method = SET + Util_1.Util._capitalize(attr);
          constructor.prototype[method] = function(val) {
            if (validator && val !== void 0 && val !== null) {
              val = validator.call(this, val, attr);
            }
            this._setAttr(attr, val);
            if (after) {
              after.call(this);
            }
            return this;
          };
        },
        addComponentsGetterSetter(constructor, attr, components, validator, after) {
          const len = components.length, capitalize = Util_1.Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr);
          constructor.prototype[getter] = function() {
            const ret = {};
            for (let n = 0; n < len; n++) {
              const component = components[n];
              ret[component] = this.getAttr(attr + capitalize(component));
            }
            return ret;
          };
          const basicValidator = (0, Validators_1.getComponentValidator)(components);
          constructor.prototype[setter] = function(val) {
            const oldVal = this.attrs[attr];
            if (validator) {
              val = validator.call(this, val, attr);
            }
            if (basicValidator) {
              basicValidator.call(this, val, attr);
            }
            for (const key in val) {
              if (!val.hasOwnProperty(key)) {
                continue;
              }
              this._setAttr(attr + capitalize(key), val[key]);
            }
            if (!val) {
              components.forEach((component) => {
                this._setAttr(attr + capitalize(component), void 0);
              });
            }
            this._fireChangeEvent(attr, oldVal, val);
            if (after) {
              after.call(this);
            }
            return this;
          };
          exports2.Factory.addOverloadedGetterSetter(constructor, attr);
        },
        addOverloadedGetterSetter(constructor, attr) {
          const capitalizedAttr = Util_1.Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
          constructor.prototype[attr] = function() {
            if (arguments.length) {
              this[setter](arguments[0]);
              return this;
            }
            return this[getter]();
          };
        },
        addDeprecatedGetterSetter(constructor, attr, def, validator) {
          Util_1.Util.error("Adding deprecated " + attr);
          const method = GET + Util_1.Util._capitalize(attr);
          const message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
          constructor.prototype[method] = function() {
            Util_1.Util.error(message);
            const val = this.attrs[attr];
            return val === void 0 ? def : val;
          };
          exports2.Factory.addSetter(constructor, attr, validator, function() {
            Util_1.Util.error(message);
          });
          exports2.Factory.addOverloadedGetterSetter(constructor, attr);
        },
        backCompat(constructor, methods) {
          Util_1.Util.each(methods, function(oldMethodName, newMethodName) {
            const method = constructor.prototype[newMethodName];
            const oldGetter = GET + Util_1.Util._capitalize(oldMethodName);
            const oldSetter = SET + Util_1.Util._capitalize(oldMethodName);
            function deprecated() {
              method.apply(this, arguments);
              Util_1.Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
            }
            constructor.prototype[oldMethodName] = deprecated;
            constructor.prototype[oldGetter] = deprecated;
            constructor.prototype[oldSetter] = deprecated;
          });
        },
        afterSetFilter() {
          this._filterUpToDate = false;
        }
      };
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Node.js
  var require_Node = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Node.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Node = void 0;
      var Canvas_1 = require_Canvas();
      var DragAndDrop_1 = require_DragAndDrop();
      var Factory_1 = require_Factory();
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      var Validators_1 = require_Validators();
      var ABSOLUTE_OPACITY = "absoluteOpacity";
      var ALL_LISTENERS = "allEventListeners";
      var ABSOLUTE_TRANSFORM = "absoluteTransform";
      var ABSOLUTE_SCALE = "absoluteScale";
      var CANVAS = "canvas";
      var CHANGE = "Change";
      var CHILDREN = "children";
      var KONVA = "konva";
      var LISTENING = "listening";
      var MOUSEENTER = "mouseenter";
      var MOUSELEAVE = "mouseleave";
      var POINTERENTER = "pointerenter";
      var POINTERLEAVE = "pointerleave";
      var TOUCHENTER = "touchenter";
      var TOUCHLEAVE = "touchleave";
      var SET = "set";
      var SHAPE = "Shape";
      var SPACE = " ";
      var STAGE = "stage";
      var TRANSFORM = "transform";
      var UPPER_STAGE = "Stage";
      var VISIBLE = "visible";
      var TRANSFORM_CHANGE_STR = [
        "xChange.konva",
        "yChange.konva",
        "scaleXChange.konva",
        "scaleYChange.konva",
        "skewXChange.konva",
        "skewYChange.konva",
        "rotationChange.konva",
        "offsetXChange.konva",
        "offsetYChange.konva",
        "transformsEnabledChange.konva"
      ].join(SPACE);
      var idCounter = 1;
      var Node2 = class _Node {
        constructor(config) {
          this._id = idCounter++;
          this.eventListeners = {};
          this.attrs = {};
          this.index = 0;
          this._allEventListeners = null;
          this.parent = null;
          this._cache = /* @__PURE__ */ new Map();
          this._attachedDepsListeners = /* @__PURE__ */ new Map();
          this._lastPos = null;
          this._batchingTransformChange = false;
          this._needClearTransformCache = false;
          this._filterUpToDate = false;
          this._isUnderCache = false;
          this._dragEventId = null;
          this._shouldFireChangeEvents = false;
          this.setAttrs(config);
          this._shouldFireChangeEvents = true;
        }
        hasChildren() {
          return false;
        }
        _clearCache(attr) {
          if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) {
            this._cache.get(attr).dirty = true;
          } else if (attr) {
            this._cache.delete(attr);
          } else {
            this._cache.clear();
          }
        }
        _getCache(attr, privateGetter) {
          let cache = this._cache.get(attr);
          const isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
          const invalid = cache === void 0 || isTransform && cache.dirty === true;
          if (invalid) {
            cache = privateGetter.call(this);
            this._cache.set(attr, cache);
          }
          return cache;
        }
        _calculate(name, deps, getter) {
          if (!this._attachedDepsListeners.get(name)) {
            const depsString = deps.map((dep) => dep + "Change.konva").join(SPACE);
            this.on(depsString, () => {
              this._clearCache(name);
            });
            this._attachedDepsListeners.set(name, true);
          }
          return this._getCache(name, getter);
        }
        _getCanvasCache() {
          return this._cache.get(CANVAS);
        }
        _clearSelfAndDescendantCache(attr) {
          this._clearCache(attr);
          if (attr === ABSOLUTE_TRANSFORM) {
            this.fire("absoluteTransformChange");
          }
        }
        clearCache() {
          if (this._cache.has(CANVAS)) {
            const { scene, filter, hit, buffer } = this._cache.get(CANVAS);
            Util_1.Util.releaseCanvas(scene, filter, hit, buffer);
            this._cache.delete(CANVAS);
          }
          this._clearSelfAndDescendantCache();
          this._requestDraw();
          return this;
        }
        cache(config) {
          const conf = config || {};
          let rect = {};
          if (conf.x === void 0 || conf.y === void 0 || conf.width === void 0 || conf.height === void 0) {
            rect = this.getClientRect({
              skipTransform: true,
              relativeTo: this.getParent() || void 0
            });
          }
          let width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === void 0 ? Math.floor(rect.x) : conf.x, y = conf.y === void 0 ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
          if (!width || !height) {
            Util_1.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
            return;
          }
          const extraPaddingX = Math.abs(Math.round(rect.x) - x) > 0.5 ? 1 : 0;
          const extraPaddingY = Math.abs(Math.round(rect.y) - y) > 0.5 ? 1 : 0;
          width += offset * 2 + extraPaddingX;
          height += offset * 2 + extraPaddingY;
          x -= offset;
          y -= offset;
          const cachedSceneCanvas = new Canvas_1.SceneCanvas({
            pixelRatio,
            width,
            height
          }), cachedFilterCanvas = new Canvas_1.SceneCanvas({
            pixelRatio,
            width: 0,
            height: 0,
            willReadFrequently: true
          }), cachedHitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: hitCanvasPixelRatio,
            width,
            height
          }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
          const bufferCanvas = new Canvas_1.SceneCanvas({
            width: cachedSceneCanvas.width / cachedSceneCanvas.pixelRatio + Math.abs(x),
            height: cachedSceneCanvas.height / cachedSceneCanvas.pixelRatio + Math.abs(y),
            pixelRatio: cachedSceneCanvas.pixelRatio
          }), bufferContext = bufferCanvas.getContext();
          cachedHitCanvas.isCache = true;
          cachedSceneCanvas.isCache = true;
          this._cache.delete(CANVAS);
          this._filterUpToDate = false;
          if (conf.imageSmoothingEnabled === false) {
            cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
            cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
          }
          sceneContext.save();
          hitContext.save();
          bufferContext.save();
          sceneContext.translate(-x, -y);
          hitContext.translate(-x, -y);
          bufferContext.translate(-x, -y);
          bufferCanvas.x = x;
          bufferCanvas.y = y;
          this._isUnderCache = true;
          this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
          this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
          this.drawScene(cachedSceneCanvas, this, bufferCanvas);
          this.drawHit(cachedHitCanvas, this);
          this._isUnderCache = false;
          sceneContext.restore();
          hitContext.restore();
          if (drawBorder) {
            sceneContext.save();
            sceneContext.beginPath();
            sceneContext.rect(0, 0, width, height);
            sceneContext.closePath();
            sceneContext.setAttr("strokeStyle", "red");
            sceneContext.setAttr("lineWidth", 5);
            sceneContext.stroke();
            sceneContext.restore();
          }
          this._cache.set(CANVAS, {
            scene: cachedSceneCanvas,
            filter: cachedFilterCanvas,
            hit: cachedHitCanvas,
            buffer: bufferCanvas,
            x,
            y
          });
          this._requestDraw();
          return this;
        }
        isCached() {
          return this._cache.has(CANVAS);
        }
        getClientRect(config) {
          throw new Error('abstract "getClientRect" method call');
        }
        _transformedRect(rect, top) {
          const points = [
            { x: rect.x, y: rect.y },
            { x: rect.x + rect.width, y: rect.y },
            { x: rect.x + rect.width, y: rect.y + rect.height },
            { x: rect.x, y: rect.y + rect.height }
          ];
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          const trans = this.getAbsoluteTransform(top);
          points.forEach(function(point) {
            const transformed = trans.point(point);
            if (minX === void 0) {
              minX = maxX = transformed.x;
              minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
          });
          return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
          };
        }
        _drawCachedSceneCanvas(context) {
          context.save();
          context._applyOpacity(this);
          context._applyGlobalCompositeOperation(this);
          const canvasCache = this._getCanvasCache();
          context.translate(canvasCache.x, canvasCache.y);
          const cacheCanvas = this._getCachedSceneCanvas();
          const ratio = cacheCanvas.pixelRatio;
          context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
          context.restore();
        }
        _drawCachedHitCanvas(context) {
          const canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
          context.save();
          context.translate(canvasCache.x, canvasCache.y);
          context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
          context.restore();
        }
        _getCachedSceneCanvas() {
          let filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
          if (filters) {
            if (!this._filterUpToDate) {
              const ratio = sceneCanvas.pixelRatio;
              filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
              try {
                len = filters.length;
                filterContext.clear();
                filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
                imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
                for (n = 0; n < len; n++) {
                  filter = filters[n];
                  if (typeof filter !== "function") {
                    Util_1.Util.error("Filter should be type of function, but got " + typeof filter + " instead. Please check correct filters");
                    continue;
                  }
                  filter.call(this, imageData);
                  filterContext.putImageData(imageData, 0, 0);
                }
              } catch (e) {
                Util_1.Util.error("Unable to apply filter. " + e.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
              }
              this._filterUpToDate = true;
            }
            return filterCanvas;
          }
          return sceneCanvas;
        }
        on(evtStr, handler) {
          if (this._cache) {
            this._cache.delete(ALL_LISTENERS);
          }
          if (arguments.length === 3) {
            return this._delegate.apply(this, arguments);
          }
          const events = evtStr.split(SPACE);
          for (let n = 0; n < events.length; n++) {
            const event = events[n];
            const parts = event.split(".");
            const baseEvent = parts[0];
            const name = parts[1] || "";
            if (!this.eventListeners[baseEvent]) {
              this.eventListeners[baseEvent] = [];
            }
            this.eventListeners[baseEvent].push({ name, handler });
          }
          return this;
        }
        off(evtStr, callback) {
          let events = (evtStr || "").split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
          this._cache && this._cache.delete(ALL_LISTENERS);
          if (!evtStr) {
            for (t in this.eventListeners) {
              this._off(t);
            }
          }
          for (n = 0; n < len; n++) {
            event = events[n];
            parts = event.split(".");
            baseEvent = parts[0];
            name = parts[1];
            if (baseEvent) {
              if (this.eventListeners[baseEvent]) {
                this._off(baseEvent, name, callback);
              }
            } else {
              for (t in this.eventListeners) {
                this._off(t, name, callback);
              }
            }
          }
          return this;
        }
        dispatchEvent(evt) {
          const e = {
            target: this,
            type: evt.type,
            evt
          };
          this.fire(evt.type, e);
          return this;
        }
        addEventListener(type, handler) {
          this.on(type, function(evt) {
            handler.call(this, evt.evt);
          });
          return this;
        }
        removeEventListener(type) {
          this.off(type);
          return this;
        }
        _delegate(event, selector, handler) {
          const stopNode = this;
          this.on(event, function(evt) {
            const targets = evt.target.findAncestors(selector, true, stopNode);
            for (let i = 0; i < targets.length; i++) {
              evt = Util_1.Util.cloneObject(evt);
              evt.currentTarget = targets[i];
              handler.call(targets[i], evt);
            }
          });
        }
        remove() {
          if (this.isDragging()) {
            this.stopDrag();
          }
          DragAndDrop_1.DD._dragElements.delete(this._id);
          this._remove();
          return this;
        }
        _clearCaches() {
          this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
          this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
          this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
          this._clearSelfAndDescendantCache(STAGE);
          this._clearSelfAndDescendantCache(VISIBLE);
          this._clearSelfAndDescendantCache(LISTENING);
        }
        _remove() {
          this._clearCaches();
          const parent = this.getParent();
          if (parent && parent.children) {
            parent.children.splice(this.index, 1);
            parent._setChildrenIndices();
            this.parent = null;
          }
        }
        destroy() {
          this.remove();
          this.clearCache();
          return this;
        }
        getAttr(attr) {
          const method = "get" + Util_1.Util._capitalize(attr);
          if (Util_1.Util._isFunction(this[method])) {
            return this[method]();
          }
          return this.attrs[attr];
        }
        getAncestors() {
          let parent = this.getParent(), ancestors = [];
          while (parent) {
            ancestors.push(parent);
            parent = parent.getParent();
          }
          return ancestors;
        }
        getAttrs() {
          return this.attrs || {};
        }
        setAttrs(config) {
          this._batchTransformChanges(() => {
            let key, method;
            if (!config) {
              return this;
            }
            for (key in config) {
              if (key === CHILDREN) {
                continue;
              }
              method = SET + Util_1.Util._capitalize(key);
              if (Util_1.Util._isFunction(this[method])) {
                this[method](config[key]);
              } else {
                this._setAttr(key, config[key]);
              }
            }
          });
          return this;
        }
        isListening() {
          return this._getCache(LISTENING, this._isListening);
        }
        _isListening(relativeTo) {
          const listening = this.listening();
          if (!listening) {
            return false;
          }
          const parent = this.getParent();
          if (parent && parent !== relativeTo && this !== relativeTo) {
            return parent._isListening(relativeTo);
          } else {
            return true;
          }
        }
        isVisible() {
          return this._getCache(VISIBLE, this._isVisible);
        }
        _isVisible(relativeTo) {
          const visible = this.visible();
          if (!visible) {
            return false;
          }
          const parent = this.getParent();
          if (parent && parent !== relativeTo && this !== relativeTo) {
            return parent._isVisible(relativeTo);
          } else {
            return true;
          }
        }
        shouldDrawHit(top, skipDragCheck = false) {
          if (top) {
            return this._isVisible(top) && this._isListening(top);
          }
          const layer = this.getLayer();
          let layerUnderDrag = false;
          DragAndDrop_1.DD._dragElements.forEach((elem) => {
            if (elem.dragStatus !== "dragging") {
              return;
            } else if (elem.node.nodeType === "Stage") {
              layerUnderDrag = true;
            } else if (elem.node.getLayer() === layer) {
              layerUnderDrag = true;
            }
          });
          const dragSkip = !skipDragCheck && !Global_1.Konva.hitOnDragEnabled && (layerUnderDrag || Global_1.Konva.isTransforming());
          return this.isListening() && this.isVisible() && !dragSkip;
        }
        show() {
          this.visible(true);
          return this;
        }
        hide() {
          this.visible(false);
          return this;
        }
        getZIndex() {
          return this.index || 0;
        }
        getAbsoluteZIndex() {
          let depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
          function addChildren(children) {
            nodes = [];
            len = children.length;
            for (n = 0; n < len; n++) {
              child = children[n];
              index++;
              if (child.nodeType !== SHAPE) {
                nodes = nodes.concat(child.getChildren().slice());
              }
              if (child._id === that._id) {
                n = len;
              }
            }
            if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
              addChildren(nodes);
            }
          }
          const stage = this.getStage();
          if (that.nodeType !== UPPER_STAGE && stage) {
            addChildren(stage.getChildren());
          }
          return index;
        }
        getDepth() {
          let depth = 0, parent = this.parent;
          while (parent) {
            depth++;
            parent = parent.parent;
          }
          return depth;
        }
        _batchTransformChanges(func) {
          this._batchingTransformChange = true;
          func();
          this._batchingTransformChange = false;
          if (this._needClearTransformCache) {
            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
          }
          this._needClearTransformCache = false;
        }
        setPosition(pos) {
          this._batchTransformChanges(() => {
            this.x(pos.x);
            this.y(pos.y);
          });
          return this;
        }
        getPosition() {
          return {
            x: this.x(),
            y: this.y()
          };
        }
        getRelativePointerPosition() {
          const stage = this.getStage();
          if (!stage) {
            return null;
          }
          const pos = stage.getPointerPosition();
          if (!pos) {
            return null;
          }
          const transform = this.getAbsoluteTransform().copy();
          transform.invert();
          return transform.point(pos);
        }
        getAbsolutePosition(top) {
          let haveCachedParent = false;
          let parent = this.parent;
          while (parent) {
            if (parent.isCached()) {
              haveCachedParent = true;
              break;
            }
            parent = parent.parent;
          }
          if (haveCachedParent && !top) {
            top = true;
          }
          const absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Util_1.Transform(), offset = this.offset();
          absoluteTransform.m = absoluteMatrix.slice();
          absoluteTransform.translate(offset.x, offset.y);
          return absoluteTransform.getTranslation();
        }
        setAbsolutePosition(pos) {
          const { x, y, ...origTrans } = this._clearTransform();
          this.attrs.x = x;
          this.attrs.y = y;
          this._clearCache(TRANSFORM);
          const it = this._getAbsoluteTransform().copy();
          it.invert();
          it.translate(pos.x, pos.y);
          pos = {
            x: this.attrs.x + it.getTranslation().x,
            y: this.attrs.y + it.getTranslation().y
          };
          this._setTransform(origTrans);
          this.setPosition({ x: pos.x, y: pos.y });
          this._clearCache(TRANSFORM);
          this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
          return this;
        }
        _setTransform(trans) {
          let key;
          for (key in trans) {
            this.attrs[key] = trans[key];
          }
        }
        _clearTransform() {
          const trans = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY()
          };
          this.attrs.x = 0;
          this.attrs.y = 0;
          this.attrs.rotation = 0;
          this.attrs.scaleX = 1;
          this.attrs.scaleY = 1;
          this.attrs.offsetX = 0;
          this.attrs.offsetY = 0;
          this.attrs.skewX = 0;
          this.attrs.skewY = 0;
          return trans;
        }
        move(change) {
          let changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
          if (changeX !== void 0) {
            x += changeX;
          }
          if (changeY !== void 0) {
            y += changeY;
          }
          this.setPosition({ x, y });
          return this;
        }
        _eachAncestorReverse(func, top) {
          let family = [], parent = this.getParent(), len, n;
          if (top && top._id === this._id) {
            return;
          }
          family.unshift(this);
          while (parent && (!top || parent._id !== top._id)) {
            family.unshift(parent);
            parent = parent.parent;
          }
          len = family.length;
          for (n = 0; n < len; n++) {
            func(family[n]);
          }
        }
        rotate(theta) {
          this.rotation(this.rotation() + theta);
          return this;
        }
        moveToTop() {
          if (!this.parent) {
            Util_1.Util.warn("Node has no parent. moveToTop function is ignored.");
            return false;
          }
          const index = this.index, len = this.parent.getChildren().length;
          if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.push(this);
            this.parent._setChildrenIndices();
            return true;
          }
          return false;
        }
        moveUp() {
          if (!this.parent) {
            Util_1.Util.warn("Node has no parent. moveUp function is ignored.");
            return false;
          }
          const index = this.index, len = this.parent.getChildren().length;
          if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index + 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
          }
          return false;
        }
        moveDown() {
          if (!this.parent) {
            Util_1.Util.warn("Node has no parent. moveDown function is ignored.");
            return false;
          }
          const index = this.index;
          if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index - 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
          }
          return false;
        }
        moveToBottom() {
          if (!this.parent) {
            Util_1.Util.warn("Node has no parent. moveToBottom function is ignored.");
            return false;
          }
          const index = this.index;
          if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.unshift(this);
            this.parent._setChildrenIndices();
            return true;
          }
          return false;
        }
        setZIndex(zIndex) {
          if (!this.parent) {
            Util_1.Util.warn("Node has no parent. zIndex parameter is ignored.");
            return this;
          }
          if (zIndex < 0 || zIndex >= this.parent.children.length) {
            Util_1.Util.warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
          }
          const index = this.index;
          this.parent.children.splice(index, 1);
          this.parent.children.splice(zIndex, 0, this);
          this.parent._setChildrenIndices();
          return this;
        }
        getAbsoluteOpacity() {
          return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
        }
        _getAbsoluteOpacity() {
          let absOpacity = this.opacity();
          const parent = this.getParent();
          if (parent && !parent._isUnderCache) {
            absOpacity *= parent.getAbsoluteOpacity();
          }
          return absOpacity;
        }
        moveTo(newContainer) {
          if (this.getParent() !== newContainer) {
            this._remove();
            newContainer.add(this);
          }
          return this;
        }
        toObject() {
          let attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
          const obj = {
            attrs: {},
            className: this.getClassName()
          };
          for (key in attrs) {
            val = attrs[key];
            nonPlainObject = Util_1.Util.isObject(val) && !Util_1.Util._isPlainObject(val) && !Util_1.Util._isArray(val);
            if (nonPlainObject) {
              continue;
            }
            getter = typeof this[key] === "function" && this[key];
            delete attrs[key];
            defaultValue = getter ? getter.call(this) : null;
            attrs[key] = val;
            if (defaultValue !== val) {
              obj.attrs[key] = val;
            }
          }
          return Util_1.Util._prepareToStringify(obj);
        }
        toJSON() {
          return JSON.stringify(this.toObject());
        }
        getParent() {
          return this.parent;
        }
        findAncestors(selector, includeSelf, stopNode) {
          const res = [];
          if (includeSelf && this._isMatch(selector)) {
            res.push(this);
          }
          let ancestor = this.parent;
          while (ancestor) {
            if (ancestor === stopNode) {
              return res;
            }
            if (ancestor._isMatch(selector)) {
              res.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          return res;
        }
        isAncestorOf(node) {
          return false;
        }
        findAncestor(selector, includeSelf, stopNode) {
          return this.findAncestors(selector, includeSelf, stopNode)[0];
        }
        _isMatch(selector) {
          if (!selector) {
            return false;
          }
          if (typeof selector === "function") {
            return selector(this);
          }
          let selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n, sel;
          for (n = 0; n < len; n++) {
            sel = selectorArr[n];
            if (!Util_1.Util.isValidSelector(sel)) {
              Util_1.Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
              Util_1.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
              Util_1.Util.warn("Konva is awesome, right?");
            }
            if (sel.charAt(0) === "#") {
              if (this.id() === sel.slice(1)) {
                return true;
              }
            } else if (sel.charAt(0) === ".") {
              if (this.hasName(sel.slice(1))) {
                return true;
              }
            } else if (this.className === sel || this.nodeType === sel) {
              return true;
            }
          }
          return false;
        }
        getLayer() {
          const parent = this.getParent();
          return parent ? parent.getLayer() : null;
        }
        getStage() {
          return this._getCache(STAGE, this._getStage);
        }
        _getStage() {
          const parent = this.getParent();
          if (parent) {
            return parent.getStage();
          } else {
            return null;
          }
        }
        fire(eventType, evt = {}, bubble) {
          evt.target = evt.target || this;
          if (bubble) {
            this._fireAndBubble(eventType, evt);
          } else {
            this._fire(eventType, evt);
          }
          return this;
        }
        getAbsoluteTransform(top) {
          if (top) {
            return this._getAbsoluteTransform(top);
          } else {
            return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
          }
        }
        _getAbsoluteTransform(top) {
          let at;
          if (top) {
            at = new Util_1.Transform();
            this._eachAncestorReverse(function(node) {
              const transformsEnabled = node.transformsEnabled();
              if (transformsEnabled === "all") {
                at.multiply(node.getTransform());
              } else if (transformsEnabled === "position") {
                at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
              }
            }, top);
            return at;
          } else {
            at = this._cache.get(ABSOLUTE_TRANSFORM) || new Util_1.Transform();
            if (this.parent) {
              this.parent.getAbsoluteTransform().copyInto(at);
            } else {
              at.reset();
            }
            const transformsEnabled = this.transformsEnabled();
            if (transformsEnabled === "all") {
              at.multiply(this.getTransform());
            } else if (transformsEnabled === "position") {
              const x = this.attrs.x || 0;
              const y = this.attrs.y || 0;
              const offsetX = this.attrs.offsetX || 0;
              const offsetY = this.attrs.offsetY || 0;
              at.translate(x - offsetX, y - offsetY);
            }
            at.dirty = false;
            return at;
          }
        }
        getAbsoluteScale(top) {
          let parent = this;
          while (parent) {
            if (parent._isUnderCache) {
              top = parent;
            }
            parent = parent.getParent();
          }
          const transform = this.getAbsoluteTransform(top);
          const attrs = transform.decompose();
          return {
            x: attrs.scaleX,
            y: attrs.scaleY
          };
        }
        getAbsoluteRotation() {
          return this.getAbsoluteTransform().decompose().rotation;
        }
        getTransform() {
          return this._getCache(TRANSFORM, this._getTransform);
        }
        _getTransform() {
          var _a, _b;
          const m = this._cache.get(TRANSFORM) || new Util_1.Transform();
          m.reset();
          const x = this.x(), y = this.y(), rotation = Global_1.Konva.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
          if (x !== 0 || y !== 0) {
            m.translate(x, y);
          }
          if (rotation !== 0) {
            m.rotate(rotation);
          }
          if (skewX !== 0 || skewY !== 0) {
            m.skew(skewX, skewY);
          }
          if (scaleX !== 1 || scaleY !== 1) {
            m.scale(scaleX, scaleY);
          }
          if (offsetX !== 0 || offsetY !== 0) {
            m.translate(-1 * offsetX, -1 * offsetY);
          }
          m.dirty = false;
          return m;
        }
        clone(obj) {
          let attrs = Util_1.Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
          for (key in obj) {
            attrs[key] = obj[key];
          }
          const node = new this.constructor(attrs);
          for (key in this.eventListeners) {
            allListeners = this.eventListeners[key];
            len = allListeners.length;
            for (n = 0; n < len; n++) {
              listener = allListeners[n];
              if (listener.name.indexOf(KONVA) < 0) {
                if (!node.eventListeners[key]) {
                  node.eventListeners[key] = [];
                }
                node.eventListeners[key].push(listener);
              }
            }
          }
          return node;
        }
        _toKonvaCanvas(config) {
          config = config || {};
          const box = this.getClientRect();
          const stage = this.getStage(), x = config.x !== void 0 ? config.x : Math.floor(box.x), y = config.y !== void 0 ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new Canvas_1.SceneCanvas({
            width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
            height: config.height || Math.ceil(box.height) || (stage ? stage.height() : 0),
            pixelRatio
          }), context = canvas.getContext();
          const bufferCanvas = new Canvas_1.SceneCanvas({
            width: canvas.width / canvas.pixelRatio + Math.abs(x),
            height: canvas.height / canvas.pixelRatio + Math.abs(y),
            pixelRatio: canvas.pixelRatio
          });
          if (config.imageSmoothingEnabled === false) {
            context._context.imageSmoothingEnabled = false;
          }
          context.save();
          if (x || y) {
            context.translate(-1 * x, -1 * y);
          }
          this.drawScene(canvas, void 0, bufferCanvas);
          context.restore();
          return canvas;
        }
        toCanvas(config) {
          return this._toKonvaCanvas(config)._canvas;
        }
        toDataURL(config) {
          config = config || {};
          const mimeType = config.mimeType || null, quality = config.quality || null;
          const url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
          if (config.callback) {
            config.callback(url);
          }
          return url;
        }
        toImage(config) {
          return new Promise((resolve, reject) => {
            try {
              const callback = config === null || config === void 0 ? void 0 : config.callback;
              if (callback)
                delete config.callback;
              Util_1.Util._urlToImage(this.toDataURL(config), function(img) {
                resolve(img);
                callback === null || callback === void 0 ? void 0 : callback(img);
              });
            } catch (err) {
              reject(err);
            }
          });
        }
        toBlob(config) {
          return new Promise((resolve, reject) => {
            try {
              const callback = config === null || config === void 0 ? void 0 : config.callback;
              if (callback)
                delete config.callback;
              this.toCanvas(config).toBlob((blob) => {
                resolve(blob);
                callback === null || callback === void 0 ? void 0 : callback(blob);
              }, config === null || config === void 0 ? void 0 : config.mimeType, config === null || config === void 0 ? void 0 : config.quality);
            } catch (err) {
              reject(err);
            }
          });
        }
        setSize(size) {
          this.width(size.width);
          this.height(size.height);
          return this;
        }
        getSize() {
          return {
            width: this.width(),
            height: this.height()
          };
        }
        getClassName() {
          return this.className || this.nodeType;
        }
        getType() {
          return this.nodeType;
        }
        getDragDistance() {
          if (this.attrs.dragDistance !== void 0) {
            return this.attrs.dragDistance;
          } else if (this.parent) {
            return this.parent.getDragDistance();
          } else {
            return Global_1.Konva.dragDistance;
          }
        }
        _off(type, name, callback) {
          let evtListeners = this.eventListeners[type], i, evtName, handler;
          for (i = 0; i < evtListeners.length; i++) {
            evtName = evtListeners[i].name;
            handler = evtListeners[i].handler;
            if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
              evtListeners.splice(i, 1);
              if (evtListeners.length === 0) {
                delete this.eventListeners[type];
                break;
              }
              i--;
            }
          }
        }
        _fireChangeEvent(attr, oldVal, newVal) {
          this._fire(attr + CHANGE, {
            oldVal,
            newVal
          });
        }
        addName(name) {
          if (!this.hasName(name)) {
            const oldName = this.name();
            const newName = oldName ? oldName + " " + name : name;
            this.name(newName);
          }
          return this;
        }
        hasName(name) {
          if (!name) {
            return false;
          }
          const fullName = this.name();
          if (!fullName) {
            return false;
          }
          const names = (fullName || "").split(/\s/g);
          return names.indexOf(name) !== -1;
        }
        removeName(name) {
          const names = (this.name() || "").split(/\s/g);
          const index = names.indexOf(name);
          if (index !== -1) {
            names.splice(index, 1);
            this.name(names.join(" "));
          }
          return this;
        }
        setAttr(attr, val) {
          const func = this[SET + Util_1.Util._capitalize(attr)];
          if (Util_1.Util._isFunction(func)) {
            func.call(this, val);
          } else {
            this._setAttr(attr, val);
          }
          return this;
        }
        _requestDraw() {
          if (Global_1.Konva.autoDrawEnabled) {
            const drawNode = this.getLayer() || this.getStage();
            drawNode === null || drawNode === void 0 ? void 0 : drawNode.batchDraw();
          }
        }
        _setAttr(key, val) {
          const oldVal = this.attrs[key];
          if (oldVal === val && !Util_1.Util.isObject(val)) {
            return;
          }
          if (val === void 0 || val === null) {
            delete this.attrs[key];
          } else {
            this.attrs[key] = val;
          }
          if (this._shouldFireChangeEvents) {
            this._fireChangeEvent(key, oldVal, val);
          }
          this._requestDraw();
        }
        _setComponentAttr(key, component, val) {
          let oldVal;
          if (val !== void 0) {
            oldVal = this.attrs[key];
            if (!oldVal) {
              this.attrs[key] = this.getAttr(key);
            }
            this.attrs[key][component] = val;
            this._fireChangeEvent(key, oldVal, val);
          }
        }
        _fireAndBubble(eventType, evt, compareShape) {
          if (evt && this.nodeType === SHAPE) {
            evt.target = this;
          }
          const nonBubbling = [
            MOUSEENTER,
            MOUSELEAVE,
            POINTERENTER,
            POINTERLEAVE,
            TOUCHENTER,
            TOUCHLEAVE
          ];
          const shouldStop = nonBubbling.indexOf(eventType) !== -1 && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape);
          if (!shouldStop) {
            this._fire(eventType, evt);
            const stopBubble = nonBubbling.indexOf(eventType) !== -1 && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
            if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
              if (compareShape && compareShape.parent) {
                this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
              } else {
                this._fireAndBubble.call(this.parent, eventType, evt);
              }
            }
          }
        }
        _getProtoListeners(eventType) {
          var _a, _b, _c;
          const allListeners = (_a = this._cache.get(ALL_LISTENERS)) !== null && _a !== void 0 ? _a : {};
          let events = allListeners === null || allListeners === void 0 ? void 0 : allListeners[eventType];
          if (events === void 0) {
            events = [];
            let obj = Object.getPrototypeOf(this);
            while (obj) {
              const hierarchyEvents = (_c = (_b = obj.eventListeners) === null || _b === void 0 ? void 0 : _b[eventType]) !== null && _c !== void 0 ? _c : [];
              events.push(...hierarchyEvents);
              obj = Object.getPrototypeOf(obj);
            }
            allListeners[eventType] = events;
            this._cache.set(ALL_LISTENERS, allListeners);
          }
          return events;
        }
        _fire(eventType, evt) {
          evt = evt || {};
          evt.currentTarget = this;
          evt.type = eventType;
          const topListeners = this._getProtoListeners(eventType);
          if (topListeners) {
            for (let i = 0; i < topListeners.length; i++) {
              topListeners[i].handler.call(this, evt);
            }
          }
          const selfListeners = this.eventListeners[eventType];
          if (selfListeners) {
            for (let i = 0; i < selfListeners.length; i++) {
              selfListeners[i].handler.call(this, evt);
            }
          }
        }
        draw() {
          this.drawScene();
          this.drawHit();
          return this;
        }
        _createDragElement(evt) {
          const pointerId = evt ? evt.pointerId : void 0;
          const stage = this.getStage();
          const ap = this.getAbsolutePosition();
          if (!stage) {
            return;
          }
          const pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
          DragAndDrop_1.DD._dragElements.set(this._id, {
            node: this,
            startPointerPos: pos,
            offset: {
              x: pos.x - ap.x,
              y: pos.y - ap.y
            },
            dragStatus: "ready",
            pointerId
          });
        }
        startDrag(evt, bubbleEvent = true) {
          if (!DragAndDrop_1.DD._dragElements.has(this._id)) {
            this._createDragElement(evt);
          }
          const elem = DragAndDrop_1.DD._dragElements.get(this._id);
          elem.dragStatus = "dragging";
          this.fire("dragstart", {
            type: "dragstart",
            target: this,
            evt: evt && evt.evt
          }, bubbleEvent);
        }
        _setDragPosition(evt, elem) {
          const pos = this.getStage()._getPointerById(elem.pointerId);
          if (!pos) {
            return;
          }
          let newNodePos = {
            x: pos.x - elem.offset.x,
            y: pos.y - elem.offset.y
          };
          const dbf = this.dragBoundFunc();
          if (dbf !== void 0) {
            const bounded = dbf.call(this, newNodePos, evt);
            if (!bounded) {
              Util_1.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
            } else {
              newNodePos = bounded;
            }
          }
          if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
            this.setAbsolutePosition(newNodePos);
            this._requestDraw();
          }
          this._lastPos = newNodePos;
        }
        stopDrag(evt) {
          const elem = DragAndDrop_1.DD._dragElements.get(this._id);
          if (elem) {
            elem.dragStatus = "stopped";
          }
          DragAndDrop_1.DD._endDragBefore(evt);
          DragAndDrop_1.DD._endDragAfter(evt);
        }
        setDraggable(draggable) {
          this._setAttr("draggable", draggable);
          this._dragChange();
        }
        isDragging() {
          const elem = DragAndDrop_1.DD._dragElements.get(this._id);
          return elem ? elem.dragStatus === "dragging" : false;
        }
        _listenDrag() {
          this._dragCleanup();
          this.on("mousedown.konva touchstart.konva", function(evt) {
            const shouldCheckButton = evt.evt["button"] !== void 0;
            const canDrag = !shouldCheckButton || Global_1.Konva.dragButtons.indexOf(evt.evt["button"]) >= 0;
            if (!canDrag) {
              return;
            }
            if (this.isDragging()) {
              return;
            }
            let hasDraggingChild = false;
            DragAndDrop_1.DD._dragElements.forEach((elem) => {
              if (this.isAncestorOf(elem.node)) {
                hasDraggingChild = true;
              }
            });
            if (!hasDraggingChild) {
              this._createDragElement(evt);
            }
          });
        }
        _dragChange() {
          if (this.attrs.draggable) {
            this._listenDrag();
          } else {
            this._dragCleanup();
            const stage = this.getStage();
            if (!stage) {
              return;
            }
            const dragElement = DragAndDrop_1.DD._dragElements.get(this._id);
            const isDragging = dragElement && dragElement.dragStatus === "dragging";
            const isReady = dragElement && dragElement.dragStatus === "ready";
            if (isDragging) {
              this.stopDrag();
            } else if (isReady) {
              DragAndDrop_1.DD._dragElements.delete(this._id);
            }
          }
        }
        _dragCleanup() {
          this.off("mousedown.konva");
          this.off("touchstart.konva");
        }
        isClientRectOnScreen(margin = { x: 0, y: 0 }) {
          const stage = this.getStage();
          if (!stage) {
            return false;
          }
          const screenRect = {
            x: -margin.x,
            y: -margin.y,
            width: stage.width() + 2 * margin.x,
            height: stage.height() + 2 * margin.y
          };
          return Util_1.Util.haveIntersection(screenRect, this.getClientRect());
        }
        static create(data, container) {
          if (Util_1.Util._isString(data)) {
            data = JSON.parse(data);
          }
          return this._createNode(data, container);
        }
        static _createNode(obj, container) {
          let className = _Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
          if (container) {
            obj.attrs.container = container;
          }
          if (!Global_1.Konva[className]) {
            Util_1.Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
            className = "Shape";
          }
          const Class = Global_1.Konva[className];
          no = new Class(obj.attrs);
          if (children) {
            len = children.length;
            for (n = 0; n < len; n++) {
              no.add(_Node._createNode(children[n]));
            }
          }
          return no;
        }
      };
      exports2.Node = Node2;
      Node2.prototype.nodeType = "Node";
      Node2.prototype._attrsAffectingSize = [];
      Node2.prototype.eventListeners = {};
      Node2.prototype.on.call(Node2.prototype, TRANSFORM_CHANGE_STR, function() {
        if (this._batchingTransformChange) {
          this._needClearTransformCache = true;
          return;
        }
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
      });
      Node2.prototype.on.call(Node2.prototype, "visibleChange.konva", function() {
        this._clearSelfAndDescendantCache(VISIBLE);
      });
      Node2.prototype.on.call(Node2.prototype, "listeningChange.konva", function() {
        this._clearSelfAndDescendantCache(LISTENING);
      });
      Node2.prototype.on.call(Node2.prototype, "opacityChange.konva", function() {
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
      });
      var addGetterSetter = Factory_1.Factory.addGetterSetter;
      addGetterSetter(Node2, "zIndex");
      addGetterSetter(Node2, "absolutePosition");
      addGetterSetter(Node2, "position");
      addGetterSetter(Node2, "x", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "y", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "globalCompositeOperation", "source-over", (0, Validators_1.getStringValidator)());
      addGetterSetter(Node2, "opacity", 1, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "name", "", (0, Validators_1.getStringValidator)());
      addGetterSetter(Node2, "id", "", (0, Validators_1.getStringValidator)());
      addGetterSetter(Node2, "rotation", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Node2, "scale", ["x", "y"]);
      addGetterSetter(Node2, "scaleX", 1, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "scaleY", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Node2, "skew", ["x", "y"]);
      addGetterSetter(Node2, "skewX", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "skewY", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Node2, "offset", ["x", "y"]);
      addGetterSetter(Node2, "offsetX", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "offsetY", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "dragDistance", void 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "width", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "height", 0, (0, Validators_1.getNumberValidator)());
      addGetterSetter(Node2, "listening", true, (0, Validators_1.getBooleanValidator)());
      addGetterSetter(Node2, "preventDefault", true, (0, Validators_1.getBooleanValidator)());
      addGetterSetter(Node2, "filters", void 0, function(val) {
        this._filterUpToDate = false;
        return val;
      });
      addGetterSetter(Node2, "visible", true, (0, Validators_1.getBooleanValidator)());
      addGetterSetter(Node2, "transformsEnabled", "all", (0, Validators_1.getStringValidator)());
      addGetterSetter(Node2, "size");
      addGetterSetter(Node2, "dragBoundFunc");
      addGetterSetter(Node2, "draggable", false, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.backCompat(Node2, {
        rotateDeg: "rotate",
        setRotationDeg: "setRotation",
        getRotationDeg: "getRotation"
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Container.js
  var require_Container = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Container.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Container = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Container = class extends Node_1.Node {
        constructor() {
          super(...arguments);
          this.children = [];
        }
        getChildren(filterFunc) {
          const children = this.children || [];
          if (filterFunc) {
            return children.filter(filterFunc);
          }
          return children;
        }
        hasChildren() {
          return this.getChildren().length > 0;
        }
        removeChildren() {
          this.getChildren().forEach((child) => {
            child.parent = null;
            child.index = 0;
            child.remove();
          });
          this.children = [];
          this._requestDraw();
          return this;
        }
        destroyChildren() {
          this.getChildren().forEach((child) => {
            child.parent = null;
            child.index = 0;
            child.destroy();
          });
          this.children = [];
          this._requestDraw();
          return this;
        }
        add(...children) {
          if (children.length === 0) {
            return this;
          }
          if (children.length > 1) {
            for (let i = 0; i < children.length; i++) {
              this.add(children[i]);
            }
            return this;
          }
          const child = children[0];
          if (child.getParent()) {
            child.moveTo(this);
            return this;
          }
          this._validateAdd(child);
          child.index = this.getChildren().length;
          child.parent = this;
          child._clearCaches();
          this.getChildren().push(child);
          this._fire("add", {
            child
          });
          this._requestDraw();
          return this;
        }
        destroy() {
          if (this.hasChildren()) {
            this.destroyChildren();
          }
          super.destroy();
          return this;
        }
        find(selector) {
          return this._generalFind(selector, false);
        }
        findOne(selector) {
          const result = this._generalFind(selector, true);
          return result.length > 0 ? result[0] : void 0;
        }
        _generalFind(selector, findOne) {
          const retArr = [];
          this._descendants((node) => {
            const valid = node._isMatch(selector);
            if (valid) {
              retArr.push(node);
            }
            if (valid && findOne) {
              return true;
            }
            return false;
          });
          return retArr;
        }
        _descendants(fn) {
          let shouldStop = false;
          const children = this.getChildren();
          for (const child of children) {
            shouldStop = fn(child);
            if (shouldStop) {
              return true;
            }
            if (!child.hasChildren()) {
              continue;
            }
            shouldStop = child._descendants(fn);
            if (shouldStop) {
              return true;
            }
          }
          return false;
        }
        toObject() {
          const obj = Node_1.Node.prototype.toObject.call(this);
          obj.children = [];
          this.getChildren().forEach((child) => {
            obj.children.push(child.toObject());
          });
          return obj;
        }
        isAncestorOf(node) {
          let parent = node.getParent();
          while (parent) {
            if (parent._id === this._id) {
              return true;
            }
            parent = parent.getParent();
          }
          return false;
        }
        clone(obj) {
          const node = Node_1.Node.prototype.clone.call(this, obj);
          this.getChildren().forEach(function(no) {
            node.add(no.clone());
          });
          return node;
        }
        getAllIntersections(pos) {
          const arr = [];
          this.find("Shape").forEach((shape) => {
            if (shape.isVisible() && shape.intersects(pos)) {
              arr.push(shape);
            }
          });
          return arr;
        }
        _clearSelfAndDescendantCache(attr) {
          var _a;
          super._clearSelfAndDescendantCache(attr);
          if (this.isCached()) {
            return;
          }
          (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function(node) {
            node._clearSelfAndDescendantCache(attr);
          });
        }
        _setChildrenIndices() {
          var _a;
          (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function(child, n) {
            child.index = n;
          });
          this._requestDraw();
        }
        drawScene(can, top, bufferCanvas) {
          const layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
          const caching = canvas && canvas.isCache;
          if (!this.isVisible() && !caching) {
            return this;
          }
          if (cachedSceneCanvas) {
            context.save();
            const m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
          } else {
            this._drawChildren("drawScene", canvas, top, bufferCanvas);
          }
          return this;
        }
        drawHit(can, top) {
          if (!this.shouldDrawHit(top)) {
            return this;
          }
          const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
          if (cachedHitCanvas) {
            context.save();
            const m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
          } else {
            this._drawChildren("drawHit", canvas, top);
          }
          return this;
        }
        _drawChildren(drawMethod, canvas, top, bufferCanvas) {
          var _a;
          const context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = typeof clipWidth === "number" && typeof clipHeight === "number" || clipFunc;
          const selfCache = top === this;
          if (hasClip) {
            context.save();
            const transform = this.getAbsoluteTransform(top);
            let m = transform.getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            context.beginPath();
            let clipArgs;
            if (clipFunc) {
              clipArgs = clipFunc.call(this, context, this);
            } else {
              const clipX = this.clipX();
              const clipY = this.clipY();
              context.rect(clipX || 0, clipY || 0, clipWidth, clipHeight);
            }
            context.clip.apply(context, clipArgs);
            m = transform.copy().invert().getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
          }
          const hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
          if (hasComposition) {
            context.save();
            context._applyGlobalCompositeOperation(this);
          }
          (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
            child[drawMethod](canvas, top, bufferCanvas);
          });
          if (hasComposition) {
            context.restore();
          }
          if (hasClip) {
            context.restore();
          }
        }
        getClientRect(config = {}) {
          var _a;
          const skipTransform = config.skipTransform;
          const relativeTo = config.relativeTo;
          let minX, minY, maxX, maxY;
          let selfRect = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
          };
          const that = this;
          (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
            if (!child.visible()) {
              return;
            }
            const rect = child.getClientRect({
              relativeTo: that,
              skipShadow: config.skipShadow,
              skipStroke: config.skipStroke
            });
            if (rect.width === 0 && rect.height === 0) {
              return;
            }
            if (minX === void 0) {
              minX = rect.x;
              minY = rect.y;
              maxX = rect.x + rect.width;
              maxY = rect.y + rect.height;
            } else {
              minX = Math.min(minX, rect.x);
              minY = Math.min(minY, rect.y);
              maxX = Math.max(maxX, rect.x + rect.width);
              maxY = Math.max(maxY, rect.y + rect.height);
            }
          });
          const shapes = this.find("Shape");
          let hasVisible = false;
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i];
            if (shape._isVisible(this)) {
              hasVisible = true;
              break;
            }
          }
          if (hasVisible && minX !== void 0) {
            selfRect = {
              x: minX,
              y: minY,
              width: maxX - minX,
              height: maxY - minY
            };
          } else {
            selfRect = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
          if (!skipTransform) {
            return this._transformedRect(selfRect, relativeTo);
          }
          return selfRect;
        }
      };
      exports2.Container = Container;
      Factory_1.Factory.addComponentsGetterSetter(Container, "clip", [
        "x",
        "y",
        "width",
        "height"
      ]);
      Factory_1.Factory.addGetterSetter(Container, "clipX", void 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Container, "clipY", void 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Container, "clipWidth", void 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Container, "clipHeight", void 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Container, "clipFunc");
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/PointerEvents.js
  var require_PointerEvents = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/PointerEvents.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getCapturedShape = getCapturedShape;
      exports2.createEvent = createEvent;
      exports2.hasPointerCapture = hasPointerCapture;
      exports2.setPointerCapture = setPointerCapture;
      exports2.releaseCapture = releaseCapture;
      var Global_1 = require_Global();
      var Captures = /* @__PURE__ */ new Map();
      var SUPPORT_POINTER_EVENTS = Global_1.Konva._global["PointerEvent"] !== void 0;
      function getCapturedShape(pointerId) {
        return Captures.get(pointerId);
      }
      function createEvent(evt) {
        return {
          evt,
          pointerId: evt.pointerId
        };
      }
      function hasPointerCapture(pointerId, shape) {
        return Captures.get(pointerId) === shape;
      }
      function setPointerCapture(pointerId, shape) {
        releaseCapture(pointerId);
        const stage = shape.getStage();
        if (!stage)
          return;
        Captures.set(pointerId, shape);
        if (SUPPORT_POINTER_EVENTS) {
          shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
        }
      }
      function releaseCapture(pointerId, target) {
        const shape = Captures.get(pointerId);
        if (!shape)
          return;
        const stage = shape.getStage();
        if (stage && stage.content) {
        }
        Captures.delete(pointerId);
        if (SUPPORT_POINTER_EVENTS) {
          shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
        }
      }
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Stage.js
  var require_Stage = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Stage.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Stage = exports2.stages = void 0;
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Container_1 = require_Container();
      var Global_1 = require_Global();
      var Canvas_1 = require_Canvas();
      var DragAndDrop_1 = require_DragAndDrop();
      var Global_2 = require_Global();
      var PointerEvents = require_PointerEvents();
      var STAGE = "Stage";
      var STRING = "string";
      var PX = "px";
      var MOUSEOUT = "mouseout";
      var MOUSELEAVE = "mouseleave";
      var MOUSEOVER = "mouseover";
      var MOUSEENTER = "mouseenter";
      var MOUSEMOVE = "mousemove";
      var MOUSEDOWN = "mousedown";
      var MOUSEUP = "mouseup";
      var POINTERMOVE = "pointermove";
      var POINTERDOWN = "pointerdown";
      var POINTERUP = "pointerup";
      var POINTERCANCEL = "pointercancel";
      var LOSTPOINTERCAPTURE = "lostpointercapture";
      var POINTEROUT = "pointerout";
      var POINTERLEAVE = "pointerleave";
      var POINTEROVER = "pointerover";
      var POINTERENTER = "pointerenter";
      var CONTEXTMENU = "contextmenu";
      var TOUCHSTART = "touchstart";
      var TOUCHEND = "touchend";
      var TOUCHMOVE = "touchmove";
      var TOUCHCANCEL = "touchcancel";
      var WHEEL = "wheel";
      var MAX_LAYERS_NUMBER = 5;
      var EVENTS = [
        [MOUSEENTER, "_pointerenter"],
        [MOUSEDOWN, "_pointerdown"],
        [MOUSEMOVE, "_pointermove"],
        [MOUSEUP, "_pointerup"],
        [MOUSELEAVE, "_pointerleave"],
        [TOUCHSTART, "_pointerdown"],
        [TOUCHMOVE, "_pointermove"],
        [TOUCHEND, "_pointerup"],
        [TOUCHCANCEL, "_pointercancel"],
        [MOUSEOVER, "_pointerover"],
        [WHEEL, "_wheel"],
        [CONTEXTMENU, "_contextmenu"],
        [POINTERDOWN, "_pointerdown"],
        [POINTERMOVE, "_pointermove"],
        [POINTERUP, "_pointerup"],
        [POINTERCANCEL, "_pointercancel"],
        [POINTERLEAVE, "_pointerleave"],
        [LOSTPOINTERCAPTURE, "_lostpointercapture"]
      ];
      var EVENTS_MAP = {
        mouse: {
          [POINTEROUT]: MOUSEOUT,
          [POINTERLEAVE]: MOUSELEAVE,
          [POINTEROVER]: MOUSEOVER,
          [POINTERENTER]: MOUSEENTER,
          [POINTERMOVE]: MOUSEMOVE,
          [POINTERDOWN]: MOUSEDOWN,
          [POINTERUP]: MOUSEUP,
          [POINTERCANCEL]: "mousecancel",
          pointerclick: "click",
          pointerdblclick: "dblclick"
        },
        touch: {
          [POINTEROUT]: "touchout",
          [POINTERLEAVE]: "touchleave",
          [POINTEROVER]: "touchover",
          [POINTERENTER]: "touchenter",
          [POINTERMOVE]: TOUCHMOVE,
          [POINTERDOWN]: TOUCHSTART,
          [POINTERUP]: TOUCHEND,
          [POINTERCANCEL]: TOUCHCANCEL,
          pointerclick: "tap",
          pointerdblclick: "dbltap"
        },
        pointer: {
          [POINTEROUT]: POINTEROUT,
          [POINTERLEAVE]: POINTERLEAVE,
          [POINTEROVER]: POINTEROVER,
          [POINTERENTER]: POINTERENTER,
          [POINTERMOVE]: POINTERMOVE,
          [POINTERDOWN]: POINTERDOWN,
          [POINTERUP]: POINTERUP,
          [POINTERCANCEL]: POINTERCANCEL,
          pointerclick: "pointerclick",
          pointerdblclick: "pointerdblclick"
        }
      };
      var getEventType = (type) => {
        if (type.indexOf("pointer") >= 0) {
          return "pointer";
        }
        if (type.indexOf("touch") >= 0) {
          return "touch";
        }
        return "mouse";
      };
      var getEventsMap = (eventType) => {
        const type = getEventType(eventType);
        if (type === "pointer") {
          return Global_1.Konva.pointerEventsEnabled && EVENTS_MAP.pointer;
        }
        if (type === "touch") {
          return EVENTS_MAP.touch;
        }
        if (type === "mouse") {
          return EVENTS_MAP.mouse;
        }
      };
      function checkNoClip(attrs = {}) {
        if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
          Util_1.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
        }
        return attrs;
      }
      var NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
      exports2.stages = [];
      var Stage = class extends Container_1.Container {
        constructor(config) {
          super(checkNoClip(config));
          this._pointerPositions = [];
          this._changedPointerPositions = [];
          this._buildDOM();
          this._bindContentEvents();
          exports2.stages.push(this);
          this.on("widthChange.konva heightChange.konva", this._resizeDOM);
          this.on("visibleChange.konva", this._checkVisibility);
          this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
            checkNoClip(this.attrs);
          });
          this._checkVisibility();
        }
        _validateAdd(child) {
          const isLayer = child.getType() === "Layer";
          const isFastLayer = child.getType() === "FastLayer";
          const valid = isLayer || isFastLayer;
          if (!valid) {
            Util_1.Util.throw("You may only add layers to the stage.");
          }
        }
        _checkVisibility() {
          if (!this.content) {
            return;
          }
          const style = this.visible() ? "" : "none";
          this.content.style.display = style;
        }
        setContainer(container) {
          if (typeof container === STRING) {
            let id;
            if (container.charAt(0) === ".") {
              const className = container.slice(1);
              container = document.getElementsByClassName(className)[0];
            } else {
              if (container.charAt(0) !== "#") {
                id = container;
              } else {
                id = container.slice(1);
              }
              container = document.getElementById(id);
            }
            if (!container) {
              throw "Can not find container in document with id " + id;
            }
          }
          this._setAttr("container", container);
          if (this.content) {
            if (this.content.parentElement) {
              this.content.parentElement.removeChild(this.content);
            }
            container.appendChild(this.content);
          }
          return this;
        }
        shouldDrawHit() {
          return true;
        }
        clear() {
          const layers = this.children, len = layers.length;
          for (let n = 0; n < len; n++) {
            layers[n].clear();
          }
          return this;
        }
        clone(obj) {
          if (!obj) {
            obj = {};
          }
          obj.container = typeof document !== "undefined" && document.createElement("div");
          return Container_1.Container.prototype.clone.call(this, obj);
        }
        destroy() {
          super.destroy();
          const content = this.content;
          if (content && Util_1.Util._isInDocument(content)) {
            this.container().removeChild(content);
          }
          const index = exports2.stages.indexOf(this);
          if (index > -1) {
            exports2.stages.splice(index, 1);
          }
          Util_1.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas);
          return this;
        }
        getPointerPosition() {
          const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
          if (!pos) {
            Util_1.Util.warn(NO_POINTERS_MESSAGE);
            return null;
          }
          return {
            x: pos.x,
            y: pos.y
          };
        }
        _getPointerById(id) {
          return this._pointerPositions.find((p) => p.id === id);
        }
        getPointersPositions() {
          return this._pointerPositions;
        }
        getStage() {
          return this;
        }
        getContent() {
          return this.content;
        }
        _toKonvaCanvas(config) {
          config = config || {};
          config.x = config.x || 0;
          config.y = config.y || 0;
          config.width = config.width || this.width();
          config.height = config.height || this.height();
          const canvas = new Canvas_1.SceneCanvas({
            width: config.width,
            height: config.height,
            pixelRatio: config.pixelRatio || 1
          });
          const _context = canvas.getContext()._context;
          const layers = this.children;
          if (config.x || config.y) {
            _context.translate(-1 * config.x, -1 * config.y);
          }
          layers.forEach(function(layer) {
            if (!layer.isVisible()) {
              return;
            }
            const layerCanvas = layer._toKonvaCanvas(config);
            _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
          });
          return canvas;
        }
        getIntersection(pos) {
          if (!pos) {
            return null;
          }
          const layers = this.children, len = layers.length, end = len - 1;
          for (let n = end; n >= 0; n--) {
            const shape = layers[n].getIntersection(pos);
            if (shape) {
              return shape;
            }
          }
          return null;
        }
        _resizeDOM() {
          const width = this.width();
          const height = this.height();
          if (this.content) {
            this.content.style.width = width + PX;
            this.content.style.height = height + PX;
          }
          this.bufferCanvas.setSize(width, height);
          this.bufferHitCanvas.setSize(width, height);
          this.children.forEach((layer) => {
            layer.setSize({ width, height });
            layer.draw();
          });
        }
        add(layer, ...rest) {
          if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) {
              this.add(arguments[i]);
            }
            return this;
          }
          super.add(layer);
          const length = this.children.length;
          if (length > MAX_LAYERS_NUMBER) {
            Util_1.Util.warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
          }
          layer.setSize({ width: this.width(), height: this.height() });
          layer.draw();
          if (Global_1.Konva.isBrowser) {
            this.content.appendChild(layer.canvas._canvas);
          }
          return this;
        }
        getParent() {
          return null;
        }
        getLayer() {
          return null;
        }
        hasPointerCapture(pointerId) {
          return PointerEvents.hasPointerCapture(pointerId, this);
        }
        setPointerCapture(pointerId) {
          PointerEvents.setPointerCapture(pointerId, this);
        }
        releaseCapture(pointerId) {
          PointerEvents.releaseCapture(pointerId, this);
        }
        getLayers() {
          return this.children;
        }
        _bindContentEvents() {
          if (!Global_1.Konva.isBrowser) {
            return;
          }
          EVENTS.forEach(([event, methodName]) => {
            this.content.addEventListener(event, (evt) => {
              this[methodName](evt);
            }, { passive: false });
          });
        }
        _pointerenter(evt) {
          this.setPointersPositions(evt);
          const events = getEventsMap(evt.type);
          if (events) {
            this._fire(events.pointerenter, {
              evt,
              target: this,
              currentTarget: this
            });
          }
        }
        _pointerover(evt) {
          this.setPointersPositions(evt);
          const events = getEventsMap(evt.type);
          if (events) {
            this._fire(events.pointerover, {
              evt,
              target: this,
              currentTarget: this
            });
          }
        }
        _getTargetShape(evenType) {
          let shape = this[evenType + "targetShape"];
          if (shape && !shape.getStage()) {
            shape = null;
          }
          return shape;
        }
        _pointerleave(evt) {
          const events = getEventsMap(evt.type);
          const eventType = getEventType(evt.type);
          if (!events) {
            return;
          }
          this.setPointersPositions(evt);
          const targetShape = this._getTargetShape(eventType);
          const eventsEnabled = !(Global_1.Konva.isDragging() || Global_1.Konva.isTransforming()) || Global_1.Konva.hitOnDragEnabled;
          if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(events.pointerout, { evt });
            targetShape._fireAndBubble(events.pointerleave, { evt });
            this._fire(events.pointerleave, {
              evt,
              target: this,
              currentTarget: this
            });
            this[eventType + "targetShape"] = null;
          } else if (eventsEnabled) {
            this._fire(events.pointerleave, {
              evt,
              target: this,
              currentTarget: this
            });
            this._fire(events.pointerout, {
              evt,
              target: this,
              currentTarget: this
            });
          }
          this.pointerPos = null;
          this._pointerPositions = [];
        }
        _pointerdown(evt) {
          const events = getEventsMap(evt.type);
          const eventType = getEventType(evt.type);
          if (!events) {
            return;
          }
          this.setPointersPositions(evt);
          let triggeredOnShape = false;
          this._changedPointerPositions.forEach((pos) => {
            const shape = this.getIntersection(pos);
            DragAndDrop_1.DD.justDragged = false;
            Global_1.Konva["_" + eventType + "ListenClick"] = true;
            if (!shape || !shape.isListening()) {
              this[eventType + "ClickStartShape"] = void 0;
              return;
            }
            if (Global_1.Konva.capturePointerEventsEnabled) {
              shape.setPointerCapture(pos.id);
            }
            this[eventType + "ClickStartShape"] = shape;
            shape._fireAndBubble(events.pointerdown, {
              evt,
              pointerId: pos.id
            });
            triggeredOnShape = true;
            const isTouch = evt.type.indexOf("touch") >= 0;
            if (shape.preventDefault() && evt.cancelable && isTouch) {
              evt.preventDefault();
            }
          });
          if (!triggeredOnShape) {
            this._fire(events.pointerdown, {
              evt,
              target: this,
              currentTarget: this,
              pointerId: this._pointerPositions[0].id
            });
          }
        }
        _pointermove(evt) {
          const events = getEventsMap(evt.type);
          const eventType = getEventType(evt.type);
          if (!events) {
            return;
          }
          if (Global_1.Konva.isDragging() && DragAndDrop_1.DD.node.preventDefault() && evt.cancelable) {
            evt.preventDefault();
          }
          this.setPointersPositions(evt);
          const eventsEnabled = !(Global_1.Konva.isDragging() || Global_1.Konva.isTransforming()) || Global_1.Konva.hitOnDragEnabled;
          if (!eventsEnabled) {
            return;
          }
          const processedShapesIds = {};
          let triggeredOnShape = false;
          const targetShape = this._getTargetShape(eventType);
          this._changedPointerPositions.forEach((pos) => {
            const shape = PointerEvents.getCapturedShape(pos.id) || this.getIntersection(pos);
            const pointerId = pos.id;
            const event = { evt, pointerId };
            const differentTarget = targetShape !== shape;
            if (differentTarget && targetShape) {
              targetShape._fireAndBubble(events.pointerout, { ...event }, shape);
              targetShape._fireAndBubble(events.pointerleave, { ...event }, shape);
            }
            if (shape) {
              if (processedShapesIds[shape._id]) {
                return;
              }
              processedShapesIds[shape._id] = true;
            }
            if (shape && shape.isListening()) {
              triggeredOnShape = true;
              if (differentTarget) {
                shape._fireAndBubble(events.pointerover, { ...event }, targetShape);
                shape._fireAndBubble(events.pointerenter, { ...event }, targetShape);
                this[eventType + "targetShape"] = shape;
              }
              shape._fireAndBubble(events.pointermove, { ...event });
            } else {
              if (targetShape) {
                this._fire(events.pointerover, {
                  evt,
                  target: this,
                  currentTarget: this,
                  pointerId
                });
                this[eventType + "targetShape"] = null;
              }
            }
          });
          if (!triggeredOnShape) {
            this._fire(events.pointermove, {
              evt,
              target: this,
              currentTarget: this,
              pointerId: this._changedPointerPositions[0].id
            });
          }
        }
        _pointerup(evt) {
          const events = getEventsMap(evt.type);
          const eventType = getEventType(evt.type);
          if (!events) {
            return;
          }
          this.setPointersPositions(evt);
          const clickStartShape = this[eventType + "ClickStartShape"];
          const clickEndShape = this[eventType + "ClickEndShape"];
          const processedShapesIds = {};
          let triggeredOnShape = false;
          this._changedPointerPositions.forEach((pos) => {
            const shape = PointerEvents.getCapturedShape(pos.id) || this.getIntersection(pos);
            if (shape) {
              shape.releaseCapture(pos.id);
              if (processedShapesIds[shape._id]) {
                return;
              }
              processedShapesIds[shape._id] = true;
            }
            const pointerId = pos.id;
            const event = { evt, pointerId };
            let fireDblClick = false;
            if (Global_1.Konva["_" + eventType + "InDblClickWindow"]) {
              fireDblClick = true;
              clearTimeout(this[eventType + "DblTimeout"]);
            } else if (!DragAndDrop_1.DD.justDragged) {
              Global_1.Konva["_" + eventType + "InDblClickWindow"] = true;
              clearTimeout(this[eventType + "DblTimeout"]);
            }
            this[eventType + "DblTimeout"] = setTimeout(function() {
              Global_1.Konva["_" + eventType + "InDblClickWindow"] = false;
            }, Global_1.Konva.dblClickWindow);
            if (shape && shape.isListening()) {
              triggeredOnShape = true;
              this[eventType + "ClickEndShape"] = shape;
              shape._fireAndBubble(events.pointerup, { ...event });
              if (Global_1.Konva["_" + eventType + "ListenClick"] && clickStartShape && clickStartShape === shape) {
                shape._fireAndBubble(events.pointerclick, { ...event });
                if (fireDblClick && clickEndShape && clickEndShape === shape) {
                  shape._fireAndBubble(events.pointerdblclick, { ...event });
                }
              }
            } else {
              this[eventType + "ClickEndShape"] = null;
              if (Global_1.Konva["_" + eventType + "ListenClick"]) {
                this._fire(events.pointerclick, {
                  evt,
                  target: this,
                  currentTarget: this,
                  pointerId
                });
              }
              if (fireDblClick) {
                this._fire(events.pointerdblclick, {
                  evt,
                  target: this,
                  currentTarget: this,
                  pointerId
                });
              }
            }
          });
          if (!triggeredOnShape) {
            this._fire(events.pointerup, {
              evt,
              target: this,
              currentTarget: this,
              pointerId: this._changedPointerPositions[0].id
            });
          }
          Global_1.Konva["_" + eventType + "ListenClick"] = false;
          if (evt.cancelable && eventType !== "touch" && eventType !== "pointer") {
            evt.preventDefault();
          }
        }
        _contextmenu(evt) {
          this.setPointersPositions(evt);
          const shape = this.getIntersection(this.getPointerPosition());
          if (shape && shape.isListening()) {
            shape._fireAndBubble(CONTEXTMENU, { evt });
          } else {
            this._fire(CONTEXTMENU, {
              evt,
              target: this,
              currentTarget: this
            });
          }
        }
        _wheel(evt) {
          this.setPointersPositions(evt);
          const shape = this.getIntersection(this.getPointerPosition());
          if (shape && shape.isListening()) {
            shape._fireAndBubble(WHEEL, { evt });
          } else {
            this._fire(WHEEL, {
              evt,
              target: this,
              currentTarget: this
            });
          }
        }
        _pointercancel(evt) {
          this.setPointersPositions(evt);
          const shape = PointerEvents.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
          if (shape) {
            shape._fireAndBubble(POINTERUP, PointerEvents.createEvent(evt));
          }
          PointerEvents.releaseCapture(evt.pointerId);
        }
        _lostpointercapture(evt) {
          PointerEvents.releaseCapture(evt.pointerId);
        }
        setPointersPositions(evt) {
          const contentPosition = this._getContentPosition();
          let x = null, y = null;
          evt = evt ? evt : window.event;
          if (evt.touches !== void 0) {
            this._pointerPositions = [];
            this._changedPointerPositions = [];
            Array.prototype.forEach.call(evt.touches, (touch) => {
              this._pointerPositions.push({
                id: touch.identifier,
                x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
              });
            });
            Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch) => {
              this._changedPointerPositions.push({
                id: touch.identifier,
                x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
              });
            });
          } else {
            x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
            y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
            this.pointerPos = {
              x,
              y
            };
            this._pointerPositions = [{ x, y, id: Util_1.Util._getFirstPointerId(evt) }];
            this._changedPointerPositions = [
              { x, y, id: Util_1.Util._getFirstPointerId(evt) }
            ];
          }
        }
        _setPointerPosition(evt) {
          Util_1.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
          this.setPointersPositions(evt);
        }
        _getContentPosition() {
          if (!this.content || !this.content.getBoundingClientRect) {
            return {
              top: 0,
              left: 0,
              scaleX: 1,
              scaleY: 1
            };
          }
          const rect = this.content.getBoundingClientRect();
          return {
            top: rect.top,
            left: rect.left,
            scaleX: rect.width / this.content.clientWidth || 1,
            scaleY: rect.height / this.content.clientHeight || 1
          };
        }
        _buildDOM() {
          this.bufferCanvas = new Canvas_1.SceneCanvas({
            width: this.width(),
            height: this.height()
          });
          this.bufferHitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: 1,
            width: this.width(),
            height: this.height()
          });
          if (!Global_1.Konva.isBrowser) {
            return;
          }
          const container = this.container();
          if (!container) {
            throw "Stage has no container. A container is required.";
          }
          container.innerHTML = "";
          this.content = document.createElement("div");
          this.content.style.position = "relative";
          this.content.style.userSelect = "none";
          this.content.className = "konvajs-content";
          this.content.setAttribute("role", "presentation");
          container.appendChild(this.content);
          this._resizeDOM();
        }
        cache() {
          Util_1.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
          return this;
        }
        clearCache() {
          return this;
        }
        batchDraw() {
          this.getChildren().forEach(function(layer) {
            layer.batchDraw();
          });
          return this;
        }
      };
      exports2.Stage = Stage;
      Stage.prototype.nodeType = STAGE;
      (0, Global_2._registerNode)(Stage);
      Factory_1.Factory.addGetterSetter(Stage, "container");
      if (Global_1.Konva.isBrowser) {
        document.addEventListener("visibilitychange", () => {
          exports2.stages.forEach((stage) => {
            stage.batchDraw();
          });
        });
      }
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Shape.js
  var require_Shape = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Shape.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Shape = exports2.shapes = void 0;
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Global_2 = require_Global();
      var PointerEvents = require_PointerEvents();
      var HAS_SHADOW = "hasShadow";
      var SHADOW_RGBA = "shadowRGBA";
      var patternImage = "patternImage";
      var linearGradient = "linearGradient";
      var radialGradient = "radialGradient";
      var dummyContext;
      function getDummyContext() {
        if (dummyContext) {
          return dummyContext;
        }
        dummyContext = Util_1.Util.createCanvasElement().getContext("2d");
        return dummyContext;
      }
      exports2.shapes = {};
      function _fillFunc(context) {
        const fillRule = this.attrs.fillRule;
        if (fillRule) {
          context.fill(fillRule);
        } else {
          context.fill();
        }
      }
      function _strokeFunc(context) {
        context.stroke();
      }
      function _fillFuncHit(context) {
        const fillRule = this.attrs.fillRule;
        if (fillRule) {
          context.fill(fillRule);
        } else {
          context.fill();
        }
      }
      function _strokeFuncHit(context) {
        context.stroke();
      }
      function _clearHasShadowCache() {
        this._clearCache(HAS_SHADOW);
      }
      function _clearGetShadowRGBACache() {
        this._clearCache(SHADOW_RGBA);
      }
      function _clearFillPatternCache() {
        this._clearCache(patternImage);
      }
      function _clearLinearGradientCache() {
        this._clearCache(linearGradient);
      }
      function _clearRadialGradientCache() {
        this._clearCache(radialGradient);
      }
      var Shape = class extends Node_1.Node {
        constructor(config) {
          super(config);
          let key;
          while (true) {
            key = Util_1.Util.getRandomColor();
            if (key && !(key in exports2.shapes)) {
              break;
            }
          }
          this.colorKey = key;
          exports2.shapes[key] = this;
        }
        getContext() {
          Util_1.Util.warn("shape.getContext() method is deprecated. Please do not use it.");
          return this.getLayer().getContext();
        }
        getCanvas() {
          Util_1.Util.warn("shape.getCanvas() method is deprecated. Please do not use it.");
          return this.getLayer().getCanvas();
        }
        getSceneFunc() {
          return this.attrs.sceneFunc || this["_sceneFunc"];
        }
        getHitFunc() {
          return this.attrs.hitFunc || this["_hitFunc"];
        }
        hasShadow() {
          return this._getCache(HAS_SHADOW, this._hasShadow);
        }
        _hasShadow() {
          return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
        }
        _getFillPattern() {
          return this._getCache(patternImage, this.__getFillPattern);
        }
        __getFillPattern() {
          if (this.fillPatternImage()) {
            const ctx = getDummyContext();
            const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
            if (pattern && pattern.setTransform) {
              const tr = new Util_1.Transform();
              tr.translate(this.fillPatternX(), this.fillPatternY());
              tr.rotate(Global_1.Konva.getAngle(this.fillPatternRotation()));
              tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
              tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
              const m = tr.getMatrix();
              const matrix = typeof DOMMatrix === "undefined" ? {
                a: m[0],
                b: m[1],
                c: m[2],
                d: m[3],
                e: m[4],
                f: m[5]
              } : new DOMMatrix(m);
              pattern.setTransform(matrix);
            }
            return pattern;
          }
        }
        _getLinearGradient() {
          return this._getCache(linearGradient, this.__getLinearGradient);
        }
        __getLinearGradient() {
          const colorStops = this.fillLinearGradientColorStops();
          if (colorStops) {
            const ctx = getDummyContext();
            const start = this.fillLinearGradientStartPoint();
            const end = this.fillLinearGradientEndPoint();
            const grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
            for (let n = 0; n < colorStops.length; n += 2) {
              grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
          }
        }
        _getRadialGradient() {
          return this._getCache(radialGradient, this.__getRadialGradient);
        }
        __getRadialGradient() {
          const colorStops = this.fillRadialGradientColorStops();
          if (colorStops) {
            const ctx = getDummyContext();
            const start = this.fillRadialGradientStartPoint();
            const end = this.fillRadialGradientEndPoint();
            const grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
            for (let n = 0; n < colorStops.length; n += 2) {
              grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
          }
        }
        getShadowRGBA() {
          return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
        }
        _getShadowRGBA() {
          if (!this.hasShadow()) {
            return;
          }
          const rgba = Util_1.Util.colorToRGBA(this.shadowColor());
          if (rgba) {
            return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
          }
        }
        hasFill() {
          return this._calculate("hasFill", [
            "fillEnabled",
            "fill",
            "fillPatternImage",
            "fillLinearGradientColorStops",
            "fillRadialGradientColorStops"
          ], () => {
            return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
          });
        }
        hasStroke() {
          return this._calculate("hasStroke", [
            "strokeEnabled",
            "strokeWidth",
            "stroke",
            "strokeLinearGradientColorStops"
          ], () => {
            return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
          });
        }
        hasHitStroke() {
          const width = this.hitStrokeWidth();
          if (width === "auto") {
            return this.hasStroke();
          }
          return this.strokeEnabled() && !!width;
        }
        intersects(point) {
          const stage = this.getStage();
          if (!stage) {
            return false;
          }
          const bufferHitCanvas = stage.bufferHitCanvas;
          bufferHitCanvas.getContext().clear();
          this.drawHit(bufferHitCanvas, void 0, true);
          const p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
          return p[3] > 0;
        }
        destroy() {
          Node_1.Node.prototype.destroy.call(this);
          delete exports2.shapes[this.colorKey];
          delete this.colorKey;
          return this;
        }
        _useBufferCanvas(forceFill) {
          var _a;
          const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
          if (!perfectDrawEnabled) {
            return false;
          }
          const hasFill = forceFill || this.hasFill();
          const hasStroke = this.hasStroke();
          const isTransparent = this.getAbsoluteOpacity() !== 1;
          if (hasFill && hasStroke && isTransparent) {
            return true;
          }
          const hasShadow = this.hasShadow();
          const strokeForShadow = this.shadowForStrokeEnabled();
          if (hasFill && hasStroke && hasShadow && strokeForShadow) {
            return true;
          }
          return false;
        }
        setStrokeHitEnabled(val) {
          Util_1.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
          if (val) {
            this.hitStrokeWidth("auto");
          } else {
            this.hitStrokeWidth(0);
          }
        }
        getStrokeHitEnabled() {
          if (this.hitStrokeWidth() === 0) {
            return false;
          } else {
            return true;
          }
        }
        getSelfRect() {
          const size = this.size();
          return {
            x: this._centroid ? -size.width / 2 : 0,
            y: this._centroid ? -size.height / 2 : 0,
            width: size.width,
            height: size.height
          };
        }
        getClientRect(config = {}) {
          let hasCachedParent = false;
          let parent = this.getParent();
          while (parent) {
            if (parent.isCached()) {
              hasCachedParent = true;
              break;
            }
            parent = parent.getParent();
          }
          const skipTransform = config.skipTransform;
          const relativeTo = config.relativeTo || hasCachedParent && this.getStage() || void 0;
          const fillRect = this.getSelfRect();
          const applyStroke = !config.skipStroke && this.hasStroke();
          const strokeWidth = applyStroke && this.strokeWidth() || 0;
          const fillAndStrokeWidth = fillRect.width + strokeWidth;
          const fillAndStrokeHeight = fillRect.height + strokeWidth;
          const applyShadow = !config.skipShadow && this.hasShadow();
          const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
          const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
          const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
          const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
          const blurRadius = applyShadow && this.shadowBlur() || 0;
          const width = preWidth + blurRadius * 2;
          const height = preHeight + blurRadius * 2;
          const rect = {
            width,
            height,
            x: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
            y: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
          };
          if (!skipTransform) {
            return this._transformedRect(rect, relativeTo);
          }
          return rect;
        }
        drawScene(can, top, bufferCanvas) {
          const layer = this.getLayer();
          const canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow();
          let stage;
          const skipBuffer = false;
          const cachingSelf = top === this;
          if (!this.isVisible() && !cachingSelf) {
            return this;
          }
          if (cachedCanvas) {
            context.save();
            const m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
            return this;
          }
          if (!drawFunc) {
            return this;
          }
          context.save();
          if (this._useBufferCanvas() && !skipBuffer) {
            stage = this.getStage();
            const bc = bufferCanvas || stage.bufferCanvas;
            const bufferContext = bc.getContext();
            bufferContext.clear();
            bufferContext.save();
            bufferContext._applyLineJoin(this);
            const o = this.getAbsoluteTransform(top).getMatrix();
            bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
            drawFunc.call(this, bufferContext, this);
            bufferContext.restore();
            const ratio = bc.pixelRatio;
            if (hasShadow) {
              context._applyShadow(this);
            }
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
            context.drawImage(bc._canvas, bc.x || 0, bc.y || 0, bc.width / ratio, bc.height / ratio);
          } else {
            context._applyLineJoin(this);
            if (!cachingSelf) {
              const o = this.getAbsoluteTransform(top).getMatrix();
              context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
              context._applyOpacity(this);
              context._applyGlobalCompositeOperation(this);
            }
            if (hasShadow) {
              context._applyShadow(this);
            }
            drawFunc.call(this, context, this);
          }
          context.restore();
          return this;
        }
        drawHit(can, top, skipDragCheck = false) {
          if (!this.shouldDrawHit(top, skipDragCheck)) {
            return this;
          }
          const layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
          if (!this.colorKey) {
            Util_1.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
          }
          if (cachedHitCanvas) {
            context.save();
            const m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
            return this;
          }
          if (!drawFunc) {
            return this;
          }
          context.save();
          context._applyLineJoin(this);
          const selfCache = this === top;
          if (!selfCache) {
            const o = this.getAbsoluteTransform(top).getMatrix();
            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
          }
          drawFunc.call(this, context, this);
          context.restore();
          return this;
        }
        drawHitFromCache(alphaThreshold = 0) {
          const cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight();
          hitContext.clear();
          hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
          try {
            const hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
            const hitData = hitImageData.data;
            const len = hitData.length;
            const rgbColorKey = Util_1.Util._hexToRgb(this.colorKey);
            for (let i = 0; i < len; i += 4) {
              const alpha = hitData[i + 3];
              if (alpha > alphaThreshold) {
                hitData[i] = rgbColorKey.r;
                hitData[i + 1] = rgbColorKey.g;
                hitData[i + 2] = rgbColorKey.b;
                hitData[i + 3] = 255;
              } else {
                hitData[i + 3] = 0;
              }
            }
            hitContext.putImageData(hitImageData, 0, 0);
          } catch (e) {
            Util_1.Util.error("Unable to draw hit graph from cached scene canvas. " + e.message);
          }
          return this;
        }
        hasPointerCapture(pointerId) {
          return PointerEvents.hasPointerCapture(pointerId, this);
        }
        setPointerCapture(pointerId) {
          PointerEvents.setPointerCapture(pointerId, this);
        }
        releaseCapture(pointerId) {
          PointerEvents.releaseCapture(pointerId, this);
        }
      };
      exports2.Shape = Shape;
      Shape.prototype._fillFunc = _fillFunc;
      Shape.prototype._strokeFunc = _strokeFunc;
      Shape.prototype._fillFuncHit = _fillFuncHit;
      Shape.prototype._strokeFuncHit = _strokeFuncHit;
      Shape.prototype._centroid = false;
      Shape.prototype.nodeType = "Shape";
      (0, Global_2._registerNode)(Shape);
      Shape.prototype.eventListeners = {};
      Shape.prototype.on.call(Shape.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
      Shape.prototype.on.call(Shape.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
      Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", _clearFillPatternCache);
      Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
      Shape.prototype.on.call(Shape.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
      Factory_1.Factory.addGetterSetter(Shape, "stroke", void 0, (0, Validators_1.getStringOrGradientValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "strokeWidth", 2, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillAfterStrokeEnabled", false);
      Factory_1.Factory.addGetterSetter(Shape, "hitStrokeWidth", "auto", (0, Validators_1.getNumberOrAutoValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "strokeHitEnabled", true, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "perfectDrawEnabled", true, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "shadowForStrokeEnabled", true, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "lineJoin");
      Factory_1.Factory.addGetterSetter(Shape, "lineCap");
      Factory_1.Factory.addGetterSetter(Shape, "sceneFunc");
      Factory_1.Factory.addGetterSetter(Shape, "hitFunc");
      Factory_1.Factory.addGetterSetter(Shape, "dash");
      Factory_1.Factory.addGetterSetter(Shape, "dashOffset", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "shadowColor", void 0, (0, Validators_1.getStringValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "shadowBlur", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "shadowOpacity", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Shape, "shadowOffset", ["x", "y"]);
      Factory_1.Factory.addGetterSetter(Shape, "shadowOffsetX", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "shadowOffsetY", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternImage");
      Factory_1.Factory.addGetterSetter(Shape, "fill", void 0, (0, Validators_1.getStringOrGradientValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternX", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternY", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillLinearGradientColorStops");
      Factory_1.Factory.addGetterSetter(Shape, "strokeLinearGradientColorStops");
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientStartRadius", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientEndRadius", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientColorStops");
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternRepeat", "repeat");
      Factory_1.Factory.addGetterSetter(Shape, "fillEnabled", true);
      Factory_1.Factory.addGetterSetter(Shape, "strokeEnabled", true);
      Factory_1.Factory.addGetterSetter(Shape, "shadowEnabled", true);
      Factory_1.Factory.addGetterSetter(Shape, "dashEnabled", true);
      Factory_1.Factory.addGetterSetter(Shape, "strokeScaleEnabled", true);
      Factory_1.Factory.addGetterSetter(Shape, "fillPriority", "color");
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillPatternOffset", ["x", "y"]);
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternOffsetX", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternOffsetY", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillPatternScale", ["x", "y"]);
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternScaleX", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternScaleY", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillLinearGradientStartPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientStartPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addGetterSetter(Shape, "fillLinearGradientStartPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillLinearGradientStartPointY", 0);
      Factory_1.Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointY", 0);
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillLinearGradientEndPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientEndPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addGetterSetter(Shape, "fillLinearGradientEndPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillLinearGradientEndPointY", 0);
      Factory_1.Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointY", 0);
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillRadialGradientStartPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientStartPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientStartPointY", 0);
      Factory_1.Factory.addComponentsGetterSetter(Shape, "fillRadialGradientEndPoint", [
        "x",
        "y"
      ]);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientEndPointX", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillRadialGradientEndPointY", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillPatternRotation", 0);
      Factory_1.Factory.addGetterSetter(Shape, "fillRule", void 0, (0, Validators_1.getStringValidator)());
      Factory_1.Factory.backCompat(Shape, {
        dashArray: "dash",
        getDashArray: "getDash",
        setDashArray: "getDash",
        drawFunc: "sceneFunc",
        getDrawFunc: "getSceneFunc",
        setDrawFunc: "setSceneFunc",
        drawHitFunc: "hitFunc",
        getDrawHitFunc: "getHitFunc",
        setDrawHitFunc: "setHitFunc"
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Layer.js
  var require_Layer = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Layer.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Layer = void 0;
      var Util_1 = require_Util();
      var Container_1 = require_Container();
      var Node_1 = require_Node();
      var Factory_1 = require_Factory();
      var Canvas_1 = require_Canvas();
      var Validators_1 = require_Validators();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var HASH = "#";
      var BEFORE_DRAW = "beforeDraw";
      var DRAW = "draw";
      var INTERSECTION_OFFSETS = [
        { x: 0, y: 0 },
        { x: -1, y: -1 },
        { x: 1, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 1 }
      ];
      var INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
      var Layer = class extends Container_1.Container {
        constructor(config) {
          super(config);
          this.canvas = new Canvas_1.SceneCanvas();
          this.hitCanvas = new Canvas_1.HitCanvas({
            pixelRatio: 1
          });
          this._waitingForDraw = false;
          this.on("visibleChange.konva", this._checkVisibility);
          this._checkVisibility();
          this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
          this._setSmoothEnabled();
        }
        createPNGStream() {
          const c = this.canvas._canvas;
          return c.createPNGStream();
        }
        getCanvas() {
          return this.canvas;
        }
        getNativeCanvasElement() {
          return this.canvas._canvas;
        }
        getHitCanvas() {
          return this.hitCanvas;
        }
        getContext() {
          return this.getCanvas().getContext();
        }
        clear(bounds) {
          this.getContext().clear(bounds);
          this.getHitCanvas().getContext().clear(bounds);
          return this;
        }
        setZIndex(index) {
          super.setZIndex(index);
          const stage = this.getStage();
          if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            if (index < stage.children.length - 1) {
              stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
            } else {
              stage.content.appendChild(this.getNativeCanvasElement());
            }
          }
          return this;
        }
        moveToTop() {
          Node_1.Node.prototype.moveToTop.call(this);
          const stage = this.getStage();
          if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            stage.content.appendChild(this.getNativeCanvasElement());
          }
          return true;
        }
        moveUp() {
          const moved = Node_1.Node.prototype.moveUp.call(this);
          if (!moved) {
            return false;
          }
          const stage = this.getStage();
          if (!stage || !stage.content) {
            return false;
          }
          stage.content.removeChild(this.getNativeCanvasElement());
          if (this.index < stage.children.length - 1) {
            stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
          } else {
            stage.content.appendChild(this.getNativeCanvasElement());
          }
          return true;
        }
        moveDown() {
          if (Node_1.Node.prototype.moveDown.call(this)) {
            const stage = this.getStage();
            if (stage) {
              const children = stage.children;
              if (stage.content) {
                stage.content.removeChild(this.getNativeCanvasElement());
                stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
              }
            }
            return true;
          }
          return false;
        }
        moveToBottom() {
          if (Node_1.Node.prototype.moveToBottom.call(this)) {
            const stage = this.getStage();
            if (stage) {
              const children = stage.children;
              if (stage.content) {
                stage.content.removeChild(this.getNativeCanvasElement());
                stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
              }
            }
            return true;
          }
          return false;
        }
        getLayer() {
          return this;
        }
        remove() {
          const _canvas = this.getNativeCanvasElement();
          Node_1.Node.prototype.remove.call(this);
          if (_canvas && _canvas.parentNode && Util_1.Util._isInDocument(_canvas)) {
            _canvas.parentNode.removeChild(_canvas);
          }
          return this;
        }
        getStage() {
          return this.parent;
        }
        setSize({ width, height }) {
          this.canvas.setSize(width, height);
          this.hitCanvas.setSize(width, height);
          this._setSmoothEnabled();
          return this;
        }
        _validateAdd(child) {
          const type = child.getType();
          if (type !== "Group" && type !== "Shape") {
            Util_1.Util.throw("You may only add groups and shapes to a layer.");
          }
        }
        _toKonvaCanvas(config) {
          config = config || {};
          config.width = config.width || this.getWidth();
          config.height = config.height || this.getHeight();
          config.x = config.x !== void 0 ? config.x : this.x();
          config.y = config.y !== void 0 ? config.y : this.y();
          return Node_1.Node.prototype._toKonvaCanvas.call(this, config);
        }
        _checkVisibility() {
          const visible = this.visible();
          if (visible) {
            this.canvas._canvas.style.display = "block";
          } else {
            this.canvas._canvas.style.display = "none";
          }
        }
        _setSmoothEnabled() {
          this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
        }
        getWidth() {
          if (this.parent) {
            return this.parent.width();
          }
        }
        setWidth() {
          Util_1.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
        }
        getHeight() {
          if (this.parent) {
            return this.parent.height();
          }
        }
        setHeight() {
          Util_1.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
        }
        batchDraw() {
          if (!this._waitingForDraw) {
            this._waitingForDraw = true;
            Util_1.Util.requestAnimFrame(() => {
              this.draw();
              this._waitingForDraw = false;
            });
          }
          return this;
        }
        getIntersection(pos) {
          if (!this.isListening() || !this.isVisible()) {
            return null;
          }
          let spiralSearchDistance = 1;
          let continueSearch = false;
          while (true) {
            for (let i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
              const intersectionOffset = INTERSECTION_OFFSETS[i];
              const obj = this._getIntersection({
                x: pos.x + intersectionOffset.x * spiralSearchDistance,
                y: pos.y + intersectionOffset.y * spiralSearchDistance
              });
              const shape = obj.shape;
              if (shape) {
                return shape;
              }
              continueSearch = !!obj.antialiased;
              if (!obj.antialiased) {
                break;
              }
            }
            if (continueSearch) {
              spiralSearchDistance += 1;
            } else {
              return null;
            }
          }
        }
        _getIntersection(pos) {
          const ratio = this.hitCanvas.pixelRatio;
          const p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
          const p3 = p[3];
          if (p3 === 255) {
            const colorKey = Util_1.Util._rgbToHex(p[0], p[1], p[2]);
            const shape = Shape_1.shapes[HASH + colorKey];
            if (shape) {
              return {
                shape
              };
            }
            return {
              antialiased: true
            };
          } else if (p3 > 0) {
            return {
              antialiased: true
            };
          }
          return {};
        }
        drawScene(can, top, bufferCanvas) {
          const layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
          this._fire(BEFORE_DRAW, {
            node: this
          });
          if (this.clearBeforeDraw()) {
            canvas.getContext().clear();
          }
          Container_1.Container.prototype.drawScene.call(this, canvas, top, bufferCanvas);
          this._fire(DRAW, {
            node: this
          });
          return this;
        }
        drawHit(can, top) {
          const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
          if (layer && layer.clearBeforeDraw()) {
            layer.getHitCanvas().getContext().clear();
          }
          Container_1.Container.prototype.drawHit.call(this, canvas, top);
          return this;
        }
        enableHitGraph() {
          this.hitGraphEnabled(true);
          return this;
        }
        disableHitGraph() {
          this.hitGraphEnabled(false);
          return this;
        }
        setHitGraphEnabled(val) {
          Util_1.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
          this.listening(val);
        }
        getHitGraphEnabled(val) {
          Util_1.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
          return this.listening();
        }
        toggleHitCanvas() {
          if (!this.parent || !this.parent["content"]) {
            return;
          }
          const parent = this.parent;
          const added = !!this.hitCanvas._canvas.parentNode;
          if (added) {
            parent.content.removeChild(this.hitCanvas._canvas);
          } else {
            parent.content.appendChild(this.hitCanvas._canvas);
          }
        }
        destroy() {
          Util_1.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas);
          return super.destroy();
        }
      };
      exports2.Layer = Layer;
      Layer.prototype.nodeType = "Layer";
      (0, Global_1._registerNode)(Layer);
      Factory_1.Factory.addGetterSetter(Layer, "imageSmoothingEnabled", true);
      Factory_1.Factory.addGetterSetter(Layer, "clearBeforeDraw", true);
      Factory_1.Factory.addGetterSetter(Layer, "hitGraphEnabled", true, (0, Validators_1.getBooleanValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/FastLayer.js
  var require_FastLayer = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/FastLayer.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.FastLayer = void 0;
      var Util_1 = require_Util();
      var Layer_1 = require_Layer();
      var Global_1 = require_Global();
      var FastLayer = class extends Layer_1.Layer {
        constructor(attrs) {
          super(attrs);
          this.listening(false);
          Util_1.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
        }
      };
      exports2.FastLayer = FastLayer;
      FastLayer.prototype.nodeType = "FastLayer";
      (0, Global_1._registerNode)(FastLayer);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Group.js
  var require_Group = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Group.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Group = void 0;
      var Util_1 = require_Util();
      var Container_1 = require_Container();
      var Global_1 = require_Global();
      var Group = class extends Container_1.Container {
        _validateAdd(child) {
          const type = child.getType();
          if (type !== "Group" && type !== "Shape") {
            Util_1.Util.throw("You may only add groups and shapes to groups.");
          }
        }
      };
      exports2.Group = Group;
      Group.prototype.nodeType = "Group";
      (0, Global_1._registerNode)(Group);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Animation.js
  var require_Animation = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Animation.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Animation = void 0;
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      var now = (function() {
        if (Global_1.glob.performance && Global_1.glob.performance.now) {
          return function() {
            return Global_1.glob.performance.now();
          };
        }
        return function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
      })();
      var Animation = class _Animation {
        constructor(func, layers) {
          this.id = _Animation.animIdCounter++;
          this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: now(),
            frameRate: 0
          };
          this.func = func;
          this.setLayers(layers);
        }
        setLayers(layers) {
          let lays = [];
          if (layers) {
            lays = Array.isArray(layers) ? layers : [layers];
          }
          this.layers = lays;
          return this;
        }
        getLayers() {
          return this.layers;
        }
        addLayer(layer) {
          const layers = this.layers;
          const len = layers.length;
          for (let n = 0; n < len; n++) {
            if (layers[n]._id === layer._id) {
              return false;
            }
          }
          this.layers.push(layer);
          return true;
        }
        isRunning() {
          const a = _Animation;
          const animations = a.animations;
          const len = animations.length;
          for (let n = 0; n < len; n++) {
            if (animations[n].id === this.id) {
              return true;
            }
          }
          return false;
        }
        start() {
          this.stop();
          this.frame.timeDiff = 0;
          this.frame.lastTime = now();
          _Animation._addAnimation(this);
          return this;
        }
        stop() {
          _Animation._removeAnimation(this);
          return this;
        }
        _updateFrameObject(time) {
          this.frame.timeDiff = time - this.frame.lastTime;
          this.frame.lastTime = time;
          this.frame.time += this.frame.timeDiff;
          this.frame.frameRate = 1e3 / this.frame.timeDiff;
        }
        static _addAnimation(anim) {
          this.animations.push(anim);
          this._handleAnimation();
        }
        static _removeAnimation(anim) {
          const id = anim.id;
          const animations = this.animations;
          const len = animations.length;
          for (let n = 0; n < len; n++) {
            if (animations[n].id === id) {
              this.animations.splice(n, 1);
              break;
            }
          }
        }
        static _runFrames() {
          const layerHash = {};
          const animations = this.animations;
          for (let n = 0; n < animations.length; n++) {
            const anim = animations[n];
            const layers = anim.layers;
            const func = anim.func;
            anim._updateFrameObject(now());
            const layersLen = layers.length;
            let needRedraw;
            if (func) {
              needRedraw = func.call(anim, anim.frame) !== false;
            } else {
              needRedraw = true;
            }
            if (!needRedraw) {
              continue;
            }
            for (let i = 0; i < layersLen; i++) {
              const layer = layers[i];
              if (layer._id !== void 0) {
                layerHash[layer._id] = layer;
              }
            }
          }
          for (const key in layerHash) {
            if (!layerHash.hasOwnProperty(key)) {
              continue;
            }
            layerHash[key].batchDraw();
          }
        }
        static _animationLoop() {
          const Anim = _Animation;
          if (Anim.animations.length) {
            Anim._runFrames();
            Util_1.Util.requestAnimFrame(Anim._animationLoop);
          } else {
            Anim.animRunning = false;
          }
        }
        static _handleAnimation() {
          if (!this.animRunning) {
            this.animRunning = true;
            Util_1.Util.requestAnimFrame(this._animationLoop);
          }
        }
      };
      exports2.Animation = Animation;
      Animation.animations = [];
      Animation.animIdCounter = 0;
      Animation.animRunning = false;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Tween.js
  var require_Tween = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/Tween.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Easings = exports2.Tween = void 0;
      var Util_1 = require_Util();
      var Animation_1 = require_Animation();
      var Node_1 = require_Node();
      var Global_1 = require_Global();
      var blacklist = {
        node: 1,
        duration: 1,
        easing: 1,
        onFinish: 1,
        yoyo: 1
      };
      var PAUSED = 1;
      var PLAYING = 2;
      var REVERSING = 3;
      var colorAttrs = ["fill", "stroke", "shadowColor"];
      var idCounter = 0;
      var TweenEngine = class {
        constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
          this.prop = prop;
          this.propFunc = propFunc;
          this.begin = begin;
          this._pos = begin;
          this.duration = duration;
          this._change = 0;
          this.prevPos = 0;
          this.yoyo = yoyo;
          this._time = 0;
          this._position = 0;
          this._startTime = 0;
          this._finish = 0;
          this.func = func;
          this._change = finish - this.begin;
          this.pause();
        }
        fire(str) {
          const handler = this[str];
          if (handler) {
            handler();
          }
        }
        setTime(t) {
          if (t > this.duration) {
            if (this.yoyo) {
              this._time = this.duration;
              this.reverse();
            } else {
              this.finish();
            }
          } else if (t < 0) {
            if (this.yoyo) {
              this._time = 0;
              this.play();
            } else {
              this.reset();
            }
          } else {
            this._time = t;
            this.update();
          }
        }
        getTime() {
          return this._time;
        }
        setPosition(p) {
          this.prevPos = this._pos;
          this.propFunc(p);
          this._pos = p;
        }
        getPosition(t) {
          if (t === void 0) {
            t = this._time;
          }
          return this.func(t, this.begin, this._change, this.duration);
        }
        play() {
          this.state = PLAYING;
          this._startTime = this.getTimer() - this._time;
          this.onEnterFrame();
          this.fire("onPlay");
        }
        reverse() {
          this.state = REVERSING;
          this._time = this.duration - this._time;
          this._startTime = this.getTimer() - this._time;
          this.onEnterFrame();
          this.fire("onReverse");
        }
        seek(t) {
          this.pause();
          this._time = t;
          this.update();
          this.fire("onSeek");
        }
        reset() {
          this.pause();
          this._time = 0;
          this.update();
          this.fire("onReset");
        }
        finish() {
          this.pause();
          this._time = this.duration;
          this.update();
          this.fire("onFinish");
        }
        update() {
          this.setPosition(this.getPosition(this._time));
          this.fire("onUpdate");
        }
        onEnterFrame() {
          const t = this.getTimer() - this._startTime;
          if (this.state === PLAYING) {
            this.setTime(t);
          } else if (this.state === REVERSING) {
            this.setTime(this.duration - t);
          }
        }
        pause() {
          this.state = PAUSED;
          this.fire("onPause");
        }
        getTimer() {
          return (/* @__PURE__ */ new Date()).getTime();
        }
      };
      var Tween = class _Tween {
        constructor(config) {
          const that = this, node = config.node, nodeId = node._id, easing = config.easing || exports2.Easings.Linear, yoyo = !!config.yoyo;
          let duration, key;
          if (typeof config.duration === "undefined") {
            duration = 0.3;
          } else if (config.duration === 0) {
            duration = 1e-3;
          } else {
            duration = config.duration;
          }
          this.node = node;
          this._id = idCounter++;
          const layers = node.getLayer() || (node instanceof Global_1.Konva["Stage"] ? node.getLayers() : null);
          if (!layers) {
            Util_1.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
          }
          this.anim = new Animation_1.Animation(function() {
            that.tween.onEnterFrame();
          }, layers);
          this.tween = new TweenEngine(key, function(i) {
            that._tweenFunc(i);
          }, easing, 0, 1, duration * 1e3, yoyo);
          this._addListeners();
          if (!_Tween.attrs[nodeId]) {
            _Tween.attrs[nodeId] = {};
          }
          if (!_Tween.attrs[nodeId][this._id]) {
            _Tween.attrs[nodeId][this._id] = {};
          }
          if (!_Tween.tweens[nodeId]) {
            _Tween.tweens[nodeId] = {};
          }
          for (key in config) {
            if (blacklist[key] === void 0) {
              this._addAttr(key, config[key]);
            }
          }
          this.reset();
          this.onFinish = config.onFinish;
          this.onReset = config.onReset;
          this.onUpdate = config.onUpdate;
        }
        _addAttr(key, end) {
          const node = this.node, nodeId = node._id;
          let diff, len, trueEnd, trueStart, endRGBA;
          const tweenId = _Tween.tweens[nodeId][key];
          if (tweenId) {
            delete _Tween.attrs[nodeId][tweenId][key];
          }
          let start = node.getAttr(key);
          if (Util_1.Util._isArray(end)) {
            diff = [];
            len = Math.max(end.length, start.length);
            if (key === "points" && end.length !== start.length) {
              if (end.length > start.length) {
                trueStart = start;
                start = Util_1.Util._prepareArrayForTween(start, end, node.closed());
              } else {
                trueEnd = end;
                end = Util_1.Util._prepareArrayForTween(end, start, node.closed());
              }
            }
            if (key.indexOf("fill") === 0) {
              for (let n = 0; n < len; n++) {
                if (n % 2 === 0) {
                  diff.push(end[n] - start[n]);
                } else {
                  const startRGBA = Util_1.Util.colorToRGBA(start[n]);
                  endRGBA = Util_1.Util.colorToRGBA(end[n]);
                  start[n] = startRGBA;
                  diff.push({
                    r: endRGBA.r - startRGBA.r,
                    g: endRGBA.g - startRGBA.g,
                    b: endRGBA.b - startRGBA.b,
                    a: endRGBA.a - startRGBA.a
                  });
                }
              }
            } else {
              for (let n = 0; n < len; n++) {
                diff.push(end[n] - start[n]);
              }
            }
          } else if (colorAttrs.indexOf(key) !== -1) {
            start = Util_1.Util.colorToRGBA(start);
            endRGBA = Util_1.Util.colorToRGBA(end);
            diff = {
              r: endRGBA.r - start.r,
              g: endRGBA.g - start.g,
              b: endRGBA.b - start.b,
              a: endRGBA.a - start.a
            };
          } else {
            diff = end - start;
          }
          _Tween.attrs[nodeId][this._id][key] = {
            start,
            diff,
            end,
            trueEnd,
            trueStart
          };
          _Tween.tweens[nodeId][key] = this._id;
        }
        _tweenFunc(i) {
          const node = this.node, attrs = _Tween.attrs[node._id][this._id];
          let key, attr, start, diff, newVal, n, len, end;
          for (key in attrs) {
            attr = attrs[key];
            start = attr.start;
            diff = attr.diff;
            end = attr.end;
            if (Util_1.Util._isArray(start)) {
              newVal = [];
              len = Math.max(start.length, end.length);
              if (key.indexOf("fill") === 0) {
                for (n = 0; n < len; n++) {
                  if (n % 2 === 0) {
                    newVal.push((start[n] || 0) + diff[n] * i);
                  } else {
                    newVal.push("rgba(" + Math.round(start[n].r + diff[n].r * i) + "," + Math.round(start[n].g + diff[n].g * i) + "," + Math.round(start[n].b + diff[n].b * i) + "," + (start[n].a + diff[n].a * i) + ")");
                  }
                }
              } else {
                for (n = 0; n < len; n++) {
                  newVal.push((start[n] || 0) + diff[n] * i);
                }
              }
            } else if (colorAttrs.indexOf(key) !== -1) {
              newVal = "rgba(" + Math.round(start.r + diff.r * i) + "," + Math.round(start.g + diff.g * i) + "," + Math.round(start.b + diff.b * i) + "," + (start.a + diff.a * i) + ")";
            } else {
              newVal = start + diff * i;
            }
            node.setAttr(key, newVal);
          }
        }
        _addListeners() {
          this.tween.onPlay = () => {
            this.anim.start();
          };
          this.tween.onReverse = () => {
            this.anim.start();
          };
          this.tween.onPause = () => {
            this.anim.stop();
          };
          this.tween.onFinish = () => {
            const node = this.node;
            const attrs = _Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueEnd) {
              node.setAttr("points", attrs.points.trueEnd);
            }
            if (this.onFinish) {
              this.onFinish.call(this);
            }
          };
          this.tween.onReset = () => {
            const node = this.node;
            const attrs = _Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueStart) {
              node.points(attrs.points.trueStart);
            }
            if (this.onReset) {
              this.onReset();
            }
          };
          this.tween.onUpdate = () => {
            if (this.onUpdate) {
              this.onUpdate.call(this);
            }
          };
        }
        play() {
          this.tween.play();
          return this;
        }
        reverse() {
          this.tween.reverse();
          return this;
        }
        reset() {
          this.tween.reset();
          return this;
        }
        seek(t) {
          this.tween.seek(t * 1e3);
          return this;
        }
        pause() {
          this.tween.pause();
          return this;
        }
        finish() {
          this.tween.finish();
          return this;
        }
        destroy() {
          const nodeId = this.node._id, thisId = this._id, attrs = _Tween.tweens[nodeId];
          this.pause();
          if (this.anim) {
            this.anim.stop();
          }
          for (const key in attrs) {
            delete _Tween.tweens[nodeId][key];
          }
          delete _Tween.attrs[nodeId][thisId];
          if (_Tween.tweens[nodeId]) {
            if (Object.keys(_Tween.tweens[nodeId]).length === 0) {
              delete _Tween.tweens[nodeId];
            }
            if (Object.keys(_Tween.attrs[nodeId]).length === 0) {
              delete _Tween.attrs[nodeId];
            }
          }
        }
      };
      exports2.Tween = Tween;
      Tween.attrs = {};
      Tween.tweens = {};
      Node_1.Node.prototype.to = function(params) {
        const onFinish = params.onFinish;
        params.node = this;
        params.onFinish = function() {
          this.destroy();
          if (onFinish) {
            onFinish();
          }
        };
        const tween = new Tween(params);
        tween.play();
      };
      exports2.Easings = {
        BackEaseIn(t, b, c, d) {
          const s = 1.70158;
          return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        BackEaseOut(t, b, c, d) {
          const s = 1.70158;
          return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        BackEaseInOut(t, b, c, d) {
          let s = 1.70158;
          if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
          }
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        },
        ElasticEaseIn(t, b, c, d, a, p) {
          let s = 0;
          if (t === 0) {
            return b;
          }
          if ((t /= d) === 1) {
            return b + c;
          }
          if (!p) {
            p = d * 0.3;
          }
          if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
          }
          return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        ElasticEaseOut(t, b, c, d, a, p) {
          let s = 0;
          if (t === 0) {
            return b;
          }
          if ((t /= d) === 1) {
            return b + c;
          }
          if (!p) {
            p = d * 0.3;
          }
          if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
          }
          return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        ElasticEaseInOut(t, b, c, d, a, p) {
          let s = 0;
          if (t === 0) {
            return b;
          }
          if ((t /= d / 2) === 2) {
            return b + c;
          }
          if (!p) {
            p = d * (0.3 * 1.5);
          }
          if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
          } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
          }
          if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          }
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        },
        BounceEaseOut(t, b, c, d) {
          if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
          } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
          } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
          } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
          }
        },
        BounceEaseIn(t, b, c, d) {
          return c - exports2.Easings.BounceEaseOut(d - t, 0, c, d) + b;
        },
        BounceEaseInOut(t, b, c, d) {
          if (t < d / 2) {
            return exports2.Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
          } else {
            return exports2.Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
          }
        },
        EaseIn(t, b, c, d) {
          return c * (t /= d) * t + b;
        },
        EaseOut(t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        },
        EaseInOut(t, b, c, d) {
          if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
          }
          return -c / 2 * (--t * (t - 2) - 1) + b;
        },
        StrongEaseIn(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        },
        StrongEaseOut(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        StrongEaseInOut(t, b, c, d) {
          if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
          }
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        Linear(t, b, c, d) {
          return c * t / d + b;
        }
      };
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/_CoreInternals.js
  var require_CoreInternals = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/_CoreInternals.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Konva = void 0;
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      var Node_1 = require_Node();
      var Container_1 = require_Container();
      var Stage_1 = require_Stage();
      var Layer_1 = require_Layer();
      var FastLayer_1 = require_FastLayer();
      var Group_1 = require_Group();
      var DragAndDrop_1 = require_DragAndDrop();
      var Shape_1 = require_Shape();
      var Animation_1 = require_Animation();
      var Tween_1 = require_Tween();
      var Context_1 = require_Context();
      var Canvas_1 = require_Canvas();
      exports2.Konva = Util_1.Util._assign(Global_1.Konva, {
        Util: Util_1.Util,
        Transform: Util_1.Transform,
        Node: Node_1.Node,
        Container: Container_1.Container,
        Stage: Stage_1.Stage,
        stages: Stage_1.stages,
        Layer: Layer_1.Layer,
        FastLayer: FastLayer_1.FastLayer,
        Group: Group_1.Group,
        DD: DragAndDrop_1.DD,
        Shape: Shape_1.Shape,
        shapes: Shape_1.shapes,
        Animation: Animation_1.Animation,
        Tween: Tween_1.Tween,
        Easings: Tween_1.Easings,
        Context: Context_1.Context,
        Canvas: Canvas_1.Canvas
      });
      exports2.default = exports2.Konva;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Arc.js
  var require_Arc = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Arc.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Arc = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var Validators_1 = require_Validators();
      var Global_2 = require_Global();
      var Arc = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const angle = Global_1.Konva.getAngle(this.angle()), clockwise = this.clockwise();
          context.beginPath();
          context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
          context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.outerRadius() * 2;
        }
        getHeight() {
          return this.outerRadius() * 2;
        }
        setWidth(width) {
          this.outerRadius(width / 2);
        }
        setHeight(height) {
          this.outerRadius(height / 2);
        }
        getSelfRect() {
          const innerRadius = this.innerRadius();
          const outerRadius = this.outerRadius();
          const clockwise = this.clockwise();
          const angle = Global_1.Konva.getAngle(clockwise ? 360 - this.angle() : this.angle());
          const boundLeftRatio = Math.cos(Math.min(angle, Math.PI));
          const boundRightRatio = 1;
          const boundTopRatio = Math.sin(Math.min(Math.max(Math.PI, angle), 3 * Math.PI / 2));
          const boundBottomRatio = Math.sin(Math.min(angle, Math.PI / 2));
          const boundLeft = boundLeftRatio * (boundLeftRatio > 0 ? innerRadius : outerRadius);
          const boundRight = boundRightRatio * (boundRightRatio > 0 ? outerRadius : innerRadius);
          const boundTop = boundTopRatio * (boundTopRatio > 0 ? innerRadius : outerRadius);
          const boundBottom = boundBottomRatio * (boundBottomRatio > 0 ? outerRadius : innerRadius);
          return {
            x: boundLeft,
            y: clockwise ? -1 * boundBottom : boundTop,
            width: boundRight - boundLeft,
            height: boundBottom - boundTop
          };
        }
      };
      exports2.Arc = Arc;
      Arc.prototype._centroid = true;
      Arc.prototype.className = "Arc";
      Arc.prototype._attrsAffectingSize = [
        "innerRadius",
        "outerRadius",
        "angle",
        "clockwise"
      ];
      (0, Global_2._registerNode)(Arc);
      Factory_1.Factory.addGetterSetter(Arc, "innerRadius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Arc, "outerRadius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Arc, "angle", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Arc, "clockwise", false, (0, Validators_1.getBooleanValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Line.js
  var require_Line = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Line.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Line = void 0;
      var Factory_1 = require_Factory();
      var Global_1 = require_Global();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
        const d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = t * d01 / (d01 + d12), fb = t * d12 / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
        return [p1x, p1y, p2x, p2y];
      }
      function expandPoints(p, tension) {
        const len = p.length, allPoints = [];
        for (let n = 2; n < len - 2; n += 2) {
          const cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
          if (isNaN(cp[0])) {
            continue;
          }
          allPoints.push(cp[0]);
          allPoints.push(cp[1]);
          allPoints.push(p[n]);
          allPoints.push(p[n + 1]);
          allPoints.push(cp[2]);
          allPoints.push(cp[3]);
        }
        return allPoints;
      }
      var Line = class extends Shape_1.Shape {
        constructor(config) {
          super(config);
          this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
            this._clearCache("tensionPoints");
          });
        }
        _sceneFunc(context) {
          const points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier();
          if (!length) {
            return;
          }
          let n = 0;
          context.beginPath();
          context.moveTo(points[0], points[1]);
          if (tension !== 0 && length > 4) {
            const tp = this.getTensionPoints();
            const len = tp.length;
            n = closed ? 0 : 4;
            if (!closed) {
              context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
            }
            while (n < len - 2) {
              context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
            }
            if (!closed) {
              context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
            }
          } else if (bezier) {
            n = 2;
            while (n < length) {
              context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
            }
          } else {
            for (n = 2; n < length; n += 2) {
              context.lineTo(points[n], points[n + 1]);
            }
          }
          if (closed) {
            context.closePath();
            context.fillStrokeShape(this);
          } else {
            context.strokeShape(this);
          }
        }
        getTensionPoints() {
          return this._getCache("tensionPoints", this._getTensionPoints);
        }
        _getTensionPoints() {
          if (this.closed()) {
            return this._getTensionPointsClosed();
          } else {
            return expandPoints(this.points(), this.tension());
          }
        }
        _getTensionPointsClosed() {
          const p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension), tp = [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([
            lastControlPoints[0],
            lastControlPoints[1],
            p[len - 2],
            p[len - 1],
            lastControlPoints[2],
            lastControlPoints[3],
            firstControlPoints[0],
            firstControlPoints[1],
            p[0],
            p[1]
          ]);
          return tp;
        }
        getWidth() {
          return this.getSelfRect().width;
        }
        getHeight() {
          return this.getSelfRect().height;
        }
        getSelfRect() {
          let points = this.points();
          if (points.length < 4) {
            return {
              x: points[0] || 0,
              y: points[1] || 0,
              width: 0,
              height: 0
            };
          }
          if (this.tension() !== 0) {
            points = [
              points[0],
              points[1],
              ...this._getTensionPoints(),
              points[points.length - 2],
              points[points.length - 1]
            ];
          } else {
            points = this.points();
          }
          let minX = points[0];
          let maxX = points[0];
          let minY = points[1];
          let maxY = points[1];
          let x, y;
          for (let i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
          }
          return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
          };
        }
      };
      exports2.Line = Line;
      Line.prototype.className = "Line";
      Line.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
      (0, Global_1._registerNode)(Line);
      Factory_1.Factory.addGetterSetter(Line, "closed", false);
      Factory_1.Factory.addGetterSetter(Line, "bezier", false);
      Factory_1.Factory.addGetterSetter(Line, "tension", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Line, "points", [], (0, Validators_1.getNumberArrayValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/BezierFunctions.js
  var require_BezierFunctions = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/BezierFunctions.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.t2length = exports2.getQuadraticArcLength = exports2.getCubicArcLength = exports2.binomialCoefficients = exports2.cValues = exports2.tValues = void 0;
      exports2.tValues = [
        [],
        [],
        [
          -0.5773502691896257,
          0.5773502691896257
        ],
        [
          0,
          -0.7745966692414834,
          0.7745966692414834
        ],
        [
          -0.33998104358485626,
          0.33998104358485626,
          -0.8611363115940526,
          0.8611363115940526
        ],
        [
          0,
          -0.5384693101056831,
          0.5384693101056831,
          -0.906179845938664,
          0.906179845938664
        ],
        [
          0.6612093864662645,
          -0.6612093864662645,
          -0.2386191860831969,
          0.2386191860831969,
          -0.932469514203152,
          0.932469514203152
        ],
        [
          0,
          0.4058451513773972,
          -0.4058451513773972,
          -0.7415311855993945,
          0.7415311855993945,
          -0.9491079123427585,
          0.9491079123427585
        ],
        [
          -0.1834346424956498,
          0.1834346424956498,
          -0.525532409916329,
          0.525532409916329,
          -0.7966664774136267,
          0.7966664774136267,
          -0.9602898564975363,
          0.9602898564975363
        ],
        [
          0,
          -0.8360311073266358,
          0.8360311073266358,
          -0.9681602395076261,
          0.9681602395076261,
          -0.3242534234038089,
          0.3242534234038089,
          -0.6133714327005904,
          0.6133714327005904
        ],
        [
          -0.14887433898163122,
          0.14887433898163122,
          -0.4333953941292472,
          0.4333953941292472,
          -0.6794095682990244,
          0.6794095682990244,
          -0.8650633666889845,
          0.8650633666889845,
          -0.9739065285171717,
          0.9739065285171717
        ],
        [
          0,
          -0.26954315595234496,
          0.26954315595234496,
          -0.5190961292068118,
          0.5190961292068118,
          -0.7301520055740494,
          0.7301520055740494,
          -0.8870625997680953,
          0.8870625997680953,
          -0.978228658146057,
          0.978228658146057
        ],
        [
          -0.1252334085114689,
          0.1252334085114689,
          -0.3678314989981802,
          0.3678314989981802,
          -0.5873179542866175,
          0.5873179542866175,
          -0.7699026741943047,
          0.7699026741943047,
          -0.9041172563704749,
          0.9041172563704749,
          -0.9815606342467192,
          0.9815606342467192
        ],
        [
          0,
          -0.2304583159551348,
          0.2304583159551348,
          -0.44849275103644687,
          0.44849275103644687,
          -0.6423493394403402,
          0.6423493394403402,
          -0.8015780907333099,
          0.8015780907333099,
          -0.9175983992229779,
          0.9175983992229779,
          -0.9841830547185881,
          0.9841830547185881
        ],
        [
          -0.10805494870734367,
          0.10805494870734367,
          -0.31911236892788974,
          0.31911236892788974,
          -0.5152486363581541,
          0.5152486363581541,
          -0.6872929048116855,
          0.6872929048116855,
          -0.827201315069765,
          0.827201315069765,
          -0.9284348836635735,
          0.9284348836635735,
          -0.9862838086968123,
          0.9862838086968123
        ],
        [
          0,
          -0.20119409399743451,
          0.20119409399743451,
          -0.3941513470775634,
          0.3941513470775634,
          -0.5709721726085388,
          0.5709721726085388,
          -0.7244177313601701,
          0.7244177313601701,
          -0.8482065834104272,
          0.8482065834104272,
          -0.937273392400706,
          0.937273392400706,
          -0.9879925180204854,
          0.9879925180204854
        ],
        [
          -0.09501250983763744,
          0.09501250983763744,
          -0.2816035507792589,
          0.2816035507792589,
          -0.45801677765722737,
          0.45801677765722737,
          -0.6178762444026438,
          0.6178762444026438,
          -0.755404408355003,
          0.755404408355003,
          -0.8656312023878318,
          0.8656312023878318,
          -0.9445750230732326,
          0.9445750230732326,
          -0.9894009349916499,
          0.9894009349916499
        ],
        [
          0,
          -0.17848418149584785,
          0.17848418149584785,
          -0.3512317634538763,
          0.3512317634538763,
          -0.5126905370864769,
          0.5126905370864769,
          -0.6576711592166907,
          0.6576711592166907,
          -0.7815140038968014,
          0.7815140038968014,
          -0.8802391537269859,
          0.8802391537269859,
          -0.9506755217687678,
          0.9506755217687678,
          -0.9905754753144174,
          0.9905754753144174
        ],
        [
          -0.0847750130417353,
          0.0847750130417353,
          -0.2518862256915055,
          0.2518862256915055,
          -0.41175116146284263,
          0.41175116146284263,
          -0.5597708310739475,
          0.5597708310739475,
          -0.6916870430603532,
          0.6916870430603532,
          -0.8037049589725231,
          0.8037049589725231,
          -0.8926024664975557,
          0.8926024664975557,
          -0.9558239495713977,
          0.9558239495713977,
          -0.9915651684209309,
          0.9915651684209309
        ],
        [
          0,
          -0.16035864564022537,
          0.16035864564022537,
          -0.31656409996362983,
          0.31656409996362983,
          -0.46457074137596094,
          0.46457074137596094,
          -0.600545304661681,
          0.600545304661681,
          -0.7209661773352294,
          0.7209661773352294,
          -0.8227146565371428,
          0.8227146565371428,
          -0.9031559036148179,
          0.9031559036148179,
          -0.96020815213483,
          0.96020815213483,
          -0.9924068438435844,
          0.9924068438435844
        ],
        [
          -0.07652652113349734,
          0.07652652113349734,
          -0.22778585114164507,
          0.22778585114164507,
          -0.37370608871541955,
          0.37370608871541955,
          -0.5108670019508271,
          0.5108670019508271,
          -0.636053680726515,
          0.636053680726515,
          -0.7463319064601508,
          0.7463319064601508,
          -0.8391169718222188,
          0.8391169718222188,
          -0.912234428251326,
          0.912234428251326,
          -0.9639719272779138,
          0.9639719272779138,
          -0.9931285991850949,
          0.9931285991850949
        ],
        [
          0,
          -0.1455618541608951,
          0.1455618541608951,
          -0.2880213168024011,
          0.2880213168024011,
          -0.4243421202074388,
          0.4243421202074388,
          -0.5516188358872198,
          0.5516188358872198,
          -0.6671388041974123,
          0.6671388041974123,
          -0.7684399634756779,
          0.7684399634756779,
          -0.8533633645833173,
          0.8533633645833173,
          -0.9200993341504008,
          0.9200993341504008,
          -0.9672268385663063,
          0.9672268385663063,
          -0.9937521706203895,
          0.9937521706203895
        ],
        [
          -0.06973927331972223,
          0.06973927331972223,
          -0.20786042668822127,
          0.20786042668822127,
          -0.34193582089208424,
          0.34193582089208424,
          -0.469355837986757,
          0.469355837986757,
          -0.5876404035069116,
          0.5876404035069116,
          -0.6944872631866827,
          0.6944872631866827,
          -0.7878168059792081,
          0.7878168059792081,
          -0.8658125777203002,
          0.8658125777203002,
          -0.926956772187174,
          0.926956772187174,
          -0.9700604978354287,
          0.9700604978354287,
          -0.9942945854823992,
          0.9942945854823992
        ],
        [
          0,
          -0.1332568242984661,
          0.1332568242984661,
          -0.26413568097034495,
          0.26413568097034495,
          -0.3903010380302908,
          0.3903010380302908,
          -0.5095014778460075,
          0.5095014778460075,
          -0.6196098757636461,
          0.6196098757636461,
          -0.7186613631319502,
          0.7186613631319502,
          -0.8048884016188399,
          0.8048884016188399,
          -0.8767523582704416,
          0.8767523582704416,
          -0.9329710868260161,
          0.9329710868260161,
          -0.9725424712181152,
          0.9725424712181152,
          -0.9947693349975522,
          0.9947693349975522
        ],
        [
          -0.06405689286260563,
          0.06405689286260563,
          -0.1911188674736163,
          0.1911188674736163,
          -0.3150426796961634,
          0.3150426796961634,
          -0.4337935076260451,
          0.4337935076260451,
          -0.5454214713888396,
          0.5454214713888396,
          -0.6480936519369755,
          0.6480936519369755,
          -0.7401241915785544,
          0.7401241915785544,
          -0.820001985973903,
          0.820001985973903,
          -0.8864155270044011,
          0.8864155270044011,
          -0.9382745520027328,
          0.9382745520027328,
          -0.9747285559713095,
          0.9747285559713095,
          -0.9951872199970213,
          0.9951872199970213
        ]
      ];
      exports2.cValues = [
        [],
        [],
        [1, 1],
        [
          0.8888888888888888,
          0.5555555555555556,
          0.5555555555555556
        ],
        [
          0.6521451548625461,
          0.6521451548625461,
          0.34785484513745385,
          0.34785484513745385
        ],
        [
          0.5688888888888889,
          0.47862867049936647,
          0.47862867049936647,
          0.23692688505618908,
          0.23692688505618908
        ],
        [
          0.3607615730481386,
          0.3607615730481386,
          0.46791393457269104,
          0.46791393457269104,
          0.17132449237917036,
          0.17132449237917036
        ],
        [
          0.4179591836734694,
          0.3818300505051189,
          0.3818300505051189,
          0.27970539148927664,
          0.27970539148927664,
          0.1294849661688697,
          0.1294849661688697
        ],
        [
          0.362683783378362,
          0.362683783378362,
          0.31370664587788727,
          0.31370664587788727,
          0.22238103445337448,
          0.22238103445337448,
          0.10122853629037626,
          0.10122853629037626
        ],
        [
          0.3302393550012598,
          0.1806481606948574,
          0.1806481606948574,
          0.08127438836157441,
          0.08127438836157441,
          0.31234707704000286,
          0.31234707704000286,
          0.26061069640293544,
          0.26061069640293544
        ],
        [
          0.29552422471475287,
          0.29552422471475287,
          0.26926671930999635,
          0.26926671930999635,
          0.21908636251598204,
          0.21908636251598204,
          0.1494513491505806,
          0.1494513491505806,
          0.06667134430868814,
          0.06667134430868814
        ],
        [
          0.2729250867779006,
          0.26280454451024665,
          0.26280454451024665,
          0.23319376459199048,
          0.23319376459199048,
          0.18629021092773426,
          0.18629021092773426,
          0.1255803694649046,
          0.1255803694649046,
          0.05566856711617366,
          0.05566856711617366
        ],
        [
          0.24914704581340277,
          0.24914704581340277,
          0.2334925365383548,
          0.2334925365383548,
          0.20316742672306592,
          0.20316742672306592,
          0.16007832854334622,
          0.16007832854334622,
          0.10693932599531843,
          0.10693932599531843,
          0.04717533638651183,
          0.04717533638651183
        ],
        [
          0.2325515532308739,
          0.22628318026289723,
          0.22628318026289723,
          0.2078160475368885,
          0.2078160475368885,
          0.17814598076194574,
          0.17814598076194574,
          0.13887351021978725,
          0.13887351021978725,
          0.09212149983772845,
          0.09212149983772845,
          0.04048400476531588,
          0.04048400476531588
        ],
        [
          0.2152638534631578,
          0.2152638534631578,
          0.2051984637212956,
          0.2051984637212956,
          0.18553839747793782,
          0.18553839747793782,
          0.15720316715819355,
          0.15720316715819355,
          0.12151857068790319,
          0.12151857068790319,
          0.08015808715976021,
          0.08015808715976021,
          0.03511946033175186,
          0.03511946033175186
        ],
        [
          0.2025782419255613,
          0.19843148532711158,
          0.19843148532711158,
          0.1861610000155622,
          0.1861610000155622,
          0.16626920581699392,
          0.16626920581699392,
          0.13957067792615432,
          0.13957067792615432,
          0.10715922046717194,
          0.10715922046717194,
          0.07036604748810812,
          0.07036604748810812,
          0.03075324199611727,
          0.03075324199611727
        ],
        [
          0.1894506104550685,
          0.1894506104550685,
          0.18260341504492358,
          0.18260341504492358,
          0.16915651939500254,
          0.16915651939500254,
          0.14959598881657674,
          0.14959598881657674,
          0.12462897125553388,
          0.12462897125553388,
          0.09515851168249279,
          0.09515851168249279,
          0.062253523938647894,
          0.062253523938647894,
          0.027152459411754096,
          0.027152459411754096
        ],
        [
          0.17944647035620653,
          0.17656270536699264,
          0.17656270536699264,
          0.16800410215645004,
          0.16800410215645004,
          0.15404576107681028,
          0.15404576107681028,
          0.13513636846852548,
          0.13513636846852548,
          0.11188384719340397,
          0.11188384719340397,
          0.08503614831717918,
          0.08503614831717918,
          0.0554595293739872,
          0.0554595293739872,
          0.02414830286854793,
          0.02414830286854793
        ],
        [
          0.1691423829631436,
          0.1691423829631436,
          0.16427648374583273,
          0.16427648374583273,
          0.15468467512626524,
          0.15468467512626524,
          0.14064291467065065,
          0.14064291467065065,
          0.12255520671147846,
          0.12255520671147846,
          0.10094204410628717,
          0.10094204410628717,
          0.07642573025488905,
          0.07642573025488905,
          0.0497145488949698,
          0.0497145488949698,
          0.02161601352648331,
          0.02161601352648331
        ],
        [
          0.1610544498487837,
          0.15896884339395434,
          0.15896884339395434,
          0.15276604206585967,
          0.15276604206585967,
          0.1426067021736066,
          0.1426067021736066,
          0.12875396253933621,
          0.12875396253933621,
          0.11156664554733399,
          0.11156664554733399,
          0.09149002162245,
          0.09149002162245,
          0.06904454273764123,
          0.06904454273764123,
          0.0448142267656996,
          0.0448142267656996,
          0.019461788229726478,
          0.019461788229726478
        ],
        [
          0.15275338713072584,
          0.15275338713072584,
          0.14917298647260374,
          0.14917298647260374,
          0.14209610931838204,
          0.14209610931838204,
          0.13168863844917664,
          0.13168863844917664,
          0.11819453196151841,
          0.11819453196151841,
          0.10193011981724044,
          0.10193011981724044,
          0.08327674157670475,
          0.08327674157670475,
          0.06267204833410907,
          0.06267204833410907,
          0.04060142980038694,
          0.04060142980038694,
          0.017614007139152118,
          0.017614007139152118
        ],
        [
          0.14608113364969041,
          0.14452440398997005,
          0.14452440398997005,
          0.13988739479107315,
          0.13988739479107315,
          0.13226893863333747,
          0.13226893863333747,
          0.12183141605372853,
          0.12183141605372853,
          0.10879729916714838,
          0.10879729916714838,
          0.09344442345603386,
          0.09344442345603386,
          0.0761001136283793,
          0.0761001136283793,
          0.057134425426857205,
          0.057134425426857205,
          0.036953789770852494,
          0.036953789770852494,
          0.016017228257774335,
          0.016017228257774335
        ],
        [
          0.13925187285563198,
          0.13925187285563198,
          0.13654149834601517,
          0.13654149834601517,
          0.13117350478706238,
          0.13117350478706238,
          0.12325237681051242,
          0.12325237681051242,
          0.11293229608053922,
          0.11293229608053922,
          0.10041414444288096,
          0.10041414444288096,
          0.08594160621706773,
          0.08594160621706773,
          0.06979646842452049,
          0.06979646842452049,
          0.052293335152683286,
          0.052293335152683286,
          0.03377490158481415,
          0.03377490158481415,
          0.0146279952982722,
          0.0146279952982722
        ],
        [
          0.13365457218610619,
          0.1324620394046966,
          0.1324620394046966,
          0.12890572218808216,
          0.12890572218808216,
          0.12304908430672953,
          0.12304908430672953,
          0.11499664022241136,
          0.11499664022241136,
          0.10489209146454141,
          0.10489209146454141,
          0.09291576606003515,
          0.09291576606003515,
          0.07928141177671895,
          0.07928141177671895,
          0.06423242140852585,
          0.06423242140852585,
          0.04803767173108467,
          0.04803767173108467,
          0.030988005856979445,
          0.030988005856979445,
          0.013411859487141771,
          0.013411859487141771
        ],
        [
          0.12793819534675216,
          0.12793819534675216,
          0.1258374563468283,
          0.1258374563468283,
          0.12167047292780339,
          0.12167047292780339,
          0.1155056680537256,
          0.1155056680537256,
          0.10744427011596563,
          0.10744427011596563,
          0.09761865210411388,
          0.09761865210411388,
          0.08619016153195327,
          0.08619016153195327,
          0.0733464814110803,
          0.0733464814110803,
          0.05929858491543678,
          0.05929858491543678,
          0.04427743881741981,
          0.04427743881741981,
          0.028531388628933663,
          0.028531388628933663,
          0.0123412297999872,
          0.0123412297999872
        ]
      ];
      exports2.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
      var getCubicArcLength = (xs, ys, t) => {
        let sum;
        let correctedT;
        const n = 20;
        const z = t / 2;
        sum = 0;
        for (let i = 0; i < n; i++) {
          correctedT = z * exports2.tValues[n][i] + z;
          sum += exports2.cValues[n][i] * BFunc(xs, ys, correctedT);
        }
        return z * sum;
      };
      exports2.getCubicArcLength = getCubicArcLength;
      var getQuadraticArcLength = (xs, ys, t) => {
        if (t === void 0) {
          t = 1;
        }
        const ax = xs[0] - 2 * xs[1] + xs[2];
        const ay = ys[0] - 2 * ys[1] + ys[2];
        const bx = 2 * xs[1] - 2 * xs[0];
        const by = 2 * ys[1] - 2 * ys[0];
        const A = 4 * (ax * ax + ay * ay);
        const B = 4 * (ax * bx + ay * by);
        const C = bx * bx + by * by;
        if (A === 0) {
          return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
        }
        const b = B / (2 * A);
        const c = C / A;
        const u = t + b;
        const k = c - b * b;
        const uuk = u * u + k > 0 ? Math.sqrt(u * u + k) : 0;
        const bbk = b * b + k > 0 ? Math.sqrt(b * b + k) : 0;
        const term = b + Math.sqrt(b * b + k) !== 0 ? k * Math.log(Math.abs((u + uuk) / (b + bbk))) : 0;
        return Math.sqrt(A) / 2 * (u * uuk - b * bbk + term);
      };
      exports2.getQuadraticArcLength = getQuadraticArcLength;
      function BFunc(xs, ys, t) {
        const xbase = getDerivative(1, t, xs);
        const ybase = getDerivative(1, t, ys);
        const combined = xbase * xbase + ybase * ybase;
        return Math.sqrt(combined);
      }
      var getDerivative = (derivative, t, vs) => {
        const n = vs.length - 1;
        let _vs;
        let value;
        if (n === 0) {
          return 0;
        }
        if (derivative === 0) {
          value = 0;
          for (let k = 0; k <= n; k++) {
            value += exports2.binomialCoefficients[n][k] * Math.pow(1 - t, n - k) * Math.pow(t, k) * vs[k];
          }
          return value;
        } else {
          _vs = new Array(n);
          for (let k = 0; k < n; k++) {
            _vs[k] = n * (vs[k + 1] - vs[k]);
          }
          return getDerivative(derivative - 1, t, _vs);
        }
      };
      var t2length = (length, totalLength, func) => {
        let error = 1;
        let t = length / totalLength;
        let step = (length - func(t)) / totalLength;
        let numIterations = 0;
        while (error > 1e-3) {
          const increasedTLength = func(t + step);
          const increasedTError = Math.abs(length - increasedTLength) / totalLength;
          if (increasedTError < error) {
            error = increasedTError;
            t += step;
          } else {
            const decreasedTLength = func(t - step);
            const decreasedTError = Math.abs(length - decreasedTLength) / totalLength;
            if (decreasedTError < error) {
              error = decreasedTError;
              t -= step;
            } else {
              step /= 2;
            }
          }
          numIterations++;
          if (numIterations > 500) {
            break;
          }
        }
        return t;
      };
      exports2.t2length = t2length;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Path.js
  var require_Path = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Path.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Path = void 0;
      var Factory_1 = require_Factory();
      var Global_1 = require_Global();
      var Shape_1 = require_Shape();
      var BezierFunctions_1 = require_BezierFunctions();
      var Path = class _Path extends Shape_1.Shape {
        constructor(config) {
          super(config);
          this.dataArray = [];
          this.pathLength = 0;
          this._readDataAttribute();
          this.on("dataChange.konva", function() {
            this._readDataAttribute();
          });
        }
        _readDataAttribute() {
          this.dataArray = _Path.parsePathData(this.data());
          this.pathLength = _Path.getPathLength(this.dataArray);
        }
        _sceneFunc(context) {
          const ca = this.dataArray;
          context.beginPath();
          let isClosed = false;
          for (let n = 0; n < ca.length; n++) {
            const c = ca[n].command;
            const p = ca[n].points;
            switch (c) {
              case "L":
                context.lineTo(p[0], p[1]);
                break;
              case "M":
                context.moveTo(p[0], p[1]);
                break;
              case "C":
                context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                break;
              case "Q":
                context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                break;
              case "A":
                const cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];
                const r = rx > ry ? rx : ry;
                const scaleX = rx > ry ? 1 : rx / ry;
                const scaleY = rx > ry ? ry / rx : 1;
                context.translate(cx, cy);
                context.rotate(psi);
                context.scale(scaleX, scaleY);
                context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                context.scale(1 / scaleX, 1 / scaleY);
                context.rotate(-psi);
                context.translate(-cx, -cy);
                break;
              case "z":
                isClosed = true;
                context.closePath();
                break;
            }
          }
          if (!isClosed && !this.hasFill()) {
            context.strokeShape(this);
          } else {
            context.fillStrokeShape(this);
          }
        }
        getSelfRect() {
          let points = [];
          this.dataArray.forEach(function(data) {
            if (data.command === "A") {
              const start = data.points[4];
              const dTheta = data.points[5];
              const end = data.points[4] + dTheta;
              let inc = Math.PI / 180;
              if (Math.abs(start - end) < inc) {
                inc = Math.abs(start - end);
              }
              if (dTheta < 0) {
                for (let t = start - inc; t > end; t -= inc) {
                  const point = _Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
                  points.push(point.x, point.y);
                }
              } else {
                for (let t = start + inc; t < end; t += inc) {
                  const point = _Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
                  points.push(point.x, point.y);
                }
              }
            } else if (data.command === "C") {
              for (let t = 0; t <= 1; t += 0.01) {
                const point = _Path.getPointOnCubicBezier(t, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
                points.push(point.x, point.y);
              }
            } else {
              points = points.concat(data.points);
            }
          });
          let minX = points[0];
          let maxX = points[0];
          let minY = points[1];
          let maxY = points[1];
          let x, y;
          for (let i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            if (!isNaN(x)) {
              minX = Math.min(minX, x);
              maxX = Math.max(maxX, x);
            }
            if (!isNaN(y)) {
              minY = Math.min(minY, y);
              maxY = Math.max(maxY, y);
            }
          }
          return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
          };
        }
        getLength() {
          return this.pathLength;
        }
        getPointAtLength(length) {
          return _Path.getPointAtLengthOfDataArray(length, this.dataArray);
        }
        static getLineLength(x1, y1, x2, y2) {
          return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
        static getPathLength(dataArray) {
          let pathLength = 0;
          for (let i = 0; i < dataArray.length; ++i) {
            pathLength += dataArray[i].pathLength;
          }
          return pathLength;
        }
        static getPointAtLengthOfDataArray(length, dataArray) {
          let points, i = 0, ii = dataArray.length;
          if (!ii) {
            return null;
          }
          while (i < ii && length > dataArray[i].pathLength) {
            length -= dataArray[i].pathLength;
            ++i;
          }
          if (i === ii) {
            points = dataArray[i - 1].points.slice(-2);
            return {
              x: points[0],
              y: points[1]
            };
          }
          if (length < 0.01) {
            const cmd = dataArray[i].command;
            if (cmd === "M") {
              points = dataArray[i].points.slice(0, 2);
              return {
                x: points[0],
                y: points[1]
              };
            } else {
              return {
                x: dataArray[i].start.x,
                y: dataArray[i].start.y
              };
            }
          }
          const cp = dataArray[i];
          const p = cp.points;
          switch (cp.command) {
            case "L":
              return _Path.getPointOnLine(length, cp.start.x, cp.start.y, p[0], p[1]);
            case "C":
              return _Path.getPointOnCubicBezier((0, BezierFunctions_1.t2length)(length, _Path.getPathLength(dataArray), (i2) => {
                return (0, BezierFunctions_1.getCubicArcLength)([cp.start.x, p[0], p[2], p[4]], [cp.start.y, p[1], p[3], p[5]], i2);
              }), cp.start.x, cp.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
            case "Q":
              return _Path.getPointOnQuadraticBezier((0, BezierFunctions_1.t2length)(length, _Path.getPathLength(dataArray), (i2) => {
                return (0, BezierFunctions_1.getQuadraticArcLength)([cp.start.x, p[0], p[2]], [cp.start.y, p[1], p[3]], i2);
              }), cp.start.x, cp.start.y, p[0], p[1], p[2], p[3]);
            case "A":
              const cx = p[0], cy = p[1], rx = p[2], ry = p[3], dTheta = p[5], psi = p[6];
              let theta = p[4];
              theta += dTheta * length / cp.pathLength;
              return _Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
          }
          return null;
        }
        static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
          fromX = fromX !== null && fromX !== void 0 ? fromX : P1x;
          fromY = fromY !== null && fromY !== void 0 ? fromY : P1y;
          const len = this.getLineLength(P1x, P1y, P2x, P2y);
          if (len < 1e-10) {
            return { x: P1x, y: P1y };
          }
          if (P2x === P1x) {
            return { x: fromX, y: fromY + (P2y > P1y ? dist : -dist) };
          }
          const m = (P2y - P1y) / (P2x - P1x);
          const run = Math.sqrt(dist * dist / (1 + m * m)) * (P2x < P1x ? -1 : 1);
          const rise = m * run;
          if (Math.abs(fromY - P1y - m * (fromX - P1x)) < 1e-10) {
            return { x: fromX + run, y: fromY + rise };
          }
          const u = ((fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y)) / (len * len);
          const ix = P1x + u * (P2x - P1x);
          const iy = P1y + u * (P2y - P1y);
          const pRise = this.getLineLength(fromX, fromY, ix, iy);
          const pRun = Math.sqrt(dist * dist - pRise * pRise);
          const adjustedRun = Math.sqrt(pRun * pRun / (1 + m * m)) * (P2x < P1x ? -1 : 1);
          const adjustedRise = m * adjustedRun;
          return { x: ix + adjustedRun, y: iy + adjustedRise };
        }
        static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
          function CB1(t) {
            return t * t * t;
          }
          function CB2(t) {
            return 3 * t * t * (1 - t);
          }
          function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
          }
          function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
          }
          const x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
          const y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
          return { x, y };
        }
        static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
          function QB1(t) {
            return t * t;
          }
          function QB2(t) {
            return 2 * t * (1 - t);
          }
          function QB3(t) {
            return (1 - t) * (1 - t);
          }
          const x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
          const y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
          return { x, y };
        }
        static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
          const cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
          const pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
          };
          return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
          };
        }
        static parsePathData(data) {
          if (!data) {
            return [];
          }
          let cs = data;
          const cc = [
            "m",
            "M",
            "l",
            "L",
            "v",
            "V",
            "h",
            "H",
            "z",
            "Z",
            "c",
            "C",
            "q",
            "Q",
            "t",
            "T",
            "s",
            "S",
            "a",
            "A"
          ];
          cs = cs.replace(new RegExp(" ", "g"), ",");
          for (let n = 0; n < cc.length; n++) {
            cs = cs.replace(new RegExp(cc[n], "g"), "|" + cc[n]);
          }
          const arr = cs.split("|");
          const ca = [];
          const coords = [];
          let cpx = 0;
          let cpy = 0;
          const re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
          let match;
          for (let n = 1; n < arr.length; n++) {
            let str = arr[n];
            let c = str.charAt(0);
            str = str.slice(1);
            coords.length = 0;
            while (match = re.exec(str)) {
              coords.push(match[0]);
            }
            const p = [];
            for (let j = 0, jlen = coords.length; j < jlen; j++) {
              if (coords[j] === "00") {
                p.push(0, 0);
                continue;
              }
              const parsed = parseFloat(coords[j]);
              if (!isNaN(parsed)) {
                p.push(parsed);
              } else {
                p.push(0);
              }
            }
            while (p.length > 0) {
              if (isNaN(p[0])) {
                break;
              }
              let cmd = "";
              let points = [];
              const startX = cpx, startY = cpy;
              let prevCmd, ctlPtx, ctlPty;
              let rx, ry, psi, fa, fs, x1, y1;
              switch (c) {
                case "l":
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "L";
                  points.push(cpx, cpy);
                  break;
                case "L":
                  cpx = p.shift();
                  cpy = p.shift();
                  points.push(cpx, cpy);
                  break;
                case "m":
                  const dx = p.shift();
                  const dy = p.shift();
                  cpx += dx;
                  cpy += dy;
                  cmd = "M";
                  if (ca.length > 2 && ca[ca.length - 1].command === "z") {
                    for (let idx = ca.length - 2; idx >= 0; idx--) {
                      if (ca[idx].command === "M") {
                        cpx = ca[idx].points[0] + dx;
                        cpy = ca[idx].points[1] + dy;
                        break;
                      }
                    }
                  }
                  points.push(cpx, cpy);
                  c = "l";
                  break;
                case "M":
                  cpx = p.shift();
                  cpy = p.shift();
                  cmd = "M";
                  points.push(cpx, cpy);
                  c = "L";
                  break;
                case "h":
                  cpx += p.shift();
                  cmd = "L";
                  points.push(cpx, cpy);
                  break;
                case "H":
                  cpx = p.shift();
                  cmd = "L";
                  points.push(cpx, cpy);
                  break;
                case "v":
                  cpy += p.shift();
                  cmd = "L";
                  points.push(cpx, cpy);
                  break;
                case "V":
                  cpy = p.shift();
                  cmd = "L";
                  points.push(cpx, cpy);
                  break;
                case "C":
                  points.push(p.shift(), p.shift(), p.shift(), p.shift());
                  cpx = p.shift();
                  cpy = p.shift();
                  points.push(cpx, cpy);
                  break;
                case "c":
                  points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "C";
                  points.push(cpx, cpy);
                  break;
                case "S":
                  ctlPtx = cpx;
                  ctlPty = cpy;
                  prevCmd = ca[ca.length - 1];
                  if (prevCmd.command === "C") {
                    ctlPtx = cpx + (cpx - prevCmd.points[2]);
                    ctlPty = cpy + (cpy - prevCmd.points[3]);
                  }
                  points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                  cpx = p.shift();
                  cpy = p.shift();
                  cmd = "C";
                  points.push(cpx, cpy);
                  break;
                case "s":
                  ctlPtx = cpx;
                  ctlPty = cpy;
                  prevCmd = ca[ca.length - 1];
                  if (prevCmd.command === "C") {
                    ctlPtx = cpx + (cpx - prevCmd.points[2]);
                    ctlPty = cpy + (cpy - prevCmd.points[3]);
                  }
                  points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "C";
                  points.push(cpx, cpy);
                  break;
                case "Q":
                  points.push(p.shift(), p.shift());
                  cpx = p.shift();
                  cpy = p.shift();
                  points.push(cpx, cpy);
                  break;
                case "q":
                  points.push(cpx + p.shift(), cpy + p.shift());
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "Q";
                  points.push(cpx, cpy);
                  break;
                case "T":
                  ctlPtx = cpx;
                  ctlPty = cpy;
                  prevCmd = ca[ca.length - 1];
                  if (prevCmd.command === "Q") {
                    ctlPtx = cpx + (cpx - prevCmd.points[0]);
                    ctlPty = cpy + (cpy - prevCmd.points[1]);
                  }
                  cpx = p.shift();
                  cpy = p.shift();
                  cmd = "Q";
                  points.push(ctlPtx, ctlPty, cpx, cpy);
                  break;
                case "t":
                  ctlPtx = cpx;
                  ctlPty = cpy;
                  prevCmd = ca[ca.length - 1];
                  if (prevCmd.command === "Q") {
                    ctlPtx = cpx + (cpx - prevCmd.points[0]);
                    ctlPty = cpy + (cpy - prevCmd.points[1]);
                  }
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "Q";
                  points.push(ctlPtx, ctlPty, cpx, cpy);
                  break;
                case "A":
                  rx = p.shift();
                  ry = p.shift();
                  psi = p.shift();
                  fa = p.shift();
                  fs = p.shift();
                  x1 = cpx;
                  y1 = cpy;
                  cpx = p.shift();
                  cpy = p.shift();
                  cmd = "A";
                  points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                  break;
                case "a":
                  rx = p.shift();
                  ry = p.shift();
                  psi = p.shift();
                  fa = p.shift();
                  fs = p.shift();
                  x1 = cpx;
                  y1 = cpy;
                  cpx += p.shift();
                  cpy += p.shift();
                  cmd = "A";
                  points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                  break;
              }
              ca.push({
                command: cmd || c,
                points,
                start: {
                  x: startX,
                  y: startY
                },
                pathLength: this.calcLength(startX, startY, cmd || c, points)
              });
            }
            if (c === "z" || c === "Z") {
              ca.push({
                command: "z",
                points: [],
                start: void 0,
                pathLength: 0
              });
            }
          }
          return ca;
        }
        static calcLength(x, y, cmd, points) {
          let len, p1, p2, t;
          const path = _Path;
          switch (cmd) {
            case "L":
              return path.getLineLength(x, y, points[0], points[1]);
            case "C":
              return (0, BezierFunctions_1.getCubicArcLength)([x, points[0], points[2], points[4]], [y, points[1], points[3], points[5]], 1);
            case "Q":
              return (0, BezierFunctions_1.getQuadraticArcLength)([x, points[0], points[2]], [y, points[1], points[3]], 1);
            case "A":
              len = 0;
              const start = points[4];
              const dTheta = points[5];
              const end = points[4] + dTheta;
              let inc = Math.PI / 180;
              if (Math.abs(start - end) < inc) {
                inc = Math.abs(start - end);
              }
              p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
              if (dTheta < 0) {
                for (t = start - inc; t > end; t -= inc) {
                  p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                  len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }
              } else {
                for (t = start + inc; t < end; t += inc) {
                  p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                  len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }
              }
              p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
              len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
              return len;
          }
          return 0;
        }
        static convertEndpointToCenterParameterization(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
          const psi = psiDeg * (Math.PI / 180);
          const xp = Math.cos(psi) * (x1 - x2) / 2 + Math.sin(psi) * (y1 - y2) / 2;
          const yp = -1 * Math.sin(psi) * (x1 - x2) / 2 + Math.cos(psi) * (y1 - y2) / 2;
          const lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
          if (lambda > 1) {
            rx *= Math.sqrt(lambda);
            ry *= Math.sqrt(lambda);
          }
          let f = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
          if (fa === fs) {
            f *= -1;
          }
          if (isNaN(f)) {
            f = 0;
          }
          const cxp = f * rx * yp / ry;
          const cyp = f * -ry * xp / rx;
          const cx = (x1 + x2) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
          const cy = (y1 + y2) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
          const vMag = function(v2) {
            return Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1]);
          };
          const vRatio = function(u2, v2) {
            return (u2[0] * v2[0] + u2[1] * v2[1]) / (vMag(u2) * vMag(v2));
          };
          const vAngle = function(u2, v2) {
            return (u2[0] * v2[1] < u2[1] * v2[0] ? -1 : 1) * Math.acos(vRatio(u2, v2));
          };
          const theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
          const u = [(xp - cxp) / rx, (yp - cyp) / ry];
          const v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
          let dTheta = vAngle(u, v);
          if (vRatio(u, v) <= -1) {
            dTheta = Math.PI;
          }
          if (vRatio(u, v) >= 1) {
            dTheta = 0;
          }
          if (fs === 0 && dTheta > 0) {
            dTheta = dTheta - 2 * Math.PI;
          }
          if (fs === 1 && dTheta < 0) {
            dTheta = dTheta + 2 * Math.PI;
          }
          return [cx, cy, rx, ry, theta, dTheta, psi, fs];
        }
      };
      exports2.Path = Path;
      Path.prototype.className = "Path";
      Path.prototype._attrsAffectingSize = ["data"];
      (0, Global_1._registerNode)(Path);
      Factory_1.Factory.addGetterSetter(Path, "data");
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Arrow.js
  var require_Arrow = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Arrow.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Arrow = void 0;
      var Factory_1 = require_Factory();
      var Line_1 = require_Line();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var Path_1 = require_Path();
      var Arrow = class extends Line_1.Line {
        _sceneFunc(ctx) {
          super._sceneFunc(ctx);
          const PI2 = Math.PI * 2;
          const points = this.points();
          let tp = points;
          const fromTension = this.tension() !== 0 && points.length > 4;
          if (fromTension) {
            tp = this.getTensionPoints();
          }
          const length = this.pointerLength();
          const n = points.length;
          let dx, dy;
          if (fromTension) {
            const lp = [
              tp[tp.length - 4],
              tp[tp.length - 3],
              tp[tp.length - 2],
              tp[tp.length - 1],
              points[n - 2],
              points[n - 1]
            ];
            const lastLength = Path_1.Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], "C", lp);
            const previous = Path_1.Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
            dx = points[n - 2] - previous.x;
            dy = points[n - 1] - previous.y;
          } else {
            dx = points[n - 2] - points[n - 4];
            dy = points[n - 1] - points[n - 3];
          }
          const radians = (Math.atan2(dy, dx) + PI2) % PI2;
          const width = this.pointerWidth();
          if (this.pointerAtEnding()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[n - 2], points[n - 1]);
            ctx.rotate(radians);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
          }
          if (this.pointerAtBeginning()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[0], points[1]);
            if (fromTension) {
              dx = (tp[0] + tp[2]) / 2 - points[0];
              dy = (tp[1] + tp[3]) / 2 - points[1];
            } else {
              dx = points[2] - points[0];
              dy = points[3] - points[1];
            }
            ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
          }
        }
        __fillStroke(ctx) {
          const isDashEnabled = this.dashEnabled();
          if (isDashEnabled) {
            this.attrs.dashEnabled = false;
            ctx.setLineDash([]);
          }
          ctx.fillStrokeShape(this);
          if (isDashEnabled) {
            this.attrs.dashEnabled = true;
          }
        }
        getSelfRect() {
          const lineRect = super.getSelfRect();
          const offset = this.pointerWidth() / 2;
          return {
            x: lineRect.x,
            y: lineRect.y - offset,
            width: lineRect.width,
            height: lineRect.height + offset * 2
          };
        }
      };
      exports2.Arrow = Arrow;
      Arrow.prototype.className = "Arrow";
      (0, Global_1._registerNode)(Arrow);
      Factory_1.Factory.addGetterSetter(Arrow, "pointerLength", 10, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Arrow, "pointerWidth", 10, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Arrow, "pointerAtBeginning", false);
      Factory_1.Factory.addGetterSetter(Arrow, "pointerAtEnding", true);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Circle.js
  var require_Circle = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Circle.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Circle = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var Circle = class extends Shape_1.Shape {
        _sceneFunc(context) {
          context.beginPath();
          context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.radius() * 2;
        }
        getHeight() {
          return this.radius() * 2;
        }
        setWidth(width) {
          if (this.radius() !== width / 2) {
            this.radius(width / 2);
          }
        }
        setHeight(height) {
          if (this.radius() !== height / 2) {
            this.radius(height / 2);
          }
        }
      };
      exports2.Circle = Circle;
      Circle.prototype._centroid = true;
      Circle.prototype.className = "Circle";
      Circle.prototype._attrsAffectingSize = ["radius"];
      (0, Global_1._registerNode)(Circle);
      Factory_1.Factory.addGetterSetter(Circle, "radius", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Ellipse.js
  var require_Ellipse = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Ellipse.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Ellipse = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var Ellipse = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const rx = this.radiusX(), ry = this.radiusY();
          context.beginPath();
          context.save();
          if (rx !== ry) {
            context.scale(1, ry / rx);
          }
          context.arc(0, 0, rx, 0, Math.PI * 2, false);
          context.restore();
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.radiusX() * 2;
        }
        getHeight() {
          return this.radiusY() * 2;
        }
        setWidth(width) {
          this.radiusX(width / 2);
        }
        setHeight(height) {
          this.radiusY(height / 2);
        }
      };
      exports2.Ellipse = Ellipse;
      Ellipse.prototype.className = "Ellipse";
      Ellipse.prototype._centroid = true;
      Ellipse.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
      (0, Global_1._registerNode)(Ellipse);
      Factory_1.Factory.addComponentsGetterSetter(Ellipse, "radius", ["x", "y"]);
      Factory_1.Factory.addGetterSetter(Ellipse, "radiusX", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Ellipse, "radiusY", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Image.js
  var require_Image = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Image.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Image = void 0;
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var Validators_1 = require_Validators();
      var Image2 = class _Image extends Shape_1.Shape {
        constructor(attrs) {
          super(attrs);
          this._loadListener = () => {
            this._requestDraw();
          };
          this.on("imageChange.konva", (props) => {
            this._removeImageLoad(props.oldVal);
            this._setImageLoad();
          });
          this._setImageLoad();
        }
        _setImageLoad() {
          const image = this.image();
          if (image && image.complete) {
            return;
          }
          if (image && image.readyState === 4) {
            return;
          }
          if (image && image["addEventListener"]) {
            image["addEventListener"]("load", this._loadListener);
          }
        }
        _removeImageLoad(image) {
          if (image && image["removeEventListener"]) {
            image["removeEventListener"]("load", this._loadListener);
          }
        }
        destroy() {
          this._removeImageLoad(this.image());
          super.destroy();
          return this;
        }
        _useBufferCanvas() {
          const hasCornerRadius = !!this.cornerRadius();
          const hasShadow = this.hasShadow();
          if (hasCornerRadius && hasShadow) {
            return true;
          }
          return super._useBufferCanvas(true);
        }
        _sceneFunc(context) {
          const width = this.getWidth();
          const height = this.getHeight();
          const cornerRadius = this.cornerRadius();
          const image = this.attrs.image;
          let params;
          if (image) {
            const cropWidth = this.attrs.cropWidth;
            const cropHeight = this.attrs.cropHeight;
            if (cropWidth && cropHeight) {
              params = [
                image,
                this.cropX(),
                this.cropY(),
                cropWidth,
                cropHeight,
                0,
                0,
                width,
                height
              ];
            } else {
              params = [image, 0, 0, width, height];
            }
          }
          if (this.hasFill() || this.hasStroke() || cornerRadius) {
            context.beginPath();
            cornerRadius ? Util_1.Util.drawRoundedRectPath(context, width, height, cornerRadius) : context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
          }
          if (image) {
            if (cornerRadius) {
              context.clip();
            }
            context.drawImage.apply(context, params);
          }
        }
        _hitFunc(context) {
          const width = this.width(), height = this.height(), cornerRadius = this.cornerRadius();
          context.beginPath();
          if (!cornerRadius) {
            context.rect(0, 0, width, height);
          } else {
            Util_1.Util.drawRoundedRectPath(context, width, height, cornerRadius);
          }
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          var _a, _b;
          return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width;
        }
        getHeight() {
          var _a, _b;
          return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height;
        }
        static fromURL(url, callback, onError = null) {
          const img = Util_1.Util.createImageElement();
          img.onload = function() {
            const image = new _Image({
              image: img
            });
            callback(image);
          };
          img.onerror = onError;
          img.crossOrigin = "Anonymous";
          img.src = url;
        }
      };
      exports2.Image = Image2;
      Image2.prototype.className = "Image";
      (0, Global_1._registerNode)(Image2);
      Factory_1.Factory.addGetterSetter(Image2, "cornerRadius", 0, (0, Validators_1.getNumberOrArrayOfNumbersValidator)(4));
      Factory_1.Factory.addGetterSetter(Image2, "image");
      Factory_1.Factory.addComponentsGetterSetter(Image2, "crop", ["x", "y", "width", "height"]);
      Factory_1.Factory.addGetterSetter(Image2, "cropX", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Image2, "cropY", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Image2, "cropWidth", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Image2, "cropHeight", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Label.js
  var require_Label = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Label.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Tag = exports2.Label = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Group_1 = require_Group();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var ATTR_CHANGE_LIST = [
        "fontFamily",
        "fontSize",
        "fontStyle",
        "padding",
        "lineHeight",
        "text",
        "width",
        "height",
        "pointerDirection",
        "pointerWidth",
        "pointerHeight"
      ];
      var CHANGE_KONVA = "Change.konva";
      var NONE = "none";
      var UP = "up";
      var RIGHT = "right";
      var DOWN = "down";
      var LEFT = "left";
      var attrChangeListLen = ATTR_CHANGE_LIST.length;
      var Label = class extends Group_1.Group {
        constructor(config) {
          super(config);
          this.on("add.konva", function(evt) {
            this._addListeners(evt.child);
            this._sync();
          });
        }
        getText() {
          return this.find("Text")[0];
        }
        getTag() {
          return this.find("Tag")[0];
        }
        _addListeners(text) {
          let that = this, n;
          const func = function() {
            that._sync();
          };
          for (n = 0; n < attrChangeListLen; n++) {
            text.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, func);
          }
        }
        getWidth() {
          return this.getText().width();
        }
        getHeight() {
          return this.getText().height();
        }
        _sync() {
          let text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x, y, pointerHeight;
          if (text && tag) {
            width = text.width();
            height = text.height();
            pointerDirection = tag.pointerDirection();
            pointerWidth = tag.pointerWidth();
            pointerHeight = tag.pointerHeight();
            x = 0;
            y = 0;
            switch (pointerDirection) {
              case UP:
                x = width / 2;
                y = -1 * pointerHeight;
                break;
              case RIGHT:
                x = width + pointerWidth;
                y = height / 2;
                break;
              case DOWN:
                x = width / 2;
                y = height + pointerHeight;
                break;
              case LEFT:
                x = -1 * pointerWidth;
                y = height / 2;
                break;
            }
            tag.setAttrs({
              x: -1 * x,
              y: -1 * y,
              width,
              height
            });
            text.setAttrs({
              x: -1 * x,
              y: -1 * y
            });
          }
        }
      };
      exports2.Label = Label;
      Label.prototype.className = "Label";
      (0, Global_1._registerNode)(Label);
      var Tag = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
          let topLeft = 0;
          let topRight = 0;
          let bottomLeft = 0;
          let bottomRight = 0;
          if (typeof cornerRadius === "number") {
            topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
          } else {
            topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
            topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
            bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
            bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
          }
          context.beginPath();
          context.moveTo(topLeft, 0);
          if (pointerDirection === UP) {
            context.lineTo((width - pointerWidth) / 2, 0);
            context.lineTo(width / 2, -1 * pointerHeight);
            context.lineTo((width + pointerWidth) / 2, 0);
          }
          context.lineTo(width - topRight, 0);
          context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
          if (pointerDirection === RIGHT) {
            context.lineTo(width, (height - pointerHeight) / 2);
            context.lineTo(width + pointerWidth, height / 2);
            context.lineTo(width, (height + pointerHeight) / 2);
          }
          context.lineTo(width, height - bottomRight);
          context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
          if (pointerDirection === DOWN) {
            context.lineTo((width + pointerWidth) / 2, height);
            context.lineTo(width / 2, height + pointerHeight);
            context.lineTo((width - pointerWidth) / 2, height);
          }
          context.lineTo(bottomLeft, height);
          context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
          if (pointerDirection === LEFT) {
            context.lineTo(0, (height + pointerHeight) / 2);
            context.lineTo(-1 * pointerWidth, height / 2);
            context.lineTo(0, (height - pointerHeight) / 2);
          }
          context.lineTo(0, topLeft);
          context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
          context.closePath();
          context.fillStrokeShape(this);
        }
        getSelfRect() {
          let x = 0, y = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
          if (direction === UP) {
            y -= pointerHeight;
            height += pointerHeight;
          } else if (direction === DOWN) {
            height += pointerHeight;
          } else if (direction === LEFT) {
            x -= pointerWidth * 1.5;
            width += pointerWidth;
          } else if (direction === RIGHT) {
            width += pointerWidth * 1.5;
          }
          return {
            x,
            y,
            width,
            height
          };
        }
      };
      exports2.Tag = Tag;
      Tag.prototype.className = "Tag";
      (0, Global_1._registerNode)(Tag);
      Factory_1.Factory.addGetterSetter(Tag, "pointerDirection", NONE);
      Factory_1.Factory.addGetterSetter(Tag, "pointerWidth", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Tag, "pointerHeight", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Tag, "cornerRadius", 0, (0, Validators_1.getNumberOrArrayOfNumbersValidator)(4));
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Rect.js
  var require_Rect = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Rect.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Rect = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var Util_1 = require_Util();
      var Validators_1 = require_Validators();
      var Rect = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
          context.beginPath();
          if (!cornerRadius) {
            context.rect(0, 0, width, height);
          } else {
            Util_1.Util.drawRoundedRectPath(context, width, height, cornerRadius);
          }
          context.closePath();
          context.fillStrokeShape(this);
        }
      };
      exports2.Rect = Rect;
      Rect.prototype.className = "Rect";
      (0, Global_1._registerNode)(Rect);
      Factory_1.Factory.addGetterSetter(Rect, "cornerRadius", 0, (0, Validators_1.getNumberOrArrayOfNumbersValidator)(4));
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/RegularPolygon.js
  var require_RegularPolygon = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/RegularPolygon.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RegularPolygon = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var RegularPolygon = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const points = this._getPoints();
          context.beginPath();
          context.moveTo(points[0].x, points[0].y);
          for (let n = 1; n < points.length; n++) {
            context.lineTo(points[n].x, points[n].y);
          }
          context.closePath();
          context.fillStrokeShape(this);
        }
        _getPoints() {
          const sides = this.attrs.sides;
          const radius = this.attrs.radius || 0;
          const points = [];
          for (let n = 0; n < sides; n++) {
            points.push({
              x: radius * Math.sin(n * 2 * Math.PI / sides),
              y: -1 * radius * Math.cos(n * 2 * Math.PI / sides)
            });
          }
          return points;
        }
        getSelfRect() {
          const points = this._getPoints();
          let minX = points[0].x;
          let maxX = points[0].y;
          let minY = points[0].x;
          let maxY = points[0].y;
          points.forEach((point) => {
            minX = Math.min(minX, point.x);
            maxX = Math.max(maxX, point.x);
            minY = Math.min(minY, point.y);
            maxY = Math.max(maxY, point.y);
          });
          return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
          };
        }
        getWidth() {
          return this.radius() * 2;
        }
        getHeight() {
          return this.radius() * 2;
        }
        setWidth(width) {
          this.radius(width / 2);
        }
        setHeight(height) {
          this.radius(height / 2);
        }
      };
      exports2.RegularPolygon = RegularPolygon;
      RegularPolygon.prototype.className = "RegularPolygon";
      RegularPolygon.prototype._centroid = true;
      RegularPolygon.prototype._attrsAffectingSize = ["radius"];
      (0, Global_1._registerNode)(RegularPolygon);
      Factory_1.Factory.addGetterSetter(RegularPolygon, "radius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(RegularPolygon, "sides", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Ring.js
  var require_Ring = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Ring.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Ring = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var PIx2 = Math.PI * 2;
      var Ring = class extends Shape_1.Shape {
        _sceneFunc(context) {
          context.beginPath();
          context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
          context.moveTo(this.outerRadius(), 0);
          context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.outerRadius() * 2;
        }
        getHeight() {
          return this.outerRadius() * 2;
        }
        setWidth(width) {
          this.outerRadius(width / 2);
        }
        setHeight(height) {
          this.outerRadius(height / 2);
        }
      };
      exports2.Ring = Ring;
      Ring.prototype.className = "Ring";
      Ring.prototype._centroid = true;
      Ring.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
      (0, Global_1._registerNode)(Ring);
      Factory_1.Factory.addGetterSetter(Ring, "innerRadius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Ring, "outerRadius", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Sprite.js
  var require_Sprite = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Sprite.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sprite = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Animation_1 = require_Animation();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var Sprite = class extends Shape_1.Shape {
        constructor(config) {
          super(config);
          this._updated = true;
          this.anim = new Animation_1.Animation(() => {
            const updated = this._updated;
            this._updated = false;
            return updated;
          });
          this.on("animationChange.konva", function() {
            this.frameIndex(0);
          });
          this.on("frameIndexChange.konva", function() {
            this._updated = true;
          });
          this.on("frameRateChange.konva", function() {
            if (!this.anim.isRunning()) {
              return;
            }
            clearInterval(this.interval);
            this._setInterval();
          });
        }
        _sceneFunc(context) {
          const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x = set[ix4 + 0], y = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
          if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
          }
          if (image) {
            if (offsets) {
              const offset = offsets[anim], ix2 = index * 2;
              context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
            } else {
              context.drawImage(image, x, y, width, height, 0, 0, width, height);
            }
          }
        }
        _hitFunc(context) {
          const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
          context.beginPath();
          if (offsets) {
            const offset = offsets[anim];
            const ix2 = index * 2;
            context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
          } else {
            context.rect(0, 0, width, height);
          }
          context.closePath();
          context.fillShape(this);
        }
        _useBufferCanvas() {
          return super._useBufferCanvas(true);
        }
        _setInterval() {
          const that = this;
          this.interval = setInterval(function() {
            that._updateIndex();
          }, 1e3 / this.frameRate());
        }
        start() {
          if (this.isRunning()) {
            return;
          }
          const layer = this.getLayer();
          this.anim.setLayers(layer);
          this._setInterval();
          this.anim.start();
        }
        stop() {
          this.anim.stop();
          clearInterval(this.interval);
        }
        isRunning() {
          return this.anim.isRunning();
        }
        _updateIndex() {
          const index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
          if (index < len - 1) {
            this.frameIndex(index + 1);
          } else {
            this.frameIndex(0);
          }
        }
      };
      exports2.Sprite = Sprite;
      Sprite.prototype.className = "Sprite";
      (0, Global_1._registerNode)(Sprite);
      Factory_1.Factory.addGetterSetter(Sprite, "animation");
      Factory_1.Factory.addGetterSetter(Sprite, "animations");
      Factory_1.Factory.addGetterSetter(Sprite, "frameOffsets");
      Factory_1.Factory.addGetterSetter(Sprite, "image");
      Factory_1.Factory.addGetterSetter(Sprite, "frameIndex", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Sprite, "frameRate", 17, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.backCompat(Sprite, {
        index: "frameIndex",
        getIndex: "getFrameIndex",
        setIndex: "setFrameIndex"
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Star.js
  var require_Star = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Star.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Star = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var Star = class extends Shape_1.Shape {
        _sceneFunc(context) {
          const innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
          context.beginPath();
          context.moveTo(0, 0 - outerRadius);
          for (let n = 1; n < numPoints * 2; n++) {
            const radius = n % 2 === 0 ? outerRadius : innerRadius;
            const x = radius * Math.sin(n * Math.PI / numPoints);
            const y = -1 * radius * Math.cos(n * Math.PI / numPoints);
            context.lineTo(x, y);
          }
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.outerRadius() * 2;
        }
        getHeight() {
          return this.outerRadius() * 2;
        }
        setWidth(width) {
          this.outerRadius(width / 2);
        }
        setHeight(height) {
          this.outerRadius(height / 2);
        }
      };
      exports2.Star = Star;
      Star.prototype.className = "Star";
      Star.prototype._centroid = true;
      Star.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
      (0, Global_1._registerNode)(Star);
      Factory_1.Factory.addGetterSetter(Star, "numPoints", 5, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Star, "innerRadius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Star, "outerRadius", 0, (0, Validators_1.getNumberValidator)());
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Text.js
  var require_Text = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Text.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Text = void 0;
      exports2.stringToArray = stringToArray;
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var Validators_1 = require_Validators();
      var Global_2 = require_Global();
      function stringToArray(string) {
        return [...string].reduce((acc, char, index, array) => {
          if (/\p{Emoji}/u.test(char)) {
            const nextChar = array[index + 1];
            if (nextChar && /\p{Emoji_Modifier}|\u200D/u.test(nextChar)) {
              acc.push(char + nextChar);
              array[index + 1] = "";
            } else {
              acc.push(char);
            }
          } else if (/\p{Regional_Indicator}{2}/u.test(char + (array[index + 1] || ""))) {
            acc.push(char + array[index + 1]);
          } else if (index > 0 && /\p{Mn}|\p{Me}|\p{Mc}/u.test(char)) {
            acc[acc.length - 1] += char;
          } else if (char) {
            acc.push(char);
          }
          return acc;
        }, []);
      }
      var AUTO = "auto";
      var CENTER = "center";
      var INHERIT = "inherit";
      var JUSTIFY = "justify";
      var CHANGE_KONVA = "Change.konva";
      var CONTEXT_2D = "2d";
      var DASH = "-";
      var LEFT = "left";
      var TEXT = "text";
      var TEXT_UPPER = "Text";
      var TOP = "top";
      var BOTTOM = "bottom";
      var MIDDLE = "middle";
      var NORMAL = "normal";
      var PX_SPACE = "px ";
      var SPACE = " ";
      var RIGHT = "right";
      var RTL = "rtl";
      var WORD = "word";
      var CHAR = "char";
      var NONE = "none";
      var ELLIPSIS = "\u2026";
      var ATTR_CHANGE_LIST = [
        "direction",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "padding",
        "align",
        "verticalAlign",
        "lineHeight",
        "text",
        "width",
        "height",
        "wrap",
        "ellipsis",
        "letterSpacing"
      ];
      var attrChangeListLen = ATTR_CHANGE_LIST.length;
      function normalizeFontFamily(fontFamily) {
        return fontFamily.split(",").map((family) => {
          family = family.trim();
          const hasSpace = family.indexOf(" ") >= 0;
          const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
          if (hasSpace && !hasQuotes) {
            family = `"${family}"`;
          }
          return family;
        }).join(", ");
      }
      var dummyContext;
      function getDummyContext() {
        if (dummyContext) {
          return dummyContext;
        }
        dummyContext = Util_1.Util.createCanvasElement().getContext(CONTEXT_2D);
        return dummyContext;
      }
      function _fillFunc(context) {
        context.fillText(this._partialText, this._partialTextX, this._partialTextY);
      }
      function _strokeFunc(context) {
        context.setAttr("miterLimit", 2);
        context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
      }
      function checkDefaultFill(config) {
        config = config || {};
        if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) {
          config.fill = config.fill || "black";
        }
        return config;
      }
      var Text2 = class extends Shape_1.Shape {
        constructor(config) {
          super(checkDefaultFill(config));
          this._partialTextX = 0;
          this._partialTextY = 0;
          for (let n = 0; n < attrChangeListLen; n++) {
            this.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, this._setTextData);
          }
          this._setTextData();
        }
        _sceneFunc(context) {
          const textArr = this.textArr, textArrLen = textArr.length;
          if (!this.text()) {
            return;
          }
          let padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), direction = this.direction(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf("underline") !== -1, shouldLineThrough = textDecoration.indexOf("line-through") !== -1, n;
          direction = direction === INHERIT ? context.direction : direction;
          let translateY = lineHeightPx / 2;
          let baseline = MIDDLE;
          if (Global_1.Konva._fixTextRendering) {
            const metrics = this.measureSize("M");
            baseline = "alphabetic";
            translateY = (metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2 + lineHeightPx / 2;
          }
          if (direction === RTL) {
            context.setAttr("direction", direction);
          }
          context.setAttr("font", this._getContextFont());
          context.setAttr("textBaseline", baseline);
          context.setAttr("textAlign", LEFT);
          if (verticalAlign === MIDDLE) {
            alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
          } else if (verticalAlign === BOTTOM) {
            alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
          }
          context.translate(padding, alignY + padding);
          for (n = 0; n < textArrLen; n++) {
            let lineTranslateX = 0;
            let lineTranslateY = 0;
            const obj = textArr[n], text = obj.text, width = obj.width, lastLine = obj.lastInParagraph;
            context.save();
            if (align === RIGHT) {
              lineTranslateX += totalWidth - width - padding * 2;
            } else if (align === CENTER) {
              lineTranslateX += (totalWidth - width - padding * 2) / 2;
            }
            if (shouldUnderline) {
              context.save();
              context.beginPath();
              const yOffset = Global_1.Konva._fixTextRendering ? Math.round(fontSize / 4) : Math.round(fontSize / 2);
              const x = lineTranslateX;
              const y = translateY + lineTranslateY + yOffset;
              context.moveTo(x, y);
              const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
              context.lineTo(x + Math.round(lineWidth), y);
              context.lineWidth = fontSize / 15;
              const gradient = this._getLinearGradient();
              context.strokeStyle = gradient || fill;
              context.stroke();
              context.restore();
            }
            if (shouldLineThrough) {
              context.save();
              context.beginPath();
              const yOffset = Global_1.Konva._fixTextRendering ? -Math.round(fontSize / 4) : 0;
              context.moveTo(lineTranslateX, translateY + lineTranslateY + yOffset);
              const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
              context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + yOffset);
              context.lineWidth = fontSize / 15;
              const gradient = this._getLinearGradient();
              context.strokeStyle = gradient || fill;
              context.stroke();
              context.restore();
            }
            if (direction !== RTL && (letterSpacing !== 0 || align === JUSTIFY)) {
              const spacesNumber = text.split(" ").length - 1;
              const array = stringToArray(text);
              for (let li = 0; li < array.length; li++) {
                const letter = array[li];
                if (letter === " " && !lastLine && align === JUSTIFY) {
                  lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
                }
                this._partialTextX = lineTranslateX;
                this._partialTextY = translateY + lineTranslateY;
                this._partialText = letter;
                context.fillStrokeShape(this);
                lineTranslateX += this.measureSize(letter).width + letterSpacing;
              }
            } else {
              if (letterSpacing !== 0) {
                context.setAttr("letterSpacing", `${letterSpacing}px`);
              }
              this._partialTextX = lineTranslateX;
              this._partialTextY = translateY + lineTranslateY;
              this._partialText = text;
              context.fillStrokeShape(this);
            }
            context.restore();
            if (textArrLen > 1) {
              translateY += lineHeightPx;
            }
          }
        }
        _hitFunc(context) {
          const width = this.getWidth(), height = this.getHeight();
          context.beginPath();
          context.rect(0, 0, width, height);
          context.closePath();
          context.fillStrokeShape(this);
        }
        setText(text) {
          const str = Util_1.Util._isString(text) ? text : text === null || text === void 0 ? "" : text + "";
          this._setAttr(TEXT, str);
          return this;
        }
        getWidth() {
          const isAuto = this.attrs.width === AUTO || this.attrs.width === void 0;
          return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
        }
        getHeight() {
          const isAuto = this.attrs.height === AUTO || this.attrs.height === void 0;
          return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
        }
        getTextWidth() {
          return this.textWidth;
        }
        getTextHeight() {
          Util_1.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
          return this.textHeight;
        }
        measureSize(text) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
          let _context = getDummyContext(), fontSize = this.fontSize(), metrics;
          _context.save();
          _context.font = this._getContextFont();
          metrics = _context.measureText(text);
          _context.restore();
          const scaleFactor = fontSize / 100;
          return {
            actualBoundingBoxAscent: (_a = metrics.actualBoundingBoxAscent) !== null && _a !== void 0 ? _a : 71.58203125 * scaleFactor,
            actualBoundingBoxDescent: (_b = metrics.actualBoundingBoxDescent) !== null && _b !== void 0 ? _b : 0,
            actualBoundingBoxLeft: (_c = metrics.actualBoundingBoxLeft) !== null && _c !== void 0 ? _c : -7.421875 * scaleFactor,
            actualBoundingBoxRight: (_d = metrics.actualBoundingBoxRight) !== null && _d !== void 0 ? _d : 75.732421875 * scaleFactor,
            alphabeticBaseline: (_e = metrics.alphabeticBaseline) !== null && _e !== void 0 ? _e : 0,
            emHeightAscent: (_f = metrics.emHeightAscent) !== null && _f !== void 0 ? _f : 100 * scaleFactor,
            emHeightDescent: (_g = metrics.emHeightDescent) !== null && _g !== void 0 ? _g : -20 * scaleFactor,
            fontBoundingBoxAscent: (_h = metrics.fontBoundingBoxAscent) !== null && _h !== void 0 ? _h : 91 * scaleFactor,
            fontBoundingBoxDescent: (_j = metrics.fontBoundingBoxDescent) !== null && _j !== void 0 ? _j : 21 * scaleFactor,
            hangingBaseline: (_k = metrics.hangingBaseline) !== null && _k !== void 0 ? _k : 72.80000305175781 * scaleFactor,
            ideographicBaseline: (_l = metrics.ideographicBaseline) !== null && _l !== void 0 ? _l : -21 * scaleFactor,
            width: metrics.width,
            height: fontSize
          };
        }
        _getContextFont() {
          return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
        }
        _addTextLine(line) {
          const align = this.align();
          if (align === JUSTIFY) {
            line = line.trim();
          }
          const width = this._getTextWidth(line);
          return this.textArr.push({
            text: line,
            width,
            lastInParagraph: false
          });
        }
        _getTextWidth(text) {
          const letterSpacing = this.letterSpacing();
          const length = text.length;
          return getDummyContext().measureText(text).width + letterSpacing * length;
        }
        _setTextData() {
          let lines = this.text().split("\n"), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== void 0, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
          this.textArr = [];
          getDummyContext().font = this._getContextFont();
          const additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
          for (let i = 0, max2 = lines.length; i < max2; ++i) {
            let line = lines[i];
            let lineWidth = this._getTextWidth(line);
            if (fixedWidth && lineWidth > maxWidth) {
              while (line.length > 0) {
                let low = 0, high = stringToArray(line).length, match = "", matchWidth = 0;
                while (low < high) {
                  const mid = low + high >>> 1, lineArray = stringToArray(line), substr = lineArray.slice(0, mid + 1).join(""), substrWidth = this._getTextWidth(substr);
                  const shouldConsiderEllipsis = shouldAddEllipsis && fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
                  const effectiveWidth = shouldConsiderEllipsis ? substrWidth + additionalWidth : substrWidth;
                  if (effectiveWidth <= maxWidth) {
                    low = mid + 1;
                    match = substr;
                    matchWidth = substrWidth;
                  } else {
                    high = mid;
                  }
                }
                if (match) {
                  if (wrapAtWord) {
                    const lineArray2 = stringToArray(line);
                    const matchArray = stringToArray(match);
                    const nextChar = lineArray2[matchArray.length];
                    const nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
                    let wrapIndex;
                    if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                      wrapIndex = matchArray.length;
                    } else {
                      const lastSpaceIndex = matchArray.lastIndexOf(SPACE);
                      const lastDashIndex = matchArray.lastIndexOf(DASH);
                      wrapIndex = Math.max(lastSpaceIndex, lastDashIndex) + 1;
                    }
                    if (wrapIndex > 0) {
                      low = wrapIndex;
                      match = lineArray2.slice(0, low).join("");
                      matchWidth = this._getTextWidth(match);
                    }
                  }
                  match = match.trimRight();
                  this._addTextLine(match);
                  textWidth = Math.max(textWidth, matchWidth);
                  currentHeightPx += lineHeightPx;
                  const shouldHandleEllipsis = this._shouldHandleEllipsis(currentHeightPx);
                  if (shouldHandleEllipsis) {
                    this._tryToAddEllipsisToLastLine();
                    break;
                  }
                  const lineArray = stringToArray(line);
                  line = lineArray.slice(low).join("").trimLeft();
                  if (line.length > 0) {
                    lineWidth = this._getTextWidth(line);
                    if (lineWidth <= maxWidth) {
                      this._addTextLine(line);
                      currentHeightPx += lineHeightPx;
                      textWidth = Math.max(textWidth, lineWidth);
                      break;
                    }
                  }
                } else {
                  break;
                }
              }
            } else {
              this._addTextLine(line);
              currentHeightPx += lineHeightPx;
              textWidth = Math.max(textWidth, lineWidth);
              if (this._shouldHandleEllipsis(currentHeightPx) && i < max2 - 1) {
                this._tryToAddEllipsisToLastLine();
              }
            }
            if (this.textArr[this.textArr.length - 1]) {
              this.textArr[this.textArr.length - 1].lastInParagraph = true;
            }
            if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
              break;
            }
          }
          this.textHeight = fontSize;
          this.textWidth = textWidth;
        }
        _shouldHandleEllipsis(currentHeightPx) {
          const fontSize = +this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, height = this.attrs.height, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxHeightPx = height - padding * 2, wrap = this.wrap(), shouldWrap = wrap !== NONE;
          return !shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
        }
        _tryToAddEllipsisToLastLine() {
          const width = this.attrs.width, fixedWidth = width !== AUTO && width !== void 0, padding = this.padding(), maxWidth = width - padding * 2, shouldAddEllipsis = this.ellipsis();
          const lastLine = this.textArr[this.textArr.length - 1];
          if (!lastLine || !shouldAddEllipsis) {
            return;
          }
          if (fixedWidth) {
            const haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
            if (!haveSpace) {
              lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
            }
          }
          this.textArr.splice(this.textArr.length - 1, 1);
          this._addTextLine(lastLine.text + ELLIPSIS);
        }
        getStrokeScaleEnabled() {
          return true;
        }
        _useBufferCanvas() {
          const hasLine = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1;
          const hasShadow = this.hasShadow();
          if (hasLine && hasShadow) {
            return true;
          }
          return super._useBufferCanvas();
        }
      };
      exports2.Text = Text2;
      Text2.prototype._fillFunc = _fillFunc;
      Text2.prototype._strokeFunc = _strokeFunc;
      Text2.prototype.className = TEXT_UPPER;
      Text2.prototype._attrsAffectingSize = [
        "text",
        "fontSize",
        "padding",
        "wrap",
        "lineHeight",
        "letterSpacing"
      ];
      (0, Global_2._registerNode)(Text2);
      Factory_1.Factory.overWriteSetter(Text2, "width", (0, Validators_1.getNumberOrAutoValidator)());
      Factory_1.Factory.overWriteSetter(Text2, "height", (0, Validators_1.getNumberOrAutoValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "direction", INHERIT);
      Factory_1.Factory.addGetterSetter(Text2, "fontFamily", "Arial");
      Factory_1.Factory.addGetterSetter(Text2, "fontSize", 12, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "fontStyle", NORMAL);
      Factory_1.Factory.addGetterSetter(Text2, "fontVariant", NORMAL);
      Factory_1.Factory.addGetterSetter(Text2, "padding", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "align", LEFT);
      Factory_1.Factory.addGetterSetter(Text2, "verticalAlign", TOP);
      Factory_1.Factory.addGetterSetter(Text2, "lineHeight", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "wrap", WORD);
      Factory_1.Factory.addGetterSetter(Text2, "ellipsis", false, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "letterSpacing", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "text", "", (0, Validators_1.getStringValidator)());
      Factory_1.Factory.addGetterSetter(Text2, "textDecoration", "");
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/TextPath.js
  var require_TextPath = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/TextPath.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.TextPath = void 0;
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Path_1 = require_Path();
      var Text_1 = require_Text();
      var Validators_1 = require_Validators();
      var Global_1 = require_Global();
      var EMPTY_STRING = "";
      var NORMAL = "normal";
      function _fillFunc(context) {
        context.fillText(this.partialText, 0, 0);
      }
      function _strokeFunc(context) {
        context.strokeText(this.partialText, 0, 0);
      }
      var TextPath = class extends Shape_1.Shape {
        constructor(config) {
          super(config);
          this.dummyCanvas = Util_1.Util.createCanvasElement();
          this.dataArray = [];
          this._readDataAttribute();
          this.on("dataChange.konva", function() {
            this._readDataAttribute();
            this._setTextData();
          });
          this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData);
          this._setTextData();
        }
        _getTextPathLength() {
          return Path_1.Path.getPathLength(this.dataArray);
        }
        _getPointAtLength(length) {
          if (!this.attrs.data) {
            return null;
          }
          const totalLength = this.pathLength;
          if (length - 1 > totalLength) {
            return null;
          }
          return Path_1.Path.getPointAtLengthOfDataArray(length, this.dataArray);
        }
        _readDataAttribute() {
          this.dataArray = Path_1.Path.parsePathData(this.attrs.data);
          this.pathLength = this._getTextPathLength();
        }
        _sceneFunc(context) {
          context.setAttr("font", this._getContextFont());
          context.setAttr("textBaseline", this.textBaseline());
          context.setAttr("textAlign", "left");
          context.save();
          const textDecoration = this.textDecoration();
          const fill = this.fill();
          const fontSize = this.fontSize();
          const glyphInfo = this.glyphInfo;
          if (textDecoration === "underline") {
            context.beginPath();
          }
          for (let i = 0; i < glyphInfo.length; i++) {
            context.save();
            const p0 = glyphInfo[i].p0;
            context.translate(p0.x, p0.y);
            context.rotate(glyphInfo[i].rotation);
            this.partialText = glyphInfo[i].text;
            context.fillStrokeShape(this);
            if (textDecoration === "underline") {
              if (i === 0) {
                context.moveTo(0, fontSize / 2 + 1);
              }
              context.lineTo(fontSize, fontSize / 2 + 1);
            }
            context.restore();
          }
          if (textDecoration === "underline") {
            context.strokeStyle = fill;
            context.lineWidth = fontSize / 20;
            context.stroke();
          }
          context.restore();
        }
        _hitFunc(context) {
          context.beginPath();
          const glyphInfo = this.glyphInfo;
          if (glyphInfo.length >= 1) {
            const p0 = glyphInfo[0].p0;
            context.moveTo(p0.x, p0.y);
          }
          for (let i = 0; i < glyphInfo.length; i++) {
            const p1 = glyphInfo[i].p1;
            context.lineTo(p1.x, p1.y);
          }
          context.setAttr("lineWidth", this.fontSize());
          context.setAttr("strokeStyle", this.colorKey);
          context.stroke();
        }
        getTextWidth() {
          return this.textWidth;
        }
        getTextHeight() {
          Util_1.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
          return this.textHeight;
        }
        setText(text) {
          return Text_1.Text.prototype.setText.call(this, text);
        }
        _getContextFont() {
          return Text_1.Text.prototype._getContextFont.call(this);
        }
        _getTextSize(text) {
          const dummyCanvas = this.dummyCanvas;
          const _context = dummyCanvas.getContext("2d");
          _context.save();
          _context.font = this._getContextFont();
          const metrics = _context.measureText(text);
          _context.restore();
          return {
            width: metrics.width,
            height: parseInt(`${this.fontSize()}`, 10)
          };
        }
        _setTextData() {
          const { width, height } = this._getTextSize(this.attrs.text);
          this.textWidth = width;
          this.textHeight = height;
          this.glyphInfo = [];
          if (!this.attrs.data) {
            return null;
          }
          const letterSpacing = this.letterSpacing();
          const align = this.align();
          const kerningFunc = this.kerningFunc();
          const textWidth = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * letterSpacing, 0);
          let offset = 0;
          if (align === "center") {
            offset = Math.max(0, this.pathLength / 2 - textWidth / 2);
          }
          if (align === "right") {
            offset = Math.max(0, this.pathLength - textWidth);
          }
          const charArr = (0, Text_1.stringToArray)(this.text());
          let offsetToGlyph = offset;
          for (let i = 0; i < charArr.length; i++) {
            const charStartPoint = this._getPointAtLength(offsetToGlyph);
            if (!charStartPoint)
              return;
            let glyphWidth = this._getTextSize(charArr[i]).width + letterSpacing;
            if (charArr[i] === " " && align === "justify") {
              const numberOfSpaces = this.text().split(" ").length - 1;
              glyphWidth += (this.pathLength - textWidth) / numberOfSpaces;
            }
            const charEndPoint = this._getPointAtLength(offsetToGlyph + glyphWidth);
            if (!charEndPoint)
              return;
            const width2 = Path_1.Path.getLineLength(charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
            let kern = 0;
            if (kerningFunc) {
              try {
                kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
              } catch (e) {
                kern = 0;
              }
            }
            charStartPoint.x += kern;
            charEndPoint.x += kern;
            this.textWidth += kern;
            const midpoint = Path_1.Path.getPointOnLine(kern + width2 / 2, charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
            const rotation = Math.atan2(charEndPoint.y - charStartPoint.y, charEndPoint.x - charStartPoint.x);
            this.glyphInfo.push({
              transposeX: midpoint.x,
              transposeY: midpoint.y,
              text: charArr[i],
              rotation,
              p0: charStartPoint,
              p1: charEndPoint
            });
            offsetToGlyph += glyphWidth;
          }
        }
        getSelfRect() {
          if (!this.glyphInfo.length) {
            return {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
          const points = [];
          this.glyphInfo.forEach(function(info) {
            points.push(info.p0.x);
            points.push(info.p0.y);
            points.push(info.p1.x);
            points.push(info.p1.y);
          });
          let minX = points[0] || 0;
          let maxX = points[0] || 0;
          let minY = points[1] || 0;
          let maxY = points[1] || 0;
          let x, y;
          for (let i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
          }
          const fontSize = this.fontSize();
          return {
            x: minX - fontSize / 2,
            y: minY - fontSize / 2,
            width: maxX - minX + fontSize,
            height: maxY - minY + fontSize
          };
        }
        destroy() {
          Util_1.Util.releaseCanvas(this.dummyCanvas);
          return super.destroy();
        }
      };
      exports2.TextPath = TextPath;
      TextPath.prototype._fillFunc = _fillFunc;
      TextPath.prototype._strokeFunc = _strokeFunc;
      TextPath.prototype._fillFuncHit = _fillFunc;
      TextPath.prototype._strokeFuncHit = _strokeFunc;
      TextPath.prototype.className = "TextPath";
      TextPath.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
      (0, Global_1._registerNode)(TextPath);
      Factory_1.Factory.addGetterSetter(TextPath, "data");
      Factory_1.Factory.addGetterSetter(TextPath, "fontFamily", "Arial");
      Factory_1.Factory.addGetterSetter(TextPath, "fontSize", 12, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(TextPath, "fontStyle", NORMAL);
      Factory_1.Factory.addGetterSetter(TextPath, "align", "left");
      Factory_1.Factory.addGetterSetter(TextPath, "letterSpacing", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(TextPath, "textBaseline", "middle");
      Factory_1.Factory.addGetterSetter(TextPath, "fontVariant", NORMAL);
      Factory_1.Factory.addGetterSetter(TextPath, "text", EMPTY_STRING);
      Factory_1.Factory.addGetterSetter(TextPath, "textDecoration", "");
      Factory_1.Factory.addGetterSetter(TextPath, "kerningFunc", void 0);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Transformer.js
  var require_Transformer = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Transformer.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Transformer = void 0;
      var Util_1 = require_Util();
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Shape_1 = require_Shape();
      var Rect_1 = require_Rect();
      var Group_1 = require_Group();
      var Global_1 = require_Global();
      var Validators_1 = require_Validators();
      var Global_2 = require_Global();
      var EVENTS_NAME = "tr-konva";
      var ATTR_CHANGE_LIST = [
        "resizeEnabledChange",
        "rotateAnchorOffsetChange",
        "rotateEnabledChange",
        "enabledAnchorsChange",
        "anchorSizeChange",
        "borderEnabledChange",
        "borderStrokeChange",
        "borderStrokeWidthChange",
        "borderDashChange",
        "anchorStrokeChange",
        "anchorStrokeWidthChange",
        "anchorFillChange",
        "anchorCornerRadiusChange",
        "ignoreStrokeChange",
        "anchorStyleFuncChange"
      ].map((e) => e + `.${EVENTS_NAME}`).join(" ");
      var NODES_RECT = "nodesRect";
      var TRANSFORM_CHANGE_STR = [
        "widthChange",
        "heightChange",
        "scaleXChange",
        "scaleYChange",
        "skewXChange",
        "skewYChange",
        "rotationChange",
        "offsetXChange",
        "offsetYChange",
        "transformsEnabledChange",
        "strokeWidthChange"
      ];
      var ANGLES = {
        "top-left": -45,
        "top-center": 0,
        "top-right": 45,
        "middle-right": -90,
        "middle-left": 90,
        "bottom-left": -135,
        "bottom-center": 180,
        "bottom-right": 135
      };
      var TOUCH_DEVICE = "ontouchstart" in Global_1.Konva._global;
      function getCursor(anchorName, rad, rotateCursor) {
        if (anchorName === "rotater") {
          return rotateCursor;
        }
        rad += Util_1.Util.degToRad(ANGLES[anchorName] || 0);
        const angle = (Util_1.Util.radToDeg(rad) % 360 + 360) % 360;
        if (Util_1.Util._inRange(angle, 315 + 22.5, 360) || Util_1.Util._inRange(angle, 0, 22.5)) {
          return "ns-resize";
        } else if (Util_1.Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
          return "nesw-resize";
        } else if (Util_1.Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
          return "ew-resize";
        } else if (Util_1.Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
          return "nwse-resize";
        } else if (Util_1.Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
          return "ns-resize";
        } else if (Util_1.Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
          return "nesw-resize";
        } else if (Util_1.Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
          return "ew-resize";
        } else if (Util_1.Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
          return "nwse-resize";
        } else {
          Util_1.Util.error("Transformer has unknown angle for cursor detection: " + angle);
          return "pointer";
        }
      }
      var ANCHORS_NAMES = [
        "top-left",
        "top-center",
        "top-right",
        "middle-right",
        "middle-left",
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ];
      var MAX_SAFE_INTEGER3 = 1e8;
      function getCenter(shape) {
        return {
          x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
          y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
        };
      }
      function rotateAroundPoint(shape, angleRad, point) {
        const x = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
        const y = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
        return {
          ...shape,
          rotation: shape.rotation + angleRad,
          x,
          y
        };
      }
      function rotateAroundCenter(shape, deltaRad) {
        const center = getCenter(shape);
        return rotateAroundPoint(shape, deltaRad, center);
      }
      function getSnap(snaps, newRotationRad, tol) {
        let snapped = newRotationRad;
        for (let i = 0; i < snaps.length; i++) {
          const angle = Global_1.Konva.getAngle(snaps[i]);
          const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
          const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
          if (dif < tol) {
            snapped = angle;
          }
        }
        return snapped;
      }
      var activeTransformersCount = 0;
      var Transformer = class extends Group_1.Group {
        constructor(config) {
          super(config);
          this._movingAnchorName = null;
          this._transforming = false;
          this._createElements();
          this._handleMouseMove = this._handleMouseMove.bind(this);
          this._handleMouseUp = this._handleMouseUp.bind(this);
          this.update = this.update.bind(this);
          this.on(ATTR_CHANGE_LIST, this.update);
          if (this.getNode()) {
            this.update();
          }
        }
        attachTo(node) {
          this.setNode(node);
          return this;
        }
        setNode(node) {
          Util_1.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
          return this.setNodes([node]);
        }
        getNode() {
          return this._nodes && this._nodes[0];
        }
        _getEventNamespace() {
          return EVENTS_NAME + this._id;
        }
        setNodes(nodes = []) {
          if (this._nodes && this._nodes.length) {
            this.detach();
          }
          const filteredNodes = nodes.filter((node) => {
            if (node.isAncestorOf(this)) {
              Util_1.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach");
              return false;
            }
            return true;
          });
          this._nodes = nodes = filteredNodes;
          if (nodes.length === 1 && this.useSingleNodeRotation()) {
            this.rotation(nodes[0].getAbsoluteRotation());
          } else {
            this.rotation(0);
          }
          this._nodes.forEach((node) => {
            const onChange = () => {
              if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
                this.rotation(this.nodes()[0].getAbsoluteRotation());
              }
              this._resetTransformCache();
              if (!this._transforming && !this.isDragging()) {
                this.update();
              }
            };
            if (node._attrsAffectingSize.length) {
              const additionalEvents = node._attrsAffectingSize.map((prop) => prop + "Change." + this._getEventNamespace()).join(" ");
              node.on(additionalEvents, onChange);
            }
            node.on(TRANSFORM_CHANGE_STR.map((e) => e + `.${this._getEventNamespace()}`).join(" "), onChange);
            node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
            this._proxyDrag(node);
          });
          this._resetTransformCache();
          const elementsCreated = !!this.findOne(".top-left");
          if (elementsCreated) {
            this.update();
          }
          return this;
        }
        _proxyDrag(node) {
          let lastPos;
          node.on(`dragstart.${this._getEventNamespace()}`, (e) => {
            lastPos = node.getAbsolutePosition();
            if (!this.isDragging() && node !== this.findOne(".back")) {
              this.startDrag(e, false);
            }
          });
          node.on(`dragmove.${this._getEventNamespace()}`, (e) => {
            if (!lastPos) {
              return;
            }
            const abs = node.getAbsolutePosition();
            const dx = abs.x - lastPos.x;
            const dy = abs.y - lastPos.y;
            this.nodes().forEach((otherNode) => {
              if (otherNode === node) {
                return;
              }
              if (otherNode.isDragging()) {
                return;
              }
              const otherAbs = otherNode.getAbsolutePosition();
              otherNode.setAbsolutePosition({
                x: otherAbs.x + dx,
                y: otherAbs.y + dy
              });
              otherNode.startDrag(e);
            });
            lastPos = null;
          });
        }
        getNodes() {
          return this._nodes || [];
        }
        getActiveAnchor() {
          return this._movingAnchorName;
        }
        detach() {
          if (this._nodes) {
            this._nodes.forEach((node) => {
              node.off("." + this._getEventNamespace());
            });
          }
          this._nodes = [];
          this._resetTransformCache();
        }
        _resetTransformCache() {
          this._clearCache(NODES_RECT);
          this._clearCache("transform");
          this._clearSelfAndDescendantCache("absoluteTransform");
        }
        _getNodeRect() {
          return this._getCache(NODES_RECT, this.__getNodeRect);
        }
        __getNodeShape(node, rot = this.rotation(), relative) {
          const rect = node.getClientRect({
            skipTransform: true,
            skipShadow: true,
            skipStroke: this.ignoreStroke()
          });
          const absScale = node.getAbsoluteScale(relative);
          const absPos = node.getAbsolutePosition(relative);
          const dx = rect.x * absScale.x - node.offsetX() * absScale.x;
          const dy = rect.y * absScale.y - node.offsetY() * absScale.y;
          const rotation = (Global_1.Konva.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
          const box = {
            x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
            y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
            width: rect.width * absScale.x,
            height: rect.height * absScale.y,
            rotation
          };
          return rotateAroundPoint(box, -Global_1.Konva.getAngle(rot), {
            x: 0,
            y: 0
          });
        }
        __getNodeRect() {
          const node = this.getNode();
          if (!node) {
            return {
              x: -MAX_SAFE_INTEGER3,
              y: -MAX_SAFE_INTEGER3,
              width: 0,
              height: 0,
              rotation: 0
            };
          }
          const totalPoints = [];
          this.nodes().map((node2) => {
            const box = node2.getClientRect({
              skipTransform: true,
              skipShadow: true,
              skipStroke: this.ignoreStroke()
            });
            const points = [
              { x: box.x, y: box.y },
              { x: box.x + box.width, y: box.y },
              { x: box.x + box.width, y: box.y + box.height },
              { x: box.x, y: box.y + box.height }
            ];
            const trans = node2.getAbsoluteTransform();
            points.forEach(function(point) {
              const transformed = trans.point(point);
              totalPoints.push(transformed);
            });
          });
          const tr = new Util_1.Transform();
          tr.rotate(-Global_1.Konva.getAngle(this.rotation()));
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          totalPoints.forEach(function(point) {
            const transformed = tr.point(point);
            if (minX === void 0) {
              minX = maxX = transformed.x;
              minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
          });
          tr.invert();
          const p = tr.point({ x: minX, y: minY });
          return {
            x: p.x,
            y: p.y,
            width: maxX - minX,
            height: maxY - minY,
            rotation: Global_1.Konva.getAngle(this.rotation())
          };
        }
        getX() {
          return this._getNodeRect().x;
        }
        getY() {
          return this._getNodeRect().y;
        }
        getWidth() {
          return this._getNodeRect().width;
        }
        getHeight() {
          return this._getNodeRect().height;
        }
        _createElements() {
          this._createBack();
          ANCHORS_NAMES.forEach((name) => {
            this._createAnchor(name);
          });
          this._createAnchor("rotater");
        }
        _createAnchor(name) {
          const anchor = new Rect_1.Rect({
            stroke: "rgb(0, 161, 255)",
            fill: "white",
            strokeWidth: 1,
            name: name + " _anchor",
            dragDistance: 0,
            draggable: true,
            hitStrokeWidth: TOUCH_DEVICE ? 10 : "auto"
          });
          const self2 = this;
          anchor.on("mousedown touchstart", function(e) {
            self2._handleMouseDown(e);
          });
          anchor.on("dragstart", (e) => {
            anchor.stopDrag();
            e.cancelBubble = true;
          });
          anchor.on("dragend", (e) => {
            e.cancelBubble = true;
          });
          anchor.on("mouseenter", () => {
            const rad = Global_1.Konva.getAngle(this.rotation());
            const rotateCursor = this.rotateAnchorCursor();
            const cursor = getCursor(name, rad, rotateCursor);
            anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
            this._cursorChange = true;
          });
          anchor.on("mouseout", () => {
            anchor.getStage().content && (anchor.getStage().content.style.cursor = "");
            this._cursorChange = false;
          });
          this.add(anchor);
        }
        _createBack() {
          const back = new Shape_1.Shape({
            name: "back",
            width: 0,
            height: 0,
            draggable: true,
            sceneFunc(ctx, shape) {
              const tr = shape.getParent();
              const padding = tr.padding();
              ctx.beginPath();
              ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
              ctx.moveTo(shape.width() / 2, -padding);
              if (tr.rotateEnabled() && tr.rotateLineVisible()) {
                ctx.lineTo(shape.width() / 2, -tr.rotateAnchorOffset() * Util_1.Util._sign(shape.height()) - padding);
              }
              ctx.fillStrokeShape(shape);
            },
            hitFunc: (ctx, shape) => {
              if (!this.shouldOverdrawWholeArea()) {
                return;
              }
              const padding = this.padding();
              ctx.beginPath();
              ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
              ctx.fillStrokeShape(shape);
            }
          });
          this.add(back);
          this._proxyDrag(back);
          back.on("dragstart", (e) => {
            e.cancelBubble = true;
          });
          back.on("dragmove", (e) => {
            e.cancelBubble = true;
          });
          back.on("dragend", (e) => {
            e.cancelBubble = true;
          });
          this.on("dragmove", (e) => {
            this.update();
          });
        }
        _handleMouseDown(e) {
          if (this._transforming) {
            return;
          }
          this._movingAnchorName = e.target.name().split(" ")[0];
          const attrs = this._getNodeRect();
          const width = attrs.width;
          const height = attrs.height;
          const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
          this.sin = Math.abs(height / hypotenuse);
          this.cos = Math.abs(width / hypotenuse);
          if (typeof window !== "undefined") {
            window.addEventListener("mousemove", this._handleMouseMove);
            window.addEventListener("touchmove", this._handleMouseMove);
            window.addEventListener("mouseup", this._handleMouseUp, true);
            window.addEventListener("touchend", this._handleMouseUp, true);
          }
          this._transforming = true;
          const ap = e.target.getAbsolutePosition();
          const pos = e.target.getStage().getPointerPosition();
          this._anchorDragOffset = {
            x: pos.x - ap.x,
            y: pos.y - ap.y
          };
          activeTransformersCount++;
          this._fire("transformstart", { evt: e.evt, target: this.getNode() });
          this._nodes.forEach((target) => {
            target._fire("transformstart", { evt: e.evt, target });
          });
        }
        _handleMouseMove(e) {
          let x, y, newHypotenuse;
          const anchorNode = this.findOne("." + this._movingAnchorName);
          const stage = anchorNode.getStage();
          stage.setPointersPositions(e);
          const pp = stage.getPointerPosition();
          let newNodePos = {
            x: pp.x - this._anchorDragOffset.x,
            y: pp.y - this._anchorDragOffset.y
          };
          const oldAbs = anchorNode.getAbsolutePosition();
          if (this.anchorDragBoundFunc()) {
            newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e);
          }
          anchorNode.setAbsolutePosition(newNodePos);
          const newAbs = anchorNode.getAbsolutePosition();
          if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
            return;
          }
          if (this._movingAnchorName === "rotater") {
            const attrs = this._getNodeRect();
            x = anchorNode.x() - attrs.width / 2;
            y = -anchorNode.y() + attrs.height / 2;
            let delta = Math.atan2(-y, x) + Math.PI / 2;
            if (attrs.height < 0) {
              delta -= Math.PI;
            }
            const oldRotation = Global_1.Konva.getAngle(this.rotation());
            const newRotation = oldRotation + delta;
            const tol = Global_1.Konva.getAngle(this.rotationSnapTolerance());
            const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
            const diff = snappedRot - attrs.rotation;
            const shape = rotateAroundCenter(attrs, diff);
            this._fitNodesInto(shape, e);
            return;
          }
          const shiftBehavior = this.shiftBehavior();
          let keepProportion;
          if (shiftBehavior === "inverted") {
            keepProportion = this.keepRatio() && !e.shiftKey;
          } else if (shiftBehavior === "none") {
            keepProportion = this.keepRatio();
          } else {
            keepProportion = this.keepRatio() || e.shiftKey;
          }
          let centeredScaling = this.centeredScaling() || e.altKey;
          if (this._movingAnchorName === "top-left") {
            if (keepProportion) {
              const comparePoint = centeredScaling ? {
                x: this.width() / 2,
                y: this.height() / 2
              } : {
                x: this.findOne(".bottom-right").x(),
                y: this.findOne(".bottom-right").y()
              };
              newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
              const reverseX = this.findOne(".top-left").x() > comparePoint.x ? -1 : 1;
              const reverseY = this.findOne(".top-left").y() > comparePoint.y ? -1 : 1;
              x = newHypotenuse * this.cos * reverseX;
              y = newHypotenuse * this.sin * reverseY;
              this.findOne(".top-left").x(comparePoint.x - x);
              this.findOne(".top-left").y(comparePoint.y - y);
            }
          } else if (this._movingAnchorName === "top-center") {
            this.findOne(".top-left").y(anchorNode.y());
          } else if (this._movingAnchorName === "top-right") {
            if (keepProportion) {
              const comparePoint = centeredScaling ? {
                x: this.width() / 2,
                y: this.height() / 2
              } : {
                x: this.findOne(".bottom-left").x(),
                y: this.findOne(".bottom-left").y()
              };
              newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
              const reverseX = this.findOne(".top-right").x() < comparePoint.x ? -1 : 1;
              const reverseY = this.findOne(".top-right").y() > comparePoint.y ? -1 : 1;
              x = newHypotenuse * this.cos * reverseX;
              y = newHypotenuse * this.sin * reverseY;
              this.findOne(".top-right").x(comparePoint.x + x);
              this.findOne(".top-right").y(comparePoint.y - y);
            }
            var pos = anchorNode.position();
            this.findOne(".top-left").y(pos.y);
            this.findOne(".bottom-right").x(pos.x);
          } else if (this._movingAnchorName === "middle-left") {
            this.findOne(".top-left").x(anchorNode.x());
          } else if (this._movingAnchorName === "middle-right") {
            this.findOne(".bottom-right").x(anchorNode.x());
          } else if (this._movingAnchorName === "bottom-left") {
            if (keepProportion) {
              const comparePoint = centeredScaling ? {
                x: this.width() / 2,
                y: this.height() / 2
              } : {
                x: this.findOne(".top-right").x(),
                y: this.findOne(".top-right").y()
              };
              newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
              const reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
              const reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
              x = newHypotenuse * this.cos * reverseX;
              y = newHypotenuse * this.sin * reverseY;
              anchorNode.x(comparePoint.x - x);
              anchorNode.y(comparePoint.y + y);
            }
            pos = anchorNode.position();
            this.findOne(".top-left").x(pos.x);
            this.findOne(".bottom-right").y(pos.y);
          } else if (this._movingAnchorName === "bottom-center") {
            this.findOne(".bottom-right").y(anchorNode.y());
          } else if (this._movingAnchorName === "bottom-right") {
            if (keepProportion) {
              const comparePoint = centeredScaling ? {
                x: this.width() / 2,
                y: this.height() / 2
              } : {
                x: this.findOne(".top-left").x(),
                y: this.findOne(".top-left").y()
              };
              newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
              const reverseX = this.findOne(".bottom-right").x() < comparePoint.x ? -1 : 1;
              const reverseY = this.findOne(".bottom-right").y() < comparePoint.y ? -1 : 1;
              x = newHypotenuse * this.cos * reverseX;
              y = newHypotenuse * this.sin * reverseY;
              this.findOne(".bottom-right").x(comparePoint.x + x);
              this.findOne(".bottom-right").y(comparePoint.y + y);
            }
          } else {
            console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
          }
          centeredScaling = this.centeredScaling() || e.altKey;
          if (centeredScaling) {
            const topLeft = this.findOne(".top-left");
            const bottomRight = this.findOne(".bottom-right");
            const topOffsetX = topLeft.x();
            const topOffsetY = topLeft.y();
            const bottomOffsetX = this.getWidth() - bottomRight.x();
            const bottomOffsetY = this.getHeight() - bottomRight.y();
            bottomRight.move({
              x: -topOffsetX,
              y: -topOffsetY
            });
            topLeft.move({
              x: bottomOffsetX,
              y: bottomOffsetY
            });
          }
          const absPos = this.findOne(".top-left").getAbsolutePosition();
          x = absPos.x;
          y = absPos.y;
          const width = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
          const height = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
          this._fitNodesInto({
            x,
            y,
            width,
            height,
            rotation: Global_1.Konva.getAngle(this.rotation())
          }, e);
        }
        _handleMouseUp(e) {
          this._removeEvents(e);
        }
        getAbsoluteTransform() {
          return this.getTransform();
        }
        _removeEvents(e) {
          var _a;
          if (this._transforming) {
            this._transforming = false;
            if (typeof window !== "undefined") {
              window.removeEventListener("mousemove", this._handleMouseMove);
              window.removeEventListener("touchmove", this._handleMouseMove);
              window.removeEventListener("mouseup", this._handleMouseUp, true);
              window.removeEventListener("touchend", this._handleMouseUp, true);
            }
            const node = this.getNode();
            activeTransformersCount--;
            this._fire("transformend", { evt: e, target: node });
            (_a = this.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
            if (node) {
              this._nodes.forEach((target) => {
                var _a2;
                target._fire("transformend", { evt: e, target });
                (_a2 = target.getLayer()) === null || _a2 === void 0 ? void 0 : _a2.batchDraw();
              });
            }
            this._movingAnchorName = null;
          }
        }
        _fitNodesInto(newAttrs, evt) {
          const oldAttrs = this._getNodeRect();
          const minSize = 1;
          if (Util_1.Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
          }
          if (Util_1.Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
          }
          const t = new Util_1.Transform();
          t.rotate(Global_1.Konva.getAngle(this.rotation()));
          if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
            const offset = t.point({
              x: -this.padding() * 2,
              y: 0
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            newAttrs.width += this.padding() * 2;
            this._movingAnchorName = this._movingAnchorName.replace("left", "right");
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
          } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
            const offset = t.point({
              x: this.padding() * 2,
              y: 0
            });
            this._movingAnchorName = this._movingAnchorName.replace("right", "left");
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.width += this.padding() * 2;
          }
          if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
            const offset = t.point({
              x: 0,
              y: -this.padding() * 2
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
          } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
            const offset = t.point({
              x: 0,
              y: this.padding() * 2
            });
            this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
          }
          if (this.boundBoxFunc()) {
            const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
            if (bounded) {
              newAttrs = bounded;
            } else {
              Util_1.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
            }
          }
          const baseSize = 1e7;
          const oldTr = new Util_1.Transform();
          oldTr.translate(oldAttrs.x, oldAttrs.y);
          oldTr.rotate(oldAttrs.rotation);
          oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
          const newTr = new Util_1.Transform();
          const newScaleX = newAttrs.width / baseSize;
          const newScaleY = newAttrs.height / baseSize;
          if (this.flipEnabled() === false) {
            newTr.translate(newAttrs.x, newAttrs.y);
            newTr.rotate(newAttrs.rotation);
            newTr.translate(newAttrs.width < 0 ? newAttrs.width : 0, newAttrs.height < 0 ? newAttrs.height : 0);
            newTr.scale(Math.abs(newScaleX), Math.abs(newScaleY));
          } else {
            newTr.translate(newAttrs.x, newAttrs.y);
            newTr.rotate(newAttrs.rotation);
            newTr.scale(newScaleX, newScaleY);
          }
          const delta = newTr.multiply(oldTr.invert());
          this._nodes.forEach((node) => {
            var _a;
            const parentTransform = node.getParent().getAbsoluteTransform();
            const localTransform = node.getTransform().copy();
            localTransform.translate(node.offsetX(), node.offsetY());
            const newLocalTransform = new Util_1.Transform();
            newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
            const attrs = newLocalTransform.decompose();
            node.setAttrs(attrs);
            (_a = node.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
          });
          this.rotation(Util_1.Util._getRotation(newAttrs.rotation));
          this._nodes.forEach((node) => {
            this._fire("transform", { evt, target: node });
            node._fire("transform", { evt, target: node });
          });
          this._resetTransformCache();
          this.update();
          this.getLayer().batchDraw();
        }
        forceUpdate() {
          this._resetTransformCache();
          this.update();
        }
        _batchChangeChild(selector, attrs) {
          const anchor = this.findOne(selector);
          anchor.setAttrs(attrs);
        }
        update() {
          var _a;
          const attrs = this._getNodeRect();
          this.rotation(Util_1.Util._getRotation(attrs.rotation));
          const width = attrs.width;
          const height = attrs.height;
          const enabledAnchors = this.enabledAnchors();
          const resizeEnabled = this.resizeEnabled();
          const padding = this.padding();
          const anchorSize = this.anchorSize();
          const anchors = this.find("._anchor");
          anchors.forEach((node) => {
            node.setAttrs({
              width: anchorSize,
              height: anchorSize,
              offsetX: anchorSize / 2,
              offsetY: anchorSize / 2,
              stroke: this.anchorStroke(),
              strokeWidth: this.anchorStrokeWidth(),
              fill: this.anchorFill(),
              cornerRadius: this.anchorCornerRadius()
            });
          });
          this._batchChangeChild(".top-left", {
            x: 0,
            y: 0,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf("top-left") >= 0
          });
          this._batchChangeChild(".top-center", {
            x: width / 2,
            y: 0,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf("top-center") >= 0
          });
          this._batchChangeChild(".top-right", {
            x: width,
            y: 0,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf("top-right") >= 0
          });
          this._batchChangeChild(".middle-left", {
            x: 0,
            y: height / 2,
            offsetX: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf("middle-left") >= 0
          });
          this._batchChangeChild(".middle-right", {
            x: width,
            y: height / 2,
            offsetX: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf("middle-right") >= 0
          });
          this._batchChangeChild(".bottom-left", {
            x: 0,
            y: height,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf("bottom-left") >= 0
          });
          this._batchChangeChild(".bottom-center", {
            x: width / 2,
            y: height,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf("bottom-center") >= 0
          });
          this._batchChangeChild(".bottom-right", {
            x: width,
            y: height,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf("bottom-right") >= 0
          });
          this._batchChangeChild(".rotater", {
            x: width / 2,
            y: -this.rotateAnchorOffset() * Util_1.Util._sign(height) - padding,
            visible: this.rotateEnabled()
          });
          this._batchChangeChild(".back", {
            width,
            height,
            visible: this.borderEnabled(),
            stroke: this.borderStroke(),
            strokeWidth: this.borderStrokeWidth(),
            dash: this.borderDash(),
            x: 0,
            y: 0
          });
          const styleFunc = this.anchorStyleFunc();
          if (styleFunc) {
            anchors.forEach((node) => {
              styleFunc(node);
            });
          }
          (_a = this.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
        }
        isTransforming() {
          return this._transforming;
        }
        stopTransform() {
          if (this._transforming) {
            this._removeEvents();
            const anchorNode = this.findOne("." + this._movingAnchorName);
            if (anchorNode) {
              anchorNode.stopDrag();
            }
          }
        }
        destroy() {
          if (this.getStage() && this._cursorChange) {
            this.getStage().content && (this.getStage().content.style.cursor = "");
          }
          Group_1.Group.prototype.destroy.call(this);
          this.detach();
          this._removeEvents();
          return this;
        }
        toObject() {
          return Node_1.Node.prototype.toObject.call(this);
        }
        clone(obj) {
          const node = Node_1.Node.prototype.clone.call(this, obj);
          return node;
        }
        getClientRect() {
          if (this.nodes().length > 0) {
            return super.getClientRect();
          } else {
            return { x: 0, y: 0, width: 0, height: 0 };
          }
        }
      };
      exports2.Transformer = Transformer;
      Transformer.isTransforming = () => {
        return activeTransformersCount > 0;
      };
      function validateAnchors(val) {
        if (!(val instanceof Array)) {
          Util_1.Util.warn("enabledAnchors value should be an array");
        }
        if (val instanceof Array) {
          val.forEach(function(name) {
            if (ANCHORS_NAMES.indexOf(name) === -1) {
              Util_1.Util.warn("Unknown anchor name: " + name + ". Available names are: " + ANCHORS_NAMES.join(", "));
            }
          });
        }
        return val || [];
      }
      Transformer.prototype.className = "Transformer";
      (0, Global_2._registerNode)(Transformer);
      Factory_1.Factory.addGetterSetter(Transformer, "enabledAnchors", ANCHORS_NAMES, validateAnchors);
      Factory_1.Factory.addGetterSetter(Transformer, "flipEnabled", true, (0, Validators_1.getBooleanValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "resizeEnabled", true);
      Factory_1.Factory.addGetterSetter(Transformer, "anchorSize", 10, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "rotateEnabled", true);
      Factory_1.Factory.addGetterSetter(Transformer, "rotateLineVisible", true);
      Factory_1.Factory.addGetterSetter(Transformer, "rotationSnaps", []);
      Factory_1.Factory.addGetterSetter(Transformer, "rotateAnchorOffset", 50, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "rotateAnchorCursor", "crosshair");
      Factory_1.Factory.addGetterSetter(Transformer, "rotationSnapTolerance", 5, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "borderEnabled", true);
      Factory_1.Factory.addGetterSetter(Transformer, "anchorStroke", "rgb(0, 161, 255)");
      Factory_1.Factory.addGetterSetter(Transformer, "anchorStrokeWidth", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "anchorFill", "white");
      Factory_1.Factory.addGetterSetter(Transformer, "anchorCornerRadius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "borderStroke", "rgb(0, 161, 255)");
      Factory_1.Factory.addGetterSetter(Transformer, "borderStrokeWidth", 1, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "borderDash");
      Factory_1.Factory.addGetterSetter(Transformer, "keepRatio", true);
      Factory_1.Factory.addGetterSetter(Transformer, "shiftBehavior", "default");
      Factory_1.Factory.addGetterSetter(Transformer, "centeredScaling", false);
      Factory_1.Factory.addGetterSetter(Transformer, "ignoreStroke", false);
      Factory_1.Factory.addGetterSetter(Transformer, "padding", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Transformer, "nodes");
      Factory_1.Factory.addGetterSetter(Transformer, "node");
      Factory_1.Factory.addGetterSetter(Transformer, "boundBoxFunc");
      Factory_1.Factory.addGetterSetter(Transformer, "anchorDragBoundFunc");
      Factory_1.Factory.addGetterSetter(Transformer, "anchorStyleFunc");
      Factory_1.Factory.addGetterSetter(Transformer, "shouldOverdrawWholeArea", false);
      Factory_1.Factory.addGetterSetter(Transformer, "useSingleNodeRotation", true);
      Factory_1.Factory.backCompat(Transformer, {
        lineEnabled: "borderEnabled",
        rotateHandlerOffset: "rotateAnchorOffset",
        enabledHandlers: "enabledAnchors"
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Wedge.js
  var require_Wedge = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/shapes/Wedge.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Wedge = void 0;
      var Factory_1 = require_Factory();
      var Shape_1 = require_Shape();
      var Global_1 = require_Global();
      var Validators_1 = require_Validators();
      var Global_2 = require_Global();
      var Wedge = class extends Shape_1.Shape {
        _sceneFunc(context) {
          context.beginPath();
          context.arc(0, 0, this.radius(), 0, Global_1.Konva.getAngle(this.angle()), this.clockwise());
          context.lineTo(0, 0);
          context.closePath();
          context.fillStrokeShape(this);
        }
        getWidth() {
          return this.radius() * 2;
        }
        getHeight() {
          return this.radius() * 2;
        }
        setWidth(width) {
          this.radius(width / 2);
        }
        setHeight(height) {
          this.radius(height / 2);
        }
      };
      exports2.Wedge = Wedge;
      Wedge.prototype.className = "Wedge";
      Wedge.prototype._centroid = true;
      Wedge.prototype._attrsAffectingSize = ["radius"];
      (0, Global_2._registerNode)(Wedge);
      Factory_1.Factory.addGetterSetter(Wedge, "radius", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Wedge, "angle", 0, (0, Validators_1.getNumberValidator)());
      Factory_1.Factory.addGetterSetter(Wedge, "clockwise", false);
      Factory_1.Factory.backCompat(Wedge, {
        angleDeg: "angle",
        getAngleDeg: "getAngle",
        setAngleDeg: "setAngle"
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Blur.js
  var require_Blur = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Blur.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Blur = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      function BlurStack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
      }
      var mul_table = [
        512,
        512,
        456,
        512,
        328,
        456,
        335,
        512,
        405,
        328,
        271,
        456,
        388,
        335,
        292,
        512,
        454,
        405,
        364,
        328,
        298,
        271,
        496,
        456,
        420,
        388,
        360,
        335,
        312,
        292,
        273,
        512,
        482,
        454,
        428,
        405,
        383,
        364,
        345,
        328,
        312,
        298,
        284,
        271,
        259,
        496,
        475,
        456,
        437,
        420,
        404,
        388,
        374,
        360,
        347,
        335,
        323,
        312,
        302,
        292,
        282,
        273,
        265,
        512,
        497,
        482,
        468,
        454,
        441,
        428,
        417,
        405,
        394,
        383,
        373,
        364,
        354,
        345,
        337,
        328,
        320,
        312,
        305,
        298,
        291,
        284,
        278,
        271,
        265,
        259,
        507,
        496,
        485,
        475,
        465,
        456,
        446,
        437,
        428,
        420,
        412,
        404,
        396,
        388,
        381,
        374,
        367,
        360,
        354,
        347,
        341,
        335,
        329,
        323,
        318,
        312,
        307,
        302,
        297,
        292,
        287,
        282,
        278,
        273,
        269,
        265,
        261,
        512,
        505,
        497,
        489,
        482,
        475,
        468,
        461,
        454,
        447,
        441,
        435,
        428,
        422,
        417,
        411,
        405,
        399,
        394,
        389,
        383,
        378,
        373,
        368,
        364,
        359,
        354,
        350,
        345,
        341,
        337,
        332,
        328,
        324,
        320,
        316,
        312,
        309,
        305,
        301,
        298,
        294,
        291,
        287,
        284,
        281,
        278,
        274,
        271,
        268,
        265,
        262,
        259,
        257,
        507,
        501,
        496,
        491,
        485,
        480,
        475,
        470,
        465,
        460,
        456,
        451,
        446,
        442,
        437,
        433,
        428,
        424,
        420,
        416,
        412,
        408,
        404,
        400,
        396,
        392,
        388,
        385,
        381,
        377,
        374,
        370,
        367,
        363,
        360,
        357,
        354,
        350,
        347,
        344,
        341,
        338,
        335,
        332,
        329,
        326,
        323,
        320,
        318,
        315,
        312,
        310,
        307,
        304,
        302,
        299,
        297,
        294,
        292,
        289,
        287,
        285,
        282,
        280,
        278,
        275,
        273,
        271,
        269,
        267,
        265,
        263,
        261,
        259
      ];
      var shg_table = [
        9,
        11,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        15,
        15,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
      ];
      function filterGaussBlurRGBA(imageData, radius) {
        const pixels = imageData.data, width = imageData.width, height = imageData.height;
        let p, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
        const div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), mul_sum = mul_table[radius], shg_sum = shg_table[radius];
        let stackEnd = null, stack = stackStart, stackIn = null, stackOut = null;
        for (let i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();
          if (i === radiusPlus1) {
            stackEnd = stack;
          }
        }
        stack.next = stackStart;
        yw = yi = 0;
        for (let y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack = stackStart;
          for (let i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }
          for (let i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
          }
          stackIn = stackStart;
          stackOut = stackEnd;
          for (let x = 0; x < width; x++) {
            pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa !== 0) {
              pa = 255 / pa;
              pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            a_in_sum += stackIn.a = pixels[p + 3];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += 4;
          }
          yw += width;
        }
        for (let x = 0; x < width; x++) {
          g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack = stackStart;
          for (let i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }
          let yp = width;
          for (let i = 1; i <= radius; i++) {
            yi = yp + x << 2;
            r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
            if (i < heightMinus1) {
              yp += width;
            }
          }
          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;
          for (let y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa > 0) {
              pa = 255 / pa;
              pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            a_sum += a_in_sum += stackIn.a = pixels[p + 3];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += width;
          }
        }
      }
      var Blur = function Blur2(imageData) {
        const radius = Math.round(this.blurRadius());
        if (radius > 0) {
          filterGaussBlurRGBA(imageData, radius);
        }
      };
      exports2.Blur = Blur;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "blurRadius", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Brighten.js
  var require_Brighten = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Brighten.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Brighten = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Brighten = function(imageData) {
        const brightness = this.brightness() * 255, data = imageData.data, len = data.length;
        for (let i = 0; i < len; i += 4) {
          data[i] += brightness;
          data[i + 1] += brightness;
          data[i + 2] += brightness;
        }
      };
      exports2.Brighten = Brighten;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "brightness", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Contrast.js
  var require_Contrast = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Contrast.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Contrast = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Contrast = function(imageData) {
        const adjust = Math.pow((this.contrast() + 100) / 100, 2);
        const data = imageData.data, nPixels = data.length;
        let red = 150, green = 150, blue = 150;
        for (let i = 0; i < nPixels; i += 4) {
          red = data[i];
          green = data[i + 1];
          blue = data[i + 2];
          red /= 255;
          red -= 0.5;
          red *= adjust;
          red += 0.5;
          red *= 255;
          green /= 255;
          green -= 0.5;
          green *= adjust;
          green += 0.5;
          green *= 255;
          blue /= 255;
          blue -= 0.5;
          blue *= adjust;
          blue += 0.5;
          blue *= 255;
          red = red < 0 ? 0 : red > 255 ? 255 : red;
          green = green < 0 ? 0 : green > 255 ? 255 : green;
          blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
          data[i] = red;
          data[i + 1] = green;
          data[i + 2] = blue;
        }
      };
      exports2.Contrast = Contrast;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "contrast", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Emboss.js
  var require_Emboss = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Emboss.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Emboss = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Util_1 = require_Util();
      var Validators_1 = require_Validators();
      var Emboss = function(imageData) {
        const strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4;
        let dirY = 0, dirX = 0, y = h;
        switch (direction) {
          case "top-left":
            dirY = -1;
            dirX = -1;
            break;
          case "top":
            dirY = -1;
            dirX = 0;
            break;
          case "top-right":
            dirY = -1;
            dirX = 1;
            break;
          case "right":
            dirY = 0;
            dirX = 1;
            break;
          case "bottom-right":
            dirY = 1;
            dirX = 1;
            break;
          case "bottom":
            dirY = 1;
            dirX = 0;
            break;
          case "bottom-left":
            dirY = 1;
            dirX = -1;
            break;
          case "left":
            dirY = 0;
            dirX = -1;
            break;
          default:
            Util_1.Util.error("Unknown emboss direction: " + direction);
        }
        do {
          const offsetY = (y - 1) * w4;
          let otherY = dirY;
          if (y + otherY < 1) {
            otherY = 0;
          }
          if (y + otherY > h) {
            otherY = 0;
          }
          const offsetYOther = (y - 1 + otherY) * w * 4;
          let x = w;
          do {
            const offset = offsetY + (x - 1) * 4;
            let otherX = dirX;
            if (x + otherX < 1) {
              otherX = 0;
            }
            if (x + otherX > w) {
              otherX = 0;
            }
            const offsetOther = offsetYOther + (x - 1 + otherX) * 4;
            const dR = data[offset] - data[offsetOther];
            const dG = data[offset + 1] - data[offsetOther + 1];
            const dB = data[offset + 2] - data[offsetOther + 2];
            let dif = dR;
            const absDif = dif > 0 ? dif : -dif;
            const absG = dG > 0 ? dG : -dG;
            const absB = dB > 0 ? dB : -dB;
            if (absG > absDif) {
              dif = dG;
            }
            if (absB > absDif) {
              dif = dB;
            }
            dif *= strength;
            if (blend) {
              const r = data[offset] + dif;
              const g = data[offset + 1] + dif;
              const b = data[offset + 2] + dif;
              data[offset] = r > 255 ? 255 : r < 0 ? 0 : r;
              data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
              data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
            } else {
              let grey = greyLevel - dif;
              if (grey < 0) {
                grey = 0;
              } else if (grey > 255) {
                grey = 255;
              }
              data[offset] = data[offset + 1] = data[offset + 2] = grey;
            }
          } while (--x);
        } while (--y);
      };
      exports2.Emboss = Emboss;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "embossStrength", 0.5, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "embossWhiteLevel", 0.5, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "embossDirection", "top-left", void 0, Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "embossBlend", false, void 0, Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Enhance.js
  var require_Enhance = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Enhance.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Enhance = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      function remap(fromValue, fromMin, fromMax, toMin, toMax) {
        const fromRange = fromMax - fromMin, toRange = toMax - toMin;
        if (fromRange === 0) {
          return toMin + toRange / 2;
        }
        if (toRange === 0) {
          return toMin;
        }
        let toValue = (fromValue - fromMin) / fromRange;
        toValue = toRange * toValue + toMin;
        return toValue;
      }
      var Enhance = function(imageData) {
        const data = imageData.data, nSubPixels = data.length;
        let rMin = data[0], rMax = rMin, r, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b;
        const enhanceAmount = this.enhance();
        if (enhanceAmount === 0) {
          return;
        }
        for (let i = 0; i < nSubPixels; i += 4) {
          r = data[i + 0];
          if (r < rMin) {
            rMin = r;
          } else if (r > rMax) {
            rMax = r;
          }
          g = data[i + 1];
          if (g < gMin) {
            gMin = g;
          } else if (g > gMax) {
            gMax = g;
          }
          b = data[i + 2];
          if (b < bMin) {
            bMin = b;
          } else if (b > bMax) {
            bMax = b;
          }
        }
        if (rMax === rMin) {
          rMax = 255;
          rMin = 0;
        }
        if (gMax === gMin) {
          gMax = 255;
          gMin = 0;
        }
        if (bMax === bMin) {
          bMax = 255;
          bMin = 0;
        }
        let rGoalMax, rGoalMin, gGoalMax, gGoalMin, bGoalMax, bGoalMin;
        if (enhanceAmount > 0) {
          rGoalMax = rMax + enhanceAmount * (255 - rMax);
          rGoalMin = rMin - enhanceAmount * (rMin - 0);
          gGoalMax = gMax + enhanceAmount * (255 - gMax);
          gGoalMin = gMin - enhanceAmount * (gMin - 0);
          bGoalMax = bMax + enhanceAmount * (255 - bMax);
          bGoalMin = bMin - enhanceAmount * (bMin - 0);
        } else {
          const rMid = (rMax + rMin) * 0.5;
          rGoalMax = rMax + enhanceAmount * (rMax - rMid);
          rGoalMin = rMin + enhanceAmount * (rMin - rMid);
          const gMid = (gMax + gMin) * 0.5;
          gGoalMax = gMax + enhanceAmount * (gMax - gMid);
          gGoalMin = gMin + enhanceAmount * (gMin - gMid);
          const bMid = (bMax + bMin) * 0.5;
          bGoalMax = bMax + enhanceAmount * (bMax - bMid);
          bGoalMin = bMin + enhanceAmount * (bMin - bMid);
        }
        for (let i = 0; i < nSubPixels; i += 4) {
          data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
          data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
          data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
        }
      };
      exports2.Enhance = Enhance;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "enhance", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Grayscale.js
  var require_Grayscale = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Grayscale.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Grayscale = void 0;
      var Grayscale = function(imageData) {
        const data = imageData.data, len = data.length;
        for (let i = 0; i < len; i += 4) {
          const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
          data[i] = brightness;
          data[i + 1] = brightness;
          data[i + 2] = brightness;
        }
      };
      exports2.Grayscale = Grayscale;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/HSL.js
  var require_HSL = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/HSL.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.HSL = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      Factory_1.Factory.addGetterSetter(Node_1.Node, "hue", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "saturation", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "luminance", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      var HSL = function(imageData) {
        const data = imageData.data, nPixels = data.length, v = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127;
        const vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
        const rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
        const gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
        const br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
        let r, g, b, a;
        for (let i = 0; i < nPixels; i += 4) {
          r = data[i + 0];
          g = data[i + 1];
          b = data[i + 2];
          a = data[i + 3];
          data[i + 0] = rr * r + rg * g + rb * b + l;
          data[i + 1] = gr * r + gg * g + gb * b + l;
          data[i + 2] = br * r + bg * g + bb * b + l;
          data[i + 3] = a;
        }
      };
      exports2.HSL = HSL;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/HSV.js
  var require_HSV = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/HSV.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.HSV = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var HSV = function(imageData) {
        const data = imageData.data, nPixels = data.length, v = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360;
        const vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
        const rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
        const gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
        const br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
        for (let i = 0; i < nPixels; i += 4) {
          const r = data[i + 0];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          data[i + 0] = rr * r + rg * g + rb * b;
          data[i + 1] = gr * r + gg * g + gb * b;
          data[i + 2] = br * r + bg * g + bb * b;
          data[i + 3] = a;
        }
      };
      exports2.HSV = HSV;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "hue", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "saturation", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "value", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Invert.js
  var require_Invert = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Invert.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Invert = void 0;
      var Invert = function(imageData) {
        const data = imageData.data, len = data.length;
        for (let i = 0; i < len; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
      };
      exports2.Invert = Invert;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Kaleidoscope.js
  var require_Kaleidoscope = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Kaleidoscope.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Kaleidoscope = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Util_1 = require_Util();
      var Validators_1 = require_Validators();
      var ToPolar = function(src, dst, opt) {
        const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
        let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
        let x = xSize - xMid;
        let y = ySize - yMid;
        const rad = Math.sqrt(x * x + y * y);
        rMax = rad > rMax ? rad : rMax;
        const rSize = ySize, tSize = xSize;
        const conversion = 360 / tSize * Math.PI / 180;
        for (let theta = 0; theta < tSize; theta += 1) {
          const sin = Math.sin(theta * conversion);
          const cos = Math.cos(theta * conversion);
          for (let radius = 0; radius < rSize; radius += 1) {
            x = Math.floor(xMid + rMax * radius / rSize * cos);
            y = Math.floor(yMid + rMax * radius / rSize * sin);
            let i = (y * xSize + x) * 4;
            const r = srcPixels[i + 0];
            const g = srcPixels[i + 1];
            const b = srcPixels[i + 2];
            const a = srcPixels[i + 3];
            i = (theta + radius * xSize) * 4;
            dstPixels[i + 0] = r;
            dstPixels[i + 1] = g;
            dstPixels[i + 2] = b;
            dstPixels[i + 3] = a;
          }
        }
      };
      var FromPolar = function(src, dst, opt) {
        const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
        let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
        let x = xSize - xMid;
        let y = ySize - yMid;
        const rad = Math.sqrt(x * x + y * y);
        rMax = rad > rMax ? rad : rMax;
        const rSize = ySize, tSize = xSize, phaseShift = opt.polarRotation || 0;
        let x1, y1;
        for (x = 0; x < xSize; x += 1) {
          for (y = 0; y < ySize; y += 1) {
            const dx = x - xMid;
            const dy = y - yMid;
            const radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
            let theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
            theta = theta * tSize / 360;
            x1 = Math.floor(theta);
            y1 = Math.floor(radius);
            let i = (y1 * xSize + x1) * 4;
            const r = srcPixels[i + 0];
            const g = srcPixels[i + 1];
            const b = srcPixels[i + 2];
            const a = srcPixels[i + 3];
            i = (y * xSize + x) * 4;
            dstPixels[i + 0] = r;
            dstPixels[i + 1] = g;
            dstPixels[i + 2] = b;
            dstPixels[i + 3] = a;
          }
        }
      };
      var Kaleidoscope = function(imageData) {
        const xSize = imageData.width, ySize = imageData.height;
        let x, y, xoff, i, r, g, b, a, srcPos, dstPos;
        let power = Math.round(this.kaleidoscopePower());
        const angle = Math.round(this.kaleidoscopeAngle());
        const offset = Math.floor(xSize * (angle % 360) / 360);
        if (power < 1) {
          return;
        }
        const tempCanvas = Util_1.Util.createCanvasElement();
        tempCanvas.width = xSize;
        tempCanvas.height = ySize;
        const scratchData = tempCanvas.getContext("2d").getImageData(0, 0, xSize, ySize);
        Util_1.Util.releaseCanvas(tempCanvas);
        ToPolar(imageData, scratchData, {
          polarCenterX: xSize / 2,
          polarCenterY: ySize / 2
        });
        let minSectionSize = xSize / Math.pow(2, power);
        while (minSectionSize <= 8) {
          minSectionSize = minSectionSize * 2;
          power -= 1;
        }
        minSectionSize = Math.ceil(minSectionSize);
        let sectionSize = minSectionSize;
        let xStart = 0, xEnd = sectionSize, xDelta = 1;
        if (offset + minSectionSize > xSize) {
          xStart = sectionSize;
          xEnd = 0;
          xDelta = -1;
        }
        for (y = 0; y < ySize; y += 1) {
          for (x = xStart; x !== xEnd; x += xDelta) {
            xoff = Math.round(x + offset) % xSize;
            srcPos = (xSize * y + xoff) * 4;
            r = scratchData.data[srcPos + 0];
            g = scratchData.data[srcPos + 1];
            b = scratchData.data[srcPos + 2];
            a = scratchData.data[srcPos + 3];
            dstPos = (xSize * y + x) * 4;
            scratchData.data[dstPos + 0] = r;
            scratchData.data[dstPos + 1] = g;
            scratchData.data[dstPos + 2] = b;
            scratchData.data[dstPos + 3] = a;
          }
        }
        for (y = 0; y < ySize; y += 1) {
          sectionSize = Math.floor(minSectionSize);
          for (i = 0; i < power; i += 1) {
            for (x = 0; x < sectionSize + 1; x += 1) {
              srcPos = (xSize * y + x) * 4;
              r = scratchData.data[srcPos + 0];
              g = scratchData.data[srcPos + 1];
              b = scratchData.data[srcPos + 2];
              a = scratchData.data[srcPos + 3];
              dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
              scratchData.data[dstPos + 0] = r;
              scratchData.data[dstPos + 1] = g;
              scratchData.data[dstPos + 2] = b;
              scratchData.data[dstPos + 3] = a;
            }
            sectionSize *= 2;
          }
        }
        FromPolar(scratchData, imageData, { polarRotation: 0 });
      };
      exports2.Kaleidoscope = Kaleidoscope;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "kaleidoscopePower", 2, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "kaleidoscopeAngle", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Mask.js
  var require_Mask = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Mask.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Mask = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      function pixelAt(idata, x, y) {
        let idx = (y * idata.width + x) * 4;
        const d = [];
        d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
        return d;
      }
      function rgbDistance(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
      }
      function rgbMean(pTab) {
        const m = [0, 0, 0];
        for (let i = 0; i < pTab.length; i++) {
          m[0] += pTab[i][0];
          m[1] += pTab[i][1];
          m[2] += pTab[i][2];
        }
        m[0] /= pTab.length;
        m[1] /= pTab.length;
        m[2] /= pTab.length;
        return m;
      }
      function backgroundMask(idata, threshold) {
        const rgbv_no = pixelAt(idata, 0, 0);
        const rgbv_ne = pixelAt(idata, idata.width - 1, 0);
        const rgbv_so = pixelAt(idata, 0, idata.height - 1);
        const rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
        const thres = threshold || 10;
        if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
          const mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
          const mask = [];
          for (let i = 0; i < idata.width * idata.height; i++) {
            const d = rgbDistance(mean, [
              idata.data[i * 4],
              idata.data[i * 4 + 1],
              idata.data[i * 4 + 2]
            ]);
            mask[i] = d < thres ? 0 : 255;
          }
          return mask;
        }
      }
      function applyMask(idata, mask) {
        for (let i = 0; i < idata.width * idata.height; i++) {
          idata.data[4 * i + 3] = mask[i];
        }
      }
      function erodeMask(mask, sw, sh) {
        const weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
        const side = Math.round(Math.sqrt(weights.length));
        const halfSide = Math.floor(side / 2);
        const maskResult = [];
        for (let y = 0; y < sh; y++) {
          for (let x = 0; x < sw; x++) {
            const so = y * sw + x;
            let a = 0;
            for (let cy = 0; cy < side; cy++) {
              for (let cx = 0; cx < side; cx++) {
                const scy = y + cy - halfSide;
                const scx = x + cx - halfSide;
                if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                  const srcOff = scy * sw + scx;
                  const wt = weights[cy * side + cx];
                  a += mask[srcOff] * wt;
                }
              }
            }
            maskResult[so] = a === 255 * 8 ? 255 : 0;
          }
        }
        return maskResult;
      }
      function dilateMask(mask, sw, sh) {
        const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        const side = Math.round(Math.sqrt(weights.length));
        const halfSide = Math.floor(side / 2);
        const maskResult = [];
        for (let y = 0; y < sh; y++) {
          for (let x = 0; x < sw; x++) {
            const so = y * sw + x;
            let a = 0;
            for (let cy = 0; cy < side; cy++) {
              for (let cx = 0; cx < side; cx++) {
                const scy = y + cy - halfSide;
                const scx = x + cx - halfSide;
                if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                  const srcOff = scy * sw + scx;
                  const wt = weights[cy * side + cx];
                  a += mask[srcOff] * wt;
                }
              }
            }
            maskResult[so] = a >= 255 * 4 ? 255 : 0;
          }
        }
        return maskResult;
      }
      function smoothEdgeMask(mask, sw, sh) {
        const weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
        const side = Math.round(Math.sqrt(weights.length));
        const halfSide = Math.floor(side / 2);
        const maskResult = [];
        for (let y = 0; y < sh; y++) {
          for (let x = 0; x < sw; x++) {
            const so = y * sw + x;
            let a = 0;
            for (let cy = 0; cy < side; cy++) {
              for (let cx = 0; cx < side; cx++) {
                const scy = y + cy - halfSide;
                const scx = x + cx - halfSide;
                if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                  const srcOff = scy * sw + scx;
                  const wt = weights[cy * side + cx];
                  a += mask[srcOff] * wt;
                }
              }
            }
            maskResult[so] = a;
          }
        }
        return maskResult;
      }
      var Mask = function(imageData) {
        const threshold = this.threshold();
        let mask = backgroundMask(imageData, threshold);
        if (mask) {
          mask = erodeMask(mask, imageData.width, imageData.height);
          mask = dilateMask(mask, imageData.width, imageData.height);
          mask = smoothEdgeMask(mask, imageData.width, imageData.height);
          applyMask(imageData, mask);
        }
        return imageData;
      };
      exports2.Mask = Mask;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "threshold", 0, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Noise.js
  var require_Noise = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Noise.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Noise = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Noise = function(imageData) {
        const amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2;
        for (let i = 0; i < nPixels; i += 4) {
          data[i + 0] += half - 2 * half * Math.random();
          data[i + 1] += half - 2 * half * Math.random();
          data[i + 2] += half - 2 * half * Math.random();
        }
      };
      exports2.Noise = Noise;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "noise", 0.2, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Pixelate.js
  var require_Pixelate = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Pixelate.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Pixelate = void 0;
      var Factory_1 = require_Factory();
      var Util_1 = require_Util();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Pixelate = function(imageData) {
        let pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), data = imageData.data;
        if (pixelSize <= 0) {
          Util_1.Util.error("pixelSize value can not be <= 0");
          return;
        }
        for (let xBin = 0; xBin < nBinsX; xBin += 1) {
          for (let yBin = 0; yBin < nBinsY; yBin += 1) {
            let red = 0;
            let green = 0;
            let blue = 0;
            let alpha = 0;
            const xBinStart = xBin * pixelSize;
            const xBinEnd = xBinStart + pixelSize;
            const yBinStart = yBin * pixelSize;
            const yBinEnd = yBinStart + pixelSize;
            let pixelsInBin = 0;
            for (let x = xBinStart; x < xBinEnd; x += 1) {
              if (x >= width) {
                continue;
              }
              for (let y = yBinStart; y < yBinEnd; y += 1) {
                if (y >= height) {
                  continue;
                }
                const i = (width * y + x) * 4;
                red += data[i + 0];
                green += data[i + 1];
                blue += data[i + 2];
                alpha += data[i + 3];
                pixelsInBin += 1;
              }
            }
            red = red / pixelsInBin;
            green = green / pixelsInBin;
            blue = blue / pixelsInBin;
            alpha = alpha / pixelsInBin;
            for (let x = xBinStart; x < xBinEnd; x += 1) {
              if (x >= width) {
                continue;
              }
              for (let y = yBinStart; y < yBinEnd; y += 1) {
                if (y >= height) {
                  continue;
                }
                const i = (width * y + x) * 4;
                data[i + 0] = red;
                data[i + 1] = green;
                data[i + 2] = blue;
                data[i + 3] = alpha;
              }
            }
          }
        }
      };
      exports2.Pixelate = Pixelate;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "pixelSize", 8, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Posterize.js
  var require_Posterize = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Posterize.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Posterize = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Posterize = function(imageData) {
        const levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels;
        for (let i = 0; i < len; i += 1) {
          data[i] = Math.floor(data[i] / scale) * scale;
        }
      };
      exports2.Posterize = Posterize;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "levels", 0.5, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/RGB.js
  var require_RGB = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/RGB.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RGB = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var RGB = function(imageData) {
        const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue();
        for (let i = 0; i < nPixels; i += 4) {
          const brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
          data[i] = brightness * red;
          data[i + 1] = brightness * green;
          data[i + 2] = brightness * blue;
          data[i + 3] = data[i + 3];
        }
      };
      exports2.RGB = RGB;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "red", 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
          return 255;
        } else if (val < 0) {
          return 0;
        } else {
          return Math.round(val);
        }
      });
      Factory_1.Factory.addGetterSetter(Node_1.Node, "green", 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
          return 255;
        } else if (val < 0) {
          return 0;
        } else {
          return Math.round(val);
        }
      });
      Factory_1.Factory.addGetterSetter(Node_1.Node, "blue", 0, Validators_1.RGBComponent, Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/RGBA.js
  var require_RGBA = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/RGBA.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RGBA = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var RGBA = function(imageData) {
        const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha();
        for (let i = 0; i < nPixels; i += 4) {
          const ia = 1 - alpha;
          data[i] = red * alpha + data[i] * ia;
          data[i + 1] = green * alpha + data[i + 1] * ia;
          data[i + 2] = blue * alpha + data[i + 2] * ia;
        }
      };
      exports2.RGBA = RGBA;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "red", 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
          return 255;
        } else if (val < 0) {
          return 0;
        } else {
          return Math.round(val);
        }
      });
      Factory_1.Factory.addGetterSetter(Node_1.Node, "green", 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
          return 255;
        } else if (val < 0) {
          return 0;
        } else {
          return Math.round(val);
        }
      });
      Factory_1.Factory.addGetterSetter(Node_1.Node, "blue", 0, Validators_1.RGBComponent, Factory_1.Factory.afterSetFilter);
      Factory_1.Factory.addGetterSetter(Node_1.Node, "alpha", 1, function(val) {
        this._filterUpToDate = false;
        if (val > 1) {
          return 1;
        } else if (val < 0) {
          return 0;
        } else {
          return val;
        }
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Sepia.js
  var require_Sepia = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Sepia.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sepia = void 0;
      var Sepia = function(imageData) {
        const data = imageData.data, nPixels = data.length;
        for (let i = 0; i < nPixels; i += 4) {
          const r = data[i + 0];
          const g = data[i + 1];
          const b = data[i + 2];
          data[i + 0] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
          data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
          data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        }
      };
      exports2.Sepia = Sepia;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Solarize.js
  var require_Solarize = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Solarize.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Solarize = void 0;
      var Solarize = function(imageData) {
        const data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4;
        let y = h;
        do {
          const offsetY = (y - 1) * w4;
          let x = w;
          do {
            const offset = offsetY + (x - 1) * 4;
            let r = data[offset];
            let g = data[offset + 1];
            let b = data[offset + 2];
            if (r > 127) {
              r = 255 - r;
            }
            if (g > 127) {
              g = 255 - g;
            }
            if (b > 127) {
              b = 255 - b;
            }
            data[offset] = r;
            data[offset + 1] = g;
            data[offset + 2] = b;
          } while (--x);
        } while (--y);
      };
      exports2.Solarize = Solarize;
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Threshold.js
  var require_Threshold = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/filters/Threshold.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Threshold = void 0;
      var Factory_1 = require_Factory();
      var Node_1 = require_Node();
      var Validators_1 = require_Validators();
      var Threshold = function(imageData) {
        const level = this.threshold() * 255, data = imageData.data, len = data.length;
        for (let i = 0; i < len; i += 1) {
          data[i] = data[i] < level ? 0 : 255;
        }
      };
      exports2.Threshold = Threshold;
      Factory_1.Factory.addGetterSetter(Node_1.Node, "threshold", 0.5, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/_FullInternals.js
  var require_FullInternals = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/_FullInternals.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Konva = void 0;
      var _CoreInternals_1 = require_CoreInternals();
      var Arc_1 = require_Arc();
      var Arrow_1 = require_Arrow();
      var Circle_1 = require_Circle();
      var Ellipse_1 = require_Ellipse();
      var Image_1 = require_Image();
      var Label_1 = require_Label();
      var Line_1 = require_Line();
      var Path_1 = require_Path();
      var Rect_1 = require_Rect();
      var RegularPolygon_1 = require_RegularPolygon();
      var Ring_1 = require_Ring();
      var Sprite_1 = require_Sprite();
      var Star_1 = require_Star();
      var Text_1 = require_Text();
      var TextPath_1 = require_TextPath();
      var Transformer_1 = require_Transformer();
      var Wedge_1 = require_Wedge();
      var Blur_1 = require_Blur();
      var Brighten_1 = require_Brighten();
      var Contrast_1 = require_Contrast();
      var Emboss_1 = require_Emboss();
      var Enhance_1 = require_Enhance();
      var Grayscale_1 = require_Grayscale();
      var HSL_1 = require_HSL();
      var HSV_1 = require_HSV();
      var Invert_1 = require_Invert();
      var Kaleidoscope_1 = require_Kaleidoscope();
      var Mask_1 = require_Mask();
      var Noise_1 = require_Noise();
      var Pixelate_1 = require_Pixelate();
      var Posterize_1 = require_Posterize();
      var RGB_1 = require_RGB();
      var RGBA_1 = require_RGBA();
      var Sepia_1 = require_Sepia();
      var Solarize_1 = require_Solarize();
      var Threshold_1 = require_Threshold();
      exports2.Konva = _CoreInternals_1.Konva.Util._assign(_CoreInternals_1.Konva, {
        Arc: Arc_1.Arc,
        Arrow: Arrow_1.Arrow,
        Circle: Circle_1.Circle,
        Ellipse: Ellipse_1.Ellipse,
        Image: Image_1.Image,
        Label: Label_1.Label,
        Tag: Label_1.Tag,
        Line: Line_1.Line,
        Path: Path_1.Path,
        Rect: Rect_1.Rect,
        RegularPolygon: RegularPolygon_1.RegularPolygon,
        Ring: Ring_1.Ring,
        Sprite: Sprite_1.Sprite,
        Star: Star_1.Star,
        Text: Text_1.Text,
        TextPath: TextPath_1.TextPath,
        Transformer: Transformer_1.Transformer,
        Wedge: Wedge_1.Wedge,
        Filters: {
          Blur: Blur_1.Blur,
          Brighten: Brighten_1.Brighten,
          Contrast: Contrast_1.Contrast,
          Emboss: Emboss_1.Emboss,
          Enhance: Enhance_1.Enhance,
          Grayscale: Grayscale_1.Grayscale,
          HSL: HSL_1.HSL,
          HSV: HSV_1.HSV,
          Invert: Invert_1.Invert,
          Kaleidoscope: Kaleidoscope_1.Kaleidoscope,
          Mask: Mask_1.Mask,
          Noise: Noise_1.Noise,
          Pixelate: Pixelate_1.Pixelate,
          Posterize: Posterize_1.Posterize,
          RGB: RGB_1.RGB,
          RGBA: RGBA_1.RGBA,
          Sepia: Sepia_1.Sepia,
          Solarize: Solarize_1.Solarize,
          Threshold: Threshold_1.Threshold
        }
      });
    }
  });

  // node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/konva@9.3.22/node_modules/konva/lib/index.js"(exports2, module2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var _FullInternals_1 = require_FullInternals();
      module2.exports = _FullInternals_1.Konva;
    }
  });

  // node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js"(exports2, module2) {
      !(function(e) {
        if ("object" == typeof exports2 && "undefined" != typeof module2) module2.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
        }
      })(function() {
        return (function s(a, o, h) {
          function u(r, e2) {
            if (!o[r]) {
              if (!a[r]) {
                var t = "function" == typeof __require && __require;
                if (!e2 && t) return t(r, true);
                if (l) return l(r, true);
                var n = new Error("Cannot find module '" + r + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
              }
              var i = o[r] = { exports: {} };
              a[r][0].call(i.exports, function(e3) {
                var t2 = a[r][1][e3];
                return u(t2 || e3);
              }, i, i.exports, s, a, o, h);
            }
            return o[r].exports;
          }
          for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
          return u;
        })({ 1: [function(e, t, r) {
          "use strict";
          var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r.encode = function(e2) {
            for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
            return h.join("");
          }, r.decode = function(e2) {
            var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
            if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
            var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
            for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
            return l;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
          "use strict";
          var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
          function o(e2, t2, r2, n2, i2) {
            this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
          }
          o.prototype = { getContentWorker: function() {
            var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
            return e2.on("end", function() {
              if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
            }), e2;
          }, getCompressedWorker: function() {
            return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o.createWorkerFrom = function(e2, t2, r2) {
            return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
          }, t.exports = o;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
          "use strict";
          var n = e("./stream/GenericWorker");
          r.STORE = { magic: "\0\0", compressWorker: function() {
            return new n("STORE compression");
          }, uncompressWorker: function() {
            return new n("STORE decompression");
          } }, r.DEFLATE = e("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
          "use strict";
          var n = e("./utils");
          var o = (function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          })();
          t.exports = function(e2, t2) {
            return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
              return -1 ^ e3;
            })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
              return -1 ^ e3;
            })(0 | t2, e2, e2.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e, t, r) {
          "use strict";
          r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
        }, {}], 6: [function(e, t, r) {
          "use strict";
          var n = null;
          n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
        }, { lie: 37 }], 7: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
          function h(e2, t2) {
            a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
          }
          r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
            this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
          }, h.prototype.flush = function() {
            a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h.prototype.cleanUp = function() {
            a.prototype.cleanUp.call(this), this._pako = null;
          }, h.prototype._createPako = function() {
            this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t2 = this;
            this._pako.onData = function(e2) {
              t2.push({ data: e2, meta: t2.meta });
            };
          }, r.compressWorker = function(e2) {
            return new h("Deflate", e2);
          }, r.uncompressWorker = function() {
            return new h("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
          "use strict";
          function A(e2, t2) {
            var r2, n2 = "";
            for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
            return n2;
          }
          function n(e2, t2, r2, n2, i2, s2) {
            var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
            var S = 0;
            t2 && (S |= 8), l || !_ && !g || (S |= 2048);
            var z = 0, C = 0;
            w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
              var r3 = e3;
              return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
            })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
              return 63 & (e3 || 0);
            })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
            var E = "";
            return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
          }
          var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
          function s(e2, t2, r2, n2) {
            i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I.inherits(s, i), s.prototype.push = function(e2) {
            var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
          }, s.prototype.openedSource = function(e2) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
            var t2 = this.streamFiles && !e2.file.dir;
            if (t2) {
              var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r2.fileRecord, meta: { percent: 0 } });
            } else this.accumulate = true;
          }, s.prototype.closedSource = function(e2) {
            this.accumulate = false;
            var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
              return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
            })(e2), meta: { percent: 100 } });
            else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s.prototype.flush = function() {
            for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
            var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
              var s2 = I.transformTo("string", i2(n3));
              return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
            })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
            this.push({ data: n2, meta: { percent: 100 } });
          }, s.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s.prototype.registerPrevious = function(e2) {
            this._sources.push(e2);
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s.prototype.error = function(e2) {
            var t2 = this._sources;
            if (!i.prototype.error.call(this, e2)) return false;
            for (var r2 = 0; r2 < t2.length; r2++) try {
              t2[r2].error(e2);
            } catch (e3) {
            }
            return true;
          }, s.prototype.lock = function() {
            i.prototype.lock.call(this);
            for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
          }, t.exports = s;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
          "use strict";
          var u = e("../compressions"), n = e("./ZipFileWorker");
          r.generateWorker = function(e2, a, t2) {
            var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
            try {
              e2.forEach(function(e3, t3) {
                h++;
                var r2 = (function(e4, t4) {
                  var r3 = e4 || t4, n3 = u[r3];
                  if (!n3) throw new Error(r3 + " is not a valid compression method !");
                  return n3;
                })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
                t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
              }), o.entriesCount = h;
            } catch (e3) {
              o.error(e3);
            }
            return o;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
          "use strict";
          function n() {
            if (!(this instanceof n)) return new n();
            if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e2 = new n();
              for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
              return e2;
            };
          }
          (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
            return new n().loadAsync(e2, t2);
          }, n.external = e("./external"), t.exports = n;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
          "use strict";
          var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
          function f(n2) {
            return new i.Promise(function(e2, t2) {
              var r2 = n2.decompressed.getContentWorker().pipe(new a());
              r2.on("error", function(e3) {
                t2(e3);
              }).on("end", function() {
                r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
              }).resume();
            });
          }
          t.exports = function(e2, o) {
            var h = this;
            return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
              var t2 = new s(o);
              return t2.load(e3), t2;
            }).then(function(e3) {
              var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
              if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
              return i.Promise.all(t2);
            }).then(function(e3) {
              for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
                var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
                h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
              }
              return t2.zipComment.length && (h.comment = t2.zipComment), h;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../stream/GenericWorker");
          function s(e2, t2) {
            i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
          }
          n.inherits(s, i), s.prototype._bindStream = function(e2) {
            var t2 = this;
            (this._stream = e2).pause(), e2.on("data", function(e3) {
              t2.push({ data: e3, meta: { percent: 0 } });
            }).on("error", function(e3) {
              t2.isPaused ? this.generatedError = e3 : t2.error(e3);
            }).on("end", function() {
              t2.isPaused ? t2._upstreamEnded = true : t2.end();
            });
          }, s.prototype.pause = function() {
            return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t.exports = s;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
          "use strict";
          var i = e("readable-stream").Readable;
          function n(e2, t2, r2) {
            i.call(this, t2), this._helper = e2;
            var n2 = this;
            e2.on("data", function(e3, t3) {
              n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
            }).on("error", function(e3) {
              n2.emit("error", e3);
            }).on("end", function() {
              n2.push(null);
            });
          }
          e("../utils").inherits(n, i), n.prototype._read = function() {
            this._helper.resume();
          }, t.exports = n;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
          "use strict";
          t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
            if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
            if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
            return new Buffer(e2, t2);
          }, allocBuffer: function(e2) {
            if (Buffer.alloc) return Buffer.alloc(e2);
            var t2 = new Buffer(e2);
            return t2.fill(0), t2;
          }, isBuffer: function(e2) {
            return Buffer.isBuffer(e2);
          }, isStream: function(e2) {
            return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
          } };
        }, {}], 15: [function(e, t, r) {
          "use strict";
          function s(e2, t2, r2) {
            var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
            s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
            var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
            r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
            var o2 = null;
            o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
            var h2 = new d(e2, o2, s2);
            this.files[e2] = h2;
          }
          var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
            "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
            var t2 = e2.lastIndexOf("/");
            return 0 < t2 ? e2.substring(0, t2) : "";
          }, g = function(e2) {
            return "/" !== e2.slice(-1) && (e2 += "/"), e2;
          }, b = function(e2, t2) {
            return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
          };
          function h(e2) {
            return "[object RegExp]" === Object.prototype.toString.call(e2);
          }
          var n = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e2) {
            var t2, r2, n2;
            for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
          }, filter: function(r2) {
            var n2 = [];
            return this.forEach(function(e2, t2) {
              r2(e2, t2) && n2.push(t2);
            }), n2;
          }, file: function(e2, t2, r2) {
            if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
            if (h(e2)) {
              var n2 = e2;
              return this.filter(function(e3, t3) {
                return !t3.dir && n2.test(e3);
              });
            }
            var i2 = this.files[this.root + e2];
            return i2 && !i2.dir ? i2 : null;
          }, folder: function(r2) {
            if (!r2) return this;
            if (h(r2)) return this.filter(function(e3, t3) {
              return t3.dir && r2.test(e3);
            });
            var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
            return n2.root = t2.name, n2;
          }, remove: function(r2) {
            r2 = this.root + r2;
            var e2 = this.files[r2];
            if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
            else for (var t2 = this.filter(function(e3, t3) {
              return t3.name.slice(0, r2.length) === r2;
            }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
            return this;
          }, generate: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e2) {
            var t2, r2 = {};
            try {
              if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
              u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
              var n2 = r2.comment || this.comment || "";
              t2 = o.generateWorker(this, r2, n2);
            } catch (e3) {
              (t2 = new l("error")).error(e3);
            }
            return new a(t2, r2.type || "string", r2.mimeType);
          }, generateAsync: function(e2, t2) {
            return this.generateInternalStream(e2).accumulate(t2);
          }, generateNodeStream: function(e2, t2) {
            return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
          } };
          t.exports = n;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
          "use strict";
          t.exports = e("stream");
        }, { stream: void 0 }], 17: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
            for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data[this.zero + e2];
          }, i.prototype.lastIndexOfSignature = function(e2) {
            for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
            return -1;
          }, i.prototype.readAndCheckSignature = function(e2) {
            var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
            return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
          }, i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2) return [];
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
          "use strict";
          var n = e("../utils");
          function i(e2) {
            this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
          }
          i.prototype = { checkOffset: function(e2) {
            this.checkIndex(this.index + e2);
          }, checkIndex: function(e2) {
            if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
          }, setIndex: function(e2) {
            this.checkIndex(e2), this.index = e2;
          }, skip: function(e2) {
            this.setIndex(this.index + e2);
          }, byteAt: function() {
          }, readInt: function(e2) {
            var t2, r2 = 0;
            for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
            return this.index += e2, r2;
          }, readString: function(e2) {
            return n.transformTo("string", this.readData(e2));
          }, readData: function() {
          }, lastIndexOfSignature: function() {
          }, readAndCheckSignature: function() {
          }, readDate: function() {
            var e2 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
          } }, t.exports = i;
        }, { "../utils": 32 }], 19: [function(e, t, r) {
          "use strict";
          var n = e("./Uint8ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data.charCodeAt(this.zero + e2);
          }, i.prototype.lastIndexOfSignature = function(e2) {
            return this.data.lastIndexOf(e2) - this.zero;
          }, i.prototype.readAndCheckSignature = function(e2) {
            return e2 === this.readData(4);
          }, i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
          "use strict";
          var n = e("./ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
            var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
          t.exports = function(e2) {
            var t2 = n.getTypeOf(e2);
            return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
          "use strict";
          r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../utils");
          function s(e2) {
            n.call(this, "ConvertWorker to " + e2), this.destType = e2;
          }
          i.inherits(s, n), s.prototype.processChunk = function(e2) {
            this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../crc32");
          function s() {
            n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
            this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
          }, t.exports = s;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
          }
          n.inherits(s, i), s.prototype.processChunk = function(e2) {
            if (e2) {
              var t2 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t2 + e2.data.length;
            }
            i.prototype.processChunk.call(this, e2);
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataWorker");
            var t2 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
              t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
            }, function(e3) {
              t2.error(e3);
            });
          }
          n.inherits(s, i), s.prototype.cleanUp = function() {
            i.prototype.cleanUp.call(this), this.data = null;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
          }, s.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s.prototype._tick = function() {
            if (this.isPaused || this.isFinished) return false;
            var e2 = null, t2 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max) return this.end();
            switch (this.type) {
              case "string":
                e2 = this.data.substring(this.index, t2);
                break;
              case "uint8array":
                e2 = this.data.subarray(this.index, t2);
                break;
              case "array":
              case "nodebuffer":
                e2 = this.data.slice(this.index, t2);
            }
            return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
          "use strict";
          function n(e2) {
            this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n.prototype = { push: function(e2) {
            this.emit("data", e2);
          }, end: function() {
            if (this.isFinished) return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e2) {
              this.emit("error", e2);
            }
            return true;
          }, error: function(e2) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
          }, on: function(e2, t2) {
            return this._listeners[e2].push(t2), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e2, t2) {
            if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
          }, pipe: function(e2) {
            return e2.registerPrevious(this);
          }, registerPrevious: function(e2) {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished) return false;
            var e2 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
          }, flush: function() {
          }, processChunk: function(e2) {
            this.push(e2);
          }, withStreamInfo: function(e2, t2) {
            return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
          }, lock: function() {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e2 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e2 : e2;
          } }, t.exports = n;
        }, {}], 29: [function(e, t, r) {
          "use strict";
          var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
          if (n.nodestream) try {
            o = e("../nodejs/NodejsStreamOutputAdapter");
          } catch (e2) {
          }
          function l(e2, o2) {
            return new a.Promise(function(t2, r2) {
              var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
              e2.on("data", function(e3, t3) {
                n2.push(e3), o2 && o2(t3);
              }).on("error", function(e3) {
                n2 = [], r2(e3);
              }).on("end", function() {
                try {
                  var e3 = (function(e4, t3, r3) {
                    switch (e4) {
                      case "blob":
                        return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                      case "base64":
                        return u.encode(t3);
                      default:
                        return h.transformTo(e4, t3);
                    }
                  })(s2, (function(e4, t3) {
                    var r3, n3 = 0, i3 = null, s3 = 0;
                    for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                    switch (e4) {
                      case "string":
                        return t3.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t3);
                      case "uint8array":
                        for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                        return i3;
                      case "nodebuffer":
                        return Buffer.concat(t3);
                      default:
                        throw new Error("concat : unsupported type '" + e4 + "'");
                    }
                  })(i2, n2), a2);
                  t2(e3);
                } catch (e4) {
                  r2(e4);
                }
                n2 = [];
              }).resume();
            });
          }
          function f(e2, t2, r2) {
            var n2 = t2;
            switch (t2) {
              case "blob":
              case "arraybuffer":
                n2 = "uint8array";
                break;
              case "base64":
                n2 = "string";
            }
            try {
              this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
            } catch (e3) {
              this._worker = new s("error"), this._worker.error(e3);
            }
          }
          f.prototype = { accumulate: function(e2) {
            return l(this, e2);
          }, on: function(e2, t2) {
            var r2 = this;
            return "data" === e2 ? this._worker.on(e2, function(e3) {
              t2.call(r2, e3.data, e3.meta);
            }) : this._worker.on(e2, function() {
              h.delay(t2, arguments, r2);
            }), this;
          }, resume: function() {
            return h.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e2) {
            if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
            return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
          } }, t.exports = f;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
          "use strict";
          if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
          else {
            var n = new ArrayBuffer(0);
            try {
              r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
            } catch (e2) {
              try {
                var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
              } catch (e3) {
                r.blob = false;
              }
            }
          }
          try {
            r.nodestream = !!e("readable-stream").Readable;
          } catch (e2) {
            r.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e, t, s) {
          "use strict";
          for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
          u[254] = u[254] = 1;
          function a() {
            n.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l() {
            n.call(this, "utf-8 encode");
          }
          s.utf8encode = function(e2) {
            return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
              var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
              for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
              for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
              return t2;
            })(e2);
          }, s.utf8decode = function(e2) {
            return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
              var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
              for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
              else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
              else {
                for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
                1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
              }
              return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
            })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
          }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
            var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
            if (this.leftOver && this.leftOver.length) {
              if (h.uint8array) {
                var r2 = t2;
                (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
              } else t2 = this.leftOver.concat(t2);
              this.leftOver = null;
            }
            var n2 = (function(e3, t3) {
              var r3;
              for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
              return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
            })(t2), i2 = t2;
            n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
          }, a.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
            this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
          }, s.Utf8EncodeWorker = l;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
          "use strict";
          var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
          function n(e2) {
            return e2;
          }
          function l(e2, t2) {
            for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
            return t2;
          }
          e("setimmediate"), a.newBlob = function(t2, r2) {
            a.checkSupport("blob");
            try {
              return new Blob([t2], { type: r2 });
            } catch (e2) {
              try {
                var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n2.append(t2), n2.getBlob(r2);
              } catch (e3) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i = { stringifyByChunk: function(e2, t2, r2) {
            var n2 = [], i2 = 0, s2 = e2.length;
            if (s2 <= r2) return String.fromCharCode.apply(null, e2);
            for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
            return n2.join("");
          }, stringifyByChar: function(e2) {
            for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
            return t2;
          }, applyCanBeUsed: { uint8array: (function() {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e2) {
              return false;
            }
          })(), nodebuffer: (function() {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (e2) {
              return false;
            }
          })() } };
          function s(e2) {
            var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
            if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
              return i.stringifyByChunk(e2, r2, t2);
            } catch (e3) {
              t2 = Math.floor(t2 / 2);
            }
            return i.stringifyByChar(e2);
          }
          function f(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
            return t2;
          }
          a.applyFromCharCode = s;
          var c = {};
          c.string = { string: n, array: function(e2) {
            return l(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.string.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return l(e2, new Uint8Array(e2.length));
          }, nodebuffer: function(e2) {
            return l(e2, r.allocBuffer(e2.length));
          } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
            return new Uint8Array(e2).buffer;
          }, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.arraybuffer = { string: function(e2) {
            return s(new Uint8Array(e2));
          }, array: function(e2) {
            return f(new Uint8Array(e2), new Array(e2.byteLength));
          }, arraybuffer: n, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(new Uint8Array(e2));
          } }, c.uint8array = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return e2.buffer;
          }, uint8array: n, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.nodebuffer = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.nodebuffer.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return f(e2, new Uint8Array(e2.length));
          }, nodebuffer: n }, a.transformTo = function(e2, t2) {
            if (t2 = t2 || "", !e2) return t2;
            a.checkSupport(e2);
            var r2 = a.getTypeOf(t2);
            return c[r2][e2](t2);
          }, a.resolve = function(e2) {
            for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
            }
            return r2.join("/");
          }, a.getTypeOf = function(e2) {
            return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a.checkSupport = function(e2) {
            if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
          }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
            var t2, r2, n2 = "";
            for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
            return n2;
          }, a.delay = function(e2, t2, r2) {
            setImmediate(function() {
              e2.apply(r2 || null, t2 || []);
            });
          }, a.inherits = function(e2, t2) {
            function r2() {
            }
            r2.prototype = t2.prototype, e2.prototype = new r2();
          }, a.extend = function() {
            var e2, t2, r2 = {};
            for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
            return r2;
          }, a.prepareContent = function(r2, e2, n2, i2, s2) {
            return u.Promise.resolve(e2).then(function(n3) {
              return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
                var e3 = new FileReader();
                e3.onload = function(e4) {
                  t2(e4.target.result);
                }, e3.onerror = function(e4) {
                  r3(e4.target.error);
                }, e3.readAsArrayBuffer(n3);
              }) : n3;
            }).then(function(e3) {
              var t2 = a.getTypeOf(e3);
              return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
                return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
              })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
          function h(e2) {
            this.files = [], this.loadOptions = e2;
          }
          h.prototype = { checkSignature: function(e2) {
            if (!this.reader.readAndCheckSignature(e2)) {
              this.reader.index -= 4;
              var t2 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
            }
          }, isSignature: function(e2, t2) {
            var r2 = this.reader.index;
            this.reader.setIndex(e2);
            var n2 = this.reader.readString(4) === t2;
            return this.reader.setIndex(r2), n2;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
            this.zipComment = this.loadOptions.decodeFileName(r2);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e2, t2;
            for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
          }, readCentralDir: function() {
            var e2;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
            if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e2);
            var t2 = e2;
            if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r2 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
            var n2 = t2 - r2;
            if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
            else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
          }, prepareReader: function(e2) {
            this.reader = n(e2);
          }, load: function(e2) {
            this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t.exports = h;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
          function l(e2, t2) {
            this.options = e2, this.loadOptions = t2;
          }
          l.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e2) {
            var t2, r2;
            if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t2 = (function(e3) {
              for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
              return null;
            })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
            this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
          }, readCentralPart: function(e2) {
            this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
            var t2 = e2.readInt(2);
            if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
            e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e2 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function() {
            if (this.extraFields[1]) {
              var e2 = n(this.extraFields[1].value);
              this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
            }
          }, readExtraFields: function(e2) {
            var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
            e2.setIndex(i2);
          }, handleUTF8: function() {
            var e2 = u.uint8array ? "uint8array" : "array";
            if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
            else {
              var t2 = this.findExtraFieldUnicodePath();
              if (null !== t2) this.fileNameStr = t2;
              else {
                var r2 = s.transformTo(e2, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r2);
              }
              var n2 = this.findExtraFieldUnicodeComment();
              if (null !== n2) this.fileCommentStr = n2;
              else {
                var i2 = s.transformTo(e2, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i2);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e2 = this.extraFields[28789];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e2 = this.extraFields[25461];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          } }, t.exports = l;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
          "use strict";
          function n(e2, t2, r2) {
            this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
          }
          var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
          n.prototype = { internalStream: function(e2) {
            var t2 = null, r2 = "string";
            try {
              if (!e2) throw new Error("No output type specified.");
              var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
              "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
              var i2 = !this._dataBinary;
              i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
            } catch (e3) {
              (t2 = new h("error")).error(e3);
            }
            return new s(t2, r2, "");
          }, async: function(e2, t2) {
            return this.internalStream(e2).accumulate(t2);
          }, nodeStream: function(e2, t2) {
            return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
          }, _compressWorker: function(e2, t2) {
            if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
            var r2 = this._decompressWorker();
            return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
          }, _decompressWorker: function() {
            return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
          } };
          for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
          t.exports = n;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
          (function(t2) {
            "use strict";
            var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
            if (e2) {
              var i = 0, s = new e2(u), a = t2.document.createTextNode("");
              s.observe(a, { characterData: true }), r = function() {
                a.data = i = ++i % 2;
              };
            } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
              var e3 = t2.document.createElement("script");
              e3.onreadystatechange = function() {
                u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
              }, t2.document.documentElement.appendChild(e3);
            } : function() {
              setTimeout(u, 0);
            };
            else {
              var o = new t2.MessageChannel();
              o.port1.onmessage = u, r = function() {
                o.port2.postMessage(0);
              };
            }
            var h = [];
            function u() {
              var e3, t3;
              n = true;
              for (var r2 = h.length; r2; ) {
                for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
                r2 = h.length;
              }
              n = false;
            }
            l.exports = function(e3) {
              1 !== h.push(e3) || n || r();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e, t, r) {
          "use strict";
          var i = e("immediate");
          function u() {
          }
          var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
          function o(e2) {
            if ("function" != typeof e2) throw new TypeError("resolver must be a function");
            this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
          }
          function h(e2, t2, r2) {
            this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
          }
          function f(t2, r2, n2) {
            i(function() {
              var e2;
              try {
                e2 = r2(n2);
              } catch (e3) {
                return l.reject(t2, e3);
              }
              e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
            });
          }
          function c(e2) {
            var t2 = e2 && e2.then;
            if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
              t2.apply(e2, arguments);
            };
          }
          function d(t2, e2) {
            var r2 = false;
            function n2(e3) {
              r2 || (r2 = true, l.reject(t2, e3));
            }
            function i2(e3) {
              r2 || (r2 = true, l.resolve(t2, e3));
            }
            var s2 = p(function() {
              e2(i2, n2);
            });
            "error" === s2.status && n2(s2.value);
          }
          function p(e2, t2) {
            var r2 = {};
            try {
              r2.value = e2(t2), r2.status = "success";
            } catch (e3) {
              r2.status = "error", r2.value = e3;
            }
            return r2;
          }
          (t.exports = o).prototype.finally = function(t2) {
            if ("function" != typeof t2) return this;
            var r2 = this.constructor;
            return this.then(function(e2) {
              return r2.resolve(t2()).then(function() {
                return e2;
              });
            }, function(e2) {
              return r2.resolve(t2()).then(function() {
                throw e2;
              });
            });
          }, o.prototype.catch = function(e2) {
            return this.then(null, e2);
          }, o.prototype.then = function(e2, t2) {
            if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
            var r2 = new this.constructor(u);
            this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
            return r2;
          }, h.prototype.callFulfilled = function(e2) {
            l.resolve(this.promise, e2);
          }, h.prototype.otherCallFulfilled = function(e2) {
            f(this.promise, this.onFulfilled, e2);
          }, h.prototype.callRejected = function(e2) {
            l.reject(this.promise, e2);
          }, h.prototype.otherCallRejected = function(e2) {
            f(this.promise, this.onRejected, e2);
          }, l.resolve = function(e2, t2) {
            var r2 = p(c, t2);
            if ("error" === r2.status) return l.reject(e2, r2.value);
            var n2 = r2.value;
            if (n2) d(e2, n2);
            else {
              e2.state = a, e2.outcome = t2;
              for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
            }
            return e2;
          }, l.reject = function(e2, t2) {
            e2.state = s, e2.outcome = t2;
            for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
            return e2;
          }, o.resolve = function(e2) {
            if (e2 instanceof this) return e2;
            return l.resolve(new this(u), e2);
          }, o.reject = function(e2) {
            var t2 = new this(u);
            return l.reject(t2, e2);
          }, o.all = function(e2) {
            var r2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
            var n2 = e2.length, i2 = false;
            if (!n2) return this.resolve([]);
            var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
            for (; ++t2 < n2; ) h2(e2[t2], t2);
            return o2;
            function h2(e3, t3) {
              r2.resolve(e3).then(function(e4) {
                s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
              }, function(e4) {
                i2 || (i2 = true, l.reject(o2, e4));
              });
            }
          }, o.race = function(e2) {
            var t2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
            var r2 = e2.length, n2 = false;
            if (!r2) return this.resolve([]);
            var i2 = -1, s2 = new this(u);
            for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
              n2 || (n2 = true, l.resolve(s2, e3));
            }, function(e3) {
              n2 || (n2 = true, l.reject(s2, e3));
            });
            var a2;
            return s2;
          };
        }, { immediate: 36 }], 38: [function(e, t, r) {
          "use strict";
          var n = {};
          (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
          "use strict";
          var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
          function p(e2) {
            if (!(this instanceof p)) return new p(e2);
            this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
            var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
            if (r2 !== l) throw new Error(i[r2]);
            if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
              var n2;
              if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
              this._dict_set = true;
            }
          }
          function n(e2, t2) {
            var r2 = new p(t2);
            if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
            return r2.result;
          }
          p.prototype.push = function(e2, t2) {
            var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
            if (this.ended) return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
            do {
              if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
              0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
            } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
            return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
          }, p.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, p.prototype.onEnd = function(e2) {
            e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, n(e2, t2);
          }, r.gzip = function(e2, t2) {
            return (t2 = t2 || {}).gzip = true, n(e2, t2);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
          "use strict";
          var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
          function a(e2) {
            if (!(this instanceof a)) return new a(e2);
            this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
            var r2 = c.inflateInit2(this.strm, t2.windowBits);
            if (r2 !== m.Z_OK) throw new Error(n[r2]);
            this.header = new s(), c.inflateGetHeader(this.strm, this.header);
          }
          function o(e2, t2) {
            var r2 = new a(t2);
            if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
            return r2.result;
          }
          a.prototype.push = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
            if (this.ended) return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
            do {
              if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
              h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
            } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
            return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
          }, a.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, a.prototype.onEnd = function(e2) {
            e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, o(e2, t2);
          }, r.ungzip = o;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r.assign = function(e2) {
            for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
              var r2 = t2.shift();
              if (r2) {
                if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
                for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
              }
            }
            return e2;
          }, r.shrinkBuf = function(e2, t2) {
            return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
          };
          var i = { arraySet: function(e2, t2, r2, n2, i2) {
            if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
            else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            var t2, r2, n2, i2, s2, a;
            for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
            for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
            return a;
          } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
            for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            return [].concat.apply([], e2);
          } };
          r.setTyped = function(e2) {
            e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
          }, r.setTyped(n);
        }, {}], 42: [function(e, t, r) {
          "use strict";
          var h = e("./common"), i = true, s = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e2) {
            i = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e2) {
            s = false;
          }
          for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
          function l(e2, t2) {
            if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
            for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
            return r2;
          }
          u[254] = u[254] = 1, r.string2buf = function(e2) {
            var t2, r2, n2, i2, s2, a = e2.length, o = 0;
            for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          }, r.buf2binstring = function(e2) {
            return l(e2, e2.length);
          }, r.binstring2buf = function(e2) {
            for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
            return t2;
          }, r.buf2string = function(e2, t2) {
            var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
            for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
            else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
            else {
              for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
              1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
            }
            return l(o, n2);
          }, r.utf8border = function(e2, t2) {
            var r2;
            for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
            return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
          };
        }, { "./common": 41 }], 43: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2, r2, n) {
            for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
              for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
              i %= 65521, s %= 65521;
            }
            return i | s << 16 | 0;
          };
        }, {}], 44: [function(e, t, r) {
          "use strict";
          t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e, t, r) {
          "use strict";
          var o = (function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          })();
          t.exports = function(e2, t2, r2, n) {
            var i = o, s = n + r2;
            e2 ^= -1;
            for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
            return -1 ^ e2;
          };
        }, {}], 46: [function(e, t, r) {
          "use strict";
          var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
          function R(e2, t2) {
            return e2.msg = n[t2], t2;
          }
          function T(e2) {
            return (e2 << 1) - (4 < e2 ? 9 : 0);
          }
          function D(e2) {
            for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
          }
          function F(e2) {
            var t2 = e2.state, r2 = t2.pending;
            r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
          }
          function N(e2, t2) {
            u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = t2;
          }
          function P(e2, t2) {
            e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
          }
          function L(e2, t2) {
            var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
            e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
            do {
              if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
                s2 += 2, r2++;
                do {
                } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
                if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                  if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                  d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
                }
              }
            } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
            return a2 <= e2.lookahead ? a2 : e2.lookahead;
          }
          function j(e2) {
            var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
            do {
              if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
                for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
                for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
                i2 += f2;
              }
              if (0 === e2.strm.avail_in) break;
              if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
            } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
          }
          function Z(e2, t2) {
            for (var r2, n2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
                for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
                e2.strstart++;
              } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
              else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
              if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            }
            return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function W(e2, t2) {
            for (var r2, n2, i2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
                for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
                if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
              } else if (e2.match_available) {
                if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
              } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
            }
            return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function M(e2, t2, r2, n2, i2) {
            this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
          }
          function H() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G(e2) {
            var t2;
            return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
          }
          function K(e2) {
            var t2 = G(e2);
            return t2 === m && (function(e3) {
              e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
            })(e2.state), t2;
          }
          function Y(e2, t2, r2, n2, i2, s2) {
            if (!e2) return _;
            var a2 = 1;
            if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
            8 === n2 && (n2 = 9);
            var o2 = new H();
            return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
          }
          h = [new M(0, 0, 0, 0, function(e2, t2) {
            var r2 = 65535;
            for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
              if (e2.lookahead <= 1) {
                if (j(e2), 0 === e2.lookahead && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              e2.strstart += e2.lookahead, e2.lookahead = 0;
              var n2 = e2.block_start + r2;
              if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
              if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            }
            return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
          }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
            return Y(e2, t2, v, 15, 8, 0);
          }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
            return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
          }, r.deflate = function(e2, t2) {
            var r2, n2, i2, s2;
            if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
            if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
            if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
            else {
              var a2 = v + (n2.w_bits - 8 << 4) << 8;
              a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
            }
            if (69 === n2.status) if (n2.gzhead.extra) {
              for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
            } else n2.status = 73;
            if (73 === n2.status) if (n2.gzhead.name) {
              i2 = n2.pending;
              do {
                if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                  s2 = 1;
                  break;
                }
                s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
              } while (0 !== s2);
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
            } else n2.status = 91;
            if (91 === n2.status) if (n2.gzhead.comment) {
              i2 = n2.pending;
              do {
                if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                  s2 = 1;
                  break;
                }
                s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
              } while (0 !== s2);
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
            } else n2.status = 103;
            if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
              if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
            } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
            if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
            if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
              var o2 = 2 === n2.strategy ? (function(e3, t3) {
                for (var r3; ; ) {
                  if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                    if (t3 === l) return A;
                    break;
                  }
                  if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
                for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                  if (e3.lookahead <= S) {
                    if (j(e3), e3.lookahead <= S && t3 === l) return A;
                    if (0 === e3.lookahead) break;
                  }
                  if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                    s3 = e3.strstart + S;
                    do {
                    } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                    e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                  }
                  if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              })(n2, t2) : h[n2.level].func(n2, t2);
              if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
              if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
            }
            return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
          }, r.deflateEnd = function(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
          }, r.deflateSetDictionary = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
            if (!e2 || !e2.state) return _;
            if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
            for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
              for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
              r2.strstart = n2, r2.lookahead = x - 1, j(r2);
            }
            return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
          }, r.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2) {
            var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
            r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
            e: do {
              p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
              t: for (; ; ) {
                if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
                else {
                  if (!(16 & y)) {
                    if (0 == (64 & y)) {
                      v = m[(65535 & v) + (d & (1 << y) - 1)];
                      continue t;
                    }
                    if (32 & y) {
                      r2.mode = 12;
                      break e;
                    }
                    e2.msg = "invalid literal/length code", r2.mode = 30;
                    break e;
                  }
                  w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                  r: for (; ; ) {
                    if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                      if (0 == (64 & y)) {
                        v = _[(65535 & v) + (d & (1 << y) - 1)];
                        continue r;
                      }
                      e2.msg = "invalid distance code", r2.mode = 30;
                      break e;
                    }
                    if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (d >>>= y, p -= y, (y = s - a) < k) {
                      if (l < (y = k - y) && r2.sane) {
                        e2.msg = "invalid distance too far back", r2.mode = 30;
                        break e;
                      }
                      if (S = c, (x = 0) === f) {
                        if (x += u - y, y < w) {
                          for (w -= y; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      } else if (f < y) {
                        if (x += u + f - y, (y -= f) < w) {
                          for (w -= y; C[s++] = c[x++], --y; ) ;
                          if (x = 0, f < w) {
                            for (w -= y = f; C[s++] = c[x++], --y; ) ;
                            x = s - k, S = C;
                          }
                        }
                      } else if (x += f - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                      for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                      w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                    } else {
                      for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                      w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (n < i && s < o);
            n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
          };
        }, {}], 49: [function(e, t, r) {
          "use strict";
          var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
          function L(e2) {
            return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
          }
          function s() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
          }
          function o(e2) {
            var t2;
            return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
          }
          function h(e2, t2) {
            var r2, n2;
            return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
          }
          function u(e2, t2) {
            var r2, n2;
            return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
          }
          var l, f, c = true;
          function j(e2) {
            if (c) {
              var t2;
              for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
              for (; t2 < 256; ) e2.lens[t2++] = 9;
              for (; t2 < 280; ) e2.lens[t2++] = 7;
              for (; t2 < 288; ) e2.lens[t2++] = 8;
              for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
              T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
            }
            e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
          }
          function Z(e2, t2, r2, n2) {
            var i2, s2 = e2.state;
            return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
          }
          r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
            return u(e2, 15);
          }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
            12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
            e: for (; ; ) switch (r2.mode) {
              case P:
                if (0 === r2.wrap) {
                  r2.mode = 13;
                  break;
                }
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (2 & r2.wrap && 35615 === u2) {
                  E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                  break;
                }
                if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                  e2.msg = "incorrect header check", r2.mode = 30;
                  break;
                }
                if (8 != (15 & u2)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
                else if (k > r2.wbits) {
                  e2.msg = "invalid window size", r2.mode = 30;
                  break;
                }
                r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
                break;
              case 2:
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.flags = u2, 8 != (255 & r2.flags)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (57344 & r2.flags) {
                  e2.msg = "unknown header flags set", r2.mode = 30;
                  break;
                }
                r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
              case 3:
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
              case 4:
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
              case 5:
                if (1024 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
                } else r2.head && (r2.head.extra = null);
                r2.mode = 6;
              case 6:
                if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
                r2.length = 0, r2.mode = 7;
              case 7:
                if (2048 & r2.flags) {
                  if (0 === o2) break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
                } else r2.head && (r2.head.name = null);
                r2.length = 0, r2.mode = 8;
              case 8:
                if (4096 & r2.flags) {
                  if (0 === o2) break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
                } else r2.head && (r2.head.comment = null);
                r2.mode = 9;
              case 9:
                if (512 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (65535 & r2.check)) {
                    e2.msg = "header crc mismatch", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
                break;
              case 10:
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
              case 11:
                if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
                e2.adler = r2.check = 1, r2.mode = 12;
              case 12:
                if (5 === t2 || 6 === t2) break e;
              case 13:
                if (r2.last) {
                  u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                  break;
                }
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                  case 0:
                    r2.mode = 14;
                    break;
                  case 1:
                    if (j(r2), r2.mode = 20, 6 !== t2) break;
                    u2 >>>= 2, l2 -= 2;
                    break e;
                  case 2:
                    r2.mode = 17;
                    break;
                  case 3:
                    e2.msg = "invalid block type", r2.mode = 30;
                }
                u2 >>>= 2, l2 -= 2;
                break;
              case 14:
                for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                  e2.msg = "invalid stored block lengths", r2.mode = 30;
                  break;
                }
                if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
              case 15:
                r2.mode = 16;
              case 16:
                if (d = r2.length) {
                  if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                  I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                  break;
                }
                r2.mode = 12;
                break;
              case 17:
                for (; l2 < 14; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                  e2.msg = "too many length or distance symbols", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 18;
              case 18:
                for (; r2.have < r2.ncode; ) {
                  for (; l2 < 3; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
                }
                for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
                if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid code lengths set", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 19;
              case 19:
                for (; r2.have < r2.nlen + r2.ndist; ) {
                  for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                  else {
                    if (16 === b) {
                      for (z = _ + 2; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                        e2.msg = "invalid bit length repeat", r2.mode = 30;
                        break;
                      }
                      k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                    } else if (17 === b) {
                      for (z = _ + 3; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                    } else {
                      for (z = _ + 7; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                    }
                    if (r2.have + d > r2.nlen + r2.ndist) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    for (; d--; ) r2.lens[r2.have++] = k;
                  }
                }
                if (30 === r2.mode) break;
                if (0 === r2.lens[256]) {
                  e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                  break;
                }
                if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid literal/lengths set", r2.mode = 30;
                  break;
                }
                if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                  e2.msg = "invalid distances set", r2.mode = 30;
                  break;
                }
                if (r2.mode = 20, 6 === t2) break e;
              case 20:
                r2.mode = 21;
              case 21:
                if (6 <= o2 && 258 <= h2) {
                  e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                  break;
                }
                for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (g && 0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                  r2.mode = 26;
                  break;
                }
                if (32 & g) {
                  r2.back = -1, r2.mode = 12;
                  break;
                }
                if (64 & g) {
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break;
                }
                r2.extra = 15 & g, r2.mode = 22;
              case 22:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                r2.was = r2.length, r2.mode = 23;
              case 23:
                for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                  e2.msg = "invalid distance code", r2.mode = 30;
                  break;
                }
                r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
              case 24:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                if (r2.offset > r2.dmax) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                r2.mode = 25;
              case 25:
                if (0 === h2) break e;
                if (d = c2 - h2, r2.offset > d) {
                  if ((d = r2.offset - d) > r2.whave && r2.sane) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break;
                  }
                  p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
                } else m = i2, p = a2 - r2.offset, d = r2.length;
                for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
                0 === r2.length && (r2.mode = 21);
                break;
              case 26:
                if (0 === h2) break e;
                i2[a2++] = r2.length, h2--, r2.mode = 21;
                break;
              case 27:
                if (r2.wrap) {
                  for (; l2 < 32; ) {
                    if (0 === o2) break e;
                    o2--, u2 |= n2[s2++] << l2, l2 += 8;
                  }
                  if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                    e2.msg = "incorrect data check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 28;
              case 28:
                if (r2.wrap && r2.flags) {
                  for (; l2 < 32; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (4294967295 & r2.total)) {
                    e2.msg = "incorrect length check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 29;
              case 29:
                x = 1;
                break e;
              case 30:
                x = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return U;
            }
            return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
          }, r.inflateEnd = function(e2) {
            if (!e2 || !e2.state) return U;
            var t2 = e2.state;
            return t2.window && (t2.window = null), e2.state = null, N;
          }, r.inflateGetHeader = function(e2, t2) {
            var r2;
            return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
          }, r.inflateSetDictionary = function(e2, t2) {
            var r2, n2 = t2.length;
            return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
          }, r.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
          "use strict";
          var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t.exports = function(e2, t2, r2, n, i, s, a, o) {
            var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
            for (b = 0; b <= 15; b++) O[b] = 0;
            for (v = 0; v < n; v++) O[t2[r2 + v]]++;
            for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
            if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
            for (y = 1; y < w && 0 === O[y]; y++) ;
            for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
            if (0 < z && (0 === e2 || 1 !== w)) return -1;
            for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
            for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
            if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
            for (; ; ) {
              for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
              for (h = 1 << b - 1; E & h; ) h >>= 1;
              if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                if (b === w) break;
                b = t2[r2 + a[v]];
              }
              if (k < b && (E & f) !== l) {
                for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
                if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
                i[l = E & f] = k << 24 | x << 16 | c - s | 0;
              }
            }
            return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e, t, r) {
          "use strict";
          t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e, t, r) {
          "use strict";
          var i = e("../utils/common"), o = 0, h = 1;
          function n(e2) {
            for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
          }
          var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
          n(z);
          var C = new Array(2 * f);
          n(C);
          var E = new Array(512);
          n(E);
          var A = new Array(256);
          n(A);
          var I = new Array(a);
          n(I);
          var O, B, R, T = new Array(f);
          function D(e2, t2, r2, n2, i2) {
            this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
          }
          function F(e2, t2) {
            this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
          }
          function N(e2) {
            return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
          }
          function P(e2, t2, r2) {
            e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
          }
          function L(e2, t2, r2) {
            P(e2, r2[2 * t2], r2[2 * t2 + 1]);
          }
          function j(e2, t2) {
            for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
            return r2 >>> 1;
          }
          function Z(e2, t2, r2) {
            var n2, i2, s2 = new Array(g + 1), a2 = 0;
            for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
            for (i2 = 0; i2 <= t2; i2++) {
              var o2 = e2[2 * i2 + 1];
              0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
            }
          }
          function W(e2) {
            var t2;
            for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
            for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
            for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
            e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
          }
          function M(e2) {
            8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
          }
          function H(e2, t2, r2, n2) {
            var i2 = 2 * t2, s2 = 2 * r2;
            return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
          }
          function G(e2, t2, r2) {
            for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
            e2.heap[r2] = n2;
          }
          function K(e2, t2, r2) {
            var n2, i2, s2, a2, o2 = 0;
            if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
            L(e2, m, t2);
          }
          function Y(e2, t2) {
            var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
            for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
            for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
            for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
            for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
            e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
              var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
              for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
              for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
              if (0 !== m2) {
                do {
                  for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                  e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
                } while (0 < m2);
                for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
              }
            })(e2, t2), Z(s2, u2, e2.bl_count);
          }
          function X(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
          }
          function V(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
              if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
              else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
              s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
            }
          }
          n(T);
          var q = false;
          function J(e2, t2, r2, n2) {
            P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
              M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
            })(e2, t2, r2, true);
          }
          r._tr_init = function(e2) {
            q || ((function() {
              var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
              for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
              for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
              for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
              for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
              for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
              for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
              for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
              O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
            })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
          }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
            var i2, s2, a2 = 0;
            0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
              var t3, r3 = 4093624447;
              for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
              if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
              for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
              return o;
            })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
              var t3;
              for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
              return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
            })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
              var i3;
              for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
              V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
            })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
          }, r._tr_tally = function(e2, t2, r2) {
            return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
          }, r._tr_align = function(e2) {
            P(e2, 2, 3), L(e2, m, z), (function(e3) {
              16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
            })(e2);
          };
        }, { "../utils/common": 41 }], 53: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e, t, r) {
          (function(e2) {
            !(function(r2, n) {
              "use strict";
              if (!r2.setImmediate) {
                var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
                e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                  process.nextTick(function() {
                    c(e4);
                  });
                } : (function() {
                  if (r2.postMessage && !r2.importScripts) {
                    var e4 = true, t3 = r2.onmessage;
                    return r2.onmessage = function() {
                      e4 = false;
                    }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                  }
                })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                  r2.postMessage(a + e4, "*");
                }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                  c(e4.data);
                }, function(e4) {
                  t2.port2.postMessage(e4);
                }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                  var t3 = l.createElement("script");
                  t3.onreadystatechange = function() {
                    c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                  }, s.appendChild(t3);
                }) : function(e4) {
                  setTimeout(c, 0, e4);
                }, e3.setImmediate = function(e4) {
                  "function" != typeof e4 && (e4 = new Function("" + e4));
                  for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                  var n2 = { callback: e4, args: t3 };
                  return h[o] = n2, i(o), o++;
                }, e3.clearImmediate = f;
              }
              function f(e4) {
                delete h[e4];
              }
              function c(e4) {
                if (u) setTimeout(c, 0, e4);
                else {
                  var t3 = h[e4];
                  if (t3) {
                    u = true;
                    try {
                      !(function(e5) {
                        var t4 = e5.callback, r3 = e5.args;
                        switch (r3.length) {
                          case 0:
                            t4();
                            break;
                          case 1:
                            t4(r3[0]);
                            break;
                          case 2:
                            t4(r3[0], r3[1]);
                            break;
                          case 3:
                            t4(r3[0], r3[1], r3[2]);
                            break;
                          default:
                            t4.apply(n, r3);
                        }
                      })(t3);
                    } finally {
                      f(e4), u = false;
                    }
                  }
                }
              }
              function d(e4) {
                e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
              }
            })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isMasked.js
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  })();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
  var objectCreate = Object.create;
  var baseCreate = /* @__PURE__ */ (function() {
    function object() {
    }
    return function(proto) {
      if (!isObject_default(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  })();
  var baseCreate_default = baseCreate;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default = noop;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var copyArray_default = copyArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
  var defineProperty = (function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  })();
  var defineProperty_default = defineProperty;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
    return defineProperty_default(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant_default(string),
      "writable": true
    });
  };
  var baseSetToString_default = baseSetToString;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var arrayEach_default = arrayEach;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFindIndex.js
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  var baseFindIndex_default = baseFindIndex;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNaN.js
  function baseIsNaN(value) {
    return value !== value;
  }
  var baseIsNaN_default = baseIsNaN;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_strictIndexOf.js
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  var strictIndexOf_default = strictIndexOf;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIndexOf.js
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
  }
  var baseIndexOf_default = baseIndexOf;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludes.js
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf_default(array, value, 0) > -1;
  }
  var arrayIncludes_default = arrayIncludes;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default = baseAssignValue;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
  var objectProto4 = Object.prototype;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignValue_default = assignValue;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue_default(object, key, newValue);
      } else {
        assignValue_default(object, key, newValue);
      }
    }
    return object;
  }
  var copyObject_default = copyObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createAssigner.js
  function createAssigner(assigner) {
    return baseRest_default(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  var createAssigner_default = createAssigner;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
  var objectProto5 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = (function() {
    try {
      var types2 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  })();
  var nodeUtil_default = nodeUtil;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeys.js
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty6.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default = nativeKeysIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject_default(object)) {
      return nativeKeysIn_default(object);
    }
    var isProto = isPrototype_default(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty7.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeysIn_default = baseKeysIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
  function keysIn(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
  }
  var keysIn_default = keysIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray_default(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isKey_default = isKey;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto10 = Object.prototype;
  var hasOwnProperty8 = objectProto10.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty8.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
  var objectProto11 = Object.prototype;
  var hasOwnProperty9 = objectProto11.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty9.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache_default)();
    return memoized;
  }
  memoize.Cache = MapCache_default;
  var memoize_default = memoize;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize_default(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoizeCapped_default = memoizeCapped;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped_default(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var stringToPath_default = stringToPath;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
  function castPath(value, object) {
    if (isArray_default(value)) {
      return value;
    }
    return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
  }
  var castPath_default = castPath;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
  var INFINITY2 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol_default(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
  }
  var toKey_default = toKey;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
  function baseGet(object, path) {
    path = castPath_default(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey_default(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var baseGet_default = baseGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/get.js
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet_default(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_default = get;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values2) {
    var index = -1, length = values2.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values2[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
  var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var isFlattenable_default = isFlattenable;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable_default);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush_default(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var baseFlatten_default = baseFlatten;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
  var getPrototype = overArg_default(Object.getPrototypeOf, Object);
  var getPrototype_default = getPrototype;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
  var objectTag2 = "[object Object]";
  var funcProto3 = Function.prototype;
  var objectProto12 = Object.prototype;
  var funcToString3 = funcProto3.toString;
  var hasOwnProperty10 = objectProto12.hasOwnProperty;
  var objectCtorString = funcToString3.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
      return false;
    }
    var proto = getPrototype_default(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty10.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
  }
  var isPlainObject_default = isPlainObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
  function baseAssign(object, source) {
    return object && copyObject_default(source, keys_default(source), object);
  }
  var baseAssign_default = baseAssign;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
  function baseAssignIn(object, source) {
    return object && copyObject_default(source, keysIn_default(source), object);
  }
  var baseAssignIn_default = baseAssignIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
  var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
  var Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
  var allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  var cloneBuffer_default = cloneBuffer;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
  var objectProto13 = Object.prototype;
  var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
  function copySymbols(source, object) {
    return copyObject_default(source, getSymbols_default(source), object);
  }
  var copySymbols_default = copySymbols;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
  var nativeGetSymbols2 = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
    var result = [];
    while (object) {
      arrayPush_default(result, getSymbols_default(object));
      object = getPrototype_default(object);
    }
    return result;
  };
  var getSymbolsIn_default = getSymbolsIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
  function copySymbolsIn(source, object) {
    return copyObject_default(source, getSymbolsIn_default(source), object);
  }
  var copySymbolsIn_default = copySymbolsIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
  function getAllKeysIn(object) {
    return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
  }
  var getAllKeysIn_default = getAllKeysIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag3 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneArray.js
  var objectProto14 = Object.prototype;
  var hasOwnProperty11 = objectProto14.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var initCloneArray_default = initCloneArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
  var Uint8Array2 = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array2;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
    return result;
  }
  var cloneArrayBuffer_default = cloneArrayBuffer;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var cloneDataView_default = cloneDataView;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var cloneRegExp_default = cloneRegExp;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
  var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var cloneSymbol_default = cloneSymbol;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var cloneTypedArray_default = cloneTypedArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var mapTag3 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag3 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag2 = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag3 = "[object DataView]";
  var float32Tag2 = "[object Float32Array]";
  var float64Tag2 = "[object Float64Array]";
  var int8Tag2 = "[object Int8Array]";
  var int16Tag2 = "[object Int16Array]";
  var int32Tag2 = "[object Int32Array]";
  var uint8Tag2 = "[object Uint8Array]";
  var uint8ClampedTag2 = "[object Uint8ClampedArray]";
  var uint16Tag2 = "[object Uint16Array]";
  var uint32Tag2 = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag2:
        return cloneArrayBuffer_default(object);
      case boolTag2:
      case dateTag2:
        return new Ctor(+object);
      case dataViewTag3:
        return cloneDataView_default(object, isDeep);
      case float32Tag2:
      case float64Tag2:
      case int8Tag2:
      case int16Tag2:
      case int32Tag2:
      case uint8Tag2:
      case uint8ClampedTag2:
      case uint16Tag2:
      case uint32Tag2:
        return cloneTypedArray_default(object, isDeep);
      case mapTag3:
        return new Ctor();
      case numberTag2:
      case stringTag2:
        return new Ctor(object);
      case regexpTag2:
        return cloneRegExp_default(object);
      case setTag3:
        return new Ctor();
      case symbolTag2:
        return cloneSymbol_default(object);
    }
  }
  var initCloneByTag_default = initCloneByTag;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
  }
  var initCloneObject_default = initCloneObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
  var mapTag4 = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike_default(value) && getTag_default(value) == mapTag4;
  }
  var baseIsMap_default = baseIsMap;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
  var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
  var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
  var isMap_default = isMap;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsSet.js
  var setTag4 = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike_default(value) && getTag_default(value) == setTag4;
  }
  var baseIsSet_default = baseIsSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
  var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
  var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
  var isSet_default = isSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseClone.js
  var CLONE_DEEP_FLAG = 1;
  var CLONE_FLAT_FLAG = 2;
  var CLONE_SYMBOLS_FLAG = 4;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var boolTag3 = "[object Boolean]";
  var dateTag3 = "[object Date]";
  var errorTag2 = "[object Error]";
  var funcTag3 = "[object Function]";
  var genTag2 = "[object GeneratorFunction]";
  var mapTag5 = "[object Map]";
  var numberTag3 = "[object Number]";
  var objectTag4 = "[object Object]";
  var regexpTag3 = "[object RegExp]";
  var setTag5 = "[object Set]";
  var stringTag3 = "[object String]";
  var symbolTag3 = "[object Symbol]";
  var weakMapTag3 = "[object WeakMap]";
  var arrayBufferTag3 = "[object ArrayBuffer]";
  var dataViewTag4 = "[object DataView]";
  var float32Tag3 = "[object Float32Array]";
  var float64Tag3 = "[object Float64Array]";
  var int8Tag3 = "[object Int8Array]";
  var int16Tag3 = "[object Int16Array]";
  var int32Tag3 = "[object Int32Array]";
  var uint8Tag3 = "[object Uint8Array]";
  var uint8ClampedTag3 = "[object Uint8ClampedArray]";
  var uint16Tag3 = "[object Uint16Array]";
  var uint32Tag3 = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
  cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject_default(value)) {
      return value;
    }
    var isArr = isArray_default(value);
    if (isArr) {
      result = initCloneArray_default(value);
      if (!isDeep) {
        return copyArray_default(value, result);
      }
    } else {
      var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
      if (isBuffer_default(value)) {
        return cloneBuffer_default(value, isDeep);
      }
      if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject_default(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag_default(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack_default());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet_default(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_default(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach_default(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var baseClone_default = baseClone;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/cloneDeepWith.js
  var CLONE_DEEP_FLAG2 = 1;
  var CLONE_SYMBOLS_FLAG2 = 4;
  function cloneDeepWith(value, customizer) {
    customizer = typeof customizer == "function" ? customizer : void 0;
    return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2, customizer);
  }
  var cloneDeepWith_default = cloneDeepWith;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
  function SetCache(values2) {
    var index = -1, length = values2 == null ? 0 : values2.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values2[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapToArray.js
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag4 = "[object Boolean]";
  var dateTag4 = "[object Date]";
  var errorTag3 = "[object Error]";
  var mapTag6 = "[object Map]";
  var numberTag4 = "[object Number]";
  var regexpTag4 = "[object RegExp]";
  var setTag6 = "[object Set]";
  var stringTag4 = "[object String]";
  var symbolTag4 = "[object Symbol]";
  var arrayBufferTag4 = "[object ArrayBuffer]";
  var dataViewTag5 = "[object DataView]";
  var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag5:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag4:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag4:
      case dateTag4:
      case numberTag4:
        return eq_default(+object, +other);
      case errorTag3:
        return object.name == other.name && object.message == other.message;
      case regexpTag4:
      case stringTag4:
        return object == other + "";
      case mapTag6:
        var convert = mapToArray_default;
      case setTag6:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag4:
        if (symbolValueOf2) {
          return symbolValueOf2.call(object) == symbolValueOf2.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto15 = Object.prototype;
  var hasOwnProperty12 = objectProto15.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty12.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqualDeep.js
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag4 = "[object Arguments]";
  var arrayTag3 = "[object Array]";
  var objectTag5 = "[object Object]";
  var objectProto16 = Object.prototype;
  var hasOwnProperty13 = objectProto16.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
    objTag = objTag == argsTag4 ? objectTag5 : objTag;
    othTag = othTag == argsTag4 ? objectTag5 : othTag;
    var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer_default(object)) {
      if (!isBuffer_default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMatch.js
  var COMPARE_PARTIAL_FLAG5 = 1;
  var COMPARE_UNORDERED_FLAG3 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack_default();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var baseIsMatch_default = baseIsMatch;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isStrictComparable.js
  function isStrictComparable(value) {
    return value === value && !isObject_default(value);
  }
  var isStrictComparable_default = isStrictComparable;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMatchData.js
  function getMatchData(object) {
    var result = keys_default(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable_default(value)];
    }
    return result;
  }
  var getMatchData_default = getMatchData;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_matchesStrictComparable.js
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  var matchesStrictComparable_default = matchesStrictComparable;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatches.js
  function baseMatches(source) {
    var matchData = getMatchData_default(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch_default(object, source, matchData);
    };
  }
  var baseMatches_default = baseMatches;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseHasIn.js
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  var baseHasIn_default = baseHasIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasPath.js
  function hasPath(object, path, hasFunc) {
    path = castPath_default(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey_default(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
  }
  var hasPath_default = hasPath;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/hasIn.js
  function hasIn(object, path) {
    return object != null && hasPath_default(object, path, baseHasIn_default);
  }
  var hasIn_default = hasIn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatchesProperty.js
  var COMPARE_PARTIAL_FLAG6 = 1;
  var COMPARE_UNORDERED_FLAG4 = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey_default(path) && isStrictComparable_default(srcValue)) {
      return matchesStrictComparable_default(toKey_default(path), srcValue);
    }
    return function(object) {
      var objValue = get_default(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
    };
  }
  var baseMatchesProperty_default = baseMatchesProperty;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseProperty.js
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  var baseProperty_default = baseProperty;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePropertyDeep.js
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet_default(object, path);
    };
  }
  var basePropertyDeep_default = basePropertyDeep;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/property.js
  function property(path) {
    return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
  }
  var property_default = property;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIteratee.js
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity_default;
    }
    if (typeof value == "object") {
      return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
    }
    return property_default(value);
  }
  var baseIteratee_default = baseIteratee;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayAggregator.js
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }
  var arrayAggregator_default = arrayAggregator;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseFor.js
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var createBaseFor_default = createBaseFor;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFor.js
  var baseFor = createBaseFor_default();
  var baseFor_default = baseFor;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseForOwn.js
  function baseForOwn(object, iteratee) {
    return object && baseFor_default(object, iteratee, keys_default);
  }
  var baseForOwn_default = baseForOwn;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseEach.js
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_default(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var createBaseEach_default = createBaseEach;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseEach.js
  var baseEach = createBaseEach_default(baseForOwn_default);
  var baseEach_default = baseEach;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAggregator.js
  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach_default(collection, function(value, key, collection2) {
      setter(accumulator, value, iteratee(value), collection2);
    });
    return accumulator;
  }
  var baseAggregator_default = baseAggregator;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createAggregator.js
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
      return func(collection, setter, baseIteratee_default(iteratee, 2), accumulator);
    };
  }
  var createAggregator_default = createAggregator;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignMergeValue.js
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignMergeValue_default = assignMergeValue;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLikeObject.js
  function isArrayLikeObject(value) {
    return isObjectLike_default(value) && isArrayLike_default(value);
  }
  var isArrayLikeObject_default = isArrayLikeObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_safeGet.js
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var safeGet_default = safeGet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toPlainObject.js
  function toPlainObject(value) {
    return copyObject_default(value, keysIn_default(value));
  }
  var toPlainObject_default = toPlainObject;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMergeDeep.js
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue_default(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_default(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject_default(objValue)) {
          newValue = copyArray_default(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer_default(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray_default(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
        newValue = objValue;
        if (isArguments_default(objValue)) {
          newValue = toPlainObject_default(objValue);
        } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
          newValue = initCloneObject_default(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue_default(object, key, newValue);
  }
  var baseMergeDeep_default = baseMergeDeep;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMerge.js
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor_default(source, function(srcValue, key) {
      stack || (stack = new Stack_default());
      if (isObject_default(srcValue)) {
        baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue_default(object, key, newValue);
      }
    }, keysIn_default);
  }
  var baseMerge_default = baseMerge;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludesWith.js
  function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  var arrayIncludesWith_default = arrayIncludesWith;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/last.js
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_default = last;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGt.js
  function baseGt(value, other) {
    return value > other;
  }
  var baseGt_default = baseGt;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keyBy.js
  var keyBy = createAggregator_default(function(result, value, key) {
    baseAssignValue_default(result, key, value);
  });
  var keyBy_default = keyBy;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseExtremum.js
  function baseExtremum(array, iteratee, comparator) {
    var index = -1, length = array.length;
    while (++index < length) {
      var value = array[index], current = iteratee(value);
      if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
        var computed = current, result = value;
      }
    }
    return result;
  }
  var baseExtremum_default = baseExtremum;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/max.js
  function max(array) {
    return array && array.length ? baseExtremum_default(array, identity_default, baseGt_default) : void 0;
  }
  var max_default = max;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/merge.js
  var merge = createAssigner_default(function(object, source, srcIndex) {
    baseMerge_default(object, source, srcIndex);
  });
  var merge_default = merge;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createSet.js
  var INFINITY3 = 1 / 0;
  var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY3) ? noop_default : function(values2) {
    return new Set_default(values2);
  };
  var createSet_default = createSet;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUniq.js
  var LARGE_ARRAY_SIZE2 = 200;
  function baseUniq(array, iteratee, comparator) {
    var index = -1, includes = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith_default;
    } else if (length >= LARGE_ARRAY_SIZE2) {
      var set = iteratee ? null : createSet_default(array);
      if (set) {
        return setToArray_default(set);
      }
      isCommon = false;
      includes = cacheHas_default;
      seen = new SetCache_default();
    } else {
      seen = iteratee ? [] : result;
    }
    outer:
      while (++index < length) {
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  var baseUniq_default = baseUniq;

  // node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/unionBy.js
  var unionBy = baseRest_default(function(arrays) {
    var iteratee = last_default(arrays);
    if (isArrayLikeObject_default(iteratee)) {
      iteratee = void 0;
    }
    return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), baseIteratee_default(iteratee, 2));
  });
  var unionBy_default = unionBy;

  // node_modules/.pnpm/docx-renderer@0.2.2/node_modules/docx-renderer/dist/docx-renderer.mjs
  var import_konva = __toESM(require_lib(), 1);
  var import_jszip = __toESM(require_jszip_min(), 1);
  var defaultOptions = {
    breakPages: true,
    className: "docx",
    ignoreFonts: false,
    ignoreHeight: false,
    ignoreImageWrap: false,
    ignoreLastRenderedPageBreak: true,
    ignoreTableWrap: true,
    ignoreWidth: false,
    inWrapper: true,
    renderChanges: false,
    renderEndnotes: true,
    renderFooters: true,
    renderFootnotes: true,
    renderHeaders: true,
    trimXmlDeclaration: true,
    useBase64URL: false,
    debug: false
  };
  function resolveOptions(userOptions = null) {
    return Object.assign(Object.assign({}, defaultOptions), userOptions);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  var DomType;
  (function(DomType2) {
    DomType2["Document"] = "document";
    DomType2["Paragraph"] = "paragraph";
    DomType2["Run"] = "run";
    DomType2["Break"] = "break";
    DomType2["LastRenderedPageBreak"] = "lastRenderedPageBreak";
    DomType2["SectionBreak"] = "sectionBreak";
    DomType2["NoBreakHyphen"] = "noBreakHyphen";
    DomType2["Table"] = "table";
    DomType2["Row"] = "row";
    DomType2["Cell"] = "cell";
    DomType2["Hyperlink"] = "hyperlink";
    DomType2["Drawing"] = "drawing";
    DomType2["Image"] = "image";
    DomType2["Text"] = "text";
    DomType2["Character"] = "character";
    DomType2["Tab"] = "tab";
    DomType2["Symbol"] = "symbol";
    DomType2["BookmarkStart"] = "bookmarkStart";
    DomType2["BookmarkEnd"] = "bookmarkEnd";
    DomType2["Footer"] = "footer";
    DomType2["Header"] = "header";
    DomType2["FootnoteReference"] = "footnoteReference";
    DomType2["EndnoteReference"] = "endnoteReference";
    DomType2["Footnotes"] = "footnotes";
    DomType2["Footnote"] = "footnote";
    DomType2["Endnotes"] = "endnotes";
    DomType2["Endnote"] = "endnote";
    DomType2["SimpleField"] = "simpleField";
    DomType2["ComplexField"] = "complexField";
    DomType2["Instruction"] = "instruction";
    DomType2["VmlPicture"] = "vmlPicture";
    DomType2["Shape"] = "shape";
    DomType2["MmlMath"] = "mmlMath";
    DomType2["MmlMathParagraph"] = "mmlMathParagraph";
    DomType2["MmlFraction"] = "mmlFraction";
    DomType2["MmlFunction"] = "mmlFunction";
    DomType2["MmlFunctionName"] = "mmlFunctionName";
    DomType2["MmlNumerator"] = "mmlNumerator";
    DomType2["MmlDenominator"] = "mmlDenominator";
    DomType2["MmlRadical"] = "mmlRadical";
    DomType2["MmlBase"] = "mmlBase";
    DomType2["MmlDegree"] = "mmlDegree";
    DomType2["MmlSuperscript"] = "mmlSuperscript";
    DomType2["MmlSubscript"] = "mmlSubscript";
    DomType2["MmlPreSubSuper"] = "mmlPreSubSuper";
    DomType2["MmlSubArgument"] = "mmlSubArgument";
    DomType2["MmlSuperArgument"] = "mmlSuperArgument";
    DomType2["MmlNary"] = "mmlNary";
    DomType2["MmlDelimiter"] = "mmlDelimiter";
    DomType2["MmlRun"] = "mmlRun";
    DomType2["MmlEquationArray"] = "mmlEquationArray";
    DomType2["MmlLimit"] = "mmlLimit";
    DomType2["MmlLimitLower"] = "mmlLimitLower";
    DomType2["MmlMatrix"] = "mmlMatrix";
    DomType2["MmlMatrixRow"] = "mmlMatrixRow";
    DomType2["MmlBox"] = "mmlBox";
    DomType2["MmlBar"] = "mmlBar";
    DomType2["MmlGroupChar"] = "mmlGroupChar";
    DomType2["VmlElement"] = "vmlElement";
    DomType2["Inserted"] = "inserted";
    DomType2["Deleted"] = "deleted";
    DomType2["DeletedText"] = "deletedText";
    DomType2["Comment"] = "comment";
    DomType2["CommentReference"] = "commentReference";
    DomType2["CommentRangeStart"] = "commentRangeStart";
    DomType2["CommentRangeEnd"] = "commentRangeEnd";
  })(DomType || (DomType = {}));
  var MathDomType;
  (function(MathDomType2) {
    MathDomType2["Base"] = "mmlBase";
    MathDomType2["Bar"] = "mmlBar";
    MathDomType2["Box"] = "mmlBox";
    MathDomType2["Delimiter"] = "mmlDelimiter";
    MathDomType2["Degree"] = "mmlDegree";
    MathDomType2["Denominator"] = "mmlDenominator";
    MathDomType2["Function"] = "mmlFunction";
    MathDomType2["FunctionName"] = "mmlFunctionName";
    MathDomType2["Fraction"] = "mmlFraction";
    MathDomType2["GroupChar"] = "mmlGroupChar";
    MathDomType2["Limit"] = "mmlLimit";
    MathDomType2["LimitLower"] = "mmlLimitLower";
    MathDomType2["Matrix"] = "mmlMatrix";
    MathDomType2["MatrixRow"] = "mmlMatrixRow";
    MathDomType2["Math"] = "mmlMath";
    MathDomType2["MathParagraph"] = "mmlMathParagraph";
    MathDomType2["Nary"] = "mmlNary";
    MathDomType2["Numerator"] = "mmlNumerator";
    MathDomType2["PreSubSuper"] = "mmlPreSubSuper";
    MathDomType2["Radical"] = "mmlRadical";
    MathDomType2["SubArgument"] = "mmlSubArgument";
    MathDomType2["Subscript"] = "mmlSubscript";
    MathDomType2["Superscript"] = "mmlSuperscript";
  })(MathDomType || (MathDomType = {}));
  var BreakType;
  (function(BreakType2) {
    BreakType2["Column"] = "column";
    BreakType2["Page"] = "page";
    BreakType2["TextWrapping"] = "textWrapping";
  })(BreakType || (BreakType = {}));
  var WrapType;
  (function(WrapType2) {
    WrapType2["Inline"] = "Inline";
    WrapType2["None"] = "None";
    WrapType2["TopAndBottom"] = "TopAndBottom";
    WrapType2["Tight"] = "Tight";
    WrapType2["Through"] = "Through";
    WrapType2["Square"] = "Square";
    WrapType2["Polygon"] = "Polygon";
  })(WrapType || (WrapType = {}));
  var OpenXmlElementBase = class {
    constructor() {
      this.children = [];
      this.cssStyle = {};
    }
  };
  var ns$1 = {
    wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  };
  var LengthUsage = {
    Px: { mul: 1 / 9525, unit: "px" },
    Dxa: { mul: 1 / 20, unit: "pt" },
    Emu: { mul: 1 / 12700, unit: "pt" },
    FontSize: { mul: 0.5, unit: "pt" },
    Border: { mul: 0.125, unit: "pt" },
    Point: { mul: 1, unit: "pt" },
    RelativeRect: { mul: 1 / 1e5, unit: "" },
    TablePercent: { mul: 0.02, unit: "%" },
    Opacity: { mul: 1 / 1e5, unit: "" },
    degree: { mul: 1 / 6e4, unit: "deg" }
  };
  function convertLength(val, usage = LengthUsage.Dxa, unit = true) {
    if (!val) {
      return null;
    }
    if (typeof val === "number") {
      let result2 = val * usage.mul;
      return unit ? `${result2.toFixed(2)}${usage.unit}` : result2;
    }
    if (/.+(p[xt]|%)$/.test(val)) {
      return val;
    }
    let result = parseFloat(val) * usage.mul;
    return unit ? `${result.toFixed(2)}${usage.unit}` : result;
  }
  function convertBoolean(v, defaultValue = false) {
    switch (v) {
      case "1":
        return true;
      case "0":
        return false;
      case "on":
        return true;
      case "off":
        return false;
      case "true":
        return true;
      case "false":
        return false;
      default:
        return defaultValue;
    }
  }
  function parseCommonProperty(elem, props, xml) {
    if (elem.namespaceURI != ns$1.wordml)
      return false;
    switch (elem.localName) {
      case "color":
        props.color = xml.attr(elem, "val");
        break;
      case "sz":
        props.fontSize = xml.lengthAttr(elem, "val", LengthUsage.FontSize);
        break;
      default:
        return false;
    }
    return true;
  }
  function parseXmlString(xmlString, trimXmlDeclaration = false) {
    if (trimXmlDeclaration)
      xmlString = xmlString.replace(/<[?].*[?]>/, "");
    xmlString = removeUTF8BOM(xmlString);
    const result = new DOMParser().parseFromString(xmlString, "application/xml");
    const errorText = hasXmlParserError(result);
    if (errorText)
      throw new Error(errorText);
    return result;
  }
  function hasXmlParserError(doc) {
    var _a;
    return (_a = doc.getElementsByTagName("parsererror")[0]) === null || _a === void 0 ? void 0 : _a.textContent;
  }
  function removeUTF8BOM(data) {
    return data.charCodeAt(0) === 65279 ? data.substring(1) : data;
  }
  function serializeXmlString(elem) {
    return new XMLSerializer().serializeToString(elem);
  }
  var XmlParser = class {
    elements(elem, localName = null) {
      const result = [];
      for (let i = 0, l = elem.childNodes.length; i < l; i++) {
        let c = elem.childNodes.item(i);
        if (c.nodeType == 1 && (localName == null || c.localName == localName))
          result.push(c);
      }
      return result;
    }
    element(elem, localName) {
      for (let i = 0, l = elem.childNodes.length; i < l; i++) {
        let c = elem.childNodes.item(i);
        if (c.nodeType == 1 && c.localName == localName)
          return c;
      }
      return null;
    }
    elementAttr(elem, localName, attrLocalName) {
      let el = this.element(elem, localName);
      return el ? this.attr(el, attrLocalName) : void 0;
    }
    attrs(elem) {
      return Array.from(elem.attributes);
    }
    attr(elem, localName, defaultValue = null) {
      let attr = this.attrs(elem).find((attr2) => attr2.localName == localName);
      return attr ? attr.value : defaultValue;
    }
    intAttr(node, attrName, defaultValue = null) {
      let val = this.attr(node, attrName);
      return val ? parseInt(val) : defaultValue;
    }
    hexAttr(node, attrName, defaultValue = null) {
      let val = this.attr(node, attrName);
      return val ? parseInt(val, 16) : defaultValue;
    }
    floatAttr(node, attrName, defaultValue = null) {
      let val = this.attr(node, attrName);
      return val ? parseFloat(val) : defaultValue;
    }
    boolAttr(node, attrName, defaultValue = null) {
      return convertBoolean(this.attr(node, attrName), defaultValue);
    }
    lengthAttr(node, attrName, usage = LengthUsage.Dxa, defaultValue) {
      var _a;
      let val = this.attr(node, attrName);
      return (_a = convertLength(val, usage)) !== null && _a !== void 0 ? _a : defaultValue;
    }
    numberAttr(node, attrName, usage = LengthUsage.Dxa, defaultValue = 0) {
      var _a;
      let val = this.attr(node, attrName);
      return (_a = convertLength(val, usage, false)) !== null && _a !== void 0 ? _a : defaultValue;
    }
  };
  var globalXmlParser = new XmlParser();
  function parseBorder(elem, xml) {
    return {
      type: xml.attr(elem, "val"),
      color: xml.attr(elem, "color"),
      size: xml.lengthAttr(elem, "sz", LengthUsage.Border),
      offset: xml.lengthAttr(elem, "space", LengthUsage.Point),
      frame: xml.boolAttr(elem, "frame"),
      shadow: xml.boolAttr(elem, "shadow")
    };
  }
  function parseBorders(elem, xml) {
    var result = {};
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "left":
          result.left = parseBorder(e, xml);
          break;
        case "top":
          result.top = parseBorder(e, xml);
          break;
        case "right":
          result.right = parseBorder(e, xml);
          break;
        case "bottom":
          result.bottom = parseBorder(e, xml);
          break;
      }
    }
    return result;
  }
  var SectionType;
  (function(SectionType2) {
    SectionType2["Continuous"] = "continuous";
    SectionType2["NextPage"] = "nextPage";
    SectionType2["NextColumn"] = "nextColumn";
    SectionType2["EvenPage"] = "evenPage";
    SectionType2["OddPage"] = "oddPage";
  })(SectionType || (SectionType = {}));
  var DocGridType;
  (function(DocGridType2) {
    DocGridType2["Default"] = "default";
    DocGridType2["Lines"] = "lines";
    DocGridType2["LinesAndChars"] = "linesAndChars";
    DocGridType2["SnapToChars"] = "snapToChars";
  })(DocGridType || (DocGridType = {}));
  function parseSectionProperties(elem, xml = globalXmlParser) {
    var _a, _b;
    let section = {
      contentSize: {}
    };
    let origin = {};
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "bidi":
          break;
        case "cols":
          section.columns = parseColumns(e, xml);
          break;
        case "docGrid":
          section.docGrid = parseDocGrid(e, xml);
          break;
        case "endnotePr":
          break;
        case "footerReference":
          ((_a = section.footerRefs) !== null && _a !== void 0 ? _a : section.footerRefs = []).push(parseFooterHeaderReference(e, xml));
          break;
        case "footnotePr":
          break;
        case "formProt":
          break;
        case "headerReference":
          ((_b = section.headerRefs) !== null && _b !== void 0 ? _b : section.headerRefs = []).push(parseFooterHeaderReference(e, xml));
          break;
        case "lnNumType":
          break;
        case "noEndnote":
          break;
        case "paperSrc":
          break;
        case "pgBorders":
          section.pageBorders = parseBorders(e, xml);
          break;
        case "pgMar":
          section.pageMargins = {
            left: xml.lengthAttr(e, "left"),
            right: xml.lengthAttr(e, "right"),
            top: xml.lengthAttr(e, "top"),
            bottom: xml.lengthAttr(e, "bottom"),
            header: xml.lengthAttr(e, "header"),
            footer: xml.lengthAttr(e, "footer"),
            gutter: xml.lengthAttr(e, "gutter")
          };
          origin.pageMargins = {
            left: xml.intAttr(e, "left"),
            right: xml.intAttr(e, "right"),
            top: xml.intAttr(e, "top"),
            bottom: xml.intAttr(e, "bottom"),
            header: xml.intAttr(e, "header"),
            footer: xml.intAttr(e, "footer"),
            gutter: xml.intAttr(e, "gutter")
          };
          break;
        case "pgNumType":
          section.pageNumber = parsePageNumber(e, xml);
          break;
        case "pgSz":
          section.pageSize = {
            width: xml.lengthAttr(e, "w"),
            height: xml.lengthAttr(e, "h"),
            orientation: xml.attr(e, "orient")
          };
          origin.pageSize = {
            width: xml.intAttr(e, "w"),
            height: xml.intAttr(e, "h")
          };
          break;
        case "printerSettings":
          break;
        case "rtlGutter":
          break;
        case "sectPrChange":
          break;
        case "textDirection":
          break;
        case "titlePg":
          section.titlePage = xml.boolAttr(e, "val", true);
          break;
        case "type":
          section.type = xml.attr(e, "val");
          break;
      }
    }
    if (origin.pageSize && origin.pageMargins) {
      const { width } = origin.pageSize;
      const { left, right } = origin.pageMargins;
      section.contentSize.width = convertLength(width - left - right);
    }
    return section;
  }
  function parseColumns(elem, xml) {
    return {
      count: xml.intAttr(elem, "num"),
      space: xml.lengthAttr(elem, "space"),
      separator: xml.boolAttr(elem, "sep"),
      equalWidth: xml.boolAttr(elem, "equalWidth", true),
      columns: xml.elements(elem, "col").map((e) => ({
        width: xml.lengthAttr(e, "w"),
        space: xml.lengthAttr(e, "space")
      }))
    };
  }
  function parseFooterHeaderReference(elem, xml) {
    return {
      id: xml.attr(elem, "id"),
      type: xml.attr(elem, "type")
    };
  }
  function parseDocGrid(elem, xml) {
    let grid = {
      type: DocGridType.Default
    };
    for (let attr of xml.attrs(elem)) {
      switch (attr.localName) {
        case "charSpace":
          grid.characterSpace = xml.intAttr(elem, "charSpace");
          break;
        case "linePitch":
          grid.linePitch = xml.intAttr(elem, "linePitch");
          break;
        case "type":
          grid.type = xml.attr(elem, "type", DocGridType.Default);
          break;
      }
    }
    return grid;
  }
  function parsePageNumber(elem, xml) {
    return {
      chapSep: xml.attr(elem, "chapSep"),
      chapStyle: xml.attr(elem, "chapStyle"),
      format: xml.attr(elem, "fmt"),
      start: xml.intAttr(elem, "start")
    };
  }
  function escapeClassName(className) {
    if (className === void 0) {
      throw new Error("className cannot be undefined. Please provide a valid string.");
    }
    const replacementRules = [
      { pattern: /[ .]+/g, replacement: "-" },
      { pattern: /[&]+/g, replacement: "and" },
      { pattern: /[#@]+/g, replacement: "" }
    ];
    let processedClassName = className;
    for (const rule of replacementRules) {
      processedClassName = processedClassName.replace(rule.pattern, rule.replacement);
    }
    return processedClassName.toLowerCase();
  }
  function splitPath(path) {
    let si = path.lastIndexOf("/") + 1;
    let folder = si == 0 ? "" : path.substring(0, si);
    let fileName = si == 0 ? path : path.substring(si);
    return [folder, fileName];
  }
  function resolvePath(path, base) {
    try {
      const prefix = "http://docx/";
      const url = new URL(path, prefix + base).toString();
      return url.substring(prefix.length);
    } catch (_a) {
      return `${base}${path}`;
    }
  }
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject();
      reader.readAsDataURL(blob);
    });
  }
  function uuid() {
    if (typeof crypto === "object") {
      if (typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
      }
      if (typeof crypto.getRandomValues === "function" && typeof Uint8Array === "function") {
        const callback = (c) => {
          const num = Number(c);
          return (num ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> num / 4).toString(16);
        };
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, callback);
      }
    }
    let timestamp = (/* @__PURE__ */ new Date()).getTime();
    let perforNow = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let random = Math.random() * 16;
      if (timestamp > 0) {
        random = (timestamp + random) % 16 | 0;
        timestamp = Math.floor(timestamp / 16);
      } else {
        random = (perforNow + random) % 16 | 0;
        perforNow = Math.floor(perforNow / 16);
      }
      return (c === "x" ? random : random & 3 | 8).toString(16);
    });
  }
  var autos = {
    shd: "inherit",
    color: "black",
    borderColor: "black",
    highlight: "transparent"
  };
  var knownColors = [
    "black",
    "blue",
    "cyan",
    "darkBlue",
    "darkCyan",
    "darkGray",
    "darkGreen",
    "darkMagenta",
    "darkRed",
    "darkYellow",
    "green",
    "lightGray",
    "magenta",
    "none",
    "red",
    "white",
    "yellow"
  ];
  var xmlUtil = class {
    static foreach(node, callback) {
      for (let i = 0; i < node.children.length; i++) {
        let n = node.children[i];
        if (n.nodeType == Node.ELEMENT_NODE) {
          callback(n, i);
        }
      }
    }
    static colorAttr(node, attrName, defValue = null, autoColor = "black") {
      let v = globalXmlParser.attr(node, attrName);
      if (v) {
        if (v == "auto") {
          return autoColor;
        } else if (knownColors.includes(v)) {
          return v;
        }
        return `#${v}`;
      }
      let themeColor = globalXmlParser.attr(node, "themeColor");
      return themeColor ? `var(--docx-${themeColor}-color)` : defValue;
    }
    static sizeValue(node, type = LengthUsage.Dxa) {
      return convertLength(node.textContent, type);
    }
    static parseTextContent(node, defaultValue = 0) {
      let textContent = node.textContent;
      return textContent ? parseInt(textContent) : defaultValue;
    }
  };
  var values = class {
    static themeValue(c, attr) {
      let val = globalXmlParser.attr(c, attr);
      return val ? `var(--docx-${val}-font)` : null;
    }
    static valueOfSize(c, attr) {
      let type = LengthUsage.Dxa;
      switch (globalXmlParser.attr(c, "type")) {
        case "dxa":
          break;
        case "pct":
          type = LengthUsage.TablePercent;
          break;
        case "auto":
          return "auto";
      }
      return globalXmlParser.lengthAttr(c, attr, type);
    }
    static valueOfMargin(c) {
      return globalXmlParser.lengthAttr(c, "w");
    }
    static valueOfBorder(c) {
      let type = globalXmlParser.attr(c, "val");
      if (type == "nil") {
        return "none";
      }
      let color = xmlUtil.colorAttr(c, "color");
      let size = globalXmlParser.lengthAttr(c, "sz", LengthUsage.Border);
      return `${size} solid ${color == "auto" ? autos.borderColor : color}`;
    }
    static valueOfTblLayout(c) {
      let type = globalXmlParser.attr(c, "type");
      return type == "fixed" ? "fixed" : "auto";
    }
    static classNameOfCnfStyle(c) {
      const val = globalXmlParser.attr(c, "val");
      const classes = [
        "first-row",
        "last-row",
        "first-col",
        "last-col",
        "odd-col",
        "even-col",
        "odd-row",
        "even-row",
        "ne-cell",
        "nw-cell",
        "se-cell",
        "sw-cell"
      ];
      return classes.filter((_, i) => val[i] == "1").join(" ");
    }
    static valueOfJc(c) {
      let type = globalXmlParser.attr(c, "val");
      switch (type) {
        case "start":
        case "left":
          return "left";
        case "center":
          return "center";
        case "end":
        case "right":
          return "right";
        case "both":
          return "justify";
      }
      return type;
    }
    static valueOfVertAlign(c, asTagName = false) {
      let type = globalXmlParser.attr(c, "val");
      switch (type) {
        case "subscript":
          return "sub";
        case "superscript":
          return asTagName ? "sup" : "super";
      }
      return asTagName ? null : type;
    }
    static valueOfTextAlignment(c) {
      let type = globalXmlParser.attr(c, "val");
      switch (type) {
        case "auto":
        case "baseline":
          return "baseline";
        case "top":
          return "top";
        case "center":
          return "middle";
        case "bottom":
          return "bottom";
      }
      return type;
    }
    static addSize(a, b) {
      if (a == null)
        return b;
      if (b == null)
        return a;
      return `calc(${a} + ${b})`;
    }
    static classNameOftblLook(c) {
      const val = globalXmlParser.hexAttr(c, "val", 0);
      let className = "";
      if (globalXmlParser.boolAttr(c, "firstRow") || val & 32)
        className += " first-row";
      if (globalXmlParser.boolAttr(c, "lastRow") || val & 64)
        className += " last-row";
      if (globalXmlParser.boolAttr(c, "firstColumn") || val & 128)
        className += " first-col";
      if (globalXmlParser.boolAttr(c, "lastColumn") || val & 256)
        className += " last-col";
      if (globalXmlParser.boolAttr(c, "noHBand") || val & 512)
        className += " no-hband";
      if (globalXmlParser.boolAttr(c, "noVBand") || val & 1024)
        className += " no-vband";
      return className.trim();
    }
  };
  function parseTable(node, ctx) {
    const result = { type: DomType.Table, children: [] };
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "tblPr":
          parseTableProperties(c, result, ctx);
          break;
        case "tblGrid":
          result.columns = parseTableColumns(c, ctx);
          break;
        case "tr":
          result.children.push(parseTableRow(c, ctx));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Table Element\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseTableColumns(node, ctx) {
    const result = [];
    xmlUtil.foreach(node, (n) => {
      switch (n.localName) {
        case "gridCol":
          result.push({ width: globalXmlParser.lengthAttr(n, "w") });
          break;
        case "tblGridChange":
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Table Columns Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseTableProperties(elem, table, ctx) {
    table.cssStyle = {};
    table.cellStyle = {};
    ctx.parseDefaultProperties(elem, table.cssStyle, table.cellStyle, (c) => {
      switch (c.localName) {
        case "tblStyle":
          table.styleName = globalXmlParser.attr(c, "val");
          break;
        case "tblLook":
          table.className = values.classNameOftblLook(c);
          break;
        case "tblpPr":
          parseTablePosition(c, table, ctx);
          break;
        case "tblStyleColBandSize":
          table.colBandSize = globalXmlParser.intAttr(c, "val");
          break;
        case "tblStyleRowBandSize":
          table.rowBandSize = globalXmlParser.intAttr(c, "val");
          break;
        default:
          return false;
      }
      return true;
    });
    switch (table.cssStyle["text-align"]) {
      case "center":
        delete table.cssStyle["text-align"];
        table.cssStyle["margin-left"] = "auto";
        table.cssStyle["margin-right"] = "auto";
        break;
      case "right":
        delete table.cssStyle["text-align"];
        table.cssStyle["margin-left"] = "auto";
        break;
      default:
        if (ctx.options.debug) {
          console.warn(`DOCX:%c Unknown Table Align\uFF1A${table.cssStyle["text-align"]}`, "color:#f75607");
        }
    }
  }
  function parseTablePosition(node, table, ctx) {
    if (ctx.options.ignoreTableWrap) {
      return;
    }
    const topFromText = globalXmlParser.lengthAttr(node, "topFromText");
    const bottomFromText = globalXmlParser.lengthAttr(node, "bottomFromText");
    const rightFromText = globalXmlParser.lengthAttr(node, "rightFromText");
    const leftFromText = globalXmlParser.lengthAttr(node, "leftFromText");
    table.cssStyle["float"] = "left";
    table.cssStyle["margin-bottom"] = values.addSize(table.cssStyle["margin-bottom"], bottomFromText);
    table.cssStyle["margin-left"] = values.addSize(table.cssStyle["margin-left"], leftFromText);
    table.cssStyle["margin-right"] = values.addSize(table.cssStyle["margin-right"], rightFromText);
    table.cssStyle["margin-top"] = values.addSize(table.cssStyle["margin-top"], topFromText);
  }
  function parseTableRow(node, ctx) {
    const result = { type: DomType.Row, children: [] };
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "tc":
          result.children.push(parseTableCell(c, ctx));
          break;
        case "trPr":
          parseTableRowProperties(c, result, ctx);
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Table Row Element\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseTableRowProperties(elem, row, ctx) {
    row.cssStyle = ctx.parseDefaultProperties(elem, {}, null, (c) => {
      switch (c.localName) {
        case "cnfStyle":
          row.className = values.classNameOfCnfStyle(c);
          break;
        case "tblHeader":
          row.isHeader = globalXmlParser.boolAttr(c, "val", true);
          break;
        default:
          return false;
      }
      return true;
    });
  }
  function parseTableCell(node, ctx) {
    const result = { type: DomType.Cell, children: [] };
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "tbl":
          result.children.push(ctx.parseTable(c));
          break;
        case "p":
          result.children.push(ctx.parseParagraph(c));
          break;
        case "tcPr":
          parseTableCellProperties(c, result, ctx);
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Table Cell Element\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseTableCellProperties(elem, cell, ctx) {
    cell.cssStyle = ctx.parseDefaultProperties(elem, {}, null, (c) => {
      var _a;
      switch (c.localName) {
        case "gridSpan":
          cell.span = globalXmlParser.intAttr(c, "val", null);
          break;
        case "vMerge":
          cell.verticalMerge = (_a = globalXmlParser.attr(c, "val")) !== null && _a !== void 0 ? _a : "continue";
          break;
        case "cnfStyle":
          cell.className = values.classNameOfCnfStyle(c);
          break;
        default:
          return false;
      }
      return true;
    });
  }
  var LineSpacingRule;
  (function(LineSpacingRule2) {
    LineSpacingRule2["AtLeast"] = "atLeast";
    LineSpacingRule2["Auto"] = "auto";
    LineSpacingRule2["Exact"] = "exact";
  })(LineSpacingRule || (LineSpacingRule = {}));
  function parseSpacingBetweenLines(elem, xml) {
    let spacing = {
      lineRule: LineSpacingRule.Auto
    };
    for (const attr of xml.attrs(elem)) {
      switch (attr.localName) {
        case "after":
          spacing.after = xml.lengthAttr(elem, "after", void 0, "0pt");
          break;
        case "afterAutospacing":
          break;
        case "afterLines":
          break;
        case "before":
          spacing.before = xml.lengthAttr(elem, "before", void 0, "0pt");
          break;
        case "beforeAutospacing":
          break;
        case "beforeLines":
          break;
        case "line":
          spacing.line = xml.intAttr(elem, "line", 0);
          break;
        case "lineRule":
          spacing.lineRule = xml.attr(elem, "lineRule", LineSpacingRule.Auto);
          break;
      }
    }
    return spacing;
  }
  function parseLineSpacing(paragraphProperties, sectionProperties) {
    let { snapToGrid, spacing } = paragraphProperties;
    let lineSpacing = {};
    let originLine;
    if (spacing) {
      for (const key in spacing) {
        switch (key) {
          case "line":
            originLine = spacing === null || spacing === void 0 ? void 0 : spacing.line;
            break;
          case "after":
            lineSpacing["margin-bottom"] = spacing[key];
            break;
          case "before":
            lineSpacing["margin-top"] = spacing[key];
            break;
        }
      }
      switch (spacing === null || spacing === void 0 ? void 0 : spacing.lineRule) {
        case "auto":
          lineSpacing["line-height"] = originLine / 240;
          break;
        case "atLeast":
          lineSpacing["line-height"] = `calc(100% + ${originLine / 20}pt)`;
          break;
        case "exact":
          lineSpacing["line-height"] = `${originLine / 20}pt`;
          break;
        default:
          lineSpacing["line-height"] = originLine / 240;
          break;
      }
    }
    if (snapToGrid === false) {
      return lineSpacing;
    }
    if (sectionProperties === null || sectionProperties === void 0 ? void 0 : sectionProperties.docGrid) {
      let { docGrid } = sectionProperties;
      switch (docGrid.type) {
        case DocGridType.Lines:
        case DocGridType.LinesAndChars:
        case DocGridType.SnapToChars:
          if (typeof lineSpacing["line-height"] === "number") {
            lineSpacing["line-height"] = `${lineSpacing["line-height"] * docGrid.linePitch / 20}pt`;
          } else if ((spacing === null || spacing === void 0 ? void 0 : spacing.lineRule) === LineSpacingRule.AtLeast) {
            lineSpacing["line-height"] = `max(${originLine / 20}pt, ${docGrid.linePitch / 20}pt)`;
          }
          break;
        case DocGridType.Default:
          return lineSpacing;
        default:
          console.warn(`DOCX:%c Unknown DocGrid Type\uFF1A${docGrid.type}`, "color:#f75607");
      }
    }
    return lineSpacing;
  }
  function parseRunProperties$1(elem, xml) {
    let result = {};
    for (let el of xml.elements(elem)) {
      parseRunProperty(el, result, xml);
    }
    return result;
  }
  function parseRunProperty(elem, props, xml) {
    return parseCommonProperty(elem, props, xml);
  }
  function parseParagraphProperties$1(elem, xml) {
    let properties = {};
    for (let el of xml.elements(elem)) {
      parseParagraphProperty(el, properties, xml);
    }
    return properties;
  }
  function parseParagraphProperty(elem, props, xml) {
    if (elem.namespaceURI != ns$1.wordml) {
      return false;
    }
    if (parseCommonProperty(elem, props, xml))
      return true;
    switch (elem.localName) {
      case "adjustRightInd":
        break;
      case "autoSpaceDE":
        break;
      case "autoSpaceDN":
        break;
      case "contextualSpacing":
        break;
      case "divId":
        break;
      case "keepLines":
        props.keepLines = xml.boolAttr(elem, "val", true);
        break;
      case "keepNext":
        props.keepNext = xml.boolAttr(elem, "val", true);
        break;
      case "numPr":
        props.numbering = parseNumbering$1(elem, xml);
        break;
      case "outlineLvl":
        props.outlineLevel = xml.intAttr(elem, "val");
        break;
      case "pageBreakBefore":
        props.pageBreakBefore = xml.boolAttr(elem, "val", true);
        break;
      case "rPr":
        props.runProperties = parseRunProperties$1(elem, xml);
        break;
      case "sectPr":
        props.sectionProperties = parseSectionProperties(elem, xml);
        break;
      case "snapToGrid":
        props.snapToGrid = xml.boolAttr(elem, "val", true);
        break;
      case "spacing":
        props.spacing = parseSpacingBetweenLines(elem, xml);
        return false;
      case "tabs":
        props.tabs = parseTabs(elem, xml);
        break;
      case "textAlignment":
        props.textAlignment = xml.attr(elem, "val");
        return false;
      default:
        return false;
    }
    return true;
  }
  function parseTabs(elem, xml) {
    return xml.elements(elem, "tab").map((e) => ({
      position: xml.numberAttr(e, "pos"),
      leader: xml.attr(e, "leader"),
      style: xml.attr(e, "val")
    }));
  }
  function parseNumbering$1(elem, xml) {
    let result = {};
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "numId":
          result.id = xml.attr(e, "val");
          break;
        case "ilvl":
          result.level = xml.intAttr(e, "val");
          break;
      }
    }
    return result;
  }
  function parseStylesFile(xstyles, ctx) {
    const result = [];
    xmlUtil.foreach(xstyles, (n) => {
      switch (n.localName) {
        case "style":
          result.push(parseStyle(n, ctx));
          break;
        case "docDefaults":
          result.push(parseDefaultStyles(n, ctx));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Style File\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseDefaultStyles(node, ctx) {
    const result = {
      basedOn: null,
      id: null,
      name: null,
      rulesets: [],
      type: null
    };
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "rPrDefault": {
          const rPr = globalXmlParser.element(c, "rPr");
          if (rPr) {
            result.rulesets.push({
              target: "span",
              declarations: ctx.parseDefaultProperties(rPr, {})
            });
          }
          break;
        }
        case "pPrDefault": {
          const pPr = globalXmlParser.element(c, "pPr");
          if (pPr) {
            const paragraphProperties = parseParagraphProperties$1(pPr, globalXmlParser);
            const ruleset = {
              target: "p",
              declarations: ctx.parseDefaultProperties(pPr, {})
            };
            Object.assign(ruleset.declarations, parseLineSpacing(paragraphProperties));
            result.rulesets.push(ruleset);
          }
          break;
        }
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Default Style\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseStyle(node, ctx) {
    const result = {
      basedOn: null,
      id: null,
      name: null,
      rulesets: [],
      type: null
    };
    for (const attr of globalXmlParser.attrs(node)) {
      switch (attr.localName) {
        case "customStyle":
          result.customStyle = globalXmlParser.boolAttr(node, "customStyle", false);
          break;
        case "default":
          result.isDefault = globalXmlParser.boolAttr(node, "default", false);
          break;
        case "styleId":
          result.id = globalXmlParser.attr(node, "styleId");
          break;
        case "type":
          result.type = globalXmlParser.attr(node, "type");
          const typeToLabelMap = {
            "paragraph": "p",
            "table": "table",
            "character": "span",
            "numbering": "p"
          };
          if (typeToLabelMap.hasOwnProperty(result.type)) {
            result.label = typeToLabelMap[result.type];
          } else {
            if (ctx.options && ctx.options.debug) {
              console.warn(`DOCX:%c Unknown Style Type\uFF1A${result.type}`, "color:#f75607");
            }
          }
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Style Property\uFF1A${attr.localName}`, "color:#f75607");
          }
      }
    }
    xmlUtil.foreach(node, (n) => {
      switch (n.localName) {
        case "aliases":
          result.aliases = globalXmlParser.attr(n, "val").split(",");
          break;
        case "autoRedefine":
          result.autoRedefine = true;
          break;
        case "basedOn":
          result.basedOn = globalXmlParser.attr(n, "val");
          break;
        case "hidden":
          result.hidden = true;
          break;
        case "link":
          result.linked = globalXmlParser.attr(n, "val");
          break;
        case "locked":
          result.locked = true;
          break;
        case "name":
          result.name = globalXmlParser.attr(n, "val");
          break;
        case "next":
          result.next = globalXmlParser.attr(n, "val");
          break;
        case "personal":
          result.personal = globalXmlParser.boolAttr(n, "val");
          break;
        case "personalCompose":
          result.personalCompose = globalXmlParser.boolAttr(n, "val");
          break;
        case "personalReply":
          result.personalReply = globalXmlParser.boolAttr(n, "val");
          break;
        case "pPr": {
          result.paragraphProps = parseParagraphProperties$1(n, globalXmlParser);
          const ruleset = {
            target: "p",
            declarations: ctx.parseDefaultProperties(n, {})
          };
          Object.assign(ruleset.declarations, parseLineSpacing(result.paragraphProps));
          result.rulesets.push(ruleset);
          break;
        }
        case "qFormat":
          result.primaryStyle = true;
          break;
        case "rPr":
          result.rulesets.push({
            target: "span",
            declarations: ctx.parseDefaultProperties(n, {})
          });
          result.runProps = parseRunProperties$1(n, globalXmlParser);
          break;
        case "rsid":
          result.rsid = globalXmlParser.hexAttr(n, "val");
          break;
        case "semiHidden":
          result.semiHidden = true;
          break;
        case "tblPr":
          result.rulesets.push({
            target: "td",
            declarations: ctx.parseDefaultProperties(n, {})
          });
          break;
        case "trPr":
          result.rulesets.push({
            target: "tr",
            declarations: ctx.parseDefaultProperties(n, {})
          });
          break;
        case "tcPr":
          result.rulesets.push({
            target: "td",
            declarations: ctx.parseDefaultProperties(n, {})
          });
          break;
        case "tblStylePr":
          for (const s of parseTableStyle(n, ctx)) {
            result.rulesets.push(s);
          }
          break;
        case "uiPriority":
          result.uiPriority = globalXmlParser.intAttr(n, "val", Infinity);
          break;
        case "unhideWhenUsed":
          result.unhideWhenUsed = true;
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Style element\uFF1A${n.localName}`, "color:blue");
          }
      }
    });
    return result;
  }
  function parseTableStyle(node, ctx) {
    const result = [];
    const type = globalXmlParser.attr(node, "type");
    let selector = "";
    let modifier = "";
    switch (type) {
      case "firstRow":
        modifier = ".first-row";
        selector = "tr.first-row td";
        break;
      case "lastRow":
        modifier = ".last-row";
        selector = "tr.last-row td";
        break;
      case "firstCol":
        modifier = ".first-col";
        selector = "td.first-col";
        break;
      case "lastCol":
        modifier = ".last-col";
        selector = "td.last-col";
        break;
      case "band1Vert":
        modifier = ":not(.no-vband)";
        selector = "td.odd-col";
        break;
      case "band2Vert":
        modifier = ":not(.no-vband)";
        selector = "td.even-col";
        break;
      case "band1Horz":
        modifier = ":not(.no-hband)";
        selector = "tr.odd-row";
        break;
      case "band2Horz":
        modifier = ":not(.no-hband)";
        selector = "tr.even-row";
        break;
      default:
        return [];
    }
    xmlUtil.foreach(node, (n) => {
      switch (n.localName) {
        case "pPr": {
          const paragraphProperties = parseParagraphProperties$1(n, globalXmlParser);
          const ruleset = {
            target: `${selector} p`,
            modifier,
            declarations: ctx.parseDefaultProperties(n, {})
          };
          Object.assign(ruleset.declarations, parseLineSpacing(paragraphProperties));
          result.push(ruleset);
          break;
        }
        case "rPr":
          result.push({
            target: `${selector} span`,
            modifier,
            declarations: ctx.parseDefaultProperties(n, {})
          });
          break;
        case "tblPr":
        case "tcPr":
          result.push({
            target: selector,
            modifier,
            declarations: ctx.parseDefaultProperties(n, {})
          });
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Table Style\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseNumberingFile(xnums, ctx) {
    const result = [];
    const mapping = {};
    const bullets = [];
    xmlUtil.foreach(xnums, (n) => {
      switch (n.localName) {
        case "abstractNum":
          parseAbstractNumbering$1(n, bullets, ctx).forEach((x) => result.push(x));
          break;
        case "numPicBullet":
          bullets.push(parseNumberingPicBullet(n));
          break;
        case "num": {
          const numId = globalXmlParser.attr(n, "numId");
          const abstractNumId = globalXmlParser.elementAttr(n, "abstractNumId", "val");
          mapping[abstractNumId] = numId;
          break;
        }
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Numbering File\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    result.forEach((x) => x.id = mapping[x.id]);
    return result;
  }
  function parseNumberingPicBullet(elem) {
    const pict = globalXmlParser.element(elem, "pict");
    const shape = pict && globalXmlParser.element(pict, "shape");
    const imagedata = shape && globalXmlParser.element(shape, "imagedata");
    return imagedata ? {
      id: globalXmlParser.intAttr(elem, "numPicBulletId"),
      src: globalXmlParser.attr(imagedata, "id"),
      style: globalXmlParser.attr(shape, "style")
    } : null;
  }
  function parseAbstractNumbering$1(node, bullets, ctx) {
    const result = [];
    const id = globalXmlParser.attr(node, "abstractNumId");
    xmlUtil.foreach(node, (n) => {
      switch (n.localName) {
        case "lvl":
          result.push(parseNumberingLevel$1(id, n, bullets, ctx));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Abstract Numbering\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  function parseNumberingLevel$1(id, node, bullets, ctx) {
    const result = {
      id,
      level: globalXmlParser.intAttr(node, "ilvl"),
      start: 1,
      pStyleName: void 0,
      pStyle: {},
      rStyle: {},
      suff: "tab"
    };
    xmlUtil.foreach(node, (n) => {
      switch (n.localName) {
        case "start":
          result.start = globalXmlParser.intAttr(n, "val");
          break;
        case "pPr":
          ctx.parseDefaultProperties(n, result.pStyle);
          break;
        case "rPr":
          ctx.parseDefaultProperties(n, result.rStyle);
          break;
        case "lvlPicBulletId": {
          const picId = globalXmlParser.intAttr(n, "val");
          result.bullet = bullets.find((x) => (x === null || x === void 0 ? void 0 : x.id) == picId);
          break;
        }
        case "lvlText":
          result.levelText = globalXmlParser.attr(n, "val");
          break;
        case "pStyle":
          result.pStyleName = globalXmlParser.attr(n, "val");
          break;
        case "numFmt":
          result.format = globalXmlParser.attr(n, "val");
          break;
        case "suff":
          result.suff = globalXmlParser.attr(n, "val");
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Numbering Level\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    });
    return result;
  }
  var VmlElement = class extends OpenXmlElementBase {
    constructor() {
      super(...arguments);
      this.type = DomType.VmlElement;
      this.attrs = {};
    }
  };
  function parseVmlElement(elem, parser) {
    var result = new VmlElement();
    switch (elem.localName) {
      case "rect":
        result.tagName = "rect";
        Object.assign(result.attrs, { width: "100%", height: "100%" });
        break;
      case "oval":
        result.tagName = "ellipse";
        Object.assign(result.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
        break;
      case "line":
        result.tagName = "line";
        break;
      case "shape":
        result.tagName = "g";
        break;
      case "textbox":
        result.tagName = "foreignObject";
        Object.assign(result.attrs, { width: "100%", height: "100%" });
        break;
      default:
        return null;
    }
    for (const at of globalXmlParser.attrs(elem)) {
      switch (at.localName) {
        case "style":
          result.cssStyleText = at.value;
          break;
        case "fillcolor":
          result.attrs.fill = at.value;
          break;
        case "from":
          const [x1, y1] = parsePoint(at.value);
          Object.assign(result.attrs, { x1, y1 });
          break;
        case "to":
          const [x2, y2] = parsePoint(at.value);
          Object.assign(result.attrs, { x2, y2 });
          break;
      }
    }
    for (const el of globalXmlParser.elements(elem)) {
      switch (el.localName) {
        case "stroke":
          Object.assign(result.attrs, parseStroke(el));
          break;
        case "fill":
          Object.assign(result.attrs, parseFill());
          break;
        case "imagedata":
          result.tagName = "image";
          Object.assign(result.attrs, { width: "100%", height: "100%" });
          result.imageHref = {
            id: globalXmlParser.attr(el, "id"),
            title: globalXmlParser.attr(el, "title")
          };
          break;
        case "txbxContent":
          result.children.push(...parser.parseBodyElements(el));
          break;
        default:
          const child = parseVmlElement(el, parser);
          child && result.children.push(child);
          break;
      }
    }
    return result;
  }
  function parseStroke(el) {
    var _a;
    return {
      "stroke": globalXmlParser.attr(el, "color"),
      "stroke-width": (_a = globalXmlParser.lengthAttr(el, "weight", LengthUsage.Emu)) !== null && _a !== void 0 ? _a : "1px"
    };
  }
  function parseFill(el) {
    return {};
  }
  function parsePoint(val) {
    return val.split(",");
  }
  function parseGraphic(elem, options, callbacks) {
    let graphicData = globalXmlParser.element(elem, "graphicData");
    for (let n of globalXmlParser.elements(graphicData)) {
      switch (n.localName) {
        case "wsp":
          return parseShape(n, options, callbacks);
        case "pic":
          return parsePicture(n, options);
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Graphic Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
    return null;
  }
  function parseShape(node, options, callbacks) {
    let shape = {
      type: DomType.Shape,
      cssStyle: {},
      children: [],
      props: {
        is_transform: false,
        transform: {}
      }
    };
    for (let n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "spPr":
          parseShapeProperties(n, shape, options);
          break;
        case "txbx":
        case "linkedTxbx": {
          let txbxContent = globalXmlParser.element(n, "txbxContent");
          if (txbxContent) {
            shape.children.push(...callbacks.parseBodyElements(txbxContent));
          }
          break;
        }
        case "cNvPr":
        case "cNvSpPr":
        case "cNvCnPr":
        case "style":
        case "bodyPr":
          parseTextBodyProperties(n, shape);
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Shape Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
    return shape;
  }
  function parseTextBodyProperties(node, target) {
    let autoFit = "none";
    for (const child of globalXmlParser.elements(node)) {
      if (child.localName === "spAutoFit") {
        autoFit = "shape";
      } else if (child.localName === "normAutofit") {
        autoFit = "normal";
      }
    }
    target.props.textbox = {
      paddingLeft: globalXmlParser.lengthAttr(node, "lIns", LengthUsage.Emu),
      paddingTop: globalXmlParser.lengthAttr(node, "tIns", LengthUsage.Emu),
      paddingRight: globalXmlParser.lengthAttr(node, "rIns", LengthUsage.Emu),
      paddingBottom: globalXmlParser.lengthAttr(node, "bIns", LengthUsage.Emu),
      verticalAnchor: globalXmlParser.attr(node, "anchor"),
      autoFit
    };
  }
  function parseShapeProperties(node, target, options) {
    for (let n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "xfrm":
          let flipH = globalXmlParser.boolAttr(n, "flipH");
          if (flipH) {
            target.props.is_transform = true;
            target.props.transform.scaleX = -1;
          }
          let flipV = globalXmlParser.boolAttr(n, "flipV");
          if (flipV) {
            target.props.is_transform = true;
            target.props.transform.scaleY = -1;
          }
          let degree = globalXmlParser.numberAttr(n, "rot", LengthUsage.degree, 0);
          if (degree) {
            target.props.is_transform = true;
            target.props.transform.rotate = degree;
          }
          parseTransform2D(n, target, options);
          break;
        case "prstGeom":
          target.props.preset = globalXmlParser.attr(n, "prst");
          break;
        case "custGeom":
          target.props.preset = "custom";
          break;
        case "noFill":
          target.props.fill = "none";
          break;
        case "solidFill":
          target.props.fill = parseSolidFillColor(n);
          break;
        case "ln":
          target.props.line = parseShapeLine(n);
          break;
        case "gradFill":
        case "blipFill":
        case "pattFill":
        case "grpFill":
        case "effectLst":
        case "effectDag":
        case "scene3d":
        case "sp3d":
        case "extLst":
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Shape Property\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
  }
  function parseSolidFillColor(node) {
    let srgbClr = globalXmlParser.element(node, "srgbClr");
    return srgbClr ? `#${globalXmlParser.attr(srgbClr, "val")}` : null;
  }
  function parseShapeLine(node) {
    let result = {};
    let width = globalXmlParser.intAttr(node, "w", 0);
    if (width) {
      result.width = String(convertLength(width, LengthUsage.Emu));
    }
    let fill = globalXmlParser.element(node, "solidFill");
    if (fill) {
      result.color = parseSolidFillColor(fill);
    }
    return result;
  }
  function parsePicture(elem, options) {
    let result = {
      type: DomType.Image,
      src: "",
      cssStyle: {},
      props: {
        is_clip: false,
        clip: {},
        is_transform: false,
        transform: {}
      }
    };
    for (let n of globalXmlParser.elements(elem)) {
      switch (n.localName) {
        case "nvPicPr":
          break;
        case "blipFill":
          parseBlipFill(n, result, options);
          break;
        case "spPr":
          parseShapeProperties(n, result, options);
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Picture Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
    return result;
  }
  function parseTransform2D(node, target, options) {
    for (let n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "ext":
          let { transform } = target.props;
          let origin_width = globalXmlParser.intAttr(n, "cx", 0);
          let origin_height = globalXmlParser.intAttr(n, "cy", 0);
          let width;
          let height;
          if (transform === null || transform === void 0 ? void 0 : transform.rotate) {
            let angel = Math.PI * transform.rotate / 180;
            width = Math.abs(origin_width * Math.cos(angel) + origin_height * Math.sin(angel));
            height = Math.abs(origin_width * Math.sin(angel) + origin_height * Math.cos(angel));
          } else {
            width = origin_width;
            height = origin_height;
          }
          target.props.width = convertLength(width, LengthUsage.Px, false);
          target.props.height = convertLength(height, LengthUsage.Px, false);
          target.props.originalWidth = convertLength(origin_width, LengthUsage.Emu, true);
          target.props.originalHeight = convertLength(origin_height, LengthUsage.Emu, true);
          target.cssStyle["width"] = convertLength(width, LengthUsage.Emu, true);
          target.cssStyle["height"] = convertLength(height, LengthUsage.Emu, true);
          break;
        case "off":
          target.cssStyle["left"] = globalXmlParser.lengthAttr(n, "x", LengthUsage.Emu);
          target.cssStyle["top"] = globalXmlParser.lengthAttr(n, "y", LengthUsage.Emu);
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Transform2D Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
  }
  function parseBlipFill(node, target, options) {
    for (let n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "blip":
          target.src = globalXmlParser.attr(n, "embed");
          parseBlip(n, target, options);
          break;
        case "srcRect":
          let left = globalXmlParser.numberAttr(n, "l", LengthUsage.RelativeRect, 0);
          let right = globalXmlParser.numberAttr(n, "r", LengthUsage.RelativeRect, 0);
          let top = globalXmlParser.numberAttr(n, "t", LengthUsage.RelativeRect, 0);
          let bottom = globalXmlParser.numberAttr(n, "b", LengthUsage.RelativeRect, 0);
          target.props.is_clip = [left, right, top, bottom].some((item) => item !== 0);
          target.props.clip.type = "inset";
          target.props.clip.path = { top, right, bottom, left };
          break;
        case "stretch":
        case "tile":
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Blip Fill Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
  }
  function parseBlip(node, target, options) {
    for (let n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "alphaBiLevel":
        case "alphaCeiling":
        case "alphaFloor":
        case "alphaInv":
        case "alphaMod":
          break;
        case "alphaModFix":
          let opacity = globalXmlParser.lengthAttr(n, "amt", LengthUsage.Opacity);
          target.cssStyle["opacity"] = opacity;
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Blip Element\uFF1A${n.localName}`, "color:#f75607");
          }
          break;
      }
    }
  }
  var supportedNamespaceURIs = [
    "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
  ];
  function normalizeWrapText(wrapText, posX) {
    switch (wrapText) {
      case "left":
      case "right":
        return wrapText;
      case "bothSides":
      case "largest":
      default:
        return (posX === null || posX === void 0 ? void 0 : posX.align) === "right" ? "left" : "right";
    }
  }
  function parseVmlPicture(elem, ctx) {
    const result = { type: DomType.VmlPicture, children: [] };
    for (const el of globalXmlParser.elements(elem)) {
      const child = parseVmlElement(el, ctx);
      child && result.children.push(child);
    }
    return result;
  }
  function checkAlternateContent(elem) {
    var _a;
    if (elem.localName != "AlternateContent") {
      return elem;
    }
    const choice = globalXmlParser.element(elem, "Choice");
    if (choice) {
      const requires = globalXmlParser.attr(choice, "Requires");
      const namespaceURI = elem.lookupNamespaceURI(requires);
      if (supportedNamespaceURIs.includes(namespaceURI)) {
        return choice.firstElementChild;
      }
    }
    return (_a = globalXmlParser.element(elem, "Fallback")) === null || _a === void 0 ? void 0 : _a.firstElementChild;
  }
  function parseDrawing(node, ctx) {
    for (const n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "inline":
        case "anchor":
          return parseDrawingWrapper(n, ctx);
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Drawing Element\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
  }
  function parseDrawingWrapper(node, ctx) {
    var _a, _b;
    const layoutInCell = globalXmlParser.boolAttr(node, "layoutInCell");
    const locked = globalXmlParser.boolAttr(node, "locked");
    const behindDoc = globalXmlParser.boolAttr(node, "behindDoc");
    const allowOverlap = globalXmlParser.boolAttr(node, "allowOverlap");
    const simplePos = globalXmlParser.boolAttr(node, "simplePos");
    const relativeHeight = globalXmlParser.intAttr(node, "relativeHeight", 1);
    const distance = {
      left: globalXmlParser.lengthAttr(node, "distL", LengthUsage.Emu),
      right: globalXmlParser.lengthAttr(node, "distR", LengthUsage.Emu),
      top: globalXmlParser.lengthAttr(node, "distT", LengthUsage.Emu),
      bottom: globalXmlParser.lengthAttr(node, "distB", LengthUsage.Emu),
      distL: globalXmlParser.intAttr(node, "distL", 0),
      distR: globalXmlParser.intAttr(node, "distR", 0),
      distT: globalXmlParser.intAttr(node, "distT", 0),
      distB: globalXmlParser.intAttr(node, "distB", 0)
    };
    const result = {
      type: DomType.Drawing,
      children: [],
      cssStyle: {},
      props: {
        localName: node.localName,
        wrapType: null,
        layoutInCell,
        locked,
        behindDoc,
        allowOverlap,
        simplePos,
        relativeHeight,
        distance,
        extent: {}
      }
    };
    const posX = { relative: "page", align: "left", offset: "0pt", origin: 0 };
    const posY = { relative: "page", align: "top", offset: "0pt", origin: 0 };
    for (const n of globalXmlParser.elements(node)) {
      switch (n.localName) {
        case "simplePos":
          if (simplePos) {
            posX.offset = globalXmlParser.lengthAttr(n, "x", LengthUsage.Emu);
            posY.offset = globalXmlParser.lengthAttr(n, "y", LengthUsage.Emu);
            posX.origin = globalXmlParser.intAttr(n, "x", 0);
            posY.origin = globalXmlParser.intAttr(n, "y", 0);
          }
          break;
        case "positionH":
          if (!simplePos) {
            const alignNode = globalXmlParser.element(n, "align");
            const offsetNode = globalXmlParser.element(n, "posOffset");
            posX.relative = (_a = globalXmlParser.attr(n, "relativeFrom")) !== null && _a !== void 0 ? _a : posX.relative;
            if (alignNode) {
              posX.align = alignNode.textContent;
            }
            if (offsetNode) {
              posX.offset = xmlUtil.sizeValue(offsetNode, LengthUsage.Emu);
              posX.origin = xmlUtil.parseTextContent(offsetNode);
            }
            result.props.posX = posX;
          }
          break;
        case "positionV":
          if (!simplePos) {
            const alignNode = globalXmlParser.element(n, "align");
            const offsetNode = globalXmlParser.element(n, "posOffset");
            posY.relative = (_b = globalXmlParser.attr(n, "relativeFrom")) !== null && _b !== void 0 ? _b : posY.relative;
            if (alignNode) {
              posY.align = alignNode.textContent;
            }
            if (offsetNode) {
              posY.offset = xmlUtil.sizeValue(offsetNode, LengthUsage.Emu);
              posY.origin = xmlUtil.parseTextContent(offsetNode);
            }
            result.props.posY = posY;
          }
          break;
        case "extent":
          result.props.extent = {
            width: globalXmlParser.lengthAttr(n, "cx", LengthUsage.Emu),
            height: globalXmlParser.lengthAttr(n, "cy", LengthUsage.Emu),
            origin_width: globalXmlParser.intAttr(n, "cx", 0),
            origin_height: globalXmlParser.intAttr(n, "cy", 0)
          };
          break;
        case "effectExtent":
          result.props.effectExtent = {
            top: globalXmlParser.lengthAttr(n, "t", LengthUsage.Emu),
            bottom: globalXmlParser.lengthAttr(n, "b", LengthUsage.Emu),
            left: globalXmlParser.lengthAttr(n, "l", LengthUsage.Emu),
            right: globalXmlParser.lengthAttr(n, "r", LengthUsage.Emu),
            origin_top: globalXmlParser.intAttr(n, "t", 0),
            origin_bottom: globalXmlParser.intAttr(n, "b", 0),
            origin_left: globalXmlParser.intAttr(n, "l", 0),
            origin_right: globalXmlParser.intAttr(n, "r", 0)
          };
          break;
        case "graphic": {
          const g = parseGraphic(n, ctx.options, ctx);
          if (g) {
            result.children.push(g);
          }
          break;
        }
        case "wrapTopAndBottom":
          result.props.wrapType = WrapType.TopAndBottom;
          break;
        case "wrapNone":
          result.props.wrapType = WrapType.None;
          break;
        case "wrapSquare":
          result.props.wrapType = WrapType.Square;
          result.props.wrapText = globalXmlParser.attr(n, "wrapText");
          break;
        case "wrapThrough":
        case "wrapTight":
          result.props.wrapType = WrapType.Tight;
          result.props.wrapText = globalXmlParser.attr(n, "wrapText");
          parsePolygon(globalXmlParser.element(n, "wrapPolygon"), result);
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Drawing Property\uFF1A${n.localName}`, "color:#f75607");
          }
      }
    }
    const { extent, effectExtent } = result.props;
    const real_width = extent.origin_width + effectExtent.origin_left + effectExtent.origin_right;
    const real_height = extent.origin_height + effectExtent.origin_top + effectExtent.origin_bottom;
    result.cssStyle["width"] = convertLength(real_width, LengthUsage.Emu);
    result.cssStyle["height"] = convertLength(real_height, LengthUsage.Emu);
    if (node.localName === "inline") {
      result.props.wrapType = WrapType.Inline;
    }
    if (node.localName === "anchor") {
      result.cssStyle["position"] = "relative";
      if (behindDoc) {
        result.cssStyle["z-index"] = -1;
      } else {
        result.cssStyle["z-index"] = relativeHeight;
      }
      if (ctx.options.ignoreImageWrap) {
        result.props.wrapType = WrapType.Inline;
      }
      const { wrapType } = result.props;
      const wrapText = normalizeWrapText(result.props.wrapText, posX);
      switch (wrapType) {
        case WrapType.TopAndBottom:
          result.cssStyle["float"] = "left";
          result.cssStyle["width"] = "100%";
          result.cssStyle["text-align"] = posX.align;
          result.cssStyle["transform"] = `translate(${posX.offset},0)`;
          result.cssStyle["margin-top"] = `calc(${posY.offset} - ${distance.top})`;
          result.cssStyle["shape-outside"] = `inset(calc(${posY.offset} - ${distance.top}) 0 0 0)`;
          result.cssStyle["box-sizing"] = "content-box";
          result.cssStyle["padding-top"] = distance.top;
          result.cssStyle["padding-bottom"] = distance.bottom;
          break;
        case WrapType.None:
          result.cssStyle["position"] = "absolute";
          switch (posX.align) {
            case "left":
            case "right":
              result.cssStyle[posX.align] = posX.offset;
              break;
            case "center":
              result.cssStyle["left"] = "50%";
              result.cssStyle["transform"] = "translateX(-50%)";
          }
          result.cssStyle["top"] = posY.offset;
          break;
        case WrapType.Square:
          result.cssStyle["float"] = wrapText === "left" ? "right" : "left";
          result.cssStyle["margin-top"] = `calc(${posY.offset} - ${distance.top})`;
          result.cssStyle["shape-outside"] = `inset(calc(${posY.offset} - ${distance.top}) 0 0 0)`;
          switch (wrapText) {
            case "left":
              switch (posX.align) {
                case "left":
                  result.cssStyle["margin-right"] = `calc(100% - ${extent.width} - ${posX.offset} - ${distance.right})`;
                  break;
                case "right":
                  result.cssStyle["margin-right"] = `calc(${posX.offset} - ${distance.right})`;
                  break;
                case "center":
                  result.cssStyle["margin-right"] = `calc( 50% - (${extent.width} - ${posX.offset}) / 2 - ${distance.right} )`;
              }
              break;
            case "right":
              switch (posX.align) {
                case "left":
                  result.cssStyle["margin-left"] = `calc(${posX.offset} - ${distance.left})`;
                  break;
                case "right":
                  result.cssStyle["margin-left"] = `calc(100% - ${extent.width} - ${posX.offset} - ${distance.left})`;
                  result.cssStyle["margin-right"] = `calc(${posX.offset} - ${distance.right})`;
                  break;
                case "center":
                  result.cssStyle["margin-left"] = `calc( 50% - (${extent.width} - ${posX.offset} ) / 2 - ${distance.left} )`;
              }
              break;
          }
          result.cssStyle["box-sizing"] = "content-box";
          result.cssStyle["padding-top"] = distance.top;
          result.cssStyle["padding-bottom"] = distance.bottom;
          result.cssStyle["padding-left"] = distance.left;
          result.cssStyle["padding-right"] = distance.right;
          break;
        case WrapType.Through:
        case WrapType.Tight:
          result.cssStyle["float"] = wrapText === "left" ? "right" : "left";
          const { polygonData } = result.props;
          result.cssStyle["shape-outside"] = `polygon(${polygonData})`;
          result.cssStyle["margin-top"] = posY.offset;
          switch (wrapText) {
            case "left":
              switch (posX.align) {
                case "left":
                  result.cssStyle["margin-right"] = `calc(100% - ${extent.width} - ${posX.offset})`;
                  break;
                case "right":
                  result.cssStyle["margin-right"] = posX.offset;
                  break;
                case "center":
                  result.cssStyle["margin-right"] = `calc( 50% - (${extent.width} - ${posX.offset}) / 2 )`;
              }
              break;
            case "right":
              switch (posX.align) {
                case "left":
                  result.cssStyle["margin-left"] = posX.offset;
                  break;
                case "right":
                  result.cssStyle["margin-left"] = `calc(100% - ${extent.width} - ${posX.offset})`;
                  break;
                case "center":
                  result.cssStyle["margin-left"] = `calc( 50% - (${extent.width} - ${posX.offset} ) / 2 )`;
              }
              break;
          }
          break;
      }
    }
    return result;
  }
  function parsePolygon(node, target) {
    const polygon = [];
    const { distance, extent, posX, posY } = target.props;
    const wrapText = normalizeWrapText(target.props.wrapText, posX);
    xmlUtil.foreach(node, (elem) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      const origin_x = globalXmlParser.intAttr(elem, "x", 0);
      const origin_y = globalXmlParser.intAttr(elem, "y", 0);
      let real_x, real_y;
      let point_x, point_y;
      let revise_x, revise_y;
      switch (wrapText) {
        case "left":
          switch (posX.align) {
            case "left":
              real_x = origin_x * extent.origin_width / 21600 - distance.distL;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              revise_x = (_a = convertLength(real_x, LengthUsage.Emu)) !== null && _a !== void 0 ? _a : "0pt";
              revise_y = (_b = convertLength(real_y, LengthUsage.Emu)) !== null && _b !== void 0 ? _b : "0pt";
              break;
            case "right":
              real_x = origin_x * extent.origin_width / 21600 + posX.origin - distance.distL;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              revise_x = (_c = convertLength(real_x, LengthUsage.Emu)) !== null && _c !== void 0 ? _c : "0pt";
              revise_y = (_d = convertLength(real_y, LengthUsage.Emu)) !== null && _d !== void 0 ? _d : "0pt";
              break;
            case "center":
              real_x = origin_x * extent.origin_width / 21600 + posX.origin - distance.distL;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              revise_x = (_e = convertLength(real_x, LengthUsage.Emu)) !== null && _e !== void 0 ? _e : "0pt";
              revise_y = (_f = convertLength(real_y, LengthUsage.Emu)) !== null && _f !== void 0 ? _f : "0pt";
          }
          break;
        case "right":
          switch (posX.align) {
            case "left":
              real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              revise_x = (_g = convertLength(real_x, LengthUsage.Emu)) !== null && _g !== void 0 ? _g : "0pt";
              revise_y = (_h = convertLength(real_y, LengthUsage.Emu)) !== null && _h !== void 0 ? _h : "0pt";
              break;
            case "right":
              real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              point_x = (_j = convertLength(real_x, LengthUsage.Emu)) !== null && _j !== void 0 ? _j : "0pt";
              point_y = (_k = convertLength(real_y, LengthUsage.Emu)) !== null && _k !== void 0 ? _k : "0pt";
              revise_x = `calc(100% + ${point_x} - ${extent.width})`;
              revise_y = point_y;
              break;
            case "center":
              real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
              real_y = origin_y * extent.origin_height / 21600 + posY.origin;
              point_x = (_l = convertLength(real_x, LengthUsage.Emu)) !== null && _l !== void 0 ? _l : "0pt";
              point_y = (_m = convertLength(real_y, LengthUsage.Emu)) !== null && _m !== void 0 ? _m : "0pt";
              revise_x = `calc(50% + ${point_x})`;
              revise_y = point_y;
          }
          break;
      }
      const point = `${revise_x} ${revise_y}`;
      polygon.push(point);
    });
    target.props.polygonData = polygon.join(",");
  }
  var mmlTagMap = {
    "oMath": DomType.MmlMath,
    "oMathPara": DomType.MmlMathParagraph,
    "f": DomType.MmlFraction,
    "func": DomType.MmlFunction,
    "fName": DomType.MmlFunctionName,
    "num": DomType.MmlNumerator,
    "den": DomType.MmlDenominator,
    "rad": DomType.MmlRadical,
    "deg": DomType.MmlDegree,
    "e": DomType.MmlBase,
    "sSup": DomType.MmlSuperscript,
    "sSub": DomType.MmlSubscript,
    "sPre": DomType.MmlPreSubSuper,
    "sup": DomType.MmlSuperArgument,
    "sub": DomType.MmlSubArgument,
    "d": DomType.MmlDelimiter,
    "nary": DomType.MmlNary,
    "eqArr": DomType.MmlEquationArray,
    "lim": DomType.MmlLimit,
    "limLow": DomType.MmlLimitLower,
    "m": DomType.MmlMatrix,
    "mr": DomType.MmlMatrixRow,
    "box": DomType.MmlBox,
    "bar": DomType.MmlBar,
    "groupChr": DomType.MmlGroupChar
  };
  function parseMathElement(elem, ctx) {
    const propsTag = `${elem.localName}Pr`;
    const mathElement = {
      type: mmlTagMap[elem.localName],
      children: []
    };
    xmlUtil.foreach(elem, (child) => {
      const childType = mmlTagMap[child.localName];
      if (childType) {
        mathElement.children.push(parseMathElement(child, ctx));
      } else if (child.localName == "r") {
        const wmlRun = ctx.parseRun(child);
        wmlRun.type = DomType.MmlRun;
        mathElement.children.push(wmlRun);
      } else if (child.localName == propsTag) {
        mathElement.props = parseMathProperties(child, ctx.options);
      }
    });
    return mathElement;
  }
  function parseMathProperties(elem, options) {
    const result = {};
    for (const el of globalXmlParser.elements(elem)) {
      switch (el.localName) {
        case "chr":
          result.char = globalXmlParser.attr(el, "val");
          break;
        case "vertJc":
          result.verticalJustification = globalXmlParser.attr(el, "val");
          break;
        case "jc":
          result.justification = globalXmlParser.attr(el, "val");
          break;
        case "pos":
          result.position = globalXmlParser.attr(el, "val");
          break;
        case "degHide":
          result.hideDegree = globalXmlParser.boolAttr(el, "val");
          break;
        case "begChr":
          result.beginChar = globalXmlParser.attr(el, "val");
          break;
        case "endChr":
          result.endChar = globalXmlParser.attr(el, "val");
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Math Property\uFF1A${el.localName}`, "color:#f75607");
          }
      }
    }
    return result;
  }
  var WmlComment = class extends OpenXmlElementBase {
    constructor() {
      super(...arguments);
      this.type = DomType.Comment;
    }
  };
  var WmlCommentReference = class extends OpenXmlElementBase {
    constructor(id) {
      super();
      this.id = id;
      this.type = DomType.CommentReference;
    }
  };
  var WmlCommentRangeStart = class extends OpenXmlElementBase {
    constructor(id) {
      super();
      this.id = id;
      this.type = DomType.CommentRangeStart;
    }
  };
  var WmlCommentRangeEnd = class extends OpenXmlElementBase {
    constructor(id) {
      super();
      this.id = id;
      this.type = DomType.CommentRangeEnd;
    }
  };
  function parseSdt(node, ctx) {
    const sdtContent = globalXmlParser.element(node, "sdtContent");
    return sdtContent ? ctx.parseBodyElements(sdtContent) : [];
  }
  function parseNotes(xmlDoc, elemName, elemClass, ctx) {
    const result = [];
    for (const el of globalXmlParser.elements(xmlDoc, elemName)) {
      const node = new elemClass();
      node.id = globalXmlParser.attr(el, "id");
      node.noteType = globalXmlParser.attr(el, "type");
      node.children = ctx.parseBodyElements(el);
      result.push(node);
    }
    return result;
  }
  function parseComments(xmlDoc, ctx) {
    const result = [];
    for (const el of globalXmlParser.elements(xmlDoc, "comment")) {
      const item = new WmlComment();
      item.id = globalXmlParser.attr(el, "id");
      item.author = globalXmlParser.attr(el, "author");
      item.initials = globalXmlParser.attr(el, "initials");
      item.date = globalXmlParser.attr(el, "date");
      item.children = ctx.parseBodyElements(el);
      result.push(item);
    }
    return result;
  }
  function parseDefaultProperties(elem, options, style = null, childStyle = null, handler = null) {
    style = style || {};
    xmlUtil.foreach(elem, (c) => {
      if (handler === null || handler === void 0 ? void 0 : handler(c)) {
        return;
      }
      switch (c.localName) {
        case "b":
          style["font-weight"] = globalXmlParser.boolAttr(c, "val", true) ? "bold" : "normal";
          break;
        case "bidi":
          break;
        case "bCs":
          break;
        case "bdr":
          style["border"] = values.valueOfBorder(c);
          break;
        case "caps":
          style["text-transform"] = globalXmlParser.boolAttr(c, "val", true) ? "uppercase" : "none";
          break;
        case "color":
          style["color"] = xmlUtil.colorAttr(c, "val", null, autos.color);
          break;
        case "cs":
          break;
        case "dstrike":
          break;
        case "eastAsianLayout":
          break;
        case "effect":
          break;
        case "em":
          break;
        case "emboss":
          break;
        case "fitText":
          break;
        case "highlight":
          style["background-color"] = xmlUtil.colorAttr(c, "val", null, autos.highlight);
          break;
        case "i":
          style["font-style"] = globalXmlParser.boolAttr(c, "val", true) ? "italic" : "normal";
          break;
        case "iCs":
          break;
        case "imprint":
          break;
        case "kern":
          break;
        case "lang":
          style["$lang"] = globalXmlParser.attr(c, "val");
          break;
        case "noProof":
          break;
        case "outline":
          break;
        case "position":
          style.verticalAlign = globalXmlParser.lengthAttr(c, "val", LengthUsage.FontSize);
          break;
        case "rFonts":
          parseFont$1(c, style);
          break;
        case "rPrChange":
          break;
        case "rtl":
          break;
        case "shadow":
          break;
        case "shd":
          style["background-color"] = xmlUtil.colorAttr(c, "fill", null, autos.shd);
          break;
        case "smallCaps":
          style["font-variant"] = globalXmlParser.boolAttr(c, "val", true) ? "small-caps" : "none";
          break;
        case "specVanish":
          break;
        case "strike":
          style["text-decoration"] = globalXmlParser.boolAttr(c, "val", true) ? "line-through" : "none";
          break;
        case "sz":
          style["font-size"] = style["min-height"] = globalXmlParser.lengthAttr(c, "val", LengthUsage.FontSize);
          break;
        case "szCs":
          break;
        case "u":
          parseUnderline(c, style, options);
          break;
        case "vanish":
          if (globalXmlParser.boolAttr(c, "val", true))
            style["display"] = "none";
          break;
        case "vertAlign":
          break;
        case "w":
          break;
        case "webHidden":
          break;
        case "jc":
          style["text-align"] = values.valueOfJc(c);
          break;
        case "textAlignment":
          style["vertical-align"] = values.valueOfTextAlignment(c);
          break;
        case "tcW":
          if (options.ignoreWidth) ;
          break;
        case "tblW":
          style["width"] = values.valueOfSize(c, "w");
          break;
        case "trHeight":
          parseTrHeight(c, style);
          break;
        case "ind":
        case "tblInd":
          parseIndentation(c, style, options);
          break;
        case "tblBorders":
          parseBorderProperties(c, childStyle || style, options);
          break;
        case "tblCellSpacing":
          style["border-spacing"] = values.valueOfMargin(c);
          style["border-collapse"] = "separate";
          break;
        case "pBdr":
          parseBorderProperties(c, style, options);
          break;
        case "tcBorders":
          parseBorderProperties(c, style, options);
          break;
        case "noWrap":
          break;
        case "tblCellMar":
        case "tcMar":
          parseMarginProperties(c, childStyle || style, options);
          break;
        case "tblLayout":
          style["table-layout"] = values.valueOfTblLayout(c);
          break;
        case "vAlign":
          style["vertical-align"] = values.valueOfTextAlignment(c);
          break;
        case "wordWrap":
          if (globalXmlParser.boolAttr(c, "val"))
            style["overflow-wrap"] = "break-word";
          break;
        case "suppressAutoHyphens":
          style["hyphens"] = globalXmlParser.boolAttr(c, "val", true) ? "none" : "auto";
          break;
        case "tabs":
        case "outlineLvl":
        case "contextualSpacing":
        case "tblStyleColBandSize":
        case "tblStyleRowBandSize":
        case "pageBreakBefore":
        case "suppressLineNumbers":
        case "keepLines":
        case "keepNext":
        case "widowControl":
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Property Element\uFF1A${elem.localName}.${c.localName}`, "color:green");
          }
          break;
      }
    });
    return style;
  }
  function parseUnderline(node, style, options) {
    let val = globalXmlParser.attr(node, "val");
    if (val == null)
      return;
    switch (val) {
      case "dash":
      case "dashDotDotHeavy":
      case "dashDotHeavy":
      case "dashedHeavy":
      case "dashLong":
      case "dashLongHeavy":
      case "dotDash":
      case "dotDotDash":
        style["text-decoration"] = "underline dashed";
        break;
      case "dotted":
      case "dottedHeavy":
        style["text-decoration"] = "underline dotted";
        break;
      case "double":
        style["text-decoration"] = "underline double";
        break;
      case "single":
      case "thick":
        style["text-decoration"] = "underline";
        break;
      case "wave":
      case "wavyDouble":
      case "wavyHeavy":
        style["text-decoration"] = "underline wavy";
        break;
      case "words":
        style["text-decoration"] = "underline";
        break;
      case "none":
        style["text-decoration"] = "none";
        break;
      default:
        if (options.debug) {
          console.warn(`DOCX:%c Unknown Underline Property\uFF1A${val}`, "color:#f75607");
        }
    }
    let col = xmlUtil.colorAttr(node, "color");
    if (col) {
      style["text-decoration-color"] = col;
    }
  }
  function parseFont$1(node, style) {
    let fonts = /* @__PURE__ */ new Set();
    let ascii = globalXmlParser.attr(node, "ascii");
    let ascii_theme = values.themeValue(node, "asciiTheme");
    fonts.add(ascii).add(ascii_theme);
    let east_Asia = globalXmlParser.attr(node, "eastAsia");
    let east_Asia_theme = values.themeValue(node, "eastAsiaTheme");
    fonts.add(east_Asia).add(east_Asia_theme);
    let complex_script = globalXmlParser.attr(node, "cs");
    let complex_script_theme = values.themeValue(node, "cstheme");
    fonts.add(complex_script).add(complex_script_theme);
    let high_ansi = globalXmlParser.attr(node, "hAnsi");
    let high_ansi_theme = values.themeValue(node, "hAnsiTheme");
    fonts.add(high_ansi).add(high_ansi_theme);
    let unique_fonts = [...fonts].filter((x) => x);
    if (unique_fonts.length > 0) {
      style["font-family"] = unique_fonts.join(", ");
    }
    style["_hint"] = globalXmlParser.attr(node, "hint");
  }
  function parseIndentation(node, style, options) {
    let indentation = {};
    for (const attr of globalXmlParser.attrs(node)) {
      switch (attr.localName) {
        case "end":
          indentation.end = globalXmlParser.lengthAttr(node, "end");
          break;
        case "endChars":
          indentation.endCharacters = globalXmlParser.lengthAttr(node, "endChars");
          break;
        case "firstLine":
          indentation.firstLine = globalXmlParser.lengthAttr(node, "firstLine");
          break;
        case "firstLineChars":
          indentation.firstLineChars = globalXmlParser.lengthAttr(node, "firstLineChars");
          break;
        case "hanging":
          indentation.hanging = globalXmlParser.lengthAttr(node, "hanging");
          break;
        case "hangingChars":
          indentation.hangingChars = globalXmlParser.lengthAttr(node, "hangingChars");
          break;
        case "left":
          indentation.left = globalXmlParser.lengthAttr(node, "left");
          break;
        case "leftChars":
          indentation.leftChars = globalXmlParser.lengthAttr(node, "leftChars");
          break;
        case "right":
          indentation.right = globalXmlParser.lengthAttr(node, "right");
          break;
        case "rightChars":
          indentation.rightChars = globalXmlParser.lengthAttr(node, "rightChars");
          break;
        case "start":
          indentation.start = globalXmlParser.lengthAttr(node, "start");
          break;
        case "startChars":
          indentation.startChars = globalXmlParser.lengthAttr(node, "startChars");
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Indentation Property\uFF1A${attr.localName}`, "color:#f75607");
          }
      }
    }
    if (indentation.firstLine)
      style["text-indent"] = indentation.firstLine;
    if (indentation.hanging)
      style["text-indent"] = `-${indentation.hanging}`;
    if (indentation.left || indentation.start)
      style["padding-left"] = indentation.left || indentation.start;
    if (indentation.right || indentation.end)
      style["padding-right"] = indentation.right || indentation.end;
  }
  function parseSpacing(node, run, options) {
    for (const attr of globalXmlParser.attrs(node)) {
      switch (attr.localName) {
        case "val":
          run.cssStyle["margin-bottom"] = globalXmlParser.lengthAttr(node, "val");
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Spacing Property\uFF1A${attr.localName}`, "color:#f75607");
          }
      }
    }
  }
  function parseMarginProperties(node, output, options) {
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "left":
          output["padding-left"] = values.valueOfMargin(c);
          break;
        case "right":
          output["padding-right"] = values.valueOfMargin(c);
          break;
        case "top":
          output["padding-top"] = values.valueOfMargin(c);
          break;
        case "bottom":
          output["padding-bottom"] = values.valueOfMargin(c);
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Margin Property\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
  }
  function parseTrHeight(node, output) {
    switch (globalXmlParser.attr(node, "hRule")) {
      case "exact":
        output["height"] = globalXmlParser.lengthAttr(node, "val");
        break;
      case "atLeast":
      default:
        output["height"] = globalXmlParser.lengthAttr(node, "val");
        break;
    }
  }
  function parseBorderProperties(node, output, options) {
    xmlUtil.foreach(node, (c) => {
      switch (c.localName) {
        case "start":
        case "left":
          output["border-left"] = values.valueOfBorder(c);
          break;
        case "end":
        case "right":
          output["border-right"] = values.valueOfBorder(c);
          break;
        case "top":
          output["border-top"] = values.valueOfBorder(c);
          break;
        case "bottom":
          output["border-bottom"] = values.valueOfBorder(c);
          break;
        default:
          if (options.debug) {
            console.warn(`DOCX:%c Unknown Border Property\uFF1A${c.localName}`, "color:#f75607");
          }
      }
    });
  }
  function parseBookmarkStart(elem, xml) {
    return {
      type: DomType.BookmarkStart,
      id: xml.attr(elem, "id"),
      name: xml.attr(elem, "name"),
      colFirst: xml.intAttr(elem, "colFirst"),
      colLast: xml.intAttr(elem, "colLast")
    };
  }
  function parseBookmarkEnd(elem, xml) {
    return {
      type: DomType.BookmarkEnd,
      id: xml.attr(elem, "id")
    };
  }
  function parseInserted(node, ctx) {
    const wmlInserted = {
      type: DomType.Inserted,
      children: []
    };
    xmlUtil.foreach(node, (child) => {
      switch (child.localName) {
        case "r":
          wmlInserted.children.push(ctx.parseRun(child));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Inserted\uFF1A${child.localName}`, "color:#f75607");
          }
      }
    });
    return wmlInserted;
  }
  function parseDeleted(node, ctx) {
    const wmlDeleted = {
      type: DomType.Deleted,
      children: []
    };
    xmlUtil.foreach(node, (child) => {
      switch (child.localName) {
        case "r":
          wmlDeleted.children.push(ctx.parseRun(child));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Inserted\uFF1A${child.localName}`, "color:#f75607");
          }
      }
    });
    return wmlDeleted;
  }
  function parseParagraph(node, ctx) {
    const wmlParagraph = {
      type: DomType.Paragraph,
      children: [],
      props: {},
      cssStyle: {}
    };
    xmlUtil.foreach(node, (child) => {
      switch (child.localName) {
        case "pPr":
          parseParagraphProperties(child, wmlParagraph, ctx);
          break;
        case "r":
          wmlParagraph.children.push(ctx.parseRun(child));
          break;
        case "hyperlink":
          wmlParagraph.children.push(parseHyperlink(child, ctx));
          break;
        case "bookmarkStart":
          wmlParagraph.children.push(parseBookmarkStart(child, globalXmlParser));
          break;
        case "bookmarkEnd":
          wmlParagraph.children.push(parseBookmarkEnd(child, globalXmlParser));
          break;
        case "commentRangeStart":
          wmlParagraph.children.push(new WmlCommentRangeStart(globalXmlParser.attr(child, "id")));
          break;
        case "commentRangeEnd":
          wmlParagraph.children.push(new WmlCommentRangeEnd(globalXmlParser.attr(child, "id")));
          break;
        case "oMath":
        case "oMathPara":
          wmlParagraph.children.push(ctx.parseMathElement(child));
          break;
        case "sdt":
          wmlParagraph.children.push(...parseSdt(child, ctx));
          break;
        case "ins":
          wmlParagraph.children.push(parseInserted(child, ctx));
          break;
        case "del":
          wmlParagraph.children.push(parseDeleted(child, ctx));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Paragraph Element\uFF1A${child.localName}`, "color:#f75607");
          }
      }
    });
    if (wmlParagraph.children.length === 0) {
      const wmlBreak = { type: DomType.Break, "break": BreakType.TextWrapping };
      const wmlRun = { type: DomType.Run, children: [wmlBreak] };
      wmlParagraph.children = [wmlRun];
    }
    return wmlParagraph;
  }
  function parseParagraphProperties(elem, paragraph, ctx) {
    parseDefaultProperties(elem, ctx.options, paragraph.cssStyle = {}, null, (c) => {
      if (parseParagraphProperty(c, paragraph.props, globalXmlParser)) {
        return true;
      }
      switch (c.localName) {
        case "cnfStyle":
          paragraph.className = values.classNameOfCnfStyle(c);
          break;
        case "framePr":
          parseFrame(c, paragraph);
          break;
        case "pStyle":
          paragraph.styleName = globalXmlParser.attr(c, "val");
          break;
        default:
          return false;
      }
      return true;
    });
  }
  function parseFrame(node, paragraph) {
    const dropCap = globalXmlParser.attr(node, "dropCap");
    if (dropCap == "drop")
      paragraph.cssStyle["float"] = "left";
  }
  function parseHyperlink(node, ctx) {
    const wmlHyperlink = {
      type: DomType.Hyperlink,
      children: []
    };
    const anchor = globalXmlParser.attr(node, "anchor");
    const relId = globalXmlParser.attr(node, "id");
    if (anchor) {
      wmlHyperlink.href = "#" + anchor;
    }
    if (relId) {
      wmlHyperlink.id = relId;
    }
    xmlUtil.foreach(node, (child) => {
      switch (child.localName) {
        case "r":
          wmlHyperlink.children.push(ctx.parseRun(child));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Hyperlink Element\uFF1A${child.localName}`, "color:#f75607");
          }
      }
    });
    return wmlHyperlink;
  }
  function parseRun(node, ctx) {
    const wmlRun = {
      type: DomType.Run,
      children: []
    };
    xmlUtil.foreach(node, (child) => {
      child = ctx.checkAlternateContent(child);
      switch (child.localName) {
        case "rPr":
          parseRunProperties(child, wmlRun, ctx);
          break;
        case "t":
          wmlRun.children.push(parseText(child, DomType.Text));
          break;
        case "delText":
          wmlRun.children.push(parseText(child, DomType.DeletedText));
          break;
        case "commentReference":
          wmlRun.children.push(new WmlCommentReference(globalXmlParser.attr(child, "id")));
          break;
        case "fldSimple":
          wmlRun.children.push({
            type: DomType.SimpleField,
            instruction: globalXmlParser.attr(child, "instr"),
            lock: globalXmlParser.boolAttr(child, "lock", false),
            dirty: globalXmlParser.boolAttr(child, "dirty", false)
          });
          break;
        case "instrText":
          wmlRun.fieldRun = true;
          wmlRun.children.push(parseText(child, DomType.Instruction));
          break;
        case "fldChar":
          wmlRun.fieldRun = true;
          wmlRun.children.push({
            type: DomType.ComplexField,
            charType: globalXmlParser.attr(child, "fldCharType"),
            lock: globalXmlParser.boolAttr(child, "lock", false),
            dirty: globalXmlParser.boolAttr(child, "dirty", false)
          });
          break;
        case "noBreakHyphen":
          wmlRun.children.push({ type: DomType.NoBreakHyphen });
          break;
        case "br":
          wmlRun.children.push({
            type: DomType.Break,
            break: globalXmlParser.attr(child, "type") || "textWrapping",
            props: {
              clear: globalXmlParser.attr(child, "clear")
            }
          });
          break;
        case "lastRenderedPageBreak":
          wmlRun.children.push({
            type: DomType.LastRenderedPageBreak
          });
          break;
        case "sym":
          wmlRun.children.push({
            type: DomType.Symbol,
            font: globalXmlParser.attr(child, "font"),
            char: globalXmlParser.attr(child, "char")
          });
          break;
        case "ptab":
          break;
        case "tab":
          wmlRun.children.push({ type: DomType.Tab });
          break;
        case "footnoteReference":
          wmlRun.children.push({
            type: DomType.FootnoteReference,
            id: globalXmlParser.attr(child, "id")
          });
          break;
        case "endnoteReference":
          wmlRun.children.push({
            type: DomType.EndnoteReference,
            id: globalXmlParser.attr(child, "id")
          });
          break;
        case "drawing":
          wmlRun.children.push(ctx.parseDrawing(child));
          break;
        case "pict":
          wmlRun.children.push(ctx.parseVmlPicture(child));
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Run Element\uFF1A${child.localName}`, "color:#f75607");
          }
      }
    });
    return wmlRun;
  }
  function parseText(elem, type) {
    const wmlText = { type, text: "" };
    let textContent = elem.textContent;
    const is_preserve_space = globalXmlParser.attr(elem, "xml:space") === "preserve";
    if (is_preserve_space) {
      textContent = textContent.split(/\s/).join(" ");
    }
    wmlText.text = textContent;
    if (textContent.length > 0) {
      wmlText.children = parseCharacter(textContent);
    }
    return wmlText;
  }
  function parseCharacter(text) {
    let characters;
    const isChinese = text.match(/[一-龥]+/g);
    if (isChinese) {
      characters = text.split("");
    } else {
      characters = text.match(/\S+|\s+/g);
    }
    return characters.map((character) => ({ type: DomType.Character, char: character }));
  }
  function parseRunProperties(elem, run, ctx) {
    parseDefaultProperties(elem, ctx.options, run.cssStyle = {}, null, (c) => {
      switch (c.localName) {
        case "rStyle":
          run.styleName = globalXmlParser.attr(c, "val");
          break;
        case "vertAlign":
          run.verticalAlign = values.valueOfVertAlign(c, true);
          break;
        case "spacing":
          parseSpacing(c, run, ctx.options);
          break;
        default:
          return false;
      }
      return true;
    });
  }
  var defaultDocumentParserOptions = {
    ignoreWidth: false,
    debug: false,
    ignoreTableWrap: true,
    ignoreImageWrap: true
  };
  function parseBodyElementsFn(element, ctx) {
    const children = [];
    xmlUtil.foreach(element, (child) => {
      switch (child.localName) {
        case "p":
          children.push(parseParagraph(child, ctx));
          break;
        case "tbl":
          children.push(parseTable(child, ctx));
          break;
        case "sdt":
          children.push(...parseSdt(child, ctx));
          break;
        case "sectPr":
          break;
        default:
          if (ctx.options.debug) {
            console.warn(`DOCX:%c Unknown Body Element\uFF1A${child.localName}`, "color:red");
          }
      }
    });
    return children;
  }
  var DocumentParser = class {
    constructor(options) {
      this.options = Object.assign(Object.assign({}, defaultDocumentParserOptions), options);
      const ctx = {};
      const opts = this.options;
      Object.assign(ctx, {
        options: opts,
        parseBodyElements: (e) => parseBodyElementsFn(e, ctx),
        parseParagraph: (e) => parseParagraph(e, ctx),
        parseTable: (e) => parseTable(e, ctx),
        parseRun: (e) => parseRun(e, ctx),
        parseMathElement: (e) => parseMathElement(e, ctx),
        parseDefaultProperties: (e, s, c, h) => parseDefaultProperties(e, opts, s, c, h),
        parseDrawing: (e) => parseDrawing(e, ctx),
        parseVmlPicture: (e) => parseVmlPicture(e, ctx),
        checkAlternateContent: (e) => checkAlternateContent(e)
      });
      this.ctx = ctx;
    }
    parseDocumentFile(xmlDoc) {
      const documentElement = {
        uuid: "root",
        sectProps: {},
        type: DomType.Document
      };
      const background = globalXmlParser.element(xmlDoc, "background");
      documentElement.cssStyle = background ? this.parseBackground(background) : {};
      const body = globalXmlParser.element(xmlDoc, "body");
      documentElement.children = this.parseBodyElements(body);
      const sectionProperties = globalXmlParser.element(body, "sectPr");
      if (sectionProperties) {
        documentElement.sectProps = parseSectionProperties(sectionProperties, globalXmlParser);
      }
      documentElement.sectProps.sectionId = uuid();
      return documentElement;
    }
    parseBackground(elem) {
      const result = {};
      const color = xmlUtil.colorAttr(elem, "color");
      if (color) {
        result["background-color"] = color;
      }
      return result;
    }
    parseBodyElements(element) {
      return parseBodyElementsFn(element, this.ctx);
    }
    parseStylesFile(xstyles) {
      return parseStylesFile(xstyles, this.ctx);
    }
    parseDefaultStyles(node) {
      return parseDefaultStyles(node, this.ctx);
    }
    parseStyle(node) {
      return parseStyle(node, this.ctx);
    }
    parseTableStyle(node) {
      return parseTableStyle(node, this.ctx);
    }
    parseNumberingFile(xnums) {
      return parseNumberingFile(xnums, this.ctx);
    }
    parseNotes(xmlDoc, elemName, elemClass) {
      return parseNotes(xmlDoc, elemName, elemClass, this.ctx);
    }
    parseComments(xmlDoc) {
      return parseComments(xmlDoc, this.ctx);
    }
  };
  var defaultTab = { position: 0, leader: "none", style: "left" };
  var maxTabs = 50;
  function computePointToPixelRatio(container = document.body) {
    const temp = document.createElement("div");
    temp.style.width = "100pt";
    container.appendChild(temp);
    const ratio = 100 / temp.offsetWidth;
    container.removeChild(temp);
    return ratio;
  }
  function updateTabStop(element, tabs, defaultTabSize, pixelToPoint = 72 / 96) {
    const oParagraph = element.closest("p");
    const elementRect = element.getBoundingClientRect();
    const paragraphRect = oParagraph.getBoundingClientRect();
    const paragraphStyle = getComputedStyle(oParagraph);
    const tabStops = (tabs === null || tabs === void 0 ? void 0 : tabs.length) > 0 ? tabs.sort((a, b) => a.position - b.position) : [defaultTab];
    const lastTab = tabStops[tabStops.length - 1];
    const paragraphWidth = paragraphRect.width * pixelToPoint;
    const size = parseFloat(defaultTabSize);
    let position = lastTab.position + size;
    if (position < paragraphWidth) {
      for (; position < paragraphWidth && tabStops.length < maxTabs; position += size) {
        tabStops.push(Object.assign(Object.assign({}, defaultTab), { position }));
      }
    }
    const marginLeft = parseFloat(paragraphStyle.marginLeft);
    const paragraphOffset = paragraphRect.left + marginLeft;
    const left = (elementRect.left - paragraphOffset) * pixelToPoint;
    const tab = tabStops.find((tab2) => tab2.style != "clear" && tab2.position > left);
    if (tab == null) {
      return;
    }
    let width = 1;
    if (tab.style == "right" || tab.style == "center") {
      const tabStopElements = Array.from(oParagraph.querySelectorAll(`.${element.className}`));
      const nextIndex = tabStopElements.indexOf(element) + 1;
      const range = document.createRange();
      range.setStartBefore(element);
      if (nextIndex < tabStopElements.length) {
        range.setEndBefore(tabStopElements[nextIndex]);
      } else {
        range.setEndAfter(oParagraph);
      }
      const mul = tab.style === "center" ? 0.5 : 1;
      const rangeRect = range.getBoundingClientRect();
      const offset = rangeRect.left + mul * rangeRect.width - (paragraphRect.left - marginLeft);
      width = tab.position - offset * pixelToPoint;
    } else {
      width = tab.position - left;
    }
    element.innerHTML = "&nbsp;";
    element.style.textDecoration = "inherit";
    element.style.wordSpacing = `${width.toFixed(0)}pt`;
    switch (tab.leader) {
      case "dot":
      case "middleDot":
        element.style.textDecorationLine = "underline";
        element.style.textDecorationStyle = "dotted";
        break;
      case "hyphen":
        element.style.textDecorationLine = "underline";
        element.style.textDecorationStyle = "dashed";
        break;
      case "heavy":
      case "underscore":
        element.style.textDecorationLine = "underline";
        element.style.textDecorationStyle = "solid";
        break;
      case "none":
      default:
        element.style.textDecorationLine = "none";
        break;
    }
  }
  var Page = class {
    constructor({ sectProps, children = [], stack = [], isSplit = false, isFirstPage = false, isLastPage = false, breakIndex = /* @__PURE__ */ new Set(), regions, layoutContext }) {
      this.pageId = uuid();
      this.sectProps = sectProps;
      this.children = children;
      this.stack = stack;
      this.isSplit = isSplit;
      this.isFirstPage = isFirstPage;
      this.isLastPage = isLastPage;
      this.breakIndex = breakIndex;
      this.regions = regions;
      this.layoutContext = layoutContext;
    }
  };
  function createElement(tagName, props) {
    return createElementNS(null, tagName, props);
  }
  function createSvgElement(tagName, props) {
    return createElementNS("http://www.w3.org/2000/svg", tagName, props);
  }
  function createElementNS(ns2, tagName, props, children) {
    let oParent;
    switch (ns2) {
      case "http://www.w3.org/1998/Math/MathML":
        oParent = document.createElementNS(ns2, tagName);
        break;
      case "http://www.w3.org/2000/svg":
        oParent = document.createElementNS(ns2, tagName);
        break;
      case "http://www.w3.org/1999/xhtml":
        oParent = document.createElement(tagName);
        break;
      default:
        oParent = document.createElement(tagName);
    }
    if (props) {
      Object.assign(oParent, props);
    }
    if (children) {
      appendChildren(oParent, children);
    }
    return oParent;
  }
  function removeAllElements(elem) {
    elem.innerHTML = "";
  }
  function appendChildren(parent, children) {
    if (parent instanceof Element) {
      if (Array.isArray(children)) {
        parent.append(...children);
      } else {
        if (typeof children === "string") {
          parent.append(children);
        } else {
          parent.appendChild(children);
        }
      }
    }
    if (parent instanceof Text) {
      if (Array.isArray(children)) {
        throw new Error("Text append children: children must be text node");
      } else {
        if (children instanceof Text) {
          parent.appendData(children.wholeText);
        }
      }
    }
  }
  function removeElements(target, parent) {
    if (parent === void 0) {
      if (Array.isArray(target)) {
        target.forEach((elem) => {
          if (elem instanceof Element) {
            elem.remove();
          } else {
            throw new Error("removeElements: target must be Element!");
          }
        });
      } else {
        if (target instanceof Element) {
          target.remove();
        } else {
          throw new Error("removeElements: target must be Element!");
        }
      }
      return;
    }
    if (parent instanceof Text) {
      if (Array.isArray(target)) {
        throw new Error("Text remove target: target must be text node!");
      } else {
        if (target instanceof Text) {
          parent.deleteData(parent.length - target.length, target.length);
        }
      }
    }
    if (parent instanceof Element) {
      if (Array.isArray(target)) {
        target.forEach((elem) => {
          if (elem instanceof Element) {
            elem.remove();
          } else {
            parent.removeChild(elem);
          }
        });
      } else {
        if (target instanceof Element) {
          target.remove();
        } else {
          parent.removeChild(target);
        }
      }
    }
  }
  function createStyleElement(cssText) {
    return createElement("style", { innerHTML: cssText });
  }
  function appendComment(elem, comment) {
    elem.appendChild(document.createComment(comment));
  }
  function findParent(elem, type) {
    let parent = elem.parent;
    while (parent != null && parent.type != type) {
      parent = parent.parent;
    }
    return parent;
  }
  var Overflow;
  (function(Overflow2) {
    Overflow2["NONE"] = "none";
    Overflow2["SELF"] = "self";
    Overflow2["PARTIAL"] = "partial";
    Overflow2["FULL"] = "full";
    Overflow2["UNCHECKED"] = "unchecked";
    Overflow2["SKIP"] = "skip";
  })(Overflow || (Overflow = {}));
  function isOverflowing(metrics) {
    return metrics.clientHeight < metrics.scrollHeight;
  }
  function withSkippedOverflowElementsHidden(el, measure) {
    const skippedElements = Array.from(el.querySelectorAll('[data-overflow="skip"]'));
    const skippedDisplayValues = skippedElements.map((item) => item.style.display);
    for (const item of skippedElements) {
      item.style.display = "none";
    }
    try {
      return measure();
    } finally {
      for (let i = 0; i < skippedElements.length; i++) {
        skippedElements[i].style.display = skippedDisplayValues[i];
      }
    }
  }
  function measureElementOverflow(el) {
    const currentOverflow = getComputedStyle(el).overflow;
    if (!currentOverflow || currentOverflow === "visible") {
      el.style.overflow = "hidden";
    }
    try {
      return withSkippedOverflowElementsHidden(el, () => isOverflowing({
        clientHeight: el.clientHeight,
        scrollHeight: el.scrollHeight
      }));
    } finally {
      el.style.overflow = currentOverflow;
    }
  }
  function measurePageOverflow(pageState) {
    if (pageState.isSplit)
      return Overflow.UNCHECKED;
    if (pageState.checkingOverflow && pageState.contentElement) {
      return measureElementOverflow(pageState.contentElement) ? Overflow.SELF : Overflow.NONE;
    }
    return Overflow.UNCHECKED;
  }
  function inferOverflow(overflows) {
    if (overflows.length === 0)
      return Overflow.NONE;
    const overflowStatus = [Overflow.FULL, Overflow.SELF, Overflow.PARTIAL];
    if (overflows.every((o) => o === Overflow.PARTIAL))
      return Overflow.PARTIAL;
    if (overflows.every((o) => overflowStatus.includes(o)))
      return Overflow.FULL;
    if (overflows.every((o) => o === Overflow.UNCHECKED))
      return Overflow.UNCHECKED;
    if (overflows.every((o) => [Overflow.NONE, Overflow.UNCHECKED, Overflow.SKIP].includes(o)))
      return Overflow.NONE;
    if (overflows.some((o) => overflowStatus.includes(o)))
      return Overflow.PARTIAL;
    return Overflow.UNCHECKED;
  }
  function isSplitParagraph(elem) {
    const { breakIndex, children } = elem;
    if (!breakIndex)
      return false;
    if (!children || children.length === 0)
      return false;
    const i = [...breakIndex][0];
    if (i === 0)
      return isSplitParagraph(children[i]);
    return i < children.length;
  }
  function splitElementsByBreakIndex(current, next) {
    for (let i = 0; i < (next === null || next === void 0 ? void 0 : next.children.length); i++) {
      const child = next.children[i];
      const { type, breakIndex, children } = child;
      if (!breakIndex)
        continue;
      if (!children || children.length === 0)
        continue;
      const copy = cloneDeepWith_default(child, (value, key) => {
        if (key === "parent")
          return null;
      });
      const count = breakIndex.size > 0 ? [...breakIndex][0] : children.length;
      switch (type) {
        case DomType.Table: {
          const tableHeaders = children.filter((row) => row.isHeader);
          const unbrokenChildren = children.splice(0, count);
          children[0].children.forEach((cell) => {
            if (cell.verticalMerge === "continue") {
              cell.verticalMerge = "restart";
            }
          });
          if (tableHeaders.length > 0 && tableHeaders.length < children.length) {
            children.unshift(...tableHeaders);
          }
          copy.children = unbrokenChildren;
          current.children.push(copy);
          break;
        }
        case DomType.Row:
          if (child === null || child === void 0 ? void 0 : child.isHeader)
            continue;
          current.children.push(copy);
          break;
        case DomType.Cell:
          copy.children = children.splice(0, count);
          current.children[i] = copy;
          break;
        case DomType.Paragraph:
          copy.children = children.splice(0, count);
          current.children.push(copy);
          if (isSplitParagraph(child)) {
            child.cssStyle["text-indent"] = "0";
          }
          break;
        default:
          copy.children = children.splice(0, count);
          current.children.push(copy);
      }
      if (type !== DomType.Row && breakIndex.size > 0) {
        child.breakIndex = void 0;
      }
      if (children.length > 0) {
        splitElementsByBreakIndex(copy, { children, breakIndex: child.breakIndex });
      }
    }
  }
  function activeSection(regions, fallback) {
    var _a, _b;
    return (_b = (_a = regions === null || regions === void 0 ? void 0 : regions[regions.length - 1]) === null || _a === void 0 ? void 0 : _a.section) !== null && _b !== void 0 ? _b : fallback;
  }
  function pageNumberForNextPage(currentPage, nextPageIndex) {
    var _a;
    return ((_a = currentPage.layoutContext) === null || _a === void 0 ? void 0 : _a.physicalPageNumber) ? currentPage.layoutContext.physicalPageNumber + 1 : nextPageIndex + 1;
  }
  function buildContext(currentPage, nextPageIndex, nextSection) {
    const sectionId = nextSection.sectionId;
    if (!sectionId) {
      return void 0;
    }
    const physicalPageNumber = pageNumberForNextPage(currentPage, nextPageIndex);
    const currentContext = currentPage.layoutContext;
    const sameSection = (currentContext === null || currentContext === void 0 ? void 0 : currentContext.sectionId) === sectionId;
    const sectionPageIndex = sameSection ? currentContext.sectionPageIndex + 1 : 0;
    return {
      physicalPageNumber,
      activeSection: nextSection,
      sectionId,
      sectionPageIndex,
      isFirstSectionPage: sectionPageIndex === 0,
      isEvenPage: physicalPageNumber % 2 === 0
    };
  }
  function makeNextPage(currentPage, pageIndex, nextChildren, nextRegions) {
    const nextPageIndex = pageIndex + 1;
    const nextSection = activeSection(nextRegions, currentPage.sectProps);
    const layoutContext = buildContext(currentPage, nextPageIndex, nextSection);
    return new Page({
      sectProps: nextSection,
      children: nextChildren,
      regions: nextRegions,
      layoutContext
    });
  }
  function splitOnOverflow(currentPage, pages, pageIndex, overflowIndex) {
    const { sectProps, children: currentChildren } = currentPage;
    const nextPageChildren = currentChildren.splice(overflowIndex);
    const nextPage = makeNextPage(currentPage, pageIndex, nextPageChildren);
    splitElementsByBreakIndex(currentPage, nextPage);
    currentPage.isSplit = true;
    pages[pageIndex] = currentPage;
    pages.splice(pageIndex + 1, 0, nextPage);
    return { updatedCurrentPage: currentPage, nextPage, nextPageIndex: pageIndex + 1 };
  }
  function splitRegionOnOverflow(currentPage, pages, pageIndex, regionIndex, overflowIndex) {
    var _a;
    const regions = (_a = currentPage.regions) !== null && _a !== void 0 ? _a : [];
    const region = regions[regionIndex];
    if (!region) {
      return splitOnOverflow(currentPage, pages, pageIndex, overflowIndex);
    }
    const currentRegion = Object.assign(Object.assign({}, region), { children: region.children.slice(0, overflowIndex) });
    const nextRegion = Object.assign(Object.assign({}, region), { breakBefore: "page", children: region.children.slice(overflowIndex) });
    const currentSplit = { children: currentRegion.children, breakIndex: currentPage.breakIndex };
    const nextSplit = { children: nextRegion.children };
    splitElementsByBreakIndex(currentSplit, nextSplit);
    currentRegion.children = currentSplit.children;
    nextRegion.children = nextSplit.children;
    const currentRegions = [
      ...regions.slice(0, regionIndex),
      currentRegion
    ].filter((item) => item.children.length > 0);
    const nextRegions = [
      ...nextRegion.children.length > 0 ? [nextRegion] : [],
      ...regions.slice(regionIndex + 1)
    ];
    currentPage.regions = currentRegions;
    currentPage.children = currentRegions.flatMap((item) => item.children);
    currentPage.sectProps = activeSection(currentRegions, currentPage.sectProps);
    const nextPage = makeNextPage(currentPage, pageIndex, nextRegions.flatMap((item) => item.children), nextRegions);
    currentPage.isSplit = true;
    pages[pageIndex] = currentPage;
    pages.splice(pageIndex + 1, 0, nextPage);
    return { updatedCurrentPage: currentPage, nextPage, nextPageIndex: pageIndex + 1 };
  }
  function getActiveSection(page) {
    const activeRegion = page.regions[page.regions.length - 1];
    if (!activeRegion) {
      throw new Error("Cannot build a page layout context for a page with no regions.");
    }
    return activeRegion.section;
  }
  function buildPageLayoutContexts(pages) {
    const fallbackSectionPageIndexes = /* @__PURE__ */ new Map();
    return pages.map((page) => {
      var _a, _b, _c;
      const activeSection2 = getActiveSection(page);
      const sectionId = activeSection2.sectionId;
      const fallbackIndex = (_a = fallbackSectionPageIndexes.get(sectionId)) !== null && _a !== void 0 ? _a : 0;
      const sectionPageIndex = (_c = (_b = page.sectionPageIndexes) === null || _b === void 0 ? void 0 : _b.get(sectionId)) !== null && _c !== void 0 ? _c : fallbackIndex;
      fallbackSectionPageIndexes.set(sectionId, fallbackIndex + 1);
      return {
        physicalPageNumber: page.pageNumber,
        activeSection: activeSection2,
        sectionId,
        sectionPageIndex,
        isFirstSectionPage: sectionPageIndex === 0,
        isEvenPage: page.pageNumber % 2 === 0
      };
    });
  }
  var WmlNotes = class extends OpenXmlElementBase {
    constructor() {
      super(...arguments);
      this.children = [];
    }
  };
  var WmlBaseNote = class {
  };
  var WmlFootnotes = class extends WmlNotes {
    constructor() {
      super(...arguments);
      this.type = DomType.Footnotes;
    }
  };
  var WmlFootnote = class extends WmlBaseNote {
    constructor() {
      super(...arguments);
      this.type = DomType.Footnote;
    }
  };
  var WmlEndnotes = class extends WmlNotes {
    constructor() {
      super(...arguments);
      this.type = DomType.Endnotes;
    }
  };
  var WmlEndnote = class extends WmlBaseNote {
    constructor() {
      super(...arguments);
      this.type = DomType.Endnote;
    }
  };
  function renderNotes(type, noteIds, notesMap, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const children = noteIds.map((id) => notesMap[id]).filter((x) => x);
      if (children.length > 0) {
        const oList = createElement("ol", null);
        const notes = type === DomType.Footnotes ? new WmlFootnotes() : new WmlEndnotes();
        notes.children = children;
        ctx.linkParents(notes);
        ctx.processElement(notes);
        yield ctx.renderChildren(notes, oList);
        parent.appendChild(oList);
      }
    });
  }
  function renderFootnoteReference(elem, currentFootnoteIds) {
    const oSup = createElement("sup");
    currentFootnoteIds.push(elem.id);
    oSup.textContent = `${currentFootnoteIds.length}`;
    return oSup;
  }
  function renderEndnoteReference(elem, currentEndnoteIds) {
    const oSup = createElement("sup");
    currentEndnoteIds.push(elem.id);
    oSup.textContent = `${currentEndnoteIds.length}`;
    return oSup;
  }
  var RECT = "M0,0 L21600,0 L21600,21600 L0,21600 Z";
  var PRESET_PATHS = {
    rect: RECT,
    roundRect: "M3600,0 L18000,0 Q21600,0 21600,3600 L21600,18000 Q21600,21600 18000,21600 L3600,21600 Q0,21600 0,18000 L0,3600 Q0,0 3600,0 Z",
    ellipse: "M0,10800 A10800,10800 0 1,0 21600,10800 A10800,10800 0 1,0 0,10800 Z",
    triangle: "M10800,0 L21600,21600 L0,21600 Z",
    rtTriangle: "M0,0 L21600,21600 L0,21600 Z",
    diamond: "M10800,0 L21600,10800 L10800,21600 L0,10800 Z",
    parallelogram: "M6500,0 L21600,0 L15100,21600 L0,21600 Z",
    trapezoid: "M0,21600 L5400,0 L16200,0 L21600,21600 Z",
    pentagon: "M10800,0 L21600,8260 L17550,21600 L4050,21600 L0,8260 Z",
    hexagon: "M5400,0 L16200,0 L21600,10800 L16200,21600 L5400,21600 L0,10800 Z",
    octagon: "M6320,0 L15280,0 L21600,6320 L21600,15280 L15280,21600 L6320,21600 L0,15280 L0,6320 Z",
    rightArrow: "M0,5400 L13500,5400 L13500,0 L21600,10800 L13500,21600 L13500,16200 L0,16200 Z",
    leftArrow: "M21600,5400 L8100,5400 L8100,0 L0,10800 L8100,21600 L8100,16200 L21600,16200 Z",
    upArrow: "M5400,21600 L5400,8100 L0,8100 L10800,0 L21600,8100 L16200,8100 L16200,21600 Z",
    downArrow: "M5400,0 L16200,0 L16200,13500 L21600,13500 L10800,21600 L0,13500 L5400,13500 Z",
    line: "M0,0 L21600,21600",
    straightConnector1: "M0,0 L21600,21600"
  };
  var PRESET_COMPOUND_PATHS = {
    noSmoking: [
      "M1800,10800 A9000,9000 0 1,0 19800,10800 A9000,9000 0 1,0 1800,10800 Z M5400,10800 A5400,5400 0 1,0 16200,10800 A5400,5400 0 1,0 5400,10800 Z",
      "M3500,3500 L17900,17900 L19800,16000 L5400,1600 Z"
    ]
  };
  function getPresetGeometryPaths(preset) {
    if (preset && PRESET_COMPOUND_PATHS[preset]) {
      return PRESET_COMPOUND_PATHS[preset];
    }
    if (preset && PRESET_PATHS[preset]) {
      return [PRESET_PATHS[preset]];
    }
    return [RECT];
  }
  function createKonva(bodyContainer) {
    const oContainer = createElement("div");
    const containerId = `konva-container-${Math.random().toString(36).slice(2)}`;
    oContainer.id = containerId;
    appendChildren(bodyContainer, oContainer);
    const stage = new import_konva.default.Stage({ container: containerId });
    const layer = new import_konva.default.Layer({ listening: false });
    stage.add(layer);
    stage.visible(true);
    return { stage, layer };
  }
  function waitForImageDecode(image) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof image.decode !== "function") {
        return;
      }
      try {
        yield image.decode();
      } catch (_a) {
      }
    });
  }
  function isOutOfFlowDrawing(elem, output) {
    var _a;
    return ((_a = elem.props) === null || _a === void 0 ? void 0 : _a.wrapType) === WrapType.None || output.style.position === "absolute";
  }
  function renderDrawing(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a;
      const childHasAutoFit = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.some((c) => {
        var _a2, _b;
        return ((_b = (_a2 = c.props) === null || _a2 === void 0 ? void 0 : _a2.textbox) === null || _b === void 0 ? void 0 : _b.autoFit) === "shape";
      });
      const oDrawing = createElement("span");
      oDrawing.classList.add(`${ctx.className}-drawing`);
      oDrawing.style.textIndent = "0px";
      oDrawing.style.display = "inline-block";
      oDrawing.dataset.wrap = elem === null || elem === void 0 ? void 0 : elem.props.wrapType;
      if (childHasAutoFit && elem.cssStyle["height"]) {
        const drawingStyle = Object.assign({}, elem.cssStyle);
        delete drawingStyle["height"];
        ctx.renderStyleValues(drawingStyle, oDrawing);
      } else {
        ctx.renderStyleValues(elem.cssStyle, oDrawing);
      }
      const outOfFlow = isOutOfFlowDrawing(elem, oDrawing);
      if (outOfFlow) {
        oDrawing.dataset.overflow = Overflow.SKIP;
      }
      const isOverflow = yield ctx.appendChildren(parent, oDrawing);
      yield ctx.runWithoutOverflowTracking(() => ctx.renderChildren(elem, oDrawing));
      oDrawing.dataset.overflow = outOfFlow ? Overflow.SKIP : isOverflow;
      return oDrawing;
    });
  }
  function renderImage(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const { is_clip, is_transform } = elem.props;
      const oImage = new Image();
      ctx.renderStyleValues(elem.cssStyle, oImage);
      const source = yield ctx.document.loadDocumentImage(elem.src, ctx.currentPart);
      if (is_clip || is_transform) {
        try {
          oImage.src = yield transformImage(elem, source, ctx);
        } catch (e) {
          console.error(`transform ${elem.src} image error:`, e);
        }
      } else {
        oImage.src = source;
      }
      yield waitForImageDecode(oImage);
      oImage.dataset.overflow = yield ctx.appendChildren(parent, oImage);
      return oImage;
    });
  }
  function renderShape(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
      const textbox = (_b = (_a = elem.props) === null || _a === void 0 ? void 0 : _a.textbox) !== null && _b !== void 0 ? _b : {};
      const autoFit = textbox.autoFit === "shape";
      const containerStyle = autoFit ? Object.fromEntries(Object.entries(elem.cssStyle).filter(([k]) => k !== "height")) : elem.cssStyle;
      const oContainer = createElement("span");
      oContainer.style.position = "relative";
      oContainer.style.display = "inline-block";
      ctx.renderStyleValues(containerStyle, oContainer);
      const oSvg = createSvgElement("svg");
      oSvg.setAttribute("viewBox", "0 0 21600 21600");
      oSvg.setAttribute("preserveAspectRatio", "none");
      oSvg.style.position = "absolute";
      oSvg.style.inset = "0";
      oSvg.style.width = "100%";
      oSvg.style.height = "100%";
      oSvg.style.overflow = "visible";
      const fill = (_d = (_c = elem.props) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : "none";
      const line = (_f = (_e = elem.props) === null || _e === void 0 ? void 0 : _e.line) !== null && _f !== void 0 ? _f : {};
      const strokeColor = (_g = line.color) !== null && _g !== void 0 ? _g : "#000000";
      const strokeWidth = line.width ? parseFloat(line.width) || 1 : 1;
      for (const d of getPresetGeometryPaths((_h = elem.props) === null || _h === void 0 ? void 0 : _h.preset)) {
        const oPath = createSvgElement("path");
        oPath.setAttribute("d", d);
        oPath.setAttribute("fill-rule", "evenodd");
        oPath.setAttribute("fill", fill);
        oPath.setAttribute("stroke", strokeColor);
        oPath.setAttribute("stroke-width", `${strokeWidth}`);
        oPath.setAttribute("vector-effect", "non-scaling-stroke");
        oSvg.appendChild(oPath);
      }
      oContainer.appendChild(oSvg);
      const isOverflow = yield ctx.appendChildren(parent, oContainer);
      if ((_j = elem.children) === null || _j === void 0 ? void 0 : _j.length) {
        const oText = createElement("div");
        oText.classList.add(`${ctx.className}-textbox`);
        oText.style.position = "relative";
        oText.style.boxSizing = "border-box";
        oText.style.overflow = "hidden";
        oText.style.display = "flex";
        oText.style.flexDirection = "column";
        oText.style.alignItems = "flex-start";
        oText.style.paddingLeft = (_k = textbox.paddingLeft) !== null && _k !== void 0 ? _k : "";
        oText.style.paddingTop = (_l = textbox.paddingTop) !== null && _l !== void 0 ? _l : "";
        oText.style.paddingRight = (_m = textbox.paddingRight) !== null && _m !== void 0 ? _m : "";
        oText.style.paddingBottom = (_o = textbox.paddingBottom) !== null && _o !== void 0 ? _o : "";
        oText.style.justifyContent = textbox.verticalAnchor === "b" ? "flex-end" : textbox.verticalAnchor === "ctr" ? "center" : "flex-start";
        if (autoFit) {
          oText.style.width = (_q = (_p = elem.props) === null || _p === void 0 ? void 0 : _p.originalWidth) !== null && _q !== void 0 ? _q : "100%";
          oText.style.height = "auto";
        } else {
          oText.style.width = (_s = (_r = elem.props) === null || _r === void 0 ? void 0 : _r.originalWidth) !== null && _s !== void 0 ? _s : "100%";
          oText.style.height = (_u = (_t = elem.props) === null || _t === void 0 ? void 0 : _t.originalHeight) !== null && _u !== void 0 ? _u : "100%";
        }
        oContainer.appendChild(oText);
        yield ctx.renderChildren(elem, oText);
      }
      oContainer.dataset.overflow = isOverflow;
      return oContainer;
    });
  }
  function transformImage(elem, source, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const { is_clip, clip, is_transform, transform } = elem.props;
      const img = new Image();
      img.src = source;
      yield img.decode();
      const { naturalWidth, naturalHeight } = img;
      ctx.konvaStage.width(naturalWidth);
      ctx.konvaStage.height(naturalHeight);
      ctx.konvaLayer.removeChildren();
      const group = new import_konva.default.Group();
      const image = new import_konva.default.Image({
        image: img,
        x: naturalWidth / 2,
        y: naturalHeight / 2,
        width: naturalWidth,
        height: naturalHeight,
        offset: {
          x: naturalWidth / 2,
          y: naturalHeight / 2
        }
      });
      if (is_clip) {
        const { left, right, top, bottom } = clip.path;
        const x = naturalWidth * left;
        const y = naturalHeight * top;
        const width = naturalWidth * (1 - left - right);
        const height = naturalHeight * (1 - top - bottom);
        image.crop({ x, y, width, height });
        image.size({ width, height });
      }
      if (is_transform) {
        for (const key in transform) {
          switch (key) {
            case "scaleX":
              image.scaleX(transform[key]);
              break;
            case "scaleY":
              image.scaleY(transform[key]);
              break;
            case "rotate":
              image.rotation(transform[key]);
              break;
          }
        }
      }
      group.add(image);
      ctx.konvaLayer.add(group);
      if (ctx.options.useBase64URL) {
        return group.toDataURL();
      }
      const blob = yield group.toBlob();
      return URL.createObjectURL(blob);
    });
  }
  function renderVmlElement(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b;
      const oSvg = createSvgElement("svg");
      oSvg.setAttribute("style", elem.cssStyleText);
      const oChildren = yield renderVmlChildElement(elem, ctx);
      if ((_a = elem.imageHref) === null || _a === void 0 ? void 0 : _a.id) {
        const source = yield (_b = ctx.document) === null || _b === void 0 ? void 0 : _b.loadDocumentImage(elem.imageHref.id, ctx.currentPart);
        oChildren.setAttribute("href", source);
      }
      appendChildren(oSvg, oChildren);
      requestAnimationFrame(() => {
        const bb = oSvg.firstElementChild.getBBox();
        oSvg.setAttribute("width", `${Math.ceil(bb.x + bb.width)}`);
        oSvg.setAttribute("height", `${Math.ceil(bb.y + bb.height)}`);
      });
      if (parent) {
        oSvg.dataset.overflow = yield ctx.appendChildren(parent, oSvg);
      }
      return oSvg;
    });
  }
  function renderVmlPicture(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oPictureContainer = createElement("span");
      yield ctx.renderChildren(elem, oPictureContainer);
      return oPictureContainer;
    });
  }
  function renderVmlChildElement(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oVMLElement = createSvgElement(elem.tagName);
      Object.entries(elem.attrs).forEach(([k, v]) => oVMLElement.setAttribute(k, v));
      for (const child of elem.children) {
        if (child.type == DomType.VmlElement) {
          const oChild = yield renderVmlChildElement(child, ctx);
          appendChildren(oVMLElement, oChild);
        } else {
          yield ctx.renderElement(child, oVMLElement);
        }
      }
      return oVMLElement;
    });
  }
  function renderHeaderFooter(elem, tagName, parent, callbacks) {
    return __awaiter(this, void 0, void 0, function* () {
      const oElement = createElement(tagName);
      appendChildren(parent, oElement);
      callbacks.renderStyleValues(elem.cssStyle, oElement);
      yield callbacks.renderChildren(elem, oElement);
      return oElement;
    });
  }
  function renderParagraph(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c;
      const oParagraph = createElement("p");
      elem.children = ctx.resolveFieldRuns(elem.children);
      oParagraph.dataset.uuid = elem.uuid;
      ctx.renderClass(elem, oParagraph);
      Object.assign(elem.cssStyle, parseLineSpacing(elem.props, ctx.currentSectionProperties()));
      ctx.renderStyleValues(elem.cssStyle, oParagraph);
      ctx.renderCommonProperties(oParagraph.style, elem.props);
      const style = ctx.findStyle(elem.styleName);
      elem.props.tabs = unionBy_default(elem.props.tabs, (_a = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _a === void 0 ? void 0 : _a.tabs, "position");
      const numbering = (_b = elem.props.numbering) !== null && _b !== void 0 ? _b : (_c = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _c === void 0 ? void 0 : _c.numbering;
      if (numbering) {
        oParagraph.classList.add(ctx.numberingClass(numbering.id, numbering.level));
      }
      const shouldClear = elem.children.some((run) => {
        var _a2, _b2;
        const hasTopAndBottomDrawing = (_a2 = run === null || run === void 0 ? void 0 : run.children) === null || _a2 === void 0 ? void 0 : _a2.some((child) => child.type === DomType.Drawing && child.props.wrapType === WrapType.TopAndBottom);
        const hasClearBreak = (_b2 = run === null || run === void 0 ? void 0 : run.children) === null || _b2 === void 0 ? void 0 : _b2.some((child) => {
          var _a3;
          return child.type === DomType.Break && ((_a3 = child === null || child === void 0 ? void 0 : child.props) === null || _a3 === void 0 ? void 0 : _a3.clear);
        });
        return hasTopAndBottomDrawing || hasClearBreak;
      });
      if (shouldClear) {
        oParagraph.classList.add("clearfix");
      }
      oParagraph.style.position = "relative";
      const isOverflow = yield ctx.appendChildren(parent, oParagraph);
      if (isOverflow === Overflow.SELF) {
        oParagraph.dataset.overflow = Overflow.SELF;
        return oParagraph;
      }
      oParagraph.dataset.overflow = yield ctx.renderChildren(elem, oParagraph);
      return oParagraph;
    });
  }
  function renderRun(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      if (elem.fieldRun) {
        return null;
      }
      const oSpan = createElement("span");
      ctx.renderClass(elem, oSpan);
      ctx.renderStyleValues(elem.cssStyle, oSpan);
      const isOverflow = yield ctx.appendChildren(parent, oSpan);
      if (isOverflow === Overflow.SELF) {
        oSpan.dataset.overflow = Overflow.SELF;
        return oSpan;
      }
      if (elem.verticalAlign) {
        const oScript = createElement(elem.verticalAlign);
        appendChildren(oSpan, oScript);
        oSpan.dataset.overflow = yield ctx.renderChildren(elem, oScript);
        return oSpan;
      }
      oSpan.dataset.overflow = yield ctx.renderChildren(elem, oSpan);
      return oSpan;
    });
  }
  function renderText(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oText = document.createTextNode("");
      oText.dataset = { overflow: Overflow.UNCHECKED };
      appendChildren(parent, oText);
      if (ctx.currentPageIsSplit()) {
        oText.appendData(elem.text);
        return oText;
      }
      oText.dataset.overflow = yield ctx.renderChildren(elem, oText);
      return oText;
    });
  }
  function renderCharacter(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oCharacter = document.createTextNode(elem.char);
      oCharacter.dataset = { overflow: Overflow.UNCHECKED };
      oCharacter.dataset.overflow = yield ctx.appendChildren(parent, oCharacter);
      return oCharacter;
    });
  }
  function renderHyperlink(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oAnchor = createElement("a");
      ctx.renderStyleValues(elem.cssStyle, oAnchor);
      const isOverflow = yield ctx.appendChildren(parent, oAnchor);
      if (isOverflow === Overflow.SELF) {
        oAnchor.dataset.overflow = Overflow.SELF;
        return oAnchor;
      }
      if (elem.href) {
        oAnchor.href = elem.href;
      } else if (elem.id) {
        const rel = ctx.findExternalRelation(elem.id);
        oAnchor.href = rel === null || rel === void 0 ? void 0 : rel.target;
      }
      oAnchor.dataset.overflow = yield ctx.renderChildren(elem, oAnchor);
      return oAnchor;
    });
  }
  function resolveFieldRuns(runs, ctx) {
    var _a, _b, _c, _d, _e, _f;
    const pageNumber = ctx.currentPageNumber();
    const totalPages = ctx.pageCount();
    const result = [];
    let i = 0;
    while (i < runs.length) {
      const run = runs[i];
      const beginChar = run.type === DomType.Run && ((_a = run.children) === null || _a === void 0 ? void 0 : _a.find((c) => c.type === DomType.ComplexField));
      if (!beginChar || beginChar.charType !== "begin") {
        result.push(run);
        i++;
        continue;
      }
      let j = i + 1;
      let instruction = "";
      while (j < runs.length) {
        const childRun = runs[j];
        const fieldChar = (_b = childRun.children) === null || _b === void 0 ? void 0 : _b.find((c) => c.type === DomType.ComplexField);
        const instr = (_c = childRun.children) === null || _c === void 0 ? void 0 : _c.find((c) => c.type === DomType.Instruction);
        if (instr) {
          instruction += instr.text;
        }
        j++;
        if ((fieldChar === null || fieldChar === void 0 ? void 0 : fieldChar.charType) === "separate") {
          break;
        }
      }
      const resultStart = j;
      while (j < runs.length) {
        const fieldChar = (_d = runs[j].children) === null || _d === void 0 ? void 0 : _d.find((c) => c.type === DomType.ComplexField);
        if ((fieldChar === null || fieldChar === void 0 ? void 0 : fieldChar.charType) === "end") {
          break;
        }
        j++;
      }
      const endIndex = j;
      const fieldName = (_e = instruction.trim().split(/\s+/)[0]) === null || _e === void 0 ? void 0 : _e.toUpperCase();
      if (fieldName === "PAGE" || fieldName === "NUMPAGES") {
        const value = String(fieldName === "PAGE" ? pageNumber : totalPages);
        const template = (_f = runs[resultStart]) !== null && _f !== void 0 ? _f : run;
        const replacement = createFieldReplacement(value, template, run.parent);
        ctx.linkParents(replacement);
        ctx.processElement(replacement);
        result.push(replacement);
      } else {
        result.push(...runs.slice(i, endIndex + 1));
      }
      i = endIndex + 1;
    }
    return result;
  }
  function resolveSimpleField(elem, ctx) {
    var _a, _b, _c, _d;
    const pageNumber = ctx.currentPageNumber();
    const totalPages = ctx.pageCount();
    const fieldName = (_b = (_a = elem.instruction) === null || _a === void 0 ? void 0 : _a.trim().split(/\s+/)[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase();
    if (fieldName !== "PAGE" && fieldName !== "NUMPAGES") {
      return (_c = elem.children) !== null && _c !== void 0 ? _c : [];
    }
    const value = String(fieldName === "PAGE" ? pageNumber : totalPages);
    const template = (_d = elem.children) === null || _d === void 0 ? void 0 : _d[0];
    const replacement = createFieldReplacement(value, template, elem.parent);
    ctx.linkParents(replacement);
    ctx.processElement(replacement);
    return [replacement];
  }
  function renderBookmarkStart(elem, parent, ctx) {
    const oSpan = createElement("span");
    oSpan.id = elem.name;
    ctx.appendChildrenWithoutOverflow(parent, oSpan);
    oSpan.dataset.overflow = Overflow.SKIP;
    return oSpan;
  }
  function renderInserted(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const tagName = ctx.renderChanges() ? "ins" : "span";
      const oInserted = createElement(tagName);
      const isOverflow = yield ctx.appendChildren(parent, oInserted);
      if (isOverflow === Overflow.SELF) {
        oInserted.dataset.overflow = Overflow.SELF;
        return oInserted;
      }
      oInserted.dataset.overflow = yield ctx.renderChildren(elem, oInserted);
      return oInserted;
    });
  }
  function renderDeleted(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oDeleted = createElement("del");
      if (ctx.renderChanges() === false) {
        oDeleted.style.display = "none";
      }
      const isOverflow = yield ctx.appendChildren(parent, oDeleted);
      if (isOverflow === Overflow.SELF) {
        oDeleted.dataset.overflow = Overflow.SELF;
        return oDeleted;
      }
      oDeleted.dataset.overflow = yield ctx.renderChildren(elem, oDeleted);
      return oDeleted;
    });
  }
  function renderDeletedText(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      return ctx.renderText(elem, parent);
    });
  }
  function renderCommentRangeStart(commentStart) {
    return document.createComment(`start of comment #${commentStart.id}`);
  }
  function renderCommentRangeEnd(commentEnd) {
    return document.createComment(`end of comment #${commentEnd.id}`);
  }
  function renderCommentReference(commentRef, ctx) {
    const comment = ctx.findComment(commentRef.id);
    if (!comment)
      return null;
    return document.createComment(`comment #${comment.id} by ${comment.author} on ${comment.date}`);
  }
  function createFieldReplacement(value, template, parent) {
    return {
      type: DomType.Run,
      cssStyle: Object.assign({}, template === null || template === void 0 ? void 0 : template.cssStyle),
      verticalAlign: template === null || template === void 0 ? void 0 : template.verticalAlign,
      parent,
      fieldRun: false,
      children: [{
        type: DomType.Text,
        text: value,
        children: [{ type: DomType.Character, char: value }]
      }]
    };
  }
  function renderDefaultStyle(className) {
    const c = className;
    const styleText = `
			.${c} { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif }
			.${c}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; line-height:normal; font-weight:normal; } 
			.${c}-wrapper>section.${c} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
			.${c} { color: black; hyphens: auto; text-underline-position: from-font; }
			section.${c} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
            section.${c}>header { position: absolute; top: 0; z-index: 1; display: flex; flex-direction: column; justify-content: flex-end; }
			section.${c}>article { z-index: 1; }
			section.${c}>footer { position: absolute; bottom: 0; z-index: 1; }
			.${c} table { border-collapse: collapse; break-inside: avoid; }
			.${c} table td, .${c} table th { vertical-align: top; }
			.${c} p { margin: 0pt; min-height: 1em; }
			.${c} span { white-space: pre-wrap; overflow-wrap: break-word; }
			.${c} math { vertical-align: middle; }
			.${c} .${c}-math-paragraph { break-inside: avoid; page-break-inside: avoid; }
			.${c} .${c}-math-paragraph math { max-width: 100%; overflow: visible; }
			.${c} .${c}-math-paragraph math * { overflow-wrap: normal; }
			.${c} a { color: inherit; text-decoration: inherit; }
			.${c} img, .${c} svg { vertical-align: baseline; break-inside: avoid; page-break-inside: avoid; }
			.${c} .${c}-drawing { display: inline-block; break-inside: avoid; page-break-inside: avoid; }
			.${c} svg { fill: transparent; break-inside: avoid; page-break-inside: avoid; }
			.${c} .clearfix::after { content: ""; display: block; line-height: 0; clear: both; }
			.${c} br.break.column { break-after: column; }
			.${c} s.break.section { display: block; }
			.${c} s.break.section[data-type="nextColumn"] { break-before: column; }
		`;
    return createStyleElement(styleText);
  }
  function renderWrapper(className) {
    return createElement("div", { className: `${className}-wrapper` });
  }
  function processStyleName(className, baseClassName) {
    return className ? `${baseClassName}_${escapeClassName(className)}` : baseClassName;
  }
  function renderTheme(themePart, styleContainer, callbacks) {
    var _a, _b;
    const variables = {};
    const fontScheme = (_a = themePart.theme) === null || _a === void 0 ? void 0 : _a.fontScheme;
    if (fontScheme) {
      if (fontScheme.majorFont) {
        variables["--docx-majorHAnsi-font"] = fontScheme.majorFont.latinTypeface;
      }
      if (fontScheme.minorFont) {
        variables["--docx-minorHAnsi-font"] = fontScheme.minorFont.latinTypeface;
      }
    }
    const colorScheme = (_b = themePart.theme) === null || _b === void 0 ? void 0 : _b.colorScheme;
    if (colorScheme) {
      for (const [k, v] of Object.entries(colorScheme.colors)) {
        variables[`--docx-${k}-color`] = `#${v}`;
      }
    }
    const cssText = callbacks.styleToString(`.${callbacks.className}`, variables);
    styleContainer.appendChild(callbacks.createStyleElement(cssText));
  }
  function processStyles(styles, callbacks) {
    const stylesMap = keyBy_default(styles, "id");
    for (const childStyle of styles) {
      childStyle.cssName = callbacks.processStyleName(childStyle.id);
      if (childStyle.basedOn === null) {
        continue;
      }
      const parentStyle = stylesMap[childStyle.basedOn];
      if (parentStyle) {
        if (parentStyle === null || parentStyle === void 0 ? void 0 : parentStyle.paragraphProps) {
          childStyle.paragraphProps = merge_default({}, parentStyle === null || parentStyle === void 0 ? void 0 : parentStyle.paragraphProps, childStyle.paragraphProps);
        }
        if (parentStyle === null || parentStyle === void 0 ? void 0 : parentStyle.runProps) {
          childStyle.runProps = merge_default({}, parentStyle === null || parentStyle === void 0 ? void 0 : parentStyle.runProps, childStyle.runProps);
        }
        for (const parentRuleset of parentStyle.rulesets) {
          const childRuleset = childStyle.rulesets.find((r) => r.target == parentRuleset.target);
          if (childRuleset) {
            childRuleset.declarations = merge_default({}, parentRuleset.declarations, childRuleset.declarations);
          } else {
            childStyle.rulesets.push(Object.assign({}, parentRuleset));
          }
        }
      } else if (callbacks.options.debug) {
        console.warn(`Can't find base style ${childStyle.basedOn}`);
      }
    }
    return stylesMap;
  }
  function renderStyles(styles, callbacks) {
    var _a;
    let styleText = "";
    for (const style of styles) {
      for (const ruleset of style.rulesets) {
        let selector = `${(_a = style.label) !== null && _a !== void 0 ? _a : ""}.${style.cssName}`;
        if (style.label !== ruleset.target) {
          selector += ` ${ruleset.target}`;
        }
        if (style.isDefault) {
          selector = `.${callbacks.className} ${style.label}, ` + selector;
        }
        styleText += callbacks.styleToString(selector, ruleset.declarations);
      }
    }
    return callbacks.createStyleElement(styleText);
  }
  function renderFontTable(fontsPart, styleContainer, callbacks) {
    for (const f of fontsPart.fonts) {
      for (const ref of f.embedFontRefs) {
        callbacks.loadFont(ref.id, ref.key).then((fontData) => {
          const cssValues = {
            "font-family": f.name,
            src: `url(${fontData})`
          };
          if (ref.type == "bold" || ref.type == "boldItalic") {
            cssValues["font-weight"] = "bold";
          }
          if (ref.type == "italic" || ref.type == "boldItalic") {
            cssValues["font-style"] = "italic";
          }
          callbacks.appendComment(styleContainer, `docxjs ${f.name} font`);
          const cssText = callbacks.styleToString("@font-face", cssValues);
          styleContainer.appendChild(callbacks.createStyleElement(cssText));
          callbacks.refreshTabStops();
        });
      }
    }
  }
  function processNumberings(numberings, callbacks) {
    var _a;
    for (const num of numberings.filter((n) => n.pStyleName)) {
      const style = callbacks.findStyle(num.pStyleName);
      if ((_a = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _a === void 0 ? void 0 : _a.numbering) {
        style.paragraphProps.numbering.level = num.level;
      }
    }
  }
  function renderNumbering(numberings, styleContainer, callbacks) {
    let styleText = "";
    const resetCounters = [];
    for (const num of numberings) {
      const selector = `p.${callbacks.numberingClass(num.id, num.level)}`;
      let listStyleType = "none";
      if (num.bullet) {
        const valiable = `--${callbacks.className}-${num.bullet.src}`.toLowerCase();
        styleText += callbacks.styleToString(`${selector}:before`, {
          "content": "' '",
          "display": "inline-block",
          "background": `var(${valiable})`
        }, num.bullet.style);
        callbacks.loadNumberingImage(num.bullet.src).then((data) => {
          const text = `${callbacks.rootSelector} { ${valiable}: url(${data}) }`;
          styleContainer.appendChild(callbacks.createStyleElement(text));
        });
      } else if (num.levelText) {
        const counter = callbacks.numberingCounter(num.id, num.level);
        const counterReset = counter + " " + (num.start - 1);
        if (num.level > 0) {
          styleText += callbacks.styleToString(`p.${callbacks.numberingClass(num.id, num.level - 1)}`, {
            "counter-reset": counterReset
          });
        }
        resetCounters.push(counterReset);
        styleText += callbacks.styleToString(`${selector}:before`, Object.assign({ "content": callbacks.levelTextToContent(num.levelText, num.suff, num.id, callbacks.numFormatToCssValue(num.format)), "counter-increment": counter }, num.rStyle));
      } else {
        listStyleType = callbacks.numFormatToCssValue(num.format);
      }
      styleText += callbacks.styleToString(selector, Object.assign({ display: "list-item", "list-style-position": "inside", "list-style-type": listStyleType }, num.pStyle));
    }
    if (resetCounters.length > 0) {
      styleText += callbacks.styleToString(callbacks.rootSelector, {
        "counter-reset": resetCounters.join(" ")
      });
    }
    return callbacks.createStyleElement(styleText);
  }
  function numberingClass(className, id, lvl) {
    return `${className}-num-${id}-${lvl}`;
  }
  function styleToString(selectors, declarations, cssText = null) {
    let result = `${selectors} {\r
`;
    for (const key in declarations) {
      if (key.startsWith("$")) {
        continue;
      }
      result += `  ${key}: ${declarations[key]};\r
`;
    }
    if (cssText) {
      result += cssText;
    }
    return result + "}\r\n";
  }
  function numberingCounter(className, id, lvl) {
    return `${className}-num-${id}-${lvl}`;
  }
  function levelTextToContent(text, suff, id, numformat, resolveCounter) {
    var _a;
    const suffMap = {
      tab: "\\9",
      space: "\\a0"
    };
    const result = text.replace(/%\d*/g, (s) => {
      const lvl = parseInt(s.substring(1), 10) - 1;
      return `"counter(${resolveCounter(id, lvl)}, ${numformat})"`;
    });
    return `"${result}${(_a = suffMap[suff]) !== null && _a !== void 0 ? _a : ""}"`;
  }
  function numFormatToCssValue(format) {
    var _a;
    const mapping = {
      none: "none",
      bullet: "disc",
      decimal: "decimal",
      lowerLetter: "lower-alpha",
      upperLetter: "upper-alpha",
      lowerRoman: "lower-roman",
      upperRoman: "upper-roman",
      decimalZero: "decimal-leading-zero",
      aiueo: "katakana",
      aiueoFullWidth: "katakana",
      chineseCounting: "simp-chinese-informal",
      chineseCountingThousand: "simp-chinese-informal",
      chineseLegalSimplified: "simp-chinese-formal",
      chosung: "hangul-consonant",
      ideographDigital: "cjk-ideographic",
      ideographTraditional: "cjk-heavenly-stem",
      ideographLegalTraditional: "trad-chinese-formal",
      ideographZodiac: "cjk-earthly-branch",
      iroha: "katakana-iroha",
      irohaFullWidth: "katakana-iroha",
      japaneseCounting: "japanese-informal",
      japaneseDigitalTenThousand: "cjk-decimal",
      japaneseLegal: "japanese-formal",
      thaiNumbers: "thai",
      koreanCounting: "korean-hangul-formal",
      koreanDigital: "korean-hangul-formal",
      koreanDigital2: "korean-hanja-informal",
      hebrew1: "hebrew",
      hebrew2: "hebrew",
      hindiNumbers: "devanagari",
      ganada: "hangul",
      taiwaneseCounting: "cjk-ideographic",
      taiwaneseCountingThousand: "cjk-ideographic",
      taiwaneseDigital: "cjk-decimal"
    };
    return (_a = mapping[format]) !== null && _a !== void 0 ? _a : format;
  }
  function resolveHeaderFooterReferences(currentRefs, previousRefs) {
    const resolvedRefs = [...currentRefs !== null && currentRefs !== void 0 ? currentRefs : []];
    const resolvedTypes = new Set(resolvedRefs.map((ref) => ref.type));
    for (const ref of previousRefs !== null && previousRefs !== void 0 ? previousRefs : []) {
      if (!resolvedTypes.has(ref.type)) {
        resolvedRefs.push(ref);
        resolvedTypes.add(ref.type);
      }
    }
    return resolvedRefs;
  }
  function selectHeaderFooterReference(refs, context) {
    if (!refs)
      return void 0;
    if (context.titlePage && context.isFirstSectionPage) {
      return refs.find((ref) => ref.type === "first");
    }
    if (context.evenAndOddHeaders) {
      if (context.isEvenPage) {
        return refs.find((ref) => ref.type === "even");
      }
      return refs.find((ref) => ref.type === "default" || ref.type === "odd");
    }
    return refs.find((ref) => ref.type === "default");
  }
  function createPage$1(className, props, wrapper, options) {
    const oPage = createElement("section", { className });
    if (props) {
      oPage.dataset.sectionId = props.sectionId;
      if (props.pageMargins) {
        oPage.style.paddingLeft = props.pageMargins.left;
        oPage.style.paddingRight = props.pageMargins.right;
        oPage.style.paddingTop = props.pageMargins.top;
        oPage.style.paddingBottom = props.pageMargins.bottom;
      }
      if (props.pageSize) {
        if (!options.ignoreWidth) {
          oPage.style.width = props.pageSize.width;
        }
        if (!options.ignoreHeight) {
          oPage.style.minHeight = props.pageSize.height;
        }
      }
    }
    wrapper.appendChild(oPage);
    return oPage;
  }
  function createPageContent(props) {
    const oArticle = createElement("article");
    if (props.columns) {
      const { count, space, separator } = props.columns;
      if (count > 1) {
        oArticle.style.columnCount = `${count}`;
        oArticle.style.columnGap = space;
        oArticle.style.columnFill = "auto";
      }
      if (separator) {
        oArticle.style.columnRule = "1px solid black";
      }
    }
    return oArticle;
  }
  function renderHeaderFooterRef(refs, props, pageIndex, isFirstPage, layoutContext, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c, _d, _e, _f;
      if (!refs) {
        return null;
      }
      const ref = selectHeaderFooterReference(refs, {
        titlePage: props.titlePage,
        isFirstSectionPage: (_a = layoutContext === null || layoutContext === void 0 ? void 0 : layoutContext.isFirstSectionPage) !== null && _a !== void 0 ? _a : isFirstPage,
        evenAndOddHeaders: ctx.evenAndOddHeaders,
        isEvenPage: (_b = layoutContext === null || layoutContext === void 0 ? void 0 : layoutContext.isEvenPage) !== null && _b !== void 0 ? _b : (pageIndex + 1) % 2 === 0
      });
      if (!ref) {
        console.error("Header/Footer reference is not found");
        return null;
      }
      const part = ctx.document.findPartByRelId(ref.id, ctx.document.documentPart);
      if (!part) {
        console.error(`Part corresponding to the reference with id:${ref.id} is not found`);
        return null;
      }
      ctx.setCurrentPart(part);
      if (!ctx.usedHeaderFooterParts.includes(part.path)) {
        ctx.linkParents(part.rootElement);
        ctx.processElement(part.rootElement);
        ctx.usedHeaderFooterParts.push(part.path);
      }
      let oElement = null;
      switch (part.rootElement.type) {
        case DomType.Header:
          part.rootElement.cssStyle = {
            left: (_c = props.pageMargins) === null || _c === void 0 ? void 0 : _c.left,
            "padding-top": props.pageMargins.header,
            width: (_d = props.contentSize) === null || _d === void 0 ? void 0 : _d.width
          };
          oElement = yield ctx.renderHeaderFooter(part.rootElement, "header", parent);
          break;
        case DomType.Footer:
          part.rootElement.cssStyle = {
            left: (_e = props.pageMargins) === null || _e === void 0 ? void 0 : _e.left,
            "padding-bottom": props.pageMargins.footer,
            width: (_f = props.contentSize) === null || _f === void 0 ? void 0 : _f.width
          };
          oElement = yield ctx.renderHeaderFooter(part.rootElement, "footer", parent);
          break;
        default:
          console.warn("set header/footer style error", part.rootElement.type);
          break;
      }
      ctx.setCurrentPart(null);
      return oElement;
    });
  }
  function explicitBreakToRegionBreak(kind) {
    return kind === "page" ? "page" : "column";
  }
  function scanElementBreaks(element, path = []) {
    var _a, _b;
    const hints = [];
    if (element.type === DomType.LastRenderedPageBreak) {
      hints.push({ kind: "lastRenderedPageBreak", path });
    }
    if (element.type === DomType.Break) {
      const breakType = element.break;
      if (breakType === BreakType.Page) {
        return { explicitBreak: "page", hints };
      }
      if (breakType === BreakType.Column) {
        return { explicitBreak: "column", hints };
      }
    }
    for (let i = 0; i < ((_b = (_a = element.children) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); i++) {
      const childScan = scanElementBreaks(element.children[i], [...path, i]);
      hints.push(...childScan.hints);
      if (childScan.explicitBreak) {
        return { explicitBreak: childScan.explicitBreak, hints };
      }
    }
    return { hints };
  }
  function makeRegion(source, children, breakBefore, hints) {
    return Object.assign({
      section: source.section,
      children,
      breakBefore
    }, hints.length > 0 ? { hints } : {});
  }
  function splitRegionsByExplicitBreaks(regions) {
    var _a;
    const result = [];
    for (const region of regions) {
      let currentChildren = [];
      let currentBreakBefore = region.breakBefore;
      let currentHints = [...(_a = region.hints) !== null && _a !== void 0 ? _a : []];
      for (let i = 0; i < region.children.length; i++) {
        const child = region.children[i];
        const scan = scanElementBreaks(child, [i]);
        if (scan.hints.some((h) => h.kind === "lastRenderedPageBreak") && currentChildren.length > 0) {
          result.push(makeRegion(region, currentChildren, currentBreakBefore, currentHints));
          currentChildren = [];
          currentHints = [];
          currentBreakBefore = "page";
        }
        currentChildren.push(child);
        currentHints.push(...scan.hints);
        if (!scan.explicitBreak) {
          continue;
        }
        result.push(makeRegion(region, currentChildren, currentBreakBefore, currentHints));
        currentChildren = [];
        currentHints = [];
        currentBreakBefore = explicitBreakToRegionBreak(scan.explicitBreak);
      }
      if (currentChildren.length > 0 || result.length === 0) {
        result.push(makeRegion(region, currentChildren, currentBreakBefore, currentHints));
      }
    }
    return result;
  }
  function normalizeRegionBreakBefore(breakBefore) {
    return breakBefore !== null && breakBefore !== void 0 ? breakBefore : "none";
  }
  function interpretRegionBreakBefore(breakBefore) {
    const normalizedBreak = normalizeRegionBreakBefore(breakBefore);
    switch (normalizedBreak) {
      case "page":
        return {
          breakBefore: normalizedBreak,
          startsNewPage: true,
          targetParity: null
        };
      case "evenPage":
        return {
          breakBefore: normalizedBreak,
          startsNewPage: true,
          targetParity: "even"
        };
      case "oddPage":
        return {
          breakBefore: normalizedBreak,
          startsNewPage: true,
          targetParity: "odd"
        };
      case "none":
      case "column":
        return {
          breakBefore: normalizedBreak,
          startsNewPage: false,
          targetParity: null
        };
    }
  }
  function pageMatchesParity(pageNumber, parity) {
    return parity === "even" ? pageNumber % 2 === 0 : pageNumber % 2 !== 0;
  }
  function needsParityBlankPage(nextPageNumber2, targetParity) {
    return targetParity !== null && !pageMatchesParity(nextPageNumber2, targetParity);
  }
  function createPage(pageNumber) {
    return {
      regions: [],
      pageNumber,
      sectionPageIndexes: /* @__PURE__ */ new Map()
    };
  }
  function nextPageNumber(pages) {
    const lastPage = pages[pages.length - 1];
    return lastPage ? lastPage.pageNumber + 1 : 1;
  }
  function addRegionToPage(page, region, sectionPageCounts) {
    var _a, _b;
    page.regions.push(region);
    const sectionId = (_a = region.section) === null || _a === void 0 ? void 0 : _a.sectionId;
    if (!sectionId || page.sectionPageIndexes.has(sectionId)) {
      return;
    }
    const sectionPageIndex = (_b = sectionPageCounts.get(sectionId)) !== null && _b !== void 0 ? _b : 0;
    sectionPageCounts.set(sectionId, sectionPageIndex + 1);
    page.sectionPageIndexes.set(sectionId, sectionPageIndex);
  }
  function buildPhysicalPages(regions, _options = {}) {
    const pages = [];
    const sectionPageCounts = /* @__PURE__ */ new Map();
    for (const region of regions) {
      const breakPlacement = interpretRegionBreakBefore(region.breakBefore);
      let currentPage = pages[pages.length - 1];
      if (!currentPage) {
        currentPage = createPage(1);
        pages.push(currentPage);
      } else if (breakPlacement.startsNewPage) {
        let regionPageNumber = nextPageNumber(pages);
        if (needsParityBlankPage(regionPageNumber, breakPlacement.targetParity)) {
          pages.push(createPage(regionPageNumber));
          regionPageNumber += 1;
        }
        currentPage = createPage(regionPageNumber);
        pages.push(currentPage);
      }
      addRegionToPage(currentPage, region, sectionPageCounts);
    }
    return pages;
  }
  function sectionTypeToBreak(type) {
    switch (type) {
      case SectionType.Continuous:
        return "none";
      case SectionType.NextColumn:
        return "column";
      case SectionType.EvenPage:
        return "evenPage";
      case SectionType.OddPage:
        return "oddPage";
      default:
        return "page";
    }
  }
  function getParagraphSectionProps(el) {
    var _a;
    if (el.type !== DomType.Paragraph)
      return void 0;
    return (_a = el.props) === null || _a === void 0 ? void 0 : _a.sectionProperties;
  }
  function buildSectionStream(bodyChildren, rootSectProps) {
    const regions = [];
    let currentChildren = [];
    let pendingBreak = "none";
    for (const el of bodyChildren) {
      currentChildren.push(el);
      const sectProps = getParagraphSectionProps(el);
      if (sectProps) {
        regions.push({
          section: sectProps,
          children: currentChildren,
          breakBefore: pendingBreak
        });
        currentChildren = [];
        pendingBreak = sectionTypeToBreak(sectProps.type);
      }
    }
    if (currentChildren.length > 0 || regions.length === 0) {
      regions.push({
        section: rootSectProps,
        children: currentChildren,
        breakBefore: pendingBreak
      });
    }
    return regions;
  }
  function splitDocumentIntoPhysicalPages(documentElement) {
    var _a;
    const sectionRegions = normalizeRegionSections(buildSectionStream((_a = documentElement.children) !== null && _a !== void 0 ? _a : [], documentElement.sectProps));
    const regions = splitRegionsByExplicitBreaks(sectionRegions);
    return {
      regions,
      pages: buildPhysicalPages(regions)
    };
  }
  function normalizeRegionSections(regions) {
    let previousSection;
    return regions.map((region) => {
      const section = normalizeSection(region.section, previousSection);
      previousSection = section;
      return Object.assign(Object.assign({}, region), { section });
    });
  }
  function normalizeSection(section, previousSection) {
    var _a;
    return Object.assign(Object.assign({}, section), { sectionId: (_a = section.sectionId) !== null && _a !== void 0 ? _a : uuid(), headerRefs: resolveHeaderFooterReferences(section.headerRefs, previousSection === null || previousSection === void 0 ? void 0 : previousSection.headerRefs), footerRefs: resolveHeaderFooterReferences(section.footerRefs, previousSection === null || previousSection === void 0 ? void 0 : previousSection.footerRefs) });
  }
  function copyStyleProperties(input, output, attrs = null) {
    if (!input) {
      return output;
    }
    if (output == null) {
      output = {};
    }
    if (attrs == null) {
      attrs = Object.getOwnPropertyNames(input);
    }
    for (const key of attrs) {
      if (input.hasOwnProperty(key) && !output.hasOwnProperty(key))
        output[key] = input[key];
    }
    return output;
  }
  function processTable(table) {
    for (const r of table.children) {
      for (const c of r.children) {
        c.cssStyle = copyStyleProperties(table.cellStyle, c.cssStyle, [
          "border-left",
          "border-right",
          "border-top",
          "border-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "padding-bottom"
        ]);
      }
    }
  }
  function processElement(element) {
    if (element.children) {
      for (const e of element.children) {
        if (e.type === DomType.Table) {
          processTable(e);
        }
        processElement(e);
      }
    }
  }
  function linkParents(element) {
    if (element.children) {
      for (const e of element.children) {
        e.parent = element;
        linkParents(e);
      }
    }
  }
  function renderStyleValues(style, output) {
    for (const k in style) {
      if (k.startsWith("$")) {
        output.setAttribute(k.slice(1), style[k]);
      } else {
        output.style[k] = style[k];
      }
    }
  }
  function renderCommonProperties(style, props) {
    if (props == null)
      return;
    if (props.color) {
      style["color"] = props.color;
    }
    if (props.fontSize) {
      style["font-size"] = props.fontSize;
    }
  }
  function renderClass(input, output, processStyleName2) {
    if (input.className) {
      output.className = input.className;
    }
    if (input.styleName) {
      output.classList.add(processStyleName2(input.styleName));
    }
  }
  function renderTable(elem, parent, ctx, cbs) {
    return __awaiter(this, void 0, void 0, function* () {
      const oTable = createElement("table");
      oTable.dataset.uuid = uuid();
      ctx.tableCellPositions.push(ctx.currentCellPosition);
      ctx.tableVerticalMerges.push(ctx.currentVerticalMerge);
      ctx.currentVerticalMerge = {};
      ctx.currentCellPosition = { col: 0, row: 0 };
      cbs.renderClass(elem, oTable);
      cbs.renderStyleValues(elem.cssStyle, oTable);
      let is_overflow;
      is_overflow = yield cbs.appendChildren(parent, oTable);
      if (is_overflow === Overflow.SELF) {
        oTable.dataset.overflow = Overflow.SELF;
        return oTable;
      }
      if (elem.columns) {
        renderTableColumns(elem.columns, oTable);
      }
      oTable.dataset.overflow = yield cbs.renderChildren(elem, oTable);
      ctx.currentVerticalMerge = ctx.tableVerticalMerges.pop();
      ctx.currentCellPosition = ctx.tableCellPositions.pop();
      return oTable;
    });
  }
  function renderTableColumns(columns, parent) {
    const oColGroup = createElement("colgroup");
    appendChildren(parent, oColGroup);
    for (const col of columns) {
      const oCol = createElement("col");
      if (col.width) {
        oCol.style.width = col.width;
      }
      appendChildren(oColGroup, oCol);
    }
    return oColGroup;
  }
  function renderTableRow(elem, parent, ctx, cbs) {
    return __awaiter(this, void 0, void 0, function* () {
      const oTableRow = createElement("tr");
      ctx.currentCellPosition.col = 0;
      cbs.renderClass(elem, oTableRow);
      cbs.renderStyleValues(elem.cssStyle, oTableRow);
      let is_overflow;
      is_overflow = yield cbs.appendChildren(parent, oTableRow);
      if (is_overflow === Overflow.SELF) {
        oTableRow.dataset.overflow = Overflow.SELF;
        return oTableRow;
      }
      oTableRow.dataset.overflow = yield cbs.renderChildren(elem, oTableRow);
      ctx.currentCellPosition.row++;
      return oTableRow;
    });
  }
  function renderTableCell(elem, parent, ctx, cbs) {
    return __awaiter(this, void 0, void 0, function* () {
      const oTableCell = createElement("td");
      const key = ctx.currentCellPosition.col;
      if (elem.verticalMerge) {
        if (elem.verticalMerge === "restart") {
          ctx.currentVerticalMerge[key] = oTableCell;
          oTableCell.rowSpan = 1;
        } else if (ctx.currentVerticalMerge[key]) {
          ctx.currentVerticalMerge[key].rowSpan += 1;
          oTableCell.style.display = "none";
        }
      } else {
        ctx.currentVerticalMerge[key] = null;
      }
      cbs.renderClass(elem, oTableCell);
      cbs.renderStyleValues(elem.cssStyle, oTableCell);
      if (elem.span) {
        oTableCell.colSpan = elem.span;
      }
      ctx.currentCellPosition.col += oTableCell.colSpan;
      let is_overflow;
      is_overflow = yield cbs.appendChildren(parent, oTableCell);
      if (is_overflow === Overflow.SELF) {
        oTableCell.dataset.overflow = Overflow.SELF;
        return oTableCell;
      }
      oTableCell.dataset.overflow = yield cbs.renderChildren(elem, oTableCell);
      return oTableCell;
    });
  }
  var mathNs = "http://www.w3.org/1998/Math/MathML";
  var mathOperators = /* @__PURE__ */ new Set(["=", "+", "-", "\u2212", "*", "/", "\xD7", "\xF7", "\xB1", "<", ">", "\u2264", "\u2265"]);
  function mathJustificationToTextAlign(justification) {
    switch (justification) {
      case "left":
        return "left";
      case "right":
        return "right";
      case "center":
      case "centerGroup":
      default:
        return "center";
    }
  }
  function renderMmlMathParagraph(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a;
      const oContainer = createElement("div");
      oContainer.classList.add(`${ctx.className}-math-paragraph`);
      oContainer.style.textAlign = mathJustificationToTextAlign((_a = elem.props) === null || _a === void 0 ? void 0 : _a.justification);
      oContainer.style.textIndent = "0px";
      oContainer.style.breakInside = "avoid";
      oContainer.style.whiteSpace = "normal";
      oContainer.dataset.overflow = yield ctx.renderChildren(elem, oContainer);
      return oContainer;
    });
  }
  function renderMmlRadical(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a;
      const base = elem.children.find((el) => el.type === DomType.MmlBase);
      let oParent;
      if ((_a = elem.props) === null || _a === void 0 ? void 0 : _a.hideDegree) {
        oParent = createElementNS(mathNs, "msqrt", null);
        yield ctx.renderElements([base], oParent);
        return oParent;
      }
      const degree = elem.children.find((el) => el.type === DomType.MmlDegree);
      oParent = createElementNS(mathNs, "mroot", null);
      yield ctx.renderElements([base, degree], oParent);
      return oParent;
    });
  }
  function renderMmlDelimiter(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b;
      const oMrow = createElementNS(mathNs, "mrow", null);
      const oBegin = createElementNS(mathNs, "mo", null, [(_a = elem.props.beginChar) !== null && _a !== void 0 ? _a : "("]);
      appendChildren(oMrow, oBegin);
      yield ctx.renderElements(elem.children, oMrow);
      const oEnd = createElementNS(mathNs, "mo", null, [(_b = elem.props.endChar) !== null && _b !== void 0 ? _b : ")"]);
      appendChildren(oMrow, oEnd);
      return oMrow;
    });
  }
  function renderMmlNary(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a, _b;
      const grouped = keyBy_default(elem.children, "type");
      const sup = grouped[DomType.MmlSuperArgument];
      const sub = grouped[DomType.MmlSubArgument];
      const supElem = sup ? yield ctx.renderElement(sup) : null;
      const subElem = sub ? yield ctx.renderElement(sub) : null;
      const charElem = createElementNS(mathNs, "mo", null, [(_b = (_a = elem.props) === null || _a === void 0 ? void 0 : _a.char) !== null && _b !== void 0 ? _b : "\u222B"]);
      let operatorElem = charElem;
      if (supElem && subElem) {
        operatorElem = createElementNS(mathNs, "munderover", null, [charElem, subElem, supElem]);
      } else if (supElem) {
        operatorElem = createElementNS(mathNs, "mover", null, [charElem, supElem]);
      } else if (subElem) {
        operatorElem = createElementNS(mathNs, "munder", null, [charElem, subElem]);
      }
      const oMrow = createElementNS(mathNs, "mrow", null);
      appendChildren(oMrow, operatorElem);
      if (grouped[DomType.MmlBase]) {
        yield ctx.renderElements(grouped[DomType.MmlBase].children, oMrow);
      }
      return oMrow;
    });
  }
  function renderMmlPreSubSuper(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const children = [];
      const grouped = keyBy_default(elem.children, "type");
      const sup = grouped[DomType.MmlSuperArgument];
      const sub = grouped[DomType.MmlSubArgument];
      const supElem = sup ? yield ctx.renderElement(sup) : null;
      const subElem = sub ? yield ctx.renderElement(sub) : null;
      const stubElem = createElementNS(mathNs, "mo", null);
      children.push(createElementNS(mathNs, "msubsup", null, [stubElem, subElem, supElem]));
      const oMrow = createElementNS(mathNs, "mrow", null);
      appendChildren(oMrow, children);
      yield ctx.renderElements(grouped[DomType.MmlBase].children, oMrow);
      return oMrow;
    });
  }
  function renderMmlGroupChar(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const tagName = elem.props.verticalJustification === "bot" ? "mover" : "munder";
      const oGroupChar = yield ctx.renderContainerNS(elem, mathNs, tagName);
      if (elem.props.char) {
        const oMo = createElementNS(mathNs, "mo", null, [elem.props.char]);
        appendChildren(oGroupChar, oMo);
      }
      return oGroupChar;
    });
  }
  function renderMmlBar(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oMrow = yield ctx.renderContainerNS(elem, mathNs, "mrow");
      switch (elem.props.position) {
        case "top":
          oMrow.style.textDecoration = "overline";
          break;
        case "bottom":
          oMrow.style.textDecoration = "underline";
          break;
      }
      return oMrow;
    });
  }
  function mathText(elem) {
    var _a, _b, _c, _d;
    if (elem.type === DomType.Text || elem.type === DomType.DeletedText) {
      return (_a = elem.text) !== null && _a !== void 0 ? _a : "";
    }
    if (elem.type === DomType.Character) {
      return (_b = elem.char) !== null && _b !== void 0 ? _b : "";
    }
    return (_d = (_c = elem.children) === null || _c === void 0 ? void 0 : _c.map((child) => mathText(child)).join("")) !== null && _d !== void 0 ? _d : "";
  }
  function appendMathToken(parent, text, tagName, normal = false) {
    const token = createElementNS(mathNs, tagName, null, [text]);
    if (normal) {
      token.setAttribute("mathvariant", "normal");
    }
    appendChildren(parent, token);
  }
  function appendMathText(parent, text, normalIdentifier = false) {
    var _a;
    if (!text) {
      return;
    }
    if (normalIdentifier) {
      appendMathToken(parent, text, "mi", true);
      return;
    }
    const parts = (_a = text.match(/\d+(?:\.\d+)?|[A-Za-zΑ-ω]|[^\s]/g)) !== null && _a !== void 0 ? _a : [];
    for (const part of parts) {
      if (/^\d/.test(part)) {
        appendMathToken(parent, part, "mn");
      } else if (mathOperators.has(part)) {
        appendMathToken(parent, part, "mo");
      } else {
        appendMathToken(parent, part, "mi");
      }
    }
  }
  function renderMmlRun(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a;
      const oMrow = createElementNS(mathNs, "mrow");
      ctx.renderClass(elem, oMrow);
      ctx.renderStyleValues(elem.cssStyle, oMrow);
      appendMathText(oMrow, mathText(elem), ((_a = elem.parent) === null || _a === void 0 ? void 0 : _a.type) === DomType.MmlFunctionName);
      return oMrow;
    });
  }
  function renderMllList(elem, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oMtable = createElementNS(mathNs, "mtable");
      ctx.renderClass(elem, oMtable);
      ctx.renderStyleValues(elem.cssStyle, oMtable);
      for (const child of elem.children) {
        const oChild = yield ctx.renderElement(child);
        const oMtd = createElementNS(mathNs, "mtd", null, [oChild]);
        const oMtr = createElementNS(mathNs, "mtr", null, [oMtd]);
        appendChildren(oMtable, oMtr);
      }
      return oMtable;
    });
  }
  var ns = {
    mathML: "http://www.w3.org/1998/Math/MathML"
  };
  function tableCallbacks(ctx) {
    return {
      renderChildren: (e, p) => ctx.renderChildren(e, p),
      appendChildren: (p, c) => ctx.appendChildren(p, c),
      renderClass: (e, o) => ctx.renderClass(e, o),
      renderStyleValues: (s, o) => ctx.renderStyleValues(s, o)
    };
  }
  function renderTab(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      var _a;
      const tabSpan = createElement("span");
      tabSpan.innerHTML = "&nbsp;";
      tabSpan.className = `${ctx.className}-tab-stop`;
      const stops = (_a = findParent(elem, DomType.Paragraph).props) === null || _a === void 0 ? void 0 : _a.tabs;
      ctx.currentTabs.push({ stops, span: tabSpan });
      if (parent) {
        yield ctx.appendChildren(parent, tabSpan);
      }
      return tabSpan;
    });
  }
  function renderSymbol(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oSymbol = createElement("span");
      oSymbol.style.fontFamily = elem.font;
      oSymbol.innerHTML = `&#x${elem.char};`;
      oSymbol.dataset.overflow = yield ctx.appendChildren(parent, oSymbol);
      return oSymbol;
    });
  }
  function renderBreak(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      let oBreak;
      switch (elem.break) {
        case BreakType.Page:
          oBreak = createElement("br");
          oBreak.classList.add("break", "page");
          break;
        case BreakType.Column:
          oBreak = createElement("br");
          oBreak.classList.add("break", "column");
          break;
        case BreakType.TextWrapping:
        default:
          oBreak = createElement("br");
          oBreak.classList.add("break", "textWrap");
          break;
      }
      oBreak.dataset.overflow = yield ctx.appendChildren(parent, oBreak);
      return oBreak;
    });
  }
  function renderLastRenderedPageBreak(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oLastRenderedPageBreak = createElement("wbr");
      oLastRenderedPageBreak.classList.add("lastRenderedPageBreak");
      oLastRenderedPageBreak.dataset.overflow = yield ctx.appendChildren(parent, oLastRenderedPageBreak);
      return oLastRenderedPageBreak;
    });
  }
  function renderSectionBreak(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      const oSectionBreak = createElement("s");
      oSectionBreak.classList.add("break", "section");
      oSectionBreak.dataset.overflow = yield ctx.appendChildren(parent, oSectionBreak);
      oSectionBreak.dataset.type = elem.break;
      return oSectionBreak;
    });
  }
  function dispatchElement(elem, parent, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
      let oNode;
      switch (elem.type) {
        case DomType.Paragraph:
          oNode = yield renderParagraph(elem, parent, ctx);
          break;
        case DomType.Run:
          oNode = yield renderRun(elem, parent, ctx);
          break;
        case DomType.SimpleField:
          yield ctx.renderElements(resolveSimpleField(elem, ctx), parent);
          oNode = null;
          break;
        case DomType.Text:
          oNode = yield renderText(elem, parent, ctx);
          break;
        case DomType.Character:
          oNode = yield renderCharacter(elem, parent, ctx);
          break;
        case DomType.Table:
          oNode = yield renderTable(elem, parent, ctx.tableCtx, tableCallbacks(ctx));
          break;
        case DomType.Row:
          oNode = yield renderTableRow(elem, parent, ctx.tableCtx, tableCallbacks(ctx));
          break;
        case DomType.Cell:
          oNode = yield renderTableCell(elem, parent, ctx.tableCtx, tableCallbacks(ctx));
          break;
        case DomType.Hyperlink:
          oNode = yield renderHyperlink(elem, parent, ctx);
          break;
        case DomType.Drawing:
          oNode = yield renderDrawing(elem, parent, ctx);
          break;
        case DomType.Image:
          oNode = yield renderImage(elem, parent, ctx);
          break;
        case DomType.Shape:
          oNode = yield renderShape(elem, parent, ctx);
          break;
        case DomType.BookmarkStart:
          oNode = renderBookmarkStart(elem, parent, ctx);
          break;
        case DomType.BookmarkEnd:
          oNode = null;
          break;
        case DomType.Tab:
          oNode = yield renderTab(elem, parent, ctx);
          break;
        case DomType.Symbol:
          oNode = yield renderSymbol(elem, parent, ctx);
          break;
        case DomType.Break:
          oNode = yield renderBreak(elem, parent, ctx);
          break;
        case DomType.LastRenderedPageBreak:
          oNode = yield renderLastRenderedPageBreak(elem, parent, ctx);
          break;
        case DomType.SectionBreak:
          oNode = yield renderSectionBreak(elem, parent, ctx);
          break;
        case DomType.Inserted:
          oNode = yield renderInserted(elem, parent, ctx);
          break;
        case DomType.Deleted:
          oNode = yield renderDeleted(elem, parent, ctx);
          break;
        case DomType.DeletedText:
          oNode = yield renderDeletedText(elem, parent, ctx);
          break;
        case DomType.NoBreakHyphen:
          oNode = createElement("wbr");
          if (parent) {
            yield ctx.appendChildren(parent, oNode);
          }
          break;
        case DomType.CommentRangeStart:
          oNode = renderCommentRangeStart(elem);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.CommentRangeEnd:
          oNode = renderCommentRangeEnd(elem);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.CommentReference:
          oNode = renderCommentReference(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.Footer:
          oNode = yield ctx.renderHeaderFooter(elem, "footer", parent);
          break;
        case DomType.Header:
          oNode = yield ctx.renderHeaderFooter(elem, "header", parent);
          break;
        case DomType.Footnote:
        case DomType.Endnote:
          oNode = yield ctx.renderContainer(elem, "li");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.FootnoteReference:
          oNode = renderFootnoteReference(elem, ctx.currentFootnoteIds);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.EndnoteReference:
          oNode = renderEndnoteReference(elem, ctx.currentEndnoteIds);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.VmlElement:
          oNode = yield renderVmlElement(elem, parent, ctx);
          break;
        case DomType.VmlPicture:
          oNode = yield renderVmlPicture(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlMath:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "math", {
            xmlns: ns.mathML
          });
          if (parent) {
            oNode.dataset.overflow = yield ctx.appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlMathParagraph:
          oNode = yield renderMmlMathParagraph(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlFraction:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mfrac");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlBase:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, elem.parent.type == DomType.MmlMatrixRow ? "mtd" : "mrow");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlNumerator:
        case DomType.MmlDenominator:
        case DomType.MmlFunction:
        case DomType.MmlLimit:
        case DomType.MmlBox:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mrow");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlGroupChar:
          oNode = yield renderMmlGroupChar(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlLimitLower:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "munder");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlMatrix:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mtable");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlMatrixRow:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mtr");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlRadical:
          oNode = yield renderMmlRadical(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlSuperscript:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "msup");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlSubscript:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "msub");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlDegree:
        case DomType.MmlSuperArgument:
        case DomType.MmlSubArgument:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mrow");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlFunctionName:
          oNode = yield ctx.renderContainerNS(elem, ns.mathML, "mrow");
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlDelimiter:
          oNode = yield renderMmlDelimiter(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlRun:
          oNode = yield renderMmlRun(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlNary:
          oNode = yield renderMmlNary(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlPreSubSuper:
          oNode = yield renderMmlPreSubSuper(elem, ctx);
          if (parent) {
            appendChildren(parent, oNode);
          }
          break;
        case DomType.MmlBar:
          oNode = yield renderMmlBar(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
        case DomType.MmlEquationArray:
          oNode = yield renderMllList(elem, ctx);
          if (parent)
            appendChildren(parent, oNode);
          break;
      }
      return oNode !== null && oNode !== void 0 ? oNode : null;
    });
  }
  var HtmlRendererSync = class {
    constructor() {
      this.className = "docx";
      this.styleMap = {};
      this.footnoteMap = {};
      this.endnoteMap = {};
      this.session = null;
    }
    render(document_1, bodyContainer_1) {
      return __awaiter(this, arguments, void 0, function* (document2, bodyContainer, styleContainer = null, options) {
        var _a;
        this.document = document2;
        this.options = options;
        this.className = options.className;
        this.rootSelector = options.inWrapper ? `.${this.className}-wrapper` : ":root";
        this.styleMap = null;
        this.bodyContainer = bodyContainer;
        styleContainer = styleContainer || bodyContainer;
        this.pointToPixelRatio = computePointToPixelRatio();
        removeAllElements(styleContainer);
        removeAllElements(bodyContainer);
        appendComment(styleContainer, "docxjs library predefined styles");
        styleContainer.appendChild(this.renderDefaultStyle());
        if (document2.themePart) {
          appendComment(styleContainer, "docxjs document theme values");
          this.renderTheme(document2.themePart, styleContainer);
        }
        if (document2.stylesPart != null) {
          this.styleMap = this.processStyles(document2.stylesPart.styles);
          appendComment(styleContainer, "docxjs document styles");
          styleContainer.appendChild(this.renderStyles(document2.stylesPart.styles));
        }
        if (document2.numberingPart) {
          this.processNumberings(document2.numberingPart.domNumberings);
          appendComment(styleContainer, "docxjs document numbering styles");
          styleContainer.appendChild(this.renderNumbering(document2.numberingPart.domNumberings, styleContainer));
        }
        if (!options.ignoreFonts && document2.fontTablePart) {
          this.renderFontTable(document2.fontTablePart, styleContainer);
        }
        if (document2.footnotesPart) {
          this.footnoteMap = keyBy_default(document2.footnotesPart.rootElement.children, "id");
        }
        if (document2.endnotesPart) {
          this.endnoteMap = keyBy_default(document2.endnotesPart.rootElement.children, "id");
        }
        if (document2.settingsPart) {
          this.defaultTabSize = (_a = document2.settingsPart.settings) === null || _a === void 0 ? void 0 : _a.defaultTabStop;
        }
        if (this.options.inWrapper) {
          this.wrapper = this.renderWrapper();
          bodyContainer.appendChild(this.wrapper);
        } else {
          this.wrapper = bodyContainer;
        }
        const { stage, layer } = createKonva(this.bodyContainer);
        const sourcePaths = /* @__PURE__ */ new WeakMap();
        this.session = {
          pages: [],
          currentPage: null,
          currentPart: null,
          currentFootnoteIds: [],
          currentEndnoteIds: [],
          tableCtx: {
            tableVerticalMerges: [],
            currentVerticalMerge: null,
            tableCellPositions: [],
            currentCellPosition: null
          },
          usedHeaderFooterParts: [],
          currentTabs: [],
          konvaStage: stage,
          konvaLayer: layer,
          overflowContentElement: void 0,
          checkingOverflow: false,
          overflowSuppressionDepth: 0,
          sourcePaths
        };
        this.buildSourcePaths(document2.documentPart.body.children, sourcePaths);
        linkParents(document2.documentPart.body);
        processElement(document2.documentPart.body);
        yield this.renderPages(document2.documentPart.body);
        this.session.konvaStage.visible(false);
        this.refreshTabStops();
        this.session.konvaStage.destroy();
        this.session = null;
      });
    }
    buildSourcePaths(children, map) {
      children.forEach((child, index) => {
        const path = `body/${index}`;
        map.set(child, path);
        this.buildNestedSourcePaths(child, path, map);
      });
    }
    buildNestedSourcePaths(element, path, map) {
      var _a, _b;
      if (element.type === DomType.Table) {
        (_a = element.children) === null || _a === void 0 ? void 0 : _a.forEach((row, rowIndex) => {
          var _a2;
          (_a2 = row.children) === null || _a2 === void 0 ? void 0 : _a2.forEach((cell, cellIndex) => {
            var _a3;
            const cellPath = `${path}/cell/${rowIndex}/${cellIndex}`;
            map.set(cell, cellPath);
            (_a3 = cell.children) === null || _a3 === void 0 ? void 0 : _a3.forEach((child) => {
              map.set(child, cellPath);
              this.buildNestedSourcePaths(child, cellPath, map);
            });
          });
        });
        return;
      }
      (_b = element.children) === null || _b === void 0 ? void 0 : _b.forEach((child) => {
        map.set(child, path);
        this.buildNestedSourcePaths(child, path, map);
      });
    }
    renderDefaultStyle() {
      return renderDefaultStyle(this.className);
    }
    renderTheme(themePart, styleContainer) {
      renderTheme(themePart, styleContainer, this.documentStylesCallbacks());
    }
    processStyleName(className) {
      return processStyleName(className, this.className);
    }
    processStyles(styles) {
      return processStyles(styles, this.documentStylesCallbacks());
    }
    renderStyles(styles) {
      return renderStyles(styles, this.documentStylesCallbacks());
    }
    processNumberings(numberings) {
      processNumberings(numberings, this.numberingStylesCallbacks());
    }
    renderNumbering(numberings, styleContainer) {
      return renderNumbering(numberings, styleContainer, this.numberingStylesCallbacks());
    }
    numberingClass(id, lvl) {
      return numberingClass(this.className, id, lvl);
    }
    styleToString(selectors, declarations, cssText = null) {
      return styleToString(selectors, declarations, cssText);
    }
    numberingCounter(id, lvl) {
      return numberingCounter(this.className, id, lvl);
    }
    levelTextToContent(text, suff, id, numformat) {
      return levelTextToContent(text, suff, id, numformat, (counterId, level) => this.numberingCounter(counterId, level));
    }
    numFormatToCssValue(format) {
      return numFormatToCssValue(format);
    }
    renderFontTable(fontsPart, styleContainer) {
      renderFontTable(fontsPart, styleContainer, this.documentStylesCallbacks());
    }
    renderWrapper() {
      return renderWrapper(this.className);
    }
    documentStylesCallbacks() {
      return {
        className: this.className,
        options: this.options,
        styleToString: (selectors, declarations, cssText = null) => this.styleToString(selectors, declarations, cssText),
        processStyleName: (className) => this.processStyleName(className),
        createStyleElement: (cssText) => createStyleElement(cssText),
        appendComment: (styleContainer, text) => appendComment(styleContainer, text),
        loadFont: (id, key) => this.document.loadFont(id, key),
        refreshTabStops: () => this.refreshTabStops()
      };
    }
    numberingStylesCallbacks() {
      return {
        className: this.className,
        rootSelector: this.rootSelector,
        findStyle: (styleName) => this.findStyle(styleName),
        styleToString: (selectors, declarations, cssText = null) => this.styleToString(selectors, declarations, cssText),
        createStyleElement: (cssText) => createStyleElement(cssText),
        loadNumberingImage: (src) => this.document.loadNumberingImage(src),
        numberingClass: (id, level) => this.numberingClass(id, level),
        numberingCounter: (id, level) => this.numberingCounter(id, level),
        levelTextToContent: (text, suff, id, numformat) => this.levelTextToContent(text, suff, id, numformat),
        numFormatToCssValue: (format) => this.numFormatToCssValue(format)
      };
    }
    renderContext() {
      return {
        className: this.className,
        document: this.document,
        options: this.options,
        currentPart: this.session.currentPart,
        konvaStage: this.session.konvaStage,
        konvaLayer: this.session.konvaLayer,
        tableCtx: this.session.tableCtx,
        currentTabs: this.session.currentTabs,
        currentFootnoteIds: this.session.currentFootnoteIds,
        currentEndnoteIds: this.session.currentEndnoteIds,
        usedHeaderFooterParts: this.session.usedHeaderFooterParts,
        evenAndOddHeaders: this.document.settingsPart.settings.evenAndOddHeaders,
        ignoreWidth: this.options.ignoreWidth,
        ignoreHeight: this.options.ignoreHeight,
        linkParents: (elem) => linkParents(elem),
        processElement: (elem) => processElement(elem),
        appendChildren: (p, c) => this.appendChildren(p, c),
        appendChildrenWithoutOverflow: (p, c) => appendChildren(p, c),
        runWithoutOverflowTracking: (callback) => this.runWithoutOverflowTracking(callback),
        renderChildren: (e, p) => this.renderChildren(e, p),
        renderElements: (ch, p) => this.renderElements(ch, p),
        renderElement: (e, p) => this.renderElement(e, p),
        renderContainer: (e, t, pr) => this.renderContainer(e, t, pr),
        renderContainerNS: (e, n, t, pr) => this.renderContainerNS(e, n, t, pr),
        renderHeaderFooter: (e, t, p) => this.renderHeaderFooter(e, t, p),
        renderClass: (e, o) => renderClass(e, o, (n) => this.processStyleName(n)),
        renderStyleValues: (s, o) => renderStyleValues(s, o),
        renderCommonProperties: (s, p) => renderCommonProperties(s, p),
        findStyle: (styleName) => this.findStyle(styleName),
        numberingClass: (id, level) => this.numberingClass(id, level),
        findExternalRelation: (id) => this.document.documentPart.rels.find((it) => it.id == id && it.targetMode === "External"),
        findComment: (id) => {
          var _a;
          return (_a = this.document.commentsPart) === null || _a === void 0 ? void 0 : _a.commentMap[id];
        },
        currentPageIsSplit: () => this.session.currentPage.isSplit,
        currentSectionProperties: () => this.session.currentPage.sectProps,
        currentPageNumber: () => {
          var _a;
          const pages = (_a = this.session.pages) !== null && _a !== void 0 ? _a : [];
          return pages.findIndex((p) => p.pageId === this.session.currentPage.pageId) + 1;
        },
        pageCount: () => {
          var _a, _b;
          return (_b = (_a = this.session.pages) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        },
        resolveFieldRuns: (runs) => this.resolveFieldRuns(runs),
        renderText: (e, p) => renderText(e, p, this.renderContext()),
        renderChanges: () => this.options.renderChanges,
        setCurrentPart: (part) => {
          this.session.currentPart = part;
        }
      };
    }
    splitPageBySymbol(documentElement) {
      const split = splitDocumentIntoPhysicalPages(documentElement);
      const physicalPagesWithRegions = split.pages.filter((physicalPage) => physicalPage.regions.length > 0);
      const contexts = buildPageLayoutContexts(physicalPagesWithRegions);
      const contextByPage = new Map(physicalPagesWithRegions.map((physicalPage, index) => [
        physicalPage,
        contexts[index]
      ]));
      return split.pages.map((physicalPage) => {
        var _a, _b;
        const activeRegion = physicalPage.regions[physicalPage.regions.length - 1];
        const children = physicalPage.regions.flatMap((region) => region.children);
        const layoutContext = contextByPage.get(physicalPage);
        return new Page({
          isSplit: false,
          sectProps: (_b = (_a = layoutContext === null || layoutContext === void 0 ? void 0 : layoutContext.activeSection) !== null && _a !== void 0 ? _a : activeRegion === null || activeRegion === void 0 ? void 0 : activeRegion.section) !== null && _b !== void 0 ? _b : documentElement.sectProps,
          children,
          regions: physicalPage.regions,
          layoutContext
        });
      });
    }
    renderPages(document2) {
      return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let pages;
        if (this.options.breakPages) {
          pages = this.splitPageBySymbol(document2);
        } else {
          pages = [new Page({ isSplit: true, sectProps: document2.sectProps, children: document2.children })];
        }
        this.session.pages = pages;
        let prevProps = null;
        const origin_pages = [...pages];
        for (let i = 0; i < origin_pages.length; i++) {
          this.session.currentFootnoteIds = [];
          const page = origin_pages[i];
          const { sectProps } = page;
          page.sectProps = sectProps !== null && sectProps !== void 0 ? sectProps : document2.sectProps;
          page.isFirstPage = (_b = (_a = page.layoutContext) === null || _a === void 0 ? void 0 : _a.isFirstSectionPage) !== null && _b !== void 0 ? _b : prevProps != page.sectProps;
          page.isLastPage = i === origin_pages.length - 1;
          this.session.checkingOverflow = false;
          this.session.currentPage = page;
          prevProps = page.sectProps;
          yield this.renderPage();
        }
      });
    }
    renderPage() {
      return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { pageId, sectProps, children, isFirstPage, isLastPage, regions, layoutContext } = this.session.currentPage;
        const pageElement = this.createPage(this.className, sectProps);
        renderStyleValues(this.document.documentPart.body.cssStyle, pageElement);
        const pages = this.session.pages;
        const pageIndex = pages.findIndex((page) => page.pageId === pageId);
        let oHeader = null;
        let oFooter = null;
        if (this.options.renderHeaders) {
          oHeader = yield this.renderHeaderFooterRef(sectProps.headerRefs, sectProps, pageIndex, isFirstPage, layoutContext, pageElement);
        }
        if (this.options.renderFooters) {
          oFooter = yield this.renderHeaderFooterRef(sectProps.footerRefs, sectProps, pageIndex, isFirstPage, layoutContext, pageElement);
        }
        const getOffsetHeight = (el) => {
          var _a2;
          return ((_a2 = el === null || el === void 0 ? void 0 : el.offsetHeight) !== null && _a2 !== void 0 ? _a2 : 0) * this.pointToPixelRatio;
        };
        const { pageSize, pageMargins } = sectProps;
        const headerHeight = getOffsetHeight(oHeader);
        const footerHeight = getOffsetHeight(oFooter);
        const actualTop = max_default([parseFloat(pageMargins.top), headerHeight]);
        const actualBottom = max_default([parseFloat(pageMargins.bottom), footerHeight]);
        pageElement.style.paddingTop = `${actualTop}pt`;
        pageElement.style.paddingBottom = `${actualBottom}pt`;
        const contentHeight = parseFloat(pageSize.height) - actualTop - actualBottom;
        if (regions && regions.length > 1) {
          if (this.options.breakPages && !this.options.ignoreHeight) {
            pageElement.style.height = sectProps.pageSize.height;
          }
          let isOverflow = Overflow.NONE;
          for (let regionIndex = 0; regionIndex < regions.length; regionIndex++) {
            const region = regions[regionIndex];
            const regionArticle = this.createPageContent(region.section);
            regionArticle.dataset.sectionId = (_a = region.section) === null || _a === void 0 ? void 0 : _a.sectionId;
            regionArticle.dataset.breakBefore = region.breakBefore;
            pageElement.appendChild(regionArticle);
            this.session.overflowContentElement = pageElement;
            this.session.checkingOverflow = this.options.breakPages;
            isOverflow = yield this.renderElements(region.children, regionArticle, { regionIndex }, true);
            if (isOverflow !== Overflow.NONE && isOverflow !== Overflow.UNCHECKED && isOverflow !== Overflow.SKIP) {
              break;
            }
          }
          if (isOverflow === Overflow.NONE || isOverflow === Overflow.UNCHECKED || isOverflow === Overflow.SKIP) {
            this.session.currentPage.isSplit = true;
            pages[pageIndex] = this.session.currentPage;
          }
          this.session.checkingOverflow = false;
        } else {
          const contentElement = this.createPageContent(sectProps);
          if (this.options.breakPages) {
            contentElement.style.height = `${contentHeight}pt`;
          } else {
            contentElement.style.minHeight = `${contentHeight}pt`;
          }
          pageElement.appendChild(contentElement);
          this.session.overflowContentElement = contentElement;
          this.session.checkingOverflow = true;
          const is_overflow = yield this.renderElements(children, contentElement, void 0, true);
          if (is_overflow === Overflow.NONE) {
            this.session.currentPage.isSplit = true;
            pages[pageIndex] = this.session.currentPage;
          }
          this.session.checkingOverflow = false;
        }
        if (this.options.renderFootnotes) {
          yield this.renderNotes(DomType.Footnotes, this.session.currentFootnoteIds, this.footnoteMap, pageElement);
        }
        if (this.options.renderEndnotes && isLastPage) {
          yield this.renderNotes(DomType.Endnotes, this.session.currentEndnoteIds, this.endnoteMap, pageElement);
        }
      });
    }
    createPage(className, props) {
      return createPage$1(className, props, this.wrapper, {
        ignoreWidth: this.options.ignoreWidth,
        ignoreHeight: this.options.ignoreHeight
      });
    }
    createPageContent(props) {
      return createPageContent(props);
    }
    renderHeaderFooterRef(refs, props, pageIndex, isFirstPage, layoutContext, parent) {
      return __awaiter(this, void 0, void 0, function* () {
        return renderHeaderFooterRef(refs, props, pageIndex, isFirstPage, layoutContext, parent, this.renderContext());
      });
    }
    renderNotes() {
      return __awaiter(this, arguments, void 0, function* (type = DomType.Footnotes, noteIds, notesMap, parent) {
        return renderNotes(type, noteIds, notesMap, parent, this.renderContext());
      });
    }
    renderElements(children_1, parent_1, splitContext_1) {
      return __awaiter(this, arguments, void 0, function* (children, parent, splitContext, topLevel = false) {
        var _a, _b;
        const overflows = [];
        const pages = this.session.pages;
        const { pageId } = this.session.currentPage;
        const pageIndex = pages.findIndex((p) => p.pageId === pageId);
        const BREAKING_OVERFLOWS = /* @__PURE__ */ new Set([Overflow.SELF, Overflow.FULL, Overflow.PARTIAL]);
        const markBreakIndex = (elem, index) => {
          if (topLevel) {
            this.session.currentPage.breakIndex.add(index);
            return;
          }
          if (elem.parent) {
            if (!elem.parent.breakIndex)
              elem.parent.breakIndex = /* @__PURE__ */ new Set();
            elem.parent.breakIndex.add(index);
          }
        };
        for (let i = 0; i < children.length; i++) {
          const elem = children[i];
          if (!elem.breakIndex)
            elem.breakIndex = /* @__PURE__ */ new Set();
          const rendered = yield this.renderElement(elem, parent);
          let overflow = (_b = (_a = rendered === null || rendered === void 0 ? void 0 : rendered.dataset) === null || _a === void 0 ? void 0 : _a.overflow) !== null && _b !== void 0 ? _b : Overflow.UNCHECKED;
          let action = "continue";
          const isFirstPageElement = topLevel && i === 0;
          if (isFirstPageElement && BREAKING_OVERFLOWS.has(overflow)) {
            action = "break-after-current";
          } else {
            switch (overflow) {
              case Overflow.SELF:
                elem.breakIndex.add(0);
                markBreakIndex(elem, i);
                removeElements(rendered, parent);
                action = "break";
                break;
              case Overflow.FULL:
                markBreakIndex(elem, i);
                if (elem.type !== DomType.Cell)
                  removeElements(rendered, parent);
                action = "break";
                break;
              case Overflow.PARTIAL:
                markBreakIndex(elem, i);
                action = "break";
                break;
              default:
                action = "continue";
                if (overflow !== Overflow.NONE && overflow !== Overflow.UNCHECKED && overflow !== Overflow.SKIP && this.options.debug) {
                  console.error("unhandled overflow", overflow, elem);
                }
            }
          }
          if (elem.type === DomType.Cell)
            action = "continue";
          overflows.push(overflow);
          if (action === "break" || action === "break-after-current") {
            if (topLevel) {
              const overflowIndex = action === "break-after-current" ? i + 1 : i;
              if (overflowIndex < children.length) {
                if (splitContext) {
                  splitRegionOnOverflow(this.session.currentPage, pages, pageIndex, splitContext.regionIndex, overflowIndex);
                } else {
                  splitOnOverflow(this.session.currentPage, pages, pageIndex, overflowIndex);
                }
                this.session.currentPage = pages[pageIndex + 1];
                yield this.renderPage();
              } else {
                this.session.currentPage.isSplit = true;
                pages[pageIndex] = this.session.currentPage;
              }
            }
            break;
          }
        }
        return inferOverflow(overflows);
      });
    }
    renderElement(elem, parent) {
      return __awaiter(this, void 0, void 0, function* () {
        const oNode = yield dispatchElement(elem, parent, this.renderContext());
        if (oNode && oNode.nodeType === 1) {
          oNode.dataset.tag = elem.type;
          const sourcePath = this.session.sourcePaths.get(elem);
          if (sourcePath && this.isSourceAnchor(elem)) {
            oNode.dataset.rendererPath = sourcePath;
          }
        }
        return oNode;
      });
    }
    isSourceAnchor(elem) {
      return elem.type === DomType.Paragraph || elem.type === DomType.Table || elem.type === DomType.Cell || elem.type === DomType.SectionBreak;
    }
    renderChildren(elem, parent) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield this.renderElements(elem.children, parent);
      });
    }
    appendChildren(parent, children) {
      return __awaiter(this, void 0, void 0, function* () {
        appendChildren(parent, children);
        if (this.session.overflowSuppressionDepth > 0) {
          return Overflow.UNCHECKED;
        }
        return measurePageOverflow({
          isSplit: this.session.currentPage.isSplit,
          contentElement: this.session.overflowContentElement,
          checkingOverflow: this.session.checkingOverflow
        });
      });
    }
    runWithoutOverflowTracking(callback) {
      return __awaiter(this, void 0, void 0, function* () {
        this.session.overflowSuppressionDepth += 1;
        try {
          return yield callback();
        } finally {
          this.session.overflowSuppressionDepth -= 1;
        }
      });
    }
    renderContainer(elem, tagName, props) {
      return __awaiter(this, void 0, void 0, function* () {
        const oContainer = createElement(tagName, props);
        oContainer.dataset.overflow = yield this.renderChildren(elem, oContainer);
        return oContainer;
      });
    }
    renderContainerNS(elem, ns2, tagName, props) {
      return __awaiter(this, void 0, void 0, function* () {
        const parent = createElementNS(ns2, tagName, props);
        yield this.renderChildren(elem, parent);
        return parent;
      });
    }
    resolveFieldRuns(runs) {
      return resolveFieldRuns(runs, this.renderContext());
    }
    resolveSimpleField(elem) {
      return resolveSimpleField(elem, this.renderContext());
    }
    renderHeaderFooter(elem, tagName, parent) {
      return __awaiter(this, void 0, void 0, function* () {
        return renderHeaderFooter(elem, tagName, parent, {
          renderChildren: (e, p) => this.renderChildren(e, p),
          renderStyleValues: (s, o) => renderStyleValues(s, o)
        });
      });
    }
    findStyle(styleName) {
      var _a;
      return styleName && ((_a = this.styleMap) === null || _a === void 0 ? void 0 : _a[styleName]);
    }
    refreshTabStops() {
      for (const tab of this.session.currentTabs) {
        updateTabStop(tab.span, tab.stops, this.defaultTabSize, this.pointToPixelRatio);
      }
    }
  };
  var renderResultKey = Symbol("docx-renderer.renderResult");
  var DomSourceMap = class {
    constructor(root2) {
      this.root = root2;
      this.elementsByPath = /* @__PURE__ */ new Map();
      const elements = Array.from(root2.querySelectorAll("[data-renderer-path]"));
      for (const element of elements) {
        const path = element.dataset.rendererPath;
        if (!path)
          continue;
        const existing = this.elementsByPath.get(path);
        if (existing) {
          existing.push(element);
        } else {
          this.elementsByPath.set(path, [element]);
        }
      }
    }
    elementsFor(blockPath) {
      var _a, _b;
      const exact = this.elementsByPath.get(blockPath);
      if (exact === null || exact === void 0 ? void 0 : exact.length)
        return [...exact];
      const bodyPath = (_a = blockPath.match(/^body\/\d+/)) === null || _a === void 0 ? void 0 : _a[0];
      if (!bodyPath || bodyPath === blockPath)
        return [];
      return [...(_b = this.elementsByPath.get(bodyPath)) !== null && _b !== void 0 ? _b : []];
    }
    pathFor(element) {
      var _a;
      const target = element.closest("[data-renderer-path]");
      if (!target || !this.root.contains(target))
        return null;
      return (_a = target.dataset.rendererPath) !== null && _a !== void 0 ? _a : null;
    }
  };
  var DomOverlayLayer = class {
    constructor(root2, pages) {
      var _a;
      var _b;
      this.root = root2;
      this.pages = pages;
      this.handles = /* @__PURE__ */ new Set();
      this.frameId = null;
      this.onWindowResize = () => this.scheduleUpdate();
      this.resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(() => this.scheduleUpdate());
      this.mutationObserver = new MutationObserver(() => this.scheduleUpdate());
      for (const page of pages) {
        (_b = page.element.style).position || (_b.position = "relative");
        this.ensurePageOverlay(page.element);
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(page.element);
      }
      this.mutationObserver.observe(root2, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"]
      });
      window.addEventListener("resize", this.onWindowResize);
    }
    attach(anchor, content, opts = {}) {
      const handle = new DomOverlayHandle(this, anchor, content, opts);
      this.handles.add(handle);
      handle.update();
      return handle;
    }
    clear() {
      for (const handle of [...this.handles]) {
        handle.dispose();
      }
      this.handles.clear();
    }
    remove(handle) {
      this.handles.delete(handle);
    }
    overlayFor(anchor) {
      const page = this.pageFor(anchor);
      return page ? this.ensurePageOverlay(page) : null;
    }
    positionFor(anchor, placement, offsetX, offsetY) {
      const page = this.pageFor(anchor);
      if (!page)
        return null;
      const pageRect = page.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();
      const scale = page.offsetWidth > 0 ? pageRect.width / page.offsetWidth : 1;
      const normalizedScale = scale || 1;
      const anchorLeft = placement === "left" ? anchorRect.left - pageRect.left : anchorRect.right - pageRect.left;
      return {
        left: anchorLeft / normalizedScale + offsetX,
        top: (anchorRect.top - pageRect.top) / normalizedScale + offsetY
      };
    }
    dispose() {
      var _a, _b;
      this.clear();
      (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      this.mutationObserver.disconnect();
      window.removeEventListener("resize", this.onWindowResize);
      if (this.frameId !== null) {
        cancelAnimationFrame(this.frameId);
        this.frameId = null;
      }
      for (const page of this.pages) {
        (_b = page.element.querySelector(":scope > .renderer-overlay-layer")) === null || _b === void 0 ? void 0 : _b.remove();
      }
    }
    scheduleUpdate() {
      if (this.frameId !== null)
        return;
      this.frameId = requestAnimationFrame(() => {
        this.frameId = null;
        for (const handle of this.handles) {
          handle.update();
        }
      });
    }
    pageFor(anchor) {
      var _a, _b;
      return (_b = (_a = this.pages.find((page) => page.element.contains(anchor))) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : null;
    }
    ensurePageOverlay(page) {
      let overlay = page.querySelector(":scope > .renderer-overlay-layer");
      if (overlay)
        return overlay;
      overlay = document.createElement("div");
      overlay.className = "renderer-overlay-layer";
      overlay.style.position = "absolute";
      overlay.style.inset = "0";
      overlay.style.pointerEvents = "none";
      overlay.style.zIndex = "5";
      page.appendChild(overlay);
      return overlay;
    }
  };
  var DomOverlayHandle = class {
    constructor(layer, anchor, content, opts) {
      var _a, _b;
      this.layer = layer;
      this.anchor = anchor;
      this.opts = opts;
      this.element = document.createElement("div");
      this.element.className = (_a = opts.className) !== null && _a !== void 0 ? _a : "";
      this.element.style.position = "absolute";
      this.element.style.pointerEvents = "auto";
      this.element.appendChild(content);
      (_b = this.layer.overlayFor(anchor)) === null || _b === void 0 ? void 0 : _b.appendChild(this.element);
    }
    update() {
      var _a, _b, _c;
      if (!this.anchor.isConnected) {
        this.dispose();
        return;
      }
      const overlay = this.layer.overlayFor(this.anchor);
      if (!overlay) {
        this.element.remove();
        return;
      }
      if (this.element.parentElement !== overlay) {
        overlay.appendChild(this.element);
      }
      const position = this.layer.positionFor(this.anchor, (_a = this.opts.placement) !== null && _a !== void 0 ? _a : "right", (_b = this.opts.offsetX) !== null && _b !== void 0 ? _b : 8, (_c = this.opts.offsetY) !== null && _c !== void 0 ? _c : 0);
      if (!position)
        return;
      this.element.style.left = `${position.left}px`;
      this.element.style.top = `${position.top}px`;
    }
    dispose() {
      this.element.remove();
      this.layer.remove(this);
    }
  };
  function createRenderResult(document2, bodyContainer, className) {
    const pageElements = Array.from(bodyContainer.querySelectorAll(`section.${className}`));
    const pages = pageElements.map((element, index) => ({
      index,
      element,
      blockPaths: Array.from(new Set(Array.from(element.querySelectorAll("[data-renderer-path]")).map((node) => node.dataset.rendererPath).filter((path) => Boolean(path))))
    }));
    const result = {
      document: document2,
      pages,
      sourceMap: new DomSourceMap(bodyContainer),
      overlay: new DomOverlayLayer(bodyContainer, pages),
      dispose() {
        result.overlay.dispose();
        const container = bodyContainer;
        if (container[renderResultKey] === result) {
          delete container[renderResultKey];
        }
      }
    };
    bodyContainer[renderResultKey] = result;
    return result;
  }
  function disposeRenderResult(bodyContainer) {
    var _a;
    (_a = bodyContainer[renderResultKey]) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  var types = {
    "application/andrew-inset": ["ez"],
    "application/appinstaller": ["appinstaller"],
    "application/applixware": ["aw"],
    "application/appx": ["appx"],
    "application/appxbundle": ["appxbundle"],
    "application/atom+xml": ["atom"],
    "application/atomcat+xml": ["atomcat"],
    "application/atomdeleted+xml": ["atomdeleted"],
    "application/atomsvc+xml": ["atomsvc"],
    "application/atsc-dwd+xml": ["dwd"],
    "application/atsc-held+xml": ["held"],
    "application/atsc-rsat+xml": ["rsat"],
    "application/automationml-aml+xml": ["aml"],
    "application/automationml-amlx+zip": ["amlx"],
    "application/bdoc": ["bdoc"],
    "application/calendar+xml": ["xcs"],
    "application/ccxml+xml": ["ccxml"],
    "application/cdfx+xml": ["cdfx"],
    "application/cdmi-capability": ["cdmia"],
    "application/cdmi-container": ["cdmic"],
    "application/cdmi-domain": ["cdmid"],
    "application/cdmi-object": ["cdmio"],
    "application/cdmi-queue": ["cdmiq"],
    "application/cpl+xml": ["cpl"],
    "application/cu-seeme": ["cu"],
    "application/cwl": ["cwl"],
    "application/dash+xml": ["mpd"],
    "application/dash-patch+xml": ["mpp"],
    "application/davmount+xml": ["davmount"],
    "application/docbook+xml": ["dbk"],
    "application/dssc+der": ["dssc"],
    "application/dssc+xml": ["xdssc"],
    "application/ecmascript": ["ecma"],
    "application/emma+xml": ["emma"],
    "application/emotionml+xml": ["emotionml"],
    "application/epub+zip": ["epub"],
    "application/exi": ["exi"],
    "application/express": ["exp"],
    "application/fdf": ["fdf"],
    "application/fdt+xml": ["fdt"],
    "application/font-tdpfr": ["pfr"],
    "application/geo+json": ["geojson"],
    "application/gml+xml": ["gml"],
    "application/gpx+xml": ["gpx"],
    "application/gxf": ["gxf"],
    "application/gzip": ["gz"],
    "application/hjson": ["hjson"],
    "application/hyperstudio": ["stk"],
    "application/inkml+xml": ["ink", "inkml"],
    "application/ipfix": ["ipfix"],
    "application/its+xml": ["its"],
    "application/java-archive": ["jar", "war", "ear"],
    "application/java-serialized-object": ["ser"],
    "application/java-vm": ["class"],
    "application/javascript": ["*js"],
    "application/json": ["json", "map"],
    "application/json5": ["json5"],
    "application/jsonml+json": ["jsonml"],
    "application/ld+json": ["jsonld"],
    "application/lgr+xml": ["lgr"],
    "application/lost+xml": ["lostxml"],
    "application/mac-binhex40": ["hqx"],
    "application/mac-compactpro": ["cpt"],
    "application/mads+xml": ["mads"],
    "application/manifest+json": ["webmanifest"],
    "application/marc": ["mrc"],
    "application/marcxml+xml": ["mrcx"],
    "application/mathematica": ["ma", "nb", "mb"],
    "application/mathml+xml": ["mathml"],
    "application/mbox": ["mbox"],
    "application/media-policy-dataset+xml": ["mpf"],
    "application/mediaservercontrol+xml": ["mscml"],
    "application/metalink+xml": ["metalink"],
    "application/metalink4+xml": ["meta4"],
    "application/mets+xml": ["mets"],
    "application/mmt-aei+xml": ["maei"],
    "application/mmt-usd+xml": ["musd"],
    "application/mods+xml": ["mods"],
    "application/mp21": ["m21", "mp21"],
    "application/mp4": ["mp4", "mpg4", "mp4s", "m4p"],
    "application/msix": ["msix"],
    "application/msixbundle": ["msixbundle"],
    "application/msword": ["doc", "dot"],
    "application/mxf": ["mxf"],
    "application/n-quads": ["nq"],
    "application/n-triples": ["nt"],
    "application/node": ["cjs"],
    "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"],
    "application/oda": ["oda"],
    "application/oebps-package+xml": ["opf"],
    "application/ogg": ["ogx"],
    "application/omdoc+xml": ["omdoc"],
    "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
    "application/oxps": ["oxps"],
    "application/p2p-overlay+xml": ["relo"],
    "application/patch-ops-error+xml": ["xer"],
    "application/pdf": ["pdf"],
    "application/pgp-encrypted": ["pgp"],
    "application/pgp-keys": ["asc"],
    "application/pgp-signature": ["sig", "*asc"],
    "application/pics-rules": ["prf"],
    "application/pkcs10": ["p10"],
    "application/pkcs7-mime": ["p7m", "p7c"],
    "application/pkcs7-signature": ["p7s"],
    "application/pkcs8": ["p8"],
    "application/pkix-attr-cert": ["ac"],
    "application/pkix-cert": ["cer"],
    "application/pkix-crl": ["crl"],
    "application/pkix-pkipath": ["pkipath"],
    "application/pkixcmp": ["pki"],
    "application/pls+xml": ["pls"],
    "application/postscript": ["ai", "eps", "ps"],
    "application/provenance+xml": ["provx"],
    "application/pskc+xml": ["pskcxml"],
    "application/raml+yaml": ["raml"],
    "application/rdf+xml": ["rdf", "owl"],
    "application/reginfo+xml": ["rif"],
    "application/relax-ng-compact-syntax": ["rnc"],
    "application/resource-lists+xml": ["rl"],
    "application/resource-lists-diff+xml": ["rld"],
    "application/rls-services+xml": ["rs"],
    "application/route-apd+xml": ["rapd"],
    "application/route-s-tsid+xml": ["sls"],
    "application/route-usd+xml": ["rusd"],
    "application/rpki-ghostbusters": ["gbr"],
    "application/rpki-manifest": ["mft"],
    "application/rpki-roa": ["roa"],
    "application/rsd+xml": ["rsd"],
    "application/rss+xml": ["rss"],
    "application/rtf": ["rtf"],
    "application/sbml+xml": ["sbml"],
    "application/scvp-cv-request": ["scq"],
    "application/scvp-cv-response": ["scs"],
    "application/scvp-vp-request": ["spq"],
    "application/scvp-vp-response": ["spp"],
    "application/sdp": ["sdp"],
    "application/senml+xml": ["senmlx"],
    "application/sensml+xml": ["sensmlx"],
    "application/set-payment-initiation": ["setpay"],
    "application/set-registration-initiation": ["setreg"],
    "application/shf+xml": ["shf"],
    "application/sieve": ["siv", "sieve"],
    "application/smil+xml": ["smi", "smil"],
    "application/sparql-query": ["rq"],
    "application/sparql-results+xml": ["srx"],
    "application/sql": ["sql"],
    "application/srgs": ["gram"],
    "application/srgs+xml": ["grxml"],
    "application/sru+xml": ["sru"],
    "application/ssdl+xml": ["ssdl"],
    "application/ssml+xml": ["ssml"],
    "application/swid+xml": ["swidtag"],
    "application/tei+xml": ["tei", "teicorpus"],
    "application/thraud+xml": ["tfi"],
    "application/timestamped-data": ["tsd"],
    "application/toml": ["toml"],
    "application/trig": ["trig"],
    "application/ttml+xml": ["ttml"],
    "application/ubjson": ["ubj"],
    "application/urc-ressheet+xml": ["rsheet"],
    "application/urc-targetdesc+xml": ["td"],
    "application/voicexml+xml": ["vxml"],
    "application/wasm": ["wasm"],
    "application/watcherinfo+xml": ["wif"],
    "application/widget": ["wgt"],
    "application/winhlp": ["hlp"],
    "application/wsdl+xml": ["wsdl"],
    "application/wspolicy+xml": ["wspolicy"],
    "application/xaml+xml": ["xaml"],
    "application/xcap-att+xml": ["xav"],
    "application/xcap-caps+xml": ["xca"],
    "application/xcap-diff+xml": ["xdf"],
    "application/xcap-el+xml": ["xel"],
    "application/xcap-ns+xml": ["xns"],
    "application/xenc+xml": ["xenc"],
    "application/xfdf": ["xfdf"],
    "application/xhtml+xml": ["xhtml", "xht"],
    "application/xliff+xml": ["xlf"],
    "application/xml": ["xml", "xsl", "xsd", "rng"],
    "application/xml-dtd": ["dtd"],
    "application/xop+xml": ["xop"],
    "application/xproc+xml": ["xpl"],
    "application/xslt+xml": ["*xsl", "xslt"],
    "application/xspf+xml": ["xspf"],
    "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    "application/yang": ["yang"],
    "application/yin+xml": ["yin"],
    "application/zip": ["zip"],
    "audio/3gpp": ["*3gpp"],
    "audio/aac": ["adts", "aac"],
    "audio/adpcm": ["adp"],
    "audio/amr": ["amr"],
    "audio/basic": ["au", "snd"],
    "audio/midi": ["mid", "midi", "kar", "rmi"],
    "audio/mobile-xmf": ["mxmf"],
    "audio/mp3": ["*mp3"],
    "audio/mp4": ["m4a", "mp4a"],
    "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    "audio/ogg": ["oga", "ogg", "spx", "opus"],
    "audio/s3m": ["s3m"],
    "audio/silk": ["sil"],
    "audio/wav": ["wav"],
    "audio/wave": ["*wav"],
    "audio/webm": ["weba"],
    "audio/xm": ["xm"],
    "font/collection": ["ttc"],
    "font/otf": ["otf"],
    "font/ttf": ["ttf"],
    "font/woff": ["woff"],
    "font/woff2": ["woff2"],
    "image/aces": ["exr"],
    "image/apng": ["apng"],
    "image/avci": ["avci"],
    "image/avcs": ["avcs"],
    "image/avif": ["avif"],
    "image/bmp": ["bmp", "dib"],
    "image/cgm": ["cgm"],
    "image/dicom-rle": ["drle"],
    "image/dpx": ["dpx"],
    "image/emf": ["emf"],
    "image/fits": ["fits"],
    "image/g3fax": ["g3"],
    "image/gif": ["gif"],
    "image/heic": ["heic"],
    "image/heic-sequence": ["heics"],
    "image/heif": ["heif"],
    "image/heif-sequence": ["heifs"],
    "image/hej2k": ["hej2"],
    "image/hsj2": ["hsj2"],
    "image/ief": ["ief"],
    "image/jls": ["jls"],
    "image/jp2": ["jp2", "jpg2"],
    "image/jpeg": ["jpeg", "jpg", "jpe"],
    "image/jph": ["jph"],
    "image/jphc": ["jhc"],
    "image/jpm": ["jpm", "jpgm"],
    "image/jpx": ["jpx", "jpf"],
    "image/jxr": ["jxr"],
    "image/jxra": ["jxra"],
    "image/jxrs": ["jxrs"],
    "image/jxs": ["jxs"],
    "image/jxsc": ["jxsc"],
    "image/jxsi": ["jxsi"],
    "image/jxss": ["jxss"],
    "image/ktx": ["ktx"],
    "image/ktx2": ["ktx2"],
    "image/png": ["png"],
    "image/sgi": ["sgi"],
    "image/svg+xml": ["svg", "svgz"],
    "image/t38": ["t38"],
    "image/tiff": ["tif", "tiff"],
    "image/tiff-fx": ["tfx"],
    "image/webp": ["webp"],
    "image/wmf": ["wmf"],
    "message/disposition-notification": ["disposition-notification"],
    "message/global": ["u8msg"],
    "message/global-delivery-status": ["u8dsn"],
    "message/global-disposition-notification": ["u8mdn"],
    "message/global-headers": ["u8hdr"],
    "message/rfc822": ["eml", "mime"],
    "model/3mf": ["3mf"],
    "model/gltf+json": ["gltf"],
    "model/gltf-binary": ["glb"],
    "model/iges": ["igs", "iges"],
    "model/jt": ["jt"],
    "model/mesh": ["msh", "mesh", "silo"],
    "model/mtl": ["mtl"],
    "model/obj": ["obj"],
    "model/prc": ["prc"],
    "model/step+xml": ["stpx"],
    "model/step+zip": ["stpz"],
    "model/step-xml+zip": ["stpxz"],
    "model/stl": ["stl"],
    "model/u3d": ["u3d"],
    "model/vrml": ["wrl", "vrml"],
    "model/x3d+binary": ["*x3db", "x3dbz"],
    "model/x3d+fastinfoset": ["x3db"],
    "model/x3d+vrml": ["*x3dv", "x3dvz"],
    "model/x3d+xml": ["x3d", "x3dz"],
    "model/x3d-vrml": ["x3dv"],
    "text/cache-manifest": ["appcache", "manifest"],
    "text/calendar": ["ics", "ifb"],
    "text/coffeescript": ["coffee", "litcoffee"],
    "text/css": ["css"],
    "text/csv": ["csv"],
    "text/html": ["html", "htm", "shtml"],
    "text/jade": ["jade"],
    "text/javascript": ["js", "mjs"],
    "text/jsx": ["jsx"],
    "text/less": ["less"],
    "text/markdown": ["md", "markdown"],
    "text/mathml": ["mml"],
    "text/mdx": ["mdx"],
    "text/n3": ["n3"],
    "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    "text/richtext": ["rtx"],
    "text/rtf": ["*rtf"],
    "text/sgml": ["sgml", "sgm"],
    "text/shex": ["shex"],
    "text/slim": ["slim", "slm"],
    "text/spdx": ["spdx"],
    "text/stylus": ["stylus", "styl"],
    "text/tab-separated-values": ["tsv"],
    "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
    "text/turtle": ["ttl"],
    "text/uri-list": ["uri", "uris", "urls"],
    "text/vcard": ["vcard"],
    "text/vtt": ["vtt"],
    "text/wgsl": ["wgsl"],
    "text/xml": ["*xml"],
    "text/yaml": ["yaml", "yml"],
    "video/3gpp": ["3gp", "3gpp"],
    "video/3gpp2": ["3g2"],
    "video/h261": ["h261"],
    "video/h263": ["h263"],
    "video/h264": ["h264"],
    "video/iso.segment": ["m4s"],
    "video/jpeg": ["jpgv"],
    "video/jpm": ["*jpm", "*jpgm"],
    "video/mj2": ["mj2", "mjp2"],
    "video/mp2t": ["ts"],
    "video/mp4": ["*mp4", "mp4v", "*mpg4"],
    "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    "video/ogg": ["ogv"],
    "video/quicktime": ["qt", "mov"],
    "video/webm": ["webm"]
  };
  Object.freeze(types);
  var _Mime_extensionToType;
  var _Mime_typeToExtension;
  var _Mime_typeToExtensions;
  var Mime = class {
    constructor(...args) {
      _Mime_extensionToType.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtension.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtensions.set(this, /* @__PURE__ */ new Map());
      for (const arg of args) {
        this.define(arg);
      }
    }
    define(typeMap, force = false) {
      for (let [type, extensions] of Object.entries(typeMap)) {
        type = type.toLowerCase();
        extensions = extensions.map((ext) => ext.toLowerCase());
        if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
          __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, /* @__PURE__ */ new Set());
        }
        const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
        let first = true;
        for (let extension of extensions) {
          const starred = extension.startsWith("*");
          extension = starred ? extension.slice(1) : extension;
          allExtensions === null || allExtensions === void 0 ? void 0 : allExtensions.add(extension);
          if (first) {
            __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
          }
          first = false;
          if (starred)
            continue;
          const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
          if (currentType && currentType != type && !force) {
            throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
          }
          __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
        }
      }
      return this;
    }
    getType(path) {
      var _a;
      if (typeof path !== "string")
        return null;
      const last2 = path.replace(/^.*[/\\]/, "").toLowerCase();
      const ext = last2.replace(/^.*\./, "").toLowerCase();
      const hasPath2 = last2.length < path.length;
      const hasDot = ext.length < last2.length - 1;
      if (!hasDot && hasPath2)
        return null;
      return (_a = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext)) !== null && _a !== void 0 ? _a : null;
    }
    getExtension(type) {
      var _a, _b;
      if (typeof type !== "string")
        return null;
      type = (_a = type === null || type === void 0 ? void 0 : type.split) === null || _a === void 0 ? void 0 : _a.call(type, ";")[0];
      return (_b = type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) !== null && _b !== void 0 ? _b : null;
    }
    getAllExtensions(type) {
      var _a;
      if (typeof type !== "string")
        return null;
      return (_a = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase())) !== null && _a !== void 0 ? _a : null;
    }
    _freeze() {
      this.define = () => {
        throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
      };
      Object.freeze(this);
      for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
        Object.freeze(extensions);
      }
      return this;
    }
    _getTestState() {
      return {
        types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
        extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
      };
    }
  };
  _Mime_extensionToType = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtension = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtensions = /* @__PURE__ */ new WeakMap();
  var mime = new Mime(types)._freeze();
  var RelationshipTypes;
  (function(RelationshipTypes2) {
    RelationshipTypes2["OfficeDocument"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
    RelationshipTypes2["FontTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
    RelationshipTypes2["Image"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
    RelationshipTypes2["Numbering"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering";
    RelationshipTypes2["Styles"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    RelationshipTypes2["StylesWithEffects"] = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects";
    RelationshipTypes2["Theme"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
    RelationshipTypes2["Settings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings";
    RelationshipTypes2["WebSettings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
    RelationshipTypes2["Hyperlink"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";
    RelationshipTypes2["Footnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes";
    RelationshipTypes2["Endnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes";
    RelationshipTypes2["Footer"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer";
    RelationshipTypes2["Header"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header";
    RelationshipTypes2["ExtendedProperties"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
    RelationshipTypes2["CoreProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    RelationshipTypes2["CustomProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
    RelationshipTypes2["Comments"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
  })(RelationshipTypes || (RelationshipTypes = {}));
  function parseRelationships(root2, xml) {
    return xml.elements(root2).map((e) => ({
      id: xml.attr(e, "Id"),
      type: xml.attr(e, "Type"),
      target: xml.attr(e, "Target"),
      targetMode: xml.attr(e, "TargetMode")
    }));
  }
  var Part = class {
    constructor(_package, path) {
      this._package = _package;
      this.path = path;
    }
    load() {
      return __awaiter(this, void 0, void 0, function* () {
        this.rels = yield this._package.loadRelationships(this.path);
        const xmlText = yield this._package.load(this.path);
        const xmlDoc = this._package.parseXmlDocument(xmlText);
        if (this._package.options.keepOrigin) {
          this._xmlDocument = xmlDoc;
        }
        this.parseXml(xmlDoc.firstElementChild);
      });
    }
    save() {
      this._package.update(this.path, serializeXmlString(this._xmlDocument));
    }
    parseXml(root2) {
    }
  };
  var embedFontTypeMap = {
    embedRegular: "regular",
    embedBold: "bold",
    embedItalic: "italic",
    embedBoldItalic: "boldItalic"
  };
  function parseFonts(root2, xml) {
    return xml.elements(root2).map((el) => parseFont(el, xml));
  }
  function parseFont(elem, xml) {
    let result = {
      name: xml.attr(elem, "name"),
      embedFontRefs: []
    };
    for (let el of xml.elements(elem)) {
      switch (el.localName) {
        case "family":
          result.family = xml.attr(el, "val");
          break;
        case "altName":
          result.altName = xml.attr(el, "val");
          break;
        case "embedRegular":
        case "embedBold":
        case "embedItalic":
        case "embedBoldItalic":
          result.embedFontRefs.push(parseEmbedFontRef(el, xml));
          break;
      }
    }
    return result;
  }
  function parseEmbedFontRef(elem, xml) {
    return {
      id: xml.attr(elem, "id"),
      key: xml.attr(elem, "fontKey"),
      type: embedFontTypeMap[elem.localName]
    };
  }
  var FontTablePart = class extends Part {
    parseXml(root2) {
      this.fonts = parseFonts(root2, this._package.xmlParser);
    }
  };
  var OpenXmlPackage = class _OpenXmlPackage {
    constructor(_zip, options) {
      this._zip = _zip;
      this.options = options;
      this.xmlParser = new XmlParser();
    }
    get(path) {
      return this._zip.files[normalizePath(path)];
    }
    update(path, content) {
      this._zip.file(path, content);
    }
    static load(input, options) {
      return __awaiter(this, void 0, void 0, function* () {
        const zip = yield import_jszip.default.loadAsync(input);
        return new _OpenXmlPackage(zip, options);
      });
    }
    save(type = "blob") {
      return this._zip.generateAsync({ type });
    }
    load(path, type = "string") {
      var _a, _b;
      return (_b = (_a = this.get(path)) === null || _a === void 0 ? void 0 : _a.async(type)) !== null && _b !== void 0 ? _b : Promise.resolve(null);
    }
    loadRelationships() {
      return __awaiter(this, arguments, void 0, function* (path = null) {
        let relsPath = `_rels/.rels`;
        if (path != null) {
          const [f, fn] = splitPath(path);
          relsPath = `${f}_rels/${fn}.rels`;
        }
        const txt = yield this.load(relsPath);
        return txt ? parseRelationships(this.parseXmlDocument(txt).firstElementChild, this.xmlParser) : null;
      });
    }
    parseXmlDocument(txt) {
      return parseXmlString(txt, this.options.trimXmlDeclaration);
    }
  };
  function normalizePath(path) {
    return path.startsWith("/") ? path.substr(1) : path;
  }
  var DocumentPart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
    parseXml(root2) {
      this.body = this._documentParser.parseDocumentFile(root2);
    }
  };
  function parseNumberingPart(elem, xml) {
    let result = {
      numberings: [],
      abstractNumberings: [],
      bulletPictures: []
    };
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "num":
          result.numberings.push(parseNumbering(e, xml));
          break;
        case "abstractNum":
          result.abstractNumberings.push(parseAbstractNumbering(e, xml));
          break;
        case "numPicBullet":
          result.bulletPictures.push(parseNumberingBulletPicture(e, xml));
          break;
      }
    }
    return result;
  }
  function parseNumbering(elem, xml) {
    let result = {
      id: xml.attr(elem, "numId"),
      overrides: []
    };
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "abstractNumId":
          result.abstractId = xml.attr(e, "val");
          break;
        case "lvlOverride":
          result.overrides.push(parseNumberingLevelOverrride(e, xml));
          break;
      }
    }
    return result;
  }
  function parseAbstractNumbering(elem, xml) {
    let result = {
      id: xml.attr(elem, "abstractNumId"),
      levels: []
    };
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "name":
          result.name = xml.attr(e, "val");
          break;
        case "multiLevelType":
          result.multiLevelType = xml.attr(e, "val");
          break;
        case "numStyleLink":
          result.numberingStyleLink = xml.attr(e, "val");
          break;
        case "styleLink":
          result.styleLink = xml.attr(e, "val");
          break;
        case "lvl":
          result.levels.push(parseNumberingLevel(e, xml));
          break;
      }
    }
    return result;
  }
  function parseNumberingLevel(elem, xml) {
    let result = {
      level: xml.intAttr(elem, "ilvl")
    };
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "start":
          result.start = xml.attr(e, "val");
          break;
        case "lvlRestart":
          result.restart = xml.intAttr(e, "val");
          break;
        case "numFmt":
          result.format = xml.attr(e, "val");
          break;
        case "lvlText":
          result.text = xml.attr(e, "val");
          break;
        case "lvlJc":
          result.justification = xml.attr(e, "val");
          break;
        case "lvlPicBulletId":
          result.bulletPictureId = xml.attr(e, "val");
          break;
        case "pStyle":
          result.paragraphStyle = xml.attr(e, "val");
          break;
        case "pPr":
          result.paragraphProps = parseParagraphProperties$1(e, xml);
          break;
        case "rPr":
          result.runProps = parseRunProperties$1(e, xml);
          break;
      }
    }
    return result;
  }
  function parseNumberingLevelOverrride(elem, xml) {
    let result = {
      level: xml.intAttr(elem, "ilvl")
    };
    for (let e of xml.elements(elem)) {
      switch (e.localName) {
        case "startOverride":
          result.start = xml.intAttr(e, "val");
          break;
        case "lvl":
          result.numberingLevel = parseNumberingLevel(e, xml);
          break;
      }
    }
    return result;
  }
  function parseNumberingBulletPicture(elem, xml) {
    var pict = xml.element(elem, "pict");
    var shape = pict && xml.element(pict, "shape");
    var imagedata = shape && xml.element(shape, "imagedata");
    return imagedata ? {
      id: xml.attr(elem, "numPicBulletId"),
      referenceId: xml.attr(imagedata, "id"),
      style: xml.attr(shape, "style")
    } : null;
  }
  var NumberingPart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
    parseXml(root2) {
      Object.assign(this, parseNumberingPart(root2, this._package.xmlParser));
      this.domNumberings = this._documentParser.parseNumberingFile(root2);
    }
  };
  var StylesPart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
    parseXml(root2) {
      this.styles = this._documentParser.parseStylesFile(root2);
    }
  };
  var WmlHeader = class extends OpenXmlElementBase {
    constructor() {
      super(...arguments);
      this.type = DomType.Header;
    }
  };
  var WmlFooter = class extends OpenXmlElementBase {
    constructor() {
      super(...arguments);
      this.type = DomType.Footer;
    }
  };
  var BaseHeaderFooterPart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
    parseXml(root2) {
      this.rootElement = this.createRootElement();
      this.rootElement.children = this._documentParser.parseBodyElements(root2);
    }
  };
  var HeaderPart = class extends BaseHeaderFooterPart {
    createRootElement() {
      return new WmlHeader();
    }
  };
  var FooterPart = class extends BaseHeaderFooterPart {
    createRootElement() {
      return new WmlFooter();
    }
  };
  function parseExtendedProps(root2, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root2)) {
      switch (el.localName) {
        case "Template":
          result.template = el.textContent;
          break;
        case "Pages":
          result.pages = safeParseToInt(el.textContent);
          break;
        case "Words":
          result.words = safeParseToInt(el.textContent);
          break;
        case "Characters":
          result.characters = safeParseToInt(el.textContent);
          break;
        case "Application":
          result.application = el.textContent;
          break;
        case "Lines":
          result.lines = safeParseToInt(el.textContent);
          break;
        case "Paragraphs":
          result.paragraphs = safeParseToInt(el.textContent);
          break;
        case "Company":
          result.company = el.textContent;
          break;
        case "AppVersion":
          result.appVersion = el.textContent;
          break;
      }
    }
    return result;
  }
  function safeParseToInt(value) {
    if (typeof value === "undefined")
      return;
    return parseInt(value);
  }
  var ExtendedPropsPart = class extends Part {
    parseXml(root2) {
      this.props = parseExtendedProps(root2, this._package.xmlParser);
    }
  };
  function parseCoreProps(root2, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root2)) {
      switch (el.localName) {
        case "title":
          result.title = el.textContent;
          break;
        case "description":
          result.description = el.textContent;
          break;
        case "subject":
          result.subject = el.textContent;
          break;
        case "creator":
          result.creator = el.textContent;
          break;
        case "keywords":
          result.keywords = el.textContent;
          break;
        case "language":
          result.language = el.textContent;
          break;
        case "lastModifiedBy":
          result.lastModifiedBy = el.textContent;
          break;
        case "revision":
          el.textContent && (result.revision = parseInt(el.textContent));
          break;
      }
    }
    return result;
  }
  var CorePropsPart = class extends Part {
    parseXml(root2) {
      this.props = parseCoreProps(root2, this._package.xmlParser);
    }
  };
  var DmlTheme = class {
  };
  function parseTheme(elem, xml) {
    var result = new DmlTheme();
    var themeElements = xml.element(elem, "themeElements");
    for (let el of xml.elements(themeElements)) {
      switch (el.localName) {
        case "clrScheme":
          result.colorScheme = parseColorScheme(el, xml);
          break;
        case "fontScheme":
          result.fontScheme = parseFontScheme(el, xml);
          break;
      }
    }
    return result;
  }
  function parseColorScheme(elem, xml) {
    var result = {
      name: xml.attr(elem, "name"),
      colors: {}
    };
    for (let el of xml.elements(elem)) {
      var srgbClr = xml.element(el, "srgbClr");
      var sysClr = xml.element(el, "sysClr");
      if (srgbClr) {
        result.colors[el.localName] = xml.attr(srgbClr, "val");
      } else if (sysClr) {
        result.colors[el.localName] = xml.attr(sysClr, "lastClr");
      }
    }
    return result;
  }
  function parseFontScheme(elem, xml) {
    var result = {
      name: xml.attr(elem, "name")
    };
    for (let el of xml.elements(elem)) {
      switch (el.localName) {
        case "majorFont":
          result.majorFont = parseFontInfo(el, xml);
          break;
        case "minorFont":
          result.minorFont = parseFontInfo(el, xml);
          break;
      }
    }
    return result;
  }
  function parseFontInfo(elem, xml) {
    return {
      latinTypeface: xml.elementAttr(elem, "latin", "typeface"),
      eaTypeface: xml.elementAttr(elem, "ea", "typeface"),
      csTypeface: xml.elementAttr(elem, "cs", "typeface")
    };
  }
  var ThemePart = class extends Part {
    constructor(pkg, path) {
      super(pkg, path);
    }
    parseXml(root2) {
      this.theme = parseTheme(root2, this._package.xmlParser);
    }
  };
  var BaseNotePart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
  };
  var FootnotesPart = class extends BaseNotePart {
    constructor(pkg, path, parser) {
      super(pkg, path, parser);
    }
    parseXml(root2) {
      this.rootElement = new WmlFootnotes();
      this.rootElement.children = this._documentParser.parseNotes(root2, "footnote", WmlFootnote);
    }
  };
  var EndnotesPart = class extends BaseNotePart {
    constructor(pkg, path, parser) {
      super(pkg, path, parser);
    }
    parseXml(root2) {
      this.rootElement = new WmlEndnotes();
      this.rootElement.children = this._documentParser.parseNotes(root2, "endnote", WmlEndnote);
    }
  };
  function parseSettings(elem, xml) {
    var result = {};
    for (let el of xml.elements(elem)) {
      switch (el.localName) {
        case "autoHyphenation":
          result.autoHyphenation = xml.boolAttr(el, "val");
          break;
        case "defaultTabStop":
          result.defaultTabStop = xml.lengthAttr(el, "val");
          break;
        case "endnotePr":
          result.endnoteProps = parseNoteProperties(el, xml);
          break;
        case "evenAndOddHeaders":
          result.evenAndOddHeaders = xml.boolAttr(el, "val", true);
          break;
        case "footnotePr":
          result.footnoteProps = parseNoteProperties(el, xml);
          break;
      }
    }
    return result;
  }
  function parseNoteProperties(elem, xml) {
    var result = {
      defaultNoteIds: []
    };
    for (let el of xml.elements(elem)) {
      switch (el.localName) {
        case "numFmt":
          result.nummeringFormat = xml.attr(el, "val");
          break;
        case "footnote":
        case "endnote":
          result.defaultNoteIds.push(xml.attr(el, "id"));
          break;
      }
    }
    return result;
  }
  var SettingsPart = class extends Part {
    constructor(pkg, path) {
      super(pkg, path);
    }
    parseXml(root2) {
      this.settings = parseSettings(root2, this._package.xmlParser);
    }
  };
  function parseCustomProps(root2, xml) {
    return xml.elements(root2, "property").map((e) => {
      const firstChild = e.firstChild;
      return {
        formatId: xml.attr(e, "fmtid"),
        name: xml.attr(e, "name"),
        type: firstChild.nodeName,
        value: firstChild.textContent
      };
    });
  }
  var CustomPropsPart = class extends Part {
    parseXml(root2) {
      this.props = parseCustomProps(root2, this._package.xmlParser);
    }
  };
  var CommentsPart = class extends Part {
    constructor(pkg, path, parser) {
      super(pkg, path);
      this._documentParser = parser;
    }
    parseXml(root2) {
      this.comments = this._documentParser.parseComments(root2);
      this.commentMap = keyBy_default(this.comments, "id");
    }
  };
  var topLevelRels = [
    { type: RelationshipTypes.OfficeDocument, target: "word/document.xml" },
    { type: RelationshipTypes.ExtendedProperties, target: "docProps/app.xml" },
    { type: RelationshipTypes.CoreProperties, target: "docProps/core.xml" },
    { type: RelationshipTypes.CustomProperties, target: "docProps/custom.xml" }
  ];
  var WordDocument = class _WordDocument {
    constructor() {
      this.parts = [];
      this.partsMap = {};
    }
    static load(blob, parser, options) {
      return __awaiter(this, void 0, void 0, function* () {
        var d = new _WordDocument();
        d._options = options;
        d._parser = parser;
        d._package = yield OpenXmlPackage.load(blob, options);
        d.rels = yield d._package.loadRelationships();
        yield Promise.all(topLevelRels.map((rel) => {
          var _a;
          const r = (_a = d.rels.find((x) => x.type === rel.type)) !== null && _a !== void 0 ? _a : rel;
          return d.loadRelationshipPart(r.target, r.type);
        }));
        return d;
      });
    }
    save(type = "blob") {
      return this._package.save(type);
    }
    loadRelationshipPart(path, type) {
      return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (this.partsMap[path])
          return this.partsMap[path];
        if (!this._package.get(path))
          return null;
        let part = null;
        switch (type) {
          case RelationshipTypes.OfficeDocument:
            this.documentPart = part = new DocumentPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.FontTable:
            this.fontTablePart = part = new FontTablePart(this._package, path);
            break;
          case RelationshipTypes.Numbering:
            this.numberingPart = part = new NumberingPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.Styles:
            this.stylesPart = part = new StylesPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.Theme:
            this.themePart = part = new ThemePart(this._package, path);
            break;
          case RelationshipTypes.Footnotes:
            this.footnotesPart = part = new FootnotesPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.Endnotes:
            this.endnotesPart = part = new EndnotesPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.Footer:
            part = new FooterPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.Header:
            part = new HeaderPart(this._package, path, this._parser);
            break;
          case RelationshipTypes.CoreProperties:
            this.corePropsPart = part = new CorePropsPart(this._package, path);
            break;
          case RelationshipTypes.ExtendedProperties:
            this.extendedPropsPart = part = new ExtendedPropsPart(this._package, path);
            break;
          case RelationshipTypes.CustomProperties:
            part = new CustomPropsPart(this._package, path);
            break;
          case RelationshipTypes.Settings:
            this.settingsPart = part = new SettingsPart(this._package, path);
            break;
          case RelationshipTypes.Comments:
            this.commentsPart = part = new CommentsPart(this._package, path, this._parser);
            break;
        }
        if (part == null)
          return Promise.resolve(null);
        this.partsMap[path] = part;
        this.parts.push(part);
        yield part.load();
        if (((_a = part.rels) === null || _a === void 0 ? void 0 : _a.length) > 0) {
          const [folder] = splitPath(part.path);
          yield Promise.all(part.rels.map((rel) => this.loadRelationshipPart(resolvePath(rel.target, folder), rel.type)));
        }
        return part;
      });
    }
    loadDocumentImage(id, part) {
      return __awaiter(this, void 0, void 0, function* () {
        const blob = yield this.loadResource(part !== null && part !== void 0 ? part : this.documentPart, id, "blob");
        return this.blobToURL(blob);
      });
    }
    loadNumberingImage(id) {
      return __awaiter(this, void 0, void 0, function* () {
        const blob = yield this.loadResource(this.numberingPart, id, "blob");
        return this.blobToURL(blob);
      });
    }
    loadFont(id, key) {
      return __awaiter(this, void 0, void 0, function* () {
        const x = yield this.loadResource(this.fontTablePart, id, "uint8array");
        return x ? this.blobToURL(new Blob([deobfuscate(x, key)])) : x;
      });
    }
    blobToURL(blob) {
      if (!blob)
        return null;
      if (this._options.useBase64URL) {
        return blobToBase64(blob);
      }
      return URL.createObjectURL(blob);
    }
    findPartByRelId(id, documentPart = null) {
      var _a;
      var rel = ((_a = documentPart.rels) !== null && _a !== void 0 ? _a : this.rels).find((r) => r.id == id);
      const folder = documentPart ? splitPath(documentPart.path)[0] : "";
      return rel ? this.partsMap[resolvePath(rel.target, folder)] : null;
    }
    getPathById(part, id) {
      const rel = part.rels.find((x) => x.id == id);
      const [folder] = splitPath(part.path);
      return rel ? resolvePath(rel.target, folder) : null;
    }
    loadResource(part, id, outputType) {
      return __awaiter(this, void 0, void 0, function* () {
        const path = this.getPathById(part, id);
        let type = mime.getType(path);
        if (path) {
          let origin_blob = yield this._package.load(path, outputType);
          return new Blob([origin_blob], { type });
        } else {
          return Promise.resolve(null);
        }
      });
    }
  };
  function deobfuscate(data, guidKey) {
    const len = 16;
    const trimmed = guidKey.replace(/{|}|-/g, "");
    const numbers = new Array(len);
    for (let i = 0; i < len; i++)
      numbers[len - i - 1] = parseInt(trimmed.substr(i * 2, 2), 16);
    for (let i = 0; i < 32; i++)
      data[i] = data[i] ^ numbers[i % len];
    return data;
  }
  function parseAsync(data, userOptions = null) {
    const ops = resolveOptions(userOptions);
    return WordDocument.load(data, new DocumentParser(ops), ops);
  }
  function renderDocument(document2, bodyContainer, styleContainer, userOptions) {
    return __awaiter(this, void 0, void 0, function* () {
      const ops = resolveOptions(userOptions);
      const renderer = new HtmlRendererSync();
      disposeRenderResult(bodyContainer);
      yield renderer.render(document2, bodyContainer, styleContainer !== null && styleContainer !== void 0 ? styleContainer : void 0, ops);
      return createRenderResult(document2, bodyContainer, ops.className);
    });
  }
  function render(data_1, bodyContainer_1) {
    return __awaiter(this, arguments, void 0, function* (data, bodyContainer, styleContainer = null, userOptions = null) {
      const doc = yield parseAsync(data, userOptions);
      return renderDocument(doc, bodyContainer, styleContainer, userOptions);
    });
  }

  // src/viewer.ts
  async function nextFrame() {
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  async function main() {
    const documentContainer = document.querySelector("#document");
    const styleContainer = document.querySelector("#styles");
    if (!documentContainer || !styleContainer) {
      throw new Error("Preview containers are missing");
    }
    const response = await fetch("/document.docx");
    if (!response.ok) {
      throw new Error(`Could not load document: HTTP ${response.status}`);
    }
    await render(await response.arrayBuffer(), documentContainer, styleContainer, {
      breakPages: true,
      inWrapper: true,
      useBase64URL: true
    });
    await document.fonts.ready;
    await nextFrame();
    await nextFrame();
    const pages = Array.from(documentContainer.querySelectorAll("section.docx"));
    if (pages.length === 0) {
      throw new Error("The renderer produced no pages");
    }
    window.officeReady = {
      pages: pages.map((page) => {
        const bounds = page.getBoundingClientRect();
        return { width: bounds.width, height: bounds.height };
      })
    };
  }
  main().catch((error) => {
    window.officeError = error instanceof Error ? error.message : String(error);
  });
})();
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" --repo lodash/lodash#4.18.1 -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
