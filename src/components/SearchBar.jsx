import "../styles/SearchBar.scss";
import SearchBarLogo from "../assets/img/searchbar-logo.png";
import SearchIcon from "../assets/img/search-icon.png";
import Cart from "./Cart";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-logo">
        <img src={SearchBarLogo} alt="Logo" />
      </div>
      <div className="searchbar">
        <span>
          <img src={SearchIcon} alt="icon" />
        </span>
        <input type="text" placeholder="ჩაწერე საძიებო სიტყვა..." />
      </div>
      <Cart />
    </div>
  );
};

export default SearchBar;
