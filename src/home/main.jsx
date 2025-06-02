import React, { useState } from "react";
import showcase_background from "../assets/showcase_background.svg";
import section1_1 from "../assets/section1_1.svg";
import section1_2 from "../assets/section1_2.svg";
import section1_3 from "../assets/section1_3.svg";
import section1_4 from "../assets/section1_4.svg";
import section1_5 from "../assets/section1_5.svg";
import button1 from "../assets/button1.svg";
import button2 from "../assets/button2.svg";
import button3 from "../assets/button3.svg";
import button4 from "../assets/button4.svg";
import button5 from "../assets/button5.svg";
import button6 from "../assets/button6.svg";
import malumot1_img from "../assets/malumot1.svg";
import malumot2_img from "../assets/malumot2.svg";
import malumot3_img from "../assets/malumot3.svg";
import malumot4_img from "../assets/malumot4.svg";
import malumot5_img from "../assets/malumot5.svg";
import malumot6_img from "../assets/malumot6.svg";

const CardList = () => {
  const [activeId, setActiveId] = useState(null);

  function malumot1() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot1_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
              <p className="text-[18px] font-[600]">
                Штрипс, лента оцинкованная
              </p>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <li className="text-[16px] font-[400]">Оцинкованный штрипс</li>
                <li className="text-[16px] font-[400]">
                  Оцинкованная стальная лента
                </li>
                <li className="text-[16px] font-[400]">
                  Оцинкованная полоса Г/К
                </li>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function malumot2() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot2_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
              <p className="text-[18px] font-[600]">Сетка</p>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <li className="text-[16px] font-[400]">Сетка сварная</li>
                <li className="text-[16px] font-[400]">Сетка ПВЛ</li>
              </div>
            </div>
            <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
              Узнать стоимость
            </button>
          </div>
        </div>
      </div>
    );
  }
  function malumot3() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot3_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
              <p className="text-[18px] font-[600]">Профиль оцинкованный</p>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <li className="text-[16px] font-[400]">Профиль ГКЛ</li>
                <li className="text-[16px] font-[400]">Профиль фасадный</li>
                <li className="text-[16px] font-[400]">Профиль армирующий</li>
                <li className="text-[16px] font-[400]">Комплектующие</li>
              </div>
            </div>
            <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
              Узнать стоимость
            </button>
          </div>
        </div>
      </div>
    );
  }
  function malumot4() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot4_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
              <p className="text-[18px] font-[600]">Профнастил</p>
              <div className="flex items-center justify-center gap-[36px]">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <li className="text-[16px] font-[400]">Профнастил С8</li>
                  <li className="text-[16px] font-[400]">Профнастил Н57</li>
                  <li className="text-[16px] font-[400]">Профнастил Н60</li>
                  <li className="text-[16px] font-[400]">Профнастил Н75</li>
                  <li className="text-[16px] font-[400]">Профнастил НС35</li>
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <li className="text-[16px] font-[400]">Профнастил С13</li>
                  <li className="text-[16px] font-[400]">Профнастил С18</li>
                  <li className="text-[16px] font-[400]">Профнастил С21</li>
                  <li className="text-[16px] font-[400]">Профнастил С44</li>
                  <li className="text-[16px] font-[400]">Профнастил СП20</li>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function malumot5() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot5_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] gap-[36px] overflow-auto pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start justify-start gap-[22px]">
              <div className="flex items-center justify-center gap-[56px]">
                <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
                  <p className="text-[18px] font-[600]">Листовой прокат</p>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <li className="text-[16px] font-[400]">Лист Х/К</li>
                    <li className="text-[16px] font-[400]">Лист Г/К</li>
                    <li className="text-[16px] font-[400]">Лист НЛГ</li>
                    <li className="text-[16px] font-[400]">Лист ОЦ</li>
                    <li className="text-[16px] font-[400]">Лист рифл</li>
                    <li className="text-[16px] font-[400]">Лист ПВЛ</li>
                    <li className="text-[16px] font-[400]">Лист полимер</li>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
                  <p className="text-[18px] font-[600]">Листовой прокат</p>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <li className="text-[16px] font-[400]">Лист Х/К</li>
                    <li className="text-[16px] font-[400]">Лист Г/К</li>
                    <li className="text-[16px] font-[400]">Лист НЛГ</li>
                    <li className="text-[16px] font-[400]">Лист ОЦ</li>
                    <li className="text-[16px] font-[400]">Лист рифл</li>
                    <li className="text-[16px] font-[400]">Лист ПВЛ</li>
                    <li className="text-[16px] font-[400]">Лист полимер</li>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[56px]">
                <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
                  <p className="text-[18px] font-[600]">Листовой прокат</p>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <li className="text-[16px] font-[400]">Лист Х/К</li>
                    <li className="text-[16px] font-[400]">Лист Г/К</li>
                    <li className="text-[16px] font-[400]">Лист НЛГ</li>
                    <li className="text-[16px] font-[400]">Лист ОЦ</li>
                    <li className="text-[16px] font-[400]">Лист рифл</li>
                    <li className="text-[16px] font-[400]">Лист ПВЛ</li>
                    <li className="text-[16px] font-[400]">Лист полимер</li>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
                  <p className="text-[18px] font-[600]">Листовой прокат</p>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <li className="text-[16px] font-[400]">Лист Х/К</li>
                    <li className="text-[16px] font-[400]">Лист Г/К</li>
                    <li className="text-[16px] font-[400]">Лист НЛГ</li>
                    <li className="text-[16px] font-[400]">Лист ОЦ</li>
                    <li className="text-[16px] font-[400]">Лист рифл</li>
                    <li className="text-[16px] font-[400]">Лист ПВЛ</li>
                    <li className="text-[16px] font-[400]">Лист полимер</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function malumot6() {
    return (
      <div className="flex items-center justify-between w-[100%]">
        <div className="w-[50%]">
          <img src={malumot6_img} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-start w-[50%]">
          <div className="flex flex-col items-center justify-between h-[395px] pl-[63px] pr-[63px]">
            <div className="flex flex-col items-start w-[100%] justify-center gap-[18px]">
              <p className="text-[18px] font-[600]">Изделия на заказ</p>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <li className="text-[16px] font-[400]">
                  по любым вашим размерам
                </li>
                <li className="text-[16px] font-[400]">
                  из интересующих марок стали
                </li>
                <li className="text-[16px] font-[400]">
                  в соотвествии с ТУ и ГОСТ
                </li>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <button className="text-white text-[16px] font-[400] bg-[#2D72CD] pl-[52px] pr-[52px] pt-[14px] pb-[14px] rounded-[5px]">
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const buttons = [
    {
      id: 1,
      title: "Штрипс, лента оцинкованная",
      img: button1,
      content: malumot1(),
    },
    {
      id: 2,
      title: "Сетка",
      img: button2,
      content: malumot2(),
    },
    {
      id: 3,
      title: "Профиль оцинкованный",
      img: button3,
      content: malumot3(),
    },
    {
      id: 4,
      title: "Профнастил",
      img: button4,
      content: malumot4(),
    },
    {
      id: 5,
      title: "Черный металлопрокат",
      img: button5,
      content: malumot5(),
    },
    {
      id: 6,
      title: "Изделия на заказ",
      img: button6,
      content: malumot6(),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-[100%] overflow-clip">
        {buttons.map((btn) => (
          <div
            key={btn.id}
            onClick={() => setActiveId(btn.id)}
            className="flex flex-col items-center justify-center gap-[19px] w-[100%] h-[145px] hover:bg-[#EDF1F4] cursor-pointer border-[1px] border-[#D8E3E9] pl-[30px] pr-[30px] pt-[23px] pb-[20px]"
          >
            <div className="w-[38px]">
              <img src={btn.img} alt="" draggable="false" />
            </div>
            <div className="text-center w-[130px] overflow-hidden">
              <p className="text-[16px] font-[400]">{btn.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pastki ma'lumot qismi */}
      <div className="w-[100%] border-[#AEB6BB] border-[1px] transition-all duration-300">
        {activeId ? (
          <p className="text-[16px] font-[400] text-center">
            {buttons.find((b) => b.id === activeId)?.content}
          </p>
        ) : (
          malumot1()
        )}
      </div>
    </div>
  );
};

function Main() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center w-[100%]">
        <section className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start justify-center gap-[73px] pl-[343px] pt-[170px] pb-[187px] w-[45%]">
            <div className="flex flex-col items-start justify-center gap-[41px]">
              <div className="w-[600px] relative overflow-hidden">
                <p className="text-[37px] font-[600]">
                  Металлопрокат в наличии в Новосибирске от производителя с
                  доставкой до вас за 1-2 дня по цене ниже рыночной
                </p>
              </div>
              <div className="w-[440px] relative overflow-hidden">
                <p className="text-[22px] font-[400]">
                  Склады и филиалы производства в 26 крупных городах по всей
                  территории РФ
                </p>
              </div>
            </div>
            <button className="text-white text-[18px] font-[600] bg-[#2D72CD] w-[400px] rounded-[5px] relative pl-[83px] pr-[83px] pt-[12px] pb-[12px]">
              Получить прайс с персональными ценами
            </button>
          </div>
          <div
            className="w-[1200px] h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${showcase_background})` }}
          ></div>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] gap-[56px] pl-[343px] pr-[343px] pt-[106px] pb-[100px]">
          <div className="flex flex-col items-start justify-center w-[100%] gap-[10px]">
            <div className="w-[630px] overflow-hidden">
              <p className="text-[40px] font-[600]">
                Выгодные цены на металлопрокат в Новосибирске
              </p>
            </div>
            <div className="w-[800px] overflow-hidden">
              <p className="text-[24px] font-[400]">
                Обратитесь к менеджеру и он отправит вам цены на нужные позиции
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-[100%] gap-[33px]">
            <div className="w-[830px] overflow-hidden">
              <p className="text-[24px] font-[600]">
                Посмотрите какие товарные группы есть в наличии в Новосибирске
              </p>
            </div>
            {CardList()}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] gap-[61px] pl-[343px] pr-[343px] pt-[106px] pb-[100px]">
          <div className="flex flex-col items-start justify-center w-[100%] gap-[24px]">
            <p className="text-[40px] font-[600]">
              Поддерживаем остатки на наших складах
            </p>
            <p className="text-[24px] font-[400]">
              благодаря тщательно спланированному объему производства и сбыта
            </p>
          </div>
          <div className="flex items-center justify-center gap-[107px]">
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div className="flex items-center justify-center gap-[39px]">
                <div className="w-[192px]">
                  <img src={section1_1} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-center w-[182px] overflow-hidden">
                  <p className="text-[20px] font-[600]">Штрипс, полоса</p>
                  <p className="text-[20px] font-[400]">более 1 000 тонн</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[39px]">
                <div className="w-[192px]">
                  <img src={section1_2} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-center w-[182px] overflow-hidden">
                  <p className="text-[20px] font-[600]">Профиль</p>
                  <p className="text-[20px] font-[400]">более 200 тонн</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[39px]">
                <div className="w-[192px]">
                  <img src={section1_3} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-center w-[182px] overflow-hidden">
                  <p className="text-[20px] font-[600]">Сетка</p>
                  <p className="text-[20px] font-[400]">более 300 тонн</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[39px]">
                <div className="w-[192px]">
                  <img src={section1_4} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-center w-[182px] overflow-hidden">
                  <p className="text-[20px] font-[600]">Профлист</p>
                  <p className="text-[20px] font-[400]">более 300 тонн</p>
                </div>
              </div>
            </div>
            <div className="w-[710px]">
              <img src={section1_5} alt="" draggable="false" />
            </div>
          </div>
        </section>
        <section className="">

        </section>
      </main>
    </div>
  );
}

export default Main;