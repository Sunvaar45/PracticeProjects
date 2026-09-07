export function Navbar() {
  return (
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
  );
}
