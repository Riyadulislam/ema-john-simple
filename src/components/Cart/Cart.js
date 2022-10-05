import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
 
     let total=0;
     let shipping=0
     let quantity=0
     for(const product of cart) {
        quantity=quantity+product.quantity
       total=total+product.price*product.quantity
       shipping=shipping+product.shipping

     }
     let tax=parseFloat((total*0.1).toFixed(2))
     
     let grandtotal=tax+total+shipping;
     
    return (
        <div className='cart' >
            <p>Order Summary</p>
            <p>selected Items{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Shipping Charge:{shipping}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{grandtotal}</p>
        </div>
    );
};

export default Cart;