import MainMenu from "../components/MainMenu";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <div className="header-container">
            <NavBar />
            <SearchBar />
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
