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
    "revision": "2b3bb6b9752a5b965e231c217818bce2"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "7086927d4e526b1016cb6e0dc1bee7a5"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "39b2569fd43e8aa1007d8e7229366fcc"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "6ed1041940f7874705aaa6f99651204d"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0bd4811c615926b1e16b935eb8206c6e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "67b8153bc06d8107cc7c22afeac06edc"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "36df5a77afb8e1beda039c1e2aab0849"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a5a5321cfcb9837e971755684ece9e11"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "7093397c655871c457a48bd4dc7ab916"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "8517ee3e0c3cfd33a455688125ed1e32"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "7e86bb6544e3d69a9a7b3e2274f32bb7"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "bfb7c98441f96097f4ff1919585eb9c1"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3b3ff8edf3d6e70be4f739d616548dc7"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "83080b1c3b372ef953d1818b380921a4"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7a273fe677f37a8253a9966ba323f5cc"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "30b7da866d5f661a450ae93dd05e0f2d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "8cabab7941e7b6601e2745de5ca83b3b"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "d8e2510d7ceb7097f8dc03a557e5043c"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "9082b2687d022f56769ca89577e20dbe"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "46483bde27a28a896cca0545d13e8a0a"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "1021624626e1222cf9d6ba24e086e669"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "9b0ee4ff16a135f9c034b81d883faf4b"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "2273620c59e828c8ea1ebb3af03e7317"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "03b1645d862f26f7bfaa2c0692936d64"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "2e2e9cb98e65453af35e2ee091551d85"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "16f1d583ad94bffb6fc9727306d06e28"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "6c5e1a725cf2930e0daa67742bcebfb0"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6ec596c368aecaa1933bb5e911a8459c"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "1df559bac351a9a8c117b39b07ca6ddc"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "554faff17fdb5a710eff32ea952a2453"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "3140e3fb1b775d082c88620ec9f5cd23"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "1381bfbcc4fdbdefd2cb73b3694a9d8c"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "0197315d741fb41b288d27488e9d65ba"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "7df482ba7fed4956df176daaf3f6ac9f"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "5decc50f6f06d69ce3e33b92c94bc831"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "444d88eb88dd9ebe66fab2e05c101dc5"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "c349e3a2907b9990a9036aaf8c293056"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "9af3c5e7641950b5975bfc1897b315d0"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2af70fb3e5a019d4ff9dc50cd63f923d"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "284b3989f1d6b7cb1062adc9dcf65923"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b863d85d08eae15331aa5adc86e3d175"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "5b8cc1d0f28ff06b140bfb35cd383ef1"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "c5a01e925add339eb4237e3d9a1441e8"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "f84cd8952418e53ea961734b1759394c"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "f8161b44de5b9a6f778231666434fedb"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "bfcd05d2c733bd212af60cc40b9090f6"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e479e69e7c3d210771902b912cb10b1a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "09d72675b02e91f056c9c20a2d65a0a9"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "2b2cf9c714738517f1b8796fde8a0da8"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "eae5849e337434078232f52e0b866f96"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "1a884cac9d7024836254134eb20c1aef"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "4f57ae2dc8cbf2804bc5de36c93cc90b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b9554b736139e52ce8ecee7973116e0a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "37a5de0a65d080d628cccb0dec11c45a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c0db9c639f65ae807f7f7a6d4c3776ce"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "4440c5ac9e173554f7bd329eaee74820"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6243d8e6b931b8492ac4ab09bc4f9d1c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "522ea83d7453b7da2891898901634b97"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "798ed1f790078b709e72454960122436"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "6ef38f9ce43975a747bc8b60e1160ec1"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "b67e3cf66e9b0554a78876bcce54405c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "6d8e4c156eea588e2d60f1129ed5b93e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d51270969e16377cee686974bf29f10d"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a79c3c75b51f67a41385cd6d3e55de46"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f781c43510eff2d50072a055ca812027"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "b5a2651532ed3b1f04c7c6aa014750ea"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "40fb5fa38ef8e2e667137e1cb8a232f7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "76682e8738e61c5ad2bca647a4141fc2"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "3944759b38baaf776bfa3445927847db"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9e4cacc25cf42a807544f414696b8fd9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "fd4e0ac9195d068f370bfe285f934f30"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b4dbc1d6611410b8af9242e666446b9b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "825bdf512244f69a958278d36c2a284a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8a71c7e972f5d7d60d90e41fdd8744d5"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "07f304bb8531bd4608fb72b127c1fa60"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f3a72356a5134dfc1a3b6aa4d0efb1e8"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0029531c131abf663ef00f8153c6f260"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c46eb4e3b1170af53641ab8a50ed4357"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a8e3eab7fd0b3f62874ed582a7b11567"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "00707f4527cfa6b1ddd976330e540a48"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "3c0fce76a1de5f9951dc63ff137e7de0"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5398082fe2c5f54b12ddada2145d8eb2"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "8bbbb80403beb027350840c8ab9f4cff"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "425932ad12121bd9231d2b5dc20bbb70"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "fd70a35639da3080a84a91505f157360"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "f50ba86446125c01d604fa5ef265b049"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "74efcba16f54235049bdb5d475ddeba8"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "5d8d0e0973df87990a464d19aea77b89"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "cfeeae2e6aa1d5d510b6a767282fe2ad"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "cab0daf6d2a270a820d60cae8b7e6e22"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "30f7892f1ba41eb017812e4070f47e07"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "da83c8c28b48b7d38ce059f64830a4e6"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "85e2495f3cd32f4d33c8fc4fb49a1077"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7331d41f33572cb48fec7696bf5ec766"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "75a5a2c466c04e10e7168329f3f9fe0e"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "f89cd90f392f0d9250626279dfcded4a"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "06bedd88aa49da88deeec222c3111186"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c37dd23b180b9e836524960b24db0930"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "dc2f923031f7006a93624b1ac85941b4"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5973ca53071e33b0ae1174a103dfa595"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "9135b3d8c8f9b1d4458cf7caefab1fbb"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "26c08fa4ebd9e86880c9209505799cc7"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "7df6812f856e01552d7c137b1cb1b98e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e2266a08a1ffbaf03997c8bff38ea074"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "4e5e680f4d8d7613d27769c59f5f16ad"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "89e2c4495abf79814634b2f272f37786"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "b28b3e3eaa9c9aa8c1a807dac9514b4a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b8d3c98857a07e92b25af7d3023bbfc2"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "9bad4a2aef28806cbc42f405d9254840"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b979cbe73c5fcf8436cca53ab36d8e0d"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "e3cbee6d5c9d6ee9adeb3147bb6d99cc"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "59c58bf8f2893139309d60bc397b860f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d15099a9778d9055fad12302e872dbc6"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "924e634343b6844f7ee177fb8c78f7ec"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "9e125ad6d5ec2eba88f335a00c8de4df"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "4e5ee402014fe16b4a2701e11aa213a1"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d806a60d3adc4c563d153d666009631f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "68595449a556c711fb8da6d28fe848d9"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "390c105f9c6b0e03c20049326f7b69fd"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d44422fc9e2ff1aac464e5838ca604f8"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "10a6d369a618ac50a83f9180cfca19a2"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "b9c06a2555c207b228096491e5d6c032"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "3114a71442f37f23a91b11a0b8508855"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b87af813a027086e33811a450abc0d2e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7b5114197965c6cea60b8268acc3cc8c"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "8945c7bb2d4f991f7c2d7f3603d8fb2c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "ba0a399676220d7bc3fd003db0798f0f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e7ac94e0114f2917656cb849f8a86656"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "46bd5c5a1f2a799ae5a1ba1336f106f2"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "e6b1293966f0c6866bde37fc1b6ccd58"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "c14d8751860c8fddba9831ec63f72548"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5380fb67571da35225368a066998c370"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "920ae7c69e1da6afbd81dda22a61f4b7"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "f5ff23ccb92c5a4d1fa8f6c2807f0e9b"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "35ef668c77aea8dedd98875d9439158a"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "16f85a4815bb42ff5211e9ebadcb29e5"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "e94c427b350dbfdb70772f62ca1756b6"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c16d7cf215f391d0e54a244b2eb28ac0"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "8fa2761bd99e86239dbf01f35cae9a4b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "0029233d0cba1cfe89ed909b59299d79"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "82cd65d9a303379618060bcc9b0f9393"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e4c54e1f26917f129b62342f6cd8597e"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "e70d4b6057d3ef7ebc3ff9294d4b8bdd"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "328113c1e6013846d2f70eb4d8eb81f3"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "3b5b13a6c5d4ab696fda36652dfd056c"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "ee78cdfe2ef60fde0149159bcc42a740"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "f509053a4749644c648e6564beb06a0e"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "8d607e408e9c14908e14b625acaf3f25"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "32121c130142f955b558c5b3fac209d1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "3787fa0701488e3af41f3726dc593899"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "44a369d166fa8ce65f6c7e57e7106ed6"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "b069622c77785149d5813091a984488b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "83115be252cf43ec9168f023e752c171"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "560bcef521a88014bdd0f128cf0c254b"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "cf9553c27fa4ad0591ecc2bb71981f85"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "f107a8fb16b2399685e4f9c333915785"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "da191a2e2bf5c0d555cc42babc2177cf"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "e8aa61d6d0bed4e4ccba9b781231425d"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "6451a5bf350acbe38cef8f58d66d761c"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "c7afc1f72d62c22ee9a517a8934698ae"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c8b336bb4fb182d1ec90eb63cd5198f6"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "43f886392486e467c9373bb0992d21c4"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "5a407a6ab9a537f587ffcff3bb31981b"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "3db458680230d50c0230438abee3ab39"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "7c5911fdc868714be37c66457655816f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0f38acdde50fcdd97e5dc75af71bb9b5"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "92c0ab92b4fef08f6f5aa1eb0886f32b"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "abbe90bb03d7fe8b263a47dc6aad3ad0"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "b883553ef13461b9f1d290f7926d3ace"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "9611ab6de626a6550ee6147f53b12d2f"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7ae2fdf285c3aab2954fa7ce9a888567"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "4b1464215c1194ab36ed591f04e37aac"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "c6c71bb90509ef4dfe577ffbff9314b0"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "9fc692d90b16fee4204ea5c07d867290"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "981af7305808ac456d8257ed8abce5a4"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "334f2d5d36306533c0a8c435250f35ca"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "b90d4d7b20d724d17d1dc98b8d140411"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3e9a5b7d541ea3ef985d129fd54a6004"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "b33e938f0cf50d9f565d15af7ecd6ac2"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "bb7686f0a6dc5913ceaf2b2e8c09831c"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "2ee69dda992961548c19649f6364efae"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "99c5cf8518e6d4675df8c9b2b045dd68"
  },
  {
    "url": "404.html",
    "revision": "a064903b7bc8fa487a7744ea567d47f4"
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
    "url": "assets/js/1.c48088d9.js",
    "revision": "799ac862bd1800f58c59308c21bda6bf"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.2356a255.js",
    "revision": "2109308f8f2520e36ca711b76561c2a4"
  },
  {
    "url": "assets/js/101.bdaac78c.js",
    "revision": "d49361b5af4bc368d57f9deb843152d3"
  },
  {
    "url": "assets/js/102.d7158fd0.js",
    "revision": "b3dacbbe348aea8964cb837fd8ae5667"
  },
  {
    "url": "assets/js/103.508bda88.js",
    "revision": "7f8e7257087bd375beb89127eb6faf7c"
  },
  {
    "url": "assets/js/104.0f257b3e.js",
    "revision": "5afc03243bbe51259b62ca3674ab7547"
  },
  {
    "url": "assets/js/105.2ad5dd30.js",
    "revision": "baef7705c22f4fe47428b370a9024d1a"
  },
  {
    "url": "assets/js/106.5c41231a.js",
    "revision": "c530d0f1b7939df20de0f883c0c51fc0"
  },
  {
    "url": "assets/js/107.ae9505ec.js",
    "revision": "7ed52b9c32ab3acc45a15faf30f6a48a"
  },
  {
    "url": "assets/js/108.9aa01f65.js",
    "revision": "ed895819339d3e22eab55b49bee96620"
  },
  {
    "url": "assets/js/109.4fd775f5.js",
    "revision": "2a7fd069938fb80b08e5e2ece1d5933b"
  },
  {
    "url": "assets/js/11.2b3c02e1.js",
    "revision": "85cc571d2a6bdb395ea3179d3c2cc5e3"
  },
  {
    "url": "assets/js/110.667c3d7f.js",
    "revision": "954f654e58e6e1158cf9c00cd5cf3bd9"
  },
  {
    "url": "assets/js/111.7a026a9e.js",
    "revision": "40f4ac7cc0e7990b54b71f43a802037c"
  },
  {
    "url": "assets/js/112.da812543.js",
    "revision": "149ded8167227c56929ef5247a81564e"
  },
  {
    "url": "assets/js/113.675f5689.js",
    "revision": "85ef8574cc55349152db3468576f282b"
  },
  {
    "url": "assets/js/114.a0ad7d47.js",
    "revision": "f2a877a1110d50bbe29e5e75a059ec28"
  },
  {
    "url": "assets/js/115.5a6dff37.js",
    "revision": "16491ce8eceb54264327fe9b125a765d"
  },
  {
    "url": "assets/js/116.8ddf639b.js",
    "revision": "ba8f5869783f26890f492cdc0c1b9c68"
  },
  {
    "url": "assets/js/117.b3366944.js",
    "revision": "08a7a3b6db3da38c7c9c1d17897bee10"
  },
  {
    "url": "assets/js/118.acefd203.js",
    "revision": "2c28ef1d2a0c7a82bb88902ca960e656"
  },
  {
    "url": "assets/js/119.aa913856.js",
    "revision": "795bf347cf1e18a3d9eccd62c3de32dd"
  },
  {
    "url": "assets/js/12.88d886d7.js",
    "revision": "803e6bc7b06b92530c20e692f07216df"
  },
  {
    "url": "assets/js/120.ee66ac05.js",
    "revision": "5ae57d660615b9d0bbd937b051f63716"
  },
  {
    "url": "assets/js/121.34f90e1c.js",
    "revision": "64bdb9a8812c28633e2c6c5866f9f1aa"
  },
  {
    "url": "assets/js/122.e5c33642.js",
    "revision": "26de6cdf64f4f3265311436df731493a"
  },
  {
    "url": "assets/js/123.2f6a4adc.js",
    "revision": "e1423824b46fcfbcb94037c23274ed8f"
  },
  {
    "url": "assets/js/124.5d629753.js",
    "revision": "9a039361feb75ae830847ab9d49d4b2f"
  },
  {
    "url": "assets/js/125.c8dc9ac0.js",
    "revision": "2b2b1c7d1c3b2ae6017e21a7f53f9d92"
  },
  {
    "url": "assets/js/126.71902b60.js",
    "revision": "081a6d5f4e15e66cffc444585b1190af"
  },
  {
    "url": "assets/js/127.6497df13.js",
    "revision": "21b25bd55c866a79654d06558d9af8d6"
  },
  {
    "url": "assets/js/128.7d0b7546.js",
    "revision": "5a684089fe19de3808d1afad090abb98"
  },
  {
    "url": "assets/js/129.8e3355de.js",
    "revision": "69485e317ba97c196a47739335008b40"
  },
  {
    "url": "assets/js/13.4c1b2220.js",
    "revision": "b5602dece2dbfa9271091abce58fd9b0"
  },
  {
    "url": "assets/js/130.eb434fba.js",
    "revision": "4118becfc94412689dfc47aa3ad232ef"
  },
  {
    "url": "assets/js/131.d933b0e5.js",
    "revision": "9b5ee1ad772b242062eee73e9d8e0759"
  },
  {
    "url": "assets/js/132.1c5e0b25.js",
    "revision": "aa9f2d40acdf568a0f145d93f6955417"
  },
  {
    "url": "assets/js/133.a0ace04e.js",
    "revision": "30aa6dc283afb464fb5d1a3b485d1b10"
  },
  {
    "url": "assets/js/134.0a3c5491.js",
    "revision": "40a6de476480ed48e24a3a00913c41ed"
  },
  {
    "url": "assets/js/135.ad781c0a.js",
    "revision": "1b177bc0d182cfd4428590847f19717d"
  },
  {
    "url": "assets/js/136.d23532bb.js",
    "revision": "9776d859c16c5d67736d33ad87d7ff15"
  },
  {
    "url": "assets/js/137.44d0cd48.js",
    "revision": "cf0ffb8a4fd35af7f796ac31e6c6552f"
  },
  {
    "url": "assets/js/138.73f8acbb.js",
    "revision": "2528ffa77fdd1a39d84086faa1035a0a"
  },
  {
    "url": "assets/js/139.deea70cd.js",
    "revision": "a7c3b5f1e238f991471060e5e252802b"
  },
  {
    "url": "assets/js/14.5ca81767.js",
    "revision": "2ac36e43c00156a1a843e3006ad10331"
  },
  {
    "url": "assets/js/140.35c7e6d6.js",
    "revision": "677cfc5f93772da6fe7a1bb94640b4d6"
  },
  {
    "url": "assets/js/141.c9fd5152.js",
    "revision": "4b4225c55b20d4a97b593fc094b9bdbc"
  },
  {
    "url": "assets/js/142.419bb90c.js",
    "revision": "a19fe3f382dde7b78c8a3fe240236567"
  },
  {
    "url": "assets/js/143.10909895.js",
    "revision": "e41172f2f6292f8c3d2b2d221c96f7b4"
  },
  {
    "url": "assets/js/144.1b9c3a48.js",
    "revision": "778bdaea14de77f591831ebde423c5a5"
  },
  {
    "url": "assets/js/145.e8a54dca.js",
    "revision": "e898d4eeab66d887ad6afefe21bef7e5"
  },
  {
    "url": "assets/js/146.9cc2c94b.js",
    "revision": "21cc774888a182da7193bddb206080b3"
  },
  {
    "url": "assets/js/147.fd110999.js",
    "revision": "63666d7d1418fe3f077b15af6da87fa7"
  },
  {
    "url": "assets/js/148.aa7909f9.js",
    "revision": "297a25d99e608154882d56c208f14085"
  },
  {
    "url": "assets/js/149.15b593f7.js",
    "revision": "ef2ad7d10dfb81efff437c9cd39f80a0"
  },
  {
    "url": "assets/js/15.04747bd0.js",
    "revision": "045e4f40223e91edf3df7e139a82b77d"
  },
  {
    "url": "assets/js/150.d0330a7c.js",
    "revision": "d7a00232d2b57aef2afc07f834421838"
  },
  {
    "url": "assets/js/151.f0c13f7f.js",
    "revision": "ec4e4de0c913c8d9a8da646a9f6afdee"
  },
  {
    "url": "assets/js/152.75a6043d.js",
    "revision": "a776314850f234dcc094a9729ed55090"
  },
  {
    "url": "assets/js/153.e3fc113d.js",
    "revision": "aedffd2149dfd57a8d90716e825192f5"
  },
  {
    "url": "assets/js/154.4e24d199.js",
    "revision": "3b280047d96c7cfdaf1ebdda51f16261"
  },
  {
    "url": "assets/js/155.b015e319.js",
    "revision": "4c55f9a80a475af4cfa40b0753a65284"
  },
  {
    "url": "assets/js/156.612c9701.js",
    "revision": "8cde73134e5f223b7c5c64ca5fb764be"
  },
  {
    "url": "assets/js/157.4d8da020.js",
    "revision": "33dc8604a72f2ef70c19b286a50746dd"
  },
  {
    "url": "assets/js/158.57e16f61.js",
    "revision": "6e414bfb436546e5d39b0f5b9d9f0289"
  },
  {
    "url": "assets/js/159.e7b950ac.js",
    "revision": "39651c0014229759f3f076fd6f89e3a5"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.2cc28bb8.js",
    "revision": "31a86f81a4dcceeeebb7c32a824bfb2a"
  },
  {
    "url": "assets/js/161.2e471699.js",
    "revision": "6fbf77d72b12eecf380bb8a76aee8f8d"
  },
  {
    "url": "assets/js/162.8bcfbe8c.js",
    "revision": "af785423f69c69d546c3494d279a2b5a"
  },
  {
    "url": "assets/js/163.2d4ade50.js",
    "revision": "0219a33dc8690bea6924e55b300c481c"
  },
  {
    "url": "assets/js/164.ba4968d9.js",
    "revision": "e83b4105d9a9e0a1cdd01b07284773ca"
  },
  {
    "url": "assets/js/165.b9acd0ea.js",
    "revision": "5ab0b8d28af063df7a5572381ebd185e"
  },
  {
    "url": "assets/js/166.9f84357c.js",
    "revision": "24c74f1a1c173b99de8d3f1848bd6d07"
  },
  {
    "url": "assets/js/167.25e9a6bb.js",
    "revision": "efe3e72477432ff23882179611aa3ec5"
  },
  {
    "url": "assets/js/168.06ad77e2.js",
    "revision": "43486a0721c5195678b9c4b2d123f751"
  },
  {
    "url": "assets/js/169.a8496fac.js",
    "revision": "68caaedff3a6a8a347b4405d68d1b95f"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.06f93fe9.js",
    "revision": "b5cce300c7c63fcc96331de18955d2d9"
  },
  {
    "url": "assets/js/171.d294123a.js",
    "revision": "040de057dde49a113edd555adcc06b79"
  },
  {
    "url": "assets/js/172.1ae048ab.js",
    "revision": "a90f61358c89be9444079424a4db6d63"
  },
  {
    "url": "assets/js/173.f8182ff1.js",
    "revision": "d2fc9ecfeb5cf75d70509cada889f293"
  },
  {
    "url": "assets/js/174.9c146b17.js",
    "revision": "512166abe65d2e657cd28a1cdf296f48"
  },
  {
    "url": "assets/js/175.1e45b42d.js",
    "revision": "36b2492d4a2ed5fe4308ca6951ba6602"
  },
  {
    "url": "assets/js/176.fbf257f2.js",
    "revision": "0ef683f207d7fca9db92163dd6013992"
  },
  {
    "url": "assets/js/177.52c382ef.js",
    "revision": "78e44ee3703db6aa4f18721a8cc20feb"
  },
  {
    "url": "assets/js/178.a5d7a46f.js",
    "revision": "d5e1253b98337e1081a3d38964b09792"
  },
  {
    "url": "assets/js/179.190f5da8.js",
    "revision": "e346a341d8e3086b0c5407a9bf06a295"
  },
  {
    "url": "assets/js/18.a7f51ef7.js",
    "revision": "2d9e52ad476acc5eced4e1cb510f170d"
  },
  {
    "url": "assets/js/180.3f338be7.js",
    "revision": "924b1862fe37fd2c9f46d3bcbce57d83"
  },
  {
    "url": "assets/js/181.2f10fad9.js",
    "revision": "1772df56f36f8d470c0898fa75647a57"
  },
  {
    "url": "assets/js/182.1b10bc8e.js",
    "revision": "b25dbc02339d63c9064ae208e99dfb92"
  },
  {
    "url": "assets/js/183.02588941.js",
    "revision": "3a965f9a98cab9ece91042c5c58adaa7"
  },
  {
    "url": "assets/js/184.c61a3d60.js",
    "revision": "9592a2f797da4d47cdc777bab03af149"
  },
  {
    "url": "assets/js/185.fd563cab.js",
    "revision": "aaea79090405de54fc606d261456a776"
  },
  {
    "url": "assets/js/186.f3a19a3c.js",
    "revision": "8d96e2ba1df0f8e3332a3d9e7845f9e7"
  },
  {
    "url": "assets/js/187.1e1a2ff5.js",
    "revision": "ceb540f85022dca1195ab543a728cf24"
  },
  {
    "url": "assets/js/188.af1e747b.js",
    "revision": "c251e50a74f9a4b9ab7aae2e58542ce2"
  },
  {
    "url": "assets/js/189.0e4a673a.js",
    "revision": "be16948a37c7dd66afdfb5c45f078886"
  },
  {
    "url": "assets/js/19.fc6e108a.js",
    "revision": "4482333fb06b3d9dacb4666df58b7bf6"
  },
  {
    "url": "assets/js/190.63c77d7b.js",
    "revision": "6eee98fffc284d36234a90609f689ac1"
  },
  {
    "url": "assets/js/191.86df1e24.js",
    "revision": "cbec92386c5c104a7f5d91c8365c9860"
  },
  {
    "url": "assets/js/192.1740b0a6.js",
    "revision": "74d90c7f1d3991d6ee9e74fe8d3fa376"
  },
  {
    "url": "assets/js/193.2f0a53ae.js",
    "revision": "0302b6c1db538db023ff5ffb149df260"
  },
  {
    "url": "assets/js/194.8578076b.js",
    "revision": "3a32f69c8fbf628bfa41f29c7bb183f7"
  },
  {
    "url": "assets/js/195.70cb4465.js",
    "revision": "7a322fc8d824739c70b66b4d55e53934"
  },
  {
    "url": "assets/js/196.03a67da4.js",
    "revision": "967151ef33988e304bc69e6ca394a585"
  },
  {
    "url": "assets/js/197.241bcd6f.js",
    "revision": "9858f35a954813716fc448a2f7d5c234"
  },
  {
    "url": "assets/js/198.5aead5a3.js",
    "revision": "5fdaf0fb22c82152b798643281bb0af3"
  },
  {
    "url": "assets/js/199.dbd4e81e.js",
    "revision": "bf0a4c5f306a5a924cb5c18e9b414805"
  },
  {
    "url": "assets/js/2.b4216d11.js",
    "revision": "c91caa0cbb51d4eeb4b47314079d6d6d"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.1cfe96ea.js",
    "revision": "9def1ee6ed3a2d746aa797b1401a2407"
  },
  {
    "url": "assets/js/201.6c58f2f1.js",
    "revision": "77ad846c0c7a1eadd2f4f8ea7d02b731"
  },
  {
    "url": "assets/js/202.9e620fee.js",
    "revision": "4f5cc7a1e908bfc21a9843232bd211e4"
  },
  {
    "url": "assets/js/203.6bf2478d.js",
    "revision": "ad665414219bcaad20ac933a26b4a3f6"
  },
  {
    "url": "assets/js/204.854a4c8e.js",
    "revision": "5e666c78259091b2088c046d8e939d02"
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
    "url": "assets/js/25.a14d92ff.js",
    "revision": "83b286adb80677b508f7489abd924c5c"
  },
  {
    "url": "assets/js/26.924f33da.js",
    "revision": "eb4815169ffe99ebbc0ef07404ebbaa9"
  },
  {
    "url": "assets/js/27.61da10d5.js",
    "revision": "e61ccdb093da0187208bd991374d7cb9"
  },
  {
    "url": "assets/js/28.33528d39.js",
    "revision": "e25b796b2326beb9cde308a28204cd2a"
  },
  {
    "url": "assets/js/29.46df63df.js",
    "revision": "a53730352c88a553620f55e170ac3bcc"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.8bf55ee7.js",
    "revision": "b45a033ef168e74ccd4ffc1be3ee921e"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/32.c99dcab0.js",
    "revision": "d7b3586fba5805e698307a84eb076517"
  },
  {
    "url": "assets/js/33.50724876.js",
    "revision": "99006b3d91f1204d9f4e8c72eba6b9e2"
  },
  {
    "url": "assets/js/34.215c1c72.js",
    "revision": "67dff40f03c14946edd142a3023d9506"
  },
  {
    "url": "assets/js/35.7295a493.js",
    "revision": "13057e524e81353e48555dd65f695efe"
  },
  {
    "url": "assets/js/36.8daa3912.js",
    "revision": "04549ac84742363b92713ee91e5ac6ed"
  },
  {
    "url": "assets/js/37.0233b395.js",
    "revision": "87397236e88d3e87b858f6ff09d01d35"
  },
  {
    "url": "assets/js/38.0455efe3.js",
    "revision": "61da5fdc1b88f55c6b3dab9ce2f6c377"
  },
  {
    "url": "assets/js/39.527aea6a.js",
    "revision": "0ba22d1000947e24a83be7d668b6282b"
  },
  {
    "url": "assets/js/4.13ace995.js",
    "revision": "7b831806d7411338e9ebc9a65375aacb"
  },
  {
    "url": "assets/js/40.c744cd02.js",
    "revision": "2b76efa3498792fffa6849e1c02fbbee"
  },
  {
    "url": "assets/js/41.17679801.js",
    "revision": "eb36d41228f058258e68e57c9e959cea"
  },
  {
    "url": "assets/js/42.47fee068.js",
    "revision": "08aaeaaddf7402f70067b1ca274a8bc4"
  },
  {
    "url": "assets/js/43.bef54ec1.js",
    "revision": "e2bcc200ebda697cc934b2f9aa9f3767"
  },
  {
    "url": "assets/js/44.642d2852.js",
    "revision": "05d02f2347668b18d7da1b7e927c5280"
  },
  {
    "url": "assets/js/45.580ab0f8.js",
    "revision": "0a1f91144d2ce9e9cbe3b6699b81ed43"
  },
  {
    "url": "assets/js/46.d5ff5e04.js",
    "revision": "e97328e12353e35b10d10244821128e1"
  },
  {
    "url": "assets/js/47.eae4fc09.js",
    "revision": "bfca6337b8530c0ed00a83222e52d812"
  },
  {
    "url": "assets/js/48.b0a06e3a.js",
    "revision": "dc6c4b62ab8e3e44228db50e7d546dba"
  },
  {
    "url": "assets/js/49.5cd6fb87.js",
    "revision": "78509eb1f24577528e676248bdc61892"
  },
  {
    "url": "assets/js/5.d8f051dc.js",
    "revision": "e2bd7a7ced3a9192740000ba1e9180d4"
  },
  {
    "url": "assets/js/50.452ecd4a.js",
    "revision": "238652856ea0cd2cbe1220d7d1dcdae1"
  },
  {
    "url": "assets/js/51.85a05888.js",
    "revision": "cf9471416bf137a4d940d970ef455f02"
  },
  {
    "url": "assets/js/52.0aa858df.js",
    "revision": "58cbe598b996ee9fba97c961a67ce4e2"
  },
  {
    "url": "assets/js/53.c50739a3.js",
    "revision": "15eb9df184f90db9248ee733510a023c"
  },
  {
    "url": "assets/js/54.42c1d591.js",
    "revision": "ce162b7a1100760ee2d408d8efa01b18"
  },
  {
    "url": "assets/js/55.91b0dcbb.js",
    "revision": "0e467902488ae5cda75873d27210a6cf"
  },
  {
    "url": "assets/js/56.7dd65f95.js",
    "revision": "b814b4b46f7fb2e8485878ae9750bb83"
  },
  {
    "url": "assets/js/57.8f6a5e6f.js",
    "revision": "c6621533bb3db482e4b5406b8d5d1565"
  },
  {
    "url": "assets/js/58.b1455cb1.js",
    "revision": "aaf18c2079b06cb9bc337f115b57fb60"
  },
  {
    "url": "assets/js/59.b632ce98.js",
    "revision": "229ec87de0d263e70359626a7864f4c3"
  },
  {
    "url": "assets/js/60.7b7b0562.js",
    "revision": "c07b4c752af536ba6189ef8c4cc9b4e2"
  },
  {
    "url": "assets/js/61.48ff03a9.js",
    "revision": "8924d54737c3f09df6019a731be123f8"
  },
  {
    "url": "assets/js/62.d032c0ae.js",
    "revision": "33d7e8923fb05e76dda06c34d2eccdab"
  },
  {
    "url": "assets/js/63.34ea7f21.js",
    "revision": "4ed951a92401e25373f8fc7feff6ada5"
  },
  {
    "url": "assets/js/64.5fbb3850.js",
    "revision": "044449a74b9061b9548a5520264c7652"
  },
  {
    "url": "assets/js/65.9a5047d0.js",
    "revision": "dfc4a16ec42f03c97f9593ed199cee84"
  },
  {
    "url": "assets/js/66.cfce6207.js",
    "revision": "a3f467899a5e3e1ee48a0cbfe456978c"
  },
  {
    "url": "assets/js/67.e4d5d3d6.js",
    "revision": "a056e811071a91374ed2c6fe9541dae7"
  },
  {
    "url": "assets/js/68.559b35ab.js",
    "revision": "ab3c8b6f3d2ec93304c6ebaaefb053a1"
  },
  {
    "url": "assets/js/69.48d11a23.js",
    "revision": "344e80d25b34d4128dfe54bedb32c6a1"
  },
  {
    "url": "assets/js/70.b39b4793.js",
    "revision": "2a7cd4ef14b31aa874d96d4807d5ff70"
  },
  {
    "url": "assets/js/71.a30b7052.js",
    "revision": "71d5b1f7c293538c809ed3fc09199269"
  },
  {
    "url": "assets/js/72.6862f4c4.js",
    "revision": "c04d928d34098411d3c683c13f2e957e"
  },
  {
    "url": "assets/js/73.b3fe3b09.js",
    "revision": "fc1bf4384bf5cbe4e9f5bab8d603178a"
  },
  {
    "url": "assets/js/74.eee0098b.js",
    "revision": "9c146685a9af9372cae86c8dc0326806"
  },
  {
    "url": "assets/js/75.4ceb5309.js",
    "revision": "907433b003d5e3078e7061592f82cc5d"
  },
  {
    "url": "assets/js/76.cf226a6f.js",
    "revision": "257e783b83d4878d2bb07d29d9060953"
  },
  {
    "url": "assets/js/77.f9594366.js",
    "revision": "ef4a56744d46fea4c07631cdbe906ada"
  },
  {
    "url": "assets/js/78.cd67ebe5.js",
    "revision": "164de533df0da44ac2a81f153923f4f5"
  },
  {
    "url": "assets/js/79.a567bf5f.js",
    "revision": "5d4acdb6d122becb34d281c6491c0f22"
  },
  {
    "url": "assets/js/8.e217d416.js",
    "revision": "0ccc49133f7a26693890c62d634b41ed"
  },
  {
    "url": "assets/js/80.3d0870fa.js",
    "revision": "a81d6fc2dc23356262901e0a65b96720"
  },
  {
    "url": "assets/js/81.f95eef5b.js",
    "revision": "2ba2a505c996d9d54005985ca156d0d1"
  },
  {
    "url": "assets/js/82.908d2175.js",
    "revision": "fe966ab1688711b8ea1d54b4e229ca05"
  },
  {
    "url": "assets/js/83.5cfbd502.js",
    "revision": "af9cf7181d739b3ed2158cc3e87689e1"
  },
  {
    "url": "assets/js/84.eeb10ca4.js",
    "revision": "af4bb14e31b990e9b5974782ace3fd37"
  },
  {
    "url": "assets/js/85.e44b04ea.js",
    "revision": "c3075251223437f75d53ea71982deea4"
  },
  {
    "url": "assets/js/86.a4053dee.js",
    "revision": "afdca071b33b112e18ed0b4b11b2c455"
  },
  {
    "url": "assets/js/87.f7c87e17.js",
    "revision": "8131d7a1a1dc8249c87cf5bfab100b47"
  },
  {
    "url": "assets/js/88.91cded87.js",
    "revision": "70ba31a61f1dfa99ee59b344fc26f9cd"
  },
  {
    "url": "assets/js/89.090e0b05.js",
    "revision": "de96abed6581a4c5b8b5d64d94630179"
  },
  {
    "url": "assets/js/9.36758668.js",
    "revision": "d3d70926bbeb2c5ead445be6838147e0"
  },
  {
    "url": "assets/js/90.76b36aba.js",
    "revision": "6dcb7f1d64fcf536e4da5b0aa822a6d9"
  },
  {
    "url": "assets/js/91.369f13c5.js",
    "revision": "e79d2cf675cbc9e816a15fece5e1aa14"
  },
  {
    "url": "assets/js/92.d137c818.js",
    "revision": "4086e7bdaf7ae772b0d3c62a47d1789b"
  },
  {
    "url": "assets/js/93.fb1fbacb.js",
    "revision": "13b921b48ee50c5a0c6580b48b31885f"
  },
  {
    "url": "assets/js/94.df61741d.js",
    "revision": "210bdcf7134c237c80af4f01915ad806"
  },
  {
    "url": "assets/js/95.fb59d156.js",
    "revision": "613baf21291897ce9cb399ec3cad2dc0"
  },
  {
    "url": "assets/js/96.5c8c28fa.js",
    "revision": "8dbd58f8512fd380138e2b78286672a1"
  },
  {
    "url": "assets/js/97.e6811712.js",
    "revision": "84a2e2f67467102e9ba3dd459fcb5508"
  },
  {
    "url": "assets/js/98.6a3e323d.js",
    "revision": "b11ab370dca2e1e82828cd2e75975ab4"
  },
  {
    "url": "assets/js/99.b6e3f8e8.js",
    "revision": "26da492845dbf9404acce8762d65c87f"
  },
  {
    "url": "assets/js/app.65f30f9a.js",
    "revision": "b5474a4437793e3d4b30c8b79bb2cf24"
  },
  {
    "url": "assets/js/vendors~docsearch.7730cb75.js",
    "revision": "ef37085eea030bf9b8cdc23f7ddb4c3d"
  },
  {
    "url": "index.html",
    "revision": "829c157cd7276c14312b684784a3f924"
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
