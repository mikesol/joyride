"use strict";(self.webpackChunkjoyride=self.webpackChunkjoyride||[]).push([[891],{9891:(t,e,h)=>{h.r(e),h.d(e,{SphereBufferGeometry:()=>o,SphereGeometry:()=>o});var r=h(5699),s=h(4430),a=h(4532);class o extends r.BufferGeometry{constructor(t=1,e=32,h=16,r=0,o=2*Math.PI,i=0,n=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:h,phiStart:r,phiLength:o,thetaStart:i,thetaLength:n},e=Math.max(3,Math.floor(e)),h=Math.max(2,Math.floor(h));const u=Math.min(i+n,Math.PI);let p=0;const f=[],c=new a.Vector3,l=new a.Vector3,m=[],M=[],S=[],y=[];for(let s=0;s<=h;s++){const a=[],m=s/h;let g=0;0==s&&0==i?g=.5/e:s==h&&u==Math.PI&&(g=-.5/e);for(let h=0;h<=e;h++){const s=h/e;c.x=-t*Math.cos(r+s*o)*Math.sin(i+m*n),c.y=t*Math.cos(i+m*n),c.z=t*Math.sin(r+s*o)*Math.sin(i+m*n),M.push(c.x,c.y,c.z),l.copy(c).normalize(),S.push(l.x,l.y,l.z),y.push(s+g,1-m),a.push(p++)}f.push(a)}for(let t=0;t<h;t++)for(let r=0;r<e;r++){const e=f[t][r+1],s=f[t][r],a=f[t+1][r],o=f[t+1][r+1];(0!==t||i>0)&&m.push(e,s,o),(t!==h-1||u<Math.PI)&&m.push(s,a,o)}this.setIndex(m),this.setAttribute("position",new s.Float32BufferAttribute(M,3)),this.setAttribute("normal",new s.Float32BufferAttribute(S,3)),this.setAttribute("uv",new s.Float32BufferAttribute(y,2))}static fromJSON(t){return new o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}}}]);