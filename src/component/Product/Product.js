import React from 'react';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';
import './product.css';
import Carousel from 'react-elastic-carousel';
import useWindowSize from '../../useWindowSize';

function Product({ id, title, subtitle, description, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const { width } = useWindowSize();

	const addToBasket = () => {
		// dispatch some action, dispatch an item into the dataLayer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				subtitle: subtitle,
				description: description,
				image: image,
				price: price,
				rating: rating,
				count: 1,
			},
			quantity: 1,
		});
	};

	return (
		<div className="product">
			<div className="product__imageContainer">
				<Link to={`/product/${id}`}>
					{width > 480 ? (
						<Carousel>
							{image.map((img) => (
								<img
									className="product__image"
									src={img.url}
									alt="productImage"
									key={img.url}
								/>
							))}
						</Carousel>
					) : (
						<img
							className="product__image"
							src={image[0].url}
							alt="productImage"
						/>
					)}
				</Link>
			</div>
			<div className="product__textContainer">
				<div className="product__info">
					<div className="product__text">
						<h3 className="product__title">{title}</h3>
						<h5 className="product__title">{subtitle}</h5>
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
				<div className="product__buttonContainer">
					<button
						onClick={addToBasket}
						className="product__buttonBasket cart"
					>
						Add to basket
					</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
