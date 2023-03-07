import React from "react";
import BG from "../images/FirstPage_BG.svg";

const FirstPage = () => {
  return (
    <div className="first-page container px-5 mt-[3rem]">
      <div className="header font-[600] text-5xl w-[100%] md:w-[60%] lg:text-6xl">
        IT-отдел для вашего <span className="text-[#FCA311]">Стартапа</span> или{" "}
        <span className="text-[#FCA311]">Бизнеса</span>
      </div>

      <div className="block md:flex mt-5 justify-between">
        <div className="w-[100%] md:w-[40%] text-[#676767] font-[400] mt-6 text-[20px]">
          <div>
            Мы считаем, что технологии - это рычаг, который имеет большое
            влияние на ваш бизнес, реализуя ваши идеи в цифровом виде.{" "}
            <span className="mt-[2rem] block">
              Позвольте помочь вам с этим.
            </span>
          </div>

          <button className=" mt-5 text-white bg-[#FCA311] px-[2rem] py-2 rounded-[50px] text-[1rem]">Оценить проект</button>
        </div>

        <img src={BG} className="md:w-[50%] w-[100%] mt-6 md:mt-0" />
      </div>
    </div>
  );
};

export default FirstPage;
