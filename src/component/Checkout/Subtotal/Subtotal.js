import React from 'react';
import './subtotal.css';
import { useStateValue } from '../../../StateProvider';
import paymentMethods from '../../../static/paymentMethods.png'

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<h1>Subtotal</h1>
			<div className="subtotal__text">
					<span>{basket?.length} items:</span>
					<strong>
						{
							basket?.reduce((total, product) => total + product.price, 0).toFixed(2)
						}
					</strong>
			</div>
			<div className="subtotal__buttonContainer">
				<button className="subtotal__button">Proceed to Checkout</button>
			</div>
			<div className="subtotal__paymentMethods">
				<img src={paymentMethods} alt="paymentMetos" />
			</div>
		</div>
	);
}

export default Subtotal;
