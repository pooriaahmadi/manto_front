import "../assets/scss/login/login.scss";
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../Components/Inputs/PasswordInput";
import EmailInput from "../Components/Inputs/EmailInput";
import SubmitInput from "../Components/Inputs/SubmitInput";
import Error from "../Components/Error/Error";
import Success from "../Components/Messages/Success";
import { Navigate } from "react-router-dom";
import { LoginInputs } from "../types/interfaces";
import { useEffect } from "react";
const Login = ({ user, setUser, update, setUpdate }: LoginInputs) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email && !password) {
      setError("Please fill in all fields");
      return;
    }
    const [response, data] = await user.login({
      email: email,
      password: password,
    });

    if (response.status === 200) {
      user.token = data.token;
      user.id = data.id;
      user.username = data.username;
      user.email = data.email;
      user.permissions = data.permissions;
      user.preferredName = data.preferredName;
      user.createdAt = new Date(data.createdAt);
      user.updatedAt = new Date(data.updatedAt);
      user.loggedIn = true;
      localStorage.setItem("token", data.token);
      setUser(user);
      setUpdate(!update);
    } else if (response.status === 404) {
      setError("Email is incorrect");
      return;
    } else if (response.status === 403) {
      setError("Password is incorrect");
      return;
    } else if (response.status === 400) {
      setError(data.details[0].message);
      return;
    } else if (response.status === 500) {
      setError("An server error occured");
      return;
    } else {
      setError(String(data));
      return;
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
          <h1>Welcome Back!</h1>
        </div>
        <div className="inputs">
          {error !== "" && <Error content={error} />}
          <EmailInput
            error={error.includes("email")}
            placeholder="ex. uwu@uwu.com"
            value={email}
            title="Email"
            handleOnChange={handleEmailChange}
            required
          />
          <PasswordInput
            error={error.includes("Password")}
            placeholder="ex. helluwu world"
            value={password}
            title="Password"
            handleOnChange={handlePasswordChange}
            required
          />
          <SubmitInput value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
