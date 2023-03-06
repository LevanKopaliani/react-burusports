import "./Auth.scss";

const Auth = ({ className }) => {
  return (
    <div className={"auth " + className}>
      <div className="auth-form">
        <h1 className="auth-title">ავტორიზაცია</h1>
        <div className="input-line">
          <label htmlFor="email">ელ. ფოსტის მისამართი</label>
          <input type="email" id="email" placeholder=" " required />
        </div>
        <div className="input-line">
          <label htmlFor="password" className="pssw-label">
            <span>პაროლი</span> <span>დაგავიწყდა პაროლი?</span>
          </label>
          <input type="password" id="password" placeholder=" " required />
        </div>
        <button className="login-btn">შესვლა</button>
      </div>
      <div className="reg-form">
        <h1 className="reg-title">რეგისტრაცია</h1>
        <div className="input-line">
          <label htmlFor="email">ელ. ფოსტის მისამართი</label>
          <input type="email" id="email" placeholder=" " required />
        </div>
        <button className="reg-btn">ანგარიშის შექმნა</button>
      </div>
    </div>
  );
};

export default Auth;
