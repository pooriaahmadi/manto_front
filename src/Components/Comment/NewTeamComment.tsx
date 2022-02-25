import "../../assets/scss/comments/new_comment.scss";
import TextInput from "../Inputs/TextInput";
import SubmitInput from "../Inputs/SubmitInput";
import { useState, useEffect, ChangeEvent } from "react";
import { NewTeamCommentInputs } from "../../types/interfaces";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SelectInput from "../Inputs/SelectInput";
import Error from "../Error/Error";

const NewTeamComment = ({ currentUser, team }: NewTeamCommentInputs) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [error, setError] = useState<string>("");
  const [mode, setMode] = useState<number>(0);
  const handleOnModeChage = (e: ChangeEvent<HTMLSelectElement>) => {
    setMode(parseInt(e.target.value));
  };
  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleFormInput = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${currentUser.endpoint}/comments/`, {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: description,
        team: team.id,
        mode: mode,
      }),
    });
    if (response.status === 200) {
      return navigate(`/teams/${team.id}/manage`);
    }
    const data = await response.json();
    if (response.status === 400) {
      setError(data.details[0].message);
    } else if (response.status === 403) {
      setError("You don't have access.");
    } else if (response.status === 404) {
      setError("Team not found");
    } else {
      setError(data);
    }
  };
  return (
    <div className="new_comment_wrapper">
      <div className="new_comment">
        <h1>New Comment</h1>
        <form onSubmit={handleFormInput}>
          {error !== "" && <Error content={error} />}

          <TextInput
            handleOnChange={handleOnTitleChange}
            required
            value={title}
            placeholder="uhhh idk"
            title="Title"
            maxLength={191}
            error={error.includes("title")}
          />
          <TextInput
            handleOnChange={handleOnDescriptionChange}
            required
            title="Description"
            value={description}
            maxLength={191}
            placeholder="blah blab blah yea"
            error={error.includes("content")}
          />
          <SelectInput
            options={["neutral", "negative", "positive"]}
            handleOnChange={handleOnModeChage}
            title="Mode"
            value={mode}
            required
            error={error.includes("mode")}
          />
          <SubmitInput value="Create" />
        </form>
      </div>
    </div>
  );
};

export default NewTeamComment;
