import{a as y}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{t as L,r as v,_ as T,b as E}from"./registry-81MALNRg.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const l="1MiiQIfR",c=L(l),I=c,M={checked:!1,disabled:!1,label:""};v.r(l,()=>c);const S={onCreate(o){this.state={...M,...o,id:o.id||`checkbox-${Math.random().toString(36).substr(2,9)}`}}};c._=T(function(o,a,$,i,r,w){a.be("div",{class:"checkbox"},"0",i,null,1),a.e("input",{type:"checkbox",id:r.id,class:"checkbox__box",checked:r.checked,disabled:r.disabled},"1",i,0,0),a.be("label",{for:r.id,class:"checkbox__label"},"2",i,null,0),a.t(r.label,i),a.ee(),a.ee()},{t:l},S);c.Component=E(S,c._);const z={title:"Checkbox",component:I,argTypes:{checked:{control:"boolean",description:"Determines if the checkbox is checked"},disabled:{control:"boolean",description:"Determines if the checkbox is disabled"},label:{control:"text",description:"Label for the checkbox"},onInput:{action:"inputChanged",description:"Event emitted when the checkbox value changes"}}},d=o=>({input:o,on:{input:y("inputChanged")}}),e=d.bind({});e.args={checked:!1,disabled:!1,label:"Default Checkbox"};const n=d.bind({});n.args={...e.args,checked:!0};const s=d.bind({});s.args={...e.args,disabled:!0};const t=d.bind({});t.args={...e.args,label:"Custom Label"};var p,b,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  input: args,
  on: {
    input: action('inputChanged')
  }
})`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: args,
  on: {
    input: action('inputChanged')
  }
})`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,f,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: args,
  on: {
    input: action('inputChanged')
  }
})`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var _,x,D;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: args,
  on: {
    input: action('inputChanged')
  }
})`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const A=["Default","Checked","Disabled","CustomLabel"];export{n as Checked,t as CustomLabel,e as Default,s as Disabled,A as __namedExportsOrder,z as default};
