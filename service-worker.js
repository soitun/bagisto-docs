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
    "revision": "eb80b47cc32b9ac97ac6485a70a265e8"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "357db11adec402e436b9cf8c1cb59e0f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "fefaed24559e94057509a383045d71f7"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "0d95f1892aad0aafc219f01b3613257a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "2ff98526482f3e34b591fc7d8b41698c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "520cb6adcb8f96f5280271b7410cbdad"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "71975dce62fa639bf1d304e2ecb55e86"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5c3165bf40e831c4062cf88f0ed1855f"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0d2271fbf40ec8f250fb77886045892a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "56f3b63cf4d4c60593b9e6419b1b6c5b"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "38d9e75a3c413287b5869eb06cd479fd"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "15c5bc14965fd2ef784a7c8e7a1f7620"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "0c0fcac21f63675c080f25033510cc31"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "caf1c654c47afca8c129f36254fbc799"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "98379819c089363db520b492a2f28907"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "0991492392607df52f0100e07ed4fcd7"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "2ec21ec319bc61d46aa8a5eeb792f40f"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "93938454e579a76074bbacde7952e6be"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "065210d97ceff9f66f8195c87f641856"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "79596b352fd90d8444c00b62fd43cb2c"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "906ee30f26b4ff536f3cf7b1f0df189a"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "9989dad7debc717084c6e6f8eeaf3141"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "89aa4a3f5d27d1b09f5f3eb9e152bd4b"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "f7ce3a687f9e040ff3ca1ed53d6a988d"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "6c420a0e0763a9b87c022beb795d9f07"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ed020a254153e0859a1753c0df793c1e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "4eb5e9beb5963c275e6533513030576b"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "9c9c4e16efde51f8f83c0388f1cac2cd"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "e2c99d67bd773feae46aec9abbe51a3d"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "03d24eafb883fc757c7f63016c79b467"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "cbf7553ad6f789f6aa5599a6758a710a"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "b4eabdf7c145ab538bfaff8567fe53a6"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ff6c9c0c1894aa3692c09d62600367b2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "b046ce754f751876da35efa2cabed9bc"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "39b6a5fb8e720c9d1d7d230b01a0cd5a"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "eb6af8cd0444c03cbd246b5f46619ffa"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "7352b92019e876449679a49652a4052b"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "dfd1eb4234bbd032c43f39dd516e2bdd"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "ebc233d5f26816653bc56b9c7f0200aa"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "89b07c00907ccccc77dbebe54802f474"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "fd596c2680a59e513b70cf2a137b99c6"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "b5696ba77639e037d7595546dd02b057"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "153b46883f9794dcb679d94a21406097"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "72c2f0a47358ededccc0d985578db3ca"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "3e8e2b587f458aaea592f88819b85b6e"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "a93b768350ff61e9cb680a3158feff29"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "221d2d00600f3a16e80bc31dbbd26211"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "b4a907145bdbbabe16b56e220bbaf28d"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "d414785c39a21e68d2111eef8d03e55d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "d8e288d8cdf34e390b7931e9192636c1"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "36eae5dac173dbb6ff37208bbac2b0c4"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b063eab00ebd6d6c0608a74579136980"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "53b9e3ce56ca27cbe426b26378d7f0bd"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "5a364ae06ffbebfab53bc17b825c0029"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "05becca12abdb47fa5889631a88745ea"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "a8787d05841a043983a98cec20a317ba"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "a322d5c85e6421dc6c9d52da7b0efd31"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "11e514f1aa85e7592b162abfd5740408"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "23ef9e0801071335905f84356f199c1c"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c0916fa71282017dad3ffd524159f013"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "fa4ae704324d7e4d749383b26082bee7"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "578de6e0a48f88283feaf570a3547289"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "a8b67ec5f2a0cc02133a469f10877775"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "bda9bf8e93adb611dc29384cbaa25819"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "7bb3e173adc30edc274bc625e0a793d9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5f4651e068d543b103024ba914f5993d"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "97167b0b8b0af69c34920f896e62e823"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "555d1e8e68fd859e6c060b52cdb15551"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d5a73431b03b7b923489703410a2d872"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a3a6622c9b2fcb631431345f0139801c"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "791be3b09b5d5fa2ea398e715634ecc9"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "59f310dd908a85e9d0b94b628b0ab88e"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "ce077739e3144fdca16cb8512fe28e0e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8f8cdeff4f7ee79e3cd6ad4cd86209de"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5d2657ac85f324ade1213f26de648f07"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "fa9f62e3c0735094d20f14d72019e225"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "049cb41bb7961ffaec29d76b667f5960"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "319a4bb9e3e3993fa41d3997e582b681"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c8775029c276016361a2e414da72943d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d1f58dfd1e5a276f31d5f2ba4b78a234"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "65c0831c8bb69903fcce2d536952689c"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "e0dcdbd64330f921de1c37734c3ce0b8"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9c8c8db9cede908f1ef073039f9a405b"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "b3f03585885ac2ac2ea00e02e754963c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "601768c163bdd430e92ea9addc486692"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5f85abc3ee50f7a10da515ad999f571a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "213f33a7fb8d23c51c8c4740021c9ebc"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "06f11d54866ef6e00029fe4725e2c181"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "70dad2300db6d56806269d6d982d205d"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8dcc0834013c4d72a7bc1b0db088a2e7"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "26c022ff66cd0f165172374e8842fb0b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9cb491ed7177e3da6d1f9694bd6eb29b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "e6e99bbcedcdb99ac12d4077e4527344"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "ff620469cc070d011566d6612dd5474c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "ce4b4db7ebde1bd7be4aac3f530e91f5"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "6d8b12e9ddec2dcfe0863f5744ce7f2e"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3c5f55b63bc1af0246cae65d73f9d23c"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "595ae62cbe26c7b79fcac4c7d2c84f56"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "f4ff6fd53e87a4dd789ed06c1f2627f8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8da1d3ba0411594c56d0df960bdcb9b6"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e6ffb1cb1420b20f2130dd8b31c67695"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "4e59039599ae9aa752b21b799682dbb0"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ac89763b04fcc7ae71f7e70366f7fd68"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "8ebc8e640f7687f0ff9eecf10e92dd3d"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "0b5cd3b01cc86667908f7e6049a799d0"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e5323001ac52a620d27b36241de4ab66"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "d3f2338d1ac260da6a914c5a8e9f7fe2"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "63f112b2f793f579de929ff396699bad"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "39a6e36db78954e113163235764bf85b"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "05be2c02cb33c0f07384d0df6d1fc586"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b94840a39e8e2ac880a8aa8e734f5bb9"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "47ceee571c43b754c6c7e5f7c9e79b5b"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "b672c6020fa5eb8c826b21112e9c899d"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "31aae0b9f57b9e1e6a0aa8119ee40747"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4e2b6cf4ef0ae48c71d060f895f95ad2"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "9334f4e042c47a7a133714017c99c19b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a70fd2ba9c27c4b5cca83b9e83f61a7a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "b233abe2e383a890edd6dc3f213ee248"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8483e65cd4e0362f16101e003f7d5e93"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "20e85f1f0407b544a848c9b24da061b8"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "1f7b523fe8468292e04d16990f3514b5"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "7b1ab81f07c7a254f9b14dad920c241f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "dbc59d1e108388c673c3037072a32282"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "1cb432f21fee1578e22f7bd5fa7aedd9"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ff8ceb6f6f5bd4bccfd15dbd82667f6d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "935dca0c4426a67dd34ba1b051557a4b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e680f2a155f7c1e4e57c2f980e01f796"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c0d3ed710d62f044085d243e09dbd03a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8098755ff20afbb887418f1d907a09dd"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a26e00d9fffedd5c15a64222e244f383"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "9fecde9bcf15e0c67fa8c78b3f8f1a21"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7b5f4817c9a6a761331f714c95326933"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "68e0f6dff472e299e6a32374b2baed5e"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "076dbb89e151fd93233b9642111b8dfa"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "3bb18fb34e7c2e3bd39107c6ba920739"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "18ccf91258aa056accd79a85366aa6bb"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "261f2208948bc257d669e54dd3c7995b"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a9b9ae9574fc5d9c6644d71216652f33"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "00c7a4d989dd4aa9b801372a03aa195f"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "0bfc2be64fad5eaf986f12064593a1ce"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4ef13e0ef40a82a5d1184514a25d272d"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "000d2276157457237f8038432fdec8e3"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "e134cea2d995ea4beeffaf62a0ad4eae"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "ff44d3af45fe7313a234b50858b6251f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "2291473f8e8d140e6402718739181eb3"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "1673646feedd0e2e62c8aa4a4ec714a1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "cde98356e096587f992bd355fe43c32d"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "42b107c0a675b50d6a7230cd7cfee230"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "fe441984d96fcbd662dc9b6475e1a061"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "58d59b921c397fd9d373740fe74298c5"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "83c4abbbc256ed24e652fd48f11f9b7c"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "d0e92def41f0cb08a1fd77258de25f6e"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "673cb3a4a04ea316ee14f2e6b104cc47"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "dd35e7557e291e8990b9fcca4ebc4a57"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "7e96a5b58b7cdb2fea4b5e6666eded90"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "31bd22485e86b0a427793d2cfd946b6b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "9ba007d63f4eca9f2e60c74482bff003"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "79dcae70a408524408c2f88f05e29d26"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "be1f2b4896394328d86ac9741772ebce"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "828d4028a0e3e8819423dadc1f7b7bd1"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "1635b1a925bd1c0285524d7ace6b02e7"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "91533ef0b08884a7c9127c022c90b065"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "e4e07a8ec6569c5a2f522edd28514cca"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "4864516b15091796ee0f5023cdea953c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d65ff7516f76298ed416b75ca3915e02"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "a875ca6c0414c0a56bf59e9111c77e18"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "fde72a80d9693c2dfb9b4f919cdd1f48"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "d365f135e75dab6418ca3d34751fd87d"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "435c4f45689799830a49e8a7cfe768d2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "5eeeaa74128b3f12b463337be5c56aee"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "23e9f75327d3041cb84cafd85c5247e8"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "84eeee3aafddf081e254331b001a0511"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "f0685b59733af159cd1ff6f41092f158"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "af4b63889e899c3ebfb051b54d30d3ee"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "cd2938c2ac94ff9e703cad22488d340b"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "1e94f589360f3911bd9e59c8469da40b"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "90091090fca5a9cea5659161d562eb6d"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "9f5f3debd4133fccc4634a5fe6275a0d"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "fbf986f34e918ed9b9995f3de967b29e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "5b909c355b243a7afed18902606da583"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "d3731cd74ddc8abe6cdf8e02abb308df"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "4f9591c1d79cfa1480a0b4c65a721d78"
  },
  {
    "url": "404.html",
    "revision": "e92e72a526f1181be960c3b78828480a"
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
    "url": "assets/js/10.b32e5ec9.js",
    "revision": "38ce60db99f655c4f0e5a88d114783bf"
  },
  {
    "url": "assets/js/100.a92838c0.js",
    "revision": "9e92aa8061b54d5885e9b40ac384578d"
  },
  {
    "url": "assets/js/101.b019a552.js",
    "revision": "9afdd94e5c8ff7937195e4b5eca4bfce"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.5a6d6a2d.js",
    "revision": "8f73ba330c027cd4e39053c6ae508b0a"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.0a085bc0.js",
    "revision": "bb8894a4a1951316636fd1fe77a5698e"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
  },
  {
    "url": "assets/js/107.4c8eb08a.js",
    "revision": "5942306cb89e960db623a8ebbac96eb6"
  },
  {
    "url": "assets/js/108.26b2acf9.js",
    "revision": "b861c7446a6e3796d6794e1b61bc007e"
  },
  {
    "url": "assets/js/109.60f1426a.js",
    "revision": "c3d6e28d3f84507d9a17170ff44c31bc"
  },
  {
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.a6159f9f.js",
    "revision": "6d04e37bb14d3edcbe119202f3d3255a"
  },
  {
    "url": "assets/js/111.63e378e0.js",
    "revision": "f5bdc7465e15ea8e6db8f4331babd477"
  },
  {
    "url": "assets/js/112.b41358b9.js",
    "revision": "70552adf4b7a20e176decc2cc2241fe0"
  },
  {
    "url": "assets/js/113.9bb607e7.js",
    "revision": "b7661985da6ad984be19785cfc98a548"
  },
  {
    "url": "assets/js/114.80095f89.js",
    "revision": "5cb63fe77b8e2fb17541835b60fded05"
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
    "url": "assets/js/119.581a3b38.js",
    "revision": "f57e931dcb4b53caff7d5de9741a24a6"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
  },
  {
    "url": "assets/js/120.53c4b8aa.js",
    "revision": "4085da4570ec1efc36044a389f08733e"
  },
  {
    "url": "assets/js/121.dfb110cc.js",
    "revision": "aea03a435b438e960e44c59a128208bf"
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
    "url": "assets/js/125.dedf3340.js",
    "revision": "9c6458a8de2e5aaad79e8a4ded0a6c3a"
  },
  {
    "url": "assets/js/126.23bb501e.js",
    "revision": "d5be1a88cedab83187fbbf60f848d72a"
  },
  {
    "url": "assets/js/127.92e532c6.js",
    "revision": "4a090025f5fef22eb300dd9294ce8e21"
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
    "url": "assets/js/13.06fce6f2.js",
    "revision": "c5713e3f07eb8f7a288417f5224471a7"
  },
  {
    "url": "assets/js/130.a737fe59.js",
    "revision": "e63cf43830a74faafe30b3c1d1cce270"
  },
  {
    "url": "assets/js/131.9f73c93d.js",
    "revision": "3ddb6a73d6ba4f589bd32ffb9cf85e58"
  },
  {
    "url": "assets/js/132.be9a3587.js",
    "revision": "4281a17d76ceba836fe31cd3e6a667b9"
  },
  {
    "url": "assets/js/133.7edda029.js",
    "revision": "3d24e66ad514ab0cb61adabedfc16ee9"
  },
  {
    "url": "assets/js/134.6385b50e.js",
    "revision": "ba6d0fb3710fa6b7b1f8db59a74de049"
  },
  {
    "url": "assets/js/135.a5706e05.js",
    "revision": "ca52e201a4ae2547863c054ba564bcd5"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
  },
  {
    "url": "assets/js/137.ee8b6f2d.js",
    "revision": "aeed52f84652bda96009fabc9a8e5b5a"
  },
  {
    "url": "assets/js/138.4fa367f6.js",
    "revision": "e9bd52bb3b89899931a16e8cb1b53483"
  },
  {
    "url": "assets/js/139.ce8ead6e.js",
    "revision": "5e687d85d0253a741daa5307545e58e7"
  },
  {
    "url": "assets/js/14.2c0f86dc.js",
    "revision": "4b7e9f2dd8698e1a4948a652cb1a7b48"
  },
  {
    "url": "assets/js/140.f856901b.js",
    "revision": "229cee94807e4a03fe9baea9e27c9cbc"
  },
  {
    "url": "assets/js/141.c07cf8e6.js",
    "revision": "71cfa2ca2e38c25ae5e9c02e02e33875"
  },
  {
    "url": "assets/js/142.6c29bafc.js",
    "revision": "03e44f9f7aa1121b284478f75f730a64"
  },
  {
    "url": "assets/js/143.c0b6fc76.js",
    "revision": "7424a5b44449327a379a231e4c230a8d"
  },
  {
    "url": "assets/js/144.68ea79d1.js",
    "revision": "5b0a6856a527c1f9e24fe28c2f097be3"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.3aa6c615.js",
    "revision": "8cdfe17a0328686a310d7685729d30cb"
  },
  {
    "url": "assets/js/147.87951906.js",
    "revision": "50b88bb2f454728056d309ef5c3ed314"
  },
  {
    "url": "assets/js/148.2ad6f67d.js",
    "revision": "71e8b3ad83f177e90f818e230b6a8532"
  },
  {
    "url": "assets/js/149.dcce7006.js",
    "revision": "fc7e43f8a015fd5849488520e6956226"
  },
  {
    "url": "assets/js/15.600b128b.js",
    "revision": "bbb761c1bc65f02ce81155b426cfeb7d"
  },
  {
    "url": "assets/js/150.399614de.js",
    "revision": "a6d1dcbafb31af3e0c1cb22ce0dcd881"
  },
  {
    "url": "assets/js/151.ae7688af.js",
    "revision": "0c83506027d2a15d14b2ba71c5610e0a"
  },
  {
    "url": "assets/js/152.72854f7b.js",
    "revision": "a1b48dc225a60ac5a74288b7eaa328b3"
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
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.c0fadf06.js",
    "revision": "88c758bdaf1c75f2b20f4f4e9c230c6c"
  },
  {
    "url": "assets/js/157.1a252542.js",
    "revision": "1edd8bf1d0f6cc49a11e12258d0c2ab4"
  },
  {
    "url": "assets/js/158.daad4c7f.js",
    "revision": "afad5789088c0b622020f3d33006bde0"
  },
  {
    "url": "assets/js/159.8c7832bd.js",
    "revision": "f13d0d599275300f1c921a5cf9abe3b3"
  },
  {
    "url": "assets/js/16.c3848914.js",
    "revision": "1bbec836d7c4c7dc7fd8753b350e1397"
  },
  {
    "url": "assets/js/160.51919a37.js",
    "revision": "948a3f41b98ec9af7c85513f70184745"
  },
  {
    "url": "assets/js/161.0e22d399.js",
    "revision": "e16475e033b32c7c63b9a342fc290abd"
  },
  {
    "url": "assets/js/162.121eaaab.js",
    "revision": "664f9bd9f6fcee9b77e73cfeca1305f9"
  },
  {
    "url": "assets/js/163.135ea70d.js",
    "revision": "837884998886d9c576caf62d06f69bf4"
  },
  {
    "url": "assets/js/164.bc0f16ac.js",
    "revision": "93ad5ceafe75947babadfed75884a591"
  },
  {
    "url": "assets/js/165.06884a9f.js",
    "revision": "39b0c4d2f96b6e29daaa7a46be14e833"
  },
  {
    "url": "assets/js/166.4f36cb99.js",
    "revision": "f794cbe3160cc4b8a2537c067460fadc"
  },
  {
    "url": "assets/js/167.5727cff0.js",
    "revision": "97785a83b29f77401f1779b5cbf95d6d"
  },
  {
    "url": "assets/js/168.dfd1f8c9.js",
    "revision": "35a287721b9d5768822e68c6990a8125"
  },
  {
    "url": "assets/js/169.730babd2.js",
    "revision": "b7df9b527015370216a6d8106fec6346"
  },
  {
    "url": "assets/js/17.dfa10068.js",
    "revision": "23e2cbe065258a9008488f79458fce7d"
  },
  {
    "url": "assets/js/170.d50e7bc2.js",
    "revision": "c4caac825bd9b726ef18146d189fe8fa"
  },
  {
    "url": "assets/js/171.4dbf0329.js",
    "revision": "dfce69a06d10d791ff5feb5522f4455e"
  },
  {
    "url": "assets/js/172.fe059344.js",
    "revision": "932c129757eed1186f813c9e48fed293"
  },
  {
    "url": "assets/js/173.2e9b7992.js",
    "revision": "6e8f2e7c6406e8b92194c54f09bf085b"
  },
  {
    "url": "assets/js/174.cf12c5d3.js",
    "revision": "9c406959495fcc27139d39f1f7dfee26"
  },
  {
    "url": "assets/js/175.350a0141.js",
    "revision": "f022ddc4cd7baf7bff9e3d00f4bcb00e"
  },
  {
    "url": "assets/js/176.ffa79a77.js",
    "revision": "82f53fb3fc6b37d1502f9e500c6c0b21"
  },
  {
    "url": "assets/js/177.f77c969a.js",
    "revision": "cdf71935b5cb5309b3b46fa580eb8ff3"
  },
  {
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.d5f20078.js",
    "revision": "7384329b2005e4069480b638bb298c8c"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.5a27f652.js",
    "revision": "7a9d2d33405fb2026a07bdfabf16ed9f"
  },
  {
    "url": "assets/js/181.fc37db2b.js",
    "revision": "6b589961f61d003d2c2ad3921746ae89"
  },
  {
    "url": "assets/js/182.0e3dca9d.js",
    "revision": "448011c8d832be93075738b5fb73cfe8"
  },
  {
    "url": "assets/js/183.4d394d0e.js",
    "revision": "d17725354eee744d482b8b1008edce96"
  },
  {
    "url": "assets/js/184.ea939eb1.js",
    "revision": "963bc6b3d552fb20716f891aa4f40487"
  },
  {
    "url": "assets/js/185.6604d0e4.js",
    "revision": "26d08b38d17080ed77a2b19bb05090d1"
  },
  {
    "url": "assets/js/186.12b2a19a.js",
    "revision": "f7f2cfd0050eb57dbc7f5323d3d3410e"
  },
  {
    "url": "assets/js/187.7c0b5832.js",
    "revision": "1194a271afa552340b8d7e3cc9434965"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.5a7ad473.js",
    "revision": "b2886645f18a8eff4ad44a92eebe0a23"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.25308ad5.js",
    "revision": "2d4205fcd00c639dfcd221a1d3145647"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.71593b75.js",
    "revision": "3d446e1127fe3dc464b528b9b08fdbe6"
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
    "url": "assets/js/26.1c67882d.js",
    "revision": "459b39c6883abf475f8cdc7d1856dd9b"
  },
  {
    "url": "assets/js/27.01be5958.js",
    "revision": "e6c23b3d7f1a7efb98d0276ce1789a0c"
  },
  {
    "url": "assets/js/28.c1e1cee3.js",
    "revision": "2506f76d78472e54175acdb4c6131571"
  },
  {
    "url": "assets/js/29.d2394a47.js",
    "revision": "d12eabcdbf021c5347003d73ae41cc20"
  },
  {
    "url": "assets/js/3.975a3cc6.js",
    "revision": "95f308fde31f8c15b10708d217822514"
  },
  {
    "url": "assets/js/30.8245e0b4.js",
    "revision": "bf3c6888af5d9b705914e0b0956cc34a"
  },
  {
    "url": "assets/js/31.1dcdb276.js",
    "revision": "4be5e981d6fa66eb3eff72b1e3e82c0a"
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
    "url": "assets/js/34.2126d495.js",
    "revision": "e4c463d94c15ba00410c22c8447562f6"
  },
  {
    "url": "assets/js/35.b9af76b8.js",
    "revision": "3215cbda57b6bea0f449559a8f0a835b"
  },
  {
    "url": "assets/js/36.c360f6fb.js",
    "revision": "b6d18b489e3c435f540a7bf3cb3171b8"
  },
  {
    "url": "assets/js/37.eb7118e7.js",
    "revision": "29a7f2bfbbed5718990182c7a60dda9a"
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
    "url": "assets/js/40.9221c9e7.js",
    "revision": "01c90539091b71946b906873a7182843"
  },
  {
    "url": "assets/js/41.9760b85b.js",
    "revision": "ff6fdd2e83b2b71a71ba6abb66d35c52"
  },
  {
    "url": "assets/js/42.09864af6.js",
    "revision": "d98bf2affde52e71f7bbe0b43ed6e9a8"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.a90be45e.js",
    "revision": "4d7c9c7fc5049091e1f850c3abda157e"
  },
  {
    "url": "assets/js/45.85109c4d.js",
    "revision": "6f3615e1ec658829c5658254d7f8cb7b"
  },
  {
    "url": "assets/js/46.4bcc3422.js",
    "revision": "abfe62c733946f1b3ef979beddaaf07d"
  },
  {
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.e3940bb5.js",
    "revision": "4879254c1b685174cad3b2f9a7d0f3cf"
  },
  {
    "url": "assets/js/49.5d21f860.js",
    "revision": "9673fa69c16b212c6131579de8c098ed"
  },
  {
    "url": "assets/js/5.9c77cbe0.js",
    "revision": "37b86e6ffc379e1e9007423eb2dabdc6"
  },
  {
    "url": "assets/js/50.73ffec8a.js",
    "revision": "8e8023ddf2d3103e683d6a2dde79cd64"
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
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.a3049512.js",
    "revision": "4995646127e5d143bf62d5bd26ad7d50"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.372cfc7b.js",
    "revision": "9a8c3ad5e387552009d38aaa0e3273fd"
  },
  {
    "url": "assets/js/60.a9ab7792.js",
    "revision": "79bda478370f8bc6649c505430c16704"
  },
  {
    "url": "assets/js/61.8f456904.js",
    "revision": "af7e5ff0bab047156994a3e66f9cd7cf"
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
    "url": "assets/js/67.5731bcb5.js",
    "revision": "f1fc76e231fbfc706938ef50945c49ca"
  },
  {
    "url": "assets/js/68.5e5fcbff.js",
    "revision": "2557a514185895c8938f27ec7b2addff"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.13689010.js",
    "revision": "c12fab91467caed2c3274b4284351fc2"
  },
  {
    "url": "assets/js/70.2b38e83b.js",
    "revision": "8a4499cf9068edeca99a9bca0c109bad"
  },
  {
    "url": "assets/js/71.34fcec0b.js",
    "revision": "682d920511338866aac151e53647f7a7"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.0211a9ca.js",
    "revision": "b9364b1faa6e83a6e30e9d9892611d8d"
  },
  {
    "url": "assets/js/74.aad526e1.js",
    "revision": "a4fe7a7615650181de14c29cdbaf9f0a"
  },
  {
    "url": "assets/js/75.9396f685.js",
    "revision": "7872f0da94de9bd84ce4134273ca81d2"
  },
  {
    "url": "assets/js/76.2ab1629a.js",
    "revision": "e146c91c0f1d6cc9a4ab452fc1251e26"
  },
  {
    "url": "assets/js/77.64f56c45.js",
    "revision": "91f2ee8fcf1a218646d1c9c6394c9f3a"
  },
  {
    "url": "assets/js/78.a05911ba.js",
    "revision": "56e473fd361c8f35c3ef6c5d6e4e8aa5"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.d6b4d976.js",
    "revision": "97722a30b6b07f1aab6fcde28fded114"
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
    "url": "assets/js/83.80338452.js",
    "revision": "87813ca3b5d239b57f2ce22986d2d0d5"
  },
  {
    "url": "assets/js/84.f88bdc56.js",
    "revision": "80ef1db1293dd42671378a1dca9f11c7"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.a70182b6.js",
    "revision": "5a948b1b13b5385800f92eec6041623e"
  },
  {
    "url": "assets/js/87.89f6956c.js",
    "revision": "d5680fdb2bc2a7d965557bc39641e200"
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
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.52253ed2.js",
    "revision": "ad606a349923c3dd92bcfcf7923e2a18"
  },
  {
    "url": "assets/js/94.1ea654d5.js",
    "revision": "e508d36762d1878246ade40732064e1c"
  },
  {
    "url": "assets/js/95.7b366bf9.js",
    "revision": "4657f02b014883207e636e707c91407b"
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
    "url": "assets/js/99.4d46ddd8.js",
    "revision": "e9a3d86dced7d2a897fd6c077c1bc193"
  },
  {
    "url": "assets/js/app.f06f13eb.js",
    "revision": "f105e28fa0f5a4b2951cfb8874887c58"
  },
  {
    "url": "index.html",
    "revision": "abdbe8e88be19ad3acfdd4d4694cfd82"
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
