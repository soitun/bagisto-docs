/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.5.x/advanced/change-email-template.html",
    "revision": "96cc03ea29087bb4fe9ab3c8448ab5ef"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "c04b9f2daac74f6d6638f9f230ef08f9"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "6d326f85aaf8f8ed5e758e4e0324b11c"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "3df33c2d4917ce2a6cd7c8f822d85542"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "68a79af438fcdd6802233c6c5fad4bae"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "017cad0b70d02fa57428be435d6a4594"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "1d450930ea575c4930c00903b2d3a446"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a6af391c81f1556a3ef2465866b85aaf"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "21a01dedbe14006432811815c9664fd9"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "b3e98ece88728b870a4f120a82cdf8d7"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "a83cefd7922623202bdd4b7139a6cde1"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b6b8f0eae1ac42ae8e56c80a395446a0"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3278561f65040bae96faca1881397688"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e933c68bcc42603e38fc2e7285b5a224"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "08a497755914283e871392e6e63c97c4"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "66f67700db7f6bc0d75ab8f2205e63f4"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "eaa939639b43cb408ed0efd519265b5c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "6be613749c4ea1af0b59249ea578cd89"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "377c6f8ebd1a800a37b84292e98e7e13"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "47b5457e00dc110df15eb67587f06431"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "2494a407135185f675a18d9b089df2f4"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "2de65c9e2c196a947e4f1811627f89ff"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "76d7ac003503462e431a085685d79bfc"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "4612e7db6470e2c52d0fd7bfb658ef14"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "9b4abb59b131e9167038ec28b7d54946"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "0926209dbf362686bac47bc119508d00"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d8f88f9a968dd23b0c349be91895b463"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "c5ec7a393b155605b803545d868f64f6"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "e31c07a21a13597b64f246f5c4a08901"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "e5e65e03891c04941bace7fe57c533a5"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "aabc04cf73f52c6593a0bbb2f3645cb5"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "28de60fed00cda53cdaf424e23da5bd0"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7e0e44b9c1446ed829ede4401a302a38"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "9311668a69bb085e008d7327de13b404"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "b01aaa282feb9c7fb06b372059cdd027"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "a95f4735c6ad35661bf4b9fdb65f4320"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "e9a844c9a5fa71f49bedcfd793cae3bf"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "dffda6b4221926b8613f3d15692343a7"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "b573d93adc40f658a9272c80fb581465"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "fe03f925f096ed45c1114e9841194c62"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d177bab325cf9752af9c45c15359af93"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "02b4dd1804e789bb7ca16b483a791e88"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "7b648c0daa58e735edda03d591ba8e32"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "44190207b74f0990e487a16546edb864"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "657ae04ef422586674c4614e0901e2d4"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f91a2997a6d18666ca407cd87b003424"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "63968d0ab0c771da69f09d3ae2c24269"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "9ed47ed863aaa2e66ab4e0a75589bfca"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "29eb787b18155cd83190703c0130164c"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "38fe7d4052fd6f940e843ff4f84d4799"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c4ae2934ae4cd6645490de226e16ff28"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "4106dbb5c3eebc17180f7ca8ecd15320"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "0dfea150dbe7f3f221ab012134ff65d8"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "38674a55f413e984c0b8afaae729c070"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4b008ab021dafd05bc2f60a9e3d12b4b"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "c1d2ab4b2ad8d50a00c5c66b608d5846"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "9ba0bb5c8ea6a674bbe73603f053cfb8"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a849e90fc00a784b0b8f4dac9a25375e"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "96a1c5afbda2839b1d5acc3817d38bcd"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "fa9da2efe7eb36acd64ba01ceedb166c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "fbbbdca96d0926e2eec009cf18a99a48"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "3646853faab0d995173a119df1c239c6"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7d93cf3c1922a8cbe10690a90c42afdf"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a842cf77b317552de0845e19769246b4"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "38d6d9428e5c98e78212d7a64c1a2f96"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "8c781f210dd71e0dc9aecbc7400759d8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c903d53ef5dc8f912eeeab40af0a88cc"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7d78665542199f79b47ddb1497f0bff4"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ed2848d024733542c060fa38d09db988"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "40e7f6a71833344dea883b99c924c5e2"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "727b68b1a3ee19b1e258a86bb6350c7f"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b050be38bf55fec03d5cd87bd048f924"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "bae49481be2404d543012ea090e76a18"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9790427961ecd3f52b3096ffc5be4ce2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "7e31c864ec9cc8bdb986dd40202ac547"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "22aa9990b07574bcb87399bfd1dde868"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "816816fdb01b7f8bc7b71aee90fd5a37"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "51a94898b3eb0835b5fbbf6e7450445c"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "975744576cca032775f6acabe25b7002"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "dcaa6c5f7061f89bec2b8e31577434ee"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "764fe41e12cfd4cdc27907667d24857e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "c7b0a5e51d630d1a61a6b43c29247a05"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "50cc32b36bcd179938ee5b3a9ae8041f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "3b6257cad82b57c8746de3d2b8acbab3"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "88c9c6d4da0e6da09d112e01f531cb8a"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2f675bfa7c09027fa85efa7785ba7a17"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "514fe6ff948cda0b1dcf7cfa5f65b374"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "5e14b04593c33b8675c7710c1c36c17d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "f6c8b097c10dcf73cdd515a0030dddf7"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "46c76eb8a34c9227d154ae84a634d78b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "137c0c55e49336f80d9a1f4ca6cb4a79"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "0ae18f88f49d4ff2da0d3557349c3665"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "96b35646e5c023e41e6e9bab648c7d69"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "3f2a0deead79bc5aeeb3533183dc9729"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b8318be75176367b587c3bdf8dc2fef3"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "008aaa0a8750138440344813807d7b1a"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "8f1d97ae6d2d8f07707bde5ffbdfb716"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "64d5e391cd4d1eed7e2005d18f482695"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "36c881095cf62ccb6e293043cf066ac9"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4a2b60a05ee45f6fba4ab9e63e827315"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f8208ade533b39fd6d7381539d65b651"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6e524aae722f7b0d8dfa705ee018869b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ffb01a3ee57158fbebb46ef9a6e063d5"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "070331879a9ff48b7d38e33a5808329b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ac383d6e4b3bbf8050744d24796232ae"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "40abbcf5971f687434ee8ea65c81b78e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "f97fe1b0ea60d42e0d82419d2c19e14d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a3ab5cbe008a337b5398ca4d9ee531f6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "f22a8532f6b255532ab467c9271dc6ec"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "29da08fe23069e38f0004b19ab852a96"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "3d67f7322108f503b6c9f6f6e5149f72"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "5860f7815462843d85c108e1a22471aa"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "104a51f9478a5af02051e0d7f73d9a2c"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "01b3e600a987b600c355703169f34185"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "2894e451813c09eae6a189038f383783"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "ac36e4320cdf36cf952b4e239b89f70e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "b821be66f8e0b4ff8f5845b847fad8f2"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "f00c6d8175e4629c9dc3f031134991b6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "cc4e84a28ee653477adac3beeaaae02d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "be8ed3229633fcce9792f8d2af654edb"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "9ca43bc70f86c087eefddcdafff47772"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9eb7e1fc6c59d8965d8b65a103b15e0b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e9bc991cc35e6f5b7c9d7f3a55cf0c8d"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e3ba624c5960c94a61709046ed326b25"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "99831faea95696cbc8cb8b6a42299876"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "524d544fc0c7859028c49bb002c6fc8e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "506c6e6b6061ea0ab3cf9eeec24cd571"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d864b93b66bb376a763f5797fe3ad213"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "28ccfe34c659471b9f60e5426880ef34"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "860b5c7c889cef772dea8f01afe2260b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "a9eeba2fba293c60a2bcd8c0fda6fe80"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "cd8b478a0e38c11fa68461a3e42d3880"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "af56ca878eb4a9ecfbda999fc65d1a61"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "d7817f859e807e559d82d627480b13e7"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "6e3f238a872575c6cda46035893b61ff"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "f4a0060c39da343bef8d6acdf555844d"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "104f133cb2e06785ab975cdce5163179"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "5f29bbcfed49f1e1bd6487f7f4ee2255"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "85d26dc4b5de8e03d885437b8dc63406"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "4631ac1012e879d5f3506ca5332e4846"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "00939014b002dc9e0a796afc1a74ee92"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "defef53a860369c070c79c8d369deaa7"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "15e95e32c16c5e0c01504a95b816fe35"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "f3d88f00288fa3ecc6900f6c2dce6452"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "eb2d8d445f939ed9c187dd3d42a01909"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "6c4a3f9804c0cc55a4364dda7ef491d8"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "ed2077d2a5c2f9e34c10a71d1efe7d07"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "1225e71ef85edec7565c699f7f497ecf"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c75e93cc7428077d5627ca0551f42cd5"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "f82c3a47093e957dedfb55431e3f2225"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "c6aa309a6d3a378890a2cc7008bf4c01"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "6ecd55c159b789fd4c53fa59ece20f04"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "be7ce2b4ce32ed378e2184ab442c8d2c"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "0ab4b6beda6c387be22aaddc2a852470"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "2f06878a092b40f461ee24b41e3abbc7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "286066646d80659cb1cd03cdc94a3d6b"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "52efab0bd77d6140fb03f9bf482baa9b"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "b211b1a45a2e4c4f55879894c3419332"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "e8f927e135d5f742413efa9fb740ce35"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "504221166db6fa5a83fdfe0d50142360"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "1ed2f3d8d2b27bf04c905439284d8ff3"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "52e7441d8246f7baf1d3b67c3c430057"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "b74e572fb3d5bf55581fdac183240e21"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "99c66d79444b192ef95480ad12f6526c"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "f4ec8a5c7daa40c41ac02a3185b8abcf"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "63d51ec26ca48ae337b50e3c0da30ca6"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "25bc196b108bd0c4a5f7730fc5eadfba"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "2bbc43b901d5230db47ed63ea04458a4"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "6b91ee1c56287e5b952d02ec1f548651"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "bcfd9890d093d8d199a9fe237f156cf4"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "4aa81fd0f31b4e4fef622206695d6be6"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "c05ffe2910302617ed35fbce3d43f63c"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "818812ce0c10c0493b957a8683335eef"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "adc0c78f567302f238bac911922998fe"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "f4c46573517780bb0a7529548595d702"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "d137065fb4a34d022841693e8d667fbb"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "9d793235640e6c6b0302441d39b7952b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "67d0b76bfa268172600f113925624558"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "c6e9387253d3e7ef1456daca6773f467"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "abdec54133a15a59e04c10523fdf9c8b"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "49265c8af54394b343a9e636774f96a4"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "3f63120e3223f6b9221b308a832448c6"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "bc7d60d6eb82bd97ad1ba319071974ff"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "e383ee8b18bde8228bbd6bf54d63dfc1"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "aad201354ef2a1a34f9934916547a773"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "55685bf056cb5a2ce10d4bfafece3e84"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "a093bda588d305d1dd26d6a6584eabe0"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "c52e484d7f276fd63fd3867f960b2f12"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "72ad47bfa14561a6a1e8ff5babe14f33"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "97e9c425972b614c6b9f576424c1fb83"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f2baf33ec528f3ce9e7a904b99758d08"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "cc07dd766d1efe9695f37b1ace66ec6c"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "c6d5a0ba93c9cb983dc97c9306c930c4"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "33a7822fa8430ce276870f4922712b18"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "9d9a94b63432eab375e27381c0da3bcc"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "9083c2ce79f943bae16d97ee7868c3cc"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "e9885d4e917b366d6b63710a76eb4f58"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "78965cf308d8bc6dd7f1f74dae869197"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "622bb2d136d158b11556c7efebdd66ab"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "39f65bdaba3f5e10f180dfcfe8bf5176"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "f688858918bf834c7e1202d48e59d337"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "969e8330d8b1c0552180cb35adaab1cf"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "bfdfdc0c9ccb1fe5b672e5a866d67e5e"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "09a5179b537cf5579e0ac221b79e4eaa"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "6134fbcb017bf95bff7979a079c0f065"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "356a41b2fc3139ef5072a4bf46f578b3"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "d5012cc8b87bfda229cd2db71568c1a7"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "5e24dc9650ea1a815dc51ef989c2cd21"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "81d2d8837443a17c02e15b7b1e9025a3"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "bd2f43a8616a427bc9f5411e28451d43"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "eea982d3363dffbec7e4ac9faf9d044e"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "d5bf73a03cc15daeee2f5028d4c39dd1"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "a51a497f083b668b2af30863582067be"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "ceb9c142a55c92bce93e74de5d9d0c27"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "5cd90cdfed4d60ed1a150face2d0afa0"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "1d112c7711b43fef7fe1a50f668e079f"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "b32a8b6c0cbe2d5fe0a91f3059122407"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "e9195b0d43efab155473b7c6a662815e"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "fb0693c0fcba11a0be0e2331196bb11b"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "15a0b39daae6bb27c9875969d9210e21"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "457c1e95a3afa711dd6fb8adbd371c27"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "425af80dca0ebbce902e35564ebf396e"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "82c056e9739fd2927a094e42a1121259"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "3b1f63003d437b46184fba4d74b7aed4"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "d44f1a8c3802cca6255e233b1bbee053"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "e43b91efabeec5962489f2c808ef4c03"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "aab1a7092699507ef79a0a96a4f5f53f"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "fb74d4a1e58c8558fee69c8565859371"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "690142b8057b0e4a0924a414e5243325"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "81bfd0115e6c27dc0bb5e879db4033d9"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "30d42e296a061e913ede97e605e962a7"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "ecb913e4b18aaf530266501f7247f61a"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "589d63d522da4fefe764bc44f14b7555"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "43525794d178fc4d8356c76a80b9dc3c"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "d53e2b87c49562f20e7666116ee26299"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "cb12ee48322fd2536bec4609c11bbf7d"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "4a418cb8b0048043ca67d3fd66cda9b6"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "5c47d3b4155e2175674bb94e236aca68"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "af24f5bd4d15fd16d7c8e543d0ca4e2f"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "86fdeb8e407747c612a3f7c75c3df432"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "25c6099e913e9f723220d949e28c33f3"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "e5549cda51a1081570c3ce49ffa14081"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "6a2e67a8330594c6217df97451b19e5f"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "f8f953c3cd4938a76baa34feb9b02890"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "f8d88b414529a78a93ee4ac7039679b2"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "f905ab57d32f673ec83f5f89dc85f751"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "f5706da7f220ae497427a44fb5238e78"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "29a5101aa940ff09c047386222437f3e"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "6d817912b39c95b8f5b64ef7e7eab398"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "e9ad7b3be823de7365e6443f88d3dfd5"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "0cd955f60f74e618ebbdcd136e54e141"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "972f9650097c027ff914bf0815228eab"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "1d436a3e56d38402e48793b852f269bc"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "ab3bce9ab80cd7cc3865624b697712a3"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "3fa8c01ca797d58ddd61906587349df7"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "b87752bfb8ffc29900ab63827db949b4"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "77e333640ca1c9a571cda0af715271f3"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "90a561fd9113f4b5ce7b1569fdaf7141"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "71c20ac2f2c8b8ab7542ec2dc5e2aa33"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "8f6dcf9ca6d5956a0a9bc6d4267dbc34"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "46323d296be5a61d55169e4c4c84251e"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "e49c1bf45d9445a0d178b53cb6236061"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "7542808ce6731488feecb056f082b8fd"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "6e2dc9536c1542f79ef8847d4a4084c8"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "b175729773fe6c4d14204d2192dd4b66"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "49d29fdf13255aee8d2ad73ec6c3f72a"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "edb24cd7c7bb83f9f0902838eec28feb"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "3a95fa828ce0d5658f731f7eeeee41c9"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "e8f8198535cc7f2165e59f35e7d7b600"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "031efd0103535175b0e56dc03975daa6"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "49b79dfe893914ee022081485979528c"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "7b02fc91360429f5c6d94986f3d1e42e"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "78278d5bde1515a11c580c6c08dd63ed"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "2e0fb74cdd7b557bc62f0fbbcb74b536"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "90fc02dd0a0736fe0912a49ee0fb8d14"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "22f8f35b3d224a068354ae2c0bf78b40"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "5db35db96df55c5ea5ad838a37de18ee"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "60180cbc17c7292436751058473ba1bc"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "f33a45d495016bd8ff6a69bdfeddc2ff"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "ec301621df74e54de3993a9d58ea55ef"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "67a068f7f4abb2713cb0f8dc87b5c8b0"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "d541263f73a8e31b5cf4c4f173af6b00"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "d08ee0396aa6ef56b7195e638835902b"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "e191cff3c6d1937382ca519ad4b3ce72"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c834418c2c97059ae0e1008397d9323a"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "04768e8cb97edc0f76ee3d6180628689"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "877fe3758e1aba39c4f464a573fb36ec"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a53b3d80effe4d159196bce9c68a46ae"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f6e7cd219d77390c80f2b542b8fdaeb3"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "86b73b85ae9c24976c96ac66f1e74dde"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "f0db5c4e4735fe5e750eddd69deafa5e"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "9cbde84931f4b840228d6c809c5a4165"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "7531f55d72ad6b669938295f6439d0fd"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "b4869b521325036d5338689a4111a426"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "dcda0b4439ca3c91a1793c3cb6a302bb"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "1772ee4037c5014e43c895e00c96b06b"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "214bf0966c74c7e401bd8365691e27c0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c67f3bf70e3ce3ab3bad26893f053d47"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "e57c1a20f18ddfb3f1e1474e2e0255f4"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "b30beaea89e4038f4034944d51b5e54d"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "4eacd66611070b86b90fce9aab2484f0"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "124d83ed8bef72b6fef8db5ecd47dba1"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a39ce9b915a9a5f273a233f24686403d"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "f0e45e2b5d8c9a31c116a815a5c4f4c3"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "b6176717df6ec9023be3312a2a5dab33"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "e0d91a3e0c30fe07ae1508c96fac2c01"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "50b0c9b8e3bba1fc5e65d6c233a1b87f"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "84ec7b27a96b3882d29527c565f8323b"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "c39803f823055b8946cdddd978493a06"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "962a7163642411a43e33d8a65b2c6c10"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bc20e0fbe8de9af2eca8e775f7414bd7"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "8239543da08becf3720a36c14455bd7a"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "9c227efc1b46bd62d4cbe0029bd316f0"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "798aad53972f861143017b419c95f80d"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "48f90660f17ce82ef569e6a7f9ca7d92"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "67587799fc2581262d3608ab54e18c9d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "6957efd8f3e4ee5d202a0e058688955c"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "259425f88885d73be3dcf314bb543f5d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "86705b416a166cf98552239e26c467f8"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "0fce53ea0ac300725cd357bc797e28b2"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "3e9a3fa373b1ffb3c52138b295092b95"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "05f2c2c991150128299bd72f9c8684ee"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "38376a35585bf9dc1685a9a74135b13d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "84b5ebc17b12413f4b238e40252ae0f7"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "28b69b05de2417723c61b0c677aeff7c"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "edefb16bd36f5887341533e041a355c2"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "26c5744fb6027fb77d7a3ca831424a11"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "4919765c9b9b60bbe56c6f47982a3fd2"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "abab0507a20e721d85f5e84290235f0c"
  },
  {
    "url": "404.html",
    "revision": "f97f9bc18884c7f3a366024d6c261b45"
  },
  {
    "url": "assets/css/0.styles.0fa56194.css",
    "revision": "6a2ad87a030128a651f6f2397f9e3afa"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-acl-output.b7cd765b.png",
    "revision": "b7cd765baa91a55b5ff4ade2c59b7e02"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.1be77665.png",
    "revision": "1be776656f2461337df0f451f917bfb2"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/blog-admin-output.1118ea56.png",
    "revision": "1118ea56b8def41f82b192a76763d2c3"
  },
  {
    "url": "assets/img/blog-package-output.4aced6a8.png",
    "revision": "4aced6a8f0a5f4af90cb3cf52c8ebf2c"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/custom-config-output.8aeb3cff.png",
    "revision": "8aeb3cffe1edc680a288ca3792782d50"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/new-theme-added.f06bacb5.png",
    "revision": "f06bacb59a4605f705122a98189fee90"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/product-index.bc0a70c6.png",
    "revision": "bc0a70c6b1ba1b0cd4cd31f3c7f8dfa5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.72f1e422.js",
    "revision": "bc8155637c6dc68a5277da9c1cdaec33"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.bf663e68.js",
    "revision": "37bda28eae8b72c61e63677d7504c5b4"
  },
  {
    "url": "assets/js/101.4cebbcc1.js",
    "revision": "ef4cc2c049de398ec7a99011df737672"
  },
  {
    "url": "assets/js/102.32da362e.js",
    "revision": "f5a4a123e4fd5da415866e4e918965dd"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.6cbf3032.js",
    "revision": "c2453aa167abe8883fef47ddc7a49bf8"
  },
  {
    "url": "assets/js/109.b27d066a.js",
    "revision": "67d59863fe0219fef4f5ab123db5bde0"
  },
  {
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
  },
  {
    "url": "assets/js/111.a6145704.js",
    "revision": "d2c5a5a0e188d4aeb6cd9befbd1be5f2"
  },
  {
    "url": "assets/js/112.22e33d42.js",
    "revision": "e3420b0445f8f5386b16d15f06f4adf1"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.aee6e343.js",
    "revision": "85ff15e06aa896a24ffa3cee021b1801"
  },
  {
    "url": "assets/js/116.ec5e70f2.js",
    "revision": "a6713637db22ad06c06be7a85d665f5b"
  },
  {
    "url": "assets/js/117.b43e51c0.js",
    "revision": "75dcd7da8cf1a7939fb24cdedc5e975f"
  },
  {
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.a6a4c979.js",
    "revision": "49c5ed9db630a655881a8873ea995690"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.f7957dcf.js",
    "revision": "f7c92f53340e4261dbc1e3574f872a5a"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
  },
  {
    "url": "assets/js/122.81ed40d4.js",
    "revision": "c8076ffd3367b1d9802e94b7ea531f45"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.d35080e7.js",
    "revision": "9e1d0229433b74e5ed1495909e163a72"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
  },
  {
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.f9f1a195.js",
    "revision": "8739037f1ed07f0b1aff9b239d34b5e1"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.22a256b7.js",
    "revision": "5eff25156b06c67d2be2d04a29067efe"
  },
  {
    "url": "assets/js/13.db31692c.js",
    "revision": "e70c41c80785ce1f8cfba51f65462343"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.943908d7.js",
    "revision": "49edd649fec7016a8e7c6d9c9d500923"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.e5160d2a.js",
    "revision": "93dd572f9a78332cba7ca7df1f4597db"
  },
  {
    "url": "assets/js/135.a8df44ab.js",
    "revision": "460e69940edfc0763dc60aa5ff3dac6f"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.7595501a.js",
    "revision": "fc6f81a46e5826c6372240c3536dafeb"
  },
  {
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.9a5b2252.js",
    "revision": "7ef71a3b332d1e306f4a37c06ad2c394"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5bbfe20f.js",
    "revision": "ef3184ddd3c8af4e79214f3c79705e00"
  },
  {
    "url": "assets/js/142.78e9515b.js",
    "revision": "bb106faf0f92b5e2f82111868801a301"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.b24400e4.js",
    "revision": "9bf26a56c4c4489cb70d4005e3a87790"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
  },
  {
    "url": "assets/js/146.cf40c98d.js",
    "revision": "c9c9a3d2abc32bd92102db87933dd25d"
  },
  {
    "url": "assets/js/147.848d0645.js",
    "revision": "6b9460282b8b8e6ade377446393b58af"
  },
  {
    "url": "assets/js/148.6877775b.js",
    "revision": "71cc39f6ec0c5b3b71b57ce1ecbd69e9"
  },
  {
    "url": "assets/js/149.ee7b5cdc.js",
    "revision": "82f9afdc8ad946337f4c3e8896aeb18a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.beca4ce9.js",
    "revision": "58f34fefa4e54737ccf6bda2b99c9293"
  },
  {
    "url": "assets/js/151.f94b4505.js",
    "revision": "af6845095105ac3dcb4c427ec5cbf76b"
  },
  {
    "url": "assets/js/152.1919649a.js",
    "revision": "9933178c72c13fa5faab13e0f4f94f7d"
  },
  {
    "url": "assets/js/153.9857c66c.js",
    "revision": "06f132bb50ce503b0e28601a1cb191b0"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.20dc79e4.js",
    "revision": "8233cfda184954d04e4f3ae03e0286d2"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.e07c1257.js",
    "revision": "5183954cd6e8541530bb13ed001976e6"
  },
  {
    "url": "assets/js/158.4499656c.js",
    "revision": "07027b9493e1c57efac70e7881090715"
  },
  {
    "url": "assets/js/159.2687e6bc.js",
    "revision": "639f862171f02a05f641c03d39b6ff35"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.3cbf3f3a.js",
    "revision": "ee77472dab74b97f7578803465528e29"
  },
  {
    "url": "assets/js/162.00b434cd.js",
    "revision": "aae28cf8b6c16d9214c3078e6024d0c1"
  },
  {
    "url": "assets/js/163.c133d293.js",
    "revision": "3015cdc24bb3a11ec3df279adf3ff0f5"
  },
  {
    "url": "assets/js/164.b6f6fa5e.js",
    "revision": "e785622de343d93196ad3c701d960e52"
  },
  {
    "url": "assets/js/165.ce4012ac.js",
    "revision": "25d4b80370292e6f57d96ab60862007d"
  },
  {
    "url": "assets/js/166.f45dc15a.js",
    "revision": "6ad8f5f52e04f2d112b2b222171a8225"
  },
  {
    "url": "assets/js/167.fb27e17e.js",
    "revision": "9fe533dc61cee429c9a0a0e2fadbacc7"
  },
  {
    "url": "assets/js/168.5a75c6a9.js",
    "revision": "81b2d2a6f2252cedbaf6f2d7d83fb3aa"
  },
  {
    "url": "assets/js/169.b4c41fa6.js",
    "revision": "588f68e58fe1a46ab8017700c25c1d10"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.47ad855d.js",
    "revision": "c1004397f8b68a11c131eea9d087e8ac"
  },
  {
    "url": "assets/js/171.778daf70.js",
    "revision": "248f0fd2402e63fa49b71634341d6d9d"
  },
  {
    "url": "assets/js/172.1045b626.js",
    "revision": "7e815ee4a2fee4a8948ee3121f691dff"
  },
  {
    "url": "assets/js/173.40ac80b0.js",
    "revision": "f23e1e80b0903cccabb10403152b000f"
  },
  {
    "url": "assets/js/174.c07387f5.js",
    "revision": "05f931ec84fda0c268e83468b2f93315"
  },
  {
    "url": "assets/js/175.ab15f0cd.js",
    "revision": "c7501f4462566dded45fb8b0c5f5b83a"
  },
  {
    "url": "assets/js/176.2df4bfdd.js",
    "revision": "b7aa1052cbe8b2914633d0a3231e5465"
  },
  {
    "url": "assets/js/177.6b1dffe7.js",
    "revision": "d3c5867d8b821a77c76e6b0a63044f74"
  },
  {
    "url": "assets/js/178.9212c92f.js",
    "revision": "8ddfa42ceb60f465018e8eb65a7e5e6f"
  },
  {
    "url": "assets/js/179.2e6e796b.js",
    "revision": "372c068d08fec09599102db2b1c8268a"
  },
  {
    "url": "assets/js/18.566e4cf6.js",
    "revision": "ec20304394d5a34cb4d8aba229da6a42"
  },
  {
    "url": "assets/js/180.82986240.js",
    "revision": "b6c7bd6a11921e4cd5f9f0a5e956292f"
  },
  {
    "url": "assets/js/181.0b6bc242.js",
    "revision": "60340fcd969ef57d6c6184aaae0159df"
  },
  {
    "url": "assets/js/182.c3aaffef.js",
    "revision": "7f05176b0e985a7f7ebe2384d103e685"
  },
  {
    "url": "assets/js/183.520270d4.js",
    "revision": "9f0396fe6ec3fb86ea74e979a3deb7d8"
  },
  {
    "url": "assets/js/184.35bd3cca.js",
    "revision": "1c948c843d7b5f388d66c9e060cf3c7f"
  },
  {
    "url": "assets/js/185.d34457f0.js",
    "revision": "e09c850d3afc200927f941905d7a9ec4"
  },
  {
    "url": "assets/js/186.b94c0ca2.js",
    "revision": "d43c357caf4d261ec8b5479b55c4070c"
  },
  {
    "url": "assets/js/187.ade8e104.js",
    "revision": "b32fc2185dda114f3d002a57e43b3402"
  },
  {
    "url": "assets/js/188.a935294b.js",
    "revision": "42a220fe6a2f27dfbcb047ad05071529"
  },
  {
    "url": "assets/js/189.0eaaa1be.js",
    "revision": "7e872100b3aed47c7b3c86cc4fbaebb6"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.58a0f670.js",
    "revision": "92c6f4473ace22e121638126ea87f4ba"
  },
  {
    "url": "assets/js/191.0392ac8a.js",
    "revision": "e7d187a88e17c714549fe1c40703ddf8"
  },
  {
    "url": "assets/js/192.b91764a0.js",
    "revision": "f1b433c755ad1c4947c79694afc61847"
  },
  {
    "url": "assets/js/193.df1e7a28.js",
    "revision": "b6eb54c400954e86bc23a641438dcf11"
  },
  {
    "url": "assets/js/194.ccd76fb8.js",
    "revision": "d7e00c8fd6c5b9a6722059831ee03d5a"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
  },
  {
    "url": "assets/js/196.90c28467.js",
    "revision": "95581c7a2d7df2a8a742fbfe937fb883"
  },
  {
    "url": "assets/js/197.b662b50c.js",
    "revision": "3d8b132e06f7a95c4e05084cb955f81f"
  },
  {
    "url": "assets/js/198.ce3c4fd4.js",
    "revision": "4828072703f4c71c5ad98815d9e4f586"
  },
  {
    "url": "assets/js/199.5ff5437a.js",
    "revision": "f11496cf61b12ea23c173c012b1384ac"
  },
  {
    "url": "assets/js/2.d5bfc3c0.js",
    "revision": "3e5ef052f56826e20570e2953cceb199"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.9bede603.js",
    "revision": "cf8333330e523e7d7ba698844c65c1af"
  },
  {
    "url": "assets/js/201.aae43463.js",
    "revision": "1a2fab562e00e8409953406fef5a2b26"
  },
  {
    "url": "assets/js/202.0df1f956.js",
    "revision": "4b7b901c98c818eeca1936e9a20cafcc"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.7500433f.js",
    "revision": "e56c2ae97f21764d3a47329c459be01b"
  },
  {
    "url": "assets/js/205.bce1d76f.js",
    "revision": "2ede47426de9d44869d496ebdd03b3c5"
  },
  {
    "url": "assets/js/206.2869b60d.js",
    "revision": "92314ac97bef5e631a2b4a43f69ad32e"
  },
  {
    "url": "assets/js/207.8d4e575f.js",
    "revision": "a4b1d0dd0664acffb4cf1ec549049dcd"
  },
  {
    "url": "assets/js/208.8033a43e.js",
    "revision": "7d82aee902ec3cb5b7695a71cca4e96f"
  },
  {
    "url": "assets/js/209.f8ed33a5.js",
    "revision": "1e269965c7761e97747857ed4f894b4d"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.e911c0d4.js",
    "revision": "20672ca7714f35a9d96700223de6cfb4"
  },
  {
    "url": "assets/js/211.a20edde6.js",
    "revision": "c8ae68ab83e9fb6381e8a21757fdadeb"
  },
  {
    "url": "assets/js/212.390b0497.js",
    "revision": "1edf774e1f95afd0f52354c0f9078a16"
  },
  {
    "url": "assets/js/213.8f1c5d12.js",
    "revision": "a29740efc67d4de52b3c6c8194cc47c0"
  },
  {
    "url": "assets/js/214.8fcd17f2.js",
    "revision": "681530daa0d7be2dc01c6d3ee3016faf"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.3df2ce2e.js",
    "revision": "6cd64a2f3f6d402842f49de0d70ff925"
  },
  {
    "url": "assets/js/217.d2b1fd07.js",
    "revision": "a98b5665eae7aeda07b95cfa25d28281"
  },
  {
    "url": "assets/js/218.3f4e6ad1.js",
    "revision": "fd6f4e64c31c4c7ab4678df7e45c9272"
  },
  {
    "url": "assets/js/219.71b9ce06.js",
    "revision": "a38dd5c7caf46156a66245df29bf3125"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.64129641.js",
    "revision": "adbc44a15774aaf5fda28726a306e549"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.1d2e14f3.js",
    "revision": "3b3c34462916615070ece973e224c9af"
  },
  {
    "url": "assets/js/223.0066b62d.js",
    "revision": "7911d7928e56407e88b6530a69726996"
  },
  {
    "url": "assets/js/224.6d59ee8f.js",
    "revision": "c1af713e15462cddfb56cc6fbac57422"
  },
  {
    "url": "assets/js/225.e9d947dd.js",
    "revision": "5d99ea0ceaacc2d82950f37ca923b67d"
  },
  {
    "url": "assets/js/226.a74e12d4.js",
    "revision": "3a06aa5fb8a72f21b3f3e0951b96b2fa"
  },
  {
    "url": "assets/js/227.18bbe3b0.js",
    "revision": "097b03d3897497fb145fd6c7a585b263"
  },
  {
    "url": "assets/js/228.5c246930.js",
    "revision": "69b703e7b894ca385f1ab2ff62a69fc6"
  },
  {
    "url": "assets/js/229.a4ed9cfd.js",
    "revision": "b12fae463adbf2f4538696ae0585cd77"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.f6aeeddf.js",
    "revision": "7d1cb5e64bea0322cfb4d7c984b3f01b"
  },
  {
    "url": "assets/js/231.9ac96f77.js",
    "revision": "e331da82adcc883141c56a9342480bb9"
  },
  {
    "url": "assets/js/232.d9259fbc.js",
    "revision": "6984d97c44b09470c82d98200c2c6da9"
  },
  {
    "url": "assets/js/233.670fa60b.js",
    "revision": "25cb4114056a6c27383e6d7c45e5e6d4"
  },
  {
    "url": "assets/js/234.7a252bbd.js",
    "revision": "aac6c5baffe4033592357d364e73ccbf"
  },
  {
    "url": "assets/js/235.a54658e5.js",
    "revision": "b37ca57614214d0d69365539d38c0d70"
  },
  {
    "url": "assets/js/236.4786968c.js",
    "revision": "cba231c2be27d56500216b0d4ae423cb"
  },
  {
    "url": "assets/js/237.f5e19acf.js",
    "revision": "dc665cc00f64b1c2e3b4dcc5edd8b2c6"
  },
  {
    "url": "assets/js/238.3ddc13ed.js",
    "revision": "6313fcbf1d46b96211d096a52bfde00f"
  },
  {
    "url": "assets/js/239.4d367b8b.js",
    "revision": "a59e6417351367d4de3b2493eeffe745"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.543497da.js",
    "revision": "02d849f571fadeec60b45fc35273cf86"
  },
  {
    "url": "assets/js/241.99a1a8a1.js",
    "revision": "686e391e0d994b57377f2bdd6ac8c76f"
  },
  {
    "url": "assets/js/242.d8f9a99e.js",
    "revision": "29d4e6d3425edd25c99fcc969d4e7397"
  },
  {
    "url": "assets/js/243.0318154c.js",
    "revision": "7e2f8676d7e76bd5a6e406cdf229983a"
  },
  {
    "url": "assets/js/244.404fbf67.js",
    "revision": "672181a395296af1fcf84136c2e8a015"
  },
  {
    "url": "assets/js/245.229e4045.js",
    "revision": "a36b119654592f9f3a07603f9b767bd5"
  },
  {
    "url": "assets/js/246.3878cf74.js",
    "revision": "62c66909d475daf673de73d6d162f135"
  },
  {
    "url": "assets/js/247.2ff09de5.js",
    "revision": "647624c1d0ddbf749c4f9d2f8ba31fdc"
  },
  {
    "url": "assets/js/248.40039e63.js",
    "revision": "c03636b4ac3b45af145ef98a81aad40e"
  },
  {
    "url": "assets/js/249.43228c49.js",
    "revision": "2410ce6b04d30f1bb5ef24c99489c090"
  },
  {
    "url": "assets/js/25.a20030e0.js",
    "revision": "53e2c5fdb97be8d22e0cf6e846dbc3d7"
  },
  {
    "url": "assets/js/250.e76e7f80.js",
    "revision": "2462f50161651b75fd1f6bedddf520b7"
  },
  {
    "url": "assets/js/251.a37d5c46.js",
    "revision": "1178bb78c53701634cb03fc5956a3396"
  },
  {
    "url": "assets/js/252.36842f47.js",
    "revision": "d2ab6fb22a090ba8e60cc6153efa449a"
  },
  {
    "url": "assets/js/253.f48ae3d4.js",
    "revision": "0e3c9bb2ef8ea128c4814eab0496eac7"
  },
  {
    "url": "assets/js/254.bdffea87.js",
    "revision": "4f58438e258f36596074ad0eb7392078"
  },
  {
    "url": "assets/js/255.448c6d24.js",
    "revision": "755efbbeef9e1018194d1545b5245ec1"
  },
  {
    "url": "assets/js/256.7789061b.js",
    "revision": "2843f4fe863176496d1cd6ccf65256bb"
  },
  {
    "url": "assets/js/257.d1cef654.js",
    "revision": "a1eb2539080fd21ed57b6e0b3e65da5b"
  },
  {
    "url": "assets/js/258.817b9290.js",
    "revision": "4753bf94e8853f5d72038049a9fd8209"
  },
  {
    "url": "assets/js/259.56c599b1.js",
    "revision": "9c7cf55b13f21b1fd1ea0177432a9b45"
  },
  {
    "url": "assets/js/26.983925d2.js",
    "revision": "c774f1a563d9c533a584bf4ee36a1d5b"
  },
  {
    "url": "assets/js/260.539a627b.js",
    "revision": "120dfafb22f6405097fdb8bbe8be7b78"
  },
  {
    "url": "assets/js/261.7f624bb1.js",
    "revision": "3d1c7a5a86556b8441db0402f3e0fb3d"
  },
  {
    "url": "assets/js/262.cc611618.js",
    "revision": "7871a97a47af2e560f545ceb7c4ba01d"
  },
  {
    "url": "assets/js/263.458c17e9.js",
    "revision": "8b628fcf13841f9b80ed73f54d6c37dd"
  },
  {
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.64e1cba8.js",
    "revision": "d6570894330c6835e1203bf7bf11ce32"
  },
  {
    "url": "assets/js/266.b15bd9ed.js",
    "revision": "92d371d4d24440251f7867cc9323d654"
  },
  {
    "url": "assets/js/267.1afd4f30.js",
    "revision": "bfe8973709967639fb4b8f307104d0d9"
  },
  {
    "url": "assets/js/268.743579dd.js",
    "revision": "70a254fdd660ddcdd2bf08e4dd926ceb"
  },
  {
    "url": "assets/js/269.e0a36a95.js",
    "revision": "a448cf69a7aea70b7e146e942c6ba9d9"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.fc7e740c.js",
    "revision": "ffb1aabaa91c367037549cd65d74649e"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.dc0cf954.js",
    "revision": "8bdf05ad4d9e1b3b9af49793d1240d43"
  },
  {
    "url": "assets/js/273.d7086cf8.js",
    "revision": "880526107aa37d3011c1264f37e9938e"
  },
  {
    "url": "assets/js/274.925341fe.js",
    "revision": "c71e82005ddf85b99092da02e6d6db90"
  },
  {
    "url": "assets/js/275.b51f6a4c.js",
    "revision": "88f2be3fbc746550196b6b15863517f9"
  },
  {
    "url": "assets/js/276.f5b0be3c.js",
    "revision": "1aa0b7a540d7bd9406b4f105eb1114a7"
  },
  {
    "url": "assets/js/277.fa60aabc.js",
    "revision": "cabeb5d1c1a754de2291ab452fb1d985"
  },
  {
    "url": "assets/js/278.d0dfce40.js",
    "revision": "24641a7520645c4073dec56b3c12c2e9"
  },
  {
    "url": "assets/js/279.a3d446ca.js",
    "revision": "9e51df5d7164ec5a9240d79aec46ca53"
  },
  {
    "url": "assets/js/28.54bde104.js",
    "revision": "003cb04a62d3eddc71a07fe3ae9b6a5a"
  },
  {
    "url": "assets/js/280.08b781a5.js",
    "revision": "d425c000306d48632c9e8b5674122ef6"
  },
  {
    "url": "assets/js/281.d5e47a60.js",
    "revision": "65a12dd828e1ee22244bdde08fe7102e"
  },
  {
    "url": "assets/js/282.a3d4a725.js",
    "revision": "ad1dd52ae972745e485ab907a04167b4"
  },
  {
    "url": "assets/js/283.be16d80f.js",
    "revision": "3165d3324a7a7fdd3c90b19dbbab8ac7"
  },
  {
    "url": "assets/js/284.f4f495e3.js",
    "revision": "38ae2c29c715581edd5740e64f933991"
  },
  {
    "url": "assets/js/285.0fa40911.js",
    "revision": "aaa613dcfa3d4ba7e182d7387d6c8809"
  },
  {
    "url": "assets/js/286.a04444fe.js",
    "revision": "bb89139baa1294d764ad6d8533453159"
  },
  {
    "url": "assets/js/287.86eab1c7.js",
    "revision": "a602101ba504c4c298271aa82fc25578"
  },
  {
    "url": "assets/js/288.281e1ec6.js",
    "revision": "14d79a405cb86e6f571d883f13bcfdbd"
  },
  {
    "url": "assets/js/289.4bcdd549.js",
    "revision": "135a98a9a678b7668fac95d943afd92a"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.f618d103.js",
    "revision": "1891dcf77e0e2a7340cbc3a1777e6ff4"
  },
  {
    "url": "assets/js/291.11d6ce28.js",
    "revision": "7db6ca51de9cd05a729ec7fc92f90647"
  },
  {
    "url": "assets/js/292.053cd6a6.js",
    "revision": "c4f4dcedf07f34c05d96e3a0ab2e8c75"
  },
  {
    "url": "assets/js/293.e358e80b.js",
    "revision": "1aea288f2ced5dba3272652b48ad52b3"
  },
  {
    "url": "assets/js/294.2bc8546b.js",
    "revision": "7d65576ae54b69e9ca68ecaa7b7dd05d"
  },
  {
    "url": "assets/js/295.9f1fd0f4.js",
    "revision": "fcf05c957f9d70be8d39c9027c6c758b"
  },
  {
    "url": "assets/js/296.310fd8e9.js",
    "revision": "d623f14d3fbbfd1f92228093029ca303"
  },
  {
    "url": "assets/js/297.37cd9537.js",
    "revision": "2bd871683851b57ee87f6ef7a8f7d6e6"
  },
  {
    "url": "assets/js/298.77d614ce.js",
    "revision": "cd24c509ad98bffacd9db92e24e7383b"
  },
  {
    "url": "assets/js/299.e4e2499e.js",
    "revision": "fc7d37eab251bacca5e546439d7df5d2"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.dd276ea5.js",
    "revision": "77a506ee1ff5c2e0ede539b6d85b7531"
  },
  {
    "url": "assets/js/300.720c5c9d.js",
    "revision": "981db287fc89f3e8797df0126fea5d4d"
  },
  {
    "url": "assets/js/301.6368ada2.js",
    "revision": "244fa99304801f356ac841106c041cbf"
  },
  {
    "url": "assets/js/302.5eb783da.js",
    "revision": "ed2799d15a0908d535bd8eb70ebc9721"
  },
  {
    "url": "assets/js/303.d8573528.js",
    "revision": "941ee0533a4271c8853e93fe7d158793"
  },
  {
    "url": "assets/js/304.d9d5f57e.js",
    "revision": "de2252e9b194bf285eaa69c13048a5b1"
  },
  {
    "url": "assets/js/305.d982acf8.js",
    "revision": "0a042691e07dd40ee472edcc655ca256"
  },
  {
    "url": "assets/js/306.3f74a918.js",
    "revision": "df6a3e4d91da3f2d358755d0fef010e2"
  },
  {
    "url": "assets/js/307.de295a8a.js",
    "revision": "a19e70e3ba2b6682485bf4891b9dfa07"
  },
  {
    "url": "assets/js/308.f76508db.js",
    "revision": "5ec2b6d114331b43b9630f7f5253fc0e"
  },
  {
    "url": "assets/js/309.1bb16aac.js",
    "revision": "ae6ea4ca6b8a5cb6400f700d80264798"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.0769027b.js",
    "revision": "4783274ad2d6111736cc3d3fbec36a54"
  },
  {
    "url": "assets/js/311.6ca26f3a.js",
    "revision": "68a89573a1545ed42be72fcd5cb80773"
  },
  {
    "url": "assets/js/312.1e582e20.js",
    "revision": "f480618c46a758da924779fb151a4b06"
  },
  {
    "url": "assets/js/313.1593b130.js",
    "revision": "60d9148497c28d428a6475f3865b86a3"
  },
  {
    "url": "assets/js/314.fcf15115.js",
    "revision": "46e0f37e3b6e3478e395424e504c2fc8"
  },
  {
    "url": "assets/js/315.8e111c26.js",
    "revision": "70d7853988baef6735272f4283890949"
  },
  {
    "url": "assets/js/316.3fe8a648.js",
    "revision": "3906ae029f305716a9c9f64971aed6a3"
  },
  {
    "url": "assets/js/317.dbc61fea.js",
    "revision": "58d5da23b425037cfeabcbc89ef6db44"
  },
  {
    "url": "assets/js/318.c9203d39.js",
    "revision": "fb8c611ad3c7b79d27f058cc4d2a0282"
  },
  {
    "url": "assets/js/319.6a29632a.js",
    "revision": "6156fdba4961a2248eb777f799df3a19"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.46839409.js",
    "revision": "550ea30de271554691c8c8a2ac648302"
  },
  {
    "url": "assets/js/321.4cd70acf.js",
    "revision": "38de4f2868426961a0a8b54734698f45"
  },
  {
    "url": "assets/js/322.dd19edf2.js",
    "revision": "57356c99fbf503dc2c597f386e317364"
  },
  {
    "url": "assets/js/323.fac957c8.js",
    "revision": "19e801adfa853afa707499904cfae381"
  },
  {
    "url": "assets/js/324.ab956e38.js",
    "revision": "6b8505faaf5895aa16c8b91515bfa7d7"
  },
  {
    "url": "assets/js/325.04a86006.js",
    "revision": "f3b8b19ad46a897c34fee5a144504121"
  },
  {
    "url": "assets/js/326.4275cce8.js",
    "revision": "9d6a3b1f9feed18dbaf95295de9e921f"
  },
  {
    "url": "assets/js/327.89085f5f.js",
    "revision": "9e1bc57e253e9baf42db743e3e8ae989"
  },
  {
    "url": "assets/js/328.74d115dd.js",
    "revision": "b9f4b1c7b2c4281ed470baced65271e0"
  },
  {
    "url": "assets/js/329.d407bddd.js",
    "revision": "1baa7ff58d4f3a3229e0c68e4d9f33e9"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.675bb69d.js",
    "revision": "3718d810c6672fd70d94221ec5ac7d61"
  },
  {
    "url": "assets/js/331.ff0dc0fb.js",
    "revision": "20589ae2390e47675c0615c8308baa49"
  },
  {
    "url": "assets/js/332.835236c2.js",
    "revision": "870a5b79084b1403d6bfcac9f89e2faf"
  },
  {
    "url": "assets/js/333.d2797f6e.js",
    "revision": "63372f8046858c9c8ecb362c3bf4fa48"
  },
  {
    "url": "assets/js/334.44fb31c1.js",
    "revision": "8a343c27f797799bf320fe0497737b32"
  },
  {
    "url": "assets/js/335.1ac88f2f.js",
    "revision": "df455c779e5c7c27088b50648e5ecdae"
  },
  {
    "url": "assets/js/336.8666d2d3.js",
    "revision": "daf82bb3cb03a88375f5869373c6eb6c"
  },
  {
    "url": "assets/js/337.058fad6f.js",
    "revision": "99c376d0b9bb2fec41285f09c0b57ea4"
  },
  {
    "url": "assets/js/338.d18d8d0f.js",
    "revision": "43ac4e9a3f98c75a64cf8d59868ba670"
  },
  {
    "url": "assets/js/339.462db77e.js",
    "revision": "1e1c93536185e06383dc5fb25e315e5f"
  },
  {
    "url": "assets/js/34.51c5df11.js",
    "revision": "52d97a98135f3875a6f7d5025fabaede"
  },
  {
    "url": "assets/js/340.77caf216.js",
    "revision": "2317573d12bb4568739bba7e1c645580"
  },
  {
    "url": "assets/js/341.99c334e3.js",
    "revision": "1b84df8836f52ce02988d1fc966c755e"
  },
  {
    "url": "assets/js/342.6f375071.js",
    "revision": "04eac53231816216e26e2d47eb609313"
  },
  {
    "url": "assets/js/343.1bd23578.js",
    "revision": "fce66e7def0051820c4cddaf36250082"
  },
  {
    "url": "assets/js/344.a0b575dc.js",
    "revision": "f8132f820ada14d5c818c7ac9135894a"
  },
  {
    "url": "assets/js/345.f21f93aa.js",
    "revision": "da499cea22aff9a5fafa329497f0acda"
  },
  {
    "url": "assets/js/346.3f38ddde.js",
    "revision": "7a7decdca703191f737bd5109b7d89a4"
  },
  {
    "url": "assets/js/347.08f71406.js",
    "revision": "7bcc61a0449ef94bcd40d344a5583d62"
  },
  {
    "url": "assets/js/348.a0cc35b2.js",
    "revision": "9a91ae07fe71f0d752171ae0db307cb8"
  },
  {
    "url": "assets/js/349.1972c646.js",
    "revision": "536b886b98f6ad43faee7d1c6ebb904f"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.460a4497.js",
    "revision": "08316aa4cca0d96b68e2d64947f5d3d1"
  },
  {
    "url": "assets/js/351.5c564289.js",
    "revision": "bf9912c722a6d81416083b635f3eb7e5"
  },
  {
    "url": "assets/js/352.a8423400.js",
    "revision": "4c99054d4330f009e138430302386a37"
  },
  {
    "url": "assets/js/353.34a4b4d2.js",
    "revision": "03906537b657f4f9dba7f5f26e462b11"
  },
  {
    "url": "assets/js/354.678ad751.js",
    "revision": "5e68fd9ca5ba3ed0e17db657ea302c00"
  },
  {
    "url": "assets/js/355.073a934c.js",
    "revision": "8ab2a5a72ecbf3a3edbcddee47165bff"
  },
  {
    "url": "assets/js/356.e4011f29.js",
    "revision": "7138fe36fd88c03f6aa67ac8a6249b1f"
  },
  {
    "url": "assets/js/357.a76a4901.js",
    "revision": "1eeeba038d0b236adff3942e32155fff"
  },
  {
    "url": "assets/js/358.5f512247.js",
    "revision": "f1592507b7471149b182b43d84688a7b"
  },
  {
    "url": "assets/js/359.d21540a1.js",
    "revision": "e57ca124482d00dcd7087f33981e2e7d"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.2f4ad534.js",
    "revision": "eb52e823ce2bd386490634c131571ab3"
  },
  {
    "url": "assets/js/361.40c3318c.js",
    "revision": "d335e40aac1edac82c7fa47a7f157c95"
  },
  {
    "url": "assets/js/362.220c2bc7.js",
    "revision": "170d963cd49d15f846b091f59948e265"
  },
  {
    "url": "assets/js/363.f6b78ff8.js",
    "revision": "09d65364d7e3f3e14302b4b124df1592"
  },
  {
    "url": "assets/js/364.5ca0448a.js",
    "revision": "4ae3ed35159217143b846693990ebfa8"
  },
  {
    "url": "assets/js/365.1f5e5f72.js",
    "revision": "9088f76b66dc6924c8fc849a44c92522"
  },
  {
    "url": "assets/js/366.21a9878c.js",
    "revision": "a825480dc3ffc09a0a3177232889a283"
  },
  {
    "url": "assets/js/367.c3e97de7.js",
    "revision": "fe9a38fe7e6793f3b88ff0bbef4afff6"
  },
  {
    "url": "assets/js/368.7fb5cfa3.js",
    "revision": "e26490050efc04b4d28e9eb911053b32"
  },
  {
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.503e637e.js",
    "revision": "f3f811ac61adea744ed4ce3d66f75144"
  },
  {
    "url": "assets/js/371.92a52211.js",
    "revision": "e27c4dd2f4639766778b3539116f99c1"
  },
  {
    "url": "assets/js/372.57cccf47.js",
    "revision": "158d5222c1dab3786a4200e68bb31a48"
  },
  {
    "url": "assets/js/373.f146f0a9.js",
    "revision": "2454a298a21a254d2695e976b3d5728f"
  },
  {
    "url": "assets/js/374.4e83daf6.js",
    "revision": "375e5ae680a7a9d828c41f10c798246f"
  },
  {
    "url": "assets/js/375.f6461edf.js",
    "revision": "eae71ece95bed204849c67ac0afdf4ed"
  },
  {
    "url": "assets/js/376.8180889e.js",
    "revision": "55448b11b1a28a389b22c467f7f426e8"
  },
  {
    "url": "assets/js/377.afbf522e.js",
    "revision": "878ee6f40cbad544c8b50fb19a17ba5b"
  },
  {
    "url": "assets/js/378.c0328f5f.js",
    "revision": "9b55b6faa49ba7c7eee5d166a3cf6b4e"
  },
  {
    "url": "assets/js/379.569ed1e8.js",
    "revision": "79e39e513b7f884ba6e4990b6d925f59"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.b64b5f23.js",
    "revision": "21a8c309d789d6d48b0f03ffecaca4d4"
  },
  {
    "url": "assets/js/381.b28a5d11.js",
    "revision": "13f15c980b05262bfbfc3a350bdcb8af"
  },
  {
    "url": "assets/js/382.ecdedbfc.js",
    "revision": "e37ac79d21ba4e78ceef79872575d9c7"
  },
  {
    "url": "assets/js/383.e094cde6.js",
    "revision": "18067e753cfc28be64549344850a9d88"
  },
  {
    "url": "assets/js/384.8717758a.js",
    "revision": "da9e7105ea63fe7cb17cc7678a294679"
  },
  {
    "url": "assets/js/385.eeb6ae56.js",
    "revision": "239697fb7371f6520f38e09a5fd5c0ab"
  },
  {
    "url": "assets/js/386.640579f1.js",
    "revision": "19ac6698cf45a8767b5c7ee46d2686c1"
  },
  {
    "url": "assets/js/387.b40599a6.js",
    "revision": "788012465d56ca0c7afa73a91f89be7b"
  },
  {
    "url": "assets/js/388.e02b8b47.js",
    "revision": "5dc3c09e4f7774c1503801eecdbc6fb0"
  },
  {
    "url": "assets/js/389.878dbe26.js",
    "revision": "c64527b8bedf5eaf84ec8af03df66b7f"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.14ac2989.js",
    "revision": "33316378079725654e3ec227d73bab61"
  },
  {
    "url": "assets/js/391.8d2d5831.js",
    "revision": "bebb5519be55556aaaac23f615f0637a"
  },
  {
    "url": "assets/js/392.49f9c53d.js",
    "revision": "532c06f04a827275ab569c7878e3e017"
  },
  {
    "url": "assets/js/393.b0e8dfed.js",
    "revision": "7c2220beccf76c7b89d96cd1b827df03"
  },
  {
    "url": "assets/js/394.bd041b5f.js",
    "revision": "da059c503db19e82334af21d1cf73b0e"
  },
  {
    "url": "assets/js/395.eff285b3.js",
    "revision": "ff97f66ee183a6e6f43f45dd7bff698a"
  },
  {
    "url": "assets/js/396.50a44f27.js",
    "revision": "ca2507e8b131de2e9e3d800604c3e38c"
  },
  {
    "url": "assets/js/397.08a2de4b.js",
    "revision": "234ff674b1a0123b9852c8cb6a66be1e"
  },
  {
    "url": "assets/js/398.9175ee1f.js",
    "revision": "02faf63ff1c6138efa7b3d31bfe79741"
  },
  {
    "url": "assets/js/399.d48748e9.js",
    "revision": "2ea5b9b5b89d0484e43175403e2bac57"
  },
  {
    "url": "assets/js/4.ec446020.js",
    "revision": "13a7efc36488d805c012edb0a2c31c8e"
  },
  {
    "url": "assets/js/40.6fbb3d02.js",
    "revision": "4b1d3a5d284756d4b9ead12520a2665f"
  },
  {
    "url": "assets/js/400.59df523f.js",
    "revision": "709e9e88c1ba26d92896723a11dd6127"
  },
  {
    "url": "assets/js/41.84b21597.js",
    "revision": "a95530509fd275b335dd97c972957dd9"
  },
  {
    "url": "assets/js/42.c550169f.js",
    "revision": "72c0bf351cc90f53df4d5cfca5068b09"
  },
  {
    "url": "assets/js/43.a91f96d7.js",
    "revision": "c535098c8f743a30414313025e55e21c"
  },
  {
    "url": "assets/js/44.6c498ee4.js",
    "revision": "9075f303843f45b20e215de3f87e6186"
  },
  {
    "url": "assets/js/45.69efb30e.js",
    "revision": "e384abbbba028fa785708941dde049e6"
  },
  {
    "url": "assets/js/46.765a06b3.js",
    "revision": "ae3f3b64496987ee9f021f47bbbea4a7"
  },
  {
    "url": "assets/js/47.d5484516.js",
    "revision": "d9d6023dc8d13ee2a2a50f421bb890c9"
  },
  {
    "url": "assets/js/48.b9933de5.js",
    "revision": "2c9fbe3e67b604a4bca18cb2481514fe"
  },
  {
    "url": "assets/js/49.c823794e.js",
    "revision": "279e4b4c7b81cc05a976efdf71bf8060"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
  },
  {
    "url": "assets/js/52.3ac77ac0.js",
    "revision": "f9145fbb35dfecd0c2ccee0eaa52a2a8"
  },
  {
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.55864510.js",
    "revision": "8613993e1060bf538606e6ecc34e5a06"
  },
  {
    "url": "assets/js/56.c1f23aee.js",
    "revision": "f3ca792a59ef9b59cdfc1fc1984514d8"
  },
  {
    "url": "assets/js/57.e59527e7.js",
    "revision": "7c321e11c6a649647610bd6caa974ab3"
  },
  {
    "url": "assets/js/58.614f21d5.js",
    "revision": "f57beb4b7ba2bbc826f8472085697a49"
  },
  {
    "url": "assets/js/59.b35aa3b2.js",
    "revision": "8c7ed0a1d44f18a6c31935ae4d290f75"
  },
  {
    "url": "assets/js/60.d79bdf8a.js",
    "revision": "03f60b0ab546685437ee018a8c122908"
  },
  {
    "url": "assets/js/61.aff66bd3.js",
    "revision": "358554befe50721d6f490a09fdd2d04b"
  },
  {
    "url": "assets/js/62.a0ebe015.js",
    "revision": "f85bba42ba361f5587dd606b29269bec"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
  },
  {
    "url": "assets/js/64.2f574911.js",
    "revision": "288acfe329fa9fd56731ff4eb716d07a"
  },
  {
    "url": "assets/js/65.7f504c38.js",
    "revision": "0da626b434ec069a89a1c2546ac226cd"
  },
  {
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.28b887aa.js",
    "revision": "1dddf0fd0c6790df0e653e3ea9495802"
  },
  {
    "url": "assets/js/70.2b42eb69.js",
    "revision": "6319abd2f69e95dd6432c31da66e4eb1"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.5013ac5e.js",
    "revision": "ee7f8b8d93f9f26e9886d244b9faa2a0"
  },
  {
    "url": "assets/js/73.19f9e469.js",
    "revision": "14438cdf13b86425bd34d5195063e158"
  },
  {
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.f8b787e8.js",
    "revision": "ddbf7edac692a84e8ccb70c288cfb494"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.b3d9707e.js",
    "revision": "9b852c3a1b29c5f6192ee713b7f12d37"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.5fa970e4.js",
    "revision": "ed493c3859065d0bab77a2ce49d45995"
  },
  {
    "url": "assets/js/89.4d28ddec.js",
    "revision": "e9b62fc2e2bb8c4f2eeea881446444e0"
  },
  {
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
  },
  {
    "url": "assets/js/91.c987bbce.js",
    "revision": "35c9dbc93aa8bc5f1dbf9d877d009c89"
  },
  {
    "url": "assets/js/92.0839728b.js",
    "revision": "a362eaba1ee99f5099dcf0c4bb1d7056"
  },
  {
    "url": "assets/js/93.4de36706.js",
    "revision": "eb06e793c55d9f150f0b7e10555c8635"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.aab53072.js",
    "revision": "9c6b09a30f7cd54a264bc93192f97fe7"
  },
  {
    "url": "assets/js/96.0313d3cf.js",
    "revision": "68e4a3c38e43466be1258da78e9b3e35"
  },
  {
    "url": "assets/js/97.a9d77f55.js",
    "revision": "1da8d85f5cd5d966422d86ef10232d0a"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.2411780d.js",
    "revision": "200d9dc5f0d9b65883b5e179c5230536"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "f594d9fdb505a0e30ddc96bfbaf5e84b"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "7e5a14041aebb0fe3c31a3af972bff31"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "b9201ebed4bc857bf381bc2e0c5b5f71"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "bbb4187a929b28f0164e140a795ee7a0"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "e9ab3ce0f24af36eedf53c0b0709b01b"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "50851eeab127fb0c1c1c4e07398c7d12"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "6d619194813f3d44fe369cea094b4e92"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "6d704c3187e603875020c4632e231e8a"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "bf56a46a5d5e516956780afc41e387bc"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "93e1532aa7dc425f6302b06c78923761"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "e3945684a01cc92d5e1ad48484fea44d"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "8a6f3f98912fa3692f34c5e0b05e8673"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "1835a0943f2fdd3d46ab44c73eb5c2e8"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "846153b8a061cee87d2113ef986e42f6"
  },
  {
    "url": "master/api/index.html",
    "revision": "1dba343038972b079e2ded9eb02d4173"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "4a4a148f1975be046923bf448ff0ed75"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "940f7b0de8eb367135fdba868c2fb58b"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "b964f1c8b6386348d0ddb5c848aaaf41"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "d9f078b5ee2e0999c8a0b4205a43a762"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "d54d7fe03b93c913ca14c9a81d973f6b"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "a5948b3a39d202b59c9a2e24c2878ce3"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "8e0d5b4c9778354f8540bd63fbfb7b8b"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "082b9da1fc72ebd744d90b65792e2104"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "b4fdfa0fbf85dea31da7330761af7c60"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "45ca98a2bfe3b7c7809b4bf5f54d16fc"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "277d94e730f6d83ab79501546a9f5769"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "dc6c1db1a1e688e28228aa8473ce59dc"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "284a3d712bb081d5718f826bea8c54fb"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "ae4ceda4403064a406eaf02a0bca4ad9"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "4be18972bb367bbf03e8cad23a8b9390"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "3c188ad430228fb2085c95faf3569e72"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "2bc0add179dba53ccd836caea38f1438"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "47f8c1baf8562d83a2b184e58aa49354"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "763db72be9adec5ce904fe4b2d78e2a3"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "6911d1642d57d988284f58cc438d8b42"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "8e7fe0c668e832b1c6d858e1e328a72a"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "7c7419649cca97859841bfbd984cbee9"
  },
  {
    "url": "master/packages/index.html",
    "revision": "74087b483115adecf4436fa5b5477e1d"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "6cc8137ad7c4b6e82921effc9975f8f3"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "c4f6b4e6fc7c9208d9bbc4522de1a2ec"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "640e7dd686d46d7eab8665b1e93db79a"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "ef7b2dcaf7d24c93110486172ca45ce8"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "f6f284f9f11d2eca93be225c828e9746"
  },
  {
    "url": "master/packages/views.html",
    "revision": "7bf3ca097346cb844c7ce8eca781e588"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "fed340c71f57dd0493ece8bb297e092f"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "486d90a1fc251bf96ba18d786474a8db"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "4bc113484137c817d71a0f5a7d1ed29d"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "bc233b7178513a656720dea0bfaba349"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "1afb5e2957421c9bb0baf847f4d74bc2"
  },
  {
    "url": "master/themes/index.html",
    "revision": "65490ea890715b0417029c7d8a5497fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
