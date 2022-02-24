import "../assets/scss/comments/new_comment.scss";
import TextInput from "../Inputs/TextInput";
import SubmitInput from "../Inputs/SubmitInput";
import { useState, useEffect, ChangeEvent } from "react";
import { NewTeamCommentInputs } from "../../types/interfaces";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const NewTeamComment = ({ currentUser, team }: NewTeamCommentInputs) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [mode, setMode] = useState<number>(0);
  const handleOnModeChage = (e: ChangeEvent<HTMLInputElement>) => {
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
        description: description,
        team: team.id,
        mode: mode,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      navigate(`/teams/${team.id}/manage`);
    }
  };
  return (
    <div className="new_comment">
      <form onSubmit={handleFormInput}>
        <TextInput
          handleOnChange={handleOnTitleChange}
          required
          value={title}
          placeholder="uhhh idk"
          title="Title"
          maxLength={191}
        />
        <TextInput
          handleOnChange={handleOnDescriptionChange}
          required
          title="Description"
          value={description}
          maxLength={191}
          placeholder="blah blab blah yea"
        />
        <TextInput
          handleOnChange={handleOnDescriptionChange}
          required
          title="Mode"
          value={description}
          maxLength={191}
          placeholder="blah blab blah yea"
        />
        <SubmitInput value="Create" />
      </form>
    </div>
  );
};

export default NewTeamComment;
