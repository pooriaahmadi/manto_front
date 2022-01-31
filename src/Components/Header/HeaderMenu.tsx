import HeaderItem from "./HeaderItem";
import { useState } from "react";
import { HeaderItemInputs } from "../../types/interfaces";


const HeaderMenu = () => {
  return (
    <div className="menu">
      <HeaderItem content="Home" link="/" />
      <HeaderItem content="Login" link="/login" />
      <HeaderItem content="Register" link="/register" />
      <HeaderItem content="About us" link="#" />
    </div>
  );
};

export default HeaderMenu;
