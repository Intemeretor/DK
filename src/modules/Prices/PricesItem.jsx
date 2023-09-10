import { useState } from "react"

export default function PricesItem({ updateItems, active, num, title, works, id } = props) {


	let worksList = works.map((item, index) => {
		return (
			<li key={index} className="pricelist__work">
				<span className="pricelist__servicename">{item.name}</span>
				<span className="pricelist__price">{item.price}</span>
				<span className="pricelist__currency">{item.currency}</span>
			</li>
		)
	})

	return (
		<li className={`prices__item ${active ? 'active' : ''}`}  >
			<div className="prices__body">
				<div className="prices__item-name" onClick={() => updateItems(id)}>
					<span className="prices__num">{num}</span>
					<span className="prices__label">{title}</span>
					<span className="prices__symbol"></span>
				</div>
				<div className="prices__info">
					<ul className="prices__pricelist pricelist">
						{worksList}
					</ul>
				</div>
			</div>
		</li >
	)
}