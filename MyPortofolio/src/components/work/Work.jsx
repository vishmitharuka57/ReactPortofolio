/* eslint-disable */
import { useState, useEffect } from "react";
import PortfolioList from "../workList/PortfolioList";
import "./work.scss";
import {
  featuredPortfolio,
  webPortfolio,
  posPortfolio,
  assignmentPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";

export default function Work() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },

    {
      id: "web",
      title: "Web Applications",
    },

    {
      id: "pos",
      title: "POS Systems",
    },

    {
      id: "design",
      title: "Designs",
    },

    {
      id: "assignment",
      title: "Assignments",
    },

    {
      id: "mobile",
      title: "Mobile Applications",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "pos":
        setData(posPortfolio);
        break;
      case "assignment":
        setData(assignmentPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
           <button> <a href={d.url}>GitHub Link</a></button>
             
           
          </div>
        ))}
      </div>
    </div>
  );
}
