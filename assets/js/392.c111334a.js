(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{793:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"access-control-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-list"}},[e._v("#")]),e._v(" Access Control List")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#directory-structure"}},[e._v("Directory Structure")]),t("ul",[t("li",[t("a",{attrs:{href:"#create-configuration-file"}},[e._v("Create Configuration File")])]),t("li",[t("a",{attrs:{href:"#define-acl-configuration"}},[e._v("Define ACL Configuration")])])])]),t("li",[t("a",{attrs:{href:"#merge-acl-configuration"}},[e._v("Merge ACL Configuration")]),t("ul",[t("li",[t("a",{attrs:{href:"#modify-service-provider"}},[e._v("Modify Service Provider")])]),t("li",[t("a",{attrs:{href:"#register-method"}},[e._v("Register Method")])]),t("li",[t("a",{attrs:{href:"#clear-configuration-cache"}},[e._v("Clear Configuration Cache")])]),t("li",[t("a",{attrs:{href:"#verify-in-admin-panel"}},[e._v("Verify in Admin Panel")])])])]),t("li",[t("a",{attrs:{href:"#checking-roles-and-permissions"}},[e._v("Checking Roles and Permissions")]),t("ul",[t("li",[t("a",{attrs:{href:"#access-roles"}},[e._v("Access Roles")])]),t("li",[t("a",{attrs:{href:"#permission-checks"}},[e._v("Permission Checks")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Bagisto's Access Control List (ACL) feature enhances security by allowing administrators to finely manage user access across different application sections. It enables precise control over permissions, ensuring users only access authorized resources and actions. By defining roles and assigning privileges based on organizational structures or responsibilities, Bagisto's ACL strengthens governance, safeguards sensitive data, and ensures compliance with policies. This capability supports a secure and customizable user experience, adapting permissions dynamically to meet evolving organizational needs, thereby enhancing operational efficiency.")]),e._v(" "),t("h2",{attrs:{id:"directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),t("p",[e._v("To configure Access Control List (ACL) settings in Bagisto, follow these structured steps:")]),e._v(" "),t("h3",{attrs:{id:"create-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-configuration-file"}},[e._v("#")]),e._v(" Create Configuration File")]),e._v(" "),t("p",[e._v("Begin by creating a new file named "),t("code",[e._v("acl.php")]),e._v(" within the "),t("code",[e._v("Config")]),e._v(" directory of your package located at "),t("code",[e._v("packages/Webkul/Blog/src/Config")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("└── packages\n      └── Webkul\n         └── Blog\n            └── src\n                  ├── ...\n                  └── Config\n                     ├── acl.php\n                     └── ...\n")])])]),t("h3",{attrs:{id:"define-acl-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-acl-configuration"}},[e._v("#")]),e._v(" Define ACL Configuration")]),e._v(" "),t("p",[e._v("Inside "),t("code",[e._v("acl.php")]),e._v(", define ACL settings using an array format. Each array element represents a menu item or resource with parameters such as key, "),t("code",[e._v("name")]),e._v(", "),t("code",[e._v("route")]),e._v(", and "),t("code",[e._v("sort")]),e._v(". Here’s an example:")]),e._v(" "),t("p",[e._v("Add the following code to "),t("code",[e._v("acl.php")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'key'")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'blog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'name'")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'blog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'route'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'blog.admin.index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'sort'")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),t("p",[e._v("In the above code, we have defined an array for each menu item with the parameters (key, name, route, and sort). You need to define the menus you want to include in the ACL here.")]),e._v(" "),t("h2",{attrs:{id:"merge-acl-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-acl-configuration"}},[e._v("#")]),e._v(" Merge ACL Configuration")]),e._v(" "),t("p",[e._v("To merge the ACL configuration, follow these steps:")]),e._v(" "),t("h3",{attrs:{id:"modify-service-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modify-service-provider"}},[e._v("#")]),e._v(" Modify Service Provider")]),e._v(" "),t("p",[e._v("Navigate to the "),t("code",[e._v("BlogServiceProvider")]),e._v(" class within the "),t("code",[e._v("Webkul\\Blog\\Providers")]),e._v(" namespace.")]),e._v(" "),t("h3",{attrs:{id:"register-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-method"}},[e._v("#")]),e._v(" Register Method")]),e._v(" "),t("p",[e._v("Inside the "),t("code",[e._v("register")]),e._v(" method of your service provider, use the mergeConfigFrom method to merge your ACL configuration file:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("   "),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[e._v("StripeServiceProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ServiceProvider")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n      * Register services.\n      *\n      * @return void\n      */")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//...")]),e._v("\n         \n         "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mergeConfigFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dirname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/Config/acl.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'acl'")]),e._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("p",[e._v("Ensure that the path specified in mergeConfigFrom matches the location of your acl.php file.")]),e._v(" "),t("p",[e._v("This will merge the ACL configuration with the existing configuration.")]),e._v(" "),t("h3",{attrs:{id:"clear-configuration-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-configuration-cache"}},[e._v("#")]),e._v(" Clear Configuration Cache")]),e._v(" "),t("p",[e._v("After making changes, clear the configuration cache to apply the latest ACL configuration:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php artisan optimize\n")])])]),t("h3",{attrs:{id:"verify-in-admin-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verify-in-admin-panel"}},[e._v("#")]),e._v(" Verify in Admin Panel")]),e._v(" "),t("p",[e._v("Check the updated ACL configuration within the admin panel to confirm that menu items are correctly displayed and sorted according to your configuration.")]),e._v(" "),t("p",[e._v("This will ensure that the latest ACL configuration is used.")]),e._v(" "),t("h2",{attrs:{id:"checking-roles-and-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-roles-and-permissions"}},[e._v("#")]),e._v(" Checking Roles and Permissions")]),e._v(" "),t("p",[e._v("To manage roles and permissions effectively:")]),e._v(" "),t("h3",{attrs:{id:"access-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-roles"}},[e._v("#")]),e._v(" Access Roles")]),e._v(" "),t("p",[e._v("In the Admin model located in "),t("code",[e._v("Webkul\\User\\Models")]),e._v(", utilize the relationship with the Role model to manage "),t("code",[e._v("roles")]),e._v(" associated with users.")]),e._v(" "),t("h3",{attrs:{id:"permission-checks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permission-checks"}},[e._v("#")]),e._v(" Permission Checks")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("bouncer()")]),e._v(" helper function to verify if a user has specific permissions. Example usage:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bouncer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("hasPermission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$permission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Replace "),t("code",[e._v("$permission")]),e._v(" with the actual permission you want to check.")]),e._v(" "),t("p",[e._v("By following these steps, you can seamlessly configure and manage Access Control List (ACL) settings in Bagisto, ensuring secure and controlled access to administrative functionalities.")])])}),[],!1,null,null,null);t.default=n.exports}}]);