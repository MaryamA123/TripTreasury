
import Footer from "../components/Footer";
import image from "../Images/pineapples.webp";
import Heading from "../components/Heading";
import './AboutUsPage.css';
import crochet from "../Images/crochet.jpg";
import skating from "../Images/skating.jpg";
import pottery from "../Images/pottery.jpg";
import football from "../Images/football.jpg";

const AboutUsPage = () => {
  return (

    <>

      <Heading Heading="About us" />

      <div className="intro-section">
        <h2>
          Welcome to Trip Treasury
        </h2>
        <h2>
          Where budgeting for your dream holiday is done for you!
        </h2>
        <h3>
          We are a dynamic group of individuals passionate about travel and helping others make the most of their vacations.
          <br/><br/>
          Allow us to introduce ourselves:
        </h3>
      </div>
      <br/>
      
      <img src={image} alt="pineappleimage" className="pineapple-image" />
      
      <br/>

      <div className="row">
        
        <div className="column">
          <div className="card">
            <h2>Penny</h2> 
            <img src={crochet} alt="crochet" className="card-image"></img>
            <h3>The crochet connoisseur</h3>
          </div>
        </div>

        <div className = "column">
          <div className="card">
              <h2>Asia</h2>
              <img src={skating} alt="skating" className="card-image"></img>
              <h3>The skating sensation</h3>
          </div>
        </div>

        <div className = "column">
          <div className="card">
              <h2> Naomi </h2>
              <img src={pottery} alt="pottery" className="card-image"></img>
              <h3>The pottery pro </h3>
          </div>
        </div>

        <div className = "column">
          <div className="card">
              <h2>Maryam</h2> 
              <img src={football} alt="football" className="card-image"></img>
              <h3>Our football enthusiast</h3>
          </div>
        </div>
      </div>

      <div className="ending">
        <div className="margin">
        <p>
          Our diverse interests come together to form the heart of Trip Treasury. We believe in the power of combining
          different passions to create something extraordinary, and that's exactly what we've done with this application.
        </p>

        <p>
          Trip Treasury is not just an app; it's a result of our shared vision to simplify the travel experience.
          By inputting your base currency, destination currency, desired expenses, and the duration of your stay,
          our application calculates a daily budget in the foreign currency. We want you to enjoy your vacation to the
          fullest without worrying about overspending.
        </p>

        <p>
          Whether you're a football fan, a skating enthusiast, a crochet artist, or a pottery lover, Trip Treasury is
          designed for individuals like you – active, creative, and ready to explore the world.
        </p>

        <p>
          Join us on this exciting journey, and let Trip Treasury be your trusted companion for budgeting on your next
          adventure!
        </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;