refs={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},refs.btnStart.addEventListener("click",(()=>t.start())),refs.btnStop.addEventListener("click",(()=>t.stop()));const t={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{refs.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1}};
//# sourceMappingURL=01-color-switcher.23f6449d.js.map
