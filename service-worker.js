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
    "revision": "8d58df4c18fba2c60ef77e04a84c200a"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a3e0dcf4b54059453ce6786939e2e72e"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c158e83122e441471e6171c031f454fa"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "dc67b9dff56c66b09af48b30551b9feb"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "2776bc92b9e676f663b61fbbf6b587e8"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "bfafe41f9bebc3d52b98056927a4482e"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "08e88299bd5806eb33b484ec5f3a14dd"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "620faba4431750e27e998cda1afc0830"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "2f898de21fba258350c6b668fbc107be"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "c6d79725ebe702307984c16d064be138"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "a6af3594301bec9b679b149f3d28e56d"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "4be4c344ca28639bb3baa49ee4e3b42d"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "4e6b48fe746159713e3d249b7b75fc1d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "ad3c4d356982ea5378187a58c7f547ac"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "70e860f4f3b46aead083f622554a1e7b"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "a6ba35938a598971938e3c15c3fe4ccb"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "fb905d7d416c78601e6118be6ad00339"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "ea1e82ebfab940228a5f34c3aede8729"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "d03c4231e68cd6c610642ddaa72b49fb"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "4ae7759f2a3fee23154e0a78c3fa3995"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "8ac119bae08d7216d74124bebb55c0f2"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "df7ec99e958142dbc7d4375f79e2660d"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "42a453d59dd06a67560af2e1bd8e3e20"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "9f366ac41870944994966f507834bfa0"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "8fa1d4811e304524e577e51daefc544a"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "e18da0fa1c4ec3b87feed535d2775840"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "db51126b582daaf9ef3b797398ed28ff"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "d2822ca9cca3e1ae1a0fbe749d02ad86"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "cf7815fb6c2ecf56b2d294de57efe963"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ff714f82411e5c786802c374756c987c"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "3c2344039598702118c23c6d7166414c"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "174f11e08b1630ba3ba059bdddbf1e94"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ba64b88504406a556691fe014a71eaf8"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "0c96007fd8f440c71a75cc6bcecdad0e"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "730dd2ca709980945061824a08203c5e"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "5f5fb3ce89f1c82eaafafc139899e7ef"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "ed270a35787de87c7dad3f65f84bbb8d"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "68f786faae6da14a5c9488d317431a8f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "a8207ef0fd9e6268569a3322a81f586b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "fed2defda1a2fa94fc07957b593d393d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "79556ef4453f44adb86831ffd705c610"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "0d5c0d1acbde61d105cab7773b234cce"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f059fa726684d9d2b605f57cc5ac4812"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "db07b7ebad05354914b671d80a3e1876"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "374407bb4dfa015b8d7a03a8481bc9ee"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "96d984f3a2006f13f784ab312c8eeaed"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "c936f7c8b0d192f2f9e3aa6a3ec8bc73"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "5e31e5b7f17998ce6cd8821f6fa001fa"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "95b0ecc6c25786f4210a2eaf6bc6b8f6"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "41025efdfca6eec11d6966d1ff2fba1e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "3080de48257c8db81ec228e59ab21810"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "18e320331e127c5c855394a623ec326e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "37e1025d6d63a865d0b5dff311916751"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "3d2e78851cad3b6be53c3fae4a31f8fb"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "bb88a6e981d61ebdfd133505ef716a07"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "1cefce44e8fe80f30c01f67d40bb82cf"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "abaf9e99a8a457b23cc8592b54c45872"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "882f9dfc1c9bbad786411ac9d4ee7971"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "abc5557680ea4d3464d2dcdf9b0c2c7d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "dccde3cbc631e0bfa5ae63e309105fb5"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "4a71519f7d1fa1729e46a91fcfa89197"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "1f1ba8d2ec0a0a4404e4a93bd79037c8"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e4bf067eb3861f6c68c5c4e0a4bfb95b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "673c3494ee8330a1e9b0d0c4e4780e07"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d7da263b18bebda174e9c75e731d01ca"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "3de8f528a254e3a472066dc82cb238bd"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ca3fa14a90129b9ca90b8b27d8f4ce30"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "e4073789e8c61b3b6bea843ad1aae9f5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "52ea114735ab2c8e4ac5dd719d600419"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "e88b18a35669c5d346b185473317fa93"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "add31f6519fa0e8f10b095fe80d9c780"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c7bf30ca3e508dc0b848538d183f9614"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "e72ec2cbae19b6ce68931f4611e3c360"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "e81304c1412877b64188cf691154eeb6"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2cf9eb09f1f15f337c5cdbbc29c55297"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "850dcac3914201f4cd320ab6df5c907c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "d3441e6513a84045c52bcaeab8ccad8d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "54d37930162dce381331be8b2b580328"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "55e3b1d706b36083a0c28918b0828b7a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "30b9f3d9c57e9bc594c264a3abf7c3e4"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c8f66a6396db27dd15f48f016a35a3a5"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "750f01f3accd4def894f3c75bdf50e2d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "80bc955480a2ba94621c78aaedb934a4"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "41aaba23df5ae386d4136b01b03e44a0"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "d8828ba9d576b1ec578d79a484ef0651"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "48e2a4884d3850c1f04e3622516db32e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "4fdaa90f8aff028e2c90a3c08e6fac2d"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9cd74ddedc5501822e22c9d62b061de2"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "129c7b172bdf1b9458715ae3b09b4fef"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "2cbee2550c54768078a18d3e30b658fc"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "11282a4640981021978e93c12660e78e"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "7b2646c7f3ee3a7c566835bcb05aacd9"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "fc8dcc07422fb335270b82191331e85e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "e6710f450e99484f098673ced9512bca"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "15b98fcd63e56498f32ce2eaa01be715"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4a13675148b1a421f7433912632c2830"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "471806debeec7552b61de43c8ba24e9b"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "051c992d5a31efca47b10bf8e925c99e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ab0a2734b751d6d3149b031008dd6991"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "00798e3b63f2a2c253b09664aa9fe9e1"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "3d9c9cf400b014d2b5e49eb24e12dac1"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "66d959834d6f6b958ec8029949053e83"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "97a49b4ce1be3254d44ae4dfe17224b7"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "1f3c1a98c9b65145c8bcec414ed0a9a9"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "7d2ee1d727d72896cf51e4fd33928470"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3c1d0caa82a975bc3f71fb514c7da876"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "030e11daa4ef963d169df35a2f1f79c0"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f4e9ce10ba46f8bc126be54b73adb561"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a9a7062a6aa961f54e7fb684046023f2"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "644c979e2d0cbf31c506dff297086336"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "f701ec8323e2ac38551f9cace1655d03"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "e7345345e1d437406ddab12b289037a6"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "ffd532792e8954c8a3b524e150c17f04"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "3b47ed0d6467e6d79c9cbf8862d75c67"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9dd068e52723706404e8234a451fa743"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "f52fb4f3ed65a2569576ae2e080a0101"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "bf17d5c5eec3b2be0057f0933905cc6a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0d68e1ebbcd9b61d11a2a8f74df5c85f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "68137f446b2f138cc1f237bcbbed632d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d5d0bac42ca33f96f5050d2ddc3b715d"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "9d54a7e769c72d0f03b0fbac0be25e1e"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "224a1da901c677b1becbdeed48e5aa7c"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "a99d1abd9f8dee5327a7ac817a5e1c75"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "92cfce3e1089a48ad9f91df8da0e2520"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "d8ac376bbe566cc9e1e763463f8c04d9"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "633b5bf40ced82d474919d09dd56a08e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "df901673e917b23810ed6b1b48a48c5d"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "7a0307e1b7318328a25dc51859151a32"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f7d044d75cca6a818fc8b5796156e467"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1817936a172a3aa25a73544ef8fcc07e"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "b279b33acf1ac7ae3d5c3e177b53f8ff"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "780be96f70e607f29b5c6ee80dadb638"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a929e43d7c8bcdf76f750dba25e2ab1b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "225f90caf593a52048271810af7aef72"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "064c59925bd3f5b5c30278f5a1e6dfa3"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "5f952faff889310e70b4a375dece36b2"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a35d0ca29733a1fe4c56e8db4eb506a5"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "66b305f5bc59436df455d9e34c0a40df"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "a2e6b7f681d6da1e34f9f55e6fab6bc3"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "53284714e993ae096a14626182ed2444"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "94d0ded8d26faf59e3bcd157427a3248"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "a7346162b7c43690be0ff19d844a204d"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "3835e230196c359467e089575297b729"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "3f1925a3b6973b95673b52a21518a632"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "8e65be4f8da24c48adc5838ab21dcae6"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "26be5e7a73f8bc7b966ae3b0aae0f136"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "cfd68e7548cd888dd988db63bd6de2c4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "01c2eddb05d6db6f0fcdb75adf0bee52"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "d69708b637b09ebe8c7d1e88b4c8ea55"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "bbf69f11a4d6933d7e92031bae1012df"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "280f95a040e1b9535aba36f5da35c599"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "cf982ec8bcead5ac6c487efa3847694e"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "cc35349b17bc678089420ecb18cda602"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "0a93f8f3ce7370c46974009e1f3097d2"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8d1bf755f59712248afb85597fcef816"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "a471b72cdb0abdeaafff645b376c9deb"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "77e52e564b8ea29cd5cc8260d3c6bcab"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "a403a87ff73f18b579c26d793f87a984"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "e5982f8d4b489bdaf2514e8448140283"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "48475a74bb7e21805c0c4a9257827e2a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "450f022f1b9e15ecd0cf3de8f5078540"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "268ca566df893bdc8c7f80237b702bb2"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "ec627227948761f2224d60de1ad61491"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "d99cdd27cef6c9487a09741c35b31dd6"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "2863f9e1e14d4a54be128b661e55a23b"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "a1eb52b8eec299122b14e1ac5c602cd8"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "f22ac220265301deeeb44f9b46e434b7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "0d7b5700ed152927d3928ddca107c842"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "6fcfaa589caa76ef6bacf33c6008b560"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "9c30fed7e4d27c7dace4be725eaf1f12"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "33543b7cf20102abf3e297e09430c2af"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "65e891a15866a6fedef534c0d9affe86"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "77dee26c8bf0732fe9909f53778bfeda"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "0fba4304a5a4cc56f179f6d2c722bb3f"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "0926533f79b45aa02dff1a68e46eb0d9"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "32744c13de3b7abe038466bff12a91b2"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "006de07e76a9ecb92996d66456455715"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "21f480f58d4e7cb72bf7b9bbc5f9608f"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "f7bc82ce1fd07f463d4abaea22909cd3"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "005e74e4c254a18868af07d0671d2914"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "09180e2fc040721da156a89ea56d042e"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "17e261b158f7c76d8954713b69cdf448"
  },
  {
    "url": "404.html",
    "revision": "ddffa822befcdf621abae67327c64493"
  },
  {
    "url": "assets/css/0.styles.74cf57b0.css",
    "revision": "3940e9ec40b59a4daa7a4d21e3df65d0"
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
    "url": "assets/js/10.9a76d433.js",
    "revision": "83be9c2674a21b757738874ea4f64dc4"
  },
  {
    "url": "assets/js/100.0e433e64.js",
    "revision": "221a2bc4c4f93268b21e8b10e6260c09"
  },
  {
    "url": "assets/js/101.a791a516.js",
    "revision": "e303103fb73058688ed9b875c4e9ad13"
  },
  {
    "url": "assets/js/102.927c7efa.js",
    "revision": "5edafaff32d076eb63ee99d076848b78"
  },
  {
    "url": "assets/js/103.28e648b8.js",
    "revision": "c2ec4c4641906a378bb0091634fedb01"
  },
  {
    "url": "assets/js/104.510b6898.js",
    "revision": "8863d03b84d26965b47259de2bc8b00a"
  },
  {
    "url": "assets/js/105.c2d48f06.js",
    "revision": "a31ad79f2eafcde5c2dbfc548254d91b"
  },
  {
    "url": "assets/js/106.1bd5a411.js",
    "revision": "e5221f72a461935c7fda2c558f8ee81d"
  },
  {
    "url": "assets/js/107.acbbd1f4.js",
    "revision": "565c6cf353fdad24eb1fd37017ec15ff"
  },
  {
    "url": "assets/js/108.a21bf0d8.js",
    "revision": "7b73d57904f8344ff475f4656f4d9971"
  },
  {
    "url": "assets/js/109.60f1426a.js",
    "revision": "c3d6e28d3f84507d9a17170ff44c31bc"
  },
  {
    "url": "assets/js/11.935d2e91.js",
    "revision": "93f1f15e6623361c9506ec015862e7dc"
  },
  {
    "url": "assets/js/110.ccc68371.js",
    "revision": "ee088f0e40288427383cdbe330cb0c1d"
  },
  {
    "url": "assets/js/111.7902c6a9.js",
    "revision": "db5ea690f4f7fe77ca13436f9b0f9afe"
  },
  {
    "url": "assets/js/112.a372c066.js",
    "revision": "53c072599b2dd17abccbb344ae4b2d3e"
  },
  {
    "url": "assets/js/113.4a5f0824.js",
    "revision": "a8c2de38ad6ef10e68d55108b1ed896c"
  },
  {
    "url": "assets/js/114.e335f75f.js",
    "revision": "33339e64178ef53d88a90e1a38d4a6b0"
  },
  {
    "url": "assets/js/115.9cb4d2ef.js",
    "revision": "0ff4e23de805533675c54dc70a3ccb42"
  },
  {
    "url": "assets/js/116.d2a7ed41.js",
    "revision": "524d345790faf290be75c7459f94e643"
  },
  {
    "url": "assets/js/117.76704abd.js",
    "revision": "9aec4b56d5b6def697c3fee58b09a27c"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.7b298f0f.js",
    "revision": "4a7dba9f4642e4ad17f8e575965133f1"
  },
  {
    "url": "assets/js/12.78473208.js",
    "revision": "58bbc7a32092ed32d122f83faf4422b4"
  },
  {
    "url": "assets/js/120.e57223aa.js",
    "revision": "70f2a45ef31d775c400e923bd97b71f9"
  },
  {
    "url": "assets/js/121.ce7235cd.js",
    "revision": "b5c488d33fd5c1be0a9fb564b8453e78"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.80a7ba65.js",
    "revision": "311cc9af3443f856bb0c0c1669abe91b"
  },
  {
    "url": "assets/js/124.b3131f87.js",
    "revision": "79f749eb91731f53d6c3ca3e26e2c5b8"
  },
  {
    "url": "assets/js/125.8727c2b3.js",
    "revision": "8fe35752d6fb736b863399ad2e2b8503"
  },
  {
    "url": "assets/js/126.5e6375e5.js",
    "revision": "08c206d43c6035753c82772893f2e355"
  },
  {
    "url": "assets/js/127.cec4e034.js",
    "revision": "aad49464c6526f45254aef5af188a06a"
  },
  {
    "url": "assets/js/128.faac4047.js",
    "revision": "011f7fca0c3830552f0e2118689d23a4"
  },
  {
    "url": "assets/js/129.e7333e5e.js",
    "revision": "8f894a61da198e610a5582729788a221"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.2b9d465c.js",
    "revision": "593e3cc9849ebf7230992b35713316f4"
  },
  {
    "url": "assets/js/131.528ca753.js",
    "revision": "bbc0126e068ea8014e5b36551ccf9106"
  },
  {
    "url": "assets/js/132.0f9169ce.js",
    "revision": "d17e9a8b8286bd1591f95198b37f328c"
  },
  {
    "url": "assets/js/133.99da6a15.js",
    "revision": "44d23c34de381b3f25f3722251c22aff"
  },
  {
    "url": "assets/js/134.6385b50e.js",
    "revision": "ba6d0fb3710fa6b7b1f8db59a74de049"
  },
  {
    "url": "assets/js/135.a5706e05.js",
    "revision": "ca52e201a4ae2547863c054ba564bcd5"
  },
  {
    "url": "assets/js/136.c1841743.js",
    "revision": "a1767ae7bb1a9a6a71f20426b8dfbf82"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.f624be39.js",
    "revision": "8e2f4b09868de5e08749fdcf57eaa246"
  },
  {
    "url": "assets/js/139.471254ee.js",
    "revision": "3f36314562a20becc59c300049b3bdf3"
  },
  {
    "url": "assets/js/14.9be467f9.js",
    "revision": "fc6793eb2292d2f036ad333bbec469a4"
  },
  {
    "url": "assets/js/140.56225edf.js",
    "revision": "b3670a71a58fc3097bb8997dd88a7478"
  },
  {
    "url": "assets/js/141.b467f394.js",
    "revision": "02d215e952f49fecc46ed01e19237c8d"
  },
  {
    "url": "assets/js/142.e84d99ab.js",
    "revision": "7481773b8a636b2947a4af05c506095f"
  },
  {
    "url": "assets/js/143.d9392e0d.js",
    "revision": "3d5f3072af3e27d98868fb73f872eb09"
  },
  {
    "url": "assets/js/144.f91a79d9.js",
    "revision": "a678c19ff41815cbdbab1a5b80d14e66"
  },
  {
    "url": "assets/js/145.45574e94.js",
    "revision": "5edc1c0ba51a79e7c3bb9216bd11a624"
  },
  {
    "url": "assets/js/146.e51aa531.js",
    "revision": "e2d903d0e649cc3a9cdec6a8042998fc"
  },
  {
    "url": "assets/js/147.d8cf0b0a.js",
    "revision": "2a849d7d89003cc702b7728fcc9ac10c"
  },
  {
    "url": "assets/js/148.bec98a2d.js",
    "revision": "45408fbc5caa5d54dda06fa4d3b1098f"
  },
  {
    "url": "assets/js/149.7aa7a711.js",
    "revision": "e5247e5230f68cdf384a4efd7413ece3"
  },
  {
    "url": "assets/js/15.0ca68f63.js",
    "revision": "aa1d766336bd424a54c14ff0df4c0218"
  },
  {
    "url": "assets/js/150.691fa739.js",
    "revision": "b92c8d68c3588dd2c8d409810127d445"
  },
  {
    "url": "assets/js/151.06a78359.js",
    "revision": "59584a15ca4fb819cc7347363dca5daf"
  },
  {
    "url": "assets/js/152.48bb3e07.js",
    "revision": "d006b4d3584d3c42e2b312919bcb8077"
  },
  {
    "url": "assets/js/153.8bc83551.js",
    "revision": "52a87534e907ef44cf63af74200c9320"
  },
  {
    "url": "assets/js/154.d5afc9ea.js",
    "revision": "aa158b39d4b12b94613adbb6b9d74284"
  },
  {
    "url": "assets/js/155.7294003f.js",
    "revision": "f8c6033d886f1d81511e6728f1353348"
  },
  {
    "url": "assets/js/156.29b3b246.js",
    "revision": "9f7f84b23aeb38acdb17d7b46519a462"
  },
  {
    "url": "assets/js/157.930f754f.js",
    "revision": "5cd6a0f9ea05fee477fb0c0f08431509"
  },
  {
    "url": "assets/js/158.769a4208.js",
    "revision": "df6635448fd5192756bc341c7d639cde"
  },
  {
    "url": "assets/js/159.19c8c952.js",
    "revision": "d8216ecd3fc7207b25f25444f258ecea"
  },
  {
    "url": "assets/js/16.5c0be8ec.js",
    "revision": "1b540d943fb2d3743c0cd26da3b8516c"
  },
  {
    "url": "assets/js/160.54566587.js",
    "revision": "8e57f20406221f062346c374daccbbf0"
  },
  {
    "url": "assets/js/161.e7b563eb.js",
    "revision": "f8b69e5f28aae053ffbf9e1003f627d2"
  },
  {
    "url": "assets/js/162.b372afa9.js",
    "revision": "2528b9adea0a643ccf4c8b0decb72dfc"
  },
  {
    "url": "assets/js/163.76dad7d9.js",
    "revision": "b0e1efc2cdee4aa8cef7c2bbc6973189"
  },
  {
    "url": "assets/js/164.99755de0.js",
    "revision": "a3ccb573477cde79f58daa421a3efb28"
  },
  {
    "url": "assets/js/165.34090240.js",
    "revision": "f4035eff1122dc6eed3e24770f9c3acd"
  },
  {
    "url": "assets/js/166.fe5d061a.js",
    "revision": "e6b614c2512187255f8ce4a744ddd8bb"
  },
  {
    "url": "assets/js/167.edf5d29c.js",
    "revision": "90ce547a1cd6a5815c88da95319784e4"
  },
  {
    "url": "assets/js/168.a08101ea.js",
    "revision": "2bd5e30c6cb6a7cb165896b74dc21449"
  },
  {
    "url": "assets/js/169.650b0c10.js",
    "revision": "ff906c377076d58aa5317304e813f284"
  },
  {
    "url": "assets/js/17.28e7525b.js",
    "revision": "eb3dc509287158c8f296d0bc0fcfbd0a"
  },
  {
    "url": "assets/js/170.2457ff59.js",
    "revision": "abb42182f19778315ecf93a07a7db45b"
  },
  {
    "url": "assets/js/171.e620b49a.js",
    "revision": "8951b615a0190417b05c076117918c34"
  },
  {
    "url": "assets/js/172.a44ba132.js",
    "revision": "c475bde544a52b4f1767f14f5bceb865"
  },
  {
    "url": "assets/js/173.b637ccc9.js",
    "revision": "be43890372ec4a41602a40980afc1a6b"
  },
  {
    "url": "assets/js/174.6d1648cd.js",
    "revision": "cdbcb002d095e6aa1fbacc2830e3558a"
  },
  {
    "url": "assets/js/175.d382c2c8.js",
    "revision": "bbe4b934ee1c6a30dc6692f8db151fef"
  },
  {
    "url": "assets/js/176.df7af1df.js",
    "revision": "bfadec7a5101309c6630dfdf3dbca852"
  },
  {
    "url": "assets/js/177.32aba25c.js",
    "revision": "6a62d48bfe5931655fa8408767c9347f"
  },
  {
    "url": "assets/js/178.724ffd2b.js",
    "revision": "b2c11518e19c20fbd2e7d6668ca30ee6"
  },
  {
    "url": "assets/js/179.78c2e721.js",
    "revision": "ffc6a1032177fff216fe3839e18e66d7"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.5a27f652.js",
    "revision": "7a9d2d33405fb2026a07bdfabf16ed9f"
  },
  {
    "url": "assets/js/181.524f3dbc.js",
    "revision": "4375c2043faba9a010ace9811f08cc43"
  },
  {
    "url": "assets/js/182.8e843d4e.js",
    "revision": "ce38356d012f8675a403486df267560a"
  },
  {
    "url": "assets/js/183.bc51e3b1.js",
    "revision": "9cfa189ca6d078ce3820835f28c5558c"
  },
  {
    "url": "assets/js/184.1240a0d9.js",
    "revision": "97466d998cf099e6c39d990d84ac5141"
  },
  {
    "url": "assets/js/185.fcbd302c.js",
    "revision": "53938482b70a976f254b899f99826987"
  },
  {
    "url": "assets/js/186.ffaa50fb.js",
    "revision": "ee926182d1261af3aeb4e0a608fc3b72"
  },
  {
    "url": "assets/js/187.4817db8a.js",
    "revision": "6ef5cc23f67a7281f431e6fd967a4bd0"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.eefcc17a.js",
    "revision": "9dcb9095427b8b9457fa71fc72995ef8"
  },
  {
    "url": "assets/js/2.fedcb7f2.js",
    "revision": "8cfc5729fdfc3aeb28d25156f1286f49"
  },
  {
    "url": "assets/js/20.f011ed43.js",
    "revision": "4a3dabf24f0917aacc2157751d439d0c"
  },
  {
    "url": "assets/js/21.85c1b68a.js",
    "revision": "ed1b514ae3b7cd7a691013230975f874"
  },
  {
    "url": "assets/js/22.478d85fb.js",
    "revision": "df4603514188d2b479e51479ab8d10d0"
  },
  {
    "url": "assets/js/23.f2262e71.js",
    "revision": "1fe728f8035b6ab9adbf8b7ed5391501"
  },
  {
    "url": "assets/js/24.f647471f.js",
    "revision": "a520aecb4b40406dbf187251df771772"
  },
  {
    "url": "assets/js/25.4293cda6.js",
    "revision": "8e765c6ab2bf223f31f26e66698147f0"
  },
  {
    "url": "assets/js/26.58d0e7bc.js",
    "revision": "d0c033767c5ccfc302d974112e8d522f"
  },
  {
    "url": "assets/js/27.7ec7a9ed.js",
    "revision": "9ed4d4cd7258000f1e8f6f82e3d105a5"
  },
  {
    "url": "assets/js/28.54799bcf.js",
    "revision": "20f987deba23e645f09595f36898fb7c"
  },
  {
    "url": "assets/js/29.c03f0f5e.js",
    "revision": "62842943eefe6c758ccf55a3318c0501"
  },
  {
    "url": "assets/js/3.ac25d610.js",
    "revision": "aa80ffe4a7b946bb9d93969d5a17d6fe"
  },
  {
    "url": "assets/js/30.09e7b0c2.js",
    "revision": "1c73e8c1a56749929e5331d597a6fd55"
  },
  {
    "url": "assets/js/31.2886209d.js",
    "revision": "dc35725788bdd5364eafe81269086a7d"
  },
  {
    "url": "assets/js/32.2f7c0bfc.js",
    "revision": "31db4fd8427a373fdc6d7d754699047e"
  },
  {
    "url": "assets/js/33.fc547de5.js",
    "revision": "a0ed34fb4cb6acbca774c587a3128b78"
  },
  {
    "url": "assets/js/34.dbd1b593.js",
    "revision": "68700232f0b0624611b31f288e6d6772"
  },
  {
    "url": "assets/js/35.7c97d4f2.js",
    "revision": "1a7a02603fa92094503079b07379f065"
  },
  {
    "url": "assets/js/36.b3204583.js",
    "revision": "32a274499c01af31a3e3ef5f75ce92ae"
  },
  {
    "url": "assets/js/37.ddfda5df.js",
    "revision": "00320361a0b39defc4bf78bd978fa4a9"
  },
  {
    "url": "assets/js/38.9e54fcf2.js",
    "revision": "0b0267782964ab5bedce65250d2bf5a5"
  },
  {
    "url": "assets/js/39.58b561a4.js",
    "revision": "3d1bc1f0d2b38dea569dd75a6deb6587"
  },
  {
    "url": "assets/js/4.25b70f0b.js",
    "revision": "2a3432dca59547b087f403e6e291cd43"
  },
  {
    "url": "assets/js/40.9cba55d1.js",
    "revision": "b5eeef2979061707229024cd0d4de68d"
  },
  {
    "url": "assets/js/41.daf4d33b.js",
    "revision": "0cadcaa334b2e7cbe69f4f1b816826cd"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.676089a9.js",
    "revision": "9d71b5b00c1b2ac0cbc2cddeac5afa53"
  },
  {
    "url": "assets/js/44.f37029db.js",
    "revision": "69977d590024c0d7c53ec51b21c0cc30"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.ef4db07e.js",
    "revision": "e6d7700feae3e4d126d9152b554d9028"
  },
  {
    "url": "assets/js/47.7bc9282c.js",
    "revision": "c8ff1df97dcf115fbaa14507b7cca6b1"
  },
  {
    "url": "assets/js/48.766af5b1.js",
    "revision": "c6f9d9cb8ab272ed43b5fc2b1103180c"
  },
  {
    "url": "assets/js/49.ea80081e.js",
    "revision": "240b55a35b4b8b4a9e1dbdece8c7fabc"
  },
  {
    "url": "assets/js/5.b2a5e18c.js",
    "revision": "349e7a4afb719056bc7e5f56202d62a7"
  },
  {
    "url": "assets/js/50.c6a78d0c.js",
    "revision": "da0e6d1bfcbf309d9854962b168fa382"
  },
  {
    "url": "assets/js/51.dccc502e.js",
    "revision": "9ed228dbab88b2eeb10d4f0eba358527"
  },
  {
    "url": "assets/js/52.0a1e0fe7.js",
    "revision": "7f37d23511d3d3babdc062781e969310"
  },
  {
    "url": "assets/js/53.c9ab87b7.js",
    "revision": "26706b40137b94e8feb80d6558d23176"
  },
  {
    "url": "assets/js/54.e4490439.js",
    "revision": "a97c55b737bf6f21a5d9f6ad46a7c379"
  },
  {
    "url": "assets/js/55.e9e4661f.js",
    "revision": "c53468c5ecae6e9f1dbc1f16b6afec7d"
  },
  {
    "url": "assets/js/56.faa85996.js",
    "revision": "7e7b1232a469cdb9a0fab20b5a18615e"
  },
  {
    "url": "assets/js/57.5e82402d.js",
    "revision": "c56316c3bb06b172d23c2edc4c9746c7"
  },
  {
    "url": "assets/js/58.fbfb7f57.js",
    "revision": "73547698430a9f84d28f951f2c34318b"
  },
  {
    "url": "assets/js/59.ea1abc6c.js",
    "revision": "8ce3f80980603636fe4a6263f4122f99"
  },
  {
    "url": "assets/js/6.3ec98cad.js",
    "revision": "f5da373cbd6861c0ef990056e011233c"
  },
  {
    "url": "assets/js/60.b34e6339.js",
    "revision": "80c46268b8d15f0a4e7fcf8f9a8101ed"
  },
  {
    "url": "assets/js/61.919e5138.js",
    "revision": "b58c8d26663a3db08d98be39253eda89"
  },
  {
    "url": "assets/js/62.01b30a08.js",
    "revision": "649b1d3af60f6fad7c5c6f653e3135d2"
  },
  {
    "url": "assets/js/63.1b69481c.js",
    "revision": "27b0ded85033d183bc019798486cda41"
  },
  {
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.dc0e6f5f.js",
    "revision": "898e0ec78bb9e430200039e6dbc4238f"
  },
  {
    "url": "assets/js/66.61419441.js",
    "revision": "f00cd18688e694e916c76aa3716d945d"
  },
  {
    "url": "assets/js/67.330c53b4.js",
    "revision": "7e7b85c79ca6d84c471e19be8088a431"
  },
  {
    "url": "assets/js/68.6c58381f.js",
    "revision": "cbda7aa441c2f59226553ad50383a528"
  },
  {
    "url": "assets/js/69.47403d7b.js",
    "revision": "ed0e91d666eda84027a1f10ab97a739b"
  },
  {
    "url": "assets/js/7.dd2b2328.js",
    "revision": "9eff003cce650165a2ff8e8fdbf951f8"
  },
  {
    "url": "assets/js/70.447febb1.js",
    "revision": "b904dac3eea2636c635bf1e218aca590"
  },
  {
    "url": "assets/js/71.7ae1d2ae.js",
    "revision": "68bf92367246e03888877104655ad519"
  },
  {
    "url": "assets/js/72.67ce8ff4.js",
    "revision": "326213030fe8e063662f0564a75fff95"
  },
  {
    "url": "assets/js/73.f7332931.js",
    "revision": "23d7a5e2757bbe26482ba4bd12d99755"
  },
  {
    "url": "assets/js/74.62879d15.js",
    "revision": "343f5349fc4f903be2bcd43632ba9afb"
  },
  {
    "url": "assets/js/75.378edbce.js",
    "revision": "2f1197c1391b4894d5fa7a4e80172132"
  },
  {
    "url": "assets/js/76.1e47cf9e.js",
    "revision": "224dcdb7fc9f1a6c26c1a1bff5f863f6"
  },
  {
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.67a40c14.js",
    "revision": "b756a617162d171f622898e8b43c8398"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.582ddf8f.js",
    "revision": "991df0fa3a500322120fca264a69c507"
  },
  {
    "url": "assets/js/81.63ba1b79.js",
    "revision": "6ffb990709f5c434610b1d2dec108a16"
  },
  {
    "url": "assets/js/82.c03f17f5.js",
    "revision": "c9d3b08594c2fb96d3f06abb6f0b536c"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.869a04e8.js",
    "revision": "c0e2abfba411e3c30c652a38d61c1ae8"
  },
  {
    "url": "assets/js/86.490ce686.js",
    "revision": "3f4c601b6fa128e8ff09c84aa28d4415"
  },
  {
    "url": "assets/js/87.53359d44.js",
    "revision": "8b192b4cdae7c5533daddb50c5077a37"
  },
  {
    "url": "assets/js/88.762c006a.js",
    "revision": "795dfc549c286612ba5df48ed11790c8"
  },
  {
    "url": "assets/js/89.3001768a.js",
    "revision": "998e2c1ab886d39977f26c95ab7ba8e1"
  },
  {
    "url": "assets/js/9.f1137371.js",
    "revision": "4e69556fd6942360b68a07646c88badc"
  },
  {
    "url": "assets/js/90.26980774.js",
    "revision": "adfa61549200c466763cbaf93540da73"
  },
  {
    "url": "assets/js/91.f14bee45.js",
    "revision": "ffbff92a250961dcd3480812f2a50c4b"
  },
  {
    "url": "assets/js/92.20b1d082.js",
    "revision": "5c99d3208a5220600f125252e9a86eff"
  },
  {
    "url": "assets/js/93.81a25cc1.js",
    "revision": "7d07f030f7f16bd2a2b597972fa43c65"
  },
  {
    "url": "assets/js/94.cd96ac16.js",
    "revision": "241461a045001c0c88e06578a830b6bf"
  },
  {
    "url": "assets/js/95.d2f3016a.js",
    "revision": "03971e01d6bda5d66d2b0d0b16ad556c"
  },
  {
    "url": "assets/js/96.ab3ad32e.js",
    "revision": "35f687bb7412407951d54493fd9c182e"
  },
  {
    "url": "assets/js/97.52079f1d.js",
    "revision": "18cb8217fc52a6b382ed81f7301c6e72"
  },
  {
    "url": "assets/js/98.f5047f58.js",
    "revision": "959ab170f5935861fa5cfec22e615ad1"
  },
  {
    "url": "assets/js/99.c4f086d5.js",
    "revision": "ffa54d9e11827f7f43584bf4b0c0b7bd"
  },
  {
    "url": "assets/js/app.235e2c8c.js",
    "revision": "5b186d83fb842306602f0837a5da0077"
  },
  {
    "url": "index.html",
    "revision": "a7868ff27a53f3a1d7a10dd926095b86"
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
