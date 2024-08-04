import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutus">About</Link>
      </li>
      <li>
        <Link to="/inspire">Inspire</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
};

export default Footer;
