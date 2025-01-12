import React from "react";
import "./App.css";
import ShoppingApplicationNew from "./ch9/CQRS/ShoppingApplicationNew";
import { ShoppingCartProvider } from "./ch9/CQRS/ShoppingCartContext";
import { PizzaShopApp } from "./ch7/App";

function App() {
  return (
    // <div className="app" data-testid="applicationContainer">
    //   <ShoppingCartProvider>
    //     <ShoppingApplicationNew />
    //   </ShoppingCartProvider>
    // </div>
    <PizzaShopApp />
  );
}

export default App;
