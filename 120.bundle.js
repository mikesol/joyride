"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[120],{6120:(t,s,h)=>{h.r(s),h.d(s,{Vector2:()=>i});class i{constructor(t=0,s=0){this.x=t,this.y=s}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,s){return this.x=t,this.y=s,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,s){return void 0!==s?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,s)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this}sub(t,s){return void 0!==s?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,s)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const s=this.x,h=this.y,i=t.elements;return this.x=i[0]*s+i[3]*h+i[6],this.y=i[1]*s+i[4]*h+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this}clampLength(t,s){const h=this.length();return this.divideScalar(h||1).multiplyScalar(Math.max(t,Math.min(s,h)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,h=this.y-t.y;return s*s+h*h}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this}lerpVectors(t,s,h){return this.x=t.x+(s.x-t.x)*h,this.y=t.y+(s.y-t.y)*h,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t}fromBufferAttribute(t,s,h){return void 0!==h&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(s),this.y=t.getY(s),this}rotateAround(t,s){const h=Math.cos(s),i=Math.sin(s),r=this.x-t.x,e=this.y-t.y;return this.x=r*h-e*i+t.x,this.y=r*i+e*h+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}i.prototype.isVector2=!0}}]);