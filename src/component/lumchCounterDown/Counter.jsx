import "./counter.css";
import { useState, useEffect } from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Counter = () => {
  const [timeDays, setTimeDays] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMin, setTimeMin] = useState(0);
  const [timeSec, setTimeSec] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const min = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const sec = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDays(days);
        setTimeHours(hour);
        setTimeMin(min);
        setTimeSec(sec);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="counter relative w-full h-screen bg-[#221d2b] felx flex-col justify-center items-center">
      <h1 className="text-white pb-[25rem] text-[1.4rem] tracking-[5px] font-[600]] absolute top-[10rem] left-[50%] ti">
        We'RE LAUNCHING SOON
      </h1>
      <div className="counterHill absolute w-full h-full flex justify-center items-center text-center">
        <div className="flex justify-between items-center space-x-7 mb-5 font-bold">
          <div className="t relative">
            <div className="text">{timeDays}</div>
            <div className="t1"></div>
            <div className="t2"></div>
            <div className="mt-3 text-gray-200 text-opacity-50 text-[0.7rem] tracking-[0.4rem]">
              Days
            </div>
          </div>
          <div className="t relative">
            <div className="text">{timeHours}</div>
            <div className="t1"></div>
            <div className="t2"></div>
            <div className="mt-3 text-gray-200 text-opacity-50 text-[0.7rem] tracking-[0.4rem]">
              HOURS
            </div>
          </div>
          <div className="t relative">
            <div className="text">{timeMin}</div>
            <div className="t1"></div>
            <div className="t2"></div>
            <div className="mt-3 text-gray-200 text-opacity-50 text-[0.7rem] tracking-[0.4rem]">
              MINUTES
            </div>
          </div>
          <div className="t relative">
            <div className="text">{timeSec}</div>
            <div className="t1"></div>
            <div className="t2"></div>
            <div className="mt-3 text-gray-200 text-opacity-50 text-[0.7rem] tracking-[0.4rem]">
              SECONDS
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 absolute bottom-12 left-[50%] counterImgContainer">
          <AiFillFacebook className="w-7 h-7 text-[#8685a5] hover:text-[#e76388] cursor-pointer" />
          <AiOutlineInstagram className="w-7 h-7 text-[#8685a5] hover:text-[#e76388] cursor-pointer" />
          <BsPinterest className="w-7 h-7 text-[#8685a5] hover:text-[#e76388] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Counter;

{
  /* <div className="flex flex-row justify-center items-center space-x-10 text-center">
<div className=" t_0 w-[7.5rem] h-[7rem] text-[#fc6087] relative ">
  <div className="t_1 absolute z-10">18</div>
  <div className="t_2 absolute z-10">18</div>
</div>
<div className=" t_0 w-[7.5rem] h-[7rem] text-[#fc6087] relative">
  <div className="t_1 absolute"></div>
  <div className="t_2 absolute"></div>
</div>
<div className=" t_0 w-[7.5rem] h-[7rem] text-[#fc6087] relative">
  <div className="t_1 absolute"></div>
  <div className="t_2 absolute"></div>
</div>
<div className=" t_0 w-[7.5rem] h-[7rem] text-[#fc6087] relative">
  <div className="t_1 absolute"></div>
  <div className="t_2 absolute"></div>
</div>
</div> */
}
