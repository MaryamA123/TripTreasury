import Footer from "../components/Footer"
import Heading from "../components/Heading"
import dubai from "../Images/dubai.jpeg";
import thailand from "../Images/Thailand.jpeg";
import bali from "../Images/Bali.jpeg";
import "./InspirePage.css"
import CurrencyConverterInspireMe from "../components/InspireMeAPICall";


const InspirePage = () => {
  return (
    <>
      <Heading Heading="Holiday Inspirations"></Heading>

      <div className="sub-heading">
        <h1>Inspiring Holiday Destinations</h1>
      </div>

      <div className="row">

      <div className="columnIP">
        <img src={dubai} alt="Dubai" className="destination-image" />
        <h2>Dubai</h2>
        <p>Experience luxury and extravagance in the heart of the desert.</p>
        <h3>Currency Conversion:</h3>
        <p>£1 is equal to 4.69 AED</p>
      </div>

      <div className="columnIP">
        <img src={thailand} alt="Thailand" className="destination-image" />
        <h2>Thailand</h2>
        <p>Discover breathtaking beaches and vibrant cultural experiences.</p>
        <h3>Currency Conversion:</h3>
        <CurrencyConverterInspireMe></CurrencyConverterInspireMe>
      </div>

      <div className="columnIP">
        <img src={bali} alt="Bali" className="destination-image" />
        <h2>Bali</h2>
        <p>Immerse yourself in stunning landscapes and tranquil spirituality.</p>
        <h3>Currency Conversion:</h3>
        <p>£1 is equal to 19,782 IDR</p>
      </div>
    </div>
      <Footer></Footer>
    </>
  );
}

export default InspirePage;