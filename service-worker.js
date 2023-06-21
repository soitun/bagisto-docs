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
    "revision": "78af506c1216e1c943e5ce314b35f95e"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "262c2432c53196b6c90497ffc67d2edc"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "24d5add32a81aae0507fd65d009a89a1"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "e99e488144f745376cabaa477784a3b9"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "fca4c1c970ec53577031a7fa25e75b07"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "9ad69a429a328674e4737d1aa86e3124"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "8e15c146c48c50ef01ff7efdea13cf5b"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cb23884f0395b4bc7c6e85c009883137"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "e9348c710c4fa812cb8a707f9f669975"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "be7a37a9eedd40163e70331803ef641e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "494be1fabde1bd890b6ba4e43cd66355"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "01c61fe08791a0e1b30ac3cdee7bd230"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5affc3c91d9bb6b83eb52027e84f4d14"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "4da22814564c0e0ad0a7523289a27299"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "421127c23ad3ad397f22fc4269819cf7"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f41414dbd26f93b7952e6a439b5b932d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "adb1dde83b8f98d46a7ea6b9c4af7c35"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "bf78bf0e89acbfdd94fadfc071364179"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "be54207ccb6208f2d7b2f5dc0e06fbef"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "ae338ab50589974f003f54dfac83400c"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "457166c96a450f386a390b9d0c38f4ec"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "68ef8410a653ef7e9a8807cedb12f3f5"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "d28c00fa172752309fd6574b7adbd3a8"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "f9d5d9f20a7437bd9cd2259ac28b5fd9"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b804070adac15237d78ab923e71f24ef"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "77de5949a8ba6403dc7f7805354b71e7"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a13b42665efa532d2a881bb43c3ccfa4"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "ad8b47f35bd4207b2584c5f3d9655665"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "44f417281b26e529dc8295d2efb86db0"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "5610f981ee0fe13d740c48acebf88aa4"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "545fd30ba04c83915b0fb203e165496e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e2d882e73585f3b43ea40deebf49c858"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "472e4c3faa5ff9e551080714658c185b"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "aa55ea1d469bb6e4d5e8fccc4398e1c5"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4ce1680f00fdd27d34224ae333b19ca9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "de94ae10481b7a3aae9c667b92b2752f"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "af459d538cacee21a888a24427d6846b"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "4bd5011110cfb836349d901c73f2f81f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "c7811e95a427a21d5a74ca6eed759808"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "d3aaacd2c8bf373094dc7e861c3ca3b9"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "cf6fe5e3fa8c3ee4771652f85423e708"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "cd07a2122241266ef9a546494359926e"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f7d7abc7d079c832f91e912e6038431e"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "9d1962aa2a42ebe52a56de86208597b2"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "13bc60ae7da723eeac44d538c7545dfc"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "03acb33d14e2830d68e661101c4dc1d2"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "66b7c12cd86d20d044ed90e8f1224e95"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "1d0ab656fdfb5f59ae1a81dc29af47b0"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "da079127cc12af5f5245d952c9dc217e"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "b7d179591df347d539a2ba0d3b5d242b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "45cadbdc1c6163901920071cb8a9458f"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "8ef9bb807289b3b53b3ce6d3fef794fb"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "cb0c3e4e73007d4509cce846a682eabb"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a0f64a3bb6f4911e5c56cb98bd1f38df"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3d224dbec02c9567523bec5ec0b62ff9"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "a2cdbd58775085fd04a2579155099258"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0038aa9225f668548718467c30981dca"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fb7db13615eb16ee463f835507e0ad07"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "78b7e669b7447c2d6feb06bd66c71c36"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c80f4eb2c216115af85ea04a26e46ebd"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d14582ba91aeebbd5ddddb82446b14a9"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "0491476482edb59fed773e1de3b5b98e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "0c92867ee2ab0cd71267d2689e0b6181"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a25f640571b842bfedd59544d137dfcc"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "144d034d327f406a19715114f94ca500"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "57db5bae2750459004e754c7fe18f757"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "02f7c006f4ec41bd2b507256228cc4c6"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "ea032a228dccee1da5c67d82c1981154"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "6b89f93c887956dcd882c6661c8fce7e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a12def05aaa15c541d1f8606a4862792"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "69b100734636b69d6b885972c820f71a"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "69cf82e2069a05fa28e10b1a43a08f80"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "307f896c37bf2a52b074a42f53cf39f9"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9febb4b4c0c6f766a0d022022a021b5d"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8c1b7591c79f2334deccefcfed1fcccf"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "44d4aaf564216b159579ecceafebabf6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "a7cc70ee890dd1635ea467015195fc7b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ae82e464ec40d07716118ef5d3ff9ac2"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "fe32faef1427c1933e8cd3bcccfa4b7d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "6f6f5be0f0752c27be7e4b8cbc7e70cd"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d52a4f2f312cbf35f41aa5bdad36a17b"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "8e3c3623e4f6e6ce20f449a8a9ee53b1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1ccd72f7abc843eedf259f0fe9f00a48"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "864bb232932077d4b3f9a61b531fd5bc"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4554cc3f7e3cbdb392fbe4760969e611"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "fed7c43d6e0d6cb89f2ab91120aaf14c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3708bf5e234d7b59f1d154261c3bede0"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "0ed9007ab43534245398eab6688a813e"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "3173067d913b430670389a3d5f289857"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "326bca5d6cb35fe403cd960d0dc60817"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "921bb5c88ea3e4c997555adce41fa403"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f3a40db03e20baf3e41ec098f8ee95cc"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "c3c5376701a3952c7c5d93e27e954973"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b99619e62ef5f98cb3d62331955138a1"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a9e515210313b44e09a22c04997ccca5"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "9d4500e23cd4a178494712238efc77bd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "cd9c92993ff61cd0f207ee279622e34d"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "47e1162e4490f34f8f59d03d7c085815"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "76ee0b2d047af05c0041b4e454297f50"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "1ed847f5cc60a516be1d9df1571b3150"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "d76e1ff8fd33dd4aee0ff3cf44606539"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "cadf0d5611043739ff48db2c82888eac"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "e5eb9ecf56befbcd6e391e40c844acb7"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e0df110095f530b136fbd917db26c2d6"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "bcbb6daf286c497166544aef76f3d412"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e5afdaf4542267f51c127ca7c9c49df9"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "44a52d42af313bd621f2300a0b36acb0"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "83ad8fa1f51659db7bb30c6667c1bc37"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "694e7056fc3aeaf5e0986fe077735d39"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "d1ee44c79306486b3a8ae05088e76052"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d69d6b4ae1feefad827aa5a85740e44a"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b856e60e17419459552186c8b33961d2"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "244682edffc46fa4a6fe8b275a5554e0"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "39d52473258dc321e8e7c31318beaabb"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "121be37c19c6298ae58f8a10aee0d67b"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "228fd758fe5aeab4368edd47690b6ad0"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "fa6f7fc523f2202275c0ab38ae06ce7f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1feca38c5bb13cb0c19daf214c170e27"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f545f124d7ec1b2cf81126c5c8609810"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d08697fdb5759f2a60a3cdaab59e8110"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "a52dc0c5999ec598e6a6d83e43a4ee5a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "332653ba18522b753c804532d2620866"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "a810e84fbf2fea0566129e6eb4b55940"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "576f735c5207fc5e88e1304635c1b106"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "a44941bb52228022a4aadae593ef5de3"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "f89b96b7510cbcf7b3866df462752be7"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f9bee983405607b39a93f4f113933547"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "4d657e8a4b68408aa9a3ff3dc66794fb"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f3ac8f5e2d1ad850743fdf35c8ce1b7c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7c2ed0c5bff8bfb2f171947efc4c1654"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "39e8814a182ca28e2a3aadb538827ed7"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "8aa249bb9acb222c7672401246e16398"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "8366f57f2eb1bdd8a63a7f22898099f9"
  },
  {
    "url": "404.html",
    "revision": "b1d8bcf6c2d47b5467d2c91fa282dcc6"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/js/10.35857dd9.js",
    "revision": "d8926842eae3f5215a8bbb0acaf6d131"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.c36ad75c.js",
    "revision": "982f9e7c0f72a34fa88a86bddbd80d25"
  },
  {
    "url": "assets/js/103.488c3d32.js",
    "revision": "ec3d5c7512f783597f66bfa92be739cd"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.e56cb48c.js",
    "revision": "facbf24c679e8dd61b4c669f9192816c"
  },
  {
    "url": "assets/js/123.98208e2d.js",
    "revision": "5d30a7e713013943f3161f79bd96f008"
  },
  {
    "url": "assets/js/124.d46a6ff1.js",
    "revision": "35915afec1700c1c53a596a40a9795e0"
  },
  {
    "url": "assets/js/125.8f9208f6.js",
    "revision": "7367bf77ee91764a7251ced69bf3ad6d"
  },
  {
    "url": "assets/js/126.415bf01c.js",
    "revision": "b6f3e582469a08de75659d6149c9e67d"
  },
  {
    "url": "assets/js/127.82632c74.js",
    "revision": "35ef4693ed10cfd2971253abc1c1953b"
  },
  {
    "url": "assets/js/128.f090f902.js",
    "revision": "6f9112d59e5654473e78d70b4a943b97"
  },
  {
    "url": "assets/js/129.a0d4fe37.js",
    "revision": "b79c561b553cc60016a2e4763f5d8487"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.fd57f335.js",
    "revision": "cc310a8767a2b485e966a69c3f28aff9"
  },
  {
    "url": "assets/js/131.ba12149a.js",
    "revision": "bd32480412ea6cf961d21c32016ebaa8"
  },
  {
    "url": "assets/js/132.534037ec.js",
    "revision": "9cb04f22815803ff099ff923e63c27ab"
  },
  {
    "url": "assets/js/133.ae852c09.js",
    "revision": "445e783e740074cf6a31ee0696d5a55e"
  },
  {
    "url": "assets/js/134.90a93106.js",
    "revision": "4af980799eb755f3d2e4ac55ea93887b"
  },
  {
    "url": "assets/js/135.d94111ec.js",
    "revision": "e66f58aeb127991b07978d989b526db1"
  },
  {
    "url": "assets/js/136.a3c5a625.js",
    "revision": "260fdd49623752163d4d37ff1efdac70"
  },
  {
    "url": "assets/js/137.1e344da0.js",
    "revision": "1c5f49dd450fd1d962cb87eb3971dd8e"
  },
  {
    "url": "assets/js/138.014968fc.js",
    "revision": "de914070e885a2b4c18eb643399d3059"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.0b237680.js",
    "revision": "2405cd3a72782abf532a8c8b037f4893"
  },
  {
    "url": "assets/js/15.70d5b891.js",
    "revision": "30ec4c9bf57bad9ddc1d27b252934412"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.a30a3103.js",
    "revision": "2f06fca1e787d9c9c630ee04c8bf3bef"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.3cae459c.js",
    "revision": "fb2b19390143d60324ee29f6e62b8465"
  },
  {
    "url": "assets/js/25.63518066.js",
    "revision": "1f581b88ee3abd1b3a366fa9ab5206a3"
  },
  {
    "url": "assets/js/26.65e912a7.js",
    "revision": "d99d4041bf39cd268de21d034c825d9a"
  },
  {
    "url": "assets/js/27.a4144a04.js",
    "revision": "0550d4f20dfbcc1dfb81144cc14c7ec9"
  },
  {
    "url": "assets/js/28.79b1931f.js",
    "revision": "0d0cffc13ef616ff71158fd9314c70ac"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.e4c67461.js",
    "revision": "a8328f082a9d9c0fec0a0e3b77501c28"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.2fca18da.js",
    "revision": "aed3be91b8c692b74e3da31f9cbb3ec5"
  },
  {
    "url": "assets/js/32.4e227cba.js",
    "revision": "af50fd45457a1ae144481f570b87ad9d"
  },
  {
    "url": "assets/js/33.eac14764.js",
    "revision": "aeab27d0d593ab5fb7c21653da3e1792"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.2ad8811e.js",
    "revision": "f7509e0b8bb09979143c931d7832d541"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.6593db50.js",
    "revision": "3aa7cc3c5d46244f4224f415bcbe635c"
  },
  {
    "url": "assets/js/42.029317a9.js",
    "revision": "70b870d905a0f3ef25becc3b9009d97a"
  },
  {
    "url": "assets/js/43.22419c5c.js",
    "revision": "8cfe5ced4d8b9529a7d2aeb94b8da706"
  },
  {
    "url": "assets/js/44.70d14f9c.js",
    "revision": "ec0dbc5e947fe7beb056a86fc6ba4cf7"
  },
  {
    "url": "assets/js/45.0366dca4.js",
    "revision": "34481c5a445d972df9e689c4e723192f"
  },
  {
    "url": "assets/js/46.3bfffe01.js",
    "revision": "068e6d85acb4dcfe7c1ffb5f6a268415"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.e2bb9210.js",
    "revision": "19761ad5ee888300ea9a7fc5eeac3660"
  },
  {
    "url": "assets/js/52.a228f13b.js",
    "revision": "232befdb6b1d81b18ab79115e440abbe"
  },
  {
    "url": "assets/js/53.54edd495.js",
    "revision": "8165ebf9cb0abc258b8f270d95abad6b"
  },
  {
    "url": "assets/js/54.23f25432.js",
    "revision": "0799448220981d0024027afea62a23a7"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.b040dbd4.js",
    "revision": "7046b1f70c55d34a63096cb519327d8f"
  },
  {
    "url": "assets/js/68.d8fc47fd.js",
    "revision": "92fe090647f57ddde65b4ddf23905560"
  },
  {
    "url": "assets/js/69.eee9ef7a.js",
    "revision": "975152695c11ef424f8f2aabee1d1f6e"
  },
  {
    "url": "assets/js/7.ec81e09f.js",
    "revision": "67e6c549b7175151f518316bb47bd49f"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.706a1926.js",
    "revision": "b79110e05a6f1bfa6dd0fec0577ad9b9"
  },
  {
    "url": "assets/js/73.116eb797.js",
    "revision": "75e7583241c2551d581e78ea7e2f3f0e"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.067a2bd1.js",
    "revision": "c47c4bafb7bffd279df450f9fbc3192b"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.2aeddb2c.js",
    "revision": "d217b8f7a07c45ce99e7ee990c5b9b94"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.7f667a2d.js",
    "revision": "4a394405a6b5db3dc90633b35d938059"
  },
  {
    "url": "index.html",
    "revision": "74edb4baf3b6adf998bb0b9afd2f00db"
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
