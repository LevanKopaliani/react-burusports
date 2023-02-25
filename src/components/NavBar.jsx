import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.scss";
import { IconContext } from "react-icons";

// logo
import NavBarLogo from "../assets/img/nav-logo.png";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import MenuAcordion from "./MenuAcordion";

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
            <img src={NavBarLogo} alt="logo" />
          </div>
          <div className="menu-icon" onClick={toogleMenu}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            <div className="menu-header">
              <div className="menu-icon" onClick={toogleMenu}>
                <FaTimes />
              </div>
              <div className="nav-logo">
                <img src={NavBarLogo} alt="logo" />
              </div>
            </div>
            <nav className="mobile-menu">
              <MenuAcordion title={"სპორტის მიხედვით"}>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"კემპინგი და თევზაობა"}>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"ვარჯიში და ფიტნესი"}>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"ცურვა და წყლის სპორტი"}>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"საათები და ელექტრონიკა"}>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"ჩანთები"}>
                <p>test text</p>
              </MenuAcordion>
              <MenuAcordion title={"აქსესუარები"}>
                <p>test text</p>
              </MenuAcordion>
            </nav>
            <li className="nav-item login" id="login">
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
            <li className="nav-item registration" id="registration">
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
            <div className="language-bar">
              <span>GEO</span>
              <span className="lang-divider"></span>
              <span>ENG</span>
            </div>
          </ul>
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
