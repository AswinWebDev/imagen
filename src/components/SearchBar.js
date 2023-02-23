import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Search whatever you like!"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleFormSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
