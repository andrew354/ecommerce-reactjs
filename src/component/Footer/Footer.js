import React from 'react';
import './footer.css';

function Footer() {
	return (
		<div className="footer__container">
			<footer>
				<nav className="header__navBar" role="navigation">
					<a href="#">
						<li>Home</li>
					</a>
					<a href="#">
						<li>About</li>
					</a>
					<a href="#">
						<li>Info</li>
					</a>
					<a href="#">
						<li>Contact</li>
					</a>
					<a href="https://erikterwan.com/" target="_blank">
						<li>Show me more</li>
					</a>
				</nav>
				<ul class="footer__section social-media">
					<li>
						<p>Follow Us:</p>
					</li>
					<li>
						<a href="#">
							<i class="icon-social-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-social-instagram"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-social-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-social-youtube"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
