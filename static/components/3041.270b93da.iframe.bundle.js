"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[3041],{"./node_modules/mermaid/dist/pieDiagram-79897490.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mermaid/dist/mermaid-f47111a7.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),parser=(__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js"),function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[1,3],$V1=[1,4],$V2=[1,5],$V3=[1,6],$V4=[1,10,12,14,16,18,19,20,21,22],$V5=[2,4],$V6=[1,5,10,12,14,16,18,19,20,21,22],$V7=[20,21,22],$V8=[2,7],$V9=[1,12],$Va=[1,13],$Vb=[1,14],$Vc=[1,15],$Vd=[1,16],$Ve=[1,17],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 3:yy.setShowData(!0);break;case 6:this.$=$$[$0-1];break;case 8:yy.addSection($$[$0-1],yy.cleanupValue($$[$0]));break;case 9:this.$=$$[$0].trim(),yy.setDiagramTitle(this.$);break;case 10:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 11:case 12:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 13:yy.addSection($$[$0].substr(8)),this.$=$$[$0].substr(8)}},table:[{3:1,4:2,5:$V0,20:$V1,21:$V2,22:$V3},{1:[3]},{3:7,4:2,5:$V0,20:$V1,21:$V2,22:$V3},o($V4,$V5,{6:8,7:[1,9]}),o($V6,[2,14]),o($V6,[2,15]),o($V6,[2,16]),{1:[2,1]},o($V7,$V8,{8:10,9:11,1:[2,2],10:$V9,12:$Va,14:$Vb,16:$Vc,18:$Vd,19:$Ve}),o($V4,$V5,{6:18}),o($V4,[2,5]),{4:19,20:$V1,21:$V2,22:$V3},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},o($V7,[2,12]),o($V7,[2,13]),o($V7,$V8,{8:10,9:11,1:[2,3],10:$V9,12:$Va,14:$Vb,16:$Vc,18:$Vd,19:$Ve}),o($V4,[2,6]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),o($V7,[2,11])],defaultActions:{7:[2,1]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,token,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(token=void 0,"number"!=typeof(token=tstack.pop()||lexer2.lex()||1)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),symbol=token),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(1==symbol?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:case 1:case 3:case 4:break;case 2:return 20;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:case 15:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}());parser.parser=parser;const parser$1=parser,DEFAULT_PIE_CONFIG=_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.B.pie,DEFAULT_PIE_DB_sections={},DEFAULT_PIE_DB_showData=!1;let sections=DEFAULT_PIE_DB_sections,showData=DEFAULT_PIE_DB_showData;const config=structuredClone(DEFAULT_PIE_CONFIG),db={getConfig:()=>structuredClone(config),clear:()=>{sections=structuredClone(DEFAULT_PIE_DB_sections),showData=DEFAULT_PIE_DB_showData,(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.v)()},setDiagramTitle:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.q,getDiagramTitle:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.t,setAccTitle:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.s,getAccTitle:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.g,setAccDescription:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.b,getAccDescription:_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.a,addSection:(label,value)=>{label=(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.d)(label,(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.c)()),void 0===sections[label]&&(sections[label]=value,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.l.debug(`added new section: ${label}, with value: ${value}`))},getSections:()=>sections,cleanupValue:value=>(":"===value.substring(0,1)&&(value=value.substring(1).trim()),Number(value.trim())),setShowData:toggle=>{showData=toggle},getShowData:()=>showData},diagram={parser:parser$1,db,renderer:{draw:(text,id,_version,diagObj)=>{_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("rendering pie chart\n"+text);const db2=diagObj.db,globalConfig=(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.c)(),pieConfig=(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.C)(db2.getConfig(),globalConfig.pie),svg=(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.A)(id),group=svg.append("g"),sections2=db2.getSections();group.attr("transform","translate(225,225)");const{themeVariables}=globalConfig;let[outerStrokeWidth]=(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.D)(themeVariables.pieOuterStrokeWidth);outerStrokeWidth??(outerStrokeWidth=2);const textPosition=pieConfig.textPosition,radius=Math.min(450,450)/2-40,arcGenerator=(0,d3__WEBPACK_IMPORTED_MODULE_0__.JLW)().innerRadius(0).outerRadius(radius),labelArcGenerator=(0,d3__WEBPACK_IMPORTED_MODULE_0__.JLW)().innerRadius(radius*textPosition).outerRadius(radius*textPosition);group.append("circle").attr("cx",0).attr("cy",0).attr("r",radius+outerStrokeWidth/2).attr("class","pieOuterCircle");const arcs=(sections2=>{const pieData=Object.entries(sections2).map((element=>({label:element[0],value:element[1]}))).sort(((a,b)=>b.value-a.value));return(0,d3__WEBPACK_IMPORTED_MODULE_0__.rLf)().value((d3Section=>d3Section.value))(pieData)})(sections2),myGeneratedColors=[themeVariables.pie1,themeVariables.pie2,themeVariables.pie3,themeVariables.pie4,themeVariables.pie5,themeVariables.pie6,themeVariables.pie7,themeVariables.pie8,themeVariables.pie9,themeVariables.pie10,themeVariables.pie11,themeVariables.pie12],color=(0,d3__WEBPACK_IMPORTED_MODULE_0__.UMr)(myGeneratedColors);group.selectAll("mySlices").data(arcs).enter().append("path").attr("d",arcGenerator).attr("fill",(datum=>color(datum.data.label))).attr("class","pieCircle");let sum=0;Object.keys(sections2).forEach((key=>{sum+=sections2[key]})),group.selectAll("mySlices").data(arcs).enter().append("text").text((datum=>(datum.data.value/sum*100).toFixed(0)+"%")).attr("transform",(datum=>"translate("+labelArcGenerator.centroid(datum)+")")).style("text-anchor","middle").attr("class","slice"),group.append("text").text(db2.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const legend=group.selectAll(".legend").data(color.domain()).enter().append("g").attr("class","legend").attr("transform",((_datum,index)=>"translate(216,"+(22*index-22*color.domain().length/2)+")"));legend.append("rect").attr("width",18).attr("height",18).style("fill",color).style("stroke",color),legend.data(arcs).append("text").attr("x",22).attr("y",14).text((datum=>{const{label,value}=datum.data;return db2.getShowData()?`${label} [${value}]`:label}));const totalWidth=512+Math.max(...legend.selectAll("text").nodes().map((node=>(null==node?void 0:node.getBoundingClientRect().width)??0)));svg.attr("viewBox",`0 0 ${totalWidth} 450`),(0,_mermaid_f47111a7_js__WEBPACK_IMPORTED_MODULE_4__.i)(svg,450,totalWidth,pieConfig.useMaxWidth)}},styles:options=>`\n  .pieCircle{\n    stroke: ${options.pieStrokeColor};\n    stroke-width : ${options.pieStrokeWidth};\n    opacity : ${options.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${options.pieOuterStrokeColor};\n    stroke-width: ${options.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${options.pieTitleTextSize};\n    fill: ${options.pieTitleTextColor};\n    font-family: ${options.fontFamily};\n  }\n  .slice {\n    font-family: ${options.fontFamily};\n    fill: ${options.pieSectionTextColor};\n    font-size:${options.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${options.pieLegendTextColor};\n    font-family: ${options.fontFamily};\n    font-size: ${options.pieLegendTextSize};\n  }\n`}}}]);