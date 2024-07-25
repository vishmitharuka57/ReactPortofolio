import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Vishmi Tharuka
          </motion.span>
          <div className="social">
            <a href="https://www.fiverr.com/pe/pdlWBKy ">
              <img src="/fiverr.png" alt="" />
            </a>
            <a href="https://www.tiktok.com/@codewithvish?_t=8oDBDiZSG5C&_r=1">
              <img src="/tiktok.png" alt="" />
            </a>
            <a href="https://github.com/vishmitharuka57">
              <img src="/github.png" alt="" />
            </a>
            <a href="https://linkedin.com/in/vishmi%02tharuka-a32aa6244#">
              <img src="/linkedin.png" alt="" />
            </a>
            <a href="https://medium.com/@tharukavi%20shmipk24">
              <img src="/medium.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
