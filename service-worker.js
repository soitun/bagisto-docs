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
    "revision": "b5eb754b66361f6ca9acab0b037f4411"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "b53f7ee1dfe29792fffcced90d4c9da4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "896c0cc8cc7c86dd0679177f199124b3"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "b7e40cc7fbcfabdb80bab2526c7ac481"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "4197ea18e6cad73ecc7061aeb85b9eb8"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "90cb018446127881fa701df3c1ddda33"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "4f29e862d663075dd2fada7f65cdfc9a"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d70fdd9fabce6188ec3326c41b3d0503"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "ba14c1d92b624396f1a6d613291326cc"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "e109025f57445807ecb73b1bf8b85baf"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "6de1d6a60782accd2d9a9417067a3c10"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "4ed80fa4398f5453663e7f37c8b52a92"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "804c388e7676ccc0abe90e2da8e9c676"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "d5f9515abc7bad8f733fbf3bc346d4fc"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7063091d46d7bdebc68c020f49bd0d2a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "2c51deecc1fc4dfdb20bf4c5adf79890"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "713c6b4dfe89b5157dc731c4b74dd994"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b2579311a7ba93f214818308eac4df91"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "ec03a706ae6b07193301a85b053390ae"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "8d48106cb06ea6ab21aa619f1d3ae86f"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "a27f3f13547ec50f53b132287296a7c0"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "3d2e574c4a895fdadb6afca39a34bc0b"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "aba890defd09daf986f2f38d31b22f2a"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2bfaecafa7957e217fc2572f376bf5d3"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "1abef9b67f319e2357458441cac69fbc"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "b5dde80ed0f9cdcf0ec073d17ee7410a"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "70d4b81cc434dc3001d5a27e86cbe8c6"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "bd7db0b0b9d35113097a532f0b57e03b"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "66d861f617b8e0abc780805606ffb379"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "f7940f4ea5dffb42beb167fdb16b1a2c"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "8bc30d6d0ed1832f5de739d97300b367"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "9f335e276f09ec59baf94651db9875aa"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d8fa1914fe73551cfdf612823cd0c677"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ed2973e3224181eb0b92ed13c4561e51"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "70c72c89499619e15ecb346571ac0acc"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "01c3648b99c6b2c6a21a1cfb91026ca3"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b068d13c35c5824b3f627fcfd4fb5d55"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "8b5a08bf460edd1c5f89f0fe03f192d9"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "0334cb7a1d37a5d40a8b6b5c01839695"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "2d924c05bd0a30533987c912b14b302d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "ef9ac1a9fe8c1e57950dc439668a5462"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "1348acf2e1eb7346f9688dbd7893a7ed"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a280a4eddf7d7593de478a6a851f70c3"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "5218cbab50f7fe352c4ed0c33c45ce34"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "77ff17daa2601651399936400d1fb858"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "bf400af4150bdee4ecb95387f16b058b"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "52c071d9edb1b612d50a1e977236c45e"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "5415aa5bb3d29ac0da3f50db181f6c91"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "5754d72fc81dc0986ce6125334940516"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3234150e3adfe7f306e81aeffa2f242c"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "79c7d7923603f70ce6b22e73d1b929a3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b6063f509d1a56b043280e478b968345"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d1b25eb0ddfebae669ea8e41e04c8619"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "d09ab2e0acba928c12a6f7bc43227661"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "9874f5c334eaf42bd22953f916ba8881"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "e193e66f8ff5bd3e6aec6b40660ef801"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d9e14bc1500d495e01ebd8fd980dd008"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6f6e4e777cc0e12679aea69af59cb75b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "07552aae5af56f122ff7bf8119459d1f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7d5d17da0924e804f1268479c3bfc356"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "48cf964ca5e3c568481c0ad9a2306bfb"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c7384e652ccca204ef571d302eb5a959"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "9678fe820d12412f6205633066391708"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "1c7ab1127bd8a06e4b356d3b2a22002b"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "599327f842aa3f958607d97ab57b063c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0ab342a32364643667812d91af9434f0"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "daee4c801ee8dc508b74d421818427de"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "125620ed688711bb8ec97e25f0acee08"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "26b94d3d01edbe0db3d6db74b92ad9fd"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "6ac931201c9bd2aca1ce972b52a17d5a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f80a8e7912902a3a0428e40b4266d7b5"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "464c0502c808b90b50b68e68a44a3a07"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1a361726d6d6b4f0ec0e10068143c605"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "3df89ed39fdf46af7a1175349a936744"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "1e61c962a1d08c8a3e36517d28ece723"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "10549a98dc4d6d09ac21522a202f2a52"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "cd399d07cf20a8131e2a8cf63a4001a4"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "2077511a0fbcffe7f297582f37fd0968"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "e755376f79b45a7dd93d379db7720714"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "8ea3d7b7ac7d9a6bb25a965de2a61f27"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "88a8f5d14a5885ea9f83a069a1c0b433"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "17bec8c260ea74e88c2fbb64813bcd8a"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "b1ce9d6f35dc743cc7900eb86e08b082"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "d1f7c784c5a67e9522bb3111e24d10aa"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "be38d9275e73e1f875abafbc62bb0405"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "db1fcfc883a4bded180375f0a8a6de83"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0bf6cb393af7c9620ae828ad0ab50820"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "53bcf2ee2ed2d89750a891bf4606b557"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "ca14acad99468bdc98e4118fdc3eac0d"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5057149c98bc844ba31dcf9c9190a284"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "41b01c31036a910ed339ad6eb9cd6862"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "7fc0230959bd723a3f923a9a9e9edf38"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "9c3ef88b47cd89a003202e9ac66ec8e8"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "629e5b3f99d07a3081e62ce3387ed657"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1f6da8aeebb964f4a14f889fc63e967b"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "116c095fc454bb08644bd9b3d1b2d3b0"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e655b2249b0c44a7536feb4bf5b69f87"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "25bba662e3aa6e9a7b33a2e29967fb3b"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "969d14b19638a449803a0e7906584d2b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "12cb33286241db6551d0b33487e19423"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "96d3e8fd24fb2cdfb579093e5a584da0"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "0b3a1e3fdf598ec6da96974dcf579f0d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "d6bb738dacea536f2b8efad185ab3cdd"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "c9764236dbde70cee40bfc8c7befcb2d"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "e7935bf2e9056510ed49e24f14d19a80"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e6cd7e50f08b301c0d99cc413f143f9f"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "a28eb75686371fd1f575ba94d215a947"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "4bae5baa5da288e6e355d87f3290186a"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "3c476c971e0c81797c7c4706cace4acd"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "044ee5b328d65d9654b0b8aea4acc905"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "0c84de1d4899005f956f25d9c2e97010"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "cd5883db9347f807bb164432f9133d01"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "2c3ce1661d1e0abb78a92326115bbe13"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "f0fbac4766fc5308b1b9b58684f604c8"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ed31d2505ee466fcef010b51f85ce42c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "7428909e6644631b6614c7d9f15b84d6"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "01d2b3ab5acb7b61e5666b210babc91f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "46f0067222b7ef9523ff5c36c0f9319f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "86eaeaaff5aadddbb1535f01088a2c50"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "7297c200134fed8c156f040aa941615e"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "f57f13a1bbe711d24065c5cc19cc9bf1"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "65720bd422709c217fb8f7f9c4761d21"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "f27379c8ff829e9bdf3d55c8c9be77dc"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "6acb77d70fc28e1aa3bea1a5213a46f6"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "df856f9a622b5485394a5f957ee9f9d0"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "495b39642f6dbc1d94db219443d1d1f4"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "77ab87e49f548cd8e9e1ba757a3a78be"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e137c5e68d2f14f44e73e7390cb6b37d"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "902381073655114c24b397e41e7867be"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "b466228bd02b88fac52bf681e08b6a3a"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "b67003f9d1930de2ce8780079c7c1d63"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5089ebf78324866548bec9207d381962"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0db60c0a2db444d5bb16f974f0ced7c0"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "a36e19ed258180beddd33b7bc4feb70f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "93fe742287de2e0c1111569bd84097bb"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "0a80ad626d8870318b8385d82386b00e"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "0a1cb421b6100cdf636d5d60d94351e2"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "e3edaae17e041754715b56d88dfb0259"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ae930a23df03529a2b92e8292814a3c3"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "072edb9f48ae8c1f78e71c5b488092fd"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d338a1ed597b28c062602b4393870453"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "4f5e523e3ae51daf801cbb1debe57602"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "d783908b83e9a485ceeeb1737e9d3bec"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "f2a7b386d0c470c133a22c9d9124466b"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "7a813d1d4457e373d290c9512d107551"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "497bf8b5f3855e70441d89ddacdb8455"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "f2cc00dd79f10acda4f8fe074c359cd4"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "f5b99b29895981818a5dd472c957eed0"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "87678409b51829a6d8baa1343a3ce596"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "600f8439e90a4753c8c8034e6d964c01"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7a4003dc47cb7de202463bdfba9d0093"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ce995e62df0063e66e4cb36dfa0d6c45"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "1bee0dea5579e88906b93e944f770de6"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "6add52c217846cfb7a952317b66cb90c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "615457ac51d115ef8ad7b7e1d30a56ce"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "7cd0972a26420b5158c1d6884262618c"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "3cf98f66d5ed229bd86e3c9e6427e4ac"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "34b9af30f67eec9521e2724ba04cd71b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "c8f2ba26479300f27935195d00fa12ac"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "fe272db11aa2994eeaac79af8b7027ed"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "ef133173adb62be507a12b3a3e7b4851"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "f8761742b5cb65b3dae8e805b025c29c"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "0c1ab115ed8ae4c5d5687c79fab5bf02"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "e9acd84669a0def0556bbb19eefe7b17"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "362d5956760c745ec3daa5af2bdeca21"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "846365c31c5eb88469b9d4d5369b2065"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "6a8ce5a761ce4db75ca6c5533675492b"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "80610782aeb1ae706dbc242a29d45468"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "2af9c5a6ed46e7c5d6791da500b41409"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "f9f55ce250486e136e6e59d85450cb5e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "d65911f3ac41cbb14852a0fbcd2302f2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "8a6ff5cd756c9e606444f37b3d73598b"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3c04b885dd9d70fa1e7e8a861921ef3c"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "6061c385d4f92a25bd756ec92f1532d2"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "8834e7a6be7137ce6c991955848c7a51"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "d0ae3788f0d1574698f6147a1f9b5f1d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "9a4aa1cdf042cf71b7faf4da64eb65d7"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "644514f739195ad40f84f73323b28b3f"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5f903fe7f972babcb8883afb7791d378"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "ba6ed7ed1a7ed03da72b6159215f5bcf"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "922861740ee5442a0a82bfc78d4489f1"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "603fa595e2a63b67883d8e99fd24ff8c"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "dd1c8db8c3fafdb2c1900ce0ebabad44"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "b2172d1a8e4687c78cb039888cce6dc1"
  },
  {
    "url": "404.html",
    "revision": "dfd4557df49cdfc88dc60a7f71ae9096"
  },
  {
    "url": "assets/css/0.styles.3c367bfe.css",
    "revision": "3a1ebc21b86291251328834c0d5063c2"
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
    "url": "assets/js/10.5e02b531.js",
    "revision": "b82f4ace34bf20621e95690942b985b8"
  },
  {
    "url": "assets/js/100.47a0a494.js",
    "revision": "d925decb50a85c244a895a82de1d057a"
  },
  {
    "url": "assets/js/101.2388cfc9.js",
    "revision": "bc0d3be4a856dd36daee63b1e9f6fb91"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.e7404bf8.js",
    "revision": "bfc7a07ab0b73437435e3488c273fb8f"
  },
  {
    "url": "assets/js/104.c72317b7.js",
    "revision": "bed935081a317520aa375d8a29746033"
  },
  {
    "url": "assets/js/105.8584d4df.js",
    "revision": "043b1355a6414acb32c4ee6fe6588496"
  },
  {
    "url": "assets/js/106.07c142cf.js",
    "revision": "8799e0c2095373d170edbe7ca45e9e81"
  },
  {
    "url": "assets/js/107.4c8eb08a.js",
    "revision": "5942306cb89e960db623a8ebbac96eb6"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
  },
  {
    "url": "assets/js/109.db73fb7c.js",
    "revision": "3bfd1c4c0a92864540810304cab2312d"
  },
  {
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.df1a5bf8.js",
    "revision": "f2e48977499f312cdfd2fc4c1fabac49"
  },
  {
    "url": "assets/js/111.16c98f67.js",
    "revision": "68eb05d72be212dae69a8b68898513c2"
  },
  {
    "url": "assets/js/112.0793eed6.js",
    "revision": "22e1782ad9f92df6e774403cf1f18b86"
  },
  {
    "url": "assets/js/113.53a9e427.js",
    "revision": "62cc459ee9c720b8e1ec42d7bf6d0c6b"
  },
  {
    "url": "assets/js/114.8f2ac39f.js",
    "revision": "d0c1574cb1b12c2cf217fa2909584827"
  },
  {
    "url": "assets/js/115.483bbb07.js",
    "revision": "e99c90bf59873ed6ad7d32b12e95940d"
  },
  {
    "url": "assets/js/116.5aea00d7.js",
    "revision": "ff14caeface9e63cb7f06d338db49afc"
  },
  {
    "url": "assets/js/117.d5d7a001.js",
    "revision": "d2b4081d57ce11176f51f6dde42b2986"
  },
  {
    "url": "assets/js/118.63a60a6e.js",
    "revision": "b55c6f5ec0bde6a92cb36b22a50b6bde"
  },
  {
    "url": "assets/js/119.767c90a9.js",
    "revision": "e5e16634d6df5cf0b02594b5cb8ec4b3"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
  },
  {
    "url": "assets/js/120.871d1d83.js",
    "revision": "2551249018210649a6002e7bc4467a74"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.47a5a45f.js",
    "revision": "9508ca6e6a6ca0f3fa79e82bae99920a"
  },
  {
    "url": "assets/js/123.14708e61.js",
    "revision": "639d67b3717f996858e4a6ce11ab7d24"
  },
  {
    "url": "assets/js/124.d639f86f.js",
    "revision": "6bbacf5d3deafbdafabd6183d98fc0dd"
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
    "url": "assets/js/127.cec4e034.js",
    "revision": "aad49464c6526f45254aef5af188a06a"
  },
  {
    "url": "assets/js/128.888dd438.js",
    "revision": "c90c88ac00003b7a1e45b0685bab6d44"
  },
  {
    "url": "assets/js/129.cd40760f.js",
    "revision": "5d9655e9ed25827a48d82f74bd0d7fce"
  },
  {
    "url": "assets/js/13.a674d20d.js",
    "revision": "422d03e1bacd787ae4e128053c363dba"
  },
  {
    "url": "assets/js/130.6d1a6a9b.js",
    "revision": "2fe951277fa300664b4dd12da89b8698"
  },
  {
    "url": "assets/js/131.26aa3dbd.js",
    "revision": "d1f9bb1547767cb458db1a4b4e099275"
  },
  {
    "url": "assets/js/132.6880a306.js",
    "revision": "a71b2ec5ddc9bdb09062dd2d36f89b4c"
  },
  {
    "url": "assets/js/133.5976e079.js",
    "revision": "f83793ff1f51dc6b701ee025ec67dfd7"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.e93fa723.js",
    "revision": "2d04f6e69390cc0604299e0e700fe39b"
  },
  {
    "url": "assets/js/136.7107a1b2.js",
    "revision": "c25348ccdd1afb8ff8769fc396645d05"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.91f49f30.js",
    "revision": "908252d2c838de4e9c3ddefa9017f7c2"
  },
  {
    "url": "assets/js/139.ce8ead6e.js",
    "revision": "5e687d85d0253a741daa5307545e58e7"
  },
  {
    "url": "assets/js/14.af550c62.js",
    "revision": "19ca787a8b85a7a519dce1d5bfb443b7"
  },
  {
    "url": "assets/js/140.1dcd1d05.js",
    "revision": "7b8b3ec10148265cd304eaa2d2dd7232"
  },
  {
    "url": "assets/js/141.6f62d37c.js",
    "revision": "1f5e92b1d5c25af080efcf6ef360a9b5"
  },
  {
    "url": "assets/js/142.1f35e749.js",
    "revision": "beec901444f02de1ff363c1b32fa94cb"
  },
  {
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.07ba2792.js",
    "revision": "22a99fd3369b74887143321b3154e791"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.262fb1bb.js",
    "revision": "2e1b56c76a9b849b80055540a90e3aa6"
  },
  {
    "url": "assets/js/147.87951906.js",
    "revision": "50b88bb2f454728056d309ef5c3ed314"
  },
  {
    "url": "assets/js/148.00310013.js",
    "revision": "1ed9ddb6b4743db64282e374ac96b749"
  },
  {
    "url": "assets/js/149.8d6fb79e.js",
    "revision": "80319603da87dc59c022ac65dd294aff"
  },
  {
    "url": "assets/js/15.f8169f13.js",
    "revision": "0fee681d4b02219cdc4054a407109a72"
  },
  {
    "url": "assets/js/150.06a664ac.js",
    "revision": "fd5fc6551e4a2a3279851e7ced9b4a80"
  },
  {
    "url": "assets/js/151.b6e07312.js",
    "revision": "280789bcac964b26eaefbf1e08d13b58"
  },
  {
    "url": "assets/js/152.9c14048f.js",
    "revision": "6134ac84aeab7737997c77e6bb33f7cb"
  },
  {
    "url": "assets/js/153.9ca384f3.js",
    "revision": "92985d81d49012178bdfb7a8944cd2e7"
  },
  {
    "url": "assets/js/154.263bca67.js",
    "revision": "86887eff22ee6955d700a45f765bacd9"
  },
  {
    "url": "assets/js/155.07522de1.js",
    "revision": "ec3644e72cf70b79d790a5c754e1bd27"
  },
  {
    "url": "assets/js/156.96aebea8.js",
    "revision": "47e8bf86e3ce161b5a08a7ae3ecf9dcf"
  },
  {
    "url": "assets/js/157.257a744e.js",
    "revision": "b456ee409ee9f05e97a327756df321a5"
  },
  {
    "url": "assets/js/158.338a72f4.js",
    "revision": "ca27b372c3596dc0d043101653c2531b"
  },
  {
    "url": "assets/js/159.9c4b07b2.js",
    "revision": "b07c7635332c4edaa183a9d2f1d28772"
  },
  {
    "url": "assets/js/16.02d3a20e.js",
    "revision": "067f83de7a059fd53cd1609d97ddfcaf"
  },
  {
    "url": "assets/js/160.8b4bcafa.js",
    "revision": "268dd801ccd3951a6d899ca7a6b7f4dd"
  },
  {
    "url": "assets/js/161.b7d54f71.js",
    "revision": "0a45061db82a8c7314e48033525c2446"
  },
  {
    "url": "assets/js/162.ccd758de.js",
    "revision": "3b46a85bc96f5ba1a2d078915fd6789f"
  },
  {
    "url": "assets/js/163.df74932c.js",
    "revision": "c84762b34fa1785a3b75a3beb787da05"
  },
  {
    "url": "assets/js/164.f005d114.js",
    "revision": "ac6068e35fd2ad94d0b6829fc099e51f"
  },
  {
    "url": "assets/js/165.449ef545.js",
    "revision": "2a708ce516da394c92532cadc201c996"
  },
  {
    "url": "assets/js/166.b850fd8c.js",
    "revision": "d2a76ceaf22b05926e0d07556d87dc58"
  },
  {
    "url": "assets/js/167.c54b5bb7.js",
    "revision": "15f601c7e434ce87d7eb0ccb85a8d75b"
  },
  {
    "url": "assets/js/168.00eb8e86.js",
    "revision": "03352eb07e57d193fbae6c005301f092"
  },
  {
    "url": "assets/js/169.07dc6c1f.js",
    "revision": "117525e58db871aaf3ff20eb59d4dbc1"
  },
  {
    "url": "assets/js/17.935859d2.js",
    "revision": "29902bee7d6cee55d03a96c1cf998802"
  },
  {
    "url": "assets/js/170.d1689c03.js",
    "revision": "e102061520f7cf63e5582dc3b604c420"
  },
  {
    "url": "assets/js/171.e99187b2.js",
    "revision": "3805e5d9bed30d8ea8b5d9464dd0954b"
  },
  {
    "url": "assets/js/172.1d3a9f70.js",
    "revision": "a7b358d905dab7effe9e96642124162d"
  },
  {
    "url": "assets/js/173.8f616d17.js",
    "revision": "570a5348c7e3af38155799b0947ce537"
  },
  {
    "url": "assets/js/174.dbc8a27a.js",
    "revision": "993bf60314fd2da456ba18be3f4a65fe"
  },
  {
    "url": "assets/js/175.f94ca812.js",
    "revision": "c43a5dc04c16f3ebb9a127d342f5e1cf"
  },
  {
    "url": "assets/js/176.88ea1cc4.js",
    "revision": "08b3581b38aa29d0847e8717c67bf664"
  },
  {
    "url": "assets/js/177.e53e228c.js",
    "revision": "3330d2c254da000ca26e39aa4348f11a"
  },
  {
    "url": "assets/js/178.514624b9.js",
    "revision": "c0251f1c826a3181886c0fc0c640587e"
  },
  {
    "url": "assets/js/179.d3ae8deb.js",
    "revision": "c5c50c5b9ae2805c37d53c229d33aae6"
  },
  {
    "url": "assets/js/18.1f136b1c.js",
    "revision": "426be27d9b9860322da7d9ee463a6cc2"
  },
  {
    "url": "assets/js/180.389239e3.js",
    "revision": "aad1c1776cbdc8bec03e96af8d529cbb"
  },
  {
    "url": "assets/js/181.1ab194d8.js",
    "revision": "ea9eb1c8bd98ff240464accf20f48ed0"
  },
  {
    "url": "assets/js/182.4cc65053.js",
    "revision": "95f4add144657c880851809233957af1"
  },
  {
    "url": "assets/js/183.68093bce.js",
    "revision": "b556cbdc78e3d61053b4cb835158ee05"
  },
  {
    "url": "assets/js/184.3289e1cc.js",
    "revision": "d9a7167ccae25bd3aee5e2525eadd850"
  },
  {
    "url": "assets/js/185.98b78f91.js",
    "revision": "e3c16cbc426909ea5d93c85d9d2b3184"
  },
  {
    "url": "assets/js/186.968e1c64.js",
    "revision": "e10822ddb293e88485dc4feb209421fe"
  },
  {
    "url": "assets/js/187.fb89ee69.js",
    "revision": "83082f86f9acfb86ba437260b1818153"
  },
  {
    "url": "assets/js/188.85adc76c.js",
    "revision": "52deec4d6c55fac7b83d8adef6be84bf"
  },
  {
    "url": "assets/js/189.5a10e693.js",
    "revision": "0dd2b413a9e69d0bb8a750ba09fe2f04"
  },
  {
    "url": "assets/js/19.a448ec1c.js",
    "revision": "9016d923a2f1c47ac25af6cffcc5bb7a"
  },
  {
    "url": "assets/js/190.646fb926.js",
    "revision": "2d9092c1f09287527d8e1c7c89eb3406"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.3a760c28.js",
    "revision": "617f1d64c54327ec2ff33c78b89eb664"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.fce6d927.js",
    "revision": "a61698d2b266b1d89c6c22860ed85b6a"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.1f98e74c.js",
    "revision": "8a1edaafc1b9caf70de29cf1e18d1033"
  },
  {
    "url": "assets/js/25.c51c47af.js",
    "revision": "3e3e51958a1b6f5e405ec95f93784859"
  },
  {
    "url": "assets/js/26.888f0656.js",
    "revision": "50bcdae79e851c62cbd33ac092cbd2ec"
  },
  {
    "url": "assets/js/27.031cd787.js",
    "revision": "d2a0478ec7102db95938d56158c3df4a"
  },
  {
    "url": "assets/js/28.29af483f.js",
    "revision": "f195b3805292b3c5b5f475f57db95959"
  },
  {
    "url": "assets/js/29.ae716088.js",
    "revision": "de58428b882dd73852b223b50dc77a53"
  },
  {
    "url": "assets/js/3.eb0b78cf.js",
    "revision": "ad381369413a9fb59b7809f08ef8ac3f"
  },
  {
    "url": "assets/js/30.07fb1186.js",
    "revision": "adf8cfaecac3dd2f6120838e62fabb48"
  },
  {
    "url": "assets/js/31.1ac7b760.js",
    "revision": "b35daf1719baf2feac763b997f204374"
  },
  {
    "url": "assets/js/32.23534a4b.js",
    "revision": "033d7dc492542397e0eb5edec44f5c93"
  },
  {
    "url": "assets/js/33.f12e798a.js",
    "revision": "e54e377d541dba67f4f28827a445d50e"
  },
  {
    "url": "assets/js/34.a89b92f9.js",
    "revision": "4337e48a9eee0a395a5a63d2c8faaba1"
  },
  {
    "url": "assets/js/35.406346fc.js",
    "revision": "d200cfa1d9f25796e63d59e0e9ac0689"
  },
  {
    "url": "assets/js/36.ad4ce359.js",
    "revision": "358fc00cf4eb5932b36090881688ef5f"
  },
  {
    "url": "assets/js/37.76a5a5fa.js",
    "revision": "e4e1ec2d8adf9a2f645ddae5835e545a"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9d124fa2.js",
    "revision": "b64eebdd84b7603c12890bee07c05093"
  },
  {
    "url": "assets/js/4.24d64937.js",
    "revision": "ded97f471939c958ca3ba46758f4b298"
  },
  {
    "url": "assets/js/40.9cba55d1.js",
    "revision": "b5eeef2979061707229024cd0d4de68d"
  },
  {
    "url": "assets/js/41.d515f8f0.js",
    "revision": "83ad5594cc6955320bf57b00b0aa45c1"
  },
  {
    "url": "assets/js/42.09864af6.js",
    "revision": "d98bf2affde52e71f7bbe0b43ed6e9a8"
  },
  {
    "url": "assets/js/43.b73c845f.js",
    "revision": "4bd6e8401554375066adf9508c776e99"
  },
  {
    "url": "assets/js/44.b4aaf9b6.js",
    "revision": "f308feae168bdf783f9818282426f15c"
  },
  {
    "url": "assets/js/45.a5213829.js",
    "revision": "67367997cf87255a61c95acc01ee15d2"
  },
  {
    "url": "assets/js/46.4bcc3422.js",
    "revision": "abfe62c733946f1b3ef979beddaaf07d"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
  },
  {
    "url": "assets/js/48.0a64f85a.js",
    "revision": "7a01576ff990b833601f9bf65c210080"
  },
  {
    "url": "assets/js/49.bd574f10.js",
    "revision": "739345ad7fc1c0ed332d74389a48074b"
  },
  {
    "url": "assets/js/5.94dc272b.js",
    "revision": "619a2fbf5840b8183f2bce0e8c1d27d2"
  },
  {
    "url": "assets/js/50.83aab505.js",
    "revision": "086b36e5eba7a6ce67278fc5c1549167"
  },
  {
    "url": "assets/js/51.f5f0f5b0.js",
    "revision": "955733892d17c306d73e5020858f0a16"
  },
  {
    "url": "assets/js/52.65c730c5.js",
    "revision": "82851ed543bc464ac058cc1c4fa6bd47"
  },
  {
    "url": "assets/js/53.d0ebe33d.js",
    "revision": "8b7f34caf622fe629b67ba5dd98bc269"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.c60a980a.js",
    "revision": "19063956f9f77b7975cfa437a085e481"
  },
  {
    "url": "assets/js/56.fb1df89f.js",
    "revision": "07f992a609c32b95e4eb1decdd6e013d"
  },
  {
    "url": "assets/js/57.dde61ad5.js",
    "revision": "82704e087e6ef1b7c06e28e3126297e3"
  },
  {
    "url": "assets/js/58.d0379086.js",
    "revision": "5bbceb0aa60e214ebb9bbf0389e615c4"
  },
  {
    "url": "assets/js/59.db4e6b91.js",
    "revision": "21231b8fd4a53b9ad6e4195a5dc88135"
  },
  {
    "url": "assets/js/6.7785ba45.js",
    "revision": "ec126c70f76de5f38a85ef622a33fbad"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.55c62e15.js",
    "revision": "b06151d1d39c482f3e03d82af9628431"
  },
  {
    "url": "assets/js/62.4878b1b4.js",
    "revision": "8bdbc3bc4d1d14343c5b7c29adfbfc8e"
  },
  {
    "url": "assets/js/63.99cbcf99.js",
    "revision": "fdce9cf87d5c20fcd69882c0335d0d8c"
  },
  {
    "url": "assets/js/64.34339715.js",
    "revision": "38cd698d3564e6d2c1d4e83a9239ad61"
  },
  {
    "url": "assets/js/65.74803268.js",
    "revision": "fd60b4f3b47d400e672b8edeb599e5ce"
  },
  {
    "url": "assets/js/66.7101cc5a.js",
    "revision": "11717757185c042be217a2ec18ea4825"
  },
  {
    "url": "assets/js/67.b1789c9f.js",
    "revision": "eb6c73c0b955b95d38a6252159774fd3"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.bace815e.js",
    "revision": "a2bdd16c1b3b4d32d13804a5d5afa487"
  },
  {
    "url": "assets/js/7.9b826040.js",
    "revision": "aaa7a60a04529736e5a328025c9b9af5"
  },
  {
    "url": "assets/js/70.2b38e83b.js",
    "revision": "8a4499cf9068edeca99a9bca0c109bad"
  },
  {
    "url": "assets/js/71.959df5e3.js",
    "revision": "35f4a02e60bcf5a9ffb51d92eaa4f89a"
  },
  {
    "url": "assets/js/72.67ce8ff4.js",
    "revision": "326213030fe8e063662f0564a75fff95"
  },
  {
    "url": "assets/js/73.227ff668.js",
    "revision": "a9e72fc8252262fde63d0cee9bc76fee"
  },
  {
    "url": "assets/js/74.c46b9418.js",
    "revision": "0730b08a093758804515fc5cfc37a1b9"
  },
  {
    "url": "assets/js/75.b361803e.js",
    "revision": "4c546b953e875215bad61940820e9d72"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.55629553.js",
    "revision": "9a07c86c6746385d26378b7b2a402778"
  },
  {
    "url": "assets/js/78.1ca608a6.js",
    "revision": "60fe80c9dcfb13eda46aab2715369e18"
  },
  {
    "url": "assets/js/79.f1338f92.js",
    "revision": "7b68caa411446765fefa723cfe2bcec5"
  },
  {
    "url": "assets/js/8.4d4f85f7.js",
    "revision": "31e9a2d8ac0f149ed29d55e3d1a7626c"
  },
  {
    "url": "assets/js/80.c5374780.js",
    "revision": "cfe5f37a6349f90283a764976232dd7c"
  },
  {
    "url": "assets/js/81.5faf3b61.js",
    "revision": "b872aa96968cc19308049f04e37e966e"
  },
  {
    "url": "assets/js/82.e6c68a33.js",
    "revision": "be9cd13caa2d8ef73ca50060b91df3aa"
  },
  {
    "url": "assets/js/83.a3a3746c.js",
    "revision": "3c492b23e94aab4cbb89f1ceb578a3fb"
  },
  {
    "url": "assets/js/84.dc4bff5b.js",
    "revision": "3c65bb856b520df45ce91acca044f949"
  },
  {
    "url": "assets/js/85.283461c9.js",
    "revision": "5e39dbd07e9bc3c8859203a2bee14193"
  },
  {
    "url": "assets/js/86.4bdc47e4.js",
    "revision": "78f60f1cb0048edb538845f735bca4a2"
  },
  {
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.beaf1753.js",
    "revision": "b57fb34d50e1e13363459d26a9f483c7"
  },
  {
    "url": "assets/js/89.5f0f0685.js",
    "revision": "1b7d4382cb903bbf216b26c1c9768a30"
  },
  {
    "url": "assets/js/9.eaeab872.js",
    "revision": "80cc0a8604fecec36a5940914fdd2dad"
  },
  {
    "url": "assets/js/90.4ad6827a.js",
    "revision": "3343ee2b0f4bde894580d9bf0a9d8c2e"
  },
  {
    "url": "assets/js/91.0802d655.js",
    "revision": "f3902dbf03d38bff967876e1442aec47"
  },
  {
    "url": "assets/js/92.cbdf16ae.js",
    "revision": "80fa6f1b4482dcc86303776c0f4e2ff7"
  },
  {
    "url": "assets/js/93.81a25cc1.js",
    "revision": "7d07f030f7f16bd2a2b597972fa43c65"
  },
  {
    "url": "assets/js/94.b38a4933.js",
    "revision": "6186c433cbb927c805fbc80a830055db"
  },
  {
    "url": "assets/js/95.6f0e5117.js",
    "revision": "1a4a873eac9fc932279d4bb0cec266c3"
  },
  {
    "url": "assets/js/96.2b00c280.js",
    "revision": "ee9163c8c0c1125dcdda55aa79758b5e"
  },
  {
    "url": "assets/js/97.53d0a4e5.js",
    "revision": "3ce821fd2a1564dd6209eb52831a141e"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.6d6f7703.js",
    "revision": "b957c3a45bfc2e003e7357b3731b1c62"
  },
  {
    "url": "assets/js/app.1a6cb5ec.js",
    "revision": "68b4158968ca330404beeed9b3dcf2f6"
  },
  {
    "url": "index.html",
    "revision": "11063a76ef43e57c64d5e36d9c07c7ba"
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
