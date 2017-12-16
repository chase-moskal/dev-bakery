
import {h, render} from "preact"

import App from "./components/app"
import {CounterStore} from "./components/counter"
import {ShopStore, createShopifyClient} from "./shop"

const shop = new ShopStore({
	shopify: createShopifyClient({
		accessToken: "3b6930ff502fbd621678ea7f1d95d93b",
		domain: "dev-bakery.myshopify.com",
		appId: 6
	})
})

const counter = new CounterStore()

const app = <App {...{shop, counter}}/>
render(app, document.querySelector("#app"))

shop.fetch({collectionId: 424441479})
	.catch(error => console.error(error))
