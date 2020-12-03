import React, { useState, useEffect } from 'react';
import './headerMobile.css';
import { useStateValue } from '../../../StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import PersonIcon from '@material-ui/icons/Person';
import logoSmartStore2 from '../../../static/logoSmartStore3.png';

function HeaderMobile() {
	const [{ basket, products, user, filteredProducts }, dispatch] = useStateValue();
	const history = useHistory();
	const [categories, setCategories] = useState([]);

	const [categoryChosen, setCategoryChosen] = useState([]);

	const [category, setCategory] = useState("all")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

	const handleSignOut = () => {
		if (user) {
			auth.signOut();
			history.push('/');
		}
	};

	const filterForCategory = (category) => {
		const categoryChosenn = products.filter(product => product.category === category
		)
		console.log(categoryChosenn) // e' l'array di prodoctti filtrati per una determinata categoria
		setCategoryChosen(categoryChosenn)
	}

	useEffect(() => {
			dispatch({
				type: 'SET_FILTERED_PRODUCTS',
				filteredProducts: categoryChosen,
			});
	}, [categoryChosen]); // essenziale perche' funzioni il dispatch

	useEffect(() => {
		const getCategories = () => {
			const allCategories = products.map(product => product.category)
			const categoryUnique = allCategories.filter((elem, index, self) => index === self.indexOf(elem));
			setCategories(categoryUnique);
		}
		getCategories()
	}, [products])


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
			<div className="header__topNav">
				<nav className="header__navBar" role="navigation">
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
									{user ? <PersonIcon fontSize="large" /> : user?.name}
								</span>
								{user != null ? (
									<span
										onClick={handleSignOut}
										className="header__liSpanTwo"
									>
									</span>
								) : (
									''
								)}
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
			<div className="header__inputSearchContainer">
				<input className="header__inputSearch"type="text" />
				<button className="header__inputSearchButton"><i class="fa fa-search"></i></button>
			</div>
			<div className="header__categoriesNav">
				{
					<ul className="header__categoriesList">
					{
						categories?.map((category, index) => (
							<Link to="/">
								<li key={index} onClick={() => filterForCategory(category)}>{category}</li>
							</Link>
						))
					}
					</ul>
				}
			</div>
		</div>
	);
}

export default HeaderMobile;
