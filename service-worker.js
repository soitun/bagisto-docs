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
    "revision": "98815bb049d0fd9ba3ca2edf092ce831"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d1f2d0417a4f21c45762ba5b8ed8d93b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a54b9fea2bfe3b522c43c09d4552e3b6"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "903d07bd6ce24deaaecb2c7edc34dd48"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b7dcd8660b6890cfb2a9fa01f14c30f2"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "dbe23796725b617c7fc10281c0736cd6"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "160e77c837254acf1bd069acd766df77"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e6523c407fa1c81f1849d2cf0b53e5f5"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "a2181dec99be5caa9f51d931b11387ce"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "3f610ec24f4e394102be017c11b73e0e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "af59465cdadc376c59521f0a737a166a"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c7de0c230a076c9ad207773e8c4c7cc3"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "46eab0863424add153400be2cfb27871"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "75b62937212e23582e1e0fedaaeb6926"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "387fc9e4954c1282ffcf744a7bb9d418"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "edf735c67e22c94932fbaed93749824c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6172128528ee3b014a55b3ac44dbcd0c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "5d5884f43e875c6f01c0c2e38cad1345"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "985d101d7e19e45a508bb410bf62d9e2"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "508fca6ca5c274966b0206c347f194b2"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "19b2cc7688ccbb93434d035414b44034"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "b3d400ff6b521337be015356e577b8ee"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b5dc2918c4f7a4be27dcb56dbf2597c9"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2c34f4916854e7afd2fd40c8d63c42bb"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "f1df20d174e1e9c8b70e37d7a0b388f7"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "bbb1865adfcc82c992b8af213757c242"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2e5320a43a111701e58739292885e454"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "4ee00f42e071bac4b98bb18557024d6a"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "ecc2ef143f793856f2c6e0b3e2aee1c6"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "041956744bde0a37780e299f08723858"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "8c2062cd9f302b136dbf69bbbd43bb70"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0355631b8045978307dd1a708b28a562"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "bb395cd5be5db8f15d551c570089b918"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "66cef80fe410b676325e89d5efffa18a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "24b8c17b5997912f079d89a4e2f10cab"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "312ecbfea67767fd1cfaaa2b0fbaa927"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "ccde06ec355c896dcc10742e7e2c89ca"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "f7a11b4b962c0f474dbbb553c7d3742a"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "cf6b2147b986dec4ce4989e01c8d1a8f"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "dc0d0fc6d26c5036be01c5ac1405f530"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "623432e9c43f3e0863557599337296fc"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "0be9dec74ff02638191d82086e51bea0"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "0eac636abc1ee398276d91b8cf45f931"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "8378adcaade1b243565a9e515d394c18"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "5a67c063a9fc072e46ddffbb6dffd4a1"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "4af7324bbc44f63873f718c518f4ffe8"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "9b6ebf11729295829bca7b2df4b40f70"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "a132976c5c18921c2b3d2edcf83ccf1f"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "fcb82d757975fe5bc1e6d82eceba6d7e"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ef7a1491496bf42fcc98801202c913ea"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "e05e05610961ea0948deaba79f5aeb81"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "dc7ad14fa20e809224d063775fb8bc61"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "043a9df9de75b02a37f3171c21a3f141"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "db159fc79e5ae24b67884ac02e37e011"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "8527c0b521abfa37b1735321fa0bc0b8"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "ec19a0a88e50c0551a08376eafc4cb08"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d7930d82165dae1fef5a003825082857"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "135a6069539c57fb78168ac3b10c21f4"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "594765d7f6e816025280b42f7644ffe7"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "5d9c4487be866c0db2d13af4f79f7645"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "99ba6ee42dababc6a405a076701a6d86"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "22feeb82e44ff803bde68ae5319ef9b0"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f16941a8b31885e7807d54cd6405c691"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f043a427849d9b8ee5687455d5b26a96"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "13a48861555903ce65f2b84747c96864"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "49a883bfe7b3932f0fcdc41518abf2de"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "2e4763be53e637b567e71b4523840120"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2aa69dc70238ed1f942a78581205165b"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "222df8b05c1926e7e006a5fa5cef2e00"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "4e344e1719a58bbe198fb4bbeb3d3059"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c8467790d30529235c6b40e4b5666256"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "0238120cb350abf7872efa6a198b4710"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8b4fd0241d521763179fd9749cf4153b"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "e0c811c72a7ff64ab0668435cda475b9"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a18406def7a4fdafee0ad34446379118"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "cfc3a1329789e8aed938ff55eb405124"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7f56025ef6e9b038357d3cb4f0a8cdd6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "89905be1bfb7d0608b02a078df1dd5a5"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1800d6a43d001e76803ded96f60dbac0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "9ee6bf1e8f615de37b38de0362b72f2b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "270a60621c638510f48ddac5fbdf87cc"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "f6e4d71af46e427744c0db7ae9cd3587"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "3d73e331868a37986ffd00a1611f3fb9"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "1f134c175d1246f4fed6cfcee7e0def9"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "ee880be5f77e095445fe537a3cebe553"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "84203ff455dc1ab49e12bcb3b6bbe6dd"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "80fd916d2a3ddbc27abda835ff9338e1"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "3a7062700e9afde85eaadd61535b9535"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "de7d79cbd05ae29578b0cad04f0d65d8"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "538448cfb62135f872406df59a48506e"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "371166720bc38fa794f7c45f787f04f9"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c628b1318c8f8cae5b2601f0cea4387c"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "a6f1488c9e4b9dd7edb96acf7b211d5f"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a670b95c68260dd4e7e8d5584ade1078"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "f401a7b309c6bd1389831a99e4d35b64"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a8d1b0d6eb56069e938d20ad114435b5"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "a7e972818e997da6106630f6146952ef"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c28946978fc0c30193900bdd59412431"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "5d65fd1c0ab90e847097a915ac3671e5"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "506474bc0c31e4d8850c27ce45362956"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "8b1038859a707a00c377733f827b6568"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b54b520c8097f19e6094ba1ed3ccbf8e"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "602003738bff3a469622f9c21865424e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "507344801331dab170ee03b71ff6703e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "bd9ff2b9bf9e9158d0aba024e6b90b78"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "af6181cb50dab3c7c0e03af3897d05fc"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1593e9df123907087a8bbb09fe9bb5ba"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "ffa6c27651eb55274cd9180bcfe80bb4"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "eaf92def785880765392cf94bdb6e4ae"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1e4f99ec4ebe5044ebfeef49cd4377a9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c0e9155fd56fb683e937c52fa9b15d0c"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a6f24a1651d08173f5990db30c54fc86"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "31b80fe16454277baa3a3c36f5d2415a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "8728bdce69d70bd6b894fd855e399a63"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d97449007be7c3646676e959a54bf54a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "981f90f8fc7c79c35e9bd65caecc52fa"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a036b6f14fd67e629689fe91d703f72f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3ed303f94ab946a52465b3a722c8ab99"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "b563968daaad91d974702574c11c3e66"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "914433a179563a8a9c45fed03b40a0de"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "906a411402ee471159baed45919c35f4"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "b4df79cdc05f9f11a6e1731e4e85ac83"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "42ffef4d3f167a05f9a55c2f1d89276e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0bafe1b63fd6bd7b1a124575ae3ee790"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "68f1853831107b705a16f15d6123d763"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "66777e6c3c17396a829ef3627a3d39b0"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "cec71d771d4913494d166c5cf0650af1"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "5c8c34af338d946163f3e7d9bfa1d132"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "2bfccccc39b629e1a6e0ed9b193b3de5"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0d81f11ec42d9fdae9e891bf0d6d9d17"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "c91f7f1cbe58ac482d58d8f38c3156bf"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d647fe21b5f55bc18746e61f86083f3c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "7d6053a9cb2e3c546807c779410a0dc2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "d62c97135e48a2647559c464f6c582df"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "87e28eff5ee58a2781fe1dc50b0503b2"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "98104caa8e2803e25f31e5d408421c6d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "d3303beddecbcd4baed3e7138e5ce83f"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "db6e2fb348a2ca798cf946650d4a1ba8"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "45ca4a678639c24c2f4d3a6325880fe9"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "27325bf369ea3acec76d65161bfb12f8"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "20a3b4192710ebb35d1235ae48f12899"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3ae110047ca056248fad8a8c6d85bf30"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "c8ebe0a0432312a536f879778e04ccfd"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "7021498ebc88a6d559512d5b940839e4"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "9431111a7f044367ec859e6664419ad7"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "25eddcc6c9a04b5b344ae69b0b72e799"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "48042625e8c12286cd534a52d5a23f56"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "a1154c3b96fb0dfeb515c796ee843bd4"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "9c925624c9c47fcbd51a3107d05b2611"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "95025724535a03f5abb3cc2d197d930c"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "45eb71ce64cabe9c00b946dd6900927d"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "bff80f32d04bfd325a4583fa46642d39"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "d6a238e6e2212c3872b0e9ab49da39c2"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "200e45214b3e308e7a613eccd37f3c3c"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "6da098a81244ff4d40b4f46790b58202"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "ee9c4ee46afc3afd5bdbc70d8eb6402a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "313a2b2337341d227deb767339320a1e"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "dd7b0e01b20b5aa7f378bc9a09fbcf96"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "a166163efcd6c99990f6ff86fae1b171"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "3005234465593fba3f2754b921505a0d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "a9a7777a0e180888e08cdc5d97c34176"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "49c270822b6b4b613e881154edd19ae8"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "7308d89b093f3e66a15c04b40516bdf8"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "1ebf85db7c532a1c377441a16d6f869f"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "f943670beff9b0fc2bfda947c3ce4add"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "81463d6869a8371eb199c4cbef827e33"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "feeae21221f4221d5a1bea61e084983f"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3c078c4d2201ecb19b753568a3e13ed3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "5510abae65aa994cf22885604d565b37"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "6d5c77c7e092518386543e798fa9c2aa"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "000cd8559fdf5e0df6c6dad357b59fcf"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "8026c019a1138ab295118c9323dd3fe5"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "2a1c918fa43d0c2da321301235d648c9"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "806d08a217f1cdd9f4d04905b5d3b937"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "34b17ec1822f8b48cdf1509fa5341158"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "d6fb4ad7cf5451a5e1195127a42b33bd"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "cb6df11f9b2b517085a344a267183681"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "05c87b65e023388640df173c321a7801"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "a1b51ef8ee7a38d0a3683f08df95a1da"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "af965d8f549a340e03f6df8b8dcaccaa"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "0a172ae7b649c0ae96cff5b1ae9a9d39"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "bcf0404e0309aebe78546f8e5475c497"
  },
  {
    "url": "404.html",
    "revision": "e5e8790a6fec13acf4f8d8d2b82552da"
  },
  {
    "url": "assets/css/0.styles.74cf57b0.css",
    "revision": "3940e9ec40b59a4daa7a4d21e3df65d0"
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
    "url": "assets/js/10.47abe10b.js",
    "revision": "884531af452a9656cd6f437b85c02adf"
  },
  {
    "url": "assets/js/100.0e433e64.js",
    "revision": "221a2bc4c4f93268b21e8b10e6260c09"
  },
  {
    "url": "assets/js/101.a791a516.js",
    "revision": "e303103fb73058688ed9b875c4e9ad13"
  },
  {
    "url": "assets/js/102.927c7efa.js",
    "revision": "5edafaff32d076eb63ee99d076848b78"
  },
  {
    "url": "assets/js/103.6d1256d1.js",
    "revision": "49ced826400ed66f00583b5f009eb5e4"
  },
  {
    "url": "assets/js/104.d3585483.js",
    "revision": "a0de0a38f8a63f74a1c7acb2a96958b1"
  },
  {
    "url": "assets/js/105.516742eb.js",
    "revision": "83544141139ab20319cfba1049b2eb55"
  },
  {
    "url": "assets/js/106.1bd5a411.js",
    "revision": "e5221f72a461935c7fda2c558f8ee81d"
  },
  {
    "url": "assets/js/107.acbbd1f4.js",
    "revision": "565c6cf353fdad24eb1fd37017ec15ff"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
  },
  {
    "url": "assets/js/109.3fe8f0bc.js",
    "revision": "53d32d8bfb0d6e6647636012c1b684d6"
  },
  {
    "url": "assets/js/11.1c022ee7.js",
    "revision": "910feaf00ee12e2094d4b8f679b2558a"
  },
  {
    "url": "assets/js/110.a6159f9f.js",
    "revision": "6d04e37bb14d3edcbe119202f3d3255a"
  },
  {
    "url": "assets/js/111.16c98f67.js",
    "revision": "68eb05d72be212dae69a8b68898513c2"
  },
  {
    "url": "assets/js/112.af8a0b4a.js",
    "revision": "8d509e34dc01c39c161ce5cad872ea66"
  },
  {
    "url": "assets/js/113.5cd70541.js",
    "revision": "31bb7ac36906757a22f1a2c9a23f6a5c"
  },
  {
    "url": "assets/js/114.a0b63035.js",
    "revision": "6116e4e1f9af16b0cfc4b84a12043903"
  },
  {
    "url": "assets/js/115.5ae57ec5.js",
    "revision": "56eff444f1e643d250ca9e09a5f90f04"
  },
  {
    "url": "assets/js/116.d2a7ed41.js",
    "revision": "524d345790faf290be75c7459f94e643"
  },
  {
    "url": "assets/js/117.3b2e20dc.js",
    "revision": "0efcd439b011eee6a7fee38820e4ef43"
  },
  {
    "url": "assets/js/118.78d76382.js",
    "revision": "a6c953418632da56f3620cb10e5866bc"
  },
  {
    "url": "assets/js/119.7b298f0f.js",
    "revision": "4a7dba9f4642e4ad17f8e575965133f1"
  },
  {
    "url": "assets/js/12.dc76d0fd.js",
    "revision": "24c983a8043a8676ac4e5ef0a080ae1c"
  },
  {
    "url": "assets/js/120.e0625086.js",
    "revision": "e0a03ba7c33f853106f00d9f98865374"
  },
  {
    "url": "assets/js/121.bf5a9319.js",
    "revision": "c02e291391940ed260b57084703d5d56"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.159be8de.js",
    "revision": "3732e5517bd1010e0ee563a91b8d8448"
  },
  {
    "url": "assets/js/124.bfb0e4d9.js",
    "revision": "7799d7f25ec1465b9987bd5214e2b2c0"
  },
  {
    "url": "assets/js/125.670d6056.js",
    "revision": "0b3f4cfcd93336d8e33522df7f7592b9"
  },
  {
    "url": "assets/js/126.00756d01.js",
    "revision": "bf42e8900d76cd25d4b1a2b039590634"
  },
  {
    "url": "assets/js/127.c29e808c.js",
    "revision": "740b2352394a7be64124d36d3ffa7835"
  },
  {
    "url": "assets/js/128.a89c6824.js",
    "revision": "febf1f3341a38f3b7b00a4e4361a39f8"
  },
  {
    "url": "assets/js/129.e7333e5e.js",
    "revision": "8f894a61da198e610a5582729788a221"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.a737fe59.js",
    "revision": "e63cf43830a74faafe30b3c1d1cce270"
  },
  {
    "url": "assets/js/131.2b382360.js",
    "revision": "da7f5b1b9c0cb3e0c395a8d0e998b5ac"
  },
  {
    "url": "assets/js/132.9d8b2cf4.js",
    "revision": "895fff020f2da228efdcf6088fc1f34a"
  },
  {
    "url": "assets/js/133.0b8a17c4.js",
    "revision": "be456548b12ee12c3303a369fbdc246b"
  },
  {
    "url": "assets/js/134.a119a757.js",
    "revision": "fb60082753ac3ad38761ad0cb1b0792c"
  },
  {
    "url": "assets/js/135.a5706e05.js",
    "revision": "ca52e201a4ae2547863c054ba564bcd5"
  },
  {
    "url": "assets/js/136.c1841743.js",
    "revision": "a1767ae7bb1a9a6a71f20426b8dfbf82"
  },
  {
    "url": "assets/js/137.ee8b6f2d.js",
    "revision": "aeed52f84652bda96009fabc9a8e5b5a"
  },
  {
    "url": "assets/js/138.9a3913af.js",
    "revision": "d49a6bbebcd3870ea2ba2df2da9a7c25"
  },
  {
    "url": "assets/js/139.93fc5682.js",
    "revision": "04e58e82a87f10c2cdeea26d08399810"
  },
  {
    "url": "assets/js/14.542676f4.js",
    "revision": "aca7a604f0bf6e3ce1c4d3e5cf8520c6"
  },
  {
    "url": "assets/js/140.7f6cbd18.js",
    "revision": "e21041d5071b31c718490ec0862a4915"
  },
  {
    "url": "assets/js/141.c07cf8e6.js",
    "revision": "71cfa2ca2e38c25ae5e9c02e02e33875"
  },
  {
    "url": "assets/js/142.017b7061.js",
    "revision": "7ce13b858d07b6a3f689aedae682aa30"
  },
  {
    "url": "assets/js/143.d9392e0d.js",
    "revision": "3d5f3072af3e27d98868fb73f872eb09"
  },
  {
    "url": "assets/js/144.f91a79d9.js",
    "revision": "a678c19ff41815cbdbab1a5b80d14e66"
  },
  {
    "url": "assets/js/145.45ff70c6.js",
    "revision": "812118556ae8715bdde6a2c8e4ee4ec5"
  },
  {
    "url": "assets/js/146.6062f7f5.js",
    "revision": "d2db81cd64c40f6a7b818af8c0bfea1c"
  },
  {
    "url": "assets/js/147.ffe29692.js",
    "revision": "40e8047071b08359f7c80f3343ecd41e"
  },
  {
    "url": "assets/js/148.4726551a.js",
    "revision": "e6447e1a27751d0f96e9d8fba1479567"
  },
  {
    "url": "assets/js/149.f8132532.js",
    "revision": "426bc22ed31b1f1dca1bd7584427cf90"
  },
  {
    "url": "assets/js/15.cbfee7a2.js",
    "revision": "6c225e07870937133c325ad1acfed0c6"
  },
  {
    "url": "assets/js/150.691fa739.js",
    "revision": "b92c8d68c3588dd2c8d409810127d445"
  },
  {
    "url": "assets/js/151.06a78359.js",
    "revision": "59584a15ca4fb819cc7347363dca5daf"
  },
  {
    "url": "assets/js/152.72854f7b.js",
    "revision": "a1b48dc225a60ac5a74288b7eaa328b3"
  },
  {
    "url": "assets/js/153.8bc83551.js",
    "revision": "52a87534e907ef44cf63af74200c9320"
  },
  {
    "url": "assets/js/154.263bca67.js",
    "revision": "86887eff22ee6955d700a45f765bacd9"
  },
  {
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.c0fadf06.js",
    "revision": "88c758bdaf1c75f2b20f4f4e9c230c6c"
  },
  {
    "url": "assets/js/157.930f754f.js",
    "revision": "5cd6a0f9ea05fee477fb0c0f08431509"
  },
  {
    "url": "assets/js/158.8f17ac26.js",
    "revision": "ab5221a37166f9d97d98281f0c36f299"
  },
  {
    "url": "assets/js/159.23195153.js",
    "revision": "4ec881de6b0d8eaef918b6b14bd634b3"
  },
  {
    "url": "assets/js/16.f5bf3695.js",
    "revision": "4e27335ce76784629f64a9c99f477300"
  },
  {
    "url": "assets/js/160.1757f763.js",
    "revision": "d469015ba2083c7c131e1df461401828"
  },
  {
    "url": "assets/js/161.b7bcec74.js",
    "revision": "720622f94cdb58f124b54eb2559280e5"
  },
  {
    "url": "assets/js/162.121eaaab.js",
    "revision": "664f9bd9f6fcee9b77e73cfeca1305f9"
  },
  {
    "url": "assets/js/163.c844d89b.js",
    "revision": "18337b4e01e04c3f1ec4917c8b2094c4"
  },
  {
    "url": "assets/js/164.1948822c.js",
    "revision": "81a0b853131a0b73df92ce9ccd6468af"
  },
  {
    "url": "assets/js/165.34090240.js",
    "revision": "f4035eff1122dc6eed3e24770f9c3acd"
  },
  {
    "url": "assets/js/166.fe5d061a.js",
    "revision": "e6b614c2512187255f8ce4a744ddd8bb"
  },
  {
    "url": "assets/js/167.c6333d1e.js",
    "revision": "c141fd65c9cce6e134f1fd518d2671e0"
  },
  {
    "url": "assets/js/168.d49d7376.js",
    "revision": "c51f92b684a4bd532f34708968031754"
  },
  {
    "url": "assets/js/169.c565777a.js",
    "revision": "a6d09f18456111d6452e805bd83b0f98"
  },
  {
    "url": "assets/js/17.2d3a07ff.js",
    "revision": "8c92dbf568201c38d531cf6f5e47b23f"
  },
  {
    "url": "assets/js/170.33a81ba7.js",
    "revision": "f31b2f23a0f01893da41b7becc98796b"
  },
  {
    "url": "assets/js/171.adc746e4.js",
    "revision": "4165f7b8866fcf1246e47ae29bf4e191"
  },
  {
    "url": "assets/js/172.f0c5b274.js",
    "revision": "64a7421910759bfc855e01d2d017568e"
  },
  {
    "url": "assets/js/173.b637ccc9.js",
    "revision": "be43890372ec4a41602a40980afc1a6b"
  },
  {
    "url": "assets/js/174.dfb856ba.js",
    "revision": "2f7d291d42801b1e3bfe71928c295e0b"
  },
  {
    "url": "assets/js/175.f730edc0.js",
    "revision": "29e82d5bfc07789705c10a91cb506c0c"
  },
  {
    "url": "assets/js/176.9974f2ac.js",
    "revision": "a5bbcecfb4ef47685e030e8197996083"
  },
  {
    "url": "assets/js/177.91e1c738.js",
    "revision": "ca62a57ca05127c03c8c28dca3ab864f"
  },
  {
    "url": "assets/js/178.81dd2638.js",
    "revision": "ad956fedc62a8f548b56121c0adcacdd"
  },
  {
    "url": "assets/js/179.78c2e721.js",
    "revision": "ffc6a1032177fff216fe3839e18e66d7"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.149675ca.js",
    "revision": "63911b22925a434c7e6a643de555e37f"
  },
  {
    "url": "assets/js/181.6ba43c32.js",
    "revision": "beaec6a59219e232beb932f5ab9930c0"
  },
  {
    "url": "assets/js/182.8e843d4e.js",
    "revision": "ce38356d012f8675a403486df267560a"
  },
  {
    "url": "assets/js/183.4d394d0e.js",
    "revision": "d17725354eee744d482b8b1008edce96"
  },
  {
    "url": "assets/js/184.a130aca5.js",
    "revision": "fca473e17ba4048f720239edfb073bd2"
  },
  {
    "url": "assets/js/185.4b3b7f83.js",
    "revision": "4ab878ab87018ccbfce58c7747885630"
  },
  {
    "url": "assets/js/186.130752a4.js",
    "revision": "f7cfbd4089ec69b624c9f0edecdf984f"
  },
  {
    "url": "assets/js/187.596d10ca.js",
    "revision": "3cf723ef8355a57703c38018ddfb9289"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.df2867fc.js",
    "revision": "e5634229324ae4f21b1fb72c8a098d8f"
  },
  {
    "url": "assets/js/2.6b6ad87c.js",
    "revision": "b688a1d0fb147cd70752b0b4b3fd066b"
  },
  {
    "url": "assets/js/20.f011ed43.js",
    "revision": "4a3dabf24f0917aacc2157751d439d0c"
  },
  {
    "url": "assets/js/21.85c1b68a.js",
    "revision": "ed1b514ae3b7cd7a691013230975f874"
  },
  {
    "url": "assets/js/22.e3d781ec.js",
    "revision": "661b4d5ebb390f0b9455c4c1a080f835"
  },
  {
    "url": "assets/js/23.c3503fc9.js",
    "revision": "8eb739d46253e6cc0265da3fde21fc28"
  },
  {
    "url": "assets/js/24.f647471f.js",
    "revision": "a520aecb4b40406dbf187251df771772"
  },
  {
    "url": "assets/js/25.4293cda6.js",
    "revision": "8e765c6ab2bf223f31f26e66698147f0"
  },
  {
    "url": "assets/js/26.58d0e7bc.js",
    "revision": "d0c033767c5ccfc302d974112e8d522f"
  },
  {
    "url": "assets/js/27.b87e2e27.js",
    "revision": "f9ddb8e524f683ecce65e13f28e3416e"
  },
  {
    "url": "assets/js/28.17f79b11.js",
    "revision": "32febaf03ddea403c9fc60dbe5cbe5ba"
  },
  {
    "url": "assets/js/29.d505e0ef.js",
    "revision": "fdeec52bde09b0ae4598a7525878399b"
  },
  {
    "url": "assets/js/3.67e2d0f8.js",
    "revision": "072a0d2f37c5cafad6e4f064e4c1c5f4"
  },
  {
    "url": "assets/js/30.43c391d3.js",
    "revision": "dedfcff6c3ac3a06a714ffce7a5dd1ca"
  },
  {
    "url": "assets/js/31.a63acf0c.js",
    "revision": "c7520d71584517e7edabb8af59228c7e"
  },
  {
    "url": "assets/js/32.8de41028.js",
    "revision": "a451f55550c3b2828610a82e48d294e5"
  },
  {
    "url": "assets/js/33.fc547de5.js",
    "revision": "a0ed34fb4cb6acbca774c587a3128b78"
  },
  {
    "url": "assets/js/34.9b3ac84c.js",
    "revision": "b1e256220aca857cc20e0e1dede756db"
  },
  {
    "url": "assets/js/35.b0d7ad6c.js",
    "revision": "5330fb28f6f15b8270c850dcdc828bea"
  },
  {
    "url": "assets/js/36.30bcd9ef.js",
    "revision": "d142e2ce7931afe9247f2eefea63079d"
  },
  {
    "url": "assets/js/37.48ee16c3.js",
    "revision": "b7d3e48abda68e7ba74781956ee1497b"
  },
  {
    "url": "assets/js/38.9e54fcf2.js",
    "revision": "0b0267782964ab5bedce65250d2bf5a5"
  },
  {
    "url": "assets/js/39.58b561a4.js",
    "revision": "3d1bc1f0d2b38dea569dd75a6deb6587"
  },
  {
    "url": "assets/js/4.37e95573.js",
    "revision": "2d3d0e39bd2446d0dbf15807a08ce7b2"
  },
  {
    "url": "assets/js/40.4b33ac9d.js",
    "revision": "d240cd037769f8239893f9c9c8ee9de1"
  },
  {
    "url": "assets/js/41.fdf3576a.js",
    "revision": "47da393015fc5d98717829f3f0e2364f"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.2f1c937d.js",
    "revision": "abae80eb278517130a3ade429ca493d3"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.4125e054.js",
    "revision": "80e22d5f1dd59fad2787057ce1e2210a"
  },
  {
    "url": "assets/js/47.63e31ae7.js",
    "revision": "758f849c04a8fc9420fd5cf4f1aa3508"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.ac21104b.js",
    "revision": "dcef4ce2bff352ea1e6897460c251ef1"
  },
  {
    "url": "assets/js/5.66fd9d37.js",
    "revision": "25b7acca5a3a031f4b127083fb63fbc2"
  },
  {
    "url": "assets/js/50.73ffec8a.js",
    "revision": "8e8023ddf2d3103e683d6a2dde79cd64"
  },
  {
    "url": "assets/js/51.dccc502e.js",
    "revision": "9ed228dbab88b2eeb10d4f0eba358527"
  },
  {
    "url": "assets/js/52.79355e6d.js",
    "revision": "f0686728fc65f25f6d8d19cc5dc9e2b9"
  },
  {
    "url": "assets/js/53.a5c41b9e.js",
    "revision": "cb1b86cecf118a3ed638ab6d60cc8a1f"
  },
  {
    "url": "assets/js/54.e4490439.js",
    "revision": "a97c55b737bf6f21a5d9f6ad46a7c379"
  },
  {
    "url": "assets/js/55.2a0f92ca.js",
    "revision": "11f2bf22979d4238ab1e0bd47de901a5"
  },
  {
    "url": "assets/js/56.fcbf14b6.js",
    "revision": "a67531e626fd6e050058e15185c03e0b"
  },
  {
    "url": "assets/js/57.5e82402d.js",
    "revision": "c56316c3bb06b172d23c2edc4c9746c7"
  },
  {
    "url": "assets/js/58.2f7bc410.js",
    "revision": "40a89a82b8ae52de59ba731c55a8f2b9"
  },
  {
    "url": "assets/js/59.db4e6b91.js",
    "revision": "21231b8fd4a53b9ad6e4195a5dc88135"
  },
  {
    "url": "assets/js/6.3ec98cad.js",
    "revision": "f5da373cbd6861c0ef990056e011233c"
  },
  {
    "url": "assets/js/60.a9ab7792.js",
    "revision": "79bda478370f8bc6649c505430c16704"
  },
  {
    "url": "assets/js/61.a97ed058.js",
    "revision": "9ba3b8d692a5024534915f2ac3010894"
  },
  {
    "url": "assets/js/62.f47193e6.js",
    "revision": "939b1e3252304b1fd75b469993241fe1"
  },
  {
    "url": "assets/js/63.af570ecf.js",
    "revision": "1ee0710d0f794cc8bbd67f466723a1fa"
  },
  {
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.dc0e6f5f.js",
    "revision": "898e0ec78bb9e430200039e6dbc4238f"
  },
  {
    "url": "assets/js/66.61419441.js",
    "revision": "f00cd18688e694e916c76aa3716d945d"
  },
  {
    "url": "assets/js/67.6309a3ff.js",
    "revision": "34f11dc9865eec731d4da402695c0294"
  },
  {
    "url": "assets/js/68.6c58381f.js",
    "revision": "cbda7aa441c2f59226553ad50383a528"
  },
  {
    "url": "assets/js/69.bace815e.js",
    "revision": "a2bdd16c1b3b4d32d13804a5d5afa487"
  },
  {
    "url": "assets/js/7.72d21939.js",
    "revision": "8222a37db1b7af264704ec94bb52ba74"
  },
  {
    "url": "assets/js/70.7cac1002.js",
    "revision": "600e9227ec872a996a853a4a0d6773c0"
  },
  {
    "url": "assets/js/71.fc0a25f0.js",
    "revision": "ddafcf74514d7f2bc7a5931d39236aed"
  },
  {
    "url": "assets/js/72.e3e56d8a.js",
    "revision": "43bee5350b2a9531bf6572d99e23a279"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
  },
  {
    "url": "assets/js/74.62879d15.js",
    "revision": "343f5349fc4f903be2bcd43632ba9afb"
  },
  {
    "url": "assets/js/75.378edbce.js",
    "revision": "2f1197c1391b4894d5fa7a4e80172132"
  },
  {
    "url": "assets/js/76.1e47cf9e.js",
    "revision": "224dcdb7fc9f1a6c26c1a1bff5f863f6"
  },
  {
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.67a40c14.js",
    "revision": "b756a617162d171f622898e8b43c8398"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.582ddf8f.js",
    "revision": "991df0fa3a500322120fca264a69c507"
  },
  {
    "url": "assets/js/81.63ba1b79.js",
    "revision": "6ffb990709f5c434610b1d2dec108a16"
  },
  {
    "url": "assets/js/82.c03f17f5.js",
    "revision": "c9d3b08594c2fb96d3f06abb6f0b536c"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.dcadbd7a.js",
    "revision": "e58477c6bd523af46f756c65bfe2f8a9"
  },
  {
    "url": "assets/js/86.9a349443.js",
    "revision": "e609478cd03c9864f77ee3e3a749f586"
  },
  {
    "url": "assets/js/87.53359d44.js",
    "revision": "8b192b4cdae7c5533daddb50c5077a37"
  },
  {
    "url": "assets/js/88.762c006a.js",
    "revision": "795dfc549c286612ba5df48ed11790c8"
  },
  {
    "url": "assets/js/89.cc169b69.js",
    "revision": "b9988f97e9b286e037a7888d37aa62d5"
  },
  {
    "url": "assets/js/9.df19c560.js",
    "revision": "ba8d1f14e2da71e11efd7479fb865a1c"
  },
  {
    "url": "assets/js/90.f6efdaaa.js",
    "revision": "9d1be4a70e6b593b544922893ca0857c"
  },
  {
    "url": "assets/js/91.a2895f7a.js",
    "revision": "075c23438a89a8e557f24aa813c66825"
  },
  {
    "url": "assets/js/92.20b1d082.js",
    "revision": "5c99d3208a5220600f125252e9a86eff"
  },
  {
    "url": "assets/js/93.81a25cc1.js",
    "revision": "7d07f030f7f16bd2a2b597972fa43c65"
  },
  {
    "url": "assets/js/94.d3751a34.js",
    "revision": "1c1fb35cab6a592754031d38aa5d2dca"
  },
  {
    "url": "assets/js/95.4b8e4f81.js",
    "revision": "3674c755ad6334c7f5b8ff659fa8fd42"
  },
  {
    "url": "assets/js/96.ab3ad32e.js",
    "revision": "35f687bb7412407951d54493fd9c182e"
  },
  {
    "url": "assets/js/97.52079f1d.js",
    "revision": "18cb8217fc52a6b382ed81f7301c6e72"
  },
  {
    "url": "assets/js/98.9d042d5f.js",
    "revision": "0a577a2a8c9b8b0845b1382cdeb21c9c"
  },
  {
    "url": "assets/js/99.c4f086d5.js",
    "revision": "ffa54d9e11827f7f43584bf4b0c0b7bd"
  },
  {
    "url": "assets/js/app.9be46bd0.js",
    "revision": "6f213fbc10392f4cef6e13c55d0bb210"
  },
  {
    "url": "index.html",
    "revision": "644fa3bc4b457cde4c0ca529bf30e513"
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
