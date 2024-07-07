(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{653:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#using-bagisto-package-generator"}},[t._v("Using Bagisto Package Generator")])]),e("li",[e("a",{attrs:{href:"#using-laravel-artisan-command"}},[t._v("Using Laravel Artisan Command")]),e("ul",[e("li",[e("a",{attrs:{href:"#create-the-contract"}},[t._v("Create the Contract")])]),e("li",[e("a",{attrs:{href:"#create-the-proxy"}},[t._v("Create the Proxy")])]),e("li",[e("a",{attrs:{href:"#create-the-model"}},[t._v("Create the Model")])]),e("li",[e("a",{attrs:{href:"#create-module-service-provider"}},[t._v("Create Module Service Provider")])]),e("li",[e("a",{attrs:{href:"#registering-moduleserviceprovider"}},[t._v("Registering ModuleServiceProvider")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v('Laravel includes Eloquent, an object-relational mapper (ORM) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table. In addition to retrieving records from the database table, Eloquent models allow you to insert, update, and delete records from the table as well.\nTo understand Models in detail, you can visit the Laravel documentation '),e("a",{attrs:{href:"https://laravel.com/docs/10.x/eloquent",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("We are using the "),e("a",{attrs:{href:"https://packagist.org/packages/konekt/concord",target:"_blank",rel:"noopener noreferrer"}},[t._v("konekt/concord"),e("OutboundLink")],1),t._v(" package, which is an extension of Laravel. It helps in building modular Laravel applications.")]),t._v(" "),e("p",[t._v("Let's create a new model for your application. We will assume that the package name is \""),e("strong",[t._v("Blog")]),t._v('". Follow these steps:')]),t._v(" "),e("h2",{attrs:{id:"using-bagisto-package-generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-bagisto-package-generator"}},[t._v("#")]),t._v(" Using Bagisto Package Generator")]),t._v(" "),e("p",[t._v("To create a new "),e("code",[t._v("Post")]),t._v(" Model inside your package using the Bagisto Package Generator, follow these steps")]),t._v(" "),e("p",[t._v("Execute the following command in your terminal:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("php artisan package:make-model Post Webkul/Blog\n")])])]),e("p",[t._v("This command creates the following files:")]),t._v(" "),e("ul",[e("li",[t._v("New model "),e("strong",[e("code",[t._v("Post.php")])]),t._v(" in the "),e("strong",[e("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" directory.")]),t._v(" "),e("li",[t._v("New model proxy "),e("strong",[e("code",[t._v("PostProxy.php")])]),t._v(" in the "),e("strong",[e("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" directory.")]),t._v(" "),e("li",[t._v("New model contract "),e("strong",[e("code",[t._v("Post.php*")])]),t._v(" in the "),e("strong",[e("code",[t._v("packages/Webkul/Blog/src/Contracts")])]),t._v(" directory.")])]),t._v(" "),e("h2",{attrs:{id:"using-laravel-artisan-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-laravel-artisan-command"}},[t._v("#")]),t._v(" Using Laravel Artisan Command")]),t._v(" "),e("p",[t._v("Before creating the model class, it's essential to create two additional components: the "),e("code",[t._v("Contract")]),t._v(" and the "),e("code",[t._v("Proxy")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"create-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-contract"}},[t._v("#")]),t._v(" Create the Contract")]),t._v(" "),e("p",[t._v("Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the "),e("strong",[e("code",[t._v("Illuminate\\Contracts\\Queue\\Queue")])]),t._v(" contract defines the methods needed for queueing jobs, while the "),e("strong",[e("code",[t._v("Illuminate\\Contracts\\Mail\\Mailer")])]),t._v(" contract defines the methods needed for sending an email.")]),t._v(" "),e("p",[t._v("Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with various drivers and a mailer implementation powered by SwiftMailer.")]),t._v(" "),e("p",[t._v("All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for all available contracts and a single, decoupled package that can be used by package developers.")]),t._v(" "),e("p",[t._v("Now, create a folder named "),e("strong",[e("code",[t._v("Contracts")])]),t._v(" inside "),e("strong",[e("code",[t._v("Webkul/Blog/src/")])]),t._v(" and create an interface file named "),e("strong",[e("code",[t._v("Post.php")])]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("packages\n└── Webkul\n    └── Blog\n        └── src\n            ├── ...\n            └── Contracts\n                └── Post.php\n")])])]),e("p",[t._v("Copy the following code into the "),e("strong",[e("code",[t._v("Post.php")])]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Post")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h3",{attrs:{id:"create-the-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-proxy"}},[t._v("#")]),t._v(" Create the Proxy")]),t._v(" "),e("p",[t._v("Proxies, as their name suggests, act as intermediaries to the actual model class. Model proxies are used to override the functionality of existing models without creating a new database table.")]),t._v(" "),e("p",[t._v("Navigate to the directory "),e("code",[t._v("packages/Webkul/Blog/src/")]),t._v(" and create a new folder named "),e("code",[t._v("Models")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── packages\n  └── Webkul\n    └── Blog\n    └── src\n      ├── ...\n      └── Models\n")])])]),e("p",[t._v("Inside the "),e("code",[t._v("Models")]),t._v(" folder, create a new PHP file named "),e("code",[t._v("PostProxy.php")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                ├── Contracts\n                │   └── Post.php\n                └── Models\n                    └── PostProxy.php\n")])])]),e("p",[t._v("Copy the following code into the "),e("strong",[e("code",[t._v("PostProxy.php")])]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Proxies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModelProxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("PostProxy")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelProxy")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h3",{attrs:{id:"create-the-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-model"}},[t._v("#")]),t._v(" Create the Model")]),t._v(" "),e("p",[t._v("The simple way to create a model is to execute the "),e("code",[t._v("make:model")]),t._v(" artisan command")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("php artisan make:model Post\n")])])]),e("p",[t._v("Now, move your "),e("strong",[e("code",[t._v("Post")])]),t._v(" model from the project root directory (i.e., "),e("strong",[e("code",[t._v("App/Models")])]),t._v(") to the "),e("strong",[e("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" folder.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                ├── Contracts\n                │   └── Post.php\n                └── Models\n                    ├── Post.php\n                    └── PostProxy.php\n")])])]),e("p",[t._v("Copy the following code into the "),e("strong",[e("code",[t._v("Post.php")])]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Relations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BelongsTo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" PostContract"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Post")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostContract")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * The attributes that are mass assignable.\n    *\n    * @var $fillable\n    */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fillable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'description'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Get the user that owns the post.\n    */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("author")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("BelongsTo")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("belongsTo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Admin")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("The "),e("code",[t._v("Post")]),t._v(" model represents a blog post in the application. It implements the "),e("code",[t._v("PostContract")]),t._v(" and is part of the "),e("code",[t._v("Webkul\\Blog\\Models")]),t._v(" namespace.")]),t._v(" "),e("p",[e("code",[t._v("public function author(): BelongsTo")]),t._v(" This method defines a "),e("code",[t._v("BelongsTo")]),t._v(" relationship between the Post model and the Admin model.")]),t._v(" "),e("h3",{attrs:{id:"create-module-service-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-module-service-provider"}},[t._v("#")]),t._v(" Create Module Service Provider")]),t._v(" "),e("p",[t._v("To create a provider named "),e("code",[t._v("ModuleServiceProvider.php")]),t._v(" inside "),e("code",[t._v("Webkul/Blog/src/Providers")]),t._v(" for your Laravel package, follow these steps.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── packages\n  └── Webkul\n      └── Blog\n          └── src\n              ├── ...\n              └── Providers\n                  ├── BlogServiceProvider.php\n                  └── ModuleServiceProvider.php\n")])])]),e("p",[t._v("In this file, we register the models used in this package. You can see the code below.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BaseModuleServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ModuleServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseModuleServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$models")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("The "),e("code",[t._v("ModuleServiceProvider")]),t._v(" class registers models used in the Blog package. It extends "),e("code",[t._v("BaseModuleServiceProvider")]),t._v(" from the "),e("code",[t._v("Konekt\\Concord")]),t._v(" package.")]),t._v(" "),e("h3",{attrs:{id:"registering-moduleserviceprovider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registering-moduleserviceprovider"}},[t._v("#")]),t._v(" Registering ModuleServiceProvider")]),t._v(" "),e("p",[t._v("To integrate the "),e("code",[t._v("ModuleServiceProvider")]),t._v(" with the Concord module system in Laravel, you need to register it in the "),e("code",[t._v("config/concord.php")]),t._v(" configuration file.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Navigate to Configuration File Locate and open the "),e("code",[t._v("config/concord.php")]),t._v(" file in your Laravel application.")])]),t._v(" "),e("li",[e("p",[t._v("Add ServiceProvider Inside the "),e("code",[t._v("modules")]),t._v(" array, add the "),e("code",[t._v("ModuleServiceProvider")]),t._v(" class to register it with Concord.")])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'modules'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other service providers")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModuleServiceProvider")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);