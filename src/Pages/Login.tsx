import "../assets/scss/login/login.scss"
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, useState } from "react";
import PasswordInput from "../Components/Inputs/PasswordInput";
import EmailInput from "../Components/Inputs/EmailInput";
import SubmitInput from "../Components/Inputs/SubmitInput";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return <div className="login">
        <form>
            <div className="avatar">
                <img src={guestImage} alt="guest" />
                <h1>Welcome Back!</h1>
            </div>
            <div className="inputs">
                <EmailInput placeholder="ex. uwu@uwu.com" value={email} title="Email" handleOnChange={handleEmailChange} />
                <PasswordInput placeholder="ex. helluwu world" value={password} title="Password" handleOnChange={handlePasswordChange} />
                <SubmitInput value="Login" />
            </div>
        </form>
    </div>
};

export default Login;