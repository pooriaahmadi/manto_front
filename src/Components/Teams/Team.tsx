import "../../assets/scss/teams/team.scss";
import { TeamInputs } from "../../types/interfaces";
import { Link } from "react-router-dom";
const Team = ({ id, name, user, avatar, description }: TeamInputs) => {
  return (
    <div className="team">
      <div className="top">
        <div className="images">
          {avatar ? <img src={avatar} /> : <h1>{name[0].toUpperCase()}</h1>}
          <div className="user">
            <h1>
              {user.preferredName
                ? user.preferredName[0].toUpperCase()
                : //@ts-ignore
                  user.username[0].toUpperCase()}
            </h1>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
      <p>{description ? description : "No description"}</p>
      <div className="buttons">
        <Link to={`/teams/${id}/manage`}>Manage</Link>
      </div>
    </div>
  );
};

export default Team;
