import "../styles/FilterAcordion.scss";

import Plus from "../assets/img/Plus.svg";
import Minus from "../assets/img/Minus.svg";
import { useState } from "react";

const FilterAcordion = ({ title, open = false, filterList }) => {
  const [AcordionOpen, setAcordionOpen] = useState(open);

  const ToogleAcordionOpen = () => {
    setAcordionOpen(!AcordionOpen);
  };

  return (
    <div className="filter-acordion">
      <div className="filter-acordion-item">
        <div className="filter-acordion-item-heading">
          <p
            className="filter-acordion-item-title"
            onClick={ToogleAcordionOpen}
          >
            {title}
          </p>
          <p>
            <img
              src={AcordionOpen ? Minus : Plus}
              alt=""
              onClick={ToogleAcordionOpen}
            />
          </p>
        </div>
        <div
          className={
            AcordionOpen
              ? "filter-acordion-item-content opened"
              : "filter-acordion-item-content"
          }
        >
          <ul className="filter-list">
            {filterList.list.map((item, index) => (
              <li className="filter-list-item" key={item}>
                <input type={filterList.type} /> <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterAcordion;
