(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{432:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"product-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#product-type"}},[t._v("#")]),t._v(" Product Type")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#creating-a-new-product-type"}},[t._v("Creating a New Product Type")]),s("ul",[s("li",[s("a",{attrs:{href:"#merging-the-configuration"}},[t._v("Merging the Configuration")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Bagisto provides several default product types, including simple, configurable, virtual, grouped, downloadable, bundled, and bookings. However, if these default product types do not meet your requirements, you can create your own custom product types.")]),t._v(" "),s("h2",{attrs:{id:"creating-a-new-product-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-product-type"}},[t._v("#")]),t._v(" Creating a New Product Type")]),t._v(" "),s("p",[t._v("To create a new product type in Bagisto, follow these steps:")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(': In this example, we will create a new product type called "custom_product".')]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create your own package. If you need assistance with package development, you can refer to the "),s("a",{attrs:{href:"../packages"}},[t._v("Package Development")]),t._v(" section.")])]),t._v(" "),s("li",[s("p",[t._v("Inside the "),s("strong",[t._v("Config")]),t._v(" folder of your package, create a file named "),s("strong",[s("code",[t._v("product_types.php")])]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Add the following code to the "),s("strong",[s("code",[t._v("product_types.php")])]),t._v(" file. This code will define the new product type and its properties:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'custom_product'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'custom_product'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'CustomProduct'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\CustomProduct\\Type\\CustomProduct'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])]),t._v(" "),s("h3",{attrs:{id:"merging-the-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merging-the-configuration"}},[t._v("#")]),t._v(" Merging the Configuration")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("To merge the "),s("strong",[s("code",[t._v("Config/product_types.php")])]),t._v(" with the core product types configuration, use the "),s("strong",[s("code",[t._v("mergeConfigFrom()")])]),t._v(" method in the "),s("strong",[s("code",[t._v("register()")])]),t._v(" method of your service provider. For example, in the "),s("strong",[s("code",[t._v("CustomProductServiceProvider.php")])]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CustomProduct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CustomProductServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Register services.\n    *\n    * @return void\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/product_types.php'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'product_types'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("In the code snippet above, notice the "),s("strong",[s("code",[t._v("class")])]),t._v(" key mentioned in step 3. This key specifies the class that loads the custom_product product type. Create a file named "),s("strong",[s("code",[t._v("CustomProduct.php")])]),t._v(" within your package under the "),s("strong",[s("code",[t._v("src/Type")])]),t._v(" folder, and add the following code:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CustomProduct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CustomProduct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractType")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("After completing the above steps, your product type will be created. However, the "),s("strong",[s("code",[t._v("Type/CustomProduct.php")])]),t._v(" file does not have any code specific to the custom_product type product yet. To inherit the basic functionality of any product type, you need to extend the classes from the Product package, specifically the "),s("strong",[s("code",[t._v("type/AbstractType.php")])]),t._v(" file.")]),t._v(" "),s("p",[t._v("By extending the "),s("strong",[s("code",[t._v("AbstractType.php")])]),t._v(" class in your product type ("),s("strong",[s("code",[t._v("Type/CustomProduct.php")])]),t._v("), you can provide the core functionality of a product. Additionally, if you need to define custom methods for your product type, you can do so within the "),s("strong",[s("code",[t._v("CustomProduct.php")])]),t._v(" file.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);