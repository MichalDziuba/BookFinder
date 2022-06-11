import axios from "axios";
import Notiflix from "notiflix";
const baseURL = "https://gnikdroy.pythonanywhere.com/api/";
export const api = axios.create({ baseURL });

export async function fetchData({
  keyword,
  author,
  title,
  description,
  currentPage,
  setLoading,
  setBooks,
  setTotalPages,
}) {
  let response;
  try {
    setLoading(true);
      if (keyword) {

      response = await api.get(
        `/book/?search=${keyword}`
      );
      if (currentPage && keyword) {
        response = await api.get(
          `/book/?page=${currentPage}&search=${keyword}`
        );
      }
    }
      if (author) {

      response = await api.get(
        `/book/?agent_name_contains=${author}`
          );
          if (currentPage && author) { 
              response = await api.get(`/book/?agent_name_contains=${author}&page=${currentPage}`);
          }
    }
      if (title) {
      response = await api.get(
        `/book/?title_contains=${title}`
          );
          if (currentPage && title) { 
                response = await api.get(`/book/?title_contains=${title}&page=${currentPage}`);
          }
    }
      if (description) {
      response = await api.get(
        `/book/?description_contains=${description}`
          );
          if (currentPage && description) { 
                response = await api.get(
                  `/book/?description_contains=${description}&page=${currentPage}`
                );
          }
    }
      if (author && title) {

      response = await api.get(
        `/book/?agent_name_contains=${author}&title_contains=${title}`
          );
          if (currentPage && author && title) { 
                response = await api.get(`/book/?agent_name_contains=${author}&title_contains=${title}&page=${currentPage}`);
          }
    }
      if (author && description) {
        response = await api.get(
          `/book/?agent_name_contains=${author}&description_contains=${description}`
        );
        if (currentPage && author && description) {
          response = await api.get(
            `/book/?agent_name_contains=${author}&description_contains=${description}&page=${currentPage}`
          );
        }
      }
      if (title && description) {
        response = await api.get(
          `/book/?title_contains=${title}&description_contains=${description}`
        );
        if (currentPage && title && description) {
          response = await api.get(
            `/book/?title_contains=${title}&description_contains=${description}&page=${currentPage}`
          );
        }
      }
    if (response.data.count ===0) {
      Notiflix.Notify.failure("Sorry, we didn't find anything! :( ")
    }
    setBooks(response.data.results);
    setTotalPages(response.data.count);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    setTotalPages(0);
    setBooks();
  }
}

