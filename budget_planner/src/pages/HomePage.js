
import CurrencyForm from "../components/CurrencyForm";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import image from "../Images/pineapples.webp"
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <Heading Heading="Trip Treasury"></Heading>
      <img src={image} alt="pineappleimage" className="pineappleimage"/>
      <CurrencyForm />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
