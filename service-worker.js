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
    "revision": "dd659f7127067aa816d100512117dbc7"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "f0b3aaeddb05a9e6211b24e2cd45daba"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "4edb0d3295e35f1351f0c846f726edb7"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "e1cbef5f737d8dd7a501a1e0a62e36f1"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "70bb7c32032a237f3a1db6157125bfcb"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "80445952c8980be44e7ec5e1deca26e7"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "2aa3d5e5a01f0d96509b889db38071b5"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "53f62fb2df8df30833911f53dadde9fb"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "7eca3f1428db3d1dee3d72a6c7d0fa30"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "07c101010ca5b4772ccf118ef5995b59"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "2ce49872f6ac42769cb96a45a2bf9175"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "387d7e6dff30d5de795f688f7a0a03e4"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "06141914b67edccf2c5593ab56357e79"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "425aff7b7034776947734b8d721c0d71"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "672b33fa55ca1e6233f74efe18ddc8ed"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "06784b9b7e69bededd92de6becad6b4d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "f334419f092748ea0ef78b218847c7a8"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "43b57b6acc47fce424dd0e5adb606697"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6d49fcb45e0075aaaacdd8d802b337bf"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "42a9b07c5939ee32a509ab41f56c18e0"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "37f8af78381c29a6213482363199b7f9"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "04e7532e3d2e8bc2cd5d4f19b586c6f1"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "fa54c74ae2fd3afc48a0bb815b25fcb6"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "801d4270132ca9332929c11b6c6442ad"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "ac208fec50e70a2bf082456139ebae28"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "11ab265639faeed19f0a56b94bda053c"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "0975341f5b8710434d1f45631f1aa7f5"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "78aaf6379f5e5bbc68217bab8128bd01"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "670fd8b61eda3351a4dddf3f1c9b522c"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "15096ab161ed8062cdfbc54016c8d1f2"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "c7545dff3973c12c3caf55d2430da9c0"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "a18e964a19ee0dd8c3716808dc4c63fb"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "84ea5c1908fbe93681272aa5444a48bc"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "36e8711289c8677f2138171fc58918ef"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "ab7d0aff10c80b3cbcf3156a2ce80f8b"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "3eb3fd64e4ee8f6e6d7ac4f08146818f"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "f5f3fef51460f1f4ace4569f50d508ee"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "4d90bdaf6c379f4532e3923df402627b"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "164cf6930c01768ca019c3287ef8ce8b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "a44458b312913079f4f15720aed363af"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b3431c1a8ef74cedfa781a9dcc4f6795"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "be6e11ede939ca5805b17386ce7fdb4e"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "96c08fec15e191e7eaa6c4fc40bee785"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "a37933c5b1745d1d6bb37c80af13ceef"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "ea8734dbe63a0154f0166b0f7b8f6045"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "b66baf84cb668c6f428bd3ccffb7f06d"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "bd1bf64ed522df99ce2e5287fc22a277"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "ef566dd9b610efeac547c5be7d1e0405"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "248d31065d0c85800335467fd75ac136"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "2cadbdc9adb36e893e0be99ccc28c4af"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "d99fd0ca750b8ffe1ab4ae5733826053"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "24a11f3e3f7291a2215bdef822acdeac"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "f1de6c6c53d2263185e77375d748f61e"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "32014b3e7438e9ca6c327a2b4e443b05"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "90b5a023d48b3394c7c7dce7269a66cb"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "2f1d1bb46b46c4b44746ca09c99331a3"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "aad7b5428c4dd1361597e3af6f8b76d1"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ec5990190050810d511cd6c81bdb7f49"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "e9f8586a6f53cd9e6d0103b95233030a"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e517cf8e24037724f43472e572fd7c8c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e1869be8a614e89b8a5a40d2f34c6a44"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "4088d2687c469543364d0c8f3be5e0a6"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d75da02d57e1758022aa2b2457d6e603"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3d644c337dffda6ab9b489b279e0d16a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "c513d603bac07c4c6bb2a9d6a59b8025"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f5a3dc23cc72ed29e50bb8b71df57975"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "a616b34e2e28ae4b667d90a63054d552"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "de9b47eeda3e34b802a5f369062bf0eb"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b6523ec1e012f827ce44660eb4526780"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "e6781dff7ea72f9a98cb3c0ada4b079b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "829ff7a48631d0485ed861b83448699c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "6c20fac84eb2aeeae23c0a73ff020656"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3f6ac47912ebab2e48306e225154accb"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "23ac0d7c8d51af47716a73754f092def"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9eebbb7686689135a82b93c85f78e3e4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e6d917b37041bf1aa89423d13808e557"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "88f60f76f022e6c66bd384d67d1337d2"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "25d5591924152b216244ee74ebbe2f26"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "cd040b87a55de5c135844ea81e0699de"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c3fe23a2ec38a32fa5a2e5ddc6b16d51"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "4b87eb5f0cddf41c188b129ac3c01817"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "aeee9b8c5f7cd3437803e059a87763b7"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "b3774852ba37367fb597ee6432f3d172"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "342ec132a78fe8940ec33e43113f4056"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "3b1b63c4a4398d4f5684a477556f7cca"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "d508493b7c29c4c2840760113796df18"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "4f97ad704d2076b5644dd17e60517f66"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9eed373e90ad2ec69c20dc9688023588"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8de27a265c3b5e1c8c1e2e0ef944d6df"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "91d5332f5bcd6ec80be1676283e24c75"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "1b74ffc0c1385815fb0ddd1f6013992f"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9968f946f1963a98cd2669e1e9477ccc"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "183cbc8c2c04631687fb1bfffa000310"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "65e818d22f4b9ef5f29a220113ed9dc6"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c3d848c0932284ab2ea34033d0564518"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7bb110d10839d38a097b006e3c36328a"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "33c2cc3a15663cc3c63e8c8eb52c2865"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "7d6c53a6af719904a10908fbaa6ad405"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e219edbc580c866253f27c6614432fdd"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4126993ce6e1fbb573e5f18f4f5aefed"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "be6e4dab09158f08663dab01aa0c7ba1"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "0de2ac37dbef56856fe46eaa70e358ae"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "14b3481c63cd3e79b21bf2ff1115b397"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "fc8f776dfbae14083c595c301dab65cc"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "5c4f4c4b5e4ea84ca125d6537f1065a9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e47221a21c5a4e694010fc63e72dae88"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bae536ff3e60d0eacc3303b400085a8c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "79d3488d2483d69750d4aa515de57fc1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "de202f06dbb953ba5ad1825d880fe642"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ccd6d33e782013d516272681ba9bac3b"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "442582702e817802ffa41121f8c70c61"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "fadc0db0b6048260cfdcf0815515d611"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e57ae34a8a6779be9db729e317eadedb"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "0aa73919a3a20a56b1fc22af591851bf"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "6f8078fd9df3665dd349a6ef2b7a3a79"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "295ff3c5755cf05648eed9888fb968aa"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "5181708f160abcac35d2f5d4fcb875cb"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "260bd9391b8bb0a7eae7495ca87647b4"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "3dba97176b2336f68b3548badb8c36bd"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "de451d7d2a99e6de47a8c4a8f5afc367"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "163dd8a89baa4558830ecfd60b4e430f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "98b7e9a90877353e6580d0558a46ce7f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "fa7555016d579579c8957b132fd84208"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "f2f3dce17ee9592fa33821b32c452949"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "40d4276f6d9b830746af958d70f35ed8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "0c056442afeac21c5b017b8116d1188b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "003542129e73904097a3a3793503ed8e"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "bbaf44b3b4abc1c1e9709eaff35425a0"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "6632d47d063aaaa3ee083664dd4a697a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "4efd2536465c5eba367a30dd1dcda95d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "762f6a7ce0a2d055c21c22b6418837b0"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "4cb11d3d04f6db0f2af1f4767d7efeff"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9a0db7328168ce0db3d5d30d95e6abda"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "38c7713a745a21f30670654a9bd3c73a"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "10769a679a1c1fea5f81b14a01e10979"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "8044f4b690808b3e5058de60a1141d32"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "95ed9f254c742cfd793739bd05315c29"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "e6e4fecd756a708555a77982d3165ce1"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "f5cdf3186356ab72ddf60be66f89a642"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "22359e665bffb8d34aaabfea5685bac0"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8d2f4368f5228a9ea23525656278a70f"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "26137fc1aa7905f877e2f14c624f6c50"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "4dc6636acae13aef2300c53f1e0c74f4"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "f507d51e5b5733c60005199f71c22f36"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "f8b622e315d166ae4df0efe027e1ec3a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "fa1e877e6cb8723677c3bd50d55db632"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "81e57d1d8ccee2f262c1a93b0da15f78"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "ee3e62cf36083e611b8fe733edad452d"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "0fbde9bac8a3abb8775a0c194e1914b4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "b78b73a4d2fa1e4fa7ca56c3fd6b666e"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "2a15c06030133e020e27bcaf53cd11e5"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "754ab145e27b3c6ec6648411ee9c70e9"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "c1ea7f7417beaf797ada5308396db5f4"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "bea7d285403fcc64345500070a199cb8"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "9cc55a0ff3c8076cd15d219fce7787bb"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "28c31bd66c8b03acc5e7f7b91a1d4299"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "dde3cc483991efea80aa86e1e08e2414"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "354634194062a276df1ce0852f37bca1"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "7e29bd907021987e527945fe7b0b7235"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "33c90b259fd2bea2b24081c70bb1c5d0"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "1a5f2ce601b5de7edaaa3b98308b4227"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "45131885b39d0070ccc035a17a8b4716"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bd53c05f54d0ffeaa78e29ed8fa4aa00"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "21779ab80f3f6e159c8fe087b5f9a719"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "b32ae4babb27f14a5fc40630dd066062"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "aeef64c6d382ea66cde4cb332147f57a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "c11756a92ae0ebe69820bc03df94b19e"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "1a89211ce50d35ecf4d3a512d7f281c5"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "8a12c576f9cadbcebf5bb4ef95c09ec7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "57febe49699221621e208d78daad1690"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "1b8bbd7243a595842aaea22a58a0cdb7"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ae8e846b3d9dc484c32dfff7a50e9578"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3109ee2b365571dfc8608161e9f9f7fd"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "4c9dbfc269f98bb877e28e7c92109c40"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "abb55f584eea25f97197a49566f527a6"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "bdf3605baad7023765ab369c4a0b1ac9"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "95d501a0a1e777dcdd8f298ef7b71eac"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c366fe215d7addb1a7d5fac3b8060b56"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "2733b8a731d029deb2d21dd67405d49d"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "3140c77df0ce5052b636ebaac77f7dab"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "d1f4a570d5216c1e29c95fd971c209af"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "b8da8e2242c3bd5b149851c19815c455"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "da77935ba75a41ade8cefd512b1122a8"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "8cef067e0001e369a17ebb58c67d9e9f"
  },
  {
    "url": "404.html",
    "revision": "cf654682a4d5ffb18e3e70b4273f8c97"
  },
  {
    "url": "assets/css/0.styles.96c1d9de.css",
    "revision": "d0078f913e24effeffa73299ae9081c5"
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
    "url": "assets/js/10.e5881fde.js",
    "revision": "1fb4364d98cc4b379dcb8e53b15365f9"
  },
  {
    "url": "assets/js/100.89e7ecc2.js",
    "revision": "f2254b87deaeeca3fe3769bb537316f5"
  },
  {
    "url": "assets/js/101.b15a86ee.js",
    "revision": "897e7ed5dd5174e66fc74c230e698a9a"
  },
  {
    "url": "assets/js/102.2db06888.js",
    "revision": "d2c1c4ee224211cf23cb593bcf5acaf0"
  },
  {
    "url": "assets/js/103.28e648b8.js",
    "revision": "c2ec4c4641906a378bb0091634fedb01"
  },
  {
    "url": "assets/js/104.db96bf1c.js",
    "revision": "4fc7f6721bcf3ca554fb5dd376679e36"
  },
  {
    "url": "assets/js/105.3035ed63.js",
    "revision": "34bfb69dc1d3e60fad04a2dc442115e7"
  },
  {
    "url": "assets/js/106.2176a062.js",
    "revision": "6c95a9e6b710545dadd54a28ef7366b0"
  },
  {
    "url": "assets/js/107.b1d5e56e.js",
    "revision": "d643e13955c47900da8dbe293abe58a7"
  },
  {
    "url": "assets/js/108.b700b315.js",
    "revision": "33486e9d830399ed158999cf21d9d694"
  },
  {
    "url": "assets/js/109.d7c55e7a.js",
    "revision": "160670e72bdd736611f5876109c7ba82"
  },
  {
    "url": "assets/js/11.85d44f79.js",
    "revision": "78f9f95e377a5f76386005e877451a8a"
  },
  {
    "url": "assets/js/110.3567e3c4.js",
    "revision": "efb6c0249146188b325dabb55945dd76"
  },
  {
    "url": "assets/js/111.8e3bdae3.js",
    "revision": "5d95caccb538bde14d014e35f9d05d0b"
  },
  {
    "url": "assets/js/112.19f78db7.js",
    "revision": "ce52e0f9e966d518116c34bfc2c75ef4"
  },
  {
    "url": "assets/js/113.a26dee8d.js",
    "revision": "316b0b80561242d49f40906d7d23d704"
  },
  {
    "url": "assets/js/114.20b9ea12.js",
    "revision": "a16da3f0fb462133a7e39e69ab63bb0b"
  },
  {
    "url": "assets/js/115.e8f7a18d.js",
    "revision": "9eacc11e85b0dc6095dd8c07a6720b84"
  },
  {
    "url": "assets/js/116.8d3eb0ca.js",
    "revision": "562345fd45e09880d6f88b8bb4f5dc4a"
  },
  {
    "url": "assets/js/117.5043c5e1.js",
    "revision": "e0e6027b0eaaa6ba4d1f9fa885cb0443"
  },
  {
    "url": "assets/js/118.42849bb8.js",
    "revision": "dd1ecba79803f3a62ca529633a559642"
  },
  {
    "url": "assets/js/119.f8bcc1fd.js",
    "revision": "ee413f64a0c37d5e94f52f3f659a9be8"
  },
  {
    "url": "assets/js/12.6965f2c4.js",
    "revision": "188a84793e8c8df3c44a1faaeed1e84a"
  },
  {
    "url": "assets/js/120.6b051fc0.js",
    "revision": "08d9fae9879eed4474632fb638fdd335"
  },
  {
    "url": "assets/js/121.4e33b273.js",
    "revision": "1a58a080d22f5c6c92e7d392cc24d1df"
  },
  {
    "url": "assets/js/122.f819986d.js",
    "revision": "05be84edc26200ac0dae681f1b9c55d7"
  },
  {
    "url": "assets/js/123.f657dfe2.js",
    "revision": "7f8eeae8c9faad0648669b5a01df3cc3"
  },
  {
    "url": "assets/js/124.2faaf232.js",
    "revision": "c2c5ec766bd99a3dae32d06176fa423f"
  },
  {
    "url": "assets/js/125.c4622e79.js",
    "revision": "4ca7757a686dbece9e8a399f218966a0"
  },
  {
    "url": "assets/js/126.929fb829.js",
    "revision": "9d1fb530449498739af1d3069485e5af"
  },
  {
    "url": "assets/js/127.4e3909af.js",
    "revision": "5e5f06ea3b6ef1b68c508ff2acfe2bfc"
  },
  {
    "url": "assets/js/128.3f39ba4a.js",
    "revision": "2d3f25e5bfc17eacf3e8e86a466c0d5c"
  },
  {
    "url": "assets/js/129.1aa09d7f.js",
    "revision": "1b2df9d0fd1c80d72e53b54ed9fc575e"
  },
  {
    "url": "assets/js/13.a092f219.js",
    "revision": "5d95d15be8cba44f92b720408600ab80"
  },
  {
    "url": "assets/js/130.755a651d.js",
    "revision": "0dbc08bcacfdcde6dac7dd3324eeab7f"
  },
  {
    "url": "assets/js/131.077f3cf6.js",
    "revision": "d88b82618c3a8d7991773052b7e3e582"
  },
  {
    "url": "assets/js/132.bcc74523.js",
    "revision": "107d962c8992888b39d48c8cb7af2bc5"
  },
  {
    "url": "assets/js/133.9c4fa39b.js",
    "revision": "8533397b0de21390c8c520e7f9cdfa93"
  },
  {
    "url": "assets/js/134.212a1bfc.js",
    "revision": "4f97ab646f4c7b131eebab585a2df026"
  },
  {
    "url": "assets/js/135.3f95e6c9.js",
    "revision": "d4db8d56d4b2933c054a8c7b4099568d"
  },
  {
    "url": "assets/js/136.ba7af336.js",
    "revision": "13d2048994d55dad1f3b714cf03885d7"
  },
  {
    "url": "assets/js/137.6ed34d4c.js",
    "revision": "276aaf6626d5e3fc4ce5071d79f12042"
  },
  {
    "url": "assets/js/138.451f037d.js",
    "revision": "c17294fa24b4b32af21592b0b598b664"
  },
  {
    "url": "assets/js/139.39d6b68a.js",
    "revision": "1258f3eacb858edeafc8b9476580de69"
  },
  {
    "url": "assets/js/14.2cd0d386.js",
    "revision": "96e47c991cfed950104c9e46e1df51e2"
  },
  {
    "url": "assets/js/140.2745da2b.js",
    "revision": "6932378ed0631962e038803c9827815a"
  },
  {
    "url": "assets/js/141.7f0cf1a0.js",
    "revision": "240ea33a30d2f130c8ad0968b7dc8fbd"
  },
  {
    "url": "assets/js/142.7db29cd9.js",
    "revision": "990b6fb5210d76812a388ae674f6872f"
  },
  {
    "url": "assets/js/143.92fe881b.js",
    "revision": "8f65153be5afce034c299efc27561962"
  },
  {
    "url": "assets/js/144.764afaab.js",
    "revision": "53ac3f73c1a8d7876101dadf7fd348bb"
  },
  {
    "url": "assets/js/145.9d75b338.js",
    "revision": "dee29d58e39be6f2227a2e717b3458b0"
  },
  {
    "url": "assets/js/146.d4a49470.js",
    "revision": "26b9ca723ddba8257b97cbb939f00531"
  },
  {
    "url": "assets/js/147.ebdb520e.js",
    "revision": "a9888c769919c768eb7ef9b61f6741b5"
  },
  {
    "url": "assets/js/148.89839286.js",
    "revision": "04a69eb572eaef173f7d14fda53e76f5"
  },
  {
    "url": "assets/js/149.dde9c6d8.js",
    "revision": "89ed03b7f815b564537872420b557906"
  },
  {
    "url": "assets/js/15.491a99fc.js",
    "revision": "e5d4ced8cfd42b3286e548839ccb441b"
  },
  {
    "url": "assets/js/150.2c68534d.js",
    "revision": "e4d2f57227fb4995f32e9ff702a4cba1"
  },
  {
    "url": "assets/js/151.9f1808bc.js",
    "revision": "01692f853e8f253664f16e309ed9dfb0"
  },
  {
    "url": "assets/js/152.8bf7778e.js",
    "revision": "0fc00673d1ecf88b925d97fa44cbf946"
  },
  {
    "url": "assets/js/153.e9cc5828.js",
    "revision": "934e01c9a446dfdb84c457da57560567"
  },
  {
    "url": "assets/js/154.efeaf337.js",
    "revision": "26b62b94718b4ff74d81121124d1498c"
  },
  {
    "url": "assets/js/155.224a97ea.js",
    "revision": "c1df20c39c64d663dfcbbbbf10370132"
  },
  {
    "url": "assets/js/156.6e17c93a.js",
    "revision": "7ed18994ea3e42ed777bcbd1dfde491b"
  },
  {
    "url": "assets/js/157.f0e6558d.js",
    "revision": "a19c23c6c654af399ef68cb0cab86862"
  },
  {
    "url": "assets/js/158.d6158307.js",
    "revision": "20d77793140c01d3e056cd50fdc426ff"
  },
  {
    "url": "assets/js/159.bccd9ccc.js",
    "revision": "2fd172b44836b77e26c41d3497683e7a"
  },
  {
    "url": "assets/js/16.2298575c.js",
    "revision": "aa17b1d561cf9e7d76d2454e25af711f"
  },
  {
    "url": "assets/js/160.d3ef90b1.js",
    "revision": "80308e9ed88a60f50c19d4c1d1527943"
  },
  {
    "url": "assets/js/161.0f4c3657.js",
    "revision": "f501f9b3c280eb3df375e80624134a03"
  },
  {
    "url": "assets/js/162.12799b9b.js",
    "revision": "ae5b82e372ea79e64ee3969182c87c2c"
  },
  {
    "url": "assets/js/163.0fb0929a.js",
    "revision": "289b064955c18c95bc9d0f25fd97492c"
  },
  {
    "url": "assets/js/164.318c721a.js",
    "revision": "b93e15ed35adf59b4c19bbde30bd3d4a"
  },
  {
    "url": "assets/js/165.59319da4.js",
    "revision": "00deb3f47b81499d1cafa97799976a36"
  },
  {
    "url": "assets/js/166.ffde0e76.js",
    "revision": "4d17a3cd719da4aebf1dd70d7249e202"
  },
  {
    "url": "assets/js/167.58ae2240.js",
    "revision": "94f32237bb879f56dffa29157eb59c64"
  },
  {
    "url": "assets/js/168.77ba4766.js",
    "revision": "5233f11ee304eb88727ce12dafa82d1a"
  },
  {
    "url": "assets/js/169.4291f558.js",
    "revision": "b1b697161779aa32c1c4de6465b8d4ed"
  },
  {
    "url": "assets/js/17.dfa0ee23.js",
    "revision": "7799b2e59336937fddbbffff4ab21870"
  },
  {
    "url": "assets/js/170.b6789255.js",
    "revision": "b1cb52e8f3f0e5d3d4ad409aea38c7bc"
  },
  {
    "url": "assets/js/171.2ef4c771.js",
    "revision": "a17d9f18b6c44847aa56e0f5499c4cfa"
  },
  {
    "url": "assets/js/172.716c996a.js",
    "revision": "a834c03f3726e25e75012fe15b80a054"
  },
  {
    "url": "assets/js/173.93266e49.js",
    "revision": "551ae2e8186427e1b8503f8fbdd9d54d"
  },
  {
    "url": "assets/js/174.43b4336d.js",
    "revision": "33775f6805d322aa0460c98933ec09b9"
  },
  {
    "url": "assets/js/175.3bf6a62d.js",
    "revision": "ff309368e8fb8dad946c4fb4b8cdde73"
  },
  {
    "url": "assets/js/176.330ee59a.js",
    "revision": "d2913ef027701d05fe3477aa7ce0b0ed"
  },
  {
    "url": "assets/js/177.ae014f6b.js",
    "revision": "6a15a4ec0d067b3153a941c1b51049a7"
  },
  {
    "url": "assets/js/178.3f3ab08a.js",
    "revision": "befdd9bf9ef5f1faf90773d600134a18"
  },
  {
    "url": "assets/js/179.5af41c3e.js",
    "revision": "ca45b1737b511e01bf81f8b5f51f3235"
  },
  {
    "url": "assets/js/18.19301560.js",
    "revision": "65c628874a15fb9bf5667943b62b5276"
  },
  {
    "url": "assets/js/180.2a4cdf17.js",
    "revision": "6e226e663e9dda04c40e104398af0e79"
  },
  {
    "url": "assets/js/181.db8a2f27.js",
    "revision": "4eaad0a65be95906492577882e78ced8"
  },
  {
    "url": "assets/js/182.8db78898.js",
    "revision": "50420f52b21a700abd5a1ce32844ec48"
  },
  {
    "url": "assets/js/183.a9dc4357.js",
    "revision": "cfef234f534455126c792eb0d4cca50d"
  },
  {
    "url": "assets/js/184.cbdc99d5.js",
    "revision": "205375835d756694c1dedb5c1e21bceb"
  },
  {
    "url": "assets/js/185.ee11fb7c.js",
    "revision": "2165998dcc2cbecaca860b385f2e30b5"
  },
  {
    "url": "assets/js/186.32c896b3.js",
    "revision": "6d379aff1bff193c8504dbc0248f16a8"
  },
  {
    "url": "assets/js/187.7b3decbc.js",
    "revision": "f43ad1a8d823f92ee648b5733da4fc9e"
  },
  {
    "url": "assets/js/188.3b72a635.js",
    "revision": "166cf4075920dd99527cdd312b069ba0"
  },
  {
    "url": "assets/js/189.67ab3fd9.js",
    "revision": "6df96454644cce85709be0cadaf77e8a"
  },
  {
    "url": "assets/js/19.bd3619b6.js",
    "revision": "0c791c4f46b06fb14a3bf9768372c467"
  },
  {
    "url": "assets/js/190.88f0f1d5.js",
    "revision": "7e3fd1e2ff2bdedf18ff36a9ba800c83"
  },
  {
    "url": "assets/js/2.dacac6fc.js",
    "revision": "f3778cbb829958f3570dcc91095b0299"
  },
  {
    "url": "assets/js/20.21582e9a.js",
    "revision": "5524047d6d8125a25bffdc2b87ea7af9"
  },
  {
    "url": "assets/js/21.cbba55f0.js",
    "revision": "3ef2994c166e7332413fab10ade8cbeb"
  },
  {
    "url": "assets/js/22.5d129b6a.js",
    "revision": "c062f5b526d61126957b0f038f7e9e7e"
  },
  {
    "url": "assets/js/23.78426e48.js",
    "revision": "f4e565c9524f1d7bea82526e343101d5"
  },
  {
    "url": "assets/js/24.e3552a85.js",
    "revision": "f6caade3b33405d079ddf91ee89c6ae0"
  },
  {
    "url": "assets/js/25.2b39a987.js",
    "revision": "23caa7f84bdfd974f743f2f78ea3917c"
  },
  {
    "url": "assets/js/26.70318b83.js",
    "revision": "71deb21afecf8049a912f05ee55f3ee4"
  },
  {
    "url": "assets/js/27.ac70a2dd.js",
    "revision": "191bbfa6c717e52ac98e01a555c72e1a"
  },
  {
    "url": "assets/js/28.d08faf27.js",
    "revision": "6f8b8b7a9e6bfb9c7c4f9cf59eaaa255"
  },
  {
    "url": "assets/js/29.0e821034.js",
    "revision": "58b74f7bd7c97190ac70b54fe0193870"
  },
  {
    "url": "assets/js/3.68a0110d.js",
    "revision": "367382265d1f3a1d183622bf52f0dd57"
  },
  {
    "url": "assets/js/30.b2b05973.js",
    "revision": "fbaa528834113e788dba59b740cba740"
  },
  {
    "url": "assets/js/31.9c95883d.js",
    "revision": "6507c63ab8c24fa0839dd6b1833bea9a"
  },
  {
    "url": "assets/js/32.fca80ea8.js",
    "revision": "7f7a8edc609096bdebc74a31768da65e"
  },
  {
    "url": "assets/js/33.add459e8.js",
    "revision": "8b4795591357c27a8064a8ba1024c3fb"
  },
  {
    "url": "assets/js/34.d662f506.js",
    "revision": "10592c7fdc0901c9e1717c4c94abc622"
  },
  {
    "url": "assets/js/35.772464de.js",
    "revision": "f0cae945ee7ed82f0407394433ff04c4"
  },
  {
    "url": "assets/js/36.634ea037.js",
    "revision": "da3144b7e1f43af526011c7fdc83faa0"
  },
  {
    "url": "assets/js/37.20bd132e.js",
    "revision": "159263f9fa4c708a9d92b753e6491c40"
  },
  {
    "url": "assets/js/38.64d644d4.js",
    "revision": "47b960185d648f221c61d86030f95583"
  },
  {
    "url": "assets/js/39.cb589aa8.js",
    "revision": "84d4e6ffa0bcb5cb31701e6216b49ae4"
  },
  {
    "url": "assets/js/4.ffd73834.js",
    "revision": "4af98dc51c5b2dab72d24cedb13132c9"
  },
  {
    "url": "assets/js/40.25b9bbf5.js",
    "revision": "67da8e85052d945b6d4568ab0a369d6e"
  },
  {
    "url": "assets/js/41.00330de6.js",
    "revision": "12d7c21233935085aa518ceb897c4b89"
  },
  {
    "url": "assets/js/42.5ac2fb9e.js",
    "revision": "c969220905ba053a92cf5361c33db6bb"
  },
  {
    "url": "assets/js/43.349722a5.js",
    "revision": "2ba47487193ce25aef3c387770f88b8c"
  },
  {
    "url": "assets/js/44.64ab773f.js",
    "revision": "f7fe8963e75617b14667c5ed31d93e37"
  },
  {
    "url": "assets/js/45.a5253be7.js",
    "revision": "29b636c8c7cd80322c97af6c934040f9"
  },
  {
    "url": "assets/js/46.8622f440.js",
    "revision": "7ac4650a80daab6fa12b879224dddbbc"
  },
  {
    "url": "assets/js/47.85878e22.js",
    "revision": "06e5e70c3eb184b06151b160298ffa98"
  },
  {
    "url": "assets/js/48.98b9a130.js",
    "revision": "162b64cba37229bae81ed7750cd3c946"
  },
  {
    "url": "assets/js/49.7e6b20bf.js",
    "revision": "6d4fa519f35e2657305d98ea12fc14c0"
  },
  {
    "url": "assets/js/5.ed549ee0.js",
    "revision": "03ff0e02b683c142d3517bc4e007bd4b"
  },
  {
    "url": "assets/js/50.663ef778.js",
    "revision": "121c6b9dab3aa13d96a5861f3fc75e70"
  },
  {
    "url": "assets/js/51.4664927b.js",
    "revision": "79fd4095b4528dfd391185a2628d1d62"
  },
  {
    "url": "assets/js/52.415adc58.js",
    "revision": "57d01034951de528efc34e829b9c7ba3"
  },
  {
    "url": "assets/js/53.cdebc6d3.js",
    "revision": "5641fdbe0d454ccb95bdecfc5ad7751b"
  },
  {
    "url": "assets/js/54.7939e53c.js",
    "revision": "ccdbb7eddb12cb8bcfa0be44e649fce3"
  },
  {
    "url": "assets/js/55.96b6e897.js",
    "revision": "948b7c88895e31384370dce297a7bfc6"
  },
  {
    "url": "assets/js/56.f1b8aa9d.js",
    "revision": "156f937f1a87849a39073cdb1aadb59c"
  },
  {
    "url": "assets/js/57.80d48017.js",
    "revision": "aecd63d8ebef8e94474fef8c8eddc02e"
  },
  {
    "url": "assets/js/58.73331914.js",
    "revision": "e81760019c0a6ecfe5c5fb434007a5f5"
  },
  {
    "url": "assets/js/59.ef6c57ad.js",
    "revision": "19e4f84eadfda20ab1e584dd36d05d6d"
  },
  {
    "url": "assets/js/6.306de04c.js",
    "revision": "2af94fabb5bea7cdaee8e67cbc93f8e6"
  },
  {
    "url": "assets/js/60.7d641cc3.js",
    "revision": "61f8c36c9d0ca51a908d594c2e4c8919"
  },
  {
    "url": "assets/js/61.cc1a4831.js",
    "revision": "38f30a4a72201ac122ec4dd2a4988a20"
  },
  {
    "url": "assets/js/62.7f143b15.js",
    "revision": "97c7d56773f2c1a2b20e28b62e5eae7b"
  },
  {
    "url": "assets/js/63.d83cc5ef.js",
    "revision": "217ef4ad46e69faa5b0f7545abc2188b"
  },
  {
    "url": "assets/js/64.03dc0d33.js",
    "revision": "55b3bca7b121858342f511712c31a250"
  },
  {
    "url": "assets/js/65.42099112.js",
    "revision": "89ce5d0bf35fcc135a4f511734e4d423"
  },
  {
    "url": "assets/js/66.d77a58dd.js",
    "revision": "8302ab593ffe70cedd4e1d70e70f8add"
  },
  {
    "url": "assets/js/67.6a210e29.js",
    "revision": "e28735b6c2ff1867ed901a497d6c5374"
  },
  {
    "url": "assets/js/68.1eb7958b.js",
    "revision": "1360055c722c64b7926e8d34e1b89a26"
  },
  {
    "url": "assets/js/69.4ed3fbc3.js",
    "revision": "3e943d33710917b13a2d5cea9b764025"
  },
  {
    "url": "assets/js/7.57f93c4b.js",
    "revision": "9db7fb0c656c9c9398dfaf70d2e435ea"
  },
  {
    "url": "assets/js/70.6f4d856d.js",
    "revision": "9a34e58224b0740b0f4b706d5e99204f"
  },
  {
    "url": "assets/js/71.313d2fa7.js",
    "revision": "e0affb96334868b54caa2d1ae4a3611e"
  },
  {
    "url": "assets/js/72.04c4dbff.js",
    "revision": "1f2193bfaf634e5f98a108feeebb0907"
  },
  {
    "url": "assets/js/73.0211a9ca.js",
    "revision": "b9364b1faa6e83a6e30e9d9892611d8d"
  },
  {
    "url": "assets/js/74.a0239f81.js",
    "revision": "3e77c34c43e31b3bf460bc07e69220f2"
  },
  {
    "url": "assets/js/75.89d35677.js",
    "revision": "f2667e33bc0171eaaae700c61d8e3881"
  },
  {
    "url": "assets/js/76.df9ed00d.js",
    "revision": "9cfece70a98dacffb20927f36ef7cd80"
  },
  {
    "url": "assets/js/77.9951424c.js",
    "revision": "687ed811564c0767345d22d164829788"
  },
  {
    "url": "assets/js/78.95b9c3f2.js",
    "revision": "8e4e2f42f8f48df9733ac7c99a2d2c47"
  },
  {
    "url": "assets/js/79.fc0c35fb.js",
    "revision": "7067a2c5d675c0326407b14a8e1756d9"
  },
  {
    "url": "assets/js/8.7833f373.js",
    "revision": "f8dcbd26ec3fc7fb36d5bcdb149804ab"
  },
  {
    "url": "assets/js/80.2666e915.js",
    "revision": "9524713de566c54d121d753baf68650f"
  },
  {
    "url": "assets/js/81.bb7f7566.js",
    "revision": "502508120b963e4d61775fe1dac40ba3"
  },
  {
    "url": "assets/js/82.80b00f91.js",
    "revision": "755632ce433e1c876443fbd43d59bea4"
  },
  {
    "url": "assets/js/83.2812d358.js",
    "revision": "8ec5d7dc3d0d30b118b49ce46ceac229"
  },
  {
    "url": "assets/js/84.d1bc7b90.js",
    "revision": "406ccefd6c7c678872dd25a0bde1e688"
  },
  {
    "url": "assets/js/85.679bc9e1.js",
    "revision": "5537993fcac3e45e7b132536ce78dd9a"
  },
  {
    "url": "assets/js/86.8bd0e9f6.js",
    "revision": "db10ac965e3a707389fcff82735abfdc"
  },
  {
    "url": "assets/js/87.793a2d3f.js",
    "revision": "9e90c53606380399a9adcf357710df95"
  },
  {
    "url": "assets/js/88.6c7aa29d.js",
    "revision": "a60f400854b7f6fd3382f61227f0b649"
  },
  {
    "url": "assets/js/89.a6aa54b0.js",
    "revision": "c579b50fb4a31eeea0a46db56a42a334"
  },
  {
    "url": "assets/js/9.b832aade.js",
    "revision": "c1ab8143de580d2b47ea33fa1b65aa2e"
  },
  {
    "url": "assets/js/90.7c1b8a3a.js",
    "revision": "65958e7c9c72f37a27a9caaa64ad61b8"
  },
  {
    "url": "assets/js/91.e49a2fff.js",
    "revision": "299bdaad380217b527ccff6a67120a84"
  },
  {
    "url": "assets/js/92.4ce6b690.js",
    "revision": "dadf9f16f8aa0ec74a8f754c8d89e908"
  },
  {
    "url": "assets/js/93.7d4d81b5.js",
    "revision": "a15235c9d73dec3beb0a113e7494f1d6"
  },
  {
    "url": "assets/js/94.655c5773.js",
    "revision": "258da16d47706844f1a8852c942e1e9a"
  },
  {
    "url": "assets/js/95.fdf59d12.js",
    "revision": "a845f294aa25a72857a8dd7c0f61f85c"
  },
  {
    "url": "assets/js/96.7cc9caf1.js",
    "revision": "1f367e3eb79f89fb86e5faf31d1a4ee4"
  },
  {
    "url": "assets/js/97.89429e9c.js",
    "revision": "f99564f6901a2a7c4c360f1226cc2412"
  },
  {
    "url": "assets/js/98.954a7d4c.js",
    "revision": "e1798638d87f357eb25e32f18bdeb893"
  },
  {
    "url": "assets/js/99.47cc3017.js",
    "revision": "d76710b1a622e984d17767280616bad3"
  },
  {
    "url": "assets/js/app.ba56b940.js",
    "revision": "fdb19b079d29afd1ab55b3b496916e29"
  },
  {
    "url": "index.html",
    "revision": "ab6d51951c34b7f2c63ce395de34a126"
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
