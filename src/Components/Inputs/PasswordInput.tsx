import { PasswordInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss"

const PasswordInput = ({handleOnChange, placeholder, title, value}: PasswordInputs) => {
    return <div className="input">
      <h2>{title}</h2>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
}

export default PasswordInput;