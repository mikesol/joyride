"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[3492],{4152:(t,i,e)=>{e.d(i,{i:()=>h});var s=e(94);class h extends s.V{constructor(t=-1,i=1,e=1,s=-1,h=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=e,this.bottom=s,this.near=h,this.far=o,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,i,e,s,h,o){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=e,this.view.offsetY=s,this.view.width=h,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let h=e-t,o=e+t,r=s+i,a=s-i;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,i=(this.top-this.bottom)/this.view.fullHeight/this.zoom;h+=t*this.view.offsetX,o=h+t*this.view.width,r-=i*this.view.offsetY,a=r-i*this.view.height}this.projectionMatrix.makeOrthographic(h,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,null!==this.view&&(i.object.view=Object.assign({},this.view)),i}}h.prototype.isOrthographicCamera=!0},3492:(t,i,e)=>{e.r(i),e.d(i,{DirectionalLight:()=>l});var s=e(7675),h=e(6139),o=e(4152);class r extends h.h{constructor(){super(new o.i(-5,5,5,-5,.5,500))}}r.prototype.isDirectionalLightShadow=!0;var a=e(1052);class l extends s._{constructor(t,i){super(t,i),this.type="DirectionalLight",this.position.copy(a.T.DefaultUp),this.updateMatrix(),this.target=new a.T,this.shadow=new r}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}l.prototype.isDirectionalLight=!0}}]);