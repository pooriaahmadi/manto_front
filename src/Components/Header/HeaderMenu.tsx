import HeaderItem from "./HeaderItem";

const HeaderMenu = () => {
    return <div className="menu">
        <HeaderItem content="Home" link="#" />
        <HeaderItem content="Login" link="/login" />
        <HeaderItem content="IDK" link="#" />
        <HeaderItem content="About us" link="#" />
    </div>
};

export default HeaderMenu;