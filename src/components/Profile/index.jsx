import React from "react";
import Styles from "./Profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProfile, changeProfile } from "../../redux/slices/PopupSlice";
import {endSession, getSession, isLoggedIn} from "../../firebase/session.js";
import { setIsAuth } from "../../redux/slices/UserSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate()
  var activeUser = useSelector(state => state.user.activeUser)
  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.composedPath().includes(avatarRef.current)) {
        dispatch(changeProfile());
      } else if (!e.composedPath().includes(profileRef.current)) {
        dispatch(setProfile(false));
      }
    });
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/manepage");
    }
  
    let session = getSession();
  }, [navigate]);
  
  const onLogout = () => {
    endSession();
    navigate("/");
    dispatch(setIsAuth());
    dispatch(setProfile());
  }
  
  const isActive = useSelector((state) => state.popup.profile);

  const dispatch = useDispatch();
  const profileRef = React.useRef();
  const avatarRef = React.useRef();

  return (
    <>
      <div className={Styles.profile_container}>
        <div ref={avatarRef} className={Styles.profile}>
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
        <div
          ref={profileRef}
          className={
            isActive
              ? `${Styles.profile_block} ${Styles.active}`
              : Styles.profile_block
          }
        >
          <div className={Styles.profile_content}>
            <div className={Styles.title}>Профиль</div>
            <div className={Styles.profile_info}>
              <div className={Styles.avatar}></div>
              <div className={Styles.info}>
                <div className={Styles.name}>{activeUser.userName}</div>
                <div className={Styles.acc_type}>Пользовательский аккаунт</div>
                <div className={Styles.email}>{activeUser.userEmail}</div>
              </div>
            </div>

            <div className={Styles.your_account}>
              <div className={Styles.title}>Ваши аккаунты</div>
              <div className={Styles.item}>Добавить аккаунт</div>
            </div>

            <div className={Styles.advance}>
              <div className={Styles.title}>Дополнительно</div>
              <Link to={"/settings"}>
                <div
                  onClick={() => dispatch(setProfile(false))}
                  className={Styles.item}
                >
                  Настройки
                </div>
              </Link>
              <div className={Styles.item}>
                Ваши права на конфиденциальность
              </div>
            </div>
            <Link to={"/"}>
              <div
                onClick={() => {
                  {
                    
                    onLogout()
                  }
                }}
                className={Styles.logout}
              >
                Выход
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
