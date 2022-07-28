"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[4532,3163,9542],{9542:(t,s,i)=>{i.d(s,{DO:()=>n,I3:()=>e,gy:()=>y,kz:()=>o,qW:()=>r,t7:()=>l,uZ:()=>a,wt:()=>u});const h=[];for(let t=0;t<256;t++)h[t]=(t<16?"0":"")+t.toString(16);const r=Math.PI/180,e=180/Math.PI;function n(){const t=4294967295*Math.random()|0,s=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(h[255&t]+h[t>>8&255]+h[t>>16&255]+h[t>>24&255]+"-"+h[255&s]+h[s>>8&255]+"-"+h[s>>16&15|64]+h[s>>24&255]+"-"+h[63&i|128]+h[i>>8&255]+"-"+h[i>>16&255]+h[i>>24&255]+h[255&r]+h[r>>8&255]+h[r>>16&255]+h[r>>24&255]).toLowerCase()}function a(t,s,i){return Math.max(s,Math.min(i,t))}function o(t,s){return(t%s+s)%s}function l(t,s,i){return(1-i)*t+i*s}function u(t){return 0==(t&t-1)&&0!==t}function y(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}},3163:(t,s,i)=>{i.r(s),i.d(s,{Quaternion:()=>r});var h=i(9542);class r{constructor(t=0,s=0,i=0,h=1){this._x=t,this._y=s,this._z=i,this._w=h}static slerp(t,s,i,h){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(t,s,h)}static slerpFlat(t,s,i,h,r,e,n){let a=i[h+0],o=i[h+1],l=i[h+2],u=i[h+3];const y=r[e+0],c=r[e+1],_=r[e+2],x=r[e+3];if(0===n)return t[s+0]=a,t[s+1]=o,t[s+2]=l,void(t[s+3]=u);if(1===n)return t[s+0]=y,t[s+1]=c,t[s+2]=_,void(t[s+3]=x);if(u!==x||a!==y||o!==c||l!==_){let t=1-n;const s=a*y+o*c+l*_+u*x,i=s>=0?1:-1,h=1-s*s;if(h>Number.EPSILON){const r=Math.sqrt(h),e=Math.atan2(r,s*i);t=Math.sin(t*e)/r,n=Math.sin(n*e)/r}const r=n*i;if(a=a*t+y*r,o=o*t+c*r,l=l*t+_*r,u=u*t+x*r,t===1-n){const t=1/Math.sqrt(a*a+o*o+l*l+u*u);a*=t,o*=t,l*=t,u*=t}}t[s]=a,t[s+1]=o,t[s+2]=l,t[s+3]=u}static multiplyQuaternionsFlat(t,s,i,h,r,e){const n=i[h],a=i[h+1],o=i[h+2],l=i[h+3],u=r[e],y=r[e+1],c=r[e+2],_=r[e+3];return t[s]=n*_+l*u+a*c-o*y,t[s+1]=a*_+l*y+o*u-n*c,t[s+2]=o*_+l*c+n*y-a*u,t[s+3]=l*_-n*u-a*y-o*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,s,i,h){return this._x=t,this._y=s,this._z=i,this._w=h,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,s){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,h=t._y,r=t._z,e=t._order,n=Math.cos,a=Math.sin,o=n(i/2),l=n(h/2),u=n(r/2),y=a(i/2),c=a(h/2),_=a(r/2);switch(e){case"XYZ":this._x=y*l*u+o*c*_,this._y=o*c*u-y*l*_,this._z=o*l*_+y*c*u,this._w=o*l*u-y*c*_;break;case"YXZ":this._x=y*l*u+o*c*_,this._y=o*c*u-y*l*_,this._z=o*l*_-y*c*u,this._w=o*l*u+y*c*_;break;case"ZXY":this._x=y*l*u-o*c*_,this._y=o*c*u+y*l*_,this._z=o*l*_+y*c*u,this._w=o*l*u-y*c*_;break;case"ZYX":this._x=y*l*u-o*c*_,this._y=o*c*u+y*l*_,this._z=o*l*_-y*c*u,this._w=o*l*u+y*c*_;break;case"YZX":this._x=y*l*u+o*c*_,this._y=o*c*u+y*l*_,this._z=o*l*_-y*c*u,this._w=o*l*u-y*c*_;break;case"XZY":this._x=y*l*u-o*c*_,this._y=o*c*u-y*l*_,this._z=o*l*_+y*c*u,this._w=o*l*u+y*c*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+e)}return!1!==s&&this._onChangeCallback(),this}setFromAxisAngle(t,s){const i=s/2,h=Math.sin(i);return this._x=t.x*h,this._y=t.y*h,this._z=t.z*h,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const s=t.elements,i=s[0],h=s[4],r=s[8],e=s[1],n=s[5],a=s[9],o=s[2],l=s[6],u=s[10],y=i+n+u;if(y>0){const t=.5/Math.sqrt(y+1);this._w=.25/t,this._x=(l-a)*t,this._y=(r-o)*t,this._z=(e-h)*t}else if(i>n&&i>u){const t=2*Math.sqrt(1+i-n-u);this._w=(l-a)/t,this._x=.25*t,this._y=(h+e)/t,this._z=(r+o)/t}else if(n>u){const t=2*Math.sqrt(1+n-i-u);this._w=(r-o)/t,this._x=(h+e)/t,this._y=.25*t,this._z=(a+l)/t}else{const t=2*Math.sqrt(1+u-i-n);this._w=(e-h)/t,this._x=(r+o)/t,this._y=(a+l)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,s){let i=t.dot(s)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*s.z-t.z*s.y,this._y=t.z*s.x-t.x*s.z,this._z=t.x*s.y-t.y*s.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(h.uZ(this.dot(t),-1,1)))}rotateTowards(t,s){const i=this.angleTo(t);if(0===i)return this;const h=Math.min(1,s/i);return this.slerp(t,h),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,s){return void 0!==s?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,s)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,s){const i=t._x,h=t._y,r=t._z,e=t._w,n=s._x,a=s._y,o=s._z,l=s._w;return this._x=i*l+e*n+h*o-r*a,this._y=h*l+e*a+r*n-i*o,this._z=r*l+e*o+i*a-h*n,this._w=e*l-i*n-h*a-r*o,this._onChangeCallback(),this}slerp(t,s){if(0===s)return this;if(1===s)return this.copy(t);const i=this._x,h=this._y,r=this._z,e=this._w;let n=e*t._w+i*t._x+h*t._y+r*t._z;if(n<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,n=-n):this.copy(t),n>=1)return this._w=e,this._x=i,this._y=h,this._z=r,this;const a=1-n*n;if(a<=Number.EPSILON){const t=1-s;return this._w=t*e+s*this._w,this._x=t*i+s*this._x,this._y=t*h+s*this._y,this._z=t*r+s*this._z,this.normalize(),this._onChangeCallback(),this}const o=Math.sqrt(a),l=Math.atan2(o,n),u=Math.sin((1-s)*l)/o,y=Math.sin(s*l)/o;return this._w=e*u+this._w*y,this._x=i*u+this._x*y,this._y=h*u+this._y*y,this._z=r*u+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,s,i){return this.copy(t).slerp(s,i)}random(){const t=Math.random(),s=Math.sqrt(1-t),i=Math.sqrt(t),h=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(s*Math.cos(h),i*Math.sin(r),i*Math.cos(r),s*Math.sin(h))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,s=0){return this._x=t[s],this._y=t[s+1],this._z=t[s+2],this._w=t[s+3],this._onChangeCallback(),this}toArray(t=[],s=0){return t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._w,t}fromBufferAttribute(t,s){return this._x=t.getX(s),this._y=t.getY(s),this._z=t.getZ(s),this._w=t.getW(s),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}r.prototype.isQuaternion=!0},4532:(t,s,i)=>{i.r(s),i.d(s,{Vector3:()=>e});var h=i(9542),r=i(3163);class e{constructor(t=0,s=0,i=0){this.x=t,this.y=s,this.z=i}set(t,s,i){return void 0===i&&(i=this.z),this.x=t,this.y=s,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,s){return void 0!==s?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,s)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this.z=t.z+s.z,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this.z+=t.z*s,this}sub(t,s){return void 0!==s?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,s)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this.z=t.z-s.z,this}multiply(t,s){return void 0!==s?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,s)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,s){return this.x=t.x*s.x,this.y=t.y*s.y,this.z=t.z*s.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(a.setFromEuler(t))}applyAxisAngle(t,s){return this.applyQuaternion(a.setFromAxisAngle(t,s))}applyMatrix3(t){const s=this.x,i=this.y,h=this.z,r=t.elements;return this.x=r[0]*s+r[3]*i+r[6]*h,this.y=r[1]*s+r[4]*i+r[7]*h,this.z=r[2]*s+r[5]*i+r[8]*h,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const s=this.x,i=this.y,h=this.z,r=t.elements,e=1/(r[3]*s+r[7]*i+r[11]*h+r[15]);return this.x=(r[0]*s+r[4]*i+r[8]*h+r[12])*e,this.y=(r[1]*s+r[5]*i+r[9]*h+r[13])*e,this.z=(r[2]*s+r[6]*i+r[10]*h+r[14])*e,this}applyQuaternion(t){const s=this.x,i=this.y,h=this.z,r=t.x,e=t.y,n=t.z,a=t.w,o=a*s+e*h-n*i,l=a*i+n*s-r*h,u=a*h+r*i-e*s,y=-r*s-e*i-n*h;return this.x=o*a+y*-r+l*-n-u*-e,this.y=l*a+y*-e+u*-r-o*-n,this.z=u*a+y*-n+o*-e-l*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const s=this.x,i=this.y,h=this.z,r=t.elements;return this.x=r[0]*s+r[4]*i+r[8]*h,this.y=r[1]*s+r[5]*i+r[9]*h,this.z=r[2]*s+r[6]*i+r[10]*h,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this.z=Math.max(t.z,Math.min(s.z,this.z)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this.z=Math.max(t,Math.min(s,this.z)),this}clampLength(t,s){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(s,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this.z+=(t.z-this.z)*s,this}lerpVectors(t,s,i){return this.x=t.x+(s.x-t.x)*i,this.y=t.y+(s.y-t.y)*i,this.z=t.z+(s.z-t.z)*i,this}cross(t,s){return void 0!==s?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,s)):this.crossVectors(this,t)}crossVectors(t,s){const i=t.x,h=t.y,r=t.z,e=s.x,n=s.y,a=s.z;return this.x=h*a-r*n,this.y=r*e-i*a,this.z=i*n-h*e,this}projectOnVector(t){const s=t.lengthSq();if(0===s)return this.set(0,0,0);const i=t.dot(this)/s;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return n.copy(this).projectOnVector(t),this.sub(n)}reflect(t){return this.sub(n.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const s=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===s)return Math.PI/2;const i=this.dot(t)/s;return Math.acos(h.uZ(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,i=this.y-t.y,h=this.z-t.z;return s*s+i*i+h*h}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,s,i){const h=Math.sin(s)*t;return this.x=h*Math.sin(i),this.y=Math.cos(s)*t,this.z=h*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,s,i){return this.x=t*Math.sin(s),this.y=i,this.z=t*Math.cos(s),this}setFromMatrixPosition(t){const s=t.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this}setFromMatrixScale(t){const s=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),h=this.setFromMatrixColumn(t,2).length();return this.x=s,this.y=i,this.z=h,this}setFromMatrixColumn(t,s){return this.fromArray(t.elements,4*s)}setFromMatrix3Column(t,s){return this.fromArray(t.elements,3*s)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this.z=t[s+2],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t[s+2]=this.z,t}fromBufferAttribute(t,s,i){return void 0!==i&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(s),this.y=t.getY(s),this.z=t.getZ(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),s=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(s),this.y=i*Math.sin(s),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}e.prototype.isVector3=!0;const n=new e,a=new r.Quaternion}}]);
//# sourceMappingURL=4532.bundle.js.map