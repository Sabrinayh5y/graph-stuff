"use strict";(self.webpackChunkgraph_stuff=self.webpackChunkgraph_stuff||[]).push([[234],{234:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var i=t(294),r=t(379),l=t.n(r),a=t(795),o=t.n(a),d=t(569),c=t.n(d),h=t(565),s=t.n(h),u=t(216),p=t.n(u),g=t(589),v=t.n(g),x=t(721),m={};m.styleTagTransform=v(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p();l()(x.Z,m);x.Z&&x.Z.locals&&x.Z.locals;const f=JSON.parse('[{"title":"折线图","en":"line","children":[]},{"title":"柱状图","en":"bar","children":[]},{"title":"饼图","en":"pie","children":[{"title":"简单的饼图","en":"PieSimple","icon":"PieSimple.webp"}]},{"title":"散点图","en":"scatter","children":[]},{"title":"地理坐标/地图","en":"map","children":[]},{"title":"K线图","en":"candlestick","children":[]},{"title":"雷达图","en":"radar","children":[]},{"title":"关系图","en":"graph","children":[]},{"title":"树图","en":"tree","children":[{"title":"从左到右树状图","en":"TreeLR","icon":"TreeLR.png"}]},{"title":"矩形树图","en":"treemap","children":[]},{"title":"旭日图","en":"sunburst","children":[]},{"title":"平行坐标系","en":"parallel","children":[]},{"title":"桑基图","en":"sankey","children":[]},{"title":"漏斗图","en":"funnel","children":[]},{"title":"仪表盘","en":"gauge","children":[]},{"title":"数据区域缩放","en":"dataZoom","children":[]},{"title":"自定义系列","en":"custom","children":[]},{"title":"三维图形","en":"WebGL","children":[]}]');var b=t(280);class w extends i.Component{constructor(e){super(e),this.refMenu=i.createRef()}openPage(e){let n=document.createElement("a");n.setAttribute("target","_blank"),n.setAttribute("href","#/"+e),n.click()}scrollFixex(e){let n=document.getElementById(e).offsetTop-70,t=this.refMenu.current.scrollTop||0;(0,b.animation)((e=>{this.refMenu.current.scrollTop=(n-t)*e+t}),500,(()=>{this.refMenu.current.scrollTop=n}))}render(){return i.createElement("div",{className:"index-view"},i.createElement("header",null,i.createElement("h2",null,"Graph Stuff"),i.createElement("nav",null,i.createElement("a",{href:"https://oi-contrib.github.io/VISLite/",target:"_blank"},"powered by VISLite"),i.createElement("a",{href:"https://github.com/Sabrinayh5y/graph-stuff",target:"_blank"},"查看源码"))),i.createElement("div",{className:"content"},i.createElement("div",{className:"nav"},f.map(((e,n)=>e.children.length>0?i.createElement("h4",{style:{backgroundImage:"url(./icon/"+e.en+".svg)"},key:"nav-"+n,onClick:()=>this.scrollFixex.call(this,e.en)},e.title):null))),i.createElement("div",{className:"menu",ref:this.refMenu},f.map(((e,n)=>e.children.length>0?i.createElement("div",{key:"menu-"+n},i.createElement("h4",{id:e.en},e.title,i.createElement("span",null,e.en)),i.createElement("ul",null,e.children.map(((e,t)=>i.createElement("li",{key:"menu-"+n+"-"+t,onClick:()=>this.openPage.call(this,e.en)},i.createElement("div",{style:{backgroundImage:"url(./examples/"+e.icon+")"}}),i.createElement("h6",null,e.title)))))):null)))))}}const k=w},721:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),r=t.n(i),l=t(645),a=t.n(l),o=t(667),d=t.n(o),c=new URL(t(702),t.b),h=a()(r()),s=d()(c);h.push([e.id,".index-view{height:100vh}.index-view>header{background-color:rgba(255,255,255,.85);box-shadow:0 0 6px 0px gray;position:relative}.index-view>header>h2{font-size:20px;line-height:50px;padding-left:60px;background-image:url("+s+");background-repeat:no-repeat;background-position:10px center;background-size:auto 80%;font-family:cursive}.index-view>header>nav{position:fixed;right:0;top:0;line-height:50px}.index-view>header>nav>a{margin-right:20px;color:#2196f3;font-size:14px;text-decoration:underline}.index-view>header>nav>a:hover{font-weight:800}.index-view>.content{display:flex;height:calc(100% - 50px)}.index-view>.content>div{overflow:auto}.index-view>.content>div.nav{flex-basis:200px;flex-shrink:0;background-color:#fff;padding:10px 0}.index-view>.content>div.nav>h4{line-height:45px;height:45px;color:#6e7079;padding-left:50px;font-weight:200;background-size:20px auto;background-repeat:no-repeat;background-position:20px center;cursor:pointer}.index-view>.content>div.nav>h4:hover{border-left:3px solid #5470c6;background-color:rgba(193,191,191,.33)}.index-view>.content>div.menu{flex-grow:1;padding:30px;background-color:#f3f4fa}.index-view>.content>div.menu>div>h4{margin-bottom:20px;padding-bottom:10px;font-weight:normal;color:#464646;font-size:20px;border-bottom:1px solid #e1e5f2}.index-view>.content>div.menu>div>h4>span{font-size:16px;padding-left:5px;color:#949cb1;font-weight:200}.index-view>.content>div.menu>div>ul>li{display:inline-block;margin-bottom:10px;padding:0 10px}.index-view>.content>div.menu>div>ul>li:hover{text-decoration:underline}.index-view>.content>div.menu>div>ul>li:hover>div{background-size:110% auto}.index-view>.content>div.menu>div>ul>li:hover>h6{font-weight:400}.index-view>.content>div.menu>div>ul>li>div{width:175px;height:133px;background-position:center center;background-size:100% auto;background-repeat:no-repeat;cursor:pointer;transition:.3s ease-in-out;border-radius:5px;box-shadow:0 0 20px rgba(0,0,0,.05)}.index-view>.content>div.menu>div>ul>li>h6{text-align:center;line-height:40px;font-size:14px;font-weight:200}",""]);const u=h},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},702:(e,n,t)=>{e.exports=t.p+"f17868f75e.png"}}]);