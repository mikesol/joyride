import { g as CubeUVReflectionMapping, B as BackSide, F as FrontSide, L as LinearFilter, N as NoToneMapping, h as NoBlending, a as LinearMipmapLinearFilter, E as EquirectangularReflectionMapping, i as EquirectangularRefractionMapping, f as CubeReflectionMapping, j as CubeRefractionMapping, H as HalfFloatType, R as RGBAFormat, b as LinearEncoding, k as NearestFilter, C as ClampToEdgeWrapping, l as FloatType, G as GLSL3, m as CustomToneMapping, A as ACESFilmicToneMapping, n as CineonToneMapping, o as ReinhardToneMapping, p as LinearToneMapping, P as PCFShadowMap, q as PCFSoftShadowMap, V as VSMShadowMap, s as sRGBEncoding, r as AddOperation, t as MixOperation, u as MultiplyOperation, O as ObjectSpaceNormalMap, T as TangentSpaceNormalMap, v as NormalBlending, D as DoubleSide, w as BasicDepthPacking, x as RGBADepthPacking, y as LessEqualDepth, z as AddEquation, I as SubtractEquation, J as ReverseSubtractEquation, Z as ZeroFactor, K as OneFactor, Q as SrcColorFactor, W as SrcAlphaFactor, X as SrcAlphaSaturateFactor, Y as DstColorFactor, _ as DstAlphaFactor, $ as OneMinusSrcColorFactor, a0 as OneMinusSrcAlphaFactor, a1 as OneMinusDstColorFactor, a2 as OneMinusDstAlphaFactor, a3 as CustomBlending, a4 as MultiplyBlending, a5 as SubtractiveBlending, a6 as AdditiveBlending, a7 as CullFaceNone, a8 as CullFaceBack, a9 as CullFaceFront, aa as MinEquation, ab as MaxEquation, ac as NotEqualDepth, ad as GreaterDepth, ae as GreaterEqualDepth, af as EqualDepth, ag as LessDepth, ah as AlwaysDepth, ai as NeverDepth, d as RepeatWrapping, M as MirroredRepeatWrapping, aj as NearestMipmapNearestFilter, ak as NearestMipmapLinearFilter, al as LinearMipmapNearestFilter, am as UnsignedIntType, an as UnsignedInt248Type, ao as DepthFormat, ap as UnsignedShortType, aq as DepthStencilFormat, ar as _SRGBAFormat, U as UnsignedByteType, as as UnsignedShort4444Type, at as UnsignedShort5551Type, au as ByteType, av as ShortType, aw as IntType, ax as AlphaFormat, ay as LuminanceFormat, az as LuminanceAlphaFormat, aA as RedFormat, aB as RGBFormat, aC as RedIntegerFormat, aD as RGFormat, aE as RGIntegerFormat, aF as RGBAIntegerFormat, aG as RGB_S3TC_DXT1_Format, aH as RGBA_S3TC_DXT1_Format, aI as RGBA_S3TC_DXT3_Format, aJ as RGBA_S3TC_DXT5_Format, aK as RGB_PVRTC_4BPPV1_Format, aL as RGB_PVRTC_2BPPV1_Format, aM as RGBA_PVRTC_4BPPV1_Format, aN as RGBA_PVRTC_2BPPV1_Format, aO as RGB_ETC1_Format, aP as RGB_ETC2_Format, aQ as RGBA_ETC2_EAC_Format, aR as RGBA_ASTC_4x4_Format, aS as RGBA_ASTC_5x4_Format, aT as RGBA_ASTC_5x5_Format, aU as RGBA_ASTC_6x5_Format, aV as RGBA_ASTC_6x6_Format, aW as RGBA_ASTC_8x5_Format, aX as RGBA_ASTC_8x6_Format, aY as RGBA_ASTC_8x8_Format, aZ as RGBA_ASTC_10x5_Format, a_ as RGBA_ASTC_10x6_Format, a$ as RGBA_ASTC_10x8_Format, b0 as RGBA_ASTC_10x10_Format, b1 as RGBA_ASTC_12x10_Format, b2 as RGBA_ASTC_12x12_Format, b3 as RGBA_BPTC_Format, b4 as REVISION } from "./constants.cc13e4fd.js";
import { i as isPowerOfTwo, f as floorPowerOfTwo } from "./MathUtils.9169ae61.js";
import { P as Plane, F as Frustum } from "./Frustum.21d548b8.js";
import { Matrix4 } from "./Matrix4.0c7a2215.js";
import { Vector2 } from "./Vector2.3964b2c2.js";
import { V as Vector3 } from "./Vector3.5db2ef2e.js";
import { V as Vector4 } from "./Vector4.27798d04.js";
import { BoxGeometry } from "./BoxGeometry.d73cb17e.js";
import { PlaneGeometry } from "./PlaneGeometry.94665e38.js";
import { m as mergeUniforms, S as ShaderMaterial, c as cloneUniforms, U as UniformsUtils } from "./ShaderMaterial.01a0feab.js";
import { Color } from "./Color.5efc95ab.js";
import { M as Mesh, a as MeshBasicMaterial } from "./Mesh.53231fd1.js";
import { M as Matrix3 } from "./Matrix3.254ef6d6.js";
import { E as EventDispatcher } from "./EventDispatcher.62ae53dd.js";
import { T as Texture, S as Source, I as ImageUtils } from "./Texture.fb44cc87.js";
import { O as Object3D } from "./Object3D.d81adcf4.js";
import { P as PerspectiveCamera, C as Camera } from "./PerspectiveCamera.3def8065.js";
import { C as CubeTexture } from "./CubeTexture.575c92d6.js";
import { BufferAttribute, Uint32BufferAttribute, Uint16BufferAttribute } from "./BufferAttribute.ad6349b3.js";
import { BufferGeometry } from "./BufferGeometry.d5615ad3.js";
import { a as arrayNeedsUint32, c as createElementNS } from "./utils.4cfc5b76.js";
import { L as Layers } from "./Layers.61b05682.js";
import { M as Material } from "./Material.3b90100d.js";
import { Group } from "./Group.157021da.js";
import "./Sphere.bf80223e.js";
import "./Ray.14000e07.js";
import "./Euler.d28ed76f.js";
function WebGLAnimation() {
  let context = null;
  let isAnimating = false;
  let animationLoop = null;
  let requestId = null;
  function onAnimationFrame(time, frame) {
    animationLoop(time, frame);
    requestId = context.requestAnimationFrame(onAnimationFrame);
  }
  return {
    start: function() {
      if (isAnimating === true)
        return;
      if (animationLoop === null)
        return;
      requestId = context.requestAnimationFrame(onAnimationFrame);
      isAnimating = true;
    },
    stop: function() {
      context.cancelAnimationFrame(requestId);
      isAnimating = false;
    },
    setAnimationLoop: function(callback) {
      animationLoop = callback;
    },
    setContext: function(value) {
      context = value;
    }
  };
}
function WebGLAttributes(gl, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  const buffers = /* @__PURE__ */ new WeakMap();
  function createBuffer(attribute, bufferType) {
    const array = attribute.array;
    const usage = attribute.usage;
    const buffer = gl.createBuffer();
    gl.bindBuffer(bufferType, buffer);
    gl.bufferData(bufferType, array, usage);
    attribute.onUploadCallback();
    let type;
    if (array instanceof Float32Array) {
      type = gl.FLOAT;
    } else if (array instanceof Uint16Array) {
      if (attribute.isFloat16BufferAttribute) {
        if (isWebGL2) {
          type = gl.HALF_FLOAT;
        } else {
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
        }
      } else {
        type = gl.UNSIGNED_SHORT;
      }
    } else if (array instanceof Int16Array) {
      type = gl.SHORT;
    } else if (array instanceof Uint32Array) {
      type = gl.UNSIGNED_INT;
    } else if (array instanceof Int32Array) {
      type = gl.INT;
    } else if (array instanceof Int8Array) {
      type = gl.BYTE;
    } else if (array instanceof Uint8Array) {
      type = gl.UNSIGNED_BYTE;
    } else if (array instanceof Uint8ClampedArray) {
      type = gl.UNSIGNED_BYTE;
    } else {
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + array);
    }
    return {
      buffer,
      type,
      bytesPerElement: array.BYTES_PER_ELEMENT,
      version: attribute.version
    };
  }
  function updateBuffer(buffer, attribute, bufferType) {
    const array = attribute.array;
    const updateRange = attribute.updateRange;
    gl.bindBuffer(bufferType, buffer);
    if (updateRange.count === -1) {
      gl.bufferSubData(bufferType, 0, array);
    } else {
      if (isWebGL2) {
        gl.bufferSubData(
          bufferType,
          updateRange.offset * array.BYTES_PER_ELEMENT,
          array,
          updateRange.offset,
          updateRange.count
        );
      } else {
        gl.bufferSubData(
          bufferType,
          updateRange.offset * array.BYTES_PER_ELEMENT,
          array.subarray(updateRange.offset, updateRange.offset + updateRange.count)
        );
      }
      updateRange.count = -1;
    }
  }
  function get(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    return buffers.get(attribute);
  }
  function remove(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data) {
      gl.deleteBuffer(data.buffer);
      buffers.delete(attribute);
    }
  }
  function update(attribute, bufferType) {
    if (attribute.isGLBufferAttribute) {
      const cached = buffers.get(attribute);
      if (!cached || cached.version < attribute.version) {
        buffers.set(attribute, {
          buffer: attribute.buffer,
          type: attribute.type,
          bytesPerElement: attribute.elementSize,
          version: attribute.version
        });
      }
      return;
    }
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data === void 0) {
      buffers.set(attribute, createBuffer(attribute, bufferType));
    } else if (data.version < attribute.version) {
      updateBuffer(data.buffer, attribute, bufferType);
      data.version = attribute.version;
    }
  }
  return {
    get,
    remove,
    update
  };
}
const alphamap_fragment = `
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`;
const alphamap_pars_fragment = `
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;
const alphatest_fragment = `
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;
const alphatest_pars_fragment = `
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;
const aomap_fragment = `
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;
const aomap_pars_fragment = `
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;
const begin_vertex = `
vec3 transformed = vec3( position );
`;
const beginnormal_vertex = `
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;
const bsdfs = `

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
`;
const bumpmap_pars_fragment = `
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
`;
const clipping_planes_fragment = `
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
`;
const clipping_planes_pars_fragment = `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;
const clipping_planes_pars_vertex = `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;
const clipping_planes_vertex = `
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;
const color_fragment = `
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;
const color_pars_fragment = `
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;
const color_pars_vertex = `
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;
const color_vertex = `
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
`;
const common = `
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
`;
const cube_uv_reflection_fragment = `
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
`;
const defaultnormal_vertex = `
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
`;
const displacementmap_pars_vertex = `
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;
const displacementmap_vertex = `
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`;
const emissivemap_fragment = `
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;
const emissivemap_pars_fragment = `
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;
const encodings_fragment = `
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;
const encodings_pars_fragment = `

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;
const envmap_fragment = `
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
`;
const envmap_common_pars_fragment = `
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;
const envmap_pars_fragment = `
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
`;
const envmap_pars_vertex = `
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
`;
const envmap_vertex = `
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
`;
const fog_vertex = `
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;
const fog_pars_vertex = `
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;
const fog_fragment = `
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;
const fog_pars_fragment = `
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
`;
const gradientmap_pars_fragment = `

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
`;
const lightmap_fragment = `
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`;
const lightmap_pars_fragment = `
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;
const lights_lambert_vertex = `
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
`;
const lights_pars_begin = `
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
`;
const envmap_physical_pars_fragment = `
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
`;
const lights_toon_fragment = `
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;
const lights_toon_pars_fragment = `
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
`;
const lights_phong_fragment = `
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;
const lights_phong_pars_fragment = `
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
`;
const lights_physical_fragment = `
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
`;
const lights_physical_pars_fragment = `
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
`;
const lights_fragment_begin = `
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
`;
const lights_fragment_maps = `
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
`;
const lights_fragment_end = `
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`;
const logdepthbuf_fragment = `
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;
const logdepthbuf_pars_fragment = `
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;
const logdepthbuf_pars_vertex = `
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;
const logdepthbuf_vertex = `
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
`;
const map_fragment = `
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;
const map_pars_fragment = `
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;
const map_particle_fragment = `
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;
const map_particle_pars_fragment = `
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;
const metalnessmap_fragment = `
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;
const metalnessmap_pars_fragment = `
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;
const morphcolor_vertex = `
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
`;
const morphnormal_vertex = `
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
`;
const morphtarget_pars_vertex = `
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
`;
const morphtarget_vertex = `
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
`;
const normal_fragment_begin = `
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

