"use client";
import React, { useState } from "react";
import Servercmp from "./Servercmp";

const Clientcmp = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
      Clientcmp
      <Servercmp />
    </div>
  );
};

export default Clientcmp;
