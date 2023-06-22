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
    "revision": "347866950265b2d44bec6b256a066d10"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "8d4ba14761e230730b661062edf5ee58"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "bf5271ea1ec3a2c17db07fea5f206e2e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "ed9dfca2197b06d4a3fdfed7788c85d7"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "9d0b90bceabef2ce4c3180f811aa5576"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "ef8c12dcdf018aca5a07eb3b4379f5f6"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bde91befe4fb60b839bd726f388bdff6"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "20c7106cc7a14b0cec8f4bc28e7b874b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "cb55d2388f23e2975b7746b359c9551e"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "691c6b63dd3fdc3efe8fe89edac445cd"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "e5e09636af46603ed819fdf33994a47c"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "cc14c245f2339a1452c4510721c03479"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "beeb743074aef412df92429b706ed7d3"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "50e703a9e8e74b9346a4f27358c49ce7"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "d162006cbbc53d709561702e9ee97f5e"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "36b6c354b43534158665ed389d959506"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "fce9621e6744036ba973aaae9165b451"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "25824a2f34c8048854c05a016a461a33"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6175edeaf34fd432903cf6d00748359c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "9ef922b70f9fa977a6139e2f26c4eae2"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "c4d5f3916461de6f2d690e1d0875ef17"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "cb92dd28c10cccabf07a6bcd769a7c9c"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "0ff9a1cef49eebc4db037e82bcb339e0"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "74059d16c5a1044186dfccfa2b399732"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "a6d635c6d1c687b530c515957c310dda"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "003048555b8e449eb921667920e3c639"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "5944e87370dfdfd0d310aaa05bff1d6f"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "d910969a85cd62f1bd8875c801474386"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "edcde7c96bae1604a4f2661776946317"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "0041e5bb1f1366add4ba8ce7b79ef78b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "8f1c9ac733e8e7c339d49bd9dce3b183"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0908867bc7301d466a0af1cefeb751b3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ed4224b375c43d0c6fb0f86b7c5fb7b2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "9eca56a9c588e87d29d89db3a4dd56a5"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "8bf5c1578621d2041a08566c64f4cae0"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "70760b58c555a31c4e9dd947267a3f6e"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "518d13e3a29b32e7f5b4547cec67887a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "e1d31b44832dd570623caab19be4682d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "75985dca0ddd09bef29a941903bb40a3"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "31e878b9b1ab41154a1ffe3de37d1d05"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "4d59f200c1dee73a4015a3b6299b0efe"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "479339c5b6a89ede1edb0801dcf4bdd6"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "4edbcd0e226a849bc50c986541e22113"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "0e2540e4690e8f34f9780a028861436d"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "ae3137c7695669d697f41d1a81179b03"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "b7c72abf71a4f1ac7db4a6a61f63c396"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "bf4acbe4c3c65f269a0295ac2ea46d22"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "84ad27aa38a2f15b6ac05738a1d2e16d"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "d873afd074bf5dcf20b3bb8af7eaca83"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0a1c7185dd1e3c4ad45962bdf01d776d"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "865c8814f104badb7d1079d26774b067"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "59fc6e10828d698767c41a4e338685b3"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "64fc6283abbbf72958893fb426c3f42c"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "e87a4fb08dcb9131d88cdb5c17ec7ab6"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "092a739b451fc7d00f042bb7cab65cbe"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "a994d19796a65d88c527ab5353296ef0"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ae3ce3772e6783ef17297056b719b70e"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "692524fa736f4b160e93b5f4c5437445"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "91c61a6151b22fec8257e946cd226cb6"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "5abf57c581860325246e837bfdd5df7f"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e549266d75b0382165c5a31c53e87d47"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d026bb40fb76b0f18db872ed194e5f17"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "57fd12e83890075a8721b15cbfe525f5"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "74f57ec8455d5632c153a3631dfe7a9d"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1ff55040c12a12c0d02ca9a3a7ab6ba8"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "30cfc1397bfad223a3e24d6e5828fb4e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3b210680f3e12c07c3d372bb285431bb"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "aeeee58a4746b755d142db7b76f4a8de"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a820b7174e590af9087bfcf5dba9ebaf"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "65108b23a9c0148f98bd8bbded04e7a8"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "9bf1524190d360047f6b5c91eb73bcbb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "ad5231e21c98bf598cb4cd9645c04dbd"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "e1475ae99ed25264763b7abecf1cec8e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ad72924dbc394010c67d723e599fbc96"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "1760c06b596f688db4ee59bd04a4a003"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e07001a9eb4c3277c72cc8e955772afc"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "c5c0efe1bab7a5fe5e37c087b710a2b6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3b7106382e8983921287fff3dbed973a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5651333b96eb6a45a64dd63e430c095e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "791254b8314e49ccee8965db49fa550c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "4883d2608f74bae64a96fdd549f3802d"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "338d88cdade5219a5032cd20af860937"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "552de28e15ccf1339039b734ab2928ff"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "ab37265e4b29777d92860c0811e157cf"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "423121f139da72c3ace6f6921889748f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "6a9a22ae4cbf8a3fcb157677b76410ff"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "02ee86ab56e96eb0f45c275f1d022c5f"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9bb679c48f9f5f240fe13d9c7c938423"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d906a35d5c10a6e582189ce1537e563f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8cbd916b77429059b7cf2caae093ba27"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "1d57dd8a7adc165c3513a7d92830aa22"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f2d4a6439fdabc06b7dc93eb87df6b25"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0d588ab16850c950fef84ee37cbec161"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "57ab246875f981d9484bc0d9f775354b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "908a524b1fca9b9b94131946c688a286"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0907127fc2bbbdf1aef2db854239be32"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "41be621b913877a7f780faacb65599f9"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "589b40865c4c5b5f7596d337d071ec5d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "5d508b5663e1894a01239b359663d694"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "f924f60d544afc1082b01094df5959eb"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "6c1e1f07086839a5451185aab1fd2c77"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c30cb89bb0047480fef6a2ff88416f9e"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "980269f7faed8bdb5ca2da79312385cf"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "741f19dda71f8fb74e9cb45eaaa476f9"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c3530e48db717a9f57e02c1a13833abd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1d828c25c6006970c04e7512ef3d0f5a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e284ca08256e8ee6e38ed7f6e7ca00ce"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "ba0e85d890841ff3534727fe7e88b095"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c5b99ecbda1fe71ef3a5878371c7bf29"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "231363f49b304b52d4fd0a78d699d653"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "3e40d987be9711096de9034547bc47d7"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "db58d860a7e6b76c61eda39387a01582"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "9cdc305f6dd1798a0730c686b26634bf"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "4d071b2fe6561c7a5f1ff95ef9b59f2d"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d5c2cc36585d4da7c9aa34f6fe97a5db"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ff1f6119e288b8157ca1c0cb46f7a864"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "c41ff5157947665c91c2074f1d3991c8"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "19f101d7e9d722558ef1d5fb8db05d71"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6bd77e030c57f9b7c1e5cf362704f92f"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "8446514f0c175637cb5033bfee2c645c"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "10d574c15e715da1656bbc857d79717a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "1c1fca2873fe7c039c58a947aca51f16"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d6d03df3b38eaa1ef55954208fa16090"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "ea423f425b3f8ec82088aaa4ef9454d3"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "15a725ce1e74b84a5a24e205610ea9d6"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "5e615bce70ad93e9ef2cbc3d9b2fb6ea"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "48eead2d4496bc56ce42a0cb0983b7b1"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "cd8d6e8144e4a48043be473c80039872"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "80e5c196e0b114392dcecf42e6d063ac"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "51328bf1fdb84faea58a3c49f5a8a067"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "72366c1ce5271863303fc64f3bde8463"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7f833deab890683490e1b0ea3e06bc38"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "608a91ae2bc6c6597eb713adb3c52b6b"
  },
  {
    "url": "404.html",
    "revision": "2487b99135597316fea2adf9003c52d0"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/js/10.35857dd9.js",
    "revision": "d8926842eae3f5215a8bbb0acaf6d131"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.39b97480.js",
    "revision": "f463125bc489c171f0169aae14bace47"
  },
  {
    "url": "assets/js/103.54b28125.js",
    "revision": "d56e9095d9c5b474917b9f7f6c986623"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.e56cb48c.js",
    "revision": "facbf24c679e8dd61b4c669f9192816c"
  },
  {
    "url": "assets/js/123.98208e2d.js",
    "revision": "5d30a7e713013943f3161f79bd96f008"
  },
  {
    "url": "assets/js/124.d46a6ff1.js",
    "revision": "35915afec1700c1c53a596a40a9795e0"
  },
  {
    "url": "assets/js/125.5d1aebf6.js",
    "revision": "700cb9ea3ee6aca1078b1a0ff028b292"
  },
  {
    "url": "assets/js/126.b6c0a43b.js",
    "revision": "35d3cd64dc03120bed82a3703c2df549"
  },
  {
    "url": "assets/js/127.7d788e70.js",
    "revision": "ef447b237ea69012c33fd7e5f2bc9548"
  },
  {
    "url": "assets/js/128.397daf1c.js",
    "revision": "9f9e2160b7355bb0fdd54f5d26859983"
  },
  {
    "url": "assets/js/129.41094fd6.js",
    "revision": "8c72e1123ef0ebc8972b32b2c5ec1260"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.b5f0ae77.js",
    "revision": "76d9ce1bf58fae6596f41fbb2a58a2d9"
  },
  {
    "url": "assets/js/131.638cd64d.js",
    "revision": "525f520b62fae3c9bed1045a05602d0c"
  },
  {
    "url": "assets/js/132.ba5be34b.js",
    "revision": "f2b8e9779943c721ca2179a083151015"
  },
  {
    "url": "assets/js/133.d76f69e7.js",
    "revision": "dfb406b0d88384974a0ab0b3385f9f7a"
  },
  {
    "url": "assets/js/134.d00e08b8.js",
    "revision": "143d1999e02069bb81b2cdaaba849333"
  },
  {
    "url": "assets/js/135.e8192cae.js",
    "revision": "15d9d73f6b5fb13b39dfc353688a966a"
  },
  {
    "url": "assets/js/136.2198d49a.js",
    "revision": "894d8ea54261a5bdaf04d954c9c6f089"
  },
  {
    "url": "assets/js/137.e98ba6b8.js",
    "revision": "db82179545011c34ed2263fd4160a7f0"
  },
  {
    "url": "assets/js/138.f17c4e3e.js",
    "revision": "fa663be490408b8f0f0a40444aa0de73"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.7628eca3.js",
    "revision": "017ba794fc6329291188bbbf4de1d286"
  },
  {
    "url": "assets/js/15.70d5b891.js",
    "revision": "30ec4c9bf57bad9ddc1d27b252934412"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.6b409cae.js",
    "revision": "17329bbd323d46c0f0c86da7d465cb71"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.725cd654.js",
    "revision": "21f0c4850eecf46973a5331fe0b8c4bd"
  },
  {
    "url": "assets/js/25.412a25f5.js",
    "revision": "3534430e578f67bc013b9bbe35fe5862"
  },
  {
    "url": "assets/js/26.fa5e707f.js",
    "revision": "ece3f82f5d0b1f887c21f5fea27afa9a"
  },
  {
    "url": "assets/js/27.e61805d9.js",
    "revision": "776f64bf452983300e7d1690676928e2"
  },
  {
    "url": "assets/js/28.f1afb74d.js",
    "revision": "b32e9c90dea4f57671778e6552b39387"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.dfe0ff5b.js",
    "revision": "53164525c23476780843740853e8033e"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.2fca18da.js",
    "revision": "aed3be91b8c692b74e3da31f9cbb3ec5"
  },
  {
    "url": "assets/js/32.4e227cba.js",
    "revision": "af50fd45457a1ae144481f570b87ad9d"
  },
  {
    "url": "assets/js/33.eac14764.js",
    "revision": "aeab27d0d593ab5fb7c21653da3e1792"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.113b7809.js",
    "revision": "e2f20ba9efbb7ee0f3c1d1ffe96a7ddb"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.6593db50.js",
    "revision": "3aa7cc3c5d46244f4224f415bcbe635c"
  },
  {
    "url": "assets/js/42.029317a9.js",
    "revision": "70b870d905a0f3ef25becc3b9009d97a"
  },
  {
    "url": "assets/js/43.22419c5c.js",
    "revision": "8cfe5ced4d8b9529a7d2aeb94b8da706"
  },
  {
    "url": "assets/js/44.70d14f9c.js",
    "revision": "ec0dbc5e947fe7beb056a86fc6ba4cf7"
  },
  {
    "url": "assets/js/45.0366dca4.js",
    "revision": "34481c5a445d972df9e689c4e723192f"
  },
  {
    "url": "assets/js/46.3bfffe01.js",
    "revision": "068e6d85acb4dcfe7c1ffb5f6a268415"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.e2bb9210.js",
    "revision": "19761ad5ee888300ea9a7fc5eeac3660"
  },
  {
    "url": "assets/js/52.a228f13b.js",
    "revision": "232befdb6b1d81b18ab79115e440abbe"
  },
  {
    "url": "assets/js/53.54edd495.js",
    "revision": "8165ebf9cb0abc258b8f270d95abad6b"
  },
  {
    "url": "assets/js/54.23f25432.js",
    "revision": "0799448220981d0024027afea62a23a7"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.ae39f307.js",
    "revision": "d90c21fe5a6ae119e14b83a54271c2ad"
  },
  {
    "url": "assets/js/68.5b11bdc2.js",
    "revision": "d638ce181504c21d6aece752ff1e2e56"
  },
  {
    "url": "assets/js/69.eee9ef7a.js",
    "revision": "975152695c11ef424f8f2aabee1d1f6e"
  },
  {
    "url": "assets/js/7.9049a077.js",
    "revision": "53834182605b48b573632d362e937dc1"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.706a1926.js",
    "revision": "b79110e05a6f1bfa6dd0fec0577ad9b9"
  },
  {
    "url": "assets/js/73.116eb797.js",
    "revision": "75e7583241c2551d581e78ea7e2f3f0e"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.067a2bd1.js",
    "revision": "c47c4bafb7bffd279df450f9fbc3192b"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.2aeddb2c.js",
    "revision": "d217b8f7a07c45ce99e7ee990c5b9b94"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.32fb8aa1.js",
    "revision": "68c7583cb8d1b74d2797fa07cc6bb7f1"
  },
  {
    "url": "index.html",
    "revision": "b08b481fff32a58c8a5fe53944cddc27"
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
