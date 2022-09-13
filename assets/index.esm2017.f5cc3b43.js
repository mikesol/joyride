import{r as R,E as z,e as k,C as y,_ as N,F as W,o as X}from"./index.esm2017.ebad5f40.js";const P="@firebase/installations",T="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=1e4,_=`w:${T}`,q="FIS_v2",Y="https://firebaseinstallations.googleapis.com/v1",Q=60*60*1e3,Z="installations",tt="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},d=new z(Z,tt,et);function v(t){return t instanceof W&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j({projectId:t}){return`${Y}/projects/${t}/installations`}function F(t){return{token:t.token,requestStatus:2,expiresIn:rt(t.expiresIn),creationTime:Date.now()}}async function D(t,e){const r=(await e.json()).error;return d.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function V({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nt(t,{refreshToken:e}){const n=V(t);return n.append("Authorization",at(e)),n}async function $(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rt(t){return Number(t.replace("s","000"))}function at(t){return`${q} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=j(t),o=V(t),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const s={fid:n,authVersion:q,appId:t.appId,sdkVersion:_},i={method:"POST",headers:o,body:JSON.stringify(s)},u=await $(()=>fetch(r,i));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:F(c.authToken)}}else throw await D("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=/^[cdef][\w-]{21}$/,m="";function ct(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ut(t);return it.test(n)?n:m}catch{return m}}function ut(t){return st(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Map;function M(t,e){const n=p(t);B(n,e),ft(n,e)}function B(t,e){const n=L.get(t);if(!!n)for(const r of n)r(e)}function ft(t,e){const n=dt();n&&n.postMessage({key:t,fid:e}),lt()}let f=null;function dt(){return!f&&"BroadcastChannel"in self&&(f=new BroadcastChannel("[Firebase] FID Change"),f.onmessage=t=>{B(t.data.key,t.data.fid)}),f}function lt(){L.size===0&&f&&(f.close(),f=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="firebase-installations-database",pt=1,l="firebase-installations-store";let w=null;function b(){return w||(w=X(gt,pt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(l)}}})),w}async function g(t,e){const n=p(t),o=(await b()).transaction(l,"readwrite"),a=o.objectStore(l),s=await a.get(n);return await a.put(e,n),await o.done,(!s||s.fid!==e.fid)&&M(t,e.fid),e}async function H(t){const e=p(t),r=(await b()).transaction(l,"readwrite");await r.objectStore(l).delete(e),await r.done}async function h(t,e){const n=p(t),o=(await b()).transaction(l,"readwrite"),a=o.objectStore(l),s=await a.get(n),i=e(s);return i===void 0?await a.delete(n):await a.put(i,n),await o.done,i&&(!s||s.fid!==i.fid)&&M(t,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A(t){let e;const n=await h(t.appConfig,r=>{const o=ht(r),a=wt(t,o);return e=a.registrationPromise,a.installationEntry});return n.fid===m?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ht(t){const e=t||{fid:ct(),registrationStatus:0};return U(e)}function wt(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(d.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=It(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mt(t)}:{installationEntry:e}}async function It(t,e){try{const n=await ot(t,e);return g(t.appConfig,n)}catch(n){throw v(n)&&n.customData.serverCode===409?await H(t.appConfig):await g(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mt(t){let e=await C(t.appConfig);for(;e.registrationStatus===1;)await x(100),e=await C(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await A(t);return r||n}return e}function C(t){return h(t,e=>{if(!e)throw d.create("installation-not-found");return U(e)})}function U(t){return Tt(t)?{fid:t.fid,registrationStatus:0}:t}function Tt(t){return t.registrationStatus===1&&t.registrationTime+O<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt({appConfig:t,heartbeatServiceProvider:e},n){const r=At(t,n),o=nt(t,n),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const s={installation:{sdkVersion:_,appId:t.appId}},i={method:"POST",headers:o,body:JSON.stringify(s)},u=await $(()=>fetch(r,i));if(u.ok){const c=await u.json();return F(c)}else throw await D("Generate Auth Token",u)}function At(t,{fid:e}){return`${j(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S(t,e=!1){let n;const r=await h(t.appConfig,a=>{if(!K(a))throw d.create("not-registered");const s=a.authToken;if(!e&&yt(s))return a;if(s.requestStatus===1)return n=St(t,e),a;{if(!navigator.onLine)throw d.create("app-offline");const i=Et(a);return n=kt(t,i),i}});return n?await n:r.authToken}async function St(t,e){let n=await E(t.appConfig);for(;n.authToken.requestStatus===1;)await x(100),n=await E(t.appConfig);const r=n.authToken;return r.requestStatus===0?S(t,e):r}function E(t){return h(t,e=>{if(!K(e))throw d.create("not-registered");const n=e.authToken;return Rt(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kt(t,e){try{const n=await bt(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await g(t.appConfig,r),n}catch(n){if(v(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await H(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await g(t.appConfig,r)}throw n}}function K(t){return t!==void 0&&t.registrationStatus===2}function yt(t){return t.requestStatus===2&&!Ct(t)}function Ct(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Q}function Et(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Rt(t){return t.requestStatus===1&&t.requestTime+O<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t){const e=t,{installationEntry:n,registrationPromise:r}=await A(e);return r?r.catch(console.error):S(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e=!1){const n=t;return await Ot(n),(await S(n,e)).token}async function Ot(t){const{registrationPromise:e}=await A(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){if(!t||!t.options)throw I("App Configuration");if(!t.name)throw I("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw I(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function I(t){return d.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="installations",qt="installations-internal",vt=t=>{const e=t.getProvider("app").getImmediate(),n=_t(e),r=N(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jt=t=>{const e=t.getProvider("app").getImmediate(),n=N(e,J).getImmediate();return{getId:()=>Nt(n),getToken:o=>Pt(n,o)}};function Ft(){k(new y(J,vt,"PUBLIC")),k(new y(qt,jt,"PRIVATE"))}Ft();R(P,T);R(P,T,"esm2017");
