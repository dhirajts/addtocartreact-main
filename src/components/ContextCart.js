import React, { useContext } from "react";
// import { useNavigate } from 'react-router-dom';
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";


const ContextCart = () => {
  // const navigate = useNavigate();

  const { item, clearCart, totalItem, totalAmount, checkout } = useContext(CartContext);
  console.log("item lengthsss", item.length, totalItem, item)
  const handleRedirect = () => {
    console.log("Hello")
    // window.history.push ="/checkout"
    // navigate('/checkout');
  }
  // if (item.length === 0) {
  //   return (
  //     <>
  //       <header>
  //         <div className="continue-shopping">
  //           <img src="./images/images.png" alt="arrow" className="arrow-icon" />
  //           {/* <h3>continue shopping</h3> */}
  //         </div>

  //         <div className="cart-icon">
  //           <img src="./images/cart.png" alt="cart" />
  //           <p>{totalItem}</p>
  //         </div>
  //       </header>

  //       <section className="main-cart-section">
  //         <h1>shopping Cart</h1>
  //         <p className="total-items">
  //           you have <span className="total-items-count">{totalItem} </span>{" "}
  //           items in shopping cart
  //         </p>
  //       </section>
  //     </>
  //   );
  // }

  return (
    <>
    
      <header>
        <div className="continue-shopping">
          <img src="./images/images.png" alt="arrow" className="arrow-icon" />
          {/* <h3>continue shopping</h3> */}
        </div>
        <Link to ="/checkout">
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
        </Link>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>
        {/* {console.log(useLocation().pathname.split("/")[1],"JJJJJJJ")} */}
        {/* {useLocation().pathname.split("/")[1] !== "checkout" && ( */}
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        {/* )} */}
        {/* <Link to="/checkout"  onClick={() => checkout()}>View profile</Link> */}
        
        <div className="card-total">
        {useLocation().pathname.split("/")[1] == "checkout" && (
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          )}
          <nav>
          <Link to="/checkout"  onClick={() => checkout()}>
          {/* </nav> */}
          {/* <Link to ={"/checkout"}> */}
          {useLocation().pathname.split("/")[1] !== "checkout" && (
          <button
          // component={Link} to ="/checkout"
            // type="button"
            // onClick={handleRedirect}
          >
            checkout
          </button>
          )}
          </Link>
          </nav>
          {/* </Link> */}
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        {/* // )} */}
      </section>
    </>
  );
};

export default ContextCart;
