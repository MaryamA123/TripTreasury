import BurgerMenu from "./BurgerMenu";
import "./Heading.css"


function Heading(props) {
    return (
      <div>
      <BurgerMenu/>
        <h1 className="heading">{props.Heading}</h1>
      </div>
    );
  };
  
  export default Heading;