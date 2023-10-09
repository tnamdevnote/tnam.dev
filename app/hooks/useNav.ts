"use client";

import React, { useRef } from "react";
import useOnVisible from "./useOnVisible";

function useNav() {
  const ref = useRef(null);

  useOnVisible(ref);

  return ref;
}

export default useNav;
