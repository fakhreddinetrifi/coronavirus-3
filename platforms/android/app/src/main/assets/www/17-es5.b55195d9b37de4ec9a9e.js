(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JLuJ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),r=u("SVse"),i=u("MKJQ"),b=u("sZkV"),a=u("mrSG"),s=u("o2p0"),c=u("MO+k");class h{constructor(l,n){this.coronaServ=l,this.loadingCtrl=n,this.info=null}ngOnInit(){this.presentLoading().then(()=>{this.coronaServ.getAll().subscribe(l=>{this.info=l,this.createBarChart(this.info),this.loadingCtrl.dismiss()},l=>console.log(l),()=>this.loadingCtrl.dismiss())})}createBarChart(l){this.bars=new c.Chart(this.barChart.nativeElement,{type:"doughnut",data:{labels:["Cases Confirmed","Deaths","Recovered"],datasets:[{label:"# of Votes",data:[l.cases,l.deaths,l.recovered],backgroundColor:["rgba(194,0,0)","rgba(0,0,0)","rgba(0,164,91)"]}]},options:{responsive:!0,maintainAspectRatio:!1}})}doRefresh(l){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),l.target.complete()},2e3)}presentLoading(){return a.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingCtrl.create({message:"Please wait..."});yield l.present()}))}}var p=e.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Ib(0,[e.Bb(0,r.d,[e.s]),e.Eb(671088640,1,{barChart:0}),(l()(),e.pb(2,0,null,null,10,"ion-header",[],null,null,null,i.U,i.m)),e.ob(3,49152,null,0,b.y,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(4,0,null,0,8,"ion-toolbar",[],null,null,null,i.pb,i.H)),e.ob(5,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.M,i.e)),e.ob(7,49152,null,0,b.i,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,1,"ion-menu-button",[],null,null,null,i.db,i.v)),e.ob(9,49152,null,0,b.O,[e.h,e.k,e.x],null,null),(l()(),e.pb(10,0,null,0,2,"ion-title",[],null,null,null,i.ob,i.G)),e.ob(11,49152,null,0,b.ub,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,[" Global Coronavirus information "])),(l()(),e.pb(13,0,null,null,51,"ion-content",[],null,null,null,i.S,i.k)),e.ob(14,49152,null,0,b.r,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.pb(15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.doRefresh(u)&&e),e}),i.fb,i.w)),e.ob(16,49152,null,0,b.X,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,1,"ion-refresher-content",[["close-duration","2000ms"],["pullingIcon","arrow-dropdown"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,i.eb,i.x)),e.ob(18,49152,null,0,b.Y,[e.h,e.k,e.x],{pullingIcon:[0,"pullingIcon"],refreshingSpinner:[1,"refreshingSpinner"],refreshingText:[2,"refreshingText"]},null),(l()(),e.pb(19,0,null,0,12,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,6,"ion-card-header",[],null,null,null,i.O,i.h)),e.ob(21,49152,null,0,b.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,4,"ion-card-title",[],null,null,null,i.P,i.i)),e.ob(23,49152,null,0,b.n,[e.h,e.k,e.x],null,null),(l()(),e.pb(24,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,i.nb,i.F)),e.ob(25,49152,null,0,b.rb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Gb(-1,0,["Cases Confirmed"])),(l()(),e.pb(27,0,null,null,4,"ion-card-content",[],null,null,null,i.N,i.g)),e.ob(28,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(29,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),e.Gb(30,null,["",""])),e.Cb(31,1),(l()(),e.pb(32,0,null,0,10,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.pb(33,0,null,null,4,"ion-card-header",[],null,null,null,i.O,i.h)),e.ob(34,49152,null,0,b.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(35,0,null,0,2,"ion-card-title",[],null,null,null,i.P,i.i)),e.ob(36,49152,null,0,b.n,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,[" Deaths "])),(l()(),e.pb(38,0,null,null,4,"ion-card-content",[],null,null,null,i.N,i.g)),e.ob(39,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(40,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),e.Gb(41,null,["",""])),e.Cb(42,1),(l()(),e.pb(43,0,null,0,12,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.pb(44,0,null,null,6,"ion-card-header",[],null,null,null,i.O,i.h)),e.ob(45,49152,null,0,b.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(46,0,null,0,4,"ion-card-title",[],null,null,null,i.P,i.i)),e.ob(47,49152,null,0,b.n,[e.h,e.k,e.x],null,null),(l()(),e.pb(48,0,null,0,2,"ion-text",[["color","success"]],null,null,null,i.nb,i.F)),e.ob(49,49152,null,0,b.rb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Gb(-1,0,["Recovered"])),(l()(),e.pb(51,0,null,null,4,"ion-card-content",[],null,null,null,i.N,i.g)),e.ob(52,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(53,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),e.Gb(54,null,["",""])),e.Cb(55,1),(l()(),e.pb(56,0,null,0,8,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.pb(57,0,null,null,4,"ion-card-header",[],null,null,null,i.O,i.h)),e.ob(58,49152,null,0,b.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(59,0,null,0,2,"ion-card-title",[],null,null,null,i.P,i.i)),e.ob(60,49152,null,0,b.n,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Population infected with coronavirus"])),(l()(),e.pb(62,0,null,null,2,"ion-card-content",[["style","position: relative; height: 40vh"]],null,null,null,i.N,i.g)),e.ob(63,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(64,0,[[1,0],["barChart",1]],0,0,"canvas",[],null,null,null,null,null))],(function(l,n){l(n,3,0,!0),l(n,14,0,!0),l(n,18,0,"arrow-dropdown","circles","Refreshing..."),l(n,25,0,"danger"),l(n,49,0,"success")}),(function(l,n){var u=n.component,o=e.Hb(n,30,0,l(n,31,0,e.Ab(n,0),null==u.info?null:u.info.cases));l(n,30,0,o);var t=e.Hb(n,41,0,l(n,42,0,e.Ab(n,0),null==u.info?null:u.info.deaths));l(n,41,0,t);var r=e.Hb(n,54,0,l(n,55,0,e.Ab(n,0),null==u.info?null:u.info.recovered));l(n,54,0,r)}))}var f=e.lb("app-tab1",h,(function(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-tab1",[],null,null,null,d,p)),e.ob(1,114688,null,0,h,[s.a,b.Ab],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=u("s7LF"),x=u("iInd");u.d(n,"Tab1PageModuleNgFactory",(function(){return k}));var k=e.mb(o,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[t.a,f]],[3,e.j],e.v]),e.yb(4608,r.l,r.k,[e.s,[2,r.t]]),e.yb(4608,b.a,b.a,[e.x,e.g]),e.yb(4608,b.Cb,b.Cb,[b.a,e.j,e.p]),e.yb(4608,b.Fb,b.Fb,[b.a,e.j,e.p]),e.yb(4608,g.g,g.g,[]),e.yb(1073742336,r.b,r.b,[]),e.yb(1073742336,b.yb,b.yb,[]),e.yb(1073742336,g.f,g.f,[]),e.yb(1073742336,g.a,g.a,[]),e.yb(1073742336,x.n,x.n,[[2,x.s],[2,x.m]]),e.yb(1073742336,o,o,[]),e.yb(1024,x.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);