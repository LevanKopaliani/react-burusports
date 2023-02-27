import "../styles/Banner.scss";

const Banner = ({ img, className }) => {
  return (
    <div className={`Banner ${className}`}>
      <img src={img} alt="banner" />
    </div>
  );
};

export default Banner;
