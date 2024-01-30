import { useState, useEffect } from "react";
import Search from "./Components/ShowSearch";
import FetchResults from "./Components/ResultsList";

import "./App.css";

function App() {
  const [tvShowSearch, setTvShowSearch] = useState("");
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${tvShowSearch}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setShows(response);
      });
  }, [tvShowSearch]);

  return (
    <>
      <h1>TV Shows</h1>
      <Search setTvShowSearch={setTvShowSearch} />

      <ul>
        {shows.map(({ show }) => {
          console.log(show);
          return (
            <div className="Results">
              <FetchResults
                showName={show.name}
                showGenre={show.genres}
                showSummary={show.summary}
                showImage={show.image}
                showRating={show.rating}
                showUrl={show.url}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
