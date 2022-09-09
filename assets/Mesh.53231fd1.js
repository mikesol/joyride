import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import { Vector2 } from "./Vector2.3964b2c2.js";
import { S as Sphere } from "./Sphere.bf80223e.js";
import { R as Ray } from "./Ray.14000e07.js";
import { Matrix4 } from "./Matrix4.0c7a2215.js";
import { O as Object3D } from "./Object3D.d81adcf4.js";
import { u as MultiplyOperation, B as BackSide, D as DoubleSide } from "./constants.cc13e4fd.js";
import { M as Material } from "./Material.3b90100d.js";
import { Color } from "./Color.5efc95ab.js";
import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
const _v0 = /* @__PURE__ */ new Vector3();
const _v1 = /* @__PURE__ */ new Vector3();
const _v2 = /* @__PURE__ */ new Vector3();
const _v3 = /* @__PURE__ */ new Vector3();
const _vab = /* @__PURE__ */ new Vector3();
const _vac = /* @__PURE__ */ new Vector3();
const _vbc = /* @__PURE__ */ new Vector3();
const _vap = /* @__PURE__ */ new Vector3();
const _vbp = /* @__PURE__ */ new Vector3();
const _vcp = /* @__PURE__ */ new Vector3();
class Triangle {
  constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  static getNormal(a, b, c, target) {
    target.subVectors(c, b);
    _v0.subVectors(a, b);
    target.cross(_v0);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  static getBarycoord(point, a, b, c, target) {
    _v0.subVectors(c, a);
    _v1.subVectors(b, a);
    _v2.subVectors(point, a);
    const dot00 = _v0.dot(_v0);
    const dot01 = _v0.dot(_v1);
    const dot02 = _v0.dot(_v2);
    const dot11 = _v1.dot(_v1);
    const dot12 = _v1.dot(_v2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      return target.set(-2, -1, -1);
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
  static containsPoint(point, a, b, c) {
    this.getBarycoord(point, a, b, c, _v3);
    return _v3.x >= 0 && _v3.y >= 0 && _v3.x + _v3.y <= 1;
  }
  static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
    this.getBarycoord(point, p1, p2, p3, _v3);
    target.set(0, 0);
    target.addScaledVector(uv1, _v3.x);
    target.addScaledVector(uv2, _v3.y);
    target.addScaledVector(uv3, _v3.z);
    return target;
  }
  static isFrontFacing(a, b, c, direction) {
    _v0.subVectors(c, b);
    _v1.subVectors(a, b);
    return _v0.cross(_v1).dot(direction) < 0 ? true : false;
  }
  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  setFromAttributeAndIndices(attribute, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute, i0);
    this.b.fromBufferAttribute(attribute, i1);
    this.c.fromBufferAttribute(attribute, i2);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  getArea() {
    _v0.subVectors(this.c, this.b);
    _v1.subVectors(this.a, this.b);
    return _v0.cross(_v1).length() * 0.5;
  }
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(target) {
    return Triangle.getNormal(this.a, this.b, this.c, target);
  }
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(point, target) {
    return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  getUV(point, uv1, uv2, uv3, target) {
    return Triangle.getUV(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
  }
  containsPoint(point) {
    return Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  isFrontFacing(direction) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
  }
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  closestPointToPoint(p, target) {
    const a = this.a, b = this.b, c = this.c;
    let v, w;
    _vab.subVectors(b, a);
    _vac.subVectors(c, a);
    _vap.subVectors(p, a);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a);
    }
    _vbp.subVectors(p, b);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v = d1 / (d1 - d3);
      return target.copy(a).addScaledVector(_vab, v);
    }
    _vcp.subVectors(p, c);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w = d2 / (d2 - d6);
      return target.copy(a).addScaledVector(_vac, w);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c, b);
      w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b).addScaledVector(_vbc, w);
    }
    const denom = 1 / (va + vb + vc);
    v = vb * denom;
    w = vc * denom;
    return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
  }
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
}
class MeshBasicMaterial extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshBasicMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.fog = source.fog;
    return this;
  }
}
MeshBasicMaterial.prototype.isMeshBasicMaterial = true;
const _inverseMatrix = /* @__PURE__ */ new Matrix4();
const _ray = /* @__PURE__ */ new Ray();
const _sphere = /* @__PURE__ */ new Sphere();
const _vA = /* @__PURE__ */ new Vector3();
const _vB = /* @__PURE__ */ new Vector3();
const _vC = /* @__PURE__ */ new Vector3();
const _tempA = /* @__PURE__ */ new Vector3();
const _tempB = /* @__PURE__ */ new Vector3();
const _tempC = /* @__PURE__ */ new Vector3();
const _morphA = /* @__PURE__ */ new Vector3();
const _morphB = /* @__PURE__ */ new Vector3();
const _morphC = /* @__PURE__ */ new Vector3();
const _uvA = /* @__PURE__ */ new Vector2();
const _uvB = /* @__PURE__ */ new Vector2();
const _uvC = /* @__PURE__ */ new Vector2();
const _intersectionPoint = /* @__PURE__ */ new Vector3();
const _intersectionPointWorld = /* @__PURE__ */ new Vector3();
class Mesh extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
    super();
    this.type = "Mesh";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source) {
    super.copy(source);
    if (source.morphTargetInfluences !== void 0) {
      this.morphTargetInfluences = source.morphTargetInfluences.slice();
    }
    if (source.morphTargetDictionary !== void 0) {
      this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
    }
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
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
        console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
  raycast(raycaster, intersects) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === void 0)
      return;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere.copy(geometry.boundingSphere);
    _sphere.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(_sphere) === false)
      return;
    _inverseMatrix.copy(matrixWorld).invert();
    _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
    if (geometry.boundingBox !== null) {
      if (_ray.intersectsBox(geometry.boundingBox) === false)
        return;
    }
    let intersection;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const position = geometry.attributes.position;
      const morphPosition = geometry.morphAttributes.position;
      const morphTargetsRelative = geometry.morphTargetsRelative;
      const uv = geometry.attributes.uv;
      const uv2 = geometry.attributes.uv2;
      const groups = geometry.groups;
      const drawRange = geometry.drawRange;
      if (index !== null) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = index.getX(j);
              const b = index.getX(j + 1);
              const c = index.getX(j + 2);
              intersection = checkBufferGeometryIntersection(this, groupMaterial, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(index.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = index.getX(i);
            const b = index.getX(i + 1);
            const c = index.getX(i + 2);
            intersection = checkBufferGeometryIntersection(this, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      } else if (position !== void 0) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = j;
              const b = j + 1;
              const c = j + 2;
              intersection = checkBufferGeometryIntersection(this, groupMaterial, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(position.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = i;
            const b = i + 1;
            const c = i + 2;
            intersection = checkBufferGeometryIntersection(this, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      }
    } else if (geometry.isGeometry) {
      console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
Mesh.prototype.isMesh = true;
function checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
  let intersect;
  if (material.side === BackSide) {
    intersect = ray.intersectTriangle(pC, pB, pA, true, point);
  } else {
    intersect = ray.intersectTriangle(pA, pB, pC, material.side !== DoubleSide, point);
  }
  if (intersect === null)
    return null;
  _intersectionPointWorld.copy(point);
  _intersectionPointWorld.applyMatrix4(object.matrixWorld);
  const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
  if (distance < raycaster.near || distance > raycaster.far)
    return null;
  return {
    distance,
    point: _intersectionPointWorld.clone(),
    object
  };
}
function checkBufferGeometryIntersection(object, material, raycaster, ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c) {
  _vA.fromBufferAttribute(position, a);
  _vB.fromBufferAttribute(position, b);
  _vC.fromBufferAttribute(position, c);
  const morphInfluences = object.morphTargetInfluences;
  if (morphPosition && morphInfluences) {
    _morphA.set(0, 0, 0);
    _morphB.set(0, 0, 0);
    _morphC.set(0, 0, 0);
    for (let i = 0, il = morphPosition.length; i < il; i++) {
      const influence = morphInfluences[i];
      const morphAttribute = morphPosition[i];
      if (influence === 0)
        continue;
      _tempA.fromBufferAttribute(morphAttribute, a);
      _tempB.fromBufferAttribute(morphAttribute, b);
      _tempC.fromBufferAttribute(morphAttribute, c);
      if (morphTargetsRelative) {
        _morphA.addScaledVector(_tempA, influence);
        _morphB.addScaledVector(_tempB, influence);
        _morphC.addScaledVector(_tempC, influence);
      } else {
        _morphA.addScaledVector(_tempA.sub(_vA), influence);
        _morphB.addScaledVector(_tempB.sub(_vB), influence);
        _morphC.addScaledVector(_tempC.sub(_vC), influence);
      }
    }
    _vA.add(_morphA);
    _vB.add(_morphB);
    _vC.add(_morphC);
  }
  if (object.isSkinnedMesh) {
    object.boneTransform(a, _vA);
    object.boneTransform(b, _vB);
    object.boneTransform(c, _vC);
  }
  const intersection = checkIntersection(object, material, raycaster, ray, _vA, _vB, _vC, _intersectionPoint);
  if (intersection) {
    if (uv) {
      _uvA.fromBufferAttribute(uv, a);
      _uvB.fromBufferAttribute(uv, b);
      _uvC.fromBufferAttribute(uv, c);
      intersection.uv = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
    }
    if (uv2) {
      _uvA.fromBufferAttribute(uv2, a);
      _uvB.fromBufferAttribute(uv2, b);
      _uvC.fromBufferAttribute(uv2, c);
      intersection.uv2 = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
    }
    const face = {
      a,
      b,
      c,
      normal: new Vector3(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA, _vB, _vC, face.normal);
    intersection.face = face;
  }
  return intersection;
}
const Mesh$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Mesh
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mesh as M,
  MeshBasicMaterial as a,
  Mesh$1 as b
};
