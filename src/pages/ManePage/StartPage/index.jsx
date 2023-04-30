import React from "react";
import Styles from "./StartPage.module.scss";
import backGround from "../../../assets/img/страница мейн.png";

export default function StartPage() {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.title}>Добро пожаловать.</div>
        <img src={backGround} alt="" />
      </div>
    </>
  );
}
