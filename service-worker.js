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
    "revision": "11435fdb751f59badd8de17240509c02"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a926a84375696eb97d42c281d558bca4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "2ada1c28cdecaa33f67871249a3a9d6a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "6b0ca15c57701e368c4e75cbfc26de62"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "ca172086b46c6b01cc459a774cf50d40"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "8ffc597e06e42fcc0ae8bf859c10bff2"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "585da006eb10f72ec379b4640e28d723"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5fae569af1e73465fae1450442f597fa"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0eebd7efcce83e25a3d3aa48dd4fc24f"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "46a577c0ea0e0faac43fabbab75b33f1"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "678a38afac2d0c7bcfc95bf43891a1a9"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "523a5e2a853e6bb43f09f2389c86d6ce"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "b33890146bad7a584527deff6fd05b18"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "a5fbaad543ed3c8191754f439a5ea5aa"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "ddaacbf4c638307e3d1a397183cc557a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f65a14d6b3248c7c7627a44e9dcbd08e"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "23724306e7c7507ef59e031b12262ec9"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "1d4995d5fb77f7aa8db308487fbd59fd"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "462df3fe10d2a09ed37e51854f09d55e"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "47317637e9e2ce30d208c0731dbd9604"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "9975f14994f20ccc1b5ea1d88da1ec3c"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "f93c7ef369d358f808146739d5ea83b1"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b9f4cfeaaa0edbadf4164b33cdd6b25c"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "dba0e97acdea243d8ce46b72d9b83873"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "0a34d9c5d362f349710a7f4e96cab5a2"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "aaf5ebabb1f8491f851820033162758e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "3aafa310174ec284b08dcdbd6624517b"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "dd633b54a141111f6d1b9c629fce58e7"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "96d20e9fd3097c87133ac766dd53be30"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c3ac285903604d996c8bd2b25bfcbb3d"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ccabc5da64b58458a9f5ff261bb51e86"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "a97d2fb6991e6502823edae7263b38a2"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d4baa8c3a942e5337377775a2d306464"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "8c78c134b3d4124add6d885e5399986c"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "ae92e71da386e5ddba4aaec664a4f192"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "07d6202068f27282329b1cc5fe33548d"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "db1a2028113c6abd9b255d4c26275280"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "2d2f10f3f805f61b78ac9ca148bc3e3d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "42117de7f83139a2e167dfaf975b948d"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "6b6364f2a43e4b28aafaccf9805d5a51"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "681b483c10f6e1f547fd88fb1ff9969c"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "0fecd16503cf030b081e350eea9f9d2d"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "acc5e5e6032fb24e820b36ae55a995e7"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "306fa2c342dbb253a0bd5b77457249d9"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "6db04d3558c1383df52acb0f82ac47d3"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "4d40e337cfe44b37e24f7a40d77fb4b2"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "7e3527a98df82f118a26f1ad88444c44"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c58ddeb7805f240ba83f321b12e663a8"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "9f84f1b0dfaf997cb337dfb018638185"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0fd8b948730ac3f9060f4a47426a00f2"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "4130391115f844f1e47b272ee3c998d3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "bc70707a4d529d18d885a4f286ebb5ae"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "26be37b19c9201a7691a7b99782f7f56"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "eec7e69b9d39e41b7e76d68b9a8da559"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "7c6b55795ac052ab969f7a122e065a91"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "ef4150b751100ddd05ed2387cfc8247e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6d6e6105f8697c85d581236ad4ab411d"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "260246ae19342ab77b6b42b94abbcd17"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b3c555550ae573c72e798ee35a404420"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "1a4882657f2f6b878bf55e7a6dc8ec8d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5f4434761c438742eb76befe9ac7ec51"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a4bafb2d799da861b3fa6134deef8075"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "45f4f356018e114540bc0d49dc6b5b34"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "ac8811148892367f3bb86eb265d891d4"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "826b8437a8ec6766dad0bc44cbd4d0cd"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "25ee2b1a4a3f8a11a9d8a9d5d57b4085"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "9b218449addd23f8cf4ac316516d8cec"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "692e31001e9d651a85c0605c399f2386"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9806a7029e55156514685b88b13e3d09"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "e285712d30149eaefa90b689a490dbb9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "43adfd7bd6c21df8203906db7b036dcb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7c871127d95d61a7668e22f5418b982b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "87db38750ff89003b58ba5b6efdcfe60"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ecedb65ef2e3773fa5d316db26a5d58d"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "fb0c4e613e606854902566102884608f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "911a0440134126d230439162e7295e26"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7a47c1ee7218a065581608dd2ab60760"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "8dbb56b07165e8ec8e51c469db67fe96"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5257e20f561ef5efea47ae39f6b9d10e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "461b3696e8b8125370d299b2cf6260a0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "64c9b2c6201ee8eb7adbf1284dee6d8f"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "00ea4c0679eff2e63b0a56fa76e579b9"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "5c6fdcb2508acba39d2d3bff5dcf0060"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "bc11636f6c2e5a5318d18b7f08d5da17"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "cd7d22490c474fe353a8f5c906e037a7"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "8a96e6bcedb787e4048b1456111d4e6c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "9003f4c85b7501b3317842769040a852"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "071b3c4f1a7ae30e371007222906e34d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "e105e93ab12d9669cd2807693f1a3af1"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "c674b394ffd4fd1d431751d13f23f76d"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "25a528f4c8e1a423d0c8e9fd4229a224"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "0f97e95d30cfb421e85198b71f38c8ea"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "2d49192c6006ed2ba3b576fceebf4436"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a4ec893f9a2730db61b875bef0f67b1f"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "74800e3cd8a5b6685a1cd9e97eaad779"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "c8c2bbd26bffc2d19ff2e00dfdabd954"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0519d3b4246b7adc319e64b91a91f79d"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "2085cad3bb33921dea9d7234a7840ff7"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "d7ccf3962546e1e312db1b98239ecad6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5f639538ced46b073366633686909031"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "326fe198b142a5247575314cc3e26712"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "cf63925955d3ea1afeb39f64470db557"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "853c933133adb9fefd35754820e7c031"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "2d036d9092f1fe9d3ce76dbeadfe15e0"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "361486a3dc2a192cb7689c9c59050f1a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "73fd5210ed8a8d45f1eefacb609aa89f"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "7eea301b22ed951140f4120a515f24db"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d5176c7f71d9d266841fa6bdc5a0588a"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "0627379b959aa8d0f3fe35f9665b2f23"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ae0cc4cba753ec6b1b9aef6bc19d6a1e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "bcb5dd7f2d99f6baf6e5ccce8283fe85"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "0e65760893e925b4d66353fc233e5576"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "6dbcbadc3d76b9198282aaa730b3b862"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "5c8e2728e2b613b7e05556fdf997ba5d"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "a0bb9dd7047e33ed432ce514ea49f609"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "a489c885b49f65387021ae46750e7ffc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "efe12583d5c9ed546b143f9b8648c984"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0a82f1276970a7d576c9f05b69fd08c5"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ed12046c24ced43e725c0822a2084e8b"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e0a466ed29726f36eca43dd52e1a7e7c"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "e95e20b8e4afc4494c9d18db774c361f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "fb4d0d596f44415bbe560654cba028bb"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "2009c7b79d1971fdc3a73a2a6f0dc8ad"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "15ef4f078830e1c75b7e472419a4b3a2"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6a0e5102e8fa0e59ffaeba8dbb42439d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "4ee44d330b9a2ccd5605b793837a4425"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "d0aeef85d1f13759db8eaa8d233dc291"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e3520b8c4cc8f9dc1947929343882366"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "d798592d401b83e37fad54061d8d91b9"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "cdd5ac8e8e897ac3a1d1c2d2d0e2f777"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "481f1cdfaa3c9d89eebbecdfea733965"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3a2e37f5b5ff058ec787fed6abb752cb"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "30e8a0c8780ce3652afa87a3128034ba"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "ec8569bcc52d744258a2e04ad59382aa"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "383bfa39d3b8438ddafa231218b70faa"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "837a6ad0995073dc659905c1bed71192"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "2b477ec050f1e34e1bfe4da6977f2df4"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "80f916e0433bf56bea9e7f16a44f003e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "724e7f40055a6e415f9602a68aa9d262"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "df96f5690ec910c137f43b94b66c5b87"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "02f194d2e52d015909f35e38c8a60ec3"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "d107133f59b7cd43081b83925a68d642"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "8ea2e4f6afb1f4424c14787b06d83df0"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e55e3fa0379e2dd19584487e7461e954"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b7d624a13f60ce1ccbf8484e176c5126"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "6de5322fbde014fa55efa323c84d05e6"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "49c28a0be73eb0ade2afbf490e585df5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "4264f14b8f19cf6c2ce5bf1c05a62977"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "d8b0631cf8e6ce00dde4506facbd4880"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "8917239097bab4dbab6915412cdee2a8"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "756037766eb24fa4eae0d1047a6f1036"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "430959f4b50ce3f9f74541d3aadc45b0"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "095f7dd23349ce8f514fb425091d8580"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9cdbf0111441d63064d0b5c0fa2b0a15"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "5340f67bcf930a96ea96df435303c4b6"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "097b7a8f70fb21d19e131b961ce4d3df"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "6b34279d6ec40df23b172ac17320a095"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b6a8b1da6b4dbbe2a9508435513b37e3"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "58b15d3a683b717760064ea392ff531d"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "ccd132381cc8923118260bee72d203eb"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "a5b1e74417c94de75986e1537b3af4ce"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "8336334acfc4dbaeab299c0d655b4883"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "d9aa86bcb1e2487d743abfe67285de79"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "47b520dfd3998b90f537de1a3a39c9ad"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6e60caf5aad4cf560b410a264526fefa"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "3cadd5e40ce79566972d0c4290a6f4d7"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "6ed936a1b3e46b16a652b94d58e72f8e"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "67212c3d674bc5d7479e59f3d254b1ff"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "43534dfa797b4fcffeb8f6cfb3784738"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "d1278570ff3c2daaed13c7e1e073a580"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "4ded8bf40055b0d17d78f3f8a81b9b9c"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "b813bf0346b915089435a8335e6758bc"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "b9ce30b4f582b519aae4ac49f0a4c202"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "da96ba87c43e4434e43625a502b40cd3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "61b641eef5ce159c174b161451138351"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "950117bfa4c82cbbed8fb902564325c0"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "6c6f66d345a2371ba73016e141d1fc0c"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "0215e77a09cb6dabf9bfd9e83bd3b544"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "7fabe254147e10339cd4c7dd9bf9fee2"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "4bc01b7f02af6ee9d407c275b591431c"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "3589ba21c82b7d72b94ad1a4d435b4c1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "d0abe7aedf32048ac0e295905564115f"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f1ce95167cde41e2aa9f6bf16dd7c184"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "37d6924b32237b13f925fcbadeb4243f"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "1657bb8ae11bcf4f84ba2b915e2784c4"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "fad5600efb56b3fbc0c6dae05b45be4d"
  },
  {
    "url": "404.html",
    "revision": "3210bc37f3de3162ca85ff79da3fc01b"
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
    "url": "assets/js/1.6dd4f8a7.js",
    "revision": "fb1a346597e13e37b55030d372772710"
  },
  {
    "url": "assets/js/10.552b3bcc.js",
    "revision": "f5d53005c2a7e3b392a2a4a92619e951"
  },
  {
    "url": "assets/js/100.01eedab5.js",
    "revision": "e1a44cf7d7043103710feeaf2ca4dcdf"
  },
  {
    "url": "assets/js/101.e44a22cd.js",
    "revision": "dae5021cc8a2355e79cd72db94faf835"
  },
  {
    "url": "assets/js/102.094bf9ff.js",
    "revision": "cbb393a139d6f6124ffb28d370868b33"
  },
  {
    "url": "assets/js/103.1ed1e82c.js",
    "revision": "185e8161c26edbde6bfa945e61ecbf80"
  },
  {
    "url": "assets/js/104.1abba0ca.js",
    "revision": "31bc528fa29f03bac52981c3c675b203"
  },
  {
    "url": "assets/js/105.8a99e49d.js",
    "revision": "27b5e32c14fc17a42b9736e7261d6e8e"
  },
  {
    "url": "assets/js/106.013cdec9.js",
    "revision": "e7f65dcf0e62eea83e4dd45ea698ce01"
  },
  {
    "url": "assets/js/107.c867b125.js",
    "revision": "f36cdedbe6782137f22145a03c4022aa"
  },
  {
    "url": "assets/js/108.6dd55f3a.js",
    "revision": "903158288ad4c10ce94816d093308eb6"
  },
  {
    "url": "assets/js/109.09b5cdcb.js",
    "revision": "60adfb6bb91d8a22d9a641d6be9ceb30"
  },
  {
    "url": "assets/js/11.51a17607.js",
    "revision": "f669e87ad87776830dc7a14cdfd48e96"
  },
  {
    "url": "assets/js/110.f0f78758.js",
    "revision": "13e05d839a10b7d2f51d3cf9ad5c2b3d"
  },
  {
    "url": "assets/js/111.12ecc5a7.js",
    "revision": "66008ebfc547f7e7b6dcf55e3089964f"
  },
  {
    "url": "assets/js/112.7de42dc5.js",
    "revision": "b6e579a6b5368d99d72887de806c7286"
  },
  {
    "url": "assets/js/113.477c90db.js",
    "revision": "4495264b11fe401698d0a0c42eb42d33"
  },
  {
    "url": "assets/js/114.2480f3c5.js",
    "revision": "2a1b5b95cbe994688ed9408817e0b5f5"
  },
  {
    "url": "assets/js/115.d295b319.js",
    "revision": "41869f13082127433e1bea48bd70d705"
  },
  {
    "url": "assets/js/116.1fc1480a.js",
    "revision": "7224a4f374a407801925bb5a01305616"
  },
  {
    "url": "assets/js/117.a30b20fe.js",
    "revision": "1d29da1a124181c159ec955e7b8a7dbd"
  },
  {
    "url": "assets/js/118.33dc37d9.js",
    "revision": "e72d28a5f9841eb10b82c713e1037200"
  },
  {
    "url": "assets/js/119.f0e1693d.js",
    "revision": "a1a9f7fd884ff7698eb1e8403c13c04b"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.54cba225.js",
    "revision": "a27c549898f8ad2625b66b9c486b413b"
  },
  {
    "url": "assets/js/121.97a206a5.js",
    "revision": "c487aaa9a71eca821f0233f17d91630e"
  },
  {
    "url": "assets/js/122.9a437a83.js",
    "revision": "2520f4a5b1eb67f83ca56518497cf08e"
  },
  {
    "url": "assets/js/123.6639e8c9.js",
    "revision": "e9844d99a132fd0e80501abb44047b71"
  },
  {
    "url": "assets/js/124.1f6658ae.js",
    "revision": "fbeed440ca0e125281e7db5b847d7d45"
  },
  {
    "url": "assets/js/125.d0c73b60.js",
    "revision": "676781c0a2d3f7f7cf8a4f1497618088"
  },
  {
    "url": "assets/js/126.706dc783.js",
    "revision": "9508529252c0a910c4488609498a8e9a"
  },
  {
    "url": "assets/js/127.f110c0ea.js",
    "revision": "3de886a54a7730d62b4d276a7f0bff04"
  },
  {
    "url": "assets/js/128.9dcca169.js",
    "revision": "a3c7e839aaa67db03e3aa0c261c1f65f"
  },
  {
    "url": "assets/js/129.fe43b521.js",
    "revision": "75605fd35edd4f49cfde1ab2c6e0c7a5"
  },
  {
    "url": "assets/js/13.3ce53542.js",
    "revision": "5a314d02468eea868afb0048a841e5b5"
  },
  {
    "url": "assets/js/130.a2738384.js",
    "revision": "cf33070a33de4059a6ba3ef8e237ef7b"
  },
  {
    "url": "assets/js/131.38488703.js",
    "revision": "169e4a0f95ee46c14d00e13456457e2b"
  },
  {
    "url": "assets/js/132.118c0e65.js",
    "revision": "f8605126077a3fa7ecf3055ae3cb035c"
  },
  {
    "url": "assets/js/133.1160526c.js",
    "revision": "485fbaed9a07dc5e992e9b6e2c4a207a"
  },
  {
    "url": "assets/js/134.4a5435d6.js",
    "revision": "77a3ddee18def44c4b8fde554e62119b"
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
    "url": "assets/js/138.112a8ace.js",
    "revision": "f9a3f215b5c1e1fcd0a18656c1efd8ee"
  },
  {
    "url": "assets/js/139.d1682096.js",
    "revision": "64e7e644a50f3bb737329df0a1e2aa12"
  },
  {
    "url": "assets/js/14.f80c4203.js",
    "revision": "bb7d02611769afc387a78cc0e50265b9"
  },
  {
    "url": "assets/js/140.3d8225d5.js",
    "revision": "9b9e8319b6758f43bf18013b64778d8a"
  },
  {
    "url": "assets/js/141.2462d179.js",
    "revision": "860419606259c31d12ff867456e0dba4"
  },
  {
    "url": "assets/js/142.f0d8c51c.js",
    "revision": "2e935524c1326da31eeed5a929814f96"
  },
  {
    "url": "assets/js/143.155e2898.js",
    "revision": "eab11d07748fa33f0c739c436379e81f"
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
    "url": "assets/js/146.1a4d8359.js",
    "revision": "1a5ac7bc175f46dfc8259800820e9335"
  },
  {
    "url": "assets/js/147.783a1670.js",
    "revision": "b8dd56d0b339265f6a2b7b6d7cb24dfc"
  },
  {
    "url": "assets/js/148.6dfa45bf.js",
    "revision": "e566f4c5ed99be9571b52740a9f35635"
  },
  {
    "url": "assets/js/149.645f1424.js",
    "revision": "54ccc1fac1d873739cc92b4929f526f3"
  },
  {
    "url": "assets/js/15.2296da08.js",
    "revision": "fc19334e38725c2fb1182d6f58667359"
  },
  {
    "url": "assets/js/150.ee6e2ca0.js",
    "revision": "3bb6de9a229a59a26be1d9d3d1b95a6b"
  },
  {
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.4afe0754.js",
    "revision": "167f21d42319549954e137affe4fcffa"
  },
  {
    "url": "assets/js/153.44407cec.js",
    "revision": "b502ad86eafabf79b3a74bda78a09d1b"
  },
  {
    "url": "assets/js/154.c29249fe.js",
    "revision": "bbce7a4159e9a076c7d41a1b867adc4e"
  },
  {
    "url": "assets/js/155.ce9ccd0e.js",
    "revision": "257d49ac229a271894773418dda09102"
  },
  {
    "url": "assets/js/156.fa05f239.js",
    "revision": "7de95ffce93ea4c28c9baaee5cee7097"
  },
  {
    "url": "assets/js/157.23980558.js",
    "revision": "61f10848c0c912c9636d94a7644b3524"
  },
  {
    "url": "assets/js/158.d0df83c8.js",
    "revision": "361e547bd120e327e5f6bdcd7ff1cd27"
  },
  {
    "url": "assets/js/159.29f85d11.js",
    "revision": "d1511442764bf855be1885e47c3dca49"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.a3e0f04e.js",
    "revision": "aa7b8922c98907ab40723bb7be522f86"
  },
  {
    "url": "assets/js/162.6280a9ab.js",
    "revision": "54c374aaf70cbe3e40969e678a9893e4"
  },
  {
    "url": "assets/js/163.baf5e5b0.js",
    "revision": "0d1f974badae129aac6cc72cee0ccee3"
  },
  {
    "url": "assets/js/164.6dedea27.js",
    "revision": "20b8cf765419944835a376fe3b5d3820"
  },
  {
    "url": "assets/js/165.9f0c5d68.js",
    "revision": "5ad585932074f295282c3b36dfb079ae"
  },
  {
    "url": "assets/js/166.a6785474.js",
    "revision": "25d8c4e8daf5b3d49f278ad78169cc71"
  },
  {
    "url": "assets/js/167.429b4115.js",
    "revision": "5a973d24a65b2f0492cc40e7e9a7e7f1"
  },
  {
    "url": "assets/js/168.ff971372.js",
    "revision": "0ae28449d5ecf13faedde6cd858a81cc"
  },
  {
    "url": "assets/js/169.827ecaff.js",
    "revision": "090e5fb068ff1c792a844575142d469b"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.3a5117ca.js",
    "revision": "42997acaa2f2c0e6aa3a832e4de210ad"
  },
  {
    "url": "assets/js/171.9f62f379.js",
    "revision": "622b3027b1aa5b23fb4dc059b4d12b89"
  },
  {
    "url": "assets/js/172.55df199d.js",
    "revision": "2de47a8a4708d8dc2b20111866fba50f"
  },
  {
    "url": "assets/js/173.e3ca3f0d.js",
    "revision": "4d529323915bcf1c2c0680d48cca2b3d"
  },
  {
    "url": "assets/js/174.ad1c434e.js",
    "revision": "01b1281be729c5dbce4a2aacc2812578"
  },
  {
    "url": "assets/js/175.f112b078.js",
    "revision": "5b851aba2fb073ad19fbf2144d2927cd"
  },
  {
    "url": "assets/js/176.ffb874b0.js",
    "revision": "b6719e7efb10828e3eae8c1b1a806322"
  },
  {
    "url": "assets/js/177.27436e53.js",
    "revision": "d14a604217cd1c768337890e134072f7"
  },
  {
    "url": "assets/js/178.31662aa4.js",
    "revision": "dcbad9445836bd19a191a6901399e92a"
  },
  {
    "url": "assets/js/179.55e0a8f6.js",
    "revision": "894f8a2dae5ecb64ef6e8b448b7baba4"
  },
  {
    "url": "assets/js/18.6c0e406b.js",
    "revision": "8bd6af748fc7eb1a82db44e5b1af2cec"
  },
  {
    "url": "assets/js/180.1d92e5a6.js",
    "revision": "966908dccf2468f24d986ed6709cdc67"
  },
  {
    "url": "assets/js/181.a0a543e2.js",
    "revision": "220a6c9e25d7e2cd03d253824e20a056"
  },
  {
    "url": "assets/js/182.97548ab3.js",
    "revision": "5d20170f94f820c560ce994da07ce709"
  },
  {
    "url": "assets/js/183.c5705eaa.js",
    "revision": "245a670728b27f93877f5cac43740311"
  },
  {
    "url": "assets/js/184.6ba7b381.js",
    "revision": "36a95e8675c0aefd7c9ff59b1c034dab"
  },
  {
    "url": "assets/js/185.eea8daa1.js",
    "revision": "08826e59dfdffb82668bc465ae2ebc1d"
  },
  {
    "url": "assets/js/186.abdc87ea.js",
    "revision": "f8c42fa76f283e5e6d92735b2e9839af"
  },
  {
    "url": "assets/js/187.d6ee6763.js",
    "revision": "cc245cd3f4a29b95e1abef335e5fa715"
  },
  {
    "url": "assets/js/188.4ff0be20.js",
    "revision": "ad6912b3baa43dafabb07a87aed0ff7c"
  },
  {
    "url": "assets/js/189.0c3120d1.js",
    "revision": "4ca3170fccc1ea0cb79ec9dbb05001de"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.37b58349.js",
    "revision": "eb52b35e21d128f85df7eb8ab55ee1e0"
  },
  {
    "url": "assets/js/191.89444f08.js",
    "revision": "5e9eb2e5d18903cf1c7eae9a73be9576"
  },
  {
    "url": "assets/js/192.8947b9cd.js",
    "revision": "d72b3db243ebc2c2f9cf9c8affe0dcc0"
  },
  {
    "url": "assets/js/193.c995c4d1.js",
    "revision": "b744aff35247ec21d36bc3ce6697fd11"
  },
  {
    "url": "assets/js/194.e6c0fc99.js",
    "revision": "7502d413724271dcce5e45f3a07f2d7d"
  },
  {
    "url": "assets/js/195.4e686c9a.js",
    "revision": "d54bc40e54acc0d8678e54e17e0e2d11"
  },
  {
    "url": "assets/js/196.aa36d74f.js",
    "revision": "7d4cf0dbb9fe53b552060aa2c7261c57"
  },
  {
    "url": "assets/js/197.ccb45ac3.js",
    "revision": "60c8db55b1e274ab1f79ec1bc7cb0d84"
  },
  {
    "url": "assets/js/198.715462b3.js",
    "revision": "3656a393b4d5f9f3232d7435c1e30637"
  },
  {
    "url": "assets/js/199.c3758c98.js",
    "revision": "850780cf81f286882de85389fc3457ca"
  },
  {
    "url": "assets/js/2.f6140c89.js",
    "revision": "545c298639f03711be7877a4884063b3"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.9a80a648.js",
    "revision": "8235a57f97e60117ae70fd8fed14b967"
  },
  {
    "url": "assets/js/201.bc55336c.js",
    "revision": "f6c6d9255f5342a079b76b3414149e45"
  },
  {
    "url": "assets/js/202.f80d22a8.js",
    "revision": "144c301dad49c73b89452bfc6ed25c53"
  },
  {
    "url": "assets/js/203.e9a4bc50.js",
    "revision": "4afdd9c7759bba42194dd13aa2e0edbb"
  },
  {
    "url": "assets/js/204.94a00bf2.js",
    "revision": "70495ec5da621e1a88316eafabb5b906"
  },
  {
    "url": "assets/js/205.f6c42c0c.js",
    "revision": "5be753c0d64d87b650f9764e42e2a556"
  },
  {
    "url": "assets/js/206.4597a4cc.js",
    "revision": "09285e4167a2b253f82dd9e6229f731e"
  },
  {
    "url": "assets/js/207.4a8debf5.js",
    "revision": "5d8c21680ae2ba002770f7d7cf418b35"
  },
  {
    "url": "assets/js/208.7d80c584.js",
    "revision": "e4b6c06a718a7c9da6d34d589ae12b1c"
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
    "url": "assets/js/23.086f54d5.js",
    "revision": "f97be441322eae661d7ff383e25fd372"
  },
  {
    "url": "assets/js/24.71c8156e.js",
    "revision": "f48070543d853e5d22e81ded7ef472bd"
  },
  {
    "url": "assets/js/25.decfca49.js",
    "revision": "d9b4857dd2a34748caadcf8a4f227fad"
  },
  {
    "url": "assets/js/26.1f4c102c.js",
    "revision": "eea895c0a6e228da6af4f936753ac799"
  },
  {
    "url": "assets/js/27.607e82cd.js",
    "revision": "b2fdeb7f57b137ad6e512a91fd88b556"
  },
  {
    "url": "assets/js/28.bc3260ea.js",
    "revision": "43237cdfef96395162f49ca57bb4a5e9"
  },
  {
    "url": "assets/js/29.b573e500.js",
    "revision": "66c59fb3893de5348725ada873a61da9"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.8cdd0deb.js",
    "revision": "a69b7decdd7442e3256184aa3808bffa"
  },
  {
    "url": "assets/js/31.b984a4db.js",
    "revision": "948647619663c49decf36aecc36c956e"
  },
  {
    "url": "assets/js/32.84cc5525.js",
    "revision": "eb6c58fcd256ff83f11decdf2d2d3b1a"
  },
  {
    "url": "assets/js/33.e0d94535.js",
    "revision": "daafae9860be306b55ed5e41fb4e4961"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.2e3262cd.js",
    "revision": "5bac3ebaa657a65d9d162f6ca1d8e11c"
  },
  {
    "url": "assets/js/36.05d08f3d.js",
    "revision": "5d69e91f0e4d436d52495d39031ae561"
  },
  {
    "url": "assets/js/37.fbba27a4.js",
    "revision": "2a15977738f2af6b4761f099f72536ac"
  },
  {
    "url": "assets/js/38.3e52d466.js",
    "revision": "81a8bbf7807a824dbe6c1a3736982ae6"
  },
  {
    "url": "assets/js/39.93c7bc70.js",
    "revision": "406d373461c585ec8109c53e6ab03757"
  },
  {
    "url": "assets/js/4.59fc6872.js",
    "revision": "99f4420391c28e81f0421158f69f8cf8"
  },
  {
    "url": "assets/js/40.a06039ee.js",
    "revision": "6bee71d16592aa242ec069cda8d1f997"
  },
  {
    "url": "assets/js/41.95e6a651.js",
    "revision": "40ec00db14a23cd4af30010de862174e"
  },
  {
    "url": "assets/js/42.2e79c7d0.js",
    "revision": "38fbd0d1388703653d6e989b670755b0"
  },
  {
    "url": "assets/js/43.8abd6b4a.js",
    "revision": "170f09fd39b620c1e169a6d7b56e9b33"
  },
  {
    "url": "assets/js/44.0f455563.js",
    "revision": "a0842a8a6903a04e057afb6bc18baf13"
  },
  {
    "url": "assets/js/45.4dcbda1e.js",
    "revision": "66b1a65601e0fdf5de879aa87d19db09"
  },
  {
    "url": "assets/js/46.4556ba1e.js",
    "revision": "38a2bbfeb89d706deb21e1aeca51cee3"
  },
  {
    "url": "assets/js/47.3204689d.js",
    "revision": "0a4ff96eafc16a243e2c5d671ae03c7a"
  },
  {
    "url": "assets/js/48.2b19d5ac.js",
    "revision": "a4494eeb902db7b278e3d2ae95ef0c2d"
  },
  {
    "url": "assets/js/49.97ee5916.js",
    "revision": "eef1c10c161d67fe32d24cae12aa050b"
  },
  {
    "url": "assets/js/5.ef1926b9.js",
    "revision": "9b080f84114dc3bc552f574a78fdc52d"
  },
  {
    "url": "assets/js/50.8bab96c6.js",
    "revision": "54448b4b0e5b9fd365f0ad7694ca6582"
  },
  {
    "url": "assets/js/51.b359726f.js",
    "revision": "62ea9f821fc521e0a7a8d7ec0911476b"
  },
  {
    "url": "assets/js/52.530e1364.js",
    "revision": "fbc67d6b60c09ac24ddf2dfd85767553"
  },
  {
    "url": "assets/js/53.a6a1f6f6.js",
    "revision": "70a010249b005fe69543859155b1fefd"
  },
  {
    "url": "assets/js/54.4e3522c7.js",
    "revision": "e8eb8c9d142e8e91f74cd151b6c23488"
  },
  {
    "url": "assets/js/55.04977644.js",
    "revision": "95a179d4b7d85c6aea7532d5742ae3ed"
  },
  {
    "url": "assets/js/56.207ed846.js",
    "revision": "8665feb418700927e5d9f42b3623327c"
  },
  {
    "url": "assets/js/57.5fca0c9c.js",
    "revision": "eb9a3a13b2d41883e8cdf0638546bc60"
  },
  {
    "url": "assets/js/58.0e6aeef4.js",
    "revision": "9402cd78ff2897f8764267b4a63aa248"
  },
  {
    "url": "assets/js/59.1f8b636e.js",
    "revision": "5b833f136bf66a48ce43697b2021b34c"
  },
  {
    "url": "assets/js/60.954dff78.js",
    "revision": "14bc0ba83a17c13f9c55f4081e6c8b6a"
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
    "url": "assets/js/63.a5a98586.js",
    "revision": "1afdb54dd342feb795268f41012a4b4f"
  },
  {
    "url": "assets/js/64.b56f8141.js",
    "revision": "9a8b98c342fcb4f91eea664f18f5f52a"
  },
  {
    "url": "assets/js/65.c72d5283.js",
    "revision": "f409200c27879ba9850c0810f46fac94"
  },
  {
    "url": "assets/js/66.acd4a62a.js",
    "revision": "25e5747b5cee54e3ac4dee2f3b118327"
  },
  {
    "url": "assets/js/67.a847601a.js",
    "revision": "a47e25939974949c6db19e39da20123a"
  },
  {
    "url": "assets/js/68.a395e9e3.js",
    "revision": "adf741065f2177ea33426e4fb7370007"
  },
  {
    "url": "assets/js/69.3d8d724e.js",
    "revision": "c00e528ee1faaee2e807a472f0ee938f"
  },
  {
    "url": "assets/js/70.2fb1db62.js",
    "revision": "f7b215c697b89867a0af6629c8c2d9e7"
  },
  {
    "url": "assets/js/71.8056347e.js",
    "revision": "6fb210dcb541e5d28518be72bc7f3c36"
  },
  {
    "url": "assets/js/72.de7a8e69.js",
    "revision": "69444cfc020369493c2303a28b3ac9be"
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
    "url": "assets/js/76.7c4f998d.js",
    "revision": "55d1bfff64e0dc7484a618d8435791d5"
  },
  {
    "url": "assets/js/77.80155364.js",
    "revision": "dced7392011b466b8c9c81c432f3e435"
  },
  {
    "url": "assets/js/78.57d89793.js",
    "revision": "4e471fcbd6b35b7b4aa5410e6608bfd7"
  },
  {
    "url": "assets/js/79.b515d01f.js",
    "revision": "24d89f53391c52270432d628097413e8"
  },
  {
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.2b3edbde.js",
    "revision": "9e60963c6e23fbb083fcadfe465c8c37"
  },
  {
    "url": "assets/js/81.33ca6c07.js",
    "revision": "02abae5c544352fb423c5e4178145790"
  },
  {
    "url": "assets/js/82.ffa2e776.js",
    "revision": "ef3d9cf66dc3e09451a7c536df4305fd"
  },
  {
    "url": "assets/js/83.9964fad3.js",
    "revision": "f981adb81e1cc7feff6df677583bacc5"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
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
    "url": "assets/js/87.74247137.js",
    "revision": "32cd2423a4ff8b5183c0b92117d9a762"
  },
  {
    "url": "assets/js/88.c89c10c3.js",
    "revision": "7ddf14d07222e5cd19add8f50b3106d6"
  },
  {
    "url": "assets/js/89.08ff3314.js",
    "revision": "1e72010dead59ec69c593ef762773f90"
  },
  {
    "url": "assets/js/9.81068a5e.js",
    "revision": "8a74f721883314420a73dcc535073d2f"
  },
  {
    "url": "assets/js/90.9bb80dd6.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.0687a31e.js",
    "revision": "12fc3ab0c5a40346ac521a9d2936ac75"
  },
  {
    "url": "assets/js/92.081cf6c9.js",
    "revision": "493991f652fead8b9ba7ca9e1a136b47"
  },
  {
    "url": "assets/js/93.0b8725e6.js",
    "revision": "40d845d3f11af41cd948d78efbc94f2c"
  },
  {
    "url": "assets/js/94.5d69653f.js",
    "revision": "b28383bddaea3d0104e8b419aaf23e35"
  },
  {
    "url": "assets/js/95.0cdbfaa8.js",
    "revision": "0ce4405ac17f172c9a40611ebe1d15a9"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.5b3c2ac0.js",
    "revision": "946da053416d7422e2fcf5c252708b46"
  },
  {
    "url": "assets/js/98.0e001acf.js",
    "revision": "78576eb9f1d9a98bb13623b19e5104b1"
  },
  {
    "url": "assets/js/99.bf0fff42.js",
    "revision": "dda15c098a899fb06e23dc18abc1714c"
  },
  {
    "url": "assets/js/app.60d81d82.js",
    "revision": "ea4e941d987b5f05c95b7ccbd10bdf30"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "618581fda4aabea5fd0b47b38b59c484"
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
