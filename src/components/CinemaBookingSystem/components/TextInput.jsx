import React from "react";
import { getJsxElement } from "../utils/utils";

const TextField = ({ title, color = "black", variant, ...props }) => {
  const styles = {
    color: color,
  };

  const element = getJsxElement({ styles, title, ...props });

  return <div>{element[variant] || element["p"]}</div>;
};

export default TextField;
