(function(T,v){typeof exports=="object"&&typeof module!="undefined"?v(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],v):(T=typeof globalThis!="undefined"?globalThis:T||self,v(T.Vue3Odometer={},T.Vue))})(this,function(T,v){"use strict";function vt(w){var b=typeof w;return w!=null&&(b=="object"||b=="function")}const _t=["[object AsyncFunction]","[object Function]","[object GeneratorFunction]","[object Proxy]"];function h(w){if(!vt(w))return!1;var b=Object.prototype.toString.call(w);return _t.includes(b)}var Mt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},it={exports:{}};(function(w,b){(function(){var G,_,i,x,Q,C,L,$,X,z,K,R,p,J,Y,q,Z,y,H,tt,E,N,k,I,D,j,W,d,M,P,dt,ft,ct=[].slice;Z='<span class="odometer-value"></span>',J='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+Z+"</span></span>",x='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+J+"</span></span>",L='<span class="odometer-formatting-mark"></span>',i="(,ddd).dd",$=/^\(?([^)]*)\)?(?:(.)(d+))?$/,X=30,C=2e3,G=20,z=2,Q=.5,K=1e3/X,_=1e3/G,Y="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",D=document.createElement("div").style,q=D.transition!=null||D.webkitTransition!=null||D.mozTransition!=null||D.oTransition!=null,k=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,H=function(n){var t;return t=document.createElement("div"),t.innerHTML=n,t.children[0]},N=function(n,t){return n.className=n.className.replace(new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi")," ")},y=function(n,t){return N(n,t),n.className+=" "+t},j=function(n,t){var e;if(document.createEvent!=null)return e=document.createEvent("HTMLEvents"),e.initEvent(t,!0,!0),n.dispatchEvent(e)},E=function(){var n,t;return(n=(t=window.performance)!=null&&typeof t.now=="function"?t.now():void 0)!=null?n:+new Date},I=function(n,t){return t==null&&(t=0),t?(n*=Math.pow(10,t),n+=.5,n=Math.floor(n),n/=Math.pow(10,t)):Math.round(n)},W=function(n){return n<0?Math.ceil(n):Math.floor(n)},tt=function(n){return n-I(n)},M=!1,(d=function(){var n,t,e,r,a;if(!M&&window.jQuery!=null){for(M=!0,r=["html","text"],a=[],t=0,e=r.length;t<e;t++)n=r[t],a.push(function(o){var s;return s=window.jQuery.fn[o],window.jQuery.fn[o]=function(u){var l;return u==null||((l=this[0])!=null?l.odometer:void 0)==null?s.apply(this,arguments):this[0].odometer.update(u)}}(n));return a}})(),setTimeout(d,0),p=function(){function n(t){var e,r,a,o,s,u,l,m,g,f=this;if(this.options=t,this.el=this.options.el,this.el.odometer!=null)return this.el.odometer;this.el.odometer=this,l=n.options;for(e in l)a=l[e],this.options[e]==null&&(this.options[e]=a);(o=this.options).duration==null&&(o.duration=C),this.MAX_VALUES=this.options.duration/K/z|0,this.resetFormat(),this.value=this.cleanValue((m=this.options.value)!=null?m:""),this.renderInside(),this.render();try{for(g=["innerHTML","innerText","textContent"],s=0,u=g.length;s<u;s++)r=g[s],this.el[r]!=null&&function(c){return Object.defineProperty(f.el,c,{get:function(){var S;return c==="innerHTML"?f.inside.outerHTML:(S=f.inside.innerText)!=null?S:f.inside.textContent},set:function(S){return f.update(S)}})}(r)}catch{this.watchForMutations()}}return n.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},n.prototype.watchForMutations=function(){var t=this;if(R!=null)try{return this.observer==null&&(this.observer=new R(function(e){var r;return r=t.el.innerText,t.renderInside(),t.render(t.value),t.update(r)})),this.watchMutations=!0,this.startWatchingMutations()}catch{}},n.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},n.prototype.stopWatchingMutations=function(){var t;return(t=this.observer)!=null?t.disconnect():void 0},n.prototype.cleanValue=function(t){var e;return typeof t=="string"&&(t=t.replace((e=this.format.radix)!=null?e:".","<radix>"),t=t.replace(/[.,]/g,""),t=t.replace("<radix>","."),t=parseFloat(t,10)||0),I(t,this.format.precision)},n.prototype.bindTransitionEnd=function(){var t,e,r,a,o,s,u=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,o=Y.split(" "),s=[],r=0,a=o.length;r<a;r++)t=o[r],s.push(this.el.addEventListener(t,function(){return e||(e=!0,setTimeout(function(){return u.render(),e=!1,j(u.el,"odometerdone")},0)),!0},!1));return s}},n.prototype.resetFormat=function(){var t,e,r,a,o,s,u,l;if(t=(u=this.options.format)!=null?u:i,t||(t="d"),r=$.exec(t),!r)throw new Error("Odometer: Unparsable digit format");return l=r.slice(1,4),s=l[0],o=l[1],e=l[2],a=(e!=null?e.length:void 0)||0,this.format={repeating:s,radix:o,precision:a}},n.prototype.render=function(t){var e,r,a,o,s,u,l;for(t==null&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",s=this.options.theme,e=this.el.className.split(" "),o=[],u=0,l=e.length;u<l;u++)if(r=e[u],!!r.length){if(a=/^odometer-theme-(.+)$/.exec(r)){s=a[1];continue}/^odometer(-|$)/.test(r)||o.push(r)}return o.push("odometer"),q||o.push("odometer-no-transitions"),s?o.push("odometer-theme-"+s):o.push("odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},n.prototype.formatDigits=function(t){var e,r,a,o,s,u,l,m,g,f;if(this.digits=[],this.options.formatFunction)for(a=this.options.formatFunction(t),g=a.split("").reverse(),s=0,l=g.length;s<l;s++)r=g[s],r.match(/0-9/)?(e=this.renderDigit(),e.querySelector(".odometer-value").innerHTML=r,this.digits.push(e),this.insertDigit(e)):this.addSpacer(r);else for(o=!this.format.precision||!tt(t)||!1,f=t.toString().split("").reverse(),u=0,m=f.length;u<m;u++)e=f[u],e==="."&&(o=!0),this.addDigit(e,o)},n.prototype.update=function(t){var e,r=this;if(t=this.cleanValue(t),!!(e=t-this.value))return N(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?y(this.el,"odometer-animating-up"):y(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return r.el.offsetHeight,y(r.el,"odometer-animating")},0),this.value=t},n.prototype.renderDigit=function(){return H(x)},n.prototype.insertDigit=function(t,e){return e!=null?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},n.prototype.addSpacer=function(t,e,r){var a;return a=H(L),a.innerHTML=t,r&&y(a,r),this.insertDigit(a,e)},n.prototype.addDigit=function(t,e){var r,a,o,s;if(e==null&&(e=!0),t==="-")return this.addSpacer(t,null,"odometer-negation-mark");if(t===".")return this.addSpacer((s=this.format.radix)!=null?s:".",null,"odometer-radix-mark");if(e)for(o=!1;;){if(!this.format.repeating.length){if(o)throw new Error("Bad odometer format without digits");this.resetFormat(),o=!0}if(r=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),r==="d")break;this.addSpacer(r)}return a=this.renderDigit(),a.querySelector(".odometer-value").innerHTML=t,this.digits.push(a),this.insertDigit(a)},n.prototype.animate=function(t){return!q||this.options.animation==="count"?this.animateCount(t):this.animateSlide(t)},n.prototype.animateCount=function(t){var e,r,a,o,s,u=this;if(!!(r=+t-this.value))return o=a=E(),e=this.value,(s=function(){var l,m,g;if(E()-o>u.options.duration){u.value=t,u.render(),j(u.el,"odometerdone");return}return l=E()-a,l>_&&(a=E(),g=l/u.options.duration,m=r*g,e+=m,u.render(Math.round(e))),k!=null?k(s):setTimeout(s,_)})()},n.prototype.getDigitCount=function(){var t,e,r,a,o,s;for(a=1<=arguments.length?ct.call(arguments,0):[],t=o=0,s=a.length;o<s;t=++o)r=a[t],a[t]=Math.abs(r);return e=Math.max.apply(Math,a),Math.ceil(Math.log(e+1)/Math.log(10))},n.prototype.getFractionalDigitCount=function(){var t,e,r,a,o,s,u;for(o=1<=arguments.length?ct.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=s=0,u=o.length;s<u;t=++s)a=o[t],o[t]=a.toString(),r=e.exec(o[t]),r==null?o[t]=0:o[t]=r[1].length;return Math.max.apply(Math,o)},n.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},n.prototype.animateSlide=function(t){var e,r,a,o,s,u,l,m,g,f,c,S,U,et,A,F,O,ht,B,nt,rt,mt,pt,gt,ot,at,st;if(F=this.value,m=this.getFractionalDigitCount(F,t),m&&(t=t*Math.pow(10,m),F=F*Math.pow(10,m)),!!(a=t-F)){for(this.bindTransitionEnd(),o=this.getDigitCount(F,t),s=[],e=0,c=B=0;0<=o?B<o:B>o;c=0<=o?++B:--B){if(O=W(F/Math.pow(10,o-c-1)),l=W(t/Math.pow(10,o-c-1)),u=l-O,Math.abs(u)>this.MAX_VALUES){for(f=[],S=u/(this.MAX_VALUES+this.MAX_VALUES*e*Q),r=O;u>0&&r<l||u<0&&r>l;)f.push(Math.round(r)),r+=S;f[f.length-1]!==l&&f.push(l),e++}else f=function(){st=[];for(var V=O;O<=l?V<=l:V>=l;O<=l?V++:V--)st.push(V);return st}.apply(this);for(c=nt=0,mt=f.length;nt<mt;c=++nt)g=f[c],f[c]=Math.abs(g%10);s.push(f)}for(this.resetDigits(),at=s.reverse(),c=rt=0,pt=at.length;rt<pt;c=++rt)for(f=at[c],this.digits[c]||this.addDigit(" ",c>=m),(ht=this.ribbons)[c]==null&&(ht[c]=this.digits[c].querySelector(".odometer-ribbon-inner")),this.ribbons[c].innerHTML="",a<0&&(f=f.reverse()),U=ot=0,gt=f.length;ot<gt;U=++ot)g=f[U],A=document.createElement("div"),A.className="odometer-value",A.innerHTML=g,this.ribbons[c].appendChild(A),U===f.length-1&&y(A,"odometer-last-value"),U===0&&y(A,"odometer-first-value");if(O<0&&this.addDigit("-"),et=this.inside.querySelector(".odometer-radix-mark"),et!=null&&et.parent.removeChild(et),m)return this.addSpacer(this.format.radix,this.digits[m-1],"odometer-radix-mark")}},n}(),p.options=(dt=window.odometerOptions)!=null?dt:{},setTimeout(function(){var n,t,e,r,a;if(window.odometerOptions){r=window.odometerOptions,a=[];for(n in r)t=r[n],a.push((e=p.options)[n]!=null?(e=p.options)[n]:e[n]=t);return a}},0),p.init=function(){var n,t,e,r,a,o;if(document.querySelectorAll!=null){for(t=document.querySelectorAll(p.options.selector||".odometer"),o=[],e=0,r=t.length;e<r;e++)n=t[e],o.push(n.odometer=new p({el:n,value:(a=n.innerText)!=null?a:n.textContent}));return o}},((ft=document.documentElement)!=null?ft.doScroll:void 0)!=null&&document.createEventObject!=null?(P=document.onreadystatechange,document.onreadystatechange=function(){return document.readyState==="complete"&&p.options.auto!==!1&&p.init(),P!=null?P.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(p.options.auto!==!1)return p.init()},!1),b!==null?w.exports=p:window.Odometer=p}).call(Mt)})(it,it.exports);var ut=it.exports;const lt=v.defineComponent({__name:"Odometer",props:{value:{type:Number,required:!1,default:0},format:{type:String,required:!1},theme:{type:String,required:!1,default:"default"},duration:{type:Number,required:!1},animation:{type:String,required:!1},formatFunction:{type:Function,required:!1}},emits:["ready"],setup(w,{expose:b,emit:G}){const _=w,i=v.ref(null),x=v.ref(null);v.watch(()=>_.value,d=>{i.value&&h(i.value.update)&&i.value.update(d)},{deep:!1});function Q(){typeof window!="undefined"&&(window.odometerOptions?window.odometerOptions.auto=!1:window.odometerOptions={auto:!1})}function C(){if(i.value)return;Q();const d=new ut({el:x.value,value:_.value,format:_.format,theme:_.theme,duration:_.duration,animation:_.animation,formatFunction:_.formatFunction});d.render(),G("ready",d,ut),i.value=d}function L(){i.value=null}function $(){i.value&&h(i.value.renderInside)&&i.value.renderInside()}function X(){i.value&&h(i.value.watchForMutations)&&i.value.watchForMutations()}function z(){i.value&&h(i.value.startWatchingMutations)&&i.value.startWatchingMutations()}function K(){i.value&&h(i.value.stopWatchingMutations)&&i.value.stopWatchingMutations()}function R(d){i.value&&h(i.value.cleanValue)&&i.value.cleanValue(d)}function p(){i.value&&h(i.value.bindTransitionEnd)&&i.value.bindTransitionEnd()}function J(){i.value&&h(i.value.resetFormat)&&i.value.resetFormat()}function Y(){i.value&&h(i.value.renderDigit)&&i.value.renderDigit()}function q(d){i.value&&h(i.value.formatDigits)&&i.value.formatDigits(d)}function Z(d,M){i.value&&h(i.value.insertDigit)&&i.value.insertDigit(d,M)}function y(d,M){i.value&&h(i.value.addDigit)&&i.value.addDigit(d,M)}function H(d,M,P){i.value&&h(i.value.addSpacer)&&i.value.addSpacer(d,M,P)}function tt(d){i.value&&h(i.value.animate)&&i.value.animate(d)}function E(d){i.value&&h(i.value.animateCount)&&i.value.animateCount(d)}function N(){i.value&&h(i.value.getDigitCount)&&i.value.getDigitCount()}function k(){i.value&&h(i.value.getFractionalDigitCount)&&i.value.getFractionalDigitCount()}function I(){i.value&&h(i.value.resetDigits)&&i.value.resetDigits()}function D(d){i.value&&h(i.value.animateSlide)&&i.value.animateSlide(d)}function j(d){i.value&&h(i.value.render)&&i.value.render(d)}function W(d){i.value&&h(i.value.update)&&i.value.update(d)}return v.onMounted(()=>{C()}),v.onUnmounted(()=>{L()}),b({instance:i,init:C,uninit:L,renderInside:$,watchForMutations:X,startWatchingMutations:z,stopWatchingMutations:K,cleanValue:R,bindTransitionEnd:p,resetFormat:J,renderDigit:Y,formatDigits:q,insertDigit:Z,addDigit:y,addSpacer:H,animate:tt,animateCount:E,getDigitCount:N,getFractionalDigitCount:k,resetDigits:I,animateSlide:D,render:j,update:W}),(d,M)=>(v.openBlock(),v.createElementBlock("span",{ref_key:"numRef",ref:x},null,512))}});T.Odometer=lt,T.default=lt,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
