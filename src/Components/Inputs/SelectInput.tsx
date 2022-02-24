import "../../assets/scss/inputs/input.scss";
import { EmailInputs, SelectInputs } from "../../types/interfaces";
import "../../assets/scss/inputs/input.scss";

const SelectInput = ({
  handleOnChange,
  title,
  value,
  error = false,
  required = false,
  options,
}: SelectInputs) => {
  return (
    <div className={"input" + (error ? " error" : "")}>
      <h2>{title}</h2>
      <input value={value} onChange={handleOnChange} required={required} />
      <select required={required} onc>
        {options.map((item, index) => (
          <option value={index}>item</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
