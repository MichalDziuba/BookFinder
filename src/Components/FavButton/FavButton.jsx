import React, { useEffect } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../Feature/LocalStorage/LocalStorage";
import { useState } from "react";
import styles from "./FavButton.module.css";
export const FavButton = ({ bookId, bookDetails }) => {

    const btnClasses=[styles.button]
    const [buttonText, setButtonText] = useState("Add to favorites");
    const [disabled, isActive] = useState(false)
    
  useEffect(() => {
    const localStorageData = JSON.parse(loadFromLocalStorage("favBooks")) || []
    const localStorageDataID = localStorageData.map(
      (book) => book.id
    );
    if (localStorageDataID.includes(bookId)) {
        setButtonText("Added to favorites");
       isActive(true)
  
    }
  }, [buttonText]);

  const handleClick = () => {
    setButtonText("Added to favorites");
      saveToLocalStorage("favBooks", bookDetails);
    };
     if (disabled) {
       btnClasses.push(styles.disabled);
  }
  
  return (
      <button type="button"
          className={btnClasses.join(" ")}
          onClick={handleClick}
          
      >
         
      {buttonText}
    </button>
  );
};
