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
    "revision": "662e332122bdc7c95015ae2acd16f7b3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "8e63755666b7d36af53edd4bb7c238bb"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a901180ae2b361fca84599a13e3b5cc5"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "f120aaeea057f727fbabbded56a77283"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "e10ad629e0ad8f411c934c42eba26d45"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "07e24b45a31ee96932fc54a18bcf6358"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "b67ba5b7fb8fd9dda65454a03dc85e38"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fbd577cad12fcf2c1df9e6231c18863c"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "420a3932282f7f6acb613f483da92824"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "450a7b53cddc86d8b090ca555dfa478f"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "746072a2de93f65d11e3ffa8dd3d9b5e"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "01d8393046361228bca9bcc713ceaa80"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "c34c4cacc9e5396741c5c6abff9030e4"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "cc357a9feaf5d8dbc8e519e24409bc11"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "9ba6a3f5212946b204def42fb2a9b4ed"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "b43ca61f075f896fd7fe6b0231341710"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "7d799f5e5c6db4340b5b43b1f61f8dc3"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "296706f47349b1afd5f236e856e68841"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "97aa0dd559aa03bced552ae89e58a024"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "5639f2d305b59585246b7cf55c417c80"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "48257a8a7bd3a0ddfdaea1e05666fbfb"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "f085e639df54d8ffa64a819d521caf26"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "9186cd3e1ebc2a41e357767231d73a6c"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "1027be6c0a3e80141ecdd9f2a173fd74"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "d63dfa74bfdbb07b5fef44579ce18467"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "50864678d1e166eac1e72a4422e88bcc"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1e8326d963cc5bf8d3a2976d81bf383f"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "911b7c7f4e5cf7a075defec4ff0b58e4"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "81002e3dea42ac93152846d85dfa7ec0"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "1846090b66fa15476df47d9142229b07"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "181d0e4e02e52e7fb57c90fde79edec6"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "2d7bb7f4b831f498bd673df6430dcf93"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "dc89f9d584cfc40456d631c29d28f6aa"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "2bab24f3ccbb2d60c5cbc593d6a2e328"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "c4274fe84cabea92ebb614fad616e508"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "a4f687288cc1d2951f9fa5ec37ec30b5"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "3c737adfd6d707cd392c15c4ecb3fab5"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "bd4f838a1a968c8078ddf7c7b3387656"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "9ed6dcb56edbc85d56a5e194c41ce495"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "0576772e605aa16b2cd00e9051e58eb2"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "13eaac5587ddcef58b95fb7711f0eb3d"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "09837b46bd0cfa65e761601bcdaf4601"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "381db0089686ce146e0efbbc45debe25"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "f2c7c294cac8043af857259e49ca7eb3"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "c29dc0c7e5b606a6a188312ec85cde26"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "9869246117ef1ac2a0e128a845556325"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "49ffc6d282eac4d183c89120bcc49f15"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "e349f8c8d332987e5d4d08f2cc8838bb"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "d48cae8d6e70f00c6baaa1fc679785cf"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ec0b1012da253394081e9fbf5f8cbfa9"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "27879c5b6f3b5ea5a5904d56ffb0311b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "316250173912c2269b323ae0eb9c663d"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "50e1e3d7998ef6a4827603748c81f5ed"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7f632e923a723c45d301e48dc5a061da"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4d5dc67b7ecc43fcf0ca33231cafee9f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "1aa311dbeb38ca4126229c477be35539"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e00606e3a6c954f70b81e7736ea405a6"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c4d3a786e6b0676404fd745d9bddf3f1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d25dd998b08babbe0ae175bb94c993b3"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a888ddf6e6c89cab34685f5d40bd9fe8"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "33c66aa27cef42055bd3da0dbf1198fe"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c659c88545dfb618702f5592e8b27dfe"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "27ead6417815bdf89bce9d22eaa784bc"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "ebc84b522128736d2c6c142a368f3e64"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "5125a2c657995917b3d37d79eeb911be"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "83118fe7a1100066df96a18784087c54"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "52d0a98aff7a359ecd874d9496848a2a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "1721c1845b6dff1f1403fef9cc1301a1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "0a7fb30bf727d2ed688a47b5471c4b9d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "afbac8bb435904822cc19b2ec0c2ca50"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3618d4eb3ad2ece7639e0482347e8df3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "15e515360b84cb4007265b29c06c21ea"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "b544a38f7b6b3bd645a841a687d84825"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "37e20a030784e2cd5dd42dde7d7d3414"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ac707b3a8b4ff758f3ba6bacc05e12d6"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "fb03884d29dbcc4241817c4e15bb727b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "34d85b61ae5650857eff861d41eee5d2"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4356ac87bd406a13976439e2675628cf"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5df82ba72dbeb2c629c5e85a125ea380"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "0a49bd201cbe5d30d9075a10387d1ebe"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "64a5972d91797ea854242a23c68bb611"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "24491d1800a82459410113e061e179f5"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "98ef2e9aad9549345d0239822e167563"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "684ac7aa592208475910e5bc03a1d096"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "7496e56cf725bbd8a607eb246d2fe2d4"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "818578723800729c45a294b818691e5a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "36a1bdfe70d6bd856747b7b221c108fd"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "5b370aa02e66519eaf1eef29fd1d837d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "dfde7c1217164b757a4ed8f3b374edbd"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "b285cacb53a56d4dd862d20f3199dd08"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "04c1c2dfb41e8aea7b398399b140e666"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "cfc121f2d2787780ad947693119e103d"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "c76a961f6a31fe4bbe0ca1afda5eaeef"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "8985fa6341e38b11d593de8113fc6e4c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "7851f37d96d5d1de391dc6bb776cf606"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7936dfea6cf401a0741085885e3efa22"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "74e5f09c604e9140f3e152f3599c78e4"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "46e50fd931af1843a3f55f26b4e49d0f"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a3bdf7fc93f4c03a591cd1fa2a962a16"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4476b35278eaef52cba21a3a5e594a09"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ee8a2542de55439d7c1559bbf158e244"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "5b28f7a1ab04550c5e0cd12eb8494ae1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "2f1da43b2025ee65e75474cb97f8c6f5"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f10f4311ccf34028777db8c05155c591"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "8511307e60ee47ca08b5cc36851984ec"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "d7211011ee4815421ac87db1e64de06e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "a7cc51d42044396d60ec2d5ddafd697d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f0fe8f399489f9b02050832232e6b235"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "77c0774fdc7ae5dbd9edce69bbcd7844"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b53237293f20aa7d5bc82043d324435a"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4d72c144428659169a7a97b96b63ef34"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "c86dbec7a403a80381557f4c028827b0"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "ceeb0b2a8c0c80f77735e8078540f8c8"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "590b0d76643f329406cb370ea154600b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "e17c65cf2ea8931a0b7a92a07fb56272"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "dd7603569fdfa7780af726af2d958a1a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "bbb2822e560182a2706ece673fc64146"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "392d119d6004291d36813f9f42d8f8b3"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c9942af38b0fc9e0f14391a3636815f0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b0f07224a76217315137b1ff95aabc63"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "485ed928675e37a8128250b0278b3314"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "19637c39bbdf109c519ea47954a367b8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "1cc86fef18630d5517411e9b375f5210"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "2b4a588c5abaccae260b2c5df5b7b7ad"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "d59e9656535065c05426fcf018aa8043"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "56073c165afeacbf4865ec8deb26a220"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "2e28aeec8abd8a56e4f53de8c4bb4726"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "ee6878cf4ce67a501abb2419e0d24f6a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "c254b0359c872043ffe1c8f165235b38"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "d5d200a53498ea2ed9f65348bc785cd6"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "f54a6bfcc1d99680db331d4e23011798"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3ed5cc3f39a5d611b26fbc23c863d76b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "4da048c1f9af3db9b573caa7bf7f477b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "01e532453f39093dea6bcde21afb390b"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "89ef0f61f349cafc643e701ced676c03"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "cf59b2299309827dbd150eafa59065bd"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9353a38455e6a5edabc882da2c192ee1"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "24b224182776d0bfcf6ee1f46fa5e3f3"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "baaf07860d62de00e00784dd60c7ca80"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "2bfd95d3ef8a46518e7fbf6c4029c3b4"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f8c12f6cb17bbe972d3d4b9068654031"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8e0a58b09a16338959fbafaea698946b"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "67bb6ae35d169db2d157c5413326e789"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "9882f555fb85a504d6a1673c3156caad"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "30e2d397b39f4ef857ae96752f88f6c1"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "2eac9ad7c3d1300fa26178927da7b21b"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "5eac9764eda37878f8f62ff4eb98f406"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "cbed8af1e693dc18863d0ed619f0229b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "dd5f86e8039ebe3d78edb9a29e9482cc"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "1ebb91d03116283121150e4f3fa9f93e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "f3173e0d8c38abb05c1742c808de2918"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "b945113d8c4f6f2dec3d47e3ec039f60"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "0d62dc6c9dfbb6a58673610e3e0a626d"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "511eb89cfa7dedf967ccefd9f22a4b38"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "9ea585370a0a90998a1ad427f7673001"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "3edb06e6c66233b8f366fbd97021cb31"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "d4176c2f8d610174bbe00c0cca93e387"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "9abc3f207c5d586f197db1fa71bd2cce"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "79c79a7ec9a8d44f4cd586fe2ec7d293"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "f1e32433ef66c9f025e31245859419ec"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "62f61e46e2363ca01bb4f56a9f8c0b2c"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "4dfb57b50a0e87e6d16c3ab068d86eb0"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4c3247af0e1da58222992964b475d42f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "500b85de34e76b8cbd465f6700492662"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "50670df6b2223be9031cd76b781ecb71"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "cdb420fc04d5370df0ecf10222df3a1c"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "510b814c6ec4cb0b9d4e01243b27eaed"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "81a023cef1e4dffc0e1a92120eec02d3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "747ad115f442b152b85f56be78bb4b28"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ee4749af69880ba77be44dc11dfe2b92"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3898088af422cc9785a02092c85ade85"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "3226c4c7f6db7f2da6d8e1cfec2f8795"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "c86dabad6776f6539271c159cfb61612"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "2d491bb7569a099e3a36327950a28ab7"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "7c4e1d10cb2b65e55080a8f7b2db0c5c"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "14af693658b99f0191d6d9ea20830e9c"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "792cf14bc30dfb120cc2be20211b632c"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "374a03cdd8e9a8895cee79c4d18d42d0"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "246b63385e952163ea400ee8ba956d3e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "960a44dfb504dff78b1b8ace5057e776"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "bfd76cde8c74519ed17553a4fe020387"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "cb6ab8f103e7228dd94e02d534416b0a"
  },
  {
    "url": "404.html",
    "revision": "28944b84e81f96050150eb263f5ba2d0"
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
    "url": "assets/js/101.1de4e502.js",
    "revision": "10cf8eac46250f67156619b7c516172f"
  },
  {
    "url": "assets/js/102.0ae65d85.js",
    "revision": "a458d3cb986020ec897958ea9e6c3d84"
  },
  {
    "url": "assets/js/103.cd067644.js",
    "revision": "a4e53b12c5f005006af1e234ed4d5b5e"
  },
  {
    "url": "assets/js/104.01c9d790.js",
    "revision": "5c01db11e920c9305fb681692b6e8d9f"
  },
  {
    "url": "assets/js/105.516742eb.js",
    "revision": "83544141139ab20319cfba1049b2eb55"
  },
  {
    "url": "assets/js/106.47d5dc61.js",
    "revision": "5d988b8b9367ef70e2e26ba3c116db28"
  },
  {
    "url": "assets/js/107.d5adc601.js",
    "revision": "2d038c2ec9e70fe51a143dec5d8ff79d"
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
    "url": "assets/js/11.c33b8c6d.js",
    "revision": "0765ac0970b76b53c2346a2a4d5e2997"
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
    "url": "assets/js/112.af8a0b4a.js",
    "revision": "8d509e34dc01c39c161ce5cad872ea66"
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
    "url": "assets/js/115.e5ecc078.js",
    "revision": "0075104e6a574a599d51fec766043616"
  },
  {
    "url": "assets/js/116.247fe551.js",
    "revision": "571b5f4428344c619b8d642c877dc1fd"
  },
  {
    "url": "assets/js/117.76704abd.js",
    "revision": "9aec4b56d5b6def697c3fee58b09a27c"
  },
  {
    "url": "assets/js/118.c5341320.js",
    "revision": "380c449c8b2db09b6a4853d45975b624"
  },
  {
    "url": "assets/js/119.1e561df1.js",
    "revision": "c50cf289d225501ee5b9a9cade613efe"
  },
  {
    "url": "assets/js/12.78473208.js",
    "revision": "58bbc7a32092ed32d122f83faf4422b4"
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
    "url": "assets/js/122.47a5a45f.js",
    "revision": "9508ca6e6a6ca0f3fa79e82bae99920a"
  },
  {
    "url": "assets/js/123.8ec469de.js",
    "revision": "b2e8d8e46e881a711b83e395c6ab8f65"
  },
  {
    "url": "assets/js/124.bfb0e4d9.js",
    "revision": "7799d7f25ec1465b9987bd5214e2b2c0"
  },
  {
    "url": "assets/js/125.0c4ae716.js",
    "revision": "f12d577c7c3dcb117447e1e6eebdb0ef"
  },
  {
    "url": "assets/js/126.1cb5602b.js",
    "revision": "13ce3f5ee2761432141f51598bb80b22"
  },
  {
    "url": "assets/js/127.cec4e034.js",
    "revision": "aad49464c6526f45254aef5af188a06a"
  },
  {
    "url": "assets/js/128.64f87a13.js",
    "revision": "f2d02e506af52cba0b62edfcd2d2d8b5"
  },
  {
    "url": "assets/js/129.5120f627.js",
    "revision": "f9fdda65d55a17d81e7fe1a137c26365"
  },
  {
    "url": "assets/js/13.d69255bc.js",
    "revision": "0da3cdb828d6769baff1ba5efad25ed7"
  },
  {
    "url": "assets/js/130.3dfa57da.js",
    "revision": "7015443ca8a7d0491174842577b4086c"
  },
  {
    "url": "assets/js/131.2b382360.js",
    "revision": "da7f5b1b9c0cb3e0c395a8d0e998b5ac"
  },
  {
    "url": "assets/js/132.b1aaf788.js",
    "revision": "1fb8e65d13793a911ba8b0e08f4b9aeb"
  },
  {
    "url": "assets/js/133.4af2edda.js",
    "revision": "4db357eb04aeaee745fa138a55c4a2b3"
  },
  {
    "url": "assets/js/134.7468e41c.js",
    "revision": "d3353892d6f77177bb9f173a6a86ffad"
  },
  {
    "url": "assets/js/135.2f45a2c3.js",
    "revision": "a4185b767fba59c6198e8f13daea8a23"
  },
  {
    "url": "assets/js/136.6af7f248.js",
    "revision": "6153550f9ae61f27b2da385a80daafea"
  },
  {
    "url": "assets/js/137.a839a99e.js",
    "revision": "90c80c9eb52df9ca7911e1e30e77f2e8"
  },
  {
    "url": "assets/js/138.3c726a13.js",
    "revision": "9480ad5774524aac9fa792d3ff5d5b45"
  },
  {
    "url": "assets/js/139.880e61d0.js",
    "revision": "7a7af177d32110b095763c966db53398"
  },
  {
    "url": "assets/js/14.453cf302.js",
    "revision": "37d2d93a0a511ba11f293e98e5727682"
  },
  {
    "url": "assets/js/140.26329bb6.js",
    "revision": "ae932eb1a5c18c669e5e3039e994e436"
  },
  {
    "url": "assets/js/141.b467f394.js",
    "revision": "02d215e952f49fecc46ed01e19237c8d"
  },
  {
    "url": "assets/js/142.eb348c5f.js",
    "revision": "48325b48920d178aaff0b3dab13aec91"
  },
  {
    "url": "assets/js/143.0813860a.js",
    "revision": "c9c63a022dad9ff638c1402f3a236595"
  },
  {
    "url": "assets/js/144.f6150796.js",
    "revision": "7909bc96f20be1295288828ac7656e35"
  },
  {
    "url": "assets/js/145.ba584e22.js",
    "revision": "2a713968f2a0b303def5742a9c930c7f"
  },
  {
    "url": "assets/js/146.61963b54.js",
    "revision": "4c51f60466f803f5f64581ef1c50655b"
  },
  {
    "url": "assets/js/147.d8cf0b0a.js",
    "revision": "2a849d7d89003cc702b7728fcc9ac10c"
  },
  {
    "url": "assets/js/148.3781e5f1.js",
    "revision": "6c6915f2a3c6a1d6ee873619f6b593fc"
  },
  {
    "url": "assets/js/149.cad4d822.js",
    "revision": "d9974040bd7e91f233ac3104d355e052"
  },
  {
    "url": "assets/js/15.6e1d7eac.js",
    "revision": "45fd335805d8c08311408283a63c072d"
  },
  {
    "url": "assets/js/150.8fe97810.js",
    "revision": "4fe1815a7b4f0f610190e0525633cf48"
  },
  {
    "url": "assets/js/151.d5512906.js",
    "revision": "20c4c0453605f6c086b59650d9b7694c"
  },
  {
    "url": "assets/js/152.48bb3e07.js",
    "revision": "d006b4d3584d3c42e2b312919bcb8077"
  },
  {
    "url": "assets/js/153.07c5565e.js",
    "revision": "7a67d20581102af525073c5e88740b05"
  },
  {
    "url": "assets/js/154.85dd6886.js",
    "revision": "c9b42cbb9c7f6892ffdbd19681749ddc"
  },
  {
    "url": "assets/js/155.44cdb06a.js",
    "revision": "263c090793bb0a5d12f97636e0dfa9a9"
  },
  {
    "url": "assets/js/156.38f4eb7d.js",
    "revision": "a668df29d619aa2784c0bfffdde8020c"
  },
  {
    "url": "assets/js/157.930f754f.js",
    "revision": "5cd6a0f9ea05fee477fb0c0f08431509"
  },
  {
    "url": "assets/js/158.5f724cd0.js",
    "revision": "c06bbdda50c8ecf3f5608ed99bb6ceb3"
  },
  {
    "url": "assets/js/159.d011bf9d.js",
    "revision": "2a0cdb6e788d4cb92b9cbdf1fceb93ea"
  },
  {
    "url": "assets/js/16.522081ac.js",
    "revision": "7b63cb185d27ba9552de0bec37260bcb"
  },
  {
    "url": "assets/js/160.403379bf.js",
    "revision": "97f657df184fbc9ea9c39d6b889d0a47"
  },
  {
    "url": "assets/js/161.b7bcec74.js",
    "revision": "720622f94cdb58f124b54eb2559280e5"
  },
  {
    "url": "assets/js/162.9fb4120d.js",
    "revision": "84cb2c50cef4b7f359435fad33f8dea4"
  },
  {
    "url": "assets/js/163.c844d89b.js",
    "revision": "18337b4e01e04c3f1ec4917c8b2094c4"
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
    "url": "assets/js/166.371c9bb7.js",
    "revision": "7ab7202a7a1e89d64fc8d107528fdfbc"
  },
  {
    "url": "assets/js/167.9f2fede4.js",
    "revision": "3ec8b8bb9fb15fc4a1eb0f03399ea0f4"
  },
  {
    "url": "assets/js/168.d49d7376.js",
    "revision": "c51f92b684a4bd532f34708968031754"
  },
  {
    "url": "assets/js/169.c565777a.js",
    "revision": "a6d09f18456111d6452e805bd83b0f98"
  },
  {
    "url": "assets/js/17.f38f881e.js",
    "revision": "807aa4101329b577e019f4aa1f9f15ab"
  },
  {
    "url": "assets/js/170.e521398e.js",
    "revision": "094997807be34e636751cb4c33b0b33d"
  },
  {
    "url": "assets/js/171.cbe8a674.js",
    "revision": "18df66757b9fb09e24d445d72a4564cc"
  },
  {
    "url": "assets/js/172.a44ba132.js",
    "revision": "c475bde544a52b4f1767f14f5bceb865"
  },
  {
    "url": "assets/js/173.c44be12e.js",
    "revision": "3bbb739760d43b778532d2ab97f3c354"
  },
  {
    "url": "assets/js/174.61397165.js",
    "revision": "1da765015be64794e051a1a73a9896eb"
  },
  {
    "url": "assets/js/175.e7cf9733.js",
    "revision": "dbc5e91a718f7f48c50b7af126b9ac9f"
  },
  {
    "url": "assets/js/176.d4ab8942.js",
    "revision": "1295063fab86bf4e6a81a1a1d28a8938"
  },
  {
    "url": "assets/js/177.27d21101.js",
    "revision": "e5d4c91ea7c7602d021f5fb7d7ef069f"
  },
  {
    "url": "assets/js/178.09239ce8.js",
    "revision": "d0a7164632edd5a23ed3fcd2fecdc874"
  },
  {
    "url": "assets/js/179.3521cf81.js",
    "revision": "98e9ab79b05a2d237465ce7939d91eb7"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.a6fc3fd5.js",
    "revision": "d223e82fad2e15819b6c8c8597f96098"
  },
  {
    "url": "assets/js/181.4ac08937.js",
    "revision": "723154325e3e9f80d9f3a95b753fe3e6"
  },
  {
    "url": "assets/js/182.6487d5d3.js",
    "revision": "9f8a951ea898167a7d99b0791441de14"
  },
  {
    "url": "assets/js/183.75f90494.js",
    "revision": "45e42d46dccafd015c8e21ae95e81d63"
  },
  {
    "url": "assets/js/184.fc5f849d.js",
    "revision": "63134049489f301d38fa6944c8a70598"
  },
  {
    "url": "assets/js/185.3625cda8.js",
    "revision": "1d61dfa2b7323bb29cc1fb044a645851"
  },
  {
    "url": "assets/js/186.84a7d9f5.js",
    "revision": "efa84c1f5981abe5f5e6739c671dddc9"
  },
  {
    "url": "assets/js/187.8bfb236d.js",
    "revision": "3b144426bc049eae04899433a6f21235"
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
    "url": "assets/js/20.f011ed43.js",
    "revision": "4a3dabf24f0917aacc2157751d439d0c"
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
    "url": "assets/js/25.5f0ccbfe.js",
    "revision": "96cce2444ba30cad8cb39ed460d1236c"
  },
  {
    "url": "assets/js/26.58d0e7bc.js",
    "revision": "d0c033767c5ccfc302d974112e8d522f"
  },
  {
    "url": "assets/js/27.e08fecbf.js",
    "revision": "0002b88f49691ed50df10c56df18701f"
  },
  {
    "url": "assets/js/28.a2939048.js",
    "revision": "3dc29aca8372ef5450123e93f63327e4"
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
    "url": "assets/js/30.f2d58745.js",
    "revision": "d9b19432dca2f17806e09b8345468f56"
  },
  {
    "url": "assets/js/31.c12e8779.js",
    "revision": "9939cbbdfbd54cc9d63b7dd666d2d76b"
  },
  {
    "url": "assets/js/32.50a83e5c.js",
    "revision": "6d320d243e5af9bf7d97ab016d0267bb"
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
    "url": "assets/js/35.ff113d83.js",
    "revision": "7d39ef36494c3452ff38331932b23646"
  },
  {
    "url": "assets/js/36.eed6e92f.js",
    "revision": "27f8793fe2f6f83be4041e53c986b54e"
  },
  {
    "url": "assets/js/37.1e6b4fbe.js",
    "revision": "df31156db6161ca1d1a538c56e683cb5"
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
    "url": "assets/js/4.0526c43c.js",
    "revision": "6181d38875a0dcb0cd315ec82c4d654a"
  },
  {
    "url": "assets/js/40.4b33ac9d.js",
    "revision": "d240cd037769f8239893f9c9c8ee9de1"
  },
  {
    "url": "assets/js/41.2a2bcf63.js",
    "revision": "762d5bf833d003b375c6fd99fda27054"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.2f1c937d.js",
    "revision": "abae80eb278517130a3ade429ca493d3"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.4125e054.js",
    "revision": "80e22d5f1dd59fad2787057ce1e2210a"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
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
    "url": "assets/js/50.83aab505.js",
    "revision": "086b36e5eba7a6ce67278fc5c1549167"
  },
  {
    "url": "assets/js/51.eef46805.js",
    "revision": "7c2c51fd67fdbe1da705cdc70a2a7982"
  },
  {
    "url": "assets/js/52.79355e6d.js",
    "revision": "f0686728fc65f25f6d8d19cc5dc9e2b9"
  },
  {
    "url": "assets/js/53.37b145fb.js",
    "revision": "4ea9b4e544e99689cb9298f5833650f7"
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
    "url": "assets/js/57.04f1d768.js",
    "revision": "c6de4e67c21cadbf2b10cb0dfeeb765f"
  },
  {
    "url": "assets/js/58.42501e36.js",
    "revision": "fa033b288b072f241921afd98faeea07"
  },
  {
    "url": "assets/js/59.710fe114.js",
    "revision": "116d1123506abb3b1fe18c4cfaa82dd5"
  },
  {
    "url": "assets/js/6.3ec98cad.js",
    "revision": "f5da373cbd6861c0ef990056e011233c"
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
    "url": "assets/js/7.f75d44d5.js",
    "revision": "7174eb97c6ba4da340da51988cb9642c"
  },
  {
    "url": "assets/js/70.7cac1002.js",
    "revision": "600e9227ec872a996a853a4a0d6773c0"
  },
  {
    "url": "assets/js/71.fc0a25f0.js",
    "revision": "ddafcf74514d7f2bc7a5931d39236aed"
  },
  {
    "url": "assets/js/72.e3e56d8a.js",
    "revision": "43bee5350b2a9531bf6572d99e23a279"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
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
    "url": "assets/js/79.f1338f92.js",
    "revision": "7b68caa411446765fefa723cfe2bcec5"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.fde4b234.js",
    "revision": "5f6743c9070cd25dc017a22202ff6242"
  },
  {
    "url": "assets/js/81.e37f93b3.js",
    "revision": "ae65d83d5d4bad34dc4fa61970d7cc70"
  },
  {
    "url": "assets/js/82.1563bd0d.js",
    "revision": "b7ab7a15203fc69c19ef9f10a1ff28b3"
  },
  {
    "url": "assets/js/83.1453b2b2.js",
    "revision": "03754f4e8f618141027ce29cbfac94aa"
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
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.728991dd.js",
    "revision": "2c86e57c2826c3d023ce7fbf7e43f75a"
  },
  {
    "url": "assets/js/89.b2ff48b4.js",
    "revision": "a4bfb0186f66e1d2feae5bc48689f8b3"
  },
  {
    "url": "assets/js/9.b25fd464.js",
    "revision": "4fb1b1cec086e0b456c37eba0c313cf3"
  },
  {
    "url": "assets/js/90.26980774.js",
    "revision": "adfa61549200c466763cbaf93540da73"
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
    "url": "assets/js/95.6f0e5117.js",
    "revision": "1a4a873eac9fc932279d4bb0cec266c3"
  },
  {
    "url": "assets/js/96.cd72f5ac.js",
    "revision": "53667fe18c8ee53262326464330ea41d"
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
    "url": "assets/js/99.1c3fb3a0.js",
    "revision": "23a519e7dda6bdafc102dc15fd83e170"
  },
  {
    "url": "assets/js/app.e266b22e.js",
    "revision": "c7bc74a92f9da49ac866a00e2a63deb8"
  },
  {
    "url": "index.html",
    "revision": "d71b9c45a0f18aa0d35efea7758120de"
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
