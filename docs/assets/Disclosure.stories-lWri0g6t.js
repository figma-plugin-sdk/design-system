import{a as f}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{t as x,r as b,_ as D,a as d,b as y}from"./registry-81MALNRg.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const l="qE3VBvHH",r=x(l),k=r,h={items:[],expanded:!1,selected:null};b.r(l,()=>r);const u={onCreate(t){this.state={...h,items:t.items||[]}},toggleDisclosure(t){this.state.items=this.state.items.map(e=>e.id===t.id?{...e,expanded:!e.expanded}:e)}};r._=D(function(t,e,a,s,g,C){e.be("ul",{class:"disclosure"},"0",s,null,1);{let _=0;for(const i of g.items||[]){const o=`[${_++}]`;e.be("li",{class:d(["disclosure__item",{"disclosure--expanded":i.expanded}])},"1"+o,s,null,1),e.be("div",{class:d(["disclosure__label",{"disclosure--section":i.isSection}])},"2"+o,s,null,1,{onclick:a.d("click","toggleDisclosure",!1,[i])}),e.t(i.label,s),e.ee(),e.be("div",{class:"disclosure__content","aria-expanded":i.expanded?"true":"false"},"3"+o,s,null,0),e.t(i.renderBody,s),e.ee(),e.ee()}}e.ee()},{t:l},u);r.Component=y(u,r._);const E={title:"Disclosure",component:k,argTypes:{items:{control:"object",description:"Array of disclosure items"}}},I=t=>({input:t,methods:{toggleDisclosure(e){const a=t.items.map(s=>s.id===e.id?{...s,expanded:!s.expanded}:s);this.input={...t,items:a},f("toggleDisclosure")(e)}}}),n=I.bind({});n.args={items:[{id:"1",label:"Item 1",expanded:!1,renderBody:"Content for Item 1"},{id:"2",label:"Item 2",expanded:!0,isSection:!0,renderBody:"Content for Item 2"}]};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  input: args,
  methods: {
    toggleDisclosure(item) {
      // Simulate state update by modifying args and forcing re-render
      const newItems = args.items.map(i => i.id === item.id ? {
        ...i,
        expanded: !i.expanded
      } : i);
      this.input = {
        ...args,
        items: newItems
      };
      action('toggleDisclosure')(item);
    }
  }
})`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const H=["Default"];export{n as Default,H as __namedExportsOrder,E as default};
