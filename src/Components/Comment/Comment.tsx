import { CommentInputs } from "../../types/interfaces";
import "../../assets/scss/comments/comment.scss";

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
        <button onClick={handleDeleteComment}>delete</button>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
