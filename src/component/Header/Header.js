import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();

	const handleSignOut = () => {
		if(user){
			auth.signOut();
			history.push('/')
		}
		
	}

	return (
		<div className="header">
			<Link to={'/'}>
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<ul className="header__ul">
					<Link className='header__linkSignIn' to={!user && '/login'}>
						<li className="header__li">
							<span className="header__liSpanOne">Hello {user ? 'user.email' : 'Guest' } </span>
						{
							(user != null) ? (
								<span onClick={handleSignOut} className="header__liSpanTwo">Sign Out</span>
							) : (
								<span className="header__liSpanTwo">Sign In</span>
							)
						}
						</li>
					</Link>
					<li className="header__li">
						<span className="header__liSpanOne">Returns</span>
						<span className="header__liSpanTwo">& Orders</span>
					</li>
					<li className="header__li">
						<span className="header__liSpanOne">Your</span>
						<span className="header__liSpanTwo">Prime</span>
					</li>
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

export default Header;
