const REVISION = "140";
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const FlatShading = 1;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1e3;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBFormat = 1022;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const LinearEncoding = 3e3;
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;
const SRGBColorSpace = "srgb";
const LinearSRGBColorSpace = "srgb-linear";
const KeepStencilOp = 7680;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const GLSL3 = "300 es";
const _SRGBAFormat = 1035;
export {
  OneMinusSrcColorFactor as $,
  ACESFilmicToneMapping as A,
  BackSide as B,
  ClampToEdgeWrapping as C,
  DoubleSide as D,
  EquirectangularReflectionMapping as E,
  FrontSide as F,
  GLSL3 as G,
  HalfFloatType as H,
  SubtractEquation as I,
  ReverseSubtractEquation as J,
  OneFactor as K,
  LinearFilter as L,
  MirroredRepeatWrapping as M,
  NoToneMapping as N,
  ObjectSpaceNormalMap as O,
  PCFShadowMap as P,
  SrcColorFactor as Q,
  RGBAFormat as R,
  SRGBColorSpace as S,
  TangentSpaceNormalMap as T,
  UnsignedByteType as U,
  VSMShadowMap as V,
  SrcAlphaFactor as W,
  SrcAlphaSaturateFactor as X,
  DstColorFactor as Y,
  ZeroFactor as Z,
  DstAlphaFactor as _,
  LinearMipmapLinearFilter as a,
  RGBA_ASTC_10x8_Format as a$,
  OneMinusSrcAlphaFactor as a0,
  OneMinusDstColorFactor as a1,
  OneMinusDstAlphaFactor as a2,
  CustomBlending as a3,
  MultiplyBlending as a4,
  SubtractiveBlending as a5,
  AdditiveBlending as a6,
  CullFaceNone as a7,
  CullFaceBack as a8,
  CullFaceFront as a9,
  RedFormat as aA,
  RGBFormat as aB,
  RedIntegerFormat as aC,
  RGFormat as aD,
  RGIntegerFormat as aE,
  RGBAIntegerFormat as aF,
  RGB_S3TC_DXT1_Format as aG,
  RGBA_S3TC_DXT1_Format as aH,
  RGBA_S3TC_DXT3_Format as aI,
  RGBA_S3TC_DXT5_Format as aJ,
  RGB_PVRTC_4BPPV1_Format as aK,
  RGB_PVRTC_2BPPV1_Format as aL,
  RGBA_PVRTC_4BPPV1_Format as aM,
  RGBA_PVRTC_2BPPV1_Format as aN,
  RGB_ETC1_Format as aO,
  RGB_ETC2_Format as aP,
  RGBA_ETC2_EAC_Format as aQ,
  RGBA_ASTC_4x4_Format as aR,
  RGBA_ASTC_5x4_Format as aS,
  RGBA_ASTC_5x5_Format as aT,
  RGBA_ASTC_6x5_Format as aU,
  RGBA_ASTC_6x6_Format as aV,
  RGBA_ASTC_8x5_Format as aW,
  RGBA_ASTC_8x6_Format as aX,
  RGBA_ASTC_8x8_Format as aY,
  RGBA_ASTC_10x5_Format as aZ,
  RGBA_ASTC_10x6_Format as a_,
  MinEquation as aa,
  MaxEquation as ab,
  NotEqualDepth as ac,
  GreaterDepth as ad,
  GreaterEqualDepth as ae,
  EqualDepth as af,
  LessDepth as ag,
  AlwaysDepth as ah,
  NeverDepth as ai,
  NearestMipmapNearestFilter as aj,
  NearestMipmapLinearFilter as ak,
  LinearMipmapNearestFilter as al,
  UnsignedIntType as am,
  UnsignedInt248Type as an,
  DepthFormat as ao,
  UnsignedShortType as ap,
  DepthStencilFormat as aq,
  _SRGBAFormat as ar,
  UnsignedShort4444Type as as,
  UnsignedShort5551Type as at,
  ByteType as au,
  ShortType as av,
  IntType as aw,
  AlphaFormat as ax,
  LuminanceFormat as ay,
  LuminanceAlphaFormat as az,
  LinearEncoding as b,
  RGBA_ASTC_10x10_Format as b0,
  RGBA_ASTC_12x10_Format as b1,
  RGBA_ASTC_12x12_Format as b2,
  RGBA_BPTC_Format as b3,
  REVISION as b4,
  StaticDrawUsage as b5,
  AlwaysStencilFunc as b6,
  KeepStencilOp as b7,
  FlatShading as b8,
  UVMapping as c,
  RepeatWrapping as d,
  LinearSRGBColorSpace as e,
  CubeReflectionMapping as f,
  CubeUVReflectionMapping as g,
  NoBlending as h,
  EquirectangularRefractionMapping as i,
  CubeRefractionMapping as j,
  NearestFilter as k,
  FloatType as l,
  CustomToneMapping as m,
  CineonToneMapping as n,
  ReinhardToneMapping as o,
  LinearToneMapping as p,
  PCFSoftShadowMap as q,
  AddOperation as r,
  sRGBEncoding as s,
  MixOperation as t,
  MultiplyOperation as u,
  NormalBlending as v,
  BasicDepthPacking as w,
  RGBADepthPacking as x,
  LessEqualDepth as y,
  AddEquation as z
};
