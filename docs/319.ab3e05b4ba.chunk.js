"use strict";(self.webpackChunkgraph_stuff=self.webpackChunkgraph_stuff||[]).push([[319],{319:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(294),o=n(379),r=n.n(o),s=n(795),l=n.n(s),a=n(569),d=n.n(a),h=n(565),f=n.n(h),c=n(216),p=n.n(c),u=n(589),g=n.n(u),y=n(352),v={};v.styleTagTransform=g(),v.setAttributes=f(),v.insert=d().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p();r()(y.Z,v);y.Z&&y.Z.locals&&y.Z.locals;var C=n(280);class k extends i.Component{constructor(e){super(e),this.refContent=i.createRef()}render(){return i.createElement("div",{className:"TreeTB-view"},i.createElement("div",{ref:this.refContent,className:"content",onClick:e=>this.doClick.call(this,e)}))}componentDidMount(){fetch("./data/family.json").then((e=>{if(200===e.status)return e.json()})).then((e=>{this.data=e,(0,C.resizeObserver)(this.refContent.current,(0,C.throttle)((()=>{this.doResize()}),{keep:!0}))}))}doResize(){let e,t=this.refContent.current,n=t.clientWidth,i=t.clientHeight;this.painter=new C.Canvas(t).config({fontSize:9}),this.treeLayout=(new C.TreeLayout).setOption({type:"rect",direction:"TB",x:.5*n,y:50,width:n-140,height:i-100}).bind(this.data,(t=>{if(this.painter){this.painter.clearRect(0,0,n,i),this.painter.setRegion("").config({strokeStyle:"red"});for(let n in t.node)if(t.node[n].show&&n!=t.root){e=t.node[n].pid;let i=.5*(t.node[n].top-t.node[e].top);this.painter.beginPath().moveTo(t.node[n].left,t.node[n].top).bezierCurveTo(t.node[n].left,t.node[n].top-i,t.node[e].left,t.node[e].top+i,t.node[e].left,t.node[e].top).stroke()}this.painter.config({strokeStyle:"red",fontSize:12});for(let e in t.node)t.node[e].show&&(!t.node[e].isOpen&&t.node[e].children.length>0?this.painter.config({fillStyle:"red"}):this.painter.config({fillStyle:"#ffffff"}),this.painter.setRegion(e).fullCircle(t.node[e].left,t.node[e].top,10),this.painter.setRegion("").config({fillStyle:"black"}).fillText(e.replace(/\-\d+$/,""),t.node[e].left+15,t.node[e].top))}}))}doClick(e){this.painter&&this.painter.getRegion(e.pageX,e.pageY).then((e=>{e&&this.treeLayout&&this.treeLayout.toggleNode(e)}))}}const m=k},352:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(81),o=n.n(i),r=n(645),s=n.n(r)()(o());s.push([e.id,".TreeTB-view .content{width:100vw;height:100vh}",""]);const l=s}}]);