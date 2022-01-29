import { ChangeEvent, ReactHTMLElement } from "react";
import { InputInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss"
const CustomInput = (props: InputInputs) => {
    return <div className="input">
        <h2>{props.title}</h2>
        <input type={props.type} placeholder={props.placeholder} maxLength={props.maxLength} value={props.value} onChange={props.handleOnChange} />
    </div>
}

export default CustomInput;