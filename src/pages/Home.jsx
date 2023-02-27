import "../styles/Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider1 from "../assets/img/slider1.png";
import HomePageProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";
import Banner from "../components/Banner";
import BannerImg from "../assets/img/banner.png";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div className="home">
      <div className="slider-container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Slider1} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider1} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider1} alt="slider" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="orange-divider"></div>
      <div className="wrapper">
        <div className="container">
          <div className="homepage-container">
            <h1 className="homepage-products-title">
              ნახე ჩვენი ახალი პროდუქცია
            </h1>
            <div className="homepage-products">
              {HomePageProductData.map((product, index) => (
                <ProductsCard
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  key={product.id}
                />
              ))}
            </div>
            <Banner img={BannerImg} className="homepage-banner" />
            <Brands
              brandsList={[
                "Nike",
                "Adidas",
                "Puma",
                "NewBalance",
                "UnderArmour",
                "Converse",
                "Asics",
                "Canterbury",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
