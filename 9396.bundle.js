"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[9396],{2096:(t,e,i)=>{i.r(e),i.d(e,{PerspectiveCamera:()=>h});var s=i(94),o=i(9542);class h extends s.V{constructor(t=50,e=1,i=.1,s=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*o.I3*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*o.qW*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*o.I3*Math.atan(Math.tan(.5*o.qW*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,o,h){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*o.qW*this.fov)/this.zoom,i=2*e,s=this.aspect*i,h=-.5*s;const r=this.view;if(null!==this.view&&this.view.enabled){const t=r.fullWidth,o=r.fullHeight;h+=r.offsetX*s/t,e-=r.offsetY*i/o,s*=r.width/t,i*=r.height/o}const a=this.filmOffset;0!==a&&(h+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(h,h+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}h.prototype.isPerspectiveCamera=!0},9396:(t,e,i)=>{i.r(e),i.d(e,{PointLight:()=>w});var s=i(7675),o=i(6139),h=i(2096),r=i(1245),a=i(6120),n=i(4532),c=i(6980);const f=new r.Matrix4,l=new n.Vector3,p=new n.Vector3;class u extends o.h{constructor(){super(new h.PerspectiveCamera(90,1,.5,500)),this._frameExtents=new a.Vector2(4,2),this._viewportCount=6,this._viewports=[new c.L(2,1,1,1),new c.L(0,1,1,1),new c.L(3,1,1,1),new c.L(1,1,1,1),new c.L(3,0,1,1),new c.L(1,0,1,1)],this._cubeDirections=[new n.Vector3(1,0,0),new n.Vector3(-1,0,0),new n.Vector3(0,0,1),new n.Vector3(0,0,-1),new n.Vector3(0,1,0),new n.Vector3(0,-1,0)],this._cubeUps=[new n.Vector3(0,1,0),new n.Vector3(0,1,0),new n.Vector3(0,1,0),new n.Vector3(0,1,0),new n.Vector3(0,0,1),new n.Vector3(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),l.setFromMatrixPosition(t.matrixWorld),i.position.copy(l),p.copy(i.position),p.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(p),i.updateMatrixWorld(),s.makeTranslation(-l.x,-l.y,-l.z),f.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f)}}u.prototype.isPointLightShadow=!0;class w extends s._{constructor(t,e,i=0,s=1){super(t,e),this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new u}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}w.prototype.isPointLight=!0}}]);