import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img,name,ratings,price}=props.product
    const {handleAddToCart} =props
    return (
        <div className='products'>
          <img src={img} alt="" /> 
        <div className='product-info'>
          <p className='product-name'>{name}</p> 
          <p>price: ${price}</p>
          <p><small> ratings: {ratings}stars</small></p>
          
        </div>
        <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart
              <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
            </p>
            </button>
        </div>
    );
};

export default Products;