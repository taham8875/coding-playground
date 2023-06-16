import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

export default function Search({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search d-flex align-items-center - justify-content-center my-3"
    >
      <FontAwesomeIcon icon={faLocationDot} className="faLocationDot" />
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />
      <button type="submit" className="d-flex">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="faMagnifyingGlass"
        />
      </button>
    </form>
  );
}
