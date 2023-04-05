import React, {useContext} from 'react'
import './shop.css'
import Product  from "./Product.jsx";
import { ShopContext } from '../../context/shop-context'; 

const Shop = () => {

  const {productData} = useContext(ShopContext)

  return (
    <div className = 'shop'>
    <div>
        <h1 className = 'shopTitle'> Varun's Shop </h1>
    </div>
    <div className = 'products'> 
        {productData.map((product)=> (
            <Product product = {product}
            />
        ))}        
        </div>
    </div>
  )
}

export default Shop

