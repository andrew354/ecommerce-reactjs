import React from 'react';
import './basketProduct.css'
import { useStateValue } from '../../../StateProvider';

function BasketProduct({id, title, price, image, rating}) {
    const [{ basket }, dispatch] = useStateValue()


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

	return (
		<div className="basketProduct__container">
			<div className="basketProduct__info">
			<div className="basketProduct__containerImg">
					<img className="basketProduct__img" src={image} alt="basketProductImage" />
				</div>
				<div className="basketProduct__details">
					<p className="basketProduct__title">{title}</p>
					<p className="basketProduct__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="basketProduct__rating">
					{Array(rating).fill().map((_, i) => (
							<img
								key={i}
								className="basketProduct__ratingStar"
								src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
								alt="starRating"
							/>
						))}
					</div>
					<div className="basketProduct__buttonContainer">
						<button onClick={removeFromBasket} className="basketProduct__buttonBasket">
							Remove from basket
						</button>
					</div>
				</div>
				
			</div>
			
		</div>
	);
}

export default BasketProduct;
