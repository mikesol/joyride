"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[4458],{8304:(e,r,t)=>{t.d(r,{T:()=>o,w:()=>a});var s=t(9477);class a{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const i=new s.iKG(-1,1,1,-1,0,1),l=new s.u9r;l.setAttribute("position",new s.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new s.a$l([0,2,0,0,2,0],2));class o{constructor(e){this._mesh=new s.Kj0(l,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},4458:(e,r,t)=>{t.r(r),t.d(r,{RenderPass:()=>i});var s=t(9477),a=t(8304);class i extends a.w{constructor(e,r,t,a,i){super(),this.scene=e,this.camera=r,this.overrideMaterial=t,this.clearColor=a,this.clearAlpha=void 0!==i?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s.Ilk}render(e,r,t){const s=e.autoClear;let a,i;e.autoClear=!1,void 0!==this.overrideMaterial&&(i=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=i),e.autoClear=s}}}}]);