"use strict";(self.webpackChunkgraph_stuff=self.webpackChunkgraph_stuff||[]).push([[442],{442:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(294),o=n(379),r=n.n(o),s=n(795),l=n.n(s),a=n(569),d=n.n(a),c=n(565),h=n.n(c),f=n(216),p=n.n(f),u=n(589),g=n.n(u),y=n(712),C={};C.styleTagTransform=g(),C.setAttributes=h(),C.insert=d().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=p();r()(y.Z,C);y.Z&&y.Z.locals&&y.Z.locals;var k=n(280);let v;class b extends i.Component{constructor(e){super(e),this.refContent=i.createRef()}render(){return i.createElement("div",{className:"TreeLR-view"},i.createElement("div",{ref:this.refContent,className:"content",onClick:e=>this.doClick.call(this,e)}))}componentDidMount(){fetch("./data/flare.json").then((e=>{if(200===e.status)return e.json()})).then((e=>{this.data=e,(0,k.resizeObserver)(this.refContent.current,(0,k.throttle)((()=>{this.doResize()}),{keep:!0}))}))}doResize(){v=0;let e,t=this.refContent.current,n=t.clientWidth,i=t.clientHeight;this.painter=new k.Canvas(t).config({fontSize:9}),this.treeLayout=new k.TreeLayout({id:function(e){return e.name+"-"+v++}}).setOption({type:"rect",direction:"LR",x:10,y:.5*i,width:n-140,height:i-20}).bind(this.data,(t=>{if(this.painter){this.painter.clearRect(0,0,n,i),this.painter.setRegion("").config({strokeStyle:"#cccccc"});for(let n in t.node)if(t.node[n].show&&n!=t.root){e=t.node[n].pid;let i=.5*(t.node[n].left-t.node[e].left);this.painter.beginPath().moveTo(t.node[n].left,t.node[n].top).bezierCurveTo(t.node[n].left-i,t.node[n].top,t.node[e].left+i,t.node[e].top,t.node[e].left,t.node[e].top).stroke()}this.painter.config({strokeStyle:"#b0c4de"});for(let e in t.node)t.node[e].show&&(!t.node[e].isOpen&&t.node[e].children.length>0?this.painter.config({fillStyle:"#b0c4de"}):this.painter.config({fillStyle:"#ffffff"}),this.painter.setRegion(e).fullCircle(t.node[e].left,t.node[e].top,4),this.painter.setRegion("").config({fillStyle:"black"}).fillText(e.replace(/\-\d+$/,""),t.node[e].left+10,t.node[e].top))}}))}doClick(e){this.painter&&this.painter.getRegion(e.pageX,e.pageY).then((e=>{e&&(v=0,this.treeLayout&&this.treeLayout.toggleNode(e))}))}}const m=b},712:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(81),o=n.n(i),r=n(645),s=n.n(r)()(o());s.push([e.id,".TreeLR-view .content{width:100vw;height:1600px}",""]);const l=s}}]);