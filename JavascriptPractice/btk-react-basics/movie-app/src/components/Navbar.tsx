interface NavbarProps {
  children: React.ReactNode;
}
export function Navbar({ children }: NavbarProps) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}

interface NavSearchResultsProps {
  totalResults: number;
}

export function NavSearchResults({ totalResults }: NavSearchResultsProps) {
  return (
    <div className="col-4 text-end">
      <strong>{totalResults}</strong> results found.
    </div>
  );
}

interface NavSearchProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}
export function NavSearch({
  searchQuery,
  onSearchQueryChange,
}: NavSearchProps) {
  return (
    <div className="col-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(event) => onSearchQueryChange(event.target.value)}
      ></input>
    </div>
  );
}

export function NavLogo() {
  return (
    <div className="col-4">
      <i className="bi bi-film me-2"></i>
      Movie App
    </div>
  );
}
