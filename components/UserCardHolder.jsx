"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import "@styles/stats.css";
import Card from "./Card";

function UserCardHolder() {
  const { data: session } = useSession();
  const [printers, setPrinters] = useState([]);
  useEffect(() => {
    fetch(`/api/user-printer`)
      .then((response) => response.json())
      .then((data) => setPrinters(data));
  }, [session]);

  return (
    <div className="mt-10">
      <h1 className="head_text">Your Printers</h1>
      <div style={{ width: "100%" }}>
        {printers.map((printer) => (
          <Card key={printer._id} printer={printer} />
        ))}
      </div>
    </div>
  );
}

export default UserCardHolder;
