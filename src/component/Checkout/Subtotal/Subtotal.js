import React from 'react';
import './subtotal.css';
import { useStateValue } from '../../../StateProvider';
import paymentMethods from '../../../static/paymentMethods.png'
import { useHistory } from 'react-router-dom'
import { getTotalPriceBasket } from '../../../reducer'

function Subtotal() {
	const history = useHistory()
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<h1>Subtotal</h1>
			<div className="subtotal__text">
					<span>{basket?.length} items:</span>
					<strong>
						{
							getTotalPriceBasket(basket)
						}
					</strong>
			</div>
			<div className="subtotal__buttonContainer">
				<button onClick={e => history.push('/payment')} className="subtotal__button">Proceed to Checkout</button>
			</div>
			<div className="subtotal__paymentMethods">
				<img src={paymentMethods} alt="paymentMetos" />
			</div>
		</div>
	);
}

export default Subtotal;
