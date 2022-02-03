import "../../assets/scss/inputs/input.scss";
import { TextInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss";

const TextInput = ({
  handleOnChange,
  placeholder,
  title,
  value,
  maxLength,
  required = false,
}: TextInputs) => {
  return (
    <div className="input">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
};

export default TextInput;
