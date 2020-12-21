import React, { useState, useEffect } from "react";

const context = React.createContext();

export default function ContextProvider(props) {
  const [pics, setPics] = useState([]);
  const [images, setImages] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  //Functions

  function toggleFavorite(id) {
    const newList = pics.map((item) => {
      if (item.id === id) {
        console.log(id);
        console.log(!item.isFavorite);
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });

    setPics(newList);
  }

  function handleImages(img) {
    setImages((prev) => [...prev, img]);
  }

  function removedItems(id) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((value) => setPics(value));
  }, []);

  return (
    <context.Provider
      value={{
        pics,
        toggleFavorite,
        handleImages,
        images,
        removedItems,
        setImages,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider as Provider };
