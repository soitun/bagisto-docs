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
    "revision": "6d3cd4fa92b3c45965f94f2d5846a9ba"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "b4d3a82223d9e7582754256f60fe1953"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c9a803b1b9a30d03f8035c72504fce8c"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "8425cefaf521122674aa9d67d3291605"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "ea9065b196a95df0c648fc060ad14349"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "bbf49583635eca235f812118fc0f46e1"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "3a5b72f76ef2fed341a450ca24379f01"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6721c2c8c41cc0471d186883a29e8188"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "cfc34d4cb9e6ab4b87ce84e54d0b7199"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "8d72f3635f87b399d7aa7d340b2f3f6e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "c1fe2cd69169617a10b29ea51c8f1ef0"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "18daa239dee5a056133e4bbe3fb30a74"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "218647ef39e682699f902bb83890a655"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "2add3c693f5c584f5c848b7fd998e879"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "14191d19a8f4f995f1662a5acc000111"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "85018c52de7d25ed52cbf67ad931d18d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "755cef717204a8f8cce482cd7a69ddc6"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f79f8b25a9f18040a906dcf11f96c068"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "05a7f88f02595139efecce6d9f61dcf7"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "5c07f51b190082891f5b0ea28f207884"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ddea21be1a7cb6cf012375dc74f0f6f8"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a810ff48702399c6c4cdb5965ac6ddb9"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "34dd7147eb33aad6461c4c8d9052c65b"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "d477289134bf99ee8bc95161449db7e0"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b7329f7a1485c8797c1616e1b98a6762"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "141b8ac8c47e04fb8a72aae03971bb59"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "c9eb6db87d6e5c6c1c65a2a785566b25"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a212fe9b4a65ef940929f9f5e327de7e"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "21b52647c3cf2dd2db4d6c30d62ac39e"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "01110a44042723d32fd72f1ab21180bd"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "b44a91c2845d0577c70630f6147a7026"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "c9ef2f591ac3566ae5ef8a7979bac55d"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "8d3c716e1eeef0b0c13b019d58948e7f"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ac7363ac7e67833b287657580c27cea1"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "e4ba0a566512dcbdfa4364f299ac5fac"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "83d75c420a230bf66df7ca133ceac91c"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "64843812edd24729a037740f24768c75"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a5a7512d57bf178aa9443e72ce201b1f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "70bbe2b926efdabd762a0409129fbb9e"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "07896099ad420b997f5a2ed6c7ab4fc3"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "3c92c53330fac3b2145f4178dc2c534a"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "6d272689a792704c6c2edafcf865ee8f"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "cc5836535122a8c2e14cd63374002476"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "cd3c77028595c4dfd7cdd56a22ecb2af"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "66765d0e1c82ee8484578e1b9f6d2888"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "69c2582ed0e7a8ce08d459531859dca7"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "a1074c63fb2f5df8713fe1fceec77cee"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "da3cc7b4b7da80baad609dfaf718c1c5"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "211f5cd681d0b41d23165c524c9e96c4"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "596d9b887ed27049a0d133601e299824"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c9c075e0f71bb2f324f444f2fdc40088"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "1efa0fb59c1e9a48722c7acb7106a981"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a5fead9b32e1897b7256922d7b8ed471"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "f9e21eb1eb3f9c1f0d7ea37db586647b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "acbc6e7e59bae5881d691ad28585adf3"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "79a2e200629b2262da61e7d6cb0c060c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "613435515b25d1dd64d641ba8e07a336"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bc7498d29bc17bb3cc8a1a40c5d2fdde"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c61db96b33ed2d5267aabb8a905e857d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e52d94b9101269fa554f7e89bb068416"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "cc64148e0b26f4983a4e568f0ff1c110"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "b497f8f4a97a57bd521215a7d1c506fa"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "6fc3cbc119d98e24b4990110f3600247"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "fef57b066d6d665d8dba2daa0a5bb85e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "86f4e4810d965e4fc999d5416b0c6cfe"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "2207719c866b224120ed039e53a86a9d"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "0f1f25f5f8ff49e8dd848c93646e959e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "74362d3757ad81c26ea7d2acd36785c7"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "e48c02e472e1a527510afeff85dcc198"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "2db5b573003020f22f99889d297fad3b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "d8451f5e17fd1366d50a19cc8781359f"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7a444d777c08366713644eaaafa9c920"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "9399fa9e59ce63025ef32be40c3ef858"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6210016d94289badf50764092663caa2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "41959d6dc39ee97eccd911257eea84ec"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "601f5d11ce4e57143f34e7a30c8d5f0c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "52bbd170d58a160f72ae7320ff40d582"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "076ef038d58de44af87bdcaca40e3824"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5fd469a52867277663fa499d0ca1aab3"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "9233bce4e32d918586a74b5fe134cba6"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "2ee6773c0adbb4ce30dfbd2eaa60f4ad"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "0a3e59acb02dea422d0b446133517f15"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d222c0d1d0eff2db10770c73f72d2f1c"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "fc280f0026e417f7c1d0e4b3225311de"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6dd7584e73d5f4cd63870d800afc9634"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "4e79e45ee785dde3088d90d44a7ac24a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "89fd98444a59a50809cd225ed430e2ab"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6e3ab18466d353ca417dbe6a67fe0e3e"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "092d532a7e436ff75033e3016e20b3a7"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "1b6da67fecf9412e9b675c576e72d342"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7cff199b82bbf4b953920fc819e87376"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "58f95a0e02d37e8e9f5825d2207d0315"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "94a2e4c62e83b6d6c36afe6f5c07883a"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7430cc48e2dde39554c7d305b3370203"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "8db0e062ef3ad013d826b8bce3aa8f20"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a9643db100e6dbddc07b86dc891e57b3"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "35a1d6dffb0e37e40b1b999ea0558032"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f6cf762afa5bf11b260cb17504019e3d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ba612685daa89f2e90335854aa3e3bc8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "38f60696bc71a3039fecee768fcf148e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "29916439cada6db1e4b424bd0742e799"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "34bda2555d43696692979cbccf63c1cf"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b20e6b6d9536f3345b096115f04345af"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "2d1ae4c05fd2325ee08708594b7aa5bd"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c00edd4f1f22e571d4005300c80e3708"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "ea8afd810f040f08ccbd0e526150684a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "81fb9e9163fd141092e89892377c7922"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "cb5731c37b7ccd8fb81fd0c8407c0c8f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "7f971c4d21b8f3c58fa938d9e9c3eb81"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "7ad92af16cd1ab6ac7ab70909a4828f9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d7232077bb145ffb263ec4d56d098664"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "37226ef336f572c9cbfe43ff3e8fd8ed"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "6af65ea736790a29841827c265e0bec9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "b2fc3c409ee9df6f4e8df1f91e7efef2"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "6525da23ad19de19494a80f6cbcecf59"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "04c173fdd3caf6095d2a57cf76aca949"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "83e972239dea25db5d4d4862e61c36b5"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "f513780d9bfb2b66869db4a5eeb02261"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "88ee94f128a127a2d463dc35e14031f1"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e38db8cb6c980bc5173aec1bbb89c8a5"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "0a803beb5db8ff19a701b2b9115fc2e7"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "6bae045fabd6ee45cb62bc7c0b029087"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e9bdf83131c36238eb12a263e1383a8f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "2da782fb4b17bc9784bfacc447c53975"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2c1299c8c1b32c3fd8011a43b77aefb5"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "dcc81dc2c7498b35075a91564c449624"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "39321bd5977206fffef7b5e630315844"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "4d4d4e19e7909b9aa2748391fbebb848"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "b8c0b9ce81084ab6bdc1bc81ff821027"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "746457c586820a281b95d26c2347c101"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "a4952ef8b485d649912a2a7ad58437d4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "345b21b0ef3dc8970cb5f1de9531eedf"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "6e6c4ab6fdf2a9dba861c650672c2b5b"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "f51c3237411d13983d0084ff5f675f70"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "462430afca79200f39e38261aeecc2f9"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "92fefae7136658c545c10421930bf4ec"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "ee6e202cfa12d87fd14739b6285623f0"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "37b0f98c3dc2422c8f4c02fc62cdbca1"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "0a722b10638f63fa6858cb2ea9310c5a"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "92ef96d7f3ca85afa7927a74996694c6"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "488fa6fb6694a6c5c692b3e426493105"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "272ca08fb20e6fc50910b2f0f4f85df6"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "7d42ead4dd551b81288fb0721e1e0d29"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "42865514b2dc75c0112734ecf637b4e3"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "006d30e699b9142e56688cc21a94f97b"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "237882125f088a8acb08ce146aa2a494"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "59f5075a477824663bbf117831bc7af1"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "bd13510c0e772893021515b93410eb58"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "5a1e81a46b0c8079a97d82ec4748f8a3"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "9446c01db8a885c874935dab9f4cc483"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "f484291fa05569b99c48701899a77276"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "edeb5869719e80d9895bf4205e90333c"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "0f8472742a0bcab2fc4711286447d190"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "ea893ff2ac1c8f4d8ad4800ccb410cbe"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "114dd733ebf8edf0f0a3537c0a58b16e"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "cb08295ee1147cb32ce041a2c2bd4651"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1ccad4c869bc21fb916876435a87f3f7"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "6d9724d40ba9c809292fbfe739b0d9b8"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "6600e5f277c9b163a329da9ee55f871b"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "f49f6c74adea3224077cfc653fb09c45"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "a09d6373cca4341f0693e4f66208d737"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "01c0965c554b8996f7575c85325c59d5"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "1df3514e5d1baefd1ad0aa0bec4e736b"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "bb51c3a29526e5b13638e868ce23487d"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "1f8c993f9a9fb98e8c6091d9c40efbb3"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "ecd8f1cc89f6dad488677d48603a0267"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "1728e84aac828eff2208ee6480ce2062"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "aa39dfc02b9086fd7c4ad2e4926ddeff"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "e2f85b50aec5dad64de9ea8144f6eed5"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "c333ab5dc0324f761433c2a1b01d7908"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "0c90fdfde171d37618c0278a529fb57c"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "7f4533f21898175c73a0e1f4942dd223"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "ae1ff0799cc90f6de75f4f4fe6cacb8a"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "12ec2a0ed3442a07383daa8c2afb1c72"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "4e5fd0d9607ba1108c98688d70fc2034"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "40d6d37baf24404a41877b8896b00b17"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "0306c50427edb7045e0dd7ac91758d99"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "1be75e20441a9bcb0b95ae468e0e15ea"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "b6a234047d3b53a3a2b9b4f211c89626"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "23af1f8c161f1fa6b4e9a0edc28f7eac"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "611ef01caf62ae220bd181a2f115b946"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "b6aee882918181db408d471ce2b1a4f2"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "860e25aedb44c6b03b7c114baaf06277"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "9de7efbd7358ddeca5448671d68c3e51"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "c80229634e050cc963cbbecc2668aa51"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "5b318307aef33ccd80ebc1a59296e227"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "a65ed6a167a6d02c75004ecf221bfa66"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "fd2410e730a5f43c5cee72d6dde8df49"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "207bc63735665cd7a12e7b4646651460"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "b9dcc29c92681152492103f856a5c44d"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0287ea181e8b88423e50700fb06dd005"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "56602d243b763793975b29c388efcaad"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "8ef3df30724c1fe33bc6072cce0fa8bc"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "49cacd990c8b60d3541883a9ef3e1d67"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "9ef4799e0d750e347eaf35cac71815ad"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "f88254219d8d8a372e0de4c2486a5201"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "2d4b11c274794e36091f310e185cd59e"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "89781bd375995a47f29665b3e5e06d2c"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "1d69c7ca07f80ddf2dacf603ff73e2f3"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "89109d7b5532f6e2ae70be885d470ee0"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "16ae0ef93849cde84a5ef04a7d4c3184"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "84bf7a0d1ab339b7dc50d6a82f2780f6"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "f6a27f35e4720f0c7a74fd3e7e59bef8"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "b599782d81596cf275da2c271c5d47ca"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "11c0539e454e092a976925ee8855685a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "c6fa0b1a60d7d1b3b7572642d7fd1e64"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "baad1ea9d579036f047422944a63f93d"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "0a8c45bcc9e41189d3eff78831c1b392"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "88bdcb03ec38c2aa5dc9c86b7ae849b6"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "6e0e8e611b4264b837188ecd9a5f7df7"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "fb74c9d4ba724ea41aef70a0fd8b9072"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "23f80856c84eb207e758eb5a150215da"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "47a329d15e8d5eebabbd99a31a603539"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "1ca14dcc50feeaae75b1b5e6378e9ab8"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "e6cb34d81d3a0c0b57495f1de4e814f0"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "e849aa170ec8917c2ee175e53e6a4787"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "4249c5213fe1351f28d49e2d74d52d54"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "ee90537b55265c38836d818f35fe4a3c"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "bde98ad5f4207fdbbf39fe18d1a3576d"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "57686639e5cc45c207651678ec9c2bb6"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "d370fdd7acfc17b036af7cfbaf255fc8"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "ce67baa826e5b62d3f00dbacc41c4d34"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "f015808e5d2237017efaabaf859a100a"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "c3d12e5eb36ee8c1538db348dd30e09a"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "8a711c5edd7c9ea77cd55af84080418c"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "28f2dea33d46f3245c0a41b72f30adc3"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "0d5c7ba27e7145a72ee23688a4fcbb61"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "22f0bb1e787c368e9b03a6bb2920dcdd"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "68541cfc80aa4b539129799e96afffc5"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "7bb28d4304cba602f6659dc1babf73cb"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "781ecdafde14cd8554d57648519ea2bb"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "0d88affb53a774e29357a49de1ec68cb"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "f9f39a0aad3e4da1c2b58ee35f7eb90e"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "898ee3ce234302c3b68f067fc1cae2cf"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "32a7ab4d816485816be074a8d7e0d85a"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "3ac07533eb59e2e97b2224bc49286562"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "2bb59fd1bd36d1b6198c5607b76f16a1"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "7415695f00ed815afff52139955b3306"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "5d0f13e8c88536d9816cf5dcb55171ca"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c1f618e3664413115e08d1882423d622"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "38a5de14570d49b45a6979670ad0ee0f"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "9782940f2339dc06f76c9e567fb373da"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "03ee0c9a08800d6f8007633045fdcf34"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "c2faebc97d6ce24e4841fc9b15dc0744"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "fbb10139b8e385b0b073d562ca32a4c0"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "b089d218f538b98386241e587657c556"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "aa5ce5555cf6c66809b750235690765c"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "5afef24ff0888d8b05c2da91ef3c2dc4"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "2f8280b9758ea2e54a462dab773c8e20"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "da6b75bb72d322eb05fa124044739d58"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "32c812a3d215f3420a909c14276397b7"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "b59bf99b4261509f9dfcef014123d8e3"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "dfa7355339ed297d4f17ee055bcc1462"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "e73c0e5fdbc53b5963c6325064525b40"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "6a893903df789657f2c08cf1c1f2843c"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "80dd100d6cf9c9006521e01892ddbb2c"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "48a802d236556171650baa8731058c29"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "01ae2bf876ecf5bbc8703399bef4938b"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "a40ae16979dd78bd0767a4082bbbfcb4"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "de31845b1a9db5204eb7ab465d75981c"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "f12549bd62d8aef29ff946ba262baae4"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "4bfde056046fe8421a44e4d5b5d8a249"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "972aa8a1794675110cae0d7b1e0f5fc2"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "303e337cd3edfe056e13bfebda07b822"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "2d32e2c359c4560b734c076aec983ea2"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "21016f9bc08e145dc8f14800fd2d68b8"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "2529151fb65ed291b1b8742979cf4525"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "1e0bbd3d697320d14734416ecc42be80"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "4a5f54d233bcc3768f9c6d60691f60a0"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "3c43680144ebc8a42dbb6a05802e0af8"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "9c922930e7443b9e6886336fa0a7489f"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "864b2c0d3338012841e474d61d6c9313"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "d4cedff9992e48cc372ebef3e052928f"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "e0285c79b5c31c8121152194f6f8bbc3"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "b2c66cd70245b43f741f402d5c5221c7"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "557f9a9ce604e37fad79422aa7fbc152"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "9cfa3ca874b54df96c3428f1ed663dbc"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "d7e1c9ca9ec70f0c41b33c9e883ce5a2"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "7c1091511278f9d3fdf0eb97506c753d"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "cf90f6ca51b8bf28f4042dae462544fb"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "bf14ee242f59a0d2e838a05933a45de0"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "3c32752a50c5e7e933f2011a5b162195"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "677e0bb2fdcb22c5e24fa13b974ce8c7"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "90f4887b4d4b4dae67f0b8110424caaa"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "170bcd2fa53083a59249429bd10af69e"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "d8a097f37f93e619d9a6178d0611fa13"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "88cd5c84ff7cb3868df60d743609ef36"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "2d26bccc037662ef5c07f459f3e26cfe"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "20e977ed61e86024733a77d7500574ad"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dfe061e4c3558a998dc0c50439188e45"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "1b7e9daf7beb9a9914c46820395d76c8"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "af81759a3637e372f8eb02a14b7cc481"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "bbd319e58575bdf8a94c1d10a4a6412e"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "f49a20d733264bd7c7cdfbe1c75ece6e"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "6180699975330d26df1ae3d4bdac428e"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3f0d3940f737a2208f3913c41c1153db"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "ecacf38d21ec47019c105e77d79b8cb1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "ee75a544bcc6ad697818440be03ce5f4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "6620af8bde6a76b743f351d5769be8b3"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7defd83da06ca686fd38b74c59c2149e"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "946eef69be19101518cd0665c429febb"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "c379bbfe5490b9121823b0366cefd35c"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "4ca15d435c43ec9e220e6b79f9c3e1eb"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "5f19dfa1a36742c85f395d95f75951c2"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "727c7983e1b73d24a73f520f02cd63c1"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "4c082005dfe04ea1ecd5861da0e4acfd"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d1bbbcecfddfcaedac139cdca22843e0"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "9fbd5a2efb06db067d2c2e3bb9bd05a2"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "02a7dfae89360f1e23fe1ea50e5efec7"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "105da765d8ba15047823df7f801cba94"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "afcde6643b40a74f1b5d00d3708f618b"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "24c667167a68d4f36dead0cba4748fa8"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "226e377f005d669cbd19735c5e5fa9d3"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "dd9e5dcab1ff051165201b1daf5fa4f3"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "23447a74b0a49b507c45bcaaa9eabba5"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "d72d564c8b2ab9b78f03068a798b21db"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "224c022ec5d6616cd92dab74fbfd5547"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "b0231ba7e31b4b2848b2c3f46a6fe61b"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "b321a810dbc407101824150ba8706db3"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "f5bb48c6f78359da492cb7740d3b80b9"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "8afde9054cdbb167e8a137c3c9eab78e"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d350b333b652d41c58080e43e646e86b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a71548d8c2eb536ad8439643c1705e43"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "daa6dcbbcb5e0d0f13bb2da18fef6cdb"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "9e51730a765fa0a1d2f5d9566f5f3ffc"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "b46c3d6427aa50c3f5710ffeb99d3cb4"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "126b9c3d4d845ed760be296f148758f3"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "fda5f08eb509c387bcf7188ac4166a21"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "05f8e9d851e3ba9dfe65943e37e2c434"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "319ee267584a4ad9a40e5b1f5cceb3cb"
  },
  {
    "url": "404.html",
    "revision": "4174d70c9189942ff8a016ea74ca3a85"
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
    "url": "assets/js/100.bf663e68.js",
    "revision": "37bda28eae8b72c61e63677d7504c5b4"
  },
  {
    "url": "assets/js/101.4cebbcc1.js",
    "revision": "ef4cc2c049de398ec7a99011df737672"
  },
  {
    "url": "assets/js/102.32da362e.js",
    "revision": "f5a4a123e4fd5da415866e4e918965dd"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.f47de549.js",
    "revision": "a3adf34cadf1b9eb5db089b0dc93683d"
  },
  {
    "url": "assets/js/105.460c6aca.js",
    "revision": "540437c93d1cb7cc1cf47ab9f0018b39"
  },
  {
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
  },
  {
    "url": "assets/js/107.a6aae5a0.js",
    "revision": "44a5912a0f69c3a032268863ff3b4523"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.a86ec105.js",
    "revision": "1cfb055d4009d0c93c0763f8258d7c6a"
  },
  {
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
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
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.ab93e486.js",
    "revision": "437a30762c842a43983140d58a6c204b"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
  },
  {
    "url": "assets/js/118.6aaf5404.js",
    "revision": "a1eb400022e51711f03a6628ee8f4001"
  },
  {
    "url": "assets/js/119.cbaab0a9.js",
    "revision": "a3518a7d95a8a45d7a4174dd3f458316"
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
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.f952fe85.js",
    "revision": "78886b841fd01e832825f6c1e9cd431a"
  },
  {
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.a71466e4.js",
    "revision": "12e8c245881b0b8f80477443e9fd5089"
  },
  {
    "url": "assets/js/131.124a7c56.js",
    "revision": "1a22a36e66d259835ec947a7072026e5"
  },
  {
    "url": "assets/js/132.79b6cd3b.js",
    "revision": "f68738cebc673d1f59a6e67896521e7a"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
  },
  {
    "url": "assets/js/134.882aa6b4.js",
    "revision": "0413a103a24ae6ef2efc81c19e298f82"
  },
  {
    "url": "assets/js/135.4660c819.js",
    "revision": "5c2f18743ae247720e39fc67b63b1170"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.f256fbf6.js",
    "revision": "66364b8458414bbb1613b8d81096fbaa"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5bbfe20f.js",
    "revision": "ef3184ddd3c8af4e79214f3c79705e00"
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
    "url": "assets/js/144.b1d46a34.js",
    "revision": "955a378b09abfffa2e00a90c63ccf176"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
  },
  {
    "url": "assets/js/146.47102848.js",
    "revision": "38351577a2eabcd2c795315c89014519"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.95d4d59f.js",
    "revision": "a4a0a2247e38ef078e3c99a2d8fd58af"
  },
  {
    "url": "assets/js/149.8c2a7f97.js",
    "revision": "5d01a40143f8f9b545ed935335c0a998"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.4ee3f1d2.js",
    "revision": "32a352dfb62b66d1d9e32824651fad18"
  },
  {
    "url": "assets/js/151.d3cc4e10.js",
    "revision": "d13dbea8ec280d1568644e4f2d9f78bf"
  },
  {
    "url": "assets/js/152.e244b19a.js",
    "revision": "72d7f782fd0ff973d0efdb957ff58db1"
  },
  {
    "url": "assets/js/153.7868c2b1.js",
    "revision": "aefe44b88440025c275f5d704621284c"
  },
  {
    "url": "assets/js/154.5e2b3e71.js",
    "revision": "95f82a99e568207083ef42a1749e29fc"
  },
  {
    "url": "assets/js/155.45a80ad7.js",
    "revision": "eb9c07c5b3272fa1894ce3b6c9d30d66"
  },
  {
    "url": "assets/js/156.b5b02682.js",
    "revision": "7f4ab057c14231ff76d9a31062683639"
  },
  {
    "url": "assets/js/157.33f61009.js",
    "revision": "b6fbd34551008e52b4f8160921a81f1c"
  },
  {
    "url": "assets/js/158.4499656c.js",
    "revision": "07027b9493e1c57efac70e7881090715"
  },
  {
    "url": "assets/js/159.0cd06163.js",
    "revision": "1a838a474a36b5314f712edb60886e85"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.995e07e9.js",
    "revision": "ce58799ab53579b56aef3126f386e451"
  },
  {
    "url": "assets/js/163.11e7021b.js",
    "revision": "c0b638a160ebe406d6c0399a92e0ed38"
  },
  {
    "url": "assets/js/164.a5bcf745.js",
    "revision": "065ff9c374a18a2f846697a0c56eec83"
  },
  {
    "url": "assets/js/165.222fd72f.js",
    "revision": "cc46554acb2080abc9ad117e6b5ff120"
  },
  {
    "url": "assets/js/166.39eaa60d.js",
    "revision": "2eca552a98e784baa8f5a0722e40abcb"
  },
  {
    "url": "assets/js/167.f9d5b81e.js",
    "revision": "8af1e7660f88edaeae243fb52a180de7"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
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
    "url": "assets/js/170.d508c3ac.js",
    "revision": "3cb34fd99c34f963ba5aae9978c5ac4c"
  },
  {
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.2964329e.js",
    "revision": "82175ddd703ba3b05f5e86c3aa5a1f1d"
  },
  {
    "url": "assets/js/173.4227ec6d.js",
    "revision": "7487f2066c9c633ea710592e7e89499a"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.19ea7062.js",
    "revision": "bde108b7449f089b204e4ad95c712b2d"
  },
  {
    "url": "assets/js/176.b37a4e5c.js",
    "revision": "ed52cfcdfbeb70f41dff20b8acf59ae9"
  },
  {
    "url": "assets/js/177.ba483307.js",
    "revision": "32c77803c5e6d4783c27e000558b2d4d"
  },
  {
    "url": "assets/js/178.a6cbcdb2.js",
    "revision": "b18b027f8e59d04d373946ca5d91752d"
  },
  {
    "url": "assets/js/179.e8648438.js",
    "revision": "46a0c5a65124a0a8da29b271e3046fc5"
  },
  {
    "url": "assets/js/18.cda7511e.js",
    "revision": "7edce51b8dcfd0cf651bf6b33ea7b136"
  },
  {
    "url": "assets/js/180.8e642e38.js",
    "revision": "5fd1452bdb89d7937716e0f79677c2ae"
  },
  {
    "url": "assets/js/181.f1ab3b32.js",
    "revision": "6056f9e8b805b0f0d97fffb00aeb8ef7"
  },
  {
    "url": "assets/js/182.0699f3d6.js",
    "revision": "16fa4f153604d34c0d6499349bacb610"
  },
  {
    "url": "assets/js/183.520270d4.js",
    "revision": "9f0396fe6ec3fb86ea74e979a3deb7d8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.506de468.js",
    "revision": "fdae0192fd561091bd7272cb6570d341"
  },
  {
    "url": "assets/js/186.d9ee0ee8.js",
    "revision": "4e41ab36f341f60f96a4f1ca0c23af19"
  },
  {
    "url": "assets/js/187.8c7f459f.js",
    "revision": "614cdd5bfbaa24342cce884a1acd8acc"
  },
  {
    "url": "assets/js/188.c463a603.js",
    "revision": "0802b2de7b39e53777e9c4f9bb43d89d"
  },
  {
    "url": "assets/js/189.bc1f6825.js",
    "revision": "269bb42a978d27b7a768c6fe20baf0f3"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.640683b0.js",
    "revision": "1da7cd3bd5e3e05d94325d45f19b7564"
  },
  {
    "url": "assets/js/191.fac77b20.js",
    "revision": "f8a58bff70ca49a001e9502215dd7474"
  },
  {
    "url": "assets/js/192.46a4cfa3.js",
    "revision": "6f392065e31af96c245ae48a6fc79dce"
  },
  {
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.dd8283dd.js",
    "revision": "e17a528386fad36321f7947f3f72e23b"
  },
  {
    "url": "assets/js/195.eb48805d.js",
    "revision": "65d661836810d2f70bce4b117f468fec"
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
    "url": "assets/js/200.c0b57e96.js",
    "revision": "6a8263b6ce56d79a7fa010da9e599e5f"
  },
  {
    "url": "assets/js/201.c46dc03d.js",
    "revision": "3556049a86ef991c4219e01502536d2e"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.1d135f74.js",
    "revision": "ff42921acd0c354be7505d023202cde5"
  },
  {
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.6e42a2de.js",
    "revision": "2ccd80c16825ba77ca8538af00312115"
  },
  {
    "url": "assets/js/207.b63ace35.js",
    "revision": "05960f7272114bd172263c7171ee34b1"
  },
  {
    "url": "assets/js/208.0584a09e.js",
    "revision": "288eaf3c722ffd4a08e14486a963f514"
  },
  {
    "url": "assets/js/209.5e633625.js",
    "revision": "a7cd8f86b1f27c62ea6d5f286d925083"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.eedf1c92.js",
    "revision": "c69f7399a3a453db3aeec0b02f3e9784"
  },
  {
    "url": "assets/js/211.c1df8eb8.js",
    "revision": "cca2134bcfc72459943fbe0d02ccf14d"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.abad5943.js",
    "revision": "ca3859333a1a8522ca279deb99505776"
  },
  {
    "url": "assets/js/214.ba063ac0.js",
    "revision": "8c28484719678451aa9c0a696dc33057"
  },
  {
    "url": "assets/js/215.b2e1395c.js",
    "revision": "2454b89fc7d2f7c431a5ea207def88d1"
  },
  {
    "url": "assets/js/216.574261c2.js",
    "revision": "4e6192a2ccedc3be08abefd50782e7da"
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
    "url": "assets/js/220.224f6f03.js",
    "revision": "7218121fb9180cace5d867d45b1bf860"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.c1a8e675.js",
    "revision": "f6ad56f28ad5fed371b424d13d9ca000"
  },
  {
    "url": "assets/js/224.03807f46.js",
    "revision": "67dce21560014b48b6b9d20e6773bab9"
  },
  {
    "url": "assets/js/225.d64bb920.js",
    "revision": "21e199c6982e07f5a3f1e6b3bf23c033"
  },
  {
    "url": "assets/js/226.f2ba1c42.js",
    "revision": "1609884bde661eaa17681dc1f34823d7"
  },
  {
    "url": "assets/js/227.18bbe3b0.js",
    "revision": "097b03d3897497fb145fd6c7a585b263"
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
    "url": "assets/js/230.96677767.js",
    "revision": "7ad96d28870c05d048a893bf676305d1"
  },
  {
    "url": "assets/js/231.60aa2626.js",
    "revision": "a1f0fa15e3524dea9be1f25c9ed72ea9"
  },
  {
    "url": "assets/js/232.8419a5ad.js",
    "revision": "f0f5fe30d2ed1708763425ff6260e607"
  },
  {
    "url": "assets/js/233.0a436ee6.js",
    "revision": "a3c8a6caa7c76d595aad47df236e2292"
  },
  {
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
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
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.0cf98306.js",
    "revision": "5541d6064169f423cb3a4d3d8d75abee"
  },
  {
    "url": "assets/js/242.dfdba9dc.js",
    "revision": "0920bac067bf802a120986d8a9194028"
  },
  {
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.fc437d09.js",
    "revision": "1084bb2751e25156758661e00e3ca72d"
  },
  {
    "url": "assets/js/245.92321c8b.js",
    "revision": "793e7e7825fffe3f6583520070ab2530"
  },
  {
    "url": "assets/js/246.30577e9e.js",
    "revision": "61fe378c93fdbe82573dc3689b780720"
  },
  {
    "url": "assets/js/247.f2f006ae.js",
    "revision": "2798434c9f658465bbc45e511051376f"
  },
  {
    "url": "assets/js/248.745c97cb.js",
    "revision": "b347751a8b6f23e2f07906a34dcf5b98"
  },
  {
    "url": "assets/js/249.fc07b7d5.js",
    "revision": "2e76e2bd5ff552146cc8d071645a22a8"
  },
  {
    "url": "assets/js/25.d93d5a37.js",
    "revision": "5810a87154f8e47a47ed562e68b45b94"
  },
  {
    "url": "assets/js/250.79170478.js",
    "revision": "a4648440ec53e7c8e00ac56ba57288c7"
  },
  {
    "url": "assets/js/251.a27bf773.js",
    "revision": "c0e02ff3f896890c6a05f08fe3011a43"
  },
  {
    "url": "assets/js/252.1ce83f61.js",
    "revision": "523de023664f77d338ccd25145423773"
  },
  {
    "url": "assets/js/253.3c813d71.js",
    "revision": "2ae62d975140c20dc2f2273e6201603c"
  },
  {
    "url": "assets/js/254.f2752ba3.js",
    "revision": "997309ae212089205e5b0d265f21a60b"
  },
  {
    "url": "assets/js/255.8370a1e7.js",
    "revision": "cb454d0c924ee2541e6eab2acfee002d"
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
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
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
    "url": "assets/js/266.1828efad.js",
    "revision": "f5806f6ecebb3ab2e896ab9c124f643d"
  },
  {
    "url": "assets/js/267.bec5e63e.js",
    "revision": "b8c6653895b5f2f8adb7c094e27504e6"
  },
  {
    "url": "assets/js/268.f1b5bc2f.js",
    "revision": "4eef7ddb8599510617a461ea690f61b3"
  },
  {
    "url": "assets/js/269.aa6af161.js",
    "revision": "213849a3e4cef331f69958524fa8bc4f"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.a4054e45.js",
    "revision": "2749ebd05c6bc16633dd113f6cad060a"
  },
  {
    "url": "assets/js/271.965ef2db.js",
    "revision": "128a12cc8cdab4d443f65beb892f681d"
  },
  {
    "url": "assets/js/272.461b7123.js",
    "revision": "cf9248240d7a56e8932d225881da407e"
  },
  {
    "url": "assets/js/273.3f13aab5.js",
    "revision": "214708b33a60eceeaeed2829f39e402f"
  },
  {
    "url": "assets/js/274.ad81f40d.js",
    "revision": "3196615d9dba79d9e32df8daec057c8f"
  },
  {
    "url": "assets/js/275.afb3444f.js",
    "revision": "74487809ad28166a762e9a011709d08b"
  },
  {
    "url": "assets/js/276.1bd6217b.js",
    "revision": "27dd3c7864694a10dfc79235bae1c376"
  },
  {
    "url": "assets/js/277.0d6cd0f1.js",
    "revision": "a8033b46cffed1b13996b8b18838a443"
  },
  {
    "url": "assets/js/278.1e2ebb2e.js",
    "revision": "771ba4c70a86e07341c6d68ec2c9b3ff"
  },
  {
    "url": "assets/js/279.7e856a8d.js",
    "revision": "aec816ed24bc4d517d906ca86bdd721b"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.ecbcd83b.js",
    "revision": "56830a8a76ff7e6aa29642364edae360"
  },
  {
    "url": "assets/js/281.8a22dc1e.js",
    "revision": "5f83ca9e3b10eb269d0e2d753e1e2ab5"
  },
  {
    "url": "assets/js/282.84240ef9.js",
    "revision": "3390adb117b7a6a36638eda67501998e"
  },
  {
    "url": "assets/js/283.e0d1c975.js",
    "revision": "92874f7f6048ba432737e990ef441d0b"
  },
  {
    "url": "assets/js/284.79291a32.js",
    "revision": "abe6d931d4d42e4fc6d66f7757b66402"
  },
  {
    "url": "assets/js/285.f5fe83f1.js",
    "revision": "fdff6089f82af6de1301a5c77749a2cb"
  },
  {
    "url": "assets/js/286.be651dea.js",
    "revision": "893b1029a9ffb80b7664dd01851a1f28"
  },
  {
    "url": "assets/js/287.7a81a7de.js",
    "revision": "9abaa14b23295021fc9b81db7c29b75b"
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
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.037ceed5.js",
    "revision": "f9f6ca5e495ed206d9c09aaf94273d6a"
  },
  {
    "url": "assets/js/291.e5ad4f79.js",
    "revision": "88766146bf99941712d9b68cdcfd09c2"
  },
  {
    "url": "assets/js/292.4965e398.js",
    "revision": "2c47ebeb5ae0f010f7d0a8d833f5293e"
  },
  {
    "url": "assets/js/293.5e7c162d.js",
    "revision": "c1867d22a9c9abf6674a260c32b5d023"
  },
  {
    "url": "assets/js/294.a70c5b38.js",
    "revision": "83335de0154139e76376fb7e35ee9527"
  },
  {
    "url": "assets/js/295.719ea88f.js",
    "revision": "da5254c7c67faea861fa945f4c97a42b"
  },
  {
    "url": "assets/js/296.67b685bb.js",
    "revision": "26a8f0bc0955471b01bf048bce86c72a"
  },
  {
    "url": "assets/js/297.002e2066.js",
    "revision": "ae98b1c1c202bdeab5baa7e91c9e397a"
  },
  {
    "url": "assets/js/298.2c1845e6.js",
    "revision": "d84622cc265265e6f325e972c3b69977"
  },
  {
    "url": "assets/js/299.c60c6e40.js",
    "revision": "d430fd8e7d2c95daf5cd8c8ca164af1f"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.df842c8f.js",
    "revision": "a21c5f4f49fa6b33f88976beea7efbde"
  },
  {
    "url": "assets/js/300.2c589bd4.js",
    "revision": "2b08cc10532ec883a67212b18dc4d824"
  },
  {
    "url": "assets/js/301.07982c55.js",
    "revision": "0f7b7e6157ecafdbe0375a75f4c549a9"
  },
  {
    "url": "assets/js/302.f56715e1.js",
    "revision": "3c2da7b3a92e06f8a2f3498fcd2bc92f"
  },
  {
    "url": "assets/js/303.6b7f1f5f.js",
    "revision": "93fafd4275a7575662882b2ae5ddaddd"
  },
  {
    "url": "assets/js/304.92e23ec2.js",
    "revision": "806bd0193c1204ce67c042f420c5d6cc"
  },
  {
    "url": "assets/js/305.6ac1fb97.js",
    "revision": "ee2adaaa2f7183a7ac7f604058e7a681"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.e7ab4aa7.js",
    "revision": "54e3ebcab9e34b8d0f22db94ea9dc9f4"
  },
  {
    "url": "assets/js/308.d962709e.js",
    "revision": "a7c73a2c6e5f501cb654addb01288d8c"
  },
  {
    "url": "assets/js/309.961c58c8.js",
    "revision": "90d3d618ab6e7e6e3b4e6a5c9e5b57b4"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.a5a40518.js",
    "revision": "565f26e49111529baf7b5a8a13254035"
  },
  {
    "url": "assets/js/311.8a25a8d0.js",
    "revision": "9de4f859c50c0977a085fa3b4a93e7fe"
  },
  {
    "url": "assets/js/312.1df1d2bd.js",
    "revision": "6bf71e751b264d40df8e5570070a34eb"
  },
  {
    "url": "assets/js/313.2702785f.js",
    "revision": "802aa8ba6829c9639bc06a9474244c04"
  },
  {
    "url": "assets/js/314.12ea87aa.js",
    "revision": "b166ae27e3d81a52fe18686d970b16f0"
  },
  {
    "url": "assets/js/315.beee20ad.js",
    "revision": "4d6affb1d1216d7108433760b76bd194"
  },
  {
    "url": "assets/js/316.3c3ae67f.js",
    "revision": "4b4790663cf95ffcae9405d6f33a1104"
  },
  {
    "url": "assets/js/317.80d65d01.js",
    "revision": "af37c8afa5bd984ad9b1768a3b9e8ea4"
  },
  {
    "url": "assets/js/318.4523b53a.js",
    "revision": "95c5dccd28f9036c3bf77274bcace1c5"
  },
  {
    "url": "assets/js/319.b1e24fd1.js",
    "revision": "13c02b2f05c6abc896e96236e9e8a7b7"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.ee3a4c7f.js",
    "revision": "8355c436c6526cbb986594e932a61e69"
  },
  {
    "url": "assets/js/321.1a0a1ea2.js",
    "revision": "29fa6e254ce956031167f8fdec215a5f"
  },
  {
    "url": "assets/js/322.b8152af3.js",
    "revision": "923bbbd22f057aa3bb26458444726957"
  },
  {
    "url": "assets/js/323.ff3da071.js",
    "revision": "53a59fa94e1773ba5736635d422f7a8f"
  },
  {
    "url": "assets/js/324.84141b0a.js",
    "revision": "c8e13b213bd2f5880219800e0165515a"
  },
  {
    "url": "assets/js/325.43dc7651.js",
    "revision": "416859dbaa6a17343b9d2c26f3647670"
  },
  {
    "url": "assets/js/326.5d1f5f3c.js",
    "revision": "2f979ed9c4712638aa4f2e9d8dcc9a82"
  },
  {
    "url": "assets/js/327.b30070f3.js",
    "revision": "bd1090ece2abd6a1aaa3592501c463ed"
  },
  {
    "url": "assets/js/328.9cabcc19.js",
    "revision": "ff6f0d21396277eedfd0846a993af390"
  },
  {
    "url": "assets/js/329.7f663d22.js",
    "revision": "2cc53a36a116db498828dbedda82e8d6"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.c374cfb8.js",
    "revision": "4ff2bd1782979d0ed8550343817fc46b"
  },
  {
    "url": "assets/js/331.50c5b7c6.js",
    "revision": "0d8cf0fb44330c4e6a8b025bf3dad46f"
  },
  {
    "url": "assets/js/332.2e23293e.js",
    "revision": "d8c36366ce44948cd6a35b43e64f1e08"
  },
  {
    "url": "assets/js/333.cdfd4210.js",
    "revision": "b8c88ae14701a4c7bbaaf362cb3f2356"
  },
  {
    "url": "assets/js/334.a235ec58.js",
    "revision": "58a0d51e69acd000d908143e71c8c301"
  },
  {
    "url": "assets/js/335.735229fd.js",
    "revision": "3f051066b937390a1254a0ed0edcc828"
  },
  {
    "url": "assets/js/336.2f22cc8c.js",
    "revision": "98a6988bcfd558155a194d7bd7305de7"
  },
  {
    "url": "assets/js/337.99ac963f.js",
    "revision": "f6786f4784a5544b991b0318c82549ce"
  },
  {
    "url": "assets/js/338.5e80338e.js",
    "revision": "e726e0c1a3ad8bd1a5a27ccbefddf38a"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.1c889dae.js",
    "revision": "967e2c4426f5b1ca51b0fe01c40d5e2e"
  },
  {
    "url": "assets/js/341.2774d5cd.js",
    "revision": "5d12c12be2055ce5ddf261377ad7896b"
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
    "url": "assets/js/344.58a1dc46.js",
    "revision": "3a7a472ce2c410db63caf7999e2f7dc5"
  },
  {
    "url": "assets/js/345.7e813157.js",
    "revision": "022d8bfbbf85f8aa7a67179687f5ed4a"
  },
  {
    "url": "assets/js/346.9b3f0454.js",
    "revision": "08f8692bd48d92373403d0db7745c3c6"
  },
  {
    "url": "assets/js/347.7735c47c.js",
    "revision": "d14bbc8cabdd48d25573e83d85b6fe06"
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
    "url": "assets/js/350.78915a8d.js",
    "revision": "6e1f2165dd46f617c37e53dce5d9feb7"
  },
  {
    "url": "assets/js/351.012d5c3b.js",
    "revision": "81a5b00ad5fac31e34ad059852fda65d"
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
    "url": "assets/js/354.83d88dbd.js",
    "revision": "18691a20dc4b3d2125708fb3370f22dc"
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
    "url": "assets/js/357.72bed9a9.js",
    "revision": "dbf9880ba428d81c9da4f718f77bf743"
  },
  {
    "url": "assets/js/358.af7d804b.js",
    "revision": "6136c21a30104da8013afe395eac1c9a"
  },
  {
    "url": "assets/js/359.7673d084.js",
    "revision": "7916875272621ecc8e889bc7f0c83f34"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.0e13ac9c.js",
    "revision": "bcc6ea9005cd8cabefc4ae4169c69184"
  },
  {
    "url": "assets/js/361.0d32835c.js",
    "revision": "cf15729f4a4e11d772d734013bcd8e66"
  },
  {
    "url": "assets/js/362.f37fd0c0.js",
    "revision": "ff597b1ee76eb2dd09b66d359efb188a"
  },
  {
    "url": "assets/js/363.61ddb93f.js",
    "revision": "3107c1ff0ad8b3cb8af6494e81dc77c6"
  },
  {
    "url": "assets/js/364.3542e765.js",
    "revision": "0fd83a5e88a73b59fa9e1d9b15ca8a46"
  },
  {
    "url": "assets/js/365.99aa6e77.js",
    "revision": "fe4b367f4984cbb0f3ca76ab760814af"
  },
  {
    "url": "assets/js/366.60142ed4.js",
    "revision": "fd32560f65d21440d3a5de852d048aca"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.225865e8.js",
    "revision": "804d2626a8f195ac3833743fbadf0096"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.31289eb7.js",
    "revision": "72184a5a871d6ce555ea56059cc16b18"
  },
  {
    "url": "assets/js/370.c72c426c.js",
    "revision": "a92de3a75c4d08c6315cee4fae0939cc"
  },
  {
    "url": "assets/js/371.f8e30c66.js",
    "revision": "a745e534fb0ced9f25d69e3cde25b7cc"
  },
  {
    "url": "assets/js/372.e14f9ef2.js",
    "revision": "57acada5f463e9bc7b22efab32126d0e"
  },
  {
    "url": "assets/js/373.c1a36989.js",
    "revision": "68f4f91acc58a0fcda9af2740ac03779"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.5a8f90e2.js",
    "revision": "460262ac8577f65373ff11afe92e45ee"
  },
  {
    "url": "assets/js/376.8571700b.js",
    "revision": "58014f0cc07655c23c0a18ee638c7bf1"
  },
  {
    "url": "assets/js/377.89c35a8d.js",
    "revision": "1db0924356fa199dd168099b31789d07"
  },
  {
    "url": "assets/js/378.93c7ea69.js",
    "revision": "3a53466eddc66b7dd87cd9c601468f88"
  },
  {
    "url": "assets/js/379.3cc1985a.js",
    "revision": "7faab2adeb6246a26016089161441bff"
  },
  {
    "url": "assets/js/38.b3248d12.js",
    "revision": "d9431e029846f26a0abd43c80bf7213f"
  },
  {
    "url": "assets/js/380.cc4069e1.js",
    "revision": "2a33dcc7c013a20f09aed393d98a396b"
  },
  {
    "url": "assets/js/381.ebaf4733.js",
    "revision": "ff6112725afb9cf93529727acd830f6e"
  },
  {
    "url": "assets/js/382.6a53577a.js",
    "revision": "f46089d5d23b77c59e76399e0cfc9bd8"
  },
  {
    "url": "assets/js/383.7790e50c.js",
    "revision": "8604923aa215e952ce5853f01fadda66"
  },
  {
    "url": "assets/js/384.331a6d4b.js",
    "revision": "f7d31c4a3228cd8c17e61f7148a0af9f"
  },
  {
    "url": "assets/js/385.2066c04c.js",
    "revision": "503cdd3cde20a86dab584d33703a02dd"
  },
  {
    "url": "assets/js/386.3a955403.js",
    "revision": "62d9d77c833ea7025d40aac85f1f6152"
  },
  {
    "url": "assets/js/387.16c22260.js",
    "revision": "7448647369593238c73e6a608fd3405a"
  },
  {
    "url": "assets/js/388.8944305d.js",
    "revision": "0cbc6fd6c9d757fe34fb6813479207ed"
  },
  {
    "url": "assets/js/389.9c1c16b3.js",
    "revision": "d1a8acfdd62a758bd1c4b28cf3595cd9"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.60877b8f.js",
    "revision": "bf68a2be08bc9a4867567b9d01a1a872"
  },
  {
    "url": "assets/js/391.ad4d6696.js",
    "revision": "eb885c27a32e670cf982171185ddf085"
  },
  {
    "url": "assets/js/392.db1436a7.js",
    "revision": "c5de3dfcf66197f2ea6b9167cbd13fbb"
  },
  {
    "url": "assets/js/393.b894d3ae.js",
    "revision": "dacdde9ae9198ae1045f5c04fe6cce9c"
  },
  {
    "url": "assets/js/394.2b0b3a17.js",
    "revision": "7d0ab4924eac1b11ddebdb2992673dd5"
  },
  {
    "url": "assets/js/395.854b232d.js",
    "revision": "51a2dbc94cec6e81c9d52966e62815a8"
  },
  {
    "url": "assets/js/396.7f901091.js",
    "revision": "ce4e56d601e36d2c9e0912f3ef3cf287"
  },
  {
    "url": "assets/js/397.d29e33bc.js",
    "revision": "5eb788ede7c36755e53a391ddabd8216"
  },
  {
    "url": "assets/js/398.251637fe.js",
    "revision": "aa7521e60bd80e9b696d90cc5b232b8f"
  },
  {
    "url": "assets/js/399.f5d50a50.js",
    "revision": "7e16b7ae609dd35d632e4f3eab396265"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
  },
  {
    "url": "assets/js/400.99905d46.js",
    "revision": "d6800caeb1632161606aa746b8df4284"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.ef1b43df.js",
    "revision": "f31f6beaa82e1a28956ab888b914912e"
  },
  {
    "url": "assets/js/42.a9556851.js",
    "revision": "c1e3b548d881e4e5132839eb94242d0e"
  },
  {
    "url": "assets/js/43.e2bafb64.js",
    "revision": "0a864c74ca0e571b84b9a803ee78e293"
  },
  {
    "url": "assets/js/44.731e2f92.js",
    "revision": "cbc60d9bd8ec03e83eb963a25ba10c6f"
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
    "url": "assets/js/47.0aee6c62.js",
    "revision": "44747642ec63ee99be4e1421a4e394ac"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.d068bcea.js",
    "revision": "c4885bb92b0e9d857a1a4e9cef565547"
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
    "url": "assets/js/51.6b575d6c.js",
    "revision": "8a6fa127e2d024430badafd3c58eec08"
  },
  {
    "url": "assets/js/52.bab62c42.js",
    "revision": "14536939bab85f8997b5cfdeb867a588"
  },
  {
    "url": "assets/js/53.9fb76d08.js",
    "revision": "7ad11456acd3a3cb7656295c2d6370df"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.55864510.js",
    "revision": "8613993e1060bf538606e6ecc34e5a06"
  },
  {
    "url": "assets/js/56.41450bcc.js",
    "revision": "e99071246da26198885622aada262253"
  },
  {
    "url": "assets/js/57.7d1a10c1.js",
    "revision": "8d3e924cf2f0ca134a255bc9696b0ab0"
  },
  {
    "url": "assets/js/58.2a22ddfd.js",
    "revision": "5ec2b9c18b7cfc75f66e67d1610fa615"
  },
  {
    "url": "assets/js/59.9236f2fa.js",
    "revision": "109d1628d2263fb12a90d483d62267ab"
  },
  {
    "url": "assets/js/60.72db62c1.js",
    "revision": "b12fd54069bc071e50ee8a902d7a39a2"
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
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.2f574911.js",
    "revision": "288acfe329fa9fd56731ff4eb716d07a"
  },
  {
    "url": "assets/js/65.9ba8db52.js",
    "revision": "9d5e5920e7a6671840700123cb0230e0"
  },
  {
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.72306453.js",
    "revision": "1499f0e155b3ffffb0b7987138542d4f"
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
    "url": "assets/js/72.5013ac5e.js",
    "revision": "ee7f8b8d93f9f26e9886d244b9faa2a0"
  },
  {
    "url": "assets/js/73.6931c73e.js",
    "revision": "aef7edeadd72f0b9449b5088be754e1d"
  },
  {
    "url": "assets/js/74.efe1e833.js",
    "revision": "b9a87d98a112541feb6a7830ab9ba17c"
  },
  {
    "url": "assets/js/75.36eaa40a.js",
    "revision": "d6785154926b55f3acb4857cf4cdd67a"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
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
    "url": "assets/js/79.988c00af.js",
    "revision": "f73d74c7371c64089bf709fab8ec566d"
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
    "url": "assets/js/82.f41beff7.js",
    "revision": "e082af291f9363bbb24a2a3cf95d253e"
  },
  {
    "url": "assets/js/83.7e287636.js",
    "revision": "0d97f6c15d3ee66e1a3f80291e8c1252"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.9f70be58.js",
    "revision": "f03fe93abb6790655062119cd2b79949"
  },
  {
    "url": "assets/js/86.4c1c445a.js",
    "revision": "0757dc465c33502d7b1d3039d2535802"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.34803ff2.js",
    "revision": "bfc05738d9fc62680138c2e84ae22b8d"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.bde9dd31.js",
    "revision": "c689e2cfa02d0647534c4ced3f73ee94"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
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
    "url": "assets/js/96.2abe4e10.js",
    "revision": "649524f4758dff4e075dd7b3b559bc58"
  },
  {
    "url": "assets/js/97.79f84fc3.js",
    "revision": "447d5e141668f4aa9f8a7d66b8d521fb"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.5d0277a5.js",
    "revision": "ecd45cff82ee3b33f4500eb05d545128"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "dd746417a827a636a8e67a7fcc4c619c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "e774a621efc5dc8d2d1c4159b0d4ba2a"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "303026b372ee0cb8ef46318d6889d09b"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "edc11fb78ff7b6d0a20675f7a70d8c8d"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "15d4b7c9cc00e712f3a658ea1084c643"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "2ed138bf9299544fa840a8becf8f7dcd"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "136a1b03fe0e7889c7b5f2534a4a45e8"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e46daf4292588e280027cf37b03ac970"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "b63447229e991c079dd184466e460d06"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "92263d49c2d97562e6dd234734ed80cb"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "1b9cf2942e0ab4c1f67d7d7352858a81"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "41b762df1181b053a37d290a685fa917"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "a34eb45c60d20b5e3a365d279c370df4"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "53f857b3bb4808372df6756af7a6b354"
  },
  {
    "url": "master/api/index.html",
    "revision": "b70bcac8bf2a8fd4bdf3050906deaaf2"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "da1fe8aee593427ee9f73c7d21913b20"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "407781bd8c15e8d7dc8708b4270c8d09"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "77e3b02a8a91a5b1a74a5c45d0e0d508"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "93518a33478cf3f72f4209199583d2e7"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "85e7066eb2eb37312af647946b9cfcff"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "9bf2e40119a2f2ef492f1789ad9b5136"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "202d4baaf74fa5f8aa403717391fba7e"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "dd31a0aecb5fc90745179692f509834d"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "fadffc3f338fed050b65c04e8090006f"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "f410427bfccec55a9b3af18d75a6edb4"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "f08d102b61b0eb6c72726f8a7f937697"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "0b82d38766e9cb0037e2c4477b715966"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "219354794a871a1bb32b3f750f2bff09"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "98d9c96276c0e13777642070dd91bcc4"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "c41fdd38f970484b19ac0c455397fc28"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "bc2d4ffd2afa077a2445eecd5fa69869"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "33fa815cdfd5eae88b3011b4034346fb"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "7b350e71638fa1a635749a39fbbc9ecf"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "e7f215c4aba1a415d57d89a7a07619f0"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "ea1a9da074bfa6d1b96b6197b3d46905"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "0ec1c86c3df5af907a8de29fd4980b05"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "53bf28438b66adabc2000a0c82311407"
  },
  {
    "url": "master/packages/index.html",
    "revision": "cc2c862dd8cb2aece4da3e4063148a7b"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "ff6d57695af20b0deffafa0f4cda47c6"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "d035c5a70793b4eb404435fd0b589191"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "77b266bd5f12c745b2caea8680ca1142"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "bbfb9806c28b77167ce4b8951e41de66"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "bc8134a5eade0e4e9d082b5647f90c63"
  },
  {
    "url": "master/packages/views.html",
    "revision": "846172708408f0b765f80117715c24f3"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "23517b649be18dc05d56b6c38167302c"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "9f95a0ff7f41f15bbfc409b85f2b2a07"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "98123b27150f5e6374bc39cc44c15aa9"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "51c190348258883afb50b61051d2a996"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "e816c0768bc01afbdc4b8a179156a779"
  },
  {
    "url": "master/themes/index.html",
    "revision": "dd74d3d25980e27b2c960f08c2df7554"
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
