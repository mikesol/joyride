"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[7531],{8304:(e,s,t)=>{t.d(s,{T:()=>h,w:()=>i});var r=t(9477);class i{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const a=new r.iKG(-1,1,1,-1,0,1),n=new r.u9r;n.setAttribute("position",new r.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),n.setAttribute("uv",new r.a$l([0,2,0,0,2,0],2));class h{constructor(e){this._mesh=new r.Kj0(n,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},7531:(e,s,t)=>{t.r(s),t.d(s,{ShaderPass:()=>a});var r=t(9477),i=t(8304);class a extends i.w{constructor(e,s){super(),this.textureID=void 0!==s?s:"tDiffuse",e instanceof r.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=r.rDY.clone(e.uniforms),this.material=new r.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new i.T(this.material)}render(e,s,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}}}]);
//# sourceMappingURL=7531.bundle.js.map