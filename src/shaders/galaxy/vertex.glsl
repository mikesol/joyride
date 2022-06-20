uniform float uSize;
uniform float uTime;
varying vec3 vColor;
attribute vec3 aPosition;
attribute vec3 aPosition2;
attribute vec3 aColor;
attribute vec3 aColor2;
varying vec2 vUv;
#define PI 3.1416
void main() {
  float sinTime = sin(uTime * PI * 0.05) * 0.5 + 0.5;
  float cosTime = cos(uTime * PI * 0.05) * 0.5 + 0.5;
  float sinTime2 = sin(uTime * PI * 0.5) * 0.5 + 0.5;
  float cosTime2 = cos(uTime * PI * 0.5) * 0.5 + 0.5;
  mat4 modInstanceMatrix = mat4(instanceMatrix);
  vec3 modPosition;
  modPosition.x = position.x;
  modPosition.y = position.y;
  modPosition.z = position.z - 2.0;
  modInstanceMatrix[0][0] = 0.05;
  modInstanceMatrix[1][1] = 0.05;
  modInstanceMatrix[2][2] = 0.05;
  modInstanceMatrix[3][3] = 1.0;
  modInstanceMatrix[3][0] += mix(aPosition.x * 2.0 - 1.0, aPosition2.x * 2.0 - 1.0, sinTime);
  modInstanceMatrix[3][1] += mix(aPosition.y * 2.0 - 1.0, aPosition2.y * 2.0 - 1.0, cosTime) + 2.0;
  modInstanceMatrix[3][2] += mix(aPosition.z * 2.0 - 1.0, aPosition2.z * 2.0 - 1.0, sinTime);
  vUv = uv;
  vec4 instanced = modInstanceMatrix * vec4(modPosition, 1.0);
  gl_Position = projectionMatrix * viewMatrix * instanced;
  vColor = vec3(mix(aColor.x,aColor2.x,sinTime2), mix(aColor.y,aColor2.y,cosTime2), mix(aColor.z,aColor2.z,sinTime2));
}