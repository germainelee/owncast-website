(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{16791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return n(28420)}])},31112:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});var r=n(85893),a=n(12642),i=n(67294),o=n(71218),l=n(23148),s=n(26495),c=n(56469);function u(e){let t={};return e.forEach(e=>{let n=new Date(e.time);t[(0,a.WU)(n,"H:mma")]=e.value}),t}l.kL.register(l.uw,l.WV,l.f$,l.od,l.jn,l.Dx,l.u,l.De);let d=e=>{let{data:t,title:n,color:a,unit:l,dataCollections:d,yFlipped:h,yLogarithmic:f,minYValue:p,yStepSize:m=0}=e,g=[],y=(0,i.useRef)(null);return t&&t.length>0&&g.push({id:n,label:n,backgroundColor:a,borderColor:a,borderWidth:3,data:u(t)}),d.forEach(e=>{g.push({id:e.name,label:e.name,data:u(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,r.jsxs)("div",{className:"line-chart-container",children:[(0,r.jsx)(s.x1,{ref:y,data:{datasets:g},options:{responsive:!0,clip:!1,scales:{y:{type:f?"logarithmic":"linear",reverse:h,min:p,ticks:{stepSize:m},title:{display:!0,text:l}}}},height:"70vh"}),(0,r.jsx)(c.Z,{size:"small",onClick:()=>{if(y.current){let e=document.createElement("a");e.download="chart.png",e.href=y.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,r.jsx)(o.Z,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},48326:function(e,t,n){"use strict";n.d(t,{j:function(){return x}});var r=n(85893),a=n(3816),i=n(10227),o=n(78021),l=n(75543),s=n(23657),c=n(1461),u=n(56469),d=n(5152),h=n.n(d),f=n(41664),p=n.n(f),m=n(67294),g=n(37039),y=n(4481);let v=h()(()=>Promise.all([n.e(3247),n.e(7625)]).then(n.t.bind(n,17625,23)),{loadableGenerated:{webpack:()=>[17625]},ssr:!1}),w=h()(()=>Promise.all([n.e(3247),n.e(8527)]).then(n.t.bind(n,48527,23)),{loadableGenerated:{webpack:()=>[48527]},ssr:!1}),x=e=>{let{showTroubleshootButton:t}=e,{t:n}=(0,g.$G)(),{health:d}=(0,m.useContext)(y.a);if(!d)return null;let{healthy:h,healthPercentage:f,message:x,representation:b}=d,j="#3f8600",F="info";return f<80?(j="#cf000f",F="error"):f<30&&(j="#f0ad4e",F="error"),(0,r.jsx)("div",{children:(0,r.jsxs)(a.default,{type:"inner",children:[(0,r.jsxs)(i.Z,{gutter:8,children:[(0,r.jsx)(o.Z,{span:12,children:(0,r.jsx)(l.Z,{title:n("Healthy Stream"),value:n(h?"Yes":"No"),valueStyle:{color:j},prefix:h?(0,r.jsx)(v,{}):(0,r.jsx)(w,{})})}),(0,r.jsx)(o.Z,{span:12,children:(0,r.jsx)(l.Z,{title:n("Playback Health"),value:f,valueStyle:{color:j},suffix:"%"})})]}),(0,r.jsx)(i.Z,{style:{display:b<100&&0!==b?"grid":"none"},children:(0,r.jsx)(s.default.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:"".concat(n("Stream health represents")," ").concat(b,"% ").concat(n("of all known players. Other player status is unknown."))})}),(0,r.jsx)(i.Z,{gutter:16,style:{width:"100%",display:x?"grid":"none",marginTop:"10px"},children:(0,r.jsx)(o.Z,{span:24,children:(0,r.jsx)(c.Z,{message:x,type:F,showIcon:!0,action:t&&(0,r.jsx)(p(),{passHref:!0,href:"/admin/stream-health",children:(0,r.jsx)(u.Z,{size:"small",type:"text",style:{color:"black"},children:n("TROUBLESHOOT")})})})})})]})})};x.defaultProps={showTroubleshootButton:!0}},71218:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},o=n(36936),l=a.forwardRef(function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))})},28420:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(23657),i=n(1461),o=n(93879),l=n(4116),s=n(10227),c=n(78021),u=n(3816),d=n(75543),h=n(67294),f=n(5152),p=n.n(f),m=n(11992),g=n(31112),y=n(48326),v=n(25889);let w=p()(()=>Promise.all([n.e(3247),n.e(1429)]).then(n.t.bind(n,25072,23)),{loadableGenerated:{webpack:()=>[25072]},ssr:!1}),x=p()(()=>Promise.all([n.e(3247),n.e(46)]).then(n.t.bind(n,30046,23)),{loadableGenerated:{webpack:()=>[30046]},ssr:!1}),b=p()(()=>Promise.all([n.e(3247),n.e(9900)]).then(n.t.bind(n,39900,23)),{loadableGenerated:{webpack:()=>[39900]},ssr:!1}),j=e=>{let{title:t,description:n}=e;return(0,r.jsxs)("div",{className:"description-box",children:[(0,r.jsx)(a.default.Title,{children:t}),(0,r.jsx)(a.default.Paragraph,{children:n})]})},F=()=>{var e,t,n,f,p,v,F;let[k,S]=(0,h.useState)([]),[C,Z]=(0,h.useState)([]),[P,N]=(0,h.useState)(),[E,T]=(0,h.useState)(),[L,O]=(0,h.useState)([]),[R,D]=(0,h.useState)([]),[V,B]=(0,h.useState)([]),[M,A]=(0,h.useState)([]),[_,I]=(0,h.useState)([]),[q,H]=(0,h.useState)([]),[z,W]=(0,h.useState)([]),[G,Q]=(0,h.useState)([]),[Y,U]=(0,h.useState)(0),X=async()=>{try{let e=await (0,m.rQ)(m.N$);S(e.errors),Z(e.qualityVariantChanges),T(e.highestLatency),N(e.lowestLatency),O(e.medianLatency),D(e.medianSegmentDownloadDuration),B(e.maximumSegmentDownloadDuration),A(e.minimumSegmentDownloadDuration),I(e.minPlayerBitrate),H(e.medianPlayerBitrate),W(e.maxPlayerBitrate),Q(e.availableBitrates),U(e.segmentLength-.3)}catch(e){console.error(e)}};(0,h.useEffect)(()=>{let e=null;return X(),e=setInterval(X,m.NE),()=>{clearInterval(e)}},[]);let $=(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default.Title,{children:"Stream Performance"}),(0,r.jsx)(i.Z,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,r.jsx)(o.Z,{size:"large",children:(0,r.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null==k?void 0:k.length)||!(null==L?void 0:L.length)||!(null==R?void 0:R.length))return $;let J=[{name:"Errors",color:"#B63FFF",data:k,pointStyle:"crossRot",pointRadius:7},{name:"Quality changes",color:"#2087E2",data:C}],K=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:V},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:R},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:M},{name:"Approximate limit",color:"#003FFF",data:R.map(e=>({time:e.time,value:Y})),pointStyle:"dash",options:{radius:0}}],ee=[{name:"Lowest player speed",color:"#B63FFF",data:_,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:q,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:z,options:{radius:2}}];G.forEach(e=>{ee.push({name:"Available bitrate",color:"#003FFF",data:_.map(t=>({time:t.time,value:e})),options:{radius:0}})});let et=null===(t=ee[0])||void 0===t?void 0:null===(e=t.data[ee[0].data.length-1])||void 0===e?void 0:e.value,en=null===(n=R[R.length-1])||void 0===n?void 0:n.value,er=G.reduce((e,t)=>e.valueOf()<t.valueOf()?e:t),ea=(null===(f=L[L.length-1])||void 0===f?void 0:f.value)||0,ei=(null===(p=E[E.length-1])||void 0===p?void 0:p.value)||0,eo=(null===(v=P[P.length-1])||void 0===v?void 0:v.value)||0,el=(Number(ei)+Number(eo)+Number(ea))/3,es=0;es=((null===(F=J[0])||void 0===F?void 0:F.data.length)||0)>5?J[0].data.slice(-5).reduce((e,t)=>e+Number(t.value),0):J[0].data.reduce((e,t)=>e+Number(t.value),0);let ec=et>0||en>0||es>0,eu=null,ed=null;0!==et&&et<er&&(eu="One of your viewers is playing your stream at ".concat(et,"kbps, slower than ").concat(er,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),en>Y&&(ed="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");let eh=es>0?"#B63FFF":"unset",ef={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default.Title,{children:"Stream Performance"}),(0,r.jsx)(a.default.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,r.jsx)(a.default.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,r.jsxs)(l.Z,{direction:"vertical",size:"middle",children:[(0,r.jsx)(s.Z,{justify:"space-around",children:(0,r.jsx)(c.Z,{style:{width:"100%"},children:(0,r.jsx)(y.j,{showTroubleshootButton:!1})})}),(0,r.jsxs)(s.Z,{gutter:[16,16],justify:"space-around",style:{display:ec?"flex":"none"},children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.default,{type:"inner",children:(0,r.jsx)("div",{style:ef,children:(0,r.jsx)(d.Z,{title:"Viewer Playback Speed",value:(null!=et?et:0).toString(),prefix:(0,r.jsx)(b,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),el&&(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.default,{type:"inner",children:(0,r.jsx)("div",{style:ef,children:(0,r.jsx)(d.Z,{title:"Viewer Latency",value:el,prefix:(0,r.jsx)(w,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.default,{type:"inner",children:(0,r.jsx)("div",{style:ef,children:(0,r.jsx)(d.Z,{title:"Recent Playback Errors",value:es||0,valueStyle:{color:eh},prefix:(0,r.jsx)(x,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,r.jsxs)(u.default,{children:[(0,r.jsx)(j,{title:"Video Segment Download",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,r.jsx)(a.default.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),ed&&(0,r.jsx)(i.Z,{message:"Slow downloads",description:ed,type:"error",showIcon:!0}),(0,r.jsx)(g.k,{title:"Seconds",dataCollections:K,color:"#FF7700",unit:"seconds",yLogarithmic:!0})]}),(0,r.jsxs)(u.default,{children:[(0,r.jsx)(j,{title:"Player Network Speed",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,r.jsx)(a.default.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),eu&&(0,r.jsx)(i.Z,{message:"Low bandwidth viewers",description:eu,type:"error",showIcon:!0}),(0,r.jsx)(g.k,{title:"Lowest Player Bitrate",dataCollections:ee,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,r.jsxs)(u.default,{children:[(0,r.jsx)(j,{title:"Errors and Quality Changes",description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,r.jsx)(a.default.Paragraph,{})]})}),(0,r.jsx)(g.k,{title:"#",dataCollections:J,color:"#FF7700",unit:""})]}),(0,r.jsxs)(u.default,{children:[(0,r.jsx)(j,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,r.jsx)(g.k,{title:"Seconds",dataCollections:[{name:"Median stream latency",color:"#00FFFF",data:L},{name:"Lowest stream latency",color:"#02FD0D",data:P},{name:"Highest stream latency",color:"#B63FFF",data:E}],color:"#FF7700",unit:"seconds"})]})]})]})};F.getLayout=function(e){return(0,r.jsx)(v.l,{page:e})},t.default=F},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),a=n(1413),i=n(97685),o=n(45987),l=n(67294),s=n(33322),c=n(93967),u=n.n(c),d={adjustX:1,adjustY:1},h=[0,0],f={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:h},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:h},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:h},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:h},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:h}},p=n(77524),m=n(15503),g=n(3761),y=p.Z.ESC,v=p.Z.TAB,w=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],x=l.forwardRef(function(e,t){var n,c,d,h,p,x,b,j,F,k,S,C,Z,P,N,E,T=e.arrow,L=void 0!==T&&T,O=e.prefixCls,R=void 0===O?"rc-dropdown":O,D=e.transitionName,V=e.animation,B=e.align,M=e.placement,A=e.placements,_=e.getPopupContainer,I=e.showAction,q=e.hideAction,H=e.overlayClassName,z=e.overlayStyle,W=e.visible,G=e.trigger,Q=void 0===G?["hover"]:G,Y=e.autoFocus,U=(0,o.Z)(e,w),X=l.useState(),$=(0,i.Z)(X,2),J=$[0],K=$[1],ee="visible"in e?W:J,et=l.useRef(null);l.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:Y}).visible,h=c.setTriggerVisible,p=c.triggerRef,x=c.onVisibleChange,b=c.autoFocus,j=l.useRef(!1),F=function(){if(d&&p.current){var e,t,n,r;null===(e=p.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n),h(!1),"function"==typeof x&&x(!1)}},k=function(){var e,t,n,r,a=(0,g.tS)(null===(e=p.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return null!=a&&!!a.focus&&(a.focus(),j.current=!0,!0)},S=function(e){switch(e.keyCode){case y:F();break;case v:var t=!1;j.current||(t=k()),t?e.preventDefault():F()}},l.useEffect(function(){return d?(window.addEventListener("keydown",S),b&&(0,m.Z)(k,3),function(){window.removeEventListener("keydown",S),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},er=function(){var e=en();return l.createElement(l.Fragment,null,L&&l.createElement("div",{className:"".concat(R,"-arrow")}),e)},ea=q;return ea||-1===Q.indexOf("contextMenu")||(ea=["click"]),l.createElement(s.Z,(0,a.Z)((0,a.Z)({builtinPlacements:void 0===A?f:A},U),{},{prefixCls:R,ref:et,popupClassName:u()(H,(0,r.Z)({},"".concat(R,"-show-arrow"),L)),popupStyle:z,action:Q,showAction:I,hideAction:ea||[],popupPlacement:void 0===M?"bottomLeft":M,popupAlign:B,popupTransitionName:D,popupAnimation:V,popupVisible:ee,stretch:(C=e.minOverlayWidthMatchTrigger,Z=e.alignPoint,"minOverlayWidthMatchTrigger"in e?C:!Z)?"minWidth":"",popup:"function"==typeof e.overlay?er:er(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:_}),(N=(P=e.children).props?P.props:{},E=u()(N.className,void 0!==(n=e.openClassName)?n:"".concat(R,"-open")),ee&&P?l.cloneElement(P,{className:E}):P))})},55945:function(e,t,n){"use strict";function r(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return r}})},64077:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var r=n(46042);function a(e,t){return+(0,r.Q)(e)-+(0,r.Q)(t)}},94817:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(55945),a=n(64077);function i(e,t,n){let i=(0,a._)(e,t)/1e3;return(0,r.u)(null==n?void 0:n.roundingMethod)(i)}}},function(e){e.O(0,[2196,83,1287,3800,7786,443,9904,3657,1175,2502,4065,9307,2642,7039,6179,9,5889,3064,2888,9774,179],function(){return e(e.s=16791)}),_N_E=e.O()}]);