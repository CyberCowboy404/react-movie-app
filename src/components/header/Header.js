import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "components/search/Search";

function Header() {
  return (
    <>
      <header className="site-header">
        <Link to="/">
          <img className="logo" width="150" src="/logo.png" alt="logo" />
        </Link>
        <div className="site-header__search-box">
          <Search />
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header;
