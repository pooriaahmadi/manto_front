import { SubmitInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss"

const SubmitInput = ({value}: SubmitInputs) => {
    return <div className="input">
        <input type="submit" value={value} />
    </div>
}

export default SubmitInput;