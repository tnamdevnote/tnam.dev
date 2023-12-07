"use client";

import React from "react";
import Icon from "../icon/icon";
import { Action, useDarkModeContext } from "@/app/context/darkmodeContext";

function ToggleButton() {
  const { state, dispatch } = useDarkModeContext();

  const handleClick = (actionType: Action["type"]) => {
    dispatch({ type: actionType });
  };

  console.log(state);
  return (
    <button onClick={() => handleClick("LIGHT_THEME")}>
      <Icon name="Moon" />
    </button>
  );
}

export default ToggleButton;
