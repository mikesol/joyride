"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[699,771,232],{5699:(t,e,r)=>{r.d(e,{u:()=>w});var i=r(4532),s=r(6120),n=r(7232),o=r(9574),a=r(4430),u=r(9771),h=r(3802),m=r(1245),c=r(4894),l=r(9542),d=r(5042);let x=0;const p=new m.Matrix4,y=new h.T,f=new i.Vector3,b=new n.Box3,g=new n.Box3,B=new i.Vector3;class w extends o.p{constructor(){super(),Object.defineProperty(this,"id",{value:x++}),this.uuid=l.DO(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((0,d.H7)(t)?a.Uint32BufferAttribute:a.Uint16BufferAttribute)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(void 0!==r){const e=(new c.V).getNormalMatrix(t);r.applyNormalMatrix(e),r.needsUpdate=!0}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return p.makeRotationFromQuaternion(t),this.applyMatrix4(p),this}rotateX(t){return p.makeRotationX(t),this.applyMatrix4(p),this}rotateY(t){return p.makeRotationY(t),this.applyMatrix4(p),this}rotateZ(t){return p.makeRotationZ(t),this.applyMatrix4(p),this}translate(t,e,r){return p.makeTranslation(t,e,r),this.applyMatrix4(p),this}scale(t,e,r){return p.makeScale(t,e,r),this.applyMatrix4(p),this}lookAt(t){return y.lookAt(t),y.updateMatrix(),this.applyMatrix4(y.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(f).negate(),this.translate(f.x,f.y,f.z),this}setFromPoints(t){const e=[];for(let r=0,i=t.length;r<i;r++){const i=t[r];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new a.Float32BufferAttribute(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new n.Box3);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new i.Vector3(-1/0,-1/0,-1/0),new i.Vector3(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,r=e.length;t<r;t++){const r=e[t];b.setFromBufferAttribute(r),this.morphTargetsRelative?(B.addVectors(this.boundingBox.min,b.min),this.boundingBox.expandByPoint(B),B.addVectors(this.boundingBox.max,b.max),this.boundingBox.expandByPoint(B)):(this.boundingBox.expandByPoint(b.min),this.boundingBox.expandByPoint(b.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new u.Sphere);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new i.Vector3,1/0);if(t){const r=this.boundingSphere.center;if(b.setFromBufferAttribute(t),e)for(let t=0,r=e.length;t<r;t++){const r=e[t];g.setFromBufferAttribute(r),this.morphTargetsRelative?(B.addVectors(b.min,g.min),b.expandByPoint(B),B.addVectors(b.max,g.max),b.expandByPoint(B)):(b.expandByPoint(g.min),b.expandByPoint(g.max))}b.getCenter(r);let i=0;for(let e=0,s=t.count;e<s;e++)B.fromBufferAttribute(t,e),i=Math.max(i,r.distanceToSquared(B));if(e)for(let s=0,n=e.length;s<n;s++){const n=e[s],o=this.morphTargetsRelative;for(let e=0,s=n.count;e<s;e++)B.fromBufferAttribute(n,e),o&&(f.fromBufferAttribute(t,e),B.add(f)),i=Math.max(i,r.distanceToSquared(B))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const r=t.array,n=e.position.array,o=e.normal.array,u=e.uv.array,h=n.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new a.BufferAttribute(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,c=[],l=[];for(let t=0;t<h;t++)c[t]=new i.Vector3,l[t]=new i.Vector3;const d=new i.Vector3,x=new i.Vector3,p=new i.Vector3,y=new s.Vector2,f=new s.Vector2,b=new s.Vector2,g=new i.Vector3,B=new i.Vector3;function w(t,e,r){d.fromArray(n,3*t),x.fromArray(n,3*e),p.fromArray(n,3*r),y.fromArray(u,2*t),f.fromArray(u,2*e),b.fromArray(u,2*r),x.sub(d),p.sub(d),f.sub(y),b.sub(y);const i=1/(f.x*b.y-b.x*f.y);isFinite(i)&&(g.copy(x).multiplyScalar(b.y).addScaledVector(p,-f.y).multiplyScalar(i),B.copy(p).multiplyScalar(f.x).addScaledVector(x,-b.x).multiplyScalar(i),c[t].add(g),c[e].add(g),c[r].add(g),l[t].add(B),l[e].add(B),l[r].add(B))}let A=this.groups;0===A.length&&(A=[{start:0,count:r.length}]);for(let t=0,e=A.length;t<e;++t){const e=A[t],i=e.start;for(let t=i,s=i+e.count;t<s;t+=3)w(r[t+0],r[t+1],r[t+2])}const V=new i.Vector3,z=new i.Vector3,S=new i.Vector3,v=new i.Vector3;function M(t){S.fromArray(o,3*t),v.copy(S);const e=c[t];V.copy(e),V.sub(S.multiplyScalar(S.dot(e))).normalize(),z.crossVectors(v,e);const r=z.dot(l[t])<0?-1:1;m[4*t]=V.x,m[4*t+1]=V.y,m[4*t+2]=V.z,m[4*t+3]=r}for(let t=0,e=A.length;t<e;++t){const e=A[t],i=e.start;for(let t=i,s=i+e.count;t<s;t+=3)M(r[t+0]),M(r[t+1]),M(r[t+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let r=this.getAttribute("normal");if(void 0===r)r=new a.BufferAttribute(new Float32Array(3*e.count),3),this.setAttribute("normal",r);else for(let t=0,e=r.count;t<e;t++)r.setXYZ(t,0,0,0);const s=new i.Vector3,n=new i.Vector3,o=new i.Vector3,u=new i.Vector3,h=new i.Vector3,m=new i.Vector3,c=new i.Vector3,l=new i.Vector3;if(t)for(let i=0,a=t.count;i<a;i+=3){const a=t.getX(i+0),d=t.getX(i+1),x=t.getX(i+2);s.fromBufferAttribute(e,a),n.fromBufferAttribute(e,d),o.fromBufferAttribute(e,x),c.subVectors(o,n),l.subVectors(s,n),c.cross(l),u.fromBufferAttribute(r,a),h.fromBufferAttribute(r,d),m.fromBufferAttribute(r,x),u.add(c),h.add(c),m.add(c),r.setXYZ(a,u.x,u.y,u.z),r.setXYZ(d,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let t=0,i=e.count;t<i;t+=3)s.fromBufferAttribute(e,t+0),n.fromBufferAttribute(e,t+1),o.fromBufferAttribute(e,t+2),c.subVectors(o,n),l.subVectors(s,n),c.cross(l),r.setXYZ(t+0,c.x,c.y,c.z),r.setXYZ(t+1,c.x,c.y,c.z),r.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(t,e){if(!t||!t.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const i in r){if(void 0===t.attributes[i])continue;const s=r[i].array,n=t.attributes[i],o=n.array,a=n.itemSize*e,u=Math.min(o.length,s.length-a);for(let t=0,e=a;t<u;t++,e++)s[e]=o[t]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)B.fromBufferAttribute(t,e),B.normalize(),t.setXYZ(e,B.x,B.y,B.z)}toNonIndexed(){function t(t,e){const r=t.array,i=t.itemSize,s=t.normalized,n=new r.constructor(e.length*i);let o=0,u=0;for(let s=0,a=e.length;s<a;s++){o=t.isInterleavedBufferAttribute?e[s]*t.data.stride+t.offset:e[s]*i;for(let t=0;t<i;t++)n[u++]=r[o++]}return new a.BufferAttribute(n,i,s)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new w,r=this.index.array,i=this.attributes;for(const s in i){const n=t(i[s],r);e.setAttribute(s,n)}const s=this.morphAttributes;for(const i in s){const n=[],o=s[i];for(let e=0,i=o.length;e<i;e++){const i=t(o[e],r);n.push(i)}e.morphAttributes[i]=n}e.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let t=0,r=n.length;t<r;t++){const r=n[t];e.addGroup(r.start,r.count,r.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const r in e)void 0!==e[r]&&(t[r]=e[r]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const e in r){const i=r[e];t.data.attributes[e]=i.toJSON(t.data)}const i={};let s=!1;for(const e in this.morphAttributes){const r=this.morphAttributes[e],n=[];for(let e=0,i=r.length;e<i;e++){const i=r[e];n.push(i.toJSON(t.data))}n.length>0&&(i[e]=n,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return null!==o&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;null!==r&&this.setIndex(r.clone(e));const i=t.attributes;for(const t in i){const r=i[t];this.setAttribute(t,r.clone(e))}const s=t.morphAttributes;for(const t in s){const r=[],i=s[t];for(let t=0,s=i.length;t<s;t++)r.push(i[t].clone(e));this.morphAttributes[t]=r}this.morphTargetsRelative=t.morphTargetsRelative;const n=t.groups;for(let t=0,e=n.length;t<e;t++){const e=n[t];this.addGroup(e.start,e.count,e.materialIndex)}const o=t.boundingBox;null!==o&&(this.boundingBox=o.clone());const a=t.boundingSphere;return null!==a&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,void 0!==t.parameters&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}w.prototype.isBufferGeometry=!0},7232:(t,e,r)=>{r.r(e),r.d(e,{Box3:()=>s});var i=r(4532);class s{constructor(t=new i.Vector3(1/0,1/0,1/0),e=new i.Vector3(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,r=1/0,i=1/0,s=-1/0,n=-1/0,o=-1/0;for(let a=0,u=t.length;a<u;a+=3){const u=t[a],h=t[a+1],m=t[a+2];u<e&&(e=u),h<r&&(r=h),m<i&&(i=m),u>s&&(s=u),h>n&&(n=h),m>o&&(o=m)}return this.min.set(e,r,i),this.max.set(s,n,o),this}setFromBufferAttribute(t){let e=1/0,r=1/0,i=1/0,s=-1/0,n=-1/0,o=-1/0;for(let a=0,u=t.count;a<u;a++){const u=t.getX(a),h=t.getY(a),m=t.getZ(a);u<e&&(e=u),h<r&&(r=h),m<i&&(i=m),u>s&&(s=u),h>n&&(n=h),m>o&&(o=m)}return this.min.set(e,r,i),this.max.set(s,n,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=o.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(void 0!==r)if(e&&null!=r.attributes&&void 0!==r.attributes.position){const e=r.attributes.position;for(let r=0,i=e.count;r<i;r++)o.fromBufferAttribute(e,r).applyMatrix4(t.matrixWorld),this.expandByPoint(o)}else null===r.boundingBox&&r.computeBoundingBox(),a.copy(r.boundingBox),a.applyMatrix4(t.matrixWorld),this.union(a);const i=t.children;for(let t=0,r=i.length;t<r;t++)this.expandByObject(i[t],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,o),o.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(x),p.subVectors(this.max,x),u.subVectors(t.a,x),h.subVectors(t.b,x),m.subVectors(t.c,x),c.subVectors(h,u),l.subVectors(m,h),d.subVectors(u,m);let e=[0,-c.z,c.y,0,-l.z,l.y,0,-d.z,d.y,c.z,0,-c.x,l.z,0,-l.x,d.z,0,-d.x,-c.y,c.x,0,-l.y,l.x,0,-d.y,d.x,0];return!!b(e,u,h,m,p)&&(e=[1,0,0,0,1,0,0,0,1],!!b(e,u,h,m,p)&&(y.crossVectors(c,l),e=[y.x,y.y,y.z],b(e,u,h,m,p)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return o.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=.5*this.getSize(o).length(),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(n)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}s.prototype.isBox3=!0;const n=[new i.Vector3,new i.Vector3,new i.Vector3,new i.Vector3,new i.Vector3,new i.Vector3,new i.Vector3,new i.Vector3],o=new i.Vector3,a=new s,u=new i.Vector3,h=new i.Vector3,m=new i.Vector3,c=new i.Vector3,l=new i.Vector3,d=new i.Vector3,x=new i.Vector3,p=new i.Vector3,y=new i.Vector3,f=new i.Vector3;function b(t,e,r,i,s){for(let n=0,o=t.length-3;n<=o;n+=3){f.fromArray(t,n);const o=s.x*Math.abs(f.x)+s.y*Math.abs(f.y)+s.z*Math.abs(f.z),a=e.dot(f),u=r.dot(f),h=i.dot(f);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>o)return!1}return!0}},9771:(t,e,r)=>{r.r(e),r.d(e,{Sphere:()=>h});var i=r(7232),s=r(4532);const n=new i.Box3,o=new s.Vector3,a=new s.Vector3,u=new s.Vector3;class h{constructor(t=new s.Vector3,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;void 0!==e?r.copy(e):n.setFromPoints(t).getCenter(r);let i=0;for(let e=0,s=t.length;e<s;e++)i=Math.max(i,r.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){u.subVectors(t,this.center);const e=u.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),r=.5*(t-this.radius);this.center.add(u.multiplyScalar(r/t)),this.radius+=r}return this}union(t){return!0===this.center.equals(t.center)?a.set(0,0,1).multiplyScalar(t.radius):a.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(o.copy(t.center).add(a)),this.expandByPoint(o.copy(t.center).sub(a)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}},5042:(t,e,r)=>{function i(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function s(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}r.d(e,{H7:()=>i,c:()=>s}),Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array}}]);