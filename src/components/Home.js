import { Link } from "react-router-dom";
import '../styling/Home.css'
import '../images/home.jpg'
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="homePage">
            <Navbar />
            <div className="Home">
                <div className="title">Plants</div>
                <div className="subtitle">for sale!</div>
                <div className="description">Here you can find a variety of <b>plants in pots</b> for all your needs</div>
                <Link className="Shop" to="/shop">Start shopping</Link>
            </div>
        </div>
        
    )
}

export default Home;