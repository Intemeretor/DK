import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__columns">
					<div className="footer__column">
						<p>Make an appointment for an initial consultation with our qualified doctors</p>
						<p>Subscribe and stay tuned for new news</p>
						<form className="footer__subscribe">
							<input
								type="email"
								name="email"
								placeholder="E-mail"
							/>
							<div className="footer__button"><span>Subscribe</span></div>
						</form>
					</div>
					<div className="footer__column">
						<h4 className="footer__subtitle">Company</h4>
						<ul className="footer__column-body">
							<li><a href="" className="footer__link">About us</a></li>
							<li><a href="" className="footer__link">Services</a></li>
							<li><a href="" className="footer__link">Prices</a></li>
							<li><a href="" className="footer__link">Team</a></li>
							<li><a href="" className="footer__link">Reviews</a></li>
						</ul>
					</div>
					<div className="footer__column">
						<h4 className="footer__subtitle">Services</h4>
						<ul className="footer__column-body">
							<li><a href="" className="footer__link">Diagnosis</a></li>
							<li><a href="" className="footer__link">Surgery</a></li>
							<li><a href="" className="footer__link">Prosthesis</a></li>
							<li><a href="" className="footer__link">Orthodontics</a></li>
							<li><a href="" className="footer__link">Implantation of teeth</a></li>
						</ul>
					</div>
					<div className="footer__column">
						<h4 className="footer__subtitle">Contacts</h4>
						<ul className="footer__column-body">
							<li className="footer__item">
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.1478 14.733L15.9831 12.4219C15.7829 12.3352 15.5643 12.2998 15.3469 12.3189C15.1296 12.338 14.9205 12.411 14.7384 12.5312C14.7239 12.5405 14.71 12.5507 14.6969 12.5619L11.9844 14.8741C11.924 14.9109 11.8555 14.9322 11.7849 14.9362C11.7143 14.9402 11.6438 14.9268 11.5797 14.897C9.80345 14.0395 7.96486 12.2152 7.10736 10.4597C7.07702 10.396 7.06294 10.3258 7.06638 10.2554C7.06981 10.185 7.09066 10.1165 7.12704 10.0561L9.44579 7.29875C9.45673 7.28562 9.46657 7.2714 9.47642 7.25718C9.59628 7.0754 9.66904 6.86666 9.68813 6.64976C9.70723 6.43285 9.67206 6.21461 9.58579 6.01468L7.27032 0.858745C7.15854 0.597608 6.96506 0.379784 6.71893 0.237983C6.47279 0.0961817 6.1873 0.0380576 5.90532 0.0723392C4.52892 0.253814 3.26564 0.930127 2.35143 1.97496C1.43723 3.01979 0.934634 4.36168 0.937512 5.75C0.937512 14.1937 7.80626 21.0625 16.25 21.0625C17.6383 21.0654 18.9802 20.5628 20.025 19.6486C21.0699 18.7344 21.7462 17.4711 21.9277 16.0947C21.9617 15.814 21.9042 15.5298 21.7637 15.2844C21.6231 15.0391 21.4071 14.8457 21.1478 14.733ZM21.0625 15.9853C20.9081 17.151 20.3343 18.2205 19.4486 18.9939C18.5629 19.7672 17.4258 20.1916 16.25 20.1875C8.2897 20.1875 1.81251 13.7103 1.81251 5.75C1.80844 4.57416 2.23276 3.43708 3.00615 2.55137C3.77954 1.66566 4.84904 1.09195 6.0147 0.937495C6.03218 0.936409 6.04972 0.936409 6.0672 0.937495C6.15351 0.938231 6.23768 0.964481 6.3091 1.01294C6.38053 1.0614 6.43602 1.12991 6.46861 1.20984L8.77751 6.36578C8.80445 6.42879 8.81621 6.49725 8.81184 6.56565C8.80747 6.63404 8.78709 6.70045 8.75236 6.75953L6.4347 9.51578C6.42376 9.52999 6.41282 9.54312 6.40298 9.55843C6.2795 9.74725 6.20679 9.96471 6.19184 10.1898C6.1769 10.4149 6.22023 10.6401 6.31767 10.8436C7.26814 12.7894 9.22814 14.7352 11.1958 15.6856C11.4007 15.7824 11.6271 15.8245 11.8531 15.8079C12.0791 15.7912 12.2969 15.7163 12.4853 15.5905L12.5258 15.5598L15.2416 13.2498C15.2997 13.2143 15.3654 13.1932 15.4332 13.188C15.5011 13.1829 15.5693 13.194 15.632 13.2203L20.7956 15.5347C20.8828 15.571 20.9559 15.6344 21.0039 15.7156C21.052 15.7969 21.0726 15.8915 21.0625 15.9853Z" fill="black" />
								</svg>
								<span>+ (380) 66 786 55 66</span>
							</li>
							<li className="footer__item">
								<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5 28.05L15.972 27.456C15.642 27.126 7.92001 18.018 7.92001 12.54C7.92001 7.78796 11.748 3.95996 16.5 3.95996C21.252 3.95996 25.08 7.78796 25.08 12.54C25.08 18.018 17.358 27.126 17.028 27.522L16.5 28.05ZM16.5 5.27996C12.474 5.27996 9.24001 8.51396 9.24001 12.54C9.24001 16.764 14.784 23.892 16.5 26.004C18.216 23.892 23.76 16.764 23.76 12.54C23.76 8.51396 20.526 5.27996 16.5 5.27996Z" fill="#545454" />
									<path d="M16.5 15.84C14.652 15.84 13.2 14.388 13.2 12.54C13.2 10.692 14.652 9.23999 16.5 9.23999C18.348 9.23999 19.8 10.692 19.8 12.54C19.8 14.388 18.348 15.84 16.5 15.84ZM16.5 10.56C15.378 10.56 14.52 11.418 14.52 12.54C14.52 13.662 15.378 14.52 16.5 14.52C17.622 14.52 18.48 13.662 18.48 12.54C18.48 11.418 17.622 10.56 16.5 10.56Z" fill="black" />
								</svg>
								<span>53/2 Roman Shukhevych Street</span>
							</li>
						</ul>
						<div className="footer__socialmedia">
							<img src="./Footer/fb.png" alt="" />
							<img src="./Footer/tg.png" alt="" />
							<img src="./Footer/ig.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}