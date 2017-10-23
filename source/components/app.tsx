
import * as React from "react"
import * as ReactDOM from "react-dom"

import {observable} from "mobx"
import {observer} from "mobx-react"

import {ShopStore} from "../shop"
import Counter, {CounterStore} from "./counter"

export interface AppProps {
	shop: ShopStore
	counter: CounterStore
}

@observer
export default class App extends React.Component<AppProps> {
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
