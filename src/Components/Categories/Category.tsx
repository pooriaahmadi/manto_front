import { CategoryInputs } from "../../types/interfaces";
import "../../assets/scss/categories/category.scss";
const Category = ({ id, title, properties }: CategoryInputs) => {
  return (
    <div className="category">
      <div className="top">
        <h1>{title}</h1>
        {properties.map((item) => item.title).join(", ")}
      </div>
    </div>
  );
};
export default Category;
