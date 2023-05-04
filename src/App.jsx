import React from "react";

import Header from "./components/Header";
import MainPage from "./pages/ManePage";
import { getSession, endSession } from "./firebase/session.js";
import StartPage from "./pages/StartPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./pages/Settings";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveUser, setIsLoading } from "./redux/slices/UserSlice";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let session = getSession();

  const userFetch = async () => {
    dispatch(setIsLoading(true));
    const email = session.email;
    try {
      const res = await axios.get(
        `https://6450f64ce1f6f1bb22a3c634.mockapi.io/users?search=${email}`
      );

      if (res.data.length < 1) {
        alert("Пользователь не найден");
        navigate("/");
        endSession();
      } else {
        dispatch(setActiveUser(res.data[0]));
      }
      dispatch(setIsLoading(false));
    } catch {
      alert("Произошла ошибка");
      navigate("/");
    }
  };

  React.useEffect(() => {
    session.accessToken ? userFetch() : navigate("/");
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
