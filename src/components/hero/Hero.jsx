import React from "react";
import "./style.css";
import logo from "../../assets/img/ilmlar.com.svg";
import big_logo from "../../assets/img/big_ilmlar.com.svg";
import arrow from "../../assets/img/arrow7.svg";
import hero1 from "../../assets/img/hero1.svg";
import hero2 from "../../assets/img/hero2.svg";
import hero3 from "../../assets/img/hero3.svg";
import hero4 from "../../assets/img/hero4.svg";
import hero5 from "../../assets/img/hero5.svg";
import hero6 from "../../assets/img/hero6.svg";
const Hero = () => {
  return (
    <section className="landing_hero landing_card">
      <nav className="landing_list">
        <div className="landing_logo">
          <img src={logo} alt="" />
        </div>
        <div className="landing_navbar">
          <a href="#about">Biz haqimizda</a>
          <a href="#teacher">O’qituvchilar</a>
          <a href="#student">O’quvchilar</a>
        </div>
        <div className="common_btn_wrap login_btn_wrap">
          <button className="common_btn">Kirish</button>
          <img src={arrow} alt="" />
        </div>
      </nav>
      <div className="landing_hero_content">
        <div className="landing_hero_desc">
          <img className="hero_desc_logo" src={big_logo} alt="" />
          <h4 className="landing_hero_subtitle">
            Masofaviy ta’lim platformasi
          </h4>
          <p>
            Ilg'or platformamiz yordamida <br /> o'rganish va o'rgatishni yanada{" "}
            <br />
            oqilona usulini kashf eting.
          </p>
          <div className="common_btn_wrap">
            <button className="common_btn">Boshlash</button>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="landing_hero_imgs">
          <img className="hero_img_1" src={hero1} alt="" />
          <img className="hero_img_2" src={hero2} alt="" />
          <img className="hero_img_3" src={hero3} alt="" />
          <img className="hero_img_4" src={hero4} alt="" />
          <img className="hero_img_5" src={hero5} alt="" />
          <img className="hero_img_6" src={hero6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
