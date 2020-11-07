import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log('this is the basket: ' + basket);

	const addToBasket = () => {
		// dispatch some action, dispatch an item into the dataLayer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				count: 1,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p className="product__title">{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<img
								key={i}
								className="product__ratingStar"
								src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
								alt="starRating"
							/>
						))}
				</div>
			</div>
			<img className="product__image" src={image} alt="productImage" />
			<button onClick={addToBasket} className="product__buttonBasket">
				Add to basket
			</button>
		</div>
	);
}

export default Product;
