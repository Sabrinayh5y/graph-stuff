"use strict";(self.webpackChunkgraph_stuff=self.webpackChunkgraph_stuff||[]).push([[299],{299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var i=n(294),o=n(379),r=n.n(o),a=n(795),l=n.n(a),c=n(569),s=n.n(c),f=n(565),h=n.n(f),g=n(216),d=n.n(g),u=n(589),m=n.n(u),k=n(602),x={};x.styleTagTransform=m(),x.setAttributes=h(),x.insert=s().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=d();r()(k.Z,x);k.Z&&k.Z.locals&&k.Z.locals;var y=n(280);let v=function(e,t){let n;for(n in t)try{e[n]=t[n]}catch(e){throw new Error("Illegal property value！")}return e};function b(e,t){let n,i,o,r,a,l,c=v({"mark-direction":"outer","value-position":"mark",color:"black",begin:0,deg:2*Math.PI,"font-size":12,"font-weight":400,"font-rotate":!0,"small-mark":!1},t),s=c.value;e.config({lineWidth:1,fillStyle:c.color,strokeStyle:c.color,fontSize:c["font-size"],fontWeight:c["font-weight"],textAlign:"center",textBaseline:"middle",lineDash:[]}),e.beginPath().arc(c.cx,c.cy,c.radius,c.begin,c.deg).stroke();let f="mark"==c["value-position"]?s.length:s.length+1,h=c.deg/(f-1);for(n=0;n<f;n++)if(a=(0,y.rotate)(c.cx,c.cy,c.begin+n*h,c.cx+c.radius,c.cy),l=(0,y.rotate)(c.cx,c.cy,c.begin+n*h,c.cx+c.radius+(c["small-mark"]?10:4)*("inner"==c["mark-direction"]?-1:1),c.cy),e.config({lineWidth:c["small-mark"]?2:1}).beginPath().moveTo(a[0],a[1]).lineTo(l[0],l[1]).stroke(),e.config({lineWidth:1}),c["small-mark"]&&n<f-1)for(i=1;i<=4;i++)a=(0,y.rotate)(c.cx,c.cy,c.begin+(n+.2*i)*h,c.cx+c.radius,c.cy),l=(0,y.rotate)(c.cx,c.cy,c.begin+(n+.2*i)*h,c.cx+c.radius+4*("inner"==c["mark-direction"]?-1:1),c.cy),e.beginPath().moveTo(a[0],a[1]).lineTo(l[0],l[1]).stroke();for(n=0;n<s.length;n++)o=c.begin+h*(n+("mark"==c["value-position"]?0:.5)),r=o%(2*Math.PI),a=(0,y.rotate)(c.cx,c.cy,o,c.cx+c.radius+(c["font-rotate"]&&!c["small-mark"]?15:25)*("inner"==c["mark-direction"]?-1:1),c.cy),c["font-rotate"]?e.fillText(s[n],a[0],a[1],o+(r>0&&r<Math.PI||r>-2*Math.PI&&r<-Math.PI?.5*-Math.PI:.5*Math.PI)):e.fillText(s[n],a[0],a[1]);return e}class p extends i.Component{constructor(e){super(e),this.refContent=i.createRef()}render(){return i.createElement("div",{className:"GaugeBarometer-view"},i.createElement("div",{ref:this.refContent,className:"content"}))}componentDidMount(){let e,t=new y.Canvas(this.refContent.current).config({shadowColor:"#555555"}),n=3*Math.PI/4,i=1.5*Math.PI,o=58.06,r=250,a=250,l=function(e){t.clearRect(0,0,500,500);let o=n+1.5*Math.PI*e*.01;b(t,{cx:r,cy:a,radius:210,value:[0,10,20,30,40,50,60,70,80,90,100],begin:n,deg:i,"font-size":20,color:"#e93f33","font-rotate":!1,"font-weight":800,"small-mark":!0}),b(t,{cx:r,cy:a,radius:190,value:[0,10,20,30,40,50,60],begin:n,deg:i,color:"#000000","font-size":20,"mark-direction":"inner","font-rotate":!1,"font-weight":800,"small-mark":!0});let l=(0,y.rotate)(r,a,o,470,249),c=(0,y.rotate)(r,a,o,470,251),s=(0,y.rotate)(r,a,o,230,254),f=(0,y.rotate)(r,a,o,220,a),h=(0,y.rotate)(r,a,o,230,246);t.config({fontSize:14,fontWeight:200,fillStyle:"black",textAlign:"center",textBaseline:"middle"}).fillText("PLP",r,130).fillCircle(r,a,7).config({lineWidth:2}).strokeCircle(r,a,11).beginPath().moveTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(s[0],s[1]).lineTo(f[0],f[1]).lineTo(h[0],h[1]).fill().config({fontSize:34,fontWeight:800,fillStyle:"#555555"}).fillText(e,r,330)};l(o),setInterval((function(){e=100*Math.random(),(0,y.animation)((function(t){l&&l(+(o+(e-o)*t).toFixed(2))}),300,(function(){o=e}))}),1e3)}}const P=p},602:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,".GaugeBarometer-view .content{width:500px;height:500px;margin:calc(50vh - 250px) auto}",""]);const l=a}}]);