"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[8843,6120,9542],{7006:(t,e,i)=>{i.d(e,{BFQ:()=>Vt,BG$:()=>$t,BVF:()=>P,Bf4:()=>st,CaW:()=>qt,CdI:()=>Z,CtA:()=>Ot,D1R:()=>mt,D9w:()=>Ft,Djp:()=>Xt,E2K:()=>Pt,EoG:()=>j,FUD:()=>ne,GG6:()=>se,GUF:()=>fe,Gih:()=>re,Hy8:()=>k,ILR:()=>Nt,IOt:()=>me,JQ4:()=>Mt,KI_:()=>pe,KhW:()=>b,Kz5:()=>gt,LSk:()=>we,LY2:()=>Q,L_r:()=>ve,LgZ:()=>I,LsT:()=>xt,M5h:()=>g,M6v:()=>G,N4l:()=>x,NDo:()=>J,NYV:()=>te,Ns1:()=>q,OTo:()=>Lt,OoA:()=>ht,PA7:()=>ye,PeU:()=>r,RlZ:()=>O,S2y:()=>a,Se2:()=>R,Sm8:()=>S,SvJ:()=>he,T95:()=>pt,TyD:()=>ot,UCm:()=>Tt,UZH:()=>s,Vdb:()=>F,VzW:()=>wt,W2J:()=>Me,WMw:()=>f,Wbm:()=>v,Wl3:()=>c,Wpd:()=>H,Xaj:()=>M,Y8D:()=>Ut,YGz:()=>K,YLQ:()=>ut,Zr5:()=>V,_AM:()=>Wt,_Li:()=>l,_iA:()=>h,aH4:()=>ct,av9:()=>Ht,bGH:()=>w,bdR:()=>p,brP:()=>Dt,bsb:()=>oe,c8b:()=>L,cLu:()=>vt,cRx:()=>Ct,cum:()=>ge,dSO:()=>it,dZ3:()=>X,dwk:()=>u,eD:()=>N,eaV:()=>Gt,ehD:()=>d,ekQ:()=>zt,esl:()=>m,fSK:()=>D,fY$:()=>tt,fto:()=>Yt,g8_:()=>rt,ghN:()=>T,gi4:()=>Qt,hEm:()=>kt,iAb:()=>ft,iWC:()=>U,iiP:()=>ae,irR:()=>At,jFi:()=>y,jZA:()=>Zt,k0A:()=>Et,k74:()=>C,knz:()=>ce,ksN:()=>W,l0P:()=>Jt,mSO:()=>de,ntZ:()=>o,pKu:()=>ie,ptH:()=>jt,qhX:()=>Y,qkB:()=>It,qyh:()=>dt,rOj:()=>E,r_:()=>A,rnI:()=>ue,rpg:()=>nt,tm_:()=>n,uL9:()=>z,uWy:()=>at,v3W:()=>_t,vCF:()=>_,vCx:()=>Bt,vxC:()=>et,w$m:()=>B,wJv:()=>St,wem:()=>lt,wk1:()=>bt,wuA:()=>Rt,x5V:()=>xe,xJs:()=>ee,xfE:()=>$,y2t:()=>Kt,ywz:()=>yt,z81:()=>le});const s="140",r=0,n=1,a=2,h=1,o=2,u=3,c=0,l=1,d=2,m=1,y=0,p=1,f=2,x=3,g=4,M=5,w=100,v=101,E=102,A=103,S=104,L=200,T=201,b=202,U=203,C=204,I=205,D=206,k=207,F=208,H=209,O=210,P=0,R=1,V=2,_=3,N=4,W=5,B=6,G=7,q=0,Y=1,J=2,z=0,j=1,Z=2,K=3,Q=4,X=5,$=300,tt=301,et=302,it=303,st=304,rt=306,nt=1e3,at=1001,ht=1002,ot=1003,ut=1004,ct=1005,lt=1006,dt=1007,mt=1008,yt=1009,pt=1010,ft=1011,xt=1012,gt=1013,Mt=1014,wt=1015,vt=1016,Et=1017,At=1018,St=1020,Lt=1021,Tt=1022,bt=1023,Ut=1024,Ct=1025,It=1026,Dt=1027,kt=1028,Ft=1029,Ht=1030,Ot=1031,Pt=1033,Rt=33776,Vt=33777,_t=33778,Nt=33779,Wt=35840,Bt=35841,Gt=35842,qt=35843,Yt=36196,Jt=37492,zt=37496,jt=37808,Zt=37809,Kt=37810,Qt=37811,Xt=37812,$t=37813,te=37814,ee=37815,ie=37816,se=37817,re=37818,ne=37819,ae=37820,he=37821,oe=36492,ue=3e3,ce=3001,le=3200,de=3201,me=0,ye=1,pe="srgb",fe="srgb-linear",xe=7680,ge=519,Me=35044,we="300 es",ve=1035},9574:(t,e,i)=>{i.d(e,{p:()=>s});class s{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const i=this._listeners;void 0===i[t]&&(i[t]=[]),-1===i[t].indexOf(e)&&i[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1;const i=this._listeners;return void 0!==i[t]&&-1!==i[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const i=this._listeners[t];if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const i=e.slice(0);for(let e=0,s=i.length;e<s;e++)i[e].call(this,t);t.target=null}}}},2564:(t,e,i)=>{i.d(e,{P:()=>a});var s=i(5042),r=i(6850);let n;class a{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===n&&(n=(0,s.c)("canvas")),n.width=t.width,n.height=t.height;const i=n.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=(0,s.c)("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let t=0;t<a.length;t++)a[t]=255*(0,r.PB)(a[t]/255);return i.putImageData(n,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*(0,r.PB)(e[t]/255)):e[t]=(0,r.PB)(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}},6196:(t,e,i)=>{i.d(e,{S:()=>a});const s={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};var r=i(5489),n=i(5042);class a extends r.a{constructor(t){super(t)}load(t,e,i,r){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,h=s.get(t);if(void 0!==h)return a.manager.itemStart(t),setTimeout((function(){e&&e(h),a.manager.itemEnd(t)}),0),h;const o=(0,n.c)("img");function u(){l(),s.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(e){l(),r&&r(e),a.manager.itemError(t),a.manager.itemEnd(t)}function l(){o.removeEventListener("load",u,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",c,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}},5489:(t,e,i)=>{i.d(e,{a:()=>r});const s=new class{constructor(t,e,i){const s=this;let r,n=!1,a=0,h=0;const o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(t){h++,!1===n&&void 0!==s.onStart&&s.onStart(t,a,h),n=!0},this.itemEnd=function(t){a++,void 0!==s.onProgress&&s.onProgress(t,a,h),a===h&&(n=!1,void 0!==s.onLoad&&s.onLoad())},this.itemError=function(t){void 0!==s.onError&&s.onError(t)},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return o.push(t,e),this},this.removeHandler=function(t){const e=o.indexOf(t);return-1!==e&&o.splice(e,2),this},this.getHandler=function(t){for(let e=0,i=o.length;e<i;e+=2){const i=o[e],s=o[e+1];if(i.global&&(i.lastIndex=0),i.test(t))return s}return null}}};class r{constructor(t){this.manager=void 0!==t?t:s,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise((function(s,r){i.load(t,s,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}},6850:(t,e,i)=>{i.d(e,{PB:()=>r,QP:()=>n,ep:()=>h});var s=i(7006);function r(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function n(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}const a={[s.KI_]:{[s.GUF]:r},[s.GUF]:{[s.KI_]:n}},h={legacyMode:!0,get workingColorSpace(){return s.GUF},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,i){if(this.legacyMode||e===i||!e||!i)return t;if(a[e]&&void 0!==a[e][i]){const s=a[e][i];return t.r=s(t.r),t.g=s(t.g),t.b=s(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}}},9542:(t,e,i)=>{i.d(e,{DO:()=>a,I3:()=>n,gy:()=>l,kz:()=>o,qW:()=>r,t7:()=>u,uZ:()=>h,wt:()=>c});const s=[];for(let t=0;t<256;t++)s[t]=(t<16?"0":"")+t.toString(16);const r=Math.PI/180,n=180/Math.PI;function a(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(s[255&t]+s[t>>8&255]+s[t>>16&255]+s[t>>24&255]+"-"+s[255&e]+s[e>>8&255]+"-"+s[e>>16&15|64]+s[e>>24&255]+"-"+s[63&i|128]+s[i>>8&255]+"-"+s[i>>16&255]+s[i>>24&255]+s[255&r]+s[r>>8&255]+s[r>>16&255]+s[r>>24&255]).toLowerCase()}function h(t,e,i){return Math.max(e,Math.min(i,t))}function o(t,e){return(t%e+e)%e}function u(t,e,i){return(1-i)*t+i*e}function c(t){return 0==(t&t-1)&&0!==t}function l(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}},4894:(t,e,i)=>{i.d(e,{V:()=>s});class s{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,s,r,n,a,h,o){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=h,u[6]=i,u[7]=n,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,n=i[0],a=i[3],h=i[6],o=i[1],u=i[4],c=i[7],l=i[2],d=i[5],m=i[8],y=s[0],p=s[3],f=s[6],x=s[1],g=s[4],M=s[7],w=s[2],v=s[5],E=s[8];return r[0]=n*y+a*x+h*w,r[3]=n*p+a*g+h*v,r[6]=n*f+a*M+h*E,r[1]=o*y+u*x+c*w,r[4]=o*p+u*g+c*v,r[7]=o*f+u*M+c*E,r[2]=l*y+d*x+m*w,r[5]=l*p+d*g+m*v,r[8]=l*f+d*M+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],n=t[4],a=t[5],h=t[6],o=t[7],u=t[8];return e*n*u-e*a*o-i*r*u+i*a*h+s*r*o-s*n*h}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],n=t[4],a=t[5],h=t[6],o=t[7],u=t[8],c=u*n-a*o,l=a*h-u*r,d=o*r-n*h,m=e*c+i*l+s*d;if(0===m)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=c*y,t[1]=(s*o-u*i)*y,t[2]=(a*i-s*n)*y,t[3]=l*y,t[4]=(u*e-s*h)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*h-o*e)*y,t[8]=(n*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,n,a){const h=Math.cos(r),o=Math.sin(r);return this.set(i*h,i*o,-i*(h*n+o*a)+n+t,-s*o,s*h,-s*(-o*n+h*a)+a+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.elements,r=s[0],n=s[3],a=s[6],h=s[1],o=s[4],u=s[7];return s[0]=e*r+i*h,s[3]=e*n+i*o,s[6]=e*a+i*u,s[1]=-i*r+e*h,s[4]=-i*n+e*o,s[7]=-i*a+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let t=0;t<9;t++)if(e[t]!==i[t])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}s.prototype.isMatrix3=!0},6120:(t,e,i)=>{i.r(e),i.d(e,{Vector2:()=>s});class s{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,i){return void 0!==i&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,n=this.y-t.y;return this.x=r*i-n*s+t.x,this.y=r*s+n*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}s.prototype.isVector2=!0},9576:(t,e,i)=>{i.d(e,{x:()=>d});var s=i(9574),r=i(7006),n=i(9542),a=i(6120),h=i(4894),o=i(2564);class u{constructor(t=null){this.uuid=n.DO(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(null!==s){let t;if(Array.isArray(s)){t=[];for(let e=0,i=s.length;e<i;e++)s[e].isDataTexture?t.push(c(s[e].image)):t.push(c(s[e]))}else t=c(s);i.url=t}return e||(t.images[this.uuid]=i),i}}function c(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?o.P.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}u.prototype.isSource=!0;let l=0;class d extends s.p{constructor(t=d.DEFAULT_IMAGE,e=d.DEFAULT_MAPPING,i=r.uWy,s=r.uWy,o=r.wem,c=r.D1R,m=r.wk1,y=r.ywz,p=1,f=r.rnI){super(),Object.defineProperty(this,"id",{value:l++}),this.uuid=n.DO(),this.name="",this.source=new u(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=y,this.offset=new a.Vector2(0,0),this.repeat=new a.Vector2(1,1),this.center=new a.Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h.V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r.xfE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case r.rpg:t.x=t.x-Math.floor(t.x);break;case r.uWy:t.x=t.x<0?0:1;break;case r.OoA:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case r.rpg:t.y=t.y-Math.floor(t.y);break;case r.uWy:t.y=t.y<0?0:1;break;case r.OoA:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}}d.DEFAULT_IMAGE=null,d.DEFAULT_MAPPING=r.xfE,d.prototype.isTexture=!0},5042:(t,e,i)=>{function s(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function r(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}i.d(e,{H7:()=>s,c:()=>r}),Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array}}]);