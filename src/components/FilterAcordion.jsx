import "../styles/FilterAcordion.scss";

import Plus from "../assets/img/Plus.svg";
import Minus from "../assets/img/Minus.svg";
import { useState } from "react";

const FilterAcordion = ({ title, open = false, filterList }) => {
  const [AcordionOpen, setAcordionOpen] = useState(open);
  const [showMoreOpen, setshowMoreOpen] = useState(false);

  const ToogleAcordionOpen = () => {
    setAcordionOpen(!AcordionOpen);
  };

  const ToogleShowMore = () => {
    setshowMoreOpen(!showMoreOpen);
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
            {filterList.list.slice(0, 6).map((item, index) => (
              <li className="filter-list-item" key={item}>
                <input type={filterList.type} /> <p>{item}</p>
              </li>
            ))}
            {showMoreOpen &&
              filterList.list.slice(6).map((item) => (
                <li className="filter-list-item" key={item}>
                  <input type={filterList.type} /> <p>{item}</p>
                </li>
              ))}
            {filterList.list.length > 6 &&
              (showMoreOpen ? (
                <p className="show-less" onClick={ToogleShowMore}>
                  ნაკლების ჩვენება
                </p>
              ) : (
                <p className="show-more" onClick={ToogleShowMore}>
                  მეტის ჩვენება
                </p>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterAcordion;
