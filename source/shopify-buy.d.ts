
declare module "shopify-buy" {

	export interface Config {
		domain: string
		storefrontAccessToken: string
		appId?: number
	}

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

	export interface Collection {
		products: any[]
	}

	export interface Checkout {
		addLineItems(checkoutId: string, lineItems: any[]): Promise<Checkout>
		updateLineItems(checkoutId: string, lineItems: any[]): Promise<Checkout>
		fetch(checkoutId: string): Promise<Checkout>
	}

	export interface Query {
		first?: number
		sortKey?: string
		query?: string
		reverse?: true
	}

	export class Client {
		constructor(config: Config)

		product: {
			fetch(productId: string): Promise<Product>
			fetchAll(): Promise<Product[]>
			fetchQuery(query: Query): Promise<Product[]>
		}

		collection: {
			fetchAllWithProducts(): Promise<Collection[]>
			fetchWithProducts(collectionId: string): Promise<Collection>
		}

		checkout: {
			create(): Promise<Checkout>
		}
	}

	export function buildClient(config: Config): Client
}
