import "../styles/Products.scss";
import SearchFilterImg from "../assets/img/searchfilter.svg";
import FilterAcordion from "../components/FilterAcordion";
import CaretLeft from "../assets/img/CaretLeft.svg";
import HomePageProductData from "../data/homepageproducts/HomePageProductData";
import ProductsCard from "../components/ProductsCard";

const Products = () => {
  return (
    <div className="products">
      <div className="wrapper">
        <div className="container">
          <div className="products-container">
            <aside className="filters-container">
              <div className="search-filter">
                <input
                  type="text"
                  name="searchfilter"
                  id="searchfilter"
                  placeholder="დაფილტრე სიტყვით"
                />
                <img src={SearchFilterImg} alt="search" />
              </div>
              <div className="category-menu">
                <div className="current-category">
                  <img src={CaretLeft} alt="" />
                  <span>სნოუბორდები</span>
                </div>
                <ul className="category-list">
                  <li>ბორდები</li>
                  <li>ბორდის ფეხსაცმელი</li>
                  <li>საჭერი</li>
                  <li>სტიკერი</li>
                  <li>კალათბურთის ზმანი</li>
                  <li>ჯორდანიჩები</li>
                  <li>აბა ჰე, არ გაჩერდე</li>
                </ul>
              </div>
              <div className="filters">
                <div className="filters-heading">
                  <span>ფილტრები</span>
                  <span>გაწმენდა</span>
                </div>
                <FilterAcordion
                  title={"ტიპი"}
                  open={true}
                  filterList={{
                    type: "checkbox",
                    list: [
                      "ყველა",
                      "ფარი",
                      "კალათბურთის ბუცები",
                      "კალათბურთის ზმანი",
                      "ჯორდანიჩები",
                      "აბა ჰე, არ გაჩერდე",
                      "test1",
                      "test2",
                    ],
                  }}
                />
                <FilterAcordion
                  title={"ტიპი 2"}
                  open={true}
                  filterList={{
                    type: "checkbox",
                    list: [
                      "ყველა",
                      "ფარი",
                      "კალათბურთის ბუცები",
                      "კალათბურთის ზმანი",
                      "ჯორდანიჩები",
                      "აბა ჰე, არ გაჩერდე",
                    ],
                  }}
                />
                <FilterAcordion
                  title={"ტიპი 3"}
                  open={true}
                  filterList={{
                    type: "checkbox",
                    list: [
                      "ყველა",
                      "ფარი",
                      "კალათბურთის ბუცები",
                      "კალათბურთის ზმანი",
                      "ჯორდანიჩები",
                      "აბა ჰე, არ გაჩერდე",
                    ],
                  }}
                />
                <FilterAcordion
                  title={"ტიპი"}
                  filterList={{
                    type: "radio",
                    list: [
                      "ყველა",
                      "ფარი",
                      "კალათბურთის ბუცები",
                      "კალათბურთის ზმანი",
                      "ჯორდანიჩები",
                      "აბა ჰე, არ გაჩერდე",
                    ],
                  }}
                />
              </div>
            </aside>
            <section className="products-section">
              <div className="products-section-filters">
                <select name="sort" id="sort">
                  <option value="palceholder" selected>
                    სორტირება: ფასი მატებით
                  </option>
                  <option value="test1">test1</option>
                  <option value="test2">test2</option>
                  <option value="test3">test3</option>
                  <option value="test4">test4</option>
                </select>
                <div className="sale-filter">
                  <p>ფასდაკლებული</p>
                  <label className="switch" htmlFor="switch">
                    <input type="checkbox" className="" id="switch" />
                    <span className="switch-slider round"></span>
                  </label>
                </div>
              </div>
              <div className="products-section-data">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
