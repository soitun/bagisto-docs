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
    "revision": "27d32e8046a5b8bba44e7c91fab47c27"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "1b92bab855ae097c64afee1e68894862"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d5f4b197dde5c6e393b329459e4a2490"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "1dd9cdbddec9fe196ec5bbf488a4b92a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "180c90b6a897ca929ff47cca309558a5"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "fd84b2a2a8229c563a815a2dfdcde18f"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "a05026f9b0987d7a542c8093de254087"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "be01439a6f968577b858e82dd11c3fc8"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "6b1034a74c43efc523ed01eb22f868fe"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "ba227e05b73a1da6257ec858431621ba"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "95aa1425d63f0166f2f72f4e1d74d5cb"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "2b216ead0ad3ee8806e8715a6e6b4f15"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "e3a4cede1e8cced0dcdd401b58ca8a77"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "61e34b1c62f9b32a48ac16ea39035cf2"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "fa29b5e7127ac9900379f6d124345f0b"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "e30307f236b0f873599267b641d89fcf"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ab99f605a2d87cfde3a9ab912daec615"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "e3bcf7733a0d30efb8f8702be58f3fe1"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a114faa7085fc2832dfc2b182bf65e21"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "88a6d5e420aa8bfacf75078fcf784d1f"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "03d85432ab50afca8218c9cb525b357f"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "6a61ee3db8ea71afa7f947f1a96039f0"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "d04b37bf66ac2c798ee21494793cf648"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "6144244fa4c8add2a480464aab4e19f5"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "90c1b8aef47088103071580c84717743"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "be2480fc6413ed5bd4f1608c4e61f1fa"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "28c32d7aca3a30f61ee61b1d37964769"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "b53c8c69a1b0de530c3b1737f9ed6fc0"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "edb1c1a6636b81b403016cee059a1ed1"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "8a4443d3bd0e108ea257d0f91ec6d144"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "c06bfa6c6629ebb783824f9e60edd032"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "f30f699932e67d85c31f0aad0b81639a"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d8dbece2d4542f61c364012c4b34142d"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "75aadaf40fbde069669430225cffc075"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "eccaedd1a79e5a121b409b2d08d31ca5"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "2740b922325d5addfc58ad366c057579"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "8ab01c97de5ff61b01023d488b82ba52"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "e01238576d3cbe7b3fa0e8772550f181"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "c08b66c451bfbbce0bef847b2d55b7fb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "883614ab04a02b4eeb8707568dc1ba27"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "8b0d0b0c89d3ed3fd32edc0dcf7bfafa"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "e5f4ece3b512ab71007b75aa643671ed"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "02087b7024bad08745af8817bb3d698c"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "da589ede146b935ffc1cb7221f7f0887"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "834198a49be2afa73b7a4b191537bb7e"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5f547d5daa8991e43feb1fe1faad8487"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "241a56ac86b6089dc48586b31aa4a95e"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "12a159c8b63fbc5e22d3c960fa9dc666"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "fcf4ca9833410d317278ba307a83761d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "703937c75001f1047a262b5a4938ad6b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "6fc9b6e98aded0a055e37ebf3224796c"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ea14b1556f428fc0f80fa59e07719158"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "871cabcb38f8402b8bb53ea1d5980680"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "626e0ac0e64be68ec4cf91224d0820f9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fa7f6934d0a01e8d6991ef942685c6b1"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "857221eab086c5d5bfdcb2d2159f762c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c7164f72e35167e82aaf7a6aa13c8e03"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6129083b3a1d6c15154f47a8d155e993"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "591b77b8c5f54ab2c3c970181903b253"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "ddfe9984f72919932ff8487ecea4a399"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d4f8b02b1a6bb1745b332ed7acd02e3b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "fba272b61613b63e703f8451511a605d"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "9391e39543ad4d95437b7e7ae915d0fe"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e43657d3d26a8544c1718e315b91c286"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "da7b91bd58648b77d806b9549baed037"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "abcf11b135cad76c75c0e1fdc6af1928"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "478ad461184ee2593ec5038f8de56faf"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "3c8ca8b8c4a97c9d3dba1e186d364f23"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "917275476d8293d1da80e203ca744668"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "51701b98fa06bde19c26551ce3238a30"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "216cad675d872604c2e8d2c2ed38acf6"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "8d46e4fc65a212a2180787a8d2af2ed2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "2dd37a1c76645847850ead305ec8717f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ab3e8db7beeebccd4f0411ac01e64900"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2c633c41f5a15ba0fa03460767d5aa29"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ef8f5fcf439271e36a7a5ed2a32ab7fe"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "da6f51542e95de90f718229b7f30a98d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "a8614b50df9b47ad70dbb069859a9da2"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "38f7d257dcdbdc60d88cf3258cfcae87"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "ccbc297a67b62e12c95e58136632bcff"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "2b18a8d8f8b3850a40dc57b301cde95f"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "c1bd72f9b7568279f800849ab1ca7013"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "946a7439676ca303c7ea73443e7b5ee8"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "6c84c6de91daab738bad70b43c64a9f5"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4a151b2eb74f8d89810fb37cd324d1d8"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e545c995dc4c75d2bfa72fc0ea906eca"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a187e1ff7b4335fc69c6f57aba7e91bc"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "be9fba54f81e3bd6bf670aa2d639f4ba"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8910a74b29adc75b8a68eca04b285aa9"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "83eb264344cb4e0efbc8907b1f713628"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8ee2aee3c60b04b6961958046765fd99"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "446f44c552b86d04e1bbb30d24688870"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "05dad8eb31d585bc5d3b9471eee4a2d1"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "1ec13d9ab64a5b0fc5b3903e19b0dbfe"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "0419194097914ac0e01bf9927ad866d8"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "070902082372e2c85094dc4336e3a4c5"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c9e9d6ceb29b15a3e82d0defd4b6e446"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "1730516dc9e94cc82344d0883d76fe8c"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "7ebd19366ea4fa6cf4e179c533577a02"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3503dbc83a8d61b003a12612793bda56"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "01ee1cef49a2fdfa6928309169093c8e"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "4fd0a5592a32a776edce2657f31e6085"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "43c88c5f7a6c39272e845f2500030f6c"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d04ab7252dd4d67f0150e2201eda5b39"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "66b81c77e02c1b0b8076507937339a1a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3ee12e8769c8b25a91b9c84a40936dd0"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8e6501de48b8388fe66d564e4fa85f14"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "2cd91a66d208911691898be9db5a0201"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "eb44f0c7514eac98ff75b17a3f955fa3"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3d0d90dde324bcfb1a2d121fe11739dd"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "fc665d1d45b255f2680ebe6ed69e1031"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "f17a33d9fbfda5563dc8ad22374eca40"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e0ef28958c21d16522f5fc772948ab76"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "290301a0d805a19738850afe385fe605"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "20085244cc64bca1f741e3c7fedd684c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e365489607f1a4f66d8dcb9607475a15"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "c26c02ae73757a4a45814c371837e130"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0f8870491c50d57d4be39c7d083fcf06"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a6467ba7d06b95d5940c5f250765ae12"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "358e631c239f4ffad313ab0c61255572"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "e6eb0b47db5d505324956af50c356568"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "8b620599e92569c820499155e207ddb0"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "a053fe0133e0ac59f95bb50cc88cc281"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "03223d444ac7a0c166aad0021ed28df6"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "633608d815a9d677548a91e2505c122a"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d4790e8691c52f671dae81799a19a20d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "06689fc84719f166615184e69760b018"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "b1445987e4e4c9c38900c7deed14281f"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "1127ddc6f88a0fa2875e60ed84aeadce"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "9b5cd385a8c0e866ef00573ebcd09166"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "618193116365f09eaa6249a2c6134cf8"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "8fe5e40cd0a9d0e40a1580d05f62562f"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a3e549012f7e153973ca626a0ecdf7b2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "a3191575d7ffafe14fd62d74454457c3"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "fe88cf8c80eeb1a95ca7b3e1115e3a85"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "b7b7b543e1f6f62c0de2a53ba2db2016"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "03b64dc227af4b9cd792c5d31dec1a62"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "c46fbca2abb55e673b846f986eb0ce3b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "27a682f1b90050fcd3a289a3a71db422"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "313797699b8be121f2234bca3fc2d6a7"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3b6c50604809c75218ffc4f28dd6250c"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "4bec52d804e7300240a4c3c2dc45ee81"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "0727e0bec58836b9cfa0b5abaac082b6"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "6a59baeb8fcf5986b36a27e5703243b7"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "c7192ada59813e1b26d39aecf0492dfd"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "cff9847ec8a08b83de060a65fadaca08"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "777d90b453b0d731ac75865496355f28"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "4aa0b004230dc87345ea2551585d8d58"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "5a01a82d37a301d365a2349c28cc706d"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "a8915b2e624b5002704552325f290b76"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "50c30cdccdcae18f97a5fdc5b5d0ea1b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ac6e00b28695d2f100df49c2e0fb0251"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "2147ea3aa393f7a2e39a33db7ec6be68"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "342e36beb30e07304f4a4b099d861901"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "7889c3abdfb42756418ce6a51b91bf40"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "09ed0e8eb1e8d2253646e08db7bbc4e0"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "020b59f2a12d01551034d9b8b2daab6d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "292e6a58a51f71a9a3359830de43c7b7"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a42d59d3d916a5cfedd1a96799af42fe"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "25cadd0ec6e368d0baf573b5524a65e4"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "3afd4bf2d9473cfaab6845928534b4c6"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "2f3f5fd83f11f7230b39bdd377e26a72"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "53402a2a1f5b5a5b1d1988772c9b1cd7"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6447699cc87f3dc0a8d3871c40e7ec09"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "7bbe511a21f6cf80fc1669dd1f83969c"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "5c59ff64ca6790258f4f16d5a550d44d"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "772ba5feb98358624a45ecac54ac1647"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "7f1c643846e3e0df873d3dfb41e7e6d4"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "ef8e5bc6fe57e9849495e7ad992e5da6"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "b24b39f2a45e0f1693a040b7bab1ed55"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "0b3ec78fbab81284bd1b9a5a0c465270"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "ec925378267569f94716a877a2e36617"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "acc9ac2acfc821899bf6f5d8b1904765"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "e4fe7650639502a6b01136529d068ebe"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "e9c3fc4a797e93146ca4acdbefdf85a7"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "c24e9542ece69ef5487037e4d3b068cb"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "84a642e504e9a6b80f240f756681bc9e"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "1452c638deadc1badabc3e865a2da55a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "e4c72eda8002d828ec85340819790e05"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "38f77ebd773237adac67aa6a3422fb0d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "65172b5ee38feb09d357aa8720d881e4"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c12f7681ed9f6d0e3e422a165066ef57"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5c5e6f1193ffebef51f2d9ab6e87b3ba"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "9b95b2804a0e57af1fd9913159aec99d"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "de7d73c2eacf121138faad7f4bab6aab"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "5fea784f18e5ec43d129957d5ce1e556"
  },
  {
    "url": "404.html",
    "revision": "aaee0c34c1af6ada4fd9a76b04da233b"
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
    "url": "assets/js/101.13b8b7f5.js",
    "revision": "d76fd23df80687be74990a4c875437c5"
  },
  {
    "url": "assets/js/102.9ab64c3c.js",
    "revision": "2a1fd9ec6f9b8169544fe7edf6631179"
  },
  {
    "url": "assets/js/103.d9a79d8a.js",
    "revision": "8fd82f61d423a7f544fbc84851f40d2d"
  },
  {
    "url": "assets/js/104.114b8b35.js",
    "revision": "46cde2b500c2e820bd8e9b8d3b21d6a7"
  },
  {
    "url": "assets/js/105.5e9158fd.js",
    "revision": "2bc27901cdd9f53c01cf2c255e7bf547"
  },
  {
    "url": "assets/js/106.79bbc35e.js",
    "revision": "af10fc6206fb952807f6a716c1627ff8"
  },
  {
    "url": "assets/js/107.01b2c2ab.js",
    "revision": "ece68042354ee42147df63484c915abc"
  },
  {
    "url": "assets/js/108.56fcd7c5.js",
    "revision": "d567f56edb2279a196de63e441b3d8e6"
  },
  {
    "url": "assets/js/109.55c9a2c7.js",
    "revision": "82472b9d320a1d180633679f654884e3"
  },
  {
    "url": "assets/js/11.1bfb0212.js",
    "revision": "9f9e8c88225d96efd7d909b9b6a304d0"
  },
  {
    "url": "assets/js/110.dfbd9853.js",
    "revision": "98baef5d2fdfdb1a921673fef2f97416"
  },
  {
    "url": "assets/js/111.7c64afcc.js",
    "revision": "5c22c05c9d45ed353b540bd8d3ed37ea"
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
    "url": "assets/js/116.c6e1c705.js",
    "revision": "91aa2942fa650db186f2016ae75a39e6"
  },
  {
    "url": "assets/js/117.cbbe5bc1.js",
    "revision": "610e289d63185e6901bc2892419efd45"
  },
  {
    "url": "assets/js/118.b9a7bce0.js",
    "revision": "3f542c7c43a61d540e85592065bb8b83"
  },
  {
    "url": "assets/js/119.2726bcf0.js",
    "revision": "60acfbc72c41856f1bed1d57f23b233f"
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
    "url": "assets/js/122.3b6fec3a.js",
    "revision": "df94bb59222fd024c52f9bd5b76adb4c"
  },
  {
    "url": "assets/js/123.0089f709.js",
    "revision": "766d3c1feacfd2d8bda990a00cd8add0"
  },
  {
    "url": "assets/js/124.f1cbf32c.js",
    "revision": "3fd7bb10e1cf2b78472c2395d8ed1e75"
  },
  {
    "url": "assets/js/125.a611e275.js",
    "revision": "dcc0a0319f040819bf0abaab1dc71056"
  },
  {
    "url": "assets/js/126.1402aa22.js",
    "revision": "40d23e9dc2d72f280c16a55f87fbaf21"
  },
  {
    "url": "assets/js/127.7e9a8950.js",
    "revision": "46177da3c812552cd2db6fa2d21186ea"
  },
  {
    "url": "assets/js/128.726aea62.js",
    "revision": "998da4988fb394c5610fe00391eaa07d"
  },
  {
    "url": "assets/js/129.54f52d33.js",
    "revision": "f23d6f2929a4511a6ca21a3b457c6a3f"
  },
  {
    "url": "assets/js/13.d0b481c3.js",
    "revision": "3e15c416a5da5b23c4eb5c0529fc97f0"
  },
  {
    "url": "assets/js/130.71432bbe.js",
    "revision": "604bfaac5d4b50b239e1ebe2e3b4349a"
  },
  {
    "url": "assets/js/131.3789ebf8.js",
    "revision": "ffad2551420ab765e2204d4c88876fee"
  },
  {
    "url": "assets/js/132.5052abea.js",
    "revision": "580b2964e85bd0b1bbb6bad362b4094b"
  },
  {
    "url": "assets/js/133.34cec03d.js",
    "revision": "495829d70e8799dcb9097175ab31a9b5"
  },
  {
    "url": "assets/js/134.511b193b.js",
    "revision": "ab278d6fd9d155d4bf55ed8b2747db00"
  },
  {
    "url": "assets/js/135.d1a87f2f.js",
    "revision": "e39c5e62b48df035a2334de5e81d5994"
  },
  {
    "url": "assets/js/136.556a478f.js",
    "revision": "3aa0a5c64f8c570a2b35fa371a753ba4"
  },
  {
    "url": "assets/js/137.e2be7e19.js",
    "revision": "113c3a6c724924e12f5dbbbda90891b7"
  },
  {
    "url": "assets/js/138.5f5c61dd.js",
    "revision": "272960f843efb3ecc2e31b42e4b69223"
  },
  {
    "url": "assets/js/139.5d016af5.js",
    "revision": "392f877dd33bc301d8af579767260012"
  },
  {
    "url": "assets/js/14.255d6538.js",
    "revision": "0e6e3b60e4833ccc832aa1f02336d4ac"
  },
  {
    "url": "assets/js/140.a1f532b1.js",
    "revision": "508ab5606e785a800bddbb4f8d53947b"
  },
  {
    "url": "assets/js/141.5b70f206.js",
    "revision": "539b91d876ca1453e754b52d76d0c804"
  },
  {
    "url": "assets/js/142.a8fd691a.js",
    "revision": "542e40ff613e4a081966fe3366cbaf8c"
  },
  {
    "url": "assets/js/143.b4b19c7f.js",
    "revision": "08352aec936d85b818babb07f8e0a546"
  },
  {
    "url": "assets/js/144.ec2a569b.js",
    "revision": "e8ac030062c09c0a029dc02fdefc3b50"
  },
  {
    "url": "assets/js/145.87356af1.js",
    "revision": "368fcf97ec55481b0bbbc14e280fdedb"
  },
  {
    "url": "assets/js/146.6e064899.js",
    "revision": "58596c28ac8369dacb2c2abbca4863e5"
  },
  {
    "url": "assets/js/147.1803ac33.js",
    "revision": "4071d2ebcc5f9f38d25232d7a1ca9511"
  },
  {
    "url": "assets/js/148.de43fd9d.js",
    "revision": "ccfa76fb680dede541020dc2ad88eea4"
  },
  {
    "url": "assets/js/149.930bfcf9.js",
    "revision": "33986b7af2d35193860cf481294c448d"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.35b23e26.js",
    "revision": "328abaab2839d14cd617439e48960364"
  },
  {
    "url": "assets/js/151.67973ed2.js",
    "revision": "b80badbc2c6d304ab0d577ba4316635e"
  },
  {
    "url": "assets/js/152.e050c6a3.js",
    "revision": "da786e7302c75e2690205d63eb6f1a30"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.500c0ebd.js",
    "revision": "9b7898d2e7c41b8a9a1918315b468db5"
  },
  {
    "url": "assets/js/155.b1172280.js",
    "revision": "dc0e805b888f1d03f49195cbf2f82061"
  },
  {
    "url": "assets/js/156.9486ebce.js",
    "revision": "07fa533b68e339fee04f1f01135df490"
  },
  {
    "url": "assets/js/157.415e485f.js",
    "revision": "4f5d19e5cd63fecc0a6a0e170825c4f9"
  },
  {
    "url": "assets/js/158.d96a1a77.js",
    "revision": "ff732832edc3b280aedeeaf3c1eef97a"
  },
  {
    "url": "assets/js/159.48035d1e.js",
    "revision": "9a8108c7e53e6cff6327d8194508cfca"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.80226bb2.js",
    "revision": "62bd7e46f44217871864b4555e09d510"
  },
  {
    "url": "assets/js/161.952fcdfd.js",
    "revision": "c3938c1fabda1261f406b1a4af5cb753"
  },
  {
    "url": "assets/js/162.cf96be6c.js",
    "revision": "040d15c878501d0f4c0a33cdbf605e86"
  },
  {
    "url": "assets/js/163.7ee2e7c5.js",
    "revision": "e142df3d75d2bc90efa44d136274372a"
  },
  {
    "url": "assets/js/164.a0420f9d.js",
    "revision": "2c219123aa441667d9d62a110fd6a7af"
  },
  {
    "url": "assets/js/165.2b6c48b8.js",
    "revision": "85f39ae66c2eeab808c6d5bfc375e604"
  },
  {
    "url": "assets/js/166.66e995bb.js",
    "revision": "664559dd5d8120d856fab95c167ae801"
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
    "url": "assets/js/169.d3764a5d.js",
    "revision": "e59d96b6dedaec3b33dae07b3ba99570"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.d44e63c5.js",
    "revision": "4a168aa0155df0ad3655a373c4936acb"
  },
  {
    "url": "assets/js/171.4f0b69d9.js",
    "revision": "82e96e8063c70107fab86716888206c4"
  },
  {
    "url": "assets/js/172.d40f1d32.js",
    "revision": "0e2e50f93fbb5da56f41734abd0a8d58"
  },
  {
    "url": "assets/js/173.c8649889.js",
    "revision": "6368661606d7507265afe7dcdeb90f2f"
  },
  {
    "url": "assets/js/174.48e741fb.js",
    "revision": "baa51c9d377a0739a0e7854b5e19ddca"
  },
  {
    "url": "assets/js/175.b625ce1f.js",
    "revision": "58a956992d74a2e4c8d8224a366603bb"
  },
  {
    "url": "assets/js/176.979b5d32.js",
    "revision": "8cd6be1b868bab97ed80114ad8ef133a"
  },
  {
    "url": "assets/js/177.5ecd24c8.js",
    "revision": "e00a92f5d15e9310ec40912619870981"
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
    "url": "assets/js/18.7efb5c2b.js",
    "revision": "78944f97b0f9237edfe4598383181946"
  },
  {
    "url": "assets/js/180.dd6ff9dd.js",
    "revision": "c5d401ed7993338a415970677f5a33c9"
  },
  {
    "url": "assets/js/181.5f922752.js",
    "revision": "6b8b14ac8478f1d4f1f238937e16b779"
  },
  {
    "url": "assets/js/182.c450c823.js",
    "revision": "0a4650a7d4faee1ffa0bc79b8c7f8fde"
  },
  {
    "url": "assets/js/183.9d4a9443.js",
    "revision": "4bdcbff82c49b0857e92d5b80427b834"
  },
  {
    "url": "assets/js/184.d2d0874c.js",
    "revision": "37ac11f27a9069deac76c51300a2ffae"
  },
  {
    "url": "assets/js/185.7a264ed9.js",
    "revision": "a145e5b58f1683563bbd9a5ad170999c"
  },
  {
    "url": "assets/js/186.5361cb3e.js",
    "revision": "30902d1062ea51d4b8c02f042ce1e67c"
  },
  {
    "url": "assets/js/187.8e398f3b.js",
    "revision": "0ac0991193f63db8a0d21d31bf22df06"
  },
  {
    "url": "assets/js/188.976d0c40.js",
    "revision": "ce2f06ba62f9930d992363b5fd1c2502"
  },
  {
    "url": "assets/js/189.8d52467b.js",
    "revision": "473965d57b3485378863775f33f24c15"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.361b79e9.js",
    "revision": "9337a22d716b791d631c1f3d4dc36b98"
  },
  {
    "url": "assets/js/191.de0adae3.js",
    "revision": "5f2baa11f1bd2307a4884ca0fe828185"
  },
  {
    "url": "assets/js/192.c0d8d19c.js",
    "revision": "d7147066d6c372462a96f3326f16db82"
  },
  {
    "url": "assets/js/193.928a91cc.js",
    "revision": "aa04c8d7f682dd317842d943c5f36678"
  },
  {
    "url": "assets/js/194.6bbb386e.js",
    "revision": "4daf9e59af121bc2d8979aaa900c4b20"
  },
  {
    "url": "assets/js/195.b19f4091.js",
    "revision": "c9476c11c18f18640d104b01c0953b01"
  },
  {
    "url": "assets/js/196.b734a75e.js",
    "revision": "04b314902936543c56dd49bc8e81dae3"
  },
  {
    "url": "assets/js/197.35a19707.js",
    "revision": "399ff97c49812c0470fce9096e112270"
  },
  {
    "url": "assets/js/198.4339f8a4.js",
    "revision": "d06043eb06b704d3bfc2e5b901db1888"
  },
  {
    "url": "assets/js/199.1ec406a6.js",
    "revision": "6a943a33d76637287b74a18a4a612dd7"
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
    "url": "assets/js/200.ff191d14.js",
    "revision": "d3b2a4ac3ddcdf631b001441c8b800aa"
  },
  {
    "url": "assets/js/201.242df33b.js",
    "revision": "85664329f4d4f713aa59ded67da48531"
  },
  {
    "url": "assets/js/202.c2c4787e.js",
    "revision": "2bf94e9392ad7a0adb6e3566264a57ed"
  },
  {
    "url": "assets/js/203.16903156.js",
    "revision": "d3d81ba2a5b7622067e917efed60be1f"
  },
  {
    "url": "assets/js/204.7ae21b8b.js",
    "revision": "509d37878de8ccd0560341f38cf545ec"
  },
  {
    "url": "assets/js/205.4dd51f78.js",
    "revision": "fb3a21403dd3568fddbfc92da7c239e5"
  },
  {
    "url": "assets/js/206.f95aa7e9.js",
    "revision": "a15cd15cd652c5c40e5d01e0728bce5b"
  },
  {
    "url": "assets/js/207.8d7448bc.js",
    "revision": "44df52a7fd00fe29e84a40d325ea1e8e"
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
    "url": "assets/js/27.423581e0.js",
    "revision": "1bde09b86dc95c4a75fa3232c1dfc3c7"
  },
  {
    "url": "assets/js/28.9589c169.js",
    "revision": "f0ce0b2e21bfc8f4d033e4515a03437a"
  },
  {
    "url": "assets/js/29.4470c5b0.js",
    "revision": "4f731306bd063a18d488aeed5dc058a8"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.34fa29dd.js",
    "revision": "b08d0c4c28f1a4afa50bc948f05bf8e1"
  },
  {
    "url": "assets/js/31.3e39db18.js",
    "revision": "af6a881f6b7e1ddb1dbd7e408d772204"
  },
  {
    "url": "assets/js/32.bc717ed1.js",
    "revision": "550b3c92c06e952ec738c9e939a28619"
  },
  {
    "url": "assets/js/33.0848d820.js",
    "revision": "261f9d01a92747bb7a81b9f40285da4b"
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
    "url": "assets/js/37.9d4aae5a.js",
    "revision": "b13860114fb0d5f42b41c1aebd4e44e2"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.f24d794f.js",
    "revision": "e3d91df591cde109a8421aeaf78cbd9a"
  },
  {
    "url": "assets/js/4.13675134.js",
    "revision": "81c3d5b99c6319527a2f510e3d1f2607"
  },
  {
    "url": "assets/js/40.6870e565.js",
    "revision": "c730507001ac0490bea5e360924df588"
  },
  {
    "url": "assets/js/41.6a13d5b5.js",
    "revision": "96aecffcb8ad1fbf396bc93ece5f2c19"
  },
  {
    "url": "assets/js/42.b6ea3f0c.js",
    "revision": "5183400434e27ba5dbf2d2130530adb2"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.2c5bedec.js",
    "revision": "d04f3e6094d3e5f4cbb6a3a360cab577"
  },
  {
    "url": "assets/js/45.01d3ca16.js",
    "revision": "ff1e4bca70ea868cbc7635638b2348bf"
  },
  {
    "url": "assets/js/46.69881e11.js",
    "revision": "8614c4b45c94789830a79a4e846edf72"
  },
  {
    "url": "assets/js/47.a22b117b.js",
    "revision": "26a4d9857f2d9874f281b0223fa53094"
  },
  {
    "url": "assets/js/48.6dcd51e4.js",
    "revision": "03ffa391a26aac9057b8eaebcee1bb4d"
  },
  {
    "url": "assets/js/49.11258f4d.js",
    "revision": "1101bf54657a029791c4f4fc6669de34"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.1ca5dd49.js",
    "revision": "cae7f8a380a12914f3d8114a2fec8adb"
  },
  {
    "url": "assets/js/51.4859aef0.js",
    "revision": "efad4669a06be3ae3c7cf444873c4581"
  },
  {
    "url": "assets/js/52.a9462fcb.js",
    "revision": "71c05ca4d2a706676565aa4446801315"
  },
  {
    "url": "assets/js/53.9163cbdb.js",
    "revision": "01289cf3e77bd679760777f23a911274"
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
    "url": "assets/js/56.0fc70380.js",
    "revision": "4aaf98601f8e016dd3966007eb32760b"
  },
  {
    "url": "assets/js/57.441e4902.js",
    "revision": "06216cf21b57fb063b39c1cd41326570"
  },
  {
    "url": "assets/js/58.75cc37f9.js",
    "revision": "f4e5a24f692b7081372ba3cca49e4c4a"
  },
  {
    "url": "assets/js/59.deb7bb65.js",
    "revision": "ded51797d75a49395730f8b07f83d1e6"
  },
  {
    "url": "assets/js/60.50884343.js",
    "revision": "7cc4b4a1f75de886b3e0323c84560bed"
  },
  {
    "url": "assets/js/61.fb99ae47.js",
    "revision": "e8c25661ef1530e041abbd3b0a9b37bc"
  },
  {
    "url": "assets/js/62.1f33a4a1.js",
    "revision": "dc080d5ad66446022fd7948c921633e2"
  },
  {
    "url": "assets/js/63.50db7efa.js",
    "revision": "b389cfb5d5ca915609b00d8b2dfc6b93"
  },
  {
    "url": "assets/js/64.649a3b32.js",
    "revision": "451a21035c9645167d2b46f975ed42fb"
  },
  {
    "url": "assets/js/65.459b2561.js",
    "revision": "9a743e7df161a8e7e5c42ce06e56c37e"
  },
  {
    "url": "assets/js/66.6ec62469.js",
    "revision": "eb877cecdf529f708f560ba9a0e8910b"
  },
  {
    "url": "assets/js/67.bec75fdf.js",
    "revision": "dde56fe722bbc1845aa44bec42314849"
  },
  {
    "url": "assets/js/68.5648b517.js",
    "revision": "104a8bf6c11707a6f0f5fea39ab49d37"
  },
  {
    "url": "assets/js/69.d377fbeb.js",
    "revision": "1c8633686260fee1788f6b1c13b22ec1"
  },
  {
    "url": "assets/js/70.7aae6de3.js",
    "revision": "afefc4c8075386db8193db89fc4b7a66"
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
    "url": "assets/js/76.936f0d3b.js",
    "revision": "76ee5baf8a1636c50f5dd35186a16554"
  },
  {
    "url": "assets/js/77.ced340bc.js",
    "revision": "fd9e8055e66957ab6a9fc5b0b708cb46"
  },
  {
    "url": "assets/js/78.f96ebb19.js",
    "revision": "dd9e6e01306befa32e17d2190ed8f5d8"
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
    "url": "assets/js/80.00c8769e.js",
    "revision": "780f62679441e3f4a44de59798e8cb32"
  },
  {
    "url": "assets/js/81.84ce26bc.js",
    "revision": "71e4b7cfd7d99890b9b98e9b6393139e"
  },
  {
    "url": "assets/js/82.fec9bb36.js",
    "revision": "c0a654ea5a55e0630015e6326ec41855"
  },
  {
    "url": "assets/js/83.9fdc0404.js",
    "revision": "ccbc2c6e351d039b88bbaef49c648df9"
  },
  {
    "url": "assets/js/84.27caf2b0.js",
    "revision": "d062314a9e680f1c55cadfc1d60e0d9b"
  },
  {
    "url": "assets/js/85.e2c54d39.js",
    "revision": "fa270fdc1af9953606d0e5dff92c6ba4"
  },
  {
    "url": "assets/js/86.bc60fb4c.js",
    "revision": "553037ab17fe556d2c2e2658b1b670aa"
  },
  {
    "url": "assets/js/87.b722f582.js",
    "revision": "670df6bf5f519a348f001d4ff5210ac9"
  },
  {
    "url": "assets/js/88.e969c4b4.js",
    "revision": "73361eb27a6defae31b309666f6c2849"
  },
  {
    "url": "assets/js/89.d1e78ccb.js",
    "revision": "3e4e6b56fc28ce92b392960337ab15b5"
  },
  {
    "url": "assets/js/9.af9f3be3.js",
    "revision": "2d686e9dc537f05e57a25059545cbe08"
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
    "url": "assets/js/94.4eec34e4.js",
    "revision": "e222e3d78ea020829781a884773248ec"
  },
  {
    "url": "assets/js/95.fb546e06.js",
    "revision": "99d3ab9dea46cfe6f1f354ef18869cfd"
  },
  {
    "url": "assets/js/96.ad7f60ff.js",
    "revision": "82881270cf8e5cba2797ee4a6519ee14"
  },
  {
    "url": "assets/js/97.2866aa8c.js",
    "revision": "58521d5f8d40f628f97545a0157fea5b"
  },
  {
    "url": "assets/js/98.15765cc7.js",
    "revision": "89b517472b5814f5bcc6ed92ed5c4a75"
  },
  {
    "url": "assets/js/99.f9f6cb42.js",
    "revision": "75ca12330e9af677e65eab4f9f47e889"
  },
  {
    "url": "assets/js/app.80405b1a.js",
    "revision": "50f2664b4bdb0e782a4e52ee85cc8be5"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "b8c6421cedda233e33d74a539e56a380"
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
