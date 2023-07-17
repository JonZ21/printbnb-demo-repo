"use client";
import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import "@styles/stats.css";
import p1p from "@public/assets/images/p1p printer.png";
import x1 from "@public/assets/images/x1printer.png";
import svo6 from "@public/assets/images/Sovol Svo06.png";
import Image from "next/image";

const Card = ({ printer }) => {
  return (
    <div>
      <div className="rounded-xl bg-gray-500/10 flex w-full h-60 mt-10 justify-between mb-20">
        <div className="flex w-3/4 content-left text-left">
          <div className="ml-10 text-left mt-10">
            <h2 className="text-lg font-bold">Bambu X1 Carbon</h2>
            <span>PLA (white/black/gray/blue)</span>
            <div className="text-left">
              <p>
                Location: <span className="blue_gradient">Kitchener, ON</span>
              </p>
              <p>
                Rate: <span className="blue_gradient">$0.07/gram</span>
              </p>
            </div>
            <button
              className="outline_btn mt-5"
              onClick={() => {
                window.open("mailto:makis.lam@printbnb.ca");
              }}
            >
              Contact Operator
            </button>
          </div>
        </div>
        <Image src={x1} className="object-contain w-1/3" />
      </div>
      <div className="rounded-xl bg-gray-500/10 flex w-full h-60 mt-10 justify-between mb-20">
        <div className="flex w-3/4 content-left text-left">
          <div className="ml-10 text-left mt-10">
            <h2 className="text-lg font-bold">Bambu P1P</h2>
            <span>PLA (white)</span>
            <div className="text-left">
              <p>
                Location: <span className="blue_gradient">Waterloo, ON</span>
              </p>
              <p>
                Rate: <span className="blue_gradient">$0.07/gram</span>
              </p>
            </div>
            <button
              className="outline_btn mt-5"
              onClick={() => {
                window.open("mailto:Zhengc84@gmail.com");
              }}
            >
              Contact Operator
            </button>
          </div>
        </div>
        <Image src={p1p} className="object-contain w-1/3" />
      </div>
      <div className="rounded-xl bg-gray-500/10 flex w-full h-60 mt-10 justify-between mb-20">
        <div className="flex w-3/4 content-left text-left">
          <div className="ml-10 text-left mt-10">
            <h2 className="text-lg font-bold">Sovol Svo6</h2>
            <span>PLA (black)</span>
            <div className="text-left">
              <p>
                Location: <span className="blue_gradient">Waterloo, ON</span>
              </p>
              <p>
                Rate: <span className="blue_gradient">$0.07/gram</span>
              </p>
            </div>
            <button
              className="outline_btn mt-5"
              onClick={() => {
                window.open("mailto:nathanshen47@gmail.com");
              }}
            >
              Contact Operator
            </button>
          </div>
        </div>
        <Image src={svo6} className="object-contain w-1/3" />
      </div>
    </div>
  );
};

export default Card;
