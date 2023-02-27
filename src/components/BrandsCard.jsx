import "../styles/BrandsCard.scss";

const BrandsCard = ({ img, name }) => {
  return (
    <div className="brandscard" data-brand-name={name}>
      <img src={img} alt={name} />
    </div>
  );
};

export default BrandsCard;
