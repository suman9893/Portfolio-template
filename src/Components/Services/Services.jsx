import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'


function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          Ispum is simpley dummy text of printing
        </span>

        <button className="button s-button">Download Cv</button>
       
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <motion.div 
        initial={{ left: "29rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        style={{ left: "29rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "-4rem", top: "12rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
         style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        <motion.div initial={{ top: "19rem", left: "27rem" }}
          whileInView={{ left: "21rem" }}
          transition={transition} style={{ top: "19rem", left: "27rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
