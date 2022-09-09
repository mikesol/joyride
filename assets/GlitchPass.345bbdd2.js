import { ac as UniformsUtils, ab as ShaderMaterial, ad as LuminanceFormat, Y as MathUtils, ae as DataTexture, af as RedFormat, ag as FloatType } from "./three.module.81fc2a6a.js";
import { P as Pass, F as FullScreenQuad } from "./Pass.09e32dfb.js";
const DigitalGlitch = {
  uniforms: {
    "tDiffuse": { value: null },
    "tDisp": { value: null },
    "byp": { value: 0 },
    "amount": { value: 0.08 },
    "angle": { value: 0.02 },
    "seed": { value: 0.02 },
    "seed_x": { value: 0.02 },
    "seed_y": { value: 0.02 },
    "distortion_x": { value: 0.5 },
    "distortion_y": { value: 0.6 },
    "col_s": { value: 0.05 }
  },
  vertexShader: `

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
  fragmentShader: `

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
		}`
};
class GlitchPass extends Pass {
  constructor(dt_size = 64) {
    super();
    if (DigitalGlitch === void 0)
      console.error("THREE.GlitchPass relies on DigitalGlitch");
    const shader = DigitalGlitch;
    this.uniforms = UniformsUtils.clone(shader.uniforms);
    this.uniforms["tDisp"].value = this.generateHeightmap(dt_size);
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader
    });
    this.fsQuad = new FullScreenQuad(this.material);
    this.goWild = false;
    this.curF = 0;
    this.generateTrigger();
  }
  render(renderer, writeBuffer, readBuffer) {
    if (renderer.capabilities.isWebGL2 === false)
      this.uniforms["tDisp"].value.format = LuminanceFormat;
    this.uniforms["tDiffuse"].value = readBuffer.texture;
    this.uniforms["seed"].value = Math.random();
    this.uniforms["byp"].value = 0;
    if (this.curF % this.randX == 0 || this.goWild == true) {
      this.uniforms["amount"].value = Math.random() / 30;
      this.uniforms["angle"].value = MathUtils.randFloat(-Math.PI, Math.PI);
      this.uniforms["seed_x"].value = MathUtils.randFloat(-1, 1);
      this.uniforms["seed_y"].value = MathUtils.randFloat(-1, 1);
      this.uniforms["distortion_x"].value = MathUtils.randFloat(0, 1);
      this.uniforms["distortion_y"].value = MathUtils.randFloat(0, 1);
      this.curF = 0;
      this.generateTrigger();
    } else if (this.curF % this.randX < this.randX / 5) {
      this.uniforms["amount"].value = Math.random() / 90;
      this.uniforms["angle"].value = MathUtils.randFloat(-Math.PI, Math.PI);
      this.uniforms["distortion_x"].value = MathUtils.randFloat(0, 1);
      this.uniforms["distortion_y"].value = MathUtils.randFloat(0, 1);
      this.uniforms["seed_x"].value = MathUtils.randFloat(-0.3, 0.3);
      this.uniforms["seed_y"].value = MathUtils.randFloat(-0.3, 0.3);
    } else if (this.goWild == false) {
      this.uniforms["byp"].value = 1;
    }
    this.curF++;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear)
        renderer.clear();
      this.fsQuad.render(renderer);
    }
  }
  generateTrigger() {
    this.randX = MathUtils.randInt(120, 240);
  }
  generateHeightmap(dt_size) {
    const data_arr = new Float32Array(dt_size * dt_size);
    const length = dt_size * dt_size;
    for (let i = 0; i < length; i++) {
      const val = MathUtils.randFloat(0, 1);
      data_arr[i] = val;
    }
    const texture = new DataTexture(data_arr, dt_size, dt_size, RedFormat, FloatType);
    texture.needsUpdate = true;
    return texture;
  }
}
export {
  GlitchPass
};
