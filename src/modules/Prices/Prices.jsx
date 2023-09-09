import data from './pricesData';
import PricesItem from './PricesItem';
import './Prices.scss';

export default function Prices() {

	const list = data.map((item, index) => {
		return (
			<PricesItem
				num={item.num}
				title={item.title}
				key={index}
				works={item.works}
			/>
		)
	})
	console.log(data);
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