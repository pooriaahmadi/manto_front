import "../assets/scss/home/home.scss";
import paisley from "../assets/images/paisley.jpg";
import logoWhite from "../assets/images/logo-white.png";
import messageImage from "../assets/images/message.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="top" style={{ backgroundImage: `url('${paisley}')` }}>
        <div className="inner">
          <div className="left">
            <img src={logoWhite} alt="" />
          </div>
          <div className="right">
            <h1>
              <span>Manto</span>, a scouting app
            </h1>
            <p>Simplicity is the soul of efficiency</p>
          </div>
        </div>
      </div>
      <div className="annoying">
        <p>Want to manage your team? Start today!</p>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Home;
