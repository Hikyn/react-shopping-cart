import { Link } from "react-router-dom";
import '../styling/Home.css'
import '../images/home.jpg'
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="homePage">
            <Navbar />
            <div className="Home">
                <h1 className="title">Plants</h1>
                <h2 className="subtitle">for sale!</h2>
                <article className="description">Here you can find a variety of <b>plants in pots</b> for all your needs</article>
                <Link className="Shop" to="/shop">Start shopping</Link>
            </div>
        </div>
        
    )
}

export default Home;