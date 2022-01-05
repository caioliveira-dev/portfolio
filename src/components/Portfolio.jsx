import React from "react";
import "./Portfolio.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      tool: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      title: "Nome do Projeto",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis",
      img: "https://wallpaperaccess.com/full/1555172.jpg",
    },
    {
      id: "2",
      tool: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      title: "Nome do Projeto 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis",
      img: "https://wallpaperaccess.com/full/1555172.jpg",
    },
    {
      id: "3",
      tool: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      title: "Nome do Projeto 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis",
      img: "https://wallpaperaccess.com/full/1555172.jpg",
    },
  ];

  const slideClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
        <div className="title">
            <h1>Meus Projetos</h1>
        </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="Container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.tool} alt="Construçãoprojeto" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projeto</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://wallpaperaccess.com/full/1555172.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <AiFillCaretLeft
        className="arrow left"
        onClick={() => slideClick("left")}
      />
      <AiFillCaretRight className="arrow right" onClick={() => slideClick()} />
    </div>
  );
}
