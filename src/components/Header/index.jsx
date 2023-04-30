import React from "react";
import Styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogin,
  setProfile,
  setRegister,
} from "../../redux/slices/PopupSlice";
import Logo from "../Logo";
export default function Header() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const profileRef = React.useRef();

  const dispatch = useDispatch();

  return (
    <>
      <div className={Styles.header}>
        {isAuth ? (
          <div className={Styles.header_wrapper}>
            <div className={Styles.main}>
              <Logo />
              <div className={Styles.create_post}>
                Создать{" "}
                <div className={Styles.arrow}>
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 20 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 10C9.19251 10 8.3849 9.68596 7.77343 9.0695L0.251167 1.4859C0.0902455 1.32174 0 1.10024 0 0.869439C0 0.638638 0.0902455 0.417142 0.251167 0.252981C0.585746 -0.0843268 1.13953 -0.0843268 1.47411 0.252981L8.99638 7.83658C9.55016 8.39488 10.4501 8.39488 11.0039 7.83658L18.5261 0.252981C18.8607 -0.0843268 19.4145 -0.0843268 19.7491 0.252981C20.0836 0.590288 20.0836 1.14859 19.7491 1.4859L12.2268 9.0695C11.6153 9.68596 10.8077 10 10.0001 10Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className={Styles.search_block}>
                <div className={Styles.search_icon}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L19 19M10.5 20C11.7476 20 12.9829 19.7543 14.1355 19.2769C15.2881 18.7994 16.3354 18.0997 17.2175 17.2175C18.0997 16.3354 18.7994 15.2881 19.2769 14.1355C19.7543 12.9829 20 11.7476 20 10.5C20 9.25244 19.7543 8.0171 19.2769 6.86451C18.7994 5.71191 18.0997 4.66464 17.2175 3.78249C16.3354 2.90033 15.2881 2.20056 14.1355 1.72314C12.9829 1.24572 11.7476 1 10.5 1C7.98044 1 5.56408 2.00089 3.78249 3.78249C2.00089 5.56408 1 7.98044 1 10.5C1 13.0196 2.00089 15.4359 3.78249 17.2175C5.56408 18.9991 7.98044 20 10.5 20Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  className={Styles.search_input}
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div
              ref={profileRef}
              onClick={() => dispatch(setProfile())}
              className={Styles.profile}
            >
              <div className={Styles.avatar}></div>
              <div className={Styles.arrow}>
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 10C9.19251 10 8.3849 9.68596 7.77343 9.0695L0.251167 1.4859C0.0902455 1.32174 0 1.10024 0 0.869439C0 0.638638 0.0902455 0.417142 0.251167 0.252981C0.585746 -0.0843268 1.13953 -0.0843268 1.47411 0.252981L8.99638 7.83658C9.55016 8.39488 10.4501 8.39488 11.0039 7.83658L18.5261 0.252981C18.8607 -0.0843268 19.4145 -0.0843268 19.7491 0.252981C20.0836 0.590288 20.0836 1.14859 19.7491 1.4859L12.2268 9.0695C11.6153 9.68596 10.8077 10 10.0001 10Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className={Styles.header_wrapper}>
            <Logo />
            <div className={Styles.buttons}>
              <button
                onClick={() => dispatch(setLogin())}
                className={Styles.login}
              >
                Войти
              </button>
              <button
                onClick={() => dispatch(setRegister())}
                className={Styles.register}
              >
                Регистрация
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
