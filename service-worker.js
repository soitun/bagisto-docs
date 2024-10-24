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
    "revision": "7d9dcdbac324b622e04590326a9d4119"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "c4c8b9f96932cac88aa485de879b7f2d"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "3b558d63d9422010dc964806aa1d2f13"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "d0e058e2bc212d9b8b3901c8f8bb254a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "ffb0c01dda8f210a002cc2a883712a43"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "3e04194c8874aa14414b961740f3e892"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "79ee30be5509523c9c88ad255f318647"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0d7b54f4f632a9516fc3abd64c58eda7"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "6b5554634bdc72a113dc6f5f2e43ba19"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "4b82f8e45d3748597c629fd37a2d50f2"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "ca467a492c0a1d8a7cfea504fd25f808"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c4ea9ae33d00d1e58688605b17ad4606"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "f9b51d2a26e193e424d78d06665a4021"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3d13da43291c9b003fa5e0d139767f13"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "08325b08fefee445be88e12a8c9f7ec2"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "277721b5b638ab4c1b9b5b7802d7bf55"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "92a73369ce9b40e556c7c60d8a6e5a42"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b4ab5bf0236b8dcb387519fa83141046"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "5b93fa073b5a43d680d9ce6002744f6c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "2602cbe46d02a431233f2c7e2fdb78a7"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "c5757eaa49fe1ffadb75b91976f11b59"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e50a805ea47df580b5674eeed59a0892"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "36b2083f5a2c04793c0738db00d23059"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "578ef3f16b8496a6a7639933c372115f"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b5d62854a53c6f1b1a6f79812cfd7ab8"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "061f5b1dc33c2f5155762f1cb0fc5509"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d3b2fab1c719fbcee780502fad8a3e2d"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "872851c9a3aa42c767bfd32d271678d0"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "058fdb44ef0bf91c5ab2723327c24b42"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ce585a6b7465e5a48554002142a01a26"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "0a04390a4f796daa128c947ade8df305"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "ea5007406ab53d3ab09464a2b3ea7fe4"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "90d9d27e3b3e99c388303ac54cdd8899"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "0d9a4b64360f878d10fca8a583248289"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "8613073c78016b6687d6acfae6cc90db"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "a77c27bb3ae19ce503b0131172a3bafb"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "121fcca3de6da75f44d226ad60ea0a4a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a9d20b2b288cfed8d494f6d13d6662e9"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "e8229bfa6d152c4189905e7b60f8de26"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "bd5e8bec749ae5774a0a06d349ea1c82"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "64376e2d64d520b862023efad592ac40"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "f5fdf7ab484e9eccaeb7477e3cee1413"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "36e9305515d17b69bca8cf0f7bd83916"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "04920fa5f039a38879aa0e27a54faddb"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "a2c5e958b59a60e3933c144e58ffbcd2"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "da22305f02a398220d7972eeb797dfed"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "af5be6ecd9ac506fcdb80d6b7c7e16fb"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "705c971a7aea9290f11ac60b591a13f4"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "6576e43720906ef9f7ed77245f9cef08"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1fd6637de0901ff1e3a4237c84be4d12"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "d066713d886a0acff73170f8cbc249fc"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "26f9b0283d4f3bd51940f03973dfb89b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "4330f91243f126082a25fa727bafdc04"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "84bcb762739bda8d0af3f5408b6bd350"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c1060bce5b224de9a7593aeb49ce83d0"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "5ecc5e3f4aa29862513469f587addbac"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8397f7dfb5d98c7328a13b56a2249971"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7c907872f37ad2ead485945e7845cf22"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "df16d5a79b521a92ab3f389f25a872cc"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "70d65aa6eeeae53bb975ffaca1369e1d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e5a830ed9918b08cebcc5d7e6dedede2"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e3c24e125cca9d892a6bb27cd8bde4ab"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "b55e900054444de7f0fe0b2baa7a5a38"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "392767fa4ae9fc24dc62928526f21d11"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "a57a5a933901807c24826506f9e124f9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6d66455ab449e8dd3379a818fce3ed7a"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "63d3c4c62b293f188dbb84fd38ecbb15"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2becf1f51c2a28174fb3530e4c210cf7"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "5b6722cb4e83ac39daada76397c4fb7e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a99a7fd67e5e9918d957aad413044947"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "ffa18b66887bb3bb2e2373af1eee741b"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5d30e439aa752b5e82ae219e736d3aae"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c0c0a910f07a3f1cf13ccd3b2a1c1e03"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b33fef8c07005bb82aa4f817214aa8ff"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "99765ed1d3919be1d20d7e5f74b4b246"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "02596f5e877e90985854ec6d64a44056"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ce79260fd4a023385b15b983b351e5ec"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "edd73c587d5013f166b86bc9389ed7b0"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9fc66cfd6f7e9411c49c6b729cc7a273"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7556cd37861b5f04c7445edb08fdf506"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "fb21f19bb4bcb19d87292f7fd319e89c"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "cf46b279212f898b615074140a04a3bf"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "3c16f1e4f325b89a501fed2ae2e8d13a"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e9b415e601d27c90dbd7e6d37101ce4d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "f0ef52e96a532035740f41084fc2b29a"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7b67641f15b636c49945c27ffa330bef"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "be8268e9a2ba19d97ddb74b39630059b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "19fc48575d8ae34f4c81cdb4aa9eda96"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "2b4b112237f96b56ea7ce7ee08541631"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "dcc2f4975c58d9783cd423117113cd62"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2e4962ce74e99bf02c57ccc664827365"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "5f9dae86cc022d497b13eca15abdc5af"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "fc11d2828d4e8435a2a33cd397cb8574"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "4bdab509805712fdc2b436f5da675f09"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "5dd55d53ff4e2a27001a79f60be56d85"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5b47b4d326ceafafeead95e8fd6229ac"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "50621df01f9a51bce49eef364ecdcd0f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "3dd6dc8453558edc6fd4d04067d7160e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "d393b4e6e5645f14a0688b0afbe39732"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "e5b9a9b618b97978afd586020297fe53"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "3d82d68a52ab0ee879ee545fc58a216a"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "d7ac06ca378e05dd7265dd84ae831e04"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f5cc458b9415e954120e6636dd29b02e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "01c569d6335ddcba4b62deff0ed1db25"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b56a5947ac0b9447c23918c670a3a2d3"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "51b900b5f75f710873416b5081d0f12a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bd9234d9267b998d83b9cf33eef32abd"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "320715790fe2b0d710ca31f99b02d83b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "13fb36b42048bd7f6bf57e6277ff6353"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "56583908bcc6dafe90187712e49503a1"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "6f31c18317c89d10ff6e256390b82411"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "c736f57401eceea6d5ed151b914d2ed3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "5a96b5e0a4f2e2cc67edb7a924d470d1"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d4acd6f52224304100a561625e093e6d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "34cfea82c567bd743e7eb0b3f0e6a4de"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "f39d115c93633c7caf1f69747ba1cf06"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1dbcc10443c7e735e41c402ece4fca94"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "01b040b27bf0b456857cf6c13b9a7ec7"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8544fdeb169a1fab43af31e2003834c0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "49b00f972c23de1e9bbbea5fdfd90011"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "2f5f070a4471b483c9a6760e28c544bf"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "62c07596b44718919b67ec009ea07a64"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "3e92b895889dd1d76be9d62d8b2420be"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "2033214dd9854657570fc10d11a879c0"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ba7ca3ea1410b3621513e1a034bcb4c8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "a614d9ad5f58b8266db621d4c0cf3b17"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "300f5a041af17e09e0aabfa2bacaceed"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "6d40725821415edb400dcc9b946e8a13"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "1bfd17880e254ae4c78a5398c042fbe4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "47f99389319284465c32646bd4ddc445"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "006357e137e46938173aeada24c8211a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5855f67f5400868fb21df1fad8c73857"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0cc36ef7e9044846b9c42ce51fd1e6d7"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "28c5cac78afdd4813f1ecf025bbbaf95"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "2d35d6f670f47e50df813d19b5aaf554"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "3d913555b6847bd7f3b35839474e5d30"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "4e839f94b1c9442d34e12c548c52519d"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "f2dd18644374ae793a91f3f3ef143a05"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "5d640da4bc84231dfcf7950f29cd14f9"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "5d280fabfbd99ae8f0e085363f63bf8b"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "ea5e453d3d4f5a3f86bced60eaf7833f"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bcba1bbaee332d7e4eb045c146a3a99b"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "039f490b5ffa089a9dfcff8eed984c56"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "7e6df6a70629880f83cfea97b5f5f9e3"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "f9949e0804c1ca8531fd2f50f8c6326a"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "4e80cd234f310ed1e7a21f40b719042c"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "8990d923d6025dec02caca363b9a94af"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "a1100cde66bb00b8b86cfaa0e536026b"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "75bb2fd43beb5aa834d02d34c1b0f267"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "0e9a17fc738e67e68ba0290e8d533dad"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "0eaa6afefa9ca79c068d745a88a95923"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "0400b374cef8e144a1ae8cdcce630aaf"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "08b875bf5659d6ddc9620f32ca9c1c1e"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "9fd1b0df9d67595563221e2383bd0ba9"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "939266a02457b34b161832b69c484831"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "4be3c571f85a62bdcf4d202c918e93f7"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c82d8bed8292be3e1ae8bc40e6edb128"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "cba16caf45b5a571192a4732af969448"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "afd94de62cec8ad08ec196114fc5bbfb"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "004a4662d070503c78f76dd3b241a9a4"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "4f00e425cc157a45664f18930ffeef20"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "37f839bedfa9802e31cf32d3aaf8ee89"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "318a7de48beee0fb3295de67938a2254"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "9308cfa8a37cd9e8e0dc356b1484a44f"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "a7186e1d32dee1b7871b0cf59b91ea2c"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "d311e7448e0d2172053faa1f6af05dc3"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "631a190e2e70f7ce7a5787555a16f9c2"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "c39f3809c6f755fb6ef09fb6bb4cfacb"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "99cb0990890b4884fd49c52454204bb5"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "ce14e80917d3a1ad7ad37a736726d8c5"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "d11e71d6b624f98160236c3631af78b3"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "128a67520e3386900919f659ce337d12"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "da0987d5be09d0bcf014d00d5e2ac767"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "9d644d24d9e13bdcf1ee3855939b7f5b"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "5dfa59a158c3e5f6c1b65da4779e1f15"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "8d5553e735e76707d7f47063253f8f9e"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "b9c951ec1e48d42451c7b0bc7299721f"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "2ecc56dc29b72c74a5549654da13796f"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "afb85c74110163f48505194dfd5feb8a"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "077f55f90cf867bdfeac7ff8c39090c3"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "6ce3646cd430e42ea3ef5647b3034a38"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "0b757b9386c69f63aa0f1fa76ab66ffc"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "5eb7684084472d43c7d46232e9d01d75"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "2a88a39a352671dc33a65576022f0ad6"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "4db3145d196c8f457fe12f9001404c3b"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "24a27b0237207e59c2a194b58267a7d5"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "78cd7956cfcecf838721354490692e29"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "6bf9a4c636b0272f7d005ced894fc23b"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "df49114aa7ed869bdf192b50b98f63e3"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "69349c44325f53d6823667e93a7a90d1"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "537d3ddfc6b5a5346d4414c61f496a8b"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "fe7d9f00ddf894a82d0131ad4a99accf"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "27cdc998e604497dd2c0f6e23b88e8a4"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "155fb7662ce69da2e9bc27d0a2a4661a"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "e898b50ccabe12d49d3f73ba8615de71"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "621d2aafd2cbc14e48d6fc0f89a94d87"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "80992a45bfe6036fb99708d55dea6476"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "9962409112b6b67fadad844b19d2e18d"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "97633272da90c2de59d62bf9b5b70d40"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "5ae73ea22902fe928aa59b167a882e4e"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "9028ccb93533254962f2e9b76c8fe442"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "52ca070117839f6217962eb63c22d339"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "7f706e0904cbef4e232cb0406552e5c2"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "8c8f4f77b61be4374d855add53bae60e"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "1f2aeb1cb770400997c4e7ddf1c8b39e"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "b71129c668fea3bbccd61b15e2cb281f"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "cd9971ba45c60da16a3192e3eef7aceb"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "77223d51b3696181c6bb7867e6efb8a0"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "66ffc6d6b5f0292b5d51d1d3a53a5da4"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "eba17645bc400eca7afec9653032b3d2"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "be48a5fffcc3f536028fea69364709f5"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "2364ad1821ff2fec51727b029a279d85"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "5eff82800598d85282702ed821381de4"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "f077f766f22d5938e83c2a2a7d35e90a"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "9a1125c9796f4063d6d0d193a0e6a78e"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "7450b515668884e2350112da46d074f6"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "0f18d778664ea15acdf91c1d85dc43ce"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "0fc94ffcaff94121c10f0a93dd5a7a16"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "9a87b1d54caab00730b3e78ec8af98d4"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "f48a10a7252e7c05fe7b1c0365d98237"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "dfaa842a78675e85ba848b354b644a33"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "b1772e094c3eb69f48f83d94705ce3c9"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "19d7044b88d3b6f66da42dd4047f7ea3"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "9d9a8b373c2e36c4a17b77c4b15099aa"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "9306b9a43d54398c28144d4cd12d3931"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "aa2045bea60b7097debe36549662120e"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "fa266d7ac55d81491e2d4f845fd9c507"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "8b9313c70cd16e9ff8a4f64a862dc87c"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "eee2b4580f35c8f20d569e1d7d6f8db9"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "62e926d3f728f49a133fbcf4b7e28e86"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "6f4c6d5e6dece874880dec1885783e36"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "f01f304813ed28af765a05f8e9e6ea7a"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "71c5fed1bdb6f416881769da3bcc4f5b"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "8d93d9c701224c0a3781eb825f96b896"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "e4f9afd522e69db58f96104eecd924a7"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "6d73cef1dd9c62afa2c27b39f69f7bbb"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "0e1392c8c57069557e9dc1198c8690ce"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "d14928d6688d90e4dc27e58822593140"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "e765507e8e8d3da485bbdb89073530cb"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5a30e960b1af60d7e2e3833a50341977"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "1ea70f9db119b6d227b94de0e68ebb9a"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "9fa4a0f8d8b87c4f6247955846675428"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "500e79e119e1e9cda7577761e3a7852c"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "086eb143c2098d5a867f8c00f13d3bcb"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "d4322b6f010ae739ffef332c6b7ceb18"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "5c0c3e5d0ef80b6a1eb12533cb848a52"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "1f972a0e37c783a402c2e6dda810ab78"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "fbc9cc33c0de1615bc3bc38a6630adc4"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "4a9c6990de0dab7d5ea6a82b93f7dad7"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "f9dd033d9484e4ff46bb15ce573acc6a"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "0884447c5e163ba67126042e6ca9e07f"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "0836292e803c6d27ed5b954d92198db7"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "da9c02634934e1d77e17c4419756a48c"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "27ac962f2a0e7055d8c5a6caceb3daa2"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "4c040b1d9cedae704781dfc2124b661b"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "d01db9f1e723a83fccdc0a75eab11c8b"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "6bbe5bc078d9dbe3ffd1572adb17f25d"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "0bca964204a009fb8509836bb2839879"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "2952add18b5e0fbf7475057b00937715"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "376100021e9fe01c3114ca330c7eae2f"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "35230b99ff89e0dac59ef35921ffa256"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "1ef696233de3c96f0f4a80b76122bfe9"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "e97c8585ee7b78448cfdf75d1fad07f4"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "6f6f3aa5555f0970501bf8416a5698df"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "43797301c3f4083e7b18b30001eaf1d0"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "b4aea5971dda7cfe29a4197fe875f7f1"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "06c933873d0469bcb5d4f4c6018e64b0"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "551a95fd0e7145a8118664734ffc9385"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "03100b49364de005972b608923b072ba"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "afc5b53084aa0a85ed4aa1206a4644a2"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "fa61a19ef47fca5e02156c693ffe26c3"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "a964da740f96f12596426f8391c47503"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "3e7312165db50e5bac6001997c340d0e"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "377a62a3fed666c8eb95b113cafe1d0a"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "8998eff8fc4ea56722c2a48c5e692041"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "5c15f2d677d3a73891db7935a992c179"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "f7237b0e59c3d51fe3c0f4934b6789be"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "12a5a737eb171020e5ac948b20a5e43f"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "2643dac7362407cbbd23bbc3331e8982"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "3f527b6fd0e4e163cde09335df97af71"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "13633c38f2df3e5897e8f3ced3b9c64a"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "2722be3fd1f27ff0fff6860ae7db32a5"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "8e1d0c176898d52ffcc46a52ee3c8058"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "6638482b2a26dbfba5bead5015e7c1d0"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "18b6e09921b5db39132f17793c694184"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "d59c7671786ce91927ea98ec09b7f07d"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "ad64550e47994a90769f2f9fe955a2ad"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7b42612ff93941d36d1622e4980d0168"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "d66c17adc894f9fc3232556afac2249c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4669300c12e0ae4907c136fcaab64805"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "346454ca340e6b7e201b395a2d9cb255"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "466a24b2484dd83d9e49ec591ab99e98"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "279584f6ed40a5cf04bbaf61e9fa09a9"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b9f600f3893498af708c7eff4a8e34f5"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "a2d67e5045526f775b60528379a9f1c9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "362a4c32d1c74023fc538ba2f1c5a4a6"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "fc6cb0eb50f611e2260334a00d590a9e"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "96262f3664a31241e0ca8926463052e7"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "bcb4af9afa8620eb0a9cc20d058ee660"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "e719fab3d9033531c030768e1ed671e7"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "3f52bc89f54e8e858d6e3d26fcf55870"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "ae191443872ae36edcaf2e80f43b9077"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9705d70088be68e0e14b5d27979eef1c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "917419f392b96f7b8ec8fbc1c42d6861"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "637bf4ac56d46f5d6055e5f174e983ee"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "a69aa4002a927da591c8147609860d9d"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "6978bd8ae3f34daca4f8dbaf779be6bf"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "cb89d21a379f9e2d25acca45cc5f77b1"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "f810e66a3247bacb51cf97930d6ebb36"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "eb0d8883d3443cfb901644d58ea6893d"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "7215442192d3973651704b706124ce90"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "574268d31d14d86128ee6ed96dbdab24"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "351f1cfbf11a9732078dfb57fa415320"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "fb4e4d4ea5b064850c54b6de0148968c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b171a5f5574debb8f7e16f3aa5fd2abe"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "29e6b4567e81ecd699f382824b4e6948"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "9aadd6732c06db2657b8e810ecfe202e"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "8314002d8b5c394d79264b0cca96fde4"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "a5344a05177c7ace543d5ac59f41a3a6"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ceea49fcbde054b4f5726a4d5d1c616c"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "f900c8044ba52b1ef55e9a4d9b3f7b3d"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "bfce3e5177b6e382220d2d680df13e61"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "7d5c8f8586ae9f394c25306a5afed6d6"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "67098e45dcdfca1e425b8911cc5d2cb9"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "16c76f651b1be4b996c48fc3f2eed95b"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "93461a8ad556083aa9f745d4e5cae3db"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "36e9465735d5b4e88c3f6db4592435eb"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "630ec58acf5493b28d5c642a270d40cb"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "6bcbf66e0987977720723c5439319a92"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "5e06d4a9fc9f50f24c2e040c924f0ef9"
  },
  {
    "url": "404.html",
    "revision": "8a7b7a8181f64783f2cce2048cfeb780"
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
    "url": "assets/js/100.1a16696a.js",
    "revision": "8d3dd23dd0b08753439a1e0287f0537e"
  },
  {
    "url": "assets/js/101.0e865dde.js",
    "revision": "1c26147f9512ed4fd608280f4ccec371"
  },
  {
    "url": "assets/js/102.32da362e.js",
    "revision": "f5a4a123e4fd5da415866e4e918965dd"
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
    "url": "assets/js/109.4fce3fa3.js",
    "revision": "f50251b52d394643fee5b871631014d8"
  },
  {
    "url": "assets/js/11.46652605.js",
    "revision": "e2dc83ddec90f48019b9e53e5d7f3d21"
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
    "url": "assets/js/112.95402ce2.js",
    "revision": "df163ad4ae82416ca3beb4d36d724bb2"
  },
  {
    "url": "assets/js/113.74cfc86d.js",
    "revision": "7462061996af2f34bf09bee6e983575f"
  },
  {
    "url": "assets/js/114.d2373d11.js",
    "revision": "bba39ba781d4a7f50ae28c2f308c10f4"
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
    "url": "assets/js/120.7dd18ad6.js",
    "revision": "8675e524104bc3e7e5ef83c04e007ec1"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
  },
  {
    "url": "assets/js/122.f8a751ac.js",
    "revision": "4d16d12c119a748696c23cd3240d28b3"
  },
  {
    "url": "assets/js/123.b977b17e.js",
    "revision": "cd120e8c972a8882950ae1fa79ccb78a"
  },
  {
    "url": "assets/js/124.90f11753.js",
    "revision": "ef261c3cc651a66a1b7fabe010dba456"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
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
    "url": "assets/js/130.56c88501.js",
    "revision": "db9b11a13b60de3ac1ab1a4a6e91d924"
  },
  {
    "url": "assets/js/131.9c68d6d7.js",
    "revision": "001b5f8f6dccf4c3369a1b13b991a71a"
  },
  {
    "url": "assets/js/132.8ac3982f.js",
    "revision": "2c26fe6e4dd5d3298d692bd121e282a8"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.51f96d3f.js",
    "revision": "65701dd76cfa86a7321f40f90a5d7f2a"
  },
  {
    "url": "assets/js/135.a8df44ab.js",
    "revision": "460e69940edfc0763dc60aa5ff3dac6f"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.b9a18d80.js",
    "revision": "2a0dd034ccd323399bc7157cbcb7f751"
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
    "url": "assets/js/141.4fbcdc31.js",
    "revision": "95c18a86264863861be1435b71c6feeb"
  },
  {
    "url": "assets/js/142.0d77cea0.js",
    "revision": "2b666b6a1102d1d8e8c1c0ecd3c4a24f"
  },
  {
    "url": "assets/js/143.dbb5e426.js",
    "revision": "a16f2ae5e638c26e7ce858eb5cdf7abc"
  },
  {
    "url": "assets/js/144.4a14f685.js",
    "revision": "db8603384b1b7e16aafe819b63f55bfc"
  },
  {
    "url": "assets/js/145.83ceb845.js",
    "revision": "f3070f69bcced095846f814f77646041"
  },
  {
    "url": "assets/js/146.08c25ac8.js",
    "revision": "4c0577f024ddec7cf5a55c77c9d214af"
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
    "url": "assets/js/149.97fa4a1e.js",
    "revision": "89fe2d341ebfbb556bda6ecdce4bf15a"
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
    "url": "assets/js/151.9af42afd.js",
    "revision": "7821937c9342410cbff49a2649c59ebb"
  },
  {
    "url": "assets/js/152.4d11478a.js",
    "revision": "e6f02d47480331cc8e6029853178f799"
  },
  {
    "url": "assets/js/153.458b8916.js",
    "revision": "c4ad78fe0123432a30d1a7c9b855505d"
  },
  {
    "url": "assets/js/154.337a4a30.js",
    "revision": "353dc9af415e6de4ba764c76a53cec39"
  },
  {
    "url": "assets/js/155.20dc79e4.js",
    "revision": "8233cfda184954d04e4f3ae03e0286d2"
  },
  {
    "url": "assets/js/156.63982553.js",
    "revision": "f5ac2bf7ff58ba21b4a60b357dc648aa"
  },
  {
    "url": "assets/js/157.33f61009.js",
    "revision": "b6fbd34551008e52b4f8160921a81f1c"
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
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.848581c0.js",
    "revision": "68227ee2ab2c1cc015683b241611b914"
  },
  {
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
  },
  {
    "url": "assets/js/164.336a51e5.js",
    "revision": "5a4f8b1be0a8ec3ae79ddf21551e1c8e"
  },
  {
    "url": "assets/js/165.8e0f13ba.js",
    "revision": "e55db322534b09260963ec52ceec91eb"
  },
  {
    "url": "assets/js/166.f45dc15a.js",
    "revision": "6ad8f5f52e04f2d112b2b222171a8225"
  },
  {
    "url": "assets/js/167.fb27e17e.js",
    "revision": "9fe533dc61cee429c9a0a0e2fadbacc7"
  },
  {
    "url": "assets/js/168.27cabced.js",
    "revision": "fe0243454c5c9d7f8585793662430ecd"
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
    "url": "assets/js/170.d508c3ac.js",
    "revision": "3cb34fd99c34f963ba5aae9978c5ac4c"
  },
  {
    "url": "assets/js/171.778daf70.js",
    "revision": "248f0fd2402e63fa49b71634341d6d9d"
  },
  {
    "url": "assets/js/172.c608ec58.js",
    "revision": "8bae9ff0fc70c36a5a96ab2c8235546c"
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
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.2df4bfdd.js",
    "revision": "b7aa1052cbe8b2914633d0a3231e5465"
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
    "url": "assets/js/179.4dd1d482.js",
    "revision": "6500eb7f72eddaa460419f68c66aa83a"
  },
  {
    "url": "assets/js/18.d7710f89.js",
    "revision": "2fbf05484c916e1bf99be13f79052b52"
  },
  {
    "url": "assets/js/180.3f4a744b.js",
    "revision": "60ca9de0c722da0e523f02d4620a577a"
  },
  {
    "url": "assets/js/181.0b6bc242.js",
    "revision": "60340fcd969ef57d6c6184aaae0159df"
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
    "url": "assets/js/184.9b0a00fb.js",
    "revision": "e86fabc516b8dc0bcd8a6a6e2a063b43"
  },
  {
    "url": "assets/js/185.04c25822.js",
    "revision": "c1e5955712d638362392cca561ef5214"
  },
  {
    "url": "assets/js/186.b2f1ee6d.js",
    "revision": "ff5af21e1f71b76c0752ce8581ded8dc"
  },
  {
    "url": "assets/js/187.8c7f459f.js",
    "revision": "614cdd5bfbaa24342cce884a1acd8acc"
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
    "url": "assets/js/190.bc8d2ea9.js",
    "revision": "219ae1bb3b222e510da6162775b2bc01"
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
    "url": "assets/js/193.df1e7a28.js",
    "revision": "b6eb54c400954e86bc23a641438dcf11"
  },
  {
    "url": "assets/js/194.dd8283dd.js",
    "revision": "e17a528386fad36321f7947f3f72e23b"
  },
  {
    "url": "assets/js/195.28df64ee.js",
    "revision": "e9129da38fa6e90aa215cf23c5151677"
  },
  {
    "url": "assets/js/196.90c28467.js",
    "revision": "95581c7a2d7df2a8a742fbfe937fb883"
  },
  {
    "url": "assets/js/197.b662b50c.js",
    "revision": "3d8b132e06f7a95c4e05084cb955f81f"
  },
  {
    "url": "assets/js/198.ce3c4fd4.js",
    "revision": "4828072703f4c71c5ad98815d9e4f586"
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
    "url": "assets/js/200.6ed96aa1.js",
    "revision": "8cbbb2d58d1553dbe1e83921cdb55c30"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.a5828fcb.js",
    "revision": "7627698323cbbe03d4dda09b87896448"
  },
  {
    "url": "assets/js/205.dc8766ab.js",
    "revision": "eb5c7389bf13de2f1e714796c3776966"
  },
  {
    "url": "assets/js/206.2869b60d.js",
    "revision": "92314ac97bef5e631a2b4a43f69ad32e"
  },
  {
    "url": "assets/js/207.ce1f5975.js",
    "revision": "8a98242f65b22fc8418bff9eb5c9cdad"
  },
  {
    "url": "assets/js/208.0584a09e.js",
    "revision": "288eaf3c722ffd4a08e14486a963f514"
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
    "url": "assets/js/210.e911c0d4.js",
    "revision": "20672ca7714f35a9d96700223de6cfb4"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.390b0497.js",
    "revision": "1edf774e1f95afd0f52354c0f9078a16"
  },
  {
    "url": "assets/js/213.6f09a403.js",
    "revision": "7afa679ca1036b8415b265ec758a69c0"
  },
  {
    "url": "assets/js/214.2de75553.js",
    "revision": "e99a0810ab47dbd89c446961c868549c"
  },
  {
    "url": "assets/js/215.9549455c.js",
    "revision": "11c8b790c98af144d20ef7401e723f5f"
  },
  {
    "url": "assets/js/216.df14ef6b.js",
    "revision": "6a9f911d2968ea44dc2c239ebccc5098"
  },
  {
    "url": "assets/js/217.a56375d6.js",
    "revision": "e589871002493ac7c35e7b8875ef5b43"
  },
  {
    "url": "assets/js/218.74f5cacb.js",
    "revision": "8753aa277b02f7c872dfa31361719db4"
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
    "url": "assets/js/220.0e9425bd.js",
    "revision": "581867bcb1b9c208e409b207f27d4976"
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
    "url": "assets/js/223.c1a8e675.js",
    "revision": "f6ad56f28ad5fed371b424d13d9ca000"
  },
  {
    "url": "assets/js/224.6d59ee8f.js",
    "revision": "c1af713e15462cddfb56cc6fbac57422"
  },
  {
    "url": "assets/js/225.d64bb920.js",
    "revision": "21e199c6982e07f5a3f1e6b3bf23c033"
  },
  {
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
  },
  {
    "url": "assets/js/227.09062c36.js",
    "revision": "6ed96624a9336404e99d7aa749b017c9"
  },
  {
    "url": "assets/js/228.d1b7cac2.js",
    "revision": "c9b668a063c84c89915085982ac049cd"
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
    "url": "assets/js/230.53e0900c.js",
    "revision": "92dd283cdcc0df47a51d03094b9843a3"
  },
  {
    "url": "assets/js/231.60aa2626.js",
    "revision": "a1f0fa15e3524dea9be1f25c9ed72ea9"
  },
  {
    "url": "assets/js/232.d9259fbc.js",
    "revision": "6984d97c44b09470c82d98200c2c6da9"
  },
  {
    "url": "assets/js/233.2b15590b.js",
    "revision": "1338f9030f183f7108c8de811a399571"
  },
  {
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.4786968c.js",
    "revision": "cba231c2be27d56500216b0d4ae423cb"
  },
  {
    "url": "assets/js/237.05956415.js",
    "revision": "6b560c89603abf03d3fb6a6b216f322d"
  },
  {
    "url": "assets/js/238.c1cb4f92.js",
    "revision": "bd18ed3d56632b21d2759cb1f1d073ba"
  },
  {
    "url": "assets/js/239.27b59e9f.js",
    "revision": "6c8db9e2275c99f33377e011afee182a"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.ff75000d.js",
    "revision": "9ad3507bf5945d4b3c25465801e89e93"
  },
  {
    "url": "assets/js/241.001cdedd.js",
    "revision": "0bcad0269d34e3d115abf3a0407868a0"
  },
  {
    "url": "assets/js/242.d8f9a99e.js",
    "revision": "29d4e6d3425edd25c99fcc969d4e7397"
  },
  {
    "url": "assets/js/243.0318154c.js",
    "revision": "7e2f8676d7e76bd5a6e406cdf229983a"
  },
  {
    "url": "assets/js/244.421e2da4.js",
    "revision": "8b38269665a051b9d6ec5752e3f3e7a1"
  },
  {
    "url": "assets/js/245.684035ca.js",
    "revision": "8581a90cdab216e7f4d4259bb6f49238"
  },
  {
    "url": "assets/js/246.f5979aa9.js",
    "revision": "d19a05bd0044e66cca506a363f6af6fa"
  },
  {
    "url": "assets/js/247.b5d183b1.js",
    "revision": "0c50a1637baed8c710c5430431e4c4e0"
  },
  {
    "url": "assets/js/248.745c97cb.js",
    "revision": "b347751a8b6f23e2f07906a34dcf5b98"
  },
  {
    "url": "assets/js/249.7bfba3bb.js",
    "revision": "f9ff7e5fc574095abb5f92474b4beff0"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.79170478.js",
    "revision": "a4648440ec53e7c8e00ac56ba57288c7"
  },
  {
    "url": "assets/js/251.b2534066.js",
    "revision": "bd12c78dec51fde473c076236303290c"
  },
  {
    "url": "assets/js/252.66a56e26.js",
    "revision": "a3e2a8dd1d93392f7149b64571d5e19a"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.bdffea87.js",
    "revision": "4f58438e258f36596074ad0eb7392078"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.8ae52ec1.js",
    "revision": "8452188dbfc69fc0b3f3b67b0bf7f458"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.817b9290.js",
    "revision": "4753bf94e8853f5d72038049a9fd8209"
  },
  {
    "url": "assets/js/259.b2d6a237.js",
    "revision": "0f02438d6bc9253b2f746654562b59e3"
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
    "url": "assets/js/261.7f624bb1.js",
    "revision": "3d1c7a5a86556b8441db0402f3e0fb3d"
  },
  {
    "url": "assets/js/262.06d8b4ae.js",
    "revision": "37333a795af1223e984739624d0517de"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.735492f5.js",
    "revision": "bc43b0b65430932520bb05e66a20a9c6"
  },
  {
    "url": "assets/js/267.bec5e63e.js",
    "revision": "b8c6653895b5f2f8adb7c094e27504e6"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.61cbb922.js",
    "revision": "f6baa1da885cc5b05abae20b989f9d5a"
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
    "url": "assets/js/271.d85eab67.js",
    "revision": "cfb329ff9e1832258000f59a81e67b5b"
  },
  {
    "url": "assets/js/272.f8167ab4.js",
    "revision": "eb010a5fdfc4ddac4cd14663525cd0f5"
  },
  {
    "url": "assets/js/273.54bb77ff.js",
    "revision": "f720c8bbeeaddfeae75350ce902e3348"
  },
  {
    "url": "assets/js/274.f83a7a29.js",
    "revision": "a9a0a6a575bf3530aed140232e8da5eb"
  },
  {
    "url": "assets/js/275.98d1c3ac.js",
    "revision": "07c477f77d2b69c3f314537e6677f201"
  },
  {
    "url": "assets/js/276.b084ec03.js",
    "revision": "d8890efb8de2c010a5361a3548a36add"
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
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.2c2b840f.js",
    "revision": "2532f3fee220c75cbfe1f0c5ecf1c315"
  },
  {
    "url": "assets/js/281.f1398d83.js",
    "revision": "68ee59fa55cdfff2402307da6bd72a2c"
  },
  {
    "url": "assets/js/282.7c5fc2c0.js",
    "revision": "254e4da6a5e5cdbd06906bb1ce40e9a4"
  },
  {
    "url": "assets/js/283.585525de.js",
    "revision": "08a57cea058046a4d9747dddebb3d04e"
  },
  {
    "url": "assets/js/284.76b4bc57.js",
    "revision": "7aaca21e0bb278fb238c78eb8c5f01d4"
  },
  {
    "url": "assets/js/285.65b059f2.js",
    "revision": "740a4b2e1d409ed9ad7011feb466c263"
  },
  {
    "url": "assets/js/286.be651dea.js",
    "revision": "893b1029a9ffb80b7664dd01851a1f28"
  },
  {
    "url": "assets/js/287.02122620.js",
    "revision": "84084deae4eba2cff33b3d4c48b3bde0"
  },
  {
    "url": "assets/js/288.6f9c0355.js",
    "revision": "10be28125f894f96cad89a288295c8a4"
  },
  {
    "url": "assets/js/289.ba973681.js",
    "revision": "5d05db1b154f7fa33e10ae1b39e616a3"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.1b4a5baf.js",
    "revision": "6738f041b57fc40a32056715c4ae3d5c"
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
    "url": "assets/js/293.08d04c7d.js",
    "revision": "3cf75bec98ab0a398d2afb19ff1cdb2e"
  },
  {
    "url": "assets/js/294.61422d28.js",
    "revision": "754c6275f0b44204c5e03218987def6b"
  },
  {
    "url": "assets/js/295.f5f49099.js",
    "revision": "4e314ee378b812750a59905da66231f3"
  },
  {
    "url": "assets/js/296.0afe4138.js",
    "revision": "2d437c599334c24bba90cea2e33f0835"
  },
  {
    "url": "assets/js/297.5717a3fb.js",
    "revision": "8d1934f78cd1cca4ed0efb75ab6040cb"
  },
  {
    "url": "assets/js/298.aeb7cf09.js",
    "revision": "df9956f2fdcd93dd18024174dadb72e6"
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
    "url": "assets/js/30.dd276ea5.js",
    "revision": "77a506ee1ff5c2e0ede539b6d85b7531"
  },
  {
    "url": "assets/js/300.89688bae.js",
    "revision": "d045a5dd0f9ad46ba7d7d4ecea16817c"
  },
  {
    "url": "assets/js/301.61c099e1.js",
    "revision": "fbb70c17ec0b5ec32132dc4066306883"
  },
  {
    "url": "assets/js/302.efb4e783.js",
    "revision": "9adee5d6b34d291d0f073c65fc7ab0a1"
  },
  {
    "url": "assets/js/303.6b7f1f5f.js",
    "revision": "93fafd4275a7575662882b2ae5ddaddd"
  },
  {
    "url": "assets/js/304.d566b25b.js",
    "revision": "f32929b781feeee44a691a44cd68a8e1"
  },
  {
    "url": "assets/js/305.929640ba.js",
    "revision": "4c26bb0e81caebd5d09464a06bca5127"
  },
  {
    "url": "assets/js/306.50d67e1d.js",
    "revision": "5d0f2ad98adb8f5043ad282d54052930"
  },
  {
    "url": "assets/js/307.e7ab4aa7.js",
    "revision": "54e3ebcab9e34b8d0f22db94ea9dc9f4"
  },
  {
    "url": "assets/js/308.7e3f01f0.js",
    "revision": "b0303578f8da2345299e4b784676c6c5"
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
    "url": "assets/js/310.ec2f6b78.js",
    "revision": "3e4ef7bc3b362ab220d135b5c13add76"
  },
  {
    "url": "assets/js/311.fe828c63.js",
    "revision": "b79c0bb03e814ce115c54de287639b5d"
  },
  {
    "url": "assets/js/312.3e5e8c07.js",
    "revision": "b3bb60623c422a7c227f9ffde1930f92"
  },
  {
    "url": "assets/js/313.2702785f.js",
    "revision": "802aa8ba6829c9639bc06a9474244c04"
  },
  {
    "url": "assets/js/314.3570dac5.js",
    "revision": "9c0c46b524b25546679b014af57b6cdc"
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
    "url": "assets/js/317.80d65d01.js",
    "revision": "af37c8afa5bd984ad9b1768a3b9e8ea4"
  },
  {
    "url": "assets/js/318.0dfaee19.js",
    "revision": "f41c67070076603f6f5215d49b285058"
  },
  {
    "url": "assets/js/319.d42e7720.js",
    "revision": "752567d1237fbdaffb12721e0343a0a4"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.b036c039.js",
    "revision": "ac8666c9ee56422e2b72c1b4670dfa4c"
  },
  {
    "url": "assets/js/321.1a0a1ea2.js",
    "revision": "29fa6e254ce956031167f8fdec215a5f"
  },
  {
    "url": "assets/js/322.5567a74b.js",
    "revision": "63ed9cd0b659412b117d075c7ca4f2b9"
  },
  {
    "url": "assets/js/323.f63e8422.js",
    "revision": "3e9f9278a950a47585878bb8a64da5ce"
  },
  {
    "url": "assets/js/324.84141b0a.js",
    "revision": "c8e13b213bd2f5880219800e0165515a"
  },
  {
    "url": "assets/js/325.6b2c2b45.js",
    "revision": "ebabc267a55e7c080ce22fbd108860af"
  },
  {
    "url": "assets/js/326.5d1f5f3c.js",
    "revision": "2f979ed9c4712638aa4f2e9d8dcc9a82"
  },
  {
    "url": "assets/js/327.fee693c4.js",
    "revision": "2671542051a15f8683148eb0195acaf4"
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
    "url": "assets/js/33.61b5a872.js",
    "revision": "bd7e4d18c54436a9b8747bb48127c593"
  },
  {
    "url": "assets/js/330.c374cfb8.js",
    "revision": "4ff2bd1782979d0ed8550343817fc46b"
  },
  {
    "url": "assets/js/331.dafc408a.js",
    "revision": "9518b6cc31d135e6a61de88a349e3ee5"
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
    "url": "assets/js/334.8775e1c0.js",
    "revision": "a136d887c2b40815b20b3ffd2d5c25ec"
  },
  {
    "url": "assets/js/335.735229fd.js",
    "revision": "3f051066b937390a1254a0ed0edcc828"
  },
  {
    "url": "assets/js/336.7316be8d.js",
    "revision": "5305bf791061ff917bdee62ec52ff687"
  },
  {
    "url": "assets/js/337.99ac963f.js",
    "revision": "f6786f4784a5544b991b0318c82549ce"
  },
  {
    "url": "assets/js/338.52aa247a.js",
    "revision": "d43116678952ed6040d3666eb699da2b"
  },
  {
    "url": "assets/js/339.7f06f466.js",
    "revision": "9a4cea7ec9185313302518db0ef46514"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.ff73748a.js",
    "revision": "60271d84590d058460ce2379cb175a19"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.499ea2ac.js",
    "revision": "290ef33e901ed669ee04a901a08f4fbb"
  },
  {
    "url": "assets/js/343.494f94bf.js",
    "revision": "c465a5ec806d92895094621a10f2461f"
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
    "url": "assets/js/347.7735c47c.js",
    "revision": "d14bbc8cabdd48d25573e83d85b6fe06"
  },
  {
    "url": "assets/js/348.d8778c97.js",
    "revision": "bb88bc9de38f244fdb1435240b14668d"
  },
  {
    "url": "assets/js/349.faf2ddb5.js",
    "revision": "fadba26f7cc82a805bd9cc37ccb1f440"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.a7023e6f.js",
    "revision": "17d659a10761f2c9b785f06d924c693d"
  },
  {
    "url": "assets/js/351.8dbf1525.js",
    "revision": "1fbc09970c10235e1bb331cabaf0113a"
  },
  {
    "url": "assets/js/352.7526f37c.js",
    "revision": "dbf913332a6eecc134eae2c6e6e303d5"
  },
  {
    "url": "assets/js/353.263f1601.js",
    "revision": "91376047bd724b672f123d812632f148"
  },
  {
    "url": "assets/js/354.8da51156.js",
    "revision": "f3eeb914c9ee35acf7b9625b3615fe79"
  },
  {
    "url": "assets/js/355.5488a027.js",
    "revision": "7ea74c9a5e05e64fde49eadc433feb3a"
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
    "url": "assets/js/36.08cfec20.js",
    "revision": "657646ac0c5a7eee8cdf3bd4b90c5d48"
  },
  {
    "url": "assets/js/360.e5c8715e.js",
    "revision": "b35b1ff0b2809294177a5a60e3b68e75"
  },
  {
    "url": "assets/js/361.5cdcf7e0.js",
    "revision": "93d79d07b3aeff182a882075fcdbdb43"
  },
  {
    "url": "assets/js/362.f37fd0c0.js",
    "revision": "ff597b1ee76eb2dd09b66d359efb188a"
  },
  {
    "url": "assets/js/363.b9d3ca84.js",
    "revision": "a076ed9f13bf547629d346b5eb2bc96b"
  },
  {
    "url": "assets/js/364.81d74331.js",
    "revision": "41e69b16571e42319491e61297377ab1"
  },
  {
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.02d90408.js",
    "revision": "51fcdf12f2f521cf701779bab677aea4"
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
    "url": "assets/js/37.d441b96d.js",
    "revision": "c24b7a625f02cc7e192a667398cd40f5"
  },
  {
    "url": "assets/js/370.c72c426c.js",
    "revision": "a92de3a75c4d08c6315cee4fae0939cc"
  },
  {
    "url": "assets/js/371.860913cd.js",
    "revision": "a0d44e4e6dff873f7b9326f768eb8563"
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
    "url": "assets/js/375.019f5489.js",
    "revision": "b4f1ea956ea126d6fc4969d9ae3731f5"
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
    "url": "assets/js/379.ad84f943.js",
    "revision": "eb2a574f17faf17575bcf289630cf6af"
  },
  {
    "url": "assets/js/38.a422d943.js",
    "revision": "c9eafd9d9d023f9dcff8a34ca2e5b93a"
  },
  {
    "url": "assets/js/380.0657f3a2.js",
    "revision": "f6b117ea4838adb81208f8ab2ce58e28"
  },
  {
    "url": "assets/js/381.bd900aa6.js",
    "revision": "b3054f31f635061a448db3dcda63416d"
  },
  {
    "url": "assets/js/382.8cf5b61c.js",
    "revision": "d59b1e013a29e2a97a370b4fe77d0c9e"
  },
  {
    "url": "assets/js/383.dbd58101.js",
    "revision": "bd0f228695b76888eb25e2efdddd98e4"
  },
  {
    "url": "assets/js/384.3a6edc45.js",
    "revision": "4028419668522f15e2f50096afed021b"
  },
  {
    "url": "assets/js/385.846a915c.js",
    "revision": "f031b33eef9f258e964844087dd21ba3"
  },
  {
    "url": "assets/js/386.b2538ce9.js",
    "revision": "7b9ccc4a02b248ddf238eb1a5664d1a8"
  },
  {
    "url": "assets/js/387.16c22260.js",
    "revision": "7448647369593238c73e6a608fd3405a"
  },
  {
    "url": "assets/js/388.ecd698f6.js",
    "revision": "062c9fee3753c813ac05e8e82367d002"
  },
  {
    "url": "assets/js/389.9c1c16b3.js",
    "revision": "d1a8acfdd62a758bd1c4b28cf3595cd9"
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
    "url": "assets/js/391.ad4d6696.js",
    "revision": "eb885c27a32e670cf982171185ddf085"
  },
  {
    "url": "assets/js/392.9f913153.js",
    "revision": "0dce2b4f723b353cede59c3c330ceed0"
  },
  {
    "url": "assets/js/393.b894d3ae.js",
    "revision": "dacdde9ae9198ae1045f5c04fe6cce9c"
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
    "url": "assets/js/397.d29e33bc.js",
    "revision": "5eb788ede7c36755e53a391ddabd8216"
  },
  {
    "url": "assets/js/398.251637fe.js",
    "revision": "aa7521e60bd80e9b696d90cc5b232b8f"
  },
  {
    "url": "assets/js/399.f5d50a50.js",
    "revision": "7e16b7ae609dd35d632e4f3eab396265"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.02d6dcd8.js",
    "revision": "a4215f68fac8bc38279c48847d9a9242"
  },
  {
    "url": "assets/js/400.b23ed38b.js",
    "revision": "11f5e84444302e3adb4d5fb04d423351"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.ef1b43df.js",
    "revision": "f31f6beaa82e1a28956ab888b914912e"
  },
  {
    "url": "assets/js/42.b62db162.js",
    "revision": "ee0771fb483b365ac989e6c629be8add"
  },
  {
    "url": "assets/js/43.38a07350.js",
    "revision": "9ca0cf9e49e4b9a633b42b2b452f6548"
  },
  {
    "url": "assets/js/44.b293b91d.js",
    "revision": "d17de66aaf3c6f0e0f3c114fd2206152"
  },
  {
    "url": "assets/js/45.dddfc427.js",
    "revision": "d4dc74b2773a6d6c7ac4d4ff27c532f7"
  },
  {
    "url": "assets/js/46.859f06bb.js",
    "revision": "cd1f281c820d08f2cfbb5aa075e5a2c3"
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
    "url": "assets/js/49.022727cb.js",
    "revision": "b4c27d497b21b54a29723ad8126fb18b"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
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
    "url": "assets/js/54.0e515f35.js",
    "revision": "bc8b42d0696cef2c6d5c4e09b261d61f"
  },
  {
    "url": "assets/js/55.3ee221e9.js",
    "revision": "0d5738593b7de1577848da971d6075a5"
  },
  {
    "url": "assets/js/56.4138ae24.js",
    "revision": "30dbdd04298883453be24d82e92a1890"
  },
  {
    "url": "assets/js/57.edb13cce.js",
    "revision": "10296323be09f318b7402a7336a05bce"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.9236f2fa.js",
    "revision": "109d1628d2263fb12a90d483d62267ab"
  },
  {
    "url": "assets/js/60.4b56ff10.js",
    "revision": "de95f30f9548948c40c2eb790ca2e019"
  },
  {
    "url": "assets/js/61.f7aeb089.js",
    "revision": "832b664738e03c148bd2a1c48b78c08e"
  },
  {
    "url": "assets/js/62.36d42f0d.js",
    "revision": "721531d2c8559e3e09bdc1b35e320edf"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.c524218d.js",
    "revision": "85dbd9c2607236f820bc26e0f9638cf2"
  },
  {
    "url": "assets/js/65.9ba8db52.js",
    "revision": "9d5e5920e7a6671840700123cb0230e0"
  },
  {
    "url": "assets/js/66.037c02d3.js",
    "revision": "99066bfdc7ec99adb7cf6d762c86cd1f"
  },
  {
    "url": "assets/js/67.934b0fc5.js",
    "revision": "997740c97e30de1daea54ecb2c9aa145"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.14572cb4.js",
    "revision": "cd0b33cf8da5f089a942de16cb8176ef"
  },
  {
    "url": "assets/js/70.2b42eb69.js",
    "revision": "6319abd2f69e95dd6432c31da66e4eb1"
  },
  {
    "url": "assets/js/71.4b845b3a.js",
    "revision": "5182c149d992d175ff18e020b21cac17"
  },
  {
    "url": "assets/js/72.050d2004.js",
    "revision": "9c46839f790cdd7b45b8f6e75aa2d3b1"
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
    "url": "assets/js/75.2fcbd61b.js",
    "revision": "ecbdeeddc9a1b71b486c7b4cd4aab85a"
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
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
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
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.025684e4.js",
    "revision": "c2e76b379112d22e493257f52ed07614"
  },
  {
    "url": "assets/js/82.6fa26b85.js",
    "revision": "2bb8def0e798587559d8881c89e56537"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.59938c01.js",
    "revision": "dfd48104104087558eaea5b21cf32093"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
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
    "url": "assets/js/88.782b03a8.js",
    "revision": "c863cacbf2c992e82aeb27ee83b988df"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
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
    "url": "assets/js/91.3300d433.js",
    "revision": "777aa11fe5e4f41212d2a6d816f8a0d8"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
  },
  {
    "url": "assets/js/93.abce220b.js",
    "revision": "8f50e5a57d0002bd50d90e9371a19283"
  },
  {
    "url": "assets/js/94.e62ca9fe.js",
    "revision": "3268fcbf420b15cdce3f3d268a6a94e7"
  },
  {
    "url": "assets/js/95.b19244b9.js",
    "revision": "0e6f7a39ffe1f437b424f0fdaf08ac5f"
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
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.a2bad9f1.js",
    "revision": "354328797891bbc40969881fe96e2586"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "33584074f2aa7edaf574e9b1f02d5f93"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "32bb686a8b00b9c233fc58b51020a5f2"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "dc79c7a969af059b3b24540f757f7f4f"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "978f0e24bc1beaea4ca34210b9f24e1d"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "7f7da04f1d53ffdcb3c694d57bc9de8e"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "4947e88081d3f949b0bf9d91cc641d1c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "33c977b4c0d271f3bf248474332e6dfd"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "1302187d18513df1a0af42fdf1212a02"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "76337b260954c80b1a555f98d22f5c71"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2781ec76cec6a559235a48abd3cfeb8a"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "7f42ac3d511ae41586df054b34ee88f4"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "d3a2117f60e9f421ec1d816da2ad7c3a"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "0289cc28fdb812f6a6f198fd2a87eb1a"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "307e62370c5dc5d70dc8b3e1570b7f6b"
  },
  {
    "url": "master/api/index.html",
    "revision": "97a83c401e70a6e40b1c2de800586346"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "e9a43ffac38f352578c8f97e0d9ccd7c"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "30e20cb61758c66007899f2209380aea"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "1c6422f11c86b613b8cab6e20024f046"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "28cdac8d765c448eaca97a3281880c96"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "ade147c2d64deacf7630d3089a7be2cb"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "c86c7f0ad5d96c399ac985ecb5a3f00a"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "6b789685494af83a8fa898b57ad6a4d0"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "840b554ca336ba3945de5b9d0d7a1cad"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "a87d243a1d0695ad30bfce7168b5f742"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "6d5a0ee2fd8f5c8647bda36bd3c4360d"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "706374034518d923006b022a38c23da1"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "bfeff8e3887ca30304c7bc9819fc1920"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "167a7bc88c8cdca3886316041c293945"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "e06947940f3a15c7c2b444dc73cfe81f"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "0244f2f1e97d8cc455138e7cb0d8ac3b"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "4130f7d5cd863d562f627a1ff3289e30"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "01bbc51c0e7e455d38570eb97fa85caa"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "e4512e0dcca6b5bbb31e601d82912cca"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "eb6c96f74e087c1e54ce349d352a6814"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "2bb3f88fb9494d70590a1038271a6bfc"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "edfdd8f1baacfaf751de376481f45ae5"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "3d3cfde2e75d20cb70df324c31c8746f"
  },
  {
    "url": "master/packages/index.html",
    "revision": "5f7b9cc489b4b6b4db69536e426645ff"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "3339677f4e60881b425a5f56acb2b935"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "7021c1635d561515aa8cf5ba9dce7fc6"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b651e18cf44b235da0945356fae89708"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "a51cfbe351341a63692567187d12a557"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "00929200ff708b9b834a9e7d9c044d01"
  },
  {
    "url": "master/packages/views.html",
    "revision": "b76323f17b2b573b9a0c1caa2f1323c5"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "06e8cc65ebf0f59b711afa528f614b00"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "457e6d59f171f38de117272e29fe0015"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "c967655a73c1f1e3d9a91a828d4f9b2a"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "dcb2065676194f08fc5468729cad97ae"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "ea0fb1e546b1f6a50fffee4ae2c60a27"
  },
  {
    "url": "master/themes/index.html",
    "revision": "e17e0e916480c662e048699a75a61c60"
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
