import { R as Ray } from "./Ray.14000e07.js";
import { L as Layers } from "./Layers.61b05682.js";
import "./Vector3.5db2ef2e.js";
import "./MathUtils.9169ae61.js";
class Raycaster {
  constructor(origin, direction, near = 0, far = Infinity) {
    this.ray = new Ray(origin, direction);
    this.near = near;
    this.far = far;
    this.camera = null;
    this.layers = new Layers();
    this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(origin, direction) {
    this.ray.set(origin, direction);
  }
  setFromCamera(coords, camera) {
    if (camera.isPerspectiveCamera) {
      this.ray.origin.setFromMatrixPosition(camera.matrixWorld);
      this.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(this.ray.origin).normalize();
      this.camera = camera;
    } else if (camera.isOrthographicCamera) {
      this.ray.origin.set(coords.x, coords.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
      this.ray.direction.set(0, 0, -1).transformDirection(camera.matrixWorld);
      this.camera = camera;
    } else {
      console.error("THREE.Raycaster: Unsupported camera type: " + camera.type);
    }
  }
  intersectObject(object, recursive = true, intersects = []) {
    intersectObject(object, this, intersects, recursive);
    intersects.sort(ascSort);
    return intersects;
  }
  intersectObjects(objects, recursive = true, intersects = []) {
    for (let i = 0, l = objects.length; i < l; i++) {
      intersectObject(objects[i], this, intersects, recursive);
    }
    intersects.sort(ascSort);
    return intersects;
  }
}
function ascSort(a, b) {
  return a.distance - b.distance;
}
function intersectObject(object, raycaster, intersects, recursive) {
  if (object.layers.test(raycaster.layers)) {
    object.raycast(raycaster, intersects);
  }
  if (recursive === true) {
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      intersectObject(children[i], raycaster, intersects, true);
    }
  }
}
export {
  Raycaster
};
