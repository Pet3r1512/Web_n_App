import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const apiLink = "https://www.omdbapi.com/?apikey=cd6623af";
  const searchMovie = async (title) => {
    const call = await fetch(`${apiLink}&s=${title}`);
    const response = await call.json();
    setMovies(response.Search);
    console.log(response.Search);
  };
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    searchMovie({ search });
  }, [search]);
  return (
    <div className="App">
      <div className="search_bar">
        <input
          type="text"
          placeholder="Enter name of a film"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => searchMovie(search)}>Search</button>
      </div>
      <div className="result">
        {movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
