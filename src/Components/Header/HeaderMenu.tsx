import HeaderItem from "./HeaderItem";
import { useState, useEffect } from "react";
import { HeaderInputs, HeaderItemInputs } from "../../types/interfaces";

const HeaderMenu = (props: HeaderInputs) => {
  const [update, setUpdate] = useState<boolean>(false);
  useEffect(() => {
    setUpdate(!update);
  }, [props.user]);
  return (
    <div className="menu">
      <HeaderItem content="Home" link="/" />
      {!props.user.loggedIn && (
        <>
          <HeaderItem content="Login" link="/login" />
          <HeaderItem content="Register" link="/register" />
        </>
      )}
      <HeaderItem content="About us" link="#" />
    </div>
  );
};

export default HeaderMenu;
