import React, { useState, useEffect } from 'react';
import './home.css';
import Product from '../Product/Product.js';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Home() {
	const [{products, basket, filteredProducts}, dispatch] = useStateValue();

	console.log(filteredProducts)

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
						filteredProducts.length === 0 ?
						products.map(product => (
									<Product
										id = {product.id}
										title= {product.title}
										subtitle={product.subtitle}
										description={product.description}
										image={product.images.map( url=> url)}
										price={product.price}
										// rating={product.rating}
									/>
						)) : (
							filteredProducts.map(product => (
								<Product
									id = {product.id}
									title= {product.title}
									subtitle={product.subtitle}
									description={product.description}
									image={product.images.map( url=> url)}
									price={product.price}
									// rating={product.rating}
								/>
					)) 
						)
					}
				</div>
			</div>
		</div>
	);
}

export default Home;
