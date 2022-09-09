import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
import { Float32BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import { Vector2 } from "./Vector2.3964b2c2.js";
import "./Sphere.bf80223e.js";
import "./EventDispatcher.62ae53dd.js";
import "./Object3D.d81adcf4.js";
import "./Matrix4.0c7a2215.js";
import "./MathUtils.9169ae61.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
import "./utils.4cfc5b76.js";
import "./Vector4.27798d04.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
class CylinderGeometry extends BufferGeometry {
  constructor(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    };
    const scope = this;
    radialSegments = Math.floor(radialSegments);
    heightSegments = Math.floor(heightSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let index = 0;
    const indexArray = [];
    const halfHeight = height / 2;
    let groupStart = 0;
    generateTorso();
    if (openEnded === false) {
      if (radiusTop > 0)
        generateCap(true);
      if (radiusBottom > 0)
        generateCap(false);
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function generateTorso() {
      const normal = new Vector3();
      const vertex = new Vector3();
      let groupCount = 0;
      const slope = (radiusBottom - radiusTop) / height;
      for (let y = 0; y <= heightSegments; y++) {
        const indexRow = [];
        const v = y / heightSegments;
        const radius = v * (radiusBottom - radiusTop) + radiusTop;
        for (let x = 0; x <= radialSegments; x++) {
          const u = x / radialSegments;
          const theta = u * thetaLength + thetaStart;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          vertex.x = radius * sinTheta;
          vertex.y = -v * height + halfHeight;
          vertex.z = radius * cosTheta;
          vertices.push(vertex.x, vertex.y, vertex.z);
          normal.set(sinTheta, slope, cosTheta).normalize();
          normals.push(normal.x, normal.y, normal.z);
          uvs.push(u, 1 - v);
          indexRow.push(index++);
        }
        indexArray.push(indexRow);
      }
      for (let x = 0; x < radialSegments; x++) {
        for (let y = 0; y < heightSegments; y++) {
          const a = indexArray[y][x];
          const b = indexArray[y + 1][x];
          const c = indexArray[y + 1][x + 1];
          const d = indexArray[y][x + 1];
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, 0);
      groupStart += groupCount;
    }
    function generateCap(top) {
      const centerIndexStart = index;
      const uv = new Vector2();
      const vertex = new Vector3();
      let groupCount = 0;
      const radius = top === true ? radiusTop : radiusBottom;
      const sign = top === true ? 1 : -1;
      for (let x = 1; x <= radialSegments; x++) {
        vertices.push(0, halfHeight * sign, 0);
        normals.push(0, sign, 0);
        uvs.push(0.5, 0.5);
        index++;
      }
      const centerIndexEnd = index;
      for (let x = 0; x <= radialSegments; x++) {
        const u = x / radialSegments;
        const theta = u * thetaLength + thetaStart;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        vertex.x = radius * sinTheta;
        vertex.y = halfHeight * sign;
        vertex.z = radius * cosTheta;
        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(0, sign, 0);
        uv.x = cosTheta * 0.5 + 0.5;
        uv.y = sinTheta * 0.5 * sign + 0.5;
        uvs.push(uv.x, uv.y);
        index++;
      }
      for (let x = 0; x < radialSegments; x++) {
        const c = centerIndexStart + x;
        const i = centerIndexEnd + x;
        if (top === true) {
          indices.push(i, i + 1, c);
        } else {
          indices.push(i + 1, i, c);
        }
        groupCount += 3;
      }
      scope.addGroup(groupStart, groupCount, top === true ? 1 : 2);
      groupStart += groupCount;
    }
  }
  static fromJSON(data) {
    return new CylinderGeometry(data.radiusTop, data.radiusBottom, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength);
  }
}
export {
  CylinderGeometry as CylinderBufferGeometry,
  CylinderGeometry
};
