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
    "revision": "ce38722e7f71f2256ab1132b89855344"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "08e63116711366d112e635eccfb7e62a"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "bd393c60bd29eac76a4262f4f25a79ee"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "6f45320eb419c5e07689630cd666bfdd"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "80d637dad346c8a4cfcab5a644872fa8"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "b16c72b826ddc9c102aebfae7d05841f"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f18b8f1b8c75f605aca050be0dd21e58"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cab782a4bd9af10c38672db3f5f07faa"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "021799c19b064397ec946bae43998599"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "4632e848cca8c8ee4283a8ba9578ecd4"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "0b852473538d7cc3ace15af8dc357078"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "686adec5225095327293372f61162b0f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "83b88ccd7e662dd6538839bc562d7cb7"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "f5afa47a08d653388bd57e7181c3f00a"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "186b8cc68d6aaaad702155ddb00da4df"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "34b16d59e3bcb5c299aeb52706b0ce5d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "867711a3abcabdbfdce8fdd253899aa1"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "eb3800d57be582e62956d74d102bbf65"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "b60f0a7a478de2b9421aefa5572e0567"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "28cb712590e04f08b19697b8b339049e"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "2d3083f6907a173937d57e141569c127"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e51e64cd106f097669aa9740a44df6db"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "50ed64e61b598520aa0a03f7ec53764c"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "443ba8b0d0cb2d2318f24e2a60dde58d"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "11f56295a74ebcabd079cd800e2fc433"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "11f6c8b94410e1a529d18af06d64a533"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "097bb010cebe0d87301c72af327f0cd9"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "35582cc5df977fff66e5ce4bc0057252"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ca969a4c3e61468b65990f4bccc95041"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "b9f1c85146339691f80461d7c05306cf"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "789427e30cfc13f114d18ee7f2e43e10"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "532e39268b895da79fc5996b2230f2a2"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "69d6034d70c0478d618a1c1bac895c0c"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "d5dd72141b7060491851cbcc0b590bc8"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "de81db048bfa5be727efd7d33eba23cc"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "48137364d87a53e03dd3f8eb7a554ce5"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "3a8f1ce08e841e1da6315096fb7d0d6e"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "f165fdf996045f0606cf084460fddf6a"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "fa44f64f1962a25bf90f9f6c1c8aea25"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "652db3111e593c16bfecce0d5ac3adc1"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "c69ad9e6fd01425bcc06e67b00ef0078"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "bcf4e3fe14b2574c88cd3d2b16263aa2"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "3210d818a0467b1267fc442a1498e99a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "c29587ede2a7d8c619845dfa5a193c4f"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "a57c75d17b7c544f0b76158bc9d2fce1"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "bad2a03d873e31fdb1a8d5b541121cd8"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "70a1de10f9d944165d300d3ffab97170"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "dbfb8894ccb6459f3ed8e7f717f6f4c3"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "b35af5e9a8af22d745c45144f1392cb3"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0e834d169c78fb1da1260781446f2910"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "fb316bf426ef7c270cbadb1c20fcbd09"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "1c2fe4fd3ed0583885dfb3e3382bb889"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e072af730389c7475249421d6a5ff872"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "dfc6420fb983c1be6c582cfbfd71f6ea"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "81550710a4f6e63a75aafb3ae06c4daa"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "087724eb67366fb54f32057f52f4d34c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e034db1da49b9ae8dabf338b791bb210"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "22f728f38f8eb25c31552870df624720"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "4621d5f92df66f7bb05dca92a2fd1525"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e48c21d9c9509f4b0cf29f96d723b19c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "be5001130da2f0ecbf95baa086c1b7b9"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "86f771fb27194ab749f515fc8e215ded"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c117154df3d3180f2c5b01468c2ead85"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d730b9a96cd1b2332b978f81a365db61"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d30a71bdf5b8ea31ede5aaafa2ffffa6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4023124796fd5de2bf69f69065f9a183"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "0bd31dd7dc05eadcb19d274b697d7eab"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8c4fc70290f6a64a24133e833faf77b1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "52d054f51c76c2aa5ae6fd1b3b4d8340"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "fb8e875159e0550e3a5d55bf4160d9da"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "9da7fc3a41ce72d19481b423c087d8b7"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "80e92d14ccadba57c53fd98651bb5a9a"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "b6fde7ec7c98b084603ce8806829a5c1"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f48894887d4fc82c958157c34307b649"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2a904f08df65cebc30ba815e62d1d880"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "de17c35ce3ded1f04b8e57e39a6b1653"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2dcefe372ff1b61f9dc2ca8458b00a15"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "25ce0922d3449320bdec90799e695f45"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1502c3e2b91a0242750edba7f09a32c7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "def51a6c03a874740b2035a4e29cd40d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "acb3a15aa887c7e106d68315d703d7b8"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "d4e78b5a3e199c69f3ff5a37ab35dcfa"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "085a005dc079295f3aeb460cd28dd9af"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "c77e88c83c3d2fd5ad61c43196266ac3"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "1e7efc5f1381e1a55aee73126359c523"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "c451f59bead72926c6f46c3d4f89c7b2"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "d9095a6378084c2f44e5ec7bf56eb54e"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "af8292a5414704cf90f9c566baf848aa"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8ec6f4116d032db1636c6a00fdfa3ec7"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "819336b0a082d35c1ed3f6ed607a7a7f"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "fe105d9eac55e0c650ddc39ddbfb9a2b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "884dd95cb8daf1d237374b9a3f0f6c32"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "418afca26491d3407fbba654d84bed89"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "65c28d2dba76926dbe22937caeef0e6d"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "e809714d79660255efdf82812060a011"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "dd9746f52d31e6fa7a3b187601edc86a"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d82d3701cdb42b5e8db4533007468c38"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "66d78c6b86cf7a478b576ee6784c3f99"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "724cbf63f8961af5cf7c8fc1529631db"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "a9f82e741667be1e8fc77b027a628c57"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b0398d93813226cac815f0ec0b07b292"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "fa59197ff054025ad8d25b576b0a0da0"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "fa9560951531d4c60f32297112113e24"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "50770b7b860145960c49755e11a716dd"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "06c900c39a04be4fb227e2731735cd0b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "ab4ce19b86bcb5a562214a53df489b8c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "3c8cc32950eb9efe425727c0129721e8"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "620a605809247536fd5964b0c90ea3cb"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "dbb0db7077d5bb4f2ba360fa28b2120c"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c6635aff70609dd27471765da90889a7"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4330156c018223770974320f3ae963da"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a86016aa5aa027c26df9b4a1dada1728"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "853177ae6c74d89c083809f55bf1d747"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "5c753cc468233eb4cf623172a63eb6aa"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ea38ab410caff0c7f7b7ac8bfcb7c515"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "486d130096361aa79ae15702406c28be"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d9ea888a35a36b9bc58080d836ad9cc5"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "29264404ae04715717a80155671899a0"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "adcadb8f5bbd73201d4163dba0201ec7"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "c6788eff165d7acf4871ca7b165dc16f"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "2aaab56c3c1f4f340803616ab569becd"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "a0ba36300973c25e55584fcf4b8e9385"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "64b76415e4378140b94555463c5c0418"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "5384f465f0c1e071039d369168c48f78"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "371891fefe9d669b060949b86abc2463"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "94303163876f4f16e42318fe930e3d5e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "45092b8eb37abf0b15b3468b580c1c36"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "dc770613c20e80337e33d796bde7ea03"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "0a9a956f587c39fd5ded9fbafc4e3f59"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "cb7c5a9ee47d36acddd30785497a40c9"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "75f446aad00a5819f8b025ffcdc0dfc5"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "8208b1cfa476e2b70782fd9524f24dc3"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b2dd581683e9101e94747bc9b5f4bace"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "b17dd2f16e8861a2f90e36f940603698"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "ac5ab627a867ba5d99d6921af432c43f"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "2841e581a713c8e7e2109f43a638f1d8"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "bd20ae7eae89e77598ae083bbce4565a"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "929d1c70867e8c92a54cb46da4191957"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "c35b0aa582da60d933d25f7860b0d1f2"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "c09f661c4f3fd453431ca3575663a633"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "031dee73d551f523aa125b8ae3ce2d58"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "35fc52506aedd071a51948f1869dc925"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "fbf2ea551ed72fb97b0c5ab606d23c0c"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "07a7e18939ff6d0f9b43bc5ff11a4c7a"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "8c0aa22a7ccca99a96ff413dc1fddd53"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "43497220c38f314c71d4f2d02b903360"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "7ec0efbad043fc618e51deb9b7cefd3f"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "c90c5bfeba13664d033edae3ec19b3ef"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "1495283e1f5fe7f4b9ffde403c2b0da3"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "be745982397179aade8ffa6d8e4ac12d"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "b9940382c2b07ecd2cd3d9a9c9e1d9f8"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "5ecc9f1f09d240360a062acbc61d1c1a"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "75b767085fa4e51b4ba0d859a8eec1b8"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "f988b9712f3f3221a79eb12084feed6b"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "0c263fe43cd35ffb3754b9a603cfbd15"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "68ebde00dee98b6db532f7eb12d3f87b"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c36bf9ec56a88bca3f54d258cd279327"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "e7952c956dc03eba6efb1c38570b0bd4"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "11eb744b1d8dc3c15905e7857332e666"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "00ca615c90e9ef98672e52c475d3fac1"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "88acdae7fdb1afc66e6db3e25cd8f891"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "12b63c35c5d71906037e59a1e2256ca3"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "f15ecc1c1b2646b1b06588dc3c4eed12"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "7f08e70605fe7b31fc92869523f0be70"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "9ca5456f50fca21ff45d4a9750db699f"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "90fcf8df537793092b40239096f7fe3d"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "a0b6803925c530dddd0938e0e479e881"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "c324b2b5d191c221d06eac071ecfc81a"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "4bd226f076cad0886b3c5a257d5f191e"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "8ff519592a1c31889191c5dfa01b18cc"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "a7f8504bfca602f45bab02febbfd177c"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "145f2b1f707fb621011ca83a32030734"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "fd5b194c65357add9fea2306a92dfd7c"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "cd32540463fa68438db1e9901de231e3"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "091d5b30873738eca1219759560d73cb"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "0950c3f9a72d8ce6e4185eef63301317"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "441bb173c2aaf25c5d1ab5c55baa3bf7"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "ff10fd8a292483a42e3d7dade4084f99"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "b723c20c6a9e0f9ddd76d2d602103447"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "926112b89d804eb7c5311092941954fd"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "191b8eaa1582bd238a0460288cf2431e"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "ac33ab1e686c37e9855a43964df7e76b"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "87d2bd67fe8b6e271135a5f87fdccac0"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "22c3dd0102096c08a96b5f26da744557"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "45fd47662882c615a0b6883d7a19889f"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "43ba57af72e815068372d253611b845b"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "5c37385794e6cbefc15f82721a096543"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "50c8d98187bf66ea678fc19a2772798f"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "037570af5d565d0394918057585d5508"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "66fb088f51fe1f31fca5719a8440d65f"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9ed17d2cd84d7d7f8f8a52ae087f3361"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "1388430d5ea42b76351bc9bdb1100db0"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "f343379e23402bffe40d0009959fabc8"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "cf36da3768b56179ab9f83ca48d5285f"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "212675f704635182214d15bbe68337b1"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "882022c3aded931fc1bea35db9ef41be"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "365ec54b9884bb575b014fe390a5c1b3"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "7218772006e0c024e7f040570095a7b8"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "ff9c8247ae0c9ee74b91574a18f610c9"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "2fddb8bc50c74101ca40d5a0669ab1bb"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "0153fa06a24d55993d7be07c055ff73a"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "50a14a244ba070e0563c2e59fc57e93e"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "3d4a6842b65c30b29ac8169b69f8ee70"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "0bc3a0167d5d0caa48c5ef6c2b860356"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "af874608cf957520d5e8a4fad736aa71"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "a107f6fc2061ec789ce231679edda782"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "1cc76c97e93f6013be055a4132740d4b"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "fde3b0c06d3b29d8e92b1e4abd57cd59"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "a367bd31526397eaf19589fcb6fe8736"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "3910019da0e27f9c9b11c4ef338950c6"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "3116524da06c41921f556dbfa9cd0df3"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "dc6afc331ac9aa85b422d2470cb64e22"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "8e17d2bd320d65ec72dbf73174b760e6"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "4cf209e42ce2c848a997effe7eb7dc75"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "3c8736ab1962fb7058548f2f79c3e249"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "f836acd6129e2464a6a4c510006be632"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "7477a6b7ddb0a4694c3a5e621dd4f60b"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "e58f602c26ffecb88c7dc5f8d503b93e"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "d89a14d7253f086e4c194b48723e9944"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "1cf2791cadd15c18160ac2671a794c35"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "b02d511eb4adac58a46fd5c753b99f13"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "98eae24d9d150a4ea76982aa852cc729"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "69ebd78649f2022786fabd7df7cbf3ca"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "f6655c791168712caa46542a0e7c78e6"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "9b97e51b533d88bb2e0825f4803c69f9"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "5c97df12285fa4841b939a544028a013"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "b9237b680e7a793bf0c50d0b6e0682ee"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "4ba49de3366360f315e4708e65b7691f"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "8cedacd1fc89a8d9b602ce7c46aafaf2"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "9097ea0754f64656e00e23833f3a1481"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "5d19cd3415f394ec6b2268f86bd3e1da"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "1f3eda8ab16e8002bfe35d71259ac829"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "f6ed6f831be1fbbd4610c4ae78d97a5e"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "7e2d7680b887cba126349afe1bc6a693"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "bd4fc92dfa148d8e1a7e238e480b1c4e"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "f1f22aba56293c5aa488cee8aae8662f"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "10cdb2c8be6d6abee51190ff59946a87"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "ab49da6a3a9a5cc7724fb689a7b862b9"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "2cef0bd9d3edc7bb07db216371eef37a"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f18671f1526fade9328ebbc762ae27eb"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "314d339bdd463cdb1505488107198d63"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "e21294866aa78a86b0f5490ef40f9061"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "89802109070541c682027af5f8d0193f"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "7f84c69638da6aa00be3211d648e94e7"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "f965f152ce6076fa036a6f5585736b1a"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d0825d4d511be5f56e391e4e67423e56"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "4fd0c2959b2bedb247ec18a4ae8f3a7f"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "54dbc45c7fcde3a51d7b42b26583d5da"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "44e6a7597ee855b7b90ccf6bff58031d"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "728b13bb9b55177f7fb5f28cbd900693"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "0ff84777750acab3cbd6b8b9a7f447e4"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "8ba655cfdc7a059ea0ca953d69bc0918"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "a423da125290db9d8f49c1a908bfea0f"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "0b636ff02adf25e680900e0a89325114"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "ecc014e26f4eb752466ee13e37e3b690"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "96862bbf9be6acde6d7d8f4d410c5d7c"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "0b8d53bc74b03de17bc2327db73a458d"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "e25dbae5f1519a2512fb60d04b62ab31"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "aabd7d9f775d5f6f0ceb199a8f00f0a4"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "d2f922d482827f216fa3bdedcc58fc41"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "d0e2bc139e9aa2107726c04a22d05eec"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "4c7f5ea27d4ce3ff174e1d80538828d1"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "f8823c83755055f2beacb405399dd09c"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "7566c946ef7bcbb918fa4cfe391a9992"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "069bab1360cfb90b5af47d8eaac1f39a"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "f434a12d947da4c287059e32d6e01fd9"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "86efaccecbc1db5c414f15ab89f9e2b7"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "5eb44521efdb0f7e346d613c8ad1b352"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "9127bf4eb7691be05fbdd9796a262571"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "535b0fee384e785f10fb7fcf5e174406"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "ee507b44a73e0a5bb977623b077b27d9"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "0da43cf43be2c17876833705892eba1e"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "95868d4c8e382b53fa591dcda459c896"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "84821e6ed8cb193afe516042d2062ec7"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "d813c602aa5be0b3e9e1db5edbbeb8bd"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "2ce0f1cdfcc81d825b2c137005d28036"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "8e48f2e56b37e545e8a3bcff33ee4d72"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "4f88712a6a73c02d09bf0e0890b3a607"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "a229dd24e3d57f94ea4a58c7db0b7372"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "cb374cc6e6ead0861f45f6db6e0790ce"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "05509a2e1f3da56d10f3ade4be94df4c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "2a7a2f4fdeb6c7d91f78a2a91553d399"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "a13df25fe851c05e9fffe7a8ac5c27dc"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "df4aeb0d497ab0536477fa48695344f9"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "9d67d4e20eaeff288b7f6ca6ec314344"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9946578e730934b48d105a26d42e0a44"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "40ca8ff6f7c5f2d6365400217b51de12"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "540ca6ccecef655df2e753a0558cea74"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "54b1510ff1f0dbf9866eb86b11267344"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c153fab5e155dff3786abff9a52f914b"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "aed02f036eae32e03071d8a4d88bcc65"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "a90f7ac11f72019850b968f60e48a596"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "97808745198903f6202c139fb479a4f8"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e32fafd98302efed9802876eed448946"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "1a1e783cd56a82b83f077f350983ec91"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "222f7fb09c2de01e6ccf7ffd9b8f8fc6"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "971ac9c45905349ed3412532b2848ae1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "246626ef7b363dec4706fde614e964f1"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "6b74a0ff2af6dd4bf619965457f6786c"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "a58417f64b804ca50296eb8aaeb9e0f1"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "1b6ad41757f6c8b97bd281dc2e9f870d"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "2547e50d626965b3e31baa8c5d7c67c3"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "91a5a3e4be8dd5854443f422048e60b3"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "4f3d4ea0819069e41945e6158d822b14"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "93a09cd9d1f392db46b78f665d149a62"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "7a0a47d771dbfdf739a652b4adb0c858"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f5f64941726a6b4660e0966406c6eea8"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "55af8c60c0b3a9b4ea0594f638406368"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "1226465a74760779bb4aba67f2ce99e5"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "d373f41d481ea9d8b2336b91da2c27ce"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "55b681df0b2d484583aa23f49719dabf"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "2e4130141ca73a36796a78d9bd48c9bc"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "8e366fc1a03ef999909f98c70ed190eb"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "b2ed531668d2811fb00e980f60a207de"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "aa7fd248e0a3cb2347ba0393c4709638"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "95d1a8600c518abe5d50ff2dec2b2dbe"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "8dc46f54fa56fa187b78872fc535a537"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "4746db9dd9594b8259ccae2c07f5c65a"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "63a128207dc015568c65958f310558a3"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "47559ffd63a8afbe87292f84b8fab96c"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "9baf3abff1155f5561130c76d08b0d6e"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "b9874db0e5e802eafb7f5910cfd7b59a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "9877d406f82754f9f29a5421204a1074"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "c7d1381e293c478704207a5e710d4999"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "4b571be512cc667b534e00199c1a9022"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "cbd158512708510d1ded3aa5721dcf4a"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "aef3831c2ab711af681c914fd67f7701"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "57cf7108bd4630710f8d50c12265756d"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "3b503d0b0c706511555eaaa7601e54fc"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "3f80cc4a1208946f7423d3c84296419c"
  },
  {
    "url": "404.html",
    "revision": "73379ea83a59ed7e82d72f4ca402c76f"
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
    "url": "assets/js/100.68316120.js",
    "revision": "bca8b37a7487bd7af4bb13899303b27f"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
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
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
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
    "url": "assets/js/109.a86ec105.js",
    "revision": "1cfb055d4009d0c93c0763f8258d7c6a"
  },
  {
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
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
    "url": "assets/js/113.f9961dab.js",
    "revision": "04c5e8dd1ce800109ad0e3b6d4349345"
  },
  {
    "url": "assets/js/114.b635a4f9.js",
    "revision": "6fd6f04a391ef1213fd1eb8fc26b947c"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.7c2f4757.js",
    "revision": "0b922aab33e4e2004f392456e4f704ac"
  },
  {
    "url": "assets/js/117.b43e51c0.js",
    "revision": "75dcd7da8cf1a7939fb24cdedc5e975f"
  },
  {
    "url": "assets/js/118.5ccda859.js",
    "revision": "6bc8316773e1c8249269ad8bda2aa99a"
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
    "url": "assets/js/121.0eb572a8.js",
    "revision": "e6ca6e67d43b5bcfeaca0f84e9e2d224"
  },
  {
    "url": "assets/js/122.b45213d7.js",
    "revision": "9b99677dafb6de34630cf65614e1dbad"
  },
  {
    "url": "assets/js/123.b977b17e.js",
    "revision": "cd120e8c972a8882950ae1fa79ccb78a"
  },
  {
    "url": "assets/js/124.13b28ddb.js",
    "revision": "34884cfa201f4d92be4a87bd018dc66b"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
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
    "url": "assets/js/128.7d4b722a.js",
    "revision": "f120367ab796a51b355b0329ece88da5"
  },
  {
    "url": "assets/js/129.22a256b7.js",
    "revision": "5eff25156b06c67d2be2d04a29067efe"
  },
  {
    "url": "assets/js/13.c84c161a.js",
    "revision": "2b48eb8d26b36e865305c1c0e3d2e69f"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
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
    "url": "assets/js/135.127e300e.js",
    "revision": "14be2a568af7664c34a70ba9b1cd157d"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.22292f17.js",
    "revision": "6d1ed2f779fe977513c9b03342361b60"
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
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.e6bcef07.js",
    "revision": "36bf5b460554a06f4664e3c026fddbe8"
  },
  {
    "url": "assets/js/143.35651099.js",
    "revision": "962d0bb47645f4104026f021a8a85a25"
  },
  {
    "url": "assets/js/144.a957adf0.js",
    "revision": "9d94434a478ac41e37237e5f079b9a65"
  },
  {
    "url": "assets/js/145.961f1029.js",
    "revision": "c27c2db487b80715772b599ec2997535"
  },
  {
    "url": "assets/js/146.7a2b5871.js",
    "revision": "4265cd260bc5f86b3a3ec0cbce502d31"
  },
  {
    "url": "assets/js/147.848d0645.js",
    "revision": "6b9460282b8b8e6ade377446393b58af"
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
    "url": "assets/js/150.6dd2bae4.js",
    "revision": "a9f6c37b88ab7f4d423c94997460bea2"
  },
  {
    "url": "assets/js/151.0844e9c8.js",
    "revision": "7d25f4ea72ffd3ae5dbd7a87b365734b"
  },
  {
    "url": "assets/js/152.2a5c12ed.js",
    "revision": "642d5337a45d8409357065531b7de344"
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
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.986aaa62.js",
    "revision": "90eda00eaf67553b4da584e056fa9302"
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
    "url": "assets/js/159.0a4c8f6f.js",
    "revision": "898d2532c21397c880de96ded3253ac9"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.193af005.js",
    "revision": "f3a7fcd17544574a426cd7fef600fd61"
  },
  {
    "url": "assets/js/161.744e65da.js",
    "revision": "2b1744ec515f49cd699d571f0edb7607"
  },
  {
    "url": "assets/js/162.7fba5cc2.js",
    "revision": "2bf5e68d7fee2cb6a2101911c5cb4cd3"
  },
  {
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
  },
  {
    "url": "assets/js/164.b6f6fa5e.js",
    "revision": "e785622de343d93196ad3c701d960e52"
  },
  {
    "url": "assets/js/165.8e0f13ba.js",
    "revision": "e55db322534b09260963ec52ceec91eb"
  },
  {
    "url": "assets/js/166.39eaa60d.js",
    "revision": "2eca552a98e784baa8f5a0722e40abcb"
  },
  {
    "url": "assets/js/167.fb27e17e.js",
    "revision": "9fe533dc61cee429c9a0a0e2fadbacc7"
  },
  {
    "url": "assets/js/168.9d8dbe5d.js",
    "revision": "1567c67c888f30dc7dd99e8e6353b053"
  },
  {
    "url": "assets/js/169.b4c41fa6.js",
    "revision": "588f68e58fe1a46ab8017700c25c1d10"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.1ce2f288.js",
    "revision": "8288419db7f5e2c6b74fadfa1ddaa6f3"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.91cf57b7.js",
    "revision": "dd822f9853345800def1d553c57e9a48"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.d3625829.js",
    "revision": "05dc5db3fe855ae0ef97cc5f5c5a01ec"
  },
  {
    "url": "assets/js/175.718f1356.js",
    "revision": "db8df8d06c3b647220404f7e9a5654f5"
  },
  {
    "url": "assets/js/176.b37a4e5c.js",
    "revision": "ed52cfcdfbeb70f41dff20b8acf59ae9"
  },
  {
    "url": "assets/js/177.6b1dffe7.js",
    "revision": "d3c5867d8b821a77c76e6b0a63044f74"
  },
  {
    "url": "assets/js/178.72980b1a.js",
    "revision": "2e27d432931c212853f11f00e5cf476d"
  },
  {
    "url": "assets/js/179.02e20446.js",
    "revision": "a7114d2bd3bc460b54896c91e26a56a1"
  },
  {
    "url": "assets/js/18.5ad02d5a.js",
    "revision": "74319d6300af978088d1d71cb3d7a230"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.95fca8c9.js",
    "revision": "d96e977757612aee9dffbc26739cdc51"
  },
  {
    "url": "assets/js/182.c3aaffef.js",
    "revision": "7f05176b0e985a7f7ebe2384d103e685"
  },
  {
    "url": "assets/js/183.b451bd88.js",
    "revision": "e72f124e2638ccdc8da5869084a03cb6"
  },
  {
    "url": "assets/js/184.35bd3cca.js",
    "revision": "1c948c843d7b5f388d66c9e060cf3c7f"
  },
  {
    "url": "assets/js/185.04c25822.js",
    "revision": "c1e5955712d638362392cca561ef5214"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.5bee7456.js",
    "revision": "573bfb0fc4d3c004a914b1b5e55ad8ee"
  },
  {
    "url": "assets/js/188.43388f25.js",
    "revision": "1e9b9f57fa7dae9967129c3e36d8c41d"
  },
  {
    "url": "assets/js/189.7bc3025c.js",
    "revision": "52853d24a7caad8f1f1f8c75af7cd045"
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
    "url": "assets/js/191.3343a421.js",
    "revision": "f20334f1664a188ca4481835484c7692"
  },
  {
    "url": "assets/js/192.f033844b.js",
    "revision": "f3b019288ed54488782ddcff5b1508a1"
  },
  {
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.add18a3a.js",
    "revision": "e2059654bfb5cc931c493b1399639522"
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
    "url": "assets/js/197.5f7814ec.js",
    "revision": "3b7268c9ea556a10de9ee206b0b3deeb"
  },
  {
    "url": "assets/js/198.ce3c4fd4.js",
    "revision": "4828072703f4c71c5ad98815d9e4f586"
  },
  {
    "url": "assets/js/199.f23aabbe.js",
    "revision": "e91fb8208561429fe5be04a1cde3b522"
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
    "url": "assets/js/200.2c8d218a.js",
    "revision": "c1d555c4e8623b4d90b9e9a3048aa9d8"
  },
  {
    "url": "assets/js/201.3d8e2334.js",
    "revision": "3bbe479f3ba1c6447d1abe9d8b972e09"
  },
  {
    "url": "assets/js/202.7f446319.js",
    "revision": "6b51a7b3b1de6a8658c4e7f93ff0220c"
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
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.6e42a2de.js",
    "revision": "2ccd80c16825ba77ca8538af00312115"
  },
  {
    "url": "assets/js/207.9460b659.js",
    "revision": "fd2ad82f22aef69990f0bacca76f1c5b"
  },
  {
    "url": "assets/js/208.5ec1d710.js",
    "revision": "15fd9031df70937ecc63ff7629d7324b"
  },
  {
    "url": "assets/js/209.f8ed33a5.js",
    "revision": "1e269965c7761e97747857ed4f894b4d"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.30389e22.js",
    "revision": "d30f164fd538a3f6636800af4452b789"
  },
  {
    "url": "assets/js/211.b512124f.js",
    "revision": "59129b0b5057b9109b7b968cd59fd9ad"
  },
  {
    "url": "assets/js/212.cb4a4076.js",
    "revision": "ecde7b02f636420d1d961f2eecfcf198"
  },
  {
    "url": "assets/js/213.407d64eb.js",
    "revision": "bcb09d756609ae8dfbea6545b4a524c0"
  },
  {
    "url": "assets/js/214.56e4de65.js",
    "revision": "70c1267b20d14953c3564a95e8f1bf69"
  },
  {
    "url": "assets/js/215.c59a0b1a.js",
    "revision": "492e327e3d17020e2bca076cdfdceb51"
  },
  {
    "url": "assets/js/216.df14ef6b.js",
    "revision": "6a9f911d2968ea44dc2c239ebccc5098"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.d56727d7.js",
    "revision": "8f041c609c72c28ccd95ec7a37199058"
  },
  {
    "url": "assets/js/219.2c5aa42c.js",
    "revision": "f1169f6cd6534dab61d05b304b60acae"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.9abec3c1.js",
    "revision": "152b69a121bfd0b0f6d03e6383512f36"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.811a0022.js",
    "revision": "619570da2a4aae21ef1b91d4bd8deed3"
  },
  {
    "url": "assets/js/223.0066b62d.js",
    "revision": "7911d7928e56407e88b6530a69726996"
  },
  {
    "url": "assets/js/224.6d59ee8f.js",
    "revision": "c1af713e15462cddfb56cc6fbac57422"
  },
  {
    "url": "assets/js/225.601f8e50.js",
    "revision": "5b87f0a5f1683af69bba7faac9fcf6bb"
  },
  {
    "url": "assets/js/226.d8ccae80.js",
    "revision": "9b3ffda41d91b28ecada32ade06395a6"
  },
  {
    "url": "assets/js/227.a321d001.js",
    "revision": "0551da5fe671b2bb176d9b2063218466"
  },
  {
    "url": "assets/js/228.d1b7cac2.js",
    "revision": "c9b668a063c84c89915085982ac049cd"
  },
  {
    "url": "assets/js/229.a4ed9cfd.js",
    "revision": "b12fae463adbf2f4538696ae0585cd77"
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
    "url": "assets/js/231.71345118.js",
    "revision": "2c46315fa073967aef60d8d032fe5e72"
  },
  {
    "url": "assets/js/232.f83edd0d.js",
    "revision": "8bf083427362dcf4e56cdf8322ef5391"
  },
  {
    "url": "assets/js/233.2b0f603a.js",
    "revision": "0605ed920c7424d8747a556426b6bd62"
  },
  {
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.a54658e5.js",
    "revision": "b37ca57614214d0d69365539d38c0d70"
  },
  {
    "url": "assets/js/236.4cce87e9.js",
    "revision": "386b56c6d050e3c48c0eb2afbed821b9"
  },
  {
    "url": "assets/js/237.f5e19acf.js",
    "revision": "dc665cc00f64b1c2e3b4dcc5edd8b2c6"
  },
  {
    "url": "assets/js/238.3ddc13ed.js",
    "revision": "6313fcbf1d46b96211d096a52bfde00f"
  },
  {
    "url": "assets/js/239.2e41b8c3.js",
    "revision": "587bfc54c09fa7cd30954e70c4d31f12"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.543497da.js",
    "revision": "02d849f571fadeec60b45fc35273cf86"
  },
  {
    "url": "assets/js/241.99a1a8a1.js",
    "revision": "686e391e0d994b57377f2bdd6ac8c76f"
  },
  {
    "url": "assets/js/242.e074b6cf.js",
    "revision": "04ddeed19428b88c9ae08b77c594f9cd"
  },
  {
    "url": "assets/js/243.241718c7.js",
    "revision": "04fe4761b5e9c029b7cb12c198953372"
  },
  {
    "url": "assets/js/244.33a916b4.js",
    "revision": "f3a8f5a2a3abfdc25b976ec5bf5084f5"
  },
  {
    "url": "assets/js/245.229e4045.js",
    "revision": "a36b119654592f9f3a07603f9b767bd5"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.b5d183b1.js",
    "revision": "0c50a1637baed8c710c5430431e4c4e0"
  },
  {
    "url": "assets/js/248.40039e63.js",
    "revision": "c03636b4ac3b45af145ef98a81aad40e"
  },
  {
    "url": "assets/js/249.43228c49.js",
    "revision": "2410ce6b04d30f1bb5ef24c99489c090"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.e76e7f80.js",
    "revision": "2462f50161651b75fd1f6bedddf520b7"
  },
  {
    "url": "assets/js/251.a37d5c46.js",
    "revision": "1178bb78c53701634cb03fc5956a3396"
  },
  {
    "url": "assets/js/252.36842f47.js",
    "revision": "d2ab6fb22a090ba8e60cc6153efa449a"
  },
  {
    "url": "assets/js/253.f48ae3d4.js",
    "revision": "0e3c9bb2ef8ea128c4814eab0496eac7"
  },
  {
    "url": "assets/js/254.0bca1c96.js",
    "revision": "d72f2aaa3d15678efcf29bca57e47449"
  },
  {
    "url": "assets/js/255.97b81bbd.js",
    "revision": "d4c513446cb0eb2e4d7c9dcfd0c70c16"
  },
  {
    "url": "assets/js/256.0ab11890.js",
    "revision": "e1c00c96432c1c01fef491ecb086a91b"
  },
  {
    "url": "assets/js/257.d1cef654.js",
    "revision": "a1eb2539080fd21ed57b6e0b3e65da5b"
  },
  {
    "url": "assets/js/258.9f52a755.js",
    "revision": "1a934b511f20f9baa9821ad37ab6290f"
  },
  {
    "url": "assets/js/259.c20b319e.js",
    "revision": "a50ce5701ecbd81f02627cdabba0d778"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.156c1370.js",
    "revision": "80f9423154b0ff1437a774e49bc32333"
  },
  {
    "url": "assets/js/261.7f624bb1.js",
    "revision": "3d1c7a5a86556b8441db0402f3e0fb3d"
  },
  {
    "url": "assets/js/262.06d8b4ae.js",
    "revision": "37333a795af1223e984739624d0517de"
  },
  {
    "url": "assets/js/263.09d88500.js",
    "revision": "eeaec36f857f2fa4d97b5935950b1a89"
  },
  {
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.61f0bc6e.js",
    "revision": "2bf8719ad854ab8c9ecf83688e67193a"
  },
  {
    "url": "assets/js/266.0dfebe55.js",
    "revision": "329354f03938e2a0aed659bd91131901"
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
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.b96cc168.js",
    "revision": "de9b84b94a78a2b1154035d1ab406796"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.dc01c622.js",
    "revision": "f026e37a334bc7556901a8f80a15451c"
  },
  {
    "url": "assets/js/273.3f13aab5.js",
    "revision": "214708b33a60eceeaeed2829f39e402f"
  },
  {
    "url": "assets/js/274.e48f1614.js",
    "revision": "f71e6e48d0f496344521af481a5baa3b"
  },
  {
    "url": "assets/js/275.151d1d19.js",
    "revision": "9d1774096d88c292ef2595f03822c01a"
  },
  {
    "url": "assets/js/276.c6e70ddf.js",
    "revision": "3f950398bfd73b6a108c7c358f8e5fce"
  },
  {
    "url": "assets/js/277.98b8b2ec.js",
    "revision": "5b65b3eb7a4fd51f58cf25a9951c5829"
  },
  {
    "url": "assets/js/278.45c3ba43.js",
    "revision": "6471b95f34c6d1b11a185596e2c96467"
  },
  {
    "url": "assets/js/279.f6c3e46b.js",
    "revision": "975f986c491d66c367546b3d4b3827b1"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.2c2b840f.js",
    "revision": "2532f3fee220c75cbfe1f0c5ecf1c315"
  },
  {
    "url": "assets/js/281.8a22dc1e.js",
    "revision": "5f83ca9e3b10eb269d0e2d753e1e2ab5"
  },
  {
    "url": "assets/js/282.47abddbd.js",
    "revision": "99d5ac8c13c6ab3c40e74357e98c7538"
  },
  {
    "url": "assets/js/283.22e6d0df.js",
    "revision": "088781619f867d271aef72cb4092d5bc"
  },
  {
    "url": "assets/js/284.4d2f8a72.js",
    "revision": "58c0d9959b958d8819097ae404d1c6e1"
  },
  {
    "url": "assets/js/285.f7ed5fc9.js",
    "revision": "e994ba5e6203fb17579e493615e2d64c"
  },
  {
    "url": "assets/js/286.be651dea.js",
    "revision": "893b1029a9ffb80b7664dd01851a1f28"
  },
  {
    "url": "assets/js/287.31c55865.js",
    "revision": "732b50b70bc797c78d841e78408e8c94"
  },
  {
    "url": "assets/js/288.3235c247.js",
    "revision": "a57feebf588b07149ef5cb428dbee83c"
  },
  {
    "url": "assets/js/289.ba973681.js",
    "revision": "5d05db1b154f7fa33e10ae1b39e616a3"
  },
  {
    "url": "assets/js/29.786e850a.js",
    "revision": "e4a05eab3a08dbe4e84fc89587145c4c"
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
    "url": "assets/js/292.a9fd1512.js",
    "revision": "06d9b32ee439f5f5a9fc02276241736d"
  },
  {
    "url": "assets/js/293.c1bf85a5.js",
    "revision": "bf950f2d3ca0fe0b41bd6e88c122dee3"
  },
  {
    "url": "assets/js/294.29802d29.js",
    "revision": "bb6bd29d36b425f1c8a4e89d078bd64c"
  },
  {
    "url": "assets/js/295.54db778d.js",
    "revision": "0db7319e5fbde5f6eb9e215c814e943d"
  },
  {
    "url": "assets/js/296.ec6438f3.js",
    "revision": "90c46e15609cb1a5ea7aac38b9aa5bce"
  },
  {
    "url": "assets/js/297.d3500f9f.js",
    "revision": "2cc198cc912c9acdfeb076ec403a58e3"
  },
  {
    "url": "assets/js/298.381cac4b.js",
    "revision": "b90d36eef100df77941d26512bc35181"
  },
  {
    "url": "assets/js/299.28518a72.js",
    "revision": "29c12c51a9e4875c7d108bba8a5eedb3"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.dd276ea5.js",
    "revision": "77a506ee1ff5c2e0ede539b6d85b7531"
  },
  {
    "url": "assets/js/300.61ffa323.js",
    "revision": "cae7b38f32ecd5017ebf6a99a02ce13e"
  },
  {
    "url": "assets/js/301.07982c55.js",
    "revision": "0f7b7e6157ecafdbe0375a75f4c549a9"
  },
  {
    "url": "assets/js/302.eb6206f6.js",
    "revision": "37d4fbdcbcd1544d60f21a8c37cc8b93"
  },
  {
    "url": "assets/js/303.8f1d947c.js",
    "revision": "ccf48a9eb277c4a2b69ac8096855e062"
  },
  {
    "url": "assets/js/304.6ccd1b83.js",
    "revision": "5816d5cc4193e185138c6f5afdcd991a"
  },
  {
    "url": "assets/js/305.929640ba.js",
    "revision": "4c26bb0e81caebd5d09464a06bca5127"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.fc093614.js",
    "revision": "e5da6c9a7f49bd0afb217715c3f4f237"
  },
  {
    "url": "assets/js/308.e4b2c8aa.js",
    "revision": "5a48398be6050e03ded0c7c6071a9659"
  },
  {
    "url": "assets/js/309.0f95e2e1.js",
    "revision": "ea69a379c2734c6a5571fabc38b84b47"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.7cd287d8.js",
    "revision": "5d3ee3dd68193b6c4b3e0cc273d8aa9c"
  },
  {
    "url": "assets/js/311.fe828c63.js",
    "revision": "b79c0bb03e814ce115c54de287639b5d"
  },
  {
    "url": "assets/js/312.1df1d2bd.js",
    "revision": "6bf71e751b264d40df8e5570070a34eb"
  },
  {
    "url": "assets/js/313.46b7bbb6.js",
    "revision": "3dd5a2fb2d7d62ed5b43c2608393bf2a"
  },
  {
    "url": "assets/js/314.692020f6.js",
    "revision": "c98cf41146b2eb07d215ddf1c6017d19"
  },
  {
    "url": "assets/js/315.f3e4f17a.js",
    "revision": "cf412d17e9bacd63cb980993deedc622"
  },
  {
    "url": "assets/js/316.0fb2ccd5.js",
    "revision": "477fb10ec08e88c2f49b12762b38468b"
  },
  {
    "url": "assets/js/317.25a2d9ae.js",
    "revision": "0f4585a24764a9e21a0c419b9aae6ad5"
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
    "url": "assets/js/32.3bc0afc9.js",
    "revision": "0ada78831aa9d5aeaa57bce6703bea08"
  },
  {
    "url": "assets/js/320.beca9566.js",
    "revision": "8416226871ba0078ff1de7ff18f9667e"
  },
  {
    "url": "assets/js/321.95f37609.js",
    "revision": "e1d74fcaf244d0205ac7f498d00c256b"
  },
  {
    "url": "assets/js/322.b8152af3.js",
    "revision": "923bbbd22f057aa3bb26458444726957"
  },
  {
    "url": "assets/js/323.eb47bc63.js",
    "revision": "abf262798275457ef7d603fb88976ed0"
  },
  {
    "url": "assets/js/324.fd5c5238.js",
    "revision": "ba5016561cdaf23a05cb7c7b88de3fb8"
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
    "url": "assets/js/331.80e6c54c.js",
    "revision": "e79a3125731fb7fb39facb0e38e997ff"
  },
  {
    "url": "assets/js/332.255609ad.js",
    "revision": "6827e8eda47a86613fb0cfd6ccc34e26"
  },
  {
    "url": "assets/js/333.32e23ff3.js",
    "revision": "0dc35e31ddd9c1af9566b7a7c76029d5"
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
    "url": "assets/js/337.ef8a33f5.js",
    "revision": "c37117cbb43764f96726c202b8c7c3fd"
  },
  {
    "url": "assets/js/338.d7060fc6.js",
    "revision": "fcd5ad7b13926f3f63e40bbc59e4f826"
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
    "url": "assets/js/340.e5c3cea7.js",
    "revision": "9aab280f2e68224500698aa6db93effb"
  },
  {
    "url": "assets/js/341.59f14889.js",
    "revision": "01df10b0668fb1f5a142d5985c8cf088"
  },
  {
    "url": "assets/js/342.8d962ddb.js",
    "revision": "da1059b88bc068653a12c892df3efe97"
  },
  {
    "url": "assets/js/343.b07421a7.js",
    "revision": "836c3776c2983c90b2836e5e5f168c1b"
  },
  {
    "url": "assets/js/344.6d9f505a.js",
    "revision": "60595e1e8c0abd34df47aae9d889d840"
  },
  {
    "url": "assets/js/345.9164c5e7.js",
    "revision": "9c79b6736230e9cf541738e88b444726"
  },
  {
    "url": "assets/js/346.76324f72.js",
    "revision": "7ff32f0921f98b59ad41fb845d90faa3"
  },
  {
    "url": "assets/js/347.dc229385.js",
    "revision": "1122f7c8723f47e919e6be984468ef3c"
  },
  {
    "url": "assets/js/348.46b9251b.js",
    "revision": "6947054d913032afb424f1d998d0ce70"
  },
  {
    "url": "assets/js/349.a830a7b1.js",
    "revision": "440d97ed59e34b9f221e924b6e88caa2"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.c79d474b.js",
    "revision": "b57c142b89744957e5091deb43b8adb4"
  },
  {
    "url": "assets/js/351.b14746f6.js",
    "revision": "07f0439cba8b9074f548cae85e280e9c"
  },
  {
    "url": "assets/js/352.e3d54661.js",
    "revision": "7d05182014bcd7033b6e4edfa1516f9b"
  },
  {
    "url": "assets/js/353.791ef73b.js",
    "revision": "4220a1e6e9afe0c61ced022386a15453"
  },
  {
    "url": "assets/js/354.1c50de7f.js",
    "revision": "153d847775aa2dffd3cede5cb86b280a"
  },
  {
    "url": "assets/js/355.c34a26c6.js",
    "revision": "dbeecf9241a2fe6862a5ee3c2b71cba5"
  },
  {
    "url": "assets/js/356.899afacd.js",
    "revision": "b9768d9f2d39d1b83b9ed156e8b92ebb"
  },
  {
    "url": "assets/js/357.c83b1482.js",
    "revision": "a9bfcd96070bbc1d1a9c6426fcc9063a"
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
    "url": "assets/js/36.57bf307d.js",
    "revision": "7add8c725537ba3320c3f75c201d5311"
  },
  {
    "url": "assets/js/360.0e13ac9c.js",
    "revision": "bcc6ea9005cd8cabefc4ae4169c69184"
  },
  {
    "url": "assets/js/361.00c63af5.js",
    "revision": "4caa113759ff19e2ea4c8ab8c4ef7e53"
  },
  {
    "url": "assets/js/362.581471a3.js",
    "revision": "5de8e5f0610b02a80d0dcd11ced26cfa"
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
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.64648f19.js",
    "revision": "e198677b4ab8b77ca1d0787135b814ff"
  },
  {
    "url": "assets/js/367.c596021e.js",
    "revision": "1bc1f279fd7339286959591fd6ba74a8"
  },
  {
    "url": "assets/js/368.5ad4a6b6.js",
    "revision": "de6794126799e6eecc08a31cbab8f977"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.968be261.js",
    "revision": "93d0cfa36dfb9e3a2b037bfa334612b5"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.c4e3ebdf.js",
    "revision": "b8d51afc56876f29fc4c0a6329f9d766"
  },
  {
    "url": "assets/js/372.3e1172f3.js",
    "revision": "48eef3c61fe91ac6d1b776443884d49e"
  },
  {
    "url": "assets/js/373.90fae4cc.js",
    "revision": "b83df56f6ed5221c0bcd9fec7b438dbc"
  },
  {
    "url": "assets/js/374.2cd12ce9.js",
    "revision": "c4a4345025a3b2e03b67d2d1ee12f3a6"
  },
  {
    "url": "assets/js/375.5a8f90e2.js",
    "revision": "460262ac8577f65373ff11afe92e45ee"
  },
  {
    "url": "assets/js/376.fe40d3ca.js",
    "revision": "a4a8d279e1a9de26ef353a11653dcb8e"
  },
  {
    "url": "assets/js/377.8874458c.js",
    "revision": "5df65e6edaabb2bcbc9cc2e96bfede37"
  },
  {
    "url": "assets/js/378.79ee8a73.js",
    "revision": "fd8c5fc843e6dfee697776d98b16a1ad"
  },
  {
    "url": "assets/js/379.bc4d2bd0.js",
    "revision": "3683373d0a3c6e52fcb88c04823970a9"
  },
  {
    "url": "assets/js/38.b3248d12.js",
    "revision": "d9431e029846f26a0abd43c80bf7213f"
  },
  {
    "url": "assets/js/380.0657f3a2.js",
    "revision": "f6b117ea4838adb81208f8ab2ce58e28"
  },
  {
    "url": "assets/js/381.205b30ce.js",
    "revision": "3a604901e3c9aa307f466edb6b70a61d"
  },
  {
    "url": "assets/js/382.d62b5d61.js",
    "revision": "01c4220296bf1a347512a257400b4cfd"
  },
  {
    "url": "assets/js/383.dbd58101.js",
    "revision": "bd0f228695b76888eb25e2efdddd98e4"
  },
  {
    "url": "assets/js/384.246bbc49.js",
    "revision": "6c08e8e3f6cefbc7f9f99589c256612b"
  },
  {
    "url": "assets/js/385.b72d0962.js",
    "revision": "807f69fd75565085a1b21691c1aec840"
  },
  {
    "url": "assets/js/386.132dc469.js",
    "revision": "830a9ebfe78f19d9a692f58e3ac78d4b"
  },
  {
    "url": "assets/js/387.ad1347a1.js",
    "revision": "bde0edfa36485abecbf0a475630fbe7c"
  },
  {
    "url": "assets/js/388.e7831b2b.js",
    "revision": "a3d0d9a1ccc74025647b3b9f8470caca"
  },
  {
    "url": "assets/js/389.0d7e9457.js",
    "revision": "7bd01701d9d74c23ba8f3329926198a9"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.392f1d6b.js",
    "revision": "74c7fdf215af315668c837ccd381fdd9"
  },
  {
    "url": "assets/js/391.e8c34c32.js",
    "revision": "a1f448515c6b5526174b2a7f1fb851fb"
  },
  {
    "url": "assets/js/392.9f913153.js",
    "revision": "0dce2b4f723b353cede59c3c330ceed0"
  },
  {
    "url": "assets/js/393.0e48abe6.js",
    "revision": "7cd1076e4d28890c0aa47df962593722"
  },
  {
    "url": "assets/js/394.b7213842.js",
    "revision": "2b7c4ee23334d4449cce3bd62c975660"
  },
  {
    "url": "assets/js/395.60f362df.js",
    "revision": "8b2f20b24d40682f08e33a760a9b613d"
  },
  {
    "url": "assets/js/396.b07d239c.js",
    "revision": "7df191cd14ad87d712cb24214f67f4ac"
  },
  {
    "url": "assets/js/397.bcbce5a6.js",
    "revision": "c6ce8d231f105e57fa4716a9fa7421c5"
  },
  {
    "url": "assets/js/398.9d51362b.js",
    "revision": "00724b3780aadbfe336de85db7686d8e"
  },
  {
    "url": "assets/js/399.d4a219b8.js",
    "revision": "1af4b523f9588d4662d8a753e3cdb1d1"
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
    "url": "assets/js/400.e56c51ae.js",
    "revision": "9808b10ab09f2ba3bbcee93b256a8164"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.25ae7de9.js",
    "revision": "93b40a6fe4916d520cd126fad5a4d71a"
  },
  {
    "url": "assets/js/42.d9bba00f.js",
    "revision": "0e58bad4a4988c87b196224c2b9a3edc"
  },
  {
    "url": "assets/js/43.5ddea8bf.js",
    "revision": "f8398146c6c609dedb192b1ca5265439"
  },
  {
    "url": "assets/js/44.b550d91a.js",
    "revision": "5e5ef8ea0dd4dce388358d86c09e85a0"
  },
  {
    "url": "assets/js/45.cef50a88.js",
    "revision": "191c60c2660f1067b8c25a35e6d8e042"
  },
  {
    "url": "assets/js/46.6afd7980.js",
    "revision": "484ffbded0f372fa5068f20dcf8b627e"
  },
  {
    "url": "assets/js/47.0aee6c62.js",
    "revision": "44747642ec63ee99be4e1421a4e394ac"
  },
  {
    "url": "assets/js/48.b9933de5.js",
    "revision": "2c9fbe3e67b604a4bca18cb2481514fe"
  },
  {
    "url": "assets/js/49.b304ce27.js",
    "revision": "5407d057a7761da36c3a5adbece52ab9"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.8dcb2188.js",
    "revision": "3d6cc4be05276178edcc17640f8a54d0"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.0f85d616.js",
    "revision": "e498ffa4c194db5f9c22181a888befe4"
  },
  {
    "url": "assets/js/53.9fb76d08.js",
    "revision": "7ad11456acd3a3cb7656295c2d6370df"
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
    "url": "assets/js/56.66599fb7.js",
    "revision": "d8b03c3e4b43a95dc0e3dc3104a4aaf3"
  },
  {
    "url": "assets/js/57.7d1a10c1.js",
    "revision": "8d3e924cf2f0ca134a255bc9696b0ab0"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.b29fec37.js",
    "revision": "e49ec7d8cac7d8940bd836f637ddca2a"
  },
  {
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
  },
  {
    "url": "assets/js/61.aff66bd3.js",
    "revision": "358554befe50721d6f490a09fdd2d04b"
  },
  {
    "url": "assets/js/62.a0ebe015.js",
    "revision": "f85bba42ba361f5587dd606b29269bec"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
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
    "url": "assets/js/66.26611af6.js",
    "revision": "5ffd25bf9a8040f6e83694af6cfb7378"
  },
  {
    "url": "assets/js/67.934b0fc5.js",
    "revision": "997740c97e30de1daea54ecb2c9aa145"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
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
    "url": "assets/js/73.19f9e469.js",
    "revision": "14438cdf13b86425bd34d5195063e158"
  },
  {
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
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
    "url": "assets/js/79.d397e910.js",
    "revision": "e470f3f02aeae9343c3169f5feb8adda"
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
    "url": "assets/js/81.025684e4.js",
    "revision": "c2e76b379112d22e493257f52ed07614"
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
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.ee1721fb.js",
    "revision": "fd9fba8752234603b493c0790455a7c5"
  },
  {
    "url": "assets/js/86.2066fd35.js",
    "revision": "5659d9627c8fcb7756ea8ef3201046ac"
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
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
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
    "url": "assets/js/96.0313d3cf.js",
    "revision": "68e4a3c38e43466be1258da78e9b3e35"
  },
  {
    "url": "assets/js/97.71cdf8f7.js",
    "revision": "44379b5e20c3bb7431def5539a8f3679"
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
    "url": "assets/js/app.e32de5e8.js",
    "revision": "e39df3a4f5c64ae5c423c09b767e111b"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "bc3753bff3fc61b9b4df9ae8f03fd038"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "7e781b8d9c6354b0664918845bfe96de"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "45c17ca59cc4d5e287140f2f3d4fb8bc"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "ca8a71e4e4672ba61005dd9ce8825de9"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "84070ce518f00a62087a37326fccc3d0"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "1a2486c2fb50ecfe244f4a8ab3dab715"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "05db62aaf225323ce1d0712057c3e53e"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "d12b20d6826210247fbb65ef5f9a6e6c"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "c7f8bc75864a31b028515e6fbaa3ffc1"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0af56e373a94b31320d8bf78485fa893"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "905f7891662ee3c3328e25d1cbc7b2b2"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "89f486cb65b3df05ef38af34a8a55fb4"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "1dc9922cb8e93df2adf03d1eecd8bf4a"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "2ee58dde00a2e7866317c592f71cb512"
  },
  {
    "url": "master/api/index.html",
    "revision": "7b01c5098f3b114866a9df4c5a4ff62d"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "8c8221c37117a64b37043687f30f9297"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "25b9d678bfc61a12a43650d227cd7e61"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "693f9f161edfa5e4f8c1719be5a2b0af"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "104f58eb3240f4cfc66882cc849dc2d8"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "f3b785e96d16f17839c1e8c671f6c978"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "4004ba7bac79c54bcb1afbf0fe1fe0c5"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "18c071123a43021bf11376877ecb2f75"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "17aef4bb9dfc69dce1586131c876276a"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "74c61f3ea8a9cf332a31f581a4622f78"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "29a32c940ab36be77a6fda1926e5e816"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "73d285d638269f95619b5424eae985c6"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "fa68ea61889de83e7b7704fb1da55347"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "710565bc908474dac392edfb82ccb4a2"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "8f3d1b6ea9779f856f59f092d74ea56e"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "7951aa5ec160dfbe3407a056e6a0abb0"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "44d8031128511ffe6c97d631d4698649"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "73590b5e2fd3de07836e6eabdd6b894b"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "c261d06aeb7da57c3324c3fd54226d1d"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "69f9dde8177dd78c4accae6abd241e5a"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "199f5ff8cd2eae4a8ae20c11b8bb15cc"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "83deedc5f415a7efbffea454bd335801"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "13754028ce836c1381be40d9b0bbaae1"
  },
  {
    "url": "master/packages/index.html",
    "revision": "8178011606b781bb0b1778f3465daf68"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3a28785d9d135a3342ea20a82556a9ba"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "87316cdbdbad904f0e5cf3b382c7fac5"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "918a7c4c320c10d12cf04863597e6e78"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "38e6d608036aa762856d5945a35944fb"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "96804274b80a59030d91c6ff17fd3d81"
  },
  {
    "url": "master/packages/views.html",
    "revision": "eb4b6ea2e3950b485c4310ad44b3dcf9"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "1488101ffd1f06c00b282c37ee1685da"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "7a8cf8aa09fead35fea79692a05a4ed0"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "726c3ad3cbf5e8d22d694d48fed22cbe"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "59b0858e83b0dba88ff48d00e9fcaea4"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "d3e5a180fa5645fb0608267845e0d0d2"
  },
  {
    "url": "master/themes/index.html",
    "revision": "27a115d10f70399431b9ce46c8b545f8"
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
