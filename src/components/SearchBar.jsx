import "../styles/SearchBar.scss";
import SearchBarLogo from "../assets/img/searchbar-logo.png";
// import SearchIcon from "../assets/img/search-icon.svg";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-logo">
        <Link to="/">
          <img src={SearchBarLogo} alt="Logo" />
        </Link>
      </div>
      <div className="searchbar">
        <span>
          {/* <img src={SearchIcon} alt="icon" /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.4436 16.4438L20.9999 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
        <input type="text" placeholder="ჩაწერე საძიებო სიტყვა..." />
      </div>
      <CartIcon />
    </div>
  );
};

export default SearchBar;
