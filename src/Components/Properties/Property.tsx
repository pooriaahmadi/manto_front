import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PropertyInputs } from "../../types/interfaces";
import "../../assets/scss/properties/property.scss";
import "../../assets/scss/inputs/input.scss";
function strToBool(s: string) {
  const regex = /^\s*(true|1|on)\s*$/i;
  return regex.test(s);
}

const Property = ({ id, title, type, user, match_id }: PropertyInputs) => {
  const [value, setValue] = useState<any>();
  const [answer, setAnswer] = useState<any>();
  const default_values = [0, 0, "default text"];
  const types = ["number", "checkbox", "text"];
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(
        `${user.endpoint}/answers/match/${match_id}/property/${id}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      if (response.status !== 200) {
        const createResponse = await fetch(
          `${user.endpoint}/answers/match/${match_id}/property/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ content: default_values[type] }),
          }
        );
        if (createResponse.status !== 200) return;
        const data = await createResponse.json();
        setAnswer(data);
        setValue(default_values[type]);
        return;
      }
      const data = await response.json();
      setAnswer(data);
      setValue(data.content);
    };
    stuff();
  }, []);
  const handleValueChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (types[type] === "checkbox") {
      setValue(!strToBool(value));
      await save(e.target.checked);
      return;
    }
    await save(e.target.value);
  };
  const save = async (value: any) => {
    const response = await fetch(`${user.endpoint}/answers/${answer.id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        content: value,
      }),
    });
    if (response.status !== 200) return;
  };
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await save(value);
  };
  return (
    <form onSubmit={handleSave} className="property">
      <h1>{title}</h1>
      <input
        type={types[type]}
        value={value}
        checked={types[type] === "checkbox" ? strToBool(value) : false}
        onChange={handleValueChange}
      />
    </form>
  );
};

export default Property;
