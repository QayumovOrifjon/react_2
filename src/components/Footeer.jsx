import "../components/Footeer.css";
import SiteLog from "../assets/Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footeer = () => {
  return (
    <div className="footeer">
      <div className="footeer_inner">
        <img src={SiteLog} alt="Logo" />
        <nav>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Conditions</li>
        </nav>
        <nav>
          <li>
            <FaFacebookF className="icn" /> Facebook
          </li>
          <li>
            <FaTwitter className="icn" /> Twitter
          </li>
          <li>
            <FaInstagram className="icn" /> Instagram
          </li>
        </nav>
        <div>
          <p>Subscribe to our newsletter</p>
          <div className="inpEmail">
            {" "}
            <input type="email" id="email" />
            <button className="btn">OK</button>
          </div>
        </div>
        <nav>
          <li>497 Evergreen Rd. Roseville, CA 95673</li>
          <li>+44 345 678 903</li>
          <li>adobexd@mail.com</li>
        </nav>
      </div>
    </div>
  );
};

export default Footeer;
