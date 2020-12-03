import React, { useEffect, useState } from 'react';
import './productDetail.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { useParams } from 'react-router-dom';
import Carusel from 'react-elastic-carousel';

function ProductDetail({ match }) {
    const [{products}, dispatch ] = useStateValue();
    const [product, setProduct ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => {
            const idUrl = id;

                const productSelected = products.filter(product => 
                    product.id === idUrl
                )
                console.log(productSelected)
                setProduct(productSelected)
            
        }
        getProduct();
    },[products]);

    return (
        <div className="productDetail__container">
            {
                product.map(product =>(
                    <div className="details" key={product.id}>
                        <Carusel>
                            {product.images.map(img => 
                                <div>
                                    <img src={img.url} alt={img.url}/>
                                </div>
                                
                            )}
                        </Carusel>
                        <div className="productDetail__addCart">
                            <Link to="/cart">
                                <button className="cart">
                                    Add to cart
                                </button>
                            </Link>
                            <span>${product.price}</span>
                        </div>
                        <div className="productDetail__box">
                            <div className="row">
                                <h2>{product.subtitle}</h2>
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductDetail;