!function(){refs={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},refs.btnStart.addEventListener("click",(function(){return t.start()})),refs.btnStop.addEventListener("click",(function(){return t.stop()}));var t={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){refs.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}}}();
//# sourceMappingURL=01-color-switcher.c4f1e8fb.js.map