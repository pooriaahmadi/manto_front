import CommentBox from "../Components/Teams/Manage/CommentBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/scss/teams/manage/manage.scss";
import Team from "../Classes/Team";
import { ManageTeamInputs } from "../types/interfaces";
import NotFound from "./NotFound";
import User from "../Classes/User";

const ManageTeam = ({ user }: ManageTeamInputs) => {
  const [team, setTeam] = useState<Team>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const { id } = useParams();
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(user.endpoint + "/teams/" + id + "/members");
      if (response.status == 404) {
        setNotFound(true);
        return;
      }
      const team = await response.json();
      const author = team.members.filter(
        (item: any) => item.permissions & 16
      )[0].user;
      setTeam(
        new Team({
          id: team.id,
          name: team.name,
          user: new User({
            endpoint: user.endpoint,
            createdAt: author.createdAt,
            id: author.id,
            permissions: author.permissions,
            preferredName: author.preferredName,
            updatedAt: author.updatedAt,
            username: author.username,
          }),
        })
      );
    };
    stuff();
  }, []);
  if (notFound) {
    return <NotFound />;
  }
  if (!team) {
    return <></>;
  }
  return (
    <div className="team-manage">
      <div className="top">
        <div className="avatar">
          {team.avatar ? (
            <img src={team.avatar} />
          ) : (
            <h1>{team.name[0].toUpperCase()}</h1>
          )}
        </div>
        <h1>{team.name}</h1>
      </div>
      <div className="comments">
        <CommentBox hintName="neutral" hintColor="#A9A8A8" />
        <CommentBox hintName="negative" hintColor="#EF7650" />
        <CommentBox hintName="positive" hintColor="#66EF50" />
      </div>
    </div>
  );
};

export default ManageTeam;
