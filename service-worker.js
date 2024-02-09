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
    "revision": "689b6ff9ad71567813f25cb2c85aa48c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "520036567dd7e8e766764f9e8d7a588a"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "4eb5d42402bb3aa1e6db404f6c3c391d"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "524b61ab1f32e9525f5b899a9d2e19e4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f448660ccab0f8ac1e81ba543ed173ef"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "d7d2e15e4ce6aee79d95520ffb6ee209"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "5947cb34af2e600cafc6292735bc28a8"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "33ca01d04986a1de1b7f6f80e7b68ec4"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "2585618341b5f638619d7d00435c3075"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "ba5daf749f7ab95fb3aa19613ead9af8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "4318fe7990034e0043283fb4f2f25cca"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "5ff1c60420f7b3e0b1afe06cda297f00"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "8062711811befa1b0309b3d8c9ae81df"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "11b47ad70c95ad8e2e04efcd2dbea14c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "3d3ad318a3016d87ac775b4921c7e86e"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "4261ce00baa1fd5ef27d475510e03f40"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "a5b20bc9804ec64cad61db948ceb122d"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "bdb275fe38ac9f4e676816aa8b1768fd"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "82073cf53baa09fa1db8db062a634256"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "29aa6d56fd5df164ec2b90c7037a286e"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "779958632e71a25f84c80971c6c4163e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a9097a12ddf920fc4483f329dbe87809"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "40d7b65e60bc38c9afe0038fd8ee91d0"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "05a4a02fe003b17c01cc9663c29c6333"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "d13ae12397377566f588bb556c285a4f"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "cf978b172beea7015a90521e6b28408b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "85d32f3a5e81b52cc08bac9980302aed"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "6d50f89646523c34612a86513a19e6d5"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "7f9f24c156c38c432866a3140a0f4f31"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ff54a29eb63f96541395c9b45afdafe8"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "2946b14d0e94ed3097e911175aa83c1d"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "ef86777d76256c9c38b11ba1eea106a9"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "36f60018cae979420a78389aa7b70706"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "88a4a34c01167d66736c6753eb2c8d70"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "9c32a18e46dde634dc20e33c8ecfa1a8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "4ea2bc60c62536e05bfdb72fb2f2f983"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "7ff082b00f95d1e2d56a5375448904e1"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "7e82f2cfc59e42a5067e27f9a356e78f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "7cf3fac1967d035375ef29a0659ccd63"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "603f3bb1c2de0e503ca8869eacd5cf7b"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "7327fda4b4afd9d76ef760c0875d73e9"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2ce066a04e3dd6ff7512cecbc318c1b2"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "5827118dcb0cf9bf272281dcf6ca19e8"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "254184f3f69db4ded6dd15dcf779fe37"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "66844966b9fa4889b3fecc1d3acf9d1f"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "926c77095bc2a876f7380a1bfce1778c"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0e123a957864af14af10a71aa31b96d6"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "e28678df75c5015380a72c156188637f"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "e5ca1eb2279113c68890c8bc9332682d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "dfa3ce32f011d2dd808a4351a8b81557"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "1126a5a153c9c92611a83f922b235f49"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "01f2a91e9d47cb9801932ff1595a2bf0"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b1c35d83d5d47f5d1e89da6badc304be"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "dce8375056ac9759ef5eb028fb1b4500"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "434ff144cbd2cefaaf87cbb0d1fd6bc1"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "7c691150b2338e51cef01809fb1ef6ad"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "16f9847812548fa61c8dd3843d3d9d70"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b97d0b40dc540ddd020d161ced6f7f6b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "0f8896c464e5afa5648325cb8685cd6f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7e4966e4209707e4b73dc10434a6dd6d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "584a853ec2f0b11a7cfb6ca6f46fd637"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "dfd7d376d881ebb3cc73b16053eadafd"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "be9ac5fd0f207a4b812726938af37d0f"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3f29dcaa7033ac35abd3b1c5606f6a52"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "90573db2f5ae0b6d417cf0fe24550a31"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "eb3e43ed0824b4d94d13859d386efd52"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "04e385d4b2665bafd57d34c36d736975"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b534f218b56163908b011b30b4cadb20"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ef2c4d6a20660b6648b23fd88ab5fb95"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f47453c19821c7040c07de5300b1ad86"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3ae1de683bf7a13b2407ca1b9ce02f43"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "bfe3031b4d0a81b7d6ba9b34efa2217d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c1aed9d5518389916837e1eba970c3dc"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "35d5b53a6a1409484a41bdd899ada943"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ed38367f3f5a6f78234c5f5c6bf08350"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "aaed5dc2415147faa991baad5a7b6156"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "81caa185b4b97a3a043a9c484ba7811a"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "db11266efbc5fc14fa7ef5e77440450f"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5c8dc590ad09c2ad9a1b4d08b055cb74"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "1ae7a65bdea9b80857646d96c0325102"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c6577c806281e20a06f6ccd09de10385"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "438ac54f9063201f5e6359c2a212d871"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "03340cbcde70abe7a3a262a036ae7453"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "ac25abc5302071030b825e4cd6ed8337"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "db05fc2d2c90d666b4b60d10674d25fd"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5270fa1d724a36ff79a544520c9b9eb1"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "45e5d3e99499db582056642e290bbc9a"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "45a24755fb4787ac9cc8096c41828ca1"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "0795c04aa7346baa9817170e740059af"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "9dbad11877993d44b4b851598b142bfd"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "4573eee72a3534fe2edc9274320bd5a5"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f6c496d13712709fc2b4e2cc92bd16b1"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "017f71ffdd29dac016c6dfd474b3a8d3"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "e2f154889936deaa08100dfde2516113"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1703d980aff2199f347e3647bf827494"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a6b173b4fe941ff5575927213fd64c31"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3154a6d96f0dd87bfd6953fe2b5ef051"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "316f0c184d90204da43f444b5cb31200"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a3a1b5fb6412f241c60a74c6bc23a76a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "2873fd38bbc108d9d188e10eaf31fe4b"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ac7fe182e81ec4accb4d6e0f71ea0221"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "9216e1120ef73176ed03a401115aceec"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f9a4bb63b83a219c8841b6c030f031a3"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "18194b0d58c3e8399c7def0272ce1f21"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "8f6d51974e4f063de118eac276586fc0"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "fc9f1209f27b7f001ff885ba4d6a793a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "b3248e9688d7ee1a0eff371493cecb19"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "775b1f9fa9a0b0244e9553d90c5e2d51"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "7d6d5eddd6816947593f79b0a0bfc982"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "2201fb167708dd6d33f6442f8882307f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c2a6308804b16824a46b94b207c55518"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ec5e5bd7e9be7bcf6d5651ca60cc8046"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "ca37dff3a3ed8b650aa50bd00536efc2"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d886b40bbe0135154b588705228799f9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "de5e2329553710d32fba023418ef42c2"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c3e83953604589817027e2929ca89013"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "01f1253609ab44015e703b7872b457ff"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "dc7399731b47612023e109a61cda32d1"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "103aa2fbcfd02a0f501602311b1572c2"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "8897d63d35f04eade5a0376bcb429e92"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "6cb8c9922c5afa6430a9f9c1c3f576e5"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ef43c0edb419d41590a629a9bf161dec"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "45d5be8ad4954688082db28416a5d192"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "637a8dad6503d61b815f75f3d1ea4fae"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "704118fdad7b9b683ef9f5c1d87d1504"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "b27cc81d4c5fc944d2ed125ac53962bd"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "8008b35427374a4a6caa596649760f25"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "aa64157a72cc78c5bddde540daf0720e"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f3a6eae361affc51424c7ddc31fe1bf4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0c23adaa512c4025729f886f5ac1e935"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "2f37655d3fc6117260c5faea3413177a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "0b7dbee10a7d27fe4a3980252fb47920"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a5fd614c0a87a6c9e8761dd75027ad20"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "b1029e0cc34999adffda2d363c6727d4"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "136038070ad2fa28d8b0d0b2d26cfe2a"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "fc194c74827103bd77aa35cd3501f036"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "e536e34b836be89cb2d3764243239159"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "b24894041c6e15ce6584c84b69af1f6e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "862048eb72cfc60b94330862fa80423f"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "e8f59afc8076244a0099fa5e57dfe670"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f1c0ec7266324f0783b014038ab661f2"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3d503c5d595d71e4b2a9def2b885a919"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "dd3063be7e713dc7c3ea0e4d30bc8f42"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "90b96d287c90f64c035da80d56e7d7e4"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "66333654c136fb3816d2e2dd89356f4a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "987ad895a6626434af2163b713d05a05"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3e87ab7209913a2bcabf5dbe5776ea27"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "322524e725336f6f4bb5f76de6c805da"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "0e3fec1ffa6c3ec3989f81f0c1fd4c7f"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "7de72de1e0421957c773b6a663f329fc"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "e61040fecee63f349add82c6614457fe"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "169314398bb9b5da6b9a7cd29562a150"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b43ded779c10c92f8fe00a5b6f735cd4"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "43d65d02907beadbecf02a4c8bccb5e6"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "489d7669254232b5eae0c41f8654de32"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "f0cc1cbe12d754f9b2882abc5b334dc7"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "23bea93c1a4dbb45d521fce23b9a7407"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "37cc712a5cf14c924621443fb3bdecae"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "7783d3ec48c131eb236302160f223503"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "52258c5847dbc5b3b7822ed948166aea"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6547f93a32a81de07395ae257d4067bf"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "422338eeb858fc032b85039b3c376034"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "172ca7d7301df4d190d7ac7775b26d39"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "83b40b5e7c7b0567dac5e1f97013277f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "f2220f56cee594874e814be583b0e39b"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "c0e741a585903efc42d5a16fbaab3a68"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "e2bbd7ca1246da7d1f934a6f7c18fc43"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "4d00b62ffbebf0c37adb7fe6b69ba064"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "c842da319b75dab3ca6c2d64d2180bb7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "a003a0dde065c7a97ad110d1c1ecbd46"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7d19c26a9ada257af301a227c7deb30d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "72119c27604678f74d9f8832ba8f2363"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "cbf5e22a149d543decd08ea2e8ce0d05"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "db4eecb20cdd2f06bbffb2f92badd008"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "75c0e8a5fb023cb93fc137505774402c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "f5c51ce0fd0a4a62e8fa4b17b9651c17"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "edc1d7a3ad8b296fb1b1a4d25dba2907"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "9962328727ecdd17ea3c2d81073ae848"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "2ec9d6d6e9ed7c3590b19f0c6eb03b75"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "5b0bb375bfa1d95672372d9a85bc4fbe"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "b6fbbf5b16f1c12d67a687baca121896"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "779007a6e67aef8f89d5fdba27c44052"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "31d528e988be7f6c83991203a894d278"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "a95ba171cba54378e038e0926f1973d5"
  },
  {
    "url": "404.html",
    "revision": "6bf3e5218f2de1097cf7cfe3c0f76636"
  },
  {
    "url": "assets/css/0.styles.290b4c2a.css",
    "revision": "0280422672bda03460a71f496b67c6cc"
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
    "url": "assets/img/blog-package-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
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
    "url": "assets/js/10.28c9dc08.js",
    "revision": "02c6f1cde484482413709d120a6ab31e"
  },
  {
    "url": "assets/js/100.eb2c1958.js",
    "revision": "5632a8ad8bd0de51c3f4c373f7a0f6e0"
  },
  {
    "url": "assets/js/101.16a1b543.js",
    "revision": "bc557f90caa9d6c62bab7bdfe9f8b4f9"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.d5c22db8.js",
    "revision": "8f8af378fc731713a404675f499093ab"
  },
  {
    "url": "assets/js/104.6cc6e7fe.js",
    "revision": "d4c994eb29684220f00c91500fede588"
  },
  {
    "url": "assets/js/105.e7322bd3.js",
    "revision": "7c31e056772ffcb965a6301e2fd9c71d"
  },
  {
    "url": "assets/js/106.f771c04c.js",
    "revision": "2e17356c1b3f0a6e6604df316415f29d"
  },
  {
    "url": "assets/js/107.3e0f469a.js",
    "revision": "da09c14cedf19958dcec123dcbc64820"
  },
  {
    "url": "assets/js/108.1c939a42.js",
    "revision": "ca9052fc1dd2b6f336c7954ca5226171"
  },
  {
    "url": "assets/js/109.96dc203f.js",
    "revision": "5c36289321a8eaa04ac1e03fac95f361"
  },
  {
    "url": "assets/js/11.20ade292.js",
    "revision": "98b5e2581aec1e4ec24f589df47c90b7"
  },
  {
    "url": "assets/js/110.df1a5bf8.js",
    "revision": "f2e48977499f312cdfd2fc4c1fabac49"
  },
  {
    "url": "assets/js/111.63e378e0.js",
    "revision": "f5bdc7465e15ea8e6db8f4331babd477"
  },
  {
    "url": "assets/js/112.a372c066.js",
    "revision": "53c072599b2dd17abccbb344ae4b2d3e"
  },
  {
    "url": "assets/js/113.12a9299b.js",
    "revision": "042e30272e0294680ea623fae34c805c"
  },
  {
    "url": "assets/js/114.a5ea4b8e.js",
    "revision": "fad8dd048a68de2fe35b9f526754ee3a"
  },
  {
    "url": "assets/js/115.b8049be0.js",
    "revision": "c8e50c3aba561dde19ba948f6f8fb40e"
  },
  {
    "url": "assets/js/116.8bcc99b0.js",
    "revision": "b5652f033a50eb9efece9308189f75d0"
  },
  {
    "url": "assets/js/117.6de7d2f7.js",
    "revision": "2af15b952e111820c42bb584f92a9478"
  },
  {
    "url": "assets/js/118.7e782dc8.js",
    "revision": "e6a6daea3f0e62dfba33bde6f6ad0e2f"
  },
  {
    "url": "assets/js/119.581a3b38.js",
    "revision": "f57e931dcb4b53caff7d5de9741a24a6"
  },
  {
    "url": "assets/js/12.b060af13.js",
    "revision": "00e441de76f8353a44b74d3ed975e1e6"
  },
  {
    "url": "assets/js/120.48aea012.js",
    "revision": "4efb8ef24036a077cd975835226b2189"
  },
  {
    "url": "assets/js/121.97738e9c.js",
    "revision": "85cdb021eb9813f5e06de3ba3bab40cd"
  },
  {
    "url": "assets/js/122.699c0e63.js",
    "revision": "8009eb042e8c6fb37809fcfcc8efc273"
  },
  {
    "url": "assets/js/123.11b329c6.js",
    "revision": "8e343236efac74a4b61fa18b0a8faaad"
  },
  {
    "url": "assets/js/124.618d9e12.js",
    "revision": "ed664be3cfccfecdc78b1fbef24952c0"
  },
  {
    "url": "assets/js/125.404bb619.js",
    "revision": "c5766d3031017e51608724aa4915ab69"
  },
  {
    "url": "assets/js/126.89d57e0f.js",
    "revision": "8c25704fdb509d7599cf963707a536f1"
  },
  {
    "url": "assets/js/127.78dc0a6f.js",
    "revision": "043e97d42fab0e425b05a1ff8761bf7e"
  },
  {
    "url": "assets/js/128.83f7dce9.js",
    "revision": "67376e3b70c7bb53b26604c3bf68648a"
  },
  {
    "url": "assets/js/129.4dfd121f.js",
    "revision": "ef17714f7560cd8fc734fc73a3930aaa"
  },
  {
    "url": "assets/js/13.473d3459.js",
    "revision": "6867c5e79b5f670569a9553314887b2e"
  },
  {
    "url": "assets/js/130.48ab736c.js",
    "revision": "706b23747c9f4541e62319d631319d9c"
  },
  {
    "url": "assets/js/131.f109c021.js",
    "revision": "ac18dadf619c2638dbe6b3cd03b058b2"
  },
  {
    "url": "assets/js/132.c01acd44.js",
    "revision": "5e42ecdd7a158bb7d4271b4a382fd199"
  },
  {
    "url": "assets/js/133.fddf300c.js",
    "revision": "a54f3cb32144b4401ac39115935ee76c"
  },
  {
    "url": "assets/js/134.e9d55699.js",
    "revision": "7cfc96911dd89ba3ee194a688c8c5a27"
  },
  {
    "url": "assets/js/135.a5706e05.js",
    "revision": "ca52e201a4ae2547863c054ba564bcd5"
  },
  {
    "url": "assets/js/136.b5f0413d.js",
    "revision": "53debf6688a5f5e0df532c72c026e7b4"
  },
  {
    "url": "assets/js/137.187d0cc2.js",
    "revision": "c51c6267ffb594c6c360c2a7bb93d23a"
  },
  {
    "url": "assets/js/138.7a45da48.js",
    "revision": "f323380c3198976753b24f7bfa8fed88"
  },
  {
    "url": "assets/js/139.ce8ead6e.js",
    "revision": "5e687d85d0253a741daa5307545e58e7"
  },
  {
    "url": "assets/js/14.eee0f82f.js",
    "revision": "813d712fae54d014631b6f53fa1804e8"
  },
  {
    "url": "assets/js/140.42c47a27.js",
    "revision": "80f882e3064fce92a4310b9d9e6b981f"
  },
  {
    "url": "assets/js/141.960be897.js",
    "revision": "e212c6dc3999c8c0dc13aa71ca407a9f"
  },
  {
    "url": "assets/js/142.1f35e749.js",
    "revision": "beec901444f02de1ff363c1b32fa94cb"
  },
  {
    "url": "assets/js/143.c364bf9d.js",
    "revision": "2ea13d6c9264c9df2f1e1d36fa793ab0"
  },
  {
    "url": "assets/js/144.037aa3d2.js",
    "revision": "f721b3ff59d0e56d50f08c66de43c4c5"
  },
  {
    "url": "assets/js/145.45ff70c6.js",
    "revision": "812118556ae8715bdde6a2c8e4ee4ec5"
  },
  {
    "url": "assets/js/146.e93a954b.js",
    "revision": "cbe65d967312ca00ebfb138a00c59bc6"
  },
  {
    "url": "assets/js/147.b438b611.js",
    "revision": "7eb0b8fdad836923813cafbc0bba46d3"
  },
  {
    "url": "assets/js/148.eb915527.js",
    "revision": "a171bb3ff4ae31d57ee3a9fef41bce14"
  },
  {
    "url": "assets/js/149.dcce7006.js",
    "revision": "fc7e43f8a015fd5849488520e6956226"
  },
  {
    "url": "assets/js/15.a06eb435.js",
    "revision": "ec82093fdea2994accb459cc0d3f3bc4"
  },
  {
    "url": "assets/js/150.399614de.js",
    "revision": "a6d1dcbafb31af3e0c1cb22ce0dcd881"
  },
  {
    "url": "assets/js/151.b6e07312.js",
    "revision": "280789bcac964b26eaefbf1e08d13b58"
  },
  {
    "url": "assets/js/152.9da4400b.js",
    "revision": "fbc2469ab8519293ae572344ed62592b"
  },
  {
    "url": "assets/js/153.63f4f76d.js",
    "revision": "889ca17b91670aa9c077b61335a07a18"
  },
  {
    "url": "assets/js/154.b72c4115.js",
    "revision": "69118009e7c2943bcce7723a4bdcd8fd"
  },
  {
    "url": "assets/js/155.0c7022c7.js",
    "revision": "32f1705572acf6f16bda0abac6b97761"
  },
  {
    "url": "assets/js/156.eb87ad98.js",
    "revision": "54dd6ac1bd5a9ce1c1b76f6807269fe4"
  },
  {
    "url": "assets/js/157.33390d15.js",
    "revision": "0dbc0d703c502df9e989e3421c6f22e7"
  },
  {
    "url": "assets/js/158.53d7df97.js",
    "revision": "8b50636431f464bfb88eafc0f24ad153"
  },
  {
    "url": "assets/js/159.9e32fe12.js",
    "revision": "3fbb70962931bbe34695ce465901f117"
  },
  {
    "url": "assets/js/16.284ff7cb.js",
    "revision": "75cd19f3b9d471cac3f63edec075a04f"
  },
  {
    "url": "assets/js/160.cb259433.js",
    "revision": "1438a8a05f20894d64e78f81942849f0"
  },
  {
    "url": "assets/js/161.c51e4a53.js",
    "revision": "0f4bb6704f3860b6d3a4bb16202294ca"
  },
  {
    "url": "assets/js/162.22e0eeb6.js",
    "revision": "210d2816c8ca03af2c2fc75e5cdac018"
  },
  {
    "url": "assets/js/163.9651b3b9.js",
    "revision": "1670d054f70ab7700e452f3137b3a72c"
  },
  {
    "url": "assets/js/164.c5b02917.js",
    "revision": "c100061b2f370cda3bb27a4ef83cd0a9"
  },
  {
    "url": "assets/js/165.1793e292.js",
    "revision": "2d0b1f647209607e35764f8213afb4fc"
  },
  {
    "url": "assets/js/166.9f9c2cfd.js",
    "revision": "39687da9be90df2213fc41de645f6333"
  },
  {
    "url": "assets/js/167.3758468d.js",
    "revision": "6fd5bcf734a3ed730d26f782483b23db"
  },
  {
    "url": "assets/js/168.32ffaf48.js",
    "revision": "8032cb82631cf1a69d599003d7c702e8"
  },
  {
    "url": "assets/js/169.10362227.js",
    "revision": "fa9fa40656ed58a832adfffc1f702ab4"
  },
  {
    "url": "assets/js/17.8383d146.js",
    "revision": "26707e68fd20dcdf89f244e4617e77c7"
  },
  {
    "url": "assets/js/170.2f6fcdf7.js",
    "revision": "efc12bf749e0a404c035ddda191cb23c"
  },
  {
    "url": "assets/js/171.844a841a.js",
    "revision": "2eaccf6c6bbcd555d395241fb77e4a59"
  },
  {
    "url": "assets/js/172.7881ab38.js",
    "revision": "43b4dae86145a34d44d53ef151a4cade"
  },
  {
    "url": "assets/js/173.6b0a8be5.js",
    "revision": "d894c90c70b5d8f94728b270bd6c9f7a"
  },
  {
    "url": "assets/js/174.ec0eeb68.js",
    "revision": "060925870c5eb859f46adc839494f7ef"
  },
  {
    "url": "assets/js/175.c5b83f0e.js",
    "revision": "2155dde2a91cf295e4af6a88b822c481"
  },
  {
    "url": "assets/js/176.b5a67573.js",
    "revision": "d951262934f92201f2f437f89b411842"
  },
  {
    "url": "assets/js/177.a3adca21.js",
    "revision": "78914d8e6b09329590ad115b541d8f59"
  },
  {
    "url": "assets/js/178.69d67c1b.js",
    "revision": "ea8b1acd146e368b053fc0c41351222d"
  },
  {
    "url": "assets/js/179.342bc359.js",
    "revision": "26a672bc76789d687bc31f7539c9e7e6"
  },
  {
    "url": "assets/js/18.95cb0bfd.js",
    "revision": "352659e6a84f0a34c1783ac78ae272c8"
  },
  {
    "url": "assets/js/180.a0f1c96d.js",
    "revision": "b77cb6464da65405b2bc334ba0f20ada"
  },
  {
    "url": "assets/js/181.8fd65e21.js",
    "revision": "e3e5fc52117d9e47234cb485326e2524"
  },
  {
    "url": "assets/js/182.eb41822d.js",
    "revision": "63bb905d562721fccb79994d5e0c7860"
  },
  {
    "url": "assets/js/183.0c6d640d.js",
    "revision": "0946198b483547126e9eccd8beef23c7"
  },
  {
    "url": "assets/js/184.61a40b63.js",
    "revision": "829ea5134d507aa43ceb5bb2efebf2c5"
  },
  {
    "url": "assets/js/185.678f7fea.js",
    "revision": "994ce74c77d2937a9757f3160c2e90c7"
  },
  {
    "url": "assets/js/186.0c016162.js",
    "revision": "7f482b7b79ff59802d7649aa3a7ccd9d"
  },
  {
    "url": "assets/js/187.8024956c.js",
    "revision": "67bb733277dc2fcb352c60cb59239128"
  },
  {
    "url": "assets/js/188.2f85b452.js",
    "revision": "5d33ccf06e59145279314ff31f31eb19"
  },
  {
    "url": "assets/js/189.3f0f3736.js",
    "revision": "0c29ce5b95546a2bd876d3ac021072ea"
  },
  {
    "url": "assets/js/19.bab986c3.js",
    "revision": "6adfd69952c3f8c838437dd6e33686c5"
  },
  {
    "url": "assets/js/190.9e17a0a5.js",
    "revision": "e22a7b6667c5939d8f867a5acfe044d2"
  },
  {
    "url": "assets/js/2.93fdda48.js",
    "revision": "c3f8636516f88f7fd1ccb93e0e155ba9"
  },
  {
    "url": "assets/js/20.cfbc8ba4.js",
    "revision": "6b95f8833e7fcb5e887ba9cad3384aef"
  },
  {
    "url": "assets/js/21.8656a1bf.js",
    "revision": "7bae44c6068da927f3b579af47ee7818"
  },
  {
    "url": "assets/js/22.2d8a2846.js",
    "revision": "6624987b6729dfe0209c403e62aeebf9"
  },
  {
    "url": "assets/js/23.47dfb6dc.js",
    "revision": "d17c9be520b5d51fac9605dd893ffe4b"
  },
  {
    "url": "assets/js/24.ef2019a3.js",
    "revision": "4b59320fc3b26006162383164da930f7"
  },
  {
    "url": "assets/js/25.471a97bd.js",
    "revision": "7d37b03ad40abc9f01f0b8ebff3aaba1"
  },
  {
    "url": "assets/js/26.8995ef0f.js",
    "revision": "126165c2308bb78c1cdfdd33028bda8a"
  },
  {
    "url": "assets/js/27.068dfbd6.js",
    "revision": "dad7ca5120126b0accf212ab0f8216e6"
  },
  {
    "url": "assets/js/28.abb92af0.js",
    "revision": "a88609c1777e1f20ff53b8c8f46f097c"
  },
  {
    "url": "assets/js/29.6b4faedc.js",
    "revision": "a3ffdddcd1eb97f9e289e596f65a063d"
  },
  {
    "url": "assets/js/3.a702b1f7.js",
    "revision": "7c616d9b8c96c2cf4fb59f9c2b016552"
  },
  {
    "url": "assets/js/30.a35ba7c0.js",
    "revision": "3d44b06fc34b7872b6325f169bb00a02"
  },
  {
    "url": "assets/js/31.6bafa40c.js",
    "revision": "6b73d0dbcc0d0a7bab0083f711923bfc"
  },
  {
    "url": "assets/js/32.461384bd.js",
    "revision": "7af6b4ba8e8b24b22a67e865f8e48e60"
  },
  {
    "url": "assets/js/33.add459e8.js",
    "revision": "8b4795591357c27a8064a8ba1024c3fb"
  },
  {
    "url": "assets/js/34.622333d5.js",
    "revision": "c01f9d98fe536354dd86259e6d9c6017"
  },
  {
    "url": "assets/js/35.e67fab1e.js",
    "revision": "d19868784f0b9762b4fd945d4825cdfe"
  },
  {
    "url": "assets/js/36.732a0ff1.js",
    "revision": "34a465a570bb46f3382a20a01f15f6b3"
  },
  {
    "url": "assets/js/37.bae32341.js",
    "revision": "84a1a094cd88fb731574ed36d387d34c"
  },
  {
    "url": "assets/js/38.8506db21.js",
    "revision": "acbee997224cac9453685246152b17f7"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.38834f61.js",
    "revision": "7939b3d8fbcc0a2969510709e0311b1e"
  },
  {
    "url": "assets/js/40.4b7eb587.js",
    "revision": "42a693b468c987bb6061c5d71d6f85b9"
  },
  {
    "url": "assets/js/41.b0e72f76.js",
    "revision": "086be5c5813f8aefde22984ebed4da53"
  },
  {
    "url": "assets/js/42.1b5951b2.js",
    "revision": "2c326cdad495d57f89a302270dcb17fb"
  },
  {
    "url": "assets/js/43.4392c6dc.js",
    "revision": "24a0dc5aea874060dd806558b7ea82de"
  },
  {
    "url": "assets/js/44.c23ac79f.js",
    "revision": "cfdf6e508f5bad504b108d7dd47d7e82"
  },
  {
    "url": "assets/js/45.431fe3dc.js",
    "revision": "da4c99236b4c19b6df335b38da1d10a2"
  },
  {
    "url": "assets/js/46.fa442179.js",
    "revision": "af01b490ea001091cf89bd6fb814e2c4"
  },
  {
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.0a64f85a.js",
    "revision": "7a01576ff990b833601f9bf65c210080"
  },
  {
    "url": "assets/js/49.2ae1094d.js",
    "revision": "395bf88b39988684804a3b49da895c6f"
  },
  {
    "url": "assets/js/5.86320dc3.js",
    "revision": "df84453af4cd762516ac25f104886820"
  },
  {
    "url": "assets/js/50.0a203e95.js",
    "revision": "2ca17ff84befe01bc7118a1e9efd6c51"
  },
  {
    "url": "assets/js/51.ff76aed3.js",
    "revision": "67657181b1aeada49a5eff97e19d6857"
  },
  {
    "url": "assets/js/52.d2b2f9e2.js",
    "revision": "f156d7423a86f482e0807e8632ce7fd0"
  },
  {
    "url": "assets/js/53.64753fc1.js",
    "revision": "e7a7dd396291e38899cb16b1d41541e4"
  },
  {
    "url": "assets/js/54.ad3bee3f.js",
    "revision": "dea66e8c745f628dd43d8893d2b84ae2"
  },
  {
    "url": "assets/js/55.c4c2dca2.js",
    "revision": "27a06f066e236b04b31f0e26dba82871"
  },
  {
    "url": "assets/js/56.9b6579a1.js",
    "revision": "bf0149d062b0c6db15ab5bc61a0a4f0c"
  },
  {
    "url": "assets/js/57.eb8d1dc7.js",
    "revision": "f7592fc03ea8096e8e6888ded66181bf"
  },
  {
    "url": "assets/js/58.d22e663e.js",
    "revision": "aa7acebf4fa9775575c22a4caca76763"
  },
  {
    "url": "assets/js/59.aa698d8a.js",
    "revision": "7f39f5cf175ff3135562b8c1a4878e2a"
  },
  {
    "url": "assets/js/6.e1f16817.js",
    "revision": "12088f89dc3116f8ca4b480141e689f1"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.9270cfb3.js",
    "revision": "600f9fd7ba939193d3c22f6b1021c64d"
  },
  {
    "url": "assets/js/62.f81a3129.js",
    "revision": "d3d6d6f3a46c96289b0ae0dc187005ab"
  },
  {
    "url": "assets/js/63.eba1d03f.js",
    "revision": "c6a7a18a7b59602bab04203d0464015d"
  },
  {
    "url": "assets/js/64.ca854f77.js",
    "revision": "5eb350861c7ce378545c381046eeb833"
  },
  {
    "url": "assets/js/65.4fcd9107.js",
    "revision": "bd8a0fe4eceddc96fc73fc94c5bc6160"
  },
  {
    "url": "assets/js/66.72c63692.js",
    "revision": "c134348ff922b102a87e942daf89d2b3"
  },
  {
    "url": "assets/js/67.c28fc234.js",
    "revision": "1376c508fa50e050c62b8e407aa34aae"
  },
  {
    "url": "assets/js/68.0bcab92d.js",
    "revision": "4ff1f634371fde6db31de4ec5ad0154f"
  },
  {
    "url": "assets/js/69.2954c71a.js",
    "revision": "193ea5633e8a9ce3437b0b144875eacd"
  },
  {
    "url": "assets/js/7.f5b04767.js",
    "revision": "d48b9d35e99d9ba4b4b2ae490fa5401d"
  },
  {
    "url": "assets/js/70.c79dfc8b.js",
    "revision": "6582b0275c1cc33c4f3e8b9880da9bdb"
  },
  {
    "url": "assets/js/71.33b8561a.js",
    "revision": "05ff1bd2220ce2e220579dd4bb663984"
  },
  {
    "url": "assets/js/72.296ffed0.js",
    "revision": "328a5f9d20c725c50587ba3c233e83bd"
  },
  {
    "url": "assets/js/73.bad78f45.js",
    "revision": "99c6d6da986e313c36d7361c254b1401"
  },
  {
    "url": "assets/js/74.95258a5e.js",
    "revision": "13d4a1c21f2c9b8c0e92de543cca4006"
  },
  {
    "url": "assets/js/75.f7c1b039.js",
    "revision": "1ca3a48940a0f95473540b606ba419b7"
  },
  {
    "url": "assets/js/76.b9a639d6.js",
    "revision": "d6a23fc54e649882bf72eb9249782e81"
  },
  {
    "url": "assets/js/77.9f56a594.js",
    "revision": "6bbb0269620540ee2e54d807f8cec2ee"
  },
  {
    "url": "assets/js/78.a05911ba.js",
    "revision": "56e473fd361c8f35c3ef6c5d6e4e8aa5"
  },
  {
    "url": "assets/js/79.2d4f0d2d.js",
    "revision": "2592187319b668d14bf461ae72036255"
  },
  {
    "url": "assets/js/8.994694d1.js",
    "revision": "a99ead99f2da1d19b7694b80579b404a"
  },
  {
    "url": "assets/js/80.a2262882.js",
    "revision": "02ee5046abad426f2220539d4f602835"
  },
  {
    "url": "assets/js/81.eb6d17a0.js",
    "revision": "b6351dc6e7c87ec814f2d3174756ba3f"
  },
  {
    "url": "assets/js/82.74d827ef.js",
    "revision": "58f8016c0ba22ef8dd5ab9da91b296a3"
  },
  {
    "url": "assets/js/83.f2a5923f.js",
    "revision": "974c678530df9e8a25faf0c77f925b23"
  },
  {
    "url": "assets/js/84.ca00eeb7.js",
    "revision": "7f027ce9238f371106daab5868ef680a"
  },
  {
    "url": "assets/js/85.dcadbd7a.js",
    "revision": "e58477c6bd523af46f756c65bfe2f8a9"
  },
  {
    "url": "assets/js/86.4bdc47e4.js",
    "revision": "78f60f1cb0048edb538845f735bca4a2"
  },
  {
    "url": "assets/js/87.03db2424.js",
    "revision": "534966799d5fa21406229740de529263"
  },
  {
    "url": "assets/js/88.e29f0064.js",
    "revision": "d4618ecc4fe7c41f435b79672eec419d"
  },
  {
    "url": "assets/js/89.3001768a.js",
    "revision": "998e2c1ab886d39977f26c95ab7ba8e1"
  },
  {
    "url": "assets/js/9.1ddd5114.js",
    "revision": "7ba5c134a8f3626631f0db8852f97fa4"
  },
  {
    "url": "assets/js/90.df553b89.js",
    "revision": "02f987ec66c0af27b9e0c0e4c7098975"
  },
  {
    "url": "assets/js/91.0b139999.js",
    "revision": "1f3c4f1fb452ce824e092573fa6c575d"
  },
  {
    "url": "assets/js/92.1b9fdab2.js",
    "revision": "7ac18c6538503938c083b62f7b767621"
  },
  {
    "url": "assets/js/93.29065bc3.js",
    "revision": "3f234cb50186162fbd2fe76fa1de41cb"
  },
  {
    "url": "assets/js/94.044c3ab0.js",
    "revision": "a3d0cf740f3b337614b19ceb9bb08561"
  },
  {
    "url": "assets/js/95.9f68f12c.js",
    "revision": "bf6d5195b23c7240edaba269d5962bb9"
  },
  {
    "url": "assets/js/96.7cc9caf1.js",
    "revision": "1f367e3eb79f89fb86e5faf31d1a4ee4"
  },
  {
    "url": "assets/js/97.c45317b4.js",
    "revision": "95921ca6afa7104e4d09d474013150a7"
  },
  {
    "url": "assets/js/98.9b8046ce.js",
    "revision": "7e3e71299456ba8a0fe5723f60041403"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.6a5b05e7.js",
    "revision": "955077b85fdc271f9b2691485791e3d6"
  },
  {
    "url": "index.html",
    "revision": "7e992166c82294e147b1feb1bd660309"
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
