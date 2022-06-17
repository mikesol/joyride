"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[492],{94:(t,i,s)=>{s.d(i,{V:()=>o});var e=s(1245),r=s(3802);class o extends r.T{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new e.Matrix4,this.projectionMatrix=new e.Matrix4,this.projectionMatrixInverse=new e.Matrix4}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}o.prototype.isCamera=!0},4152:(t,i,s)=>{s.d(i,{i:()=>r});var e=s(94);class r extends e.V{constructor(t=-1,i=1,s=1,e=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=e,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,i,s,e,r,o){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=e,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let r=s-t,o=s+t,n=e+i,a=e-i;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,i=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,o=r+t*this.view.width,n-=i*this.view.offsetY,a=n-i*this.view.height}this.projectionMatrix.makeOrthographic(r,o,n,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,null!==this.view&&(i.object.view=Object.assign({},this.view)),i}}r.prototype.isOrthographicCamera=!0},3492:(t,i,s)=>{s.r(i),s.d(i,{DirectionalLight:()=>h});var e=s(7675),r=s(6139),o=s(4152);class n extends r.h{constructor(){super(new o.i(-5,5,5,-5,.5,500))}}n.prototype.isDirectionalLightShadow=!0;var a=s(3802);class h extends e._{constructor(t,i){super(t,i),this.type="DirectionalLight",this.position.copy(a.T.DefaultUp),this.updateMatrix(),this.target=new a.T,this.shadow=new n}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}h.prototype.isDirectionalLight=!0},7675:(t,i,s)=>{s.d(i,{_:()=>o});var e=s(3802),r=s(7282);class o extends e.T{constructor(t,i=1){super(),this.type="Light",this.color=new r.Color(t),this.intensity=i}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,void 0!==this.groundColor&&(i.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(i.object.distance=this.distance),void 0!==this.angle&&(i.object.angle=this.angle),void 0!==this.decay&&(i.object.decay=this.decay),void 0!==this.penumbra&&(i.object.penumbra=this.penumbra),void 0!==this.shadow&&(i.object.shadow=this.shadow.toJSON()),i}}o.prototype.isLight=!0},6139:(t,i,s)=>{s.d(i,{h:()=>p});var e=s(1245),r=s(6120),o=s(4532),n=s(6980),a=s(3871);const h=new e.Matrix4,c=new o.Vector3,l=new o.Vector3;class p{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r.Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new e.Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new a.i,this._frameExtents=new r.Vector2(1,1),this._viewportCount=1,this._viewports=[new n.L(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;c.setFromMatrixPosition(t.matrixWorld),i.position.copy(c),l.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(l),i.updateMatrixWorld(),h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(i.projectionMatrix),s.multiply(i.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}},3871:(t,i,s)=>{s.d(i,{i:()=>h});var e=s(4532),r=s(9771),o=s(2158);const n=new r.Sphere,a=new e.Vector3;class h{constructor(t=new o.J,i=new o.J,s=new o.J,e=new o.J,r=new o.J,n=new o.J){this.planes=[t,i,s,e,r,n]}set(t,i,s,e,r,o){const n=this.planes;return n[0].copy(t),n[1].copy(i),n[2].copy(s),n[3].copy(e),n[4].copy(r),n[5].copy(o),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t){const i=this.planes,s=t.elements,e=s[0],r=s[1],o=s[2],n=s[3],a=s[4],h=s[5],c=s[6],l=s[7],p=s[8],u=s[9],m=s[10],d=s[11],y=s[12],w=s[13],x=s[14],v=s[15];return i[0].setComponents(n-e,l-a,d-p,v-y).normalize(),i[1].setComponents(n+e,l+a,d+p,v+y).normalize(),i[2].setComponents(n+r,l+h,d+u,v+w).normalize(),i[3].setComponents(n-r,l-h,d-u,v-w).normalize(),i[4].setComponents(n-o,l-c,d-m,v-x).normalize(),i[5].setComponents(n+o,l+c,d+m,v+x).normalize(),this}intersectsObject(t){const i=t.geometry;return null===i.boundingSphere&&i.computeBoundingSphere(),n.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(n)}intersectsSprite(t){return n.center.set(0,0,0),n.radius=.7071067811865476,n.applyMatrix4(t.matrixWorld),this.intersectsSphere(n)}intersectsSphere(t){const i=this.planes,s=t.center,e=-t.radius;for(let t=0;t<6;t++)if(i[t].distanceToPoint(s)<e)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const e=i[s];if(a.x=e.normal.x>0?t.max.x:t.min.x,a.y=e.normal.y>0?t.max.y:t.min.y,a.z=e.normal.z>0?t.max.z:t.min.z,e.distanceToPoint(a)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}},2158:(t,i,s)=>{s.d(i,{J:()=>h});var e=s(4894),r=s(4532);const o=new r.Vector3,n=new r.Vector3,a=new e.V;class h{constructor(t=new r.Vector3(1,0,0),i=0){this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,e){return this.normal.set(t,i,s),this.constant=e,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const e=o.subVectors(s,i).cross(n.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(e,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,i){const s=t.delta(o),e=this.normal.dot(s);if(0===e)return 0===this.distanceToPoint(t.start)?i.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/e;return r<0||r>1?null:i.copy(s).multiplyScalar(r).add(t.start)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||a.getNormalMatrix(t),e=this.coplanarPoint(o).applyMatrix4(t),r=this.normal.applyMatrix3(s).normalize();return this.constant=-e.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}h.prototype.isPlane=!0}}]);