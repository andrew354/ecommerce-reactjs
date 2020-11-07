import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import { auth, db } from '../../firebase';
import { useHistory } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleLogin = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => console.log(error));
	};

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//it successfully created a new user with email and password
				console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="login__container">
			<div className="login__formContainer">
				<h1>Sign In</h1>
				<form className="login__form">
					<div className="login__input">
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="login__formEmailInput"
							placeholder="Email"
							type="email"
						/>
					</div>
					<div className="login__input">
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="login__formPasswordInput"
							placeholder="email"
							type="email"
						/>
					</div>
					<div className="login__signinContainer">
						<button
							onClick={handleLogin}
							className="login__loginButton"
						>
							Login
						</button>
					</div>
					<div className="login__advancedFeatures">
						<div className="login__rememberMe">
							<input type="checkbox" />
							Remember Me
						</div>
						<div className="login__rememberMe">
							<a href="#">Forgot Password?</a>
						</div>
					</div>
					<div className="login__socialLogin">
						<div className="login__facebookTwitterContainer">
							<div className="login__facebookLogin">
								<button className="login__facebookLoginButton">
									<span className="fa fa-facebook"></span>
									Login with Facebook
								</button>
							</div>
							<div className="login__twitterLogin">
								<button className="login__twitterLoginButton">
									<span className="fa fa-twitter"></span>Login
									with Twitter
								</button>
							</div>
						</div>
						<div className="login__googleContainer">
							<div className="login__googleLogin">
								<button className="login__googleLoginButton">
									<span className="fa fa-google"></span>Login
									with Google
								</button>
							</div>
						</div>
					</div>

					<div className="login__createAccountContainer">
						<a>Need new Account?</a>
						<button
							onClick={register}
							className="login__createAccountButton"
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
