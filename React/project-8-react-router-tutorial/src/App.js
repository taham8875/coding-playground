import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookLayout from "./pages/BookLayout";
import BooksRoutes from "./pages/BooksRoutes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BooksRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
