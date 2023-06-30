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
    "revision": "36473b65d5cd27f20e4150590701639c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a2397a00e2338d0ef427ac66b8f52edc"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "1a8923880832ba671c5509f38f067841"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "4fe1857c1b4875b648e4376241f10af8"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "3794db0d7b636f1ee16e751671982fa3"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "cc6b51703848403285357e5a99a3b518"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e881fdbbd709301addf8772970d5ffc4"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fb9d74f97399b3f4719cb0133e872292"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "fb4eea5089bc28cb2cb22f079c94339e"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "7c2a017195aa81cd34b545481b5c262c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "45e7a9f7adbdbb12e48ee6335b6442e0"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "66a8577f54201b20d112072affc6aebc"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "1e75d7964e440a7a2de68e7cb1d90f69"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "d46cce2243c092111d1a22da34116140"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "d86a262e233272e3d98805630bb3cd09"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "948981d3669cfe60ad1bfb78c76ed92a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "877c977daf40847cd7a9159de8975428"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "863b08f743d3d7c44c9d277a61a98caf"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "3a7b8b903eb62bae98f10fe79b564f0d"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "d773077199d23923b54242bec8323674"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ddc8ee973b4b40f0a9c27dfa8171948b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "d6c5a68e37899130a275e9b863191e5b"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "10dba34eba1cbbd9aad3ec2068df0ed5"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "f06ba5ce7abe17ece79c003459279a9b"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "a99cfb3ebf2f2bcf810596e8be59823f"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "0f9bd2f40ef3512f725d2d3252ca8153"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e9056bd9840f52cd7996af8987a1f603"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "1124910dda3852878f1a3b4e4d571db6"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "c49fa1fe26dfca2ab97f272df62d06af"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "0afe9df4c45bf9bccec73d2707064dce"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "3128289ed14605f9f9a17d328debdf9c"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "10d7a7895d992f00300de3b75df937f3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d8125d15fc9e8faba25ffaff160149bc"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "dbbae7f74947ac45e43204a52b01ddeb"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "0dd467b5d8a5ffe28068325d168600b1"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "31d207c15196534daa233db373f96e95"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "2855015eba5ceaa61b8eaeb55246aad5"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "03202cfa09ab8e8a242acc08f4bb2964"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "42aa480087f0562d20cc8c658bf62f1a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "15d5c5427eb05541bacca8129c87000d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "0ca356c4d5c8688184e01dffddc83e12"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "1328540c9d6d160801e79231b060fcf3"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "aff5edfcec26a8490d1373d6d6657338"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "0e8cd9bf7b05c8a7ac02a9395a33bed3"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "16967cecb5b5e206231551fa3df4061c"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "3ee5eec75cb47f485fed098ef1602538"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "6b76a2f7dc70835218377bfd6d2ea2b5"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "2cee52af5a951905c9d23b13116ab890"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "b87b219abefef9efc916d7be188134cd"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "02a5c5bd0567987b4426334f2e465cb0"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "fb6051071175b0307a9a87c239c26fd9"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c4ed9bc1c5b86b2a798420ef738fb1a2"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d37c5338b6db77a5c93e0c860d8a86ab"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "2e2ebc3c288ed9e9e36f6bdacb79bc3b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "20a9cc27c89ae40d5c4ad02ce2ce0961"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "1371efc9f9df2429a66ca53dde00fb50"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "56c52b3d80faf3d14fe810190f58b099"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fda1b9bde1bf559d13f80a823d2a23fb"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "66f01b6b2e36dea388541d7a44384096"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "751cedb2df5d2cf5ef7ca21fba504c07"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "124a71d818464c5dd397ff0285319dea"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "2e96429e880276b0a0779fc609e65187"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "680920fec46bd1b1e3f93247a3848c7d"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "085db7fc25bade7c44cfcb2aef53f7fb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "145bbfdf361ae8d53c524ab784b4fab7"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6b0bfed8106f5f34623dcec279d23a97"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "40b854d465aca57da40669f8a659eacb"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f35bf96bb28d340ea656721b1e7919ba"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "342a47862dc7ce49cd8dfa9bdb24ffae"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "5d05b0910b1fab6ecc2ebccfe934d53a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "1edca6248fc6f60057cb4c062a7327fb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "685480e5d374f53f8fbc0066721c17d2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "7261616c3d4c1b7c0c7aa5551cfb6098"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "09ef65ed3d8b484f1409b0452101bbec"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "52d3ceb1ea96c268838da0dab16f447d"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "81ef3b009573b3c9701e2902306fe6a7"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "9908d6ad8b97f29931c55832831b050d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1151f45b94d7208605ffdddfb10ec213"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "6513a54abfd9ae4144f8bc981e7fe447"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "438615617b2b7d3f33a47a5a9a4cf7b5"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "1bfeb4a857a17bec9fbe6db7ae460537"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "cd59f31dbd1c926155c0e07514d4d3f1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d2dc767d067c95264337124c230976fc"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "dc1cbeeaea64d622dca308002d7a2332"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "37f953d69b691d7a6f5d6b0913da9e3e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "49b4e20aab953aa892eb73379714042b"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "76debd05036acd0efd412426a889fc73"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "4427e773e156839089842bb095a64257"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "3b9c319ae5899f023fee8fb6019820a0"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "f5e95a17cc003183c846435d327aab5d"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "557435b3234cbd49dce1073571ffef0b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "ed61bf98b8b3aef16f46b9f4b3280e3e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "404d7d24b1b5b1f22706c3964458368e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "2150683788399e6af318618921883b1a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "88da297912f44bac61bcff827203dab9"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "ac34813a6d50cc39b35cf638dc95c99c"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "7e42c7700977bc1b3eb429d686d63d31"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "772e9b534c70603aa05925429283e550"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "47eeb4ebac81d5960fca54ca385df55c"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "1ba2fe2db480fcc135d2946b7037e519"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "24e6815a7726e089b1fefad8f4fdf92f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "aec2b59dae6a5fe8c17e10df2d0ba73c"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "bfc7386d56efb72cf16216aa03dc605d"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b959a80570a9496d81dfc8df8517f69c"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "59fbe82d4dd417dab7593d48ebd29cb8"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "7a7b7a5cfb3db859910e0861aaa2c545"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2f98fb6ed092e4c628eada5f325cfe87"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e70e1b63ea67baef4e14c6555b2d5251"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "25771ee41af1e7b5b9b1e0558a14da9a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "f5d9f02b9cfe3b9bd4a44c01cfe80990"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "971198800b4c5383c2dd293a2bd6a35e"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "38faa265aa417e20f8467b8885d76fb0"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "6fddd2beecac227fadaa1c2523356437"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "fe12979afe436d55dbf22261fa5ac656"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "730b6f428d04d2d65bb26d8594f31a96"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "fd7653c05ac0da33aa4200fdcf74e55b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1d7365d2fff71e7e0caa8345259a3eb4"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1e61e53118eee7ca7709fa0535e94ce0"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "5fbe830c1a70ea4fecb354bb69f49c7c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d4e73fe925627ba924803c42fc6425f2"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "90b7d5b93b01024eec60e4e34762f0cd"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "cdee4cb24ec053cf624e2e47465be3d9"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0c6f501bfc3ae9889a18a93b8c9c07ab"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "9960123f9aca5e124b38069aba466929"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6fd28ba97c943635bb0bb81ecc9eb6ad"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "1df63fe9e343c70d0d113c207ce0d1a3"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f116c17c93b53c40c5a6143250fa1da4"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "f0bc580b1d0d47a9e77e605dd5cb6d18"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "a839f9504c48ffa279ddac9b46a4f5a3"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "15a5d4ec371f761c9bd8d326f7e3705c"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5b98484b977eb620056e0dbeb0f61070"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d0c12279634ddb269d03ff1fc2f496fc"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "de39790cb1c7146858e5b9f6a73ecbc0"
  },
  {
    "url": "404.html",
    "revision": "631fb8b8583e3e9c3261c037588bdf69"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/js/10.35857dd9.js",
    "revision": "d8926842eae3f5215a8bbb0acaf6d131"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.39b97480.js",
    "revision": "f463125bc489c171f0169aae14bace47"
  },
  {
    "url": "assets/js/103.54b28125.js",
    "revision": "d56e9095d9c5b474917b9f7f6c986623"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.5e0bf46c.js",
    "revision": "39ac08ea3d0d444b5693d674067a9752"
  },
  {
    "url": "assets/js/123.98208e2d.js",
    "revision": "5d30a7e713013943f3161f79bd96f008"
  },
  {
    "url": "assets/js/124.bd3e82b3.js",
    "revision": "da3a5ca7f252df990d3c7575e7ed9583"
  },
  {
    "url": "assets/js/125.5d1aebf6.js",
    "revision": "700cb9ea3ee6aca1078b1a0ff028b292"
  },
  {
    "url": "assets/js/126.b6c0a43b.js",
    "revision": "35d3cd64dc03120bed82a3703c2df549"
  },
  {
    "url": "assets/js/127.7d788e70.js",
    "revision": "ef447b237ea69012c33fd7e5f2bc9548"
  },
  {
    "url": "assets/js/128.397daf1c.js",
    "revision": "9f9e2160b7355bb0fdd54f5d26859983"
  },
  {
    "url": "assets/js/129.41094fd6.js",
    "revision": "8c72e1123ef0ebc8972b32b2c5ec1260"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.fd57f335.js",
    "revision": "cc310a8767a2b485e966a69c3f28aff9"
  },
  {
    "url": "assets/js/131.d83c8b45.js",
    "revision": "be9215c22ee34e3bdafb69f90ba6db19"
  },
  {
    "url": "assets/js/132.ba5be34b.js",
    "revision": "f2b8e9779943c721ca2179a083151015"
  },
  {
    "url": "assets/js/133.d76f69e7.js",
    "revision": "dfb406b0d88384974a0ab0b3385f9f7a"
  },
  {
    "url": "assets/js/134.d00e08b8.js",
    "revision": "143d1999e02069bb81b2cdaaba849333"
  },
  {
    "url": "assets/js/135.e8192cae.js",
    "revision": "15d9d73f6b5fb13b39dfc353688a966a"
  },
  {
    "url": "assets/js/136.2198d49a.js",
    "revision": "894d8ea54261a5bdaf04d954c9c6f089"
  },
  {
    "url": "assets/js/137.e98ba6b8.js",
    "revision": "db82179545011c34ed2263fd4160a7f0"
  },
  {
    "url": "assets/js/138.f17c4e3e.js",
    "revision": "fa663be490408b8f0f0a40444aa0de73"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.1a8861b1.js",
    "revision": "41f7510b2c0a08d98bc967735271eac0"
  },
  {
    "url": "assets/js/15.70d5b891.js",
    "revision": "30ec4c9bf57bad9ddc1d27b252934412"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.6b409cae.js",
    "revision": "17329bbd323d46c0f0c86da7d465cb71"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.443b0590.js",
    "revision": "7239c817fea82b773f7d47760b1e9537"
  },
  {
    "url": "assets/js/25.05a20a27.js",
    "revision": "fb836deca6f91e0881a05fa781bf4efa"
  },
  {
    "url": "assets/js/26.d664182f.js",
    "revision": "69a19eb2aedbedf942e0eb9ec7c448e7"
  },
  {
    "url": "assets/js/27.e3a99fe5.js",
    "revision": "24db20cfa422de9f8940a4caa1b82d7c"
  },
  {
    "url": "assets/js/28.11863062.js",
    "revision": "29c61b6308fefb8cf41fed52b4261e5b"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.0ac12ace.js",
    "revision": "c15bcf0279b33c0973453ea2f4cc1781"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.2fca18da.js",
    "revision": "aed3be91b8c692b74e3da31f9cbb3ec5"
  },
  {
    "url": "assets/js/32.4e227cba.js",
    "revision": "af50fd45457a1ae144481f570b87ad9d"
  },
  {
    "url": "assets/js/33.eac14764.js",
    "revision": "aeab27d0d593ab5fb7c21653da3e1792"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.fe706f26.js",
    "revision": "c0cb92bc1ce14ce6edd0ab23cb7980d6"
  },
  {
    "url": "assets/js/40.5e713659.js",
    "revision": "e556771c032f6b4f35ca249e050bb015"
  },
  {
    "url": "assets/js/41.77ebcdc0.js",
    "revision": "d85e7e6ec3d2bc0ed6fc9d2731962e36"
  },
  {
    "url": "assets/js/42.22cff793.js",
    "revision": "81d8efeb57f4c21ade8d1a76501f3a53"
  },
  {
    "url": "assets/js/43.54c55414.js",
    "revision": "6a5d9bccad3cdb191f70217ed0f505bc"
  },
  {
    "url": "assets/js/44.70d14f9c.js",
    "revision": "ec0dbc5e947fe7beb056a86fc6ba4cf7"
  },
  {
    "url": "assets/js/45.f9e1e325.js",
    "revision": "4d1fada69b43204db41df5f43204419f"
  },
  {
    "url": "assets/js/46.43f9ff29.js",
    "revision": "059dd0a1d12730feda077c3284b397a2"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.e2bb9210.js",
    "revision": "19761ad5ee888300ea9a7fc5eeac3660"
  },
  {
    "url": "assets/js/52.a228f13b.js",
    "revision": "232befdb6b1d81b18ab79115e440abbe"
  },
  {
    "url": "assets/js/53.54edd495.js",
    "revision": "8165ebf9cb0abc258b8f270d95abad6b"
  },
  {
    "url": "assets/js/54.23f25432.js",
    "revision": "0799448220981d0024027afea62a23a7"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.ae39f307.js",
    "revision": "d90c21fe5a6ae119e14b83a54271c2ad"
  },
  {
    "url": "assets/js/68.5b11bdc2.js",
    "revision": "d638ce181504c21d6aece752ff1e2e56"
  },
  {
    "url": "assets/js/69.eee9ef7a.js",
    "revision": "975152695c11ef424f8f2aabee1d1f6e"
  },
  {
    "url": "assets/js/7.018c1700.js",
    "revision": "293871bacb17245d6d8376011a5523c0"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.e314be84.js",
    "revision": "9fda49341b42aa736ba5a53fecd3e81c"
  },
  {
    "url": "assets/js/73.16963a22.js",
    "revision": "6cc06a1da0bd94246c8f314a931a2609"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.067a2bd1.js",
    "revision": "c47c4bafb7bffd279df450f9fbc3192b"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.2aeddb2c.js",
    "revision": "d217b8f7a07c45ce99e7ee990c5b9b94"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.8f4106b2.js",
    "revision": "4ea03da5436bd5968a00bae3deb5bb92"
  },
  {
    "url": "index.html",
    "revision": "95e8aa11d8d8a12e8903560b397f473e"
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
