function adddb(id){
    let shopingCart

    const storedCart=localStorage.getItem('shoping-Cart')
    if(storedCart)
    {
        shopingCart=JSON.parse(storedCart);
    }
   
    else{
        shopingCart={}
    }
    
   
   
    const quantity=shopingCart[id];
    
   
   
if(quantity){
const newQuantity=quantity+1;
shopingCart[id]=newQuantity;

}
else{
    shopingCart[id]=1;
   
}
localStorage.setItem('shoping-Cart',JSON.stringify(shopingCart))
   
}
const getStoredCart=()=>{
    let shopingCart={}

    const storedCart=localStorage.getItem('shoping-Cart')
    if(storedCart)
    {
        shopingCart=JSON.parse(storedCart);
    }
    return shopingCart;

}
export{adddb,getStoredCart}