import{d as Pe,S as ft,U as on,i as cn,B as un,L as _n,r as ae,c as le,w as Te,F as mt,g as Se,V as fn,q as mn,W as En,v as gn}from"./vue-vendor-ivTqAV-v.js";const dn="modulepreload",Nn=function(e){return"/teach-zhihu-live/"+e},We={},On=function(t,n,a){let l=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");l=Promise.all(n.map(r=>{if(r=Nn(r),r in We)return;We[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!a)for(let f=s.length-1;f>=0;f--){const g=s[f];if(g.href===r&&(!i||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const E=document.createElement("link");if(E.rel=i?"stylesheet":dn,i||(E.as="script",E.crossOrigin=""),E.href=r,document.head.appendChild(E),i)return new Promise((f,g)=>{E.addEventListener("load",f),E.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}return l.then(()=>t()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})};/*!
  * shared v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Ie=typeof window<"u",K=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Tn=(e,t,n)=>In({l:e,k:t,s:n}),In=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),k=e=>typeof e=="number"&&isFinite(e),Ln=e=>gt(e)==="[object Date]",Ee=e=>gt(e)==="[object RegExp]",de=e=>L(e)&&Object.keys(e).length===0,w=Object.assign;let Ve;const he=()=>Ve||(Ve=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xe(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const bn=Object.prototype.hasOwnProperty;function ce(e,t){return bn.call(e,t)}const v=Array.isArray,S=e=>typeof e=="function",m=e=>typeof e=="string",h=e=>typeof e=="boolean",R=e=>e!==null&&typeof e=="object",Rn=e=>R(e)&&S(e.then)&&S(e.catch),Et=Object.prototype.toString,gt=e=>Et.call(e),L=e=>{if(!R(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},An=e=>e==null?"":v(e)||L(e)&&e.toString===Et?JSON.stringify(e,null,2):String(e);function Dn(e,t=""){return e.reduce((n,a,l)=>l===0?n+a:n+t+a,"")}function ye(e){let t=e;return()=>++t}function pn(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const me=e=>!R(e)||v(e);function oe(e,t){if(me(e)||me(t))throw new Error("Invalid value");for(const n in e)ce(e,n)&&(me(e[n])||me(t[n])?t[n]=e[n]:oe(e[n],t[n]))}/*!
  * message-compiler v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Cn=/\{([0-9a-zA-Z]+)\}/g;function Pn(e,...t){return t.length===1&&Sn(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(Cn,(n,a)=>t.hasOwnProperty(a)?t[a]:"")}const Sn=e=>e!==null&&typeof e=="object",U={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},hn={[U.EXPECTED_TOKEN]:"Expected token: '{0}'",[U.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[U.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[U.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[U.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[U.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[U.EMPTY_PLACEHOLDER]:"Empty placeholder",[U.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[U.INVALID_LINKED_FORMAT]:"Invalid linked format",[U.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[U.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[U.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[U.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[U.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[U.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function dt(e,t,n={}){const{domain:a,messages:l,args:s}=n,r=Pn((l||hn)[e]||"",...s||[]),i=new SyntaxError(String(r));return i.code=e,t&&(i.location=t),i.domain=a,i}/*!
  * core-base v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function yn(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(he().__INTLIFY_PROD_DEVTOOLS__=!1)}const X=[];X[0]={w:[0],i:[3,0],"[":[4],o:[7]};X[1]={w:[1],".":[2],"[":[4],o:[7]};X[2]={w:[2],i:[3,0],0:[3,0]};X[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};X[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};X[5]={"'":[4,0],o:8,l:[5,0]};X[6]={'"':[4,0],o:8,l:[6,0]};const Fn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function vn(e){return Fn.test(e)}function Mn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function kn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Un(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:vn(t)?Mn(t):"*"+t}function wn(e){const t=[];let n=-1,a=0,l=0,s,r,i,c,_,E,f;const g=[];g[0]=()=>{r===void 0?r=i:r+=i},g[1]=()=>{r!==void 0&&(t.push(r),r=void 0)},g[2]=()=>{g[0](),l++},g[3]=()=>{if(l>0)l--,a=4,g[0]();else{if(l=0,r===void 0||(r=Un(r),r===!1))return!1;g[1]()}};function N(){const I=e[n+1];if(a===5&&I==="'"||a===6&&I==='"')return n++,i="\\"+I,g[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&N())){if(c=kn(s),f=X[a],_=f[c]||f.l||8,_===8||(a=_[0],_[1]!==void 0&&(E=g[_[1]],E&&(i=s,E()===!1))))return;if(a===7)return t}}const Ge=new Map;function Wn(e,t){return R(e)?e[t]:null}function Vn(e,t){if(!R(e))return null;let n=Ge.get(t);if(n||(n=wn(t),n&&Ge.set(t,n)),!n)return null;const a=n.length;let l=e,s=0;for(;s<a;){const r=l[n[s]];if(r===void 0||S(l))return null;l=r,s++}return l}const xn=e=>e,Gn=e=>"",Yn="text",$n=e=>e.length===0?"":Dn(e),jn=An;function Ye(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Hn(e){const t=k(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(k(e.named.count)||k(e.named.n))?k(e.named.count)?e.named.count:k(e.named.n)?e.named.n:t:t}function Bn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Kn(e={}){const t=e.locale,n=Hn(e),a=R(e.pluralRules)&&m(t)&&S(e.pluralRules[t])?e.pluralRules[t]:Ye,l=R(e.pluralRules)&&m(t)&&S(e.pluralRules[t])?Ye:void 0,s=O=>O[a(n,O.length,l)],r=e.list||[],i=O=>r[O],c=e.named||{};k(e.pluralIndex)&&Bn(n,c);const _=O=>c[O];function E(O){const A=S(e.messages)?e.messages(O):R(e.messages)?e.messages[O]:!1;return A||(e.parent?e.parent.message(O):Gn)}const f=O=>e.modifiers?e.modifiers[O]:xn,g=L(e.processor)&&S(e.processor.normalize)?e.processor.normalize:$n,N=L(e.processor)&&S(e.processor.interpolate)?e.processor.interpolate:jn,I=L(e.processor)&&m(e.processor.type)?e.processor.type:Yn,P={list:i,named:_,plural:s,linked:(O,...A)=>{const[F,T]=A;let C="text",D="";A.length===1?R(F)?(D=F.modifier||D,C=F.type||C):m(F)&&(D=F||D):A.length===2&&(m(F)&&(D=F||D),m(T)&&(C=T||C));const d=E(O)(P),V=C==="vnode"&&v(d)&&D?d[0]:d;return D?f(D)(V,C):V},message:E,type:I,interpolate:N,normalize:g,values:w({},r,c)};return P}let ie=null;function Xn(e){ie=e}function zn(e,t,n){ie&&ie.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Jn=qn("function:translate");function qn(e){return t=>ie&&ie.emit(e,t)}const Qn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8},Nt=U.__EXTEND_POINT__,Q=ye(Nt),j={INVALID_ARGUMENT:Nt,INVALID_DATE_ARGUMENT:Q(),INVALID_ISO_DATE_ARGUMENT:Q(),NOT_SUPPORT_NON_STRING_MESSAGE:Q(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Q(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Q(),NOT_SUPPORT_LOCALE_TYPE:Q(),__EXTEND_POINT__:Q()};function H(e){return dt(e,null,void 0)}function Fe(e,t){return t.locale!=null?$e(t.locale):$e(e.locale)}let Oe;function $e(e){if(m(e))return e;if(S(e)){if(e.resolvedOnce&&Oe!=null)return Oe;if(e.constructor.name==="Function"){const t=e();if(Rn(t))throw H(j.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Oe=t}else throw H(j.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw H(j.NOT_SUPPORT_LOCALE_TYPE)}function Zn(e,t,n){return[...new Set([n,...v(t)?t:R(t)?Object.keys(t):m(t)?[t]:[n]])]}function Ot(e,t,n){const a=m(n)?n:ge,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let s=l.__localeChainCache.get(a);if(!s){s=[];let r=[n];for(;v(r);)r=je(s,r,t);const i=v(t)||!L(t)?t:t.default?t.default:null;r=m(i)?[i]:i,v(r)&&je(s,r,!1),l.__localeChainCache.set(a,s)}return s}function je(e,t,n){let a=!0;for(let l=0;l<t.length&&h(a);l++){const s=t[l];m(s)&&(a=er(e,t[l],n))}return a}function er(e,t,n){let a;const l=t.split("-");do{const s=l.join("-");a=tr(e,s,n),l.splice(-1,1)}while(l.length&&a===!0);return a}function tr(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const l=t.replace(/!/g,"");e.push(l),(v(n)||L(n))&&n[l]&&(a=n[l])}return a}const nr="9.8.0",Ne=-1,ge="en-US",He="",Be=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function rr(){return{upper:(e,t)=>t==="text"&&m(e)?e.toUpperCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&m(e)?e.toLowerCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&m(e)?Be(e):t==="vnode"&&R(e)&&"__v_isVNode"in e?Be(e.children):e}}let ar,Tt;function lr(e){Tt=e}let It;function sr(e){It=e}let Lt=null;const or=e=>{Lt=e},cr=()=>Lt;let bt=null;const Ke=e=>{bt=e},ir=()=>bt;let Xe=0;function ur(e={}){const t=S(e.onWarn)?e.onWarn:pn,n=m(e.version)?e.version:nr,a=m(e.locale)||S(e.locale)?e.locale:ge,l=S(a)?ge:a,s=v(e.fallbackLocale)||L(e.fallbackLocale)||m(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l,r=L(e.messages)?e.messages:{[l]:{}},i=L(e.datetimeFormats)?e.datetimeFormats:{[l]:{}},c=L(e.numberFormats)?e.numberFormats:{[l]:{}},_=w({},e.modifiers||{},rr()),E=e.pluralRules||{},f=S(e.missing)?e.missing:null,g=h(e.missingWarn)||Ee(e.missingWarn)?e.missingWarn:!0,N=h(e.fallbackWarn)||Ee(e.fallbackWarn)?e.fallbackWarn:!0,I=!!e.fallbackFormat,b=!!e.unresolving,P=S(e.postTranslation)?e.postTranslation:null,O=L(e.processor)?e.processor:null,A=h(e.warnHtmlMessage)?e.warnHtmlMessage:!0,F=!!e.escapeParameter,T=S(e.messageCompiler)?e.messageCompiler:ar,C=S(e.messageResolver)?e.messageResolver:Tt||Wn,D=S(e.localeFallbacker)?e.localeFallbacker:It||Zn,d=R(e.fallbackContext)?e.fallbackContext:void 0,V=e,ne=R(V.__datetimeFormatters)?V.__datetimeFormatters:new Map,re=R(V.__numberFormatters)?V.__numberFormatters:new Map,z=R(V.__meta)?V.__meta:{};Xe++;const Y={version:n,cid:Xe,locale:a,fallbackLocale:s,messages:r,modifiers:_,pluralRules:E,missing:f,missingWarn:g,fallbackWarn:N,fallbackFormat:I,unresolving:b,postTranslation:P,processor:O,warnHtmlMessage:A,escapeParameter:F,messageCompiler:T,messageResolver:C,localeFallbacker:D,fallbackContext:d,onWarn:t,__meta:z};return Y.datetimeFormats=i,Y.numberFormats=c,Y.__datetimeFormatters=ne,Y.__numberFormatters=re,__INTLIFY_PROD_DEVTOOLS__&&zn(Y,n,z),Y}function ve(e,t,n,a,l){const{missing:s,onWarn:r}=e;if(s!==null){const i=s(e,n,t,l);return m(i)?i:t}else return t}function se(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const te=e=>R(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e),ze=()=>"",x=e=>S(e);function Je(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:l,messageCompiler:s,fallbackLocale:r,messages:i}=e,[c,_]=Le(...t),E=h(_.missingWarn)?_.missingWarn:e.missingWarn,f=h(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn,g=h(_.escapeParameter)?_.escapeParameter:e.escapeParameter,N=!!_.resolvedMessage,I=m(_.default)||h(_.default)?h(_.default)?s?c:()=>c:_.default:n?s?c:()=>c:"",b=n||I!=="",P=Fe(e,_);g&&_r(_);let[O,A,F]=N?[c,P,i[P]||{}]:Rt(e,c,P,r,f,E),T=O,C=c;if(!N&&!(m(T)||te(T)||x(T))&&b&&(T=I,C=T),!N&&(!(m(T)||te(T)||x(T))||!m(A)))return l?Ne:c;let D=!1;const d=()=>{D=!0},V=x(T)?T:At(e,c,A,T,C,d);if(D)return T;const ne=Er(e,A,F,_),re=Kn(ne),z=fr(e,V,re),Y=a?a(z,c):z;if(__INTLIFY_PROD_DEVTOOLS__){const _e={timestamp:Date.now(),key:m(c)?c:x(T)?T.key:"",locale:A||(x(T)?T.locale:""),format:m(T)?T:x(T)?T.source:"",message:Y};_e.meta=w({},e.__meta,cr()||{}),Jn(_e)}return Y}function _r(e){v(e.list)?e.list=e.list.map(t=>m(t)?xe(t):t):R(e.named)&&Object.keys(e.named).forEach(t=>{m(e.named[t])&&(e.named[t]=xe(e.named[t]))})}function Rt(e,t,n,a,l,s){const{messages:r,onWarn:i,messageResolver:c,localeFallbacker:_}=e,E=_(e,a,n);let f={},g,N=null;const I="translate";for(let b=0;b<E.length&&(g=E[b],f=r[g]||{},(N=c(f,t))===null&&(N=f[t]),!(m(N)||te(N)||x(N)));b++){const P=ve(e,t,g,s,I);P!==t&&(N=P)}return[N,g,f]}function At(e,t,n,a,l,s){const{messageCompiler:r,warnHtmlMessage:i}=e;if(x(a)){const _=a;return _.locale=_.locale||n,_.key=_.key||t,_}if(r==null){const _=()=>a;return _.locale=n,_.key=t,_}const c=r(a,mr(e,n,l,a,i,s));return c.locale=n,c.key=t,c.source=a,c}function fr(e,t,n){return t(n)}function Le(...e){const[t,n,a]=e,l={};if(!m(t)&&!k(t)&&!x(t)&&!te(t))throw H(j.INVALID_ARGUMENT);const s=k(t)?String(t):(x(t),t);return k(n)?l.plural=n:m(n)?l.default=n:L(n)&&!de(n)?l.named=n:v(n)&&(l.list=n),k(a)?l.plural=a:m(a)?l.default=a:L(a)&&w(l,a),[s,l]}function mr(e,t,n,a,l,s){return{locale:t,key:n,warnHtmlMessage:l,onError:r=>{throw s&&s(r),r},onCacheKey:r=>Tn(t,n,r)}}function Er(e,t,n,a){const{modifiers:l,pluralRules:s,messageResolver:r,fallbackLocale:i,fallbackWarn:c,missingWarn:_,fallbackContext:E}=e,g={locale:t,modifiers:l,pluralRules:s,messages:N=>{let I=r(n,N);if(I==null&&E){const[,,b]=Rt(E,N,t,i,c,_);I=r(b,N)}if(m(I)||te(I)){let b=!1;const O=At(e,N,t,I,N,()=>{b=!0});return b?ze:O}else return x(I)?I:ze}};return e.processor&&(g.processor=e.processor),a.list&&(g.list=a.list),a.named&&(g.named=a.named),k(a.plural)&&(g.pluralIndex=a.plural),g}function qe(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:l,onWarn:s,localeFallbacker:r}=e,{__datetimeFormatters:i}=e,[c,_,E,f]=be(...t),g=h(E.missingWarn)?E.missingWarn:e.missingWarn;h(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const N=!!E.part,I=Fe(e,E),b=r(e,l,I);if(!m(c)||c==="")return new Intl.DateTimeFormat(I,f).format(_);let P={},O,A=null;const F="datetime format";for(let D=0;D<b.length&&(O=b[D],P=n[O]||{},A=P[c],!L(A));D++)ve(e,c,O,g,F);if(!L(A)||!m(O))return a?Ne:c;let T=`${O}__${c}`;de(f)||(T=`${T}__${JSON.stringify(f)}`);let C=i.get(T);return C||(C=new Intl.DateTimeFormat(O,w({},A,f)),i.set(T,C)),N?C.formatToParts(_):C.format(_)}const Dt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function be(...e){const[t,n,a,l]=e,s={};let r={},i;if(m(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw H(j.INVALID_ISO_DATE_ARGUMENT);const _=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(_);try{i.toISOString()}catch{throw H(j.INVALID_ISO_DATE_ARGUMENT)}}else if(Ln(t)){if(isNaN(t.getTime()))throw H(j.INVALID_DATE_ARGUMENT);i=t}else if(k(t))i=t;else throw H(j.INVALID_ARGUMENT);return m(n)?s.key=n:L(n)&&Object.keys(n).forEach(c=>{Dt.includes(c)?r[c]=n[c]:s[c]=n[c]}),m(a)?s.locale=a:L(a)&&(r=a),L(l)&&(r=l),[s.key||"",i,s,r]}function Qe(e,t,n){const a=e;for(const l in n){const s=`${t}__${l}`;a.__datetimeFormatters.has(s)&&a.__datetimeFormatters.delete(s)}}function Ze(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:l,onWarn:s,localeFallbacker:r}=e,{__numberFormatters:i}=e,[c,_,E,f]=Re(...t),g=h(E.missingWarn)?E.missingWarn:e.missingWarn;h(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const N=!!E.part,I=Fe(e,E),b=r(e,l,I);if(!m(c)||c==="")return new Intl.NumberFormat(I,f).format(_);let P={},O,A=null;const F="number format";for(let D=0;D<b.length&&(O=b[D],P=n[O]||{},A=P[c],!L(A));D++)ve(e,c,O,g,F);if(!L(A)||!m(O))return a?Ne:c;let T=`${O}__${c}`;de(f)||(T=`${T}__${JSON.stringify(f)}`);let C=i.get(T);return C||(C=new Intl.NumberFormat(O,w({},A,f)),i.set(T,C)),N?C.formatToParts(_):C.format(_)}const pt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Re(...e){const[t,n,a,l]=e,s={};let r={};if(!k(t))throw H(j.INVALID_ARGUMENT);const i=t;return m(n)?s.key=n:L(n)&&Object.keys(n).forEach(c=>{pt.includes(c)?r[c]=n[c]:s[c]=n[c]}),m(a)?s.locale=a:L(a)&&(r=a),L(l)&&(r=l),[s.key||"",i,s,r]}function et(e,t,n){const a=e;for(const l in n){const s=`${t}__${l}`;a.__numberFormatters.has(s)&&a.__numberFormatters.delete(s)}}yn();/*!
  * vue-i18n v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const gr="9.8.0";function dr(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(he().__INTLIFY_PROD_DEVTOOLS__=!1)}const Ct=Qn.__EXTEND_POINT__,B=ye(Ct);B(),B(),B(),B(),B(),B(),B(),B();const Pt=j.__EXTEND_POINT__,W=ye(Pt),G={UNEXPECTED_RETURN_TYPE:Pt,INVALID_ARGUMENT:W(),MUST_BE_CALL_SETUP_TOP:W(),NOT_INSTALLED:W(),NOT_AVAILABLE_IN_LEGACY_MODE:W(),REQUIRED_VALUE:W(),INVALID_VALUE:W(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:W(),NOT_INSTALLED_WITH_PROVIDE:W(),UNEXPECTED_ERROR:W(),NOT_COMPATIBLE_LEGACY_VUE_I18N:W(),BRIDGE_SUPPORT_VUE_2_ONLY:W(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:W(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:W(),__EXTEND_POINT__:W()};function $(e,...t){return dt(e,null,void 0)}const Ae=K("__translateVNode"),De=K("__datetimeParts"),pe=K("__numberParts"),Nr=K("__setPluralRules"),Or=K("__injectWithOption"),Ce=K("__dispose");function ue(e){if(!R(e))return e;for(const t in e)if(ce(e,t))if(!t.includes("."))R(e[t])&&ue(e[t]);else{const n=t.split("."),a=n.length-1;let l=e,s=!1;for(let r=0;r<a;r++){if(n[r]in l||(l[n[r]]={}),!R(l[n[r]])){s=!0;break}l=l[n[r]]}s||(l[n[a]]=e[t],delete e[t]),R(l[n[a]])&&ue(l[n[a]])}return e}function St(e,t){const{messages:n,__i18n:a,messageResolver:l,flatJson:s}=t,r=L(n)?n:v(a)?{}:{[e]:{}};if(v(a)&&a.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:_}=i;c?(r[c]=r[c]||{},oe(_,r[c])):oe(_,r)}else m(i)&&oe(JSON.parse(i),r)}),l==null&&s)for(const i in r)ce(r,i)&&ue(r[i]);return r}function ht(e){return e.type}function Tr(e,t,n){let a=R(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=St(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const l=Object.keys(a);l.length&&l.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(R(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(r=>{e.mergeDateTimeFormat(r,t.datetimeFormats[r])})}if(R(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(r=>{e.mergeNumberFormat(r,t.numberFormats[r])})}}}function tt(e){return mn(En,null,e,0)}const nt="__INTLIFY_META__",rt=()=>[],Ir=()=>!1;let at=0;function lt(e){return(t,n,a,l)=>e(n,a,Se()||void 0,l)}const Lr=()=>{const e=Se();let t=null;return e&&(t=ht(e)[nt])?{[nt]:t}:null};function yt(e={},t){const{__root:n,__injectWithOption:a}=e,l=n===void 0,s=e.flatJson;let r=h(e.inheritLocale)?e.inheritLocale:!0;const i=ae(n&&r?n.locale.value:m(e.locale)?e.locale:ge),c=ae(n&&r?n.fallbackLocale.value:m(e.fallbackLocale)||v(e.fallbackLocale)||L(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),_=ae(St(i.value,e)),E=ae(L(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),f=ae(L(e.numberFormats)?e.numberFormats:{[i.value]:{}});let g=n?n.missingWarn:h(e.missingWarn)||Ee(e.missingWarn)?e.missingWarn:!0,N=n?n.fallbackWarn:h(e.fallbackWarn)||Ee(e.fallbackWarn)?e.fallbackWarn:!0,I=n?n.fallbackRoot:h(e.fallbackRoot)?e.fallbackRoot:!0,b=!!e.fallbackFormat,P=S(e.missing)?e.missing:null,O=S(e.missing)?lt(e.missing):null,A=S(e.postTranslation)?e.postTranslation:null,F=n?n.warnHtmlMessage:h(e.warnHtmlMessage)?e.warnHtmlMessage:!0,T=!!e.escapeParameter;const C=n?n.modifiers:L(e.modifiers)?e.modifiers:{};let D=e.pluralRules||n&&n.pluralRules,d;d=(()=>{l&&Ke(null);const o={version:gr,locale:i.value,fallbackLocale:c.value,messages:_.value,modifiers:C,pluralRules:D,missing:O===null?void 0:O,missingWarn:g,fallbackWarn:N,fallbackFormat:b,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:F,escapeParameter:T,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};o.datetimeFormats=E.value,o.numberFormats=f.value,o.__datetimeFormatters=L(d)?d.__datetimeFormatters:void 0,o.__numberFormatters=L(d)?d.__numberFormatters:void 0;const u=ur(o);return l&&Ke(u),u})(),se(d,i.value,c.value);function ne(){return[i.value,c.value,_.value,E.value,f.value]}const re=le({get:()=>i.value,set:o=>{i.value=o,d.locale=i.value}}),z=le({get:()=>c.value,set:o=>{c.value=o,d.fallbackLocale=c.value,se(d,i.value,o)}}),Y=le(()=>_.value),_e=le(()=>E.value),kt=le(()=>f.value);function Ut(){return S(A)?A:null}function wt(o){A=o,d.postTranslation=o}function Wt(){return P}function Vt(o){o!==null&&(O=lt(o)),P=o,d.missing=O}const J=(o,u,p,y,q,fe)=>{ne();let Z;try{__INTLIFY_PROD_DEVTOOLS__,l||(d.fallbackContext=n?ir():void 0),Z=o(d)}finally{__INTLIFY_PROD_DEVTOOLS__,l||(d.fallbackContext=void 0)}if(p!=="translate exists"&&k(Z)&&Z===Ne||p==="translate exists"&&!Z){const[sn,Br]=u();return n&&I?y(n):q(sn)}else{if(fe(Z))return Z;throw $(G.UNEXPECTED_RETURN_TYPE)}};function Ue(...o){return J(u=>Reflect.apply(Je,null,[u,...o]),()=>Le(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>m(u))}function xt(...o){const[u,p,y]=o;if(y&&!R(y))throw $(G.INVALID_ARGUMENT);return Ue(u,p,w({resolvedMessage:!0},y||{}))}function Gt(...o){return J(u=>Reflect.apply(qe,null,[u,...o]),()=>be(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>He,u=>m(u))}function Yt(...o){return J(u=>Reflect.apply(Ze,null,[u,...o]),()=>Re(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>He,u=>m(u))}function $t(o){return o.map(u=>m(u)||k(u)||h(u)?tt(String(u)):u)}const jt={normalize:$t,interpolate:o=>o,type:"vnode"};function Ht(...o){return J(u=>{let p;const y=u;try{y.processor=jt,p=Reflect.apply(Je,null,[y,...o])}finally{y.processor=null}return p},()=>Le(...o),"translate",u=>u[Ae](...o),u=>[tt(u)],u=>v(u))}function Bt(...o){return J(u=>Reflect.apply(Ze,null,[u,...o]),()=>Re(...o),"number format",u=>u[pe](...o),rt,u=>m(u)||v(u))}function Kt(...o){return J(u=>Reflect.apply(qe,null,[u,...o]),()=>be(...o),"datetime format",u=>u[De](...o),rt,u=>m(u)||v(u))}function Xt(o){D=o,d.pluralRules=D}function zt(o,u){return J(()=>{if(!o)return!1;const p=m(u)?u:i.value,y=we(p),q=d.messageResolver(y,o);return te(q)||x(q)||m(q)},()=>[o],"translate exists",p=>Reflect.apply(p.te,p,[o,u]),Ir,p=>h(p))}function Jt(o){let u=null;const p=Ot(d,c.value,i.value);for(let y=0;y<p.length;y++){const q=_.value[p[y]]||{},fe=d.messageResolver(q,o);if(fe!=null){u=fe;break}}return u}function qt(o){const u=Jt(o);return u??(n?n.tm(o)||{}:{})}function we(o){return _.value[o]||{}}function Qt(o,u){if(s){const p={[o]:u};for(const y in p)ce(p,y)&&ue(p[y]);u=p[o]}_.value[o]=u,d.messages=_.value}function Zt(o,u){_.value[o]=_.value[o]||{};const p={[o]:u};for(const y in p)ce(p,y)&&ue(p[y]);u=p[o],oe(u,_.value[o]),d.messages=_.value}function en(o){return E.value[o]||{}}function tn(o,u){E.value[o]=u,d.datetimeFormats=E.value,Qe(d,o,u)}function nn(o,u){E.value[o]=w(E.value[o]||{},u),d.datetimeFormats=E.value,Qe(d,o,u)}function rn(o){return f.value[o]||{}}function an(o,u){f.value[o]=u,d.numberFormats=f.value,et(d,o,u)}function ln(o,u){f.value[o]=w(f.value[o]||{},u),d.numberFormats=f.value,et(d,o,u)}at++,n&&Ie&&(Te(n.locale,o=>{r&&(i.value=o,d.locale=o,se(d,i.value,c.value))}),Te(n.fallbackLocale,o=>{r&&(c.value=o,d.fallbackLocale=o,se(d,i.value,c.value))}));const M={id:at,locale:re,fallbackLocale:z,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&n&&(i.value=n.locale.value,c.value=n.fallbackLocale.value,se(d,i.value,c.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:Y,get modifiers(){return C},get pluralRules(){return D||{}},get isGlobal(){return l},get missingWarn(){return g},set missingWarn(o){g=o,d.missingWarn=g},get fallbackWarn(){return N},set fallbackWarn(o){N=o,d.fallbackWarn=N},get fallbackRoot(){return I},set fallbackRoot(o){I=o},get fallbackFormat(){return b},set fallbackFormat(o){b=o,d.fallbackFormat=b},get warnHtmlMessage(){return F},set warnHtmlMessage(o){F=o,d.warnHtmlMessage=o},get escapeParameter(){return T},set escapeParameter(o){T=o,d.escapeParameter=o},t:Ue,getLocaleMessage:we,setLocaleMessage:Qt,mergeLocaleMessage:Zt,getPostTranslationHandler:Ut,setPostTranslationHandler:wt,getMissingHandler:Wt,setMissingHandler:Vt,[Nr]:Xt};return M.datetimeFormats=_e,M.numberFormats=kt,M.rt=xt,M.te=zt,M.tm=qt,M.d=Gt,M.n=Yt,M.getDateTimeFormat=en,M.setDateTimeFormat=tn,M.mergeDateTimeFormat=nn,M.getNumberFormat=rn,M.setNumberFormat=an,M.mergeNumberFormat=ln,M[Or]=a,M[Ae]=Ht,M[De]=Kt,M[pe]=Bt,M}const Me={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function br({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,l)=>[...a,...l.type===mt?l.children:[l]],[]):t.reduce((n,a)=>{const l=e[a];return l&&(n[a]=l()),n},{})}function Ft(e){return mt}const Rr=Pe({name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>k(e)||!isNaN(e)}},Me),setup(e,t){const{slots:n,attrs:a}=t,l=e.i18n||ke({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),r={};e.locale&&(r.locale=e.locale),e.plural!==void 0&&(r.plural=m(e.plural)?+e.plural:e.plural);const i=br(t,s),c=l[Ae](e.keypath,i,r),_=w({},a),E=m(e.tag)||R(e.tag)?e.tag:Ft();return ft(E,_,c)}}}),st=Rr;function Ar(e){return v(e)&&!m(e[0])}function vt(e,t,n,a){const{slots:l,attrs:s}=t;return()=>{const r={part:!0};let i={};e.locale&&(r.locale=e.locale),m(e.format)?r.key=e.format:R(e.format)&&(m(e.format.key)&&(r.key=e.format.key),i=Object.keys(e.format).reduce((g,N)=>n.includes(N)?w({},g,{[N]:e.format[N]}):g,{}));const c=a(e.value,r,i);let _=[r.key];v(c)?_=c.map((g,N)=>{const I=l[g.type],b=I?I({[g.type]:g.value,index:N,parts:c}):[g.value];return Ar(b)&&(b[0].key=`${g.type}-${N}`),b}):m(c)&&(_=[c]);const E=w({},s),f=m(e.tag)||R(e.tag)?e.tag:Ft();return ft(f,E,_)}}const Dr=Pe({name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},Me),setup(e,t){const n=e.i18n||ke({useScope:"parent",__useComponent:!0});return vt(e,t,pt,(...a)=>n[pe](...a))}}),ot=Dr,pr=Pe({name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Me),setup(e,t){const n=e.i18n||ke({useScope:"parent",__useComponent:!0});return vt(e,t,Dt,(...a)=>n[De](...a))}}),ct=pr;function Cr(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function Pr(e){const t=r=>{const{instance:i,modifiers:c,value:_}=r;if(!i||!i.$)throw $(G.UNEXPECTED_ERROR);const E=Cr(e,i.$),f=it(_);return[Reflect.apply(E.t,E,[...ut(f)]),E]};return{created:(r,i)=>{const[c,_]=t(i);Ie&&e.global===_&&(r.__i18nWatcher=Te(_.locale,()=>{i.instance&&i.instance.$forceUpdate()})),r.__composer=_,r.textContent=c},unmounted:r=>{Ie&&r.__i18nWatcher&&(r.__i18nWatcher(),r.__i18nWatcher=void 0,delete r.__i18nWatcher),r.__composer&&(r.__composer=void 0,delete r.__composer)},beforeUpdate:(r,{value:i})=>{if(r.__composer){const c=r.__composer,_=it(i);r.textContent=Reflect.apply(c.t,c,[...ut(_)])}},getSSRProps:r=>{const[i]=t(r);return{textContent:i}}}}function it(e){if(m(e))return{path:e};if(L(e)){if(!("path"in e))throw $(G.REQUIRED_VALUE,"path");return e}else throw $(G.INVALID_VALUE)}function ut(e){const{path:t,locale:n,args:a,choice:l,plural:s}=e,r={},i=a||{};return m(n)&&(r.locale=n),k(l)&&(r.plural=l),k(s)&&(r.plural=s),[t,i,r]}function Sr(e,t,...n){const a=L(n[0])?n[0]:{},l=!!a.useI18nComponentName;(h(a.globalInstall)?a.globalInstall:!0)&&([l?"i18n":st.name,"I18nT"].forEach(r=>e.component(r,st)),[ot.name,"I18nN"].forEach(r=>e.component(r,ot)),[ct.name,"I18nD"].forEach(r=>e.component(r,ct))),e.directive("t",Pr(t))}const hr=K("global-vue-i18n");function yr(e={},t){const n=h(e.globalInjection)?e.globalInjection:!0,a=!0,l=new Map,[s,r]=Fr(e),i=K("");function c(f){return l.get(f)||null}function _(f,g){l.set(f,g)}function E(f){l.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return a},async install(g,...N){if(g.__VUE_I18N_SYMBOL__=i,g.provide(g.__VUE_I18N_SYMBOL__,f),L(N[0])){const P=N[0];f.__composerExtend=P.__composerExtend,f.__vueI18nExtend=P.__vueI18nExtend}let I=null;n&&(I=xr(g,f.global)),Sr(g,f,...N);const b=g.unmount;g.unmount=()=>{I&&I(),f.dispose(),b()}},get global(){return r},dispose(){s.stop()},__instances:l,__getInstance:c,__setInstance:_,__deleteInstance:E};return f}}function ke(e={}){const t=Se();if(t==null)throw $(G.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw $(G.NOT_INSTALLED);const n=vr(t),a=kr(n),l=ht(t),s=Mr(e,l);if(s==="global")return Tr(a,e,l),a;if(s==="parent"){let c=Ur(n,t,e.__useComponent);return c==null&&(c=a),c}const r=n;let i=r.__getInstance(t);if(i==null){const c=w({},e);"__i18n"in l&&(c.__i18n=l.__i18n),a&&(c.__root=a),i=yt(c),r.__composerExtend&&(i[Ce]=r.__composerExtend(i)),Wr(r,t,i),r.__setInstance(t,i)}return i}function Fr(e,t,n){const a=on();{const l=a.run(()=>yt(e));if(l==null)throw $(G.UNEXPECTED_ERROR);return[a,l]}}function vr(e){{const t=cn(e.isCE?hr:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw $(e.isCE?G.NOT_INSTALLED_WITH_PROVIDE:G.UNEXPECTED_ERROR);return t}}function Mr(e,t){return de(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function kr(e){return e.mode==="composition"?e.global:e.global.__composer}function Ur(e,t,n=!1){let a=null;const l=t.root;let s=wr(t,n);for(;s!=null;){const r=e;if(e.mode==="composition"&&(a=r.__getInstance(s)),a!=null||l===s)break;s=s.parent}return a}function wr(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function Wr(e,t,n){un(()=>{},t),_n(()=>{const a=n;e.__deleteInstance(t);const l=a[Ce];l&&(l(),delete a[Ce])},t)}const Vr=["locale","fallbackLocale","availableLocales"],_t=["t","rt","d","n","tm","te"];function xr(e,t){const n=Object.create(null);return Vr.forEach(l=>{const s=Object.getOwnPropertyDescriptor(t,l);if(!s)throw $(G.UNEXPECTED_ERROR);const r=fn(s.value)?{get(){return s.value.value},set(i){s.value.value=i}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,l,r)}),e.config.globalProperties.$i18n=n,_t.forEach(l=>{const s=Object.getOwnPropertyDescriptor(t,l);if(!s||!s.value)throw $(G.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${l}`,s)}),()=>{delete e.config.globalProperties.$i18n,_t.forEach(l=>{delete e.config.globalProperties[`$${l}`]})}}dr();lr(Vn);sr(Ot);if(__INTLIFY_PROD_DEVTOOLS__){const e=he();e.__INTLIFY__=!0,Xn(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Mt={zh:()=>On(()=>import("./zh-KM20_PeF.js"),__vite__mapDeps([]))},Gr={legacy:!1,locale:"zh",fallbackLocale:"zh"},Yr=Object.keys(Mt);let ee;function Xr(e=Gr){return ee??(ee=yr(e)),$r(e.locale),ee}async function $r(e){var t;e&&Yr.includes(e)&&(await jr(e),ee.mode==="legacy"?ee.global.locale=e:ee.global.locale.value=e,(t=document.querySelector("html"))==null||t.setAttribute("lang",e))}async function jr(e){const t=await Mt[e]();return ee.global.setLocaleMessage(e,t.default),gn()}export{On as _,Xr as a,$r as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}