import React from 'react';

function BasketProductMobile({ title, price, rating, image }) {
	return (
		<div className="product">
			<div className="product__info">
				<div className="product__text">
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
					<div className="product__buttonContainer">
						<button
							// onClick={addToBasket}
							className="product__buttonBasket"
						>
							Remove from Basket
						</button>
					</div>
				</div>
			</div>
			<div className="product__imageContainer">
				<img
					className="product__image"
					src={image}
					alt="productImage"
				/>
			</div>
		</div>
	);
}

export default BasketProductMobile;
