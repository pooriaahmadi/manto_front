import { useEffect, useState } from "react";
import { CategoriesInputs } from "../../types/interfaces";
import "../../assets/scss/categories/categories.scss";
import Category from "./Category";
const Categories = ({ user, match_id }: CategoriesInputs) => {
  const [categories, setCategories] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
    const stuff = async () => {
      let response = await fetch(`${user.endpoint}/categories/all`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status !== 200) return;
      let data = await response.json();
      setCategories(data);
    };
    stuff();
  }, []);
  return (
    <div className="categories">
      {categories.map((item) => {
        return (
          <Category
            match_id={match_id}
            id={item.id}
            title={item.title}
            key={item.id}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default Categories;
