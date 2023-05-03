import React from "react";
import Load_icon from "../../assets/img/Loading_icon.gif";
export default function Loading() {
  return (
    <>
      <div className="load_screen">
        <img className="load" src={Load_icon} alt="" />
      </div>
    </>
  );
}
