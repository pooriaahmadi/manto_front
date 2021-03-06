import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Classes/User";
import { useState, useEffect } from "react";
import "./assets/scss/style.scss";
import ManageTeam from "./Pages/ManageTeam";
import NewComment from "./Components/Comment/NewTeamComment";
import Teams from "./Pages/Teams";
import TeamComment from "./Pages/TeamComment";
import MatchView from "./Pages/MatchView";
import Analytics from "./Pages/Analytics";
function App() {
  const [update, setUpdate] = useState<boolean>(false);
  const [user, setUser] = useState<User>(
    new User({ endpoint: "https://mantoapi.pooria.tech" })
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
        <Route path="/teams" element={<Teams user={user} />} />
        <Route path="/teams/:id/manage" element={<ManageTeam user={user} />} />
        <Route
          path="/teams/:id/comments/new"
          element={<TeamComment user={user} />}
        />
        <Route path="/matches/:id" element={<MatchView user={user} />} />
        <Route
          path="/teams/:id/analytics"
          element={<Analytics user={user} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
