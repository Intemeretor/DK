export default function ReviewsCard({ photo, text, score, id, name, options } = props) {
	let stars = [];
	for (let i = 0; i < 5; i++) {
		if (i >= score) {
			stars.push(<img key={i} src="./Reviews/EmptyStar.png" alt="" />)
		} else {
			stars.push(<img key={i} src="./Reviews/Star.png" alt="" />)
		}
	}
	return (
		<li className="reviews__card review" style={{ flex: `0 0 calc((100% / ${options.slidesToShow}) - ${options.slidesToShow + 16}px` }}>
			<div className="review__photo">
				<img src={photo} alt="" />
			</div>
			<div className="review__body">
				<div className="review__name">{name}</div>
				<div className="review__stars-row">
					{stars}
				</div>
				<div className="review__text">
					{text}
				</div>
			</div>
		</li>
	)

}