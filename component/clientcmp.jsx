import React from "react";

const clientcmp = (Cmp) => (props) => {
  return <Cmp {...props} />;
};

export default clientcmp;
