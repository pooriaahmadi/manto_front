import "../assets/scss/login/login.scss";
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../Components/Inputs/PasswordInput";
import EmailInput from "../Components/Inputs/EmailInput";
import SubmitInput from "../Components/Inputs/SubmitInput";
import TextInput from "../Components/Inputs/TextInput";
import Success from "../Components/Messages/Success";
import { RegisterInputs } from "../types/interfaces";
import { Navigate } from "react-router-dom";
import Error from "../Components/Error/Error";

const Register = ({ user, setUser }: RegisterInputs) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [preferredName, setPreferredName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePrefferedNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreferredName(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || username === "") {
      setError("Please fill username");
    } else if (!email || email === "") {
      setError("Please fill email");
    } else if (!password || password === "") {
      setError("Please fill password");
    } else {
      const [response, data] = await user.register({
        username,
        email,
        password,
        preferredName,
      });
      if (response.status === 200) {
        setError("");
        setSuccess("User created successfully please login.");
      } else if (response.status === 409) {
        setError("Username or email is already in use");
      } else if (response.status === 400) {
        setError(data.details[0].message);
      } else if (response.status === 500) {
        setError("Server error");
      }
    }
  };
  if (user.loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="avatar">
          <img src={guestImage} alt="guest" />
          <h1>Let's get started!</h1>
        </div>
        <div className="inputs">
          {success !== "" && <Success content={success} />}
          {error !== "" && <Error content={error} />}
          <TextInput
            placeholder="ex. uwuperson"
            handleOnChange={handleUsernameChange}
            maxLength={191}
            title="Username"
            value={username}
            error={error.includes("username")}
            required
          />
          <EmailInput
            placeholder="ex. uwu@uwu.com"
            value={email}
            title="Email"
            handleOnChange={handleEmailChange}
            error={error.includes("email")}
            required
          />
          <PasswordInput
            placeholder="ex. helluwu world"
            value={password}
            title="Password"
            handleOnChange={handlePasswordChange}
            error={error.includes("password")}
            required
          />
          <TextInput
            placeholder="James"
            value={preferredName}
            title="Preferred name"
            maxLength={191}
            error={error.includes("preffered")}
            handleOnChange={handlePrefferedNameChange}
          />
          <SubmitInput value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
