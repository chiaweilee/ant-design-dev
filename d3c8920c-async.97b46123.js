(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d3c8920c"],{"6074743a":function(e,i,n){"use strict";n.d(i,"__esModule",{value:!0}),n.d(i,"useMermaidCode",{enumerable:!0,get:function(){return a;}});var r=n("5b220c3d");let t=e=>{let i=[];i.push("graph LR"),i.push("classDef baseNode fill:#fff,stroke:none,stroke-width:0px,rx:5,ry:5,font-size:14px");let n=(e,r)=>{let t=`node_${e.id.replace(/[^a-z0-9]/gi,"_")}`,a=e.label.replace(/"/g,"'");r?"mvp"===e.targetType?a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(22, 119, 255);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`:"extension"===e.targetType&&(a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(160, 160, 160);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`):(i.push(`style ${t} font-size:16px`),a=`**${a}**`),i.push(`${t}["${a}"]:::baseNode`),e.link&&i.push(`click ${t} "#${e.link}"`),r&&i.push(`${r} --> ${t}`),e.children&&e.children.length>0&&e.children.forEach(e=>n(e,t));};return n(e),i.join("\n");},a=e=>(0,r.useMemo)(()=>t(e),[e]);},d3c8920c:function(e,i,n){"use strict";var r=n("852bbaa9")._;n.d(i,"__esModule",{value:!0}),n.d(i,"default",{enumerable:!0,get:function(){return h;}});var t=n("777fffbe"),a=n("f19d2b93"),s=n("5b220c3d"),o=n("3835a2b7"),l=n("9c86e52a"),d=t._(n("23546486")),c=n("6074743a");let u=(0,o.createStyles)(({cssVar:e})=>({container:(0,o.css)`
    width: 100%;
    min-height: 600px;
    height: fit-content;
    background-color: ${e.colorBgLayout};
    border: 1px solid #e8e8e8;
    border-radius: ${e.borderRadiusLG};
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,chartContainer:(0,o.css)`
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    > svg {
      margin: auto;
    }
  `,title:(0,o.css)`
    position: absolute;
    top: 20px;
    inset-inline-start: 20px;
    font-size: ${e.fontSizeLG};
    z-index: 10;
  `,tips:(0,o.css)`
    display: flex;
    position: absolute;
    bottom: 20px;
    inset-inline-end: 20px;
    z-index: 10;
    border-radius: 4px;
    font-size: ${e.fontSize};
  `,mvp:(0,o.css)`
    margin-inline-end: ${e.marginMD};
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${e.marginXS};
      background-color: rgb(22, 119, 255);
      border-radius: 50%;
      content: '';
    }
  `,extension:(0,o.css)`
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${e.marginXS};
      background-color: rgb(160, 160, 160);
      border-radius: 50%;
      content: '';
    }
  `})),p={cn:{MVPPurpose:"MVP \u884C\u4E3A\u76EE\u7684",extensionPurpose:"\u62D3\u5C55\u884C\u4E3A\u76EE\u7684",behaviorMap:"\u884C\u4E3A\u6A21\u5F0F\u5730\u56FE"},en:{MVPPurpose:"MVP behavior purpose",extensionPurpose:"Extension behavior purpose",behaviorMap:"Behavior Map"}};var h=({data:e})=>{let i=(0,s.useRef)(null),{styles:t}=u(),[o]=(0,d.default)(p),h=(0,l.useRouteMeta)(),b=(0,c.useMermaidCode)(e);return(0,s.useEffect)(()=>{let e=!1;return(async()=>{if(i.current&&b)try{let t=(await Promise.all([n.ensure("vendors_0"),n.ensure("2bf1ac51")]).then(n.dr(r,n.bind(n,"2bf1ac51")))).default;if(e)return;t.initialize({startOnLoad:!1,theme:"base",securityLevel:"strict",flowchart:{htmlLabels:!0,curve:"linear",rankSpacing:150,nodeSpacing:10}});let a=`mermaid-${Date.now()}-1`,{svg:s}=await t.render(a,b);!e&&i.current&&(i.current.innerHTML=s);}catch(n){!e&&i.current&&(console.error("Mermaid render error:",n),i.current.innerHTML="Render Error");}})(),()=>{e=!0;};},[b]),(0,a.jsxs)("div",{className:t.container,children:[(0,a.jsx)("div",{className:t.title,children:`${h.frontmatter.title} ${o.behaviorMap}`}),(0,a.jsx)("div",{ref:i,className:t.chartContainer}),(0,a.jsxs)("div",{className:t.tips,children:[(0,a.jsx)("div",{className:t.mvp,children:o.MVPPurpose}),(0,a.jsx)("div",{className:t.extension,children:o.extensionPurpose})]})]});};}}]);