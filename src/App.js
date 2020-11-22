import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header.js';
import HeaderMobile from './component/Header/HeaderMobile/HeaderMobile.js';
import Home from './component/Home/Home.js';
import Checkout from './component/Checkout/Checkout.js';
import Login from './component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import useWindowSize from './useWindowSize';
import CheckoutMobile from './component/Checkout/CheckoutMobile.js/CheckoutMobile';
import ProductDetail from './component/ProductDetail/ProductDetail';


function App() {
	const [{}, dispatch] = useStateValue();
	const { width } = useWindowSize();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('the user is', authUser);

			if (authUser) {
				// the user is loggin in or was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://raw.githubusercontent.com/andrew354/ecommerce-reactjs/master/src/data.json"
			);
			const data = await response.json();
			// setProducts(data.products);
			dispatch({
				type: 'SET_PRODUCTS',
				products: data.products
			})
		};	
		fetchData();
	}, []);


	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/product/:id">
						{width < 480 ? <HeaderMobile /> : <Header />}
						<ProductDetail />
					</Route>
					<Route path="/checkout">
						{width < 480 ? <HeaderMobile /> : <Header />}
						{width < 480 ? <CheckoutMobile /> : <Checkout />}
					</Route>
					<Route path="/login">
						{width < 480 ? <HeaderMobile /> : <Header />}
						<Login />
					</Route>
					<Route path="/payment">
						{width < 480 ? <HeaderMobile /> : <Header />}
					</Route>
					<Route path="/">
						{width < 480 ? <HeaderMobile /> : <Header />}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
