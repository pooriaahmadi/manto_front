import { PasswordInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss";

const PasswordInput = ({
  handleOnChange,
  placeholder,
  title,
  value,
  required = false,
  error = false,
}: PasswordInputs) => {
  return (
    <div className={"input" + (error ? " error" : "")}>
      <h2>{title}</h2>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required={required}
      />
    </div>
  );
};

export default PasswordInput;
