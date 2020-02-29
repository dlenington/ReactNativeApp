import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <AppBar position="static">
      <ToolBar>
        <Button></Button>
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
