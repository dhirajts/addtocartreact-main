import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import CheckoutCart from './CheckoutCart'
import { reducer } from "./reducer";
import { Link, useLocation } from "react-router-dom";


export const CartContext = createContext();

const initialState = {
  item: products,
  cart:[],
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    console.log("this is the id", id)
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const checkout = () =>{
    return dispatch({
      type: "GET_CART"
    })
  }

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("Awesome", state.item);

  }, [state.item]);

  // useEffect(() => {
  //   dispatch({ type: "GET_CART" });
  //   console.log("Awesome", state.item);

  // }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement, checkout }}>
      {/* {useLocation().pathname.split("/")[1] !== "cart" && ( */}
      <ContextCart />
  {/* )} */}
      <CheckoutCart/>
    </CartContext.Provider>
  );
};

export default Cart;
