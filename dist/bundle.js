/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(108), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(420), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(564), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: baseFont;
  src:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 300;
  font-style:normal;
}

body {
  font-family:baseFont;
  display:grid;
  grid-template-rows:12vh 88vh;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  line-height:1.1rem;
}


#banner {
  border-bottom: solid black 2px;
  background-color: azure;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  height: 12vh;
  margin-bottom: 30px;
  box-shadow:0px 5px 10px gray;
  position:fixed;
  width:100vw;
  top:0;
}

#logo {
  /* percentage of screen in mobile, 800px on desktop */
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
}

.navbuttons {
  display: grid;
  grid-column: 2/3;
  grid-template-columns: repeat(4, 30px);
  justify-content: space-around;
  align-content: end;
  margin: 20px 20px 7px 20px;
}

.selectedBtn {
  color:rgb(68, 156, 156);
}

.navbuttons button {
  font-family:baseFont;
  width: 100px;
  border: none;
  outline: none;
  background: transparent;
  font-weight:800;
}

button:hover {
  cursor: pointer;
  transform:translate(0,-5px);
  transition:all .7s;
}

button:active {
  cursor: pointer;
  transform:scale(.9);
  transition:all .1s;
}


.about,
.contact,
.portfolio {
margin:auto;
margin-top:81px;
padding:15px 25px 15px 15px;
width:80ch;
}

.contact {
  display:flex;
  flex-direction: column;
  align-items:center;
}


#email::before {
  content:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  position:relative;
  margin-right:10px;
  top:5px;
}

#phone::before {
  content:url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  position:relative;
  margin-right:10px;
  top:5px;
}

.disappear {
  opacity:0%;
  transition:opacity 1.3s;
}

.reappear {
  opacity:100%;
  transition:opacity 1.3s;
}

#map {
  width: 80ch;
  height: 20ch;
}


@media screen and (max-width: 1100px) {
  .navbuttons {
    display: grid;
    grid-column: 2/3;
    grid-template-columns: repeat(2, 20px);
    grid-template-rows: repeat(2, 30px);
    row-gap: 10px;
    justify-content: space-around;
    margin: 10px;
    margin-top: 20px;
  }

  .navbuttons button {
    font: 10px;
    width: 50px;
  }

  .about {
    width:40ch;
  }

  #map {
    width: 40ch;
    height: 10ch;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0951f668b7acba944df2.otf";

/***/ }),

/***/ 420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eee1baa73917a6ad8cc5.svg";

/***/ }),

/***/ 564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22904118b466d50710a6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/ifish.png
const ifish_namespaceObject = __webpack_require__.p + "b8fb7461c8ce3079d4d1.png";
;// CONCATENATED MODULE: ./src/about.js


function aboutFunction() {
  const aboutUs = document.createElement('div');
  aboutUs.setAttribute('class', 'about');

  const description1 = document.createElement('p');
  description1.innerHTML =
    'We appreciate this opportunity to introduce ourselves. It is always our intention to make new acquaintances and foster new business relationships with the intention of them becoming a long-lasting partnership.<strong> Please consider us for any future projects; we are happy to estimate, bid and build out your next project.</strong>';
  aboutUs.appendChild(description1);

  const description2 = document.createElement('p');
  description2.innerHTML =
    "Bojan Vlajic, founder of iFish Construction is a construction industry veteran with over 23 years of experience on the field. During his tenure, he spent the majority of his career at the helm of Elmhardt Construction, starting off as a Carpenter Foreman and making his way up to Executive Project Manager at the height of the company’s success. Elmhardt Construction Corp. was formed as a non-union subcontractor in 1993 specializing in retail fit-outs, apartment buildings, hospitality, and medical and commercial office space. During his time at Elmhardt, some of Bojan’s most notable projects were Smyth Tribeca, Little Red School House, Pace University, Bottega Venetta New York Flagship, Calvin Kelin 5th Avenue, Arc'teryx, Steve Madden, NYU Lagone 84th Street, Shake Shacks (various locations), Bryant & Cooper Steak House, Webster Hall, FMC Medical Center, Tesla Service Center, and many more. Furthermore, Elmhardt Construction completed several private medical facilities where clean-rooms, MRI and X-ray rooms have been part of the scope and involved phased sequences and critical guidelines.";
  aboutUs.appendChild(description2);

  const description3 = document.createElement('p');
  description3.innerHTML =
    'Unfortunately, Elmhardt’s dynasty came to an end when its founder, Tom Bernhardt, passed away. With this, the business closed shop. Given all his extensive industry experience and wanting to continue Tom Bernhardt’s legacy, Bojan started his own firm. IFish Construction LLC was formed. Bojan combined his passion for fishing and construction and created the cheeky moniker.   ';
  aboutUs.appendChild(description3);

  const description4 = document.createElement('p');
  description4.innerHTML =
    'IFish Construction LLC specializes in interior layouts for metal stud framing, drywall and taping, and acoustical ceilings including architectural specialties, and exterior steel stud framing for mansards including standing seam panel work. We provide quality deliverables within timely deadlines.';
  aboutUs.appendChild(description4);

  const description5 = document.createElement('p');
  description5.innerHTML =
    'IFish Construction is proud of its solid safety record. All field employees have completed the following courses: 10-Hour OSHA Safety Course, 2-Hour OSHA Asbestos Awareness Course, 4-Hour Scaffold Safety Course, 2-Hour OSHA Scissor Lift Safety Course, 2-Hour OSHA Fall Prevention Course. Our supervisor and foreman has completed the 30-Hour OSHA Safety Certifications.';
  aboutUs.appendChild(description5);

  const description6 = document.createElement('p');
  description6.innerHTML =
    'We are a small business capable of big work always looking to expand our diverse base of clients. ';
  aboutUs.appendChild(description6);

  const description7 = document.createElement('p');
  description7.innerHTML =
    'We look forward to hearing from you and thank you for your time.       ';
  aboutUs.appendChild(description7);

  return aboutUs;
}



