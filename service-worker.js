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
    "revision": "321b8259fded7535591cac9f1c471b29"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "415f0fff65f14030a4ea1dc89418973b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "7816a2adc9f55dfa456692bb0b45af51"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "669d833193dc994680f15a5832bae5da"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "354d7951fde9c475e8a74f37615bdf9a"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "f50c5a1a5079b13d5c6ce972c40a6c44"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "c7dc60a8a5fe4c1abe77c86ec3dd9762"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "aced0a699a121fe30b43c88b1ba94b7c"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0392fec868772464c1a52857f223e6c5"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "f239194f1b0bf30270b7de77174a4125"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "077da4ec8489903b66cde67321b67387"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "4baed72ce5026bba37b1440d2571af2c"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "73dab31cf2ee912e21a8261531f6a4c5"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "dfc0b3b0ddb0549b52365678a6679824"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "71ce5d6ffb2ad36c78795a098c9619e3"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "590cb3410be810bb91ed70f61a44d570"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "9230320eacbf0f76cc81d36939f42fc0"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "6db928d27d6d5e59edb8f0a630342ac6"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "78477e325f3c5d2b8af04e0c46bfbe40"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "757d4359eb9b630fd606b088ad4283c3"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "064c9a3bf63c5f70d07cbf342b2c678f"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "7b5d3a642298dcc4de16a7eacbc5a517"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "0241a3d4323910f22180776a8e28d875"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2de6eefd4a62645f3b7c709a624ae842"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "eeed1226099e9f065997a2ad1c404626"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ca89b138217b0d28c8c5e26a4e3e968e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "24abac9ebbf0a2c43c324696dfba8bba"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "16b58eeb4aee3c87f43668d4b5d57c3e"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "eaf454d88e87f4c67f5a7a7c9374f2c9"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d38c642d337802b4428a5ba6ddba3bb9"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "2b1d04c9083b8f2e4ff2bb2e88321bd2"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "25af9269eb4e1e8564fe7d438c5d6402"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "a18c0c0d889ff00959069bb365cb236e"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "884d92955d92c161c0a35ec0fff216e6"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "709724ca1d72bcef4f92c2687a778a3b"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "78a46ac5bf6468bbf12f36fe838a7afc"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b7019a76d7cca7a5288bb5f9986b8667"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a73220594c5f7d3997e43eb355e3fcd7"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "02b558bea1e17caf535dc31fba60a4a8"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "53b7791869b3d1ff9914c0cc9bd688d5"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b0244b6d1b0fbf7c1e2c95d4736bdf1e"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "6a2f42802c8ff939506781e656c10e50"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "bbf925c5e0bfd793f587dc7872cef3d7"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "bfdb0bad05f7aa3f2e1b61cfff3321a3"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "ff22bd43b81522cf97459f051168cf77"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0999340c5538ccefc388a97bcd494aca"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b4aa35027914c35585bd7050f953a5a6"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "6ca068532be4382781662def9b3a3220"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "3b8464edcc2f3d6e5389c224c7eab989"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "5c0e5aa4e2d75dee35d87c67c89485bf"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "bcb20d0353959c8fe64c90baf3888833"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "e534e78324d0fc4bc50d51d53f20bc38"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "dc3765b575527479566b3f12705c5cf9"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7f26e72a6acb02296564a7a9aef23434"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1bc690a5a6bec3086b1696a9c33dd14a"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "a111684bb1bd2cd06ad3fda3b680b5e2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c0bbaff25967fec167414905b1eb9a3c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "59a26e8343667d21703e4ede58517f37"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "dbe563df696d8dfcb27244b879da1e53"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "4f8040369ef1f950a3be9f307391c466"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5cf38964051c4941fb8e63f2e7ab9488"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d80f71205c230282288a70914a187efe"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "08f48fb7698b4cd20a3752d60a5b742c"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3d41442afd1a341ff9f3745deb6222d3"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f31d6c5ab213c9be5ccef4d1d5bdcb21"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a2de8317e397575759630448cd9c40bc"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "456325833ceecfe55eda5e7700b22b3d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f7f33ca9ff0ac3d199946d38e71ca0be"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8fc16d178a9bbf099026fe625f2a01d2"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8c72bbdba3d04b6c2b94b720c68ea593"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "64c2fb36dd5fac20cfd2aca45e7b8fe7"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "88934ae0695531937026987de9156c08"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "26503ca1035c673fbe66fa071c90ffe7"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "1ae6349f7b05038a6e041fc34e174f05"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e78123c002e1fd5be9716567d5bfafbf"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e0311758e12e50e7ff2583075b96d58e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "25ec89125f98baba1c9c24345c8a8673"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3c55fc5d2ce8dfe526221b8c03c7a82e"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "146a087d218beb4ee8fb71364d2a97e3"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "50240dea5e58330b605db7665e180faa"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "ad362add18886357eda1c83247f400df"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "0220a43974153460a096f73814da25b3"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "e0de40be230fc1c9ba648d9b08771bce"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "b764440d7fac88a2944587f60b82b826"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8c0fdfa8989bf9ede50317fd711ce7f5"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "6ae09e2dadbdfd1149536bc0bc3a2463"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "55a723f6637a0bfeb32edf59364c3794"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "c699a66288dac1484a22a5df54ad8c1f"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "0654bbb86026165a6b2366049f6d76b2"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "248d9b3d77e978006f69db4ca504a1b9"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "4e6fb0b34149c1beb0f4b894a312034f"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c5cda5b2ebccc974c8e14e57f935ff0b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "728d1e4fa8098f738225fb558121dc56"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "2acd4cd48309bd3113fb16b569dc246b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "855d76de830fb82a17f8b1ff88089328"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4c6056506915ee23f01ea4cea2e22c80"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "8cc0d0471a38442196d2cc3c5b67f04e"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5ad57d5c7b3b1380aeff9ab8200658f0"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "aa6ddee432aa4ec46a5054a31055e030"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "7837bd7bba5044134a076685889b47b1"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "790d464212666ecbc5060aa71637b756"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "40f72d070a00021a188e8f534d77934d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "086017794261a28916b1c9be4ea2a842"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "5346bace5225a104206c4993d72fd616"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "dc4ad4c8e2ce7f9b94871fc21b7c6819"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "76c786322074c1948dd41db6992ee059"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "6698394e6ae0688a2d024c1f4923fcbb"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "336ddf60deb55b79314a1edb5a4130ab"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "bed5f76131d873aea2774bb1d721c971"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "5cd455f24b0cd0c976a46c3a3d4ab7a8"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4d49394396695cc649490bd0a2c3cc69"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ad721df5dbaa5516cbc256e0255289db"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "05778ec41ef5f9f5904dc955d3278b55"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "4a3efd35a8dd8005c207f5b555024b46"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "0b0aba7aa1e83dbd075e4cc717803d9e"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "0c01138b0d621220f14bb90e5fcf3c73"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2918356a41d6b51c4c47e2ad64d5775c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "fb8c70ba5d27e6fba64cbdac4dbfdcbf"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "88e43e9767cb2484d2ee26b533398cc6"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "bb74bf35981d9c8d6d416b1785d184f5"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d381e57d6b55efe0f63b25eedc140adc"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "555e44dcc3d6d5e3c800f8f80b925612"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "dfca0105572bbca3ff359e5d6fd3b511"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0ee5ff20c62f15f09670c17d25c6c93f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "0a07a543bd1df781dc1bf23113511fb8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "6a708c8c6cffeffe29cb226f628ddbb1"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "58d0550c144ae92936d3cd41a51f9352"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "bb3f080bff4eebf4949439681c909446"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "2ff37dee90bac4e321c228f974a8d390"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "bf0964a12cac9f844c787b0ed932f208"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "77d1748b2668f2e4a4b80a9fc18c2fdf"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2b1a4517cc9a164d380572cf5d1c061f"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a6a81521dfeba1d65c6007e0f8e0d2df"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "1ee7459fcc1fe4bbc9eb198ab165dfde"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "fee162b70901e005cf8d9a1f4b98f241"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6136296f46902cd5267cf24ab2dbc879"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "657c926589beb7595325eb59ab28f95c"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "780b56c3b33f786458df4d98a9b28933"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "41a849426c0b42c08eee3a6bbd7313cb"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "09361bf93f8088cc3d84e4085f51a20d"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ca4dbcddece90449c8c011a6d0d08775"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "e54e392c5d3b301a793432a49de1e0fb"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "af0d243402f1254ad7935824c060a84f"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "882d6402aceb3bf44752bc4b79065d3e"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "bf0856f05570a4f774dbf19c4ce13444"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "101e586cca88d99d624a744912bf760d"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a3e3edce9e91df436e73439f141949f0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "0560448cf68a511b4be6c4eb2952299f"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "5c498f44f1fec6475d04e09edb0204df"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "12110f66ed571bc7ec085d70baface2f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "3498baf308c7e4da4998434601692dfe"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "82578f0378deb55b3213e8a8c67c19b2"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "3229f97d1c80a00ce20d18e7609b0f40"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "69ef70d9fefa67e647c53abff048f846"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "835e89e632da831657995f31dcc39055"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "672016cf59d3db71a9a5a2d4ac679e8e"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "2dfa9d0e03b15da785df840290f21b10"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "fdb2c373cc8a435f1ed50894a292bd70"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "104267072732962dd7411c7c0a02872f"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "5a1a157d49caf36ccab195546b40cd1f"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "6abb404481a69730504d24fe0e456839"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "da6d16773a290c2afbd7b028463937d7"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "96a33876be90f8a49be94a3297e4fcdf"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "8140688b98764785896ab70477106bd7"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b207408a9520308a78f256509faf4791"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "200921cf7d1d3c4a8bee32139b81cb64"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "320ddd323ad9c76e51ce25ea67e931c7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "eb305ae5a9445a5e51274e170fa10e9f"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "62e5f7ff50f1316311b98236a6014c57"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "fc59a1f02d36710ae922f117e24d6322"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "860fb74835f14b3a63185d2c8818b538"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7a89a914391662a58ad557f5a9b8980c"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ee0d2b9653c1e88675224c6bb03f2ee3"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "b85dce3b53fa8d1c380ed2b0e8a395d0"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "2e12f9f13007e2756f93783b39c05910"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "4787632681a5ab05721fad8ce7365583"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "94c7fbdf9304c1f0ba55199926105a57"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "16046a97644538a76f8747e94ee5400a"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "b5e4b6f69b3f4bc7293836b41450f082"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "acc08c82c8bb3765da5021f96eb4ccbb"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "5ca2453ebfee184a1bb6ae34641a1be1"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "35af3a410956d925f7a782bad9f2e54e"
  },
  {
    "url": "404.html",
    "revision": "3e5420b7689176cd346d5fd35eab5eee"
  },
  {
    "url": "assets/css/0.styles.3c367bfe.css",
    "revision": "3a1ebc21b86291251328834c0d5063c2"
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
    "url": "assets/img/admin-acl-output.b9cf7d8a.png",
    "revision": "b9cf7d8af9f9610def53593fc0d1fb27"
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
    "url": "assets/img/admin-menu-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
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
    "url": "assets/img/blog-package-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
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
    "url": "assets/img/custom-config-output-1.c07d16b0.png",
    "revision": "c07d16b059ed84790741caf02577a696"
  },
  {
    "url": "assets/img/custom-config-output-2.0848dc68.png",
    "revision": "0848dc686b4c4767b613f18d95de60bd"
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
    "url": "assets/js/10.5e02b531.js",
    "revision": "b82f4ace34bf20621e95690942b985b8"
  },
  {
    "url": "assets/js/100.47a0a494.js",
    "revision": "d925decb50a85c244a895a82de1d057a"
  },
  {
    "url": "assets/js/101.2388cfc9.js",
    "revision": "bc0d3be4a856dd36daee63b1e9f6fb91"
  },
  {
    "url": "assets/js/102.fa70f183.js",
    "revision": "4ffde747f38457fee9c162e3b952f7c9"
  },
  {
    "url": "assets/js/103.d22038ca.js",
    "revision": "904005d41637bc01be4b670a16723448"
  },
  {
    "url": "assets/js/104.bf03dfb6.js",
    "revision": "72b993bdbd2d37214cd8bce5ddcc004e"
  },
  {
    "url": "assets/js/105.516742eb.js",
    "revision": "83544141139ab20319cfba1049b2eb55"
  },
  {
    "url": "assets/js/106.e9c288a0.js",
    "revision": "1844dc3d210266947840e9c87adb6692"
  },
  {
    "url": "assets/js/107.2766b0e4.js",
    "revision": "a804aa200221b0daa7b6f9ae6dc77891"
  },
  {
    "url": "assets/js/108.a21bf0d8.js",
    "revision": "7b73d57904f8344ff475f4656f4d9971"
  },
  {
    "url": "assets/js/109.96dc203f.js",
    "revision": "5c36289321a8eaa04ac1e03fac95f361"
  },
  {
    "url": "assets/js/11.49ed81cd.js",
    "revision": "fe5eafd065eea98654897ad9fea18846"
  },
  {
    "url": "assets/js/110.53fd3850.js",
    "revision": "8443bde26aac8b56dc0b5906e155a952"
  },
  {
    "url": "assets/js/111.52cd1d00.js",
    "revision": "28dacfbdad001fd8043400ca316696a3"
  },
  {
    "url": "assets/js/112.a372c066.js",
    "revision": "53c072599b2dd17abccbb344ae4b2d3e"
  },
  {
    "url": "assets/js/113.1ee924d5.js",
    "revision": "4e9f5e728fe1c229658efdeda5c0d5b4"
  },
  {
    "url": "assets/js/114.80095f89.js",
    "revision": "5cb63fe77b8e2fb17541835b60fded05"
  },
  {
    "url": "assets/js/115.5ae57ec5.js",
    "revision": "56eff444f1e643d250ca9e09a5f90f04"
  },
  {
    "url": "assets/js/116.5aea00d7.js",
    "revision": "ff14caeface9e63cb7f06d338db49afc"
  },
  {
    "url": "assets/js/117.69c4f4b4.js",
    "revision": "e72137e60dca6f098dede3eb8e07c258"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.767c90a9.js",
    "revision": "e5e16634d6df5cf0b02594b5cb8ec4b3"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
  },
  {
    "url": "assets/js/120.48aea012.js",
    "revision": "4efb8ef24036a077cd975835226b2189"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.14708e61.js",
    "revision": "639d67b3717f996858e4a6ce11ab7d24"
  },
  {
    "url": "assets/js/124.d639f86f.js",
    "revision": "6bbacf5d3deafbdafabd6183d98fc0dd"
  },
  {
    "url": "assets/js/125.dedf3340.js",
    "revision": "9c6458a8de2e5aaad79e8a4ded0a6c3a"
  },
  {
    "url": "assets/js/126.23bb501e.js",
    "revision": "d5be1a88cedab83187fbbf60f848d72a"
  },
  {
    "url": "assets/js/127.cec4e034.js",
    "revision": "aad49464c6526f45254aef5af188a06a"
  },
  {
    "url": "assets/js/128.888dd438.js",
    "revision": "c90c88ac00003b7a1e45b0685bab6d44"
  },
  {
    "url": "assets/js/129.4dfd121f.js",
    "revision": "ef17714f7560cd8fc734fc73a3930aaa"
  },
  {
    "url": "assets/js/13.e2d65956.js",
    "revision": "818376197472471477eb8ef4a5c7a1fa"
  },
  {
    "url": "assets/js/130.fb0f4236.js",
    "revision": "69583f8d628aba38fde9380264f087e5"
  },
  {
    "url": "assets/js/131.2b382360.js",
    "revision": "da7f5b1b9c0cb3e0c395a8d0e998b5ac"
  },
  {
    "url": "assets/js/132.aa2b4f20.js",
    "revision": "7285519f3dc20e92e69db8afba1da476"
  },
  {
    "url": "assets/js/133.c3f6c3b3.js",
    "revision": "0f8d15beabaa958a842416bf9e2df61a"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.d5cd630f.js",
    "revision": "67bdbdd42eaed90310eb7abd23fb1284"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.91f49f30.js",
    "revision": "908252d2c838de4e9c3ddefa9017f7c2"
  },
  {
    "url": "assets/js/139.793aa812.js",
    "revision": "378714181add4339725720abf5429ef6"
  },
  {
    "url": "assets/js/14.c046b265.js",
    "revision": "d0ff3937126a1f784f3a41a05b8967b9"
  },
  {
    "url": "assets/js/140.5ec900f1.js",
    "revision": "43abd268de45a67a4152168c56f0d833"
  },
  {
    "url": "assets/js/141.6f62d37c.js",
    "revision": "1f5e92b1d5c25af080efcf6ef360a9b5"
  },
  {
    "url": "assets/js/142.6c29bafc.js",
    "revision": "03e44f9f7aa1121b284478f75f730a64"
  },
  {
    "url": "assets/js/143.c0b6fc76.js",
    "revision": "7424a5b44449327a379a231e4c230a8d"
  },
  {
    "url": "assets/js/144.68ea79d1.js",
    "revision": "5b0a6856a527c1f9e24fe28c2f097be3"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.e93a954b.js",
    "revision": "cbe65d967312ca00ebfb138a00c59bc6"
  },
  {
    "url": "assets/js/147.b438b611.js",
    "revision": "7eb0b8fdad836923813cafbc0bba46d3"
  },
  {
    "url": "assets/js/148.2892d8c3.js",
    "revision": "d34794f942363837e4a124d81b24825d"
  },
  {
    "url": "assets/js/149.dcce7006.js",
    "revision": "fc7e43f8a015fd5849488520e6956226"
  },
  {
    "url": "assets/js/15.643aafae.js",
    "revision": "3cde30119ebacb43413aa7ac7b126ca4"
  },
  {
    "url": "assets/js/150.e9a822d3.js",
    "revision": "0ef367d2b2f45cf88594693ff67b093f"
  },
  {
    "url": "assets/js/151.5e66b5a2.js",
    "revision": "df9e45774d759f4707b4868b2db81498"
  },
  {
    "url": "assets/js/152.f5cff590.js",
    "revision": "ed464b5eded292e25bd2863f49ff7413"
  },
  {
    "url": "assets/js/153.c85aaa61.js",
    "revision": "d43acb25582170a5ca2097ae4ae1cabd"
  },
  {
    "url": "assets/js/154.75efd8b9.js",
    "revision": "b43b36c1711962f1cad27aa9f9462762"
  },
  {
    "url": "assets/js/155.b25a638c.js",
    "revision": "d4ff23ca484d38ca12b1c69bbbd80eb6"
  },
  {
    "url": "assets/js/156.c0fadf06.js",
    "revision": "88c758bdaf1c75f2b20f4f4e9c230c6c"
  },
  {
    "url": "assets/js/157.404c2254.js",
    "revision": "4910f4a386899ea3354cd7c44269e501"
  },
  {
    "url": "assets/js/158.4b90fa69.js",
    "revision": "673cf800cd3d718bd57ed875e407b7f3"
  },
  {
    "url": "assets/js/159.8c7832bd.js",
    "revision": "f13d0d599275300f1c921a5cf9abe3b3"
  },
  {
    "url": "assets/js/16.2be2c9bb.js",
    "revision": "278c5bfbf714695b770cff95e2decc29"
  },
  {
    "url": "assets/js/160.51919a37.js",
    "revision": "948a3f41b98ec9af7c85513f70184745"
  },
  {
    "url": "assets/js/161.efcf159c.js",
    "revision": "7eab09929afdaa7285703334b0d6a125"
  },
  {
    "url": "assets/js/162.b372afa9.js",
    "revision": "2528b9adea0a643ccf4c8b0decb72dfc"
  },
  {
    "url": "assets/js/163.7b73e3b7.js",
    "revision": "325aa74a3f65703ab088e6a5ae2daffc"
  },
  {
    "url": "assets/js/164.e8c008a0.js",
    "revision": "5df505ddcdf078fcb8efc8c807e9af9f"
  },
  {
    "url": "assets/js/165.06884a9f.js",
    "revision": "39b0c4d2f96b6e29daaa7a46be14e833"
  },
  {
    "url": "assets/js/166.4f36cb99.js",
    "revision": "f794cbe3160cc4b8a2537c067460fadc"
  },
  {
    "url": "assets/js/167.5727cff0.js",
    "revision": "97785a83b29f77401f1779b5cbf95d6d"
  },
  {
    "url": "assets/js/168.dfd1f8c9.js",
    "revision": "35a287721b9d5768822e68c6990a8125"
  },
  {
    "url": "assets/js/169.730babd2.js",
    "revision": "b7df9b527015370216a6d8106fec6346"
  },
  {
    "url": "assets/js/17.17ea0f86.js",
    "revision": "b51ca13df0a8928392608bff6988f5f2"
  },
  {
    "url": "assets/js/170.2916032a.js",
    "revision": "6bdfe5c956a7f27b139d616cfe8bd747"
  },
  {
    "url": "assets/js/171.4e0c73a9.js",
    "revision": "9709c9652bf1084477db5c05be0fd5f9"
  },
  {
    "url": "assets/js/172.bbaf25ca.js",
    "revision": "28f794d7cf76731a86629f9f10a819e9"
  },
  {
    "url": "assets/js/173.2e9b7992.js",
    "revision": "6e8f2e7c6406e8b92194c54f09bf085b"
  },
  {
    "url": "assets/js/174.73034e66.js",
    "revision": "31de3ea07e49049aac6f9fc500519bfd"
  },
  {
    "url": "assets/js/175.350a0141.js",
    "revision": "f022ddc4cd7baf7bff9e3d00f4bcb00e"
  },
  {
    "url": "assets/js/176.9974f2ac.js",
    "revision": "a5bbcecfb4ef47685e030e8197996083"
  },
  {
    "url": "assets/js/177.f77c969a.js",
    "revision": "cdf71935b5cb5309b3b46fa580eb8ff3"
  },
  {
    "url": "assets/js/178.f98df700.js",
    "revision": "776eb37ab0d29d91187a766fff23ab45"
  },
  {
    "url": "assets/js/179.01922563.js",
    "revision": "8625a4d7ac7b775fa86f59845524745a"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.c17cda81.js",
    "revision": "75fc5940ebbee5da834603551f241904"
  },
  {
    "url": "assets/js/181.e28da0a6.js",
    "revision": "d0376f64dcac1b6e927ef93eddd84a70"
  },
  {
    "url": "assets/js/182.f4a7444b.js",
    "revision": "ccad05abbe01ffe495b5f51def16fbe1"
  },
  {
    "url": "assets/js/183.14e2ea9e.js",
    "revision": "63c05e2cb9ac8036a32d04c8d52694f0"
  },
  {
    "url": "assets/js/184.6ff0b57c.js",
    "revision": "87358bb944860a5c791f1cd3558699b3"
  },
  {
    "url": "assets/js/185.c59b9c43.js",
    "revision": "8eed6f299afafd12606be38b7906c780"
  },
  {
    "url": "assets/js/186.ffaa50fb.js",
    "revision": "ee926182d1261af3aeb4e0a608fc3b72"
  },
  {
    "url": "assets/js/187.fdb2abb0.js",
    "revision": "f23b6f0a68e849b2a43693975f1003e0"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.f070d9ac.js",
    "revision": "fb0fa6b1e4871ec8c0c2a79f2c214ac3"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.aca6995f.js",
    "revision": "7480e7e6605454d01ea7619f872f48f6"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.02d63b25.js",
    "revision": "b85af69f3727e9e4de2aa43902ada541"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.1f98e74c.js",
    "revision": "8a1edaafc1b9caf70de29cf1e18d1033"
  },
  {
    "url": "assets/js/25.92dbd84c.js",
    "revision": "ee8e2cc29cd115d161a37150d0908285"
  },
  {
    "url": "assets/js/26.888f0656.js",
    "revision": "50bcdae79e851c62cbd33ac092cbd2ec"
  },
  {
    "url": "assets/js/27.4e494e47.js",
    "revision": "d962c7b15079bcace3c1a47f7e4b2ec0"
  },
  {
    "url": "assets/js/28.516158fc.js",
    "revision": "916e61d1ebc87677063ba17f62a291f8"
  },
  {
    "url": "assets/js/29.dacfd205.js",
    "revision": "629801518d069ba5e66cfe0ea15fcafc"
  },
  {
    "url": "assets/js/3.c7be380e.js",
    "revision": "47a333828ae175ebf6a9ccf39faf1de0"
  },
  {
    "url": "assets/js/30.0484b6bc.js",
    "revision": "e3b16cd467586d68797a39b9f8a320e8"
  },
  {
    "url": "assets/js/31.1dcdb276.js",
    "revision": "4be5e981d6fa66eb3eff72b1e3e82c0a"
  },
  {
    "url": "assets/js/32.3460574f.js",
    "revision": "acb71dc66baa77f84bd8e50bec5520ec"
  },
  {
    "url": "assets/js/33.d4c95388.js",
    "revision": "b56e39c2cdfa80afb9d8bff8c4e55bd6"
  },
  {
    "url": "assets/js/34.a89b92f9.js",
    "revision": "4337e48a9eee0a395a5a63d2c8faaba1"
  },
  {
    "url": "assets/js/35.8b04d696.js",
    "revision": "5c8fb90502e48fea644d5992ab62c5f9"
  },
  {
    "url": "assets/js/36.c99ca3a9.js",
    "revision": "788f40be7671f026eac0b8f0c8aa7f6f"
  },
  {
    "url": "assets/js/37.fb33cc7a.js",
    "revision": "f3063b67357505ea14d373cc4bf8a66d"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9d124fa2.js",
    "revision": "b64eebdd84b7603c12890bee07c05093"
  },
  {
    "url": "assets/js/4.24d64937.js",
    "revision": "ded97f471939c958ca3ba46758f4b298"
  },
  {
    "url": "assets/js/40.46003d7f.js",
    "revision": "81ab705e37a257b7aca52cb33aac71ba"
  },
  {
    "url": "assets/js/41.d515f8f0.js",
    "revision": "83ad5594cc6955320bf57b00b0aa45c1"
  },
  {
    "url": "assets/js/42.09864af6.js",
    "revision": "d98bf2affde52e71f7bbe0b43ed6e9a8"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.f395c1a1.js",
    "revision": "a31bb296a0473c03694084b731b963e7"
  },
  {
    "url": "assets/js/45.a5213829.js",
    "revision": "67367997cf87255a61c95acc01ee15d2"
  },
  {
    "url": "assets/js/46.3ab955f1.js",
    "revision": "a9726c9bf3ac127c9e8767958ea4afb7"
  },
  {
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.e3940bb5.js",
    "revision": "4879254c1b685174cad3b2f9a7d0f3cf"
  },
  {
    "url": "assets/js/49.e71878f8.js",
    "revision": "1e8b45e47816d05a93b809b6bb2c3e58"
  },
  {
    "url": "assets/js/5.9c77cbe0.js",
    "revision": "37b86e6ffc379e1e9007423eb2dabdc6"
  },
  {
    "url": "assets/js/50.73ffec8a.js",
    "revision": "8e8023ddf2d3103e683d6a2dde79cd64"
  },
  {
    "url": "assets/js/51.46e1e138.js",
    "revision": "953a22e63d97780cec5df9295c441ea9"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.d0ebe33d.js",
    "revision": "8b7f34caf622fe629b67ba5dd98bc269"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.84a0dfa7.js",
    "revision": "f461d09afd6aadecbdbb2f0152c9bffc"
  },
  {
    "url": "assets/js/56.ddd788e4.js",
    "revision": "6168caf397502a6200cb96cd057b4ed9"
  },
  {
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.a3049512.js",
    "revision": "4995646127e5d143bf62d5bd26ad7d50"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.cda67143.js",
    "revision": "2d72910a3e3811487f67b95ba7cdf3cd"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.8f456904.js",
    "revision": "af7e5ff0bab047156994a3e66f9cd7cf"
  },
  {
    "url": "assets/js/62.4878b1b4.js",
    "revision": "8bdbc3bc4d1d14343c5b7c29adfbfc8e"
  },
  {
    "url": "assets/js/63.99cbcf99.js",
    "revision": "fdce9cf87d5c20fcd69882c0335d0d8c"
  },
  {
    "url": "assets/js/64.34339715.js",
    "revision": "38cd698d3564e6d2c1d4e83a9239ad61"
  },
  {
    "url": "assets/js/65.74803268.js",
    "revision": "fd60b4f3b47d400e672b8edeb599e5ce"
  },
  {
    "url": "assets/js/66.7101cc5a.js",
    "revision": "11717757185c042be217a2ec18ea4825"
  },
  {
    "url": "assets/js/67.5731bcb5.js",
    "revision": "f1fc76e231fbfc706938ef50945c49ca"
  },
  {
    "url": "assets/js/68.6c58381f.js",
    "revision": "cbda7aa441c2f59226553ad50383a528"
  },
  {
    "url": "assets/js/69.e9edfaff.js",
    "revision": "392c47cd9ffdb7fbe4aa6ee42899e6a9"
  },
  {
    "url": "assets/js/7.b9ca368a.js",
    "revision": "ac6a9cce247858eb1df61b6f2df0a2f6"
  },
  {
    "url": "assets/js/70.2b38e83b.js",
    "revision": "8a4499cf9068edeca99a9bca0c109bad"
  },
  {
    "url": "assets/js/71.34fcec0b.js",
    "revision": "682d920511338866aac151e53647f7a7"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.227ff668.js",
    "revision": "a9e72fc8252262fde63d0cee9bc76fee"
  },
  {
    "url": "assets/js/74.95258a5e.js",
    "revision": "13d4a1c21f2c9b8c0e92de543cca4006"
  },
  {
    "url": "assets/js/75.9396f685.js",
    "revision": "7872f0da94de9bd84ce4134273ca81d2"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.e853b924.js",
    "revision": "c92d15667c43476e37712acf6ae32629"
  },
  {
    "url": "assets/js/78.07bce5f1.js",
    "revision": "045c263de150bc5ab73bd9862e995593"
  },
  {
    "url": "assets/js/79.b3d5a645.js",
    "revision": "0bc583fb5bdc40980fc5ba159eab4452"
  },
  {
    "url": "assets/js/8.d6b4d976.js",
    "revision": "97722a30b6b07f1aab6fcde28fded114"
  },
  {
    "url": "assets/js/80.c5374780.js",
    "revision": "cfe5f37a6349f90283a764976232dd7c"
  },
  {
    "url": "assets/js/81.5faf3b61.js",
    "revision": "b872aa96968cc19308049f04e37e966e"
  },
  {
    "url": "assets/js/82.e6c68a33.js",
    "revision": "be9cd13caa2d8ef73ca50060b91df3aa"
  },
  {
    "url": "assets/js/83.80338452.js",
    "revision": "87813ca3b5d239b57f2ce22986d2d0d5"
  },
  {
    "url": "assets/js/84.f88bdc56.js",
    "revision": "80ef1db1293dd42671378a1dca9f11c7"
  },
  {
    "url": "assets/js/85.283461c9.js",
    "revision": "5e39dbd07e9bc3c8859203a2bee14193"
  },
  {
    "url": "assets/js/86.e7d0fa0f.js",
    "revision": "2679b9810e748e42b37c26c72be2ffd0"
  },
  {
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.5ad45bb6.js",
    "revision": "a7e34b43d7d446782f4f3d63a5cf42d6"
  },
  {
    "url": "assets/js/89.5f0f0685.js",
    "revision": "1b7d4382cb903bbf216b26c1c9768a30"
  },
  {
    "url": "assets/js/9.b25fd464.js",
    "revision": "4fb1b1cec086e0b456c37eba0c313cf3"
  },
  {
    "url": "assets/js/90.4ad6827a.js",
    "revision": "3343ee2b0f4bde894580d9bf0a9d8c2e"
  },
  {
    "url": "assets/js/91.0802d655.js",
    "revision": "f3902dbf03d38bff967876e1442aec47"
  },
  {
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.52253ed2.js",
    "revision": "ad606a349923c3dd92bcfcf7923e2a18"
  },
  {
    "url": "assets/js/94.1ea654d5.js",
    "revision": "e508d36762d1878246ade40732064e1c"
  },
  {
    "url": "assets/js/95.7b366bf9.js",
    "revision": "4657f02b014883207e636e707c91407b"
  },
  {
    "url": "assets/js/96.0a534bcb.js",
    "revision": "2926a4183a848721a3f586034893d90c"
  },
  {
    "url": "assets/js/97.1ed8d73d.js",
    "revision": "147107bd941f0d676824112328f8d6e8"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.4d46ddd8.js",
    "revision": "e9a3d86dced7d2a897fd6c077c1bc193"
  },
  {
    "url": "assets/js/app.0dc7cafe.js",
    "revision": "496951f7e378124639886cdce09d9819"
  },
  {
    "url": "index.html",
    "revision": "cb51ed3b37034b1154ec926ff689aaba"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
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
