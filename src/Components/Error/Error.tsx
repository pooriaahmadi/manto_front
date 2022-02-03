import { ErrorInputs } from "../../types/interfaces";
import "../../assets/scss/error/error.scss";

const Error = ({ content }: ErrorInputs) => {
  return (
    <div className="error_message">
      <p>{content}</p>
    </div>
  );
};

export default Error;
