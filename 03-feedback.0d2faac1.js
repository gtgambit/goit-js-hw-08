!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u=o("hKHmD"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i.default(e,t,r[t])}))}return e};var a,i=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){return s.default(e)||c.default(e,t)||p.default(e,t)||d.default()};var s=y(o("8slrw")),c=y(o("7AJDX")),d=y(o("ifqQW")),p=y(o("auk6i"));function y(e){return e&&e.__esModule?e:{default:e}}var v=o("1WSnx"),b=document.querySelector(".feedback-form"),m="feedback-form-state";b.addEventListener("input",(0,v.throttle)((function(t){var r,n=t.target,o=n.name,a=n.value,i=null!==(r=JSON.parse(localStorage.getItem(m)))&&void 0!==r?r:{};i=e(l)({},i,e(u)({},o,a)),localStorage.setItem(m,JSON.stringify(i))}),500)),b.addEventListener("submit",(function(t){t.preventDefault();var r={},n=new FormData(b),o=!0,u=!1,l=void 0;try{for(var a,i=n.entries()[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){var s=e(f)(a.value,2),c=s[0],d=s[1];if(!d)return;r[c]=d}}catch(e){u=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(u)throw l}}localStorage.removeItem(m),console.log(r),b.reset()}));var g,_;_=null!==(g=JSON.parse(localStorage.getItem(m)))&&void 0!==g?g:{},Object.keys(_).forEach((function(e){b.elements[e].type="value"}))}();
//# sourceMappingURL=03-feedback.0d2faac1.js.map
