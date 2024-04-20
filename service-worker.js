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
    "revision": "abbe8d6acab9326d67d71d6830111d86"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "5ffa53b95050fa122037ad08e17a565a"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "f6ec29f3ab5e628dab6027126ed57887"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2f99df08e6a6b193868bb1c88f1bb32a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "9b92a49fba9ca0bd444e5c304ecd80a1"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "813844c6ece2d8056f634bbd673caa55"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f473e1eef9740c0a03e7f144fa64d213"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b6d231387f7e0d2324f3f432554584f8"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "e5fbcd43715fa18304664407e3ac7c8a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "cf7d07fda3145f87e36dfcddc8167dae"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "37ebdb1cf449cdc99c908b43a3e8d655"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "a6f436a092b129f7731b045d14e42cd0"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "f5ed0a5575afadb264596ab8f87214b7"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "a51cf04a8ee5d76a7b41336814a1f874"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "9bf14d6e277ea05ec0ee7d7d50f471ef"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f3065ab89d7949b1191c3c5d02ff6255"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "3d95659be43e7b4c2ad5a069d42408b2"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "91a1ea709a29be4e46fdb14f1ea1ed2e"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "52880b5f744fe3ff071ebe76279812ee"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "854eb027208c2c07eab47f104dbe157b"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "0484e89a703c21c039698240c92585cf"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "6a32c354c2cb5acd9b5ef448fcc5066d"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "be0865bd98a82e37bac7c62ccb7cb74d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "bca0a3481772f108ed831861869ef134"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "45891079488fce4ff5a577b852bdae3f"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "cf1316dc5ea5814e2393e04a3f970d41"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d33cffdcb98ef45604f0dfbc930d65c0"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "1642690ca244470eb349be245f0089d4"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "9a4529ee82cf207b65ac0fcb6107de30"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "536f98deb3ffcb531357f85a400d6a8d"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "bbf2c95c10e90977610cdc3c4be8ba08"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "6ad9d35f0bf69f468aa097746e00d4e3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "547b62c3638c829168c8f70f21f454e4"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "82c4c67b75b1ac7cc2542f292c3a1725"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "d7c11b97003469b67a9ffde5b43de069"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "434b37bf2aa428c5ef9c2d535090f483"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "aaefdc481fa63f0abe12498347c37197"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "372e4ad98a65eb5c36400688f286f77f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "fc05925a4df1557c2691e0f35f2c5d7f"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "8b5cf38f7910bef415e1ed1a3bf3d5be"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5ed305dfb93dd88dc2366536201584c5"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "bd251472bf27f75e16d6c523ab473b98"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "3f27fb1278fe36df441afbcd76a8c7bf"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "4292eeea5f25b21157f7490999dc63cd"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "b8cce574757a99790fa5bc91300802e1"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "a9952fc50bb0c633d37b271a4e0400a9"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "5739c8c81bc317ea3ae187feb3d0a413"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "fa3389284bab0bcd5a4bd309d7f9cec3"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "5c6a6fe23ba525b141f312e7d3dbdacc"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "b5157b1d4ab44bdcade1928564410cc9"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "4d365b75d4565ffc14e9998884fa759b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "7eca1f101d9854b0b88f1a999fbd2198"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "52fdef690c219ca0df0db3c17a0f2936"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "bb3131f8b4ac0ced473890e6b6ec7520"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b7a52eb3e66a79b3a8f3f6295ab5f95b"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f462e41367aca8daaa55efa2cf47961b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "4f5e200d65d615f654a1332a8c0d9b5b"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "97bf8f6eade6af62a4cc0024b7c92638"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "94e5b9f7433516b8436a3bfe1064ece4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b005f40910e869d5530bcf808650cca2"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "c19d7a7f748cd973bf7658ccd3457827"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "79bf3c6324508e073722d6148e31c6a9"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "95a064b8a1b44503cf658e4a4a482839"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "acef8c722ddd1c5b0f485b0ac87825e8"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "40e721e71371b428b508e402cf0d1c0e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "627ad2abefc1f44f65beca3a56ac6fd6"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ca7c4e115ab961f3b3f4d108f8f9cb6f"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "07fefdaddfe29813bb89c42e8efc5f1a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8bda8f09f14d5f9bb10196402faf409d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9b23d346342d41d34ae3a5c0180a2bb8"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4de3ecfbf8fd1851f76cdac34627338e"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "63053e401a96d0f9229be2c262696f87"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "e93803fc584a737ba69ae044cbefa833"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c68998a2febe44071d64161f03d448d0"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "d5f473d55eef275859402d73c148b6d2"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "59dd5bf42688cb09731aa274a846b762"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "be0085c007f5f7a21c641c0b982a532b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "47a2e0befa030b82b05256e9c0a3a393"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "14970e5be8509b824ce4f93749e16e5f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "34cf15e661764fb262bb1085f2fd64c5"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "125c0e443ce88254d29063f32cdd180f"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "62858504e7a11d22d654455c90133391"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "adef12826e4bae421fd3f9bd738b0954"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "114adb4f1580bffdfb614ea9c710a4d8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "423b1dd9775fcaf4dab92d99f9419ece"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "f9c89c66aa93cc5594b07a915acd5396"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "6ac67d53d06d64b3490774c83fffdfa1"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "42cd7cb0e577ff62aee6a7319e29f4f1"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "187f8a8b8b86403c6750586d928493ec"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "c646d5412551623ff008d521a34ae824"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "42a7e1687c7c4dcf7d7e760e10ca6d40"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bb047043e22792f2346e2c4532f884f9"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "ea7d55323ca749eb678d5d8ae42a525c"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7c416e208d5a48e935744c9769b4b2a8"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "9d3895df0c6181d2547262474ab269db"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0b1fe00044b9bec5ce7c87468f46710d"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "228070c27e5ada4460c4ffab0613e450"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "7b72182da6935f2279bd0c0458276b7a"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "696c52e982e6378405cda725600eee5a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "07448c67a260fdd25d2918f58197dcba"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "63a1ceb5c1e6450159c192837e61913c"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "dad879ff802cd8eac4dfb65a52f8bf36"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "0cdccb1989d9cf3e3ed2cd89bc553107"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "41f2774c8177ffa55d228fdf32fdf3ed"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ac588ae5e3b60b0a8d2163318d3d4cb5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bbf198e1f9d86e41fc5d405e3cc26c52"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8269aac1007352536823e81fbe6e46de"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1cf809537673e384dd83ab75ca0c90b1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "ede39221810f58234c9ef1c806012c61"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ce443ef1df01f4f0811ab6f0234bb85e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "3dc27f4b91b1d0a08e72d199fca53b81"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "5dca5bd1928f250a6d0244b1c672dac0"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "7e5bc3d86c5617dd9ee9b6c13e67f115"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a89f5e662e994ce1035765e92bfe262e"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "8927159d1f86fe8f3c39f02afa426e1b"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "820f72aafe6c5670ca119dc599941dcc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1c0f5619ca94ec6f26592cab4f2093a3"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "12074b7cf9fe6578c4afd90741b173b0"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "08339cf6e305acb64d341a60bb166aa7"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "0ebecaa27143bc8390826959447bf647"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "bf132523a8873234e207fb826a4e4a9a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "5561607033d3646a3dde9f968261777e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0fdd58d6b1c9db694218e49e1cde2986"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "3bc0134fca39ac1549c24703fa37fa67"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "e7ede9b29f89428f65f685c218b6eb45"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "318aee7f8ff4401e0455e811890c705a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "56fce7a7e2ddc5095d8b83ba30cd77d7"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "b11cb5730279fe32d55f76163fa0d655"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "3ab2a453950624daaab9b1cc3168ea97"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "11dffa09900b9bb2c46f4748d9454bd9"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "610330a8697097c26c00fb31d70d451a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "1b796c373f1876b9843dcf0867736f27"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "1e2d3d910eee5e2fabc5a89f8fa21065"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "6795aaa63ff7dc776bd069ccabdcef53"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "7eb4a81e597f92a4d9abe41e5d5346cf"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "3fc6a9ca4916e9ca0e5bc6598c06b385"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "5d4e510619ef86511e655d06715dbfa8"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "cfef8f56e265665d075f7a00dd18e224"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ace2cdf4c89704a3d09bdc5d3d6073e3"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "155ddc504a8cfc98720f70ba22be0613"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "aa882ca47cf9e76444e668ca3648067d"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "b53fd1270805976f5e598ec06874aab4"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "cc7c4ce35a5daf176a35cd922cf0d444"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "f3dfd25c4b102321ea0afcfca47de86d"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "13ee3810e7d6076505366ea90be22697"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "eb7c954f0d7fd5f62f2b8806ab5b6534"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "15c5da20d55d21839e998d8e5e346845"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "392abec66af242877e318a0d9e633da2"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "c497c71b88500c1ceaaaa977f8dfd5d9"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "99c054fd71399b7e73b7815de6cd8c71"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "5fce404dca4a98f5c94fa0fc410f564d"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "83e65c5a4ad44298cece1d4faa8e8dd8"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "85ed127018a73c09c9e70941114549d1"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "eda9aad3dd1a229d4ec9e08a3f5dc135"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "ab7ee874d94eb077a96a5ba6f27385b6"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "ae9ab3b2ce5802d76149b41c809e1096"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "0fb2de5d1d39dc4fe3f106a8fc9e9a89"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "40b40d04bff8e2aa2f6673e988f71101"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "41daa1b7dc6788acbc8f5262fcbd0986"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "faebb5a5713be24b2ff29ba660ff39d5"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "78b8ba3b9858aeb9ead6778aff389de1"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "9ab1382a90ac6a1bbd868c727f901200"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "9f2c0a90bc8c02726d90a28a34d00653"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "ff82af6ec4cdf99907620d4fc07d6954"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "f8502bc2f1aff0424bb496f8e9527c1d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "068ab486794b0f4727badc58f2e117ba"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "4d174d6d4c894cf548bd832734618c52"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "31dda9572fec54f88918d5a58a2dea1d"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4bec72ef1074f9c155519907579bc8ad"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e130e28c0e083d8a495d3969da3dadfd"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "42618171fb697271048854e2b2c67f66"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "1c9a2a22426c6e46300afd3802df5bb5"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "38b714c212efb23251957f9748572856"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "d3b9fc38d9a309ec372b22f6234ec7a8"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "2d688da85f8f036de36864611d65f266"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "c2511b01e1c19c0753b972a7da1b0f03"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "d6356551fbd03993124f35a33c1a8ba4"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "4120dc7babbbaf6bdaabe7fa2c16042a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a05df4eab1429215d0fc36651296edf5"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "065af62052dd7751fd4bcfb0199bb32b"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "e132c9f7b552e3297071a3ab8f0b4264"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "2deed81c6eeafb4e5412af442ed39652"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "49099c3dee738545ddb5147971efb8f6"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "c8d16ca96196b24ed7f8821bab7bf3cd"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "17ccd53fd2c8c9221ed237d2f9cb2ef6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "a561ba605f3bc75599cde0f78d4c3a4a"
  },
  {
    "url": "404.html",
    "revision": "dbc5eac305f08ff5453a46ea52a14b00"
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
    "url": "assets/js/100.bdd90f9a.js",
    "revision": "51a0aa504994d12f055ca7e5b45670f2"
  },
  {
    "url": "assets/js/101.b89ad18f.js",
    "revision": "f09692687327c9b5240e6e34f5a65f0e"
  },
  {
    "url": "assets/js/102.52292839.js",
    "revision": "ba73dc28f8210a26be2c302c16fea7c2"
  },
  {
    "url": "assets/js/103.c7984f8e.js",
    "revision": "ca5c6742c91dff7c7db221a95aec9f7c"
  },
  {
    "url": "assets/js/104.11d8d115.js",
    "revision": "3c4d2983d8110a63e713d9c4d92869db"
  },
  {
    "url": "assets/js/105.b4a6bafc.js",
    "revision": "e9a47be4be73acc1f887b9f99c00e1e7"
  },
  {
    "url": "assets/js/106.d4a2b4c3.js",
    "revision": "7c31fa06f62d6f4f71262929c58f403e"
  },
  {
    "url": "assets/js/107.86dca3b8.js",
    "revision": "1994488c20c92f4722646049727f75e9"
  },
  {
    "url": "assets/js/108.1d7e9188.js",
    "revision": "7a88ef2806ca9a4eaaf32e30d72217b0"
  },
  {
    "url": "assets/js/109.6f9dc4b1.js",
    "revision": "fe6f6c53de0f9927a1ad2fcf796a152e"
  },
  {
    "url": "assets/js/11.bc1de91d.js",
    "revision": "945e69b1971ef8d003ade80b7c423361"
  },
  {
    "url": "assets/js/110.f5f63cef.js",
    "revision": "1e6415cc38ed677b798297bc590d6ae6"
  },
  {
    "url": "assets/js/111.0d345bf7.js",
    "revision": "abfba22b301b72874507faec9ff54dd4"
  },
  {
    "url": "assets/js/112.7de42dc5.js",
    "revision": "b6e579a6b5368d99d72887de806c7286"
  },
  {
    "url": "assets/js/113.3b5b573a.js",
    "revision": "1db37a75381c52a77b04cbff92290269"
  },
  {
    "url": "assets/js/114.4757c281.js",
    "revision": "f2decfebb9d1de436eb03dd35d172501"
  },
  {
    "url": "assets/js/115.08ec3f27.js",
    "revision": "91aafb43caeda06a73d4d07c6b588a7b"
  },
  {
    "url": "assets/js/116.f2c6e75f.js",
    "revision": "e141fc694e1c33b4b20fa4c1cf29ae4c"
  },
  {
    "url": "assets/js/117.c4b5f0d7.js",
    "revision": "2dfa07e98aa2917cbf49f3106be69fd8"
  },
  {
    "url": "assets/js/118.00a0517c.js",
    "revision": "68e0b43b0d7839d1c207022aa2ca11e0"
  },
  {
    "url": "assets/js/119.50d79929.js",
    "revision": "323d7bdcae9e9a818be31f0f5377f311"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.0adbe40b.js",
    "revision": "4d4ca0f37358d4481b987ce6dce07723"
  },
  {
    "url": "assets/js/121.a3b55553.js",
    "revision": "fa1e19f7efe98fc0cc8e2150d7d2a508"
  },
  {
    "url": "assets/js/122.8a79511b.js",
    "revision": "4be46d0e9ebcbecdd797ebc8def4bef6"
  },
  {
    "url": "assets/js/123.40188402.js",
    "revision": "a47574273070b43d83ba0b8b7e7a7099"
  },
  {
    "url": "assets/js/124.1f6658ae.js",
    "revision": "fbeed440ca0e125281e7db5b847d7d45"
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
    "url": "assets/js/127.dcb6d71f.js",
    "revision": "d94ebeab4efff71e045fe460ce1530ff"
  },
  {
    "url": "assets/js/128.1ae334e9.js",
    "revision": "1d981e8bc810691265daba78ec3c7aa4"
  },
  {
    "url": "assets/js/129.fe43b521.js",
    "revision": "75605fd35edd4f49cfde1ab2c6e0c7a5"
  },
  {
    "url": "assets/js/13.0c6addab.js",
    "revision": "013f3888a051d4a3bc24aea6e70fef16"
  },
  {
    "url": "assets/js/130.84557197.js",
    "revision": "b72f364ea132cb2e5766b9dba7cf405b"
  },
  {
    "url": "assets/js/131.38488703.js",
    "revision": "169e4a0f95ee46c14d00e13456457e2b"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.97deaf0f.js",
    "revision": "3292fadc1a8aaa7a3d3b37311023f876"
  },
  {
    "url": "assets/js/134.9f086853.js",
    "revision": "9f644c485fa3c3450ae358e2a71d2753"
  },
  {
    "url": "assets/js/135.47bf5d76.js",
    "revision": "76ebc93ec36821a25e55fa654959bdde"
  },
  {
    "url": "assets/js/136.36a97fa5.js",
    "revision": "d480c153fc60a497f09179392cd2845b"
  },
  {
    "url": "assets/js/137.81f2c959.js",
    "revision": "300e4ec8ea95ea334d32af7bb17058be"
  },
  {
    "url": "assets/js/138.ff3dc55a.js",
    "revision": "a6ebcffcfcd70ac7beec8c67354666d5"
  },
  {
    "url": "assets/js/139.bd6bc898.js",
    "revision": "a3890944b97ef24d67bc145426c299b1"
  },
  {
    "url": "assets/js/14.417b7909.js",
    "revision": "37d4a82516d95d570dcf01411ffe14c9"
  },
  {
    "url": "assets/js/140.3d8225d5.js",
    "revision": "9b9e8319b6758f43bf18013b64778d8a"
  },
  {
    "url": "assets/js/141.62ac0611.js",
    "revision": "1caa347c1e61bd451486ac12014871bf"
  },
  {
    "url": "assets/js/142.160c2e90.js",
    "revision": "f23f6b5ae3932b4448f4b5fce365f45d"
  },
  {
    "url": "assets/js/143.3e4e3656.js",
    "revision": "ed4363b16f30ff5bae027720fc0c4da0"
  },
  {
    "url": "assets/js/144.2ec65353.js",
    "revision": "e7979e5aba0dd77cb4e6d05082006871"
  },
  {
    "url": "assets/js/145.2afd431a.js",
    "revision": "4092002a73617d096ad945f07a832ed3"
  },
  {
    "url": "assets/js/146.35a24558.js",
    "revision": "5257f9ccfd301a42af5d92d1e3c3ccf9"
  },
  {
    "url": "assets/js/147.7265716c.js",
    "revision": "30d2fc3e6cef3119b16d144b5b321adf"
  },
  {
    "url": "assets/js/148.c3e02814.js",
    "revision": "4c6d9b1381a0abbf1a024a895a522a12"
  },
  {
    "url": "assets/js/149.aae06cd3.js",
    "revision": "200576371e279952729b3edc382c10f5"
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
    "url": "assets/js/152.fe868daa.js",
    "revision": "05366826e467337cf4d0bc0b843cb74a"
  },
  {
    "url": "assets/js/153.7d88ac3d.js",
    "revision": "6b8fc034cc8716c7d47377ac125d6828"
  },
  {
    "url": "assets/js/154.0a78b718.js",
    "revision": "d9f0ed3fb8b4e59fb12f24870a6e3aaa"
  },
  {
    "url": "assets/js/155.f9a876ce.js",
    "revision": "f84b3a7a48592f55586644019519eddb"
  },
  {
    "url": "assets/js/156.fa05f239.js",
    "revision": "7de95ffce93ea4c28c9baaee5cee7097"
  },
  {
    "url": "assets/js/157.60f434ca.js",
    "revision": "7d408ea98b3050661e63478e0020ad57"
  },
  {
    "url": "assets/js/158.a3431a2b.js",
    "revision": "b86ec42827688502f38080e8550f239e"
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
    "url": "assets/js/160.c74ba554.js",
    "revision": "f7d4cb5621a39dc2f6959769f22d1db0"
  },
  {
    "url": "assets/js/161.48d737eb.js",
    "revision": "65a34d69915488aedf53f1eb99e6639e"
  },
  {
    "url": "assets/js/162.e9180d59.js",
    "revision": "b9d1a92ccaa2335e1c937835b21cc1fd"
  },
  {
    "url": "assets/js/163.043f7fe9.js",
    "revision": "5c5412339a26d36e8e8ba7260b5e21ad"
  },
  {
    "url": "assets/js/164.ef5840c3.js",
    "revision": "648f36fa7651b94500ddd0c0f8f6f933"
  },
  {
    "url": "assets/js/165.3a889fb2.js",
    "revision": "e27cbc918d6cd5f2e97c5c904edce1aa"
  },
  {
    "url": "assets/js/166.cc746790.js",
    "revision": "dda90baedd6f4d8020d6fd94148985b6"
  },
  {
    "url": "assets/js/167.429b4115.js",
    "revision": "5a973d24a65b2f0492cc40e7e9a7e7f1"
  },
  {
    "url": "assets/js/168.35083cd1.js",
    "revision": "996d088937c6e3e1f2d09f580bbf4b5e"
  },
  {
    "url": "assets/js/169.50f73acb.js",
    "revision": "57e44dbd6490eb8474ceaa6cab3968d5"
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
    "url": "assets/js/172.23276724.js",
    "revision": "cf60a900d757c2d42143d37b25adeea9"
  },
  {
    "url": "assets/js/173.e083ee9c.js",
    "revision": "be4da26be30f8d9b59e4a997f3c9835b"
  },
  {
    "url": "assets/js/174.75579d7a.js",
    "revision": "ac998e0f330b7afc2187ee9f019d5cf9"
  },
  {
    "url": "assets/js/175.7e6cdf16.js",
    "revision": "a54d95bf14a5f6058a9ab0ccd546732f"
  },
  {
    "url": "assets/js/176.d187b268.js",
    "revision": "7674475d315d54e567e41b4d66e5c9d2"
  },
  {
    "url": "assets/js/177.900e9bd0.js",
    "revision": "f4687ca238a35d9b5d007d883d012459"
  },
  {
    "url": "assets/js/178.bbe1e5e4.js",
    "revision": "bfc3b7db6193fa4484e82d023b540a14"
  },
  {
    "url": "assets/js/179.ccc4a331.js",
    "revision": "02801c17fbd77b5685a09c22c31344f9"
  },
  {
    "url": "assets/js/18.820d4459.js",
    "revision": "e311a10fd680b29bec22b938e7d5ffca"
  },
  {
    "url": "assets/js/180.6def5f76.js",
    "revision": "c97c9f4e9929d0d69f79da6dcbf7acfc"
  },
  {
    "url": "assets/js/181.a0a543e2.js",
    "revision": "220a6c9e25d7e2cd03d253824e20a056"
  },
  {
    "url": "assets/js/182.e4667c26.js",
    "revision": "a6ff70c323413e086cd3ebb8c756fc03"
  },
  {
    "url": "assets/js/183.e6e32f2e.js",
    "revision": "b68f535171f688e78ce24f20be5f3a15"
  },
  {
    "url": "assets/js/184.bfc7102b.js",
    "revision": "398f7f3d2fcc6c9e73befca0b9d49f82"
  },
  {
    "url": "assets/js/185.e58e70c6.js",
    "revision": "dbcb0eefb536fa044191960a0cc4bc10"
  },
  {
    "url": "assets/js/186.9162f7d1.js",
    "revision": "a3800c5a8164aac611cc2fc52d83d18e"
  },
  {
    "url": "assets/js/187.0b09bba2.js",
    "revision": "6066577cd2fd8f1dabf4395eded5dc5b"
  },
  {
    "url": "assets/js/188.d03f5662.js",
    "revision": "c91d13db1a91ba18eea5008d63d46ec8"
  },
  {
    "url": "assets/js/189.5a703bc5.js",
    "revision": "7db9d6413987eafeb3b75f653c659f45"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.0b0808f9.js",
    "revision": "0611460e650c68ff0585e82d5fee3e51"
  },
  {
    "url": "assets/js/191.92f9c499.js",
    "revision": "f9cb6448fe68a950a7e0c4ff22383379"
  },
  {
    "url": "assets/js/192.6c115832.js",
    "revision": "58c5e9374efe4ef00e74cc7efb61e9b9"
  },
  {
    "url": "assets/js/193.2faeb93f.js",
    "revision": "0de55e01c291968f814b8edfd45f843f"
  },
  {
    "url": "assets/js/194.e6c0fc99.js",
    "revision": "7502d413724271dcce5e45f3a07f2d7d"
  },
  {
    "url": "assets/js/195.da136315.js",
    "revision": "53ae0b85a3dce5972f4f66223c46c5a7"
  },
  {
    "url": "assets/js/196.2bcf3fe5.js",
    "revision": "364bfdf166d45f12d2cfe41c110ebee2"
  },
  {
    "url": "assets/js/197.9c5d4ab8.js",
    "revision": "c01f53fce1f8b953ecf2256a49fd5083"
  },
  {
    "url": "assets/js/198.2eb63cab.js",
    "revision": "e606aaa0c03cb3f7bcb809105a065b8d"
  },
  {
    "url": "assets/js/199.b77e1af9.js",
    "revision": "54116876e5f0d5ddb8b5b67fb2acf55c"
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
    "url": "assets/js/200.f8368d5e.js",
    "revision": "bdbb4534fb040a715f9236e137f7ac4f"
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
    "url": "assets/js/203.6228f363.js",
    "revision": "dd885b15273bd382a667443d5cd2aab5"
  },
  {
    "url": "assets/js/204.93f7e8be.js",
    "revision": "2265412aab84b3a4923ec439365355a4"
  },
  {
    "url": "assets/js/205.789d734c.js",
    "revision": "a57d5c49a5c053a2d1c90c19afed736e"
  },
  {
    "url": "assets/js/206.94272836.js",
    "revision": "d7e7b5ae70089626ef8140f1306d81f6"
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
    "url": "assets/js/25.7e28f112.js",
    "revision": "f6127fb59a51dd3725d69f47cda5def8"
  },
  {
    "url": "assets/js/26.c9857e4a.js",
    "revision": "dd4e0a6f1f579c6d33b9802f94376a0e"
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
    "url": "assets/js/29.82f49fa2.js",
    "revision": "c689afdc728776f6f20ccb0a00d68808"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.db94ca11.js",
    "revision": "f48dcd3d7cdeb2de44f3dce621809562"
  },
  {
    "url": "assets/js/31.51e8e2a2.js",
    "revision": "e2712a6ff1c1aead5368fa12c74955d6"
  },
  {
    "url": "assets/js/32.82e49c0d.js",
    "revision": "d224bdd82606b3a6e7eaa4bc74940449"
  },
  {
    "url": "assets/js/33.2abbaec8.js",
    "revision": "b205557625192551dd8b7f154aa380bc"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.6e8ab8ff.js",
    "revision": "4d08238bc9e3cf379b052d794cfdff91"
  },
  {
    "url": "assets/js/36.05d08f3d.js",
    "revision": "5d69e91f0e4d436d52495d39031ae561"
  },
  {
    "url": "assets/js/37.d19e632a.js",
    "revision": "a23883a34b3a4b77f649f9ce8780a918"
  },
  {
    "url": "assets/js/38.876073b6.js",
    "revision": "ec73560423fb62ee1859b278a09f1382"
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
    "url": "assets/js/40.2698f501.js",
    "revision": "4413a4c9dd06a00b3edb17ea9f09e59d"
  },
  {
    "url": "assets/js/41.058fc741.js",
    "revision": "3403e0fe828b3e922d855ba12061a506"
  },
  {
    "url": "assets/js/42.f6b2e14c.js",
    "revision": "8593fe7eb31b08f6bb2fd4f8f2c10d49"
  },
  {
    "url": "assets/js/43.2ca766b6.js",
    "revision": "f336e39c1ea9a449dfb09384238f3429"
  },
  {
    "url": "assets/js/44.0f455563.js",
    "revision": "a0842a8a6903a04e057afb6bc18baf13"
  },
  {
    "url": "assets/js/45.3b0deae6.js",
    "revision": "370c4a8a08503ac2fea6cd1a62c1f059"
  },
  {
    "url": "assets/js/46.93194da5.js",
    "revision": "19678116e1cef4a3c8d9e94c0f43a57f"
  },
  {
    "url": "assets/js/47.31b2f285.js",
    "revision": "91c3ac3e1aa6646cc8a756061c3f5c9e"
  },
  {
    "url": "assets/js/48.0f405dcf.js",
    "revision": "ad84415f27a0262f7e3f4590659e8767"
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
    "url": "assets/js/50.2e46be46.js",
    "revision": "a2b3022617f13dc8592ffa85d881a195"
  },
  {
    "url": "assets/js/51.b359726f.js",
    "revision": "62ea9f821fc521e0a7a8d7ec0911476b"
  },
  {
    "url": "assets/js/52.7664f595.js",
    "revision": "6127fba77f5c145db076a2b625e2827b"
  },
  {
    "url": "assets/js/53.9d6bffb4.js",
    "revision": "6f47d83146316a006b53023d44df5614"
  },
  {
    "url": "assets/js/54.e1d7f7d7.js",
    "revision": "2f999cbdadaecef2d5e3cd2d9c6b166d"
  },
  {
    "url": "assets/js/55.04977644.js",
    "revision": "95a179d4b7d85c6aea7532d5742ae3ed"
  },
  {
    "url": "assets/js/56.0d7464bb.js",
    "revision": "b5560de1b5be3e57d46db235e8002dc1"
  },
  {
    "url": "assets/js/57.725bb950.js",
    "revision": "1899b055b2ca20feb628c9480ab51d20"
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
    "url": "assets/js/60.426d246c.js",
    "revision": "bf91682529464dbd2230cf6032c61dbc"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.8505d950.js",
    "revision": "b6f6a567bf2ef9c8c29e9d0b5c2c61cd"
  },
  {
    "url": "assets/js/63.cd50bd1c.js",
    "revision": "94394198fcf21ee749c43a2500ce56d0"
  },
  {
    "url": "assets/js/64.3eaaf136.js",
    "revision": "625c8db01601a7057a966fa077385cb7"
  },
  {
    "url": "assets/js/65.c72d5283.js",
    "revision": "f409200c27879ba9850c0810f46fac94"
  },
  {
    "url": "assets/js/66.a0e5066f.js",
    "revision": "872bf1a0b81f880022c1dc83de23891e"
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
    "url": "assets/js/72.3629bb4a.js",
    "revision": "620f4321c1f81e1c54be9eea3d886e0e"
  },
  {
    "url": "assets/js/73.8c3f59ce.js",
    "revision": "bcb04274a9fd8463048473104374360d"
  },
  {
    "url": "assets/js/74.c270ce63.js",
    "revision": "5639f43b1708f53bea848ba540ada98e"
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
    "url": "assets/js/77.9f490f3d.js",
    "revision": "ab5bcc1b675e38e8630c0972c893c106"
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
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.422261b6.js",
    "revision": "e7de2ca1b0bd96884d3aa67e7da9dca7"
  },
  {
    "url": "assets/js/81.f6d9361e.js",
    "revision": "a7c6d3992f36e33357d6715ee133dd63"
  },
  {
    "url": "assets/js/82.c342b153.js",
    "revision": "c17c417da52b218461f25a80be8f2043"
  },
  {
    "url": "assets/js/83.fc176827.js",
    "revision": "1c5e7411de13de2fc56a43c6a587ad5c"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
  },
  {
    "url": "assets/js/85.abcac79c.js",
    "revision": "e78caa8df247f90e8235824d6c782da9"
  },
  {
    "url": "assets/js/86.496c9162.js",
    "revision": "b270fdba70c3102d29600a0a467bbf0f"
  },
  {
    "url": "assets/js/87.4d76f29d.js",
    "revision": "ba47a79c0fbd524be5981fb1453072ae"
  },
  {
    "url": "assets/js/88.9c6c4159.js",
    "revision": "89e412fca29a9e5d763cd4752e5fe43e"
  },
  {
    "url": "assets/js/89.8e045bc8.js",
    "revision": "f152d751583271edca7a0c89be23cdd3"
  },
  {
    "url": "assets/js/9.33823c71.js",
    "revision": "8ad3ef96b71ee2f737e63d38ffd37137"
  },
  {
    "url": "assets/js/90.9bb80dd6.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.dfa3e6b3.js",
    "revision": "02b0d5eef9f9136881797ae802120d4b"
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
    "url": "assets/js/95.cca949c6.js",
    "revision": "b9ca225de0391f3ca753ce6aa7183e84"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.63254cf3.js",
    "revision": "8fc5823e59f0e7ce1e23c60549d7bbf5"
  },
  {
    "url": "assets/js/98.5e43edcc.js",
    "revision": "1307a566b06d1f149b2af981a1eda588"
  },
  {
    "url": "assets/js/99.ff62f699.js",
    "revision": "486690ea9998a1f7def7e56057eb7a4a"
  },
  {
    "url": "assets/js/app.43ffa7f5.js",
    "revision": "39ac5bba425a5c17c2ca55d1de1ac069"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "55f73a69cff6fe402c0bd788d28da968"
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
