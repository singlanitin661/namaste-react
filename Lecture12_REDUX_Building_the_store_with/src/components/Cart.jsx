import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/Slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    const cartItems = useSelector((store) => store.cart.items)

    console.log(cartItems)

    let total = 0;
    cartItems.map((item) => total += (item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100))

  return (
    <div className='text-center m-4 p-4 '>
      <h1 className='text-2xl font-bold'>Cart</h1>

      <div className='cart-items'>
        <div className='flex justify-between  items-center'>
            <button className=' bg-black text-white text-bold p-2 rounded-xl m-2' onClick={ ()=>{
                console.log("Clear-cart Clicked")
                handleClearCart();
            }
            
            }>Clear-Cart</button>
            <h1>You total = ₹{total}</h1>
        </div>
        {cartItems.length===0 && <h1 className='m-4'>You cart is Empty. Please add some items and come again <Link to="/">Home</Link></h1>}
        {cartItems.length===0 && <h1 className='text-xl text-blue-500 m-4'><Link to="/">Take me to the Home</Link></h1>}
        <ItemList items={cartItems} whetherToShowAddButton={false}/>
      </div>
    </div>
  )
}

export default Cart
