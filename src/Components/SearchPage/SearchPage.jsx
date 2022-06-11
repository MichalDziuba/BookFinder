import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { getImages } from "../../Feature/GetImages/GetImages";
import { shortenText } from "../../Feature/ShortenText/ShortenText";
import styles from "./SearchPage.module.css";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";
import { fetchData } from "../../Feature/Api/FetchData";

export const SearchPage = () => {
  let params = useParams();
  const [keyword, setKeyword] = useState();
  const [books, setBooks] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const searching = (e) => { //For search in 'Quick search'

    e.preventDefault();
    const form = e.target;
    const input = document.querySelector("input").value;
    setAuthor();
    setTitle();
    setDescription();
    setKeyword(input);
    form.reset();
  };

  const advancedSearching = (e) => { //For  search in 'Advanced search'
    e.preventDefault();
    const form = e.target;
    const inputAuthor = document.querySelector("#author").value;
    const inputTitle = document.querySelector("#title").value;
    const inputDescription = document.querySelector("#description").value;
    setKeyword();
    setAuthor(inputAuthor);
    setTitle(inputTitle);
    setDescription(inputDescription);
    form.reset();
  };

  useEffect(() => {
    if (keyword===null&&books===null&&author===null&&title===null&&description===null) {
     return
    }
     
   
    fetchData({
      keyword: keyword,
      author: author,
      title: title,
      description: description,
      currentPage: currentPage,
      setLoading: setLoading,
      setBooks: setBooks,
      setTotalPages: setTotalPages,
    });
  }, [keyword, currentPage, author, title, description]);

  const setPage = (page) => { // For pagination
    setCurrentPage(page);
  };

  if (isLoading === true) {
    return <LoaderSpinner />;
  }
  return (
    <div className={styles.searching__wrapper}>
      {!params.bookId && (
        <div>
          <form onSubmit={searching} className={styles.searching__form}>
            <label className={styles.searching__label}>Quick search:</label>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search"
              className={styles.searching__input}
            />
            <button type="submit" className={styles.search__button}>
              Search
            </button>
          </form>
          <div>
            <p>Advanced Searching:</p>
            <form
              onSubmit={advancedSearching}
              className={styles.searching__form}
            >
              <label className={styles.searching__label}>Author:</label>
              <input
                id="author"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Author"
                className={styles.searching__input}
              />
              <label className={styles.searching__label}>Title:</label>
              <input
                id="title"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Title"
                className={styles.searching__input}
              />
              <label className={styles.searching__label}>Description:</label>
              <input
                id="description"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Description"
                className={styles.searching__input}
              />
              <button type="submit" className={styles.search__button}>
                Serach
              </button>
            </form>
          </div>
          {!books && (
            <p className={styles.searching__nothing}>Search something!</p>
          )}
          {books && (
            <div>
              <ul className={styles.results__list}>
                {books.map((book) => (
                  <li key={book.id} className={styles.results__item}>
                    <Link
                      to={`/search/${book.id}`}
                      key={book.id}
                      className={styles.item__link}
                    >
                      <img
                        className={styles.item__img}
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
            </div>
          )}
          <div className={styles.pagination}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalPages}
              pageSize={10}
              onPageChange={(page) => setPage(page)}
            />
          </div>
        </div>
      )}
      {params.bookId && <Outlet />}
    </div>
  );
};
