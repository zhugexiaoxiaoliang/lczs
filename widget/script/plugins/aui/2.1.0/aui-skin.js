!function(e,t){"use strict";var n,a=function(e){this.extend(this.params,e),this._init()};a.prototype={params:{name:"",skinPath:"",default:!1,beginTime:"",endTime:""},_init:function(){var e=this;if(e.params.name&&e.params.skinPath)if((n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("aui-skin-name",e.params.name),n.setAttribute("href",e.params.skinPath),e.params.default)document.getElementsByTagName("head")[0].appendChild(n);else{if(!e.params.beginTime||!e.params.endTime)return;if(!e.check(e.params.beginTime,e.params.endTime))return;var t=new Date;if(t.getMinutes()<10)a="0"+t.getMinutes();else var a=t.getMinutes();var i=t.getHours()+":"+a,r=parseInt(e.params.beginTime.replace(":","")),s=parseInt(e.params.endTime.replace(":","")),m=parseInt(i.replace(":",""));r>s?(m>=r||m<=s)&&e.setSkin():r<s?m>=r&&m<=s&&e.setSkin():e.removeSkin()}},setSkin:function(){document.getElementsByTagName("head")[0].appendChild(n)},removeSkin:function(){var e=this;document.querySelector("link[aui-skin-name='"+e.params.name+"']")&&document.querySelector("link[aui-skin-name='"+e.params.name+"']").parentNode.removeChild(document.querySelector("link[aui-skin-name='"+e.params.name+"']"))},check:function(e,t){var n=e.split(":");if(2!=n.length)return!1;var a=t.split(":");if(2!=a.length)return!1;var i=new Date,r=new Date;return i.setHours(n[0]),i.setMinutes(n[1]),r.setHours(a[0]),r.setMinutes(a[1]),!(n[0]>24||n[0]<0||a[0]>24||a[0]<0)&&!(n[1]>59||n[1]<0||a[1]>59||a[1]<0)},extend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}},e.auiSkin=a}(window);