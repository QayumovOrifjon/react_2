import "../components/Hero.css";
import SiteLog from "../assets/Logo.svg";
import { IoMdSearch } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <ul>
            <li>Home</li>
            <li>Clothes</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </nav>
        <img src={SiteLog} alt="Logo" />

        <div className="icon">
          <input className="search" type="search" placeholder="search..." />
          <IoMdSearch />
          <FaUserLarge />
          <SlBasket />
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default Hero;
