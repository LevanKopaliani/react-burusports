import "../styles/Contacts.scss";
import LocationIcon from "../assets/img/location.svg";
import PhoneIcon from "../assets/img/phone.svg";
import MailIcon from "../assets/img/mail.svg";
import AddressMap from "../assets/img/addressmap.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="wrapper">
        <div className="container">
          <h1 className="contacts-title">კონტაქტი</h1>
          <div className="contacts-container">
            <ul className="address-list">
              <li className="address-list-item">
                <div className="item-icon">
                  <img src={LocationIcon} alt="address" />
                </div>
                <div className="item-info">
                  <p className="title">მისამართი</p>
                  <p className="info">თბილისი, აბაშიძის 61</p>
                </div>
              </li>
              <li className="address-list-item">
                <div className="item-icon">
                  <img src={PhoneIcon} alt="phone" />
                </div>
                <div className="item-info">
                  <p className="title">ტელეფონი</p>
                  <p className="info">+995 555 55 55 55</p>
                </div>
              </li>
              <li className="address-list-item">
                <div className="item-icon">
                  <img src={MailIcon} alt="mail" />
                </div>
                <div className="item-info">
                  <p className="title">ელ. ფოსტა</p>
                  <p className="info">info@burusports.ge</p>
                </div>
              </li>
            </ul>
            <div className="address-map">
              <img src={AddressMap} alt="address" />
            </div>
          </div>
          <div className="contacts-details">
            <h3>დეტალური აღწერა </h3>
            <p>
              გავრცელებული მოსაზრებით, Lorem Ipsum შემთხვევითი ტექსტი სულაც
              არაა. მისი ფესვები ჯერკიდევ ჩვ. წ. აღ-მდე 45 წლის დროინდელი
              კლასიკური ლათინური ლიტერატურიდან მოდის. ვირჯინიის შტატში მდებარე
              ჰემპდენ-სიდნეის კოლეჯის პროფესორმა რიჩარდ მაკკლინტოკმა აიღო
              ერთ-ერთი ყველაზე იშვიათი ლათინური სიტყვა "consectetur" Lorem
              Ipsum-პასაჟიდან და გადაწყვიტა მოეძებნა იგი კლასიკურ ლიტერატურაში.
              ძიება შედეგიანი აღმოჩნდა — ტექსტი Lorem Ipsum გადმოწერილი ყოფილა
              ციცერონის "de Finibus Bonorum et Malorum"-ის 1.10.32 და 1.10.33
              თავებიდან. ეს წიგნი ეთიკის თეორიის ტრაქტატია, რომელიც რენესანსის
              პერიოდში ძალიან იყო გავრცელებული. Lorem Ipsum-ის პირველი ხაზი,
              "Lorem ipsum dolor sit amet..." სწორედ ამ წიგნის 1.10.32
              თავიდანაა.
              <br />
              <br /> მათთვის, ვისაც აინტერესებს, ქვევით მოყვანილია Lorem
              Ipsum-ის ორიგინალი ნაწყვეტი 1500-იანი წლებიდან. ასევე შეგიძლიათ
              ნახოთ 1.10.32 და 1.10.33 თავები ციცერონის "de Finibus Bonorum et
              Malorum"-დან, რომელსაც თან ერთვის 1914 წელს ჰ. რექჰამის
              შესრულებული ინგლისურენოვანი თარგმანი.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
