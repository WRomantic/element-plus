import{j as c,e as a,S as u,C as d,k as e,l as t,I as f,U as v,G as p,c as b,q as h,E as m,u as k}from"./framework.133f9ea6.js";const S={class:"infinite-list",style:{overflow:"auto"}},w=c({setup(g){const s=a(0),o=()=>{s.value+=2};return(i,n)=>{const r=u("infinite-scroll");return d((e(),t("ul",S,[(e(!0),t(f,null,v(s.value,l=>(e(),t("li",{key:l,class:"infinite-list-item"},p(l),1))),128))],512)),[[r,o]])}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const x={class:"infinite-list-wrapper",style:{overflow:"auto"}},j={class:"list","infinite-scroll-disabled":"disabled"},B={key:0},C={key:1},D=c({setup(g){const s=a(10),o=a(!1),i=b(()=>s.value>=20),n=()=>{o.value=!0,setTimeout(()=>{s.value+=2,o.value=!1},2e3)};return(r,l)=>{const y=u("infinite-scroll");return e(),t("div",x,[d(h("ul",j,[(e(!0),t(f,null,v(s.value,_=>(e(),t("li",{key:_,class:"list-item"},p(_),1))),128))],512),[[y,n]]),o.value?(e(),t("p",B,"Loading...")):m("",!0),k(i)?(e(),t("p",C,"No more")):m("",!0)])}}});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});export{M as _,N as a};