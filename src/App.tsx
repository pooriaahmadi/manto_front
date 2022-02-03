import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Classes/User";
import { useState, useEffect } from "react";
import "./assets/scss/style.scss";
function App() {
  const [update, setUpdate] = useState<boolean>(false);
  const [user, setUser] = useState<User>(
    new User({ endpoint: "http://localhost:3001" })
  );
  useEffect(() => {
    const doStuff = async () => {
      const token = localStorage.getItem("token");
      if (token === "" || !token) return;
      user.token = token;
      const [response, data] = await user.fetchData();
      if (response.status === 200) {
        user.id = data.id;
        user.username = data.username;
        user.createdAt = new Date(data.createdAt);
        user.updatedAt = new Date(data.updatedAt);
        user.permissions = data.permissions;
        user.preferredName = data.preferredName;
        user.loggedIn = true;
        setUser(user);
        setUpdate(!update);
      }
    };
    doStuff();
  }, []);
  return (
    <BrowserRouter>
      <Header user={user}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              setUpdate={setUpdate}
              update={update}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              user={user}
              setUser={setUser}
              setUpdate={setUpdate}
              update={update}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
