import {  Link } from "react-router-dom";
import "./PageHeader.css"


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <span className="navbar-brand-name">Back to Search</span>
        </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link first" to="/">
              Home
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Header;