
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {observable, computed, action} from "mobx"
import {buildClient, Config, Client, Product, Collection} from "shopify-buy"

import ProductDisplay, {ProductDisplayStore} from "./product-display"

export {Config as ShopifyConfig}

export const createShopifyClient = (config: Config) => buildClient(config)

export class StorefrontStore {
	shopify: Client

	@observable products: Product[] = []

	@computed get productDisplays() {
		return [...this.products].map(product => new ProductDisplayStore({product}))
	}

	constructor({shopify}: {shopify: Client}) {
		this.shopify = shopify
	}

	@action
	async fetchAllCollections(): Promise<Collection[]> {
		const {shopify} = this
		const collections = await shopify.collection.fetchAllWithProducts()
		return collections
	}

	@action
	async fetchProducts({collectionId}: {collectionId?: string} = {}): Promise<Product[]> {
		const {shopify} = this

		if (collectionId) {
			const collection = await shopify.collection.fetchWithProducts(collectionId.toString())
			return collection.products
		}
		else {
			return await shopify.product.fetchAll()
		}
	}
}

@observer
export default class Storefront extends Component<{store: StorefrontStore}, {}> {

	render() {
		const {store} = this.props
		const productDisplayStores = [...store.productDisplays]
		const numberOfProducts = productDisplayStores ? productDisplayStores.length : 0

		return (
			<div className="storefront">
				{numberOfProducts ? productDisplayStores.map(store =>
					<ProductDisplay {...{store}}/>
				) : null}
			</div>
		)
	}
}
