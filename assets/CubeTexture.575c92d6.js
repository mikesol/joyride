import { T as Texture } from "./Texture.fb44cc87.js";
import { f as CubeReflectionMapping } from "./constants.cc13e4fd.js";
class CubeTexture extends Texture {
  constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {
    images = images !== void 0 ? images : [];
    mapping = mapping !== void 0 ? mapping : CubeReflectionMapping;
    super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding);
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
}
CubeTexture.prototype.isCubeTexture = true;
export {
  CubeTexture as C
};
