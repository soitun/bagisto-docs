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
    "revision": "0c22a90436d0a19a8f58da407dd7a748"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "3e23323e44c5c0f14d9f45bfb7df5952"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "1978a2a1806f0fada11eec22e020fd15"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "dea6f83c29d5626fdb6f4617e9f2b820"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c3bfc611c80bfda5621c8a8a84e8663c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "b226510c557ebb697cbc02c964b541a5"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "ceebf929e9a9af1bf86d9961e185e9e2"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "be6462619292486395dd01399a78a63b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "e0ff19305777d5a039de8e80e0d1ecd6"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "33d1b38abab69a468ebddc62b85e4ed5"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "8e6de5030e4a851554638d915e28263c"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "95ed8c4eb626f5832e0435d1d793b018"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "856d132afaad72485bc6f4104c288c91"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "4cf6c08fc26fd6d6631162f502c5af8f"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "a2c7b12d47b530fb468731141c30839f"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "2126d5c1c10e0a942b985ab8c18d7604"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "17fbd592f7c58952f08d5f01735400a9"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "3f015316fd34cac5286cdbb70798165b"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "8c138f00bf23bc3342335aed72f0e289"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "be3ddbf3a415041db870841ad67a54ca"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ecbbff523486084e843d4bf551e9a373"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "1a3d5410783dc0e06b53a7dd35331a1a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "890514e9ae5eea268e48b7eadb1d92f8"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "cccd8cbbca60ceef620cb34dd5069c97"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "4dc3b9b1cc5fa47fb29469abc73382d7"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "fa20d0743017d80c85ad7b2e91b8fab6"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "613c80659133316e240c7e51ee8a6af4"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "08a4e02ee4ff1d361f03a32af1a25a26"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c44dd5d3121f69f1d2724559b7de5798"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "9a0404062d7cc1b116ef5bcff9a9090b"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "4f3aeceb0d961347ed7feefa7e45af15"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "1554ea1c8625a9524a70975c88683447"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "eb455d47c22aa100082decbbfe9e5498"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "e370d252c24a11bb1c41121562bb9206"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "b01bb9bd70cd9521f27d7cfd5768b88a"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "578c942aa151a5a91436a0f4bc5bcf97"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "c5e0fc8cc119c51b55980a7c58f0e8bd"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "49d02c79dec33c0269a2c0c487cd3a57"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "92e01a3165ae46f11e7cbac8e3f0640a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "8be9f54ed52fced13b07955d116ac1ca"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "cca3c925599dca05a37c503210d3af13"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "a0c3964f5b1a451e3349f18a835267fc"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f5aa5c753d1d121e80f77471650d8c02"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "cb38861434452434674c1c98759e43ec"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "4a3372106b8d0d32c657bdac33c192b1"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "a23eea010a2e8b79b143327710d74e6b"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "509d158d03579f5829f059beafd71adf"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c7e6cc50ef91c839be006bcde5735cf7"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "7c132a25c07dbe7be599caa8f6927323"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "a96457152cfd5c546b6dd6599f9903ba"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0bdf9debacb407b6f796192e985697e1"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "83b54bebcd7189d9b121617c763fd475"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "02e2cd83c0a2badf81ab45bd533fd70d"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "acf4160715db4a839c5f682fede63874"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1f1b43b7bb9d9ec8bfafa34afab5decd"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "cc0af0953602186d350d41b738e894cf"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "b17e2ff3ff4bf8b0df70da486b267b48"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b097716d29b3539fb91152008b9288bd"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "83c3bf38fac79fc199b91249af7436ae"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "2740168b1aafb32737a1668cbccbd1c4"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "761fb77096e360166fcc3ba0facf7ab7"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "7568ecf1fc81b8a2e200d9c58279dca6"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "866fc9d2e21c90fb82f645c7508b5595"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f46f9e800196ecbf94647b6d41de3f48"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "b931790dee4760b68a5982ec88bfdf56"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5df1a2b8ba3b08b0ccf14cbd13d5bcfc"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "6d2651f740d81d7d975fe38640955ef1"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "321155bed7838287a22d60c3547f8d91"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "327a7975d29dccebc7f5d269c1ceb693"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "34b467d69f9f7064091b59953b91c601"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "873d748947ba84efbc4e88a9d2053365"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "19e01b40fa8f64457be204c235faffcc"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "51ac333122f32c90603412311166b3b0"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "5ffb28c8376d8e076d60d6209eb22bd2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "7117f8933fa4b187de0b23fb0e5f9a64"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2dee9235837fed1e9c3e379626f21f7c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7340166f9abcb128e3544395947c55a6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "8206e9132adfc9d60e4d7a324fa64ff5"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "107b5d8aeef1ff486f16c484633fedfc"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "972851611573e340a1ad22294177464e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "578cd7f09b9408c496d8f9006cb379d9"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "24d31210892b6ef99a4b6b7e1cc4366e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "f83897300dd333137ffca57bd5cb0de2"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "de68d2213cc71824873cdb542be876d1"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "783c7db84885b911e8c8c65f72eabc8c"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "00da78dcea1367980e832366f56f7183"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f03a10ceffa7805822cd8cda8e095ae5"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9d7d34d065c9ecc5743d7c5cb70481d5"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "f930fbe83fdfecd4add6e905c5ed3902"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "b8ceca4484f7b23520374b967b1afb98"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "df612ee08fe6467d04d2cf25808cd839"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "82640e46d7016e1c18bacd7feb23dc43"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "d295a98463c243f899643846b7fbfa04"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "9744b8baa7a7ec4ded9610467db11dc3"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d9b4c14dbfee3077ef93ce60a2f86486"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "841c3c27c3add42701dde69d990ac990"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "5c28b3d39ac3105283359e9e67bdf329"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "7c6b0f87040ce0e05db09d9e976f0eb8"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "94d0417718dc806aa2bddb14a34c11cf"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8621ba4af906dad33435dfbb9f964e9c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "a0ce7e2628da7468344eb2e3944b675c"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "1dead3106808e7efd98bf32e1b48c685"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "4d6ef1b0ac2e00c8a17b37c649440fdd"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "30797b1b2063fcc705789ddaa2372579"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "21a12ba4b5a90626d7b88bb6eb27cb07"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "18cdb5a2407ee9ccde284fa6ff06cad3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "7c12369dea5b7849aaf51ef74bc169b0"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f705faa34627ddf1470334d199337cce"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "462232aafdce68730cc227e7081ac8e7"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "299c7e332d4d8e7888d8358ee4cf7b4f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "02284818a7c45804208206f8361214e2"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "8652e252e73869c3656a5f95e3951ac6"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "f5ec986d6bd3f27bf7846fe0d06078fd"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "073e5b6abcdec1325a5a116e171add3e"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "5024f0c9a8a33ea6ec44908bfe420bd9"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "393e31621235ffce81e4cec9193d799b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "cc5102f985cff388e211e1a3c3ea5ca2"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "c898801d3ec66b213f2cd09a98788eea"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "1b527fb2de75d64f46ef0450d8f51863"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a55723d8dfe312b34ec89985c4756ab0"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "dab83281879c0468ddd9ab60e3467419"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "0c449145cbc355fa433d13840ff1638a"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "63989911c5d5118527c072e6bed80d6e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e136b5113b3d89f17d3a08cf6a46d61d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "d9cfb421de922ce26cf01f259e62e1d9"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "97e6fc72a687c4ed29c5c4e630fcfae0"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "fce09319dba605c2389b906cd13c0ed6"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "6e65688bebc244c732a08b7b914531c4"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8827c2e2be03ffd92d5a9928be0eba80"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c0ccc4e29b2430f4c14fad0db1b1c50f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "cccb6bb1a23238aa41894f12f3b09015"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "acbaf1ccea8a0fd8610af978d594bb3b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "afb2e6c91636049f6d915b4ece92bf79"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "ba1d7475b921b6d48563870243ebc3f4"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "710ed65b37ac9115b90dcdcc2e27dc54"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "38cda7bd36d455cb37d6b3b43abac06d"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "3ec0af5be128402867f2132fbd389fea"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "043f80ba1372c5bc277a0683a736aae9"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "76abc1668650e07f09d4e7cec26b615f"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "505488e0a66404a45744a956aaf1c0fb"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "5f428e2bd839ec004661e50c5594bd61"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "68e785cee245cd02d7655f96843bef54"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "9b5515b2d60ce897b21b77dfa11e6e7b"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "b7fd9143baca72bc0383da0f4faa2eeb"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "4663c4ec53fe8f4cc25e38826e0a5a28"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "fe8fd4275b416510b0b3ffc4762e9443"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "e447498d42f5223a55c0c5536f3acb72"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "d0164274cd2c25bcdedabb4537db4b26"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "be49458ded7d2e4a7cf8259a4eba156c"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "032b6cdc38a6ab9a8267c9bb05dacb54"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "a756f51c660aba71b19846bffcad90a5"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "95ea1e76bbd9ab8cd1ae8270e44f118a"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "c0a1beada428e095ea20bbf015476c96"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "07042d36e8271690079c94168476896a"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "0ef606d768bf3a3f0849fb742a5cf2b7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "1423429a14145137060b6408d4122990"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "8db5fdd1d5188a80a701b5b3aad98e7b"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "ac291ab8277ef3fe01a47b5cc28967ab"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "db47142ac5feb92bf52b17a93818050f"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "71cf1535c74541f51dc0b4ebed1c5f23"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "0150c1034b501785106d5a3952f98f53"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "1f70e0a1b6cd2d21b5d10c49fe2ff8c9"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "74fbc6881c467547417e475696bd8c9a"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "475b7af3cfb92e6f7600f76534b59fb3"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "c2c9b555a305578ffc571c09f940c492"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "6eb44bd2f245fdc3220283691a1a280b"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "0837d716c4769fad4f3b1f320e8b8c88"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "5a78ba5c31fa9135b267548d686dc370"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "b292b6a8229352f2a0936ede7504014b"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "eae9d45ead5379d2cc151b878a45e2c9"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "8d02782c6888756425717285e4015b26"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "8a943c7769b559bce7de3220efcd9c00"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "d53a4733828b25419eca3c8dc7f48685"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "ab7b08de57e2e003165236ad2f90ea11"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "3c102076eec284ed9fcfd68718236e73"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "c2fe01521606895d0d0728334c3a42bb"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "7779366526d7c2aab7bec7034529617d"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "b394eb7c4a203c99084133c366f9cd00"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "6d5de8cf8b7210d956eddbd4728101fd"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "658d8c4d7bc025aba5fcd46f6f23652a"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "5981854e10a3feacf6b1029092337545"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "dd6aa15b59ef2ef442591e3d43d7388b"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "49a131abaef1b9d4a0f8c81dc3c0141c"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "6ac79d100013f97bba7683bda55b1621"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "ce64d5fb561c6bd39073b6018faec48b"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "aad202aa580e12cd6954b2d27a695ebe"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "f23a674a41d63547e3b95205cb182984"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "bcb80d891210c3914da8131af839959e"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "b00857e18852711e3667d66ef0f06147"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "9912a405919bf09e712763cf58fff0a5"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6faf4c355219bad35b7e6cec7bd9266c"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "b11c9fbc5328a3517f61d3b14336d7b0"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "80cdf1592e4a7cc2230f2c05f1f4042a"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "0d4f3daf60dfe4ed3c425a001f796079"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8ce96e8bc4fdbe69c738df76334fe9c9"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "b9971d4531a726dd9721b7b534d44188"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "29c27b95079934fc90558bace49e5f80"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "b93f52d491f63ff50ae99abc9b757c08"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "117d97f1a2586f9ca899a5dfd8b252b3"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "bdf3b16128f3fc2402e375f0d35df10e"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "b15dffc02f2c6fc844abd5532542e913"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "9d4333d2f885a168fc256c0e15005933"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "25d7dafefd12687f4781ec6a23113fad"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "b475d327ebe64f1035941bf9a15c84f0"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "e1b12005c4d582ee9a5fe4e6effb5940"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "fb57b9083b2c45770a7759df14a3c27f"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "eb2d8a2f43ad431cde7bc8dcac17f8c0"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "9d8b15726a72b8dd9377d9aa7f9d483b"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "1428d9edd553e7ff04cafb9fada5a600"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "f131d53b789cd1544473dda6d6b8c87d"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "cbde1d32737f2d88c4defb26060196b7"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "98595c7e3af001c88b352b10e25c0410"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "2a314b2ceb251dd84c4ab2cfb34f613b"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "f2b331bfda1e2e657cc7bdf8e5fe4cb9"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "4d9a1b3f931fb13f972c56a14ffdbd5f"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "9cb97fd72ce22b7f0bae175da057ff20"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "374cd9f4556095cd20cb9a24eccf8adb"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "0468b93f6dabe756518496341f2db97f"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "83ef160def19cb36a67c404384c91e33"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "c7742d6ac6dc4aed667a4fbf99a81cff"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "14e94ad7340cc78814de52bb74aad990"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "785f0bc46f9966e9f2a6850a71c6c8b9"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "c98ce73b84af42b420ecfdb34cb5d6df"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "0d916df961d8124fc03ace0c122de206"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "be66c85f0a485d9d10e0736ded0395cd"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "3ac57c3ec7021de2c5b46d7b495580f7"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "17f5666cd85e905c5391ae8336b79cc3"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "b3e71a70ae03d57fcc67230c21457989"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "1a96a1856eea9146073c849b0a25c6ec"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "051af167bf8ace37e7080c2f0b8bedc2"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "35fee9188c28363dcd28360605eff07d"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "d0ac116ed4f248c056db44c9e2d258a9"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "91ceef591aa496f3508b7f511549027b"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "364c27b7b54df5ec01869f3f2e7c073e"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "ef7c7adcba9746850217972c88089fc3"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "e132082b85827cdc4123a4d55b19abae"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "46bd8ddd548983c1159ab332576e386a"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "82d5269e2901be0174183ecde2b4c4d8"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "dfe01b0957e3a7ab0be55fe68eec3875"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d2d892f17d2cc58ea6cac0495971c155"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "a047a5e78dae2f90726e6887e6a14cee"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "05e1d6d6b8d3fc6246872bfdd183778b"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "612c708ce1dec4e892c21a0b413ab59f"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "ad18a13d8ad4cc06f4a3ddd4307f808c"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "905f915b51e336dd34519bb05200f204"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "bbc53469d8bfc7652f91fd4688e6066a"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "0443783caa253d23254986668306f37b"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "eeeeb1eb2df207ca0010827fc1ba0180"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "7f193eb28abf84663d452804ff492986"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "63389fead08d8f8527aed81c7b2fdaf1"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "1c34445e122169a03aee44d15942256e"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "1e79e998eeb81fcb5b549f9c6e87e6bd"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "4374053c09c37105c5f21ba83990289f"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "8bf87e3ff5cce463fd47d6177dbee236"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "0279e5f40c3b297a3b9d84269b1df621"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "4d97f256fee73d9af83ec1e8e0108a92"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "4895083cda6ffdd9345eb7f64a14017d"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "34cbb976e5234bbda775e0840f22f4c4"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "e4b513b72c251dea2d3f78218e27779b"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "342ff6619461fb5564d175f4b2a98dae"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "409ad9405c7d5c6558a07024f6c15486"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "06db0976d33692210e89ca895c3b379e"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "5a1aa3547d4f1578eb81fde80ba49b9d"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "1f39a7beb99412fb598f463d8da88e5e"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "658627daad77c98e8ce184de79b6d74e"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "8237e4fd2077d581ee9eccc6b11b37b3"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "cc8064f430984a9aae8642cc41d65876"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "356599c2fc236dbf2c553bb6e57324a7"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "39c996e5827ea642e4d6abaec70f8be3"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "4bc0628fcb07707e662dc49b22f64b4b"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "10c303603314e439b3838f8de97d6f92"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "42e7eb90aa6262693e9dac69dfc650f7"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "f488243bb0ca9540441e0229c11cd565"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "282894260c0e7245f28c85d7e306dfcc"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "3ec21983e0519119db473b0973e25a20"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "9952cbbc554a44249eb32a365ebfb190"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "c3fb00665cfd48fe8014d2b08be00126"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "4a346f279bfcb57024827a17d5fcbfe7"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "36bd639ab3543cd8f2b70eec08d95f9b"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "5207fc723e13e4728dcdf76d098a2e49"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "0b46a6d61fbad6ccbee6ca4050d6ee99"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "8cbd8dddaaf1f3593908391718dce507"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "0faf2218c82a7c7d14fa94a4f67291eb"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6598d0f53ce74c9d02c8e4e80dae93db"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "36ff27982d5c448b673101b3776fa602"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "5698dc9fde2071fcce6b86ba2115620e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "155b7cdaa598375ec9edd58ade2f8d6e"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "ba100c0b816dc8c2a90f9c63a4a8114c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bf89db1047569c5b86432dc42358a2ec"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "e127580caa0c3f01ff496883fc10277e"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "4417e265a3158de8ff509e05c747130b"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "8b78a3fae100e2c3c3c21d568502583a"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "f6f5091c0d63b99b397e2227cd09aaa3"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "ea5202c8157c20a0bc07af9cae4c6cda"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "8910ecb74af8685126a20b1cf477cc83"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "c9fb6dde78b1bdd55bcdb233698d8492"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "200656f376b0302846b218347e8995b4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "9b97631f4ae94000b9a4be5a4ef3dca8"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "8494000d2aaf8b4941d57f87b3a821a5"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "095706815d42d72b9e0613d8cb5125f3"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "8beda2a85759e0148c2090fef22b0876"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "33d6cf445d66a9e6e0401efcc9b9bd50"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a0b4a12a2c5c631a2acc80d041b58599"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "4b3d81c4d2eb9c7415b72397f53abe98"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "024742573448f96921fd744e41ee4ecd"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "535b081e1b904b9ab700ebfa14818bae"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "971f9e9f8e6618bac0a089cc396c1766"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "10f154d27700b026dd91f0ab46a0c027"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "b89a4aba442d01f3897399fcd6a6bc1a"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "9d3d2983c5f6d051101fe23b189f2f6d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "154fd6ce30255cac9e196d6f0350f461"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "dda4988d407e7ae8e5dad215f56c4295"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "65bbcf209bcdb20d741725e4382fd991"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d996a29d4e88df10cda86ed66a7fce51"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "8475de119029ce170c328ee63f1c39cd"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "e4db54ea5f5ed766df1115bf59c083bf"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "c95279c19ccf8191454c2eb91bb15531"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "0fd7089dc147cd53df86437b03a5b882"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "03a38be85f3052721c886d26e3b756bb"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "60e513fd02ba224aa7130522041ca816"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "6f5d9d72e2b5f2c03d356e015aab9e7b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "d22b4f3f8c86e146d11551d9b5790028"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "4f81458ee51cad3916904dc6d39df1a5"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "86f5217dac4722bf89dedfebb3e84ab1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "906b39d6d9ac121f63228f3cbdeb35e8"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f212e62cd4a434220402785cac3c6fe3"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "c25b26ac8674b16db95608af51a909ff"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "b746d6104be44b6e8fa9bac7fb2e0e0a"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "8bd791ac5c2b7f848b7e93f80d2d6534"
  },
  {
    "url": "404.html",
    "revision": "1b06435233f7853a89fe6345486521ec"
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
    "url": "assets/js/100.031a5896.js",
    "revision": "4c0d953fa45f654e9d41950a43e16c83"
  },
  {
    "url": "assets/js/101.0e865dde.js",
    "revision": "1c26147f9512ed4fd608280f4ccec371"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.f8da0760.js",
    "revision": "3bd828a93ff55746c2f740007b42f9bf"
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
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.89b1047e.js",
    "revision": "0523401e7652d03e38ac65a8e67c083b"
  },
  {
    "url": "assets/js/112.87f39dfb.js",
    "revision": "9571abe6c91af776b2e1288fad9e3c26"
  },
  {
    "url": "assets/js/113.a61f0cec.js",
    "revision": "4d84eec3b7cba650c78afeabbfa1746d"
  },
  {
    "url": "assets/js/114.465177c3.js",
    "revision": "64c048d9b4a39c92d93414a7a023c10a"
  },
  {
    "url": "assets/js/115.b1a64faf.js",
    "revision": "a987d1cb1b855f93c4a46e1b8280730f"
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
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.a6a4c979.js",
    "revision": "49c5ed9db630a655881a8873ea995690"
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
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.3843fbe5.js",
    "revision": "e4b7e1990210402bc21174ebf4fecba8"
  },
  {
    "url": "assets/js/125.a66636e8.js",
    "revision": "dfb72e3e5ebc820dc07b3de560da539b"
  },
  {
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.52ea5c27.js",
    "revision": "720180a1e5b23af717260fa936771b03"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.d2fed830.js",
    "revision": "ea1963ef98b1cc0982bd2fe4796a8079"
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
    "url": "assets/js/131.336a6507.js",
    "revision": "07b06d02daa7b62a101fc26a5a63f76c"
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
    "url": "assets/js/134.f6902dd0.js",
    "revision": "f9ef8fbd360b644d90a3dc6eb53133f7"
  },
  {
    "url": "assets/js/135.127e300e.js",
    "revision": "14be2a568af7664c34a70ba9b1cd157d"
  },
  {
    "url": "assets/js/136.878ebc68.js",
    "revision": "e19e8516877a670e326e21c075936d58"
  },
  {
    "url": "assets/js/137.3b3c0244.js",
    "revision": "f0c63eebd40afbc371155a822b999838"
  },
  {
    "url": "assets/js/138.91a5b455.js",
    "revision": "837878e865795a11d4494b8a2c708b34"
  },
  {
    "url": "assets/js/139.9a5b2252.js",
    "revision": "7ef71a3b332d1e306f4a37c06ad2c394"
  },
  {
    "url": "assets/js/14.52b7c015.js",
    "revision": "286bfdab9719ac984aef635da411edee"
  },
  {
    "url": "assets/js/140.81b74f94.js",
    "revision": "b858278766e93e2e9d1d9de324841377"
  },
  {
    "url": "assets/js/141.891c9c83.js",
    "revision": "1763869bf8045eddd21cea6618e50d16"
  },
  {
    "url": "assets/js/142.e6bcef07.js",
    "revision": "36bf5b460554a06f4664e3c026fddbe8"
  },
  {
    "url": "assets/js/143.dbb5e426.js",
    "revision": "a16f2ae5e638c26e7ce858eb5cdf7abc"
  },
  {
    "url": "assets/js/144.dcb19599.js",
    "revision": "031c44e37ef12f9013d89d5bdd097587"
  },
  {
    "url": "assets/js/145.f93a3df7.js",
    "revision": "31ef87d485b795ada98ed102603bae34"
  },
  {
    "url": "assets/js/146.cf40c98d.js",
    "revision": "c9c9a3d2abc32bd92102db87933dd25d"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.74a62186.js",
    "revision": "cada231f170db423efa5dc0da03caf83"
  },
  {
    "url": "assets/js/149.adab3b63.js",
    "revision": "b240be57f044476d4f78bccd79df9184"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.6dd2bae4.js",
    "revision": "a9f6c37b88ab7f4d423c94997460bea2"
  },
  {
    "url": "assets/js/151.40f7e977.js",
    "revision": "ac23f7ab8a308c3a873e950d5714cf3b"
  },
  {
    "url": "assets/js/152.368f809c.js",
    "revision": "476919f32d12a8467ab555cc19ee209c"
  },
  {
    "url": "assets/js/153.9857c66c.js",
    "revision": "06f132bb50ce503b0e28601a1cb191b0"
  },
  {
    "url": "assets/js/154.73aa2e41.js",
    "revision": "db528ab0330f497c1dc307b5f620329a"
  },
  {
    "url": "assets/js/155.e7b805e0.js",
    "revision": "849e63b8d758f46192f78b0c2ce17240"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.7818768a.js",
    "revision": "43b5d0b02b7305a0d0296bb8783fe85e"
  },
  {
    "url": "assets/js/158.3b203f16.js",
    "revision": "4c69df09fe3aa1ccb5dd4fbe30be616b"
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
    "url": "assets/js/160.bb3fd589.js",
    "revision": "cf9619d8ed6fe7f06d37eb794ccd8396"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.a64b4dc2.js",
    "revision": "b94b754a25a4eb59ecdc66f7bbf0e88b"
  },
  {
    "url": "assets/js/163.1e7a0022.js",
    "revision": "ce6967b8bbaf46c8c57978a96c72f0e5"
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
    "url": "assets/js/166.6e9d8bf2.js",
    "revision": "8ff5c19b25edd51aac300e78cbca0b39"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.5a75c6a9.js",
    "revision": "81b2d2a6f2252cedbaf6f2d7d83fb3aa"
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
    "url": "assets/js/174.3de7d587.js",
    "revision": "1b5e50c3d98b1d4a61d099c5358c8f51"
  },
  {
    "url": "assets/js/175.a049439e.js",
    "revision": "e9889ae72871b050b5d383b6b77cc85d"
  },
  {
    "url": "assets/js/176.dcaa5cc1.js",
    "revision": "6d10257bff2e72fd9d4be4afbeb791a2"
  },
  {
    "url": "assets/js/177.fc0aa887.js",
    "revision": "c109632e8565de018ca02ceca8ffa27a"
  },
  {
    "url": "assets/js/178.11ad38bf.js",
    "revision": "69fbadd72eb916c6e1d818172f5ba1b1"
  },
  {
    "url": "assets/js/179.9d76f832.js",
    "revision": "b50879560a9967e40c1d323a0d987191"
  },
  {
    "url": "assets/js/18.fe9a8fde.js",
    "revision": "5fd075cca7a2202b15494071d83b6517"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.3d2c6830.js",
    "revision": "ead9ffa792e1daccf24800307151ccb1"
  },
  {
    "url": "assets/js/182.ad2b2816.js",
    "revision": "a1e7fd51479b383bd5fc0661983216bf"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.18310d59.js",
    "revision": "77b42c32a9fb89aa442d3b692cd1169f"
  },
  {
    "url": "assets/js/185.506de468.js",
    "revision": "fdae0192fd561091bd7272cb6570d341"
  },
  {
    "url": "assets/js/186.b94c0ca2.js",
    "revision": "d43c357caf4d261ec8b5479b55c4070c"
  },
  {
    "url": "assets/js/187.791c97e5.js",
    "revision": "fe2433e743d2a76d0d27b878bd209b54"
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
    "url": "assets/js/190.a2f50006.js",
    "revision": "0fd92a4cfa916ee29aeca1287a5e996f"
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
    "url": "assets/js/193.2321ed3f.js",
    "revision": "5268e9ec23626f3dc3c7f43498ea77a2"
  },
  {
    "url": "assets/js/194.81c39ddb.js",
    "revision": "31c002d5e463d349d8e2c70a823b90f2"
  },
  {
    "url": "assets/js/195.537c3915.js",
    "revision": "87df34465d9e20821fd858827b24d623"
  },
  {
    "url": "assets/js/196.a5f84907.js",
    "revision": "283bf122c08b1ba946b5e629ebc978c6"
  },
  {
    "url": "assets/js/197.409936bc.js",
    "revision": "7eb5679c4c270da06c3e339cdadb98d5"
  },
  {
    "url": "assets/js/198.db422c28.js",
    "revision": "7ab63007878e886e7a71482e876f8d61"
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
    "url": "assets/js/200.512fbb60.js",
    "revision": "e8c9ccbf3622030baf92338c7f3e04a0"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.9e4ffafa.js",
    "revision": "ac616634e61a5c98ddef144015eab8b9"
  },
  {
    "url": "assets/js/203.be70b315.js",
    "revision": "fe921b956f645d1f66afe50e1c510297"
  },
  {
    "url": "assets/js/204.f5e16eba.js",
    "revision": "356ec1c0efcc92f767536bbb6e700b99"
  },
  {
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.dc8a9172.js",
    "revision": "31fd63ff8765f6221edcebb1582e9cc8"
  },
  {
    "url": "assets/js/207.ce1f5975.js",
    "revision": "8a98242f65b22fc8418bff9eb5c9cdad"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.2bc62a7e.js",
    "revision": "f73d49e7c3dce453fe626a1218f9c4c2"
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
    "url": "assets/js/211.358337f0.js",
    "revision": "3d987aee2b249db79e35adfbef4fb701"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.e578593c.js",
    "revision": "097816504ef20b3a0e93ae3d1fc1900a"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.574261c2.js",
    "revision": "4e6192a2ccedc3be08abefd50782e7da"
  },
  {
    "url": "assets/js/217.32df6f28.js",
    "revision": "ab9eb4bb0a3f2435203c456789e9de90"
  },
  {
    "url": "assets/js/218.3f4e6ad1.js",
    "revision": "fd6f4e64c31c4c7ab4678df7e45c9272"
  },
  {
    "url": "assets/js/219.71b9ce06.js",
    "revision": "a38dd5c7caf46156a66245df29bf3125"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.4e769659.js",
    "revision": "776beb90f7c866976cab58ad499e3d40"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.b8e5e60a.js",
    "revision": "316eae84b9185535d0aca694e6fa1929"
  },
  {
    "url": "assets/js/223.0066b62d.js",
    "revision": "7911d7928e56407e88b6530a69726996"
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
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
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
    "url": "assets/js/230.894d134b.js",
    "revision": "45000c17f405ac072d7cf21ec785f178"
  },
  {
    "url": "assets/js/231.60aa2626.js",
    "revision": "a1f0fa15e3524dea9be1f25c9ed72ea9"
  },
  {
    "url": "assets/js/232.6422e246.js",
    "revision": "2aab04059af4af252aa1a96918c4b182"
  },
  {
    "url": "assets/js/233.da73ad46.js",
    "revision": "9c0f30a88b608c6cc809608dc5ddc748"
  },
  {
    "url": "assets/js/234.c2723bc6.js",
    "revision": "a97afa85b5d3238df55025c4074adf7b"
  },
  {
    "url": "assets/js/235.a54658e5.js",
    "revision": "b37ca57614214d0d69365539d38c0d70"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.68e523a4.js",
    "revision": "012480c00bb58719dbade5bfb5444a14"
  },
  {
    "url": "assets/js/238.c1cb4f92.js",
    "revision": "bd18ed3d56632b21d2759cb1f1d073ba"
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
    "url": "assets/js/242.febda471.js",
    "revision": "3905d59a705f7bcff04626f00e093717"
  },
  {
    "url": "assets/js/243.6cd805ec.js",
    "revision": "060d48d789ea224b0c89cf225497dba4"
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
    "url": "assets/js/246.f5979aa9.js",
    "revision": "d19a05bd0044e66cca506a363f6af6fa"
  },
  {
    "url": "assets/js/247.23794705.js",
    "revision": "86b69bfeb72191da4d8a8eaecc7c27a6"
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
    "url": "assets/js/25.6c2742ab.js",
    "revision": "bbda7bc66f63b24c442f3b7cdfe17ac2"
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
    "url": "assets/js/253.91a3a85c.js",
    "revision": "96bf63a2d6bee6dc22854b5350fe9198"
  },
  {
    "url": "assets/js/254.f2752ba3.js",
    "revision": "997309ae212089205e5b0d265f21a60b"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.5a6097ec.js",
    "revision": "369ebf989504e52a374f4a24a957b2c9"
  },
  {
    "url": "assets/js/257.c338bd75.js",
    "revision": "11cd17fb418ddd8827eef8ff84c15904"
  },
  {
    "url": "assets/js/258.817b9290.js",
    "revision": "4753bf94e8853f5d72038049a9fd8209"
  },
  {
    "url": "assets/js/259.56c599b1.js",
    "revision": "9c7cf55b13f21b1fd1ea0177432a9b45"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.7a9b1c49.js",
    "revision": "97c2b756da1fbfdd3ed7bd277353401b"
  },
  {
    "url": "assets/js/261.700a7d37.js",
    "revision": "ef6531ee59f9d173fd07cb5660ec1f76"
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
    "url": "assets/js/267.e7dd34ac.js",
    "revision": "3fb646ab491763bad53b733526fb9b54"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.aa6af161.js",
    "revision": "213849a3e4cef331f69958524fa8bc4f"
  },
  {
    "url": "assets/js/27.4dbe6d9b.js",
    "revision": "42d2911e44e44dbeb4f46ee782dfd08a"
  },
  {
    "url": "assets/js/270.fc7e740c.js",
    "revision": "ffb1aabaa91c367037549cd65d74649e"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.dc0cf954.js",
    "revision": "8bdf05ad4d9e1b3b9af49793d1240d43"
  },
  {
    "url": "assets/js/273.d7086cf8.js",
    "revision": "880526107aa37d3011c1264f37e9938e"
  },
  {
    "url": "assets/js/274.b55a7756.js",
    "revision": "5949c63dfc50be680d17fd297d05b344"
  },
  {
    "url": "assets/js/275.b51f6a4c.js",
    "revision": "88f2be3fbc746550196b6b15863517f9"
  },
  {
    "url": "assets/js/276.fd64594c.js",
    "revision": "ab436e3b5273c0d6f3cd4f59acd25714"
  },
  {
    "url": "assets/js/277.a095b62d.js",
    "revision": "b72a1ef5c61e57b5df8a1bc9d2616b5f"
  },
  {
    "url": "assets/js/278.a95a5493.js",
    "revision": "833ae0dacf0cf48bc7c8a45309562d9c"
  },
  {
    "url": "assets/js/279.9b3d772f.js",
    "revision": "4eaf84e3f8ecdc44f68f3aff8d7887c8"
  },
  {
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.d62f40b5.js",
    "revision": "37bab82db6200b0a595ec07b74ac32b4"
  },
  {
    "url": "assets/js/281.f16b8841.js",
    "revision": "b7d9b99dc67243859a4323488a2611f6"
  },
  {
    "url": "assets/js/282.541c66b8.js",
    "revision": "eab194001b6b03f03b1394ab5b4ba211"
  },
  {
    "url": "assets/js/283.07e00f3c.js",
    "revision": "5b3034a781c30367804703d80a9fe6d4"
  },
  {
    "url": "assets/js/284.f4f495e3.js",
    "revision": "38ae2c29c715581edd5740e64f933991"
  },
  {
    "url": "assets/js/285.dfdfd907.js",
    "revision": "60f5daffc68dda237aff43bc1868be72"
  },
  {
    "url": "assets/js/286.8d7cd45b.js",
    "revision": "99f9d81f33e4a4a17c1cc110e3bb8138"
  },
  {
    "url": "assets/js/287.47207722.js",
    "revision": "50154b99904c297c5d28c36e393c5e0f"
  },
  {
    "url": "assets/js/288.281e1ec6.js",
    "revision": "14d79a405cb86e6f571d883f13bcfdbd"
  },
  {
    "url": "assets/js/289.4056a1e8.js",
    "revision": "5fad48776abc3315e72a2d2065eb0cb9"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.fa7c35db.js",
    "revision": "5b5669e2eae2499b55637e068b308585"
  },
  {
    "url": "assets/js/291.3b170166.js",
    "revision": "845fcc0410f0ef2e551101a72000062f"
  },
  {
    "url": "assets/js/292.053cd6a6.js",
    "revision": "c4f4dcedf07f34c05d96e3a0ab2e8c75"
  },
  {
    "url": "assets/js/293.dccc88f5.js",
    "revision": "b58724cea686f7eb69c9cbe8b74b3e89"
  },
  {
    "url": "assets/js/294.6043b6cf.js",
    "revision": "e2af115e1fd8c7ecd670e81bf14b4834"
  },
  {
    "url": "assets/js/295.9f1fd0f4.js",
    "revision": "fcf05c957f9d70be8d39c9027c6c758b"
  },
  {
    "url": "assets/js/296.310fd8e9.js",
    "revision": "d623f14d3fbbfd1f92228093029ca303"
  },
  {
    "url": "assets/js/297.9c508679.js",
    "revision": "dd2678ebb660ae7d3eadb800506ea4bd"
  },
  {
    "url": "assets/js/298.268971ee.js",
    "revision": "47ab4e54a5e61c4029e4726de7c0c81e"
  },
  {
    "url": "assets/js/299.4a0293b5.js",
    "revision": "c41062d4723f501a9b51a4b4fdbf5f65"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.a3d0b802.js",
    "revision": "3a26b95be4961e6b4c5b381b447af674"
  },
  {
    "url": "assets/js/300.ed80155d.js",
    "revision": "b6e36981b07b7a6954f6b05d2936fb58"
  },
  {
    "url": "assets/js/301.3a3d20ea.js",
    "revision": "a94b1401721882392d82c12cface105a"
  },
  {
    "url": "assets/js/302.39c4a4aa.js",
    "revision": "2c56f6717d3e37e4fcfe68c1262a4048"
  },
  {
    "url": "assets/js/303.b7cae850.js",
    "revision": "f679db8be1884c31d17e9746a8a9a153"
  },
  {
    "url": "assets/js/304.1a4db12c.js",
    "revision": "4c8f03f1e84f4a9c887b14a0191b955f"
  },
  {
    "url": "assets/js/305.598ae0b6.js",
    "revision": "3fc57bf582e61fbd1846f105be4af6b3"
  },
  {
    "url": "assets/js/306.272bbdf2.js",
    "revision": "a45b8fe5cb8979d6902f70c98c8a9550"
  },
  {
    "url": "assets/js/307.de295a8a.js",
    "revision": "a19e70e3ba2b6682485bf4891b9dfa07"
  },
  {
    "url": "assets/js/308.f76508db.js",
    "revision": "5ec2b6d114331b43b9630f7f5253fc0e"
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
    "url": "assets/js/310.0769027b.js",
    "revision": "4783274ad2d6111736cc3d3fbec36a54"
  },
  {
    "url": "assets/js/311.43ec5893.js",
    "revision": "c32edd7fb3ad0493f5d554910aed7907"
  },
  {
    "url": "assets/js/312.904d87fb.js",
    "revision": "8746ed31ad7f5b607d728193801aa089"
  },
  {
    "url": "assets/js/313.1590d919.js",
    "revision": "b9ed8324f42b72985375ad238bc472f9"
  },
  {
    "url": "assets/js/314.ed346b20.js",
    "revision": "968aeb2c4abf27a28f54db9cf55b4fe9"
  },
  {
    "url": "assets/js/315.3b2a59db.js",
    "revision": "deeed55680352b73b802e5d39cba4bcf"
  },
  {
    "url": "assets/js/316.f6811d49.js",
    "revision": "9c4f11a9479d14f39e760c46bc5572e5"
  },
  {
    "url": "assets/js/317.1e7a252e.js",
    "revision": "59560446b944c5efbc003b0a253bf70c"
  },
  {
    "url": "assets/js/318.71b44bd5.js",
    "revision": "d2b9b2731f91c1f18f13208506f2c1aa"
  },
  {
    "url": "assets/js/319.0aa05c02.js",
    "revision": "bc986a347fd6f90523322b352577aa78"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.855c56f3.js",
    "revision": "ec6dab48c7bce9052e3fc1084e1f400b"
  },
  {
    "url": "assets/js/321.c25a5097.js",
    "revision": "2a07cc3c9fa740534c98fe94cd546493"
  },
  {
    "url": "assets/js/322.daa349ce.js",
    "revision": "6c5f5247a3d1d1f69ae563446d904ffc"
  },
  {
    "url": "assets/js/323.d1bee7b5.js",
    "revision": "9ebfda823d15ace1dc931cb8c37850cd"
  },
  {
    "url": "assets/js/324.ab956e38.js",
    "revision": "6b8505faaf5895aa16c8b91515bfa7d7"
  },
  {
    "url": "assets/js/325.8cbfc74f.js",
    "revision": "7f2184b3fcefb746be93a5024042636c"
  },
  {
    "url": "assets/js/326.4275cce8.js",
    "revision": "9d6a3b1f9feed18dbaf95295de9e921f"
  },
  {
    "url": "assets/js/327.5762f5d0.js",
    "revision": "9c03f128604a1bceb545450052e59472"
  },
  {
    "url": "assets/js/328.74d115dd.js",
    "revision": "b9f4b1c7b2c4281ed470baced65271e0"
  },
  {
    "url": "assets/js/329.d407bddd.js",
    "revision": "1baa7ff58d4f3a3229e0c68e4d9f33e9"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.ae2e7599.js",
    "revision": "6619170c04b911c7ba2ea09817697900"
  },
  {
    "url": "assets/js/331.13f98cd4.js",
    "revision": "d1f4ef3bbdbea021b5edc1f01519ce56"
  },
  {
    "url": "assets/js/332.04c0fc9c.js",
    "revision": "2f0f57d7eda54722eb6c752cb1751ad6"
  },
  {
    "url": "assets/js/333.a45c5e73.js",
    "revision": "89925c312e3e53ba606e2c5ddc720496"
  },
  {
    "url": "assets/js/334.44fb31c1.js",
    "revision": "8a343c27f797799bf320fe0497737b32"
  },
  {
    "url": "assets/js/335.3bc06186.js",
    "revision": "b4f0bbd5992040e5b65f705496e5713f"
  },
  {
    "url": "assets/js/336.22b0c0d9.js",
    "revision": "618d56dd0d04fecb56f5623f992495cb"
  },
  {
    "url": "assets/js/337.cece604d.js",
    "revision": "24e037e8600d298c4fdd578d4cde52bd"
  },
  {
    "url": "assets/js/338.5ceca645.js",
    "revision": "4fc66b711628eabccaf31f039fc23aad"
  },
  {
    "url": "assets/js/339.594b710a.js",
    "revision": "c1356ad6411fdc395b1d3c22add1046c"
  },
  {
    "url": "assets/js/34.2c29924f.js",
    "revision": "b5126cdf92efb7c084b57af669f20950"
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
    "url": "assets/js/342.38e6b612.js",
    "revision": "9ad4bc884d782c75ea132973bb8f30ee"
  },
  {
    "url": "assets/js/343.f1b3b340.js",
    "revision": "e7a05b7edb4e87521cbd3239244813a8"
  },
  {
    "url": "assets/js/344.5238aed8.js",
    "revision": "4a35f46eb787f0eb69f03c35c5b595f3"
  },
  {
    "url": "assets/js/345.e92c5a74.js",
    "revision": "e22549b9e9582b5dfabcf3a991352516"
  },
  {
    "url": "assets/js/346.3f38ddde.js",
    "revision": "7a7decdca703191f737bd5109b7d89a4"
  },
  {
    "url": "assets/js/347.34ab7b52.js",
    "revision": "e3bcb3bb011243286cd9727f42163bdf"
  },
  {
    "url": "assets/js/348.e09f480b.js",
    "revision": "d435f91925e960b23aae1a70eb27da86"
  },
  {
    "url": "assets/js/349.1eaabc6b.js",
    "revision": "e00f863704b59a434a36337b3aedbd24"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.d08cd820.js",
    "revision": "06d8f96f80460a14710c28b1b2a68c93"
  },
  {
    "url": "assets/js/351.ea475bc1.js",
    "revision": "f862aefde042db58f5c14db7e215b050"
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
    "url": "assets/js/354.9b71b3c2.js",
    "revision": "44ef57a3d5c262a9a80329d014a1e623"
  },
  {
    "url": "assets/js/355.bd20acb2.js",
    "revision": "23bfd89c74297d3078d1ec4243445bd9"
  },
  {
    "url": "assets/js/356.e4011f29.js",
    "revision": "7138fe36fd88c03f6aa67ac8a6249b1f"
  },
  {
    "url": "assets/js/357.ea917d2b.js",
    "revision": "e4efde1f27ee516d86e44f52ad2a227c"
  },
  {
    "url": "assets/js/358.4150d71b.js",
    "revision": "e9120714c049c14b3b94980ae3413cfb"
  },
  {
    "url": "assets/js/359.ea243618.js",
    "revision": "b70a0109bb642e4bb2042a4e0d38c5d1"
  },
  {
    "url": "assets/js/36.57bf307d.js",
    "revision": "7add8c725537ba3320c3f75c201d5311"
  },
  {
    "url": "assets/js/360.f4631d5d.js",
    "revision": "c1dda0825b573670237103169eb55783"
  },
  {
    "url": "assets/js/361.f6d5eba4.js",
    "revision": "c6fda7d36f511fd0f28427e0e7e792c5"
  },
  {
    "url": "assets/js/362.7b35b06a.js",
    "revision": "9b89676c2a158344e5b316fc3aefe243"
  },
  {
    "url": "assets/js/363.56d7886e.js",
    "revision": "bd7029f74f21b11b7fe5b466c8bafdbf"
  },
  {
    "url": "assets/js/364.f517a616.js",
    "revision": "d73c3e27ca6a91f156b05e9d65da8154"
  },
  {
    "url": "assets/js/365.9247aab4.js",
    "revision": "88d09c32382326899960fe62eac8ed59"
  },
  {
    "url": "assets/js/366.39994888.js",
    "revision": "2577fcb3bb1f07489d8c608d60295675"
  },
  {
    "url": "assets/js/367.2bc1de22.js",
    "revision": "9dc3eda13e97a64428263009fccb0ed9"
  },
  {
    "url": "assets/js/368.e392343e.js",
    "revision": "a56feea6a240cc7f95572e9f5b5ff39a"
  },
  {
    "url": "assets/js/369.81e527e3.js",
    "revision": "2a5fd64a7476732887436f956b33c556"
  },
  {
    "url": "assets/js/37.cb44a25d.js",
    "revision": "e5136953dbbe8c85a4c95dab41146baa"
  },
  {
    "url": "assets/js/370.503e637e.js",
    "revision": "f3f811ac61adea744ed4ce3d66f75144"
  },
  {
    "url": "assets/js/371.5b9c6e0b.js",
    "revision": "f8391d07fe024344c9bc1bdd9114e830"
  },
  {
    "url": "assets/js/372.5e2f0a05.js",
    "revision": "47ece00041501064c4e961a1fbaa7738"
  },
  {
    "url": "assets/js/373.f146f0a9.js",
    "revision": "2454a298a21a254d2695e976b3d5728f"
  },
  {
    "url": "assets/js/374.84d80ae6.js",
    "revision": "db00d79ac4176291f18221c5ace78dab"
  },
  {
    "url": "assets/js/375.d0f1a5cb.js",
    "revision": "d1e09378c470ce11fd085ffe57f3c4d4"
  },
  {
    "url": "assets/js/376.356fa13c.js",
    "revision": "63ee6af349eb315f3214bd9bf58dd2ca"
  },
  {
    "url": "assets/js/377.b6406df5.js",
    "revision": "077857114e370cde7cf363c6a5a87ec2"
  },
  {
    "url": "assets/js/378.b3a104ab.js",
    "revision": "7f6f74c858dc6840fa1c122875723561"
  },
  {
    "url": "assets/js/379.f27a4212.js",
    "revision": "b0c9a6c98a2665f8c66f3e8a9574010d"
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
    "url": "assets/js/381.9aabb176.js",
    "revision": "b6c751d43b9e721f26e8fd651e2386e4"
  },
  {
    "url": "assets/js/382.0b4db7ae.js",
    "revision": "792753f406bbba53f2ffaa0db2e8c52f"
  },
  {
    "url": "assets/js/383.c5cade3e.js",
    "revision": "45d576343ed8b1ce81f100adab7e68e4"
  },
  {
    "url": "assets/js/384.f07a1f7f.js",
    "revision": "19a7c7d800ff299d996fd8ec375c2459"
  },
  {
    "url": "assets/js/385.dcecc599.js",
    "revision": "b50c35e5245a6d41441f3a06557a11fa"
  },
  {
    "url": "assets/js/386.9391a6f6.js",
    "revision": "be582aef10362cfd3b17007c4c73e3ad"
  },
  {
    "url": "assets/js/387.763a7709.js",
    "revision": "67e7234f08b94d8c38602dcdf93f6ce2"
  },
  {
    "url": "assets/js/388.edf5572f.js",
    "revision": "ba2e36823d5e046f4569467141f9cc1b"
  },
  {
    "url": "assets/js/389.5e20db09.js",
    "revision": "b0174c24db977ed08383450f01df0e4f"
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
    "url": "assets/js/391.953958d8.js",
    "revision": "29360ff6b9c8d4949ac6c8812676710b"
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
    "url": "assets/js/397.10ad766a.js",
    "revision": "0dac689ef2a54658ef8d02cbe4a2c1d7"
  },
  {
    "url": "assets/js/398.4bcf7a8d.js",
    "revision": "105e714f6f34a2254ea449abde9fb4d2"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.ec446020.js",
    "revision": "13a7efc36488d805c012edb0a2c31c8e"
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
    "url": "assets/js/41.7988ac1d.js",
    "revision": "dcc644f38e3f036459ece42da33e7970"
  },
  {
    "url": "assets/js/42.d9bba00f.js",
    "revision": "0e58bad4a4988c87b196224c2b9a3edc"
  },
  {
    "url": "assets/js/43.4db73f0e.js",
    "revision": "fa4c99427b3fcba20bdc688478a23b91"
  },
  {
    "url": "assets/js/44.6c498ee4.js",
    "revision": "9075f303843f45b20e215de3f87e6186"
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
    "url": "assets/js/47.f6c7dc37.js",
    "revision": "c605fbcd0c343da83cd84356c66f0bc9"
  },
  {
    "url": "assets/js/48.fccc1c97.js",
    "revision": "3c405a625a73be9a691cfe0198ddc4a2"
  },
  {
    "url": "assets/js/49.8e917ac6.js",
    "revision": "76af7d1b151c7700cc764cb28f8c52cd"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.fd836bd7.js",
    "revision": "3827e6d5cf126618127861f9ef4f43c7"
  },
  {
    "url": "assets/js/51.f1de8d9c.js",
    "revision": "fcebb5eb629a0c39a4b03866f8df7006"
  },
  {
    "url": "assets/js/52.5af54a0b.js",
    "revision": "e3f1221b1eba1c89d9fe85118ed40185"
  },
  {
    "url": "assets/js/53.7ff228e3.js",
    "revision": "be5e503b8a4b439ffd54475797e9b723"
  },
  {
    "url": "assets/js/54.1d7ae6fd.js",
    "revision": "b4099d878aaee26c38c219cfd4c629a7"
  },
  {
    "url": "assets/js/55.3ee221e9.js",
    "revision": "0d5738593b7de1577848da971d6075a5"
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
    "url": "assets/js/59.71007cca.js",
    "revision": "632da3486a14e30380143575ea5fdde9"
  },
  {
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
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
    "url": "assets/js/66.314d1f80.js",
    "revision": "d403cf5a1697c4fa5cab75bbb1f7141c"
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
    "url": "assets/js/69.28b887aa.js",
    "revision": "1dddf0fd0c6790df0e653e3ea9495802"
  },
  {
    "url": "assets/js/70.585ea37a.js",
    "revision": "19eba770378e233b6512b21275fe73a9"
  },
  {
    "url": "assets/js/71.e837b28f.js",
    "revision": "238912e3bd8f366c2d6b5da157f280c0"
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
    "url": "assets/js/75.a11c8851.js",
    "revision": "d94eece54663fbed362f752fa10f39c0"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.3d00b25a.js",
    "revision": "ed27503caa142c5f9fae803aa52d0847"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.f9b6da4b.js",
    "revision": "9b3a322825b4e29515004b1c65eb756e"
  },
  {
    "url": "assets/js/81.fa46da8a.js",
    "revision": "84b6634b8931b1dccb1dfae2c751a830"
  },
  {
    "url": "assets/js/82.c5b79991.js",
    "revision": "cc16e0f0ff71298924458df8b814e86d"
  },
  {
    "url": "assets/js/83.c064f57e.js",
    "revision": "7733e17c0e9ebfabf05e103a5398318b"
  },
  {
    "url": "assets/js/84.59938c01.js",
    "revision": "dfd48104104087558eaea5b21cf32093"
  },
  {
    "url": "assets/js/85.63a1d859.js",
    "revision": "5de33273ad31c5191ac2e40a4152d63d"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.e20a0c9a.js",
    "revision": "78df686c119172293e65bbc6ad6f959f"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.6f65949f.js",
    "revision": "ee857a4d62cc6e3cdee3cd04bbae7d3a"
  },
  {
    "url": "assets/js/90.b2456b48.js",
    "revision": "71fe1f4933a5e7a2c5b212f486186c15"
  },
  {
    "url": "assets/js/91.301a7fb2.js",
    "revision": "836d4c21f26bba7728f2dbb49c7aebd7"
  },
  {
    "url": "assets/js/92.0839728b.js",
    "revision": "a362eaba1ee99f5099dcf0c4bb1d7056"
  },
  {
    "url": "assets/js/93.c2db35e8.js",
    "revision": "0c2a186a1041860622e5902dfa87ac6b"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.aab53072.js",
    "revision": "9c6b09a30f7cd54a264bc93192f97fe7"
  },
  {
    "url": "assets/js/96.0313d3cf.js",
    "revision": "68e4a3c38e43466be1258da78e9b3e35"
  },
  {
    "url": "assets/js/97.a9d77f55.js",
    "revision": "1da8d85f5cd5d966422d86ef10232d0a"
  },
  {
    "url": "assets/js/98.2c7d54ad.js",
    "revision": "89f61c4edebb4703a4f38a08fd5e6721"
  },
  {
    "url": "assets/js/99.9927c6e4.js",
    "revision": "206a2b96103deba7fa5d16060ea5fc13"
  },
  {
    "url": "assets/js/app.8521f719.js",
    "revision": "8fcbcb9fac27a60e2d18580434327d9a"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "c9ca4d1ef7604a28739c839979889ae6"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "34bc397d933bef12b437d6e205d17e6d"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "c581c8608a418fb8463de1fd34bd7984"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "f56f2771ff81ec15b6f3edb1a69f3407"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "c3bf4d8df717f29a03b57caed16e8c7d"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "46b924e7e592a3b4844a241088e4c0ae"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "b76ed2f8565b29b4152a8c286d513b90"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "d1e8ae6da9d64d25212754856c59863f"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "a2c973439b1a1ca2cb40b202cdc7dfed"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a2b82acbd10a2941bbfaa3832d27d54f"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "b1d44846969dd7b269364407fa54d5bd"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "245502bce87555160a483f2adec45c47"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "32e012d0f5337bd95ef1e4e5ef35c4fd"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "8a2ad76b6f34a4e08bc1bca8d62949c5"
  },
  {
    "url": "master/api/index.html",
    "revision": "afb28a453e103a87338820c0aea73456"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "ea98e525d06b7ee919a1c462fc7e21ac"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "2e47e0d3ab53a9fd6cef21fa9824ed02"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "02762e0da8757b6a2fe2ea41a42978e1"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "a961d586371d6cb051619c581b014a70"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "7a434e3d5b5e2457764554f71b124c88"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "d587c987c32b94167dbdd0263a2e56c9"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "61a557f91e8c6cdf6d0e6f136d5b99a3"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "7714faddbf1b55ae25049d4511ce5824"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "2d4f46297bf1a883a5b25d9214180e1a"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "e160afc1e51794053c28e5c9c5b53248"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "d4a641084159d194bafbdb1d93e344e4"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "0156e7b03218538b20e05b3105be4c9e"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "8343e66983b82adbd6b90b0799316749"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "6e8f1437414096b3fd4df0ce2e233dc6"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "45ea19a1a78a198b9323610c1a1d97cb"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "20bb7b5b0fde1e553a5c83897ed3862d"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "fd17a9e36bc75428a92687f5bf7c6734"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "54131d97b5564a64d1dadf6c5ea3df34"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "ac11edf20aa55edc9cc4d0c2bb108d85"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "41a0dc206cd4a3394b656b798d6fc52c"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "4bfbaf536834cdbe5950d90a7de3ccb0"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "9ddb6dd303f98a7cfd2c5c53cd08e8a2"
  },
  {
    "url": "master/packages/index.html",
    "revision": "791c551a4ace30d5baf32faf66c3d1ab"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "c42699b3881b2d8b302ff78bbcb264bd"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a56098b60757981f704758afb5caf121"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "8fd3aeb0060a1da48a5249efa8fabfb9"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "4b45f23f74b76d08bd33f6ea7ead1018"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "d6e293af45c1b46a95ec3fe15f077b66"
  },
  {
    "url": "master/packages/views.html",
    "revision": "d74fe0b4b917365d4e04ec9d24f3455b"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "fb7ddb254d888dea29cc0d868dca13fc"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "b1d99f30b446735dd171baff04c3640a"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "b011397b6ed72f39ed708f27c7200398"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "144a94668271f17b982258aeb4e9091e"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "7eb74c4048328eecc04f84c6bceb8d1f"
  },
  {
    "url": "master/themes/index.html",
    "revision": "8bac137ee450b3c124860d255dca57c0"
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
