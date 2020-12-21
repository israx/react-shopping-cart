import React, { useContext } from "react";
import { context } from "../useContext";
import "./item.css";
//custom hook
import useHover from "../utils/useHover";

export default function Item(props) {
  const [hovered, ref] = useHover();

  const { removedItems } = useContext(context);
  const { id, img } = props;

  const trashCan = hovered ? (
    <i
      onClick={() => removedItems(id)}
      ref={ref}
      className="ri-delete-bin-fill"
    ></i>
  ) : (
    <i
      onClick={() => removedItems(id)}
      ref={ref}
      className="ri-delete-bin-line"
    ></i>
  );

  return (
    <div className="cart-item">
      {trashCan}
      <img src={img.url} alt="img" />
      <p>$5.99</p>
    </div>
  );
}
