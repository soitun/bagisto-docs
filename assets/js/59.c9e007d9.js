(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{391:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repository"}},[t._v("#")]),t._v(" Repository")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#using-bagisto-package-generator"}},[t._v("Using Bagisto Package Generator")])]),s("li",[s("a",{attrs:{href:"#manual-setup-of-files"}},[t._v("Manual Setup of Files")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In traditional development, application logic is often written directly in the controller. However, there is an alternative approach that abstracts some of these calls into PHP classes called Repositories. The purpose of repositories is to decouple models from controllers and provide readable names for complex queries.")]),t._v(" "),s("p",[t._v("This file defines our Repository class. Instances of this class have a model property that is bound to an Eloquent model. With this binding in the constructor, we can call Eloquent methods such as findOrFail, update, or all from the class methods.")]),t._v(" "),s("p",[t._v("We are using the Prettus Repository package. You can find all available methods in the Prettus repository "),s("a",{attrs:{href:"https://github.com/andersao/l5-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(". Here are some examples:")]),t._v(" "),s("p",[t._v("Examples:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Sl. no.")]),t._v(" "),s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("all")]),t._v(" "),s("td",[t._v("Find all results in the Repository")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("paginate")]),t._v(" "),s("td",[t._v("Find all results in the Repository with pagination")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("find")]),t._v(" "),s("td",[t._v("Find a result by ID")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("with(['table_name'])")]),t._v(" "),s("td",[t._v("Load the model relationships")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("findWhereIn")]),t._v(" "),s("td",[t._v("Find results by multiple values in one field")])])])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bound in constructor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("PostRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Find all results in the Repository")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$posts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("postRepository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"using-bagisto-package-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-bagisto-package-generator"}},[t._v("#")]),t._v(" Using Bagisto Package Generator")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("This command creates a new Repository class in the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Repository")])]),t._v(" directory.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan package:make-repository PostRepository Webkul/Blog\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"manual-setup-of-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup-of-files"}},[t._v("#")]),t._v(" Manual Setup of Files")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Create a "),s("strong",[s("code",[t._v("Repository")])]),t._v(" folder inside "),s("strong",[s("code",[t._v("Webkul/Blog/src/")])]),t._v(" and create a file named "),s("strong",[s("code",[t._v("PostRepository.php")])]),t._v(". In the repository class, create the "),s("strong",[s("code",[t._v("model()")])]),t._v(" method that returns the path of your contract class.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                └── Repository\n                    └── PostRepository.php\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Copy the following code into your newly created repository file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("PostRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repository")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Specify the Model class name\n    *\n    * @return string\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Blog\\Contracts\\Post'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("Now, your "),s("strong",[s("code",[t._v("PostRepository")])]),t._v(" is ready to use.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);