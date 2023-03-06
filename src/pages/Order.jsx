import "../styles/Order.scss";
import TabDivider from "../assets/img/tabdivider.svg";
import { useState } from "react";
import Auth from "./Tabs/Auth";
import Delivery from "./Tabs/Delivery";

const Order = () => {
  const [currentTab, setCurrentTab] = useState("auth");

  const handleChangeTab = (e) => {
    e.stopPropagation();
    setCurrentTab(e.currentTarget.id);
    console.log(currentTab);
  };

  return (
    <div className="order">
      <div className="wrapper">
        <div className="container">
          <div className="order-page-container">
            <h1 className="title">შეძენა</h1>
            <div className="order-tabs">
              <p className="active" id="auth" onClick={handleChangeTab}>
                <span>ავტორიზაცია</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p id="delivery" onClick={handleChangeTab}>
                <span>მიწოდების ინფორმაცია</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p>
                <span>გადახდა</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p>დადასტურება</p>
            </div>
            <div className="tab-content">
              <Auth className={currentTab === "auth" ? "visible" : "hidden"} />
              <Delivery
                className={currentTab === "delivery" ? "visible" : "hidden"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
