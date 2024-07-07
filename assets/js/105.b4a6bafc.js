(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{453:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[t._v("#")]),t._v(" Addresses")]),t._v(" "),s("p",[t._v("In this section, we will use all the addresses' API. We will check the creation of address, fetching of addresses, and updation of address.")]),t._v(" "),s("h2",{attrs:{id:"create-a-new-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-address"}},[t._v("#")]),t._v(" Create a new address")]),t._v(" "),s("p",[t._v("To add an address, you have to use the "),s("code",[t._v("addresses/create")]),t._v(" endpoint url and have to pass the address fields in the request payload. This "),s("code",[t._v("addresses/create")]),t._v(" API call resource will create a new address of the customer, only if that customer has logged in the store.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("POST <host>/api/addresses/create")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Info")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("address1")]),t._v(" "),s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("Array")])]),t._v(" "),s("tr",[s("td",[t._v("city")]),t._v(" "),s("td",[t._v("City")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("country")]),t._v(" "),s("td",[t._v("Country")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("country_name")]),t._v(" "),s("td",[t._v("Country Name")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("Phone")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("postcode")]),t._v(" "),s("td",[t._v("Post Code")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("state")]),t._v(" "),s("td",[t._v("State")]),t._v(" "),s("td",[t._v("String")])])])])])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Let's take an example of creating an address,")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("POST http(s)://example.com/api/addresses/create")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("address1")]),t._v(" "),s("td",[t._v("['Clock Tower']")])]),t._v(" "),s("tr",[s("td",[t._v("city")]),t._v(" "),s("td",[t._v("Dehradun")])]),t._v(" "),s("tr",[s("td",[t._v("country")]),t._v(" "),s("td",[t._v("IN")])]),t._v(" "),s("tr",[s("td",[t._v("country_name")]),t._v(" "),s("td",[t._v("India")])]),t._v(" "),s("tr",[s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("0123456798")])]),t._v(" "),s("tr",[s("td",[t._v("postcode")]),t._v(" "),s("td",[t._v("248001")])]),t._v(" "),s("tr",[s("td",[t._v("state")]),t._v(" "),s("td",[t._v("UT")])])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clock Tower"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dehradun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0123456798"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"248001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Address has been created successfully."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This contains the data you send to the api.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"get-all-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-all-addresses"}},[t._v("#")]),t._v(" Get all addresses")]),t._v(" "),s("p",[t._v("To get all the address of a customer, that customer must be logged in to the store. You can achieve this job by using "),s("code",[t._v("addresses")]),t._v(" API call resource.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET <host>/api/addresses")])])])]),t._v(" "),s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Let's take an example,")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/api/addresses")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dehradun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("248001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01345679"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Noida"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201301")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"012345679"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"get-address-by-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-address-by-id"}},[t._v("#")]),t._v(" Get address by id")]),t._v(" "),s("p",[t._v("To get the customer's specific address, you have to pass an "),s("code",[t._v("address_id")]),t._v(" as a request payload like "),s("code",[t._v("addresses/{address_id}")]),t._v(" in API URL. By using this resource and request payload, you will get only a single object under the "),s("code",[t._v("data")]),t._v(" object in response.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET <host>/api/addresses/{address_id}")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Info")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("address_id")]),t._v(" "),s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("Number")])])])])])]),t._v(" "),s("h3",{attrs:{id:"examples-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Let's take an example,")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/api/addresses/1")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Block H-ARP Park, Sector 63 "')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Noida"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201301")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0132456789"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Kolkata"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Kolkata"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"update-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-address"}},[t._v("#")]),t._v(" Update address")]),t._v(" "),s("p",[t._v("To update the customer's specific address, you have to pass an "),s("code",[t._v("address_id")]),t._v(" as a request payload like "),s("code",[t._v("addresses/{address_id}")]),t._v(" in API URL.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("PUT <host>/api/addresses/1")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Info")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("address1")]),t._v(" "),s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("Array")])]),t._v(" "),s("tr",[s("td",[t._v("city")]),t._v(" "),s("td",[t._v("City")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("country")]),t._v(" "),s("td",[t._v("Country")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("country_name")]),t._v(" "),s("td",[t._v("Country Name")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("Phone")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("postcode")]),t._v(" "),s("td",[t._v("Post Code")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("state")]),t._v(" "),s("td",[t._v("State")]),t._v(" "),s("td",[t._v("String")])])])])])]),t._v(" "),s("h3",{attrs:{id:"examples-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("PUT http(s)://example.com/api/addresses/1")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clock Tower"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"New Delhi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9876543210"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"248001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DL"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your address has been updated successfully."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Address' detail.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);