import axios from "axios";
import React from "react";
import Clientcmp from "./Clientcmp";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// export const revalidate = 0.1;
const blogs = async () => {
  // const a = await axios.get("http://localhost:3000/data.json");
  const a = await axios.get("https://jsonplaceholder.typicode.com/todos");
  // const red = await fetch("http://localhost:3000/data.json");
  // const a = await red.json();

  return (
    <div>
      {/* {a?.data?.data?.map((e) => {
        return <h1>{e.name}</h1>;
      })} */}
      <Clientcmp />
      <h1>123</h1>
    </div>
  );
};

export default blogs;
