import React from "react";
import logo from "../assets/logo.svg";
import navbar_mobile from "../assets/navbar_mobile.svg";

function Navbar() {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <header className="flex items-center justify-between w-[100%] pl-[343px] pr-[343px] pt-[32px] pb-[32px]">
        <div className="flex items-center justify-center gap-[11px]">
          <div className="w-[197px]">
            <img src={logo} alt="" draggable="false" />
          </div>
          <div className="flex flex-col items-start justify-center overflow-hidden">
            <p className="text-[16px] font-[600]">Производство и продажа</p>
            <p className="text-[16px] font-[600]">металлопроката</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[128px]">
          <button className="text-white text-[16px] font-[600] bg-[#2D72CD] rounded-[5px] pl-[15px] pr-[15px] pt-[14px] pb-[14px]">
            У вас уже есть поставщик?
          </button>
          <div className="flex flex-col items-end justify-center">
            <p className="text-[22px] font-[700]">+7 (495) 444-44-44</p>
            <div className="flex items-center justify-center gap-[6px]">
              <div className="w-[18px]">
                <img src={navbar_mobile} alt="" draggable="false" />
              </div>
              <p className="text-[16px] text-[#5284F7] font-[600]">
                Заказать обратный звонок
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
