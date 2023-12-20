import{t as u,r as z,_ as w,a as f,b}from"./registry-81MALNRg.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const o="x8Hmgg8C",n=u(o),S=n;z.r(o,()=>n);const $={};n._=w(function(e,a,x,p,T,k){a.be("div",{class:f(["type",e.size?`type--${e.size}`:"",e.weight?`type--${e.weight}`:"",e.inverse?"type--inverse":""])},"0",p,null,1),a.t(e.content,p),a.ee()},{t:o,i:!0},$);n.Component=b($,n._);const I={title:"Type",component:S,argTypes:{size:{control:{type:"select",options:["small","large","xlarge"]},description:"Sets the size of the component"},weight:{control:{type:"select",options:["medium","bold"]},description:"Sets the font weight of the component"},inverse:{control:"boolean",description:"Toggles the inverse style of the component"},content:{control:"text",description:"Content of the component"}}},i=e=>({template:`
    <div class=[
      "type",
      args.size ? \`type--\${args.size}\` : "",
      args.weight ? \`type--\${args.weight}\` : "",
      args.inverse ? "type--inverse" : "",
    ]>
      \${args.content}
    </div>
  `,input:e}),t=i.bind({});t.args={content:"Sample text"};const s=i.bind({});s.args={size:"large",weight:"bold",content:"Large Bold text"};const r=i.bind({});r.args={size:"small",inverse:!0,content:"Small Inverse text"};var g,c,l;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  template: \`
    <div class=[
      "type",
      args.size ? \\\`type--\\\${args.size}\\\` : "",
      args.weight ? \\\`type--\\\${args.weight}\\\` : "",
      args.inverse ? "type--inverse" : "",
    ]>
      \\\${args.content}
    </div>
  \`,
  input: args
})`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  template: \`
    <div class=[
      "type",
      args.size ? \\\`type--\\\${args.size}\\\` : "",
      args.weight ? \\\`type--\\\${args.weight}\\\` : "",
      args.inverse ? "type--inverse" : "",
    ]>
      \\\${args.content}
    </div>
  \`,
  input: args
})`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var v,h,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  template: \`
    <div class=[
      "type",
      args.size ? \\\`type--\\\${args.size}\\\` : "",
      args.weight ? \\\`type--\\\${args.weight}\\\` : "",
      args.inverse ? "type--inverse" : "",
    ]>
      \\\${args.content}
    </div>
  \`,
  input: args
})`,...(_=(h=r.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const L=["Default","LargeBold","SmallInverse"];export{t as Default,s as LargeBold,r as SmallInverse,L as __namedExportsOrder,I as default};
