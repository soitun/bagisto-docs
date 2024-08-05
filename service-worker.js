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
    "revision": "d4d4c84923a5d2feea3b5c5b65b799d1"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "70d0debcd8d1815d41631bc4c62e8de4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d826957a85b3d24f6aa053cb4e084889"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "aede0bd6754eb4e2f227dc9a83374c7d"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "3667f1b0ed6b100088786246dec49a46"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "91a7ee69a884e2fa6a1c1a6d71a67e3b"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "98526be1de97eb8cfc7383614280e3e3"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8571409932c513cba8fc645503808d14"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "5ec2642d4d1360473fbc960c2adfa175"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "4ffe19e23e70403acea97fdedf1c5ad8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "7eff9c645bcc8268391f6dac299abfaf"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "f39e622240f98c2ae08133949c477c81"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "57a8049db26cb5e5402940a388a7a12d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "1f8c4133a1772e39ae590eb6f152af5c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "f1c8204e9dcb3406534b414424e70f9f"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "0adc501230b7d14d0324c61cff01ffd5"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "d4b5225166eadd70c1deae563a2ec758"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "fd4bb6c75860430d90cf389b7bcee758"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "eb5d7064edf53dec23dc91c6dbfe7bbb"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "c682d7df6bbfa8df0f8d0bf8439278fa"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "0f0f5cd28f524b2ef574b11ce44ac0f5"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "edb02241708be7b401928971c4b3b9b7"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "53d5412492b3840b0e104edbc314ba3e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "0356db4130c356702ac79d9d9e75c0b2"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "641ec7ebff12da6f58dac5b4519fd400"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "a32cf18d4e96210e74e94780d14fbf7f"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "31355c886854ebf204a690ecbea71711"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "86a6dfac8ce94caa9db78f785bcfae56"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "5dc69cdbe598865ddf2314637fa5915f"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "e13644730623a225aa5fe3e8d8b69854"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "e73d7149c60a6d6abf90cb854351d066"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "58a46e5128bc3813c13578a19da1222b"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ddef2996a1881d71d0da22d49605cc56"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "65a007e2b74cb91d12fc289573e4eb02"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4db975d1cf8b41e682bba1847428c0b6"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "03e7ac8b6ad0d2502bdd8ab1921eadd9"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b4dffd246a77d42944bbe105ea6b9a61"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "142064d628d510dd6e2083f1ae3a254d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2dd8eb4fad22b01e6834bd270c5d8f03"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "25c7209971775499ceb676128778bbc5"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a991a5f74601dfb6f789759e94484bdb"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "f2a76fdebcf9d145a6b6ee628894fb88"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a58f3237c2c59aa3dc5ce078e02e42a9"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "b0a5e889934237f9752bb0d99b18ac46"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "5bc0148e9b661e8e4b24e776bbc9be60"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "cdcf1ed0e3b6ee5b489f24a7843b5ee6"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "19784fcf9be61e7b33219da63e616e31"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "6f5e66d64c0dd1267b3b666db8712d44"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "b8e212cd06aca75eb40777e8714e156e"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1fcad2958456d5406b7c56035e583492"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "62bb6d7ffb2a397151b2d86fc8bd93e0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b2751ca8fe76fa522b08c6dcf75d03a7"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "2830a731aa1498880cc9379add280bcd"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "200f735477c6a8b0d8db855e6e31723b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "28f3f0faacee871d8004dbec854fd34f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "7164270e778dfcb45e5494c18e35f3e3"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "43d30b9ec328a518be1e2f5b2c604f64"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2ca9d883d51ec907babcd3433516820b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "47aa5eaf2fa6908c6a4260c673a4bec6"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "89f70b681c1cc971801036d66aba8f3c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "1b888171f4dde054980ea6d0dc155b24"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "67ae5d1ad18361401fe0feb05d66692b"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c0a7f8c9850be5dc9de568cbff90b6ad"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9f79a86e5d2c2724eefbab2c81fddcdd"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "372de3e9a4569fb75411f7b50cb4f49b"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "17871c6c05a34e57ac9e4b1ddbedf9fe"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "51c44ef1a521f10242a1676e865d272a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "56854d0d1f0a3f9343eb31d1cec5206e"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b23eda1ebd220e9b0ea89f8f4227eaa4"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1d96f4bb6c3e095e78bbd459ace306a8"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "bf3af555e0c2902599631814302bf4d9"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d33a6986c7c101861e66510b51c97558"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "2b92c4a2650b8b6c0017191abb2588d9"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "1f8c1452e7ed7934dc3639168864514b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "df5ad7186344ac477ff859d7e93d87df"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2c2137355cedb94ea58e2eb1bbf24321"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7c4625cca709fb967ab7e9ad04fc8734"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "572c2eff7df4705639d67e66aaad14a2"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c35ca72562250fc4975005da840a2a14"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "e7797c50cbfe78910071488cb161bf0d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "2675c765557c312de95c2fea43821fa1"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ed297de196ec3e6f5fcbedfb25bd97c1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "fe04e65858fb0a7cf831b6f422abda67"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "42047bb818ead6e08f5d48a980dc18e0"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "447857ab761f30afbb9045306b58570c"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "ab92321d69d4c96bd098f2defc80dfdf"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3d6552b5292a31fac24ca5f7400e3266"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "72d0544ae92035c6ee4ac9085775f899"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "06f49c3070256d2859d3163ea4c52efa"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "59a7f287bf2bf51eaef05f77e0c9a42a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7609f198605ecc2c8e6be839bd888d72"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "54c7f086022a6a6fce7c9593fcbc5d9f"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "08928a1d8d2d4057a473c7f80d05c927"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f686d0e9bb78b444a79f4f6705245c18"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "0b51b078e4e723c4f3d6cfabfc3c27a7"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "240ff87a533e52b3725831d337addcfd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d39a368c9a62b8b48cb0913cecd43a53"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "9fddd618f53ef65708f601f2917e4e10"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "061b15fd48d356ae22e2fd9063c731f1"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "14f72a045cffadd9fa3ba5514ccffe01"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ccb9b2d5542ac2470334cb97bca59f39"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b8eb461e0d82fe7f4471333b392457d5"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b88b087746272f16006d29f331496515"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "0788f5992db4dbf8b0e090a2e5731f6e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "02b564f56901032e7f7237bb2c90e078"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "2d80d64f7120ffb41713321bbf9ece19"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "de14458bcc96b5c3d827fcd305d1800a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "2173afd5c4b6ccdb87a85af49ce07e9b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a95ece9bd428a41f5d5f65a807424870"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ae1dd502d0fb7bec469dc8f26ca0abe6"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b4d441f671b5c6f58df1ad811d410a18"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "96d9f767d4821ba052df86fd6dd5ccff"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "9b048bfc793b502c2100a39c8766e1d0"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "bb4b956bff92fd8a96b9e910716b2494"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "929b53d3a6b44f92564261d37e43e5c6"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "db1ae03671814207900c3be5be2ba2c0"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "deaa7b5b9b8e4211b2dabb555c6d0bbb"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ab4bb68baa149c6c628fc9bfc2a07e12"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "13c9e4bfec2a2664f19af28ee5f7cb2c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "8fd5c82936ab09b543515e342cc0eff8"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "3372252c3e6fc3e3031b9d6205db2f6a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "0eb3cf94ab6d511ed04bcfe8e861d689"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e0626ce4f8ac21c4c1b9e764c84e904b"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "84c284358d0acf560230eff853c13195"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "94cdf205edc18ac9fb3917f527faaa5f"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "01968200cb480ba13abe0c02a90e931f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a9f0042432a3401620a46dc4f7f7940a"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d51340dd59a1d11ed2d2c0d4091a3f00"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "65f3455b451a5eb99c3f5e10f36854de"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1f896fdf696442f8d62270885d5cfb35"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "2c85a973f3a0bcda3015db08a53db254"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3de22ed56a9cbb0493291b835986a1ca"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "06a886f1aaf0f50d8d39443239b28d79"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "31ec3b1a7046770c42505426009a1063"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "9b7acb9c2a6278d330d695f78f4ce037"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "313e0f2964ffd6912e8b1046679b8cb0"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "c7a94545728abce4755876e24db8751c"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "060d8f0c0f06623f9e7f8970dda4b1e6"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "e44fa3f9a0746397245dcec34da37dd5"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "5ce4a33fe75f2e31d61c9eb5f11d350b"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "7feeb66ead33695a7c4febef0a64645d"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "67e00b2bcb5009a73400a20acfe6a8c1"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "dbda2276a4cec6e8c429d668ae82a309"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "e85eace2ba63355f125b44391170723e"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "4c8c274fac0416cde1e2518d0b64fb48"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "c56e45f24ac8deaa3f29b29421dc3e4c"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "7ade1fb3b3d369258eb9dd627e1e81a5"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "e7b051f9685680d2a1e982d0a2de6378"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c4250bc3f8145336f0f16a8c929bc1ac"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "8b82aea9e979e8c046f77c2db1470581"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "e64b2ffd97a001c79525930d9d5b8ff9"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "faf06e0de6edf0a730028e83c04fe233"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "9d3bbb49fbc1913ea3c6b9723340e082"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "4a3e68a4a7289964cdbe97c5172ee8b3"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "4f78e38a0b7447fdde885c56d40cc10a"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "591b3011cbab05aa641520bb5ae72830"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "e54154db170c545b1a3ab84ff3f780e6"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "c849c99f8d9bf8b4822c222f9206f962"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "4cf1681d2f10d2a6796687261508edd0"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "f106c609944087671ca347f1d4b93102"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "de808fe62938cd59f5cd3a39ad1b47ae"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "11342e4c2f015593eb76c62b1ab1a27e"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "6466083bed1ba25aaa79e8da36ee644b"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "621ecdc8b6b68b2d13e01e897bf3abc6"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "7bd99f61feb4cc42e7db751029c33eaa"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "6359c85e0764d4fbd3ab97d2ee5a885b"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "e028622196ba2100b9da6b2fc1697b08"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "6af9d9cebe1db1aea93f294e1c6310e2"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "c55f93b4de050b4cb29b1e0359fa90ab"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "98b6b5c7da1fe9ebb2f715bfee4a4f63"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "e90bde9c371ee48761d34d6904560757"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "42aa780e26cd0a15e528532b474d8409"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "600ee8b8ca8b4480cfa232573b4b7354"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "23fd30e99cc2511fa025101f1c9138ac"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "0b0cadc42d8c81b4bf109122583d08a6"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "a4180b1482860c9046111a6d01cc3d14"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "db0a088f7aca7c0e7cb22043ca3f4f2a"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "918c2a44b0bc524ec36b6b02c0dbb984"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "5bc4fa1d768965d52804cf590d5c105b"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "126f6cfa88756dd50a71eca51e9abfb1"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "1a10aa83d926060c6722cf904ca6f08e"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "6bc6fe90c566d87a87b7fe6eb0283552"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "d3db0cec4f594d6f30c016c8535fb0a0"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "444062b5016e6078fea9325bfc00e189"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "7116d88b99d03c8734a12aa663e45779"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "db1617dfda187f098b1a67dca948010c"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "af3e2d4406906a88aa289e439ab20fdf"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "215dbff6b13943602d50f2da126a50a0"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "2668ac35eaee72e6d30455a0b9774a38"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "0eedf5ad36eba772f2943d54e81f1c8c"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4dc8096dc3f3d25dfa1c662d1ad8b2ef"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "a701a78ca09e889a883f96a625567ef3"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "673897d958e4213accb0959cdabcc43f"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "0f7954b08767298907bcbc473980b7cb"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "3aee8b199db0790aad63c83503056867"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "6035432f8b40e8411cd24a8b5cd761e7"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "faf17379d5f46ee4e45ad7be47642c5f"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "bbabaaccf3268b602c2882301f06de91"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "f508168b58848538d44ec3174d5bd3d4"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "ec873aa0a23cac8ff9a39f12c899af3b"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "f3d2d9a7d6fec9965addc01ea2ce4c7a"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "f47cc60c05a84520dc4a26d5c2158cea"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "08489a9001f0a723706c8d325476badd"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "0dfc619b59c98abe18146b686cafb3f9"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "0d50abdbb8f98398db0b7453716ae123"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "8d5175b88ec64cb7a6b567193428378c"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "8cb398f95490237d01e202f7a9065dc6"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "53344174c2321dd0eb64e2c7a7806b49"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "eb014585a32b6ddb913943363e29bbfe"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "bac4edcadd3dc483baf672989719ce22"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "e8270bcc126a0501201626f22e0de0b9"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "63b528caa18694c2f06a3d63ec1a0bd0"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "c56fd68af0e831c37cba38da4eb48d38"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "1058e126b9a62472c88b1e3c99510434"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "bd9432696e008f185fbd94f32a969649"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "bf53dfb3835aa23b427d411179164bb6"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "716e1d48e1db93ce888fd57c4c70052f"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "219a82373a5db042f39372042e274bad"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "4240c80a929036a4c14dd00c35ca63ae"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "a4ec38c46377e97983d11b852293384d"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "38a86236f0c19dcd74c39ee5350ce087"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "7f622c96a05e818101a78d5516014f7b"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "8334149cffaaf4893ca34e57a5dc8a09"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "025ac33b9f4ac21d1cba57b177d58585"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "6d1e408383495de1282622a29464b582"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "dba2c8b136631d20e5d420d2a4b0dcb3"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "36578371a4cbc18a8eaa397ba7a4b5ea"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "b6ab37513c94162dd7f4e9cc7d65de5c"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "4960efc1834f8b3b72bc63fc548a03cf"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "09e8a119b610f3aa4f69c847801a4983"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "263ed8aa7cf1e904dbe6c5865208ea77"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "81cfc2c5190ddb25c98a58a3a43d474d"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "b76be8f42c02fe5b2ac64c9080e1b65e"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "99a4d54f8fded6ed2bae9804cad9890a"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "e06138452eaa95568555776b4aef9783"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "4f100eba83913ff499c729f69c9b7e1a"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "aa86e2c5d27bed108b41475e43e2dd82"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "3e131c3d7b845565345328f000c88a2c"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "8f15a85cebe0743d2ac63d3e3243accf"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "41da137295c2f480167f15a00c42a66c"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "d14376771a825c068d5957d1ba491078"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "4e99f23562b0a6e1ef523074eef99bab"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "a55131edeb71f3a8d05a7f562880b12a"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "05934ecb7151721cb1b9d7d2bf5915a1"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d997f430cc8af6005eb1398087ed4703"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "b77a3873dce1ff81fbca47b6cd080b59"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "fa3019ce8bce4db255eb0d8a13f3800f"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "653398e519fdf7de82b8d198566e07c4"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "74797f6ddc9f35690e0c353b5ec9ea1f"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "5d55732b442408becdc21be3faacedf7"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "d68f6b5aa642f9812d73054a77548939"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "65bdb2d6b62cefbaf43d06c942b628f0"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "6ff3b6079a78bbffa0971bd975a7abcb"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "0fac5784e2e9a178a9e4c3cfeed9771d"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "430c9541b09dc2f52f75c47ff01ed423"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "e71132ca52c8b0846ecbb5c320584f0b"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "1ea87d6ce7ae6c98bb204d67232d5485"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "31c30b0e35fe72d2fe970a749b585977"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "dfb5227c8bf8f3aca0a4b8dbb2a7b8a6"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "52111dd883680977007a5b5671a77fbc"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "6aa213d0771f968696b859a995841ed1"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "bda655bc56a931c31a2292e2dc562e5f"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "8df2e324d6a74ef95d99dc059d0f08d8"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "de63fafe4de8a12d14b8d1ff6ebbfc16"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "bfd0f92eecfd58693c31b5929cd9f869"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "bbe540cfb30d9787694aeea68a13e54b"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "9a4b961b461be13ddead3ed8e2a29448"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "ed43a2bade89c84defbf35970caf2848"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "c8d7f2bdb5c1490771e0cd1253a0a465"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "5027f44d382f02c83ae78b5a74f021fa"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "c199bec88e1a1cc620aeb1d7288cd74c"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "86534b6e021b8a6fcb9f87756b8cae1d"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "46b0a28ddfb3c8c7ce713f308cc4f3c0"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "247ac08ae5a69d6045b42af91c29cf8c"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "5d2d25e58f3319cc32c02a5ac7548645"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "f3e628563794aff0b0296b42d3e4f89f"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "d77ce9fea2914d7246b55f9652360dab"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "838384770ff3464e9575ec1f133ada62"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "cee084429dce30ad9712e30225665d1f"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "f6a7b160d6ee8b62c9243096b2818127"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "97417a7a6fa1aa7f09855fa889702c1c"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "cd24809c58fccc8f2f5059aeb521060f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "b1b29dbe0da335b1b0f3313f327f9ae3"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "802a1258ddb89dd43b5ad9797c66f367"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "7307bdbf99c9d773654709fa160ccb30"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "89c5b00fd5cfbcd2813ed1f2fbe7a610"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "64cc38e268fc0ca0cfebe64b8d860871"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "40c6d723823c0187b75ad1e8ff7c91a8"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c4acdf9ddb87eb2cde4e7b32af8fb650"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "e18dcefb6018eee6a003b41d0e6eb444"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "5ec03158bfd8ca5b39a846e7e27d3537"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "5ef19584e4a80720faa24120d6e68a25"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "6b4bd9328830386869f27340f9ee9b99"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "662eed0a07cb75022778ef470ccae707"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "1aedffadcad7d1d3986587ebbc7e3d4e"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "8214f091ba7eb4333967c01d015a7c93"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "d1310520ceda9ed9e25c7f4280545fe7"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c68e15250329f40006fce7532cd532ca"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "37a278ffa1abf71fe0e14af071d0c39b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a69eb672f21d14807e5a2badf4ccfd7a"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "0211ecec53fa93906519c6417511241e"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "15ebdcffd79719ec9a8b8b7e2d08b054"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "6f251d900a02693abaae91fc700b2e2b"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a7379e9b647d8e6a30d96cd5a822ac55"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "6853fcbdca7d1706952d6f0d00e68ee6"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "60d0f8845ecd1283ab96a68fa3b1d4ab"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "a778aa0707df331d6340b462d6d79651"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "2a9a2c72087fc74e7a501d1ee507f366"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "785760a4768775b44f9a7fbbe76d0e01"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "d22a56e0956742f586fd49d9bc032973"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "6a14275720e80d73dea7630949e65efe"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "3a9d3cda6f8d7b5930d3195c73e80ab6"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "6796015e7a7312d99c09faaba7db9ea1"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "c2a408b0b41188465f610e3de47c08aa"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "5082b937c03399658039e170291da212"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "de778acd313f57751189210c3fd3d006"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "9a4233d4166305885a1b8adef975ecdc"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "d88fde96f981ef4aa9d1a80b4a5c21a5"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "b16c5c50c84b8ea448d266c4244d7102"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "b8bff517bf7eda49621c6a8a75e7de9f"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d726e69afc46fabe712f99d15941581a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "f0b4c711811746b8533bf88f9928f7a6"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "78735bf4a204d6de798f2f0788640cd3"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "5e89474014e1502db53b7fc4dc106978"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "e738a8d40a90ee058cd8a8e8f7e7bc4b"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "e98335347544369419e3a427fd302442"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "7f8a669f20641073f13d370c5d487def"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "77534951f8976df5d30586d6a5ecb6b6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "b0482d45c422097a26ce08b4fd73d8be"
  },
  {
    "url": "404.html",
    "revision": "e6501a4c3a1e69428baa8e74034ca1ac"
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
    "url": "assets/js/1.32a4a03f.js",
    "revision": "ea1d95853346ebd4d0b944a34cca1da6"
  },
  {
    "url": "assets/js/10.c2f9ce88.js",
    "revision": "f308f64b99681cd0eef8b53b30b523fd"
  },
  {
    "url": "assets/js/100.1a305c35.js",
    "revision": "977aa30c85f837e6d72e3fbd27046e3e"
  },
  {
    "url": "assets/js/101.378d4e1d.js",
    "revision": "f704925beb93c89186983602b3f19e26"
  },
  {
    "url": "assets/js/102.1e91b2c3.js",
    "revision": "4a0a771a97df7ab7b8897503c5eb2ad8"
  },
  {
    "url": "assets/js/103.068e3af0.js",
    "revision": "5cf9839fc8e8ddf38e2d9111bac256ad"
  },
  {
    "url": "assets/js/104.152e9cce.js",
    "revision": "f2d45de082902c0209f62595901876b0"
  },
  {
    "url": "assets/js/105.8a46cc41.js",
    "revision": "735fa77954b1bcb3b303a2d8a5ef5cf4"
  },
  {
    "url": "assets/js/106.0e8f1bef.js",
    "revision": "2a8451653fd147b447ed38967ed5c3a1"
  },
  {
    "url": "assets/js/107.5d466673.js",
    "revision": "f806b90bd9e1bf432aaacc8bedaa1a4f"
  },
  {
    "url": "assets/js/108.05420239.js",
    "revision": "b18d0caf7d8dd05c2cf9f45af106aaf6"
  },
  {
    "url": "assets/js/109.8816e4ea.js",
    "revision": "dd8ecf5ba645da1c3ab702567116e499"
  },
  {
    "url": "assets/js/11.46652605.js",
    "revision": "e2dc83ddec90f48019b9e53e5d7f3d21"
  },
  {
    "url": "assets/js/110.f9c78488.js",
    "revision": "f036463a13262d0289b6002f4e2f011f"
  },
  {
    "url": "assets/js/111.3b2e0d52.js",
    "revision": "99b3b4a91b31f5fbbc2ab4c7dd7b9bb8"
  },
  {
    "url": "assets/js/112.f859f43f.js",
    "revision": "04a7c927dc210a89b1aca8ba2afb9c9f"
  },
  {
    "url": "assets/js/113.c37bfd31.js",
    "revision": "3b11e25c6b1309db6a7c2fd1899a4b58"
  },
  {
    "url": "assets/js/114.37585659.js",
    "revision": "d55b51ca0beaf5cb3c35d6bf7f3da105"
  },
  {
    "url": "assets/js/115.942dc607.js",
    "revision": "898f775c86cf7a5422ec7e06bfc5bf55"
  },
  {
    "url": "assets/js/116.182f8087.js",
    "revision": "70ca9f841c175ae2d2deef847ac8d166"
  },
  {
    "url": "assets/js/117.97fe66cd.js",
    "revision": "d9a14469c66418064f81f73eaf0c1228"
  },
  {
    "url": "assets/js/118.8a548c2d.js",
    "revision": "f6fa5b2a46c0df804f8fa648bdde2747"
  },
  {
    "url": "assets/js/119.ff0dcd70.js",
    "revision": "fc7b04f5a2278491d0868b7b9b22bdc5"
  },
  {
    "url": "assets/js/12.9cdb6b75.js",
    "revision": "ff61a87accda47e17a9c3df0cdb35dd5"
  },
  {
    "url": "assets/js/120.583e41b6.js",
    "revision": "3e904ecf8f2335e9c633ef6c15381b97"
  },
  {
    "url": "assets/js/121.24857512.js",
    "revision": "50cfad5e896234486f2bb4e76c88c628"
  },
  {
    "url": "assets/js/122.21c24108.js",
    "revision": "15454d21e4b7251d16b3cfe6c743645c"
  },
  {
    "url": "assets/js/123.c6c268ef.js",
    "revision": "dfe779523506b03ffe9d8139a8182396"
  },
  {
    "url": "assets/js/124.2d25ddc3.js",
    "revision": "3f0b26e3f5b713a28e1ed29676327f22"
  },
  {
    "url": "assets/js/125.7db8baec.js",
    "revision": "c887a9aad571d61b0d1fc8cf1592b498"
  },
  {
    "url": "assets/js/126.40a2ccbb.js",
    "revision": "9e2753986eab9f74a5f0769ab8bf56ff"
  },
  {
    "url": "assets/js/127.80269453.js",
    "revision": "682fce36bed5adaa41fdf722d286150c"
  },
  {
    "url": "assets/js/128.1e388921.js",
    "revision": "719d7a5b63350109f11fa16fe3e1e9ce"
  },
  {
    "url": "assets/js/129.66b54fad.js",
    "revision": "1f32972ec5c8a25e1f17e1331e5a580c"
  },
  {
    "url": "assets/js/13.a21d1525.js",
    "revision": "0985ee813e01c3adeec2a8ac1c8993e3"
  },
  {
    "url": "assets/js/130.88fa45f7.js",
    "revision": "9c2511665e955d1f309ede03f283c783"
  },
  {
    "url": "assets/js/131.58d24a31.js",
    "revision": "9da8d72f12a6be65070df1f15c416905"
  },
  {
    "url": "assets/js/132.8ee0acd7.js",
    "revision": "3b3327b56d5eac55905c60d426856ff5"
  },
  {
    "url": "assets/js/133.2c16be10.js",
    "revision": "9781d2322cbf102d54aff54b14eb572d"
  },
  {
    "url": "assets/js/134.9a260eeb.js",
    "revision": "34c8bdb580c8e8509cf4c27e3f65482f"
  },
  {
    "url": "assets/js/135.8a74003d.js",
    "revision": "347f7af9a8a18f7846a575792e004314"
  },
  {
    "url": "assets/js/136.d016efb5.js",
    "revision": "443abce0a89f043130a854d0f644b9c7"
  },
  {
    "url": "assets/js/137.0bdb0e21.js",
    "revision": "2e8c4e87e6bb696d5694afb292cf1c27"
  },
  {
    "url": "assets/js/138.a87b0ea9.js",
    "revision": "0ffc4beba5d5fc144cd6136f65ba075a"
  },
  {
    "url": "assets/js/139.6ca3f056.js",
    "revision": "93b7e4cbb393cddf2017f18426337b43"
  },
  {
    "url": "assets/js/14.2552a06a.js",
    "revision": "5ecbfb3ee1a6d3acc1d26de98cb015f4"
  },
  {
    "url": "assets/js/140.8dfe05b4.js",
    "revision": "ef0f33330fb9989a808be53621b0ccbc"
  },
  {
    "url": "assets/js/141.c9dc9d09.js",
    "revision": "bdb83011bc6a8a816d0e149ac27ce307"
  },
  {
    "url": "assets/js/142.4a1cb001.js",
    "revision": "475a2545cc5b2f48d37b8517f6e0eb38"
  },
  {
    "url": "assets/js/143.50871629.js",
    "revision": "183ca1706abd648f8b0e8f11b0764b5f"
  },
  {
    "url": "assets/js/144.bd8b6b47.js",
    "revision": "9f7f80a4f5650c6e8ef32129228e4b91"
  },
  {
    "url": "assets/js/145.e9110e61.js",
    "revision": "caaedd591a6c0896dec1960ab8d86f0b"
  },
  {
    "url": "assets/js/146.9369697a.js",
    "revision": "2081c089c6ade5f1efc4f1ce9cbd7b74"
  },
  {
    "url": "assets/js/147.9ebaea3f.js",
    "revision": "87efa4512a9cf6d510499acaafff6e99"
  },
  {
    "url": "assets/js/148.2849e124.js",
    "revision": "b7de27481ce1fda911f0b9f599dace89"
  },
  {
    "url": "assets/js/149.5f8876af.js",
    "revision": "7b00c259f37e555da4c0e8e426d7ee8c"
  },
  {
    "url": "assets/js/15.60ec94d9.js",
    "revision": "c6c427754b43a2187ea56bf98d9ff608"
  },
  {
    "url": "assets/js/150.78e1e2c7.js",
    "revision": "275075dd0b01a5b04bbb10d5daaaca4e"
  },
  {
    "url": "assets/js/151.45089048.js",
    "revision": "96f680b255ca3b81aa6a91d2b8f31304"
  },
  {
    "url": "assets/js/152.e99310c1.js",
    "revision": "b5f841657e937a8ac7defbf0c9d367a2"
  },
  {
    "url": "assets/js/153.f52cbda7.js",
    "revision": "dbc9fa32da7b8df588cb06f0f957db82"
  },
  {
    "url": "assets/js/154.cdbb3c25.js",
    "revision": "94546185ad074c3afd7130cd95737f2f"
  },
  {
    "url": "assets/js/155.15a3ee1d.js",
    "revision": "f3917c7657010528ef93f4d4ebb147f8"
  },
  {
    "url": "assets/js/156.1fe72699.js",
    "revision": "de827a100bf72eb0fda483c5216fd892"
  },
  {
    "url": "assets/js/157.23c6c6f8.js",
    "revision": "4393f81a19167b16960ca437451b3989"
  },
  {
    "url": "assets/js/158.5492238a.js",
    "revision": "b825a25f7a130b5cb2d7ce528f0556c1"
  },
  {
    "url": "assets/js/159.c2f334fa.js",
    "revision": "0238dc4855f425821f47f9e097424d75"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.ace8fc6a.js",
    "revision": "a61a0c480d0931843a3a0456726db1f9"
  },
  {
    "url": "assets/js/161.46fae49e.js",
    "revision": "c8119d42b91a338bffe475d07354880f"
  },
  {
    "url": "assets/js/162.af226457.js",
    "revision": "69139100fc5ab10170d43259ce39e78e"
  },
  {
    "url": "assets/js/163.f905de28.js",
    "revision": "ca70714f02769e88d0d552e77198fdb9"
  },
  {
    "url": "assets/js/164.973e92fc.js",
    "revision": "f6f53975371dd6ec2b0deaa657bc2c27"
  },
  {
    "url": "assets/js/165.a1b75370.js",
    "revision": "cf47988cff22f655353d9821707e31b8"
  },
  {
    "url": "assets/js/166.7ad53dcf.js",
    "revision": "0656f63155c00095f76ddff8719fe63e"
  },
  {
    "url": "assets/js/167.7a05895b.js",
    "revision": "f339085a82d15402e4a153d348348932"
  },
  {
    "url": "assets/js/168.5b567bf5.js",
    "revision": "00606bb73cf0d667198f4db5a437e20b"
  },
  {
    "url": "assets/js/169.4669c87b.js",
    "revision": "5646af2da3090b4ed480a5f68ed11e33"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.71b75952.js",
    "revision": "5912b69bbe357d309a21a9e5b4007c20"
  },
  {
    "url": "assets/js/171.7d7e5ca7.js",
    "revision": "3fe2c36ceda78670b281fb5ed452bb10"
  },
  {
    "url": "assets/js/172.4589197a.js",
    "revision": "d9592cfb58423dfd43c46469f895a0c8"
  },
  {
    "url": "assets/js/173.a2e98e61.js",
    "revision": "a470bf861e52bc11ce35d227d903d155"
  },
  {
    "url": "assets/js/174.3bc9e113.js",
    "revision": "7c23cd001e3bc635e5f46d48d59dc70d"
  },
  {
    "url": "assets/js/175.90e23ae6.js",
    "revision": "f491646978c1bbc558ecf3ae5c902103"
  },
  {
    "url": "assets/js/176.8cf649a8.js",
    "revision": "cd3bb79a2c807a4ac8edcf1488630fc3"
  },
  {
    "url": "assets/js/177.9a1b3d9a.js",
    "revision": "bc55b171959fb4ba057fc907ea3fdb6c"
  },
  {
    "url": "assets/js/178.5aeb5c1d.js",
    "revision": "5c4365387f96a9d7192ec091e9fec8ee"
  },
  {
    "url": "assets/js/179.29560e52.js",
    "revision": "e3f46247be2ff5646930fab0921b2ccd"
  },
  {
    "url": "assets/js/18.1a8d9e78.js",
    "revision": "5f1bc4ebca2efe8dab86d8d6af9ccdb5"
  },
  {
    "url": "assets/js/180.66a02757.js",
    "revision": "95d3c86eb11d9b74c78005cc03c7d732"
  },
  {
    "url": "assets/js/181.cfd57809.js",
    "revision": "c745395b5c6424909952fa351d2600b0"
  },
  {
    "url": "assets/js/182.3aad6b1e.js",
    "revision": "515f4c1e56d32f3380c7bdc43611f4bc"
  },
  {
    "url": "assets/js/183.cdfc563b.js",
    "revision": "4f83361f964d397d0b33f3d40155f9ca"
  },
  {
    "url": "assets/js/184.06f64509.js",
    "revision": "268e878ed481db66206dcf1f06fec05c"
  },
  {
    "url": "assets/js/185.1896ca8b.js",
    "revision": "c11b9887828d3f77c3cd3ee9f783a9d4"
  },
  {
    "url": "assets/js/186.aaa25997.js",
    "revision": "afbf358c2416f1fd1bdce9806eb3632f"
  },
  {
    "url": "assets/js/187.9056ab2d.js",
    "revision": "e407b5a54064e82f980700e661d11a43"
  },
  {
    "url": "assets/js/188.7400829b.js",
    "revision": "f3da1e29fa14ec0aa6ac18c2c7b52d13"
  },
  {
    "url": "assets/js/189.4ebd0fa6.js",
    "revision": "05f42a05c4fe4cba300a387614d2aa75"
  },
  {
    "url": "assets/js/19.f11ba04f.js",
    "revision": "f4b2254362681b4b76aaeaf484b53424"
  },
  {
    "url": "assets/js/190.4e2f63f2.js",
    "revision": "68ffa437bbed06a38a3639d0ffbeb67a"
  },
  {
    "url": "assets/js/191.abe91662.js",
    "revision": "19b7cb693a796e73841b3c48a0e2dd9a"
  },
  {
    "url": "assets/js/192.392eb4a6.js",
    "revision": "2dd4d2d1499b82441fa12982485f06d3"
  },
  {
    "url": "assets/js/193.707482ca.js",
    "revision": "d1a4abacab5c5c157fb22cdc2fe0a92f"
  },
  {
    "url": "assets/js/194.2331c611.js",
    "revision": "52b1f0d70e5d48c90e8939790a79562a"
  },
  {
    "url": "assets/js/195.804cc0d3.js",
    "revision": "1fdf70564e5446953d105b150c6bdaf2"
  },
  {
    "url": "assets/js/196.27a7544c.js",
    "revision": "ffd9c7aa6d2baf00cdf7268f971cdfcf"
  },
  {
    "url": "assets/js/197.0802bc50.js",
    "revision": "af21950f4d7d73c707c0c0b588cd80bc"
  },
  {
    "url": "assets/js/198.997679cd.js",
    "revision": "c38fc9d1ee65c948b85af3f71f90489a"
  },
  {
    "url": "assets/js/199.f255b058.js",
    "revision": "4fde7820a0e7bbc15aceb3dd13c99000"
  },
  {
    "url": "assets/js/2.ccfbf4f4.js",
    "revision": "705d5a4a214f6e046edb22e84b6b2b8f"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.d8373a9d.js",
    "revision": "8e69d72c936dcef42250433763ec716d"
  },
  {
    "url": "assets/js/201.343ab6da.js",
    "revision": "ead07e2266502966cdfa1fd497b33af9"
  },
  {
    "url": "assets/js/202.abcc5cc4.js",
    "revision": "bc78faa89cfb76dfe7a770f7cf497d88"
  },
  {
    "url": "assets/js/203.70a54679.js",
    "revision": "75163bfb0756df4a59c8ade49c2d81b8"
  },
  {
    "url": "assets/js/204.91a75d73.js",
    "revision": "7050988ebad7894a305afc6e4e110133"
  },
  {
    "url": "assets/js/205.4f4b54a2.js",
    "revision": "cf027163d42ec5fbbfb0c6570ecfae82"
  },
  {
    "url": "assets/js/206.74454b5e.js",
    "revision": "8e82501487fde4b3c442c3c51cf0ebbf"
  },
  {
    "url": "assets/js/207.149316f2.js",
    "revision": "a2c584071ead609fe179cbb6935c62d2"
  },
  {
    "url": "assets/js/208.3148c1a6.js",
    "revision": "592386d6981ff8aece98ea2e11fb26b3"
  },
  {
    "url": "assets/js/209.85833c2c.js",
    "revision": "a41a86c158ffed6a4e01f96373dafda6"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/210.e278ce43.js",
    "revision": "14bf14402be2ebbe94f019ae29d1a596"
  },
  {
    "url": "assets/js/211.e1a7b4bd.js",
    "revision": "cab6e11430c065916cedcea6ac87c261"
  },
  {
    "url": "assets/js/212.d48ac123.js",
    "revision": "2a8ebac03075731d76d6f086c53d715a"
  },
  {
    "url": "assets/js/213.2bed323e.js",
    "revision": "988a5b59c18ffd486f5e1b542a259b84"
  },
  {
    "url": "assets/js/214.6101d2be.js",
    "revision": "16fadfb5c072aa637e6ec5acb319ed75"
  },
  {
    "url": "assets/js/215.5770b03d.js",
    "revision": "54f141b8bb01c544f84cfe2cd6eb6906"
  },
  {
    "url": "assets/js/216.0ba03267.js",
    "revision": "b220d2ef96b0553e30432fffdd9854de"
  },
  {
    "url": "assets/js/217.249d7bc2.js",
    "revision": "00569f44475c15e5a845d62e548d9bca"
  },
  {
    "url": "assets/js/218.9a6a6e4e.js",
    "revision": "765294fca381873f63197b351860b60a"
  },
  {
    "url": "assets/js/219.cff12022.js",
    "revision": "80be2959c46bace608608c6dace9238f"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.0acffa0d.js",
    "revision": "ace2b001992384f385d64ceef07733e8"
  },
  {
    "url": "assets/js/221.3784eabf.js",
    "revision": "d1c2749a4de1a52500cdd73189c096cd"
  },
  {
    "url": "assets/js/222.7c7de0f4.js",
    "revision": "05806afa97a1a95650495c320f01a33e"
  },
  {
    "url": "assets/js/223.59eef101.js",
    "revision": "06dd4e6207fbd2988f9130d1013b82bc"
  },
  {
    "url": "assets/js/224.7bb7039b.js",
    "revision": "dace2b45d451d04987217d69e4917b12"
  },
  {
    "url": "assets/js/225.e24f598e.js",
    "revision": "dbbe80caf05437ff238306a90eb236f9"
  },
  {
    "url": "assets/js/226.5c6b126b.js",
    "revision": "7d88daabee7b84ae9314d89fd39d02ea"
  },
  {
    "url": "assets/js/227.85acea17.js",
    "revision": "8016c8ec3475d90147ea5154531da942"
  },
  {
    "url": "assets/js/228.37590e26.js",
    "revision": "6b612c4988e8b1729cb2713fe9f274fb"
  },
  {
    "url": "assets/js/229.4e8433a1.js",
    "revision": "140dd30fc0ddbc5622e3bd4bf79ac666"
  },
  {
    "url": "assets/js/23.d517fdb6.js",
    "revision": "41d2ce4a3f295900d7fb0f8ce32dda11"
  },
  {
    "url": "assets/js/230.3997c708.js",
    "revision": "64ae0735daae56fdf3e8d77e4b7f5f5c"
  },
  {
    "url": "assets/js/231.bbe42610.js",
    "revision": "40e492c74cf0a70774aa1fced5d1f7aa"
  },
  {
    "url": "assets/js/232.37ad2836.js",
    "revision": "e4d5d8ec1c44ff74ada6f9e7f747e8a7"
  },
  {
    "url": "assets/js/233.ddbacebd.js",
    "revision": "a06f43f536cfa6f302f67a25baf8c82a"
  },
  {
    "url": "assets/js/234.f9fd25f1.js",
    "revision": "ada3c2c3ab324704f152ad9cc11c46fc"
  },
  {
    "url": "assets/js/235.38f651ea.js",
    "revision": "9a18b436c82fbbaae6931b66be6f5c10"
  },
  {
    "url": "assets/js/236.a0f72509.js",
    "revision": "960c90d3d5016b6e0821ae755fec1f39"
  },
  {
    "url": "assets/js/237.55142dea.js",
    "revision": "fdc3ca92b13dcbfee5bd05fc0245b4a4"
  },
  {
    "url": "assets/js/238.8ba313b3.js",
    "revision": "55e68fe4e02c00e5678334cd0c413636"
  },
  {
    "url": "assets/js/239.99ab98e8.js",
    "revision": "6e13f53ade157288878bd3fb6640c995"
  },
  {
    "url": "assets/js/24.b85d52e3.js",
    "revision": "cfb244bae4b8cb7807367837d095fb49"
  },
  {
    "url": "assets/js/240.b7b9e585.js",
    "revision": "14f3bd207f84f33bb3d4039e1903e4f4"
  },
  {
    "url": "assets/js/241.cd2d5791.js",
    "revision": "74523ec54f6c7a136560520f8da43cb4"
  },
  {
    "url": "assets/js/242.ec7f433f.js",
    "revision": "7a023a5cd3969b20cef340c6b2f01346"
  },
  {
    "url": "assets/js/243.3e2271e6.js",
    "revision": "ff6cce77026a4170a4bd32caa7421c85"
  },
  {
    "url": "assets/js/244.2bcd5851.js",
    "revision": "4691577e969e63e468d6a9b2d9ad8a41"
  },
  {
    "url": "assets/js/245.3fdb729f.js",
    "revision": "8e66bacb16c9816e0d15f9207c762e5b"
  },
  {
    "url": "assets/js/246.9f8ab89b.js",
    "revision": "f8ce069ee4393dab6e557e7c8fb58dfe"
  },
  {
    "url": "assets/js/247.f8a95325.js",
    "revision": "90b64fb7e392bb0c36d87dae5f28d4ec"
  },
  {
    "url": "assets/js/248.32323efb.js",
    "revision": "c8cda533fa22ef0a5b895649083bcc40"
  },
  {
    "url": "assets/js/249.3ba69814.js",
    "revision": "cb4f93a822b8dec43f6942a1877c3301"
  },
  {
    "url": "assets/js/25.167283b9.js",
    "revision": "35089174f3b6b63c18d1ef09407e5e50"
  },
  {
    "url": "assets/js/250.9e0fdb5e.js",
    "revision": "dc42998a786f549c32111c6a70333751"
  },
  {
    "url": "assets/js/251.a2c80a0a.js",
    "revision": "611c6ed2dee7ed180893bd983f45fc70"
  },
  {
    "url": "assets/js/252.08268146.js",
    "revision": "faf62e93d6ecb232f2433cf176c992c6"
  },
  {
    "url": "assets/js/253.a682f5f1.js",
    "revision": "9274200b8d77d81a717f861f03154799"
  },
  {
    "url": "assets/js/254.8f62a394.js",
    "revision": "12e8e177125de8b0c2e0785046721062"
  },
  {
    "url": "assets/js/255.0aa798c2.js",
    "revision": "9ada97e56654f678c0cc0bceb16f00a2"
  },
  {
    "url": "assets/js/256.61016126.js",
    "revision": "8b47133d5dc63e8a7e53ac2f82566067"
  },
  {
    "url": "assets/js/257.d2e44b9b.js",
    "revision": "257716adc54b98810585ba90f144f6cc"
  },
  {
    "url": "assets/js/258.2bf8095b.js",
    "revision": "ed562160c50e3d209bb207acdf022d84"
  },
  {
    "url": "assets/js/259.57ccdaf0.js",
    "revision": "077377135d46c387bc719f6c88dda6d3"
  },
  {
    "url": "assets/js/26.5bef7522.js",
    "revision": "fc32c2d6a59aa893c5c5f198ad56cb96"
  },
  {
    "url": "assets/js/260.c4811b7b.js",
    "revision": "f1431de1d2355000fbdd2a840cbeb9ce"
  },
  {
    "url": "assets/js/261.73d651b0.js",
    "revision": "080b735b25154019340d1ce54e831911"
  },
  {
    "url": "assets/js/262.063fac8d.js",
    "revision": "84d0e1e60f2a89e9f8a69599d60cc215"
  },
  {
    "url": "assets/js/263.abae6e70.js",
    "revision": "f4c2bbb0f84e0958452093a8b084e074"
  },
  {
    "url": "assets/js/264.fae0ed55.js",
    "revision": "0eee2872784ff19b00e251dffe767a2c"
  },
  {
    "url": "assets/js/265.396130f3.js",
    "revision": "c2cb3a37a537c2232137a71d1820e642"
  },
  {
    "url": "assets/js/266.35baccdb.js",
    "revision": "56ba3a3334484318d476400e12322a0b"
  },
  {
    "url": "assets/js/267.eaf513dd.js",
    "revision": "81a8dd0ef770e759c75eb67bf5bf3d2a"
  },
  {
    "url": "assets/js/268.0f35c2a6.js",
    "revision": "c640217f3ab31303f0f53af7de73c09f"
  },
  {
    "url": "assets/js/269.a2242b74.js",
    "revision": "9c6be010203af6e15e1b0940dde28383"
  },
  {
    "url": "assets/js/27.4c8a9a85.js",
    "revision": "6e3563d9b6ea228307c6dd3a8e0aee22"
  },
  {
    "url": "assets/js/270.6f0ef805.js",
    "revision": "d03cb8e2338e6586ff3eee7dc06061df"
  },
  {
    "url": "assets/js/271.cdce3280.js",
    "revision": "af99cb5b7a7c8117820904cff42ee03d"
  },
  {
    "url": "assets/js/272.8a51540a.js",
    "revision": "77b24b7678203f443aee4951c3fe2fd9"
  },
  {
    "url": "assets/js/273.561fc003.js",
    "revision": "c942561bca68c150574e2f113dea0ec6"
  },
  {
    "url": "assets/js/274.4d8f5abb.js",
    "revision": "460c287fb42e34dc5c5697f67758fb9a"
  },
  {
    "url": "assets/js/275.6c03b8cb.js",
    "revision": "d74805af9affc489024730a0d7cbe8a6"
  },
  {
    "url": "assets/js/276.9210eeb6.js",
    "revision": "0569201af96f616961c577c2bfb60487"
  },
  {
    "url": "assets/js/277.011fddd7.js",
    "revision": "c9a6a7dc6762f3673036ca77e1daec95"
  },
  {
    "url": "assets/js/278.12bdfaf4.js",
    "revision": "327efb4cbf22a1b34916290f3c9a3202"
  },
  {
    "url": "assets/js/279.b5c77e94.js",
    "revision": "ebd4e5e4fdc4ee95ea4dacd7f1821072"
  },
  {
    "url": "assets/js/28.5250e7e7.js",
    "revision": "2f4e3776a2bbb79faba69394d0a40963"
  },
  {
    "url": "assets/js/280.cae6cfa9.js",
    "revision": "53ed11c0cc388dadabb3994cc20310c9"
  },
  {
    "url": "assets/js/281.f49d6b8e.js",
    "revision": "ad768ec0acf65702444d524eb5186003"
  },
  {
    "url": "assets/js/282.0868f339.js",
    "revision": "2998d835d312881dd468c63bcdf5a189"
  },
  {
    "url": "assets/js/283.4d569fa3.js",
    "revision": "a4ce0905c5774f8e9e054530b1672923"
  },
  {
    "url": "assets/js/284.4c91815b.js",
    "revision": "e1beeb3a8bebdbc631f43ad2c2f3b4a4"
  },
  {
    "url": "assets/js/285.27838cfe.js",
    "revision": "48330247de44c0c0ffad2fe77a1e343e"
  },
  {
    "url": "assets/js/286.003c4311.js",
    "revision": "4557fbd42f2f02164425112c17973283"
  },
  {
    "url": "assets/js/287.ac81ca3f.js",
    "revision": "a0e6fafb702775ee4e6c823fe3c675ce"
  },
  {
    "url": "assets/js/288.5266fd37.js",
    "revision": "92846cbc97e7b260f8bf2a15f336b2d5"
  },
  {
    "url": "assets/js/289.a70d1ba7.js",
    "revision": "a41c50e80eb05d4c147ced0bd1aad521"
  },
  {
    "url": "assets/js/29.f40d804a.js",
    "revision": "27542a1733f74d0aaa4195b6ed66ddb5"
  },
  {
    "url": "assets/js/290.2e49ee68.js",
    "revision": "1074b7584aff5c938d820878aa9c918a"
  },
  {
    "url": "assets/js/291.5f87c75f.js",
    "revision": "9911a6f0d0930c17f6411bde505b5657"
  },
  {
    "url": "assets/js/292.f84a46f1.js",
    "revision": "c1ca2be1e166e85c419224dbc0a33c26"
  },
  {
    "url": "assets/js/293.05902eac.js",
    "revision": "b27ace935ba7baa46b38a091136f89a4"
  },
  {
    "url": "assets/js/294.fbd5c93b.js",
    "revision": "d993501141f36423966361b11630edb3"
  },
  {
    "url": "assets/js/295.9bfaad0b.js",
    "revision": "daf18e61adff8356783101f130910cdd"
  },
  {
    "url": "assets/js/296.350237d8.js",
    "revision": "900227419c1f129d62a8acaaaab50a92"
  },
  {
    "url": "assets/js/297.2bc5ee72.js",
    "revision": "86fc2bfd0f2be9b65c0e35b5cca67ddb"
  },
  {
    "url": "assets/js/298.5bd38e68.js",
    "revision": "e1619089148414d7ffa6e185d65fa01f"
  },
  {
    "url": "assets/js/299.709d6678.js",
    "revision": "8a591e7d5f8f8b9d1764dcafd74c00a4"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.ead79742.js",
    "revision": "35570a23c9e703369144b8e75bae435d"
  },
  {
    "url": "assets/js/300.5d0de77f.js",
    "revision": "112f63713a2ad7a9cd5c92c25f02ec40"
  },
  {
    "url": "assets/js/301.898757c1.js",
    "revision": "3b2e193073402c76d4d8f075c4fd205f"
  },
  {
    "url": "assets/js/302.6264d283.js",
    "revision": "9beac68091087aa23e4cda5b3aec3d29"
  },
  {
    "url": "assets/js/303.0f13392a.js",
    "revision": "96b869ec7a1ebf6b7c0c036cb1e2314b"
  },
  {
    "url": "assets/js/304.78fe3af0.js",
    "revision": "ba005538306074f812f441be8cebd73e"
  },
  {
    "url": "assets/js/305.35f63e12.js",
    "revision": "0b5cfce2b046e576f97f4fb19f88bf07"
  },
  {
    "url": "assets/js/306.1564585a.js",
    "revision": "73c50423aeb874b014a19e71c90f3078"
  },
  {
    "url": "assets/js/307.6a36a4bb.js",
    "revision": "bd9035257dcb10a801288858269c60e1"
  },
  {
    "url": "assets/js/308.03519414.js",
    "revision": "d9c9cd5775d7501dec39b10d7b2da837"
  },
  {
    "url": "assets/js/309.e473e8e0.js",
    "revision": "475d37f01e7078ffa402ad84663d8cc9"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.5617ef28.js",
    "revision": "50e5bfacc259ac3f892f570388fa56a7"
  },
  {
    "url": "assets/js/311.fd73c30f.js",
    "revision": "49d7846055da77f75fadedaf04c65392"
  },
  {
    "url": "assets/js/312.5f75383a.js",
    "revision": "f82e99dbb5acdf371eb07abeceb5124e"
  },
  {
    "url": "assets/js/313.654490f1.js",
    "revision": "55b6dd10bd61a7fc633f6326474d268a"
  },
  {
    "url": "assets/js/314.a4e369c4.js",
    "revision": "d7d25a47b707f924c26c59938faf2470"
  },
  {
    "url": "assets/js/315.c03a7d5a.js",
    "revision": "2319b30deedbc77d09c1ce1ce0c337c0"
  },
  {
    "url": "assets/js/316.ab895bb6.js",
    "revision": "66a70594ef832a6e053e245a47a72d51"
  },
  {
    "url": "assets/js/317.62a4d304.js",
    "revision": "98fa8b2d6a2cc06b7e55143077cbf9bd"
  },
  {
    "url": "assets/js/318.41ec6027.js",
    "revision": "12e2cce12794924509ea7b68beec7557"
  },
  {
    "url": "assets/js/319.c47e63e2.js",
    "revision": "d44df8261e1c672e427d8285e461c293"
  },
  {
    "url": "assets/js/32.52301937.js",
    "revision": "14399075e36a34993b2c0b9e45b4a26f"
  },
  {
    "url": "assets/js/320.bdc9f738.js",
    "revision": "da14a5fda8ab241490fd9cf8cce8aab3"
  },
  {
    "url": "assets/js/321.a6e9fc35.js",
    "revision": "bcf029bec096458886932980195a193a"
  },
  {
    "url": "assets/js/322.91f1ad60.js",
    "revision": "892ef3408a409faf08f36aaba9f65054"
  },
  {
    "url": "assets/js/323.a4f513a6.js",
    "revision": "4b7f904c313de2d00b891f93a3f12d73"
  },
  {
    "url": "assets/js/324.23daaa9a.js",
    "revision": "e8bb6f722aba349ca2fb631a25ea77ab"
  },
  {
    "url": "assets/js/325.75d521ef.js",
    "revision": "40c2cef3610f53e3551986c992a7a1d6"
  },
  {
    "url": "assets/js/326.aabac7c1.js",
    "revision": "ac9c6c0e977e5fe66ca97537811b965d"
  },
  {
    "url": "assets/js/327.3c552c0e.js",
    "revision": "f96dc9f251ccb04ff2ee027dccabe5fa"
  },
  {
    "url": "assets/js/328.5b8e6510.js",
    "revision": "61a31e66f1dc6e7448ed4da6b62ef2af"
  },
  {
    "url": "assets/js/329.0b07c606.js",
    "revision": "246ac62ab983a508dc8d8390576cccee"
  },
  {
    "url": "assets/js/33.bccd2edb.js",
    "revision": "8d43494be51219770c25a3bd4634a5f7"
  },
  {
    "url": "assets/js/330.8cf5b667.js",
    "revision": "f0f30cb333754cbfcee2211dad54a7a6"
  },
  {
    "url": "assets/js/331.ae6827d5.js",
    "revision": "aeb1f11c3c0d2f1b939b24b7976e368d"
  },
  {
    "url": "assets/js/332.7ceadb53.js",
    "revision": "5866da03e1d527d4e4b7e6ca625eb0ea"
  },
  {
    "url": "assets/js/333.71c6e94f.js",
    "revision": "7a7c92e8ab935e731da751effdb14c2a"
  },
  {
    "url": "assets/js/334.a5457111.js",
    "revision": "27676e37367431e28975a542711cffd1"
  },
  {
    "url": "assets/js/335.315cfc84.js",
    "revision": "69465c2e0e5c54fd844688656ed51b75"
  },
  {
    "url": "assets/js/336.77aca9c5.js",
    "revision": "d8cd09fa9b2fbbcb50a453d04fe343a7"
  },
  {
    "url": "assets/js/337.95f42057.js",
    "revision": "cae34fe0c80e04009085ee289b48db2a"
  },
  {
    "url": "assets/js/338.b4b4681b.js",
    "revision": "563f863e5e063523f02b21dfabe15e42"
  },
  {
    "url": "assets/js/339.0c42fd96.js",
    "revision": "fad9e2f0259ae429777708b9f2114403"
  },
  {
    "url": "assets/js/34.00943d7e.js",
    "revision": "aed736a21075122fd126f2a2a1588466"
  },
  {
    "url": "assets/js/340.b3e8ea67.js",
    "revision": "61236e948f414e9778ca95bf5b02379b"
  },
  {
    "url": "assets/js/341.56db765e.js",
    "revision": "f9bb4267020f99274c9dc3dd6c86ef26"
  },
  {
    "url": "assets/js/342.aaccd99d.js",
    "revision": "9c30ad1bc5916ef67b8cf66f8117f5da"
  },
  {
    "url": "assets/js/343.27ee3c3f.js",
    "revision": "0a91cf8ef1519d996dc6f495d7c325eb"
  },
  {
    "url": "assets/js/344.0233b940.js",
    "revision": "300027dafa47ad4f176d360e262af8ca"
  },
  {
    "url": "assets/js/345.bd953b8e.js",
    "revision": "3ceae73e9ddf70f19b1fc42351499067"
  },
  {
    "url": "assets/js/346.4aa34f5f.js",
    "revision": "445ad35abf198100afad020b964160e2"
  },
  {
    "url": "assets/js/347.34c09686.js",
    "revision": "568508335c3a4745b73383f16c691fff"
  },
  {
    "url": "assets/js/348.e94e1d04.js",
    "revision": "8e274168f7bdd475b3d742040a35a0e0"
  },
  {
    "url": "assets/js/349.bad831d8.js",
    "revision": "271b3beadf133a27378e46dd06bb9191"
  },
  {
    "url": "assets/js/35.d065d6b5.js",
    "revision": "1f76c07cc544a26287a3944d7853a258"
  },
  {
    "url": "assets/js/350.25a15acf.js",
    "revision": "b1065f2c4de9cabf18cfe8f5d48edfc5"
  },
  {
    "url": "assets/js/351.bec7a0e2.js",
    "revision": "bf581f6a39e9a3799ae4aba6415e03db"
  },
  {
    "url": "assets/js/352.47e66bf9.js",
    "revision": "3cbf52cc5ae56206c1a0539dcf329161"
  },
  {
    "url": "assets/js/353.d6456cff.js",
    "revision": "69e7d4c13ba9527be1ae15ea5435f593"
  },
  {
    "url": "assets/js/354.d2028a00.js",
    "revision": "c7d2a4f7aea249ececf1769482190cad"
  },
  {
    "url": "assets/js/355.c26d20c7.js",
    "revision": "b73fe23b7fe2a655181800303d15f4b0"
  },
  {
    "url": "assets/js/356.8a83eecb.js",
    "revision": "04f03e0cdc6a125bb051e82dba7bbf5c"
  },
  {
    "url": "assets/js/357.d671c536.js",
    "revision": "99795c508324bf9f07455913c8d78f7d"
  },
  {
    "url": "assets/js/358.0fe1c286.js",
    "revision": "9370f361ecada8ae29d15be76f468d59"
  },
  {
    "url": "assets/js/359.e0aaf104.js",
    "revision": "2341ecbca21447d984ec80ef36dac1e1"
  },
  {
    "url": "assets/js/36.b2aaddb7.js",
    "revision": "20205b1f3b34562f6ec44231bd3f9067"
  },
  {
    "url": "assets/js/360.68a49f06.js",
    "revision": "cd8786b75a252606ce112c04a8d0f6dd"
  },
  {
    "url": "assets/js/361.a79b4587.js",
    "revision": "461a8d06ff6fd38e48b9132dd60ebeb5"
  },
  {
    "url": "assets/js/362.0f4722a6.js",
    "revision": "a2cb8257bb88f204a9b028cc679c4d76"
  },
  {
    "url": "assets/js/363.3a50c4c8.js",
    "revision": "5976ff6aa578665325752f92f79dd7bb"
  },
  {
    "url": "assets/js/364.fc945a5b.js",
    "revision": "d2615f4e78dc7cf8bfdc5ac874897b80"
  },
  {
    "url": "assets/js/365.cf2c5b54.js",
    "revision": "6749710924cddb1d7cc836d0a481d41c"
  },
  {
    "url": "assets/js/366.8c13a4d1.js",
    "revision": "c4d7454a49c6ba8885d6acb93ac828fc"
  },
  {
    "url": "assets/js/367.c2d2e99b.js",
    "revision": "7968570d817640c1818a834674ac9c9b"
  },
  {
    "url": "assets/js/368.f0aee092.js",
    "revision": "039120c0c57f88d5bdc8a7f2587ca7e3"
  },
  {
    "url": "assets/js/369.00a2751d.js",
    "revision": "8fdeabe4c1437503f7f06050d53a7f59"
  },
  {
    "url": "assets/js/37.31289eb7.js",
    "revision": "72184a5a871d6ce555ea56059cc16b18"
  },
  {
    "url": "assets/js/370.87ce1ad5.js",
    "revision": "8efdb72fd2bd5fc817752d836e954c7e"
  },
  {
    "url": "assets/js/371.f199b642.js",
    "revision": "9a1920bc2351b96dc5cc692dcd66dedd"
  },
  {
    "url": "assets/js/372.c858d3cc.js",
    "revision": "4db37767f535acd8276eecb128dbb6f1"
  },
  {
    "url": "assets/js/373.a99c0ee5.js",
    "revision": "555bbc1f1308ccfd3cad0742f196613f"
  },
  {
    "url": "assets/js/374.b6ad2307.js",
    "revision": "eef5fe3d32e958ea2637ac2d3169c7e9"
  },
  {
    "url": "assets/js/375.ab8fee18.js",
    "revision": "5551c8936f0a1d6d26cc89a5dffc68e0"
  },
  {
    "url": "assets/js/376.e1bb33f2.js",
    "revision": "53be0a18798ce4eeee0719dc854cb778"
  },
  {
    "url": "assets/js/377.95d23647.js",
    "revision": "f801dec35d691d8219c557021a7fc006"
  },
  {
    "url": "assets/js/378.cd600b8e.js",
    "revision": "2f9821cc91f0754376e412a5795a1b3e"
  },
  {
    "url": "assets/js/379.38bb4e37.js",
    "revision": "4e637212c9de3e6b2018824b71f5a91c"
  },
  {
    "url": "assets/js/38.8a30f13d.js",
    "revision": "3e061fcd182cf05df056885fd46e1a24"
  },
  {
    "url": "assets/js/380.2c0d4f79.js",
    "revision": "1f547853025d0fa8dd130cb751d38d9a"
  },
  {
    "url": "assets/js/381.ba8f109d.js",
    "revision": "d018008fa75481e4e2d698462c886278"
  },
  {
    "url": "assets/js/382.c8544921.js",
    "revision": "182ddeb98198fa700b43ed6ead409e58"
  },
  {
    "url": "assets/js/383.e999f213.js",
    "revision": "55e8964e30ffb4bf6029c4364af7a7c1"
  },
  {
    "url": "assets/js/384.e4b1f116.js",
    "revision": "6c840b5f8d6439cc92d57ed9a2597d77"
  },
  {
    "url": "assets/js/385.679719cd.js",
    "revision": "665dd06b66b9795445e8e632aa8f6ff9"
  },
  {
    "url": "assets/js/386.5f377672.js",
    "revision": "ae1a15a43b3ce1aae8d806c79c9141c8"
  },
  {
    "url": "assets/js/387.ac94cb23.js",
    "revision": "10c70d758b7a344e62c415ab575ffdb0"
  },
  {
    "url": "assets/js/388.1c3eb107.js",
    "revision": "3e02d0fdb85c4fafb58e2d37548eb625"
  },
  {
    "url": "assets/js/389.09b1b053.js",
    "revision": "0bb2ef31a061adf71e9457e752c8904c"
  },
  {
    "url": "assets/js/39.2215aee7.js",
    "revision": "97684651b4a9d3e3d0c355420730713c"
  },
  {
    "url": "assets/js/390.6833ae31.js",
    "revision": "ca5507333b358743ae9346b229d58f50"
  },
  {
    "url": "assets/js/391.05ebf217.js",
    "revision": "fe884c789346494fe04c6147b09468d0"
  },
  {
    "url": "assets/js/392.a86010b3.js",
    "revision": "a8f66034ad89fca81ceaa6e5dd94b550"
  },
  {
    "url": "assets/js/393.96b6d14a.js",
    "revision": "c2c50c23d29f11385b167a56197de3bd"
  },
  {
    "url": "assets/js/394.e8809ba6.js",
    "revision": "fa6076238ad32b440663412b71584058"
  },
  {
    "url": "assets/js/395.24b366f2.js",
    "revision": "629b1eac7067998f3ae56be946f52f01"
  },
  {
    "url": "assets/js/396.c5c64193.js",
    "revision": "e8734d5d08082eefc43e303ec28eda02"
  },
  {
    "url": "assets/js/397.a2b5ee4e.js",
    "revision": "e71b8070e57abe1605c46ed43472ed08"
  },
  {
    "url": "assets/js/398.6ff91694.js",
    "revision": "f37c3b7bdb738ddc981cc4de5354d616"
  },
  {
    "url": "assets/js/399.f2816e25.js",
    "revision": "8ff3f2096bf62059a02d1f25f49bda6a"
  },
  {
    "url": "assets/js/4.d09ff0cd.js",
    "revision": "2ef18ddbdd4ca54593d8703be907e6fe"
  },
  {
    "url": "assets/js/40.1b733d27.js",
    "revision": "668f6da93093c3c1c5c21dfe71e4103f"
  },
  {
    "url": "assets/js/400.29b6e18a.js",
    "revision": "f6a07a323c8ed2686b2d68e0c5939e51"
  },
  {
    "url": "assets/js/41.8caa3613.js",
    "revision": "6568f84623386e98e4e3fd6684b0952c"
  },
  {
    "url": "assets/js/42.f3cc1389.js",
    "revision": "61272582246c696011fdeef6df3df711"
  },
  {
    "url": "assets/js/43.299e64a5.js",
    "revision": "76dcd3d39c48df122b63cd54b220fb9e"
  },
  {
    "url": "assets/js/44.54518cac.js",
    "revision": "ca917fac36860e657f2fd2e926be1cd5"
  },
  {
    "url": "assets/js/45.cef50a88.js",
    "revision": "191c60c2660f1067b8c25a35e6d8e042"
  },
  {
    "url": "assets/js/46.f668dcd3.js",
    "revision": "6a8d7bf56136e0625985ba3a57d32528"
  },
  {
    "url": "assets/js/47.3f0d5a00.js",
    "revision": "48b5957cc65cd62e39757addaa155ce5"
  },
  {
    "url": "assets/js/48.c120b593.js",
    "revision": "726793179b70838b5e6e16457b96b81e"
  },
  {
    "url": "assets/js/49.6738c867.js",
    "revision": "d3c536deda2b97afd9d45a6088e4f626"
  },
  {
    "url": "assets/js/5.89fce094.js",
    "revision": "3898fca4ad57ab3fa962d1dac8327705"
  },
  {
    "url": "assets/js/50.81119cb5.js",
    "revision": "129aa803d33118d82cbc3f4977c4fc71"
  },
  {
    "url": "assets/js/51.93deb584.js",
    "revision": "58d24f9389c1666040ff859d5630f68d"
  },
  {
    "url": "assets/js/52.95f2512b.js",
    "revision": "e452522fb905e1c4989d9b414109efba"
  },
  {
    "url": "assets/js/53.e8a6b1b1.js",
    "revision": "777b318deb45cf49391cd8299d31112a"
  },
  {
    "url": "assets/js/54.e3a381b9.js",
    "revision": "fd9b80d592226a1549c90b1ff0159dcc"
  },
  {
    "url": "assets/js/55.d4ebfb33.js",
    "revision": "218f32250fb278962f67299d92f24e68"
  },
  {
    "url": "assets/js/56.938da6ce.js",
    "revision": "1eed5dc6e897e0128ae984804ef67ca5"
  },
  {
    "url": "assets/js/57.7b98c3e0.js",
    "revision": "265a21018b6a3141dddd1350a8670afe"
  },
  {
    "url": "assets/js/58.76a92879.js",
    "revision": "962e902e60cd1a241c053bc0657a1903"
  },
  {
    "url": "assets/js/59.2f59fe3d.js",
    "revision": "20b00fb0d75ce8a91e689c44067cf87e"
  },
  {
    "url": "assets/js/60.427d8077.js",
    "revision": "d67dfb124727e04181be9f896f5d23f6"
  },
  {
    "url": "assets/js/61.3ce35764.js",
    "revision": "a254b05328677714b1d8448c99bd91ff"
  },
  {
    "url": "assets/js/62.1f469aa0.js",
    "revision": "d41ad2fde58a52dbe239b3a03671a06b"
  },
  {
    "url": "assets/js/63.04bb76b1.js",
    "revision": "86652f0122e007a4d6608149da341432"
  },
  {
    "url": "assets/js/64.3c08a507.js",
    "revision": "3e5287bb490f5fa3f69ffc884bb38626"
  },
  {
    "url": "assets/js/65.faa07792.js",
    "revision": "3561ec6988827e38b729c23ef30e1fcf"
  },
  {
    "url": "assets/js/66.21e6421c.js",
    "revision": "351c9a7177ea4f09ddc7413d901a8aae"
  },
  {
    "url": "assets/js/67.91d15c4b.js",
    "revision": "ae186a6945d0e03b51350cdd864f2513"
  },
  {
    "url": "assets/js/68.c3e30ef7.js",
    "revision": "3ac012e8f3ee031c36f64447b2dd14ad"
  },
  {
    "url": "assets/js/69.6873d85d.js",
    "revision": "d4122483044b217a1eab33e77f1f586c"
  },
  {
    "url": "assets/js/70.2de642d8.js",
    "revision": "2be52a2135ce9b955f930473fa51ce9c"
  },
  {
    "url": "assets/js/71.3b797d4d.js",
    "revision": "66af3409798ad39776415c4ba32476d9"
  },
  {
    "url": "assets/js/72.218d4371.js",
    "revision": "f715f61a4b6a9eee9a6d52314f9c8c55"
  },
  {
    "url": "assets/js/73.96cebcc4.js",
    "revision": "afa66ae8c0a1be02d57e3c948395d49b"
  },
  {
    "url": "assets/js/74.c155d639.js",
    "revision": "a0d9c59839cd1ca4022fceb2770ee3c2"
  },
  {
    "url": "assets/js/75.5bfa514b.js",
    "revision": "40feed895fe5cf8a377e32d5e614f8ea"
  },
  {
    "url": "assets/js/76.1dff3232.js",
    "revision": "0fc0653c113c2b36d0a39b517df12174"
  },
  {
    "url": "assets/js/77.2b82d61b.js",
    "revision": "6b3474665ff89b0b70ad56487139d44a"
  },
  {
    "url": "assets/js/78.c206a4f4.js",
    "revision": "ec904ba387ad002b2912f6e938f698a7"
  },
  {
    "url": "assets/js/79.ad1f9bb4.js",
    "revision": "20be0429798c81926545cab5b513121a"
  },
  {
    "url": "assets/js/8.5707c9b8.js",
    "revision": "0ede7d1bc48fa42136d4ce20a496109d"
  },
  {
    "url": "assets/js/80.4d401176.js",
    "revision": "8bc2950a7e6634ce5a3cb2e7024c6bd5"
  },
  {
    "url": "assets/js/81.daaf1452.js",
    "revision": "48d6085cfc5a6eb4a43be436a11da80d"
  },
  {
    "url": "assets/js/82.53fc2e70.js",
    "revision": "645051e9bfa1712d26ff0b5c18b36735"
  },
  {
    "url": "assets/js/83.a291b312.js",
    "revision": "18c7ac2bac6d6f4575ca09e9f97b9289"
  },
  {
    "url": "assets/js/84.f6e55abf.js",
    "revision": "b5f72591454930d8e2af4a0545cecb19"
  },
  {
    "url": "assets/js/85.aa2f4422.js",
    "revision": "d337a217563d48b26f218672d4e0f5e5"
  },
  {
    "url": "assets/js/86.cabae93a.js",
    "revision": "ef66c5589e745f67db187141921d72d5"
  },
  {
    "url": "assets/js/87.b9cd026d.js",
    "revision": "838b0ec81c5dbcd6bea3c891b0209d1d"
  },
  {
    "url": "assets/js/88.d88a08b1.js",
    "revision": "73368a2e46e410cf0844ea0d9948dd0d"
  },
  {
    "url": "assets/js/89.37a98c9a.js",
    "revision": "55a24a6b1075b91e22799f8527deb74b"
  },
  {
    "url": "assets/js/9.702a3289.js",
    "revision": "96d10721b33ba225595d60b46a18a8a1"
  },
  {
    "url": "assets/js/90.d424d930.js",
    "revision": "297bf25660d174f5866969c48e517dd7"
  },
  {
    "url": "assets/js/91.786d22d9.js",
    "revision": "6535e6f7f2d868985e5e11dc12f0967a"
  },
  {
    "url": "assets/js/92.7e084e61.js",
    "revision": "8a2480cbdf2b7e126a1f0dc6d0d3ff57"
  },
  {
    "url": "assets/js/93.ed3248c8.js",
    "revision": "59272ca3c3259f1b1d4f71357386c308"
  },
  {
    "url": "assets/js/94.30e840d8.js",
    "revision": "1c0d1d0039fc902019fcf1e69883d20a"
  },
  {
    "url": "assets/js/95.e9c1b0ae.js",
    "revision": "246ea54973715fb0684d9d68cee7ba8e"
  },
  {
    "url": "assets/js/96.77798f2a.js",
    "revision": "4077d1894f2a3ac03ef357d81eea0c30"
  },
  {
    "url": "assets/js/97.3e16da70.js",
    "revision": "f1ffcc77f159e7c86088eba021208c01"
  },
  {
    "url": "assets/js/98.e66e64ea.js",
    "revision": "05a9d65cb1065379f66cccf33631a72c"
  },
  {
    "url": "assets/js/99.a16e23d8.js",
    "revision": "8a3e90b9d293b9a37a2d47bfe8d9e9a7"
  },
  {
    "url": "assets/js/app.482b3c45.js",
    "revision": "ef0d5d56ac8ce790fa56814470995e7c"
  },
  {
    "url": "assets/js/vendors~docsearch.ccaccf87.js",
    "revision": "f339321af1d8ffc7aa334bd24ffa8864"
  },
  {
    "url": "index.html",
    "revision": "4407fc9901ad5d168606f0ae45d4cf1f"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "9bad8749abff0120d8a43e5ca1524b24"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "1b27b0b4bafe4b5b1114b0bb9b603db6"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "26aac3e6646992be7e4d5704b6458a47"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "9d8f975d054bd81585d1746be8b934ae"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "ec964cefbdf4ef7d27f84741426be62e"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "2bd02c381d4efb519ee0747a05bb6c12"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "1730ea5f179a0825f8285705c7bb2c38"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "5c166cc2614036a3cd291d5e29068385"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9abd41383d6a868a01c9665aa20c674c"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "3779617a374df023f0aee18545de8b80"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "e16331258a38ed99ee465614ecce1b31"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "08f4f622664c3618669539989d6009df"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "f68665b5ab303febfec78e2b91bf1d97"
  },
  {
    "url": "master/api/index.html",
    "revision": "4c18aee4e8c3bee82de6d9ff77e99bb1"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "06d4e31dac4028d66914a477cd4d62c8"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "4ec85b8629da389534d5f4efc741176b"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "a6f5cde7d58d99473c814391019110c3"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "e7f449aa6cb14267c783eaa593b9fcc2"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "e7037f2d15970d5a6436f7b0b2c29670"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "1b037b54ccf26e5e17e7f3ef029f4a50"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "cdb971f801e0a6a0be65768d654f4cb9"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "d8c7e34178e177606ea3a5c717053849"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "ec3689797d913be1e9ee441dc87a9ac8"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "5bd79411e90fc1a77d352ee5f15b55ff"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "1e0320b845ea772a5e6642ab1e778af8"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "bcdadc70c62735fc5ee8135f8c630b33"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "563145bf6e95e06cd648718323182faf"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "dfb51e280f001c546cafffbefe6c5412"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "947bde3ea755eb9120600c84c358dcff"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "f564929a680762af41d848d1e74f0c60"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "36a54df06efd50063a18590edcd07649"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "e05863c5f3f596d2c08e51567aa2d698"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "ecb99acb600411ab4333d7bbb0de2511"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "ab99e6a12eed3ed1431755c2ce1e1aad"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "154b8637ffeb065f121ba5262a42640d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "ec86576db17048a7ff89e1b3b27d4283"
  },
  {
    "url": "master/packages/index.html",
    "revision": "cb0b0467bcab15b88354a15d80f57a5c"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "fc09f72c1c2b25f3b202523ef4c09a09"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a405a4f251981f9488a576a588007728"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "1af468a3b2ef1c0738af18de3e14dbd2"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "dd6c6502b8c3ec18e7e5e6a054743e20"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "fe84c0fb074809a069d80fd49b747885"
  },
  {
    "url": "master/packages/views.html",
    "revision": "c1eee3ecf150b48106fc88dcf2ec09f6"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "3c1ff1544052c6a7cd25042013acab64"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "92d0371a6d2b9a6e84b44b690d0225f6"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "37d12eebcc506e5bd931d355d386a0b1"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "929c3c12314c774245a833dd799eda3f"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "7ca680cdeb5a05434006227dd8867d4d"
  },
  {
    "url": "master/themes/index.html",
    "revision": "078805c49fe05cad4d720242c5be6921"
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
