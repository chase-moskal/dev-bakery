
import {observable, computed, autorun} from "mobx"
import {buildClient, Config, Client, Product} from "shopify-buy"

export const createShopifyClient = (config: Config) => buildClient(config)

export interface ShopStoreSettings {
	shopify: Client
}

export default class ShopStore {
	private readonly shopify: Client

	@observable private products: Product[] = []

	constructor({shopify}: ShopStoreSettings) {
		this.shopify = shopify
		autorun(() => console.log("products:", [...this.products]))
	}

	async fetchAllProducts(): Promise<void> {
		this.products = await this.shopify.product.fetchAll()
	}
}
