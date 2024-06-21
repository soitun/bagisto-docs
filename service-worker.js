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
    "revision": "8775634be7a22b1ec221bbf040bedcf5"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "42399ba89c8607d67e5e57e5fc709795"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "40e06978ce21b1b428ee3e145b9ec22d"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "b14333e1af34a2cead8139f9b87fea43"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "82634018444baaa32d7f4f028b8d4cbd"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "3aa5fb1a01aa241e310e33c6907863c9"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "2d11e13d23ea23aa25e95751ad42bbfc"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dc9ac33ba95db4e9fffbe909d161bae4"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "177aa88d05b524f69910cc8832d0d6fb"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "f8587d021cc324bd7f55242a69776af1"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "61993b468779a236823b132661d71c89"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "7101f56d55a74d940cc20dbe27d97805"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "ac4b1374d779b649a3c0824aca9a5f07"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "691356e699292e59b0c2d624305fea30"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "d8d4e1e9cf42da6c66626a3c68ae7b0a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "6316c036197cb9415e3c3f60798bc8cf"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "f37c2df90f1f006f9bb9905a34be1998"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "89320f4b486af92e9a1e21fd5d5604f7"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "50d53c16078ed895f8a54a868e915fdb"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "cd856dcd0a4ef62d54ffa5db8d039181"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "455b851d0cfda9766cddc62f03ac5cb9"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e2d90221897f9749d82d7b07119409ad"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "8adb7970da68990e162bc0826c88d5c4"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "b4388c1ad7cebd05815cdc908f36587c"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "cce0570bf74b07d2c76e375dd5566431"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "61782b0cf0aaa4a4896aeec5eae29ce5"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "4cc75731411c41ae8cc4443f763c6362"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "a4503f34f15db2f2dc81877215ebfe10"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "077f06337f351b3a860f202545ff3278"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "3552ab2038758d1042ca6ed30b4f8468"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "0743b810bf0d6248f6738b3b0bc3b3e8"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "719e5b42f102942f37f23396d5e7bd19"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7e127dffd2df56005b76e6a5c3c73af7"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "07e0adae9da70e3e39080d67a0bb4d2a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "1ea8385e15c8f05c2f03d58e0258c907"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "4c1ff52493a3e072fd61fa2dc6530e4e"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "c59c4b1783391c0e386a50b0eb2cf416"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "8d514b586e9fd5bbfd3a3e98557faeb9"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "b15c731c205666a70a91da4d60bf948c"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "0cd42a39be880f73850f74a41b9af12e"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "befe8df70415c476f87c341ad44e0e87"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "873ee6856c6b5514c6b18007270315cd"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "14cd9ed985a7283b73af2adf8a957ed2"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "5370b8e80b866123f84dfaf5f3bf85a4"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "c95458e896d41dda625ca4278a50e345"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "c99f332f56ca9bdf0f5cc04f0c853cc5"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e09faf2148b520ca3b0fa812c1b8c286"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "05a9e1aba53a9def4f9c8c4d9fb11937"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "5a98a367eebdbd675eb0b02e71e64204"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0ab9df84cbb4df586378b0fa2be91798"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "3e0a8eee7839bd2ddad01ed5890de943"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b4f88d9ee22b974ad808e2d3d669966f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "0be31f2c238672a1a32dbeb8fc483cac"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "5f1c4bb15812dabcf517b262ee0303f3"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "86bf8e697b4f52e5c011d3455ab05386"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f46bee17a3d5d7618460350a000475ce"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0b6c43f4c80ee6826d308f556dfe8879"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e25fb89ef99fbdca30c4da299b78c6e9"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "456c3bef6d3fa16be904d3371bea3348"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b5524966f3a87339334204c28276f097"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "ccd69c4e68868e49de5bde9cc27edb8c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "77178b8b588eddcda774382938dab147"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "382ed6ee6d5da3f264f34ed884b85739"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d411c143dcfb46e6c99043f42b010206"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d23fc979057e34e7acd1d0c93dcf1d9e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a7766d272d35ff777615a71ea5f1aa93"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "123812352d01d2dd98cee5dbde0e9e0d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7421266652ff96480d92e649cde1dcd7"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9d000d74c38849f7604bbe7a22c27134"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f12351d8e4604eebf3802a122a41afb7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "016239f53072dbdd0ef304c28c2edfe0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "670a5cbfb7ca8dfe2da04fc201b52931"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "38159effc04344042666eec9444543a5"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "dea552ade680162b7b247ef8c2b0e9fb"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2d646a57ab457a1e2e664690767a312f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "9c4c6ee405cd1ac5ff2e06ed9cdba26d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "661c57c331c39d22c90b3f26788d33c0"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "783a997256f776f6713b437dfa7019c3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "998554dc2b4f37de0bf3dca838320135"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "e3f1bd5316b8c5dd917e6540a7d12a33"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f04418572d851cfd3992ce906155f4ba"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ebac890360121e1a24b5661b89e305ca"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "82a4666fb98081ecb16feba33ce799bb"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "01bc2813e9b8a62ddd41d08ab987ad31"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "5be6bd0a38d7821643b3c688cd86a02b"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7d16e6e850c3d75ae4be0171900ced95"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "478b8044686ef3f5e13b46223d7f5e40"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "c93aa16c6dfb8a3f3861b23b65fd34aa"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "5c5943e3615e2ecd72cb5015a865dbab"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0029ca49b981cac67ff74d0c67a8d314"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "641f7fe4162c6a66bdaa69cac4b0d023"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "eeebd4b0834515481b7d7a0dea328615"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "b6e0ee764ed17585b7b69ca0b7b1750d"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7887172bb0e3b810c4c3b24221244267"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "8b40a920aad6422c141cebc81570ffee"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "57639f9ce5af6d39a3ebd3d8626be34b"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c865ba834edb75be9e4a8bd2aee6afff"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "eb475b88fbc17fd781ef421bf708b411"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "fe7b09909a2359088244d4e801ca2fa2"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "a15cd4b4927ce9d567ea2d0b40f9078e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "4ac0d0dbdea17b9a12f5188ba7795c19"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "0f3f4ba56d4c302c0395eb0eb111e5d2"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "8618c8023207f14a67d97c8cbdbef574"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b6e1a2f4d2727be0d06b67c497dca658"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "640ccda412e1584d3b34cce57a744504"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "273bed5bc12211d38859a667edb9d2a3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e9b8a6cdbd22784fdc204cc3998ef4b5"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "15f7034843a9b43357ccfc5500ad3dba"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5a658447c6cb4d5a80f2c1ea85c1decc"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "2be53ef81c8d66904f4d2df480f879a3"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "98c9ec4e893309b35db165a9e5795ab6"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "e971ec79ae2cf3621ddca30bf4b3d2b2"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "b3d03fc5b7643488ec2b3dc7f8716808"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "50d875cc91fd774b6667573c4efe9898"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "e33378c2c1590e79ea138c19703ce8d3"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "61a88e3ddf2c162a9eb03a8ed39c8df7"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d5641ff6f3d7361bc300a58827dc1248"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "7c4ad9ebd86aa3c71c586a752d84a7b9"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "52472a34c619a4fd6ce3cf6f636d0372"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b0ceea8993bb96f8bbb355ed4a23ad5c"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "9a1d546c7368c0b1ecfe7076880121f7"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "fe81699cb91796dcbd44a560bf6ccf77"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "863290be38fa34029196137df779860a"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "c459865a437ed5bdeea6cd85ee571101"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7bfd511d8c7178e6a6ef0d471ca4a860"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "6e3e58c687c3dce267fb80227e75d154"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "dc919d9838abfabccb637e85e4fbc183"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "1b0e820ac1d47c03914c2f0327f37fa7"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "c01a9b5b5ff8e8dfe5a6821241ef8d1e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "3e1849bcf0e39acafc18cd9715e81093"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "a9fa36bbd25ea5b9c6b26bf2873c97c2"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "04c9f0b46182537028c24998e258501b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "34341c49fc6fea922ce297acf3c07efd"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "5497fe1cca246568956ab08d41e0a856"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "db9d07230b0af31beb370be2db02f73d"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "4b796d7734a45883c050bb5725c7b413"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "ad7c4549037c2bc96c46a9c018ea2fe0"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "394792a0ac78f5bf95b0a7c09e4ece9e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "13c9fd0fce68a0b594c5f4641064c051"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "457a9ebbe128b4775881ebd21d447c74"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0226a05195d633bca55a8dba58f87114"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "ca5a21ba4f23dd476ef9f71b8b53eedb"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "28ee3732f4a22217b081dc95c9970402"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "a767f217d0464ce84bde17c432f116ad"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "1d86fb2f1dfaefa8090e8e7802cfbf70"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "08900ffb2a2108ca8ce72723120d6a8f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "59c62f80902c2b8cdd3cd17a459fd379"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "5e5e2e67888a82036424ebd67a12f56e"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "6d591345f12f42550810f01d2eedc6e8"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c4d4138d22f0a1ccdd1dc33146081cd0"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "62b5c4f066371ee1ead19c6943572a21"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a6ea89d8973c93d38735aee918e8b6f2"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "4bc0d9fd89119003925b5413b317f71a"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "8acc8d5c18104de55d7ef287e0fab50c"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "b9df5bcf9937e81c51492eea2bd946f6"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "1f479b8373a59e247464d07b837ee99b"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "b2d4132d6a6545619344194a4dcc344f"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "27ffbcc3fd8c507b95be2ce8dd19b1f6"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "d22e44cfed6b60cf4abb720e1871927d"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "38e4012fe2315c083fd2f14a85bd5b1b"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "e86de9ce892d78eb3dd55409273a6fcd"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "70394a2f3ce280f192322b0a18d8c296"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "7f6b99d366bc42dd54d95ea1aeb1c294"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c1111e6e354c4ad7bab053f44876b054"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "020b0d868561c58b5dbf412f8b6c1cff"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "0b3636dde5cc314938fcb20ef8d9810d"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "39d864b9a1d41cc5d5f66c3b8efdf67e"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "97a875ab421eba9be2d549b9a9d80680"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "f72ea0225c09742fb68f19acde099a4d"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "1e0b93b4bf6b3298a0431015396f5dc0"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "00f0c4f2f44aac07014ebc75db8dcc52"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "333d02fb78d90c3a263d77fd617096e3"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "20e2cada3418d910cd09483641038b36"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3d70a41cea5b09da5ada4b8843b954a9"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "9c16839eedc63947de9ec2b849f0918f"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "439eb96e4d2a21a1153d61299f58fb05"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "45ca19b5f61b130780e3d67017815d66"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "371fe2a2e37c82e4e0faab039853d287"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "fa27a755ce1c9e36fd2b68b655d9852a"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ab0fdcd269875dd7fb27cddc624d680d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "5125680f5c13dd0f392b8cb8d7864ba9"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "0dbe489706dc94b932728ae034705072"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5940f37dfed1d9e2e23863cdc717a157"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "5a28c3fab421e102cf6dbca59c662942"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "b8fe5d6643bc38a3e4f7ef07fc769260"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "a546169824024654ea70004209cce0de"
  },
  {
    "url": "404.html",
    "revision": "257cd893dbe0299394d71a0f92605b68"
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
    "url": "assets/js/1.e76529c8.js",
    "revision": "25e1b9f4c7e89f6fd6e7d1824b4a43b5"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.11117995.js",
    "revision": "39d9e6721feb71271647e866cab8359d"
  },
  {
    "url": "assets/js/101.6a6198e0.js",
    "revision": "911b3f58b73bbf1c67e81b6c933e63f2"
  },
  {
    "url": "assets/js/102.6d97b94c.js",
    "revision": "f6dfade8e917b582f72f262c07389430"
  },
  {
    "url": "assets/js/103.90f66cda.js",
    "revision": "c1dec079649c3263e52f6c0c5970e38f"
  },
  {
    "url": "assets/js/104.114b8b35.js",
    "revision": "46cde2b500c2e820bd8e9b8d3b21d6a7"
  },
  {
    "url": "assets/js/105.c8c06753.js",
    "revision": "78c481989de95c767a36b02d1d698b03"
  },
  {
    "url": "assets/js/106.e84cd147.js",
    "revision": "8106c0a0990a07704a72c9f177417457"
  },
  {
    "url": "assets/js/107.32e4863b.js",
    "revision": "4775d3fbcfb8920d25731ded5ca724ca"
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
    "url": "assets/js/110.dfbd9853.js",
    "revision": "98baef5d2fdfdb1a921673fef2f97416"
  },
  {
    "url": "assets/js/111.180ef911.js",
    "revision": "564947815477692cc148b92ebe682209"
  },
  {
    "url": "assets/js/112.024ada58.js",
    "revision": "513ae05b080dfa726cbd605924a48e0c"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.31e9c8a2.js",
    "revision": "2f789a60ecef7d481a46b482e2f776f1"
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
    "url": "assets/js/118.d771afa8.js",
    "revision": "73af13eb9b3af7783e4c80af0e4ad4d3"
  },
  {
    "url": "assets/js/119.2726bcf0.js",
    "revision": "60acfbc72c41856f1bed1d57f23b233f"
  },
  {
    "url": "assets/js/12.9b51fee5.js",
    "revision": "9fbfba627a1b6806363c7e86da5cf350"
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
    "url": "assets/js/122.f1372d5e.js",
    "revision": "be32f2aa9ad1a05085239b5565f22be0"
  },
  {
    "url": "assets/js/123.c358e98e.js",
    "revision": "d8ed5ee933f9a6cfb2a25c1a24213101"
  },
  {
    "url": "assets/js/124.f1cbf32c.js",
    "revision": "3fd7bb10e1cf2b78472c2395d8ed1e75"
  },
  {
    "url": "assets/js/125.02dfc716.js",
    "revision": "f7ab232a762f8a439a340a236867a0c1"
  },
  {
    "url": "assets/js/126.7a205835.js",
    "revision": "a5bf2e95e6d0df6af8399d837b91e9a0"
  },
  {
    "url": "assets/js/127.7e716221.js",
    "revision": "4371511552dfff4b77a9dd10637d0111"
  },
  {
    "url": "assets/js/128.817df207.js",
    "revision": "06b7c4287189f1baa08b6a22fbc08df0"
  },
  {
    "url": "assets/js/129.7e725022.js",
    "revision": "4cf273e1395e37e73e455f940dc60864"
  },
  {
    "url": "assets/js/13.3da4b295.js",
    "revision": "ff5cc6dbddfd8e8329f01efec956a1d2"
  },
  {
    "url": "assets/js/130.b220f704.js",
    "revision": "3f7ce437e34c0a1ed13bb42e6fcf89b9"
  },
  {
    "url": "assets/js/131.2de59e19.js",
    "revision": "b5de6165d7e8fc8aedbc2c3c4b0f35a8"
  },
  {
    "url": "assets/js/132.06173240.js",
    "revision": "97eacd3e9064a9919d02ae33315a52ec"
  },
  {
    "url": "assets/js/133.360eb7bb.js",
    "revision": "344e737e023aa32db304fca7e57a6a91"
  },
  {
    "url": "assets/js/134.0bc8f530.js",
    "revision": "08d80efdaea09ef726263ca47ffae38b"
  },
  {
    "url": "assets/js/135.d1a87f2f.js",
    "revision": "e39c5e62b48df035a2334de5e81d5994"
  },
  {
    "url": "assets/js/136.f09f03a7.js",
    "revision": "c02b685e8b7ca27251750f6894e95487"
  },
  {
    "url": "assets/js/137.10b410f8.js",
    "revision": "04f07263e2006d577526ead58469e5d1"
  },
  {
    "url": "assets/js/138.7a042027.js",
    "revision": "57bf7adfb5e7fd2402ccb10ee66cb9bb"
  },
  {
    "url": "assets/js/139.c1f9f179.js",
    "revision": "30f8257ef3fc5b73b138059e27cc2c3b"
  },
  {
    "url": "assets/js/14.1cbb58a4.js",
    "revision": "2babba03a2984e03af15b1bddf87564c"
  },
  {
    "url": "assets/js/140.f9bca5c3.js",
    "revision": "3d9d6069eff8d4491af473ee18d92d38"
  },
  {
    "url": "assets/js/141.a1ba4905.js",
    "revision": "b91fe7964e7bb5348b79f01065728e83"
  },
  {
    "url": "assets/js/142.7f002d2d.js",
    "revision": "fb624a26f7c11750063d7cfe904f4ba7"
  },
  {
    "url": "assets/js/143.a655251e.js",
    "revision": "aa3e1c898eb32342ef4a510ddee83124"
  },
  {
    "url": "assets/js/144.209318fe.js",
    "revision": "8c9862b9cb3f1ad415b7a0c88bd5fdd8"
  },
  {
    "url": "assets/js/145.31799d3b.js",
    "revision": "ff7536a35a8bc22633d0cc96075f5d82"
  },
  {
    "url": "assets/js/146.37f3df9d.js",
    "revision": "2c409170b5f6e0560189f01ff11dde15"
  },
  {
    "url": "assets/js/147.a2648509.js",
    "revision": "26ae5ac2124faaf9cd6318b9517005fb"
  },
  {
    "url": "assets/js/148.4b501ed7.js",
    "revision": "f9cd98a89597d24e9c3cc0edfccc4469"
  },
  {
    "url": "assets/js/149.cb3ceb3e.js",
    "revision": "7a0053bca24681c5696eefc27512d991"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.485b2057.js",
    "revision": "1ebfe1fe30b1b875fe768e1bb7f462b1"
  },
  {
    "url": "assets/js/151.219ae2f7.js",
    "revision": "b4887873b86622ebd76e4d468c2d7034"
  },
  {
    "url": "assets/js/152.d793208f.js",
    "revision": "bff9e271a091c175f352642685ba7f0c"
  },
  {
    "url": "assets/js/153.8fd20731.js",
    "revision": "1b7a60526cf6c3a430110538e65ade37"
  },
  {
    "url": "assets/js/154.20bf6f7b.js",
    "revision": "ecb0d5744e6f60d02891f0f5b829e816"
  },
  {
    "url": "assets/js/155.80f3c3be.js",
    "revision": "172619fedb8f2b923e4e44923bd68901"
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
    "url": "assets/js/158.cdb9d330.js",
    "revision": "67d2b145458ef29e0b2ca5ba64c8c49b"
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
    "url": "assets/js/160.ea936b13.js",
    "revision": "349454e8d44af01f5457a8870cbc6ec4"
  },
  {
    "url": "assets/js/161.77db1fc2.js",
    "revision": "402cd893f267c9b5af8f5906fe3a59a8"
  },
  {
    "url": "assets/js/162.cf96be6c.js",
    "revision": "040d15c878501d0f4c0a33cdbf605e86"
  },
  {
    "url": "assets/js/163.09fef156.js",
    "revision": "4087995a10ef0b290ca045986d803c35"
  },
  {
    "url": "assets/js/164.128e9e11.js",
    "revision": "42f589fe187b16915768f6b3ff8e1c28"
  },
  {
    "url": "assets/js/165.9dbb161a.js",
    "revision": "fe314d8e98d402c6df9cb8cdd6408cb3"
  },
  {
    "url": "assets/js/166.d2e1db6a.js",
    "revision": "dd4726fe641e6dd057fc82942eada95a"
  },
  {
    "url": "assets/js/167.3fad4d1c.js",
    "revision": "ce317a96d147ade97ddcf380caee02eb"
  },
  {
    "url": "assets/js/168.19373adb.js",
    "revision": "4efb6660b059d139a755beca44e94936"
  },
  {
    "url": "assets/js/169.c3f44646.js",
    "revision": "811001ba2dc12c4432217f27689a32d3"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.a74bef61.js",
    "revision": "ff828b900eb9e0cf8bed6464356a693c"
  },
  {
    "url": "assets/js/171.33086d7c.js",
    "revision": "53ed5aa99486681688e70c15ee87de05"
  },
  {
    "url": "assets/js/172.a229c7c3.js",
    "revision": "f3517f26d0f7521f961f910eb586280a"
  },
  {
    "url": "assets/js/173.21109e67.js",
    "revision": "b7db98c52075fa765f871e4f22e129ef"
  },
  {
    "url": "assets/js/174.d23bd11a.js",
    "revision": "eae97453ac77ddc5f393018d91e53be4"
  },
  {
    "url": "assets/js/175.53b0da87.js",
    "revision": "52d5c3c8bbfb2b159c09e45a0c10846e"
  },
  {
    "url": "assets/js/176.e5822288.js",
    "revision": "82e0778c48cbdb6dc576de3f0a79e897"
  },
  {
    "url": "assets/js/177.65a96dd1.js",
    "revision": "029616ade4dd19d5af4fd7735fb8768f"
  },
  {
    "url": "assets/js/178.5945fe9c.js",
    "revision": "ebac3c4c2cc2f08a1832a694a3acfeda"
  },
  {
    "url": "assets/js/179.2b76c90e.js",
    "revision": "fb8cebbc421b5eee36b7b2af88b9e46f"
  },
  {
    "url": "assets/js/18.7b137de3.js",
    "revision": "754354beafefbf44e476ab39efdf51e6"
  },
  {
    "url": "assets/js/180.dd6ff9dd.js",
    "revision": "c5d401ed7993338a415970677f5a33c9"
  },
  {
    "url": "assets/js/181.7226aef0.js",
    "revision": "4342d31e01f385137a54d99e544bd765"
  },
  {
    "url": "assets/js/182.e8ac603c.js",
    "revision": "883fbd4334c8c6be9a8b39b2966e83bd"
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
    "url": "assets/js/185.c1aabc4f.js",
    "revision": "30931664ec1d9dd49aa1dd3cd6cb3175"
  },
  {
    "url": "assets/js/186.0a0c6723.js",
    "revision": "0602cbf56b2ed541a2ed88d9db9d1843"
  },
  {
    "url": "assets/js/187.843ae654.js",
    "revision": "a61b3afd2cbced8515b6983343655254"
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
    "url": "assets/js/190.fddbed12.js",
    "revision": "11ee8d70c3e48830d1d7cdd824ba0d12"
  },
  {
    "url": "assets/js/191.d8ba9279.js",
    "revision": "851639ff39b67600a86083805b43d6b7"
  },
  {
    "url": "assets/js/192.d26e8913.js",
    "revision": "04bc493a795ce31e95467f3c41fe6f70"
  },
  {
    "url": "assets/js/193.8011b88f.js",
    "revision": "75ab3acb5f51da4fd4f14a3eb767c04d"
  },
  {
    "url": "assets/js/194.9a6fb1ca.js",
    "revision": "4c3500ff0a56e37ff06e251dbb0efbd1"
  },
  {
    "url": "assets/js/195.51a80b76.js",
    "revision": "a5256671ef5217792574fd8a8545686d"
  },
  {
    "url": "assets/js/196.49c41eb1.js",
    "revision": "0447245466d80940406bc4b696b3b469"
  },
  {
    "url": "assets/js/197.35a19707.js",
    "revision": "399ff97c49812c0470fce9096e112270"
  },
  {
    "url": "assets/js/198.f43963f9.js",
    "revision": "46abd34ffc441469426ba79e4777a008"
  },
  {
    "url": "assets/js/199.f5f0a431.js",
    "revision": "838da6badf8e0cd08de4a64d92ddb7d5"
  },
  {
    "url": "assets/js/2.3b6b1f5c.js",
    "revision": "660aa01f55de14205f9f2d58f1532df8"
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
    "url": "assets/js/203.1a2538c0.js",
    "revision": "335cb5d969049c96f71010cdb6ba14f2"
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
    "url": "assets/js/206.9a8e9907.js",
    "revision": "48e77744075fc63ff2c096f8d01190cf"
  },
  {
    "url": "assets/js/207.39061d06.js",
    "revision": "d64eb2473cb0761996a23531af713a87"
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
    "url": "assets/js/25.4db0620b.js",
    "revision": "84f1bc8bee309d825f0ce3d3b1c54e7a"
  },
  {
    "url": "assets/js/26.1f19d5f2.js",
    "revision": "fbd784a13f00e55b7f8b1c2c04ff112f"
  },
  {
    "url": "assets/js/27.7531562d.js",
    "revision": "5ccaf91ba670e66f3ab779b3fb0b9d41"
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
    "url": "assets/js/31.90732a05.js",
    "revision": "4c6d37818827d973e9d0400a3e950a8f"
  },
  {
    "url": "assets/js/32.df2f4f50.js",
    "revision": "4dae79984e2f15d5ef9ed8842e814515"
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
    "url": "assets/js/35.91afe005.js",
    "revision": "88a48dcc4a061a59b0d03c6708b839c1"
  },
  {
    "url": "assets/js/36.eb48a076.js",
    "revision": "abed2f558fa0d82eff6db488cb6dacdb"
  },
  {
    "url": "assets/js/37.479f809b.js",
    "revision": "84f96dae0b32d6c989ad17a3b69989fe"
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
    "url": "assets/js/4.753e95bc.js",
    "revision": "99666e0539fc9e584f7022931c128f8a"
  },
  {
    "url": "assets/js/40.6870e565.js",
    "revision": "c730507001ac0490bea5e360924df588"
  },
  {
    "url": "assets/js/41.b95cc3e7.js",
    "revision": "4d54fdfd8e9c990fe0bfb2efc9846b7a"
  },
  {
    "url": "assets/js/42.7da817d5.js",
    "revision": "ce6c1b87500f465e7c0c5ac44efe5bad"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.373639b4.js",
    "revision": "07e5494b686520327c56e49840118a82"
  },
  {
    "url": "assets/js/45.46e0bc72.js",
    "revision": "891b689dff31e28fdde2b5ddc2101509"
  },
  {
    "url": "assets/js/46.bb6cdc1b.js",
    "revision": "50ab005c71c6bd036efd768667303ab9"
  },
  {
    "url": "assets/js/47.2f89f9f7.js",
    "revision": "2008b19d28a29179c845517cef942ab6"
  },
  {
    "url": "assets/js/48.47c1d808.js",
    "revision": "f7efec8812133400c60fb911984f5e6f"
  },
  {
    "url": "assets/js/49.84567ef8.js",
    "revision": "4113af1ca2e5882da42aeb409bb3dbf4"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.e08c0896.js",
    "revision": "cdd325a02ab7323f456f76d608c6ecef"
  },
  {
    "url": "assets/js/51.4859aef0.js",
    "revision": "efad4669a06be3ae3c7cf444873c4581"
  },
  {
    "url": "assets/js/52.cebda4d9.js",
    "revision": "91bd65ebf8715fcc9ddc4bda92ab8c7c"
  },
  {
    "url": "assets/js/53.9163cbdb.js",
    "revision": "01289cf3e77bd679760777f23a911274"
  },
  {
    "url": "assets/js/54.79306bdd.js",
    "revision": "4d4063c3092003e84992862a56241c17"
  },
  {
    "url": "assets/js/55.5e948bfb.js",
    "revision": "36d835da9253328242dcae141439c9a5"
  },
  {
    "url": "assets/js/56.55ac0318.js",
    "revision": "37e4b75c8ec722ae6da002995ced60ff"
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
    "url": "assets/js/59.3e13380d.js",
    "revision": "a3b18c56dead36284206aa87e362cad2"
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
    "url": "assets/js/62.9529d0c0.js",
    "revision": "cc2a5969481562902a15dca10b6cc927"
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
    "url": "assets/js/79.22b3505d.js",
    "revision": "63388a9612e53a498853a60b2c6d26e7"
  },
  {
    "url": "assets/js/8.84ff08af.js",
    "revision": "5298da8ee81d8525093ec9048b0e44c3"
  },
  {
    "url": "assets/js/80.10bd979f.js",
    "revision": "92f3861b2e153740ec7960fad8857499"
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
    "url": "assets/js/85.4b89b71c.js",
    "revision": "514880c08f23b4a265d90f7f394a7b91"
  },
  {
    "url": "assets/js/86.bc60fb4c.js",
    "revision": "553037ab17fe556d2c2e2658b1b670aa"
  },
  {
    "url": "assets/js/87.53d5630a.js",
    "revision": "726b6dea4318f780274876c861803446"
  },
  {
    "url": "assets/js/88.ae16e87e.js",
    "revision": "41130154e668ad393f60cfa31125a148"
  },
  {
    "url": "assets/js/89.27325a0b.js",
    "revision": "d7c64d25e94e36bd809aa2eb0cd32a80"
  },
  {
    "url": "assets/js/9.af9f3be3.js",
    "revision": "2d686e9dc537f05e57a25059545cbe08"
  },
  {
    "url": "assets/js/90.414d2bb4.js",
    "revision": "427ee81b9c1ad11891804a97d17a5f80"
  },
  {
    "url": "assets/js/91.22e71b7c.js",
    "revision": "339a926d6419161776f520d764899141"
  },
  {
    "url": "assets/js/92.de76435e.js",
    "revision": "49cba4dea28e77edf1478d7de02281b8"
  },
  {
    "url": "assets/js/93.045e30f7.js",
    "revision": "cb09ed0e1faf9525689fb1f0ef66ef28"
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
    "url": "assets/js/app.d8060ebb.js",
    "revision": "05634d7f69a4e0954861028e3e175dbf"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "cbe1f51bfa1323e2a0b255f18032936b"
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