;// CONCATENATED MODULE: ./src/contact.js


function contactFunction() {
  const contactParagraph = document.createElement('div');
  contactParagraph.setAttribute('class', 'contact');

  const p1 = document.createElement('p');
  p1.innerHTML =
    'IFish is always eager to take on new work and help you through challenges. Do you have a project that you would like us to build out? Please reach out below and we will contact you as soon as possible.';
  contactParagraph.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = '';
  contactParagraph.appendChild(p2);

  const p3 = document.createElement('p');
  p3.setAttribute('id', 'phone');
  p3.innerHTML = '347-760-8102';
  contactParagraph.appendChild(p3);

  const p4 = document.createElement('p');
  p4.setAttribute('id', 'email');
  p4.innerHTML = 'Brianzx10@gmail.com';
  contactParagraph.appendChild(p4);

  const p5 = document.createElement('div');
  p5.setAttribute('id', 'map');
  p5.innerHTML = '';
  contactParagraph.appendChild(p4);

  return contactParagraph;
}



;// CONCATENATED MODULE: ./src/index.js





// Create logo element
function logo() {
  // eslint-disable-next-line no-shadow
  const logo = new Image();
  logo.src = ifish_namespaceObject;
  logo.setAttribute('id', 'logo');
  return logo;
}

// Create banner elements
function bannerEle() {
  const containing = document.createElement('div');
  containing.setAttribute('class', 'navbuttons');

  const home = document.createElement('button');
  home.innerHTML = 'Home';
  containing.appendChild(home);

  const about = document.createElement('button');
  about.innerHTML = 'About';
  containing.appendChild(about);

  const portfolio = document.createElement('button');
  portfolio.innerHTML = 'Portfolio';
  containing.appendChild(portfolio);

  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  containing.appendChild(contact);

  return containing;
}

const banner = document.getElementById('banner');
banner.appendChild(logo());
banner.appendChild(bannerEle());

const content = document.getElementById('content');

// Logic for switching page per tab clicked
const refreshpage = (event) => {
  content.setAttribute('class', 'reappear');
  const { target } = event;

  // eslint-disable-next-line eqeqeq
  if (target.textContent === 'About') {
    content.appendChild(aboutFunction());
  } else if (target.textContent === 'Contact') {
    content.appendChild(contactFunction());
  }
};

document.addEventListener('click', (event) => {
  const target = event.target.nodeName;

  // eslint-disable-next-line eqeqeq
  if (target == 'BUTTON') {
    // Remove selected class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.setAttribute('class', '');
    });
    // Set target to selected
    event.target.setAttribute('class', 'selectedBtn');

    content.setAttribute('class', 'disappear');
    setTimeout(() => {
      content.replaceChildren();
      refreshpage(event);
    }, 1300);
  }
});

})();

/******/ })()
;