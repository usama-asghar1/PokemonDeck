import {  Link } from "react-router-dom";


import "./Header.css"


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <span className="navbar-brand-name">PokemonDeck</span>
        </Link>
        </div>
    </nav>
  );
};

export default Header;