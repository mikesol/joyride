import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
import { Float32BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
import "./Vector2.3964b2c2.js";
import "./Sphere.bf80223e.js";
import "./EventDispatcher.62ae53dd.js";
import "./Object3D.d81adcf4.js";
import "./Matrix4.0c7a2215.js";
import "./Euler.d28ed76f.js";
import "./Layers.61b05682.js";
import "./Matrix3.254ef6d6.js";
import "./utils.4cfc5b76.js";
import "./Vector4.27798d04.js";
import "./Color.5efc95ab.js";
import "./constants.cc13e4fd.js";
class PlaneGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width,
      height,
      widthSegments,
      heightSegments
    };
    const width_half = width / 2;
    const height_half = height / 2;
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const segment_width = width / gridX;
    const segment_height = height / gridY;
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segment_height - height_half;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segment_width - width_half;
        vertices.push(x, -y, 0);
        normals.push(0, 0, 1);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  static fromJSON(data) {
    return new PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
  }
}
export {
  PlaneGeometry as PlaneBufferGeometry,
  PlaneGeometry
};
