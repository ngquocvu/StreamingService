import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../../components/CardList";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get("q");
  const { data, loading, error } = useFetch(
    `https://api.tvmaze.com/search/shows?q=${searchString}`
  );
  return (
    data && (
      <div className="px-4 max-w-5xl">
        <CardList
          description=""
          data={data}
          loading={loading}
          limit={data.length}
          type="searchShow"
          loadMoreBtn={false}
        />
      </div>
    )
  );
};

export default Search;