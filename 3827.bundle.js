"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[3827],{9866:(t,e,s)=>{s.r(e),s.d(e,{BoxBufferGeometry:()=>i,BoxGeometry:()=>i});var o=s(5699),r=s(4430),h=s(4532);class i extends o.BufferGeometry{constructor(t=1,e=1,s=1,o=1,i=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:o,heightSegments:i,depthSegments:n};const u=this;o=Math.floor(o),i=Math.floor(i),n=Math.floor(n);const f=[],p=[],c=[],l=[];let a=0,d=0;function y(t,e,s,o,r,i,n,y,m,x,w){const g=i/m,b=n/x,z=i/2,B=n/2,S=y/2,A=m+1,G=x+1;let k=0,F=0;const M=new h.Vector3;for(let h=0;h<G;h++){const i=h*b-B;for(let n=0;n<A;n++){const u=n*g-z;M[t]=u*o,M[e]=i*r,M[s]=S,p.push(M.x,M.y,M.z),M[t]=0,M[e]=0,M[s]=y>0?1:-1,c.push(M.x,M.y,M.z),l.push(n/m),l.push(1-h/x),k+=1}}for(let t=0;t<x;t++)for(let e=0;e<m;e++){const s=a+e+A*t,o=a+e+A*(t+1),r=a+(e+1)+A*(t+1),h=a+(e+1)+A*t;f.push(s,o,h),f.push(o,r,h),F+=6}u.addGroup(d,F,w),d+=F,a+=k}y("z","y","x",-1,-1,s,e,t,n,i,0),y("z","y","x",1,-1,s,e,-t,n,i,1),y("x","z","y",1,1,t,s,e,o,n,2),y("x","z","y",1,-1,t,s,-e,o,n,3),y("x","y","z",1,-1,t,e,s,o,i,4),y("x","y","z",-1,-1,t,e,-s,o,i,5),this.setIndex(f),this.setAttribute("position",new r.Float32BufferAttribute(p,3)),this.setAttribute("normal",new r.Float32BufferAttribute(c,3)),this.setAttribute("uv",new r.Float32BufferAttribute(l,2))}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}}}]);
//# sourceMappingURL=3827.bundle.js.map