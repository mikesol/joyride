"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[7297],{7297:(t,e,s)=>{s.r(e),s.d(e,{CapsuleBufferGeometry:()=>R,CapsuleGeometry:()=>R});var r={};s.r(r),s.d(r,{ArcCurve:()=>a,CatmullRomCurve3:()=>f,CubicBezierCurve:()=>A,CubicBezierCurve3:()=>C,EllipseCurve:()=>u,LineCurve:()=>S,LineCurve3:()=>x,QuadraticBezierCurve:()=>P,QuadraticBezierCurve3:()=>V,SplineCurve:()=>N});var o=s(6120),i=s(9542),n=s(4532),h=s(1245);class c{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const s=this.getUtoTmapping(t);return this.getPoint(s,e)}getPoints(t=5){const e=[];for(let s=0;s<=t;s++)e.push(this.getPoint(s/t));return e}getSpacedPoints(t=5){const e=[];for(let s=0;s<=t;s++)e.push(this.getPointAt(s/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let s,r=this.getPoint(0),o=0;e.push(0);for(let i=1;i<=t;i++)s=this.getPoint(i/t),o+=s.distanceTo(r),e.push(o),r=s;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const s=this.getLengths();let r=0;const o=s.length;let i;i=e||t*s[o-1];let n,h=0,c=o-1;for(;h<=c;)if(r=Math.floor(h+(c-h)/2),n=s[r]-i,n<0)h=r+1;else{if(!(n>0)){c=r;break}c=r-1}if(r=c,s[r]===i)return r/(o-1);const u=s[r];return(r+(i-u)/(s[r+1]-u))/(o-1)}getTangent(t,e){const s=1e-4;let r=t-s,i=t+s;r<0&&(r=0),i>1&&(i=1);const h=this.getPoint(r),c=this.getPoint(i),u=e||(h.isVector2?new o.Vector2:new n.Vector3);return u.copy(c).sub(h).normalize(),u}getTangentAt(t,e){const s=this.getUtoTmapping(t);return this.getTangent(s,e)}computeFrenetFrames(t,e){const s=new n.Vector3,r=[],o=[],c=[],u=new n.Vector3,a=new h.Matrix4;for(let e=0;e<=t;e++){const s=e/t;r[e]=this.getTangentAt(s,new n.Vector3)}o[0]=new n.Vector3,c[0]=new n.Vector3;let p=Number.MAX_VALUE;const l=Math.abs(r[0].x),v=Math.abs(r[0].y),y=Math.abs(r[0].z);l<=p&&(p=l,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),y<=p&&s.set(0,0,1),u.crossVectors(r[0],s).normalize(),o[0].crossVectors(r[0],u),c[0].crossVectors(r[0],o[0]);for(let e=1;e<=t;e++){if(o[e]=o[e-1].clone(),c[e]=c[e-1].clone(),u.crossVectors(r[e-1],r[e]),u.length()>Number.EPSILON){u.normalize();const t=Math.acos(i.uZ(r[e-1].dot(r[e]),-1,1));o[e].applyMatrix4(a.makeRotationAxis(u,t))}c[e].crossVectors(r[e],o[e])}if(!0===e){let e=Math.acos(i.uZ(o[0].dot(o[t]),-1,1));e/=t,r[0].dot(u.crossVectors(o[0],o[t]))>0&&(e=-e);for(let s=1;s<=t;s++)o[s].applyMatrix4(a.makeRotationAxis(r[s],e*s)),c[s].crossVectors(r[s],o[s])}return{tangents:r,normals:o,binormals:c}}clone(){return(new this.constructor).copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class u extends c{constructor(t=0,e=0,s=1,r=1,o=0,i=2*Math.PI,n=!1,h=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=s,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=i,this.aClockwise=n,this.aRotation=h}getPoint(t,e){const s=e||new o.Vector2,r=2*Math.PI;let i=this.aEndAngle-this.aStartAngle;const n=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=r;for(;i>r;)i-=r;i<Number.EPSILON&&(i=n?0:r),!0!==this.aClockwise||n||(i===r?i=-r:i-=r);const h=this.aStartAngle+t*i;let c=this.aX+this.xRadius*Math.cos(h),u=this.aY+this.yRadius*Math.sin(h);if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),s=c-this.aX,r=u-this.aY;c=s*t-r*e+this.aX,u=s*e+r*t+this.aY}return s.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}u.prototype.isEllipseCurve=!0;class a extends u{constructor(t,e,s,r,o,i){super(t,e,s,s,r,o,i),this.type="ArcCurve"}}function p(){let t=0,e=0,s=0,r=0;function o(o,i,n,h){t=o,e=n,s=-3*o+3*i-2*n-h,r=2*o-2*i+n+h}return{initCatmullRom:function(t,e,s,r,i){o(e,s,i*(s-t),i*(r-e))},initNonuniformCatmullRom:function(t,e,s,r,i,n,h){let c=(e-t)/i-(s-t)/(i+n)+(s-e)/n,u=(s-e)/n-(r-e)/(n+h)+(r-s)/h;c*=n,u*=n,o(e,s,c,u)},calc:function(o){const i=o*o;return t+e*o+s*i+r*(i*o)}}}a.prototype.isArcCurve=!0;const l=new n.Vector3,v=new p,y=new p,g=new p;class f extends c{constructor(t=[],e=!1,s="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=s,this.tension=r}getPoint(t,e=new n.Vector3){const s=e,r=this.points,o=r.length,i=(o-(this.closed?0:1))*t;let h,c,u=Math.floor(i),a=i-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/o)+1)*o:0===a&&u===o-1&&(u=o-2,a=1),this.closed||u>0?h=r[(u-1)%o]:(l.subVectors(r[0],r[1]).add(r[0]),h=l);const p=r[u%o],f=r[(u+1)%o];if(this.closed||u+2<o?c=r[(u+2)%o]:(l.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=l),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25;let e=Math.pow(h.distanceToSquared(p),t),s=Math.pow(p.distanceToSquared(f),t),r=Math.pow(f.distanceToSquared(c),t);s<1e-4&&(s=1),e<1e-4&&(e=s),r<1e-4&&(r=s),v.initNonuniformCatmullRom(h.x,p.x,f.x,c.x,e,s,r),y.initNonuniformCatmullRom(h.y,p.y,f.y,c.y,e,s,r),g.initNonuniformCatmullRom(h.z,p.z,f.z,c.z,e,s,r)}else"catmullrom"===this.curveType&&(v.initCatmullRom(h.x,p.x,f.x,c.x,this.tension),y.initCatmullRom(h.y,p.y,f.y,c.y,this.tension),g.initCatmullRom(h.z,p.z,f.z,c.z,this.tension));return s.set(v.calc(a),y.calc(a),g.calc(a)),s}copy(t){super.copy(t),this.points=[];for(let e=0,s=t.points.length;e<s;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,s=this.points.length;e<s;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,s=t.points.length;e<s;e++){const s=t.points[e];this.points.push((new n.Vector3).fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function m(t,e,s,r,o){const i=.5*(r-e),n=.5*(o-s),h=t*t;return(2*s-2*r+i+n)*(t*h)+(-3*s+3*r-2*i-n)*h+i*t+s}function d(t,e,s,r){return function(t,e){const s=1-t;return s*s*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,s)+function(t,e){return t*t*e}(t,r)}function w(t,e,s,r,o){return function(t,e){const s=1-t;return s*s*s*e}(t,e)+function(t,e){const s=1-t;return 3*s*s*t*e}(t,s)+function(t,e){return 3*(1-t)*t*t*e}(t,r)+function(t,e){return t*t*t*e}(t,o)}f.prototype.isCatmullRomCurve3=!0;class A extends c{constructor(t=new o.Vector2,e=new o.Vector2,s=new o.Vector2,r=new o.Vector2){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=s,this.v3=r}getPoint(t,e=new o.Vector2){const s=e,r=this.v0,i=this.v1,n=this.v2,h=this.v3;return s.set(w(t,r.x,i.x,n.x,h.x),w(t,r.y,i.y,n.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}A.prototype.isCubicBezierCurve=!0;class C extends c{constructor(t=new n.Vector3,e=new n.Vector3,s=new n.Vector3,r=new n.Vector3){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=s,this.v3=r}getPoint(t,e=new n.Vector3){const s=e,r=this.v0,o=this.v1,i=this.v2,h=this.v3;return s.set(w(t,r.x,o.x,i.x,h.x),w(t,r.y,o.y,i.y,h.y),w(t,r.z,o.z,i.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}C.prototype.isCubicBezierCurve3=!0;class S extends c{constructor(t=new o.Vector2,e=new o.Vector2){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new o.Vector2){const s=e;return 1===t?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const s=e||new o.Vector2;return s.copy(this.v2).sub(this.v1).normalize(),s}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}S.prototype.isLineCurve=!0;class x extends c{constructor(t=new n.Vector3,e=new n.Vector3){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new n.Vector3){const s=e;return 1===t?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P extends c{constructor(t=new o.Vector2,e=new o.Vector2,s=new o.Vector2){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=s}getPoint(t,e=new o.Vector2){const s=e,r=this.v0,i=this.v1,n=this.v2;return s.set(d(t,r.x,i.x,n.x),d(t,r.y,i.y,n.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}P.prototype.isQuadraticBezierCurve=!0;class V extends c{constructor(t=new n.Vector3,e=new n.Vector3,s=new n.Vector3){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=s}getPoint(t,e=new n.Vector3){const s=e,r=this.v0,o=this.v1,i=this.v2;return s.set(d(t,r.x,o.x,i.x),d(t,r.y,o.y,i.y),d(t,r.z,o.z,i.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}V.prototype.isQuadraticBezierCurve3=!0;class N extends c{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new o.Vector2){const s=e,r=this.points,i=(r.length-1)*t,n=Math.floor(i),h=i-n,c=r[0===n?n:n-1],u=r[n],a=r[n>r.length-2?r.length-1:n+1],p=r[n>r.length-3?r.length-1:n+2];return s.set(m(h,c.x,u.x,a.x,p.x),m(h,c.y,u.y,a.y,p.y)),s}copy(t){super.copy(t),this.points=[];for(let e=0,s=t.points.length;e<s;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,s=this.points.length;e<s;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,s=t.points.length;e<s;e++){const s=t.points[e];this.points.push((new o.Vector2).fromArray(s))}return this}}N.prototype.isSplineCurve=!0;class O extends c{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new S(e,t))}getPoint(t,e){const s=t*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=s){const t=r[o]-s,i=this.curves[o],n=i.getLength(),h=0===n?0:1-t/n;return i.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let s=0,r=this.curves.length;s<r;s++)e+=this.curves[s].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let s=0;s<=t;s++)e.push(this.getPoint(s/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let s;for(let r=0,o=this.curves;r<o.length;r++){const i=o[r],n=i.isEllipseCurve?2*t:i.isLineCurve||i.isLineCurve3?1:i.isSplineCurve?t*i.points.length:t,h=i.getPoints(n);for(let t=0;t<h.length;t++){const r=h[t];s&&s.equals(r)||(e.push(r),s=r)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,s=t.curves.length;e<s;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,s=this.curves.length;e<s;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,s=t.curves.length;e<s;e++){const s=t.curves[e];this.curves.push((new r[s.type]).fromJSON(s))}return this}}class J extends O{constructor(t){super(),this.type="Path",this.currentPoint=new o.Vector2,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,s=t.length;e<s;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const s=new S(this.currentPoint.clone(),new o.Vector2(t,e));return this.curves.push(s),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,s,r){const i=new P(this.currentPoint.clone(),new o.Vector2(t,e),new o.Vector2(s,r));return this.curves.push(i),this.currentPoint.set(s,r),this}bezierCurveTo(t,e,s,r,i,n){const h=new A(this.currentPoint.clone(),new o.Vector2(t,e),new o.Vector2(s,r),new o.Vector2(i,n));return this.curves.push(h),this.currentPoint.set(i,n),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),s=new N(e);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,s,r,o,i){const n=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+n,e+h,s,r,o,i),this}absarc(t,e,s,r,o,i){return this.absellipse(t,e,s,s,r,o,i),this}ellipse(t,e,s,r,o,i,n,h){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,s,r,o,i,n,h),this}absellipse(t,e,s,r,o,i,n,h){const c=new u(t,e,s,r,o,i,n,h);if(this.curves.length>0){const t=c.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y)}this.curves.push(c);const a=c.getPoint(1);return this.currentPoint.copy(a),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}var L=s(4430),z=s(5699);class b extends z.BufferGeometry{constructor(t=[new o.Vector2(0,.5),new o.Vector2(.5,0),new o.Vector2(0,-.5)],e=12,s=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:s,phiLength:r},e=Math.floor(e),r=i.uZ(r,0,2*Math.PI);const h=[],c=[],u=[],a=[],p=[],l=1/e,v=new n.Vector3,y=new o.Vector2,g=new n.Vector3,f=new n.Vector3,m=new n.Vector3;let d=0,w=0;for(let e=0;e<=t.length-1;e++)switch(e){case 0:d=t[e+1].x-t[e].x,w=t[e+1].y-t[e].y,g.x=1*w,g.y=-d,g.z=0*w,m.copy(g),g.normalize(),a.push(g.x,g.y,g.z);break;case t.length-1:a.push(m.x,m.y,m.z);break;default:d=t[e+1].x-t[e].x,w=t[e+1].y-t[e].y,g.x=1*w,g.y=-d,g.z=0*w,f.copy(g),g.x+=m.x,g.y+=m.y,g.z+=m.z,g.normalize(),a.push(g.x,g.y,g.z),m.copy(f)}for(let o=0;o<=e;o++){const i=s+o*l*r,n=Math.sin(i),h=Math.cos(i);for(let s=0;s<=t.length-1;s++){v.x=t[s].x*n,v.y=t[s].y,v.z=t[s].x*h,c.push(v.x,v.y,v.z),y.x=o/e,y.y=s/(t.length-1),u.push(y.x,y.y);const r=a[3*s+0]*n,i=a[3*s+1],l=a[3*s+0]*h;p.push(r,i,l)}}for(let s=0;s<e;s++)for(let e=0;e<t.length-1;e++){const r=e+s*t.length,o=r,i=r+t.length,n=r+t.length+1,c=r+1;h.push(o,i,c),h.push(n,c,i)}this.setIndex(h),this.setAttribute("position",new L.Float32BufferAttribute(c,3)),this.setAttribute("uv",new L.Float32BufferAttribute(u,2)),this.setAttribute("normal",new L.Float32BufferAttribute(p,3))}static fromJSON(t){return new b(t.points,t.segments,t.phiStart,t.phiLength)}}class R extends b{constructor(t=1,e=1,s=4,r=8){const o=new J;o.absarc(0,-e/2,t,1.5*Math.PI,0),o.absarc(0,e/2,t,0,.5*Math.PI),super(o.getPoints(s),r),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:s,radialSegments:r}}static fromJSON(t){return new R(t.radius,t.length,t.capSegments,t.radialSegments)}}}}]);