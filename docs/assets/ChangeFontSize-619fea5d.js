import{S as y,i as R,s as x,e as m,c as F,j as $,k as g,f as M,a as j,b as v,m as q,l as i,p as C,o as w,t as A,g as B,d as S,h as D,r as E}from"./index-4d533810.js";import{S as G}from"./SvelteReader-7d7d6431.js";function H(r){let n,s,o,e,a,_,c,f,l,z,b,p,u,h,k;return s=new G({props:{url:"/svelte-reader/files/啼笑因缘.epub",getRendition:r[2]}}),{c(){n=m("div"),F(s.$$.fragment),o=$(),e=m("div"),a=m("button"),a.textContent="-",_=$(),c=m("span"),f=g("Current size: "),l=g(r[0]),z=g("%"),b=$(),p=m("button"),p.textContent="+",M(n,"height","100vh"),j(e,"class","size svelte-1b00e0m")},m(t,d){v(t,n,d),q(s,n,null),v(t,o,d),v(t,e,d),i(e,a),i(e,_),i(e,c),i(c,f),i(c,l),i(c,z),i(e,b),i(e,p),u=!0,h||(k=[C(a,"click",r[3]),C(p,"click",r[4])],h=!0)},p(t,[d]){(!u||d&1)&&w(l,t[0])},i(t){u||(A(s.$$.fragment,t),u=!0)},o(t){B(s.$$.fragment,t),u=!1},d(t){t&&(S(n),S(o),S(e)),D(s),h=!1,E(k)}}}function I(r,n,s){let o=null,e=100;const a=l=>{s(0,e=l),o.themes.fontSize(`${l}%`)};return[e,a,l=>{o=l,o.themes.fontSize(`${e}%`)},()=>a(Math.max(80,e-10)),()=>a(Math.min(130,e+10))]}class L extends y{constructor(n){super(),R(this,n,I,H,x,{})}}export{L as default};