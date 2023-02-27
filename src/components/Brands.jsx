import "../styles/Brands.scss";
import BrandsData from "../data/brands/BrandsData";
import BrandsCard from "./BrandsCard";

const Brands = ({ brandsList }) => {
  return (
    <div className="brands">
      <h1 className="brands-title">იყიდე შენი ფავორიტი ბრენდი</h1>
      <div className="brands-container">
        {brandsList.map((el, index) => {
          let objectData = BrandsData.find((item) => item.name === el);
          return (
            <BrandsCard
              img={objectData.img}
              name={objectData.name}
              key={objectData.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
