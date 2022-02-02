import "../assets/scss/login/login.scss"
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../Components/Inputs/PasswordInput";
import EmailInput from "../Components/Inputs/EmailInput";
import SubmitInput from "../Components/Inputs/SubmitInput";
import { LoginInputs } from "../types/interfaces";

const Login = ({user, setUser}: LoginInputs) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const [response, data] = await user.login({email: email, password: password});
        console.log(response);
    }

    return <div className="login">
        <form onSubmit={handleSubmit}>
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