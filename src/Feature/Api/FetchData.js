import axios from "axios";
const baseURL = "https://gnikdroy.pythonanywhere.com/api/";
export const api = axios.create({ baseURL });

export async function fetchData({
  keyword,
  author,
  title,
  subject,
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
      if (subject) {
      response = await api.get(
        `/book/?description_contains=${subject}`
          );
          if (currentPage && subject) { 
                response = await api.get(`/book/?description_contains=${subject}&page=${currentPage}`);
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
      if (author && subject) {

      response = await api.get(
        `/book/?agent_name_contains=${author}&description_contains=${subject}`
          );
          if (currentPage && author && subject) { 
                response = await api.get(`/book/?agent_name_contains=${author}&description_contains=${subject}&page=${currentPage}`);
          }
    }
      if (title && subject) {

      response = await api.get(
        `/book/?title_contains=${title}&description_contains=${subject}`
          );
          if (currentPage && title && subject) { 
                response = await api.get(`/book/?title_contains=${title}&description_contains=${subject}&page=${currentPage}`);
          }
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

