import React from "react";

import Header from "./components/Header";
import MainPage from "./pages/ManePage";
import Filter from "./components/Filter";
import StartPage from "./pages/StartPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  React.useEffect(() => {
    !isAuth && navigate("/");
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Login />
        <Register />
        <Profile />
        <Header />
        <Filter />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
