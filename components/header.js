import React, { useState } from "react";
import style from "./header.module.css";
const Header = () => {
  const [btnState, setBtnState] = useState(true);
  return (
    <div className={style.mainContent}>
      <h1>SHAWN</h1>
      <div
        onClick={() => setBtnState((prev) => !prev)}
        className={style.menuBtn}
      >
        <span
          className={btnState ? style.cMenuBtnTop : style.menuBtnTop}
        ></span>
        <span
          className={btnState ? style.cMenuBtnMid : style.menuBtnMid}
        ></span>
        <span
          className={btnState ? style.cMenuBtnBottom : style.menuBtnBottom}
        ></span>
      </div>
      <div
        onClick={() => setBtnState(false)}
        className={btnState ? style.btnHelper : style.disappear}
      ></div>
      <div className={btnState? style.mainList: style.disappear}>
        <span className={style.listItems}>HOME</span>
        <span className={style.listItems}>ABOUT</span>
        <span className={style.listItems}>More</span>
        <span className={style.listItems}>CONTACT</span>
      </div>
    </div>
  );
};

export default Header;
