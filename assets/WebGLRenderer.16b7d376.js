import{g as $t,B as at,F as vi,L as Ze,N as lt,h as ut,a as Ei,E as di,i as ui,f as Ht,j as Dt,H as Vt,R as rt,b as Pt,k as Xe,C as _t,l as vt,G as bi,m as $n,A as Jn,n as Qn,o as er,p as tr,P as An,q as ir,V as Gt,s as Ie,r as nr,t as rr,u as ar,O as or,T as sr,v as Yt,D as Wt,w as lr,x as cr,y as Ai,z as Ot,I as fr,J as dr,Z as ur,K as pr,Q as hr,W as mr,X as _r,Y as gr,_ as vr,$ as Er,a0 as Sr,a1 as xr,a2 as Mr,a3 as Tr,a4 as Ri,a5 as Li,a6 as wi,a7 as br,a8 as Ci,a9 as Ar,aa as Di,ab as Pi,ac as Rr,ad as Lr,ae as wr,af as Cr,ag as Dr,ah as Pr,ai as yr,d as Ir,M as Ur,aj as yi,ak as Ii,al as Nr,am as Zt,an as Ct,ao as Et,ap as zt,aq as yt,ar as pi,U as It,as as Fr,at as Or,au as Gr,av as Br,aw as Hr,ax as Vr,ay as Wr,az as zr,aA as kr,aB as Xr,aC as qr,aD as Kr,aE as Yr,aF as Zr,aG as ii,aH as ni,aI as ri,aJ as ai,aK as Ui,aL as Ni,aM as Fi,aN as Oi,aO as jr,aP as Gi,aQ as Bi,aR as Hi,aS as Vi,aT as Wi,aU as zi,aV as ki,aW as Xi,aX as qi,aY as Ki,aZ as Yi,a_ as Zi,a$ as ji,b0 as $i,b1 as Ji,b2 as Qi,b3 as en,b4 as $r}from"./constants.cc13e4fd.js";import{i as tn,f as hi}from"./MathUtils.9169ae61.js";import{P as Jr,F as Rn}from"./Frustum.21d548b8.js";import{Matrix4 as mi}from"./Matrix4.0c7a2215.js";import{Vector2 as Ye}from"./Vector2.3964b2c2.js";import{V as Me}from"./Vector3.5db2ef2e.js";import{V as qe}from"./Vector4.27798d04.js";import{BoxGeometry as Si}from"./BoxGeometry.d73cb17e.js";import{PlaneGeometry as Qr}from"./PlaneGeometry.94665e38.js";import{m as Ve,S as St,c as _i,U as ea}from"./ShaderMaterial.01a0feab.js";import{Color as Ne}from"./Color.5efc95ab.js";import{M as dt,a as ta}from"./Mesh.53231fd1.js";import{M as Lt}from"./Matrix3.254ef6d6.js";import{E as Ln}from"./EventDispatcher.62ae53dd.js";import{T as kt,S as ia,I as na}from"./Texture.fb44cc87.js";import{O as ra}from"./Object3D.d81adcf4.js";import{P as it,C as aa}from"./PerspectiveCamera.3def8065.js";import{C as wn}from"./CubeTexture.575c92d6.js";import{BufferAttribute as jt,Uint32BufferAttribute as oa,Uint16BufferAttribute as sa}from"./BufferAttribute.ad6349b3.js";import{BufferGeometry as Cn}from"./BufferGeometry.d5615ad3.js";import{a as la,c as Dn}from"./utils.4cfc5b76.js";import{L as ca}from"./Layers.61b05682.js";import{M as Pn}from"./Material.3b90100d.js";import{Group as qt}from"./Group.157021da.js";import"./Sphere.bf80223e.js";import"./Ray.14000e07.js";import"./Euler.d28ed76f.js";function yn(){let e=null,i=!1,t=null,n=null;function r(s,p){t(s,p),n=e.requestAnimationFrame(r)}return{start:function(){i!==!0&&t!==null&&(n=e.requestAnimationFrame(r),i=!0)},stop:function(){e.cancelAnimationFrame(n),i=!1},setAnimationLoop:function(s){t=s},setContext:function(s){e=s}}}function fa(e,i){const t=i.isWebGL2,n=new WeakMap;function r(h,E){const g=h.array,_=h.usage,w=e.createBuffer();e.bindBuffer(E,w),e.bufferData(E,g,_),h.onUploadCallback();let D;if(g instanceof Float32Array)D=e.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)D=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else D=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)D=e.SHORT;else if(g instanceof Uint32Array)D=e.UNSIGNED_INT;else if(g instanceof Int32Array)D=e.INT;else if(g instanceof Int8Array)D=e.BYTE;else if(g instanceof Uint8Array)D=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)D=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:w,type:D,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function s(h,E,g){const _=E.array,w=E.updateRange;e.bindBuffer(g,h),w.count===-1?e.bufferSubData(g,0,_):(t?e.bufferSubData(g,w.offset*_.BYTES_PER_ELEMENT,_,w.offset,w.count):e.bufferSubData(g,w.offset*_.BYTES_PER_ELEMENT,_.subarray(w.offset,w.offset+w.count)),w.count=-1)}function p(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const E=n.get(h);E&&(e.deleteBuffer(E.buffer),n.delete(h))}function x(h,E){if(h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);g===void 0?n.set(h,r(h,E)):g.version<h.version&&(s(g.buffer,h,E),g.version=h.version)}return{get:p,remove:o,update:x}}const da=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,ua=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,pa=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,ha=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,ma=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,_a=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,ga=`
vec3 transformed = vec3( position );
`,va=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Ea=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,Sa=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,xa=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Ma=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Ta=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,ba=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Aa=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Ra=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,La=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,wa=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Ca=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Da=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Pa=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,ya=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Ia=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Ua=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Na=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Fa=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Oa=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Ga=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Ba=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Ha=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Va=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Wa=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,za=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,ka=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Xa=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,qa=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Ka=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,Ya=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,Za=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,ja=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,$a=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Ja=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,Qa=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,eo=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,to=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,io=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,no=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,ro=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );


	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,ao=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,oo=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,so=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,lo=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,co=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,fo=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,uo=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,po=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,ho=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,mo=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,_o=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,go=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,vo=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Eo=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,So=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,xo=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,Mo=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,To=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,bo=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Ao=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ro=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Lo=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,wo=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Co=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Do=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Po=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,yo=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Io=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Uo=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,No=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Fo=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Oo=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Go=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Bo=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Ho=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Vo=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Wo=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,zo=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,ko=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Xo=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,qo=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Ko=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,Yo=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Zo=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,jo=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,$o=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,Jo=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,Qo=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,es=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,ts=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,is=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,ns=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,rs=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,as=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,os=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,ss=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,ls=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );

	#endif

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,cs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,fs=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,ds=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,us=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,ps=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,hs=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,ms=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,_s=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,gs=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,vs=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Es=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Ss=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,xs=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,Ms=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,Ts=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,bs=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,As=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Rs=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Ls=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ws=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Cs=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Ds=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ps=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ys=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Is=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Us=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Ns=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Fs=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Os=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Gs=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,xe={alphamap_fragment:da,alphamap_pars_fragment:ua,alphatest_fragment:pa,alphatest_pars_fragment:ha,aomap_fragment:ma,aomap_pars_fragment:_a,begin_vertex:ga,beginnormal_vertex:va,bsdfs:Ea,bumpmap_pars_fragment:Sa,clipping_planes_fragment:xa,clipping_planes_pars_fragment:Ma,clipping_planes_pars_vertex:Ta,clipping_planes_vertex:ba,color_fragment:Aa,color_pars_fragment:Ra,color_pars_vertex:La,color_vertex:wa,common:Ca,cube_uv_reflection_fragment:Da,defaultnormal_vertex:Pa,displacementmap_pars_vertex:ya,displacementmap_vertex:Ia,emissivemap_fragment:Ua,emissivemap_pars_fragment:Na,encodings_fragment:Fa,encodings_pars_fragment:Oa,envmap_fragment:Ga,envmap_common_pars_fragment:Ba,envmap_pars_fragment:Ha,envmap_pars_vertex:Va,envmap_physical_pars_fragment:Ja,envmap_vertex:Wa,fog_vertex:za,fog_pars_vertex:ka,fog_fragment:Xa,fog_pars_fragment:qa,gradientmap_pars_fragment:Ka,lightmap_fragment:Ya,lightmap_pars_fragment:Za,lights_lambert_vertex:ja,lights_pars_begin:$a,lights_toon_fragment:Qa,lights_toon_pars_fragment:eo,lights_phong_fragment:to,lights_phong_pars_fragment:io,lights_physical_fragment:no,lights_physical_pars_fragment:ro,lights_fragment_begin:ao,lights_fragment_maps:oo,lights_fragment_end:so,logdepthbuf_fragment:lo,logdepthbuf_pars_fragment:co,logdepthbuf_pars_vertex:fo,logdepthbuf_vertex:uo,map_fragment:po,map_pars_fragment:ho,map_particle_fragment:mo,map_particle_pars_fragment:_o,metalnessmap_fragment:go,metalnessmap_pars_fragment:vo,morphcolor_vertex:Eo,morphnormal_vertex:So,morphtarget_pars_vertex:xo,morphtarget_vertex:Mo,normal_fragment_begin:To,normal_fragment_maps:bo,normal_pars_fragment:Ao,normal_pars_vertex:Ro,normal_vertex:Lo,normalmap_pars_fragment:wo,clearcoat_normal_fragment_begin:Co,clearcoat_normal_fragment_maps:Do,clearcoat_pars_fragment:Po,output_fragment:yo,packing:Io,premultiplied_alpha_fragment:Uo,project_vertex:No,dithering_fragment:Fo,dithering_pars_fragment:Oo,roughnessmap_fragment:Go,roughnessmap_pars_fragment:Bo,shadowmap_pars_fragment:Ho,shadowmap_pars_vertex:Vo,shadowmap_vertex:Wo,shadowmask_pars_fragment:zo,skinbase_vertex:ko,skinning_pars_vertex:Xo,skinning_vertex:qo,skinnormal_vertex:Ko,specularmap_fragment:Yo,specularmap_pars_fragment:Zo,tonemapping_fragment:jo,tonemapping_pars_fragment:$o,transmission_fragment:Jo,transmission_pars_fragment:Qo,uv_pars_fragment:es,uv_pars_vertex:ts,uv_vertex:is,uv2_pars_fragment:ns,uv2_pars_vertex:rs,uv2_vertex:as,worldpos_vertex:os,background_vert:ss,background_frag:ls,cube_vert:cs,cube_frag:fs,depth_vert:ds,depth_frag:us,distanceRGBA_vert:ps,distanceRGBA_frag:hs,equirect_vert:ms,equirect_frag:_s,linedashed_vert:gs,linedashed_frag:vs,meshbasic_vert:Es,meshbasic_frag:Ss,meshlambert_vert:xs,meshlambert_frag:Ms,meshmatcap_vert:Ts,meshmatcap_frag:bs,meshnormal_vert:As,meshnormal_frag:Rs,meshphong_vert:Ls,meshphong_frag:ws,meshphysical_vert:Cs,meshphysical_frag:Ds,meshtoon_vert:Ps,meshtoon_frag:ys,points_vert:Is,points_frag:Us,shadow_vert:Ns,shadow_frag:Fs,sprite_vert:Os,sprite_frag:Gs},j={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},nt={basic:{uniforms:Ve([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Ve([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.fog,j.lights,{emissive:{value:new Ne(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Ve([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.fog,j.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Ve([j.common,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.roughnessmap,j.metalnessmap,j.fog,j.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Ve([j.common,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.gradientmap,j.fog,j.lights,{emissive:{value:new Ne(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Ve([j.common,j.bumpmap,j.normalmap,j.displacementmap,j.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Ve([j.points,j.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Ve([j.common,j.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Ve([j.common,j.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Ve([j.common,j.bumpmap,j.normalmap,j.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Ve([j.sprite,j.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},cube:{uniforms:Ve([j.envmap,{opacity:{value:1}}]),vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Ve([j.common,j.displacementmap,{referencePosition:{value:new Me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Ve([j.lights,j.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};nt.physical={uniforms:Ve([nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};function Bs(e,i,t,n,r,s){const p=new Ne(0);let o=r===!0?0:1,x,h,E=null,g=0,_=null;function w(c,a){let T=!1,A=a.isScene===!0?a.background:null;A&&A.isTexture&&(A=i.get(A));const N=e.xr,v=N.getSession&&N.getSession();v&&v.environmentBlendMode==="additive"&&(A=null),A===null?D(p,o):A&&A.isColor&&(D(A,1),T=!0),(e.autoClear||T)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),A&&(A.isCubeTexture||A.mapping===$t)?(h===void 0&&(h=new dt(new Si(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:_i(nt.cube.uniforms),vertexShader:nt.cube.vertexShader,fragmentShader:nt.cube.fragmentShader,side:at,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,y,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(E!==A||g!==A.version||_!==e.toneMapping)&&(h.material.needsUpdate=!0,E=A,g=A.version,_=e.toneMapping),h.layers.enableAll(),c.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(x===void 0&&(x=new dt(new Qr(2,2),new St({name:"BackgroundMaterial",uniforms:_i(nt.background.uniforms),vertexShader:nt.background.vertexShader,fragmentShader:nt.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(x)),x.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),x.material.uniforms.uvTransform.value.copy(A.matrix),(E!==A||g!==A.version||_!==e.toneMapping)&&(x.material.needsUpdate=!0,E=A,g=A.version,_=e.toneMapping),x.layers.enableAll(),c.unshift(x,x.geometry,x.material,0,0,null))}function D(c,a){t.buffers.color.setClear(c.r,c.g,c.b,a,s)}return{getClearColor:function(){return p},setClearColor:function(c,a=1){p.set(c),o=a,D(p,o)},getClearAlpha:function(){return o},setClearAlpha:function(c){o=c,D(p,o)},render:w}}function Hs(e,i,t,n){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:i.get("OES_vertex_array_object"),p=n.isWebGL2||s!==null,o={},x=a(null);let h=x,E=!1;function g(L,K,F,V,W){let B=!1;if(p){const H=c(V,F,K);h!==H&&(h=H,w(h.object)),B=T(L,V,F,W),B&&A(L,V,F,W)}else{const H=K.wireframe===!0;(h.geometry!==V.id||h.program!==F.id||h.wireframe!==H)&&(h.geometry=V.id,h.program=F.id,h.wireframe=H,B=!0)}W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(B||E)&&(E=!1,u(L,K,F,V),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function _(){return n.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function w(L){return n.isWebGL2?e.bindVertexArray(L):s.bindVertexArrayOES(L)}function D(L){return n.isWebGL2?e.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function c(L,K,F){const V=F.wireframe===!0;let W=o[L.id];W===void 0&&(W={},o[L.id]=W);let B=W[K.id];B===void 0&&(B={},W[K.id]=B);let H=B[V];return H===void 0&&(H=a(_()),B[V]=H),H}function a(L){const K=[],F=[],V=[];for(let W=0;W<r;W++)K[W]=0,F[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:F,attributeDivisors:V,object:L,attributes:{},index:null}}function T(L,K,F,V){const W=h.attributes,B=K.attributes;let H=0;const ne=F.getAttributes();for(const k in ne)if(ne[k].location>=0){const oe=W[k];let le=B[k];if(le===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;H++}return h.attributesNum!==H||h.index!==V}function A(L,K,F,V){const W={},B=K.attributes;let H=0;const ne=F.getAttributes();for(const k in ne)if(ne[k].location>=0){let oe=B[k];oe===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),W[k]=le,H++}h.attributes=W,h.attributesNum=H,h.index=V}function N(){const L=h.newAttributes;for(let K=0,F=L.length;K<F;K++)L[K]=0}function v(L){P(L,0)}function P(L,K){const F=h.newAttributes,V=h.enabledAttributes,W=h.attributeDivisors;F[L]=1,V[L]===0&&(e.enableVertexAttribArray(L),V[L]=1),W[L]!==K&&((n.isWebGL2?e:i.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,K),W[L]=K)}function y(){const L=h.newAttributes,K=h.enabledAttributes;for(let F=0,V=K.length;F<V;F++)K[F]!==L[F]&&(e.disableVertexAttribArray(F),K[F]=0)}function X(L,K,F,V,W,B){n.isWebGL2===!0&&(F===e.INT||F===e.UNSIGNED_INT)?e.vertexAttribIPointer(L,K,F,W,B):e.vertexAttribPointer(L,K,F,V,W,B)}function u(L,K,F,V){if(n.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&i.get("ANGLE_instanced_arrays")===null)return;N();const W=V.attributes,B=F.getAttributes(),H=K.defaultAttributeValues;for(const ne in B){const k=B[ne];if(k.location>=0){let ee=W[ne];if(ee===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const oe=ee.normalized,le=ee.itemSize,M=t.get(ee);if(M===void 0)continue;const Fe=M.buffer,_e=M.type,Ee=M.bytesPerElement;if(ee.isInterleavedBufferAttribute){const Q=ee.data,ye=Q.stride,Te=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let he=0;he<k.locationSize;he++)P(k.location+he,Q.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<k.locationSize;he++)v(k.location+he);e.bindBuffer(e.ARRAY_BUFFER,Fe);for(let he=0;he<k.locationSize;he++)X(k.location+he,le/k.locationSize,_e,oe,ye*Ee,(Te+le/k.locationSize*he)*Ee)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)P(k.location+Q,ee.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<k.locationSize;Q++)v(k.location+Q);e.bindBuffer(e.ARRAY_BUFFER,Fe);for(let Q=0;Q<k.locationSize;Q++)X(k.location+Q,le/k.locationSize,_e,oe,le*Ee,le/k.locationSize*Q*Ee)}}else if(H!==void 0){const oe=H[ne];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(k.location,oe);break;case 3:e.vertexAttrib3fv(k.location,oe);break;case 4:e.vertexAttrib4fv(k.location,oe);break;default:e.vertexAttrib1fv(k.location,oe)}}}}y()}function S(){ae();for(const L in o){const K=o[L];for(const F in K){const V=K[F];for(const W in V)D(V[W].object),delete V[W];delete K[F]}delete o[L]}}function q(L){if(o[L.id]===void 0)return;const K=o[L.id];for(const F in K){const V=K[F];for(const W in V)D(V[W].object),delete V[W];delete K[F]}delete o[L.id]}function G(L){for(const K in o){const F=o[K];if(F[L.id]===void 0)continue;const V=F[L.id];for(const W in V)D(V[W].object),delete V[W];delete F[L.id]}}function ae(){se(),E=!0,h!==x&&(h=x,w(h.object))}function se(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:g,reset:ae,resetDefaultState:se,dispose:S,releaseStatesOfGeometry:q,releaseStatesOfProgram:G,initAttributes:N,enableAttribute:v,disableUnusedAttributes:y}}function Vs(e,i,t,n){const r=n.isWebGL2;let s;function p(h){s=h}function o(h,E){e.drawArrays(s,h,E),t.update(E,s,1)}function x(h,E,g){if(g===0)return;let _,w;if(r)_=e,w="drawArraysInstanced";else if(_=i.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[w](s,h,E,g),t.update(E,s,g)}this.setMode=p,this.render=o,this.renderInstances=x}function Ws(e,i,t){let n;function r(){if(n!==void 0)return n;if(i.has("EXT_texture_filter_anisotropic")===!0){const X=i.get("EXT_texture_filter_anisotropic");n=e.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(X){if(X==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const p=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const x=s(o);x!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",x,"instead."),o=x);const h=p||i.has("WEBGL_draw_buffers"),E=t.logarithmicDepthBuffer===!0,g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),D=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),A=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,v=p||i.has("OES_texture_float"),P=N&&v,y=p?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:p,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:E,maxTextures:g,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:D,maxAttributes:c,maxVertexUniforms:a,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:N,floatFragmentTextures:v,floatVertexTextures:P,maxSamples:y}}function zs(e){const i=this;let t=null,n=0,r=!1,s=!1;const p=new Jr,o=new Lt,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_,w){const D=g.length!==0||_||n!==0||r;return r=_,t=E(g,w,0),n=g.length,D},this.beginShadows=function(){s=!0,E(null)},this.endShadows=function(){s=!1,h()},this.setState=function(g,_,w){const D=g.clippingPlanes,c=g.clipIntersection,a=g.clipShadows,T=e.get(g);if(!r||D===null||D.length===0||s&&!a)s?E(null):h();else{const A=s?0:n,N=A*4;let v=T.clippingState||null;x.value=v,v=E(D,_,N,w);for(let P=0;P!==N;++P)v[P]=t[P];T.clippingState=v,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=A}};function h(){x.value!==t&&(x.value=t,x.needsUpdate=n>0),i.numPlanes=n,i.numIntersection=0}function E(g,_,w,D){const c=g!==null?g.length:0;let a=null;if(c!==0){if(a=x.value,D!==!0||a===null){const T=w+c*4,A=_.matrixWorldInverse;o.getNormalMatrix(A),(a===null||a.length<T)&&(a=new Float32Array(T));for(let N=0,v=w;N!==c;++N,v+=4)p.copy(g[N]).applyMatrix4(A,o),p.normal.toArray(a,v),a[v+3]=p.constant}x.value=a,x.needsUpdate=!0}return i.numPlanes=c,i.numIntersection=0,a}}class ct extends Ln{constructor(i,t,n={}){super(),this.width=i,this.height=t,this.depth=1,this.scissor=new qe(0,0,i,t),this.scissorTest=!1,this.viewport=new qe(0,0,i,t);const r={width:i,height:t,depth:1};this.texture=new kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(i,t,n=1){(this.width!==i||this.height!==t||this.depth!==n)&&(this.width=i,this.height=t,this.depth=n,this.texture.image.width=i,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,i,t),this.scissor.set(0,0,i,t)}clone(){return new this.constructor().copy(this)}copy(i){this.width=i.width,this.height=i.height,this.depth=i.depth,this.viewport.copy(i.viewport),this.texture=i.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},i.texture.image);return this.texture.source=new ia(t),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,i.depthTexture!==null&&(this.depthTexture=i.depthTexture.clone()),this.samples=i.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}ct.prototype.isWebGLRenderTarget=!0;const bt=90,At=1;class ks extends ra{constructor(i,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new it(bt,At,i,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new Me(1,0,0)),this.add(r);const s=new it(bt,At,i,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new Me(-1,0,0)),this.add(s);const p=new it(bt,At,i,t);p.layers=this.layers,p.up.set(0,0,1),p.lookAt(new Me(0,1,0)),this.add(p);const o=new it(bt,At,i,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new Me(0,-1,0)),this.add(o);const x=new it(bt,At,i,t);x.layers=this.layers,x.up.set(0,-1,0),x.lookAt(new Me(0,0,1)),this.add(x);const h=new it(bt,At,i,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new Me(0,0,-1)),this.add(h)}update(i,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,p,o,x,h]=this.children,E=i.getRenderTarget(),g=i.toneMapping,_=i.xr.enabled;i.toneMapping=lt,i.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,i.setRenderTarget(n,0),i.render(t,r),i.setRenderTarget(n,1),i.render(t,s),i.setRenderTarget(n,2),i.render(t,p),i.setRenderTarget(n,3),i.render(t,o),i.setRenderTarget(n,4),i.render(t,x),n.texture.generateMipmaps=w,i.setRenderTarget(n,5),i.render(t,h),i.setRenderTarget(E),i.toneMapping=g,i.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class In extends ct{constructor(i,t={}){super(i,i,t);const n={width:i,height:i,depth:1},r=[n,n,n,n,n,n];this.texture=new wn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ze}fromEquirectangularTexture(i,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:at,blending:ut});s.uniforms.tEquirect.value=t;const p=new dt(r,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Ze),new ks(1,10,this).update(i,p),t.minFilter=o,p.geometry.dispose(),p.material.dispose(),this}clear(i,t,n,r){const s=i.getRenderTarget();for(let p=0;p<6;p++)i.setRenderTarget(this,p),i.clear(t,n,r);i.setRenderTarget(s)}}In.prototype.isWebGLCubeRenderTarget=!0;function Xs(e){let i=new WeakMap;function t(p,o){return o===di?p.mapping=Ht:o===ui&&(p.mapping=Dt),p}function n(p){if(p&&p.isTexture&&p.isRenderTargetTexture===!1){const o=p.mapping;if(o===di||o===ui)if(i.has(p)){const x=i.get(p).texture;return t(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const h=new In(x.height/2);return h.fromEquirectangularTexture(e,p),i.set(p,h),p.addEventListener("dispose",r),t(h.texture,p.mapping)}else return null}}return p}function r(p){const o=p.target;o.removeEventListener("dispose",r);const x=i.get(o);x!==void 0&&(i.delete(o),x.dispose())}function s(){i=new WeakMap}return{get:n,dispose:s}}class Un extends aa{constructor(i=-1,t=1,n=1,r=-1,s=.1,p=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=i,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=p,this.updateProjectionMatrix()}copy(i,t){return super.copy(i,t),this.left=i.left,this.right=i.right,this.top=i.top,this.bottom=i.bottom,this.near=i.near,this.far=i.far,this.zoom=i.zoom,this.view=i.view===null?null:Object.assign({},i.view),this}setViewOffset(i,t,n,r,s,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-i,p=n+i,o=r+t,x=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,E=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,p=s+h*this.view.width,o-=E*this.view.offsetY,x=o-E*this.view.height}this.projectionMatrix.makeOrthographic(s,p,o,x,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(i){const t=super.toJSON(i);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Un.prototype.isOrthographicCamera=!0;const wt=4,nn=[.125,.215,.35,.446,.526,.582],gt=20,oi=new Un,rn=new Ne;let si=null;const mt=(1+Math.sqrt(5))/2,Rt=1/mt,an=[new Me(1,1,1),new Me(-1,1,1),new Me(1,1,-1),new Me(-1,1,-1),new Me(0,mt,Rt),new Me(0,mt,-Rt),new Me(Rt,0,mt),new Me(-Rt,0,mt),new Me(mt,Rt,0),new Me(-mt,Rt,0)];class on{constructor(i){this._renderer=i,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(i,t=0,n=.1,r=100){si=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(i,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(i,t=null){return this._fromTexture(i,t)}fromCubemap(i,t=null){return this._fromTexture(i,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ln(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(i){this._lodMax=Math.floor(Math.log2(i)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let i=0;i<this._lodPlanes.length;i++)this._lodPlanes[i].dispose()}_cleanup(i){this._renderer.setRenderTarget(si),i.scissorTest=!1,Kt(i,0,0,i.width,i.height)}_fromTexture(i,t){i.mapping===Ht||i.mapping===Dt?this._setSize(i.image.length===0?16:i.image[0].width||i.image[0].image.width):this._setSize(i.image.width/4),si=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(i,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const i=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Vt,format:rt,encoding:Pt,depthBuffer:!1},r=sn(i,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sn(i,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qs(s)),this._blurMaterial=Ks(s,i,t)}return r}_compileMaterial(i){const t=new dt(this._lodPlanes[0],i);this._renderer.compile(t,oi)}_sceneToCubeUV(i,t,n,r){const o=new it(90,1,t,n),x=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],E=this._renderer,g=E.autoClear,_=E.toneMapping;E.getClearColor(rn),E.toneMapping=lt,E.autoClear=!1;const w=new ta({name:"PMREM.Background",side:at,depthWrite:!1,depthTest:!1}),D=new dt(new Si,w);let c=!1;const a=i.background;a?a.isColor&&(w.color.copy(a),i.background=null,c=!0):(w.color.copy(rn),c=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(o.up.set(0,x[T],0),o.lookAt(h[T],0,0)):A===1?(o.up.set(0,0,x[T]),o.lookAt(0,h[T],0)):(o.up.set(0,x[T],0),o.lookAt(0,0,h[T]));const N=this._cubeSize;Kt(r,A*N,T>2?N:0,N,N),E.setRenderTarget(r),c&&E.render(D,o),E.render(i,o)}D.geometry.dispose(),D.material.dispose(),E.toneMapping=_,E.autoClear=g,i.background=a}_textureToCubeUV(i,t){const n=this._renderer,r=i.mapping===Ht||i.mapping===Dt;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cn()),this._cubemapMaterial.uniforms.flipEnvMap.value=i.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ln());const s=r?this._cubemapMaterial:this._equirectMaterial,p=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=i;const x=this._cubeSize;Kt(t,0,0,3*x,2*x),n.setRenderTarget(t),n.render(p,oi)}_applyPMREM(i){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),p=an[(r-1)%an.length];this._blur(i,r-1,r,s,p)}t.autoClear=n}_blur(i,t,n,r,s){const p=this._pingPongRenderTarget;this._halfBlur(i,p,t,n,r,"latitudinal",s),this._halfBlur(p,i,n,n,r,"longitudinal",s)}_halfBlur(i,t,n,r,s,p,o){const x=this._renderer,h=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,g=new dt(this._lodPlanes[r],h),_=h.uniforms,w=this._sizeLods[n]-1,D=isFinite(s)?Math.PI/(2*w):2*Math.PI/(2*gt-1),c=s/D,a=isFinite(s)?1+Math.floor(E*c):gt;a>gt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${a} samples when the maximum is set to ${gt}`);const T=[];let A=0;for(let X=0;X<gt;++X){const u=X/c,S=Math.exp(-u*u/2);T.push(S),X===0?A+=S:X<a&&(A+=2*S)}for(let X=0;X<T.length;X++)T[X]=T[X]/A;_.envMap.value=i.texture,_.samples.value=a,_.weights.value=T,_.latitudinal.value=p==="latitudinal",o&&(_.poleAxis.value=o);const{_lodMax:N}=this;_.dTheta.value=D,_.mipInt.value=N-n;const v=this._sizeLods[r],P=3*v*(r>N-wt?r-N+wt:0),y=4*(this._cubeSize-v);Kt(t,P,y,3*v,2*v),x.setRenderTarget(t),x.render(g,oi)}}function qs(e){const i=[],t=[],n=[];let r=e;const s=e-wt+1+nn.length;for(let p=0;p<s;p++){const o=Math.pow(2,r);t.push(o);let x=1/o;p>e-wt?x=nn[p-e+wt-1]:p===0&&(x=0),n.push(x);const h=1/(o-2),E=-h,g=1+h,_=[E,E,g,E,g,g,E,E,g,g,E,g],w=6,D=6,c=3,a=2,T=1,A=new Float32Array(c*D*w),N=new Float32Array(a*D*w),v=new Float32Array(T*D*w);for(let y=0;y<w;y++){const X=y%3*2/3-1,u=y>2?0:-1,S=[X,u,0,X+2/3,u,0,X+2/3,u+1,0,X,u,0,X+2/3,u+1,0,X,u+1,0];A.set(S,c*D*y),N.set(_,a*D*y);const q=[y,y,y,y,y,y];v.set(q,T*D*y)}const P=new Cn;P.setAttribute("position",new jt(A,c)),P.setAttribute("uv",new jt(N,a)),P.setAttribute("faceIndex",new jt(v,T)),i.push(P),r>wt&&r--}return{lodPlanes:i,sizeLods:t,sigmas:n}}function sn(e,i,t){const n=new ct(e,i,t);return n.texture.mapping=$t,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kt(e,i,t,n,r){e.viewport.set(i,t,n,r),e.scissor.set(i,t,n,r)}function Ks(e,i,t){const n=new Float32Array(gt),r=new Me(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:gt,CUBEUV_TEXEL_WIDTH:1/i,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function ln(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function cn(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function xi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ys(e){let i=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const x=o.mapping,h=x===di||x===ui,E=x===Ht||x===Dt;if(h||E)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let g=i.get(o);return t===null&&(t=new on(e)),g=h?t.fromEquirectangular(o,g):t.fromCubemap(o,g),i.set(o,g),g.texture}else{if(i.has(o))return i.get(o).texture;{const g=o.image;if(h&&g&&g.height>0||E&&g&&r(g)){t===null&&(t=new on(e));const _=h?t.fromEquirectangular(o):t.fromCubemap(o);return i.set(o,_),o.addEventListener("dispose",s),_.texture}else return null}}}return o}function r(o){let x=0;const h=6;for(let E=0;E<h;E++)o[E]!==void 0&&x++;return x===h}function s(o){const x=o.target;x.removeEventListener("dispose",s);const h=i.get(x);h!==void 0&&(i.delete(x),h.dispose())}function p(){i=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:p}}function Zs(e){const i={};function t(n){if(i[n]!==void 0)return i[n];let r;switch(n){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(n)}return i[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function js(e,i,t,n){const r={},s=new WeakMap;function p(g){const _=g.target;_.index!==null&&i.remove(_.index);for(const D in _.attributes)i.remove(_.attributes[D]);_.removeEventListener("dispose",p),delete r[_.id];const w=s.get(_);w&&(i.remove(w),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function o(g,_){return r[_.id]===!0||(_.addEventListener("dispose",p),r[_.id]=!0,t.memory.geometries++),_}function x(g){const _=g.attributes;for(const D in _)i.update(_[D],e.ARRAY_BUFFER);const w=g.morphAttributes;for(const D in w){const c=w[D];for(let a=0,T=c.length;a<T;a++)i.update(c[a],e.ARRAY_BUFFER)}}function h(g){const _=[],w=g.index,D=g.attributes.position;let c=0;if(w!==null){const A=w.array;c=w.version;for(let N=0,v=A.length;N<v;N+=3){const P=A[N+0],y=A[N+1],X=A[N+2];_.push(P,y,y,X,X,P)}}else{const A=D.array;c=D.version;for(let N=0,v=A.length/3-1;N<v;N+=3){const P=N+0,y=N+1,X=N+2;_.push(P,y,y,X,X,P)}}const a=new(la(_)?oa:sa)(_,1);a.version=c;const T=s.get(g);T&&i.remove(T),s.set(g,a)}function E(g){const _=s.get(g);if(_){const w=g.index;w!==null&&_.version<w.version&&h(g)}else h(g);return s.get(g)}return{get:o,update:x,getWireframeAttribute:E}}function $s(e,i,t,n){const r=n.isWebGL2;let s;function p(_){s=_}let o,x;function h(_){o=_.type,x=_.bytesPerElement}function E(_,w){e.drawElements(s,w,o,_*x),t.update(w,s,1)}function g(_,w,D){if(D===0)return;let c,a;if(r)c=e,a="drawElementsInstanced";else if(c=i.get("ANGLE_instanced_arrays"),a="drawElementsInstancedANGLE",c===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[a](s,w,o,_*x,D),t.update(w,s,D)}this.setMode=p,this.setIndex=h,this.render=E,this.renderInstances=g}function Js(e){const i={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,p,o){switch(t.calls++,p){case e.TRIANGLES:t.triangles+=o*(s/3);break;case e.LINES:t.lines+=o*(s/2);break;case e.LINE_STRIP:t.lines+=o*(s-1);break;case e.LINE_LOOP:t.lines+=o*s;break;case e.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:i,render:t,programs:null,autoReset:!0,reset:r,update:n}}class Mi extends kt{constructor(i=null,t=1,n=1,r=1){super(null),this.image={data:i,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Mi.prototype.isDataArrayTexture=!0;function Qs(e,i){return e[0]-i[0]}function el(e,i){return Math.abs(i[1])-Math.abs(e[1])}function li(e,i){let t=1;const n=i.isInterleavedBufferAttribute?i.data.array:i.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),e.divideScalar(t)}function tl(e,i,t){const n={},r=new Float32Array(8),s=new WeakMap,p=new qe,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function x(h,E,g,_){const w=h.morphTargetInfluences;if(i.isWebGL2===!0){const D=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,c=D!==void 0?D.length:0;let a=s.get(E);if(a===void 0||a.count!==c){let K=function(){se.dispose(),s.delete(E),E.removeEventListener("dispose",K)};a!==void 0&&a.texture.dispose();const N=E.morphAttributes.position!==void 0,v=E.morphAttributes.normal!==void 0,P=E.morphAttributes.color!==void 0,y=E.morphAttributes.position||[],X=E.morphAttributes.normal||[],u=E.morphAttributes.color||[];let S=0;N===!0&&(S=1),v===!0&&(S=2),P===!0&&(S=3);let q=E.attributes.position.count*S,G=1;q>i.maxTextureSize&&(G=Math.ceil(q/i.maxTextureSize),q=i.maxTextureSize);const ae=new Float32Array(q*G*4*c),se=new Mi(ae,q,G,c);se.type=vt,se.needsUpdate=!0;const L=S*4;for(let F=0;F<c;F++){const V=y[F],W=X[F],B=u[F],H=q*G*4*F;for(let ne=0;ne<V.count;ne++){const k=ne*L;N===!0&&(p.fromBufferAttribute(V,ne),V.normalized===!0&&li(p,V),ae[H+k+0]=p.x,ae[H+k+1]=p.y,ae[H+k+2]=p.z,ae[H+k+3]=0),v===!0&&(p.fromBufferAttribute(W,ne),W.normalized===!0&&li(p,W),ae[H+k+4]=p.x,ae[H+k+5]=p.y,ae[H+k+6]=p.z,ae[H+k+7]=0),P===!0&&(p.fromBufferAttribute(B,ne),B.normalized===!0&&li(p,B),ae[H+k+8]=p.x,ae[H+k+9]=p.y,ae[H+k+10]=p.z,ae[H+k+11]=B.itemSize===4?p.w:1)}}a={count:c,texture:se,size:new Ye(q,G)},s.set(E,a),E.addEventListener("dispose",K)}let T=0;for(let N=0;N<w.length;N++)T+=w[N];const A=E.morphTargetsRelative?1:1-T;_.getUniforms().setValue(e,"morphTargetBaseInfluence",A),_.getUniforms().setValue(e,"morphTargetInfluences",w),_.getUniforms().setValue(e,"morphTargetsTexture",a.texture,t),_.getUniforms().setValue(e,"morphTargetsTextureSize",a.size)}else{const D=w===void 0?0:w.length;let c=n[E.id];if(c===void 0||c.length!==D){c=[];for(let v=0;v<D;v++)c[v]=[v,0];n[E.id]=c}for(let v=0;v<D;v++){const P=c[v];P[0]=v,P[1]=w[v]}c.sort(el);for(let v=0;v<8;v++)v<D&&c[v][1]?(o[v][0]=c[v][0],o[v][1]=c[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Qs);const a=E.morphAttributes.position,T=E.morphAttributes.normal;let A=0;for(let v=0;v<8;v++){const P=o[v],y=P[0],X=P[1];y!==Number.MAX_SAFE_INTEGER&&X?(a&&E.getAttribute("morphTarget"+v)!==a[y]&&E.setAttribute("morphTarget"+v,a[y]),T&&E.getAttribute("morphNormal"+v)!==T[y]&&E.setAttribute("morphNormal"+v,T[y]),r[v]=X,A+=X):(a&&E.hasAttribute("morphTarget"+v)===!0&&E.deleteAttribute("morphTarget"+v),T&&E.hasAttribute("morphNormal"+v)===!0&&E.deleteAttribute("morphNormal"+v),r[v]=0)}const N=E.morphTargetsRelative?1:1-A;_.getUniforms().setValue(e,"morphTargetBaseInfluence",N),_.getUniforms().setValue(e,"morphTargetInfluences",r)}}return{update:x}}function il(e,i,t,n){let r=new WeakMap;function s(x){const h=n.render.frame,E=x.geometry,g=i.get(x,E);return r.get(g)!==h&&(i.update(g),r.set(g,h)),x.isInstancedMesh&&(x.hasEventListener("dispose",o)===!1&&x.addEventListener("dispose",o),t.update(x.instanceMatrix,e.ARRAY_BUFFER),x.instanceColor!==null&&t.update(x.instanceColor,e.ARRAY_BUFFER)),g}function p(){r=new WeakMap}function o(x){const h=x.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:p}}class Nn extends kt{constructor(i=null,t=1,n=1,r=1){super(null),this.image={data:i,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Nn.prototype.isData3DTexture=!0;const Fn=new kt,On=new Mi,Gn=new Nn,Bn=new wn,fn=[],dn=[],un=new Float32Array(16),pn=new Float32Array(9),hn=new Float32Array(4);function Ut(e,i,t){const n=e[0];if(n<=0||n>0)return e;const r=i*t;let s=fn[r];if(s===void 0&&(s=new Float32Array(r),fn[r]=s),i!==0){n.toArray(s,0);for(let p=1,o=0;p!==i;++p)o+=t,e[p].toArray(s,o)}return s}function We(e,i){if(e.length!==i.length)return!1;for(let t=0,n=e.length;t<n;t++)if(e[t]!==i[t])return!1;return!0}function ze(e,i){for(let t=0,n=i.length;t<n;t++)e[t]=i[t]}function Jt(e,i){let t=dn[i];t===void 0&&(t=new Int32Array(i),dn[i]=t);for(let n=0;n!==i;++n)t[n]=e.allocateTextureUnit();return t}function nl(e,i){const t=this.cache;t[0]!==i&&(e.uniform1f(this.addr,i),t[0]=i)}function rl(e,i){const t=this.cache;if(i.x!==void 0)(t[0]!==i.x||t[1]!==i.y)&&(e.uniform2f(this.addr,i.x,i.y),t[0]=i.x,t[1]=i.y);else{if(We(t,i))return;e.uniform2fv(this.addr,i),ze(t,i)}}function al(e,i){const t=this.cache;if(i.x!==void 0)(t[0]!==i.x||t[1]!==i.y||t[2]!==i.z)&&(e.uniform3f(this.addr,i.x,i.y,i.z),t[0]=i.x,t[1]=i.y,t[2]=i.z);else if(i.r!==void 0)(t[0]!==i.r||t[1]!==i.g||t[2]!==i.b)&&(e.uniform3f(this.addr,i.r,i.g,i.b),t[0]=i.r,t[1]=i.g,t[2]=i.b);else{if(We(t,i))return;e.uniform3fv(this.addr,i),ze(t,i)}}function ol(e,i){const t=this.cache;if(i.x!==void 0)(t[0]!==i.x||t[1]!==i.y||t[2]!==i.z||t[3]!==i.w)&&(e.uniform4f(this.addr,i.x,i.y,i.z,i.w),t[0]=i.x,t[1]=i.y,t[2]=i.z,t[3]=i.w);else{if(We(t,i))return;e.uniform4fv(this.addr,i),ze(t,i)}}function sl(e,i){const t=this.cache,n=i.elements;if(n===void 0){if(We(t,i))return;e.uniformMatrix2fv(this.addr,!1,i),ze(t,i)}else{if(We(t,n))return;hn.set(n),e.uniformMatrix2fv(this.addr,!1,hn),ze(t,n)}}function ll(e,i){const t=this.cache,n=i.elements;if(n===void 0){if(We(t,i))return;e.uniformMatrix3fv(this.addr,!1,i),ze(t,i)}else{if(We(t,n))return;pn.set(n),e.uniformMatrix3fv(this.addr,!1,pn),ze(t,n)}}function cl(e,i){const t=this.cache,n=i.elements;if(n===void 0){if(We(t,i))return;e.uniformMatrix4fv(this.addr,!1,i),ze(t,i)}else{if(We(t,n))return;un.set(n),e.uniformMatrix4fv(this.addr,!1,un),ze(t,n)}}function fl(e,i){const t=this.cache;t[0]!==i&&(e.uniform1i(this.addr,i),t[0]=i)}function dl(e,i){const t=this.cache;We(t,i)||(e.uniform2iv(this.addr,i),ze(t,i))}function ul(e,i){const t=this.cache;We(t,i)||(e.uniform3iv(this.addr,i),ze(t,i))}function pl(e,i){const t=this.cache;We(t,i)||(e.uniform4iv(this.addr,i),ze(t,i))}function hl(e,i){const t=this.cache;t[0]!==i&&(e.uniform1ui(this.addr,i),t[0]=i)}function ml(e,i){const t=this.cache;We(t,i)||(e.uniform2uiv(this.addr,i),ze(t,i))}function _l(e,i){const t=this.cache;We(t,i)||(e.uniform3uiv(this.addr,i),ze(t,i))}function gl(e,i){const t=this.cache;We(t,i)||(e.uniform4uiv(this.addr,i),ze(t,i))}function vl(e,i,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(i||Fn,r)}function El(e,i,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(i||Gn,r)}function Sl(e,i,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(i||Bn,r)}function xl(e,i,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(i||On,r)}function Ml(e){switch(e){case 5126:return nl;case 35664:return rl;case 35665:return al;case 35666:return ol;case 35674:return sl;case 35675:return ll;case 35676:return cl;case 5124:case 35670:return fl;case 35667:case 35671:return dl;case 35668:case 35672:return ul;case 35669:case 35673:return pl;case 5125:return hl;case 36294:return ml;case 36295:return _l;case 36296:return gl;case 35678:case 36198:case 36298:case 36306:case 35682:return vl;case 35679:case 36299:case 36307:return El;case 35680:case 36300:case 36308:case 36293:return Sl;case 36289:case 36303:case 36311:case 36292:return xl}}function Tl(e,i){e.uniform1fv(this.addr,i)}function bl(e,i){const t=Ut(i,this.size,2);e.uniform2fv(this.addr,t)}function Al(e,i){const t=Ut(i,this.size,3);e.uniform3fv(this.addr,t)}function Rl(e,i){const t=Ut(i,this.size,4);e.uniform4fv(this.addr,t)}function Ll(e,i){const t=Ut(i,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function wl(e,i){const t=Ut(i,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Cl(e,i){const t=Ut(i,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Dl(e,i){e.uniform1iv(this.addr,i)}function Pl(e,i){e.uniform2iv(this.addr,i)}function yl(e,i){e.uniform3iv(this.addr,i)}function Il(e,i){e.uniform4iv(this.addr,i)}function Ul(e,i){e.uniform1uiv(this.addr,i)}function Nl(e,i){e.uniform2uiv(this.addr,i)}function Fl(e,i){e.uniform3uiv(this.addr,i)}function Ol(e,i){e.uniform4uiv(this.addr,i)}function Gl(e,i,t){const n=i.length,r=Jt(t,n);e.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(i[s]||Fn,r[s])}function Bl(e,i,t){const n=i.length,r=Jt(t,n);e.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(i[s]||Gn,r[s])}function Hl(e,i,t){const n=i.length,r=Jt(t,n);e.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(i[s]||Bn,r[s])}function Vl(e,i,t){const n=i.length,r=Jt(t,n);e.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(i[s]||On,r[s])}function Wl(e){switch(e){case 5126:return Tl;case 35664:return bl;case 35665:return Al;case 35666:return Rl;case 35674:return Ll;case 35675:return wl;case 35676:return Cl;case 5124:case 35670:return Dl;case 35667:case 35671:return Pl;case 35668:case 35672:return yl;case 35669:case 35673:return Il;case 5125:return Ul;case 36294:return Nl;case 36295:return Fl;case 36296:return Ol;case 35678:case 36198:case 36298:case 36306:case 35682:return Gl;case 35679:case 36299:case 36307:return Bl;case 35680:case 36300:case 36308:case 36293:return Hl;case 36289:case 36303:case 36311:case 36292:return Vl}}function zl(e,i,t){this.id=e,this.addr=t,this.cache=[],this.setValue=Ml(i.type)}function kl(e,i,t){this.id=e,this.addr=t,this.cache=[],this.size=i.size,this.setValue=Wl(i.type)}function Hn(e){this.id=e,this.seq=[],this.map={}}Hn.prototype.setValue=function(e,i,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const p=n[r];p.setValue(e,i[p.id],t)}};const ci=/(\w+)(\])?(\[|\.)?/g;function mn(e,i){e.seq.push(i),e.map[i.id]=i}function Xl(e,i,t){const n=e.name,r=n.length;for(ci.lastIndex=0;;){const s=ci.exec(n),p=ci.lastIndex;let o=s[1];const x=s[2]==="]",h=s[3];if(x&&(o=o|0),h===void 0||h==="["&&p+2===r){mn(t,h===void 0?new zl(o,e,i):new kl(o,e,i));break}else{let g=t.map[o];g===void 0&&(g=new Hn(o),mn(t,g)),t=g}}}function pt(e,i){this.seq=[],this.map={};const t=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let n=0;n<t;++n){const r=e.getActiveUniform(i,n),s=e.getUniformLocation(i,r.name);Xl(r,s,this)}}pt.prototype.setValue=function(e,i,t,n){const r=this.map[i];r!==void 0&&r.setValue(e,t,n)};pt.prototype.setOptional=function(e,i,t){const n=i[t];n!==void 0&&this.setValue(e,t,n)};pt.upload=function(e,i,t,n){for(let r=0,s=i.length;r!==s;++r){const p=i[r],o=t[p.id];o.needsUpdate!==!1&&p.setValue(e,o.value,n)}};pt.seqWithValue=function(e,i){const t=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in i&&t.push(s)}return t};function _n(e,i,t){const n=e.createShader(i);return e.shaderSource(n,t),e.compileShader(n),n}let ql=0;function Kl(e,i){const t=e.split(`
`),n=[],r=Math.max(i-6,0),s=Math.min(i+6,t.length);for(let p=r;p<s;p++)n.push(p+1+": "+t[p]);return n.join(`
`)}function Yl(e){switch(e){case Pt:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function gn(e,i,t){const n=e.getShaderParameter(i,e.COMPILE_STATUS),r=e.getShaderInfoLog(i).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const p=parseInt(s[0]);return t.toUpperCase()+`

`+r+`

`+Kl(e.getShaderSource(i),p)}else return r}function Zl(e,i){const t=Yl(i);return"vec4 "+e+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jl(e,i){let t;switch(i){case tr:t="Linear";break;case er:t="Reinhard";break;case Qn:t="OptimizedCineon";break;case Jn:t="ACESFilmic";break;case $n:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",i),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $l(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bt).join(`
`)}function Jl(e){const i=[];for(const t in e){const n=e[t];n!==!1&&i.push("#define "+t+" "+n)}return i.join(`
`)}function Ql(e,i){const t={},n=e.getProgramParameter(i,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(i,r),p=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),t[p]={type:s.type,location:e.getAttribLocation(i,p),locationSize:o}}return t}function Bt(e){return e!==""}function vn(e,i){return e.replace(/NUM_DIR_LIGHTS/g,i.numDirLights).replace(/NUM_SPOT_LIGHTS/g,i.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,i.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,i.numPointLights).replace(/NUM_HEMI_LIGHTS/g,i.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,i.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,i.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,i.numPointLightShadows)}function En(e,i){return e.replace(/NUM_CLIPPING_PLANES/g,i.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,i.numClippingPlanes-i.numClipIntersection)}const ec=/^[ \t]*#include +<([\w\d./]+)>/gm;function gi(e){return e.replace(ec,tc)}function tc(e,i){const t=xe[i];if(t===void 0)throw new Error("Can not resolve #include <"+i+">");return gi(t)}const ic=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sn(e){return e.replace(nc,Vn).replace(ic,rc)}function rc(e,i,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vn(e,i,t,n)}function Vn(e,i,t,n){let r="";for(let s=parseInt(i);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xn(e){let i="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?i+=`
#define HIGH_PRECISION`:e.precision==="mediump"?i+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(i+=`
#define LOW_PRECISION`),i}function ac(e){let i="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===An?i="SHADOWMAP_TYPE_PCF":e.shadowMapType===ir?i="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gt&&(i="SHADOWMAP_TYPE_VSM"),i}function oc(e){let i="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ht:case Dt:i="ENVMAP_TYPE_CUBE";break;case $t:i="ENVMAP_TYPE_CUBE_UV";break}return i}function sc(e){let i="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Dt:i="ENVMAP_MODE_REFRACTION";break}return i}function lc(e){let i="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ar:i="ENVMAP_BLENDING_MULTIPLY";break;case rr:i="ENVMAP_BLENDING_MIX";break;case nr:i="ENVMAP_BLENDING_ADD";break}return i}function cc(e){const i=e.envMapCubeUVHeight;if(i===null)return null;const t=Math.log2(i)-2,n=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fc(e,i,t,n){const r=e.getContext(),s=t.defines;let p=t.vertexShader,o=t.fragmentShader;const x=ac(t),h=oc(t),E=sc(t),g=lc(t),_=cc(t),w=t.isWebGL2?"":$l(t),D=Jl(s),c=r.createProgram();let a,T,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(a=[D].filter(Bt).join(`
`),a.length>0&&(a+=`
`),T=[w,D].filter(Bt).join(`
`),T.length>0&&(T+=`
`)):(a=[xn(t),"#define SHADER_NAME "+t.shaderName,D,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bt).join(`
`),T=[w,xn(t),"#define SHADER_NAME "+t.shaderName,D,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+E:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lt?"#define TONE_MAPPING":"",t.toneMapping!==lt?xe.tonemapping_pars_fragment:"",t.toneMapping!==lt?jl("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xe.encodings_pars_fragment,Zl("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bt).join(`
`)),p=gi(p),p=vn(p,t),p=En(p,t),o=gi(o),o=vn(o,t),o=En(o,t),p=Sn(p),o=Sn(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,a=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+a,T=["#define varying in",t.glslVersion===bi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const N=A+a+p,v=A+T+o,P=_n(r,r.VERTEX_SHADER,N),y=_n(r,r.FRAGMENT_SHADER,v);if(r.attachShader(c,P),r.attachShader(c,y),t.index0AttributeName!==void 0?r.bindAttribLocation(c,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(c,0,"position"),r.linkProgram(c),e.debug.checkShaderErrors){const S=r.getProgramInfoLog(c).trim(),q=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(y).trim();let ae=!0,se=!0;if(r.getProgramParameter(c,r.LINK_STATUS)===!1){ae=!1;const L=gn(r,P,"vertex"),K=gn(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(c,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+L+`
`+K)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(q===""||G==="")&&(se=!1);se&&(this.diagnostics={runnable:ae,programLog:S,vertexShader:{log:q,prefix:a},fragmentShader:{log:G,prefix:T}})}r.deleteShader(P),r.deleteShader(y);let X;this.getUniforms=function(){return X===void 0&&(X=new pt(r,c)),X};let u;return this.getAttributes=function(){return u===void 0&&(u=Ql(r,c)),u},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(c),this.program=void 0},this.name=t.shaderName,this.id=ql++,this.cacheKey=i,this.usedTimes=1,this.program=c,this.vertexShader=P,this.fragmentShader=y,this}let dc=0;class uc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(i){const t=i.vertexShader,n=i.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),p=this._getShaderCacheForMaterial(i);return p.has(r)===!1&&(p.add(r),r.usedTimes++),p.has(s)===!1&&(p.add(s),s.usedTimes++),this}remove(i){const t=this.materialCache.get(i);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(i),this}getVertexShaderID(i){return this._getShaderStage(i.vertexShader).id}getFragmentShaderID(i){return this._getShaderStage(i.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(i){const t=this.materialCache;return t.has(i)===!1&&t.set(i,new Set),t.get(i)}_getShaderStage(i){const t=this.shaderCache;if(t.has(i)===!1){const n=new pc(i);t.set(i,n)}return t.get(i)}}class pc{constructor(i){this.id=dc++,this.code=i,this.usedTimes=0}}function hc(e,i,t,n,r,s,p){const o=new ca,x=new uc,h=[],E=r.isWebGL2,g=r.logarithmicDepthBuffer,_=r.vertexTextures;let w=r.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(u,S,q,G,ae){const se=G.fog,L=ae.geometry,K=u.isMeshStandardMaterial?G.environment:null,F=(u.isMeshStandardMaterial?t:i).get(u.envMap||K),V=!!F&&F.mapping===$t?F.image.height:null,W=D[u.type];u.precision!==null&&(w=r.getMaxPrecision(u.precision),w!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",w,"instead."));const B=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,H=B!==void 0?B.length:0;let ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let k,ee,oe,le;if(W){const Q=nt[W];k=Q.vertexShader,ee=Q.fragmentShader}else k=u.vertexShader,ee=u.fragmentShader,x.update(u),oe=x.getVertexShaderID(u),le=x.getFragmentShaderID(u);const M=e.getRenderTarget(),Fe=u.alphaTest>0,_e=u.clearcoat>0;return{isWebGL2:E,shaderID:W,shaderName:u.type,vertexShader:k,fragmentShader:ee,defines:u.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:w,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:_,outputEncoding:M===null?e.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Pt,map:!!u.map,matcap:!!u.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:V,lightMap:!!u.lightMap,aoMap:!!u.aoMap,emissiveMap:!!u.emissiveMap,bumpMap:!!u.bumpMap,normalMap:!!u.normalMap,objectSpaceNormalMap:u.normalMapType===or,tangentSpaceNormalMap:u.normalMapType===sr,decodeVideoTexture:!!u.map&&u.map.isVideoTexture===!0&&u.map.encoding===Ie,clearcoat:_e,clearcoatMap:_e&&!!u.clearcoatMap,clearcoatRoughnessMap:_e&&!!u.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!u.clearcoatNormalMap,displacementMap:!!u.displacementMap,roughnessMap:!!u.roughnessMap,metalnessMap:!!u.metalnessMap,specularMap:!!u.specularMap,specularIntensityMap:!!u.specularIntensityMap,specularColorMap:!!u.specularColorMap,opaque:u.transparent===!1&&u.blending===Yt,alphaMap:!!u.alphaMap,alphaTest:Fe,gradientMap:!!u.gradientMap,sheen:u.sheen>0,sheenColorMap:!!u.sheenColorMap,sheenRoughnessMap:!!u.sheenRoughnessMap,transmission:u.transmission>0,transmissionMap:!!u.transmissionMap,thicknessMap:!!u.thicknessMap,combine:u.combine,vertexTangents:!!u.normalMap&&!!L.attributes.tangent,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!u.map||!!u.bumpMap||!!u.normalMap||!!u.specularMap||!!u.alphaMap||!!u.emissiveMap||!!u.roughnessMap||!!u.metalnessMap||!!u.clearcoatMap||!!u.clearcoatRoughnessMap||!!u.clearcoatNormalMap||!!u.displacementMap||!!u.transmissionMap||!!u.thicknessMap||!!u.specularIntensityMap||!!u.specularColorMap||!!u.sheenColorMap||!!u.sheenRoughnessMap,uvsVertexOnly:!(!!u.map||!!u.bumpMap||!!u.normalMap||!!u.specularMap||!!u.alphaMap||!!u.emissiveMap||!!u.roughnessMap||!!u.metalnessMap||!!u.clearcoatNormalMap||u.transmission>0||!!u.transmissionMap||!!u.thicknessMap||!!u.specularIntensityMap||!!u.specularColorMap||u.sheen>0||!!u.sheenColorMap||!!u.sheenRoughnessMap)&&!!u.displacementMap,fog:!!se,useFog:u.fog===!0,fogExp2:se&&se.isFogExp2,flatShading:!!u.flatShading,sizeAttenuation:u.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ae.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:u.dithering,shadowMapEnabled:e.shadowMap.enabled&&q.length>0,shadowMapType:e.shadowMap.type,toneMapping:u.toneMapped?e.toneMapping:lt,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Wt,flipSided:u.side===at,useDepthPacking:!!u.depthPacking,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionDerivatives:u.extensions&&u.extensions.derivatives,extensionFragDepth:u.extensions&&u.extensions.fragDepth,extensionDrawBuffers:u.extensions&&u.extensions.drawBuffers,extensionShaderTextureLOD:u.extensions&&u.extensions.shaderTextureLOD,rendererExtensionFragDepth:E||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:E||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:E||n.has("EXT_shader_texture_lod"),customProgramCacheKey:u.customProgramCacheKey()}}function a(u){const S=[];if(u.shaderID?S.push(u.shaderID):(S.push(u.customVertexShaderID),S.push(u.customFragmentShaderID)),u.defines!==void 0)for(const q in u.defines)S.push(q),S.push(u.defines[q]);return u.isRawShaderMaterial===!1&&(T(S,u),A(S,u),S.push(e.outputEncoding)),S.push(u.customProgramCacheKey),S.join()}function T(u,S){u.push(S.precision),u.push(S.outputEncoding),u.push(S.envMapMode),u.push(S.envMapCubeUVHeight),u.push(S.combine),u.push(S.vertexUvs),u.push(S.fogExp2),u.push(S.sizeAttenuation),u.push(S.morphTargetsCount),u.push(S.morphAttributeCount),u.push(S.numDirLights),u.push(S.numPointLights),u.push(S.numSpotLights),u.push(S.numHemiLights),u.push(S.numRectAreaLights),u.push(S.numDirLightShadows),u.push(S.numPointLightShadows),u.push(S.numSpotLightShadows),u.push(S.shadowMapType),u.push(S.toneMapping),u.push(S.numClippingPlanes),u.push(S.numClipIntersection),u.push(S.depthPacking)}function A(u,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.displacementMap&&o.enable(18),S.specularMap&&o.enable(19),S.roughnessMap&&o.enable(20),S.metalnessMap&&o.enable(21),S.gradientMap&&o.enable(22),S.alphaMap&&o.enable(23),S.alphaTest&&o.enable(24),S.vertexColors&&o.enable(25),S.vertexAlphas&&o.enable(26),S.vertexUvs&&o.enable(27),S.vertexTangents&&o.enable(28),S.uvsVertexOnly&&o.enable(29),S.fog&&o.enable(30),u.push(o.mask),o.disableAll(),S.useFog&&o.enable(0),S.flatShading&&o.enable(1),S.logarithmicDepthBuffer&&o.enable(2),S.skinning&&o.enable(3),S.morphTargets&&o.enable(4),S.morphNormals&&o.enable(5),S.morphColors&&o.enable(6),S.premultipliedAlpha&&o.enable(7),S.shadowMapEnabled&&o.enable(8),S.physicallyCorrectLights&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.specularIntensityMap&&o.enable(14),S.specularColorMap&&o.enable(15),S.transmission&&o.enable(16),S.transmissionMap&&o.enable(17),S.thicknessMap&&o.enable(18),S.sheen&&o.enable(19),S.sheenColorMap&&o.enable(20),S.sheenRoughnessMap&&o.enable(21),S.decodeVideoTexture&&o.enable(22),S.opaque&&o.enable(23),u.push(o.mask)}function N(u){const S=D[u.type];let q;if(S){const G=nt[S];q=ea.clone(G.uniforms)}else q=u.uniforms;return q}function v(u,S){let q;for(let G=0,ae=h.length;G<ae;G++){const se=h[G];if(se.cacheKey===S){q=se,++q.usedTimes;break}}return q===void 0&&(q=new fc(e,S,u,s),h.push(q)),q}function P(u){if(--u.usedTimes===0){const S=h.indexOf(u);h[S]=h[h.length-1],h.pop(),u.destroy()}}function y(u){x.remove(u)}function X(){x.dispose()}return{getParameters:c,getProgramCacheKey:a,getUniforms:N,acquireProgram:v,releaseProgram:P,releaseShaderCache:y,programs:h,dispose:X}}function mc(){let e=new WeakMap;function i(s){let p=e.get(s);return p===void 0&&(p={},e.set(s,p)),p}function t(s){e.delete(s)}function n(s,p,o){e.get(s)[p]=o}function r(){e=new WeakMap}return{get:i,remove:t,update:n,dispose:r}}function _c(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.material.id!==i.material.id?e.material.id-i.material.id:e.z!==i.z?e.z-i.z:e.id-i.id}function Mn(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.z!==i.z?i.z-e.z:e.id-i.id}function Tn(){const e=[];let i=0;const t=[],n=[],r=[];function s(){i=0,t.length=0,n.length=0,r.length=0}function p(g,_,w,D,c,a){let T=e[i];return T===void 0?(T={id:g.id,object:g,geometry:_,material:w,groupOrder:D,renderOrder:g.renderOrder,z:c,group:a},e[i]=T):(T.id=g.id,T.object=g,T.geometry=_,T.material=w,T.groupOrder=D,T.renderOrder=g.renderOrder,T.z=c,T.group=a),i++,T}function o(g,_,w,D,c,a){const T=p(g,_,w,D,c,a);w.transmission>0?n.push(T):w.transparent===!0?r.push(T):t.push(T)}function x(g,_,w,D,c,a){const T=p(g,_,w,D,c,a);w.transmission>0?n.unshift(T):w.transparent===!0?r.unshift(T):t.unshift(T)}function h(g,_){t.length>1&&t.sort(g||_c),n.length>1&&n.sort(_||Mn),r.length>1&&r.sort(_||Mn)}function E(){for(let g=i,_=e.length;g<_;g++){const w=e[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:x,finish:E,sort:h}}function gc(){let e=new WeakMap;function i(n,r){let s;return e.has(n)===!1?(s=new Tn,e.set(n,[s])):r>=e.get(n).length?(s=new Tn,e.get(n).push(s)):s=e.get(n)[r],s}function t(){e=new WeakMap}return{get:i,dispose:t}}function vc(){const e={};return{get:function(i){if(e[i.id]!==void 0)return e[i.id];let t;switch(i.type){case"DirectionalLight":t={direction:new Me,color:new Ne};break;case"SpotLight":t={position:new Me,direction:new Me,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Me,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Me,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new Me,halfWidth:new Me,halfHeight:new Me};break}return e[i.id]=t,t}}}function Ec(){const e={};return{get:function(i){if(e[i.id]!==void 0)return e[i.id];let t;switch(i.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[i.id]=t,t}}}let Sc=0;function xc(e,i){return(i.castShadow?1:0)-(e.castShadow?1:0)}function Mc(e,i){const t=new vc,n=Ec(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let E=0;E<9;E++)r.probe.push(new Me);const s=new Me,p=new mi,o=new mi;function x(E,g){let _=0,w=0,D=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let c=0,a=0,T=0,A=0,N=0,v=0,P=0,y=0;E.sort(xc);const X=g!==!0?Math.PI:1;for(let S=0,q=E.length;S<q;S++){const G=E[S],ae=G.color,se=G.intensity,L=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ae.r*se*X,w+=ae.g*se*X,D+=ae.b*se*X;else if(G.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],se);else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity*X),G.castShadow){const V=G.shadow,W=n.get(G);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.directionalShadow[c]=W,r.directionalShadowMap[c]=K,r.directionalShadowMatrix[c]=G.shadow.matrix,v++}r.directional[c]=F,c++}else if(G.isSpotLight){const F=t.get(G);if(F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(ae).multiplyScalar(se*X),F.distance=L,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,G.castShadow){const V=G.shadow,W=n.get(G);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=K,r.spotShadowMatrix[T]=G.shadow.matrix,y++}r.spot[T]=F,T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(ae).multiplyScalar(se),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[A]=F,A++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity*X),F.distance=G.distance,F.decay=G.decay,G.castShadow){const V=G.shadow,W=n.get(G);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,r.pointShadow[a]=W,r.pointShadowMap[a]=K,r.pointShadowMatrix[a]=G.shadow.matrix,P++}r.point[a]=F,a++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(se*X),F.groundColor.copy(G.groundColor).multiplyScalar(se*X),r.hemi[N]=F,N++}}A>0&&(i.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=j.LTC_FLOAT_1,r.rectAreaLTC2=j.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=j.LTC_HALF_1,r.rectAreaLTC2=j.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=w,r.ambient[2]=D;const u=r.hash;(u.directionalLength!==c||u.pointLength!==a||u.spotLength!==T||u.rectAreaLength!==A||u.hemiLength!==N||u.numDirectionalShadows!==v||u.numPointShadows!==P||u.numSpotShadows!==y)&&(r.directional.length=c,r.spot.length=T,r.rectArea.length=A,r.point.length=a,r.hemi.length=N,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=P,r.spotShadowMatrix.length=y,u.directionalLength=c,u.pointLength=a,u.spotLength=T,u.rectAreaLength=A,u.hemiLength=N,u.numDirectionalShadows=v,u.numPointShadows=P,u.numSpotShadows=y,r.version=Sc++)}function h(E,g){let _=0,w=0,D=0,c=0,a=0;const T=g.matrixWorldInverse;for(let A=0,N=E.length;A<N;A++){const v=E[A];if(v.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(T),_++}else if(v.isSpotLight){const P=r.spot[D];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(T),P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(T),D++}else if(v.isRectAreaLight){const P=r.rectArea[c];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(T),o.identity(),p.copy(v.matrixWorld),p.premultiply(T),o.extractRotation(p),P.halfWidth.set(v.width*.5,0,0),P.halfHeight.set(0,v.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),c++}else if(v.isPointLight){const P=r.point[w];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(T),w++}else if(v.isHemisphereLight){const P=r.hemi[a];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(T),a++}}}return{setup:x,setupView:h,state:r}}function bn(e,i){const t=new Mc(e,i),n=[],r=[];function s(){n.length=0,r.length=0}function p(g){n.push(g)}function o(g){r.push(g)}function x(g){t.setup(n,g)}function h(g){t.setupView(n,g)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:x,setupLightsView:h,pushLight:p,pushShadow:o}}function Tc(e,i){let t=new WeakMap;function n(s,p=0){let o;return t.has(s)===!1?(o=new bn(e,i),t.set(s,[o])):p>=t.get(s).length?(o=new bn(e,i),t.get(s).push(o)):o=t.get(s)[p],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wn extends Pn{constructor(i){super(),this.type="MeshDepthMaterial",this.depthPacking=lr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(i)}copy(i){return super.copy(i),this.depthPacking=i.depthPacking,this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this}}Wn.prototype.isMeshDepthMaterial=!0;class zn extends Pn{constructor(i){super(),this.type="MeshDistanceMaterial",this.referencePosition=new Me,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(i)}copy(i){return super.copy(i),this.referencePosition.copy(i.referencePosition),this.nearDistance=i.nearDistance,this.farDistance=i.farDistance,this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this}}zn.prototype.isMeshDistanceMaterial=!0;const bc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Ac=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Rc(e,i,t){let n=new Rn;const r=new Ye,s=new Ye,p=new qe,o=new Wn({depthPacking:cr}),x=new zn,h={},E=t.maxTextureSize,g={0:at,1:vi,2:Wt},_=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:bc,fragmentShader:Ac}),w=_.clone();w.defines.HORIZONTAL_PASS=1;const D=new Cn;D.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new dt(D,_),a=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=An,this.render=function(v,P,y){if(a.enabled===!1||a.autoUpdate===!1&&a.needsUpdate===!1||v.length===0)return;const X=e.getRenderTarget(),u=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),q=e.state;q.setBlending(ut),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);for(let G=0,ae=v.length;G<ae;G++){const se=v[G],L=se.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const K=L.getFrameExtents();if(r.multiply(K),s.copy(L.mapSize),(r.x>E||r.y>E)&&(r.x>E&&(s.x=Math.floor(E/K.x),r.x=s.x*K.x,L.mapSize.x=s.x),r.y>E&&(s.y=Math.floor(E/K.y),r.y=s.y*K.y,L.mapSize.y=s.y)),L.map===null&&!L.isPointLightShadow&&this.type===Gt&&(L.map=new ct(r.x,r.y),L.map.texture.name=se.name+".shadowMap",L.mapPass=new ct(r.x,r.y),L.camera.updateProjectionMatrix()),L.map===null){const V={minFilter:Xe,magFilter:Xe,format:rt};L.map=new ct(r.x,r.y,V),L.map.texture.name=se.name+".shadowMap",L.camera.updateProjectionMatrix()}e.setRenderTarget(L.map),e.clear();const F=L.getViewportCount();for(let V=0;V<F;V++){const W=L.getViewport(V);p.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),q.viewport(p),L.updateMatrices(se,V),n=L.getFrustum(),N(P,y,L.camera,se,this.type)}!L.isPointLightShadow&&this.type===Gt&&T(L,y),L.needsUpdate=!1}a.needsUpdate=!1,e.setRenderTarget(X,u,S)};function T(v,P){const y=i.update(c);_.defines.VSM_SAMPLES!==v.blurSamples&&(_.defines.VSM_SAMPLES=v.blurSamples,w.defines.VSM_SAMPLES=v.blurSamples,_.needsUpdate=!0,w.needsUpdate=!0),_.uniforms.shadow_pass.value=v.map.texture,_.uniforms.resolution.value=v.mapSize,_.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(P,null,y,_,c,null),w.uniforms.shadow_pass.value=v.mapPass.texture,w.uniforms.resolution.value=v.mapSize,w.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(P,null,y,w,c,null)}function A(v,P,y,X,u,S){let q=null;const G=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(G!==void 0?q=G:q=y.isPointLight===!0?x:o,e.localClippingEnabled&&P.clipShadows===!0&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0){const ae=q.uuid,se=P.uuid;let L=h[ae];L===void 0&&(L={},h[ae]=L);let K=L[se];K===void 0&&(K=q.clone(),L[se]=K),q=K}return q.visible=P.visible,q.wireframe=P.wireframe,S===Gt?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:g[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaTest,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,y.isPointLight===!0&&q.isMeshDistanceMaterial===!0&&(q.referencePosition.setFromMatrixPosition(y.matrixWorld),q.nearDistance=X,q.farDistance=u),q}function N(v,P,y,X,u){if(v.visible===!1)return;if(v.layers.test(P.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&u===Gt)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);const G=i.update(v),ae=v.material;if(Array.isArray(ae)){const se=G.groups;for(let L=0,K=se.length;L<K;L++){const F=se[L],V=ae[F.materialIndex];if(V&&V.visible){const W=A(v,V,X,y.near,y.far,u);e.renderBufferDirect(y,null,G,W,v,F)}}}else if(ae.visible){const se=A(v,ae,X,y.near,y.far,u);e.renderBufferDirect(y,null,G,se,v,null)}}const q=v.children;for(let G=0,ae=q.length;G<ae;G++)N(q[G],P,y,X,u)}}function Lc(e,i,t){const n=t.isWebGL2;function r(){let m=!1;const $=new qe;let Z=null;const de=new qe(0,0,0,0);return{setMask:function(ie){Z!==ie&&!m&&(e.colorMask(ie,ie,ie,ie),Z=ie)},setLocked:function(ie){m=ie},setClear:function(ie,fe,Y,ue,Ce){Ce===!0&&(ie*=ue,fe*=ue,Y*=ue),$.set(ie,fe,Y,ue),de.equals($)===!1&&(e.clearColor(ie,fe,Y,ue),de.copy($))},reset:function(){m=!1,Z=null,de.set(-1,0,0,0)}}}function s(){let m=!1,$=null,Z=null,de=null;return{setTest:function(ie){ie?le(e.DEPTH_TEST):M(e.DEPTH_TEST)},setMask:function(ie){$!==ie&&!m&&(e.depthMask(ie),$=ie)},setFunc:function(ie){if(Z!==ie){if(ie)switch(ie){case yr:e.depthFunc(e.NEVER);break;case Pr:e.depthFunc(e.ALWAYS);break;case Dr:e.depthFunc(e.LESS);break;case Ai:e.depthFunc(e.LEQUAL);break;case Cr:e.depthFunc(e.EQUAL);break;case wr:e.depthFunc(e.GEQUAL);break;case Lr:e.depthFunc(e.GREATER);break;case Rr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);Z=ie}},setLocked:function(ie){m=ie},setClear:function(ie){de!==ie&&(e.clearDepth(ie),de=ie)},reset:function(){m=!1,$=null,Z=null,de=null}}}function p(){let m=!1,$=null,Z=null,de=null,ie=null,fe=null,Y=null,ue=null,Ce=null;return{setTest:function(Ae){m||(Ae?le(e.STENCIL_TEST):M(e.STENCIL_TEST))},setMask:function(Ae){$!==Ae&&!m&&(e.stencilMask(Ae),$=Ae)},setFunc:function(Ae,$e,Je){(Z!==Ae||de!==$e||ie!==Je)&&(e.stencilFunc(Ae,$e,Je),Z=Ae,de=$e,ie=Je)},setOp:function(Ae,$e,Je){(fe!==Ae||Y!==$e||ue!==Je)&&(e.stencilOp(Ae,$e,Je),fe=Ae,Y=$e,ue=Je)},setLocked:function(Ae){m=Ae},setClear:function(Ae){Ce!==Ae&&(e.clearStencil(Ae),Ce=Ae)},reset:function(){m=!1,$=null,Z=null,de=null,ie=null,fe=null,Y=null,ue=null,Ce=null}}}const o=new r,x=new s,h=new p;let E={},g={},_=new WeakMap,w=[],D=null,c=!1,a=null,T=null,A=null,N=null,v=null,P=null,y=null,X=!1,u=null,S=null,q=null,G=null,ae=null;const se=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,K=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(F)[1]),L=K>=1):F.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),L=K>=2);let V=null,W={};const B=e.getParameter(e.SCISSOR_BOX),H=e.getParameter(e.VIEWPORT),ne=new qe().fromArray(B),k=new qe().fromArray(H);function ee(m,$,Z){const de=new Uint8Array(4),ie=e.createTexture();e.bindTexture(m,ie),e.texParameteri(m,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(m,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<Z;fe++)e.texImage2D($+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return ie}const oe={};oe[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),o.setClear(0,0,0,1),x.setClear(1),h.setClear(0),le(e.DEPTH_TEST),x.setFunc(Ai),Be(!1),ke(Ci),le(e.CULL_FACE),Te(ut);function le(m){E[m]!==!0&&(e.enable(m),E[m]=!0)}function M(m){E[m]!==!1&&(e.disable(m),E[m]=!1)}function Fe(m,$){return g[m]!==$?(e.bindFramebuffer(m,$),g[m]=$,n&&(m===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=$),m===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=$)),!0):!1}function _e(m,$){let Z=w,de=!1;if(m)if(Z=_.get($),Z===void 0&&(Z=[],_.set($,Z)),m.isWebGLMultipleRenderTargets){const ie=m.texture;if(Z.length!==ie.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let fe=0,Y=ie.length;fe<Y;fe++)Z[fe]=e.COLOR_ATTACHMENT0+fe;Z.length=ie.length,de=!0}}else Z[0]!==e.COLOR_ATTACHMENT0&&(Z[0]=e.COLOR_ATTACHMENT0,de=!0);else Z[0]!==e.BACK&&(Z[0]=e.BACK,de=!0);de&&(t.isWebGL2?e.drawBuffers(Z):i.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ee(m){return D!==m?(e.useProgram(m),D=m,!0):!1}const Q={[Ot]:e.FUNC_ADD,[fr]:e.FUNC_SUBTRACT,[dr]:e.FUNC_REVERSE_SUBTRACT};if(n)Q[Di]=e.MIN,Q[Pi]=e.MAX;else{const m=i.get("EXT_blend_minmax");m!==null&&(Q[Di]=m.MIN_EXT,Q[Pi]=m.MAX_EXT)}const ye={[ur]:e.ZERO,[pr]:e.ONE,[hr]:e.SRC_COLOR,[mr]:e.SRC_ALPHA,[_r]:e.SRC_ALPHA_SATURATE,[gr]:e.DST_COLOR,[vr]:e.DST_ALPHA,[Er]:e.ONE_MINUS_SRC_COLOR,[Sr]:e.ONE_MINUS_SRC_ALPHA,[xr]:e.ONE_MINUS_DST_COLOR,[Mr]:e.ONE_MINUS_DST_ALPHA};function Te(m,$,Z,de,ie,fe,Y,ue){if(m===ut){c===!0&&(M(e.BLEND),c=!1);return}if(c===!1&&(le(e.BLEND),c=!0),m!==Tr){if(m!==a||ue!==X){if((T!==Ot||v!==Ot)&&(e.blendEquation(e.FUNC_ADD),T=Ot,v=Ot),ue)switch(m){case Yt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wi:e.blendFunc(e.ONE,e.ONE);break;case Li:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ri:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}else switch(m){case Yt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Li:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ri:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}A=null,N=null,P=null,y=null,a=m,X=ue}return}ie=ie||$,fe=fe||Z,Y=Y||de,($!==T||ie!==v)&&(e.blendEquationSeparate(Q[$],Q[ie]),T=$,v=ie),(Z!==A||de!==N||fe!==P||Y!==y)&&(e.blendFuncSeparate(ye[Z],ye[de],ye[fe],ye[Y]),A=Z,N=de,P=fe,y=Y),a=m,X=null}function he(m,$){m.side===Wt?M(e.CULL_FACE):le(e.CULL_FACE);let Z=m.side===at;$&&(Z=!Z),Be(Z),m.blending===Yt&&m.transparent===!1?Te(ut):Te(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.premultipliedAlpha),x.setFunc(m.depthFunc),x.setTest(m.depthTest),x.setMask(m.depthWrite),o.setMask(m.colorWrite);const de=m.stencilWrite;h.setTest(de),de&&(h.setMask(m.stencilWriteMask),h.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),h.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),je(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):M(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(m){u!==m&&(m?e.frontFace(e.CW):e.frontFace(e.CCW),u=m)}function ke(m){m!==br?(le(e.CULL_FACE),m!==S&&(m===Ci?e.cullFace(e.BACK):m===Ar?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):M(e.CULL_FACE),S=m}function Ke(m){m!==q&&(L&&e.lineWidth(m),q=m)}function je(m,$,Z){m?(le(e.POLYGON_OFFSET_FILL),(G!==$||ae!==Z)&&(e.polygonOffset($,Z),G=$,ae=Z)):M(e.POLYGON_OFFSET_FILL)}function Ge(m){m?le(e.SCISSOR_TEST):M(e.SCISSOR_TEST)}function Pe(m){m===void 0&&(m=e.TEXTURE0+se-1),V!==m&&(e.activeTexture(m),V=m)}function ot(m,$){V===null&&Pe();let Z=W[V];Z===void 0&&(Z={type:void 0,texture:void 0},W[V]=Z),(Z.type!==m||Z.texture!==$)&&(e.bindTexture(m,$||oe[m]),Z.type=m,Z.texture=$)}function st(){const m=W[V];m!==void 0&&m.type!==void 0&&(e.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function d(){try{e.compressedTexImage2D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function l(){try{e.texSubImage2D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function U(){try{e.texSubImage3D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function z(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function J(){try{e.texStorage2D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function te(){try{e.texStorage3D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function ce(){try{e.texImage2D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function I(){try{e.texImage3D.apply(e,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function Se(m){ne.equals(m)===!1&&(e.scissor(m.x,m.y,m.z,m.w),ne.copy(m))}function be(m){k.equals(m)===!1&&(e.viewport(m.x,m.y,m.z,m.w),k.copy(m))}function re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),n===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),E={},V=null,W={},g={},_=new WeakMap,w=[],D=null,c=!1,a=null,T=null,A=null,N=null,v=null,P=null,y=null,X=!1,u=null,S=null,q=null,G=null,ae=null,ne.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),o.reset(),x.reset(),h.reset()}return{buffers:{color:o,depth:x,stencil:h},enable:le,disable:M,bindFramebuffer:Fe,drawBuffers:_e,useProgram:Ee,setBlending:Te,setMaterial:he,setFlipSided:Be,setCullFace:ke,setLineWidth:Ke,setPolygonOffset:je,setScissorTest:Ge,activeTexture:Pe,bindTexture:ot,unbindTexture:st,compressedTexImage2D:d,texImage2D:ce,texImage3D:I,texStorage2D:J,texStorage3D:te,texSubImage2D:l,texSubImage3D:U,compressedTexSubImage2D:z,scissor:Se,viewport:be,reset:re}}function wc(e,i,t,n,r,s,p){const o=r.isWebGL2,x=r.maxTextures,h=r.maxCubemapSize,E=r.maxTextureSize,g=r.maxSamples,_=i.has("WEBGL_multisampled_render_to_texture")?i.get("WEBGL_multisampled_render_to_texture"):null,w=/OculusBrowser/g.test(navigator.userAgent),D=new WeakMap;let c;const a=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(d,l){return T?new OffscreenCanvas(d,l):Dn("canvas")}function N(d,l,U,z){let J=1;if((d.width>z||d.height>z)&&(J=z/Math.max(d.width,d.height)),J<1||l===!0)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap){const te=l?hi:Math.floor,ce=te(J*d.width),I=te(J*d.height);c===void 0&&(c=A(ce,I));const Se=U?A(ce,I):c;return Se.width=ce,Se.height=I,Se.getContext("2d").drawImage(d,0,0,ce,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+d.width+"x"+d.height+") to ("+ce+"x"+I+")."),Se}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+d.width+"x"+d.height+")."),d;return d}function v(d){return tn(d.width)&&tn(d.height)}function P(d){return o?!1:d.wrapS!==_t||d.wrapT!==_t||d.minFilter!==Xe&&d.minFilter!==Ze}function y(d,l){return d.generateMipmaps&&l&&d.minFilter!==Xe&&d.minFilter!==Ze}function X(d){e.generateMipmap(d)}function u(d,l,U,z,J=!1){if(o===!1)return l;if(d!==null){if(e[d]!==void 0)return e[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let te=l;return l===e.RED&&(U===e.FLOAT&&(te=e.R32F),U===e.HALF_FLOAT&&(te=e.R16F),U===e.UNSIGNED_BYTE&&(te=e.R8)),l===e.RG&&(U===e.FLOAT&&(te=e.RG32F),U===e.HALF_FLOAT&&(te=e.RG16F),U===e.UNSIGNED_BYTE&&(te=e.RG8)),l===e.RGBA&&(U===e.FLOAT&&(te=e.RGBA32F),U===e.HALF_FLOAT&&(te=e.RGBA16F),U===e.UNSIGNED_BYTE&&(te=z===Ie&&J===!1?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(te=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(te=e.RGB5_A1)),(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)&&i.get("EXT_color_buffer_float"),te}function S(d,l,U){return y(d,U)===!0||d.isFramebufferTexture&&d.minFilter!==Xe&&d.minFilter!==Ze?Math.log2(Math.max(l.width,l.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?l.mipmaps.length:1}function q(d){return d===Xe||d===yi||d===Ii?e.NEAREST:e.LINEAR}function G(d){const l=d.target;l.removeEventListener("dispose",G),se(l),l.isVideoTexture&&D.delete(l)}function ae(d){const l=d.target;l.removeEventListener("dispose",ae),K(l)}function se(d){const l=n.get(d);if(l.__webglInit===void 0)return;const U=d.source,z=a.get(U);if(z){const J=z[l.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(d),Object.keys(z).length===0&&a.delete(U)}n.remove(d)}function L(d){const l=n.get(d);e.deleteTexture(l.__webglTexture);const U=d.source,z=a.get(U);delete z[l.__cacheKey],p.memory.textures--}function K(d){const l=d.texture,U=n.get(d),z=n.get(l);if(z.__webglTexture!==void 0&&(e.deleteTexture(z.__webglTexture),p.memory.textures--),d.depthTexture&&d.depthTexture.dispose(),d.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)e.deleteFramebuffer(U.__webglFramebuffer[J]),U.__webglDepthbuffer&&e.deleteRenderbuffer(U.__webglDepthbuffer[J]);else e.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&e.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&e.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer&&e.deleteRenderbuffer(U.__webglColorRenderbuffer),U.__webglDepthRenderbuffer&&e.deleteRenderbuffer(U.__webglDepthRenderbuffer);if(d.isWebGLMultipleRenderTargets)for(let J=0,te=l.length;J<te;J++){const ce=n.get(l[J]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),p.memory.textures--),n.remove(l[J])}n.remove(l),n.remove(d)}let F=0;function V(){F=0}function W(){const d=F;return d>=x&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+x),F+=1,d}function B(d){const l=[];return l.push(d.wrapS),l.push(d.wrapT),l.push(d.magFilter),l.push(d.minFilter),l.push(d.anisotropy),l.push(d.internalFormat),l.push(d.format),l.push(d.type),l.push(d.generateMipmaps),l.push(d.premultiplyAlpha),l.push(d.flipY),l.push(d.unpackAlignment),l.push(d.encoding),l.join()}function H(d,l){const U=n.get(d);if(d.isVideoTexture&&ot(d),d.isRenderTargetTexture===!1&&d.version>0&&U.__version!==d.version){const z=d.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(U,d,l);return}}t.activeTexture(e.TEXTURE0+l),t.bindTexture(e.TEXTURE_2D,U.__webglTexture)}function ne(d,l){const U=n.get(d);if(d.version>0&&U.__version!==d.version){_e(U,d,l);return}t.activeTexture(e.TEXTURE0+l),t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture)}function k(d,l){const U=n.get(d);if(d.version>0&&U.__version!==d.version){_e(U,d,l);return}t.activeTexture(e.TEXTURE0+l),t.bindTexture(e.TEXTURE_3D,U.__webglTexture)}function ee(d,l){const U=n.get(d);if(d.version>0&&U.__version!==d.version){Ee(U,d,l);return}t.activeTexture(e.TEXTURE0+l),t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture)}const oe={[Ir]:e.REPEAT,[_t]:e.CLAMP_TO_EDGE,[Ur]:e.MIRRORED_REPEAT},le={[Xe]:e.NEAREST,[yi]:e.NEAREST_MIPMAP_NEAREST,[Ii]:e.NEAREST_MIPMAP_LINEAR,[Ze]:e.LINEAR,[Nr]:e.LINEAR_MIPMAP_NEAREST,[Ei]:e.LINEAR_MIPMAP_LINEAR};function M(d,l,U){if(U?(e.texParameteri(d,e.TEXTURE_WRAP_S,oe[l.wrapS]),e.texParameteri(d,e.TEXTURE_WRAP_T,oe[l.wrapT]),(d===e.TEXTURE_3D||d===e.TEXTURE_2D_ARRAY)&&e.texParameteri(d,e.TEXTURE_WRAP_R,oe[l.wrapR]),e.texParameteri(d,e.TEXTURE_MAG_FILTER,le[l.magFilter]),e.texParameteri(d,e.TEXTURE_MIN_FILTER,le[l.minFilter])):(e.texParameteri(d,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(d,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(d===e.TEXTURE_3D||d===e.TEXTURE_2D_ARRAY)&&e.texParameteri(d,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(l.wrapS!==_t||l.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(d,e.TEXTURE_MAG_FILTER,q(l.magFilter)),e.texParameteri(d,e.TEXTURE_MIN_FILTER,q(l.minFilter)),l.minFilter!==Xe&&l.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),i.has("EXT_texture_filter_anisotropic")===!0){const z=i.get("EXT_texture_filter_anisotropic");if(l.type===vt&&i.has("OES_texture_float_linear")===!1||o===!1&&l.type===Vt&&i.has("OES_texture_half_float_linear")===!1)return;(l.anisotropy>1||n.get(l).__currentAnisotropy)&&(e.texParameterf(d,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,r.getMaxAnisotropy())),n.get(l).__currentAnisotropy=l.anisotropy)}}function Fe(d,l){let U=!1;d.__webglInit===void 0&&(d.__webglInit=!0,l.addEventListener("dispose",G));const z=l.source;let J=a.get(z);J===void 0&&(J={},a.set(z,J));const te=B(l);if(te!==d.__cacheKey){J[te]===void 0&&(J[te]={texture:e.createTexture(),usedTimes:0},p.memory.textures++,U=!0),J[te].usedTimes++;const ce=J[d.__cacheKey];ce!==void 0&&(J[d.__cacheKey].usedTimes--,ce.usedTimes===0&&L(l)),d.__cacheKey=te,d.__webglTexture=J[te].texture}return U}function _e(d,l,U){let z=e.TEXTURE_2D;l.isDataArrayTexture&&(z=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(z=e.TEXTURE_3D);const J=Fe(d,l),te=l.source;if(t.activeTexture(e.TEXTURE0+U),t.bindTexture(z,d.__webglTexture),te.version!==te.__currentVersion||J===!0){e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);const ce=P(l)&&v(l.image)===!1;let I=N(l.image,ce,!1,E);I=st(l,I);const Se=v(I)||o,be=s.convert(l.format,l.encoding);let re=s.convert(l.type),m=u(l.internalFormat,be,re,l.encoding,l.isVideoTexture);M(z,l,Se);let $;const Z=l.mipmaps,de=o&&l.isVideoTexture!==!0,ie=d.__version===void 0||J===!0,fe=S(l,I,Se);if(l.isDepthTexture)m=e.DEPTH_COMPONENT,o?l.type===vt?m=e.DEPTH_COMPONENT32F:l.type===Zt?m=e.DEPTH_COMPONENT24:l.type===Ct?m=e.DEPTH24_STENCIL8:m=e.DEPTH_COMPONENT16:l.type===vt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),l.format===Et&&m===e.DEPTH_COMPONENT&&l.type!==zt&&l.type!==Zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),l.type=zt,re=s.convert(l.type)),l.format===yt&&m===e.DEPTH_COMPONENT&&(m=e.DEPTH_STENCIL,l.type!==Ct&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),l.type=Ct,re=s.convert(l.type))),ie&&(de?t.texStorage2D(e.TEXTURE_2D,1,m,I.width,I.height):t.texImage2D(e.TEXTURE_2D,0,m,I.width,I.height,0,be,re,null));else if(l.isDataTexture)if(Z.length>0&&Se){de&&ie&&t.texStorage2D(e.TEXTURE_2D,fe,m,Z[0].width,Z[0].height);for(let Y=0,ue=Z.length;Y<ue;Y++)$=Z[Y],de?t.texSubImage2D(e.TEXTURE_2D,Y,0,0,$.width,$.height,be,re,$.data):t.texImage2D(e.TEXTURE_2D,Y,m,$.width,$.height,0,be,re,$.data);l.generateMipmaps=!1}else de?(ie&&t.texStorage2D(e.TEXTURE_2D,fe,m,I.width,I.height),t.texSubImage2D(e.TEXTURE_2D,0,0,0,I.width,I.height,be,re,I.data)):t.texImage2D(e.TEXTURE_2D,0,m,I.width,I.height,0,be,re,I.data);else if(l.isCompressedTexture){de&&ie&&t.texStorage2D(e.TEXTURE_2D,fe,m,Z[0].width,Z[0].height);for(let Y=0,ue=Z.length;Y<ue;Y++)$=Z[Y],l.format!==rt?be!==null?de?t.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,$.width,$.height,be,$.data):t.compressedTexImage2D(e.TEXTURE_2D,Y,m,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(e.TEXTURE_2D,Y,0,0,$.width,$.height,be,re,$.data):t.texImage2D(e.TEXTURE_2D,Y,m,$.width,$.height,0,be,re,$.data)}else if(l.isDataArrayTexture)de?(ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,m,I.width,I.height,I.depth),t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,be,re,I.data)):t.texImage3D(e.TEXTURE_2D_ARRAY,0,m,I.width,I.height,I.depth,0,be,re,I.data);else if(l.isData3DTexture)de?(ie&&t.texStorage3D(e.TEXTURE_3D,fe,m,I.width,I.height,I.depth),t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,be,re,I.data)):t.texImage3D(e.TEXTURE_3D,0,m,I.width,I.height,I.depth,0,be,re,I.data);else if(l.isFramebufferTexture){if(ie)if(de)t.texStorage2D(e.TEXTURE_2D,fe,m,I.width,I.height);else{let Y=I.width,ue=I.height;for(let Ce=0;Ce<fe;Ce++)t.texImage2D(e.TEXTURE_2D,Ce,m,Y,ue,0,be,re,null),Y>>=1,ue>>=1}}else if(Z.length>0&&Se){de&&ie&&t.texStorage2D(e.TEXTURE_2D,fe,m,Z[0].width,Z[0].height);for(let Y=0,ue=Z.length;Y<ue;Y++)$=Z[Y],de?t.texSubImage2D(e.TEXTURE_2D,Y,0,0,be,re,$):t.texImage2D(e.TEXTURE_2D,Y,m,be,re,$);l.generateMipmaps=!1}else de?(ie&&t.texStorage2D(e.TEXTURE_2D,fe,m,I.width,I.height),t.texSubImage2D(e.TEXTURE_2D,0,0,0,be,re,I)):t.texImage2D(e.TEXTURE_2D,0,m,be,re,I);y(l,Se)&&X(z),te.__currentVersion=te.version,l.onUpdate&&l.onUpdate(l)}d.__version=l.version}function Ee(d,l,U){if(l.image.length!==6)return;const z=Fe(d,l),J=l.source;if(t.activeTexture(e.TEXTURE0+U),t.bindTexture(e.TEXTURE_CUBE_MAP,d.__webglTexture),J.version!==J.__currentVersion||z===!0){e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);const te=l.isCompressedTexture||l.image[0].isCompressedTexture,ce=l.image[0]&&l.image[0].isDataTexture,I=[];for(let Y=0;Y<6;Y++)!te&&!ce?I[Y]=N(l.image[Y],!1,!0,h):I[Y]=ce?l.image[Y].image:l.image[Y],I[Y]=st(l,I[Y]);const Se=I[0],be=v(Se)||o,re=s.convert(l.format,l.encoding),m=s.convert(l.type),$=u(l.internalFormat,re,m,l.encoding),Z=o&&l.isVideoTexture!==!0,de=d.__version===void 0;let ie=S(l,Se,be);M(e.TEXTURE_CUBE_MAP,l,be);let fe;if(te){Z&&de&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ie,$,Se.width,Se.height);for(let Y=0;Y<6;Y++){fe=I[Y].mipmaps;for(let ue=0;ue<fe.length;ue++){const Ce=fe[ue];l.format!==rt?re!==null?Z?t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,0,0,Ce.width,Ce.height,re,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,$,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,0,0,Ce.width,Ce.height,re,m,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue,$,Ce.width,Ce.height,0,re,m,Ce.data)}}}else{fe=l.mipmaps,Z&&de&&(fe.length>0&&ie++,t.texStorage2D(e.TEXTURE_CUBE_MAP,ie,$,I[0].width,I[0].height));for(let Y=0;Y<6;Y++)if(ce){Z?t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,I[Y].width,I[Y].height,re,m,I[Y].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$,I[Y].width,I[Y].height,0,re,m,I[Y].data);for(let ue=0;ue<fe.length;ue++){const Ae=fe[ue].image[Y].image;Z?t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,0,0,Ae.width,Ae.height,re,m,Ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,$,Ae.width,Ae.height,0,re,m,Ae.data)}}else{Z?t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,re,m,I[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$,re,m,I[Y]);for(let ue=0;ue<fe.length;ue++){const Ce=fe[ue];Z?t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,0,0,re,m,Ce.image[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue+1,$,re,m,Ce.image[Y])}}}y(l,be)&&X(e.TEXTURE_CUBE_MAP),J.__currentVersion=J.version,l.onUpdate&&l.onUpdate(l)}d.__version=l.version}function Q(d,l,U,z,J){const te=s.convert(U.format,U.encoding),ce=s.convert(U.type),I=u(U.internalFormat,te,ce,U.encoding);n.get(l).__hasExternalTextures||(J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?t.texImage3D(J,0,I,l.width,l.height,l.depth,0,te,ce,null):t.texImage2D(J,0,I,l.width,l.height,0,te,ce,null)),t.bindFramebuffer(e.FRAMEBUFFER,d),Pe(l)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,J,n.get(U).__webglTexture,0,Ge(l)):e.framebufferTexture2D(e.FRAMEBUFFER,z,J,n.get(U).__webglTexture,0),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(d,l,U){if(e.bindRenderbuffer(e.RENDERBUFFER,d),l.depthBuffer&&!l.stencilBuffer){let z=e.DEPTH_COMPONENT16;if(U||Pe(l)){const J=l.depthTexture;J&&J.isDepthTexture&&(J.type===vt?z=e.DEPTH_COMPONENT32F:J.type===Zt&&(z=e.DEPTH_COMPONENT24));const te=Ge(l);Pe(l)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,z,l.width,l.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,te,z,l.width,l.height)}else e.renderbufferStorage(e.RENDERBUFFER,z,l.width,l.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,d)}else if(l.depthBuffer&&l.stencilBuffer){const z=Ge(l);U&&Pe(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,z,e.DEPTH24_STENCIL8,l.width,l.height):Pe(l)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z,e.DEPTH24_STENCIL8,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,d)}else{const z=l.isWebGLMultipleRenderTargets===!0?l.texture[0]:l.texture,J=s.convert(z.format,z.encoding),te=s.convert(z.type),ce=u(z.internalFormat,J,te,z.encoding),I=Ge(l);U&&Pe(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,I,ce,l.width,l.height):Pe(l)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I,ce,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,ce,l.width,l.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(d,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,d),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(l.depthTexture).__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),H(l.depthTexture,0);const z=n.get(l.depthTexture).__webglTexture,J=Ge(l);if(l.depthTexture.format===Et)Pe(l)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0);else if(l.depthTexture.format===yt)Pe(l)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function he(d){const l=n.get(d),U=d.isWebGLCubeRenderTarget===!0;if(d.depthTexture&&!l.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Te(l.__webglFramebuffer,d)}else if(U){l.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[z]),l.__webglDepthbuffer[z]=e.createRenderbuffer(),ye(l.__webglDepthbuffer[z],d,!1)}else t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer=e.createRenderbuffer(),ye(l.__webglDepthbuffer,d,!1);t.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(d,l,U){const z=n.get(d);l!==void 0&&Q(z.__webglFramebuffer,d,d.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),U!==void 0&&he(d)}function ke(d){const l=d.texture,U=n.get(d),z=n.get(l);d.addEventListener("dispose",ae),d.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=l.version,p.memory.textures++);const J=d.isWebGLCubeRenderTarget===!0,te=d.isWebGLMultipleRenderTargets===!0,ce=v(d)||o;if(J){U.__webglFramebuffer=[];for(let I=0;I<6;I++)U.__webglFramebuffer[I]=e.createFramebuffer()}else if(U.__webglFramebuffer=e.createFramebuffer(),te)if(r.drawBuffers){const I=d.texture;for(let Se=0,be=I.length;Se<be;Se++){const re=n.get(I[Se]);re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture(),p.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(o&&d.samples>0&&Pe(d)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer);const I=s.convert(l.format,l.encoding),Se=s.convert(l.type),be=u(l.internalFormat,I,Se,l.encoding),re=Ge(d);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,be,d.width,d.height),t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,U.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),d.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(U.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}if(J){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),M(e.TEXTURE_CUBE_MAP,l,ce);for(let I=0;I<6;I++)Q(U.__webglFramebuffer[I],d,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I);y(l,ce)&&X(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const I=d.texture;for(let Se=0,be=I.length;Se<be;Se++){const re=I[Se],m=n.get(re);t.bindTexture(e.TEXTURE_2D,m.__webglTexture),M(e.TEXTURE_2D,re,ce),Q(U.__webglFramebuffer,d,re,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D),y(re,ce)&&X(e.TEXTURE_2D)}t.unbindTexture()}else{let I=e.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(o?I=d.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,z.__webglTexture),M(I,l,ce),Q(U.__webglFramebuffer,d,l,e.COLOR_ATTACHMENT0,I),y(l,ce)&&X(I),t.unbindTexture()}d.depthBuffer&&he(d)}function Ke(d){const l=v(d)||o,U=d.isWebGLMultipleRenderTargets===!0?d.texture:[d.texture];for(let z=0,J=U.length;z<J;z++){const te=U[z];if(y(te,l)){const ce=d.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,I=n.get(te).__webglTexture;t.bindTexture(ce,I),X(ce),t.unbindTexture()}}}function je(d){if(o&&d.samples>0&&Pe(d)===!1){const l=d.width,U=d.height;let z=e.COLOR_BUFFER_BIT;const J=[e.COLOR_ATTACHMENT0],te=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;d.depthBuffer&&J.push(te);const ce=n.get(d),I=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;I===!1&&(d.depthBuffer&&(z|=e.DEPTH_BUFFER_BIT),d.stencilBuffer&&(z|=e.STENCIL_BUFFER_BIT)),t.bindFramebuffer(e.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer),I===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[te]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[te])),e.blitFramebuffer(0,0,l,U,0,0,l,U,z,e.NEAREST),w&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,J),t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ge(d){return Math.min(g,d.samples)}function Pe(d){const l=n.get(d);return o&&d.samples>0&&i.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function ot(d){const l=p.render.frame;D.get(d)!==l&&(D.set(d,l),d.update())}function st(d,l){const U=d.encoding,z=d.format,J=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||d.format===pi||U!==Pt&&(U===Ie?o===!1?i.has("EXT_sRGB")===!0&&z===rt?(d.format=pi,d.minFilter=Ze,d.generateMipmaps=!1):l=na.sRGBToLinear(l):(z!==rt||J!==It)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),l}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=Be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Pe}function Cc(e,i,t){const n=t.isWebGL2;function r(s,p=null){let o;if(s===It)return e.UNSIGNED_BYTE;if(s===Fr)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Or)return e.UNSIGNED_SHORT_5_5_5_1;if(s===Gr)return e.BYTE;if(s===Br)return e.SHORT;if(s===zt)return e.UNSIGNED_SHORT;if(s===Hr)return e.INT;if(s===Zt)return e.UNSIGNED_INT;if(s===vt)return e.FLOAT;if(s===Vt)return n?e.HALF_FLOAT:(o=i.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Vr)return e.ALPHA;if(s===rt)return e.RGBA;if(s===Wr)return e.LUMINANCE;if(s===zr)return e.LUMINANCE_ALPHA;if(s===Et)return e.DEPTH_COMPONENT;if(s===yt)return e.DEPTH_STENCIL;if(s===kr)return e.RED;if(s===Xr)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),e.RGBA;if(s===pi)return o=i.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===qr)return e.RED_INTEGER;if(s===Kr)return e.RG;if(s===Yr)return e.RG_INTEGER;if(s===Zr)return e.RGBA_INTEGER;if(s===ii||s===ni||s===ri||s===ai)if(p===Ie)if(o=i.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ii)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ni)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ri)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ai)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=i.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ii)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ni)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ri)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ai)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ui||s===Ni||s===Fi||s===Oi)if(o=i.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ui)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ni)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fi)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jr)return o=i.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gi||s===Bi)if(o=i.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Gi)return p===Ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Bi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hi||s===Vi||s===Wi||s===zi||s===ki||s===Xi||s===qi||s===Ki||s===Yi||s===Zi||s===ji||s===$i||s===Ji||s===Qi)if(o=i.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Hi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ki)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ki)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ji)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$i)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ji)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qi)return p===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===en)if(o=i.get("EXT_texture_compression_bptc"),o!==null){if(s===en)return p===Ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ct?n?e.UNSIGNED_INT_24_8:(o=i.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[s]!==void 0?e[s]:null}return{convert:r}}class kn extends it{constructor(i=[]){super(),this.cameras=i}}kn.prototype.isArrayCamera=!0;const Dc={type:"move"};class fi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Me),this._grip}dispatchEvent(i){return this._targetRay!==null&&this._targetRay.dispatchEvent(i),this._grip!==null&&this._grip.dispatchEvent(i),this._hand!==null&&this._hand.dispatchEvent(i),this}disconnect(i){return this.dispatchEvent({type:"disconnected",data:i}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(i,t,n){let r=null,s=null,p=null;const o=this._targetRay,x=this._grip,h=this._hand;if(i&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(i.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dc))),h&&i.hand){p=!0;for(const c of i.hand.values()){const a=t.getJointPose(c,n);if(h.joints[c.jointName]===void 0){const A=new qt;A.matrixAutoUpdate=!1,A.visible=!1,h.joints[c.jointName]=A,h.add(A)}const T=h.joints[c.jointName];a!==null&&(T.matrix.fromArray(a.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=a.radius),T.visible=a!==null}const E=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=E.position.distanceTo(g.position),w=.02,D=.005;h.inputState.pinching&&_>w+D?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:i.handedness,target:this})):!h.inputState.pinching&&_<=w-D&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:i.handedness,target:this}))}else x!==null&&i.gripSpace&&(s=t.getPose(i.gripSpace,n),s!==null&&(x.matrix.fromArray(s.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),s.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(s.linearVelocity)):x.hasLinearVelocity=!1,s.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(s.angularVelocity)):x.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),x!==null&&(x.visible=s!==null),h!==null&&(h.visible=p!==null),this}}class Xn extends kt{constructor(i,t,n,r,s,p,o,x,h,E){if(E=E!==void 0?E:Et,E!==Et&&E!==yt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&E===Et&&(n=zt),n===void 0&&E===yt&&(n=Ct),super(null,r,s,p,o,x,E,n,h),this.image={width:i,height:t},this.magFilter=o!==void 0?o:Xe,this.minFilter=x!==void 0?x:Xe,this.flipY=!1,this.generateMipmaps=!1}}Xn.prototype.isDepthTexture=!0;class Pc extends Ln{constructor(i,t){super();const n=this;let r=null,s=1,p=null,o="local-floor",x=null,h=null,E=null,g=null,_=null,w=null;const D=t.getContextAttributes();let c=null,a=null;const T=[],A=new Map,N=new it;N.layers.enable(1),N.viewport=new qe;const v=new it;v.layers.enable(2),v.viewport=new qe;const P=[N,v],y=new kn;y.layers.enable(1),y.layers.enable(2);let X=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let H=T[B];return H===void 0&&(H=new fi,T[B]=H),H.getTargetRaySpace()},this.getControllerGrip=function(B){let H=T[B];return H===void 0&&(H=new fi,T[B]=H),H.getGripSpace()},this.getHand=function(B){let H=T[B];return H===void 0&&(H=new fi,T[B]=H),H.getHandSpace()};function S(B){const H=A.get(B.inputSource);H&&H.dispatchEvent({type:B.type,data:B.inputSource})}function q(){A.forEach(function(B,H){B.disconnect(H)}),A.clear(),X=null,u=null,i.setRenderTarget(c),_=null,g=null,E=null,r=null,a=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||p},this.setReferenceSpace=function(B){x=B},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return E},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(c=i.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||i.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?D.antialias:!0,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:_}),a=new ct(_.framebufferWidth,_.framebufferHeight,{format:rt,type:It,encoding:i.outputEncoding})}else{let H=null,ne=null,k=null;D.depth&&(k=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=D.stencil?yt:Et,ne=D.stencil?Ct:zt);const ee={colorFormat:i.outputEncoding===Ie?t.SRGB8_ALPHA8:t.RGBA8,depthFormat:k,scaleFactor:s};E=new XRWebGLBinding(r,t),g=E.createProjectionLayer(ee),r.updateRenderState({layers:[g]}),a=new ct(g.textureWidth,g.textureHeight,{format:rt,type:It,depthTexture:new Xn(g.textureWidth,g.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:D.stencil,encoding:i.outputEncoding,samples:D.antialias?4:0});const oe=i.properties.get(a);oe.__ignoreDepthValues=g.ignoreDepthValues}a.isXRRenderTarget=!0,this.setFoveation(1),p=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(B){const H=r.inputSources;for(let ne=0;ne<H.length;ne++){const k=H[ne].handedness==="right"?1:0;A.set(H[ne],T[k])}for(let ne=0;ne<B.removed.length;ne++){const k=B.removed[ne],ee=A.get(k);ee&&(ee.dispatchEvent({type:"disconnected",data:k}),A.delete(k))}for(let ne=0;ne<B.added.length;ne++){const k=B.added[ne],ee=A.get(k);ee&&ee.dispatchEvent({type:"connected",data:k})}}const ae=new Me,se=new Me;function L(B,H,ne){ae.setFromMatrixPosition(H.matrixWorld),se.setFromMatrixPosition(ne.matrixWorld);const k=ae.distanceTo(se),ee=H.projectionMatrix.elements,oe=ne.projectionMatrix.elements,le=ee[14]/(ee[10]-1),M=ee[14]/(ee[10]+1),Fe=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],Ee=(ee[8]-1)/ee[0],Q=(oe[8]+1)/oe[0],ye=le*Ee,Te=le*Q,he=k/(-Ee+Q),Be=he*-Ee;H.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Be),B.translateZ(he),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ke=le+he,Ke=M+he,je=ye-Be,Ge=Te+(k-Be),Pe=Fe*M/Ke*ke,ot=_e*M/Ke*ke;B.projectionMatrix.makePerspective(je,Ge,Pe,ot,ke,Ke)}function K(B,H){H===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(H.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;y.near=v.near=N.near=B.near,y.far=v.far=N.far=B.far,(X!==y.near||u!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),X=y.near,u=y.far);const H=B.parent,ne=y.cameras;K(y,H);for(let ee=0;ee<ne.length;ee++)K(ne[ee],H);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),B.position.copy(y.position),B.quaternion.copy(y.quaternion),B.scale.copy(y.scale),B.matrix.copy(y.matrix),B.matrixWorld.copy(y.matrixWorld);const k=B.children;for(let ee=0,oe=k.length;ee<oe;ee++)k[ee].updateMatrixWorld(!0);ne.length===2?L(y,N,v):y.projectionMatrix.copy(N.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function(B){g!==null&&(g.fixedFoveation=B),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=B)};let F=null;function V(B,H){if(h=H.getViewerPose(x||p),w=H,h!==null){const k=h.views;_!==null&&(i.setRenderTargetFramebuffer(a,_.framebuffer),i.setRenderTarget(a));let ee=!1;k.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let oe=0;oe<k.length;oe++){const le=k[oe];let M=null;if(_!==null)M=_.getViewport(le);else{const _e=E.getViewSubImage(g,le);M=_e.viewport,oe===0&&(i.setRenderTargetTextures(a,_e.colorTexture,g.ignoreDepthValues?void 0:_e.depthStencilTexture),i.setRenderTarget(a))}const Fe=P[oe];Fe.matrix.fromArray(le.transform.matrix),Fe.projectionMatrix.fromArray(le.projectionMatrix),Fe.viewport.set(M.x,M.y,M.width,M.height),oe===0&&y.matrix.copy(Fe.matrix),ee===!0&&y.cameras.push(Fe)}}const ne=r.inputSources;for(let k=0;k<T.length;k++){const ee=ne[k],oe=A.get(ee);oe!==void 0&&oe.update(ee,H,x||p)}F&&F(B,H),w=null}const W=new yn;W.setAnimationLoop(V),this.setAnimationLoop=function(B){F=B},this.dispose=function(){}}}function yc(e,i){function t(c,a){c.fogColor.value.copy(a.color),a.isFog?(c.fogNear.value=a.near,c.fogFar.value=a.far):a.isFogExp2&&(c.fogDensity.value=a.density)}function n(c,a,T,A,N){a.isMeshBasicMaterial||a.isMeshLambertMaterial?r(c,a):a.isMeshToonMaterial?(r(c,a),E(c,a)):a.isMeshPhongMaterial?(r(c,a),h(c,a)):a.isMeshStandardMaterial?(r(c,a),g(c,a),a.isMeshPhysicalMaterial&&_(c,a,N)):a.isMeshMatcapMaterial?(r(c,a),w(c,a)):a.isMeshDepthMaterial?r(c,a):a.isMeshDistanceMaterial?(r(c,a),D(c,a)):a.isMeshNormalMaterial?r(c,a):a.isLineBasicMaterial?(s(c,a),a.isLineDashedMaterial&&p(c,a)):a.isPointsMaterial?o(c,a,T,A):a.isSpriteMaterial?x(c,a):a.isShadowMaterial?(c.color.value.copy(a.color),c.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}function r(c,a){c.opacity.value=a.opacity,a.color&&c.diffuse.value.copy(a.color),a.emissive&&c.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(c.map.value=a.map),a.alphaMap&&(c.alphaMap.value=a.alphaMap),a.bumpMap&&(c.bumpMap.value=a.bumpMap,c.bumpScale.value=a.bumpScale,a.side===at&&(c.bumpScale.value*=-1)),a.displacementMap&&(c.displacementMap.value=a.displacementMap,c.displacementScale.value=a.displacementScale,c.displacementBias.value=a.displacementBias),a.emissiveMap&&(c.emissiveMap.value=a.emissiveMap),a.normalMap&&(c.normalMap.value=a.normalMap,c.normalScale.value.copy(a.normalScale),a.side===at&&c.normalScale.value.negate()),a.specularMap&&(c.specularMap.value=a.specularMap),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest);const T=i.get(a).envMap;if(T&&(c.envMap.value=T,c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=a.reflectivity,c.ior.value=a.ior,c.refractionRatio.value=a.refractionRatio),a.lightMap){c.lightMap.value=a.lightMap;const v=e.physicallyCorrectLights!==!0?Math.PI:1;c.lightMapIntensity.value=a.lightMapIntensity*v}a.aoMap&&(c.aoMap.value=a.aoMap,c.aoMapIntensity.value=a.aoMapIntensity);let A;a.map?A=a.map:a.specularMap?A=a.specularMap:a.displacementMap?A=a.displacementMap:a.normalMap?A=a.normalMap:a.bumpMap?A=a.bumpMap:a.roughnessMap?A=a.roughnessMap:a.metalnessMap?A=a.metalnessMap:a.alphaMap?A=a.alphaMap:a.emissiveMap?A=a.emissiveMap:a.clearcoatMap?A=a.clearcoatMap:a.clearcoatNormalMap?A=a.clearcoatNormalMap:a.clearcoatRoughnessMap?A=a.clearcoatRoughnessMap:a.specularIntensityMap?A=a.specularIntensityMap:a.specularColorMap?A=a.specularColorMap:a.transmissionMap?A=a.transmissionMap:a.thicknessMap?A=a.thicknessMap:a.sheenColorMap?A=a.sheenColorMap:a.sheenRoughnessMap&&(A=a.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),c.uvTransform.value.copy(A.matrix));let N;a.aoMap?N=a.aoMap:a.lightMap&&(N=a.lightMap),N!==void 0&&(N.isWebGLRenderTarget&&(N=N.texture),N.matrixAutoUpdate===!0&&N.updateMatrix(),c.uv2Transform.value.copy(N.matrix))}function s(c,a){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity}function p(c,a){c.dashSize.value=a.dashSize,c.totalSize.value=a.dashSize+a.gapSize,c.scale.value=a.scale}function o(c,a,T,A){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity,c.size.value=a.size*T,c.scale.value=A*.5,a.map&&(c.map.value=a.map),a.alphaMap&&(c.alphaMap.value=a.alphaMap),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest);let N;a.map?N=a.map:a.alphaMap&&(N=a.alphaMap),N!==void 0&&(N.matrixAutoUpdate===!0&&N.updateMatrix(),c.uvTransform.value.copy(N.matrix))}function x(c,a){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity,c.rotation.value=a.rotation,a.map&&(c.map.value=a.map),a.alphaMap&&(c.alphaMap.value=a.alphaMap),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest);let T;a.map?T=a.map:a.alphaMap&&(T=a.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),c.uvTransform.value.copy(T.matrix))}function h(c,a){c.specular.value.copy(a.specular),c.shininess.value=Math.max(a.shininess,1e-4)}function E(c,a){a.gradientMap&&(c.gradientMap.value=a.gradientMap)}function g(c,a){c.roughness.value=a.roughness,c.metalness.value=a.metalness,a.roughnessMap&&(c.roughnessMap.value=a.roughnessMap),a.metalnessMap&&(c.metalnessMap.value=a.metalnessMap),i.get(a).envMap&&(c.envMapIntensity.value=a.envMapIntensity)}function _(c,a,T){c.ior.value=a.ior,a.sheen>0&&(c.sheenColor.value.copy(a.sheenColor).multiplyScalar(a.sheen),c.sheenRoughness.value=a.sheenRoughness,a.sheenColorMap&&(c.sheenColorMap.value=a.sheenColorMap),a.sheenRoughnessMap&&(c.sheenRoughnessMap.value=a.sheenRoughnessMap)),a.clearcoat>0&&(c.clearcoat.value=a.clearcoat,c.clearcoatRoughness.value=a.clearcoatRoughness,a.clearcoatMap&&(c.clearcoatMap.value=a.clearcoatMap),a.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=a.clearcoatRoughnessMap),a.clearcoatNormalMap&&(c.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),c.clearcoatNormalMap.value=a.clearcoatNormalMap,a.side===at&&c.clearcoatNormalScale.value.negate())),a.transmission>0&&(c.transmission.value=a.transmission,c.transmissionSamplerMap.value=T.texture,c.transmissionSamplerSize.value.set(T.width,T.height),a.transmissionMap&&(c.transmissionMap.value=a.transmissionMap),c.thickness.value=a.thickness,a.thicknessMap&&(c.thicknessMap.value=a.thicknessMap),c.attenuationDistance.value=a.attenuationDistance,c.attenuationColor.value.copy(a.attenuationColor)),c.specularIntensity.value=a.specularIntensity,c.specularColor.value.copy(a.specularColor),a.specularIntensityMap&&(c.specularIntensityMap.value=a.specularIntensityMap),a.specularColorMap&&(c.specularColorMap.value=a.specularColorMap)}function w(c,a){a.matcap&&(c.matcap.value=a.matcap)}function D(c,a){c.referencePosition.value.copy(a.referencePosition),c.nearDistance.value=a.nearDistance,c.farDistance.value=a.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ic(){const e=Dn("canvas");return e.style.display="block",e}function Uc(e={}){const i=e.canvas!==void 0?e.canvas:Ic(),t=e.context!==void 0?e.context:null,n=e.depth!==void 0?e.depth:!0,r=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,p=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,o=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,x=e.powerPreference!==void 0?e.powerPreference:"default",h=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let E;t!==null?E=t.getContextAttributes().alpha:E=e.alpha!==void 0?e.alpha:!1;let g=null,_=null;const w=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pt,this.physicallyCorrectLights=!1,this.toneMapping=lt,this.toneMappingExposure=1;const c=this;let a=!1,T=0,A=0,N=null,v=-1,P=null;const y=new qe,X=new qe;let u=null,S=i.width,q=i.height,G=1,ae=null,se=null;const L=new qe(0,0,S,q),K=new qe(0,0,S,q);let F=!1;const V=new Rn;let W=!1,B=!1,H=null;const ne=new mi,k=new Ye,ee=new Me,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return N===null?G:1}let M=t;function Fe(f,b){for(let C=0;C<f.length;C++){const R=f[C],O=i.getContext(R,b);if(O!==null)return O}return null}try{const f={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:p,preserveDrawingBuffer:o,powerPreference:x,failIfMajorPerformanceCaveat:h};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$r}`),i.addEventListener("webglcontextlost",m,!1),i.addEventListener("webglcontextrestored",$,!1),M===null){const b=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&b.shift(),M=Fe(b,f),M===null)throw Fe(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let _e,Ee,Q,ye,Te,he,Be,ke,Ke,je,Ge,Pe,ot,st,d,l,U,z,J,te,ce,I,Se;function be(){_e=new Zs(M),Ee=new Ws(M,_e,e),_e.init(Ee),I=new Cc(M,_e,Ee),Q=new Lc(M,_e,Ee),ye=new Js(M),Te=new mc,he=new wc(M,_e,Q,Te,Ee,I,ye),Be=new Xs(c),ke=new Ys(c),Ke=new fa(M,Ee),Se=new Hs(M,_e,Ke,Ee),je=new js(M,Ke,ye,Se),Ge=new il(M,je,Ke,ye),J=new tl(M,Ee,he),l=new zs(Te),Pe=new hc(c,Be,ke,_e,Ee,Se,l),ot=new yc(c,Te),st=new gc,d=new Tc(_e,Ee),z=new Bs(c,Be,Q,Ge,E,p),U=new Rc(c,Ge,Ee),te=new Vs(M,_e,ye,Ee),ce=new $s(M,_e,ye,Ee),ye.programs=Pe.programs,c.capabilities=Ee,c.extensions=_e,c.properties=Te,c.renderLists=st,c.shadowMap=U,c.state=Q,c.info=ye}be();const re=new Pc(c,M);this.xr=re,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const f=_e.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=_e.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(f){f!==void 0&&(G=f,this.setSize(S,q,!1))},this.getSize=function(f){return f.set(S,q)},this.setSize=function(f,b,C){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=f,q=b,i.width=Math.floor(f*G),i.height=Math.floor(b*G),C!==!1&&(i.style.width=f+"px",i.style.height=b+"px"),this.setViewport(0,0,f,b)},this.getDrawingBufferSize=function(f){return f.set(S*G,q*G).floor()},this.setDrawingBufferSize=function(f,b,C){S=f,q=b,G=C,i.width=Math.floor(f*C),i.height=Math.floor(b*C),this.setViewport(0,0,f,b)},this.getCurrentViewport=function(f){return f.copy(y)},this.getViewport=function(f){return f.copy(L)},this.setViewport=function(f,b,C,R){f.isVector4?L.set(f.x,f.y,f.z,f.w):L.set(f,b,C,R),Q.viewport(y.copy(L).multiplyScalar(G).floor())},this.getScissor=function(f){return f.copy(K)},this.setScissor=function(f,b,C,R){f.isVector4?K.set(f.x,f.y,f.z,f.w):K.set(f,b,C,R),Q.scissor(X.copy(K).multiplyScalar(G).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(f){Q.setScissorTest(F=f)},this.setOpaqueSort=function(f){ae=f},this.setTransparentSort=function(f){se=f},this.getClearColor=function(f){return f.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(f=!0,b=!0,C=!0){let R=0;f&&(R|=M.COLOR_BUFFER_BIT),b&&(R|=M.DEPTH_BUFFER_BIT),C&&(R|=M.STENCIL_BUFFER_BIT),M.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",m,!1),i.removeEventListener("webglcontextrestored",$,!1),st.dispose(),d.dispose(),Te.dispose(),Be.dispose(),ke.dispose(),Ge.dispose(),Se.dispose(),Pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",ue),re.removeEventListener("sessionend",Ce),H&&(H.dispose(),H=null),Ae.stop()};function m(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),a=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),a=!1;const f=ye.autoReset,b=U.enabled,C=U.autoUpdate,R=U.needsUpdate,O=U.type;be(),ye.autoReset=f,U.enabled=b,U.autoUpdate=C,U.needsUpdate=R,U.type=O}function Z(f){const b=f.target;b.removeEventListener("dispose",Z),de(b)}function de(f){ie(f),Te.remove(f)}function ie(f){const b=Te.get(f).programs;b!==void 0&&(b.forEach(function(C){Pe.releaseProgram(C)}),f.isShaderMaterial&&Pe.releaseShaderCache(f))}this.renderBufferDirect=function(f,b,C,R,O,pe){b===null&&(b=oe);const me=O.isMesh&&O.matrixWorld.determinant()<0,ve=Yn(f,b,C,R,O);Q.setMaterial(R,me);let ge=C.index;const De=C.attributes.position;if(ge===null){if(De===void 0||De.count===0)return}else if(ge.count===0)return;let Re=1;R.wireframe===!0&&(ge=je.getWireframeAttribute(C),Re=2),Se.setup(O,R,ve,C,ge);let Le,Ue=te;ge!==null&&(Le=Ke.get(ge),Ue=ce,Ue.setIndex(Le));const ht=ge!==null?ge.count:De.count,xt=C.drawRange.start*Re,Mt=C.drawRange.count*Re,Qe=pe!==null?pe.start*Re:0,we=pe!==null?pe.count*Re:1/0,Tt=Math.max(xt,Qe),Oe=Math.min(ht,xt+Mt,Qe+we)-1,et=Math.max(0,Oe-Tt+1);if(et!==0){if(O.isMesh)R.wireframe===!0?(Q.setLineWidth(R.wireframeLinewidth*le()),Ue.setMode(M.LINES)):Ue.setMode(M.TRIANGLES);else if(O.isLine){let ft=R.linewidth;ft===void 0&&(ft=1),Q.setLineWidth(ft*le()),O.isLineSegments?Ue.setMode(M.LINES):O.isLineLoop?Ue.setMode(M.LINE_LOOP):Ue.setMode(M.LINE_STRIP)}else O.isPoints?Ue.setMode(M.POINTS):O.isSprite&&Ue.setMode(M.TRIANGLES);if(O.isInstancedMesh)Ue.renderInstances(Tt,et,O.count);else if(C.isInstancedBufferGeometry){const ft=Math.min(C.instanceCount,C._maxInstanceCount);Ue.renderInstances(Tt,et,ft)}else Ue.render(Tt,et)}},this.compile=function(f,b){_=d.get(f),_.init(),D.push(_),f.traverseVisible(function(C){C.isLight&&C.layers.test(b.layers)&&(_.pushLight(C),C.castShadow&&_.pushShadow(C))}),_.setupLights(c.physicallyCorrectLights),f.traverse(function(C){const R=C.material;if(R)if(Array.isArray(R))for(let O=0;O<R.length;O++){const pe=R[O];Qt(pe,f,C)}else Qt(R,f,C)}),D.pop(),_=null};let fe=null;function Y(f){fe&&fe(f)}function ue(){Ae.stop()}function Ce(){Ae.start()}const Ae=new yn;Ae.setAnimationLoop(Y),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(f){fe=f,re.setAnimationLoop(f),f===null?Ae.stop():Ae.start()},re.addEventListener("sessionstart",ue),re.addEventListener("sessionend",Ce),this.render=function(f,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(a===!0)return;f.autoUpdate===!0&&f.updateMatrixWorld(),b.parent===null&&b.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(b),b=re.getCamera()),f.isScene===!0&&f.onBeforeRender(c,f,b,N),_=d.get(f,D.length),_.init(),D.push(_),ne.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),V.setFromProjectionMatrix(ne),B=this.localClippingEnabled,W=l.init(this.clippingPlanes,B,b),g=st.get(f,w.length),g.init(),w.push(g),$e(f,b,0,c.sortObjects),g.finish(),c.sortObjects===!0&&g.sort(ae,se),W===!0&&l.beginShadows();const C=_.state.shadowsArray;if(U.render(C,f,b),W===!0&&l.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(g,f),_.setupLights(c.physicallyCorrectLights),b.isArrayCamera){const R=b.cameras;for(let O=0,pe=R.length;O<pe;O++){const me=R[O];Je(g,f,me,me.viewport)}}else Je(g,f,b);N!==null&&(he.updateMultisampleRenderTarget(N),he.updateRenderTargetMipmap(N)),f.isScene===!0&&f.onAfterRender(c,f,b),Se.resetDefaultState(),v=-1,P=null,D.pop(),D.length>0?_=D[D.length-1]:_=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function $e(f,b,C,R){if(f.visible===!1)return;if(f.layers.test(b.layers)){if(f.isGroup)C=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(b);else if(f.isLight)_.pushLight(f),f.castShadow&&_.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||V.intersectsSprite(f)){R&&ee.setFromMatrixPosition(f.matrixWorld).applyMatrix4(ne);const me=Ge.update(f),ve=f.material;ve.visible&&g.push(f,me,ve,C,ee.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(f.isSkinnedMesh&&f.skeleton.frame!==ye.render.frame&&(f.skeleton.update(),f.skeleton.frame=ye.render.frame),!f.frustumCulled||V.intersectsObject(f))){R&&ee.setFromMatrixPosition(f.matrixWorld).applyMatrix4(ne);const me=Ge.update(f),ve=f.material;if(Array.isArray(ve)){const ge=me.groups;for(let De=0,Re=ge.length;De<Re;De++){const Le=ge[De],Ue=ve[Le.materialIndex];Ue&&Ue.visible&&g.push(f,me,Ue,C,ee.z,Le)}}else ve.visible&&g.push(f,me,ve,C,ee.z,null)}}const pe=f.children;for(let me=0,ve=pe.length;me<ve;me++)$e(pe[me],b,C,R)}function Je(f,b,C,R){const O=f.opaque,pe=f.transmissive,me=f.transparent;_.setupLightsView(C),pe.length>0&&qn(O,b,C),R&&Q.viewport(y.copy(R)),O.length>0&&Xt(O,b,C),pe.length>0&&Xt(pe,b,C),me.length>0&&Xt(me,b,C),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function qn(f,b,C){const R=Ee.isWebGL2;H===null&&(H=new ct(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Vt:It,minFilter:Ei,samples:R&&s===!0?4:0})),c.getDrawingBufferSize(k),R?H.setSize(k.x,k.y):H.setSize(hi(k.x),hi(k.y));const O=c.getRenderTarget();c.setRenderTarget(H),c.clear();const pe=c.toneMapping;c.toneMapping=lt,Xt(f,b,C),c.toneMapping=pe,he.updateMultisampleRenderTarget(H),he.updateRenderTargetMipmap(H),c.setRenderTarget(O)}function Xt(f,b,C){const R=b.isScene===!0?b.overrideMaterial:null;for(let O=0,pe=f.length;O<pe;O++){const me=f[O],ve=me.object,ge=me.geometry,De=R===null?me.material:R,Re=me.group;ve.layers.test(C.layers)&&Kn(ve,b,C,ge,De,Re)}}function Kn(f,b,C,R,O,pe){f.onBeforeRender(c,b,C,R,O,pe),f.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),O.onBeforeRender(c,b,C,R,f,pe),O.transparent===!0&&O.side===Wt?(O.side=at,O.needsUpdate=!0,c.renderBufferDirect(C,b,R,O,f,pe),O.side=vi,O.needsUpdate=!0,c.renderBufferDirect(C,b,R,O,f,pe),O.side=Wt):c.renderBufferDirect(C,b,R,O,f,pe),f.onAfterRender(c,b,C,R,O,pe)}function Qt(f,b,C){b.isScene!==!0&&(b=oe);const R=Te.get(f),O=_.state.lights,pe=_.state.shadowsArray,me=O.state.version,ve=Pe.getParameters(f,O.state,pe,b,C),ge=Pe.getProgramCacheKey(ve);let De=R.programs;R.environment=f.isMeshStandardMaterial?b.environment:null,R.fog=b.fog,R.envMap=(f.isMeshStandardMaterial?ke:Be).get(f.envMap||R.environment),De===void 0&&(f.addEventListener("dispose",Z),De=new Map,R.programs=De);let Re=De.get(ge);if(Re!==void 0){if(R.currentProgram===Re&&R.lightsStateVersion===me)return Ti(f,ve),Re}else ve.uniforms=Pe.getUniforms(f),f.onBuild(C,ve,c),f.onBeforeCompile(ve,c),Re=Pe.acquireProgram(ve,ge),De.set(ge,Re),R.uniforms=ve.uniforms;const Le=R.uniforms;(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Le.clippingPlanes=l.uniform),Ti(f,ve),R.needsLights=jn(f),R.lightsStateVersion=me,R.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotShadowMatrix.value=O.state.spotShadowMatrix,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix);const Ue=Re.getUniforms(),ht=pt.seqWithValue(Ue.seq,Le);return R.currentProgram=Re,R.uniformsList=ht,Re}function Ti(f,b){const C=Te.get(f);C.outputEncoding=b.outputEncoding,C.instancing=b.instancing,C.skinning=b.skinning,C.morphTargets=b.morphTargets,C.morphNormals=b.morphNormals,C.morphColors=b.morphColors,C.morphTargetsCount=b.morphTargetsCount,C.numClippingPlanes=b.numClippingPlanes,C.numIntersection=b.numClipIntersection,C.vertexAlphas=b.vertexAlphas,C.vertexTangents=b.vertexTangents,C.toneMapping=b.toneMapping}function Yn(f,b,C,R,O){b.isScene!==!0&&(b=oe),he.resetTextureUnits();const pe=b.fog,me=R.isMeshStandardMaterial?b.environment:null,ve=N===null?c.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Pt,ge=(R.isMeshStandardMaterial?ke:Be).get(R.envMap||me),De=R.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,Re=!!R.normalMap&&!!C.attributes.tangent,Le=!!C.morphAttributes.position,Ue=!!C.morphAttributes.normal,ht=!!C.morphAttributes.color,xt=R.toneMapped?c.toneMapping:lt,Mt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Qe=Mt!==void 0?Mt.length:0,we=Te.get(R),Tt=_.state.lights;if(W===!0&&(B===!0||f!==P)){const tt=f===P&&R.id===v;l.setState(R,f,tt)}let Oe=!1;R.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Tt.state.version||we.outputEncoding!==ve||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||we.envMap!==ge||R.fog===!0&&we.fog!==pe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==l.numPlanes||we.numIntersection!==l.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Re||we.morphTargets!==Le||we.morphNormals!==Ue||we.morphColors!==ht||we.toneMapping!==xt||Ee.isWebGL2===!0&&we.morphTargetsCount!==Qe)&&(Oe=!0):(Oe=!0,we.__version=R.version);let et=we.currentProgram;Oe===!0&&(et=Qt(R,b,O));let ft=!1,Nt=!1,ei=!1;const He=et.getUniforms(),Ft=we.uniforms;if(Q.useProgram(et.program)&&(ft=!0,Nt=!0,ei=!0),R.id!==v&&(v=R.id,Nt=!0),ft||P!==f){if(He.setValue(M,"projectionMatrix",f.projectionMatrix),Ee.logarithmicDepthBuffer&&He.setValue(M,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),P!==f&&(P=f,Nt=!0,ei=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const tt=He.map.cameraPosition;tt!==void 0&&tt.setValue(M,ee.setFromMatrixPosition(f.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&He.setValue(M,"isOrthographic",f.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||O.isSkinnedMesh)&&He.setValue(M,"viewMatrix",f.matrixWorldInverse)}if(O.isSkinnedMesh){He.setOptional(M,O,"bindMatrix"),He.setOptional(M,O,"bindMatrixInverse");const tt=O.skeleton;tt&&(Ee.floatVertexTextures?(tt.boneTexture===null&&tt.computeBoneTexture(),He.setValue(M,"boneTexture",tt.boneTexture,he),He.setValue(M,"boneTextureSize",tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ti=C.morphAttributes;return(ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0&&Ee.isWebGL2===!0)&&J.update(O,C,R,et),(Nt||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,He.setValue(M,"receiveShadow",O.receiveShadow)),Nt&&(He.setValue(M,"toneMappingExposure",c.toneMappingExposure),we.needsLights&&Zn(Ft,ei),pe&&R.fog===!0&&ot.refreshFogUniforms(Ft,pe),ot.refreshMaterialUniforms(Ft,R,G,q,H),pt.upload(M,we.uniformsList,Ft,he)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(pt.upload(M,we.uniformsList,Ft,he),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&He.setValue(M,"center",O.center),He.setValue(M,"modelViewMatrix",O.modelViewMatrix),He.setValue(M,"normalMatrix",O.normalMatrix),He.setValue(M,"modelMatrix",O.matrixWorld),et}function Zn(f,b){f.ambientLightColor.needsUpdate=b,f.lightProbe.needsUpdate=b,f.directionalLights.needsUpdate=b,f.directionalLightShadows.needsUpdate=b,f.pointLights.needsUpdate=b,f.pointLightShadows.needsUpdate=b,f.spotLights.needsUpdate=b,f.spotLightShadows.needsUpdate=b,f.rectAreaLights.needsUpdate=b,f.hemisphereLights.needsUpdate=b}function jn(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(f,b,C){Te.get(f.texture).__webglTexture=b,Te.get(f.depthTexture).__webglTexture=C;const R=Te.get(f);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=C===void 0,R.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(f,b){const C=Te.get(f);C.__webglFramebuffer=b,C.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(f,b=0,C=0){N=f,T=b,A=C;let R=!0;if(f){const ge=Te.get(f);ge.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(M.FRAMEBUFFER,null),R=!1):ge.__webglFramebuffer===void 0?he.setupRenderTarget(f):ge.__hasExternalTextures&&he.rebindTextures(f,Te.get(f.texture).__webglTexture,Te.get(f.depthTexture).__webglTexture)}let O=null,pe=!1,me=!1;if(f){const ge=f.texture;(ge.isData3DTexture||ge.isDataArrayTexture)&&(me=!0);const De=Te.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(O=De[b],pe=!0):Ee.isWebGL2&&f.samples>0&&he.useMultisampledRTT(f)===!1?O=Te.get(f).__webglMultisampledFramebuffer:O=De,y.copy(f.viewport),X.copy(f.scissor),u=f.scissorTest}else y.copy(L).multiplyScalar(G).floor(),X.copy(K).multiplyScalar(G).floor(),u=F;if(Q.bindFramebuffer(M.FRAMEBUFFER,O)&&Ee.drawBuffers&&R&&Q.drawBuffers(f,O),Q.viewport(y),Q.scissor(X),Q.setScissorTest(u),pe){const ge=Te.get(f.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+b,ge.__webglTexture,C)}else if(me){const ge=Te.get(f.texture),De=b||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,ge.__webglTexture,C||0,De)}v=-1},this.readRenderTargetPixels=function(f,b,C,R,O,pe,me){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Te.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){Q.bindFramebuffer(M.FRAMEBUFFER,ve);try{const ge=f.texture,De=ge.format,Re=ge.type;if(De!==rt&&I.convert(De)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Vt&&(_e.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==It&&I.convert(Re)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===vt&&(Ee.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=f.width-R&&C>=0&&C<=f.height-O&&M.readPixels(b,C,R,O,I.convert(De),I.convert(Re),pe)}finally{const ge=N!==null?Te.get(N).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(f,b,C=0){if(b.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const R=Math.pow(2,-C),O=Math.floor(b.image.width*R),pe=Math.floor(b.image.height*R);he.setTexture2D(b,0),M.copyTexSubImage2D(M.TEXTURE_2D,C,0,0,f.x,f.y,O,pe),Q.unbindTexture()},this.copyTextureToTexture=function(f,b,C,R=0){const O=b.image.width,pe=b.image.height,me=I.convert(C.format),ve=I.convert(C.type);he.setTexture2D(C,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,C.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,C.unpackAlignment),b.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,R,f.x,f.y,O,pe,me,ve,b.image.data):b.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,R,f.x,f.y,b.mipmaps[0].width,b.mipmaps[0].height,me,b.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,R,f.x,f.y,me,ve,b.image),R===0&&C.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(f,b,C,R,O=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=f.max.x-f.min.x+1,me=f.max.y-f.min.y+1,ve=f.max.z-f.min.z+1,ge=I.convert(R.format),De=I.convert(R.type);let Re;if(R.isData3DTexture)he.setTexture3D(R,0),Re=M.TEXTURE_3D;else if(R.isDataArrayTexture)he.setTexture2DArray(R,0),Re=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,R.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,R.unpackAlignment);const Le=M.getParameter(M.UNPACK_ROW_LENGTH),Ue=M.getParameter(M.UNPACK_IMAGE_HEIGHT),ht=M.getParameter(M.UNPACK_SKIP_PIXELS),xt=M.getParameter(M.UNPACK_SKIP_ROWS),Mt=M.getParameter(M.UNPACK_SKIP_IMAGES),Qe=C.isCompressedTexture?C.mipmaps[0]:C.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,Qe.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Qe.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,f.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,f.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,f.min.z),C.isDataTexture||C.isData3DTexture?M.texSubImage3D(Re,O,b.x,b.y,b.z,pe,me,ve,ge,De,Qe.data):C.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(Re,O,b.x,b.y,b.z,pe,me,ve,ge,Qe.data)):M.texSubImage3D(Re,O,b.x,b.y,b.z,pe,me,ve,ge,De,Qe),M.pixelStorei(M.UNPACK_ROW_LENGTH,Le),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ue),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ht),M.pixelStorei(M.UNPACK_SKIP_ROWS,xt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Mt),O===0&&R.generateMipmaps&&M.generateMipmap(Re),Q.unbindTexture()},this.initTexture=function(f){he.setTexture2D(f,0),Q.unbindTexture()},this.resetState=function(){T=0,A=0,N=null,Q.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Uc.prototype.isWebGLRenderer=!0;export{Uc as WebGLRenderer};
