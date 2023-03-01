import { Link } from "react-router-dom";
import "../styles/Registration.scss";
import fb from "../assets/img/fb.svg";
import google from "../assets/img/google.svg";

const Registration = () => {
  return (
    <div className="registration-page">
      <div className="wrapper">
        <div className="container">
          <div className="registration-container"></div>
          <h1 className="registration-title">რეგისტრაცია</h1>
          <form action="" id="registration">
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="name">
                  <span>სახელი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="text" id="name" required />
              </div>
              <div className="input-line">
                <label htmlFor="surname">
                  <span>გვარი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="text" id="surname" min={3} required />
              </div>
            </div>
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="email">
                  <span>ელ. ფოსტა</span>
                  <span>*აუცილებელია</span>
                </label>
                <input
                  type="email"
                  id="mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder=" "
                  required
                />
              </div>
              <div className="input-line">
                <label htmlFor="tel">
                  <span>ტელეფონის ნომერი</span>
                </label>
                <input
                  type="tel"
                  id="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <div className="input-line">
                <label htmlFor="password">
                  <span>პაროლი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="password" id="password" />
              </div>
              <div className="input-line">
                <label htmlFor="re-password">
                  <span>გაიმეორე პაროლი</span>
                  <span>*აუცილებელია</span>
                </label>
                <input type="password" id="re-password" min={3} />
              </div>
            </div>
            <div className="stay-signed">
              <input type="checkbox" id="stay-signed" />
              <label htmlFor="stay-signed">
                მე წავიკითხე და ვეთანხმები <span>წესებსა და პირობებს</span>
              </label>
            </div>
            <div className="submit-container">
              <button className="submit-button">რეგისტრაცია</button>
              <p>
                თქვენ უკვე გაქვთ ანგარიში?{" "}
                <Link to="/Login">გაიარე ავტორიზაცია</Link>
              </p>
            </div>
          </form>
          <div className="social-login">
            <p>ან</p>
            <button className="fb-login">
              <img src={fb} alt="facebook" /> Facebook ავტორიზაცია
            </button>
            <button className="google-login">
              <img src={google} alt="google" /> Google ავტორიზაცია
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
