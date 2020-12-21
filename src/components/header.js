import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../useContext";

export default function Header() {
  const { images } = useContext(context);

  function displayCart() {
    console.log(images.length);
    if (images.length >= 1) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    }
  }

  return (
    <header>
      <ul>
        <li>
          <Link to="/">PhotoPic</Link>
        </li>
        <li>
          <Link to="/shopping">{displayCart()}</Link>
        </li>
      </ul>
    </header>
  );
}
