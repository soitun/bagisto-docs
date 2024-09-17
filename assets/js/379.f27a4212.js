(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{757:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"admin-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-menu"}},[t._v("#")]),t._v(" Admin Menu")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#configure-the-admin-menu"}},[t._v("Configure the admin menu")]),e("ul",[e("li",[e("a",{attrs:{href:"#create-configuration-file"}},[t._v("Create Configuration File:")])]),e("li",[e("a",{attrs:{href:"#define-menu-items"}},[t._v("Define Menu Items")])]),e("li",[e("a",{attrs:{href:"#define-routes"}},[t._v("Define Routes")])]),e("li",[e("a",{attrs:{href:"#add-menu-icon"}},[t._v("Add Menu Icon")])]),e("li",[e("a",{attrs:{href:"#merge-configuration"}},[t._v("Merge Configuration:")])]),e("li",[e("a",{attrs:{href:"#optimize-application"}},[t._v("Optimize Application")])])])]),e("li",[e("a",{attrs:{href:"#level-of-admin-menu"}},[t._v("Level of Admin Menu")]),e("ul",[e("li",[e("a",{attrs:{href:"#first-level-sidebar"}},[t._v("First Level (Sidebar):")])]),e("li",[e("a",{attrs:{href:"#second-level-hover-menu"}},[t._v("Second Level (Hover Menu):")])]),e("li",[e("a",{attrs:{href:"#third-level-tabs"}},[t._v("Third Level (Tabs):")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The admin menu in Bagisto allows developers to customize and extend the default menu items within the admin panel. By adding custom menu items, you can provide easy access to various sections and features specific to your package. This guide will walk you through the process of configuring the admin menu for your custom package.")]),t._v(" "),e("h2",{attrs:{id:"configure-the-admin-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-admin-menu"}},[t._v("#")]),t._v(" Configure the admin menu")]),t._v(" "),e("p",[t._v("To ensure that the admin menu includes the necessary configuration, follow these steps:")]),t._v(" "),e("h3",{attrs:{id:"create-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-configuration-file"}},[t._v("#")]),t._v(" Create Configuration File:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Navigate to your package's source directory, typically located at "),e("code",[t._v("packages/Webkul/Blog/src")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a new directory named "),e("code",[t._v("Config")]),t._v(" if it doesn't already exist.")])]),t._v(" "),e("li",[e("p",[t._v("Inside the "),e("code",[t._v("Config")]),t._v(" directory, create a file "),e("code",[t._v("named admin-menu.php")]),t._v(".")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                └── Config\n                    └── admin-menu.php\n")])])]),e("h3",{attrs:{id:"define-menu-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-menu-items"}},[t._v("#")]),t._v(" Define Menu Items")]),t._v(" "),e("p",[t._v("Open "),e("code",[t._v("admin-menu.php")]),t._v(" and define your menu items using an array structure. Each item should include:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("key")]),t._v(" Unique identifier for the menu item.")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v(" Display name of the menu item.")]),t._v(" "),e("li",[e("code",[t._v("route")]),t._v(" Laravel route name corresponding to the menu item.")]),t._v(" "),e("li",[e("code",[t._v("sort")]),t._v(" Optional. Sort order for menu items.")]),t._v(" "),e("li",[e("code",[t._v("icon")]),t._v(" Optional. CSS class for an icon associated with the menu item.")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blogs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Blogs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'route'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog.admin.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'icon'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'icon-blog'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("h3",{attrs:{id:"define-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-routes"}},[t._v("#")]),t._v(" Define Routes")]),t._v(" "),e("p",[t._v("In your package's "),e("code",[t._v("admin-routes.php")]),t._v(" file, define the named route used in"),e("code",[t._v("admin-menu.php")]),t._v(" as follows.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/blog'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PostController")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog.admin.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("In this step, we define the route that corresponds to the menu item added in the previous step.\n")])])]),e("h3",{attrs:{id:"add-menu-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-menu-icon"}},[t._v("#")]),t._v(" Add Menu Icon")]),t._v(" "),e("p",[t._v("Place your custom icon font (e.g., "),e("code",[t._v("font.woff")]),t._v(") under "),e("code",[t._v("assets/fonts/")]),t._v(".")]),t._v(" "),e("p",[t._v("Define the icon in your CSS file (e.g., "),e("code",[t._v("assets/css/app.css")]),t._v(") using a pseudo-element class.")]),t._v(" "),e("p",[t._v("For example")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon-blog:before")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\e929"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Your Icon Code */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"merge-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge-configuration"}},[t._v("#")]),t._v(" Merge Configuration:")]),t._v(" "),e("p",[t._v("In your package's service provider ("),e("code",[t._v("BlogServiceProvider")]),t._v("), use "),e("code",[t._v("mergeConfigFrom()")]),t._v(" to integrate your "),e("code",[t._v("admin-menu.php")]),t._v(" configuration with the core admin menu.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("BlogServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Register services.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/admin-menu.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'menu.admin'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h3",{attrs:{id:"optimize-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optimize-application"}},[t._v("#")]),t._v(" Optimize Application")]),t._v(" "),e("p",[t._v("Finally, run the following command to optimize your application:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan optimize:clear\n")])])]),e("p",[t._v("After completing these steps, your custom menu item (Blogs) with its associated route and icon should appear within the admin panel of Bagisto.")]),t._v(" "),e("h2",{attrs:{id:"level-of-admin-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#level-of-admin-menu"}},[t._v("#")]),t._v(" Level of Admin Menu")]),t._v(" "),e("p",[t._v("In Bagisto, the admin menu offers three levels of navigation to organize and access different sections and features efficiently:")]),t._v(" "),e("h3",{attrs:{id:"first-level-sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#first-level-sidebar"}},[t._v("#")]),t._v(" First Level (Sidebar):")]),t._v(" "),e("p",[t._v("This level appears in the sidebar and contains the primary menu items. These are the main sections of the admin panel, such as Dashboard, Catalog, and Sales.")]),t._v(" "),e("h3",{attrs:{id:"second-level-hover-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#second-level-hover-menu"}},[t._v("#")]),t._v(" Second Level (Hover Menu):")]),t._v(" "),e("p",[t._v('When you hover over an item in the first-level sidebar menu, the second level appears. This level contains sub-items related to the main section, providing more specific options. For example, hovering over "Catalog" might show options like Products, Categories, and Attributes.')]),t._v(" "),e("h3",{attrs:{id:"third-level-tabs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#third-level-tabs"}},[t._v("#")]),t._v(" Third Level (Tabs):")]),t._v(" "),e("p",[t._v("The third level is presented as tabs within the second-level menu item. When you select a sub-item from the second level, it might open a page with additional tabs for further navigation. These tabs allow for deeper, more granular control and management within a specific section, such as different tabs for managing various attributes of a product.")]),t._v(" "),e("p",[t._v("By utilizing these three levels of navigation, Bagisto ensures a structured and intuitive user interface, making it easier to manage complex administrative tasks.")])])}),[],!1,null,null,null);e.default=n.exports}}]);