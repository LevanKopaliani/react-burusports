import "../styles/Products.scss";
import SearchFilterImg from "../assets/img/searchfilter.svg";
import FilterAcordion from "../components/FilterAcordion";

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
              <div className="category-menu">menu</div>
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
            <section className="products-section">content</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
