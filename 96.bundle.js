"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[96],{94:(t,e,i)=>{i.d(e,{V:()=>o});var s=i(1245),r=i(1052);class o extends r.T{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new s.Matrix4,this.projectionMatrix=new s.Matrix4,this.projectionMatrixInverse=new s.Matrix4}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}o.prototype.isCamera=!0},2096:(t,e,i)=>{i.r(e),i.d(e,{PerspectiveCamera:()=>o});var s=i(94),r=i(9542);class o extends s.V{constructor(t=50,e=1,i=.1,s=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*r.I3*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*r.qW*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*r.I3*Math.atan(Math.tan(.5*r.qW*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*r.qW*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const h=this.view;if(null!==this.view&&this.view.enabled){const t=h.fullWidth,r=h.fullHeight;o+=h.offsetX*s/t,e-=h.offsetY*i/r,s*=h.width/t,i*=h.height/r}const a=this.filmOffset;0!==a&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}o.prototype.isPerspectiveCamera=!0}}]);