import React from 'react';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';
import './product.css';
import Carousel from 'react-elastic-carousel';
import useWindowSize from '../../useWindowSize';
import ProductDetail from '../ProductDetail/ProductDetail';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const {width} = useWindowSize();

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
			quantity: 1

		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<div className="product__text">
					<p className="product__title">{title}</p>
					<p className="product_price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					{/* <div className="product__rating">
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
					</div> */}
				</div>
			</div>
				<div className="product__imageContainer">
				<Link to={`/product/${id}`}>
					{
						width > 480 ? (
							<Carousel>
						{
							image.map(img => (
							<img
								className="product__image"
								src={img.url}
								alt="productImage"
							/>
							))
						}
					</Carousel>
						) : (
							<img
								className="product__image"
								src={image[0].url}
								alt="productImage"
							/>
						)
					}
					</Link>
				</div>
			<div className="product__buttonContainer">
				<button
					onClick={addToBasket}
					className="product__buttonBasket"
				>
					Add to basket
				</button>
			</div>
		</div>
	);
}

export default Product;
