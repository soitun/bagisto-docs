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
    "revision": "2f47e2da9407ffa52ebaafb4a0076d89"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ea713b3ad82fbd26ec9ee4768b0e2536"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c90266f2b2d0a8ed6e89bf8a8a936602"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "f30267ae2f8a8815b75c6191aa404fa8"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "abc2e314c942c3fc9ef389e06a93e55d"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "1125c5a6a1cc1e92d9495c96b4e72585"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e134ac32f285ab7a57247fd7ecfe2059"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fe88e3076c7d5bbe24a3d52c48c41fb3"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "270de69b0515421ddc8eccb84b387cc0"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "a56af7ccaa8532f330acd781d8f9cba0"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "8980b6999ceace036f1b72076a2efdd2"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "3ed49f16b9190899f984a235269400f5"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "8ce80d8b11e9137168f4c38d0e644a8a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e2ced5d676565c177639906c9dec4109"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "24c91dd3c10edb79caeedebe3aa944b1"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "fe174ba2d5d1aa0f4c44d90b074ff58a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "d7f09eb9070321fa3ea9824e4d7e5b62"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "60c770b79d1fbce4e40fb141ac1cabf4"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "cc5e073c6e300cfe7c18505463916387"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "2e8b2354dbc09b9b89acc1b090f50321"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ce35203ff94015220d644d9d6d10ed65"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "9563d40e76c60a6674ea11f426724416"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "12d78342096a574d3bca7b28c3cf9471"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "3f4ab6339c764a42e60ba61a10f13df9"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "898b55737fc313960118872e05d23bd6"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "4d907285708299d47242883bcb52839e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a418ed4dc5073327fec54d58e6922e62"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "899ba0a41fc3b736cf5ffefe24627918"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "86628a21c115d96d0a9062f82aab1d43"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "251673719ee5fff59edb453776e53093"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "6670e897e08d1bbe4b157ed010ae1d70"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "88f10e0cd0b434f0e6df8701e669ea48"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "2556927e50f74bc8cddba5a87df4db9c"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "4ed178e8f9ac75ee78b868319c782a54"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "0a59658736bf304a87ed63d7a662b0e6"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "54fd5498814dfaca73d2c83f93d44d53"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "33e8f5ff3979f2018ac139e9936f15f0"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a1864c90f10102544648986405a99b50"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "3c9af59c6fee4d735c30bcaea9020f98"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "e97a8d7d24c32e967a095916525e3162"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "6bbae786d16e6caf6d5f4eed4dad31bc"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "4ec452d7c782672eba89e44a191a37de"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "1cac0c3a85f623529ee641f91d592577"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "b9cf6a8cad895bc374d005eb238010a0"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "274712a75c9baaa2392c9401e57d17e3"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "fcc4d86c0cf4e104d0c856f1154537b4"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e5a2ff896aa193d85a9f562eaa86d7ad"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "17adbde1db108d917324d9367eb10d71"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "67c2a777dbdf871e6c44c12b9e618d2a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "34f00fe82075d3823fea29b9b0318e1b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b5154c6adfb4f33f97b4cdbfbeb47a5f"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "709073aa664042b2de9880cfbd32924b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a4ec261cc032b4efc9a0ba6ec6ab0ac7"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "6e2efd51755f032526ac5f319c0f3911"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e831c3ef06b10ff4931e6b289e95625d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "65d3e921ef11048f023242b5e7d6e27a"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "131705d5f7007bea090c571b4f4843ad"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "addbf8b212f7a717480e276e6870c198"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "42caa6cae6f6998abea866741f9133d1"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "8cbcbddf09bce3fc4545fc84ccf6068d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d7f5981a7953b4584bac2b35fd3e2870"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "49ea48cfe5d2841a55cae66baaeaf387"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "4121fe1243b01a1860d52422c0b397dc"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "68559f52f86d23064838bb61be69e431"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "8381d604af9e7a40b127f29e578f486b"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "3e5e09aec4dd7c99755bc7a8d899df93"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "398200aa88bd0442ae446754130ed46f"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "bbe981efbcbf4c31b519bdb9518f15df"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c50a0ce443de9fbcf7a3c6335969db25"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f8487c13c23aefb121a11673adcc0dc7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f845c501a1cb0c19d00334b0a1263cf3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "3c7c0b688ba89afb220ca0e13dd2f402"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "13cb8220e9b36ea601c932a0bf8d2f1a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "4fab1972705da74eb268a080c383ea66"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b94f0e3927050e7f606a2c3afdbcf6f6"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ec6fbd59576e5eb8c80a458b797dc14d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "672f2b1b7124b11b99591ab4923311c1"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0856e89944757783e4a523f698effdd7"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "d416a8176dbbdd9bb3880b7115dc68e1"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "a9860022a81a5e2def7565a362bef1a9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "89ca89a745e9fb166f5d9d5d41048f61"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "1588bf69fb148fd415af424d383e9080"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "efdefaef003b9e44cf55d17a679dd84f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e1c5ffa75784664c4008b01ed12fd302"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "bd2ea993adf9af39753ccd038306b546"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3537b3ada1e53671654583a48e4a352e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "1517f40ac85c4523e8311f4e2653c989"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "95508de62509d60d7f2ad0a25bed6017"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "ee636089d6ce430de83b50d921570dd2"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "40e61f0879c93bdc5fb24dcaf066ace4"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "bc5c4cd94cf48330f0ee953aac4b51b9"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "e873c37942385415fd7cb62992da3b5d"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "745fd0a365e7625e8983f29390e884e3"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f8c60a243c1cad97a17943b099bd524c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b08ec6d82386fee7531f8c064e10c6bf"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "d53cb20aaf39f89ad13841a810eb3518"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "03c5658665cbebcce2fe509db8fab592"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "02cb9904e87d5d9c1da72dd0de08c424"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "0d08c53a0f50616237b2ed538ce7a9dc"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5ad791446837a65605462984d2c22dc6"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "a4a1e1550d6f5d1e1499cfaa70b12cad"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "cf7ef4f8c36d7a06bd19a600ffa0d09a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "84fb0afb1ee2a70c84a6cfcba51ba4a7"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "6962b895305b3f9c1af5b97533cdc792"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "09a14df7e25adca60a1ed6207bf5ab38"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "af3fd064c3708e32ae937c60495cda96"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2f9e5ed99d7a702a87ac6c47bd1e774c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "0a16b346b309194942f39b02fe86d9ec"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d7d9b722dd33e5fd556f3bcd77772974"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "0e4cc4ccbeec722a803d37faf69cede5"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "481d74ee5b8155e3424d7fb097e23af6"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "4bc8b048c286be85bcbe2482332c7fc7"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "c603e7e22e005ba3f127d7585c1189e5"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "2083bf559899278e62cfd7e77a7ea430"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "8935fc7a83c6ab4d175814bd006e0bc0"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "1a09d4a1dd2d5646e5313c617916b4c0"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a679313c74f3d04c90c110e97bc1869e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "d6180b7fb2816fe1ad0de087dedef9c4"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8e31face39458da677e8ead4c2e91261"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d0462639cb2b7aa6133fbd1452aadc2f"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "05ad5b5084eb1c4939074d962686a6ea"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "5b23cab62922e47a0756be382aba3a82"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "f8074fa5cb329b2b1d1b05584bd2b7d2"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "27d84c7512c34c7c0c7a98697c1c1da0"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ff2b3cfa0687a615d980bd98c609ccec"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c6fe647a48f20872066015beae635e4a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "532665d1da40f50e52bb607bb6b8d67b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "14e11e2b08a3884b70a45791f2bb00b5"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "6f3d80e8b2ae4c0336b18cf6038b5cee"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "5fc4e8c1e870df16f0a12dce7f68284f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "01f3f3364834bd33c5e6f047913ee55d"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5ee07fd4fe8d61a312e0eddbf475de67"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "c875618d1d3719dd75ef95194d70d343"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "30e1d9228f6f1b7c53c4af8c703e692c"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "cc5c68afc8caf2d7bc3afcb662119fdc"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "c0262f796277a4f3c9a2e9d29ba07aab"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9111b19cd33938c176ef3268e11bd3f8"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "462c6c11af6494ec711e8612d06cec0f"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "960076015ee8cd474daeb7292982d6b9"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "d5ec6e5aaa5cffbdb8b298fd57ac0e89"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "68c06899ed322d4f4d6176141e833d4f"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "d9623bac0d46a4faf7dc65f8db00c26e"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "4e90bb3cf922f478e4d0dc56c2465009"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "4dd7656c8857cf914a248938f3bea162"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "a482ddd13a2a882c07958ea29474b536"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "dce737aa77aca4739abae7a18cf0323f"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "6820ccb6f8e5cf2707186880de1db0d0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "411bcd3b5d81f784221623e8678a9b7b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7f40216724b2d22e92381ecd2363eea6"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "bb78e563a9867119e37275d158f58c0e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "bb1156c8e8d3d144cc574fd36881d8aa"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "6fb39e7bca3bf256e2bf732f0cf7147c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "6a855033dd41586eb409318a1482e4c3"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "4bf7dff34e6977cad90db3cad31d12a2"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "db1db70e89153f6aff8c60a75a6563a0"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "5c3892e2a7895d2e86ee558ca4fe9491"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "bd0577c82d9c9a68f40191bba920a304"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "c1f792ef402d3a1a86a0611793aefccf"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "0752ae51ded4de7ac90b53b85508f133"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "8ae4de5de84a07016ccee51fd9c7c964"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "ef9e514126c648bce06d0f814bac69f3"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "b85ccdddaec082afce82cccdad65f792"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "14f81e57b472509e1694416aa4752f1e"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "916dd353012abeedcb0c475defba250e"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "1d93c04630b2828ba5a15be750eb0957"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "f84f5f6e6a5856f56a40596e2f610f62"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "38a9af05758fc20e2d0b55d94fad7f8d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "749ab9ea73c5813c4b604df74c920985"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "677640c9f40af8f3922016b890b59534"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "3d4e7b7df78dba21b7971760d6d2e774"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "1a436b78a3befbc0706fb6daa7bda665"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "ba3db931bbdf17c552e5f9b221dabf81"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "6fdcc8faf69d36db7b2ec0568587e38f"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "b9e975c7c6fed2a9e5b7539d45da6207"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "6ddf51db00e26fedfebf20802bd5ecc5"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c2e97ecfffc2e242e231d42c78b2b984"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "0bbd37f70affc6b3b79da1308ca5f448"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "dd57b5d6dba611855a7ef22f0c7d21c2"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "4f9b9ce35342bc184b8f6371e3f64f96"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "c5d04aa035c169cd6939d78273d49f6e"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "fc803549a23c1fecfb515550216ace9e"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "bfa72ea18658bf08b1f03f78b5190c5b"
  },
  {
    "url": "404.html",
    "revision": "dedd685c9100ad31a8061abcbb5150a7"
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
    "url": "assets/js/10.b32e5ec9.js",
    "revision": "38ce60db99f655c4f0e5a88d114783bf"
  },
  {
    "url": "assets/js/100.a92838c0.js",
    "revision": "9e92aa8061b54d5885e9b40ac384578d"
  },
  {
    "url": "assets/js/101.b019a552.js",
    "revision": "9afdd94e5c8ff7937195e4b5eca4bfce"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.5a6d6a2d.js",
    "revision": "8f73ba330c027cd4e39053c6ae508b0a"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.c4780576.js",
    "revision": "9ed8a184b541acca10b698609143c0cb"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
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
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.03225ad3.js",
    "revision": "90c90c5df40921ef92e6add8599b8388"
  },
  {
    "url": "assets/js/111.6767c025.js",
    "revision": "638a45cbb8f86e68831a87b1d148b248"
  },
  {
    "url": "assets/js/112.9756e99d.js",
    "revision": "91f0a562a9bb667fcf89441fca1afd9c"
  },
  {
    "url": "assets/js/113.4a5f0824.js",
    "revision": "a8c2de38ad6ef10e68d55108b1ed896c"
  },
  {
    "url": "assets/js/114.8f2ac39f.js",
    "revision": "d0c1574cb1b12c2cf217fa2909584827"
  },
  {
    "url": "assets/js/115.58b01ef8.js",
    "revision": "bdad629ced5bb2e733d815d4f7094f7f"
  },
  {
    "url": "assets/js/116.883ffde7.js",
    "revision": "d840bc408f436c1a5a27453dd47cf28d"
  },
  {
    "url": "assets/js/117.3b2e20dc.js",
    "revision": "0efcd439b011eee6a7fee38820e4ef43"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.ed3d1bab.js",
    "revision": "c1a301d1456b72469121f28f4a4d181b"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
  },
  {
    "url": "assets/js/120.871d1d83.js",
    "revision": "2551249018210649a6002e7bc4467a74"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.ef50c9bb.js",
    "revision": "d96c455d7552b614d1153d5a45cab8ae"
  },
  {
    "url": "assets/js/123.159be8de.js",
    "revision": "3732e5517bd1010e0ee563a91b8d8448"
  },
  {
    "url": "assets/js/124.b3131f87.js",
    "revision": "79f749eb91731f53d6c3ca3e26e2c5b8"
  },
  {
    "url": "assets/js/125.404bb619.js",
    "revision": "c5766d3031017e51608724aa4915ab69"
  },
  {
    "url": "assets/js/126.23bb501e.js",
    "revision": "d5be1a88cedab83187fbbf60f848d72a"
  },
  {
    "url": "assets/js/127.92e532c6.js",
    "revision": "4a090025f5fef22eb300dd9294ce8e21"
  },
  {
    "url": "assets/js/128.495890d7.js",
    "revision": "efb5cfd4b924cfbd11d6c64fce8e1c16"
  },
  {
    "url": "assets/js/129.a365d437.js",
    "revision": "ee9e14d3cf9ec6ccf726d1dd47cdf1f1"
  },
  {
    "url": "assets/js/13.a674d20d.js",
    "revision": "422d03e1bacd787ae4e128053c363dba"
  },
  {
    "url": "assets/js/130.fb0f4236.js",
    "revision": "69583f8d628aba38fde9380264f087e5"
  },
  {
    "url": "assets/js/131.c6cf68eb.js",
    "revision": "0ac4053bbe1cf24db2ae710a46deddd5"
  },
  {
    "url": "assets/js/132.bcc74523.js",
    "revision": "107d962c8992888b39d48c8cb7af2bc5"
  },
  {
    "url": "assets/js/133.df77833e.js",
    "revision": "14b8e9d111086f2ab3fdb423301cc60b"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.822ca34a.js",
    "revision": "ea32c758419f3fc4073424cbd605e4eb"
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
    "url": "assets/js/139.471254ee.js",
    "revision": "3f36314562a20becc59c300049b3bdf3"
  },
  {
    "url": "assets/js/14.af550c62.js",
    "revision": "19ca787a8b85a7a519dce1d5bfb443b7"
  },
  {
    "url": "assets/js/140.1dcd1d05.js",
    "revision": "7b8b3ec10148265cd304eaa2d2dd7232"
  },
  {
    "url": "assets/js/141.24e22b80.js",
    "revision": "12ea66b6d25dd07bb282dd63ce5e86c6"
  },
  {
    "url": "assets/js/142.ac71760d.js",
    "revision": "ae42901c00b6f3d33c01b87934edfc5a"
  },
  {
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.166a903f.js",
    "revision": "50e72b667b4c96e5340bd97d3b83cf73"
  },
  {
    "url": "assets/js/145.733bbed1.js",
    "revision": "2ae8e1d09eafc56b0171e720eb074118"
  },
  {
    "url": "assets/js/146.6062f7f5.js",
    "revision": "d2db81cd64c40f6a7b818af8c0bfea1c"
  },
  {
    "url": "assets/js/147.87951906.js",
    "revision": "50b88bb2f454728056d309ef5c3ed314"
  },
  {
    "url": "assets/js/148.e1a0f13b.js",
    "revision": "82f98604acd0e208b436ce96d2083a54"
  },
  {
    "url": "assets/js/149.f8132532.js",
    "revision": "426bc22ed31b1f1dca1bd7584427cf90"
  },
  {
    "url": "assets/js/15.6b4c26e1.js",
    "revision": "d74c88242fdf56efe026349802bda451"
  },
  {
    "url": "assets/js/150.cd8fcf55.js",
    "revision": "a4022b69327254e2beffbd38d4b70ec6"
  },
  {
    "url": "assets/js/151.ae7688af.js",
    "revision": "0c83506027d2a15d14b2ba71c5610e0a"
  },
  {
    "url": "assets/js/152.72854f7b.js",
    "revision": "a1b48dc225a60ac5a74288b7eaa328b3"
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
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.2e67b49e.js",
    "revision": "91db2a9cae6871c97b510d4aed4e6823"
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
    "url": "assets/js/159.9fb04530.js",
    "revision": "8f7523f2dd22d35202eec77fabf7fb91"
  },
  {
    "url": "assets/js/16.2be2c9bb.js",
    "revision": "278c5bfbf714695b770cff95e2decc29"
  },
  {
    "url": "assets/js/160.71b75a9d.js",
    "revision": "c8708e2cacafe19c9ace70a131ec34a9"
  },
  {
    "url": "assets/js/161.efcf159c.js",
    "revision": "7eab09929afdaa7285703334b0d6a125"
  },
  {
    "url": "assets/js/162.93874985.js",
    "revision": "3c1f0b50a9a9db8ee5a3c3285878aae7"
  },
  {
    "url": "assets/js/163.e58ddc07.js",
    "revision": "b1abaa0cb1d5f3439f1f84181fe5b797"
  },
  {
    "url": "assets/js/164.99755de0.js",
    "revision": "a3ccb573477cde79f58daa421a3efb28"
  },
  {
    "url": "assets/js/165.a1d46f32.js",
    "revision": "4367c7a44ea24211bd07f3fbc8589447"
  },
  {
    "url": "assets/js/166.9bc79141.js",
    "revision": "513af3ec75521aa06d30476acd38b2d0"
  },
  {
    "url": "assets/js/167.edf5d29c.js",
    "revision": "90ce547a1cd6a5815c88da95319784e4"
  },
  {
    "url": "assets/js/168.f678d1de.js",
    "revision": "decee745ede51f396fd500942f85363e"
  },
  {
    "url": "assets/js/169.eb6b6a68.js",
    "revision": "46bb3330aebab2361f6bad0f50b31a4d"
  },
  {
    "url": "assets/js/17.dfa10068.js",
    "revision": "23e2cbe065258a9008488f79458fce7d"
  },
  {
    "url": "assets/js/170.2457ff59.js",
    "revision": "abb42182f19778315ecf93a07a7db45b"
  },
  {
    "url": "assets/js/171.4dbf0329.js",
    "revision": "dfce69a06d10d791ff5feb5522f4455e"
  },
  {
    "url": "assets/js/172.f0c5b274.js",
    "revision": "64a7421910759bfc855e01d2d017568e"
  },
  {
    "url": "assets/js/173.1f4ac6bb.js",
    "revision": "3aeb9e397dab08ec1f98a79851ec48c9"
  },
  {
    "url": "assets/js/174.5347a142.js",
    "revision": "9f4902a1a5ecc1aff6e5305fb2d497bd"
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
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.01308265.js",
    "revision": "3bd4d015cc278acccaceb6b62d6639bb"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.149675ca.js",
    "revision": "63911b22925a434c7e6a643de555e37f"
  },
  {
    "url": "assets/js/181.e28da0a6.js",
    "revision": "d0376f64dcac1b6e927ef93eddd84a70"
  },
  {
    "url": "assets/js/182.fe927302.js",
    "revision": "98ec67b4e69b58cdb3b2e15dacc71cb6"
  },
  {
    "url": "assets/js/183.4d394d0e.js",
    "revision": "d17725354eee744d482b8b1008edce96"
  },
  {
    "url": "assets/js/184.1240a0d9.js",
    "revision": "97466d998cf099e6c39d990d84ac5141"
  },
  {
    "url": "assets/js/185.6604d0e4.js",
    "revision": "26d08b38d17080ed77a2b19bb05090d1"
  },
  {
    "url": "assets/js/186.12b2a19a.js",
    "revision": "f7f2cfd0050eb57dbc7f5323d3d3410e"
  },
  {
    "url": "assets/js/187.596d10ca.js",
    "revision": "3cf723ef8355a57703c38018ddfb9289"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.5a7ad473.js",
    "revision": "b2886645f18a8eff4ad44a92eebe0a23"
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
    "url": "assets/js/21.7fe68023.js",
    "revision": "453b8bd19044e5bf9af190642a5a60bb"
  },
  {
    "url": "assets/js/22.71593b75.js",
    "revision": "3d446e1127fe3dc464b528b9b08fdbe6"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.6b7c388a.js",
    "revision": "97ef44f3aa8ef310a9b65e17a5699497"
  },
  {
    "url": "assets/js/25.92dbd84c.js",
    "revision": "ee8e2cc29cd115d161a37150d0908285"
  },
  {
    "url": "assets/js/26.0e5d43c5.js",
    "revision": "df373fdd11868dd88c32c2af9572a7fa"
  },
  {
    "url": "assets/js/27.5b0a744c.js",
    "revision": "bff0edb8a4f07db7dd9ed7b791eb8088"
  },
  {
    "url": "assets/js/28.2d376017.js",
    "revision": "b8028ae024c0a26fb05ac2999a239895"
  },
  {
    "url": "assets/js/29.71ff4ddd.js",
    "revision": "45a13dbe935be5ad6edea38ce730741f"
  },
  {
    "url": "assets/js/3.eb0b78cf.js",
    "revision": "ad381369413a9fb59b7809f08ef8ac3f"
  },
  {
    "url": "assets/js/30.36cb8a6f.js",
    "revision": "67e40fa0989793f11041436669fffa56"
  },
  {
    "url": "assets/js/31.b7fb3a50.js",
    "revision": "184a7fc98976057616d2b967686aaa25"
  },
  {
    "url": "assets/js/32.23534a4b.js",
    "revision": "033d7dc492542397e0eb5edec44f5c93"
  },
  {
    "url": "assets/js/33.2d97dc9b.js",
    "revision": "1861d9e9dc824ed6a70e853faa3b101c"
  },
  {
    "url": "assets/js/34.fd76b1c9.js",
    "revision": "66c8127fc284b94727cc853b111df236"
  },
  {
    "url": "assets/js/35.facb192b.js",
    "revision": "2c2bd316ea8f3a0238d08983332f2c95"
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
    "url": "assets/js/4.a4114a6e.js",
    "revision": "c882dd5375dd9b123a9a10db21c39071"
  },
  {
    "url": "assets/js/40.c7bd2edf.js",
    "revision": "a9b91d032478bd17c7baee190a92b327"
  },
  {
    "url": "assets/js/41.9760b85b.js",
    "revision": "ff6fdd2e83b2b71a71ba6abb66d35c52"
  },
  {
    "url": "assets/js/42.6c0d6a92.js",
    "revision": "dd2e0c459f27ddbb50d76b59611b9033"
  },
  {
    "url": "assets/js/43.5445fcfd.js",
    "revision": "77405b23ebd49a52df2a3f5c2ce519c0"
  },
  {
    "url": "assets/js/44.b4aaf9b6.js",
    "revision": "f308feae168bdf783f9818282426f15c"
  },
  {
    "url": "assets/js/45.85109c4d.js",
    "revision": "6f3615e1ec658829c5658254d7f8cb7b"
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
    "url": "assets/js/49.bc461903.js",
    "revision": "ea417449633ea9e586ef129d5295acac"
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
    "url": "assets/js/53.a5c41b9e.js",
    "revision": "cb1b86cecf118a3ed638ab6d60cc8a1f"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.2a0f92ca.js",
    "revision": "11f2bf22979d4238ab1e0bd47de901a5"
  },
  {
    "url": "assets/js/56.fb1df89f.js",
    "revision": "07f992a609c32b95e4eb1decdd6e013d"
  },
  {
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.e0653771.js",
    "revision": "cbac3494d63ba0df9989ef207527d391"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.7785ba45.js",
    "revision": "ec126c70f76de5f38a85ef622a33fbad"
  },
  {
    "url": "assets/js/60.328cd490.js",
    "revision": "4c52632455135ed72dc4cfff62084225"
  },
  {
    "url": "assets/js/61.55c62e15.js",
    "revision": "b06151d1d39c482f3e03d82af9628431"
  },
  {
    "url": "assets/js/62.9d6df6ba.js",
    "revision": "071092460610e4f347240af7a803cee8"
  },
  {
    "url": "assets/js/63.64f6dcac.js",
    "revision": "b66c4f4465e04decf1ec2d118e0a906b"
  },
  {
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.6d589329.js",
    "revision": "e40a9853e9ced3224f2ba8a93d5b282d"
  },
  {
    "url": "assets/js/66.2d3431e6.js",
    "revision": "b89a57b244fd5b88ff6e53d055569502"
  },
  {
    "url": "assets/js/67.0848951a.js",
    "revision": "8aedb64e115616e7a6c20428b7044532"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.196b5dc6.js",
    "revision": "33ebfc28d650d8989af4b0e91dd0cab0"
  },
  {
    "url": "assets/js/70.c79dfc8b.js",
    "revision": "6582b0275c1cc33c4f3e8b9880da9bdb"
  },
  {
    "url": "assets/js/71.0bebded4.js",
    "revision": "54394d35a7fc79c61c5c44b337d3d87d"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.dd8069f3.js",
    "revision": "12f3e7ebaf2c42cd5b3f56cc39d3477e"
  },
  {
    "url": "assets/js/74.aad526e1.js",
    "revision": "a4fe7a7615650181de14c29cdbaf9f0a"
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
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.1ca608a6.js",
    "revision": "60fe80c9dcfb13eda46aab2715369e18"
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
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.a70182b6.js",
    "revision": "5a948b1b13b5385800f92eec6041623e"
  },
  {
    "url": "assets/js/87.89f6956c.js",
    "revision": "d5680fdb2bc2a7d965557bc39641e200"
  },
  {
    "url": "assets/js/88.5ad45bb6.js",
    "revision": "a7e34b43d7d446782f4f3d63a5cf42d6"
  },
  {
    "url": "assets/js/89.e271dba4.js",
    "revision": "48091f03dabe8f85940eec00f1a2e64f"
  },
  {
    "url": "assets/js/9.eaeab872.js",
    "revision": "80cc0a8604fecec36a5940914fdd2dad"
  },
  {
    "url": "assets/js/90.944a5002.js",
    "revision": "8b3f6620460a25dcf71e8a97a637c153"
  },
  {
    "url": "assets/js/91.a2895f7a.js",
    "revision": "075c23438a89a8e557f24aa813c66825"
  },
  {
    "url": "assets/js/92.f4e257e8.js",
    "revision": "a0a3402411c680ad65bda1977838bd7a"
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
    "url": "assets/js/96.2b00c280.js",
    "revision": "ee9163c8c0c1125dcdda55aa79758b5e"
  },
  {
    "url": "assets/js/97.53d0a4e5.js",
    "revision": "3ce821fd2a1564dd6209eb52831a141e"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.fe6bb99a.js",
    "revision": "6602c0b337b334d86eaebf57708d36d8"
  },
  {
    "url": "index.html",
    "revision": "636444dc6d84ce38d5d134dcebfe507c"
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
