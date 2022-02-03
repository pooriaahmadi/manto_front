import "../../assets/scss/inputs/input.scss";
import { EmailInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss";

const EmailInput = ({
  handleOnChange,
  placeholder,
  title,
  value,
  error = false,
  required = false,
}: EmailInputs) => {
  return (
    <div className={"input" + (error ? " error" : "")}>
      <h2>{title}</h2>
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required={required}
      />
    </div>
  );
};

export default EmailInput;
