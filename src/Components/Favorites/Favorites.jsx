import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../../Feature/LocalStorage/LocalStorage";
import { Link } from "react-router-dom";
import { shortenText } from "../../Feature/ShortenText/ShortenText";
import { getImages } from "../../Feature/GetImages/GetImages";
import styles from "./Favorites.module.css";
export const Favorites = () => {
  const [favoritesBooks, setFavBooks] = useState([]);

  useEffect(() => {//get data from localStorage 
    const favBooks = loadFromLocalStorage("favBooks");
    setFavBooks(JSON.parse(favBooks));
  }, []);


  const deleteBook = (id) => {
    setFavBooks(favoritesBooks.filter((book) => book.id !== id));
    
  }
  useEffect(() => { //updating data
    localStorage.setItem("favBooks", JSON.stringify(favoritesBooks));
  }, [favoritesBooks])
  
  return (
    <div>
      <div>
        {favoritesBooks === null||favoritesBooks.length===0 ? (
          <p className={styles.nothingtoshow}>You haven't added your favorite books yet.</p>
        ) : (
          <ul className={styles.favorites__list}>
            {favoritesBooks.map((book) => (
              <li className={styles.favorites__item} key={book.id}>
                <button type="button" className={styles.button__delete} title="Delete" onClick={()=>deleteBook(book.id)}>Delete from favorites</button>
                <Link
                  to={`/search/${book.id}`}
                  key={book.id}
                  className={styles.item__link}
                >
                  <img
                    className={styles.item__image}
                    src={getImages(book)}
                    alt="book cover"
                  ></img>
                  <p className={styles.item__title}>
                    {shortenText(book.title)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
