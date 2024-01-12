import{t as v,r as f,_ as h,b as u}from"./registry-81MALNRg.js";import{_ as g}from"./v-element-0SIKoHz7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const s="axx1HEOB",t=v(s),y=t,x={label:!1},k=g("li",{class:"divider"},"1",null,0,1),B=g("style",null,"2",null,1,0).t(`
    .label {
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-small);
        line-height: var(--line-height);
        display: flex;
        align-items: center;
        height: var(--size-small);
        margin-top: var(--size-xxsmall);
        padding: 0 var(--size-xxsmall) 0 var(--size-medium);
        color: var(--color-text-menu-secondary);
    }
    .label:first-child {
        border-top: none;
        margin-top: 0;
    }

    .divider {
        background-color: var(--color-border-menu);
        display: block;
        height: 1px;
        margin: 8px 0 7px 0;
    }
`);f.r(s,()=>t);const b={onCreate(e){this.state={...x,...e}}};t._=h(function(e,r,z,o,S,L){e.label?(r.be("li",{class:"label"},"0",o,null,1),r.t(e.renderBody,o),r.ee()):r.n(k,o),r.n(B,o)},{t:s},b);t.Component=u(b,t._);const R={title:"SelectDivider",component:y,argTypes:{label:{control:"text",description:"Label for the divider. If present, it renders as a label, otherwise as a divider."}}},D=e=>`<span>${e}</span>`,_=e=>({input:{...e,renderBody:D}}),n=_.bind({});n.args={label:"Section Label"};const a=_.bind({});a.args={};var l,i,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody
  }
})`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody
  }
})`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["WithLabel","DividerOnly"];export{a as DividerOnly,n as WithLabel,T as __namedExportsOrder,R as default};
