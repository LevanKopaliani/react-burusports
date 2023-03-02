import "../styles/ChangeEmail.scss";

const ChangeEmail = () => {
  return (
    <div className="change-email">
      <h1 className="change-email-title">ელ. ფოსტის შეცვლა</h1>
      <form action="">
        <label htmlFor="email">არსებული ელ. ფოსტა</label>
        <input
          type="email"
          id="email"
          placeholder=" "
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <div className="new-email">
          <div className="input-line">
            <label htmlFor="new-email">ახალი ელ. ფოსტა</label>
            <input
              type="email"
              id="new-email"
              placeholder=" "
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div className="input-line">
            <label htmlFor="repeat-email">გაიმეორეთ ელ. ფოსტა</label>
            <input
              type="email"
              id="repeat-email"
              placeholder=" "
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
        </div>
        <button className="change-email-button">შენახვა</button>
      </form>
    </div>
  );
};

export default ChangeEmail;
