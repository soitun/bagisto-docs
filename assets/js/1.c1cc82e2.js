(window.webpackJsonp=window.webpackJsonp||[]).push([[1,15,27,28,37],{246:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));n(92);const i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",s=o(t);return r.test(s)?t:s+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),s=function(t){const e=t.match(i);if(e)return e[0]}(e);if(s&&n!==s)return!1;return o(t.path)===o(e)}function f(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return{}}function d(t,e,n,i){const{pages:s,themeConfig:r}=n,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return m(t);const o=a.sidebar||r.sidebar;if(o){const{base:n,config:i}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return"auto"===i?m(t):i?i.map(t=>function t(e,n,i,s=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}}(t,s,n)):[]}return[]}function m(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},247:function(t,e,n){},260:function(t,e,n){"use strict";n.r(e);var i=n(246),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},r=n(10),a=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},261:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(262),n(10)),r=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},262:function(t,e,n){"use strict";n(247)},266:function(t,e,n){},268:function(t,e,n){},282:function(t,e,n){"use strict";n.r(e);n(92);var i=n(301),s=n(246),r=n(260),a=n(303),o={name:"NavLinks",components:{NavLink:r.default,DropdownLink:i.default,LocaleSwitcher:a.default},data:()=>({version:"2.3"}),mounted(){let t=this.$route.path.split("/");this.version=t[1]||"2.3",this.currentVersion()},watch:{$route(){this.currentVersion()}},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const r=t[s],a=i[s]&&i[s].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===o)||(o=s)),{text:a,link:o}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"},contactUs(){const{contactUs:t}=this.$site.themeConfig;return t}},methods:{changeVersion(){let t=this.$route.path.split("/");t[1]=this.version,this.$router.push(t.join("/"))},currentVersion(){this.version=this.$route.path.split("/")[1]||"2.3"}}},l=(n(312),n(10)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e(),t._v(" "),e("a",{staticClass:"nav-item",attrs:{href:t.contactUs.link,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.contactUs.text)+"\n    "),e("OutboundLink")],1),t._v(" "),""!==t.$route.path.split("/")[1]?e("div",{staticClass:"nav-item"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.version,expression:"version"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.version=e.target.multiple?n:n[0]},t.changeVersion]}},[e("option",{attrs:{value:"master"}},[t._v("Master")]),t._v(" "),e("option",{attrs:{value:"2.3"}},[t._v("2.3")]),t._v(" "),e("option",{attrs:{value:"2.2"}},[t._v("2.2")]),t._v(" "),e("option",{attrs:{value:"2.1"}},[t._v("2.1")]),t._v(" "),e("option",{attrs:{value:"2.0"}},[t._v("2.0")]),t._v(" "),e("option",{attrs:{value:"1.5.x"}},[t._v("1.5.x")]),t._v(" "),e("option",{attrs:{value:"1.x"}},[t._v("1.x")])])]):t._e(),t._v(" "),e("LocaleSwitcher",{staticClass:"nav-item"})],2):t._e()}),[],!1,null,null,null);e.default=u.exports},286:function(t,e,n){"use strict";n(266)},288:function(t,e,n){"use strict";n(268)},297:function(t,e,n){},301:function(t,e,n){"use strict";n.r(e);var i=n(260),s=n(261),r=n(96),a=n.n(r),o={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:s.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>a()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(286),n(10)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},303:function(t,e,n){"use strict";n.r(e);var i={name:"LocaleSwitcher",mounted(){this.initGoogleTranslate()},methods:{initGoogleTranslate(){if(window.googleTranslateElementInit||(window.googleTranslateElementInit=()=>{new window.google.translate.TranslateElement({layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:!1},"google_translate_element"),this.observeTranslateMenu()}),!document.querySelector('script[src*="translate_a/element.js"]')){const t=document.createElement("script");t.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",t.defer=!0,document.body.appendChild(t)}},observeTranslateMenu(){new MutationObserver(()=>{const t=document.querySelector(".goog-te-menu-frame.skiptranslate"),e=document.querySelector(".skiptranslate.goog-te-gadget");"visible"===(null==t?void 0:t.style.visibility)?null==e||e.classList.add("no-pointer-events"):null==e||e.classList.remove("no-pointer-events")}).observe(document.body,{childList:!0,subtree:!0})}}},s=(n(288),n(10)),r=Object(s.a)(i,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"locale-switcher-container"},[t("div",{attrs:{id:"google_translate_element"}})])}],!1,null,"4cb0e834",null);e.default=r.exports},312:function(t,e,n){"use strict";n(297)}}]);