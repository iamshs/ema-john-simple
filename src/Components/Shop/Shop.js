import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [products,setProducts] = useState([])
    const [cart,setCart]=useState([])
    useEffect (()=>{
        fetch('products.json')
        .then (res=>res.json())
        .then (data =>setProducts(data))
    },[])
const handleAddToCart =(product)=>{
    const newCart = [...cart,product]
    setCart(newCart)
}  
    return (
        <div className='shop-conatiner'>
            <div className="product-conatiner">
             {
                 products.map(product =><Products
                    key={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                 ></Products>)
             }
            </div>
            <div className="order-container">
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;