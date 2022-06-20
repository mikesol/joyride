uniform float uSize;
uniform float uTime;
varying vec3 vColor;
attribute float aScale;
attribute vec3 position2;
#define PI 3.1416
void main() {
  float sinTime = sin(uTime * PI * 0.05) * 0.5 + 0.5;
  float cosTime = cos(uTime * PI * 0.05) * 0.5 + 0.5;
  vec4 newPos = vec4(mix(position.x,position2.x,sinTime), mix(position.y,position2.y,cosTime), mix(position.z,position2.z,sinTime), 1.0);
  vec4 modelPosition = newPos;
  // float angle = atan(modelPosition.x, modelPosition.z);
  // float distanceToCenter = length(modelPosition.xz);
  // float angleOffset = (1.0 / distanceToCenter) * uTime * 0.1;
  // angle += angleOffset;
  // modelPosition.x = cos(angle) * distanceToCenter;
  // modelPosition.z = sin(angle) * distanceToCenter;
  vec4 viewPosition = viewMatrix * modelMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
  vColor = color;
  gl_PointSize = uSize * aScale;
  gl_PointSize *= ( 1.0 / - viewPosition.z );
}