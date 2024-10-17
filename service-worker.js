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
    "revision": "9717bc2b3db92c89dbeaaf576152420e"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "7d62043d601e042d14cb59c7ae1b8bfe"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "94390ded5e0bacc6c6e1865bf5f347c9"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "9f4dbb789787db0652af6d2466fc7e82"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "58a03d0ec85cdc1c18fee597b205fada"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "3a0a5d6409e4c0f8e7cd562b084661ff"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "90f9b8fc2e0bd888fbd07e38e6489fb2"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4774b6d7bf9c8872987ea29b5b51ad03"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "894141129008e6507019f0e551fded86"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "7bcaa644e51bd970005cddb7411cb818"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "312968c5af9a5c6f251fd4afbbf74d22"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b671b6b4fe3103024bd70a87bda5b087"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "521410abe0a06d80d965e6975ec6e5cf"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "58bf4f0be7fb292639df1b0682a8e16d"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "2268acd540f3e770cd9c5a48fbf46bc9"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "784df12480b621986c51a13ab4120f66"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "abc4a299f757b537f9801bbee77ec0e6"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "5781c49c33db98e6807bbc52ed03eb3a"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "ca6d9de67f6fffce50ffe51fcf7b3ea2"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "c3fa787993207abbdfa4052721cd7536"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "0ed8c351e655e8e205ddd061a0a37283"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "d1faa2d87da69619a8d951de593d4aad"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "c0a914e63835cc42914cdbbc4d0d613d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "eb0a994fa0217895d8c83449738eff32"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "5e666d02bd0d095d1019f4684f64ac5b"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "806c350a466b28947df9d2576ae8ac4d"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "7ebc4f88d3723c9e741ba5442ac7bb8b"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "7f79a51eaec1af95f58ccc78bdaa8509"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c5aa005aa670d90a9c066125cd08d20e"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ede344675244614a10f9d8e38eb44e1e"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "d74c4482fe07d56aa5653e9936b9205d"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "cfadb4abb0f9303a31c780bb7f701fc7"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "6e29990ef4b4bd086e046f660378804a"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "bb5d6564b259a86934af5200038c2676"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a7a8277a3c1e6a6fd5dd856f1fcc4386"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "634693038d3707369b65fa66a47f559a"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "637c761cb4eecdf8b742994534dcc45c"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "67cdb4474e73c862dbb983a824c339ee"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "f6bba66636de5cdd57ecd22c38c35c36"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "90b620c99e240de0b5153bfe7c73abbd"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "e882538c10901e7c796e0ab9f77873e0"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "c37b5d2a7cc23f4c017f57ebd3ef542b"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a8c4b2b117a5649d9a4214a51853445f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "309d700d863d00472d2fe564fc9c8ce1"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "35dcc7348cfc115933e5525f506512bb"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "71d7da2d3def7f027bba8f59c5f9eb50"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "6b2b1b56ce5e48ccb7330e5d9f11ceef"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "8fc83243c7c90de66502c68bc341a692"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "ade9eedb032a88bd0d33f8fa342ef87d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "f16ee3ff2a01b0b4dad4b4efc6c729e3"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "29069c45e3e415b3faa233b09ce41c51"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ba0368fbbbfc10a17fc8b5d9d49a7a89"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "302c440e527f584b8b572d07d27a0cbb"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0d5d3e87eeec07ca9c448c37c073302a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "eb6b1ed704ca1696c429f541a7d8a541"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "92e5c26aa64fc3025219203f3598a518"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "99fcc696fd332bbf712e7c3d61fa855a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "22f4b2702a35d4c1fea433e2b9212650"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "45c5387d6c952d892c8d820b60f118a6"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f7b033917c4aa0e7f9ce0dcf5c77ebcf"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "7fe85ee0041c5fd3840947c8862af2d9"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "41edd32bfb183ef4975d8562fa5f09cd"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "91f32cf3cb88f0c457382ebc29a7ecde"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a4d504750af371bb583dea03808a6d6f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "153e9e3703180bf33d44256357d7878d"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "fbadce33a239d7d4131deb13c06c771c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "91aaf786848d27b7274a397466f046ef"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7d253e81b5eb0d0549132df3ca2e25f3"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "e159de945106594d6da2a787cb3819b6"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "30d88bd80c66b0db692c159acd2bd3ca"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f3cec262ad8305440023b87e2c9ded31"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "11aa56087b8ffd5b625ceda2749e1832"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8f570249982579dcce3ce74bf7ae4efd"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "e2c81fa6aecdbb797c48520a27aed888"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "104e595a99c64701c4840d35b8b65448"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "624c898445c0e72ce061c27e4fde3fc3"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "97095ef4e6560d501288fd6be461e5f0"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "d495dcf042f558a6b7002e58648cfcde"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9e844e17440ef85e096e3c94a5903b87"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "066ae208e0c9eb149ed1eb13da0d74bc"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "206a2ac289b13de94b093844e2d023c6"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6e2d743dee2b6ad01ba253dcd856fd37"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a27f7348631b9b4e739d243936abc7fa"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "0e9b7d4cf7b03c26c164584f574c2e4d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "0c78f4d2bc355031fead01ec379b0c70"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5efc878e565dd92dca8ded27674246f3"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "71d99f83b5d7c20d608de145dda9e739"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "ecbd98f183e28c78fbac410d18381462"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "11b06b745013c760d6edc748d1a650b0"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "fbd0bf751a61ce94fb2beb75b9aacff4"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "9fef92c224802b6e2e7a580d925fd1f0"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f3121207e767f83ddd6cf274a6861902"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "2098d4b7720946a3d5fd185bfd31a98e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a3a3e39416930fc7e30dd6f0fecd26fd"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "659dfad9284e1796fe6584e5c30d77ab"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "c3f72f6ec8bdc5f51ff6a6c7fea66dbd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d2fcaa344c4f811d1508debfaa3b5eea"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "487a55e23723d577cd4f597db59d9be9"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "f49346dd6a23b831e98c87ac14610725"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5169413286457f30ae734eec19322a12"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "7186e8c1839d67b959edd42ce5a91980"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6fb40df0fe33ed994dcbc7290780f6ee"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "da21081654e804f6d87b9bfdb900751f"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "3c35423729c50a2fbe5460f2763fb940"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "3a7f4ee29776249c16e7d18d026a867a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "52c5cd83040959798fcc6e14e8770954"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "a9631bb90b56a329e731df75beaed47c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "644e63dfd33524024fba0f060e137b70"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "334cce1791e560838ea7c0da2792953e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "7e899e3c2c1956047f3ef011d2d18d65"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "2535aacea4192f202cd5e9f1a3215595"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "8acf11c485e295fec8dd81eec832f608"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "503d338eb53a98abb6d97c26f5af342a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "b32b3cb71c5dd8545bb46b8ce13edc44"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "d441d48057c02b3e6e321aed41d03386"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "8cbe1213b687c9593910e0d6113ffac3"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "5d7d4dfa4d0a783e8fc43a6f238baea8"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "be872af334317fa02314206a49842084"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "0adeb6b9a200c6950fc2fa62ad02ea29"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d00e9e0b5ef2633d33699409d35dc151"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "503bfa6c2b57c9676871c3c454c83821"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "871ec641b9f5fd32a4866508411ca2ea"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "8b6212801e5e9e5bfcf9005b8cf54a3c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "d181101954d2751f84a668103836d617"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "52c8d30807365fe8e3d517bf3e09bd11"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "044fa3e9e0bc0c0da256f1ccd30e3a50"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "89f5475b1accd3c77ce0711497e49c3f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "4d2b2373890e7296ca21e6ae2e145484"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "61527dba75ccd4a238a6ca8918aebbc7"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "00511e5ddf8db851138e5586e0ec7526"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "69387918677d87c1c352143d9928179a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "f97cb3443213b78e3ba6123d9bf52ea1"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "1e8a5417e01cd71839713438a92d2a40"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "eb27848192b105f52e21e32886bb11a7"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "87f0f5922e8f3becfab3baa0725cf8b5"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "b7177eff80474be150b52bed5ad4fa25"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "b86fc5bb7ea713b6b66a2ccfcbbdb948"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "b52b4cc8f6dd5b7042f12d77d13f4574"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "bccf68c024d87bd6f4e0b9a40e84121d"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "47be9b06535b3b71bfbd925914defae0"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "eebcb0d3237cb2a69971dba028bc82a4"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "15a7d6a84c95fcb372d6283f5a85b6db"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "42bda62a37f41b44a1dbee678d9342a4"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "383022048fed7a5026afaa30f90e0621"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "d30361b24d32b349d87d143b021e2ec4"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "322ae3549397fac274faf226ebf18d31"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "0f568583b002df27a4e2910430dda1b1"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "e0862a93f0ebfe6cd7619dca9472acbb"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "296fa581fd43cf7c53f675462ce8a609"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "ebceea25332c3dc331518434346b77df"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "7fefe1883913d74c9a5ee0b272585a7c"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "332300fe4756a45a365405c2d1774441"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "39e43b51e5fd0f9e01efa9561ab94121"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "39b929ba6fa8ea01c89f2c863331d263"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "0b919ee73bcea351d4f4a1b4f0fd1736"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "4dc06357c6c253c5d7e24b7b8ad68173"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a9a315765a1ded80503a0e71ab61c8f4"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "35f86034287677f0d5ed826a0221cb61"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "a5cce00f93a3c8601eb0d4692a62ed80"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "af64641d8596901353fb1b453ccc26fe"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "1e158bec198f1b0bc1e675069b4e5e83"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "232048f8b9a8cfff9beac146a60729c7"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "faa352a00e0fbe455c893d027bc63634"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "dc5f3ae7adec330316c4c5002762bc9e"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "762f1a11deebe0d653b0b012b305c903"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "8b0771d4e21cc06b0e5f804b82f4ac69"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "c3a76275f2e9944a925fd5fd370e545f"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "03132ba1ed6210c02726ca6370fb03bb"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "9e3708dd175ee0c9d519198609cc87d8"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "a795c77079a41e1d40d7444c44f3936e"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "eba1af2293d118d04a73df44938e7779"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "c4b29e3cd0749a2c87d3ae0cb5b249db"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "94e1a3f0db5fbc770d9e9da9c9b8439e"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "42e7e54ef69cf3c72888385c81d40b56"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "82ec51f3223eab16138f71ec08028408"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "43bc757cf19c58c6d0540b1b2f2084e8"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "f2d90f254d73e3be071a6f5ac991a44c"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "9cd6390be925040344c5d7e444ee2073"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "ea16349b36fd33359ca7468750d8b31c"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "a14561ced0cb464e52acc77a9f6eaff1"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "276383f95b2226192b0fc5e804619e0d"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "74557dd8ad35723a8035a129ffa3e7b6"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "7ae4a6cdaf19f71d37211809afc75300"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "35b526904c3e2dd02e46421f03a28fc4"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "9f3f37c31ba91ae1425f7e782de4f622"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "121a933b66c811a2ae99bba0a22e2bc6"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "ed65f516c0f9451667a7dd41e5e92319"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "9d89ef93cd20a72dd52c3c706dd4da4b"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "adab7cf99f47699ceb5fe5a5c397b402"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "1f07f89e39dcd28961e40143473a3fb6"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7e5f487c3b7b451aa96379dba16324d4"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "525e014f887f82b6290604dd6b456bd3"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "87679391a1b1973002c5ce9646a15739"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "aad46e425dda4f6994fd790b07fdeb28"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "67994712644960c4c2d43055a7359fea"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "23d86dab7fd68a56c88efbd64870de11"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "5dd2aafe9564231d0eff1378f8a2f9c7"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "4b7ae4428958b6da529b89962ca8551a"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "5a0f91aeb61b1f54904b1da7aec5be33"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "32bbf6182108493cdae5b304272f6b52"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "828c68448bd13738b21365362c017c5b"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "ddcea124c0bb515f5d5b749ba683dea9"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "db17faf32b7871d3a4a87e51afd1d3cf"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "1391f720d8b68065b32ae76a4a35f8ca"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "cd22f29412309ece69ba38bf0e698f40"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "1d7cdcaab47819ec539d75bea7333b40"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "a4770abcb37c944733ec15f7a88df7e6"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "c969a3e4b29809796186e9527183e2ca"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "6081602972fdf010b8c99edb7779729f"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "432cf995486be29b6bc8edf1f1a33adf"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "29df714c8a1ca1b1a0b79b32fd565038"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "b3aa4c38d3151d0c9af84defdb38fdb2"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "66a8eaac7bae0a645e1f1c3a8e882e68"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "dc65726cf07d2fd3c258400aebabd75e"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "2950bd462b29ec84b304de998e46e71f"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "8826b67d36d2eef8867f056b2f5fa306"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "a799862f4b5eb024fdbaae9632d6156b"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "7dc73062c3b592579e71bb343c6ea4d3"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "eafe4c0c982b01a4df04b2ee481d113a"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "557ef3c05831058a55b32b45e711366d"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "ccbf1ea1019d7f234ce758e415e5aefd"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "03da9d07b6afa41a654902b9713347ad"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "c1fffd432472d59f61064ca35a630211"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "92c7200cdedf55feb2164a31114ab54e"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "dd105296c44e078be0d8d51161c5ca39"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "915aa156a7bb18f9b7d3d3090773aae1"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "2cb49e9d8cd0327c6ae3e87802cd8476"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "6287d59ea52366444d4e7e1e59e45c79"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "ac981e52814d700e7d730c57833586aa"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "86e89935b9619a3501085e95f9415449"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "b1fc32d11cfbfaefa07070bf99e19681"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "2841324ff3cee396c27417f227023b2e"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "d203bdf67643a7e846fb92952a5ab84d"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "d3c64db02e28815f16d5d9817dc50d5c"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "31bcc6afb3713acbbc710aef77c6a409"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "73d1f65b3dada3b730b60212b7ea89c4"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "a78fd2e9bef67cb0a80ca522ca6e4844"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "da9efaebc894f00ce528300c2acacbad"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "813041fb766201d65a596d21e6a166a6"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a6e7885c8b3d596d8da824f047815a86"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "63c2f3a32b40a105c55128511b182d8f"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "cd8dd47eefb280361e41c28d54673b05"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "5c4a055874b4526198548e5f65a1a5f4"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "28b7999bafdb133c8f82f360f742ac78"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "dcb0da21128f96876a85177dbad7db7a"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "5c7190cef9bd314602b1871603693be1"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "b1d16bf7c3bd368e658dd8b85e81349e"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "b4ac530ac584558c897804d6f1d4df86"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "8e3cf88989a21638491d2f4faafe5764"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "b15fd0fad8b31628372b03283f9bff67"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "d1381d4c5195f6316e20b807b90d18cf"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "a4719b59b8bcfbce937a6bfd415dafbb"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "7a8384d6aca792265b4121ebefa076aa"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "01b7fb4b843717b8d16f011acc72955b"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "74240b168f4966349da55f58d11c426e"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "392c7ad931c85fb505be2c5e3152cc76"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "5a63aae38fbd525647132ef49c9e8f1d"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "13845c6bd83d24cbdb8b6fc51f94c035"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "f4251a4e93f2af996db4837a93a2ba12"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "31958308d737aa6794325a0e2fd09acc"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "bd49d70709df1924332e117a708f2563"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "52ec3cb72913acd0e10319569b8ff528"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "431c147ccabbf21e443f4263d486a422"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "4c5ec72ad4824c88c69dd0f6a1e6e1c1"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "fc23da6b0e534efd1d4f7efc86fab122"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "16e7e120f01e446d2561d769aaeffcf5"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "e67b25e04033510c48fb3351596dbd8a"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "c19893688e1c99b99e01ea64e0c7e6f0"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "1b1d1a3a32306f7dbeffd2bf80a21756"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "0c2206d354208dbd25c3879efa8d68a8"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "d172a2605a5d47264042132b9a202f75"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "e96370bdd6107830090261311b674ea9"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "c5f40a7d91018b1ea63081adbe8605b1"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "38f5aad8b56664352f6a389bc7d623de"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "b19d47ca2f0921ae8bb47460b81ffda2"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "da01f54d86555d9754ac6f209407aed4"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "f823927e519e45edd40235b5c56c89d5"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "b3a91ca0a9b9c28edda8eddd8a7951b9"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "9ce4a549d7d5323f8d07fa775613f21e"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "a830f2ec7ba302bdf763de5530dd70e2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "76801d2a178701b66118e13579dde3d3"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "b68818afa53e0b2483d86f50d70d42b9"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "789f9d33bf531a83d3120a727250d674"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "926bccdcc00702d8286cda8bfcb53f3b"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "addc5b53339e4c98a68d1f594a5f2194"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a4608c7a63a6042cde1fa4d5bfa9dd5b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "75090e74e7d6ba5fda3bba5f32f41ee2"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "1e57cf8809d11cfe97f32f35c43b71c0"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f6a5b63b37a6312446920ab926e3f0d2"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "5e2a349b365077f1acc7d9653fe2bc79"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "b7596564f811c654db8c5b4a0f64199b"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "7ad441000a7e5ca61a27bc8519b80b86"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "d039d6757c861e45fbc6f5078acdf8bd"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "383ad67f90ea1e4a4f474c91ad267f9f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "39e31ad35b5bed8c68667cad8b0505ff"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "60508ec982af5fe8e84696d28e4ebabe"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "48779d33309bb07637d46afadc431248"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c379b963dafd0ed7251a87bfa0194b6a"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "de1932b162655e0714f2c6e078f5facf"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a5191a330cec3268e7b9dc1b0dad3567"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "566bae9031e271ddb927b77a3ff405ef"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3331b4e988dadd2ef4fb70f4aa8054cd"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "bdb063eeb09175a0f3eaa0f2a0ed32e1"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "e9c74a74f5fca76fc8e37926a7fb59ea"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "948d02563fa7da1570fbb0a830e9705f"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "515dd70a92021e1884a0d6da3fcfa1f7"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "55201b72015541d690788f50943f1b6b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "42df9136b716547e55b5a5649b11e282"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "850b02a169c0e221cc11e02b0a0c25d6"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "98f7eb0eace9d75619a8f659a24e8f17"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "ec80bc80626d13db054beea17595296f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "95b1be961fcce149f9d45c803020ea25"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "ab989c3b72e329627c779243ce848814"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "13cd13a202d4cc3f36197111edf91e11"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "00220df32aa3c4cf38e70591481065af"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "65d7f05debfc82262a02f3d3075a251d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "55f4268a44b7a7773f0e720832b3572a"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "af32ed75b6a6d13eab23ba77daca15a4"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "be7fdf5bc08eadb613c4417d258e6eae"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "402528dd04cec695a941685664f9ac2f"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "3ad66b75f8376e18ae2acc0174df5964"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "bfdcf5507ddcd74acb4c5187d1203680"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "da67bc87552de0255ed71e5a61e26d97"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "03fe1fcc4efeac913f340668430daa2d"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c28c7d2a23926690085c51b4f0c00190"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "1b14b8f055f5f15cc3ce2054541042dc"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "00b89d1cdcd1b63236c49592954d77c2"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "87d59a67a1d896b348ff7c1ad06acc52"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "a0800543aded9a913e51ec588eb2021b"
  },
  {
    "url": "404.html",
    "revision": "ee9d839b2455a7a75f72ffc8a7c3481d"
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
    "url": "assets/js/1.72f1e422.js",
    "revision": "bc8155637c6dc68a5277da9c1cdaec33"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.98fac64b.js",
    "revision": "40607203702bb1b83a3ec3b89a850074"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.c16d7455.js",
    "revision": "7894c70152da8d15634eb1e2ed043986"
  },
  {
    "url": "assets/js/103.7d749b9e.js",
    "revision": "b88ce408e6d4d701878cffabffbce678"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.ab89db27.js",
    "revision": "2ae3a73217d8921cdae2cb9e98d5cfbc"
  },
  {
    "url": "assets/js/106.f28352fe.js",
    "revision": "9ff34d200fed8290710cf7ceb165a1b3"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.4fce3fa3.js",
    "revision": "f50251b52d394643fee5b871631014d8"
  },
  {
    "url": "assets/js/11.0627d0e6.js",
    "revision": "b315ec642b4e6f0d74640f34df313087"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.754a2cd9.js",
    "revision": "434e2180cb02024048385763e301459d"
  },
  {
    "url": "assets/js/112.7206e7ae.js",
    "revision": "b441fdd1e75f906d22460cb3e492622e"
  },
  {
    "url": "assets/js/113.f9961dab.js",
    "revision": "04c5e8dd1ce800109ad0e3b6d4349345"
  },
  {
    "url": "assets/js/114.b635a4f9.js",
    "revision": "6fd6f04a391ef1213fd1eb8fc26b947c"
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
    "url": "assets/js/118.11e889cb.js",
    "revision": "57dd8da05974223d6d52560f02b04668"
  },
  {
    "url": "assets/js/119.0d073662.js",
    "revision": "1a5c70bb9e0177e3a3a30c02bd749ba2"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.f7957dcf.js",
    "revision": "f7c92f53340e4261dbc1e3574f872a5a"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
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
    "url": "assets/js/124.90f11753.js",
    "revision": "ef261c3cc651a66a1b7fabe010dba456"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
  },
  {
    "url": "assets/js/126.e4d505fc.js",
    "revision": "1a454fc497ac6bc637b25fa1a5427d09"
  },
  {
    "url": "assets/js/127.da79fd04.js",
    "revision": "240d9429c969497905ff170ebeb7d41d"
  },
  {
    "url": "assets/js/128.7dd49865.js",
    "revision": "e9b94444c834ecbc8026da6a3044f316"
  },
  {
    "url": "assets/js/129.f952fe85.js",
    "revision": "78886b841fd01e832825f6c1e9cd431a"
  },
  {
    "url": "assets/js/13.4a774b3a.js",
    "revision": "4872c9bb194969c98b9627ff178495c1"
  },
  {
    "url": "assets/js/130.a71466e4.js",
    "revision": "12e8c245881b0b8f80477443e9fd5089"
  },
  {
    "url": "assets/js/131.f8660604.js",
    "revision": "61c889ad40bf5bb3c1d31644ed711afa"
  },
  {
    "url": "assets/js/132.1eead4f1.js",
    "revision": "78c9461a3ba9478820712e2a06acf054"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
  },
  {
    "url": "assets/js/134.afed9891.js",
    "revision": "3eaf2d1f7f4b167e7991da1d7904eaf5"
  },
  {
    "url": "assets/js/135.3a6094ab.js",
    "revision": "8c2ae43bae873db764f2fd8ad64d79fc"
  },
  {
    "url": "assets/js/136.9fcb8de7.js",
    "revision": "b91e1cb64083738535b61f23596bcad5"
  },
  {
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.1a385881.js",
    "revision": "7c996f09f7290715b4f1490f29f810c9"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.831a2868.js",
    "revision": "0a369431dddd2cdccfd5fac1649417a1"
  },
  {
    "url": "assets/js/141.891c9c83.js",
    "revision": "1763869bf8045eddd21cea6618e50d16"
  },
  {
    "url": "assets/js/142.61201fd8.js",
    "revision": "816b8c17886c6868617f6eaceffb3d3c"
  },
  {
    "url": "assets/js/143.5f402452.js",
    "revision": "a4579bbc26daeb9768a223e03fe16508"
  },
  {
    "url": "assets/js/144.b1d46a34.js",
    "revision": "955a378b09abfffa2e00a90c63ccf176"
  },
  {
    "url": "assets/js/145.8b7b5c70.js",
    "revision": "6efcd41a01b71e69578819aa11cf7561"
  },
  {
    "url": "assets/js/146.7a2b5871.js",
    "revision": "4265cd260bc5f86b3a3ec0cbce502d31"
  },
  {
    "url": "assets/js/147.837ed09c.js",
    "revision": "35bcc49c4c297bfbe6b76aeedd598253"
  },
  {
    "url": "assets/js/148.9d1756dc.js",
    "revision": "d4284fc8d1dfcd92f416a47396a7ab12"
  },
  {
    "url": "assets/js/149.796398fa.js",
    "revision": "9d7562eea55fea1d12ef5f51bfd0d967"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.d58ad5d4.js",
    "revision": "675638fa0908f311b7eaa2c8c76e6512"
  },
  {
    "url": "assets/js/151.9af42afd.js",
    "revision": "7821937c9342410cbff49a2649c59ebb"
  },
  {
    "url": "assets/js/152.0562421e.js",
    "revision": "7f9184b107c8db1c3a10307a63d2f775"
  },
  {
    "url": "assets/js/153.8f90dee0.js",
    "revision": "8506e6446e4d68ee2493ba0805182b9e"
  },
  {
    "url": "assets/js/154.73aa2e41.js",
    "revision": "db528ab0330f497c1dc307b5f620329a"
  },
  {
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.0866a124.js",
    "revision": "094c6cd6eebcf852de0d42b93cc230cf"
  },
  {
    "url": "assets/js/157.7818768a.js",
    "revision": "43b5d0b02b7305a0d0296bb8783fe85e"
  },
  {
    "url": "assets/js/158.f683c460.js",
    "revision": "27f17e3f0c7554f240c91b04a85af2a7"
  },
  {
    "url": "assets/js/159.570f378b.js",
    "revision": "8b1865ea419f155fb2487f803f62a8f0"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.cbc10c56.js",
    "revision": "3bc47e50f3bfa23581dc43759af1714b"
  },
  {
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.efbd9fe9.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.c133d293.js",
    "revision": "3015cdc24bb3a11ec3df279adf3ff0f5"
  },
  {
    "url": "assets/js/164.77a36066.js",
    "revision": "d5678d209bbcd9395b22603dfd2daa3d"
  },
  {
    "url": "assets/js/165.9028fd32.js",
    "revision": "886bd063c76269d15b3db70498362a47"
  },
  {
    "url": "assets/js/166.6e9d8bf2.js",
    "revision": "8ff5c19b25edd51aac300e78cbca0b39"
  },
  {
    "url": "assets/js/167.fb27e17e.js",
    "revision": "9fe533dc61cee429c9a0a0e2fadbacc7"
  },
  {
    "url": "assets/js/168.27cabced.js",
    "revision": "fe0243454c5c9d7f8585793662430ecd"
  },
  {
    "url": "assets/js/169.b170e077.js",
    "revision": "1d8ff4fe8a4272dd45dcc850afa64584"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.2eecec6a.js",
    "revision": "2ebbe613485432e6f627823bc8c80c0e"
  },
  {
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.7d655829.js",
    "revision": "2956c7e555cbf24ff5ef5e5ce1e969c5"
  },
  {
    "url": "assets/js/173.3f1bb0a4.js",
    "revision": "90b9714b70540c5f2c7dcf924846bb4d"
  },
  {
    "url": "assets/js/174.e133e165.js",
    "revision": "a5e76a16c875230755b73f96b6afdd89"
  },
  {
    "url": "assets/js/175.86cac7a6.js",
    "revision": "fa094450c2a4e8119fcd28c3708f9b01"
  },
  {
    "url": "assets/js/176.ae71f97d.js",
    "revision": "a1858d67d35f469882d31de6e1148a5b"
  },
  {
    "url": "assets/js/177.999bb726.js",
    "revision": "bb381152f759b537924415c4a4cb20fa"
  },
  {
    "url": "assets/js/178.72980b1a.js",
    "revision": "2e27d432931c212853f11f00e5cf476d"
  },
  {
    "url": "assets/js/179.9d76f832.js",
    "revision": "b50879560a9967e40c1d323a0d987191"
  },
  {
    "url": "assets/js/18.9258674f.js",
    "revision": "5288863685993cd679d9b89ce68a2710"
  },
  {
    "url": "assets/js/180.3f4a744b.js",
    "revision": "60ca9de0c722da0e523f02d4620a577a"
  },
  {
    "url": "assets/js/181.205a00d5.js",
    "revision": "c80687cb23f13b7ce0ea9aae41dbd301"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.447237a3.js",
    "revision": "c437a61ff9cd5d17871c3ef45852cca3"
  },
  {
    "url": "assets/js/186.b2f1ee6d.js",
    "revision": "ff5af21e1f71b76c0752ce8581ded8dc"
  },
  {
    "url": "assets/js/187.36f9cae1.js",
    "revision": "f9a10f5c8acd328bc5c19934d5f9f5eb"
  },
  {
    "url": "assets/js/188.bfc9bdc0.js",
    "revision": "1533b77c9236156e0270966704598962"
  },
  {
    "url": "assets/js/189.e83b1a45.js",
    "revision": "68a5c9587933a4bcd0527b70014924ec"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.293693be.js",
    "revision": "6853cef578ab20690f6cd391c47d4035"
  },
  {
    "url": "assets/js/191.455bae58.js",
    "revision": "79f1b4fd994895c5c8a9cf1ec63379f8"
  },
  {
    "url": "assets/js/192.2ea788f5.js",
    "revision": "c987efe22922e799f7aea21474ddbec3"
  },
  {
    "url": "assets/js/193.6b66e1a3.js",
    "revision": "9609671c7c8bdba97ca4743989faeeba"
  },
  {
    "url": "assets/js/194.1fecd46e.js",
    "revision": "ee12348dd777d03731b6ef5631cfe740"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
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
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
  },
  {
    "url": "assets/js/199.cfc53358.js",
    "revision": "e9444e8ebb3b5b5353454e0793adf4e2"
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
    "url": "assets/js/200.9bede603.js",
    "revision": "cf8333330e523e7d7ba698844c65c1af"
  },
  {
    "url": "assets/js/201.ee4b6f60.js",
    "revision": "58355ade8ebd1d16d7e747722f7b98c1"
  },
  {
    "url": "assets/js/202.e820363e.js",
    "revision": "bfd34356596d94a83b226a8c1199d936"
  },
  {
    "url": "assets/js/203.da73b8be.js",
    "revision": "8455971fa3900b1c2b240243694eafe0"
  },
  {
    "url": "assets/js/204.7500433f.js",
    "revision": "e56c2ae97f21764d3a47329c459be01b"
  },
  {
    "url": "assets/js/205.dc8766ab.js",
    "revision": "eb5c7389bf13de2f1e714796c3776966"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.9460b659.js",
    "revision": "fd2ad82f22aef69990f0bacca76f1c5b"
  },
  {
    "url": "assets/js/208.25f866ab.js",
    "revision": "d8c47a321a326ed87a304b9f89d06699"
  },
  {
    "url": "assets/js/209.527f4eb5.js",
    "revision": "3c2a6ec76ac63a41f582e0fae37e4004"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.8b8881fd.js",
    "revision": "2b105b685f01cbb4eb65b356ecc8cac4"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.42016fe9.js",
    "revision": "504ea6ffa607881fbcc15dc5e2a5b8a5"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.ba063ac0.js",
    "revision": "8c28484719678451aa9c0a696dc33057"
  },
  {
    "url": "assets/js/215.4cc56f4f.js",
    "revision": "60352b5e1930c39cdf0892d8154352f1"
  },
  {
    "url": "assets/js/216.03a9ba70.js",
    "revision": "35a47c46b540291a76efbe061a5f320e"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
  },
  {
    "url": "assets/js/219.9ff6665f.js",
    "revision": "4fc41067e336decde34aa3cdbb44d8e1"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.5e7f71d8.js",
    "revision": "20612b5e17652b130918775b45fc097a"
  },
  {
    "url": "assets/js/221.ba3702d8.js",
    "revision": "c83e03842ffcc4605f413f5bfc291c5e"
  },
  {
    "url": "assets/js/222.811a0022.js",
    "revision": "619570da2a4aae21ef1b91d4bd8deed3"
  },
  {
    "url": "assets/js/223.6f44bfe4.js",
    "revision": "1ae2b23f0528e2a1c583801b1bb31ddb"
  },
  {
    "url": "assets/js/224.031150f5.js",
    "revision": "1674af67e18d8f75d6d4884941f1eb5d"
  },
  {
    "url": "assets/js/225.ced8da37.js",
    "revision": "edc108144ad928dc77a0dbfeae1f9b02"
  },
  {
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
  },
  {
    "url": "assets/js/227.57b62ec5.js",
    "revision": "7cad279f00f73b0e9ea07984d5ad019d"
  },
  {
    "url": "assets/js/228.47b26ea2.js",
    "revision": "b578f75ceab7309f6dafa158f67a8abf"
  },
  {
    "url": "assets/js/229.6130aa09.js",
    "revision": "7f5e020e0e3aacfde458529c6b28058a"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.38a89a0a.js",
    "revision": "b0ed9e2b7d70a7d4cc687ab25637330a"
  },
  {
    "url": "assets/js/231.61fce1ef.js",
    "revision": "cc0468771993d829c4ec298de96a2fcf"
  },
  {
    "url": "assets/js/232.8419a5ad.js",
    "revision": "f0f5fe30d2ed1708763425ff6260e607"
  },
  {
    "url": "assets/js/233.ab5f45f0.js",
    "revision": "4d6da73955cfee870e3a6e1d33c6986b"
  },
  {
    "url": "assets/js/234.a203101a.js",
    "revision": "8e7954a2e97c37343a5a0649d9a00884"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.4cb631b9.js",
    "revision": "17ded79af3f7aa9d5639d8a692fca2e2"
  },
  {
    "url": "assets/js/237.68e523a4.js",
    "revision": "012480c00bb58719dbade5bfb5444a14"
  },
  {
    "url": "assets/js/238.9a4d5b8c.js",
    "revision": "327e0fce8c8dc6b3b0a3cb483700345c"
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
    "url": "assets/js/240.5e1569d6.js",
    "revision": "2648be1d9c83d2b3e27ae9ae0017acd8"
  },
  {
    "url": "assets/js/241.91243411.js",
    "revision": "3fbdea6da4d969e9bf4e7cae1096ac73"
  },
  {
    "url": "assets/js/242.dfdba9dc.js",
    "revision": "0920bac067bf802a120986d8a9194028"
  },
  {
    "url": "assets/js/243.cf953b9e.js",
    "revision": "69d4898820b093ec4123e58c8949acda"
  },
  {
    "url": "assets/js/244.421e2da4.js",
    "revision": "8b38269665a051b9d6ec5752e3f3e7a1"
  },
  {
    "url": "assets/js/245.684035ca.js",
    "revision": "8581a90cdab216e7f4d4259bb6f49238"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.f2f006ae.js",
    "revision": "2798434c9f658465bbc45e511051376f"
  },
  {
    "url": "assets/js/248.eb8716d2.js",
    "revision": "8e56a9d0ddb0bda588efb506e8fc34c3"
  },
  {
    "url": "assets/js/249.fc07b7d5.js",
    "revision": "2e76e2bd5ff552146cc8d071645a22a8"
  },
  {
    "url": "assets/js/25.a20030e0.js",
    "revision": "53e2c5fdb97be8d22e0cf6e846dbc3d7"
  },
  {
    "url": "assets/js/250.e76e7f80.js",
    "revision": "2462f50161651b75fd1f6bedddf520b7"
  },
  {
    "url": "assets/js/251.a27bf773.js",
    "revision": "c0e02ff3f896890c6a05f08fe3011a43"
  },
  {
    "url": "assets/js/252.8c6b6f7d.js",
    "revision": "b51993efebdc2c9249e0a734b362074f"
  },
  {
    "url": "assets/js/253.51ad0c4a.js",
    "revision": "e29a2e744be44029ce2ad9326f15f166"
  },
  {
    "url": "assets/js/254.8ec5c866.js",
    "revision": "421245332d74b78b3ba2847db91312dc"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.aba68591.js",
    "revision": "bbf450a1482ac0c4545ea57d7e365211"
  },
  {
    "url": "assets/js/259.b2d6a237.js",
    "revision": "0f02438d6bc9253b2f746654562b59e3"
  },
  {
    "url": "assets/js/26.77e44769.js",
    "revision": "9b4c36361660cf67041f124b8969982a"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
  },
  {
    "url": "assets/js/262.f22e2142.js",
    "revision": "1b5d4158c040803b9220ba0f8f24c463"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.9f0f04fa.js",
    "revision": "a3058bef50caf099b05cf5bd5ad48c0c"
  },
  {
    "url": "assets/js/267.7eab4281.js",
    "revision": "de780d0a111565c063b1c3e9355af4a4"
  },
  {
    "url": "assets/js/268.8fb888dd.js",
    "revision": "fbe6506bdf65a4e6553b0de8afea31d6"
  },
  {
    "url": "assets/js/269.ff613273.js",
    "revision": "5c4076460ec21ce1c264f77995ebcd02"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.5ea7e844.js",
    "revision": "d7511cc9e0898ab12cafeec4b39be09c"
  },
  {
    "url": "assets/js/271.13031df7.js",
    "revision": "d6664cd9f5fb5a6c8c8b611fe27d795d"
  },
  {
    "url": "assets/js/272.f007bfde.js",
    "revision": "486b8bcf91897d620aef9dfbfd124010"
  },
  {
    "url": "assets/js/273.f1b927fa.js",
    "revision": "d7dabb5bafef4f327ffc22aeef03c608"
  },
  {
    "url": "assets/js/274.925341fe.js",
    "revision": "c71e82005ddf85b99092da02e6d6db90"
  },
  {
    "url": "assets/js/275.b51f6a4c.js",
    "revision": "88f2be3fbc746550196b6b15863517f9"
  },
  {
    "url": "assets/js/276.f5b0be3c.js",
    "revision": "1aa0b7a540d7bd9406b4f105eb1114a7"
  },
  {
    "url": "assets/js/277.fa60aabc.js",
    "revision": "cabeb5d1c1a754de2291ab452fb1d985"
  },
  {
    "url": "assets/js/278.d0dfce40.js",
    "revision": "24641a7520645c4073dec56b3c12c2e9"
  },
  {
    "url": "assets/js/279.a3d446ca.js",
    "revision": "9e51df5d7164ec5a9240d79aec46ca53"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.5b8211ea.js",
    "revision": "f513250127bb13db3c5b02c12f3be357"
  },
  {
    "url": "assets/js/281.33e809a9.js",
    "revision": "0aea96178f684f10f235235358c6d5cf"
  },
  {
    "url": "assets/js/282.2ca14bed.js",
    "revision": "9ab6f8a36bf1b1f88c983f610f0d1aae"
  },
  {
    "url": "assets/js/283.8b8c6b5d.js",
    "revision": "2dfeb369064b0efb9e367177fe467d66"
  },
  {
    "url": "assets/js/284.f4f495e3.js",
    "revision": "38ae2c29c715581edd5740e64f933991"
  },
  {
    "url": "assets/js/285.0fa40911.js",
    "revision": "aaa613dcfa3d4ba7e182d7387d6c8809"
  },
  {
    "url": "assets/js/286.a04444fe.js",
    "revision": "bb89139baa1294d764ad6d8533453159"
  },
  {
    "url": "assets/js/287.b373b78b.js",
    "revision": "de3ea747d573799ba7f94668b440ce4f"
  },
  {
    "url": "assets/js/288.144695f6.js",
    "revision": "3eeed1f3d711f8ef2faecad729daa895"
  },
  {
    "url": "assets/js/289.0443ccef.js",
    "revision": "25188439d63a9f0e1d626e8e7c01ee0b"
  },
  {
    "url": "assets/js/29.786e850a.js",
    "revision": "e4a05eab3a08dbe4e84fc89587145c4c"
  },
  {
    "url": "assets/js/290.f618d103.js",
    "revision": "1891dcf77e0e2a7340cbc3a1777e6ff4"
  },
  {
    "url": "assets/js/291.7ef55216.js",
    "revision": "4bca01c138bc8ef6f977ed21bd833ad9"
  },
  {
    "url": "assets/js/292.5389b18c.js",
    "revision": "745f4b077a2da13faa41fb8f90cff1e5"
  },
  {
    "url": "assets/js/293.3cd0d3d8.js",
    "revision": "72d4e39d9ea9fbb3b5ad49cf2a9b5abb"
  },
  {
    "url": "assets/js/294.519968ea.js",
    "revision": "cb54a77fea6a5e8441c9ba6f22d7db85"
  },
  {
    "url": "assets/js/295.9f1fd0f4.js",
    "revision": "fcf05c957f9d70be8d39c9027c6c758b"
  },
  {
    "url": "assets/js/296.e86f5b34.js",
    "revision": "303bac7e136b6ea59d59aafa9be8ebdb"
  },
  {
    "url": "assets/js/297.37cd9537.js",
    "revision": "2bd871683851b57ee87f6ef7a8f7d6e6"
  },
  {
    "url": "assets/js/298.77d614ce.js",
    "revision": "cd24c509ad98bffacd9db92e24e7383b"
  },
  {
    "url": "assets/js/299.5c7e0e9a.js",
    "revision": "476bd89acee34d51c0843852ca5ade97"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.61313bec.js",
    "revision": "eefb068034ae81836a2c5e7ebd882794"
  },
  {
    "url": "assets/js/300.720c5c9d.js",
    "revision": "981db287fc89f3e8797df0126fea5d4d"
  },
  {
    "url": "assets/js/301.00bc77ee.js",
    "revision": "ebcf996d27249eed9882a7a77a870dee"
  },
  {
    "url": "assets/js/302.70455abf.js",
    "revision": "5d2fbe2fe81a531c51d10519240b89f2"
  },
  {
    "url": "assets/js/303.5e18ee15.js",
    "revision": "a10e45d50b89ba1566ac58487cf60537"
  },
  {
    "url": "assets/js/304.d1168a13.js",
    "revision": "2d05782f8cd7ed4c292afe153e582b77"
  },
  {
    "url": "assets/js/305.989fc446.js",
    "revision": "ba6093847fdc5524a6c3ee9c724537a2"
  },
  {
    "url": "assets/js/306.272bbdf2.js",
    "revision": "a45b8fe5cb8979d6902f70c98c8a9550"
  },
  {
    "url": "assets/js/307.9b717481.js",
    "revision": "933d4d0df4c83639e28665e27c2fc3f5"
  },
  {
    "url": "assets/js/308.4ca84ac9.js",
    "revision": "0e0268bb818bfba2a03f74e3b6d33d4e"
  },
  {
    "url": "assets/js/309.7f91d812.js",
    "revision": "d3c198c550bbf4f660ab0fa10a63443e"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.822798fa.js",
    "revision": "da6bf8b02681d7ac1395902fa00210f4"
  },
  {
    "url": "assets/js/311.5d686fbc.js",
    "revision": "301b4a8896a7e6937052af6fed8e466b"
  },
  {
    "url": "assets/js/312.b39ea6ba.js",
    "revision": "8b604f66eeb45e186742ddaa5c357701"
  },
  {
    "url": "assets/js/313.95d96c6f.js",
    "revision": "1597106e6ed436d6c982f0dc145cae2e"
  },
  {
    "url": "assets/js/314.69beb992.js",
    "revision": "41acadfe64196361f041f19f0a9bb63c"
  },
  {
    "url": "assets/js/315.3b2a59db.js",
    "revision": "deeed55680352b73b802e5d39cba4bcf"
  },
  {
    "url": "assets/js/316.a72c7d1c.js",
    "revision": "73d17a31b240e7f0ba57e5223b5e1346"
  },
  {
    "url": "assets/js/317.f2671878.js",
    "revision": "1084c6b7959d452de769441ce594317b"
  },
  {
    "url": "assets/js/318.060c19b9.js",
    "revision": "bd8f62c7a629647a03e34a104a12f840"
  },
  {
    "url": "assets/js/319.b278ce0f.js",
    "revision": "d5f4b1c80a9ac229ec4ab8521ce74885"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.dad9fcc8.js",
    "revision": "09dc2c511b99d76e0db1357a9ea1812d"
  },
  {
    "url": "assets/js/321.873d8e5a.js",
    "revision": "263b783e158487702425c0e962cf5ac2"
  },
  {
    "url": "assets/js/322.37a6bbcd.js",
    "revision": "c21a51085334fd61bb9ee6c0ccba7bc9"
  },
  {
    "url": "assets/js/323.530b135d.js",
    "revision": "3c0e59eb9c7576a8d884d78ebf95a0b6"
  },
  {
    "url": "assets/js/324.07ee1b49.js",
    "revision": "0e9090e7553ffbfd64d08aa82b92ff91"
  },
  {
    "url": "assets/js/325.6619243e.js",
    "revision": "371c8203b040649cceebff92ea6fcd33"
  },
  {
    "url": "assets/js/326.64d1dddf.js",
    "revision": "803de75693b45badcc7ea19921fa1030"
  },
  {
    "url": "assets/js/327.83524cc2.js",
    "revision": "94c10fae8b5c727f19a96cf667ef750a"
  },
  {
    "url": "assets/js/328.74d115dd.js",
    "revision": "b9f4b1c7b2c4281ed470baced65271e0"
  },
  {
    "url": "assets/js/329.2cc4d92e.js",
    "revision": "74c52de8deb8b74f4f79f00151ad7b85"
  },
  {
    "url": "assets/js/33.30f381d4.js",
    "revision": "66f4ebb3d1f513dea3b18f794041a792"
  },
  {
    "url": "assets/js/330.4b382083.js",
    "revision": "e231d01cd8251a6569b339c37efff9b1"
  },
  {
    "url": "assets/js/331.13f98cd4.js",
    "revision": "d1f4ef3bbdbea021b5edc1f01519ce56"
  },
  {
    "url": "assets/js/332.835236c2.js",
    "revision": "870a5b79084b1403d6bfcac9f89e2faf"
  },
  {
    "url": "assets/js/333.1955e24d.js",
    "revision": "591a120ad933b61b017b4384cec95d32"
  },
  {
    "url": "assets/js/334.f3750936.js",
    "revision": "23d4b99c819044d7eb4deb3ee3fbf4bf"
  },
  {
    "url": "assets/js/335.3bc06186.js",
    "revision": "b4f0bbd5992040e5b65f705496e5713f"
  },
  {
    "url": "assets/js/336.46a31362.js",
    "revision": "183ef1fecef6a76400296ab5cef04e35"
  },
  {
    "url": "assets/js/337.058fad6f.js",
    "revision": "99c376d0b9bb2fec41285f09c0b57ea4"
  },
  {
    "url": "assets/js/338.a598e4d6.js",
    "revision": "394adb88018d28ea374f1f119e92c6c1"
  },
  {
    "url": "assets/js/339.594b710a.js",
    "revision": "c1356ad6411fdc395b1d3c22add1046c"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.77caf216.js",
    "revision": "2317573d12bb4568739bba7e1c645580"
  },
  {
    "url": "assets/js/341.78e001d7.js",
    "revision": "65dd9854e7aac2b1b9e12bd3541a389e"
  },
  {
    "url": "assets/js/342.a41d7af3.js",
    "revision": "4a3146979dd8211fc76664dc53dd05b8"
  },
  {
    "url": "assets/js/343.6cc3d752.js",
    "revision": "af35ace778e5ce6d5e6027f935d46496"
  },
  {
    "url": "assets/js/344.3d4e08a8.js",
    "revision": "610c3639d75af5afa77a5bd15fa44f73"
  },
  {
    "url": "assets/js/345.0cbad6c2.js",
    "revision": "4200dba26205b12167ff2fb5b2b41a94"
  },
  {
    "url": "assets/js/346.88bcee36.js",
    "revision": "77ea7ab69bebb14231f732a295403d58"
  },
  {
    "url": "assets/js/347.08f71406.js",
    "revision": "7bcc61a0449ef94bcd40d344a5583d62"
  },
  {
    "url": "assets/js/348.ba6a1eff.js",
    "revision": "383de7951295e4517dfda56457009a71"
  },
  {
    "url": "assets/js/349.3ac2a9c3.js",
    "revision": "0c6125b7698e3847d6b4a9bbf7da1ae1"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.552745cf.js",
    "revision": "3134839200e90756232df7af4820d58e"
  },
  {
    "url": "assets/js/351.5c564289.js",
    "revision": "bf9912c722a6d81416083b635f3eb7e5"
  },
  {
    "url": "assets/js/352.cd817971.js",
    "revision": "7becf5c325f89fc44ef75126600f171d"
  },
  {
    "url": "assets/js/353.34a4b4d2.js",
    "revision": "03906537b657f4f9dba7f5f26e462b11"
  },
  {
    "url": "assets/js/354.6cafcc0c.js",
    "revision": "e0a0921763cef887a532d46abeb84ff3"
  },
  {
    "url": "assets/js/355.073a934c.js",
    "revision": "8ab2a5a72ecbf3a3edbcddee47165bff"
  },
  {
    "url": "assets/js/356.817883a5.js",
    "revision": "02046eb88cb4b2f95803f78a71d75b13"
  },
  {
    "url": "assets/js/357.d6359cf8.js",
    "revision": "a1a9aa8bf15caa70e681a82753315e0d"
  },
  {
    "url": "assets/js/358.5f512247.js",
    "revision": "f1592507b7471149b182b43d84688a7b"
  },
  {
    "url": "assets/js/359.ea243618.js",
    "revision": "b70a0109bb642e4bb2042a4e0d38c5d1"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.f4631d5d.js",
    "revision": "c1dda0825b573670237103169eb55783"
  },
  {
    "url": "assets/js/361.77d29b4b.js",
    "revision": "8026a06140da58a7d4cda2e334eaf682"
  },
  {
    "url": "assets/js/362.a2acff37.js",
    "revision": "567175953ac57af39e488df792c9357b"
  },
  {
    "url": "assets/js/363.676d4d28.js",
    "revision": "79efebe8586c7ab40d6c197c2a551749"
  },
  {
    "url": "assets/js/364.7bad4cd8.js",
    "revision": "edcb60abae90608908a1b0a5c71c0715"
  },
  {
    "url": "assets/js/365.b8fdf7ba.js",
    "revision": "4cffd5ec458eec5a99de7da75b86b3fe"
  },
  {
    "url": "assets/js/366.1d214e63.js",
    "revision": "90d47e80893cb127f652f2862fb818c2"
  },
  {
    "url": "assets/js/367.1058a9db.js",
    "revision": "64ad4df0ab5c09228ef12bc74cca69c8"
  },
  {
    "url": "assets/js/368.7fb5cfa3.js",
    "revision": "e26490050efc04b4d28e9eb911053b32"
  },
  {
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.a1674be3.js",
    "revision": "704f3e5a7e5f6bccc3400a2de660dd78"
  },
  {
    "url": "assets/js/371.b4039c29.js",
    "revision": "2d0be1f62887d483436cffca551b4876"
  },
  {
    "url": "assets/js/372.e491b81f.js",
    "revision": "71446669caa34722a3500e1d7df3abd8"
  },
  {
    "url": "assets/js/373.d8a3927e.js",
    "revision": "66e6a3bb7ab746009b384effa1a317c7"
  },
  {
    "url": "assets/js/374.7b556875.js",
    "revision": "9622594159119981af735f72006b8583"
  },
  {
    "url": "assets/js/375.e4ceecc7.js",
    "revision": "73c6f77d6486364a8e4a52107cf42757"
  },
  {
    "url": "assets/js/376.e46bb9cf.js",
    "revision": "e487d7d78d528094f3f8513157e9b105"
  },
  {
    "url": "assets/js/377.afbf522e.js",
    "revision": "878ee6f40cbad544c8b50fb19a17ba5b"
  },
  {
    "url": "assets/js/378.d2a2838c.js",
    "revision": "bb6ba2d636830c9cf388790dbf330be2"
  },
  {
    "url": "assets/js/379.569ed1e8.js",
    "revision": "79e39e513b7f884ba6e4990b6d925f59"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.b64b5f23.js",
    "revision": "21a8c309d789d6d48b0f03ffecaca4d4"
  },
  {
    "url": "assets/js/381.74d1aacb.js",
    "revision": "8c7d819e76d6a5892af578cd3faec767"
  },
  {
    "url": "assets/js/382.3064c4ee.js",
    "revision": "d40c8b5b185208b4c0fabea99cccc8b3"
  },
  {
    "url": "assets/js/383.36b0e4be.js",
    "revision": "8701063de128cb167dedd5bede7d095a"
  },
  {
    "url": "assets/js/384.901af367.js",
    "revision": "947faa85a7d4d89021b378b536dc0efc"
  },
  {
    "url": "assets/js/385.dcecc599.js",
    "revision": "b50c35e5245a6d41441f3a06557a11fa"
  },
  {
    "url": "assets/js/386.34dfef62.js",
    "revision": "aa1c6f8502cd04f5a9db48265f7f7018"
  },
  {
    "url": "assets/js/387.cb443fff.js",
    "revision": "1399b9e7e32a0c61fe5690f431be36d6"
  },
  {
    "url": "assets/js/388.e02b8b47.js",
    "revision": "5dc3c09e4f7774c1503801eecdbc6fb0"
  },
  {
    "url": "assets/js/389.878dbe26.js",
    "revision": "c64527b8bedf5eaf84ec8af03df66b7f"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.14ac2989.js",
    "revision": "33316378079725654e3ec227d73bab61"
  },
  {
    "url": "assets/js/391.99c196f2.js",
    "revision": "5f86d47eb1a0a9e00ec357e78ceb5b51"
  },
  {
    "url": "assets/js/392.1b3b913d.js",
    "revision": "3341195020c4d652eb331cff80208194"
  },
  {
    "url": "assets/js/393.472b12b8.js",
    "revision": "487866e8558991a2e3ac4dec0d882953"
  },
  {
    "url": "assets/js/394.b4d019e3.js",
    "revision": "dbb550db120888a7f7e1b620ee33c64b"
  },
  {
    "url": "assets/js/395.03e137b0.js",
    "revision": "82a684721b16cbd960761fdd7009cee5"
  },
  {
    "url": "assets/js/396.50a44f27.js",
    "revision": "ca2507e8b131de2e9e3d800604c3e38c"
  },
  {
    "url": "assets/js/397.62ba9fb9.js",
    "revision": "0ce98f9967a15baad8313285e6209f00"
  },
  {
    "url": "assets/js/398.9175ee1f.js",
    "revision": "02faf63ff1c6138efa7b3d31bfe79741"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.645b31fe.js",
    "revision": "83f736a9c571e791e27cc81280b1d266"
  },
  {
    "url": "assets/js/40.6fbb3d02.js",
    "revision": "4b1d3a5d284756d4b9ead12520a2665f"
  },
  {
    "url": "assets/js/400.59df523f.js",
    "revision": "709e9e88c1ba26d92896723a11dd6127"
  },
  {
    "url": "assets/js/41.4b84d1af.js",
    "revision": "dbb87ed2896a1c8b2b986396edc169b9"
  },
  {
    "url": "assets/js/42.ca88525e.js",
    "revision": "f4bc78a8e681efe71217c81e340646b8"
  },
  {
    "url": "assets/js/43.fba50a5e.js",
    "revision": "93b3f2b3501dae722b8dff6e964cd738"
  },
  {
    "url": "assets/js/44.0bdbb0e7.js",
    "revision": "04f29b134be081772ef59da9ff03f3cd"
  },
  {
    "url": "assets/js/45.71b59f65.js",
    "revision": "7a78de669fdaf5c124b3d4f4eed58a5b"
  },
  {
    "url": "assets/js/46.765a06b3.js",
    "revision": "ae3f3b64496987ee9f021f47bbbea4a7"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.022727cb.js",
    "revision": "b4c27d497b21b54a29723ad8126fb18b"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.86009824.js",
    "revision": "274cca1aefbafa22ff931c535fa3920a"
  },
  {
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.1d7ae6fd.js",
    "revision": "b4099d878aaee26c38c219cfd4c629a7"
  },
  {
    "url": "assets/js/55.a7843922.js",
    "revision": "14d5ebe362b7c87833c35f09a17bca41"
  },
  {
    "url": "assets/js/56.770d4c5d.js",
    "revision": "a19ad0538128c46ab41256d0d455ea11"
  },
  {
    "url": "assets/js/57.edb13cce.js",
    "revision": "10296323be09f318b7402a7336a05bce"
  },
  {
    "url": "assets/js/58.66e60b5a.js",
    "revision": "e4700d19cd3311a9f135193cc2901eb0"
  },
  {
    "url": "assets/js/59.813a06ea.js",
    "revision": "4689ca0ab8a2571084cb441ed10e7dc3"
  },
  {
    "url": "assets/js/60.4b56ff10.js",
    "revision": "de95f30f9548948c40c2eb790ca2e019"
  },
  {
    "url": "assets/js/61.06bf7685.js",
    "revision": "a8086bff78dd12f8fc04f995f9eaac2a"
  },
  {
    "url": "assets/js/62.36d42f0d.js",
    "revision": "721531d2c8559e3e09bdc1b35e320edf"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
  },
  {
    "url": "assets/js/64.c524218d.js",
    "revision": "85dbd9c2607236f820bc26e0f9638cf2"
  },
  {
    "url": "assets/js/65.64117476.js",
    "revision": "42c1892388db95883ab6714f31ab991a"
  },
  {
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.0e247d57.js",
    "revision": "9011db8ff42b706f22a4b15a92ce3a34"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
  },
  {
    "url": "assets/js/69.af908571.js",
    "revision": "a153d897548d0453985371459ddf153f"
  },
  {
    "url": "assets/js/70.aabef992.js",
    "revision": "cb3d3f24d9192001612fbbff1e3d4d81"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.23a0e58b.js",
    "revision": "6512ad0d2ba323925d3fe505a8ade228"
  },
  {
    "url": "assets/js/73.4e9309c8.js",
    "revision": "341358ef097c56650dcff3359378d64d"
  },
  {
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.3c0c1a42.js",
    "revision": "62279273140b0998f4750147926f8804"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.03cff35d.js",
    "revision": "fbb5797b46bb7d677dee4f93f9d3695f"
  },
  {
    "url": "assets/js/78.ddd569f1.js",
    "revision": "d7ed4570993f882b7f090330faec4702"
  },
  {
    "url": "assets/js/79.09ce61a0.js",
    "revision": "205edf8bd7897b180c443d519e1244fe"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.f81b865d.js",
    "revision": "b6fc0d5ba9e40272ac3a266242bd9140"
  },
  {
    "url": "assets/js/81.296213a5.js",
    "revision": "6c5cef6ac32cb73f7d4750e6454032c6"
  },
  {
    "url": "assets/js/82.c5b79991.js",
    "revision": "cc16e0f0ff71298924458df8b814e86d"
  },
  {
    "url": "assets/js/83.7d61a649.js",
    "revision": "141d1e0cf25a7044c0d073e399408ac9"
  },
  {
    "url": "assets/js/84.6841e809.js",
    "revision": "953220cb79b34800064dfba63f245b67"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.b53eba2b.js",
    "revision": "e6a36d5be85313dc5880eaebd1c557c9"
  },
  {
    "url": "assets/js/89.4d28ddec.js",
    "revision": "e9b62fc2e2bb8c4f2eeea881446444e0"
  },
  {
    "url": "assets/js/9.9c2bedc6.js",
    "revision": "681552c73aa40827de683c8da6fe5271"
  },
  {
    "url": "assets/js/90.5800dbe8.js",
    "revision": "c96d107cd326d4dd4bd479bf642c53ca"
  },
  {
    "url": "assets/js/91.48477d07.js",
    "revision": "e806e89ac4dee6bb77182d698f35d1c0"
  },
  {
    "url": "assets/js/92.0706a1a7.js",
    "revision": "3f9352d2f30b933b9ccb7d31f3180227"
  },
  {
    "url": "assets/js/93.8ff0d345.js",
    "revision": "7b1b3a9a4ac206ba3a76c65e319e9cde"
  },
  {
    "url": "assets/js/94.e62ca9fe.js",
    "revision": "3268fcbf420b15cdce3f3d268a6a94e7"
  },
  {
    "url": "assets/js/95.b1fe79bb.js",
    "revision": "6efd3e0e4a7de7fd85be8db6a660f51a"
  },
  {
    "url": "assets/js/96.ccf3b28a.js",
    "revision": "282c77d5a85a7c26ea63e7528553fb04"
  },
  {
    "url": "assets/js/97.79f84fc3.js",
    "revision": "447d5e141668f4aa9f8a7d66b8d521fb"
  },
  {
    "url": "assets/js/98.10cf74cb.js",
    "revision": "e93449db78e7ecad06bc9080aa134c5e"
  },
  {
    "url": "assets/js/99.7e6e6b6f.js",
    "revision": "df3112f7108953c8ffcdfb38aa0739d1"
  },
  {
    "url": "assets/js/app.13e1fa17.js",
    "revision": "626457eb0daa6625bda4ad35058e9e67"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "d8f0f07988de0b7471af0b1a7ade7293"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "3cfffbb946b3323d8a2c1cb3e60b3739"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "fdb169bba818f69b1990711a47a50a2d"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "3119934df7edc379305b9ae5bf49e6a3"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "da3fe9db94a6ecf398c3b1955736bd2a"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "a09bbdb45f63547d46677d8c7b0dd967"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "55ef4de60999976a7a886405bf728f38"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "a2dcf0aab658f9a7845d47a11df4a07c"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "c508d1e3c853850d9fd9e6d55c5aedef"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1072af52afdad2d01a604b2e3b7e78cf"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "b2295a85ad50fbb2f11b6dd004cfe54a"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "75e67df96ede8f6c7e0788ba9059ee41"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "92071a61f05241574e5643b2defaa3c7"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "0bf813018b22865443d5c1823f3e6ea4"
  },
  {
    "url": "master/api/index.html",
    "revision": "5f386575df474619f8cab7aebbb2483d"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "bd32e410042173522855715b37669ac1"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "20cba32bd9707fb9dbed23b2926a7b2c"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "9da565dbce2b3e15c0a34a391fd837b2"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "67d68db360b8a36e891e1f2f85dee84b"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "190f6460202705474e1f0e39fbff53e4"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "0133c70e6d9d24aa6475ea566f2017b5"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "c868c6d3903184ccfdfa2061a20302a2"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "a2539a3f30cbdaf2b405202f9828f274"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "e225b4002ec9cba5c645696c7aa9fbe0"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "377689f8efe046ec13cb10cd7a067318"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "f899e3fef45efdb039fc643974020b65"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "028b98eddd14913634c3a37bf047853d"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "44502fca7734fa41ed03d89efd7d558b"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "b001cfe1160976961b802a8724f9f143"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "f2c6d175ceb1e79194a715424348ba90"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "ea8a8c3af714e884b7bba8037fcf546b"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "ac24247610a1fd400113bf7c06bad100"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "200371c28afb7d7a79c1269a8b2395bb"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "68b2acc2f86034eaf64ddf24fbee1740"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "e50d5af7d1d3264848468ee39752aa4a"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "95b4565d13c3323ae530156960e6fb9e"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "227e734f71387316e7ca747188661961"
  },
  {
    "url": "master/packages/index.html",
    "revision": "12907432778d438e2e9f659df53d1d36"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "6f21e02657e33fbb46fa371509335444"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "88b0b4f3db43aca35bf57fd2a0964001"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "4d87f1d153ca0e39eba6d9aab3fc14b7"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "0500ba080025a9a3d649f66e9bc54b78"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "47f63594e41d594814eaa369f7eebf64"
  },
  {
    "url": "master/packages/views.html",
    "revision": "8712a1ec60854f6bc0fa66d4d3a06d4b"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "eaf154def1f3d324b07a4b049e68881b"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "be129a6d39391418488e1ecd9dead714"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "7c12c1872917f2cfe5295622c2d9828a"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "d6cdca0eea365cdcd0e43ff53d1989bc"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "49d8b19e3d3e578acde4de247dc35fa3"
  },
  {
    "url": "master/themes/index.html",
    "revision": "4ad7ec7474ea569c3d9781797fe006ec"
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
