import React from "react";
import HandImg from "../images/hand.svg";
import QuestionImg from "../images/question.svg";
import InfoCard from "./InfoCard";

const SecondPage = () => {
  const InfoCardsArray = [
    {
      header: "Создание мобильного приложения",
      paragraph:
        "Разработка мобильных приложений под IOS и Android которые будут воплощением вашей идеи. Использование лучших практик и решений, которые помогают нам реализовывать приложения в жизнь в 2-3 раза быстрее, чем ожидают от нас.",
    },
    {
      header: "Реализация нового продукта",
      paragraph:
        "Специальная команда поможет вам с определением идеи и воплощением ее в жизнь. Команда будет поддерживать вас на протяжении всего процесса реализации: начиная с семинаров по открытию, через проектирование и прототипирование, до запуска вашего продукта.",
    },
    {
      header: "Оптимизация внутренних процессов",
      paragraph:
        "От технологической инфраструктуры до ежедневных операций - оптимизируем вашу систему и бизнес-процессы, тем самым сокращая сроки выхода на рынок, улучшая отношения с клиентами и повышая качество взаимодействий внутри компании.",
    },
  ];

  return (
    <div className="mt-[2rem] px-5 container block lg:flex">
      <div className="xl:w-[30%] hidden xl:inline relative">
        <img src={QuestionImg} className="absolute ml-[10rem] z-20" />
        <img src={HandImg} className="absolute mt-[7rem] z-0" />
      </div>

      <div className="text-content w-100 lg:w-[100%]">
        <div className="text-center font-[600] text-3xl">
          Чем мы можем вам помочь:
        </div>

        <div className="cards block mx-auto items-center md:flex md:justify-between">
          {InfoCardsArray.map((item, index) => {
            let isCentral = false;

            index == 1 ? (isCentral = true) : (isCentral = false);
            return (
              <div key={index}>
                <InfoCard
                  header={item.header}
                  paragraph={item.paragraph}
                  isCentral={isCentral}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
