(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(e,t,c){"use strict";(function(e){t.a=t=>{if(t(),void 0===e.env.JEST_WORKER_ID){c(31).default.subscribe(t)}}}).call(this,c(32))},266:function(e,t,c){e.exports=function(){"use strict";var e="millisecond",t="second",c="minute",n="hour",r="day",s="week",a="month",i="quarter",o="year",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(e,t,c){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(c)+e},O={s:u,z:function(e){var t=-e.utcOffset(),c=Math.abs(t),n=Math.floor(c/60),r=c%60;return(t<=0?"+":"-")+u(n,2,"0")+":"+u(r,2,"0")},m:function e(t,c){if(t.date()<c.date())return-e(c,t);var n=12*(c.year()-t.year())+(c.month()-t.month()),r=t.add(n,a),s=c-r<0,i=t.add(n+(s?-1:1),a);return+(-(n+(c-r)/(s?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(b){return{M:a,y:o,w:s,d:r,D:"date",h:n,m:c,s:t,ms:e,Q:i}[b]||String(b||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",d={};d[f]=j;var h=function(e){return e instanceof p},m=function(e,t,c){var n;if(!e)return f;if("string"==typeof e)d[e]&&(n=e),t&&(d[e]=t,n=e);else{var r=e.name;d[r]=e,n=r}return!c&&n&&(f=n),n||!c&&f},$=function(e,t){if(h(e))return e.clone();var c="object"==typeof t?t:{};return c.date=e,c.args=arguments,new p(c)},g=O;g.l=m,g.i=h,g.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,$offset:t.$offset})};var p=function(){function u(e){this.$L=this.$L||m(e.locale,null,!0),this.parse(e)}var O=u.prototype;return O.parse=function(e){this.$d=function(e){var t=e.date,c=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(b);if(n){var r=n[2]-1||0;return c?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}}return new Date(t)}(e),this.init()},O.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},O.$utils=function(){return g},O.isValid=function(){return!("Invalid Date"===this.$d.toString())},O.isSame=function(e,t){var c=$(e);return this.startOf(t)<=c&&c<=this.endOf(t)},O.isAfter=function(e,t){return $(e)<this.startOf(t)},O.isBefore=function(e,t){return this.endOf(t)<$(e)},O.$g=function(e,t,c){return g.u(e)?this[t]:this.set(c,e)},O.year=function(e){return this.$g(e,"$y",o)},O.month=function(e){return this.$g(e,"$M",a)},O.day=function(e){return this.$g(e,"$W",r)},O.date=function(e){return this.$g(e,"$D","date")},O.hour=function(e){return this.$g(e,"$H",n)},O.minute=function(e){return this.$g(e,"$m",c)},O.second=function(e){return this.$g(e,"$s",t)},O.millisecond=function(t){return this.$g(t,"$ms",e)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(e,i){var b=this,l=!!g.u(i)||i,u=g.p(e),O=function(e,t){var c=g.w(b.$u?Date.UTC(b.$y,t,e):new Date(b.$y,t,e),b);return l?c:c.endOf(r)},j=function(e,t){return g.w(b.toDate()[e].apply(b.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),b)},f=this.$W,d=this.$M,h=this.$D,m="set"+(this.$u?"UTC":"");switch(u){case o:return l?O(1,0):O(31,11);case a:return l?O(1,d):O(0,d+1);case s:var $=this.$locale().weekStart||0,p=(f<$?f+7:f)-$;return O(l?h-p:h+(6-p),d);case r:case"date":return j(m+"Hours",0);case n:return j(m+"Minutes",1);case c:return j(m+"Seconds",2);case t:return j(m+"Milliseconds",3);default:return this.clone()}},O.endOf=function(e){return this.startOf(e,!1)},O.$set=function(s,i){var b,l=g.p(s),u="set"+(this.$u?"UTC":""),O=(b={},b[r]=u+"Date",b.date=u+"Date",b[a]=u+"Month",b[o]=u+"FullYear",b[n]=u+"Hours",b[c]=u+"Minutes",b[t]=u+"Seconds",b[e]=u+"Milliseconds",b)[l],j=l===r?this.$D+(i-this.$W):i;if(l===a||l===o){var f=this.clone().set("date",1);f.$d[O](j),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).$d}else O&&this.$d[O](j);return this.init(),this},O.set=function(e,t){return this.clone().$set(e,t)},O.get=function(e){return this[g.p(e)]()},O.add=function(e,i){var b,l=this;e=Number(e);var u=g.p(i),O=function(t){var c=$(l);return g.w(c.date(c.date()+Math.round(t*e)),l)};if(u===a)return this.set(a,this.$M+e);if(u===o)return this.set(o,this.$y+e);if(u===r)return O(1);if(u===s)return O(7);var j=(b={},b[c]=6e4,b[n]=36e5,b[t]=1e3,b)[u]||1,f=this.$d.getTime()+e*j;return g.w(f,this)},O.subtract=function(e,t){return this.add(-1*e,t)},O.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var c=e||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),r=this.$locale(),s=this.$H,a=this.$m,i=this.$M,o=r.weekdays,b=r.months,u=function(e,n,r,s){return e&&(e[n]||e(t,c))||r[n].substr(0,s)},O=function(e){return g.s(s%12||12,e,"0")},j=r.meridiem||function(e,t,c){var n=e<12?"AM":"PM";return c?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:g.s(i+1,2,"0"),MMM:u(r.monthsShort,i,b,3),MMMM:u(b,i),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,o,2),ddd:u(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:O(1),hh:O(2),a:j(s,a,!0),A:j(s,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return c.replace(l,(function(e,t){return t||f[e]||n.replace(":","")}))},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(e,b,l){var u,O=g.p(b),j=$(e),f=6e4*(j.utcOffset()-this.utcOffset()),d=this-j,h=g.m(this,j);return h=(u={},u[o]=h/12,u[a]=h,u[i]=h/3,u[s]=(d-f)/6048e5,u[r]=(d-f)/864e5,u[n]=d/36e5,u[c]=d/6e4,u[t]=d/1e3,u)[O]||d,l?h:g.a(h)},O.daysInMonth=function(){return this.endOf(a).$D},O.$locale=function(){return d[this.$L]},O.locale=function(e,t){if(!e)return this.$L;var c=this.clone(),n=m(e,t,!0);return n&&(c.$L=n),c},O.clone=function(){return g.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},u}();return $.prototype=p.prototype,$.extend=function(e,t){return e(t,p,$),$},$.locale=m,$.isDayjs=h,$.unix=function(e){return $(1e3*e)},$.en=d[f],$.Ls=d,$}()},406:function(e,t,c){"use strict";c.r(t),c.d(t,"preload",(function(){return Y}));var n=c(0),r=c(4),s=c(265),a=c(51),i=c(266),o=c.n(i);const b=e=>e>1?b(e-1)+b(e-2):1,l=e=>[...e].sort((e,t)=>o()(e.at).isAfter(o()(t.at))?-1:1)[0].at,u=({lastPractice:e,practicesSoFar:t})=>{const c=o()(e).add((({practicesSoFar:e})=>b(e))({practicesSoFar:t}),"day");return o()().isAfter(o()(o()(c).subtract(1,"second")))},O=({practices:e})=>u({practicesSoFar:e.length,lastPractice:l(e)});var j=c(60),f=c(46);function d(e){let t,c,r,s;const a=[m,h],i=[];function o(e,t){return e[5]?0:1}return t=o(e),c=i[t]=a[t](e),{c(){c.c(),r=Object(n.B)()},l(e){c.l(e),r=Object(n.B)()},m(e,c){i[t].m(e,c),Object(n.K)(e,r,c),s=!0},p(e,s){let b=t;t=o(e),t!==b&&(Object(n.H)(),Object(n.gb)(i[b],1,1,()=>{i[b]=null}),Object(n.k)(),c=i[t],c||(c=i[t]=a[t](e),c.c()),Object(n.fb)(c,1),c.m(r.parentNode,r))},i(e){s||(Object(n.fb)(c),s=!0)},o(e){Object(n.gb)(c),s=!1},d(e){i[t].d(e),e&&Object(n.z)(r)}}}function h(e){let t,c,r;return c=new j.a({props:{icon:"check-square",size:"large"}}),{c(){t=Object(n.A)("span"),Object(n.t)(c.$$.fragment),this.h()},l(e){t=Object(n.n)(e,"SPAN",{class:!0});var r=Object(n.l)(t);Object(n.m)(c.$$.fragment,r),r.forEach(n.z),this.h()},h(){Object(n.h)(t,"class","icon svelte-srzcqu")},m(e,s){Object(n.K)(e,t,s),Object(n.O)(c,t,null),r=!0},i(e){r||(Object(n.fb)(c.$$.fragment,e),r=!0)},o(e){Object(n.gb)(c.$$.fragment,e),r=!1},d(e){e&&Object(n.z)(t),Object(n.x)(c)}}}function m(e){let t,c,r;return c=new j.a({props:{icon:"dumbbell",size:"large"}}),{c(){t=Object(n.A)("span"),Object(n.t)(c.$$.fragment),this.h()},l(e){t=Object(n.n)(e,"SPAN",{class:!0});var r=Object(n.l)(t);Object(n.m)(c.$$.fragment,r),r.forEach(n.z),this.h()},h(){Object(n.h)(t,"class","icon svelte-srzcqu")},m(e,s){Object(n.K)(e,t,s),Object(n.O)(c,t,null),r=!0},i(e){r||(Object(n.fb)(c.$$.fragment,e),r=!0)},o(e){Object(n.gb)(c.$$.fragment,e),r=!1},d(e){e&&Object(n.z)(t),Object(n.x)(c)}}}function $(e){let t,c,r,s,a,i,o,b,l,u;return{c(){t=Object(n.A)("div"),c=Object(n.A)("figure"),r=Object(n.A)("img"),a=Object(n.bb)(),i=Object(n.A)("img"),b=Object(n.bb)(),l=Object(n.A)("img"),this.h()},l(e){t=Object(n.n)(e,"DIV",{class:!0});var s=Object(n.l)(t);c=Object(n.n)(s,"FIGURE",{class:!0});var o=Object(n.l)(c);r=Object(n.n)(o,"IMG",{src:!0,alt:!0,class:!0}),a=Object(n.o)(o),i=Object(n.n)(o,"IMG",{src:!0,alt:!0,class:!0}),b=Object(n.o)(o),l=Object(n.n)(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(n.z),s.forEach(n.z),this.h()},h(){r.src!==(s=`images/${e[2][0]}_tinier.jpg`)&&Object(n.h)(r,"src",s),Object(n.h)(r,"alt",""),Object(n.h)(r,"class","svelte-srzcqu"),i.src!==(o=`images/${e[2][1]}_tinier.jpg`)&&Object(n.h)(i,"src",o),Object(n.h)(i,"alt",""),Object(n.h)(i,"class","svelte-srzcqu"),l.src!==(u=`images/${e[2][2]}_tiny.jpg`)&&Object(n.h)(l,"src",u),Object(n.h)(l,"alt",""),Object(n.h)(l,"class","svelte-srzcqu"),Object(n.h)(c,"class","image image-set is-96x96 svelte-srzcqu"),Object(n.h)(t,"class","media-left svelte-srzcqu")},m(e,s){Object(n.K)(e,t,s),Object(n.f)(t,c),Object(n.f)(c,r),Object(n.f)(c,a),Object(n.f)(c,i),Object(n.f)(c,b),Object(n.f)(c,l)},p(e,t){4&t&&r.src!==(s=`images/${e[2][0]}_tinier.jpg`)&&Object(n.h)(r,"src",s),4&t&&i.src!==(o=`images/${e[2][1]}_tinier.jpg`)&&Object(n.h)(i,"src",o),4&t&&l.src!==(u=`images/${e[2][2]}_tiny.jpg`)&&Object(n.h)(l,"src",u)},d(e){e&&Object(n.z)(t)}}}function g(e){let t,c;return t=new f.a({props:{primary:!0,href:e[1],$$slots:{default:[v]},$$scope:{ctx:e}}}),{c(){Object(n.t)(t.$$.fragment)},l(e){Object(n.m)(t.$$.fragment,e)},m(e,r){Object(n.O)(t,e,r),c=!0},p(e,c){const n={};2&c&&(n.href=e[1]),129&c&&(n.$$scope={dirty:c,ctx:e}),t.$set(n)},i(e){c||(Object(n.fb)(t.$$.fragment,e),c=!0)},o(e){Object(n.gb)(t.$$.fragment,e),c=!1},d(e){Object(n.x)(t,e)}}}function p(e){let t,c;return t=new f.a({props:{primary:!0,href:e[1],$$slots:{default:[z]},$$scope:{ctx:e}}}),{c(){Object(n.t)(t.$$.fragment)},l(e){Object(n.m)(t.$$.fragment,e)},m(e,r){Object(n.O)(t,e,r),c=!0},p(e,c){const n={};2&c&&(n.href=e[1]),129&c&&(n.$$scope={dirty:c,ctx:e}),t.$set(n)},i(e){c||(Object(n.fb)(t.$$.fragment,e),c=!0)},o(e){Object(n.gb)(t.$$.fragment,e),c=!1},d(e){Object(n.x)(t,e)}}}function v(e){let t,c;return{c(){t=Object(n.db)("Learn "),c=Object(n.db)(e[0])},l(r){t=Object(n.p)(r,"Learn "),c=Object(n.p)(r,e[0])},m(e,r){Object(n.K)(e,t,r),Object(n.K)(e,c,r)},p(e,t){1&t&&Object(n.Y)(c,e[0])},d(e){e&&Object(n.z)(t),e&&Object(n.z)(c)}}}function z(e){let t,c;return{c(){t=Object(n.db)("Practice "),c=Object(n.db)(e[0])},l(r){t=Object(n.p)(r,"Practice "),c=Object(n.p)(r,e[0])},m(e,r){Object(n.K)(e,t,r),Object(n.K)(e,c,r)},p(e,t){1&t&&Object(n.Y)(c,e[0])},d(e){e&&Object(n.z)(t),e&&Object(n.z)(c)}}}function w(e){let t,c,r,s,a,i,o,b,l,u,O,j,f,h,m,v,z,w,y,D=e[3].join(", ")+"",x=e[4]&&d(e),A=e[2]&&e[2].length&&$(e);const q=[p,g],S=[];function _(e,t){return e[4]?0:1}return z=_(e),w=S[z]=q[z](e),{c(){t=Object(n.A)("div"),x&&x.c(),c=Object(n.bb)(),r=Object(n.A)("div"),s=Object(n.A)("div"),A&&A.c(),a=Object(n.bb)(),i=Object(n.A)("div"),o=Object(n.A)("p"),b=Object(n.db)(e[0]),l=Object(n.bb)(),u=Object(n.A)("p"),O=Object(n.db)("Learn: "),j=Object(n.db)(D),f=Object(n.bb)(),h=Object(n.A)("footer"),m=Object(n.A)("div"),v=Object(n.A)("div"),w.c(),this.h()},l(d){t=Object(n.n)(d,"DIV",{class:!0,"data-completed":!0,"data-stale":!0});var $=Object(n.l)(t);x&&x.l($),c=Object(n.o)($),r=Object(n.n)($,"DIV",{class:!0});var g=Object(n.l)(r);s=Object(n.n)(g,"DIV",{class:!0});var p=Object(n.l)(s);A&&A.l(p),a=Object(n.o)(p),i=Object(n.n)(p,"DIV",{class:!0});var z=Object(n.l)(i);o=Object(n.n)(z,"P",{class:!0});var y=Object(n.l)(o);b=Object(n.p)(y,e[0]),y.forEach(n.z),l=Object(n.o)(z),u=Object(n.n)(z,"P",{class:!0});var q=Object(n.l)(u);O=Object(n.p)(q,"Learn: "),j=Object(n.p)(q,D),q.forEach(n.z),z.forEach(n.z),p.forEach(n.z),g.forEach(n.z),f=Object(n.o)($),h=Object(n.n)($,"FOOTER",{class:!0});var S=Object(n.l)(h);m=Object(n.n)(S,"DIV",{href:!0,class:!0});var _=Object(n.l)(m);v=Object(n.n)(_,"DIV",{class:!0});var k=Object(n.l)(v);w.l(k),k.forEach(n.z),_.forEach(n.z),S.forEach(n.z),$.forEach(n.z),this.h()},h(){Object(n.h)(o,"class","title is-4 svelte-srzcqu"),Object(n.h)(u,"class","is-6 clamp svelte-srzcqu"),Object(n.h)(i,"class","media-content svelte-srzcqu"),Object(n.h)(s,"class","media"),Object(n.h)(r,"class","card-content svelte-srzcqu"),Object(n.h)(v,"class","button-container"),Object(n.h)(m,"href",e[1]),Object(n.h)(m,"class","card-footer-item"),Object(n.h)(h,"class","card-footer"),Object(n.h)(t,"class","card svelte-srzcqu"),Object(n.h)(t,"data-completed",e[4]),Object(n.h)(t,"data-stale",e[5])},m(e,d){Object(n.K)(e,t,d),x&&x.m(t,null),Object(n.f)(t,c),Object(n.f)(t,r),Object(n.f)(r,s),A&&A.m(s,null),Object(n.f)(s,a),Object(n.f)(s,i),Object(n.f)(i,o),Object(n.f)(o,b),Object(n.f)(i,l),Object(n.f)(i,u),Object(n.f)(u,O),Object(n.f)(u,j),Object(n.f)(t,f),Object(n.f)(t,h),Object(n.f)(h,m),Object(n.f)(m,v),S[z].m(v,null),y=!0},p(e,[r]){e[4]?x?(x.p(e,r),16&r&&Object(n.fb)(x,1)):(x=d(e),x.c(),Object(n.fb)(x,1),x.m(t,c)):x&&(Object(n.H)(),Object(n.gb)(x,1,1,()=>{x=null}),Object(n.k)()),e[2]&&e[2].length?A?A.p(e,r):(A=$(e),A.c(),A.m(s,a)):A&&(A.d(1),A=null),(!y||1&r)&&Object(n.Y)(b,e[0]),(!y||8&r)&&D!==(D=e[3].join(", ")+"")&&Object(n.Y)(j,D);let i=z;z=_(e),z===i?S[z].p(e,r):(Object(n.H)(),Object(n.gb)(S[i],1,1,()=>{S[i]=null}),Object(n.k)(),w=S[z],w||(w=S[z]=q[z](e),w.c()),Object(n.fb)(w,1),w.m(v,null)),(!y||2&r)&&Object(n.h)(m,"href",e[1]),(!y||16&r)&&Object(n.h)(t,"data-completed",e[4]),(!y||32&r)&&Object(n.h)(t,"data-stale",e[5])},i(e){y||(Object(n.fb)(x),Object(n.fb)(w),y=!0)},o(e){Object(n.gb)(x),Object(n.gb)(w),y=!1},d(e){e&&Object(n.z)(t),x&&x.d(),A&&A.d(),S[z].d()}}}function y(e,t,c){let{title:n}=t,{practiceHref:i}=t,{id:o}=t,{imageSet:b=[]}=t,{summary:l}=t,u=null,j=null;return Object(r.d)(()=>{Object(s.a)(()=>(async({id:e})=>{if(!a.a)return null;try{const{practiced:t}=await a.a.get(`skills/${e}`);return{completed:t.length>=1,stale:O({practices:t})}}catch{return{completed:!1,stale:null}}})({id:o}).then(e=>{c(4,u=e.completed),c(5,j=e.stale)}).catch(()=>{}))}),e.$$set=e=>{"title"in e&&c(0,n=e.title),"practiceHref"in e&&c(1,i=e.practiceHref),"id"in e&&c(6,o=e.id),"imageSet"in e&&c(2,b=e.imageSet),"summary"in e&&c(3,l=e.summary)},[n,i,b,l,u,j,o]}class D extends n.a{constructor(e){var t;super(),document.getElementById("svelte-srzcqu-style")||((t=Object(n.A)("style")).id="svelte-srzcqu-style",t.textContent='@keyframes svelte-srzcqu-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.image-set.svelte-srzcqu.svelte-srzcqu{position:relative;overflow:hidden}.image-set.svelte-srzcqu img.svelte-srzcqu{left:15%;top:15%;width:70%;position:absolute}.image-set.svelte-srzcqu img.svelte-srzcqu:first-child{position:absolute;left:0;top:0}.image-set.svelte-srzcqu img.svelte-srzcqu:last-child{position:absolute;left:30%;top:30%}.card-content.svelte-srzcqu.svelte-srzcqu{height:147px}.clamp.svelte-srzcqu.svelte-srzcqu{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.card.svelte-srzcqu.svelte-srzcqu{background:white}.card[data-completed="true"].svelte-srzcqu.svelte-srzcqu{background-color:#b2ca93}.card[data-completed="true"][data-stale="true"].svelte-srzcqu.svelte-srzcqu{background-color:#afb2ab}.card[data-completed="true"][data-stale="true"].svelte-srzcqu>.icon.svelte-srzcqu{position:absolute;right:1em;top:0.5em}.card[data-completed="true"].svelte-srzcqu .title.svelte-srzcqu,.card[data-completed="true"].svelte-srzcqu .media-content.svelte-srzcqu,.card[data-completed="true"].svelte-srzcqu .icon.svelte-srzcqu{color:white}.card[data-completed="true"].svelte-srzcqu .media-left.svelte-srzcqu{mix-blend-mode:screen}.card[data-completed="true"].svelte-srzcqu .media-left .image-set.svelte-srzcqu{filter:saturate(0)}.card[data-completed="true"].svelte-srzcqu .media-left .image-set img.svelte-srzcqu{box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.3)}.card.svelte-srzcqu>.icon.svelte-srzcqu{position:absolute;right:0.5em;top:0.5em}',Object(n.f)(document.head,t)),Object(n.J)(this,e,y,w,n.W,{title:0,practiceHref:1,id:6,imageSet:2,summary:3})}}var x=D,A=c(56),q=c(53),S=c(54);function _(e,t,c){const n=e.slice();return n[7]=t[c],n}function k(e,t,c){const n=e.slice();return n[3]=t[c].title,n[4]=t[c].skills,n}function E(e){let t,c;const r=[{...e[7]},{practiceHref:`/course/${e[0]}/skill/${e[7].practiceHref}`}];let s={};for(let e=0;e<r.length;e+=1)s=Object(n.g)(s,r[e]);return t=new x({props:s}),{c(){Object(n.t)(t.$$.fragment)},l(e){Object(n.m)(t.$$.fragment,e)},m(e,r){Object(n.O)(t,e,r),c=!0},p(e,c){const s=3&c?Object(n.E)(r,[2&c&&{...e[7]},{practiceHref:`/course/${e[0]}/skill/${e[7].practiceHref}`}]):{};t.$set(s)},i(e){c||(Object(n.fb)(t.$$.fragment,e),c=!0)},o(e){Object(n.gb)(t.$$.fragment,e),c=!1},d(e){Object(n.x)(t,e)}}}function M(e){let t,c;return t=new q.a({props:{sizeDesktop:"1/3",sizeTablet:"1/2",$$slots:{default:[E]},$$scope:{ctx:e}}}),{c(){Object(n.t)(t.$$.fragment)},l(e){Object(n.m)(t.$$.fragment,e)},m(e,r){Object(n.O)(t,e,r),c=!0},p(e,c){const n={};1027&c&&(n.$$scope={dirty:c,ctx:e}),t.$set(n)},i(e){c||(Object(n.fb)(t.$$.fragment,e),c=!0)},o(e){Object(n.gb)(t.$$.fragment,e),c=!1},d(e){Object(n.x)(t,e)}}}function K(e){let t,c,r=e[4],s=[];for(let t=0;t<r.length;t+=1)s[t]=M(_(e,r,t));const a=e=>Object(n.gb)(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=Object(n.B)()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=Object(n.B)()},m(e,r){for(let t=0;t<s.length;t+=1)s[t].m(e,r);Object(n.K)(e,t,r),c=!0},p(e,c){if(3&c){let i;for(r=e[4],i=0;i<r.length;i+=1){const a=_(e,r,i);s[i]?(s[i].p(a,c),Object(n.fb)(s[i],1)):(s[i]=M(a),s[i].c(),Object(n.fb)(s[i],1),s[i].m(t.parentNode,t))}for(Object(n.H)(),i=r.length;i<s.length;i+=1)a(i);Object(n.k)()}},i(e){if(!c){for(let e=0;e<r.length;e+=1)Object(n.fb)(s[e]);c=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)Object(n.gb)(s[e]);c=!1},d(e){Object(n.y)(s,e),e&&Object(n.z)(t)}}}function L(e){let t,c,r,s,a,i,o,b=e[3]+"";return i=new S.a({props:{multiline:!0,$$slots:{default:[K]},$$scope:{ctx:e}}}),{c(){t=Object(n.A)("section"),c=Object(n.A)("div"),r=Object(n.A)("h2"),s=Object(n.db)(b),a=Object(n.bb)(),Object(n.t)(i.$$.fragment),this.h()},l(e){t=Object(n.n)(e,"SECTION",{class:!0});var o=Object(n.l)(t);c=Object(n.n)(o,"DIV",{class:!0});var l=Object(n.l)(c);r=Object(n.n)(l,"H2",{class:!0});var u=Object(n.l)(r);s=Object(n.p)(u,b),u.forEach(n.z),a=Object(n.o)(l),Object(n.m)(i.$$.fragment,l),l.forEach(n.z),o.forEach(n.z),this.h()},h(){Object(n.h)(r,"class","is-size-2"),Object(n.h)(c,"class","container svelte-1rsvn2t"),Object(n.h)(t,"class","section")},m(e,b){Object(n.K)(e,t,b),Object(n.f)(t,c),Object(n.f)(c,r),Object(n.f)(r,s),Object(n.f)(c,a),Object(n.O)(i,c,null),o=!0},p(e,t){(!o||2&t)&&b!==(b=e[3]+"")&&Object(n.Y)(s,b);const c={};1027&t&&(c.$$scope={dirty:t,ctx:e}),i.$set(c)},i(e){o||(Object(n.fb)(i.$$.fragment,e),o=!0)},o(e){Object(n.gb)(i.$$.fragment,e),o=!1},d(e){e&&Object(n.z)(t),Object(n.x)(i)}}}function I(e){let t,c,r,s,a,i,o,b,l;return{c(){t=Object(n.A)("strong"),c=Object(n.db)("LibreLingo"),r=Object(n.db)("\n        by\n        "),s=Object(n.A)("a"),a=Object(n.db)("Dániel Kántor"),i=Object(n.db)("\n        and\n        "),o=Object(n.A)("a"),b=Object(n.db)("various contributors"),l=Object(n.db)("\n        ."),this.h()},l(e){t=Object(n.n)(e,"STRONG",{});var u=Object(n.l)(t);c=Object(n.p)(u,"LibreLingo"),u.forEach(n.z),r=Object(n.p)(e,"\n        by\n        "),s=Object(n.n)(e,"A",{href:!0});var O=Object(n.l)(s);a=Object(n.p)(O,"Dániel Kántor"),O.forEach(n.z),i=Object(n.p)(e,"\n        and\n        "),o=Object(n.n)(e,"A",{href:!0});var j=Object(n.l)(o);b=Object(n.p)(j,"various contributors"),j.forEach(n.z),l=Object(n.p)(e,"\n        ."),this.h()},h(){Object(n.h)(s,"href","https://github.com/kantord"),Object(n.h)(o,"href","https://github.com/kantord/LibreLingo#contributors-")},m(e,u){Object(n.K)(e,t,u),Object(n.f)(t,c),Object(n.K)(e,r,u),Object(n.K)(e,s,u),Object(n.f)(s,a),Object(n.K)(e,i,u),Object(n.K)(e,o,u),Object(n.f)(o,b),Object(n.K)(e,l,u)},d(e){e&&Object(n.z)(t),e&&Object(n.z)(r),e&&Object(n.z)(s),e&&Object(n.z)(i),e&&Object(n.z)(o),e&&Object(n.z)(l)}}}function H(e){let t,c,r,s,a,i,o,b;return{c(){t=Object(n.db)("The source code is licensed\n        "),c=Object(n.A)("a"),r=Object(n.db)("AGPL-3.0."),s=Object(n.bb)(),a=Object(n.A)("br"),i=Object(n.bb)(),o=Object(n.A)("a"),b=Object(n.db)("Source code available on GitHub."),this.h()},l(e){t=Object(n.p)(e,"The source code is licensed\n        "),c=Object(n.n)(e,"A",{href:!0});var l=Object(n.l)(c);r=Object(n.p)(l,"AGPL-3.0."),l.forEach(n.z),s=Object(n.o)(e),a=Object(n.n)(e,"BR",{}),i=Object(n.o)(e),o=Object(n.n)(e,"A",{href:!0});var u=Object(n.l)(o);b=Object(n.p)(u,"Source code available on GitHub."),u.forEach(n.z),this.h()},h(){Object(n.h)(c,"href","https://opensource.org/licenses/AGPL-3.0"),Object(n.h)(o,"href","https://github.com/kantord/LibreLingo")},m(e,l){Object(n.K)(e,t,l),Object(n.K)(e,c,l),Object(n.f)(c,r),Object(n.K)(e,s,l),Object(n.K)(e,a,l),Object(n.K)(e,i,l),Object(n.K)(e,o,l),Object(n.f)(o,b)},d(e){e&&Object(n.z)(t),e&&Object(n.z)(c),e&&Object(n.z)(s),e&&Object(n.z)(a),e&&Object(n.z)(i),e&&Object(n.z)(o)}}}function N(e){let t,c,r,s,a,i;return t=new q.a({props:{$$slots:{default:[I]},$$scope:{ctx:e}}}),r=new q.a({props:{$$slots:{default:[H]},$$scope:{ctx:e}}}),a=new q.a({}),{c(){Object(n.t)(t.$$.fragment),c=Object(n.bb)(),Object(n.t)(r.$$.fragment),s=Object(n.bb)(),Object(n.t)(a.$$.fragment)},l(e){Object(n.m)(t.$$.fragment,e),c=Object(n.o)(e),Object(n.m)(r.$$.fragment,e),s=Object(n.o)(e),Object(n.m)(a.$$.fragment,e)},m(e,o){Object(n.O)(t,e,o),Object(n.K)(e,c,o),Object(n.O)(r,e,o),Object(n.K)(e,s,o),Object(n.O)(a,e,o),i=!0},p(e,c){const n={};1024&c&&(n.$$scope={dirty:c,ctx:e}),t.$set(n);const s={};1024&c&&(s.$$scope={dirty:c,ctx:e}),r.$set(s)},i(e){i||(Object(n.fb)(t.$$.fragment,e),Object(n.fb)(r.$$.fragment,e),Object(n.fb)(a.$$.fragment,e),i=!0)},o(e){Object(n.gb)(t.$$.fragment,e),Object(n.gb)(r.$$.fragment,e),Object(n.gb)(a.$$.fragment,e),i=!1},d(e){Object(n.x)(t,e),e&&Object(n.z)(c),Object(n.x)(r,e),e&&Object(n.z)(s),Object(n.x)(a,e)}}}function T(e){let t,c,r,s,a,i,o,b,l,u,O;document.title=t="LibreLingo - learn "+e[2]+" for free",r=new A.a({props:{dark:!0,hasAuth:!0}});let j=e[1],f=[];for(let t=0;t<j.length;t+=1)f[t]=L(k(e,j,t));const d=e=>Object(n.gb)(f[e],1,1,()=>{f[e]=null});return b=new S.a({props:{$$slots:{default:[N]},$$scope:{ctx:e}}}),{c(){c=Object(n.bb)(),Object(n.t)(r.$$.fragment),s=Object(n.bb)();for(let e=0;e<f.length;e+=1)f[e].c();a=Object(n.bb)(),i=Object(n.A)("footer"),o=Object(n.A)("div"),Object(n.t)(b.$$.fragment),l=Object(n.bb)(),u=Object(n.A)("p"),this.h()},l(e){Object(n.U)('[data-svelte="svelte-1xdlk4p"]',document.head).forEach(n.z),c=Object(n.o)(e),Object(n.m)(r.$$.fragment,e),s=Object(n.o)(e);for(let t=0;t<f.length;t+=1)f[t].l(e);a=Object(n.o)(e),i=Object(n.n)(e,"FOOTER",{class:!0});var t=Object(n.l)(i);o=Object(n.n)(t,"DIV",{class:!0});var O=Object(n.l)(o);Object(n.m)(b.$$.fragment,O),l=Object(n.o)(O),u=Object(n.n)(O,"P",{}),Object(n.l)(u).forEach(n.z),O.forEach(n.z),t.forEach(n.z),this.h()},h(){Object(n.h)(o,"class","content"),Object(n.h)(i,"class","footer")},m(e,t){Object(n.K)(e,c,t),Object(n.O)(r,e,t),Object(n.K)(e,s,t);for(let c=0;c<f.length;c+=1)f[c].m(e,t);Object(n.K)(e,a,t),Object(n.K)(e,i,t),Object(n.f)(i,o),Object(n.O)(b,o,null),Object(n.f)(o,l),Object(n.f)(o,u),O=!0},p(e,[c]){if((!O||4&c)&&t!==(t="LibreLingo - learn "+e[2]+" for free")&&(document.title=t),3&c){let t;for(j=e[1],t=0;t<j.length;t+=1){const r=k(e,j,t);f[t]?(f[t].p(r,c),Object(n.fb)(f[t],1)):(f[t]=L(r),f[t].c(),Object(n.fb)(f[t],1),f[t].m(a.parentNode,a))}for(Object(n.H)(),t=j.length;t<f.length;t+=1)d(t);Object(n.k)()}const r={};1024&c&&(r.$$scope={dirty:c,ctx:e}),b.$set(r)},i(e){if(!O){Object(n.fb)(r.$$.fragment,e);for(let e=0;e<j.length;e+=1)Object(n.fb)(f[e]);Object(n.fb)(b.$$.fragment,e),O=!0}},o(e){Object(n.gb)(r.$$.fragment,e),f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)Object(n.gb)(f[e]);Object(n.gb)(b.$$.fragment,e),O=!1},d(e){e&&Object(n.z)(c),Object(n.x)(r,e),e&&Object(n.z)(s),Object(n.y)(f,e),e&&Object(n.z)(a),e&&Object(n.z)(i),Object(n.x)(b)}}}async function Y(e,t){const{courseName:n}=e.params,{modules:r,languageName:s}=await c(95)(`./${n}/courseData.json`);return{courseName:n,modules:r,languageName:s}}function C(e,t,c){let{courseName:n=null}=t,{modules:r=null}=t,{languageName:s=null}=t;return e.$$set=e=>{"courseName"in e&&c(0,n=e.courseName),"modules"in e&&c(1,r=e.modules),"languageName"in e&&c(2,s=e.languageName)},[n,r,s]}class W extends n.a{constructor(e){var t;super(),document.getElementById("svelte-1rsvn2t-style")||((t=Object(n.A)("style")).id="svelte-1rsvn2t-style",t.textContent="@keyframes svelte-1rsvn2t-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.container.svelte-1rsvn2t{padding-right:20px;padding-left:20px}",Object(n.f)(document.head,t)),Object(n.J)(this,e,C,T,n.W,{courseName:0,modules:1,languageName:2})}}t.default=W},51:function(e,t,c){"use strict";(function(e){var n=c(33),r=c(55),s=c(8),a=c.n(s);let i,o,b;const l=t=>{const r=new(void 0!==e.env.JEST_WORKER_ID?c(45):c(45).default)(t).setMaxListeners(n.a.database.maxNumberOfListeners);return r.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{(void 0!==e.env.JEST_WORKER_ID?c(31):c(31).default).update(e=>({...e,dbUpdatedAt:Date.now()}))}),r};{const e=c(31).default,t=c(45).default;o=new t(`${n.a.database.remote}/${a.a.get("loginDb")}`,{skip_setup:!0,live:!0}),i=l(n.a.database.local),window._DB=i,a.a.get("loginDb")===Object(r.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),a.a.get("loginDb")&&n.a.features.authEnabled?fetch(`${n.a.database.remote}/_session`,{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),s())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{a.a.set("loginDb",Object(r.a)("---fakeUser"),{expires:n.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,c)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const s=await(await fetch(`${n.a.database.remote}/_session`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c})})).json();if(s.error){if("unauthorized"===s.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),a.a.set("loginDb",Object(r.a)(t),{expires:n.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{b&&(await b.cancel(),await fetch(`${n.a.database.remote}/_session`,{method:"delete"}))}finally{a.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await i.destroy(),window.location.reload(!1)}};const s=()=>{b=i.sync(o).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(i=l(n.a.database.local),i.__reset=async()=>{const e=await i.allDocs();await Promise.all(e.rows.map((function(e){return i.remove(e.id,e.value.rev)})))}),t.a=i}).call(this,c(32))},53:function(e,t,c){"use strict";var n=c(0);function r(e){let t,c;const r=e[4].default,s=Object(n.w)(r,e,e[3],null);return{c(){t=Object(n.A)("div"),s&&s.c(),this.h()},l(e){t=Object(n.n)(e,"DIV",{"data-size":!0,"data-size-desktop":!0,"data-size-tablet":!0,class:!0});var c=Object(n.l)(t);s&&s.l(c),c.forEach(n.z),this.h()},h(){Object(n.h)(t,"data-size",e[0]),Object(n.h)(t,"data-size-desktop",e[1]),Object(n.h)(t,"data-size-tablet",e[2]),Object(n.h)(t,"class","column"),Object(n.eb)(t,"is-one-third-desktop","1/3"===e[1]),Object(n.eb)(t,"is-half-tablet","1/2"===e[2]),Object(n.eb)(t,"is-one-third-tablet","1/3"===e[2]),Object(n.eb)(t,"is-one-quarter","1/4"===e[0]),Object(n.eb)(t,"is-one-third","1/3"===e[0]),Object(n.eb)(t,"is-three-fifths","3/5"===e[0]),Object(n.eb)(t,"is-1","1"===e[0])},m(e,r){Object(n.K)(e,t,r),s&&s.m(t,null),c=!0},p(e,[a]){s&&s.p&&8&a&&Object(n.ib)(s,r,e,e[3],a,null,null),(!c||1&a)&&Object(n.h)(t,"data-size",e[0]),(!c||2&a)&&Object(n.h)(t,"data-size-desktop",e[1]),(!c||4&a)&&Object(n.h)(t,"data-size-tablet",e[2]),2&a&&Object(n.eb)(t,"is-one-third-desktop","1/3"===e[1]),4&a&&Object(n.eb)(t,"is-half-tablet","1/2"===e[2]),4&a&&Object(n.eb)(t,"is-one-third-tablet","1/3"===e[2]),1&a&&Object(n.eb)(t,"is-one-quarter","1/4"===e[0]),1&a&&Object(n.eb)(t,"is-one-third","1/3"===e[0]),1&a&&Object(n.eb)(t,"is-three-fifths","3/5"===e[0]),1&a&&Object(n.eb)(t,"is-1","1"===e[0])},i(e){c||(Object(n.fb)(s,e),c=!0)},o(e){Object(n.gb)(s,e),c=!1},d(e){e&&Object(n.z)(t),s&&s.d(e)}}}function s(e,t,c){let{size:n=null}=t,{sizeDesktop:r=null}=t,{sizeTablet:s=null}=t,{$$slots:a={},$$scope:i}=t;return e.$$set=e=>{"size"in e&&c(0,n=e.size),"sizeDesktop"in e&&c(1,r=e.sizeDesktop),"sizeTablet"in e&&c(2,s=e.sizeTablet),"$$scope"in e&&c(3,i=e.$$scope)},[n,r,s,i,a]}class a extends n.a{constructor(e){super(),Object(n.J)(this,e,s,r,n.W,{size:0,sizeDesktop:1,sizeTablet:2})}}t.a=a},54:function(e,t,c){"use strict";var n=c(0);function r(e){let t,c;const r=e[3].default,s=Object(n.w)(r,e,e[2],null);return{c(){t=Object(n.A)("div"),s&&s.c(),this.h()},l(e){t=Object(n.n)(e,"DIV",{class:!0});var c=Object(n.l)(t);s&&s.l(c),c.forEach(n.z),this.h()},h(){Object(n.h)(t,"class","columns svelte-15b2wn7"),Object(n.eb)(t,"is-multiline",e[0]),Object(n.eb)(t,"is-reversed",e[1])},m(e,r){Object(n.K)(e,t,r),s&&s.m(t,null),c=!0},p(e,[c]){s&&s.p&&4&c&&Object(n.ib)(s,r,e,e[2],c,null,null),1&c&&Object(n.eb)(t,"is-multiline",e[0]),2&c&&Object(n.eb)(t,"is-reversed",e[1])},i(e){c||(Object(n.fb)(s,e),c=!0)},o(e){Object(n.gb)(s,e),c=!1},d(e){e&&Object(n.z)(t),s&&s.d(e)}}}function s(e,t,c){let{multiline:n=!1}=t,{reversed:r=!1}=t,{$$slots:s={},$$scope:a}=t;return e.$$set=e=>{"multiline"in e&&c(0,n=e.multiline),"reversed"in e&&c(1,r=e.reversed),"$$scope"in e&&c(2,a=e.$$scope)},[n,r,a,s]}class a extends n.a{constructor(e){var t;super(),document.getElementById("svelte-15b2wn7-style")||((t=Object(n.A)("style")).id="svelte-15b2wn7-style",t.textContent="@keyframes svelte-15b2wn7-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width: 768px){.is-reversed.svelte-15b2wn7{flex-direction:column-reverse;display:flex}}",Object(n.f)(document.head,t)),Object(n.J)(this,e,s,r,n.W,{multiline:0,reversed:1})}}t.a=a},55:function(e,t,c){"use strict";t.a=e=>`userdb-${(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)}`},67:function(e,t){},95:function(e,t,c){var n={"./german-from-english/courseData.json":[156,27],"./spanish-from-english/courseData.json":[157,43],"./test/courseData.json":[158,55]};function r(e){if(!c.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return c.e(t[1]).then((function(){return c.t(r,3)}))}r.keys=function(){return Object.keys(n)},r.id=95,e.exports=r}}]);