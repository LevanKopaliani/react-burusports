import "../styles/Order.scss";
import TabDivider from "../assets/img/tabdivider.svg";
import { useState } from "react";
import Auth from "./Tabs/Auth";
import Delivery from "./Tabs/Delivery";
import ConfirmOrder from "./Tabs/ConfirmOrder";

const Order = () => {
  const [currentTab, setCurrentTab] = useState("auth");

  const handleChangeTab = (e) => {
    e.stopPropagation();
    setCurrentTab(e.currentTarget.id);
  };

  return (
    <div className="order">
      <div className="wrapper">
        <div className="container">
          <div className="order-page-container">
            <h1 className="title">შეძენა</h1>
            <div className="order-tabs">
              <p
                className={currentTab === "auth" ? "active" : null}
                id="auth"
                onClick={handleChangeTab}
              >
                <span>ავტორიზაცია</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p
                className={currentTab === "delivery" ? "active" : null}
                id="delivery"
                onClick={handleChangeTab}
              >
                <span>მიწოდების ინფორმაცია</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p
                className={currentTab === "payment" ? "active" : null}
                id="payment"
                onClick={handleChangeTab}
              >
                <span>გადახდა</span>
                <span className="tab-divider">
                  <img src={TabDivider} alt="" />
                </span>
              </p>
              <p
                className={currentTab === "confirm" ? "active" : null}
                id="confirm"
                onClick={handleChangeTab}
              >
                <span>დადასტურება</span>
              </p>
            </div>
            <div className="tab-content">
              <Auth className={currentTab === "auth" ? "visible" : "hidden"} />
              <Delivery
                className={currentTab === "delivery" ? "visible" : "hidden"}
              />
              <div className={currentTab === "payment" ? "visible" : "hidden"}>
                payment
              </div>
              <ConfirmOrder
                className={currentTab === "confirm" ? "visible" : "hidden"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
