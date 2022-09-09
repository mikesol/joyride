import { L as Loader, I as ImageLoader } from "./ImageLoader.7060b556.js";
import { C as CubeTexture } from "./CubeTexture.575c92d6.js";
import "./utils.4cfc5b76.js";
import "./Texture.fb44cc87.js";
import "./EventDispatcher.62ae53dd.js";
import "./constants.cc13e4fd.js";
import "./MathUtils.9169ae61.js";
import "./Vector2.3964b2c2.js";
import "./Matrix3.254ef6d6.js";
import "./Color.5efc95ab.js";
class CubeTextureLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(urls, onLoad, onProgress, onError) {
    const texture = new CubeTexture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    let loaded = 0;
    function loadTexture(i) {
      loader.load(urls[i], function(image) {
        texture.images[i] = image;
        loaded++;
        if (loaded === 6) {
          texture.needsUpdate = true;
          if (onLoad)
            onLoad(texture);
        }
      }, void 0, onError);
    }
    for (let i = 0; i < urls.length; ++i) {
      loadTexture(i);
    }
    return texture;
  }
}
export {
  CubeTextureLoader
};
