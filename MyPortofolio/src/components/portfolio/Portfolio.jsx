/* eslint-disable */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Library Management System",
    img: "/lms.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 2,
    title: "Shoe Retail Management System",
    img: "/helloshoe.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 3,
    title: "Chat App",
    img: "/chatapp.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 4,
    title: "Travel Management System",
    img: "/nexttravel.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 5,
    title: "POS System",
    img: "/pos.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 6,
    title: "React Portfolio",
    img: "/reactportfolio.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },

  {
    id: 7,
    title: "Single Page Application",
    img: "/spa.png",
    desc: " Lorem ipsum dolor consectetur, adipisicing elit. Quaerat tempore! Totam laudantium dolore quo, exercitationem unde tempore consequuntur minima!  quaerat explicabo, sapiente dicta?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">

        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
          

          <motion.div className="textContainer" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
            <button>GitHub Link</button>
            <button>See Project</button>
            </div>
            
          </motion.div>

        </div>

      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio"ref={ ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
