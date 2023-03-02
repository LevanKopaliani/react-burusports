import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import "../styles/Breadcrumbs.scss";

const routes = [
  { path: "/", breadcrumb: "მთავარი" },
  { path: "/Contact", breadcrumb: "კონტაქტი" },
  { path: "/Login", breadcrumb: "შესვლა" },
  { path: "/Registration", breadcrumb: "რეგისტრაცია" },
  { path: "/Account", breadcrumb: "ჩემი ანგარიში" },
  { path: "/Account/Change-email", breadcrumb: "ელ. ფოსტის შეცვლა" },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          key={match.pathname}
          to={match.pathname}
          className={
            match.pathname === location.pathname
              ? "breadcrumbs-active"
              : "breadcrumbs-not-active"
          }
        >
          {breadcrumb} <span> &#183; </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
