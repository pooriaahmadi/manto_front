import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Classes/User';
import { useState } from 'react';
import './assets/scss/style.scss';
import { stringify } from 'querystring';
function App() {
  const [user, setUser] = useState<User>(new User({endpoint: "http://localhost:3001"}));
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
