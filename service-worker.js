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
    "revision": "e48fe72a57ab32ac031eef3b75469a86"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a8d8b81a5c13c3964d2af4e64b3f2628"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a3cd4373d13f7e4b4a82b9ce9dc82ab0"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "1d9c09cdea2721ccc0878ae8ef649094"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "1cd5d885e6943d7bf6d926e4117e2cd6"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "de695c9dc376c7547adaed6c76d0c23a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "06d7837942aec7afcc7e960c194de3e1"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "83ec17288b4fb519fb7b3de4b81201b2"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "48d40cf54ed98584fed9a16068421c7a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "121b25af0188bb9d81ed499ac9d7c940"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "b457d14d5080a4ee5882541c181c7530"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b383da555a04beb4e23345881b7277f3"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "0024d5e502496bf7dc6f2b24c89f63f5"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "df38810df904741c88ebd6e674cdb4b5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "97aa39059de83d7b1e9c58372332734e"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "d45a3436197637c7fd66bf495235aaf8"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "0e29ef1bebb72e774b984f305050ffae"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "655304e63280294ad9eba009970d7b07"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "38df5d14cadd8f44d0c08c861b009996"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "591a046aed439f987248dbe92cae04bb"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "cc1e289fe82d6dc20ac99d1b5768fdd5"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "1d8d08fdf46f5112397c0acb3cf0d270"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "6b50b6121587096658f8eda5803e0e30"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "b8ac342350f305be1bdd67efb2182d35"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "882c5f31bd90af5a814375f5def84e14"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "5fdb9b40aab92d5fa2da1ff73ddd3e66"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a956cb4a7a6070258501b2e0f0172955"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "c21961b2abe705b8ee9b6e5db405475b"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "bc541493dce45abdb46eb4c839ba1bff"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "b2022a938f5a76dc8a36cc444b71fa7c"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "10303ecbbeb9e878131c2a5106be08f3"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "57378664419a00917150308621de0e37"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "8320f2a16afae96ae314e4dfe472d151"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "b28282bfeab6a9644f7e48bf8385f099"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "fcc6a6c66705332546f65a7433d25f6d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "ff1bae9022a36cf01cb67b2b27b86be1"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "dc7c2920b1259a61c78009b7f5822fd3"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "b27e822bd30718c45545aa44efee2a1e"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "288e621f42973130531ef130647582ac"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "ee6db1fae14f32285db4fb4ce097557d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a609397b8fc3c7cee6686d70990dd55a"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "b89ea1605273b02a031068198b2f6c36"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "900b1446b32f1a8774d3e891cd8719b5"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "67a023450b42558974261e46b8d9ea38"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "17c4ad20e467603b89f618b2997ee4a7"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "a27534999b51f7d550ff6433a6b2bdf1"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "287c5a516bb169280db2d873e3548bab"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "512dc1158c13a5b7f354ba27175cf5b7"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "a5db4789eb41f23a38d88fa9570afbbf"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "b332db7ef88cbd6a648738f88e88255e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "35ae2ecbafe46f01b02d749ea3635528"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "122cb1280f5cbc2011d4d9f949e85b25"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "c085ccba490842b8a70223f771972e3f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "f42f6adf2124b0e02712a83e16fc98b1"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fb5d4dc79b73068d853239936ab434db"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "3bd2c34a32f3d90dbb532e6563ce9b74"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "fc9c73741217d49ccc8a23403b118bcf"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f3673e287d9e7c5b7f41810953b8fd66"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b47ef6e3787cde135c929265ee55222a"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b113507cf78a6289d54adb63fdc49db3"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "a4545bc980ca7b5f56cf94a2dc99d08e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "591ed46fc349f03a6e538b89b42ab456"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "8d1762948153306bf94c934c9c618238"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "4c4c82efcdf2c0b94d8d64eda012c60f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e04e018c87ab585bdd779fef435934a1"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "7a1f47982f4aa3bbf3b90c143e1fbdd6"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "adb419733e4ef2ba244d3a4627459a1d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "c4caad2dcfe5b3a0022dce009b6697cb"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d8e6c9b24466c5a7af2c0ea8348e6b64"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "856a601e214077ca69b163c7c5f46026"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a7ac78143ad235e1713723762b7a1fdb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c9960e5d26d9ed28d0516e32361e5cdc"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "fea675703427129358974933baf312b1"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b7a81a24069da658134878f543b5492e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "3dd8c23d631bc4c8f5afe03c6fe9467f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "5c75956818cc248c5173ce0785e88a7b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7b40627dadd2b0160db4e2bd3af568e6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c52a4dd918d68ecb58d891b9dfba2c93"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9a3cc831d180efe8e76f8857e2d69fd7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "5b4006a91e09f8f13c28a3c183813cdd"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "ace9b741a78490e6292fa23e1c7d9709"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "bef00eceed813d0183fc00196678507a"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "7bc90fe8d70844bd38b8a47e7a937966"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "12e8eecad75eb96a201ad2e32db3e19b"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "763f0914d3410bc33bc21814c952f89e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "213052937d06c2d89668da2c32189f5c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3b06ac56ecc0def8b4e46b7e4d395a19"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "1cdbb76e691bfb8999799774f1559731"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "5856823b62cb7d9c53e065baeefb486d"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "75adddf0ef2caa42e3a539d64bacd431"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "b76d3142f6b406bfb51a12beb09c3823"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "65c63f5c3e4bb1d7e5fe3f7eaf299f74"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "76e1fc8c65f2491cab843acb8269b84f"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "52f229d9fa629cdaae25c556aa7b7ac5"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "eef50a8d89f783e9be3234369afec82a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "bb5cec6b4287704acbec92fe471afb7f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "8de47e813bd39aa7c0833f141454bc63"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "77127816e12c2b010484f4cdd94d6ba7"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "f5a9d359241e97c37daa9cdebcf3e976"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "518d772f57248439d2f74422f03835d9"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "efd2e809ab14b90c131a53058e411308"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "d19ca8d403af8342376844d8dce01ad1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "a5286c323f2fd8c287182a9d64fcd800"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d01914009804837f68212e22f82f8275"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "75ee22ab70410ef54ab51b3ae5d2cc12"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "33adb20ccd97ffa7d744aaa59054509a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "0fcc82fb5c2aaf04a17812a36c9937ae"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "040cbb8291ab3e27bf86933274245e45"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "dd03a9fe87c1148c16d521fb7c91a935"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "782b43e70b0b01862ce98f4b6fb8a740"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "696edc2f23cf93cc7f3b0003b2fd2e1b"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "57413057a9116f75a5aae9b358664c56"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "1e54be260873ba704e1c7fc8f661d2a3"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "fd2234a9dbe4fd7fc35a41f1bb18dee3"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "6b0db23d14770bdf3bc2d7b176f6545d"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "20da71ead98895e09ecfb084c0d72a25"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2ac3dfe21992efc264fd3ceaf2650fd5"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "88b6f81b134c0189b363ad2136029604"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "51f2f94e4b132bfe74e6cef2a873cf0d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "6d2cf2f6a30edc1bda4e7d0655c4bdc5"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "000f22007cd33e13a50ca8bfcd7503e4"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "0e97d29c243cf1a25c3762af83d72ae7"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ae644134acb1c7206fd862333bd06162"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "007fed74e190a83a6bdc1229e7a7c18f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "39030b05bbd86619f68dcdf36e90da62"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "e5939a1b9f084afa5d2edb692e1a95c1"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7da7d158948b4df35fcdaca4a64569cc"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d59a9a6fc3e2eef5720a6dcadc68368e"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "c1f805ea2c0be7ff0d4683da961294fe"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0d1f52e40348fefab62dee4bb036df64"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "652b30a214ddc5b506422b63a812da82"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "869e8524360b6dad77eaf12a421cd1de"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "e9c71491fe43d6ef640e9498eaa5f2b1"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "f686d59a23ede4a3e0ccc77d5627fef1"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "b7db6ef24a17191bf1e590ef376f8059"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "ddc49dde1785bdc239a3add7370f2184"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "5b111775951ab010d0304e17a7006c78"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "7d1e1fd8b5ba446e3f1a86489ea33233"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "752bb8d5b406a7131e5c9ddc7010e3eb"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "279325f3bd56eb40dc7d9663979938d2"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "e02e04fe590b7721d818975ad869d492"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d9b8137bfc92363c69bee6d59a4881e8"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "4c40d01d579c3e3726d06155da90832a"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "7fb4e1bde7a2804eef182af852e5f244"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "b75a47802018ce0cbb0ec07227d5a5df"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "b8bc11e3d5396a68b183fafc1fd777ff"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "7827d61ff7a84afb4ad24fc87a0ea608"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "b9d87fabe71e5ad796f96e0aa3201e4e"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "347377dd8e8f719fb07d3171035472ae"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "5732066c8e51e848ef4cc31ddd3dd62d"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "74952c56496447b27f469efcd4bf5ae7"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "53538a4c1e4667eff28fdf4a22ba0bd6"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "4e1d62ef9f52cf1cb8479b3cca16a797"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "a3757caeadb5490da48f45196cac5970"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "39fb12dc51f47dd2ccd9a673c9ccd441"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "f66b9a7796c9568d101eef9acecd6774"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "ae380f463753979ef991bbdcb5c8e286"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "c6ed6d4c8cd014908f0de53eabae1738"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "89683fddeb238b21f3694ac00c48b930"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "bd4c862a5c863b470a19670014148309"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "9ce8353b0d2135a21f3f1826cfaaafb0"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "73ca886457716a5dce22f974cb3b82ca"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "8b8a316f9eff356007ce924677bd07f9"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "51271215e0afa2e6f9e9b4ac50cb76ca"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "63cd0370e40c4e4a412270bf239bb79a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "3922e349ee2b2aa1a4f4b506e22b59ee"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "862082605c89acabbe6ed60360d37800"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "96091fc263f55dab9f00f418fbf07480"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "8b0eacc55f3e5fcb9b99ea3552e7c390"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "d2210382eec3d62e5e7ae646039699c6"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "4d7c5d02547cf2f271d320a292760a76"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "429af3c3fef8c4750d7e247ea6f0e2e7"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "2e9d3a69ad4a0f3695965a9818284abd"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "4042d2a662374b162ab64a5a0a88cb43"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "0394e4e19b03efe37d5659119b9276e9"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "3688d43f3981a9119da6e551ba1f2217"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "d5828836b05e1d8a6e328ca7012f16fb"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "a57002c6051d7ccb8567d8b6c549842b"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "d7152b65906c77a79dab81f14a1b3010"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "dbf4ce9fb830f7f6b4942c8ee7bd6f49"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "6b1427c4ae0b4e069658b66da8c0baf2"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "4c502a2cff532c25e9356938171474ae"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "a887d4125afc3efe645a474120d9c5d5"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "6af3118c8ada47a8b75fd883f1eaef9e"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "4dd12ceccf7e06f05d3872abc868a633"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "63fe11ae7b4b025c66d47b36f5fa5b3f"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "1a5ab473df7a1b7c78986e25d993d9d9"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "15e37e9b96b41fabb979148784989718"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "b2c8341bad2578fb11b0c497cacaeb10"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "01b18d748bb9d91d154bda8a39f0a13a"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "254e19af490ffbc0da39943dc80d3659"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "f5385f5fe353e1f278089c0a9128e816"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9caddbb554edc6c81846598a0cdbd29d"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "1627f990a334acee05082f2010342c84"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "bcebd96612ffead447c91b0704397443"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "438c1cceccaf48a0f11515cbd404989f"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "89331ca36a05c169ecbd11ee0de8b47f"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "0eff78be07fa454f77f48b144619b6c0"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "25f0d46195fb4469fef9224a360bf026"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "8baa03bf034de915d7bd3066cee26296"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "8a4011521978e11ae238bc043353dae9"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "b937f4ffeaf7f012f148af961d7a453c"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "7ea6ddeabbe3bec51a24350fb9d2973d"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "00af7aff3447f8394d8f617c93219f43"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "5ad3e9ea9ded6abf78b639b43ccdd501"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "0922ae71fd90262b02402d7a7e9cb313"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "79c1579718e15c6f96a1cc02044b06e0"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "0d8646658d0e5ae9eff3c6e25d6a2ffb"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "f52019445ab265ef115a5d5ffe3afa3a"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "769c3f294db6920e056528c2c6c10970"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "991d28d269f1c63425eb2df03b92e7d3"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "16d5bb9be298cdd187d3fa6267cdcc47"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "4f287ebb246efc66dfed56f4cf45dfee"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "21af532f05f0afad6f1ff55f566a3f4c"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "3426180cae1f7950ad0eeda6f0f31e80"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "28cfa2b8057dffefb2a20e6db53ce38a"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "517b40935e8a1c23f890104f444f315e"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "97fe5ce6b9e6276f4be6c89809edeaf9"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "55dbed28956dfa612c8815497684f6ab"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "e89b7b75a8a81cfe19a7e52e9c775520"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "b809f8762ce5fc54982fe3985abe9cb4"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "e2e9b69c650b00321068fe8947cb9d0e"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "ff215ad585d8c5a5703de4772f01676b"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "91c97ca674b8de4ae45261c612e0a9e2"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "26775c0b0ae2e16d4c631088916e14c1"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "32561d05323b6201d631d52355d138c6"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "55820dfbe28f574967b613f2465acc54"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "70866a31eb591c197c3bf9d3ae6806ef"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "7175b3fa994fa76f0087bbb8f3457b9f"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "eb6b25094dca1555b02f9f7c4e637523"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6261d1ae3f69e600dbba3480fb1b27ee"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "a984163ef244d7614d69fd95e32a745c"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "a381ce09a71fd2d0a533cfdbf1021332"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "83f0a7e2d7d8d2ef24a97f06ce163885"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "d465985acfaa955370ecee08b5faa6d8"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "3a0926451effead91c3a31b1e4d40b5e"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "de5b4e6b81ed6077e0f25902af008b6e"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "f8af7ba9647f352242921156c3556513"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "a9ef7438e390c5e44aee0f75ae0d8cdd"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "87d46fc40b99f3823387c9efa8044849"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "8c932eb4d652c5cad9088dfe5c60af5e"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "65102775d26a0e28723e89974af7b99a"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "0a474aec6ac0d3f4457190dceebd2333"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "de267d7d7597bd3f935f83621ea731bc"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "33f0534f6c1cd119f1fb3238820485c6"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "bbd5ce4ea6f1141ff0b394989750f272"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "77b363c243de4d71de7f543b7b12c330"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "7ed9110844161a3b08a40ddc02d2ba19"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "5e6dfcd86db934c16d721cd82aae4b32"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "da70b94fb3725c227502bdaf528c9df1"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "d6263297cbc9633da44f39389e2e4ae4"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "cea47db4f8f539a74d6bd0ad7aefcca7"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "046070554ce0acc7e3f7ae3c61a9360a"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "6434a3733bc046d44044eff95b0990f8"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "a4193c5f36ea2006489c6049c5ea1c47"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "c7e17e8cddef9482f83285c4aae78a3c"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "641f24c71b014a5f688a4b1dbbc49a2f"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "4debfe6547391158e8f628d00167f7ce"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "350ecbdcbb074285e49e2433c195014f"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "553bd36ec4ce974df454bad02e80b775"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "bb9d3986939fb5a0f8e1f6db6c1aaadb"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "83e72ab2a723010d44933644488e7cc6"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "f32f644242b8e7e525988043164e94d3"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "698bb2696225ed8d3b353b3a80b3d129"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "0ff2478c60bbc2c7e813ee3412bdf508"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "e47e8a4105ddba0a7d5abcb2d1a72b9d"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "8ee8d2958815ac038c92addd87d084db"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "7c1b7472cacb66dc7d1b0af060a52004"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "33acae5e2e6485b9b8fe08eddfa131eb"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "4ecfcc8ddc2aad099f251ecc9eeaff56"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "84b19ae308670d4279b6c4cd3f6ce230"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "a36d28197182a9f019f4262fa6dd8e25"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "e80ab5e53146207e665f4bb0c5bdcb5e"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "0c6444a7bc07ce5b5af87caac7e01afa"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "1403bd6567f96492cba03f19e553e08c"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "2d529911ea1216beced4c904830985c2"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "5cf633c6b7803cc1a0bf7a90a1249cf5"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "a1ff3dfcb248a14be4feaa0408f93368"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "5e50e9cd4b20850976fc6827970985b0"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "57b9e0b054873a4f841cb8a41881d1b0"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "722bc68c622d0f7b13b38f9ffa0fce75"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "0bcc3b1fb2ea7dfd2522683d8d8ef97f"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "a44ee4d3fd3577c6136c7a3ceab76f49"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "36ee4a4eb734b48fbca210caaa103eca"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "638f8bbba8b897ba662deee9d7655216"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "6ae4f5ccc9a56069511d7d264cdce263"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "a40c45bbd41f990787631dbf254248c1"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "73d073252188cc1b04dcee7f989faca5"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "3ea0e5da7ef620d35b29ca658a5cc590"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "e24c3ba4030c39d99150c4a3a1c61613"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "8b709d7ae632d1a0d7149a736824dcc0"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a353c17ac33d98c06f8402cd7187570c"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a7d6b41f2c6c50f10b5e8330830abff1"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "fbc95b40fd0f61bf38a1f27f9ece9079"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "067f703e76c689c72d2d65f0181f65c2"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7a99a0ab85fe1e68b024599e3766accf"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "a3188ea86b0e287e214149bb58c77077"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "1593acd910d9dd6ad47ee3a8b2bbaacd"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e6626c34ae3dbb2889bc099b01686525"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "4b203dcf6952821bb1ae558e302c53ec"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "6d4197b66f2651cfdc7c161621f4891b"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4098c53f328666c1e59b75c60dce7004"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "5273dfa9af888208da031003272cbc3d"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "5de8b76c5cdc2ca4c500bde7097f2222"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "95dd5c05cf6c419327604101b15bc482"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "64762876ae569b6b4d4b914efa97c733"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "92b52dd9213dcef1418dda69dd1b358e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "403f228e573f7a3044cebf7a48857fc0"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "05c875d9c45e42f63419449263ba1d75"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "314405ae741278572bd676645da2ba45"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "dc5f64e634c88aef57e866de18d57cec"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8d8f83eba54f9e9c8ee4bc07b17e2aa6"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "90c8b549fe7482163f0a500aaa2f3228"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "ca038bd0abe88bbaccd95cde7e4622f6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "ef35544afcab08b6db8a8841ab658ddf"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "1fbaa7045f5f43a512b889464e9ded3a"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "8a8d2cc502f9e3bea88819d7bbe887a4"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "64d0dd9326cd33cb6053228dc386ef2a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "3c508e4ffb65dd72e6ed75fbdfa74d2e"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "84f1ac1247c91c089d2c2691eed44814"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b0058fd3caa0e555961c2c058e18157b"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "ff2f165cb38210ed5d30d411cdfb9dab"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "cdabe1b4b2427a975703b3ad5c56b4a4"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "7500f1b8ceb7c2b762a7946f396408ab"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "d38743bd5c7e1a61bc0648259a0ae7fe"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "7475212deb5a36a4b89e8aca35723bd3"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "34e0fa9368eec1a7a4c5d49c12b8d290"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "44e88280d8adc73226a9a56d19517f95"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "1ad7478a00d3526538a33bf9fcb3a327"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "5b96d47676ab9ff4df40cb9653eecc74"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "ea8e6709e2401a45f2a8e2ce9a1c8417"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "b2f40cec0d1f9ba3180cadf0dfbfc941"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5431c8f957c9ab0048ee76703124af1b"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "aeefe922dee138229d444163411d5ad5"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "b9a8791c07ac7750b5b6996b0f0a06a0"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "efc69800819fd1184d679fa2af2278e5"
  },
  {
    "url": "404.html",
    "revision": "6be6a6f2afa869dc476cf43edb5f3169"
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
    "url": "assets/js/101.070dca7c.js",
    "revision": "9d6eef255b41e87c11178fb9d4c98be8"
  },
  {
    "url": "assets/js/102.36d2050d.js",
    "revision": "0952bf86988e753c5dcc470d1883944f"
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
    "url": "assets/js/106.6b8bfaca.js",
    "revision": "08dec7b0e69f4aa7d810f6dd44deab52"
  },
  {
    "url": "assets/js/107.1d197d03.js",
    "revision": "8d9e4f4c00da607d039968bfa5aede92"
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
    "url": "assets/js/11.8b954949.js",
    "revision": "4b1e7de1975649ecf40a26f2b4e0c301"
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
    "url": "assets/js/112.7afc4672.js",
    "revision": "48f20d8f7f10d10923159666c99de64d"
  },
  {
    "url": "assets/js/113.d5479124.js",
    "revision": "96492a4f27039678377b89952f14ceb6"
  },
  {
    "url": "assets/js/114.698865a3.js",
    "revision": "9e17c35bd2592f2d8678bc6c3490233a"
  },
  {
    "url": "assets/js/115.bb31c748.js",
    "revision": "b6cdcc91a5041dc28bc8cc1c96909d27"
  },
  {
    "url": "assets/js/116.561174c0.js",
    "revision": "91b90a13620b1a9a2548ffa6f29db6cd"
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
    "url": "assets/js/122.7a230d26.js",
    "revision": "2869751d4f387f2aaedd3722607ce217"
  },
  {
    "url": "assets/js/123.5d8fe972.js",
    "revision": "f1ab43decea64e65fe27d205d8c7c77b"
  },
  {
    "url": "assets/js/124.c603ad38.js",
    "revision": "be21d3c75f2ec4d7b6d2a621e931a0d6"
  },
  {
    "url": "assets/js/125.2acc1f4f.js",
    "revision": "3aca4a8b3a3a27c9ac66eab00a4c57de"
  },
  {
    "url": "assets/js/126.6ecd69ec.js",
    "revision": "7b5b54e60d87e7186df339c840133f15"
  },
  {
    "url": "assets/js/127.6bceee9e.js",
    "revision": "55daf04c351df5e5bb6bb9aa5be8b7fc"
  },
  {
    "url": "assets/js/128.9f930aa2.js",
    "revision": "8eb0ec15f2f2648145102cfc7bd20ef4"
  },
  {
    "url": "assets/js/129.05fbffaa.js",
    "revision": "a49ae5d9d26c38e312beda31df80c27c"
  },
  {
    "url": "assets/js/13.ae391c4b.js",
    "revision": "eb12f2a429ccfa6ee48331f83a25040b"
  },
  {
    "url": "assets/js/130.371aa458.js",
    "revision": "2b0d0ab40c095c107283aa094a469a0b"
  },
  {
    "url": "assets/js/131.f51d90c5.js",
    "revision": "82a13db4a631a52dcf5edd965055eb44"
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
    "url": "assets/js/134.85e9d243.js",
    "revision": "29851cb15cfc3f10df20c76105beb152"
  },
  {
    "url": "assets/js/135.68e46a6e.js",
    "revision": "147cf55bfd543d67b302bf2138a37f9a"
  },
  {
    "url": "assets/js/136.62841e36.js",
    "revision": "4729ebf34a1906e7172c82f2d5f0d226"
  },
  {
    "url": "assets/js/137.fcad4593.js",
    "revision": "b1131119235c8f2bd293c4bc8651ff4d"
  },
  {
    "url": "assets/js/138.e66a1b37.js",
    "revision": "0c9a2e355232a45087d39ecb5b7bd44a"
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
    "url": "assets/js/140.04bab051.js",
    "revision": "5d8239bd677c5c74aaffc00dc5565405"
  },
  {
    "url": "assets/js/141.2f22647b.js",
    "revision": "9b28f43c54f71012a0674631dc20500f"
  },
  {
    "url": "assets/js/142.894f5733.js",
    "revision": "bfd2df9f271a9be0755685284116c7b3"
  },
  {
    "url": "assets/js/143.e2165c89.js",
    "revision": "686d299285074644b45984e7c6b50cec"
  },
  {
    "url": "assets/js/144.c99ccbb5.js",
    "revision": "0370b554ef59ff94cbffa82140e9ae1d"
  },
  {
    "url": "assets/js/145.6f33e779.js",
    "revision": "3801b4c8832b42dcf9488f9a66165708"
  },
  {
    "url": "assets/js/146.c98d1be2.js",
    "revision": "e21ab7a55b500c89c69449662d8e7728"
  },
  {
    "url": "assets/js/147.2aeaf0c8.js",
    "revision": "2d4f098817aa8b3d515a14e575680ff1"
  },
  {
    "url": "assets/js/148.529cb532.js",
    "revision": "938c64913f87cd565333851817b68a8e"
  },
  {
    "url": "assets/js/149.b9b293e4.js",
    "revision": "ebd8a54b3741da86d8c6127cff3a350e"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.fb6881ad.js",
    "revision": "7753ea09ff08c7dce7d3ef035414851e"
  },
  {
    "url": "assets/js/151.d2638744.js",
    "revision": "99c2aea595f4b0c7b6f8e7e591175167"
  },
  {
    "url": "assets/js/152.ed46b5f5.js",
    "revision": "1cd928e3c4023216c1fe8d86b78b3d9d"
  },
  {
    "url": "assets/js/153.5f818fc1.js",
    "revision": "f6124f9db7d7b0776304bab864bd84e4"
  },
  {
    "url": "assets/js/154.5323d09f.js",
    "revision": "161d4f86cdc9bd6df5de5df8648d320e"
  },
  {
    "url": "assets/js/155.7c44935f.js",
    "revision": "7cf2c4cdcb92a2c79cd79e65aa3bd0fc"
  },
  {
    "url": "assets/js/156.2e26c5bd.js",
    "revision": "581da0c2cebfcad5cfd2f9eb8e339d70"
  },
  {
    "url": "assets/js/157.167ee246.js",
    "revision": "d991c17afdef9e812df52a0a20664ff9"
  },
  {
    "url": "assets/js/158.7a9b9972.js",
    "revision": "ae08a94824296e6dde988b84c28513d3"
  },
  {
    "url": "assets/js/159.befc70c0.js",
    "revision": "59b1db72408eaf35e165629fb13653fd"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.044f5659.js",
    "revision": "0b26395ad9148d8412588395c19890fe"
  },
  {
    "url": "assets/js/161.63f83db7.js",
    "revision": "7129a29bd296f01152a77a2a05b2b8f3"
  },
  {
    "url": "assets/js/162.f98d89cd.js",
    "revision": "1bf43150b9277ea9f55b7c5525a31037"
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
    "url": "assets/js/165.edf09bdf.js",
    "revision": "4c0cddd910b920af174429f5b97fbfea"
  },
  {
    "url": "assets/js/166.c3d25505.js",
    "revision": "3083aee3c791240f3b39f2e3fa0a33e8"
  },
  {
    "url": "assets/js/167.7dfa6986.js",
    "revision": "7b7665ee6d10b993a7cdcef48ff46fb7"
  },
  {
    "url": "assets/js/168.c07e31a7.js",
    "revision": "1b304a2d66dc703c826f01ad66dc5337"
  },
  {
    "url": "assets/js/169.fdebc1dc.js",
    "revision": "c6028ede18fc16101c5959ca256ee4ae"
  },
  {
    "url": "assets/js/17.b9d8a529.js",
    "revision": "9616363ade858840ca3f44d6b41b76ca"
  },
  {
    "url": "assets/js/170.0bec6a35.js",
    "revision": "7f4df48e63ad736474fdd08127307fb8"
  },
  {
    "url": "assets/js/171.71f373e2.js",
    "revision": "bf5f092f6b5a1c734946527bbe0e54a5"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.85a26d7b.js",
    "revision": "b332eff809beea3f3a0bd55a2b7ad491"
  },
  {
    "url": "assets/js/174.2285982b.js",
    "revision": "d24399878dac847a8cec0b408fd9200c"
  },
  {
    "url": "assets/js/175.33d2bf80.js",
    "revision": "7a295678527ddeca1be6f66176091c18"
  },
  {
    "url": "assets/js/176.f8f4a0e0.js",
    "revision": "02c68bb65b279de52bace8e5ce2d7cdb"
  },
  {
    "url": "assets/js/177.40ab1b31.js",
    "revision": "d5b25427277269970e458dd86a10cf67"
  },
  {
    "url": "assets/js/178.ce16a26d.js",
    "revision": "e2da1e8686df3083d564d35542e998f0"
  },
  {
    "url": "assets/js/179.430bf74c.js",
    "revision": "8887e74d8bf36a1bd85421a0c1e8830b"
  },
  {
    "url": "assets/js/18.4b1e4f18.js",
    "revision": "a2765d0e6d51262294126a4125824584"
  },
  {
    "url": "assets/js/180.c64196b7.js",
    "revision": "e9555d44632db0b521c29c248f1d9732"
  },
  {
    "url": "assets/js/181.274bdbd8.js",
    "revision": "c9d19fa0bc161587babec50bd2a2ba8d"
  },
  {
    "url": "assets/js/182.672fbdae.js",
    "revision": "a30e523b78f1a8be8041f8d8f81168d6"
  },
  {
    "url": "assets/js/183.ef14fc42.js",
    "revision": "4368c17c2a203dec65d1abed407f0284"
  },
  {
    "url": "assets/js/184.84b44c44.js",
    "revision": "5128e0b59eb211fcab2bb2b623f91b1f"
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
    "url": "assets/js/188.7355cf74.js",
    "revision": "dbe54f442904d3edbe00a6a621d60d17"
  },
  {
    "url": "assets/js/189.0d00871e.js",
    "revision": "505356183c3e4cdce7efc690b1053815"
  },
  {
    "url": "assets/js/19.a2d80c5e.js",
    "revision": "1b20f20073978070a3c17cb681f60a26"
  },
  {
    "url": "assets/js/190.37603c95.js",
    "revision": "3a1c1af3d00ad341456af88c79e4373f"
  },
  {
    "url": "assets/js/191.4768967d.js",
    "revision": "8e42036ee784309fdc538f5effeb5604"
  },
  {
    "url": "assets/js/192.e8ed7d2b.js",
    "revision": "c6940a36582a16fbe9a62619c5c18b29"
  },
  {
    "url": "assets/js/193.4e77b044.js",
    "revision": "56645c4d23de22070f6a40955d0b6aa8"
  },
  {
    "url": "assets/js/194.f30c715a.js",
    "revision": "b7776e31c3ddebb0505b1b301c42d8ff"
  },
  {
    "url": "assets/js/195.0e977e85.js",
    "revision": "2d02f415cebcbc73a3fccda2b61cfca6"
  },
  {
    "url": "assets/js/196.67a71a60.js",
    "revision": "31a87aeb995e4bddc9476bcab4829072"
  },
  {
    "url": "assets/js/197.df6d596e.js",
    "revision": "e827fa7a831ec6542065cfb9b0628e08"
  },
  {
    "url": "assets/js/198.7d4c1c14.js",
    "revision": "02ef45257e1b1c5d34ff059132609d5f"
  },
  {
    "url": "assets/js/199.b0d32181.js",
    "revision": "1dbca4b4e352b25f54c215858f2d9b0b"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.530ac40a.js",
    "revision": "f61e131c1233a04b7d0103a356551bcd"
  },
  {
    "url": "assets/js/200.c3adc0de.js",
    "revision": "3c894382ca11fe6c7c2cae18c846b59d"
  },
  {
    "url": "assets/js/201.eb89fbad.js",
    "revision": "3b03d00c8fe45578bb859173160f223b"
  },
  {
    "url": "assets/js/202.9cd3502d.js",
    "revision": "1e1d994e2d0218f702367116e8518afd"
  },
  {
    "url": "assets/js/203.fa955d53.js",
    "revision": "6c3bc8eb9cfd72e526b2cb8da1153f15"
  },
  {
    "url": "assets/js/204.81b80b2e.js",
    "revision": "674df3037e046065c0809839aeb78b21"
  },
  {
    "url": "assets/js/205.437c7d3e.js",
    "revision": "0b9c78aedf3e386c4153b7aff4af4b62"
  },
  {
    "url": "assets/js/206.2f11fbe1.js",
    "revision": "c75efe2a8d8e94bab72a2825929b465f"
  },
  {
    "url": "assets/js/207.fad02ed6.js",
    "revision": "8d3cd915bb7759c3e4db0dbb619f1ad5"
  },
  {
    "url": "assets/js/208.d97e56a1.js",
    "revision": "06ad148dc7cf0740a1447b19bf56adc2"
  },
  {
    "url": "assets/js/209.ad79b228.js",
    "revision": "82d9c249a12fe51910a0a6e4a8d95512"
  },
  {
    "url": "assets/js/21.329df3b0.js",
    "revision": "84ee8486d8c489e22eafa7ad5599effa"
  },
  {
    "url": "assets/js/210.f2c9bf0f.js",
    "revision": "5a56bb280660c7a583d9420cdc580c57"
  },
  {
    "url": "assets/js/211.d2d3b8da.js",
    "revision": "562e02b83a87d70024d35e328f64c8a5"
  },
  {
    "url": "assets/js/212.176b598e.js",
    "revision": "0605f06a1b569388d116eedbfade0796"
  },
  {
    "url": "assets/js/213.2cf5b662.js",
    "revision": "5f2ea24f5e8afe912300c690038815b5"
  },
  {
    "url": "assets/js/214.e22710cb.js",
    "revision": "d0c3f03342f8c713bda14b35d8540a2a"
  },
  {
    "url": "assets/js/215.de6a6f2e.js",
    "revision": "fbbf0bcbac227ce2a33d7675dd19769f"
  },
  {
    "url": "assets/js/216.e686a22a.js",
    "revision": "dbab2ec608fb1cac86488a386e925369"
  },
  {
    "url": "assets/js/217.a52446de.js",
    "revision": "9e4990079c9473a63e435a7aa6cd5f58"
  },
  {
    "url": "assets/js/218.e512ff3d.js",
    "revision": "f24168b028fcb4e8c62a960cf0a85681"
  },
  {
    "url": "assets/js/219.cf9fed1e.js",
    "revision": "5ec41bda278f0a229fcd9c4dcd31d6ed"
  },
  {
    "url": "assets/js/22.54e9474d.js",
    "revision": "ef1debb3371d49dba86a7295d3d3b518"
  },
  {
    "url": "assets/js/220.5926463b.js",
    "revision": "cc87bdfc970426ad4df22f5393d5054d"
  },
  {
    "url": "assets/js/221.f5223dde.js",
    "revision": "6363310488153a6ec5b593744dda0823"
  },
  {
    "url": "assets/js/222.0e003cd1.js",
    "revision": "6c65e1017c96dee880694c4a5eff214f"
  },
  {
    "url": "assets/js/223.e39fdbcd.js",
    "revision": "18d294419654dd980b70c8bd31b8f32f"
  },
  {
    "url": "assets/js/224.acde20ef.js",
    "revision": "32575e3d69164a7c25bd3af89dacc5de"
  },
  {
    "url": "assets/js/225.928bf7f6.js",
    "revision": "bbe7fb3f33a6edb389ab5841c09ad0a2"
  },
  {
    "url": "assets/js/226.4d6e1807.js",
    "revision": "628cc9b8db9cdcd84a73bfb65cd21ba4"
  },
  {
    "url": "assets/js/227.9fbd2efc.js",
    "revision": "147dbb3333b175d9cb7f41313c925c8c"
  },
  {
    "url": "assets/js/228.55daf5ea.js",
    "revision": "ba084cd9c084ce81a75d4bc28854ae7c"
  },
  {
    "url": "assets/js/229.1bd93c4c.js",
    "revision": "5758fe887080a983321499726fab75ec"
  },
  {
    "url": "assets/js/23.35bf827d.js",
    "revision": "a6237424347020dc04196dedb49c39b4"
  },
  {
    "url": "assets/js/230.167cafd9.js",
    "revision": "a607888d8eb233904009b88524ff511c"
  },
  {
    "url": "assets/js/231.b2395b09.js",
    "revision": "b2758c9e23aa5fff14a2e3c8acb43e13"
  },
  {
    "url": "assets/js/232.b7923396.js",
    "revision": "3d0178f78cebfbcaf84d4d5fc821835e"
  },
  {
    "url": "assets/js/233.2a9370c3.js",
    "revision": "8cfc3e85240a2a91abd778ccaf2d86de"
  },
  {
    "url": "assets/js/234.c49c1483.js",
    "revision": "2df2c4daed4e5a71d6e54dddb3ebc404"
  },
  {
    "url": "assets/js/235.49c95af5.js",
    "revision": "1fb2b95f1d8b16aaa208d5a894887bcb"
  },
  {
    "url": "assets/js/236.76124afc.js",
    "revision": "05a5183514d3cff688628f0edfd9c617"
  },
  {
    "url": "assets/js/237.ff101761.js",
    "revision": "b1fb797d56129d8ce9a2025a8d69c523"
  },
  {
    "url": "assets/js/238.0c9b6c9c.js",
    "revision": "1d087e6ad42af0a888a8b31a203d54bf"
  },
  {
    "url": "assets/js/239.339d26ff.js",
    "revision": "8f9288595a6e042b89da54d750a81b44"
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
    "url": "assets/js/241.6eb64459.js",
    "revision": "a89029d3325ab1db83b64b6778a5d6c7"
  },
  {
    "url": "assets/js/242.af574f3d.js",
    "revision": "dbf3aa6158e183477e28135454005a34"
  },
  {
    "url": "assets/js/243.849b3523.js",
    "revision": "19cf17180f9960ac94076492cba4bce0"
  },
  {
    "url": "assets/js/244.19707128.js",
    "revision": "d05b6563b793554f64080746a270a571"
  },
  {
    "url": "assets/js/245.5f02437d.js",
    "revision": "693a7e5e92d051c528dd01712ce5dacf"
  },
  {
    "url": "assets/js/246.f273c058.js",
    "revision": "54134739a09184ab0f11c024d7b35bdf"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.601e1f92.js",
    "revision": "30c7088ede21cb9bc6c9c6da007c645f"
  },
  {
    "url": "assets/js/249.ca7ab854.js",
    "revision": "732c20d88f32210715269495a0a2c2ec"
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
    "url": "assets/js/251.3864fb97.js",
    "revision": "37746a532352282a6e63c90b611e3a6d"
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
    "url": "assets/js/254.37727f1f.js",
    "revision": "7a453235fe00b55cb0d90fbcb2c453db"
  },
  {
    "url": "assets/js/255.9bad36c9.js",
    "revision": "eacb2b8eb16a15b079db7e944446274e"
  },
  {
    "url": "assets/js/256.454ecdf0.js",
    "revision": "b1ba6905add18fb2f7baddf32b4c3fd6"
  },
  {
    "url": "assets/js/257.9075bdbb.js",
    "revision": "707e91f5f14f39890ec97fb2ceda756a"
  },
  {
    "url": "assets/js/258.5af58c29.js",
    "revision": "c81800f67e802bdcc09201251514ed0f"
  },
  {
    "url": "assets/js/259.df245564.js",
    "revision": "e2e86ac1fd7f31902d4e5f855e749e9c"
  },
  {
    "url": "assets/js/26.3957fc57.js",
    "revision": "8565308f823b64167cac3c0623628b50"
  },
  {
    "url": "assets/js/260.00f872c6.js",
    "revision": "e090fb64a97b1ed98a69b1b6503a4fc4"
  },
  {
    "url": "assets/js/261.4af814e7.js",
    "revision": "987c51e414b2710ed8c63baa6787cedc"
  },
  {
    "url": "assets/js/262.161b2ab4.js",
    "revision": "faf479999519c0dd4b51998f784c7f40"
  },
  {
    "url": "assets/js/263.b7081fd7.js",
    "revision": "02fc2684f14135323aeaf7ffc13c7135"
  },
  {
    "url": "assets/js/264.cea777ac.js",
    "revision": "d0b95706a617d0d45b1e30877a0deb10"
  },
  {
    "url": "assets/js/265.1ffc4a47.js",
    "revision": "b4d2d88be2e80db1e3963a4ad732d904"
  },
  {
    "url": "assets/js/266.8317f70f.js",
    "revision": "d8c2c36b2cab785cd5ee56c4ba478a52"
  },
  {
    "url": "assets/js/267.b7385204.js",
    "revision": "bdac2c36c83f4b3d1931abac9e73312d"
  },
  {
    "url": "assets/js/268.76db94b0.js",
    "revision": "f8b3e2514d53dbe4b6bc08443ff7a375"
  },
  {
    "url": "assets/js/269.be298ae1.js",
    "revision": "9050b735b56d3a8fff00cc10f3c778b6"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.9994d697.js",
    "revision": "5c38dac4d34fe44d7ef146e8d0cade5a"
  },
  {
    "url": "assets/js/271.a904c3aa.js",
    "revision": "11617a35910bac6e813d6411b1704081"
  },
  {
    "url": "assets/js/272.cb886c06.js",
    "revision": "ced19eb81785d61d6059df27c1edd63b"
  },
  {
    "url": "assets/js/273.7011e607.js",
    "revision": "780c20dc8662c030fd6031ad059ccff2"
  },
  {
    "url": "assets/js/274.097415f2.js",
    "revision": "41154f763a42036daf6f9aca547fc01a"
  },
  {
    "url": "assets/js/275.f7423ad9.js",
    "revision": "d25753b0f7bea89d044dc5db7dc85cf4"
  },
  {
    "url": "assets/js/276.c41c511c.js",
    "revision": "8d75f779818a3751e4b6ab60f742e82e"
  },
  {
    "url": "assets/js/277.4a2de70d.js",
    "revision": "f2b3ab54ece57aa2542d83f666f6c160"
  },
  {
    "url": "assets/js/278.5f221d03.js",
    "revision": "a9a67a3413e8c2eb79b52f827d1cfbd2"
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
    "url": "assets/js/281.45f0ce32.js",
    "revision": "e983600403d0cdf6448e3529dde9a882"
  },
  {
    "url": "assets/js/282.abdad641.js",
    "revision": "2f25e76682b5ac097cd74275d970e620"
  },
  {
    "url": "assets/js/283.c0bfb791.js",
    "revision": "933c8fae5d3968369fe61ab4d70cdf20"
  },
  {
    "url": "assets/js/284.63e080fd.js",
    "revision": "9c036f954476587d991d913ed61d9125"
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
    "url": "assets/js/289.82aa8d9f.js",
    "revision": "a4f89a8b8a17cf4b0d5b4b3b637d10f3"
  },
  {
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.461c5761.js",
    "revision": "4008b9fdbca3f8af6381524a1d9a6b28"
  },
  {
    "url": "assets/js/291.20db0c01.js",
    "revision": "72ad1d643c39e453a11b7990780c1efe"
  },
  {
    "url": "assets/js/292.f7376c1c.js",
    "revision": "e755f6e707bea3d6490d4bf62c87fae5"
  },
  {
    "url": "assets/js/293.f7d2687b.js",
    "revision": "386d70f10b6f4f3b7513b7fe550c2aa4"
  },
  {
    "url": "assets/js/294.6bcf50c8.js",
    "revision": "2b7bd9d99e559323556d7d73f81c08a2"
  },
  {
    "url": "assets/js/295.49ae937a.js",
    "revision": "452a1d4273c6dfd371b6ee65cba145f5"
  },
  {
    "url": "assets/js/296.32eb16e7.js",
    "revision": "fa71057d14c40e06c7f8c921416e1d00"
  },
  {
    "url": "assets/js/297.4ad9a065.js",
    "revision": "88f19db9e13db251e261d29f4f7ae5bc"
  },
  {
    "url": "assets/js/298.3c666ace.js",
    "revision": "6dfe6d0e27c23a67dea4888c39ce28fa"
  },
  {
    "url": "assets/js/299.cb77dbbe.js",
    "revision": "b291476c336ae0354a9eb731be07896c"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.3886f7ea.js",
    "revision": "05f72af041e4202732f68d1f82cbd5cb"
  },
  {
    "url": "assets/js/300.0b9805d1.js",
    "revision": "90028925fd0123b64349df13443ac82d"
  },
  {
    "url": "assets/js/301.99139518.js",
    "revision": "886b15082fbe28a60cad41e5a9848812"
  },
  {
    "url": "assets/js/302.d2d4ad8f.js",
    "revision": "ed58cdc37d53a021f9fab9972856c60e"
  },
  {
    "url": "assets/js/303.dcda3dc8.js",
    "revision": "41f26f8e0a44ee14a1159508020edf14"
  },
  {
    "url": "assets/js/304.83d01f81.js",
    "revision": "23d8c03bc4fe2d41c8200e4fe071d3fa"
  },
  {
    "url": "assets/js/305.3702618e.js",
    "revision": "9926fadd9e3bb3c1ede1f1f2a38492d0"
  },
  {
    "url": "assets/js/306.415ccc37.js",
    "revision": "3bc278293bf50b87e8a9e28eb2ed0ebd"
  },
  {
    "url": "assets/js/307.61bfebca.js",
    "revision": "4953daea03e7916a1fc6fead03bd0573"
  },
  {
    "url": "assets/js/308.2e17ffb3.js",
    "revision": "53d47fa75960045b37f8a50fb33381d3"
  },
  {
    "url": "assets/js/309.637f18d1.js",
    "revision": "700b36f88a718e209b151be9ae3d30b8"
  },
  {
    "url": "assets/js/31.af3bd227.js",
    "revision": "9749fa792b65b9d85ff154077c01085a"
  },
  {
    "url": "assets/js/310.c9693d7e.js",
    "revision": "8805da827b8115a6340e57a9ee9d5043"
  },
  {
    "url": "assets/js/311.515e3a28.js",
    "revision": "d6f6d92af31feed6e01e9239c783117c"
  },
  {
    "url": "assets/js/312.fafb01f7.js",
    "revision": "8ee72f104e6173efe360ad13f58c4e88"
  },
  {
    "url": "assets/js/313.7cc28daf.js",
    "revision": "0ba12b13d3da28635ebd42aa7d7498dc"
  },
  {
    "url": "assets/js/314.bddc9a91.js",
    "revision": "62f20f4e89c2f5802f9165c0fe54449d"
  },
  {
    "url": "assets/js/315.aeac7edb.js",
    "revision": "97b2e447dbee21441ed92115e1ac2092"
  },
  {
    "url": "assets/js/316.a6619468.js",
    "revision": "2d3460b6629ee89a4374590a1ce8cf3a"
  },
  {
    "url": "assets/js/317.732b4fa6.js",
    "revision": "cb80a532669217fdeefbfe3006032b05"
  },
  {
    "url": "assets/js/318.a3138ad7.js",
    "revision": "44dc46feb4e81d63bcacfbcf7ca80b63"
  },
  {
    "url": "assets/js/319.9ba7c98b.js",
    "revision": "1db543be1ed2929302fa19d8cf69631a"
  },
  {
    "url": "assets/js/32.bb0bb275.js",
    "revision": "3c8554b6c3b2c2abd81dad73c770c100"
  },
  {
    "url": "assets/js/320.6beadd5e.js",
    "revision": "4b7554676a1708d419748ffe19e4f34d"
  },
  {
    "url": "assets/js/321.d7cc804c.js",
    "revision": "c36121f51c8cfe746f024b2270953251"
  },
  {
    "url": "assets/js/322.da9058c7.js",
    "revision": "5e9d71abc7eae42c75c54586bf887027"
  },
  {
    "url": "assets/js/323.64c2cf2e.js",
    "revision": "ccdd24c524638bd3f43b672e02b092aa"
  },
  {
    "url": "assets/js/324.c9fcd861.js",
    "revision": "b2c13e865ac9da9c46e813b8efd54827"
  },
  {
    "url": "assets/js/325.e60b44cd.js",
    "revision": "f8c45ca114fa726fa1d8a78452f951aa"
  },
  {
    "url": "assets/js/326.20ab883a.js",
    "revision": "8fe60412e683fbb87eaa48b962c231b1"
  },
  {
    "url": "assets/js/327.b2a3f9a2.js",
    "revision": "d1f3a512382b399ec850c206d90935f2"
  },
  {
    "url": "assets/js/328.120208b7.js",
    "revision": "f79841203e763c8c329ed135f9705a70"
  },
  {
    "url": "assets/js/329.706bcee8.js",
    "revision": "c615351935c67cca4383a67f26a56af1"
  },
  {
    "url": "assets/js/33.692adb6d.js",
    "revision": "337efabafc2e55db4cf4c5df01e257ef"
  },
  {
    "url": "assets/js/330.3856b36d.js",
    "revision": "24af9ab5f27e0f56297a0c29d7d296de"
  },
  {
    "url": "assets/js/331.e3787967.js",
    "revision": "428932cf995046ee0b5ea2d7f1824587"
  },
  {
    "url": "assets/js/332.eb74b28d.js",
    "revision": "df63058437c256d7f1d3649237f4dcb5"
  },
  {
    "url": "assets/js/333.e7881157.js",
    "revision": "214a0e4f637ae4d344cf73ac480acce9"
  },
  {
    "url": "assets/js/334.4b4e1ba5.js",
    "revision": "d6b70766060cde8af5c9df0d6d450508"
  },
  {
    "url": "assets/js/335.6105d3e0.js",
    "revision": "7bfd21dbb1ab5c77223527ae0e156ffe"
  },
  {
    "url": "assets/js/336.74c7bcf7.js",
    "revision": "6bf47c74345771a3282ab62213975298"
  },
  {
    "url": "assets/js/337.e70b7d0a.js",
    "revision": "e9dcbd7abc7bb7a04ae9c38afa46a084"
  },
  {
    "url": "assets/js/338.b0848527.js",
    "revision": "19b277d9c8b692966fe6faf185d15ab4"
  },
  {
    "url": "assets/js/339.a5bcc507.js",
    "revision": "ae5fdc9df8cbfe65019ed064f406ebc9"
  },
  {
    "url": "assets/js/34.7a9a43d4.js",
    "revision": "1f555669ba69bccad562e899993d2415"
  },
  {
    "url": "assets/js/340.0fb34b81.js",
    "revision": "6b8707373b58816fcd7b23fd41b35509"
  },
  {
    "url": "assets/js/341.9f8b0d03.js",
    "revision": "72cc1e8f72bc7393c104e3e244120120"
  },
  {
    "url": "assets/js/342.a47a9d72.js",
    "revision": "1f317b79e502e48411eb79c0e4388ec0"
  },
  {
    "url": "assets/js/343.725847c5.js",
    "revision": "faff05aaad6c9cdae9737122153eaeb4"
  },
  {
    "url": "assets/js/344.0522e8c3.js",
    "revision": "d3dd16c1a3fe079d47e76d827a415947"
  },
  {
    "url": "assets/js/345.19cc50d9.js",
    "revision": "2791ab7790e736f12ad49c09b2181f62"
  },
  {
    "url": "assets/js/346.657ec504.js",
    "revision": "abeff20dd3bb4d7431cff6f5283d6b61"
  },
  {
    "url": "assets/js/347.35947b82.js",
    "revision": "bbcda67c5986f32f894ecfbadea1e5d6"
  },
  {
    "url": "assets/js/348.066cba5f.js",
    "revision": "b3e297d447b5127a8db11faf09df856b"
  },
  {
    "url": "assets/js/349.4d2a01c3.js",
    "revision": "386394ff2f56f8db1623f28e22e70a0a"
  },
  {
    "url": "assets/js/35.1e3d60f4.js",
    "revision": "afe3ec3f9195c998851fd8c443d542d5"
  },
  {
    "url": "assets/js/350.c754761b.js",
    "revision": "b9d9bc078e1c1bba6e18bfb3d0782ceb"
  },
  {
    "url": "assets/js/351.53daf851.js",
    "revision": "c9d3b2979d0283436094ec43d3b5b103"
  },
  {
    "url": "assets/js/352.fcf77151.js",
    "revision": "56efb02db4e3520a12ad71ac39482b72"
  },
  {
    "url": "assets/js/353.3c701dfb.js",
    "revision": "809d84187f954e30d0a211d28bba760b"
  },
  {
    "url": "assets/js/354.48fcc527.js",
    "revision": "8259fafefe8e222a693e9acce355223e"
  },
  {
    "url": "assets/js/355.90de1c53.js",
    "revision": "518c7a941ac7db80be45e25488472003"
  },
  {
    "url": "assets/js/356.e2756c48.js",
    "revision": "c5164df7ece27e2cb1850116b676ff6f"
  },
  {
    "url": "assets/js/357.1dd5f2de.js",
    "revision": "9aa162588f41803a9228943e350b6337"
  },
  {
    "url": "assets/js/358.40c32946.js",
    "revision": "4497ef09de95164ae040b7b98f22b338"
  },
  {
    "url": "assets/js/359.5f910f05.js",
    "revision": "86365b8d14d9dffa354146a983d99190"
  },
  {
    "url": "assets/js/36.da893917.js",
    "revision": "ca8c80456fb05ae45ab63b42cdb5932a"
  },
  {
    "url": "assets/js/360.7602de03.js",
    "revision": "708dbf22dce6204689cc5853b904017d"
  },
  {
    "url": "assets/js/361.189535b6.js",
    "revision": "e9bbd75c10b227c3e6ec0683a608f9fb"
  },
  {
    "url": "assets/js/362.6fb16e16.js",
    "revision": "d02c2a63cb5375d68e6f4fc56553236d"
  },
  {
    "url": "assets/js/363.bfb534b3.js",
    "revision": "667d10e2f1a5af10555c5915becbcb1c"
  },
  {
    "url": "assets/js/364.59f5f587.js",
    "revision": "fd2a2fa3b104a3cc7c71bece0355762e"
  },
  {
    "url": "assets/js/365.a27710d8.js",
    "revision": "c4e48edb377a334be22e48f47a5de168"
  },
  {
    "url": "assets/js/366.133d4696.js",
    "revision": "39bc4df93a4dc2c6421695523c79ed8a"
  },
  {
    "url": "assets/js/367.ddaac428.js",
    "revision": "280e7c67aa8f7b20799fdfb13125db2e"
  },
  {
    "url": "assets/js/368.7e6a79f9.js",
    "revision": "4367b153e575a7826347cd86ae77e9db"
  },
  {
    "url": "assets/js/369.c4859f46.js",
    "revision": "af85b95ad6db7f4f62ff6d4f208fbd69"
  },
  {
    "url": "assets/js/37.f8d4d932.js",
    "revision": "f3c4096d8b88aa32187257a33eff27ef"
  },
  {
    "url": "assets/js/370.db4c1b60.js",
    "revision": "ef3075fc08f42be327f492e34bb92b94"
  },
  {
    "url": "assets/js/371.7a4ae1d9.js",
    "revision": "f14bff962e5c66554e3284ac53a0163a"
  },
  {
    "url": "assets/js/372.602b80ef.js",
    "revision": "4384fa0fc8417e809e5f26fa8fa4e94b"
  },
  {
    "url": "assets/js/373.b1dc1e0d.js",
    "revision": "bed79d33141d3170747d27b73a11df03"
  },
  {
    "url": "assets/js/374.ade4e754.js",
    "revision": "44a11561a8eee346772e4ce517bae9e9"
  },
  {
    "url": "assets/js/375.4f553961.js",
    "revision": "0d3859b94ea9fa9d614c4e0719c972f8"
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
    "url": "assets/js/378.ff7cd8c5.js",
    "revision": "1a3749955592c8770d30a6189a71fa8b"
  },
  {
    "url": "assets/js/379.e79cf6aa.js",
    "revision": "6d74e5076f472f185d527de828e005b2"
  },
  {
    "url": "assets/js/38.6f91c283.js",
    "revision": "6a9c2c9477916190a64b82dde2bbd4f6"
  },
  {
    "url": "assets/js/380.18f6877a.js",
    "revision": "4addc8cfed20e97a6f1436de2d5c3480"
  },
  {
    "url": "assets/js/381.8904f302.js",
    "revision": "ee83119897c282d86b0432d7977b6fc0"
  },
  {
    "url": "assets/js/382.9cc92c7d.js",
    "revision": "fbb4d985cf35ca1dcfe47635c0cf355f"
  },
  {
    "url": "assets/js/383.3eef9f8b.js",
    "revision": "61eb3a0e002e1beb027f6653a4ddb687"
  },
  {
    "url": "assets/js/384.726f9ad8.js",
    "revision": "2ef5222670923cbfdba1b47745f6b9af"
  },
  {
    "url": "assets/js/385.95e4bb23.js",
    "revision": "844dc6f25ad6673be4ae1e1f25f8f014"
  },
  {
    "url": "assets/js/386.aa9c43ee.js",
    "revision": "19cf8ee0bee5be97d93d0de72fb6228e"
  },
  {
    "url": "assets/js/387.845e303f.js",
    "revision": "89759b7d0768ee403129ac4e7783240f"
  },
  {
    "url": "assets/js/388.6a050025.js",
    "revision": "cbeb97adfcfb7e9abb9d0621574dd655"
  },
  {
    "url": "assets/js/389.6853840b.js",
    "revision": "305253fc5d94dec26f8d4a9390194a72"
  },
  {
    "url": "assets/js/39.9ec1676a.js",
    "revision": "5525d3e3c1019cf777603809cb00451d"
  },
  {
    "url": "assets/js/390.1db5367a.js",
    "revision": "e5c52b005396708cc255f25c97068d15"
  },
  {
    "url": "assets/js/391.832d5c73.js",
    "revision": "389e5de6e68c3062dd7fcb0bf313f40c"
  },
  {
    "url": "assets/js/392.3c50827b.js",
    "revision": "d0fa285b40039fca50a817e1864339dd"
  },
  {
    "url": "assets/js/393.42b025eb.js",
    "revision": "03baf09fe92e46d8e01e4baa98264002"
  },
  {
    "url": "assets/js/394.df2268bd.js",
    "revision": "5e21885ba1bfd72ebd60301146681e8a"
  },
  {
    "url": "assets/js/395.8dfebdea.js",
    "revision": "c64a62257d71ee7a95060aa1fa385632"
  },
  {
    "url": "assets/js/396.4b0b2db7.js",
    "revision": "888bbb22e9841b97d90b091985a511e4"
  },
  {
    "url": "assets/js/397.c4ba3d8c.js",
    "revision": "de1af671efac08ce655b3d3d7b58b3db"
  },
  {
    "url": "assets/js/398.6cd77dd5.js",
    "revision": "35db1cae0a1988cd3ed1c5b89e5d6964"
  },
  {
    "url": "assets/js/399.95f7dde5.js",
    "revision": "6819fe640f390ee9f9ae4f7b41313fc8"
  },
  {
    "url": "assets/js/4.a85727f4.js",
    "revision": "bd5f15e972de8a60fa9da59c48ed9d00"
  },
  {
    "url": "assets/js/40.33682a0a.js",
    "revision": "d6d96a3eb077b0b1f986bb8d8ef57933"
  },
  {
    "url": "assets/js/400.d783f7f1.js",
    "revision": "7e10ba4c16e3d5c2b5ae09687cd8f23b"
  },
  {
    "url": "assets/js/401.47d5e7e4.js",
    "revision": "21099366ec8d42a0d8c913ab970f0ae9"
  },
  {
    "url": "assets/js/402.2a1fa520.js",
    "revision": "bca2d48b870e395c32c3070a4abae898"
  },
  {
    "url": "assets/js/403.8607adc3.js",
    "revision": "61b07e2dca346bb0a921974cd4c6f30a"
  },
  {
    "url": "assets/js/404.6f92f515.js",
    "revision": "4eaaade1fe7463e7c8478f9e195ae490"
  },
  {
    "url": "assets/js/405.b667ecca.js",
    "revision": "aa8342910d7d03990ca8cadbced93d92"
  },
  {
    "url": "assets/js/406.e92c2bc3.js",
    "revision": "cc64ea0c0fddd94fc6fc537a7c855425"
  },
  {
    "url": "assets/js/407.62d829b5.js",
    "revision": "2920c7788869118396e20aeac5820587"
  },
  {
    "url": "assets/js/408.aa6eba26.js",
    "revision": "e9f298a4f0887aa6ce779a013324fbcb"
  },
  {
    "url": "assets/js/409.269071bc.js",
    "revision": "b4f1ed50cff9f8c953a57135685eafc9"
  },
  {
    "url": "assets/js/41.33d3a21b.js",
    "revision": "36602f5077e076e4a70cd5bd66172dd2"
  },
  {
    "url": "assets/js/410.c8b7fce1.js",
    "revision": "487c311ee998ff7520cf95027e4214ef"
  },
  {
    "url": "assets/js/411.52a1598c.js",
    "revision": "296c3126934ffc2b37f37320f9c908bc"
  },
  {
    "url": "assets/js/42.f149b4a3.js",
    "revision": "b07d82757fdea03ade4a03210c2e6fa4"
  },
  {
    "url": "assets/js/43.40b922ca.js",
    "revision": "ce59031cb5489b3615abda9279a4fbd1"
  },
  {
    "url": "assets/js/44.aa8365b9.js",
    "revision": "eccfa476b8834c7c62b9199d4f531ce8"
  },
  {
    "url": "assets/js/45.4a4da04a.js",
    "revision": "43c2ee46d571a3cb16c220718659fe4b"
  },
  {
    "url": "assets/js/46.c932728e.js",
    "revision": "fa0ce30be40cfb9765170f0d424b0575"
  },
  {
    "url": "assets/js/47.72bace1a.js",
    "revision": "d6f6b768c80597a44a1f36fcb7e23405"
  },
  {
    "url": "assets/js/48.fbf80316.js",
    "revision": "c75fbb3ba7a8f4d458141f6b998d9e26"
  },
  {
    "url": "assets/js/49.76bc8496.js",
    "revision": "7de465d59f01bd8adde65ee23ba28905"
  },
  {
    "url": "assets/js/5.34a45051.js",
    "revision": "bd7b1d4aba8586b8cd2f07e9f38e5abe"
  },
  {
    "url": "assets/js/50.802fa0da.js",
    "revision": "8f588d2aa30f7ef25b0c8ddec37d49e6"
  },
  {
    "url": "assets/js/51.a55d3226.js",
    "revision": "32de2f08a60045575d741ffe34ef2cd2"
  },
  {
    "url": "assets/js/52.cd60e7b6.js",
    "revision": "1c6d74f0f445c8c50ff0927c52ab9b28"
  },
  {
    "url": "assets/js/53.2db89cf0.js",
    "revision": "7bf5a51ecc13de7aafcff4930eb270fa"
  },
  {
    "url": "assets/js/54.7cc21f55.js",
    "revision": "d775abc987ded351ae9b27f110682497"
  },
  {
    "url": "assets/js/55.9718b002.js",
    "revision": "cd39d56942b8d87655351de2784296b2"
  },
  {
    "url": "assets/js/56.f4749c75.js",
    "revision": "0eea6e1bc282829f93f9fd37cb7780fa"
  },
  {
    "url": "assets/js/57.4eba7d2d.js",
    "revision": "38bf2b480baa1fdc0a5bbeb4b72e6f88"
  },
  {
    "url": "assets/js/58.8c6c9e50.js",
    "revision": "604b252bc6fc46f92320e57e54c1f437"
  },
  {
    "url": "assets/js/59.3ce0d751.js",
    "revision": "1a91172d53fc93dbb2d899f2bd3b70b7"
  },
  {
    "url": "assets/js/60.9e086168.js",
    "revision": "aa13cad345f6d32257971b645bb6b311"
  },
  {
    "url": "assets/js/61.ef14129d.js",
    "revision": "f7365170a24532affffec2c50d514209"
  },
  {
    "url": "assets/js/62.b9a38620.js",
    "revision": "d2ee3234c063eb0f4951ee881ad15446"
  },
  {
    "url": "assets/js/63.22876f0b.js",
    "revision": "f129e55d2a9ead3839ecff01a1c755e7"
  },
  {
    "url": "assets/js/64.c443283f.js",
    "revision": "f6e83d23590f61081d82ca77023d03e5"
  },
  {
    "url": "assets/js/65.0d23fa09.js",
    "revision": "4d520d1fa56ce4d6bdfeb1d767cbbe03"
  },
  {
    "url": "assets/js/66.3f480800.js",
    "revision": "d24d1d1de6b24c2052a4ac84e4b27b55"
  },
  {
    "url": "assets/js/67.b7662403.js",
    "revision": "bcbb71e14b254b81f68dd3814b9afdf0"
  },
  {
    "url": "assets/js/68.183b9d87.js",
    "revision": "232a13fd016dd697e6bc87f59dc00dbf"
  },
  {
    "url": "assets/js/69.3496a6eb.js",
    "revision": "9807cae75c49a146333e893b9b6ab680"
  },
  {
    "url": "assets/js/70.60548a44.js",
    "revision": "565bdeec84de1e18b28b31bcbf2c78e7"
  },
  {
    "url": "assets/js/71.4ef49233.js",
    "revision": "4b62af1393a5c3fcfc405d5f64a53599"
  },
  {
    "url": "assets/js/72.b4427d96.js",
    "revision": "6000f13b743ee4c40237def02ffa30e9"
  },
  {
    "url": "assets/js/73.d438693e.js",
    "revision": "be3a742cd1d014bce509cc848d823dd6"
  },
  {
    "url": "assets/js/74.dc79d991.js",
    "revision": "0b0725b94a5c514ea3cd0d2e51187c3b"
  },
  {
    "url": "assets/js/75.3ae6a6e1.js",
    "revision": "0d5e7e720147ba7c882c9991aaa54fdd"
  },
  {
    "url": "assets/js/76.e96dd6f4.js",
    "revision": "b2ac26ad69b656c916a4f9e01a0d5c10"
  },
  {
    "url": "assets/js/77.75ab0b0c.js",
    "revision": "7d5f275f90c083db10fe7a4832109c70"
  },
  {
    "url": "assets/js/78.29a9e846.js",
    "revision": "b7f155032ab7f180b1d2772a0ebe1a56"
  },
  {
    "url": "assets/js/79.3851e858.js",
    "revision": "8f7cbbc0d9ca9ca86e8bce48ec1b6a88"
  },
  {
    "url": "assets/js/8.084d3998.js",
    "revision": "1b4aeaef7517342317360e0307bbb580"
  },
  {
    "url": "assets/js/80.d3ed4496.js",
    "revision": "1cfe74704a247cc470bb964427a010f3"
  },
  {
    "url": "assets/js/81.7c54b612.js",
    "revision": "cf0d97dd7f1b016c8fef5bfc7b8537c6"
  },
  {
    "url": "assets/js/82.694472ce.js",
    "revision": "c8e9b9adc4cd41d196117e6d54134ff3"
  },
  {
    "url": "assets/js/83.52d10d46.js",
    "revision": "4c023765d3fc451c5c8263adf1b87258"
  },
  {
    "url": "assets/js/84.c90f67bc.js",
    "revision": "cd49d7c56177e0c636831a8e03e4b0f4"
  },
  {
    "url": "assets/js/85.915a610f.js",
    "revision": "119669c25bb6df3bab759f25ae1165ad"
  },
  {
    "url": "assets/js/86.ca560cc3.js",
    "revision": "a7eb2aa5db825ffd671b5aa839f21f63"
  },
  {
    "url": "assets/js/87.0b2a4574.js",
    "revision": "1803a0d2a3451949ca0dd16a319d3459"
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
    "url": "assets/js/9.9e510e38.js",
    "revision": "04232ea592c534391d1a2ae90742bc0c"
  },
  {
    "url": "assets/js/90.0aa2173f.js",
    "revision": "542ed0aa75e84cc7efaf5e6835a392c3"
  },
  {
    "url": "assets/js/91.d9720dcf.js",
    "revision": "e19b4e0a7cf5be4291f6a4de032c68b2"
  },
  {
    "url": "assets/js/92.954485b0.js",
    "revision": "42669ac3ed7a08355b861b13196dc4f3"
  },
  {
    "url": "assets/js/93.1679a186.js",
    "revision": "9f4cdb1a325ab3405908e8ead543e0fe"
  },
  {
    "url": "assets/js/94.45d530f6.js",
    "revision": "df94e4700fc8c6bf8d38f541ac43c01c"
  },
  {
    "url": "assets/js/95.5b81cd81.js",
    "revision": "62af093b7b71ccb2f113e080c59dd8e0"
  },
  {
    "url": "assets/js/96.d50a233d.js",
    "revision": "a1ee85fbe1bb82ea64607f82f8a60993"
  },
  {
    "url": "assets/js/97.554ada3c.js",
    "revision": "62fbc07752678e822b70a7ff00a43dcb"
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
    "url": "assets/js/app.65d00b33.js",
    "revision": "6ddeabb7de9b802775deb2939f49bdf2"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "64a17a52f96fea4703347e780958d58c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "e59329efb2ba5575cfb32c0603f1a83d"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "6898980c2681c546aee47376836bfce0"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "5036e3c2a7a7b1f5d9761ea2d392e634"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "4809fa80b805b4776a4dd24036985207"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "639c8971efdfe144da1ae54ae2ae2369"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "413eae69419478e9d3df74aca78fdd17"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "2d456dc66357b78fea17148f6f46629f"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "e2416dbafc87396bbd80ce6656a7d389"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5a77bb66365662c96db6863f4d12ecd6"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "372b7e6a95d2f073ccc3936571780646"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "3b3cfe6b391b47f07eac6e9d3a48edda"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "90814a6872413e51781ec6848afc6a20"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "bc91351cc77c88f4b8b9a8d9cde9b66a"
  },
  {
    "url": "master/api/index.html",
    "revision": "01672a77413f725f7be70494b2e2738e"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "702c831d882419fa17586b3220ee3370"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "cfbe7e133dea72269a915e867a20769f"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "45baf735c302018b4c7ca9a59cc8a592"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "0553a8cce54dd8c8467a9e780f933b85"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "aaa35498c2cf615575c5751d8efc30ff"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "a4558d87db4c40d6e1bece71b9278d36"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "55639bca10599ae7a495130ea69e2918"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "d32e34deb8256e78209cf3fd143dde51"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "d4da6dc7556cef276a76560569578a9c"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "b31c7a16ef678c966646014fcee04265"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "74396e64290e6f4826fc3e0bfdd3a42c"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "ad6b20cd2f9c3bb1799dfdea8875776a"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "2091e038c3e31286762e8f4eafc8bdeb"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "cbf61b8742b6c9b8d7bb410a3ff501cc"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "147bc8e783a41c3d08508ae2d1f1e8cf"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "1f97975090fc1ff32bbca1e08c9f8790"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "36cae36a363a69196c538351df14322e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "85329a54d04a48b8176d79e148ddb19d"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "2ee3eac05381897e144d9f390ba54827"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "e511cdaff258a09a4524b4118f0268b3"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "e761e79644e8ca94c2bb07ea0a391771"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "3e6a31c4901c0763d52becc151c2cc05"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "ae8a10587f2ea47fa4fea3f8d54ba387"
  },
  {
    "url": "master/packages/index.html",
    "revision": "73189e97d7f0ef105b6b678e60dc833d"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "8ef3b39dc9e4de9c146747af376fcae1"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "c299b5d139581ae9c09cb3e3e05cf3d6"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "6f03766f5d41c626a1fd45b9e45025f6"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "027203e563bb4a2cb05fd256a883baa8"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "fc2b8d241ae307e74c5f579a2727b32b"
  },
  {
    "url": "master/packages/views.html",
    "revision": "11e47a4d44904ae3b8024a15e9d03f83"
  },
  {
    "url": "master/performance/index.html",
    "revision": "55ea5a59d5b213b78b62ef76cd332325"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "22a5c3ef451247ddc2eb08121f7d0b88"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "6f214be4b2a0143c450601bd6c79fe25"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "95339f2247392d42c0036f2974201c11"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "0cd4c1ee87f536f31eaab506d9ce358c"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "47b3bab1ac810b3b0490e6c5f0c1f5c0"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "190dcc9c9f892dc81becfcee70d9d597"
  },
  {
    "url": "master/themes/index.html",
    "revision": "90d7488bb22fdc40f1c718dc19d00092"
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
