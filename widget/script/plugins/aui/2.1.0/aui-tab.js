!function(e,t){"use strict";var i,a=function(e,t){this.extend(this.params,e),this._init(t)};a.prototype={params:{element:!1,index:1,repeatClick:!1},_init:function(e){var t=this;if(t.params.element&&1==t.params.element.nodeType&&(i=t.params.element.children)){t.setActive();for(var a=0;a<i.length;a++)i[a].setAttribute("tapmode",""),i[a].setAttribute("data-item-order",a),i[a].onclick=function(i){!t.params.repeatClick&&this.className.indexOf("aui-active")>-1||(e&&e({index:parseInt(this.getAttribute("data-item-order"))+1,dom:this}),this.parentNode.querySelector(".aui-active").classList.remove("aui-active"),this.classList.add("aui-active"))}}},setRepeat:function(e){this.params.repeatClick=e||!1},setActive:function(e){var t=this;e=e||t.params.index;var a=i[e-1];a.parentNode.querySelector(".aui-active")&&a.parentNode.querySelector(".aui-active").classList.remove("aui-active"),a.classList.add("aui-active")},extend:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}},e.auiTab=a}(window);