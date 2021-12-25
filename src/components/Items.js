import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, imageURL, price, quantity }) => {
  console.log("HUIHUI", id, description, title, imageURL, price, quantity )
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <><div>Im Here</div>
      <div className="items-info">
        <div className="product-img">
          <img src={imageURL} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          {/* <p>{description}</p> */}
        </div>
        {quantity ==0 ? 
        <div className="add-minus-quantity">
          <span>Add to Cart</span>
        {/* <span>Add to Cart</span> */}
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled /> */}
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        : 
        <div className="add-minus-quantity">
          <span>Add to Cart</span>
        {/* <span>Add to Cart</span> */}
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        }
        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
