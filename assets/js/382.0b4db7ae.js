(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{761:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#how-to-create-controllers"}},[t._v("How to create Controllers")]),s("ul",[s("li",[s("a",{attrs:{href:"#directory-structure"}},[t._v("Directory Structure")])]),s("li",[s("a",{attrs:{href:"#creating-controller-files"}},[t._v("Creating Controller Files")])]),s("li",[s("a",{attrs:{href:"#postcontroller-php-for-admin"}},[t._v("PostController.php for Admin")])]),s("li",[s("a",{attrs:{href:"#postcontroller-php-for-shop"}},[t._v("PostController.php for Shop")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In Laravel, controllers are responsible for handling the request logic of an application. They act as intermediaries between the models and views, processing user input, interacting with the data layer, and returning the appropriate responses. By organizing related request handling logic into separate classes, controllers make it easier to manage and maintain the application's codebase.")]),t._v(" "),s("p",[t._v("To learn in detail about Controllers, you can visit the Laravel documentation "),s("a",{attrs:{href:"https://laravel.com/docs/11.x/controllers",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"how-to-create-controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-controllers"}},[t._v("#")]),t._v(" How to create Controllers")]),t._v(" "),s("p",[t._v('To start building a controller for our blog posts within the Laravel package named "Blog", follow the steps below:')]),t._v(" "),s("h3",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),s("p",[t._v("Create the necessary directory structure within the "),s("code",[t._v("packages/Webkul/Blog/src")]),t._v(" path. To create the directory structure follow the following steps:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Navigate to the "),s("code",[t._v("packages/Webkul/Blog/src")]),t._v(" directory.")])]),t._v(" "),s("li",[s("p",[t._v("Create an "),s("code",[t._v("Http")]),t._v(" folder inside "),s("code",[t._v("src")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Inside the "),s("code",[t._v("Http")]),t._v(" folder, create another folder named "),s("code",[t._v("Controllers")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Inside the "),s("code",[t._v("Controllers")]),t._v(" folder, create one file named "),s("code",[t._v("Controller.php")]),t._v(" and two folders, namely "),s("code",[t._v("Admin")]),t._v(" and "),s("code",[t._v("Shop")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Inside both the "),s("code",[t._v("Admin")]),t._v(" and "),s("code",[t._v("Shop")]),t._v(" folders, create a "),s("code",[t._v("PostController.php")]),t._v(" file. The updated directory structure will look like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                └── Http\n                    └── Controllers\n                        ├── Controller.php\n                        ├── Admin\n                        │   └── PostController.php\n                        └── Shop\n                            └── PostController.php\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"creating-controller-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-controller-files"}},[t._v("#")]),t._v(" Creating Controller Files")]),t._v(" "),s("p",[t._v("Now, create the necessary controller files.")]),t._v(" "),s("h4",{attrs:{id:"base-controller-controller-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-controller-controller-php"}},[t._v("#")]),t._v(" Base Controller (Controller.php)")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("packages/Webkul/Blog/src/Http/Controllers/Controller.php")]),t._v(", you can define the base controller for your package:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DispatchesJobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Routing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" BaseController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Validation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ValidatesRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AuthorizesRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("AuthorizesRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DispatchesJobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ValidatesRequests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h3",{attrs:{id:"postcontroller-php-for-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcontroller-php-for-admin"}},[t._v("#")]),t._v(" PostController.php for Admin")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("packages/Webkul/Blog/src/Http/Controllers/Admin/PostController.php")]),t._v(", define the Admin post controller:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("PostController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a controller instance.\n     * \n     * @return void\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("PostRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Index.\n     * \n     * @return \\Illuminate\\View\\View\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$blogs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("postRepository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog::admin.index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blogs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create.\n     * \n     * @return \\Illuminate\\View\\View\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Store.\n     * \n     * @return \\Illuminate\\View\\View\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Function to update items.\n     */")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Function to remove items.\n     */")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h3",{attrs:{id:"postcontroller-php-for-shop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcontroller-php-for-shop"}},[t._v("#")]),t._v(" PostController.php for Shop")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("packages/Webkul/Blog/src/Http/Controllers/Shop/PostController.php")]),t._v(", define the Shop post controller:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Shop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("PostController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a controller instance.\n     * \n     * @return void\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("PostRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Index.\n     * \n     * @return \\Illuminate\\View\\View\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$blogs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("postRepository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'author'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blog::shop.index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'blogs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Blog details.\n     * \n     * @return \\Illuminate\\View\\View\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v('By following these steps, you will have created the necessary structure and files for handling blog posts within your "Blog" package. You can now add the specific logic for each method to handle the functionality required for your blog posts in both the admin and shop areas.')])])}),[],!1,null,null,null);s.default=e.exports}}]);