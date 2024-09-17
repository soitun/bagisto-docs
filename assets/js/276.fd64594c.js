(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{648:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#indexing"}},[e._v("Indexing")]),t("ul",[t("li",[t("a",{attrs:{href:"#price-indexing"}},[e._v("Price Indexing")])]),t("li",[t("a",{attrs:{href:"#inventory-indexing"}},[e._v("Inventory Indexing")])]),t("li",[t("a",{attrs:{href:"#flat-indexing"}},[e._v("Flat Indexing")])]),t("li",[t("a",{attrs:{href:"#catalog-rule-indexing"}},[e._v("Catalog Rule Indexing")])]),t("li",[t("a",{attrs:{href:"#elasticsearch"}},[e._v("ElasticSearch")])]),t("li",[t("a",{attrs:{href:"#reindexing"}},[e._v("Reindexing")])])])]),t("li",[t("a",{attrs:{href:"#full-page-cache"}},[e._v("Full Page Cache")]),t("ul",[t("li",[t("a",{attrs:{href:"#how-to-enable-full-page-cache-in-bagisto"}},[e._v("How to Enable Full Page Cache In Bagisto")])]),t("li",[t("a",{attrs:{href:"#how-to-set-cache-duration-and-other-configuration"}},[e._v("How to set Cache duration and other Configuration")])]),t("li",[t("a",{attrs:{href:"#full-page-cache-supported-pages"}},[e._v("Full page cache supported pages")])]),t("li",[t("a",{attrs:{href:"#supported-cache-drivers"}},[e._v("Supported Cache Drivers")])]),t("li",[t("a",{attrs:{href:"#clearing-response-cache-with-artisan-commands"}},[e._v("Clearing  Response Cache with Artisan Commands:")])]),t("li",[t("a",{attrs:{href:"#cache-invalidation"}},[e._v("Cache invalidation")])])])]),t("li",[t("a",{attrs:{href:"#laravel-octane"}},[e._v("Laravel Octane")])])])]),t("p"),e._v(" "),t("p",[e._v("In the realm of online stores, "),t("a",{attrs:{href:"https://web.dev/vitals/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web vitals"),t("OutboundLink")],1),e._v(" have become increasingly crucial. "),t("strong",[e._v("Bagisto")]),e._v(" priorities good "),t("a",{attrs:{href:"https://web.dev/lcp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LCP"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLS"),t("OutboundLink")],1),e._v(" to ensure an optimal user experience.")]),e._v(" "),t("p",[e._v("Additionally, "),t("strong",[e._v("Bagisto")]),e._v(" has seamlessly integrated "),t("a",{attrs:{href:"https://bagisto.com/en/elasticsearch-for-bagisto/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),t("OutboundLink")],1),e._v(" to further enhance user experience.")]),e._v(" "),t("h2",{attrs:{id:"indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexing"}},[e._v("#")]),e._v(" Indexing")]),e._v(" "),t("p",[e._v("When dealing with large volumes of data and retrieving complex information like variants and prices, optimizing queries becomes a challenge.")]),e._v(" "),t("p",[e._v("Indexers create and maintain indexes, which are data structures optimized for quick retrieval of information. When data is added to a system, the indexer analyzes it and extracts key information or metadata. This metadata is then stored in the index, along with pointers to the original data.")]),e._v(" "),t("p",[e._v("By indexing data, the system can quickly locate relevant information without having to scan through every piece of data sequentially. This greatly speeds up search and retrieval operations, especially in large datasets.")]),e._v(" "),t("p",[e._v("Indexers improve the overall user experience. Users can quickly find what they're looking for, leading to increased satisfaction and productivity.")]),e._v(" "),t("p",[e._v("To enhance "),t("strong",[e._v("Bagisto's")]),e._v(" performance, the following indexers play a crucial role:")]),e._v(" "),t("h3",{attrs:{id:"price-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#price-indexing"}},[e._v("#")]),e._v(" Price Indexing")]),e._v(" "),t("p",[e._v("Price indexing is a crucial component of eCommerce operations, ensuring that product prices are accurately reflected across the storefront. This documentation will delve into how Bagisto handles price indexing.")]),e._v(" "),t("p",[e._v("The price indexing process in Bagisto involves updating product prices in the database whenever changes occur. This process ensures that the latest price information is reflected accurately across the storefront.")]),e._v(" "),t("h3",{attrs:{id:"inventory-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inventory-indexing"}},[e._v("#")]),e._v(" Inventory Indexing")]),e._v(" "),t("p",[e._v("Similar to price indexing, the inventory indexing process in Bagisto involves updating product quantities in the database. Whenever a product is purchased, returned, or restocked, Bagisto automatically adjusts the inventory levels accordingly. This real-time synchronization ensures that inventory information remains accurate and up to date. Ensures that all pricing rules, including catalog rules, are applied consistently and accurately across the store.")]),e._v(" "),t("h3",{attrs:{id:"flat-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flat-indexing"}},[e._v("#")]),e._v(" Flat Indexing")]),e._v(" "),t("p",[e._v("Flat indexing in Bagisto is a vital mechanism designed to enhance the performance and efficiency of product data retrieval.\nThe indexer processes products in batches, which is efficient for handling large datasets without overwhelming the system.\nIt manages a set of fillable attribute codes that are essential during the creation of the flat index. The flat indexer takes into account various channels and locales, ensuring that product data is accurately indexed for different market segments.  A predefined list of attribute codes, such as "),t("code",[e._v("sku")]),e._v(", "),t("code",[e._v("name")]),e._v(", "),t("code",[e._v("price")]),e._v(", "),t("code",[e._v("weight")]),e._v(", and "),t("code",[e._v("status")]),e._v(", that can be populated during the indexing process.\nBy default, the Flat Indexer reindexes products based on product creation or update events. However, there are scenarios where you might need to re-index the flat index in response to changes in channels or locales. In such cases, you can manually trigger the re-indexing process to ensure that the flat tables reflect the latest channel and locale updates.")]),e._v(" "),t("h3",{attrs:{id:"catalog-rule-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#catalog-rule-indexing"}},[e._v("#")]),e._v(" Catalog Rule Indexing")]),e._v(" "),t("p",[e._v("Catalog rule indexing in Bagisto ensures that product prices are updated based on any changes to catalog rules, such as offers expiring or being updated. To maintain accurate pricing, Bagisto schedules the catalog rule indexer to run daily. This scheduled task ensures that any modifications to catalog rules are promptly applied to the product prices.")]),e._v(" "),t("p",[e._v("The catalog rule indexing process is set to execute at 00:01 every day. The product prices are consistently recalculated and updated based on the current catalog rules. This automatic re-indexing guarantees that any changes in promotional offers, discounts, or other pricing rules are reflected in the product listings without any manual intervention.")]),e._v(" "),t("h3",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" ElasticSearch")]),e._v(" "),t("p",[e._v("As Elastic is designed to handle large amounts of data and provide fast and scalable search capabilities, "),t("strong",[e._v("Bagisto")]),e._v(" leverages its capabilities to index all products, thereby significantly enhancing the search functionality.")]),e._v(" "),t("h4",{attrs:{id:"configuration-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[e._v("#")]),e._v(" Configuration Setup")]),e._v(" "),t("p",[e._v("To configure Elasticsearch, please refer to the "),t("a",{attrs:{href:"https://devdocs.bagisto.com/2.2/advanced/indexing-products-to-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration Setup"),t("OutboundLink")],1),e._v(" documentation.")]),e._v(" "),t("h3",{attrs:{id:"reindexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reindexing"}},[e._v("#")]),e._v(" Reindexing")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Re-indexCommands")]),e._v(" console command is responsible for re-indexing data within Bagisto, facilitating efficient data retrieval and search functionality. This command offers flexibility in selecting specific indexers and re-indexing modes to suit varying requirements.")]),e._v(" "),t("p",[e._v("By default, re-indexing is executed at the scheduled time or based on specific events, such as product creation or updates. However, there may be situations where you need to manually trigger re-indexing. This can be done using the following commands:")]),e._v(" "),t("h4",{attrs:{id:"command-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-signature"}},[e._v("#")]),e._v(" Command Signature")]),e._v(" "),t("p",[e._v("The command "),t("code",[e._v("php artisan indexer:index")]),e._v(" in Bagisto is used to manage the re-indexing of various indexers. Here is a detailed description of its usage:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("--type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("--mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("p",[t("strong",[e._v("--type")]),e._v(": Specifies the type of indexers to re-index.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("--mode")]),e._v(": Specifies the re-indexing mode, either "),t("code",[e._v("full")]),e._v(" for full re-indexing or selective for "),t("code",[e._v("selective")]),e._v(" re-indexing (default).")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Full Re-indexing for All Types")])])])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("full\n")])])]),t("p",[e._v("This command performs a full re-indexing for all indexers by default.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Selective Re-indexing")])])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("price\n")])])]),t("p",[e._v("This command performs selective re-indexing specifically for the price indexer.")]),e._v(" "),t("p",[e._v("Price and price rule indexing are scheduled to re-index at a specific time each day to ensure that the latest pricing information is accurately reflected in searches and displays. The following commands are scheduled to run daily at 00:01 AM:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$schedule")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'indexer:index --type=price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dailyAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'00:01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$schedule")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'product:price-rule:index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dailyAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'00:01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"full-page-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-page-cache"}},[e._v("#")]),e._v(" Full Page Cache")]),e._v(" "),t("p",[e._v("Bagisto introduces Full Page Cache support to deliver lightning-fast page loading, improved SEO, scalability, and reduced server load for enhanced eCommerce performance.")]),e._v(" "),t("p",[e._v("Full Page Cache is a mechanism that stores entire HTML pages in the cache. When a request is made for the same page, the cache seamlessly serves the page without the need for re-executing server-side logic. This process allows for faster page load times as the cache provides a quick and efficient way to serve the requested page without the need to run the server-side logic again. This reduces the need for database queries, template rendering, and other resource-intensive tasks, resulting in faster page load times.")]),e._v(" "),t("p",[e._v("We used the "),t("a",{attrs:{href:"https://github.com/spatie/laravel-responsecache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spatie Laravel Responsecache Package"),t("OutboundLink")],1),e._v(" in Bagisto")]),e._v(" "),t("h3",{attrs:{id:"how-to-enable-full-page-cache-in-bagisto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-full-page-cache-in-bagisto"}},[e._v("#")]),e._v(" How to Enable Full Page Cache In Bagisto")]),e._v(" "),t("ul",[t("li",[e._v("Go to the .env Configuration file")])]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("Set "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("RESPONSE_CACHE_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),e._v("\n")])])]),t("h3",{attrs:{id:"how-to-set-cache-duration-and-other-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-cache-duration-and-other-configuration"}},[e._v("#")]),e._v(" How to set Cache duration and other Configuration")]),e._v(" "),t("ul",[t("li",[e._v("Navigate to  "),t("code",[e._v("config/responsecache.php.")]),e._v(" this path to adjust cache duration and explore other configuration settings for Full Page Cache in Bagisto. Here, you’ll find all the configurations related to Full Page Cache.")])]),e._v(" "),t("h3",{attrs:{id:"full-page-cache-supported-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-page-cache-supported-pages"}},[e._v("#")]),e._v(" Full page cache supported pages")]),e._v(" "),t("ul",[t("li",[e._v("Home Page")]),e._v(" "),t("li",[e._v("Category Page")]),e._v(" "),t("li",[e._v("Product Page")])]),e._v(" "),t("h3",{attrs:{id:"supported-cache-drivers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-cache-drivers"}},[e._v("#")]),e._v(" Supported Cache Drivers")]),e._v(" "),t("ul",[t("li",[e._v("File")]),e._v(" "),t("li",[e._v("Memcached")]),e._v(" "),t("li",[e._v("Redis")]),e._v(" "),t("li",[e._v("DynamoDB")])]),e._v(" "),t("h3",{attrs:{id:"clearing-response-cache-with-artisan-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearing-response-cache-with-artisan-commands"}},[e._v("#")]),e._v(" Clearing  Response Cache with Artisan Commands:")]),e._v(" "),t("p",[e._v("To effortlessly clear your application’s response cache in Bagisto, utilize the following command:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan responsecache:clear\n")])])]),t("p",[e._v("This command clears all cached responses. Optionally, you can provide a "),t("code",[e._v("--url")]),e._v(" option to clear the cache for a specific URL:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan responsecache:clear "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://example.com\n")])])]),t("p",[e._v("Replace "),t("code",[e._v("http://example.com")]),e._v(" with the actual URL for which you want to clear the cached response.")]),e._v(" "),t("h3",{attrs:{id:"cache-invalidation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-invalidation"}},[e._v("#")]),e._v(" Cache invalidation")]),e._v(" "),t("p",[e._v("Here are some common techniques for cache invalidation in Laravel:")]),e._v(" "),t("h4",{attrs:{id:"create-the-eventserviceprovider-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-eventserviceprovider-class"}},[e._v("#")]),e._v(" Create the EventServiceProvider class")]),e._v(" "),t("p",[e._v("Create an EventServiceProvider in the "),t("code",[e._v("packages/Webkul/Post/src/Providers/EventServiceProvider.php")]),e._v(" directory. This file contains the code for the event service provider, which can be used to register events and their listeners. To register an event and its listener, you can add them to the $listen array in the EventServiceProvider class.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Providers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EventServiceProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" ServiceProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[e._v("EventServiceProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ServiceProvider")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * The event handler mappings for the application.\n     *\n     * @var array\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$listen")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'post.update.after'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'Webkul\\Post\\Listeners\\Post@afterUpdate'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("h4",{attrs:{id:"register-the-service-in-the-post-service-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-the-service-in-the-post-service-provider"}},[e._v("#")]),e._v(" Register the Service in the Post Service Provider")]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("packages/Webkul/Post/src/Providers/PostServiceProvider.php")]),e._v(" file, locate the "),t("code",[e._v("boot()")]),e._v(" method. Add EventServiceProvider within the "),t("code",[e._v("boot()")]),e._v(" method.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Webkul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Providers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Support"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ServiceProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[e._v("PostServiceProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ServiceProvider")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Bootstrap services.\n     *\n     * @return void\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("EventServiceProvider")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Register services.\n     *\n     * @return void\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),t("h4",{attrs:{id:"handling-events-in-the-post-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-events-in-the-post-controller"}},[e._v("#")]),e._v(" Handling Events in the Post Controller")]),e._v(" "),t("p",[e._v("In the realm of event-based cache management, consider the event post.update.after triggered from the post controller upon a post update. This integration guarantees swift cache clearance or update, maintaining synchronization with the latest post modifications.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * Update the specified resource in storage.\n *\n * @return \\Illuminate\\Http\\Response\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[e._v("int")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("Event")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'post.update.before'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("postRepository")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("only")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("Event")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'post.update.after'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("session")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("flash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'success'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("trans")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'shop::app.posts.update-success'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'name'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'shop::app.posts.post'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("redirect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'shop.posts.index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h4",{attrs:{id:"listener-method-for-cache-invalidation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listener-method-for-cache-invalidation"}},[e._v("#")]),e._v(" Listener Method for Cache Invalidation")]),e._v(" "),t("p",[e._v("In the directory "),t("code",[e._v("packages/Webkul/Post/src/Listeners")]),e._v(" you can find the "),t("code",[e._v("afterUpdate()")]),e._v(" method. This method clears the cache using the "),t("code",[e._v("forget()")]),e._v(" method when  a post is updated.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * After post is updated\n *\n * @param  \\Webkul\\Post\\Contracts\\Post  $post\n * @return void\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("afterUpdate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("ResponseCache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("forget")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$post")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("url_key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"laravel-octane"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-octane"}},[e._v("#")]),e._v(" Laravel Octane")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://laravel.com/docs/10.x/octane",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Octane"),t("OutboundLink")],1),e._v(" is a performance-boosting package designed to enhance the speed, efficiency, and scalability of Laravel applications, including Bagisto.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Drives remarkable improvements in page load times, ensuring a seamless and responsive shopping experience.")])]),e._v(" "),t("li",[t("p",[e._v("Provides the scalability required to accommodate the growth of e-commerce businesses.")])]),e._v(" "),t("li",[t("p",[e._v("Forms the foundation for optimizing Bagisto's performance and meeting the demands of modern e-commerce.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);