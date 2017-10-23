
import * as ShopifyBuy from "shopify-buy"

export interface ShopifyClient {

	fetchQueryProducts(query: Partial<{
		collection_id: number
		tag: string[]
		product_ids: number[]
		page: number
		limit: number
		handle: string
		update_at_min: string
		sort_by: string
	}>): Promise<Product[]>
}

export interface ShopifyConfig {
	accessToken: string
	domain: string
	appId: number
}

export const createShopifyClient = (config: ShopifyConfig): ShopifyClient => ShopifyBuy.buildClient(config)

export interface Image {
	id: number
	created_at: string
	position: number
	product_id: number
	src: string
	updated_at: string
	variant_ids: number[]
}

export interface Product {
	id: string
	description: string
	images: Image[]
	options: any[]
	selectedVariant: any
	selectedVariantImage: any
	selections: string[]
	title: string
	variants: any[]
}
