"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8813],{68813:function(O,e,t){t.r(e),t.d(e,{autoCloseTags:function(){return V},completeFromSchema:function(){return w},xml:function(){return y},xmlLanguage:function(){return Q}});var o=t(53105),r=t(35524);let n=null,l=null,a=0;function s(O,e){var t;let o=O.pos+e;if(l==O&&a==o)return n;for(;9==(t=O.peek(e))||10==t||13==t||32==t;)e++;let r="";for(;;){let t=O.peek(e);if(!(45==t||46==t||58==t||t>=65&&t<=90||95==t||t>=97&&t<=122||t>=161))break;r+=String.fromCharCode(t),e++}return l=O,a=o,n=r||null}function i(O,e){this.name=O,this.parent=e}let c=new o.IK({start:null,shift:(O,e,t,o)=>1==e?new i(s(o,1)||"",O):O,reduce:(O,e)=>11==e&&O?O.parent:O,reuse(O,e,t,o){let r=e.type.id;return 1==r||13==r?new i(s(o,1)||"",O):O},strict:!1}),p=new o.Jq((O,e)=>{if(60==O.next){if(O.advance(),47==O.next){O.advance();let t=s(O,0);if(!t)return O.acceptToken(5);if(e.context&&t==e.context.name)return O.acceptToken(2);for(let o=e.context;o;o=o.parent)if(o.name==t)return O.acceptToken(3,-2);O.acceptToken(4)}else if(33!=O.next&&63!=O.next)return O.acceptToken(1)}},{contextual:!0});function $(O,e){return new o.Jq(t=>{let o=0,r=e.charCodeAt(0);O:for(;!(t.next<0);t.advance(),o++)if(t.next==r){for(let O=1;O<e.length;O++)if(t.peek(O)!=e.charCodeAt(O))continue O;break}o&&t.acceptToken(O)})}let S=$(36,"-->"),u=$(37,"?>"),g=$(38,"]]>"),m=(0,r.Gv)({Text:r.pJ.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":r.pJ.angleBracket,TagName:r.pJ.tagName,"MismatchedCloseTag/TagName":[r.pJ.tagName,r.pJ.invalid],AttributeName:r.pJ.attributeName,AttributeValue:r.pJ.attributeValue,Is:r.pJ.definitionOperator,"EntityReference CharacterReference":r.pJ.character,Comment:r.pJ.blockComment,ProcessingInst:r.pJ.processingInstruction,DoctypeDecl:r.pJ.documentMeta,Cdata:r.pJ.special(r.pJ.string)}),x=o.WQ.deserialize({version:14,states:",lOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DT'#DTOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C|'#C|O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C}'#C}O$dOrO,59^OOOP,59^,59^OOOS'#DO'#DOO$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6z-E6zOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6{-E6{OOOP1G.x1G.xOOOS-E6|-E6|OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'mO!bO,59eOOOO-E6w-E6wO'{OpO1G.uO'{OpO1G.uOOOP1G.u1G.uO(TOpO7+$fOOOP7+$f7+$fO(]O!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(hO#tO'#CnO(vO&jO'#CnOOOO1G.q1G.qO)UOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO)^O#tO,59YOOOO,59Y,59YOOOO'#C{'#C{O)lO&jO,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.tOOOO-E6y-E6y",stateData:")z~OPQOSVOTWOVWOWWOXWOiXOyPO!QTO!SUO~OvZOx]O~O^`Oz^O~OPQOQcOSVOTWOVWOWWOXWOyPO!QTO!SUO~ORdO~P!SOteO!PgO~OuhO!RjO~O^lOz^O~OvZOxoO~O^qOz^O~O[vO`sOdwOz^O~ORyO~P!SO^{Oz^O~OteO!P}O~OuhO!R!PO~O^!QOz^O~O[!SOz^O~O[!VO`sOd!WOz^O~Oa!YOz^O~Oz^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oz^O~O[!_Oz^O~O[!aOz^O~O[!cO`sOd!dOz^O~O[!cO`sOd!dO~Oa!eOz^O~Oz^O{!gO}!hO~Oz^O[ma`madma~O[!kOz^O~O[!lOz^O~O[!mO`sOd!nO~OW!qOX!qO{!sO|!qO~OW!tOX!tO}!sO!O!tO~O[!vOz^O~OW!qOX!qO{!yO|!qO~OW!tOX!tO}!yO!O!tO~O",goto:"%cxPPPPPPPPPPyyP!PP!VPP!`!jP!pyyyP!v!|#S$[$k$q$w$}%TPPPP%ZXWORYbXRORYb_t`qru!T!U!bQ!i!YS!p!e!fR!w!oQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!j!oQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!j!]R!o!eQu`S!UqrU![u!U!bR!b!TQ!r!gR!x!rQ!u!hR!z!uQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:50,context:c,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[m],skippedNodes:[0],repeatNodeCount:9,tokenData:"!)v~R!YOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs*vsv$qvw+fwx/ix}$q}!O0[!O!P$q!P!Q2z!Q![$q![!]4n!]!^$q!^!_8U!_!`!#t!`!a!$l!a!b!%d!b!c$q!c!}4n!}#P$q#P#Q!'W#Q#R$q#R#S4n#S#T$q#T#o4n#o%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U$q4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qi$zXVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qa%nVVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%gP&YTVPOv&Tw!^&T!_;'S&T;'S;=`&i<%lO&TP&lP;=`<%l&T`&tS!O`Ov&ox;'S&o;'S;=`'Q<%lO&o`'TP;=`<%l&oa'ZP;=`<%l%gX'eWVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^W(ST|WOr'}sv'}w;'S'};'S;=`(c<%lO'}W(fP;=`<%l'}X(lP;=`<%l'^h(vV|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oh)`P;=`<%l(oi)fP;=`<%l$qo)t`VP|W!O`zUOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk+PV{YVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%g~+iast,n![!]-r!c!}-r#R#S-r#T#o-r%W%o-r%p&a-r&b1p-r4U4d-r4e$IS-r$I`$Ib-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~,qQ!Q![,w#l#m-V~,zQ!Q![,w!]!^-Q~-VOX~~-YR!Q![-c!c!i-c#T#Z-c~-fS!Q![-c!]!^-Q!c!i-c#T#Z-c~-ug}!O-r!O!P-r!Q![-r![!]-r!]!^/^!c!}-r#R#S-r#T#o-r$}%O-r%W%o-r%p&a-r&b1p-r1p4U-r4U4d-r4e$IS-r$I`$Ib-r$Je$Jg-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~/cOW~~/fP;=`<%l-rk/rW}bVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^k0eZVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O1W!O!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk1aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a2S!a;'S$q;'S;=`)c<%lO$qk2_X!PQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qm3TZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a3v!a;'S$q;'S;=`)c<%lO$qm4RXdSVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo4{!P`S^QVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O4n!O!P4n!P!Q$q!Q![4n![!]4n!]!^$q!^!_(o!_!c$q!c!}4n!}#R$q#R#S4n#S#T$q#T#o4n#o$}$q$}%O4n%O%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U4n4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Je$q$Je$Jg4n$Jg$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qo8RP;=`<%l4ni8]Y|W!O`Oq(oqr8{rs&osv(owx'}x!a(o!a!b!#U!b;'S(o;'S;=`)]<%lO(oi9S_|W!O`Or(ors&osv(owx'}x}(o}!O:R!O!f(o!f!g;e!g!}(o!}#ODh#O#W(o#W#XLp#X;'S(o;'S;=`)]<%lO(oi:YX|W!O`Or(ors&osv(owx'}x}(o}!O:u!O;'S(o;'S;=`)]<%lO(oi;OV!QP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oi;lX|W!O`Or(ors&osv(owx'}x!q(o!q!r<X!r;'S(o;'S;=`)]<%lO(oi<`X|W!O`Or(ors&osv(owx'}x!e(o!e!f<{!f;'S(o;'S;=`)]<%lO(oi=SX|W!O`Or(ors&osv(owx'}x!v(o!v!w=o!w;'S(o;'S;=`)]<%lO(oi=vX|W!O`Or(ors&osv(owx'}x!{(o!{!|>c!|;'S(o;'S;=`)]<%lO(oi>jX|W!O`Or(ors&osv(owx'}x!r(o!r!s?V!s;'S(o;'S;=`)]<%lO(oi?^X|W!O`Or(ors&osv(owx'}x!g(o!g!h?y!h;'S(o;'S;=`)]<%lO(oi@QY|W!O`Or?yrs@psv?yvwA[wxBdx!`?y!`!aCr!a;'S?y;'S;=`Db<%lO?ya@uV!O`Ov@pvxA[x!`@p!`!aAy!a;'S@p;'S;=`B^<%lO@pPA_TO!`A[!`!aAn!a;'SA[;'S;=`As<%lOA[PAsOiPPAvP;=`<%lA[aBQSiP!O`Ov&ox;'S&o;'S;=`'Q<%lO&oaBaP;=`<%l@pXBiX|WOrBdrsA[svBdvwA[w!`Bd!`!aCU!a;'SBd;'S;=`Cl<%lOBdXC]TiP|WOr'}sv'}w;'S'};'S;=`(c<%lO'}XCoP;=`<%lBdiC{ViP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiDeP;=`<%l?yiDoZ|W!O`Or(ors&osv(owx'}x!e(o!e!fEb!f#V(o#V#WIr#W;'S(o;'S;=`)]<%lO(oiEiX|W!O`Or(ors&osv(owx'}x!f(o!f!gFU!g;'S(o;'S;=`)]<%lO(oiF]X|W!O`Or(ors&osv(owx'}x!c(o!c!dFx!d;'S(o;'S;=`)]<%lO(oiGPX|W!O`Or(ors&osv(owx'}x!v(o!v!wGl!w;'S(o;'S;=`)]<%lO(oiGsX|W!O`Or(ors&osv(owx'}x!c(o!c!dH`!d;'S(o;'S;=`)]<%lO(oiHgX|W!O`Or(ors&osv(owx'}x!}(o!}#OIS#O;'S(o;'S;=`)]<%lO(oiI]V|W!O`yPOr(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiIyX|W!O`Or(ors&osv(owx'}x#W(o#W#XJf#X;'S(o;'S;=`)]<%lO(oiJmX|W!O`Or(ors&osv(owx'}x#T(o#T#UKY#U;'S(o;'S;=`)]<%lO(oiKaX|W!O`Or(ors&osv(owx'}x#h(o#h#iK|#i;'S(o;'S;=`)]<%lO(oiLTX|W!O`Or(ors&osv(owx'}x#T(o#T#UH`#U;'S(o;'S;=`)]<%lO(oiLwX|W!O`Or(ors&osv(owx'}x#c(o#c#dMd#d;'S(o;'S;=`)]<%lO(oiMkX|W!O`Or(ors&osv(owx'}x#V(o#V#WNW#W;'S(o;'S;=`)]<%lO(oiN_X|W!O`Or(ors&osv(owx'}x#h(o#h#iNz#i;'S(o;'S;=`)]<%lO(oi! RX|W!O`Or(ors&osv(owx'}x#m(o#m#n! n#n;'S(o;'S;=`)]<%lO(oi! uX|W!O`Or(ors&osv(owx'}x#d(o#d#e!!b#e;'S(o;'S;=`)]<%lO(oi!!iX|W!O`Or(ors&osv(owx'}x#X(o#X#Y?y#Y;'S(o;'S;=`)]<%lO(oi!#_V!SP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(ok!$PXaQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo!$wX[UVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!%mZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!&`!a;'S$q;'S;=`)c<%lO$qk!&kX!RQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!'aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_#P$q#P#Q!(S#Q;'S$q;'S;=`)c<%lO$qk!(]ZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!)O!a;'S$q;'S;=`)c<%lO$qk!)ZXxQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$q",tokenizers:[p,S,u,g,0,1,2,3,4],topRules:{Document:[0,6]},tokenPrec:0});var q=t(59119),f=t(37205),d=t(47421);function v(O,e){let t=e&&e.getChild("TagName");return t?O.sliceString(t.from,t.to):""}function P(O,e){let t=e&&e.firstChild;return t&&"OpenTag"==t.name?v(O,t):""}function T(O){for(let e=O&&O.parent;e;e=e.parent)if("Element"==e.name)return e;return null}class h{constructor(O,e,t){this.attrs=e,this.attrValues=t,this.children=[],this.name=O.name,this.completion=Object.assign(Object.assign({type:"type"},O.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=O.textContent?O.textContent.map(O=>({label:O,type:"text"})):[]}}let C=/^[:\-\.\w\u00b7-\uffff]*$/;function b(O){return Object.assign(Object.assign({type:"property"},O.completion||{}),{label:O.name})}function W(O){return"string"==typeof O?{label:`"${O}"`,type:"constant"}:/^"/.test(O.label)?O:Object.assign(Object.assign({},O),{label:`"${O.label}"`})}function w(O,e){let t=[],o=[],r=Object.create(null);for(let O of e){let e=b(O);t.push(e),O.global&&o.push(e),O.values&&(r[O.name]=O.values.map(W))}let n=[],l=[],a=Object.create(null);for(let e of O){let O=o,s=r;e.attributes&&(O=O.concat(e.attributes.map(O=>"string"==typeof O?t.find(e=>e.label==O)||{label:O,type:"property"}:(O.values&&(s==r&&(s=Object.create(s)),s[O.name]=O.values.map(W)),b(O)))));let i=new h(e,O,s);a[i.name]=i,n.push(i),e.top&&l.push(i)}l.length||(l=n);for(let e=0;e<n.length;e++){let t=O[e],o=n[e];if(t.children)for(let O of t.children)a[O]&&o.children.push(a[O]);else o.children=n}return O=>{var e;let{doc:t}=O.state,s=function(O,e){var t;let o=(0,q.qz)(O).resolveInner(e,-1),r=null;for(let O=o;!r&&O.parent;O=O.parent)("OpenTag"==O.name||"CloseTag"==O.name||"SelfClosingTag"==O.name||"MismatchedCloseTag"==O.name)&&(r=O);if(r&&(r.to>e||r.lastChild.type.isError)){let O=r.parent;if("TagName"==o.name)return"CloseTag"==r.name||"MismatchedCloseTag"==r.name?{type:"closeTag",from:o.from,context:O}:{type:"openTag",from:o.from,context:T(O)};if("AttributeName"==o.name)return{type:"attrName",from:o.from,context:r};if("AttributeValue"==o.name)return{type:"attrValue",from:o.from,context:r};let t=o==r||"Attribute"==o.name?o.childBefore(e):o;return(null==t?void 0:t.name)=="StartTag"?{type:"openTag",from:e,context:T(O)}:(null==t?void 0:t.name)=="StartCloseTag"&&t.to<=e?{type:"closeTag",from:e,context:O}:(null==t?void 0:t.name)=="Is"?{type:"attrValue",from:e,context:r}:t?{type:"attrName",from:e,context:r}:null}if("StartCloseTag"==o.name)return{type:"closeTag",from:e,context:o.parent};for(;o.parent&&o.to==e&&!(null===(t=o.lastChild)||void 0===t?void 0:t.type.isError);)o=o.parent;return"Element"==o.name||"Text"==o.name||"Document"==o.name?{type:"tag",from:e,context:"Element"==o.name?o:T(o)}:null}(O.state,O.pos);if(!s||"tag"==s.type&&!O.explicit)return null;let{type:i,from:c,context:p}=s;if("openTag"==i){let O=l,e=P(t,p);if(e){let t=a[e];O=(null==t?void 0:t.children)||n}return{from:c,options:O.map(O=>O.completion),validFor:C}}if("closeTag"==i){let o=P(t,p);return o?{from:c,to:O.pos+(">"==t.sliceString(O.pos,O.pos+1)?1:0),options:[(null===(e=a[o])||void 0===e?void 0:e.closeNameCompletion)||{label:o+">",type:"type"}],validFor:C}:null}if("attrName"==i){let O=a[v(t,p)];return{from:c,options:(null==O?void 0:O.attrs)||o,validFor:C}}if("attrValue"==i){let e,o;let n=(o=(e=p&&p.getChildren("Attribute").find(O=>O.from<=c&&O.to>=c))&&e.getChild("AttributeName"))?t.sliceString(o.from,o.to):"";if(!n)return null;let l=a[v(t,p)],s=((null==l?void 0:l.attrValues)||r)[n];return s&&s.length?{from:c,to:O.pos+('"'==t.sliceString(O.pos,O.pos+1)?1:0),options:s,validFor:/^"[^"]*"?$/}:null}{if("tag"!=i)return null;let e=P(t,p),o=a[e],r=[],s=p&&p.lastChild;e&&(!s||"CloseTag"!=s.name||v(t,s)!=e)&&r.push(o?o.closeCompletion:{label:"</"+e+">",type:"type",boost:2});let $=r.concat(((null==o?void 0:o.children)||(p?n:l)).map(O=>O.openCompletion));if(p&&(null==o?void 0:o.text.length)){let e=p.firstChild;e.to>O.pos-20&&!/\S/.test(O.state.sliceDoc(e.to,O.pos))&&($=$.concat(o.text))}return{from:c,options:$,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}}}let Q=q.qp.define({name:"xml",parser:x.configure({props:[q.uj.add({Element(O){let e=/^\s*<\//.test(O.textAfter);return O.lineIndent(O.node.from)+(e?0:O.unit)},"OpenTag CloseTag SelfClosingTag":O=>O.column(O.node.from)+O.unit}),q.x0.add({Element(O){let e=O.firstChild,t=O.lastChild;return e&&"OpenTag"==e.name?{from:e.to,to:"CloseTag"==t.name?t.from:O.to}:null}}),q.a0.add({"OpenTag CloseTag":O=>O.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function y(O={}){let e=[Q.data.of({autocomplete:w(O.elements||[],O.attributes||[])})];return!1!==O.autoCloseTags&&e.push(V),new q.ri(Q,e)}function X(O,e,t=O.length){if(!e)return"";let o=e.firstChild,r=o&&o.getChild("TagName");return r?O.sliceString(r.from,Math.min(r.to,t)):""}let V=d.tk.inputHandler.of((O,e,t,o,r)=>{if(O.composing||O.state.readOnly||e!=t||">"!=o&&"/"!=o||!Q.isActiveAt(O.state,e,-1))return!1;let n=r(),{state:l}=n,a=l.changeByRange(O=>{var e,t,r;let{head:n}=O,a=l.doc.sliceString(n-1,n)==o,s=(0,q.qz)(l).resolveInner(n,-1),i;if(a&&">"==o&&"EndTag"==s.name){let o=s.parent;if((null===(t=null===(e=o.parent)||void 0===e?void 0:e.lastChild)||void 0===t?void 0:t.name)!="CloseTag"&&(i=X(l.doc,o.parent,n))){let e=n+(">"===l.doc.sliceString(n,n+1)?1:0);return{range:O,changes:{from:n,to:e,insert:`</${i}>`}}}}else if(a&&"/"==o&&"StartCloseTag"==s.name){let O=s.parent;if(s.from==n-2&&(null===(r=O.lastChild)||void 0===r?void 0:r.name)!="CloseTag"&&(i=X(l.doc,O,n))){let O=n+(">"===l.doc.sliceString(n,n+1)?1:0),e=`${i}>`;return{range:f.jT.cursor(n+e.length,-1),changes:{from:n,to:O,insert:e}}}}return{range:O}});return!a.changes.empty&&(O.dispatch([n,l.update(a,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})}}]);