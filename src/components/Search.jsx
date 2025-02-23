import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [city, setCity] = useState("");

  const handleClick = () => {
    handleSearch(city);
    setCity("");
  };

  return (
    <div>
      <div className="d-flex ">
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="Enter City..."
          className="form-control rounded-sm me-1 shoadow-sm w-auto "
        />
        <button onClick={handleClick} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
