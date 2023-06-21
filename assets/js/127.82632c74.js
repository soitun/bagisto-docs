(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{469:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"store-data-through-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-data-through-repository"}},[t._v("#")]),t._v(" Store data through Repository")]),t._v(" "),a("h2",{attrs:{id:"contracts-repositories-and-proxies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts-repositories-and-proxies"}},[t._v("#")]),t._v(" Contracts, Repositories and Proxies")]),t._v(" "),a("h3",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[t._v("#")]),t._v(" Contracts")]),t._v(" "),a("p",[t._v("Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, an "),a("code",[t._v("Illuminate\\Contracts\\Queue\\Queue")]),t._v(" contract defines the methods needed for queueing jobs, while the "),a("code",[t._v("Illuminate\\Contracts\\Mail\\Mailer")]),t._v(" contract defines the methods needed for sending an e-mail.")]),t._v(" "),a("p",[t._v("Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.")]),t._v(" "),a("p",[t._v("All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.")]),t._v(" "),a("h3",{attrs:{id:"repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[t._v("#")]),t._v(" Repositories")]),t._v(" "),a("p",[t._v("Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.")]),t._v(" "),a("p",[t._v("This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.")]),t._v(" "),a("h3",{attrs:{id:"proxies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxies"}},[t._v("#")]),t._v(" Proxies")]),t._v(" "),a("p",[t._v("Proxies as their name state will drive you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.")]),t._v(" "),a("h2",{attrs:{id:"steps-to-store-data-through-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-store-data-through-repository"}},[t._v("#")]),t._v(" Steps to store data through repository")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("For creating models, create a file named as "),a("code",[t._v("HelloWorld.php")]),t._v(" in "),a("code",[t._v("packages/ACME/HelloWorld/src/Models")]),t._v(", and copy the below code in file,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HelloWorldContract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("HelloWorld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldContract")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fillable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Note: If you have created model by using "),a("strong",[t._v("Bagisto Package Generator")]),t._v(", then you can skip the model proxy and contract creation step.")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Now, at the same location create a model proxy file as "),a("code",[t._v("HelloWorldProxy.php")]),t._v(". This Proxy class will extends "),a("code",[t._v("Konekt\\Concord\\Proxies\\ModelProxy")]),t._v(". Copy the below code in file,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModelProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("HelloWorldProxy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelProxy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("Now, create a folder named as "),a("code",[t._v("Contracts")]),t._v(" and create an interface file named as "),a("code",[t._v("HelloWorld.php")]),t._v(",")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("HelloWorld")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("Create a "),a("code",[t._v("Repository")]),t._v(" folder and create a file "),a("code",[t._v("HelloWorldRepository.php")]),t._v(" and create the "),a("code",[t._v("model()")]),t._v(" method in repository class which returns the path of your contract class.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("HelloWorldRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repository")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Specify Model class name\n    *\n    * @return mixed\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ACME/HelloWorld/Contracts/HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("You can use "),a("strong",[t._v("Bagisto Package Generator")]),t._v(" also,")]),t._v(" "),a("p",[a("code",[t._v("php artisan package:make-repository HelloWorldRepository ACME/HelloWorld")])])])])])]),t._v(" "),a("li",[a("p",[t._v("After creating all the files stated above, we have to create a provider as  "),a("code",[t._v("ModuleServiceProvider.php")]),t._v(". In this file, models which are used in this package are registered. You may check below code,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BaseModuleServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ModuleServiceProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseModuleServiceProvider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$models")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("Now, Register your "),a("code",[t._v("ModuleServiceProvider.php")]),t._v(" in "),a("code",[t._v("config/concord.php")]),t._v(" file,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'modules'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("ACME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModuleServiceProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("Now, you are all set to go.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);