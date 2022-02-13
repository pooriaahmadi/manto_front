import "../../assets/scss/teams/team.scss";
import { TeamInputs } from "../../types/interfaces";
import { Link } from "react-router-dom";
import User from "../../Classes/User";
const TeamComponent = ({
  id,
  name,
  owners,
  avatar,
  description,
  currentUser,
}: TeamInputs) => {
  const permissions = currentUser.permissions || 0;
  const isOwner = owners.filter(
    (item: User) => item.id === currentUser.id
  ).length;
  const hasAccess = permissions & 16 || isOwner;

  return (
    <div className="team">
      <div className="top">
        <div className="images">
          {avatar ? <img src={avatar} /> : <h1>{name[0].toUpperCase()}</h1>}
          <div className="user">
            <h1>
              {owners[0].preferredName
                ? owners[0].preferredName[0].toUpperCase()
                : //@ts-ignore
                  owners[0].username[0].toUpperCase()}
            </h1>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
      <p>{description ? description : "No description"}</p>
      <div className="buttons">
        <Link
          to={hasAccess ? `/teams/${id}/manage` : ""}
          style={{
            cursor: hasAccess ? "pointer" : "not-allowed",
            backgroundColor: !hasAccess ? "gray" : "",
          }}
        >
          Manage
        </Link>
        <Link
          to=""
          style={{
            backgroundColor: isOwner ? "grey" : "limegreen",
            cursor: isOwner ? "not-allowed" : "pointer",
          }}
        >
          {isOwner ? "Joined" : "Join"}
        </Link>
      </div>
    </div>
  );
};

export default TeamComponent;
