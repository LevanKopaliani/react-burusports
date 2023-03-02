import "../styles/ChangePassword.scss";

const ChangePassword = () => {
  return (
    <div className="change-password">
      <h1 className="change-password-title">პაროლის შეცვლა</h1>
      <form action="">
        <label htmlFor="password">არსებული პაროლი</label>
        <input type="password" id="password" placeholder=" " required />
        <div className="new-password">
          <div className="input-line">
            <label htmlFor="new-password">ახალი პაროლი</label>
            <input type="password" id="new-password" placeholder=" " required />
          </div>
          <div className="input-line">
            <label htmlFor="repeat-password">გაიმეორეთ ახალი პაროლი</label>
            <input
              type="password"
              id="repeat-password"
              placeholder=" "
              required
            />
          </div>
        </div>
        <button className="change-password-button">შენახვა</button>
      </form>
    </div>
  );
};

export default ChangePassword;
