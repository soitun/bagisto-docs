(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{357:function(t,s,e){t.exports=e.p+"assets/img/admin-acl-output.b9cf7d8a.png"},530:function(t,s,e){"use strict";e.r(s);var n=e(10),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"access-control-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-control-list"}},[t._v("#")]),t._v(" Access Control List")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#directory-structure"}},[t._v("Directory Structure")])]),s("li",[s("a",{attrs:{href:"#merge-configuration"}},[t._v("Merge Configuration")])]),s("li",[s("a",{attrs:{href:"#checking-roles-and-permissions"}},[t._v("Checking Roles and Permissions")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In addition to providing authentication services out of the box, Bagisto also offers an Access Control List (ACL) functionality. This feature allows administrators to control user access to different parts of Bagisto.")]),t._v(" "),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),s("p",[t._v("To configure the ACL, follow these steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a new file named "),s("strong",[s("code",[t._v("acl.php")])]),t._v(" in the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Config")])]),t._v(" folder of your package.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                └── Config\n                    ├── acl.php\n                    └── ...\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Add the following code to "),s("strong",[s("code",[t._v("acl.php")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'route'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog.admin.index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("p",[t._v("In the above code, we have defined an array for each menu item with the parameters (key, name, route, and sort). You need to define the menus you want to include in the ACL here.")])])]),t._v(" "),s("h2",{attrs:{id:"merge-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-configuration"}},[t._v("#")]),t._v(" Merge Configuration")]),t._v(" "),s("p",[t._v("To merge the ACL configuration, follow these steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the "),s("strong",[s("code",[t._v("BlogServiceProvider")])]),t._v(" class in the "),s("strong",[s("code",[t._v("Webkul\\Blog\\Providers")])]),t._v(" namespace.")])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("strong",[s("code",[t._v("register")])]),t._v(" method, add the following code to merge the ACL configuration:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("StripeServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n      * Register services.\n      *\n      * @return void\n      */")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n         \n         "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/acl.php'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'acl'")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v("This will merge the ACL configuration with the existing configuration.")])]),t._v(" "),s("li",[s("p",[t._v("After making the changes, run the following command to cache the latest changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan optimize\n")])])]),s("p",[t._v("This will ensure that the latest ACL configuration is used.")])]),t._v(" "),s("li",[s("p",[t._v("You can now check the updated ACL configuration in the admin panel:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(357),alt:"Admin ACL Output"}})])])]),t._v(" "),s("h2",{attrs:{id:"checking-roles-and-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-roles-and-permissions"}},[t._v("#")]),t._v(" Checking Roles and Permissions")]),t._v(" "),s("p",[t._v("To check roles and permissions, follow these steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the "),s("strong",[s("code",[t._v("Admin")])]),t._v(" model in the "),s("strong",[s("code",[t._v("Webkul\\User\\Models")])]),t._v(" namespace.")])]),t._v(" "),s("li",[s("p",[t._v("In this model, you will find a relationship binding with the "),s("strong",[s("code",[t._v("Role")])]),t._v(" model in the same namespace. You can use this relationship to access all the permissions of the current user.")])]),t._v(" "),s("li",[s("p",[t._v("We have provided the "),s("strong",[s("code",[t._v("bouncer()")])]),t._v(" helper function, which allows you to check permissions. Use the following code to check if the current user has a specific permission:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bouncer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPermission")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$permission")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Replace "),s("code",[t._v("$permission")]),t._v(" with the actual permission you want to check.")])])]),t._v(" "),s("p",[t._v("By following these steps, you can configure and manage the Access Control List (ACL) in Bagisto.")])])}),[],!1,null,null,null);s.default=a.exports}}]);