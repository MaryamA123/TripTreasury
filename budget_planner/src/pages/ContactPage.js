import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Heading from "../components/Heading";


const ContactPage = () => {
    return (
      <div>
        <Heading Heading="Contact Us"></Heading>
        <ContactForm/>
        <Footer/>
      </div>
    );
  };
  
  export default ContactPage;