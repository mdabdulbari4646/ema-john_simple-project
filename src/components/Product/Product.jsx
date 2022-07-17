import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import './product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>

                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='main-button' onClick={() => props.handleAddProduct(props.product)}><FaShoppingCart />Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;