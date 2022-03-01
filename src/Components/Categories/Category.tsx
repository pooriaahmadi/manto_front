import { CategoryInputs } from "../../types/interfaces";
import Properties from "../Properties/Properties";
import "../../assets/scss/categories/category.scss";
const Category = ({ id, title, user, match_id }: CategoryInputs) => {
  return (
    <div className="category">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <Properties user={user} category_id={id} match_id={match_id} />
    </div>
  );
};
export default Category;
