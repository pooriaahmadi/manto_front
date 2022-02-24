import "../../../assets/scss/teams/manage/commentbox.scss";
import { CommentBoxInputs } from "../../../types/interfaces";
import Comment from "../../Comment/Comment";
import { useNavigate } from "react-router-dom";
import NewComment from "../../Comment/NewTeamComment";
const CommentBox = ({
  hintColor,
  hintName,
  comments,
  user,
  setComments,
}: CommentBoxInputs) => {
  const navigate = useNavigate();
  const handleHintClick = () => {
    navigate(`/teams/comments/new`);
  };
  return (
    <div className="comment-box">
      <div
        className="hint"
        style={{ backgroundColor: hintColor, cursor: "pointer" }}
        onClick={handleHintClick}
      >
        <h5>{hintName}</h5>
        <button>+</button>
      </div>
      <div className="comments">
        {comments.map((item: any) => {
          const handleDeleteComment = async () => {
            const response = await fetch(
              `${user.endpoint}/comments/${item.id}`,
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                  "Content-Type": "application/json",
                },
                method: "delete",
              }
            );
            if (response.status !== 200) return;
            setComments(comments.filter((item2) => item2.id !== item.id));
          };
          return (
            <Comment
              author={item.author}
              content={item.content}
              id={item.id}
              key={item.id}
              title={item.title}
              user={user}
              handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
