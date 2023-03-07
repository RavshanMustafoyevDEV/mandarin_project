import React from "react";

const InfoCard = ({ header, paragraph, isCentral }) => {
  if (isCentral) {
    return (
      <div className="card block mx-auto md:mx-5 items-center w-[20rem] text-center my-[3rem] bg-[#3F3D56] py-[40px] px-[50px] rounded-[50px] lg:w-[18rem] lg:px-[25px] mb-[5rem] md:w-[15rem] md:px-[20px] md:mx-1">
        <div className="text-white font-[700] text-[20px]">{header}</div>
        <div className="bg-[#FCA311] w-[5rem] rounded-[5px] mx-auto h-[3px] my-4"></div>
        <div className="font-[350] text-white md:text-[14px] lg:text-[16px]">{paragraph}</div>
        <div className="flex justify-center mt-6">
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card block mx-auto md:mx-5 items-center w-[20rem] text-center my-[3rem] bg-[#3F3D56] py-[40px] px-[50px] rounded-[50px] lg:w-[18rem] lg:px-[25px] mt-[5rem] md:w-[15rem] md:px-[20px] md:mx-1">
        <div className="text-white font-[700] text-[20px]">{header}</div>
        <div className="bg-[#FCA311] w-[5rem] rounded-[5px] mx-auto h-[3px] my-4"></div>
        <div className="font-[350] text-white md:text-[14px] lg:text-[16px]">{paragraph}</div>
        <div className="flex justify-center mt-6">
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-[#FCA311] mx-1"></div>
        </div>
      </div>
    );
  }
};

export default InfoCard;
