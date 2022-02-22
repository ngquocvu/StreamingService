import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../assets/icons/Search";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    navigate(`/search?q=${search}`);
  };

  return (
    <div className="relative mx-auto text-gray-200">
      <input
        className="border-2 border-gray-700 bg-gray-700 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={handleOnClick}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
