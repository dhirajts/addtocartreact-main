import React, { useReducer, useEffect,useContext, useState } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import Checkout from './CheckoutCart'
import { reducer } from "./reducer";
import { CartContext } from "./Cart";
import Items from "./Items";
import Scrollbars from "react-custom-scrollbars-2";


const CheckoutCart = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const { item, clearCart, totalItem, totalAmount, cart } = useContext(CartContext);
      console.log("item length", item.length, totalItem)
      const [total, setTotal] = useState([]);
    useEffect(() => {
        console.log("Inside UseEffect", item.length, totalItem, item)
        item.filter((curr) => curr.quantity!==0 )
        setTotal(item)
        // dispatch({ type: "GET_TOTAL" });
    }, [item, totalItem]);
    return (
        <div>
            Hello
            <Scrollbars>
              {total.map((curItem) => {
                  {console.log(curItem)}
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
            {/* {total.map((prod) =>{
                {console.log("Hellosssss", prod.title, prod.quantity)}
                return <span>{prod.title}hello</span> 
                // <h1>HELLOO</h1>
            })} */}
        </div>
    )
}

export default CheckoutCart
