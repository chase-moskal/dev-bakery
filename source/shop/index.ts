
import {observable, computed, autorun} from "mobx"
import {ShopifyClient, Product} from "./shopify"

export {createShopifyClient} from "./shopify"

export interface ShopStoreSettings {
	shopify: ShopifyClient
}

export class ShopStore {
	private readonly shopify: ShopifyClient

	@observable private products: Product[] = []

	constructor({shopify}: ShopStoreSettings) {
		this.shopify = shopify
		autorun(() => console.log("products:", [...this.products]))
	}

	async fetch({collectionId}: {collectionId: number}): Promise<void> {
		this.products = await this.shopify.fetchQueryProducts({collection_id: collectionId})
	}
}
