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
    "revision": "e22c6b8ac063690ab9a7a7b83943e66f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d3ae4b28cb56e364d8f292db0827064d"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d3abafcd490ed023965920e0b714edf0"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "5c0a5d96e686d4b87fec4b7aba4b031b"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "433181a687ceeae3c420dad1d26b090c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "07a6f209113468a1029d1ff3910bf8d8"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "b1b2719c51972b13605457add5f19dd5"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0f5272e727c35a4f59ed98243f3e39fc"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "9f4a7d51d59058ec2b1a727bcfaa61c2"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "a575d49ce738b6bf1e5862452817ffcc"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "dce5e2639a2928b40615a67589a1d665"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "a30b242c92fc78af450dc55786b7dcf0"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "032a20755a845e15d767bf6a2032c2c2"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "38621aab731b4ceea0da8c86cb0375fc"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "711c050c57a5b0366a4e474903ee4eb1"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "c4784d2f1f0e3dfdca23e22dbb736dcd"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "c92295fc53ac8d2effad63ae117f395b"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "a35b38abade41f59d1f586506794797d"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "97c7d17c9d1a48886701082d6bb5cb84"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "b011a119801c9cf8aa62be81434cd4e9"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "35f472607cbdee20bcea9b1427e0286e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "bdfc135ef139cef95bf8eb555a7ebd1a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "38fe02974b2ac13c8ca2dcce4a93e0c0"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "8708cd99e7b3e0c640857f133e641b84"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "6ccc4bf13de66c8fc751ce359085b228"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "c3d5613b8ad31854f83da99f8fafc765"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "9fa6a064231e9276f781fa2fae7128f4"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "6a85a7f9a07e7c297e175f7cbb6fd9d9"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "7b958d51289d9f3400676fdb4b84ed8a"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "8f93bcc3189f5cc6d2f0ed7df8485419"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "47a2a60ed2cc00f31195eaa50f3809ee"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "81018c648074c9c88de20aa41c946598"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "9148df09d5090b5cda7fc245ad9c3623"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "1db5f5ebb088d81fffded22eb78ff793"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "f7503b43fceaad64a2c669ec6185207c"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "8ce4b37a9733ef5aa4c92f57b5cf44c4"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "6ea48768804052a27ae8a3a0f4ccd655"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "e1666078c11351563e669ae59714780f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "3c724f9d99aa0d0d2f598013004b764b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "9e56087c98fd34068b33050f18fcdd4c"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "33e189b8c320775467301e37fca026b0"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "411c8d988211844f659ec41536017313"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "0291c15f79574ab3212d30e4eb2109ae"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "3d17f60a93080d693a8e4024c0ea1b9d"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "03238721263fda6e4c62c99063a4d3fe"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "de2d0268f1c1074685921a68a8f77890"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0bb184ac48693a1bcfb534269c4c40b6"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c416771d63cc4e0cd5e4fed2ace22ac3"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "847d6cf04beb7d83b8b23857891bf59d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "336a4ca62f1dccfad76bb8338d38758a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "82b69b3ec0a6db013c2a3e37968cbde4"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "592fafb319458fcde7d87ef6e83312ef"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e713cacc4dfaa8b2bcd864aed9327dd4"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "72be38c91a21da0d180dde32a8470122"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e6ff5ce395998a52343fe17d1b809041"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "93444c4a064fe8882025c8ba72eb97e5"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "79b38d6f004b2b65f0068f7d2f501c3d"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "327d3962520763ac241c615d92c35cc1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "24144b2683040aae563573cee9fda685"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "fc705f1cf87bae90b5c6d5ded182a8aa"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "3ed85258bb5e668dce44fc8c9cba0a2b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e10791beb5e26b4f53cb186db3d30350"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "9fabcd4be20a08624e06a728a083b63e"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "0edd1a777a70d3734c9aac6e9e9dbd17"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1f094418703bfa2abbc51ee830c83a7e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "842a1fe4fb402bbb773b07e8f05b5596"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "059b7624faedd806dafb44e07449e604"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b428b6df0ab7cbc4d33130ea4b691da6"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "66a4a8a6e29bcb97ea4a6c2309ca441c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a4f27ded62c18e91bec22a77d7511883"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "8031774d716addf99212de622bdd351d"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "4bddb98d56708f84224d121db2b2b7e9"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5365608480cd59ce4ed1639665ec64e7"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d153225cd5b7632c8d7ee48667d3a82b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c2364c6351c43cf36492903b0de9fc8e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "c91c8706750c5d3472f050a096aa3313"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e2a78d81e0c4d6e43bfaefe3f86be89d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "fcaf308668048163db5668497adfc1af"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9cdb6899c4cfb5bd3fcd77d943242662"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "dd45949eb509a95386987f17c63841b1"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "b6522f9fa38b25fecb6200b00fb2700f"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "71efbbbed43a4fa3520c9f64d293413b"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "f649935a03d71035d137f12f9bc9203d"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "25bb3ad869edf492b007069c09a4515e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "393b80d86e29c2e4acf36cd3ad275c0e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "37342cc63c5f1087014723c8ae27ed3f"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "90e93cbf11b378e5106ac493044a1dc6"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "71899fd0c650fb6aa3b148f501de4506"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "2fe744f10cb9209646a6deda2dea3970"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "83c6d633b5f9b3e073eedae93a165b88"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "abba909b9e3612cf69f008b75695ec8b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "25d0e74c5b60c210d6a65d2bab9a5bc4"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "8e99159e0d3e2c6c334ec85c41a1ae65"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "0903647d7ee3ae33b3c781b729cc0b99"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "db5611c1e5a552b13dd7292362fd48e9"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "6c44ab499d28653bc5f96de25a898a0e"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e5620c4360955db535ca7eb87fdce9ee"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "1df6ccee726006de81e1eb99f07eb589"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "d63e2bb3b4f372e238588422a501735c"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "0367f6c8e2044e2dce2a8d60819d007e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "54022c2ed11b3661ac0224575d964ee5"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "4722d761d16fe3593f17330ae409bb4d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "381e64c108095887e7d87d837774de4d"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "91f5c3a88f3937ee4779156f8449bc59"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "cd9a7f335c90c9cee8a1389c899de84a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "6878e2fb0017d6b347ff245b7d232c76"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "b6afa928bdc2fb46fbb0c0e394be6eac"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "4628308527c388c69cbb587d7128bc42"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "f3f224360e8fcfc33208733ce3144850"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "9b38135d4383fb0ea49ea104322cb7ed"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "3a413fc503ad3088478a1c984343f044"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "64421fc24c495d1d4e6fe6b7bea0380b"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e39104cdecdd7e296f897a01d5af90bf"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7c0b6a536f76da77ad63f1620bc1c36c"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "488ba7f03a6669fdb66b0794b126471f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "50ade9f948b95f9113c67286e507da06"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "38bb77ff578c8aa84c98842dc930efed"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "cfc13ec1e348c2e1c86add95e13a2652"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "7c4bdee6237c9b09817f380abadd8e66"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "028a3b39991ed593a7238abd2aea9195"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d77da6b0c606eb792a0ce5ee8188a70c"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "c8764306b75bb7cd4f69a654d59982dd"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "03f2a6f6351c5070ffd7df42081c525f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "06cfe748ceecc902f3431e9954712ed2"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7a02a3bb6585bf8d1f0ac32d1a5ef039"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "2de1d25e982c1a99d7942e98e0bd7261"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "25ef2cadd6b076bebcc3867a0540d9a0"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "04d4e58f91d3bcc244e4b9c5a92ff68e"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ae7bb6bef9402e8486e1aa3edf345c3d"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "b99c8dc762070b239e08f3c6ff859861"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "cad905ed5c96b010da708b13658eea25"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "fb240a284b7944288343fc3eed06dbf5"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "34c8dfe6d48e1e66f7ebec72bb193a24"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "8e73b7c4b2efee3b48c58179c69824f4"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "caad127de1af40eb6770b9ce064432cf"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "7e858126c450cd1c4be348144e9c2281"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "f5d33c099e015f97f6071bd62a6b6039"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "eef6612848db217ce9aae054177dd354"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "c40b2ff3fbedebb5d08f6ecbda87c27b"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "6d1e7d63ea57e4cb12e48cda84ca167b"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "43c12dd3bbf27153d64367bce48eb879"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "32ebdbc613d29479d3f9d3c22c85c142"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "19d5493e5cb3a21975550f4e70f9ac8f"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "830c5f7f85815ec0c5fb4abe83dc42d9"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "7680646956def70e124ec95173014697"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "5d117922e02d7b46d08201c46f636c63"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b12092d17dedac91d17fb4ffdfefda7d"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "9d52e6c774c4c7ef7ffe919e5e8968a8"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "53ed78829bb13727358c10c48d78d977"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "0f91dbbfe91468d67b260260d1a0a26b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "bae77b513ab7cbc11e5be9c126f97bf1"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "c0dd87ede27d6aa95aa2261be8953922"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "74067d9beaa849158f12c39b183921d5"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "db9ae321d612067f2967ecda3cf6a031"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "5a512bfbfac6a1c86bb87c209b7837dd"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "71dc2fd3abe397279b877084d623a45c"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "92cc74ed8ac7bd6aeacb04d36cd4fa50"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "18bf4669e17206239ae69572e013807d"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "dbbb3e5bd91579d0145d815197b661c3"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "17f370b54a9b709c03ce9c1b40d4c599"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d1146aef59e7345d47f026a1a45cb1ca"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "ec991e013b944587963bd54fba760af9"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "5e46cf8e1502f8b3a12ed536456c1abb"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "193f6aadc1668d2d5177468a1085e3cf"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "d227252657c4cd2077a7064995509442"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "4928dd46cf3cc82bdd79aab3a4626078"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "65880c5cab0b7b7ee522e7bfbab5add3"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "3078bd233ccb7293e2350964cb0efc57"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4e7264247f483f4114b748f4ec2d8d0f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "921b587ab191bed3a83f18f3ca85e17e"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "7f816bb34b4bd0dc57a8b2906958187a"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "48b99ee698d8124306b01c8f9be013ea"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "5c34b2c293711134d6974e62bbf2a519"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "a9221ffcce720d5d8bc673707dc2b469"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "069566571f4fe31f943fa44cbdc61d77"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "bab1067b7652135c9e74b76d12099b77"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "fe471a18e0ffa36ebeba0866a8965bdb"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d260a727acc8f8742b8126ef6e34fe50"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "b98524b7c78c56746136c9b40106834e"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ef59710d75ead67eb987f88c51df755d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "6b0688706affb7234d6834bfa018dd43"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "be347f2e3140c2d4ce4301ec3ca15094"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "e7212e75c2fc5c24735c5ff2d3d09c43"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "5b76557ef8bd3adc2e05c6d2783ba76a"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "8ab382fdbe8e83e963fef954ee1fb0ba"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "a331fad3fbcce2c35300842a275e52ae"
  },
  {
    "url": "404.html",
    "revision": "e24c922311b4284a16bc5ec1a69e8406"
  },
  {
    "url": "assets/css/0.styles.b729bcda.css",
    "revision": "0bee541eb1404ee573bceccece39cc00"
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
    "url": "assets/js/1.e76529c8.js",
    "revision": "25e1b9f4c7e89f6fd6e7d1824b4a43b5"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.11117995.js",
    "revision": "39d9e6721feb71271647e866cab8359d"
  },
  {
    "url": "assets/js/101.6a6198e0.js",
    "revision": "911b3f58b73bbf1c67e81b6c933e63f2"
  },
  {
    "url": "assets/js/102.6d97b94c.js",
    "revision": "f6dfade8e917b582f72f262c07389430"
  },
  {
    "url": "assets/js/103.f922c480.js",
    "revision": "5d429bd41469a28d1407b7920a486478"
  },
  {
    "url": "assets/js/104.d8b875c3.js",
    "revision": "a6536a1b081d5add91cdbe667ab870ca"
  },
  {
    "url": "assets/js/105.c0cfa61c.js",
    "revision": "7c935a7771c1052f6187af94e35c7b75"
  },
  {
    "url": "assets/js/106.e84cd147.js",
    "revision": "8106c0a0990a07704a72c9f177417457"
  },
  {
    "url": "assets/js/107.01b2c2ab.js",
    "revision": "ece68042354ee42147df63484c915abc"
  },
  {
    "url": "assets/js/108.4000da30.js",
    "revision": "60ccf8f736e9d5802ccddbf5ff224264"
  },
  {
    "url": "assets/js/109.76241778.js",
    "revision": "983adb725bb242012f3c7e0aff875215"
  },
  {
    "url": "assets/js/11.1bfb0212.js",
    "revision": "9f9e8c88225d96efd7d909b9b6a304d0"
  },
  {
    "url": "assets/js/110.8ba731fc.js",
    "revision": "94ad712402dc3967d01f76fa89b68e0b"
  },
  {
    "url": "assets/js/111.180ef911.js",
    "revision": "564947815477692cc148b92ebe682209"
  },
  {
    "url": "assets/js/112.024ada58.js",
    "revision": "513ae05b080dfa726cbd605924a48e0c"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.31e9c8a2.js",
    "revision": "2f789a60ecef7d481a46b482e2f776f1"
  },
  {
    "url": "assets/js/115.d2508595.js",
    "revision": "fca10617cc399746e1949337e78368d9"
  },
  {
    "url": "assets/js/116.c6e1c705.js",
    "revision": "91aa2942fa650db186f2016ae75a39e6"
  },
  {
    "url": "assets/js/117.cbbe5bc1.js",
    "revision": "610e289d63185e6901bc2892419efd45"
  },
  {
    "url": "assets/js/118.c9299869.js",
    "revision": "c2663f141329d09f635a316186af0b15"
  },
  {
    "url": "assets/js/119.5552a03f.js",
    "revision": "51573c31fdbacbb9a88005ed87356a53"
  },
  {
    "url": "assets/js/12.9b51fee5.js",
    "revision": "9fbfba627a1b6806363c7e86da5cf350"
  },
  {
    "url": "assets/js/120.f313b423.js",
    "revision": "cfc6782fbbc86b76416c3684fd0588c7"
  },
  {
    "url": "assets/js/121.1169f7a3.js",
    "revision": "48d18b8e36701407feb3443c95dfde33"
  },
  {
    "url": "assets/js/122.f1372d5e.js",
    "revision": "be32f2aa9ad1a05085239b5565f22be0"
  },
  {
    "url": "assets/js/123.c9034e76.js",
    "revision": "03fc033a47d7902579dacd2502b68209"
  },
  {
    "url": "assets/js/124.79331dc8.js",
    "revision": "1fc3fbd27697bfe5e26cac52b5831ca9"
  },
  {
    "url": "assets/js/125.02dfc716.js",
    "revision": "f7ab232a762f8a439a340a236867a0c1"
  },
  {
    "url": "assets/js/126.1402aa22.js",
    "revision": "40d23e9dc2d72f280c16a55f87fbaf21"
  },
  {
    "url": "assets/js/127.5e788dee.js",
    "revision": "434b5b971cbf7f3ba5702e41b9f7e697"
  },
  {
    "url": "assets/js/128.817df207.js",
    "revision": "06b7c4287189f1baa08b6a22fbc08df0"
  },
  {
    "url": "assets/js/129.5cba2b33.js",
    "revision": "e008d3dbb87694e698446ccd0896a448"
  },
  {
    "url": "assets/js/13.d0b481c3.js",
    "revision": "3e15c416a5da5b23c4eb5c0529fc97f0"
  },
  {
    "url": "assets/js/130.71432bbe.js",
    "revision": "604bfaac5d4b50b239e1ebe2e3b4349a"
  },
  {
    "url": "assets/js/131.86a62b0c.js",
    "revision": "e54a26cd84e61e8f26e05744b069c190"
  },
  {
    "url": "assets/js/132.ff5aff9a.js",
    "revision": "ae70b54f2a81c0b3631f781dcf1fc203"
  },
  {
    "url": "assets/js/133.360eb7bb.js",
    "revision": "344e737e023aa32db304fca7e57a6a91"
  },
  {
    "url": "assets/js/134.498beb87.js",
    "revision": "9b4b00cd27c8551fb1162a94cb2ce517"
  },
  {
    "url": "assets/js/135.d1a87f2f.js",
    "revision": "e39c5e62b48df035a2334de5e81d5994"
  },
  {
    "url": "assets/js/136.556a478f.js",
    "revision": "3aa0a5c64f8c570a2b35fa371a753ba4"
  },
  {
    "url": "assets/js/137.e2be7e19.js",
    "revision": "113c3a6c724924e12f5dbbbda90891b7"
  },
  {
    "url": "assets/js/138.5f5c61dd.js",
    "revision": "272960f843efb3ecc2e31b42e4b69223"
  },
  {
    "url": "assets/js/139.5d016af5.js",
    "revision": "392f877dd33bc301d8af579767260012"
  },
  {
    "url": "assets/js/14.1cbb58a4.js",
    "revision": "2babba03a2984e03af15b1bddf87564c"
  },
  {
    "url": "assets/js/140.a1f532b1.js",
    "revision": "508ab5606e785a800bddbb4f8d53947b"
  },
  {
    "url": "assets/js/141.5b70f206.js",
    "revision": "539b91d876ca1453e754b52d76d0c804"
  },
  {
    "url": "assets/js/142.7f002d2d.js",
    "revision": "fb624a26f7c11750063d7cfe904f4ba7"
  },
  {
    "url": "assets/js/143.a655251e.js",
    "revision": "aa3e1c898eb32342ef4a510ddee83124"
  },
  {
    "url": "assets/js/144.209318fe.js",
    "revision": "8c9862b9cb3f1ad415b7a0c88bd5fdd8"
  },
  {
    "url": "assets/js/145.31799d3b.js",
    "revision": "ff7536a35a8bc22633d0cc96075f5d82"
  },
  {
    "url": "assets/js/146.37f3df9d.js",
    "revision": "2c409170b5f6e0560189f01ff11dde15"
  },
  {
    "url": "assets/js/147.a2648509.js",
    "revision": "26ae5ac2124faaf9cd6318b9517005fb"
  },
  {
    "url": "assets/js/148.ce8da4da.js",
    "revision": "e42ee857a572f40e7a7fb3db08c8c6f8"
  },
  {
    "url": "assets/js/149.4f900341.js",
    "revision": "7ee3a14b070aaf260a9b685fe8281be0"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.485b2057.js",
    "revision": "1ebfe1fe30b1b875fe768e1bb7f462b1"
  },
  {
    "url": "assets/js/151.fa539931.js",
    "revision": "723348dc0e03fd922a85cbd7847ad370"
  },
  {
    "url": "assets/js/152.d793208f.js",
    "revision": "bff9e271a091c175f352642685ba7f0c"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.20bf6f7b.js",
    "revision": "ecb0d5744e6f60d02891f0f5b829e816"
  },
  {
    "url": "assets/js/155.80f3c3be.js",
    "revision": "172619fedb8f2b923e4e44923bd68901"
  },
  {
    "url": "assets/js/156.c43ad1d8.js",
    "revision": "dc04885ba86f39bfa885b87d7b005b9f"
  },
  {
    "url": "assets/js/157.692fdbd6.js",
    "revision": "9ae658513ef43f99125bb7ec5f607c67"
  },
  {
    "url": "assets/js/158.57ec7bd8.js",
    "revision": "ecd2eff8e3e757fc08e0792f3ae5d5c1"
  },
  {
    "url": "assets/js/159.48035d1e.js",
    "revision": "9a8108c7e53e6cff6327d8194508cfca"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.7f0185bb.js",
    "revision": "94e1435bee0e678c93e4f2b4bf58b66b"
  },
  {
    "url": "assets/js/161.77db1fc2.js",
    "revision": "402cd893f267c9b5af8f5906fe3a59a8"
  },
  {
    "url": "assets/js/162.cf96be6c.js",
    "revision": "040d15c878501d0f4c0a33cdbf605e86"
  },
  {
    "url": "assets/js/163.76c32401.js",
    "revision": "fd2f3d1405376e41f0f81835b5500125"
  },
  {
    "url": "assets/js/164.1a2f078d.js",
    "revision": "ff28207bf1170466f7f8c05461ec9125"
  },
  {
    "url": "assets/js/165.2561794f.js",
    "revision": "d2c32435bdb424a61984099b2669bdbe"
  },
  {
    "url": "assets/js/166.daf093c1.js",
    "revision": "c6da6cc8ebf9280df7c75582f32040e6"
  },
  {
    "url": "assets/js/167.16ff9d0c.js",
    "revision": "61426712495b9013babe6acd5e32a680"
  },
  {
    "url": "assets/js/168.19373adb.js",
    "revision": "4efb6660b059d139a755beca44e94936"
  },
  {
    "url": "assets/js/169.51c3630c.js",
    "revision": "e4ffe69c9ff6cc28d1d9009f21a964d1"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.d44e63c5.js",
    "revision": "4a168aa0155df0ad3655a373c4936acb"
  },
  {
    "url": "assets/js/171.4f0b69d9.js",
    "revision": "82e96e8063c70107fab86716888206c4"
  },
  {
    "url": "assets/js/172.d40f1d32.js",
    "revision": "0e2e50f93fbb5da56f41734abd0a8d58"
  },
  {
    "url": "assets/js/173.c8649889.js",
    "revision": "6368661606d7507265afe7dcdeb90f2f"
  },
  {
    "url": "assets/js/174.d23bd11a.js",
    "revision": "eae97453ac77ddc5f393018d91e53be4"
  },
  {
    "url": "assets/js/175.ca2dd4a2.js",
    "revision": "a7647a7a1d9d1a2cc7e667c589d107d7"
  },
  {
    "url": "assets/js/176.a0a214ae.js",
    "revision": "2d76b0763f999611697a25f3509ea561"
  },
  {
    "url": "assets/js/177.458999f8.js",
    "revision": "e04fbbb3ab095611f9c7d5f628236e50"
  },
  {
    "url": "assets/js/178.5945fe9c.js",
    "revision": "ebac3c4c2cc2f08a1832a694a3acfeda"
  },
  {
    "url": "assets/js/179.2b76c90e.js",
    "revision": "fb8cebbc421b5eee36b7b2af88b9e46f"
  },
  {
    "url": "assets/js/18.a6c2c274.js",
    "revision": "fc69ca1a53b011793d059cef2f2a9293"
  },
  {
    "url": "assets/js/180.dd6ff9dd.js",
    "revision": "c5d401ed7993338a415970677f5a33c9"
  },
  {
    "url": "assets/js/181.7226aef0.js",
    "revision": "4342d31e01f385137a54d99e544bd765"
  },
  {
    "url": "assets/js/182.e8ac603c.js",
    "revision": "883fbd4334c8c6be9a8b39b2966e83bd"
  },
  {
    "url": "assets/js/183.9d4a9443.js",
    "revision": "4bdcbff82c49b0857e92d5b80427b834"
  },
  {
    "url": "assets/js/184.758a3501.js",
    "revision": "f4298f6909c64ca47acd680c0f497c77"
  },
  {
    "url": "assets/js/185.c1aabc4f.js",
    "revision": "30931664ec1d9dd49aa1dd3cd6cb3175"
  },
  {
    "url": "assets/js/186.cec64efa.js",
    "revision": "199e55438caecdf7d5a84ba9e2459087"
  },
  {
    "url": "assets/js/187.04b02a09.js",
    "revision": "0666c98989b9db9950085c9a2459ed97"
  },
  {
    "url": "assets/js/188.976d0c40.js",
    "revision": "ce2f06ba62f9930d992363b5fd1c2502"
  },
  {
    "url": "assets/js/189.d3f04a41.js",
    "revision": "22b37dbd09b04fd179aa2c565c303373"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.fddbed12.js",
    "revision": "11ee8d70c3e48830d1d7cdd824ba0d12"
  },
  {
    "url": "assets/js/191.d8ba9279.js",
    "revision": "851639ff39b67600a86083805b43d6b7"
  },
  {
    "url": "assets/js/192.d26e8913.js",
    "revision": "04bc493a795ce31e95467f3c41fe6f70"
  },
  {
    "url": "assets/js/193.8f0809f7.js",
    "revision": "9d3e85fea5011b418ddd348211fbfb21"
  },
  {
    "url": "assets/js/194.6bbb386e.js",
    "revision": "4daf9e59af121bc2d8979aaa900c4b20"
  },
  {
    "url": "assets/js/195.163c8c11.js",
    "revision": "dfcf52c697a0238a4dc2fe1a99c8d68a"
  },
  {
    "url": "assets/js/196.1eeb09ae.js",
    "revision": "e8a85e0accdd8d1c4d980354d7861603"
  },
  {
    "url": "assets/js/197.2d384b5c.js",
    "revision": "ed4f187cde8f5a1834454f70402e714b"
  },
  {
    "url": "assets/js/198.4339f8a4.js",
    "revision": "d06043eb06b704d3bfc2e5b901db1888"
  },
  {
    "url": "assets/js/199.62be38f4.js",
    "revision": "a78dcdbe6d1ffcf8b06dfc3c7a8e92ca"
  },
  {
    "url": "assets/js/2.3b6b1f5c.js",
    "revision": "660aa01f55de14205f9f2d58f1532df8"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.5036d445.js",
    "revision": "1db1fb97a073892dc1879a55357169f6"
  },
  {
    "url": "assets/js/201.242df33b.js",
    "revision": "85664329f4d4f713aa59ded67da48531"
  },
  {
    "url": "assets/js/202.c2c4787e.js",
    "revision": "2bf94e9392ad7a0adb6e3566264a57ed"
  },
  {
    "url": "assets/js/203.16903156.js",
    "revision": "d3d81ba2a5b7622067e917efed60be1f"
  },
  {
    "url": "assets/js/204.e7155795.js",
    "revision": "f77ff4635eba01b6ed808d5b026d4511"
  },
  {
    "url": "assets/js/205.443e32c9.js",
    "revision": "88f1ffba802607608cb43f9668ee5088"
  },
  {
    "url": "assets/js/206.b776c035.js",
    "revision": "170018364a23bae408e785ec0945400a"
  },
  {
    "url": "assets/js/207.39061d06.js",
    "revision": "d64eb2473cb0761996a23531af713a87"
  },
  {
    "url": "assets/js/208.571b338c.js",
    "revision": "211315ac3d397a02a2357764c0fc37b9"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/23.c92235eb.js",
    "revision": "6c18d72fae9fc129a751d92ea5365496"
  },
  {
    "url": "assets/js/24.aafbb075.js",
    "revision": "f1a668ee840cd12eb4ab7931564ed522"
  },
  {
    "url": "assets/js/25.4ff25889.js",
    "revision": "3d824cb4b57f7de0aab8179cb089d85a"
  },
  {
    "url": "assets/js/26.7a1ae14e.js",
    "revision": "e0020e7b8421d8e7d020bdacc4c1d229"
  },
  {
    "url": "assets/js/27.7531562d.js",
    "revision": "5ccaf91ba670e66f3ab779b3fb0b9d41"
  },
  {
    "url": "assets/js/28.9589c169.js",
    "revision": "f0ce0b2e21bfc8f4d033e4515a03437a"
  },
  {
    "url": "assets/js/29.d0071091.js",
    "revision": "5627640913b5559270a2d3038e693fcc"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.34fa29dd.js",
    "revision": "b08d0c4c28f1a4afa50bc948f05bf8e1"
  },
  {
    "url": "assets/js/31.90732a05.js",
    "revision": "4c6d37818827d973e9d0400a3e950a8f"
  },
  {
    "url": "assets/js/32.bc717ed1.js",
    "revision": "550b3c92c06e952ec738c9e939a28619"
  },
  {
    "url": "assets/js/33.0848d820.js",
    "revision": "261f9d01a92747bb7a81b9f40285da4b"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.91afe005.js",
    "revision": "88a48dcc4a061a59b0d03c6708b839c1"
  },
  {
    "url": "assets/js/36.eb48a076.js",
    "revision": "abed2f558fa0d82eff6db488cb6dacdb"
  },
  {
    "url": "assets/js/37.f7a2f347.js",
    "revision": "b1b7c535536d8598a4c904570349a97b"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.f24d794f.js",
    "revision": "e3d91df591cde109a8421aeaf78cbd9a"
  },
  {
    "url": "assets/js/4.753e95bc.js",
    "revision": "99666e0539fc9e584f7022931c128f8a"
  },
  {
    "url": "assets/js/40.6870e565.js",
    "revision": "c730507001ac0490bea5e360924df588"
  },
  {
    "url": "assets/js/41.b95cc3e7.js",
    "revision": "4d54fdfd8e9c990fe0bfb2efc9846b7a"
  },
  {
    "url": "assets/js/42.25327571.js",
    "revision": "4df88bdeb541e1c10ebf68559d83f47e"
  },
  {
    "url": "assets/js/43.8abd6b4a.js",
    "revision": "170f09fd39b620c1e169a6d7b56e9b33"
  },
  {
    "url": "assets/js/44.fd8c999c.js",
    "revision": "44cd10527a68484535084d38a85627f5"
  },
  {
    "url": "assets/js/45.aebb94b3.js",
    "revision": "380f580030385c5315cc9737406a13ca"
  },
  {
    "url": "assets/js/46.30c18fa3.js",
    "revision": "c6a3215f16fb5711f8e7d1b6e3850505"
  },
  {
    "url": "assets/js/47.bc66fe08.js",
    "revision": "c2c362b7d923ba067108c5e4de760474"
  },
  {
    "url": "assets/js/48.7811f9e4.js",
    "revision": "c2762677af008dd17fa6f5c200366d90"
  },
  {
    "url": "assets/js/49.11258f4d.js",
    "revision": "1101bf54657a029791c4f4fc6669de34"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.e6a40783.js",
    "revision": "82e0be99719dfe05ffa25d0c690424bb"
  },
  {
    "url": "assets/js/51.70f201c7.js",
    "revision": "218ba64d5e221d9855958207052ab2ea"
  },
  {
    "url": "assets/js/52.191d259a.js",
    "revision": "225d4e9b277a07912c42ceaa82c1eaa2"
  },
  {
    "url": "assets/js/53.9163cbdb.js",
    "revision": "01289cf3e77bd679760777f23a911274"
  },
  {
    "url": "assets/js/54.79306bdd.js",
    "revision": "4d4063c3092003e84992862a56241c17"
  },
  {
    "url": "assets/js/55.060c6ab7.js",
    "revision": "bd7cdc5e1a4f272164f93e694a24a2e8"
  },
  {
    "url": "assets/js/56.10db94e7.js",
    "revision": "1ca5e112503832126a288d2e1d9f37d9"
  },
  {
    "url": "assets/js/57.f79061f6.js",
    "revision": "7920044ccebec77367141da6edda4d55"
  },
  {
    "url": "assets/js/58.797a8eb4.js",
    "revision": "6e611b3c097f3f1ca36b836bb7c65dde"
  },
  {
    "url": "assets/js/59.3e13380d.js",
    "revision": "a3b18c56dead36284206aa87e362cad2"
  },
  {
    "url": "assets/js/60.50884343.js",
    "revision": "7cc4b4a1f75de886b3e0323c84560bed"
  },
  {
    "url": "assets/js/61.fb99ae47.js",
    "revision": "e8c25661ef1530e041abbd3b0a9b37bc"
  },
  {
    "url": "assets/js/62.9529d0c0.js",
    "revision": "cc2a5969481562902a15dca10b6cc927"
  },
  {
    "url": "assets/js/63.3b393e0d.js",
    "revision": "056d1fff0900cbca628ee73c526b3747"
  },
  {
    "url": "assets/js/64.649a3b32.js",
    "revision": "451a21035c9645167d2b46f975ed42fb"
  },
  {
    "url": "assets/js/65.459b2561.js",
    "revision": "9a743e7df161a8e7e5c42ce06e56c37e"
  },
  {
    "url": "assets/js/66.6ec62469.js",
    "revision": "eb877cecdf529f708f560ba9a0e8910b"
  },
  {
    "url": "assets/js/67.aef703f1.js",
    "revision": "7c0afa7bda1e00531ddea2f0d235e0f6"
  },
  {
    "url": "assets/js/68.218ae460.js",
    "revision": "38ceef5f22c2fc152321014eef7714b6"
  },
  {
    "url": "assets/js/69.d377fbeb.js",
    "revision": "1c8633686260fee1788f6b1c13b22ec1"
  },
  {
    "url": "assets/js/70.e06adfba.js",
    "revision": "e7589b34b5fcb3c1a2eb077bf5276b9f"
  },
  {
    "url": "assets/js/71.0a17be75.js",
    "revision": "0c03838fd13bbe720099bdc346895939"
  },
  {
    "url": "assets/js/72.ffc76067.js",
    "revision": "369a75fbf5d6e517a5340d9963f0a954"
  },
  {
    "url": "assets/js/73.70a44f71.js",
    "revision": "f5efda17fd29e48516a92f4bba225f45"
  },
  {
    "url": "assets/js/74.cf39ee12.js",
    "revision": "a30dadd99875c5403d63921681432c40"
  },
  {
    "url": "assets/js/75.de66f7b9.js",
    "revision": "f8be1add3ef5afd6426b0b3e56d9ef03"
  },
  {
    "url": "assets/js/76.936f0d3b.js",
    "revision": "76ee5baf8a1636c50f5dd35186a16554"
  },
  {
    "url": "assets/js/77.77f72148.js",
    "revision": "7e41887f14905e7c276ccbc412930ecf"
  },
  {
    "url": "assets/js/78.15b720eb.js",
    "revision": "8e55f31b9c381770ee3500f9eed6ab68"
  },
  {
    "url": "assets/js/79.22b3505d.js",
    "revision": "63388a9612e53a498853a60b2c6d26e7"
  },
  {
    "url": "assets/js/8.84ff08af.js",
    "revision": "5298da8ee81d8525093ec9048b0e44c3"
  },
  {
    "url": "assets/js/80.00c8769e.js",
    "revision": "780f62679441e3f4a44de59798e8cb32"
  },
  {
    "url": "assets/js/81.84ce26bc.js",
    "revision": "71e4b7cfd7d99890b9b98e9b6393139e"
  },
  {
    "url": "assets/js/82.cc63f2ae.js",
    "revision": "2d291b09e1566cc4b5e4b4ed1db0aa80"
  },
  {
    "url": "assets/js/83.9fdc0404.js",
    "revision": "ccbc2c6e351d039b88bbaef49c648df9"
  },
  {
    "url": "assets/js/84.45f53f68.js",
    "revision": "e99fef9f8cfef85720b3416305758d09"
  },
  {
    "url": "assets/js/85.bc862b70.js",
    "revision": "c6a17bc8ac6b11fadafb7114a642f6f3"
  },
  {
    "url": "assets/js/86.cda20bd6.js",
    "revision": "876d12847e61c71305b2cec3661d2f49"
  },
  {
    "url": "assets/js/87.53d5630a.js",
    "revision": "726b6dea4318f780274876c861803446"
  },
  {
    "url": "assets/js/88.e969c4b4.js",
    "revision": "73361eb27a6defae31b309666f6c2849"
  },
  {
    "url": "assets/js/89.d1e78ccb.js",
    "revision": "3e4e6b56fc28ce92b392960337ab15b5"
  },
  {
    "url": "assets/js/9.cc335231.js",
    "revision": "635766b5133a5a65c8231dd4b179bc04"
  },
  {
    "url": "assets/js/90.ceb041e7.js",
    "revision": "f1066070965dcd84a3e3f9ac79297b39"
  },
  {
    "url": "assets/js/91.5a8c9b7c.js",
    "revision": "a6040a6bf8b0e2f57331ff20ac23bd00"
  },
  {
    "url": "assets/js/92.e611432a.js",
    "revision": "48696ec648f6e8fe2c8cd56d864416e2"
  },
  {
    "url": "assets/js/93.ab8564d5.js",
    "revision": "b0f2cdc8cd9bdda3314c362465d07717"
  },
  {
    "url": "assets/js/94.bd289818.js",
    "revision": "6b5bee1cb9521ee272b51b7332c0ed41"
  },
  {
    "url": "assets/js/95.fb546e06.js",
    "revision": "99d3ab9dea46cfe6f1f354ef18869cfd"
  },
  {
    "url": "assets/js/96.ad7f60ff.js",
    "revision": "82881270cf8e5cba2797ee4a6519ee14"
  },
  {
    "url": "assets/js/97.2866aa8c.js",
    "revision": "58521d5f8d40f628f97545a0157fea5b"
  },
  {
    "url": "assets/js/98.15765cc7.js",
    "revision": "89b517472b5814f5bcc6ed92ed5c4a75"
  },
  {
    "url": "assets/js/99.f9f6cb42.js",
    "revision": "75ca12330e9af677e65eab4f9f47e889"
  },
  {
    "url": "assets/js/app.74100748.js",
    "revision": "9ac8e89bc76a709b5331241e7c503225"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "0676e2c36bf58d16336b883ad6404b32"
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
