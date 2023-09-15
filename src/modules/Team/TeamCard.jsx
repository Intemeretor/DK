

export default function TeamCard({ photo, name, profession, id, options } = props) {
	return (
		<li className="team__card" style={{ flex: `0 0 calc((100% / ${options.slidesToShow}) - ${options.slidesToShow + 16}px` }}>
			<div className="team__photo"><img src={photo} alt="" /></div>
			<div className="team__name">{name}</div>
			<div className="team__profession">{profession}</div>
		</li>
	)
}