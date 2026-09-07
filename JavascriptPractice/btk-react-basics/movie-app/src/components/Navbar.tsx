import type { IMovie } from "../types";

interface NavbarProps {
  movies: IMovie[];
}

export function Navbar({ movies }: NavbarProps) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">
          <NavLogo />
          <NavSearch />
          <NavSearchResults movies={movies} />
        </div>
      </div>
    </nav>
  );
}

interface NavSearchResultsProps {
  movies: IMovie[];
}

function NavSearchResults({ movies }: NavSearchResultsProps) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> results found.
    </div>
  );
}

function NavSearch() {
  return (
    <div className="col-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search movies..."
      ></input>
    </div>
  );
}

function NavLogo() {
  return (
    <div className="col-4">
      <i className="bi bi-film me-2"></i>
      Movie App
    </div>
  );
}
