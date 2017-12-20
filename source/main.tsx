
import {h, render} from "preact"
import Storefront, {StorefrontStore, createShopifyClient} from "./components/storefront"

const store = new StorefrontStore({
	shopify: createShopifyClient({
		storefrontAccessToken: "3b6930ff502fbd621678ea7f1d95d93b",
		domain: "dev-bakery.myshopify.com",
		appId: 6
	})
})

const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQyNDQ0MTQ3OQ=="

const initializeStore = async() => {
	const products = store.products = await store.fetchProducts({collectionId})
	console.log({products})
}

const storefront = <Storefront {...{store}}/>

render(storefront, document.querySelector("#storefront"))
initializeStore().catch(error => console.error("storefront error", error))
