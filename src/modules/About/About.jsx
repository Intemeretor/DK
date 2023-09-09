import Specialists from "../../images/About/specialists.jpg";
import Tech1 from "../../images/About/tech1.jpg";
import Tech2 from "../../images/About/tech2.jpg";


import './About.scss';
export default function About() {
	return (
		<section className="about">
			<div className="about__container container">
				<div className="about__specialists specialists">
					<div className="specialists__block">
						<h1 className="specialists__title">Orthodontics clinic with the best specialists</h1>
						<div className="specialists__text">Our dedication to work and extensive experience will contribute to a beautiful smile.</div>
						<div className="specialists__buttons">
							<button className="specialists__button">Sign up</button>
							<button className="specialists__button">Consultation</button>
						</div>
					</div>
					<div className="specialists__img">
						<img src={Specialists} alt="" />
					</div>

				</div>
				<div className="about__technologies technologies">
					<div className="technologies__row">
						<div className="technologies__img technologies__item">
							<img src={Tech1} alt="" />
						</div>
						<div className="technologies__item technologies__info">
							<div className="technologies__block">
								<div className="technologies__numbers">
									<div className="technologies__num">
										<p className="bignum">7,000</p>
										<p>the best customers</p>
									</div>
									<div className="technologies__num">
										<p className="bignum">10</p>
										<p>years of experience</p>
									</div>
								</div>
								<div className="technologies__text">
									<p>We use modern technologies and advanced treatment methods to ensure effective results and maximum comfort during the process. </p>
								</div>
								<div className="technologies__btn" >
									<button >
										Read more
									</button>
								</div>
							</div>



						</div>

						<div className="technologies__img technologies__item">
							<img src={Tech2} alt="" />
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}