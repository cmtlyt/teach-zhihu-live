import{S as f,_ as C}from"./index-wFWzPhku.js";import{d as g,o as u,e as p,j as e,q as i,a4 as D,a5 as I,c as v,n as m,h as x,K as B,z as c,u as k,r as M,B as A,G as E,F as O,N as T,l as Z}from"./vue-vendor-ivTqAV-v.js";/* empty css              */import{_ as z,g as L,i as j,I as R,L as G,S as J,a as K,B as Q,b as U,c as X,d as Y,D as tt,e as et}from"./comp-vendor-vYC1rHni.js";const nt="/teach-zhihu-live/assets/banner-gJRwvCpv.jpg",h=t=>(D("data-v-fd0c0961"),t=t(),I(),t),st={class:"navBox"},ot={class:"navList"},it={class:"mainLogo"},at={href:"#"},ct={class:"mainMenu"},lt={class:"list"},rt=h(()=>e("li",{class:"item"},[e("a",{href:"#"},"首页")],-1)),dt=h(()=>e("li",{class:"item"},[e("a",{href:"#"},"知乎知学堂")],-1)),_t={class:"item"},ut={class:"icon"},ht=h(()=>e("span",{class:"text"},[e("a",{href:"#"},"发现")],-1)),mt=h(()=>e("li",{class:"item"},[e("a",{href:"#"},"等你来答")],-1)),pt={class:"searchBoxAndQouestion"},ft={class:"searchbox"},vt=h(()=>e("input",{type:"text",class:"input"},null,-1)),gt={class:"search"},kt={href:"#"},$t=h(()=>e("div",{class:"questionbox"},[e("a",{href:"#"},[e("div",{class:"question"},"提问")])],-1)),wt={class:"personal"},bt={class:"list"},yt={class:"item"},St={class:"btn"},Ct={class:"img"},Dt=h(()=>e("div",{class:"text"},"消息",-1)),It={class:"item"},xt={class:"btn"},zt={class:"img"},Lt=h(()=>e("div",{class:"text"},"私信",-1)),jt={class:"item"},Nt={class:"btn"},Bt={class:"headbox"},Mt=g({__name:"Navbar",setup(t){return(n,o)=>(u(),p("div",st,[e("ul",ot,[e("li",it,[e("a",at,[i(f,{name:"logo"})])]),e("li",ct,[e("ul",lt,[rt,dt,e("li",_t,[e("div",ut,[i(f,{name:"双四星",class:"img"})]),ht]),mt])]),e("li",pt,[e("div",ft,[vt,e("div",gt,[e("a",kt,[i(f,{name:"search",class:"img"})])])]),$t]),e("li",wt,[e("ul",bt,[e("li",yt,[e("button",St,[e("div",Ct,[i(f,{name:"消息",class:"icon"})]),Dt])]),e("li",It,[e("button",xt,[e("div",zt,[i(f,{name:"私信",class:"icon"})]),Lt])]),e("li",jt,[e("button",Nt,[e("div",Bt,[i(f,{name:"头像",class:"head"})])])])])])])]))}}),Pt=C(Mt,[["__scopeId","data-v-fd0c0961"]]),qt=g({name:"IconHeartFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:n}){const o=L("icon"),a=v(()=>[o,`${o}-heart-fill`,{[`${o}-spin`]:t.spin}]),r=v(()=>{const s={};return t.size&&(s.fontSize=j(t.size)?`${t.size}px`:t.size),t.rotate&&(s.transform=`rotate(${t.rotate}deg)`),s});return{cls:a,innerStyle:r,onClick:s=>{n("click",s)}}}}),Ft=["stroke-width","stroke-linecap","stroke-linejoin"],Vt=e("path",{d:"M24 10.541c4.35-4.522 11.405-4.814 15.756-.292 4.35 4.522 4.15 11.365.448 17.135C36.153 33.7 28 41.5 24 42c-4-.5-12.152-8.3-16.204-14.616-3.702-5.77-3.902-12.613.448-17.135C12.595 5.727 19.65 6.019 24 10.54Z",fill:"currentColor",stroke:"none"},null,-1),Wt=[Vt];function Ht(t,n,o,a,r,_){return u(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:m(t.cls),style:x(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>t.onClick&&t.onClick(...s))},Wt,14,Ft)}var b=z(qt,[["render",Ht]]);const At=Object.assign(b,{install:(t,n)=>{var o;const a=(o=n==null?void 0:n.iconPrefix)!=null?o:"";t.component(a+b.name,b)}}),Et=g({name:"IconMessage",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:n}){const o=L("icon"),a=v(()=>[o,`${o}-message`,{[`${o}-spin`]:t.spin}]),r=v(()=>{const s={};return t.size&&(s.fontSize=j(t.size)?`${t.size}px`:t.size),t.rotate&&(s.transform=`rotate(${t.rotate}deg)`),s});return{cls:a,innerStyle:r,onClick:s=>{n("click",s)}}}}),Ot=["stroke-width","stroke-linecap","stroke-linejoin"],Tt=e("path",{d:"M15 20h18m-18 9h9M7 41h17.63C33.67 41 41 33.67 41 24.63V24c0-9.389-7.611-17-17-17S7 14.611 7 24v17Z"},null,-1),Zt=[Tt];function Rt(t,n,o,a,r,_){return u(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:m(t.cls),style:x(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>t.onClick&&t.onClick(...s))},Zt,14,Ot)}var y=z(Et,[["render",Rt]]);const Gt=Object.assign(y,{install:(t,n)=>{var o;const a=(o=n==null?void 0:n.iconPrefix)!=null?o:"";t.component(a+y.name,y)}}),Jt=g({name:"IconSend",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:n}){const o=L("icon"),a=v(()=>[o,`${o}-send`,{[`${o}-spin`]:t.spin}]),r=v(()=>{const s={};return t.size&&(s.fontSize=j(t.size)?`${t.size}px`:t.size),t.rotate&&(s.transform=`rotate(${t.rotate}deg)`),s});return{cls:a,innerStyle:r,onClick:s=>{n("click",s)}}}}),Kt=["stroke-width","stroke-linecap","stroke-linejoin"],Qt=e("path",{d:"m14 24-7-5V7l34 17L7 41V29l7-5Zm0 0h25","stroke-miterlimit":"3.864"},null,-1),Ut=[Qt];function Xt(t,n,o,a,r,_){return u(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:m(t.cls),style:x(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>t.onClick&&t.onClick(...s))},Ut,14,Kt)}var S=z(Jt,[["render",Xt]]);const Yt=Object.assign(S,{install:(t,n)=>{var o;const a=(o=n==null?void 0:n.iconPrefix)!=null?o:"";t.component(a+S.name,S)}}),$=t=>(D("data-v-7ac88332"),t=t(),I(),t),te={class:"item-box"},ee={class:"item-title"},ne={href:"#",class:"title"},se={class:"item-content"},oe={class:"item-actions"},ie=$(()=>e("span",null,"赞同",-1)),ae=$(()=>e("span",null,"分享",-1)),ce=$(()=>e("span",null,"收藏",-1)),le=$(()=>e("span",null,"喜欢",-1)),re=g({__name:"StoryItem",props:{title:{},content:{},date:{},author:{},tags:{}},setup(t){return(n,o)=>{const a=R,r=G,_=J,s=K,l=Q,d=U,w=Gt,q=Yt,F=X,V=At,W=Y,N=tt,H=et;return u(),p("div",te,[e("div",ee,[e("a",ne,B(n.title),1)]),e("div",se,[e("span",null,B(n.content),1),i(_,null,{default:c(()=>[i(r,{href:"link"},{icon:c(()=>[i(a)]),default:c(()=>[k(" 阅读全文 ")]),_:1})]),_:1})]),e("div",oe,[i(_,null,{default:c(()=>[i(l,{type:"primary"},{icon:c(()=>[i(s)]),default:c(()=>[ie]),_:1}),i(l,{type:"primary"},{icon:c(()=>[i(d)]),_:1}),i(l,{type:"text"},{icon:c(()=>[i(w)]),default:c(()=>[k(" 1,099条评论 ")]),_:1}),i(l,{type:"text"},{icon:c(()=>[i(q)]),default:c(()=>[ae]),_:1}),i(l,{type:"text"},{icon:c(()=>[i(F)]),default:c(()=>[ce]),_:1}),i(l,{type:"text"},{icon:c(()=>[i(V)]),default:c(()=>[le]),_:1}),i(H,{position:"bottom",class:"darpdown"},{content:c(()=>[i(N,null,{default:c(()=>[k("举报")]),_:1}),i(N,null,{default:c(()=>[k("不感兴趣")]),_:1})]),default:c(()=>[i(l,{type:"text"},{icon:c(()=>[i(W)]),_:1})]),_:1})]),_:1})])])}}}),de=C(re,[["__scopeId","data-v-7ac88332"]]),P=t=>(D("data-v-2899a395"),t=t(),I(),t),_e={class:"box"},ue={class:"main",ref:"listRef"},he={class:"left-main"},me=P(()=>e("div",{class:"img"},[e("img",{src:nt,alt:""})],-1)),pe={class:"list-box"},fe={class:"tab"},ve=P(()=>e("div",{class:"right-main"},null,-1)),ge=g({__name:"home",setup(t){const n=M(0),o=M([{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]},{title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:new Date,author:"",tags:[""]}]),a=s=>n.value!==s?"tab-item":"tab-item tab-item-active",r=()=>{const{clientHeight:s,scrollTop:l,scrollHeight:d}=document.documentElement;s+l>d-20&&_()},_=()=>{let s=new Array(10);s.fill({title:"为什么足浴按摩技师老是问客人是哪里人？",content:"小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…",date:"",author:"",tags:""}),o.value.push(...s)};return A(()=>{window.addEventListener("scroll",r)}),E(()=>{window.removeEventListener("scroll",r)}),(s,l)=>(u(),p("div",_e,[i(Pt,{class:"nav-bar"}),e("div",ue,[e("div",he,[me,e("div",pe,[e("ul",fe,[e("li",{class:m(a(0)),onClick:l[0]||(l[0]=d=>n.value=0)},"关注",2),e("li",{class:m(a(1)),onClick:l[1]||(l[1]=d=>n.value=1)},"推荐",2),e("li",{class:m(a(2)),onClick:l[2]||(l[2]=d=>n.value=2)},"热榜",2),e("li",{class:m(a(3)),onClick:l[3]||(l[3]=d=>n.value=3)},"视频",2)]),(u(!0),p(O,null,T(o.value,(d,w)=>(u(),Z(de,{title:d.title,content:d.content,date:d.date,author:d.author,tags:d.tags,key:w},null,8,["title","content","date","author","tags"]))),128))])]),ve],512)]))}}),ye=C(ge,[["__scopeId","data-v-2899a395"]]);export{ye as default};