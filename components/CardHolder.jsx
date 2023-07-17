"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardHolder() {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    fetch("/api/publish")
      .then((response) => response.json())
      .then((data) => setPrinters(data));
  }, []);

  return (
    <div style={{width: "100%"}}>
      {printers.map((printer) => (
        <Card key={printer._id} printer={printer} />
      ))}
    </div>
  );
}

export default CardHolder;
