import{t as _,r as w,_ as D,a as d,b as y}from"./registry-81MALNRg.js";import{_ as z}from"./v-element-0SIKoHz7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const o="Ex6T4ywm",l=_(o),C=l,I={isSelected:!1,tabIndex:0},T=z("style",null,"0",null,1,0).t(`
    li {
        align-items: center;
        color: var(--color-text-menu-text);
        cursor: default;
        display: flex;
        font-family: var(--font-stack);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-neg-xsmall);
        line-height: var(--font-line-height);
        height: var(--size-small);
        padding: 0px var(--size-xsmall) 0px var(--size-xxsmall);
        user-select: none;
        outline: none;
        transition-property: background-color;
        transition-duration: 30ms;
    }

    .label {
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        pointer-events: none;
    }

    .highlight,
    li:hover,
    li:focus {
        background-color: var(--figma-color-bg-brand);
    }

    .icon {
        width: var(--size-xsmall);
        height: var(--size-xsmall);
        margin-right: var(--size-xxsmall);
        opacity: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: center center;
    }
    .icon.selected {
        opacity: 1;
    }

    .blink,
    .blink:hover {
        background-color: transparent;
    }
`);w.r(o,()=>l);const k={onCreate(r){this.state={...I,...r}},toggleSelected(){this.setState("isSelected",!this.state.isSelected)}};l._=D(function(r,e,S,n,i,E){e.n(T,n),e.be("div",{class:"selectItem",tabindex:i.tabIndex},"1",n,null,0,{onclick:S.d("click","toggleSelected",!1)}),e.be("ul",null,"2",n,null,0),e.be("li",{class:d(["highlight",{selected:i.isSelected}]),tabindex:i.tabIndex},"3",n,null,0),e.e("div",{class:d(["icon",{selected:i.isSelected}])},"4",n,0,1),e.be("div",{class:"label"},"5",n,null,1),e.t(r.content,n),e.ee(),e.ee(),e.ee(),e.ee()},{t:o},k);l.Component=y(k,l._);const O={title:"SelectItem",component:C,argTypes:{isSelected:{control:"boolean",description:"Determines if the item is selected"},content:{control:"text",description:"Content of the list item"},tabindex:{control:"number",description:"Tab index for the list item"}}},c=r=>({input:r}),t=c.bind({});t.args={isSelected:!1,content:"List Item",tabindex:0};const a=c.bind({});a.args={...t.args,isSelected:!0};const s=c.bind({});s.args={...t.args,tabindex:1};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: args
})`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,f,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: args
})`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: args
})`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const V=["Default","Selected","CustomTabindex"];export{s as CustomTabindex,t as Default,a as Selected,V as __namedExportsOrder,O as default};
