
import {Product} from "shopify-buy"
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {observable, action} from "mobx"

export class ProductDisplayStore {
	product: Product

	constructor({product}: {product: Product}) {
		this.product = product
	}
}

export default observer(({store}: {store: ProductDisplayStore}) => (
	<section class="product-display">

		<h1>{store.product.title} — ${store.product.variants[0].price}</h1>
	
		<figure class="product-display-figure">
			<img alt="" src={
				store.product.images && store.product.images.length
					? store.product.images[0].src
					: null
			}/>
		</figure>
	</section>
))
