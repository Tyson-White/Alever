import React from "react";
import Styles from "./Register.module.scss";
import {createUser} from "../../firebase/firebase.js";
import {startSession} from "../../firebase/session.js";
import { Link, useNavigate } from "react-router-dom";
import { setRegister } from "../../redux/slices/PopupSlice";
import { setIsAuth } from "../../redux/slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Register() {
  const isActive = useSelector((state) => state.popup.register);
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth)
  const [error, setError] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const onSubmit = async () => {   
    try {
      let registerResponse = await createUser(email, password);
      startSession(registerResponse.user);
      navigate("/mainpage");
      dispatch(setRegister());
      dispatch(setIsAuth());
    } catch (error) {
      console.error(error.message);
      setError(true)
    }
  };

  return (
    <>
      <div
        className={
          isActive ? `${Styles.wrapper} ${Styles.active}` : Styles.wrapper
        }
      >
        <div className={Styles.login_block}>
          <div
            onClick={() => dispatch(setRegister())}
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
                placeholder="Придумайте пароль"
                className={Styles.password}
              />

              <div className={Styles.input_name}>Дата рождения</div>
              <input
                type="text"
                placeholder="дд мм гг"
                className={Styles.date}
              />

              <div className={Styles.input_name}>Имя</div>
              <input
                type="text"
                placeholder="Ваше имя"
                className={Styles.date}
              />

              <div className={Styles.forget_password}>
                Уже есть аккаунт? <span>Войти.</span>
              </div>

              {error && <div className={Styles.error}>
                Неправильный email или пароль
              </div>}
              <Link to={isAuth && "/mainpage"}>
                <button onClick={() => onSubmit()} type="submit">
                  Регистрация
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
