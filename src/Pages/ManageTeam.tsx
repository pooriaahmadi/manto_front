import { ManageTeamInputs } from "../types/interfaces";
import CommentBox from "../Components/Teams/Manage/CommentBox";
import "../assets/scss/teams/manage/manage.scss";

const ManageTeam = ({ team }: ManageTeamInputs) => {
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
