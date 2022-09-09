import { L as Light } from "./Light.876ff18c.js";
import "./Object3D.d81adcf4.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
import "./Matrix4.0c7a2215.js";
import "./EventDispatcher.62ae53dd.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
class AmbientLight extends Light {
  constructor(color, intensity) {
    super(color, intensity);
    this.type = "AmbientLight";
  }
}
AmbientLight.prototype.isAmbientLight = true;
export {
  AmbientLight
};
