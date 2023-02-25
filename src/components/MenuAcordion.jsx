import React from "react";
import { children, useState } from "react";
import "../styles/MenuAcordion.scss";
import ColapseImg from "../assets/img/colapse-img.png";

const MenuAcordion = ({ title, content, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="menu-acordion">
      <div className="acordion-item">
        <div className="acordion-item-title">
          <div
            className="acordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            {title}
          </div>
          <div className="colapse-img" onClick={() => setIsActive(!isActive)}>
            <img
              src={isActive ? ColapseImg : ColapseImg}
              style={isActive ? { transform: "rotate(90deg)" } : null}
              alt="colapse"
            />
          </div>
        </div>

        {isActive && <div className="acordion-content">{children}</div>}
      </div>
    </div>
  );
};

export default MenuAcordion;
