import PhoneIco from '../../images/svg/ph_phone-thin.svg';
import "./Header.scss"

export default function Head() {
	return (
		<header className="header">
			<div className="header__row container">
				<div className="header__logo">
					<span>DK</span>
				</div>
				<nav className="header__navigation navigation">
					<ul className="navigation__list">
						<li className="navigation__item">
							<a className="navigation__link" href="">About us</a>
						</li>
						<li className="navigation__item ">
							<a href="" className="navigation__link services">
								<span>Services</span>
								<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.5 1.5L6.5 6.5L11.5 1.5" stroke="#414141" />
								</svg>

							</a>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="">Prices</a>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="">Team</a>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="">Reviews</a>
						</li>
					</ul>
				</nav>
				<div className="header__phone-num phone-num">
					<img src={PhoneIco} alt="" className="phone-num__ico" />
					<span className="phone-num__number">+ (380) 66 786 55 66</span>
				</div>
			</div>
		</header>
	)
}