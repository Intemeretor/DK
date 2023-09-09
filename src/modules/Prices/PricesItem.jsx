import { useState } from "react"

export default function PricesItem(props) {
	const [activePrice, setActivePrice] = useState(false);

	function changeActive() {
		setActivePrice(prev => !prev);
	}

	let works = props.works.map((item, index) => {
		return (
			<li key={index} className="pricelist__work">
				<span className="pricelist__servicename">{item.name}</span>
				<span className="pricelist__price">{item.price}</span>
				<span className="pricelist__currency">{item.currency}</span>
			</li>
		)
	})
	return (
		<li className={`prices__item ${activePrice ? 'active' : ''}`}  >
			<div className="prices__body">
				<div className="prices__item-name" onClick={changeActive}>
					<span className="prices__num">{props.num}</span>
					<span className="prices__label">{props.title}</span>
					<span className="prices__symbol"></span>
				</div>
				<div className="prices__info">
					<ul className="prices__pricelist pricelist">
						{works}
					</ul>
				</div>
			</div>
		</li >
	)
}