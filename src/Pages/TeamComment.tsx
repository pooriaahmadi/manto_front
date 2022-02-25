import NewTeamComment from "../Components/Comment/NewTeamComment";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamCommentInputs } from "../types/interfaces";
const TeamComment = ({ user }: TeamCommentInputs) => {
  const [team, setTeam] = useState<any>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(`${user.endpoint}/teams/${id}`);
      if (response.status !== 200) {
        navigate("/teams");
        return;
      }
      const data = await response.json();
      setTeam(data);
    };
    stuff();
  }, []);

  return <NewTeamComment currentUser={user} team={team} />;
};

export default TeamComment;
