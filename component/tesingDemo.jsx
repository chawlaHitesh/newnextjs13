"use client";
import React, { useEffect, useState } from "react";

const TesingDemo = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {}, []);

  return (
    <div>
      TesingDemo1111111111111111
      {count}
      <button onClick={() => setcount((pr) => pr + 1)}>CLICK</button>
    </div>
  );
};

export default TesingDemo;
