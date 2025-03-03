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
    "revision": "6d1ffd6a5221b3e769aca1880fa073bf"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "22c704a414f19bc313e5e94df7ca5b8d"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "41c0b8da5ee93901562676edf7e13b4a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "d0016460f64da702fc9be8ebc92f3231"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "aa324e1267db7d1e68601131e22cef54"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "a37cacd72251e57b21e788c73747c977"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "cc409a8ed14875f7babdf97c41f60ee4"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "657c49746d7a064078773cc0b56c30d2"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "2c7c00ac8dc85a9242bde37f1103dea9"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "1bffe5b2fd0c1ab6f52f22636a0bfd0d"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "264c8303035f1c4e80c88da8633b940f"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "64201b8ba4b220642592097f9bf80723"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "e514cd06a4b9aa4cfb44ccc20c9f56d8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "dbbf3d86a6014ef62b7c6ce5bfee1665"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "1ec6405d895159229213484ab3e75e14"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "5ef2b16cdb3f0cffe7b7940f814f0a7f"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "37765672efc857f61a47dc0b6e69e894"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "e48680e062e4674eab7b702b7b2b6418"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "bf673e4384479af461148dfacd73158c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "625084b8094713b9e40aec6ea13da4bc"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "e5dfd0a543fa0a1738f28ee5f3f9fa66"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "0fa252fd817219b8509524cc794975bd"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "1aaa7f723427165db1c85f198b285997"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "07e0cddb39a3badac1695a1b6f633fdf"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "ed3466b77ff21dfa6dcff3f090280713"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "da1be6174a6de330bac5e9b8a365122a"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "313441c5e5da906aecb99e256ba98ee5"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2ba421301c7f520d42a0fc271da592f7"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "491ff26489911dc2c66803c30c457e3f"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "7c8b96a8c4dcd5b518effbb57141a140"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "eae6c68e7a708c162ddeb0bae5e6db95"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "296694ceb211a424387959d8ac9efadc"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "bab6326e47e2a348658c6026bbd45b4f"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "bcf1648eb6ef5359807be81b93a3c8e9"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "fbefd015d64fa8b62d1c70edc5a804d2"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "742e3c77e155fa43c9ae99ba07fccaf0"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "dd4fcda702cada7c077a9abc9371537e"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "c1506d9fac1dcd8ff13a1af0e0fe036b"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "a5e4cecb67ca42daf4e8463db488fa41"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "05afae80750bd8fcf29bda9e334b1ff1"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "9f91ed20b191fb7c00f4378ce7b19c83"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "4d627bff8cbb3520d9e707ff60ad5dfa"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "03e0df1aa66704574b4796f3bcfb7e24"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "b93fa5c5e27ba9b2f2b9870ec33c9edd"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "f1e7319c8d137368649450cb2318cb89"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "d35eab41548c712db95a9c664304ea02"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "dbc875ee74ca42e7ea8c708f1467cdb4"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "667fb5815fff3e07d7cb7b90d8199c8b"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "2c1ec74dc45b5e5bbe71ea041bc1ae7a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1870ec842481900c94341fe0670b1b77"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "e2c562c842f56c731db48f4ba3aca192"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "570415dea020bab0eb9b58515e2cae34"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d9d62c807cd3bb86091447e1b2ef83ca"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "9a02bd428c74808755912d1bb24df145"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "f79733487fb9889fde33307f8b202b34"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "158a158047e2f808971c1d020352b18b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "88cbbe340e5b1cb952486a30bd4ae1bd"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8daaefc9dc02a20c470d5b3389e5f7df"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "5f72e9d32ae74b7c57bd00402e2542e2"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7a3153024c24aa3db0bf534d544afb77"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e81e5ddea98cd2c8b3423486fa7a9b89"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "698d6fd98bbb6de63ce20afc876e650c"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e994f97032df35f6daf61a6aed05b8e2"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "bfac8d586558348f6dbfc3c6293a9e83"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "21b5dd755031eea45da1adbd85e3a1cc"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "dfa24c6b7d34dcadc1aaab86a79b03ac"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "0cb2d5240111d3447f0c0ab8e4b233cd"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "510af770302186df7a0900c6aabf1d62"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "3e0a1a85109db44bd7b9f9086c066f6e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "75c17ab250b2b00fb82922b44d4362b2"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "7c9bb4e32a698459a03d7c55347acc76"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "852a36db3d1ca45640591c3c336f4834"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "931f01352d2601149c216b5522c18db4"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "70cc4b03563d4c8bd6997cbed5262cd6"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8fcbb8f6840b10abb0bac65bb9eba4e2"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "aac510c22f0ff8c558a18e296c52194d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "cea221290f419fa43b1dda63dc254c0c"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4cd66e9f68634984a40985cc72250836"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4b262bcb1e8748fcdfb644f934556f20"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3ad8e732a1bf8892c49dd10f172266af"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "0e5e9863cc30f851b2d87c561625f864"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6b6f7419cac44790c7e367b294372ac8"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "01b8489534bccfa814d0f6083d5f89c1"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "812864e1c991dcd4e9f973144f0ef3cf"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6293ab82a2b98e17fe7054b029f28852"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "231b0229a2ab54873ad90c644425d0c0"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "4d79468e3bbc0024677fe717bba40277"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "19c2f645ca80a9ba0002d1348c6cf656"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4e9bb8c76d35e8eaa8125259a94876c6"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3aa26c8024e0f15ef3779b31d697a417"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "809e2c293334451aeb51fba0a8a0b29b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "644a7ec531dcac0be5b60640ecc08409"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "bcc19c3cd8ffe1961d38a293923982a8"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d727b2049fed343ae9e8ed08e8ff59c6"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "bc060996e2b68845bf7c834a398aa07a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "e8d71228a6296d4e2ac3dd0d2bfccfb6"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "8adca06833bd579ada0a5a8bbf55c56f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "967c0d6c654955acea51b9b24bb27064"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e0c5bddcec85052d99e3e25f7a618c43"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "dfd791cc835097eac163462e7e57dee5"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "5fb231338dfa8f6fb96d9df2483a74c8"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "091e32248cc62ee64b2324ecf171883f"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "bb9338a0ce78094f6d207891824d3d92"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "1213ff483e53b6314fa9a7f18bd99ccf"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "08746764ff70a249c90fb841230e9e14"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b0d3041c033401cb6c0ab8264b375790"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "fe3349937cd95b954331d6bb972d53de"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d018462679f2865cbce4ff440586a260"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "90cc6527a8be875f7ffb7b9c0630df4e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "12cf002455371845f1ef083d507f153a"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "7b4ea05d4e72d3262d928beb751b2009"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "84ee1d8123e8926f80a002756c7afef3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "286e4b19621ca45cfbe5c865df3d7e1a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "95269d38a5b5c05345b2117f6094b893"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "407de51855a4e57163aae8a5fead7b12"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "675287dba3a3926b8a3e3956f5d3ad11"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8f5d010177bded9f545e121d9c58b72f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "de32df4b3c5b99d1b6d7d6d52c2ea9d6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f5da13f890096d8db6bf801d19baf961"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e13aacfb2040ef0419c833107946a55c"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "19cb1e0852305c4f5ef9ec784fa8ea89"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "096ca37a833744f3862997cce1dba4b8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "06c89e7751497f5b594b0eb177786750"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0ab164c4bb7cad8569b59d5386118231"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "3b747cbf93e37bdd48e22fe3be8cabce"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "3f524423771b2087f8cf82d45df521bc"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "3b13bbab4d2cc2c3de4dee4a5bf53732"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "8d64d371e3add610023c5d0453f567aa"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "86e9bc47149200b2ace994a6411de0c8"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "424fab6d3537218d1d59b0f85a0cb71c"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "defd654a7054efacf0cf4db6bffb9656"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "6f2bf5d14adc80eaf653995e9c1b253c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "f64fb1ab8c9f62319f44dfd1792c039e"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "650838fd476d49827703ebf30277c029"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "de8b8ff7dbae3aba1f10898377047e3f"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "d1e7d05fe82835d169d8d82c077705fb"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "a85168e6692d669cb690778af18a0f1c"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "21dfa77c72328c4acb22efe61ac874d7"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "bc9f173ac070d9e3426295210f0c4b5a"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "2e725d623535e80277b678a0409e2fab"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "e7faf0d6e5c1803c8079dc7e2917d435"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "52c07894e45bc9a9731045958249955c"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "f427edf4e0a35ec8320650f5f8740fe8"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "845438f247236c09f11c2d5bcbe052e2"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "a4ae7efb6e5f6cb3a7a47d400912e400"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "b9d55b9c550ba0d73602a1e40a75d775"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "eea0e503252d565ecd4f65ec4d8266fe"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "d0183987044f4fabbf7cfde1b4007211"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "68568fa49eebd0c77d0ec50dbfa031f6"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "f8b5f99a81581ace0d79e05e164b47bd"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "cddecfd8e441ea2be76239210179d60f"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "6c4b0ec6462368749b9f86ae81742c0e"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "b6bcb146eab7603840ac21f6c9bcdf51"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "0f45843be1ab7dbd0e4b3af8ab1b8b4e"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "c7160df9fbc74362c78266a5bbc960c7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "dd9069c43f385a49b0fa3b6b4ce435bb"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a836c48026dd9bbb276afa1937e4738b"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "c1a00182882b8a14aadbabb7c682e6b9"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "adeb8cf22a644c210567462bd12cd8e0"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "f205acb83fffebc22c6a1febf832f9c5"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "a3b88d49fde458425f1ecb3f59911b04"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "8b3fa9813c9eb8f1ee43af00b9bf2822"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "05a1665180a12a121b8e746f514318e6"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "59f3593528e2716a8e0f9901860d9caa"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "0c0fc56460bd12d97718c6d4b946cfc9"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "bb01edeb02f6053bf701273a801e21e0"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "2acc6929af60f42096ef469da3544192"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "1cf6ddd0eef3878d80ac651bcba67a1f"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "30ddf199aaa06535e0b232c42fab878a"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "4134a28cf83fc04cc224e82796d1a2d4"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "a1d8dc69d52c82f81581e013e9f6e92a"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "4bec5eb7d9569cd939e51fe5fc6eff18"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "fdbe291ab5459a5576cf54727c59ce8a"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "268f4f6905de410eac4290480a2fb315"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "6f799d0aa1dd8eb347903ab38448ff5c"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "8c7f1f9b6faffb8807fb7e9bfecb7b30"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "74ed51b2c7e4d780cfb0ba0a9a4fce3b"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "a2c263f15ae7865c5598220d17565bc2"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "a3bc865970d723a5c1fe5e7e97b02537"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "2673df5a5ae21b4a2880ae35877572d6"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "8a9790a2d9ac40d4e5ee12da8c70b00e"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "387d37ccb14a30fce0f3dd910971793f"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "4f666727e222713bd74b283ca96a98bc"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "7266d999a02caab0389ec9da8d387afa"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "dd98cc0162779b23e2a40fb7b0fb00c4"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "4e099d78c987ab77adf8ce7b285772cb"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "55c66ae85150e9939a6587f519928949"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "7452b2175c5c93a5ae35ef8647420683"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "7d8b9ba5a443207bfe322a430a575eb3"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "091c7b8fecedf3e14e73a8cc47fc14a8"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "980160b31b4ca5be69e8c2665806d6e6"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "771480ed0cc266c546e8676746d2732c"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d2e002b1fdea3b0c4aa7457e762fdf9d"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "6bfad61a3a930850693c0334b4bbc46b"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "72679a29dbb65cd30f4dd71bd00ba365"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "ee9ba1bc248b784d4dc76ccb3f0bcdb0"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "9eff15e19fcb7e8028a4438a0bf500f4"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "29e9d4aadf5a3535998289ed2a560102"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "9463514d460fff3d6e6d123b377e2af6"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "154821515eab0958bb47776a15193806"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "b881a81c1e3b6be102e66b4987e7a7b0"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "2a121ea0c25b1c4be10f311cc057ba0c"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "eb92ef185acf2afbb9cd8b2b0169cd4a"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "116f9b2626b1485ba17a5d528fb54a00"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "8295fb65ec8468467e306ba8a1d9cd37"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "534a69d3a649d4a73e24ecabb8eb7ea0"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "6f9fd6f3a1ee6621329cb3885fe5fa21"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "882cb734b20ec053cdd8bb3a4bec8910"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "dfa2d5e73ab0693e68dccab0d0826146"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "668d663444be2f969b194f06614c3fa8"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "683c55814f797db56525f991ccf81ba4"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "4e47ff4002c7182cf1c1037b5ee0eb1f"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "f462e64dc4c6c113e671755671640935"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "8a895ebebc9ef94b8b075c184f5d9a9f"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "040e6b72182e17abce128d7fd881d9ac"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "9c8f32c7c1e9bd683df450492fd5bda9"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "df3d12a26330d139c0b4c50f9ac86474"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "2cb82ab9c2aba24cb0ca38f5f043e513"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "f2d4ca3730a879fda2faf15a79cc01e1"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "b705992145ccd85375068a1f2892e704"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "23ef0e14555cf00dbcfc862cbed85553"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "ff1c6e3f1d4eddee3af1a9ca418c75ab"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "e5c01dda6d104107c4c3ea65b9dcdd50"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "ab0cce2a27379f1db4f4ead970c2d707"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "2343b35799c8599c0e803f557f33554b"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "cc65bcea035283fdbb7a1d862e8d9885"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "e64daf5b12ef4e65ffce6f7719c02018"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "3384f0039b52cb66d7874d7a9a46c1f2"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "e4a55bb10b56e224286501999cdee024"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "02e6ea8373cd09f17d6cac7d1906c438"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "0449387a7e3e72732a47e65e57a768e1"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "6d20f143479726855ee4d767be6fe199"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "051204989d5d0e1414d7c787d2885181"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "39e448c2b607c4c3f91880ac0bed6d3d"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "955dc5c1a2b5a28d651002c26ddd13a4"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "4851b9a19b9aa9c7a77e7eb26b1e059c"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "737308150be85087048a7c43cab67941"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "68f25b40590c8bc6c04cfa32dd0a9818"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "09e3951bad4eb6e7288f6fcad8bb1e67"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "8c232752f95e9ae9a5f2f72f5c332b36"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "03cd737338cb7ffc197be37b64235d70"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "d85697ce5d0ccd5fb54cf054e64b717d"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "a37c52c2e4c530c69fb7691d8e3ab6e3"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "aae861238171651e4cba083ce8a4810f"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "3881822e6d714dde40265140b383d31b"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "81d3d13baf6782e979ce1505de6123bb"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "4fd77079727c8a10b69b4c13aa23d819"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "d8706dcf2c778c8f2dfe944052071365"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "4f0d1c1b2cdeb98d108a6dd2c5585349"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "bcba7c1a39e1598afb6317815b252787"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "fd845af4cb9d526c3cb6a6c02c1c3a06"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "d1be42441cc16e0df97486e344bf48a3"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "6643baafbe0c93965ec10746500fa8af"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "c38f3a43def5b3cf5899dd8e20d04862"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "1b168278970191690a712b606f6e977e"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "c32edaca5a94ff9ab2247fb14f24e24b"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "0f3e5d4c7647ae3be7bfef666701fe10"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "204eb07c37f7e48d562517c2b35b4407"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "b009ecdb5badb91150773e29304c77b1"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "a84f6f9ab4e9fa1753477938b1c59375"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "7e940408cfd90324d890b56dcdd37ade"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "bc3a741e670894eee452bf4da368de1a"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "d9081ce924dd26087fba771dafb2a058"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "22df86caab260e124c634934d0af7d17"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "ec820c9707803cb190009424443e8f84"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "a304820c9e1d8371ffb7c30dc5ee1f9a"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "9180d1980c3ffca660951ad95a553f5d"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "d59824f1bad3a2eb1c4c25b9d09fd5d6"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "3abad8d168dc1b1fb94b9d16bfe00476"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "22e9ae2946121ecdca0fab2d5cee55db"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "b623fa8ef0d23d4cf99bd85fbd1300ad"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "dbf603f8851e35758df525308c369326"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "10c1f93ed9e5a49693b1b9d24af38f24"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "42dea9d13ccd4f9f22c5070a41e95904"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "234b53c42f7dcda9e3026e293d3bd3cc"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "90ae618ec815f11b48c9aa7cbd48d8f9"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "ee4a30ee5c072d065d54cf1b8dd62274"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "1d5e44824d83695ded55193f2e6f58a2"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "9a1c3e19fc2b862dcdadaf6161f51a81"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "6d1a10024690731705536a0465c2f5f3"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "6c8b75c2d9783bf139bec01c69bf9aab"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "dbe8c6ae2347e78df5eb06f102b04719"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "ff3e4715c64839afbae87cbd164ec208"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "619afe0a455613f3f9797fd1adc1ddf4"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "dc1d8084d2dd1d3cccb1df0bcb29b009"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "bb9a8b778141dc4c3b937037389b09cc"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "a9144c84749969ee49ce91403a1100d2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "2d3df70483fdb2209314d00e17488d50"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "24f4117fd666e4a59954cdcb05b3141f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "846c22ed176dfb847e973ade3c1141b1"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "f2db03a46587093e58d6b237b320cf16"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "42aa34875dd19673e64fd5589e455ecb"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "0809fc5649ef7f46a6d9511933578b5c"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "38db5b9b6dfa9623132f8f5c26cae892"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "6206f9776f0553ea18133c0b39c62eed"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "88f9f89f63f61379ef187ee53154c817"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "1c0ba12b2393caa6ff0aa84d12abd5db"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "a5cbb9a0e8240459b290d994ed7dca94"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "1776e429251292c66c859eb058a1827f"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e24f017c15b87eec6ff2744c64a99041"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "2d1055889da5d984771c9569e5833f0b"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "a3acad936da9249a28a8bc7b5155b6c1"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "75513bbc7a4d275540f573c71e08f261"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "e1bd18769fb3ef5f29b2f184296b09ee"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "e7d2471b7189f30650eb371e20d0dc71"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "213d1442cbd07d1ffacd4d6071cb96ed"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "5c4917ef364544be69f2526f044b8fbf"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "67d3fea2ed98355e372a7bdd83cbdc35"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "bb9b6a0522c305599c3b35602bb1ec59"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "8ec7b326edb64a4d5fdcedf67c1a34d1"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "5dd615b55db814aeb9412de28959e3a7"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "232508bec1c1a69db8a0168283cd8585"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1046d0741a5f8d69026e3a4a945b80a4"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "53951c587a11a20947bb55fb96259345"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "88b52be9bc161b20f6462e0fa0133d22"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "e1b3f16307ed93bbd27bc8ee97ec36bf"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6eb65e92040c6f89ce3d222e8db401d1"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "93e9db916958473403588965d410fc18"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "9e0563531fa5570585b3c47a7b11c514"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0521c674d2b5181ff70004083a4d4afd"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "9e0076324a066984042a024cb04d4e54"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "070d48ceda6c95c26dd83d1b9200d370"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "35345b08212b0290103e0d7a9435d0d0"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "2742fa18abf87b05c97be0675af6549e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "bc9bd645396b8144ce0c757468cf9d2c"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "b12ac78b0876af5f53653d10a8cad9c7"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "6adea14b26de833586fcc6f791fcbc17"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "2b9a11c5d77c6dccd8e0437064e3818b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ffee3bb5a4ac10620be1ee46b25b9dc0"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "73a9c6678588d0339c8975da26f99518"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "7a14feaa71ab946d8ff10c0cb5294151"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "0e3d88a8e06c6b73d370ae672cd3dcba"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "ffe0ee29c595139ed7aa45be2676fa91"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "466a5725be560df082992ea47179f089"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "8cc2c2d1cf7a005308edbe5b3742c98c"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "6954175a9f0c7314bf52ba0b3e524b34"
  },
  {
    "url": "404.html",
    "revision": "2b24dae7e3ecbe04c427c2956f507839"
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
    "url": "assets/js/101.a819f732.js",
    "revision": "a7f07f4d3f5b57c0fb2eb72c2290f25c"
  },
  {
    "url": "assets/js/102.7c7f89a0.js",
    "revision": "d53efd4a42ba6ab1b97b3c6bb4c24f7d"
  },
  {
    "url": "assets/js/103.ed13c17f.js",
    "revision": "e85112f7f1a5f37386cc0ed7c7e2d773"
  },
  {
    "url": "assets/js/104.eb0dd0c4.js",
    "revision": "102b96e4aaecd62ce6f9500fb48ff64d"
  },
  {
    "url": "assets/js/105.9a125139.js",
    "revision": "56fb9a22244346dc512760923c6d079c"
  },
  {
    "url": "assets/js/106.f1b1c4d3.js",
    "revision": "64f1309c86dd257b8ffcddf0c41ea37f"
  },
  {
    "url": "assets/js/107.fe60e6f4.js",
    "revision": "1ec6005d7c8feebf99da03b6060e3cea"
  },
  {
    "url": "assets/js/108.837bbfbb.js",
    "revision": "0596b0ebe767fa6c4b2c273ffb875319"
  },
  {
    "url": "assets/js/109.27d4dd18.js",
    "revision": "69f3b3621a1921e6fde2b689c2f61b6f"
  },
  {
    "url": "assets/js/11.bec7ea47.js",
    "revision": "de869bfe547e31a9956a5be16b80d9e5"
  },
  {
    "url": "assets/js/110.cafd1b55.js",
    "revision": "67660b3d2503a25ede537d7209bf1fe1"
  },
  {
    "url": "assets/js/111.5333766c.js",
    "revision": "02782dd77f4ff9ccd047cbbdd076dbd5"
  },
  {
    "url": "assets/js/112.7dc2ec56.js",
    "revision": "ecd1b8381acc976ea8813bc435e91971"
  },
  {
    "url": "assets/js/113.d5479124.js",
    "revision": "96492a4f27039678377b89952f14ceb6"
  },
  {
    "url": "assets/js/114.cfe8338b.js",
    "revision": "392ebada95610d810f14960c1576a314"
  },
  {
    "url": "assets/js/115.032d9350.js",
    "revision": "ea72f03d9aceee807ecef3f74e475c89"
  },
  {
    "url": "assets/js/116.90b1951b.js",
    "revision": "d0564f72b539f91aec95a64194e55482"
  },
  {
    "url": "assets/js/117.74191023.js",
    "revision": "06fd16f59945c6ccfce94ac3215c082a"
  },
  {
    "url": "assets/js/118.bede2e12.js",
    "revision": "a1f01f4c60c5b02d08da351cb0ca7b1e"
  },
  {
    "url": "assets/js/119.aaa5b1cb.js",
    "revision": "c6912a79d2d5476bdcb17d2896763d09"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.f1172aeb.js",
    "revision": "06ff66ca29c3b4475c7c0ed908dbec7d"
  },
  {
    "url": "assets/js/121.f2231bbb.js",
    "revision": "6304c2117887f60144abd240113d772a"
  },
  {
    "url": "assets/js/122.907c4e7d.js",
    "revision": "c869ea5de07d9a43df68bdf53a3df912"
  },
  {
    "url": "assets/js/123.5d8fe972.js",
    "revision": "f1ab43decea64e65fe27d205d8c7c77b"
  },
  {
    "url": "assets/js/124.39b0f6e6.js",
    "revision": "e08ed7d1a9b4cfb5d6202c484d8d717c"
  },
  {
    "url": "assets/js/125.67cd47eb.js",
    "revision": "b12958baa4589a90eafeefded696ed2d"
  },
  {
    "url": "assets/js/126.08ddf7fb.js",
    "revision": "ef34b812f6572360dd1a3ad3ee14a57e"
  },
  {
    "url": "assets/js/127.6bceee9e.js",
    "revision": "55daf04c351df5e5bb6bb9aa5be8b7fc"
  },
  {
    "url": "assets/js/128.85e55e06.js",
    "revision": "d3b9806cccf06eb7ed7366ba048bc7cd"
  },
  {
    "url": "assets/js/129.51ac3946.js",
    "revision": "4b1376cb3e1d1b91ef8836321f87a02d"
  },
  {
    "url": "assets/js/13.f3c57943.js",
    "revision": "9a66fef8ed960925bb09b16eefeebaef"
  },
  {
    "url": "assets/js/130.444706a3.js",
    "revision": "a90a7822ff2ab6ae1568fa55e34ec179"
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
    "url": "assets/js/133.f5b42643.js",
    "revision": "aa6879bdf007cee8dd86fd01327d7320"
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
    "url": "assets/js/136.aab3a2a9.js",
    "revision": "cdaa7c7715c1465da65fc876f8cfaeb6"
  },
  {
    "url": "assets/js/137.0bea76bf.js",
    "revision": "7aa8b24202003daf46dd435608d743f1"
  },
  {
    "url": "assets/js/138.ebaa95b1.js",
    "revision": "d5234ca769187470af8c4318eb7f799a"
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
    "url": "assets/js/140.f57891f5.js",
    "revision": "15100cce41e736a759091730e97dcce6"
  },
  {
    "url": "assets/js/141.176efd98.js",
    "revision": "2e6e10328c8eddd39d3334f9b2f5e1dd"
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
    "url": "assets/js/144.39362c1f.js",
    "revision": "83e1551eecd1d88a06b349d24215c0b3"
  },
  {
    "url": "assets/js/145.6647f343.js",
    "revision": "94d719bf9451927b26bdb8dfa2e7dc45"
  },
  {
    "url": "assets/js/146.6687bedc.js",
    "revision": "96bc1282968072fff60d198027599d82"
  },
  {
    "url": "assets/js/147.cb6652d0.js",
    "revision": "2b3c4a0d9a4221d46465fef6d2792ef7"
  },
  {
    "url": "assets/js/148.cb3159e8.js",
    "revision": "d15c003537385fcb2ccb5fcaeece7a9b"
  },
  {
    "url": "assets/js/149.c09f8a15.js",
    "revision": "795285bb961d55574c62c73e9e9beadd"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.57805f68.js",
    "revision": "e0899e6bb19333a67387099506e1c752"
  },
  {
    "url": "assets/js/151.623b07b6.js",
    "revision": "50991db2f728b86704e425be8495f380"
  },
  {
    "url": "assets/js/152.bf038a6c.js",
    "revision": "58add3e839f11624e7c489a6d3356546"
  },
  {
    "url": "assets/js/153.852e2adc.js",
    "revision": "3549c380c4fc63bf6d6473b63bb83519"
  },
  {
    "url": "assets/js/154.c41328ee.js",
    "revision": "809e14da18798d4ec8129e82c9dd67a7"
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
    "url": "assets/js/158.26ec3d5c.js",
    "revision": "f3881d4c0f0bf5cf55ffd94de3bbb645"
  },
  {
    "url": "assets/js/159.fcfa2372.js",
    "revision": "224dc834e4e394e7e2eed979f3a63ced"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.4e46fdbe.js",
    "revision": "83418efa5c48361ad4770a25de54f33c"
  },
  {
    "url": "assets/js/161.e3895a09.js",
    "revision": "fb85072f9c50edd3777d5f577141fd36"
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
    "url": "assets/js/166.7ca96344.js",
    "revision": "b4c0df847fbdc65146c441b989d2e0f9"
  },
  {
    "url": "assets/js/167.7dfa6986.js",
    "revision": "7b7665ee6d10b993a7cdcef48ff46fb7"
  },
  {
    "url": "assets/js/168.a31d8f87.js",
    "revision": "91aaf4d903d53218f7111fe1fb946f87"
  },
  {
    "url": "assets/js/169.fdebc1dc.js",
    "revision": "c6028ede18fc16101c5959ca256ee4ae"
  },
  {
    "url": "assets/js/17.3821be84.js",
    "revision": "9bf3065d839ef47fc3de6938e2b7adc6"
  },
  {
    "url": "assets/js/170.0a5908ba.js",
    "revision": "1f922ad860e5762b1c83a4ea1c2f1478"
  },
  {
    "url": "assets/js/171.09a0fc2d.js",
    "revision": "32c4aa7a098b32439cd699611603fdde"
  },
  {
    "url": "assets/js/172.93276a26.js",
    "revision": "2a4f89618b0ad748091087be0e8bfedc"
  },
  {
    "url": "assets/js/173.45437ea7.js",
    "revision": "b7ab320c8ccd6d10af59b058fc4db44e"
  },
  {
    "url": "assets/js/174.99d44f67.js",
    "revision": "111069b4d46beb21d8215e91d7e67328"
  },
  {
    "url": "assets/js/175.61472f58.js",
    "revision": "ff78d1e93f3ae619f026bf72485f7cea"
  },
  {
    "url": "assets/js/176.6939f650.js",
    "revision": "c97ea8af706d6dc7d73221ee7396a968"
  },
  {
    "url": "assets/js/177.1f216ad1.js",
    "revision": "848a29f545205c71b31c0fff3f0e2138"
  },
  {
    "url": "assets/js/178.98f38ba2.js",
    "revision": "01bcd673fcd6527ab3c666754e39bed3"
  },
  {
    "url": "assets/js/179.1db0ad09.js",
    "revision": "9279d45838cdd4e522c94bda2c7b99a3"
  },
  {
    "url": "assets/js/18.0d308363.js",
    "revision": "b1374d5baea8dd1711ee32d79d177505"
  },
  {
    "url": "assets/js/180.68ae4bec.js",
    "revision": "e3992c0e2103a90458a2d072ddc3f4a1"
  },
  {
    "url": "assets/js/181.08c9cf4d.js",
    "revision": "7822eeb34a9f3b60c5712b5ecbc1332a"
  },
  {
    "url": "assets/js/182.70e479f6.js",
    "revision": "4164ff6c004fc881ce0fb532e3e8a879"
  },
  {
    "url": "assets/js/183.8b7729c6.js",
    "revision": "44c88d98a523c0c49bf8d45eee85e1b7"
  },
  {
    "url": "assets/js/184.9e326b60.js",
    "revision": "2439967d13702c831ddf994a3e550765"
  },
  {
    "url": "assets/js/185.792b0792.js",
    "revision": "290d5f825e95c08e8abab2fb548e0d4f"
  },
  {
    "url": "assets/js/186.2bf9953d.js",
    "revision": "41ff705705fcc0e6fcbbf8f0e7246a65"
  },
  {
    "url": "assets/js/187.3bca26e7.js",
    "revision": "caa59618d62cb19058ed4466fee53397"
  },
  {
    "url": "assets/js/188.726d933e.js",
    "revision": "bc925088d1cdd7efd6921ccaa4cb9ec5"
  },
  {
    "url": "assets/js/189.13e20e74.js",
    "revision": "eb908d453521e7c5ecc3d5d4f46a3082"
  },
  {
    "url": "assets/js/19.b4d6b108.js",
    "revision": "9ec240f96bc78ca28cb2ff1cc1ebbea6"
  },
  {
    "url": "assets/js/190.d2fa924e.js",
    "revision": "c58172f618dd67022cf24beeb0b0cacd"
  },
  {
    "url": "assets/js/191.2da514a8.js",
    "revision": "7eddb29b0acd0e644c0e8e611bc838f3"
  },
  {
    "url": "assets/js/192.ff19ba7a.js",
    "revision": "544e4ab93aa1c83055deff5a280e6c06"
  },
  {
    "url": "assets/js/193.585546d4.js",
    "revision": "90fa3ce76c637e83981a045469cca74b"
  },
  {
    "url": "assets/js/194.0ed705bb.js",
    "revision": "5e36d452480e6ee742aa21c206bf8d7a"
  },
  {
    "url": "assets/js/195.0e977e85.js",
    "revision": "2d02f415cebcbc73a3fccda2b61cfca6"
  },
  {
    "url": "assets/js/196.ac46c8ed.js",
    "revision": "ff859d504709163ca22002d7a3e71b42"
  },
  {
    "url": "assets/js/197.e215fddc.js",
    "revision": "d1e14ae9b7a0426c99cdb3707dddc6d3"
  },
  {
    "url": "assets/js/198.ddd2a278.js",
    "revision": "8921bbf1af0faf2971e15541b2a089c6"
  },
  {
    "url": "assets/js/199.7518db2b.js",
    "revision": "b45b93422e13eb38cebe8789a9959282"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.09fdc544.js",
    "revision": "a0de66e6659d97e4760f1555e796f1f6"
  },
  {
    "url": "assets/js/200.101119c7.js",
    "revision": "cf21d06f618b4dd01c8152f6f412e54c"
  },
  {
    "url": "assets/js/201.61bc1d0c.js",
    "revision": "59bb1b20c7a5cb14fc51470bba5780cc"
  },
  {
    "url": "assets/js/202.0daa629e.js",
    "revision": "ec0ac8bd0f61962bfe4519ad1452ca5e"
  },
  {
    "url": "assets/js/203.fa955d53.js",
    "revision": "6c3bc8eb9cfd72e526b2cb8da1153f15"
  },
  {
    "url": "assets/js/204.6674efd9.js",
    "revision": "487b24a6449be39f35f0828149358775"
  },
  {
    "url": "assets/js/205.af8e0479.js",
    "revision": "3e5257e0384d4801f42019a1a903353b"
  },
  {
    "url": "assets/js/206.c9056ce7.js",
    "revision": "12713048c129624686892c8d55bc07f9"
  },
  {
    "url": "assets/js/207.4c936d58.js",
    "revision": "c4281bbce712a691ca40288d08e401b3"
  },
  {
    "url": "assets/js/208.42b802cf.js",
    "revision": "68b3f95ba6bd1ed0184eedfd83fe3c80"
  },
  {
    "url": "assets/js/209.18f2a842.js",
    "revision": "f9140433712aa1ff1932978240b6b869"
  },
  {
    "url": "assets/js/21.18e1f8b6.js",
    "revision": "dc4f6ede97769240f5f329c48b00372f"
  },
  {
    "url": "assets/js/210.97bd2493.js",
    "revision": "d2bdc1bec2d0594fff4d1a486292851c"
  },
  {
    "url": "assets/js/211.20e6198c.js",
    "revision": "19a0648c79a8dc51d5beb6cc0a7106a8"
  },
  {
    "url": "assets/js/212.234ab6a3.js",
    "revision": "d54f7c80b621f882219d9c92297a03e0"
  },
  {
    "url": "assets/js/213.8d1abdde.js",
    "revision": "9e9d82d0f6eec51f4d4f48018fcda343"
  },
  {
    "url": "assets/js/214.67629b43.js",
    "revision": "5a3bf8d977b5f41443485246f62fa3da"
  },
  {
    "url": "assets/js/215.287f4228.js",
    "revision": "a4ffa574a383f793e6c0635b313b9f13"
  },
  {
    "url": "assets/js/216.347c7191.js",
    "revision": "290f7c5aca1466ea6fc321234fe49300"
  },
  {
    "url": "assets/js/217.4e6a8795.js",
    "revision": "aa0220cf1de79a596418e1dacd54e85c"
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
    "url": "assets/js/220.98208cb6.js",
    "revision": "900b35272503fb9b35c3ebae26596234"
  },
  {
    "url": "assets/js/221.5137d19c.js",
    "revision": "217e71d400cbfcaa11692a9cf9c8f84d"
  },
  {
    "url": "assets/js/222.3d0cb53e.js",
    "revision": "c93f053c0570250f694dfff03ca39f70"
  },
  {
    "url": "assets/js/223.765e16f5.js",
    "revision": "03615c1008a633a9a7f7d82ddcd223c1"
  },
  {
    "url": "assets/js/224.135e48d0.js",
    "revision": "28432bb669818725a5afb0ab99cb9c2b"
  },
  {
    "url": "assets/js/225.a94d93bb.js",
    "revision": "4c8890bfdfd1701de44ce04eda806847"
  },
  {
    "url": "assets/js/226.96153fb7.js",
    "revision": "469ae624b19548ec03cc573e8faf67c6"
  },
  {
    "url": "assets/js/227.85cb7f95.js",
    "revision": "0857ec47c23fa440358a9d12c67bf410"
  },
  {
    "url": "assets/js/228.0400d1ca.js",
    "revision": "8e2b2a7b9673e733f1a0629444a46cfe"
  },
  {
    "url": "assets/js/229.2c413bf5.js",
    "revision": "e5b3c825eff03d9b76ece712682dd881"
  },
  {
    "url": "assets/js/23.35bf827d.js",
    "revision": "a6237424347020dc04196dedb49c39b4"
  },
  {
    "url": "assets/js/230.6de05805.js",
    "revision": "458164faa76db6ca017cedb507d81261"
  },
  {
    "url": "assets/js/231.698b8d7b.js",
    "revision": "b444723e9312c1d1a62d25638475e7b8"
  },
  {
    "url": "assets/js/232.edec4056.js",
    "revision": "1add00cc462c7e1b12c101cfaa30b8d0"
  },
  {
    "url": "assets/js/233.2a9370c3.js",
    "revision": "8cfc3e85240a2a91abd778ccaf2d86de"
  },
  {
    "url": "assets/js/234.36636bf1.js",
    "revision": "bca100372abe152313ff72f8de6dc384"
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
    "url": "assets/js/239.edb58bf9.js",
    "revision": "ae0ddde70fc245cf30833ea3d2635c8e"
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
    "url": "assets/js/241.e79b1861.js",
    "revision": "d0f0c8469ffd55f2a60b81ae3272e76d"
  },
  {
    "url": "assets/js/242.46c013fe.js",
    "revision": "78fb67393267c94bc00adfb7c5db6266"
  },
  {
    "url": "assets/js/243.5a21aabe.js",
    "revision": "92bd14335c5b6715fc1b3500174d3071"
  },
  {
    "url": "assets/js/244.236f18e9.js",
    "revision": "f6f6f7a9f2e68ebc8d23f30a3098bc49"
  },
  {
    "url": "assets/js/245.d0c6c188.js",
    "revision": "fb0bf545696b92dc143c0b161c2713d8"
  },
  {
    "url": "assets/js/246.5674ddce.js",
    "revision": "80eb417ef4d9b1f35222a97867646908"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.5e052563.js",
    "revision": "06affde6ddd5d7012b56a455cca8b1e0"
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
    "url": "assets/js/250.e6f413d2.js",
    "revision": "fca3368e26780749e7980d047c7e391f"
  },
  {
    "url": "assets/js/251.794bcdc0.js",
    "revision": "1398b97e863d5670e748a733b074105a"
  },
  {
    "url": "assets/js/252.26fc4d78.js",
    "revision": "55ec11be7495b07fe3f2b218b78ada27"
  },
  {
    "url": "assets/js/253.ec58e108.js",
    "revision": "398b7d6beec661d71d002b5343d31a25"
  },
  {
    "url": "assets/js/254.1ddb7519.js",
    "revision": "109cb7bc4d1b607f8c01985d9925eb72"
  },
  {
    "url": "assets/js/255.918794f0.js",
    "revision": "96c9c59eb898fc61608446f3670851c7"
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
    "url": "assets/js/259.ccf16092.js",
    "revision": "91adfd2bdafd6a087378673823372233"
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
    "url": "assets/js/261.72352ef0.js",
    "revision": "16a9ded58b1410e4256dffa37bdcd18d"
  },
  {
    "url": "assets/js/262.4949f1c0.js",
    "revision": "5f4e60000360e35b607249cedc1f10ca"
  },
  {
    "url": "assets/js/263.b7081fd7.js",
    "revision": "02fc2684f14135323aeaf7ffc13c7135"
  },
  {
    "url": "assets/js/264.02a5377e.js",
    "revision": "2abebe78d0e96c11d4204969ce46b530"
  },
  {
    "url": "assets/js/265.f94c9113.js",
    "revision": "a04c0de49968e0717da1c8aa8cf68466"
  },
  {
    "url": "assets/js/266.1710707b.js",
    "revision": "3bd05d4d0af11cf962a73cf9666e05a1"
  },
  {
    "url": "assets/js/267.b7385204.js",
    "revision": "bdac2c36c83f4b3d1931abac9e73312d"
  },
  {
    "url": "assets/js/268.70623057.js",
    "revision": "550dd28413061eff5b306ee1e1fee0de"
  },
  {
    "url": "assets/js/269.0cdc8cec.js",
    "revision": "844e6129f908ab7a87f9d59949fac7a7"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.db43b57d.js",
    "revision": "2047baa4ef868a397a800773ef0a9cfe"
  },
  {
    "url": "assets/js/271.6ae78967.js",
    "revision": "64e7ecfea6a6f5391be22b2d960a8bdf"
  },
  {
    "url": "assets/js/272.05000fa6.js",
    "revision": "bb898c3f033a1de786b0c0c878867aff"
  },
  {
    "url": "assets/js/273.64fb9c55.js",
    "revision": "b8501263e9514eefe7c0c59cf9eb74e8"
  },
  {
    "url": "assets/js/274.097415f2.js",
    "revision": "41154f763a42036daf6f9aca547fc01a"
  },
  {
    "url": "assets/js/275.688e6d58.js",
    "revision": "d0cca5e99c80ec29eaf6e047a356296a"
  },
  {
    "url": "assets/js/276.733eb484.js",
    "revision": "3c365c7b5e1c12396f7aa97bd9d612f5"
  },
  {
    "url": "assets/js/277.94bbce46.js",
    "revision": "982b32b18a84a25153def0c63f832d32"
  },
  {
    "url": "assets/js/278.8f673279.js",
    "revision": "9ef250b5139afb0e264d14e49fd391c7"
  },
  {
    "url": "assets/js/279.7d17a70e.js",
    "revision": "f2eafbe856c0003f87cc5a648c324867"
  },
  {
    "url": "assets/js/28.95d5f6c0.js",
    "revision": "ef1cdee21a78063770b725f5b1d626cc"
  },
  {
    "url": "assets/js/280.636652ae.js",
    "revision": "372e232f698432ba61802e3e7b157db0"
  },
  {
    "url": "assets/js/281.28c4ede3.js",
    "revision": "e4ba7b50e27385aafa1877b83e8017e3"
  },
  {
    "url": "assets/js/282.eec7580d.js",
    "revision": "3055f510eb4ed585769e0adf8929c849"
  },
  {
    "url": "assets/js/283.4ab42e4c.js",
    "revision": "11e59b479cf3df4823ddc18c1ad7d2c9"
  },
  {
    "url": "assets/js/284.9620cb14.js",
    "revision": "746428593c928488db5a1ef57fc21fbb"
  },
  {
    "url": "assets/js/285.cc83cab8.js",
    "revision": "0248a781bb18aa670edea6368e8df07b"
  },
  {
    "url": "assets/js/286.a289f091.js",
    "revision": "2b003fd7e0aa29473e6489af1c28e6dd"
  },
  {
    "url": "assets/js/287.9ac11b1c.js",
    "revision": "3e3eed507b6acbc83b1a803dbcad67ac"
  },
  {
    "url": "assets/js/288.641a254f.js",
    "revision": "4c675c50318da7370bf6183e7e55982f"
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
    "url": "assets/js/290.ad4b1d2c.js",
    "revision": "3db2bf9a5b84228a076352e187bf5458"
  },
  {
    "url": "assets/js/291.2c023d7a.js",
    "revision": "965466a5b9a49da35214400b1ab6ab1e"
  },
  {
    "url": "assets/js/292.f7376c1c.js",
    "revision": "e755f6e707bea3d6490d4bf62c87fae5"
  },
  {
    "url": "assets/js/293.bb91baed.js",
    "revision": "edee5c76882d162b7ca98880429c0626"
  },
  {
    "url": "assets/js/294.ca1423d9.js",
    "revision": "825ca873dd25068d4de3a7c1d73d0253"
  },
  {
    "url": "assets/js/295.49ae937a.js",
    "revision": "452a1d4273c6dfd371b6ee65cba145f5"
  },
  {
    "url": "assets/js/296.0d11c7ae.js",
    "revision": "e68c2e2dc4fd864267739bc19a62b4c2"
  },
  {
    "url": "assets/js/297.4f4c0874.js",
    "revision": "e624b7ad892937a3ad976feea3f746d7"
  },
  {
    "url": "assets/js/298.5d27f87b.js",
    "revision": "ba229857b8d439f6825bf07da1b13682"
  },
  {
    "url": "assets/js/299.785648f6.js",
    "revision": "c865cf5946bcdffe2f29eb4d6a73979d"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.23780733.js",
    "revision": "2efb2dda721542023fff9d47fe4e049b"
  },
  {
    "url": "assets/js/300.cafe4736.js",
    "revision": "0b23382aafb0179758b385af7a0bb776"
  },
  {
    "url": "assets/js/301.710ec844.js",
    "revision": "cb21f6a35d82a2642582257741f9b717"
  },
  {
    "url": "assets/js/302.6558b337.js",
    "revision": "27debf1d969494ff83d3148edd0921fd"
  },
  {
    "url": "assets/js/303.131c6172.js",
    "revision": "e53146205947b949912807b49c7024b6"
  },
  {
    "url": "assets/js/304.f1a32ce7.js",
    "revision": "55eb1d6e236355a549e6f3787a820aad"
  },
  {
    "url": "assets/js/305.3702618e.js",
    "revision": "9926fadd9e3bb3c1ede1f1f2a38492d0"
  },
  {
    "url": "assets/js/306.3df5f4ee.js",
    "revision": "2e3ac255e7605a9613bf2f853d020b5a"
  },
  {
    "url": "assets/js/307.f7294b69.js",
    "revision": "8df584f22fd7d35480bb964222aadf8e"
  },
  {
    "url": "assets/js/308.97419ca9.js",
    "revision": "5181d01146a43feda27c4b824ee19941"
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
    "url": "assets/js/310.4ebb4107.js",
    "revision": "eaa834e3222b0859d10bd580f9217f98"
  },
  {
    "url": "assets/js/311.50cf2bde.js",
    "revision": "259036d6dcf4315c732041f3a5ee364b"
  },
  {
    "url": "assets/js/312.80a94705.js",
    "revision": "504b4524ab6a68de2a3f532185c3fce4"
  },
  {
    "url": "assets/js/313.8a6619c8.js",
    "revision": "4665ebcc49c172b45667cf2b0bca04ad"
  },
  {
    "url": "assets/js/314.aaade4a5.js",
    "revision": "86fd86e7204c242aad4c4f4c93fbedf7"
  },
  {
    "url": "assets/js/315.96f475c6.js",
    "revision": "7ccc40f95ddebead8f4bf553e6846a7d"
  },
  {
    "url": "assets/js/316.a6619468.js",
    "revision": "2d3460b6629ee89a4374590a1ce8cf3a"
  },
  {
    "url": "assets/js/317.06db306e.js",
    "revision": "70b147b08805fb575ea71c77470ed291"
  },
  {
    "url": "assets/js/318.8fa699e9.js",
    "revision": "f6ef769b1bf9cd3613a4314caf32db0c"
  },
  {
    "url": "assets/js/319.959a8736.js",
    "revision": "1ea7e15377a3d1eb95abbbccf360dd93"
  },
  {
    "url": "assets/js/32.bb0bb275.js",
    "revision": "3c8554b6c3b2c2abd81dad73c770c100"
  },
  {
    "url": "assets/js/320.43b48e74.js",
    "revision": "18b0ee5b771762433507e6975be67453"
  },
  {
    "url": "assets/js/321.f5de6b44.js",
    "revision": "a9fb5f99728b51db598e7561a43ddb48"
  },
  {
    "url": "assets/js/322.9f225516.js",
    "revision": "12118995d8ed879aba1e720aa244972a"
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
    "url": "assets/js/325.dfa31701.js",
    "revision": "8c63ebfa458d21ada2fbbe42455505f5"
  },
  {
    "url": "assets/js/326.0ee4b104.js",
    "revision": "2e29bc09e5ce57930251a0a272a393cd"
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
    "url": "assets/js/329.d763f781.js",
    "revision": "40be55d4971ce867636555d4d65f30d3"
  },
  {
    "url": "assets/js/33.e6d19f2b.js",
    "revision": "edd90e6b88dc5772bf15bce8ff54984e"
  },
  {
    "url": "assets/js/330.bca0d878.js",
    "revision": "5ebb2d50619857eb23221ee12f058227"
  },
  {
    "url": "assets/js/331.e3787967.js",
    "revision": "428932cf995046ee0b5ea2d7f1824587"
  },
  {
    "url": "assets/js/332.53be1d84.js",
    "revision": "f242209deb743201fd8ce4f1c4e8ea65"
  },
  {
    "url": "assets/js/333.e7881157.js",
    "revision": "214a0e4f637ae4d344cf73ac480acce9"
  },
  {
    "url": "assets/js/334.84b6bd6a.js",
    "revision": "307433b809bf1b97edf468befec0d19e"
  },
  {
    "url": "assets/js/335.96976933.js",
    "revision": "8f0877228aed11e8cb8430f18ba4d9df"
  },
  {
    "url": "assets/js/336.c085b0a4.js",
    "revision": "f2eb2d42e225f13056d09088ad37b3cb"
  },
  {
    "url": "assets/js/337.5e7878dd.js",
    "revision": "f01969eb7bfc7547355a9f4c434ab3e7"
  },
  {
    "url": "assets/js/338.d74d2c03.js",
    "revision": "74e0335993f6e2dc3b008638f3da0607"
  },
  {
    "url": "assets/js/339.c6cf2df7.js",
    "revision": "f64ae6b93c4666a821b3314e9a91c98d"
  },
  {
    "url": "assets/js/34.84b3e39a.js",
    "revision": "8c39bd17d1d0e7fb7b6676eb83081e8e"
  },
  {
    "url": "assets/js/340.78c4d188.js",
    "revision": "377bd8ec73905ee91f79c8a9f4a3f26c"
  },
  {
    "url": "assets/js/341.0999342e.js",
    "revision": "9ff1a003d9ef14729f33bef2268f2d3e"
  },
  {
    "url": "assets/js/342.061421a2.js",
    "revision": "040354fd78d8b501c48b7029d4b72577"
  },
  {
    "url": "assets/js/343.b8f4a16a.js",
    "revision": "ed8ca29d0ddccfcef8b489a416f4a381"
  },
  {
    "url": "assets/js/344.0522e8c3.js",
    "revision": "d3dd16c1a3fe079d47e76d827a415947"
  },
  {
    "url": "assets/js/345.c456a0f7.js",
    "revision": "dc7d1b1db30979829a26862581547186"
  },
  {
    "url": "assets/js/346.657ec504.js",
    "revision": "abeff20dd3bb4d7431cff6f5283d6b61"
  },
  {
    "url": "assets/js/347.3c25c62d.js",
    "revision": "cf93da74b6a6e9c7dd9533e8e14222a1"
  },
  {
    "url": "assets/js/348.a95bbdf9.js",
    "revision": "14ef796bfe29c06cb0a4dfccb08ec584"
  },
  {
    "url": "assets/js/349.4d2a01c3.js",
    "revision": "386394ff2f56f8db1623f28e22e70a0a"
  },
  {
    "url": "assets/js/35.8ff358da.js",
    "revision": "6305b458905fa975f1fb447743f808c5"
  },
  {
    "url": "assets/js/350.ee856f33.js",
    "revision": "e1c98765da1f1e870dd7712139abf9c3"
  },
  {
    "url": "assets/js/351.b6653ece.js",
    "revision": "3c80b274a444078875c2e5b69f90e1ad"
  },
  {
    "url": "assets/js/352.1197d0cd.js",
    "revision": "c80e78ac3680f687d8f38e013b8826b1"
  },
  {
    "url": "assets/js/353.881621b9.js",
    "revision": "eb5e6c9baa382361d7092457d8bdba27"
  },
  {
    "url": "assets/js/354.48fcc527.js",
    "revision": "8259fafefe8e222a693e9acce355223e"
  },
  {
    "url": "assets/js/355.6177dacb.js",
    "revision": "900a8efa2e7c2bf20a0b2347d2fe23e2"
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
    "url": "assets/js/358.e7f524f1.js",
    "revision": "a60eb3706b5255628ebb395b822928c6"
  },
  {
    "url": "assets/js/359.53b917a3.js",
    "revision": "42808507c2c666e3265ccc7b604cf636"
  },
  {
    "url": "assets/js/36.da893917.js",
    "revision": "ca8c80456fb05ae45ab63b42cdb5932a"
  },
  {
    "url": "assets/js/360.da18d751.js",
    "revision": "92ca6c5ed39c388b20604d702ca3e7a0"
  },
  {
    "url": "assets/js/361.68264c60.js",
    "revision": "e3cd18827da15df42b6e7077b21e1c89"
  },
  {
    "url": "assets/js/362.6fb16e16.js",
    "revision": "d02c2a63cb5375d68e6f4fc56553236d"
  },
  {
    "url": "assets/js/363.458f8086.js",
    "revision": "6558b331ea57f7c3fd242e0663419bff"
  },
  {
    "url": "assets/js/364.59f5f587.js",
    "revision": "fd2a2fa3b104a3cc7c71bece0355762e"
  },
  {
    "url": "assets/js/365.89e422d8.js",
    "revision": "4bdaa4e4270116e1748b296f1dc5c0ee"
  },
  {
    "url": "assets/js/366.b4cffa24.js",
    "revision": "3d88b504b90cb8bf3a5e0af7a14d3235"
  },
  {
    "url": "assets/js/367.f67cabf3.js",
    "revision": "b0fd16d2d1b758d7fab5cc050925dacc"
  },
  {
    "url": "assets/js/368.2c681863.js",
    "revision": "7cb1786e39b12ff9ad2c0400dad76216"
  },
  {
    "url": "assets/js/369.96037454.js",
    "revision": "4511f8c08de245af3088c7c73f20afa7"
  },
  {
    "url": "assets/js/37.703edd0b.js",
    "revision": "23fa579ee2dcfdd6e1b172f7a7c774c7"
  },
  {
    "url": "assets/js/370.b560840f.js",
    "revision": "6b3fbb88ed5813a28e1bf420debb5ff4"
  },
  {
    "url": "assets/js/371.291d58c6.js",
    "revision": "0a3408b851c6867d5f5bc6113cbcb6a0"
  },
  {
    "url": "assets/js/372.d156923d.js",
    "revision": "ca3a6725fa18bc77cbb8b24a4d5b84ef"
  },
  {
    "url": "assets/js/373.79c78337.js",
    "revision": "f216ec9c8bbba86ce90cab1e032c7837"
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
    "url": "assets/js/376.15001a25.js",
    "revision": "4cdc37c0f1998fa1c2e1d5ea8d5a77d4"
  },
  {
    "url": "assets/js/377.7812921a.js",
    "revision": "6dee8f90d6745a7259e1a1a1074be22c"
  },
  {
    "url": "assets/js/378.0527d8ef.js",
    "revision": "77e40f6b9656f19d852c72ee513b5f98"
  },
  {
    "url": "assets/js/379.b9347aa4.js",
    "revision": "b90f0b46beb395bc13fd66c1a31d14a6"
  },
  {
    "url": "assets/js/38.37d54fc0.js",
    "revision": "b1eb8e5493b2413a0dc8e7f2b6484ff4"
  },
  {
    "url": "assets/js/380.314a715e.js",
    "revision": "aa378a40c6972fd572dfff5598469e34"
  },
  {
    "url": "assets/js/381.ece71b9c.js",
    "revision": "8ef5304ced5fca91f50eda2ef07182d2"
  },
  {
    "url": "assets/js/382.9cc92c7d.js",
    "revision": "fbb4d985cf35ca1dcfe47635c0cf355f"
  },
  {
    "url": "assets/js/383.bf58a1be.js",
    "revision": "8859b44e0fd3d2f02b8c9580af6bc27c"
  },
  {
    "url": "assets/js/384.74220574.js",
    "revision": "0fd4b4f93240d41dae0edf734e7c6638"
  },
  {
    "url": "assets/js/385.c2f9266e.js",
    "revision": "3bae5cf714b940d92d7ab9e21d6b9b50"
  },
  {
    "url": "assets/js/386.8ec02e49.js",
    "revision": "41d0cec77665021444b4d354a8c03c38"
  },
  {
    "url": "assets/js/387.845e303f.js",
    "revision": "89759b7d0768ee403129ac4e7783240f"
  },
  {
    "url": "assets/js/388.636a6a8c.js",
    "revision": "deb6c43771f23fb6abd8777172865bbd"
  },
  {
    "url": "assets/js/389.6853840b.js",
    "revision": "305253fc5d94dec26f8d4a9390194a72"
  },
  {
    "url": "assets/js/39.8e9a3120.js",
    "revision": "c586c67b1f447fbf2c060bb7e073ca25"
  },
  {
    "url": "assets/js/390.deb59648.js",
    "revision": "4382ee2536290a3199a712aa627c3d9c"
  },
  {
    "url": "assets/js/391.7961fdeb.js",
    "revision": "2a8cc190a7979b805afa2ac631deed3b"
  },
  {
    "url": "assets/js/392.d25852d4.js",
    "revision": "48d603b9aebbfe6506c71f7902f04eb7"
  },
  {
    "url": "assets/js/393.a9ab27ab.js",
    "revision": "ea7be998ed29de190a6e4282757aa6a2"
  },
  {
    "url": "assets/js/394.eb778307.js",
    "revision": "bdd377e35d307e6f335d1da41e09950f"
  },
  {
    "url": "assets/js/395.7234974a.js",
    "revision": "4c9a17d5758b5242ba2fae2c0db498b2"
  },
  {
    "url": "assets/js/396.f42162dd.js",
    "revision": "7f5540282a31e31e84341e6bc62b1fc7"
  },
  {
    "url": "assets/js/397.0a18d7a2.js",
    "revision": "325fea96c02e7fb7edafe07873bae7db"
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
    "url": "assets/js/40.24cc7983.js",
    "revision": "e1c1901f57999ee5577447748f264511"
  },
  {
    "url": "assets/js/400.118cf2fc.js",
    "revision": "414f5d6f2b4b4341d59cf467ee4c061d"
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
    "url": "assets/js/403.71fd4a5d.js",
    "revision": "7a290400acd0c6a74cc398f95cf90267"
  },
  {
    "url": "assets/js/404.59eb058b.js",
    "revision": "d91e45197b3335a3f132c056827b3319"
  },
  {
    "url": "assets/js/405.4aff29b8.js",
    "revision": "b4a5387b9ce27b2e0ec67f38ce4dbdbe"
  },
  {
    "url": "assets/js/406.e92c2bc3.js",
    "revision": "cc64ea0c0fddd94fc6fc537a7c855425"
  },
  {
    "url": "assets/js/407.6228fad0.js",
    "revision": "7543de592b09c41c5b55a61d0b15f57d"
  },
  {
    "url": "assets/js/408.34fbb0be.js",
    "revision": "e0b96de94855149127fac9c2b7ed5e97"
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
    "url": "assets/js/42.467a8820.js",
    "revision": "23ad850d686adecca02e1deb8c60d046"
  },
  {
    "url": "assets/js/43.40b922ca.js",
    "revision": "ce59031cb5489b3615abda9279a4fbd1"
  },
  {
    "url": "assets/js/44.520fc543.js",
    "revision": "634e9401dd08f0db198e95308e001b5e"
  },
  {
    "url": "assets/js/45.4a4da04a.js",
    "revision": "43c2ee46d571a3cb16c220718659fe4b"
  },
  {
    "url": "assets/js/46.2974441b.js",
    "revision": "f7ff4c50c0150e61bbdc8c0ceb42a979"
  },
  {
    "url": "assets/js/47.510629a0.js",
    "revision": "9894415272d2bd05abcc12d2a07aa1a6"
  },
  {
    "url": "assets/js/48.7391a1ef.js",
    "revision": "9fe7742e118783e332dfef08805b0691"
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
    "url": "assets/js/50.ad774381.js",
    "revision": "9c186917714719d36217d6bb2650ed18"
  },
  {
    "url": "assets/js/51.aa86dc75.js",
    "revision": "6b50577673822d7c15e2248b23ddf2e7"
  },
  {
    "url": "assets/js/52.81c8334f.js",
    "revision": "ca10e2da84b32d0740e8ff9fa498e617"
  },
  {
    "url": "assets/js/53.304d5783.js",
    "revision": "4b2cfc3c00ff6ad88192d5b749e3acfd"
  },
  {
    "url": "assets/js/54.1a07d647.js",
    "revision": "981a79393b0489237d88f0d6d7510bd8"
  },
  {
    "url": "assets/js/55.f2fde5aa.js",
    "revision": "33aaafa980d63ae180446ead8bc3136d"
  },
  {
    "url": "assets/js/56.caf652e4.js",
    "revision": "d7e7b19ad25bbe8eff3cfa8c3dd9bbe4"
  },
  {
    "url": "assets/js/57.368f9bdb.js",
    "revision": "ed2bfc0a7c18a708544dea1dd3bc8ff9"
  },
  {
    "url": "assets/js/58.fde9831f.js",
    "revision": "a5675863e6eefb2cd71f6ee85998f74b"
  },
  {
    "url": "assets/js/59.abdc5bec.js",
    "revision": "85ba68ae4fc19bc340d69037077fe41b"
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
    "url": "assets/js/62.487d568e.js",
    "revision": "e298760c4ab6976732191f264e19d364"
  },
  {
    "url": "assets/js/63.22876f0b.js",
    "revision": "f129e55d2a9ead3839ecff01a1c755e7"
  },
  {
    "url": "assets/js/64.ba6412c7.js",
    "revision": "2e55c18e4228df32b8c48219efc8da60"
  },
  {
    "url": "assets/js/65.43a2f558.js",
    "revision": "b28039d7cfe9ec2debd40ef12cc60f11"
  },
  {
    "url": "assets/js/66.4a052fa2.js",
    "revision": "ebe6527ac30d1468b9b8a7b0a034e5ec"
  },
  {
    "url": "assets/js/67.a6368c14.js",
    "revision": "d3d40b6cbcbc1ed71a13f284397476b4"
  },
  {
    "url": "assets/js/68.c31a335d.js",
    "revision": "511681d69f61f8fe6e63038a3fc9422e"
  },
  {
    "url": "assets/js/69.f6e976a3.js",
    "revision": "4d10a226c9637abfaaa1429b936b71d6"
  },
  {
    "url": "assets/js/70.7f01c741.js",
    "revision": "840aa54deeb24ebd55d6c7fac2e988b0"
  },
  {
    "url": "assets/js/71.4ef49233.js",
    "revision": "4b62af1393a5c3fcfc405d5f64a53599"
  },
  {
    "url": "assets/js/72.39a32116.js",
    "revision": "25348e092a47ab4e5990b2df5ddb6719"
  },
  {
    "url": "assets/js/73.d438693e.js",
    "revision": "be3a742cd1d014bce509cc848d823dd6"
  },
  {
    "url": "assets/js/74.d1f1e7fe.js",
    "revision": "28c417c3f928fa882a9a4e9df2929694"
  },
  {
    "url": "assets/js/75.3ae6a6e1.js",
    "revision": "0d5e7e720147ba7c882c9991aaa54fdd"
  },
  {
    "url": "assets/js/76.ec877d3a.js",
    "revision": "e80c1a4f3f6b3cb5991648c434dd5c61"
  },
  {
    "url": "assets/js/77.61d31c15.js",
    "revision": "4ab2bf2a02c08133557584a910e5cc30"
  },
  {
    "url": "assets/js/78.56e62e5e.js",
    "revision": "4241147744bb1633ba7ba8b4d2352c20"
  },
  {
    "url": "assets/js/79.10fe787d.js",
    "revision": "b5f2bcc5a0acb93cde0e3095e92ceb2d"
  },
  {
    "url": "assets/js/8.ad0c3fcd.js",
    "revision": "169f6fc692cbfa7356350c5ee194b3e6"
  },
  {
    "url": "assets/js/80.f6fa5cdd.js",
    "revision": "2c0dfd6447285c00b774982d3584b646"
  },
  {
    "url": "assets/js/81.5149c6b8.js",
    "revision": "18d8db35fac1bee4e5198eb29e2d0db4"
  },
  {
    "url": "assets/js/82.f43e7ca1.js",
    "revision": "d91dd5f187c062dbe6f07dff59d317f7"
  },
  {
    "url": "assets/js/83.11cc3153.js",
    "revision": "987c13b0c82448e952385ba43ccd9096"
  },
  {
    "url": "assets/js/84.c90f67bc.js",
    "revision": "cd49d7c56177e0c636831a8e03e4b0f4"
  },
  {
    "url": "assets/js/85.d91f6bce.js",
    "revision": "ccd54982fdf984f88dc034264edd2321"
  },
  {
    "url": "assets/js/86.f5a7c995.js",
    "revision": "ad2cc58cd189e3f0ba42104021cfedc1"
  },
  {
    "url": "assets/js/87.81ac6d9e.js",
    "revision": "9f3dcfe71dd766c7c4104cea843cff47"
  },
  {
    "url": "assets/js/88.225c0a88.js",
    "revision": "df3f9e8578755e875868158f2d870630"
  },
  {
    "url": "assets/js/89.f6d67937.js",
    "revision": "e4cb4e184c94757802af78cb4cdabe99"
  },
  {
    "url": "assets/js/9.5a58e148.js",
    "revision": "2da89df2c223fe286a272138b9aa94e8"
  },
  {
    "url": "assets/js/90.cff14b5e.js",
    "revision": "235b00d1b4abbe282080ef79ba172713"
  },
  {
    "url": "assets/js/91.f4385840.js",
    "revision": "d426d5eec05dc651f09108904a45f209"
  },
  {
    "url": "assets/js/92.be9e6667.js",
    "revision": "62f3bd60832d8844a101589430663cd1"
  },
  {
    "url": "assets/js/93.1679a186.js",
    "revision": "9f4cdb1a325ab3405908e8ead543e0fe"
  },
  {
    "url": "assets/js/94.d71ddf5f.js",
    "revision": "a3b6fdfec78e35c36e13f3788c1855e9"
  },
  {
    "url": "assets/js/95.f137a5cb.js",
    "revision": "45bdc9a90e53e3829dcd8c687fc66a2b"
  },
  {
    "url": "assets/js/96.0c9b3431.js",
    "revision": "593080cb1569886af57823b3ce0b7ff0"
  },
  {
    "url": "assets/js/97.7bc07c6a.js",
    "revision": "a4a5c8970f55ec8e33b63415125548c4"
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
    "url": "assets/js/app.87b34a03.js",
    "revision": "77fd8f9bd6dc32cce04ff7d85af6df87"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "7f14995517d802d2034035e61c36de27"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "8020f43c07a0ec947acce73b35befa22"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "2c7dbf577d04412c50a61f49e0f5a6ac"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "b56e8c6cae1b35281b6c9b7b76c837da"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "0f8b8936e74c92a8cf01e36d008eb991"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "8a7156c3725db10b18dcd32fb8b00d9e"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "a4a880fc69798a0c7936911ea08c2e4a"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "65d7e00aae5300c8808e01976b8984f0"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "a08865ef5cb76aac0bc39f930d0f9b9a"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "05ca746d745e570b1ecbe9fa62642128"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "1334900127e27c7eb23cb56f3a8be6d7"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "049496e3dbd2c99e55bebbb6bfd9161d"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "20761e09142cc53d4708c94d2daff708"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "38b9d416e03d82aa03ba9ab0a352575d"
  },
  {
    "url": "master/api/index.html",
    "revision": "eb90146fd059af978462cc11272bd7b5"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "f07a53779c69212f20f84966831052ff"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "82796ad180f34d358bb19b008b50b95b"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "70de9ecb67f8f45ce46641480d8c7349"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "8990c49cf81ace6ccb3817bda96424a4"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "a12b9aabbabafd61119535d18321814c"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "811ea74b0122b548c10cc1eef51f43dd"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "4d348a22217a3dbb1300d38e6d635ed1"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "fcbcce8cf0c25abae5f3144ab3f9ceb4"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "7f9c7ffba51d49b8003a5aad506866a3"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "a5f082b6065a6da98b7cc52c0926ea19"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "45fe823e7bb21015afb59068dffa8b56"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "3623c20e1e7197cefc5ab5b8e6ed785f"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "cce0009b2dce1968812463ee66950bec"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "73865e6e27c1a4a5bd2de7b3391667fe"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "116a605d0cfe9772d6da4ffc17424ee4"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "040266b7df77146c3ff290f951531f75"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "741e4b2777a8154cdf432f7d4578a26c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "9166d4255798c916fc382fb6f4dc1416"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "dec112f2717d4e3fbf7891f8192a92c7"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "a6539b1ed459d2a19850084527655a36"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "232a8f00dfc5b4aa09fc12a41daeb819"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "8f6be4b5057418482d38b5bb833ccd48"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "ae9959074b63ea7a04278979c6a545ad"
  },
  {
    "url": "master/packages/index.html",
    "revision": "43112530cd74d94dec42d9fc5b1defd8"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "fda1f70f58abddd547b93b8c68822a25"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "d97e743c8457f3e8085d8ecd37796229"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "481b9712d3af7e76c2e57488d2e59fe7"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "35fcda15926a094515ca38707fc6c4a9"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "8c79c7995b5d96e9f317a12102dd5521"
  },
  {
    "url": "master/packages/views.html",
    "revision": "73cc7fa84f48bfd5e7f27b6cd8040368"
  },
  {
    "url": "master/performance/index.html",
    "revision": "5aa665ded091d4c0fc62978fcfb50648"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "add050c8868d5b62a6864851503201a5"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "0301f13650538c91fa8e40ea49df7faa"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "6130a39b04db681d9d277a1115c2d6c8"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "8290db11205af5ebccbf81368dbbe69d"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "4cef0d29ac17bd49da591dbbbc5ccf7d"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "59ea1e13edf8a926cd3e2fc2db9c7c77"
  },
  {
    "url": "master/themes/index.html",
    "revision": "61fbce639d064eb6b37e9fb8176e44d6"
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
