import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container">
          <div className="language-bar">
            <span>GEO</span>
            <span className="lang-divider"></span>
            <span>ENG</span>
          </div>
          <div className="nav-logo">
            <span>Logo</span>
          </div>
          <div className="menu-icon" onClick={toogleMenu}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                შესვლა
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Registration"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                რეგისტრაცია
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                გაქირავება
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Service"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                მომსახურება
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "nav-links activated" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                კონტაქტი
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
