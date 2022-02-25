import "../../assets/scss/inputs/input.scss";
import { SelectInputs } from "../../types/interfaces";

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
      <select required={required} onChange={handleOnChange} value={value}>
        {options.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
