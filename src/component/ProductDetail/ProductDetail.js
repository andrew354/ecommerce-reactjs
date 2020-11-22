import React, { useEffect, useState } from 'react';
import './productDetail.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { useParams } from 'react-router-dom';

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
                product.map(product => (
                    <div className="details" key={product.id}>
                    <div className="box">
                        <div className="row">
                            <h2>{product.title}</h2>
                            <span>${product.price}</span>
                        </div>
                        <p>{product.description}</p>
                        <Link to="/cart" className="cart" >
                            Add to cart
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
    );
}

export default ProductDetail;