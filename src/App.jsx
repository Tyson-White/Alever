import React from "react";

import Header from "./components/Header";
import MainPage from "./pages/ManePage";
import { getSession } from "./firebase/session.js";
import StartPage from "./pages/StartPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./pages/Settings";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveUser } from "./redux/slices/UserSlice";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let session = getSession();

  const userFetch = async () => {
    const url =
      "https://6450f64ce1f6f1bb22a3c634.mockapi.io/users?search=" +
      session.email;
    console.log(session.email);
    const res = await axios.get(url);
    dispatch(setActiveUser(res.data));

    navigate("/mainpage");
  };

  React.useEffect(() => {
    session.accessToken ? userFetch() : navigate("/");

    const url =
      "https://6450f64ce1f6f1bb22a3c634.mockapi.io/users?search=" +
      session.email;
    axios.get(url).then((res) => {
      dispatch(setActiveUser(res.data));
    });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Login />
        <Register />
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
