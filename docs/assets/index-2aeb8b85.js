(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function b(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function tt(){return Object.create(null)}function A(t){t.forEach(ct)}function G(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function kt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n,r){if(t){const o=ut(t,e,n,r);return t[0](o)}}function ut(t,e,n,r){return t[1]&&r?Y(n.ctx.slice(),t[1](r(e))):n.ctx}function Gt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],l=Math.max(e.dirty.length,o.length);for(let s=0;s<l;s+=1)i[s]=e.dirty[s]|o[s];return i}return e.dirty|o}return e.dirty}function Ht(t,e,n,r,o,i){if(o){const l=ut(e,n,r,i);t.p(l,o)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qt(t,e){t.appendChild(e)}function M(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $t(t){return document.createElement(t)}function lt(t){return document.createTextNode(t)}function te(){return lt(" ")}function J(){return lt("")}function ee(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ne(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function se(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function Ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}function F(t,e){return new t(e)}let D;function R(t){D=t}function U(){if(!D)throw new Error("Function called outside component initialization");return D}function ce(t){U().$$.on_mount.push(t)}function Pt(t){U().$$.after_update.push(t)}function jt(t){U().$$.on_destroy.push(t)}function Lt(){const t=U();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=Ct(e,n,{cancelable:r});return o.slice().forEach(l=>{l.call(t,i)}),!i.defaultPrevented}return!0}}function et(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const P=[],nt=[];let j=[];const rt=[],ft=Promise.resolve();let W=!1;function at(){W||(W=!0,ft.then(dt))}function St(){return at(),ft}function X(t){j.push(t)}const V=new Set;let O=0;function dt(){if(O!==0)return;const t=D;do{try{for(;O<P.length;){const e=P[O];O++,R(e),At(e.$$)}}catch(e){throw P.length=0,O=0,e}for(R(null),P.length=0,O=0;nt.length;)nt.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];V.has(n)||(V.add(n),n())}j.length=0}while(P.length);for(;rt.length;)rt.pop()();W=!1,V.clear(),R(t)}function At(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Rt(t){const e=[],n=[];j.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),j=e}const z=new Set;let k;function K(){k={r:0,c:[],p:k}}function Q(){k.r||A(k.c),k=k.p}function v(t,e){t&&t.i&&(z.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),k.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function pt(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const l=t[i],s=e[i];if(s){for(const c in l)c in s||(r[c]=1);for(const c in s)o[c]||(n[c]=s[c],o[c]=1);t[i]=s}else for(const c in l)o[c]=1}for(const l in r)l in n||(n[l]=void 0);return n}function _t(t){return typeof t=="object"&&t!==null?t:{}}function q(t){t&&t.c()}function L(t,e,n,r){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),r||X(()=>{const l=t.$$.on_mount.map(ct).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...l):A(l),t.$$.on_mount=[]}),i.forEach(X)}function S(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(P.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(t,e,n,r,o,i,l,s=[-1]){const c=D;R(t);const u=t.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:tt(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(_,w,...m)=>{const y=m.length?m[0]:w;return u.ctx&&o(u.ctx[_],u.ctx[_]=y)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](y),p&&Dt(t,_)),w}):[],u.update(),p=!0,A(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const _=Ot(e.target);u.fragment&&u.fragment.l(_),_.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&v(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),dt()}R(c)}class mt{$destroy(){S(this,1),this.$destroy=b}$on(e,n){if(!G(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function T(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),typeof t.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||typeof t.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const C=[];function yt(t,e){return{subscribe:gt(t,e).subscribe}}function gt(t,e=b){let n;const r=new Set;function o(s){if(H(t,s)&&(t=s,n)){const c=!C.length;for(const u of r)u[1](),C.push(u,t);if(c){for(let u=0;u<C.length;u+=2)C[u][0](C[u+1]);C.length=0}}}function i(s){o(s(t))}function l(s,c=b){const u=[s,c];return r.add(u),r.size===1&&(n=e(o)||b),s(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:l}}function bt(t,e,n){const r=!Array.isArray(t),o=r?[t]:t,i=e.length<2;return yt(n,l=>{let s=!1;const c=[];let u=0,p=b;const _=()=>{if(u)return;p();const m=e(r?c[0]:c,l);i?l(m):p=G(m)?m:b},w=o.map((m,y)=>xt(m,N=>{c[y]=N,u&=~(1<<y),s&&_()},()=>{u|=1<<y}));return s=!0,_(),function(){A(w),p(),s=!1}})}function qt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,o,i,l=[],s="",c=t.split("/");for(c[0]||c.shift();o=c.shift();)n=o[0],n==="*"?(l.push("wild"),s+="/(.*)"):n===":"?(r=o.indexOf("?",1),i=o.indexOf(".",1),l.push(o.substring(1,~r?r:~i?i:o.length)),s+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(s+=(~r?"?":"")+"\\"+o.substring(i))):s+="/"+o;return{keys:l,pattern:new RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}}function It(t){let e,n,r;const o=[t[2]];var i=t[0];function l(s){let c={};for(let u=0;u<o.length;u+=1)c=Y(c,o[u]);return{props:c}}return i&&(e=F(i,l()),e.$on("routeEvent",t[7])),{c(){e&&q(e.$$.fragment),n=J()},m(s,c){e&&L(e,s,c),M(s,n,c),r=!0},p(s,c){const u=c&4?pt(o,[_t(s[2])]):{};if(c&1&&i!==(i=s[0])){if(e){K();const p=e;x(p.$$.fragment,1,0,()=>{S(p,1)}),Q()}i?(e=F(i,l()),e.$on("routeEvent",s[7]),q(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&x(e.$$.fragment,s),r=!1},d(s){s&&I(n),e&&S(e,s)}}}function Nt(t){let e,n,r;const o=[{params:t[1]},t[2]];var i=t[0];function l(s){let c={};for(let u=0;u<o.length;u+=1)c=Y(c,o[u]);return{props:c}}return i&&(e=F(i,l()),e.$on("routeEvent",t[6])),{c(){e&&q(e.$$.fragment),n=J()},m(s,c){e&&L(e,s,c),M(s,n,c),r=!0},p(s,c){const u=c&6?pt(o,[c&2&&{params:s[1]},c&4&&_t(s[2])]):{};if(c&1&&i!==(i=s[0])){if(e){K();const p=e;x(p.$$.fragment,1,0,()=>{S(p,1)}),Q()}i?(e=F(i,l()),e.$on("routeEvent",s[6]),q(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&x(e.$$.fragment,s),r=!1},d(s){s&&I(n),e&&S(e,s)}}}function Tt(t){let e,n,r,o;const i=[Nt,It],l=[];function s(c,u){return c[1]?0:1}return e=s(t),n=l[e]=i[e](t),{c(){n.c(),r=J()},m(c,u){l[e].m(c,u),M(c,r,u),o=!0},p(c,[u]){let p=e;e=s(c),e===p?l[e].p(c,u):(K(),x(l[p],1,1,()=>{l[p]=null}),Q(),n=l[e],n?n.p(c,u):(n=l[e]=i[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){o||(v(n),o=!0)},o(c){x(n),o=!1},d(c){l[e].d(c),c&&I(r)}}}function ot(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const Z=yt(null,function(e){e(ot());const n=()=>{e(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});bt(Z,t=>t.location);bt(Z,t=>t.querystring);const st=gt(void 0);function Bt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function zt(t,e,n){let{routes:r={}}=e,{prefix:o=""}=e,{restoreScrollState:i=!1}=e;class l{constructor(f,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:g,keys:h}=qt(f);this.path=f,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=g,this._keys=h}match(f){if(o){if(typeof o=="string")if(f.startsWith(o))f=f.substr(o.length)||"/";else return null;else if(o instanceof RegExp){const E=f.match(o);if(E&&E[0])f=f.substr(E[0].length)||"/";else return null}}const d=this._pattern.exec(f);if(d===null)return null;if(this._keys===!1)return d;const g={};let h=0;for(;h<this._keys.length;){try{g[this._keys[h]]=decodeURIComponent(d[h+1]||"")||null}catch{g[this._keys[h]]=null}h++}return g}async checkConditions(f){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](f))return!1;return!0}}const s=[];r instanceof Map?r.forEach((a,f)=>{s.push(new l(f,a))}):Object.keys(r).forEach(a=>{s.push(new l(a,r[a]))});let c=null,u=null,p={};const _=Lt();async function w(a,f){await St(),_(a,f)}let m=null,y=null;i&&(y=a=>{a.state&&(a.state.__svelte_spa_router_scrollY||a.state.__svelte_spa_router_scrollX)?m=a.state:m=null},window.addEventListener("popstate",y),Pt(()=>{Bt(m)}));let N=null,$=null;const wt=Z.subscribe(async a=>{N=a;let f=0;for(;f<s.length;){const d=s[f].match(a.location);if(!d){f++;continue}const g={route:s[f].path,location:a.location,querystring:a.querystring,userData:s[f].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await s[f].checkConditions(g)){n(0,c=null),$=null,w("conditionsFailed",g);return}w("routeLoading",Object.assign({},g));const h=s[f].component;if($!=h){h.loading?(n(0,c=h.loading),$=h,n(1,u=h.loadingParams),n(2,p={}),w("routeLoaded",Object.assign({},g,{component:c,name:c.name,params:u}))):(n(0,c=null),$=null);const E=await h();if(a!=N)return;n(0,c=E&&E.default||E),$=h}d&&typeof d=="object"&&Object.keys(d).length?n(1,u=d):n(1,u=null),n(2,p=s[f].props),w("routeLoaded",Object.assign({},g,{component:c,name:c.name,params:u})).then(()=>{st.set(u)});return}n(0,c=null),$=null,st.set(void 0)});jt(()=>{wt(),y&&window.removeEventListener("popstate",y)});function Et(a){et.call(this,t,a)}function vt(a){et.call(this,t,a)}return t.$$set=a=>{"routes"in a&&n(3,r=a.routes),"prefix"in a&&n(4,o=a.prefix),"restoreScrollState"in a&&n(5,i=a.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[c,u,p,r,o,i,Et,vt]}class Ft extends mt{constructor(e){super(),ht(this,e,zt,Tt,H,{routes:3,prefix:4,restoreScrollState:5})}}const Mt="modulepreload",Ut=function(t){return"/svelte-reader/"+t},it={},B=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ut(i),i in it)return;it[i]=!0;const l=i.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(!!r)for(let p=o.length-1;p>=0;p--){const _=o[p];if(_.href===i&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Mt,l||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),l)return new Promise((p,_)=>{u.addEventListener("load",p),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Vt={"/":T({asyncComponent:()=>B(()=>import("./index-e6f0e6fe.js"),["assets/index-e6f0e6fe.js","assets/index-a557675b.css"])}),"/basic-usage":T({asyncComponent:()=>B(()=>import("./BasicUsage-b7d5381a.js"),["assets/BasicUsage-b7d5381a.js","assets/SvelteReader-55cb765b.js","assets/SvelteReader-522343f3.css","assets/BasicUsage-1dc1987a.css"])}),"/save-progress":T({asyncComponent:()=>B(()=>import("./SaveProgress-cfa6f5ee.js"),["assets/SaveProgress-cfa6f5ee.js","assets/SvelteReader-55cb765b.js","assets/SvelteReader-522343f3.css"])}),"/display-page":T({asyncComponent:()=>B(()=>import("./DisplayPage-b12d8341.js"),["assets/DisplayPage-b12d8341.js","assets/SvelteReader-55cb765b.js","assets/SvelteReader-522343f3.css","assets/DisplayPage-fc1e9663.css"])})};function Wt(t){let e,n,r;return n=new Ft({props:{routes:Vt}}),{c(){e=$t("main"),q(n.$$.fragment)},m(o,i){M(o,e,i),L(n,e,null),r=!0},p:b,i(o){r||(v(n.$$.fragment,o),r=!0)},o(o){x(n.$$.fragment,o),r=!1},d(o){o&&I(e),S(n)}}}class Xt extends mt{constructor(e){super(),ht(this,e,null,Wt,H,{})}}new Xt({target:document.getElementById("app")});export{Y as A,ie as B,ee as C,pt as D,_t as E,A as F,Kt as G,J as H,Zt as I,ne as J,mt as S,re as a,M as b,q as c,I as d,$t as e,se as f,Qt as g,x as h,ht as i,S as j,te as k,lt as l,L as m,b as n,oe as o,K as p,Q as q,Lt as r,H as s,v as t,ce as u,Yt as v,Ht as w,Jt as x,Gt as y,nt as z};