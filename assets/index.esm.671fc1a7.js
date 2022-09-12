import{h as Ut,F as jh,j as zh,g as re,a as za,d as Qh,b as Hh,k as Wh,S as Xh,_ as Yh,r as Ao,L as Jh,l as Ur,e as Zh,C as el,m as tl,n as nl,p as sl,q as rl,s as il,t as ol,i as al}from"./index.esm2017.c37818b2.js";var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,li=li||{},C=ul||self;function ks(){}function Br(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function zn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function cl(n){return Object.prototype.hasOwnProperty.call(n,Dr)&&n[Dr]||(n[Dr]=++hl)}var Dr="closure_uid_"+(1e9*Math.random()>>>0),hl=0;function ll(n,e,t){return n.call.apply(n.bind,arguments)}function dl(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function he(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?he=ll:he=dl,he.apply(null,arguments)}function fs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function de(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function We(){this.s=this.s,this.o=this.o}var fl=0;We.prototype.s=!1;We.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fl!=0)&&cl(this)};We.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qa=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Ha=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const s=n.length,r=typeof n=="string"?n.split(""):n;for(let i=0;i<s;i++)i in r&&e.call(t,r[i],i,n)};function ml(n){e:{var e=id;const t=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<t;r++)if(r in s&&e.call(void 0,s[r],r,n)){e=r;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Co(n){return Array.prototype.concat.apply([],arguments)}function di(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function _s(n){return/^[\s\xa0]*$/.test(n)}var No=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ge(n,e){return n.indexOf(e)!=-1}function Ar(n,e){return n<e?-1:n>e?1:0}var pe;e:{var ko=C.navigator;if(ko){var _o=ko.userAgent;if(_o){pe=_o;break e}}pe=""}function fi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Wa(n){const e={};for(const t in n)e[t]=n[t];return e}var Ro="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xa(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<Ro.length;i++)t=Ro[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function mi(n){return mi[" "](n),n}mi[" "]=ks;function gl(n){var e=wl;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var pl=ge(pe,"Opera"),Bt=ge(pe,"Trident")||ge(pe,"MSIE"),Ya=ge(pe,"Edge"),qr=Ya||Bt,Ja=ge(pe,"Gecko")&&!(ge(pe.toLowerCase(),"webkit")&&!ge(pe,"Edge"))&&!(ge(pe,"Trident")||ge(pe,"MSIE"))&&!ge(pe,"Edge"),yl=ge(pe.toLowerCase(),"webkit")&&!ge(pe,"Edge");function Za(){var n=C.document;return n?n.documentMode:void 0}var Rs;e:{var Cr="",Nr=function(){var n=pe;if(Ja)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ya)return/Edge\/([\d\.]+)/.exec(n);if(Bt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(yl)return/WebKit\/(\S+)/.exec(n);if(pl)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Nr&&(Cr=Nr?Nr[1]:""),Bt){var kr=Za();if(kr!=null&&kr>parseFloat(Cr)){Rs=String(kr);break e}}Rs=Cr}var wl={};function vl(){return gl(function(){let n=0;const e=No(String(Rs)).split("."),t=No("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Ar(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ar(r[2].length==0,i[2].length==0)||Ar(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var $r;if(C.document&&Bt){var Mo=Za();$r=Mo||parseInt(Rs,10)||void 0}else $r=void 0;var Il=$r,El=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{C.addEventListener("test",ks,e),C.removeEventListener("test",ks,e)}catch{}return n}();function fe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};function Nn(n,e){if(fe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ja){e:{try{mi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Tl[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Nn.Z.h.call(this)}}de(Nn,fe);var Tl={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Qn="closure_listenable_"+(1e6*Math.random()|0),bl=0;function Sl(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ia=r,this.key=++bl,this.ca=this.fa=!1}function Xs(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Ys(n){this.src=n,this.g={},this.h=0}Ys.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Gr(n,e,s,r);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new Sl(e,this.src,i,!!s,r),e.fa=t,n.push(e)),e};function Kr(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Qa(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Xs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Gr(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==s)return r}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),_r={};function eu(n,e,t,s,r){if(s&&s.once)return nu(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eu(n,e[i],t,s,r);return null}return t=wi(t),n&&n[Qn]?n.N(e,t,zn(s)?!!s.capture:!!s,r):tu(n,e,t,!1,s,r)}function tu(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=zn(r)?!!r.capture:!!r,a=yi(n);if(a||(n[gi]=a=new Ys(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=xl(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)El||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(ru(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function xl(){function n(t){return e.call(n.src,n.listener,t)}var e=Dl;return n}function nu(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nu(n,e[i],t,s,r);return null}return t=wi(t),n&&n[Qn]?n.O(e,t,zn(s)?!!s.capture:!!s,r):tu(n,e,t,!0,s,r)}function su(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)su(n,e[i],t,s,r);else s=zn(s)?!!s.capture:!!s,t=wi(t),n&&n[Qn]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Gr(i,t,s,r),-1<t&&(Xs(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=yi(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Gr(e,t,s,r)),(t=-1<n?e[n]:null)&&pi(t))}function pi(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Qn])Kr(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(ru(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=yi(e))?(Kr(t,n),t.h==0&&(t.src=null,e[gi]=null)):Xs(n)}}}function ru(n){return n in _r?_r[n]:_r[n]="on"+n}function Dl(n,e){if(n.ca)n=!0;else{e=new Nn(e,this);var t=n.listener,s=n.ia||n.src;n.fa&&pi(n),n=t.call(s,e)}return n}function yi(n){return n=n[gi],n instanceof Ys?n:null}var Rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function wi(n){return typeof n=="function"?n:(n[Rr]||(n[Rr]=function(e){return n.handleEvent(e)}),n[Rr])}function ie(){We.call(this),this.i=new Ys(this),this.P=this,this.I=null}de(ie,We);ie.prototype[Qn]=!0;ie.prototype.removeEventListener=function(n,e,t,s){su(this,n,e,t,s)};function le(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new fe(e,n);else if(e instanceof fe)e.target=e.target||n;else{var r=e;e=new fe(s,n),Xa(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=ms(o,s,!0,e)&&r}if(o=e.g=n,r=ms(o,s,!0,e)&&r,r=ms(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=ms(o,s,!1,e)&&r}ie.prototype.M=function(){if(ie.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Xs(t[s]);delete n.g[e],n.h--}}this.I=null};ie.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ie.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function ms(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,u=o.ia||o.src;o.fa&&Kr(n.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var vi=C.JSON.stringify;function Al(){var n=ou;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Cl{constructor(){this.h=this.g=null}add(e,t){const s=iu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var iu=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Nl,n=>n.reset());class Nl{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function kl(n){C.setTimeout(()=>{throw n},0)}function Ii(n,e){jr||_l(),zr||(jr(),zr=!0),ou.add(n,e)}var jr;function _l(){var n=C.Promise.resolve(void 0);jr=function(){n.then(Rl)}}var zr=!1,ou=new Cl;function Rl(){for(var n;n=Al();){try{n.h.call(n.g)}catch(t){kl(t)}var e=iu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}zr=!1}function Js(n,e){ie.call(this),this.h=n||1,this.g=e||C,this.j=he(this.kb,this),this.l=Date.now()}de(Js,ie);T=Js.prototype;T.da=!1;T.S=null;T.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),le(this,"tick"),this.da&&(Ei(this),this.start()))}};T.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ei(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}T.M=function(){Js.Z.M.call(this),Ei(this),delete this.g};function Ti(n,e,t){if(typeof n=="function")t&&(n=he(n,t));else if(n&&typeof n.handleEvent=="function")n=he(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(n,e||0)}function au(n){n.g=Ti(()=>{n.g=null,n.i&&(n.i=!1,au(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Ml extends We{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:au(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(n){We.call(this),this.h=n,this.g={}}de(kn,We);var Oo=[];function uu(n,e,t,s){Array.isArray(t)||(t&&(Oo[0]=t.toString()),t=Oo);for(var r=0;r<t.length;r++){var i=eu(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function cu(n){fi(n.g,function(e,t){this.g.hasOwnProperty(t)&&pi(e)},n),n.g={}}kn.prototype.M=function(){kn.Z.M.call(this),cu(this)};kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zs(){this.g=!0}Zs.prototype.Aa=function(){this.g=!1};function Ol(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function Ll(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Ot(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Fl(n,t)+(s?" "+s:"")})}function Vl(n,e){n.info(function(){return"TIMEOUT: "+e})}Zs.prototype.info=function(){};function Fl(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return vi(t)}catch{return e}}var bt={},Lo=null;function er(){return Lo=Lo||new ie}bt.Ma="serverreachability";function hu(n){fe.call(this,bt.Ma,n)}de(hu,fe);function _n(n){const e=er();le(e,new hu(e))}bt.STAT_EVENT="statevent";function lu(n,e){fe.call(this,bt.STAT_EVENT,n),this.stat=e}de(lu,fe);function ye(n){const e=er();le(e,new lu(e,n))}bt.Na="timingevent";function du(n,e){fe.call(this,bt.Na,n),this.size=e}de(du,fe);function Hn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},e)}var tr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function bi(){}bi.prototype.h=null;function Vo(n){return n.h||(n.h=n.i())}function mu(){}var Wn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Si(){fe.call(this,"d")}de(Si,fe);function xi(){fe.call(this,"c")}de(xi,fe);var Qr;function nr(){}de(nr,bi);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};Qr=new nr;function Xn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.X=s||1,this.V=new kn(this),this.P=Pl,n=qr?125:void 0,this.W=new Js(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var Pl=45e3,Hr={},Ms={};T=Xn.prototype;T.setTimeout=function(n){this.P=n};function Wr(n,e,t){n.K=1,n.v=rr(Oe(e)),n.s=t,n.U=!0,pu(n,null)}function pu(n,e){n.F=Date.now(),Yn(n),n.A=Oe(n.v);var t=n.A,s=n.X;Array.isArray(s)||(s=[String(s)]),bu(t.h,"t",s),n.C=0,t=n.l.H,n.h=new gu,n.g=Ku(n.l,t?e:null,!n.s),0<n.O&&(n.L=new Ml(he(n.Ia,n,n.g),n.O)),uu(n.V,n.g,"readystatechange",n.gb),e=n.H?Wa(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),_n(),Ol(n.j,n.u,n.A,n.m,n.X,n.s)}T.gb=function(n){n=n.target;const e=this.L;e&&Me(n)==3?e.l():this.Ia(n)};T.Ia=function(n){try{if(n==this.g)e:{const h=Me(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||qr||this.g&&(this.h.h||this.g.ga()||Bo(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?_n(3):_n(2)),sr(this);var t=this.g.ba();this.N=t;t:if(yu(this)){var s=Bo(this.g);n="";var r=s.length,i=Me(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ut(this),Tn(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,Ll(this.j,this.u,this.A,this.m,this.X,h,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_s(a)){var c=a;break t}}c=null}if(t=c)Ot(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xr(this,t);else{this.i=!1,this.o=3,ye(12),ut(this),Tn(this);break e}}this.U?(wu(this,h,o),qr&&this.i&&h==3&&(uu(this.V,this.W,"tick",this.fb),this.W.start())):(Ot(this.j,this.m,o,null),Xr(this,o)),h==4&&ut(this),this.i&&!this.I&&(h==4?Uu(this.l,this):(this.i=!1,Yn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ye(12)):(this.o=0,ye(13)),ut(this),Tn(this)}}}catch{}finally{}};function yu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function wu(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Ul(n,t),r==Ms){e==4&&(n.o=4,ye(14),s=!1),Ot(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Hr){n.o=4,ye(15),Ot(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Ot(n.j,n.m,r,null),Xr(n,r);yu(n)&&r!=Ms&&r!=Hr&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ye(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),Oi(e),e.L=!0,ye(11))):(Ot(n.j,n.m,t,"[Invalid Chunked Response]"),ut(n),Tn(n))}T.fb=function(){if(this.g){var n=Me(this.g),e=this.g.ga();this.C<e.length&&(sr(this),wu(this,n,e),this.i&&n!=4&&Yn(this))}};function Ul(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Ms:(t=Number(e.substring(t,s)),isNaN(t)?Hr:(s+=1,s+t>e.length?Ms:(e=e.substr(s,t),n.C=s+t,e)))}T.cancel=function(){this.I=!0,ut(this)};function Yn(n){n.Y=Date.now()+n.P,vu(n,n.P)}function vu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Hn(he(n.eb,n),e)}function sr(n){n.B&&(C.clearTimeout(n.B),n.B=null)}T.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Vl(this.j,this.A),this.K!=2&&(_n(),ye(17)),ut(this),this.o=2,Tn(this)):vu(this,this.Y-n)};function Tn(n){n.l.G==0||n.I||Uu(n.l,n)}function ut(n){sr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ei(n.W),cu(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Xr(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Yr(t.i,n))){if(t.I=n.N,!n.J&&Yr(t.i,n)&&t.G==3){try{var s=t.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Fs(t),ar(t);else break e;Mi(t),ye(18)}}else t.ta=r[1],0<t.ta-t.U&&37500>r[2]&&t.N&&t.A==0&&!t.v&&(t.v=Hn(he(t.ab,t),6e3));if(1>=Du(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else ct(t,11)}else if((n.J||t.g==n)&&Fs(t),!_s(e))for(r=t.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.U=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.J=c[1],t.la=c[2];const h=c[3];h!=null&&(t.ma=h,t.h.info("VER="+t.ma));const l=c[4];l!=null&&(t.za=l,t.h.info("SVER="+t.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.K=s,t.h.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(ge(p,"spdy")||ge(p,"quic")||ge(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ci(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.sa=E,B(s.F,s.D,E))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),s=t;var o=n;if(s.oa=$u(s,s.H?s.la:null,s.W),o.J){Au(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(sr(a),Yn(a)),s.g=o}else Fu(s);0<t.l.length&&ur(t)}else c[0]!="stop"&&c[0]!="close"||ct(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ct(t,7):Ri(t):c[0]!="noop"&&t.j&&t.j.wa(c),t.A=0)}}_n(4)}catch{}}function Bl(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Br(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Di(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Br(n)||typeof n=="string")Ha(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Br(n)||typeof n=="string"){t=[];for(var s=n.length,r=0;r<s;r++)t.push(r)}else for(r in t=[],s=0,n)t[s++]=r;s=Bl(n),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}}function Zt(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var s=0;s<t;s+=2)this.set(arguments[s],arguments[s+1])}else if(n)if(n instanceof Zt)for(t=n.T(),s=0;s<t.length;s++)this.set(t[s],n.get(t[s]));else for(s in n)this.set(s,n[s])}T=Zt.prototype;T.R=function(){Ai(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};T.T=function(){return Ai(this),this.g.concat()};function Ai(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var s=n.g[e];lt(n.h,s)&&(n.g[t++]=s),e++}n.g.length=t}if(n.i!=n.g.length){var r={};for(t=e=0;e<n.g.length;)s=n.g[e],lt(r,s)||(n.g[t++]=s,r[s]=1),e++;n.g.length=t}}T.get=function(n,e){return lt(this.h,n)?this.h[n]:e};T.set=function(n,e){lt(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};T.forEach=function(n,e){for(var t=this.T(),s=0;s<t.length;s++){var r=t[s],i=this.get(r);n.call(e,i,r,this)}};function lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Iu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ql(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function dt(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof dt){this.g=e!==void 0?e:n.g,Os(this,n.j),this.s=n.s,Ls(this,n.i),Vs(this,n.m),this.l=n.l,e=n.h;var t=new Rn;t.i=e.i,e.g&&(t.g=new Zt(e.g),t.h=e.h),Fo(this,t),this.o=n.o}else n&&(t=String(n).match(Iu))?(this.g=!!e,Os(this,t[1]||"",!0),this.s=bn(t[2]||""),Ls(this,t[3]||"",!0),Vs(this,t[4]),this.l=bn(t[5]||"",!0),Fo(this,t[6]||"",!0),this.o=bn(t[7]||"")):(this.g=!!e,this.h=new Rn(null,this.g))}dt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(vn(e,Po,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(vn(e,Po,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(vn(t,t.charAt(0)=="/"?zl:jl,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",vn(t,Hl)),n.join("")};function Oe(n){return new dt(n)}function Os(n,e,t){n.j=t?bn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ls(n,e,t){n.i=t?bn(e,!0):e}function Vs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Fo(n,e,t){e instanceof Rn?(n.h=e,Wl(n.h,n.g)):(t||(e=vn(e,Ql)),n.h=new Rn(e,n.g))}function B(n,e,t){n.h.set(e,t)}function rr(n){return B(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function $l(n){return n instanceof dt?Oe(n):new dt(n,void 0)}function Kl(n,e,t,s){var r=new dt(null,void 0);return n&&Os(r,n),e&&Ls(r,e),t&&Vs(r,t),s&&(r.l=s),r}function bn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function vn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Gl),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Gl(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Po=/[#\/\?@]/g,jl=/[#\?:]/g,zl=/[#\?]/g,Ql=/[#\?@]/g,Hl=/#/g;function Rn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Xe(n){n.g||(n.g=new Zt,n.h=0,n.i&&ql(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=Rn.prototype;T.add=function(n,e){Xe(this),this.i=null,n=en(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Eu(n,e){Xe(n),e=en(n,e),lt(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,lt(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Ai(n)))}function Tu(n,e){return Xe(n),e=en(n,e),lt(n.g.h,e)}T.forEach=function(n,e){Xe(this),this.g.forEach(function(t,s){Ha(t,function(r){n.call(e,r,s,this)},this)},this)};T.T=function(){Xe(this);for(var n=this.g.R(),e=this.g.T(),t=[],s=0;s<e.length;s++)for(var r=n[s],i=0;i<r.length;i++)t.push(e[s]);return t};T.R=function(n){Xe(this);var e=[];if(typeof n=="string")Tu(this,n)&&(e=Co(e,this.g.get(en(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Co(e,n[t])}return e};T.set=function(n,e){return Xe(this),this.i=null,n=en(this,n),Tu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function bu(n,e,t){Eu(n,e),0<t.length&&(n.i=null,n.g.set(en(n,e),di(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var s=e[t],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),n.push(o)}}return this.i=n.join("&")};function en(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Wl(n,e){e&&!n.j&&(Xe(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(Eu(this,s),bu(this,r,t))},n)),n.j=e}var Xl=class{constructor(n,e){this.h=n,this.g=e}};function Su(n){this.l=n||Yl,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ea&&C.g.Ea()&&C.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yl=10;function xu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Du(n){return n.h?1:n.g?n.g.size:0}function Yr(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ci(n,e){n.g?n.g.add(e):n.h=e}function Au(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Su.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Cu(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return di(n.i)}function Ni(){}Ni.prototype.stringify=function(n){return C.JSON.stringify(n,void 0)};Ni.prototype.parse=function(n){return C.JSON.parse(n,void 0)};function Jl(){this.g=new Ni}function Zl(n,e,t){const s=t||"";try{Di(n,function(r,i){let o=r;zn(r)&&(o=vi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ed(n,e){const t=new Zs;if(C.Image){const s=new Image;s.onload=fs(gs,t,s,"TestLoadImage: loaded",!0,e),s.onerror=fs(gs,t,s,"TestLoadImage: error",!1,e),s.onabort=fs(gs,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=fs(gs,t,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function gs(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Jn(n){this.l=n.$b||null,this.j=n.ib||!1}de(Jn,bi);Jn.prototype.g=function(){return new ir(this.l,this.j)};Jn.prototype.i=function(n){return function(){return n}}({});function ir(n,e){ie.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=ki,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}de(ir,ie);var ki=0;T=ir.prototype;T.open=function(n,e){if(this.readyState!=ki)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Mn(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||C).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=ki};T.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nu(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Nu(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}T.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Zn(this):Mn(this),this.readyState==3&&Nu(this)}};T.Ua=function(n){this.g&&(this.response=this.responseText=n,Zn(this))};T.Ta=function(n){this.g&&(this.response=n,Zn(this))};T.ha=function(){this.g&&Zn(this)};function Zn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Mn(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Mn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var td=C.JSON.parse;function Y(n){ie.call(this),this.headers=new Zt,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ku,this.K=this.L=!1}de(Y,ie);var ku="",nd=/^https?$/i,sd=["POST","PUT"];T=Y.prototype;T.ea=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qr.g(),this.C=this.u?Vo(this.u):Vo(Qr),this.g.onreadystatechange=he(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Uo(this,i);return}n=t||"";const r=new Zt(this.headers);s&&Di(s,function(i,o){r.set(o,i)}),s=ml(r.T()),t=C.FormData&&n instanceof C.FormData,!(0<=Qa(sd,e))||s||t||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mu(this),0<this.B&&((this.K=rd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.pa,this)):this.A=Ti(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Uo(this,i)}};function rd(n){return Bt&&vl()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function id(n){return n.toLowerCase()=="content-type"}T.pa=function(){typeof li<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function Uo(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,_u(n),or(n)}function _u(n){n.D||(n.D=!0,le(n,"complete"),le(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,le(this,"complete"),le(this,"abort"),or(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),or(this,!0)),Y.Z.M.call(this)};T.Fa=function(){this.s||(this.F||this.v||this.l?Ru(this):this.cb())};T.cb=function(){Ru(this)};function Ru(n){if(n.h&&typeof li<"u"&&(!n.C[1]||Me(n)!=4||n.ba()!=2)){if(n.v&&Me(n)==4)Ti(n.Fa,0,n);else if(le(n,"readystatechange"),Me(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(Iu)[1]||null;if(!r&&C.self&&C.self.location){var i=C.self.location.protocol;r=i.substr(0,i.length-1)}s=!nd.test(r?r.toLowerCase():"")}t=s}if(t)le(n,"complete"),le(n,"success");else{n.m=6;try{var o=2<Me(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",_u(n)}}finally{or(n)}}}}function or(n,e){if(n.g){Mu(n);const t=n.g,s=n.C[0]?ks:null;n.g=null,n.C=null,e||le(n,"ready");try{t.onreadystatechange=s}catch{}}}function Mu(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}function Me(n){return n.g?n.g.readyState:0}T.ba=function(){try{return 2<Me(this)?this.g.status:-1}catch{return-1}};T.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),td(e)}};function Bo(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ku:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}T.Da=function(){return this.m};T.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function od(n){let e="";return fi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function _i(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=od(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):B(n,e,t))}function dn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ou(n){this.za=0,this.l=[],this.h=new Zs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=dn("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=dn("baseRetryDelayMs",5e3,n),this.$a=dn("retryDelaySeedMs",1e4,n),this.Ya=dn("forwardChannelMaxRetries",2,n),this.ra=dn("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Su(n&&n.concurrentRequestLimit),this.Ca=new Jl,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}T=Ou.prototype;T.ma=8;T.G=1;function Ri(n){if(Lu(n),n.G==3){var e=n.V++,t=Oe(n.F);B(t,"SID",n.J),B(t,"RID",e),B(t,"TYPE","terminate"),es(n,t),e=new Xn(n,n.h,e,void 0),e.K=2,e.v=rr(Oe(t)),t=!1,C.navigator&&C.navigator.sendBeacon&&(t=C.navigator.sendBeacon(e.v.toString(),"")),!t&&C.Image&&(new Image().src=e.v,t=!0),t||(e.g=Ku(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Yn(e)}qu(n)}T.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function ar(n){n.g&&(Oi(n),n.g.cancel(),n.g=null)}function Lu(n){ar(n),n.u&&(C.clearTimeout(n.u),n.u=null),Fs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function Mr(n,e){n.l.push(new Xl(n.Za++,e)),n.G==3&&ur(n)}function ur(n){xu(n.i)||n.m||(n.m=!0,Ii(n.Ha,n),n.C=0)}function ad(n,e){return Du(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Hn(he(n.Ha,n,e),Bu(n,n.C)),n.C++,!0)}T.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const r=new Xn(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Wa(i),Xa(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var s=this.l[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Vu(this,r,e),t=Oe(this.F),B(t,"RID",n),B(t,"CVER",22),this.D&&B(t,"X-HTTP-Session-Id",this.D),es(this,t),this.o&&i&&_i(t,this.o,i),Ci(this.i,r),this.Ra&&B(t,"TYPE","init"),this.ja?(B(t,"$req",e),B(t,"SID","null"),r.$=!0,Wr(r,t,null)):Wr(r,t,e),this.G=2}}else this.G==3&&(n?qo(this,n):this.l.length==0||xu(this.i)||qo(this))};function qo(n,e){var t;e?t=e.m:t=n.V++;const s=Oe(n.F);B(s,"SID",n.J),B(s,"RID",t),B(s,"AID",n.U),es(n,s),n.o&&n.s&&_i(s,n.o,n.s),t=new Xn(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Vu(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Ci(n.i,t),Wr(t,s,e)}function es(n,e){n.j&&Di({},function(t,s){B(e,s,t)})}function Vu(n,e,t){t=Math.min(n.l.length,t);var s=n.j?he(n.j.Oa,n.j,n):null;e:{var r=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<t;u++){let c=r[u].h;const h=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{Zl(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,s}function Fu(n){n.g||n.u||(n.Y=1,Ii(n.Ga,n),n.A=0)}function Mi(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Hn(he(n.Ga,n),Bu(n,n.A)),n.A++,!0)}T.Ga=function(){if(this.u=null,Pu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Hn(he(this.bb,this),n)}};T.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ye(10),ar(this),Pu(this))};function Oi(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Pu(n){n.g=new Xn(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Oe(n.oa);B(e,"RID","rpc"),B(e,"SID",n.J),B(e,"CI",n.N?"0":"1"),B(e,"AID",n.U),es(n,e),B(e,"TYPE","xmlhttp"),n.o&&n.s&&_i(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=rr(Oe(e)),t.s=null,t.U=!0,pu(t,n)}T.ab=function(){this.v!=null&&(this.v=null,ar(this),Mi(this),ye(19))};function Fs(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Uu(n,e){var t=null;if(n.g==e){Fs(n),Oi(n),n.g=null;var s=2}else if(Yr(n.i,e))t=e.D,Au(n.i,e),s=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=er(),le(s,new du(s,t)),ur(n)}else Fu(n);else if(r=e.o,r==3||r==0&&0<n.I||!(s==1&&ad(n,e)||s==2&&Mi(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:ct(n,5);break;case 4:ct(n,10);break;case 3:ct(n,6);break;default:ct(n,2)}}}function Bu(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function ct(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var s=he(n.jb,n);t||(t=new dt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Os(t,"https"),rr(t)),ed(t.toString(),s)}else ye(2);n.G=0,n.j&&n.j.va(e),qu(n),Lu(n)}T.jb=function(n){n?(this.h.info("Successfully pinged google.com"),ye(2)):(this.h.info("Failed to ping google.com"),ye(1))};function qu(n){n.G=0,n.I=-1,n.j&&((Cu(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,di(n.l),n.l.length=0),n.j.ua())}function $u(n,e,t){let s=$l(t);if(s.i!="")e&&Ls(s,e+"."+s.i),Vs(s,s.m);else{const r=C.location;s=Kl(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,t)}return n.aa&&fi(n.aa,function(r,i){B(s,i,r)}),e=n.D,t=n.sa,e&&t&&B(s,e,t),B(s,"VER",n.ma),es(n,s),s}function Ku(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Y(new Jn({ib:!0})):new Y(n.qa),e.L=n.H,e}function Gu(){}T=Gu.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Oa=function(){};function Ps(){if(Bt&&!(10<=Number(Il)))throw Error("Environmental error: no available transport.")}Ps.prototype.g=function(n,e){return new xe(n,e)};function xe(n,e){ie.call(this),this.g=new Ou(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!_s(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_s(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new tn(this)}de(xe,ie);xe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Ii(he(n.hb,n,e))),ye(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=$u(n,null,n.W),ur(n)};xe.prototype.close=function(){Ri(this.g)};xe.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Mr(this.g,e)}else this.v?(e={},e.__data__=vi(n),Mr(this.g,e)):Mr(this.g,n)};xe.prototype.M=function(){this.g.j=null,delete this.j,Ri(this.g),delete this.g,xe.Z.M.call(this)};function ju(n){Si.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}de(ju,Si);function zu(){xi.call(this),this.status=1}de(zu,xi);function tn(n){this.g=n}de(tn,Gu);tn.prototype.xa=function(){le(this.g,"a")};tn.prototype.wa=function(n){le(this.g,new ju(n))};tn.prototype.va=function(n){le(this.g,new zu)};tn.prototype.ua=function(){le(this.g,"b")};Ps.prototype.createWebChannel=Ps.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;tr.NO_ERROR=0;tr.TIMEOUT=8;tr.HTTP_ERROR=6;fu.COMPLETE="complete";mu.EventType=Wn;Wn.OPEN="a";Wn.CLOSE="b";Wn.ERROR="c";Wn.MESSAGE="d";ie.prototype.listen=ie.prototype.N;Y.prototype.listenOnce=Y.prototype.O;Y.prototype.getLastError=Y.prototype.La;Y.prototype.getLastErrorCode=Y.prototype.Da;Y.prototype.getStatus=Y.prototype.ba;Y.prototype.getResponseJson=Y.prototype.Qa;Y.prototype.getResponseText=Y.prototype.ga;Y.prototype.send=Y.prototype.ea;var ud=function(){return new Ps},cd=function(){return er()},Or=tr,hd=fu,ld=bt,$o={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dd=Jn,ps=mu,fd=Y;const Ko="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Jh("@firebase/firestore");function Jr(){return Ke.logLevel}function Lg(n){Ke.setLogLevel(n)}function w(n,...e){if(Ke.logLevel<=Ut.DEBUG){const t=e.map(Li);Ke.debug(`Firestore (${nn}): ${n}`,...t)}}function Q(n,...e){if(Ke.logLevel<=Ut.ERROR){const t=e.map(Li);Ke.error(`Firestore (${nn}): ${n}`,...t)}}function qt(n,...e){if(Ke.logLevel<=Ut.WARN){const t=e.map(Li);Ke.warn(`Firestore (${nn}): ${n}`,...t)}}function Li(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n="Unexpected state"){const e=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: `+n;throw Q(e),new Error(e)}function D(n,e){n||b()}function Vg(n,e){n||b()}function I(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends jh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class md{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(te.UNAUTHENTICATED))}shutdown(){}}class gd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pd{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ne,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ne)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new Qu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new te(e)}}class yd{constructor(e,t,s){this.type="FirstParty",this.user=te.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class wd{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new yd(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vd{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(D(typeof t.token=="string"),this.p=t.token,new Hu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Fg{getToken(){return Promise.resolve(new Hu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Id(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function A(n,e){return n<e?-1:n>e?1:0}function $t(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function Xu(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new K(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?A(this.nanoseconds,e.nanoseconds):A(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new K(0,0))}static max(){return new x(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,s){t===void 0?t=0:t>e.length&&b(),s===void 0?s=e.length-t:s>e.length-t&&b(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return On.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof On?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _ extends On{construct(e,t,s){return new _(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new _(t)}static emptyPath(){return new _([])}}const Ed=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends On{construct(e,t,s){return new H(e,t,s)}static isValidIdentifier(e){return Ed.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(_.fromString(e))}static fromName(e){return new v(_.fromString(e).popFirst(5))}static empty(){return new v(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new _(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Zr(n){return n.fields.find(e=>e.kind===2)}function st(n){return n.fields.filter(e=>e.kind!==2)}function Td(n,e){let t=A(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(n.fields.length,e.fields.length);++s)if(t=bd(n.fields[s],e.fields[s]),t!==0)return t;return A(n.fields.length,e.fields.length)}Us.UNKNOWN_ID=-1;class Ts{constructor(e,t){this.fieldPath=e,this.kind=t}}function bd(n,e){const t=H.comparator(n.fieldPath,e.fieldPath);return t!==0?t:A(n.kind,e.kind)}class Ln{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ln(0,De.min())}}function Yu(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=x.fromTimestamp(s===1e9?new K(t+1,0):new K(t,s));return new De(r,v.empty(),e)}function Ju(n){return new De(n.readTime,n.key,-1)}class De{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new De(x.min(),v.empty(),-1)}static max(){return new De(x.max(),v.empty(),-1)}}function Vi(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:A(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ec{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Zu)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},u=>s(u))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new f((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new ne,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new Sn(e,t.error)):this.T.resolve()},this.transaction.onerror=s=>{const r=Fi(s.target.error);this.T.reject(new Sn(e,r))}}static open(e,t,s,r){try{return new cr(t,e.transaction(r,s))}catch(i){throw new Sn(t,i)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new xd(t)}}class Ae{constructor(e,t,s){this.name=e,this.version=t,this.P=s,Ae.v(Ur())===12.2&&Q("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),rt(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!Zh())return!1;if(Ae.S())return!0;const e=Ur(),t=Ae.v(e),s=0<t&&t<10,r=Ae.D(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static S(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.C)==="YES"}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static D(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async k(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new Sn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Sn(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.P.M(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.O&&(this.db.onversionchange=t=>this.O(t)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=cr.open(this.db,e,i?"readonly":"readwrite",s),u=r(a).next(c=>(a.R(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.A,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sd{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return rt(this.$.delete())}}class Sn extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Je(n){return n.name==="IndexedDbTransactionError"}class xd{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),rt(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),rt(this.store.add(e))}get(e){return rt(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),rt(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),rt(this.store.count())}K(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.G(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}j(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}W(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.H=!1;const r=this.cursor(s);return this.G(r,(i,o,a)=>a.delete())}J(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.G(r,t)}Y(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=Fi(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const u=new Sd(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const h=c.catch(l=>(u.done(),f.reject(l)));s.push(h)}u.isDone?r():u.U===null?a.continue():a.continue(u.U)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.H?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rt(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Fi(s.target.error);t(r)}})}let Go=!1;function Fi(n){const e=Ae.v(Ur());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Go||(Go=!0,setTimeout(()=>{throw s},0)),s}}return n}class Dd{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Z(e){w("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{w("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(t){Je(t)?w("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ye(t)}await this.Z(1)})}}class Ad{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.et(t,e))}et(e,t){const s=new Set;let r=t,i=!0;return f.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return w("IndexBackiller",`Processing collection: ${o}`),this.nt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}nt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.st(r,i)).next(a=>(w("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}st(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=Ju(i);Vi(o,s)>0&&(s=o)}),new De(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.it(s),this.rt=s=>t.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function St(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.ot=-1;class z{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:ae.RED,this.left=r!=null?r:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ae(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,s,r){return this}insert(n,e,t){return new ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zo(this.data.getIterator())}getIteratorFrom(e){return new zo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof O)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new O(this.comparator);return t.data=e,t}}class zo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kt(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.fields=e,e.sort(H.comparator)}static empty(){return new Se([])}unionWith(e){let t=new O(H.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Se(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $t(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new J(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new J(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return A(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Cd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ge(n){if(D(!!n),typeof n=="string"){let e=0;const t=Cd.exec(n);if(D(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:j(n.seconds),nanos:j(n.nanos)}}function j(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ft(n){return typeof n=="string"?J.fromBase64String(n):J.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function nc(n){const e=n.mapValue.fields.__previous_value__;return Pi(e)?nc(e):e}function Vn(n){const e=Ge(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,s,r,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class je{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof je&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){return n==null}function Fn(n){return n===0&&1/n==-1/0}function sc(n){return typeof n=="number"&&Number.isInteger(n)&&!Fn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},bs={nullValue:"NULL_VALUE"};function mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pi(n)?4:rc(n)?9007199254740991:10:b()}function Re(n,e){if(n===e)return!0;const t=mt(n);if(t!==mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vn(n).isEqual(Vn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ge(s.timestampValue),o=Ge(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return ft(s.bytesValue).isEqual(ft(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return j(s.geoPointValue.latitude)===j(r.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return j(s.integerValue)===j(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=j(s.doubleValue),o=j(r.doubleValue);return i===o?Fn(i)===Fn(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return $t(n.arrayValue.values||[],e.arrayValue.values||[],Re);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(jo(i)!==jo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Re(i[a],o[a])))return!1;return!0}(n,e);default:return b()}}function Pn(n,e){return(n.values||[]).find(t=>Re(t,e))!==void 0}function ze(n,e){if(n===e)return 0;const t=mt(n),s=mt(e);if(t!==s)return A(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return A(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=j(r.integerValue||r.doubleValue),a=j(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Qo(n.timestampValue,e.timestampValue);case 4:return Qo(Vn(n),Vn(e));case 5:return A(n.stringValue,e.stringValue);case 6:return function(r,i){const o=ft(r),a=ft(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=A(o[u],a[u]);if(c!==0)return c}return A(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=A(j(r.latitude),j(i.latitude));return o!==0?o:A(j(r.longitude),j(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ze(o[u],a[u]);if(c)return c}return A(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===qe.mapValue&&i===qe.mapValue)return 0;if(r===qe.mapValue)return 1;if(i===qe.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=A(a[h],c[h]);if(l!==0)return l;const d=ze(o[a[h]],u[c[h]]);if(d!==0)return d}return A(a.length,c.length)}(n.mapValue,e.mapValue);default:throw b()}}function Qo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return A(n,e);const t=Ge(n),s=Ge(e),r=A(t.seconds,s.seconds);return r!==0?r:A(t.nanos,s.nanos)}function Vt(n){return ei(n)}function ei(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ge(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ft(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ei(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ei(s.fields[a])}`;return i+"}"}(n.mapValue):b();var e,t}function gt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ti(n){return!!n&&"integerValue"in n}function Un(n){return!!n&&"arrayValue"in n}function Ho(n){return!!n&&"nullValue"in n}function Wo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return St(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=xn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kd(n){return"nullValue"in n?bs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?gt(je.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:b()}function _d(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?gt(je.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?qe:b()}function Xo(n,e){const t=ze(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Yo(n,e){const t=ze(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xn(t)}setAll(e){let t=H.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=xn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Re(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){St(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ue(xn(this.value))}}function ic(n){const e=[];return St(n.fields,(t,s)=>{const r=new H([t]);if(Ss(s)){const i=ic(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Se(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new V(e,0,x.min(),x.min(),ue.empty(),0)}static newFoundDocument(e,t,s){return new V(e,1,t,x.min(),s,0)}static newNoDocument(e,t){return new V(e,2,t,x.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new V(e,3,t,x.min(),ue.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof V&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new V(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Jo(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Rd(n,e,t,s,r,i,o)}function pt(n){const e=I(n);if(e.ut===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Vt(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ts(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Vt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Vt(s)).join(",")),e.ut=t}return e.ut}function Md(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${Vt(s.value)}`;var s}).join(", ")}]`),ts(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Vt(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Vt(t)).join(",")),`Target(${e})`}function ns(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!qd(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!Re(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!na(n.startAt,e.startAt)&&na(n.endAt,e.endAt)}function Bs(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qs(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function Zo(n,e,t){let s=bs,r=!0;for(const i of qs(n,e)){let o=bs,a=!0;switch(i.op){case"<":case"<=":o=kd(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=bs}Xo({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Xo({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function ea(n,e,t){let s=qe,r=!0;for(const i of qs(n,e)){let o=qe,a=!0;switch(i.op){case">=":case">":o=_d(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=qe}Yo({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Yo({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}class ce extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.ct(e,t,s):new Od(e,t,s):t==="array-contains"?new Fd(e,s):t==="in"?new Pd(e,s):t==="not-in"?new Ud(e,s):t==="array-contains-any"?new Bd(e,s):new ce(e,t,s)}static ct(e,t,s){return t==="in"?new Ld(e,s):new Vd(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.at(ze(t,this.value)):t!==null&&mt(this.value)===mt(t)&&this.at(ze(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Od extends ce{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.at(t)}}class Ld extends ce{constructor(e,t){super(e,"in",t),this.keys=oc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Vd extends ce{constructor(e,t){super(e,"not-in",t),this.keys=oc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class Fd extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Un(t)&&Pn(t.arrayValue,this.value)}}class Pd extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pn(this.value.arrayValue,t)}}class Ud extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pn(this.value.arrayValue,t)}}class Bd extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Un(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Pn(this.value.arrayValue,s))}}class Qe{constructor(e,t){this.position=e,this.inclusive=t}}class Ft{constructor(e,t="asc"){this.field=e,this.dir=t}}function qd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function ta(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=ze(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function na(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Re(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function ac(n,e,t,s,r,i,o,a){return new Le(n,e,t,s,r,i,o,a)}function sn(n){return new Le(n)}function sa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ui(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Bi(n){for(const e of n.filters)if(e.ht())return e.field;return null}function qi(n){return n.collectionGroup!==null}function Kt(n){const e=I(n);if(e.lt===null){e.lt=[];const t=Bi(e),s=Ui(e);if(t!==null&&s===null)t.isKeyField()||e.lt.push(new Ft(t)),e.lt.push(new Ft(H.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ft(H.keyField(),i))}}}return e.lt}function be(n){const e=I(n);if(!e.ft)if(e.limitType==="F")e.ft=Jo(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Ft(i.field,o))}const s=e.endAt?new Qe(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qe(e.startAt.position,e.startAt.inclusive):null;e.ft=Jo(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.ft}function $s(n,e,t){return new Le(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ss(n,e){return ns(be(n),be(e))&&n.limitType===e.limitType}function uc(n){return`${pt(be(n))}|lt:${n.limitType}`}function ni(n){return`Query(target=${Md(be(n))}; limitType=${n.limitType})`}function $i(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=ta(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Kt(t),s)||t.endAt&&!function(r,i,o){const a=ta(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Kt(t),s))}(n,e)}function cc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hc(n){return(e,t)=>{let s=!1;for(const r of Kt(n)){const i=$d(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function $d(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?ze(a,u):b()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n,e){if(n.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fn(e)?"-0":e}}function dc(n){return{integerValue:""+n}}function fc(n,e){return sc(e)?dc(e):lc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this._=void 0}}function Kd(n,e,t){return n instanceof Gt?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof yt?gc(n,e):n instanceof wt?pc(n,e):function(s,r){const i=mc(s,r),o=ra(i)+ra(s._t);return ti(i)&&ti(s._t)?dc(o):lc(s.wt,o)}(n,e)}function Gd(n,e,t){return n instanceof yt?gc(n,e):n instanceof wt?pc(n,e):t}function mc(n,e){return n instanceof jt?ti(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Gt extends hr{}class yt extends hr{constructor(e){super(),this.elements=e}}function gc(n,e){const t=yc(e);for(const s of n.elements)t.some(r=>Re(r,s))||t.push(s);return{arrayValue:{values:t}}}class wt extends hr{constructor(e){super(),this.elements=e}}function pc(n,e){let t=yc(e);for(const s of n.elements)t=t.filter(r=>!Re(r,s));return{arrayValue:{values:t}}}class jt extends hr{constructor(e,t){super(),this.wt=e,this._t=t}}function ra(n){return j(n.integerValue||n.doubleValue)}function yc(n){return Un(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.field=e,this.transform=t}}function jd(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof yt&&s instanceof yt||t instanceof wt&&s instanceof wt?$t(t.elements,s.elements,Re):t instanceof jt&&s instanceof jt?Re(t._t,s._t):t instanceof Gt&&s instanceof Gt}(n.transform,e.transform)}class zd{constructor(e,t){this.version=e,this.transformResults=t}}class ${constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $}static exists(e){return new $(void 0,e)}static updateTime(e){return new $(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lr{}function wc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new on(n.key,$.none()):new rn(n.key,n.data,$.none());{const t=n.data,s=ue.empty();let r=new O(H.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ve(n.key,s,new Se(r.toArray()),$.none())}}function Qd(n,e,t){n instanceof rn?function(s,r,i){const o=s.value.clone(),a=oa(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ve?function(s,r,i){if(!xs(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=oa(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Dn(n,e,t,s){return n instanceof rn?function(r,i,o,a){if(!xs(r.precondition,i))return o;const u=r.value.clone(),c=aa(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ve?function(r,i,o,a){if(!xs(r.precondition,i))return o;const u=aa(r.fieldTransforms,a,i),c=i.data;return c.setAll(vc(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,s):function(r,i,o){return xs(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function Hd(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=mc(s.transform,r||null);i!=null&&(t===null&&(t=ue.empty()),t.set(s.field,i))}return t||null}function ia(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&$t(t,s,(r,i)=>jd(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class rn extends lr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ve extends lr{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function oa(n,e,t){const s=new Map;D(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Gd(o,a,t[r]))}return s}function aa(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,Kd(i,o,e))}return s}class on extends lr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ki extends lr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,k;function Ic(n){switch(n){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Ec(n){if(n===void 0)return Q("GRPC error has no .code"),m.UNKNOWN;switch(n){case X.OK:return m.OK;case X.CANCELLED:return m.CANCELLED;case X.UNKNOWN:return m.UNKNOWN;case X.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case X.INTERNAL:return m.INTERNAL;case X.UNAVAILABLE:return m.UNAVAILABLE;case X.UNAUTHENTICATED:return m.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case X.NOT_FOUND:return m.NOT_FOUND;case X.ALREADY_EXISTS:return m.ALREADY_EXISTS;case X.PERMISSION_DENIED:return m.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case X.ABORTED:return m.ABORTED;case X.OUT_OF_RANGE:return m.OUT_OF_RANGE;case X.UNIMPLEMENTED:return m.UNIMPLEMENTED;case X.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(k=X||(X={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){St(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return tc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new z(v.comparator);function Te(){return Xd}const Tc=new z(v.comparator);function In(...n){let e=Tc;for(const t of n)e=e.insert(t.key,t);return e}function bc(n){let e=Tc;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ce(){return An()}function Sc(){return An()}function An(){return new Ze(n=>n.toString(),(n,e)=>n.isEqual(e))}const Yd=new z(v.comparator),Jd=new O(v.comparator);function N(...n){let e=Jd;for(const t of n)e=e.add(t);return e}const Zd=new O(A);function dr(){return Zd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const s=new Map;return s.set(e,os.createSynthesizedTargetChangeForCurrentChange(e,t)),new is(x.min(),s,dr(),Te(),N())}}class os{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new os(J.EMPTY_BYTE_STRING,t,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,s,r){this.gt=e,this.removedTargetIds=t,this.key=s,this.yt=r}}class xc{constructor(e,t){this.targetId=e,this.It=t}}class Dc{constructor(e,t,s=J.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class ua{constructor(){this.Tt=0,this.Et=ha(),this.At=J.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=N(),t=N(),s=N();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:b()}}),new os(this.At,this.Rt,e,t,s)}Dt(){this.bt=!1,this.Et=ha()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class ef{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Te(),this.Bt=ca(),this.Lt=new O(A)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,t=>{const s=this.Qt(t);switch(e.state){case 0:this.jt(t)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),s.Vt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach((s,r)=>{this.jt(r)&&t(r)})}zt(e){const t=e.targetId,s=e.It.count,r=this.Ht(t);if(r){const i=r.target;if(Bs(i))if(s===0){const o=new v(i.path);this.Kt(t,o,V.newNoDocument(o,x.min()))}else D(s===1);else this.Jt(t)!==s&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Bs(a.target)){const u=new v(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,V.newNoDocument(u,e))}i.vt&&(t.set(o,i.St()),i.Dt())}});let s=N();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ht(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new is(e,t,this.Lt,this.$t,s);return this.$t=Te(),this.Bt=ca(),this.Lt=new O(A),r}qt(e,t){if(!this.jt(e))return;const s=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,s),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),s&&(this.$t=this.$t.insert(t,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new ua,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new O(A),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=this.Ht(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ua),this.Ot.getRemoteKeysForTarget(e).forEach(t=>{this.Kt(e,t,null)})}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function ca(){return new z(v.comparator)}function ha(){return new z(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sf{constructor(e,t){this.databaseId=e,this.dt=t}}function Bn(n,e){return n.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ac(n,e){return n.dt?e.toBase64():e.toUint8Array()}function rf(n,e){return Bn(n,e.toTimestamp())}function se(n){return D(!!n),x.fromTimestamp(function(e){const t=Ge(e);return new K(t.seconds,t.nanos)}(n))}function Gi(n,e){return function(t){return new _(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Cc(n){const e=_.fromString(n);return D(Vc(e)),e}function qn(n,e){return Gi(n.databaseId,e.path)}function ke(n,e){const t=Cc(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(kc(t))}function si(n,e){return Gi(n.databaseId,e)}function Nc(n){const e=Cc(n);return e.length===4?_.emptyPath():kc(e)}function $n(n){return new _(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kc(n){return D(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function la(n,e,t){return{name:qn(n,e),fields:t.value.mapValue.fields}}function _c(n,e,t){const s=ke(n,e.name),r=se(e.updateTime),i=new ue({mapValue:{fields:e.fields}}),o=V.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function of(n,e){return"found"in e?function(t,s){D(!!s.found),s.found.name,s.found.updateTime;const r=ke(t,s.found.name),i=se(s.found.updateTime),o=new ue({mapValue:{fields:s.found.fields}});return V.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){D(!!s.missing),D(!!s.readTime);const r=ke(t,s.missing),i=se(s.readTime);return V.newNoDocument(r,i)}(n,e):b()}function af(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,c){return u.dt?(D(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(D(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?m.UNKNOWN:Ec(u.code);return new y(c,u.message||"")}(o);t=new Dc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ke(n,s.document.name),i=se(s.document.updateTime),o=new ue({mapValue:{fields:s.document.fields}}),a=V.newFoundDocument(r,i,o),u=s.targetIds||[],c=s.removedTargetIds||[];t=new Ds(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ke(n,s.document),i=s.readTime?se(s.readTime):x.min(),o=V.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ke(n,s.document),i=s.removedTargetIds||[];t=new Ds([],i,r,null)}else{if(!("filter"in e))return b();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Wd(r),o=s.targetId;t=new xc(o,i)}}return t}function Kn(n,e){let t;if(e instanceof rn)t={update:la(n,e.key,e.value)};else if(e instanceof on)t={delete:qn(n,e.key)};else if(e instanceof Ve)t={update:la(n,e.key,e.data),updateMask:mf(e.fieldMask)};else{if(!(e instanceof Ki))return b();t={verify:qn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Gt)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jt)return{fieldPath:i.field.canonicalString(),increment:o._t};throw b()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:rf(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b()}(n,e.precondition)),t}function ri(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?$.updateTime(se(r.updateTime)):r.exists!==void 0?$.exists(r.exists):$.none()}(e.currentDocument):$.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)D(o.setToServerValue==="REQUEST_TIME"),a=new Gt;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new yt(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new wt(c)}else"increment"in o?a=new jt(i,o.increment):b();const u=H.fromServerFormat(o.fieldPath);return new rs(u,a)}(n,r)):[];if(e.update){e.update.name;const r=ke(n,e.update.name),i=new ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Se(u.map(c=>H.fromServerFormat(c)))}(e.updateMask);return new Ve(r,i,o,t,s)}return new rn(r,i,t,s)}if(e.delete){const r=ke(n,e.delete);return new on(r,t)}if(e.verify){const r=ke(n,e.verify);return new Ki(r,t)}return b()}function uf(n,e){return n&&n.length>0?(D(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?se(s.updateTime):se(r);return i.isEqual(x.min())&&(i=se(r)),new zd(i,s.transformResults||[])}(t,e))):[]}function Rc(n,e){return{documents:[si(n,e.path)]}}function Mc(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=si(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=si(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length===0)return;const c=u.map(h=>function(l){if(l.op==="=="){if(Wo(l.value))return{unaryFilter:{field:_t(l.field),op:"IS_NAN"}};if(Ho(l.value))return{unaryFilter:{field:_t(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Wo(l.value))return{unaryFilter:{field:_t(l.field),op:"IS_NOT_NAN"}};if(Ho(l.value))return{unaryFilter:{field:_t(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_t(l.field),op:lf(l.op),value:l.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:_t(h.field),direction:hf(h.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(u,c){return u.dt||ts(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function Oc(n){let e=Nc(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){D(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=Lc(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new Ft(Lt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,ts(l)?null:l}(t.limit));let u=null;t.startAt&&(u=function(h){const l=!!h.before,d=h.values||[];return new Qe(d,l)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const l=!h.before,d=h.values||[];return new Qe(d,l)}(t.endAt)),ac(e,r,o,i,a,"F",u,c)}function cf(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lc(n){return n?n.unaryFilter!==void 0?[ff(n)]:n.fieldFilter!==void 0?[df(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Lc(e)).reduce((e,t)=>e.concat(t)):b():[]}function hf(n){return tf[n]}function lf(n){return nf[n]}function _t(n){return{fieldPath:n.canonicalString()}}function Lt(n){return H.fromServerFormat(n.fieldPath)}function df(n){return ce.create(Lt(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}function ff(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Lt(n.unaryFilter.field);return ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Lt(n.unaryFilter.field);return ce.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lt(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Lt(n.unaryFilter.field);return ce.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function mf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=da(e)),e=gf(n.get(t),e);return da(e)}function gf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function da(n){return n+""}function Ne(n){const e=n.length;if(D(e>=2),e===2)return D(n.charAt(0)===""&&n.charAt(1)===""),_.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(i,o);let u;r.length===0?u=a:(r+=a,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:b()}i=o+2}return new _(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,e){return[n,we(e)]}function Fc(n,e,t){return[n,we(e),t]}const pf={},yf=["prefixPath","collectionGroup","readTime","documentId"],wf=["prefixPath","collectionGroup","documentId"],vf=["collectionGroup","readTime","prefixPath","documentId"],If=["canonicalId","targetId"],Ef=["targetId","path"],Tf=["path","targetId"],bf=["collectionId","parent"],Sf=["indexId","uid"],xf=["uid","sequenceNumber"],Df=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Af=["indexId","uid","orderedDocumentKey"],Cf=["userId","collectionPath","documentId"],Nf=["userId","collectionPath","largestBatchId"],kf=["userId","collectionGroup","largestBatchId"],Pc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_f=[...Pc,"documentOverlays"],Uc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bc=Uc,Rf=[...Bc,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ec{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function oe(n,e){const t=I(n);return Ae.N(t.ee,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Qd(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Dn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Dn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Sc();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=wc(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&$t(this.mutations,e.mutations,(t,s)=>ia(t,s))&&$t(this.baseMutations,e.baseMutations,(t,s)=>ia(t,s))}}class zi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){D(e.mutations.length===s.length);let r=Yd;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new zi(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s,r,i=x.min(),o=x.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.ne=e}}function Mf(n,e){let t;if(e.document)t=_c(n.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=It(e.noDocument.readTime);t=V.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const s=v.fromSegments(e.unknownDocument.path),r=It(e.unknownDocument.version);t=V.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new K(s[0],s[1]);return x.fromTimestamp(r)}(e.readTime)),t}function ma(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ks(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:qn(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Bn(r,i.version.toTimestamp())}}(n.ne,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:vt(e.version)};else{if(!e.isUnknownDocument())return b();s.unknownDocument={path:t.path.toArray(),version:vt(e.version)}}return s}function Ks(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function vt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function It(n){const e=new K(n.seconds,n.nanoseconds);return x.fromTimestamp(e)}function it(n,e){const t=(e.baseMutations||[]).map(i=>ri(n.ne,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>ri(n.ne,i)),r=K.fromMillis(e.localWriteTimeMs);return new ji(e.batchId,r,t,s)}function En(n){const e=It(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?It(n.lastLimboFreeSnapshotVersion):x.min();let s;var r;return n.query.documents!==void 0?(D((r=n.query).documents.length===1),s=be(sn(Nc(r.documents[0])))):s=function(i){return be(Oc(i))}(n.query),new $e(s,n.targetId,0,n.lastListenSequenceNumber,e,t,J.fromBase64String(n.resumeToken))}function $c(n,e){const t=vt(e.snapshotVersion),s=vt(e.lastLimboFreeSnapshotVersion);let r;r=Bs(e.target)?Rc(n.ne,e.target):Mc(n.ne,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Hi(n){const e=Oc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$s(e,e.limit,"L"):e}function Lr(n,e){return new Qi(e.largestBatchId,ri(n.ne,e.overlayMutation))}function ga(n,e){const t=e.path.lastSegment();return[n,we(e.path.popLast()),t]}function pa(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:vt(s.readTime),documentKey:we(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{getBundleMetadata(e,t){return ya(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:It(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return ya(e).put({bundleId:(s=t).id,createTime:vt(se(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return wa(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:Hi(r.bundledQuery),readTime:It(r.readTime)};var r})}saveNamedQuery(e,t){return wa(e).put(function(s){return{name:s.name,readTime:vt(se(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function ya(n){return oe(n,"bundles")}function wa(n){return oe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const s=t.uid||"";return new fr(e,s)}getOverlay(e,t){return fn(e).get(ga(this.userId,t)).next(s=>s?Lr(this.wt,s):null)}getOverlays(e,t){const s=Ce();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new Qi(t,o);r.push(this.ie(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(we(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(fn(e).W("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=Ce(),i=we(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return fn(e).K("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Lr(this.wt,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=Ce();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fn(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const l=Lr(this.wt,c);i.size()<r||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}ie(e,t){return fn(e).put(function(s,r,i){const[o,a,u]=ga(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:u,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Kn(s.ne,i.mutation)}}(this.wt,this.userId,t))}}function fn(n){return oe(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(j(e.integerValue));else if("doubleValue"in e){const s=j(e.doubleValue);isNaN(s)?this.ce(t,13):(this.ce(t,15),Fn(s)?t.ae(0):t.ae(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ce(t,20),typeof s=="string"?t.he(s):(t.he(`${s.seconds||""}`),t.ae(s.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(ft(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ce(t,45),t.ae(s.latitude||0),t.ae(s.longitude||0)}else"mapValue"in e?rc(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):b()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const s=e.fields||{};this.ce(t,55);for(const r of Object.keys(s))this.le(r,t),this.oe(s[r],t)}me(e,t){const s=e.values||[];this.ce(t,50);for(const r of s)this.oe(r,t)}_e(e,t){this.ce(t,37),v.fromName(e).path.forEach(s=>{this.ce(t,60),this.ge(s,t)})}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}ot.ye=new ot;function Lf(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function va(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=Lf(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Vf{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ie(s.value),s=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ie(s);else if(s<2048)this.Ie(960|s>>>6),this.Ie(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ie(480|s>>>12),this.Ie(128|63&s>>>6),this.Ie(128|63&s);else{const r=t.codePointAt(0);this.Ie(240|r>>>18),this.Ie(128|63&r>>>12),this.Ie(128|63&r>>>6),this.Ie(128|63&r)}}this.Te()}Pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}ve(e){const t=this.Ve(e),s=va(t);this.Se(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),s=va(t);this.Se(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Ie(e){const t=255&e;t===0?(this.xe(0),this.xe(255)):t===255?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Ff{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class Pf{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class mn{constructor(){this.Oe=new Vf,this.Fe=new Ff(this.Oe),this.$e=new Pf(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return e===0?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new at(this.indexId,this.documentKey,this.arrayValue,s)}}function tt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ia(n.arrayValue,e.arrayValue),t!==0?t:(t=Ia(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function Ia(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const s=t;s.ht()?this.Ke=s:this.qe.push(s)}}Ge(e){const t=Zr(e);if(t!==void 0&&!this.Qe(t))return!1;const s=st(e);let r=0,i=0;for(;r<s.length&&this.Qe(s[r]);++r);if(r===s.length)return!0;if(this.Ke!==void 0){const o=s[r];if(!this.je(this.Ke,o)||!this.We(this.Ue[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.ze=new Wi}addToCollectionParentIndex(e,t){return this.ze.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(De.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(De.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Wi{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new O(_.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new O(_.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Uint8Array(0);class qf{constructor(e,t){this.user=e,this.databaseId=t,this.He=new Wi,this.Je=new Ze(s=>pt(s),(s,r)=>ns(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.He.add(t)});const i={collectionId:s,parent:we(r)};return Ea(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[Xu(t),""],!1,!0);return Ea(e).K(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(Ne(o.parent))}return s})}addFieldIndex(e,t){const s=vs(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=pn(e);return i.next(a=>{o.put(pa(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=vs(e),r=pn(e),i=gn(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=gn(e);let r=!0;const i=new Map;return f.forEach(this.Ye(t),o=>this.Xe(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=N();const a=[];return f.forEach(i,(u,c)=>{var h;w("IndexedDbIndexManager",`Using index ${h=u,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`} to execute ${pt(t)}`);const l=function(L,G){const P=Zr(G);if(P===void 0)return null;for(const U of qs(L,P.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,u),d=function(L,G){const P=new Map;for(const U of st(G))for(const ve of qs(L,U.fieldPath))switch(ve.op){case"==":case"in":P.set(U.fieldPath.canonicalString(),ve.value);break;case"not-in":case"!=":return P.set(U.fieldPath.canonicalString(),ve.value),Array.from(P.values())}return null}(c,u),g=function(L,G){const P=[];let U=!0;for(const ve of st(G)){const ln=ve.kind===0?Zo(L,ve.fieldPath,L.startAt):ea(L,ve.fieldPath,L.startAt);P.push(ln.value),U&&(U=ln.inclusive)}return new Qe(P,U)}(c,u),p=function(L,G){const P=[];let U=!0;for(const ve of st(G)){const ln=ve.kind===0?ea(L,ve.fieldPath,L.endAt):Zo(L,ve.fieldPath,L.endAt);P.push(ln.value),U&&(U=ln.inclusive)}return new Qe(P,U)}(c,u),E=this.Ze(u,c,g),S=this.Ze(u,c,p),M=this.tn(u,c,d),F=this.en(u.indexId,l,E,g.inclusive,S,p.inclusive,M);return f.forEach(F,L=>s.j(L,t.limit).next(G=>{G.forEach(P=>{const U=v.fromSegments(P.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return f.resolve(null)})}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,s,r,i,o,a){const u=(t!=null?t.length:1)*Math.max(s.length,i.length),c=u/(t!=null?t.length:1),h=[];for(let l=0;l<u;++l){const d=t?this.nn(t[l/c]):ws,g=this.sn(e,d,s[l%c],r),p=this.rn(e,d,i[l%c],o),E=a.map(S=>this.sn(e,d,S,!0));h.push(...this.createRange(g,p,E))}return h}sn(e,t,s,r){const i=new at(e,v.empty(),t,s);return r?i:i.Le()}rn(e,t,s,r){const i=new at(e,v.empty(),t,s);return r?i.Le():i}Xe(e,t){const s=new Uf(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.Ge(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return f.forEach(this.Ye(t),r=>this.Xe(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new O(H.comparator),u=!1;for(const c of o.filters){const h=c;h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:a=a.add(h.field))}for(const c of o.orderBy)c.field.isKeyField()||(a=a.add(c.field));return a.size+(u?1:0)}(r)&&(s=1):s=0})).next(()=>s)}on(e,t){const s=new mn;for(const r of st(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.Be(r.kind);ot.ye.re(i,o)}return s.Me()}nn(e){const t=new mn;return ot.ye.re(e,t.Be(0)),t.Me()}un(e,t){const s=new mn;return ot.ye.re(gt(this.databaseId,t),s.Be(function(r){const i=st(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Me()}tn(e,t,s){if(s===null)return[];let r=[];r.push(new mn);let i=0;for(const o of st(e)){const a=s[i++];for(const u of r)if(this.cn(t,o.fieldPath)&&Un(a))r=this.an(r,o,a);else{const c=u.Be(o.kind);ot.ye.re(a,c)}}return this.hn(r)}Ze(e,t,s){return this.tn(e,t,s.position)}hn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Me();return t}an(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const u=new mn;u.seed(a.Me()),ot.ye.re(o,u.Be(t.kind)),i.push(u)}return i}cn(e,t){return!!e.filters.find(s=>s instanceof ce&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=vs(e),r=pn(e);return(t?s.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.K()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(u=>{o.push(function(c,h){const l=h?new Ln(h.sequenceNumber,new De(It(h.readTime),new v(Ne(h.documentKey)),h.largestBatchId)):Ln.empty(),d=c.fields.map(([g,p])=>new Ts(H.fromServerFormat(g),p));return new Us(c.indexId,c.collectionGroup,d,l)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:A(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=vs(e),i=pn(e);return this.ln(e).next(o=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,u=>i.put(pa(u.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,u=>this.fn(e,r,u).next(c=>{const h=this.dn(i,u);return c.isEqual(h)?f.resolve():this._n(e,i,u,c,h)}))))})}wn(e,t,s,r){return gn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(s,t.key),documentKey:t.key.path.toArray()})}mn(e,t,s,r){return gn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(s,t.key),t.key.path.toArray()])}fn(e,t,s){const r=gn(e);let i=new O(tt);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.un(s,t)])},(o,a)=>{i=i.add(new at(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}dn(e,t){let s=new O(tt);const r=this.on(t,e);if(r==null)return s;const i=Zr(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Un(o))for(const a of o.arrayValue.values||[])s=s.add(new at(t.indexId,e.key,this.nn(a),r))}else s=s.add(new at(t.indexId,e.key,ws,r));return s}_n(e,t,s,r,i){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,u,c,h,l){const d=a.getIterator(),g=u.getIterator();let p=kt(d),E=kt(g);for(;p||E;){let S=!1,M=!1;if(p&&E){const F=c(p,E);F<0?M=!0:F>0&&(S=!0)}else p!=null?M=!0:S=!0;S?(h(E),E=kt(g)):M?(l(p),p=kt(d)):(p=kt(d),E=kt(g))}}(r,i,tt,a=>{o.push(this.wn(e,t,s,a))},a=>{o.push(this.mn(e,t,s,a))}),f.waitFor(o)}ln(e){let t=1;return pn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>tt(o,a)).filter((o,a,u)=>!a||tt(o,u[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=tt(o,e),u=tt(o,t);if(a===0)r[0]=e.Le();else if(a>0&&u<0)r.push(o),r.push(o.Le());else if(u>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,ws,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,ws,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ta)}getMinOffset(e,t){return f.mapArray(this.Ye(t),s=>this.Xe(e,s).next(r=>r||b())).next(Ta)}}function Ea(n){return oe(n,"collectionParents")}function gn(n){return oe(n,"indexEntries")}function vs(n){return oe(n,"indexConfiguration")}function pn(n){return oe(n,"indexState")}function Ta(n){D(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;Vi(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new De(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ie{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Ie(e,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=s.J({range:o},(h,l,d)=>(a++,d.delete()));i.push(u.next(()=>{D(a===1)}));const c=[];for(const h of t.mutations){const l=Fc(e,h.key.path,t.batchId);i.push(r.delete(l)),c.push(h.key)}return f.waitFor(i).next(()=>c)}function Gs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(41943040,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);class mr{constructor(e,t,s,r){this.userId=e,this.wt=t,this.indexManager=s,this.referenceDelegate=r,this.gn={}}static se(e,t,s,r){D(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new mr(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pe(e).J({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=Mt(e),o=Pe(e);return o.add({}).next(a=>{D(typeof a=="number");const u=new ji(a,t,s,r),c=function(d,g,p){const E=p.baseMutations.map(M=>Kn(d.ne,M)),S=p.mutations.map(M=>Kn(d.ne,M));return{userId:g,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:E,mutations:S}}(this.wt,this.userId,u),h=[];let l=new O((d,g)=>A(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Fc(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(c)),h.push(i.put(g,pf))}return l.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.gn[a]=u.keys()}),f.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Pe(e).get(t).next(s=>s?(D(s.userId===this.userId),it(this.wt,s)):null)}yn(e,t){return this.gn[t]?f.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.gn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Pe(e).J({index:"userMutationsIndex",range:r},(o,a,u)=>{a.userId===this.userId&&(D(a.batchId>=s),i=it(this.wt,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Pe(e).J({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pe(e).K("userMutationsIndex",t).next(s=>s.map(r=>it(this.wt,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=As(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return Mt(e).J({range:r},(o,a,u)=>{const[c,h,l]=o,d=Ne(h);if(c===this.userId&&t.path.isEqual(d))return Pe(e).get(l).next(g=>{if(!g)throw b();D(g.userId===this.userId),i.push(it(this.wt,g))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new O(A);const r=[];return t.forEach(i=>{const o=As(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Mt(e).J({range:a},(c,h,l)=>{const[d,g,p]=c,E=Ne(g);d===this.userId&&i.path.isEqual(E)?s=s.add(p):l.done()});r.push(u)}),f.waitFor(r).next(()=>this.pn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=As(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new O(A);return Mt(e).J({range:o},(u,c,h)=>{const[l,d,g]=u,p=Ne(d);l===this.userId&&s.isPrefixOf(p)?p.length===r&&(a=a.add(g)):h.done()}).next(()=>this.pn(e,a))}pn(e,t){const s=[],r=[];return t.forEach(i=>{r.push(Pe(e).get(i).next(o=>{if(o===null)throw b();D(o.userId===this.userId),s.push(it(this.wt,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Kc(e.ee,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.In(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Mt(e).J({range:s},(i,o,a)=>{if(i[0]===this.userId){const u=Ne(i[1]);r.push(u)}else a.done()}).next(()=>{D(r.length===0)})})}containsKey(e,t){return Gc(e,this.userId,t)}Tn(e){return jc(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Gc(n,e,t){const s=As(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Mt(n).J({range:i,H:!0},(a,u,c)=>{const[h,l,d]=a;h===e&&l===r&&(o=!0),c.done()}).next(()=>o)}function Pe(n){return oe(n,"mutations")}function Mt(n){return oe(n,"documentMutations")}function jc(n){return oe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Et(0)}static Rn(){return new Et(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next(t=>{const s=new Et(t.highestTargetId);return t.highestTargetId=s.next(),this.Pn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.bn(e).next(t=>x.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.bn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r)))}addTargetData(e,t){return this.vn(e,t).next(()=>this.bn(e).next(s=>(s.targetCount+=1,this.Vn(t,s),this.Pn(e,s))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Rt(e).delete(t.targetId)).next(()=>this.bn(e)).next(s=>(D(s.targetCount>0),s.targetCount-=1,this.Pn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return Rt(e).J((o,a)=>{const u=En(a);u.sequenceNumber<=t&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(e,u)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Rt(e).J((s,r)=>{const i=En(r);t(i)})}bn(e){return Sa(e).get("targetGlobalKey").next(t=>(D(t!==null),t))}Pn(e,t){return Sa(e).put("targetGlobalKey",t)}vn(e,t){return Rt(e).put($c(this.wt,t))}Vn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.bn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=pt(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Rt(e).J({range:r,index:"queryTargetsIndex"},(o,a,u)=>{const c=En(a);ns(t,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=Ue(e);return t.forEach(o=>{const a=we(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=Ue(e);return f.forEach(t,i=>{const o=we(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=Ue(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ue(e);let i=N();return r.J({range:s,H:!0},(o,a,u)=>{const c=Ne(o[1]),h=new v(c);i=i.add(h)}).next(()=>i)}containsKey(e,t){const s=we(t.path),r=IDBKeyRange.bound([s],[Xu(s)],!1,!0);let i=0;return Ue(e).J({index:"documentTargetsIndex",H:!0,range:r},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}te(e,t){return Rt(e).get(t).next(s=>s?En(s):null)}}function Rt(n){return oe(n,"targets")}function Sa(n){return oe(n,"targetGlobal")}function Ue(n){return oe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa([n,e],[t,s]){const r=A(n,t);return r===0?A(e,s):r}class Kf{constructor(e){this.Sn=e,this.buffer=new O(xa),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();xa(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gf{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Nn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return this.Nn!==null}kn(e){w("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Je(t)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ye(t)}await this.kn(3e5)})}}class jf{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.On(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Ee.ot);const s=new Kf(t);return this.Mn.forEachTarget(e,r=>s.xn(r.sequenceNumber)).next(()=>this.Mn.Fn(e,r=>s.xn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Mn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(ba)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ba):this.$n(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,t){let s,r,i,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),r=this.params.maximumSequenceNumbersToCollect):r=l,o=Date.now(),this.nthSequenceNumber(e,r))).next(l=>(s=l,a=Date.now(),this.removeTargets(e,s,t))).next(l=>(i=l,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(l=>(c=Date.now(),Jr()<=Ut.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${l} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new jf(s,r)}(this,t)}On(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Bn(e){let t=0;return this.Fn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,(s,r)=>t(r))}addReference(e,t,s){return Is(e,s)}removeReference(e,t,s){return Is(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Is(e,t)}Un(e,t){return function(s,r){let i=!1;return jc(s).Y(o=>Gc(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ln(e,(o,a)=>{if(a<=t){const u=this.Un(e,o).next(c=>{if(!c)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,x.min()),Ue(e).delete([0,we(o.path)])))});r.push(u)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Is(e,t)}Ln(e,t){const s=Ue(e);let r,i=Ee.ot;return s.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==Ee.ot&&t(new v(Ne(r)),i),i=c,r=u):i=Ee.ot}).next(()=>{i!==Ee.ot&&t(new v(Ne(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Is(n,e){return Ue(n).put(function(t,s){return{targetId:0,path:we(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.changes=new Ze(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,V.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return nt(e).put(s)}removeEntry(e,t,s){return nt(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ks(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.qn(e,s)))}getEntry(e,t){let s=V.newInvalidDocument(t);return nt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(yn(t))},(r,i)=>{s=this.Kn(t,i)}).next(()=>s)}Gn(e,t){let s={size:0,document:V.newInvalidDocument(t)};return nt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(yn(t))},(r,i)=>{s={document:this.Kn(t,i),size:Gs(i)}}).next(()=>s)}getEntries(e,t){let s=Te();return this.Qn(e,t,(r,i)=>{const o=this.Kn(r,i);s=s.insert(r,o)}).next(()=>s)}jn(e,t){let s=Te(),r=new z(v.comparator);return this.Qn(e,t,(i,o)=>{const a=this.Kn(i,o);s=s.insert(i,a),r=r.insert(i,Gs(o))}).next(()=>({documents:s,Wn:r}))}Qn(e,t,s){if(t.isEmpty())return f.resolve();let r=new O(Ca);t.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(yn(r.first()),yn(r.last())),o=r.getIterator();let a=o.getNext();return nt(e).J({index:"documentKeyIndex",range:i},(u,c,h)=>{const l=v.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Ca(a,l)<0;)s(a,null),a=o.getNext();a&&a.isEqual(l)&&(s(a,c),a=o.hasNext()?o.getNext():null),a?h.q(yn(a)):h.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),Ks(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return nt(e).K(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=Te();for(const u of o){const c=this.Kn(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(c.key,c)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=Te();const o=Aa(t,s),a=Aa(t,De.max());return nt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const l=this.Kn(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(l.key,l),i.size===r&&h.done()}).next(()=>i)}newChangeBuffer(e){return new Hf(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Da(e).get("remoteDocumentGlobalKey").next(t=>(D(!!t),t))}qn(e,t){return Da(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const s=Mf(this.wt,t);if(!(s.isNoDocument()&&s.version.isEqual(x.min())))return s}return V.newInvalidDocument(e)}}function Qc(n){return new Qf(n)}class Hf extends zc{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Ze(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new O((i,o)=>A(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Hn.get(i);if(t.push(this.zn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=ma(this.zn.wt,o);r=r.add(i.path.popLast()),s+=Gs(u)-a.size,t.push(this.zn.addEntry(e,i,u))}else if(s-=a.size,this.trackRemovals){const u=ma(this.zn.wt,o.convertToNoDocument(x.min()));t.push(this.zn.addEntry(e,i,u))}}),r.forEach(i=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.zn.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next(s=>(this.Hn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.zn.jn(e,t).next(({documents:s,Wn:r})=>(r.forEach((i,o)=>{this.Hn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Da(n){return oe(n,"remoteDocumentGlobal")}function nt(n){return oe(n,"remoteDocumentsV14")}function yn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Aa(n,e){const t=e.documentKey.path.toArray();return[n,Ks(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ca(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=A(t[i],s[i]),r)return r;return r=A(t.length,s.length),r||(r=A(t[t.length-2],s[s.length-2]),r||A(t[t.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.getBaseDocument(e,t,s))).next(r=>(s!==null&&Dn(s.mutation,r,Se.empty(),K.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,t,s=N()){const r=Ce();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=In();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Ce();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,N()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Te();const o=An(),a=An();return t.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Ve)?i=i.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Dn(h.mutation,c,h.mutation.getFieldMask(),K.now()))}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var l;return a.set(c,new Wf(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(e,t){const s=An();let r=new z((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=s.get(u)||Se.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||N()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Sc();h.forEach(d=>{if(!i.has(d)){const g=wc(t.get(d),s.get(d));g!==null&&l.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):f.resolve(Ce());let a=-1,u=i;return o.next(c=>f.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.getBaseDocument(e,h,l).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,N())).next(h=>({batchId:a,changes:bc(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let r=In();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=In();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const u=function(c,h){return new Le(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,V.newInvalidDocument(c)))});let o=In();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Dn(c.mutation,u,Se.empty(),K.now()),$i(t,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):f.resolve(V.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return f.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var s;return this.Jn.set(t.id,{id:(s=t).id,version:s.version,createTime:se(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(s){return{name:s.name,query:Hi(s.bundledQuery),readTime:se(s.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.overlays=new z(v.comparator),this.Xn=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ce();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.ie(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=Ce(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new z((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=Ce(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ce(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return f.resolve(a)}ie(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Qi(t,s));let i=this.Xn.get(t);i===void 0&&(i=N(),this.Xn.set(t,i)),this.Xn.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.Zn=new O(ee.ts),this.es=new O(ee.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const s=new ee(e,t);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.rs(new ee(e,t))}os(e,t){e.forEach(s=>this.removeReference(s,t))}us(e){const t=new v(new _([])),s=new ee(t,e),r=new ee(t,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new v(new _([])),s=new ee(t,e),r=new ee(t,e+1);let i=N();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ee(e,0),s=this.Zn.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ee{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return v.comparator(e.key,t.key)||A(e.ls,t.ls)}static ns(e,t){return A(e.ls,t.ls)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new O(ee.ts)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ji(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ws(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ee(t,0),r=new ee(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new O(A);return t.forEach(r=>{const i=new ee(r,0),o=new ee(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new ee(new v(i),0);let a=new O(A);return this.ds.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.ls)),!0)},o),f.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(s=>{const r=this._s(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){D(this.ys(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(t.mutations,r=>{const i=new ee(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,t){const s=new ee(t,0),r=this.ds.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}ys(e,t){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.ps=e,this.docs=new z(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():V.newInvalidDocument(t))}getEntries(e,t){let s=Te();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():V.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(e,t,s){let r=Te();const i=new v(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Vi(Ju(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,t,s,r){b()}Is(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new em(this)}getSize(e){return f.resolve(this.size)}}class em extends zc{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.persistence=e,this.Ts=new Ze(t=>pt(t),ns),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Es=0,this.As=new Xi,this.targetCount=0,this.Rs=Et.An()}forEachTarget(e,t){return this.Ts.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Es&&(this.Es=t),f.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Et(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.vn(t),f.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.Ts.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.As.ss(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.As.os(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.As.hs(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Ee(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new tm(this),this.indexManager=new Bf,this.remoteDocumentCache=function(s){return new Zf(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new qc(t),this.Ds=new Xf(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.bs[e.toKey()];return s||(s=new Jf(t,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new nm(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,t){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,t)))}}class nm extends ec{constructor(e){super(),this.currentSequenceNumber=e}}class gr{constructor(e){this.persistence=e,this.ks=new Xi,this.Ms=null}static Os(e){return new gr(e)}get Fs(){if(this.Ms)return this.Ms;throw b()}addReference(e,t,s){return this.ks.addReference(s,t),this.Fs.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.ks.removeReference(s,t),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),f.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const r=v.fromPath(s);return this.$s(e,r).next(i=>{i||t.removeEntry(r,x.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(s=>{s?this.Fs.delete(t.toString()):this.Fs.add(t.toString())})}Ss(e){return 0}$s(e,t){return f.or([()=>f.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.wt=e}M(e,t,s,r){const i=new cr("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fa,{unique:!0}),a.createObjectStore("documentMutations")}(e),Na(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Na(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:x.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").K().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fa,{unique:!0});const h=u.store("mutations"),l=c.map(d=>h.put(d));return f.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Bs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(i)))),s<7&&r>=7&&(o=o.next(()=>this.Us(i))),s<8&&r>=8&&(o=o.next(()=>this.qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.Ks(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:Cf});u.createIndex("collectionPathOverlayIndex",Nf,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",kf,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:yf});u.createIndex("documentKeyIndex",wf),u.createIndex("collectionGroupIndex",vf)}(e)).next(()=>this.Gs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.Qs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Sf}).createIndex("sequenceNumberIndex",xf,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Df}).createIndex("documentKeyIndex",Af,{unique:!1})}(e))),o}Ls(e){let t=0;return e.store("remoteDocuments").J((s,r)=>{t+=Gs(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Bs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.K().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.K("userMutationsIndex",o).next(a=>f.forEach(a,u=>{D(u.userId===i.userId);const c=it(this.wt,u);return Kc(e,i.userId,c).next(()=>{})}))}))}Us(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.J((o,a)=>{const u=new _(o),c=function(h){return[0,we(h)]}(u);i.push(t.get(c).next(h=>h?f.resolve():(l=>t.put({targetId:0,path:we(l),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(i))})}qs(e,t){e.createObjectStore("collectionParents",{keyPath:bf});const s=t.store("collectionParents"),r=new Wi,i=o=>{if(r.add(o)){const a=o.lastSegment(),u=o.popLast();return s.put({collectionId:a,parent:we(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new _(o);return i(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Ne(a);return i(h.popLast())}))}Ks(e){const t=e.store("targets");return t.J((s,r)=>{const i=En(r),o=$c(this.wt,i);return t.put(o)})}Gs(e,t){const s=t.store("remoteDocuments"),r=[];return s.J((i,o)=>{const a=t.store("remoteDocumentsV14"),u=(c=o,c.document?new v(_.fromString(c.document.name).popFirst(5)):c.noDocument?v.fromSegments(c.noDocument.path):c.unknownDocument?v.fromSegments(c.unknownDocument.path):b()).path.toArray();var c;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(h))}).next(()=>f.waitFor(r))}Qs(e,t){const s=t.store("mutations"),r=Qc(this.wt),i=new Wc(gr.Os,this.wt.ne);return s.K().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:N();it(this.wt,u).keys().forEach(l=>h=h.add(l)),a.set(u.userId,h)}),f.forEach(a,(u,c)=>{const h=new te(c),l=fr.se(this.wt,h),d=i.getIndexManager(h),g=mr.se(h,this.wt,d,i.referenceDelegate);return new Hc(r,g,l,d).recalculateAndSaveOverlaysForDocumentKeys(new ii(t,Ee.ot),u).next()})})}}function Na(n){n.createObjectStore("targetDocuments",{keyPath:Ef}).createIndex("documentTargetsIndex",Tf,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",If,{unique:!0}),n.createObjectStore("targetGlobal")}const Vr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yi{constructor(e,t,s,r,i,o,a,u,c,h,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.js=i,this.window=o,this.document=a,this.Ws=c,this.zs=h,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=d=>Promise.resolve(),!Yi.V())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new zf(this,r),this.ei=t+"main",this.wt=new qc(u),this.ni=new Ae(this.ei,this.Hs,new sm(this.wt)),this.Vs=new $f(this.referenceDelegate,this.wt),this.remoteDocumentCache=Qc(this.wt),this.Ds=new Of,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,h===!1&&Q("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Vr);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Vs.getHighestSequenceNumber(e))}).then(e=>{this.Ps=new Ee(e,this.Ws)}).then(()=>{this.vs=!0}).catch(e=>(this.ni&&this.ni.close(),Promise.reject(e)))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Es(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(e).next(t=>{t||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(e)).next(t=>this.isPrimary&&!t?this.li(e).next(()=>!1):!!t&&this.fi(e).next(()=>!0))).catch(e=>{if(Je(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.js.enqueueRetryable(()=>this.ti(e)),this.isPrimary=e})}ai(e){return wn(e).get("owner").next(t=>f.resolve(this.di(t)))}_i(e){return Es(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=oe(t,"clientMetadata");return s.K().next(r=>{const i=this.gi(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?f.resolve(!0):wn(e).get("owner").next(t=>{if(t!==null&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Vr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Es(e).K().next(s=>this.gi(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ii(e,Ee.ot);return this.li(t).next(()=>this._i(t))}),this.ni.close(),this.Ai()}gi(e,t){return e.filter(s=>this.mi(s.updateTimeMs,t)&&!this.pi(s.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",e=>Es(e).K().next(t=>this.gi(t,18e5).map(s=>s.clientId)))}get started(){return this.vs}getMutationQueue(e,t){return mr.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qf(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return fr.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Hs)===15?Rf:o===14?Bc:o===13?Uc:o===12?_f:o===11?Pc:void b();var o;let a;return this.ni.runTransaction(e,r,i,u=>(a=new ii(u,this.Ps?this.Ps.next():Ee.ot),t==="readwrite-primary"?this.ai(a).next(c=>!!c||this.hi(a)).next(c=>{if(!c)throw Q(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new y(m.FAILED_PRECONDITION,Zu);return s(a)}).next(c=>this.fi(a).next(()=>c)):this.bi(a).next(()=>s(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}bi(e){return wn(e).get("owner").next(t=>{if(t!==null&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)&&!this.di(t)&&!(this.zs||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,Vr)})}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wn(e).put("owner",t)}static V(){return Ae.V()}li(e){const t=wn(e);return t.get("owner").next(s=>this.di(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}mi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(Q(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground=this.document.visibilityState==="visible")}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Js=()=>{this.Ii(),tl()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const s=((t=this.si)===null||t===void 0?void 0:t.getItem(this.yi(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Q("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){Q("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch{}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wn(n){return oe(n,"owner")}function Es(n){return oe(n,"clientMetadata")}function Ji(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Pi=s,this.vi=r}static Vi(e,t){let s=N(),r=N();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Zi(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,s,r){return this.Ci(e,t).next(i=>i||this.xi(e,t,r,s)).next(i=>i||this.Ni(e,t))}Ci(e,t){if(sa(t))return f.resolve(null);let s=be(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=$s(t,null,"F"),s=be(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const c=this.ki(t,a);return this.Mi(t,c,o,u.readTime)?this.Ci(e,$s(t,null,"F")):this.Oi(e,c,t,u)}))})))}xi(e,t,s,r){return sa(t)||r.isEqual(x.min())?this.Ni(e,t):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(t,i);return this.Mi(t,o,s,r)?this.Ni(e,t):(Jr()<=Ut.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ni(t)),this.Oi(e,o,t,Yu(r,-1)))})}ki(e,t){let s=new O(hc(e));return t.forEach((r,i)=>{$i(e,i)&&(s=s.add(i))}),s}Mi(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,t){return Jr()<=Ut.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ni(t)),this.Di.getDocumentsMatchingQuery(e,t,De.min())}Oi(e,t,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,s,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new z(A),this.Bi=new Ze(i=>pt(i),ns),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$i))}}function Yc(n,e,t,s){return new rm(n,e,t,s)}async function Jc(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(s,u).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function im(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let d=f.resolve();return l.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(p=>{const E=u.docVersions.get(g);D(E!==null),p.version.compareTo(E)<0&&(h.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Zc(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Vs.getLastRemoteSnapshotVersion(t))}function om(n,e){const t=I(n),s=e.snapshotVersion;let r=t.$i;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ui.newChangeBuffer({trackRemovals:!0});r=t.$i;const a=[];e.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(t.Vs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>t.Vs.addMatchingKeys(i,h.addedDocuments,l)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?g=g.withResumeToken(J.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(p,E,S){return p.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,h)&&a.push(t.Vs.updateTargetData(i,g))});let u=Te(),c=N();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(eh(i,o,e.documentUpdates).next(h=>{u=h.Gi,c=h.Qi})),!s.isEqual(x.min())){const h=t.Vs.getLastRemoteSnapshotVersion(i).next(l=>t.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.$i=r,i))}function eh(n,e,t){let s=N(),r=N();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Te();return t.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(x.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Gi:o,Qi:r}})}function am(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zt(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Vs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.Vs.allocateTargetId(s).next(o=>(r=new $e(e,o,0,s.currentSequenceNumber),t.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.$i=t.$i.insert(s.targetId,s),t.Bi.set(e,s.targetId)),s})}async function Qt(n,e,t){const s=I(n),r=s.$i.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Je(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function js(n,e,t){const s=I(n);let r=x.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=I(a),l=h.Bi.get(c);return l!==void 0?f.resolve(h.$i.get(l)):h.Vs.getTargetData(u,c)}(s,o,be(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,t?r:x.min(),t?i:N())).next(a=>(sh(s,cc(e),a),{documents:a,ji:i})))}function th(n,e){const t=I(n),s=I(t.Vs),r=t.$i.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.te(i,e).next(o=>o?o.target:null))}function nh(n,e){const t=I(n),s=t.Li.get(e)||x.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Ui.getAllFromCollectionGroup(r,e,Yu(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(sh(t,e,r),r))}function sh(n,e,t){let s=x.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Li.set(e,s)}async function um(n,e,t,s){const r=I(n);let i=N(),o=Te();for(const c of t){const h=e.Wi(c.metadata.name);c.document&&(i=i.add(h));const l=e.zi(c);l.setReadTime(e.Hi(c.metadata.readTime)),o=o.insert(h,l)}const a=r.Ui.newChangeBuffer({trackRemovals:!0}),u=await zt(r,function(c){return be(sn(_.fromString(`__bundle__/docs/${c}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",c=>eh(c,a,o).next(h=>(a.apply(c),h)).next(h=>r.Vs.removeMatchingKeysForTargetId(c,u.targetId).next(()=>r.Vs.addMatchingKeys(c,i,u.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,h.Gi,h.Qi)).next(()=>h.Gi)))}async function cm(n,e,t=N()){const s=await zt(n,be(Hi(e.bundledQuery))),r=I(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=se(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ds.saveNamedQuery(i,e);const a=s.withResumeToken(J.EMPTY_BYTE_STRING,o);return r.$i=r.$i.insert(a.targetId,a),r.Vs.updateTargetData(i,a).next(()=>r.Vs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Vs.addMatchingKeys(i,t,s.targetId)).next(()=>r.Ds.saveNamedQuery(i,e))})}function ka(n,e){return`firestore_clients_${n}_${e}`}function _a(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Fr(n,e){return`firestore_targets_${n}_${e}`}class zs{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Ji(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new y(r.error.code,r.error.message))),o?new zs(e,t,r.state,i):(Q("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Cn{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Ji(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new y(s.error.code,s.error.message))),i?new Cn(e,s.state,r):(Q("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=dr();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=sc(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new Qs(e,i):(Q("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class eo{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new eo(t.clientId,t.onlineState):(Q("SharedClientState",`Failed to parse online state: ${e}`),null)}}class oi{constructor(){this.activeTargetIds=dr()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pr{constructor(e,t,s,r,i){this.window=e,this.js=t,this.persistenceKey=s,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new z(A),this.started=!1,this.ir=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=ka(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new oi),this.cr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const s of e){if(s===this.tr)continue;const r=this.getItem(ka(this.persistenceKey,s));if(r){const i=Qs.Ji(s,r);i&&(this.sr=this.sr.insert(i.clientId,i))}}this._r();const t=this.storage.getItem(this.lr);if(t){const s=this.wr(t);s&&this.mr(s)}for(const s of this.ir)this.nr(s);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,s){this.yr(e,t,s),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Fr(this.persistenceKey,e));if(s){const r=Cn.Ji(e,s);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fr(this.persistenceKey,e))}updateQueryState(e,t,s){this.Tr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.pr(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Q("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.cr.test(t.key)){if(t.newValue==null){const s=this.Rr(t.key);return this.br(s,null)}{const s=this.Pr(t.key,t.newValue);if(s)return this.br(s.clientId,s)}}else if(this.ar.test(t.key)){if(t.newValue!==null){const s=this.vr(t.key,t.newValue);if(s)return this.Vr(s)}}else if(this.hr.test(t.key)){if(t.newValue!==null){const s=this.Sr(t.key,t.newValue);if(s)return this.Dr(s)}}else if(t.key===this.lr){if(t.newValue!==null){const s=this.wr(t.newValue);if(s)return this.mr(s)}}else if(t.key===this.ur){const s=function(r){let i=Ee.ot;if(r!=null)try{const o=JSON.parse(r);D(typeof o=="number"),i=o}catch(o){Q("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Ee.ot&&this.sequenceNumberHandler(s)}else if(t.key===this.dr){const s=this.Cr(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Nr(r)))}}}else this.ir.push(t)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,s){const r=new zs(this.currentUser,e,t,s),i=_a(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const t=_a(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,s){const r=Fr(this.persistenceKey,e),i=new Cn(e,t,s);this.setItem(r,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const s=this.Rr(e);return Qs.Ji(s,t)}vr(e,t){const s=this.ar.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return zs.Ji(new te(i),r,t)}Sr(e,t){const s=this.hr.exec(e),r=Number(s[1]);return Cn.Ji(r,t)}wr(e){return eo.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const s=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(s),o=[],a=[];return i.forEach(u=>{r.has(u)||o.push(u)}),r.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.Or(o,a).then(()=>{this.sr=s})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=dr();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class rh{constructor(){this.Fr=new oi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,s){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new oi,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,s,r,i){const o=this.oo(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw qt("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}ao(e,t,s,r,i,o){return this.ro(e,t,s,r,i)}uo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,t){const s=lm[e];return`${this.so}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,s,r){return new Promise((i,o)=>{const a=new fd;a.listenOnce(hd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Or.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Or.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(l.status);o(new y(d,l.message))}else o(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);a.send(t,"POST",u,s,15)})}ho(e,t,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ud(),o=cd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new dd({})),this.uo(a.initMessageHeaders,t,s),nl()||sl()||rl()||il()||ol()||al()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");w("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let h=!1,l=!1;const d=new dm({jr:p=>{l?w("Connection","Not sending because WebChannel is closed:",p):(h||(w("Connection","Opening WebChannel transport."),c.open(),h=!0),w("Connection","WebChannel sending:",p),c.send(p))},Wr:()=>c.close()}),g=(p,E,S)=>{p.listen(E,M=>{try{S(M)}catch(F){setTimeout(()=>{throw F},0)}})};return g(c,ps.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),g(c,ps.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),d.eo())}),g(c,ps.EventType.ERROR,p=>{l||(l=!0,qt("Connection","WebChannel transport errored:",p),d.eo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),g(c,ps.EventType.MESSAGE,p=>{var E;if(!l){const S=p.data[0];D(!!S);const M=S,F=M.error||((E=M[0])===null||E===void 0?void 0:E.error);if(F){w("Connection","WebChannel received error:",F);const L=F.status;let G=function(U){const ve=X[U];if(ve!==void 0)return Ec(ve)}(L),P=F.message;G===void 0&&(G=m.INTERNAL,P="Unknown error status: "+L+" with message "+F.message),l=!0,d.eo(new y(G,P)),c.close()}else w("Connection","WebChannel received:",S),d.no(S)}}),g(o,ld.STAT_EVENT,p=>{p.stat===$o.PROXY?w("Connection","Detected buffering proxy"):p.stat===$o.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){return typeof window<"u"?window:null}function Cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){return new sf(n,!0)}class to{constructor(e,t,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=t,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,s,r,i,o,a,u){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new to(e,t)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(Q(t.toString()),Q("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===t&&this.Uo(s,r)},s=>{e(()=>{const r=new y(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,t){const s=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget(()=>this.Po===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mm extends oh{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.wt=i}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=af(this.wt,e),s=function(r){if(!("targetChange"in r))return x.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?x.min():i.readTime?se(i.readTime):x.min()}(e);return this.listener.Go(t,s)}Qo(e){const t={};t.database=$n(this.wt),t.addTarget=function(r,i){let o;const a=i.target;return o=Bs(a)?{documents:Rc(r,a)}:{query:Mc(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ac(r,i.resumeToken):i.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Bn(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=cf(this.wt,e);s&&(t.labels=s),this.Oo(t)}jo(e){const t={};t.database=$n(this.wt),t.removeTarget=e,this.Oo(t)}}class gm extends oh{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=uf(e.writeResults,e.commitTime),s=se(e.commitTime);return this.listener.Jo(s,t)}return D(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=$n(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Kn(this.wt,s))};this.Oo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(m.UNKNOWN,r.toString())})}ao(e,t,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class ym{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Q(t),this.su=!1):w("OnlineStateTracker",t)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{et(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=I(a);u.lu.add(4),await an(u),u._u.set("Unknown"),u.lu.delete(4),await us(u)}(this))})}),this._u=new ym(s,r)}}async function us(n){if(et(n))for(const e of n.fu)await e(!0)}async function an(n){for(const e of n.fu)await e(!1)}function pr(n,e){const t=I(n);t.hu.has(e.targetId)||(t.hu.set(e.targetId,e),ro(t)?so(t):cn(t).Co()&&no(t,e))}function Gn(n,e){const t=I(n),s=cn(t);t.hu.delete(e),s.Co()&&ah(t,e),t.hu.size===0&&(s.Co()?s.ko():et(t)&&t._u.set("Unknown"))}function no(n,e){n.wu.Nt(e.targetId),cn(n).Qo(e)}function ah(n,e){n.wu.Nt(e),cn(n).jo(e)}function so(n){n.wu=new ef({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),te:e=>n.hu.get(e)||null}),cn(n).start(),n._u.iu()}function ro(n){return et(n)&&!cn(n).Do()&&n.hu.size>0}function et(n){return I(n).lu.size===0}function uh(n){n.wu=void 0}async function vm(n){n.hu.forEach((e,t)=>{no(n,e)})}async function Im(n,e){uh(n),ro(n)?(n._u.uu(e),so(n)):n._u.set("Unknown")}async function Em(n,e,t){if(n._u.set("Online"),e instanceof Dc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Hs(n,s)}else if(e instanceof Ds?n.wu.Ut(e):e instanceof xc?n.wu.zt(e):n.wu.Gt(e),!t.isEqual(x.min()))try{const s=await Zc(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.hu.get(u);c&&r.hu.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.hu.get(a);if(!u)return;r.hu.set(a,u.withResumeToken(J.EMPTY_BYTE_STRING,u.snapshotVersion)),ah(r,a);const c=new $e(u.target,a,1,u.sequenceNumber);no(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Hs(n,s)}}async function Hs(n,e,t){if(!Je(e))throw e;n.lu.add(1),await an(n),n._u.set("Offline"),t||(t=()=>Zc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n.lu.delete(1),await us(n)})}function ch(n,e){return e().catch(t=>Hs(n,t,e))}async function un(n){const e=I(n),t=He(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Tm(e);)try{const r=await am(e.localStore,s);if(r===null){e.au.length===0&&t.ko();break}s=r.batchId,bm(e,r)}catch(r){await Hs(e,r)}hh(e)&&lh(e)}function Tm(n){return et(n)&&n.au.length<10}function bm(n,e){n.au.push(e);const t=He(n);t.Co()&&t.zo&&t.Ho(e.mutations)}function hh(n){return et(n)&&!He(n).Do()&&n.au.length>0}function lh(n){He(n).start()}async function Sm(n){He(n).Xo()}async function xm(n){const e=He(n);for(const t of n.au)e.Ho(t.mutations)}async function Dm(n,e,t){const s=n.au.shift(),r=zi.from(s,e,t);await ch(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await un(n)}async function Am(n,e){e&&He(n).zo&&await async function(t,s){if(r=s.code,Ic(r)&&r!==m.ABORTED){const i=t.au.shift();He(t).No(),await ch(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await un(t)}var r}(n,e),hh(n)&&lh(n)}async function Ma(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=et(t);t.lu.add(3),await an(t),s&&t._u.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.lu.delete(3),await us(t)}async function ai(n,e){const t=I(n);e?(t.lu.delete(2),await us(t)):e||(t.lu.add(2),await an(t),t._u.set("Unknown"))}function cn(n){return n.mu||(n.mu=function(e,t,s){const r=I(e);return r.tu(),new mm(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(n.datastore,n.asyncQueue,{zr:vm.bind(null,n),Jr:Im.bind(null,n),Go:Em.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),ro(n)?so(n):n._u.set("Unknown")):(await n.mu.stop(),uh(n))})),n.mu}function He(n){return n.gu||(n.gu=function(e,t,s){const r=I(e);return r.tu(),new gm(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(n.datastore,n.asyncQueue,{zr:Sm.bind(null,n),Jr:Am.bind(null,n),Yo:xm.bind(null,n),Jo:Dm.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await un(n)):(await n.gu.stop(),n.au.length>0&&(w("RemoteStore",`Stopping write stream with ${n.au.length} pending writes`),n.au=[]))})),n.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new io(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hn(n,e){if(Q("AsyncQueue",`${e}: ${n}`),Je(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=In(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new Pt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Pt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.yu=new z(v.comparator)}track(e){const t=e.doc.key,s=this.yu.get(t);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(t,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(t):e.type===1&&s.type===2?this.yu=this.yu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):b():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ht{constructor(e,t,s,r,i,o,a,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,t,s,r){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new Ht(e,t,Pt.emptySet(t),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.Iu=void 0,this.listeners=[]}}class Nm{constructor(){this.queries=new Ze(e=>uc(e),ss),this.onlineState="Unknown",this.Tu=new Set}}async function oo(n,e){const t=I(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new Cm),r)try{i.Iu=await t.onListen(s)}catch(o){const a=hn(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.Eu(t.onlineState),i.Iu&&e.Au(i.Iu)&&uo(t)}async function ao(n,e){const t=I(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function km(n,e){const t=I(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&uo(t)}function _m(n,e,t){const s=I(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function uo(n){n.Tu.forEach(e=>{e.next()})}class co{constructor(e,t,s){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ht(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||t==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Su(e){e=Ht.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.wt=e}Wi(e){return ke(this.wt,e)}zi(e){return e.metadata.exists?_c(this.wt,e.document,!1):V.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return se(e)}}class Mm{constructor(e,t,s){this.xu=e,this.localStore=t,this.wt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=dh(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const s=_.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,s=new La(this.wt);for(const r of e)if(r.metadata.queries){const i=s.Wi(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||N()).add(i);t.set(o,a)}}return t}async complete(){const e=await um(this.localStore,new La(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const s of this.queries)await cm(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function dh(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.key=e}}class mh{constructor(e){this.key=e}}class gh{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=N(),this.mutatedKeys=N(),this.Lu=hc(e),this.Uu=new Pt(this.Lu)}get qu(){return this.Fu}Ku(e,t){const s=t?t.Gu:new Oa,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,l)=>{const d=r.get(h),g=$i(this.query,l)?l:null,p=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?p!==E&&(s.track({type:3,doc:g}),S=!0):this.Qu(d,g)||(s.track({type:2,doc:g}),S=!0,(u&&this.Lu(g,u)>0||c&&this.Lu(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(u||c)&&(a=!0)),S&&(g?(o=o.add(g),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((c,h)=>function(l,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(l)-g(d)}(c.type,h.type)||this.Lu(c.doc,h.doc)),this.ju(s);const o=t?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,i.length!==0||u?{snapshot:new Ht(this.query,e.Uu,r,i,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Oa,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=N(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const t=[];return e.forEach(s=>{this.Bu.has(s)||t.push(new mh(s))}),this.Bu.forEach(s=>{e.has(s)||t.push(new fh(s))}),t}Ju(e){this.Fu=e.ji,this.Bu=N();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Ht.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Om{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Lm{constructor(e){this.key=e,this.Xu=!1}}class Vm{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Ze(a=>uc(a),ss),this.ec=new Map,this.nc=new Set,this.sc=new z(v.comparator),this.ic=new Map,this.rc=new Xi,this.oc={},this.uc=new Map,this.cc=Et.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Fm(n,e){const t=go(n);let s,r;const i=t.tc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await zt(t.localStore,be(e));t.isPrimaryClient&&pr(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ho(t,e,s,a==="current")}return r}async function ho(n,e,t,s){n.hc=(h,l,d)=>async function(g,p,E,S){let M=p.view.Ku(E);M.Mi&&(M=await js(g.localStore,p.query,!1).then(({documents:G})=>p.view.Ku(G,M)));const F=S&&S.targetChanges.get(p.targetId),L=p.view.applyChanges(M,g.isPrimaryClient,F);return ui(g,p.targetId,L.zu),L.snapshot}(n,h,l,d);const r=await js(n.localStore,e,!0),i=new gh(e,r.ji),o=i.Ku(r.documents),a=os.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline"),u=i.applyChanges(o,n.isPrimaryClient,a);ui(n,t,u.zu);const c=new Om(e,t,i);return n.tc.set(e,c),n.ec.has(t)?n.ec.get(t).push(e):n.ec.set(t,[e]),u.snapshot}async function Pm(n,e){const t=I(n),s=t.tc.get(e),r=t.ec.get(s.targetId);if(r.length>1)return t.ec.set(s.targetId,r.filter(i=>!ss(i,e))),void t.tc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Qt(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Gn(t.remoteStore,s.targetId),Wt(t,s.targetId)}).catch(Ye)):(Wt(t,s.targetId),await Qt(t.localStore,s.targetId,!0))}async function Um(n,e,t){const s=po(n);try{const r=await function(i,o){const a=I(i),u=K.now(),c=o.reduce((d,g)=>d.add(g.key),N());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Te(),p=N();return a.Ui.getEntries(d,c).next(E=>{g=E,g.forEach((S,M)=>{M.isValidDocument()||(p=p.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{h=E;const S=[];for(const M of o){const F=Hd(M,h.get(M.key).overlayedDocument);F!=null&&S.push(new Ve(M.key,F,ic(F.value.mapValue),$.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,S,o)}).next(E=>{l=E;const S=E.applyToLocalDocumentSet(h,p);return a.documentOverlayCache.saveOverlays(d,E.batchId,S)})}).then(()=>({batchId:l.batchId,changes:bc(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.oc[i.currentUser.toKey()];u||(u=new z(A)),u=u.insert(o,a),i.oc[i.currentUser.toKey()]=u}(s,r.batchId,t),await Fe(s,r.changes),await un(s.remoteStore)}catch(r){const i=hn(r,"Failed to persist write");t.reject(i)}}async function ph(n,e){const t=I(n);try{const s=await om(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.ic.get(i);o&&(D(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?D(o.Xu):r.removedDocuments.size>0&&(D(o.Xu),o.Xu=!1))}),await Fe(t,s,e)}catch(s){await Ye(s)}}function Va(n,e,t){const s=I(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Eu(o)&&(u=!0)}),u&&uo(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bm(n,e,t){const s=I(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new z(v.comparator);o=o.insert(i,V.newNoDocument(i,x.min()));const a=N().add(i),u=new is(x.min(),new Map,new O(A),o,a);await ph(s,u),s.sc=s.sc.remove(i),s.ic.delete(e),mo(s)}else await Qt(s.localStore,e,!1).then(()=>Wt(s,e,t)).catch(Ye)}async function qm(n,e){const t=I(n),s=e.batch.batchId;try{const r=await im(t.localStore,e);fo(t,s,null),lo(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fe(t,r)}catch(r){await Ye(r)}}async function $m(n,e,t){const s=I(n);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(D(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,e);fo(s,e,t),lo(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fe(s,r)}catch(r){await Ye(r)}}async function Km(n,e){const t=I(n);et(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.uc.get(s)||[];r.push(e),t.uc.set(s,r)}catch(s){const r=hn(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function lo(n,e){(n.uc.get(e)||[]).forEach(t=>{t.resolve()}),n.uc.delete(e)}function fo(n,e,t){const s=I(n);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Wt(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ec.get(e))n.tc.delete(s),t&&n.Zu.lc(s,t);n.ec.delete(e),n.isPrimaryClient&&n.rc.us(e).forEach(s=>{n.rc.containsKey(s)||yh(n,s)})}function yh(n,e){n.nc.delete(e.path.canonicalString());const t=n.sc.get(e);t!==null&&(Gn(n.remoteStore,t),n.sc=n.sc.remove(e),n.ic.delete(t),mo(n))}function ui(n,e,t){for(const s of t)s instanceof fh?(n.rc.addReference(s.key,e),Gm(n,s)):s instanceof mh?(w("SyncEngine","Document no longer in limbo: "+s.key),n.rc.removeReference(s.key,e),n.rc.containsKey(s.key)||yh(n,s.key)):b()}function Gm(n,e){const t=e.key,s=t.path.canonicalString();n.sc.get(t)||n.nc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.nc.add(s),mo(n))}function mo(n){for(;n.nc.size>0&&n.sc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new v(_.fromString(e)),s=n.cc.next();n.ic.set(s,new Lm(t)),n.sc=n.sc.insert(t,s),pr(n.remoteStore,new $e(be(sn(t.path)),s,2,Ee.ot))}}async function Fe(n,e,t){const s=I(n),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,u)=>{o.push(s.hc(u,e,t).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),r.push(c);const h=Zi.Vi(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,u){const c=I(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,l=>f.forEach(l.Pi,d=>c.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>f.forEach(l.vi,d=>c.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Je(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const d=c.$i.get(l),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);c.$i=c.$i.insert(l,p)}}}(s.localStore,i))}async function jm(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await Jc(t.localStore,e);t.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,i))})}),r.uc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fe(t,s.Ki)}}function zm(n,e){const t=I(n),s=t.ic.get(e);if(s&&s.Xu)return N().add(s.key);{let r=N();const i=t.ec.get(e);if(!i)return r;for(const o of i){const a=t.tc.get(o);r=r.unionWith(a.view.qu)}return r}}async function Qm(n,e){const t=I(n),s=await js(t.localStore,e.query,!0),r=e.view.Ju(s);return t.isPrimaryClient&&ui(t,e.targetId,r.zu),r}async function Hm(n,e){const t=I(n);return nh(t.localStore,e).then(s=>Fe(t,s))}async function Wm(n,e,t,s){const r=I(n),i=await function(o,a){const u=I(o),c=I(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.yn(h,a).next(l=>l?u.localDocuments.getDocuments(h,l):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await un(r.remoteStore):t==="acknowledged"||t==="rejected"?(fo(r,e,s||null),lo(r,e),function(o,a){I(I(o).mutationQueue).In(a)}(r.localStore,e)):b(),await Fe(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Xm(n,e){const t=I(n);if(go(t),po(t),e===!0&&t.ac!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await Fa(t,s.toArray());t.ac=!0,await ai(t.remoteStore,!0);for(const i of r)pr(t.remoteStore,i)}else if(e===!1&&t.ac!==!1){const s=[];let r=Promise.resolve();t.ec.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Wt(t,o),Qt(t.localStore,o,!0))),Gn(t.remoteStore,o)}),await r,await Fa(t,s),function(i){const o=I(i);o.ic.forEach((a,u)=>{Gn(o.remoteStore,u)}),o.rc.cs(),o.ic=new Map,o.sc=new z(v.comparator)}(t),t.ac=!1,await ai(t.remoteStore,!1)}}async function Fa(n,e,t){const s=I(n),r=[],i=[];for(const o of e){let a;const u=s.ec.get(o);if(u&&u.length!==0){a=await zt(s.localStore,be(u[0]));for(const c of u){const h=s.tc.get(c),l=await Qm(s,h);l.snapshot&&i.push(l.snapshot)}}else{const c=await th(s.localStore,o);a=await zt(s.localStore,c),await ho(s,wh(c),o,!1)}r.push(a)}return s.Zu.Go(i),r}function wh(n){return ac(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Ym(n){const e=I(n);return I(I(e.localStore).persistence).Ri()}async function Jm(n,e,t,s){const r=I(n);if(r.ac)return void w("SyncEngine","Ignoring unexpected query state notification.");const i=r.ec.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await nh(r.localStore,cc(i[0])),a=is.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await Fe(r,o,a);break}case"rejected":await Qt(r.localStore,e,!0),Wt(r,e,s);break;default:b()}}async function Zm(n,e,t){const s=go(n);if(s.ac){for(const r of e){if(s.ec.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await th(s.localStore,r),o=await zt(s.localStore,i);await ho(s,wh(i),o.targetId,!1),pr(s.remoteStore,o)}for(const r of t)s.ec.has(r)&&await Qt(s.localStore,r,!1).then(()=>{Gn(s.remoteStore,r),Wt(s,r)}).catch(Ye)}}function go(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ph.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bm.bind(null,e),e.Zu.Go=km.bind(null,e.eventManager),e.Zu.lc=_m.bind(null,e.eventManager),e}function po(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$m.bind(null,e),e}function eg(n,e,t){const s=I(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(l,d){const g=I(l),p=se(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",E=>g.Ds.getBundleMetadata(E,d.id)).then(E=>!!E&&E.createTime.compareTo(p)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(dh(a));const u=new Mm(a,r.localStore,i.wt);let c=await i.fc();for(;c;){const l=await u.Nu(c);l&&o._updateProgress(l),c=await i.fc()}const h=await u.complete();return await Fe(r,h.Ou,void 0),await function(l,d){const g=I(l);return g.persistence.runTransaction("Save bundle","readwrite",p=>g.Ds.saveBundleMetadata(p,d))}(r.localStore,a),o._completeWith(h.progress),Promise.resolve(h.Mu)}catch(a){return qt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class vh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=as(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Yc(this.persistence,new Xc,e.initialUser,this.wt)}_c(e){return new Wc(gr.Os,this.wt)}dc(e){return new rh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ih extends vh{constructor(e,t,s){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await po(this.yc.syncEngine),await un(this.yc.remoteStore),await this.persistence.ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wc(e){return Yc(this.persistence,new Xc,e.initialUser,this.wt)}mc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new Gf(s,e.asyncQueue,t)}gc(e,t){const s=new Ad(t,this.persistence);return new Dd(e.asyncQueue,s)}_c(e){const t=Ji(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new Yi(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,ih(),Cs(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new rh}}class tg extends Ih{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof Pr&&(this.sharedClientState.syncEngine={kr:Wm.bind(null,t),Mr:Jm.bind(null,t),Or:Zm.bind(null,t),Ri:Ym.bind(null,t),Nr:Hm.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci(async s=>{await Xm(this.yc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}dc(e){const t=ih();if(!Pr.V(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Ji(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Pr(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Va(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jm.bind(null,this.syncEngine),await ai(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Nm}createDatastore(e){const t=as(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new fm(r));var r;return function(i,o,a,u){return new pm(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Va(this.syncEngine,a,0),o=Ra.V()?new Ra:new hm,new wm(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,u,c){const h=new Vm(s,r,i,o,a,u);return c&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);w("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await an(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Q("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new ne,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then(s=>{s&&s.Cu()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(e===null)return null;const t=this.Ac.decode(e),s=Number(t);isNaN(s)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(s);return new Rm(JSON.parse(r),e.length+s)}Vc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async bc(){for(;this.Vc()<0&&!await this.Sc(););if(this.buffer.length===0)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=I(s),o=$n(i.wt)+"/documents",a={documents:r.map(l=>qn(i.wt,l))},u=await i.ao("BatchGetDocuments",o,a,r.length),c=new Map;u.forEach(l=>{const d=of(i.wt,l);c.set(d.key.toString(),d)});const h=[];return r.forEach(l=>{const d=c.get(l.toString());D(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new on(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new Ki(r,this.precondition(r)))}),await async function(t,s){const r=I(t),i=$n(r.wt)+"/documents",o={writes:s.map(a=>Kn(r.wt,a))};await r.ro("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=x.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?$.updateTime(t):$.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $.updateTime(t)}return $.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.Dc=s.maxAttempts,this.So=new to(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new sg(this.datastore),t=this.xc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Nc(r)}))}).catch(s=>{this.Nc(s)})})}xc(e){try{const t=this.updateFunction(e);return!ts(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!Ic(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=te.UNAUTHENTICATED,this.clientId=Wu.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Eh(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Jc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Th(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wo(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>Ma(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ma(e.remoteStore,i)),n.onlineComponents=e}async function wo(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Eh(n,new vh)),n.offlineComponents}async function wr(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Th(n,new yo)),n.onlineComponents}function bh(n){return wo(n).then(e=>e.persistence)}function vr(n){return wo(n).then(e=>e.localStore)}function Sh(n){return wr(n).then(e=>e.remoteStore)}function vo(n){return wr(n).then(e=>e.syncEngine)}async function Xt(n){const e=await wr(n),t=e.eventManager;return t.onListen=Fm.bind(null,e.syncEngine),t.onUnlisten=Pm.bind(null,e.syncEngine),t}function og(n){return n.asyncQueue.enqueue(async()=>{const e=await bh(n),t=await Sh(n);return e.setNetworkEnabled(!0),function(s){const r=I(s);return r.lu.delete(0),us(r)}(t)})}function ag(n){return n.asyncQueue.enqueue(async()=>{const e=await bh(n),t=await Sh(n);return e.setNetworkEnabled(!1),async function(s){const r=I(s);r.lu.add(0),await an(r),r._u.set("Offline")}(t)})}function ug(n,e){const t=new ne;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,u){const c=I(a);return c.persistence.runTransaction("read document","readonly",h=>c.localDocuments.getDocument(h,u))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=hn(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await vr(n),e,t)),t.promise}function xh(n,e,t={}){const s=new ne;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new yr({next:l=>{i.enqueueAndForget(()=>ao(r,h));const d=l.docs.has(o);!d&&l.fromCache?u.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?u.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new co(sn(o.path),c,{includeMetadataChanges:!0,Du:!0});return oo(r,h)}(await Xt(n),n.asyncQueue,e,t,s)),s.promise}function cg(n,e){const t=new ne;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await js(s,r,!0),a=new gh(r,o.ji),u=a.Ku(o.documents),c=a.applyChanges(u,!1);i.resolve(c.snapshot)}catch(o){const a=hn(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await vr(n),e,t)),t.promise}function Dh(n,e,t={}){const s=new ne;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new yr({next:l=>{i.enqueueAndForget(()=>ao(r,h)),l.fromCache&&a.source==="server"?u.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new co(o,c,{includeMetadataChanges:!0,Du:!0});return oo(r,h)}(await Xt(n),n.asyncQueue,e,t,s)),s.promise}function hg(n,e){const t=new yr(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Tu.add(r),r.next()}(await Xt(n),t)),()=>{t.Tc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Tu.delete(r)}(await Xt(n),t))}}function lg(n,e,t){const s=new ne;return n.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return wr(i).then(o=>o.datastore)}(n);new rg(n.asyncQueue,r,t,e,s).run()}),s.promise}function dg(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(u,c){return new ng(u,c)}(function(u,c){if(u instanceof Uint8Array)return Pa(u,c);if(u instanceof ArrayBuffer)return Pa(new Uint8Array(u),c);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,as(e));n.asyncQueue.enqueueAndForget(async()=>{eg(await vo(n),r,s)})}function fg(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=I(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ds.getNamedQuery(i,s))}(await vr(n),e))}const Ua=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mg(n,e,t,s){if(e===!0&&s===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ba(n){if(!v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qa(n){if(v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ir(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function R(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ir(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ah(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,s){this._authCredentials=t,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,e instanceof je?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(r.options.projectId)}(e))}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new md;switch(t.type){case"gapi":const s=t.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new wd(s,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ua.get(e);t&&(w("ComponentProvider","Removing Datastore"),Ua.delete(e),t.terminate())}(this),Promise.resolve()}}function Ug(n,e,t,s={}){var r;const i=(n=R(n,cs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=te.MOCK_USER;else{o=zh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new te(u)}n._authCredentials=new gd(new Qu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new W(this.firestore,e,this._key)}}class me{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new me(this.firestore,e,this._query)}}class _e extends me{constructor(e,t,s){super(e,t,sn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new v(e))}withConverter(e){return new _e(this.firestore,e,this._path)}}function Bg(n,e,...t){if(n=re(n),Io("collection","path",e),n instanceof cs){const s=_.fromString(e,...t);return qa(s),new _e(n,null,s)}{if(!(n instanceof W||n instanceof _e))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_.fromString(e,...t));return qa(s),new _e(n.firestore,null,s)}}function qg(n,e){if(n=R(n,cs),Io("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new me(n,null,function(t){return new Le(_.emptyPath(),t)}(e))}function gg(n,e,...t){if(n=re(n),arguments.length===1&&(e=Wu.I()),Io("doc","path",e),n instanceof cs){const s=_.fromString(e,...t);return Ba(s),new W(n,null,new v(s))}{if(!(n instanceof W||n instanceof _e))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_.fromString(e,...t));return Ba(s),new W(n.firestore,n instanceof _e?n.converter:null,new v(s))}}function $g(n,e){return n=re(n),e=re(e),(n instanceof W||n instanceof _e)&&(e instanceof W||e instanceof _e)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function pg(n,e){return n=re(n),e=re(e),n instanceof me&&e instanceof me&&n.firestore===e.firestore&&ss(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new to(this,"async_queue_retry"),this.Kc=()=>{const t=Cs();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const e=Cs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Cs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const t=new ne;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Je(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const t=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Q("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=t,t}enqueueAfterDelay(e,t,s){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=io.createAndSchedule(this,e,t,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&b()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function ci(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class wg{constructor(){this._progressObserver={},this._taskCompletionResolver=new ne,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-1;class q extends cs{constructor(e,t,s){super(e,t,s),this.type="firestore",this._queue=new yg,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ch(this),this._firestoreClient.terminate()}}function Gg(n,e){const t=za(n,"firestore");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Qh(r,e))return s;throw new y(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.initialize({options:e})}function jg(n=Hh()){return za(n,"firestore").getImmediate()}function Z(n){return n._firestoreClient||Ch(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ch(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new Nd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new ig(n._authCredentials,n._appCheckCredentials,n._queue,s)}function zg(n,e){kh(n=R(n,q));const t=Z(n),s=n._freezeSettings(),r=new yo;return Nh(t,r,new Ih(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Qg(n){kh(n=R(n,q));const e=Z(n),t=n._freezeSettings(),s=new yo;return Nh(e,s,new tg(s,t.cacheSizeBytes))}function Nh(n,e,t){const s=new ne;return n.asyncQueue.enqueue(async()=>{try{await Eh(n,t),await Th(n,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;qt("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function Hg(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ne;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ae.V())return Promise.resolve();const s=t+"main";await Ae.delete(s)}(Ji(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Wg(n){return function(e){const t=new ne;return e.asyncQueue.enqueueAndForget(async()=>Km(await vo(e),t)),t.promise}(Z(n=R(n,q)))}function Xg(n){return og(Z(n=R(n,q)))}function Yg(n){return ag(Z(n=R(n,q)))}function Jg(n){return Wh(n.app,"firestore"),n._delete()}function Zg(n,e){const t=Z(n=R(n,q)),s=new wg;return dg(t,n._databaseId,e,s),s}function ep(n,e){return fg(Z(n=R(n,q)),e).then(t=>t?new me(n,null,t.query):null)}function kh(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function tp(){return new xt("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(J.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return A(this._lat,e._lat)||A(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=/^__.*__$/;class Ig{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms):new rn(e,this.data,t,this.fieldTransforms)}}class _h{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Er{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Er(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ws(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Rh(this.Zc)&&vg.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Eg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=s||as(e)}aa(e,t,s,r=!1){return new Er({Zc:e,methodName:t,ca:s,path:H.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function At(n){const e=n._freezeSettings(),t=as(n._databaseId);return new Eg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tr(n,e,t,s,r,i={}){const o=n.aa(i.merge||i.mergeFields?2:0,e,t,r);xo("Data must be an object, but it was:",o,s);const a=Lh(s,o);let u,c;if(i.merge)u=new Se(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=hi(e,l,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Fh(h,d)||h.push(d)}u=new Se(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new Ig(new ue(a),u,c)}class hs extends Dt{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hs}}function Mh(n,e,t){return new Er({Zc:3,ca:e.settings.ca,methodName:n._methodName,na:t},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class To extends Dt{_toFieldTransform(e){return new rs(e.path,new Gt)}isEqual(e){return e instanceof To}}class Tg extends Dt{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Mh(this,e,!0),s=this.ha.map(i=>Ct(i,t)),r=new yt(s);return new rs(e.path,r)}isEqual(e){return this===e}}class bg extends Dt{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Mh(this,e,!0),s=this.ha.map(i=>Ct(i,t)),r=new wt(s);return new rs(e.path,r)}isEqual(e){return this===e}}class Sg extends Dt{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new jt(e.wt,fc(e.wt,this.la));return new rs(e.path,t)}isEqual(e){return this===e}}function bo(n,e,t,s){const r=n.aa(1,e,t);xo("Data must be an object, but it was:",r,s);const i=[],o=ue.empty();St(s,(u,c)=>{const h=br(e,u,t);c=re(c);const l=r.ia(h);if(c instanceof hs)i.push(h);else{const d=Ct(c,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new Se(i);return new _h(o,a,r.fieldTransforms)}function So(n,e,t,s,r,i){const o=n.aa(1,e,t),a=[hi(e,s,t)],u=[r];if(i.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(hi(e,i[d])),u.push(i[d+1]);const c=[],h=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Fh(c,a[d])){const g=a[d];let p=u[d];p=re(p);const E=o.ia(g);if(p instanceof hs)c.push(g);else{const S=Ct(p,E);S!=null&&(c.push(g),h.set(g,S))}}const l=new Se(c);return new _h(h,l,o.fieldTransforms)}function Oh(n,e,t,s=!1){return Ct(t,n.aa(s?4:3,e))}function Ct(n,e){if(Vh(n=re(n)))return xo("Unsupported field value:",e,n),Lh(n,e);if(n instanceof Dt)return function(t,s){if(!Rh(s.Zc))throw s.oa(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=Ct(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=re(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return fc(s.wt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=K.fromDate(t);return{timestampValue:Bn(s.wt,r)}}if(t instanceof K){const r=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Bn(s.wt,r)}}if(t instanceof Eo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Tt)return{bytesValue:Ac(s.wt,t._byteString)};if(t instanceof W){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gi(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.oa(`Unsupported field value: ${Ir(t)}`)}(n,e)}function Lh(n,e){const t={};return tc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):St(n,(s,r)=>{const i=Ct(r,e.ea(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Vh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Eo||n instanceof Tt||n instanceof W||n instanceof Dt)}function xo(n,e,t){if(!Vh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Ir(t);throw s==="an object"?e.oa(n+" a custom object"):e.oa(n+" "+s)}}function hi(n,e,t){if((e=re(e))instanceof xt)return e._internalPath;if(typeof e=="string")return br(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const xg=new RegExp("[~\\*/\\[\\]]");function br(n,e,t){if(e.search(xg)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xt(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new y(m.INVALID_ARGUMENT,a+n+u)}function Fh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dg extends jn{data(){return super.data()}}function Sr(n,e){return typeof e=="string"?br(n,e):e instanceof xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends jn{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Sr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ns extends Yt{data(e={}){return super.data(e)}}class Jt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ht(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ns(this._firestore,this._userDataWriter,s.key,s,new ht(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ht(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ht(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Ag(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ag(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function np(n,e){return n instanceof Yt&&e instanceof Yt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Jt&&e instanceof Jt&&n._firestore===e._firestore&&pg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ls{}function sp(n,...e){for(const t of e)n=t._apply(n);return n}class Cg extends ls{constructor(e,t,s){super(),this.fa=e,this.da=t,this._a=s,this.type="where"}_apply(e){const t=At(e.firestore),s=function(r,i,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ga(h,c);const g=[];for(const p of h)g.push(Ka(a,r,p));l={arrayValue:{values:g}}}else l=Ka(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ga(h,c),l=Oh(o,i,h,c==="in"||c==="not-in");const d=ce.create(u,c,l);return function(g,p){if(p.ht()){const S=Bi(g);if(S!==null&&!S.isEqual(p.field))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${p.field.toString()}'`);const M=Ui(g);M!==null&&Kh(g,p.field,M)}const E=function(S,M){for(const F of S.filters)if(M.indexOf(F.op)>=0)return F.op;return null}(g,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(E!==null)throw E===p.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${E.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new me(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function rp(n,e,t){const s=e,r=Sr("where",n);return new Cg(r,s,t)}class Ng extends ls{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ft(r,i);return function(a,u){if(Ui(a)===null){const c=Bi(a);c!==null&&Kh(a,c,u.field)}}(s,o),o}(e._query,this.fa,this.wa);return new me(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Le(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ip(n,e="asc"){const t=e,s=Sr("orderBy",n);return new Ng(s,t)}class Uh extends ls{constructor(e,t,s){super(),this.type=e,this.ma=t,this.ga=s}_apply(e){return new me(e.firestore,e.converter,$s(e._query,this.ma,this.ga))}}function op(n){return Ah("limit",n),new Uh("limit",n,"F")}function ap(n){return Ah("limitToLast",n),new Uh("limitToLast",n,"L")}class Bh extends ls{constructor(e,t,s){super(),this.type=e,this.ya=t,this.pa=s}_apply(e){const t=$h(e,this.type,this.ya,this.pa);return new me(e.firestore,e.converter,function(s,r){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function up(...n){return new Bh("startAt",n,!0)}function cp(...n){return new Bh("startAfter",n,!1)}class qh extends ls{constructor(e,t,s){super(),this.type=e,this.ya=t,this.pa=s}_apply(e){const t=$h(e,this.type,this.ya,this.pa);return new me(e.firestore,e.converter,function(s,r){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function hp(...n){return new qh("endBefore",n,!1)}function lp(...n){return new qh("endAt",n,!0)}function $h(n,e,t,s){if(t[0]=re(t[0]),t[0]instanceof jn)return function(r,i,o,a,u){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const h of Kt(r))if(h.field.isKeyField())c.push(gt(i,a.key));else{const l=a.data.field(h.field);if(Pi(l))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(l)}return new Qe(c,u)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=At(n.firestore);return function(i,o,a,u,c,h){const l=i.explicitOrderBy;if(c.length>l.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<c.length;g++){const p=c[g];if(l[g].field.isKeyField()){if(typeof p!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof p}`);if(!qi(i)&&p.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${p}' contains a slash.`);const E=i.path.child(_.fromString(p));if(!v.isDocumentKey(E))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const S=new v(E);d.push(gt(o,S))}else{const E=Oh(a,u,p);d.push(E)}}return new Qe(d,h)}(n._query,n.firestore._databaseId,r,e,t,s)}}function Ka(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qi(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(_.fromString(t));if(!v.isDocumentKey(s))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gt(n,new v(s))}if(t instanceof W)return gt(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ir(t)}.`)}function Ga(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Kh(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{convertValue(e,t="none"){switch(mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const s={};return St(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Eo(j(e.latitude),j(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=nc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Vn(e));default:return null}}convertTimestamp(e){const t=Ge(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=_.fromString(e);D(Vc(s));const r=new je(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||Q(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class _g extends Gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=At(e)}set(e,t,s){this._verifyNotCommitted();const r=Be(e,this._firestore),i=xr(r.converter,t,s),o=Tr(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,$.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=Be(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof xt?So(this._dataReader,"WriteBatch.update",i._key,t,s,r):bo(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,$.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Be(e,this._firestore);return this._mutations=this._mutations.concat(new on(t._key,$.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Be(n,e){if((n=re(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){n=R(n,W);const e=R(n.firestore,q);return xh(Z(e),n._key).then(t=>Do(e,n,t))}class Nt extends Gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}function fp(n){n=R(n,W);const e=R(n.firestore,q),t=Z(e),s=new Nt(e);return ug(t,n._key).then(r=>new Yt(e,s,n._key,r,new ht(r!==null&&r.hasLocalMutations,!0),n.converter))}function mp(n){n=R(n,W);const e=R(n.firestore,q);return xh(Z(e),n._key,{source:"server"}).then(t=>Do(e,n,t))}function gp(n){n=R(n,me);const e=R(n.firestore,q),t=Z(e),s=new Nt(e);return Ph(n._query),Dh(t,n._query).then(r=>new Jt(e,s,n,r))}function pp(n){n=R(n,me);const e=R(n.firestore,q),t=Z(e),s=new Nt(e);return cg(t,n._query).then(r=>new Jt(e,s,n,r))}function yp(n){n=R(n,me);const e=R(n.firestore,q),t=Z(e),s=new Nt(e);return Dh(t,n._query,{source:"server"}).then(r=>new Jt(e,s,n,r))}function wp(n,e,t){n=R(n,W);const s=R(n.firestore,q),r=xr(n.converter,e,t);return ds(s,[Tr(At(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,$.none())])}function vp(n,e,t,...s){n=R(n,W);const r=R(n.firestore,q),i=At(r);let o;return o=typeof(e=re(e))=="string"||e instanceof xt?So(i,"updateDoc",n._key,e,t,s):bo(i,"updateDoc",n._key,e),ds(r,[o.toMutation(n._key,$.exists(!0))])}function Ip(n){return ds(R(n.firestore,q),[new on(n._key,$.none())])}function Ep(n,e){const t=R(n.firestore,q),s=gg(n),r=xr(n.converter,e);return ds(t,[Tr(At(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,$.exists(!1))]).then(()=>s)}function Tp(n,...e){var t,s,r;n=re(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ci(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ci(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),e[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let u,c,h;if(n instanceof W)c=R(n.firestore,q),h=sn(n._key.path),u={next:l=>{e[o]&&e[o](Do(c,n,l))},error:e[o+1],complete:e[o+2]};else{const l=R(n,me);c=R(l.firestore,q),h=l._query;const d=new Nt(c);u={next:g=>{e[o]&&e[o](new Jt(c,d,l,g))},error:e[o+1],complete:e[o+2]},Ph(n._query)}return function(l,d,g,p){const E=new yr(p),S=new co(d,E,g);return l.asyncQueue.enqueueAndForget(async()=>oo(await Xt(l),S)),()=>{E.Tc(),l.asyncQueue.enqueueAndForget(async()=>ao(await Xt(l),S))}}(Z(c),h,a,u)}function bp(n,e){return hg(Z(n=R(n,q)),ci(e)?e:{next:e})}function ds(n,e){return function(t,s){const r=new ne;return t.asyncQueue.enqueueAndForget(async()=>Um(await vo(t),s,r)),r.promise}(Z(n),e)}function Do(n,e,t){const s=t.docs.get(e._key),r=new Nt(n);return new Yt(n,r,e._key,s,new ht(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=At(e)}get(e){const t=Be(e,this._firestore),s=new _g(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return b();const i=r[0];if(i.isFoundDocument())return new jn(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new jn(this._firestore,s,t._key,null,t.converter);throw b()})}set(e,t,s){const r=Be(e,this._firestore),i=xr(r.converter,t,s),o=Tr(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=Be(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof xt?So(this._dataReader,"Transaction.update",i._key,t,s,r):bo(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Be(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Be(e,this._firestore),s=new Nt(this._firestore);return super.get(e).then(r=>new Yt(this._firestore,s,t._key,r._document,new ht(!1,!1),t.converter))}}function Sp(n,e,t){n=R(n,q);const s=Object.assign(Object.assign({},kg),t);return function(r){if(r.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),lg(Z(n),r=>e(new Mg(n,r)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return new hs("deleteField")}function Dp(){return new To("serverTimestamp")}function Ap(...n){return new Tg("arrayUnion",n)}function Cp(...n){return new bg("arrayRemove",n)}function Np(n){return new Sg("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){return Z(n=R(n,q)),new Rg(n,e=>ds(n,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){var t;const s=Z(n=R(n,q));if(!(!((t=s.offlineComponents)===null||t===void 0)&&t.indexBackfillerScheduler))return qt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(u){var c;try{return JSON.parse(u)}catch(h){throw new y(m.INVALID_ARGUMENT,"Failed to parse JSON: "+((c=h)===null||c===void 0?void 0:c.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=ja(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const l of u.fields){const d=br("setIndexConfiguration",ja(l,"fieldPath"));l.arrayConfig==="CONTAINS"?h.push(new Ts(d,2)):l.order==="ASCENDING"?h.push(new Ts(d,0)):l.order==="DESCENDING"&&h.push(new Ts(d,1))}a.push(new Us(Us.UNKNOWN_ID,c,h,Ln.empty()))}return a}(e);return vr(s).then(i=>async function(o,a){const u=I(o),c=u.indexManager,h=[];return u.persistence.runTransaction("Configure indexes","readwrite",l=>c.getFieldIndexes(l).next(d=>function(g,p,E,S,M){g=[...g],p=[...p],g.sort(E),p.sort(E);const F=g.length,L=p.length;let G=0,P=0;for(;G<L&&P<F;){const U=E(g[P],p[G]);U<0?M(g[P++]):U>0?S(p[G++]):(G++,P++)}for(;G<L;)S(p[G++]);for(;P<F;)M(g[P++])}(d,a,Td,g=>{h.push(c.addFieldIndex(l,g))},g=>{h.push(c.deleteFieldIndex(l,g))})).next(()=>f.waitFor(h)))}(i,r))}function ja(n,e){if(typeof n[e]!="string")throw new y(m.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(n,e=!0){(function(t){nn=t})(Xh),Yh(new el("firestore",(t,{options:s})=>{const r=t.getProvider("app").getImmediate(),i=new q(r,new pd(t.getProvider("auth-internal")),new vd(t.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ao(Ko,"3.4.14",n),Ao(Ko,"3.4.14","esm2017")})();export{Gh as AbstractUserDataWriter,Tt as Bytes,Kg as CACHE_SIZE_UNLIMITED,_e as CollectionReference,W as DocumentReference,Yt as DocumentSnapshot,xt as FieldPath,Dt as FieldValue,q as Firestore,y as FirestoreError,Eo as GeoPoint,wg as LoadBundleTask,me as Query,ls as QueryConstraint,Ns as QueryDocumentSnapshot,Jt as QuerySnapshot,ht as SnapshotMetadata,K as Timestamp,Mg as Transaction,Rg as WriteBatch,je as _DatabaseId,v as _DocumentKey,Fg as _EmptyAppCheckTokenProvider,md as _EmptyAuthCredentialsProvider,H as _FieldPath,R as _cast,Vg as _debugAssert,Pg as _isBase64Available,qt as _logWarn,mg as _validateIsNotUsedTogether,Ep as addDoc,Cp as arrayRemove,Ap as arrayUnion,Hg as clearIndexedDbPersistence,Bg as collection,qg as collectionGroup,Ug as connectFirestoreEmulator,Ip as deleteDoc,xp as deleteField,Yg as disableNetwork,gg as doc,tp as documentId,zg as enableIndexedDbPersistence,Qg as enableMultiTabIndexedDbPersistence,Xg as enableNetwork,lp as endAt,hp as endBefore,Z as ensureFirestoreConfigured,ds as executeWrite,dp as getDoc,fp as getDocFromCache,mp as getDocFromServer,gp as getDocs,pp as getDocsFromCache,yp as getDocsFromServer,jg as getFirestore,Np as increment,Gg as initializeFirestore,op as limit,ap as limitToLast,Zg as loadBundle,ep as namedQuery,Tp as onSnapshot,bp as onSnapshotsInSync,ip as orderBy,sp as query,pg as queryEqual,$g as refEqual,Sp as runTransaction,Dp as serverTimestamp,wp as setDoc,_p as setIndexConfiguration,Lg as setLogLevel,np as snapshotEqual,cp as startAfter,up as startAt,Jg as terminate,vp as updateDoc,Wg as waitForPendingWrites,rp as where,kp as writeBatch};
