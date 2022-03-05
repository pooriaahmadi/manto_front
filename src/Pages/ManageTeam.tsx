import CommentBox from "../Components/Teams/Manage/CommentBox";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/scss/teams/manage/manage.scss";
import Team from "../Classes/Team";
import { ManageTeamInputs } from "../types/interfaces";
import Matches from "../Components/Teams/Matches";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
const ManageTeam = ({ user }: ManageTeamInputs) => {
  const [team, setTeam] = useState<Team>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [comments, setComments] = useState<any[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const stuff = async () => {
      let response = await fetch(user.endpoint + "/teams/" + id + "/members");
      if (response.status == 404) {
        setNotFound(true);
        return;
      }
      const team = await response.json();
      const owners = team.members
        .filter((item: any) => item.permissions & 16)
        .map((item: any) => item.user);
      setTeam(
        new Team({
          id: team.id,
          name: team.name,
          owners: owners,
        })
      );
      response = await fetch(`${user.endpoint}/comments/teams/${team.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const comments = (await response.json()).comments;
      setComments(comments);
    };
    stuff();
  }, []);
  if (notFound) {
    return <NotFound />;
  }
  if (!team) {
    return <></>;
  }
  const handleHintClick = () => {
    navigate(`/teams/${team.id}/comments/new`);
  };
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
        {/* <Link to={`/teams/${team.id}/analytics`}>Analytics</Link> */}
      </div>
      <div className="comments">
        <CommentBox
          hintName="neutral"
          hintColor="#A9A8A8"
          comments={comments.filter((item: any) => item.mode === 0)}
          user={user}
          setComments={setComments}
          handleHintClick={handleHintClick}
        />
        <CommentBox
          hintName="negative"
          hintColor="#EF7650"
          comments={comments.filter((item: any) => item.mode === 1)}
          user={user}
          setComments={setComments}
          handleHintClick={handleHintClick}
        />
        <CommentBox
          hintName="positive"
          hintColor="#66EF50"
          comments={comments.filter((item: any) => item.mode === 2)}
          user={user}
          setComments={setComments}
          handleHintClick={handleHintClick}
        />
      </div>
      <Matches teamId={team.id} user={user} />
    </div>
  );
};

export default ManageTeam;
