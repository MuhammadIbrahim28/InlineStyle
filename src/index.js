import React from "react";
import ReactDom from "react-dom";
const customstyle = {
  fontSize: "20px",
  color: "red",
  border: "1px solid red"
};
customstyle.color = "blue";

ReactDom.render(
  <h1 style={customstyle}>Yes Ibrahim</h1>,
  document.getElementById("root")
);
