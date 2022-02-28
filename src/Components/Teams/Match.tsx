import { MatchInputs } from "../../types/interfaces";
import { Link } from "react-router-dom";
const Match = ({ id, handleDelete }: MatchInputs) => {
  return (
    <div className="match">
      <div className="left">
        <h1>Match #{id}</h1>
      </div>
      <div className="right">
        <Link to={`/matches/${id}`}>View</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Match;
