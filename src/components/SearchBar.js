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
    <nav className="navbar mb-2" style={{ backgroundColor: "#ffffcc" }}>
      <div className="container-fluid">
        <a className="navbar-brand">iMAGEN</a>
        <form
          className="d-flex justify-content-center"
          role="search"
          onSubmit={handleFormSubmit}
        >
          <input
            className="form-control me-3"
            onChange={handleChange}
            value={term}
            type="search"
            placeholder="Search whatever!"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
            onClick={handleFormSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;

//

// //
// <div classNameName="search-bar">
//   <form onSubmit={handleFormSubmit}>
//     <label>Enter Search Term</label>
//     <input
//       value={term}
//       onChange={handleChange}
//       type="text"
//       classNameName="form-control"
//       placeholder="Search whatever you like!"
//     />
//     <button
//       classNameName="btn btn-outline-secondary"
//       type="button"
//       id="button-addon2"
//       onClick={handleFormSubmit}
//     >
//       Search
//     </button>
//   </form>
// </div>;
