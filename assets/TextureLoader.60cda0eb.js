import { L as Loader, I as ImageLoader } from "./ImageLoader.7060b556.js";
import { T as Texture } from "./Texture.fb44cc87.js";
import "./utils.4cfc5b76.js";
import "./EventDispatcher.62ae53dd.js";
import "./constants.cc13e4fd.js";
import "./MathUtils.9169ae61.js";
import "./Vector2.3964b2c2.js";
import "./Matrix3.254ef6d6.js";
import "./Color.5efc95ab.js";
class TextureLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const texture = new Texture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    loader.load(url, function(image) {
      texture.image = image;
      texture.needsUpdate = true;
      if (onLoad !== void 0) {
        onLoad(texture);
      }
    }, onProgress, onError);
    return texture;
  }
}
export {
  TextureLoader
};
