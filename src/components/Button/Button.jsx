import React from "react";
import css from "./Button.module.css";


export const LoadMoreButton = ({ onClick, isVisible }) => {
  if (!isVisible) {
    return ;
  }

    return (
      <div className={css.buttonWrapper} >
      <button className={css.button} onClick={onClick}>Load more</button></div>
    );
  }

