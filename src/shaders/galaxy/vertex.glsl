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

mat3 rotMat(float costheta, vec3 vc) {
  float c = costheta;
  float s = sqrt(1.0-(c*c));
  float C = 1.0-c;
  float x = vc.x;
  float y = vc.y;
  float z = vc.z;
  mat3 outv;
  outv[0][0] = x*x*C+c;
  outv[1][0] = x*y*C-z*s;
  outv[2][0] = x*z*C+y*s;
  outv[1][0] = y*x*C+z*s;
  outv[1][1] = y*y*C+c;
  outv[1][2] = y*z*C-x*s;
  outv[2][0] = z*x*C-y*s;
  outv[2][1] = z*y*C+x*s;
  outv[2][2] = z*z*C+c;
  return outv;
}

void main() {
  float dt = 0.02;
  float sinTime = sin(uTime * PI * (0.04 + aPosition.x * 0.03)) * 0.5 + 0.5;
  float cosTime = cos(uTime * PI * (0.04 + aPosition.y * 0.03)) * 0.5 + 0.5;
  float sinTimeFuture = sin((uTime + dt) * PI * 0.05) * 0.5 + 0.5;
  float cosTimeFuture = cos((uTime + dt) * PI * 0.05) * 0.5 + 0.5;
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
  mat4 translationMatrix = mat4(1.0);
  float xnow = mix(aPosition.x * 2.0, aPosition2.x * 2.0, sinTime);
  float ynow = mix(aPosition.y * 2.0, aPosition2.y * 2.0, cosTime);
  float znow = -2.0 + mix(aPosition.z * 2.0, aPosition2.z * 2.0, sinTime);
  float xFuture = mix(aPosition.x * 2.0, aPosition2.x * 2.0, sinTimeFuture);
  float yFuture = mix(aPosition.y * 2.0, aPosition2.y * 2.0, cosTimeFuture);
  float zFuture = -2.0 + mix(aPosition.z * 2.0, aPosition2.z * 2.0, sinTimeFuture);
  float xVel = (xFuture - xnow) / dt;
  float yVel = (yFuture - ynow) / dt;
  float zVel = (zFuture - znow) / dt;
  vec3 vel = normalize(vec3(xVel, yVel, zVel));
  vec3 M = vec3(0.0, 0.0, 1.0);
  vec3 N = M - (vec3(0.0, 1.0, 0.0) - vel);
  float costheta = dot(M,N)/(length(M)*length(N));
  vec3 crossMN = cross(M, N);
  vec3 axis = crossMN / length(crossMN);
  translationMatrix[3][0] = xnow;
  translationMatrix[3][1] = ynow;
  translationMatrix[3][2] = znow;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * translationMatrix *  scaleMatrix * vec4(rotMat(costheta, crossMN) * modPosition, 1.0);
  vColor = vec3(mix(aColor.x,aColor2.x,sinTime2), mix(aColor.y,aColor2.y,cosTime2), mix(aColor.z,aColor2.z,sinTime2));
}