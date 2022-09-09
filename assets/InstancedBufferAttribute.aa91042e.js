import { BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import "./Vector4.27798d04.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
import "./Vector2.3964b2c2.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
class InstancedBufferAttribute extends BufferAttribute {
  constructor(array, itemSize, normalized, meshPerAttribute = 1) {
    if (typeof normalized === "number") {
      meshPerAttribute = normalized;
      normalized = false;
      console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.");
    }
    super(array, itemSize, normalized);
    this.meshPerAttribute = meshPerAttribute;
  }
  copy(source) {
    super.copy(source);
    this.meshPerAttribute = source.meshPerAttribute;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.meshPerAttribute = this.meshPerAttribute;
    data.isInstancedBufferAttribute = true;
    return data;
  }
}
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = true;
export {
  InstancedBufferAttribute
};
