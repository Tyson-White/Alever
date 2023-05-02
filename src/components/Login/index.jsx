import React from "react";
import Styles from "./Login.module.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../firebase/firebase.js";
import { getSession } from "../../firebase/session.js";
import { startSession } from "../../firebase/session.js";
import { setLogin } from "../../redux/slices/PopupSlice";
import { setIsAuth, setActiveUser } from "../../redux/slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const isActive = useSelector((state) => state.popup.login);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [error, setError] = React.useState(false)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isAuth = useSelector(state => state.user.isAuth)
  let session = getSession();

  const userFetch = () => {
    const url = 'https://6450f64ce1f6f1bb22a3c634.mockapi.io/users?search=' + session.email
    axios.get(url)   
      .then(res => {
        dispatch(setActiveUser(res.data))
      })
    
     
    navigate("/mainpage");
    dispatch(setLogin());
    dispatch(setIsAuth());
  }

  const onSubmit = async () => {    
    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      const token = session.accessToken
      userFetch()
      
    } catch (error) {
      console.error(error.message);
      setError(true)
    }
  }

  return (
    <>
      <div
        className={
          isActive ? `${Styles.wrapper} ${Styles.active}` : Styles.wrapper
        }
      >
        <div className={Styles.login_block}>
          <div
            onClick={() => dispatch(setLogin())}
            className={Styles.close_icon}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72789 1.72792L27.1837 27.1838M1.72789 27.1838L27.1837 1.72792"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className={Styles.login_content}>
            <div className={Styles.title}>Добро пожаловать в Alever!</div>
            <form action="" className={Styles.login_form}>
              <div className={Styles.input_name}>Адрес электронной почты</div>
              <input
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="example@mail.ru"
                className={Styles.email}
              />

              <div className={Styles.input_name}>Пароль</div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="00000000"
                className={Styles.password}
              />

              <div className={Styles.forget_password}>Забыли пароль?</div>
              
              {error && <div className={Styles.error}>
                Имя пользователя или пароль неверны
              </div>}
              
              <Link to={isAuth && "/mainpage"}>
                <button onClick={() => onSubmit()} type="submit">
                  Войти
                </button>
              </Link>

              <div className={Styles.agreement}>
                Продолжая, вы соглашаетесь с положениями основных документов
                <span> Alever.</span> А также подтверждаете, что прочли их.
                <br /> <span>Условия предоставления услуг </span> <br />
                <span>Политика конфиденциальности</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
