import './Team.scss';
import TeamCard from './TeamCard';
import TeamData from './TeamData';
import { useState } from 'react';

export default function Team() {
	const [cardData, setCardData] = useState(TeamData);
	const cards = cardData.map((item, index) => {
		return (
			<TeamCard
				photo={item.img}
				id={index}
				name={item.name}
				profession={item.profession}
				key={index}
			/>
		)
	})
	return (
		<section className="team">
			<div className="team__container container">
				<div className="team__head">
					<h2 className='team__title title'>Team</h2>
					<div className="team__text toptext">Each doctor provides a consultation separately for your case</div>
				</div>
				<div className="team__carousel ">
					<ul className="team__cards">
						{cards}
					</ul>
				</div>
			</div>

		</section>
	)
}