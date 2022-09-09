import { S as Sphere } from "./Sphere.bf80223e.js";
import { R as Ray } from "./Ray.14000e07.js";
import { Matrix4 } from "./Matrix4.0c7a2215.js";
import { O as Object3D } from "./Object3D.d81adcf4.js";
import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import { M as Material } from "./Material.3b90100d.js";
import { Color } from "./Color.5efc95ab.js";
import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
import "./MathUtils.9169ae61.js";
import "./EventDispatcher.62ae53dd.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
import "./constants.cc13e4fd.js";
import "./Vector2.3964b2c2.js";
import "./BufferAttribute.ad6349b3.js";
import "./Vector4.27798d04.js";
import "./utils.4cfc5b76.js";
class PointsMaterial extends Material {
  constructor(parameters) {
    super();
    this.type = "PointsMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = true;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.size = source.size;
    this.sizeAttenuation = source.sizeAttenuation;
    this.fog = source.fog;
    return this;
  }
}
PointsMaterial.prototype.isPointsMaterial = true;
const _inverseMatrix = /* @__PURE__ */ new Matrix4();
const _ray = /* @__PURE__ */ new Ray();
const _sphere = /* @__PURE__ */ new Sphere();
const _position = /* @__PURE__ */ new Vector3();
class Points extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new PointsMaterial()) {
    super();
    this.type = "Points";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source) {
    super.copy(source);
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
  }
  raycast(raycaster, intersects) {
    const geometry = this.geometry;
    const matrixWorld = this.matrixWorld;
    const threshold = raycaster.params.Points.threshold;
    const drawRange = geometry.drawRange;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere.copy(geometry.boundingSphere);
    _sphere.applyMatrix4(matrixWorld);
    _sphere.radius += threshold;
    if (raycaster.ray.intersectsSphere(_sphere) === false)
      return;
    _inverseMatrix.copy(matrixWorld).invert();
    _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
    const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    const localThresholdSq = localThreshold * localThreshold;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const attributes = geometry.attributes;
      const positionAttribute = attributes.position;
      if (index !== null) {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i++) {
          const a = index.getX(i);
          _position.fromBufferAttribute(positionAttribute, a);
          testPoint(_position, a, localThresholdSq, matrixWorld, raycaster, intersects, this);
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
        for (let i = start, l = end; i < l; i++) {
          _position.fromBufferAttribute(positionAttribute, i);
          testPoint(_position, i, localThresholdSq, matrixWorld, raycaster, intersects, this);
        }
      }
    } else {
      console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    } else {
      const morphTargets = geometry.morphTargets;
      if (morphTargets !== void 0 && morphTargets.length > 0) {
        console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
}
Points.prototype.isPoints = true;
function testPoint(point, index, localThresholdSq, matrixWorld, raycaster, intersects, object) {
  const rayPointDistanceSq = _ray.distanceSqToPoint(point);
  if (rayPointDistanceSq < localThresholdSq) {
    const intersectPoint = new Vector3();
    _ray.closestPointToPoint(point, intersectPoint);
    intersectPoint.applyMatrix4(matrixWorld);
    const distance = raycaster.ray.origin.distanceTo(intersectPoint);
    if (distance < raycaster.near || distance > raycaster.far)
      return;
    intersects.push({
      distance,
      distanceToRay: Math.sqrt(rayPointDistanceSq),
      point: intersectPoint,
      index,
      face: null,
      object
    });
  }
}
export {
  Points
};
