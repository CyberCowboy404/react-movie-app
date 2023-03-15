import "./Header.scss";
import Search from "components/search/Search";

const Header = () => {
    return (
        <>
            <header className="site-header">
                <img className="logo" width="150" src="logo.png" alt="logo" />
                <div className="site-header__search-box">
                    <Search   />
                </div>
            </header>
            <hr />
        </>
    );
};

export default Header;