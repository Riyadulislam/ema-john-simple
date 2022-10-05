import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { adddb, getStoredCart } from '../Fakedb/Fakedb';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {

    const[products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // useEffect(()=>{
    //     const storedCart=getStoredCart()
      
    //     const saveCart=[]
    //    for(const id  in storedCart){
    //     const addedProducts=products.find(product=>product.id===id)
    //    if(addedProducts){
    //     const quantity=storedCart[id]
    //     addedProducts.quantity=quantity
    //     console.log(addedProducts)
    //    saveCart.push(addedProducts)
    //    }
    //    }
    //    setCart(saveCart)
      
    // },[products]);
    useEffect(()=>{
        const storedCart=getStoredCart()
        const saveCart=[]
   for(const id in storedCart){
    const addedProducts=products.find(product=>product.id==id)
    if(addedProducts){
        const quantity=storedCart[id]
        addedProducts.quantity=quantity
        saveCart.push(addedProducts)

    }
    setCart(saveCart)
  
    
   }
    },[products])
    const addToEventHandle =(selectedProduct)=>{
     const exists=cart.find(product=>product.id===selectedProduct.id)
     let newCart=[]
     if(!exists)
     {
        selectedProduct.quantity=1;
        newCart=[...cart,selectedProduct]
     }
     else{
        const rest=cart.filter(product=>product.id===!selectedProduct.id)
        exists.quantity=exists.quantity+1;
        newCart=[...rest,exists]
     }
        
        setCart(newCart)
       adddb(selectedProduct.id)
            }
    return (
      
           
        <div className='shop'>
             
            <div className="product-container">
              
                {
                    
                products.map(product =><Product 
                    key={product.id}
                   product={product}
                    addToEventHandle={addToEventHandle}>

                </Product>)
}

            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
               
            </div>
        </div>
 
    );
};

export default Shop;