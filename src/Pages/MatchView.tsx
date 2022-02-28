import { MatchViewInputs } from "../types/interfaces";
import Match from "../Components/Teams/Match";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../Components/Categories/Categories";
import "../assets/scss/teams/matches.scss";
import "../assets/scss/teams/match_view.scss";

const MatchView = ({ user }: MatchViewInputs) => {
  const [match, setMatch] = useState<{ [key: string]: any }>({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(`${user.endpoint}/matches/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status !== 200) return;
      const data = await response.json();
      setMatch(data);
    };
    stuff();
  }, [user.endpoint, user.token]);
  const handleDelete = async () => {
    const response = await fetch(`${user.endpoint}/matches/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "DELETE",
    });
    if (response.status !== 200) return;
    navigate(`/teams/`);
  };
  return (
    <div className="match_view">
      <Match handleDelete={handleDelete} id={match.id} />
      <Categories user={user} match_id={id} />
    </div>
  );
};
export default MatchView;
