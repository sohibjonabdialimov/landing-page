import React from "react";
import "./style.css";
import footer_logo from "../../assets/img/landing_footer_logo.svg";
const Footer = () => {
  return (
    <footer className="landing_footer">
      <div className="landing_footer_content">
        <div className="landing_footer_logo">
          <img src={footer_logo} alt="" />
        </div>
        <div className="landing_footer_middle">
          <div className="landing_footer_middle_first">
            <a href="#about">Biz haqimizda</a>
            <a href="#teacher">O’qituvchilar</a>
            <a href="#student">O’rganuvchilar</a>
          </div>
          <div className="landing_footer_middle_first">
            <a href="#">O’qituvchi sifatida boshlash</a>
            <a href="#">O’rganuvchi sifatida boshlash</a>
            <a href="#">O’qituvchi sifatida ro’yxatdan o’tish</a>
            <a href="#">O’rganuvchi sifatida ro’yxatdan o’tish</a>
          </div>
        </div>
        <div className="landing_footer_number">
          <p>Murojat uchun:</p>
          <p>Tel : +998 94 335 05 31</p>
        </div>
      </div>
      <p className="landing_footer_bottom"><span>ilmlar.com</span> yangi avlod ta’lim platformasi. {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
