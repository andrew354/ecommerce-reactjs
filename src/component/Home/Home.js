import React, { useState, useEffect } from 'react';
import './home.css';
import Product from '../Product/Product.js';

function Home() {

	const [products, setProducts] = useState([])

	


	// useEffect(() => {
    //     // const data = require()
    //     fetch('../../data.json',{
	// 		headers : { 
	// 			'Content-Type': 'application/json',
	// 			'Accept': 'application/json'
	// 			}
	// 		})
    //         .then(res => res.json())
    //         .then(products => setProducts(products))
    // },[products]);

		useEffect(() => {
			const fetchData = async () => {
				const response = await fetch(
					"https://raw.githubusercontent.com/andrew354/ecommerce-reactjs/master/src/data.json"
				);
				const data = await response.json();
				setProducts(data.products);
			};	
			fetchData();
		}, []);

		console.log(products);

	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/boratsubsequentmoviefilm/SENG_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB417535063_.jpg"
					alt="homeContainerImage"
				/>
				<div className="home__row">
					{
						products.length ?
						products.map(product => (
							
							<Product 
								id = {product.id}
								title= {product.title}
								image={product.images.map( url=> url)}
								price={product.price}
								// rating={product.rating}
							/>
						)) 
						: <h2>Loading Products..</h2>
					}
				</div>
			</div>
		</div>
	);
}

export default Home;
