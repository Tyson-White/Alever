import React from "react";
import Styles from "./Settings.module.scss";
export default function Settings() {
  const [activePage, setActivePage] = React.useState(0);
  const pages = [
    "Общедоступный профиль",
    "Персональные данные",
    "Управление аккаунтом",
  ];

  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.sidebar}>
          <div className={Styles.sidebar_content}>
            <ul className={Styles.list}>
              {pages.map((obj, i) => (
                <li
                  onClick={() => setActivePage(i)}
                  className={activePage === i && `${Styles.active}`}
                >
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={Styles.settings_content}>
          <div className={Styles.title}>{pages[activePage]}</div>
        </div>
      </div>
    </>
  );
}
