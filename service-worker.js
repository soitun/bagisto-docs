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
    "revision": "0cd73f1e213f6520ab94bea55a9b636c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "793c960ebccf45fc3ee814bb6733c4b2"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d6f15a40601e729b88a757805f926641"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "94bb3eefce631c2aa4e436f516430288"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f55100d700985d735ffce64e33228289"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "2a007b621a559092b4e05e6c224b83ed"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "b716cf321c3d2d4c1d351f43704daae7"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d35547069d6eab3a31c94ca2085cbabf"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "fe7b1a915e0b5c6a0d2d0b7098846c9b"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "7024e2ae36a33d089077b08afce903f9"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "8d3a98a825a28261fb595c478378102d"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "71d283beb8ec355c6c33ca737b88ee8f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "ecef1304a08e844fd4a453b460b34ca9"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3266b14e533d87303cce1219dc54afea"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "a860528c2372b11a9d01a6c27dfeadfe"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "3d9aee39fa594d38a2e0b71d9db5abe6"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "023c3571c7f093ea797ace8943768329"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "d5c7f4b910e1a76c9be6b56d1fab6187"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "065be93a55a9564c9293010f37097986"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "c8ee02ac14a0abff457ec11ccb704919"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "bb8a348320b5f9df7d3d040ab3d3a6e9"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "554bfbcc329bbeb307e9dcf1a40e1e62"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b9733cc71a469fa4afcd040e14219099"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "eb4b5973358d2e9f133adcf3fb7c31a1"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "d8acf7ffe0b6b202a07284fc9cdfba9c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "9c4beebde83b679523e224e56a86247e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "4eb0de4111cda87252052d49b141aa2f"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "f4b905a38448813abbed64283ba8af7c"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "259ed0d2bea021bf88827234470e75c9"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "7dcfff0644a3947c50e9f9d7e041bd05"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "655b13e4b156f9f3e73a902f0a3fe8fc"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "496c2a6a8cfa011e0f3b25b3f5d3312d"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "187eb81293353c112a8556a612327e36"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "900c01d331b10ec5ec5a5a27b1edebf5"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "e6bc3612c47d6f2025fc54110f1bf49a"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "653a5f574eb5da76ea7e21187231d567"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "e75ddc0fbcfd692638143fe6d77ba738"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "2901250a067b5bcd9827a3c2b3e82b51"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "cbf5c6e3c437988a86ea788f631410d3"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "6e5c06cec18423ba0706027cfb532ba8"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "e78f58fca14fc77610f933a27f29052a"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "4b5e3d52e79fa997b21feb4a0281f514"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "9b90552d7467dec842c5060567f2c3ae"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d4234e584e0eba7cbdb3c6f6dd3d4b89"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "271c5910d43c66d6abcedc8150430840"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0b04d145bf0876e61ccd9c0f380b5e89"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "92a78401ded0a01b50e5d6ba992c913e"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "716a891eb5a614e914bed8a661132bf1"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "f5c18f367192decab0a4f1cb08594139"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "bbbd0e5d57c85ca2c6ba2cae0d4b213f"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "d4e0055b11e3a7a375b50c62840e87f9"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "6cee6d11bf2c7543286ac34f481dbb94"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "8e2337e67c6bc8adf86fa07ac8b38803"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "295d18c6946c5e1e617d1f0d629bc2e7"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "be7ed29f5d6ad611776dc45a524de694"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "35f7713a9afe55b43822f6ac3d6d4a6c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "b512ff13bde91272c5a49d135acaf457"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a05b6d23410fd3079ec74e31cb130166"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "5eb802d37bab9a71c7bcdf7f955368c1"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "1048613f630990ab9eaabb3d3f2ade8c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "8237961d93c1e7aef3191c80551758dc"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "74863382d589b7c2af51377f8b4a81e3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3afe20d05d1c6e9d6ede9fe102fde4c0"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "2fe11df33385679222b66a1bacd7aabc"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1674bd6bfa0a9e93fba0e9fe57a4729b"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "11ac9b0fc8cc2b374ccd8c33f5986e91"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "5bbb1ded9132fdb8c10f53467fb0b637"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f2fc9c65e8c4d7f946facffbac8b801f"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "45d481c79f5c6ccda7677429cab426b7"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "ce53741615b42f1eaafa74fc640876cc"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4d4ce08f24fa4701efec33b802ccec5b"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "30658ede313ea553ecf4b2cfea14c7d7"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "958318826a294bec26b36ad482e55178"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "26b1624125d27d24d0d66eacec6a2dcc"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ba80896340f4d078377a870d0ab35a58"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6f64a054e501d6e4a73e6041f34332b1"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "c0002aa9b80aa7d10595051930f58944"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "6e3a8c4a8ed18ff0d93ab0c19591aac9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "33c214e219d274efb4820883c6562747"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "aa12ff492595045ad00cc11d1a1bba6b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c30a37e318b9ef8e9eedddfda824cbc9"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "85c8775eb24e8f591dc97dacb79a9c3e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a890757bcf6635b6f65d67d78dbe0359"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "664147b6c747972de02b17a65286106c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "be40fc66c8984f1379daa2d33148291f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "01d5da261422e29ec54307335541ae2a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "64338f1bf79e40424a48ea80b4c4bc86"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "85901e11a6143f1ddce9096ef7afb4b4"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8f29d5cd8fe8d03a2f6eded498d9a601"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "ceccb61a97bd1bfb5a455d044f54941b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "816def4fe96c91b143564292651728b7"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "295168b18849dd8b2fe242737cd0d765"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "60aa4b11c275db484459203852ef15c1"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "8b1ebe94f371a8aa12af5d189d774352"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "5cf89f143ed6285a3d942a137555023f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "20df5df94ec1f345fef2a773ccc74e70"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "7247cfb1ca955cf05b52e39ddc31a801"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5576a77b9792e1191803942134567509"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a7eb8bd4bbf4c1b9b84199ac099eb3e1"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "fe0a0256c561764a5c55d57ccfaaed8a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "7a9c707afa116a242bb98b46a9ce8c47"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "f9ba8051606a3a37170477a6957873d4"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b5d4edb0a9ccc1b76443a546318b58e1"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a5eae09f9a3882471c0fbb7b57c5c438"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "d9bb967108ecd3d28a1d9d029f032ca2"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "09be277735baaf2843d46f248ea79ea7"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "fb677b58fdb93ae34c9bb37ea67bc302"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "c6959815ef7c1af89f2646e478865754"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "e3464af1c38a3b8e520df4e7263bfa67"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "86166952f00726bea10d6ba85594d9b0"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a6191ce2b38cc224c7e4d5be4220bacb"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "dde92d612cfe70932d26fcde0428881f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "d957876184e102f3465c84a710a63c52"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a4f6d1c9b4cf3cf3511a5c0198ec3a33"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "555af6ed22728a11e43f963ee4399213"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "0d999c58a6d3c2546f7879ecaadd306a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "399055a3d2ae3fb04e672e8417290207"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "8903c63e2365afca745a43fd8d80ee56"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "da75cfed946d79c624487ec4028231ef"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "0d3f0dffbaa64879941ff287f3148b18"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "3b0dfcd0076857bef42994760362cf55"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "03d0e756b2ad9cb211b64741bed70d5e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "1ec8f762fabe55bdcd8874a005babcf1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "848dc9e7304233e29a72ef4d28058573"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "572ea26e78fcddb2de7a9449dd197ccf"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c6b60af51fe71e17c551cea8b6610ffd"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "6e33448e4b9b2fae32b0c4f88390299f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "993c25ded02299c8530328129809de3b"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "766f9e450d1c593d59868bd97ef40b29"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "771518864504a3959b34ee6b04af9a7a"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "6a634f749ec9cd79f71dcd4f4ee1c4db"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2af4897ef9213993b4d380f9c2af2648"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "c9cfebdd8ec38ba65e1b1cf6be066a14"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "496fa729357e17ff9ff61c2c312593fc"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "08f4bbbb334b71e15f5d7875d2cbc3a5"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "04c7d67bd874ba4914a74c8ca4c6979d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "b06494e47308b20529b684fea3b59d0c"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "0e28ceb62d3c20218e680bb0d2769847"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "e24567051e5370b3c4ad65a645f6c0a6"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "bd5bbb4aca3f374360cd7e95280f73be"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2b86f1eb05f70b71175bf04f6c001e5c"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "af30291ffe893025817fc84d9a6db1a6"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "643a0e3f56dc29cf7ca4c702874acf32"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "1e8dfa21a7b045ce27eba481fe98a568"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "3ba127ade2eefb8134659d3b026cc491"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "62d3894329610bd79de9544da7a1dd54"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ca2726a2f40b28c55609ba7dc7e83357"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "7b89b1e9e05339076461cfba8f7125da"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "6888c1b08bff85d9a8cc3e37982e45c3"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "6a225fe4a6f10ef7b76e36b266b3d170"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4d96d4c2969ed23c3b6f38b4b475598d"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a0a7bb6b731f4288deac45ba18f20f1f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "8c275ef2632a7b920f281a5155d6c176"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "8f2e6d6b014acf8cba44616923a4c3f9"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "1593dc32335db0e2c0341714f9e05e78"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "4acc09f4397c1a6864e869d78c2258c7"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "d120390a4ffe802678f5b3e1f9bcda5b"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "faec4aa754af123bc2083c47dcdd7ad0"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "4d0e164aee2cded9a9e3465a8b4c984d"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "fbd8d97dfba302aa82b24b124ffacf45"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "c67a7a5d802b3ffb95cd3622c7d5ea96"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "f15a95a9ddb2c9b85b710cc0a68eac34"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "29ed7727bef71d5856e86da8449d8d1e"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c9bb2316daf28a8b3e23edca4fc6bcff"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "8333d96f762e11776e23c6644f83abb6"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "38bd67ddd0f74699f69b68f1e1a1055e"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "f32fcf507a49d44641f5289e408ae669"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "9f2263a33e7f3cf54b7cc29e0c418ad4"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "1644ad7b15370a6b2e6d2e0779aa8c91"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "3836a2b4c4b1e58e437b3435c19c55ac"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "49791190986a09e5965f4d18d4bd3885"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "56fb0fab3d1f85fdcf34c4d5260fb1f9"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "039c420cb3cb146300110d15ae567b3c"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "a7873f052b58cbe81de526c494df1d6c"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "b196415eff5c8954aabdeb7f329981f2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "5e1458429bd032c547a4ae19b9fd36aa"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "a2bfe5784a2ae0bcdc6abbb206e72e2b"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "6bc16608ad799313295b2c9320a432f2"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a6f483f0b56308b1a27e66695ea028fc"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ed6f4ff21327a888929a40fe9decbff5"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "1a50955898d847893182ba4425895187"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "024c285b74d0c6c4d1b2d0d03188d22d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "6ed3b286b656b03173b3424075e0c523"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "39209a2bd443942cf981e1fb47d0ae01"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "1d8860393b28a684856b22e60ab4f579"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "9e7d3ed38fd069c0d7a1453e6c9cf8ab"
  },
  {
    "url": "404.html",
    "revision": "d4c7f5028ba03c1a0236796dc7fc3c4e"
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
    "url": "assets/js/1.21461986.js",
    "revision": "8a227c4867d7cba306c824556fc232a9"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.84621082.js",
    "revision": "bce02bb1d8360c99536e2e332fb63cd7"
  },
  {
    "url": "assets/js/101.2f2acebd.js",
    "revision": "fa769645b26c64e986be2bbc7393055a"
  },
  {
    "url": "assets/js/102.0c615528.js",
    "revision": "669326772c45b4f7dd1b252c7487cb7f"
  },
  {
    "url": "assets/js/103.4f4947ed.js",
    "revision": "22cda4cd4e308a0ddbf2ae7b24e75c3c"
  },
  {
    "url": "assets/js/104.04a7c9be.js",
    "revision": "602fcd5a823a4d81a11ee66c1d52c806"
  },
  {
    "url": "assets/js/105.034e1d6e.js",
    "revision": "812727ed9c943a3852ac51ee97641427"
  },
  {
    "url": "assets/js/106.ccc58b19.js",
    "revision": "025a74b283689ce27ba852a5625d769c"
  },
  {
    "url": "assets/js/107.f43d8d80.js",
    "revision": "5daf6b4080170edb4f651eb95f85edce"
  },
  {
    "url": "assets/js/108.a4782d67.js",
    "revision": "e354fac0593a3e7ba11395f55e0ae69a"
  },
  {
    "url": "assets/js/109.6f9dc4b1.js",
    "revision": "fe6f6c53de0f9927a1ad2fcf796a152e"
  },
  {
    "url": "assets/js/11.a72bae3a.js",
    "revision": "8b0e9e290eb06a1d71131ef798a67173"
  },
  {
    "url": "assets/js/110.aae063c2.js",
    "revision": "583e03c5fd5b6a8addc9f4ee33e82d7c"
  },
  {
    "url": "assets/js/111.3fdd861b.js",
    "revision": "3457a4ee65a59f669f20be8b62ef1632"
  },
  {
    "url": "assets/js/112.2eb48958.js",
    "revision": "913e2c41ebcd406b4273073f525eef03"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.9d302c10.js",
    "revision": "21443e23efb24eed114cdd6cf226b7c1"
  },
  {
    "url": "assets/js/115.0689eb49.js",
    "revision": "338c923d65b5336017ddefadd6ad8653"
  },
  {
    "url": "assets/js/116.bbedb46d.js",
    "revision": "c5a8408976eef7db6352f68549c09109"
  },
  {
    "url": "assets/js/117.c00218a9.js",
    "revision": "9f634ea9a7d005a500fddd48b3c37bb1"
  },
  {
    "url": "assets/js/118.00a0517c.js",
    "revision": "68e0b43b0d7839d1c207022aa2ca11e0"
  },
  {
    "url": "assets/js/119.5094ccaa.js",
    "revision": "c4c7b889deae5170e1c63464a1ab2fcb"
  },
  {
    "url": "assets/js/12.96cd577c.js",
    "revision": "c0e95e5fbbd7658fc34d4aa840453df1"
  },
  {
    "url": "assets/js/120.ee97ae87.js",
    "revision": "3f74a6038c1bdfc722899b322d090dc4"
  },
  {
    "url": "assets/js/121.93b93350.js",
    "revision": "df6d441bfacc4c4be8b20229bfba6a80"
  },
  {
    "url": "assets/js/122.3933c67c.js",
    "revision": "1fe9e7bc080c5ee48bea68d302946d3d"
  },
  {
    "url": "assets/js/123.71321d76.js",
    "revision": "bc9c4d0f067b165d27535fdb54397497"
  },
  {
    "url": "assets/js/124.8022f3fa.js",
    "revision": "992345ac34d33aa0b74c189c01e2576b"
  },
  {
    "url": "assets/js/125.a611e275.js",
    "revision": "dcc0a0319f040819bf0abaab1dc71056"
  },
  {
    "url": "assets/js/126.1a7ec03d.js",
    "revision": "2f8b6bf97cdc20c00892f10173159e4e"
  },
  {
    "url": "assets/js/127.cb4b44ad.js",
    "revision": "3c805ef222c1ee06c3f7f5235e49cd00"
  },
  {
    "url": "assets/js/128.817df207.js",
    "revision": "06b7c4287189f1baa08b6a22fbc08df0"
  },
  {
    "url": "assets/js/129.b2688a32.js",
    "revision": "0e812eea3a3ae576fd3edaa3770d5d54"
  },
  {
    "url": "assets/js/13.d0b481c3.js",
    "revision": "3e15c416a5da5b23c4eb5c0529fc97f0"
  },
  {
    "url": "assets/js/130.33926683.js",
    "revision": "1f0df99cb7d8d1ffadfa5c81ec472bb1"
  },
  {
    "url": "assets/js/131.27a43bc3.js",
    "revision": "12b2ee0449dbbb41b7131ca1adfa9bf1"
  },
  {
    "url": "assets/js/132.5052abea.js",
    "revision": "580b2964e85bd0b1bbb6bad362b4094b"
  },
  {
    "url": "assets/js/133.e6821b89.js",
    "revision": "ffdb908414b0ad1f731f9cda3b4e5bd8"
  },
  {
    "url": "assets/js/134.b04f72cb.js",
    "revision": "3da7f442e3f287946757b25fbf8c4fd0"
  },
  {
    "url": "assets/js/135.c4841e37.js",
    "revision": "e23c9461cf965224dfdcb120c156dd0a"
  },
  {
    "url": "assets/js/136.d754cb4e.js",
    "revision": "78e2a8dd02ad1674cc0f445e1621fb4b"
  },
  {
    "url": "assets/js/137.11b09d79.js",
    "revision": "a10d4b96f2580ba0b894dd0b66da5cf4"
  },
  {
    "url": "assets/js/138.b08702af.js",
    "revision": "f24fbb24f761a3e563918c8aeef4e429"
  },
  {
    "url": "assets/js/139.9b64173a.js",
    "revision": "a95757d7e2772c05be87823ab26b31e0"
  },
  {
    "url": "assets/js/14.1560b518.js",
    "revision": "c1c07cc75bced6e0a8b8335f2c34cd29"
  },
  {
    "url": "assets/js/140.9b5bc93a.js",
    "revision": "dd028c17df972633e8866398df292e7d"
  },
  {
    "url": "assets/js/141.60208cda.js",
    "revision": "fcd8bcbd048644cf7b8cb00f36e17116"
  },
  {
    "url": "assets/js/142.a8fd691a.js",
    "revision": "542e40ff613e4a081966fe3366cbaf8c"
  },
  {
    "url": "assets/js/143.9fa3bc4f.js",
    "revision": "bbcbfc546360997855bb904ea1666ee6"
  },
  {
    "url": "assets/js/144.209318fe.js",
    "revision": "8c9862b9cb3f1ad415b7a0c88bd5fdd8"
  },
  {
    "url": "assets/js/145.87356af1.js",
    "revision": "368fcf97ec55481b0bbbc14e280fdedb"
  },
  {
    "url": "assets/js/146.6cd1abae.js",
    "revision": "87213d8a68d5e562551d238037f0fd7d"
  },
  {
    "url": "assets/js/147.6893c008.js",
    "revision": "3f69db28b10c923199d29d2f7db31611"
  },
  {
    "url": "assets/js/148.d575b8fe.js",
    "revision": "9eaf597cda3a3eb6f8bcba587968111a"
  },
  {
    "url": "assets/js/149.5c21ea60.js",
    "revision": "83022a9910ec4cb45ee5d7812e1d738d"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.23aa867b.js",
    "revision": "37336de049f6e5bf729b959e2c71a420"
  },
  {
    "url": "assets/js/151.d4397c4d.js",
    "revision": "5ff74396a509dfc22a19f5e98ed006dd"
  },
  {
    "url": "assets/js/152.4afe0754.js",
    "revision": "167f21d42319549954e137affe4fcffa"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.2851f433.js",
    "revision": "7612098f1d97ad3cac29f97503ed4682"
  },
  {
    "url": "assets/js/155.3f7794d7.js",
    "revision": "34ddfdc84ce6fb1e974502c144714990"
  },
  {
    "url": "assets/js/156.222c18ad.js",
    "revision": "62ab037666d17db31477f8b1c33eea6a"
  },
  {
    "url": "assets/js/157.692fdbd6.js",
    "revision": "9ae658513ef43f99125bb7ec5f607c67"
  },
  {
    "url": "assets/js/158.60d79cbf.js",
    "revision": "206663e9b73902433423f4d5b8ee1d86"
  },
  {
    "url": "assets/js/159.eb6d72e6.js",
    "revision": "d93e6afaab0a9e11297c39fa5ea92ed0"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.31c837b9.js",
    "revision": "a1a578ae20ae14453c65c382406fb2dc"
  },
  {
    "url": "assets/js/161.77db1fc2.js",
    "revision": "402cd893f267c9b5af8f5906fe3a59a8"
  },
  {
    "url": "assets/js/162.4dea16fa.js",
    "revision": "c01854f2f735b9e8d90233c7a362f7ac"
  },
  {
    "url": "assets/js/163.09fef156.js",
    "revision": "4087995a10ef0b290ca045986d803c35"
  },
  {
    "url": "assets/js/164.ef5840c3.js",
    "revision": "648f36fa7651b94500ddd0c0f8f6f933"
  },
  {
    "url": "assets/js/165.2561794f.js",
    "revision": "d2c32435bdb424a61984099b2669bdbe"
  },
  {
    "url": "assets/js/166.ec29c7c5.js",
    "revision": "81fbb194a2025e8e245175065aa89646"
  },
  {
    "url": "assets/js/167.16ff9d0c.js",
    "revision": "61426712495b9013babe6acd5e32a680"
  },
  {
    "url": "assets/js/168.d249c0c3.js",
    "revision": "f27e4019be4231a46e4ba6d180088097"
  },
  {
    "url": "assets/js/169.7d6cb552.js",
    "revision": "c916c18e5a3f7a24e56f0957dd1f2633"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.7206330e.js",
    "revision": "733c7e6cdbe57df6470b34908ae3c74d"
  },
  {
    "url": "assets/js/171.8e3a3a35.js",
    "revision": "40f353995e4179e01e566ca3bed1406d"
  },
  {
    "url": "assets/js/172.df8c3856.js",
    "revision": "9e4aa09c7364d0fe90296a4c6842a89d"
  },
  {
    "url": "assets/js/173.c8649889.js",
    "revision": "6368661606d7507265afe7dcdeb90f2f"
  },
  {
    "url": "assets/js/174.6e7a2fe2.js",
    "revision": "c5243bd786e8aa30a873dfb429df7fc4"
  },
  {
    "url": "assets/js/175.3eb292c2.js",
    "revision": "efeea3b7b671dac6ddc8bcf6e343d6f9"
  },
  {
    "url": "assets/js/176.e5822288.js",
    "revision": "82e0778c48cbdb6dc576de3f0a79e897"
  },
  {
    "url": "assets/js/177.458999f8.js",
    "revision": "e04fbbb3ab095611f9c7d5f628236e50"
  },
  {
    "url": "assets/js/178.6ebb2938.js",
    "revision": "07fb33ad07fb756985e9665151065e32"
  },
  {
    "url": "assets/js/179.2b76c90e.js",
    "revision": "fb8cebbc421b5eee36b7b2af88b9e46f"
  },
  {
    "url": "assets/js/18.8a32bbe2.js",
    "revision": "d5beba5210023eb008fc84bfffbf20fa"
  },
  {
    "url": "assets/js/180.5929e1f6.js",
    "revision": "7144f818a79ff3986c7ff529d916fbad"
  },
  {
    "url": "assets/js/181.7226aef0.js",
    "revision": "4342d31e01f385137a54d99e544bd765"
  },
  {
    "url": "assets/js/182.b08e02ea.js",
    "revision": "2cf5225e2a2e24cfd8c087f6f2ae2094"
  },
  {
    "url": "assets/js/183.95093dfa.js",
    "revision": "036b5403b0ce8a36ecbc5ec9c112f79f"
  },
  {
    "url": "assets/js/184.e49a677e.js",
    "revision": "13ac9a204a130d22a814e1857e037683"
  },
  {
    "url": "assets/js/185.c1aabc4f.js",
    "revision": "30931664ec1d9dd49aa1dd3cd6cb3175"
  },
  {
    "url": "assets/js/186.c76f92b3.js",
    "revision": "614eb74b85937a525ae94482f7deea6d"
  },
  {
    "url": "assets/js/187.04b02a09.js",
    "revision": "0666c98989b9db9950085c9a2459ed97"
  },
  {
    "url": "assets/js/188.91b83b4c.js",
    "revision": "115f16efa19ee0690cab4e9db16cf1a5"
  },
  {
    "url": "assets/js/189.d3f04a41.js",
    "revision": "22b37dbd09b04fd179aa2c565c303373"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.dc820767.js",
    "revision": "f5eb5fc5a6f91955d7f8c926d4d2abdc"
  },
  {
    "url": "assets/js/191.d8ba9279.js",
    "revision": "851639ff39b67600a86083805b43d6b7"
  },
  {
    "url": "assets/js/192.c0d8d19c.js",
    "revision": "d7147066d6c372462a96f3326f16db82"
  },
  {
    "url": "assets/js/193.0d766e2a.js",
    "revision": "06d0f0c7a064fb1fa962856ac70157a0"
  },
  {
    "url": "assets/js/194.9a6fb1ca.js",
    "revision": "4c3500ff0a56e37ff06e251dbb0efbd1"
  },
  {
    "url": "assets/js/195.989fe801.js",
    "revision": "13260f21a3cdf488098226277175bc97"
  },
  {
    "url": "assets/js/196.b734a75e.js",
    "revision": "04b314902936543c56dd49bc8e81dae3"
  },
  {
    "url": "assets/js/197.2d384b5c.js",
    "revision": "ed4f187cde8f5a1834454f70402e714b"
  },
  {
    "url": "assets/js/198.4339f8a4.js",
    "revision": "d06043eb06b704d3bfc2e5b901db1888"
  },
  {
    "url": "assets/js/199.62be38f4.js",
    "revision": "a78dcdbe6d1ffcf8b06dfc3c7a8e92ca"
  },
  {
    "url": "assets/js/2.7d126712.js",
    "revision": "10f52ed669480417e696bba5e4c57c38"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.5036d445.js",
    "revision": "1db1fb97a073892dc1879a55357169f6"
  },
  {
    "url": "assets/js/201.046e095d.js",
    "revision": "bbd728e078b7c79eec3de1cfec9b4d44"
  },
  {
    "url": "assets/js/202.1c648841.js",
    "revision": "284822e420962013bfc5366f5d81f54c"
  },
  {
    "url": "assets/js/203.ce0f2c90.js",
    "revision": "119e91a90695a0cb951e3c1bb0e45d1b"
  },
  {
    "url": "assets/js/204.fa98c0c0.js",
    "revision": "d4cf0240fa895156b2a4569106b0d0d7"
  },
  {
    "url": "assets/js/205.d5c85ed9.js",
    "revision": "9e4f3433575781b56bc73b13da154e6e"
  },
  {
    "url": "assets/js/206.9a8e9907.js",
    "revision": "48e77744075fc63ff2c096f8d01190cf"
  },
  {
    "url": "assets/js/207.e86e9d09.js",
    "revision": "42cb55315e197452b6a67be732c6dc59"
  },
  {
    "url": "assets/js/208.571b338c.js",
    "revision": "211315ac3d397a02a2357764c0fc37b9"
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
    "url": "assets/js/23.c92235eb.js",
    "revision": "6c18d72fae9fc129a751d92ea5365496"
  },
  {
    "url": "assets/js/24.aafbb075.js",
    "revision": "f1a668ee840cd12eb4ab7931564ed522"
  },
  {
    "url": "assets/js/25.423d83f5.js",
    "revision": "ee5a8f8ae21cfc904b719a0b55551378"
  },
  {
    "url": "assets/js/26.1f19d5f2.js",
    "revision": "fbd784a13f00e55b7f8b1c2c04ff112f"
  },
  {
    "url": "assets/js/27.f12e4a51.js",
    "revision": "9bfdb1dadfc1b1fac6a5b69459dcb66e"
  },
  {
    "url": "assets/js/28.bef101f9.js",
    "revision": "0287fd19c8bc3347deefc1d06c948f32"
  },
  {
    "url": "assets/js/29.c9d0845e.js",
    "revision": "c295b0226cde7efeddaf1249f5b9d0de"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.8dccdbb5.js",
    "revision": "ea90854c38edf7572dfe44b5d9bf47f9"
  },
  {
    "url": "assets/js/31.9f294872.js",
    "revision": "e3658af9c3baa52ea312189b0482a3d0"
  },
  {
    "url": "assets/js/32.21ed1859.js",
    "revision": "11263149f59e7393d64e3fe1ebf57607"
  },
  {
    "url": "assets/js/33.f2499e74.js",
    "revision": "9dc3f987cd0c5edbcab76ab30b4e17ab"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.55c66615.js",
    "revision": "658880fec667d73685f94b051e4242e6"
  },
  {
    "url": "assets/js/36.bd9144b6.js",
    "revision": "ebc1bf2ba304561d8ac1442b616e4d44"
  },
  {
    "url": "assets/js/37.a36bc32f.js",
    "revision": "1b6a48e27b89a2491d7293239874268d"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.27afe970.js",
    "revision": "1bd782ed34f7f46ab43e8f76f661e11f"
  },
  {
    "url": "assets/js/4.13675134.js",
    "revision": "81c3d5b99c6319527a2f510e3d1f2607"
  },
  {
    "url": "assets/js/40.b7a0a652.js",
    "revision": "323704349bf3ebf24fb071f13adbdc00"
  },
  {
    "url": "assets/js/41.bd42084d.js",
    "revision": "3b4deaec29ee0fc9b73d07fa387b366b"
  },
  {
    "url": "assets/js/42.d340a8b1.js",
    "revision": "cb734e3465bd76759a03a0be5110d71a"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.2f65c5b4.js",
    "revision": "2c4a79741897452a0b514611336d139c"
  },
  {
    "url": "assets/js/45.3d9c72ca.js",
    "revision": "fcd7e524aafa4cdb8b19d2eae5769d63"
  },
  {
    "url": "assets/js/46.94578f09.js",
    "revision": "7b8b870b31e6d0f1bccac835c5528fe6"
  },
  {
    "url": "assets/js/47.450e1af8.js",
    "revision": "6bba5476228326377002d7a31acb098e"
  },
  {
    "url": "assets/js/48.41e9ad6c.js",
    "revision": "021464a8269cb398c69fcc54ae534dd8"
  },
  {
    "url": "assets/js/49.b29204e9.js",
    "revision": "18c932961272f4eb4cb8e094bc96e8f2"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.39b1be23.js",
    "revision": "0a9fed46da2549a8d349ba79191e7bc4"
  },
  {
    "url": "assets/js/51.331064b2.js",
    "revision": "760b0d057db8498cb81e973036fce8bd"
  },
  {
    "url": "assets/js/52.cebda4d9.js",
    "revision": "91bd65ebf8715fcc9ddc4bda92ab8c7c"
  },
  {
    "url": "assets/js/53.c65fbe3c.js",
    "revision": "d20d4a7b77fb723b2fc803c4f139acdc"
  },
  {
    "url": "assets/js/54.8be396ec.js",
    "revision": "bf34c118cbfae558eaf3fcf9f3ebf7e2"
  },
  {
    "url": "assets/js/55.060c6ab7.js",
    "revision": "bd7cdc5e1a4f272164f93e694a24a2e8"
  },
  {
    "url": "assets/js/56.10db94e7.js",
    "revision": "1ca5e112503832126a288d2e1d9f37d9"
  },
  {
    "url": "assets/js/57.d6e9cc4c.js",
    "revision": "3bdd7d02edc12e076f8321ec9596af54"
  },
  {
    "url": "assets/js/58.519e52e4.js",
    "revision": "11976650e3da831ee5a2ec8add2bf3f9"
  },
  {
    "url": "assets/js/59.a553f9b1.js",
    "revision": "d67c17b871843677f326b4b646b3d7aa"
  },
  {
    "url": "assets/js/60.50884343.js",
    "revision": "7cc4b4a1f75de886b3e0323c84560bed"
  },
  {
    "url": "assets/js/61.a072b359.js",
    "revision": "76a1d5b76c35951709764eec93419c9c"
  },
  {
    "url": "assets/js/62.9529d0c0.js",
    "revision": "cc2a5969481562902a15dca10b6cc927"
  },
  {
    "url": "assets/js/63.50db7efa.js",
    "revision": "b389cfb5d5ca915609b00d8b2dfc6b93"
  },
  {
    "url": "assets/js/64.f825a8f8.js",
    "revision": "1a43ed5add4806f6ff86faeb9c761e7f"
  },
  {
    "url": "assets/js/65.5ff00b84.js",
    "revision": "e378d895736ab852e96c10917678aedb"
  },
  {
    "url": "assets/js/66.3a17f3d0.js",
    "revision": "5d1d6c5eb92302d430c4ff7e00cd0805"
  },
  {
    "url": "assets/js/67.ed8d5886.js",
    "revision": "4b9bb2e037227084146f59ffed5adb3d"
  },
  {
    "url": "assets/js/68.f4d149b0.js",
    "revision": "bc0de18a85e581d702e2602d707a601c"
  },
  {
    "url": "assets/js/69.f398ad02.js",
    "revision": "d83b7fff61953ec5ed2cf38abb136506"
  },
  {
    "url": "assets/js/70.c27f5c80.js",
    "revision": "a4a12f3da91a086eeb5bde0166c9c887"
  },
  {
    "url": "assets/js/71.06ed3219.js",
    "revision": "ef8cb6d6851d6806dbb7b586f1fe8ace"
  },
  {
    "url": "assets/js/72.ffc76067.js",
    "revision": "369a75fbf5d6e517a5340d9963f0a954"
  },
  {
    "url": "assets/js/73.70a44f71.js",
    "revision": "f5efda17fd29e48516a92f4bba225f45"
  },
  {
    "url": "assets/js/74.cf39ee12.js",
    "revision": "a30dadd99875c5403d63921681432c40"
  },
  {
    "url": "assets/js/75.de66f7b9.js",
    "revision": "f8be1add3ef5afd6426b0b3e56d9ef03"
  },
  {
    "url": "assets/js/76.115c789a.js",
    "revision": "6923588cea315603a4fc5e6bbdb19f8e"
  },
  {
    "url": "assets/js/77.e3c1a61c.js",
    "revision": "e93a4004601581d3d89127340da4cb67"
  },
  {
    "url": "assets/js/78.15b720eb.js",
    "revision": "8e55f31b9c381770ee3500f9eed6ab68"
  },
  {
    "url": "assets/js/79.d652408b.js",
    "revision": "0ff8bc3031351b370e42cf443b5907e0"
  },
  {
    "url": "assets/js/8.6e3cee84.js",
    "revision": "4686ef4fb807a062b654009c935f6ed6"
  },
  {
    "url": "assets/js/80.8f2eccc4.js",
    "revision": "29f00e2f3fbcb010c5e5574de1133fec"
  },
  {
    "url": "assets/js/81.bf17fe53.js",
    "revision": "5fc5a8ad9ec396862ec14e814eb0476f"
  },
  {
    "url": "assets/js/82.fec9bb36.js",
    "revision": "c0a654ea5a55e0630015e6326ec41855"
  },
  {
    "url": "assets/js/83.27a5d72a.js",
    "revision": "58a7f3feb8f9e799e2f207c92786437a"
  },
  {
    "url": "assets/js/84.86c2b9e3.js",
    "revision": "0de0e23845de206145e16b07203af82e"
  },
  {
    "url": "assets/js/85.702a2e79.js",
    "revision": "58d761b712f78ab62781ba8ec4d43141"
  },
  {
    "url": "assets/js/86.5946d2a1.js",
    "revision": "5babeeef81d404ecae18c4fb0b917cab"
  },
  {
    "url": "assets/js/87.b722f582.js",
    "revision": "670df6bf5f519a348f001d4ff5210ac9"
  },
  {
    "url": "assets/js/88.ae16e87e.js",
    "revision": "41130154e668ad393f60cfa31125a148"
  },
  {
    "url": "assets/js/89.1ef0f0bf.js",
    "revision": "a5505afed80360d2bf05cc53368adb30"
  },
  {
    "url": "assets/js/9.e9144c78.js",
    "revision": "2e239ff76561299ae1f114b9a43f7dad"
  },
  {
    "url": "assets/js/90.ceb041e7.js",
    "revision": "f1066070965dcd84a3e3f9ac79297b39"
  },
  {
    "url": "assets/js/91.08f07888.js",
    "revision": "e17bdd7ff5986439a762194fa23b7eb7"
  },
  {
    "url": "assets/js/92.f23ba5fa.js",
    "revision": "04dd8613520504c004eea346d696ff76"
  },
  {
    "url": "assets/js/93.2414730c.js",
    "revision": "1341c5e36480dfa39bf0e98dad229279"
  },
  {
    "url": "assets/js/94.2ed6e373.js",
    "revision": "f4943cd4989f373f50fa69aa13ca6e53"
  },
  {
    "url": "assets/js/95.a35aa36c.js",
    "revision": "6b4ee6a6ebdb5a7421df74a29f7fafb4"
  },
  {
    "url": "assets/js/96.6ef3c97b.js",
    "revision": "0db88564466cc01d5bf987dd0278dff6"
  },
  {
    "url": "assets/js/97.6ff202e5.js",
    "revision": "fca57fb352927ecdd7a3d9c7902aec51"
  },
  {
    "url": "assets/js/98.13bbc9ca.js",
    "revision": "7a0b8da07ffb0bdc69af48e5d55006a6"
  },
  {
    "url": "assets/js/99.f9f6cb42.js",
    "revision": "75ca12330e9af677e65eab4f9f47e889"
  },
  {
    "url": "assets/js/app.8b020163.js",
    "revision": "aa4c9d557aa67cf89e9516a8fd3b15ae"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "8d939a7b5fa398cfaa7029f982078fcc"
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
