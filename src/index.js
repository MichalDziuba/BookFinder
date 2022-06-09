import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { NotFound } from "./Components/NotFound/NotFound";
import {HomePage} from "./Components/HomePage/HomePage";
import { SearchPage } from "./Components/SearchPage/SearchPage";
import { Favorites } from "./Components/Favorites/Favorites";
import { BookPage } from "./Components/BookPage/BookPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback="Please wait a second">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />}>
            <Route path=":bookId" element={<BookPage />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);


reportWebVitals();
