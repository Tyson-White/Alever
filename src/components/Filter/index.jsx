import React from "react";
import Styles from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "../../redux/slices/UserSlice";
export default function Filter() {
  const pagesList = ["Рекомендации", "Подписки"];
  const [activePage, setActivePage] = React.useState(0);
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <>
      {isAuth && (
        <div className={Styles.wrapper}>
          <ul className={Styles.pages}>
            {pagesList.map((obj, i) => (
              <li
                onClick={() => setActivePage(i)}
                className={i == activePage ? Styles.active : ""}
              >
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
