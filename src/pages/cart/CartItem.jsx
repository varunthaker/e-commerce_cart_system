import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {

    const {id, title, price, image} = props.data
    const {cartItems, addToCart, removeFromCart,updateCartItems } = useContext(ShopContext)

  return (
    <div className = 'cartItem'>

    <img src = {image} alt = 'product'></img>

    <div className = 'description'>
        <p><b>{title}</b></p>
        <p>{price} €</p>
        <div className='countHandler'>
        <button onClick = { () => removeFromCart(id)}>−</button>
        <input type="number" value= {cartItems[id]} onChange = {(e) => updateCartItems(Number(e.target.value), id)}/>
        <button onClick = {() => addToCart(id)}>+</button>
        <p className= 'subTotal'>Sub total: € {(price*cartItems[id]).toFixed(2)}</p>
        </div>

    </div>
    </div>
    
  )
}
