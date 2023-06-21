(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{443:function(t,e,a){"use strict";a.r(e);var s=a(10),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation:")]),t._v(" "),e("ul",[e("li",[t._v("You can clone the package from the GitHub "),e("a",{attrs:{href:"https://bagisto.com/en/headless-ecommerce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("open-source headless laravel"),e("OutboundLink")],1),t._v(" repository.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("composer require bagisto/graphql-api dev-main\n")])])]),e("ul",[e("li",[t._v("Add the below-line inside the "),e("strong",[t._v("modules")]),t._v(" index in "),e("strong",[t._v("config/concord.php")]),t._v(" file:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\\Webkul\\GraphQLAPI\\Providers\\ModuleServiceProvider::class,\n")])])]),e("ul",[e("li",[t._v("Find a file "),e("strong",[t._v("app/Http/Kernel.php")]),t._v(" from root and add these two "),e("strong",[t._v("middlewares")]),t._v(" inside the "),e("strong",[t._v("$middleware")]),t._v(" array:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n\\Illuminate\\Session\\Middleware\\StartSession::class,\n")])])]),e("ul",[e("li",[t._v("Add the "),e("strong",[t._v("JWT_TTL (JWT time to live)")]),t._v(" & "),e("strong",[t._v("JWT_SHOW_BLACKLIST_EXCEPTION")]),t._v(" entries in the "),e("strong",[t._v(".env")]),t._v(" file:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("JWT_TTL=525600\nJWT_SHOW_BLACKLIST_EXCEPTION=true\n")])])]),e("h4",{attrs:{id:"to-install-and-publish-the-assests-and-configurations-run-below-command-from-the-root-in-terminal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-install-and-publish-the-assests-and-configurations-run-below-command-from-the-root-in-terminal"}},[t._v("#")]),t._v(" To install and publish the assests and configurations, run below command from the root in terminal:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan bagisto-graphql:install\n")])])]),e("h3",{attrs:{id:"now-to-use-the-graphql-playground-for-testing-the-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#now-to-use-the-graphql-playground-for-testing-the-apis"}},[t._v("#")]),t._v(" Now to use the graphql-playground for testing the APIs:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http://your-domain.com/graphql-playground\n")])])]),e("h3",{attrs:{id:"or-you-can-also-use-the-postmen-for-testing-the-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#or-you-can-also-use-the-postmen-for-testing-the-apis"}},[t._v("#")]),t._v(" Or you can also use the Postmen for testing the APIs:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http://your-domain.com/graphql\n")])])]),e("blockquote",[e("p",[t._v("That's it, now just execute the project on your specified domain.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);