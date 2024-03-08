import React from "react";
import { hatch } from "ldrs";

const Loader = ({ size, stroke }: { size?: string; stroke?: string }) => {
  hatch.register();
  return (
    <l-hatch
      size={size ? size : "28"}
      stroke={stroke ? stroke : "4"}
      speed="3.5"
      color="white"
    ></l-hatch>
  );
};

export default Loader;
