import data from './pricesData';
import PricesItem from './PricesItem';
import './Prices.scss';
import { useState } from 'react';

export default function Prices() {
	const [activeItem, setActiveItem] = useState();
	const [items, setItems] = useState(data);
	function updateItems(currentId) {
		setItems(prevItems => {
			const newItems = [];
			for (let i = 0; i < prevItems.length; i++) {
				const currentItem = prevItems[i];
				if (currentItem.id == currentId) {
					if (currentItem.active == true) {
						newItems.push({ ...currentItem, active: false })
					} else {
						newItems.push({ ...currentItem, active: true })
					}

				} else {
					newItems.push({ ...currentItem, active: false })
				}
			}
			return newItems
		})
	}

	const list = items.map((item, index) => {
		return (
			<PricesItem
				num={item.num}
				title={item.title}
				key={index}
				works={item.works}
				id={index}
				active={item.active}
				updateItems={updateItems}
			/>
		)
	})



	// function updateItems(id) {
	// 	setActivePrice(prev => !prev);
	// }




	return (
		<section className="prices">
			<div className="prices__container container">
				<h2 className="prices__title title">Prices</h2>
				<ul className="prices__list">
					{list}
				</ul>
			</div>
		</section>
	)
}