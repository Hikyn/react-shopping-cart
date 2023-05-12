import { Link } from "react-router-dom";
import './styling/Home.css'
import './assets/home.jpg'

const Home = () => {
    return (
        <div className="Home">
            <div className="title">Plants</div>
            <div className="subtitle">for sale!</div>
            <div className="description">Here you can find a variety of plants in pots for all your needs</div>
            <Link className="Shop" to="/shop">Start shopping</Link>
        </div>
    )
}

export default Home;