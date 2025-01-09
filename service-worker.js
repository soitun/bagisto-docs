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
    "revision": "7f192bcd952cbe4434396b966eb650e2"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "c737f48aa965ac861eca472361cd5801"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "5fdbf978e1a5b1dc2d556e37fa780ae3"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "f0d0e4a683b958635b32bc2295bfb13a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b70d43e282e40e45bc74e134bbfb4fd2"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "78af94e57cc5fc58f294f8939f46f765"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "64831c3f4490e5b582e7a75923007dd7"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "58df7958d9635b54bf1268877652e47a"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "74865e8c002fd8c3065a8edd5bccada1"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "884c9d9ea04a1700fa32d274bb8352e0"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "048e54f64f62838145d10628b68f2837"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "dc815714cac81b7afca4879406b986e6"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "0519716b39b008d1668f205d094c346c"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "78299546de99a1e82e5338df6df6e63c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "d952738fe1e3e46c82c58349c2c551e4"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "19299e9eeabaee02dbedea3bbb598cae"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "2a9caf7c927227dff1c45e34e2303279"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "3758e95c0d1880f9707b75918b5da2ca"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "ebe51e5ffc2afa240714b8eaa6d79316"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "459f60ea9ce628f5a3b69bf897cb9ea6"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "1872988d8ae61d3a8448a9e60d5faa8b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "1742efbc03017ec194e154d4885b57d9"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b0c6530aa6da8d8c03f98d1c5778516c"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "43c047385c7fc66ed69ab86b7725e859"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b9fd1e5625d29f6c0437b40d34049ecd"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "33d57ba980eb707ad507a4e68af2cb0c"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "527beda11208fa3719574287b4ff8556"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6ff4d7e4cab468b2c01e1a6836a8e73b"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "6dfb7e0347da7ebaac3c82a59cb62843"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "766774e32f74f86fdf5ff0e7c0a902ae"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "be8f8d6116b30b36e2afc947e2e8b637"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e8fa1384171766e2973fa6faceee3f68"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "2b7ac10f25905749a2a0617fa8a4e61d"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "d9f5b10af802c449724e14d38f164120"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "0ff79835345eae7bcad8c41e69099778"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "c598a8ed9532579f6e7b6fb5aa55e8d7"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "a67941105966895039256c9b1216e217"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "4c1bb1841ef6eafe6471be9151d33184"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "16dbdebb6d98de2b97a92157ec9bc191"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "d7ea17b58c35a7c4f637c41fd8a06667"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5766d64c5fd50c78092ee894c551d744"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "b7a660d298d3fa291e247ae85c07c3e2"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "55fa25edd907c7e9ebbbd3ac7dd16dbe"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "7a624c319b00dd5a7b719c67c7bc95c1"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "e39cfeeb4fe55238c393ff0497d121aa"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "2c17d22f910bde388c30c2ebabfebe6e"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0bf458c15cb25c61fccd1d409310adec"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "88b604094d751dfd2256d645951a5b58"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "da32e0d4463245c08cdca4198f179fe1"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "7435efd0a7bcf7724ce6a98504604622"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "3d34261238f0ba0c38d2fa349219c49b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "4d2eb8c53c73b9d78ea1ae819b889ab9"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d1f2c7b6bbbeb55f705cefcb7ad4da26"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0df6afcb94fc827df6d695879c4d1c05"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "11228ab73e84c5461c8a9f871f55db92"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d1ce9d9af33250dd72131b448d095242"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "475cadbc317fba1e090b1a8b09c89e22"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "421321ac25730b664bb7ad6822dc89d6"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "715b6a264b776eecedbce79f90344ddf"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c3fe676a7467e07e3c4a4cb7f01b2d4c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "8a23e72e5774bf68c8d95ce9cd51aa7b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "41fd2149440215fcbf8c336bfa587764"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "84e0b43c036a45919360106ea8ce2fee"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d430f37e27a2e14001b3e1459520fe71"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "8267405b8101d0453a76ad95c5c6b4ea"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "713ff5547f942dd2c4cf731b8093f7ed"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "bb68641d6248b7020b9464cf58e621b1"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "3e1833282561eb1a5fa839121b9808fa"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a7b7a64aefe74bf98fb0cb67d6c71620"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c7016b2fafc72d03595b6a51ca900eb5"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "d63abce6295d02a529fa2f66b106923c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d0ea647dbc273f216bb0f2f0616e50b1"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c56d585aa81cc80824b44c13a7598d59"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "90ac626fdfcd37cb8f8e00f95303076d"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "0e9dbf2cdd9e481c8f8f0d20cebfc528"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "8093034e6c67c8b6a29e70ee7f7ee21c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "fcb8970ff9d09ba3bd6d00199733a3d1"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "76ab8a1bc212b28b27c6ee5f1287f180"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "56a6698b6359af7418f9350d19a84bee"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d9132d6bdcb8ea3b4bd3e3f6dd44bc7e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "ef14fda77904ed236efd6eb4f0c8886c"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "4a3ea129e43c3f92fdbdf32732f11736"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "31bc62d25b08b9719c95b6ede3894cb3"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "25f4871c58bcb4217897f48bef233ab3"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b68a136d1e430465e333320f39b7184c"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "19c735b49384c08871c437398d5fd334"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "88615849aa5b4cc6d8041f856bbd04f7"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "0690fcdbe46bdcb645d28f74bc034e1d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d282620d597c432b043b61616f65a11a"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "891526cb367e3fd37b4a6fc9bfcd8c4a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "a39fffa22b5d2a84d85698c3804a6379"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "04db175512371ecee7949e60cc7653f8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f00a39bf780acbd195ad753692f6f97b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "0a0fde991af8ecdfdae5325261b178e0"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6ae1a74cc34ade6037a9321216f0d057"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "743cdb7071c6571255d90d8de3c0c1d7"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "af903fbbfee6170dbc5c8daad0d94db1"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b3a0e6a9c8612f3c4190574e76ea432e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "6d4cd98d1c2f5859bffdccf1fec68536"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "37d581925a5f6525021a5ec71734d8d8"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "df91cf60880b1a7c5d17140394a4687c"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "07107354811a33752a267f2061d62b16"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "c985de4ca3f0ac80c564596cf339e6c6"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "19f6982756e628cc273b0e2b61b63335"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9a5e97e6740d42673f8097597c6aa372"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bcd6a57fd2ca52e588588d3a7cfca213"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "448f3b09b0c8047bd9095fb3648aa0c3"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "832e84f4872f6dd24fed4cb8de64fe1c"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c0c95b56d68dfca035917986e14e070a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "248595e5c74ae8e64f4124a79bc2c41e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "e6266a29687b9f90372691652595f897"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "9c5b9d103a3be70b35969b95e56eed7f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d37988453dca25d9c87ab3d8c2f784d2"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "b3593d8bf7c03a3c39be521d6ab3fe1a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "cb6cdc7e1a1b828d4ffde6de7a9f7a9a"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "ba651d887cace62d87bf5fec93bbc322"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a52e8479b6575780b0bfb6b6076e1465"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4b53fafc2343b194c413d5e08eb292c2"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "871f97bac7f4bb9db7aa9a0f449c3c06"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "54b345cd9132069be47d581dd3251900"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "9a8fb3219b369f86196a329f604fd736"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "88af6d214cde0c0994589ba437bc1b66"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "786f2d479aaf5a6381da98dcaf40d27c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "bc6ba5151b510055b335d1a79c05eec2"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "565b380029f2522190d6d8163c3d88e7"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "fbfc926436bbb653915bebd0aa204832"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "ad6c90c3bd25076b86c3d561d4435d19"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "10c0202cdff305b8a7384531663b8726"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "66b191f44b745aef397363a40bfcc3de"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "388e5133e67811ee8cfb7ca497842b91"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "f694fcd336482cf4070ac82a01eea3ba"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "23a1ce38e205ab2145095b1ece92097c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0caf3cf963b804d50c16b926d07fcb87"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "12fcf079bb5e1c1a63eb05ad8acea215"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "46e4df814969befe517d6179d16231ee"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "a76618e80d0c94a4b85b22a70c6bc7a9"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "609179108798201e6d79f4a14e400027"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "438090c66fe73a5e9fb96271119b1ff0"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "15f41d98310b48e9f5a79daee030e215"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "826a98a86b75100bb887e89548ab9fe5"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "b56de62ddb55af857395a562a9ffefd0"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "873951d83353bad3823729b31a00d076"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "d4a299ae0750e058c2a9db0207c3def8"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "0ff13b5a5e7a8e5dd0ed2b7c27311bc8"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "c66643ac33dd80838a98a7535f7a43f1"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "a1c8bfd7e7b30534294358e0f478e74c"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "ecaccd10b0970a79a5720aedec46f32a"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "fff316689b6f2743fa3c03f10ce3f08f"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "f69e9aea98583290d499f03d59304023"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "e14c24f789f136827eb040c07339df65"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "c0f91b75933ee20c5f1b1042d2811ec1"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "2c04e34757a1b516647b3245b0e2ade5"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "92bbff19055136e50f66ba7cefd2f1ed"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "ff1b4c058972ea70d37c08442914414c"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "1015dcbf549f2f38d46f6c9364906d74"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "2b7d297ed565fe4db8054bc34d02642a"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "985e50f6374b2d203ca4fcaac3a9e521"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "ada1d40d53ce92a689969f28218ffb21"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "8e8e6a188d7ed9903ec1f5c6224ffc67"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "f94b149444f4c2c3d6509bd224e7c0c6"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "c2c410d708ba549706be680ca1fba941"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "c59a94922c35bc09ff089b7ad838ee13"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "45fc61f16cb8fead8e20d1fb842c757b"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "358f1fc32956fb37239db32cbb10dbe5"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "42c7b08ca99ab9dd07667848e88df348"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "80b8f638cf9c94e916c70f77850128a6"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "6374a090cc39ac1ce79f61bdbad5e4c9"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "cf0a7229497504489ebfb082e8d2852d"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "392f59dc3498759809d4e5c0c8c0620e"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "0f703fca4c16ec7168c9a9de6aea6f48"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "cb007b74a4566e7f0f4eb8bf657a8ff7"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "02c6614bc61d0c417d9dfe64e75aeac7"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "3027f7040de5be5a35434a81e86b54d4"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "4e4ae52febd06c09dcfc467f0e623fbe"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "af12bba9f017f2cf0d81f54af052c3a6"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "819cce7c9f9af2269cc01a65591197bf"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "6999483b17ba9fdc416415c22094a795"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "3fa7d036a9404d414a9de68b4808bee8"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "13bcbb142f1f397dcae53523b8a6fab7"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "a81ca1d65d6db8e83408eb70c86c8e34"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "f627926001be1840bd3668c76b08c378"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "10ab1f8ffea496e326fa84c5bf97d9ae"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "e234e9b39d82b62eec1ddff82f7e884c"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "6dcbc429601d2c644d13be7438cb537e"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "3e99a903850c965e637a90bdc6cac781"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "5e00dbb3cb3ef745e3e59310819def85"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "52995f5df3f3e4871cf5f3e4c4eaec1f"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "3833292a3c3f1f7701331fb6bc6cbd22"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "16033edf20b90aae56a85e35cb4d07b9"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "c79626b7749733b5efaa9494a6433e0e"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "535b2566fa84a1485d1dc8de42ae3dac"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "32fdb286ef9f31f4d49d1938c268ac37"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "532b14fb4af1a89f7b4fc08663e8bb58"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "4ebfaf60765d0b69c618fb54bacc1735"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "2d63ba79e9c22bdd89293cba68cdeea3"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "5940aba936cca542b4f615a42d2411a8"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "72ebf7c1abad48794749e8c9bd510c4e"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "55f6276908b19859b533f6fc36e7848b"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "60a7d7a4b8d3be6e81857874ce22a426"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "587e4f04d4bf00c142d1973ce2541fdf"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "0adc2c45101617d74b3bf49215de6503"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "c0f7e361cbb4c64aa613bad50ee1ab51"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "e43f9498ff5f894657448faa99036a8a"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "3ef52f0b7158e3c1e9e66a8ea66848ba"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "cfe9e5cf211bfe1da79cc041b5c41acb"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "50a7b8d48e7f27d7445614e4e85c0cf6"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "af0879cdee61f714bbccbea6c9401020"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "760242f9121937ef2899c148593491d5"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "2e6adeb840a6b04464c2777238549b5f"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "df9774e37b393943afc84bd1a3ad761b"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "8fa23bfe16a4ddf0da2bc63c491cbfa5"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "ff19c10b1a89fdfde33251ed7a21d4e8"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "33fb963bf00285a615c1fc1fd052096c"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "c24f23027c8799f9815de62edbd1ebaf"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "483ba37d367fa4ebb9b54196cb8353a1"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "d3ace8dac3dda3978a7c70f5a988063f"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "cff09a4dca2c6777dd1e069f915442be"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "8d8b9759dd890eaba39fabb75da68d7f"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "e7a6fd45f8db8f1eeded4a3ca7363df2"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "4570732a9300c30ca043ddae95b68ccf"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "3fbb8e1c880a3fe319569cc7800c06ca"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "4b610abb87b16f363e4c2b98d5f16e6d"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "9ae6743a543e094ce7659a6152f52075"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "5e61da58c5547f7147b53ee2cef6b159"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "262f0021792010229ff9f07e442ded65"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "29740adc1697f93ad3984abfb0b848cd"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "07a5fa948a4215d9b939e430d665682b"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "864fba76d0e0011b6dccbce6d128e643"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "6ccb4524590f38470bec0652473a56d0"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "ff5836bbfc13020c5758dc64ceeb3eb5"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "62fe5d63741423647dc3222b0f7411b5"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "7077b26c147eddd8480cf5b53130fac9"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "ae669aad9a402d9603dbb748dcab8d43"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "c333c79f7669bbb1409972eba45e402c"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "aff800b8a0268d8bf3952e2e58886dce"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "5452698ea252e6a967e182020e365133"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "1396e2189d1d5fecfe133d2deda0f1d4"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "5eaaa1aeb1e04b3d10855b10859261dc"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "b01d2d1b7e70cc490a5942dc88412c00"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7ac343b7ee3b2326b49f91dd95796715"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "763bcce025ede28a6ed0a475e9dcd178"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "85f22fe4ce3fbcc4450846954287a713"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "c53162ee2fc4a81a712b3b80a0226edc"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "0b3ff357953ac162107274f03d3f5113"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "01bf7e6b66afe158062ae711046c507e"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "b3cf20070109931443dc66db148a72b7"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "f664d1fb95d614eee936e18604da19b1"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "e5155e154063acfb43cc33f976ff1b99"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "533ac4e09028dea18598150d8d6ef3a2"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "d02cdabf80b574a079408c66ed27d85c"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "7e2f80371471ed69cfe0301f87e29c6e"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "66b00f23a8abdaf1c1a574792c377ef5"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "d668fa5f4dcfc57fe4961c548aef7a03"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "fb4a45411f5c5c3142f2658a787ee867"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "9f3d0eeac06ef55600707a3f3dad77a4"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "c514ef64d4074441da4959bd40ed7297"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "20b3f792855681e90d911941d210b72f"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "83c63e1f48c716c7a4fcd721e13542df"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "5c497801fc4678672dafa4d7884ae29b"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "82b6ae59585cd07951a9f14a8e1f64f0"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "75f862d3a82a1a655ce627fc60df6237"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "fb23aa37f90872850efc28ccd4d13ea9"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "6bbea339a2ce11cd2e4a577fb6d2ac2f"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "269e347ea6039594f903c01deef491fa"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "a012a6b597d51c753637019b38a401b7"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "847cf17773154ec04d6e6f3c68cc869d"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "fae2cedb946b064d6b0ab838341c3405"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "3b114434ad4e2573b97dbd704ed203c8"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "2cdbc0b59e84abb650210fdff20fa809"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "dcaf990b07ca70f05aecb3421b75f910"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "876eabca56b703560adec4472a82c97c"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "0f2fbd3188fb8dae1625f6a2d32fc33a"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "e941f1bd60a2b4d11ae73026a7c43ff5"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "9125887962090c0c8495642e9fa8c14e"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "10fd3ff4fb047f26fd1b4c0745b86994"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "87fd67b0c0f044c20ae4d761053d6b37"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "03027676b05e7c8f513732b3e9020ea2"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "906210bd41aa2ff9be355d85a618a07d"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "132c8cd7ccedc0dc6cbe2c48cab94895"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "cb91aed4c2921a69b9174a02f77abb33"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "c0861a7a6508d23deb8ff75ddd55d110"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "4fac66148b2f9faa0e75d20603f973c3"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "9b34d224fbd472f7468eed61771c90a7"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "c78a4685dcc1aae63c1c3c8b4703a325"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "2a72504221b157dd3b980002a23538d1"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "f0dfcd292f4313508a1d1d1408e838dd"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "230f84e451b20e9e0d9d03c0a68d278d"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "274958d5302b68aaedb9753340166a5c"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "86cfa2ebf8f00332fad4b0cf1d123d54"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0dae6188188d81563816f7b5e28663de"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "2a4db19b4bf0a659a972a1d9eae8f16f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "bfc35ea325279d852a974ed244495bcf"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "a279f53f34600306d8413668ca2c4e02"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "0b7626ac6e6979db25f733800f72cffa"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "b4f3c6aee99de06539886f7f4db2e18d"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "1ad10e65e10e2b5005903d537fc4072e"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "eca74aed0b5e31adf6022675c37d6649"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "f2deff9d15c407203d356d76711062f7"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "833af4acee43689aa47a5324ce37c79c"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "38592833d6ab90ac86d48b446653c6a6"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "aff61f4b14a382f345c849ba66172b75"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "2b2dbbbc89cbd3271d29e34b46f8468f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "538ba97be057eb1e1ddd6318053dd581"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "2afd2d0e15659705febb36d01efb113c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "2f5691ea082f9dc359617fecda109ce5"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f06bf8153b3583757d9232e82c88aed2"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "262bede8d3bcf99d3c7fee7c00a27e3c"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "8639dd8c24274c2a8503a2f50aaeaea3"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "efc4a9756609cc4ef0e6b55be292ca80"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "0e77a53a1d94ef135b17c9b8cff99828"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "b00f505356a2f2b0803823ac29fd1ac7"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "545bf489b9ee880ec5134d025b630c32"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "a35b8f9e0baa50596d3bd9547117d2e9"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "556da3cad1903c121d1880d721e1d9d5"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "011fe7294cc004227a6f63f4f95e2a7e"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "bfea038ea3c3a35a31dbf53c60995426"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "f6e5736b7fc4c2078630b633c6f2fb8d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "2272aa8e09f9aea64997236b64cfbcf2"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "107f5e4cd43e9cc64a12ed44046cafb5"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "24b6680c1f2cc848fbc75482ad8723c0"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "86b28de4129c1db16e89e074abaff505"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "3093d386b9eca4ce06196f86a05fa396"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "dede5c62087256ab32e341d256cbd14f"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "2697479a5ee10d5f93ae628e0e55fd87"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "53c6b0260a73e9dbf8f86d86b6462461"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "7bfeb1e1566ebf478b110f0a9b887125"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "a253690237ed460e40252df8fcd2ff97"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "788d7de5fa0cf085aeff3749c3e268c0"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "0e007c02a3c027cbed16155805a8a653"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "852c4484b082288d434fd266c5691a6a"
  },
  {
    "url": "404.html",
    "revision": "fe21ce27d7ef4fc29bcfed9408dd6108"
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
    "url": "assets/js/1.c221fa01.js",
    "revision": "629eda5394e941a87bce0fe900b1b47b"
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
    "url": "assets/js/101.7d01048d.js",
    "revision": "5eabd12e1f1acf6b122c5e15ce929e70"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.8ccfd351.js",
    "revision": "3676ef95b148b906543be362cf323e9b"
  },
  {
    "url": "assets/js/104.22e077bf.js",
    "revision": "2c45e5e4d704133bedba7c2a2aca5cc0"
  },
  {
    "url": "assets/js/105.460c6aca.js",
    "revision": "540437c93d1cb7cc1cf47ab9f0018b39"
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
    "url": "assets/js/108.5a6b8dc1.js",
    "revision": "c0b4afd4807470f1d0248c3ca610fbd8"
  },
  {
    "url": "assets/js/109.b27d066a.js",
    "revision": "67d59863fe0219fef4f5ab123db5bde0"
  },
  {
    "url": "assets/js/11.defd2531.js",
    "revision": "e1f90184757c0f8486a42ec2f31cd1ef"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
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
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.ace92a31.js",
    "revision": "5339db492c64ee88c96eefb0593d011a"
  },
  {
    "url": "assets/js/116.ec5e70f2.js",
    "revision": "a6713637db22ad06c06be7a85d665f5b"
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
    "url": "assets/js/12.ffb79c3c.js",
    "revision": "116ca60d4b24eb41276c2f4870f75771"
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
    "url": "assets/js/122.13822ac0.js",
    "revision": "945e4466408aed567d522dbbf55b2f1f"
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
    "url": "assets/js/127.da79fd04.js",
    "revision": "240d9429c969497905ff170ebeb7d41d"
  },
  {
    "url": "assets/js/128.123f6d17.js",
    "revision": "adcd09aba133c07c0b6d2e0e6e73918a"
  },
  {
    "url": "assets/js/129.d2fed830.js",
    "revision": "ea1963ef98b1cc0982bd2fe4796a8079"
  },
  {
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.1904fc64.js",
    "revision": "e7936d4e538fc91f52e34b3790884528"
  },
  {
    "url": "assets/js/131.18e33c46.js",
    "revision": "45e027c998b5736b23b09296833d666e"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.39966d1a.js",
    "revision": "782676b8c28be4de4ea47ca5c8651260"
  },
  {
    "url": "assets/js/134.2dd085e4.js",
    "revision": "4dbf02bb70c60dfb0716b39b8f9606f3"
  },
  {
    "url": "assets/js/135.36f2c2f3.js",
    "revision": "a27a933b2c45f8fc7d55ae2af67bb17f"
  },
  {
    "url": "assets/js/136.878ebc68.js",
    "revision": "e19e8516877a670e326e21c075936d58"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.8c818d00.js",
    "revision": "7a03baea63a7980921f89397473b079b"
  },
  {
    "url": "assets/js/139.4908d250.js",
    "revision": "5ef26970552722e5180434521d94c79e"
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
    "url": "assets/js/141.8a363cea.js",
    "revision": "54a503c9258e44f83890c895f419f4c7"
  },
  {
    "url": "assets/js/142.0d77cea0.js",
    "revision": "2b666b6a1102d1d8e8c1c0ecd3c4a24f"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.6ac64a80.js",
    "revision": "2867b00dcc483225cf42f6d58c0e7e50"
  },
  {
    "url": "assets/js/145.f93a3df7.js",
    "revision": "31ef87d485b795ada98ed102603bae34"
  },
  {
    "url": "assets/js/146.2c9a30aa.js",
    "revision": "bfd372f64b7bf43b7822379e61a728e3"
  },
  {
    "url": "assets/js/147.4aa524b3.js",
    "revision": "d8f1f1fe6900214fc324d2103493e947"
  },
  {
    "url": "assets/js/148.cfb15dda.js",
    "revision": "b701e82424306d793b30971094e43c9a"
  },
  {
    "url": "assets/js/149.ee7b5cdc.js",
    "revision": "82f9afdc8ad946337f4c3e8896aeb18a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.beca4ce9.js",
    "revision": "58f34fefa4e54737ccf6bda2b99c9293"
  },
  {
    "url": "assets/js/151.0844e9c8.js",
    "revision": "7d25f4ea72ffd3ae5dbd7a87b365734b"
  },
  {
    "url": "assets/js/152.4d11478a.js",
    "revision": "e6f02d47480331cc8e6029853178f799"
  },
  {
    "url": "assets/js/153.8f90dee0.js",
    "revision": "8506e6446e4d68ee2493ba0805182b9e"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.2e0e2ec9.js",
    "revision": "dde1b1990bef573ba52a08fc02251cc4"
  },
  {
    "url": "assets/js/158.8185b9bc.js",
    "revision": "6166a0a28cc2b31e2ce7a764ea8be232"
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
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.00b434cd.js",
    "revision": "aae28cf8b6c16d9214c3078e6024d0c1"
  },
  {
    "url": "assets/js/163.c133d293.js",
    "revision": "3015cdc24bb3a11ec3df279adf3ff0f5"
  },
  {
    "url": "assets/js/164.77a36066.js",
    "revision": "d5678d209bbcd9395b22603dfd2daa3d"
  },
  {
    "url": "assets/js/165.9028fd32.js",
    "revision": "886bd063c76269d15b3db70498362a47"
  },
  {
    "url": "assets/js/166.e21eb529.js",
    "revision": "93e77a184b81e15b51cfeb740784420e"
  },
  {
    "url": "assets/js/167.434dcc1a.js",
    "revision": "2d4292282057dbb7973f8d5fea7f462a"
  },
  {
    "url": "assets/js/168.27cabced.js",
    "revision": "fe0243454c5c9d7f8585793662430ecd"
  },
  {
    "url": "assets/js/169.d60b4a21.js",
    "revision": "e74a9c2aae78e269e0812b3853fb778a"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.2eecec6a.js",
    "revision": "2ebbe613485432e6f627823bc8c80c0e"
  },
  {
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.1045b626.js",
    "revision": "7e815ee4a2fee4a8948ee3121f691dff"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.e133e165.js",
    "revision": "a5e76a16c875230755b73f96b6afdd89"
  },
  {
    "url": "assets/js/175.86cac7a6.js",
    "revision": "fa094450c2a4e8119fcd28c3708f9b01"
  },
  {
    "url": "assets/js/176.dcaa5cc1.js",
    "revision": "6d10257bff2e72fd9d4be4afbeb791a2"
  },
  {
    "url": "assets/js/177.6b1dffe7.js",
    "revision": "d3c5867d8b821a77c76e6b0a63044f74"
  },
  {
    "url": "assets/js/178.11ad38bf.js",
    "revision": "69fbadd72eb916c6e1d818172f5ba1b1"
  },
  {
    "url": "assets/js/179.8689e1bf.js",
    "revision": "02101be3a0ff048bf68b35f6fdb1857b"
  },
  {
    "url": "assets/js/18.9258674f.js",
    "revision": "5288863685993cd679d9b89ce68a2710"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.9a0bf6c0.js",
    "revision": "f6b6e441c3343e8c43f23bcd58f5b9c6"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.90e29939.js",
    "revision": "69423cb2315d672dc69664e4d894cfad"
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
    "url": "assets/js/188.34efcdc3.js",
    "revision": "3ef0cb0b0b0f8d47c03695afc8530304"
  },
  {
    "url": "assets/js/189.0eaaa1be.js",
    "revision": "7e872100b3aed47c7b3c86cc4fbaebb6"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.b2ba5d27.js",
    "revision": "7cfafbcacfa8a8a962df38d7f8b44b77"
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
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.1c2f7dc2.js",
    "revision": "26a3ca6f1b70be0b74cd28df51d81944"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
  },
  {
    "url": "assets/js/196.a5f84907.js",
    "revision": "283bf122c08b1ba946b5e629ebc978c6"
  },
  {
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
  },
  {
    "url": "assets/js/198.ce3c4fd4.js",
    "revision": "4828072703f4c71c5ad98815d9e4f586"
  },
  {
    "url": "assets/js/199.84d4d90d.js",
    "revision": "a8b9c7a3291d24b3165839e723f562e2"
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
    "url": "assets/js/200.a05d7fb0.js",
    "revision": "89975121d41c1c4ef0159db9ce5ace89"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.843a03e2.js",
    "revision": "044f77f9890f7dcaf4860e87a37a6ab1"
  },
  {
    "url": "assets/js/203.be70b315.js",
    "revision": "fe921b956f645d1f66afe50e1c510297"
  },
  {
    "url": "assets/js/204.d1e18d2f.js",
    "revision": "88790b8bf0262c6a1472c108873152d7"
  },
  {
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
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
    "url": "assets/js/210.335504cb.js",
    "revision": "5810088f5aa4f1f558136026d00b5bfb"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.42016fe9.js",
    "revision": "504ea6ffa607881fbcc15dc5e2a5b8a5"
  },
  {
    "url": "assets/js/213.bdb9e73c.js",
    "revision": "7cfab1bc8137c04de243b84540d9e1d8"
  },
  {
    "url": "assets/js/214.8fcd17f2.js",
    "revision": "681530daa0d7be2dc01c6d3ee3016faf"
  },
  {
    "url": "assets/js/215.b2e1395c.js",
    "revision": "2454b89fc7d2f7c431a5ea207def88d1"
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
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
  },
  {
    "url": "assets/js/219.29a624b7.js",
    "revision": "e3129cee20240fcc7cfc342446bf5734"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.224f6f03.js",
    "revision": "7218121fb9180cace5d867d45b1bf860"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.6f44bfe4.js",
    "revision": "1ae2b23f0528e2a1c583801b1bb31ddb"
  },
  {
    "url": "assets/js/224.031150f5.js",
    "revision": "1674af67e18d8f75d6d4884941f1eb5d"
  },
  {
    "url": "assets/js/225.c4fbf7f7.js",
    "revision": "f91dffae433b432e74af9870018ce664"
  },
  {
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.a321d001.js",
    "revision": "0551da5fe671b2bb176d9b2063218466"
  },
  {
    "url": "assets/js/228.95009891.js",
    "revision": "608a61d4b2ab9b8397cc5afd081411b1"
  },
  {
    "url": "assets/js/229.6205ce7a.js",
    "revision": "329ce95c4bdfcadcdec27aec6b64fabd"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.f6aeeddf.js",
    "revision": "7d1cb5e64bea0322cfb4d7c984b3f01b"
  },
  {
    "url": "assets/js/231.3522f657.js",
    "revision": "6c62004e2b7af56d7a12b36388902ffe"
  },
  {
    "url": "assets/js/232.f83edd0d.js",
    "revision": "8bf083427362dcf4e56cdf8322ef5391"
  },
  {
    "url": "assets/js/233.682bc67c.js",
    "revision": "91870d823fcf97723ec524f5d4e91507"
  },
  {
    "url": "assets/js/234.43659f5b.js",
    "revision": "a9a7897132b0554d0ede87b0a6fbc90d"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.c652352f.js",
    "revision": "8e688b0882960db0db968f05943ab75d"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.a4f01c11.js",
    "revision": "31efe0b699f27aa87766599029c94e7b"
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
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.4b5665d4.js",
    "revision": "d983ce10ffdd6eea3dc342fbec073c90"
  },
  {
    "url": "assets/js/242.66c778bc.js",
    "revision": "48fb6cb54ecce2d65fdfd64c67e33517"
  },
  {
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.06fe3eb2.js",
    "revision": "358bac4a39637917a35a567d6fb3e3de"
  },
  {
    "url": "assets/js/245.32d05108.js",
    "revision": "94b631ed8e27da393b27dad5600761ab"
  },
  {
    "url": "assets/js/246.bedb27a3.js",
    "revision": "2ed935a11e471f379057c7380d802cba"
  },
  {
    "url": "assets/js/247.ad3b2f24.js",
    "revision": "f2f863c711a8eb05b5973b4a938ad8e1"
  },
  {
    "url": "assets/js/248.f3ad498d.js",
    "revision": "70086fdd0d7b371cbe24f46c9bfc7d70"
  },
  {
    "url": "assets/js/249.42de761e.js",
    "revision": "29bb76bb110f4f0d954f6b47c03afcf7"
  },
  {
    "url": "assets/js/25.a20030e0.js",
    "revision": "53e2c5fdb97be8d22e0cf6e846dbc3d7"
  },
  {
    "url": "assets/js/250.d199dd1f.js",
    "revision": "5dbd184f53f9c70f82b4587a5ffcb924"
  },
  {
    "url": "assets/js/251.2e9af42f.js",
    "revision": "058bd95c6e58b5ff67be887f8546c413"
  },
  {
    "url": "assets/js/252.66a56e26.js",
    "revision": "a3e2a8dd1d93392f7149b64571d5e19a"
  },
  {
    "url": "assets/js/253.91a3a85c.js",
    "revision": "96bf63a2d6bee6dc22854b5350fe9198"
  },
  {
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.22c30c46.js",
    "revision": "431837078f21815c29a19515f98aeed3"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.c338bd75.js",
    "revision": "11cd17fb418ddd8827eef8ff84c15904"
  },
  {
    "url": "assets/js/258.4c4c2116.js",
    "revision": "e7b06ff75519640fef463c4fb77f0a90"
  },
  {
    "url": "assets/js/259.25bed776.js",
    "revision": "4b8150eef1823fb06b4ab660136a80c5"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.73f93e19.js",
    "revision": "e4d48b787f9d5b90496f7727a783f32d"
  },
  {
    "url": "assets/js/262.aebc1fed.js",
    "revision": "af019183f119184c020b85f97edeb25d"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.df080b6c.js",
    "revision": "423d5a7cca89eb2367820c9f739b96ca"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.1828efad.js",
    "revision": "f5806f6ecebb3ab2e896ab9c124f643d"
  },
  {
    "url": "assets/js/267.e7dd34ac.js",
    "revision": "3fb646ab491763bad53b733526fb9b54"
  },
  {
    "url": "assets/js/268.75c93b25.js",
    "revision": "5c90b619303a20a1118d55ed4210309e"
  },
  {
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.4b96b632.js",
    "revision": "0c4d46dd81ebd11921cb86375f54f14a"
  },
  {
    "url": "assets/js/271.13031df7.js",
    "revision": "d6664cd9f5fb5a6c8c8b611fe27d795d"
  },
  {
    "url": "assets/js/272.461b7123.js",
    "revision": "cf9248240d7a56e8932d225881da407e"
  },
  {
    "url": "assets/js/273.3f13aab5.js",
    "revision": "214708b33a60eceeaeed2829f39e402f"
  },
  {
    "url": "assets/js/274.4998eeb9.js",
    "revision": "e81dacaff36333f5429f1f6c4ea4cdb5"
  },
  {
    "url": "assets/js/275.afb3444f.js",
    "revision": "74487809ad28166a762e9a011709d08b"
  },
  {
    "url": "assets/js/276.1bd6217b.js",
    "revision": "27dd3c7864694a10dfc79235bae1c376"
  },
  {
    "url": "assets/js/277.0d6cd0f1.js",
    "revision": "a8033b46cffed1b13996b8b18838a443"
  },
  {
    "url": "assets/js/278.845c437b.js",
    "revision": "4962f9007a3139233894c84363be8134"
  },
  {
    "url": "assets/js/279.20805f1c.js",
    "revision": "3b37e8070d1f0d05e52dbaa93c19dc3f"
  },
  {
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.8108fc97.js",
    "revision": "e18bc8e261e337243a31931e3081940b"
  },
  {
    "url": "assets/js/281.cb3383e8.js",
    "revision": "5d885c8a84485c752d696ab4793d82be"
  },
  {
    "url": "assets/js/282.87b86e8a.js",
    "revision": "d10f2e88bf13b752f8380725ba498257"
  },
  {
    "url": "assets/js/283.22e6d0df.js",
    "revision": "088781619f867d271aef72cb4092d5bc"
  },
  {
    "url": "assets/js/284.76b4bc57.js",
    "revision": "7aaca21e0bb278fb238c78eb8c5f01d4"
  },
  {
    "url": "assets/js/285.f7ed5fc9.js",
    "revision": "e994ba5e6203fb17579e493615e2d64c"
  },
  {
    "url": "assets/js/286.ebfb5f8b.js",
    "revision": "a415dcc48b51cdf644c6fd085eb85013"
  },
  {
    "url": "assets/js/287.9ac94fed.js",
    "revision": "13e61a7e84176ab4c6eb9d79f7725239"
  },
  {
    "url": "assets/js/288.11180f92.js",
    "revision": "af726e73368618cf0889c4f7f4297f6c"
  },
  {
    "url": "assets/js/289.c7866b6b.js",
    "revision": "a89b8ab7783991592c1ccbc72c777dbf"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.44dcab04.js",
    "revision": "abc11d063ae708c9ac0f95381ff36ace"
  },
  {
    "url": "assets/js/291.77c11946.js",
    "revision": "435210e4edec3cfea0664c8825e99454"
  },
  {
    "url": "assets/js/292.8febd0de.js",
    "revision": "08281302e609a1253e5a3274a57dcb47"
  },
  {
    "url": "assets/js/293.909e9c8e.js",
    "revision": "9b4a8aa948e109992aa0f8304aa4d153"
  },
  {
    "url": "assets/js/294.61422d28.js",
    "revision": "754c6275f0b44204c5e03218987def6b"
  },
  {
    "url": "assets/js/295.54db778d.js",
    "revision": "0db7319e5fbde5f6eb9e215c814e943d"
  },
  {
    "url": "assets/js/296.0afe4138.js",
    "revision": "2d437c599334c24bba90cea2e33f0835"
  },
  {
    "url": "assets/js/297.038cf132.js",
    "revision": "b9b6d13ceedc15bc2c9c2fc43c845259"
  },
  {
    "url": "assets/js/298.2c1845e6.js",
    "revision": "d84622cc265265e6f325e972c3b69977"
  },
  {
    "url": "assets/js/299.5d9d3e25.js",
    "revision": "8e8394f293fb8845478c7beda5674a6c"
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
    "url": "assets/js/300.892dfa9b.js",
    "revision": "a5436c118ec4eb547185b0e37981cdaa"
  },
  {
    "url": "assets/js/301.61c099e1.js",
    "revision": "fbb70c17ec0b5ec32132dc4066306883"
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
    "url": "assets/js/304.92e23ec2.js",
    "revision": "806bd0193c1204ce67c042f420c5d6cc"
  },
  {
    "url": "assets/js/305.b736508d.js",
    "revision": "bb850698dbe881bbfb983a48ccf87192"
  },
  {
    "url": "assets/js/306.517921a0.js",
    "revision": "0db5069a197120773934e0118d37e4f1"
  },
  {
    "url": "assets/js/307.37090019.js",
    "revision": "467c11ae3d551bd6d189f540141dcf8f"
  },
  {
    "url": "assets/js/308.e4b2c8aa.js",
    "revision": "5a48398be6050e03ded0c7c6071a9659"
  },
  {
    "url": "assets/js/309.7bc50092.js",
    "revision": "c8dac9857ccbfcc9b4ef553c35868884"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.ae8c47e7.js",
    "revision": "5b6d4cd43a82ec7a145c61c214b201a1"
  },
  {
    "url": "assets/js/311.6349061c.js",
    "revision": "fd3658b8cea2559c0e8d64329ab24f80"
  },
  {
    "url": "assets/js/312.047d307e.js",
    "revision": "0f195355bf8c7590c5751ae63236863f"
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
    "url": "assets/js/315.1023440e.js",
    "revision": "f45608552873be3f5310674b85084b52"
  },
  {
    "url": "assets/js/316.0fb2ccd5.js",
    "revision": "477fb10ec08e88c2f49b12762b38468b"
  },
  {
    "url": "assets/js/317.ce436fd6.js",
    "revision": "450fde0e45185f5ffd571e8a323500ea"
  },
  {
    "url": "assets/js/318.3b6c16f9.js",
    "revision": "d9cd1c71f0a08da8266c78c48c6cb8e0"
  },
  {
    "url": "assets/js/319.679e20a1.js",
    "revision": "472a9472673edf488f88d8652af12164"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.20e90745.js",
    "revision": "630275aed6fd187c7b7c8a9f8bbd9059"
  },
  {
    "url": "assets/js/321.f7925280.js",
    "revision": "10f7bdf606797edf25ee8747aed813e5"
  },
  {
    "url": "assets/js/322.34561e01.js",
    "revision": "fe46b2d8ec749d0d707ad13a317cccec"
  },
  {
    "url": "assets/js/323.dd6ef543.js",
    "revision": "88c19dda3de9228efe2579d9c3410579"
  },
  {
    "url": "assets/js/324.e87239e8.js",
    "revision": "934f6a0d70b977aaca38caae755051c5"
  },
  {
    "url": "assets/js/325.49e31265.js",
    "revision": "30ccb08fb2155f297d9c1cc31d43c6ec"
  },
  {
    "url": "assets/js/326.8d9198da.js",
    "revision": "7bdbea8a28b65c0fe88b9401b1f63bf8"
  },
  {
    "url": "assets/js/327.d565a148.js",
    "revision": "cbb45fc9912d7252f01b5c20beb98542"
  },
  {
    "url": "assets/js/328.d43145a5.js",
    "revision": "194260c892a8cd62fc008fa203dc26b1"
  },
  {
    "url": "assets/js/329.eecd76de.js",
    "revision": "f9b77ee23de885afdef4f6c0be71efb9"
  },
  {
    "url": "assets/js/33.30f381d4.js",
    "revision": "66f4ebb3d1f513dea3b18f794041a792"
  },
  {
    "url": "assets/js/330.aab70c1d.js",
    "revision": "c0db000965f377e09f57ec1630f72f81"
  },
  {
    "url": "assets/js/331.792ecf7d.js",
    "revision": "1e50cc83d80e7dbfb5de580cb5c22182"
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
    "url": "assets/js/334.e4a965bb.js",
    "revision": "ed301859deefbf31f12490fb7b851dc3"
  },
  {
    "url": "assets/js/335.f16a165c.js",
    "revision": "e8fa84cf274cbcc38b175c8bebf4fdec"
  },
  {
    "url": "assets/js/336.fe70e465.js",
    "revision": "07b1619ce1ca1c2c38a7fe6db4821d30"
  },
  {
    "url": "assets/js/337.9e6c1458.js",
    "revision": "f620114e23304f987fe0efa444882663"
  },
  {
    "url": "assets/js/338.d7060fc6.js",
    "revision": "fcd5ad7b13926f3f63e40bbc59e4f826"
  },
  {
    "url": "assets/js/339.7f06f466.js",
    "revision": "9a4cea7ec9185313302518db0ef46514"
  },
  {
    "url": "assets/js/34.2c29924f.js",
    "revision": "b5126cdf92efb7c084b57af669f20950"
  },
  {
    "url": "assets/js/340.ff73748a.js",
    "revision": "60271d84590d058460ce2379cb175a19"
  },
  {
    "url": "assets/js/341.27f5da91.js",
    "revision": "b12a0a2f478cc61f7f76646d3dbbbaa1"
  },
  {
    "url": "assets/js/342.795ab3aa.js",
    "revision": "1e9d88f5ec63e018a47ff131965d16d4"
  },
  {
    "url": "assets/js/343.6b3a3b7d.js",
    "revision": "12b8916670b160e314bd291e4d2abdd5"
  },
  {
    "url": "assets/js/344.58a1dc46.js",
    "revision": "3a7a472ce2c410db63caf7999e2f7dc5"
  },
  {
    "url": "assets/js/345.35e7853e.js",
    "revision": "9486cd2652fdbcba3482f79ef5da0760"
  },
  {
    "url": "assets/js/346.76324f72.js",
    "revision": "7ff32f0921f98b59ad41fb845d90faa3"
  },
  {
    "url": "assets/js/347.f517e4a0.js",
    "revision": "5a61ea8c20565e50b4da5c3d72bc04d6"
  },
  {
    "url": "assets/js/348.23321f6d.js",
    "revision": "bec645143d7721cb64737ba19e3b4c00"
  },
  {
    "url": "assets/js/349.aff0a094.js",
    "revision": "442db3a581f68232b4432ea0eaba8e21"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
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
    "url": "assets/js/352.92b6b6d1.js",
    "revision": "57ca8cf877eb4593f907a625e62b3a47"
  },
  {
    "url": "assets/js/353.ca682447.js",
    "revision": "4dc77916695dd5b13166b94834395bc8"
  },
  {
    "url": "assets/js/354.8da51156.js",
    "revision": "f3eeb914c9ee35acf7b9625b3615fe79"
  },
  {
    "url": "assets/js/355.be5973a7.js",
    "revision": "a5de507509fadc9ad51ea20bbe4bc03e"
  },
  {
    "url": "assets/js/356.ed27d6cb.js",
    "revision": "c2e80d886ac8836a3f565acdcb2aefd9"
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
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.e5c8715e.js",
    "revision": "b35b1ff0b2809294177a5a60e3b68e75"
  },
  {
    "url": "assets/js/361.0d32835c.js",
    "revision": "cf15729f4a4e11d772d734013bcd8e66"
  },
  {
    "url": "assets/js/362.42867667.js",
    "revision": "00ec0c7187d55208f586bfb4280a4c6a"
  },
  {
    "url": "assets/js/363.61ddb93f.js",
    "revision": "3107c1ff0ad8b3cb8af6494e81dc77c6"
  },
  {
    "url": "assets/js/364.a78b2763.js",
    "revision": "e07156e667588cf86d4ca20c0b8b0a45"
  },
  {
    "url": "assets/js/365.decc15f6.js",
    "revision": "12d7c3b4790b913143e4db7205899d8a"
  },
  {
    "url": "assets/js/366.97d155dc.js",
    "revision": "1bc5cbc3494a0fe192ebc8997c7b524a"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.74aafc99.js",
    "revision": "93486cbe6e1c50b88692f950fcd17ed8"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.f8e30c66.js",
    "revision": "a745e534fb0ced9f25d69e3cde25b7cc"
  },
  {
    "url": "assets/js/372.10991ff2.js",
    "revision": "c891b2b25bba2d9b7b94eb11f7b88689"
  },
  {
    "url": "assets/js/373.ec6e8702.js",
    "revision": "d5e7b79fc243516d40206124874ec1c2"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.ff7bab23.js",
    "revision": "c20e7844cfc0c55d005b8d0c0df0c818"
  },
  {
    "url": "assets/js/376.e1de6e02.js",
    "revision": "3eb2e8cecf93ab3b1b339f7d3e3da323"
  },
  {
    "url": "assets/js/377.64d1f976.js",
    "revision": "877d0fb7669bb139567aeeb8b230cf41"
  },
  {
    "url": "assets/js/378.93c7ea69.js",
    "revision": "3a53466eddc66b7dd87cd9c601468f88"
  },
  {
    "url": "assets/js/379.226d1e7a.js",
    "revision": "e8a4eab681176088fb8881479efae571"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.d3b26fbc.js",
    "revision": "d9431d76a42f4e4930bd3be6079713c3"
  },
  {
    "url": "assets/js/381.81b4c00d.js",
    "revision": "d5c57aef69239c1c4c8009c6755208c1"
  },
  {
    "url": "assets/js/382.33dea46e.js",
    "revision": "d3f719680f7c8b20d4c4750a1a4d36b5"
  },
  {
    "url": "assets/js/383.cdcbc778.js",
    "revision": "15145ef3251a023f7a33af670303eaea"
  },
  {
    "url": "assets/js/384.81f310e0.js",
    "revision": "23ac0c4ff637214f7f5e30fe94c2c9af"
  },
  {
    "url": "assets/js/385.089faa4d.js",
    "revision": "eee8fafade7ef149b723065b603828a2"
  },
  {
    "url": "assets/js/386.14a9dc7c.js",
    "revision": "a5f954a847e3bf3d567987f650b929bf"
  },
  {
    "url": "assets/js/387.75dd8028.js",
    "revision": "dc887194359fd513edd2eb758d7f3f63"
  },
  {
    "url": "assets/js/388.6cd6aead.js",
    "revision": "2208544d738330d8111c98eb11ccc4fb"
  },
  {
    "url": "assets/js/389.d67c171f.js",
    "revision": "2357c97e8fe56a75d188f975f5deadc4"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.3a382d88.js",
    "revision": "9c81a51ed597b5c2a578015652dcf841"
  },
  {
    "url": "assets/js/391.af8175d3.js",
    "revision": "b1bf3eed4feb0f950e1f3d29e0bf3f46"
  },
  {
    "url": "assets/js/392.e4d0f982.js",
    "revision": "e6c848b46254a4840bb29669f180b006"
  },
  {
    "url": "assets/js/393.9c374043.js",
    "revision": "6a631f51f6bcdc29885fe71202011ba7"
  },
  {
    "url": "assets/js/394.987ca49b.js",
    "revision": "abc6dc97177e6da575c6d7824f1b2d3b"
  },
  {
    "url": "assets/js/395.2c202f5b.js",
    "revision": "8cac2ea4c4eaf32ef83289c747dc0002"
  },
  {
    "url": "assets/js/396.371607bf.js",
    "revision": "5cb63eac34009ae8c1e6d2d96f5023b1"
  },
  {
    "url": "assets/js/397.00d009ed.js",
    "revision": "a68c33a09e06fdb0c0ec35ffd1803afd"
  },
  {
    "url": "assets/js/398.032fdd0b.js",
    "revision": "f87a28090e1352158d88ac8bec4b3864"
  },
  {
    "url": "assets/js/399.542371b7.js",
    "revision": "9d84fa1c7ed172ddef335bcd8b6ebb9b"
  },
  {
    "url": "assets/js/4.b1372804.js",
    "revision": "6a3bd0a2aa0211666ad5e408c38dea92"
  },
  {
    "url": "assets/js/40.6fbb3d02.js",
    "revision": "4b1d3a5d284756d4b9ead12520a2665f"
  },
  {
    "url": "assets/js/400.a8a948a2.js",
    "revision": "e31681db3ee1f4867be2911aacfc355b"
  },
  {
    "url": "assets/js/401.70e11790.js",
    "revision": "a018c4e95caae5feaaa35f15432213cf"
  },
  {
    "url": "assets/js/402.df1ef83b.js",
    "revision": "4e4afb166a9ab0ae1e42229b58eaeb79"
  },
  {
    "url": "assets/js/41.ef1b43df.js",
    "revision": "f31f6beaa82e1a28956ab888b914912e"
  },
  {
    "url": "assets/js/42.bd77c3ae.js",
    "revision": "6c81d17f4a7b76fb8cfdcceb990610d7"
  },
  {
    "url": "assets/js/43.7209bd5e.js",
    "revision": "9e883e4a4a05420fe9c5cbd43ab18234"
  },
  {
    "url": "assets/js/44.5d8b11f4.js",
    "revision": "c7201d0c69784953b77da6f19eeca86a"
  },
  {
    "url": "assets/js/45.bc5ad395.js",
    "revision": "4507ed55641a81f9f769d094a4a14731"
  },
  {
    "url": "assets/js/46.bbe1b01e.js",
    "revision": "a7c1c71d55979017e53aa46b4b5f989b"
  },
  {
    "url": "assets/js/47.0aee6c62.js",
    "revision": "44747642ec63ee99be4e1421a4e394ac"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.d068bcea.js",
    "revision": "c4885bb92b0e9d857a1a4e9cef565547"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.8e309f8d.js",
    "revision": "8b6f7dcb3d6990d9fc33ef43c7e1d364"
  },
  {
    "url": "assets/js/51.2d7db081.js",
    "revision": "3f8ff16ea8e982fb5ccb6e68e5065930"
  },
  {
    "url": "assets/js/52.40be20be.js",
    "revision": "71615068bf95410414c6721abc03330a"
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
    "url": "assets/js/55.d86f3ad5.js",
    "revision": "3ed22107ec2dce7988cf4bab14a0c413"
  },
  {
    "url": "assets/js/56.770d4c5d.js",
    "revision": "a19ad0538128c46ab41256d0d455ea11"
  },
  {
    "url": "assets/js/57.b1d4a171.js",
    "revision": "ac6e47ee680bace3d6b0438e1604cf01"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
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
    "url": "assets/js/63.e284786f.js",
    "revision": "e8af52425360fc92832d00a1d05b9e90"
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
    "url": "assets/js/72.23a0e58b.js",
    "revision": "6512ad0d2ba323925d3fe505a8ade228"
  },
  {
    "url": "assets/js/73.4e9309c8.js",
    "revision": "341358ef097c56650dcff3359378d64d"
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
    "url": "assets/js/76.c4fa90b3.js",
    "revision": "ded1dcc5acbda303f25710af13267dfc"
  },
  {
    "url": "assets/js/77.d9cb7006.js",
    "revision": "95e94a78ccfdc50648dc98f1b80d535b"
  },
  {
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.9f70be58.js",
    "revision": "f03fe93abb6790655062119cd2b79949"
  },
  {
    "url": "assets/js/86.d2b65c80.js",
    "revision": "3845a304d8866371ea64d03bf1b7f382"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.1a7bff99.js",
    "revision": "ce68698aec6de51af7390b23f8756199"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.1a586271.js",
    "revision": "0194e8493a51e0b918bd8d84184b21c9"
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
    "url": "assets/js/92.77fb65ef.js",
    "revision": "96aa591eb096355be8336a91af5315ce"
  },
  {
    "url": "assets/js/93.abce220b.js",
    "revision": "8f50e5a57d0002bd50d90e9371a19283"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.b1fe79bb.js",
    "revision": "6efd3e0e4a7de7fd85be8db6a660f51a"
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
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.7e6e6b6f.js",
    "revision": "df3112f7108953c8ffcdfb38aa0739d1"
  },
  {
    "url": "assets/js/app.0edfa093.js",
    "revision": "6f19c0e83552010a1dd2c1eaf5d29b82"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "d7f9dcfc20e6521d5556d263c34abca1"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "6611e621452f6817ae39abcca760420c"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "18eb4162d21904bc645bdaf0335fbadb"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "903e0a74c932fda377623ca104036f55"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "1e03e877c79bdfe7ee6412412979d203"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "30fdd87bbcd1590dfdbc86a1aa26da5c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "fb9baef85137d9fd3c51ddbe5b808379"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "5c6d2ce4277201beaee8e866252f47a8"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "e999b6c86730696ff582473f14dc931a"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "45e2a6570dd646ff00f5c7ec5870beae"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "5e639948e8384cfef1fe1c3ad0d008eb"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "028c42e4100502587e6e1e5e7d0fc5a3"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "ff6f3f9bb3a8d537d42f47e1884243ba"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "0978bacaa3c3c5050b925bf8af98e765"
  },
  {
    "url": "master/api/index.html",
    "revision": "c33fad5957fdd99af609b0225d5567cf"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "77c94cc28fc356a23b9642025fe3169b"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "40a5db671e7e5477fa909265feee8160"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "02f1ece675b8a170744f3c75183057b7"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "b67b384ab1e3c6fd1077307ad9c8c967"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "c86c51ceb9c7d7a88133bc4935d7383e"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "c94c6b5540896b401e3caa177bbe5d75"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "960ce03c7bb055d0464a305b2a8f69df"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "c8c7d5cfe94fdca157fa054d5db86434"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "63d760c099c423755ba4cd0f72bb85b7"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "45b4a3c93bd84f9b044cd8bef3f3ffee"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "e8fe89161a1051349b828ebfaf1cd9dc"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "985c8acadb3d0f3e50e70a057aaf1bf5"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "b8f008564eae06b8babe427f09b14368"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "00e78bdd85d48bb3da7b0bbdcfeec7a0"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "9e661ed39fdf772c8aa6cd673fde53d8"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "1dddcca0b1df82f3fe689c53deea4c00"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "bb527c1901cbb1f3d04d7f1a63c88e1a"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "c58bcc4cbccefd37af6c4124ebed714f"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "90c01a9c75b007020f8a29ed6047b64c"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "e32ad099f5d4e38c43d8de17f2167ab0"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "7e91027670f0cb4e1e7299edecdb8f22"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "6147e3fd8018391e1faeee2841da278c"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "163decc06f3967664aaf54dd60a144a4"
  },
  {
    "url": "master/packages/index.html",
    "revision": "17ab3597b511cabfd8c0434d9369c616"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "5b23bc26cd717e1689d5994f8b64ca64"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "78a37603feb755a4d384746ad3709724"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "847573ec0487a434a0d5edb5f86337eb"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "7b2e8f37c210168972b4ccabf04175df"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "72d6af2585e10f35382190c5a942ac68"
  },
  {
    "url": "master/packages/views.html",
    "revision": "9f6b2edf2ae4cebfc44e3f335b491392"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "3bc7cb9c8d1888aea63c164f4948394e"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "647c0fbba9ee4cdf46e564c3c9c3be82"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "610b2aa1629f8b3ee37c08409899e526"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "7f1d7a89d93e1b5a758718f6579072c4"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "d7ad55d782f254a2079a070941a07413"
  },
  {
    "url": "master/themes/index.html",
    "revision": "65c5636c1d1fa2782eb5511c4b6cbb67"
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
