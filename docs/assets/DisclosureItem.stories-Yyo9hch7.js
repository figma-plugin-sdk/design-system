import{t as z,r as S,_ as q,a as E,b as T}from"./registry-81MALNRg.js";import{_ as p}from"./Icon-zpGrmyn_.js";import{_ as g}from"./render-tag-_0PNNh6Y.js";import{_ as F}from"./v-element-0SIKoHz7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const D="data:image/svg+xml,%3csvg%20fill='none'%20height='32'%20viewBox='0%200%2032%2032'%20width='32'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m16%2018%203-4h-6z'%20fill='%23000'/%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20fill='none'%20height='32'%20viewBox='0%200%2032%2032'%20width='32'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m19%2016-4-3v6z'%20fill='%23000'/%3e%3c/svg%3e",m="u9+dFh9Z",l=z(m),N=l,$={uniqueId:"disclosureItem--"+(Math.random()*1e7).toFixed(0).toString(),title:"",expanded:!1,section:!1,open:!1},M=F("style",null,"7",null,1,0).t(`
    li {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        border-bottom: 1px solid var(--figma-color-border);
    }
    li:last-child {
        border-bottom: 1px solid transparent;
    }

    .header {
        display: flex;
        align-items: center;
        height: var(--size-medium);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-pos-xsmall);
        line-height: var(--line-height);
        color: var(--figma-color-text);
    }
    .header:hover .icon {
        opacity: 0.9;
    }

    .title {
        margin-left: -4px;
        user-select: none;
    }

    .icon {
        margin-left: -4px;
        opacity: 0.3;
    }
    .expanded .icon {
        opacity: 0.8;
    }

    .section {
        font-weight: var(--font-weight-bold);
    }

    .content {
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--font-letter-spacing-pos-xsmall);
        line-height: var(--line-height);
        color: var(--figma-color-text);
        padding: var(--size-xxsmall) var(--size-xxsmall) var(--size-xxsmall)
            var(--size-small);
        display: none;
        user-select: none;
        pointer-events: none;
    }

    .expanded .content {
        display: block;
    }
`);S.r(m,()=>l);const R={onCreate(n){this.state={...$,...n}},handleClick(n){this.state.expanded=!this.state.expanded}};l._=q(function(n,e,d,t,r,U){e.be("li",{id:r.uniqueId,class:E(["disclosureItem",{expanded:r.expanded,section:r.section}])},"0",t,null,1),e.be("div",{class:"header",tabindex:"0"},"1",t,null,0,{onclick:d.d("click","handleClick",!1)}),e.be("div",{class:"icon"},"2",t,null,1),r.expanded?g(p,{iconName:D,color:"black"},e,d,"3"):g(p,{iconName:B,color:"black"},e,d,"4"),e.ee(),e.be("div",{class:"title"},"5",t,null,1),e.t(r.title,t),e.ee(),e.ee(),e.be("div",{class:"content"},"6",t,null,1),e.t(n.renderBody,t),e.ee(),e.ee(),e.n(M,t)},{t:m},R);l.Component=T(R,l._);const J={title:"DisclosureItem",component:N,argTypes:{uniqueId:{control:"text",description:"Unique identifier for the item"},title:{control:"text",description:"Title of the disclosure item"},expanded:{control:"boolean",description:"Indicates if the item is expanded"},section:{control:"boolean",description:"Indicates if the item is a section"},open:{control:"boolean",description:"Indicates if the item is open"}}},O=n=>`<div>${n}</div>`,c=n=>({input:{...n,renderBody:O,IconCaretDown:D,IconCaretRight:B}}),o=c.bind({});o.args={uniqueId:"disclosureItem--example",title:"Default Disclosure Item",expanded:!1,section:!1,open:!1,renderBody:"Content of the item"};const a=c.bind({});a.args={...o.args,expanded:!0};const i=c.bind({});i.args={...o.args,section:!0};const s=c.bind({});s.args={...o.args,title:"Custom Content"};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody,
    IconCaretDown: IconCaretDown,
    IconCaretRight: IconCaretRight
  }
})`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var u,v,I;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody,
    IconCaretDown: IconCaretDown,
    IconCaretRight: IconCaretRight
  }
})`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var C,w,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody,
    IconCaretDown: IconCaretDown,
    IconCaretRight: IconCaretRight
  }
})`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,_,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: RenderBody,
    IconCaretDown: IconCaretDown,
    IconCaretRight: IconCaretRight
  }
})`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const K=["Default","Expanded","SectionItem","CustomContent"];export{s as CustomContent,o as Default,a as Expanded,i as SectionItem,K as __namedExportsOrder,J as default};
