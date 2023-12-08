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
    "revision": "4915ff866935536ee1e239c0ddd904c3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ab3b2237328f6227a0b0adb74d0d03a4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "8259b8cb836fc11e95049c7d073c238c"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "0fd59987a0e61d934102b58b1064b5b7"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "e0b30934f7384633f0a63cc8f267b672"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "cb6651facdf270e4ad9a4a615aaa666a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bd167bb5524f562570768b29c764d10e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "55f5ff80c381e87ede941c07c75d9ba0"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "8dd6629298cca9759f0d43f1cf5b1770"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "8c38b57c5ecc3b8027e1476cf6a7ce6b"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "d303348d9a67a0abb0ff5204338751de"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "bd0c29e878671957dc7d53e56bdf2c1c"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5d49089ea2235952bed7d83c81c4c9aa"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "5bf285a60e9433fc4e8f25bcea811d2f"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "17067f43a1556331bb65a9592581c76a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "2fdc6237df806273bb826c8991a2e5c6"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "9d70ec9809509b907f56f2e0fb9a11aa"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "2acc4b829077105f536dda210c7109cd"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "f23d694c2ea2d0faeab821d14b24f5c0"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "578125d3e785afa165bbe3824ee8ce46"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "6fb3bf244728035e2bf1cbf54dbd8851"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "68c0d69a33e418d1016a24f8c7204851"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "429bd091f2e85f12beca165c33103d57"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "1990051b81b4f2d752411ccb0c802452"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e551a6d1385fed5cfc1ef8a7ef9f83a1"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "554fed3d03e571f69f7965909255fec4"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e8a5c83f80f679ac0d1893019d617f01"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "30084477f4e21fa82f16faecaf185526"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "4d490e12b24f614de608e4fd1ff58198"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "03fa2524806ea002775932f03436fde4"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "1f3dd6a6f693d4af623203f10d9194eb"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "265b30c99eaa4209e9cbad48209b2629"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "9b8bce75efa1b5d8211cf9c714e7f9f5"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "7186995566b4d821b9ca6a135abdd6e2"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "3eed3ed90f806124b6545e7352d3e2a7"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "23798ff657f6510420ffe3b048391608"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "d80850071958e5b3ea82579935bb6cea"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "eb3b888b3a7c2a7cd6dd5402ce21fcaf"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "031a8d8bd9c8fe683604e014679a0c0a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "fb3ccb3c77d7039ecf09530d2194c974"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "3259df7c2c8d8f17f56e5638ef92f2d7"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "830e58ddb848785fa712e20c54726f74"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "7c3f349d549d2174b9f24e0922558842"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "1127dcd6db4354a8dd76ee5913ffab04"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "12195e10d88614965b3ed217836ee784"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "d9ae505db30abdea7474f50844c284bb"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "9af6d95430dbe2e4642b24fff88d5283"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "bc561dc2f5b97d0c1724a16f4ad04c80"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "3e8ed2ca9aaa6c6a869b28f047d60d87"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "71deb0a6dc1d137e1f9895c2e3c978f8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "1ce49821c41896a89697171949141c2f"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "db521656326311e2385caa001a46d915"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "45808156cde653115954adbd15868120"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "1a51bd30b66d0dc3538121eb1a78dabb"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d364e0a7a0eaf00500b0b4d0b522915c"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "b943bda5f1f32ed0385da694d05907d7"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0b0341d2a5d0804e580d3eeba2901b2f"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9878691ae9151d881eed100fc5009eb6"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "76d2b690387671d9f017dafb67208cb0"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "83e27c95c5db42b97570d05fc5590f04"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "310d681d4fd6dbd2f5d1619ad23507c1"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "f029eea449c7eb582aea8a2b94cda91e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "1ac0332d60f20187e6f2c50509bbac66"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "fdb0a086455b54a86ab399de5eab6eed"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "64edd8775e94cc29a74d53e1fed44d75"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f00176aa9578a34caef4ac20bbd9a1dc"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ca3ab1cef6aaaf7a7582be173073ae4c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7b780bcf5159e401bb44196e7a28f97d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "da29706979b7d196704fe60961ee75d9"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "36364f10c23bf7bedcdaade91d54751b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c5fdb2feeff61a910b075427f0af5123"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9ed85b8018c1debf4af631a4570eb544"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "773b1e1ba80ad81c5c59950de4196289"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c93e34d38ec8bbdf16c075dffcb18aa6"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "fb576de105d2ef7afcdfe3ac59176965"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ab464b3dfdca7c01dfbe4aa2fe09e09e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "a12f9831741729fabd448daa4d891cdb"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "83cb654450afdecff3673362672c8960"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5a2708f4e30fbf5642a7ba02a169f4f6"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4422fccffaa562c45ee3e92aa4b0271b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "151b0c91e684add28b4be0e1c671c3c1"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "59150b6bfdacd973690221780b003351"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "db2e5cc9c6b7af2b24fd550ee62c5d21"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "9e032d9698d64cc1ebba309522cf28a6"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "154db3b158d25bdb10d27440eae481ac"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "b76cffb1ee410227fe04ffe43a911bd4"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "69078d642926026dffcb845310b11a88"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "8d4444dad0daa7c02c29f27e6419a095"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "86c55cff39b5bbed6098177a26bfb0d1"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "822c0c7a4088b555d2b3ef728b1a2952"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2e22f3414a486885eeb1c1cc6778f766"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f43989b48af1068041b119430be0b98a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "7be856cc4e2a4174c4de384cabaffd30"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a4cac62f45aa8d770563eb000d14aef8"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "afcc377cbd8c7cc9bb2e2191571b506c"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "9cc06ecf7fae7f8aa48bcfffc7e9f308"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "89cb5b034fef07f3573f7c86a9a6dd38"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b5f044309cd139cae03cc7b1e978470c"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "24e31e942bd0a49160d0c286d2139ba5"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "54f00246a7193c8caaba236aa4b10b69"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e0a7b9b1dac14af5e39c41a93c45d879"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "46c7b67e00bbf00559e105a1e0d651ce"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "2b1deb921f97447c6e07a8d648741720"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "14e1e267f2a10dc8eab846b3f6381b6f"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "940b25361118f1d34994eac91dfc6049"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "53928e9449752f0526c304451ae756ab"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "9c24f67a5eacd7b7a877cf8313b5f87d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "bebbc7f9dde293c06e01f8cf68f09872"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "25f0928cc6bc2322d87c282ab95d38d1"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ed1aba0dd98d614f3d4c529e435e15fc"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a95d090b4a6207ff78662f8fbd1fe19f"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "4419b74f6f0084decaafccb248b6f117"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "d9c517adac88c98b9b1cc6dd0e7e7de9"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d6c04001df336f3ee7700d6620bd4dd4"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "446212ad463eff5a4066f0c5b9397426"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "b5edfdf3224e48b0be8c0c6bf39fba25"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2ca1b5b9bf28f448aecba0534f13f043"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "33953c79810e78f11cd46023cc82398b"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "35484e05c2b5de6cfd4bc4051f4f0adc"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d049cd0153a78b60baeaf796c332f2a0"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "1491f6f8c7d7232b3c85c917dd612b73"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "6b3120ef0ffc7df5ba385cf76af91ac8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "fea57d827c25a83800b890935981a14a"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "83cb97b30710dbff5777615a278c0661"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "053e6fe91b5350626f0c7f7472911e2d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "219bc6bb1b32774b05a42c2dd3f6c025"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "c28a46c0c7d614dae27bbc20c3371e54"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "192adfa9ecd99c5e3d1766fc732d11ce"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "682edccb7851f712c8a251ac8cd29c5a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "2526c10aa1aea3eb3e5131cde6ec26ce"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "9c48ce2d135fbf43feb2fe50f704dba5"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c50e45f97e392ba6b39b475b66897d36"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "fe9ede71988d26eef2001502ed8fb26c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "9b0f4a4236e67a8a6da7bb99942a33d1"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "473fe5f7acb72355f4316bf52bb80875"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "95c916511f7d284d33ff9c5352117a28"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "34f29e8bd8e68297ad3dbfcd1ab3bf91"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "ef927ee9987ed64fb7b412964f2b1aee"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "d02c91c720bb7dd7101babb3dd36b01f"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "41bd844156954e0e2fc1ae6b1b92d7f4"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0cfd250ec45f1cf9c2b980b61cc894de"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "6dd87a363ce68747fda9ce199dd7e742"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "bd266620f7bf91c529762feea4591131"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "ce289963ae70e9f16808586351fc60db"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "38785aa6fb90258242901f6c14ba8a02"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "740bcf76be9f442a3e88d79eea273474"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "ca1ff97d816f603efe190cf3b2506427"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "30d0b2305f6c13359dfc450e006cfca4"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "274c1e9928d08f8d8904c593ca494f71"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "cddc06b81934a40eebca9dd78fc83c71"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "5b6d66df95cfd23cf049b0337bb51ea4"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "fe3c865e859634f4063178e6a32ec4d1"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "c756a46c4e12f2a3c225e48c975bde43"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "13b9d335bc883f2243858ba35d4b8dec"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "48aad8b117001ff39bcf1ef5d8776af6"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "142840e4f4cf5a93933ffd026ec6294e"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "e3b50e8507e8c2eab2e83d482c799b6b"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "e125786a400b52f3f024333934266362"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "4485292a36395a2ca55d71f5bb6e19f6"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "950c7c6ee663142f418ea954100c5ceb"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "641226f8d35bf75fa8e1b688a366e936"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "f1de5b2bbd9ea4dc124cdc74b6aca701"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "58cbbe6abcc783a3ff63e8a0f6ac710c"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "f130381b9f90aec11861ea63605aa8c2"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d42faecd90a4a60db012c19cffff095c"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "2fe62f2674c7d2c24273cf1c2f142de4"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "61c03558a87ad6da5308303ebee0b488"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "14b5aec588c0c0d94bd1dabe1b50184e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "b19ce9c9c88b4ab68d6810c3a007183d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "4783d8350ec11dc3849092955ef8be10"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3b99bcdadea7ec6a5a86d82dc35b4d5a"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7ecef8dcf32d161affe0b6c65f945ad4"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "2fba224441f8c9da46ef5d76ff5e8112"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "5726955cc905739aedd07ec680f66e2d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "9f5373d754a63bda6324adbf56de2553"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "67f45fd24f361e7213644df63a386dea"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "ac9dc5593e2a0d628bf31568cc34ee2f"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "10f070bb8ca094c9c458f291cd44e193"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "ba63b1661db28846e7e67020cf915985"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "f163a9faeb3878aef746959e5975957e"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "bc2ae7e3ee8c731aba624db573074bd8"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "43bc696abb735ac7287e753a505bcec6"
  },
  {
    "url": "404.html",
    "revision": "982fe914694990280bb586159219fb42"
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
    "url": "assets/js/10.47abe10b.js",
    "revision": "884531af452a9656cd6f437b85c02adf"
  },
  {
    "url": "assets/js/100.ae680aea.js",
    "revision": "f276f685d1d8b7c2c5c473cfe6c90114"
  },
  {
    "url": "assets/js/101.0adf040a.js",
    "revision": "a7328bee54476b6df211d45d7fc3e1db"
  },
  {
    "url": "assets/js/102.927c7efa.js",
    "revision": "5edafaff32d076eb63ee99d076848b78"
  },
  {
    "url": "assets/js/103.5a6d6a2d.js",
    "revision": "8f73ba330c027cd4e39053c6ae508b0a"
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
    "url": "assets/js/107.1c6a9332.js",
    "revision": "0b92ea322f6f7a8a64d216ddcb74d0c1"
  },
  {
    "url": "assets/js/108.3df828cc.js",
    "revision": "ab4ff446ecc30a0df891b2a5f9627335"
  },
  {
    "url": "assets/js/109.60f1426a.js",
    "revision": "c3d6e28d3f84507d9a17170ff44c31bc"
  },
  {
    "url": "assets/js/11.1c022ee7.js",
    "revision": "910feaf00ee12e2094d4b8f679b2558a"
  },
  {
    "url": "assets/js/110.ccc68371.js",
    "revision": "ee088f0e40288427383cdbe330cb0c1d"
  },
  {
    "url": "assets/js/111.0ad39cfa.js",
    "revision": "858fa24244ea56f61d31b34c7175e125"
  },
  {
    "url": "assets/js/112.4244653b.js",
    "revision": "8fc1f8f22d4f926fa3895c47c93d9ad9"
  },
  {
    "url": "assets/js/113.620cd926.js",
    "revision": "432b8af4abe49580d544ac985f7f1bd2"
  },
  {
    "url": "assets/js/114.a0b63035.js",
    "revision": "6116e4e1f9af16b0cfc4b84a12043903"
  },
  {
    "url": "assets/js/115.483bbb07.js",
    "revision": "e99c90bf59873ed6ad7d32b12e95940d"
  },
  {
    "url": "assets/js/116.cc92d03c.js",
    "revision": "614886471226909435d81e61c301974f"
  },
  {
    "url": "assets/js/117.d44b4b9c.js",
    "revision": "0440f0a582d238dbdb681500650bbd19"
  },
  {
    "url": "assets/js/118.c5341320.js",
    "revision": "380c449c8b2db09b6a4853d45975b624"
  },
  {
    "url": "assets/js/119.6e02b083.js",
    "revision": "4490dd099fe95ec363cc9f064f25d743"
  },
  {
    "url": "assets/js/12.2f030c67.js",
    "revision": "8417bc9dfa779d4971126044d0363bd1"
  },
  {
    "url": "assets/js/120.e0625086.js",
    "revision": "e0a03ba7c33f853106f00d9f98865374"
  },
  {
    "url": "assets/js/121.bf5a9319.js",
    "revision": "c02e291391940ed260b57084703d5d56"
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
    "url": "assets/js/124.6191c9e2.js",
    "revision": "84c086f5785a1460a23fe072a3665e8b"
  },
  {
    "url": "assets/js/125.57d2645e.js",
    "revision": "4f07ede8481caafef0e177787d5c5f96"
  },
  {
    "url": "assets/js/126.1cb5602b.js",
    "revision": "13ce3f5ee2761432141f51598bb80b22"
  },
  {
    "url": "assets/js/127.661318c1.js",
    "revision": "869f3c2a117ec53e6142ed1c092e9550"
  },
  {
    "url": "assets/js/128.a89c6824.js",
    "revision": "febf1f3341a38f3b7b00a4e4361a39f8"
  },
  {
    "url": "assets/js/129.5120f627.js",
    "revision": "f9fdda65d55a17d81e7fe1a137c26365"
  },
  {
    "url": "assets/js/13.bcbfd89c.js",
    "revision": "a71020d4a8a35f33cee0f50c9c8908cd"
  },
  {
    "url": "assets/js/130.910a172b.js",
    "revision": "a2f50c3357a178e7ecf98c57867cc9ed"
  },
  {
    "url": "assets/js/131.2b382360.js",
    "revision": "da7f5b1b9c0cb3e0c395a8d0e998b5ac"
  },
  {
    "url": "assets/js/132.0f9169ce.js",
    "revision": "d17e9a8b8286bd1591f95198b37f328c"
  },
  {
    "url": "assets/js/133.9f283471.js",
    "revision": "f11e2d57be95a5c0fc1c9f50eef4853b"
  },
  {
    "url": "assets/js/134.6c7411fd.js",
    "revision": "d25caa69041ebde95c1ab5dfa7678803"
  },
  {
    "url": "assets/js/135.822ca34a.js",
    "revision": "ea32c758419f3fc4073424cbd605e4eb"
  },
  {
    "url": "assets/js/136.4b984a73.js",
    "revision": "35b320a422bc288e348c2841342b0975"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.b5ea8543.js",
    "revision": "1e44b10fed52d81212973ad608ebb93a"
  },
  {
    "url": "assets/js/139.93fc5682.js",
    "revision": "04e58e82a87f10c2cdeea26d08399810"
  },
  {
    "url": "assets/js/14.542676f4.js",
    "revision": "aca7a604f0bf6e3ce1c4d3e5cf8520c6"
  },
  {
    "url": "assets/js/140.7f6cbd18.js",
    "revision": "e21041d5071b31c718490ec0862a4915"
  },
  {
    "url": "assets/js/141.3e73d559.js",
    "revision": "c89a74c852c9b42a097a08768794ae8c"
  },
  {
    "url": "assets/js/142.017b7061.js",
    "revision": "7ce13b858d07b6a3f689aedae682aa30"
  },
  {
    "url": "assets/js/143.0813860a.js",
    "revision": "c9c63a022dad9ff638c1402f3a236595"
  },
  {
    "url": "assets/js/144.2c6350b5.js",
    "revision": "c8b9dffb05d4af639039d2a3fd78d5b6"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.2d5cc8ce.js",
    "revision": "fed844b8f05ad87c49acb55340c072e4"
  },
  {
    "url": "assets/js/147.d8cf0b0a.js",
    "revision": "2a849d7d89003cc702b7728fcc9ac10c"
  },
  {
    "url": "assets/js/148.e1a0f13b.js",
    "revision": "82f98604acd0e208b436ce96d2083a54"
  },
  {
    "url": "assets/js/149.19582a3f.js",
    "revision": "a9385d908791e2b2178d94b4ea28ebe9"
  },
  {
    "url": "assets/js/15.a6e108a7.js",
    "revision": "5f451d1dbac737e97224d18e0725030f"
  },
  {
    "url": "assets/js/150.8fe97810.js",
    "revision": "4fe1815a7b4f0f610190e0525633cf48"
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
    "url": "assets/js/154.b71e34b7.js",
    "revision": "80308f07019e513406df5a27e5534e42"
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
    "url": "assets/js/158.8f17ac26.js",
    "revision": "ab5221a37166f9d97d98281f0c36f299"
  },
  {
    "url": "assets/js/159.19c8c952.js",
    "revision": "d8216ecd3fc7207b25f25444f258ecea"
  },
  {
    "url": "assets/js/16.f5bf3695.js",
    "revision": "4e27335ce76784629f64a9c99f477300"
  },
  {
    "url": "assets/js/160.ff7d55a4.js",
    "revision": "73ee18d0d5fe1d2b05781230c48182d4"
  },
  {
    "url": "assets/js/161.b7bcec74.js",
    "revision": "720622f94cdb58f124b54eb2559280e5"
  },
  {
    "url": "assets/js/162.b94ba949.js",
    "revision": "b64145dfe764ecf9285237725b35476d"
  },
  {
    "url": "assets/js/163.7b73e3b7.js",
    "revision": "325aa74a3f65703ab088e6a5ae2daffc"
  },
  {
    "url": "assets/js/164.99755de0.js",
    "revision": "a3ccb573477cde79f58daa421a3efb28"
  },
  {
    "url": "assets/js/165.0ed619d1.js",
    "revision": "98b266cf53356f1905718598826bd0ee"
  },
  {
    "url": "assets/js/166.912bb6b7.js",
    "revision": "70b383ff94ebede4d570b709ff64a1c9"
  },
  {
    "url": "assets/js/167.d69bb2cf.js",
    "revision": "819509cb471e5a5afa628b32fb996628"
  },
  {
    "url": "assets/js/168.d49d7376.js",
    "revision": "c51f92b684a4bd532f34708968031754"
  },
  {
    "url": "assets/js/169.650b0c10.js",
    "revision": "ff906c377076d58aa5317304e813f284"
  },
  {
    "url": "assets/js/17.f38f881e.js",
    "revision": "807aa4101329b577e019f4aa1f9f15ab"
  },
  {
    "url": "assets/js/170.b0b6457f.js",
    "revision": "6220be18ef0e55056e9703c9f28b9c1c"
  },
  {
    "url": "assets/js/171.adc746e4.js",
    "revision": "4165f7b8866fcf1246e47ae29bf4e191"
  },
  {
    "url": "assets/js/172.a44ba132.js",
    "revision": "c475bde544a52b4f1767f14f5bceb865"
  },
  {
    "url": "assets/js/173.73ab585b.js",
    "revision": "97a11cc852badefa53e37d5d9e41e656"
  },
  {
    "url": "assets/js/174.4b2e6a7f.js",
    "revision": "fcd5b0f619a536e7922f0e80dd0c3864"
  },
  {
    "url": "assets/js/175.f730edc0.js",
    "revision": "29e82d5bfc07789705c10a91cb506c0c"
  },
  {
    "url": "assets/js/176.498e36de.js",
    "revision": "7b6a652d7729cce8dc24cf4c5d90fb48"
  },
  {
    "url": "assets/js/177.f77c969a.js",
    "revision": "cdf71935b5cb5309b3b46fa580eb8ff3"
  },
  {
    "url": "assets/js/178.09239ce8.js",
    "revision": "d0a7164632edd5a23ed3fcd2fecdc874"
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
    "url": "assets/js/180.149675ca.js",
    "revision": "63911b22925a434c7e6a643de555e37f"
  },
  {
    "url": "assets/js/181.c2d4262c.js",
    "revision": "5104a854fe058183c438fbfd1862ec4c"
  },
  {
    "url": "assets/js/182.6487d5d3.js",
    "revision": "9f8a951ea898167a7d99b0791441de14"
  },
  {
    "url": "assets/js/183.57ad85e4.js",
    "revision": "11a6ff53a82563617130e7ba4f42ca10"
  },
  {
    "url": "assets/js/184.a130aca5.js",
    "revision": "fca473e17ba4048f720239edfb073bd2"
  },
  {
    "url": "assets/js/185.6604d0e4.js",
    "revision": "26d08b38d17080ed77a2b19bb05090d1"
  },
  {
    "url": "assets/js/186.5800caa6.js",
    "revision": "c12b27c4733e5950e6c396a032fc157e"
  },
  {
    "url": "assets/js/187.e05d5821.js",
    "revision": "94129e9ef12e09021bf3f562ee75700c"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.df2867fc.js",
    "revision": "e5634229324ae4f21b1fb72c8a098d8f"
  },
  {
    "url": "assets/js/2.6b6ad87c.js",
    "revision": "b688a1d0fb147cd70752b0b4b3fd066b"
  },
  {
    "url": "assets/js/20.25308ad5.js",
    "revision": "2d4205fcd00c639dfcd221a1d3145647"
  },
  {
    "url": "assets/js/21.9d5a46c5.js",
    "revision": "a1e09d50fa64304da7202a613f6bcd8b"
  },
  {
    "url": "assets/js/22.fb1e565a.js",
    "revision": "a5482c41ed83f56c642fa506753329e6"
  },
  {
    "url": "assets/js/23.c3503fc9.js",
    "revision": "8eb739d46253e6cc0265da3fde21fc28"
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
    "url": "assets/js/26.393d0967.js",
    "revision": "30cb905b3e19960396f0303968746884"
  },
  {
    "url": "assets/js/27.247e61bf.js",
    "revision": "70badb53a68b2fe8cf3ed4600d8cacaf"
  },
  {
    "url": "assets/js/28.13bc544e.js",
    "revision": "7761b3d51ac859aed3e208b344b76aad"
  },
  {
    "url": "assets/js/29.7ee78a56.js",
    "revision": "21b810e4c680516b9c0ed836a5099996"
  },
  {
    "url": "assets/js/3.00b32b76.js",
    "revision": "1a35951fd65de2998c14ec8412d1429b"
  },
  {
    "url": "assets/js/30.8574d85a.js",
    "revision": "5dc1a556ed333e75b3fc5ed9af84a8cb"
  },
  {
    "url": "assets/js/31.d3ec3ed8.js",
    "revision": "fe1a6e0cb4ed7855e03cc2e98c1eb7fa"
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
    "url": "assets/js/34.9b3ac84c.js",
    "revision": "b1e256220aca857cc20e0e1dede756db"
  },
  {
    "url": "assets/js/35.cb015059.js",
    "revision": "0f5423231aba0830b4ef87ff476baacb"
  },
  {
    "url": "assets/js/36.da857de3.js",
    "revision": "60fc33fabcecf2c0760cda845e8d348e"
  },
  {
    "url": "assets/js/37.48ee16c3.js",
    "revision": "b7d3e48abda68e7ba74781956ee1497b"
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
    "url": "assets/js/4.37e95573.js",
    "revision": "2d3d0e39bd2446d0dbf15807a08ce7b2"
  },
  {
    "url": "assets/js/40.4b33ac9d.js",
    "revision": "d240cd037769f8239893f9c9c8ee9de1"
  },
  {
    "url": "assets/js/41.0ba60c89.js",
    "revision": "ef9c5accd7ba17c4e3695e8e9da1ae5e"
  },
  {
    "url": "assets/js/42.4e56fc68.js",
    "revision": "c3a85fad372c5e6e81f09b8110c17dcd"
  },
  {
    "url": "assets/js/43.50a6353a.js",
    "revision": "8da4fdc8340cde9282cea4793a875473"
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
    "url": "assets/js/46.9a6f1351.js",
    "revision": "cf81607f6ac54ea81136ff0f785916eb"
  },
  {
    "url": "assets/js/47.7bc9282c.js",
    "revision": "c8ff1df97dcf115fbaa14507b7cca6b1"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.91235418.js",
    "revision": "122394d17413c37f9fefb5d207b7c6b3"
  },
  {
    "url": "assets/js/5.66fd9d37.js",
    "revision": "25b7acca5a3a031f4b127083fb63fbc2"
  },
  {
    "url": "assets/js/50.e660e583.js",
    "revision": "09859bc2d55c48e5c6519b7e627366a0"
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
    "url": "assets/js/54.94e0e9d3.js",
    "revision": "13087e10079ca5ac3b9640f60b330497"
  },
  {
    "url": "assets/js/55.2a0f92ca.js",
    "revision": "11f2bf22979d4238ab1e0bd47de901a5"
  },
  {
    "url": "assets/js/56.fcbf14b6.js",
    "revision": "a67531e626fd6e050058e15185c03e0b"
  },
  {
    "url": "assets/js/57.5e82402d.js",
    "revision": "c56316c3bb06b172d23c2edc4c9746c7"
  },
  {
    "url": "assets/js/58.2f7bc410.js",
    "revision": "40a89a82b8ae52de59ba731c55a8f2b9"
  },
  {
    "url": "assets/js/59.710fe114.js",
    "revision": "116d1123506abb3b1fe18c4cfaa82dd5"
  },
  {
    "url": "assets/js/6.4c75703c.js",
    "revision": "077de722252a2f5cc164a1b47348bb0e"
  },
  {
    "url": "assets/js/60.02e51a3b.js",
    "revision": "cbbbfc964c6e652fd3d3efb9e0857aae"
  },
  {
    "url": "assets/js/61.c5b5f355.js",
    "revision": "4596a8f9b80b4632586863b889c2d0b1"
  },
  {
    "url": "assets/js/62.f47193e6.js",
    "revision": "939b1e3252304b1fd75b469993241fe1"
  },
  {
    "url": "assets/js/63.af570ecf.js",
    "revision": "1ee0710d0f794cc8bbd67f466723a1fa"
  },
  {
    "url": "assets/js/64.812ce44a.js",
    "revision": "bf711b4abba52c516369dc2a708fc13d"
  },
  {
    "url": "assets/js/65.ba47aefb.js",
    "revision": "a227f6e1febbbbb1862ecde499ad6340"
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
    "url": "assets/js/68.eaa321b6.js",
    "revision": "e4f20f420392c200f724256fd2ac2a06"
  },
  {
    "url": "assets/js/69.28cff7b2.js",
    "revision": "b6b5bbbfe7275966d18f4a93420b46d3"
  },
  {
    "url": "assets/js/7.a8bef65a.js",
    "revision": "b491197053fc08b9f28bb00576669997"
  },
  {
    "url": "assets/js/70.447febb1.js",
    "revision": "b904dac3eea2636c635bf1e218aca590"
  },
  {
    "url": "assets/js/71.34fcec0b.js",
    "revision": "682d920511338866aac151e53647f7a7"
  },
  {
    "url": "assets/js/72.d2d81fea.js",
    "revision": "cb4068e55decaca26634119298ef1387"
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
    "url": "assets/js/77.e853b924.js",
    "revision": "c92d15667c43476e37712acf6ae32629"
  },
  {
    "url": "assets/js/78.eee90cd0.js",
    "revision": "f60ad1175d04b999f8a55f9c7a5c9e2a"
  },
  {
    "url": "assets/js/79.d233442d.js",
    "revision": "a6a4ce9e7f1be30628de91c5c61da734"
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
    "url": "assets/js/83.f283b59f.js",
    "revision": "f2f6ef0baa23eccd9584d7977df42772"
  },
  {
    "url": "assets/js/84.4c502be5.js",
    "revision": "0f7585a24efd2ce7e101558900244561"
  },
  {
    "url": "assets/js/85.869a04e8.js",
    "revision": "c0e2abfba411e3c30c652a38d61c1ae8"
  },
  {
    "url": "assets/js/86.a70182b6.js",
    "revision": "5a948b1b13b5385800f92eec6041623e"
  },
  {
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.728991dd.js",
    "revision": "2c86e57c2826c3d023ce7fbf7e43f75a"
  },
  {
    "url": "assets/js/89.cc169b69.js",
    "revision": "b9988f97e9b286e037a7888d37aa62d5"
  },
  {
    "url": "assets/js/9.b25fd464.js",
    "revision": "4fb1b1cec086e0b456c37eba0c313cf3"
  },
  {
    "url": "assets/js/90.f6efdaaa.js",
    "revision": "9d1be4a70e6b593b544922893ca0857c"
  },
  {
    "url": "assets/js/91.fd42b5e5.js",
    "revision": "54897f58070e87962734fd78757cfdc2"
  },
  {
    "url": "assets/js/92.2312da92.js",
    "revision": "f637bfbfe1204de33c6fa7aa6a6b7baf"
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
    "url": "assets/js/app.db5c9a3a.js",
    "revision": "7f1500aa7bfde72a7f5fb71e3f6879f9"
  },
  {
    "url": "index.html",
    "revision": "ae8710b69e7a6c52ad4da36e47c575ac"
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
