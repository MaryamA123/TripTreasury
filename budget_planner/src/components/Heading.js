import "./Heading.css"


function Heading(props) {
    return (
      <div>
        <h1 className="heading">{props.Heading}</h1>
      </div>
    );
  };
  
  export default Heading;