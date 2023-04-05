import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'



export const ShopContext = createContext()

export const ShopContextProvider = (props) => {

    const [productData, setProductData] = useState([])
    const [cartItems, setCartItems] = useState({})

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> {
            
            setProductData(res.data)
        })
      },[])
    
    const addToCart = (itemId) => {

        setCartItems((prevItem) => {
            return (
                {...prevItem,
                [itemId]: prevItem[itemId] === undefined ? 1 : prevItem[itemId]+1 } 
            )
        })
    }

    const removeFromCart = (itemId) => {

        setCartItems((prevItem) => {
            return (
                {...prevItem,
                [itemId]: prevItem[itemId]-1 } 
            )
        })
    }

    const updateCartItems = ((newAmount, itemId) => {

        setCartItems((prevItem) => {
            return (
                {
                    ...prevItem,
                    [itemId]: newAmount
                }
            )
        })
    })

    const totalCartAmount = () => {

            let totalCartvalue = 0

            for (const item in cartItems) {

                if(cartItems[item] > 0) {
                    let productInfo = productData.find((product)=> product.id === Number(item)) 
                    totalCartvalue += (cartItems[item]*productInfo.price)
                }
            }
            return totalCartvalue
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItems, totalCartAmount, productData}
    
    return (
    <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
    ) 

}




