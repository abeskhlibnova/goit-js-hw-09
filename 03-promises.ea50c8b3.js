function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r=u("eWCmQ");const i={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]'),btn:document.querySelector("button")};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t} ms`):o(`❌ Rejected promise ${e} in ${t} ms`)}),t)}))}function a(t){e(r).Notify.success(t)}function d(t){e(r).Notify.failure(t)}i.form.addEventListener("submit",(function(e){e.preventDefault();let t=parseInt(i.delayInput.value);const n=parseInt(i.stepInput.value),o=i.amountInput.value;for(let e=0;e<o;e+=1)l(e+1,t).then(a).catch(d),t+=n}));
//# sourceMappingURL=03-promises.ea50c8b3.js.map