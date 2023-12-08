import BurgerMenu from "./BurgerMenu";
import "./Heading.css"
import logo from "../Images/ttlogo.png"


function Heading(props) {
    return (
      <div className="heading">
      <BurgerMenu/>
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="logoWithText">{props.Heading}</h1>
        
      </div>
    );
  };
  
  export default Heading;