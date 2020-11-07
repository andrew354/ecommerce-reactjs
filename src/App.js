import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header.js';
import Home from './component/Home/Home.js';
import Checkout from './component/Checkout/Checkout.js';
import Login from './component/Login/Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
	const [ { }, dispatch ] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			console.log('the user is', authUser)

			if(authUser) { // the user is loggin in or was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			} else { // the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	},[])



	return (
		<Router>
			<div className="App">
				
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Header />
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
