import { O as Object3D } from "./Object3D.d81adcf4.js";
import { Color } from "./Color.5efc95ab.js";
class Light extends Object3D {
  constructor(color, intensity = 1) {
    super();
    this.type = "Light";
    this.color = new Color(color);
    this.intensity = intensity;
  }
  dispose() {
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.intensity = source.intensity;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.color = this.color.getHex();
    data.object.intensity = this.intensity;
    if (this.groundColor !== void 0)
      data.object.groundColor = this.groundColor.getHex();
    if (this.distance !== void 0)
      data.object.distance = this.distance;
    if (this.angle !== void 0)
      data.object.angle = this.angle;
    if (this.decay !== void 0)
      data.object.decay = this.decay;
    if (this.penumbra !== void 0)
      data.object.penumbra = this.penumbra;
    if (this.shadow !== void 0)
      data.object.shadow = this.shadow.toJSON();
    return data;
  }
}
Light.prototype.isLight = true;
export {
  Light as L
};
