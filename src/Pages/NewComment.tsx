import "../assets/scss/comments/new_comment.scss";
import TextInput from "../Components/Inputs/TextInput";
import SubmitInput from "../Components/Inputs/SubmitInput";
import { useState, useEffect, ChangeEvent } from "react";
import { NewCommentInputs } from "../types/interfaces";
import { FormEvent } from "react";

const NewComment = ({
  comments,
  setComments,
  currentUser,
  mode,
  team,
  user,
}: NewCommentInputs) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleFormInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <SubmitInput value="Create" />
      </form>
    </div>
  );
};

export default NewComment;
