import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsDribbble,
} from "react-icons/bs";
import { motion } from "framer-motion";
import NewsLetter from "../NewsLetter";


const Footer = () => {
  return (
    <footer className="px-4 pt-16 pb8 bg-primary sm:p-6 w-full xl:pt-24 xl:pb-2">
      <div className="flex flex-col justify-center md:justify-start items-center xl:justify-between xl:flex-row">
        <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} className="mb-3 hidden  md:mb-0 lg:flex xl:basis-[23%]">
          <Link to="/" className="flex gap-2 items-center">
            <motion.img
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              src={Logo}
              className="w-10 md:w-36 object-contain"
              alt="Logo"
            />
            <span className="self-center  text-2xl font-semibold whitespace-nowrap text-headingColor">
              Rukky Cusine
            </span>
          </Link>
        </motion.div>
        <div className="nav-container gap-y-12 flex flex-wrap justify-between xl:basis-[73%]">
          <div className="nav1 basis-1/2 xl:basis-2/6">
            <h2 className="text-lg font-bold mb-4 xl:text-2xl  "> About</h2>
            <ul className="flex flex-col xl:gap-y-3">
              <li>
                <Link to="#information" className="inline hover:text-[#BC3908]">&gt; Information</Link>
              </li>
              <li>
                <Link to="#specialdishes" className="inline hover:text-[#BC3908]">&gt; Special Dishes</Link></li>
              <li>
                <Link to="#reservation" className="inline hover:text-[#BC3908]">&gt; Reservation</Link>
              </li>
              <li>
                <Link to="#contact" className="inline">&gt; Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav1 basis-1/2 xl:basis-2/6">
            <h2 className="text-lg font-bold mb-4 xl:text-2xl  ">Menu</h2>
            <ul className="flex flex-col xl:gap-y-3">
              <li>
                <Link to="#information" className="inline hover:text-[#BC3908]"> &gt; Fruits</Link>
              </li>
              <li>
                <Link to="#information" className="inline hover:text-[#BC3908]"> &gt; Coctails</Link>
              </li>
              <li>
                <Link to="#information" className="inline hover:text-[#BC3908]"> &gt; Bar B Q</Link>
              </li>
              <li>
                <Link to="#information" className="inline hover:text-[#BC3908]"> &gt; Desserts</Link>
              </li>
            </ul>
          </div>
          {/* NEWSLETTER */}
          <NewsLetter />
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()} Rukky Cusine™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 md:text-xl">
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://qbentil.com"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsDribbble />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/qbentil"
            className="text-textColor h-10 w-8 bg-primary rounded-full flex items-center justify-center"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://linkedin.com/in/bentil"
            className="text-textColor h-10 w-8 bg-primary rounded-full flex items-center justify-center"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://twitter.com/themanbentil"
            className="text-textColor h-10 w-8 bg-primary rounded-full flex items-center justify-center"
          >
            <BsTwitter />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://instagram.com/qbentil"
            className="text-textColor h-10 w-8 bg-primary rounded-full flex items-center justify-center"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://facebook.com/qbentil"
            className="text-textColor h-10 w-8 bg-primary rounded-full flex items-center justify-center"
          >
            <BsFacebook />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
