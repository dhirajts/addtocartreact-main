import React from "react";
// import Cart from "./component/Cart";
import Cart from "./components/Cart";
import CheckoutCart from "./components/CheckoutCart";
// import { BrowserRouter, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      {/* <Routes>  */}
        <Route path = '/' exact >
          <Cart/>
          </Route>
        <Route path = '/checkout'  >
          <CheckoutCart/>
          </Route>
      {/* </Routes> */}
      </div>
  </BrowserRouter>
  );
};

export default App;
