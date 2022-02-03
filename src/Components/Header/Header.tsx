import HeaderMenu from "./HeaderMenu";
import "../../assets/scss/header/header.scss";
import logo from "../../assets/images/logo.png";
import { HeaderInputs } from "../../types/interfaces";

const Header = (props: HeaderInputs) => {
  return (
    <header>
      <div className="left">
        <h1>Manto</h1>
        <HeaderMenu {...props} />
      </div>
      <div className="right">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
