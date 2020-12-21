import React, { useState, useRef, useEffect } from "react";

export default function useHover() {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);

  function enter() {
    setHover(true);
  }

  function leave() {
    setHover(false);
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}
