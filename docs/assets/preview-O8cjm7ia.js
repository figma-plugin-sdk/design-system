import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const{useParameter:u,addons:l,useEffect:A,useMemo:y}=__STORYBOOK_MODULE_PREVIEW_API__;var d=Object.defineProperty,R=(e,t)=>{for(var r in t)d(e,r,{get:t[r],enumerable:!0})},g={};R(g,{initializeThemeState:()=>s,pluckThemeFromContext:()=>n,useThemeParameters:()=>T});var i="themes",p=`storybook/${i}}`,S="theme",D={},f={REGISTER_THEMES:`${p}/REGISTER_THEMES`};function n({globals:e}){return e[S]||""}function T(){return u(i,D)}function s(e,t){l.getChannel().emit(f.REGISTER_THEMES,{defaultTheme:t,themes:e})}var L="html",M="data-theme",O=({themes:e,defaultTheme:t,parentSelector:r=L,attributeName:a=M})=>(s(Object.keys(e),t),(_,h)=>{let{themeOverride:o}=T(),E=n(h);return A(()=>{let m=document.querySelector(r),c=o||E||t;m&&m.setAttribute(a,e[c])},[o,E,r,a]),_()});const v=O({themes:{"Figma Light":"light","Figma Dark":"dark",FigJam:"figjam"},defaultTheme:"Figma Light",attributeName:"data-theme"}),I={decorators:[v],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{I as default};
