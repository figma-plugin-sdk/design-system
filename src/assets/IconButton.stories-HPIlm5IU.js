import{t as S,r as B,_ as E,a as j,b as z}from"./registry-81MALNRg.js";import{_ as p}from"./Icon-zpGrmyn_.js";import{_ as u}from"./render-tag-_0PNNh6Y.js";import{_ as K}from"./v-element-0SIKoHz7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const d="/ZtX3rjJ",c=S(d),P=c,w={iconName:"",iconText:"",selected:!1,spin:!1,className:""},D=K("style",null,"3",null,1,0).t(`
    div:hover {
        background: var(--figma-color-bg-hover);
    }
    div:active,
    div:focus {
        border: 2px solid var(--figma-color-border-brand-strong);
        outline: none;
    }

    .selected {
        background-color: var(--figma-color-bg-selected-strong);
    }
    .selected:hover {
        background-color: var(--figma-color-bg-selected-strong);
    }
    .selected:active,
    .selected:focus {
        border: 2px solid var(--figma-color-border-selected-strong);
    }
`);B.r(d,()=>c);const I={onCreate(s){this.state={...w,...s}},handleClick(){this.state.selected=!this.state.selected},handleKeyPress(s){s.key==="Enter"&&this.handleClick()}};c._=E(function(s,r,i,m,e,J){r.be("div",{class:j([e.className,e.selected?"selected":""]),style:"display: flex; align-items: center; justify-content: center; cursor: pointer; width: var(--size-medium); height: var(--size-medium); border-radius: var(--border-radius-small); border: 2px solid transparent",tabindex:"0"},"0",m,null,0,{onclick:i.d("click","handleClick",!1),onkeypress:i.d("keypress","handleKeyPress",!1)}),e.selected?u(p,{iconName:e.iconName,iconText:e.iconText,spin:e.spin,color:"--figma-color-icon-onbrand"},r,i,"1"):u(p,{iconName:e.iconName,iconText:e.iconText,spin:e.spin,color:"--figma-color-icon"},r,i,"2"),r.ee(),r.n(D,m)},{t:d},I);c.Component=z(I,c._);const A={title:"IconButton",component:P,argTypes:{iconName:{control:"text",description:"Name of the icon"},iconText:{control:"text",description:"Text for the icon"},selected:{control:"boolean",description:"Indicates if the button is selected"},spin:{control:"boolean",description:"Indicates if the icon should spin"},className:{control:"text",description:"Custom class name for styling"}}},l=s=>({input:s}),o=l.bind({});o.args={iconName:"defaultIcon",iconText:"Default Icon",selected:!1,spin:!1,className:""};const n=l.bind({});n.args={...o.args,selected:!0};const a=l.bind({});a.args={...o.args,spin:!0};const t=l.bind({});t.args={...o.args,className:"custom-class"};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: args
})`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var _,h,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: args
})`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,v,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: args
})`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,C,T;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: args
})`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const F=["Default","Selected","SpinningIcon","CustomClass"];export{t as CustomClass,o as Default,n as Selected,a as SpinningIcon,F as __namedExportsOrder,A as default};
