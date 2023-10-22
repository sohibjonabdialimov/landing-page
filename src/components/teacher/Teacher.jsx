import React from "react";
import "./style.css";
import arrow from "../../assets/img/arrow7.svg";
import teacher1 from "../../assets/img/teacher1.svg";
import teacher2 from "../../assets/img/teacher2.svg";
import teacher3 from "../../assets/img/teacher3.svg";
import teacher4 from "../../assets/img/teacher4.svg";
import teacher5 from "../../assets/img/teacher5.svg";
import extra_logo from "../../assets/img/extra_logo.svg";

const Teacher = () => {
  return (
    <section id="teacher" className="landing_teacher landing_card">
      <div className="landing_teacher_content">
        <div className="landing_teacher_desc">
          <h2 className="common_title">O’qituvchilar</h2>
          <p className="common_text">
            <span>ilmlar.com</span> ta'lim platformasi, masofaviy ta'lim berishni maqsad
            qilgan o'qituvchilar uchun yaratilgan. Bunda siz o'zingizning video
            darslardan iborat kurslaringizni platformaga joylashingiz va daromad
            olishingiz mumkin.
          </p>
          
          <div className="common_btn_wrap">
            <button className="common_btn">O’qituvchi</button>
            <img src={arrow} alt="" />
          </div>
          <img className="teacher_extra_logo" src={extra_logo} alt="" />
        </div>
        <div className="landing_teacher_imgs">
          <img src={teacher1} alt="" />
          <img src={teacher2} alt="" />
          <img src={teacher3} alt="" />
          <img src={teacher4} alt="" />
          <img src={teacher5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Teacher;
