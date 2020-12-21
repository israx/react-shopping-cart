import React, { useState, useContext } from "react";
import { context } from "../useContext";
import Item from "../components/item";
import "./shopping.css";

export default function Shopping() {
  //Hooks
  const { images, setImages } = useContext(context);
  const [on, setOn] = useState(false);
  const [message, setMessage] = useState(false);

  const cart = images.map((img) => <Item key={img.id} id={img.id} img={img} />);
  const price = images.length * 5.99;
  const displayPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  //Function
  function emptyCart() {
    console.log("working");
    setOn(true);
    setTimeout(() => {
      setMessage(true);
      setOn(false);
      setImages([]);
    }, 3000);
  }

  return (
    <div className="items-container">
      {message ? <h1>Order Placed</h1> : ""}
      {cart}
      <div className="total">
        <p>Total: {displayPrice} </p>
      </div>
      {images.length >= 1 && (
        <button onClick={emptyCart} className="check-out">
          {on ? "Ordering" : "Check out"}
        </button>
      )}
    </div>
  );
}
