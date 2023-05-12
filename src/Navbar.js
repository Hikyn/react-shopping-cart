import { Link } from "react-router-dom";
import './styling/NavBar.css'
import logo from './assets/plant.png'

const Navbar = () => {
    return (
        <div className="NavBar">
            <Link className="Home" to="/">
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <Link className="Home" to="/">Home</Link>
            <Link className="Shop" to="/shop">Shop</Link>
        </div>
        
    )
}

export default Navbar;