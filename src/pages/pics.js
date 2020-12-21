import React, { useContext } from "react";

import { context } from "../useContext";
import { getClass } from "../utils/getClass";
import Image from "../components/image";

export default function Pics() {
  const { pics } = useContext(context);

  const images = pics.map((image, i) => (
    <Image
      img={image}
      key={image.id}
      id={image.id}
      url={image.url}
      className={getClass(i)}
      isFavorite={image.isFavorite}
    />
  ));
  return <div className="gallery">{images}</div>;
}
