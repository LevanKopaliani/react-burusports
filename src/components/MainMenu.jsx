import "rc-menu/assets/index.css";
import "../styles/MainMenu.scss";
import ArrowRight from "../assets/img/arrowright.png";

const MainMenu = () => {
  return (
    <nav className="mainmenu">
      <ul className="menu">
        <li className="menu-item">
          სპორტი და ინსტრუმენტები
          <div className="menu-item-content">
            <ul className="menu-category-list">
              <li className="menu-category-item">
                test1
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
                <div className="category-content">
                  <div className="category-heading">
                    <p>category name</p>
                  </div>
                  <ul className="category-link-list">
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                  </ul>
                </div>
              </li>
              <li className="menu-category-item">
                test2
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
              <li className="menu-category-item">
                test3
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          ტანსაცმელი
          <div className="menu-item-content">
            <ul className="menu-category-list">
              <li className="menu-category-item">
                test1
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
                <div className="category-content">
                  <div className="category-heading">
                    <p>category name</p>
                  </div>
                  <ul className="category-link-list">
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                  </ul>
                </div>
              </li>
              <li className="menu-category-item">
                test2
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
              <li className="menu-category-item">
                test3
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          ფეხსაცმელი
          <div className="menu-item-content">
            <ul className="menu-category-list">
              <li className="menu-category-item">
                test1
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
                <div className="category-content">
                  <div className="category-heading">
                    <p>category name</p>
                  </div>
                  <ul className="category-link-list">
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                  </ul>
                </div>
              </li>
              <li className="menu-category-item">
                test2
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
              <li className="menu-category-item">
                test3
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          ბრენდები
          <div className="menu-item-content">
            <ul className="menu-category-list">
              <li className="menu-category-item">
                test1
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
                <div className="category-content">
                  <div className="category-heading">
                    <p>category name</p>
                  </div>
                  <ul className="category-link-list">
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                  </ul>
                </div>
              </li>
              <li className="menu-category-item">
                test2
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
              <li className="menu-category-item">
                test3
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          OUTLET
          <div className="menu-item-content">
            <ul className="menu-category-list">
              <li className="menu-category-item">
                test1
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
                <div className="category-content">
                  <div className="category-heading">
                    <p>category name</p>
                  </div>
                  <ul className="category-link-list">
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                    <li className="category-link">link1</li>
                  </ul>
                </div>
              </li>
              <li className="menu-category-item">
                test2
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
              <li className="menu-category-item">
                test3
                <span>
                  <img src={ArrowRight} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
