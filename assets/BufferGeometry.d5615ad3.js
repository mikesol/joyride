import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import { Vector2 } from "./Vector2.3964b2c2.js";
import { B as Box3, S as Sphere } from "./Sphere.bf80223e.js";
import { E as EventDispatcher } from "./EventDispatcher.62ae53dd.js";
import { Uint32BufferAttribute, Uint16BufferAttribute, Float32BufferAttribute, BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import { O as Object3D } from "./Object3D.d81adcf4.js";
import { Matrix4 } from "./Matrix4.0c7a2215.js";
import { M as Matrix3 } from "./Matrix3.254ef6d6.js";
import { g as generateUUID } from "./MathUtils.9169ae61.js";
import { a as arrayNeedsUint32 } from "./utils.4cfc5b76.js";
import "./Vector4.27798d04.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
let _id = 0;
const _m1 = /* @__PURE__ */ new Matrix4();
const _obj = /* @__PURE__ */ new Object3D();
const _offset = /* @__PURE__ */ new Vector3();
const _box = /* @__PURE__ */ new Box3();
const _boxMorphTargets = /* @__PURE__ */ new Box3();
const _vector = /* @__PURE__ */ new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super();
    Object.defineProperty(this, "id", { value: _id++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal = this.attributes.normal;
    if (normal !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal.applyNormalMatrix(normalMatrix);
      normal.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(q) {
    _m1.makeRotationFromQuaternion(q);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateX(angle) {
    _m1.makeRotationX(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateY(angle) {
    _m1.makeRotationY(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateZ(angle) {
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  translate(x, y, z) {
    _m1.makeTranslation(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  scale(x, y, z) {
    _m1.makeScale(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  setFromPoints(points) {
    const position = [];
    for (let i = 0, l = points.length; i < l; i++) {
      const point = points[i];
      position.push(point.x, point.y, point.z || 0);
    }
    this.setAttribute("position", new Float32BufferAttribute(position, 3));
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingBox.set(
        new Vector3(-Infinity, -Infinity, -Infinity),
        new Vector3(Infinity, Infinity, Infinity)
      );
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _box.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector.addVectors(this.boundingBox.min, _box.min);
            this.boundingBox.expandByPoint(_vector);
            _vector.addVectors(this.boundingBox.max, _box.max);
            this.boundingBox.expandByPoint(_vector);
          } else {
            this.boundingBox.expandByPoint(_box.min);
            this.boundingBox.expandByPoint(_box.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingSphere.set(new Vector3(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector.addVectors(_box.min, _boxMorphTargets.min);
            _box.expandByPoint(_vector);
            _vector.addVectors(_box.max, _boxMorphTargets.max);
            _box.expandByPoint(_vector);
          } else {
            _box.expandByPoint(_boxMorphTargets.min);
            _box.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = position.count; i < il; i++) {
        _vector.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
      }
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
            _vector.fromBufferAttribute(morphAttribute, j);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j);
              _vector.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const indices = index.array;
    const positions = attributes.position.array;
    const normals = attributes.normal.array;
    const uvs = attributes.uv.array;
    const nVertices = positions.length / 3;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * nVertices), 4));
    }
    const tangents = this.getAttribute("tangent").array;
    const tan1 = [], tan2 = [];
    for (let i = 0; i < nVertices; i++) {
      tan1[i] = new Vector3();
      tan2[i] = new Vector3();
    }
    const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
    function handleTriangle(a, b, c) {
      vA.fromArray(positions, a * 3);
      vB.fromArray(positions, b * 3);
      vC.fromArray(positions, c * 3);
      uvA.fromArray(uvs, a * 2);
      uvB.fromArray(uvs, b * 2);
      uvC.fromArray(uvs, c * 2);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r))
        return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
      tan1[a].add(sdir);
      tan1[b].add(sdir);
      tan1[c].add(sdir);
      tan2[a].add(tdir);
      tan2[b].add(tdir);
      tan2[c].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: indices.length
      }];
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleTriangle(
          indices[j + 0],
          indices[j + 1],
          indices[j + 2]
        );
      }
    }
    const tmp = new Vector3(), tmp2 = new Vector3();
    const n = new Vector3(), n2 = new Vector3();
    function handleVertex(v) {
      n.fromArray(normals, v * 3);
      n2.copy(n);
      const t = tan1[v];
      tmp.copy(t);
      tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
      tmp2.crossVectors(n2, t);
      const test = tmp2.dot(tan2[v]);
      const w = test < 0 ? -1 : 1;
      tangents[v * 4] = tmp.x;
      tangents[v * 4 + 1] = tmp.y;
      tangents[v * 4 + 2] = tmp.z;
      tangents[v * 4 + 3] = w;
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleVertex(indices[j + 0]);
        handleVertex(indices[j + 1]);
        handleVertex(indices[j + 2]);
      }
    }
  }
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i = 0, il = normalAttribute.count; i < il; i++) {
          normalAttribute.setXYZ(i, 0, 0, 0);
        }
      }
      const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
      const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
      const cb = new Vector3(), ab = new Vector3();
      if (index) {
        for (let i = 0, il = index.count; i < il; i += 3) {
          const vA = index.getX(i + 0);
          const vB = index.getX(i + 1);
          const vC = index.getX(i + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
          pA.fromBufferAttribute(positionAttribute, i + 0);
          pB.fromBufferAttribute(positionAttribute, i + 1);
          pC.fromBufferAttribute(positionAttribute, i + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  merge(geometry, offset) {
    if (!(geometry && geometry.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", geometry);
      return;
    }
    if (offset === void 0) {
      offset = 0;
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      );
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      if (geometry.attributes[key] === void 0)
        continue;
      const attribute1 = attributes[key];
      const attributeArray1 = attribute1.array;
      const attribute2 = geometry.attributes[key];
      const attributeArray2 = attribute2.array;
      const attributeOffset = attribute2.itemSize * offset;
      const length = Math.min(attributeArray2.length, attributeArray1.length - attributeOffset);
      for (let i = 0, j = attributeOffset; i < length; i++, j++) {
        attributeArray1[j] = attributeArray2[i];
      }
    }
    return this;
  }
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i = 0, il = normals.count; i < il; i++) {
      _vector.fromBufferAttribute(normals, i);
      _vector.normalize();
      normals.setXYZ(i, _vector.x, _vector.y, _vector.z);
    }
  }
  toNonIndexed() {
    function convertBufferAttribute(attribute, indices2) {
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      const normalized = attribute.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i = 0, l = indices2.length; i < l; i++) {
        if (attribute.isInterleavedBufferAttribute) {
          index = indices2[i] * attribute.data.stride + attribute.offset;
        } else {
          index = indices2[i] * itemSize;
        }
        for (let j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      const newAttribute = convertBufferAttribute(attribute, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, il = morphAttribute.length; i < il; i++) {
        const attribute = morphAttribute[i];
        const newAttribute = convertBufferAttribute(attribute, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "")
      data.name = this.name;
    if (Object.keys(this.userData).length > 0)
      data.userData = this.userData;
    if (this.parameters !== void 0) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0)
          data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute = attributes[key];
      data.data.attributes[key] = attribute.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i = 0, il = attributeArray.length; i < il; i++) {
        const attribute = attributeArray[i];
        array.push(attribute.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = {
        center: boundingSphere.center.toArray(),
        radius: boundingSphere.radius
      };
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone(data));
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      this.setAttribute(name, attribute.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, l = morphAttribute.length; i < l; i++) {
        array.push(morphAttribute[i].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    if (source.parameters !== void 0)
      this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
BufferGeometry.prototype.isBufferGeometry = true;
export {
  BufferGeometry
};
