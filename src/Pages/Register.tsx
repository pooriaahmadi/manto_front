import "../assets/scss/login/login.scss";
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, useState } from "react";
import PasswordInput from "../Components/Inputs/PasswordInput";
import EmailInput from "../Components/Inputs/EmailInput";
import SubmitInput from "../Components/Inputs/SubmitInput";
import TextInput from "../Components/Inputs/TextInput";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <form>
        <div className="avatar">
          <img src={guestImage} alt="guest" />
          <h1>Let's get started!</h1>
        </div>
        <div className="inputs">
          <TextInput
            placeholder="ex. uwuperson"
            handleOnChange={handleUsernameChange}
            maxLength={191}
            title="Username"
            value={username}
          />
          <EmailInput
            placeholder="ex. uwu@uwu.com"
            value={email}
            title="Email"
            handleOnChange={handleEmailChange}
          />
          <PasswordInput
            placeholder="ex. helluwu world"
            value={password}
            title="Password"
            handleOnChange={handlePasswordChange}
          />
          <SubmitInput value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
