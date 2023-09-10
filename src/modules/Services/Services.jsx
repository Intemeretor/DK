import './Services.scss';

import bigImg from '../../images/Services/bigImg.jpg';
import img1 from '../../images/Services/img1.png';
import img2 from '../../images/Services/img2.png';
import img3 from '../../images/Services/img3.png';
import img4 from '../../images/Services/img4.png';
import img5 from '../../images/Services/img5.png';

export default function Services() {
	return (
		<section className="services">
			<div className="services__container container">
				<div className="services__head">
					<h2 className="services__title title">Services</h2>
					<div className="services__text toptext">At the consultation, the doctor will definitely recommend the right service for your case</div>
				</div>
				<div className="services__body">
					<div className="services__grid">
						<div className="services__item square vertical">
							<svg fill="currentColor" width="72" height="36" viewBox="0 0 72 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 36C11.9116 26.956 11.9116 9.04402 0 0L72 0C60.6429 9.31284 60.6429 26.6872 72 36L0 36Z" />
							</svg>
							<div className="square__body">
								<div className="square__head">
									<img src={img1} alt="" />
									<h3 className="square__title">Diagnosis</h3>
								</div>
								<p className="square__info">
									Correct diagnosis is the key to successful treatment
								</p>
								<a href="" className="square__link">Read more</a>
							</div>
						</div>
						<div className="services__item square-img">
							<img src={bigImg} alt="" />
						</div>
						<div className="services__item square vertical">
							<svg fill="currentColor" width="72" height="36" viewBox="0 0 72 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 36C11.9116 26.956 11.9116 9.04402 0 0L72 0C60.6429 9.31284 60.6429 26.6872 72 36L0 36Z" />
							</svg>
							<div className="square__body">
								<div className="square__head">
									<img src={img2} alt="" />
									<h3 className="square__title">Surgery</h3>
								</div>
								<p className="square__info">
									Painless surgical intervention of any complexity
								</p>
								<a href="" className="square__link">Read more</a>
							</div>
						</div>
						<div className="services__item square horizontal">
							<svg fill="currentColor" width="72" height="36" viewBox="0 0 72 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 36C11.9116 26.956 11.9116 9.04402 0 0L72 0C60.6429 9.31284 60.6429 26.6872 72 36L0 36Z" />
							</svg>
							<div className="square__body">
								<div className="square__head">
									<img src={img3} alt="" />
									<h3 className="square__title">Orthodontics</h3>
								</div>
								<p className="square__info">
									Bite correction at any age
								</p>
								<a href="" className="square__link">Read more</a>
							</div>
						</div>
						<div className="services__item square horizontal">
							<svg fill="currentColor" width="72" height="36" viewBox="0 0 72 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 36C11.9116 26.956 11.9116 9.04402 0 0L72 0C60.6429 9.31284 60.6429 26.6872 72 36L0 36Z" />
							</svg>
							<div className="square__body">
								<div className="square__head">
									<img src={img4} alt="" />
									<h3 className="square__title">Implantation of teeth</h3>
								</div>
								<p className="square__info">
									One of the best dental implant technologies
								</p>
								<a href="" className="square__link">Read more</a>
							</div>
						</div>
						<div className="services__item square">
							<div className="square__body">
								<div className="square__head">
									<img src={img5} alt="" />
									<h3 className="square__title">Prosthesis</h3>
								</div>
								<p className="square__info">
									Restoration of lost or broken teeth
								</p>
								<a href="" className="square__link">Read more</a>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}