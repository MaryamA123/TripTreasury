import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Heading from "../components/Heading";


const ContactPage = () => {
    return (
      <div>
        <Heading Heading="Contact Us"></Heading>
        <p>We would love to hear from you!</p>
        <ContactForm/>
        <Footer/>
      </div>
    );
  };
  
  export default ContactPage;