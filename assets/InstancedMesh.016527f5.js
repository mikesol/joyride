import { InstancedBufferAttribute } from "./InstancedBufferAttribute.aa91042e.js";
import { M as Mesh } from "./Mesh.53231fd1.js";
import { Matrix4 } from "./Matrix4.0c7a2215.js";
import "./BufferAttribute.ad6349b3.js";
import "./Vector4.27798d04.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
import "./Vector2.3964b2c2.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
import "./Sphere.bf80223e.js";
import "./Ray.14000e07.js";
import "./Object3D.d81adcf4.js";
import "./EventDispatcher.62ae53dd.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
import "./Material.3b90100d.js";
import "./BufferGeometry.d5615ad3.js";
import "./utils.4cfc5b76.js";
const _instanceLocalMatrix = /* @__PURE__ */ new Matrix4();
const _instanceWorldMatrix = /* @__PURE__ */ new Matrix4();
const _instanceIntersects = [];
const _mesh = /* @__PURE__ */ new Mesh();
class InstancedMesh extends Mesh {
  constructor(geometry, material, count) {
    super(geometry, material);
    this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(count * 16), 16);
    this.instanceColor = null;
    this.count = count;
    this.frustumCulled = false;
  }
  copy(source) {
    super.copy(source);
    this.instanceMatrix.copy(source.instanceMatrix);
    if (source.instanceColor !== null)
      this.instanceColor = source.instanceColor.clone();
    this.count = source.count;
    return this;
  }
  getColorAt(index, color) {
    color.fromArray(this.instanceColor.array, index * 3);
  }
  getMatrixAt(index, matrix) {
    matrix.fromArray(this.instanceMatrix.array, index * 16);
  }
  raycast(raycaster, intersects) {
    const matrixWorld = this.matrixWorld;
    const raycastTimes = this.count;
    _mesh.geometry = this.geometry;
    _mesh.material = this.material;
    if (_mesh.material === void 0)
      return;
    for (let instanceId = 0; instanceId < raycastTimes; instanceId++) {
      this.getMatrixAt(instanceId, _instanceLocalMatrix);
      _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix);
      _mesh.matrixWorld = _instanceWorldMatrix;
      _mesh.raycast(raycaster, _instanceIntersects);
      for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
        const intersect = _instanceIntersects[i];
        intersect.instanceId = instanceId;
        intersect.object = this;
        intersects.push(intersect);
      }
      _instanceIntersects.length = 0;
    }
  }
  setColorAt(index, color) {
    if (this.instanceColor === null) {
      this.instanceColor = new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3);
    }
    color.toArray(this.instanceColor.array, index * 3);
  }
  setMatrixAt(index, matrix) {
    matrix.toArray(this.instanceMatrix.array, index * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
InstancedMesh.prototype.isInstancedMesh = true;
export {
  InstancedMesh
};
