uniform float uSize;
uniform float uTime;
varying vec3 vColor;
attribute vec3 aPosition;
attribute vec3 aPosition2;
attribute vec3 aColor;
attribute vec3 aColor2;
varying vec2 vUv;
#define PI 3.14159265358979323846

mat4 rotationX( in float angle ) {
	return mat4(	1.0,		0,			0,			0,
			 		0, 	cos(angle),	-sin(angle),		0,
					0, 	sin(angle),	 cos(angle),		0,
					0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
	return mat4(	cos(angle),		-sin(angle),	0,	0,
			 		sin(angle),		cos(angle),		0,	0,
							0,				0,		1,	0,
							0,				0,		0,	1);
}

void main() {
  float sinTime = sin(uTime * PI * 0.05) * 0.5 + 0.5;
  float cosTime = cos(uTime * PI * 0.05) * 0.5 + 0.5;
  float sinTime2 = sin(uTime * PI * 0.5) * 0.5 + 0.5;
  float cosTime2 = cos(uTime * PI * 0.5) * 0.5 + 0.5;
  float sinTime3 = sin(uTime * PI * 6.0 * aPosition.z) * 0.5 + 0.5;
  vec3 modPosition;
  float flapFactor = 0.75;
  modPosition.x = position.x * sinTime3 * -1.0 * flapFactor + position.x;
  modPosition.y = position.y;
  modPosition.z = abs(position.x) * sinTime3 * flapFactor + position.z;
  mat4 scaleMatrix = mat4(1.0);
  scaleMatrix[0][0] = 0.05;
  scaleMatrix[1][1] = 0.05;
  scaleMatrix[2][2] = 0.05;
  mat4 rotationXMatrix = rotationX(aColor2.x * PI);
  mat4 rotationYMatrix = rotationY(aColor2.y * PI);
  mat4 rotationZMatrix = rotationZ(aColor2.z * PI);
  mat4 translationMatrix = mat4(1.0);
  translationMatrix[3][0] = mix(aPosition.x * 2.0, aPosition2.x * 2.0, sinTime);
  translationMatrix[3][1] = mix(aPosition.y * 2.0, aPosition2.y * 2.0, cosTime);
  translationMatrix[3][2] = -2.0 + mix(aPosition.z * 2.0, aPosition2.z * 2.0, sinTime);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * translationMatrix * rotationZMatrix * rotationYMatrix * rotationXMatrix * scaleMatrix * vec4(modPosition, 1.0);
  vColor = vec3(mix(aColor.x,aColor2.x,sinTime2), mix(aColor.y,aColor2.y,cosTime2), mix(aColor.z,aColor2.z,sinTime2));
}