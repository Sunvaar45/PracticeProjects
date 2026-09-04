import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <>
      <nav className="bg-primary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">Movie App</div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search movies..."
              ></input>
            </div>
            <div className="col-4 text-end">
              <strong>5</strong> results found.
            </div>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="row mt-2">
          <div className="col-md-9">
            <div className="movie-list">
              <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                {movies.map((movie) => (
                  <div className="col mb-2" key={movie.Id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={movie.Poster}
                        alt={movie.Title}
                      ></img>
                      <div className="card-body">
                        <h6 className="card-title">{movie.Title}</h6>
                        <div>
                          <span className="badge bg-secondary">
                            {movie.Year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3">Selected Movie List</div>
        </div>
      </main>
    </>
  );
}

export default App;
