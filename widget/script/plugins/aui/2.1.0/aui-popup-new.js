!function(t,i){"use strict";var o=function(){};o.prototype={init:function(t,i){this.frameBounces=t.frameBounces,this.location=t.location,this.buttons=t.buttons,this.maskDiv,this.popupDiv,this.open(t,i)},open:function(t,i){var o="",e="aui-popup-top",p=this;if(p.popupDiv)return void p.close();switch(p.maskDiv||(p.maskDiv=document.createElement("div"),p.maskDiv.className="aui-mask",document.body.appendChild(p.maskDiv)),p.location){case"top":e="aui-popup-top";break;case"top-left":e="aui-popup-top-left";break;case"top-right":e="aui-popup-top-right";break;case"bottom":e="aui-popup-bottom";break;case"bottom-left":e="aui-popup-bottom-left";break;case"bottom-right":e="aui-popup-bottom-right";break;default:e="aui-popup-top"}if(p.popupDiv=document.createElement("div"),p.popupDiv.className="aui-popup "+e,p.popupDiv.innerHTML='<div class="aui-popup-arrow"></div><div class="aui-popup-content"></div>',document.body.appendChild(p.popupDiv),p.buttons&&p.buttons.length){o+='<ul class="aui-list aui-list-noborder">';for(var u=0;u<p.buttons.length;u++)o+='<li class="aui-list-item aui-list-item-middle">',o+='<div class="aui-list-item-label-icon"><img src="'+p.buttons[u].image+'"></div>',o+='<div class="aui-list-item-inner">'+p.buttons[u].text+"</div>",o+="</li>";o+="</ul>"}document.querySelector(".aui-popup .aui-popup-content").insertAdjacentHTML("beforeend",o);document.querySelector(".aui-popup").offsetHeight;p.maskDiv.classList.add("aui-mask-in"),p.popupDiv.classList.add("aui-popup-in"),p.popupDiv.addEventListener("touchmove",function(t){t.preventDefault()}),p.maskDiv.addEventListener("touchmove",function(t){t.preventDefault()}),"undefined"!=typeof api&&"object"==typeof api&&p.frameBounces&&api.setFrameAttr({bounces:!1});var a=document.querySelectorAll(".aui-popup .aui-list-item");a&&a.length>0&&setTimeout(function(){p.maskDiv.onclick=function(){p.close()};for(var t=0;t<a.length;t++)!function(t){a[t].onclick=function(){if(p.buttons[t].value)o=p.buttons[t].value;else var o=null;i&&i({buttonIndex:t+1,buttonTitle:this.textContent,buttonValue:o}),p.close()}}(t)},350)},close:function(){var t=this;if("undefined"!=typeof api&&"object"==typeof api&&t.frameBounces&&api.setFrameAttr({bounces:!0}),t.popupDiv){t.popupDiv.offsetHeight;t.popupDiv.classList.add("aui-popup-out"),t.maskDiv.style.opacity=0,setTimeout(function(){t.maskDiv&&t.maskDiv.parentNode.removeChild(t.maskDiv),t.popupDiv.parentNode.removeChild(t.popupDiv),t.maskDiv=t.popupDiv=!1},300)}}},t.auiPopup=o}(window);