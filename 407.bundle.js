"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[407,542],{7006:(t,i,s)=>{s.d(i,{BFQ:()=>Et,BG$:()=>Xt,BVF:()=>L,Bf4:()=>et,CaW:()=>jt,CdI:()=>K,CtA:()=>It,D1R:()=>dt,D9w:()=>Rt,Djp:()=>$t,E2K:()=>Lt,EoG:()=>G,FUD:()=>ai,GG6:()=>ei,GUF:()=>gi,Gih:()=>ni,Hy8:()=>W,ILR:()=>zt,IOt:()=>di,JQ4:()=>yt,KI_:()=>mi,KhW:()=>N,Kz5:()=>vt,LSk:()=>Si,LY2:()=>Q,L_r:()=>xi,LgZ:()=>k,LsT:()=>Mt,M5h:()=>v,M6v:()=>P,N4l:()=>M,NDo:()=>B,NYV:()=>ti,Ns1:()=>j,OTo:()=>Tt,OoA:()=>ot,PA7:()=>fi,PeU:()=>n,RlZ:()=>I,S2y:()=>h,Se2:()=>V,Sm8:()=>w,SvJ:()=>oi,T95:()=>mt,TyD:()=>rt,UCm:()=>Ct,UZH:()=>e,Vdb:()=>R,VzW:()=>St,W2J:()=>yi,WMw:()=>g,Wbm:()=>x,Wl3:()=>p,Wpd:()=>D,Xaj:()=>y,Y8D:()=>Ft,YGz:()=>Y,YLQ:()=>lt,Zr5:()=>E,_AM:()=>Zt,_Li:()=>c,_iA:()=>o,aH4:()=>pt,av9:()=>Dt,bGH:()=>S,bdR:()=>m,brP:()=>Jt,bsb:()=>ri,c8b:()=>T,cLu:()=>xt,cRx:()=>At,cum:()=>vi,dSO:()=>st,dZ3:()=>$,dwk:()=>l,eD:()=>z,eaV:()=>Pt,ehD:()=>u,ekQ:()=>qt,esl:()=>d,fSK:()=>J,fY$:()=>tt,fto:()=>Ut,g8_:()=>nt,ghN:()=>C,gi4:()=>Qt,hEm:()=>Wt,iAb:()=>gt,iWC:()=>F,iiP:()=>hi,irR:()=>Ot,jFi:()=>f,jZA:()=>Kt,k0A:()=>bt,k74:()=>A,knz:()=>pi,ksN:()=>Z,l0P:()=>Bt,mSO:()=>ui,ntZ:()=>r,pKu:()=>si,ptH:()=>Gt,qhX:()=>U,qkB:()=>kt,qyh:()=>ut,rOj:()=>b,r_:()=>O,rnI:()=>li,rpg:()=>at,tm_:()=>a,uL9:()=>q,uWy:()=>ht,v3W:()=>_t,vCF:()=>_,vCx:()=>Ht,vxC:()=>it,w$m:()=>H,wJv:()=>wt,wem:()=>ct,wk1:()=>Nt,wuA:()=>Vt,x5V:()=>Mi,xJs:()=>ii,xfE:()=>X,y2t:()=>Yt,ywz:()=>ft,z81:()=>ci});const e="140",n=0,a=1,h=2,o=1,r=2,l=3,p=0,c=1,u=2,d=1,f=0,m=1,g=2,M=3,v=4,y=5,S=100,x=101,b=102,O=103,w=104,T=200,C=201,N=202,F=203,A=204,k=205,J=206,W=207,R=208,D=209,I=210,L=0,V=1,E=2,_=3,z=4,Z=5,H=6,P=7,j=0,U=1,B=2,q=0,G=1,K=2,Y=3,Q=4,$=5,X=300,tt=301,it=302,st=303,et=304,nt=306,at=1e3,ht=1001,ot=1002,rt=1003,lt=1004,pt=1005,ct=1006,ut=1007,dt=1008,ft=1009,mt=1010,gt=1011,Mt=1012,vt=1013,yt=1014,St=1015,xt=1016,bt=1017,Ot=1018,wt=1020,Tt=1021,Ct=1022,Nt=1023,Ft=1024,At=1025,kt=1026,Jt=1027,Wt=1028,Rt=1029,Dt=1030,It=1031,Lt=1033,Vt=33776,Et=33777,_t=33778,zt=33779,Zt=35840,Ht=35841,Pt=35842,jt=35843,Ut=36196,Bt=37492,qt=37496,Gt=37808,Kt=37809,Yt=37810,Qt=37811,$t=37812,Xt=37813,ti=37814,ii=37815,si=37816,ei=37817,ni=37818,ai=37819,hi=37820,oi=37821,ri=36492,li=3e3,pi=3001,ci=3200,ui=3201,di=0,fi=1,mi="srgb",gi="srgb-linear",Mi=7680,vi=519,yi=35044,Si="300 es",xi=1035},9574:(t,i,s)=>{s.d(i,{p:()=>e});class e{addEventListener(t,i){void 0===this._listeners&&(this._listeners={});const s=this._listeners;void 0===s[t]&&(s[t]=[]),-1===s[t].indexOf(i)&&s[t].push(i)}hasEventListener(t,i){if(void 0===this._listeners)return!1;const s=this._listeners;return void 0!==s[t]&&-1!==s[t].indexOf(i)}removeEventListener(t,i){if(void 0===this._listeners)return;const s=this._listeners[t];if(void 0!==s){const t=s.indexOf(i);-1!==t&&s.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const i=this._listeners[t.type];if(void 0!==i){t.target=this;const s=i.slice(0);for(let i=0,e=s.length;i<e;i++)s[i].call(this,t);t.target=null}}}},406:(t,i,s)=>{s.d(i,{F:()=>o});var e=s(9574),n=s(7006),a=s(9542);let h=0;class o extends e.p{constructor(){super(),Object.defineProperty(this,"id",{value:h++}),this.uuid=a.DO(),this.name="",this.type="Material",this.blending=n.bdR,this.side=n.Wl3,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=n.k74,this.blendDst=n.LgZ,this.blendEquation=n.bGH,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=n.vCF,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n.cum,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n.x5V,this.stencilZFail=n.x5V,this.stencilZPass=n.x5V,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const i in t){const s=t[i];if(void 0===s){console.warn("THREE.Material: '"+i+"' parameter is undefined.");continue}if("shading"===i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===n.esl;continue}const e=this[i];void 0!==e?e&&e.isColor?e.set(s):e&&e.isVector3&&s&&s.isVector3?e.copy(s):this[i]=s:console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.")}}toJSON(t){const i=void 0===t||"string"==typeof t;i&&(t={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function e(t){const i=[];for(const s in t){const e=t[s];delete e.metadata,i.push(e)}return i}if(s.uuid=this.uuid,s.type=this.type,""!==this.name&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),void 0!==this.roughness&&(s.roughness=this.roughness),void 0!==this.metalness&&(s.metalness=this.metalness),void 0!==this.sheen&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(s.shininess=this.shininess),void 0!==this.clearcoat&&(s.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(s.combine=this.combine)),void 0!==this.envMapIntensity&&(s.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(s.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&(s.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(s.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(s.size=this.size),null!==this.shadowSide&&(s.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==n.bdR&&(s.blending=this.blending),this.side!==n.Wl3&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),!0===this.transparent&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(s.rotation=this.rotation),!0===this.polygonOffset&&(s.polygonOffset=!0),0!==this.polygonOffsetFactor&&(s.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(s.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(s.linewidth=this.linewidth),void 0!==this.dashSize&&(s.dashSize=this.dashSize),void 0!==this.gapSize&&(s.gapSize=this.gapSize),void 0!==this.scale&&(s.scale=this.scale),!0===this.dithering&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(s.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(s.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(s.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(s.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(s.flatShading=this.flatShading),!1===this.visible&&(s.visible=!1),!1===this.toneMapped&&(s.toneMapped=!1),!1===this.fog&&(s.fog=!1),"{}"!==JSON.stringify(this.userData)&&(s.userData=this.userData),i){const i=e(t.textures),n=e(t.images);i.length>0&&(s.textures=i),n.length>0&&(s.images=n)}return s}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(null!==i){const t=i.length;s=new Array(t);for(let e=0;e!==t;++e)s[e]=i[e].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}}o.prototype.isMaterial=!0,o.fromType=function(){return null}},407:(t,i,s)=>{s.r(i),s.d(i,{ShaderMaterial:()=>a});var e=s(406),n=s(8369);class a extends e.F{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",this.fragmentShader="\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=(0,n.dw)(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const e=this.uniforms[s].value;e&&e.isTexture?i.uniforms[s]={type:"t",value:e.toJSON(t).uuid}:e&&e.isColor?i.uniforms[s]={type:"c",value:e.getHex()}:e&&e.isVector2?i.uniforms[s]={type:"v2",value:e.toArray()}:e&&e.isVector3?i.uniforms[s]={type:"v3",value:e.toArray()}:e&&e.isVector4?i.uniforms[s]={type:"v4",value:e.toArray()}:e&&e.isMatrix3?i.uniforms[s]={type:"m3",value:e.toArray()}:e&&e.isMatrix4?i.uniforms[s]={type:"m4",value:e.toArray()}:i.uniforms[s]={value:e}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;const s={};for(const t in this.extensions)!0===this.extensions[t]&&(s[t]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}a.prototype.isShaderMaterial=!0},9542:(t,i,s)=>{s.d(i,{DO:()=>h,I3:()=>a,gy:()=>c,kz:()=>r,qW:()=>n,t7:()=>l,uZ:()=>o,wt:()=>p});const e=[];for(let t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);const n=Math.PI/180,a=180/Math.PI;function h(){const t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,s=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+"-"+e[255&i]+e[i>>8&255]+"-"+e[i>>16&15|64]+e[i>>24&255]+"-"+e[63&s|128]+e[s>>8&255]+"-"+e[s>>16&255]+e[s>>24&255]+e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]).toLowerCase()}function o(t,i,s){return Math.max(i,Math.min(s,t))}function r(t,i){return(t%i+i)%i}function l(t,i,s){return(1-s)*t+s*i}function p(t){return 0==(t&t-1)&&0!==t}function c(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}},8369:(t,i,s)=>{function e(t){const i={};for(const s in t){i[s]={};for(const e in t[s]){const n=t[s][e];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?i[s][e]=n.clone():Array.isArray(n)?i[s][e]=n.slice():i[s][e]=n}}return i}function n(t){const i={};for(let s=0;s<t.length;s++){const n=e(t[s]);for(const t in n)i[t]=n[t]}return i}s.d(i,{Rh:()=>n,dw:()=>e,rD:()=>a});const a={clone:e,merge:n}}}]);