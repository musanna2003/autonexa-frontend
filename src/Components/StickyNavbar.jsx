import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
console.log(motion)

const StickyNavbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current) {
        setShow(true);
      } else {
        setShow(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 "
    >
      <Nav />
    </motion.div>
  );
};

export default StickyNavbar;
