!function(){function e(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,o,r,l,a=[],d=!0,m=!1;try{if(r=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;d=!1}else for(;!(d=(n=r.call(i)).done)&&(a.push(n.value),a.length!==t);d=!0);}catch(e){m=!0,o=e}finally{try{if(!d&&null!=i.return&&(l=i.return(),Object(l)!==l))return}finally{if(m)throw o}}return a}}(e,i)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}System.register(["./user-legacy-isShj9G1.js","./vue-vendor-legacy-qAZr8s2-.js","./SvgIcon-legacy-xRXHPZyS.js","./comp-vendor-legacy-snPkGm6z.js"],(function(t,i){"use strict";var n,o,r,l,a,d,m,s,u,c,g,f,h,p;return{setters:[function(e){n=e.l},function(e){o=e.d,r=e.a4,l=e.r,a=e.a,d=e.e,m=e.j,s=e.I,u=e.a5,c=e.q,g=e.a6,f=e.o},function(e){h=e.S},function(e){p=e.M}],execute:function(){var i=document.createElement("style");i.textContent="input{outline:none}.box{display:flex;flex-direction:column;height:68.8rem;margin:auto;text-align:center;width:88rem}.header{flex:20%;line-height:13.6rem}.header h2{color:#4937eb;font-family:Courier New,Courier,monospace;font-size:6.4rem;font-weight:bolder;letter-spacing:1.2rem}.main{background-color:#fff;box-sizing:border-box;display:flex;flex:80%}.main .leftmain{border-right:.1rem solid #ccc;display:flex;flex:40%;flex-direction:column;height:100%}.main .leftmain .top{display:flex;flex:75%;flex-direction:column;padding-top:9rem;text-align:center}.main .leftmain .top .one{flex:10%;font-weight:700}.main .leftmain .top .two{flex:10%}.main .leftmain .top .three{flex:10%;font-weight:700}.main .leftmain .top .img{flex:60%}.main .leftmain .bottom{flex:25%}.main .leftmain .bottom ul{display:flex;height:80%;justify-content:space-around;margin-top:2.2rem}.main .leftmain .bottom ul li{border:.1rem solid #ccc;border-radius:2rem;display:block;flex-basis:28%;font-size:1.2rem;height:3rem;line-height:3rem}.main .rightmain{display:flex;flex:60%;flex-direction:column;height:100%}.main .rightmain .top{flex:60%}.main .rightmain .bottom{flex:40%}.bg{background-color:#aec7dd;height:100vh}.rightmain{color:#666;font-size:1.4rem;width:100%}.rightmain .logway{display:flex;flex-direction:column;width:100%}.rightmain .logway ul{display:flex;width:60%}.rightmain .logway ul li{color:#444;flex:1;font-size:1.8rem;height:6rem;line-height:6rem}.rightmain #CodeLogin{margin:0 auto;width:80%}.rightmain #CodeLogin div{border-bottom:.1rem solid #ccc;display:flex;font-size:1.6rem;height:5rem;line-height:5rem;margin-top:1rem}.rightmain #CodeLogin div button{flex:30%;text-align:left}.rightmain #CodeLogin div input{flex:70%}.rightmain #CodeLogin div #getCode{text-align:right}.rightmain #CodeLogin div #getSpeechCode{color:#4937eb;display:block;float:right}.rightmain #CodeLogin #loginorreg{background-color:#4937eb;border:none;border-radius:.5rem;color:#fff;height:4.2rem;line-height:4.2rem;margin-top:1.5rem;width:80%}.rightmain #PasswordLogin{margin:0 auto;width:80%}.rightmain #PasswordLogin div{border-bottom:.1rem solid #ccc;display:flex;font-size:1.6rem;height:5rem;line-height:5rem;margin-top:1rem}.rightmain #PasswordLogin div button{flex:30%;text-align:left}.rightmain #PasswordLogin div input{flex:70%}.rightmain #PasswordLogin div #overseasLogin{color:#4937eb;float:left}.rightmain #PasswordLogin div #forgetP{float:right}.rightmain #PasswordLogin #loginorreg{background-color:#4937eb;border:none;border-radius:.5rem;color:#fff;height:4.2rem;line-height:4.2rem;margin-top:1.5rem;width:80%}.bottom ul{display:flex;justify-content:space-around;margin:4rem auto 0;width:70%}.bottom ul li{background-color:#eee;border-radius:50%;flex-basis:4rem;height:4rem;line-height:4rem}.bottom ul li img{display:block;margin:.8rem auto;width:2.5rem}.bottom span{color:#999;display:block;margin:3rem auto;width:80%}\n",document.head.appendChild(i);var b={class:"bg"},v={class:"box"},y=m("div",{class:"header"},[m("h2",null,"知乎")],-1),x={class:"main"},w=g('<div class="leftmain"><div class="top"><h3 class="one">打开知乎App</h3><span class="two">在「我的页」右上角打开扫一扫</span><div class="img"><img src="" alt=""></div><span class="three">其他扫码方式：微信</span></div><div class="bottom"><ul><li>下载知乎App</li><li>开通机构号</li><li>无障碍模式</li></ul></div></div>',1),C={class:"rightmain"},L={class:"top"},k={key:0,id:"CodeLogin"},j=[g('<div><button id="choseLocation">中国+86</button><input type="text" placeholder="请输入手机号"></div><div><input type="text" placeholder="获取短信验证码"><button id="getCode">获取短信验证码</button></div><div style="border:none;display:block;"><button id="getSpeechCode">获取语音验证码</button></div><button id="loginorreg">登录/注册</button>',4)],P={key:1,id:"PasswordLogin"},S=m("div",{style:{border:"none",display:"block"}},[m("button",{id:"overseasLogin"},"海外手机登录"),m("button",{id:"forgetP"},"忘记密码")],-1),A={class:"bottom"},z=m("span",null," 未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》 ",-1);t("default",o({__name:"login",setup:function(t){var i=r(),o=l(!0),g=a({name:"",password:""});function I(){n(g).then((function(e){e.data.success&&p.success({content:"登录成功",onClose:function(){return i.push("/")}})})).catch((function(t){var i=e(t,1)[0];p.error(i.message)}))}var O=function(){o.value=!0},U=function(){o.value=!1};return function(e,t){return f(),d("div",b,[m("div",v,[y,m("div",x,[w,m("div",C,[m("div",L,[m("div",{class:"logway"},[m("ul",null,[m("li",{role:"button",onClick:O},"验证码登录"),m("li",{role:"button",onClick:U},"密码登录")])]),o.value?(f(),d("div",k,j)):(f(),d("div",P,[m("div",null,[s(m("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.name=e}),type:"text",placeholder:"手机号或邮箱"},null,512),[[u,g.name]])]),m("div",null,[s(m("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.password=e}),type:"text",placeholder:"密码"},null,512),[[u,g.password]])]),S,m("button",{id:"loginorreg",onClick:I},"登录/注册")]))]),m("div",A,[m("ul",null,[m("li",null,[c(h,{name:"QQ",alt:""})]),m("li",null,[c(h,{name:"wx",alt:""})]),m("li",null,[c(h,{name:"weibo",alt:""})])]),z])])])])])}}}))}}}))}();
