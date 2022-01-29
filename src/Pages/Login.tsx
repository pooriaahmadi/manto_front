import "../assets/scss/login/login.scss"
import guestImage from "../assets/images/guest.png";
import { ChangeEvent, useState } from "react";
import CustomInput from "../Components/Inputs/CustomInput";

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
                <CustomInput placeholder="ex. uwu@uwu.com" value={email} type="email" title="Email" handleOnChange={handleEmailChange} />
                <CustomInput placeholder="ex. helluwu world" value={password} type="password" title="Password" handleOnChange={handleEmailChange} />
            </div>
        </form>
    </div>
};

export default Login;