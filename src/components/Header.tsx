import React from "react";
import style from "../styles/header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} alt="" />
          I'M batman
        </div>
        <ul className={style.navigation}>
          <li>Хинкали</li>
          <li>Лагман</li>
          <li>Бешпармак</li>
          <li>Борщ</li>
        </ul>
        <button className={style.btn}>Я кнопка</button>
      </nav>
      <div className={style.header_content}>
        <h1 className={style.head}>зОгОлОвОк</h1>
        <h2 className={style.head_content}>
          съешь еще этих мягких французских булок <br /> да выпей чаю
        </h2>
      </div>
    </header>
  );
};

export default Header;
