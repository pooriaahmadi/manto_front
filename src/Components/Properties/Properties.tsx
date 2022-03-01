import { useEffect, useState } from "react";
import { PropertiesInputs } from "../../types/interfaces";
import Property from "./Property";
const Properties = ({ category_id, user, match_id }: PropertiesInputs) => {
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(
        `${user.endpoint}/properties/category/${category_id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      setProperties(data);
    };
    stuff();
  }, []);
  return (
    <div className="properties">
      {properties.map((item) => {
        return (
          <Property
            id={item.id}
            title={item.title}
            type={item.type}
            key={item.id}
            user={user}
            match_id={match_id}
          />
        );
      })}
    </div>
  );
};
export default Properties;
