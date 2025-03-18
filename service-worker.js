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
    "revision": "b39ffe64fd3b687ef7a2cd7a788f9f43"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ec632c1ccf6dcb0f7c3ada1d1b6a92f7"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c7e47692b4e05cbdcac07569bdba300c"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "c7068400c9bc0751584b96311d2fa07f"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "840e64004df6868b4922d1a475a8fc0c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "48f4b8dc4c69ff79367c0f0093b1c13a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "2a8b351c51b3c3186c0826d21925347a"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c5c3ea1cc430f42e1827b9dcc583d2e4"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "32a768de04d9494172899c468848398a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "c0ed65be7229edb57e6408a2058f3e6a"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "aa350590d73d24c67a484fbb0a9ff116"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b26f480d081a29d79069fc12e2231186"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "19b5857130c1a7e283f129d7464280bb"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "c012e586690845b6338a33a5e16c4814"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "67838a3f1cc7c86c388544fbe944230d"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "05759e4853e8798ad9d22ededee5f0ff"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "1f41aa5fc300d7ebc5c5909c0914d942"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "815ac0dd8363423333b323e059b1f903"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "f105ffdcf6bce36501f8149ef70d4e2e"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "60302256c88fcb1645218e473c4ae707"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "576b40279a2ff1b6c5133b83d333582e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "ac50a082bbaea474fa80541a25f3ce2c"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "49dc44e958769918b523695976917632"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "85c34af4493220e856692e0376e529f6"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "40b633d42783fb7430ed3e2bfe98add8"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "cf31a76f27d8ff44b248330ec3233ffc"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "fb1a3685f4858c791418b31c1ab4d754"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "087e7bb1c02d3cdb3079159ed252c360"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "f51ff21fe12dd74d03dc5cc0fe595c78"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "0fe61c8eb7bc542d37c68c04746e0d4e"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ab35a10b462c04d4967703645ef3357e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "d973940796273d6e49d022259bf5c23e"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "77206de6812c8dd00366e0c23066e107"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "882f390acb3f71c1b39e8d45561af939"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "331e0ccfa8c69abd596b3ef0388bae13"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "188b5492395c3b8092430834fa0583ff"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "1191c753227babb06b8703a61f371cd1"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "0097997057a796b0376f4ae8322f3ed0"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "c3ad59ac5dd0e22261a2defb152d5a2e"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "7bc90c6a3051fbc03d8c1e275f59b700"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "fa1c23bf9e5451f49556929f6489bc95"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2f4e98a87c36b4e4800c3bc5d119f7ba"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "73a88a3e4bb7d100f12aef41dc86bedc"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "a4c84b3f957ea76636e533949dc4605f"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "1ff1a9b0239c6428baea5b2df137b056"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "60f91966000b224ea5f4566be9729537"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "bdcdbf49cb64e003fbe9c0edc6028e58"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "303aaf5e67e3697466819f67051701bb"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "309685c1398d97e2dcd9fcc6255f1938"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ea07031e3e130b597dd0b07987b6c60f"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "097ac6679f352876499fa58b5fd9a36f"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ed24d589a494c74dde9ed7c9a9922797"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3c3b34f91b258bcaaa118d4200a75a2a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "59ec9508c627dd41e19835c2c185ca2b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b9147c06dfd902f3613e779e9f31f089"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "5b3941e43bbe5f82526e1065c1298fce"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e170f340a6415ad485726f5a0d37f84d"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "200ddc808e7e5340bc23a1f6df856d0a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "08a67060c47f4c3bb9bf0593e9263214"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "beaa86240669b7963d73f76a3f81c239"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "6cc0b07eac3375b43fb3017955442ca4"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e6003bc2e18210f788d95c7cb545c191"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "adef2c753a506a801dfad8d5232fe187"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "222682863fc25297ceb4a5b2e7575d59"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3ee18f53c224e14ab666d78b52afe26d"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "dd45ff1625f1c4dc2cd12b8d524427de"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "a5ef9cc552b0ee16993ecd155fe05f59"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8a497465f64f05831e0cda56e5c622b1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "4cd275de2f18b7073a91d866f421135e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "b1dc5d332633366541110b3843ddcea5"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f35bcf68f1dd75c5ce17559e7eea17d6"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c017e0a56f3f33574d5d41be35d75925"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "b6221231af60365c5736f1fe9668ea5d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9c1f1407b2a407bdec43f8d8316d5b8e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "55554599af4b13459da4c90127ef6d03"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "23c6f4889fc6bb761f4047ef242ce456"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2f380d13b820b1273efb313a823d1cd5"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "894d8ac51378539ae43b8446a2b9cf4c"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4cf9970418c218a63ffefd66b602fd4d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "53cba075f562e00a973e23179ac146b7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "2b2e4edb6886490a81178a2351f772e0"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "077c8e6b600dabb7e8ebcd4b0667bae2"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "3d20968c32f26a2aed844f02f2743c03"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "6ebfbbb0e53ce330437d2cd2e854cdf8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "402f44aa32d44a77caf576cbe42eae79"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "574c3d2477e7b5f24ba4a6ba96757795"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a9815206a08bbcd434b99ee7d780be12"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "d4b120b89d1c81c2b32db8aef5327c94"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "7c471e2874d3f6aeb366c52289334b47"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "cebcf2e08c05c836759b54188aa40c67"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "999bf0f33459154f1ece0bb806210559"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "72763951273fad886063ecef4a69c2d2"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "5b9a4e9a97e9a8904287e40d90fb8746"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "bd028db47219d69047f2e5ed4f68e5df"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a18b273ddd766838b77b6d4b5e4051f6"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4f771ce3ab14333e0644b2e458d1e00d"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "dffd04fa3d5310a55f9af854f232d90b"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "24e3a3dbc3b9aaeae316d6342f4f92e0"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "7e88ecfec7ae934b2831f84db90cd1b6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5c0fd6a6e9e26183292f96b477ed4e16"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "29b8d887055093589aab3f6a804329c9"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "77c3f4fb8de4b5657074f2761b357966"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "9214f3fa9b5c1b1f93434bac445ab4a5"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "1cc33b7d109504f6cc7bb32d3862a016"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b0055b87fee93ab4913550efe87e5b23"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "995eb33b9f29cf2a1bd3c30b7555822d"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "872e7708e3e4b511ead6c8f64fde2ace"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "22e1d9e757751254474161c2a9ba89b0"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5ed56fe8b2e55bed1de4eaa8afe6e04a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "afc6a7971adeafe504fd1aebaa4ceb5f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "9775985d243879b0c5809313cae4fa04"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "83fe637dbc5a247907dcbdf91d602ac3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7f273ad99f233f483e69fa19ed00e882"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "31f876b64f3add1f35abefe5ff8eb059"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ae24cd547ec95d813faf1b90f849de8f"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "3dddcb44609704835bf40f63fc59b528"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "6ef90908673cf9a76c85d542c11afacc"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0d9d77f662c7a3dc7496042e230fd29c"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "4f705a96b39d4cae37320b16d1fd5b5e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "432e91d88a179f86066a6a1c7c1145a5"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "8bda4d15b490a1fddb551696c4301750"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "48b38178f499c8ebd29ba91ea78f9cc1"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "40471bf32ede540670f33c615755b148"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "cad6ffee6056e8f1f8b453201fce5a32"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "873beb05760b06401f33cf2e292c24a3"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "b9eff0037dfa49dfb67975e1f877ad68"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a41e126d296509da97469fe18a3046f0"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "3ded68e607a062627612e7321fea0add"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "04caaa6947cac08bcd59e53f9848c088"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "b28b2984778b56589fb9a22d37b4e514"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "51d2071f8eed13b6f5378ec43c924b43"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "1884a8b32713f5c0aa12b5eafb045a6f"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "7274dcd6497043e8694b9f03b5153b4d"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "a5780d955c55fc07e35a3cc7e60807af"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "da043d4190e0debd98345939e1bf1ec0"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "48c151031b8512aa154464376f98c986"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "de72da6a144da197cecffa9d6b51aaa1"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "add944bc83001f5d82277160a0174fdb"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "06ebfbd893c9bd07683e57781083c994"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "a1b50403bfcb09e99f0f06b18895bade"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "65fdce7ff48be2e5effaf6cb47a3bfb1"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c1af30ebeaa15a99d0af8d71311929ad"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "44bf2c26ed2b18ac1cd1531d81295ba5"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "4dcd2e95b7e8698e3e24773ab2b6163a"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "1f44572076ce11eb4b88c8bac8364ac6"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "979922d579b3b732c622401bbcc52f77"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "5ce3c2aad30b1ec7a4499b504fa0ae08"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "224b4489bd8266b8da7bd64451291400"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "e84e4246ea9c2ec90d9c9e80041b22ff"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "ccb03cbb5b4e0bc7efe4b4fb0236d86b"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "4e18f5b55120e62abdd6c7550dbd9209"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "4e4344c20d89d9da543f67ebcd01f75d"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "78dcf29d947bcf295201c6f2f6a21caf"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "655a8e57a6a365f3a42a8d6c3b89b0ae"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "f30e10ef8f22c4e3b631019d3d4ac38f"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "8869af07838569977da222669f86c63e"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1e1007d381c3621cc84d3b87e79ea5fd"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "b43e840f8e9177f49269950d1b6958fe"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "f3c09ff07b3d07e89639863da8de5f23"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "dca18202c28c794f043f0998d2734139"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "c22973412de568fd8cd65a30fabdbadd"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "030f0fe554656f5707c60ddc762c30cd"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "3bcf4922bbb016fa087bd36597287c4f"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "2d2c808110eb8d4344ed9d6db87d9cc8"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "e5785de4877eb9fe4753c6dee7bcc951"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "4dc12e1ffc510bc6b0250bf0ade88a6c"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "92a2936b3a12852d814c618eaf52ae3c"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "c6274cb07a1597f655fd6dd05525adfc"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "59c3ff2b42bcdc559c38df3d66208513"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "dce754666310635384ac6724614299ea"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "076a2ca449fca4709fa790fc1e73c24f"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "4f6b5adc2b6b053127950a977987af3c"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "72799a07794b87684cb5ea3f3577c987"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "a59b1704f5a5dd3b87040fe81901f986"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "0db58559e27586c4ad56553420dfb96b"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "a7c391f5d1150896fd282d1df1ea31a0"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "75670f772890e28c40bb221600dae23c"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "86a57a5627737c40f4e6fdaf7301a418"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "a75c9a157371a274939c60a35d90c2b8"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "629a0ec078e600a0cc1403fc769e1a97"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "dad1bcc19371056f01ac23d83e3f445c"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "c202c92b4282dab11a56c8fd4ae27547"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "c344fdfac60a9d9d92348bf1aaf0a47d"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "958fc8f3437afa30fe8d7f1e0f24e6e1"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "4240c3122edc9eb562a97e75d4324e85"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "51bd95814f1a8aabee9e6e34f94e33d7"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "aa8e3399f3e327e8f3adfe08d0b673c6"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "c2e7e4332ba0e798b44e59f6d4ec3798"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "d2aac0f5175a991bcc7f462205f27502"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "1ba10195ca3c6bb210871c982bcaf5e5"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "9677e47bc905b08e1fde0ee6a52f6dd6"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "c3512453c5b81d1f3879cc814f635301"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "62010694a58a0b67691584fa4ca00908"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "b03dcfe6caed24a63e8eeb880e28a1d9"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "1e9829a5980307aca1c2d918fbc91ddb"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "ab4b7abdd661c1727457fb22128d4b52"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8c8b61ac62feaeb270540ad5595d6032"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "85f8b85af0f6d542294413fb9230e365"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "daf6233b88b68cf63d8f069dfd2a848b"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "f6e9a9ab019de6301a737940d362fd96"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "dfde04f261876eb3de082139a190877b"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "982f93338db3169c49c53c02cd83bf7b"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "c180d37c0c72d3d901cdbc9809340adc"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "8aacfb47484d578ebd53d96e6dffc33e"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "98df337053199492ba3a14e4063283c2"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "828c07bf73ecde396e005558068bc721"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "0616dc4199604e261e53eba6a28a8d1f"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "939572f1cec4f455124164596b3c8ae0"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "1b97b1227cf19ed059f778d5f97288b1"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "ce61dac669028ffef55810648b4326b4"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "cd58fd128e8cc9cee2e7d324cd69c7b9"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "ef4a6a652082347d22cdd281931c1bfc"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "8e4d767158291650020290499acd22c7"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "d939e4af7857650ecb49ced2cf804a15"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "bbfee67adc3f74c75339e4f7d7c3da97"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "4a3058a5815bbe0b53558a69e7d85680"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "718e6dfa13a97a58457b5f9c3e7eead6"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "b8da072ab11491e5216f2a6560dbfd5c"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "06d03f389af5aa059e113043aa25eaf5"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "2ad3dbb5116805b4057e3270a1cee3da"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "3542a37959071170fb05bd07343b4096"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "2afe64dade3b70444fb9779c4d849035"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "10ad8db2a99da184a70700763898c362"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "7e16122dfe97dab71b23f94cde51ea87"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "751808062bf64103b6f0e9204eabb83a"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "4559f3906b7fac8f920a92e8659fa236"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "62f1fd1753ad00592277074231220e72"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "e9d1b9631e95136e67d2374eb94b3795"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "e662b6def8bf4fdfaed9deeadc7090df"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "cd439559ed3c1bdc30b07034f5d242d3"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "c46af31fb6f5698e01ce46b372e4f67b"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "518515b5500dae90c59d04b81b56c454"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "fd2d0a39a2bcf2e2038c3614b15cfb88"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "bedae4b893b97e836e9c7b88a0eaf062"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "9a0bd4a709590df085a1772a5477826b"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "59f17e9e8c59e34947dbda73bd0618fa"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "7a8915e64f69a8fd09fb81acebab37b7"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "f1ecb9600d39eacbf2e988739693d8f9"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "b8a3b49e41069b22e1b4c908fa93ae10"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "f1b583f9874a4dc1a22bafeb7371c6f2"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "0e1f0da5f7462ac2cb323a05a33ce0ba"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "02cf1b71862dbb0e7ccb8799f28015bd"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "404cb3ea54db025d08cc97029706cb6d"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7ad04713c150304366b2084e208924f2"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "8a9caf024060cb3e79758b4500cd050c"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "b2649c5c3edf6d286a640ed4d859924c"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "5ce258b845248091221b878bf2a97cbf"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "cad1ee25050e271e98c4bdbb71b30909"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "e8817faca46eb84df0a2053c1d8e3be6"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d20e39fdf9c6e2464ac22840f368124a"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "c76b19b71b0b2dbfeeee85b271b1094d"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "8eab54f55e0025b13317d4caf686ea81"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "f2a961a73a8527dd80fe6d23aa4e0095"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "84b73d3a30b41c9fda6e4f487a42f41e"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "2cfc00b1f37bc07efe08f02ae3907b3d"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "01e7d999ec957cf1c75f37aba20ba4e2"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "fe3e68ab3be34c0589ea0049f59c7ce9"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "16cfe331c56e86ce058101957fd760b1"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "819697cb2270d06e4256d8b6b6e3e535"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "d61ec701b0f4aa776e95c58176aed55c"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "3fd2975c69e5841e1d041bd130d6425d"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "a3ff4349e436cecf241a611202a69a92"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "6f5b9f8dbb91ab1b7f9d587046b2792d"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "05f987fef0f216b9f2ccb30d8aa474ea"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "310c0df148abef3f6f226f85a3932408"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "e245ccc70b4b14ac907b580ccc0ac223"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "2329318cae7f457641f6432fe1a8b5dd"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "82b4dcb2eeab398af98e58d48c1a32b6"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "62a053219a46833d6082f04996451048"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "4679f285ccb9688b3e4aa7bb67814786"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "5175c52b47664852e89b67c7a3eb6088"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "24ce3bd7414eaf1ff27fc0032beffadd"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "5c7a657977d3e2152e6aba49f1a86eff"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "8cdb4c90a9e6a57302d402dfd0157b22"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "fefb77574771cf5ed2cfcb92a51b059c"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "2b6301898418b391345beb0422578823"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "0d44aa73f7a2c573868752c7ad4d4492"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "7d6a6c18a894386677abbd014935227a"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "73e5e3d2667f4f37433e114768b1e75c"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "4d670f8ae6aa9650926271f868207d97"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "741afc1a9a14667d92ee6f336b5b229f"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "37b3b7d82f65b6e2493426e9e28cf491"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "81bfddb5ce4671337d4b8c4adb49576f"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "96c285dfef9ccc04c7e3043cd14c1743"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "fb3811ece69d8fbc23e06068852a0848"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "e3892417d37c48621b553329c753f031"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "ed54fa0d16c38f92eab82f792d735183"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "013750576c4df1d62093479d37379d88"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "2424f4d66f839c24ab3ec758145ee68a"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "472be98082d1f606ac3cee9568207c12"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "15a6fd4d567e54e93b404f828c241769"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "1d68d16658c8fbd09511344d99f47144"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "e87942d7197fef0d880229f7ab35bf6c"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7a148b88863cf6aab4e7052c67595085"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "c9704401dd6d786e240831f293f9b81b"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "28c7d5f70878553fb55c1cfb0b9a16ba"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8882ac83e352d6fb7554a65a96c59ab1"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "9a65a3c4f57804351aeb30b04802e855"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d8de36ae08075cd81d3aea5add0f8978"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "da44b8e7243380c1df1c8afafbafe20d"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "6acb80c591673ef7894adbcc1f7bc5a5"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "74a62e5f3c21a4d71acf3b9d38514e57"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "baa3bc3b1e2559a43dc5dadcf26aa24c"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "d88f13419579afdbcdebdfd879619b4f"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "050fd9ec8c5b0c8e1bae00f51f85a92e"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "42ef2bdfde39bf4ac25be36c803028cd"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ec6aa3351e5242aa1505f03d0829fe82"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "452c67019d40dae8e2af64860c81ab39"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "5c2fb4473de96dfba134213a1a6bb354"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "3a1f1cfb83685c1cf14be2857ffcd5a6"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "905ca6706d09be296c7fa1c7a3521f36"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8f34ef7ab887f9b5bd84fb308dc9fd07"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "daff219d925abf22833fedf19333527f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "cf87af70ae2f75d7a85d4064e0f331f0"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9751bf98cf8f3b476414b1a4cdb9756a"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "de5227dcd855759821f6f3a3c01c8753"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "f73a26e1ec0d24aa728ed75fc748dd8a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "45b68e1d5dfe2dd6a87bc04100401430"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "cd657e95edb2182e254fefec739766ec"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "a37180727f33fc33ca50d87416c53d9e"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "4f51e663206cf2ec3a2584b8c98fc13f"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "95b17cf1f249351bb4ad5be42cdb326e"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "cf138df64fa8adbcf19e1f81a5559efb"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "10333a92b402269c78446c44faa3f46c"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "fa86dd1a0fdb5fea2445add125cde268"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "d2549c84be5ace675423fe1d86a2a468"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "589cc51930d63392500a5fa94b2fdbad"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "55365eab428f9c103135446131992cc3"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "3dff199b02e77b3c3ef655f3b4da7aa9"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "9834f98c4caecf7066fd29422eac78ac"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "bacb0f730d30e90bd78a21181e1f4129"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "36730c5974958158e9a9d82c20f3e5b1"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "482563cc5197125f4e5ed700f96c95a5"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "0179d3ed8d6787a15e9cb936f0aa236b"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "9cbf819b6ff09ce64247206364d06793"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "bd6806053a01ed1cc9c28323386c542e"
  },
  {
    "url": "404.html",
    "revision": "cb15abd5bf059a1bcb6a976af2fad86d"
  },
  {
    "url": "assets/css/0.styles.0d3d3e7d.css",
    "revision": "9e164653950b881a187d429847cb030b"
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
    "url": "assets/img/create-image-ec2.8b5ede7a.png",
    "revision": "8b5ede7a87d660433e1301892da28295"
  },
  {
    "url": "assets/img/create-loadbalancer.1f352060.png",
    "revision": "1f35206006fd0dcf30a50b21582a08ae"
  },
  {
    "url": "assets/img/create-target-group.9b7b3385.png",
    "revision": "9b7b33854370a1b37ca92c0b713ba640"
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
    "url": "assets/img/loadbalancer-port-80.540ede6d.png",
    "revision": "540ede6d9f0353c0a9ce724fbd1494c4"
  },
  {
    "url": "assets/img/loadbalancer-port.9e77b96d.png",
    "revision": "9e77b96d743d9f3c9ce1d39ecb4079a8"
  },
  {
    "url": "assets/img/loadbalancer-result.9c0b7fbd.png",
    "revision": "9c0b7fbdc2ef530fe8ccb450d9051156"
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
    "url": "assets/img/target-group.98f7415d.png",
    "revision": "98f7415d43e154592baea6c7eaffe426"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.9d1d6014.js",
    "revision": "70c9f11f2722a60008448795b90fc6c3"
  },
  {
    "url": "assets/js/10.6a6b8f35.js",
    "revision": "e733a8135cae1b158a806af6d19a8cd6"
  },
  {
    "url": "assets/js/100.e3347408.js",
    "revision": "153abc6aa4a7fd81d407624acd6202a5"
  },
  {
    "url": "assets/js/101.6f7ee0b7.js",
    "revision": "7cdf76813112b372bbc50e0d2ed45108"
  },
  {
    "url": "assets/js/102.36d2050d.js",
    "revision": "0952bf86988e753c5dcc470d1883944f"
  },
  {
    "url": "assets/js/103.440a1a7b.js",
    "revision": "b08a09d8e6fdc51fb8df700b62375119"
  },
  {
    "url": "assets/js/104.7add162a.js",
    "revision": "c9fda56d8854fa56efb85d7214dfb8a9"
  },
  {
    "url": "assets/js/105.73ed06eb.js",
    "revision": "4e0dfc8a303464c841089d166d67bd7d"
  },
  {
    "url": "assets/js/106.5d63a84c.js",
    "revision": "3312c23212db2d559a64e016920c809c"
  },
  {
    "url": "assets/js/107.e3301445.js",
    "revision": "6cc149038405f27254f6526b4c4837d2"
  },
  {
    "url": "assets/js/108.20fff7e7.js",
    "revision": "33ce01a3a2dbab03ab21f7cb64e66f3b"
  },
  {
    "url": "assets/js/109.389f6a04.js",
    "revision": "e4f837a0fba336227b609396de16700b"
  },
  {
    "url": "assets/js/11.bec7ea47.js",
    "revision": "de869bfe547e31a9956a5be16b80d9e5"
  },
  {
    "url": "assets/js/110.c818ca30.js",
    "revision": "ab7bbc06e6b8299e2bd051d906b058dc"
  },
  {
    "url": "assets/js/111.5333766c.js",
    "revision": "02782dd77f4ff9ccd047cbbdd076dbd5"
  },
  {
    "url": "assets/js/112.b1b600b9.js",
    "revision": "a79f1ee0a0fff62ab0a8dd29a54fff33"
  },
  {
    "url": "assets/js/113.d753dfd8.js",
    "revision": "4e049b5453cb79ae263ac307143eca03"
  },
  {
    "url": "assets/js/114.cfe8338b.js",
    "revision": "392ebada95610d810f14960c1576a314"
  },
  {
    "url": "assets/js/115.225be7cc.js",
    "revision": "67e43ee467fce1f4bf67b96f38bbb192"
  },
  {
    "url": "assets/js/116.90b1951b.js",
    "revision": "d0564f72b539f91aec95a64194e55482"
  },
  {
    "url": "assets/js/117.b45ce2b3.js",
    "revision": "bc337a58cbe4d3c01e404b6f3b97c7dc"
  },
  {
    "url": "assets/js/118.613cfbc6.js",
    "revision": "1d5f1fee61078b4fdfd918fcfd3cd538"
  },
  {
    "url": "assets/js/119.9116fff6.js",
    "revision": "db53f70cc495057a4de2039b5e20ce46"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.952459dd.js",
    "revision": "0b53434788521017535692a3bc72bc10"
  },
  {
    "url": "assets/js/121.321effc4.js",
    "revision": "88f97f70e8d29bd30ed1f3ec2a4da5f7"
  },
  {
    "url": "assets/js/122.8efe6431.js",
    "revision": "fb58664b9beb55bf7c48cb6e708695c7"
  },
  {
    "url": "assets/js/123.380b6041.js",
    "revision": "038a7e7d7da3e4a7ca09a450821d28ba"
  },
  {
    "url": "assets/js/124.d4aba2da.js",
    "revision": "ca5965770b4679cc41e4203b7e1d3d55"
  },
  {
    "url": "assets/js/125.8f49469c.js",
    "revision": "42eba43ab35cd14098a2ad599e64592d"
  },
  {
    "url": "assets/js/126.6ecd69ec.js",
    "revision": "7b5b54e60d87e7186df339c840133f15"
  },
  {
    "url": "assets/js/127.c6a3e7d8.js",
    "revision": "392a4d4ab4ff5232aa4e1cf1a0329464"
  },
  {
    "url": "assets/js/128.5eadac43.js",
    "revision": "b313e448362f4a7f6b3be91452c5347d"
  },
  {
    "url": "assets/js/129.51ac3946.js",
    "revision": "4b1376cb3e1d1b91ef8836321f87a02d"
  },
  {
    "url": "assets/js/13.4ea53a21.js",
    "revision": "624ef7e2930cf051769872152b0b4790"
  },
  {
    "url": "assets/js/130.78ef4d51.js",
    "revision": "1bd90ead676ae2ef171fffe34f958333"
  },
  {
    "url": "assets/js/131.c5212169.js",
    "revision": "d9b6b1774bbb9c70a374fee539db1c7b"
  },
  {
    "url": "assets/js/132.eee7e47d.js",
    "revision": "ab758f5a4ce233a48431eae23fe1ab22"
  },
  {
    "url": "assets/js/133.53db3d87.js",
    "revision": "854df85a3eb9c8cf6e9cff931dfabea9"
  },
  {
    "url": "assets/js/134.275b07a1.js",
    "revision": "b749614d9beede263d2b610c35d60e6a"
  },
  {
    "url": "assets/js/135.be8ee34b.js",
    "revision": "bcf9e2560a331de74ad247c1087f766c"
  },
  {
    "url": "assets/js/136.a5c1088b.js",
    "revision": "b5551eee6dc39f8efb710deae6140d80"
  },
  {
    "url": "assets/js/137.3e8d655f.js",
    "revision": "535112646a4913c5782222b91036978f"
  },
  {
    "url": "assets/js/138.e66a1b37.js",
    "revision": "0c9a2e355232a45087d39ecb5b7bd44a"
  },
  {
    "url": "assets/js/139.b7aa35fe.js",
    "revision": "da4a8afe7931ff2de7c8883aea9de577"
  },
  {
    "url": "assets/js/14.8225a7a9.js",
    "revision": "fdd94bc85f24f3e2178d43dcfd3630dd"
  },
  {
    "url": "assets/js/140.8263b111.js",
    "revision": "6a3efe3fbe4f239b3351dbb882dd9260"
  },
  {
    "url": "assets/js/141.08b521cd.js",
    "revision": "465d568037a1ef5f4da4c91ddff356b9"
  },
  {
    "url": "assets/js/142.894f5733.js",
    "revision": "bfd2df9f271a9be0755685284116c7b3"
  },
  {
    "url": "assets/js/143.dbcf9e6e.js",
    "revision": "8b134a367fd5b1305ead140e8e5e71aa"
  },
  {
    "url": "assets/js/144.39362c1f.js",
    "revision": "83e1551eecd1d88a06b349d24215c0b3"
  },
  {
    "url": "assets/js/145.43bbb5f1.js",
    "revision": "34cf541cfb3f7e892fb93012eb44ab08"
  },
  {
    "url": "assets/js/146.cb6de9c3.js",
    "revision": "2500313b4973598a9003f248e84595db"
  },
  {
    "url": "assets/js/147.faeb42a7.js",
    "revision": "3a2c95c9c04f62289bf2515f668dbbbe"
  },
  {
    "url": "assets/js/148.7bed58fd.js",
    "revision": "b6e1bd44608d77661686709cd6ea8500"
  },
  {
    "url": "assets/js/149.5ba66843.js",
    "revision": "192b9d8899cd469cf21fcaf1c33425ce"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.cdd25cdc.js",
    "revision": "6d2d02c9f9a8c4afbc909c39e2dc90e0"
  },
  {
    "url": "assets/js/151.112ee287.js",
    "revision": "27e41df4d4906a2c09006d3278be1874"
  },
  {
    "url": "assets/js/152.a8879fb0.js",
    "revision": "b0b8e73d0344c8a477a49d5b004cd10c"
  },
  {
    "url": "assets/js/153.932571be.js",
    "revision": "385de709590cfc5365cee66558c0d05d"
  },
  {
    "url": "assets/js/154.c56cb681.js",
    "revision": "569b09e3b037a322001847061ea930c1"
  },
  {
    "url": "assets/js/155.74989088.js",
    "revision": "80e45f5c395e58b3785a9ef2fa15a07b"
  },
  {
    "url": "assets/js/156.e170cddf.js",
    "revision": "698254def254ada726c9348155fda9a4"
  },
  {
    "url": "assets/js/157.c2c21984.js",
    "revision": "5f06c38cd46fdcb4194b6a314c64a59e"
  },
  {
    "url": "assets/js/158.13c6261a.js",
    "revision": "e1abd64603d620d6ea91cac22958ef36"
  },
  {
    "url": "assets/js/159.aeb04f5f.js",
    "revision": "45d9e0c6625351f4e37c6812033ab898"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.ab04f37b.js",
    "revision": "3fd85a96702f415f541199a5b1dfa4d0"
  },
  {
    "url": "assets/js/161.3b894e11.js",
    "revision": "ea45df94e1e232045db9f7e2bfa7d4d6"
  },
  {
    "url": "assets/js/162.5d8c121e.js",
    "revision": "355601b98a632ed99738504ec0145ed0"
  },
  {
    "url": "assets/js/163.08ddd90a.js",
    "revision": "a6bcbe23221ddbba076866f2c9689475"
  },
  {
    "url": "assets/js/164.f4472315.js",
    "revision": "21afa4332b1c4bb4292aae61dfeb6cdf"
  },
  {
    "url": "assets/js/165.2ac9b181.js",
    "revision": "7666dbf96a550c8608039f0cef35c908"
  },
  {
    "url": "assets/js/166.c3d25505.js",
    "revision": "3083aee3c791240f3b39f2e3fa0a33e8"
  },
  {
    "url": "assets/js/167.7dfa6986.js",
    "revision": "7b7665ee6d10b993a7cdcef48ff46fb7"
  },
  {
    "url": "assets/js/168.c07e31a7.js",
    "revision": "1b304a2d66dc703c826f01ad66dc5337"
  },
  {
    "url": "assets/js/169.fdebc1dc.js",
    "revision": "c6028ede18fc16101c5959ca256ee4ae"
  },
  {
    "url": "assets/js/17.d2d5f43e.js",
    "revision": "03203dab5f01f558e77243d559e89a7e"
  },
  {
    "url": "assets/js/170.0bec6a35.js",
    "revision": "7f4df48e63ad736474fdd08127307fb8"
  },
  {
    "url": "assets/js/171.71f373e2.js",
    "revision": "bf5f092f6b5a1c734946527bbe0e54a5"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.85a26d7b.js",
    "revision": "b332eff809beea3f3a0bd55a2b7ad491"
  },
  {
    "url": "assets/js/174.2285982b.js",
    "revision": "d24399878dac847a8cec0b408fd9200c"
  },
  {
    "url": "assets/js/175.33d2bf80.js",
    "revision": "7a295678527ddeca1be6f66176091c18"
  },
  {
    "url": "assets/js/176.282b64bd.js",
    "revision": "43922385d1e6b1b11baa1664ede59d3d"
  },
  {
    "url": "assets/js/177.0ac9f848.js",
    "revision": "1b62e6e26bcb1fc6903dba818966ab6c"
  },
  {
    "url": "assets/js/178.98f38ba2.js",
    "revision": "01bcd673fcd6527ab3c666754e39bed3"
  },
  {
    "url": "assets/js/179.0728bdc9.js",
    "revision": "55a9b9b6d6f7a1c2d6f40a22b187462d"
  },
  {
    "url": "assets/js/18.0d308363.js",
    "revision": "b1374d5baea8dd1711ee32d79d177505"
  },
  {
    "url": "assets/js/180.5a2faf9d.js",
    "revision": "a5a511a6e90e15ea50b803f4b96571d2"
  },
  {
    "url": "assets/js/181.f18e4fcf.js",
    "revision": "a8cd1a56b14f410a1f82ae1a0cf3273c"
  },
  {
    "url": "assets/js/182.672fbdae.js",
    "revision": "a30e523b78f1a8be8041f8d8f81168d6"
  },
  {
    "url": "assets/js/183.ef14fc42.js",
    "revision": "4368c17c2a203dec65d1abed407f0284"
  },
  {
    "url": "assets/js/184.5f84213b.js",
    "revision": "0db2280be020bab2ae87a52440dcad49"
  },
  {
    "url": "assets/js/185.8184ab09.js",
    "revision": "a56015f6c1940a9a8f2d441f58bbac75"
  },
  {
    "url": "assets/js/186.7221f853.js",
    "revision": "6d154c7119570f9591a4aff9fe765d9f"
  },
  {
    "url": "assets/js/187.55f97e7d.js",
    "revision": "2d126f75875115c759fc7295c2b38261"
  },
  {
    "url": "assets/js/188.4ff64282.js",
    "revision": "ef30f61650a24f1df5e3c4aa4309c3fb"
  },
  {
    "url": "assets/js/189.13e20e74.js",
    "revision": "eb908d453521e7c5ecc3d5d4f46a3082"
  },
  {
    "url": "assets/js/19.806df7d0.js",
    "revision": "f01dd6c0af8e637481d95a38f095f8c7"
  },
  {
    "url": "assets/js/190.d2fa924e.js",
    "revision": "c58172f618dd67022cf24beeb0b0cacd"
  },
  {
    "url": "assets/js/191.f5dc61af.js",
    "revision": "7be489d8822300cdd897a1861962dda2"
  },
  {
    "url": "assets/js/192.ff19ba7a.js",
    "revision": "544e4ab93aa1c83055deff5a280e6c06"
  },
  {
    "url": "assets/js/193.4e77b044.js",
    "revision": "56645c4d23de22070f6a40955d0b6aa8"
  },
  {
    "url": "assets/js/194.71f2e50f.js",
    "revision": "316ee5be9ac1a0a51eb34454aa66e009"
  },
  {
    "url": "assets/js/195.f2a85832.js",
    "revision": "7f09accdfa372e2e20a861b8149697ba"
  },
  {
    "url": "assets/js/196.67a71a60.js",
    "revision": "31a87aeb995e4bddc9476bcab4829072"
  },
  {
    "url": "assets/js/197.186e2fbf.js",
    "revision": "128b99f1489848296ee349ba36a26bdf"
  },
  {
    "url": "assets/js/198.79052641.js",
    "revision": "091ca8bd7721808e1287813b24755534"
  },
  {
    "url": "assets/js/199.91bc9f39.js",
    "revision": "97f78765a511beb844409d3d3ba63de6"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.dd1405a1.js",
    "revision": "8095472972b8a2651f7e14a68784663d"
  },
  {
    "url": "assets/js/200.afd6df58.js",
    "revision": "acf0451f52a6020584725550a97eb121"
  },
  {
    "url": "assets/js/201.11ebcf04.js",
    "revision": "41d1a97e8562965f8f3a6052767a8fe8"
  },
  {
    "url": "assets/js/202.9cd3502d.js",
    "revision": "1e1d994e2d0218f702367116e8518afd"
  },
  {
    "url": "assets/js/203.020403d7.js",
    "revision": "4fb1d335be45155f4bb15c0343decaf9"
  },
  {
    "url": "assets/js/204.86e56c9a.js",
    "revision": "1e23ab548f6e1282d71aee3da9652c14"
  },
  {
    "url": "assets/js/205.437c7d3e.js",
    "revision": "0b9c78aedf3e386c4153b7aff4af4b62"
  },
  {
    "url": "assets/js/206.2f11fbe1.js",
    "revision": "c75efe2a8d8e94bab72a2825929b465f"
  },
  {
    "url": "assets/js/207.ba0bc608.js",
    "revision": "bb46c8d17bfa601e627cc3fa5563c52c"
  },
  {
    "url": "assets/js/208.abad23b7.js",
    "revision": "9a4139f8f54c669656490de7f225920d"
  },
  {
    "url": "assets/js/209.ad79b228.js",
    "revision": "82d9c249a12fe51910a0a6e4a8d95512"
  },
  {
    "url": "assets/js/21.5ee26f74.js",
    "revision": "b178b9c410afd3bfe5ab7b4afcfee601"
  },
  {
    "url": "assets/js/210.f2c9bf0f.js",
    "revision": "5a56bb280660c7a583d9420cdc580c57"
  },
  {
    "url": "assets/js/211.d2d3b8da.js",
    "revision": "562e02b83a87d70024d35e328f64c8a5"
  },
  {
    "url": "assets/js/212.96377791.js",
    "revision": "b9c6c7df64897d757409049172e64217"
  },
  {
    "url": "assets/js/213.2cf5b662.js",
    "revision": "5f2ea24f5e8afe912300c690038815b5"
  },
  {
    "url": "assets/js/214.a5601f57.js",
    "revision": "9f0c14f71f695b1c5ff20f0f64011e63"
  },
  {
    "url": "assets/js/215.287f4228.js",
    "revision": "a4ffa574a383f793e6c0635b313b9f13"
  },
  {
    "url": "assets/js/216.e686a22a.js",
    "revision": "dbab2ec608fb1cac86488a386e925369"
  },
  {
    "url": "assets/js/217.645b4fb2.js",
    "revision": "9f9184860f9289da2acb46bbd1dbd840"
  },
  {
    "url": "assets/js/218.7c3a20dc.js",
    "revision": "79ff4d9c8ec2b13c33864c219ab137c1"
  },
  {
    "url": "assets/js/219.d1a8895f.js",
    "revision": "8f3c705eb3444c408246d02a6b8240c9"
  },
  {
    "url": "assets/js/22.54e9474d.js",
    "revision": "ef1debb3371d49dba86a7295d3d3b518"
  },
  {
    "url": "assets/js/220.5926463b.js",
    "revision": "cc87bdfc970426ad4df22f5393d5054d"
  },
  {
    "url": "assets/js/221.313d5e63.js",
    "revision": "b55e65fa0432d834efa2a3d9fc153b89"
  },
  {
    "url": "assets/js/222.716e0469.js",
    "revision": "ac2c247637bb001e13685d9bf53e111e"
  },
  {
    "url": "assets/js/223.db865265.js",
    "revision": "24b15a27abe31d7bb30a920a028f3237"
  },
  {
    "url": "assets/js/224.acde20ef.js",
    "revision": "32575e3d69164a7c25bd3af89dacc5de"
  },
  {
    "url": "assets/js/225.b8d099b2.js",
    "revision": "6e017f87ca977618cfc0e7e7015ba190"
  },
  {
    "url": "assets/js/226.4d6e1807.js",
    "revision": "628cc9b8db9cdcd84a73bfb65cd21ba4"
  },
  {
    "url": "assets/js/227.9fbd2efc.js",
    "revision": "147dbb3333b175d9cb7f41313c925c8c"
  },
  {
    "url": "assets/js/228.55daf5ea.js",
    "revision": "ba084cd9c084ce81a75d4bc28854ae7c"
  },
  {
    "url": "assets/js/229.1bd93c4c.js",
    "revision": "5758fe887080a983321499726fab75ec"
  },
  {
    "url": "assets/js/23.35bf827d.js",
    "revision": "a6237424347020dc04196dedb49c39b4"
  },
  {
    "url": "assets/js/230.167cafd9.js",
    "revision": "a607888d8eb233904009b88524ff511c"
  },
  {
    "url": "assets/js/231.698b8d7b.js",
    "revision": "b444723e9312c1d1a62d25638475e7b8"
  },
  {
    "url": "assets/js/232.4a679dc6.js",
    "revision": "290d4c6c979c0227422126292cb04ebf"
  },
  {
    "url": "assets/js/233.2a9370c3.js",
    "revision": "8cfc3e85240a2a91abd778ccaf2d86de"
  },
  {
    "url": "assets/js/234.532175ec.js",
    "revision": "94fd3f8431dc82d3b67e49d1b35c95ce"
  },
  {
    "url": "assets/js/235.49c95af5.js",
    "revision": "1fb2b95f1d8b16aaa208d5a894887bcb"
  },
  {
    "url": "assets/js/236.41c3b9e6.js",
    "revision": "6bd3fce3cd4dcf2bda4477f2457ca234"
  },
  {
    "url": "assets/js/237.b945f1b4.js",
    "revision": "f8c792163eb172c870dba4a56cf02b95"
  },
  {
    "url": "assets/js/238.5652d6a7.js",
    "revision": "9a941fe4729e7df01ecf75b5e9472fd6"
  },
  {
    "url": "assets/js/239.339d26ff.js",
    "revision": "8f9288595a6e042b89da54d750a81b44"
  },
  {
    "url": "assets/js/24.78de70a6.js",
    "revision": "203b069d3a2f431e051e87f69e6b61bf"
  },
  {
    "url": "assets/js/240.e24c5e5f.js",
    "revision": "c649efa31f7211041083941867983a43"
  },
  {
    "url": "assets/js/241.6eb64459.js",
    "revision": "a89029d3325ab1db83b64b6778a5d6c7"
  },
  {
    "url": "assets/js/242.af574f3d.js",
    "revision": "dbf3aa6158e183477e28135454005a34"
  },
  {
    "url": "assets/js/243.849b3523.js",
    "revision": "19cf17180f9960ac94076492cba4bce0"
  },
  {
    "url": "assets/js/244.19707128.js",
    "revision": "d05b6563b793554f64080746a270a571"
  },
  {
    "url": "assets/js/245.5f02437d.js",
    "revision": "693a7e5e92d051c528dd01712ce5dacf"
  },
  {
    "url": "assets/js/246.f273c058.js",
    "revision": "54134739a09184ab0f11c024d7b35bdf"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.22f8b57c.js",
    "revision": "570ec10e97809fde43e5de1c35a87747"
  },
  {
    "url": "assets/js/249.e04265a6.js",
    "revision": "e9aa18b8ac43d515b269db83720b8474"
  },
  {
    "url": "assets/js/25.7c1612ef.js",
    "revision": "7b761fe8a33712542f86bdf366da746c"
  },
  {
    "url": "assets/js/250.6b74530e.js",
    "revision": "e1c6e7d726850dc86efd40c903718a29"
  },
  {
    "url": "assets/js/251.a21a322f.js",
    "revision": "560988d3550f4bd36caed7fdcdba06aa"
  },
  {
    "url": "assets/js/252.adbdc2d2.js",
    "revision": "47d15137048d3104142cb6879094bd27"
  },
  {
    "url": "assets/js/253.8eeba7fb.js",
    "revision": "ea0db585baac33e0f95e2aeec24a468c"
  },
  {
    "url": "assets/js/254.ad80f1dc.js",
    "revision": "1e870a436553b91114ebe11231160553"
  },
  {
    "url": "assets/js/255.9bad36c9.js",
    "revision": "eacb2b8eb16a15b079db7e944446274e"
  },
  {
    "url": "assets/js/256.81cec226.js",
    "revision": "a18f70a86cb6cfec0778d5cd26fe2947"
  },
  {
    "url": "assets/js/257.810c7d04.js",
    "revision": "34374d509df1902c8d5a4c2db43e4245"
  },
  {
    "url": "assets/js/258.dba0c648.js",
    "revision": "7af9d7a3591a31be6481ca9470de1386"
  },
  {
    "url": "assets/js/259.f44216f1.js",
    "revision": "3a12da51770240623c5459b4617adfba"
  },
  {
    "url": "assets/js/26.3957fc57.js",
    "revision": "8565308f823b64167cac3c0623628b50"
  },
  {
    "url": "assets/js/260.c26c10bd.js",
    "revision": "2acc525c28c290d0d62f69890e00f8e9"
  },
  {
    "url": "assets/js/261.d15c6ea3.js",
    "revision": "340472aab89c75f70a1c87af69a015af"
  },
  {
    "url": "assets/js/262.e2cf297d.js",
    "revision": "884b8bf72b585f9ac1554a27b7f49d8d"
  },
  {
    "url": "assets/js/263.ca2b393d.js",
    "revision": "bc7116c151ffc8a85a34ff27194a6252"
  },
  {
    "url": "assets/js/264.cea777ac.js",
    "revision": "d0b95706a617d0d45b1e30877a0deb10"
  },
  {
    "url": "assets/js/265.1ffc4a47.js",
    "revision": "b4d2d88be2e80db1e3963a4ad732d904"
  },
  {
    "url": "assets/js/266.6cf10ee2.js",
    "revision": "324dd64dd0e920e6d1b69f3ebde02bd2"
  },
  {
    "url": "assets/js/267.1d31e558.js",
    "revision": "b47b94bd3bf7dba5c259c92f1e5247ad"
  },
  {
    "url": "assets/js/268.76db94b0.js",
    "revision": "f8b3e2514d53dbe4b6bc08443ff7a375"
  },
  {
    "url": "assets/js/269.a154dde2.js",
    "revision": "5c6a301532c441cd77f0aaabad928678"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.9994d697.js",
    "revision": "5c38dac4d34fe44d7ef146e8d0cade5a"
  },
  {
    "url": "assets/js/271.f9bd9bc8.js",
    "revision": "7fdbc11c1a5f3c4fba63776fbf4725ae"
  },
  {
    "url": "assets/js/272.846c85b5.js",
    "revision": "a1a247497ce511488071a2b66b27f36d"
  },
  {
    "url": "assets/js/273.9617d193.js",
    "revision": "f9291cedbe101300151456ba1c1ebe17"
  },
  {
    "url": "assets/js/274.bb3f8fc4.js",
    "revision": "2605acf40000707be8ffb357c34023e7"
  },
  {
    "url": "assets/js/275.0a4865fd.js",
    "revision": "c1248e67337f03897e0c0d04b71eadae"
  },
  {
    "url": "assets/js/276.606375f5.js",
    "revision": "f520a1a0eaf378388545803bf32c45df"
  },
  {
    "url": "assets/js/277.4a2de70d.js",
    "revision": "f2b3ab54ece57aa2542d83f666f6c160"
  },
  {
    "url": "assets/js/278.5f221d03.js",
    "revision": "a9a67a3413e8c2eb79b52f827d1cfbd2"
  },
  {
    "url": "assets/js/279.90a7a90a.js",
    "revision": "4456bf4af3d9d3eaad8d9a70e7a50d9d"
  },
  {
    "url": "assets/js/28.95d5f6c0.js",
    "revision": "ef1cdee21a78063770b725f5b1d626cc"
  },
  {
    "url": "assets/js/280.765992b3.js",
    "revision": "1a5023b90ea616233346c2823ac577ea"
  },
  {
    "url": "assets/js/281.4e01d289.js",
    "revision": "eda0defe97d4eb6a37e542a93eab97c9"
  },
  {
    "url": "assets/js/282.eec7580d.js",
    "revision": "3055f510eb4ed585769e0adf8929c849"
  },
  {
    "url": "assets/js/283.4ca54f29.js",
    "revision": "bc4ef8ac12cc0e4b2c9d559f5096294e"
  },
  {
    "url": "assets/js/284.ecd51437.js",
    "revision": "bdcbda0b38d6ea6ad0dc32ae3837918a"
  },
  {
    "url": "assets/js/285.db2c87b0.js",
    "revision": "8c6be50528b88a8d0aea5c4acce2e6b1"
  },
  {
    "url": "assets/js/286.9ba9ede6.js",
    "revision": "7458b6ffbbfec803cd4a274805e9f426"
  },
  {
    "url": "assets/js/287.ecaa18b8.js",
    "revision": "048166426dd03938b50baf302054728d"
  },
  {
    "url": "assets/js/288.36a5ebc1.js",
    "revision": "29aad8b7ef126c82fb65e5164de42e98"
  },
  {
    "url": "assets/js/289.13e0e0d8.js",
    "revision": "79e0e2c117a1a697f1a1e10c4a10be15"
  },
  {
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.03ad5cce.js",
    "revision": "8c21e2af131d62f36301047571883c49"
  },
  {
    "url": "assets/js/291.2c023d7a.js",
    "revision": "965466a5b9a49da35214400b1ab6ab1e"
  },
  {
    "url": "assets/js/292.741499a4.js",
    "revision": "5af5258ebe47e0ae81def65a9b126ef5"
  },
  {
    "url": "assets/js/293.b9fa1183.js",
    "revision": "32fddf0ef657e97a61a16d006d8f9b77"
  },
  {
    "url": "assets/js/294.fca785c3.js",
    "revision": "db5271fa40da72d0102cbc52358bb2cd"
  },
  {
    "url": "assets/js/295.49ae937a.js",
    "revision": "452a1d4273c6dfd371b6ee65cba145f5"
  },
  {
    "url": "assets/js/296.802570fa.js",
    "revision": "ed8d83ef7d72a33b8156a6f978db11b1"
  },
  {
    "url": "assets/js/297.4f4c0874.js",
    "revision": "e624b7ad892937a3ad976feea3f746d7"
  },
  {
    "url": "assets/js/298.d6c6cf2d.js",
    "revision": "af2a9e374a2ab51e50c781319eeaa8a8"
  },
  {
    "url": "assets/js/299.5204baa0.js",
    "revision": "f0e14448816e2b1cfce2e862e3b414e8"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.76112fda.js",
    "revision": "79e0ca239a0bea906e92eb8769f30d0c"
  },
  {
    "url": "assets/js/300.6afe5a0d.js",
    "revision": "ef346a0dfc9b88ddf8d3f299551861b2"
  },
  {
    "url": "assets/js/301.99139518.js",
    "revision": "886b15082fbe28a60cad41e5a9848812"
  },
  {
    "url": "assets/js/302.d2d4ad8f.js",
    "revision": "ed58cdc37d53a021f9fab9972856c60e"
  },
  {
    "url": "assets/js/303.dcda3dc8.js",
    "revision": "41f26f8e0a44ee14a1159508020edf14"
  },
  {
    "url": "assets/js/304.f1a32ce7.js",
    "revision": "55eb1d6e236355a549e6f3787a820aad"
  },
  {
    "url": "assets/js/305.7d60f813.js",
    "revision": "3a7161b0cc21c04d71827514d58c0bcc"
  },
  {
    "url": "assets/js/306.5eb36b61.js",
    "revision": "f7cd7e930cc2cf53f09c836e845f3881"
  },
  {
    "url": "assets/js/307.fad837a9.js",
    "revision": "0c1a6453c3c9439e7e4821f272cd989a"
  },
  {
    "url": "assets/js/308.5bcd50d1.js",
    "revision": "da96b185b8fedc5c7db9ac2e93f4bb74"
  },
  {
    "url": "assets/js/309.791f6702.js",
    "revision": "a2860068060e2bdd8836668d1af37681"
  },
  {
    "url": "assets/js/31.8ed34412.js",
    "revision": "31706a77c8d956143d7193a42c2889dd"
  },
  {
    "url": "assets/js/310.13b7e88a.js",
    "revision": "58eca4f297d5243089e0307118b159a0"
  },
  {
    "url": "assets/js/311.677d2b56.js",
    "revision": "36847e1a0d6caad817a951a245b67cc3"
  },
  {
    "url": "assets/js/312.fafb01f7.js",
    "revision": "8ee72f104e6173efe360ad13f58c4e88"
  },
  {
    "url": "assets/js/313.ed92bdb1.js",
    "revision": "612bf897553c5295cc8a49dd83a6e30c"
  },
  {
    "url": "assets/js/314.bddc9a91.js",
    "revision": "62f20f4e89c2f5802f9165c0fe54449d"
  },
  {
    "url": "assets/js/315.aeac7edb.js",
    "revision": "97b2e447dbee21441ed92115e1ac2092"
  },
  {
    "url": "assets/js/316.a6619468.js",
    "revision": "2d3460b6629ee89a4374590a1ce8cf3a"
  },
  {
    "url": "assets/js/317.732b4fa6.js",
    "revision": "cb80a532669217fdeefbfe3006032b05"
  },
  {
    "url": "assets/js/318.a3138ad7.js",
    "revision": "44dc46feb4e81d63bcacfbcf7ca80b63"
  },
  {
    "url": "assets/js/319.9ba7c98b.js",
    "revision": "1db543be1ed2929302fa19d8cf69631a"
  },
  {
    "url": "assets/js/32.e2ca572c.js",
    "revision": "b538776f217ffe4e8609d6c7b17d4613"
  },
  {
    "url": "assets/js/320.6beadd5e.js",
    "revision": "4b7554676a1708d419748ffe19e4f34d"
  },
  {
    "url": "assets/js/321.d7cc804c.js",
    "revision": "c36121f51c8cfe746f024b2270953251"
  },
  {
    "url": "assets/js/322.da9058c7.js",
    "revision": "5e9d71abc7eae42c75c54586bf887027"
  },
  {
    "url": "assets/js/323.4756516f.js",
    "revision": "29850951d838691c92325f9b1801e66f"
  },
  {
    "url": "assets/js/324.c9fcd861.js",
    "revision": "b2c13e865ac9da9c46e813b8efd54827"
  },
  {
    "url": "assets/js/325.27337658.js",
    "revision": "119f6f7cadffc1fae8e0aa53f251b4b3"
  },
  {
    "url": "assets/js/326.567f816e.js",
    "revision": "42e0e85d4beed78a4e0a612dc05aeb22"
  },
  {
    "url": "assets/js/327.3abd0684.js",
    "revision": "21973abcbed4ad1bdbb600f6669bdb3a"
  },
  {
    "url": "assets/js/328.f3c1d259.js",
    "revision": "436b17503fdc9544633d9157a4c2181a"
  },
  {
    "url": "assets/js/329.706bcee8.js",
    "revision": "c615351935c67cca4383a67f26a56af1"
  },
  {
    "url": "assets/js/33.d79ece93.js",
    "revision": "a45c8b640fcce2471e07fe6d2c2e5346"
  },
  {
    "url": "assets/js/330.06699b63.js",
    "revision": "19867e330b33fb0e27c505aa73f199eb"
  },
  {
    "url": "assets/js/331.2019d546.js",
    "revision": "8a01d74e868c8ca9833f009c67eafe38"
  },
  {
    "url": "assets/js/332.c9945fc0.js",
    "revision": "b9ed605eb3ad630f964e821edb3066c1"
  },
  {
    "url": "assets/js/333.15406102.js",
    "revision": "aaa1f8dd2d012c9e0ae0102a455e497f"
  },
  {
    "url": "assets/js/334.4b4e1ba5.js",
    "revision": "d6b70766060cde8af5c9df0d6d450508"
  },
  {
    "url": "assets/js/335.6105d3e0.js",
    "revision": "7bfd21dbb1ab5c77223527ae0e156ffe"
  },
  {
    "url": "assets/js/336.74c7bcf7.js",
    "revision": "6bf47c74345771a3282ab62213975298"
  },
  {
    "url": "assets/js/337.e70b7d0a.js",
    "revision": "e9dcbd7abc7bb7a04ae9c38afa46a084"
  },
  {
    "url": "assets/js/338.b0848527.js",
    "revision": "19b277d9c8b692966fe6faf185d15ab4"
  },
  {
    "url": "assets/js/339.a5bcc507.js",
    "revision": "ae5fdc9df8cbfe65019ed064f406ebc9"
  },
  {
    "url": "assets/js/34.84b3e39a.js",
    "revision": "8c39bd17d1d0e7fb7b6676eb83081e8e"
  },
  {
    "url": "assets/js/340.9dd2bf8c.js",
    "revision": "9f39827f023cb50dbc624af7d5664818"
  },
  {
    "url": "assets/js/341.0999342e.js",
    "revision": "9ff1a003d9ef14729f33bef2268f2d3e"
  },
  {
    "url": "assets/js/342.606f921c.js",
    "revision": "c4cb55383483c18b09f38ff82ce95188"
  },
  {
    "url": "assets/js/343.725847c5.js",
    "revision": "faff05aaad6c9cdae9737122153eaeb4"
  },
  {
    "url": "assets/js/344.a9fe76c6.js",
    "revision": "b72c14544a522359ef4375b2af211351"
  },
  {
    "url": "assets/js/345.b5e28f34.js",
    "revision": "54b24467764dfd3d370062e66fc2c0cb"
  },
  {
    "url": "assets/js/346.48416a5e.js",
    "revision": "e29afe9c33499ae906084338f3ecd348"
  },
  {
    "url": "assets/js/347.35947b82.js",
    "revision": "bbcda67c5986f32f894ecfbadea1e5d6"
  },
  {
    "url": "assets/js/348.6bed73f3.js",
    "revision": "552cdf7fb82aabac42ba10e2857deba4"
  },
  {
    "url": "assets/js/349.039bc57f.js",
    "revision": "8429cbf6b61f0e4d1c0b21514a3f3591"
  },
  {
    "url": "assets/js/35.1e3d60f4.js",
    "revision": "afe3ec3f9195c998851fd8c443d542d5"
  },
  {
    "url": "assets/js/350.c754761b.js",
    "revision": "b9d9bc078e1c1bba6e18bfb3d0782ceb"
  },
  {
    "url": "assets/js/351.df0360e7.js",
    "revision": "12cf6abae4a9a92a25340cb3d0a1b8cb"
  },
  {
    "url": "assets/js/352.6e024efb.js",
    "revision": "640eea3c6a456ccdfc93548de436e359"
  },
  {
    "url": "assets/js/353.44125f97.js",
    "revision": "7c616f91a2d1b2ea4b5d78dd083da928"
  },
  {
    "url": "assets/js/354.c96854db.js",
    "revision": "7ea8c7698d14c7e2f924a19a9387528b"
  },
  {
    "url": "assets/js/355.90de1c53.js",
    "revision": "518c7a941ac7db80be45e25488472003"
  },
  {
    "url": "assets/js/356.e2756c48.js",
    "revision": "c5164df7ece27e2cb1850116b676ff6f"
  },
  {
    "url": "assets/js/357.0a2b415c.js",
    "revision": "86c669d925494ba5681a429f4284a9d8"
  },
  {
    "url": "assets/js/358.ce3018a5.js",
    "revision": "d9a1cf8a11ba5de2d19d50f7213d741c"
  },
  {
    "url": "assets/js/359.5f910f05.js",
    "revision": "86365b8d14d9dffa354146a983d99190"
  },
  {
    "url": "assets/js/36.da893917.js",
    "revision": "ca8c80456fb05ae45ab63b42cdb5932a"
  },
  {
    "url": "assets/js/360.7602de03.js",
    "revision": "708dbf22dce6204689cc5853b904017d"
  },
  {
    "url": "assets/js/361.5dd5534d.js",
    "revision": "3c5d44425d42f9820878f96e50a56f86"
  },
  {
    "url": "assets/js/362.03e8c021.js",
    "revision": "30f8503ece3520c7cb19d807d185daa0"
  },
  {
    "url": "assets/js/363.d26b9375.js",
    "revision": "064060d086bec8a17497d0eb13c427a3"
  },
  {
    "url": "assets/js/364.3ddf3677.js",
    "revision": "28638dacf9b0e405e70ee61cf6c6c2a8"
  },
  {
    "url": "assets/js/365.9fb7020b.js",
    "revision": "57494d0ada702c19a8327c04d7e70daf"
  },
  {
    "url": "assets/js/366.a88bbd19.js",
    "revision": "bcb9761238963018c69e0901fd2971b5"
  },
  {
    "url": "assets/js/367.ddaac428.js",
    "revision": "280e7c67aa8f7b20799fdfb13125db2e"
  },
  {
    "url": "assets/js/368.83926200.js",
    "revision": "6c2f173f929e094c38b49d658e4c608a"
  },
  {
    "url": "assets/js/369.aea5bc6c.js",
    "revision": "eafddae39b14f3678c8d38da8518aae8"
  },
  {
    "url": "assets/js/37.f99f1945.js",
    "revision": "6bea80bbb0e755b276a7e7d5e8110d80"
  },
  {
    "url": "assets/js/370.df14cd8b.js",
    "revision": "8a819ee36e6c2c28041912951a3c0b55"
  },
  {
    "url": "assets/js/371.bce2a611.js",
    "revision": "43414739e0620a21615a15085b894662"
  },
  {
    "url": "assets/js/372.602b80ef.js",
    "revision": "4384fa0fc8417e809e5f26fa8fa4e94b"
  },
  {
    "url": "assets/js/373.aac6bfcf.js",
    "revision": "91fef55bba32cd118a8f0c350506cbc8"
  },
  {
    "url": "assets/js/374.7324cff9.js",
    "revision": "9ce3730311dc79d39017665d42605459"
  },
  {
    "url": "assets/js/375.2f7181d2.js",
    "revision": "cdfcfd257ffba744a33717eb367ffa74"
  },
  {
    "url": "assets/js/376.f03b7b13.js",
    "revision": "704112d9c0f2360f06b2eab941c8ec6f"
  },
  {
    "url": "assets/js/377.7812921a.js",
    "revision": "6dee8f90d6745a7259e1a1a1074be22c"
  },
  {
    "url": "assets/js/378.ff7cd8c5.js",
    "revision": "1a3749955592c8770d30a6189a71fa8b"
  },
  {
    "url": "assets/js/379.b9347aa4.js",
    "revision": "b90f0b46beb395bc13fd66c1a31d14a6"
  },
  {
    "url": "assets/js/38.e343ff6a.js",
    "revision": "c1448ee2f57cce00fac029efbc8621d5"
  },
  {
    "url": "assets/js/380.0a60edff.js",
    "revision": "a8b78d827847c3654cea96cc0b5a1b5b"
  },
  {
    "url": "assets/js/381.07a7f5fe.js",
    "revision": "5f41c847457e09ca4dadcfc042724f13"
  },
  {
    "url": "assets/js/382.e8dd8d72.js",
    "revision": "f51222d8b32f1d5ce926d863cd9053b0"
  },
  {
    "url": "assets/js/383.3eef9f8b.js",
    "revision": "61eb3a0e002e1beb027f6653a4ddb687"
  },
  {
    "url": "assets/js/384.fe43ef29.js",
    "revision": "535f51924e5b856fc4ea83378bc353a6"
  },
  {
    "url": "assets/js/385.de45f3dd.js",
    "revision": "b048b011b4596b8b2d8595cc105f803b"
  },
  {
    "url": "assets/js/386.8ec02e49.js",
    "revision": "41d0cec77665021444b4d354a8c03c38"
  },
  {
    "url": "assets/js/387.4028cf3e.js",
    "revision": "306f09c240452574cdb5b9458dd5c2fc"
  },
  {
    "url": "assets/js/388.ae53d79e.js",
    "revision": "f196dad68688813c2a3de148803cdb47"
  },
  {
    "url": "assets/js/389.6853840b.js",
    "revision": "305253fc5d94dec26f8d4a9390194a72"
  },
  {
    "url": "assets/js/39.ca10035a.js",
    "revision": "3f65809491e095c81a15c146ce5cfeeb"
  },
  {
    "url": "assets/js/390.1db5367a.js",
    "revision": "e5c52b005396708cc255f25c97068d15"
  },
  {
    "url": "assets/js/391.bcea98df.js",
    "revision": "7e2dd30b150988e32b50e6653bebf275"
  },
  {
    "url": "assets/js/392.fac214aa.js",
    "revision": "308c5b674f2d4a6adbd24808dbcaa599"
  },
  {
    "url": "assets/js/393.cbd2d828.js",
    "revision": "abec9cbfb7806f8ab74022c8d9f740b4"
  },
  {
    "url": "assets/js/394.8e572258.js",
    "revision": "ab6aba15d518d51cbeba4ba34cbf8e66"
  },
  {
    "url": "assets/js/395.8dfebdea.js",
    "revision": "c64a62257d71ee7a95060aa1fa385632"
  },
  {
    "url": "assets/js/396.4b0b2db7.js",
    "revision": "888bbb22e9841b97d90b091985a511e4"
  },
  {
    "url": "assets/js/397.5b4dd836.js",
    "revision": "51373f09739097ca9b28aadf9f83fcf7"
  },
  {
    "url": "assets/js/398.cb2c0757.js",
    "revision": "5e024489630b10867c4276cd5e9abf40"
  },
  {
    "url": "assets/js/399.61af3446.js",
    "revision": "49d67d3746a44425bbf588ffe2a0d4b5"
  },
  {
    "url": "assets/js/4.a85727f4.js",
    "revision": "bd5f15e972de8a60fa9da59c48ed9d00"
  },
  {
    "url": "assets/js/40.e0522198.js",
    "revision": "5c4d0b02bed6a166f36b23c3a02e6af5"
  },
  {
    "url": "assets/js/400.aa71a9cc.js",
    "revision": "4767da13594502726d7925ececf6b2ff"
  },
  {
    "url": "assets/js/401.47d5e7e4.js",
    "revision": "21099366ec8d42a0d8c913ab970f0ae9"
  },
  {
    "url": "assets/js/402.ca545008.js",
    "revision": "bce0aba4d85ecc421bbd2bb4e1bd48f3"
  },
  {
    "url": "assets/js/403.aa4a1d77.js",
    "revision": "e5b1046afbb475e1410fee260ea48764"
  },
  {
    "url": "assets/js/404.6f92f515.js",
    "revision": "4eaaade1fe7463e7c8478f9e195ae490"
  },
  {
    "url": "assets/js/405.7c1ba4d4.js",
    "revision": "eb3d357f78d6e269cd4b35ebc38436c3"
  },
  {
    "url": "assets/js/406.4c87bce1.js",
    "revision": "e693266d806f082efbb50010767836bf"
  },
  {
    "url": "assets/js/407.c935d117.js",
    "revision": "b35dc37a75bdcbdf41fa330de17af641"
  },
  {
    "url": "assets/js/408.1d9ad4d1.js",
    "revision": "f483ec05680d474389b5c66a5abfb525"
  },
  {
    "url": "assets/js/409.269071bc.js",
    "revision": "b4f1ed50cff9f8c953a57135685eafc9"
  },
  {
    "url": "assets/js/41.3da09379.js",
    "revision": "a49316f943100b9ac62fe741dd36fa64"
  },
  {
    "url": "assets/js/410.aa424f81.js",
    "revision": "1e30b4b554fa9ecf533acd256ecabd71"
  },
  {
    "url": "assets/js/411.52a1598c.js",
    "revision": "296c3126934ffc2b37f37320f9c908bc"
  },
  {
    "url": "assets/js/42.f149b4a3.js",
    "revision": "b07d82757fdea03ade4a03210c2e6fa4"
  },
  {
    "url": "assets/js/43.40b922ca.js",
    "revision": "ce59031cb5489b3615abda9279a4fbd1"
  },
  {
    "url": "assets/js/44.aa8365b9.js",
    "revision": "eccfa476b8834c7c62b9199d4f531ce8"
  },
  {
    "url": "assets/js/45.4b6aee73.js",
    "revision": "d34a7cc761fbf4e9a16946aaa79eded3"
  },
  {
    "url": "assets/js/46.0267cd3f.js",
    "revision": "ca82949473b6d821a8bcb09bf1629696"
  },
  {
    "url": "assets/js/47.510629a0.js",
    "revision": "9894415272d2bd05abcc12d2a07aa1a6"
  },
  {
    "url": "assets/js/48.0db0ab8d.js",
    "revision": "03c9db2530407ec4281dfae6a95beabe"
  },
  {
    "url": "assets/js/49.8b59fe35.js",
    "revision": "ff79a77c5bbe6a08f0df1872b99d6f46"
  },
  {
    "url": "assets/js/5.34a45051.js",
    "revision": "bd7b1d4aba8586b8cd2f07e9f38e5abe"
  },
  {
    "url": "assets/js/50.802fa0da.js",
    "revision": "8f588d2aa30f7ef25b0c8ddec37d49e6"
  },
  {
    "url": "assets/js/51.3a00ad3a.js",
    "revision": "8b83d80dc0c1299f909b3b9532bcf762"
  },
  {
    "url": "assets/js/52.6de3883b.js",
    "revision": "6bae775c400d090e20d3ea0b2e805c90"
  },
  {
    "url": "assets/js/53.00366d94.js",
    "revision": "6e891782066ecd9c011a7bfacdfb8cbf"
  },
  {
    "url": "assets/js/54.7cc21f55.js",
    "revision": "d775abc987ded351ae9b27f110682497"
  },
  {
    "url": "assets/js/55.b55b0083.js",
    "revision": "c0e1cbc70776e6ee938d7fb7f632912b"
  },
  {
    "url": "assets/js/56.ec2a1861.js",
    "revision": "fdc5ebd88f26b973d85a906b2399e11f"
  },
  {
    "url": "assets/js/57.4eba7d2d.js",
    "revision": "38bf2b480baa1fdc0a5bbeb4b72e6f88"
  },
  {
    "url": "assets/js/58.9d0eaac0.js",
    "revision": "835f578bf5b3ce1a01c9d30b5082bf0c"
  },
  {
    "url": "assets/js/59.9f562975.js",
    "revision": "aaa15fc819d99f4b8dcac043397a3187"
  },
  {
    "url": "assets/js/60.9e086168.js",
    "revision": "aa13cad345f6d32257971b645bb6b311"
  },
  {
    "url": "assets/js/61.dc2a5dd8.js",
    "revision": "f1a5db1096fb6dac0109df44b5f104a2"
  },
  {
    "url": "assets/js/62.b9a38620.js",
    "revision": "d2ee3234c063eb0f4951ee881ad15446"
  },
  {
    "url": "assets/js/63.22876f0b.js",
    "revision": "f129e55d2a9ead3839ecff01a1c755e7"
  },
  {
    "url": "assets/js/64.6334dfd6.js",
    "revision": "2deecb2af8eb434619e6e7ec180266ee"
  },
  {
    "url": "assets/js/65.0d23fa09.js",
    "revision": "4d520d1fa56ce4d6bdfeb1d767cbbe03"
  },
  {
    "url": "assets/js/66.56218e6e.js",
    "revision": "df403fc0a6d216d091abbe0fc6b31685"
  },
  {
    "url": "assets/js/67.b7662403.js",
    "revision": "bcbb71e14b254b81f68dd3814b9afdf0"
  },
  {
    "url": "assets/js/68.8ddc6be3.js",
    "revision": "bda748ef3ece7d6af8d4bfb036bb8da9"
  },
  {
    "url": "assets/js/69.a66a4a67.js",
    "revision": "e69f2788707eba838f7efd930ef5ec99"
  },
  {
    "url": "assets/js/70.46ea2b99.js",
    "revision": "cfb825fe6f10dbeebfa666858414d50d"
  },
  {
    "url": "assets/js/71.292422f2.js",
    "revision": "37630d382222d4f1d9e8a9323af15305"
  },
  {
    "url": "assets/js/72.b15afe60.js",
    "revision": "24798f15d5f61c5054b6fa98d6bfff01"
  },
  {
    "url": "assets/js/73.4860b4e9.js",
    "revision": "e73e03b3b00e32e9b69d7be2754b51f8"
  },
  {
    "url": "assets/js/74.eb3be7cf.js",
    "revision": "a6d7629b90ebadf169ce2bc92162d9cb"
  },
  {
    "url": "assets/js/75.b7c0bf23.js",
    "revision": "3228cd0699d4b550043ebd868832a833"
  },
  {
    "url": "assets/js/76.91882ac6.js",
    "revision": "c15a45c15dbecbf91e4e4fa69f47865a"
  },
  {
    "url": "assets/js/77.593433bd.js",
    "revision": "dc4f318b33467d52305bbcdca91d29e2"
  },
  {
    "url": "assets/js/78.56e62e5e.js",
    "revision": "4241147744bb1633ba7ba8b4d2352c20"
  },
  {
    "url": "assets/js/79.3851e858.js",
    "revision": "8f7cbbc0d9ca9ca86e8bce48ec1b6a88"
  },
  {
    "url": "assets/js/8.084d3998.js",
    "revision": "1b4aeaef7517342317360e0307bbb580"
  },
  {
    "url": "assets/js/80.71d52d6e.js",
    "revision": "9569aedbf297d89a5b6b6244d361b5d7"
  },
  {
    "url": "assets/js/81.5149c6b8.js",
    "revision": "18d8db35fac1bee4e5198eb29e2d0db4"
  },
  {
    "url": "assets/js/82.7ec33ef2.js",
    "revision": "c87984f7b97f5ff7b53a6124c19f5c4f"
  },
  {
    "url": "assets/js/83.52d10d46.js",
    "revision": "4c023765d3fc451c5c8263adf1b87258"
  },
  {
    "url": "assets/js/84.25042566.js",
    "revision": "20dfb90362b868f532042d5078a79942"
  },
  {
    "url": "assets/js/85.7d7013e5.js",
    "revision": "9ba1cb559d40acdeb49d82153a2bf886"
  },
  {
    "url": "assets/js/86.f5a7c995.js",
    "revision": "ad2cc58cd189e3f0ba42104021cfedc1"
  },
  {
    "url": "assets/js/87.0f1316d6.js",
    "revision": "551d69116b1226a02556eac8856b31e0"
  },
  {
    "url": "assets/js/88.225c0a88.js",
    "revision": "df3f9e8578755e875868158f2d870630"
  },
  {
    "url": "assets/js/89.8cf4e0bb.js",
    "revision": "abe4c0a6078e8ea416c45512c00006d9"
  },
  {
    "url": "assets/js/9.9e510e38.js",
    "revision": "04232ea592c534391d1a2ae90742bc0c"
  },
  {
    "url": "assets/js/90.5e45275a.js",
    "revision": "0419580186519e5ef68ff183fb26efa7"
  },
  {
    "url": "assets/js/91.d9720dcf.js",
    "revision": "e19b4e0a7cf5be4291f6a4de032c68b2"
  },
  {
    "url": "assets/js/92.59881622.js",
    "revision": "e02f7f2cbdcba365b4b58ab6a61392d0"
  },
  {
    "url": "assets/js/93.2b8a6f8c.js",
    "revision": "4bae8d96d272d75668125451322ee072"
  },
  {
    "url": "assets/js/94.d71ddf5f.js",
    "revision": "a3b6fdfec78e35c36e13f3788c1855e9"
  },
  {
    "url": "assets/js/95.b85ef31d.js",
    "revision": "1002ffe33af6bdf6e5dd97096dc53d81"
  },
  {
    "url": "assets/js/96.d50a233d.js",
    "revision": "a1ee85fbe1bb82ea64607f82f8a60993"
  },
  {
    "url": "assets/js/97.554ada3c.js",
    "revision": "62fbc07752678e822b70a7ff00a43dcb"
  },
  {
    "url": "assets/js/98.1b81b497.js",
    "revision": "3eafd75e4cb50344fb0b3eef8db68b1d"
  },
  {
    "url": "assets/js/99.09e3d9bc.js",
    "revision": "d5bc9098229cf243b6d717616c685450"
  },
  {
    "url": "assets/js/app.ad8e10c2.js",
    "revision": "e103bb4e4071cfb81ea28715a0d7ddab"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "599fe1bf156d984a387b56a979e24c16"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "1c7d98c5bff586bde77070c7c6c66a67"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "ebef1fcaf363a432d740804984c21c03"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "7808b5adb2e30cd722b595bf229557a7"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "3130d16253b8722a7fce40eb1d8f67a9"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "137558f39bb2ae8ea0aec02923a64c74"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "c3ee43b98e81b8e87e66b78d3b337cbf"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "5f0d9d2f47ac6db6cf34774fc67ccb0c"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "eb4d33f01cdbf7f027a6b681e4f6cce6"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2ebe4d0870b5fe0c2fd53d89dba3da70"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "f51b1cc10ade6d49ae62bda55031e865"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "7191e0f00f5fbcd03f7fe583bc214434"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "bc8e167ba66a2ddb85f74bc14bef8784"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "0e33f61e08699e103e8cf4467829ed5d"
  },
  {
    "url": "master/api/index.html",
    "revision": "d4653e9ad25cf6cd8163cf5ea7360c20"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "2a7541b33a7a9db24bb29936c5a7a080"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "f3adc80f6a6eca751fcd59ea84f00954"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "4200a71887c36fe5db775df5d268d4eb"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "6fefea67519a427668b1fc7732a849be"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "a5108aacb087d5ce09e9ed59ee1d9d8f"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "2095f35d1e5800d8e17578ef5905a740"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "81b2f83a86e3447ed93e93a81361acbb"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "ffc3f73a10c7433ae7e0e05c1aabb702"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "1925a6da9a738754a347904cc1843e48"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "2ba1ad33b1ea534661496374eddea1fd"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "904e6c99ea580582636126853431e68c"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "93f8d4d2e702906175c75c9ddbef40ce"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "65f8cae8a78fa1f247297da37c5e6b38"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "02159263e7c099a993483162e22c5b81"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "ee7bfe6ed5e6759a685d317a4a5a7b48"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "9935a4a10feb9ce7841262b3c24df209"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "6cfce58ae882322b961550ad1fa46afa"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "cb68ce01b2c9a9d471d322b3948c5990"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "29a72f7f6c6713513e4fe291f6abbbbc"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "72baa91aab3e75704a118a5b5c8643c2"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "030152a743bbbd6e7d80e3e7f4a0de46"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "2a0a8db7a23425cbe40b0620a379f524"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "6eb1444ad4343850a18c2f8ad75316e3"
  },
  {
    "url": "master/packages/index.html",
    "revision": "cb854304c9f7d67daeb6ea0afd3457c6"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "19074133741756a2d5840873a6e4966e"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "917b3b408842a8ecd3930238ca23c56d"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "d596ab86045038768475b95d82370c87"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "c4f0d508a17ca208911bb05a334b6387"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "7d79aa3abb171ffb8f27c6be3551904e"
  },
  {
    "url": "master/packages/views.html",
    "revision": "bde324c95ace9156330f097eaf16e369"
  },
  {
    "url": "master/performance/index.html",
    "revision": "61483bf7955c5b20c09e7a72bb8abd82"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "3ce5a50f285e76aee0f6ac434d9cd160"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "6971fa6125fb87fb7c8d292798acae24"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "2cf2824ab59a781ebf4c5223023f167c"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "07f5fd392bc6e4521de013b13fd98ef5"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "3778bc945bb561a610b229528b974781"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "bffe578563c160bd1688848fefbb37e3"
  },
  {
    "url": "master/themes/index.html",
    "revision": "4bbe903af3a1f2d0dec88ae97ab1585d"
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
