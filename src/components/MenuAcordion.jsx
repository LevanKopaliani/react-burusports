import React from "react";
import { useState } from "react";
import "../styles/MenuAcordion.scss";
import ColapseImg from "../assets/img/colapse-img.png";
import { useRef } from "react";
import { useEffect } from "react";

const MenuAcordion = ({ title, content, children }) => {
  const [isActive, setIsActive] = useState(true);
  const [height, setHeight] = useState();

  let contentHeight = useRef();

  useEffect(() => {
    let offheight = contentHeight.current.offsetHeight;
    setHeight(offheight);
    setIsActive(false); // close acordion after take ofsetheight
  }, []);

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
        <div
          className="acordion-content"
          ref={contentHeight}
          style={isActive ? { height: `${height}px` } : { height: `0px` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuAcordion;
