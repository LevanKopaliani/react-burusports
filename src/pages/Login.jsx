import "../styles/Login.scss";
import fb from "../assets/img/fb.svg";
import google from "../assets/img/google.svg";
import Breadcrumbs from "../components/Breadcrumbs";

const Login = () => {
  return (
    <div className="loginpage">
      <div className="wrapper">
        <div className="container">
          <div className="login-container">
            <h1 className="login-title">ავტორიზაცია</h1>
            <form action="">
              <div className="input-box">
                <div className="input-line">
                  <label htmlFor="email">ელ. ფოსტა</label>
                  <input type="email" id="email" />
                </div>
                <div className="input-line">
                  <label htmlFor="password">პაროლი</label>
                  <input type="password" id="password" />
                </div>
              </div>
              <div className="stay-signed">
                <input type="checkbox" id="stay-signed" />
                <label htmlFor="stay-signed">დამტოვე ავტორიზებული</label>
              </div>
              <div className="submit-container">
                <p>დაგავიწყდა პაროლი?</p>
                <button className="submit-button">შესვლა</button>
              </div>
              <p className="registration">
                <span>არ გაქვთ ანგარიში?</span>დარეგისტრირდი ეხლავე!
              </p>
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
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
