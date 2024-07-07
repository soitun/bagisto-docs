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
    "revision": "670145c995e03c4171ba1b300a261f6f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "8fe3ca7b9df4ff4e64e77ed5cef68acb"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "b7ce96fd9bfebfe9a481056d093580b1"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "793a82aaaf8e4bb3013b3749031622d1"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f46452198802387d393019cae33b6d71"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "f0fc6f640883bc6e6b7d3ee1a8bcafe8"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e9bb81bbb429065663ab4bbce0e855c1"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2de8e8f5df1c81bc3c9e489b83c9da65"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "85da5e8343cfb65782e34f360fb46f8a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5a1e5d9e015fe5d2c511973d5e32d5fb"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "ad665561901efbdf072b4fea7edfddd8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "6e228c31240e3ceb47f1cad0b4a73852"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "819db1c2ae09c8a408d69fede7b8b4d2"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "7d20a3d3890262759872f8981896828d"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "3a31485641fd3abd40b8f925f0fab395"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "fb51a3c48add6f0dd5dd38b1db708693"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "4d7a30704b50c5865abcd622e68bf47c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "8abf7be5494459f7043926bd612d6ad0"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "4cc27cc8809fc94d7c0dee93f69b7489"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "b7df49939af94f0d4c4fd5ae9a5e7f4f"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "024e09b55a36d2a493bc6b03af0487ed"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "4864852101317c43fa29fc38595ea155"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "5fba1ffa01de5f357b0387ad93bb7ab0"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "978645bb65a9ec4a76cf8d9079bbd19f"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "198d4542de94a3334b556ec6c397bdbf"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "0cd40a08f90066ad276a22cf4a1d2688"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "0c7d3b23665a801da1a0ce2c7aee0171"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6b481e32392d04dc4b96c6cc4d49f6bc"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "8ec26d9b8bc1392a44980a0492f92656"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "81df367ff229905a6ef38790bc5ac244"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "432e6d6c22b694c2c5660e8b9dbd190f"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "ca28599044a85b861a8a01a1e385bbc3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "15768f8a341708e7df2d4bb396f28355"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "85fa2cdc86d7506d353fa846ab4ba97a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "c1ba7c8a9bd17563d250f665c711d379"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "8b0b2fab037df4dbfd42b3eeb2580b5e"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b76db0ee63fdfe60fef520d164463b74"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "254292d08daa5bba2da4bbe9885aac2c"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "ed97c663d8793a91a6b562bb8fd5db8b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "1c65716fd014f8bd0f1cade08ae08ca0"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "fdcf3aa7e1b285c37b98e09d6f923bdb"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "117eecbb642d39c0ac6b5be2cc852711"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "5ae0e4379db6584ce167327c4f383f5b"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "2d4d487316b489f9c69c71b6fa3d471a"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "793dd0a98a7eb37b5f9bf1c5421fed00"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f1e6fab2591ca3e9c4a6937c3fffebf8"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "68228f48476fd86d4c3b94f7a51deb3c"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "52571f6f9588e70bdf7514a744861b98"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "073540c6d3e3a5308f21ef2e997ab19e"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "75b4fbf7231fedec0ad2a44c04c5b06a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "e13d25d94a35cacd274678bd4ff40e69"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "cbc0050b85ca6e61e6579082a4708f74"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "04e1c6f21142c7043a485aacf2497261"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "703f2947368280d0a61194d5c59f2c7c"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "820abc041a80d97bee488d585d1324e7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "9b37b4004be8b8bad2b793b0f4960123"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "59d458442303c27be3be1f74e1893733"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "80078fe44f562a84dd3a22b546d4edf9"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "450fbabfcf183d5abfe645fad6faf8ef"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "0258b696f7448cdfdb8b984a111d412d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "197a2f86b9020d43b47c0db5d021af8a"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "0a3992e2a84f4b3fd708e96e8edd4ccd"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "56a093a050f0aef455986c8641c9067a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e9d5374ff19869e6db4b409c28b90023"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "2501b6cc80c079bc93ab5bfc50126cd7"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "78e4ad10fec4bf11ac7b26f84db54916"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e9f5452f89d52996494d6c44f91e7361"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "4f18bf306e0775f02350cf9ad8982f53"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "91bf3c284b071fef3e3dd042449ad5fc"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "543d92832aee07be4d08461c7fe6bc7e"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "6848f7dbec4de5e13b0ff5acbcf91fb0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5473f514078972dbbca2940e89d692cc"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "b5cbffff87759d6879eda4312ee320cb"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6e3e906ad5e30a8ad3cc74b9eb7db682"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e7449cb16a686cb036ad07684b072298"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6e94e01df04acf31a6f04480f5f5c761"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "6f16187ca95bc1f642a02d501d4c6992"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "decc90e10324f43c1dafec0199fc373a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "cbc7356308da4d4a8c3ef96403ea9e1f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "762224179e2e14ba0e9f563b046e0cc9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "907bad95cb4c3cc1d757bf55e58e3904"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "c6c13171fd60d3db3ef5cbb4c42b4135"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "99629999f9832acc6fb4e53a548a3631"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e5fdabf159d4fc5e1d865cca31f09b00"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4dc558ceae865a2f34b07b06e62f2dfd"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "f345f210a40fce16301dc4da0a9acc70"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "b950c4a11ad7f5de1e7589ed2a48bb40"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9a2476bfc2a3f9ed7a0779f65affb301"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "303c773972335c86507fb13a1a97ff93"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "379e6d84a8ee6a66193617c5b66f304f"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7175003359c12ef9ff98d7cbd4b3619f"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "fca0b12a25785e7fca40e44effc367ca"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0b0684fa13c5917399e861d23d8f8150"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "6229206a6de9069f11d87e766771da5a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c7dedaf408a363cbaafe60253b6df99a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5f8a0356d0aa05e227ce55259da23116"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0b2f34b17085e07e5cb83cdc8fa48bb6"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "184f2e6c6a64708096cacf94937de2ca"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "8de6f2f59957c154dae734e1133c830d"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "bb05b0c314eda7c6839004ef6b6b6e52"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "bad76e19ca828a785767e2bd5e28dad2"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "9eb2045e1e72b4575f7644bbca9d8f28"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b3379c7cdaed16162128f393ff89ab83"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "31c2af7046137717adc9508574b175b1"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "4ab7a3d75c5d32f3d7c13aad4c86ed40"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "76470b79d45955447206ce5d845b7da4"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "40318c8b6dc9c37d5163441e37f19408"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "0bf281f32f268fbee48c56783cf9b6d9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5eb0bce83f56c5fd2f4a3b7df21cfcf2"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "58a2dcfee196d11f2a2f1848aaf0652f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "ac6044e69f860fe78e896ff44301e93c"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "596f459d2ef5f5d86aab615953aa00af"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "de777e2a6e9c9c9490b3663f92b1169b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f217948c16cafa7f2dd7503ef5b68a78"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "eaddaba13e955cd9ee2a057b96a8d8d0"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "fd804ddf4c13448c1825161e686257a4"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "138c7c8deb607e3dc6a5a02ebd392433"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "11eba93567f1190f12f2462a2740a98b"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "d97ecff269a3621cdf6a4faecc4b9953"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d6b44f01abd6804ea1b5f4f4325b9fab"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "7b76ff2603e979a07ab7b323a0f33a09"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "b83bcb63e4c594f848af4fcc8bebe72b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "7c0c0218bb3d51a0dd7b4442a5f6d059"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "837d19eba7da36bcd9448232c1c41911"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "8881fa32477b8dccf2c26a3800c2a4ab"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "b3e2ea0981e43359cc47e96cdae8c5b6"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "06e6bdcddcdd65a730d39f0394e47217"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "bdb4ddcb8012b824a121a3bbc9aa109f"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7585a7d5bef85fc6c8713f264d05afb8"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c735fd27f625adb3951255f1fc6e29a3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "311f49d56d8e93ff77239beb45e43bbd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7469238fc8b8ed77b3be0062b6f7d579"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "e001d407210dea82ebf32dd20af8c5bc"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "ded19790a1d3a66af5793e7d1b09b04a"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "88ad4633020958cec1ee726836b97b14"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "298a2f28278fc33fe61a28cc858e6b86"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "609441ca4bfd056ba4a3c73e87854f33"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "e724a87aa54ae2b1f5dbfd4de7c7e25d"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "d4a7f893f5582df8f0bbe80e596bccb9"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "c338e00631ffddd97f7c1449be149ff6"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "cf0c9b25db635263abdd82203c924d94"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "91edaf6e0093e64c8f22cc73f394d7f5"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "a912491b47063d0b502f5156ba1b9c30"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "c33d47aa9590ee1aaef626e5f9d830ed"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "5cb0da7a31181c1f5d89d0aeaf036fbf"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "a2749cf1d4673ff7dd8dc89c4113b725"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "42c6ce97f491a263fe9c003288b58aaa"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "92f0c4cdc6b430d32d9a0f8987bcb39c"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "c8875d0b22c4b3894ff986b2f51261ad"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "4bea5732d2f1749afdd144d8f649db77"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "4c29d038629944e7c96a885d70b472be"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "625f1b7cb7724d7ca8a7db56238bbd89"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "04f06dd7e7ce686fcb9cbd058708c25a"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "ef453973ef8f49b5b54b79100bd062be"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "ecd16dc72fe982bc76390d8317567506"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "7cab42d64cf36aa6dab8b99d1fa25b4b"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "e9ad24e12911b4898767f289f79d80eb"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "99769e77547a5b0737c8b77c5eef8e2a"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "058e5baf611ae6e38413d8be4155737e"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "64bd95053b8b9b9c95fa41f302e79b62"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "250c524546f88fcbd697b9f814e27a54"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "9b60e02f2bb5d27110d67136fc679d85"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "5a2d922f5d2be327c370edced3735ed1"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "4f41a24be11d039b0c971777e1f7de08"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "0909cb4cc2660c8981ff4112df68998d"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "b02dd7913efc7484ee30abb63fff2173"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "ec9c6def4c051a51d111f686631c524b"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "9c7ebea65317ede7d581d779e713261b"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "a963c20b14f7d38ab983a1a3bb58834b"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "a6a64edb4f3b35ca76f3a2208dec16b9"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "34b7987dd79c24823ebf372244544db8"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "6473dd7d5cc5c20f97e93654a81fed71"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "78a1107ffb389aceec87cb395bdf58d9"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "d221388f21b4fd73004cc1e4e67972d4"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "28783b17fc96c445f5d89fbef40f1b1c"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "ab329ae8af9f3037c4c57db59a68da3c"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "8daaf5a2183a1ca65449e7864fbfc078"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "4416eb0ffa5c8a3b05f058f4c6e9f5a0"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "c5c91c1f3a10f0cab51fb9cf9d478e46"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "58281d483f4af626ad263e9877c78681"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "2aaa7b3ca5d33b742a339374df9ed233"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "814073083221dab6597a4f7e7e2945a0"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "b37f3b51e0d831c73655c1ec237603a5"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "0ab45054cbdda3705e09f362eaba3e2c"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "d934cc422b18ebe2b1776014198f3044"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "416179d28cce43f255cb3b67b7a90687"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "fbb06f775845148e6ad90eb06c570ee3"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "f6bad773b4b4e4f5e4ac4d79ee167bbe"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "6f07dfb0167cfc95ad9f581e48dfbc02"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "259e314505cfcdb420b3511d59c1b6e4"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "171c29f48a2c743bb22aff06e97d486b"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "ec4efbc6dbf58153733ce6eb3c497890"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "87ea27589c417eab926a8205091d6446"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "a53bd401c21bd1fd26148d8324deb60a"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "15adaf5740234b0307e694c49b4d723e"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "1aba7937f89e2117d8d81f57d7afe3bf"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "7347c8e58ffa4ddc16f99d005bdca637"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "bffe782aee8b79b11ac5471d2ffade0d"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "7e8717794bbe243b4598e9ab7550fe81"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "1490a2b10dea2a8a74d3acf28d6141e1"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "21b808f67e28782565e2794a108d0344"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "b2b0d75d804f84ba72c81ac02e765e51"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "b7becbd619844b756ce70b775803bb89"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "8bc09625c6e57c80a9da0bd7c333569c"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "8376826a0f6299336c37630fe4c4fbe4"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "8508e6e9ccffea299ebd94f9840af145"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "3fc0729b40367101bbea4e7a1aad21cd"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "ccac83649c60b31c1078f2173a8e0f37"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "024dbed3f7de38b512683f162cc959d3"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "bb3d368d41ac89c426e0cf13f94ff3ad"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "579e329bd4f817d66932847441c6fb6f"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "c76218b11ec6fa4f501b973e2c99df03"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "b3105bac6f7051c77799bf22e0a98181"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "4860bd07709da56022f40ee2aac95a68"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "8555e1ae76b70d573500061daa3f88b4"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "e5877e01844422fb809cfaf646dc8d99"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "ce563fe1a83df05ad7f5c440c043fb2c"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "c8b768c23b19fb49352d67ee82cb917b"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "d7a9f56a305a0b616e07ed750e32dfce"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "66eeafdd3430f228c3a27ed53f8ad1e0"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "ac4f48c09e7dfd29af0920427899a593"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "0a59baf50efb7dbf90267f098535f1f2"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "c89242ac73c8401ff676610e9be6660d"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "539c92c1a60ab46bef240589a8858155"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "a5e6a762705937e10543414959a117c8"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "6af5f5d2d054c8f79995138c96e73fab"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "e187e6f92322fe522c7f7235c3f7556a"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "6319457b3cf3c13df163d745e96ebdd9"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "e71e0e2bce3a756c9cad107c3cc510bb"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "b5038e0f805e26fdd5b3a7d5427d8667"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "8e092d4e3a213d9915ea473c0326d655"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "d9908bbf8bfc6c0361d4c39cc8e47f93"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "d7f7990971f7f7f32648fd5584679374"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "a17d3b23007440584507b2fb3331d2bd"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "e1bed13017fc4e8b25f29e31eba63f02"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a8fc56a3dc8a6fcf4b1548f63cce7ebb"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "2d77f9b81474c86d4438194f35498be6"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "c4607ea1ecca5d106a095bcf1a08158d"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "1dd9c8f195a1cd8156d0f0cb6543d41e"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0525e718f769f053a061020672111b96"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "453f9e3d1e29418cf5f1dbd257bbeba0"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "783517ccc80c326140d875e98750feee"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "fe6589a944b77ed381f32c561b613559"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "92645051880be2f662041f6fa87d5691"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "abb14202e32a0e49613bb935142e4db3"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b6e55f1d8e7184d6c0d05e97e142d84f"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "d8121765a1c5802c74057c87b97456c2"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "29eeebe958243a8c0155f1275e4e3db4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "54e7a823fff4a5110ebbf711df911778"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "60afc21eee2b9eac09a1560ad2083751"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "0450016ae07eff1df6eb7c9d2f4f3ed2"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b013f50c3d332c92e4f9a75f5ccb4125"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "4624f4aac47572a9e6cfac9f76e63a17"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "cd83bf692513e3f7ba0a96c294b8d366"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "1f1667bd1ba4792cd3b187f662eac630"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "0a1839e880fcaa5c558b2565f81b128e"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "0b72486914eb88dad2dedba3c56ca6bc"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "9d176e0a7df1689116ffe81e01e1b07f"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "26ed5111e37add97580a716e973aa442"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "b20daca2443218acccfb99ca4c6d02b2"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "9a4c98cfe022108164ffd83f4af73747"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "c829aea572de65aa4f052a2feb5fd687"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "8a1055ab59a4cbf7d82e344631989268"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0210ee3cfc406ba486ae020599b729d7"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "74bb5bc725b57155e6860cbfbac8af1b"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "8da3444e6eddeafb290ef3522b67dd96"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "3098365727ca83a7cce8fb5f3ccc22b7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "226b00f0cfafba3eccbde310239a1d8a"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "317e4bb0c0ab5e5efd723c350492ff64"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "aad524bab713d7261608d6a32b97b880"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3d84310bf54e17cff66fdec2108b3277"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "79006d0db3e4d3a46496d0c37d9922f3"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ff8887f119db573aa678bc2469bcb8aa"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "de9c45e5c194d4b3ed7b9847e05d1ef4"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "8e1d6473c69ddbbdcd7e3313ad0f47d2"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3909759ae500a3c1a903a0ce8287b965"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "36115ac1920542628a13f5ec11a464e9"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "fb9eb99a9dc0439ee342a686ef93278a"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "5cfc12f24c5ae2996d80141f0c499a69"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "42623299da3615258741354e49739160"
  },
  {
    "url": "404.html",
    "revision": "d613ae92a08e862a4ad1ed615dcaebdf"
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
    "url": "assets/js/1.f15b992c.js",
    "revision": "cc699e69fdfe883b96c1b67526ddb2ad"
  },
  {
    "url": "assets/js/10.c2e9b4d0.js",
    "revision": "7dd13e1659473cbebb79e56b1d6392fe"
  },
  {
    "url": "assets/js/100.bdd90f9a.js",
    "revision": "51a0aa504994d12f055ca7e5b45670f2"
  },
  {
    "url": "assets/js/101.f8cda211.js",
    "revision": "c273937cf7069e44cf1d05291bc7be45"
  },
  {
    "url": "assets/js/102.d49cdbf7.js",
    "revision": "2232e4079a3d87fbace52ebb1eabd628"
  },
  {
    "url": "assets/js/103.1ed1e82c.js",
    "revision": "185e8161c26edbde6bfa945e61ecbf80"
  },
  {
    "url": "assets/js/104.2e85c2af.js",
    "revision": "c60faaccf8657f57092f95c093e1a5a6"
  },
  {
    "url": "assets/js/105.b4a6bafc.js",
    "revision": "e9a47be4be73acc1f887b9f99c00e1e7"
  },
  {
    "url": "assets/js/106.1ce6acf8.js",
    "revision": "314663fb94ee9d699a803add2e416b39"
  },
  {
    "url": "assets/js/107.41bdcb23.js",
    "revision": "eec51db4590172529a9e01e696c84d80"
  },
  {
    "url": "assets/js/108.6dba3c82.js",
    "revision": "46cabb65ca6f7420e3a9603515a5e3b9"
  },
  {
    "url": "assets/js/109.09b5cdcb.js",
    "revision": "60adfb6bb91d8a22d9a641d6be9ceb30"
  },
  {
    "url": "assets/js/11.d36f9b0e.js",
    "revision": "3f39db4391e3f365da453f27d1e341d3"
  },
  {
    "url": "assets/js/110.e6bd50b2.js",
    "revision": "74aed1aae36f6a0fc0872a200190cb5b"
  },
  {
    "url": "assets/js/111.28f14522.js",
    "revision": "284d4e95df256e6a43e8a68c458a33cd"
  },
  {
    "url": "assets/js/112.38c56b16.js",
    "revision": "1235bc2ff0a2c98ce3dbf4ea0474da18"
  },
  {
    "url": "assets/js/113.5cda6dbe.js",
    "revision": "779a847b0975096655e24c69fe50cd4e"
  },
  {
    "url": "assets/js/114.4757c281.js",
    "revision": "f2decfebb9d1de436eb03dd35d172501"
  },
  {
    "url": "assets/js/115.071bc312.js",
    "revision": "09e68006324d42759653711ed26a61f4"
  },
  {
    "url": "assets/js/116.25acdb76.js",
    "revision": "c73807fb5be416c7d72b61a395be518b"
  },
  {
    "url": "assets/js/117.a30b20fe.js",
    "revision": "1d29da1a124181c159ec955e7b8a7dbd"
  },
  {
    "url": "assets/js/118.2639221d.js",
    "revision": "47189bffe13c29f3009f02cee771d38b"
  },
  {
    "url": "assets/js/119.5094ccaa.js",
    "revision": "c4c7b889deae5170e1c63464a1ab2fcb"
  },
  {
    "url": "assets/js/12.f6c7832b.js",
    "revision": "a054848c1e5fb9e1dbc72c57114395eb"
  },
  {
    "url": "assets/js/120.ff2b89ef.js",
    "revision": "df35edf2d990e703deb37842d36ded88"
  },
  {
    "url": "assets/js/121.a3b55553.js",
    "revision": "fa1e19f7efe98fc0cc8e2150d7d2a508"
  },
  {
    "url": "assets/js/122.4c53e8ee.js",
    "revision": "4aa0ffd0806f7dcc763959188ecc26e9"
  },
  {
    "url": "assets/js/123.9bce9508.js",
    "revision": "e2a80bbf5c9a1c676f6dd8397a138a9e"
  },
  {
    "url": "assets/js/124.4492f39a.js",
    "revision": "c04c74147cfbbc25b66fae767a099aa8"
  },
  {
    "url": "assets/js/125.08af82b3.js",
    "revision": "1c2c1742ab8a2e46d988bff8ae0d5c87"
  },
  {
    "url": "assets/js/126.706dc783.js",
    "revision": "9508529252c0a910c4488609498a8e9a"
  },
  {
    "url": "assets/js/127.3ef8f508.js",
    "revision": "af1fee08373c9877ded039d75d3944f7"
  },
  {
    "url": "assets/js/128.1ae334e9.js",
    "revision": "1d981e8bc810691265daba78ec3c7aa4"
  },
  {
    "url": "assets/js/129.52f14dcb.js",
    "revision": "ebbbd07d491f3970dd3e2bd50e1210a9"
  },
  {
    "url": "assets/js/13.de2f5810.js",
    "revision": "21b3d9bca45afeecfefdb4a2d9590bd9"
  },
  {
    "url": "assets/js/130.72993eec.js",
    "revision": "6383723e35e20acde6f2aaff98c05db5"
  },
  {
    "url": "assets/js/131.8461d5d4.js",
    "revision": "09a47687d00585897eadf45a5444f6c9"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.03f20321.js",
    "revision": "87141740ef5f158e9dafb73e78e52e59"
  },
  {
    "url": "assets/js/134.b04f72cb.js",
    "revision": "3da7f442e3f287946757b25fbf8c4fd0"
  },
  {
    "url": "assets/js/135.2024aad7.js",
    "revision": "00ba13ea2b993081243e59555bafae35"
  },
  {
    "url": "assets/js/136.e3e94b2a.js",
    "revision": "9f83880884122371a7b364ca7dbf62e2"
  },
  {
    "url": "assets/js/137.1de9f34d.js",
    "revision": "fa8da2a9c674e1d70fa2d357beeb278e"
  },
  {
    "url": "assets/js/138.77a2c9c7.js",
    "revision": "1b6a88d3af253dcc2162a1b115e81ce5"
  },
  {
    "url": "assets/js/139.bd6bc898.js",
    "revision": "a3890944b97ef24d67bc145426c299b1"
  },
  {
    "url": "assets/js/14.3a557582.js",
    "revision": "442bcf271108c5aec8bcd673ad22c156"
  },
  {
    "url": "assets/js/140.dca91e68.js",
    "revision": "3f290a8887ea96926943ca5cd229165b"
  },
  {
    "url": "assets/js/141.2462d179.js",
    "revision": "860419606259c31d12ff867456e0dba4"
  },
  {
    "url": "assets/js/142.b644ecfc.js",
    "revision": "969fe3162aae8f678c885002d3bbe4b7"
  },
  {
    "url": "assets/js/143.aafd2950.js",
    "revision": "4778477efccb4a46c638487385cf00d3"
  },
  {
    "url": "assets/js/144.1ddf5add.js",
    "revision": "19062978d82daffaef7743a2393ac70b"
  },
  {
    "url": "assets/js/145.e9406acd.js",
    "revision": "89557ffcd0054566e258161fb78d75ee"
  },
  {
    "url": "assets/js/146.07460c11.js",
    "revision": "a3b130e9ff7f91ac4ac5bfac51b976c7"
  },
  {
    "url": "assets/js/147.fa8c7e39.js",
    "revision": "c2eff4c735c25b09ae3f91eb99b9e224"
  },
  {
    "url": "assets/js/148.21e215d8.js",
    "revision": "9039a31c1263020c185bae3d3e5c057f"
  },
  {
    "url": "assets/js/149.6d334f27.js",
    "revision": "28d3e57cf04892db3ac057284bb3a55e"
  },
  {
    "url": "assets/js/15.901e70e5.js",
    "revision": "30f0332004aba9a9719af650404d7f38"
  },
  {
    "url": "assets/js/150.b2e538a1.js",
    "revision": "51163ae70f72c9abed8e0e95cf8e0513"
  },
  {
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.fe868daa.js",
    "revision": "05366826e467337cf4d0bc0b843cb74a"
  },
  {
    "url": "assets/js/153.f32d2dc5.js",
    "revision": "ab48d5dd29aa6378ae78002b37c1969e"
  },
  {
    "url": "assets/js/154.e63de912.js",
    "revision": "d9f0ed3fb8b4e59fb12f24870a6e3aaa"
  },
  {
    "url": "assets/js/155.e394a9b3.js",
    "revision": "5b19d08ea645aca200c7d120f1cee558"
  },
  {
    "url": "assets/js/156.ef03b1b0.js",
    "revision": "2c9c8582935b0e8ac954bedbf23458da"
  },
  {
    "url": "assets/js/157.60f434ca.js",
    "revision": "7d408ea98b3050661e63478e0020ad57"
  },
  {
    "url": "assets/js/158.4ac778e8.js",
    "revision": "619605809b3388bfad840457fd729ea6"
  },
  {
    "url": "assets/js/159.560daa8c.js",
    "revision": "4a77f58f457c3b955da3b35424d84641"
  },
  {
    "url": "assets/js/16.3469baab.js",
    "revision": "28e9771458206c7e3a042a87ddb6f74c"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.38b123aa.js",
    "revision": "28b433cc4e54f17b57f19952a20e0577"
  },
  {
    "url": "assets/js/162.e582ff5a.js",
    "revision": "75b0a5b8c8bfbd5468d0a1f389814d60"
  },
  {
    "url": "assets/js/163.ad09c61d.js",
    "revision": "dc6c7dea478dae8239a221aac7bda48c"
  },
  {
    "url": "assets/js/164.a4eb3127.js",
    "revision": "d24e84d83a50af81753b7d1f8fb286cc"
  },
  {
    "url": "assets/js/165.d91ffe24.js",
    "revision": "503ffd8438b8ede4dbd8441dfa40d009"
  },
  {
    "url": "assets/js/166.23791dad.js",
    "revision": "384313aeba3091fd1f51b8246ded9071"
  },
  {
    "url": "assets/js/167.5aedbaf2.js",
    "revision": "7d53f356419675eb58d2bea717b58855"
  },
  {
    "url": "assets/js/168.144f0ffd.js",
    "revision": "1c9f301dbdee4cdd14cc763ad2bf9c17"
  },
  {
    "url": "assets/js/169.c642fe41.js",
    "revision": "4d9b0d032053a8216466fdfac90692cb"
  },
  {
    "url": "assets/js/17.85c551f5.js",
    "revision": "cbd76fb1684e6ae716f6485440bc1db2"
  },
  {
    "url": "assets/js/170.22b4b0c3.js",
    "revision": "fecbd7be55f122880c881b28395dc8b6"
  },
  {
    "url": "assets/js/171.6d143013.js",
    "revision": "64b574b5308e52c089c8d92920b043e3"
  },
  {
    "url": "assets/js/172.b95a7f31.js",
    "revision": "8ea1ee0b3f882875b31a478e66f7c638"
  },
  {
    "url": "assets/js/173.08e5e1a1.js",
    "revision": "7642ffd1b25d47a564ac5e2f1630cfd2"
  },
  {
    "url": "assets/js/174.569f43ed.js",
    "revision": "b6ebc9b056eec30371451de3aa047447"
  },
  {
    "url": "assets/js/175.b7431c71.js",
    "revision": "410b2c26717eb8e19f9ac0167fde4b93"
  },
  {
    "url": "assets/js/176.f87c6f6b.js",
    "revision": "dd51163415f9d3fc67fa6ddf3175bbd2"
  },
  {
    "url": "assets/js/177.b0a450ed.js",
    "revision": "76ba06b2cb5b40b6ff1cc883a3e9f9eb"
  },
  {
    "url": "assets/js/178.6a262273.js",
    "revision": "277d31daae0145c660fd97d27e0bee37"
  },
  {
    "url": "assets/js/179.e5956f79.js",
    "revision": "dfc66fd41e559c51fac3dd45ac0be5bb"
  },
  {
    "url": "assets/js/18.54d3e3ed.js",
    "revision": "57d70a1abc2714a666dab346992190a9"
  },
  {
    "url": "assets/js/180.ab3a7a74.js",
    "revision": "30c6f7c709bc0339f25cd1dadbe0dcad"
  },
  {
    "url": "assets/js/181.5f831b60.js",
    "revision": "aaa4acb3d55877ac224d92008a3b8e28"
  },
  {
    "url": "assets/js/182.3564684d.js",
    "revision": "ecca3f423ae43e852544fd91f2c03a10"
  },
  {
    "url": "assets/js/183.728ffe62.js",
    "revision": "476fffccdb3077f04c5a8a8728c9527e"
  },
  {
    "url": "assets/js/184.1735dbf4.js",
    "revision": "223863ab109c54ea364f95a691f187bd"
  },
  {
    "url": "assets/js/185.39988495.js",
    "revision": "d10b33099592f4734afc18f16fb854ba"
  },
  {
    "url": "assets/js/186.155f3343.js",
    "revision": "8e0291b4da5d0659914be016d5e63106"
  },
  {
    "url": "assets/js/187.6b072f81.js",
    "revision": "1ddf63e144fd9e145edafbb1c7e8035e"
  },
  {
    "url": "assets/js/188.516f5dfa.js",
    "revision": "88ec7333405b3d3a54b3408a6db5302d"
  },
  {
    "url": "assets/js/189.72611afc.js",
    "revision": "e4e84f1cd03a17e21e17152d044752b3"
  },
  {
    "url": "assets/js/19.5dd4a00a.js",
    "revision": "cd5dfa590f15f27aa595f6fa2d27a90d"
  },
  {
    "url": "assets/js/190.c6337f90.js",
    "revision": "84c87511605469ae74bf4a1cde5f0b90"
  },
  {
    "url": "assets/js/191.156f5e3d.js",
    "revision": "eaac6c5668163d18d55ec007212b5f96"
  },
  {
    "url": "assets/js/192.c8da7c14.js",
    "revision": "b944066f33e5f7e3a271010af4cbe64a"
  },
  {
    "url": "assets/js/193.f006ef6a.js",
    "revision": "6b61dabfc9c2bbdf910583388eccbdf6"
  },
  {
    "url": "assets/js/194.2fee9f4a.js",
    "revision": "5ccdc156352f36950acd9eb9439df6e2"
  },
  {
    "url": "assets/js/195.9e6710a8.js",
    "revision": "76e2096ab1099681d66877a8b806c3d5"
  },
  {
    "url": "assets/js/196.8e38e99a.js",
    "revision": "a45b3ee28367049776aa2f79b209e00d"
  },
  {
    "url": "assets/js/197.b45d5cff.js",
    "revision": "c167730f218516b95b79456a4b3d34c5"
  },
  {
    "url": "assets/js/198.8fb0e49b.js",
    "revision": "711a04d9ac53550e2835e634b49582ef"
  },
  {
    "url": "assets/js/199.1d53907e.js",
    "revision": "a43f209acde2982b342f7f4f16714886"
  },
  {
    "url": "assets/js/2.fe5a4212.js",
    "revision": "998c96920d5c18a875cb0a9c6475b26c"
  },
  {
    "url": "assets/js/20.01f949a2.js",
    "revision": "b4bebadcfc59a5978ab818c6ccbf61ad"
  },
  {
    "url": "assets/js/200.8b0b1438.js",
    "revision": "ff07da7f72f14532e82e9c66233a1feb"
  },
  {
    "url": "assets/js/201.5ea05179.js",
    "revision": "1ef63d83a9e38ec20a1cdce20389e4bb"
  },
  {
    "url": "assets/js/202.21adb464.js",
    "revision": "75020bd3ac3793121a276b42ca8f67e9"
  },
  {
    "url": "assets/js/203.07b53c82.js",
    "revision": "7f7d26bebf33ac375a736c939ed07000"
  },
  {
    "url": "assets/js/204.44a1967c.js",
    "revision": "b2d5771ad6ac25cb2a710e4c7512e8e6"
  },
  {
    "url": "assets/js/205.107078b2.js",
    "revision": "e73e3799782a234143798efeea4cfafa"
  },
  {
    "url": "assets/js/206.b14075f1.js",
    "revision": "bcd23d99bd1cd6d69d34151371c93c50"
  },
  {
    "url": "assets/js/207.d60b6803.js",
    "revision": "42f10d81026b88351f0335ccf27ea0a1"
  },
  {
    "url": "assets/js/208.f32d7fa0.js",
    "revision": "d7e56eda3e7ea16f7d69aebac7a16061"
  },
  {
    "url": "assets/js/209.02e7af31.js",
    "revision": "ac6e767d84b74ca6f3ee79b080776a35"
  },
  {
    "url": "assets/js/21.4bf23474.js",
    "revision": "e654bb172998850b5c2dee3bba5f7b66"
  },
  {
    "url": "assets/js/210.d2adf33d.js",
    "revision": "6c2a0e656905c1a5ef7f65d590528a07"
  },
  {
    "url": "assets/js/211.40b6e486.js",
    "revision": "b042dea4686710e38f345e7dfcc13b70"
  },
  {
    "url": "assets/js/212.0fceee24.js",
    "revision": "25059512bf0aae60b698f44982e08917"
  },
  {
    "url": "assets/js/213.c9f40e0c.js",
    "revision": "022511ae5a61593d4c7e72565900a781"
  },
  {
    "url": "assets/js/214.0a869356.js",
    "revision": "ee13f3c6315fd6119b3cb988b9f99369"
  },
  {
    "url": "assets/js/215.04da1ad0.js",
    "revision": "18f5aea1ffd091dd2f1e963b6507b4f9"
  },
  {
    "url": "assets/js/216.669438d8.js",
    "revision": "a4fbe50d11675f75f660a7be97d99590"
  },
  {
    "url": "assets/js/217.48c7348b.js",
    "revision": "04e8b652effaffd8b49400f48cfdfe81"
  },
  {
    "url": "assets/js/218.fede44ea.js",
    "revision": "720943e300ad2855787324c1e0b92469"
  },
  {
    "url": "assets/js/219.b3772558.js",
    "revision": "e7fdcc13caa1a63358f70c0f0ba83f1d"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.7f2eaca6.js",
    "revision": "a597f4b65ab459701744f9c6446be5c3"
  },
  {
    "url": "assets/js/221.98f96024.js",
    "revision": "e70656b08fb4c0fba8e9201be97f4f6a"
  },
  {
    "url": "assets/js/222.e16f11c4.js",
    "revision": "84aa8b57a8f48b2a3276e52d676a4df9"
  },
  {
    "url": "assets/js/223.24ed4fea.js",
    "revision": "baee5d8d8a9b0835a198f2fb898ba5fa"
  },
  {
    "url": "assets/js/224.a29eb9b3.js",
    "revision": "36d852727b8e858ea93de8128c9d30d1"
  },
  {
    "url": "assets/js/225.ed93876b.js",
    "revision": "a685021ae4b68af911cf47e5a7beefdb"
  },
  {
    "url": "assets/js/226.9e7515ce.js",
    "revision": "ce17d4785a7937de28e745b917d13c75"
  },
  {
    "url": "assets/js/227.df805ec1.js",
    "revision": "5575462f4132c3d006e47490f489ae64"
  },
  {
    "url": "assets/js/228.ddcf7a55.js",
    "revision": "e4871cbde015b9757c3393286b326b43"
  },
  {
    "url": "assets/js/229.285ec16e.js",
    "revision": "7bc125c860d71575560e14ec70efd8af"
  },
  {
    "url": "assets/js/23.a95478c3.js",
    "revision": "db8401423c6cdf25ebac351a463dbc7f"
  },
  {
    "url": "assets/js/230.d2bf8f84.js",
    "revision": "bf070462db49e1da7a5b468245c2c0c3"
  },
  {
    "url": "assets/js/231.5c66c46d.js",
    "revision": "60961856b5b27e705f2923e7a0dc3692"
  },
  {
    "url": "assets/js/232.9fbcd690.js",
    "revision": "38aa8663ba17705b9bbe004739fff8b3"
  },
  {
    "url": "assets/js/233.81297a6d.js",
    "revision": "1285eea88e76a2414c2c473a7bd0a3de"
  },
  {
    "url": "assets/js/234.394905e9.js",
    "revision": "c7f111129383b7b8cfb640ea585fd24b"
  },
  {
    "url": "assets/js/235.34bed98f.js",
    "revision": "241aa48f677109846204651b6121f231"
  },
  {
    "url": "assets/js/236.983ebf57.js",
    "revision": "432708a9428eb1047768d0679236b6b0"
  },
  {
    "url": "assets/js/237.7e417e83.js",
    "revision": "bad23ee30f5a7bc58fc3eee7933550f8"
  },
  {
    "url": "assets/js/238.bbc5470f.js",
    "revision": "c9c1fee0428f9556b02dd4f9edf61b3f"
  },
  {
    "url": "assets/js/239.9b9f8c1f.js",
    "revision": "6efda74a24c298facd2bcbe1063c10db"
  },
  {
    "url": "assets/js/24.6a174b11.js",
    "revision": "ddab69a3c4914842f354b2051413428f"
  },
  {
    "url": "assets/js/240.705d5859.js",
    "revision": "896a84e5a7062f0746f6526d578ef565"
  },
  {
    "url": "assets/js/241.636e0fc0.js",
    "revision": "6982f350e096489573019219aaf5a807"
  },
  {
    "url": "assets/js/242.f084db28.js",
    "revision": "b98e05e7daaf4a717bfebe76b19c6861"
  },
  {
    "url": "assets/js/243.f2fe82c5.js",
    "revision": "da91ec909e26c1302e6d678c356f107c"
  },
  {
    "url": "assets/js/244.c0e5166b.js",
    "revision": "9de00d7918b453bd0cd9b97b95bb9b5b"
  },
  {
    "url": "assets/js/245.830010b7.js",
    "revision": "22a4f4f5b6c033545b728e61ad60bcc5"
  },
  {
    "url": "assets/js/246.792410bb.js",
    "revision": "b4153315abc4b56c38a99e46ac0f9195"
  },
  {
    "url": "assets/js/247.8bd4a696.js",
    "revision": "db9aca0e483a2c5b12d42823b05ab8ee"
  },
  {
    "url": "assets/js/248.b56c5172.js",
    "revision": "629c00f82bd220636fefc9ab061b3bd4"
  },
  {
    "url": "assets/js/249.a0e5fb4f.js",
    "revision": "174209c8e8008d7dab0a4a1e5c7b57fb"
  },
  {
    "url": "assets/js/25.61bda1c7.js",
    "revision": "fa8035347293d9a199b89e5439507f9c"
  },
  {
    "url": "assets/js/250.a26ff8ae.js",
    "revision": "57e33428485149f3c51930f4968bfd5e"
  },
  {
    "url": "assets/js/251.f7f6ce32.js",
    "revision": "bbcf45a55532d63cad199c2942d05158"
  },
  {
    "url": "assets/js/252.955018c4.js",
    "revision": "42790fdc0c8bff3034ac7adc7db35cee"
  },
  {
    "url": "assets/js/253.319381ce.js",
    "revision": "9e748d7a4a39e59affc6324fd2bdffbc"
  },
  {
    "url": "assets/js/254.4da0486c.js",
    "revision": "cdb6b6b22eb49b0cb0acbdb35ad200f2"
  },
  {
    "url": "assets/js/255.e7dcec2f.js",
    "revision": "c0e211853596eb087b7c9e12cd91c74e"
  },
  {
    "url": "assets/js/256.788398f9.js",
    "revision": "105fad277673d0007156a95d8283d23a"
  },
  {
    "url": "assets/js/257.c41323c8.js",
    "revision": "08466433dce24beaee8d9c1234ff2db9"
  },
  {
    "url": "assets/js/258.c5160576.js",
    "revision": "57676a668d2ac616f38efe9b725d9a90"
  },
  {
    "url": "assets/js/259.ca17af29.js",
    "revision": "035d521b2a8465e5bebb049164174b5f"
  },
  {
    "url": "assets/js/26.c0bac1e4.js",
    "revision": "7470b957e9daf869904578865b9cc631"
  },
  {
    "url": "assets/js/260.8f38ccef.js",
    "revision": "3035f2942e9dffba41c159bab96cad31"
  },
  {
    "url": "assets/js/261.0d62b76f.js",
    "revision": "40e774ca76d9611dcfe2e01e443ce6e0"
  },
  {
    "url": "assets/js/262.5ed53f07.js",
    "revision": "36a7591e50638f5294261907b6345f1f"
  },
  {
    "url": "assets/js/263.e205372e.js",
    "revision": "56ce90ae080809dce5e30e79790936ab"
  },
  {
    "url": "assets/js/264.e7ab0e3e.js",
    "revision": "726872c55a7df33a22ceb5118e6b5196"
  },
  {
    "url": "assets/js/265.c78af9be.js",
    "revision": "f6cb2abc671de05047d61cd989a4c844"
  },
  {
    "url": "assets/js/266.21288d20.js",
    "revision": "76f3eb4e38c2e425a5c6294f3933ea45"
  },
  {
    "url": "assets/js/267.aec22206.js",
    "revision": "d5d1904884bf2f6e947f4ef32c7f76bc"
  },
  {
    "url": "assets/js/268.cc5750e9.js",
    "revision": "54f50b3d90d54b743f2cf3940666769e"
  },
  {
    "url": "assets/js/269.f2d2ab98.js",
    "revision": "6f160b3f589bfdee856de273032727c6"
  },
  {
    "url": "assets/js/27.35a0d82d.js",
    "revision": "d753c37fdcddc865ae5e5d0be097a880"
  },
  {
    "url": "assets/js/270.01da6063.js",
    "revision": "e03ed40558b0fa30776c4f41c686cd65"
  },
  {
    "url": "assets/js/271.7551dad3.js",
    "revision": "337ccfd57fb976dd6a97afbc5d4a504b"
  },
  {
    "url": "assets/js/272.a05c2f31.js",
    "revision": "898ebde2a59447ab3d6fcfc5208d3614"
  },
  {
    "url": "assets/js/273.8ee30514.js",
    "revision": "fd43cf50846bb18126dc58def73e3b0c"
  },
  {
    "url": "assets/js/274.487a46ad.js",
    "revision": "086c44f21b953da599a7bce75e29716e"
  },
  {
    "url": "assets/js/275.fa738180.js",
    "revision": "e4bd651b36fdfcfa2c95564318ab1446"
  },
  {
    "url": "assets/js/276.4b19fa7e.js",
    "revision": "e2ca3315d2b0322ea01827e4c1cc9900"
  },
  {
    "url": "assets/js/277.2786a992.js",
    "revision": "62821ef57e865a0ee7dac1f0e90480e3"
  },
  {
    "url": "assets/js/278.2d620866.js",
    "revision": "ef07971ed1376b4759b0d90e9207c407"
  },
  {
    "url": "assets/js/279.0d961baa.js",
    "revision": "31c2c9c60923f434e70c6819db5c7e1a"
  },
  {
    "url": "assets/js/28.96dd96c5.js",
    "revision": "8af8229e93fca23749e58d3d0c7bec21"
  },
  {
    "url": "assets/js/280.9bbac6e7.js",
    "revision": "b085f2dfc8269c99f7fd16cb733f6487"
  },
  {
    "url": "assets/js/281.2941fbf7.js",
    "revision": "f883f5ef6e1bfd39b26c58be00f04a43"
  },
  {
    "url": "assets/js/282.e982e8af.js",
    "revision": "5eae65dd5b1c831286cf5e0d7e0eaf6f"
  },
  {
    "url": "assets/js/283.cba5a4d3.js",
    "revision": "243ffc0cd1ab379375eb314b1591a73a"
  },
  {
    "url": "assets/js/284.0be2df64.js",
    "revision": "281dfb907964adaebf9e6ca11a39b707"
  },
  {
    "url": "assets/js/285.575ee979.js",
    "revision": "13461893b192ebfe88deb0e275191971"
  },
  {
    "url": "assets/js/286.53d1ba92.js",
    "revision": "d20a4ad6a194c45fb6d36bc989bc95dd"
  },
  {
    "url": "assets/js/287.837d55df.js",
    "revision": "83010413bf362801a6fd4e8dc555ce75"
  },
  {
    "url": "assets/js/288.8bdb322d.js",
    "revision": "8bbf94c7be0e328c23473526be633a58"
  },
  {
    "url": "assets/js/289.b2f88e36.js",
    "revision": "fb17af46f4f167a1820495ea0037bced"
  },
  {
    "url": "assets/js/29.e8720dc9.js",
    "revision": "559e7ae4536cc388c33ea129a5e429ae"
  },
  {
    "url": "assets/js/290.c25b2a12.js",
    "revision": "9d233084cd08307968d9802ef50dbc0e"
  },
  {
    "url": "assets/js/291.570a1682.js",
    "revision": "5437aab34ae7c787089c69046e7691f7"
  },
  {
    "url": "assets/js/292.8ef71e18.js",
    "revision": "931e4dd01d10a1cbd5321ff510ad85a1"
  },
  {
    "url": "assets/js/293.5b2612a5.js",
    "revision": "6dc3424df0b30cd282149cbd4649fb73"
  },
  {
    "url": "assets/js/294.94f41c8d.js",
    "revision": "aba57ef7dbde8bada3f05c24d279fa75"
  },
  {
    "url": "assets/js/295.71ee2f23.js",
    "revision": "30105199a1eaad2fa777f3b05a1cde7b"
  },
  {
    "url": "assets/js/296.3b2b1aaa.js",
    "revision": "41c650d2ee9487243ed62806906b0b2a"
  },
  {
    "url": "assets/js/297.84173504.js",
    "revision": "ff09bc955a9d0fc64937a91f8f44fdd6"
  },
  {
    "url": "assets/js/298.178e7900.js",
    "revision": "58f017f4cfa9639b7aa79428d5ce562b"
  },
  {
    "url": "assets/js/299.1b773d8c.js",
    "revision": "01974051500111ba1b7e996ab80c197f"
  },
  {
    "url": "assets/js/3.b02c4595.js",
    "revision": "0dafd6d3829a08a51c41cf47f045b516"
  },
  {
    "url": "assets/js/30.fbd7d02c.js",
    "revision": "8c83da82db3958c740b23c2519219638"
  },
  {
    "url": "assets/js/300.f25a9024.js",
    "revision": "2d306e7c65d16fbf33a5035d4d6a81d5"
  },
  {
    "url": "assets/js/301.295a028a.js",
    "revision": "a6dcdb88a7ce1de52238730ef1666f78"
  },
  {
    "url": "assets/js/302.80a652aa.js",
    "revision": "2315eb26bcbde99848b57a71abe75b52"
  },
  {
    "url": "assets/js/303.099bf2fe.js",
    "revision": "75d87888c17711d65539854737a45185"
  },
  {
    "url": "assets/js/304.a03c6d06.js",
    "revision": "be51931a517c1b6198afcac5c67cab6c"
  },
  {
    "url": "assets/js/305.26b3f27d.js",
    "revision": "3ad4ee81da6c649a8833a51b50bd6551"
  },
  {
    "url": "assets/js/306.1ab9783b.js",
    "revision": "bbc30b5cd51c0667789bcf953fa245e6"
  },
  {
    "url": "assets/js/307.d0215aa7.js",
    "revision": "cc6b30ab8c0b539e3d30207a7f10f322"
  },
  {
    "url": "assets/js/308.53069092.js",
    "revision": "3769ba34d20c9df70ff20c21bf9e4487"
  },
  {
    "url": "assets/js/309.b89054f1.js",
    "revision": "e0f4c2c3d40ebe2fa0f63da5852a481d"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.ff7bdc84.js",
    "revision": "5534c87249c073021e4d42e276975e3b"
  },
  {
    "url": "assets/js/311.d1a2d448.js",
    "revision": "18d1c7194415136df28f05f169a41bf2"
  },
  {
    "url": "assets/js/312.431aae0f.js",
    "revision": "93c93088e83232ed4229b138c6e61654"
  },
  {
    "url": "assets/js/313.c8fcc2ed.js",
    "revision": "a238aaaf17e6b71b8a4c561ce4ccf9a9"
  },
  {
    "url": "assets/js/314.a91e83e8.js",
    "revision": "f0cbf6c6603f923120c0809bcf502e30"
  },
  {
    "url": "assets/js/315.62f3baff.js",
    "revision": "fa6a34c5cf24d89ae6b8b20992573f7a"
  },
  {
    "url": "assets/js/316.51303b4f.js",
    "revision": "a97a2e9b6c16c612d5c31666ab500ca9"
  },
  {
    "url": "assets/js/317.cdd19bce.js",
    "revision": "40d93eb7d1fee62e072d52309314fbf7"
  },
  {
    "url": "assets/js/318.7c700d59.js",
    "revision": "d5cde42d67ed06df1ff6b02e15379740"
  },
  {
    "url": "assets/js/319.7ec96a85.js",
    "revision": "fcde99480a6468a3576d3424c22faedb"
  },
  {
    "url": "assets/js/32.03f60c2f.js",
    "revision": "fcf8ce88db400ff6d308a0f030c52e35"
  },
  {
    "url": "assets/js/320.32ceac87.js",
    "revision": "86cc252a6dd7f77cb9c11e74ac8c78c7"
  },
  {
    "url": "assets/js/321.a5c48d7a.js",
    "revision": "6de026705a5042dd68908cf16c3bc87e"
  },
  {
    "url": "assets/js/322.0e27fc3b.js",
    "revision": "51f96141c3b7040519c4ae14b3f712b3"
  },
  {
    "url": "assets/js/323.495d8dd0.js",
    "revision": "ace48cdee7ad4d84b183fbad5aa826c3"
  },
  {
    "url": "assets/js/324.a89ad0fa.js",
    "revision": "365376842d1641b334720122bb6a8598"
  },
  {
    "url": "assets/js/325.64c49f9a.js",
    "revision": "83197a07dc01da67309c80df1655ea9c"
  },
  {
    "url": "assets/js/326.5f0c3a25.js",
    "revision": "a2bd935f250eff3df98113817d5ba4f3"
  },
  {
    "url": "assets/js/327.9d9bcda8.js",
    "revision": "cd6a3f71c3d7229f0fa15e55e62211ef"
  },
  {
    "url": "assets/js/328.7899fb57.js",
    "revision": "851c5f4d970608ee083e6192a530d636"
  },
  {
    "url": "assets/js/329.ed81730b.js",
    "revision": "17160590b4d6998b6f3644aa6bafb5a0"
  },
  {
    "url": "assets/js/33.e7c61819.js",
    "revision": "60f0e8c7995103ee941aa2955fe6352c"
  },
  {
    "url": "assets/js/330.49bbc711.js",
    "revision": "7e1d5960147c3620c036fc5f2f7bec95"
  },
  {
    "url": "assets/js/331.043adb62.js",
    "revision": "a9fa5936782b5821d69d81452ebbf67c"
  },
  {
    "url": "assets/js/332.a03b4cb7.js",
    "revision": "ae2ad138100ab5142f6987f303cb581a"
  },
  {
    "url": "assets/js/333.acc39296.js",
    "revision": "32b23f0d075da2f32c391f7a324f42cd"
  },
  {
    "url": "assets/js/334.f5714ad0.js",
    "revision": "173920a7219b1de8791fb4ca51aaab9f"
  },
  {
    "url": "assets/js/335.0c20c016.js",
    "revision": "0db8ea4456b337c989a9a218d60e6e04"
  },
  {
    "url": "assets/js/336.8a801311.js",
    "revision": "f701c144aba1faf46082a261fc431a8b"
  },
  {
    "url": "assets/js/337.638d1e4d.js",
    "revision": "91e38c2cb79be367e7f7c5339d551935"
  },
  {
    "url": "assets/js/338.1b8be977.js",
    "revision": "fa29ba2a2faef72f8d09d6e1d0f8c774"
  },
  {
    "url": "assets/js/339.46616b52.js",
    "revision": "dbe20d70b37873ab97630f707c5601f4"
  },
  {
    "url": "assets/js/34.03f32214.js",
    "revision": "866338ec677e272578903216162a5664"
  },
  {
    "url": "assets/js/340.e124d041.js",
    "revision": "c012c87cbdc1b604d934ed988f665e76"
  },
  {
    "url": "assets/js/341.fcbf2f04.js",
    "revision": "e17da517def1572496bf6f2f5ad64087"
  },
  {
    "url": "assets/js/342.3af46a9d.js",
    "revision": "1235fa783378954dffd2df31c09491b6"
  },
  {
    "url": "assets/js/343.9d0d4096.js",
    "revision": "8b08f8bf46a6de63a2634b35c7f5a6de"
  },
  {
    "url": "assets/js/344.3ba70984.js",
    "revision": "d561fdda743f5290e3c2212e73d441f7"
  },
  {
    "url": "assets/js/345.7267507f.js",
    "revision": "356a198558a55906b4e94a64cc4abb2b"
  },
  {
    "url": "assets/js/346.c544088e.js",
    "revision": "53381293d5aaeb8d496650b024563633"
  },
  {
    "url": "assets/js/347.950d4e53.js",
    "revision": "9a4fb5c3ae085de2f58be4d9f4c085e2"
  },
  {
    "url": "assets/js/348.c8b50fe7.js",
    "revision": "29bcf12b37651a367cc9833125ba8009"
  },
  {
    "url": "assets/js/349.ccb116b2.js",
    "revision": "df96b24e365aca24bce4f4b2cde16be4"
  },
  {
    "url": "assets/js/35.5e3d956b.js",
    "revision": "6bc5e150fef056a07b22d24a30b31ca8"
  },
  {
    "url": "assets/js/350.7e124e73.js",
    "revision": "1eb85dc88a138b2c66f47604c6b570ca"
  },
  {
    "url": "assets/js/351.b7d9a4db.js",
    "revision": "b9a6a088b2ff1b2809f44df54562128e"
  },
  {
    "url": "assets/js/36.20444a15.js",
    "revision": "823d782b27fe0a876d11cd28ec8d7628"
  },
  {
    "url": "assets/js/37.81c524de.js",
    "revision": "7b7d9561b843c15e435ace2a98d95c4a"
  },
  {
    "url": "assets/js/38.f43413f6.js",
    "revision": "2e3653d0e8b51e14f6b36164a37ac926"
  },
  {
    "url": "assets/js/39.6e63a644.js",
    "revision": "9ba9e82f882a98441fb2de30867e036b"
  },
  {
    "url": "assets/js/4.2087ab43.js",
    "revision": "c09acbbee247cf7b0a2e4c3b96302e71"
  },
  {
    "url": "assets/js/40.08fd7009.js",
    "revision": "fce6906ae372a1ff04322728483b9c98"
  },
  {
    "url": "assets/js/41.71ef7f6d.js",
    "revision": "1f60975bb3962fc77fc2da0632cf918b"
  },
  {
    "url": "assets/js/42.92d3f46e.js",
    "revision": "c8d2740221a24d9b6a547233d5487169"
  },
  {
    "url": "assets/js/43.43816ee0.js",
    "revision": "3bf1cd9798dd6257b128ed7e8f625d16"
  },
  {
    "url": "assets/js/44.81fab426.js",
    "revision": "b7e76595d382d0f3047b4052a2cfe41f"
  },
  {
    "url": "assets/js/45.c1d0be26.js",
    "revision": "10275acb8a95d89ceb7d3be0138369ec"
  },
  {
    "url": "assets/js/46.0cf9afb6.js",
    "revision": "532eadb2a8e7541ec9309f3c4afefbca"
  },
  {
    "url": "assets/js/47.2ba9d9df.js",
    "revision": "f42e2d86bb0c2b23ba3e53fb595d718a"
  },
  {
    "url": "assets/js/48.05516ff9.js",
    "revision": "b2e2d686304b159caa9ea7b1974ea2c8"
  },
  {
    "url": "assets/js/49.81354fbf.js",
    "revision": "3920d18149b5b6f3abc0179113ad324b"
  },
  {
    "url": "assets/js/5.d11cb774.js",
    "revision": "bf37a02c3fbcca5ff3e4a7bb12a810da"
  },
  {
    "url": "assets/js/50.3d500936.js",
    "revision": "245aff57d778b1c3bb32d279201aaee3"
  },
  {
    "url": "assets/js/51.b6ff928c.js",
    "revision": "d3f00ee3186ec4854864c10580349016"
  },
  {
    "url": "assets/js/52.cf06f6a5.js",
    "revision": "1ef5767c9414801c26587dd18e768960"
  },
  {
    "url": "assets/js/53.b1aee4e7.js",
    "revision": "8eb5ad9c26258227ac8b50de56e7bfbd"
  },
  {
    "url": "assets/js/54.4e3522c7.js",
    "revision": "e8eb8c9d142e8e91f74cd151b6c23488"
  },
  {
    "url": "assets/js/55.11e93c3d.js",
    "revision": "1cbde9343a2bc392e3e0435a973b9ce3"
  },
  {
    "url": "assets/js/56.c65d8879.js",
    "revision": "b51c47bdc220dee6d9d0c71d243cd3ea"
  },
  {
    "url": "assets/js/57.112a1416.js",
    "revision": "79396b3093db7e6f792b476546c971fe"
  },
  {
    "url": "assets/js/58.e8a11549.js",
    "revision": "3f599e89c919081581fe503c961b94a4"
  },
  {
    "url": "assets/js/59.75da252f.js",
    "revision": "62dc812c4c518e90591fb3dc9a98869d"
  },
  {
    "url": "assets/js/60.799649aa.js",
    "revision": "128b7a306d933e266e227def65d73757"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.0c1050d8.js",
    "revision": "d05b3a4675f3b53117025e4daa1fa9a6"
  },
  {
    "url": "assets/js/63.f9618695.js",
    "revision": "daddc5fcd60578b244f66096ca684d4c"
  },
  {
    "url": "assets/js/64.3eaaf136.js",
    "revision": "625c8db01601a7057a966fa077385cb7"
  },
  {
    "url": "assets/js/65.ac14caaf.js",
    "revision": "5358ccf9ca443f3c39a1a5d1aa6f3ead"
  },
  {
    "url": "assets/js/66.81726e6b.js",
    "revision": "d392d07df6c2968f014bbfde1333357e"
  },
  {
    "url": "assets/js/67.7d9c2046.js",
    "revision": "2391c6b792c9aa0f756797d2307e8199"
  },
  {
    "url": "assets/js/68.80872816.js",
    "revision": "be14a522f1e43fffc95abe4fedfef1a0"
  },
  {
    "url": "assets/js/69.7575939e.js",
    "revision": "6044326eeab3422a0fe7eddc3f2626e5"
  },
  {
    "url": "assets/js/70.e3c53614.js",
    "revision": "82aebcbbd7b4d4346865f994b0a0e761"
  },
  {
    "url": "assets/js/71.23c8fc07.js",
    "revision": "80b0ab7d9018166d4fd01d26b167c695"
  },
  {
    "url": "assets/js/72.6c28c829.js",
    "revision": "770596df5be80525da387c705d3b0d2e"
  },
  {
    "url": "assets/js/73.49678976.js",
    "revision": "38c2d90254e0b9327a250bc66637ef77"
  },
  {
    "url": "assets/js/74.f77090d0.js",
    "revision": "68b1b42e61504dfb81499d23c64b4bee"
  },
  {
    "url": "assets/js/75.98898394.js",
    "revision": "09f9b63509dcb999561a2d6c5d4339b4"
  },
  {
    "url": "assets/js/76.52022aff.js",
    "revision": "81f204a20a129d3f0346a6e88f73d3d7"
  },
  {
    "url": "assets/js/77.17f30139.js",
    "revision": "1662c5aab7a0711de2ee160fb998d01f"
  },
  {
    "url": "assets/js/78.c7849e86.js",
    "revision": "58c71609febe1986d8a0426e5ad1df6f"
  },
  {
    "url": "assets/js/79.12962a99.js",
    "revision": "b54cb25e747f70a28466310e7eda2037"
  },
  {
    "url": "assets/js/8.81beaff7.js",
    "revision": "438d0ce6ebbe208913e036accf3ac8d6"
  },
  {
    "url": "assets/js/80.422261b6.js",
    "revision": "e7de2ca1b0bd96884d3aa67e7da9dca7"
  },
  {
    "url": "assets/js/81.eac9e13a.js",
    "revision": "32ca3fec08c73c0248154fee5451029c"
  },
  {
    "url": "assets/js/82.a9c375fb.js",
    "revision": "60fc70734401b542d34241acee55b024"
  },
  {
    "url": "assets/js/83.a4bdbc61.js",
    "revision": "3df3d12dfe23a13a24864a1f17bc81fd"
  },
  {
    "url": "assets/js/84.cf68e526.js",
    "revision": "2569e5b526829f2bb38d99a15c85897a"
  },
  {
    "url": "assets/js/85.87c9fcad.js",
    "revision": "3c26e9c0951b4616d022486b1633e436"
  },
  {
    "url": "assets/js/86.73ccb4cb.js",
    "revision": "08346513472eebab2f38ffa59a96d216"
  },
  {
    "url": "assets/js/87.acaf6bb0.js",
    "revision": "4121a8f2d8b43c0b0cf6f336b84a9d35"
  },
  {
    "url": "assets/js/88.c89c10c3.js",
    "revision": "7ddf14d07222e5cd19add8f50b3106d6"
  },
  {
    "url": "assets/js/89.8e045bc8.js",
    "revision": "f152d751583271edca7a0c89be23cdd3"
  },
  {
    "url": "assets/js/9.c69183be.js",
    "revision": "bc500b5dded2c478bac9649cf8069a8d"
  },
  {
    "url": "assets/js/90.ef823a23.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.9f6ab0cc.js",
    "revision": "864125bb9af8cbcdc9cdad912767a784"
  },
  {
    "url": "assets/js/92.081cf6c9.js",
    "revision": "493991f652fead8b9ba7ca9e1a136b47"
  },
  {
    "url": "assets/js/93.425664bd.js",
    "revision": "63d85c8002dbf158cd08a6cba4211e44"
  },
  {
    "url": "assets/js/94.9dfd5490.js",
    "revision": "b9a18c831264b8cdf903cb1ef975594c"
  },
  {
    "url": "assets/js/95.496677b0.js",
    "revision": "e5991e8ef7b590b5adc95be669bcfc04"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.ef45a441.js",
    "revision": "abd1f4645f335ef343766cbeda89733d"
  },
  {
    "url": "assets/js/98.ec0e572e.js",
    "revision": "75bba93aa2cb81224e2afabfe322a00f"
  },
  {
    "url": "assets/js/99.f27d8723.js",
    "revision": "ad59565aca370fba81252d6016ddb7a7"
  },
  {
    "url": "assets/js/app.48204434.js",
    "revision": "a1f849308696845303a8e4dde7ded084"
  },
  {
    "url": "assets/js/vendors~docsearch.70becf99.js",
    "revision": "4098d2f5bced23ccbfec4e7737f2e45f"
  },
  {
    "url": "index.html",
    "revision": "348541ed0e3f408d3988a9569dd4999c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "5dcbb3fba82a7328ed20ea9db02519f7"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "ef0e37912b8b3ec2ec14e1efeb362bd0"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "d26cb17c4a2460997c656b9e42d05760"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "f0ca8a173db94aac0a3589e656593bd1"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "156f0b8abe3344709a4660d2a25033be"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "80e153bae7a7cdf71f99c12b6dcd3fa3"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e239ce73484d7d26d78f0e725749fbff"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "754dd0b4133671ced249466ad2d90032"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8894201c8aa8d8ad56dedd73f522cad4"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "6bf93cf4e3a8754560e1908bb09f43f8"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "a671c503f25e46ca279ad25b9d9b23e3"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "75ae81615ff72ce9355f93d971e4cdbe"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "311d1a22ecb6248e9d5a4d1dfad1ddb9"
  },
  {
    "url": "master/api/index.html",
    "revision": "e08146a863f391ae3597abd9469457cc"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "10051af893dbb60d577954d340437049"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "a12fed377044a4d82ba3a21a41c6ac79"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "addf2954181e57ac21af589464c7e342"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "a67125d87154eefc677bdc208652ffec"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "61fd456c1aa43669176a6f97b63f918a"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "3c19689e83640c95995892e724b11ea8"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "1d53e8a9a85555955d4bfa15f2c73325"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "5e131ca3e775f80dff890c4674838bfb"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "640d212836af027f7e2e2f120fa3631b"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "61c50fdd43034ef8decb749656f9f72b"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "446e00f832103a62ced740a3424a46fd"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "39f373ef3a174bae4e23b56a81352350"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "143eb10ede745e58f6f0dee177bdec0c"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "5224953ac6eb9b3d7b8ed4cd700fcf61"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "296b5780352447381af47f66a2094b37"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "f3e091e03ae0ad719b4f9999e8febaf4"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "90a46a61d72f8e16db7d61e8df938ef5"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "98abf00e00f809121407f9174dd236bb"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "a916f0b8842897d601b9a9b3df64d20b"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "af2cc1c7d7796a4e72135db5e263b2ae"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "95b4efb9b8ce492576b5313a153ac302"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "892108ae87831220292e6b0b82393df9"
  },
  {
    "url": "master/packages/index.html",
    "revision": "bc1d1b96acc2ad70ce21319037b2edf3"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "84affb794002b1e86e7194e4ed78c2a1"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "35638de6d6fdce22854af68bbb8695a0"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "c82e8ea54d7bf0dfd4cc592ff96460d7"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "353184d27dff7a0984691e1df503ee6e"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "fd282c9951f5fbd43b0599432962301a"
  },
  {
    "url": "master/packages/views.html",
    "revision": "de270f9525935c4a2d02157ad2ab0a12"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "bc68c75f02dc5b2aeb291e78245a8d9d"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "bc0726730c6f4722858a82ab975bf8a9"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "9a80dbd1470257cee0681cc06a7fb0a5"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "6ecb9a58fd2e8ff28c9ba275a7de49ad"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "5bdf69269f0251ade5d19cea2bf9e462"
  },
  {
    "url": "master/themes/index.html",
    "revision": "e0e7f7c93872cc35e8dc5fc62010e5c2"
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
