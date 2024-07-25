import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-950%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>VISHMI THARUKA</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer and UI/UX Designer
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} whileTap={{scale: 0.85}} whileHover={{background:" rgb(3, 76, 82)" , border: "1px solid rgb(3, 76, 82)"}}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 0.85}} whileHover={{background:"rgb(3, 76, 82)", border: "1px solid rgb(3, 76, 82)"} }>Contact Me</motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt=""
            width={50}
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer UI/UX Designer Freelancer
      </motion.div>

      <div className="imageContainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
