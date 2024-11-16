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
    "revision": "f25e185ecc91e5186f7548abd0fecc9d"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "57a0de090e9631c96c5b7cb1e32c0234"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "b3b33ac36350c20b54788d0e23e47613"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "f63ff542fd409aaa0fee6ad5bb2a5138"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "dc5af856e81b5cd7a38d625a5db5d7d8"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "2583bc51e35f97e644159c1f8f9e634d"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "fcb65f00ff72e1d19c0dd03c1be3d644"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "29b70cafa2d55cee4437551a597356b0"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "c82474341690e69ee1219b00bac4c7c7"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "b4468b006631433534fe8a65948202c7"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "b056981ac7f39576fbe15fa08c4332e6"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "97cea6c809ca8387b6359b23c554f5ff"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "7c374d6c1284af312f905e65dcf67ee8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "a9ed0305391cb427f90001c29563dd77"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "0c4233e2ef2a8e91c455f0b733c42808"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "04f2e87fa3ad9c5235de1bbdd9133361"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "0bcadc769b8b474e2e3931d20fa49bdb"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "567abef51e51faf7415a830b4c204f3c"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fa334cb7f5459f8674bf2ff434adae64"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "b509ab3d9eea7e9c1f8db67e60cda38e"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "bab4bc899580e7460a94b66005d5bdce"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "0081caeaa24d51e66d74f617d055708f"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "866d6e0bf03dd44380b7fd0a55219102"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "4c1ca4139b109259efcea5795b41ad72"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "59f044dfa5745d71e66cf66835dab3ce"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "c420b37240afd6e7eeed6088fa1f298d"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "4e0cf15306ec08d470cff075dfec7a22"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "01719283027f07c7124373918bcd2154"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "7755ee79ac58b648568b7d7721876602"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "3f23919eace1ec09fd11fcc7af82d3f7"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "720f7541797755feeb08a1a4e181c1d8"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "2cfed9f323d24383198b07c9985e0a70"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "880b9e419acaa9246ce33b8f43801010"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "b38d48b675739de7eeeb4c1cc944c0e2"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "85091dfaac26900d1c2ad392fff6a078"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "1e66fc28086e7c8447d48b1e26698639"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b97a47dff4c45e75697029118077ee42"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "1b03b369dd37dbbec84a570df3efe8d5"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "9b0fbf1d158ffd7258731f77a75a361a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "feae7447113e94a71ba0e016e046bd3a"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "567ba8cc69d17706e91225a57bb3708e"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "e3e35a48716be99204c0bd1df004a791"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "97953f544f1bd033ce9127213237e8f9"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "82b72b4461bac9a08effba040d75c5eb"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "66b66e90d86e5f13f8ccdb88263807f3"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "9dabed96103a4af7f0b9f059525155b9"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "d38ded041a546498f99c99a038650b92"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c221c1a6f098cfd7cbd594061aadbc8c"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "af2f6cabe9f1cb8d4bc9868bc22fa533"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "020f5a7a727815bdc0097b968a9aa961"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "f7c74dc44d8c2c7f4a66d11d342a01bf"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "8cc360d2712e41fade62cdaa2beea3f4"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3f36893deced47be383895ac0439e488"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "e4a9c49d64175cfba031ba4f7c0b387b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "8b4f8302af7d240cc1dd40c693df2da8"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "b310b778e36d0592d80b0b7fd688a210"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "4b2ad481cbca765b28a29da9166d6398"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4889f80588628cf69eafb274f99dedd0"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c7f1035f3e472f65e2a9acccf4daa3ba"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "8748a28baa94b1b246ede13969619ff9"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "151c7a7f114ddd75b257226a028e4a41"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "bbca2f64cd6d01b30122ec44a492c50a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "a796d37712e5664ca5066e145d0ac582"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f6d794166b849ad56863bb65e5bfd923"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "57461029f52c3bc469d3548402abe4f1"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "abe6cf0f2a5cbdb5d463cadd1ffe3c1f"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "f2a7eee72dc304a8ce4880e6a8fcac5a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "0fdff210eabe3e79eece7608e6aa9edc"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "16411e47de0004c6d01af7b94158a244"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "24ef7a4952d5891a2dd0d8f76208f94d"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "b7a8f71181b1b3f04638005e314d9f0c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "2286536607c70c4b408fccf8afda5d11"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "45b92ff4badc0163dda6569ef5a7f1d4"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "df6c1b19a280732ced06dbbe21b17f2d"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c294b0de952be083bb1fe8b7f0fef353"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e6f73b680ae032c7fdf8155f8557b6e1"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "bc963a068bc7386ed978ad4e82219210"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "8e284be36b2ba9a19afe19bdbcc171b3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "b8ea77b7eb234acd7d79fdede245e66a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4edb259fe3d901829fe3a553d294bb92"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "dd04e36da8f6f446521b4d9859119694"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "d833d81b4c6b81ecf147a86fcba4f6e8"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9424ea327fd116ceb7016ed52b2d85ee"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "0e3136414b42b62f6ed3f6e52d4fc062"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "58d5527994740c8d75a748ec45a92918"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "22eccf9a07a92c51ee63c3f28b5c4ddf"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "c553eedb7c7dcb3d377c3119e73cfd4b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "e8731692d06f992d83bbfb3e31231749"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "28326269f625203a4faf2a4a2fe7b866"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0f797ecf3a809ac4592da9b5cd78cc1a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "54748ed20c9c39b37e3d452a9115027a"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "d1c8d20da75f74806728a50a5ace6837"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "709005ab7d04f57618cd65f6584a9e4a"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "9f9ba67888cb6f36ab1e8ce953ef8fd3"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "bb2dc93c31f69b3088d3e5a83e4f1aac"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "038f6f33e34dabcc1e25b7598a3f42dd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "9dc82667f6ba11433f2a10925311c28f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e3114eaf32629d1870d12b321c434a04"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "082475c58104b16fde35a7e7dda4dfa8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "74fdbffe6613cafeaa663060a7f6a41f"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "797a8375dc636b5ff3c939bd293a6a51"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "81e40a2a224fb7e42f6f79edf76ddf07"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "e5a42f9dab12eb39d1bfe6d8c6669b3f"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "0cc097a0ff49060e216af3d26453ddf5"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "62d3ea315e3ab4a6084311aab31eb7b9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "cbf9c41f0e3c274e154a1726d067fabf"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "ba6623567607e143cd21b057ab8631f6"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b547fe347b47733553c181cf8bc1e544"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5b011c73e5be4f2dd126f677164b8356"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "36a7a1e81af530b81161810db95b67a1"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c7405bf1c2baaf8479e92c8bf480d80e"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "3abbdaaa55dd529c1fd84e9ee6a3e808"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "13a76ab6a669b3133b5ee3fbbb643072"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "051886a07fe38b8a1a4c516dccd64731"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "5cd32d05fb81a8b0f15e8d63d526e227"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "03454f0c63136cb3881b5a44eb99945f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "7443047cdeb4df106bd5ff7b2a986c35"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "bc7e31e4043c2ca1bb7aac71f4a2631f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "11963cf4e9ebe4d20486e829df4f2069"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "dda4d10f07c925f17467a3d3f91dc83c"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "db184afdc90486c19a495988245e2a70"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "92edd8df8c1018fc6da59de73a910707"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e2ad9e416b8d7381a98e9cd979f70b6b"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b07d3a64c6b8e3d0e979d3a036636455"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "3dce640aa86ae0bc0c4744569e999091"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "cb45a8d9ee1e111c6b25a25118600283"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0e3a5213614095be1036f5f2194f9e7b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "23d2754936e960387cb884fdf8e73eaa"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "954d9cf115858aa2a0d0e7b3f20a9f4f"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "37a93561abbd39b2f9baf864950ceb85"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "707913d20ec48819443cb58b0257118c"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d6c387e0f57a890cd12da102af2e7b69"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "64b3daadd7c25659dbb9786d7d13d588"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "f19c184ff0368e0957dbbfcde7c34f6e"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "b4361a0220b2cbb574d53272f5b8d4ee"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "22ef2f3e5f1d8d337d5b5cf1680012a8"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "59283ade2d7056f6a769d98220abf741"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "dd45c2a523b39ec38ced2c355963f2a8"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "ebbd85539d5487a69901f22f1cb91a1b"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "e80541eb95b7edc9d81d4adfd4905527"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "79c1fb34cb70ea141557144ea379e20a"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1f79ef89a7eb6e356e6e0d76a9f23c1f"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "0ddde6368f6c61f779445ac5f3901846"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "0703370fd4d3158e0eee51f44cf33c55"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "9b495c9c5888e9b31496312397ff6149"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "7bf8a5ebcab90625558bd5b87053a22b"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "c31eb79767393a9bfc499afcff536ac1"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "9f27d92af7a1418cb2fe0e1a6d2b41a5"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c34bd2d1c09bb68c046ed972451cead6"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "886f72f849cc54c4abb9cbc33f7bae36"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "13e4b224c7a71c297d6e62355441d8a0"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "6b6ec3474525f6b454f5ab5d159f1245"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "e54d47277d8ad30048f48b26c6e51cbe"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "e238439d51f361f14fd596538aeed919"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "861c5249ec0778785ddbddaf4ea5796e"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "2416254cf06860d612d19b5e1cb590c9"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "cebfc7f06e7dc2d24f20557081a1ea78"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "64c6461b71791287fb66f6545fe47846"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "17a1c51c03ae85d49227366485b58952"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "d1b9633cf4ed666de6550cdacac72a97"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "96602fbe72418fa6dc68e3faea79d461"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "630364b63b74ffab826fd4a1661619fc"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "6425c942e919ad796d902a154802a5d7"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "009fec8c0c56f4699e4b9622d4a66adf"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "7cfa85375309bbe85d2e5006ec10db7d"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "a55602df59d7368c4be8e9dc523c2734"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "c3dda66d0a543f4c1f9c14d0bc4142d4"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "bf50ea69ede6861e6af60e26dee1662c"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "1abbf814811c7acd8a3de497b15466b2"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "da6bc48b97aea2f9baa0bb61c6d4cc8d"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "ff1806f9cc1f662059810c14f8b0e524"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "3ef2512b964cb278d4251b00eebc76c7"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "0dafa8402cee51eb55e1f33f3cb60785"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "2009472565cbc3d6995200c09b9a3f2f"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "96912bcbbf0f7d58602c4f67a464bf6b"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "63ff92c775c25ddf73f933eea2231545"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "dfcc90b3d8a5b0042b72d9ba4084385a"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "14e359d32eab93fe00f48c1dc688b3a4"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "363bee5a405e12093268b5891ced20f9"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "5b2fd136db65399b7938e1eb63afa7a6"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "a1722821781ab6f442fdf0419182effc"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "7de94d289b9f1101c6becc175774596b"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "386c870a2b6146aa838e33908c22f2f6"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "9b9c7b71d0b34cf1b2bdad225ccd5e89"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "e3f3c64ecb71628b0c7bcf53b1a0cc40"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "24190d1e01eb9b97c501f67a00db3712"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "0dbccf87aca8cf96ed28270becc04b6a"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "39033fe42da2c4503c0165c9c81e8df8"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "b1c8cf28ed98a57d0cb4ba2e6e74c356"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "97e0676caea452a15aeccbcbd6a1617d"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cb511e337d379af548e89b5bbb40eb67"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "8392eb381a1e9c62a720becc4050d937"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "88ad9a614da4e3e9d7c000c8bebbe5ff"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "5e2bbeb0a900030f191f9f30f1366f88"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "ca98dbbf148bfec12fc566aca0744339"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "8524f52b976c46a98242be3e009d56c2"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "99ffdb596ef12ae7ca75b7cb4af1c9cd"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "140b3c95a0a1cace6b3d855719e62de1"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "530e5ac0688f173e1f6ad58c67564881"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c0b847301985a11eba20386a1a8c3c25"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "4290548daa83ff863fd9679eaec52644"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "0c4d83fceacd2fa5c13d39887a1c41d3"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "fb2b7652cce142184f49191a1007986f"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "bb9e5c66786114f8716f7bb267624664"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "debd1219ec05c115fd1993c184802a4a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "957410da3c4fc32540b32c8e02e5e949"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "f02aecc8158c243e43df3498aaa8a9cb"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "7a087d99ae88ba707f19c9b53fc325db"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "cc7083db6816e9df96b67b9c7ba55ea8"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "7b5a6a209fccb7064854ae475d5756ac"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "c5e9013e062fc8656b5ef4996d23e771"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "314b28159a28764d95473c7b65d09869"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "1120abb28f75e036c2a58bae25cc4dd7"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "b0c1e2263d261b435481665d928140b8"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "2b3f3c1b75afe49c388157ec122ef202"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "2f8dd1c067cf4ff9a3b576a22bd2a395"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "290b8b96b4e84d870db99ea715ff0475"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "a1c726f41286cca646e38b388938625f"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "daacd0d840161e831df2dbfd5c7f3966"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "436ac6f1e549b413742840c6c0afe9a3"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "0e5e23e8b4f8b384c140bdee83f13f16"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "d06f33a3eadee5c5b23e961ee6ee229b"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "6693ecf5a9dff801dd76440bfd81f677"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "9c8abb49bb717c2804062dab0de80e09"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "2117e0d7aebdfd66f04e509661c1f45d"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "6b07243ad36b7f8a39f965132a65fe42"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "354516836d5b6222e5b2b59d12b1f143"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "2a04b64c8ec9506513d94393c5c2ea62"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "9c0fc26c32851b8de429da0b0af32ae7"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "425069f16b03f3a4e1b39da35fc85305"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "90f7b04eecfe1cebd0b42a39d85b6897"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "e5347cb49e9a024e94ab59cfa1df4d86"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "f357159b62370aa19ef284c6a8b0105d"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "030cb2ff4b18a328aef15da2cb5c2333"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "c4944fd45a7322623122a009be978fc1"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "cf8b8c85afc3c76228f454a0428c832e"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "58516e379c7a5c9252a1b8efbae3eb06"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "068970361a5210b72616a51bd3af30c4"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "fbdbf922ed092329e09ead4d6b2feaa0"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b8fb886c00b16713a666158ae3f9fa9d"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "97e285f1aac915615a9d139b05a17e37"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "9dd338609ebc99f05702b223045fb3b9"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "3c6ed182b1430e519b0f175900543968"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "4a3ecbbeae31b767b89b42f510bc80ff"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "87bb2a1fdfb083cc713edaa6b36a8cca"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "716d2fbd84b857029db05d9fafee7b50"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "a20a561f0ffe9dfba856ab01deda9415"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "f02f1d54fa7d0c6dc712270af605a52f"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "0d8181a47ca5e69adc43e656ffb3771a"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "683a5feac711221d7b5c213d38186cce"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "fec443825b19d3118a6d76fedc3b5fb5"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "c1d86004e2e7ca5bf670b71b8e5f101a"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "df0f669161eec41ae42b38b7ca0de715"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "b097e6b2e2e1ce0f6274b01f80bd5e0e"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "a25d8947e7dbd7b00a720cceed18f284"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "83ab9042ac4cbc0511ec9951ece05ee4"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "2940b47e33951e4aa1b603436242e0a8"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "98c95e180de46ff2f686abadfd9c9e0c"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "a63df5a36d9a66d281d3d0abcdee31ba"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "9e57d7fe2f8271d00ffeace835f7335d"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "becd63739c3d85f25b9b8b652ec5d9f8"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "bda19b5300cd05dad7757ad12dc18c9e"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "7ad80523eb73460317bfd893665234d9"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "270c62320c61dd53dd6247cfdef6ec7f"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "77dab3fd543e0814d20f4012da7ce4b3"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "19b3b7bfcc9a9fb8aee14d14dc708242"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "cd7373b71bc4ac400356deca2e3d5802"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "76a5491ff27d710e5023dbd966ceec66"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "a0e58c51c2b74ec1b9040f4c7adb9917"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "91baeccd3738e21657b3130c5884a87e"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "44dd9d35c8870d793f67dc0177a6deed"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "edb6eca5c50e33ab88afac331cca31d2"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "c8e26e062c9adb4c3c331de790e77392"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "78e9d47b53749b275be8bffe11e27fd2"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "15c661da7b0994a638b4a494856abf08"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "e7ef3d085ab1ba5da6ff05e588618de7"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "8afb336f466e4e0e4b4ba30406df16f7"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "9226cbac8cec0853d739640b91142db5"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "cfe68642b4b18de647e98625603aef98"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "c17729fba7c3d7504e7817f1a3c7ae5c"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "757411b03192e0f3f5f2fce4d8fdb839"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "aabb2fc5d977941830153ed6ca0b7a05"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "7a6ca54b3e4a13b478095905714ce1ee"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "c708cdd4cd864d766da942b385031c24"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "ad7f13ea6fa818a4a42dd94166fd7680"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "cfa9018c80eeb264871057347435175f"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "0c094874183d089522a017ac320cb8e6"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "21c4e24c785c8cb6ab223c5de6e6057e"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "43d5bebd08c51d63a00d44a361c21b15"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ad07b6a9a9109182cf6c51697d10a82f"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "4d314fe58d6fe1ca1d995c2abebc9d1f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "e84402c9e1df7e090c52c048aa277c86"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "0c7b26bd45228c5eef652784cf9076b5"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "a2ba9a13c449d52b373d1539dee07359"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "fa8bd921066d2356c5d0efbe3a094c69"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "5367d2fe5c81612c4c66356d5ca29ddd"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "9f3ef7b6a5f2bc3dbc9c04413c3f7bff"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "fac27639f031cae32b30f39fac8a3901"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "ed536afb1ddd30f02f4942c98060b9dd"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4c9572c451ce4d8363829113b651f9a4"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "d096bca8b131b2a1cbed7cb0714b5ed3"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "e731cb94b91833ef0d0e90e09a05ac6e"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "287b391a88cd2947eec3dcd448680974"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a0140d968794e08eca1ecc1d851917a1"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a2ddb151c96e8036ff2490bbd69a92e9"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "d5d56ce7462b3586329e25b61426c03e"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "c604ecb847e997b92291f72f5a428c80"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "b12c42d5b43df5be80cc463a6a85446b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "89fe953aa3c720ca913fe6bcadf1966a"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "2cadcb12ae972f27342e06c08fcad5de"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "53491422d36babc40f0a4306dd3c3bb7"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "da21812d3db6309d5df58a7de1823fa4"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "b0f7a2d1d7ab06513209ef401bfb7637"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e13463612b4ca672e5f80f950fb5d0a8"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "fcf745d363d49ac67d081b7a84cd7e82"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "a2f83bd98b47c9a34c1058e7c58edc82"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "e17aad67b2ca0ccd29051bf375c31752"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "d9cc9e4092225735c6cce71ccdac6222"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "3d74dd51b058c029a32ab70727f288fe"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "17fa84cb79ca6c82aac3e06c0005d82c"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "fc8dc01dbd6a543b1e136bcd41a7916d"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "30fb5351969c648ba3f9e1805ff41e86"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "df8a2ccee9d1e6463e263bb7ceceedef"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "4b9e9aac85cf736f9fc8925d68958434"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "1558ee606761ee15afac099b0ad2a180"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "9c9e3ce92b74703115f93c1f464e4d16"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "153825298b0ff1bab6f33a19557880c6"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "ff148453633aea1bba4183ae5ffa9797"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "8725daa341c71c130f89bfb6aff325ad"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "3b897fcdbdea121de2771604776763c3"
  },
  {
    "url": "404.html",
    "revision": "e761bd1ccdea6ef8aec32c0bdcd56629"
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
    "url": "assets/js/1.c221fa01.js",
    "revision": "629eda5394e941a87bce0fe900b1b47b"
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
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
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
    "url": "assets/js/105.86252d99.js",
    "revision": "5263930e32b33981fb74ff9c121d4b06"
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
    "url": "assets/js/108.8aa12172.js",
    "revision": "636a77cfe260b51b0fb032ac3a42f865"
  },
  {
    "url": "assets/js/109.b27d066a.js",
    "revision": "67d59863fe0219fef4f5ab123db5bde0"
  },
  {
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.22d8e9c6.js",
    "revision": "d4f7edd187ef74b4ea9adcf8457b3d41"
  },
  {
    "url": "assets/js/112.87f39dfb.js",
    "revision": "9571abe6c91af776b2e1288fad9e3c26"
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
    "url": "assets/js/115.ace92a31.js",
    "revision": "5339db492c64ee88c96eefb0593d011a"
  },
  {
    "url": "assets/js/116.ec5e70f2.js",
    "revision": "a6713637db22ad06c06be7a85d665f5b"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
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
    "url": "assets/js/12.ffb79c3c.js",
    "revision": "116ca60d4b24eb41276c2f4870f75771"
  },
  {
    "url": "assets/js/120.7dd18ad6.js",
    "revision": "8675e524104bc3e7e5ef83c04e007ec1"
  },
  {
    "url": "assets/js/121.f205836e.js",
    "revision": "45d08c9851ed759986221733eb845c89"
  },
  {
    "url": "assets/js/122.fe671a70.js",
    "revision": "8bfe723f8103c03da3dd5ae2e43652b3"
  },
  {
    "url": "assets/js/123.b977b17e.js",
    "revision": "cd120e8c972a8882950ae1fa79ccb78a"
  },
  {
    "url": "assets/js/124.d6723cb6.js",
    "revision": "bab0907a806e08d1fe6f1e7c3114d64f"
  },
  {
    "url": "assets/js/125.fdeb6d0a.js",
    "revision": "12ea5c8a86ff6d3cb68491124537765b"
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
    "url": "assets/js/128.7a601b88.js",
    "revision": "01bff60c4d1acec72258bb803dba29a6"
  },
  {
    "url": "assets/js/129.6aab2d9e.js",
    "revision": "3b2c518910fa308243a4be198a090b01"
  },
  {
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.f3b3fc93.js",
    "revision": "476087781f3b7af01db72a8658b8a237"
  },
  {
    "url": "assets/js/131.07bc9d2d.js",
    "revision": "0af40ba0b9239db6cd9bae329726ef51"
  },
  {
    "url": "assets/js/132.63a96d74.js",
    "revision": "bd24a5d4edb7527977814edbc837c606"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.9ee8f373.js",
    "revision": "5390e7b3d5ee9557632e10ce89550a6d"
  },
  {
    "url": "assets/js/135.3a6094ab.js",
    "revision": "8c2ae43bae873db764f2fd8ad64d79fc"
  },
  {
    "url": "assets/js/136.6add43a2.js",
    "revision": "157976cc365b0237f90b2f3976893d7c"
  },
  {
    "url": "assets/js/137.79984dd5.js",
    "revision": "3770174abeb10be86079199ec11cf054"
  },
  {
    "url": "assets/js/138.4102e4f4.js",
    "revision": "9f5c7810e3cd9b2e895c23b694fdb702"
  },
  {
    "url": "assets/js/139.3922c9e0.js",
    "revision": "ad259713bce66225c263912872852193"
  },
  {
    "url": "assets/js/14.7cd892f8.js",
    "revision": "aefe0fe34c7e7ccdba6b3a048f44780f"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.ae538fae.js",
    "revision": "46e6c0fe4cfe92f41d1103fcdf781317"
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
    "url": "assets/js/144.828a0a88.js",
    "revision": "837a72d21cd30cb37b37f3ae9f818e87"
  },
  {
    "url": "assets/js/145.f93a3df7.js",
    "revision": "31ef87d485b795ada98ed102603bae34"
  },
  {
    "url": "assets/js/146.08c25ac8.js",
    "revision": "4c0577f024ddec7cf5a55c77c9d214af"
  },
  {
    "url": "assets/js/147.4aa524b3.js",
    "revision": "d8f1f1fe6900214fc324d2103493e947"
  },
  {
    "url": "assets/js/148.cfb15dda.js",
    "revision": "b701e82424306d793b30971094e43c9a"
  },
  {
    "url": "assets/js/149.97fa4a1e.js",
    "revision": "89fe2d341ebfbb556bda6ecdce4bf15a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.ab536088.js",
    "revision": "b7afdf777ec0b71f33d2772727dbc234"
  },
  {
    "url": "assets/js/151.fc6f7999.js",
    "revision": "db641d3a6f15975fff9d027e67c9ee30"
  },
  {
    "url": "assets/js/152.b6babe69.js",
    "revision": "dd0ac91dabaa2bbd6bbb6e7f5be5c42a"
  },
  {
    "url": "assets/js/153.882fb313.js",
    "revision": "77e75c7ec8e71be926c89751f87d3b73"
  },
  {
    "url": "assets/js/154.337a4a30.js",
    "revision": "353dc9af415e6de4ba764c76a53cec39"
  },
  {
    "url": "assets/js/155.45a80ad7.js",
    "revision": "eb9c07c5b3272fa1894ce3b6c9d30d66"
  },
  {
    "url": "assets/js/156.15417dc6.js",
    "revision": "b03e0ef9b691b0287e3d70e2ad210993"
  },
  {
    "url": "assets/js/157.b5fe8388.js",
    "revision": "f4f8e69dc48430958ebe5fb5d09dc2b1"
  },
  {
    "url": "assets/js/158.f683c460.js",
    "revision": "27f17e3f0c7554f240c91b04a85af2a7"
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
    "url": "assets/js/160.bb3fd589.js",
    "revision": "cf9619d8ed6fe7f06d37eb794ccd8396"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.a64b4dc2.js",
    "revision": "b94b754a25a4eb59ecdc66f7bbf0e88b"
  },
  {
    "url": "assets/js/163.c133d293.js",
    "revision": "3015cdc24bb3a11ec3df279adf3ff0f5"
  },
  {
    "url": "assets/js/164.9d007acf.js",
    "revision": "cd6ec6943ea296ad13a2610b9c55d3e8"
  },
  {
    "url": "assets/js/165.80fe025b.js",
    "revision": "ebf056adbf2fc93091a701f10f378874"
  },
  {
    "url": "assets/js/166.ca2f4a02.js",
    "revision": "37c3f56f927899c68698d347f5dc116c"
  },
  {
    "url": "assets/js/167.5db9d448.js",
    "revision": "9b407df96d89c06568c20e9db3185ec2"
  },
  {
    "url": "assets/js/168.27cabced.js",
    "revision": "fe0243454c5c9d7f8585793662430ecd"
  },
  {
    "url": "assets/js/169.37beff22.js",
    "revision": "80b5276b7c447cc9474e048e550b2bfa"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.1ce2f288.js",
    "revision": "8288419db7f5e2c6b74fadfa1ddaa6f3"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.c608ec58.js",
    "revision": "8bae9ff0fc70c36a5a96ab2c8235546c"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.75257b82.js",
    "revision": "837fa688422407823ff1546588c23423"
  },
  {
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.dc65ca54.js",
    "revision": "4b462b75ad5aff2371c838522702b89b"
  },
  {
    "url": "assets/js/177.999bb726.js",
    "revision": "bb381152f759b537924415c4a4cb20fa"
  },
  {
    "url": "assets/js/178.c8ea6152.js",
    "revision": "1b38eb3177aa4b092cae45b265061e1f"
  },
  {
    "url": "assets/js/179.4dd1d482.js",
    "revision": "6500eb7f72eddaa460419f68c66aa83a"
  },
  {
    "url": "assets/js/18.566e4cf6.js",
    "revision": "ec20304394d5a34cb4d8aba229da6a42"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.501640db.js",
    "revision": "a7773615484e7983205529d2324deec0"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.879bf1e0.js",
    "revision": "88b8d8dc2e930385bb427fabd1fca8c0"
  },
  {
    "url": "assets/js/184.56fafaeb.js",
    "revision": "c14ebfbf7ee4997510a79ec76188e680"
  },
  {
    "url": "assets/js/185.90e29939.js",
    "revision": "69423cb2315d672dc69664e4d894cfad"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.0f3de90f.js",
    "revision": "8d0adb5e35defb3337eab26f02735513"
  },
  {
    "url": "assets/js/188.c463a603.js",
    "revision": "0802b2de7b39e53777e9c4f9bb43d89d"
  },
  {
    "url": "assets/js/189.4715f2a5.js",
    "revision": "202535dbcf1f376c2cceeafc708eae71"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.bc8d2ea9.js",
    "revision": "219ae1bb3b222e510da6162775b2bc01"
  },
  {
    "url": "assets/js/191.fac77b20.js",
    "revision": "f8a58bff70ca49a001e9502215dd7474"
  },
  {
    "url": "assets/js/192.343688c4.js",
    "revision": "3a5d73ff519d2fc827c596946ca9ade5"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.e357447d.js",
    "revision": "2cc5d6b09c56bc1770af99e293c9f861"
  },
  {
    "url": "assets/js/195.4f9d564c.js",
    "revision": "07dc3036fb9d1ec1375fc4115c473b2b"
  },
  {
    "url": "assets/js/196.88b21837.js",
    "revision": "21f2520a245d534575246a63c44f684e"
  },
  {
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
  },
  {
    "url": "assets/js/198.14ca99ee.js",
    "revision": "fdccb7ef2cb839079497012ec69b763e"
  },
  {
    "url": "assets/js/199.76cbe7a1.js",
    "revision": "b528c888af981f08cf7b73b723843175"
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
    "url": "assets/js/200.fd71ddaf.js",
    "revision": "6398dedf004e125ebd9e6779007d1bda"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.746606f1.js",
    "revision": "2729af8de17dba50fac2668a7b7cdf17"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.f5e16eba.js",
    "revision": "356ec1c0efcc92f767536bbb6e700b99"
  },
  {
    "url": "assets/js/205.808e0d49.js",
    "revision": "b26dd38c5176e5a63f9b239ae643b864"
  },
  {
    "url": "assets/js/206.6e42a2de.js",
    "revision": "2ccd80c16825ba77ca8538af00312115"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
  },
  {
    "url": "assets/js/208.0584a09e.js",
    "revision": "288eaf3c722ffd4a08e14486a963f514"
  },
  {
    "url": "assets/js/209.e936794b.js",
    "revision": "08b643a93ca1ad39ed612311be122e8f"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.3264c2ad.js",
    "revision": "4703f779e42ce434ea17890737e7a326"
  },
  {
    "url": "assets/js/211.358337f0.js",
    "revision": "3d987aee2b249db79e35adfbef4fb701"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.56e4de65.js",
    "revision": "70c1267b20d14953c3564a95e8f1bf69"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.77c29208.js",
    "revision": "dee62b23365a26c208104782303e44e9"
  },
  {
    "url": "assets/js/217.d2b1fd07.js",
    "revision": "a98b5665eae7aeda07b95cfa25d28281"
  },
  {
    "url": "assets/js/218.a1a6eaa8.js",
    "revision": "65f39a01aad20a27425bc6305a1c4154"
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
    "url": "assets/js/220.a7362372.js",
    "revision": "e880839f1d0570f0cfac628e05837719"
  },
  {
    "url": "assets/js/221.1259f097.js",
    "revision": "94305f35878a1a40bf913c76ae32d73f"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.6f44bfe4.js",
    "revision": "1ae2b23f0528e2a1c583801b1bb31ddb"
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
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
  },
  {
    "url": "assets/js/227.18bbe3b0.js",
    "revision": "097b03d3897497fb145fd6c7a585b263"
  },
  {
    "url": "assets/js/228.32cb9930.js",
    "revision": "087eb0c04175808f97023170eec57bb7"
  },
  {
    "url": "assets/js/229.b2c00283.js",
    "revision": "7c0241b8e51c6c90c7a9a1013ccb58e0"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.53e0900c.js",
    "revision": "92dd283cdcc0df47a51d03094b9843a3"
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
    "url": "assets/js/233.ab5f45f0.js",
    "revision": "4d6da73955cfee870e3a6e1d33c6986b"
  },
  {
    "url": "assets/js/234.34c9637a.js",
    "revision": "df17e14d58acea1128e82e01063ef472"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.bd165f92.js",
    "revision": "7f17b7fd77c6cae6f422dca395e26756"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.a39f992e.js",
    "revision": "6f50e2d5c6fca85422da33274e3a9773"
  },
  {
    "url": "assets/js/239.67d6eeaf.js",
    "revision": "34ad4bce7655e650af8b9998c2e5fe15"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.cebed9f6.js",
    "revision": "1374c912ec3084b6ff23b737cf807d91"
  },
  {
    "url": "assets/js/241.91243411.js",
    "revision": "3fbdea6da4d969e9bf4e7cae1096ac73"
  },
  {
    "url": "assets/js/242.577871f9.js",
    "revision": "3118bb77ea22f9254197913a0d7352bd"
  },
  {
    "url": "assets/js/243.6cd805ec.js",
    "revision": "060d48d789ea224b0c89cf225497dba4"
  },
  {
    "url": "assets/js/244.33a916b4.js",
    "revision": "f3a8f5a2a3abfdc25b976ec5bf5084f5"
  },
  {
    "url": "assets/js/245.229e4045.js",
    "revision": "a36b119654592f9f3a07603f9b767bd5"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.ad3b2f24.js",
    "revision": "f2f863c711a8eb05b5973b4a938ad8e1"
  },
  {
    "url": "assets/js/248.745c97cb.js",
    "revision": "b347751a8b6f23e2f07906a34dcf5b98"
  },
  {
    "url": "assets/js/249.43228c49.js",
    "revision": "2410ce6b04d30f1bb5ef24c99489c090"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.256656af.js",
    "revision": "a005fcf30b111aa3009f02a11cdcc7f7"
  },
  {
    "url": "assets/js/251.b2534066.js",
    "revision": "bd12c78dec51fde473c076236303290c"
  },
  {
    "url": "assets/js/252.18a1554c.js",
    "revision": "ca148aeb60af195f314a1839d9b768a4"
  },
  {
    "url": "assets/js/253.91a3a85c.js",
    "revision": "96bf63a2d6bee6dc22854b5350fe9198"
  },
  {
    "url": "assets/js/254.8eba4a3b.js",
    "revision": "4b8779612404f1760ceb90033d688214"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.0ab11890.js",
    "revision": "e1c00c96432c1c01fef491ecb086a91b"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.817b9290.js",
    "revision": "4753bf94e8853f5d72038049a9fd8209"
  },
  {
    "url": "assets/js/259.b2377597.js",
    "revision": "69dddfe3714bce107abfc30609852b15"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.7a9b1c49.js",
    "revision": "97c2b756da1fbfdd3ed7bd277353401b"
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
    "url": "assets/js/263.794b4ade.js",
    "revision": "6d150d2bb48f51c21be763ab75e2f435"
  },
  {
    "url": "assets/js/264.42ff4322.js",
    "revision": "9a801f750d0d3a30aa4a68ec361f77bc"
  },
  {
    "url": "assets/js/265.a6502645.js",
    "revision": "fba3b00ec48769be26c7dbcc0b6f76f3"
  },
  {
    "url": "assets/js/266.8778c1e5.js",
    "revision": "54bb316184e94987d9e910e0a1f668ef"
  },
  {
    "url": "assets/js/267.015fdcb5.js",
    "revision": "84026697b2d9640cf2fda1d68db52c78"
  },
  {
    "url": "assets/js/268.75c93b25.js",
    "revision": "5c90b619303a20a1118d55ed4210309e"
  },
  {
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.a4054e45.js",
    "revision": "2749ebd05c6bc16633dd113f6cad060a"
  },
  {
    "url": "assets/js/271.feef3b6d.js",
    "revision": "a5f99045233fe056c43d112cfdc3f461"
  },
  {
    "url": "assets/js/272.2753534e.js",
    "revision": "389676f99e83994f7acc87a9d8c02eee"
  },
  {
    "url": "assets/js/273.64763498.js",
    "revision": "8fa6381db8f85a257939d7aaf29bdc3c"
  },
  {
    "url": "assets/js/274.f83a7a29.js",
    "revision": "a9a0a6a575bf3530aed140232e8da5eb"
  },
  {
    "url": "assets/js/275.98d1c3ac.js",
    "revision": "07c477f77d2b69c3f314537e6677f201"
  },
  {
    "url": "assets/js/276.c6e70ddf.js",
    "revision": "3f950398bfd73b6a108c7c358f8e5fce"
  },
  {
    "url": "assets/js/277.1c6127ab.js",
    "revision": "2371e334d929a1aab94f023099b6d706"
  },
  {
    "url": "assets/js/278.ccb58e54.js",
    "revision": "823c389549611813f1be27d4321d00b4"
  },
  {
    "url": "assets/js/279.20805f1c.js",
    "revision": "3b37e8070d1f0d05e52dbaa93c19dc3f"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.a1be0ee5.js",
    "revision": "3542189579e61827c72425f3e9dfb930"
  },
  {
    "url": "assets/js/281.cb3383e8.js",
    "revision": "5d885c8a84485c752d696ab4793d82be"
  },
  {
    "url": "assets/js/282.2ba96404.js",
    "revision": "df5c593fac65258ee749c124b300f417"
  },
  {
    "url": "assets/js/283.e0d1c975.js",
    "revision": "92874f7f6048ba432737e990ef441d0b"
  },
  {
    "url": "assets/js/284.3f7a0653.js",
    "revision": "30ca83a64034ea72fd50d4cc05ca4ea9"
  },
  {
    "url": "assets/js/285.f7ed5fc9.js",
    "revision": "e994ba5e6203fb17579e493615e2d64c"
  },
  {
    "url": "assets/js/286.ebfb5f8b.js",
    "revision": "a415dcc48b51cdf644c6fd085eb85013"
  },
  {
    "url": "assets/js/287.1c3ded73.js",
    "revision": "9cf2d466d903e77ffd8e584837e7b1d8"
  },
  {
    "url": "assets/js/288.6f9c0355.js",
    "revision": "10be28125f894f96cad89a288295c8a4"
  },
  {
    "url": "assets/js/289.ba973681.js",
    "revision": "5d05db1b154f7fa33e10ae1b39e616a3"
  },
  {
    "url": "assets/js/29.e80d76cc.js",
    "revision": "3f394b1c856af642d93a722bc58ab926"
  },
  {
    "url": "assets/js/290.1b4a5baf.js",
    "revision": "6738f041b57fc40a32056715c4ae3d5c"
  },
  {
    "url": "assets/js/291.e5ad4f79.js",
    "revision": "88766146bf99941712d9b68cdcfd09c2"
  },
  {
    "url": "assets/js/292.8febd0de.js",
    "revision": "08281302e609a1253e5a3274a57dcb47"
  },
  {
    "url": "assets/js/293.5e7c162d.js",
    "revision": "c1867d22a9c9abf6674a260c32b5d023"
  },
  {
    "url": "assets/js/294.61422d28.js",
    "revision": "754c6275f0b44204c5e03218987def6b"
  },
  {
    "url": "assets/js/295.54db778d.js",
    "revision": "0db7319e5fbde5f6eb9e215c814e943d"
  },
  {
    "url": "assets/js/296.0afe4138.js",
    "revision": "2d437c599334c24bba90cea2e33f0835"
  },
  {
    "url": "assets/js/297.5717a3fb.js",
    "revision": "8d1934f78cd1cca4ed0efb75ab6040cb"
  },
  {
    "url": "assets/js/298.f6b2fd32.js",
    "revision": "df000239b0f303b9cc3490dad15f2672"
  },
  {
    "url": "assets/js/299.5d9d3e25.js",
    "revision": "8e8394f293fb8845478c7beda5674a6c"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.e3381a99.js",
    "revision": "e663c074a275f51bfb51937788a7c070"
  },
  {
    "url": "assets/js/300.22b8da42.js",
    "revision": "fa849590d50dbd49439b34e07872108e"
  },
  {
    "url": "assets/js/301.c8112bc6.js",
    "revision": "f2535e829f37a85547d8c5dd6147b4fb"
  },
  {
    "url": "assets/js/302.efb4e783.js",
    "revision": "9adee5d6b34d291d0f073c65fc7ab0a1"
  },
  {
    "url": "assets/js/303.8f1d947c.js",
    "revision": "ccf48a9eb277c4a2b69ac8096855e062"
  },
  {
    "url": "assets/js/304.a8a2ffb7.js",
    "revision": "6cf0c9d3fb44d45de34c90aa0e81ce50"
  },
  {
    "url": "assets/js/305.6fad1265.js",
    "revision": "e3176ff761b43b29f84f101aa444dd95"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.e3d4f977.js",
    "revision": "7c61204fe3df92a3a62f85ff1b9948ee"
  },
  {
    "url": "assets/js/308.83020f69.js",
    "revision": "0b9de764f9484d3d7be80f344dc5b498"
  },
  {
    "url": "assets/js/309.7bc50092.js",
    "revision": "c8dac9857ccbfcc9b4ef553c35868884"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.ae8c47e7.js",
    "revision": "5b6d4cd43a82ec7a145c61c214b201a1"
  },
  {
    "url": "assets/js/311.d57201d0.js",
    "revision": "3ee9a54ccbc88ed54ad0f0b20e957d67"
  },
  {
    "url": "assets/js/312.6099d444.js",
    "revision": "882e498d1598e03f04ee81a935f593f4"
  },
  {
    "url": "assets/js/313.2702785f.js",
    "revision": "802aa8ba6829c9639bc06a9474244c04"
  },
  {
    "url": "assets/js/314.ed0a7b44.js",
    "revision": "c607590b967ac4c67237653eef837a7e"
  },
  {
    "url": "assets/js/315.4e502835.js",
    "revision": "8a1beb61d149da672dd60fefbb587605"
  },
  {
    "url": "assets/js/316.be61993a.js",
    "revision": "0f0eac89675ddbdb5d0f37d439062821"
  },
  {
    "url": "assets/js/317.80d65d01.js",
    "revision": "af37c8afa5bd984ad9b1768a3b9e8ea4"
  },
  {
    "url": "assets/js/318.1b873100.js",
    "revision": "fafaea8730e59f49ecfc18cdfd18f44b"
  },
  {
    "url": "assets/js/319.33fb44a8.js",
    "revision": "3bd6c90d76cd42633c98b5d45c337a72"
  },
  {
    "url": "assets/js/32.6f7b5c22.js",
    "revision": "4b2abc55d151282f83bc35f2ca827251"
  },
  {
    "url": "assets/js/320.7f76db87.js",
    "revision": "03d499377d7844a1bb43e65eed25974a"
  },
  {
    "url": "assets/js/321.8efffee5.js",
    "revision": "1288f3cd7753f16027379aed61cec08b"
  },
  {
    "url": "assets/js/322.b8152af3.js",
    "revision": "923bbbd22f057aa3bb26458444726957"
  },
  {
    "url": "assets/js/323.eb47bc63.js",
    "revision": "abf262798275457ef7d603fb88976ed0"
  },
  {
    "url": "assets/js/324.e87239e8.js",
    "revision": "934f6a0d70b977aaca38caae755051c5"
  },
  {
    "url": "assets/js/325.6b2c2b45.js",
    "revision": "ebabc267a55e7c080ce22fbd108860af"
  },
  {
    "url": "assets/js/326.57d50319.js",
    "revision": "b5423b1ad64ecbd516613bcdd2c22df8"
  },
  {
    "url": "assets/js/327.d565a148.js",
    "revision": "cbb45fc9912d7252f01b5c20beb98542"
  },
  {
    "url": "assets/js/328.82e5b31b.js",
    "revision": "d38174eb33e89321eaecefa088490f52"
  },
  {
    "url": "assets/js/329.0b0d2e61.js",
    "revision": "02403399ce862c9fb6c6686c1e94d60e"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.0aa72121.js",
    "revision": "529570568aeaea4566aeb240d5f328d5"
  },
  {
    "url": "assets/js/331.87d65dc7.js",
    "revision": "c789a95e4f36e656e9e786ae92a246f7"
  },
  {
    "url": "assets/js/332.255609ad.js",
    "revision": "6827e8eda47a86613fb0cfd6ccc34e26"
  },
  {
    "url": "assets/js/333.32e23ff3.js",
    "revision": "0dc35e31ddd9c1af9566b7a7c76029d5"
  },
  {
    "url": "assets/js/334.6aab50d4.js",
    "revision": "a7d04b932485a9294bc77e595b309931"
  },
  {
    "url": "assets/js/335.04afb535.js",
    "revision": "cb9cba41779c6f395b176fb24743982b"
  },
  {
    "url": "assets/js/336.2f22cc8c.js",
    "revision": "98a6988bcfd558155a194d7bd7305de7"
  },
  {
    "url": "assets/js/337.97b8aee1.js",
    "revision": "c06b425961c3a82341695915e03b8ee4"
  },
  {
    "url": "assets/js/338.d7060fc6.js",
    "revision": "fcd5ad7b13926f3f63e40bbc59e4f826"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.2c29924f.js",
    "revision": "b5126cdf92efb7c084b57af669f20950"
  },
  {
    "url": "assets/js/340.e5c3cea7.js",
    "revision": "9aab280f2e68224500698aa6db93effb"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.499ea2ac.js",
    "revision": "290ef33e901ed669ee04a901a08f4fbb"
  },
  {
    "url": "assets/js/343.494f94bf.js",
    "revision": "c465a5ec806d92895094621a10f2461f"
  },
  {
    "url": "assets/js/344.6d9f505a.js",
    "revision": "60595e1e8c0abd34df47aae9d889d840"
  },
  {
    "url": "assets/js/345.b09ea276.js",
    "revision": "97fe8ab405d4ae7f12248def72484352"
  },
  {
    "url": "assets/js/346.cbaab14d.js",
    "revision": "ae931616a2e5ba31e591ae4930a75e5a"
  },
  {
    "url": "assets/js/347.f517e4a0.js",
    "revision": "5a61ea8c20565e50b4da5c3d72bc04d6"
  },
  {
    "url": "assets/js/348.23321f6d.js",
    "revision": "bec645143d7721cb64737ba19e3b4c00"
  },
  {
    "url": "assets/js/349.cbc64ac0.js",
    "revision": "2f24196a3e1cb37b1ed71dd1440e66d8"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.d10638cf.js",
    "revision": "04bd237ffb7a2931cc0a6890a31ecc66"
  },
  {
    "url": "assets/js/351.b14746f6.js",
    "revision": "07f0439cba8b9074f548cae85e280e9c"
  },
  {
    "url": "assets/js/352.92b6b6d1.js",
    "revision": "57ca8cf877eb4593f907a625e62b3a47"
  },
  {
    "url": "assets/js/353.791ef73b.js",
    "revision": "4220a1e6e9afe0c61ced022386a15453"
  },
  {
    "url": "assets/js/354.8da51156.js",
    "revision": "f3eeb914c9ee35acf7b9625b3615fe79"
  },
  {
    "url": "assets/js/355.329e120a.js",
    "revision": "a442ffc6e53e1f0eb11e624a0081007d"
  },
  {
    "url": "assets/js/356.48ba1e85.js",
    "revision": "93563605329130e227bf30c72c92270a"
  },
  {
    "url": "assets/js/357.bfe748a5.js",
    "revision": "61fda4cc5b05a9dac29a85c551cab84f"
  },
  {
    "url": "assets/js/358.af7d804b.js",
    "revision": "6136c21a30104da8013afe395eac1c9a"
  },
  {
    "url": "assets/js/359.e6e2b2d2.js",
    "revision": "04ef1030238fc00070d7aff145417d17"
  },
  {
    "url": "assets/js/36.08cfec20.js",
    "revision": "657646ac0c5a7eee8cdf3bd4b90c5d48"
  },
  {
    "url": "assets/js/360.b1cc1c65.js",
    "revision": "b2777fb614849fc2c4425d55a3bb83a5"
  },
  {
    "url": "assets/js/361.4b0aeb9a.js",
    "revision": "82903a02fd890eb01e80ad3198c623bd"
  },
  {
    "url": "assets/js/362.ece51859.js",
    "revision": "f840a0065ce5acfa6df6becd653fd84c"
  },
  {
    "url": "assets/js/363.fe683d75.js",
    "revision": "6693be4b323f33f3baf27d62a29239ad"
  },
  {
    "url": "assets/js/364.13b15700.js",
    "revision": "30b5aba9919169b0bc50e409fb584857"
  },
  {
    "url": "assets/js/365.decc15f6.js",
    "revision": "12d7c3b4790b913143e4db7205899d8a"
  },
  {
    "url": "assets/js/366.64648f19.js",
    "revision": "e198677b4ab8b77ca1d0787135b814ff"
  },
  {
    "url": "assets/js/367.33f51654.js",
    "revision": "845686c2e3168386786f0b78a552a215"
  },
  {
    "url": "assets/js/368.74aafc99.js",
    "revision": "93486cbe6e1c50b88692f950fcd17ed8"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.d07da25b.js",
    "revision": "2dc02a0c64c74c692ad2bbba415778d7"
  },
  {
    "url": "assets/js/372.3e1172f3.js",
    "revision": "48eef3c61fe91ac6d1b776443884d49e"
  },
  {
    "url": "assets/js/373.ec6e8702.js",
    "revision": "d5e7b79fc243516d40206124874ec1c2"
  },
  {
    "url": "assets/js/374.58f9b08a.js",
    "revision": "62c1926c34fb548530140d27de5203fa"
  },
  {
    "url": "assets/js/375.ff7bab23.js",
    "revision": "c20e7844cfc0c55d005b8d0c0df0c818"
  },
  {
    "url": "assets/js/376.fb95ccfc.js",
    "revision": "90b0cbb4daea139c8ea511753c2bcc42"
  },
  {
    "url": "assets/js/377.64d1f976.js",
    "revision": "877d0fb7669bb139567aeeb8b230cf41"
  },
  {
    "url": "assets/js/378.2391abbf.js",
    "revision": "ef6372b2ba46fbe868ebcf9530a8c18d"
  },
  {
    "url": "assets/js/379.f9bf1ca3.js",
    "revision": "e8e05c852b965e781ed0a25747f54ede"
  },
  {
    "url": "assets/js/38.5642ff80.js",
    "revision": "17e9aad821f3994ee4335feef2e20fcc"
  },
  {
    "url": "assets/js/380.05248ced.js",
    "revision": "6adf5d7e9f4aad65b1ce0df39bdba882"
  },
  {
    "url": "assets/js/381.81b4c00d.js",
    "revision": "d5c57aef69239c1c4c8009c6755208c1"
  },
  {
    "url": "assets/js/382.1a66f3ce.js",
    "revision": "25758b64bfb10dc7a0aee63d35e5bf29"
  },
  {
    "url": "assets/js/383.8bc2115a.js",
    "revision": "cd529c2c945195d53dc87afc4d72dd0e"
  },
  {
    "url": "assets/js/384.116874e8.js",
    "revision": "b503fe4f9da538badb54b220fd56f0e9"
  },
  {
    "url": "assets/js/385.79aca11e.js",
    "revision": "56150c2b226e18649843025437a9fb22"
  },
  {
    "url": "assets/js/386.c0de7ac4.js",
    "revision": "a5747a5f3804591df0329da3766e4a70"
  },
  {
    "url": "assets/js/387.abaeea09.js",
    "revision": "72997142c8644c0e89433fa0875d05d3"
  },
  {
    "url": "assets/js/388.71d9c300.js",
    "revision": "bfac81a1c8e695b4c0645cfc2dc19247"
  },
  {
    "url": "assets/js/389.d67c171f.js",
    "revision": "2357c97e8fe56a75d188f975f5deadc4"
  },
  {
    "url": "assets/js/39.e3f823e3.js",
    "revision": "8bf2d2e890157369ea1bb891c061bc2a"
  },
  {
    "url": "assets/js/390.2d990b70.js",
    "revision": "06f08d2f9a023b5ff824a258776665e5"
  },
  {
    "url": "assets/js/391.cc134d55.js",
    "revision": "ca4b09c4d11abe4f799a122ef7152c4f"
  },
  {
    "url": "assets/js/392.ae38026a.js",
    "revision": "f32639f60f79013b04b1b6c3bd7a1dd0"
  },
  {
    "url": "assets/js/393.92a7dca0.js",
    "revision": "746ec75475a3224752776c4ec152acc3"
  },
  {
    "url": "assets/js/394.987ca49b.js",
    "revision": "abc6dc97177e6da575c6d7824f1b2d3b"
  },
  {
    "url": "assets/js/395.7abfdb0b.js",
    "revision": "79e53849e428f0e2bff959eb6b8dd880"
  },
  {
    "url": "assets/js/396.371607bf.js",
    "revision": "5cb63eac34009ae8c1e6d2d96f5023b1"
  },
  {
    "url": "assets/js/397.744e3a35.js",
    "revision": "6c5fd1fc81c0078983fac3bc55f08cdc"
  },
  {
    "url": "assets/js/398.f704dde6.js",
    "revision": "3333b5fc691920b693b742ca4935fada"
  },
  {
    "url": "assets/js/399.7a130ec7.js",
    "revision": "f6ddbdb73a3dfaab0a4a90920b941f9c"
  },
  {
    "url": "assets/js/4.b1372804.js",
    "revision": "6a3bd0a2aa0211666ad5e408c38dea92"
  },
  {
    "url": "assets/js/40.02d6dcd8.js",
    "revision": "a4215f68fac8bc38279c48847d9a9242"
  },
  {
    "url": "assets/js/400.c79f3eba.js",
    "revision": "99df1f7257894da3d3ea35ea86594b40"
  },
  {
    "url": "assets/js/401.9d56cb53.js",
    "revision": "0968c5fa3197af9a65c2a582c107bff5"
  },
  {
    "url": "assets/js/402.df1ef83b.js",
    "revision": "4e4afb166a9ab0ae1e42229b58eaeb79"
  },
  {
    "url": "assets/js/41.7988ac1d.js",
    "revision": "dcc644f38e3f036459ece42da33e7970"
  },
  {
    "url": "assets/js/42.abbdf04f.js",
    "revision": "9b79b8008d7c4ef08448773afa054ea7"
  },
  {
    "url": "assets/js/43.a91f96d7.js",
    "revision": "c535098c8f743a30414313025e55e21c"
  },
  {
    "url": "assets/js/44.0bdbb0e7.js",
    "revision": "04f29b134be081772ef59da9ff03f3cd"
  },
  {
    "url": "assets/js/45.bc5ad395.js",
    "revision": "4507ed55641a81f9f769d094a4a14731"
  },
  {
    "url": "assets/js/46.c6e251ba.js",
    "revision": "bd2ba9473047fc35d5350453a3f8319f"
  },
  {
    "url": "assets/js/47.f6c7dc37.js",
    "revision": "c605fbcd0c343da83cd84356c66f0bc9"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.6c712694.js",
    "revision": "0b4079c4a204ac9beadbfecb03c37cc6"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.8dcb2188.js",
    "revision": "3d6cc4be05276178edcc17640f8a54d0"
  },
  {
    "url": "assets/js/51.e0e12201.js",
    "revision": "4411617b29f73e0970b82db9344b7584"
  },
  {
    "url": "assets/js/52.0f85d616.js",
    "revision": "e498ffa4c194db5f9c22181a888befe4"
  },
  {
    "url": "assets/js/53.b9fa481f.js",
    "revision": "aafb027491c36e0e74a58ee6b92c7605"
  },
  {
    "url": "assets/js/54.dcdb0f67.js",
    "revision": "a80e81d4cbe2636c78438c9e6ce21f0a"
  },
  {
    "url": "assets/js/55.10f5f2a5.js",
    "revision": "ca352578f6c39baa847ba0f73cfed54c"
  },
  {
    "url": "assets/js/56.7615ad2a.js",
    "revision": "bc7d3044c80c0f8168f23aac08cbdcf7"
  },
  {
    "url": "assets/js/57.e59527e7.js",
    "revision": "7c321e11c6a649647610bd6caa974ab3"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.b29fec37.js",
    "revision": "e49ec7d8cac7d8940bd836f637ddca2a"
  },
  {
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
  },
  {
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.9e71a80e.js",
    "revision": "b79c8ac39b25309bd6e857fc0f62cfea"
  },
  {
    "url": "assets/js/64.c0fc5142.js",
    "revision": "7731719a1e0ee1b7a3ee42d1ee4d421f"
  },
  {
    "url": "assets/js/65.9ba8db52.js",
    "revision": "9d5e5920e7a6671840700123cb0230e0"
  },
  {
    "url": "assets/js/66.314d1f80.js",
    "revision": "d403cf5a1697c4fa5cab75bbb1f7141c"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.0a7fead5.js",
    "revision": "b71a13756f4f6829d1038ce0f680d247"
  },
  {
    "url": "assets/js/69.72306453.js",
    "revision": "1499f0e155b3ffffb0b7987138542d4f"
  },
  {
    "url": "assets/js/70.db6eb1ea.js",
    "revision": "6c10dd39136ed4af658a4251ddee22bc"
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
    "url": "assets/js/73.5adf9e1f.js",
    "revision": "6992740d1222b5cdf5394d3a01249c4a"
  },
  {
    "url": "assets/js/74.efe1e833.js",
    "revision": "b9a87d98a112541feb6a7830ab9ba17c"
  },
  {
    "url": "assets/js/75.790c1d3d.js",
    "revision": "cd23095b15a696b6ad4cf978b9c2f951"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.c3c10b44.js",
    "revision": "d1e2ceafdfd3552c430bb5576865eade"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.e61f564f.js",
    "revision": "78a3e05611b7191743ede9dddd45cab4"
  },
  {
    "url": "assets/js/81.296213a5.js",
    "revision": "6c5cef6ac32cb73f7d4750e6454032c6"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7e287636.js",
    "revision": "0d97f6c15d3ee66e1a3f80291e8c1252"
  },
  {
    "url": "assets/js/84.6841e809.js",
    "revision": "953220cb79b34800064dfba63f245b67"
  },
  {
    "url": "assets/js/85.ee1721fb.js",
    "revision": "fd9fba8752234603b493c0790455a7c5"
  },
  {
    "url": "assets/js/86.f87afeab.js",
    "revision": "81bc87eb284afbf9f59fb3506238e7e7"
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
    "url": "assets/js/89.2d9feb24.js",
    "revision": "8a8ed5e9329ceac6226a43f2e3f64e58"
  },
  {
    "url": "assets/js/9.9887598a.js",
    "revision": "68d72c730061810f0dfe4891022ec960"
  },
  {
    "url": "assets/js/90.5800dbe8.js",
    "revision": "c96d107cd326d4dd4bd479bf642c53ca"
  },
  {
    "url": "assets/js/91.ef0d5e97.js",
    "revision": "b455f90c9e76d0164e05b18bdfeb80b2"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
  },
  {
    "url": "assets/js/93.64315ffa.js",
    "revision": "7866fa35aba59ed04f49e1f22e9a1442"
  },
  {
    "url": "assets/js/94.e62ca9fe.js",
    "revision": "3268fcbf420b15cdce3f3d268a6a94e7"
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
    "url": "assets/js/97.a26e301d.js",
    "revision": "f30a932d607df925850dfd7556114e21"
  },
  {
    "url": "assets/js/98.10cf74cb.js",
    "revision": "e93449db78e7ecad06bc9080aa134c5e"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.ce1aaba7.js",
    "revision": "807a6fb9191a4c8d3be1620e5c9ffcbd"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "872d90c4715d5d22173682b48331404c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "07c9d44aee5245372baa96de0060528c"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "855a47b3a1407fb3d8c46006370972a0"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "6de2f15816cc407cc523cd2249c34cb5"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "c2ca7abd1bce51af9741b0f39ce425ce"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "32df3528e05117f6b877624282689d8a"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "1a0c4cd05fb06cbc4562dbccc00bb54b"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "86aba79d5d07b88ef3337317aad5edd8"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "0b34841751f864f7fd071b60cacfbcae"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b1c1e97271cc7467b8c5631700eb9fbd"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "4b07fbb44d019f380835f5caaa5140ab"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "9f6237af90e825fd8f95689e39a38ce5"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "ea1effc075dcbe3a2be2950742d0de6c"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "ec22cc20d0e4683140cbb371d26c6f58"
  },
  {
    "url": "master/api/index.html",
    "revision": "ebf226ec2aeacf1e9a58c7fae26e4c7d"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "e488d77b2cf4c95adf0dd60a3cf77728"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "72e195ec135e08f1636d4084ea0b9072"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "5d79bc521ace2366da4ebe36303ed099"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "41449ad0ea41de8ad1e79c9aaffe423c"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "f36b4a042956c64b5a50dc67821d9b4a"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "20ef5946e4e20c960e3e91b0917b70f7"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "084a300e21398f450a9a382c74341a32"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "c9f2b6f0bd858454bc08a38658be8eee"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "bfd8233e84335594018696e636240389"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "11810798f80464e3f4507be24672d32b"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "cede264984dba94a993f9280bb4f7d44"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "6390718da5447cf948f9d32dd570615c"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "a600e63b085aa8d7bec8b9b78a0ba13b"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "c37b68ad7cc67499c16ff439dbe38480"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "f18d3ec2e695b6a4c8b9cec6c8aa777d"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "190f60596ffa3877d0691fc1fe5ae4b7"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "e4648b00e7382e29e11f9a3a6bba6527"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "436579378c99199aea6793a67716fb48"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "5052a88895b6ec7771f8a29750226336"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "233a9b8368fd9b5e8d183ef41f31d26d"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "d58892fe2a95c653d1db18a69141948a"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "9f7eed26733c55da949d40cf7ad8323d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "f001265fe05384aa9ae90fa074029db7"
  },
  {
    "url": "master/packages/index.html",
    "revision": "41e735f2964605c7fb9ebefec172f69b"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3c4624b7796bcf9066bdb06a1f9fafd4"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "0433cd902cd0c64bdd146994a385a815"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b9ea9f8091c774b5d7038a2edb93317d"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "d5a88fac36c95a13ce63f56a58f53c4c"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "9a5ff7f2fdb95a295e5cc96cc517d28e"
  },
  {
    "url": "master/packages/views.html",
    "revision": "837a0a52dc980baf6ad629388d72f8a9"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "789eb90fd4f8cbbe971da4742983fd73"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "cd9c68e2af79bcd3a8c2c02d530f0cb7"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "01242e9aac86f983b0091374e5054061"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "be36e0c3c7c5ea09b414fc992f540643"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "06606468bb792051530795f7a9b457dc"
  },
  {
    "url": "master/themes/index.html",
    "revision": "506b5804813114b5fc4fc4884f12f25b"
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
