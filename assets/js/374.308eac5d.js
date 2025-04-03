(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{755:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"admin-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-theme"}},[t._v("#")]),t._v(" Admin Theme")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#theme-configuration"}},[t._v("Theme Configuration")]),s("ul",[s("li",[s("a",{attrs:{href:"#key-configuration-parameters"}},[t._v("Key Configuration Parameters")])])])]),s("li",[s("a",{attrs:{href:"#creating-a-custom-theme"}},[t._v("Creating a Custom Theme")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("The Bagisto admin panel serves as the command center for your e-commerce operations. Customizing its appearance allows you to create a more efficient and branded management experience. This guide provides comprehensive instructions for configuring and developing custom admin themes to match your brand identity and workflow preferences.")]),t._v(" "),s("h2",{attrs:{id:"theme-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-configuration"}},[t._v("#")]),t._v(" Theme Configuration")]),t._v(" "),s("p",[t._v("Bagisto's theme system is managed through a central configuration file: "),s("code",[t._v("themes.php")]),t._v(". This file contains all the theme definitions and settings that determine how your storefront appears.")]),t._v(" "),s("h3",{attrs:{id:"key-configuration-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-configuration-parameters"}},[t._v("#")]),t._v(" Key Configuration Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[s("code",[t._v("admin-default")])])]),t._v(" "),s("td",[t._v("Designates the active theme for your admin view")])]),t._v(" "),s("tr",[s("td",[s("strong",[s("code",[t._v("name")])])]),t._v(" "),s("td",[t._v("The display name of your theme.")])]),t._v(" "),s("tr",[s("td",[s("strong",[s("code",[t._v("views_path")])])]),t._v(" "),s("td",[t._v("Location of the theme's blade template files.")])]),t._v(" "),s("tr",[s("td",[s("strong",[s("code",[t._v("assets_path")])])]),t._v(" "),s("td",[t._v("Location of CSS, JavaScript, and image files.")])]),t._v(" "),s("tr",[s("td",[s("strong",[s("code",[t._v("parent")])])]),t._v(" "),s("td",[t._v("(Optional) Parent theme to inherit from.")])]),t._v(" "),s("tr",[s("td",[s("strong",[s("code",[t._v("vite")])])]),t._v(" "),s("td",[t._v("Configuration for Vite assets bundling")])])])]),t._v(" "),s("ol",[s("li",[t._v("Locate the "),s("code",[t._v("themes.php")]),t._v(" File. Navigate to the "),s("code",[t._v("config")]),t._v(" folder located in the root directory of your Bagisto project.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- app\n- bin\n- bootstrap\n- config\n    ├── ...\n    └── themes.php  👈 This is the file we need\n- database\n- packages\n    └── Webkul\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Locate the "),s("code",[t._v("themes.php")]),t._v(" file inside the "),s("code",[t._v("config")]),t._v(" folder located in your project's root directory. Look for the keys "),s("code",[t._v("admin-default")]),t._v(" and "),s("code",[t._v("admin")]),t._v(". The configuration will appear as follows.")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/default/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/default/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Understand the structure")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("admin-default")]),t._v(" defines which theme is currently active")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("admin")]),t._v(" array contains all available themes")]),t._v(" "),s("li",[t._v("Each theme (like "),s("code",[t._v("default")]),t._v(") has its own configuration settings")])]),t._v(" "),s("h2",{attrs:{id:"creating-a-custom-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-theme"}},[t._v("#")]),t._v(" Creating a Custom Theme")]),t._v(" "),s("p",[t._v("Follow these four steps to create and implement a custom admin theme:")]),t._v(" "),s("ol",[s("li",[t._v("Add your new theme definition to the themes.php file under the admin section:")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/default/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/default/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/new-theme/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-new-theme-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/new-theme/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Set up the required directories for your new theme and create template files within the theme's views directory. Begin by customizing the dashboard.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("📁 resources\n └── 📁 admin-themes\n     └── 📁 new-theme\n         └── 📁 views\n             └── 📁 dashboard\n                 └── 📄 index.blade.php\n")])])]),s("p",[t._v("Example content for index.blade.php:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Theme Sample\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Change the "),s("code",[t._v("admin-default")]),t._v(" value in your "),s("code",[t._v("themes.php")]),t._v(" file to activate your new theme")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Clear the application cache to ensure your changes take effect:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan cache:clear\n")])])]),s("p",[t._v("Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This section covers the basic theme setup using resources. In the next topic, we'll explore an advanced setup with a separate package and Vite configuration.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);