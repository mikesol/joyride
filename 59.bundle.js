"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[59,3811],{3811:(t,e,r)=>{r.r(e),r.d(e,{InstancedBufferAttribute:()=>i});var s=r(4430);class i extends s.BufferAttribute{constructor(t,e,r,s=1){"number"==typeof r&&(s=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,r),this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}i.prototype.isInstancedBufferAttribute=!0},59:(t,e,r)=>{r.r(e),r.d(e,{InstancedMesh:()=>h});var s=r(3811),i=r(9150),n=r(1245);const a=new n.Matrix4,o=new n.Matrix4,c=[],u=new i.Mesh;class h extends i.Mesh{constructor(t,e,r){super(t,e),this.instanceMatrix=new s.InstancedBufferAttribute(new Float32Array(16*r),16),this.instanceColor=null,this.count=r,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){const r=this.matrixWorld,s=this.count;if(u.geometry=this.geometry,u.material=this.material,void 0!==u.material)for(let i=0;i<s;i++){this.getMatrixAt(i,a),o.multiplyMatrices(r,a),u.matrixWorld=o,u.raycast(t,c);for(let t=0,r=c.length;t<r;t++){const r=c[t];r.instanceId=i,r.object=this,e.push(r)}c.length=0}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new s.InstancedBufferAttribute(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}h.prototype.isInstancedMesh=!0}}]);