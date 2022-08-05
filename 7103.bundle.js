"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[7103],{7103:(t,e,n)=>{n.r(e),n.d(e,{GlitchPass:()=>a});var s=n(9477),r=n(8304);const i={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\t\tvoid main() {\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t}",fragmentShader:"\n\n\t\tuniform int byp; //should we apply the glitch ?\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform sampler2D tDisp;\n\n\t\tuniform float amount;\n\t\tuniform float angle;\n\t\tuniform float seed;\n\t\tuniform float seed_x;\n\t\tuniform float seed_y;\n\t\tuniform float distortion_x;\n\t\tuniform float distortion_y;\n\t\tuniform float col_s;\n\n\t\tvarying vec2 vUv;\n\n\n\t\tfloat rand(vec2 co){\n\t\t\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n\t\t}\n\n\t\tvoid main() {\n\t\t\tif(byp<1) {\n\t\t\t\tvec2 p = vUv;\n\t\t\t\tfloat xs = floor(gl_FragCoord.x / 0.5);\n\t\t\t\tfloat ys = floor(gl_FragCoord.y / 0.5);\n\t\t\t\t//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch\n\t\t\t\tfloat disp = texture2D(tDisp, p*seed*seed).r;\n\t\t\t\tif(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {\n\t\t\t\t\tif(seed_x>0.){\n\t\t\t\t\t\tp.y = 1. - (p.y + distortion_y);\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tp.y = distortion_y;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {\n\t\t\t\t\tif(seed_y>0.){\n\t\t\t\t\t\tp.x=distortion_x;\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tp.x = 1. - (p.x + distortion_x);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tp.x+=disp*seed_x*(seed/5.);\n\t\t\t\tp.y+=disp*seed_y*(seed/5.);\n\t\t\t\t//base from RGB shift shader\n\t\t\t\tvec2 offset = amount * vec2( cos(angle), sin(angle));\n\t\t\t\tvec4 cr = texture2D(tDiffuse, p + offset);\n\t\t\t\tvec4 cga = texture2D(tDiffuse, p);\n\t\t\t\tvec4 cb = texture2D(tDiffuse, p - offset);\n\t\t\t\tgl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n\t\t\t\t//add noise\n\t\t\t\tvec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);\n\t\t\t\tgl_FragColor = gl_FragColor+ snow;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tgl_FragColor=texture2D (tDiffuse, vUv);\n\t\t\t}\n\t\t}"};class a extends r.w{constructor(t=64){super(),void 0===i&&console.error("THREE.GlitchPass relies on DigitalGlitch");const e=i;this.uniforms=s.rDY.clone(e.uniforms),this.uniforms.tDisp.value=this.generateHeightmap(t),this.material=new s.jyz({uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new r.T(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(t,e,n){!1===t.capabilities.isWebGL2&&(this.uniforms.tDisp.value.format=s.Y8D),this.uniforms.tDiffuse.value=n.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||1==this.goWild?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=s.M8C.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=s.M8C.randFloat(-1,1),this.uniforms.seed_y.value=s.M8C.randFloat(-1,1),this.uniforms.distortion_x.value=s.M8C.randFloat(0,1),this.uniforms.distortion_y.value=s.M8C.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=s.M8C.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=s.M8C.randFloat(0,1),this.uniforms.distortion_y.value=s.M8C.randFloat(0,1),this.uniforms.seed_x.value=s.M8C.randFloat(-.3,.3),this.uniforms.seed_y.value=s.M8C.randFloat(-.3,.3)):0==this.goWild&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}generateTrigger(){this.randX=s.M8C.randInt(120,240)}generateHeightmap(t){const e=new Float32Array(t*t),n=t*t;for(let t=0;t<n;t++){const n=s.M8C.randFloat(0,1);e[t]=n}const r=new s.IEO(e,t,t,s.hEm,s.VzW);return r.needsUpdate=!0,r}}},8304:(t,e,n)=>{n.d(e,{T:()=>o,w:()=>r});var s=n(9477);class r{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const i=new s.iKG(-1,1,1,-1,0,1),a=new s.u9r;a.setAttribute("position",new s.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new s.a$l([0,2,0,0,2,0],2));class o{constructor(t){this._mesh=new s.Kj0(a,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,i)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}}}]);
//# sourceMappingURL=7103.bundle.js.map