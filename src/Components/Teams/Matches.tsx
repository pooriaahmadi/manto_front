import { MatchesInputs } from "../../types/interfaces";
import { useState, useEffect } from "react";
import Match from "./Match";
import "../../assets/scss/teams/matches.scss";

const Matches = ({ user, teamId }: MatchesInputs) => {
  const [matches, setMatches] = useState<{ [key: string]: any }[]>([]);
  const handleCreate = async () => {
    const response = await fetch(`${user.endpoint}/matches/team/${teamId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "POST",
    });
    if (response.status !== 200) return;
    const data = await response.json();
    setMatches([...matches, data]);
  };
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(`${user.endpoint}/matches/team/${teamId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      setMatches(data);
    };
    stuff();
  }, []);
  return (
    <div className="matches">
      <div className="top">
        <h1>Matches</h1>
        <button onClick={handleCreate}>New Match</button>
      </div>
      <div className="boxes">
        {matches.map((item) => {
          const handleDelete = async () => {
            const response = await fetch(
              `${user.endpoint}/matches/${item.id}`,
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
                method: "delete",
              }
            );
            if (response.status !== 200) return;
            setMatches(matches.filter((newItem) => newItem.id !== item.id));
          };
          return (
            <Match key={item.id} handleDelete={handleDelete} id={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Matches;
