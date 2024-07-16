import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x:-400,
    y:80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="textContainer" variants={variants}>
         
        <hr />
         <p>
            I create modern, responsive websites
            <br /> that make your brand stand out and thrive
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.jpg" alt="" />
            <h1>
              <motion.b whileHover={{color:"rgb(3, 76, 82)"}}>Unique</motion.b> Ideas
            </h1>
          </div>

          <div className="title">
            <h1>
              <motion.b whileHover={{color:"rgb(3, 76, 82)"}}>For Your</motion.b> Business.
            </h1>
            <motion.button whileHover={{background: "white", color:"black"} } whileTap={{scale: 0.85}}>What We Do?</motion.button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "white", color: "black" }}
          >
            <h2>Website Design and Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              labore maxime accusamus reiciendis nisi delectus sit amet.
            </p>
            <motion.button whileTap={{scale: 0.85}} whileHover={{color:"white"}}>Go</motion.button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "white", color: "black" }}
          >
            <h2>User Interface (UI) Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              labore maxime accusamus reiciendis nisi delectus sit amet.
            </p>
            <motion.button whileTap={{scale: 0.85}} whileHover={{color:"white"}}>Go</motion.button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "white", color: "black" }}
          >
            <h2>Single Page Application (SPA) Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              labore maxime accusamus reiciendis nisi delectus sit amet.
            </p>
            <motion.button whileTap={{scale: 0.85}} whileHover={{color:"white"}}>Go</motion.button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "white", color: "black" }}
          >
            <h2>Version Control and Collaboration</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              labore maxime accusamus reiciendis nisi delectus sit amet.
            </p>
            <motion.button whileTap={{scale: 0.85}} whileHover={{color:"white"}} >Go</motion.button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "white", color: "black" }}
          >
            <h2>E-commerce Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
              labore maxime accusamus reiciendis nisi delectus sit amet.
            </p>
            <motion.button whileTap={{scale: 0.85}} whileHover={{color:"white"}}>Go</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