`;
const normal_fragment_maps = `

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
`;
const normal_pars_fragment = `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;
const normal_pars_vertex = `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;
const normal_vertex = `
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;
const normalmap_pars_fragment = `
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
`;
const clearcoat_normal_fragment_begin = `
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`;
const clearcoat_normal_fragment_maps = `
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`;
const clearcoat_pars_fragment = `

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
`;
const output_fragment = `
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;
const packing = `
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
`;
const premultiplied_alpha_fragment = `
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;
const project_vertex = `
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;
const dithering_fragment = `
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;
const dithering_pars_fragment = `
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
`;
const roughnessmap_fragment = `
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;
const roughnessmap_pars_fragment = `
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;
const shadowmap_pars_fragment = `
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
`;
const shadowmap_pars_vertex = `
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
`;
const shadowmap_vertex = `
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
`;
const shadowmask_pars_fragment = `
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
`;
const skinbase_vertex = `
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;
const skinning_pars_vertex = `
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
`;
const skinning_vertex = `
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;
const skinnormal_vertex = `
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
`;
const specularmap_fragment = `
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;
const specularmap_pars_fragment = `
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;
const tonemapping_fragment = `
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;
const tonemapping_pars_fragment = `
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
`;
const transmission_fragment = `
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
`;
const transmission_pars_fragment = `
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
`;
const uv_pars_fragment = `
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`;
const uv_pars_vertex = `
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`;
const uv_vertex = `
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;
const uv2_pars_fragment = `
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`;
const uv2_pars_vertex = `
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`;
const uv2_vertex = `
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`;
const worldpos_vertex = `
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;
const vertex$g = `
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;
const fragment$g = `
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
`;
const vertex$f = `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`;
const fragment$f = `
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
`;
const vertex$e = `
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
`;
const fragment$e = `
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
`;
const vertex$d = `
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
`;
const fragment$d = `
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
`;
const vertex$c = `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`;
const fragment$c = `
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
`;
const vertex$b = `
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
`;
const fragment$b = `
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
`;
const vertex$a = `
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
`;
const fragment$a = `
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
`;
const vertex$9 = `
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
`;
const fragment$9 = `
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
`;
const vertex$8 = `
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
`;
const fragment$8 = `
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
`;
const vertex$7 = `
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
`;
const fragment$7 = `
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
`;
const vertex$6 = `
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
`;
const fragment$6 = `
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
`;
const vertex$5 = `
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
`;
const fragment$5 = `
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
`;
const vertex$4 = `
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
`;
const fragment$4 = `
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
`;
const vertex$3 = `
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
`;
const fragment$3 = `
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
`;
const vertex$2 = `
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
`;
const fragment$2 = `
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
`;
const vertex$1 = `
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
`;
const fragment$1 = `
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
`;
const ShaderChunk = {
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  encodings_fragment,
  encodings_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_fragment,
  lightmap_pars_fragment,
  lights_lambert_vertex,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  output_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  uv2_pars_fragment,
  uv2_pars_vertex,
  uv2_vertex,
  worldpos_vertex,
  background_vert: vertex$g,
  background_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distanceRGBA_vert: vertex$d,
  distanceRGBA_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
};
const UniformsLib = {
  common: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new Matrix3() },
    uv2Transform: { value: new Matrix3() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new Matrix3() }
  },
  sprite: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    center: { value: new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new Matrix3() }
  }
};
const ShaderLib = {
  basic: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) },
        specular: { value: new Color(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new Matrix3() },
      t2D: { value: null }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  cube: {
    uniforms: mergeUniforms([
      UniformsLib.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Vector2(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Color(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Color(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Color(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
function WebGLBackground(renderer, cubemaps, state, objects, alpha, premultipliedAlpha) {
  const clearColor = new Color(0);
  let clearAlpha = alpha === true ? 0 : 1;
  let planeMesh;
  let boxMesh;
  let currentBackground = null;
  let currentBackgroundVersion = 0;
  let currentTonemapping = null;
  function render(renderList, scene) {
    let forceClear = false;
    let background = scene.isScene === true ? scene.background : null;
    if (background && background.isTexture) {
      background = cubemaps.get(background);
    }
    const xr = renderer.xr;
    const session = xr.getSession && xr.getSession();
    if (session && session.environmentBlendMode === "additive") {
      background = null;
    }
    if (background === null) {
      setClear(clearColor, clearAlpha);
    } else if (background && background.isColor) {
      setClear(background, 1);
      forceClear = true;
    }
    if (renderer.autoClear || forceClear) {
      renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
    }
    if (background && (background.isCubeTexture || background.mapping === CubeUVReflectionMapping)) {
      if (boxMesh === void 0) {
        boxMesh = new Mesh(
          new BoxGeometry(1, 1, 1),
          new ShaderMaterial({
            name: "BackgroundCubeMaterial",
            uniforms: cloneUniforms(ShaderLib.cube.uniforms),
            vertexShader: ShaderLib.cube.vertexShader,
            fragmentShader: ShaderLib.cube.fragmentShader,
            side: BackSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          })
        );
        boxMesh.geometry.deleteAttribute("normal");
        boxMesh.geometry.deleteAttribute("uv");
        boxMesh.onBeforeRender = function(renderer2, scene2, camera) {
          this.matrixWorld.copyPosition(camera.matrixWorld);
        };
        Object.defineProperty(boxMesh.material, "envMap", {
          get: function() {
            return this.uniforms.envMap.value;
          }
        });
        objects.update(boxMesh);
      }
      boxMesh.material.uniforms.envMap.value = background;
      boxMesh.material.uniforms.flipEnvMap.value = background.isCubeTexture && background.isRenderTargetTexture === false ? -1 : 1;
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        boxMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      boxMesh.layers.enableAll();
      renderList.unshift(boxMesh, boxMesh.geometry, boxMesh.material, 0, 0, null);
    } else if (background && background.isTexture) {
      if (planeMesh === void 0) {
        planeMesh = new Mesh(
          new PlaneGeometry(2, 2),
          new ShaderMaterial({
            name: "BackgroundMaterial",
            uniforms: cloneUniforms(ShaderLib.background.uniforms),
            vertexShader: ShaderLib.background.vertexShader,
            fragmentShader: ShaderLib.background.fragmentShader,
            side: FrontSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          })
        );
        planeMesh.geometry.deleteAttribute("normal");
        Object.defineProperty(planeMesh.material, "map", {
          get: function() {
            return this.uniforms.t2D.value;
          }
        });
        objects.update(planeMesh);
      }
      planeMesh.material.uniforms.t2D.value = background;
      if (background.matrixAutoUpdate === true) {
        background.updateMatrix();
      }
      planeMesh.material.uniforms.uvTransform.value.copy(background.matrix);
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        planeMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      planeMesh.layers.enableAll();
      renderList.unshift(planeMesh, planeMesh.geometry, planeMesh.material, 0, 0, null);
    }
  }
  function setClear(color, alpha2) {
    state.buffers.color.setClear(color.r, color.g, color.b, alpha2, premultipliedAlpha);
  }
  return {
    getClearColor: function() {
      return clearColor;
    },
    setClearColor: function(color, alpha2 = 1) {
      clearColor.set(color);
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    getClearAlpha: function() {
      return clearAlpha;
    },
    setClearAlpha: function(alpha2) {
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    render
  };
}
function WebGLBindingStates(gl, extensions, attributes, capabilities) {
  const maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  const extension = capabilities.isWebGL2 ? null : extensions.get("OES_vertex_array_object");
  const vaoAvailable = capabilities.isWebGL2 || extension !== null;
  const bindingStates = {};
  const defaultState = createBindingState(null);
  let currentState = defaultState;
  let forceUpdate = false;
  function setup(object, material, program, geometry, index) {
    let updateBuffers = false;
    if (vaoAvailable) {
      const state = getBindingState(geometry, program, material);
      if (currentState !== state) {
        currentState = state;
        bindVertexArrayObject(currentState.object);
      }
      updateBuffers = needsUpdate(object, geometry, program, index);
      if (updateBuffers)
        saveCache(object, geometry, program, index);
    } else {
      const wireframe = material.wireframe === true;
      if (currentState.geometry !== geometry.id || currentState.program !== program.id || currentState.wireframe !== wireframe) {
        currentState.geometry = geometry.id;
        currentState.program = program.id;
        currentState.wireframe = wireframe;
        updateBuffers = true;
      }
    }
    if (index !== null) {
      attributes.update(index, gl.ELEMENT_ARRAY_BUFFER);
    }
    if (updateBuffers || forceUpdate) {
      forceUpdate = false;
      setupVertexAttributes(object, material, program, geometry);
      if (index !== null) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, attributes.get(index).buffer);
      }
    }
  }
  function createVertexArrayObject() {
    if (capabilities.isWebGL2)
      return gl.createVertexArray();
    return extension.createVertexArrayOES();
  }
  function bindVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.bindVertexArray(vao);
    return extension.bindVertexArrayOES(vao);
  }
  function deleteVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.deleteVertexArray(vao);
    return extension.deleteVertexArrayOES(vao);
  }
  function getBindingState(geometry, program, material) {
    const wireframe = material.wireframe === true;
    let programMap = bindingStates[geometry.id];
    if (programMap === void 0) {
      programMap = {};
      bindingStates[geometry.id] = programMap;
    }
    let stateMap = programMap[program.id];
    if (stateMap === void 0) {
      stateMap = {};
      programMap[program.id] = stateMap;
    }
    let state = stateMap[wireframe];
    if (state === void 0) {
      state = createBindingState(createVertexArrayObject());
      stateMap[wireframe] = state;
    }
    return state;
  }
  function createBindingState(vao) {
    const newAttributes = [];
    const enabledAttributes = [];
    const attributeDivisors = [];
    for (let i = 0; i < maxVertexAttributes; i++) {
      newAttributes[i] = 0;
      enabledAttributes[i] = 0;
      attributeDivisors[i] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes,
      enabledAttributes,
      attributeDivisors,
      object: vao,
      attributes: {},
      index: null
    };
  }
  function needsUpdate(object, geometry, program, index) {
    const cachedAttributes = currentState.attributes;
    const geometryAttributes = geometry.attributes;
    let attributesNum = 0;
    const programAttributes = program.getAttributes();
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        const cachedAttribute = cachedAttributes[name];
        let geometryAttribute = geometryAttributes[name];
        if (geometryAttribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            geometryAttribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            geometryAttribute = object.instanceColor;
        }
        if (cachedAttribute === void 0)
          return true;
        if (cachedAttribute.attribute !== geometryAttribute)
          return true;
        if (geometryAttribute && cachedAttribute.data !== geometryAttribute.data)
          return true;
        attributesNum++;
      }
    }
    if (currentState.attributesNum !== attributesNum)
      return true;
    if (currentState.index !== index)
      return true;
    return false;
  }
  function saveCache(object, geometry, program, index) {
    const cache = {};
    const attributes2 = geometry.attributes;
    let attributesNum = 0;
    const programAttributes = program.getAttributes();
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        let attribute = attributes2[name];
        if (attribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            attribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            attribute = object.instanceColor;
        }
        const data = {};
        data.attribute = attribute;
        if (attribute && attribute.data) {
          data.data = attribute.data;
        }
        cache[name] = data;
        attributesNum++;
      }
    }
    currentState.attributes = cache;
    currentState.attributesNum = attributesNum;
    currentState.index = index;
  }
  function initAttributes() {
    const newAttributes = currentState.newAttributes;
    for (let i = 0, il = newAttributes.length; i < il; i++) {
      newAttributes[i] = 0;
    }
  }
  function enableAttribute(attribute) {
    enableAttributeAndDivisor(attribute, 0);
  }
  function enableAttributeAndDivisor(attribute, meshPerAttribute) {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    const attributeDivisors = currentState.attributeDivisors;
    newAttributes[attribute] = 1;
    if (enabledAttributes[attribute] === 0) {
      gl.enableVertexAttribArray(attribute);
      enabledAttributes[attribute] = 1;
    }
    if (attributeDivisors[attribute] !== meshPerAttribute) {
      const extension2 = capabilities.isWebGL2 ? gl : extensions.get("ANGLE_instanced_arrays");
      extension2[capabilities.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](attribute, meshPerAttribute);
      attributeDivisors[attribute] = meshPerAttribute;
    }
  }
  function disableUnusedAttributes() {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    for (let i = 0, il = enabledAttributes.length; i < il; i++) {
      if (enabledAttributes[i] !== newAttributes[i]) {
        gl.disableVertexAttribArray(i);
        enabledAttributes[i] = 0;
      }
    }
  }
  function vertexAttribPointer(index, size, type, normalized, stride, offset) {
    if (capabilities.isWebGL2 === true && (type === gl.INT || type === gl.UNSIGNED_INT)) {
      gl.vertexAttribIPointer(index, size, type, stride, offset);
    } else {
      gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
  }
  function setupVertexAttributes(object, material, program, geometry) {
    if (capabilities.isWebGL2 === false && (object.isInstancedMesh || geometry.isInstancedBufferGeometry)) {
      if (extensions.get("ANGLE_instanced_arrays") === null)
        return;
    }
    initAttributes();
    const geometryAttributes = geometry.attributes;
    const programAttributes = program.getAttributes();
    const materialDefaultAttributeValues = material.defaultAttributeValues;
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        let geometryAttribute = geometryAttributes[name];
        if (geometryAttribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            geometryAttribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            geometryAttribute = object.instanceColor;
        }
        if (geometryAttribute !== void 0) {
          const normalized = geometryAttribute.normalized;
          const size = geometryAttribute.itemSize;
          const attribute = attributes.get(geometryAttribute);
          if (attribute === void 0)
            continue;
          const buffer = attribute.buffer;
          const type = attribute.type;
          const bytesPerElement = attribute.bytesPerElement;
          if (geometryAttribute.isInterleavedBufferAttribute) {
            const data = geometryAttribute.data;
            const stride = data.stride;
            const offset = geometryAttribute.offset;
            if (data.isInstancedInterleavedBuffer) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, data.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = data.meshPerAttribute * data.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(
                programAttribute.location + i,
                size / programAttribute.locationSize,
                type,
                normalized,
                stride * bytesPerElement,
                (offset + size / programAttribute.locationSize * i) * bytesPerElement
              );
            }
          } else {
            if (geometryAttribute.isInstancedBufferAttribute) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, geometryAttribute.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(
                programAttribute.location + i,
                size / programAttribute.locationSize,
                type,
                normalized,
                size * bytesPerElement,
                size / programAttribute.locationSize * i * bytesPerElement
              );
            }
          }
        } else if (materialDefaultAttributeValues !== void 0) {
          const value = materialDefaultAttributeValues[name];
          if (value !== void 0) {
            switch (value.length) {
              case 2:
                gl.vertexAttrib2fv(programAttribute.location, value);
                break;
              case 3:
                gl.vertexAttrib3fv(programAttribute.location, value);
                break;
              case 4:
                gl.vertexAttrib4fv(programAttribute.location, value);
                break;
              default:
                gl.vertexAttrib1fv(programAttribute.location, value);
            }
          }
        }
      }
    }
    disableUnusedAttributes();
  }
  function dispose() {
    reset();
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      for (const programId in programMap) {
        const stateMap = programMap[programId];
        for (const wireframe in stateMap) {
          deleteVertexArrayObject(stateMap[wireframe].object);
          delete stateMap[wireframe];
        }
        delete programMap[programId];
      }
      delete bindingStates[geometryId];
    }
  }
  function releaseStatesOfGeometry(geometry) {
    if (bindingStates[geometry.id] === void 0)
      return;
    const programMap = bindingStates[geometry.id];
    for (const programId in programMap) {
      const stateMap = programMap[programId];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[programId];
    }
    delete bindingStates[geometry.id];
  }
  function releaseStatesOfProgram(program) {
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      if (programMap[program.id] === void 0)
        continue;
      const stateMap = programMap[program.id];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[program.id];
    }
  }
  function reset() {
    resetDefaultState();
    forceUpdate = true;
    if (currentState === defaultState)
      return;
    currentState = defaultState;
    bindVertexArrayObject(currentState.object);
  }
  function resetDefaultState() {
    defaultState.geometry = null;
    defaultState.program = null;
    defaultState.wireframe = false;
  }
  return {
    setup,
    reset,
    resetDefaultState,
    dispose,
    releaseStatesOfGeometry,
    releaseStatesOfProgram,
    initAttributes,
    enableAttribute,
    disableUnusedAttributes
  };
}
function WebGLBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  function render(start, count) {
    gl.drawArrays(mode, start, count);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawArraysInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawArraysInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, start, count, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLCapabilities(gl, extensions, parameters) {
  let maxAnisotropy;
  function getMaxAnisotropy() {
    if (maxAnisotropy !== void 0)
      return maxAnisotropy;
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else {
      maxAnisotropy = 0;
    }
    return maxAnisotropy;
  }
  function getMaxPrecision(precision2) {
    if (precision2 === "highp") {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
        return "highp";
      }
      precision2 = "mediump";
    }
    if (precision2 === "mediump") {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
        return "mediump";
      }
    }
    return "lowp";
  }
  const isWebGL2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext !== "undefined" && gl instanceof WebGL2ComputeRenderingContext;
  let precision = parameters.precision !== void 0 ? parameters.precision : "highp";
  const maxPrecision = getMaxPrecision(precision);
  if (maxPrecision !== precision) {
    console.warn("THREE.WebGLRenderer:", precision, "not supported, using", maxPrecision, "instead.");
    precision = maxPrecision;
  }
  const drawBuffers = isWebGL2 || extensions.has("WEBGL_draw_buffers");
  const logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true;
  const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  const maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
  const maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
  const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
  const vertexTextures = maxVertexTextures > 0;
  const floatFragmentTextures = isWebGL2 || extensions.has("OES_texture_float");
  const floatVertexTextures = vertexTextures && floatFragmentTextures;
  const maxSamples = isWebGL2 ? gl.getParameter(gl.MAX_SAMPLES) : 0;
  return {
    isWebGL2,
    drawBuffers,
    getMaxAnisotropy,
    getMaxPrecision,
    precision,
    logarithmicDepthBuffer,
    maxTextures,
    maxVertexTextures,
    maxTextureSize,
    maxCubemapSize,
    maxAttributes,
    maxVertexUniforms,
    maxVaryings,
    maxFragmentUniforms,
    vertexTextures,
    floatFragmentTextures,
    floatVertexTextures,
    maxSamples
  };
}
function WebGLClipping(properties) {
  const scope = this;
  let globalState = null, numGlobalPlanes = 0, localClippingEnabled = false, renderingShadows = false;
  const plane = new Plane(), viewNormalMatrix = new Matrix3(), uniform = { value: null, needsUpdate: false };
  this.uniform = uniform;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function(planes, enableLocalClipping, camera) {
    const enabled = planes.length !== 0 || enableLocalClipping || numGlobalPlanes !== 0 || localClippingEnabled;
    localClippingEnabled = enableLocalClipping;
    globalState = projectPlanes(planes, camera, 0);
    numGlobalPlanes = planes.length;
    return enabled;
  };
  this.beginShadows = function() {
    renderingShadows = true;
    projectPlanes(null);
  };
  this.endShadows = function() {
    renderingShadows = false;
    resetGlobalState();
  };
  this.setState = function(material, camera, useCache) {
    const planes = material.clippingPlanes, clipIntersection = material.clipIntersection, clipShadows = material.clipShadows;
    const materialProperties = properties.get(material);
    if (!localClippingEnabled || planes === null || planes.length === 0 || renderingShadows && !clipShadows) {
      if (renderingShadows) {
        projectPlanes(null);
      } else {
        resetGlobalState();
      }
    } else {
      const nGlobal = renderingShadows ? 0 : numGlobalPlanes, lGlobal = nGlobal * 4;
      let dstArray = materialProperties.clippingState || null;
      uniform.value = dstArray;
      dstArray = projectPlanes(planes, camera, lGlobal, useCache);
      for (let i = 0; i !== lGlobal; ++i) {
        dstArray[i] = globalState[i];
      }
      materialProperties.clippingState = dstArray;
      this.numIntersection = clipIntersection ? this.numPlanes : 0;
      this.numPlanes += nGlobal;
    }
  };
  function resetGlobalState() {
    if (uniform.value !== globalState) {
      uniform.value = globalState;
      uniform.needsUpdate = numGlobalPlanes > 0;
    }
    scope.numPlanes = numGlobalPlanes;
    scope.numIntersection = 0;
  }
  function projectPlanes(planes, camera, dstOffset, skipTransform) {
    const nPlanes = planes !== null ? planes.length : 0;
    let dstArray = null;
    if (nPlanes !== 0) {
      dstArray = uniform.value;
      if (skipTransform !== true || dstArray === null) {
        const flatSize = dstOffset + nPlanes * 4, viewMatrix = camera.matrixWorldInverse;
        viewNormalMatrix.getNormalMatrix(viewMatrix);
        if (dstArray === null || dstArray.length < flatSize) {
          dstArray = new Float32Array(flatSize);
        }
        for (let i = 0, i4 = dstOffset; i !== nPlanes; ++i, i4 += 4) {
          plane.copy(planes[i]).applyMatrix4(viewMatrix, viewNormalMatrix);
          plane.normal.toArray(dstArray, i4);
          dstArray[i4 + 3] = plane.constant;
        }
      }
      uniform.value = dstArray;
      uniform.needsUpdate = true;
    }
    scope.numPlanes = nPlanes;
    scope.numIntersection = 0;
    return dstArray;
  }
}
class WebGLRenderTarget extends EventDispatcher {
  constructor(width, height, options = {}) {
    super();
    this.width = width;
    this.height = height;
    this.depth = 1;
    this.scissor = new Vector4(0, 0, width, height);
    this.scissorTest = false;
    this.viewport = new Vector4(0, 0, width, height);
    const image = { width, height, depth: 1 };
    this.texture = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
    this.texture.isRenderTargetTexture = true;
    this.texture.flipY = false;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.internalFormat = options.internalFormat !== void 0 ? options.internalFormat : null;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
    this.depthBuffer = options.depthBuffer !== void 0 ? options.depthBuffer : true;
    this.stencilBuffer = options.stencilBuffer !== void 0 ? options.stencilBuffer : false;
    this.depthTexture = options.depthTexture !== void 0 ? options.depthTexture : null;
    this.samples = options.samples !== void 0 ? options.samples : 0;
  }
  setSize(width, height, depth = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      this.texture.image.width = width;
      this.texture.image.height = height;
      this.texture.image.depth = depth;
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.viewport.copy(source.viewport);
    this.texture = source.texture.clone();
    this.texture.isRenderTargetTexture = true;
    const image = Object.assign({}, source.texture.image);
    this.texture.source = new Source(image);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    if (source.depthTexture !== null)
      this.depthTexture = source.depthTexture.clone();
    this.samples = source.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
WebGLRenderTarget.prototype.isWebGLRenderTarget = true;
const fov = 90, aspect = 1;
class CubeCamera extends Object3D {
  constructor(near, far, renderTarget) {
    super();
    this.type = "CubeCamera";
    if (renderTarget.isWebGLCubeRenderTarget !== true) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = renderTarget;
    const cameraPX = new PerspectiveCamera(fov, aspect, near, far);
    cameraPX.layers = this.layers;
    cameraPX.up.set(0, -1, 0);
    cameraPX.lookAt(new Vector3(1, 0, 0));
    this.add(cameraPX);
    const cameraNX = new PerspectiveCamera(fov, aspect, near, far);
    cameraNX.layers = this.layers;
    cameraNX.up.set(0, -1, 0);
    cameraNX.lookAt(new Vector3(-1, 0, 0));
    this.add(cameraNX);
    const cameraPY = new PerspectiveCamera(fov, aspect, near, far);
    cameraPY.layers = this.layers;
    cameraPY.up.set(0, 0, 1);
    cameraPY.lookAt(new Vector3(0, 1, 0));
    this.add(cameraPY);
    const cameraNY = new PerspectiveCamera(fov, aspect, near, far);
    cameraNY.layers = this.layers;
    cameraNY.up.set(0, 0, -1);
    cameraNY.lookAt(new Vector3(0, -1, 0));
    this.add(cameraNY);
    const cameraPZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraPZ.layers = this.layers;
    cameraPZ.up.set(0, -1, 0);
    cameraPZ.lookAt(new Vector3(0, 0, 1));
    this.add(cameraPZ);
    const cameraNZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraNZ.layers = this.layers;
    cameraNZ.up.set(0, -1, 0);
    cameraNZ.lookAt(new Vector3(0, 0, -1));
    this.add(cameraNZ);
  }
  update(renderer, scene) {
    if (this.parent === null)
      this.updateMatrixWorld();
    const renderTarget = this.renderTarget;
    const [cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ] = this.children;
    const currentRenderTarget = renderer.getRenderTarget();
    const currentToneMapping = renderer.toneMapping;
    const currentXrEnabled = renderer.xr.enabled;
    renderer.toneMapping = NoToneMapping;
    renderer.xr.enabled = false;
    const generateMipmaps = renderTarget.texture.generateMipmaps;
    renderTarget.texture.generateMipmaps = false;
    renderer.setRenderTarget(renderTarget, 0);
    renderer.render(scene, cameraPX);
    renderer.setRenderTarget(renderTarget, 1);
    renderer.render(scene, cameraNX);
    renderer.setRenderTarget(renderTarget, 2);
    renderer.render(scene, cameraPY);
    renderer.setRenderTarget(renderTarget, 3);
    renderer.render(scene, cameraNY);
    renderer.setRenderTarget(renderTarget, 4);
    renderer.render(scene, cameraPZ);
    renderTarget.texture.generateMipmaps = generateMipmaps;
    renderer.setRenderTarget(renderTarget, 5);
    renderer.render(scene, cameraNZ);
    renderer.setRenderTarget(currentRenderTarget);
    renderer.toneMapping = currentToneMapping;
    renderer.xr.enabled = currentXrEnabled;
    renderTarget.texture.needsPMREMUpdate = true;
  }
}
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(size, options = {}) {
    super(size, size, options);
    const image = { width: size, height: size, depth: 1 };
    const images = [image, image, image, image, image, image];
    this.texture = new CubeTexture(images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
    this.texture.isRenderTargetTexture = true;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
  }
  fromEquirectangularTexture(renderer, texture) {
    this.texture.type = texture.type;
    this.texture.encoding = texture.encoding;
    this.texture.generateMipmaps = texture.generateMipmaps;
    this.texture.minFilter = texture.minFilter;
    this.texture.magFilter = texture.magFilter;
    const shader = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    };
    const geometry = new BoxGeometry(5, 5, 5);
    const material = new ShaderMaterial({
      name: "CubemapFromEquirect",
      uniforms: cloneUniforms(shader.uniforms),
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      side: BackSide,
      blending: NoBlending
    });
    material.uniforms.tEquirect.value = texture;
    const mesh = new Mesh(geometry, material);
    const currentMinFilter = texture.minFilter;
    if (texture.minFilter === LinearMipmapLinearFilter)
      texture.minFilter = LinearFilter;
    const camera = new CubeCamera(1, 10, this);
    camera.update(renderer, mesh);
    texture.minFilter = currentMinFilter;
    mesh.geometry.dispose();
    mesh.material.dispose();
    return this;
  }
  clear(renderer, color, depth, stencil) {
    const currentRenderTarget = renderer.getRenderTarget();
    for (let i = 0; i < 6; i++) {
      renderer.setRenderTarget(this, i);
      renderer.clear(color, depth, stencil);
    }
    renderer.setRenderTarget(currentRenderTarget);
  }
}
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = true;
function WebGLCubeMaps(renderer) {
  let cubemaps = /* @__PURE__ */ new WeakMap();
  function mapTextureMapping(texture, mapping) {
    if (mapping === EquirectangularReflectionMapping) {
      texture.mapping = CubeReflectionMapping;
    } else if (mapping === EquirectangularRefractionMapping) {
      texture.mapping = CubeRefractionMapping;
    }
    return texture;
  }
  function get(texture) {
    if (texture && texture.isTexture && texture.isRenderTargetTexture === false) {
      const mapping = texture.mapping;
      if (mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping) {
        if (cubemaps.has(texture)) {
          const cubemap = cubemaps.get(texture).texture;
          return mapTextureMapping(cubemap, texture.mapping);
        } else {
          const image = texture.image;
          if (image && image.height > 0) {
            const renderTarget = new WebGLCubeRenderTarget(image.height / 2);
            renderTarget.fromEquirectangularTexture(renderer, texture);
            cubemaps.set(texture, renderTarget);
            texture.addEventListener("dispose", onTextureDispose);
            return mapTextureMapping(renderTarget.texture, texture.mapping);
          } else {
            return null;
          }
        }
      }
    }
    return texture;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemap = cubemaps.get(texture);
    if (cubemap !== void 0) {
      cubemaps.delete(texture);
      cubemap.dispose();
    }
  }
  function dispose() {
    cubemaps = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
class OrthographicCamera extends Camera {
  constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
    super();
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    this.zoom = source.zoom;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    return this;
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const dx = (this.right - this.left) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (this.right + this.left) / 2;
    const cy = (this.top + this.bottom) / 2;
    let left = cx - dx;
    let right = cx + dx;
    let top = cy + dy;
    let bottom = cy - dy;
    if (this.view !== null && this.view.enabled) {
      const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      left += scaleW * this.view.offsetX;
      right = left + scaleW * this.view.width;
      top -= scaleH * this.view.offsetY;
      bottom = top - scaleH * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.zoom = this.zoom;
    data.object.left = this.left;
    data.object.right = this.right;
    data.object.top = this.top;
    data.object.bottom = this.bottom;
    data.object.near = this.near;
    data.object.far = this.far;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    return data;
  }
}
OrthographicCamera.prototype.isOrthographicCamera = true;
const LOD_MIN = 4;
const EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
const MAX_SAMPLES = 20;
const _flatCamera = /* @__PURE__ */ new OrthographicCamera();
const _clearColor = /* @__PURE__ */ new Color();
let _oldTarget = null;
const PHI = (1 + Math.sqrt(5)) / 2;
const INV_PHI = 1 / PHI;
const _axisDirections = [
  /* @__PURE__ */ new Vector3(1, 1, 1),
  /* @__PURE__ */ new Vector3(-1, 1, 1),
  /* @__PURE__ */ new Vector3(1, 1, -1),
  /* @__PURE__ */ new Vector3(-1, 1, -1),
  /* @__PURE__ */ new Vector3(0, PHI, INV_PHI),
  /* @__PURE__ */ new Vector3(0, PHI, -INV_PHI),
  /* @__PURE__ */ new Vector3(INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(-INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(PHI, INV_PHI, 0),
  /* @__PURE__ */ new Vector3(-PHI, INV_PHI, 0)
];
class PMREMGenerator {
  constructor(renderer) {
    this._renderer = renderer;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._lodPlanes = [];
    this._sizeLods = [];
    this._sigmas = [];
    this._blurMaterial = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._compileMaterial(this._blurMaterial);
  }
  fromScene(scene, sigma = 0, near = 0.1, far = 100) {
    _oldTarget = this._renderer.getRenderTarget();
    this._setSize(256);
    const cubeUVRenderTarget = this._allocateTargets();
    cubeUVRenderTarget.depthBuffer = true;
    this._sceneToCubeUV(scene, near, far, cubeUVRenderTarget);
    if (sigma > 0) {
      this._blur(cubeUVRenderTarget, 0, 0, sigma);
    }
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  fromEquirectangular(equirectangular, renderTarget = null) {
    return this._fromTexture(equirectangular, renderTarget);
  }
  fromCubemap(cubemap, renderTarget = null) {
    return this._fromTexture(cubemap, renderTarget);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = _getCubemapMaterial();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = _getEquirectMaterial();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null)
      this._cubemapMaterial.dispose();
    if (this._equirectMaterial !== null)
      this._equirectMaterial.dispose();
  }
  _setSize(cubeSize) {
    this._lodMax = Math.floor(Math.log2(cubeSize));
    this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    if (this._blurMaterial !== null)
      this._blurMaterial.dispose();
    if (this._pingPongRenderTarget !== null)
      this._pingPongRenderTarget.dispose();
    for (let i = 0; i < this._lodPlanes.length; i++) {
      this._lodPlanes[i].dispose();
    }
  }
  _cleanup(outputTarget) {
    this._renderer.setRenderTarget(_oldTarget);
    outputTarget.scissorTest = false;
    _setViewport(outputTarget, 0, 0, outputTarget.width, outputTarget.height);
  }
  _fromTexture(texture, renderTarget) {
    if (texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping) {
      this._setSize(texture.image.length === 0 ? 16 : texture.image[0].width || texture.image[0].image.width);
    } else {
      this._setSize(texture.image.width / 4);
    }
    _oldTarget = this._renderer.getRenderTarget();
    const cubeUVRenderTarget = renderTarget || this._allocateTargets();
    this._textureToCubeUV(texture, cubeUVRenderTarget);
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  _allocateTargets() {
    const width = 3 * Math.max(this._cubeSize, 16 * 7);
    const height = 4 * this._cubeSize;
    const params = {
      magFilter: LinearFilter,
      minFilter: LinearFilter,
      generateMipmaps: false,
      type: HalfFloatType,
      format: RGBAFormat,
      encoding: LinearEncoding,
      depthBuffer: false
    };
    const cubeUVRenderTarget = _createRenderTarget(width, height, params);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== width) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = _createRenderTarget(width, height, params);
      const { _lodMax } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _createPlanes(_lodMax));
      this._blurMaterial = _getBlurShader(_lodMax, width, height);
    }
    return cubeUVRenderTarget;
  }
  _compileMaterial(material) {
    const tmpMesh = new Mesh(this._lodPlanes[0], material);
    this._renderer.compile(tmpMesh, _flatCamera);
  }
  _sceneToCubeUV(scene, near, far, cubeUVRenderTarget) {
    const fov2 = 90;
    const aspect2 = 1;
    const cubeCamera = new PerspectiveCamera(fov2, aspect2, near, far);
    const upSign = [1, -1, 1, 1, 1, 1];
    const forwardSign = [1, 1, 1, -1, -1, -1];
    const renderer = this._renderer;
    const originalAutoClear = renderer.autoClear;
    const toneMapping = renderer.toneMapping;
    renderer.getClearColor(_clearColor);
    renderer.toneMapping = NoToneMapping;
    renderer.autoClear = false;
    const backgroundMaterial = new MeshBasicMaterial({
      name: "PMREM.Background",
      side: BackSide,
      depthWrite: false,
      depthTest: false
    });
    const backgroundBox = new Mesh(new BoxGeometry(), backgroundMaterial);
    let useSolidColor = false;
    const background = scene.background;
    if (background) {
      if (background.isColor) {
        backgroundMaterial.color.copy(background);
        scene.background = null;
        useSolidColor = true;
      }
    } else {
      backgroundMaterial.color.copy(_clearColor);
      useSolidColor = true;
    }
    for (let i = 0; i < 6; i++) {
      const col = i % 3;
      if (col === 0) {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(forwardSign[i], 0, 0);
      } else if (col === 1) {
        cubeCamera.up.set(0, 0, upSign[i]);
        cubeCamera.lookAt(0, forwardSign[i], 0);
      } else {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(0, 0, forwardSign[i]);
      }
      const size = this._cubeSize;
      _setViewport(cubeUVRenderTarget, col * size, i > 2 ? size : 0, size, size);
      renderer.setRenderTarget(cubeUVRenderTarget);
      if (useSolidColor) {
        renderer.render(backgroundBox, cubeCamera);
      }
      renderer.render(scene, cubeCamera);
    }
    backgroundBox.geometry.dispose();
    backgroundBox.material.dispose();
    renderer.toneMapping = toneMapping;
    renderer.autoClear = originalAutoClear;
    scene.background = background;
  }
  _textureToCubeUV(texture, cubeUVRenderTarget) {
    const renderer = this._renderer;
    const isCubeTexture = texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping;
    if (isCubeTexture) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = _getCubemapMaterial();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = texture.isRenderTargetTexture === false ? -1 : 1;
    } else {
      if (this._equirectMaterial === null) {
        this._equirectMaterial = _getEquirectMaterial();
      }
    }
    const material = isCubeTexture ? this._cubemapMaterial : this._equirectMaterial;
    const mesh = new Mesh(this._lodPlanes[0], material);
    const uniforms = material.uniforms;
    uniforms["envMap"].value = texture;
    const size = this._cubeSize;
    _setViewport(cubeUVRenderTarget, 0, 0, 3 * size, 2 * size);
    renderer.setRenderTarget(cubeUVRenderTarget);
    renderer.render(mesh, _flatCamera);
  }
  _applyPMREM(cubeUVRenderTarget) {
    const renderer = this._renderer;
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const sigma = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]);
      const poleAxis = _axisDirections[(i - 1) % _axisDirections.length];
      this._blur(cubeUVRenderTarget, i - 1, i, sigma, poleAxis);
    }
    renderer.autoClear = autoClear;
  }
  _blur(cubeUVRenderTarget, lodIn, lodOut, sigma, poleAxis) {
    const pingPongRenderTarget = this._pingPongRenderTarget;
    this._halfBlur(
      cubeUVRenderTarget,
      pingPongRenderTarget,
      lodIn,
      lodOut,
      sigma,
      "latitudinal",
      poleAxis
    );
    this._halfBlur(
      pingPongRenderTarget,
      cubeUVRenderTarget,
      lodOut,
      lodOut,
      sigma,
      "longitudinal",
      poleAxis
    );
  }
  _halfBlur(targetIn, targetOut, lodIn, lodOut, sigmaRadians, direction, poleAxis) {
    const renderer = this._renderer;
    const blurMaterial = this._blurMaterial;
    if (direction !== "latitudinal" && direction !== "longitudinal") {
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    }
    const STANDARD_DEVIATIONS = 3;
    const blurMesh = new Mesh(this._lodPlanes[lodOut], blurMaterial);
    const blurUniforms = blurMaterial.uniforms;
    const pixels = this._sizeLods[lodIn] - 1;
    const radiansPerPixel = isFinite(sigmaRadians) ? Math.PI / (2 * pixels) : 2 * Math.PI / (2 * MAX_SAMPLES - 1);
    const sigmaPixels = sigmaRadians / radiansPerPixel;
    const samples = isFinite(sigmaRadians) ? 1 + Math.floor(STANDARD_DEVIATIONS * sigmaPixels) : MAX_SAMPLES;
    if (samples > MAX_SAMPLES) {
      console.warn(`sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`);
    }
    const weights = [];
    let sum = 0;
    for (let i = 0; i < MAX_SAMPLES; ++i) {
      const x2 = i / sigmaPixels;
      const weight = Math.exp(-x2 * x2 / 2);
      weights.push(weight);
      if (i === 0) {
        sum += weight;
      } else if (i < samples) {
        sum += 2 * weight;
      }
    }
    for (let i = 0; i < weights.length; i++) {
      weights[i] = weights[i] / sum;
    }
    blurUniforms["envMap"].value = targetIn.texture;
    blurUniforms["samples"].value = samples;
    blurUniforms["weights"].value = weights;
    blurUniforms["latitudinal"].value = direction === "latitudinal";
    if (poleAxis) {
      blurUniforms["poleAxis"].value = poleAxis;
    }
    const { _lodMax } = this;
    blurUniforms["dTheta"].value = radiansPerPixel;
    blurUniforms["mipInt"].value = _lodMax - lodIn;
    const outputSize = this._sizeLods[lodOut];
    const x = 3 * outputSize * (lodOut > _lodMax - LOD_MIN ? lodOut - _lodMax + LOD_MIN : 0);
    const y = 4 * (this._cubeSize - outputSize);
    _setViewport(targetOut, x, y, 3 * outputSize, 2 * outputSize);
    renderer.setRenderTarget(targetOut);
    renderer.render(blurMesh, _flatCamera);
  }
}
function _createPlanes(lodMax) {
  const lodPlanes = [];
  const sizeLods = [];
  const sigmas = [];
  let lod = lodMax;
  const totalLods = lodMax - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
  for (let i = 0; i < totalLods; i++) {
    const sizeLod = Math.pow(2, lod);
    sizeLods.push(sizeLod);
    let sigma = 1 / sizeLod;
    if (i > lodMax - LOD_MIN) {
      sigma = EXTRA_LOD_SIGMA[i - lodMax + LOD_MIN - 1];
    } else if (i === 0) {
      sigma = 0;
    }
    sigmas.push(sigma);
    const texelSize = 1 / (sizeLod - 2);
    const min = -texelSize;
    const max = 1 + texelSize;
    const uv1 = [min, min, max, min, max, max, min, min, max, max, min, max];
    const cubeFaces = 6;
    const vertices = 6;
    const positionSize = 3;
    const uvSize = 2;
    const faceIndexSize = 1;
    const position = new Float32Array(positionSize * vertices * cubeFaces);
    const uv = new Float32Array(uvSize * vertices * cubeFaces);
    const faceIndex = new Float32Array(faceIndexSize * vertices * cubeFaces);
    for (let face = 0; face < cubeFaces; face++) {
      const x = face % 3 * 2 / 3 - 1;
      const y = face > 2 ? 0 : -1;
      const coordinates = [
        x,
        y,
        0,
        x + 2 / 3,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y + 1,
        0
      ];
      position.set(coordinates, positionSize * vertices * face);
      uv.set(uv1, uvSize * vertices * face);
      const fill = [face, face, face, face, face, face];
      faceIndex.set(fill, faceIndexSize * vertices * face);
    }
    const planes = new BufferGeometry();
    planes.setAttribute("position", new BufferAttribute(position, positionSize));
    planes.setAttribute("uv", new BufferAttribute(uv, uvSize));
    planes.setAttribute("faceIndex", new BufferAttribute(faceIndex, faceIndexSize));
    lodPlanes.push(planes);
    if (lod > LOD_MIN) {
      lod--;
    }
  }
  return { lodPlanes, sizeLods, sigmas };
}
function _createRenderTarget(width, height, params) {
  const cubeUVRenderTarget = new WebGLRenderTarget(width, height, params);
  cubeUVRenderTarget.texture.mapping = CubeUVReflectionMapping;
  cubeUVRenderTarget.texture.name = "PMREM.cubeUv";
  cubeUVRenderTarget.scissorTest = true;
  return cubeUVRenderTarget;
}
function _setViewport(target, x, y, width, height) {
  target.viewport.set(x, y, width, height);
  target.scissor.set(x, y, width, height);
}
function _getBlurShader(lodMax, width, height) {
  const weights = new Float32Array(MAX_SAMPLES);
  const poleAxis = new Vector3(0, 1, 0);
  const shaderMaterial = new ShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: {
      "n": MAX_SAMPLES,
      "CUBEUV_TEXEL_WIDTH": 1 / width,
      "CUBEUV_TEXEL_HEIGHT": 1 / height,
      "CUBEUV_MAX_MIP": `${lodMax}.0`
    },
    uniforms: {
      "envMap": { value: null },
      "samples": { value: 1 },
      "weights": { value: weights },
      "latitudinal": { value: false },
      "dTheta": { value: 0 },
      "mipInt": { value: 0 },
      "poleAxis": { value: poleAxis }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

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
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
  return shaderMaterial;
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      "envMap": { value: null }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

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
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      "envMap": { value: null },
      "flipEnvMap": { value: -1 }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCommonVertexShader() {
  return `

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
	`;
}
function WebGLCubeUVMaps(renderer) {
  let cubeUVmaps = /* @__PURE__ */ new WeakMap();
  let pmremGenerator = null;
  function get(texture) {
    if (texture && texture.isTexture) {
      const mapping = texture.mapping;
      const isEquirectMap = mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping;
      const isCubeMap = mapping === CubeReflectionMapping || mapping === CubeRefractionMapping;
      if (isEquirectMap || isCubeMap) {
        if (texture.isRenderTargetTexture && texture.needsPMREMUpdate === true) {
          texture.needsPMREMUpdate = false;
          let renderTarget = cubeUVmaps.get(texture);
          if (pmremGenerator === null)
            pmremGenerator = new PMREMGenerator(renderer);
          renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture, renderTarget) : pmremGenerator.fromCubemap(texture, renderTarget);
          cubeUVmaps.set(texture, renderTarget);
          return renderTarget.texture;
        } else {
          if (cubeUVmaps.has(texture)) {
            return cubeUVmaps.get(texture).texture;
          } else {
            const image = texture.image;
            if (isEquirectMap && image && image.height > 0 || isCubeMap && image && isCubeTextureComplete(image)) {
              if (pmremGenerator === null)
                pmremGenerator = new PMREMGenerator(renderer);
              const renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture) : pmremGenerator.fromCubemap(texture);
              cubeUVmaps.set(texture, renderTarget);
              texture.addEventListener("dispose", onTextureDispose);
              return renderTarget.texture;
            } else {
              return null;
            }
          }
        }
      }
    }
    return texture;
  }
  function isCubeTextureComplete(image) {
    let count = 0;
    const length = 6;
    for (let i = 0; i < length; i++) {
      if (image[i] !== void 0)
        count++;
    }
    return count === length;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemapUV = cubeUVmaps.get(texture);
    if (cubemapUV !== void 0) {
      cubeUVmaps.delete(texture);
      cubemapUV.dispose();
    }
  }
  function dispose() {
    cubeUVmaps = /* @__PURE__ */ new WeakMap();
    if (pmremGenerator !== null) {
      pmremGenerator.dispose();
      pmremGenerator = null;
    }
  }
  return {
    get,
    dispose
  };
}
function WebGLExtensions(gl) {
  const extensions = {};
  function getExtension(name) {
    if (extensions[name] !== void 0) {
      return extensions[name];
    }
    let extension;
    switch (name) {
      case "WEBGL_depth_texture":
        extension = gl.getExtension("WEBGL_depth_texture") || gl.getExtension("MOZ_WEBGL_depth_texture") || gl.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        extension = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        extension = gl.getExtension("WEBGL_compressed_texture_s3tc") || gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        extension = gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        extension = gl.getExtension(name);
    }
    extensions[name] = extension;
    return extension;
  }
  return {
    has: function(name) {
      return getExtension(name) !== null;
    },
    init: function(capabilities) {
      if (capabilities.isWebGL2) {
        getExtension("EXT_color_buffer_float");
      } else {
        getExtension("WEBGL_depth_texture");
        getExtension("OES_texture_float");
        getExtension("OES_texture_half_float");
        getExtension("OES_texture_half_float_linear");
        getExtension("OES_standard_derivatives");
        getExtension("OES_element_index_uint");
        getExtension("OES_vertex_array_object");
        getExtension("ANGLE_instanced_arrays");
      }
      getExtension("OES_texture_float_linear");
      getExtension("EXT_color_buffer_half_float");
      getExtension("WEBGL_multisampled_render_to_texture");
    },
    get: function(name) {
      const extension = getExtension(name);
      if (extension === null) {
        console.warn("THREE.WebGLRenderer: " + name + " extension not supported.");
      }
      return extension;
    }
  };
}
function WebGLGeometries(gl, attributes, info, bindingStates) {
  const geometries = {};
  const wireframeAttributes = /* @__PURE__ */ new WeakMap();
  function onGeometryDispose(event) {
    const geometry = event.target;
    if (geometry.index !== null) {
      attributes.remove(geometry.index);
    }
    for (const name in geometry.attributes) {
      attributes.remove(geometry.attributes[name]);
    }
    geometry.removeEventListener("dispose", onGeometryDispose);
    delete geometries[geometry.id];
    const attribute = wireframeAttributes.get(geometry);
    if (attribute) {
      attributes.remove(attribute);
      wireframeAttributes.delete(geometry);
    }
    bindingStates.releaseStatesOfGeometry(geometry);
    if (geometry.isInstancedBufferGeometry === true) {
      delete geometry._maxInstanceCount;
    }
    info.memory.geometries--;
  }
  function get(object, geometry) {
    if (geometries[geometry.id] === true)
      return geometry;
    geometry.addEventListener("dispose", onGeometryDispose);
    geometries[geometry.id] = true;
    info.memory.geometries++;
    return geometry;
  }
  function update(geometry) {
    const geometryAttributes = geometry.attributes;
    for (const name in geometryAttributes) {
      attributes.update(geometryAttributes[name], gl.ARRAY_BUFFER);
    }
    const morphAttributes = geometry.morphAttributes;
    for (const name in morphAttributes) {
      const array = morphAttributes[name];
      for (let i = 0, l = array.length; i < l; i++) {
        attributes.update(array[i], gl.ARRAY_BUFFER);
      }
    }
  }
  function updateWireframeAttribute(geometry) {
    const indices = [];
    const geometryIndex = geometry.index;
    const geometryPosition = geometry.attributes.position;
    let version = 0;
    if (geometryIndex !== null) {
      const array = geometryIndex.array;
      version = geometryIndex.version;
      for (let i = 0, l = array.length; i < l; i += 3) {
        const a = array[i + 0];
        const b = array[i + 1];
        const c = array[i + 2];
        indices.push(a, b, b, c, c, a);
      }
    } else {
      const array = geometryPosition.array;
      version = geometryPosition.version;
      for (let i = 0, l = array.length / 3 - 1; i < l; i += 3) {
        const a = i + 0;
        const b = i + 1;
        const c = i + 2;
        indices.push(a, b, b, c, c, a);
      }
    }
    const attribute = new (arrayNeedsUint32(indices) ? Uint32BufferAttribute : Uint16BufferAttribute)(indices, 1);
    attribute.version = version;
    const previousAttribute = wireframeAttributes.get(geometry);
    if (previousAttribute)
      attributes.remove(previousAttribute);
    wireframeAttributes.set(geometry, attribute);
  }
  function getWireframeAttribute(geometry) {
    const currentAttribute = wireframeAttributes.get(geometry);
    if (currentAttribute) {
      const geometryIndex = geometry.index;
      if (geometryIndex !== null) {
        if (currentAttribute.version < geometryIndex.version) {
          updateWireframeAttribute(geometry);
        }
      }
    } else {
      updateWireframeAttribute(geometry);
    }
    return wireframeAttributes.get(geometry);
  }
  return {
    get,
    update,
    getWireframeAttribute
  };
}
function WebGLIndexedBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  let type, bytesPerElement;
  function setIndex(value) {
    type = value.type;
    bytesPerElement = value.bytesPerElement;
  }
  function render(start, count) {
    gl.drawElements(mode, count, type, start * bytesPerElement);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawElementsInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawElementsInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, count, type, start * bytesPerElement, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.setIndex = setIndex;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLInfo(gl) {
  const memory = {
    geometries: 0,
    textures: 0
  };
  const render = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function update(count, mode, instanceCount) {
    render.calls++;
    switch (mode) {
      case gl.TRIANGLES:
        render.triangles += instanceCount * (count / 3);
        break;
      case gl.LINES:
        render.lines += instanceCount * (count / 2);
        break;
      case gl.LINE_STRIP:
        render.lines += instanceCount * (count - 1);
        break;
      case gl.LINE_LOOP:
        render.lines += instanceCount * count;
        break;
      case gl.POINTS:
        render.points += instanceCount * count;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", mode);
        break;
    }
  }
  function reset() {
    render.frame++;
    render.calls = 0;
    render.triangles = 0;
    render.points = 0;
    render.lines = 0;
  }
  return {
    memory,
    render,
    programs: null,
    autoReset: true,
    reset,
    update
  };
}
class DataArrayTexture extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
DataArrayTexture.prototype.isDataArrayTexture = true;
function numericalSort(a, b) {
  return a[0] - b[0];
}
function absNumericalSort(a, b) {
  return Math.abs(b[1]) - Math.abs(a[1]);
}
function denormalize(morph, attribute) {
  let denominator = 1;
  const array = attribute.isInterleavedBufferAttribute ? attribute.data.array : attribute.array;
  if (array instanceof Int8Array)
    denominator = 127;
  else if (array instanceof Int16Array)
    denominator = 32767;
  else if (array instanceof Int32Array)
    denominator = 2147483647;
  else
    console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", array);
  morph.divideScalar(denominator);
}
function WebGLMorphtargets(gl, capabilities, textures) {
  const influencesList = {};
  const morphInfluences = new Float32Array(8);
  const morphTextures = /* @__PURE__ */ new WeakMap();
  const morph = new Vector4();
  const workInfluences = [];
  for (let i = 0; i < 8; i++) {
    workInfluences[i] = [i, 0];
  }
  function update(object, geometry, material, program) {
    const objectInfluences = object.morphTargetInfluences;
    if (capabilities.isWebGL2 === true) {
      const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
      const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
      let entry = morphTextures.get(geometry);
      if (entry === void 0 || entry.count !== morphTargetsCount) {
        let disposeTexture = function() {
          texture.dispose();
          morphTextures.delete(geometry);
          geometry.removeEventListener("dispose", disposeTexture);
        };
        if (entry !== void 0)
          entry.texture.dispose();
        const hasMorphPosition = geometry.morphAttributes.position !== void 0;
        const hasMorphNormals = geometry.morphAttributes.normal !== void 0;
        const hasMorphColors = geometry.morphAttributes.color !== void 0;
        const morphTargets = geometry.morphAttributes.position || [];
        const morphNormals = geometry.morphAttributes.normal || [];
        const morphColors = geometry.morphAttributes.color || [];
        let vertexDataCount = 0;
        if (hasMorphPosition === true)
          vertexDataCount = 1;
        if (hasMorphNormals === true)
          vertexDataCount = 2;
        if (hasMorphColors === true)
          vertexDataCount = 3;
        let width = geometry.attributes.position.count * vertexDataCount;
        let height = 1;
        if (width > capabilities.maxTextureSize) {
          height = Math.ceil(width / capabilities.maxTextureSize);
          width = capabilities.maxTextureSize;
        }
        const buffer = new Float32Array(width * height * 4 * morphTargetsCount);
        const texture = new DataArrayTexture(buffer, width, height, morphTargetsCount);
        texture.type = FloatType;
        texture.needsUpdate = true;
        const vertexDataStride = vertexDataCount * 4;
        for (let i = 0; i < morphTargetsCount; i++) {
          const morphTarget = morphTargets[i];
          const morphNormal = morphNormals[i];
          const morphColor = morphColors[i];
          const offset = width * height * 4 * i;
          for (let j = 0; j < morphTarget.count; j++) {
            const stride = j * vertexDataStride;
            if (hasMorphPosition === true) {
              morph.fromBufferAttribute(morphTarget, j);
              if (morphTarget.normalized === true)
                denormalize(morph, morphTarget);
              buffer[offset + stride + 0] = morph.x;
              buffer[offset + stride + 1] = morph.y;
              buffer[offset + stride + 2] = morph.z;
              buffer[offset + stride + 3] = 0;
            }
            if (hasMorphNormals === true) {
              morph.fromBufferAttribute(morphNormal, j);
              if (morphNormal.normalized === true)
                denormalize(morph, morphNormal);
              buffer[offset + stride + 4] = morph.x;
              buffer[offset + stride + 5] = morph.y;
              buffer[offset + stride + 6] = morph.z;
              buffer[offset + stride + 7] = 0;
            }
            if (hasMorphColors === true) {
              morph.fromBufferAttribute(morphColor, j);
              if (morphColor.normalized === true)
                denormalize(morph, morphColor);
              buffer[offset + stride + 8] = morph.x;
              buffer[offset + stride + 9] = morph.y;
              buffer[offset + stride + 10] = morph.z;
              buffer[offset + stride + 11] = morphColor.itemSize === 4 ? morph.w : 1;
            }
          }
        }
        entry = {
          count: morphTargetsCount,
          texture,
          size: new Vector2(width, height)
        };
        morphTextures.set(geometry, entry);
        geometry.addEventListener("dispose", disposeTexture);
      }
      let morphInfluencesSum = 0;
      for (let i = 0; i < objectInfluences.length; i++) {
        morphInfluencesSum += objectInfluences[i];
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", objectInfluences);
      program.getUniforms().setValue(gl, "morphTargetsTexture", entry.texture, textures);
      program.getUniforms().setValue(gl, "morphTargetsTextureSize", entry.size);
    } else {
      const length = objectInfluences === void 0 ? 0 : objectInfluences.length;
      let influences = influencesList[geometry.id];
      if (influences === void 0 || influences.length !== length) {
        influences = [];
        for (let i = 0; i < length; i++) {
          influences[i] = [i, 0];
        }
        influencesList[geometry.id] = influences;
      }
      for (let i = 0; i < length; i++) {
        const influence = influences[i];
        influence[0] = i;
        influence[1] = objectInfluences[i];
      }
      influences.sort(absNumericalSort);
      for (let i = 0; i < 8; i++) {
        if (i < length && influences[i][1]) {
          workInfluences[i][0] = influences[i][0];
          workInfluences[i][1] = influences[i][1];
        } else {
          workInfluences[i][0] = Number.MAX_SAFE_INTEGER;
          workInfluences[i][1] = 0;
        }
      }
      workInfluences.sort(numericalSort);
      const morphTargets = geometry.morphAttributes.position;
      const morphNormals = geometry.morphAttributes.normal;
      let morphInfluencesSum = 0;
      for (let i = 0; i < 8; i++) {
        const influence = workInfluences[i];
        const index = influence[0];
        const value = influence[1];
        if (index !== Number.MAX_SAFE_INTEGER && value) {
          if (morphTargets && geometry.getAttribute("morphTarget" + i) !== morphTargets[index]) {
            geometry.setAttribute("morphTarget" + i, morphTargets[index]);
          }
          if (morphNormals && geometry.getAttribute("morphNormal" + i) !== morphNormals[index]) {
            geometry.setAttribute("morphNormal" + i, morphNormals[index]);
          }
          morphInfluences[i] = value;
          morphInfluencesSum += value;
        } else {
          if (morphTargets && geometry.hasAttribute("morphTarget" + i) === true) {
            geometry.deleteAttribute("morphTarget" + i);
          }
          if (morphNormals && geometry.hasAttribute("morphNormal" + i) === true) {
            geometry.deleteAttribute("morphNormal" + i);
          }
          morphInfluences[i] = 0;
        }
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", morphInfluences);
    }
  }
  return {
    update
  };
}
function WebGLObjects(gl, geometries, attributes, info) {
  let updateMap = /* @__PURE__ */ new WeakMap();
  function update(object) {
    const frame = info.render.frame;
    const geometry = object.geometry;
    const buffergeometry = geometries.get(object, geometry);
    if (updateMap.get(buffergeometry) !== frame) {
      geometries.update(buffergeometry);
      updateMap.set(buffergeometry, frame);
    }
    if (object.isInstancedMesh) {
      if (object.hasEventListener("dispose", onInstancedMeshDispose) === false) {
        object.addEventListener("dispose", onInstancedMeshDispose);
      }
      attributes.update(object.instanceMatrix, gl.ARRAY_BUFFER);
      if (object.instanceColor !== null) {
        attributes.update(object.instanceColor, gl.ARRAY_BUFFER);
      }
    }
    return buffergeometry;
  }
  function dispose() {
    updateMap = /* @__PURE__ */ new WeakMap();
  }
  function onInstancedMeshDispose(event) {
    const instancedMesh = event.target;
    instancedMesh.removeEventListener("dispose", onInstancedMeshDispose);
    attributes.remove(instancedMesh.instanceMatrix);
    if (instancedMesh.instanceColor !== null)
      attributes.remove(instancedMesh.instanceColor);
  }
  return {
    update,
    dispose
  };
}
class Data3DTexture extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
Data3DTexture.prototype.isData3DTexture = true;
const emptyTexture = new Texture();
const emptyArrayTexture = new DataArrayTexture();
const empty3dTexture = new Data3DTexture();
const emptyCubeTexture = new CubeTexture();
const arrayCacheF32 = [];
const arrayCacheI32 = [];
const mat4array = new Float32Array(16);
const mat3array = new Float32Array(9);
const mat2array = new Float32Array(4);
function flatten(array, nBlocks, blockSize) {
  const firstElem = array[0];
  if (firstElem <= 0 || firstElem > 0)
    return array;
  const n = nBlocks * blockSize;
  let r = arrayCacheF32[n];
  if (r === void 0) {
    r = new Float32Array(n);
    arrayCacheF32[n] = r;
  }
  if (nBlocks !== 0) {
    firstElem.toArray(r, 0);
    for (let i = 1, offset = 0; i !== nBlocks; ++i) {
      offset += blockSize;
      array[i].toArray(r, offset);
    }
  }
  return r;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function copyArray(a, b) {
  for (let i = 0, l = b.length; i < l; i++) {
    a[i] = b[i];
  }
}
function allocTexUnits(textures, n) {
  let r = arrayCacheI32[n];
  if (r === void 0) {
    r = new Int32Array(n);
    arrayCacheI32[n] = r;
  }
  for (let i = 0; i !== n; ++i) {
    r[i] = textures.allocateTextureUnit();
  }
  return r;
}
function setValueV1f(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1f(this.addr, v);
  cache[0] = v;
}
function setValueV2f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y) {
      gl.uniform2f(this.addr, v.x, v.y);
      cache[0] = v.x;
      cache[1] = v.y;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform2fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV3f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
      gl.uniform3f(this.addr, v.x, v.y, v.z);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
    }
  } else if (v.r !== void 0) {
    if (cache[0] !== v.r || cache[1] !== v.g || cache[2] !== v.b) {
      gl.uniform3f(this.addr, v.r, v.g, v.b);
      cache[0] = v.r;
      cache[1] = v.g;
      cache[2] = v.b;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform3fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV4f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
      gl.uniform4f(this.addr, v.x, v.y, v.z, v.w);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
      cache[3] = v.w;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform4fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueM2(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix2fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat2array.set(elements);
    gl.uniformMatrix2fv(this.addr, false, mat2array);
    copyArray(cache, elements);
  }
}
function setValueM3(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix3fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat3array.set(elements);
    gl.uniformMatrix3fv(this.addr, false, mat3array);
    copyArray(cache, elements);
  }
}
function setValueM4(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix4fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat4array.set(elements);
    gl.uniformMatrix4fv(this.addr, false, mat4array);
    copyArray(cache, elements);
  }
}
function setValueV1i(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1i(this.addr, v);
  cache[0] = v;
}
function setValueV2i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform2iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV3i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform3iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV4i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform4iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV1ui(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1ui(this.addr, v);
  cache[0] = v;
}
function setValueV2ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform2uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueV3ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform3uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueV4ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform4uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueT1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2D(v || emptyTexture, unit);
}
function setValueT3D1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture3D(v || empty3dTexture, unit);
}
function setValueT6(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTextureCube(v || emptyCubeTexture, unit);
}
function setValueT2DArray1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2DArray(v || emptyArrayTexture, unit);
}
function getSingularSetter(type) {
  switch (type) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(gl, v) {
  gl.uniform1fv(this.addr, v);
}
function setValueV2fArray(gl, v) {
  const data = flatten(v, this.size, 2);
  gl.uniform2fv(this.addr, data);
}
function setValueV3fArray(gl, v) {
  const data = flatten(v, this.size, 3);
  gl.uniform3fv(this.addr, data);
}
function setValueV4fArray(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniform4fv(this.addr, data);
}
function setValueM2Array(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniformMatrix2fv(this.addr, false, data);
}
function setValueM3Array(gl, v) {
  const data = flatten(v, this.size, 9);
  gl.uniformMatrix3fv(this.addr, false, data);
}
function setValueM4Array(gl, v) {
  const data = flatten(v, this.size, 16);
  gl.uniformMatrix4fv(this.addr, false, data);
}
function setValueV1iArray(gl, v) {
  gl.uniform1iv(this.addr, v);
}
function setValueV2iArray(gl, v) {
  gl.uniform2iv(this.addr, v);
}
function setValueV3iArray(gl, v) {
  gl.uniform3iv(this.addr, v);
}
function setValueV4iArray(gl, v) {
  gl.uniform4iv(this.addr, v);
}
function setValueV1uiArray(gl, v) {
  gl.uniform1uiv(this.addr, v);
}
function setValueV2uiArray(gl, v) {
  gl.uniform2uiv(this.addr, v);
}
function setValueV3uiArray(gl, v) {
  gl.uniform3uiv(this.addr, v);
}
function setValueV4uiArray(gl, v) {
  gl.uniform4uiv(this.addr, v);
}
function setValueT1Array(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2D(v[i] || emptyTexture, units[i]);
  }
}
function setValueT3DArray(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture3D(v[i] || empty3dTexture, units[i]);
  }
}
function setValueT6Array(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTextureCube(v[i] || emptyCubeTexture, units[i]);
  }
}
function setValueT2DArrayArray(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2DArray(v[i] || emptyArrayTexture, units[i]);
  }
}
function getPureArraySetter(type) {
  switch (type) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3DArray;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArrayArray;
  }
}
function SingleUniform(id, activeInfo, addr) {
  this.id = id;
  this.addr = addr;
  this.cache = [];
  this.setValue = getSingularSetter(activeInfo.type);
}
function PureArrayUniform(id, activeInfo, addr) {
  this.id = id;
  this.addr = addr;
  this.cache = [];
  this.size = activeInfo.size;
  this.setValue = getPureArraySetter(activeInfo.type);
}
function StructuredUniform(id) {
  this.id = id;
  this.seq = [];
  this.map = {};
}
StructuredUniform.prototype.setValue = function(gl, value, textures) {
  const seq = this.seq;
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i];
    u.setValue(gl, value[u.id], textures);
  }
};
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(container, uniformObject) {
  container.seq.push(uniformObject);
  container.map[uniformObject.id] = uniformObject;
}
function parseUniform(activeInfo, addr, container) {
  const path = activeInfo.name, pathLength = path.length;
  RePathPart.lastIndex = 0;
  while (true) {
    const match = RePathPart.exec(path), matchEnd = RePathPart.lastIndex;
    let id = match[1];
    const idIsIndex = match[2] === "]", subscript = match[3];
    if (idIsIndex)
      id = id | 0;
    if (subscript === void 0 || subscript === "[" && matchEnd + 2 === pathLength) {
      addUniform(container, subscript === void 0 ? new SingleUniform(id, activeInfo, addr) : new PureArrayUniform(id, activeInfo, addr));
      break;
    } else {
      const map = container.map;
      let next = map[id];
      if (next === void 0) {
        next = new StructuredUniform(id);
        addUniform(container, next);
      }
      container = next;
    }
  }
}
function WebGLUniforms(gl, program) {
  this.seq = [];
  this.map = {};
  const n = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; ++i) {
    const info = gl.getActiveUniform(program, i), addr = gl.getUniformLocation(program, info.name);
    parseUniform(info, addr, this);
  }
}
WebGLUniforms.prototype.setValue = function(gl, name, value, textures) {
  const u = this.map[name];
  if (u !== void 0)
    u.setValue(gl, value, textures);
};
WebGLUniforms.prototype.setOptional = function(gl, object, name) {
  const v = object[name];
  if (v !== void 0)
    this.setValue(gl, name, v);
};
WebGLUniforms.upload = function(gl, seq, values, textures) {
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i], v = values[u.id];
    if (v.needsUpdate !== false) {
      u.setValue(gl, v.value, textures);
    }
  }
};
WebGLUniforms.seqWithValue = function(seq, values) {
  const r = [];
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i];
    if (u.id in values)
      r.push(u);
  }
  return r;
};
function WebGLShader(gl, type, string) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, string);
  gl.compileShader(shader);
  return shader;
}
let programIdCount = 0;
function handleSource(string, errorLine) {
  const lines = string.split("\n");
  const lines2 = [];
  const from = Math.max(errorLine - 6, 0);
  const to = Math.min(errorLine + 6, lines.length);
  for (let i = from; i < to; i++) {
    lines2.push(i + 1 + ": " + lines[i]);
  }
  return lines2.join("\n");
}
function getEncodingComponents(encoding) {
  switch (encoding) {
    case LinearEncoding:
      return ["Linear", "( value )"];
    case sRGBEncoding:
      return ["sRGB", "( value )"];
    default:
      console.warn("THREE.WebGLProgram: Unsupported encoding:", encoding);
      return ["Linear", "( value )"];
  }
}
function getShaderErrors(gl, shader, type) {
  const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  const errors = gl.getShaderInfoLog(shader).trim();
  if (status && errors === "")
    return "";
  const errorMatches = /ERROR: 0:(\d+)/.exec(errors);
  if (errorMatches) {
    const errorLine = parseInt(errorMatches[0]);
    return type.toUpperCase() + "\n\n" + errors + "\n\n" + handleSource(gl.getShaderSource(shader), errorLine);
  } else {
    return errors;
  }
}
function getTexelEncodingFunction(functionName, encoding) {
  const components = getEncodingComponents(encoding);
  return "vec4 " + functionName + "( vec4 value ) { return LinearTo" + components[0] + components[1] + "; }";
}
function getToneMappingFunction(functionName, toneMapping) {
  let toneMappingName;
  switch (toneMapping) {
    case LinearToneMapping:
      toneMappingName = "Linear";
      break;
    case ReinhardToneMapping:
      toneMappingName = "Reinhard";
      break;
    case CineonToneMapping:
      toneMappingName = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      toneMappingName = "ACESFilmic";
      break;
    case CustomToneMapping:
      toneMappingName = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", toneMapping);
      toneMappingName = "Linear";
  }
  return "vec3 " + functionName + "( vec3 color ) { return " + toneMappingName + "ToneMapping( color ); }";
}
function generateExtensions(parameters) {
  const chunks = [
    parameters.extensionDerivatives || !!parameters.envMapCubeUVHeight || parameters.bumpMap || parameters.tangentSpaceNormalMap || parameters.clearcoatNormalMap || parameters.flatShading || parameters.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (parameters.extensionFragDepth || parameters.logarithmicDepthBuffer) && parameters.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    parameters.extensionDrawBuffers && parameters.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (parameters.extensionShaderTextureLOD || parameters.envMap || parameters.transmission) && parameters.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ];
  return chunks.filter(filterEmptyLine).join("\n");
}
function generateDefines(defines) {
  const chunks = [];
  for (const name in defines) {
    const value = defines[name];
    if (value === false)
      continue;
    chunks.push("#define " + name + " " + value);
  }
  return chunks.join("\n");
}
function fetchAttributeLocations(gl, program) {
  const attributes = {};
  const n = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveAttrib(program, i);
    const name = info.name;
    let locationSize = 1;
    if (info.type === gl.FLOAT_MAT2)
      locationSize = 2;
    if (info.type === gl.FLOAT_MAT3)
      locationSize = 3;
    if (info.type === gl.FLOAT_MAT4)
      locationSize = 4;
    attributes[name] = {
      type: info.type,
      location: gl.getAttribLocation(program, name),
      locationSize
    };
  }
  return attributes;
}
function filterEmptyLine(string) {
  return string !== "";
}
function replaceLightNums(string, parameters) {
  return string.replace(/NUM_DIR_LIGHTS/g, parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g, parameters.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g, parameters.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, parameters.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, parameters.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, parameters.numPointLightShadows);
}
function replaceClippingPlaneNums(string, parameters) {
  return string.replace(/NUM_CLIPPING_PLANES/g, parameters.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, parameters.numClippingPlanes - parameters.numClipIntersection);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(string) {
  return string.replace(includePattern, includeReplacer);
}
function includeReplacer(match, include) {
  const string = ShaderChunk[include];
  if (string === void 0) {
    throw new Error("Can not resolve #include <" + include + ">");
  }
  return resolveIncludes(string);
}
const deprecatedUnrollLoopPattern = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(string) {
  return string.replace(unrollLoopPattern, loopReplacer).replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer);
}
function deprecatedLoopReplacer(match, start, end, snippet) {
  console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
  return loopReplacer(match, start, end, snippet);
}
function loopReplacer(match, start, end, snippet) {
  let string = "";
  for (let i = parseInt(start); i < parseInt(end); i++) {
    string += snippet.replace(/\[\s*i\s*\]/g, "[ " + i + " ]").replace(/UNROLLED_LOOP_INDEX/g, i);
  }
  return string;
}
function generatePrecision(parameters) {
  let precisionstring = "precision " + parameters.precision + " float;\nprecision " + parameters.precision + " int;";
  if (parameters.precision === "highp") {
    precisionstring += "\n#define HIGH_PRECISION";
  } else if (parameters.precision === "mediump") {
    precisionstring += "\n#define MEDIUM_PRECISION";
  } else if (parameters.precision === "lowp") {
    precisionstring += "\n#define LOW_PRECISION";
  }
  return precisionstring;
}
function generateShadowMapTypeDefine(parameters) {
  let shadowMapTypeDefine = "SHADOWMAP_TYPE_BASIC";
  if (parameters.shadowMapType === PCFShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF";
  } else if (parameters.shadowMapType === PCFSoftShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF_SOFT";
  } else if (parameters.shadowMapType === VSMShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_VSM";
  }
  return shadowMapTypeDefine;
}
function generateEnvMapTypeDefine(parameters) {
  let envMapTypeDefine = "ENVMAP_TYPE_CUBE";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  }
  return envMapTypeDefine;
}
function generateEnvMapModeDefine(parameters) {
  let envMapModeDefine = "ENVMAP_MODE_REFLECTION";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeRefractionMapping:
        envMapModeDefine = "ENVMAP_MODE_REFRACTION";
        break;
    }
  }
  return envMapModeDefine;
}
function generateEnvMapBlendingDefine(parameters) {
  let envMapBlendingDefine = "ENVMAP_BLENDING_NONE";
  if (parameters.envMap) {
    switch (parameters.combine) {
      case MultiplyOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_ADD";
        break;
    }
  }
  return envMapBlendingDefine;
}
function generateCubeUVSize(parameters) {
  const imageHeight = parameters.envMapCubeUVHeight;
  if (imageHeight === null)
    return null;
  const maxMip = Math.log2(imageHeight) - 2;
  const texelHeight = 1 / imageHeight;
  const texelWidth = 1 / (3 * Math.max(Math.pow(2, maxMip), 7 * 16));
  return { texelWidth, texelHeight, maxMip };
}
function WebGLProgram(renderer, cacheKey, parameters, bindingStates) {
  const gl = renderer.getContext();
  const defines = parameters.defines;
  let vertexShader = parameters.vertexShader;
  let fragmentShader = parameters.fragmentShader;
  const shadowMapTypeDefine = generateShadowMapTypeDefine(parameters);
  const envMapTypeDefine = generateEnvMapTypeDefine(parameters);
  const envMapModeDefine = generateEnvMapModeDefine(parameters);
  const envMapBlendingDefine = generateEnvMapBlendingDefine(parameters);
  const envMapCubeUVSize = generateCubeUVSize(parameters);
  const customExtensions = parameters.isWebGL2 ? "" : generateExtensions(parameters);
  const customDefines = generateDefines(defines);
  const program = gl.createProgram();
  let prefixVertex, prefixFragment;
  let versionString = parameters.glslVersion ? "#version " + parameters.glslVersion + "\n" : "";
  if (parameters.isRawShaderMaterial) {
    prefixVertex = [
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixVertex.length > 0) {
      prefixVertex += "\n";
    }
    prefixFragment = [
      customExtensions,
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixFragment.length > 0) {
      prefixFragment += "\n";
    }
  } else {
    prefixVertex = [
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.instancing ? "#define USE_INSTANCING" : "",
      parameters.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      parameters.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMap && parameters.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      parameters.normalMap && parameters.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.displacementMap && parameters.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUvs ? "#define USE_UV" : "",
      parameters.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.skinning ? "#define USE_SKINNING" : "",
      parameters.morphTargets ? "#define USE_MORPHTARGETS" : "",
      parameters.morphNormals && parameters.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      parameters.morphColors && parameters.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + parameters.morphTextureStride : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_COUNT " + parameters.morphTargetsCount : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
      "	attribute vec3 morphTarget0;",
      "	attribute vec3 morphTarget1;",
      "	attribute vec3 morphTarget2;",
      "	attribute vec3 morphTarget3;",
      "	#ifdef USE_MORPHNORMALS",
      "		attribute vec3 morphNormal0;",
      "		attribute vec3 morphNormal1;",
      "		attribute vec3 morphNormal2;",
      "		attribute vec3 morphNormal3;",
      "	#else",
      "		attribute vec3 morphTarget4;",
      "		attribute vec3 morphTarget5;",
      "		attribute vec3 morphTarget6;",
      "		attribute vec3 morphTarget7;",
      "	#endif",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      "\n"
    ].filter(filterEmptyLine).join("\n");
    prefixFragment = [
      customExtensions,
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.matcap ? "#define USE_MATCAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapTypeDefine : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.envMap ? "#define " + envMapBlendingDefine : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_WIDTH " + envMapCubeUVSize.texelWidth : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_HEIGHT " + envMapCubeUVSize.texelHeight : "",
      envMapCubeUVSize ? "#define CUBEUV_MAX_MIP " + envMapCubeUVSize.maxMip + ".0" : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMap && parameters.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      parameters.normalMap && parameters.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      parameters.clearcoat ? "#define USE_CLEARCOAT" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.alphaTest ? "#define USE_ALPHATEST" : "",
      parameters.sheen ? "#define USE_SHEEN" : "",
      parameters.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors || parameters.instancingColor ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUvs ? "#define USE_UV" : "",
      parameters.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      parameters.gradientMap ? "#define USE_GRADIENTMAP" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      parameters.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      parameters.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
      parameters.toneMapping !== NoToneMapping ? ShaderChunk["tonemapping_pars_fragment"] : "",
      parameters.toneMapping !== NoToneMapping ? getToneMappingFunction("toneMapping", parameters.toneMapping) : "",
      parameters.dithering ? "#define DITHERING" : "",
      parameters.opaque ? "#define OPAQUE" : "",
      ShaderChunk["encodings_pars_fragment"],
      getTexelEncodingFunction("linearToOutputTexel", parameters.outputEncoding),
      parameters.useDepthPacking ? "#define DEPTH_PACKING " + parameters.depthPacking : "",
      "\n"
    ].filter(filterEmptyLine).join("\n");
  }
  vertexShader = resolveIncludes(vertexShader);
  vertexShader = replaceLightNums(vertexShader, parameters);
  vertexShader = replaceClippingPlaneNums(vertexShader, parameters);
  fragmentShader = resolveIncludes(fragmentShader);
  fragmentShader = replaceLightNums(fragmentShader, parameters);
  fragmentShader = replaceClippingPlaneNums(fragmentShader, parameters);
  vertexShader = unrollLoops(vertexShader);
  fragmentShader = unrollLoops(fragmentShader);
  if (parameters.isWebGL2 && parameters.isRawShaderMaterial !== true) {
    versionString = "#version 300 es\n";
    prefixVertex = [
      "precision mediump sampler2DArray;",
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join("\n") + "\n" + prefixVertex;
    prefixFragment = [
      "#define varying in",
      parameters.glslVersion === GLSL3 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      parameters.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join("\n") + "\n" + prefixFragment;
  }
  const vertexGlsl = versionString + prefixVertex + vertexShader;
  const fragmentGlsl = versionString + prefixFragment + fragmentShader;
  const glVertexShader = WebGLShader(gl, gl.VERTEX_SHADER, vertexGlsl);
  const glFragmentShader = WebGLShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
  gl.attachShader(program, glVertexShader);
  gl.attachShader(program, glFragmentShader);
  if (parameters.index0AttributeName !== void 0) {
    gl.bindAttribLocation(program, 0, parameters.index0AttributeName);
  } else if (parameters.morphTargets === true) {
    gl.bindAttribLocation(program, 0, "position");
  }
  gl.linkProgram(program);
  if (renderer.debug.checkShaderErrors) {
    const programLog = gl.getProgramInfoLog(program).trim();
    const vertexLog = gl.getShaderInfoLog(glVertexShader).trim();
    const fragmentLog = gl.getShaderInfoLog(glFragmentShader).trim();
    let runnable = true;
    let haveDiagnostics = true;
    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
      runnable = false;
      const vertexErrors = getShaderErrors(gl, glVertexShader, "vertex");
      const fragmentErrors = getShaderErrors(gl, glFragmentShader, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + gl.getError() + " - VALIDATE_STATUS " + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + "\n\nProgram Info Log: " + programLog + "\n" + vertexErrors + "\n" + fragmentErrors
      );
    } else if (programLog !== "") {
      console.warn("THREE.WebGLProgram: Program Info Log:", programLog);
    } else if (vertexLog === "" || fragmentLog === "") {
      haveDiagnostics = false;
    }
    if (haveDiagnostics) {
      this.diagnostics = {
        runnable,
        programLog,
        vertexShader: {
          log: vertexLog,
          prefix: prefixVertex
        },
        fragmentShader: {
          log: fragmentLog,
          prefix: prefixFragment
        }
      };
    }
  }
  gl.deleteShader(glVertexShader);
  gl.deleteShader(glFragmentShader);
  let cachedUniforms;
  this.getUniforms = function() {
    if (cachedUniforms === void 0) {
      cachedUniforms = new WebGLUniforms(gl, program);
    }
    return cachedUniforms;
  };
  let cachedAttributes;
  this.getAttributes = function() {
    if (cachedAttributes === void 0) {
      cachedAttributes = fetchAttributeLocations(gl, program);
    }
    return cachedAttributes;
  };
  this.destroy = function() {
    bindingStates.releaseStatesOfProgram(this);
    gl.deleteProgram(program);
    this.program = void 0;
  };
  this.name = parameters.shaderName;
  this.id = programIdCount++;
  this.cacheKey = cacheKey;
  this.usedTimes = 1;
  this.program = program;
  this.vertexShader = glVertexShader;
  this.fragmentShader = glFragmentShader;
  return this;
}
let _id = 0;
class WebGLShaderCache {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map();
    this.materialCache = /* @__PURE__ */ new Map();
  }
  update(material) {
    const vertexShader = material.vertexShader;
    const fragmentShader = material.fragmentShader;
    const vertexShaderStage = this._getShaderStage(vertexShader);
    const fragmentShaderStage = this._getShaderStage(fragmentShader);
    const materialShaders = this._getShaderCacheForMaterial(material);
    if (materialShaders.has(vertexShaderStage) === false) {
      materialShaders.add(vertexShaderStage);
      vertexShaderStage.usedTimes++;
    }
    if (materialShaders.has(fragmentShaderStage) === false) {
      materialShaders.add(fragmentShaderStage);
      fragmentShaderStage.usedTimes++;
    }
    return this;
  }
  remove(material) {
    const materialShaders = this.materialCache.get(material);
    for (const shaderStage of materialShaders) {
      shaderStage.usedTimes--;
      if (shaderStage.usedTimes === 0)
        this.shaderCache.delete(shaderStage.code);
    }
    this.materialCache.delete(material);
    return this;
  }
  getVertexShaderID(material) {
    return this._getShaderStage(material.vertexShader).id;
  }
  getFragmentShaderID(material) {
    return this._getShaderStage(material.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(material) {
    const cache = this.materialCache;
    if (cache.has(material) === false) {
      cache.set(material, /* @__PURE__ */ new Set());
    }
    return cache.get(material);
  }
  _getShaderStage(code) {
    const cache = this.shaderCache;
    if (cache.has(code) === false) {
      const stage = new WebGLShaderStage(code);
      cache.set(code, stage);
    }
    return cache.get(code);
  }
}
class WebGLShaderStage {
  constructor(code) {
    this.id = _id++;
    this.code = code;
    this.usedTimes = 0;
  }
}
function WebGLPrograms(renderer, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping) {
  const _programLayers = new Layers();
  const _customShaders = new WebGLShaderCache();
  const programs = [];
  const isWebGL2 = capabilities.isWebGL2;
  const logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
  const vertexTextures = capabilities.vertexTextures;
  let precision = capabilities.precision;
  const shaderIDs = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function getParameters(material, lights, shadows, scene, object) {
    const fog = scene.fog;
    const geometry = object.geometry;
    const environment = material.isMeshStandardMaterial ? scene.environment : null;
    const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
    const envMapCubeUVHeight = !!envMap && envMap.mapping === CubeUVReflectionMapping ? envMap.image.height : null;
    const shaderID = shaderIDs[material.type];
    if (material.precision !== null) {
      precision = capabilities.getMaxPrecision(material.precision);
      if (precision !== material.precision) {
        console.warn("THREE.WebGLProgram.getParameters:", material.precision, "not supported, using", precision, "instead.");
      }
    }
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    let morphTextureStride = 0;
    if (geometry.morphAttributes.position !== void 0)
      morphTextureStride = 1;
    if (geometry.morphAttributes.normal !== void 0)
      morphTextureStride = 2;
    if (geometry.morphAttributes.color !== void 0)
      morphTextureStride = 3;
    let vertexShader, fragmentShader;
    let customVertexShaderID, customFragmentShaderID;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      vertexShader = shader.vertexShader;
      fragmentShader = shader.fragmentShader;
    } else {
      vertexShader = material.vertexShader;
      fragmentShader = material.fragmentShader;
      _customShaders.update(material);
      customVertexShaderID = _customShaders.getVertexShaderID(material);
      customFragmentShaderID = _customShaders.getFragmentShaderID(material);
    }
    const currentRenderTarget = renderer.getRenderTarget();
    const useAlphaTest = material.alphaTest > 0;
    const useClearcoat = material.clearcoat > 0;
    const parameters = {
      isWebGL2,
      shaderID,
      shaderName: material.type,
      vertexShader,
      fragmentShader,
      defines: material.defines,
      customVertexShaderID,
      customFragmentShaderID,
      isRawShaderMaterial: material.isRawShaderMaterial === true,
      glslVersion: material.glslVersion,
      precision,
      instancing: object.isInstancedMesh === true,
      instancingColor: object.isInstancedMesh === true && object.instanceColor !== null,
      supportsVertexTextures: vertexTextures,
      outputEncoding: currentRenderTarget === null ? renderer.outputEncoding : currentRenderTarget.isXRRenderTarget === true ? currentRenderTarget.texture.encoding : LinearEncoding,
      map: !!material.map,
      matcap: !!material.matcap,
      envMap: !!envMap,
      envMapMode: envMap && envMap.mapping,
      envMapCubeUVHeight,
      lightMap: !!material.lightMap,
      aoMap: !!material.aoMap,
      emissiveMap: !!material.emissiveMap,
      bumpMap: !!material.bumpMap,
      normalMap: !!material.normalMap,
      objectSpaceNormalMap: material.normalMapType === ObjectSpaceNormalMap,
      tangentSpaceNormalMap: material.normalMapType === TangentSpaceNormalMap,
      decodeVideoTexture: !!material.map && material.map.isVideoTexture === true && material.map.encoding === sRGBEncoding,
      clearcoat: useClearcoat,
      clearcoatMap: useClearcoat && !!material.clearcoatMap,
      clearcoatRoughnessMap: useClearcoat && !!material.clearcoatRoughnessMap,
      clearcoatNormalMap: useClearcoat && !!material.clearcoatNormalMap,
      displacementMap: !!material.displacementMap,
      roughnessMap: !!material.roughnessMap,
      metalnessMap: !!material.metalnessMap,
      specularMap: !!material.specularMap,
      specularIntensityMap: !!material.specularIntensityMap,
      specularColorMap: !!material.specularColorMap,
      opaque: material.transparent === false && material.blending === NormalBlending,
      alphaMap: !!material.alphaMap,
      alphaTest: useAlphaTest,
      gradientMap: !!material.gradientMap,
      sheen: material.sheen > 0,
      sheenColorMap: !!material.sheenColorMap,
      sheenRoughnessMap: !!material.sheenRoughnessMap,
      transmission: material.transmission > 0,
      transmissionMap: !!material.transmissionMap,
      thicknessMap: !!material.thicknessMap,
      combine: material.combine,
      vertexTangents: !!material.normalMap && !!geometry.attributes.tangent,
      vertexColors: material.vertexColors,
      vertexAlphas: material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4,
      vertexUvs: !!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatMap || !!material.clearcoatRoughnessMap || !!material.clearcoatNormalMap || !!material.displacementMap || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || !!material.sheenColorMap || !!material.sheenRoughnessMap,
      uvsVertexOnly: !(!!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatNormalMap || material.transmission > 0 || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || material.sheen > 0 || !!material.sheenColorMap || !!material.sheenRoughnessMap) && !!material.displacementMap,
      fog: !!fog,
      useFog: material.fog === true,
      fogExp2: fog && fog.isFogExp2,
      flatShading: !!material.flatShading,
      sizeAttenuation: material.sizeAttenuation,
      logarithmicDepthBuffer,
      skinning: object.isSkinnedMesh === true,
      morphTargets: geometry.morphAttributes.position !== void 0,
      morphNormals: geometry.morphAttributes.normal !== void 0,
      morphColors: geometry.morphAttributes.color !== void 0,
      morphTargetsCount,
      morphTextureStride,
      numDirLights: lights.directional.length,
      numPointLights: lights.point.length,
      numSpotLights: lights.spot.length,
      numRectAreaLights: lights.rectArea.length,
      numHemiLights: lights.hemi.length,
      numDirLightShadows: lights.directionalShadowMap.length,
      numPointLightShadows: lights.pointShadowMap.length,
      numSpotLightShadows: lights.spotShadowMap.length,
      numClippingPlanes: clipping.numPlanes,
      numClipIntersection: clipping.numIntersection,
      dithering: material.dithering,
      shadowMapEnabled: renderer.shadowMap.enabled && shadows.length > 0,
      shadowMapType: renderer.shadowMap.type,
      toneMapping: material.toneMapped ? renderer.toneMapping : NoToneMapping,
      physicallyCorrectLights: renderer.physicallyCorrectLights,
      premultipliedAlpha: material.premultipliedAlpha,
      doubleSided: material.side === DoubleSide,
      flipSided: material.side === BackSide,
      useDepthPacking: !!material.depthPacking,
      depthPacking: material.depthPacking || 0,
      index0AttributeName: material.index0AttributeName,
      extensionDerivatives: material.extensions && material.extensions.derivatives,
      extensionFragDepth: material.extensions && material.extensions.fragDepth,
      extensionDrawBuffers: material.extensions && material.extensions.drawBuffers,
      extensionShaderTextureLOD: material.extensions && material.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: isWebGL2 || extensions.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: isWebGL2 || extensions.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: isWebGL2 || extensions.has("EXT_shader_texture_lod"),
      customProgramCacheKey: material.customProgramCacheKey()
    };
    return parameters;
  }
  function getProgramCacheKey(parameters) {
    const array = [];
    if (parameters.shaderID) {
      array.push(parameters.shaderID);
    } else {
      array.push(parameters.customVertexShaderID);
      array.push(parameters.customFragmentShaderID);
    }
    if (parameters.defines !== void 0) {
      for (const name in parameters.defines) {
        array.push(name);
        array.push(parameters.defines[name]);
      }
    }
    if (parameters.isRawShaderMaterial === false) {
      getProgramCacheKeyParameters(array, parameters);
      getProgramCacheKeyBooleans(array, parameters);
      array.push(renderer.outputEncoding);
    }
    array.push(parameters.customProgramCacheKey);
    return array.join();
  }
  function getProgramCacheKeyParameters(array, parameters) {
    array.push(parameters.precision);
    array.push(parameters.outputEncoding);
    array.push(parameters.envMapMode);
    array.push(parameters.envMapCubeUVHeight);
    array.push(parameters.combine);
    array.push(parameters.vertexUvs);
    array.push(parameters.fogExp2);
    array.push(parameters.sizeAttenuation);
    array.push(parameters.morphTargetsCount);
    array.push(parameters.morphAttributeCount);
    array.push(parameters.numDirLights);
    array.push(parameters.numPointLights);
    array.push(parameters.numSpotLights);
    array.push(parameters.numHemiLights);
    array.push(parameters.numRectAreaLights);
    array.push(parameters.numDirLightShadows);
    array.push(parameters.numPointLightShadows);
    array.push(parameters.numSpotLightShadows);
    array.push(parameters.shadowMapType);
    array.push(parameters.toneMapping);
    array.push(parameters.numClippingPlanes);
    array.push(parameters.numClipIntersection);
    array.push(parameters.depthPacking);
  }
  function getProgramCacheKeyBooleans(array, parameters) {
    _programLayers.disableAll();
    if (parameters.isWebGL2)
      _programLayers.enable(0);
    if (parameters.supportsVertexTextures)
      _programLayers.enable(1);
    if (parameters.instancing)
      _programLayers.enable(2);
    if (parameters.instancingColor)
      _programLayers.enable(3);
    if (parameters.map)
      _programLayers.enable(4);
    if (parameters.matcap)
      _programLayers.enable(5);
    if (parameters.envMap)
      _programLayers.enable(6);
    if (parameters.lightMap)
      _programLayers.enable(7);
    if (parameters.aoMap)
      _programLayers.enable(8);
    if (parameters.emissiveMap)
      _programLayers.enable(9);
    if (parameters.bumpMap)
      _programLayers.enable(10);
    if (parameters.normalMap)
      _programLayers.enable(11);
    if (parameters.objectSpaceNormalMap)
      _programLayers.enable(12);
    if (parameters.tangentSpaceNormalMap)
      _programLayers.enable(13);
    if (parameters.clearcoat)
      _programLayers.enable(14);
    if (parameters.clearcoatMap)
      _programLayers.enable(15);
    if (parameters.clearcoatRoughnessMap)
      _programLayers.enable(16);
    if (parameters.clearcoatNormalMap)
      _programLayers.enable(17);
    if (parameters.displacementMap)
      _programLayers.enable(18);
    if (parameters.specularMap)
      _programLayers.enable(19);
    if (parameters.roughnessMap)
      _programLayers.enable(20);
    if (parameters.metalnessMap)
      _programLayers.enable(21);
    if (parameters.gradientMap)
      _programLayers.enable(22);
    if (parameters.alphaMap)
      _programLayers.enable(23);
    if (parameters.alphaTest)
      _programLayers.enable(24);
    if (parameters.vertexColors)
      _programLayers.enable(25);
    if (parameters.vertexAlphas)
      _programLayers.enable(26);
    if (parameters.vertexUvs)
      _programLayers.enable(27);
    if (parameters.vertexTangents)
      _programLayers.enable(28);
    if (parameters.uvsVertexOnly)
      _programLayers.enable(29);
    if (parameters.fog)
      _programLayers.enable(30);
    array.push(_programLayers.mask);
    _programLayers.disableAll();
    if (parameters.useFog)
      _programLayers.enable(0);
    if (parameters.flatShading)
      _programLayers.enable(1);
    if (parameters.logarithmicDepthBuffer)
      _programLayers.enable(2);
    if (parameters.skinning)
      _programLayers.enable(3);
    if (parameters.morphTargets)
      _programLayers.enable(4);
    if (parameters.morphNormals)
      _programLayers.enable(5);
    if (parameters.morphColors)
      _programLayers.enable(6);
    if (parameters.premultipliedAlpha)
      _programLayers.enable(7);
    if (parameters.shadowMapEnabled)
      _programLayers.enable(8);
    if (parameters.physicallyCorrectLights)
      _programLayers.enable(9);
    if (parameters.doubleSided)
      _programLayers.enable(10);
    if (parameters.flipSided)
      _programLayers.enable(11);
    if (parameters.useDepthPacking)
      _programLayers.enable(12);
    if (parameters.dithering)
      _programLayers.enable(13);
    if (parameters.specularIntensityMap)
      _programLayers.enable(14);
    if (parameters.specularColorMap)
      _programLayers.enable(15);
    if (parameters.transmission)
      _programLayers.enable(16);
    if (parameters.transmissionMap)
      _programLayers.enable(17);
    if (parameters.thicknessMap)
      _programLayers.enable(18);
    if (parameters.sheen)
      _programLayers.enable(19);
    if (parameters.sheenColorMap)
      _programLayers.enable(20);
    if (parameters.sheenRoughnessMap)
      _programLayers.enable(21);
    if (parameters.decodeVideoTexture)
      _programLayers.enable(22);
    if (parameters.opaque)
      _programLayers.enable(23);
    array.push(_programLayers.mask);
  }
  function getUniforms(material) {
    const shaderID = shaderIDs[material.type];
    let uniforms;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      uniforms = UniformsUtils.clone(shader.uniforms);
    } else {
      uniforms = material.uniforms;
    }
    return uniforms;
  }
  function acquireProgram(parameters, cacheKey) {
    let program;
    for (let p = 0, pl = programs.length; p < pl; p++) {
      const preexistingProgram = programs[p];
      if (preexistingProgram.cacheKey === cacheKey) {
        program = preexistingProgram;
        ++program.usedTimes;
        break;
      }
    }
    if (program === void 0) {
      program = new WebGLProgram(renderer, cacheKey, parameters, bindingStates);
      programs.push(program);
    }
    return program;
  }
  function releaseProgram(program) {
    if (--program.usedTimes === 0) {
      const i = programs.indexOf(program);
      programs[i] = programs[programs.length - 1];
      programs.pop();
      program.destroy();
    }
  }
  function releaseShaderCache(material) {
    _customShaders.remove(material);
  }
  function dispose() {
    _customShaders.dispose();
  }
  return {
    getParameters,
    getProgramCacheKey,
    getUniforms,
    acquireProgram,
    releaseProgram,
    releaseShaderCache,
    programs,
    dispose
  };
}
function WebGLProperties() {
  let properties = /* @__PURE__ */ new WeakMap();
  function get(object) {
    let map = properties.get(object);
    if (map === void 0) {
      map = {};
      properties.set(object, map);
    }
    return map;
  }
  function remove(object) {
    properties.delete(object);
  }
  function update(object, key, value) {
    properties.get(object)[key] = value;
  }
  function dispose() {
    properties = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    remove,
    update,
    dispose
  };
}
function painterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.material.id !== b.material.id) {
    return a.material.id - b.material.id;
  } else if (a.z !== b.z) {
    return a.z - b.z;
  } else {
    return a.id - b.id;
  }
}
function reversePainterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.z !== b.z) {
    return b.z - a.z;
  } else {
    return a.id - b.id;
  }
}
function WebGLRenderList() {
  const renderItems = [];
  let renderItemsIndex = 0;
  const opaque = [];
  const transmissive = [];
  const transparent = [];
  function init() {
    renderItemsIndex = 0;
    opaque.length = 0;
    transmissive.length = 0;
    transparent.length = 0;
  }
  function getNextRenderItem(object, geometry, material, groupOrder, z, group) {
    let renderItem = renderItems[renderItemsIndex];
    if (renderItem === void 0) {
      renderItem = {
        id: object.id,
        object,
        geometry,
        material,
        groupOrder,
        renderOrder: object.renderOrder,
        z,
        group
      };
      renderItems[renderItemsIndex] = renderItem;
    } else {
      renderItem.id = object.id;
      renderItem.object = object;
      renderItem.geometry = geometry;
      renderItem.material = material;
      renderItem.groupOrder = groupOrder;
      renderItem.renderOrder = object.renderOrder;
      renderItem.z = z;
      renderItem.group = group;
    }
    renderItemsIndex++;
    return renderItem;
  }
  function push(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.push(renderItem);
    } else if (material.transparent === true) {
      transparent.push(renderItem);
    } else {
      opaque.push(renderItem);
    }
  }
  function unshift(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.unshift(renderItem);
    } else if (material.transparent === true) {
      transparent.unshift(renderItem);
    } else {
      opaque.unshift(renderItem);
    }
  }
  function sort(customOpaqueSort, customTransparentSort) {
    if (opaque.length > 1)
      opaque.sort(customOpaqueSort || painterSortStable);
    if (transmissive.length > 1)
      transmissive.sort(customTransparentSort || reversePainterSortStable);
    if (transparent.length > 1)
      transparent.sort(customTransparentSort || reversePainterSortStable);
  }
  function finish() {
    for (let i = renderItemsIndex, il = renderItems.length; i < il; i++) {
      const renderItem = renderItems[i];
      if (renderItem.id === null)
        break;
      renderItem.id = null;
      renderItem.object = null;
      renderItem.geometry = null;
      renderItem.material = null;
      renderItem.group = null;
    }
  }
  return {
    opaque,
    transmissive,
    transparent,
    init,
    push,
    unshift,
    finish,
    sort
  };
}
function WebGLRenderLists() {
  let lists = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth) {
    let list;
    if (lists.has(scene) === false) {
      list = new WebGLRenderList();
      lists.set(scene, [list]);
    } else {
      if (renderCallDepth >= lists.get(scene).length) {
        list = new WebGLRenderList();
        lists.get(scene).push(list);
      } else {
        list = lists.get(scene)[renderCallDepth];
      }
    }
    return list;
  }
  function dispose() {
    lists = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
function UniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            direction: new Vector3(),
            color: new Color()
          };
          break;
        case "SpotLight":
          uniforms = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          uniforms = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          uniforms = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color()
          };
          break;
        case "RectAreaLight":
          uniforms = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3()
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
function ShadowUniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "SpotLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "PointLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
let nextVersion = 0;
function shadowCastingLightsFirst(lightA, lightB) {
  return (lightB.castShadow ? 1 : 0) - (lightA.castShadow ? 1 : 0);
}
function WebGLLights(extensions, capabilities) {
  const cache = new UniformsCache();
  const shadowCache = ShadowUniformsCache();
  const state = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  };
  for (let i = 0; i < 9; i++)
    state.probe.push(new Vector3());
  const vector3 = new Vector3();
  const matrix4 = new Matrix4();
  const matrix42 = new Matrix4();
  function setup(lights, physicallyCorrectLights) {
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < 9; i++)
      state.probe[i].set(0, 0, 0);
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    let numDirectionalShadows = 0;
    let numPointShadows = 0;
    let numSpotShadows = 0;
    lights.sort(shadowCastingLightsFirst);
    const scaleFactor = physicallyCorrectLights !== true ? Math.PI : 1;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      const color = light.color;
      const intensity = light.intensity;
      const distance = light.distance;
      const shadowMap = light.shadow && light.shadow.map ? light.shadow.map.texture : null;
      if (light.isAmbientLight) {
        r += color.r * intensity * scaleFactor;
        g += color.g * intensity * scaleFactor;
        b += color.b * intensity * scaleFactor;
      } else if (light.isLightProbe) {
        for (let j = 0; j < 9; j++) {
          state.probe[j].addScaledVector(light.sh.coefficients[j], intensity);
        }
      } else if (light.isDirectionalLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.directionalShadow[directionalLength] = shadowUniforms;
          state.directionalShadowMap[directionalLength] = shadowMap;
          state.directionalShadowMatrix[directionalLength] = light.shadow.matrix;
          numDirectionalShadows++;
        }
        state.directional[directionalLength] = uniforms;
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = cache.get(light);
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.color.copy(color).multiplyScalar(intensity * scaleFactor);
        uniforms.distance = distance;
        uniforms.coneCos = Math.cos(light.angle);
        uniforms.penumbraCos = Math.cos(light.angle * (1 - light.penumbra));
        uniforms.decay = light.decay;
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.spotShadow[spotLength] = shadowUniforms;
          state.spotShadowMap[spotLength] = shadowMap;
          state.spotShadowMatrix[spotLength] = light.shadow.matrix;
          numSpotShadows++;
        }
        state.spot[spotLength] = uniforms;
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(color).multiplyScalar(intensity);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        state.rectArea[rectAreaLength] = uniforms;
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        uniforms.distance = light.distance;
        uniforms.decay = light.decay;
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          shadowUniforms.shadowCameraNear = shadow.camera.near;
          shadowUniforms.shadowCameraFar = shadow.camera.far;
          state.pointShadow[pointLength] = shadowUniforms;
          state.pointShadowMap[pointLength] = shadowMap;
          state.pointShadowMatrix[pointLength] = light.shadow.matrix;
          numPointShadows++;
        }
        state.point[pointLength] = uniforms;
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = cache.get(light);
        uniforms.skyColor.copy(light.color).multiplyScalar(intensity * scaleFactor);
        uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity * scaleFactor);
        state.hemi[hemiLength] = uniforms;
        hemiLength++;
      }
    }
    if (rectAreaLength > 0) {
      if (capabilities.isWebGL2) {
        state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
        state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
      } else {
        if (extensions.has("OES_texture_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
          state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
        } else if (extensions.has("OES_texture_half_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_HALF_1;
          state.rectAreaLTC2 = UniformsLib.LTC_HALF_2;
        } else {
          console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");
        }
      }
    }
    state.ambient[0] = r;
    state.ambient[1] = g;
    state.ambient[2] = b;
    const hash = state.hash;
    if (hash.directionalLength !== directionalLength || hash.pointLength !== pointLength || hash.spotLength !== spotLength || hash.rectAreaLength !== rectAreaLength || hash.hemiLength !== hemiLength || hash.numDirectionalShadows !== numDirectionalShadows || hash.numPointShadows !== numPointShadows || hash.numSpotShadows !== numSpotShadows) {
      state.directional.length = directionalLength;
      state.spot.length = spotLength;
      state.rectArea.length = rectAreaLength;
      state.point.length = pointLength;
      state.hemi.length = hemiLength;
      state.directionalShadow.length = numDirectionalShadows;
      state.directionalShadowMap.length = numDirectionalShadows;
      state.pointShadow.length = numPointShadows;
      state.pointShadowMap.length = numPointShadows;
      state.spotShadow.length = numSpotShadows;
      state.spotShadowMap.length = numSpotShadows;
      state.directionalShadowMatrix.length = numDirectionalShadows;
      state.pointShadowMatrix.length = numPointShadows;
      state.spotShadowMatrix.length = numSpotShadows;
      hash.directionalLength = directionalLength;
      hash.pointLength = pointLength;
      hash.spotLength = spotLength;
      hash.rectAreaLength = rectAreaLength;
      hash.hemiLength = hemiLength;
      hash.numDirectionalShadows = numDirectionalShadows;
      hash.numPointShadows = numPointShadows;
      hash.numSpotShadows = numSpotShadows;
      state.version = nextVersion++;
    }
  }
  function setupView(lights, camera) {
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    const viewMatrix = camera.matrixWorldInverse;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      if (light.isDirectionalLight) {
        const uniforms = state.directional[directionalLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = state.spot[spotLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = state.rectArea[rectAreaLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        matrix42.identity();
        matrix4.copy(light.matrixWorld);
        matrix4.premultiply(viewMatrix);
        matrix42.extractRotation(matrix4);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        uniforms.halfWidth.applyMatrix4(matrix42);
        uniforms.halfHeight.applyMatrix4(matrix42);
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = state.point[pointLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = state.hemi[hemiLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        uniforms.direction.transformDirection(viewMatrix);
        hemiLength++;
      }
    }
  }
  return {
    setup,
    setupView,
    state
  };
}
function WebGLRenderState(extensions, capabilities) {
  const lights = new WebGLLights(extensions, capabilities);
  const lightsArray = [];
  const shadowsArray = [];
  function init() {
    lightsArray.length = 0;
    shadowsArray.length = 0;
  }
  function pushLight(light) {
    lightsArray.push(light);
  }
  function pushShadow(shadowLight) {
    shadowsArray.push(shadowLight);
  }
  function setupLights(physicallyCorrectLights) {
    lights.setup(lightsArray, physicallyCorrectLights);
  }
  function setupLightsView(camera) {
    lights.setupView(lightsArray, camera);
  }
  const state = {
    lightsArray,
    shadowsArray,
    lights
  };
  return {
    init,
    state,
    setupLights,
    setupLightsView,
    pushLight,
    pushShadow
  };
}
function WebGLRenderStates(extensions, capabilities) {
  let renderStates = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth = 0) {
    let renderState;
    if (renderStates.has(scene) === false) {
      renderState = new WebGLRenderState(extensions, capabilities);
      renderStates.set(scene, [renderState]);
    } else {
      if (renderCallDepth >= renderStates.get(scene).length) {
        renderState = new WebGLRenderState(extensions, capabilities);
        renderStates.get(scene).push(renderState);
      } else {
        renderState = renderStates.get(scene)[renderCallDepth];
      }
    }
    return renderState;
  }
  function dispose() {
    renderStates = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
class MeshDepthMaterial extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshDepthMaterial";
    this.depthPacking = BasicDepthPacking;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.depthPacking = source.depthPacking;
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    return this;
  }
}
MeshDepthMaterial.prototype.isMeshDepthMaterial = true;
class MeshDistanceMaterial extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new Vector3();
    this.nearDistance = 1;
    this.farDistance = 1e3;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.referencePosition.copy(source.referencePosition);
    this.nearDistance = source.nearDistance;
    this.farDistance = source.farDistance;
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    return this;
  }
}
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = true;
const vertex = `
void main() {

	gl_Position = vec4( position, 1.0 );

}
`;
const fragment = `
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
`;
function WebGLShadowMap(_renderer, _objects, _capabilities) {
  let _frustum = new Frustum();
  const _shadowMapSize = new Vector2(), _viewportSize = new Vector2(), _viewport = new Vector4(), _depthMaterial = new MeshDepthMaterial({ depthPacking: RGBADepthPacking }), _distanceMaterial = new MeshDistanceMaterial(), _materialCache = {}, _maxTextureSize = _capabilities.maxTextureSize;
  const shadowSide = { 0: BackSide, 1: FrontSide, 2: DoubleSide };
  const shadowMaterialVertical = new ShaderMaterial({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Vector2() },
      radius: { value: 4 }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  });
  const shadowMaterialHorizontal = shadowMaterialVertical.clone();
  shadowMaterialHorizontal.defines.HORIZONTAL_PASS = 1;
  const fullScreenTri = new BufferGeometry();
  fullScreenTri.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const fullScreenMesh = new Mesh(fullScreenTri, shadowMaterialVertical);
  const scope = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = PCFShadowMap;
  this.render = function(lights, scene, camera) {
    if (scope.enabled === false)
      return;
    if (scope.autoUpdate === false && scope.needsUpdate === false)
      return;
    if (lights.length === 0)
      return;
    const currentRenderTarget = _renderer.getRenderTarget();
    const activeCubeFace = _renderer.getActiveCubeFace();
    const activeMipmapLevel = _renderer.getActiveMipmapLevel();
    const _state = _renderer.state;
    _state.setBlending(NoBlending);
    _state.buffers.color.setClear(1, 1, 1, 1);
    _state.buffers.depth.setTest(true);
    _state.setScissorTest(false);
    for (let i = 0, il = lights.length; i < il; i++) {
      const light = lights[i];
      const shadow = light.shadow;
      if (shadow === void 0) {
        console.warn("THREE.WebGLShadowMap:", light, "has no shadow.");
        continue;
      }
      if (shadow.autoUpdate === false && shadow.needsUpdate === false)
        continue;
      _shadowMapSize.copy(shadow.mapSize);
      const shadowFrameExtents = shadow.getFrameExtents();
      _shadowMapSize.multiply(shadowFrameExtents);
      _viewportSize.copy(shadow.mapSize);
      if (_shadowMapSize.x > _maxTextureSize || _shadowMapSize.y > _maxTextureSize) {
        if (_shadowMapSize.x > _maxTextureSize) {
          _viewportSize.x = Math.floor(_maxTextureSize / shadowFrameExtents.x);
          _shadowMapSize.x = _viewportSize.x * shadowFrameExtents.x;
          shadow.mapSize.x = _viewportSize.x;
        }
        if (_shadowMapSize.y > _maxTextureSize) {
          _viewportSize.y = Math.floor(_maxTextureSize / shadowFrameExtents.y);
          _shadowMapSize.y = _viewportSize.y * shadowFrameExtents.y;
          shadow.mapSize.y = _viewportSize.y;
        }
      }
      if (shadow.map === null && !shadow.isPointLightShadow && this.type === VSMShadowMap) {
        shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y);
        shadow.map.texture.name = light.name + ".shadowMap";
        shadow.mapPass = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y);
        shadow.camera.updateProjectionMatrix();
      }
      if (shadow.map === null) {
        const pars = { minFilter: NearestFilter, magFilter: NearestFilter, format: RGBAFormat };
        shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y, pars);
        shadow.map.texture.name = light.name + ".shadowMap";
        shadow.camera.updateProjectionMatrix();
      }
      _renderer.setRenderTarget(shadow.map);
      _renderer.clear();
      const viewportCount = shadow.getViewportCount();
      for (let vp = 0; vp < viewportCount; vp++) {
        const viewport = shadow.getViewport(vp);
        _viewport.set(
          _viewportSize.x * viewport.x,
          _viewportSize.y * viewport.y,
          _viewportSize.x * viewport.z,
          _viewportSize.y * viewport.w
        );
        _state.viewport(_viewport);
        shadow.updateMatrices(light, vp);
        _frustum = shadow.getFrustum();
        renderObject(scene, camera, shadow.camera, light, this.type);
      }
      if (!shadow.isPointLightShadow && this.type === VSMShadowMap) {
        VSMPass(shadow, camera);
      }
      shadow.needsUpdate = false;
    }
    scope.needsUpdate = false;
    _renderer.setRenderTarget(currentRenderTarget, activeCubeFace, activeMipmapLevel);
  };
  function VSMPass(shadow, camera) {
    const geometry = _objects.update(fullScreenMesh);
    if (shadowMaterialVertical.defines.VSM_SAMPLES !== shadow.blurSamples) {
      shadowMaterialVertical.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialHorizontal.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialVertical.needsUpdate = true;
      shadowMaterialHorizontal.needsUpdate = true;
    }
    shadowMaterialVertical.uniforms.shadow_pass.value = shadow.map.texture;
    shadowMaterialVertical.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialVertical.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.mapPass);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialVertical, fullScreenMesh, null);
    shadowMaterialHorizontal.uniforms.shadow_pass.value = shadow.mapPass.texture;
    shadowMaterialHorizontal.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialHorizontal.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.map);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialHorizontal, fullScreenMesh, null);
  }
  function getDepthMaterial(object, material, light, shadowCameraNear, shadowCameraFar, type) {
    let result = null;
    const customMaterial = light.isPointLight === true ? object.customDistanceMaterial : object.customDepthMaterial;
    if (customMaterial !== void 0) {
      result = customMaterial;
    } else {
      result = light.isPointLight === true ? _distanceMaterial : _depthMaterial;
    }
    if (_renderer.localClippingEnabled && material.clipShadows === true && material.clippingPlanes.length !== 0 || material.displacementMap && material.displacementScale !== 0 || material.alphaMap && material.alphaTest > 0) {
      const keyA = result.uuid, keyB = material.uuid;
      let materialsForVariant = _materialCache[keyA];
      if (materialsForVariant === void 0) {
        materialsForVariant = {};
        _materialCache[keyA] = materialsForVariant;
      }
      let cachedMaterial = materialsForVariant[keyB];
      if (cachedMaterial === void 0) {
        cachedMaterial = result.clone();
        materialsForVariant[keyB] = cachedMaterial;
      }
      result = cachedMaterial;
    }
    result.visible = material.visible;
    result.wireframe = material.wireframe;
    if (type === VSMShadowMap) {
      result.side = material.shadowSide !== null ? material.shadowSide : material.side;
    } else {
      result.side = material.shadowSide !== null ? material.shadowSide : shadowSide[material.side];
    }
    result.alphaMap = material.alphaMap;
    result.alphaTest = material.alphaTest;
    result.clipShadows = material.clipShadows;
    result.clippingPlanes = material.clippingPlanes;
    result.clipIntersection = material.clipIntersection;
    result.displacementMap = material.displacementMap;
    result.displacementScale = material.displacementScale;
    result.displacementBias = material.displacementBias;
    result.wireframeLinewidth = material.wireframeLinewidth;
    result.linewidth = material.linewidth;
    if (light.isPointLight === true && result.isMeshDistanceMaterial === true) {
      result.referencePosition.setFromMatrixPosition(light.matrixWorld);
      result.nearDistance = shadowCameraNear;
      result.farDistance = shadowCameraFar;
    }
    return result;
  }
  function renderObject(object, camera, shadowCamera, light, type) {
    if (object.visible === false)
      return;
    const visible = object.layers.test(camera.layers);
    if (visible && (object.isMesh || object.isLine || object.isPoints)) {
      if ((object.castShadow || object.receiveShadow && type === VSMShadowMap) && (!object.frustumCulled || _frustum.intersectsObject(object))) {
        object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse, object.matrixWorld);
        const geometry = _objects.update(object);
        const material = object.material;
        if (Array.isArray(material)) {
          const groups = geometry.groups;
          for (let k = 0, kl = groups.length; k < kl; k++) {
            const group = groups[k];
            const groupMaterial = material[group.materialIndex];
            if (groupMaterial && groupMaterial.visible) {
              const depthMaterial = getDepthMaterial(object, groupMaterial, light, shadowCamera.near, shadowCamera.far, type);
              _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, group);
            }
          }
        } else if (material.visible) {
          const depthMaterial = getDepthMaterial(object, material, light, shadowCamera.near, shadowCamera.far, type);
          _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, null);
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      renderObject(children[i], camera, shadowCamera, light, type);
    }
  }
}
function WebGLState(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function ColorBuffer() {
    let locked = false;
    const color = new Vector4();
    let currentColorMask = null;
    const currentColorClear = new Vector4(0, 0, 0, 0);
    return {
      setMask: function(colorMask) {
        if (currentColorMask !== colorMask && !locked) {
          gl.colorMask(colorMask, colorMask, colorMask, colorMask);
          currentColorMask = colorMask;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(r, g, b, a, premultipliedAlpha) {
        if (premultipliedAlpha === true) {
          r *= a;
          g *= a;
          b *= a;
        }
        color.set(r, g, b, a);
        if (currentColorClear.equals(color) === false) {
          gl.clearColor(r, g, b, a);
          currentColorClear.copy(color);
        }
      },
      reset: function() {
        locked = false;
        currentColorMask = null;
        currentColorClear.set(-1, 0, 0, 0);
      }
    };
  }
  function DepthBuffer() {
    let locked = false;
    let currentDepthMask = null;
    let currentDepthFunc = null;
    let currentDepthClear = null;
    return {
      setTest: function(depthTest) {
        if (depthTest) {
          enable(gl.DEPTH_TEST);
        } else {
          disable(gl.DEPTH_TEST);
        }
      },
      setMask: function(depthMask) {
        if (currentDepthMask !== depthMask && !locked) {
          gl.depthMask(depthMask);
          currentDepthMask = depthMask;
        }
      },
      setFunc: function(depthFunc) {
        if (currentDepthFunc !== depthFunc) {
          if (depthFunc) {
            switch (depthFunc) {
              case NeverDepth:
                gl.depthFunc(gl.NEVER);
                break;
              case AlwaysDepth:
                gl.depthFunc(gl.ALWAYS);
                break;
              case LessDepth:
                gl.depthFunc(gl.LESS);
                break;
              case LessEqualDepth:
                gl.depthFunc(gl.LEQUAL);
                break;
              case EqualDepth:
                gl.depthFunc(gl.EQUAL);
                break;
              case GreaterEqualDepth:
                gl.depthFunc(gl.GEQUAL);
                break;
              case GreaterDepth:
                gl.depthFunc(gl.GREATER);
                break;
              case NotEqualDepth:
                gl.depthFunc(gl.NOTEQUAL);
                break;
              default:
                gl.depthFunc(gl.LEQUAL);
            }
          } else {
            gl.depthFunc(gl.LEQUAL);
          }
          currentDepthFunc = depthFunc;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(depth) {
        if (currentDepthClear !== depth) {
          gl.clearDepth(depth);
          currentDepthClear = depth;
        }
      },
      reset: function() {
        locked = false;
        currentDepthMask = null;
        currentDepthFunc = null;
        currentDepthClear = null;
      }
    };
  }
  function StencilBuffer() {
    let locked = false;
    let currentStencilMask = null;
    let currentStencilFunc = null;
    let currentStencilRef = null;
    let currentStencilFuncMask = null;
    let currentStencilFail = null;
    let currentStencilZFail = null;
    let currentStencilZPass = null;
    let currentStencilClear = null;
    return {
      setTest: function(stencilTest) {
        if (!locked) {
          if (stencilTest) {
            enable(gl.STENCIL_TEST);
          } else {
            disable(gl.STENCIL_TEST);
          }
        }
      },
      setMask: function(stencilMask) {
        if (currentStencilMask !== stencilMask && !locked) {
          gl.stencilMask(stencilMask);
          currentStencilMask = stencilMask;
        }
      },
      setFunc: function(stencilFunc, stencilRef, stencilMask) {
        if (currentStencilFunc !== stencilFunc || currentStencilRef !== stencilRef || currentStencilFuncMask !== stencilMask) {
          gl.stencilFunc(stencilFunc, stencilRef, stencilMask);
          currentStencilFunc = stencilFunc;
          currentStencilRef = stencilRef;
          currentStencilFuncMask = stencilMask;
        }
      },
      setOp: function(stencilFail, stencilZFail, stencilZPass) {
        if (currentStencilFail !== stencilFail || currentStencilZFail !== stencilZFail || currentStencilZPass !== stencilZPass) {
          gl.stencilOp(stencilFail, stencilZFail, stencilZPass);
          currentStencilFail = stencilFail;
          currentStencilZFail = stencilZFail;
          currentStencilZPass = stencilZPass;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(stencil) {
        if (currentStencilClear !== stencil) {
          gl.clearStencil(stencil);
          currentStencilClear = stencil;
        }
      },
      reset: function() {
        locked = false;
        currentStencilMask = null;
        currentStencilFunc = null;
        currentStencilRef = null;
        currentStencilFuncMask = null;
        currentStencilFail = null;
        currentStencilZFail = null;
        currentStencilZPass = null;
        currentStencilClear = null;
      }
    };
  }
  const colorBuffer = new ColorBuffer();
  const depthBuffer = new DepthBuffer();
  const stencilBuffer = new StencilBuffer();
  let enabledCapabilities = {};
  let currentBoundFramebuffers = {};
  let currentDrawbuffers = /* @__PURE__ */ new WeakMap();
  let defaultDrawbuffers = [];
  let currentProgram = null;
  let currentBlendingEnabled = false;
  let currentBlending = null;
  let currentBlendEquation = null;
  let currentBlendSrc = null;
  let currentBlendDst = null;
  let currentBlendEquationAlpha = null;
  let currentBlendSrcAlpha = null;
  let currentBlendDstAlpha = null;
  let currentPremultipledAlpha = false;
  let currentFlipSided = null;
  let currentCullFace = null;
  let currentLineWidth = null;
  let currentPolygonOffsetFactor = null;
  let currentPolygonOffsetUnits = null;
  const maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let lineWidthAvailable = false;
  let version = 0;
  const glVersion = gl.getParameter(gl.VERSION);
  if (glVersion.indexOf("WebGL") !== -1) {
    version = parseFloat(/^WebGL (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 1;
  } else if (glVersion.indexOf("OpenGL ES") !== -1) {
    version = parseFloat(/^OpenGL ES (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 2;
  }
  let currentTextureSlot = null;
  let currentBoundTextures = {};
  const scissorParam = gl.getParameter(gl.SCISSOR_BOX);
  const viewportParam = gl.getParameter(gl.VIEWPORT);
  const currentScissor = new Vector4().fromArray(scissorParam);
  const currentViewport = new Vector4().fromArray(viewportParam);
  function createTexture(type, target, count) {
    const data = new Uint8Array(4);
    const texture = gl.createTexture();
    gl.bindTexture(type, texture);
    gl.texParameteri(type, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(type, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    for (let i = 0; i < count; i++) {
      gl.texImage2D(target + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
    }
    return texture;
  }
  const emptyTextures = {};
  emptyTextures[gl.TEXTURE_2D] = createTexture(gl.TEXTURE_2D, gl.TEXTURE_2D, 1);
  emptyTextures[gl.TEXTURE_CUBE_MAP] = createTexture(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
  colorBuffer.setClear(0, 0, 0, 1);
  depthBuffer.setClear(1);
  stencilBuffer.setClear(0);
  enable(gl.DEPTH_TEST);
  depthBuffer.setFunc(LessEqualDepth);
  setFlipSided(false);
  setCullFace(CullFaceBack);
  enable(gl.CULL_FACE);
  setBlending(NoBlending);
  function enable(id) {
    if (enabledCapabilities[id] !== true) {
      gl.enable(id);
      enabledCapabilities[id] = true;
    }
  }
  function disable(id) {
    if (enabledCapabilities[id] !== false) {
      gl.disable(id);
      enabledCapabilities[id] = false;
    }
  }
  function bindFramebuffer(target, framebuffer) {
    if (currentBoundFramebuffers[target] !== framebuffer) {
      gl.bindFramebuffer(target, framebuffer);
      currentBoundFramebuffers[target] = framebuffer;
      if (isWebGL2) {
        if (target === gl.DRAW_FRAMEBUFFER) {
          currentBoundFramebuffers[gl.FRAMEBUFFER] = framebuffer;
        }
        if (target === gl.FRAMEBUFFER) {
          currentBoundFramebuffers[gl.DRAW_FRAMEBUFFER] = framebuffer;
        }
      }
      return true;
    }
    return false;
  }
  function drawBuffers(renderTarget, framebuffer) {
    let drawBuffers2 = defaultDrawbuffers;
    let needsUpdate = false;
    if (renderTarget) {
      drawBuffers2 = currentDrawbuffers.get(framebuffer);
      if (drawBuffers2 === void 0) {
        drawBuffers2 = [];
        currentDrawbuffers.set(framebuffer, drawBuffers2);
      }
      if (renderTarget.isWebGLMultipleRenderTargets) {
        const textures = renderTarget.texture;
        if (drawBuffers2.length !== textures.length || drawBuffers2[0] !== gl.COLOR_ATTACHMENT0) {
          for (let i = 0, il = textures.length; i < il; i++) {
            drawBuffers2[i] = gl.COLOR_ATTACHMENT0 + i;
          }
          drawBuffers2.length = textures.length;
          needsUpdate = true;
        }
      } else {
        if (drawBuffers2[0] !== gl.COLOR_ATTACHMENT0) {
          drawBuffers2[0] = gl.COLOR_ATTACHMENT0;
          needsUpdate = true;
        }
      }
    } else {
      if (drawBuffers2[0] !== gl.BACK) {
        drawBuffers2[0] = gl.BACK;
        needsUpdate = true;
      }
    }
    if (needsUpdate) {
      if (capabilities.isWebGL2) {
        gl.drawBuffers(drawBuffers2);
      } else {
        extensions.get("WEBGL_draw_buffers").drawBuffersWEBGL(drawBuffers2);
      }
    }
  }
  function useProgram(program) {
    if (currentProgram !== program) {
      gl.useProgram(program);
      currentProgram = program;
      return true;
    }
    return false;
  }
  const equationToGL = {
    [AddEquation]: gl.FUNC_ADD,
    [SubtractEquation]: gl.FUNC_SUBTRACT,
    [ReverseSubtractEquation]: gl.FUNC_REVERSE_SUBTRACT
  };
  if (isWebGL2) {
    equationToGL[MinEquation] = gl.MIN;
    equationToGL[MaxEquation] = gl.MAX;
  } else {
    const extension = extensions.get("EXT_blend_minmax");
    if (extension !== null) {
      equationToGL[MinEquation] = extension.MIN_EXT;
      equationToGL[MaxEquation] = extension.MAX_EXT;
    }
  }
  const factorToGL = {
    [ZeroFactor]: gl.ZERO,
    [OneFactor]: gl.ONE,
    [SrcColorFactor]: gl.SRC_COLOR,
    [SrcAlphaFactor]: gl.SRC_ALPHA,
    [SrcAlphaSaturateFactor]: gl.SRC_ALPHA_SATURATE,
    [DstColorFactor]: gl.DST_COLOR,
    [DstAlphaFactor]: gl.DST_ALPHA,
    [OneMinusSrcColorFactor]: gl.ONE_MINUS_SRC_COLOR,
    [OneMinusSrcAlphaFactor]: gl.ONE_MINUS_SRC_ALPHA,
    [OneMinusDstColorFactor]: gl.ONE_MINUS_DST_COLOR,
    [OneMinusDstAlphaFactor]: gl.ONE_MINUS_DST_ALPHA
  };
  function setBlending(blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha) {
    if (blending === NoBlending) {
      if (currentBlendingEnabled === true) {
        disable(gl.BLEND);
        currentBlendingEnabled = false;
      }
      return;
    }
    if (currentBlendingEnabled === false) {
      enable(gl.BLEND);
      currentBlendingEnabled = true;
    }
    if (blending !== CustomBlending) {
      if (blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha) {
        if (currentBlendEquation !== AddEquation || currentBlendEquationAlpha !== AddEquation) {
          gl.blendEquation(gl.FUNC_ADD);
          currentBlendEquation = AddEquation;
          currentBlendEquationAlpha = AddEquation;
        }
        if (premultipliedAlpha) {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
              break;
            case AdditiveBlending:
              gl.blendFunc(gl.ONE, gl.ONE);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
              break;
            case MultiplyBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        } else {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
              break;
            case AdditiveBlending:
              gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
              break;
            case MultiplyBlending:
              gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        }
        currentBlendSrc = null;
        currentBlendDst = null;
        currentBlendSrcAlpha = null;
        currentBlendDstAlpha = null;
        currentBlending = blending;
        currentPremultipledAlpha = premultipliedAlpha;
      }
      return;
    }
    blendEquationAlpha = blendEquationAlpha || blendEquation;
    blendSrcAlpha = blendSrcAlpha || blendSrc;
    blendDstAlpha = blendDstAlpha || blendDst;
    if (blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha) {
      gl.blendEquationSeparate(equationToGL[blendEquation], equationToGL[blendEquationAlpha]);
      currentBlendEquation = blendEquation;
      currentBlendEquationAlpha = blendEquationAlpha;
    }
    if (blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha) {
      gl.blendFuncSeparate(factorToGL[blendSrc], factorToGL[blendDst], factorToGL[blendSrcAlpha], factorToGL[blendDstAlpha]);
      currentBlendSrc = blendSrc;
      currentBlendDst = blendDst;
      currentBlendSrcAlpha = blendSrcAlpha;
      currentBlendDstAlpha = blendDstAlpha;
    }
    currentBlending = blending;
    currentPremultipledAlpha = null;
  }
  function setMaterial(material, frontFaceCW) {
    material.side === DoubleSide ? disable(gl.CULL_FACE) : enable(gl.CULL_FACE);
    let flipSided = material.side === BackSide;
    if (frontFaceCW)
      flipSided = !flipSided;
    setFlipSided(flipSided);
    material.blending === NormalBlending && material.transparent === false ? setBlending(NoBlending) : setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha);
    depthBuffer.setFunc(material.depthFunc);
    depthBuffer.setTest(material.depthTest);
    depthBuffer.setMask(material.depthWrite);
    colorBuffer.setMask(material.colorWrite);
    const stencilWrite = material.stencilWrite;
    stencilBuffer.setTest(stencilWrite);
    if (stencilWrite) {
      stencilBuffer.setMask(material.stencilWriteMask);
      stencilBuffer.setFunc(material.stencilFunc, material.stencilRef, material.stencilFuncMask);
      stencilBuffer.setOp(material.stencilFail, material.stencilZFail, material.stencilZPass);
    }
    setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);
    material.alphaToCoverage === true ? enable(gl.SAMPLE_ALPHA_TO_COVERAGE) : disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function setFlipSided(flipSided) {
    if (currentFlipSided !== flipSided) {
      if (flipSided) {
        gl.frontFace(gl.CW);
      } else {
        gl.frontFace(gl.CCW);
      }
      currentFlipSided = flipSided;
    }
  }
  function setCullFace(cullFace) {
    if (cullFace !== CullFaceNone) {
      enable(gl.CULL_FACE);
      if (cullFace !== currentCullFace) {
        if (cullFace === CullFaceBack) {
          gl.cullFace(gl.BACK);
        } else if (cullFace === CullFaceFront) {
          gl.cullFace(gl.FRONT);
        } else {
          gl.cullFace(gl.FRONT_AND_BACK);
        }
      }
    } else {
      disable(gl.CULL_FACE);
    }
    currentCullFace = cullFace;
  }
  function setLineWidth(width) {
    if (width !== currentLineWidth) {
      if (lineWidthAvailable)
        gl.lineWidth(width);
      currentLineWidth = width;
    }
  }
  function setPolygonOffset(polygonOffset, factor, units) {
    if (polygonOffset) {
      enable(gl.POLYGON_OFFSET_FILL);
      if (currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units) {
        gl.polygonOffset(factor, units);
        currentPolygonOffsetFactor = factor;
        currentPolygonOffsetUnits = units;
      }
    } else {
      disable(gl.POLYGON_OFFSET_FILL);
    }
  }
  function setScissorTest(scissorTest) {
    if (scissorTest) {
      enable(gl.SCISSOR_TEST);
    } else {
      disable(gl.SCISSOR_TEST);
    }
  }
  function activeTexture(webglSlot) {
    if (webglSlot === void 0)
      webglSlot = gl.TEXTURE0 + maxTextures - 1;
    if (currentTextureSlot !== webglSlot) {
      gl.activeTexture(webglSlot);
      currentTextureSlot = webglSlot;
    }
  }
  function bindTexture(webglType, webglTexture) {
    if (currentTextureSlot === null) {
      activeTexture();
    }
    let boundTexture = currentBoundTextures[currentTextureSlot];
    if (boundTexture === void 0) {
      boundTexture = { type: void 0, texture: void 0 };
      currentBoundTextures[currentTextureSlot] = boundTexture;
    }
    if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
      gl.bindTexture(webglType, webglTexture || emptyTextures[webglType]);
      boundTexture.type = webglType;
      boundTexture.texture = webglTexture;
    }
  }
  function unbindTexture() {
    const boundTexture = currentBoundTextures[currentTextureSlot];
    if (boundTexture !== void 0 && boundTexture.type !== void 0) {
      gl.bindTexture(boundTexture.type, null);
      boundTexture.type = void 0;
      boundTexture.texture = void 0;
    }
  }
  function compressedTexImage2D() {
    try {
      gl.compressedTexImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage2D() {
    try {
      gl.texSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage3D() {
    try {
      gl.texSubImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function compressedTexSubImage2D() {
    try {
      gl.compressedTexSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage2D() {
    try {
      gl.texStorage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage3D() {
    try {
      gl.texStorage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage2D() {
    try {
      gl.texImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage3D() {
    try {
      gl.texImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function scissor(scissor2) {
    if (currentScissor.equals(scissor2) === false) {
      gl.scissor(scissor2.x, scissor2.y, scissor2.z, scissor2.w);
      currentScissor.copy(scissor2);
    }
  }
  function viewport(viewport2) {
    if (currentViewport.equals(viewport2) === false) {
      gl.viewport(viewport2.x, viewport2.y, viewport2.z, viewport2.w);
      currentViewport.copy(viewport2);
    }
  }
  function reset() {
    gl.disable(gl.BLEND);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.disable(gl.SCISSOR_TEST);
    gl.disable(gl.STENCIL_TEST);
    gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.ONE, gl.ZERO);
    gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
    gl.colorMask(true, true, true, true);
    gl.clearColor(0, 0, 0, 0);
    gl.depthMask(true);
    gl.depthFunc(gl.LESS);
    gl.clearDepth(1);
    gl.stencilMask(4294967295);
    gl.stencilFunc(gl.ALWAYS, 0, 4294967295);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    gl.clearStencil(0);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.polygonOffset(0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    if (isWebGL2 === true) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    }
    gl.useProgram(null);
    gl.lineWidth(1);
    gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    enabledCapabilities = {};
    currentTextureSlot = null;
    currentBoundTextures = {};
    currentBoundFramebuffers = {};
    currentDrawbuffers = /* @__PURE__ */ new WeakMap();
    defaultDrawbuffers = [];
    currentProgram = null;
    currentBlendingEnabled = false;
    currentBlending = null;
    currentBlendEquation = null;
    currentBlendSrc = null;
    currentBlendDst = null;
    currentBlendEquationAlpha = null;
    currentBlendSrcAlpha = null;
    currentBlendDstAlpha = null;
    currentPremultipledAlpha = false;
    currentFlipSided = null;
    currentCullFace = null;
    currentLineWidth = null;
    currentPolygonOffsetFactor = null;
    currentPolygonOffsetUnits = null;
    currentScissor.set(0, 0, gl.canvas.width, gl.canvas.height);
    currentViewport.set(0, 0, gl.canvas.width, gl.canvas.height);
    colorBuffer.reset();
    depthBuffer.reset();
    stencilBuffer.reset();
  }
  return {
    buffers: {
      color: colorBuffer,
      depth: depthBuffer,
      stencil: stencilBuffer
    },
    enable,
    disable,
    bindFramebuffer,
    drawBuffers,
    useProgram,
    setBlending,
    setMaterial,
    setFlipSided,
    setCullFace,
    setLineWidth,
    setPolygonOffset,
    setScissorTest,
    activeTexture,
    bindTexture,
    unbindTexture,
    compressedTexImage2D,
    texImage2D,
    texImage3D,
    texStorage2D,
    texStorage3D,
    texSubImage2D,
    texSubImage3D,
    compressedTexSubImage2D,
    scissor,
    viewport,
    reset
  };
}
function WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info) {
  const isWebGL2 = capabilities.isWebGL2;
  const maxTextures = capabilities.maxTextures;
  const maxCubemapSize = capabilities.maxCubemapSize;
  const maxTextureSize = capabilities.maxTextureSize;
  const maxSamples = capabilities.maxSamples;
  const multisampledRTTExt = extensions.has("WEBGL_multisampled_render_to_texture") ? extensions.get("WEBGL_multisampled_render_to_texture") : null;
  const supportsInvalidateFramebuffer = /OculusBrowser/g.test(navigator.userAgent);
  const _videoTextures = /* @__PURE__ */ new WeakMap();
  let _canvas;
  const _sources = /* @__PURE__ */ new WeakMap();
  let useOffscreenCanvas = false;
  try {
    useOffscreenCanvas = typeof OffscreenCanvas !== "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (err) {
  }
  function createCanvas(width, height) {
    return useOffscreenCanvas ? new OffscreenCanvas(width, height) : createElementNS("canvas");
  }
  function resizeImage(image, needsPowerOfTwo, needsNewCanvas, maxSize) {
    let scale = 1;
    if (image.width > maxSize || image.height > maxSize) {
      scale = maxSize / Math.max(image.width, image.height);
    }
    if (scale < 1 || needsPowerOfTwo === true) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const floor = needsPowerOfTwo ? floorPowerOfTwo : Math.floor;
        const width = floor(scale * image.width);
        const height = floor(scale * image.height);
        if (_canvas === void 0)
          _canvas = createCanvas(width, height);
        const canvas = needsNewCanvas ? createCanvas(width, height) : _canvas;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + image.width + "x" + image.height + ") to (" + width + "x" + height + ").");
        return canvas;
      } else {
        if ("data" in image) {
          console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + image.width + "x" + image.height + ").");
        }
        return image;
      }
    }
    return image;
  }
  function isPowerOfTwo$1(image) {
    return isPowerOfTwo(image.width) && isPowerOfTwo(image.height);
  }
  function textureNeedsPowerOfTwo(texture) {
    if (isWebGL2)
      return false;
    return texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping || texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function textureNeedsGenerateMipmaps(texture, supportsMips) {
    return texture.generateMipmaps && supportsMips && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function generateMipmap(target) {
    _gl.generateMipmap(target);
  }
  function getInternalFormat(internalFormatName, glFormat, glType, encoding, isVideoTexture = false) {
    if (isWebGL2 === false)
      return glFormat;
    if (internalFormatName !== null) {
      if (_gl[internalFormatName] !== void 0)
        return _gl[internalFormatName];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + internalFormatName + "'");
    }
    let internalFormat = glFormat;
    if (glFormat === _gl.RED) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.R32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.R16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = _gl.R8;
    }
    if (glFormat === _gl.RG) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.RG32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.RG16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = _gl.RG8;
    }
    if (glFormat === _gl.RGBA) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.RGBA32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.RGBA16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = encoding === sRGBEncoding && isVideoTexture === false ? _gl.SRGB8_ALPHA8 : _gl.RGBA8;
      if (glType === _gl.UNSIGNED_SHORT_4_4_4_4)
        internalFormat = _gl.RGBA4;
      if (glType === _gl.UNSIGNED_SHORT_5_5_5_1)
        internalFormat = _gl.RGB5_A1;
    }
    if (internalFormat === _gl.R16F || internalFormat === _gl.R32F || internalFormat === _gl.RG16F || internalFormat === _gl.RG32F || internalFormat === _gl.RGBA16F || internalFormat === _gl.RGBA32F) {
      extensions.get("EXT_color_buffer_float");
    }
    return internalFormat;
  }
  function getMipLevels(texture, image, supportsMips) {
    if (textureNeedsGenerateMipmaps(texture, supportsMips) === true || texture.isFramebufferTexture && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
      return Math.log2(Math.max(image.width, image.height)) + 1;
    } else if (texture.mipmaps !== void 0 && texture.mipmaps.length > 0) {
      return texture.mipmaps.length;
    } else if (texture.isCompressedTexture && Array.isArray(texture.image)) {
      return image.mipmaps.length;
    } else {
      return 1;
    }
  }
  function filterFallback(f) {
    if (f === NearestFilter || f === NearestMipmapNearestFilter || f === NearestMipmapLinearFilter) {
      return _gl.NEAREST;
    }
    return _gl.LINEAR;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    deallocateTexture(texture);
    if (texture.isVideoTexture) {
      _videoTextures.delete(texture);
    }
  }
  function onRenderTargetDispose(event) {
    const renderTarget = event.target;
    renderTarget.removeEventListener("dispose", onRenderTargetDispose);
    deallocateRenderTarget(renderTarget);
  }
  function deallocateTexture(texture) {
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglInit === void 0)
      return;
    const source = texture.source;
    const webglTextures = _sources.get(source);
    if (webglTextures) {
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      webglTexture.usedTimes--;
      if (webglTexture.usedTimes === 0) {
        deleteTexture(texture);
      }
      if (Object.keys(webglTextures).length === 0) {
        _sources.delete(source);
      }
    }
    properties.remove(texture);
  }
  function deleteTexture(texture) {
    const textureProperties = properties.get(texture);
    _gl.deleteTexture(textureProperties.__webglTexture);
    const source = texture.source;
    const webglTextures = _sources.get(source);
    delete webglTextures[textureProperties.__cacheKey];
    info.memory.textures--;
  }
  function deallocateRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglTexture !== void 0) {
      _gl.deleteTexture(textureProperties.__webglTexture);
      info.memory.textures--;
    }
    if (renderTarget.depthTexture) {
      renderTarget.depthTexture.dispose();
    }
    if (renderTarget.isWebGLCubeRenderTarget) {
      for (let i = 0; i < 6; i++) {
        _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);
        if (renderTargetProperties.__webglDepthbuffer)
          _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i]);
      }
    } else {
      _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);
      if (renderTargetProperties.__webglDepthbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer);
      if (renderTargetProperties.__webglMultisampledFramebuffer)
        _gl.deleteFramebuffer(renderTargetProperties.__webglMultisampledFramebuffer);
      if (renderTargetProperties.__webglColorRenderbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglColorRenderbuffer);
      if (renderTargetProperties.__webglDepthRenderbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthRenderbuffer);
    }
    if (renderTarget.isWebGLMultipleRenderTargets) {
      for (let i = 0, il = texture.length; i < il; i++) {
        const attachmentProperties = properties.get(texture[i]);
        if (attachmentProperties.__webglTexture) {
          _gl.deleteTexture(attachmentProperties.__webglTexture);
          info.memory.textures--;
        }
        properties.remove(texture[i]);
      }
    }
    properties.remove(texture);
    properties.remove(renderTarget);
  }
  let textureUnits = 0;
  function resetTextureUnits() {
    textureUnits = 0;
  }
  function allocateTextureUnit() {
    const textureUnit = textureUnits;
    if (textureUnit >= maxTextures) {
      console.warn("THREE.WebGLTextures: Trying to use " + textureUnit + " texture units while this GPU supports only " + maxTextures);
    }
    textureUnits += 1;
    return textureUnit;
  }
  function getTextureCacheKey(texture) {
    const array = [];
    array.push(texture.wrapS);
    array.push(texture.wrapT);
    array.push(texture.magFilter);
    array.push(texture.minFilter);
    array.push(texture.anisotropy);
    array.push(texture.internalFormat);
    array.push(texture.format);
    array.push(texture.type);
    array.push(texture.generateMipmaps);
    array.push(texture.premultiplyAlpha);
    array.push(texture.flipY);
    array.push(texture.unpackAlignment);
    array.push(texture.encoding);
    return array.join();
  }
  function setTexture2D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.isVideoTexture)
      updateVideoTexture(texture);
    if (texture.isRenderTargetTexture === false && texture.version > 0 && textureProperties.__version !== texture.version) {
      const image = texture.image;
      if (image === null) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      } else if (image.complete === false) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      } else {
        uploadTexture(textureProperties, texture, slot);
        return;
      }
    }
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture);
  }
  function setTexture2DArray(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_2D_ARRAY, textureProperties.__webglTexture);
  }
  function setTexture3D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_3D, textureProperties.__webglTexture);
  }
  function setTextureCube(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadCubeTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture);
  }
  const wrappingToGL = {
    [RepeatWrapping]: _gl.REPEAT,
    [ClampToEdgeWrapping]: _gl.CLAMP_TO_EDGE,
    [MirroredRepeatWrapping]: _gl.MIRRORED_REPEAT
  };
  const filterToGL = {
    [NearestFilter]: _gl.NEAREST,
    [NearestMipmapNearestFilter]: _gl.NEAREST_MIPMAP_NEAREST,
    [NearestMipmapLinearFilter]: _gl.NEAREST_MIPMAP_LINEAR,
    [LinearFilter]: _gl.LINEAR,
    [LinearMipmapNearestFilter]: _gl.LINEAR_MIPMAP_NEAREST,
    [LinearMipmapLinearFilter]: _gl.LINEAR_MIPMAP_LINEAR
  };
  function setTextureParameters(textureType, texture, supportsMips) {
    if (supportsMips) {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, wrappingToGL[texture.wrapS]);
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, wrappingToGL[texture.wrapT]);
      if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
        _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, wrappingToGL[texture.wrapR]);
      }
      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterToGL[texture.magFilter]);
      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterToGL[texture.minFilter]);
    } else {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);
      if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
        _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, _gl.CLAMP_TO_EDGE);
      }
      if (texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
      }
      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));
      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));
      if (texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
      }
    }
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      if (texture.type === FloatType && extensions.has("OES_texture_float_linear") === false)
        return;
      if (isWebGL2 === false && (texture.type === HalfFloatType && extensions.has("OES_texture_half_float_linear") === false))
        return;
      if (texture.anisotropy > 1 || properties.get(texture).__currentAnisotropy) {
        _gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, capabilities.getMaxAnisotropy()));
        properties.get(texture).__currentAnisotropy = texture.anisotropy;
      }
    }
  }
  function initTexture(textureProperties, texture) {
    let forceUpload = false;
    if (textureProperties.__webglInit === void 0) {
      textureProperties.__webglInit = true;
      texture.addEventListener("dispose", onTextureDispose);
    }
    const source = texture.source;
    let webglTextures = _sources.get(source);
    if (webglTextures === void 0) {
      webglTextures = {};
      _sources.set(source, webglTextures);
    }
    const textureCacheKey = getTextureCacheKey(texture);
    if (textureCacheKey !== textureProperties.__cacheKey) {
      if (webglTextures[textureCacheKey] === void 0) {
        webglTextures[textureCacheKey] = {
          texture: _gl.createTexture(),
          usedTimes: 0
        };
        info.memory.textures++;
        forceUpload = true;
      }
      webglTextures[textureCacheKey].usedTimes++;
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      if (webglTexture !== void 0) {
        webglTextures[textureProperties.__cacheKey].usedTimes--;
        if (webglTexture.usedTimes === 0) {
          deleteTexture(texture);
        }
      }
      textureProperties.__cacheKey = textureCacheKey;
      textureProperties.__webglTexture = webglTextures[textureCacheKey].texture;
    }
    return forceUpload;
  }
  function uploadTexture(textureProperties, texture, slot) {
    let textureType = _gl.TEXTURE_2D;
    if (texture.isDataArrayTexture)
      textureType = _gl.TEXTURE_2D_ARRAY;
    if (texture.isData3DTexture)
      textureType = _gl.TEXTURE_3D;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(textureType, textureProperties.__webglTexture);
    if (source.version !== source.__currentVersion || forceUpload === true) {
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);
      _gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, _gl.NONE);
      const needsPowerOfTwo = textureNeedsPowerOfTwo(texture) && isPowerOfTwo$1(texture.image) === false;
      let image = resizeImage(texture.image, needsPowerOfTwo, false, maxTextureSize);
      image = verifyColorSpace(texture, image);
      const supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.encoding);
      let glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding, texture.isVideoTexture);
      setTextureParameters(textureType, texture, supportsMips);
      let mipmap;
      const mipmaps = texture.mipmaps;
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = textureProperties.__version === void 0 || forceUpload === true;
      const levels = getMipLevels(texture, image, supportsMips);
      if (texture.isDepthTexture) {
        glInternalFormat = _gl.DEPTH_COMPONENT;
        if (isWebGL2) {
          if (texture.type === FloatType) {
            glInternalFormat = _gl.DEPTH_COMPONENT32F;
          } else if (texture.type === UnsignedIntType) {
            glInternalFormat = _gl.DEPTH_COMPONENT24;
          } else if (texture.type === UnsignedInt248Type) {
            glInternalFormat = _gl.DEPTH24_STENCIL8;
          } else {
            glInternalFormat = _gl.DEPTH_COMPONENT16;
          }
        } else {
          if (texture.type === FloatType) {
            console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");
          }
        }
        if (texture.format === DepthFormat && glInternalFormat === _gl.DEPTH_COMPONENT) {
          if (texture.type !== UnsignedShortType && texture.type !== UnsignedIntType) {
            console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
            texture.type = UnsignedShortType;
            glType = utils.convert(texture.type);
          }
        }
        if (texture.format === DepthStencilFormat && glInternalFormat === _gl.DEPTH_COMPONENT) {
          glInternalFormat = _gl.DEPTH_STENCIL;
          if (texture.type !== UnsignedInt248Type) {
            console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
            texture.type = UnsignedInt248Type;
            glType = utils.convert(texture.type);
          }
        }
        if (allocateMemory) {
          if (useTexStorage) {
            state.texStorage2D(_gl.TEXTURE_2D, 1, glInternalFormat, image.width, image.height);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, null);
          }
        }
      } else if (texture.isDataTexture) {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
            } else {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(_gl.TEXTURE_2D, 0, 0, 0, image.width, image.height, glFormat, glType, image.data);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, image.data);
          }
        }
      } else if (texture.isCompressedTexture) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
        }
        for (let i = 0, il = mipmaps.length; i < il; i++) {
          mipmap = mipmaps[i];
          if (texture.format !== RGBAFormat) {
            if (glFormat !== null) {
              if (useTexStorage) {
                state.compressedTexSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
              } else {
                state.compressedTexImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
              }
            } else {
              console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            }
          } else {
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
            } else {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
            }
          }
        }
      } else if (texture.isDataArrayTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(_gl.TEXTURE_2D_ARRAY, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(_gl.TEXTURE_2D_ARRAY, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(_gl.TEXTURE_2D_ARRAY, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isData3DTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(_gl.TEXTURE_3D, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(_gl.TEXTURE_3D, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(_gl.TEXTURE_3D, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isFramebufferTexture) {
        if (allocateMemory) {
          if (useTexStorage) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
          } else {
            let width = image.width, height = image.height;
            for (let i = 0; i < levels; i++) {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, width, height, 0, glFormat, glType, null);
              width >>= 1;
              height >>= 1;
            }
          }
        }
      } else {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, glFormat, glType, mipmap);
            } else {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, glFormat, glType, mipmap);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(_gl.TEXTURE_2D, 0, 0, 0, glFormat, glType, image);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, glFormat, glType, image);
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(textureType);
      }
      source.__currentVersion = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function uploadCubeTexture(textureProperties, texture, slot) {
    if (texture.image.length !== 6)
      return;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.activeTexture(_gl.TEXTURE0 + slot);
    state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture);
    if (source.version !== source.__currentVersion || forceUpload === true) {
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);
      _gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, _gl.NONE);
      const isCompressed = texture.isCompressedTexture || texture.image[0].isCompressedTexture;
      const isDataTexture = texture.image[0] && texture.image[0].isDataTexture;
      const cubeImage = [];
      for (let i = 0; i < 6; i++) {
        if (!isCompressed && !isDataTexture) {
          cubeImage[i] = resizeImage(texture.image[i], false, true, maxCubemapSize);
        } else {
          cubeImage[i] = isDataTexture ? texture.image[i].image : texture.image[i];
        }
        cubeImage[i] = verifyColorSpace(texture, cubeImage[i]);
      }
      const image = cubeImage[0], supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.encoding), glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = textureProperties.__version === void 0;
      let levels = getMipLevels(texture, image, supportsMips);
      setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, supportsMips);
      let mipmaps;
      if (isCompressed) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(_gl.TEXTURE_CUBE_MAP, levels, glInternalFormat, image.width, image.height);
        }
        for (let i = 0; i < 6; i++) {
          mipmaps = cubeImage[i].mipmaps;
          for (let j = 0; j < mipmaps.length; j++) {
            const mipmap = mipmaps[j];
            if (texture.format !== RGBAFormat) {
              if (glFormat !== null) {
                if (useTexStorage) {
                  state.compressedTexSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
                } else {
                  state.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
                }
              } else {
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
              }
            } else {
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        }
      } else {
        mipmaps = texture.mipmaps;
        if (useTexStorage && allocateMemory) {
          if (mipmaps.length > 0)
            levels++;
          state.texStorage2D(_gl.TEXTURE_CUBE_MAP, levels, glInternalFormat, cubeImage[0].width, cubeImage[0].height);
        }
        for (let i = 0; i < 6; i++) {
          if (isDataTexture) {
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, cubeImage[i].width, cubeImage[i].height, glFormat, glType, cubeImage[i].data);
            } else {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, cubeImage[i].width, cubeImage[i].height, 0, glFormat, glType, cubeImage[i].data);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              const mipmapImage = mipmap.image[i].image;
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, 0, 0, mipmapImage.width, mipmapImage.height, glFormat, glType, mipmapImage.data);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, mipmapImage.width, mipmapImage.height, 0, glFormat, glType, mipmapImage.data);
              }
            }
          } else {
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, glFormat, glType, cubeImage[i]);
            } else {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, glFormat, glType, cubeImage[i]);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, 0, 0, glFormat, glType, mipmap.image[i]);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, glFormat, glType, mipmap.image[i]);
              }
            }
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(_gl.TEXTURE_CUBE_MAP);
      }
      source.__currentVersion = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function setupFrameBufferTexture(framebuffer, renderTarget, texture, attachment, textureTarget) {
    const glFormat = utils.convert(texture.format, texture.encoding);
    const glType = utils.convert(texture.type);
    const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
    const renderTargetProperties = properties.get(renderTarget);
    if (!renderTargetProperties.__hasExternalTextures) {
      if (textureTarget === _gl.TEXTURE_3D || textureTarget === _gl.TEXTURE_2D_ARRAY) {
        state.texImage3D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, renderTarget.depth, 0, glFormat, glType, null);
      } else {
        state.texImage2D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null);
      }
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
    if (useMultisampledRTT(renderTarget)) {
      multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0, getRenderTargetSamples(renderTarget));
    } else {
      _gl.framebufferTexture2D(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0);
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, null);
  }
  function setupRenderBufferStorage(renderbuffer, renderTarget, isMultisample) {
    _gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);
    if (renderTarget.depthBuffer && !renderTarget.stencilBuffer) {
      let glInternalFormat = _gl.DEPTH_COMPONENT16;
      if (isMultisample || useMultisampledRTT(renderTarget)) {
        const depthTexture = renderTarget.depthTexture;
        if (depthTexture && depthTexture.isDepthTexture) {
          if (depthTexture.type === FloatType) {
            glInternalFormat = _gl.DEPTH_COMPONENT32F;
          } else if (depthTexture.type === UnsignedIntType) {
            glInternalFormat = _gl.DEPTH_COMPONENT24;
          }
        }
        const samples = getRenderTargetSamples(renderTarget);
        if (useMultisampledRTT(renderTarget)) {
          multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        } else {
          _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        }
      } else {
        _gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else if (renderTarget.depthBuffer && renderTarget.stencilBuffer) {
      const samples = getRenderTargetSamples(renderTarget);
      if (isMultisample && useMultisampledRTT(renderTarget) === false) {
        _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
      } else if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
      } else {
        _gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else {
      const texture = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture[0] : renderTarget.texture;
      const glFormat = utils.convert(texture.format, texture.encoding);
      const glType = utils.convert(texture.type);
      const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
      const samples = getRenderTargetSamples(renderTarget);
      if (isMultisample && useMultisampledRTT(renderTarget) === false) {
        _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
      } else if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
      } else {
        _gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
      }
    }
    _gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
  }
  function setupDepthTexture(framebuffer, renderTarget) {
    const isCube = renderTarget && renderTarget.isWebGLCubeRenderTarget;
    if (isCube)
      throw new Error("Depth Texture with cube render targets is not supported");
    state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
    if (!(renderTarget.depthTexture && renderTarget.depthTexture.isDepthTexture)) {
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    }
    if (!properties.get(renderTarget.depthTexture).__webglTexture || renderTarget.depthTexture.image.width !== renderTarget.width || renderTarget.depthTexture.image.height !== renderTarget.height) {
      renderTarget.depthTexture.image.width = renderTarget.width;
      renderTarget.depthTexture.image.height = renderTarget.height;
      renderTarget.depthTexture.needsUpdate = true;
    }
    setTexture2D(renderTarget.depthTexture, 0);
    const webglDepthTexture = properties.get(renderTarget.depthTexture).__webglTexture;
    const samples = getRenderTargetSamples(renderTarget);
    if (renderTarget.depthTexture.format === DepthFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0);
      }
    } else if (renderTarget.depthTexture.format === DepthStencilFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0);
      }
    } else {
      throw new Error("Unknown depthTexture format");
    }
  }
  function setupDepthRenderbuffer(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    if (renderTarget.depthTexture && !renderTargetProperties.__autoAllocateDepthBuffer) {
      if (isCube)
        throw new Error("target.depthTexture not supported in Cube render targets");
      setupDepthTexture(renderTargetProperties.__webglFramebuffer, renderTarget);
    } else {
      if (isCube) {
        renderTargetProperties.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++) {
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[i]);
          renderTargetProperties.__webglDepthbuffer[i] = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i], renderTarget, false);
        }
      } else {
        state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
        renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
        setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer, renderTarget, false);
      }
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, null);
  }
  function rebindTextures(renderTarget, colorTexture, depthTexture) {
    const renderTargetProperties = properties.get(renderTarget);
    if (colorTexture !== void 0) {
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, renderTarget.texture, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D);
    }
    if (depthTexture !== void 0) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function setupRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    renderTarget.addEventListener("dispose", onRenderTargetDispose);
    if (renderTarget.isWebGLMultipleRenderTargets !== true) {
      if (textureProperties.__webglTexture === void 0) {
        textureProperties.__webglTexture = _gl.createTexture();
      }
      textureProperties.__version = texture.version;
      info.memory.textures++;
    }
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    const isMultipleRenderTargets = renderTarget.isWebGLMultipleRenderTargets === true;
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    if (isCube) {
      renderTargetProperties.__webglFramebuffer = [];
      for (let i = 0; i < 6; i++) {
        renderTargetProperties.__webglFramebuffer[i] = _gl.createFramebuffer();
      }
    } else {
      renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();
      if (isMultipleRenderTargets) {
        if (capabilities.drawBuffers) {
          const textures = renderTarget.texture;
          for (let i = 0, il = textures.length; i < il; i++) {
            const attachmentProperties = properties.get(textures[i]);
            if (attachmentProperties.__webglTexture === void 0) {
              attachmentProperties.__webglTexture = _gl.createTexture();
              info.memory.textures++;
            }
          }
        } else {
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        }
      } else if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
        renderTargetProperties.__webglMultisampledFramebuffer = _gl.createFramebuffer();
        renderTargetProperties.__webglColorRenderbuffer = _gl.createRenderbuffer();
        _gl.bindRenderbuffer(_gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer);
        const glFormat = utils.convert(texture.format, texture.encoding);
        const glType = utils.convert(texture.type);
        const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
        const samples = getRenderTargetSamples(renderTarget);
        _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
        _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer);
        _gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
        if (renderTarget.depthBuffer) {
          renderTargetProperties.__webglDepthRenderbuffer = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer, renderTarget, true);
        }
        state.bindFramebuffer(_gl.FRAMEBUFFER, null);
      }
    }
    if (isCube) {
      state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture);
      setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, supportsMips);
      for (let i = 0; i < 6; i++) {
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i], renderTarget, texture, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i);
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(_gl.TEXTURE_CUBE_MAP);
      }
      state.unbindTexture();
    } else if (isMultipleRenderTargets) {
      const textures = renderTarget.texture;
      for (let i = 0, il = textures.length; i < il; i++) {
        const attachment = textures[i];
        const attachmentProperties = properties.get(attachment);
        state.bindTexture(_gl.TEXTURE_2D, attachmentProperties.__webglTexture);
        setTextureParameters(_gl.TEXTURE_2D, attachment, supportsMips);
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, attachment, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D);
        if (textureNeedsGenerateMipmaps(attachment, supportsMips)) {
          generateMipmap(_gl.TEXTURE_2D);
        }
      }
      state.unbindTexture();
    } else {
      let glTextureType = _gl.TEXTURE_2D;
      if (renderTarget.isWebGL3DRenderTarget || renderTarget.isWebGLArrayRenderTarget) {
        if (isWebGL2) {
          glTextureType = renderTarget.isWebGL3DRenderTarget ? _gl.TEXTURE_3D : _gl.TEXTURE_2D_ARRAY;
        } else {
          console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");
        }
      }
      state.bindTexture(glTextureType, textureProperties.__webglTexture);
      setTextureParameters(glTextureType, texture, supportsMips);
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, texture, _gl.COLOR_ATTACHMENT0, glTextureType);
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(glTextureType);
      }
      state.unbindTexture();
    }
    if (renderTarget.depthBuffer) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function updateRenderTargetMipmap(renderTarget) {
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    const textures = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture : [renderTarget.texture];
    for (let i = 0, il = textures.length; i < il; i++) {
      const texture = textures[i];
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        const target = renderTarget.isWebGLCubeRenderTarget ? _gl.TEXTURE_CUBE_MAP : _gl.TEXTURE_2D;
        const webglTexture = properties.get(texture).__webglTexture;
        state.bindTexture(target, webglTexture);
        generateMipmap(target);
        state.unbindTexture();
      }
    }
  }
  function updateMultisampleRenderTarget(renderTarget) {
    if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
      const width = renderTarget.width;
      const height = renderTarget.height;
      let mask = _gl.COLOR_BUFFER_BIT;
      const invalidationArray = [_gl.COLOR_ATTACHMENT0];
      const depthStyle = renderTarget.stencilBuffer ? _gl.DEPTH_STENCIL_ATTACHMENT : _gl.DEPTH_ATTACHMENT;
      if (renderTarget.depthBuffer) {
        invalidationArray.push(depthStyle);
      }
      const renderTargetProperties = properties.get(renderTarget);
      const ignoreDepthValues = renderTargetProperties.__ignoreDepthValues !== void 0 ? renderTargetProperties.__ignoreDepthValues : false;
      if (ignoreDepthValues === false) {
        if (renderTarget.depthBuffer)
          mask |= _gl.DEPTH_BUFFER_BIT;
        if (renderTarget.stencilBuffer)
          mask |= _gl.STENCIL_BUFFER_BIT;
      }
      state.bindFramebuffer(_gl.READ_FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
      state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
      if (ignoreDepthValues === true) {
        _gl.invalidateFramebuffer(_gl.READ_FRAMEBUFFER, [depthStyle]);
        _gl.invalidateFramebuffer(_gl.DRAW_FRAMEBUFFER, [depthStyle]);
      }
      _gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, mask, _gl.NEAREST);
      if (supportsInvalidateFramebuffer) {
        _gl.invalidateFramebuffer(_gl.READ_FRAMEBUFFER, invalidationArray);
      }
      state.bindFramebuffer(_gl.READ_FRAMEBUFFER, null);
      state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
    }
  }
  function getRenderTargetSamples(renderTarget) {
    return Math.min(maxSamples, renderTarget.samples);
  }
  function useMultisampledRTT(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    return isWebGL2 && renderTarget.samples > 0 && extensions.has("WEBGL_multisampled_render_to_texture") === true && renderTargetProperties.__useRenderToTexture !== false;
  }
  function updateVideoTexture(texture) {
    const frame = info.render.frame;
    if (_videoTextures.get(texture) !== frame) {
      _videoTextures.set(texture, frame);
      texture.update();
    }
  }
  function verifyColorSpace(texture, image) {
    const encoding = texture.encoding;
    const format = texture.format;
    const type = texture.type;
    if (texture.isCompressedTexture === true || texture.isVideoTexture === true || texture.format === _SRGBAFormat)
      return image;
    if (encoding !== LinearEncoding) {
      if (encoding === sRGBEncoding) {
        if (isWebGL2 === false) {
          if (extensions.has("EXT_sRGB") === true && format === RGBAFormat) {
            texture.format = _SRGBAFormat;
            texture.minFilter = LinearFilter;
            texture.generateMipmaps = false;
          } else {
            image = ImageUtils.sRGBToLinear(image);
          }
        } else {
          if (format !== RGBAFormat || type !== UnsignedByteType) {
            console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.");
          }
        }
      } else {
        console.error("THREE.WebGLTextures: Unsupported texture encoding:", encoding);
      }
    }
    return image;
  }
  this.allocateTextureUnit = allocateTextureUnit;
  this.resetTextureUnits = resetTextureUnits;
  this.setTexture2D = setTexture2D;
  this.setTexture2DArray = setTexture2DArray;
  this.setTexture3D = setTexture3D;
  this.setTextureCube = setTextureCube;
  this.rebindTextures = rebindTextures;
  this.setupRenderTarget = setupRenderTarget;
  this.updateRenderTargetMipmap = updateRenderTargetMipmap;
  this.updateMultisampleRenderTarget = updateMultisampleRenderTarget;
  this.setupDepthRenderbuffer = setupDepthRenderbuffer;
  this.setupFrameBufferTexture = setupFrameBufferTexture;
  this.useMultisampledRTT = useMultisampledRTT;
}
function WebGLUtils(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function convert(p, encoding = null) {
    let extension;
    if (p === UnsignedByteType)
      return gl.UNSIGNED_BYTE;
    if (p === UnsignedShort4444Type)
      return gl.UNSIGNED_SHORT_4_4_4_4;
    if (p === UnsignedShort5551Type)
      return gl.UNSIGNED_SHORT_5_5_5_1;
    if (p === ByteType)
      return gl.BYTE;
    if (p === ShortType)
      return gl.SHORT;
    if (p === UnsignedShortType)
      return gl.UNSIGNED_SHORT;
    if (p === IntType)
      return gl.INT;
    if (p === UnsignedIntType)
      return gl.UNSIGNED_INT;
    if (p === FloatType)
      return gl.FLOAT;
    if (p === HalfFloatType) {
      if (isWebGL2)
        return gl.HALF_FLOAT;
      extension = extensions.get("OES_texture_half_float");
      if (extension !== null) {
        return extension.HALF_FLOAT_OES;
      } else {
        return null;
      }
    }
    if (p === AlphaFormat)
      return gl.ALPHA;
    if (p === RGBAFormat)
      return gl.RGBA;
    if (p === LuminanceFormat)
      return gl.LUMINANCE;
    if (p === LuminanceAlphaFormat)
      return gl.LUMINANCE_ALPHA;
    if (p === DepthFormat)
      return gl.DEPTH_COMPONENT;
    if (p === DepthStencilFormat)
      return gl.DEPTH_STENCIL;
    if (p === RedFormat)
      return gl.RED;
    if (p === RGBFormat) {
      console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228");
      return gl.RGBA;
    }
    if (p === _SRGBAFormat) {
      extension = extensions.get("EXT_sRGB");
      if (extension !== null) {
        return extension.SRGB_ALPHA_EXT;
      } else {
        return null;
      }
    }
    if (p === RedIntegerFormat)
      return gl.RED_INTEGER;
    if (p === RGFormat)
      return gl.RG;
    if (p === RGIntegerFormat)
      return gl.RG_INTEGER;
    if (p === RGBAIntegerFormat)
      return gl.RGBA_INTEGER;
    if (p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format || p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format) {
      if (encoding === sRGBEncoding) {
        extension = extensions.get("WEBGL_compressed_texture_s3tc_srgb");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      } else {
        extension = extensions.get("WEBGL_compressed_texture_s3tc");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      }
    }
    if (p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format || p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_pvrtc");
      if (extension !== null) {
        if (p === RGB_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (p === RGB_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (p === RGBA_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (p === RGBA_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc1");
      if (extension !== null) {
        return extension.COMPRESSED_RGB_ETC1_WEBGL;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC2_Format || p === RGBA_ETC2_EAC_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc");
      if (extension !== null) {
        if (p === RGB_ETC2_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ETC2 : extension.COMPRESSED_RGB8_ETC2;
        if (p === RGBA_ETC2_EAC_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : extension.COMPRESSED_RGBA8_ETC2_EAC;
      } else {
        return null;
      }
    }
    if (p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format || p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format || p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format || p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format || p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format) {
      extension = extensions.get("WEBGL_compressed_texture_astc");
      if (extension !== null) {
        if (p === RGBA_ASTC_4x4_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : extension.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (p === RGBA_ASTC_5x4_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : extension.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (p === RGBA_ASTC_5x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : extension.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (p === RGBA_ASTC_6x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : extension.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (p === RGBA_ASTC_6x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : extension.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (p === RGBA_ASTC_8x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : extension.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (p === RGBA_ASTC_8x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : extension.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (p === RGBA_ASTC_8x8_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : extension.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (p === RGBA_ASTC_10x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : extension.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (p === RGBA_ASTC_10x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : extension.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (p === RGBA_ASTC_10x8_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : extension.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (p === RGBA_ASTC_10x10_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : extension.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (p === RGBA_ASTC_12x10_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : extension.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (p === RGBA_ASTC_12x12_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : extension.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else {
        return null;
      }
    }
    if (p === RGBA_BPTC_Format) {
      extension = extensions.get("EXT_texture_compression_bptc");
      if (extension !== null) {
        if (p === RGBA_BPTC_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : extension.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else {
        return null;
      }
    }
    if (p === UnsignedInt248Type) {
      if (isWebGL2)
        return gl.UNSIGNED_INT_24_8;
      extension = extensions.get("WEBGL_depth_texture");
      if (extension !== null) {
        return extension.UNSIGNED_INT_24_8_WEBGL;
      } else {
        return null;
      }
    }
    return gl[p] !== void 0 ? gl[p] : null;
  }
  return { convert };
}
class ArrayCamera extends PerspectiveCamera {
  constructor(array = []) {
    super();
    this.cameras = array;
  }
}
ArrayCamera.prototype.isArrayCamera = true;
const _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new Group();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = { pinching: false };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new Group();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new Vector3();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new Vector3();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new Group();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new Vector3();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new Vector3();
    }
    return this._grip;
  }
  dispatchEvent(event) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(event);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(event);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(event);
    }
    return this;
  }
  disconnect(inputSource) {
    this.dispatchEvent({ type: "disconnected", data: inputSource });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(inputSource, frame, referenceSpace) {
    let inputPose = null;
    let gripPose = null;
    let handPose = null;
    const targetRay = this._targetRay;
    const grip = this._grip;
    const hand = this._hand;
    if (inputSource && frame.session.visibilityState !== "visible-blurred") {
      if (targetRay !== null) {
        inputPose = frame.getPose(inputSource.targetRaySpace, referenceSpace);
        if (inputPose !== null) {
          targetRay.matrix.fromArray(inputPose.transform.matrix);
          targetRay.matrix.decompose(targetRay.position, targetRay.rotation, targetRay.scale);
          if (inputPose.linearVelocity) {
            targetRay.hasLinearVelocity = true;
            targetRay.linearVelocity.copy(inputPose.linearVelocity);
          } else {
            targetRay.hasLinearVelocity = false;
          }
          if (inputPose.angularVelocity) {
            targetRay.hasAngularVelocity = true;
            targetRay.angularVelocity.copy(inputPose.angularVelocity);
          } else {
            targetRay.hasAngularVelocity = false;
          }
          this.dispatchEvent(_moveEvent);
        }
      }
      if (hand && inputSource.hand) {
        handPose = true;
        for (const inputjoint of inputSource.hand.values()) {
          const jointPose = frame.getJointPose(inputjoint, referenceSpace);
          if (hand.joints[inputjoint.jointName] === void 0) {
            const joint2 = new Group();
            joint2.matrixAutoUpdate = false;
            joint2.visible = false;
            hand.joints[inputjoint.jointName] = joint2;
            hand.add(joint2);
          }
          const joint = hand.joints[inputjoint.jointName];
          if (jointPose !== null) {
            joint.matrix.fromArray(jointPose.transform.matrix);
            joint.matrix.decompose(joint.position, joint.rotation, joint.scale);
            joint.jointRadius = jointPose.radius;
          }
          joint.visible = jointPose !== null;
        }
        const indexTip = hand.joints["index-finger-tip"];
        const thumbTip = hand.joints["thumb-tip"];
        const distance = indexTip.position.distanceTo(thumbTip.position);
        const distanceToPinch = 0.02;
        const threshold = 5e-3;
        if (hand.inputState.pinching && distance > distanceToPinch + threshold) {
          hand.inputState.pinching = false;
          this.dispatchEvent({
            type: "pinchend",
            handedness: inputSource.handedness,
            target: this
          });
        } else if (!hand.inputState.pinching && distance <= distanceToPinch - threshold) {
          hand.inputState.pinching = true;
          this.dispatchEvent({
            type: "pinchstart",
            handedness: inputSource.handedness,
            target: this
          });
        }
      } else {
        if (grip !== null && inputSource.gripSpace) {
          gripPose = frame.getPose(inputSource.gripSpace, referenceSpace);
          if (gripPose !== null) {
            grip.matrix.fromArray(gripPose.transform.matrix);
            grip.matrix.decompose(grip.position, grip.rotation, grip.scale);
            if (gripPose.linearVelocity) {
              grip.hasLinearVelocity = true;
              grip.linearVelocity.copy(gripPose.linearVelocity);
            } else {
              grip.hasLinearVelocity = false;
            }
            if (gripPose.angularVelocity) {
              grip.hasAngularVelocity = true;
              grip.angularVelocity.copy(gripPose.angularVelocity);
            } else {
              grip.hasAngularVelocity = false;
            }
          }
        }
      }
    }
    if (targetRay !== null) {
      targetRay.visible = inputPose !== null;
    }
    if (grip !== null) {
      grip.visible = gripPose !== null;
    }
    if (hand !== null) {
      hand.visible = handPose !== null;
    }
    return this;
  }
}
class DepthTexture extends Texture {
  constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format) {
    format = format !== void 0 ? format : DepthFormat;
    if (format !== DepthFormat && format !== DepthStencilFormat) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    if (type === void 0 && format === DepthFormat)
      type = UnsignedShortType;
    if (type === void 0 && format === DepthStencilFormat)
      type = UnsignedInt248Type;
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.image = { width, height };
    this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
    this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
    this.flipY = false;
    this.generateMipmaps = false;
  }
}
DepthTexture.prototype.isDepthTexture = true;
class WebXRManager extends EventDispatcher {
  constructor(renderer, gl) {
    super();
    const scope = this;
    let session = null;
    let framebufferScaleFactor = 1;
    let referenceSpace = null;
    let referenceSpaceType = "local-floor";
    let customReferenceSpace = null;
    let pose = null;
    let glBinding = null;
    let glProjLayer = null;
    let glBaseLayer = null;
    let xrFrame = null;
    const attributes = gl.getContextAttributes();
    let initialRenderTarget = null;
    let newRenderTarget = null;
    const controllers = [];
    const inputSourcesMap = /* @__PURE__ */ new Map();
    const cameraL = new PerspectiveCamera();
    cameraL.layers.enable(1);
    cameraL.viewport = new Vector4();
    const cameraR = new PerspectiveCamera();
    cameraR.layers.enable(2);
    cameraR.viewport = new Vector4();
    const cameras = [cameraL, cameraR];
    const cameraVR = new ArrayCamera();
    cameraVR.layers.enable(1);
    cameraVR.layers.enable(2);
    let _currentDepthNear = null;
    let _currentDepthFar = null;
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getTargetRaySpace();
    };
    this.getControllerGrip = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getGripSpace();
    };
    this.getHand = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getHandSpace();
    };
    function onSessionEvent(event) {
      const controller = inputSourcesMap.get(event.inputSource);
      if (controller) {
        controller.dispatchEvent({ type: event.type, data: event.inputSource });
      }
    }
    function onSessionEnd() {
      inputSourcesMap.forEach(function(controller, inputSource) {
        controller.disconnect(inputSource);
      });
      inputSourcesMap.clear();
      _currentDepthNear = null;
      _currentDepthFar = null;
      renderer.setRenderTarget(initialRenderTarget);
      glBaseLayer = null;
      glProjLayer = null;
      glBinding = null;
      session = null;
      newRenderTarget = null;
      animation.stop();
      scope.isPresenting = false;
      scope.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(value) {
      framebufferScaleFactor = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function(value) {
      referenceSpaceType = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function() {
      return customReferenceSpace || referenceSpace;
    };
    this.setReferenceSpace = function(space) {
      customReferenceSpace = space;
    };
    this.getBaseLayer = function() {
      return glProjLayer !== null ? glProjLayer : glBaseLayer;
    };
    this.getBinding = function() {
      return glBinding;
    };
    this.getFrame = function() {
      return xrFrame;
    };
    this.getSession = function() {
      return session;
    };
    this.setSession = async function(value) {
      session = value;
      if (session !== null) {
        initialRenderTarget = renderer.getRenderTarget();
        session.addEventListener("select", onSessionEvent);
        session.addEventListener("selectstart", onSessionEvent);
        session.addEventListener("selectend", onSessionEvent);
        session.addEventListener("squeeze", onSessionEvent);
        session.addEventListener("squeezestart", onSessionEvent);
        session.addEventListener("squeezeend", onSessionEvent);
        session.addEventListener("end", onSessionEnd);
        session.addEventListener("inputsourceschange", onInputSourcesChange);
        if (attributes.xrCompatible !== true) {
          await gl.makeXRCompatible();
        }
        if (session.renderState.layers === void 0 || renderer.capabilities.isWebGL2 === false) {
          const layerInit = {
            antialias: session.renderState.layers === void 0 ? attributes.antialias : true,
            alpha: attributes.alpha,
            depth: attributes.depth,
            stencil: attributes.stencil,
            framebufferScaleFactor
          };
          glBaseLayer = new XRWebGLLayer(session, gl, layerInit);
          session.updateRenderState({ baseLayer: glBaseLayer });
          newRenderTarget = new WebGLRenderTarget(
            glBaseLayer.framebufferWidth,
            glBaseLayer.framebufferHeight,
            {
              format: RGBAFormat,
              type: UnsignedByteType,
              encoding: renderer.outputEncoding
            }
          );
        } else {
          let depthFormat = null;
          let depthType = null;
          let glDepthFormat = null;
          if (attributes.depth) {
            glDepthFormat = attributes.stencil ? gl.DEPTH24_STENCIL8 : gl.DEPTH_COMPONENT24;
            depthFormat = attributes.stencil ? DepthStencilFormat : DepthFormat;
            depthType = attributes.stencil ? UnsignedInt248Type : UnsignedShortType;
          }
          const projectionlayerInit = {
            colorFormat: renderer.outputEncoding === sRGBEncoding ? gl.SRGB8_ALPHA8 : gl.RGBA8,
            depthFormat: glDepthFormat,
            scaleFactor: framebufferScaleFactor
          };
          glBinding = new XRWebGLBinding(session, gl);
          glProjLayer = glBinding.createProjectionLayer(projectionlayerInit);
          session.updateRenderState({ layers: [glProjLayer] });
          newRenderTarget = new WebGLRenderTarget(
            glProjLayer.textureWidth,
            glProjLayer.textureHeight,
            {
              format: RGBAFormat,
              type: UnsignedByteType,
              depthTexture: new DepthTexture(glProjLayer.textureWidth, glProjLayer.textureHeight, depthType, void 0, void 0, void 0, void 0, void 0, void 0, depthFormat),
              stencilBuffer: attributes.stencil,
              encoding: renderer.outputEncoding,
              samples: attributes.antialias ? 4 : 0
            }
          );
          const renderTargetProperties = renderer.properties.get(newRenderTarget);
          renderTargetProperties.__ignoreDepthValues = glProjLayer.ignoreDepthValues;
        }
        newRenderTarget.isXRRenderTarget = true;
        this.setFoveation(1);
        referenceSpace = await session.requestReferenceSpace(referenceSpaceType);
        animation.setContext(session);
        animation.start();
        scope.isPresenting = true;
        scope.dispatchEvent({ type: "sessionstart" });
      }
    };
    function onInputSourcesChange(event) {
      const inputSources = session.inputSources;
      for (let i = 0; i < inputSources.length; i++) {
        const index = inputSources[i].handedness === "right" ? 1 : 0;
        inputSourcesMap.set(inputSources[i], controllers[index]);
      }
      for (let i = 0; i < event.removed.length; i++) {
        const inputSource = event.removed[i];
        const controller = inputSourcesMap.get(inputSource);
        if (controller) {
          controller.dispatchEvent({ type: "disconnected", data: inputSource });
          inputSourcesMap.delete(inputSource);
        }
      }
      for (let i = 0; i < event.added.length; i++) {
        const inputSource = event.added[i];
        const controller = inputSourcesMap.get(inputSource);
        if (controller) {
          controller.dispatchEvent({ type: "connected", data: inputSource });
        }
      }
    }
    const cameraLPos = new Vector3();
    const cameraRPos = new Vector3();
    function setProjectionFromUnion(camera, cameraL2, cameraR2) {
      cameraLPos.setFromMatrixPosition(cameraL2.matrixWorld);
      cameraRPos.setFromMatrixPosition(cameraR2.matrixWorld);
      const ipd = cameraLPos.distanceTo(cameraRPos);
      const projL = cameraL2.projectionMatrix.elements;
      const projR = cameraR2.projectionMatrix.elements;
      const near = projL[14] / (projL[10] - 1);
      const far = projL[14] / (projL[10] + 1);
      const topFov = (projL[9] + 1) / projL[5];
      const bottomFov = (projL[9] - 1) / projL[5];
      const leftFov = (projL[8] - 1) / projL[0];
      const rightFov = (projR[8] + 1) / projR[0];
      const left = near * leftFov;
      const right = near * rightFov;
      const zOffset = ipd / (-leftFov + rightFov);
      const xOffset = zOffset * -leftFov;
      cameraL2.matrixWorld.decompose(camera.position, camera.quaternion, camera.scale);
      camera.translateX(xOffset);
      camera.translateZ(zOffset);
      camera.matrixWorld.compose(camera.position, camera.quaternion, camera.scale);
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
      const near2 = near + zOffset;
      const far2 = far + zOffset;
      const left2 = left - xOffset;
      const right2 = right + (ipd - xOffset);
      const top2 = topFov * far / far2 * near2;
      const bottom2 = bottomFov * far / far2 * near2;
      camera.projectionMatrix.makePerspective(left2, right2, top2, bottom2, near2, far2);
    }
    function updateCamera(camera, parent) {
      if (parent === null) {
        camera.matrixWorld.copy(camera.matrix);
      } else {
        camera.matrixWorld.multiplyMatrices(parent.matrixWorld, camera.matrix);
      }
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    }
    this.updateCamera = function(camera) {
      if (session === null)
        return;
      cameraVR.near = cameraR.near = cameraL.near = camera.near;
      cameraVR.far = cameraR.far = cameraL.far = camera.far;
      if (_currentDepthNear !== cameraVR.near || _currentDepthFar !== cameraVR.far) {
        session.updateRenderState({
          depthNear: cameraVR.near,
          depthFar: cameraVR.far
        });
        _currentDepthNear = cameraVR.near;
        _currentDepthFar = cameraVR.far;
      }
      const parent = camera.parent;
      const cameras2 = cameraVR.cameras;
      updateCamera(cameraVR, parent);
      for (let i = 0; i < cameras2.length; i++) {
        updateCamera(cameras2[i], parent);
      }
      cameraVR.matrixWorld.decompose(cameraVR.position, cameraVR.quaternion, cameraVR.scale);
      camera.position.copy(cameraVR.position);
      camera.quaternion.copy(cameraVR.quaternion);
      camera.scale.copy(cameraVR.scale);
      camera.matrix.copy(cameraVR.matrix);
      camera.matrixWorld.copy(cameraVR.matrixWorld);
      const children = camera.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].updateMatrixWorld(true);
      }
      if (cameras2.length === 2) {
        setProjectionFromUnion(cameraVR, cameraL, cameraR);
      } else {
        cameraVR.projectionMatrix.copy(cameraL.projectionMatrix);
      }
    };
    this.getCamera = function() {
      return cameraVR;
    };
    this.getFoveation = function() {
      if (glProjLayer !== null) {
        return glProjLayer.fixedFoveation;
      }
      if (glBaseLayer !== null) {
        return glBaseLayer.fixedFoveation;
      }
      return void 0;
    };
    this.setFoveation = function(foveation) {
      if (glProjLayer !== null) {
        glProjLayer.fixedFoveation = foveation;
      }
      if (glBaseLayer !== null && glBaseLayer.fixedFoveation !== void 0) {
        glBaseLayer.fixedFoveation = foveation;
      }
    };
    let onAnimationFrameCallback = null;
    function onAnimationFrame(time, frame) {
      pose = frame.getViewerPose(customReferenceSpace || referenceSpace);
      xrFrame = frame;
      if (pose !== null) {
        const views = pose.views;
        if (glBaseLayer !== null) {
          renderer.setRenderTargetFramebuffer(newRenderTarget, glBaseLayer.framebuffer);
          renderer.setRenderTarget(newRenderTarget);
        }
        let cameraVRNeedsUpdate = false;
        if (views.length !== cameraVR.cameras.length) {
          cameraVR.cameras.length = 0;
          cameraVRNeedsUpdate = true;
        }
        for (let i = 0; i < views.length; i++) {
          const view = views[i];
          let viewport = null;
          if (glBaseLayer !== null) {
            viewport = glBaseLayer.getViewport(view);
          } else {
            const glSubImage = glBinding.getViewSubImage(glProjLayer, view);
            viewport = glSubImage.viewport;
            if (i === 0) {
              renderer.setRenderTargetTextures(
                newRenderTarget,
                glSubImage.colorTexture,
                glProjLayer.ignoreDepthValues ? void 0 : glSubImage.depthStencilTexture
              );
              renderer.setRenderTarget(newRenderTarget);
            }
          }
          const camera = cameras[i];
          camera.matrix.fromArray(view.transform.matrix);
          camera.projectionMatrix.fromArray(view.projectionMatrix);
          camera.viewport.set(viewport.x, viewport.y, viewport.width, viewport.height);
          if (i === 0) {
            cameraVR.matrix.copy(camera.matrix);
          }
          if (cameraVRNeedsUpdate === true) {
            cameraVR.cameras.push(camera);
          }
        }
      }
      const inputSources = session.inputSources;
      for (let i = 0; i < controllers.length; i++) {
        const inputSource = inputSources[i];
        const controller = inputSourcesMap.get(inputSource);
        if (controller !== void 0) {
          controller.update(inputSource, frame, customReferenceSpace || referenceSpace);
        }
      }
      if (onAnimationFrameCallback)
        onAnimationFrameCallback(time, frame);
      xrFrame = null;
    }
    const animation = new WebGLAnimation();
    animation.setAnimationLoop(onAnimationFrame);
    this.setAnimationLoop = function(callback) {
      onAnimationFrameCallback = callback;
    };
    this.dispose = function() {
    };
  }
}
function WebGLMaterials(renderer, properties) {
  function refreshFogUniforms(uniforms, fog) {
    uniforms.fogColor.value.copy(fog.color);
    if (fog.isFog) {
      uniforms.fogNear.value = fog.near;
      uniforms.fogFar.value = fog.far;
    } else if (fog.isFogExp2) {
      uniforms.fogDensity.value = fog.density;
    }
  }
  function refreshMaterialUniforms(uniforms, material, pixelRatio, height, transmissionRenderTarget) {
    if (material.isMeshBasicMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshLambertMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshToonMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsToon(uniforms, material);
    } else if (material.isMeshPhongMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsPhong(uniforms, material);
    } else if (material.isMeshStandardMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsStandard(uniforms, material);
      if (material.isMeshPhysicalMaterial) {
        refreshUniformsPhysical(uniforms, material, transmissionRenderTarget);
      }
    } else if (material.isMeshMatcapMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsMatcap(uniforms, material);
    } else if (material.isMeshDepthMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshDistanceMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsDistance(uniforms, material);
    } else if (material.isMeshNormalMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isLineBasicMaterial) {
      refreshUniformsLine(uniforms, material);
      if (material.isLineDashedMaterial) {
        refreshUniformsDash(uniforms, material);
      }
    } else if (material.isPointsMaterial) {
      refreshUniformsPoints(uniforms, material, pixelRatio, height);
    } else if (material.isSpriteMaterial) {
      refreshUniformsSprites(uniforms, material);
    } else if (material.isShadowMaterial) {
      uniforms.color.value.copy(material.color);
      uniforms.opacity.value = material.opacity;
    } else if (material.isShaderMaterial) {
      material.uniformsNeedUpdate = false;
    }
  }
  function refreshUniformsCommon(uniforms, material) {
    uniforms.opacity.value = material.opacity;
    if (material.color) {
      uniforms.diffuse.value.copy(material.color);
    }
    if (material.emissive) {
      uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
    }
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.bumpMap) {
      uniforms.bumpMap.value = material.bumpMap;
      uniforms.bumpScale.value = material.bumpScale;
      if (material.side === BackSide)
        uniforms.bumpScale.value *= -1;
    }
    if (material.displacementMap) {
      uniforms.displacementMap.value = material.displacementMap;
      uniforms.displacementScale.value = material.displacementScale;
      uniforms.displacementBias.value = material.displacementBias;
    }
    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
    }
    if (material.normalMap) {
      uniforms.normalMap.value = material.normalMap;
      uniforms.normalScale.value.copy(material.normalScale);
      if (material.side === BackSide)
        uniforms.normalScale.value.negate();
    }
    if (material.specularMap) {
      uniforms.specularMap.value = material.specularMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMap.value = envMap;
      uniforms.flipEnvMap.value = envMap.isCubeTexture && envMap.isRenderTargetTexture === false ? -1 : 1;
      uniforms.reflectivity.value = material.reflectivity;
      uniforms.ior.value = material.ior;
      uniforms.refractionRatio.value = material.refractionRatio;
    }
    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      const scaleFactor = renderer.physicallyCorrectLights !== true ? Math.PI : 1;
      uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
    }
    if (material.aoMap) {
      uniforms.aoMap.value = material.aoMap;
      uniforms.aoMapIntensity.value = material.aoMapIntensity;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.specularMap) {
      uvScaleMap = material.specularMap;
    } else if (material.displacementMap) {
      uvScaleMap = material.displacementMap;
    } else if (material.normalMap) {
      uvScaleMap = material.normalMap;
    } else if (material.bumpMap) {
      uvScaleMap = material.bumpMap;
    } else if (material.roughnessMap) {
      uvScaleMap = material.roughnessMap;
    } else if (material.metalnessMap) {
      uvScaleMap = material.metalnessMap;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    } else if (material.emissiveMap) {
      uvScaleMap = material.emissiveMap;
    } else if (material.clearcoatMap) {
      uvScaleMap = material.clearcoatMap;
    } else if (material.clearcoatNormalMap) {
      uvScaleMap = material.clearcoatNormalMap;
    } else if (material.clearcoatRoughnessMap) {
      uvScaleMap = material.clearcoatRoughnessMap;
    } else if (material.specularIntensityMap) {
      uvScaleMap = material.specularIntensityMap;
    } else if (material.specularColorMap) {
      uvScaleMap = material.specularColorMap;
    } else if (material.transmissionMap) {
      uvScaleMap = material.transmissionMap;
    } else if (material.thicknessMap) {
      uvScaleMap = material.thicknessMap;
    } else if (material.sheenColorMap) {
      uvScaleMap = material.sheenColorMap;
    } else if (material.sheenRoughnessMap) {
      uvScaleMap = material.sheenRoughnessMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.isWebGLRenderTarget) {
        uvScaleMap = uvScaleMap.texture;
      }
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
    let uv2ScaleMap;
    if (material.aoMap) {
      uv2ScaleMap = material.aoMap;
    } else if (material.lightMap) {
      uv2ScaleMap = material.lightMap;
    }
    if (uv2ScaleMap !== void 0) {
      if (uv2ScaleMap.isWebGLRenderTarget) {
        uv2ScaleMap = uv2ScaleMap.texture;
      }
      if (uv2ScaleMap.matrixAutoUpdate === true) {
        uv2ScaleMap.updateMatrix();
      }
      uniforms.uv2Transform.value.copy(uv2ScaleMap.matrix);
    }
  }
  function refreshUniformsLine(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
  }
  function refreshUniformsDash(uniforms, material) {
    uniforms.dashSize.value = material.dashSize;
    uniforms.totalSize.value = material.dashSize + material.gapSize;
    uniforms.scale.value = material.scale;
  }
  function refreshUniformsPoints(uniforms, material, pixelRatio, height) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.size.value = material.size * pixelRatio;
    uniforms.scale.value = height * 0.5;
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
  }
  function refreshUniformsSprites(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.rotation.value = material.rotation;
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
  }
  function refreshUniformsPhong(uniforms, material) {
    uniforms.specular.value.copy(material.specular);
    uniforms.shininess.value = Math.max(material.shininess, 1e-4);
  }
  function refreshUniformsToon(uniforms, material) {
    if (material.gradientMap) {
      uniforms.gradientMap.value = material.gradientMap;
    }
  }
  function refreshUniformsStandard(uniforms, material) {
    uniforms.roughness.value = material.roughness;
    uniforms.metalness.value = material.metalness;
    if (material.roughnessMap) {
      uniforms.roughnessMap.value = material.roughnessMap;
    }
    if (material.metalnessMap) {
      uniforms.metalnessMap.value = material.metalnessMap;
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMapIntensity.value = material.envMapIntensity;
    }
  }
  function refreshUniformsPhysical(uniforms, material, transmissionRenderTarget) {
    uniforms.ior.value = material.ior;
    if (material.sheen > 0) {
      uniforms.sheenColor.value.copy(material.sheenColor).multiplyScalar(material.sheen);
      uniforms.sheenRoughness.value = material.sheenRoughness;
      if (material.sheenColorMap) {
        uniforms.sheenColorMap.value = material.sheenColorMap;
      }
      if (material.sheenRoughnessMap) {
        uniforms.sheenRoughnessMap.value = material.sheenRoughnessMap;
      }
    }
    if (material.clearcoat > 0) {
      uniforms.clearcoat.value = material.clearcoat;
      uniforms.clearcoatRoughness.value = material.clearcoatRoughness;
      if (material.clearcoatMap) {
        uniforms.clearcoatMap.value = material.clearcoatMap;
      }
      if (material.clearcoatRoughnessMap) {
        uniforms.clearcoatRoughnessMap.value = material.clearcoatRoughnessMap;
      }
      if (material.clearcoatNormalMap) {
        uniforms.clearcoatNormalScale.value.copy(material.clearcoatNormalScale);
        uniforms.clearcoatNormalMap.value = material.clearcoatNormalMap;
        if (material.side === BackSide) {
          uniforms.clearcoatNormalScale.value.negate();
        }
      }
    }
    if (material.transmission > 0) {
      uniforms.transmission.value = material.transmission;
      uniforms.transmissionSamplerMap.value = transmissionRenderTarget.texture;
      uniforms.transmissionSamplerSize.value.set(transmissionRenderTarget.width, transmissionRenderTarget.height);
      if (material.transmissionMap) {
        uniforms.transmissionMap.value = material.transmissionMap;
      }
      uniforms.thickness.value = material.thickness;
      if (material.thicknessMap) {
        uniforms.thicknessMap.value = material.thicknessMap;
      }
      uniforms.attenuationDistance.value = material.attenuationDistance;
      uniforms.attenuationColor.value.copy(material.attenuationColor);
    }
    uniforms.specularIntensity.value = material.specularIntensity;
    uniforms.specularColor.value.copy(material.specularColor);
    if (material.specularIntensityMap) {
      uniforms.specularIntensityMap.value = material.specularIntensityMap;
    }
    if (material.specularColorMap) {
      uniforms.specularColorMap.value = material.specularColorMap;
    }
  }
  function refreshUniformsMatcap(uniforms, material) {
    if (material.matcap) {
      uniforms.matcap.value = material.matcap;
    }
  }
  function refreshUniformsDistance(uniforms, material) {
    uniforms.referencePosition.value.copy(material.referencePosition);
    uniforms.nearDistance.value = material.nearDistance;
    uniforms.farDistance.value = material.farDistance;
  }
  return {
    refreshFogUniforms,
    refreshMaterialUniforms
  };
}
function createCanvasElement() {
  const canvas = createElementNS("canvas");
  canvas.style.display = "block";
  return canvas;
}
function WebGLRenderer(parameters = {}) {
  const _canvas = parameters.canvas !== void 0 ? parameters.canvas : createCanvasElement(), _context = parameters.context !== void 0 ? parameters.context : null, _depth = parameters.depth !== void 0 ? parameters.depth : true, _stencil = parameters.stencil !== void 0 ? parameters.stencil : true, _antialias = parameters.antialias !== void 0 ? parameters.antialias : false, _premultipliedAlpha = parameters.premultipliedAlpha !== void 0 ? parameters.premultipliedAlpha : true, _preserveDrawingBuffer = parameters.preserveDrawingBuffer !== void 0 ? parameters.preserveDrawingBuffer : false, _powerPreference = parameters.powerPreference !== void 0 ? parameters.powerPreference : "default", _failIfMajorPerformanceCaveat = parameters.failIfMajorPerformanceCaveat !== void 0 ? parameters.failIfMajorPerformanceCaveat : false;
  let _alpha;
  if (_context !== null) {
    _alpha = _context.getContextAttributes().alpha;
  } else {
    _alpha = parameters.alpha !== void 0 ? parameters.alpha : false;
  }
  let currentRenderList = null;
  let currentRenderState = null;
  const renderListStack = [];
  const renderStateStack = [];
  this.domElement = _canvas;
  this.debug = {
    checkShaderErrors: true
  };
  this.autoClear = true;
  this.autoClearColor = true;
  this.autoClearDepth = true;
  this.autoClearStencil = true;
  this.sortObjects = true;
  this.clippingPlanes = [];
  this.localClippingEnabled = false;
  this.outputEncoding = LinearEncoding;
  this.physicallyCorrectLights = false;
  this.toneMapping = NoToneMapping;
  this.toneMappingExposure = 1;
  const _this = this;
  let _isContextLost = false;
  let _currentActiveCubeFace = 0;
  let _currentActiveMipmapLevel = 0;
  let _currentRenderTarget = null;
  let _currentMaterialId = -1;
  let _currentCamera = null;
  const _currentViewport = new Vector4();
  const _currentScissor = new Vector4();
  let _currentScissorTest = null;
  let _width = _canvas.width;
  let _height = _canvas.height;
  let _pixelRatio = 1;
  let _opaqueSort = null;
  let _transparentSort = null;
  const _viewport = new Vector4(0, 0, _width, _height);
  const _scissor = new Vector4(0, 0, _width, _height);
  let _scissorTest = false;
  const _frustum = new Frustum();
  let _clippingEnabled = false;
  let _localClippingEnabled = false;
  let _transmissionRenderTarget = null;
  const _projScreenMatrix = new Matrix4();
  const _vector2 = new Vector2();
  const _vector3 = new Vector3();
  const _emptyScene = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
  function getTargetPixelRatio() {
    return _currentRenderTarget === null ? _pixelRatio : 1;
  }
  let _gl = _context;
  function getContext(contextNames, contextAttributes) {
    for (let i = 0; i < contextNames.length; i++) {
      const contextName = contextNames[i];
      const context = _canvas.getContext(contextName, contextAttributes);
      if (context !== null)
        return context;
    }
    return null;
  }
  try {
    const contextAttributes = {
      alpha: true,
      depth: _depth,
      stencil: _stencil,
      antialias: _antialias,
      premultipliedAlpha: _premultipliedAlpha,
      preserveDrawingBuffer: _preserveDrawingBuffer,
      powerPreference: _powerPreference,
      failIfMajorPerformanceCaveat: _failIfMajorPerformanceCaveat
    };
    if ("setAttribute" in _canvas)
      _canvas.setAttribute("data-engine", `three.js r${REVISION}`);
    _canvas.addEventListener("webglcontextlost", onContextLost, false);
    _canvas.addEventListener("webglcontextrestored", onContextRestore, false);
    if (_gl === null) {
      const contextNames = ["webgl2", "webgl", "experimental-webgl"];
      if (_this.isWebGL1Renderer === true) {
        contextNames.shift();
      }
      _gl = getContext(contextNames, contextAttributes);
      if (_gl === null) {
        if (getContext(contextNames)) {
          throw new Error("Error creating WebGL context with your selected attributes.");
        } else {
          throw new Error("Error creating WebGL context.");
        }
      }
    }
    if (_gl.getShaderPrecisionFormat === void 0) {
      _gl.getShaderPrecisionFormat = function() {
        return { "rangeMin": 1, "rangeMax": 1, "precision": 1 };
      };
    }
  } catch (error) {
    console.error("THREE.WebGLRenderer: " + error.message);
    throw error;
  }
  let extensions, capabilities, state, info;
  let properties, textures, cubemaps, cubeuvmaps, attributes, geometries, objects;
  let programCache, materials, renderLists, renderStates, clipping, shadowMap;
  let background, morphtargets, bufferRenderer, indexedBufferRenderer;
  let utils, bindingStates;
  function initGLContext() {
    extensions = new WebGLExtensions(_gl);
    capabilities = new WebGLCapabilities(_gl, extensions, parameters);
    extensions.init(capabilities);
    utils = new WebGLUtils(_gl, extensions, capabilities);
    state = new WebGLState(_gl, extensions, capabilities);
    info = new WebGLInfo(_gl);
    properties = new WebGLProperties();
    textures = new WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info);
    cubemaps = new WebGLCubeMaps(_this);
    cubeuvmaps = new WebGLCubeUVMaps(_this);
    attributes = new WebGLAttributes(_gl, capabilities);
    bindingStates = new WebGLBindingStates(_gl, extensions, attributes, capabilities);
    geometries = new WebGLGeometries(_gl, attributes, info, bindingStates);
    objects = new WebGLObjects(_gl, geometries, attributes, info);
    morphtargets = new WebGLMorphtargets(_gl, capabilities, textures);
    clipping = new WebGLClipping(properties);
    programCache = new WebGLPrograms(_this, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping);
    materials = new WebGLMaterials(_this, properties);
    renderLists = new WebGLRenderLists();
    renderStates = new WebGLRenderStates(extensions, capabilities);
    background = new WebGLBackground(_this, cubemaps, state, objects, _alpha, _premultipliedAlpha);
    shadowMap = new WebGLShadowMap(_this, objects, capabilities);
    bufferRenderer = new WebGLBufferRenderer(_gl, extensions, info, capabilities);
    indexedBufferRenderer = new WebGLIndexedBufferRenderer(_gl, extensions, info, capabilities);
    info.programs = programCache.programs;
    _this.capabilities = capabilities;
    _this.extensions = extensions;
    _this.properties = properties;
    _this.renderLists = renderLists;
    _this.shadowMap = shadowMap;
    _this.state = state;
    _this.info = info;
  }
  initGLContext();
  const xr = new WebXRManager(_this, _gl);
  this.xr = xr;
  this.getContext = function() {
    return _gl;
  };
  this.getContextAttributes = function() {
    return _gl.getContextAttributes();
  };
  this.forceContextLoss = function() {
    const extension = extensions.get("WEBGL_lose_context");
    if (extension)
      extension.loseContext();
  };
  this.forceContextRestore = function() {
    const extension = extensions.get("WEBGL_lose_context");
    if (extension)
      extension.restoreContext();
  };
  this.getPixelRatio = function() {
    return _pixelRatio;
  };
  this.setPixelRatio = function(value) {
    if (value === void 0)
      return;
    _pixelRatio = value;
    this.setSize(_width, _height, false);
  };
  this.getSize = function(target) {
    return target.set(_width, _height);
  };
  this.setSize = function(width, height, updateStyle) {
    if (xr.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    _width = width;
    _height = height;
    _canvas.width = Math.floor(width * _pixelRatio);
    _canvas.height = Math.floor(height * _pixelRatio);
    if (updateStyle !== false) {
      _canvas.style.width = width + "px";
      _canvas.style.height = height + "px";
    }
    this.setViewport(0, 0, width, height);
  };
  this.getDrawingBufferSize = function(target) {
    return target.set(_width * _pixelRatio, _height * _pixelRatio).floor();
  };
  this.setDrawingBufferSize = function(width, height, pixelRatio) {
    _width = width;
    _height = height;
    _pixelRatio = pixelRatio;
    _canvas.width = Math.floor(width * pixelRatio);
    _canvas.height = Math.floor(height * pixelRatio);
    this.setViewport(0, 0, width, height);
  };
  this.getCurrentViewport = function(target) {
    return target.copy(_currentViewport);
  };
  this.getViewport = function(target) {
    return target.copy(_viewport);
  };
  this.setViewport = function(x, y, width, height) {
    if (x.isVector4) {
      _viewport.set(x.x, x.y, x.z, x.w);
    } else {
      _viewport.set(x, y, width, height);
    }
    state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor());
  };
  this.getScissor = function(target) {
    return target.copy(_scissor);
  };
  this.setScissor = function(x, y, width, height) {
    if (x.isVector4) {
      _scissor.set(x.x, x.y, x.z, x.w);
    } else {
      _scissor.set(x, y, width, height);
    }
    state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor());
  };
  this.getScissorTest = function() {
    return _scissorTest;
  };
  this.setScissorTest = function(boolean) {
    state.setScissorTest(_scissorTest = boolean);
  };
  this.setOpaqueSort = function(method) {
    _opaqueSort = method;
  };
  this.setTransparentSort = function(method) {
    _transparentSort = method;
  };
  this.getClearColor = function(target) {
    return target.copy(background.getClearColor());
  };
  this.setClearColor = function() {
    background.setClearColor.apply(background, arguments);
  };
  this.getClearAlpha = function() {
    return background.getClearAlpha();
  };
  this.setClearAlpha = function() {
    background.setClearAlpha.apply(background, arguments);
  };
  this.clear = function(color = true, depth = true, stencil = true) {
    let bits = 0;
    if (color)
      bits |= _gl.COLOR_BUFFER_BIT;
    if (depth)
      bits |= _gl.DEPTH_BUFFER_BIT;
    if (stencil)
      bits |= _gl.STENCIL_BUFFER_BIT;
    _gl.clear(bits);
  };
  this.clearColor = function() {
    this.clear(true, false, false);
  };
  this.clearDepth = function() {
    this.clear(false, true, false);
  };
  this.clearStencil = function() {
    this.clear(false, false, true);
  };
  this.dispose = function() {
    _canvas.removeEventListener("webglcontextlost", onContextLost, false);
    _canvas.removeEventListener("webglcontextrestored", onContextRestore, false);
    renderLists.dispose();
    renderStates.dispose();
    properties.dispose();
    cubemaps.dispose();
    cubeuvmaps.dispose();
    objects.dispose();
    bindingStates.dispose();
    programCache.dispose();
    xr.dispose();
    xr.removeEventListener("sessionstart", onXRSessionStart);
    xr.removeEventListener("sessionend", onXRSessionEnd);
    if (_transmissionRenderTarget) {
      _transmissionRenderTarget.dispose();
      _transmissionRenderTarget = null;
    }
    animation.stop();
  };
  function onContextLost(event) {
    event.preventDefault();
    console.log("THREE.WebGLRenderer: Context Lost.");
    _isContextLost = true;
  }
  function onContextRestore() {
    console.log("THREE.WebGLRenderer: Context Restored.");
    _isContextLost = false;
    const infoAutoReset = info.autoReset;
    const shadowMapEnabled = shadowMap.enabled;
    const shadowMapAutoUpdate = shadowMap.autoUpdate;
    const shadowMapNeedsUpdate = shadowMap.needsUpdate;
    const shadowMapType = shadowMap.type;
    initGLContext();
    info.autoReset = infoAutoReset;
    shadowMap.enabled = shadowMapEnabled;
    shadowMap.autoUpdate = shadowMapAutoUpdate;
    shadowMap.needsUpdate = shadowMapNeedsUpdate;
    shadowMap.type = shadowMapType;
  }
  function onMaterialDispose(event) {
    const material = event.target;
    material.removeEventListener("dispose", onMaterialDispose);
    deallocateMaterial(material);
  }
  function deallocateMaterial(material) {
    releaseMaterialProgramReferences(material);
    properties.remove(material);
  }
  function releaseMaterialProgramReferences(material) {
    const programs = properties.get(material).programs;
    if (programs !== void 0) {
      programs.forEach(function(program) {
        programCache.releaseProgram(program);
      });
      if (material.isShaderMaterial) {
        programCache.releaseShaderCache(material);
      }
    }
  }
  this.renderBufferDirect = function(camera, scene, geometry, material, object, group) {
    if (scene === null)
      scene = _emptyScene;
    const frontFaceCW = object.isMesh && object.matrixWorld.determinant() < 0;
    const program = setProgram(camera, scene, geometry, material, object);
    state.setMaterial(material, frontFaceCW);
    let index = geometry.index;
    const position = geometry.attributes.position;
    if (index === null) {
      if (position === void 0 || position.count === 0)
        return;
    } else if (index.count === 0) {
      return;
    }
    let rangeFactor = 1;
    if (material.wireframe === true) {
      index = geometries.getWireframeAttribute(geometry);
      rangeFactor = 2;
    }
    bindingStates.setup(object, material, program, geometry, index);
    let attribute;
    let renderer = bufferRenderer;
    if (index !== null) {
      attribute = attributes.get(index);
      renderer = indexedBufferRenderer;
      renderer.setIndex(attribute);
    }
    const dataCount = index !== null ? index.count : position.count;
    const rangeStart = geometry.drawRange.start * rangeFactor;
    const rangeCount = geometry.drawRange.count * rangeFactor;
    const groupStart = group !== null ? group.start * rangeFactor : 0;
    const groupCount = group !== null ? group.count * rangeFactor : Infinity;
    const drawStart = Math.max(rangeStart, groupStart);
    const drawEnd = Math.min(dataCount, rangeStart + rangeCount, groupStart + groupCount) - 1;
    const drawCount = Math.max(0, drawEnd - drawStart + 1);
    if (drawCount === 0)
      return;
    if (object.isMesh) {
      if (material.wireframe === true) {
        state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
        renderer.setMode(_gl.LINES);
      } else {
        renderer.setMode(_gl.TRIANGLES);
      }
    } else if (object.isLine) {
      let lineWidth = material.linewidth;
      if (lineWidth === void 0)
        lineWidth = 1;
      state.setLineWidth(lineWidth * getTargetPixelRatio());
      if (object.isLineSegments) {
        renderer.setMode(_gl.LINES);
      } else if (object.isLineLoop) {
        renderer.setMode(_gl.LINE_LOOP);
      } else {
        renderer.setMode(_gl.LINE_STRIP);
      }
    } else if (object.isPoints) {
      renderer.setMode(_gl.POINTS);
    } else if (object.isSprite) {
      renderer.setMode(_gl.TRIANGLES);
    }
    if (object.isInstancedMesh) {
      renderer.renderInstances(drawStart, drawCount, object.count);
    } else if (geometry.isInstancedBufferGeometry) {
      const instanceCount = Math.min(geometry.instanceCount, geometry._maxInstanceCount);
      renderer.renderInstances(drawStart, drawCount, instanceCount);
    } else {
      renderer.render(drawStart, drawCount);
    }
  };
  this.compile = function(scene, camera) {
    currentRenderState = renderStates.get(scene);
    currentRenderState.init();
    renderStateStack.push(currentRenderState);
    scene.traverseVisible(function(object) {
      if (object.isLight && object.layers.test(camera.layers)) {
        currentRenderState.pushLight(object);
        if (object.castShadow) {
          currentRenderState.pushShadow(object);
        }
      }
    });
    currentRenderState.setupLights(_this.physicallyCorrectLights);
    scene.traverse(function(object) {
      const material = object.material;
      if (material) {
        if (Array.isArray(material)) {
          for (let i = 0; i < material.length; i++) {
            const material2 = material[i];
            getProgram(material2, scene, object);
          }
        } else {
          getProgram(material, scene, object);
        }
      }
    });
    renderStateStack.pop();
    currentRenderState = null;
  };
  let onAnimationFrameCallback = null;
  function onAnimationFrame(time) {
    if (onAnimationFrameCallback)
      onAnimationFrameCallback(time);
  }
  function onXRSessionStart() {
    animation.stop();
  }
  function onXRSessionEnd() {
    animation.start();
  }
  const animation = new WebGLAnimation();
  animation.setAnimationLoop(onAnimationFrame);
  if (typeof self !== "undefined")
    animation.setContext(self);
  this.setAnimationLoop = function(callback) {
    onAnimationFrameCallback = callback;
    xr.setAnimationLoop(callback);
    callback === null ? animation.stop() : animation.start();
  };
  xr.addEventListener("sessionstart", onXRSessionStart);
  xr.addEventListener("sessionend", onXRSessionEnd);
  this.render = function(scene, camera) {
    if (camera !== void 0 && camera.isCamera !== true) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (_isContextLost === true)
      return;
    if (scene.autoUpdate === true)
      scene.updateMatrixWorld();
    if (camera.parent === null)
      camera.updateMatrixWorld();
    if (xr.enabled === true && xr.isPresenting === true) {
      if (xr.cameraAutoUpdate === true)
        xr.updateCamera(camera);
      camera = xr.getCamera();
    }
    if (scene.isScene === true)
      scene.onBeforeRender(_this, scene, camera, _currentRenderTarget);
    currentRenderState = renderStates.get(scene, renderStateStack.length);
    currentRenderState.init();
    renderStateStack.push(currentRenderState);
    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(_projScreenMatrix);
    _localClippingEnabled = this.localClippingEnabled;
    _clippingEnabled = clipping.init(this.clippingPlanes, _localClippingEnabled, camera);
    currentRenderList = renderLists.get(scene, renderListStack.length);
    currentRenderList.init();
    renderListStack.push(currentRenderList);
    projectObject(scene, camera, 0, _this.sortObjects);
    currentRenderList.finish();
    if (_this.sortObjects === true) {
      currentRenderList.sort(_opaqueSort, _transparentSort);
    }
    if (_clippingEnabled === true)
      clipping.beginShadows();
    const shadowsArray = currentRenderState.state.shadowsArray;
    shadowMap.render(shadowsArray, scene, camera);
    if (_clippingEnabled === true)
      clipping.endShadows();
    if (this.info.autoReset === true)
      this.info.reset();
    background.render(currentRenderList, scene);
    currentRenderState.setupLights(_this.physicallyCorrectLights);
    if (camera.isArrayCamera) {
      const cameras = camera.cameras;
      for (let i = 0, l = cameras.length; i < l; i++) {
        const camera2 = cameras[i];
        renderScene(currentRenderList, scene, camera2, camera2.viewport);
      }
    } else {
      renderScene(currentRenderList, scene, camera);
    }
    if (_currentRenderTarget !== null) {
      textures.updateMultisampleRenderTarget(_currentRenderTarget);
      textures.updateRenderTargetMipmap(_currentRenderTarget);
    }
    if (scene.isScene === true)
      scene.onAfterRender(_this, scene, camera);
    bindingStates.resetDefaultState();
    _currentMaterialId = -1;
    _currentCamera = null;
    renderStateStack.pop();
    if (renderStateStack.length > 0) {
      currentRenderState = renderStateStack[renderStateStack.length - 1];
    } else {
      currentRenderState = null;
    }
    renderListStack.pop();
    if (renderListStack.length > 0) {
      currentRenderList = renderListStack[renderListStack.length - 1];
    } else {
      currentRenderList = null;
    }
  };
  function projectObject(object, camera, groupOrder, sortObjects) {
    if (object.visible === false)
      return;
    const visible = object.layers.test(camera.layers);
    if (visible) {
      if (object.isGroup) {
        groupOrder = object.renderOrder;
      } else if (object.isLOD) {
        if (object.autoUpdate === true)
          object.update(camera);
      } else if (object.isLight) {
        currentRenderState.pushLight(object);
        if (object.castShadow) {
          currentRenderState.pushShadow(object);
        }
      } else if (object.isSprite) {
        if (!object.frustumCulled || _frustum.intersectsSprite(object)) {
          if (sortObjects) {
            _vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);
          }
          const geometry = objects.update(object);
          const material = object.material;
          if (material.visible) {
            currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
          }
        }
      } else if (object.isMesh || object.isLine || object.isPoints) {
        if (object.isSkinnedMesh) {
          if (object.skeleton.frame !== info.render.frame) {
            object.skeleton.update();
            object.skeleton.frame = info.render.frame;
          }
        }
        if (!object.frustumCulled || _frustum.intersectsObject(object)) {
          if (sortObjects) {
            _vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);
          }
          const geometry = objects.update(object);
          const material = object.material;
          if (Array.isArray(material)) {
            const groups = geometry.groups;
            for (let i = 0, l = groups.length; i < l; i++) {
              const group = groups[i];
              const groupMaterial = material[group.materialIndex];
              if (groupMaterial && groupMaterial.visible) {
                currentRenderList.push(object, geometry, groupMaterial, groupOrder, _vector3.z, group);
              }
            }
          } else if (material.visible) {
            currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
          }
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      projectObject(children[i], camera, groupOrder, sortObjects);
    }
  }
  function renderScene(currentRenderList2, scene, camera, viewport) {
    const opaqueObjects = currentRenderList2.opaque;
    const transmissiveObjects = currentRenderList2.transmissive;
    const transparentObjects = currentRenderList2.transparent;
    currentRenderState.setupLightsView(camera);
    if (transmissiveObjects.length > 0)
      renderTransmissionPass(opaqueObjects, scene, camera);
    if (viewport)
      state.viewport(_currentViewport.copy(viewport));
    if (opaqueObjects.length > 0)
      renderObjects(opaqueObjects, scene, camera);
    if (transmissiveObjects.length > 0)
      renderObjects(transmissiveObjects, scene, camera);
    if (transparentObjects.length > 0)
      renderObjects(transparentObjects, scene, camera);
    state.buffers.depth.setTest(true);
    state.buffers.depth.setMask(true);
    state.buffers.color.setMask(true);
    state.setPolygonOffset(false);
  }
  function renderTransmissionPass(opaqueObjects, scene, camera) {
    const isWebGL2 = capabilities.isWebGL2;
    if (_transmissionRenderTarget === null) {
      _transmissionRenderTarget = new WebGLRenderTarget(1, 1, {
        generateMipmaps: true,
        type: extensions.has("EXT_color_buffer_half_float") ? HalfFloatType : UnsignedByteType,
        minFilter: LinearMipmapLinearFilter,
        samples: isWebGL2 && _antialias === true ? 4 : 0
      });
    }
    _this.getDrawingBufferSize(_vector2);
    if (isWebGL2) {
      _transmissionRenderTarget.setSize(_vector2.x, _vector2.y);
    } else {
      _transmissionRenderTarget.setSize(floorPowerOfTwo(_vector2.x), floorPowerOfTwo(_vector2.y));
    }
    const currentRenderTarget = _this.getRenderTarget();
    _this.setRenderTarget(_transmissionRenderTarget);
    _this.clear();
    const currentToneMapping = _this.toneMapping;
    _this.toneMapping = NoToneMapping;
    renderObjects(opaqueObjects, scene, camera);
    _this.toneMapping = currentToneMapping;
    textures.updateMultisampleRenderTarget(_transmissionRenderTarget);
    textures.updateRenderTargetMipmap(_transmissionRenderTarget);
    _this.setRenderTarget(currentRenderTarget);
  }
  function renderObjects(renderList, scene, camera) {
    const overrideMaterial = scene.isScene === true ? scene.overrideMaterial : null;
    for (let i = 0, l = renderList.length; i < l; i++) {
      const renderItem = renderList[i];
      const object = renderItem.object;
      const geometry = renderItem.geometry;
      const material = overrideMaterial === null ? renderItem.material : overrideMaterial;
      const group = renderItem.group;
      if (object.layers.test(camera.layers)) {
        renderObject(object, scene, camera, geometry, material, group);
      }
    }
  }
  function renderObject(object, scene, camera, geometry, material, group) {
    object.onBeforeRender(_this, scene, camera, geometry, material, group);
    object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
    object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
    material.onBeforeRender(_this, scene, camera, geometry, object, group);
    if (material.transparent === true && material.side === DoubleSide) {
      material.side = BackSide;
      material.needsUpdate = true;
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
      material.side = FrontSide;
      material.needsUpdate = true;
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
      material.side = DoubleSide;
    } else {
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
    }
    object.onAfterRender(_this, scene, camera, geometry, material, group);
  }
  function getProgram(material, scene, object) {
    if (scene.isScene !== true)
      scene = _emptyScene;
    const materialProperties = properties.get(material);
    const lights = currentRenderState.state.lights;
    const shadowsArray = currentRenderState.state.shadowsArray;
    const lightsStateVersion = lights.state.version;
    const parameters2 = programCache.getParameters(material, lights.state, shadowsArray, scene, object);
    const programCacheKey = programCache.getProgramCacheKey(parameters2);
    let programs = materialProperties.programs;
    materialProperties.environment = material.isMeshStandardMaterial ? scene.environment : null;
    materialProperties.fog = scene.fog;
    materialProperties.envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || materialProperties.environment);
    if (programs === void 0) {
      material.addEventListener("dispose", onMaterialDispose);
      programs = /* @__PURE__ */ new Map();
      materialProperties.programs = programs;
    }
    let program = programs.get(programCacheKey);
    if (program !== void 0) {
      if (materialProperties.currentProgram === program && materialProperties.lightsStateVersion === lightsStateVersion) {
        updateCommonMaterialProperties(material, parameters2);
        return program;
      }
    } else {
      parameters2.uniforms = programCache.getUniforms(material);
      material.onBuild(object, parameters2, _this);
      material.onBeforeCompile(parameters2, _this);
      program = programCache.acquireProgram(parameters2, programCacheKey);
      programs.set(programCacheKey, program);
      materialProperties.uniforms = parameters2.uniforms;
    }
    const uniforms = materialProperties.uniforms;
    if (!material.isShaderMaterial && !material.isRawShaderMaterial || material.clipping === true) {
      uniforms.clippingPlanes = clipping.uniform;
    }
    updateCommonMaterialProperties(material, parameters2);
    materialProperties.needsLights = materialNeedsLights(material);
    materialProperties.lightsStateVersion = lightsStateVersion;
    if (materialProperties.needsLights) {
      uniforms.ambientLightColor.value = lights.state.ambient;
      uniforms.lightProbe.value = lights.state.probe;
      uniforms.directionalLights.value = lights.state.directional;
      uniforms.directionalLightShadows.value = lights.state.directionalShadow;
      uniforms.spotLights.value = lights.state.spot;
      uniforms.spotLightShadows.value = lights.state.spotShadow;
      uniforms.rectAreaLights.value = lights.state.rectArea;
      uniforms.ltc_1.value = lights.state.rectAreaLTC1;
      uniforms.ltc_2.value = lights.state.rectAreaLTC2;
      uniforms.pointLights.value = lights.state.point;
      uniforms.pointLightShadows.value = lights.state.pointShadow;
      uniforms.hemisphereLights.value = lights.state.hemi;
      uniforms.directionalShadowMap.value = lights.state.directionalShadowMap;
      uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
      uniforms.spotShadowMap.value = lights.state.spotShadowMap;
      uniforms.spotShadowMatrix.value = lights.state.spotShadowMatrix;
      uniforms.pointShadowMap.value = lights.state.pointShadowMap;
      uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
    }
    const progUniforms = program.getUniforms();
    const uniformsList = WebGLUniforms.seqWithValue(progUniforms.seq, uniforms);
    materialProperties.currentProgram = program;
    materialProperties.uniformsList = uniformsList;
    return program;
  }
  function updateCommonMaterialProperties(material, parameters2) {
    const materialProperties = properties.get(material);
    materialProperties.outputEncoding = parameters2.outputEncoding;
    materialProperties.instancing = parameters2.instancing;
    materialProperties.skinning = parameters2.skinning;
    materialProperties.morphTargets = parameters2.morphTargets;
    materialProperties.morphNormals = parameters2.morphNormals;
    materialProperties.morphColors = parameters2.morphColors;
    materialProperties.morphTargetsCount = parameters2.morphTargetsCount;
    materialProperties.numClippingPlanes = parameters2.numClippingPlanes;
    materialProperties.numIntersection = parameters2.numClipIntersection;
    materialProperties.vertexAlphas = parameters2.vertexAlphas;
    materialProperties.vertexTangents = parameters2.vertexTangents;
    materialProperties.toneMapping = parameters2.toneMapping;
  }
  function setProgram(camera, scene, geometry, material, object) {
    if (scene.isScene !== true)
      scene = _emptyScene;
    textures.resetTextureUnits();
    const fog = scene.fog;
    const environment = material.isMeshStandardMaterial ? scene.environment : null;
    const encoding = _currentRenderTarget === null ? _this.outputEncoding : _currentRenderTarget.isXRRenderTarget === true ? _currentRenderTarget.texture.encoding : LinearEncoding;
    const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
    const vertexAlphas = material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4;
    const vertexTangents = !!material.normalMap && !!geometry.attributes.tangent;
    const morphTargets = !!geometry.morphAttributes.position;
    const morphNormals = !!geometry.morphAttributes.normal;
    const morphColors = !!geometry.morphAttributes.color;
    const toneMapping = material.toneMapped ? _this.toneMapping : NoToneMapping;
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    const materialProperties = properties.get(material);
    const lights = currentRenderState.state.lights;
    if (_clippingEnabled === true) {
      if (_localClippingEnabled === true || camera !== _currentCamera) {
        const useCache = camera === _currentCamera && material.id === _currentMaterialId;
        clipping.setState(material, camera, useCache);
      }
    }
    let needsProgramChange = false;
    if (material.version === materialProperties.__version) {
      if (materialProperties.needsLights && materialProperties.lightsStateVersion !== lights.state.version) {
        needsProgramChange = true;
      } else if (materialProperties.outputEncoding !== encoding) {
        needsProgramChange = true;
      } else if (object.isInstancedMesh && materialProperties.instancing === false) {
        needsProgramChange = true;
      } else if (!object.isInstancedMesh && materialProperties.instancing === true) {
        needsProgramChange = true;
      } else if (object.isSkinnedMesh && materialProperties.skinning === false) {
        needsProgramChange = true;
      } else if (!object.isSkinnedMesh && materialProperties.skinning === true) {
        needsProgramChange = true;
      } else if (materialProperties.envMap !== envMap) {
        needsProgramChange = true;
      } else if (material.fog === true && materialProperties.fog !== fog) {
        needsProgramChange = true;
      } else if (materialProperties.numClippingPlanes !== void 0 && (materialProperties.numClippingPlanes !== clipping.numPlanes || materialProperties.numIntersection !== clipping.numIntersection)) {
        needsProgramChange = true;
      } else if (materialProperties.vertexAlphas !== vertexAlphas) {
        needsProgramChange = true;
      } else if (materialProperties.vertexTangents !== vertexTangents) {
        needsProgramChange = true;
      } else if (materialProperties.morphTargets !== morphTargets) {
        needsProgramChange = true;
      } else if (materialProperties.morphNormals !== morphNormals) {
        needsProgramChange = true;
      } else if (materialProperties.morphColors !== morphColors) {
        needsProgramChange = true;
      } else if (materialProperties.toneMapping !== toneMapping) {
        needsProgramChange = true;
      } else if (capabilities.isWebGL2 === true && materialProperties.morphTargetsCount !== morphTargetsCount) {
        needsProgramChange = true;
      }
    } else {
      needsProgramChange = true;
      materialProperties.__version = material.version;
    }
    let program = materialProperties.currentProgram;
    if (needsProgramChange === true) {
      program = getProgram(material, scene, object);
    }
    let refreshProgram = false;
    let refreshMaterial = false;
    let refreshLights = false;
    const p_uniforms = program.getUniforms(), m_uniforms = materialProperties.uniforms;
    if (state.useProgram(program.program)) {
      refreshProgram = true;
      refreshMaterial = true;
      refreshLights = true;
    }
    if (material.id !== _currentMaterialId) {
      _currentMaterialId = material.id;
      refreshMaterial = true;
    }
    if (refreshProgram || _currentCamera !== camera) {
      p_uniforms.setValue(_gl, "projectionMatrix", camera.projectionMatrix);
      if (capabilities.logarithmicDepthBuffer) {
        p_uniforms.setValue(
          _gl,
          "logDepthBufFC",
          2 / (Math.log(camera.far + 1) / Math.LN2)
        );
      }
      if (_currentCamera !== camera) {
        _currentCamera = camera;
        refreshMaterial = true;
        refreshLights = true;
      }
      if (material.isShaderMaterial || material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshStandardMaterial || material.envMap) {
        const uCamPos = p_uniforms.map.cameraPosition;
        if (uCamPos !== void 0) {
          uCamPos.setValue(
            _gl,
            _vector3.setFromMatrixPosition(camera.matrixWorld)
          );
        }
      }
      if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial) {
        p_uniforms.setValue(_gl, "isOrthographic", camera.isOrthographicCamera === true);
      }
      if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial || material.isShadowMaterial || object.isSkinnedMesh) {
        p_uniforms.setValue(_gl, "viewMatrix", camera.matrixWorldInverse);
      }
    }
    if (object.isSkinnedMesh) {
      p_uniforms.setOptional(_gl, object, "bindMatrix");
      p_uniforms.setOptional(_gl, object, "bindMatrixInverse");
      const skeleton = object.skeleton;
      if (skeleton) {
        if (capabilities.floatVertexTextures) {
          if (skeleton.boneTexture === null)
            skeleton.computeBoneTexture();
          p_uniforms.setValue(_gl, "boneTexture", skeleton.boneTexture, textures);
          p_uniforms.setValue(_gl, "boneTextureSize", skeleton.boneTextureSize);
        } else {
          console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.");
        }
      }
    }
    const morphAttributes = geometry.morphAttributes;
    if (morphAttributes.position !== void 0 || morphAttributes.normal !== void 0 || morphAttributes.color !== void 0 && capabilities.isWebGL2 === true) {
      morphtargets.update(object, geometry, material, program);
    }
    if (refreshMaterial || materialProperties.receiveShadow !== object.receiveShadow) {
      materialProperties.receiveShadow = object.receiveShadow;
      p_uniforms.setValue(_gl, "receiveShadow", object.receiveShadow);
    }
    if (refreshMaterial) {
      p_uniforms.setValue(_gl, "toneMappingExposure", _this.toneMappingExposure);
      if (materialProperties.needsLights) {
        markUniformsLightsNeedsUpdate(m_uniforms, refreshLights);
      }
      if (fog && material.fog === true) {
        materials.refreshFogUniforms(m_uniforms, fog);
      }
      materials.refreshMaterialUniforms(m_uniforms, material, _pixelRatio, _height, _transmissionRenderTarget);
      WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
    }
    if (material.isShaderMaterial && material.uniformsNeedUpdate === true) {
      WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
      material.uniformsNeedUpdate = false;
    }
    if (material.isSpriteMaterial) {
      p_uniforms.setValue(_gl, "center", object.center);
    }
    p_uniforms.setValue(_gl, "modelViewMatrix", object.modelViewMatrix);
    p_uniforms.setValue(_gl, "normalMatrix", object.normalMatrix);
    p_uniforms.setValue(_gl, "modelMatrix", object.matrixWorld);
    return program;
  }
  function markUniformsLightsNeedsUpdate(uniforms, value) {
    uniforms.ambientLightColor.needsUpdate = value;
    uniforms.lightProbe.needsUpdate = value;
    uniforms.directionalLights.needsUpdate = value;
    uniforms.directionalLightShadows.needsUpdate = value;
    uniforms.pointLights.needsUpdate = value;
    uniforms.pointLightShadows.needsUpdate = value;
    uniforms.spotLights.needsUpdate = value;
    uniforms.spotLightShadows.needsUpdate = value;
    uniforms.rectAreaLights.needsUpdate = value;
    uniforms.hemisphereLights.needsUpdate = value;
  }
  function materialNeedsLights(material) {
    return material.isMeshLambertMaterial || material.isMeshToonMaterial || material.isMeshPhongMaterial || material.isMeshStandardMaterial || material.isShadowMaterial || material.isShaderMaterial && material.lights === true;
  }
  this.getActiveCubeFace = function() {
    return _currentActiveCubeFace;
  };
  this.getActiveMipmapLevel = function() {
    return _currentActiveMipmapLevel;
  };
  this.getRenderTarget = function() {
    return _currentRenderTarget;
  };
  this.setRenderTargetTextures = function(renderTarget, colorTexture, depthTexture) {
    properties.get(renderTarget.texture).__webglTexture = colorTexture;
    properties.get(renderTarget.depthTexture).__webglTexture = depthTexture;
    const renderTargetProperties = properties.get(renderTarget);
    renderTargetProperties.__hasExternalTextures = true;
    if (renderTargetProperties.__hasExternalTextures) {
      renderTargetProperties.__autoAllocateDepthBuffer = depthTexture === void 0;
      if (!renderTargetProperties.__autoAllocateDepthBuffer) {
        if (extensions.has("WEBGL_multisampled_render_to_texture") === true) {
          console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided");
          renderTargetProperties.__useRenderToTexture = false;
        }
      }
    }
  };
  this.setRenderTargetFramebuffer = function(renderTarget, defaultFramebuffer) {
    const renderTargetProperties = properties.get(renderTarget);
    renderTargetProperties.__webglFramebuffer = defaultFramebuffer;
    renderTargetProperties.__useDefaultFramebuffer = defaultFramebuffer === void 0;
  };
  this.setRenderTarget = function(renderTarget, activeCubeFace = 0, activeMipmapLevel = 0) {
    _currentRenderTarget = renderTarget;
    _currentActiveCubeFace = activeCubeFace;
    _currentActiveMipmapLevel = activeMipmapLevel;
    let useDefaultFramebuffer = true;
    if (renderTarget) {
      const renderTargetProperties = properties.get(renderTarget);
      if (renderTargetProperties.__useDefaultFramebuffer !== void 0) {
        state.bindFramebuffer(_gl.FRAMEBUFFER, null);
        useDefaultFramebuffer = false;
      } else if (renderTargetProperties.__webglFramebuffer === void 0) {
        textures.setupRenderTarget(renderTarget);
      } else if (renderTargetProperties.__hasExternalTextures) {
        textures.rebindTextures(renderTarget, properties.get(renderTarget.texture).__webglTexture, properties.get(renderTarget.depthTexture).__webglTexture);
      }
    }
    let framebuffer = null;
    let isCube = false;
    let isRenderTarget3D = false;
    if (renderTarget) {
      const texture = renderTarget.texture;
      if (texture.isData3DTexture || texture.isDataArrayTexture) {
        isRenderTarget3D = true;
      }
      const __webglFramebuffer = properties.get(renderTarget).__webglFramebuffer;
      if (renderTarget.isWebGLCubeRenderTarget) {
        framebuffer = __webglFramebuffer[activeCubeFace];
        isCube = true;
      } else if (capabilities.isWebGL2 && renderTarget.samples > 0 && textures.useMultisampledRTT(renderTarget) === false) {
        framebuffer = properties.get(renderTarget).__webglMultisampledFramebuffer;
      } else {
        framebuffer = __webglFramebuffer;
      }
      _currentViewport.copy(renderTarget.viewport);
      _currentScissor.copy(renderTarget.scissor);
      _currentScissorTest = renderTarget.scissorTest;
    } else {
      _currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor();
      _currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor();
      _currentScissorTest = _scissorTest;
    }
    const framebufferBound = state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
    if (framebufferBound && capabilities.drawBuffers && useDefaultFramebuffer) {
      state.drawBuffers(renderTarget, framebuffer);
    }
    state.viewport(_currentViewport);
    state.scissor(_currentScissor);
    state.setScissorTest(_currentScissorTest);
    if (isCube) {
      const textureProperties = properties.get(renderTarget.texture);
      _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + activeCubeFace, textureProperties.__webglTexture, activeMipmapLevel);
    } else if (isRenderTarget3D) {
      const textureProperties = properties.get(renderTarget.texture);
      const layer = activeCubeFace || 0;
      _gl.framebufferTextureLayer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, textureProperties.__webglTexture, activeMipmapLevel || 0, layer);
    }
    _currentMaterialId = -1;
  };
  this.readRenderTargetPixels = function(renderTarget, x, y, width, height, buffer, activeCubeFaceIndex) {
    if (!(renderTarget && renderTarget.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let framebuffer = properties.get(renderTarget).__webglFramebuffer;
    if (renderTarget.isWebGLCubeRenderTarget && activeCubeFaceIndex !== void 0) {
      framebuffer = framebuffer[activeCubeFaceIndex];
    }
    if (framebuffer) {
      state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
      try {
        const texture = renderTarget.texture;
        const textureFormat = texture.format;
        const textureType = texture.type;
        if (textureFormat !== RGBAFormat && utils.convert(textureFormat) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_FORMAT)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const halfFloatSupportedByExt = textureType === HalfFloatType && (extensions.has("EXT_color_buffer_half_float") || capabilities.isWebGL2 && extensions.has("EXT_color_buffer_float"));
        if (textureType !== UnsignedByteType && utils.convert(textureType) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_TYPE) && !(textureType === FloatType && (capabilities.isWebGL2 || extensions.has("OES_texture_float") || extensions.has("WEBGL_color_buffer_float"))) && !halfFloatSupportedByExt) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        if (x >= 0 && x <= renderTarget.width - width && (y >= 0 && y <= renderTarget.height - height)) {
          _gl.readPixels(x, y, width, height, utils.convert(textureFormat), utils.convert(textureType), buffer);
        }
      } finally {
        const framebuffer2 = _currentRenderTarget !== null ? properties.get(_currentRenderTarget).__webglFramebuffer : null;
        state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer2);
      }
    }
  };
  this.copyFramebufferToTexture = function(position, texture, level = 0) {
    if (texture.isFramebufferTexture !== true) {
      console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
      return;
    }
    const levelScale = Math.pow(2, -level);
    const width = Math.floor(texture.image.width * levelScale);
    const height = Math.floor(texture.image.height * levelScale);
    textures.setTexture2D(texture, 0);
    _gl.copyTexSubImage2D(_gl.TEXTURE_2D, level, 0, 0, position.x, position.y, width, height);
    state.unbindTexture();
  };
  this.copyTextureToTexture = function(position, srcTexture, dstTexture, level = 0) {
    const width = srcTexture.image.width;
    const height = srcTexture.image.height;
    const glFormat = utils.convert(dstTexture.format);
    const glType = utils.convert(dstTexture.type);
    textures.setTexture2D(dstTexture, 0);
    _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, dstTexture.flipY);
    _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, dstTexture.premultiplyAlpha);
    _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, dstTexture.unpackAlignment);
    if (srcTexture.isDataTexture) {
      _gl.texSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, width, height, glFormat, glType, srcTexture.image.data);
    } else {
      if (srcTexture.isCompressedTexture) {
        _gl.compressedTexSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, srcTexture.mipmaps[0].width, srcTexture.mipmaps[0].height, glFormat, srcTexture.mipmaps[0].data);
      } else {
        _gl.texSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, glFormat, glType, srcTexture.image);
      }
    }
    if (level === 0 && dstTexture.generateMipmaps)
      _gl.generateMipmap(_gl.TEXTURE_2D);
    state.unbindTexture();
  };
  this.copyTextureToTexture3D = function(sourceBox, position, srcTexture, dstTexture, level = 0) {
    if (_this.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const width = sourceBox.max.x - sourceBox.min.x + 1;
    const height = sourceBox.max.y - sourceBox.min.y + 1;
    const depth = sourceBox.max.z - sourceBox.min.z + 1;
    const glFormat = utils.convert(dstTexture.format);
    const glType = utils.convert(dstTexture.type);
    let glTarget;
    if (dstTexture.isData3DTexture) {
      textures.setTexture3D(dstTexture, 0);
      glTarget = _gl.TEXTURE_3D;
    } else if (dstTexture.isDataArrayTexture) {
      textures.setTexture2DArray(dstTexture, 0);
      glTarget = _gl.TEXTURE_2D_ARRAY;
    } else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, dstTexture.flipY);
    _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, dstTexture.premultiplyAlpha);
    _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, dstTexture.unpackAlignment);
    const unpackRowLen = _gl.getParameter(_gl.UNPACK_ROW_LENGTH);
    const unpackImageHeight = _gl.getParameter(_gl.UNPACK_IMAGE_HEIGHT);
    const unpackSkipPixels = _gl.getParameter(_gl.UNPACK_SKIP_PIXELS);
    const unpackSkipRows = _gl.getParameter(_gl.UNPACK_SKIP_ROWS);
    const unpackSkipImages = _gl.getParameter(_gl.UNPACK_SKIP_IMAGES);
    const image = srcTexture.isCompressedTexture ? srcTexture.mipmaps[0] : srcTexture.image;
    _gl.pixelStorei(_gl.UNPACK_ROW_LENGTH, image.width);
    _gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT, image.height);
    _gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS, sourceBox.min.x);
    _gl.pixelStorei(_gl.UNPACK_SKIP_ROWS, sourceBox.min.y);
    _gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES, sourceBox.min.z);
    if (srcTexture.isDataTexture || srcTexture.isData3DTexture) {
      _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, glType, image.data);
    } else {
      if (srcTexture.isCompressedTexture) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.");
        _gl.compressedTexSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, image.data);
      } else {
        _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, glType, image);
      }
    }
    _gl.pixelStorei(_gl.UNPACK_ROW_LENGTH, unpackRowLen);
    _gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT, unpackImageHeight);
    _gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS, unpackSkipPixels);
    _gl.pixelStorei(_gl.UNPACK_SKIP_ROWS, unpackSkipRows);
    _gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES, unpackSkipImages);
    if (level === 0 && dstTexture.generateMipmaps)
      _gl.generateMipmap(glTarget);
    state.unbindTexture();
  };
  this.initTexture = function(texture) {
    textures.setTexture2D(texture, 0);
    state.unbindTexture();
  };
  this.resetState = function() {
    _currentActiveCubeFace = 0;
    _currentActiveMipmapLevel = 0;
    _currentRenderTarget = null;
    state.reset();
    bindingStates.reset();
  };
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
}
WebGLRenderer.prototype.isWebGLRenderer = true;
export {
  WebGLRenderer
};
