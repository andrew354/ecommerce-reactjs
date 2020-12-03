import React from 'react';
import './basketProductMobile.css'

function BasketProductMobile({ title, subtitle, description, price, rating, image }) {



	const truncDescriptionText = (string) => {
		const stringArr = string.split(' ');
		return stringArr.slice(0, 12).join(' ') + '...';
	};


	return (
		<div>
		<div className="basketProductMobile__container">
			<div className="basketProductMobile__imageContainer">
				<img
					className="basketProductMobile__image"
					src={image[0].url}
					alt="productImage"
				/>
			</div>
			<div className="basketProductMobile__info">
				<div className="basketProductMobile__text">
					<div className="basketProductMobile__titleProduct">
						<h3 className="basketProductMobile__subtitle">{subtitle}</h3>
						<h5 className="basketProductMobile__title">{title}</h5>
					</div>
					<p className="basketProductMobile__description">{truncDescriptionText(description)}</p>
					<p className="basketProductMobile__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="basketProductMobile__rating">
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
			</div>
			
		</div>
		<div className="basketProductMobile__buttonContainer">
			
			<button className="basketProductMobile__buttonBasket">
				Remove from Basket
			</button>
			<div className="basketProductMobile__buttonSetItems">
				<button className="basketProductMobile__buttonPlus"> + </button>
				<h4 className="basketProductMobile__buttonTotItems">1</h4>
				<button className="basketProductMobile__buttonMinus"> - </button>
			</div>
		</div>
	</div>
	);
}

export default BasketProductMobile;
