(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{476:function(e,t,a){"use strict";a.r(t);var n=a(10),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"real-time-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#real-time-notification"}},[e._v("#")]),e._v(" Real-Time Notification")]),e._v(" "),t("p",[e._v("To enable real-time notifications in the updated admin theme, you need to configure your project by following these steps:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create an account on "),t("a",{attrs:{href:"https://dashboard.pusher.com/accounts/sign_up?_ga=2.266851022.1754006062.1647430118-1332525715.1647430118&_gl=1*jiq2no*_ga*MTMzMjUyNTcxNS4xNjQ3NDMwMTE4*_ga_V7TRZJDKDQ*MTY0NzQzMDExOC4xLjAuMTY0NzQzMDE0MC4w",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pusher"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Once you have created an account, create a Channels app for your application. In the app settings, go to the "),t("strong",[t("code",[e._v('"App Keys"')])]),e._v(" menu and copy the app ID, key, secret, and cluster.")])]),e._v(" "),t("li",[t("p",[e._v("Open your application's "),t("strong",[t("code",[e._v(".env")])]),e._v(" file and replace the respective values with the credentials generated by Pusher.")])]),e._v(" "),t("li",[t("p",[e._v("After updating the "),t("strong",[t("code",[e._v(".env")])]),e._v(" file, run the following command in your terminal to start the queue listener:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("php artisan queue:listen --queue=broadcastable\n")])])]),t("p",[e._v("This command ensures that the queue broadcasts are processed, making your application more responsive and providing a real-time experience.")]),e._v(" "),t("p",[e._v("Note: Make sure you have set up the required configurations for queues and broadcasting in your Laravel application.")])])]),e._v(" "),t("p",[e._v("By implementing real-time notifications, whenever an order is created or updated, you will receive immediate updates in the admin notification menu without having to wait for the process to complete or refresh the page. This enhances the responsiveness and user experience of your application.")])])}),[],!1,null,null,null);t.default=o.exports}}]);