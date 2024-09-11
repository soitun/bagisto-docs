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
    "revision": "d65fd01018de5875964d85564acea8c4"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ccb64a088e67511d81401283a3e5b0d8"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "56476d80379771154db4d2ef9ca76645"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "be64e579ea3acba1168be65346f99719"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b2ace40a253f4693bdf0e5a1affd424d"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "78bcf3254de63410340cada7c4c1e0bc"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "427dfd83e1a59714e6f212b95b9bf742"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "df5b2f2dfe45199ebb087d0568dbf4d4"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "bdb4568bc100d684aedd2b860ff35215"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5742ec3ed768c1f555d71011803586b1"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "3b75bef0b3cc767233f3eb10302280a8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "586cd4820314212644525a761420e5ea"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5df4af874a961c9d54bd34ff41c3b859"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "eea0b926a10445312b0783eac5bfaccd"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7ab13dc6a7060e3fcbaa16d83bb2be0d"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f733196b68409dc42ee7d3fdf2066883"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "3fd0d40659360756dac899a898fa9074"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "0a42585bc44e7771aeb8d2e5acb17b3d"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "0f288e02effabd491fcf488efd2adaee"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "f825318e50b0e7134e51522fdba6a907"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "325ce34f467dc8e98a65330a7723a706"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "f33a416374aa08c7907ab7dab4b1a526"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "1be8daf8aa02342f9f0dc837f596df56"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ba8f1028fe61b868fe04a275b1341b47"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "77e320140caa7d026fada2efd4c09a90"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "dfea7955ab5c8f7cbfc3aacb0644cbfb"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "5b4059ea87e488b48488bc75acdd6bc6"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "f60a92b0cb67293144d37f57def8efbc"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "95dffc910b63cb0422b669704135cc45"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "4661cc573f39eaccb3079e009c64c483"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "3345738672f69ca3c27628ebfd6ff714"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "8d1ec4f929c750ec57e18b857543aa7c"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "3d697ce192c60c81dbb0ab1fddeae2aa"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "c066ab4175e25e4c29522bc436727ad2"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4e153cad4b8cb5d6d1eda2c9b10079c9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "3287c740980bd6edda2638eab633757e"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "2d38afaf8c5a79765938aafd32f671ff"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "845a589c6515e4181168cf6482d49752"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "4eaad734bff1980559e9edfb8bddb964"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "c5f7de2c54cfcc5d2210aeb867d919bd"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "1c85521fbfb981cefc7c177eb832f6db"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "696a0e0a9845f93418b61a6ad51a9767"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "1580a89202088667a56ac8f05a03983a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "2c4801102ab4af888bfbb8354a89bbbd"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "92105a5026d4627f83bf157e062c9837"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "d9cefa698656f225876a698b6b361fdc"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "3c13c76808ee4d93cda3336099165c6b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "e496c6f1c9ebdbf157a517b075496c9e"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "9510538f95cf48afc22e78c77ddb41f5"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "57e9927182088e8a77a25ae0151b12b1"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "9150946648f261a64023ce1bb733c6b0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "10373fdb5c14da365f8ba11275a74bc7"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7cb64b58c95f48d359df424b15a35b94"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "6cc2959c86dabfb7839d0be166380239"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4dcce6856edac2a8825b46cfa5b3b9a2"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "ee445100c8a91cfa9fc1c93c147478ab"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8f2f6fa6b83908fc909a89401c3a0c12"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f85bd621a590a6bbbd7fa093ab298f47"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d8b6feb332d4275a46363644ff85bec4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "622332ebea59e9f7abca850ea49b1648"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "af5f1a7ebaa94c22d1ecb7275df8de1f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "220b5a422203a518fea3e26e371df356"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "90e416c0eb38e993c0adbf036dcc6ba2"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "86dc6e7e71d71499add2a350463e3d8f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e02475b08e183d700ec8c6db33efb9c5"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "60bfc25b459a641902c2f03942475802"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "59bbaef1c22828f6ff2fa2aa4dbbf9d0"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "585cae5bcfdd5e11132d596eaa31bb67"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "4201a2ae176f1317928910b98d668ba6"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7e95f8c087b562f8211b463799736325"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "da59b262573260b8664c172e5292077e"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "de0e9d194ace3d5df329d21f488436ea"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "34fc2207e92796eaac2bcd84910b0075"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "649f531161b2b9b1bebe432c2cbb98ec"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8458a8fc36418a94bb0c7065ba0da244"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "898447751316728ebd1c4175f33373da"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0e27dcd55646bff298070be8a805513e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4f07bff87622e04468c049654e9036a2"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "0d65691536112bcb67a173f1402d658f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "347bef012ddde44d3c1e464334cb90fd"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "1572d4470af317df3d428405db0a5b69"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "454e346662ca24ca153ff78d2300124b"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d4eab2510e06d24c1465c1815bb1b4b6"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "191ef34292e9f87813770fb114f91375"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "68c90a3edf6ffb84b9d85cede7b0601c"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7971c67492cff7170436e217d372c917"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "62c03f7849261d87f01d4108c043060a"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "2b3ceed8e0a1139a4bf488d783f8dfb6"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "06be47803c47cbd28061a9f98f05f424"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "1845dcce80afaee49287fc4488105f11"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "9a4c5ef3d3f090e7d8cda1ab6a102eb2"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "361bca3b8c1a54a491eae4b3ef022dce"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "10fbfca9b6ec42f55fe37540d7b7a9e4"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "9f6b3c4b5d6cd3f584098a57308c56f3"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "74cbaf3b430c9b71796072eb31d6a279"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "176f2edc279479af17eef5889f88ee19"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "996aee08f4d11d539e24cfd8bb3f0e4d"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "baa45997e50092f24b5a83bcf050de1d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "30c345696232cdab31ffe490a13d01ed"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "77705e85c8f9fca815a0960f02b2af9a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "7690da130d0a8a336a3a4fd96d6ecd78"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c8947c8998557004aec1d45ca563f7a3"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "dc2fcc63ea748cda21832f25080780b3"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b521c6d5ad55449b730dab374b0414d5"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ca3733e880efd5248d370045a900426a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "4aea1235111426e50ab8439732fc3587"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "9173bdc438804b5d7edcb31e7f02375d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "95d61f66dde1cf5315c14eee4dcee29c"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "aa54e2803037ac782f2b21a3bcb0efa0"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3944b2a07fb2d3d0757ae0cf27ae182d"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "f5571a640b8e85f309f9e79f754a1c52"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "37a8616eb985b5bdce9b996c1004a8e2"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "adca30e8abfc4cd0ac3b32cb58e0e9b6"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "90bbeee1ed9bc0f1cf4e1a45f7c7139f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "8437c2cc3745f96419f4114acd90f403"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "5a9951304e571c0d7c3e4982d50b2d38"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "02b0c4b75aef398659c69fdd605d4b5e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3f62e763d8226c34cec7b7ff77c4a157"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e6890fadfb7398cdd0d77de2b2694db0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "f74498c9ff140fdbb95b76d1cff1c5ba"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "488b2e3152f04656b38f310a3d3f771f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "6682e58a7c79a544a082127aa54a91bd"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "cfdf1b0587e1d70d5fd66229f2fe6f03"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4dd496adcdcfe19669f818220fe8c127"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4c5b65ee1fc9db15024218e56036ef84"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "e94167ae5bdc92753c1b855e75608395"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f476e383201d827099e839a94d853af9"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "3b229379db5264b716f6ec6ec420dd5c"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8239c1ccd38915efad3d8af8f187ef90"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a980c84d700e7c142d0b102b2aba429b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "55da70293bb8eede7c9dc5119dbeb416"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "33c2f98f13c20f826f1934342e776211"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "c4953b4e163282e231a2d3af778bbbc8"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "7c8678e029bd19e1e766ec3206379cce"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "129e42e648d873cac7e7bb352e1307eb"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "0b1196ee07a879e7d3e024d6e8f7157f"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "32894e82ea08b2f5e383cc34efe52122"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "6d830faf956f236175f39b397fab6ed0"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "aaa687429637fd4d91ac239975c1626b"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "c4ffeddb275829ed023f2a7db0aa97a8"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "4a05cb6d9203a0dd7976fbb94feb5ddd"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3fc10d62f751da4b98bd79d87b91afa1"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "e48c641b2d4211d64109c17444b9f079"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "1d8290dedda30bb235fd575af705d2ef"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "0b60acede8645f3261ffe3cb05c0cb11"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "daf689e4cf2649e27e4c318f5abe052e"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "3fcdec6308d0e6ed0c1e8fa012f6680f"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "e95e54f089991131d586225168d3f949"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "131f044937e3f427cd6d1fc8aba2f1c8"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "bf5b771e3d5dd30e98e35fb2074423b6"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "500251cf495f1253e647f9c1f7090a02"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "847c6fe99624568b11b5d2bed58af48b"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "13fb467fe52cb326d0b81e977029af33"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "e8446823122000dc95c619ca20577423"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "8bd145495960725da20dd7bda3795be1"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "9923b33686bff7553a9313e1469f6d29"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1a003a92f4bc05e28866f8cd046458c2"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "95744be58ccc3e89553060da6dea1bcc"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "f7eb93c5d4f8eaff8d54027d3a0dfbb2"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "dfb8ecac0351813ecdd93bc3b31b1410"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "f95035a95091e2443c40689039345d87"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "5628aaf728e0b717dd856a965f3d823a"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "d6d07e781b88fbf497a53ee78aabd1e8"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "854d40622acd03287403feef847e2684"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "35985b2d777bcd76ca94db4a2a5383b4"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "81f4c7a4c788a9db9d3860004423aa45"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "1fe26d56985507a027dc18fcc2179777"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "f21758161d008afd6973efd78d55dd96"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "fb4322468feea7a08b80d91723ea6706"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "4d156e3ec5fff9c05df0c176dd8b2709"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "66ec26b0c7eac3578474b150bf76d91f"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "33d5f9af3730e8f69354f7322fbda987"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "e2d71f62713c8f66b5cd8fdf6bb1289b"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "7a3e3cbf9155870647854ddfc176f92a"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "27f9e34993482401e9389252df0bd6fc"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "4198f6a378975086ef0fa3f7c6704175"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "3594ad0afb153286fab07df05c23a7bb"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "8bb422eb96668711176367bff23102a7"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "7f2a091dd7300099dd7bce5c82e8e9a6"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "bce126c8a63f98e135c76b1b921ccdab"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "5e2bd2d4939a12970e05fefcdccf13cb"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "38ae8d0bbea1562147dd63e70f6e8f06"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "b1b44bf0a81ec3a93ef0b46699d5c1c4"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "6eb24c742011a774fb965bb97b759938"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "ec69cedc2c18f2ca5047b337e1eae88d"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "bd8ed6a7b2deaeece995109a0161bcff"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "b6922503e4ecb2563dc75e04d1cb4304"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "271e4a2bff15e47e084fe718f766eb4f"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "1502c980cde3f1857fe02ace71c5412b"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "0bb070cb863b3a2cde4fc841cc2a1d47"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "304165bd3fdc834bffac2c0192121290"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "3c8d40a51b9346f17947c2557aff1391"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "22c18f65ec7fad6818e9bfed9b8b690f"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "5b588bef4d6c448625020e2da60f1b9d"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "97d9c4193b445e18c64a578384a6826c"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "97df9a1ae8b8bcd7951ecadea8b2f610"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "1f08074c21c2f6a713f3c03595d46bf8"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "7eccf0d7c62b998edacf8fb26419d1b5"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "ba29cd3101e865acc4b4ebfd09c8cd0c"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "e4cd87eeebd9fb95e70bd1694c4c08fb"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "11a0effd0464116fb6a837eb5ebb8ab8"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "9daf9e19c523a5a28b2d488d4a6f420e"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "1db39c82409b36f5f5448bd093ec9969"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "bd2bbf88fb91ff81089a1f4171c92ef4"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "c1dd944575993d7c3726489dffe6cc48"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "17202e8a5dd9ba204c2a3e6dcade86f7"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "df8e3b7ae57be2d705eb020b38909dcc"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "da532b8db6826cf67c121e8f76974123"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "3deb332e676b08da6760489f42a2c3bf"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "4e289a39940151f5ff3a9377766ec1c9"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "290befc2d45de46afa5cc640477086ba"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "eec85e13c9422226c7e6a0f7a75468a5"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "f9ed8363d653830cea7577d3515c42a6"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "5df1a7740a58df50f6cf058626e92c9c"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "b860cb4204e60a0d5395f89793f2fa5f"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "27f2b0b0b427170572c50952227d5643"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "3b803a56ccfa8154586b16326136b646"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "52296045b32cfcc003cb4e954dc8220d"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "c5e3f933e1067079da92ed315d0c5dd4"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "08b593c3a96decc13cf4d588c0f5b527"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "bb258db9b315f0f43289cd45d33b006c"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "d4ec79f3f694dd3090953163dd8cf241"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "970a52889b35d515e1b5354a2caf9b03"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "b906b105711659977a29f3478836df0f"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "5d51e5cd07de7d837c2ce7289f251457"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "213eb5bc4e91a96a79266c07f2b3c6c9"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "eb979f189eb75cb4adc947c75057cad0"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "a946ebbff3c48a2d0bcbc47a5dec0ef3"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "5c841dc1312fbd88490aba8853892c24"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "2105dc1f55ee8566f96cc3c9734558ac"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "172cb8031c4830eb076f7ce0ef11bd28"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "8b0affbbc3f75ddf483137c252f0753c"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "eb3b5672ace2ffd8e1baf43fca51bd85"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "fca364891f80cfb71318bf3a74735b99"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "aac82618bf365c6b3dd0457d789773f1"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "73abaa8bc4263de5de508137802c9cf4"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "9994d329d3a1ed5dfe372c3a7e8d03c6"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "02f47eea7dbe6ff749cb7504d9ee3919"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "5a91cc6db38aea1a52e10b56229b715b"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dfcc98b96ede70bc48a08461a4157c99"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "5e95f061bca1f86dba6b79c866384932"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "a5a613bcd77d83c2c0d96c665b8149ea"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "6339901b2f0990a0ad32afa1e5c1f392"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "e34417474c3205cf85e94d26ad3ad136"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "3fbfa82781cb6110d3c2f9e20a5303b9"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "404d4469d04e3068b93fc71d779b5249"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "e46e32a5323e38d1574a06c4cb167787"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "6d28cc13e0358eaad570108b734ab9ce"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "5db7b2b5d80bf0a40d6f78ea48adf73f"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "89b1c29541378dc5e007d3ab22568f91"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "f1995e9dc7847cea65a51633a054b57d"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "73011efba5c0562ae8270cbc2cbac091"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "aa12df2fc9084c689bebf13f1b132cb8"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "48e1e76ad8a16d943834db5c6dfb034d"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "d15c7ccb13efcbd1e8c8aa3c0dddc79f"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "e73ad3e8265f90690ed5f24ad5abf3b9"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "4eb9d31771cd1558735327b4e96e88db"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "95d74964a46512f8aacbb3dfa416a36a"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "bb9fca66a9b9375c0e225d4b0f69975f"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "c3510a8f5f29a79b83ed204cfbdbba6b"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "4f30bbbcaf7a00b3e12861ba51a6fa4f"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "9b6f829114ac0cdf2fa734f429670bfa"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "f3b93a9927b8d45e65f7bf6caed082c0"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "1529c20420a2f59d98e8a7db000df60f"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "9ecc62bdf5b5660a91d4f2ee3c96c789"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "65dab277e96c1bfa8705bb32e8351a31"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "17272df9c34727b3742f6633763e161e"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "3735169e501a1bb81f7913baf5f9e1c8"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "f7d7fea356352780d57d2beb85e4080a"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "442feae8562c0163500bc1c9e50679b7"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "eb1c78131f5d23772c11b1c1a928a019"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "23e1a9bbcb3ac79bcb7ae0622af7f7d9"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "18b9141f3a8f962e11e85b9193ae52d2"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "c3488ac4306bb15469e7587aeb9337ad"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "004808723d86984f956f9d547b1986bc"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "252d8bdb3b5aa0a502c6ca1bd41ecded"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "e710567df4183bf4d556b2f4f7525795"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "7f315f5b2ddc79515564c4a75179ca2b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "969875f289baa0f2f7e681848171de7e"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "da7985b45a5508f0fdaf592755cc18e4"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "7b9ffa3393cbab792a104d6d78d99002"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "f0f0d4a2a31ac2998b4f2b18b22b77a6"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "82c3e20d5f05fb002718a03653e31bd1"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "983c4c82a6bc7feb29600fe99eb0e30f"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "f2aaf3fae3d3baa51922528d6fd2bdc5"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "edc220b9b0b19e41fdb842080ed80f1e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "3237392d846d5372f22cb978f2f3ab69"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "28af0607fa0833b317738fe556dbee1c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8e91f5d9457bc96176329ae29a9b9f84"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3311983612edb570b65da426f4315370"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "43935fe3c8917ed10d8e6b05fad1e506"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "89e7fbff0f44d7479a1332279d1d36ea"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "88d687864d125198b7b690134fdab50b"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "46db9f786cbf8f8a6a494d7dd0249f12"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "1b0c1bf3bc5e78d1a074abd803ae0e55"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "960365bd7b863b3fbae2bfd709fff1fb"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "74e7d1e35e0fd05d5d7705568229ef26"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "13152014a0c71b8a41b3a7e4289d2534"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "85a3b3919d7a626b901d11d0beb0da73"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "5d92212fa0a8dee58231efbecd4cd94b"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "1792d2f784f5241eb23d73b060fbf950"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "a5ca7326039ac0a23af10a20386ca1e8"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b8ad329e6f55a363148f3894ffcf2e9f"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "96e1d0400a61c0e8969edabeb2bec843"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "aed11dc8296af0dd920a63a188e9f308"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "ba2411dbed5d56cc00cbf9c98d0d9ced"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "5c3171870ee3b3a37343ab6eb4fdfb55"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "15afd5d414b47976052fb9be05e447fd"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "ed843cb8526e0522b82a38d478b1fa64"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "3e1ce26b55c481fcb23390c97ef60c6d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "96b86ec380352e8255acb42da47e4cff"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "70316ca80a6851fc246caf25a873790c"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e67bc59b77b26307c6ecf82d939c76c4"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "9a5457f4d6dc859b12582df201fc1cf0"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "3555203ef703c3305a598401f300feb1"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "bc6837e13326cc7ec15bb9160ff2d0d4"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "6c1bbc0d4c6cf25e2dd16629b20fd939"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f6f738d390d86ec3e58a544226353e37"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "f415a04214d87746fa63129295c84b07"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "9497e776cde63a5a4cb9b110a630b302"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "0bd4c4ef6d1d79581a6cec2b746ab086"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "554a0911eac7c4a8f2257514f3f22278"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ad56475422bb733b6bc84e2caa537a38"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "84a215ebb721839f0fe9143062eae8a5"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "6709fde1272e26a9da1eea3ff5d10e40"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f95c9002c6efa20e052f2c888f198e1c"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "591cf4a4312af6dd2fdac44cc85dc4b4"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "3a00c0cddb1dce6f71b7292fb4171630"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "bd5cb199061100cc5fe9aa27d48fd631"
  },
  {
    "url": "404.html",
    "revision": "ccfdd513365b48b6df4c2bdf6070d0a6"
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
    "url": "assets/js/1.76c5f4d8.js",
    "revision": "f3d6f94921dad4464a365ca7890b1799"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.70b894fa.js",
    "revision": "b1d096bd5c3105fb95595330c840f264"
  },
  {
    "url": "assets/js/101.378d4e1d.js",
    "revision": "f704925beb93c89186983602b3f19e26"
  },
  {
    "url": "assets/js/102.1e91b2c3.js",
    "revision": "4a0a771a97df7ab7b8897503c5eb2ad8"
  },
  {
    "url": "assets/js/103.068e3af0.js",
    "revision": "5cf9839fc8e8ddf38e2d9111bac256ad"
  },
  {
    "url": "assets/js/104.152e9cce.js",
    "revision": "f2d45de082902c0209f62595901876b0"
  },
  {
    "url": "assets/js/105.8a46cc41.js",
    "revision": "735fa77954b1bcb3b303a2d8a5ef5cf4"
  },
  {
    "url": "assets/js/106.692f927e.js",
    "revision": "2bf144ff7a55e05495b46543c84d99bc"
  },
  {
    "url": "assets/js/107.5ed09fb4.js",
    "revision": "064f9e30f1a046da2a767cd1dc1947e3"
  },
  {
    "url": "assets/js/108.05420239.js",
    "revision": "b18d0caf7d8dd05c2cf9f45af106aaf6"
  },
  {
    "url": "assets/js/109.14bba74c.js",
    "revision": "f9103fb0540083336fc21065aee28bcc"
  },
  {
    "url": "assets/js/11.9c510edc.js",
    "revision": "23f314299eade7b2ec768789c966aaf0"
  },
  {
    "url": "assets/js/110.f9c78488.js",
    "revision": "f036463a13262d0289b6002f4e2f011f"
  },
  {
    "url": "assets/js/111.3b2e0d52.js",
    "revision": "99b3b4a91b31f5fbbc2ab4c7dd7b9bb8"
  },
  {
    "url": "assets/js/112.f91b84a0.js",
    "revision": "9d9268c8e928451655284afc21ba4d4d"
  },
  {
    "url": "assets/js/113.55873ddb.js",
    "revision": "4ef5520936a9b5e1c45334c53072db41"
  },
  {
    "url": "assets/js/114.edcd4c7c.js",
    "revision": "6a90bcefbfd7510c879218a61371943e"
  },
  {
    "url": "assets/js/115.5cb2a333.js",
    "revision": "47b8ad18013a30c2a449fafc803456bd"
  },
  {
    "url": "assets/js/116.96a439e8.js",
    "revision": "2687b83625a134bc0656d3bb8f8f8dab"
  },
  {
    "url": "assets/js/117.97fe66cd.js",
    "revision": "d9a14469c66418064f81f73eaf0c1228"
  },
  {
    "url": "assets/js/118.8a548c2d.js",
    "revision": "f6fa5b2a46c0df804f8fa648bdde2747"
  },
  {
    "url": "assets/js/119.03fa261e.js",
    "revision": "69c52c1f32ebff9391db822434ab87d2"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.77b609f2.js",
    "revision": "edb3967696a7f9a7e9ec124fb9e2a8ec"
  },
  {
    "url": "assets/js/121.7661d950.js",
    "revision": "2a26e9b22993101753b1eac5578f8521"
  },
  {
    "url": "assets/js/122.76163310.js",
    "revision": "9dc16d6f6eddbac3db6ded21d4796a93"
  },
  {
    "url": "assets/js/123.390ea644.js",
    "revision": "7af38d7614e96d052873ba93388197fe"
  },
  {
    "url": "assets/js/124.9fba2201.js",
    "revision": "f91c8e86876c00adb14e84758a54e142"
  },
  {
    "url": "assets/js/125.1cce9c2e.js",
    "revision": "4defd1ccc297d657cb7c4ac3176eeb2f"
  },
  {
    "url": "assets/js/126.40a2ccbb.js",
    "revision": "9e2753986eab9f74a5f0769ab8bf56ff"
  },
  {
    "url": "assets/js/127.c998ddbb.js",
    "revision": "4dbac44d4aa639f8aabcd726a2a9aa27"
  },
  {
    "url": "assets/js/128.5b76f48a.js",
    "revision": "169ab61129d8ec3d67435146b4abefd0"
  },
  {
    "url": "assets/js/129.47b4cebc.js",
    "revision": "3e37e547fc1c6ed4339bd94a660829bc"
  },
  {
    "url": "assets/js/13.9cbf4540.js",
    "revision": "79ade18e0d6d8d23a9f5982195d50295"
  },
  {
    "url": "assets/js/130.5c321382.js",
    "revision": "0afd96cfec4e102e5e5de54645e34813"
  },
  {
    "url": "assets/js/131.554db9e2.js",
    "revision": "1065b3f230057a6fb8aff5e95c09a3d3"
  },
  {
    "url": "assets/js/132.8ee0acd7.js",
    "revision": "3b3327b56d5eac55905c60d426856ff5"
  },
  {
    "url": "assets/js/133.4227e882.js",
    "revision": "624d75a0b7b8c3d8a23333a3c3b55571"
  },
  {
    "url": "assets/js/134.589d151c.js",
    "revision": "563d3c086e175d0d1635ae19f6896f10"
  },
  {
    "url": "assets/js/135.df3e4614.js",
    "revision": "dc52a97000adcbd7abfeef1aabacfde8"
  },
  {
    "url": "assets/js/136.a8b08fb3.js",
    "revision": "7f7b83de5c14aa111600ddd89e674a67"
  },
  {
    "url": "assets/js/137.0bdb0e21.js",
    "revision": "2e8c4e87e6bb696d5694afb292cf1c27"
  },
  {
    "url": "assets/js/138.a87b0ea9.js",
    "revision": "0ffc4beba5d5fc144cd6136f65ba075a"
  },
  {
    "url": "assets/js/139.aec31e05.js",
    "revision": "c1653bd69868517c1b91bd124fec79d7"
  },
  {
    "url": "assets/js/14.6108c098.js",
    "revision": "60de395906d6d7820b561d09ced9f2c5"
  },
  {
    "url": "assets/js/140.c3535fbe.js",
    "revision": "1695d57dbab755821138f560ffef5bfc"
  },
  {
    "url": "assets/js/141.c9dc9d09.js",
    "revision": "bdb83011bc6a8a816d0e149ac27ce307"
  },
  {
    "url": "assets/js/142.36ab04ee.js",
    "revision": "be7177f548093fad1f938d02146d2ce7"
  },
  {
    "url": "assets/js/143.6784cb9b.js",
    "revision": "53d3e97377966502dc568bb63949be62"
  },
  {
    "url": "assets/js/144.4a1b7a9f.js",
    "revision": "b130dcd2e359c1c789df99b8ea77a423"
  },
  {
    "url": "assets/js/145.f0e8ad87.js",
    "revision": "7050c17b3f9bbc42429d86aa43237bf7"
  },
  {
    "url": "assets/js/146.fb07a5db.js",
    "revision": "99c297b815916b3b5559f736d55bc7a4"
  },
  {
    "url": "assets/js/147.1a83db8d.js",
    "revision": "3cb3e55842e5fc45cf380f8d533e5743"
  },
  {
    "url": "assets/js/148.41c212f9.js",
    "revision": "5e595a7447a031e665175c0c1ef00a11"
  },
  {
    "url": "assets/js/149.980be243.js",
    "revision": "9223cc3b5fe562b6fff11f9c8b17a13f"
  },
  {
    "url": "assets/js/15.330d5c7b.js",
    "revision": "ae5b12a65ee1f68fc643fb54bb99e479"
  },
  {
    "url": "assets/js/150.78e1e2c7.js",
    "revision": "275075dd0b01a5b04bbb10d5daaaca4e"
  },
  {
    "url": "assets/js/151.942e324b.js",
    "revision": "691103b97f7246da3b45ddd99b0cdd5a"
  },
  {
    "url": "assets/js/152.f2f1b1c1.js",
    "revision": "b5faa04c0b48e31a532bb66f0603b96d"
  },
  {
    "url": "assets/js/153.f52cbda7.js",
    "revision": "dbc9fa32da7b8df588cb06f0f957db82"
  },
  {
    "url": "assets/js/154.620b1366.js",
    "revision": "af346060ed65cb0ef782bad1d1b70df9"
  },
  {
    "url": "assets/js/155.985577e0.js",
    "revision": "33671eccf13bba08ab152e48b5d12b0e"
  },
  {
    "url": "assets/js/156.8d58fb5b.js",
    "revision": "d9d2b86e09bc7b951678e166f847fb50"
  },
  {
    "url": "assets/js/157.4e68df56.js",
    "revision": "7ab81838ab7a164a655070cad312fde3"
  },
  {
    "url": "assets/js/158.b074782e.js",
    "revision": "9d339585be7f41efc6e21349c5fceec0"
  },
  {
    "url": "assets/js/159.f8db5a1d.js",
    "revision": "f2479967ba836fb6ff334510d3e09cf7"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.24f897be.js",
    "revision": "fddc11e584294dc3bff55994e48e4d93"
  },
  {
    "url": "assets/js/161.37bbc2b6.js",
    "revision": "74741b86498131ef8463a2bfa32647a4"
  },
  {
    "url": "assets/js/162.05ff4359.js",
    "revision": "ef7cb5982d012e137a6089bd18bf130f"
  },
  {
    "url": "assets/js/163.0275d233.js",
    "revision": "35405287d2e82995928243651e64c852"
  },
  {
    "url": "assets/js/164.b1f7b241.js",
    "revision": "3a59394ea1cddb0d4c7e95d9ca881b57"
  },
  {
    "url": "assets/js/165.1926feda.js",
    "revision": "b86597ed1215c3f2177e2346149d551e"
  },
  {
    "url": "assets/js/166.0fdb12ab.js",
    "revision": "3d7fa2a000a6446a67dfb609c2210db9"
  },
  {
    "url": "assets/js/167.5be0f3ab.js",
    "revision": "86850075f6e43289dc52e192abd1060a"
  },
  {
    "url": "assets/js/168.5b567bf5.js",
    "revision": "00606bb73cf0d667198f4db5a437e20b"
  },
  {
    "url": "assets/js/169.4669c87b.js",
    "revision": "5646af2da3090b4ed480a5f68ed11e33"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.15190beb.js",
    "revision": "c6c46d9e3a5f45860dcbe325728e4694"
  },
  {
    "url": "assets/js/171.7d7e5ca7.js",
    "revision": "3fe2c36ceda78670b281fb5ed452bb10"
  },
  {
    "url": "assets/js/172.38efc5f9.js",
    "revision": "2347f231e513b659cefbcaec05e679ff"
  },
  {
    "url": "assets/js/173.01407e76.js",
    "revision": "1e029a5735165f8357312791188c015a"
  },
  {
    "url": "assets/js/174.4e182c93.js",
    "revision": "4582e2ca4719631ad18c9027b40cf077"
  },
  {
    "url": "assets/js/175.d682a4ac.js",
    "revision": "c6eb2cbf60695a696143597e10cbe644"
  },
  {
    "url": "assets/js/176.2a46e06a.js",
    "revision": "c3c38087bfbde69f0eaf540ea4f12c3f"
  },
  {
    "url": "assets/js/177.2ece612a.js",
    "revision": "9ef970a317d247fbf78901d33ee50abd"
  },
  {
    "url": "assets/js/178.9575d64d.js",
    "revision": "9282cc5788acd148e4ce468983ad3d60"
  },
  {
    "url": "assets/js/179.4c1d03ac.js",
    "revision": "0c027e7fc7b66f591da00c545bbfecc1"
  },
  {
    "url": "assets/js/18.b696b22c.js",
    "revision": "9f7b7cb7f2457d8b7852ae410e0fda1d"
  },
  {
    "url": "assets/js/180.66a02757.js",
    "revision": "95d3c86eb11d9b74c78005cc03c7d732"
  },
  {
    "url": "assets/js/181.649b49b7.js",
    "revision": "e7303fc90ff0f5de2977a5ea9a4027c9"
  },
  {
    "url": "assets/js/182.3aad6b1e.js",
    "revision": "515f4c1e56d32f3380c7bdc43611f4bc"
  },
  {
    "url": "assets/js/183.b25fc6b5.js",
    "revision": "f37fa1689ee11c112541a4ec5e8cba93"
  },
  {
    "url": "assets/js/184.06f64509.js",
    "revision": "268e878ed481db66206dcf1f06fec05c"
  },
  {
    "url": "assets/js/185.8fab400b.js",
    "revision": "fe1c5b27da6174af469eeca98699fbad"
  },
  {
    "url": "assets/js/186.aaa25997.js",
    "revision": "afbf358c2416f1fd1bdce9806eb3632f"
  },
  {
    "url": "assets/js/187.16f32c06.js",
    "revision": "4dd51a52012f7dd769493a62d63f0e29"
  },
  {
    "url": "assets/js/188.830c417e.js",
    "revision": "01c9bd3dc82f43fff0fc24c008c655e1"
  },
  {
    "url": "assets/js/189.31dfaba8.js",
    "revision": "1f98c6a7ccb763ca533f6f6b9f132002"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.07c66552.js",
    "revision": "4499fa2b3a33d35d643ca5e23cde6c18"
  },
  {
    "url": "assets/js/191.4a01ffe4.js",
    "revision": "40d4b80b6d19983afdbca4abf91ee10b"
  },
  {
    "url": "assets/js/192.3fd52f41.js",
    "revision": "dd41b3ffb58aa685459040ccea51f4cf"
  },
  {
    "url": "assets/js/193.6d7eada2.js",
    "revision": "0d8fa25e3e41159cc4fe211e61647217"
  },
  {
    "url": "assets/js/194.f9c98edb.js",
    "revision": "67c8f0a89568fb83c9cf3f17ef6359b0"
  },
  {
    "url": "assets/js/195.1de2c8f3.js",
    "revision": "13e417cf458072285c739c9f1036babe"
  },
  {
    "url": "assets/js/196.a00aaba5.js",
    "revision": "20026d79b6b1e9a1eda13082fa4f66f9"
  },
  {
    "url": "assets/js/197.0802bc50.js",
    "revision": "af21950f4d7d73c707c0c0b588cd80bc"
  },
  {
    "url": "assets/js/198.997679cd.js",
    "revision": "c38fc9d1ee65c948b85af3f71f90489a"
  },
  {
    "url": "assets/js/199.56c49cb3.js",
    "revision": "bc92a8b81ad077f6a485b4c1ec92e8a7"
  },
  {
    "url": "assets/js/2.9c86865d.js",
    "revision": "c156fb4d631612aff795cfc2d42ac513"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.d8373a9d.js",
    "revision": "8e69d72c936dcef42250433763ec716d"
  },
  {
    "url": "assets/js/201.b54a0d41.js",
    "revision": "a37f02c19b2c8b57584c941ca2f56440"
  },
  {
    "url": "assets/js/202.23a17892.js",
    "revision": "f2931e8e6fca6030ebe579f546a338a3"
  },
  {
    "url": "assets/js/203.70a54679.js",
    "revision": "75163bfb0756df4a59c8ade49c2d81b8"
  },
  {
    "url": "assets/js/204.6931cbe1.js",
    "revision": "8d57fcc95a67bea7bafa0348ea83b80a"
  },
  {
    "url": "assets/js/205.dc95a0d9.js",
    "revision": "0399fe7f1c9f04b04afabccb01e1700e"
  },
  {
    "url": "assets/js/206.fbcc09e8.js",
    "revision": "f190afc889e8b48cca078cdfbca0054a"
  },
  {
    "url": "assets/js/207.bc34dd03.js",
    "revision": "8f6009a552dcecf8e696b75ae77ca9b8"
  },
  {
    "url": "assets/js/208.f54ce307.js",
    "revision": "6815c8d99a2b28d2cac66044cbd2f8a5"
  },
  {
    "url": "assets/js/209.25b1ed90.js",
    "revision": "ac07f81b138d15facec383619a24e5ac"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.e9d67d47.js",
    "revision": "9661c0b8391c581279afc93328d694a0"
  },
  {
    "url": "assets/js/211.e1a7b4bd.js",
    "revision": "cab6e11430c065916cedcea6ac87c261"
  },
  {
    "url": "assets/js/212.8dc6b729.js",
    "revision": "233d894ead528c76c62e43455f87c92d"
  },
  {
    "url": "assets/js/213.2bed323e.js",
    "revision": "988a5b59c18ffd486f5e1b542a259b84"
  },
  {
    "url": "assets/js/214.cd8aa4f5.js",
    "revision": "734382dddd0db4196fff51494fe2e965"
  },
  {
    "url": "assets/js/215.8806e6fd.js",
    "revision": "3119e95194eb279ca56a08d3accc8319"
  },
  {
    "url": "assets/js/216.efabdc9a.js",
    "revision": "2b4d9ef0365390212127b897847551a5"
  },
  {
    "url": "assets/js/217.36031604.js",
    "revision": "911e425f32df78259fc480c04007b0e4"
  },
  {
    "url": "assets/js/218.2fa5278b.js",
    "revision": "fe46d5e8093e655abd438ceb942f7b97"
  },
  {
    "url": "assets/js/219.aaf77f39.js",
    "revision": "a8fe0334b04d5fb191f0be1cc49b6ddb"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.c0b4b352.js",
    "revision": "d2316ef3841254c537decc971fdf6134"
  },
  {
    "url": "assets/js/221.70213cb8.js",
    "revision": "8c368119f789b379897f4de282c77ed6"
  },
  {
    "url": "assets/js/222.57e42f6e.js",
    "revision": "e63119e2c74fd210db8a4f5299185c8f"
  },
  {
    "url": "assets/js/223.64587ca2.js",
    "revision": "7417edc93774aeb087068f88dfa6c026"
  },
  {
    "url": "assets/js/224.cde085cd.js",
    "revision": "b668a92e656b291c3bed8a40bf72adda"
  },
  {
    "url": "assets/js/225.253e88ad.js",
    "revision": "869060ff46378f77f3f90781b9aab86c"
  },
  {
    "url": "assets/js/226.c5d17eb1.js",
    "revision": "e622efaae0e062ecf8012ba442ccf24d"
  },
  {
    "url": "assets/js/227.85acea17.js",
    "revision": "8016c8ec3475d90147ea5154531da942"
  },
  {
    "url": "assets/js/228.c78f1621.js",
    "revision": "7d321bf28df827fbef4af7ed38b3478e"
  },
  {
    "url": "assets/js/229.be375654.js",
    "revision": "3f503acb284d16c7e78b01b708a4bc2e"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.2b80f485.js",
    "revision": "f8a430faacaa63f5d004c2194046f3a6"
  },
  {
    "url": "assets/js/231.ec58e0a7.js",
    "revision": "4aacc16f4f0af31f210297301428974a"
  },
  {
    "url": "assets/js/232.8c966f53.js",
    "revision": "9a2db1b008fe9924e893393a8707abca"
  },
  {
    "url": "assets/js/233.e3dfe0a9.js",
    "revision": "aa1b4d30fbdc5458195c87c90b179e18"
  },
  {
    "url": "assets/js/234.4b943303.js",
    "revision": "31fc59968ea82cfd7e0bcd42091d979b"
  },
  {
    "url": "assets/js/235.38f651ea.js",
    "revision": "9a18b436c82fbbaae6931b66be6f5c10"
  },
  {
    "url": "assets/js/236.a0f72509.js",
    "revision": "960c90d3d5016b6e0821ae755fec1f39"
  },
  {
    "url": "assets/js/237.814c7c20.js",
    "revision": "60845e1d67692d5643d8e9d3f7ef17d7"
  },
  {
    "url": "assets/js/238.c0e9dc59.js",
    "revision": "51152a9cbdc98df0e6531fa5b13ca129"
  },
  {
    "url": "assets/js/239.7aa801bf.js",
    "revision": "9febf590f6ab17ee4fd04d4f97ae5f12"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.b7b9e585.js",
    "revision": "14f3bd207f84f33bb3d4039e1903e4f4"
  },
  {
    "url": "assets/js/241.cd2d5791.js",
    "revision": "74523ec54f6c7a136560520f8da43cb4"
  },
  {
    "url": "assets/js/242.e57a4db9.js",
    "revision": "6d492be70f97b1bc80e5b263d60a8544"
  },
  {
    "url": "assets/js/243.3e2271e6.js",
    "revision": "ff6cce77026a4170a4bd32caa7421c85"
  },
  {
    "url": "assets/js/244.2e49d0ff.js",
    "revision": "2c71096852c88cc53fe6caef7d798277"
  },
  {
    "url": "assets/js/245.6b2978c7.js",
    "revision": "436df5c6562a090f035c4c46243869ec"
  },
  {
    "url": "assets/js/246.bdec146c.js",
    "revision": "760d4439a4b42c4a685c4957919ef073"
  },
  {
    "url": "assets/js/247.1079b820.js",
    "revision": "0dc483f77c87d0b94fd34824b49e6cd0"
  },
  {
    "url": "assets/js/248.40e35aec.js",
    "revision": "76c0467016e3c86bb0149198e84bdaff"
  },
  {
    "url": "assets/js/249.77b42b8a.js",
    "revision": "5e56a716693769f566fb8bfffec94e3b"
  },
  {
    "url": "assets/js/25.4a6037bc.js",
    "revision": "a2489ad6964ca50637331d2eed33f9d2"
  },
  {
    "url": "assets/js/250.14febab2.js",
    "revision": "576bcf2ff9808247ad0cf12838c27fe3"
  },
  {
    "url": "assets/js/251.49fff5c1.js",
    "revision": "4e74077bd6350e73e063d99399b5b39d"
  },
  {
    "url": "assets/js/252.08268146.js",
    "revision": "faf62e93d6ecb232f2433cf176c992c6"
  },
  {
    "url": "assets/js/253.75eb29c9.js",
    "revision": "1db4fc83690aa8271723a495f8c1397a"
  },
  {
    "url": "assets/js/254.96763e1a.js",
    "revision": "2d61552c5fb0605585ea576680bb5ad1"
  },
  {
    "url": "assets/js/255.ce54ffae.js",
    "revision": "f27255bdb17d210ca34fe82bc0b90cac"
  },
  {
    "url": "assets/js/256.17073312.js",
    "revision": "429bee11953a64867c1c9f4a5f493526"
  },
  {
    "url": "assets/js/257.f1c4ad7e.js",
    "revision": "712ff526813fa93716ce4c4f84656f90"
  },
  {
    "url": "assets/js/258.1d4758c8.js",
    "revision": "7af4aac2deeed76863b04205c31cfd90"
  },
  {
    "url": "assets/js/259.57ccdaf0.js",
    "revision": "077377135d46c387bc719f6c88dda6d3"
  },
  {
    "url": "assets/js/26.2123a81e.js",
    "revision": "1d0e8e15ba0d8d45612fee2e1149617f"
  },
  {
    "url": "assets/js/260.906d9861.js",
    "revision": "9788ce26da111c7cece35b613ac3d093"
  },
  {
    "url": "assets/js/261.0653a98d.js",
    "revision": "7ad4ccb47517a029a912c831abffce03"
  },
  {
    "url": "assets/js/262.e776d6c2.js",
    "revision": "f26786b276d561c541e63ba80dd95d79"
  },
  {
    "url": "assets/js/263.59546667.js",
    "revision": "5b67ba2ec694e9fc36007bcb8e87fe4e"
  },
  {
    "url": "assets/js/264.caefda8c.js",
    "revision": "1775b81f160db11661a75b3e8a41dc57"
  },
  {
    "url": "assets/js/265.ffcfc498.js",
    "revision": "2e6b202d5bc6d665e078f5d7092da366"
  },
  {
    "url": "assets/js/266.4dfb5ea7.js",
    "revision": "cea1fcc8d1cdeee4daafb5291acbe14c"
  },
  {
    "url": "assets/js/267.a418493a.js",
    "revision": "669493920e83cab25db04649a4a7c7d8"
  },
  {
    "url": "assets/js/268.9638c3f2.js",
    "revision": "ec548458b037a6b302aca3ff4ac46f3d"
  },
  {
    "url": "assets/js/269.0213211e.js",
    "revision": "ce1d4b078da7417da4abe603f465c5e4"
  },
  {
    "url": "assets/js/27.3cb36cb7.js",
    "revision": "0cc1be5e1aa9103eab6855a3cfd6a428"
  },
  {
    "url": "assets/js/270.4e9eb970.js",
    "revision": "2deea1ec1ad0f13252f8ffdab566c64b"
  },
  {
    "url": "assets/js/271.cdce3280.js",
    "revision": "af99cb5b7a7c8117820904cff42ee03d"
  },
  {
    "url": "assets/js/272.1de46918.js",
    "revision": "df136c5bc8c5b42202f5ad0c06e767ce"
  },
  {
    "url": "assets/js/273.41e4f105.js",
    "revision": "22f3df5bc79d9760890f025c9f40ca5e"
  },
  {
    "url": "assets/js/274.3c0763b5.js",
    "revision": "8036cad6fadfca7cf1ca1121f475ac3b"
  },
  {
    "url": "assets/js/275.294206f6.js",
    "revision": "3b6feebecd8b174bdc2b83b0294a401a"
  },
  {
    "url": "assets/js/276.bb2310d0.js",
    "revision": "c8a6ae832280b0acb08506b17ee5d06c"
  },
  {
    "url": "assets/js/277.f9b1c0f5.js",
    "revision": "51d38b0021349ecb3e9c35b018e71f16"
  },
  {
    "url": "assets/js/278.12bdfaf4.js",
    "revision": "327efb4cbf22a1b34916290f3c9a3202"
  },
  {
    "url": "assets/js/279.b5c77e94.js",
    "revision": "ebd4e5e4fdc4ee95ea4dacd7f1821072"
  },
  {
    "url": "assets/js/28.f1aeed5b.js",
    "revision": "0ec93c37953adfcaab922b315d5707c3"
  },
  {
    "url": "assets/js/280.cae6cfa9.js",
    "revision": "53ed11c0cc388dadabb3994cc20310c9"
  },
  {
    "url": "assets/js/281.f49d6b8e.js",
    "revision": "ad768ec0acf65702444d524eb5186003"
  },
  {
    "url": "assets/js/282.0868f339.js",
    "revision": "2998d835d312881dd468c63bcdf5a189"
  },
  {
    "url": "assets/js/283.4d569fa3.js",
    "revision": "a4ce0905c5774f8e9e054530b1672923"
  },
  {
    "url": "assets/js/284.4c91815b.js",
    "revision": "e1beeb3a8bebdbc631f43ad2c2f3b4a4"
  },
  {
    "url": "assets/js/285.27838cfe.js",
    "revision": "48330247de44c0c0ffad2fe77a1e343e"
  },
  {
    "url": "assets/js/286.003c4311.js",
    "revision": "4557fbd42f2f02164425112c17973283"
  },
  {
    "url": "assets/js/287.25f10514.js",
    "revision": "5412a738a0bc7cc4bda234aca3f12e61"
  },
  {
    "url": "assets/js/288.dfdeed9b.js",
    "revision": "3542818f7ed9f6aee75e70f7e603a10c"
  },
  {
    "url": "assets/js/289.f09c2fce.js",
    "revision": "487938fcfe04057b82b0032db7f1d669"
  },
  {
    "url": "assets/js/29.89bf0c1b.js",
    "revision": "fe2231d2d6f28bff6d935786ff6e045e"
  },
  {
    "url": "assets/js/290.33a474cd.js",
    "revision": "d7f2f7d27a3477149a329e3282861ae6"
  },
  {
    "url": "assets/js/291.6cf96b76.js",
    "revision": "113eb08337a4789733c91499eeeadaad"
  },
  {
    "url": "assets/js/292.63e58e76.js",
    "revision": "cf538b58d8a6e751053021224e5fd897"
  },
  {
    "url": "assets/js/293.e39b6508.js",
    "revision": "c8c7fdf41af9cb3364c7a5a5f5e4e6e7"
  },
  {
    "url": "assets/js/294.db70ed39.js",
    "revision": "8afeed6dd93f5a8ced62752ae65f87ed"
  },
  {
    "url": "assets/js/295.9bfaad0b.js",
    "revision": "daf18e61adff8356783101f130910cdd"
  },
  {
    "url": "assets/js/296.549be047.js",
    "revision": "b814ce21e9a7ad31c09d6fcf0ec4efce"
  },
  {
    "url": "assets/js/297.c27eff8d.js",
    "revision": "b4a1e4bb6701912f556ea81d779dc240"
  },
  {
    "url": "assets/js/298.0d7b8120.js",
    "revision": "e36dc4b2e4d03405a9cb5032680fffc5"
  },
  {
    "url": "assets/js/299.6ffc86a4.js",
    "revision": "3187c22b5f63e2f822f9c9d2f198b0c9"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.b89f7be9.js",
    "revision": "e67146d5ada892f6130ed738d8009d9f"
  },
  {
    "url": "assets/js/300.415e8c54.js",
    "revision": "95617e1e1b23626a9597af86f801eb17"
  },
  {
    "url": "assets/js/301.eb4561c0.js",
    "revision": "318e9fd028b6a15b2f9e7c2248095cef"
  },
  {
    "url": "assets/js/302.9fd87884.js",
    "revision": "41bd3353c3fb17c9085a017130632859"
  },
  {
    "url": "assets/js/303.1caa586e.js",
    "revision": "c2ba34fe8bb3ac62171b114c6dd8b455"
  },
  {
    "url": "assets/js/304.7b236062.js",
    "revision": "d5a727d3a245240c426c7a72de0d80b9"
  },
  {
    "url": "assets/js/305.107c1348.js",
    "revision": "8234654aeef828999884b5b00dfa57ce"
  },
  {
    "url": "assets/js/306.d4f8e14d.js",
    "revision": "dcdf4760af3df0d3403d82d64358bbd3"
  },
  {
    "url": "assets/js/307.6a36a4bb.js",
    "revision": "bd9035257dcb10a801288858269c60e1"
  },
  {
    "url": "assets/js/308.03519414.js",
    "revision": "d9c9cd5775d7501dec39b10d7b2da837"
  },
  {
    "url": "assets/js/309.cb9df6d8.js",
    "revision": "df4b954b54e7581f54470ba51537e3bd"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.5617ef28.js",
    "revision": "50e5bfacc259ac3f892f570388fa56a7"
  },
  {
    "url": "assets/js/311.224f5350.js",
    "revision": "4c4ada7850eb1dc5c44d8ecb60de427b"
  },
  {
    "url": "assets/js/312.ab4aa5c1.js",
    "revision": "0807a5f1fb5544c375b3c5fa0f8fe701"
  },
  {
    "url": "assets/js/313.fea6f592.js",
    "revision": "99a926d621746403a1fee36f8adc7e77"
  },
  {
    "url": "assets/js/314.a4e369c4.js",
    "revision": "d7d25a47b707f924c26c59938faf2470"
  },
  {
    "url": "assets/js/315.67d8308c.js",
    "revision": "456293e692d0d92b35abebd619ea553b"
  },
  {
    "url": "assets/js/316.ab895bb6.js",
    "revision": "66a70594ef832a6e053e245a47a72d51"
  },
  {
    "url": "assets/js/317.0bfaa60c.js",
    "revision": "4759213229d8b8003faa48a5d391391a"
  },
  {
    "url": "assets/js/318.3b204ddd.js",
    "revision": "6d73566178e46e030fa1a624a3f909f3"
  },
  {
    "url": "assets/js/319.95605a8c.js",
    "revision": "f89d13bcf32631e7ee34461f89304606"
  },
  {
    "url": "assets/js/32.a41b5f2b.js",
    "revision": "8d24c4c8ce8ca4be9abaa6be7e9bb290"
  },
  {
    "url": "assets/js/320.73519c8e.js",
    "revision": "cf76011dc8451968f0cd0da3b6a95356"
  },
  {
    "url": "assets/js/321.44d904ab.js",
    "revision": "833718383cda0be05167ec55082906a2"
  },
  {
    "url": "assets/js/322.e425d58d.js",
    "revision": "a0ec2dd4ebc3e5c8e71324018215c8d1"
  },
  {
    "url": "assets/js/323.4ed7fffd.js",
    "revision": "2cc0fd31515926ea74b8adead305f6c5"
  },
  {
    "url": "assets/js/324.ab5d2f58.js",
    "revision": "b0320ca34017db25faa559db9bdcfe04"
  },
  {
    "url": "assets/js/325.1e12568b.js",
    "revision": "59c655de305d2d9607d087f803bba335"
  },
  {
    "url": "assets/js/326.31eb1df8.js",
    "revision": "dbe575f4a9d52dce38c48da9d3bc70be"
  },
  {
    "url": "assets/js/327.a48e6b9c.js",
    "revision": "b8b53de18205b83f3fe47bc23b543793"
  },
  {
    "url": "assets/js/328.0fadccda.js",
    "revision": "2197460b8afdd1234c64cf4fd8f3a7ae"
  },
  {
    "url": "assets/js/329.e257ebc0.js",
    "revision": "f6940b9b3f84a46f60ba58ff7f032282"
  },
  {
    "url": "assets/js/33.10c9721d.js",
    "revision": "2803db775067cd531f0236d52fb62e7a"
  },
  {
    "url": "assets/js/330.618a9d64.js",
    "revision": "d05d94210abba42c245bc7ecec225534"
  },
  {
    "url": "assets/js/331.63bd1fc5.js",
    "revision": "003e8fb8e98ed9f266e71273f0e51de1"
  },
  {
    "url": "assets/js/332.820869b8.js",
    "revision": "fa48870bdad6796ee3ffe336a807e925"
  },
  {
    "url": "assets/js/333.bd6447fb.js",
    "revision": "9b139abb71422bfd219c71228ea29457"
  },
  {
    "url": "assets/js/334.a5457111.js",
    "revision": "27676e37367431e28975a542711cffd1"
  },
  {
    "url": "assets/js/335.14763974.js",
    "revision": "0859c18803556073fecd7dc61023eb11"
  },
  {
    "url": "assets/js/336.325eca1a.js",
    "revision": "802b8c9c5571acc780fd30e7fbe48739"
  },
  {
    "url": "assets/js/337.78974e30.js",
    "revision": "5418f2a8088c0a661d299a5f636817b3"
  },
  {
    "url": "assets/js/338.6e9540cb.js",
    "revision": "8697f16b7dcd03d12ace9c608e07512e"
  },
  {
    "url": "assets/js/339.d9b66180.js",
    "revision": "36c2ff9f679b658f540788175316d075"
  },
  {
    "url": "assets/js/34.56886ce1.js",
    "revision": "236643d0978f9c67470e169d334a8a13"
  },
  {
    "url": "assets/js/340.01c204bf.js",
    "revision": "263152c64c4ac4d3a5fd1cf90736ce35"
  },
  {
    "url": "assets/js/341.dfd7c6ff.js",
    "revision": "e711c3c4db78e82aab8bc204edb61c34"
  },
  {
    "url": "assets/js/342.aaccd99d.js",
    "revision": "9c30ad1bc5916ef67b8cf66f8117f5da"
  },
  {
    "url": "assets/js/343.b1c6c81a.js",
    "revision": "799817bce81fcaaf0ebf38becbc81aa9"
  },
  {
    "url": "assets/js/344.fd6978d1.js",
    "revision": "a7ccd691fcde37fc3505df919e856e16"
  },
  {
    "url": "assets/js/345.49402a0f.js",
    "revision": "1eeb903fa422a7faef43aa21fe5fa97a"
  },
  {
    "url": "assets/js/346.3efa51a3.js",
    "revision": "37ae1b3680cf968fe8c30a9daa7e8371"
  },
  {
    "url": "assets/js/347.71240e18.js",
    "revision": "e183d88e5630fd7d9eb37f7abe6c3b6f"
  },
  {
    "url": "assets/js/348.e94e1d04.js",
    "revision": "8e274168f7bdd475b3d742040a35a0e0"
  },
  {
    "url": "assets/js/349.df9a2f8d.js",
    "revision": "709efac6b9de1b45a505e148c330f308"
  },
  {
    "url": "assets/js/35.6993b159.js",
    "revision": "20c32532ffd9408b228e7b005c525b19"
  },
  {
    "url": "assets/js/350.2084ccd6.js",
    "revision": "2eae51abd8a25a781ee9a63069832450"
  },
  {
    "url": "assets/js/351.907ea7a5.js",
    "revision": "ecb5f94ede041f6a9fcb87673b49ef9c"
  },
  {
    "url": "assets/js/352.48f92ab8.js",
    "revision": "8d8020bbe552740310473a164fb22307"
  },
  {
    "url": "assets/js/353.64d862ce.js",
    "revision": "cbfc945ee4b5e34b9d35ff1d7bd2d6bb"
  },
  {
    "url": "assets/js/354.b71d27bb.js",
    "revision": "db4093104c901c5e3098bcc2207e60e2"
  },
  {
    "url": "assets/js/355.f0138630.js",
    "revision": "a840347cb1ae63a897f070a03075773d"
  },
  {
    "url": "assets/js/356.8a83eecb.js",
    "revision": "04f03e0cdc6a125bb051e82dba7bbf5c"
  },
  {
    "url": "assets/js/357.05d1f225.js",
    "revision": "5f7bdddc73c430335d092fab33b67d5c"
  },
  {
    "url": "assets/js/358.c4482809.js",
    "revision": "ca36cad9ba2a72fae66e742f79e223c3"
  },
  {
    "url": "assets/js/359.e0aaf104.js",
    "revision": "2341ecbca21447d984ec80ef36dac1e1"
  },
  {
    "url": "assets/js/36.76a09993.js",
    "revision": "0694d651183fae5182ed2d490b9b2b9d"
  },
  {
    "url": "assets/js/360.33e4489d.js",
    "revision": "20cf9d97b989a3703f5c671f4f81e6af"
  },
  {
    "url": "assets/js/361.6b75ba36.js",
    "revision": "87c84575fe6444cf8b836ad3580cc5e6"
  },
  {
    "url": "assets/js/362.f5761a24.js",
    "revision": "03920277ae83e07db144f7db7dc43980"
  },
  {
    "url": "assets/js/363.7be1aa19.js",
    "revision": "82638bc3ff1560900e3db51f8b8cfb6d"
  },
  {
    "url": "assets/js/364.d165b03e.js",
    "revision": "accdd5264b53fc56daf733ae925ac4a7"
  },
  {
    "url": "assets/js/365.9c61bd63.js",
    "revision": "43d7364e1da224121bc51bf6e7554e52"
  },
  {
    "url": "assets/js/366.14bbd2f8.js",
    "revision": "1d874ac4c139d4d26a468439060f1bad"
  },
  {
    "url": "assets/js/367.a8e357cd.js",
    "revision": "4437834d3a851c1a63b02145aa026b98"
  },
  {
    "url": "assets/js/368.a52016a7.js",
    "revision": "af54966dc12300a42c1d2be33e3a1bda"
  },
  {
    "url": "assets/js/369.00a2751d.js",
    "revision": "8fdeabe4c1437503f7f06050d53a7f59"
  },
  {
    "url": "assets/js/37.eb1bbb2c.js",
    "revision": "85f43aeb7402a5d962e3a652ef9c5be1"
  },
  {
    "url": "assets/js/370.d6f5fa38.js",
    "revision": "84e045cb8703382175b7c14e935e2c16"
  },
  {
    "url": "assets/js/371.adb8a52a.js",
    "revision": "36c1e0c1f99c386025929090656187e5"
  },
  {
    "url": "assets/js/372.2100eb3c.js",
    "revision": "7806ccd118fa894acd6d9d24fd963f89"
  },
  {
    "url": "assets/js/373.ffc9b33e.js",
    "revision": "f24125bb26e0b9369b68222388016f71"
  },
  {
    "url": "assets/js/374.ac7c3ab4.js",
    "revision": "0e5ec1623f44f942244a51a4e679cde9"
  },
  {
    "url": "assets/js/375.6cc28bb3.js",
    "revision": "744c6074c64a36966855b2dad33aa8d4"
  },
  {
    "url": "assets/js/376.4295f5f8.js",
    "revision": "6eda429e3247fc2ba3275e1a6cf762c1"
  },
  {
    "url": "assets/js/377.95d23647.js",
    "revision": "f801dec35d691d8219c557021a7fc006"
  },
  {
    "url": "assets/js/378.1bdbcef8.js",
    "revision": "54cdb735e2dfeb737f9b7fee327eccd0"
  },
  {
    "url": "assets/js/379.0a2449ec.js",
    "revision": "80c67353df3851476fee011d6760669d"
  },
  {
    "url": "assets/js/38.474f476d.js",
    "revision": "81759d62c45e4cc0b8c4b9b13912cbcf"
  },
  {
    "url": "assets/js/380.2c0d4f79.js",
    "revision": "1f547853025d0fa8dd130cb751d38d9a"
  },
  {
    "url": "assets/js/381.3c74847a.js",
    "revision": "1fa1887b83dea16bd09f6dfa2e5b74f0"
  },
  {
    "url": "assets/js/382.b99a68a3.js",
    "revision": "62fc67f9b691118982c46348980133c7"
  },
  {
    "url": "assets/js/383.718ab210.js",
    "revision": "0845bb7929fdd43e4a1e4f11e731f6f1"
  },
  {
    "url": "assets/js/384.5a659580.js",
    "revision": "68a22311777e3b126e85ee20091be9e0"
  },
  {
    "url": "assets/js/385.be5a7363.js",
    "revision": "04b4ce2d4bc1ac99791af9c28c684841"
  },
  {
    "url": "assets/js/386.4a9d131a.js",
    "revision": "16a793d36ce34909186d4233accaf43f"
  },
  {
    "url": "assets/js/387.ac94cb23.js",
    "revision": "10c70d758b7a344e62c415ab575ffdb0"
  },
  {
    "url": "assets/js/388.1a521f2d.js",
    "revision": "ffdf93c84f5097e4844fdc6fbe797c21"
  },
  {
    "url": "assets/js/389.09b1b053.js",
    "revision": "0bb2ef31a061adf71e9457e752c8904c"
  },
  {
    "url": "assets/js/39.7e58d005.js",
    "revision": "eda2a205af7fd4ec141fc582b9c24c00"
  },
  {
    "url": "assets/js/390.6833ae31.js",
    "revision": "ca5507333b358743ae9346b229d58f50"
  },
  {
    "url": "assets/js/391.05ebf217.js",
    "revision": "fe884c789346494fe04c6147b09468d0"
  },
  {
    "url": "assets/js/392.e4b835fd.js",
    "revision": "6e35ab6f05d013fce723d19a885ebc52"
  },
  {
    "url": "assets/js/393.889f4f65.js",
    "revision": "1896bbd8de70835de2a921b7fbec9cb4"
  },
  {
    "url": "assets/js/394.e2392f00.js",
    "revision": "73bfa5e1248b1bddcfc79aa8136a019d"
  },
  {
    "url": "assets/js/395.331ea53e.js",
    "revision": "95b373ff8ceb8bd7b3350440751fde53"
  },
  {
    "url": "assets/js/396.49aa909d.js",
    "revision": "b77bd3f6af1a38812b9c09c7110d8cba"
  },
  {
    "url": "assets/js/397.523d25ee.js",
    "revision": "1cf321789fef0570aebce1f8679126e4"
  },
  {
    "url": "assets/js/398.9225939b.js",
    "revision": "5c4faa15ca241a867a8a133a91e64c01"
  },
  {
    "url": "assets/js/399.e3436b9e.js",
    "revision": "89b77f5d8f59e81d39a1dc0b33cd6ed7"
  },
  {
    "url": "assets/js/4.886cf4a6.js",
    "revision": "56591bbfa62878a85b7910820edabb7b"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
  },
  {
    "url": "assets/js/400.4cb31f82.js",
    "revision": "dd385052b8c945c1b210a61357ccdfa6"
  },
  {
    "url": "assets/js/41.886cd7e0.js",
    "revision": "705819df273f0859943e42b30d7a5ac5"
  },
  {
    "url": "assets/js/42.feacc84f.js",
    "revision": "c000982f368a77840d85c94f895124a9"
  },
  {
    "url": "assets/js/43.d3d992b8.js",
    "revision": "19a2b9e9b393a81172d6565661cf394e"
  },
  {
    "url": "assets/js/44.ac177082.js",
    "revision": "761846ec5e2457695a0ef74742655d72"
  },
  {
    "url": "assets/js/45.e2ff6493.js",
    "revision": "446e5d3999201baece4ca9626adaab16"
  },
  {
    "url": "assets/js/46.f668dcd3.js",
    "revision": "6a8d7bf56136e0625985ba3a57d32528"
  },
  {
    "url": "assets/js/47.9a6f5f3f.js",
    "revision": "9f0bc683d91aadd1dd34e85fba75fc35"
  },
  {
    "url": "assets/js/48.80b57d76.js",
    "revision": "a5a5ac77732e1acab2bd912770f47c28"
  },
  {
    "url": "assets/js/49.d1938ca6.js",
    "revision": "f5130844ccc026e2b525345e579ca657"
  },
  {
    "url": "assets/js/5.1102b4f1.js",
    "revision": "705cec1fe76c7c2a2db9ccbd07850cef"
  },
  {
    "url": "assets/js/50.8dcb2188.js",
    "revision": "3d6cc4be05276178edcc17640f8a54d0"
  },
  {
    "url": "assets/js/51.c1b82382.js",
    "revision": "7d86737a5d2f09e78e5cbe3f7a8a4953"
  },
  {
    "url": "assets/js/52.95aac27b.js",
    "revision": "0c9b6d8c5ae9c1b8347fdf78393f2abb"
  },
  {
    "url": "assets/js/53.20ad8b8f.js",
    "revision": "b3b1ddfb9cdc14b734883a40f219eecf"
  },
  {
    "url": "assets/js/54.c98ab58b.js",
    "revision": "20d32e369829e4c9cd7c128204bf1225"
  },
  {
    "url": "assets/js/55.836f7265.js",
    "revision": "eba9e1c65397529fe998845bedd69b04"
  },
  {
    "url": "assets/js/56.660d8378.js",
    "revision": "e57cdd87eae330b0fe830c09d6fbc010"
  },
  {
    "url": "assets/js/57.ea922589.js",
    "revision": "c2feaedc6c59ee07a428f1543f0a9c28"
  },
  {
    "url": "assets/js/58.2556f97f.js",
    "revision": "7e8704e95d1b465e33877ffc9e2586f0"
  },
  {
    "url": "assets/js/59.d5ae07ba.js",
    "revision": "f1b8f5b5f6b616ac27f0583889ce10e6"
  },
  {
    "url": "assets/js/60.92e8b8a0.js",
    "revision": "735bfa58588eaa519bb91bf5aee22a31"
  },
  {
    "url": "assets/js/61.3ce35764.js",
    "revision": "a254b05328677714b1d8448c99bd91ff"
  },
  {
    "url": "assets/js/62.1f469aa0.js",
    "revision": "d41ad2fde58a52dbe239b3a03671a06b"
  },
  {
    "url": "assets/js/63.04bb76b1.js",
    "revision": "86652f0122e007a4d6608149da341432"
  },
  {
    "url": "assets/js/64.37995d1a.js",
    "revision": "2abe95040282bd701011365cf14aa9ea"
  },
  {
    "url": "assets/js/65.b6f772b4.js",
    "revision": "84f6be3e21915b071aeb49c0141fc9a3"
  },
  {
    "url": "assets/js/66.21e6421c.js",
    "revision": "351c9a7177ea4f09ddc7413d901a8aae"
  },
  {
    "url": "assets/js/67.91d15c4b.js",
    "revision": "ae186a6945d0e03b51350cdd864f2513"
  },
  {
    "url": "assets/js/68.c3e30ef7.js",
    "revision": "3ac012e8f3ee031c36f64447b2dd14ad"
  },
  {
    "url": "assets/js/69.a62e8d9b.js",
    "revision": "202a8e4bd33380753dec629ea8db0ed5"
  },
  {
    "url": "assets/js/70.955e8e71.js",
    "revision": "2b53ca5b14c26b6b0cb6bc7c96f0c83f"
  },
  {
    "url": "assets/js/71.9eef3439.js",
    "revision": "1467ae56c128d51bb84ee653d3f29838"
  },
  {
    "url": "assets/js/72.2b693f4f.js",
    "revision": "9a60c18adba520c17117acb98c7b40e2"
  },
  {
    "url": "assets/js/73.96cebcc4.js",
    "revision": "afa66ae8c0a1be02d57e3c948395d49b"
  },
  {
    "url": "assets/js/74.c155d639.js",
    "revision": "a0d9c59839cd1ca4022fceb2770ee3c2"
  },
  {
    "url": "assets/js/75.5bfa514b.js",
    "revision": "40feed895fe5cf8a377e32d5e614f8ea"
  },
  {
    "url": "assets/js/76.1dff3232.js",
    "revision": "0fc0653c113c2b36d0a39b517df12174"
  },
  {
    "url": "assets/js/77.5fe87e1d.js",
    "revision": "ac39d541d22c0c3935d4866a5ca4ec0d"
  },
  {
    "url": "assets/js/78.7d011759.js",
    "revision": "f2dca63fdfa6269166e7bf73bf94161a"
  },
  {
    "url": "assets/js/79.ad1f9bb4.js",
    "revision": "20be0429798c81926545cab5b513121a"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.ae171c56.js",
    "revision": "7361d737c0dd18e4f72010dfc6dfd013"
  },
  {
    "url": "assets/js/81.33a46128.js",
    "revision": "15cdc3bec33372ed83274ad75b2eaab0"
  },
  {
    "url": "assets/js/82.b30998b2.js",
    "revision": "23aa5b17a122ca2871a8f4f426d61716"
  },
  {
    "url": "assets/js/83.5f62e24a.js",
    "revision": "553a0b13d67f9a242e3a75b16d08752f"
  },
  {
    "url": "assets/js/84.362a1e19.js",
    "revision": "e3aaff6a607b855a7a6966a3aab5420f"
  },
  {
    "url": "assets/js/85.09d0e39b.js",
    "revision": "8f2b57d8fcd5deb5085e932b452f867b"
  },
  {
    "url": "assets/js/86.eaaf2fa0.js",
    "revision": "15391bc924e84888e0ffb86d697397f9"
  },
  {
    "url": "assets/js/87.b9cd026d.js",
    "revision": "838b0ec81c5dbcd6bea3c891b0209d1d"
  },
  {
    "url": "assets/js/88.85adfa68.js",
    "revision": "3b28681d437f0e15d61f388b81a2eacb"
  },
  {
    "url": "assets/js/89.ee20a6ef.js",
    "revision": "fa482a450e9d92caaa199db4ea5734df"
  },
  {
    "url": "assets/js/9.2d0bf723.js",
    "revision": "80ce4ff1d3443fc062ae3df36be78d19"
  },
  {
    "url": "assets/js/90.d424d930.js",
    "revision": "297bf25660d174f5866969c48e517dd7"
  },
  {
    "url": "assets/js/91.786d22d9.js",
    "revision": "6535e6f7f2d868985e5e11dc12f0967a"
  },
  {
    "url": "assets/js/92.7e084e61.js",
    "revision": "8a2480cbdf2b7e126a1f0dc6d0d3ff57"
  },
  {
    "url": "assets/js/93.ed3248c8.js",
    "revision": "59272ca3c3259f1b1d4f71357386c308"
  },
  {
    "url": "assets/js/94.30e840d8.js",
    "revision": "1c0d1d0039fc902019fcf1e69883d20a"
  },
  {
    "url": "assets/js/95.e9c1b0ae.js",
    "revision": "246ea54973715fb0684d9d68cee7ba8e"
  },
  {
    "url": "assets/js/96.77798f2a.js",
    "revision": "4077d1894f2a3ac03ef357d81eea0c30"
  },
  {
    "url": "assets/js/97.e6483488.js",
    "revision": "8276f13de04a9261fe8c052caa7695c9"
  },
  {
    "url": "assets/js/98.a49802db.js",
    "revision": "edf3ae98f231b6da1bbd48db49a108c7"
  },
  {
    "url": "assets/js/99.88024fae.js",
    "revision": "40b7e617b28586e62e1a2a048395a4f4"
  },
  {
    "url": "assets/js/app.8186679f.js",
    "revision": "af8f3f06f38003e0973fbfeaf1cb0af0"
  },
  {
    "url": "assets/js/vendors~docsearch.cf08ccb4.js",
    "revision": "ec97fd871053e8b03a4c067b66f5abb5"
  },
  {
    "url": "index.html",
    "revision": "c91f751e7dd0d3a42c4c8d95a2e411ec"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "89bcf710ea982b1d973caddbf8c43589"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "269fa0c04d07cd7df4a6edf5e79e64b9"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "dff5c5d3ee311cc405f30608131a4fa9"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "2038fdfa1c5c051df0a82c6eb277b39a"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "38e2ffc58036324b37084d9b833b4ea4"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "433567c85764fd85f4e427900ca8bb2e"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "0536527621de7edef6be0f772bd5662b"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "a2dd7a00b7edb5b87f416d4e1c6a26bb"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7239244ec7c458585c6f5caad4839696"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "3e40af142d5d9a9bd33d2daedf15228f"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "a25f842a3adf6912868813d61a63af3b"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "2dc97f3e006f010ef4dac5023ebccd08"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "f8b37ba0e1e02433eda1c69e14e740a3"
  },
  {
    "url": "master/api/index.html",
    "revision": "1cec38cab93668403a5d85482b1a26ab"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "26a33d770c4721607715b126f3a8a191"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "a7d8c5c330ec371416ee756ceb0422a7"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "4ed1b89f9086aab2f9f974866f154e58"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "38bf341a1a97f5dc646643c03732204c"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "5a894bc76bc3ceda9d090772259112a2"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "48799e2408141511b80c941fafb95735"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "0294cb4c7c32a45112e411719ec446a9"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "c1deba1a7781798e4402779fcb72f3b6"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "8ef1b48712ec65e26cd848587857e445"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "d61da6e77d070ff58a589dd05dfa0e6e"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "528ef1618e75a590df368468a055520c"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "3aa30cd45a113b6b8f6b0a02ffedbfae"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "7a06c9aa221ef4e8043484914944423e"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "9a8d6ed4ebe18ddbefc8110eef1d1a6c"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "af1e29c023f7f9e9f84d9b913866acf5"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "c362c6ac77babc085bfeec3b357c85e4"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "881ec806f9425548784ba15866bda523"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "96279569a56e4a74506acbee61eea21c"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "81ec7316c419ac8c3f721a4eb1f1cf6f"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "40fb66d888c8bfa06bec0c4089b60c27"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "1181c4ac3be4662a97ff44242f719a51"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "f32aeac04027a5b33164143579355fd0"
  },
  {
    "url": "master/packages/index.html",
    "revision": "2cef0ee955b26818f07697de299e4978"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "fbd82b9405d249bf5e7cc5bf95e3de02"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "f23819498db42eea4f2beea779157dd5"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "7e8ffcacb5437ef89596dda39972a592"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "02e41c6eef67279800f510bef536227c"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "69865bf55f6381bdfeb5379b72be15a9"
  },
  {
    "url": "master/packages/views.html",
    "revision": "d49b1425683d4595ddfb46e72c3d6920"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "4cdbac040d6e36f42cbab2e6a353d9f0"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "395688bee2c711e82dfe81c3b2efe020"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "bfff62851a0979d9905976727e49990d"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "f4962cf230ed3c04d5713500335f8c0c"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "d04341ccd6950947a26207d475ef3c82"
  },
  {
    "url": "master/themes/index.html",
    "revision": "356ba33632893ce276989204e415f9e8"
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
