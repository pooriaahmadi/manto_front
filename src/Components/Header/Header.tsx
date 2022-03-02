import HeaderMenu from "./HeaderMenu";
import "../../assets/scss/header/header.scss";
import logo from "../../assets/images/logo.png";
import hamMenu from "../../assets/images/ham-menu.png";
import { HeaderInputs } from "../../types/interfaces";
import { useState } from "react";
import close from "../../assets/images/close.png";
const Header = (props: HeaderInputs) => {
  const [opened, setOpened] = useState<boolean>(false);
  const hamMenuClick = () => {
    setOpened(!opened);
  };
  return (
    <header>
      <div className="left">
        <h1>Manto</h1>
        <div className="menu">
          <HeaderMenu {...props} />
        </div>
      </div>
      <div className="right">
        <img id="logo" src={logo} alt="" />
        <img id="menuicon" src={hamMenu} alt="" onClick={hamMenuClick} />
        <div className={`menu` + (opened ? " active" : "")}>
          <div className="top">
            <h1>Manto</h1>
            <img src={close} onClick={hamMenuClick} alt="" />
          </div>
          <div className="bottom" onClick={hamMenuClick}>
            <HeaderMenu {...props} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
