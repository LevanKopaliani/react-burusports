import "../styles/Footer.scss";
import FooterLogo from "../assets/img/searchbar-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="container">
          <div className="footer-container">
            <ul className="category-list">
              <p>კატეგორიები</p>
              <li className="category-list-item">სპორტი და ინსტრუმენტები</li>
              <li className="category-list-item">ტანსაცმელი</li>
              <li className="category-list-item">ფეხსაცმელი</li>
              <li className="category-list-item">ბრენდები</li>
              <li className="category-list-item">OUTLET</li>
            </ul>
            <ul className="services-list">
              <p>სერვისები</p>
              <li className="services-list-item">გაქირავება</li>
              <li className="services-list-item">მომსახურება</li>
              <li className="services-list-item">განვადება</li>
              <li className="services-list-item">კონტაქტი</li>
            </ul>
            <ul className="account-links">
              <p>ანგარიში</p>
              <li className="account-links-item">კალათა</li>
              <li className="account-links-item">ჩემი შეკვეთები</li>
              <li className="account-links-item">რეგისტრაცია</li>
              <li className="account-links-item">ავტორიზაცია</li>
            </ul>
          </div>
          <div className="copyright">
            <img src={FooterLogo} alt="Logo" />
            <p className="copyryght-info">ყველა უფლება დაცულია @ 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
