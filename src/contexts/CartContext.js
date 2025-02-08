import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemCart(newItem) {
    // verificar se este item já esta no carrinho, adiciona masi uma quantidade 
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if (indexItem !== -1) {
      // adicionar quantidade porque já esta na lista 
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1

      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].total

      setCart(cartList)
      return
    }
    // adicionar item no carrinho, porque nao esta na lista 
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }
    setCart(products => [...products, data])
    
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;