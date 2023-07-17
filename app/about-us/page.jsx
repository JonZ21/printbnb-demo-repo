import React from "react";
import Image from "next/image";
import hero from "@public/assets/images/logo full.webp";
// import hero2 from "@public/assets/images/logo.webp";
import makisimg from "@public/assets/images/Portrait2.jpg";
import jonimg from "@public/assets/images/jonimg.jpg";
import samimg from "@public/assets/images/samimg.png";
import "@styles/about.css";

const About = () => {
  return (
    <div>
      <div className={"hero"}>
        <div className="hero-content">
          <Image src={hero} alt="hero" className="hero-img" />
        </div>
      </div>

      {/* Printbnb About Me */}
      <div className={"PrintbnbContainer"}>
        <p>
          printbnb exists to create and service a free market of 3D printing and
          design services for all. We are a small startup founded by University
          of Waterloo students who saw a problem within a university student's
          life and wanted to fix it. printbnb is like a Facebook
          marketplace/Airbnb service that enables engineers and enthusiasts to
          find private 3D printer operators to fulfill their 3D printing needs.
          We know that 3D printing can be expensive, and that is why this
          network was created to promote competition so that customers can
          receive the best possible prices for a given quality of print.
          Hopefully, you will enjoy printbnb!
        </p>
      </div>

      {/* Makis About Me */}
      <div className={"MakisContainer"}>
        <Image src={makisimg} alt="MakisImg" className="MakisImg" />
        <p className={"MakisText"}>
          Hi, my name is Makis Lam and I am one of the co-founders of printbnb.
          I am currently currently studying Mechanical Engineering at the
          University of Waterloo (Mech&gt;Tron). In my free time I enjoy going
          for flights with friends, hanging out with friends from CCF, and
          playing certain unnamed computer games.
        </p>
      </div>

      {/* Jon About Me */}
      <div className={"JonContainer"}>
        <p className={"JonText1"} id="myParagraph">
          Hey I'm Jon, and I am currently currently studying Mechatronics
          Engineering at the University of Waterloo. In my free time I enjoy
          playing volleyball, making videos, and convincing friends that Alberta
          is better than Ontario. (ew bagged milk)
        </p>
        <Image src={jonimg} alt="JonImg" className="JonImg" />
        <p className={"JonText2"}>
          Hey I'm Jon, and I am currently currently studying Mechatronics
          Engineering at the University of Waterloo. In my free time I enjoy
          playing volleyball, making videos, and convincing friends that Alberta
          is better than Ontario. (ew bagged milk)
        </p>
      </div>

      {/* Sam About Me */}
      <div className={"SamContainer"}>
        <Image src={samimg} alt="SamImg" className="SamImg" />
        <p className={"SamText"}>
          Hi, my name is Samuel Zheng. I am in Waterloo Computer Science and I
          am also one of the co-founders. I am currently at a TWICE concert so
          Jon is writing this bio for me. I love anime.
        </p>
      </div>
    </div>
  );
};

export default About;
