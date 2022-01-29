import { HeaderItemInputs } from "../../types/interfaces";
import { Link } from "react-router-dom";

const HeaderItem = (props: HeaderItemInputs) => {
    return <Link to={props.link} className="item">{props.content}</Link>
}

export default HeaderItem;