/* eslint-disable */
import React, { useRef, useEffect, useState } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setScrollEnabled(true);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const yBg3 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg4 = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, rgb(2, 48, 44), rgb(5, 207, 147), rgb(9, 218, 183))"
            : "linear-gradient(180deg, rgb(75, 238, 203), white, rgb(6, 134, 113))",
      }}
    >
      {scrollEnabled && (
        <>
          <motion.h1 style={{ y: yText }}>
            {type === "services" ? "What we Do?" : "What we Did?"}
          </motion.h1>
          <motion.div className="mountains"></motion.div>
          <motion.div
            style={{
              y: yBg1,
              backgroundImage: `url(${
                type === "services" ? "/moon.png" : "/sunn.png"
              })`,
            }}
            className="planets"
          ></motion.div>
          <motion.div style={{ x: yBg2 }} className="stars1"></motion.div>
          <motion.div style={{ x: yBg3 }} className="stars2"></motion.div>
          <motion.div style={{ x: yBg4 }} className="boat"></motion.div>
        </>
      )}
    </div>
  );
};

export default Parallax;
