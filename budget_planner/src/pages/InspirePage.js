import Footer from "../components/Footer"
import Heading from "../components/Heading"
import image from "../Images/dubai.jpeg";
import image from "../Images/Thailand.jpeg";
import image from "../Images/Bali.jpeg";


function InspirePage() {

    return (
        <>
        <Heading Heading="Holiday Inspirations"></Heading>
        <h1>Inspiring Holiday Destinations</h1>
  
  <div class="destination">
    <img src="./Images/dubai.jpeg" alt="Dubai"/>
    <h2>Dubai</h2>
    <p>Experience luxury and extravagance in the heart of the desert.</p>
    <h3>Currency Conversion:</h3>
  </div>
  
  <div class="destination">
    <img src="./Images/Thailand.jpeg" alt="Thailand"/>
    <h2>Thailand</h2>
    <p>Discover breathtaking beaches and vibrant cultural experiences.</p>
    <h3>Currency Conversion:</h3>
  </div>
  
  <div class="destination">
    <img src="Bali.jpeg" alt="Bali"/>
    <h2>Bali</h2>
    <p>Immerse yourself in stunning landscapes and tranquil spirituality.</p>
    <h3>Currency Conversion:</h3>
  </div>
  
        <Footer></Footer>
    </>
    );
}



export default InspirePage;