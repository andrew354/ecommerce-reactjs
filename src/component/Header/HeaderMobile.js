import React from 'react';
import './headerMobile.css';
import { useStateValue } from '../../StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import PersonIcon from '@material-ui/icons/Person';
import logoSmartStore2 from '../../static/logoSmartStore3.png';

function HeaderMobile() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();

	const handleSignOut = () => {
		if (user) {
			auth.signOut();
			history.push('/');
		}
	};

	return (
		<div className="headerMobile">
			{/* <nav className="header__navBar">
                <ul>
                    <li className="header__hamburgerMenu"></li>
                    <li className="header__logo"></li>
                    <li className="header__signin"></li>
                    <li className="header__cart"></li>
                </ul>
            </nav>
            <div className="header__searchInput">
                <input type="text" className="header__searchInput" />
            </div> */}
			<nav role="navigation">
				<div id="menuToggle">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>
					<ul id="menu">
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
					</ul>
				</div>
			</nav>
			<Link to={'/'}>
				<div className="headerMobile__logo">
					<img src="https://cdn3.shoppy.mn/assets/2819/original/mobLogo.png" />
				</div>
			</Link>
			<div className="header__nav">
				<ul className="header__ul">
					<Link className="header__linkSignIn" to={!user && '/login'}>
						<li className="header__li">
							<span className="header__liSpanOne">
								{user ? 'Hi ' + user.email : 'Hi Guest'}{' '}
							</span>
							{user != null ? (
								<span
									onClick={handleSignOut}
									className="header__liSpanTwo"
								>
									{user.email}
								</span>
							) : (
								''
							)}
						</li>
						<li>
							<PersonIcon fontSize="large" />
						</li>
					</Link>
					<Link className="header__basketIconLink" to={'/checkout'}>
						<li className="header__li header__basketIcon">
							<ShoppingBasketIcon />
							<span className="header__liSpanTwo header__basketCount">
								{basket?.length}
							</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default HeaderMobile;
