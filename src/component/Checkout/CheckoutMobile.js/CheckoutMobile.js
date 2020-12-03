import React from 'react';
import './checkoutMobile.css'
import { useStateValue } from '../../../StateProvider';
import BasketProductMobile from './BasketProductMobile/BasketProductMobile';

function CheckoutMobile() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkoutMobile__container">
			{basket.length === 0 ? (
				<h3>Your Shopping Cart is Empty</h3>
			) : (
				<div className="checkoutMobile__listBasket">
                    <h3>This is your Shopping Cart</h3>
					{basket.map((item, index) => (
						<BasketProductMobile
							key={index}
							subtitle={item.subtitle}
							description={item.description}
							title={item.title}
							price={item.price}
							image={item.image}
							rating={item.rating}
							id={item.id}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default CheckoutMobile;
