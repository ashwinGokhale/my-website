(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Kfvu:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.OutboundLink=s,e.trackCustomEvent=function(t){var e=t.category,n=t.action,o=t.label,r=t.value,a=t.nonInteraction,i=void 0===a||a,c=t.transport,s=t.hitCallback,u=t.callbackTimeout,b=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var f={eventCategory:e,eventAction:n,eventLabel:o,eventValue:r,nonInteraction:i,transport:c};s&&"function"==typeof s&&(f.hitCallback=l(s,b)),window.ga("send","event",f)}};var r=o(n("pVnL")),a=o(n("8OQS")),i=o(n("q1tI")),c=o(n("17x9")),l=function(t,e){void 0===e&&(e=1e3);var n=!1,o=function(){n||(n=!0,t())};return setTimeout(o,e),o};function s(t){var e=t.eventCategory,n=t.eventAction,o=t.eventLabel,c=t.eventValue,l=(0,a.default)(t,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,r.default)({},l,{onClick:function(r){"function"==typeof t.onClick&&t.onClick(r);var a=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(a=!1),t.target&&"_self"!==t.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:e||"Outbound Link",eventAction:n||"click",eventLabel:o||t.href,eventValue:c,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=t.href)}}):a&&(document.location=t.href),!1}}))}s.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},QeBL:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),a=n("af+D"),i=n("9Dj+"),c=n("ie5d"),l=n("wTIg"),s=n("2A+t"),u=n("MXbp"),b=(n("n7j8"),n("TAD1"),n("HXzo"),n("HQhv"),n("U6Bt"),n("sC2a"),n("AqHK"),n("YbXK"),n("cFtU"),n("q8oJ"),n("C9fy"),n("MIFh"),n("sc67"),n("+ar0"),n("xtjI"),n("JHok"),n("OeI1"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("R48M"),n("m210"),n("4DPX"),n("7O5W")),f=n("17x9"),p=n.n(f);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function h(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""})).substr(0,1).toLowerCase()+t.substr(1);var e}var j=!1;try{j=!0}catch(W){}function w(t){return null===t?null:"object"===d(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function k(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?y({},t,e):{}}function x(t){var e=t.icon,n=t.mask,o=t.symbol,r=t.className,a=t.title,i=w(e),c=k("classes",[].concat(v(function(t){var e,n=t.spin,o=t.pulse,r=t.fixedWidth,a=t.inverse,i=t.border,c=t.listItem,l=t.flip,s=t.size,u=t.rotation,b=t.pull,f=(y(e={"fa-spin":n,"fa-pulse":o,"fa-fw":r,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(s),null!=s),y(e,"fa-rotate-".concat(u),null!=u),y(e,"fa-pull-".concat(b),null!=b),y(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(f).map(function(t){return f[t]?t:null}).filter(function(t){return t})}(t)),v(r.split(" ")))),l=k("transform","string"==typeof t.transform?b.c.transform(t.transform):t.transform),s=k("mask",w(n)),u=Object(b.a)(i,O({},c,{},l,{},s,{symbol:o,title:a}));if(!u)return function(){var t;!j&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",i),null;var f=u.abstract,p={};return Object.keys(t).forEach(function(e){x.defaultProps.hasOwnProperty(e)||(p[e]=t[e])}),L(f[0],p)}x.displayName="FontAwesomeIcon",x.propTypes={border:p.a.bool,className:p.a.string,mask:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),fixedWidth:p.a.bool,inverse:p.a.bool,flip:p.a.oneOf(["horizontal","vertical","both"]),icon:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),listItem:p.a.bool,pull:p.a.oneOf(["right","left"]),pulse:p.a.bool,rotation:p.a.oneOf([90,180,270]),size:p.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.a.bool,symbol:p.a.oneOfType([p.a.bool,p.a.string]),title:p.a.string,transform:p.a.oneOfType([p.a.string,p.a.object]),swapOpacity:p.a.bool},x.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var L=function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map(function(n){return t(e,n)}),a=Object.keys(n.attributes||{}).reduce(function(t,e){var o=n.attributes[e];switch(e){case"class":t.attrs.className=o,delete n.attributes.class;break;case"style":t.attrs.style=o.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var n,o=e.indexOf(":"),r=m(e.slice(0,o)),a=e.slice(o+1).trim();return r.startsWith("webkit")?t[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=a:t[r]=a,t},{});break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=o:t.attrs[m(e)]=o}return t},{attrs:{}}),i=o.style,c=void 0===i?{}:i,l=h(o,["style"]);return a.attrs.style=O({},a.attrs.style,{},c),e.apply(void 0,[n.tag,O({},a.attrs,{},l)].concat(v(r)))}.bind(null,r.a.createElement),C=n("Kfvu"),A=n("Vkh2"),_=n("Kpnx"),P=n("Hivy"),I=n("FZdU"),S=n("AQQG"),T=n("PcS7"),D=n("qKvR"),Q=function(){var t=Object(T.b)(),e=t[0],n=t[1],o="dark"===e;return Object(s.c)("footer",{style:{textAlign:"center",display:"block",position:"absolute",bottom:0,color:"textMuted",paddingBottom:15}},Object(s.c)("button",{sx:{variant:"buttons.toggle",fontWeight:"semibold",display:"block",mx:"auto",mb:3},onClick:function(t){n(o?"light":"dark")},type:"button","aria-label":"Toggle dark mode"},o?"Light":"Dark"),"Copyright © ",(new Date).getFullYear(),". All rights reserved.",Object(s.c)("br",null))},R=function(){return Object(s.c)("div",null,Object(s.c)(S.a,null,Object(s.c)(I.a,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_blue",left:"70%",top:"20%"}),Object(s.c)(I.a,{icon:"triangle",width:8,stroke:!0,color:"icon_pink",left:"25%",top:"5%"}),Object(s.c)(I.a,{icon:"box",width:12,color:"icon_green",left:"15%",top:"30%"})),Object(s.c)(S.b,null,Object(s.c)(I.a,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"95%",top:"50%"}),Object(s.c)(I.a,{icon:"circle",width:6,color:"icon_brightest",left:"85%",top:"15%"}),Object(s.c)(I.a,{icon:"hexa",stroke:!0,width:8,color:"icon_yellow",left:"50%",top:"40%"}),Object(s.c)(I.a,{icon:"circle",width:6,color:"icon_brightest",left:"4%",top:"20%"}),Object(s.c)(I.a,{icon:"cross",width:8,stroke:!0,color:"icon_purple",left:"10%",top:"70%"})),Object(s.c)(I.a,{icon:"hexa",width:8,stroke:!0,color:"icon_orange",left:"80%",top:"70%"}),Object(s.c)(I.a,{icon:"circle",width:12,color:"icon_darkest",left:"70%",top:"60%"}),Object(s.c)(I.a,{icon:"hexa",width:8,stroke:!0,color:"icon_orange",left:"80%",top:"70%"}))},E=Object(l.a)("div",{target:"euc56a90"})("path{",Object(S.d)("15s"),";}"),K=function(t){var e=t.offset;return Object(s.c)("div",null,Object(s.c)(A.a,{fill:"divider",speed:.2,offset:e},Object(s.c)("div",{sx:{position:"absolute",bottom:0,width:"full",transform:"matrix(1, 0, 0, -1, 0, 0)"}},Object(s.c)(E,{sx:{position:"relative",height:"full",svg:{width:"100%",height:"40vh"}}},Object(s.c)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"contact-wave",viewBox:"0 0 800 338.05",preserveAspectRatio:"none"},Object(s.c)("path",null,Object(s.c)("animate",{attributeName:"d",values:"M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",repeatCount:"indefinite",dur:"30s"})))))),Object(s.c)(P.a,{sx:{variant:"texts.bigger"},speed:.4,offset:e},Object(s.c)(_.a,null,Object(s.c)(u.b.h2,null,"Contact me"),Object(s.c)(u.b.a,{as:C.OutboundLink,href:"https://github.com/ashwinGokhale",target:"_blank",rel:"noopener noreferrer"}," ",Object(s.c)("button",{sx:{variant:"buttons.contact",fontWeight:"semibold",display:"inline-block"},type:"button","aria-label":"Github Link"},Object(s.c)(x,{sx:{marginRight:"3px"},icon:["fab","github"]})," ","Github")),Object(s.c)(u.b.a,{as:C.OutboundLink,href:"mailto:ashwingokhale98@gmail.com",target:"_blank",rel:"noopener noreferrer"}," ",Object(s.c)("button",{sx:{variant:"buttons.contact",backgroundColor:"secondary",color:"icon_brightest",fontWeight:"semibold",display:"inline-block"},type:"button","aria-label":"Email Link"},Object(s.c)(x,{sx:{marginRight:"3px"},icon:"envelope"})," Email")),Object(s.c)(u.b.a,{as:C.OutboundLink,href:"https://www.linkedin.com/in/ashwin-gokhale",target:"_blank",rel:"noopener noreferrer"}," ",Object(s.c)("button",{sx:{variant:"buttons.contact",backgroundColor:"#0077B5",color:"icon_brightest",fontWeight:"semibold",display:"inline-block"},type:"button","aria-label":"Linkedin Link"},Object(s.c)(x,{sx:{marginRight:"3px"},icon:["fab","linkedin"]})," ","Linkedin")),Object(s.c)(u.b.a,{as:C.OutboundLink,href:"/Ashwin_Gokhale_Resume.pdf",target:"_blank",rel:"nofollow"}," ",Object(s.c)("button",{sx:{variant:"buttons.contact",backgroundColor:"primary",color:"icon_brightest",fontWeight:"semibold",display:"inline-block"},type:"button","aria-label":"Resume Link"},Object(s.c)(x,{sx:{marginRight:"3px"},icon:"file-alt"})," Resume"))),Object(s.c)(Q,null)),Object(s.c)(A.a,{speed:.1,offset:e},Object(s.c)(R,null)))};e.default=function(){return Object(D.d)(i.a,null,Object(D.d)(a.Parallax,{pages:2},Object(D.d)(c.b,{offset:0}),Object(D.d)(K,{offset:1})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-93a8193e9bb68c71f73d.js.map