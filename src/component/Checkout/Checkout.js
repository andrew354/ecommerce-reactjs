import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal/Subtotal';
import BasketProduct from './BasketProduct/BasketProduct'
import { useStateValue } from '../../StateProvider';

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout__container">
			<h1 className="checkout__title">Your Shopping Basket</h1>
			<div className="checkout">
				<div className="checkout__left">
					<div className="checkout__title">
						{basket.map((item) => (
							<div>
								<BasketProduct
									key={item.id}
									title={item.title}
									price={item.price}
									image={item.image}
									rating={item.rating}
									id={item.id}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>
		</div>
	);
}

export default Checkout;
