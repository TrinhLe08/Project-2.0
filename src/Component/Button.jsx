import { useState, useEffect, useRef } from "react";

export default function Button() {
  let Button = useRef(null);
  let Button1 = useRef(null);
  let Button2 = useRef(null);

  let Main = useRef(null);

  let Scroll = window.innerHeight;
  let Height = 900;
  let X = window.pageYOffset;

  useEffect(() => {
    Button.current = document.querySelector(".Button");
    Button1.current = document.querySelector(".Button1");
    Button2.current = document.querySelector(".Button2");
    Main.current = document.querySelector(".Main");
  }, []);

  const [scroll, setScroll] = useState(Height);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPercentageHeight = (percentage) => {
    const windowHeight = window.innerHeight;
    return (percentage / 100) * windowHeight;
  };

  const Toggle1 = () => {
    const distance = getPercentageHeight(50);
    Toggle(-1, distance);
  };

  const Toggle2 = () => {
    const distance = getPercentageHeight(50);
    Toggle(1, distance);
  };

  const Toggle = (number, distance) => {
    const newScroll = scroll + number * distance;

    if (number == 1) {
      X = X + Height;

      window.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });
    } else if (number == -1) {
      X = X - Height;

      window.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Button">
      <button className="Button1" onClick={Toggle1}>
        ↑
      </button>
      <button className="Button2" onClick={Toggle2}>
        ↓
      </button>
    </div>
  );
}
