import "../../assets/scss/inputs/input.scss";
import { EmailInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss"


const EmailInput = ({
  handleOnChange,
  placeholder,
  title,
  value,
}: EmailInputs) => {
  return (
    <div className="input">
      <h2>{title}</h2>
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default EmailInput;
