import { useEffect, useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Ebook } from "../Ebook/Ebook";
import { getImages } from "../../Feature/GetImages/GetImages";
import styles from "./BookPage.module.css";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner.jsx";
import Notiflix from "notiflix";
import { FavButton } from "../FavButton/FavButton";

export const BookPage = () => {
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState();
  let params = useParams();

  useEffect(() => {// get book data by id 
    async function fetchBookData() {
      try {
        const response = await axios.get(
          `https://gnikdroy.pythonanywhere.com/api/book/${params.bookId}`
        );
        setBookDetails(response.data);
      } catch (error) {
        Notiflix.Notify.failure("Something went wrong, please try again");
        navigate("/search");
      }
    }
    fetchBookData();
  }, []);

  if (!bookDetails) {
    return <LoaderSpinner />;
  }

  return (
    <div className={styles.book__info}>
      <p className={styles.book__title}>{bookDetails.title}</p>
      <img
        src={getImages(bookDetails)}
        className={styles.book__image}
        alt="book cover"
      />
      <div>
        <p className={styles.book__item}>Authors:</p>
        <ul className={styles.authors__list}>
          {bookDetails.agents.map((author) => (
            <li className={styles.authors__person} key={author.id}>
              {author.person}
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.book__item}>Downloads: {bookDetails.downloads}</p>
      <p className={styles.book__item}>Langauges: {bookDetails.languages}</p>

      <Ebook book={bookDetails} />

      <FavButton bookDetails={bookDetails} bookId={bookDetails.id} />
      <Outlet />
    </div>
  );
};
