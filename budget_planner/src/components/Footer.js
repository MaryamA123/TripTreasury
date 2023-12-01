import "./Footer.css"
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react'

const Footer = () => {

// const [click,setClick] = useState(false)
// const handleClick = () => setClick(!click)

    return ( 
        <div className='footer'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/aboutus'>About</Link>
        </li>
        <li>
            <Link to='/inspire'>Inspire</Link>
        </li>  
        <li>
            <Link to='/contact'>Contact</Link>
        </li>

        
        {/* <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "white"}}/>) : (<FaBars size={20} style={{color: "white"}}/>) } */}

        

        {/* </div> */}

        </div>
     );
}
 
export default Footer;