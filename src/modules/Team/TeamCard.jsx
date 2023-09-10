

export default function TeamCard({ photo, name, profession, id } = props) {
	return (
		<li className="team__card">
			<div className="team__photo"><img src={photo} alt="" /></div>
			<div className="team__name">{name}</div>
			<div className="team__profession">{profession}</div>
		</li>
	)
}