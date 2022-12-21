import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <div className="content">
        <div className="left">Refresh</div>
        <div className="right">
          <Link to="/">Home</Link>
        </div>
      </div>
    </C.Container>
  );
};
