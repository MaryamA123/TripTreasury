
import CurrencyForm from "../components/CurrencyForm";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import bora from "../Images/bora-bora.jpg"
import japan from "../Images/Japan.jpg"
import canada from "../Images/Canada.jpg"
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <Heading Heading="Trip Treasury"></Heading>
      <div className="imageContainer">
      <img src={bora} alt="bora-bora" className="holidayImages"/>
      <img src={canada} alt="canada" className="holidayImages"/>
      <img src={japan} alt="japan" className="holidayImages"/>
      </div>
      <CurrencyForm />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
