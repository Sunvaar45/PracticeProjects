export function Navbar() {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">
          <NavLogo />
          <NavSearch />
          <NavSearchResults />
        </div>
      </div>
    </nav>
  );
}

function NavSearchResults() {
  return (
    <div className="col-4 text-end">
      <strong>5</strong> results found.
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
