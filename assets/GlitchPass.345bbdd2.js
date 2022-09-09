import{ac as l,ab as u,ad as f,Y as t,ae as d,af as h,ag as m}from"./three.module.81fc2a6a.js";import{P as c,F as v}from"./Pass.09e32dfb.js";const r={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`};class _ extends c{constructor(e=64){super(),r===void 0&&console.error("THREE.GlitchPass relies on DigitalGlitch");const a=r;this.uniforms=l.clone(a.uniforms),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new u({uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.fsQuad=new v(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,a,s){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=f),this.uniforms.tDiffuse.value=s.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=t.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=t.randFloat(-1,1),this.uniforms.seed_y.value=t.randFloat(-1,1),this.uniforms.distortion_x.value=t.randFloat(0,1),this.uniforms.distortion_y.value=t.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=t.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=t.randFloat(0,1),this.uniforms.distortion_y.value=t.randFloat(0,1),this.uniforms.seed_x.value=t.randFloat(-.3,.3),this.uniforms.seed_y.value=t.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=t.randInt(120,240)}generateHeightmap(e){const a=new Float32Array(e*e),s=e*e;for(let i=0;i<s;i++){const n=t.randFloat(0,1);a[i]=n}const o=new d(a,e,e,h,m);return o.needsUpdate=!0,o}}export{_ as GlitchPass};
