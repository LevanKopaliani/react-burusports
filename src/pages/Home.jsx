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
/* ({ CartItems: [...state.CartItems, item] })   */
// set((state) => ({ CartItems: [...state.CartItems, item] })),
// Cart State
import { create } from "zustand";
export const useCartStore = create((set, get) => ({
  CartItems: [],
  setCartItem: (item) => {
    if (
      get().CartItems.length !== 0 &&
      get().CartItems.find((product) => product.product.id === item.product.id)
    ) {
      let ProductForModify = get().CartItems.find(
        (prdct) => prdct.product.id === item.product.id
      );
      let newQuantity = ProductForModify.quantity + item.quantity;

      get().CartItems.find(
        (prdct) => prdct.product.id === item.product.id
      ).quantity = newQuantity;
    } else {
      set((state) => ({ CartItems: [...state.CartItems, item] }));
    }
  },
  removeCartItem: (e) => {
    get().CartItems.splice(get().CartItems.indexOf(e.product), 1);
    set((state) => ({ CartItems: [...state.CartItems] }));
  },
  CartItemsQty: () => {
    let qty = 0;
    get().CartItems.map((item) => {
      qty += item.quantity;
    });
    return Number(qty);
  },
  CartTotalPrice: () => {
    let price = 0;
    get().CartItems.map((item) => {
      price += Number(item.product.price);
    });
    return price * get().CartItemsQty();
  },
}));

//
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
