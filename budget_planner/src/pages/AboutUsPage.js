import Footer from "../components/Footer";
import image from "../Images/pineapples.webp";
import Heading from "../components/Heading";
import './AboutUsPage.css';


const AboutUsPage = () => {
    return (

      <div className="container">

        <div className="content">

        <Heading Heading="About us"/>
     
        <h2>
          Welcome to Trip Treasury, where budgeting for your dream holiday is done for you!
        </h2>

        <p>
          We are a dynamic group of individuals passionate about travel and helping others make the most of their vacations.
          Allow us to introduce ourselves:
        </p>

        <img src={image} alt="pineappleimage" className="pineappleimage"/>

        <ul>
          <li>Penny - The crochet connoisseur</li>
          <li>Asia - The skating sensation</li>
          <li>Naomi - The pottery pro</li>
          <li>Maryam - Our football enthusiast</li>
        </ul>

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
        
        <Footer/>
      </div>
    );
  };
  
  export default AboutUsPage;