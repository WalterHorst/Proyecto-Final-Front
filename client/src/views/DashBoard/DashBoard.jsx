import React, { useState } from "react";
import DashBoardProducts from "../DashBoardProducts/DashBoardProducts";
import DashBoardUsers from "../DashBoardUsers/DashBoardUsers";
import { Button } from "antd";

function DashBoard() {
  const [views, setViews] = useState("DashBoardProducts");
  const productSelect = (view) => {
    setViews(view);
  };

  const userSelect = (view) => {
    setViews(view);
  };
  return (
    <div>
      <Button type="primary" onClick={() => productSelect("DashBoardProducts")}>
        Productos
      </Button>
      <Button type="primary" onClick={() => userSelect("DashBoardUsers")}>
        Usuarios
      </Button>
      <div>DashBoard General</div>
      {views === "DashBoardProducts" && <DashBoardProducts />}
      {views === "DashBoardUsers" && <DashBoardUsers />}
    </div>
  );
}

export default DashBoard;
