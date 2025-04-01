(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{476:function(e,t,a){"use strict";a.r(t);var s=a(10),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrade-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[e._v("#")]),e._v(" Upgrade Guide")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#upgrade-steps"}},[e._v("Upgrade Steps")])]),t("li",[t("a",{attrs:{href:"#new-changes"}},[e._v("New Changes")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"upgrade-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-steps"}},[e._v("#")]),e._v(" Upgrade Steps")]),e._v(" "),t("p",[e._v("To upgrade your current version to the latest version of Bagisto, follow these steps:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Download the latest version of Bagisto from one of the following links:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://bagisto.com/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download From Official Bagisto Site"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/bagisto/bagisto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download From GitHub"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("p",[e._v("Extract the downloaded Bagisto zip file to the desired deployment location.")])]),e._v(" "),t("li",[t("p",[e._v("Open the terminal and navigate to the root folder of the extracted Bagisto folder.")])]),e._v(" "),t("li",[t("p",[e._v("Run the following command in the terminal:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" create-project\n")])])]),t("p",[e._v("This command will install the necessary dependencies for the latest version of Bagisto.")])]),e._v(" "),t("li",[t("p",[e._v("Open the "),t("strong",[t("code",[e._v(".env")])]),e._v(" file in your project's root folder. Provide the database credentials of your old project, which you want to upgrade using Bagisto.")])]),e._v(" "),t("li",[t("p",[e._v("Run one of the following commands to cache the new changes:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php artisan optimize\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- OR --")]),e._v("\n\nphp artisan config:cache\n")])])]),t("p",[e._v("These commands will cache the configuration files and optimize the project.")])]),e._v(" "),t("li",[t("p",[e._v("Now, your project is ready to run the migration command. Execute the following command in the terminal:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php artisan migrate\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Be cautious when using the seeder command as it may reset settings and categories. Add default settings manually if necessary.")])])]),e._v(" "),t("li",[t("p",[e._v("Create a symbolic link to link public assets to the storage folder by running the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php artisan storage:link\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Copy the contents of the previous version's folder (e.g., "),t("strong",[t("code",[e._v("old-project/storage/app/public")])]),e._v(") to the corresponding folder in the latest version (e.g., "),t("strong",[t("code",[e._v("new-project/storage/app/public")])]),e._v(").")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("If your existing project depends on local storage, has changed paths, or requires previous logs, ensure to include those as well.")])])]),e._v(" "),t("li",[t("p",[e._v("Once the copying is complete, publish the new files by running the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php artisan vendor:publish "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--all")]),e._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Avoid using the "),t("strong",[t("code",[e._v("--force")])]),e._v(" flag, as it will reset all your views. Only use it if you understand the consequences.")])])]),e._v(" "),t("li",[t("p",[e._v("Congratulations! Your project is now upgraded to the latest version of Bagisto. However, keep in mind that if you have made significant customizations, ensure compatibility with the latest version.")])])]),e._v(" "),t("h2",{attrs:{id:"new-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-changes"}},[e._v("#")]),e._v(" New Changes")]),e._v(" "),t("p",[e._v("The following changes have been implemented in Bagisto from version 1.4.5 to 1.5.1:")]),e._v(" "),t("ul",[t("li",[e._v("Implemented Elasticsearch for improved search functionality.")]),e._v(" "),t("li",[e._v("Added a count of selected products in Datagrid. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7437",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Changed the appearance of checkboxes in dark mode. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7304",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Modified routes in Packages. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7345",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Removed Triggers feature. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7334",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Consistent mail configuration as per Laravel standards. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7509",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Removed REST API and JWT package related dependencies. ("),t("a",{attrs:{href:"https://github.com/bagisto/bagisto/pull/7546",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")")])])])}),[],!1,null,null,null);t.default=o.exports}}]);