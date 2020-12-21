import React, { useState, useContext } from "react";
import { context } from "../useContext";
import "./image.css";
import PropTypes from "prop-types";
//custom hook
import useHover from "../utils/useHover";

export default function Image(props) {
  const [hovered, ref] = useHover();

  //Props
  const { className, url, id, isFavorite, img } = props;

  //Hooks
  const { toggleFavorite, handleImages, images, removedItems } = useContext(
    context
  );

  //Function

  const displayCart = () => {
    //Find if the item is already in the cart
    const isInTheCart = images.some((img) => img.id === id);

    if (isInTheCart) {
      return (
        <i
          onClick={() => removedItems(id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => handleImages(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  const heartIcon = () => {
    if (isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(id)}
        ></i>
      );
    }
  };

  return (
    <div ref={ref} className={`${className} image-container`}>
      {displayCart()}
      {heartIcon()}
      <img src={url} />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
};
