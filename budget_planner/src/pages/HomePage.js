
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
      <Heading Heading="Currency Converter & Daily Bugdet"></Heading>
      <div className="imageContainer">
      <img src={bora} alt="bora-bora" className="holidayImages"/>
      <img src={canada} alt="canada" className="holidayImages"/>
      <img src={japan} alt="japan" className="holidayImages"/>
      </div>
      <h3>Your adventure starts here...</h3>
      <CurrencyForm />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
