import { HeaderItemInputs } from "../../types/interfaces";
import { Link } from "react-router-dom";

const HeaderItem = ({content, link}: HeaderItemInputs) => {
    return <Link to={link} className="item">{content}</Link>
}

export default HeaderItem;