import React from "react";
import Styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <Link to={"/mainpage"}>
      <div className={Styles.logo}>
        Ale<span>ver</span>
      </div>
    </Link>
  );
}
