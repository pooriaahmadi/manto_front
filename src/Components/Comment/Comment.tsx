import { CommentInputs } from "../../types/interfaces";
import "../../assets/scss/comments/comment.scss";
import closeImage from "../../assets/images/close.svg";
const Comment = ({
  author,
  content,
  id,
  title,
  handleDeleteComment,
}: CommentInputs) => {
  return (
    <div className="comment">
      <div className="top">
        {title && <h1>{title}</h1>}
        <img src={closeImage} onClick={handleDeleteComment} alt="" />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
