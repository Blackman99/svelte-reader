import{S as $,i as v,s as b,e as h,c as y,j as C,k as S,f as R,a as D,b as m,m as P,l as j,o as k,t as q,g as w,d as _,h as L}from"./index-4d533810.js";import{S as x}from"./SvelteReader-7d7d6431.js";function z(r){let n,t,c,s,u,a;return t=new x({props:{url:"/svelte-reader/files/啼笑因缘.epub",getRendition:r[2],tocChanged:r[4]}}),t.$on("update:location",r[3]),{c(){n=h("div"),y(t.$$.fragment),c=C(),s=h("div"),u=S(r[1]),R(n,"height","100vh"),D(s,"class","page svelte-ut49mg")},m(e,l){m(e,n,l),P(t,n,null),m(e,c,l),m(e,s,l),j(s,u),a=!0},p(e,[l]){const d={};l&1&&(d.tocChanged=e[4]),t.$set(d),(!a||l&2)&&k(u,e[1])},i(e){a||(q(t.$$.fragment,e),a=!0)},o(e){w(t.$$.fragment,e),a=!1},d(e){e&&(_(n),_(c),_(s)),L(t)}}}function A(r,n,t){let c=null,s=[],u="";const a=o=>c=o,e=(o,g)=>{let p="n/a";return o.some(i=>{if(i.subitems.length>0){const f=e(i.subitems,g);if(f!=="n/a")return p=f,!0}else if(i.href.includes(g))return p=i.label,!0}),p};return[s,u,a,o=>{if(o.detail){const{displayed:p,href:i}=c.location.start;if(i!=="titlepage.xhtml"){const f=e(s,i);t(1,u=`${p.page}/${p.total} ${f}`)}}},o=>t(0,s=o)]}class F extends ${constructor(n){super(),v(this,n,A,z,b,{})}}export{F as default};