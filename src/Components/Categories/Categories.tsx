import { useEffect, useState } from "react";
import { CategoriesInputs } from "../../types/interfaces";
import "../../assets/scss/categories/categories.scss";
import Category from "./Category";
const Categories = ({ user, match_id }: CategoriesInputs) => {
  const [categories, setCategories] = useState<{ [key: string]: any }[]>([]);
  const [properties, setProperties] = useState<{ [key: string]: any }[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }[]>([]);
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

      response = await fetch(`${user.endpoint}/properties/all`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status !== 200) return;
      data = await response.json();
      setProperties(data);

      response = await fetch(`${user.endpoint}/answers/match/${match_id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status !== 200) return;
      data = await response.json();
      console.log(data);

      setAnswers(data);
    };
    stuff();
  }, [user.endpoint, user.token]);
  return (
    <div className="categories">
      {categories.map((item) => {
        return (
          <Category
            properties={properties.filter(
              (property) => property.category.id === item.id
            )}
            id={item.id}
            title={item.title}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Categories;
