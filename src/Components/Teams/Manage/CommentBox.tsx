import "../../../assets/scss/teams/manage/commentbox.scss";
import { CommentBoxInputs } from "../../../types/interfaces";

const CommentBox = ({ hintColor, hintName }: CommentBoxInputs) => {
  return (
    <div className="comment-box">
      <div className="hint" style={{ backgroundColor: hintColor }}>
        {hintName}
      </div>
    </div>
  );
};

export default CommentBox;
