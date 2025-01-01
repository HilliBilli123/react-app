import { useEffect, useState } from "react";
import "./Home.scss";
import imgSlide from "../../assets/image/carrots.png";
import imgSlide2 from "../../assets/image/freshAsparagus.png";
import imgSlide3 from "../../assets/image/greenLeaves.png";
import imgSlide4 from "../../assets/image/greenTree.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [imgSlide, imgSlide2, imgSlide3, imgSlide4]; // Массив с изображениями слайдов
  const slides = [
    {
      img: imgSlide,
      text: "Морковь",
      underText:
        "Овощная культура, вторая по популярности в Европе после картофеля, относится к семейству Зонтичных. Название «морко́вь» происходит от слова mъrky из старославянского языка. На латинском языке звучит как carota, отсюда и название пигмента β-каротин.",
    },
    {
      img: imgSlide2,
      text: "Спаржа",
      underText:
        "Спаржа подходит тем, кто придерживается принципов здорового питания и хочет нормализовать вес: в ней мало калорий, много клетчатки и питательных веществ. Рассказываем о других полезных свойствах растения.",
    },
    {
      img: imgSlide3,
      text: "Цветная капуста",
      underText:
        "Овощи необходимы нашему организму как источник питательных веществ и витаминов. В этом отношении цветная капуста занимает одну из лидирующих позиций. Она содержит не только распространенные, но и довольно редкие микроэлементы, которые помогают предотвратить серьезные заболевания",
    },
    {
      img: imgSlide4,
      text: "Брокколи",
      underText:
        "Брокколи содержит огромное количество важных для человека витаминов и минералов. По своему химическому составу брокколи обгоняет цветную капусту. Например, в 100 г продукта находится столько же кальция, сколько в стакане молока.",
    },
  ];

  const slide = (type: string) => {
    let newIndex = currentSlide;

    if (type === "right") {
      newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    } else if (type === "left") {
      newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    }

    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide("right"); // Каждый 5 секунд переключаем на следующий слайд
    }, 5000); // 5000 миллисекунд = 5 секунд

    return () => clearInterval(interval); // Очистка таймера при размонтировании компонента
  }, [currentSlide]); // Зависимость от currentSlide, чтобы обновлять таймер
  return (
    <div>
      <div className="home-page content-width">
        <div className="home-page_slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index === currentSlide - 1
                  ? "prev"
                  : ""
              }`}
            >
              <div className="slide-content">
                <div className="slide-content_text__block">
                  <div className="text-large_text">{slide.text}</div>
                  <div className="text-under_text">{slide.underText}</div>
                </div>
                <div className="slide-content_img">
                  <img src={slide.img} alt="" />
                </div>
              </div>
            </div>
          ))}
          {/* <div className="slide-buttons">
            <div
              onClick={() => slide("left")}
              className="slide-button_style button-left"
            >
              {"<"}
            </div>
            <div
              onClick={() => slide("right")}
              className="slide-button_style button-right"
            >
              {">"}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
