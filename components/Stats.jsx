"use client";
import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import "@styles/stats.css";
import x from "@public/assets/images/x1.png";
import x1 from "@public/assets/images/x1printer.png";
import Image from "next/image";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div
        className={`mt-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src={x} className="rounded-3xl h-21" />
      </div>
      <div className="flex mb-4 w-full mt-10">
        <div className="w-1/3 content-center text-center">
          <h1 className="numbers">
            <Number n={3} />
          </h1>
          <h2 className="head_text mt-0 text-lg">active printers</h2>
        </div>
        <div className="w-1/3 content-center text-center">
          <h1 className="numbers">
            <Number n={300} />
          </h1>
          <h2 className="head_text mt-0 text-lg">m of filament printed</h2>
        </div>
        <div className="w-1/3 content-center text-center">
          <h1 className="numbers">
            <Number n={15} />
          </h1>
          <h2 className="head_text mt-0 text-lg">projects printed</h2>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="head_text">Top Printers This Month</h1>
        <p className="mt-5">
          Please message the operator with your print file and filament choice!{" "}
        </p>
        {/* need to change this to an actual card system*/}
      </div>
    </div>
  );
};

export default Stats;
