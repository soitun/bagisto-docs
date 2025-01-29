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
    "revision": "acefd1830a0fd354c9be9ee04a5a9bc3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ceb654258c68b6f5e4cfc44aa3ef4e97"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "0a60b55eed1be264a548edd601155af2"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "68c82b26ba3f8b942242a677435afd43"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "8e96f90c96a586f54f8d6e9c8b4d91dd"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "b41ffd51e639c0c2b92c98f78d7215bf"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "c91178f79ad7620a9fd270d8819f292b"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "98bae12e4d65ca8c34a63e48b0ceb42c"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "c66f3a6c50ecf0027ab92afed1c14df0"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "00194676084f57840efb31b27f0486e6"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "b6e3955353ffab32468562021be3a059"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "07aac4bdc34fe8fa7ab2ef59b0049410"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3edfa9c0abd9cf4fec30bae1e14d823a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e4e7cb88f28fbaa6249a2884b8c8f451"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7f81bfa12ed466bae80d7f0e9cd38413"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f5f7263670721dc8f59b7eff5a52b36c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "4fcb0842b6cc07548496075ed3c764f1"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "259c5b6d4a3534f730302b2a34d42171"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "f29975e5abc13290662eda656b1745f6"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "111f5a945829132085b0d822f64baa2b"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "d06fea05290a5a27a1a78a6cbb6455f3"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "00dda712c6b8f0dfbbf72b4a972c47ff"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "bdb385b48b2073123700aa6c1994277e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "a1627409723369b71b737a538734c7cc"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e2790a87e0337ce452572e6562fd514b"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "81d410cf418ede9d7136642bdf1ae401"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1dd79d933410a17252c9cc46cb9f6637"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "0670d64f3b8bedaf175fcefc69be3cd7"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "3b1a545a91e84c55e065b859228523b5"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "f042da109c0f88bba3d6e46329e543e8"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "30b283fc79487cd5d7cc969ed1d87040"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "136261ce9894d3f148e944c1a2d9e3a4"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1c1e8d4edd3c7c39678771b5799483bd"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ab787d67243218a649fd20a2f7749746"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "746122c50a32c9fc9c3210efe6d3df20"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "9748b2aaffa3a9ba32cb98e61f954389"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "2544a4f3b3e5e7d5ea0f882b40f01d79"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "ad856328b155fb0d2bec0611e51da99a"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "e815e8c449a47ee7efed5966f1ddf362"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "3dfa6198eb99f386e12d1ec849f4c753"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "2adb462ea81319b31c687f45005c98cd"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "099a1a991326d584287bfaa093ea5799"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "0b13985c7cbb31a71134348628d9f6c0"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "ace0043bbc3b9ab557ca3b9197ff42ab"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "4b10f036bc8aaf31208d6113132debc6"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "b06862e7cf591c1f1a7ff0001d993f31"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "28dd9cb32d9eb5397dc3b0178353c28d"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "a34b42a1f59a3a9c72c150c4c7b81d1b"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "be2648534888c26946855df2e0c00de9"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "fe181efad0fa7887c42cecee77afac02"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "48d244437ca4c97ddfcfb4610dacd008"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "57e562c0ddb39d3d8ab86daba5d32b23"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d7a99cbef4b382ca07643aa62ae4607b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "f6465d7962440d60bf5dda223080f7f9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "bc062d5f4eba0c5d2b06a95c5825199e"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "45262a5731942478b4f2c581f094d5bd"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ec52ec1d280be4d1a5bb95fb9bc461e1"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "31be4abedd0b384bcbcba3d588366631"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "2c6ded756eb089fc9df5dd82b4285108"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "604a380b0bff35b9ae93f9f2172cc5c8"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "a22e3b1870961317d5b78ab435a29959"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "64abfe1cbffe196ba3ec9d5fd9ea70ae"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "ee668a2474e39a58302c59489eed2055"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "b7655ea6b3027cb4ae8c1fd79afe308c"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f1e87c6f5a810e85770816bb4abecaa3"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "610de3c9f3f4befec72b59a3c75fe1aa"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "8baee4682c0017d2444e220df7054b42"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "84027ce5db94ced606ad7acfde8c1ce0"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "59de01cfcdc41644959d6bb9686fb97b"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9d89d58bf10b940f2195dfd52fcc37eb"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3090cded5cc6cad7682dded6fe382ee0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c38d5d4e6f87f34de3ce47275309cf5c"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "4664cc51d84a1fa61ead649d2f400a71"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d1cec0e9d1e4686b416a4fc4ac6b9dce"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5b78a6f36d28030c8aaf60a4f85c8cbc"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ec8e15faf12feaca82e37604a43a6c95"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "a5fb12d8986baf81c0b4b245a7d56203"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1ae8d99dfe1dcc3c085b79c0c6b13904"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "41d609404f9b1f4cef256dcdced5299a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "670a6a286f5bdc6e089e74590ed248eb"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "468bdec687f95969a72fc7cda566af7e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "a71c9cc9b334c4df56efa749ae450694"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "e571ea2c9450107a64ffaa01866f2e09"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "8ca4806ef6d16a0895ed06df2ff4e208"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "fdfae2a9fbe85b79235d64a9f6b0fd19"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e1e7970384076657872bc15b60a2dd13"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "b78193baa0861d84e3dcf3c0e9b1d1ef"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6a8c239c70b75532bfcfe7b6a61e9f55"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "919ca07ce3c25fe5758b2bd668eaff66"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "55fd32632f9e743fc8f7c7bf7bff9214"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "752e8b46e38011db4013edaf27b69f6c"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "819e3c177e94d6e5d4042b09e3eafd03"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "52a38b88bbee6ae9452e88a898e3e1cb"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "dbf8c066c14802c23d1e50846cbdc9fe"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "53cf1d5ba1e4faaae9aee4d97cb5643a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a59677ae723910dbc5b729923a79fb26"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "abb9cc87162235345fe013f9aa556cf5"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "7978be2d9c5cd7d60fbe7e196a595a1c"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "534ad77c0ff004b0e218c824b2fa78e6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "725f3c501fe219e81f0d55d1f44c7cc8"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "4db255ad425cdfd8e44d50bf305ebd79"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7d36db865ffe46c08d8417e5ca910162"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "4eb3ee211138f91b45cf2a2dee0ec08a"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b077609a1c09d8379fd2f76797c43fe7"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ac90772636f4cb29f261fdb79c64fcf4"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "abb4a07a02edd8a8bf5a71db90c44f6a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "b366c7f9a224adf340abfae23281ba7a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "540bfaf1b2ff105a343dccd9dfdbd29f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "814b540966b992963b3db8dbb7e52d9e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c735b8331e96719d22bf52fbc945ce26"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b850cabb93a5712f38ac30db7c45b95f"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a85669fb45feb2f5ee7c263c3fb13f39"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "5806ede399632fcf154c9213b3582984"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9a9e3838242ee195c65a52ecc2852664"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e865474eadc0bd650735efca75960c59"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "8186b1fcc25f55be55c58857291b9fe8"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "cd24301446955eaab427d22e8716b57c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "7424f6fb34819e225d99533e039160bd"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "7a5804667eaee845a7c86d570e3759cb"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "552b645cef17c4de5ee24c4e9b86c216"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "a5a2707882a2f0853dac116a6b720c81"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "3a5c6f0e8f3fbfac098066b898332cd9"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "fd5ceab60a4e021f0b9f0712d0eddb59"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "fb1180058d270246779085a8e7363cdb"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "341a904f5ad0720e61d25faeb2358ca4"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "73fb413fbe50f771a667f53d091a479b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "2a8c588e76f31fe52f8c9391b3fb1480"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "8565c9301659271a7496168c9fe2ba82"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ab46527666b067195e65623ea23c5dc3"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "ea53df0859e4a4641b0fb85c12122f78"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "a00f653dfb8d6b275457e0d18046fe24"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "941b3cd2bbbe0f6deb2d1e5318ea12e7"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "c44d8e984f4805390bd9d35acbe631cd"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "63772cab10028d04cd1846f2a4378b41"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "e3e24538a9e8925762af1210f8d720b7"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "bad4f64561abef6fbaa759e4352252fe"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "49df660c3c504a683be3592199cab72d"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "94cf7d0fdec3535d520e687f5d8d1b2a"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "f9c999380b5d52a7f6ef73baab3c51ee"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "f77edeefa3b33433f9c4865999ee016a"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "ea39b0fb12e16d99f788b1d4ebec8d7d"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "68ee4ca171342676af442ff06987dc76"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "1fab708fda38b68c10f1183c8b7acdcc"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "ebf613f4d40fa1f9d1a9cb6e80a1a00e"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "f6b4ba182edba909ba43cd44fa0cfe9f"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "3473fbb27f2ae8be2a9dcb8761f7ad7f"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "e8feedf6ce7abd24f54debadeda5a47c"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "467ea26491ef733d86420559ff2ca087"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c183bb31f935bee0cee384135c1bb9d3"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "7066f6b7777fd6648058cc0c9f9214c0"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "d0fdce009f6b50eddcd3b3cb6f04b1b8"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "e5cf86d3a73c7c63a46bda6f179af5e2"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "cd679ba964b70b6da915fd54c9fc10a5"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "970ce60d166eb3ce653df95e7bc8dd80"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "983012261d82877c396a1e6f8f54cd4b"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "320837f28fac322abea7499c6a6f7054"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "504e3c6411831c6ea8654c689b639546"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "8eba745034999ed9e6d07e7d706d78f5"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "2b6182560256018157733e4ac1991877"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "b36bbe345a94c76a6f63827d73a3607c"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "6ac28e79d53d88ad1767f008eebd3fbe"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "ece60e5844f624f4eff5cbbfc23d282e"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "60b4a1ff46c13ee903afe53656ee8b70"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "4c2e04200bc7609379cd41579c558aa5"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "dc65d1f6d82a6c605287e773b2ce387a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "bdd01f3218a74a34e9b69d0394ee03ef"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "b04a4c55cc8d42b06903c719808b7cd1"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "4277d67fd72b1e2d003b2efc6809dfac"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "9d1112ceb1b85806e6d83b1b6fc1b9d2"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "c0f1574e20755055c385b2a953e89458"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "68a5a47b2efe455861c93316b54c7d09"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "53d585187f43c61e114f78887fc20edb"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "53fff204bb88cdceac3d97bcff452d79"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "635607737a7e3dfe6bce95b89a36617f"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "c957254e3333ac3456adb9ddc62eeaad"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "1535769d6c42d755f43bbafb3be5ab7d"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "5fa21b835677bf99274008bddd2b34eb"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "ab4f75e7a6ee656cf9402eaad14e9745"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "85c2e5c2755c4cc344b7504113708e12"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "02de875ccc6b8bdfda85218cda83a65e"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "6c3c2e3febaa2c3aef9da08fe9484719"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "eb8c3058f6f1361b0fde784a337a00d8"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "a49e52d6a4d8c612bed1c68df4902fd7"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "f276c027ef1ade87c3e8f36996a24dc7"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "7e000ca80d5532c0a48a88cac83ac155"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "801104cbf5c3d46bdd8bbf298cc3d48f"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "454ab6da4dc1fddad6a6ee8c0bccca60"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "919b07dd8e2e02145301a27e23186c18"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "2255ec402c0eda4b1c28434b55ab30c4"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "b2f2ed685a7ea042d7d378be9e023d0c"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "251a83cad12202e38920aab13200c261"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "e54d1660ec1d4930ff1d88b9c15b66d5"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9b70d0d58cd5baaaafe7f6ac0a62d0aa"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "7b2aee57e20ca819fcd16c491a5beca0"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "f0ac7cd481a1f77b2c8f54d955b33a11"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "f9e77e6c6cb046f243f35858186e4af0"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8ca613085cce06d014c77aac9e350fcb"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "22dd1208983bf093a4283011794cea74"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "0afcd238a7aed8eb76b5ee9bcdabda84"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "3f071897ce38d4036668d40f0af556ca"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "6e6e983121cac42bd3602e6dbea918f4"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "ee2ea2e06be6b907a703cbfd55208491"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "5b93f3ef8be2ca8e30e20ebad5da9270"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "531a8ae839555c2345115c397f25603f"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "641bfec18298e73ee609d2f2f35f5ea8"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "96f84df37c6b1d4a6d6a3b6368c51d27"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "7c40ed618e070feaa48d3cd5f729ecd3"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "02ce0575e95ba717d82f264e9f6f9209"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "2ae6eddd17eecf87f3c7c1d9661e216e"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "2281b4d962e499d8a1449cd136c9e545"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "665c08e6e8c50a541c2a2c6c2d9bc4ac"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "43d27369e24fe47c4247da2d5b0ebf58"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "c22c3754b86fed0abe8197854f70476c"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "338f23bb7842009e26114253b1f7881d"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "b9ad4964b1116356a71c54fc8219a820"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "175214fd30ef9c9f5b13efae4d2a2690"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "211ce36d366e7d7768fb312c2164c0da"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "25b0ded6a646f081119f45015e3eada2"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "3030fb4cf1dea295af8e01de1f5c4973"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "7ea2b476f3a1d03be92ebefcd302f5d3"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "c579e08025d46b35554b2b4786147142"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "5d141ab67f7f981ac7397d36eb5896eb"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "7aed3967c858d7c9374d2277b906e702"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "9341464a20eb612d0484537ea0daef6d"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "9b06dd19bb5bc739e74302960d43cc04"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "d754cb3a7e5a0de58dfed2e040673a21"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "e4f8a9774d156fba776a1716c41f135a"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "d08de60607601900eed217f6b8c8b4b0"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "c962e8c3667657bb436446371d72038e"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "02fea4e98db157793d3ab4620cb1d0e6"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "f13fb2dbcf8c8158f445aad08e6ffb48"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "82ff35a1ed847229d332f786e5bb4243"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "65dcbd6c22ef61372bdb39df688c112b"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "c842e77ffb5552d2d88f0b2862150a68"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "e2d0fcf97d40cb370837dfb7f6f3cb53"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "8d2c69413d5d4743e274f1c22ac33ff9"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "de95b8f35467326644fe2ce6ae9c6e50"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "d958262559ad109d4822a7adddb49275"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "63ccc8b7b3f895d930fbbc96001f4e56"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "293f8f4d83b643b1d33ca1b6cccf34a4"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "bc2ec34bb8b8ada6c83c3e452dca0132"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "762d975b6170a1971ef0d972698305af"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "a15744db03f27c1b13c706f70c667180"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7a7c7d21471d976b1d94d5d282b1e1a8"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "19e377a378d51d84d68233a0b12bdcc2"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "3937b106d5adc315f15b95702f53b6e9"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "4dc0814e5ea55adc921c42412dfb294e"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "e1e2e289776b1a2a5a8db6ceb4dca888"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "c1fcbe12fa47afb7a4980e1b3e80a2db"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "0599bd71d4f5898d8399fcc2ece4d9f2"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "1425cccbee703ae8838affed7f2b0cf2"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "3f078096fa3d478d787bf8c12a4750b3"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "1fff2677ce2829fa4329dde43108a053"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "53ffad35959734df0f4ba84e9b21453d"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "cc5eb40e74ff71a73ea714db201a4f09"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "e7cf77bea280a1eca681e0eae3fc3a2e"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "c8ae401f59a921e42ee203ce27963b1f"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "ce9825ba9d7cfe2c566156c5d361827b"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "646816ec77b0eb3dedfc96bde37a8db9"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "2e3fac119d02b1f288f41fe82d50cf86"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "7a61ff5ebc8be9eb7bdb596e4cd2d204"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "85c1f36756ea243d87a1e53ac8dd8df3"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "bb9f0bf13b79c24c388db5b4bd169361"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "920679e8db88787bee7b9a59515e9f04"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "97c36e0a2b1f2a6007940005fab8e9b1"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "d5aadd031601e30b5760c1abcba2f69c"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "d0151aee30f5a9e69d122749ebd1d125"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "5ce9750c39aea7a3236b0244baea81f0"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "cfa574fdbac91a815edbb0b67ec001fc"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "f5c63054e69205677fe480800a6489be"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "234d81e3433f67676f416b3cec0bcfa8"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "bbb6cb622213aef7c847e0f06d22fd77"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "4d28f86f358c788ac6ad4acb0df2b4f0"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "b0fae703038d5c1a3ebd1cbf191e5071"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "5289fe788f706b424b51db707eb7d1fb"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "dd7bddd7eb4224ae342cec4fac66c8a2"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "371210b0554feac3d04ab1fd575c2ffb"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "dbfe2c0dbc1c327ddf8666cb0a16b1de"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "ae6cfc60e1dd39f66fad47e9f6454f7e"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "502f8497205f6d2174f8d79add29e5c4"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "d1e737caabf4d13f5db893d6fbad9e48"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "19bb9c49d7bd8b3d2a492c5c2d8beb65"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "874bb08a1def4ce55998be36d554f74b"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "2b2bbaa0ae02aff5bc9db6ef86e6244d"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "4ad058cf6a752b925ef0d2ad535be087"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "c37ec7aa9e4a3779861a41f084ca7d81"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "78bb76805409fd95f38df4563aa07922"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "2c12aed0881fa60ab31415a105bf013c"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "4ae3af6b83ab6b5577a322fc3e172ff8"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "71ef21a66a52e566b4cab0227945e063"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "1641ba172decd8bc60d6ff8bad694929"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9f5ae53f7b2a68cc1acb52b452d65a4f"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "363b1f9290d13bf3326fef6d7328502c"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "aa96367c7b2f0f001790f82b1c6101aa"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "9897d1153b74fab35b1a5db2f232b3cc"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "939c0d3a42956667cc3e7903f2fae1a6"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "7a37252720eb00948301768404fad487"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "7923a938a431b657cd2090ff660792d9"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "dcd8a8cfac53d4e517bc663c700e8500"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "2804af798bd1d104f7a0510f13ed5b6d"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "a431a0457d4c146bec730cf18eec08f8"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "048ba8795500b0f2d3d2e77cfcfa8f86"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "5e7628f02f9af6e927f90ee463d7063b"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "3f7c1c2fbdb04a1cff2ffaf42b731f57"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "52b65600a42e49005b3ff6594958bcd0"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "57296096671212579aeaf93c901554f3"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ec461c62dd2fb8bfef22951c8f194f37"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "0e7046cc6426553e5570173647c6e296"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "017bc56fb2b78918766ea854529ab6b7"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "8d28acd3d166f70e2d67f33a8fd84acb"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "765e019dd7249f53033db46b5f576434"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "33261065151df02b4a2fca9a242187b9"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "2c1c184f0302e749674406cb5b672163"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "eec06af836929c9077a318ef66a3ca67"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9fb44d949e966e9cc43ac9aeca1ae26d"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "aeb4f16c859d1b8603a31a83fbeeb129"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "2b2af5733d2a3edabecc8677813a2bed"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "4fe12e27826af6afa09ca9ab199c0503"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "3fd6071171350628bc3f656ba06db9ba"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "9b6464bcbb66dcd460b98b12665d24e5"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "293e690829f5950cb5336af2ce3fc5dd"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "06afb66abec59cd76d6df29782d71850"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "83b2da5ce2bfa5281c07a8167d96dda6"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "bdf421938f15ae26d7a57fbcff0018b8"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "5370954c5e02af0b2547f3caa2a4d5b2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "3716aa7136297fba935ef29abd56fbd3"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "161e67b0d95737f22c76f8e1bf7170e0"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d23133fc14bd1711867b24c41beeb20a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "b986767b1a1bb58b916e238e2d823095"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "1455c83ed24573f69b4add622d86c6a3"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "fc1e932386ba86e4ccd6f4cb9aca1119"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "be1546e0d73eeef1a066da66df6f8853"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "31397a224db23e8e0866c5cfba09d872"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "9b35b10205d5b3dce5e92b36c593d7b1"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "7ee3c8c910001a165d8b1b1cc8040ef4"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "2ac3b2d26e4cdd1c6fc84660a5409ec1"
  },
  {
    "url": "404.html",
    "revision": "5f16b66198101bf70a3cd90f7b54fc32"
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
    "url": "assets/img/create-image-ec2.8b5ede7a.png",
    "revision": "8b5ede7a87d660433e1301892da28295"
  },
  {
    "url": "assets/img/create-loadbalancer.1f352060.png",
    "revision": "1f35206006fd0dcf30a50b21582a08ae"
  },
  {
    "url": "assets/img/create-target-group.9b7b3385.png",
    "revision": "9b7b33854370a1b37ca92c0b713ba640"
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
    "url": "assets/img/loadbalancer-port-80.540ede6d.png",
    "revision": "540ede6d9f0353c0a9ce724fbd1494c4"
  },
  {
    "url": "assets/img/loadbalancer-port.9e77b96d.png",
    "revision": "9e77b96d743d9f3c9ce1d39ecb4079a8"
  },
  {
    "url": "assets/img/loadbalancer-result.9c0b7fbd.png",
    "revision": "9c0b7fbdc2ef530fe8ccb450d9051156"
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
    "url": "assets/img/target-group.98f7415d.png",
    "revision": "98f7415d43e154592baea6c7eaffe426"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.6333da02.js",
    "revision": "40922d2391982abd638fdd89790e661b"
  },
  {
    "url": "assets/js/10.b10f8350.js",
    "revision": "cc56137cc16f06adc48caa0758f9c788"
  },
  {
    "url": "assets/js/100.a87e7ac6.js",
    "revision": "ffcf6ab67982fd5f6975ad9f0a7ab1ee"
  },
  {
    "url": "assets/js/101.e7450a60.js",
    "revision": "b616a7bbfbb65ccd44ee3bccfc2adf8d"
  },
  {
    "url": "assets/js/102.739765ff.js",
    "revision": "d1713e7238a6782c9b79c9caddae04ae"
  },
  {
    "url": "assets/js/103.66493862.js",
    "revision": "8635ad02429307ec1d9c4ff823baba12"
  },
  {
    "url": "assets/js/104.e0f14ed4.js",
    "revision": "64fd50ae8161bf819840058fff24a26a"
  },
  {
    "url": "assets/js/105.2386f934.js",
    "revision": "360932d56943e558c2fe0be67c062fa9"
  },
  {
    "url": "assets/js/106.8b416ff5.js",
    "revision": "cc8aea0b051c0623cfaee5ce372560a4"
  },
  {
    "url": "assets/js/107.386f5893.js",
    "revision": "b468f893f83dd198edd328247e230c8a"
  },
  {
    "url": "assets/js/108.28992fd4.js",
    "revision": "b60766e6c9b0e80267f827880b1d41bc"
  },
  {
    "url": "assets/js/109.fab66bc7.js",
    "revision": "c8476c22cc275d2397d6e4d7069d8b22"
  },
  {
    "url": "assets/js/11.0b795e5d.js",
    "revision": "e9a8ad3acc9d8b79bc5b591ca0c8585c"
  },
  {
    "url": "assets/js/110.b3ceb73a.js",
    "revision": "91e730881b3c7508070f0d84efab7ac1"
  },
  {
    "url": "assets/js/111.5c4a544a.js",
    "revision": "402b78400b23e6176811625c154b87fb"
  },
  {
    "url": "assets/js/112.9a2a7ccf.js",
    "revision": "aa8184de8c40f814e3625ec1af1ef791"
  },
  {
    "url": "assets/js/113.9d442bf4.js",
    "revision": "ca6982074e825e39d76d8b6b9a3c7447"
  },
  {
    "url": "assets/js/114.31bc9e4a.js",
    "revision": "d0c71c4c7c8387936f899a11c0bc17d1"
  },
  {
    "url": "assets/js/115.85bbe48b.js",
    "revision": "47d14f9b4d9cd780a53aa7edbfe378d3"
  },
  {
    "url": "assets/js/116.02fd7466.js",
    "revision": "3af829e96ce917db638a4b019d943bef"
  },
  {
    "url": "assets/js/117.8dfe6ce6.js",
    "revision": "99d4e4b8163af3539c925159d44987b2"
  },
  {
    "url": "assets/js/118.ac76f5cd.js",
    "revision": "21b00d80a25c887f676576c9c20df952"
  },
  {
    "url": "assets/js/119.4d2180d7.js",
    "revision": "e016f495b32b2d7148b5532d47096ab0"
  },
  {
    "url": "assets/js/12.92d20551.js",
    "revision": "f996c11e897d63ac16d33cc99d7f4549"
  },
  {
    "url": "assets/js/120.51d6d928.js",
    "revision": "fd7bd609f4b1239d0b34d166f8730df3"
  },
  {
    "url": "assets/js/121.dc07d207.js",
    "revision": "5c1427779b52a1023791428fb5df528f"
  },
  {
    "url": "assets/js/122.daf7e44a.js",
    "revision": "ab8e6f080bc400bdae5b93cc803f782c"
  },
  {
    "url": "assets/js/123.7e23bd9b.js",
    "revision": "adab4c1f62d40a21c75896e39201bcca"
  },
  {
    "url": "assets/js/124.e8d9b2be.js",
    "revision": "08936e63e9953197f1017580b869b519"
  },
  {
    "url": "assets/js/125.e19dfae1.js",
    "revision": "88d9229b518bf29bcaed4c961cc4db36"
  },
  {
    "url": "assets/js/126.7c7e44a2.js",
    "revision": "56e0c3ad59b14ac4d58a492f116db0a4"
  },
  {
    "url": "assets/js/127.4407b9a5.js",
    "revision": "d703d7ca6c9035ff38521c81615e60bf"
  },
  {
    "url": "assets/js/128.7246674e.js",
    "revision": "c226a0c4ffcb956932ab32e75ed72de5"
  },
  {
    "url": "assets/js/129.0f9d4dc3.js",
    "revision": "c2639c72917e16488a9b5397fd3fc08f"
  },
  {
    "url": "assets/js/13.aac361bf.js",
    "revision": "b8f07a41c38755a32a395ebbb72e0a0c"
  },
  {
    "url": "assets/js/130.eabf8c32.js",
    "revision": "48d4283538dbc43cd2cd6e41402d83cc"
  },
  {
    "url": "assets/js/131.87fd1ea7.js",
    "revision": "e6131a387d348701ff97750ee30b5cfc"
  },
  {
    "url": "assets/js/132.93ff51e5.js",
    "revision": "d6d5f23c7d739673d0fe4691351817a8"
  },
  {
    "url": "assets/js/133.0aa4a5df.js",
    "revision": "8b7fc9ea826209b11c986f03cd860997"
  },
  {
    "url": "assets/js/134.adc0a3fc.js",
    "revision": "20c6efc9ad625fab96447a0fc5e1e70e"
  },
  {
    "url": "assets/js/135.a984d06f.js",
    "revision": "9b1860009ffb5d7f8f537e63a658e768"
  },
  {
    "url": "assets/js/136.1282937f.js",
    "revision": "f6ca7645657d8c3301d626dd5e210dba"
  },
  {
    "url": "assets/js/137.b970e5f0.js",
    "revision": "b1b83a1bc8997d6e5648bd6e454465f2"
  },
  {
    "url": "assets/js/138.717ff5ff.js",
    "revision": "792388c7f5ee5feaac12a1ba87aad79e"
  },
  {
    "url": "assets/js/139.931e7da6.js",
    "revision": "a8af6647acb848cfbf1e672f8a55c95a"
  },
  {
    "url": "assets/js/14.18b75006.js",
    "revision": "37d1037bd21256899fd6f1124d59ad86"
  },
  {
    "url": "assets/js/140.6888934a.js",
    "revision": "2852b929974f96bdcebe17e074352e4e"
  },
  {
    "url": "assets/js/141.c2e01aad.js",
    "revision": "e85701b107e52f2fc63b95473f823d9f"
  },
  {
    "url": "assets/js/142.90b8d8ae.js",
    "revision": "1fccb3afd9b56e037d429492b288b38d"
  },
  {
    "url": "assets/js/143.28314549.js",
    "revision": "15efcd0fabfc06109868b568e8afd440"
  },
  {
    "url": "assets/js/144.808174f2.js",
    "revision": "ce99668ea2149fec2706a9c5fb553c29"
  },
  {
    "url": "assets/js/145.2e38c1b7.js",
    "revision": "e68a07bc0feda25a2c3e5c3de58878e0"
  },
  {
    "url": "assets/js/146.121d7137.js",
    "revision": "5f1d1488f15c37447f703e60ae23e1dd"
  },
  {
    "url": "assets/js/147.a007094b.js",
    "revision": "fa717a96447ee36c0f13f5ca6924bf9c"
  },
  {
    "url": "assets/js/148.4ddfdbd0.js",
    "revision": "eda0cb1c243608a807e21b997d79c595"
  },
  {
    "url": "assets/js/149.2fdde0c7.js",
    "revision": "47f9b8f53d05bfc01ec73077beff1528"
  },
  {
    "url": "assets/js/15.7a20a62a.js",
    "revision": "4644fe6eb02bc4160aec73492591d63f"
  },
  {
    "url": "assets/js/150.021cdf6b.js",
    "revision": "7460c020e97fbe9a6e2556a9e57d4f25"
  },
  {
    "url": "assets/js/151.4fc43bce.js",
    "revision": "35cf7eb9ce4fa3c4aa5e59bc3b6fdbe7"
  },
  {
    "url": "assets/js/152.de0b0c8a.js",
    "revision": "f2b2519dcf243d6cdea7a4e92ba078cd"
  },
  {
    "url": "assets/js/153.a8bdcf19.js",
    "revision": "fd02aa3e7ec4d3f0cdd6a36dafff2cfe"
  },
  {
    "url": "assets/js/154.5e8fb6c9.js",
    "revision": "2e72fa5840b1149e815ff0a50f5810f0"
  },
  {
    "url": "assets/js/155.c9ee5bf5.js",
    "revision": "27879283b209a870c0bc1b8dbb018613"
  },
  {
    "url": "assets/js/156.00bb9b4e.js",
    "revision": "b404dfe4e0a50d38f9087942df78aa17"
  },
  {
    "url": "assets/js/157.d25a9375.js",
    "revision": "e809ea497274139073230c8b015cfa26"
  },
  {
    "url": "assets/js/158.0637a50c.js",
    "revision": "d8ba87285d373e2a7c5fca0df2301c3a"
  },
  {
    "url": "assets/js/159.f373f5c3.js",
    "revision": "4d77489901cb61ca0533f6694cb349ba"
  },
  {
    "url": "assets/js/16.7ebccac5.js",
    "revision": "ab4a4c8cb0dd667bd2a8172abffbdf69"
  },
  {
    "url": "assets/js/160.d0511afb.js",
    "revision": "f15e5817e12b67add534452f91105a2b"
  },
  {
    "url": "assets/js/161.afa417e6.js",
    "revision": "eeba88ffe0894cfaa8b5eac745f8c00e"
  },
  {
    "url": "assets/js/162.329bbc23.js",
    "revision": "c71e11b22842c4f0e0618870f2743055"
  },
  {
    "url": "assets/js/163.64f56ea9.js",
    "revision": "36b6c1e4476672866e8cad00fbb50c3e"
  },
  {
    "url": "assets/js/164.09effcc5.js",
    "revision": "ea1c92aef4b49c1b0d3b6aaf6dabbe5f"
  },
  {
    "url": "assets/js/165.0a97bea4.js",
    "revision": "e720e8319e53517a084415bffc0baa92"
  },
  {
    "url": "assets/js/166.215c2167.js",
    "revision": "39aee116cef7f3b1a7b0d52292be9692"
  },
  {
    "url": "assets/js/167.de8fe6dd.js",
    "revision": "4232c847f9702d11fc0c221791b841d1"
  },
  {
    "url": "assets/js/168.389e2db1.js",
    "revision": "03c096db4ea3cedc2b2bf4d2266f4896"
  },
  {
    "url": "assets/js/169.c0011087.js",
    "revision": "913a70cb9d58dd34cc7d32a412bd04c5"
  },
  {
    "url": "assets/js/17.f0763d05.js",
    "revision": "d149d47b74139e1b4176996d138e7ec3"
  },
  {
    "url": "assets/js/170.61ef8979.js",
    "revision": "bd692297d2b00ecd65da6da610562c57"
  },
  {
    "url": "assets/js/171.2c2502a2.js",
    "revision": "1313d3ede02866a2e6ab25f29adb8d9f"
  },
  {
    "url": "assets/js/172.a9b3c62a.js",
    "revision": "f0055d5f59492baade6a6ffe4bdb2f6a"
  },
  {
    "url": "assets/js/173.2d8470c7.js",
    "revision": "2503d0b4e6cfdf69110c63fc41d4d1da"
  },
  {
    "url": "assets/js/174.1df4523c.js",
    "revision": "10ec8244bd6a4beb229f38d18d438935"
  },
  {
    "url": "assets/js/175.25aedd5b.js",
    "revision": "0d6ecabe6ae5d2d110a01a69dd1c20a3"
  },
  {
    "url": "assets/js/176.7b62eeb8.js",
    "revision": "43c5b35d9a34add37da03d1834fce9b2"
  },
  {
    "url": "assets/js/177.70ae8dad.js",
    "revision": "f56566c2ef496290cd2101a7c0743762"
  },
  {
    "url": "assets/js/178.1391f40e.js",
    "revision": "7265fcf82bdc060ec09fe511de5f6806"
  },
  {
    "url": "assets/js/179.bd33f942.js",
    "revision": "0253c7141991259785f07bbd547b916e"
  },
  {
    "url": "assets/js/18.4ae92d1d.js",
    "revision": "132f7742c2ace362ba610c65b35e7b2d"
  },
  {
    "url": "assets/js/180.bc50d980.js",
    "revision": "c79d602a71b0658d7c644c4ebf974f26"
  },
  {
    "url": "assets/js/181.1ac4acf1.js",
    "revision": "91491ceb7175e5b2630470219f22103f"
  },
  {
    "url": "assets/js/182.8901e62b.js",
    "revision": "f1991269880b93fa2259692f86b88029"
  },
  {
    "url": "assets/js/183.e368bc03.js",
    "revision": "edf6bc8717c902ecdc4f80d15fc474ec"
  },
  {
    "url": "assets/js/184.60b75034.js",
    "revision": "7e26ea50f796b0a622e5246390f40035"
  },
  {
    "url": "assets/js/185.2633073a.js",
    "revision": "248064aa42980892a7eaba1e82a3bfc2"
  },
  {
    "url": "assets/js/186.604e85dc.js",
    "revision": "7fc23c9f2d35ba0851832a65f4b49729"
  },
  {
    "url": "assets/js/187.31df5933.js",
    "revision": "2fa42203cb4885dcec09bd6c9bb9ec0b"
  },
  {
    "url": "assets/js/188.1130d950.js",
    "revision": "50a707997bddfc284a303814b6ba4d5b"
  },
  {
    "url": "assets/js/189.ff390420.js",
    "revision": "b07390d98d5626aeec29d385c25f5bc0"
  },
  {
    "url": "assets/js/19.16f83554.js",
    "revision": "9317816628a1ee5e23fa73b093709e1a"
  },
  {
    "url": "assets/js/190.05f542e7.js",
    "revision": "5d31fdc05bcf746867d812b2f6bf41c4"
  },
  {
    "url": "assets/js/191.327e26ef.js",
    "revision": "5616d2cc52356a557cf8658d774c805a"
  },
  {
    "url": "assets/js/192.239bdea0.js",
    "revision": "96fbfee174b57ec581ff0b1419b54453"
  },
  {
    "url": "assets/js/193.343cb7ef.js",
    "revision": "88eb225cd43b74b7865152c71839aef4"
  },
  {
    "url": "assets/js/194.4f4b3954.js",
    "revision": "f73bcace6546540aca6ae2eb79d9595a"
  },
  {
    "url": "assets/js/195.185ad5dd.js",
    "revision": "98dc43fc1f62e60c9df242a6610cdd13"
  },
  {
    "url": "assets/js/196.b18c4bb5.js",
    "revision": "930946855de7b076b7ba07f6b218900b"
  },
  {
    "url": "assets/js/197.a88027c4.js",
    "revision": "68855fe0e43baea0c3bcdc9be263296a"
  },
  {
    "url": "assets/js/198.4e81b7d9.js",
    "revision": "2c8286896b32a1f3896539771e7b67d8"
  },
  {
    "url": "assets/js/199.e414a492.js",
    "revision": "f5745da8783aef4d96b39a65755b0323"
  },
  {
    "url": "assets/js/2.e209e37b.js",
    "revision": "170368eb4e43282510d0913e39504261"
  },
  {
    "url": "assets/js/20.e292f243.js",
    "revision": "67207d3ce77821475674f43844dedbfe"
  },
  {
    "url": "assets/js/200.ad713b07.js",
    "revision": "ac8ac0a281f1c914fbb7538043dfdcd7"
  },
  {
    "url": "assets/js/201.8827d1d0.js",
    "revision": "6f2f4c33e1fc396be6cac71f3eeb6c5e"
  },
  {
    "url": "assets/js/202.db2516e3.js",
    "revision": "c9b4dedb77ed8fc55226e32b99d892af"
  },
  {
    "url": "assets/js/203.1048036c.js",
    "revision": "3575f9edd96fa73d1a3106a235bb56b8"
  },
  {
    "url": "assets/js/204.b7a063eb.js",
    "revision": "7b537b976d97d2a2444fef20e6e78c22"
  },
  {
    "url": "assets/js/205.89257aa5.js",
    "revision": "3d52bf65d3d7f872d05b133e680ab444"
  },
  {
    "url": "assets/js/206.1badcccb.js",
    "revision": "c60079c89be1c03b3fba522cd398c4c5"
  },
  {
    "url": "assets/js/207.9dd981c5.js",
    "revision": "e8abb09f9e9c1827066a625a830b4125"
  },
  {
    "url": "assets/js/208.48ea3001.js",
    "revision": "80749f5945cd5781df711d6557a5ded4"
  },
  {
    "url": "assets/js/209.05fd7017.js",
    "revision": "2e860107b404a110a2aac9f6ca382848"
  },
  {
    "url": "assets/js/21.4d00e250.js",
    "revision": "75e60530b1d9e0a84a9a6e3daf352174"
  },
  {
    "url": "assets/js/210.9839a956.js",
    "revision": "64863a417ba548bcf6a935a87184d74b"
  },
  {
    "url": "assets/js/211.e71c8334.js",
    "revision": "3539fb80aa0bedb31e60c2b14a838681"
  },
  {
    "url": "assets/js/212.e1d81de9.js",
    "revision": "925dc3454a1c219d466f6830119ee496"
  },
  {
    "url": "assets/js/213.cabe2268.js",
    "revision": "8fa772430c1178ef4d17ff03fa222ed4"
  },
  {
    "url": "assets/js/214.e0d6e55b.js",
    "revision": "640448de232397322d64b3e07ffc2b1e"
  },
  {
    "url": "assets/js/215.e1c6563b.js",
    "revision": "e7453c5554df44b1062e8e015f26202f"
  },
  {
    "url": "assets/js/216.99e2d7b2.js",
    "revision": "ea2642e389c67e8e07fc95c22adb55d6"
  },
  {
    "url": "assets/js/217.baa443bc.js",
    "revision": "59daa646d5fcb9c1237cd9b4aa4ca045"
  },
  {
    "url": "assets/js/218.4b52a900.js",
    "revision": "153bf46035aa82df5a81361ee1a493ac"
  },
  {
    "url": "assets/js/219.1326f37b.js",
    "revision": "00879165963bf3181939abffdcdf5473"
  },
  {
    "url": "assets/js/22.5fc9a9ae.js",
    "revision": "7b8e385745cea87299ae830119d8b9a8"
  },
  {
    "url": "assets/js/220.1c616df7.js",
    "revision": "63e84e2120e9b207f09c465e79c3082f"
  },
  {
    "url": "assets/js/221.0153c31d.js",
    "revision": "93b933da5b12fc245a7eaab98f06c9bd"
  },
  {
    "url": "assets/js/222.6abc0703.js",
    "revision": "4780d8323717a51110e5888915128098"
  },
  {
    "url": "assets/js/223.31e68715.js",
    "revision": "c28edf46afca4069d083c35133bdc119"
  },
  {
    "url": "assets/js/224.d0109530.js",
    "revision": "987fb7294a3e5d1d09d6320adad8636f"
  },
  {
    "url": "assets/js/225.7ed9f1dc.js",
    "revision": "cc6934f00b8e322880ab08e363f72db1"
  },
  {
    "url": "assets/js/226.a7c642ab.js",
    "revision": "714273ca196684727f06970fcb09da1d"
  },
  {
    "url": "assets/js/227.e11c26f4.js",
    "revision": "b6c48dbc092a3df942bb37313f40696a"
  },
  {
    "url": "assets/js/228.c1ff4230.js",
    "revision": "d3f8bd276cc22f1a828a20d599ee9d2d"
  },
  {
    "url": "assets/js/229.ce20ab9d.js",
    "revision": "c07f53b085e4b491d4e4632d0947c858"
  },
  {
    "url": "assets/js/23.5f31bcd4.js",
    "revision": "67c89f3c6500466117451a8d054feed1"
  },
  {
    "url": "assets/js/230.f4e3a24e.js",
    "revision": "52cb7f96df005cd916335dff664f3d91"
  },
  {
    "url": "assets/js/231.7c075774.js",
    "revision": "a7e91d57b2adcf2255164ce35b45c3c2"
  },
  {
    "url": "assets/js/232.27911579.js",
    "revision": "2b78c86858536b85270eaf08a350d9f5"
  },
  {
    "url": "assets/js/233.b81274ed.js",
    "revision": "fccb8a50d8fa77d9f26ba311a822d6a3"
  },
  {
    "url": "assets/js/234.a99eec4a.js",
    "revision": "8d895cf79dc1c2b7ffaeee8a46ed5afe"
  },
  {
    "url": "assets/js/235.a134cb90.js",
    "revision": "0356071936ae0eb2cc14ec5adef67af1"
  },
  {
    "url": "assets/js/236.ec4d2eef.js",
    "revision": "c7555d080a1a647513cf2b3f944fdb44"
  },
  {
    "url": "assets/js/237.30ce3b6d.js",
    "revision": "942c02c96d8685edd29addcd3bacfea7"
  },
  {
    "url": "assets/js/238.cf3a2bee.js",
    "revision": "138f92d05de34dff7ec2b1a6d0e89bc5"
  },
  {
    "url": "assets/js/239.aff55b89.js",
    "revision": "3aae95221aa61167e3ec4d4a395b8feb"
  },
  {
    "url": "assets/js/24.62c6af5e.js",
    "revision": "7fcd67aaf5d446544f51e68bfb9a0cf6"
  },
  {
    "url": "assets/js/240.f2389dd4.js",
    "revision": "5b64a6ac6b793a6b37275641cefcb363"
  },
  {
    "url": "assets/js/241.9842e3fc.js",
    "revision": "eed27a54d23ffd46078fd9753f4c8bc7"
  },
  {
    "url": "assets/js/242.fc586ae7.js",
    "revision": "f10405a3ff4ed81da0a53323555a5ea5"
  },
  {
    "url": "assets/js/243.b137f24b.js",
    "revision": "8c30e801e062392b8d02c57ae4dc9195"
  },
  {
    "url": "assets/js/244.52fb5444.js",
    "revision": "2ab29c20b753126a6f36382657085aab"
  },
  {
    "url": "assets/js/245.67fe40e8.js",
    "revision": "f81130819effedbdab25709d22435bac"
  },
  {
    "url": "assets/js/246.6f36389b.js",
    "revision": "a224e555e43598b35b43322b4924ae17"
  },
  {
    "url": "assets/js/247.5fd43d63.js",
    "revision": "a9826442ca7d5e02713f37d217e1da2b"
  },
  {
    "url": "assets/js/248.7a3637e5.js",
    "revision": "cad373f96b7fa6ded04be50392c6c956"
  },
  {
    "url": "assets/js/249.727be8ad.js",
    "revision": "48c625d15ec92631bb3779dd4d9db6eb"
  },
  {
    "url": "assets/js/25.79e4c073.js",
    "revision": "77938acf727a50660250289a50dd6ac0"
  },
  {
    "url": "assets/js/250.75b47944.js",
    "revision": "8378a90f0aed1016cc22800f3f92544b"
  },
  {
    "url": "assets/js/251.e28cc5dc.js",
    "revision": "c16e9f6e1b21879a3e287bf53426cbdf"
  },
  {
    "url": "assets/js/252.f061b77d.js",
    "revision": "3857f497f95f4e3ead1c6ca429ff87f4"
  },
  {
    "url": "assets/js/253.a927cf86.js",
    "revision": "f9011207609c5a0819e49ed39ff68c9a"
  },
  {
    "url": "assets/js/254.bbef8da8.js",
    "revision": "6f5be7e00f473613362b2a970f66e8e7"
  },
  {
    "url": "assets/js/255.8bc57f78.js",
    "revision": "985cb17fbca1d88ddf210ef8e14a9694"
  },
  {
    "url": "assets/js/256.5d2431bf.js",
    "revision": "11f67c4b0368c18a3a9c45f8c97e5159"
  },
  {
    "url": "assets/js/257.20e8d01d.js",
    "revision": "82ca01dd73ed4b1a9b842dd665cd9096"
  },
  {
    "url": "assets/js/258.8c5bb15b.js",
    "revision": "e4e1e384b4fdd221961864e7943e39e0"
  },
  {
    "url": "assets/js/259.7ad9ad21.js",
    "revision": "bcb1c71767743912b50c0aba8255022c"
  },
  {
    "url": "assets/js/26.fe5c140a.js",
    "revision": "16b01ecdecd9f9d05de63d5aa45fc3db"
  },
  {
    "url": "assets/js/260.9a46c6d8.js",
    "revision": "0e32860148fa9301a2563457e504722c"
  },
  {
    "url": "assets/js/261.0bbe9366.js",
    "revision": "068babfc6afcfdd16fe4dfbe3ea2cea9"
  },
  {
    "url": "assets/js/262.a6df95c3.js",
    "revision": "4b60b24b1e3dc0c525b667e33f0b6c27"
  },
  {
    "url": "assets/js/263.0e0f990f.js",
    "revision": "e2570d71794fa156abbe9a2c7d25a94a"
  },
  {
    "url": "assets/js/264.0915ef9f.js",
    "revision": "1f80ac81a8276d8e331335ab26463862"
  },
  {
    "url": "assets/js/265.5a05767e.js",
    "revision": "4fcc8b1c1c6dc639075811c857f1665d"
  },
  {
    "url": "assets/js/266.23397b6f.js",
    "revision": "3d946e3d17dbc83fc0b5b97063d01473"
  },
  {
    "url": "assets/js/267.2e4742bc.js",
    "revision": "70b8b5b349f325e15f257de36cb702a3"
  },
  {
    "url": "assets/js/268.1284ab42.js",
    "revision": "a4cfd038d1948766ebc50d236744a7b1"
  },
  {
    "url": "assets/js/269.973e8693.js",
    "revision": "2de7f1115d228d70ad2c2b64957c64a0"
  },
  {
    "url": "assets/js/27.48cfe5a7.js",
    "revision": "3bff1c1a1d5a7ae7376e8f98479fd45d"
  },
  {
    "url": "assets/js/270.ecdea1da.js",
    "revision": "26914ed392f13a1d261b49d5acd8d9e3"
  },
  {
    "url": "assets/js/271.661c5595.js",
    "revision": "4fed87af258678493eb954e5761f5845"
  },
  {
    "url": "assets/js/272.ae6801a0.js",
    "revision": "66240a3df04a8a2ccea1c9159da0cb47"
  },
  {
    "url": "assets/js/273.366031fb.js",
    "revision": "9583b8ab4f0458aff31175f4d377ef61"
  },
  {
    "url": "assets/js/274.c5749876.js",
    "revision": "637512254313569e7b9fc30765af51ab"
  },
  {
    "url": "assets/js/275.18cc6162.js",
    "revision": "072e3551d8c0750e159ee86db8950454"
  },
  {
    "url": "assets/js/276.89a56d8f.js",
    "revision": "f482bba4d6757c3b9bbe212d9437e635"
  },
  {
    "url": "assets/js/277.09cb47e2.js",
    "revision": "596797c4384a1291540a58525445e933"
  },
  {
    "url": "assets/js/278.d7416619.js",
    "revision": "38eaecf35525e35b44b8d596cfc35c33"
  },
  {
    "url": "assets/js/279.92fb1c76.js",
    "revision": "f60b675cfbbd6ec1b779214751fe0b91"
  },
  {
    "url": "assets/js/28.6fa4b86e.js",
    "revision": "e0166ae9f58cdda87f68e5c6e6b84071"
  },
  {
    "url": "assets/js/280.9d94c874.js",
    "revision": "3693f9f42760f397f63b6ceb2fbc2e5e"
  },
  {
    "url": "assets/js/281.2b8b8fd9.js",
    "revision": "76e10d896e0d593bb67f8f039e54e689"
  },
  {
    "url": "assets/js/282.6b784d21.js",
    "revision": "1317f842a93e038db3681cc8f57b56c9"
  },
  {
    "url": "assets/js/283.1982b6a9.js",
    "revision": "7fc6658ed193ba7f61cd35333cb51ae5"
  },
  {
    "url": "assets/js/284.c227ca57.js",
    "revision": "159a0c42e4f9aa039c4b18627dcdfc78"
  },
  {
    "url": "assets/js/285.6f78e95d.js",
    "revision": "856dca66aac2d5d351f38ad10a326511"
  },
  {
    "url": "assets/js/286.8ab9e394.js",
    "revision": "c85790479573b99cea74ae749279c0a5"
  },
  {
    "url": "assets/js/287.45e02cdb.js",
    "revision": "6bd550d2ef6320311d5304fd8a85cc4d"
  },
  {
    "url": "assets/js/288.320ca463.js",
    "revision": "39a9bff9502ad78b99266fdb70d09fd0"
  },
  {
    "url": "assets/js/289.1477b425.js",
    "revision": "b8dedcdb6803dd0a8c80dbe27c360dd9"
  },
  {
    "url": "assets/js/29.bf659644.js",
    "revision": "2d5a5734a30029191a6b03e514d606f7"
  },
  {
    "url": "assets/js/290.51279a6d.js",
    "revision": "fc0ac4700192e517f6f158c8684b1e78"
  },
  {
    "url": "assets/js/291.4a53c2c5.js",
    "revision": "efc2c835cea8f4d71a87e767d643bfa2"
  },
  {
    "url": "assets/js/292.8296f9ac.js",
    "revision": "f8b7dee1852ea4f07694f13aaafc9186"
  },
  {
    "url": "assets/js/293.fec3192f.js",
    "revision": "025503f9f68d57dfd3cd93a03d68b0d1"
  },
  {
    "url": "assets/js/294.cee9d8a1.js",
    "revision": "3bbb5a23841b390debd27027bf343e37"
  },
  {
    "url": "assets/js/295.cf571c4b.js",
    "revision": "dff7d4013625e217942c8687cb665291"
  },
  {
    "url": "assets/js/296.48147f77.js",
    "revision": "e2841129d2943a20565ac4efefccb4ad"
  },
  {
    "url": "assets/js/297.aef2daf2.js",
    "revision": "0a3661c4f88392dfb39e03feb1280713"
  },
  {
    "url": "assets/js/298.67e4bf79.js",
    "revision": "749afc613e660d41b57fdd49e7f3069a"
  },
  {
    "url": "assets/js/299.6c4877a6.js",
    "revision": "d3c32b4ccd1c8ff71a13a54d90050203"
  },
  {
    "url": "assets/js/3.a52f58e0.js",
    "revision": "91c282d620350538c59e700c928192c2"
  },
  {
    "url": "assets/js/30.76789db8.js",
    "revision": "37cfbc976546b9c7503b0436fbe2b8db"
  },
  {
    "url": "assets/js/300.ada21e86.js",
    "revision": "f1ea5b93a448a5ef868f80627793102a"
  },
  {
    "url": "assets/js/301.07a4d65b.js",
    "revision": "18c05e9e1d4976c0380d224399402e4c"
  },
  {
    "url": "assets/js/302.dac01a78.js",
    "revision": "f2a21fcc0efae55400077ca9d5116bc2"
  },
  {
    "url": "assets/js/303.c2f91b98.js",
    "revision": "d5ed5a33898cd02bda89e7645ee7473f"
  },
  {
    "url": "assets/js/304.1f5de8ca.js",
    "revision": "c3b778860a74716744d2ecad1079410e"
  },
  {
    "url": "assets/js/305.d8216a68.js",
    "revision": "5e20e4b7b36d4924f0bddafd26cac5bc"
  },
  {
    "url": "assets/js/306.1eb7c8a0.js",
    "revision": "f5a7a51d27763b6e84468175d29eecee"
  },
  {
    "url": "assets/js/307.287b57fa.js",
    "revision": "4af88cbf4135a9f7feff3b90d07a71bb"
  },
  {
    "url": "assets/js/308.9119e1fa.js",
    "revision": "91aaba6c8594dcaa10e6621985663cd9"
  },
  {
    "url": "assets/js/309.9141e058.js",
    "revision": "a811722630afba0dfa9232ee210ea2d3"
  },
  {
    "url": "assets/js/31.e75d51e0.js",
    "revision": "3fc7442d93237624e9819666fb408728"
  },
  {
    "url": "assets/js/310.66f6ad60.js",
    "revision": "be1a0633aebeab227c9ad8c1dd7d7292"
  },
  {
    "url": "assets/js/311.5ea4bd89.js",
    "revision": "843926b3dfcc63486d91a13476fd6491"
  },
  {
    "url": "assets/js/312.dc1fa3ed.js",
    "revision": "2220ee6278eb99776f6e8b6932d07446"
  },
  {
    "url": "assets/js/313.a67ce95f.js",
    "revision": "8f0d86088d28e39b99b0c708fbf8fb21"
  },
  {
    "url": "assets/js/314.399bbfb2.js",
    "revision": "22262a0874381e15c7cab2274f9bb074"
  },
  {
    "url": "assets/js/315.d321a7c8.js",
    "revision": "922c25b413f4ceab5db3990c2deb8d53"
  },
  {
    "url": "assets/js/316.813c51c4.js",
    "revision": "afcccca52f7f00a7ff3fb55298301ce2"
  },
  {
    "url": "assets/js/317.35cbf00f.js",
    "revision": "f7a2b0607f1d5302e7ab5340535e20eb"
  },
  {
    "url": "assets/js/318.d1410a71.js",
    "revision": "a58439bb12fb82bd8a446914294204f1"
  },
  {
    "url": "assets/js/319.1646d350.js",
    "revision": "c3773875f48eb5baf6f58984dfd5a35f"
  },
  {
    "url": "assets/js/32.336b09f2.js",
    "revision": "243a701c9df9c9697b6c36d83d321267"
  },
  {
    "url": "assets/js/320.84493c6b.js",
    "revision": "322f28f97aa90b79445dcaaa6310b1a5"
  },
  {
    "url": "assets/js/321.2f14b3e9.js",
    "revision": "be340a6270e7f96b5df2f905ed7046a7"
  },
  {
    "url": "assets/js/322.e66c1075.js",
    "revision": "6a4d36bdb3507db18d15a9915379cf83"
  },
  {
    "url": "assets/js/323.223c7b0a.js",
    "revision": "a7fc4a7dc4cceba241ef97b7ed150cd4"
  },
  {
    "url": "assets/js/324.350db766.js",
    "revision": "f9677a2a096521735a6e8d9d1972bf2c"
  },
  {
    "url": "assets/js/325.75143169.js",
    "revision": "3dd1e98ae0fac46d5de39edfd862e716"
  },
  {
    "url": "assets/js/326.ea13819c.js",
    "revision": "f7b1bb54389d9329e13b4a44179029ef"
  },
  {
    "url": "assets/js/327.501e2a79.js",
    "revision": "e76ab6daa229e76283d8e57460901a0b"
  },
  {
    "url": "assets/js/328.a74e0e49.js",
    "revision": "caaa2fb4ac0dae478c8fcc5080bd9601"
  },
  {
    "url": "assets/js/329.528a20ee.js",
    "revision": "697284eb125f5e75b196f83581577c72"
  },
  {
    "url": "assets/js/33.d56a26f4.js",
    "revision": "33aac28e4b2b59e413abe25f74c9f223"
  },
  {
    "url": "assets/js/330.219c1666.js",
    "revision": "cafb59c323ab2e9d09b0104beaf5f585"
  },
  {
    "url": "assets/js/331.47423642.js",
    "revision": "9b5b99d34e2ba9e5953737461cf25bdd"
  },
  {
    "url": "assets/js/332.27a2dc9a.js",
    "revision": "68c724fe4a90d05ee3673d2c707ca1e6"
  },
  {
    "url": "assets/js/333.762f0dfe.js",
    "revision": "9f6759a191bed50ab6844aa3315eb895"
  },
  {
    "url": "assets/js/334.baacf54b.js",
    "revision": "62de9a90d34e7013be27930af730d165"
  },
  {
    "url": "assets/js/335.b13ad03f.js",
    "revision": "c76df5b588e5deedd88813a95b619ea9"
  },
  {
    "url": "assets/js/336.be7ba8fa.js",
    "revision": "9b8a18a6e3b4434f7ec5e7417fa6a1ce"
  },
  {
    "url": "assets/js/337.a82f5b99.js",
    "revision": "41f41c1ca4a018489b537d631f504408"
  },
  {
    "url": "assets/js/338.bfaccba2.js",
    "revision": "35859276c2e399e173683cdb1d0d9a9e"
  },
  {
    "url": "assets/js/339.85153e70.js",
    "revision": "fcc5f5a9245142a95311b44775031bf5"
  },
  {
    "url": "assets/js/34.d7a817c8.js",
    "revision": "d1fa5630f08fc567c760acd82073a105"
  },
  {
    "url": "assets/js/340.269e55cd.js",
    "revision": "ffcf8053a64fa87a446f717c31b84b80"
  },
  {
    "url": "assets/js/341.8e5b9e6f.js",
    "revision": "4b324fb5d8443ff328a7ec80387a3d42"
  },
  {
    "url": "assets/js/342.cf8d35d3.js",
    "revision": "1fc4630cb506823de928bad680c3e5ad"
  },
  {
    "url": "assets/js/343.689f3df7.js",
    "revision": "dc376188ea431a7a3918cb52980ae593"
  },
  {
    "url": "assets/js/344.c73f0f41.js",
    "revision": "877dd83165ccf1caed0928c2d4b13609"
  },
  {
    "url": "assets/js/345.37c71400.js",
    "revision": "9dcd01a09f10e64fc9b64aab3e4c3645"
  },
  {
    "url": "assets/js/346.1cdb3e3b.js",
    "revision": "d06cbde81946fd4a77c7ba30d3b12987"
  },
  {
    "url": "assets/js/347.97a18975.js",
    "revision": "86bfab4d28d879fdadb0310895505b29"
  },
  {
    "url": "assets/js/348.403300e5.js",
    "revision": "9993f64b7b541882d621fdb787159b5a"
  },
  {
    "url": "assets/js/349.037b98c3.js",
    "revision": "59e3bd1e74e3d80035799fce91a162c0"
  },
  {
    "url": "assets/js/35.04547d08.js",
    "revision": "19710efa0fac1805ad2a04acca02b200"
  },
  {
    "url": "assets/js/350.3659887f.js",
    "revision": "00156da8148103d54121bcb024672dbb"
  },
  {
    "url": "assets/js/351.54009fbb.js",
    "revision": "b13d0e948d8c539cb2e6cb944098f14b"
  },
  {
    "url": "assets/js/352.9292cc6f.js",
    "revision": "42786d54ef5fc27fa1280b79ff57904d"
  },
  {
    "url": "assets/js/353.d133af54.js",
    "revision": "eb3a5eb7d90c6f25b28e58ff839802a0"
  },
  {
    "url": "assets/js/354.26b741b4.js",
    "revision": "dc52a04f3c5882a73a54f258d7a7ab8b"
  },
  {
    "url": "assets/js/355.99a0ce59.js",
    "revision": "5abf51a8211c5caf968870dea9bf8f69"
  },
  {
    "url": "assets/js/356.a4ece7c2.js",
    "revision": "53b65b23f7307f270d1d0ad934ad3d76"
  },
  {
    "url": "assets/js/357.5132438d.js",
    "revision": "91f55cdf187a99ac45a7f504a556ee2c"
  },
  {
    "url": "assets/js/358.ebef42a5.js",
    "revision": "d0d35abcc7ebffbecaa7ffe1ebac9942"
  },
  {
    "url": "assets/js/359.b1de9cc9.js",
    "revision": "f9878782dc32c3b216510ed491d8aefa"
  },
  {
    "url": "assets/js/36.49ac719c.js",
    "revision": "18c714b3c4001c38bae460bc8a7f581f"
  },
  {
    "url": "assets/js/360.2ed97ea9.js",
    "revision": "c208a59686fdf87ae00beeea2f9d5aee"
  },
  {
    "url": "assets/js/361.1ee556df.js",
    "revision": "eda57fd03a4a0fb3f161e1741e7252cd"
  },
  {
    "url": "assets/js/362.367db1e8.js",
    "revision": "782d46f6a12280230755661a28ca7cd4"
  },
  {
    "url": "assets/js/363.d0ecda51.js",
    "revision": "116cb062b2379c149fb24578b0a39371"
  },
  {
    "url": "assets/js/364.5f14ce6c.js",
    "revision": "c2787a64528e4da119965e99a539a998"
  },
  {
    "url": "assets/js/365.1f82aad8.js",
    "revision": "8f531c75ac0a5b55eb8db235d38cef68"
  },
  {
    "url": "assets/js/366.2b65c83a.js",
    "revision": "af0452d501eeb049a6601ba9cef9d897"
  },
  {
    "url": "assets/js/367.9772f5aa.js",
    "revision": "b62979ad4b84469a8bfd9a851a040f3b"
  },
  {
    "url": "assets/js/368.4f4d9116.js",
    "revision": "1f320a7d2d999a58a73bdd6ecf2d2b77"
  },
  {
    "url": "assets/js/369.63a5a2b7.js",
    "revision": "a7fbba50842111da92414a64613eec24"
  },
  {
    "url": "assets/js/37.72df7e4f.js",
    "revision": "7139b467027a6eb7029bcbb94489ad98"
  },
  {
    "url": "assets/js/370.865b8ca6.js",
    "revision": "b919679bfbfc180d980a2a8e18f600c5"
  },
  {
    "url": "assets/js/371.09cf7d08.js",
    "revision": "74603f95c932620769c18fd018ee17a1"
  },
  {
    "url": "assets/js/372.c31286e8.js",
    "revision": "c81a8a140647f1405eeabed575195d19"
  },
  {
    "url": "assets/js/373.1da49122.js",
    "revision": "6a16b07adc54b3e8171e138d0131b5b3"
  },
  {
    "url": "assets/js/374.5104cf89.js",
    "revision": "165e1bf6d2fec5d20391ae47325e7e66"
  },
  {
    "url": "assets/js/375.16960229.js",
    "revision": "4d9c20471930e9b4d4caffa8f350e3f5"
  },
  {
    "url": "assets/js/376.0b93bdd0.js",
    "revision": "b2f97c6d0d9d0031f9efab2591642883"
  },
  {
    "url": "assets/js/377.ebb9f131.js",
    "revision": "f4d05ff62e5dc5a19a8edc2d5400272f"
  },
  {
    "url": "assets/js/378.ee1549b1.js",
    "revision": "de70640cc18473bd840947ce34aee2c2"
  },
  {
    "url": "assets/js/379.75ab4eb4.js",
    "revision": "97274ff08ef6cdc7546eed11111075d0"
  },
  {
    "url": "assets/js/38.fac7adfb.js",
    "revision": "52801fc4fc8d8b704a403e5a34020a37"
  },
  {
    "url": "assets/js/380.8f3751b2.js",
    "revision": "5c42d576516dcb710ceb3d6a7997077c"
  },
  {
    "url": "assets/js/381.40248a14.js",
    "revision": "ae11ecd45c8c1530168f5f6ec7d87823"
  },
  {
    "url": "assets/js/382.ab4f4fab.js",
    "revision": "9192e995d9174996aca1b0ff556d7c27"
  },
  {
    "url": "assets/js/383.bbc8c39e.js",
    "revision": "d7a54150a65f48974ac9c1df02600c1a"
  },
  {
    "url": "assets/js/384.519e694a.js",
    "revision": "7c23236979324b1f739289cc473e6b61"
  },
  {
    "url": "assets/js/385.46498b97.js",
    "revision": "09a48529e539db04683b4b2bb537bbaf"
  },
  {
    "url": "assets/js/386.c4af0fa8.js",
    "revision": "9c2a3ba148bce60e48b30aab8e6f86b5"
  },
  {
    "url": "assets/js/387.e1e5b340.js",
    "revision": "f611fd5908494c590c3a1433f591ce71"
  },
  {
    "url": "assets/js/388.66fc7498.js",
    "revision": "4aa72b35aadcd9cb3aedb66dee61529c"
  },
  {
    "url": "assets/js/389.6c501361.js",
    "revision": "2645ff38678ecb0bf22ed1e6e44830b4"
  },
  {
    "url": "assets/js/39.ffae0b2c.js",
    "revision": "4cd70f28ec605a49d94e936e2bb209f9"
  },
  {
    "url": "assets/js/390.9b767a26.js",
    "revision": "58be0a9febd298b744da2fb5e4bd59fd"
  },
  {
    "url": "assets/js/391.e433d78d.js",
    "revision": "925cfb321d2dce32a507752d4e210491"
  },
  {
    "url": "assets/js/392.c111334a.js",
    "revision": "ffa178ce449063386d33818434bfa25c"
  },
  {
    "url": "assets/js/393.302d791d.js",
    "revision": "eef571187769a25353fded5d62fe5e8e"
  },
  {
    "url": "assets/js/394.0b9f4e4c.js",
    "revision": "b4f6b4dd1664433164d4b39d3cc5d66c"
  },
  {
    "url": "assets/js/395.cfb2bf4e.js",
    "revision": "44c33ac25830eeb2543705a9435b277f"
  },
  {
    "url": "assets/js/396.2cec8639.js",
    "revision": "a2eeb3caf95c0aec974cb45f160490e0"
  },
  {
    "url": "assets/js/397.77227c6b.js",
    "revision": "6ec4ee02b64f93035782d97c418cab77"
  },
  {
    "url": "assets/js/398.acd5114a.js",
    "revision": "4578bf89a52fb9f80fbee5c96ae3a704"
  },
  {
    "url": "assets/js/399.f311fa33.js",
    "revision": "48ba56b8c2683ab9d34bab7271390b94"
  },
  {
    "url": "assets/js/4.678de952.js",
    "revision": "27663f79a6b509c89db63eeda0c9ffe7"
  },
  {
    "url": "assets/js/40.980e4ba4.js",
    "revision": "3d1e6476d2d9f3615fef14f586806d22"
  },
  {
    "url": "assets/js/400.04256dc8.js",
    "revision": "50aea1136d5257727c0afe3e7df82aad"
  },
  {
    "url": "assets/js/401.08cfddf3.js",
    "revision": "80721498d694620155153f4760bbe6f6"
  },
  {
    "url": "assets/js/402.ae626503.js",
    "revision": "9883f9db787fedfc8d0649364c74da18"
  },
  {
    "url": "assets/js/403.3f2240e3.js",
    "revision": "81f6c43db60ff97da2a34226a7174d69"
  },
  {
    "url": "assets/js/404.3b17fa1b.js",
    "revision": "5342777ec9c2563992c6c3ea344debbe"
  },
  {
    "url": "assets/js/405.e411b2b5.js",
    "revision": "827ff970cc6c6c3c04bc3e016eea55a4"
  },
  {
    "url": "assets/js/406.2277668f.js",
    "revision": "fe117e18b66f835bb028f6c3201c504a"
  },
  {
    "url": "assets/js/407.9235a0a1.js",
    "revision": "af8df8a0a63d7c3870f2d4aa2922bb15"
  },
  {
    "url": "assets/js/408.9dc81589.js",
    "revision": "b80634f60cb48607b05073764ebb5c10"
  },
  {
    "url": "assets/js/409.5561ac93.js",
    "revision": "4fccadf01357546937f036e644219d2e"
  },
  {
    "url": "assets/js/41.f3edb246.js",
    "revision": "877bfc3354721efd72ee345f9df9e001"
  },
  {
    "url": "assets/js/410.92ad1089.js",
    "revision": "6d03e4b190ebae9dc4239a45f36da342"
  },
  {
    "url": "assets/js/42.34052d65.js",
    "revision": "5b538014ae22686c95fcaf119dce5488"
  },
  {
    "url": "assets/js/43.4efb4f70.js",
    "revision": "7b2e8fb0abe74ce2af7689411d32eae8"
  },
  {
    "url": "assets/js/44.1fa24b1b.js",
    "revision": "8dbccaa827dd2ced15a0bd84b1dc7dda"
  },
  {
    "url": "assets/js/45.a758fde8.js",
    "revision": "a19b7f9c2da1870aac6ebe9955e1f535"
  },
  {
    "url": "assets/js/46.486e6103.js",
    "revision": "1e5a242a5c3db74215e70bebb1dc2493"
  },
  {
    "url": "assets/js/47.d0ae2110.js",
    "revision": "7c814aac65b90c6b4770aca22b0ccc65"
  },
  {
    "url": "assets/js/48.b7a9513f.js",
    "revision": "af5bc7353519def47d7b1bc77d4f832e"
  },
  {
    "url": "assets/js/49.a5d10477.js",
    "revision": "4863e81d3b1ea6304e3bd0221bb0dab3"
  },
  {
    "url": "assets/js/5.0fd143cf.js",
    "revision": "aa187cedb9c2183b186b23518adc322d"
  },
  {
    "url": "assets/js/50.dcd2fce7.js",
    "revision": "9b3edeb94e5cf42a5196a4158023f3f3"
  },
  {
    "url": "assets/js/51.252531bd.js",
    "revision": "4ffee77f8d295575aeb0d000de49a92e"
  },
  {
    "url": "assets/js/52.25fbb0cb.js",
    "revision": "688b7fa807ae09fe4e2766a185b6634f"
  },
  {
    "url": "assets/js/53.3905d893.js",
    "revision": "4c5bcafd0f9a2f51f54a2e41205c6021"
  },
  {
    "url": "assets/js/54.c9973893.js",
    "revision": "bb08d658ef2978355d97d3bf9b1fd756"
  },
  {
    "url": "assets/js/55.de2280cc.js",
    "revision": "e627c8cc9f16e5d3533377862e135577"
  },
  {
    "url": "assets/js/56.950236b9.js",
    "revision": "a41d267246afe8c0b7a00ae59f18817c"
  },
  {
    "url": "assets/js/57.39b3dd69.js",
    "revision": "e65c6a3f8b05e6d104e0001ad8b12ea5"
  },
  {
    "url": "assets/js/58.ef1cfce6.js",
    "revision": "a9a64d0a48accaae21156300469e635c"
  },
  {
    "url": "assets/js/59.6d3851c3.js",
    "revision": "84bcc9eae9f5f36186a13df8700b2bfa"
  },
  {
    "url": "assets/js/60.82c34ae9.js",
    "revision": "2dc1cea54fbbbcdbe2e484c4a59c61c0"
  },
  {
    "url": "assets/js/61.996e250a.js",
    "revision": "c3da432df568c68dbc0bad74c668dc03"
  },
  {
    "url": "assets/js/62.e33ae37d.js",
    "revision": "10caeccb7d4e605770375461ffe3801e"
  },
  {
    "url": "assets/js/63.b5bd1882.js",
    "revision": "3b0a97896a33f965bfc3b84b7dbc47f5"
  },
  {
    "url": "assets/js/64.87567f35.js",
    "revision": "1ce828ca28d2d506f510ceda42714ffd"
  },
  {
    "url": "assets/js/65.edbb6f1b.js",
    "revision": "15d4f98e26d1d5e4994b47263000acf6"
  },
  {
    "url": "assets/js/66.fb6605f2.js",
    "revision": "9912671657bed19a1af1a9d58cdd1dee"
  },
  {
    "url": "assets/js/67.6a67632d.js",
    "revision": "7b2b1f3cb54b0655a19afd5a31cc8adf"
  },
  {
    "url": "assets/js/68.9ec74ed0.js",
    "revision": "d15c7302c29422c975c35b3a5297aa40"
  },
  {
    "url": "assets/js/69.59213fc5.js",
    "revision": "98bc1d0e739a123b75dde9a1d44e48c0"
  },
  {
    "url": "assets/js/70.1e567499.js",
    "revision": "86da069b31bae33f5a4eff6622e63b13"
  },
  {
    "url": "assets/js/71.185d17ef.js",
    "revision": "d4761811d91cb1b454fae742331bca07"
  },
  {
    "url": "assets/js/72.716d16d0.js",
    "revision": "8b65b68a8c0d1db5301b62c9a6ffa86e"
  },
  {
    "url": "assets/js/73.d64eabdf.js",
    "revision": "7f5936d2b9793f915a0a451fa4589675"
  },
  {
    "url": "assets/js/74.0e085422.js",
    "revision": "52ec10122b5b56adc63d67ada7f5f12c"
  },
  {
    "url": "assets/js/75.0b4786f8.js",
    "revision": "12f2eb5df2caa07f39a8c04ff8c81e2e"
  },
  {
    "url": "assets/js/76.ad580534.js",
    "revision": "e91eda772d167f7258a8b557ef0c93fa"
  },
  {
    "url": "assets/js/77.e58e3f33.js",
    "revision": "a67feadf8e5e08ba0fef1ba59564869c"
  },
  {
    "url": "assets/js/78.cb601788.js",
    "revision": "27a511e0dce02d753f175764024e99c2"
  },
  {
    "url": "assets/js/79.a40d57f8.js",
    "revision": "9650be0164666865e724c01c7f9dbbcc"
  },
  {
    "url": "assets/js/8.94aecf24.js",
    "revision": "f947ade354e6303a666af31eb790969b"
  },
  {
    "url": "assets/js/80.c6bf56b2.js",
    "revision": "b7ea06926973d1fc81f7884703655d9a"
  },
  {
    "url": "assets/js/81.fc146a7a.js",
    "revision": "59baab3fa5d0009b22573b487a2be7cb"
  },
  {
    "url": "assets/js/82.9d7da30b.js",
    "revision": "51a70bf3120560fd7f77f238bdc2d846"
  },
  {
    "url": "assets/js/83.e15bc7b1.js",
    "revision": "6962a8f681b6365f0a9870b6b505c975"
  },
  {
    "url": "assets/js/84.fa93736d.js",
    "revision": "b964be6e35481111964840c25492466d"
  },
  {
    "url": "assets/js/85.536378a0.js",
    "revision": "53715a9f650aa445f2f9da134f1a9fa3"
  },
  {
    "url": "assets/js/86.6955669b.js",
    "revision": "618816e628274b74bb8adbb5ac4f1318"
  },
  {
    "url": "assets/js/87.34641872.js",
    "revision": "845cb6c4f5a775473e947a32564d87ee"
  },
  {
    "url": "assets/js/88.d2919c39.js",
    "revision": "2bc52a33b0a705feaeb83daf14b729ac"
  },
  {
    "url": "assets/js/89.5499b30c.js",
    "revision": "f3ae3f5dfa55348fefab8c215fe03c79"
  },
  {
    "url": "assets/js/9.b02eea61.js",
    "revision": "18be74160f866aa7045bdac3c57ae5b7"
  },
  {
    "url": "assets/js/90.e6e09ae9.js",
    "revision": "949e3635e6a0905ac80bcc0bbfa491c3"
  },
  {
    "url": "assets/js/91.efdd02ee.js",
    "revision": "06162f148ed03b0cbee24e26c82630c5"
  },
  {
    "url": "assets/js/92.77ed6b6f.js",
    "revision": "863e3d0b507dc2e4c1f14da184d6ec29"
  },
  {
    "url": "assets/js/93.a1794961.js",
    "revision": "638377ea96978fb057b3fbd702965b1c"
  },
  {
    "url": "assets/js/94.82503ecc.js",
    "revision": "5eb75a5ef3c56746b6a5f30689fdf9f7"
  },
  {
    "url": "assets/js/95.2d7dafe9.js",
    "revision": "3112e864adaed519f406ce1c639449e6"
  },
  {
    "url": "assets/js/96.c8d34869.js",
    "revision": "52435ef78d0998740ce3de225a3597f8"
  },
  {
    "url": "assets/js/97.5acf4ca4.js",
    "revision": "89b767856740a267b38f6f3ef151fe8f"
  },
  {
    "url": "assets/js/98.8d0c5b88.js",
    "revision": "f06179410b905a5e22597c7fcb04933f"
  },
  {
    "url": "assets/js/99.f7dd9523.js",
    "revision": "dc2b1be4bad66d5bade4ea95122815a5"
  },
  {
    "url": "assets/js/app.ae421927.js",
    "revision": "0d9925323a3063d938c60c2fd2184366"
  },
  {
    "url": "assets/js/vendors~docsearch.6a47252a.js",
    "revision": "283b06b648f596e234a96938109ffca4"
  },
  {
    "url": "index.html",
    "revision": "98a150c6420721ee28632b1ee1eeb393"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "a4dacb411bc919ce506558f4d1924f06"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "8943134da4356364eca616dea55c748c"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "bd4fceafd5cbae493cec07df0f11ea1a"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "cba351d6c797dff58e08ee1bdcc52272"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "e714ad8ae876a69d6e9571d5d2bcb597"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "a8c5bc4e1f2c26c8d86a8ecb819bc643"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "0a4e1505bfebde46d4375c1679192858"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "bb84f3036672d07d010c243c7007c1bd"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "adc5c475fe58432d11d999a9e75f0e03"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "c5e8ada3cb781b524f8ad37dc942fc9b"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "8382dbd4ebdb7c5643a24da0048ecd06"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "13d0d9a145a5d1bea26887b3ad8b9694"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "5661db740b8fd31f1c23d7c24a752df0"
  },
  {
    "url": "master/api/index.html",
    "revision": "9c24ebb714c2bcae5cd6e8660bc353f1"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "16f5b5d4b0c277b6626c46a6d8ad62f0"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "e099303da2be1f4616a4ec20e8c1bc47"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "fe4aaf7a0cc1d9b6762267bdd5716d3f"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "6e97f99a19738127b9eb30ce6c984e23"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "7b65517936099d73a64116d26008b1e2"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "f916740968316e9c16601ae99a9e303c"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "079f3732f3bee62e86a629edf26e63c3"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "2cb891e5df70ac837c9ae1971a6a48d3"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "238f022ff14852d68b2527799df7df93"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "c6def24d9d4bba8b07e22050014f9622"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "31fc34847a0b2fd6c0654af36bffe5cd"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "a167f33e8edb781ca179185bc6c93119"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "be8acd6a83bd4fbcc25a48c4a3572350"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "e9799d475b87be0af2df30f71368c6c2"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "285d6045ef476555ec18ac6f5c55fca1"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "0d54d26ff0e6171f976399007ff1062a"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "ec4344923e9dfe9a1ac6e579fe0ae072"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "ca681912e8c65a1324b4be7a90b1056f"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "179f6a4c513ecb28309aa385d4e1251b"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "522b3ea7cca2bb7ca2ffe2300c9e5650"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "8417d4797e692a345771d7177650481f"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "914e6931088c563fca1ebd3557fb408c"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "42b2e44735971aaa2d9c2dd92b5b3dac"
  },
  {
    "url": "master/packages/index.html",
    "revision": "1ee6d8fbd657c6831f06294e2ff50f85"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "edeb8e6512a19bea1a9178fda2578d83"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "2f199a0d50e590bd8395ceaa1dfd5175"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "6916bd3e5ea9a192bc1343f60147af47"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b31a2a4318e0331d0eb2218adcd82305"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "d90bbfd37762a779cd4a2194f0569bd1"
  },
  {
    "url": "master/packages/views.html",
    "revision": "6d337ff2c1d2aa211e7a879642558ef8"
  },
  {
    "url": "master/performance/index.html",
    "revision": "bfbf3a77b62be61e2de61bfef146a2be"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "84545c86b8556d7c2910bf2e21c74512"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "2eb25825e5b5d25e5f986a281409fd45"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "977c8258c8bc8a1b9295aa3ff22d41b4"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "d6ca49d7223526300fb94879b773807d"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "768896ce6f29fbe951dc82afeac8286a"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "cde5237a30f8e67bea9ce2500680dbef"
  },
  {
    "url": "master/themes/index.html",
    "revision": "8a28d31620472a34546eac96e0bdfe0c"
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
