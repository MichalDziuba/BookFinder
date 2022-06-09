import styles from "./Ebook.module.css";
export const Ebook = ({ book }) => {
  //function to get url for ebook or txt file

  const data = book.resources;
  const text = data.find(
    (option) =>
      option.type === "text/html" || option.type === "text/html; charset=utf-8"
  );
  const eBook = data.find(
    (option) =>
      option.type === "text/plain" ||
      option.type === "text/plain; charset=utf-8"
  );
  if (text) {
    return (
      <a className={styles.link} href={text.uri} target="_blank">
        Read this book!{" "}
      </a>
    );
  }
  if (eBook) {
    return (
      <a className={styles.link} href={eBook.uri} target="_blank">
        Read this book!{" "}
      </a>
    );
  } else {
    <p className={styles.noInfo}>Sorry, u cant read this book right now!</p>;
  }
};
