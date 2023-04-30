import React from "react";
import Styles from "./Profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../redux/slices/PopupSlice";
import { setIsAuth } from "../../redux/slices/UserSlice";
import { Link } from "react-router-dom";

export default function Profile() {
  const isActive = useSelector((state) => state.popup.profile);
  const dispatch = useDispatch();
  const profileRef = React.useRef();

  React.useEffect(() => {
    document.addEventListener("click", (e) => {});
  }, []);

  return (
    <>
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
              <div className={Styles.name}>Dyan Reifschneider</div>
              <div className={Styles.acc_type}>Пользовательский аккаунт</div>
              <div className={Styles.email}>example@gmail.com</div>
            </div>
          </div>

          <div className={Styles.your_account}>
            <div className={Styles.title}>Ваши аккаунты</div>
            <div className={Styles.item}>Добавить аккаунт</div>
          </div>

          <div className={Styles.advance}>
            <div className={Styles.title}>Дополнительно</div>
            <div className={Styles.item}>Настройки</div>
            <div className={Styles.item}>Ваши права на конфиденциальность</div>
          </div>
          <Link to={"/"}>
            <div
              onClick={() => {
                {
                  dispatch(setIsAuth());
                  dispatch(setProfile());
                }
              }}
              className={Styles.logout}
            >
              Выход
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
