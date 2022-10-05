import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  
  
    const {ratings,seller,price,name,img}=props.product;
    return (
        <div className='product-size'>
            <img src={img} alt="" />
            <div className='produt-name'>
            <p className='p-name'>{name}</p>
           
           <p>Price:{price}</p>
           <p>Manufacture: {seller}</p>
           <p>Ratings: {ratings} start</p>
           
           </div>
           <button onClick={()=>props.addToEventHandle(props.product)}  className='button'>
             <p>Add to Cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        
            </button>
        </div>
    );
};

export default Product;