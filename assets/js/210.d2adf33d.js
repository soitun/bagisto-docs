(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{573:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"email-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-template"}},[t._v("#")]),t._v(" Email Template")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#email-template-flow"}},[t._v("Email Template Flow")])]),e("li",[e("a",{attrs:{href:"#changing-email-template"}},[t._v("Changing Email Template")]),e("ul",[e("li",[e("a",{attrs:{href:"#override-the-view"}},[t._v("Override the View")])]),e("li",[e("a",{attrs:{href:"#test-your-template"}},[t._v("Test Your Template")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("In this section, we'll guide you through the process of customizing email templates in Bagisto. Customizing email templates allows you to personalize the appearance and content of email notifications sent from your Bagisto application.")]),t._v(" "),e("h2",{attrs:{id:"email-template-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-template-flow"}},[t._v("#")]),t._v(" Email Template Flow")]),t._v(" "),e("p",[t._v("Before customizing, let's understand how email templates work in Bagisto. Bagisto uses mail notification classes located in namespaces like "),e("code",[t._v("Webkul\\Shop\\Mail")]),t._v(". These classes, such as "),e("code",[t._v("CanceledNotification")]),t._v(", extend Laravel's "),e("code",[t._v("Mailable")]),t._v(" class and define the email's structure and data.")]),t._v(" "),e("p",[t._v("Here's an example from "),e("code",[t._v("CanceledNotification")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Shop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Envelope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Shop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CanceledNotification")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mailable")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a new CanceledNotification instance.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Get the message envelope.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("envelope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("Envelope")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Envelope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("customer_email")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("customer_full_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("subject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("trans")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::app.emails.orders.canceled.subject'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Get the message content definition.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("Content")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.orders.canceled'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("In the "),e("code",[t._v("content()")]),t._v(" method of "),e("code",[t._v("CanceledNotification")]),t._v(", the email view "),e("code",[t._v("shop::emails.orders.canceled")]),t._v(" is specified. This view file is located in the package's view directory.")]),t._v(" "),e("p",[t._v("The view file "),e("code",[t._v("order-cancel.blade.php")]),t._v(" typically includes a layout component, such as "),e("code",[t._v("shop::emails.layouts.master")]),t._v(".")]),t._v(" "),e("p",[t._v("Now, let's explore the view file mentioned in "),e("code",[t._v("view('shop::emails.orders.canceled')")]),t._v(". If you check the file at the path "),e("code",[t._v("packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel.blade.php")]),t._v(", you will find it. This view file uses the main layout component "),e("code",[t._v("shop::emails.layouts.master")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.layouts.master'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n@endcomponent\n")])])]),e("p",[t._v("This layout component is responsible for the overall email layout. If desired, you can explore this file as well. Now, let's proceed to learn how to change these email templates.")]),t._v(" "),e("h2",{attrs:{id:"changing-email-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-email-template"}},[t._v("#")]),t._v(" Changing Email Template")]),t._v(" "),e("p",[t._v("To customize an email template in Bagisto, follow these steps:")]),t._v(" "),e("h3",{attrs:{id:"override-the-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#override-the-view"}},[t._v("#")]),t._v(" Override the View")]),t._v(" "),e("p",[t._v("To customize the email template, the recommended approach is to override the package's view. Since all email views are defined in the shop package, we need to override the view within the shop package.")]),t._v(" "),e("p",[t._v("Here's how you can override the view for the same file we mentioned above, "),e("code",[t._v("view('shop::emails.orders.canceled')")]),t._v(".")]),t._v(" "),e("p",[t._v("Bagisto registers two locations for views: the application's "),e("code",[t._v("resources/themes")]),t._v(" directory specified in "),e("code",[t._v("config/themes.php")]),t._v(", and the directory you specify. If you are using the default theme, "),e("code",[t._v("shop")]),t._v(" package, Bagisto will first check if a custom version of the view exists in the"),e("code",[t._v("resources/themes/default")]),t._v(" directory. If the view has not been customized, Bagisto will then search the package's view directory.")]),t._v(" "),e("p",[t._v("To override the view, create the same directory structure in the application's "),e("code",[t._v("resources/themes/default")]),t._v(" directory:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- resources/\n  └── themes/\n      └── default/\n          └── views/\n              └── emails/\n                  └── sales/\n                      └── order-cancel.blade.php\n")])])]),e("p",[t._v("For example, create a file named "),e("code",[t._v("order-cancel.blade.php")]),t._v(" within the "),e("code",[t._v("sales")]),t._v(" directory, and modify its content as desired:")]),t._v(" "),e("div",{staticClass:"language-blade extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro cumque numquam neque dicta quo, accusantium, perferendis sed beatae nesc\n\niunt eum impedit vel doloribus dolor excepturi vero tenetur perspiciatis saepe?\n")])])]),e("h3",{attrs:{id:"test-your-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-your-template"}},[t._v("#")]),t._v(" Test Your Template")]),t._v(" "),e("p",[t._v("After customizing the template, test it by triggering the relevant email notification from your Bagisto application to verify that the changes are applied correctly.")])])}),[],!1,null,null,null);e.default=n.exports}}]);