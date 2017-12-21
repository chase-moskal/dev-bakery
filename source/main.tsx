
//
// DEV BAKERY
// MAIN SCRIPT
//

import {h, render} from "preact"
import Sidecart, {SidecartStore} from "./components/sidecart"
import Storefront, {StorefrontStore, createShopifyClient} from "./components/storefront"

//
// STOREFRONT COMPONENT
//

// create mobx store object for the storefront component
const storefrontStore = new StorefrontStore({
	shopify: createShopifyClient({
		storefrontAccessToken: "3b6930ff502fbd621678ea7f1d95d93b",
		domain: "dev-bakery.myshopify.com",
		appId: 6
	})
})

// render the storefront view with the mobx store
render(<Storefront store={storefrontStore}/>, document.querySelector("#storefront"))

;(async function initStorefrontProducts() {
	const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="
	const products = storefrontStore.products = await storefrontStore.fetchProducts({collectionId})
	console.log({products})
})().catch(error => console.error("storefront error", error))

//
// SIDECART STORE
//

const sidecartStore = new SidecartStore()
const sidecart = <Sidecart store={sidecartStore}/>
