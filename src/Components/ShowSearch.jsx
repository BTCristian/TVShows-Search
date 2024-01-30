import { useState } from "react";

function Search(props) {
  const { GetTvShows } = props;
  const { setTvShowSearch } = props;
  return (
    <>
      <form alert="type in your TV Show" className="searchForm">
        <input
          placeholder="Search for your tv show"
          type="text"
          id="tvShow"
          onChange={(event) => {
            setTvShowSearch(event.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Search;
