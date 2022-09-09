import { O as Object3D } from "./Object3D.d81adcf4.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
import "./Matrix4.0c7a2215.js";
import "./EventDispatcher.62ae53dd.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
class Scene extends Object3D {
  constructor() {
    super();
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.overrideMaterial = null;
    this.autoUpdate = true;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.background !== null)
      this.background = source.background.clone();
    if (source.environment !== null)
      this.environment = source.environment.clone();
    if (source.fog !== null)
      this.fog = source.fog.clone();
    if (source.overrideMaterial !== null)
      this.overrideMaterial = source.overrideMaterial.clone();
    this.autoUpdate = source.autoUpdate;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.fog !== null)
      data.object.fog = this.fog.toJSON();
    return data;
  }
}
Scene.prototype.isScene = true;
export {
  Scene
};
