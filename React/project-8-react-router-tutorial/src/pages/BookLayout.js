import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const number = searchParams.get("n");
  return (
    <>
      <Link className="d-block" to="/books/1">
        Book 1
      </Link>
      <Link className="d-block" to="/books/2">
        Book 2
      </Link>
      <Link className="d-block" to="/books/3">
        Book 3
      </Link>
      <Link className="d-block" to="/books/new">
        New Book
      </Link>
      <Outlet />
      <input
        type="number"
        value={number || ""}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
