
import {Product} from "shopify-buy"
import {h, Component} from "preact"
import {observer} from "mobx-preact"
import {observable, action} from "mobx"

export class SidecartStore {
	@observable products: Product[] = []
}

@observer
export default class Sidecart extends Component<{store: SidecartStore}, {}> {

	private readonly handleCheckout = (event: Event) => {
		console.log("checkout button triggered")
	}

	render() {
		return (
			<aside class="sidecart">
				<h1>Cart</h1>

				<table class="sidecart-listing">

					<tbody class="sidecart-items">
						<tr>
							<th>Item</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Remove</th>
						</tr>
						<tr>
							<td>Item One</td>
							<td>45</td>
							<td>1</td>
							<td><a href="" class="sidecart-x">x</a></td>
						</tr>
						<tr>
							<td>Item Two</td>
							<td>55</td>
							<td>1</td>
							<td><a href="" class="sidecart-x">x</a></td>
						</tr>
					</tbody>

					<tbody class="sidecart-totals">
						<tr class="sidecart-shipping">
							<th>Shipping/handling</th>
							<td>$--</td>
						</tr>
						<tr class="sidecart-tax">
							<th>Tax</th>
							<td>$-- CAD</td>
						</tr>
						<tr class="sidecart-grandtotal">
							<th>Total</th>
							<td>$-- CAD</td>
						</tr>
					</tbody>
				</table>

				<a href="" class="sidecart-checkout" onClick={this.handleCheckout}></a>
			</aside>
		)
	}
}
