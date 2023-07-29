"use client";
import React, { useState } from "react";

const FundataWrap = ({ children }) => {
  const [count, setCount] = useState(0);
  return children({ count, setCount });
};

export default FundataWrap;
