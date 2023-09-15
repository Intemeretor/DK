import './Team.scss';
import TeamCard from './TeamCard';
import TeamData from './TeamData';
import { useState, useEffect } from 'react';

export default function Team() {
	const [cardData, setCardData] = useState(TeamData);
	const sliderSize = cardData.length;
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})
	const [options, setOptions] = useState({
		active: 0,
		slidesToShow: 3,
		indicatorQuantity: sliderSize - 2,
	});
	const [arrowsActive, setArrowsActive] = useState({
		lArrow: options.active > 0,
		rArrow: options.active < options.indicatorQuantity - 1
	})




	useEffect(() => {
		function updateDimension() {
			setScreenSize(prev => ({
				width: window.innerWidth,
				height: window.innerHeight
			}));
			if (screenSize.width > 900) {
				setOptions(prev => ({ ...prev, slidesToShow: 3 }))
			} else if (screenSize.width <= 900 && screenSize.width > 550) {
				setOptions(prev => ({ ...prev, slidesToShow: 2 }))
			} else if (screenSize.width <= 550) {
				setOptions(prev => ({ ...prev, slidesToShow: 1 }))
			}
		}
		setOptions(prev => ({ ...prev, active: 0, indicatorQuantity: sliderSize - options.slidesToShow + 1 }));
		window.addEventListener('resize', updateDimension);

		return (() => {
			window.removeEventListener('resize', updateDimension);
		})
	}, [screenSize]);
	useEffect(() => {
		setArrowsActive(prev => ({
			lArrow: options.active > 0,
			rArrow: options.active < options.indicatorQuantity - 1
		}))
	}, [options.active])
	const cards = cardData.map((item, index) => {
		return (
			<TeamCard
				photo={item.img}
				id={index}
				name={item.name}
				profession={item.profession}
				key={index}
				screenSize={screenSize}
				options={options}
			/>
		)
	})


	const indicators = [];
	for (let i = 0; i < options.indicatorQuantity; i++) {
		indicators.push(
			<button id={i} onClick={() => changeSlide(i)} key={i} className={`indicators__button ${i == options.active && 'active'}`}>
				<span className="indicators__symbol"></span>
			</button>
		)
	}
	function changeSlide(id) {
		setOptions(prev => ({ ...prev, active: id }));
		arrowHandler();
	}
	function prevSlide() {

		if (options.active > 0) {
			setOptions(prev => ({ ...prev, active: prev.active - 1 }));
		}
	}
	function nextSlide() {
		if (options.active < options.indicatorQuantity - 1) {
			setOptions(prev => ({ ...prev, active: prev.active + 1 }));
		}

	}

	console.log(arrowsActive.lArrow);
	console.log(arrowsActive.rArrow);
	console.log(options.active);
	return (
		<section className="team">
			<div className="team__container container">
				<div className="team__head">
					<h2 className='team__title title'>Team</h2>
					<div className="team__text toptext">Each doctor provides a consultation separately for your case</div>
				</div>
				<div className="team__carousel ">
					<ul className="team__cards" style={{
						transform: `translateX(-${((100 / options.slidesToShow) * options.active)}%`
					}}>
						{cards}
					</ul>
				</div>
				<div className="team__indicators indicators">
					{indicators}
				</div>
				<div className="team__arrows">
					<span onClick={prevSlide} className={`team__arrow-left team__arrow ${!arrowsActive.lArrow && 'unactive'}`}>
						<svg width="101" height="101" viewBox="0 0 101 101" fill='#292929' xmlns="http://www.w3.org/2000/svg" stroke="black">
							<circle cx="50.2958" cy="50.6557" r="36" transform="rotate(-122 50.2958 50.6557)" fill="transparent" />
							<path d="M37.819 49.3996C37.4312 49.7928 37.4355 50.426 37.8287 50.8138L44.2361 57.134C44.6293 57.5219 45.2625 57.5175 45.6503 57.1244C46.0381 56.7312 46.0338 56.098 45.6406 55.7102L39.9451 50.0922L45.5631 44.3967C45.951 44.0035 45.9466 43.3704 45.5534 42.9825C45.1602 42.5947 44.5271 42.599 44.1392 42.9922L37.819 49.3996ZM61.2643 48.9461L38.5241 49.1019L38.5378 51.1019L61.278 50.9461L61.2643 48.9461Z" />
						</svg>

					</span>
					<span onClick={nextSlide} className={`team__arrow-right team__arrow ${!arrowsActive.rArrow && 'unactive'}`}>
						<svg width="102" height="101" viewBox="0 0 102 101" fill="#292929" xmlns="http://www.w3.org/2000/svg" stroke="black">
							<circle cx="50.9376" cy="50.2958" r="36" transform="rotate(58 50.9376 50.2958)" fill="transparent" />
							<path d="M63.4144 51.5519C63.8022 51.1587 63.7979 50.5256 63.4047 50.1377L56.9973 43.8175C56.6041 43.4297 55.9709 43.434 55.5831 43.8272C55.1952 44.2204 55.1996 44.8535 55.5928 45.2414L61.2882 50.8593L55.6703 56.5548C55.2824 56.948 55.2868 57.5812 55.68 57.969C56.0732 58.3568 56.7063 58.3525 57.0941 57.9593L63.4144 51.5519ZM39.9691 52.0054L62.7093 51.8496L62.6956 49.8497L39.9554 50.0055L39.9691 52.0054Z" />
						</svg>

					</span>
				</div>
			</div>

		</section>
	)
}