import{g as w,_ as S,a as q,d as W,i as O,b as L,c as P,v as k,L as N,E as H,e as _,C as E,r as C,f as D,F as V}from"./index.esm2017.ebad5f40.js";import"./index.esm2017.f5cc3b43.js";/**
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
 */const v="analytics",J="firebase_id",Q="origin",X=60*1e3,Z="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",z="https://www.googletagmanager.com/gtag/js";/**
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
 */const l=new N("@firebase/analytics");/**
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
 */function j(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ee(e,t){const n=document.createElement("script");n.src=`${z}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function te(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ne(e,t,n,a,i,s){const r=a[i];try{if(r)await t[r];else{const c=(await j(n)).find(d=>d.measurementId===i);c&&await t[c.appId]}}catch(o){l.error(o)}e("config",i,s)}async function ie(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await j(n);for(const c of r){const d=o.find(g=>g.measurementId===c),f=d&&t[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){l.error(s)}}function ae(e,t,n,a){async function i(s,r,o){try{s==="event"?await ie(e,t,n,r,o):s==="config"?await ne(e,t,n,a,r,o):s==="consent"?e("consent","update",o):e("set",r)}catch(c){l.error(c)}}return i}function se(e,t,n,a,i){let s=function(...r){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ae(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function re(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(z))return t;return null}/**
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
 */const oe={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},u=new H("analytics","Analytics",oe);/**
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
 */const ce=30,le=1e3;class de{constructor(t={},n=le){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const B=new de;function fe(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ue(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:fe(a)},s=Z.replace("{app-id}",n),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw u.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function pe(e,t=B,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw u.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw u.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ge;return setTimeout(async()=>{o.abort()},n!==void 0?n:X),G({appId:a,apiKey:i,measurementId:s},r,o,t)}async function G(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=B){var s,r;const{appId:o,measurementId:c}=e;try{await he(a,t)}catch(d){if(c)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(s=d)===null||s===void 0?void 0:s.message}]`),{appId:o,measurementId:c};throw d}try{const d=await ue(e);return i.deleteThrottleMetadata(o),d}catch(d){const f=d;if(!me(f)){if(i.deleteThrottleMetadata(o),c)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:c};throw d}const g=Number((r=f==null?void 0:f.customData)===null||r===void 0?void 0:r.httpStatus)===503?D(n,i.intervalMillis,ce):D(n,i.intervalMillis),y={throttleEndTimeMillis:Date.now()+g,backoffCount:n+1};return i.setThrottleMetadata(o,y),l.debug(`Calling attemptFetch again in ${g} millis`),G(e,y,a,i)}}function he(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(u.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function me(e){if(!(e instanceof V)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ge{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */let b;async function ye(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,r=Object.assign(Object.assign({},a),{send_to:s});e("event",n,r)}}async function we(e,t,n,a){if(a&&a.global)return e("set",{screen_name:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,screen_name:n})}}async function Ie(e,t,n,a){if(a&&a.global)return e("set",{user_id:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,user_id:n})}}async function ve(e,t,n,a){if(a&&a.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}async function be(e,t){const n=await e;window[`ga-disable-${n}`]=!t}let A;function U(e){A=e}function K(e){b=e}/**
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
 */async function Ae(){var e;if(P())try{await k()}catch(t){return l.warn(u.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return l.warn(u.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Te(e,t,n,a,i,s,r){var o;const c=pe(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>l.error(m)),t.push(c);const d=Ae().then(m=>{if(m)return a.getId()}),[f,g]=await Promise.all([c,d]);re()||ee(s,f.measurementId),A&&(i("consent","default",A),U(void 0)),i("js",new Date);const y=(o=r==null?void 0:r.config)!==null&&o!==void 0?o:{};return y[Q]="firebase",y.update=!0,g!=null&&(y[J]=g),i("config",f.measurementId,y),b&&(i("set",b),K(void 0)),f.measurementId}/**
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
 */class _e{constructor(t){this.app=t}_delete(){return delete p[this.app.options.appId],Promise.resolve()}}let p={},F=[];const M={};let I="dataLayer",Y="gtag",$,h,T=!1;function xe(e){if(T)throw u.create("already-initialized");e.dataLayerName&&(I=e.dataLayerName),e.gtagName&&(Y=e.gtagName)}function Ee(){const e=[];if(O()&&e.push("This is a browser extension environment."),L()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=u.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function Ce(e,t,n){Ee();const a=e.options.appId;if(!a)throw u.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw u.create("no-api-key");if(p[a]!=null)throw u.create("already-exists",{id:a});if(!T){te(I);const{wrappedGtag:s,gtagCore:r}=se(p,F,M,I,Y);h=s,$=r,T=!0}return p[a]=Te(e,F,M,t,$,I,n),new _e(e)}function Se(e=q()){e=w(e);const t=S(e,v);return t.isInitialized()?t.getImmediate():De(e)}function De(e,t={}){const n=S(e,v);if(n.isInitialized()){const i=n.getImmediate();if(W(t,n.getOptions()))return i;throw u.create("already-initialized")}return n.initialize({options:t})}async function Oe(){if(O()||!L()||!P())return!1;try{return await k()}catch{return!1}}function Le(e,t,n){e=w(e),we(h,p[e.app.options.appId],t,n).catch(a=>l.error(a))}function Pe(e,t,n){e=w(e),Ie(h,p[e.app.options.appId],t,n).catch(a=>l.error(a))}function ke(e,t,n){e=w(e),ve(h,p[e.app.options.appId],t,n).catch(a=>l.error(a))}function ze(e,t){e=w(e),be(p[e.app.options.appId],t).catch(n=>l.error(n))}function je(e){h?h("set",e):K(e)}function Fe(e,t,n,a){e=w(e),ye(h,p[e.app.options.appId],t,n,a).catch(i=>l.error(i))}function Be(e){h?h("consent","update",e):U(e)}const R="@firebase/analytics",x="0.8.0";function Me(){_(new E(v,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ce(a,i,n)},"PUBLIC")),_(new E("analytics-internal",e,"PRIVATE")),C(R,x),C(R,x,"esm2017");function e(t){try{const n=t.getProvider(v).getImmediate();return{logEvent:(a,i,s)=>Fe(n,a,i,s)}}catch(n){throw u.create("interop-component-reg-failed",{reason:n})}}}Me();export{Se as getAnalytics,De as initializeAnalytics,Oe as isSupported,Fe as logEvent,ze as setAnalyticsCollectionEnabled,Be as setConsent,Le as setCurrentScreen,je as setDefaultEventParameters,Pe as setUserId,ke as setUserProperties,xe as settings};
