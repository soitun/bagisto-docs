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
    "revision": "857787fa52d74e35eba6f29fb879e170"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "3ff5e8dea7e4caf022dfca0a6900638f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "031bd23678d43eb85cdb534dfd18e6b4"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "c4de26721740cda051e8fe5dc89c8860"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "5ddf2e4df33a868001c5d6fc9aa7add0"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "818b7c7fceec40a419a0414e60a812b3"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "0217e4fd8d664b9eb2c4bb2e6bee7492"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ee1066d146889799a9812cd2efcb6341"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "7ea2f1ebc056714b8d5c8da9f0caed25"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "416c67b52e132f8bf05aa8fe3ed0b184"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "52cb2ce1d656f3d3390095d9aebcaa01"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "aa5d643b9a14c13a76636d70746ec383"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "398fead4261b63ba7eb6cc1d8547f954"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e9353985179bc795f864dda68dc054ef"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "9211a7623908532eaf83fb2e37db84a2"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "dd798d85900da8dfa44237313f700fdb"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "f64d7fb68d500f0fab10d514162eab7d"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "26f7da39f1e17321a44427425cd24470"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "1c9beb211e25b5fda442ba73585da851"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "c08de7ae32b491134dffe6dc8417a39d"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "a2710ba278dc7d4eb14284a1275f8094"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "5b6e13c60ea20e0c67abc26fe0c40a32"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "e29d9d24c4fdba3b3387e746d1817bdb"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "736be4f68786b10447b28105b0b7b792"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "af12e17bcd1605d6cdabd1c718e40e5e"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "645da43d362f3ffd93e22f3f94e9f0a7"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "8efe96a8c194cda7208e70f7f47cee07"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "4abee220f7288a9ce6dba01b923c41e8"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d7b58a42763bad14f0434b75c2ba3d99"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "1e2663bae09d5585dec391b355759211"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "f058c80b092fe7f95745b257c04f2feb"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "985294a60ac6e09ace34aef98c9d31dd"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "9cf35d04de52d403bd1ca9f1331bef2a"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ab9b13d56085013d3a66660ed2d7425d"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "d033baf97a38c159c4a4546113c74327"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "37c43eed7ba9b24cbeab883593e436d8"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "c11da318a7827475e8d3495b2afef622"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "0e5ee1079c99cea563c382db5fbe4b68"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "8715a54e3ea22fb8fb4613613263d1c9"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "0944598a63c8a9526a052a2214dd71a7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a54bed14e735a62337e583259e734002"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "49eddbc912ac2f613b901195b9370d53"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "9ff689f47e40e6953b4b692e626a1931"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "768e0dc628c6cc4ba1a314cc61a38ccc"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "85ba03ccd64d6f2764ba4e3c22654e79"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0805348f6063bf6ab723d7385a6f6aa1"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "cdca811e55f8ac1c45109b05be7c9095"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4be296c53bedf0a42d06b77283ce8167"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "f78b3af7ae81837fba2fd5752f758be9"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3908caddbe00f8e3033c66cfbc62cc0c"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "a4d955ad1a85ce4ebe92b1446c6b2e33"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "71c4fd2d0ebafaed93169fb93f0ea7b3"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3c77463cc0a1054641c0f1a18191275c"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "9364bc6d5d13511759cc2fb747e9b0c6"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "5b3f1acf0e2c96268ce88b24cedcf149"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "4dff37e70fb4b22697b344a560fc08b1"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "31fc6c7e99955a009110d1bdad43614c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0dfa2febfa94fc9c1e5e60834385b66f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d5e615f682a22b1c8af845851b6dd7e4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e2f0c82426baaa7101856af7e0c47068"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "4da6669aa1e387871501c0aa4359101e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "edc3091c9f6dbdee17b2ce89a6da0db6"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7f874e66d53387774d0587840a6d65ef"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f38369be309f668878a3e755e34a94ad"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d8fc0e3dfc5ae4cf12fe51101648ff31"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "fc8b8c67a6e366a73d67c18eae640c60"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ff9626c7f96ce422b23b776008f58f27"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "fba428dba9ea2dbd1515185b664c39be"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c5253409eb0e13589b1b1e020c05565f"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "2a3859587e78fd8af7206786cef8914a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "cc4bf04f21def7820d0723d55704211f"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "26e252bb26f046f87e5e97eadc8fdb5c"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "554e9526a0011847c972fc6d46dba3d6"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "0b3f9465d4e57cd31da141fcc705ab07"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "d67ab24a0dcc10fc608982268828fe80"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "744b96066174f6ae9506e58f0043c542"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f89c701881c3548a31ebd282f0077414"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b82e665b8d81d7dbd0c49234e3938443"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "70edd4e23bf9c8786625e2cf6d272790"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7a94a2e5cd3c1b42d61bfd99e12102d3"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "ccefdf5947582b6836aee046c61b7538"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "7c0ef0a88e2593129e21372926f6bd62"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "c1e918c45a9ed88ce3d647a77954c307"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "09e4fb29d3a13541be0fe3e08a48582c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4af5b655e5a7188f609a0500d05e4aec"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "d9410705bb1986e34e31b33ac5688b3e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f718469ec8263ea148ef099c55439828"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "eed0999a2a4e643886f83263f775a404"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "77dc41c8c709f8d9b914a62e862abbd3"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "78c600b43246111c6f5c78856b07db6c"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "31daf50dea4759d0d64e7b9c5054d999"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f738712bef631cf8a33ae43041498a7b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f3b77d2e5c20921407ade058a45d5613"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "cc4569f4c479d3b2f299a5a7511135e7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b158ca829f299c801e7cfe0ecf802aa4"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "efb2143777fd7bd206bc399eda0bc863"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "9cec2d42ca26225637fa14d9b0fe1f05"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c1a2de26af79db9b0636e191e9a24cf3"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "dca688de486ece2d85cafdbaa3b6b284"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b9dbd2303f708da39ff4795a4c48708f"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e0732c7dc70a289da9a9d755812660f2"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "a294cb9ebc29e5ffd245854f2709cb15"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "9d012c6fc6bc2fcce4ca3e7590686936"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "867c5fe4c1e17ca2be81b1cfa108d460"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b9bc9f4f1429ed7552fc26256084feb5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "8ef1eb0b5a9764588bab28172880982c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "156474c6541b4dbbc3b08c0cc723841c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "46547f1444440cc5cf0698428aff49db"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "844185753a026f9505548b7f4fbc4359"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "232acb43e10eebbf752f163771bdf27c"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "21712f1e8a97215678d61d1fe294f425"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "bdc2fce0bac0c7161987b616a3f6053a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "69de85f83a4ddc9dc2379ffc27433d10"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "285c010142f61dfce894c048b2571f73"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "8087faa1ead85e42f0da2b5ad68877da"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "44a275fec70831f66bf7e2ef534366af"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "7931815fae31615b2975b8c7f8256f8e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0ffad73abc6f9420c8a90788f0d3faa9"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e2cc4ec118ef98d95596e73925dbe7f1"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "2335559234ec18e04642e917d8d149b7"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "92e18bd62d8bbf8ea2fe3dd9cc3e2f14"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "73714c1906edaf2403d611acdd389766"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "c4c6c4de1a60b44906b3c1420974c1f1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "54ca804ff32e2cdeeb0d866ba0f005a1"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f0f25cd6f87f25f3e4bae2b4cf8e4201"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d5d1e83eb408643b16845d1fcb18ec59"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f4cf844162e76d7b74e6e3496999cd41"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "6bf0cfee53d7f4595053f7c15e46c452"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8644d3eaa1175b26fcab9f238d65c4e2"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "84916a85a4e0d68ba8770b057e84ac01"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "703c25b7d58f6b19e30b12f54024d2e5"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "429b4f23be3b431767f4dca037826dc1"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "76e7275b25f8f0c943decd754492d75c"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "5aeb7912c02cfa71dfdd483d0bd95061"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "1698fc73a9277610e3938dce1b1ec629"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "448d751716ca70d02fba8cc23cc8423c"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "b4f6845cf3b2f574a21db07d74b6723b"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "0bff0f7c4328c67dbb76a4f9346b222e"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "80e2d334a8327375d9e4863e2af001f4"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "761d5167f1fcf7874caaf20103860039"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "22bf7b994f3f160cb8128da95253f570"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d46d5bd8b7dbbdc70c56e3f0db121519"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "d6cc058e659fdf490aa8a15fb01464e9"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "9ddea85cbe64a144104d4bb9c608a3d3"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "315f7bbce13f72ccc054e9bf71e2dace"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "da188c93aa9f9721186b66e453eedabe"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "ac1be81c8da77fb5f8ada241553bf156"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "6afe527788f3a9540313a9b172994f6a"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "91ec5da054444d0b4f305e1f32ab4569"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "2fc5cc6c7aedd259a9a6e4dff1edf64a"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "309a2ec730468a61a70ca10e2a6fe15b"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "77fab04f9be23a8945f3b95e7b64a5b5"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "28276ca0f0409f14d08784318c6edb41"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "a675cfb8374f446b93aef39cde21c93d"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "0b6e89e7729fed65398ee9e5c600ff6b"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "ad9f249296b37ddcc54c2962cfa33ebc"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f4464cab834d447d17b4a34c3a52b476"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "500ff17559e2b1ce877e8cd599ee6658"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "8361701b3e20b73febd78b72128ef9aa"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "0d25c2ae22a8de6f177337274dc0502d"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "6c0e980f11742e46cb1fcf9ae2b1878e"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "3854e86f941fd2a5afd968d06bf8aaba"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "ee6aec5fedf58b748ef7e344caa05d2f"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "47c58b5e54b4437e8d11b3da1bb04d78"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "9fde2bf2b60bd24fb37df7088aac5f1a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "46bcbb5746e04634c9944dc00ada4654"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "c5c85413f9d58e1b4e7cbadafa85adb2"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "7ed144affe503fb44e634a1b4dad853c"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "13e0e0da9821ef5e818b01a5884f1d6c"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "6e1353d49f01b55eb47131c138369fab"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "f7353f9b4243758396f8cc51f0d58918"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "5400737da390621269688abf1a793c09"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "07fa06c15986fe6f32f2dcfa0ba5010c"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "8397d6dbefdf7daff045e9ae3d6add21"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "d31c60a8710a5333e504e1fa82e7be27"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "0458c571178d6938904304b3b5faaab8"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "b58ed37a9bca953877bdb3054e9a1765"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "357afbff166664b1868014ff9586f173"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "2b846c3325f633f7418526288ab555ca"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "cf05af9623f7c095c9e3304c050b36e7"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "0d2bbbafa7241dd5264131b719fcf89d"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "99b45422cfdec2c1d08a51cb928a0545"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "c43be7dd59f8d25bd61ccccbe6620890"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "3e83833896a923dbf05f0bd78dd5291f"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "72161ed79aec898e52fdbabcbe0fcf95"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "fac3d3e3aa0d8bf58bd782294e425180"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "a0c4eef1b48dea313d5b1d28d8d0d9ce"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "4b86d65e81846531e7be9ad40c31b2a1"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "6ac1f673dc98d2529415047a975672a5"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "7baeb8b456e58e45a4863eee0bbc4100"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "e48fa13fc2a04a1f00f90c255e924059"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "d3eb50d26a1d7bc9500395ee713822b1"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f1b75e9bfd25ea8d94f267bd749cfba1"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "47b225d76ab792ad415b28acd92e5d4e"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "05620faf7bc902c6203aa00f4b4e6b37"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "039b493f920636a89e36e6f5e9ce2c93"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "f9505e466a978d5117503a2780258844"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "51e03f61a47d2c8822bd0c6ad9032ddb"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "496e0b4ca21f79dfb3534b2641cff167"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "7bcf7c38d0d6770b624aa7089aae03ac"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "9c1a814c5ddbafcd31f4beeaa5a07965"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "1897fa42e95f1f38a7208609341eb047"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "fa9a942f8afe1b1a9d802f4d89634519"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "09e395ac7f05eeae3304a68b91d2ab2c"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "bfcc499dc3f03fff084a124b032ac274"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "3a0cd27f3724e8034942b82e14327054"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "bcdc445f7b8a3abf412cd525d8f90c63"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "12e1267dfe5103c9dd485d6302df133a"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "50272eded38698c7e61abc77ebe89a18"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "2a46b8aac345f22fed0343d37a74c064"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "198473f311667cd67647cfb31a159e5b"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "5b22369ad39818b7ee99e88155acad3e"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "0e7c1e04ad244b5c4059fdcd05285719"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "3fd259885681ff348cba03ffed4cea40"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "3df5b6451debcc0ae3826e00da394159"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "5f587101084c3f93d37a9d83fb76432a"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "922ad35209dedd57f0048cf26a61298b"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "b9309c00e6ccafd67e94c8fa50cfcbfd"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "44313bab95723e19e98c7672462e44c8"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "ee8ba24be281b4b6f25d1ff67767763a"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "db5e5fbe36bc2ddddfa212a189e275de"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "2b94471ad1125adad98550ec92c23921"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "46f3baa37829fef639b2472e561e46d5"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "23f1097b93fb5edd7e1fc2f2bd06a065"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "5b0c7ffff45438ee7fb8b667d3b63aad"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "fd9205c125c4228f1db1599a8442b653"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "6f060b356182c84e7677ac197f1cb1d7"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "fa27daaa1e6fce82f6b046269f999736"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "ae0aec04ace01ce67bcaa65c6076ba2b"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "372f07aaaa3f266225c523b6d1554d68"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "354c3842dfe8bc1c965ef7082ffc1241"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "fef4536a2ae68ccebc1313274c61fc9d"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "0c8a032153cfd17c8ec1e5fb64901db0"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "3b6128484064a8fb5f9a6c4c61b2d0d1"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "9b1b29bad2a788a31ed67e091f96f1f4"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "defbab01d94a9f3e93c3cce4a1dba229"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "580f9b106d64521e209df267372ba659"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "f10fdbeee1e9d0762a623c8f0d708a40"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "94876af91853cc9c270e92fa31e8abf7"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "0880865571729b953006d90004e722d8"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "ffbb48f557391c5e046f8dc5db8262c1"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "9b35a950e438c43445d095b4b75a7f43"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "e7482bb2020c35c4966c12242b8609cb"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8dececf57c6daab1297cb5743cafb44c"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "6dc8f270f38eaef47331a1028968992f"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "7eabd2f199545ab1cf620c40b4df93b1"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "f8d65aef181cbcd71a2350e068097d89"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "f83d4b8f70838b4f32518d7c3237e2d5"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "92ddc9f81bd5d347da1af8e111ef3a6b"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "b9c0755721f737ae48a852dd3bd443ab"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "9ed026b49e2f7dcf91c0c966e7db10a4"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "5c4db48530ee270e316d6cc42ef46b34"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "c3c2138463a100f01aec5c7871ed6a74"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "0ba36c9c8af0b87e7539ad8bfd72ed2b"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "1c6d81803ceae91a73db0fa236ac43d6"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "629264ed64bee8a2aaf033b7ebbdea98"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "ce5232ff26eb26387bafa6b18ca780e9"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "3636221a2d37ca38bf7c9b43e526b959"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "af32f4439233befcc2c64b91909d5b65"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "5b0408239f710c789003aea440f56064"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "e3410cfec82698ca426cab7188301f0c"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "ab023fc2aa3b1087eb708eaae58cf952"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "936d43a218d8305ef70cd026ccde43ba"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "1eed0d3a2d61202e2a2e845864c5ea47"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "14ed8729c15a2a4b9bd0714cbe6d98ee"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "b0fa75daca806e3e61ca065b92fa9439"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "774a0aef9531992c096cd7fe86657c50"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "08833b0e9224a3eb2be18a5c6dee41d2"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "9c7d5b1a05feb81a008fc43af757541b"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "87ee43f4609a3bca9c88f92a23ddf0c8"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "d878b3ab63ecb13afec51493f45be66a"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "06b0a0ded385423f8908906652e6a423"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "a8524ad9c9e65f23b571f31e3838de04"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "5eaed4b3ad02a2773bc679995b8a0e97"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "604fa9bce45f3afd8c3915de8913393d"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "5ec8f49070068e3b0d44ab3f689f6d9a"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "1c537bede6a7a659e115fe6299bbea14"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "ac65d907a347b15dcfea19806ba9059d"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "10eeaf4705cd4de3b8480260367f4967"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "bba07150ab675e396a968bb7d38fa59e"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "76ca6a7cb9276360b8dc254fb4cfce3b"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "5a4b0e4cf50464a20c360b0355c0870b"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "9f27e02c6f8320c7011369f58d864beb"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "51827d5d8371e5b3051d17a63c9283aa"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "dfe2c29b48259cf9401cc46e2cf82879"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "ce8950a991683118eca95b6a6e1fd7d1"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "ce56e44db11abcc27dc1367f822fd271"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "272de6d06b7cfc8f29f00804deb56bbd"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "61c5fdc476f85107530e64c69542591d"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "57b254c53ac74d29a451960ec7700b35"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "797f16a856f3ede3edab1b5e66a026a5"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "633defad4401f1009ff8716b55cde160"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "8e1a3cf11e2930d9f8a45ad2dc62a334"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "fad67f24778b3e82519f2f9df73def21"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "789bb4f5f70c5ca6679931f88a455f69"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4fa809e460da3d2ab45d9c60a3465959"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "664e47272f41b41b923f96d6ab7c120f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "c9a88a4ad04c304b6603c1b9351cafea"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "2b45778b4b1c268fdc26f47b013239b1"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e5fa0fd6694ac17e830ce003fc5744bd"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "befa186d0a4548214bdf927f1aa0af0c"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "963529e063306330a784f8719cf2c72a"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "3ec6a65f8e8388eaec43246d6008d193"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "bba48666dba08c3bf27d54880504dafa"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "29a42f111f17bd41f9573d9c7a72cff3"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "01af825b6472ca638906b84222ec96bc"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "55752506645147ca819efb4ab64cdc39"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "a222bb709fd28c1ce57e845bcb523a81"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "e9258b7cfd829442edea2bc69109c751"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "0d0e35fb7ac2aad7e857f5401d6168d9"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "171a30285c365f4cf57c19043e4ff932"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f29bd839755011d5d70f6ae9f7927e42"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1a38b02a6961c235a1c6bbaf71f317bd"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "590bef32c402d507a33fc76e02de32ad"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6763385e24eaa975b28b30573c133b12"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "095da3ae5473b7bd4a4b5f83b3edf19d"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "7b2c3c6f9410029e25db6d487d83983e"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "88fb7ed7a69e7d652543fb4e00078205"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d3d4bfaa956becd3473c85aea8bd3686"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "9253a98a3606441e91d8f8e58235fa4d"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "52bf5cec83fc6b91bee9a5c7c31a511c"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "044b9318b3b274eb4e70bbefdbd272ee"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "2278a4b6d4716cd19f4179dd53cd8ead"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "e4cce24fb997127757fbffdbf606f70b"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "d60162706b04da1149f26cb81899b3f3"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "18287642ebc69c94d6148f502884c541"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "a67ead250ed4dbb40258969cbed6768d"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "93ec6b2906f4a42db96e204308a92fe6"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "83555012ef60d9ba5676210afe4c1da3"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "8a57e3c2cdb982ab1a44034322f4e023"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "8b250161cf9047a96e39b80b0410eea0"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c08b7ecbb28591ec941312d23e360aa0"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "9575c887d1bd881c7bfeb811b7796714"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "d2bfe21b65ebd25e2b8bb5bb26c298aa"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "18e82255bf0ead5fa2050a013eb5a149"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "4db6bb75188535d7e34e145c6c105034"
  },
  {
    "url": "404.html",
    "revision": "3a5ec208246eb39d3c1b5bbe04a96f40"
  },
  {
    "url": "assets/css/0.styles.3d1d61bc.css",
    "revision": "baf1cc885fa1c46377c9ed839e36ea27"
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
    "url": "assets/js/1.021e46c0.js",
    "revision": "e5c22b390b8f5e5779a225d7c5301cae"
  },
  {
    "url": "assets/js/10.67471ae9.js",
    "revision": "d02041e69b3a45ffb05623f17c813027"
  },
  {
    "url": "assets/js/100.d5ef738e.js",
    "revision": "8a5da43271d88d19e4f625016967b854"
  },
  {
    "url": "assets/js/101.6ff048da.js",
    "revision": "fa24277d2c22cb3ac2e2b000a7717b57"
  },
  {
    "url": "assets/js/102.1938b81c.js",
    "revision": "d8d71fdc8508bf063d7846363520768e"
  },
  {
    "url": "assets/js/103.ea9a1d67.js",
    "revision": "c423abb1db7a899c728acaee8d01e05c"
  },
  {
    "url": "assets/js/104.769155eb.js",
    "revision": "2cf6cd7c526a31a4883561f9e08b3829"
  },
  {
    "url": "assets/js/105.a91e6ce4.js",
    "revision": "598aee0b5adec5d56f0adfea4b072772"
  },
  {
    "url": "assets/js/106.db72eefb.js",
    "revision": "abe91c1d01b024381fee61180eacccf9"
  },
  {
    "url": "assets/js/107.cc0154e6.js",
    "revision": "3a6ddb207866ebfc973173cffe1cc63d"
  },
  {
    "url": "assets/js/108.4f1f2769.js",
    "revision": "cb0cd874408c961201f443a5b666b78d"
  },
  {
    "url": "assets/js/109.affacb76.js",
    "revision": "7ef50bb1b52b6e4954510a6650709994"
  },
  {
    "url": "assets/js/11.f5133473.js",
    "revision": "0dcd94ccd4d3b2005840404512f0926a"
  },
  {
    "url": "assets/js/110.ca0209dd.js",
    "revision": "03d5475ca3a65e3b1a66200a131e3af7"
  },
  {
    "url": "assets/js/111.fc5b522d.js",
    "revision": "b875867ec3f6e182c79faa61fc78802c"
  },
  {
    "url": "assets/js/112.62e83f82.js",
    "revision": "18a878ca74b3ce7a4fc44a57a7b0ec11"
  },
  {
    "url": "assets/js/113.f50d184b.js",
    "revision": "90d154f5526c5a3cb9042f1eb5a3758f"
  },
  {
    "url": "assets/js/114.44760740.js",
    "revision": "250a58a208d4f085f6987bf6347f6005"
  },
  {
    "url": "assets/js/115.f60d7b5d.js",
    "revision": "3f5abad9ead01a1831aaa8fbefdb3786"
  },
  {
    "url": "assets/js/116.7b823a87.js",
    "revision": "742d62a97a2b126fccd2324703cdda8c"
  },
  {
    "url": "assets/js/117.b338062d.js",
    "revision": "01da7bd01711ca207d982dbadff0bb5f"
  },
  {
    "url": "assets/js/118.cb1cbcee.js",
    "revision": "71499fad7871f16d6b41104dc4cc8956"
  },
  {
    "url": "assets/js/119.605f0d32.js",
    "revision": "976e9cf52607f4c352a1d95ba89468e1"
  },
  {
    "url": "assets/js/12.be9d797c.js",
    "revision": "f683223f8f8ba53fcf96a2c3af9edeee"
  },
  {
    "url": "assets/js/120.ff33d3af.js",
    "revision": "cda1e66f9ecad0f732185a7416137ec9"
  },
  {
    "url": "assets/js/121.d51ccb8b.js",
    "revision": "2ee3998a1435451210f729369ced5ef8"
  },
  {
    "url": "assets/js/122.f7bd6f9d.js",
    "revision": "26210c3fdbf795ba4d019373a5edb4f4"
  },
  {
    "url": "assets/js/123.f9215f40.js",
    "revision": "cdf0011952669a2ba558a372dc80dc75"
  },
  {
    "url": "assets/js/124.6a636f8e.js",
    "revision": "0dbe51321c914bd41a44b47d699b5eb1"
  },
  {
    "url": "assets/js/125.fca0df25.js",
    "revision": "b6fcf98af80299bcf6032aef02bb955e"
  },
  {
    "url": "assets/js/126.4780be76.js",
    "revision": "ecf20448e647f5e9de971a65c69bf3f5"
  },
  {
    "url": "assets/js/127.29920d77.js",
    "revision": "e8492555e6a28a93cafe2471ee7c1058"
  },
  {
    "url": "assets/js/128.a613a421.js",
    "revision": "6eecf1900b92565d5054865fd57d01c1"
  },
  {
    "url": "assets/js/129.e0f49df7.js",
    "revision": "d8e60a86022c669500c4569ef3d25bcc"
  },
  {
    "url": "assets/js/13.bb4ddfd9.js",
    "revision": "a312e82a899c1236e0ed09f230943413"
  },
  {
    "url": "assets/js/130.371aa458.js",
    "revision": "2b0d0ab40c095c107283aa094a469a0b"
  },
  {
    "url": "assets/js/131.c3a0667a.js",
    "revision": "fad9a87bde4720651ab88ae78d2de533"
  },
  {
    "url": "assets/js/132.87cee678.js",
    "revision": "f6c0c6fc0001153a9166597eace94db4"
  },
  {
    "url": "assets/js/133.d68a08b3.js",
    "revision": "5b133536c6d61f7f3cb1a310a2030249"
  },
  {
    "url": "assets/js/134.85e9d243.js",
    "revision": "29851cb15cfc3f10df20c76105beb152"
  },
  {
    "url": "assets/js/135.65591a5f.js",
    "revision": "c19e123b090ecaa14784f204d6d116c1"
  },
  {
    "url": "assets/js/136.ef9d802b.js",
    "revision": "04d8cd83c51aea8814a0aff5f2614378"
  },
  {
    "url": "assets/js/137.3737ae02.js",
    "revision": "d9a94fe2a2ffb606b14b5baf959b1ec6"
  },
  {
    "url": "assets/js/138.c50d1e8d.js",
    "revision": "874e6535dd83b99f51c7a94498574e20"
  },
  {
    "url": "assets/js/139.a309d15a.js",
    "revision": "32f462ce851919bc3a66579a5de8ff8b"
  },
  {
    "url": "assets/js/14.50e7d9ac.js",
    "revision": "49efd7e27fce3043a4f04fd7808a1c8a"
  },
  {
    "url": "assets/js/140.a890f13f.js",
    "revision": "74bb115f0c05ef1261f6febc1e31973a"
  },
  {
    "url": "assets/js/141.fe726d6c.js",
    "revision": "9244222ff8a1303e044db158aef888d9"
  },
  {
    "url": "assets/js/142.6961152f.js",
    "revision": "f05f12168d7519e29c43b1dd7436f323"
  },
  {
    "url": "assets/js/143.d9144c67.js",
    "revision": "c5d9dfb0e0b8b86139bdd26d2f82d85c"
  },
  {
    "url": "assets/js/144.37983958.js",
    "revision": "9b42e258319f295d443b833d31eb5a5e"
  },
  {
    "url": "assets/js/145.ec624a61.js",
    "revision": "b603f233b725495cd16370f0dcc3ad06"
  },
  {
    "url": "assets/js/146.2730a6ca.js",
    "revision": "db3d8b1efcff51d4e1d1e12ce3e7ebfb"
  },
  {
    "url": "assets/js/147.cb6652d0.js",
    "revision": "2b3c4a0d9a4221d46465fef6d2792ef7"
  },
  {
    "url": "assets/js/148.9d84d4b0.js",
    "revision": "20ad4a99c765f1c98b9872c1b4308be0"
  },
  {
    "url": "assets/js/149.f4fc34f7.js",
    "revision": "ab42c03126bc3c7c34ee7df9f863dc12"
  },
  {
    "url": "assets/js/15.bb9e7c58.js",
    "revision": "73532e52ac5f782453b31e458c194f4a"
  },
  {
    "url": "assets/js/150.cdd25cdc.js",
    "revision": "6d2d02c9f9a8c4afbc909c39e2dc90e0"
  },
  {
    "url": "assets/js/151.64b6972a.js",
    "revision": "91b3a5dbf7e836ca28e5d2acfb2f1a23"
  },
  {
    "url": "assets/js/152.ed46b5f5.js",
    "revision": "1cd928e3c4023216c1fe8d86b78b3d9d"
  },
  {
    "url": "assets/js/153.7bbb3315.js",
    "revision": "4f992f6583698bcb192d4515c126df1d"
  },
  {
    "url": "assets/js/154.e2797b90.js",
    "revision": "abd3678c1ea6f1a80fa31a159e578c5d"
  },
  {
    "url": "assets/js/155.07a069f0.js",
    "revision": "c29b7577a109f0d6713fd3f761798d70"
  },
  {
    "url": "assets/js/156.c692396b.js",
    "revision": "d4af885d9a30a0b37644b32911b3d389"
  },
  {
    "url": "assets/js/157.1dd8f5f8.js",
    "revision": "75159f294a88d13794cf4dc2fda24247"
  },
  {
    "url": "assets/js/158.a4516f75.js",
    "revision": "6d3c59186e6b23d18329899b558ffb9f"
  },
  {
    "url": "assets/js/159.7c513efd.js",
    "revision": "d5d2b8ac8859036a17680312a5b344aa"
  },
  {
    "url": "assets/js/16.c165c27d.js",
    "revision": "1f7e4ca4688f96d8d24c6bbf94cf3da3"
  },
  {
    "url": "assets/js/160.276c0f22.js",
    "revision": "fce31ac8e1fc14d720d050a9863f9e77"
  },
  {
    "url": "assets/js/161.63f83db7.js",
    "revision": "7129a29bd296f01152a77a2a05b2b8f3"
  },
  {
    "url": "assets/js/162.fd5bbe50.js",
    "revision": "46dd266297b9891aa0588f88fef8d3fe"
  },
  {
    "url": "assets/js/163.20307714.js",
    "revision": "e9086fe374bd7a6148e6305b90eb75fb"
  },
  {
    "url": "assets/js/164.0eb7d796.js",
    "revision": "6c9a50cb6461301ca13c8919e770aa85"
  },
  {
    "url": "assets/js/165.e6f8a926.js",
    "revision": "fd32e38d43266038b02209d32b408bf0"
  },
  {
    "url": "assets/js/166.b0cd9a1e.js",
    "revision": "da5deaf54d2dc8d3b599133c0eb608bc"
  },
  {
    "url": "assets/js/167.fe399ef1.js",
    "revision": "d0a6c2bc4ba850f905ed117fe17be19c"
  },
  {
    "url": "assets/js/168.9a8dbb4e.js",
    "revision": "7bb5d21c43f9939c06b879bd11ac6edc"
  },
  {
    "url": "assets/js/169.e5586a04.js",
    "revision": "1624223ae7c455f21455a45d39d09329"
  },
  {
    "url": "assets/js/17.0ae6956f.js",
    "revision": "c4b1991289b2f837f27a121e62bcd725"
  },
  {
    "url": "assets/js/170.14db7b0f.js",
    "revision": "1676d903f956be0dc561aaed45a5bfdb"
  },
  {
    "url": "assets/js/171.7b176900.js",
    "revision": "5d826824068226581de40348eaa91498"
  },
  {
    "url": "assets/js/172.c3827b36.js",
    "revision": "93e189c0a32cdc3c6f95913041eeee11"
  },
  {
    "url": "assets/js/173.a88e32d5.js",
    "revision": "51c19d51eb3849792f968f9d8b9d56c0"
  },
  {
    "url": "assets/js/174.a4465f33.js",
    "revision": "cef0d1f611ff12a5d624b99f9373f4c4"
  },
  {
    "url": "assets/js/175.29358502.js",
    "revision": "ce09bfdddfb29257b13b71079e4c5a73"
  },
  {
    "url": "assets/js/176.de76a474.js",
    "revision": "20f04cc36dcb84cd7dc68891fa86dd43"
  },
  {
    "url": "assets/js/177.f43ecb5d.js",
    "revision": "ca785f11ad4539feff96d6c65dc9c64b"
  },
  {
    "url": "assets/js/178.a5d8677c.js",
    "revision": "b1de29acda72be2aac5f57822e2865b3"
  },
  {
    "url": "assets/js/179.9412873d.js",
    "revision": "f31086de234670e2d1ac1abb840dc383"
  },
  {
    "url": "assets/js/18.3f9a7565.js",
    "revision": "90a53f46f35f9f04106f5b0f572f8362"
  },
  {
    "url": "assets/js/180.de0df72b.js",
    "revision": "6a8d48108bfedb5f8b223b30bc41f044"
  },
  {
    "url": "assets/js/181.05c0e59e.js",
    "revision": "ba79958d975b806f75dd33bdec5fe65a"
  },
  {
    "url": "assets/js/182.cc5a71d5.js",
    "revision": "a0d08de945121e72dabe832db32b2f51"
  },
  {
    "url": "assets/js/183.1d214f21.js",
    "revision": "73da4d68d2fb15ffe2d012c1532a9cc2"
  },
  {
    "url": "assets/js/184.6eb6c009.js",
    "revision": "84e18f30347b3217f6329fd22311ff30"
  },
  {
    "url": "assets/js/185.eebdfe48.js",
    "revision": "d687ea011142dc61bda49382b6336ebe"
  },
  {
    "url": "assets/js/186.ccedf064.js",
    "revision": "818f4812d18a10e2d83f5b1b0a5e73dc"
  },
  {
    "url": "assets/js/187.e97eac88.js",
    "revision": "5619b96c5b9f903aff1d8b26ea3fc47b"
  },
  {
    "url": "assets/js/188.d4fe8b4e.js",
    "revision": "97117d5f315f9c780371e3366086fc07"
  },
  {
    "url": "assets/js/189.0d2ea26b.js",
    "revision": "e13f4ba579dd7088c6e91fbc6e55d8ab"
  },
  {
    "url": "assets/js/19.2ac5e4d6.js",
    "revision": "03c5ecbfa2d2c767472b6a7a681c67fd"
  },
  {
    "url": "assets/js/190.6fe0a495.js",
    "revision": "840c36376f90ab1b1ff8cc7c7ecbd1f4"
  },
  {
    "url": "assets/js/191.f5dc61af.js",
    "revision": "7be489d8822300cdd897a1861962dda2"
  },
  {
    "url": "assets/js/192.3841f5ee.js",
    "revision": "b766c317f620286bd6d96157c7e2f351"
  },
  {
    "url": "assets/js/193.e48a875b.js",
    "revision": "cd0a9a7b955a6fdf11a7c4cdcd9ddfe2"
  },
  {
    "url": "assets/js/194.d55d2ed4.js",
    "revision": "5ad35d80fa10a628676078a3c7c4a273"
  },
  {
    "url": "assets/js/195.48318b45.js",
    "revision": "b04c01a7a4177994535f1d0ffda46639"
  },
  {
    "url": "assets/js/196.2dc82ef8.js",
    "revision": "6edd5963afe135b290b30ec6cd629b22"
  },
  {
    "url": "assets/js/197.60469af6.js",
    "revision": "3f3d3b1eaa5d9d7301986c3d32a77710"
  },
  {
    "url": "assets/js/198.8a96cca1.js",
    "revision": "fe984d28b0af373748adad3620f4ca1b"
  },
  {
    "url": "assets/js/199.41e863b0.js",
    "revision": "7512130db3a2b889cba9b1c468ac1d64"
  },
  {
    "url": "assets/js/2.f7936bec.js",
    "revision": "f7d4dc902790b5387acf43ef0144e949"
  },
  {
    "url": "assets/js/20.f0a94760.js",
    "revision": "4c4d0d2b85f342cbe260ce561b7b6433"
  },
  {
    "url": "assets/js/200.465f012a.js",
    "revision": "251918fca4a82582ac866810139348f3"
  },
  {
    "url": "assets/js/201.abd131e0.js",
    "revision": "392b5366b172d4a37a352df0786ae50e"
  },
  {
    "url": "assets/js/202.5d4a04c1.js",
    "revision": "a4e2202853d6b12733b7ce79be74cb50"
  },
  {
    "url": "assets/js/203.574a36ee.js",
    "revision": "e4ec9fc15c6fe6f5792edd5f2bb9b8d5"
  },
  {
    "url": "assets/js/204.2812e722.js",
    "revision": "de6388ba88abe81592ad1f7b524de2e4"
  },
  {
    "url": "assets/js/205.af8e0479.js",
    "revision": "3e5257e0384d4801f42019a1a903353b"
  },
  {
    "url": "assets/js/206.580ba386.js",
    "revision": "4127de22e35c1157db390d7ed526a2cc"
  },
  {
    "url": "assets/js/207.ec4787fd.js",
    "revision": "91e26f519039996c8d95f10b3aae09da"
  },
  {
    "url": "assets/js/208.c3319469.js",
    "revision": "05824201f08b9aaf5bc40322d7fa3e7f"
  },
  {
    "url": "assets/js/209.0d182309.js",
    "revision": "3277e60acc39cd7cec7db87a5981fa24"
  },
  {
    "url": "assets/js/21.3b8a6e88.js",
    "revision": "85b734848cb0c36487a8a60b20942076"
  },
  {
    "url": "assets/js/210.f666e1cc.js",
    "revision": "5af0ce49d4a8f41ee308e52d53fc6de7"
  },
  {
    "url": "assets/js/211.cb7ab4ea.js",
    "revision": "fe7bde5de440bfc92d9ab4b3c074ebbe"
  },
  {
    "url": "assets/js/212.2975c57d.js",
    "revision": "a32230ae6ad649223e72eb6be655780f"
  },
  {
    "url": "assets/js/213.53c16893.js",
    "revision": "cb2a41a0ce90b2e9109e4846d2724f27"
  },
  {
    "url": "assets/js/214.b16eeabe.js",
    "revision": "4292eb96c9136d1731a1cae63a5c5d71"
  },
  {
    "url": "assets/js/215.847628a9.js",
    "revision": "c1611a7bbc1ce4fd55bd3d5fc0695cfa"
  },
  {
    "url": "assets/js/216.8c9be820.js",
    "revision": "4f0072e3681a66af9046ca4c3b584f86"
  },
  {
    "url": "assets/js/217.581fb603.js",
    "revision": "05d79487eb362d8685135c695013e8f3"
  },
  {
    "url": "assets/js/218.a6eb1024.js",
    "revision": "9abbb94af8f0c64eb1970bcfe9b1a0cb"
  },
  {
    "url": "assets/js/219.83fe0cdc.js",
    "revision": "e19310ef1e05c4ef2af5ed8293e16a39"
  },
  {
    "url": "assets/js/22.22786b8e.js",
    "revision": "007d4d456df22e94d842bdc858d40ae6"
  },
  {
    "url": "assets/js/220.0e3e83f2.js",
    "revision": "45257c429c0ad311ae9d8e8bedb15bf0"
  },
  {
    "url": "assets/js/221.5137d19c.js",
    "revision": "217e71d400cbfcaa11692a9cf9c8f84d"
  },
  {
    "url": "assets/js/222.5fd53288.js",
    "revision": "a92740c3eae6808372e4ed5f71704658"
  },
  {
    "url": "assets/js/223.0c652441.js",
    "revision": "3ed48ea06787bb17ee5876d321626d20"
  },
  {
    "url": "assets/js/224.3d255740.js",
    "revision": "e48ab2cc2b9ee0b25bb6f4f76d3d6f61"
  },
  {
    "url": "assets/js/225.039694a0.js",
    "revision": "682c9ae1de17105e9147e25f4565d59c"
  },
  {
    "url": "assets/js/226.f1e6927e.js",
    "revision": "801be3e74a04b94d8dcd17ee457af44c"
  },
  {
    "url": "assets/js/227.5821a2f3.js",
    "revision": "24b98fb57fd1d0c33c3903f37b47834a"
  },
  {
    "url": "assets/js/228.72d6bb27.js",
    "revision": "151c3b5260073e226916e8e791b0d51a"
  },
  {
    "url": "assets/js/229.cb9060b9.js",
    "revision": "8056f2051d4b32392afcd11c7329fec6"
  },
  {
    "url": "assets/js/23.5cf3f4cc.js",
    "revision": "aa1add24a9e47c1545ab5307afeafbf1"
  },
  {
    "url": "assets/js/230.2105ddc3.js",
    "revision": "84e4bcd1c1fd70bc28b28ff9cd677678"
  },
  {
    "url": "assets/js/231.dbce3172.js",
    "revision": "fd602b8a7890c46cea394243f00e8a5f"
  },
  {
    "url": "assets/js/232.ebea8343.js",
    "revision": "a6ee93867f4edaea62328528634ee30e"
  },
  {
    "url": "assets/js/233.04b37ae9.js",
    "revision": "cac83fac73ba99a0bc38887a49c719ab"
  },
  {
    "url": "assets/js/234.02825076.js",
    "revision": "dbbd006b6c87dd522f6fce62f7f7cd64"
  },
  {
    "url": "assets/js/235.8fee6089.js",
    "revision": "a19a539cf03c9da0f8ff74b86cc4fcbe"
  },
  {
    "url": "assets/js/236.28c7e49e.js",
    "revision": "5f27cc6e275e32bb535d3c44dbdcb874"
  },
  {
    "url": "assets/js/237.f0b16056.js",
    "revision": "a99d4e14405b7edbccad11ac3148d78d"
  },
  {
    "url": "assets/js/238.0cabbbc0.js",
    "revision": "8300bd4438360720a4861ce6dfeacbf1"
  },
  {
    "url": "assets/js/239.2a1305f4.js",
    "revision": "b8948692a0de1fcd7415e73ea80b01be"
  },
  {
    "url": "assets/js/24.a1475623.js",
    "revision": "db154183cb5e5a0b886bb2d18004f2a6"
  },
  {
    "url": "assets/js/240.ab082894.js",
    "revision": "2b98092dfc4906e4a701b573d6a46b95"
  },
  {
    "url": "assets/js/241.87a31f4f.js",
    "revision": "3ed58e24dbdb0e6f7d39e7349243236b"
  },
  {
    "url": "assets/js/242.37e45a3c.js",
    "revision": "3a8eb1b35ac51124ece1fcfa45abb443"
  },
  {
    "url": "assets/js/243.849b3523.js",
    "revision": "19cf17180f9960ac94076492cba4bce0"
  },
  {
    "url": "assets/js/244.3d4b229d.js",
    "revision": "0aee34027ab48def22795a3be6b8dc0d"
  },
  {
    "url": "assets/js/245.0ef3e3a8.js",
    "revision": "fbd53f9d8687ea6de49f7c30ccb995c1"
  },
  {
    "url": "assets/js/246.10362ce3.js",
    "revision": "0d25edf15d088ea54d6fbdb69e5236db"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.cf1f6153.js",
    "revision": "fc426058cc04972b70332758ad152bcc"
  },
  {
    "url": "assets/js/249.836cda0b.js",
    "revision": "47b0f6669be5415121c8c83c05adb3bc"
  },
  {
    "url": "assets/js/25.6434c65b.js",
    "revision": "c392571cd9758ae5904e26155f66bcd2"
  },
  {
    "url": "assets/js/250.d94568c5.js",
    "revision": "f98d75b2699a6bf52fd1ae2b9233fe48"
  },
  {
    "url": "assets/js/251.068b9411.js",
    "revision": "a0481b9d5f4aaacab957e7a2f1bce2e9"
  },
  {
    "url": "assets/js/252.adbdc2d2.js",
    "revision": "47d15137048d3104142cb6879094bd27"
  },
  {
    "url": "assets/js/253.4716f2a5.js",
    "revision": "2239a0be39ac77ff9f17da2952c5fa4c"
  },
  {
    "url": "assets/js/254.510f9944.js",
    "revision": "8d519052b46ec32ed0279d3cc8c1db2e"
  },
  {
    "url": "assets/js/255.d8553243.js",
    "revision": "62ecb94a3f914aa1cfff3d68b10d5622"
  },
  {
    "url": "assets/js/256.8d54c2ba.js",
    "revision": "a283d7654d31647916570e8b41c25df3"
  },
  {
    "url": "assets/js/257.38196d33.js",
    "revision": "8c52d8dfd273cd3e7d2f8d6daa7317c3"
  },
  {
    "url": "assets/js/258.5af58c29.js",
    "revision": "c81800f67e802bdcc09201251514ed0f"
  },
  {
    "url": "assets/js/259.428e10fe.js",
    "revision": "ca7dc1e1f630267ef623bf702e632647"
  },
  {
    "url": "assets/js/26.68b58c10.js",
    "revision": "c9d70f516e90cc39d79204b49b9c9699"
  },
  {
    "url": "assets/js/260.c5194600.js",
    "revision": "8dd874322dfe0360e5fa87baa85a2dd3"
  },
  {
    "url": "assets/js/261.044ea9a9.js",
    "revision": "2868dc62f3ab4e512a3a9a3a33114534"
  },
  {
    "url": "assets/js/262.161b2ab4.js",
    "revision": "faf479999519c0dd4b51998f784c7f40"
  },
  {
    "url": "assets/js/263.377ae942.js",
    "revision": "7e2b9d22ab6c885f1006810b493a97fb"
  },
  {
    "url": "assets/js/264.3ba10def.js",
    "revision": "0b16339869b0b3758eb9237eb8c0a17c"
  },
  {
    "url": "assets/js/265.7f7bf87f.js",
    "revision": "e751f1657962c1569fe16d7f30d39b80"
  },
  {
    "url": "assets/js/266.46dab7db.js",
    "revision": "2277e2d59883f95d5a2c5be4b9923d4c"
  },
  {
    "url": "assets/js/267.b693fca2.js",
    "revision": "64b42d09927617ca8a3b8395f32fe54c"
  },
  {
    "url": "assets/js/268.27912df4.js",
    "revision": "aece73f87770b7242bd112791f375c6b"
  },
  {
    "url": "assets/js/269.5193641a.js",
    "revision": "a917cd58dd669cbd8e2d8919f24d6608"
  },
  {
    "url": "assets/js/27.8c94e1ca.js",
    "revision": "4682f4818db8fba5347d9158327b2dba"
  },
  {
    "url": "assets/js/270.297e24aa.js",
    "revision": "9b1c7c192a1d44690308db6136e04c6f"
  },
  {
    "url": "assets/js/271.b5f3e24b.js",
    "revision": "1b95af28a8045a1428347db53df4f807"
  },
  {
    "url": "assets/js/272.d32d7f80.js",
    "revision": "d50b231c8985b718bd95cec01278a868"
  },
  {
    "url": "assets/js/273.9e0b617a.js",
    "revision": "5c8846506c72d347b7040b49bc349be5"
  },
  {
    "url": "assets/js/274.ca482333.js",
    "revision": "d3e9ac93bf7b40d347dc1d17df155c2f"
  },
  {
    "url": "assets/js/275.e9e86c92.js",
    "revision": "53b1e9d50a994349c5b1e8890506eeb2"
  },
  {
    "url": "assets/js/276.50bca504.js",
    "revision": "2819219b4a4c8c516fc202e6442939f8"
  },
  {
    "url": "assets/js/277.c2aadbf2.js",
    "revision": "26375c5d9478ba99660f196ab116f76c"
  },
  {
    "url": "assets/js/278.d50371fd.js",
    "revision": "b41c09d1960f3184a5af04365d765bf6"
  },
  {
    "url": "assets/js/279.d5377012.js",
    "revision": "bbad53e2975f03713cb2c75b159fb2f2"
  },
  {
    "url": "assets/js/28.eea55e31.js",
    "revision": "719e7ae35ea21fd39ae541b367d8bc34"
  },
  {
    "url": "assets/js/280.c22da6ab.js",
    "revision": "bbc64b6ff87d3ab0ecbf11ea490cde42"
  },
  {
    "url": "assets/js/281.d3e18a3d.js",
    "revision": "f770bad918852e5a217156bc8c464d08"
  },
  {
    "url": "assets/js/282.f66bb3cd.js",
    "revision": "65fe8365b5a2cbedb691b9919864403e"
  },
  {
    "url": "assets/js/283.f9ffc7e4.js",
    "revision": "b1af6ff8065fdb580dad121f52eba609"
  },
  {
    "url": "assets/js/284.c98d0c7a.js",
    "revision": "4b64f83ac7e748cefcfdc7dc55d34f8d"
  },
  {
    "url": "assets/js/285.a224b7b2.js",
    "revision": "d6c7a15b77303f72ac8df467ec9f79d2"
  },
  {
    "url": "assets/js/286.a289f091.js",
    "revision": "2b003fd7e0aa29473e6489af1c28e6dd"
  },
  {
    "url": "assets/js/287.2a3c5061.js",
    "revision": "5e62d3fdad23fd4d5518c4840b994099"
  },
  {
    "url": "assets/js/288.aa9404bc.js",
    "revision": "a6ca046b7ae0ebdd703a8ead6f62a9ef"
  },
  {
    "url": "assets/js/289.f93b2a50.js",
    "revision": "6b8a74d0c89ce96e0ef77209aa541173"
  },
  {
    "url": "assets/js/29.8b96d9f8.js",
    "revision": "f0852648a1fba3c725627155ced1c870"
  },
  {
    "url": "assets/js/290.f4fadccf.js",
    "revision": "6cea12a6e179a2283695e000657bd4d4"
  },
  {
    "url": "assets/js/291.0ecb5251.js",
    "revision": "2d3060b1eb3055cc48b13748390acefe"
  },
  {
    "url": "assets/js/292.7b1e2027.js",
    "revision": "3f72aa9fc4b8082fb683bf2a69c3b41c"
  },
  {
    "url": "assets/js/293.d5dcf114.js",
    "revision": "962f6d0d17f809eb254fd5e3eceeff84"
  },
  {
    "url": "assets/js/294.6bcf50c8.js",
    "revision": "2b7bd9d99e559323556d7d73f81c08a2"
  },
  {
    "url": "assets/js/295.10b91031.js",
    "revision": "18d62fcfa54200d293d838dfc4923512"
  },
  {
    "url": "assets/js/296.38a7deca.js",
    "revision": "6d2e1f594252f5eb530e12234fd2a539"
  },
  {
    "url": "assets/js/297.4ad9a065.js",
    "revision": "88f19db9e13db251e261d29f4f7ae5bc"
  },
  {
    "url": "assets/js/298.5e0f27f7.js",
    "revision": "3b7db2be363e144f0e738d4332f26922"
  },
  {
    "url": "assets/js/299.639c15fc.js",
    "revision": "88ab7a8b1ed66cff4d36fb24e41b6398"
  },
  {
    "url": "assets/js/3.8a5391bf.js",
    "revision": "c92b2f23759adcd5ac423d0b58d9bd75"
  },
  {
    "url": "assets/js/30.bc7688e3.js",
    "revision": "61e53c401805239db09283765c4a0093"
  },
  {
    "url": "assets/js/300.de0f7521.js",
    "revision": "f0d34979a28f38ec44f13686092ee095"
  },
  {
    "url": "assets/js/301.341321e0.js",
    "revision": "3fce8601ff4dd2124b9445dfb6beb5a9"
  },
  {
    "url": "assets/js/302.9d024e25.js",
    "revision": "ea4dc9c756d0d8b77bef5bb930f22b97"
  },
  {
    "url": "assets/js/303.538f2faf.js",
    "revision": "29b92a05f326695e80b50b5157e2592c"
  },
  {
    "url": "assets/js/304.afd62b7d.js",
    "revision": "93c54a4ccbfe214753cd889151e62107"
  },
  {
    "url": "assets/js/305.95eecdaf.js",
    "revision": "ff94e0848e2998b9b469827b2b22f7bf"
  },
  {
    "url": "assets/js/306.9c0c46a1.js",
    "revision": "de71530e198ad4aa7dbf520f5cac4027"
  },
  {
    "url": "assets/js/307.663a00d7.js",
    "revision": "f5886ca625238c2152dabe298e76564d"
  },
  {
    "url": "assets/js/308.97419ca9.js",
    "revision": "5181d01146a43feda27c4b824ee19941"
  },
  {
    "url": "assets/js/309.ee1a214d.js",
    "revision": "f5d2a8f355052d1d6d9f08e0d53fce8a"
  },
  {
    "url": "assets/js/31.4e8c5564.js",
    "revision": "4630e2ab99cd56d37168fd29912b827e"
  },
  {
    "url": "assets/js/310.5ed86ec0.js",
    "revision": "f08b364a4b9f8a1c764033413b9d7b92"
  },
  {
    "url": "assets/js/311.6ffaad02.js",
    "revision": "f487ac0c59d4cb4e224d9165e84781c1"
  },
  {
    "url": "assets/js/312.bbf0e1bf.js",
    "revision": "c280e549c6504ec2c19a174e75b05360"
  },
  {
    "url": "assets/js/313.ca70f14e.js",
    "revision": "c0764b2c9b79f2c946bf5f60a5f857a7"
  },
  {
    "url": "assets/js/314.bddc9a91.js",
    "revision": "62f20f4e89c2f5802f9165c0fe54449d"
  },
  {
    "url": "assets/js/315.f8fd4600.js",
    "revision": "2201a92fc038e15bf11cefb83605e74c"
  },
  {
    "url": "assets/js/316.513260b4.js",
    "revision": "0eca6662a1832d8ccd839cea7d6918e5"
  },
  {
    "url": "assets/js/317.b5e9730a.js",
    "revision": "b436ba4d918037e21483c439d9722ff8"
  },
  {
    "url": "assets/js/318.fc3b1078.js",
    "revision": "5d5933ce04188dec6f948eda39638cca"
  },
  {
    "url": "assets/js/319.d30a8051.js",
    "revision": "6f9815288ac387f8f34bd9d7b2680efb"
  },
  {
    "url": "assets/js/32.83162794.js",
    "revision": "d013b59837aad68c82eeeee05a99a2c2"
  },
  {
    "url": "assets/js/320.6beadd5e.js",
    "revision": "4b7554676a1708d419748ffe19e4f34d"
  },
  {
    "url": "assets/js/321.9e5dc080.js",
    "revision": "784c9e150da4cfb4bd2f89cc4d2a1da2"
  },
  {
    "url": "assets/js/322.e976d030.js",
    "revision": "8b611d35171cffc821f2aa49995d87f6"
  },
  {
    "url": "assets/js/323.03806fa2.js",
    "revision": "eb2695dbb4cb87fba2a9dccf0bd63e4a"
  },
  {
    "url": "assets/js/324.8f2a7237.js",
    "revision": "6ec83a3a047a3ce1df65721735bd2232"
  },
  {
    "url": "assets/js/325.e60b44cd.js",
    "revision": "f8c45ca114fa726fa1d8a78452f951aa"
  },
  {
    "url": "assets/js/326.1e484b8a.js",
    "revision": "6b96b802b2a3f2b7c0c7795aa91a7967"
  },
  {
    "url": "assets/js/327.b2a3f9a2.js",
    "revision": "d1f3a512382b399ec850c206d90935f2"
  },
  {
    "url": "assets/js/328.df8f1cd5.js",
    "revision": "73aa89f8088a5478c1a697d02e82ad20"
  },
  {
    "url": "assets/js/329.272cf730.js",
    "revision": "def7ab9a0cc78a7050356489e1180e33"
  },
  {
    "url": "assets/js/33.d0c985db.js",
    "revision": "0a0f8873c104200b85b3d613a05cb5e8"
  },
  {
    "url": "assets/js/330.06699b63.js",
    "revision": "19867e330b33fb0e27c505aa73f199eb"
  },
  {
    "url": "assets/js/331.4bb5bd72.js",
    "revision": "bdce61a522b8261a5a0698c86e39dcf1"
  },
  {
    "url": "assets/js/332.eb74b28d.js",
    "revision": "df63058437c256d7f1d3649237f4dcb5"
  },
  {
    "url": "assets/js/333.821ec829.js",
    "revision": "89ebbd0a2996f9623f82cd0b9cb7a7c5"
  },
  {
    "url": "assets/js/334.4d0ac8bf.js",
    "revision": "1d1ea1e93514ca5140c69cd5940badb0"
  },
  {
    "url": "assets/js/335.fa83f837.js",
    "revision": "8ff7d0e9ed2713b99b74e6db2667f69c"
  },
  {
    "url": "assets/js/336.25b2de72.js",
    "revision": "a5a8edf8f1363b9f0a9478827bf5d262"
  },
  {
    "url": "assets/js/337.c2d9f19e.js",
    "revision": "7e046e4ce0cd9eebd2260bd5867796d1"
  },
  {
    "url": "assets/js/338.5439a664.js",
    "revision": "a49c5cc94851ca5a4fa83b9c3a3807b7"
  },
  {
    "url": "assets/js/339.a5bcc507.js",
    "revision": "ae5fdc9df8cbfe65019ed064f406ebc9"
  },
  {
    "url": "assets/js/34.aeb4e440.js",
    "revision": "1b63172f170f069052086bb11790b793"
  },
  {
    "url": "assets/js/340.0fb34b81.js",
    "revision": "6b8707373b58816fcd7b23fd41b35509"
  },
  {
    "url": "assets/js/341.eba54a56.js",
    "revision": "84885e3562834509002e7045ed041e61"
  },
  {
    "url": "assets/js/342.061421a2.js",
    "revision": "040354fd78d8b501c48b7029d4b72577"
  },
  {
    "url": "assets/js/343.349c73b5.js",
    "revision": "fe419c1af283e4573fb1d2eec57e987c"
  },
  {
    "url": "assets/js/344.d60ce517.js",
    "revision": "212f399e4743514d6cc0788604232ef8"
  },
  {
    "url": "assets/js/345.2c1f1c0a.js",
    "revision": "685ef5b77a528f638a873bf89ed1ae10"
  },
  {
    "url": "assets/js/346.2b012920.js",
    "revision": "d269cc7ef1d036bee4e582f8cd20e727"
  },
  {
    "url": "assets/js/347.3a6616d4.js",
    "revision": "0b901578b10377c8f0f845f16403d2e9"
  },
  {
    "url": "assets/js/348.6bed73f3.js",
    "revision": "552cdf7fb82aabac42ba10e2857deba4"
  },
  {
    "url": "assets/js/349.1fbed663.js",
    "revision": "585deb47496c2e0c2f9e15c3db99a665"
  },
  {
    "url": "assets/js/35.70e5fd7a.js",
    "revision": "61d500337100e8d11a66a8fa08c65165"
  },
  {
    "url": "assets/js/350.acb86927.js",
    "revision": "afa05cb4b6ca3e3c4526345fc372e313"
  },
  {
    "url": "assets/js/351.44be1bd5.js",
    "revision": "c1a1726cb6da3427d95685195d215234"
  },
  {
    "url": "assets/js/352.76b800b6.js",
    "revision": "8e99b4f94c773ca12d7621a57eeaf7d9"
  },
  {
    "url": "assets/js/353.0bf85baa.js",
    "revision": "b11505a99fb8417e5b36b3d4012c9001"
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
    "url": "assets/js/356.a0d9f8ca.js",
    "revision": "719143f711cccd7436baf8e602348978"
  },
  {
    "url": "assets/js/357.fbb35b95.js",
    "revision": "1a9e2eb89ce12f796604e8c0eecf60ee"
  },
  {
    "url": "assets/js/358.8a977cef.js",
    "revision": "a9b21efbbfc42e4bf06399f8d25de32c"
  },
  {
    "url": "assets/js/359.be7358d2.js",
    "revision": "b852197b5d1f23a20cc1f16e4a3d4753"
  },
  {
    "url": "assets/js/36.ec9d485f.js",
    "revision": "bd3e4a03c2b4a063cd88c89edbfd4e81"
  },
  {
    "url": "assets/js/360.da18d751.js",
    "revision": "92ca6c5ed39c388b20604d702ca3e7a0"
  },
  {
    "url": "assets/js/361.206db589.js",
    "revision": "0761b4e430a29e58b446665defad053f"
  },
  {
    "url": "assets/js/362.bea1402a.js",
    "revision": "1361c51b671421f232cc19c110e69a51"
  },
  {
    "url": "assets/js/363.f0a00dfa.js",
    "revision": "791ce794bd43b54afe841f30ed7d13e5"
  },
  {
    "url": "assets/js/364.aca76f6c.js",
    "revision": "fe337f95e5243c5a82dcef2db5446306"
  },
  {
    "url": "assets/js/365.2fcb2b46.js",
    "revision": "924e76fe51cd31128269ba49fb5ccc9f"
  },
  {
    "url": "assets/js/366.facbbec7.js",
    "revision": "585d1eaa97b4aa01d429c13c4522b377"
  },
  {
    "url": "assets/js/367.3a2ef9bd.js",
    "revision": "a7f751cf930c0fa539b0962c53afc778"
  },
  {
    "url": "assets/js/368.50673802.js",
    "revision": "3d927e978554323e50fb8190a9668e3a"
  },
  {
    "url": "assets/js/369.62cec6fb.js",
    "revision": "6039538613631e2fd5429e1f59b53f47"
  },
  {
    "url": "assets/js/37.c8d4dfde.js",
    "revision": "052d8765896f5d5e2718744479bd024a"
  },
  {
    "url": "assets/js/370.df14cd8b.js",
    "revision": "8a819ee36e6c2c28041912951a3c0b55"
  },
  {
    "url": "assets/js/371.f719ec69.js",
    "revision": "fb4f064138ec20b52d3b2c73bc032537"
  },
  {
    "url": "assets/js/372.d8918846.js",
    "revision": "17fb0329ad14f86936cc049e73b472f7"
  },
  {
    "url": "assets/js/373.885ba4bc.js",
    "revision": "1893b719627c9f984b03f150b394ed25"
  },
  {
    "url": "assets/js/374.ade4e754.js",
    "revision": "44a11561a8eee346772e4ce517bae9e9"
  },
  {
    "url": "assets/js/375.566fa268.js",
    "revision": "e309af7922830c9269c5f8f3bb393798"
  },
  {
    "url": "assets/js/376.8200e5ec.js",
    "revision": "d6d5dbda7de46b515d8da732ade716eb"
  },
  {
    "url": "assets/js/377.f8d21ae0.js",
    "revision": "7d2739cc7195935ffabd6354a97b1b46"
  },
  {
    "url": "assets/js/378.ff7cd8c5.js",
    "revision": "1a3749955592c8770d30a6189a71fa8b"
  },
  {
    "url": "assets/js/379.49c50fd1.js",
    "revision": "3849b8e6aa64b7d0ddce3cc9bde762cb"
  },
  {
    "url": "assets/js/38.11a9932d.js",
    "revision": "d25e8663bd8b86c7a50199bcadd680aa"
  },
  {
    "url": "assets/js/380.cc351cbe.js",
    "revision": "113a0f07e94dd0d29cebb39d695a31d0"
  },
  {
    "url": "assets/js/381.ebae4b14.js",
    "revision": "80d07dddf66f6c934c807479457d2173"
  },
  {
    "url": "assets/js/382.c4e4db2f.js",
    "revision": "5bd8f0caa6c7158697d6f904b4085a03"
  },
  {
    "url": "assets/js/383.9c599947.js",
    "revision": "5ef1eae7041976f6d1484e763370a6b1"
  },
  {
    "url": "assets/js/384.c7dd32ee.js",
    "revision": "3b42f6dbba86c6f5897a4160e9ef51bd"
  },
  {
    "url": "assets/js/385.286035a4.js",
    "revision": "e9f4daa66f0c5a369b3846738c266b20"
  },
  {
    "url": "assets/js/386.aa9c43ee.js",
    "revision": "19cf8ee0bee5be97d93d0de72fb6228e"
  },
  {
    "url": "assets/js/387.d4ee7a0c.js",
    "revision": "cb33e3fa10b623661fffc02b315a0482"
  },
  {
    "url": "assets/js/388.5972beba.js",
    "revision": "d7de4b1a4ed1f5a7b980f0c29560d22a"
  },
  {
    "url": "assets/js/389.f35088fc.js",
    "revision": "673dc281a7a1b5d1a81d378ccd801c38"
  },
  {
    "url": "assets/js/39.7e9e34f7.js",
    "revision": "1d58d7e602de50f3328d652cbad712ef"
  },
  {
    "url": "assets/js/390.c2ec3769.js",
    "revision": "04b75eed6595ce6851d1ebb7feec90c6"
  },
  {
    "url": "assets/js/391.bcea98df.js",
    "revision": "7e2dd30b150988e32b50e6653bebf275"
  },
  {
    "url": "assets/js/392.90977dbc.js",
    "revision": "a68a38afb5dc26ae1f858b57f6055028"
  },
  {
    "url": "assets/js/393.cbd2d828.js",
    "revision": "abec9cbfb7806f8ab74022c8d9f740b4"
  },
  {
    "url": "assets/js/394.c47b46c5.js",
    "revision": "32787c660f72faeec5c468551adb6dad"
  },
  {
    "url": "assets/js/395.4d9451cc.js",
    "revision": "1228a25d4184448145d4e81c5e85e040"
  },
  {
    "url": "assets/js/396.34c6a44e.js",
    "revision": "97058733b95ac8423833edeead2ccb39"
  },
  {
    "url": "assets/js/397.eaa0b901.js",
    "revision": "391bc365e7a7ca282f9f967d58e14373"
  },
  {
    "url": "assets/js/398.cef0f13b.js",
    "revision": "3504bd14be500185e11f92f14b8b863a"
  },
  {
    "url": "assets/js/399.95f7dde5.js",
    "revision": "6819fe640f390ee9f9ae4f7b41313fc8"
  },
  {
    "url": "assets/js/4.1ec4c7d5.js",
    "revision": "14482516d6bc5dbdaac547af3d6e48b1"
  },
  {
    "url": "assets/js/40.15b5fd56.js",
    "revision": "b4086908908e88f10f624c20646a57e3"
  },
  {
    "url": "assets/js/400.aa71a9cc.js",
    "revision": "4767da13594502726d7925ececf6b2ff"
  },
  {
    "url": "assets/js/401.1adc9065.js",
    "revision": "04304a944da0210a3ea4c99a24012411"
  },
  {
    "url": "assets/js/402.593260f7.js",
    "revision": "adeb0fafe68c03106437fda7636f31fc"
  },
  {
    "url": "assets/js/403.aa4a1d77.js",
    "revision": "e5b1046afbb475e1410fee260ea48764"
  },
  {
    "url": "assets/js/404.4e67785b.js",
    "revision": "6324fed052d16a8699e9de62afd67909"
  },
  {
    "url": "assets/js/405.4aff29b8.js",
    "revision": "b4a5387b9ce27b2e0ec67f38ce4dbdbe"
  },
  {
    "url": "assets/js/406.ef6fe08b.js",
    "revision": "b7df06a7ba5f9f725ed6885aca3d5132"
  },
  {
    "url": "assets/js/407.50f7efbd.js",
    "revision": "10419a81c9b2709efded079f3e807865"
  },
  {
    "url": "assets/js/408.9c7cd33a.js",
    "revision": "c46f27d4fb44128637db29c1f26ba294"
  },
  {
    "url": "assets/js/409.58769297.js",
    "revision": "eaff065d8d440c87c95906ebff56e387"
  },
  {
    "url": "assets/js/41.db4e9156.js",
    "revision": "565316c351cb96c38495f84765e61064"
  },
  {
    "url": "assets/js/410.76a8746d.js",
    "revision": "94709ebe903d9998128a60507178797c"
  },
  {
    "url": "assets/js/411.98bf8f23.js",
    "revision": "3f9f86fa5b464540809e564109045e5b"
  },
  {
    "url": "assets/js/42.ef2d4b55.js",
    "revision": "5c48cec10825976689c830103c360efa"
  },
  {
    "url": "assets/js/43.a7a8886a.js",
    "revision": "a50c8d048e0f5f5e2d76a50155cf3420"
  },
  {
    "url": "assets/js/44.abca70ea.js",
    "revision": "60b8901553c911965e6ea4f3dec73be0"
  },
  {
    "url": "assets/js/45.437ed206.js",
    "revision": "3d0db953ecd14c78682e19a1eeddd948"
  },
  {
    "url": "assets/js/46.d1f91e76.js",
    "revision": "750ed1ae711ac1a43cb3bad3f323c267"
  },
  {
    "url": "assets/js/47.e3224461.js",
    "revision": "69363cbceec8d82fff84d9da7c763f01"
  },
  {
    "url": "assets/js/48.c1e06950.js",
    "revision": "efb3f2721e63b819d0c9387ab14f452b"
  },
  {
    "url": "assets/js/49.a920b9aa.js",
    "revision": "593731b986f120133a68e2fb6589fd1e"
  },
  {
    "url": "assets/js/5.30877ee0.js",
    "revision": "aa36a45f9e4c9f6546ed5a0eeaccd149"
  },
  {
    "url": "assets/js/50.52c3932c.js",
    "revision": "8f0e7ab5dfe1b1a887a2c87ac392c4c2"
  },
  {
    "url": "assets/js/51.03f290fe.js",
    "revision": "739bc4c84ba89a7d6daeefce3548e269"
  },
  {
    "url": "assets/js/52.d757ac7d.js",
    "revision": "3441d05efb7258ce49fbedf4286dec6d"
  },
  {
    "url": "assets/js/53.f0eaa9f2.js",
    "revision": "b4f2a8806224383926d8a188420a87ab"
  },
  {
    "url": "assets/js/54.706d1689.js",
    "revision": "91e675bffe34ec57e3104e23a7f355f0"
  },
  {
    "url": "assets/js/55.f3e737d5.js",
    "revision": "77c88cc770c76bc256404defc6b73eb3"
  },
  {
    "url": "assets/js/56.6bd534df.js",
    "revision": "9d0192a878ffc5b5f205857575274c3b"
  },
  {
    "url": "assets/js/57.b768fc93.js",
    "revision": "2095386feb56d027f83ede8e05ec492b"
  },
  {
    "url": "assets/js/58.42f0ee3c.js",
    "revision": "6afa5f96c09fe8059b9efbaea975ccba"
  },
  {
    "url": "assets/js/59.996518cc.js",
    "revision": "5e02bc2159853f736d055fc8cc7f8a35"
  },
  {
    "url": "assets/js/60.f70313a9.js",
    "revision": "f455d9597d544b4c87f56170da449735"
  },
  {
    "url": "assets/js/61.c66c6486.js",
    "revision": "29d8f8e4272f9d33e72af315d85728bb"
  },
  {
    "url": "assets/js/62.a5b61fce.js",
    "revision": "e87a80086caa68f22e33a3a211333ca9"
  },
  {
    "url": "assets/js/63.c6b21a96.js",
    "revision": "22c76afb62a14d3f89dabc98463dca53"
  },
  {
    "url": "assets/js/64.9efc5f88.js",
    "revision": "3dc20c8468d2e671a72ef5e6e8032db7"
  },
  {
    "url": "assets/js/65.23b9566f.js",
    "revision": "86d184c93e2dd1a08050cb7334607597"
  },
  {
    "url": "assets/js/66.c42cdbfb.js",
    "revision": "a7a34688e023f48b0c14057d07552a7c"
  },
  {
    "url": "assets/js/67.d39d4fa3.js",
    "revision": "82e23778a4accedb322e62daa847c50c"
  },
  {
    "url": "assets/js/68.0c53bc1f.js",
    "revision": "8999b1fda44fbd0467ab1276decbd56f"
  },
  {
    "url": "assets/js/69.6785acf8.js",
    "revision": "eb5a72156237e32d4bcf27361177c794"
  },
  {
    "url": "assets/js/70.5a98fae6.js",
    "revision": "27e59b1c86c4b182c6398e3226557df5"
  },
  {
    "url": "assets/js/71.91e7f494.js",
    "revision": "4bfccd342f281c7bfc53de8114ec015e"
  },
  {
    "url": "assets/js/72.9b0b8339.js",
    "revision": "5220e6ec628a7bfa6586882b324d8cc5"
  },
  {
    "url": "assets/js/73.5a8a9730.js",
    "revision": "e15aff9d30d8b77fba419c4fc87d12c0"
  },
  {
    "url": "assets/js/74.3d2c25ec.js",
    "revision": "bbad0e5c51f9f3fee455af706f55acf7"
  },
  {
    "url": "assets/js/75.52b45613.js",
    "revision": "b5cb96f2d0f9a267b7debf4e313d15ba"
  },
  {
    "url": "assets/js/76.f6c10412.js",
    "revision": "e1d0562ea88f27684ce93040a5d1f52f"
  },
  {
    "url": "assets/js/77.461d9ba0.js",
    "revision": "dc69ac1119a327a33cd3207a47445691"
  },
  {
    "url": "assets/js/78.6ca2e2a9.js",
    "revision": "c5e3524e352a20bab091f7a628361497"
  },
  {
    "url": "assets/js/79.7b697811.js",
    "revision": "1caf5ff6aeb87ae302703da29a11fe7e"
  },
  {
    "url": "assets/js/8.f27d7bdb.js",
    "revision": "ff76fe8b76ac0a3cc48809b145706703"
  },
  {
    "url": "assets/js/80.d3ed4496.js",
    "revision": "1cfe74704a247cc470bb964427a010f3"
  },
  {
    "url": "assets/js/81.63489b2c.js",
    "revision": "4590f5843a052b094a7a4f65a7e02276"
  },
  {
    "url": "assets/js/82.ee91f914.js",
    "revision": "4d582da3fc8dd7d5f1b6d5f3529134b6"
  },
  {
    "url": "assets/js/83.a005be1e.js",
    "revision": "9b125fabf0cc981645365e0a57e290ca"
  },
  {
    "url": "assets/js/84.f8fbde98.js",
    "revision": "b4de60f601bd8904f98a6d0e5894c964"
  },
  {
    "url": "assets/js/85.92944034.js",
    "revision": "f6889e018b62b34bb3e1c083caa3a711"
  },
  {
    "url": "assets/js/86.18339ce0.js",
    "revision": "da471e690db0be7260ae81f766ed4400"
  },
  {
    "url": "assets/js/87.24e79974.js",
    "revision": "960a0c8d8de0c2d01a40f0699ec73f86"
  },
  {
    "url": "assets/js/88.bab075ae.js",
    "revision": "65199f2608c7cae32f81d2ee6ceafb9f"
  },
  {
    "url": "assets/js/89.10934cb3.js",
    "revision": "e920569926515828e187770f8cf8eb73"
  },
  {
    "url": "assets/js/9.64131e2a.js",
    "revision": "3eb855a1f514494ee736d40b94b8a3a3"
  },
  {
    "url": "assets/js/90.0aa2173f.js",
    "revision": "542ed0aa75e84cc7efaf5e6835a392c3"
  },
  {
    "url": "assets/js/91.dbb597dd.js",
    "revision": "8b866dc6ddc3e790e6191a16f77b337b"
  },
  {
    "url": "assets/js/92.f6bfed90.js",
    "revision": "452f514474387b20ee1e8cffb85d2e23"
  },
  {
    "url": "assets/js/93.9668e1f7.js",
    "revision": "6dddfee588aeedb983124abea929971b"
  },
  {
    "url": "assets/js/94.db0a1987.js",
    "revision": "05b65d4c12a0da544e302e6782e862b6"
  },
  {
    "url": "assets/js/95.b7fd338a.js",
    "revision": "307ecc8de61054ff55d325b3be3943a1"
  },
  {
    "url": "assets/js/96.abb3c3ca.js",
    "revision": "32d369f60a2c2d3c74103efb3fb0ce28"
  },
  {
    "url": "assets/js/97.2b89d8ef.js",
    "revision": "44d1bac6f6fe822e428b0517bf229f7f"
  },
  {
    "url": "assets/js/98.27665edc.js",
    "revision": "06867e39fa42c1e5211b138480fd8fc6"
  },
  {
    "url": "assets/js/99.c32fb603.js",
    "revision": "77e50a30ed4f5855090bff91b84fc627"
  },
  {
    "url": "assets/js/app.40040283.js",
    "revision": "820c8c921781cd0a954f1e950577479a"
  },
  {
    "url": "assets/js/vendors~docsearch.51e44f3d.js",
    "revision": "150743b403bd253b45fc1cfe1d790bf6"
  },
  {
    "url": "index.html",
    "revision": "4c59058d7c3402986c8bf63bafc3bafb"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "1a34aecb72018e664d2f53880a857088"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "683474d1a0fab837b1c6c39c103c0bed"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "2972d7b8a4e251b0a35edce5f018233b"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "694782c7cad6959e4bec32aa21e40b74"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "edfd64715d7814a319ef88560b794723"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "ed0239cb1f0a055a123e2a421356fe7f"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "d9857483c31c56ce590975ea5191c614"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "b3ca4aded8df8ad11112172a25c4ae50"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "40ed2705d10534d083a5dd1f4559b372"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "b0e82217a8bdba23362d7e406055aa58"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "12388b6d4e5f679f2aeb61e55394e7e1"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "bd0e2d082542ac132820a1580db2a083"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "78b98508c3751d2cde4283c22ce6cf41"
  },
  {
    "url": "master/api/index.html",
    "revision": "20dfc1c2304ef54ca008fbd1761e91ef"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "514e4f66aa3cda1f80ef8a26f1b4299c"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "387aa3dbf4c2ad5bcab25001da89104a"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "7f95a191486611a93e942e4eea975f8c"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "038d37cb6e47a15d07f0109c383f6d50"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "919246a23eb98e37cb610011301bad32"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "6ace1ebd090c1ae1dd99cb612766ae21"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "f796cf413b81f62eb0cc4c5b6699d4d7"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "ac83195d31a59dba6220c5ceaa3616e6"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "b7d00e3a477a52eb194683deb642f58b"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "1b1124a12aa7acf1276654880682936f"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "44cb1c3022b451511c5aa66dd4f0b4d3"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "9bb7fdcc8d777357e2de579eff4483c7"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "f809a41c11e4ff3e2d375d9fa19fa8f1"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "66948747cbe095b13c35583ac5d60c15"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "605c9927e45dccce4bdde943a3a96362"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "1ac5ddc249fb418471642c0e4e86327e"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "96603dc7df3992b564045bd8b1d482d6"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "e536293eb21c5365430c5bd2402d7ef5"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "944bee26fc91f241f6ff9679f861abb9"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "7f98573ddbf83ad038014212cacd2bc4"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "3fb1c50a5611ec1e2d619b040463197c"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "df7ff85e730c9266d4959923ca14e4eb"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "3bb8865513480efd467d416f79d619dd"
  },
  {
    "url": "master/packages/index.html",
    "revision": "b08b33ac79d2eb1d6ac453a948b68b5a"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "22bdfb08cac996d1a15ca115d54f4979"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "61fea3db0fa8a46bc02759306f11c06a"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "c5cb8a53320b52657bef8106e7e53741"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "82998f41447739b5883ea95638a6abc9"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "bacd7b0d7af7e7ab6ef85d284ab4369d"
  },
  {
    "url": "master/packages/views.html",
    "revision": "b447dccdd190289f64116a8afcca2f0d"
  },
  {
    "url": "master/performance/index.html",
    "revision": "91845156238c1d2b634b5f88b5bb0daa"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "d9fc6c02de12bbd74984209cc3fdde99"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "b330da7023127878d6e0e38a39dda297"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "306dd9d0ede98c46f9555fd26f9df0c4"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "ffe05a57a6dd6f4879cfbc7920233779"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "272878453b85c235897e64ffdd6e1996"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "a3fc5c77a64957c62cd1eb0ff6276cb2"
  },
  {
    "url": "master/themes/index.html",
    "revision": "a02fb905472863bdeff5a072362fa7e1"
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
