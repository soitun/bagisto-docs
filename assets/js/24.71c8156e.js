(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{271:function(t,e,s){},280:function(t,e,s){"use strict";s(271)},295:function(t,e,s){"use strict";s.r(e);var i={name:"TopNav",data:()=>({displayText:""}),mounted(){this.changeText(),this.$router.afterEach(()=>{this.isSidebarOpen=!1,this.changeText()})},methods:{changeText(){let t=this.$route.path.split("/")[1];["2.x"].includes(t)?this.displayText="This is the documentation for the current version (v2.x) of Bagisto. Stay informed and make the most of Bagisto's capabilities.":this.displayText='Heads up: You are viewing outdated documentation for Bagisto. Please consider upgrading to <a class="nav-text latest-version-link" href="/2.x/prologue">v2.x</a> for the latest information.'}}},a=(s(280),s(10)),n=Object(a.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"top-nav"},[t("div",{staticClass:"nav-text",domProps:{innerHTML:this._s(this.displayText)}})])}),[],!1,null,null,null);e.default=n.exports}}]);