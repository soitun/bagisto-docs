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
    "revision": "8b81ef63b960abf1999dbb0f4dd209d3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "8195e026486364aaaf8c3a3495edfd64"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "175a8eb14713520cdfdaafdbc6685a29"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "6d1af405af2b8f18c9913239d5bb2117"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "6ee115db6c732307e9e463423abf64b9"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "6780863ae93f5377d092f308bde2324b"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "ad2dcd29de8715e53e7d8cce34bcb5c0"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "92916f06fda353f6cb415b8244617258"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "ec3f9b9b638ea370a82df371b10bbf86"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5f164f92f2bf11f49314d7749bfeecb8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "28a1b70c1fb51d57c7a4aed0c77bf907"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c73a6e0c6c6caccdf0ba5177db1031cd"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "6e3793c765ebef3a78a0d642015c16e8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "fd615bd9b107d75c279cddcc34d531c0"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "2d0f610c3cbbd50dc456fce14d96c01a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "6c8973bb1e0db3545d05494ef9bafbd0"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "37ee6742ddb190cad583d8dfa832f1a0"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f273b9a013d5dd06e9658f988d2b812e"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a37a50b50626428687b9b1f2586949f6"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "49e0303d6eec6fdb35e5c9e8488f37ff"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "82a6c53b7a1473f3cf13d6df77d6e015"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "8d3fca1d3bf24f9bb4d5d0c2256ff7fd"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "df5fc770b3a2b6c2314cc79d3a67a02e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "262dc32aba4045d04233b3505ca4aa0e"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "5e6684c489b6a9d49037880eb0b33cc7"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "2e8375c1802a4ad822290221e8e26064"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "addd58b904694f2e2452a9751924d2ce"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "758cf47d7060949aaa2824f92e6a1bf5"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "6484092d6c57b63e9d4cc38a3a53b54d"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "fd3f1e00fb6682036b4b1ee680d3f38d"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "57a6a67688328fd617bda5adf125a021"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e3e8c1d3f2a8e46b7b19860eed40d2b5"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1bea11c5d17438dc0343f0204874b420"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "6c45c3b4896acc2e24e22adccc5a0ecc"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a82a9589ad214f7931ce46012bc29205"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "86db8af4984ccd06775feeb611d29add"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "2530bf703a4d9e70291b66a44c5b9fba"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "2ece274b9d8722fde49daead026fad6b"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "a0109b0d0e214ddf07173508f849f809"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "b88295c7cc50f7f092eb925f8ceae31e"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "79c8d9e700b7793c523d5f0b48d61194"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "aff251657f1047821d985e3051813ada"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "ba78a5002d907a4d7c46d30e03e152cd"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "dc64dd592095473e7e9a7e75f1338631"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "65c39494fc7839f09ee078748f8798c3"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f3aa3573541642dd609269f54af9e541"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "62d907e38722e04b8a757da32b33dd8a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "2c115be1f5eba5eadc3106c4bfcac7dd"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "e6d59e5a085a279f01b358a8207a15e4"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "5376bde8f6bf8e0743c4360772243c23"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "275ea3d2918d2be461dcac3cb3f502ef"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "8be21c3fc95d66edfbdd8afa005c0212"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "0dc526e63898d5170563ec68f323f3de"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "913b69fd577e0d9200f0e2d0265dcd64"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d429ed6d4e16234161a54f900e2646b3"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "5672235d728f98cf1aaa2d8aaea2e727"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "cee5bb714593e1aa0a98e609b6ad6eca"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "df81802c382ed64a54aa8b1901e06eaa"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "0750988e90c3e66cda2975b911920a3e"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "20fa6a63b27601c14a57b8f57c65fe98"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "ccaa2fbcc6ba15109f04240d2c61ef95"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "72090c42637b4353b1a4ac38ba51b685"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "0020d5d3e3252e0ea48e4b7a90ef4eb2"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3bc9ee142429b4a0597e4580eb8eb959"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "30d2cdc843d93dfe2c4a01ab1a3b8535"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "80406cac15209a6e192360f5d49d84d8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "d95beac2ce196f483dbb7a7a18b0026b"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "43c1c1d4c50d4b483e6acc3c0a14da6f"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c7054a57180ab00e0ae3432b44234157"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1ecb68ad9980afe80ba0c1ad8f9943eb"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c1ebb0674d3c4f5c702a21bc79484c29"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c5726ed6a3833bdfc6b41ddd397e336f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "901bd440e578b895c6468f7938eb1e86"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "bd2ce12f50b4d645e7848419e6a55f6a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "17bef124b0263d754fbb2e1a53bcaca1"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6f1d9d7775d7e96a4ce18782f1b06777"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "bea1f150e31d61596eac62e3474efeb3"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "57d453a6f43ff3abb3f5949dc040c2a9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "afe28230b2f12e6b21b6f020f5aa2ae2"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "0bd12825a93d9e2c60ad95fedfb8b19b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "7c13f5c5aa4d99dad3ba224db354001b"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "2c5814de8552e0b6d76fb277fc03c370"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "148c68125d284e6357c6f7d0590a9c63"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "98bc846b47962eab3a9bbcf12a7411e6"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "95e709f91a4c9d384788e41c07468bc9"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "1fe6380409ea73e301dfce18ac1aba27"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "614cf3f23fb65bbe27502806ee298fe3"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6454a74dbf92e107e75e688b08b87ad9"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "aaf8a39a82955fc4ec986a3c1d4e9444"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5bb76f76f4b14c6b18813a08b5fb323e"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "88bff7224aa67e2887cc4fc80a1ceb9f"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "57ac81e807203cabe1edf3d65552fdb3"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "125adad2cf96fca5f71657767693f99e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "e81556ba0d8feeddff460b8d62bfef08"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "2d4baa08d44ed3e4743c6dbaaa648c51"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "c7c5cb144a35dcc3c60dc6c47bd20d25"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ce43e220268c52bde49574223bf12d97"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "34799a8878bdae63a720e47b4e5e21be"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "45a12e2168a2447213d4f87f1b2174f8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8ded0da8ed922d0f06eaef583b77a4bd"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "921dfaefe7a5606df1c690c38aae5aca"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "93cdc14ca1175a94feeabca1b417e463"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "7dadb37f4684bcf5c6a3dd2d9dc89308"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "621a7c0a82aaa61a4e1049c5c8d3c0eb"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ef75f7b2b433f8fca9063f5e906a6fd2"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "85efe0ebe0bda7e3962829dcb2ba4fe8"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8b1a3f402e4662ad2a78ceeb6f207221"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "61590aa55f2513823308c878df47c35f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "6e4dac2b57252a5fb99aa80afe7afa70"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1e41d46224155d7b40de1a67b7a2d2cc"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "6cbb28dae257df4156093aaa46eba724"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "bde8115579a2f1e2badbe8e41b176d11"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b6ad25301554c02e0f7c90d9f3610b15"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4241f3276842ad2aa90a9c599388ebad"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "14833bc5f01f6dc97c29b56f97483bca"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "fe0690529d04d4a5f69446acecca5a46"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e73dd9183383b7afb9d7c3b6bfe3f341"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0d60276bb6bce04d9111aaa049bf7a2b"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a96352bc6d11007d08f7b7c0a3b30de6"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "97ba2d97755705d08c07a4486624769b"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "a4d67889dc8c5218780e51b05101d944"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ba88526423a983aa27c1b4c014206cea"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "56cb8df3aa1a0539c64854a0b2a73486"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0aa6be7c1959ed63e4b7c1d8468a2ab5"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "791c0ffdb87adcf1ed34b3b32433409b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "ed94f4f02ba70c2f994f09438ea4910b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "d0365756f92995f7e51395f8abdef194"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "77db69051b2e2be8b6b1dfcdbdd8d7a7"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "e08e8b88e0709605b6b06bd31a361db7"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "23a62c8558de194ccf65396f36c26339"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "87e21e0feb4b12f0a97451b5082450e1"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "feb20c4a2d1e2e6f45afbd2563e6a534"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "24bc08eb2176bf7c412eaf466d24eef3"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "aea2579fe345ec06d75186c535bec392"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "69ee8037f97195ca034f764ca8fead14"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "f48fb0987476a73409637dde13177f26"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "4e15c9c734e49c0c4f065bc7f46db642"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "fc3525d18a361a2d4b43c2be2df80074"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "cded0a314233d4b5bd08d0ceebff4716"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "5256e08aed840c7097bc8a58da6cde4b"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "2572f2633dc6fb9696908bf11ccc3815"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6ee1022efedbca6983c4c61c050ee765"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "f77f0bebf28e7fbe48666ed93cde8edb"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "864efcafd534040c6f9d178890b599e7"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "043342e03680f76aabb3e0808a96779e"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8ab99730b3270072dcf9758b1a5f9f07"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "de22c4b1553c266e633a14f0562c94d8"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "df11c388e7526c4e570595c24b1a473b"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "fe5f0f2a4608b5049c3db6ce75d7399d"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "3196ff37e69273e0d025c169d70741d1"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c65e90f701f3155b8057272b85bdb31f"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "c985026f76ae4f7e48798773435a6ee3"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "cdc443eac567a046c1ebdacc45a84186"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "2c870b5dda50c19fa4d950e3e7b3a09c"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "9d4f440e07999e3e2ec146f70eb9a045"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "7f7b113fc91ad5c5fe7d88b40f53a72e"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "e3186368fb2d2904ab82c1b3e38ba0df"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "8e4595c32c8f936c96fc8c3bd022a04f"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "21c47d7c17039fd6a96fb28e0d29f68b"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "1ba100bbdc552793fe9ea0678d651e99"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "15770710165802634b29805dfeb3bc40"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "79b87d9d9e79f4c4e4fef10ad46332d8"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "0f6b79a1a642070ced194a20def23862"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "def37a2d11224ed4bac291ded9ce351d"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "c523d15327a5a775d2fa02c2fa923775"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "f882cf1df1fb7afb1fe3410415494a1d"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "8c74f0efc1c4d01587e2dfe4a0543916"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "fedf1b8d303eac3b43333d35a0aa7de0"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "795202b543b5cdc83ece71cedc052db2"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "9c4f7a3429583a6d74791974d265c954"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "53cbfcdb395c2e4685df5a4040caaeed"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "d87bf4730a1189870505c3bc58bbe8e9"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "a193c0ff61a5c12b2d94cced29da91bd"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "2c558947daf8daed75ebc20b4a4a53ec"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "1af33ef0e970a28e9829dd7679c63923"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "f2956b69884d95ff204211c0106e1dd9"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "f8aadfab6a286e5675fcce16b5a47531"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6e109ec06a7e8361517adcdedda88fa0"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "ceaa74ca323568ec00a0aca14ea9dace"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "55880fe1850dadf13e440cfcce95e4d1"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "0360b06ff687f4cfbc74919d278c999a"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "d1881dacf905a68ecc12ffe2a41f7e4a"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "0a5ea0962cafaa26c2334da68ba739cd"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "24d92a384b6640985786fd50267c6ba7"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "d77a0fbb0b60c030bed0887b49e547e2"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "5347fad181db21b496d3b51de4ea6333"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "b5f974a4526660a28280e44bd4f40bc1"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "5e23e2d024dc2b018346bb5aaf4d5ee7"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "ede1a5e60209186e80cd76d1a99d0734"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "c2371367c925c0a2e7a1e90fa0b8c678"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c303aad973fecb5af586044211e067d7"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "7cbfd0044d964088dcb349a545fe0b63"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "58a3fe9f9d0158d753897ac0b184550f"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "cd7dfec9bc8e316bb87a7c77a09ec5fb"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "0363b6cc07c7c1c6fae208d61c4c1920"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "80ac0cabedf28514cc9603791f94aeee"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "aff153bec858570c37075806acd1a197"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "6087c94789438ef927da5c81bbea6eed"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "e7b6dcd6c280d7dc1a17f07e29a047dc"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "759606dbfdff6195ffc55e71e34c131e"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "07e3cfe0c819b4df53a387ff113d6cfe"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "1f54730c8bee415be6d052cc4373b22d"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "71cdd7adeb5928742407e153f2ccf36a"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "584649882a504027c9886802a90f9dfe"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "4c09979afe93b0068e450a3aace0e798"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "36e07d4c5e0331c54470b98f5bcf20ec"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "75a247c409cfcb4845b5a0f983a40a7a"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "86201b6b64e52aa24bd5b1b8ca278409"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "4586ac6a44f04712889f83453a0765f7"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "f6decb9565af5a4eafb704d7aec6468b"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "001fc64dd2ad63dcd7b112afc46a9e88"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "3c615406e6219351cf4d821aa2afcc6a"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "18aaaedfd1afbf1b6340c2550e6beec9"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "46a038452d0ef5025058dbbfd791ec8a"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "5150ab6186534d6aab5fa5b0b03c8606"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "f4cd492cbe2a6be196fe6069f1c8a748"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "240bc2ed620db558b06b83da2ffcf55f"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "d58b83847cbd90358a5e51779d54986c"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "6600a3d79d448adfe94be3e709bc00a2"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "925c83ce756216d6a411bb662688067b"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "650cdb7305bac699e0103cc8cabec5a0"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "f1f6b475a196eaa91247165d725b2650"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "4190ce0d346bb4f2063eb911401be2cb"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "13ef8ea89ed5f352f28d1094bf770cb0"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "c0ecbec936504380a3df13fe34f91894"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "bce91aa2ba51452abdebba636fed6bd1"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "46fb4a51d7dd2abbc14ba6af11ed4c2e"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "ca9b6041e6d2c4e82f3d0b49326d80d0"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "d509765aecfd039da3e063c9f0b6ad91"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "af38f2836083d1472260c28c6235659e"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "8de0573432e0ebc7a71be2539538c8bd"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "868cd7bcad0e92cb11c42d0eda12c3a5"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "9bf4b57e58505741f4c557f3a3c6d37d"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "3680725e56789c961aa7a5f48c3aa703"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "261edfbcedffb060002224c2ea8fabe5"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "b06829a4f6b0b53db0b084ea667fa511"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "98bae788d8b4779c85d088db4eb47088"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "1817297da0d880a64eb28c57c4ca9ef0"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "72baa9d9401d885b57494e28a487ec07"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b58784c9c8faff25e9f67f4c4bc3c3a1"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "952a74410068b6b6296cafd1a1f8798f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "7a8002445c16ca13414c2f53f9fb51bc"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cd4d6c767d163e2c36ce5fdfad3467be"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "760da125012d600f8ddde2fef973da1e"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "899d8e7e9f96f11ba13eae7c507214b9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "f31c8458b19662c68a439ba27918e35e"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "90b5430040353557624cf6c1b97cac83"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "c243678cdd611861dd46bf06b0cfa71e"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "602935514cccc0ac071b296e8f06c568"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "3b1831b817a861f80adbce34fba7e535"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "6eb6aa52a8de47f8ac754e4d521c75b8"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "2e389320185ab9ba69a8a410c9c4fbdc"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "ce5f36add4991fe6142de34e6fb4124d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a20b36c9481e067c17732bb1e4e5559a"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "31112ca3c18c4d650f1c5d3e929b0260"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "29793f96ce099906c9ee28fb894db6a1"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "933f1f381a09f2efcf4eee639ddb4805"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "fc9470c5f1e2361c99553d2918e8b4b5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "ea067767a8f9e5b5fa7785ebed9ba558"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "126ace4a61b181790e84c36b694e0d1a"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "984bbba35a416440968d905fa189e63d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "a019c4b0d33f7beafd81aaa34023ee08"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "7bcccc925b67cb898cabeae37066fccd"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e7d35a9140593a4c12b0d14aebb43d8c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "ef2990615442fab0fc9dfac921e3d807"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "02f832129aaf78b82998acb2d0a2f3d6"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "4acace7efe2ac678e9bf179bdf708bab"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "59c7c1828b08bbb62cdc7503635aba99"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "204c16c40c1b1ba16e1e97e7f08a55d2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "3fbf19de9ae6db79f479819ba865b453"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "2775d50890aa84fdc73fd77221ddc06d"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "fca307dfd562a8b831fdf4eddc023da7"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "b93ec306612966c1341053531f9dbc4b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "7fbaeba74afe426022dd605c1c6c65c3"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "ac78af20ef33c45180a1a89164497938"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3a2c5d6a6bd700af4fd47f5a1d6bcc44"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "b3506b92ff0cf3a4749a10f986de655c"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "f5cf6b4a14d6ab48240cdbb3db54e56c"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "93434b44738c9a2547ab949e4abbd725"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "3c5c379879bb6a6e72aad96c7352c247"
  },
  {
    "url": "404.html",
    "revision": "e3c0c44759ef83dceb329c60eb11afe9"
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
    "url": "assets/js/1.a1b2b715.js",
    "revision": "1b932d47015d9b9b6f3a5afacbc2c80d"
  },
  {
    "url": "assets/js/10.c2e9b4d0.js",
    "revision": "7dd13e1659473cbebb79e56b1d6392fe"
  },
  {
    "url": "assets/js/100.a9ddc511.js",
    "revision": "af8fecc79e9bbab472605194f0d0cb3d"
  },
  {
    "url": "assets/js/101.f8cda211.js",
    "revision": "c273937cf7069e44cf1d05291bc7be45"
  },
  {
    "url": "assets/js/102.d49cdbf7.js",
    "revision": "2232e4079a3d87fbace52ebb1eabd628"
  },
  {
    "url": "assets/js/103.1ed1e82c.js",
    "revision": "185e8161c26edbde6bfa945e61ecbf80"
  },
  {
    "url": "assets/js/104.2e85c2af.js",
    "revision": "c60faaccf8657f57092f95c093e1a5a6"
  },
  {
    "url": "assets/js/105.b4a6bafc.js",
    "revision": "e9a47be4be73acc1f887b9f99c00e1e7"
  },
  {
    "url": "assets/js/106.d4a2b4c3.js",
    "revision": "7c31fa06f62d6f4f71262929c58f403e"
  },
  {
    "url": "assets/js/107.c867b125.js",
    "revision": "f36cdedbe6782137f22145a03c4022aa"
  },
  {
    "url": "assets/js/108.6dd55f3a.js",
    "revision": "903158288ad4c10ce94816d093308eb6"
  },
  {
    "url": "assets/js/109.244fb86a.js",
    "revision": "83e0eec4c3c29cbfe870835ba8faa46d"
  },
  {
    "url": "assets/js/11.c8872c3f.js",
    "revision": "c8760034ad6d82c3dbc6fbc92f6a73fb"
  },
  {
    "url": "assets/js/110.55d22196.js",
    "revision": "861acfa227733dcbda2e300949785425"
  },
  {
    "url": "assets/js/111.12ecc5a7.js",
    "revision": "66008ebfc547f7e7b6dcf55e3089964f"
  },
  {
    "url": "assets/js/112.7de42dc5.js",
    "revision": "b6e579a6b5368d99d72887de806c7286"
  },
  {
    "url": "assets/js/113.3b5b573a.js",
    "revision": "1db37a75381c52a77b04cbff92290269"
  },
  {
    "url": "assets/js/114.4757c281.js",
    "revision": "f2decfebb9d1de436eb03dd35d172501"
  },
  {
    "url": "assets/js/115.02f1d192.js",
    "revision": "c48b1605d1e223698df3a2ae9b48a161"
  },
  {
    "url": "assets/js/116.25acdb76.js",
    "revision": "c73807fb5be416c7d72b61a395be518b"
  },
  {
    "url": "assets/js/117.aa9c8790.js",
    "revision": "81048d8df06c254af5ca85906d03d496"
  },
  {
    "url": "assets/js/118.66792cdd.js",
    "revision": "0556d85034c8a14512bcafe8fa3e4816"
  },
  {
    "url": "assets/js/119.f0e1693d.js",
    "revision": "a1a9f7fd884ff7698eb1e8403c13c04b"
  },
  {
    "url": "assets/js/12.f6c7832b.js",
    "revision": "a054848c1e5fb9e1dbc72c57114395eb"
  },
  {
    "url": "assets/js/120.c887a808.js",
    "revision": "fd80d7e0dc5bfc97adfdd5d3a8cf7a1c"
  },
  {
    "url": "assets/js/121.97a206a5.js",
    "revision": "c487aaa9a71eca821f0233f17d91630e"
  },
  {
    "url": "assets/js/122.53174147.js",
    "revision": "b44f0556edea7147a65f0aaec6ee8515"
  },
  {
    "url": "assets/js/123.40188402.js",
    "revision": "a47574273070b43d83ba0b8b7e7a7099"
  },
  {
    "url": "assets/js/124.4492f39a.js",
    "revision": "c04c74147cfbbc25b66fae767a099aa8"
  },
  {
    "url": "assets/js/125.08af82b3.js",
    "revision": "1c2c1742ab8a2e46d988bff8ae0d5c87"
  },
  {
    "url": "assets/js/126.d594e7c3.js",
    "revision": "7363290ad50660fc5a6f479a4c24ed2c"
  },
  {
    "url": "assets/js/127.d3b476c7.js",
    "revision": "3fc1c8a38f2f866a265b9dc9bd77a0d6"
  },
  {
    "url": "assets/js/128.bc36ea04.js",
    "revision": "463d9d34ce4aaedd73e4b3e72c5061ec"
  },
  {
    "url": "assets/js/129.c6b9bbc1.js",
    "revision": "9df49b6c2704b4723011e1417feed8db"
  },
  {
    "url": "assets/js/13.06baab98.js",
    "revision": "49158dca12828874dc46c256aaf581fe"
  },
  {
    "url": "assets/js/130.615bd537.js",
    "revision": "9a586f23a2af8ebbb3c2df36d519d983"
  },
  {
    "url": "assets/js/131.b027d14c.js",
    "revision": "558d73e3f7d516be4cd65c069e37b400"
  },
  {
    "url": "assets/js/132.eeb6e82f.js",
    "revision": "616fb50739c04c3cb0f6ab0e10fa7d1e"
  },
  {
    "url": "assets/js/133.03f20321.js",
    "revision": "87141740ef5f158e9dafb73e78e52e59"
  },
  {
    "url": "assets/js/134.e462b941.js",
    "revision": "e46ffbf7da1bb4aadd1112c228cd931a"
  },
  {
    "url": "assets/js/135.7b334cdd.js",
    "revision": "b0ea3067581495d2e928e0400deb2944"
  },
  {
    "url": "assets/js/136.e3e94b2a.js",
    "revision": "9f83880884122371a7b364ca7dbf62e2"
  },
  {
    "url": "assets/js/137.1de9f34d.js",
    "revision": "fa8da2a9c674e1d70fa2d357beeb278e"
  },
  {
    "url": "assets/js/138.112a8ace.js",
    "revision": "f9a3f215b5c1e1fcd0a18656c1efd8ee"
  },
  {
    "url": "assets/js/139.d1682096.js",
    "revision": "64e7e644a50f3bb737329df0a1e2aa12"
  },
  {
    "url": "assets/js/14.3a557582.js",
    "revision": "442bcf271108c5aec8bcd673ad22c156"
  },
  {
    "url": "assets/js/140.87c0e358.js",
    "revision": "4fa0990427bcbdc60b1eeff6d7a07906"
  },
  {
    "url": "assets/js/141.2462d179.js",
    "revision": "860419606259c31d12ff867456e0dba4"
  },
  {
    "url": "assets/js/142.f0d8c51c.js",
    "revision": "2e935524c1326da31eeed5a929814f96"
  },
  {
    "url": "assets/js/143.3e4e3656.js",
    "revision": "ed4363b16f30ff5bae027720fc0c4da0"
  },
  {
    "url": "assets/js/144.923cc283.js",
    "revision": "71d350e303ce57a6768ad4608a776340"
  },
  {
    "url": "assets/js/145.e9406acd.js",
    "revision": "89557ffcd0054566e258161fb78d75ee"
  },
  {
    "url": "assets/js/146.8332c5e7.js",
    "revision": "cf88868fa1d41281eae581ce53b482a4"
  },
  {
    "url": "assets/js/147.31e6be4d.js",
    "revision": "a7286bebf2640e616c36c2e27ff671d1"
  },
  {
    "url": "assets/js/148.98dfdba9.js",
    "revision": "0eeb2b7f69aeefc469db226cb66ad471"
  },
  {
    "url": "assets/js/149.aae06cd3.js",
    "revision": "200576371e279952729b3edc382c10f5"
  },
  {
    "url": "assets/js/15.901e70e5.js",
    "revision": "30f0332004aba9a9719af650404d7f38"
  },
  {
    "url": "assets/js/150.57568846.js",
    "revision": "eed98d7edf4a3020f734f9a4e4d529b2"
  },
  {
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.fe868daa.js",
    "revision": "05366826e467337cf4d0bc0b843cb74a"
  },
  {
    "url": "assets/js/153.f32d2dc5.js",
    "revision": "ab48d5dd29aa6378ae78002b37c1969e"
  },
  {
    "url": "assets/js/154.15afc0fa.js",
    "revision": "1069ad72eb819fb384fbc41a32474c5a"
  },
  {
    "url": "assets/js/155.ce9ccd0e.js",
    "revision": "257d49ac229a271894773418dda09102"
  },
  {
    "url": "assets/js/156.fa05f239.js",
    "revision": "7de95ffce93ea4c28c9baaee5cee7097"
  },
  {
    "url": "assets/js/157.d9444ad5.js",
    "revision": "5253b2fdf5adcd6eae070901876bc519"
  },
  {
    "url": "assets/js/158.d0df83c8.js",
    "revision": "361e547bd120e327e5f6bdcd7ff1cd27"
  },
  {
    "url": "assets/js/159.560daa8c.js",
    "revision": "4a77f58f457c3b955da3b35424d84641"
  },
  {
    "url": "assets/js/16.3469baab.js",
    "revision": "28e9771458206c7e3a042a87ddb6f74c"
  },
  {
    "url": "assets/js/160.8e58607d.js",
    "revision": "2ffabe6d9576df2e432b231e2a0e3a8c"
  },
  {
    "url": "assets/js/161.a3e0f04e.js",
    "revision": "aa7b8922c98907ab40723bb7be522f86"
  },
  {
    "url": "assets/js/162.4e792201.js",
    "revision": "3dda5d08aadc9b6e74fac1f3966d7d66"
  },
  {
    "url": "assets/js/163.02709b41.js",
    "revision": "671c91b56bc4693ecece4cd6729d6055"
  },
  {
    "url": "assets/js/164.a23e6094.js",
    "revision": "09179de22c3dc060469bc3a8420f5422"
  },
  {
    "url": "assets/js/165.5dd1dcdb.js",
    "revision": "f67a6c99a8a318412d95688fd34ebcaa"
  },
  {
    "url": "assets/js/166.23791dad.js",
    "revision": "384313aeba3091fd1f51b8246ded9071"
  },
  {
    "url": "assets/js/167.5aedbaf2.js",
    "revision": "7d53f356419675eb58d2bea717b58855"
  },
  {
    "url": "assets/js/168.cde2ca5d.js",
    "revision": "9f0f506d16119d431382786b10546cf2"
  },
  {
    "url": "assets/js/169.c642fe41.js",
    "revision": "4d9b0d032053a8216466fdfac90692cb"
  },
  {
    "url": "assets/js/17.85c551f5.js",
    "revision": "cbd76fb1684e6ae716f6485440bc1db2"
  },
  {
    "url": "assets/js/170.32b4d6b6.js",
    "revision": "5ebecde9d967de2f5296277be7b80291"
  },
  {
    "url": "assets/js/171.6d143013.js",
    "revision": "64b574b5308e52c089c8d92920b043e3"
  },
  {
    "url": "assets/js/172.b95a7f31.js",
    "revision": "8ea1ee0b3f882875b31a478e66f7c638"
  },
  {
    "url": "assets/js/173.1711eb16.js",
    "revision": "90ca49062b3afa420d307384bd3bb680"
  },
  {
    "url": "assets/js/174.9e05eb85.js",
    "revision": "0ccd0afadb64d3239d6a79cf0cb3ca46"
  },
  {
    "url": "assets/js/175.0ea70c0f.js",
    "revision": "9cc5ff9006ae85dba9477351b5826296"
  },
  {
    "url": "assets/js/176.bca660d9.js",
    "revision": "ecfb0662d1d8852ab4bafad966417083"
  },
  {
    "url": "assets/js/177.11b5ec8d.js",
    "revision": "bc9c7edc7c7ddc27b241f7e6240dd06f"
  },
  {
    "url": "assets/js/178.6a262273.js",
    "revision": "277d31daae0145c660fd97d27e0bee37"
  },
  {
    "url": "assets/js/179.fbeb7009.js",
    "revision": "74737a14716cd55ffdd72c192c943d1d"
  },
  {
    "url": "assets/js/18.0340efc7.js",
    "revision": "ebb2ba7fe6285d5f00eea17bd88be17c"
  },
  {
    "url": "assets/js/180.ab3a7a74.js",
    "revision": "30c6f7c709bc0339f25cd1dadbe0dcad"
  },
  {
    "url": "assets/js/181.d014f4c9.js",
    "revision": "30a5cf46d24d19adafea99ee80ebe1d5"
  },
  {
    "url": "assets/js/182.99290c2f.js",
    "revision": "bc1c86a72ca105f1b586047698502c5f"
  },
  {
    "url": "assets/js/183.0471621a.js",
    "revision": "87873e8b7b015b3171e9a19aa3a3f236"
  },
  {
    "url": "assets/js/184.ff816d35.js",
    "revision": "281c2d6c18aac6bc3a97bc7121a48715"
  },
  {
    "url": "assets/js/185.0c1bf07b.js",
    "revision": "7c1544792ffcb8fa788f14a8148c2d1f"
  },
  {
    "url": "assets/js/186.0befff89.js",
    "revision": "b13ccc6d66d42b986a5775641b1f7876"
  },
  {
    "url": "assets/js/187.bbc2204d.js",
    "revision": "71f9193d8586b1bad20aab98cffe12ea"
  },
  {
    "url": "assets/js/188.41200f0e.js",
    "revision": "5a77e517aca68437ae3c50ea42bd192d"
  },
  {
    "url": "assets/js/189.ffd977ff.js",
    "revision": "cfca503dfb7f1509048a0fe6d760579c"
  },
  {
    "url": "assets/js/19.5dd4a00a.js",
    "revision": "cd5dfa590f15f27aa595f6fa2d27a90d"
  },
  {
    "url": "assets/js/190.e549aafc.js",
    "revision": "f8a6505bade78bec51741e0cc257f80f"
  },
  {
    "url": "assets/js/191.62c39b6d.js",
    "revision": "edb188aff2a40b2b0dc9fc609230638e"
  },
  {
    "url": "assets/js/192.71c60567.js",
    "revision": "80764d90c0b88adb6664d52e97470c52"
  },
  {
    "url": "assets/js/193.78cc2de0.js",
    "revision": "c9161083cfb626135c19fc19b9e600b2"
  },
  {
    "url": "assets/js/194.2fee9f4a.js",
    "revision": "5ccdc156352f36950acd9eb9439df6e2"
  },
  {
    "url": "assets/js/195.19fa7b72.js",
    "revision": "a9a3befd8a9bde6c07539b5d8d7e9037"
  },
  {
    "url": "assets/js/196.0924d515.js",
    "revision": "ad9bbf76ebe875cd223031c3d8afa6e7"
  },
  {
    "url": "assets/js/197.b45d5cff.js",
    "revision": "c167730f218516b95b79456a4b3d34c5"
  },
  {
    "url": "assets/js/198.5a45a5fb.js",
    "revision": "49937897452976ea16b46fe2aaae3838"
  },
  {
    "url": "assets/js/199.0123dcd7.js",
    "revision": "2a6ebd55ab84fb3210828d820d45de09"
  },
  {
    "url": "assets/js/2.fe5a4212.js",
    "revision": "998c96920d5c18a875cb0a9c6475b26c"
  },
  {
    "url": "assets/js/20.01f949a2.js",
    "revision": "b4bebadcfc59a5978ab818c6ccbf61ad"
  },
  {
    "url": "assets/js/200.a2db2e78.js",
    "revision": "a5ad64f4f095b002ffe61da007b5862c"
  },
  {
    "url": "assets/js/201.32f12c72.js",
    "revision": "656634ff1223a449308b4d1272dfec10"
  },
  {
    "url": "assets/js/202.6931a631.js",
    "revision": "930c7b7da501e278d7137f56a27a274c"
  },
  {
    "url": "assets/js/203.1c16d237.js",
    "revision": "a4d5e78f9ab97484b1b6a5855d8af6e6"
  },
  {
    "url": "assets/js/204.44a1967c.js",
    "revision": "b2d5771ad6ac25cb2a710e4c7512e8e6"
  },
  {
    "url": "assets/js/205.c7af378c.js",
    "revision": "6bf9e0f8ac1b69992516f4b40557fe82"
  },
  {
    "url": "assets/js/206.2d824e75.js",
    "revision": "b84c771cd0f7b541939394b6509fd905"
  },
  {
    "url": "assets/js/207.f1640535.js",
    "revision": "c65543e6d416cd79a508fe191ede6fbb"
  },
  {
    "url": "assets/js/208.a5e8aca7.js",
    "revision": "a02b745dbf275b59a88b546250579f01"
  },
  {
    "url": "assets/js/209.416fdbb8.js",
    "revision": "9a02aafa14684b7a0d6f8d28a286e7c0"
  },
  {
    "url": "assets/js/21.4bf23474.js",
    "revision": "e654bb172998850b5c2dee3bba5f7b66"
  },
  {
    "url": "assets/js/210.2739b774.js",
    "revision": "53b7b5abcb61fd74d4b9158d57693787"
  },
  {
    "url": "assets/js/211.efcd6ee1.js",
    "revision": "cb8e43ba7483cce069b9e326ddab3775"
  },
  {
    "url": "assets/js/212.4b59558f.js",
    "revision": "7f81d7980a5625515f564f069cc5f254"
  },
  {
    "url": "assets/js/213.c9f40e0c.js",
    "revision": "022511ae5a61593d4c7e72565900a781"
  },
  {
    "url": "assets/js/214.634725bb.js",
    "revision": "ef6f3ed9b1f2a6f4a9fe9b15e32bf8bc"
  },
  {
    "url": "assets/js/215.33806b39.js",
    "revision": "8f9ded0561902e9d9022c1e05cf69370"
  },
  {
    "url": "assets/js/216.669438d8.js",
    "revision": "a4fbe50d11675f75f660a7be97d99590"
  },
  {
    "url": "assets/js/217.48c7348b.js",
    "revision": "04e8b652effaffd8b49400f48cfdfe81"
  },
  {
    "url": "assets/js/218.53468c67.js",
    "revision": "5f98f7e189b183f90853417b3356b112"
  },
  {
    "url": "assets/js/219.b83e4e4b.js",
    "revision": "cca2840781f46b3e5146d74f8b592e38"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.7f2eaca6.js",
    "revision": "a597f4b65ab459701744f9c6446be5c3"
  },
  {
    "url": "assets/js/221.ae7196f8.js",
    "revision": "134cd6e1fd1685b6ea0e7f61de6be6e0"
  },
  {
    "url": "assets/js/222.cf5f4323.js",
    "revision": "32bd994ecc2aeff9a3a1a906abc8e297"
  },
  {
    "url": "assets/js/223.79a8391b.js",
    "revision": "9059959872d66a60dc7db20f86d31e7f"
  },
  {
    "url": "assets/js/224.3d239a18.js",
    "revision": "9e82c9c617fb1474901cdb88ee95cb8c"
  },
  {
    "url": "assets/js/225.b2e35e1a.js",
    "revision": "1316dc50001a97dc1cbc677476323563"
  },
  {
    "url": "assets/js/226.084767a9.js",
    "revision": "8c6794d9eb5849c99dc76de18b83398d"
  },
  {
    "url": "assets/js/227.decce619.js",
    "revision": "ebd3799403efb5ab9588aec1e3e9358d"
  },
  {
    "url": "assets/js/228.05f399ed.js",
    "revision": "57a811507e5995b74962b4abe64fa5eb"
  },
  {
    "url": "assets/js/229.7203bb0d.js",
    "revision": "7f67bb98a7f23f089c48dda7b42024bf"
  },
  {
    "url": "assets/js/23.a95478c3.js",
    "revision": "db8401423c6cdf25ebac351a463dbc7f"
  },
  {
    "url": "assets/js/230.8c58ce5e.js",
    "revision": "8ef64c170055f3d3244b901ee7d7dd89"
  },
  {
    "url": "assets/js/231.c48158a8.js",
    "revision": "b866e6aa4ca27b73ed759ee96d3bf363"
  },
  {
    "url": "assets/js/232.35c7091c.js",
    "revision": "c7345c71896781a17d1831c8a21bc924"
  },
  {
    "url": "assets/js/233.8a5a7ef2.js",
    "revision": "006ab2fa95fe43cf3863e20fdd0cb374"
  },
  {
    "url": "assets/js/234.a61da00b.js",
    "revision": "cc9ab9c3999c0cd5d8714bf2c07714dc"
  },
  {
    "url": "assets/js/235.e994ed90.js",
    "revision": "994671141d2c9fd457f417c1107b7d2d"
  },
  {
    "url": "assets/js/236.ce4b26d7.js",
    "revision": "79b2d669b125b1f820b9f52d1f8ab165"
  },
  {
    "url": "assets/js/237.2ec9f637.js",
    "revision": "46e726b7802d8b7c54985ab6a4eb21ef"
  },
  {
    "url": "assets/js/238.c28d22bf.js",
    "revision": "53f1f272f0aa21facaab022338dbf3dd"
  },
  {
    "url": "assets/js/239.f78338d3.js",
    "revision": "0fee3dac7131fe42ba64bb7d5abb90c3"
  },
  {
    "url": "assets/js/24.6a174b11.js",
    "revision": "ddab69a3c4914842f354b2051413428f"
  },
  {
    "url": "assets/js/240.4170c19f.js",
    "revision": "5a886e0aa692458ccd5d1780fa49bb72"
  },
  {
    "url": "assets/js/241.94abbe45.js",
    "revision": "ab86d2fe0ece1d7ea041a77bbde17624"
  },
  {
    "url": "assets/js/242.15b1859b.js",
    "revision": "b9b5c77c3a966577862b3e176941fb72"
  },
  {
    "url": "assets/js/243.b1e6c05a.js",
    "revision": "37c3f3a5b8d730ea7e2e57e0f3781344"
  },
  {
    "url": "assets/js/244.97de44fc.js",
    "revision": "51e92d365b8722871d12a4cab6abc810"
  },
  {
    "url": "assets/js/245.830010b7.js",
    "revision": "22a4f4f5b6c033545b728e61ad60bcc5"
  },
  {
    "url": "assets/js/246.c95995cd.js",
    "revision": "acb133478871ec5e6449de944e72dac4"
  },
  {
    "url": "assets/js/247.2d0fff34.js",
    "revision": "627deb93788da4e86049816911e630d8"
  },
  {
    "url": "assets/js/248.e2663efc.js",
    "revision": "139f27b10c4f69d10f6b3abb986f13da"
  },
  {
    "url": "assets/js/249.dcb80784.js",
    "revision": "88a5bfd070c6efe32d9524479952ccae"
  },
  {
    "url": "assets/js/25.bb45f101.js",
    "revision": "9cb4b4936af4db10817597f49ba9e331"
  },
  {
    "url": "assets/js/250.f243ffe3.js",
    "revision": "4e21dd639e15b3fb314939359ba1acab"
  },
  {
    "url": "assets/js/251.f7f6ce32.js",
    "revision": "bbcf45a55532d63cad199c2942d05158"
  },
  {
    "url": "assets/js/252.955018c4.js",
    "revision": "42790fdc0c8bff3034ac7adc7db35cee"
  },
  {
    "url": "assets/js/253.319381ce.js",
    "revision": "9e748d7a4a39e59affc6324fd2bdffbc"
  },
  {
    "url": "assets/js/254.cfa9bc53.js",
    "revision": "b8dbaec6d19bf601e689c1c4fb51d8fd"
  },
  {
    "url": "assets/js/255.07a1278a.js",
    "revision": "dc6e5ecfc6c65d44771d7c7eddfbee08"
  },
  {
    "url": "assets/js/256.64d85e1c.js",
    "revision": "ea1348ae2a44550d75377e3b89bd1037"
  },
  {
    "url": "assets/js/257.c3d5b271.js",
    "revision": "b000ed24d951cf0ab9d85d0359f50ebc"
  },
  {
    "url": "assets/js/258.0fd6719d.js",
    "revision": "501efd8ebbb7561176653e8fcc475705"
  },
  {
    "url": "assets/js/259.bdba91d8.js",
    "revision": "3b9298b933c5e68942a243f68e50456a"
  },
  {
    "url": "assets/js/26.c0bac1e4.js",
    "revision": "7470b957e9daf869904578865b9cc631"
  },
  {
    "url": "assets/js/260.8f38ccef.js",
    "revision": "3035f2942e9dffba41c159bab96cad31"
  },
  {
    "url": "assets/js/261.0d62b76f.js",
    "revision": "40e774ca76d9611dcfe2e01e443ce6e0"
  },
  {
    "url": "assets/js/262.06ccfe2e.js",
    "revision": "849493640910080de75b0236a573ff9b"
  },
  {
    "url": "assets/js/263.e6f6f3ce.js",
    "revision": "08da3eb17a9847e026332704b9e18213"
  },
  {
    "url": "assets/js/264.b1ff314c.js",
    "revision": "085483555f192d92fe1b89e1a409cf72"
  },
  {
    "url": "assets/js/265.a203da5a.js",
    "revision": "7d3070866797a9fca7f2b2c6a63dcbb8"
  },
  {
    "url": "assets/js/266.d4b18b9b.js",
    "revision": "37174463c17e023ddafc0b67ba591f0d"
  },
  {
    "url": "assets/js/267.63fccf25.js",
    "revision": "53770eb3335280bdc53a2382941dba62"
  },
  {
    "url": "assets/js/268.0b0c5b4a.js",
    "revision": "667fb8f6edf7dbba19744fb3ddd76c71"
  },
  {
    "url": "assets/js/269.8024ed22.js",
    "revision": "fd50b406e70b1416b634da83cf89b181"
  },
  {
    "url": "assets/js/27.05910f06.js",
    "revision": "8ead1bfab3df44296272531ddae82787"
  },
  {
    "url": "assets/js/270.01da6063.js",
    "revision": "e03ed40558b0fa30776c4f41c686cd65"
  },
  {
    "url": "assets/js/271.2a50f868.js",
    "revision": "13e83f09cb44beec0fa63a43843786d4"
  },
  {
    "url": "assets/js/272.e476b3c9.js",
    "revision": "c4e29d1d1e73f954bf70925bcd582590"
  },
  {
    "url": "assets/js/273.ab66576a.js",
    "revision": "65b3eddc80498bc4c5001505f6a49e6d"
  },
  {
    "url": "assets/js/274.487a46ad.js",
    "revision": "086c44f21b953da599a7bce75e29716e"
  },
  {
    "url": "assets/js/275.a433aed6.js",
    "revision": "3bd3cbb5aa6f7a046b6acac7f91d28b4"
  },
  {
    "url": "assets/js/276.7b8d1be5.js",
    "revision": "72fcb7d64c51741aa462d336fb3142f5"
  },
  {
    "url": "assets/js/277.7904f5fa.js",
    "revision": "c072808fcbb5026cf288c9cdb6e4aa8d"
  },
  {
    "url": "assets/js/278.1c4c2776.js",
    "revision": "df1996489ed2a7554297e39f6d1a1644"
  },
  {
    "url": "assets/js/279.0d961baa.js",
    "revision": "31c2c9c60923f434e70c6819db5c7e1a"
  },
  {
    "url": "assets/js/28.96dd96c5.js",
    "revision": "8af8229e93fca23749e58d3d0c7bec21"
  },
  {
    "url": "assets/js/280.6186123c.js",
    "revision": "1b05be8ea18403e88fc646ae161dec41"
  },
  {
    "url": "assets/js/281.24020cdd.js",
    "revision": "4d7cb77f4b372640dceaf7cdcacdd719"
  },
  {
    "url": "assets/js/282.6975c62f.js",
    "revision": "db6c0b6cb0f9f21ec97e46c8b8ac0c8c"
  },
  {
    "url": "assets/js/283.2416a024.js",
    "revision": "8b9e87859b3005685902b69aa80b9aea"
  },
  {
    "url": "assets/js/284.1d561a2a.js",
    "revision": "fb088b0c0e194a440b148a6e93374691"
  },
  {
    "url": "assets/js/285.2b9ae1ce.js",
    "revision": "60663e5a4a0de6116e474b2f94df792f"
  },
  {
    "url": "assets/js/286.c7767fa7.js",
    "revision": "dce0fb412d71dfa4cc362c565c286b1c"
  },
  {
    "url": "assets/js/287.837d55df.js",
    "revision": "83010413bf362801a6fd4e8dc555ce75"
  },
  {
    "url": "assets/js/288.eb2044c5.js",
    "revision": "e8f86db226d0fb678574806edad0ec1c"
  },
  {
    "url": "assets/js/289.021336cf.js",
    "revision": "edb1e374b4acf3078ff80f55c2f02210"
  },
  {
    "url": "assets/js/29.ef3034cc.js",
    "revision": "ae2d9dec665887a29c7092ab765e8879"
  },
  {
    "url": "assets/js/290.48b9d91e.js",
    "revision": "7bdbba315ab6c5e34388ce5d3dc9ba45"
  },
  {
    "url": "assets/js/291.570a1682.js",
    "revision": "5437aab34ae7c787089c69046e7691f7"
  },
  {
    "url": "assets/js/292.a61d2138.js",
    "revision": "5a3dc5cf4d2e3d6f20c1bd2ecec96912"
  },
  {
    "url": "assets/js/293.3d133667.js",
    "revision": "0a62f87daa264ba31cc096a3aa7df373"
  },
  {
    "url": "assets/js/294.6bd88caf.js",
    "revision": "ff2a906c38c9861188e964f5bee9e83a"
  },
  {
    "url": "assets/js/295.14f528b6.js",
    "revision": "5aa9bade96de6d50b3daa00a8aabe1d2"
  },
  {
    "url": "assets/js/296.0caba0a2.js",
    "revision": "97305e3b0d730e6bb4719f813f5f02cf"
  },
  {
    "url": "assets/js/297.6dce181e.js",
    "revision": "062ba6000acdd476536ad647e27bcad9"
  },
  {
    "url": "assets/js/298.72da3b41.js",
    "revision": "b43762383a4e48a8683ea2b0827f37ca"
  },
  {
    "url": "assets/js/299.415ba9d8.js",
    "revision": "06490c594640e724578793b8d2a25c8f"
  },
  {
    "url": "assets/js/3.b02c4595.js",
    "revision": "0dafd6d3829a08a51c41cf47f045b516"
  },
  {
    "url": "assets/js/30.fbd7d02c.js",
    "revision": "8c83da82db3958c740b23c2519219638"
  },
  {
    "url": "assets/js/300.58f3317f.js",
    "revision": "599a6246de79797ab6a75a16125d9768"
  },
  {
    "url": "assets/js/301.18b5cb9a.js",
    "revision": "3dbcf2548dfc29d4e20d19f12c820789"
  },
  {
    "url": "assets/js/302.16065232.js",
    "revision": "f0b7fa4257c9b3deb2789d2351ea0698"
  },
  {
    "url": "assets/js/303.1d95fa50.js",
    "revision": "23f1ffd0453e2863a5fa17bed1392c3f"
  },
  {
    "url": "assets/js/304.a03c6d06.js",
    "revision": "be51931a517c1b6198afcac5c67cab6c"
  },
  {
    "url": "assets/js/305.4f6f07e3.js",
    "revision": "9262701242d4252c5c2a687c34981875"
  },
  {
    "url": "assets/js/306.f8d68438.js",
    "revision": "c6bdc5996e0eb6f3a9fa8f99ac5899dc"
  },
  {
    "url": "assets/js/307.364956b8.js",
    "revision": "e8e7d3b4717901626e2cfa933a958448"
  },
  {
    "url": "assets/js/308.6b3d0cf0.js",
    "revision": "333fa80dd9590d614e32156c5b06bd99"
  },
  {
    "url": "assets/js/309.b89054f1.js",
    "revision": "e0f4c2c3d40ebe2fa0f63da5852a481d"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.cffd418e.js",
    "revision": "7018483cc5f5040b6f6bb60d6096784c"
  },
  {
    "url": "assets/js/311.6be626e0.js",
    "revision": "55fcce0769c2474d51e93b0501be486c"
  },
  {
    "url": "assets/js/312.431aae0f.js",
    "revision": "93c93088e83232ed4229b138c6e61654"
  },
  {
    "url": "assets/js/313.bd903226.js",
    "revision": "9573edf65fc6a1ce1527d0893f14f6e1"
  },
  {
    "url": "assets/js/314.ca390d53.js",
    "revision": "08b807c71c75d2eeb28b2e3d63f54fad"
  },
  {
    "url": "assets/js/315.37f92860.js",
    "revision": "46a8109bd76ddb6045edc0e8e3c84c9a"
  },
  {
    "url": "assets/js/316.b14b9153.js",
    "revision": "33bf34e7c7e975f5a318f8a60542b48b"
  },
  {
    "url": "assets/js/317.b9c82dd2.js",
    "revision": "3a068ae7c3912059769949b26476bb25"
  },
  {
    "url": "assets/js/318.473cb560.js",
    "revision": "1858421059f7b004c1e5e984d988da6e"
  },
  {
    "url": "assets/js/319.175d0e9d.js",
    "revision": "510ddea5a5132532a2b4be9a4d1b5210"
  },
  {
    "url": "assets/js/32.7e21ae42.js",
    "revision": "6d8587ad84b0b0ed9e4f94cba2bee6aa"
  },
  {
    "url": "assets/js/320.c9119305.js",
    "revision": "4a1ff7a2e369f8d7cabfc67190e7f809"
  },
  {
    "url": "assets/js/321.a5c48d7a.js",
    "revision": "6de026705a5042dd68908cf16c3bc87e"
  },
  {
    "url": "assets/js/322.0e27fc3b.js",
    "revision": "51f96141c3b7040519c4ae14b3f712b3"
  },
  {
    "url": "assets/js/323.39611f86.js",
    "revision": "f2ba5847cd86743a59a312574efda669"
  },
  {
    "url": "assets/js/324.d29b8936.js",
    "revision": "69e83757fdf354839c7300ed7290c806"
  },
  {
    "url": "assets/js/325.7771b06b.js",
    "revision": "4e958359fbc42518996f9a521ea2ee5f"
  },
  {
    "url": "assets/js/326.af6ffe33.js",
    "revision": "ae71f0cd9d81912f3af84aea80734e91"
  },
  {
    "url": "assets/js/327.2492913e.js",
    "revision": "a9d10e1811477dbb1a5cbd84514d7c7d"
  },
  {
    "url": "assets/js/328.b6e57f22.js",
    "revision": "2a4b35b936c6a9327c36b01864760619"
  },
  {
    "url": "assets/js/329.b9db7a05.js",
    "revision": "cd3aacb4f4b5c70d995576b3702dbd18"
  },
  {
    "url": "assets/js/33.76d7e7ef.js",
    "revision": "07592a24123744c932efe3f4a143e415"
  },
  {
    "url": "assets/js/330.49bbc711.js",
    "revision": "7e1d5960147c3620c036fc5f2f7bec95"
  },
  {
    "url": "assets/js/331.fa8066ec.js",
    "revision": "0581fd886a129ce79f2ebcefd8a453f0"
  },
  {
    "url": "assets/js/332.b8c19631.js",
    "revision": "944b7648a74aa775db7d31add1c75546"
  },
  {
    "url": "assets/js/333.701beea4.js",
    "revision": "5b7625586ac0c1c8e248c87acd57714e"
  },
  {
    "url": "assets/js/334.94e8e82e.js",
    "revision": "fb4c63f7039e4f6e9dd5ef3c13808507"
  },
  {
    "url": "assets/js/335.8ed214bc.js",
    "revision": "8f2dc71936eac00ed3b712b09dee0f42"
  },
  {
    "url": "assets/js/336.8a801311.js",
    "revision": "f701c144aba1faf46082a261fc431a8b"
  },
  {
    "url": "assets/js/337.638d1e4d.js",
    "revision": "91e38c2cb79be367e7f7c5339d551935"
  },
  {
    "url": "assets/js/338.2c240bb0.js",
    "revision": "2672547b799dbd698be56ef30f7ccd68"
  },
  {
    "url": "assets/js/339.46616b52.js",
    "revision": "dbe20d70b37873ab97630f707c5601f4"
  },
  {
    "url": "assets/js/34.0a9a6e82.js",
    "revision": "bd62f6b736da258e3305cf06a205929e"
  },
  {
    "url": "assets/js/340.62b16a50.js",
    "revision": "cee476b758a416e1f72e4597b531ec7d"
  },
  {
    "url": "assets/js/341.21c51174.js",
    "revision": "2e3c78b08fb6035057d55f648586831e"
  },
  {
    "url": "assets/js/342.2bec154e.js",
    "revision": "86f6c0cc799e6e789a645556f30f2c75"
  },
  {
    "url": "assets/js/343.fa5e5192.js",
    "revision": "f2b8ede3d1f6ec32146d4696541a790b"
  },
  {
    "url": "assets/js/344.3ba70984.js",
    "revision": "d561fdda743f5290e3c2212e73d441f7"
  },
  {
    "url": "assets/js/345.e607068b.js",
    "revision": "bdba9996de896515e938e4cc50c359be"
  },
  {
    "url": "assets/js/346.267f264e.js",
    "revision": "bf1b83ce30f26a423aeb91d0ccc39ad8"
  },
  {
    "url": "assets/js/347.a0ccedbf.js",
    "revision": "b7db8018a72972ce9223c52ae06523d0"
  },
  {
    "url": "assets/js/348.108b8ade.js",
    "revision": "789d71cdc50a23f475190c0d91789409"
  },
  {
    "url": "assets/js/349.1663462b.js",
    "revision": "b37dd65945a41096ea6d43a8184898b4"
  },
  {
    "url": "assets/js/35.a1c6c7ed.js",
    "revision": "936aa7036eb7eeb5447d3246c4afd24b"
  },
  {
    "url": "assets/js/350.cf0b3141.js",
    "revision": "0be03313676d959aa554e417e589b14c"
  },
  {
    "url": "assets/js/351.b7d9a4db.js",
    "revision": "b9a6a088b2ff1b2809f44df54562128e"
  },
  {
    "url": "assets/js/36.3266f4e1.js",
    "revision": "fcbcf402f76c05d525f3a4ddf96730fb"
  },
  {
    "url": "assets/js/37.81c524de.js",
    "revision": "7b7d9561b843c15e435ace2a98d95c4a"
  },
  {
    "url": "assets/js/38.f43413f6.js",
    "revision": "2e3653d0e8b51e14f6b36164a37ac926"
  },
  {
    "url": "assets/js/39.6e63a644.js",
    "revision": "9ba9e82f882a98441fb2de30867e036b"
  },
  {
    "url": "assets/js/4.2087ab43.js",
    "revision": "c09acbbee247cf7b0a2e4c3b96302e71"
  },
  {
    "url": "assets/js/40.df7b7688.js",
    "revision": "2217a6db74c81b32ab23d6649712b3dc"
  },
  {
    "url": "assets/js/41.c5d8a6e9.js",
    "revision": "3602afc9e6a8ef934266d2893dadc7d0"
  },
  {
    "url": "assets/js/42.996d99ec.js",
    "revision": "3986dd07f99945fb1903c5abc78aa11f"
  },
  {
    "url": "assets/js/43.01003f36.js",
    "revision": "f2ee7ca69ac2bd7e248676c5445ac9de"
  },
  {
    "url": "assets/js/44.81fab426.js",
    "revision": "b7e76595d382d0f3047b4052a2cfe41f"
  },
  {
    "url": "assets/js/45.c5e0f186.js",
    "revision": "564753f47b917b7b4143e06b21e402f9"
  },
  {
    "url": "assets/js/46.ae426e78.js",
    "revision": "8f0f7b9cfaef8ac34ae51e5c0e268a1d"
  },
  {
    "url": "assets/js/47.9d7904de.js",
    "revision": "50cd171dff76d836c2d116bae5e914bd"
  },
  {
    "url": "assets/js/48.05516ff9.js",
    "revision": "b2e2d686304b159caa9ea7b1974ea2c8"
  },
  {
    "url": "assets/js/49.4719ffd9.js",
    "revision": "0e28b3c37ac112b5bfcf0d181f58d412"
  },
  {
    "url": "assets/js/5.d11cb774.js",
    "revision": "bf37a02c3fbcca5ff3e4a7bb12a810da"
  },
  {
    "url": "assets/js/50.8a1e4770.js",
    "revision": "24b6a5d83988e24d2f92e3ddc2db0d51"
  },
  {
    "url": "assets/js/51.b6ff928c.js",
    "revision": "d3f00ee3186ec4854864c10580349016"
  },
  {
    "url": "assets/js/52.92a920cf.js",
    "revision": "6f10aca4af1f5bd85f0d9e6f5259c597"
  },
  {
    "url": "assets/js/53.b1aee4e7.js",
    "revision": "8eb5ad9c26258227ac8b50de56e7bfbd"
  },
  {
    "url": "assets/js/54.102988e3.js",
    "revision": "8df37dcb243cc7503f6bb4b436542f4b"
  },
  {
    "url": "assets/js/55.51db00d1.js",
    "revision": "5c2ecff55654ec9322a8f009a3cea216"
  },
  {
    "url": "assets/js/56.95b587ca.js",
    "revision": "20e81898f6b00c21dd2484aa470ef950"
  },
  {
    "url": "assets/js/57.1c468f5e.js",
    "revision": "0c27b2b491290b842cf98792c0c5f62c"
  },
  {
    "url": "assets/js/58.0e6aeef4.js",
    "revision": "9402cd78ff2897f8764267b4a63aa248"
  },
  {
    "url": "assets/js/59.8c203e69.js",
    "revision": "5e234c353cf2f370f70f8782ae414117"
  },
  {
    "url": "assets/js/60.48658398.js",
    "revision": "f8e7e4d788559aee332b7a1e7313e1c4"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.2157187e.js",
    "revision": "ddcd6a519670b531796dd4553d9e8bca"
  },
  {
    "url": "assets/js/63.dadd0e01.js",
    "revision": "bbab4d68dc0a384b050189db59596c1e"
  },
  {
    "url": "assets/js/64.a5f0b6c8.js",
    "revision": "5080f4c91b94317db6bd8b6e7630211f"
  },
  {
    "url": "assets/js/65.c72d5283.js",
    "revision": "f409200c27879ba9850c0810f46fac94"
  },
  {
    "url": "assets/js/66.a0e5066f.js",
    "revision": "872bf1a0b81f880022c1dc83de23891e"
  },
  {
    "url": "assets/js/67.b8a4a42c.js",
    "revision": "770b6b850336e2794ad74a5530d93dd6"
  },
  {
    "url": "assets/js/68.15a0d132.js",
    "revision": "6b9f521a8a325f39043215445ba7504b"
  },
  {
    "url": "assets/js/69.7575939e.js",
    "revision": "6044326eeab3422a0fe7eddc3f2626e5"
  },
  {
    "url": "assets/js/70.fa65bbf1.js",
    "revision": "a700e47f30f116765d6e4550849f4d88"
  },
  {
    "url": "assets/js/71.23c8fc07.js",
    "revision": "80b0ab7d9018166d4fd01d26b167c695"
  },
  {
    "url": "assets/js/72.6c28c829.js",
    "revision": "770596df5be80525da387c705d3b0d2e"
  },
  {
    "url": "assets/js/73.49678976.js",
    "revision": "38c2d90254e0b9327a250bc66637ef77"
  },
  {
    "url": "assets/js/74.efbfb4cf.js",
    "revision": "bc412c0e48baf6a3a4142591d38b0c13"
  },
  {
    "url": "assets/js/75.d1a1bc6d.js",
    "revision": "a7cd9b6023a626799a7ef005c73cb8ae"
  },
  {
    "url": "assets/js/76.52022aff.js",
    "revision": "81f204a20a129d3f0346a6e88f73d3d7"
  },
  {
    "url": "assets/js/77.17f30139.js",
    "revision": "1662c5aab7a0711de2ee160fb998d01f"
  },
  {
    "url": "assets/js/78.c7849e86.js",
    "revision": "58c71609febe1986d8a0426e5ad1df6f"
  },
  {
    "url": "assets/js/79.12962a99.js",
    "revision": "b54cb25e747f70a28466310e7eda2037"
  },
  {
    "url": "assets/js/8.81beaff7.js",
    "revision": "438d0ce6ebbe208913e036accf3ac8d6"
  },
  {
    "url": "assets/js/80.422261b6.js",
    "revision": "e7de2ca1b0bd96884d3aa67e7da9dca7"
  },
  {
    "url": "assets/js/81.f6d9361e.js",
    "revision": "a7c6d3992f36e33357d6715ee133dd63"
  },
  {
    "url": "assets/js/82.a9c375fb.js",
    "revision": "60fc70734401b542d34241acee55b024"
  },
  {
    "url": "assets/js/83.a4bdbc61.js",
    "revision": "3df3d12dfe23a13a24864a1f17bc81fd"
  },
  {
    "url": "assets/js/84.cf68e526.js",
    "revision": "2569e5b526829f2bb38d99a15c85897a"
  },
  {
    "url": "assets/js/85.abcac79c.js",
    "revision": "e78caa8df247f90e8235824d6c782da9"
  },
  {
    "url": "assets/js/86.496c9162.js",
    "revision": "b270fdba70c3102d29600a0a467bbf0f"
  },
  {
    "url": "assets/js/87.8a51ebf0.js",
    "revision": "28ee11124a94dff7f469a06d7c702e01"
  },
  {
    "url": "assets/js/88.c89c10c3.js",
    "revision": "7ddf14d07222e5cd19add8f50b3106d6"
  },
  {
    "url": "assets/js/89.23a48a00.js",
    "revision": "798604d592b0ee3115971527e152f1b8"
  },
  {
    "url": "assets/js/9.1f4dccf1.js",
    "revision": "7fd39b63e5b356a9074bf691100eb479"
  },
  {
    "url": "assets/js/90.504eb436.js",
    "revision": "86d3604085e16e20b48740275cb8e5d5"
  },
  {
    "url": "assets/js/91.34a35554.js",
    "revision": "6014f45c364cd297e1b7e1d37ff5a051"
  },
  {
    "url": "assets/js/92.060152eb.js",
    "revision": "dcdee47bd6f329086c779a68dc34f773"
  },
  {
    "url": "assets/js/93.b07afe33.js",
    "revision": "77d4b9338c46096e3ba85985a04e692b"
  },
  {
    "url": "assets/js/94.a104aee3.js",
    "revision": "a47e84b4d2828b5add7fbbc5b4d06d78"
  },
  {
    "url": "assets/js/95.496677b0.js",
    "revision": "e5991e8ef7b590b5adc95be669bcfc04"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.63254cf3.js",
    "revision": "8fc5823e59f0e7ce1e23c60549d7bbf5"
  },
  {
    "url": "assets/js/98.0e001acf.js",
    "revision": "78576eb9f1d9a98bb13623b19e5104b1"
  },
  {
    "url": "assets/js/99.bf0fff42.js",
    "revision": "dda15c098a899fb06e23dc18abc1714c"
  },
  {
    "url": "assets/js/app.c151d69a.js",
    "revision": "78f3130c128fb9fa3dad35c718853195"
  },
  {
    "url": "assets/js/vendors~docsearch.70becf99.js",
    "revision": "4098d2f5bced23ccbfec4e7737f2e45f"
  },
  {
    "url": "index.html",
    "revision": "3483d4dd66a45f11b3f9df6dbd9143e4"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "825dc328cd892412dd6669c97f19939b"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "a29d24f1a6b858dc5e6c923dc544d1b7"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "86834ef373b054b84d9481fd2a8bfd0a"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "7b25f15e2c7f115d47b033ae7a421c7e"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "de10d1d0598ea6bc8cf7e5fc3a730b6c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "04e40e4afd773949f398c1c85b609285"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "da534ec1948f91190711ad5dc37460ab"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "6878b6664aafd7df2d3b367aa8e71df9"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4b3f360b0f07cc955f248057d6b5897f"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "301ba12549f7913c405d9d4d8af875fa"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "36f31a27f715f2769bf6d61f80092e70"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "18089396b7a9559bb507bf71f7f204a2"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "65c40cdbb43b678d67a661b682eb22a1"
  },
  {
    "url": "master/api/index.html",
    "revision": "95cc111deb0d5a03af89016c62acbd24"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "e4ea96bf7e5e3c736e25d0c29990feeb"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "fdf3e816b6c3d932b799bcc6990300a5"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "fd19282e30b91939d1bc15b799350635"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "aa950917640a289a1186fc5dd8491e1a"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "473f4a6d25bd660c649f9955a49535ab"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "973c762cfd249a8e062309a6ed791511"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "5fa098da63fbd1433ea810cceac16f1c"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "a2e7daf8eeddeea824fbb92079d137f5"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "d792bf64523648da3fddfe7204414745"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "4e8fa2acc1e3bda9700ff71f1eb4ba0e"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "c16fda0cb63c0c547d768d02baa5cb6b"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "340932a4b3f16c8748e920cfd94bd13b"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "9eff5f8acaa5285d35cc437f9286bcf0"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "3faf898eefa1ece6d6e2478985cadf15"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "5f8c0debe6bff55c934663a4ca4a4d57"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "dee638a9fefab1b3ebb6656c3aef5cec"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "3f49b814729a7cf78a98e8c0995e410a"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "14ee378c786cd8c49bb4f13e819ed1bf"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "36ed2d00460dd9faba0b8a3d206a5604"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "a306d429d387cbe277df990e81f57451"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "dcee4f612539c60a58996903c013cf20"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "949b31a79e29197b6ea9ecf203b7087c"
  },
  {
    "url": "master/packages/index.html",
    "revision": "19312656e4327431caafbe60de3d0af1"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "be74390bf42ae52eb316a15d154de9db"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "80050d147fdfdb129db0b7aba09e7854"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "fac948c38b6cb6a1eee364cfd825d5e7"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "e47f1b899c8b62d0aaa3c5ad4da8d84f"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "844b4a0f6cd4672414e380f162b192cc"
  },
  {
    "url": "master/packages/views.html",
    "revision": "c03f6b9ccd742c0217711de07e5a258f"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "a697ff9dcda8279d6442b28fa289ee12"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "33c96c92038e17835017173559c4b0e3"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "31483eabc42545e3b68aab4abe988a40"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "0e130be8f1931316ff1ecfca3f01443f"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "69793fc3e17f0a26f0dd3e94b3189680"
  },
  {
    "url": "master/themes/index.html",
    "revision": "386a4b4768b6e96be544c0d95790161c"
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
