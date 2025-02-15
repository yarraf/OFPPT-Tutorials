import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div style={{ padding: "5px", marginLeft: "5px" }}>
      <Outlet />
    </div>
  );
};


export default Content;