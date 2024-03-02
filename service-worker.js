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
    "revision": "7ab265f97cc675c02d29f61320bec9ad"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "50a229222e6f92965e140f1fc5a46daf"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "9418eac5790ae7bb0c1025d48f962ed7"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2533a14ed5eda533751c87936ad86d6e"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c3893cefdc7facc5384439584097173e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "9d57737e955c568635e4146b8203423c"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e4c4486316e1f3c4318e4d29464fd797"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "eec5213bf12175dd76c59a4e1ba088f2"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "a6d7b3e4f248910a84a2cd70f2a96d8a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5c306021690c2083117154cebc6b20dc"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "af4268f17e0d2c929f4e87c4ee066818"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "2f7ef13d4aad8e8a6b62858dbd550440"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "637de3db5a3bfc3cf8ac423863337629"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "66ffd64307ea97a9dc8ffb7ff4bfc7c0"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "f941b40a78dd28db2f885ec622b8461c"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "3ac13b740d446ac16adf0ec4241398aa"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "e1b34fb0b43f718360b310541c0ae042"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "9eef7829659c2d0eae1def274b2e123f"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "1653feec9a35b4dd750199a411194983"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "4b3e3420640465b28a7252e747976ee5"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "615abdb06542f464faad829a54d87d0e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "eb9e3ddcacb359acd5a570d4521855e7"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "59448109987100da832ca94410f5da1f"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "7955610622cd3e8093a795446a11b09a"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "a73e9a73c44195a59873c020d5b636ae"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "0e0fac396a69e28c12288f6e664f4272"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "9240347e4f5f7a5ac6696b60d85b629f"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "0758e7e06f66c3047a26a7bdfdf97fe0"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "ade1cf7bf18292f6e6bffeec2a688eb8"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "960aa41c778e5ba74ed12e2243e76a90"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "665505e0c0f4382936ede1f54b199bfc"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "26b20d11c11dd77e5be93a67a03de3f0"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "8c18cdc28f5cd17a2fb339f9449eb221"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ebdf074e5d18093669d64d0b92b45b56"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "9c2cd0d787164e090253b997334c90d3"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "30c13adfa7b0f27cbc222a4dd42ff4d2"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "248e824e08a53eea0e0759bd7da627da"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "ad3da1c8d057e25db3a23bb73dc804fd"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2fe58023e3927f51a51f7afca5c64d58"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "c908936a74b59e7b2087d66a42a8d6be"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5d25a5074fce84247d2ee0c686de02cb"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "70a73272cba00ce3c0cc9c8c43d0d0d9"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "c0b55bd8ecdcd8e5c0855170c270c880"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "33e718466ba4c48d565fb8a4b1c67c74"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "eba87a7b9d1ef0e059571d0ad66bf47f"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "1a7e3e7b0900ff8cd17236e103273edb"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "783c95744c10e586457208639ca2d294"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "840d4b65da8eb65d5bcbb8aa0258168e"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "031f51855fdc35db742787a1253badbf"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "8725536949e234809a4d6eb6e928e952"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "aacac39e61aca72648e1fdb60829551d"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "2313156700c3cb08ea85d246f402fdae"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3dc893f4da78dd10d4a32d504fcaa0d9"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "86f6223ef4dffe589526a8d271adafb3"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "20cd3751a965b6f8c6b48eb0647e037d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "cefee37ebf2e08483006a6426175fdee"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8b217b005c2ba7fa621f5b1995b12032"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "604db195337a4d2b6304de5acb67cb3a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "5d4ac7a9795b0fe13e7196a0f5ccb2e2"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "39c224d3f12ea2994b03fe5ad7b38fab"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "26bec90e8d3c941d04de73f28123e5c5"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "48c97b04509f197ef86ebbd3669f6bc2"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "79294e830db4a40c328cd97b5d4abbec"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "1b500bb1f3e5b4f2b7034d490883d35e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "568aa9222e24306520fadc0ec7cd3fa9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "89da87294a47ec4925f9bc1baba82431"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ae5dee846fdf32bc0a8e0edd39833f71"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "719d0fd03634295bb23dded55d6e5f1d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a677f2905e7f8abb5e74fc8e129c4b6c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "42181f51df8e64d737fe6a4d60238a25"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f5b2ade840bffbf092f79c7dfb949660"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "f156da453b3998162cd8ed642d95cf39"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1a88ecdc835c595803b438cbb522947a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "cc76c6385062959a868a97035b420a34"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "80a059bd4f47a0a3abf276bd4d84bef4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "c262d6fd4648bc769172bd896998afcc"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "18852f09185bf322971a0e83e22c0174"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "f53adf77e18c4d10d669b7bcef2f5075"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "d671839806d7fac6124ca3a356d67df8"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "65195e3e8c16412f6008f4c06eaf2b19"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "7a4bd6fc82c4455728fb3797c913eea5"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "69bef8b12e2231c5737dc02c956e7e7d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9525a428d18b586bccdf774f8d934051"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "97ebe44b7575f9e863d28c3a84ba82e8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "fac6dd6d437ede6b3ffd2d9ac3663fc2"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7c46498707928177787f333c10bf6461"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "5414f562322282e43698b756f30bbcf9"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "ee3fb0c030ba0c4d9a4989abffe05a36"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "c42432c94340aaf737540985e3776775"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "fd2a496cf00add5a8530dbb8cbb7e7e7"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "ea1d3f9f6f4c0e1518279f5e42f91732"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "529dfc7f35b47d701bea1ea80100f961"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "228f13b526e88f59db138f36e2b007df"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "5afedf13a0aa9f9d84fb4ad8f927e479"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b7e5695aad739873fc97bfbc3b5ea71b"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "29eb00d3de418ea0fa8ec1ffe04c54e8"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "4422d64c8cd5e040bcf687969255ac73"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f09b09851d83d20e1ca14b31086c74ec"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e3057be5d174f7c4c60631c566f36537"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "bc14384a4cd73276deee8dc62700a948"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "02632a2bd4f1649128811fcb8c0b08bb"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "f580c620bbb0f7e99e472a9f635c5281"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "4d4717a65acf6e928f72dc930b1e0450"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "402d2af5df509e0e70a87ce9680e3286"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9dfa3f74039ec4834606d92c258be98c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "0f8b8b1cd78da322d0cd8b905f18fc74"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "0c996063b1014dc21843416d0d721ef6"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "00be51e3148b7d8500a240db5c71e77e"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b382d6e1d25d6fe99b9f30b9e8a8dec8"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "fbf235adee1da2e76e7d298a13e1cd03"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "181bc2a9e2191fc661619ab7e1d8b860"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "e4711b077819c77988de453301810cdb"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "7151aa5fe261956501187f2df2fdd943"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d598b48fc65975479d908cb8fb25491b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9916589866086059c0d3dcff4a40e72d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "3e5a5edc9e4cc23a19523d2f8b29149f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1b8cf47b48f8fcc7081ba8b14966fe36"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "bd37b26e07e27afc7264c4598f41046d"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "bceaaa6fea77ba9985ebd3eac1710d52"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "326e18ca95c2f01749630cdd39e64ef5"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "ebb7fb3d7b236d5cb976d347dec68499"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "f9e8ea123ffca091cc79caeba83da98d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4fc33b83ca6d2cae6df3d8fc45810263"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "fcff07a4ec7a95ecfa091650f7c8e5fe"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "65ee052e26a5f4c88eb2f5100ecd395b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "9cc3f4c9bfc656f12d959db75e727c52"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "228524171d5b23a303f4ed6fc858b22d"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "90d962eb3138147db5fb8c361e58c1b0"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "bff94cf84a85b61413a6b86a76b70e21"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "fe9786c873f6130f169cc3361bd321b2"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ffb8fb139b6d4962be15cfbe32a31e6e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "9f3dbd28c67e14160361930ac227d576"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "4a77abddd50098e469840eacb4e70164"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "f612a1c982d31d6281cc80cf493cee15"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "010f8e50d56c4b2d2ecd106cb0396148"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6fcbbf8a4d3cb3e988ce531676bd6161"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "1a74b401c093739c407ff768f3d7d29b"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "d7695d9bb3fdc947da33fbacabbefd37"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "31ff689f8c2f88334e92a25e671fd76d"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "e846916f28c35109abc8bce6a1015554"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "407acf910d25dfb54a876bed256ecf73"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "b0e9dc92f6f8f47ca33888ded79d5ec0"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "860ee22538efcc4d822eaa076a11274e"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "9101b5b320a77adb5bcaba10cc35f0f2"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "f9e597fcd975c16c2f001663a4b18433"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "e8b41ead5fd79e1d1087338fe0b0c3d4"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "09193e95693cd6a2352414b807e36040"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "434d6e4452a1e3d0f37c35f06238dbac"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "054c30348e801f74efb28ddc2f60ac89"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "0107f40ba153d49de161037cdb161f9e"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "760c5b3d012a36278362614dc70907e0"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "f29dc74a3afb3f72d9e3a0ffff3dbe30"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "84ebf0df2e785eb0f06cfec271b4c446"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9b9d294a1d28ba21f238491469fb3c70"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "6a2fc59b3a5d8ee1c67bdb6b5ada4de4"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "041bfde71a2cc06316912dbdcd1649b9"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "eff8d2c7de2f05581afa1296b4d02c03"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "78115b687ceae4f790f31d272d331c35"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "7ed4b255860b6f1c651b4607702645a1"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "66a7d0c2c0552d6ca5eb22e05051dbad"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c8c96263cc5bab80aae313fc4e4e7fa1"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "e78feb366fa20c4faf90d2b79759a6c7"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "f17bb6bd16f24888d537e636623c3ef2"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "7d36e464e9fb1e7225410d4ea6ab6000"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "fda1c84c2fa97bc65f7954ec5a635209"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "f946608f7eb0b21f2482a4dd1aebef25"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "90473519a8d45a78ea7d1c0f1e1b146d"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "7f88ef07b1a51c3ae00c35b60203ace4"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "d0df9abd7485b4c53aea0c5f85bc24ad"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "94f3024e7a59c9d7440823a180156929"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "b7ad856510dcfe8d4cd0e6b9d3761b02"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "17406a0c0521120f68f6b2aeaf33fa3e"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "85a991cb0e1d7d8565fb16456dcfbb1c"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "c6484ca9ec1d1af5d40be2f13bbe1fb0"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "c7ac28026a4b4a655ac07f7ad3bad068"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "b3f32367322047078e427b4aecf76f84"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "359872195f5db927ddc9547cc1a14449"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "280d764909e37e13af8fc896d038bcbe"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "9173b18b5ca5ff02f3395efae54bad27"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "71e54543ac556b39568dd5aa41ec9509"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "1716223428f93366036bbc84f22226ef"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "12085872fc63eb60d9979d5ce429b67a"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "dadc2285a8d573876ba35c9927a5e5d7"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "e21d755da5e5cfb0d660cd16847fd935"
  },
  {
    "url": "404.html",
    "revision": "615897f110241f92998fe26f954e0f9e"
  },
  {
    "url": "assets/css/0.styles.290b4c2a.css",
    "revision": "0280422672bda03460a71f496b67c6cc"
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
    "url": "assets/js/10.28c9dc08.js",
    "revision": "02c6f1cde484482413709d120a6ab31e"
  },
  {
    "url": "assets/js/100.eb2c1958.js",
    "revision": "5632a8ad8bd0de51c3f4c373f7a0f6e0"
  },
  {
    "url": "assets/js/101.16a1b543.js",
    "revision": "bc557f90caa9d6c62bab7bdfe9f8b4f9"
  },
  {
    "url": "assets/js/102.1ed4aad2.js",
    "revision": "58d8f634a9416ff135dfeea3de082839"
  },
  {
    "url": "assets/js/103.e7404bf8.js",
    "revision": "bfc7a07ab0b73437435e3488c273fb8f"
  },
  {
    "url": "assets/js/104.4b66afd4.js",
    "revision": "6352bbe0d41c0320132b27dc355c1c3e"
  },
  {
    "url": "assets/js/105.7a97025b.js",
    "revision": "c96f6bd56e4f2a24de9b543d15494597"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
  },
  {
    "url": "assets/js/107.1c6a9332.js",
    "revision": "0b92ea322f6f7a8a64d216ddcb74d0c1"
  },
  {
    "url": "assets/js/108.26b2acf9.js",
    "revision": "b861c7446a6e3796d6794e1b61bc007e"
  },
  {
    "url": "assets/js/109.6fbed98e.js",
    "revision": "da01eeaed245574403b783783b5e133f"
  },
  {
    "url": "assets/js/11.17fb33c1.js",
    "revision": "d3ae54a1fd80ef43cf93ade15b38fd4b"
  },
  {
    "url": "assets/js/110.5d9a7c9a.js",
    "revision": "286874afdb5fcd0caaf44ee9db51e809"
  },
  {
    "url": "assets/js/111.6767c025.js",
    "revision": "638a45cbb8f86e68831a87b1d148b248"
  },
  {
    "url": "assets/js/112.0793eed6.js",
    "revision": "22e1782ad9f92df6e774403cf1f18b86"
  },
  {
    "url": "assets/js/113.9bb607e7.js",
    "revision": "b7661985da6ad984be19785cfc98a548"
  },
  {
    "url": "assets/js/114.9801d35d.js",
    "revision": "7121d607e36190bc4a8c489b82f74cf7"
  },
  {
    "url": "assets/js/115.6953d655.js",
    "revision": "ee9058e2597724c1556d0b1dc8f6c535"
  },
  {
    "url": "assets/js/116.8bcc99b0.js",
    "revision": "b5652f033a50eb9efece9308189f75d0"
  },
  {
    "url": "assets/js/117.6de7d2f7.js",
    "revision": "2af15b952e111820c42bb584f92a9478"
  },
  {
    "url": "assets/js/118.b2deab59.js",
    "revision": "619874b618c550939b9346b85023bdfc"
  },
  {
    "url": "assets/js/119.f8bcc1fd.js",
    "revision": "ee413f64a0c37d5e94f52f3f659a9be8"
  },
  {
    "url": "assets/js/12.b060af13.js",
    "revision": "00e441de76f8353a44b74d3ed975e1e6"
  },
  {
    "url": "assets/js/120.fd9f923b.js",
    "revision": "e2f89c9e344de51fca2c3a9761e44a11"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.699c0e63.js",
    "revision": "8009eb042e8c6fb37809fcfcc8efc273"
  },
  {
    "url": "assets/js/123.11b329c6.js",
    "revision": "8e343236efac74a4b61fa18b0a8faaad"
  },
  {
    "url": "assets/js/124.992f05fe.js",
    "revision": "82659c8ce4e1dbaac96de82c95812867"
  },
  {
    "url": "assets/js/125.c2a62e4e.js",
    "revision": "1a6e7e55a465e51381305ed5d581f001"
  },
  {
    "url": "assets/js/126.c3de45c8.js",
    "revision": "00e6718ee415a481754d4ef53a86701b"
  },
  {
    "url": "assets/js/127.10d85536.js",
    "revision": "08a03ea2ed0ff4ccea4233835ad094cc"
  },
  {
    "url": "assets/js/128.e55b6335.js",
    "revision": "d761cbaac0ed26228b9ca24dec9bba21"
  },
  {
    "url": "assets/js/129.cd40760f.js",
    "revision": "5d9655e9ed25827a48d82f74bd0d7fce"
  },
  {
    "url": "assets/js/13.cffa0cf1.js",
    "revision": "4a25ba4b71c703e1a0e67a50798b63c4"
  },
  {
    "url": "assets/js/130.6d1a6a9b.js",
    "revision": "2fe951277fa300664b4dd12da89b8698"
  },
  {
    "url": "assets/js/131.c1a4c4ff.js",
    "revision": "24c253e192b56ee7936b84fbc2688eda"
  },
  {
    "url": "assets/js/132.6f85c2ee.js",
    "revision": "061aab68a1dfc89401c4cc629b9c9581"
  },
  {
    "url": "assets/js/133.e905630c.js",
    "revision": "ca256c2f042ad601467c2a49c5d54f96"
  },
  {
    "url": "assets/js/134.f12dbd03.js",
    "revision": "599e8dd8831ef3ee2a3013a47dfb894f"
  },
  {
    "url": "assets/js/135.d5cd630f.js",
    "revision": "67bdbdd42eaed90310eb7abd23fb1284"
  },
  {
    "url": "assets/js/136.de5cf9c8.js",
    "revision": "dc1fac8783acb7347efc8ec3cf981eab"
  },
  {
    "url": "assets/js/137.187d0cc2.js",
    "revision": "c51c6267ffb594c6c360c2a7bb93d23a"
  },
  {
    "url": "assets/js/138.f624be39.js",
    "revision": "8e2f4b09868de5e08749fdcf57eaa246"
  },
  {
    "url": "assets/js/139.1f5f42b0.js",
    "revision": "fc68c28625779f43b621fd83d1127057"
  },
  {
    "url": "assets/js/14.eee0f82f.js",
    "revision": "813d712fae54d014631b6f53fa1804e8"
  },
  {
    "url": "assets/js/140.42c47a27.js",
    "revision": "80f882e3064fce92a4310b9d9e6b981f"
  },
  {
    "url": "assets/js/141.9198fde9.js",
    "revision": "9cce95195b1f75f7083d148133a7450f"
  },
  {
    "url": "assets/js/142.2383d919.js",
    "revision": "85e25196521335dff404cd9ff575e716"
  },
  {
    "url": "assets/js/143.c364bf9d.js",
    "revision": "2ea13d6c9264c9df2f1e1d36fa793ab0"
  },
  {
    "url": "assets/js/144.aeeb346e.js",
    "revision": "7648b8edd20c3af29e7fd932ada31ee2"
  },
  {
    "url": "assets/js/145.3137fc0a.js",
    "revision": "94d2e5f84c0a759e288e7227799e3082"
  },
  {
    "url": "assets/js/146.e93a954b.js",
    "revision": "cbe65d967312ca00ebfb138a00c59bc6"
  },
  {
    "url": "assets/js/147.ac51778f.js",
    "revision": "37a38f95493be1a344b6a09e0f48c397"
  },
  {
    "url": "assets/js/148.00310013.js",
    "revision": "1ed9ddb6b4743db64282e374ac96b749"
  },
  {
    "url": "assets/js/149.f990cdf2.js",
    "revision": "467c51dec89bc0f2cc58badbe8ea9aea"
  },
  {
    "url": "assets/js/15.57aa51d4.js",
    "revision": "57d688d84b017ab5133c8585bc09aaf0"
  },
  {
    "url": "assets/js/150.a152f19d.js",
    "revision": "d2964509c57b092a38e917e27fa4983e"
  },
  {
    "url": "assets/js/151.b6e07312.js",
    "revision": "280789bcac964b26eaefbf1e08d13b58"
  },
  {
    "url": "assets/js/152.da51ac44.js",
    "revision": "61c6bbb41093e996b0ec88df65259d9e"
  },
  {
    "url": "assets/js/153.8c17a21f.js",
    "revision": "8b0386852932b33457bfb5aba3cb5725"
  },
  {
    "url": "assets/js/154.90935ee8.js",
    "revision": "a21c6a9e76afbae7177d2242ad096519"
  },
  {
    "url": "assets/js/155.0c7022c7.js",
    "revision": "32f1705572acf6f16bda0abac6b97761"
  },
  {
    "url": "assets/js/156.ef6ae7e1.js",
    "revision": "555ae809fa30769739194d2303229c0d"
  },
  {
    "url": "assets/js/157.257a744e.js",
    "revision": "b456ee409ee9f05e97a327756df321a5"
  },
  {
    "url": "assets/js/158.79002ece.js",
    "revision": "b9b8c257786d3c00ac8eddc3adfc5573"
  },
  {
    "url": "assets/js/159.9e32fe12.js",
    "revision": "3fbb70962931bbe34695ce465901f117"
  },
  {
    "url": "assets/js/16.993f9c9d.js",
    "revision": "bbb9d40cc4d08a4e869a189fcd2b1dee"
  },
  {
    "url": "assets/js/160.cb259433.js",
    "revision": "1438a8a05f20894d64e78f81942849f0"
  },
  {
    "url": "assets/js/161.4eaed011.js",
    "revision": "11179e055eac6408cc418e225c373a7a"
  },
  {
    "url": "assets/js/162.af39ed02.js",
    "revision": "57648a060093ae4383512abf67d2b5ae"
  },
  {
    "url": "assets/js/163.1553e8e0.js",
    "revision": "8e366412fdfe0a3a13c9e31cfd856dbf"
  },
  {
    "url": "assets/js/164.f005d114.js",
    "revision": "ac6068e35fd2ad94d0b6829fc099e51f"
  },
  {
    "url": "assets/js/165.bd7c412e.js",
    "revision": "d329f447ebc497c63562ec0ccc4b7e2d"
  },
  {
    "url": "assets/js/166.9f9c2cfd.js",
    "revision": "39687da9be90df2213fc41de645f6333"
  },
  {
    "url": "assets/js/167.473568ca.js",
    "revision": "fe9b816e4de89500cb1472bdd17387cb"
  },
  {
    "url": "assets/js/168.32ffaf48.js",
    "revision": "8032cb82631cf1a69d599003d7c702e8"
  },
  {
    "url": "assets/js/169.5d761fc2.js",
    "revision": "8d56abd6aa269d402479512da7b7dd85"
  },
  {
    "url": "assets/js/17.f086776f.js",
    "revision": "6367a8d7ca61619b0d854ef605dec22e"
  },
  {
    "url": "assets/js/170.cd3837ff.js",
    "revision": "aac5545332333a3c4a12114a72ce9b98"
  },
  {
    "url": "assets/js/171.002a3321.js",
    "revision": "8003933ae4772ae35a6a09c94886b2eb"
  },
  {
    "url": "assets/js/172.7541f9c4.js",
    "revision": "bad95a6d28b6fb12744ad8fc82ce3280"
  },
  {
    "url": "assets/js/173.8a730493.js",
    "revision": "c08782d27bca010ec51b437aa20cbf96"
  },
  {
    "url": "assets/js/174.43b4336d.js",
    "revision": "33775f6805d322aa0460c98933ec09b9"
  },
  {
    "url": "assets/js/175.d7e4de7a.js",
    "revision": "92c07991cffb1f991b64e309734d6abf"
  },
  {
    "url": "assets/js/176.94fc2443.js",
    "revision": "340634752b8f98d86e37837bedf8dff8"
  },
  {
    "url": "assets/js/177.7bf4f4ad.js",
    "revision": "607cb6adde34936fc70826002139b204"
  },
  {
    "url": "assets/js/178.3584e745.js",
    "revision": "2d363aafe7649f791b1be1526e6183b8"
  },
  {
    "url": "assets/js/179.446ae35a.js",
    "revision": "013ef2fd5b6a243aa57b0edb510df77e"
  },
  {
    "url": "assets/js/18.71d2cd67.js",
    "revision": "631c9de761d4ee04b93593831baa824b"
  },
  {
    "url": "assets/js/180.05276fa5.js",
    "revision": "a110b0be97dcd56167437d0899650ec6"
  },
  {
    "url": "assets/js/181.e66b420d.js",
    "revision": "45f6b831e785ac28a7f821feb0980b19"
  },
  {
    "url": "assets/js/182.f2b801b1.js",
    "revision": "360ca1efa89014ee698f46da3ec20a08"
  },
  {
    "url": "assets/js/183.5278fba1.js",
    "revision": "f06186a6d664dcfd8346c50c49eecf97"
  },
  {
    "url": "assets/js/184.2336cace.js",
    "revision": "4013716a3f857c9e02cecf1915652055"
  },
  {
    "url": "assets/js/185.678f7fea.js",
    "revision": "994ce74c77d2937a9757f3160c2e90c7"
  },
  {
    "url": "assets/js/186.a8f45f5a.js",
    "revision": "01c64ff3c1e72c1b12de843bd51ebf98"
  },
  {
    "url": "assets/js/187.f26dfc36.js",
    "revision": "c526d96f4d6fdee26546da663f801b2a"
  },
  {
    "url": "assets/js/188.1c5a19e4.js",
    "revision": "efbca526de1568ff38622f57d372db6f"
  },
  {
    "url": "assets/js/189.3f0f3736.js",
    "revision": "0c29ce5b95546a2bd876d3ac021072ea"
  },
  {
    "url": "assets/js/19.56e1b73c.js",
    "revision": "5d3f49bd1953c2c45743f03889da4b65"
  },
  {
    "url": "assets/js/190.9e17a0a5.js",
    "revision": "e22a7b6667c5939d8f867a5acfe044d2"
  },
  {
    "url": "assets/js/2.93fdda48.js",
    "revision": "c3f8636516f88f7fd1ccb93e0e155ba9"
  },
  {
    "url": "assets/js/20.22ab3e67.js",
    "revision": "748b43f8ecc2ab9c68a0465b00f28347"
  },
  {
    "url": "assets/js/21.d33b7ca2.js",
    "revision": "ea6721220e44cdd8942b0630b46d5146"
  },
  {
    "url": "assets/js/22.d56ddbe1.js",
    "revision": "39c6dce626eae40a8a218f6847627475"
  },
  {
    "url": "assets/js/23.47dfb6dc.js",
    "revision": "d17c9be520b5d51fac9605dd893ffe4b"
  },
  {
    "url": "assets/js/24.26826d9c.js",
    "revision": "0cbf0c635c8e982cd9edf84f16430b9d"
  },
  {
    "url": "assets/js/25.471a97bd.js",
    "revision": "7d37b03ad40abc9f01f0b8ebff3aaba1"
  },
  {
    "url": "assets/js/26.aa8244f8.js",
    "revision": "a554ca49c4e70a39b116bbf8516e94a1"
  },
  {
    "url": "assets/js/27.5187bb86.js",
    "revision": "24f355be124816ec62230587c4a6832c"
  },
  {
    "url": "assets/js/28.4b648d96.js",
    "revision": "5fd75066c899e035bff7f8eb16d8965f"
  },
  {
    "url": "assets/js/29.6a41c79a.js",
    "revision": "cbc74945caf6b39d34ec69febe177bf4"
  },
  {
    "url": "assets/js/3.a702b1f7.js",
    "revision": "7c616d9b8c96c2cf4fb59f9c2b016552"
  },
  {
    "url": "assets/js/30.85a4065c.js",
    "revision": "2f40450cf13accd328e317ed7fdcc031"
  },
  {
    "url": "assets/js/31.81873aac.js",
    "revision": "8894d6642881268ab510ce2c01202869"
  },
  {
    "url": "assets/js/32.a70c5f34.js",
    "revision": "44e95a734bdfdd9a28d93c6109d882f8"
  },
  {
    "url": "assets/js/33.3ac7c2dc.js",
    "revision": "b52dda91cdbb67f489de2782cdba10fd"
  },
  {
    "url": "assets/js/34.d1753ee9.js",
    "revision": "af0de38d041e5edcd2ffa1d18dd4df4d"
  },
  {
    "url": "assets/js/35.a6c6537c.js",
    "revision": "48e8d54f255d1dce5487fb5a585e476a"
  },
  {
    "url": "assets/js/36.967f3e04.js",
    "revision": "5efe9eb761218b648126016cdb611b70"
  },
  {
    "url": "assets/js/37.f87f0b62.js",
    "revision": "b7070bfc57a817b38a54e051ec683134"
  },
  {
    "url": "assets/js/38.8506db21.js",
    "revision": "acbee997224cac9453685246152b17f7"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.c838de4b.js",
    "revision": "a87434c78889295355aec48818c25f03"
  },
  {
    "url": "assets/js/40.9221c9e7.js",
    "revision": "01c90539091b71946b906873a7182843"
  },
  {
    "url": "assets/js/41.b0e72f76.js",
    "revision": "086be5c5813f8aefde22984ebed4da53"
  },
  {
    "url": "assets/js/42.1b5951b2.js",
    "revision": "2c326cdad495d57f89a302270dcb17fb"
  },
  {
    "url": "assets/js/43.4392c6dc.js",
    "revision": "24a0dc5aea874060dd806558b7ea82de"
  },
  {
    "url": "assets/js/44.c23ac79f.js",
    "revision": "cfdf6e508f5bad504b108d7dd47d7e82"
  },
  {
    "url": "assets/js/45.9eb2fc7a.js",
    "revision": "a88ee81374b6b7e8d59a1e371caf1b3d"
  },
  {
    "url": "assets/js/46.379ae3fd.js",
    "revision": "ea83305d5bc1f26b9df376ffb05b1f0c"
  },
  {
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.0a64f85a.js",
    "revision": "7a01576ff990b833601f9bf65c210080"
  },
  {
    "url": "assets/js/49.2ae1094d.js",
    "revision": "395bf88b39988684804a3b49da895c6f"
  },
  {
    "url": "assets/js/5.17da0945.js",
    "revision": "7111c6abe4573af902c511132315e57f"
  },
  {
    "url": "assets/js/50.800503a3.js",
    "revision": "d41d25d410ebc5f41a2e12eeed70b481"
  },
  {
    "url": "assets/js/51.e0688afe.js",
    "revision": "5213cfa9d783a2bf27d2985df786881d"
  },
  {
    "url": "assets/js/52.d2b2f9e2.js",
    "revision": "f156d7423a86f482e0807e8632ce7fd0"
  },
  {
    "url": "assets/js/53.64753fc1.js",
    "revision": "e7a7dd396291e38899cb16b1d41541e4"
  },
  {
    "url": "assets/js/54.ad3bee3f.js",
    "revision": "dea66e8c745f628dd43d8893d2b84ae2"
  },
  {
    "url": "assets/js/55.c4c2dca2.js",
    "revision": "27a06f066e236b04b31f0e26dba82871"
  },
  {
    "url": "assets/js/56.9b6579a1.js",
    "revision": "bf0149d062b0c6db15ab5bc61a0a4f0c"
  },
  {
    "url": "assets/js/57.dde61ad5.js",
    "revision": "82704e087e6ef1b7c06e28e3126297e3"
  },
  {
    "url": "assets/js/58.90ecb06e.js",
    "revision": "6947d6e619c7159777cf6b2fc9aa069c"
  },
  {
    "url": "assets/js/59.aa698d8a.js",
    "revision": "7f39f5cf175ff3135562b8c1a4878e2a"
  },
  {
    "url": "assets/js/6.cda67143.js",
    "revision": "2d72910a3e3811487f67b95ba7cdf3cd"
  },
  {
    "url": "assets/js/60.105ab1fd.js",
    "revision": "65af807b49b645f7bfd96543f63f6ab6"
  },
  {
    "url": "assets/js/61.8f456904.js",
    "revision": "af7e5ff0bab047156994a3e66f9cd7cf"
  },
  {
    "url": "assets/js/62.050f885b.js",
    "revision": "4cdc0eac4d334768bdb3904d8020c82d"
  },
  {
    "url": "assets/js/63.85248506.js",
    "revision": "97640a422c07f1d7acf43e2728a00240"
  },
  {
    "url": "assets/js/64.ca854f77.js",
    "revision": "5eb350861c7ce378545c381046eeb833"
  },
  {
    "url": "assets/js/65.3d9c4f4c.js",
    "revision": "aaf555560575442e2ebe9f4f2a593c96"
  },
  {
    "url": "assets/js/66.64f1bb24.js",
    "revision": "77e0f2e2da84125ed822344ea80b4967"
  },
  {
    "url": "assets/js/67.b1789c9f.js",
    "revision": "eb6c73c0b955b95d38a6252159774fd3"
  },
  {
    "url": "assets/js/68.5528fcde.js",
    "revision": "5d724d30125d1f79de105419ae224869"
  },
  {
    "url": "assets/js/69.2954c71a.js",
    "revision": "193ea5633e8a9ce3437b0b144875eacd"
  },
  {
    "url": "assets/js/7.46a47b65.js",
    "revision": "beaba34827901c2e26c210ec6b6a997c"
  },
  {
    "url": "assets/js/70.20503e83.js",
    "revision": "b9543121af8c9f54842d52a85d345cd2"
  },
  {
    "url": "assets/js/71.33b8561a.js",
    "revision": "05ff1bd2220ce2e220579dd4bb663984"
  },
  {
    "url": "assets/js/72.296ffed0.js",
    "revision": "328a5f9d20c725c50587ba3c233e83bd"
  },
  {
    "url": "assets/js/73.e4ce7e10.js",
    "revision": "017ed69a616455684aedea30bbeaac96"
  },
  {
    "url": "assets/js/74.86f12f12.js",
    "revision": "25731ed7e520ae03a88196bef0192629"
  },
  {
    "url": "assets/js/75.670c21f6.js",
    "revision": "b665a831f058e3feeb7e2c7c76fb6879"
  },
  {
    "url": "assets/js/76.b9a639d6.js",
    "revision": "d6a23fc54e649882bf72eb9249782e81"
  },
  {
    "url": "assets/js/77.55629553.js",
    "revision": "9a07c86c6746385d26378b7b2a402778"
  },
  {
    "url": "assets/js/78.ef2dcc57.js",
    "revision": "756a8153b5d9743ec591822daab9021e"
  },
  {
    "url": "assets/js/79.e12f1534.js",
    "revision": "cb49e31fa2ef5f2959a1b849803abb41"
  },
  {
    "url": "assets/js/8.994694d1.js",
    "revision": "a99ead99f2da1d19b7694b80579b404a"
  },
  {
    "url": "assets/js/80.19e6e511.js",
    "revision": "1d98806eeebfab31b43d9e6b76b7a86b"
  },
  {
    "url": "assets/js/81.a15c9264.js",
    "revision": "6ebb4a6dbf7fadb6396f41052327f890"
  },
  {
    "url": "assets/js/82.c70fbe09.js",
    "revision": "5e229e8691a41956e442fa04954883fc"
  },
  {
    "url": "assets/js/83.f2a5923f.js",
    "revision": "974c678530df9e8a25faf0c77f925b23"
  },
  {
    "url": "assets/js/84.3fcb1fac.js",
    "revision": "4e5d9bc887bfd4e5f94593e3b108b73d"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.4bdc47e4.js",
    "revision": "78f60f1cb0048edb538845f735bca4a2"
  },
  {
    "url": "assets/js/87.03db2424.js",
    "revision": "534966799d5fa21406229740de529263"
  },
  {
    "url": "assets/js/88.670f0df6.js",
    "revision": "e6db5131d51d2cd722cd357264d00270"
  },
  {
    "url": "assets/js/89.0d7d7af3.js",
    "revision": "cf9e18e0de4431bf3620ef271256bd48"
  },
  {
    "url": "assets/js/9.1ddd5114.js",
    "revision": "7ba5c134a8f3626631f0db8852f97fa4"
  },
  {
    "url": "assets/js/90.3caa9f3a.js",
    "revision": "ee8b1b59aabb6c55abb3a928ab6c5e6f"
  },
  {
    "url": "assets/js/91.473346c5.js",
    "revision": "7d69f9ae41700e5b42b17dd502cc11ac"
  },
  {
    "url": "assets/js/92.1b9fdab2.js",
    "revision": "7ac18c6538503938c083b62f7b767621"
  },
  {
    "url": "assets/js/93.adc83092.js",
    "revision": "7d0b871f9210d42261316965d2f56f22"
  },
  {
    "url": "assets/js/94.b38a4933.js",
    "revision": "6186c433cbb927c805fbc80a830055db"
  },
  {
    "url": "assets/js/95.559712c2.js",
    "revision": "ff2477cb8d46b5c55331c2195eb21b31"
  },
  {
    "url": "assets/js/96.ec7bafd3.js",
    "revision": "cb3fa98d00088246262296f3a5691f1b"
  },
  {
    "url": "assets/js/97.c039809f.js",
    "revision": "1dec845dac9e95f0cefc35b4376afb56"
  },
  {
    "url": "assets/js/98.d14c1935.js",
    "revision": "e54ad384257aa5d0b24aec94d6692e0f"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.3f5f97e8.js",
    "revision": "3a2d00c48a29b21f29107dc0507c868c"
  },
  {
    "url": "index.html",
    "revision": "a2b495157cede9efa3d52a9d94e91669"
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
