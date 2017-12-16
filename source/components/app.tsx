
import {observable} from "mobx"
import {h, Component} from "preact"
import {observer} from "mobx-preact"

import {ShopStore} from "../shop"
import Counter, {CounterStore} from "./counter"

export interface AppProps {
	shop: ShopStore
	counter: CounterStore
}

@observer
export default class App extends Component<AppProps, {}> {
	render() {
		const {shop, counter} = this.props
		return (
			<div className="app">
				<h1>dev-bakery</h1>
				<hr/>
				<Counter store={counter}/>
			</div>
		)
	}
}
