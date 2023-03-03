import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../styles/Account.scss";
const Account = () => {
  return (
    <div className="account">
      <div className="wrapper">
        <div className="container">
          <div className="account-container">
            <h1 className="account-title">ჩემი ანგარიში</h1>
            <div className="account-content">
              <div className="content-tabs">
                <nav>
                  <NavLink
                    to="/Account/"
                    className={({ isActive }) =>
                      isActive
                        ? "content-tabs-item active-tab"
                        : "content-tabs-item"
                    }
                  >
                    ჩემი შეკვეთები
                  </NavLink>
                  <NavLink
                    to="/Account/Change-email"
                    className={({ isActive }) =>
                      isActive
                        ? "content-tabs-item active-tab"
                        : "content-tabs-item"
                    }
                  >
                    ელ. ფოსტის შეცვლა
                  </NavLink>
                  <NavLink
                    to="/Account/Change-password"
                    className={({ isActive }) =>
                      isActive
                        ? "content-tabs-item active-tab"
                        : "content-tabs-item"
                    }
                  >
                    პაროლის შეცვლა
                  </NavLink>
                </nav>
              </div>
              <div className="content-info">
                <Outlet />
              </div>
            </div>
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
