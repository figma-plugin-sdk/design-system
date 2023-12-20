import{r as b,_ as h,a as w,b as S,t as B}from"./registry-81MALNRg.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const i="hQMwGtRF",e=B(i),C={variant:"primary",disabled:!1,destructive:!1};b.r(i,()=>e);const f={onCreate(r){this.state={...C,...r}},handleButtonClick(r,a){r.preventDefault(),a.blur()}};e._=h(function(r,a,k,n,D,T){a.be("button",{class:w([r.variant||"primary",r.destructive?"destructive":""]),disabled:r.disabled},"0",n,null,0,{onclick:k.d("click","handleButtonClick",!1)}),a.t(r.renderBody,n),a.t(" ",n),a.ee()},{t:i},f);e.Component=S(f,e._);const F={title:"Button",component:e,argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"select"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/vBQD0M0G6zZfxu5ctekUD8/Figma-Plugin-SDK-Design-System?type=design&node-id=148-8002&mode=design&t=ZTf0R45O5VWbPhrY-4"},status:{type:"beta",url:"http://www.url.com/status"}}},c={renderBody:"Click me",variant:"primary"},t={args:{...c,variant:"primary"}},s={args:{...c,variant:"secondary"}},o={args:{...c,variant:"tertiary"}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    variant: "primary"
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,y,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    variant: "secondary"
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,_,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    variant: "tertiary"
  }
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const G=["Primary","Secondary","Tertiary"];export{t as Primary,s as Secondary,o as Tertiary,G as __namedExportsOrder,F as default};
