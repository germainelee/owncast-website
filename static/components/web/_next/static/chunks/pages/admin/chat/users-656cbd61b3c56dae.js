(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9522],{55583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/users",function(){return n(17988)}])},17988:function(e,t,n){"use strict";n.r(t),n.d(t,{FETCH_INTERVAL:function(){return v},default:function(){return I}});var a=n(85893),r=n(67294),s=n(89307),l=n(37039),d=n(4481),o=n(11992),c=n(78338),i=n(20133),u=n(27043),h=n(61913),m=n(5152),g=n.n(m),p=n(78754),y=n(60089),x=n(74040);let f=g()(()=>Promise.all([n.e(3247),n.e(8661)]).then(n.t.bind(n,78661,23)),{loadableGenerated:{webpack:()=>[78661]},ssr:!1}),w=e=>{let{data:t}=e,n=[{title:"Display Name",key:"username",render:e=>{let{user:t,connectedAt:n,messageCount:r,userAgent:s}=e;return(0,a.jsx)(p.Z,{user:t,connectionInfo:{connectedAt:n,messageCount:r,userAgent:s},children:(0,a.jsx)("span",{className:"display-name",children:t.displayName})})},sorter:(e,t)=>t.user.displayName.localeCompare(e.user.displayName),filterIcon:(0,a.jsx)(f,{}),filterDropdown:e=>{let{setSelectedKeys:t,selectedKeys:n,confirm:r}=e;return 0===n.length?null:(0,a.jsx)("div",{style:{padding:8},children:(0,a.jsx)(i.default,{placeholder:"Search display names...",value:n[0].toString(),onChange:e=>{t(e.target.value?[e.target.value]:[]),r({closeDropdown:!1})}})})},onFilter:(e,t)=>t.user.displayName.includes(e),sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",width:"12%",sorter:(e,t)=>e.messageCount-t.messageCount,sortDirections:["descend","ascend"],render:e=>(0,a.jsx)("div",{style:{textAlign:"center"},children:e})},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:e=>(0,h.Q)(new Date(e)),sorter:(e,t)=>new Date(t.connectedAt).getTime()-new Date(e.connectedAt).getTime(),sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,x.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(y.e,{user:t.user,isEnabled:!t.user.disabledAt})}];return(0,a.jsx)(u.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:n,dataSource:t,size:"small",rowKey:"id"})};var b=n(56469),k=n(12642);let j=g()(()=>Promise.all([n.e(3247),n.e(1071)]).then(n.t.bind(n,71071,23)),{loadableGenerated:{webpack:()=>[71071]},ssr:!1});async function A(e){try{await (0,o.rQ)(o.RB,{data:{value:e},method:"POST",auth:!0})}catch(e){console.error(e)}}let N=e=>{let{data:t}=e,n=[{title:"IP Address",dataIndex:"ipAddress",key:"ipAddress"},{title:"Reason",dataIndex:"notes",key:"notes"},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>(0,k.WU)(new Date(e),"MMM d H:mma"),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(b.Z,{title:"Remove IP Address Ban",onClick:()=>A(t.ipAddress),icon:(0,a.jsx)(j,{twoToneColor:"#ff4d4f"}),className:"block-user-button"})}];return(0,a.jsx)(u.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"large",rowKey:"ipAddress"})};var C=n(25889);let v=1e4;function I(){let{online:e}=(0,r.useContext)(d.a)||{},[t,n]=(0,r.useState)([]),[i,u]=(0,r.useState)([]),[h,m]=(0,r.useState)([]),[g,p]=(0,r.useState)([]),{t:y}=(0,l.$G)(),x=async()=>{try{let e=await (0,o.rQ)(o.qk);n(e)}catch(e){console.log("==== error",e)}try{let e=await (0,o.rQ)(o.Kp);m(e)}catch(e){console.log("==== error",e)}try{let e=await (0,o.rQ)(o.GC);p(e)}catch(e){console.error("error fetching moderators",e)}try{let e=await (0,o.rQ)(o.Bu);u(e)}catch(e){console.error("error fetching banned ips",e)}};(0,r.useEffect)(()=>{let e=null;return x(),e=setInterval(x,v),()=>{clearInterval(e)}},[e]);let f=e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{data:h}),(0,a.jsxs)("p",{className:"description",children:[y("Visit the")," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/viewers/?source=admin",target:"_blank",rel:"noopener noreferrer",children:y("documentation")})," ",y("to configure additional details about your viewers.")]})]}):(0,a.jsx)("p",{className:"description",children:y("When a stream is active and chat is enabled, connected chat clients will be displayed here.")}),b=(0,a.jsxs)("span",{children:[y("Connected")," (",e?h.length:y("offline"),")"]}),k=(0,a.jsxs)("span",{children:[y("Banned Users")," (",t.length,")"]}),j=(0,a.jsx)(c.K,{data:t}),A=(0,a.jsxs)("span",{children:[y("IP Bans")," (",i.length,")"]}),C=(0,a.jsx)(N,{data:i}),I=(0,a.jsxs)("span",{children:[y("Moderators")," (",g.length,")"]}),_=(0,a.jsx)(c.K,{data:g});return(0,a.jsx)(s.Z,{defaultActiveKey:"1",items:[{label:b,key:"1",children:f},{label:k,key:"2",children:j},{label:A,key:"3",children:C},{label:I,key:"4",children:_}]})}I.getLayout=function(e){return(0,a.jsx)(C.l,{page:e})}}},function(e){e.O(0,[83,1287,3800,7786,443,9904,3657,1175,2502,7528,9532,449,7043,4065,9307,2642,7039,1913,5889,3064,4567,2888,9774,179],function(){return e(e.s=55583)}),_N_E=e.O()}]);