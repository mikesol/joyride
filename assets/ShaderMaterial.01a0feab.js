import { M as Material } from "./Material.3b90100d.js";
function cloneUniforms(src) {
  const dst = {};
  for (const u in src) {
    dst[u] = {};
    for (const p in src[u]) {
      const property = src[u][p];
      if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
        dst[u][p] = property.clone();
      } else if (Array.isArray(property)) {
        dst[u][p] = property.slice();
      } else {
        dst[u][p] = property;
      }
    }
  }
  return dst;
}
function mergeUniforms(uniforms) {
  const merged = {};
  for (let u = 0; u < uniforms.length; u++) {
    const tmp = cloneUniforms(uniforms[u]);
    for (const p in tmp) {
      merged[p] = tmp[p];
    }
  }
  return merged;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
const default_vertex = `
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
const default_fragment = `
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;
class ShaderMaterial extends Material {
  constructor(parameters) {
    super();
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.extensions = {
      derivatives: false,
      fragDepth: false,
      drawBuffers: false,
      shaderTextureLOD: false
    };
    this.defaultAttributeValues = {
      "color": [1, 1, 1],
      "uv": [0, 0],
      "uv2": [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (parameters !== void 0) {
      if (parameters.attributes !== void 0) {
        console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.");
      }
      this.setValues(parameters);
    }
  }
  copy(source) {
    super.copy(source);
    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;
    this.uniforms = cloneUniforms(source.uniforms);
    this.defines = Object.assign({}, source.defines);
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.fog = source.fog;
    this.lights = source.lights;
    this.clipping = source.clipping;
    this.extensions = Object.assign({}, source.extensions);
    this.glslVersion = source.glslVersion;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.glslVersion = this.glslVersion;
    data.uniforms = {};
    for (const name in this.uniforms) {
      const uniform = this.uniforms[name];
      const value = uniform.value;
      if (value && value.isTexture) {
        data.uniforms[name] = {
          type: "t",
          value: value.toJSON(meta).uuid
        };
      } else if (value && value.isColor) {
        data.uniforms[name] = {
          type: "c",
          value: value.getHex()
        };
      } else if (value && value.isVector2) {
        data.uniforms[name] = {
          type: "v2",
          value: value.toArray()
        };
      } else if (value && value.isVector3) {
        data.uniforms[name] = {
          type: "v3",
          value: value.toArray()
        };
      } else if (value && value.isVector4) {
        data.uniforms[name] = {
          type: "v4",
          value: value.toArray()
        };
      } else if (value && value.isMatrix3) {
        data.uniforms[name] = {
          type: "m3",
          value: value.toArray()
        };
      } else if (value && value.isMatrix4) {
        data.uniforms[name] = {
          type: "m4",
          value: value.toArray()
        };
      } else {
        data.uniforms[name] = {
          value
        };
      }
    }
    if (Object.keys(this.defines).length > 0)
      data.defines = this.defines;
    data.vertexShader = this.vertexShader;
    data.fragmentShader = this.fragmentShader;
    const extensions = {};
    for (const key in this.extensions) {
      if (this.extensions[key] === true)
        extensions[key] = true;
    }
    if (Object.keys(extensions).length > 0)
      data.extensions = extensions;
    return data;
  }
}
ShaderMaterial.prototype.isShaderMaterial = true;
const ShaderMaterial$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ShaderMaterial
}, Symbol.toStringTag, { value: "Module" }));
export {
  ShaderMaterial as S,
  UniformsUtils as U,
  ShaderMaterial$1 as a,
  cloneUniforms as c,
  mergeUniforms as m
};
