import HeaderMenu from "./HeaderMenu";
import "../../assets/scss/header/header.scss"
import logo from "../../assets/images/logo.png"

const Header = () => {
    return <header>
        <div className="left">
            <h1>Manto</h1>
            <HeaderMenu />
        </div>
        <div className="right">
            <img src={logo} alt="" />
        </div>
    </header>
};

export default Header;