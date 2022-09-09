import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
import { Float32BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import "./Vector2.3964b2c2.js";
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
class BoxGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u, v, w, udir, vdir, width2, height2, depth2, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth2 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector3();
      for (let iy = 0; iy < gridY1; iy++) {
        const y = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x = ix * segmentWidth - widthHalf;
          vector[u] = x * udir;
          vector[v] = y * vdir;
          vector[w] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u] = 0;
          vector[v] = 0;
          vector[w] = depth2 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  static fromJSON(data) {
    return new BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
}
export {
  BoxGeometry as BoxBufferGeometry,
  BoxGeometry
};
