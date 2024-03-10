import { useEffect } from "react";

const Loader = async ({ size, stroke }: { size?: string; stroke?: string }) => {
  useEffect(() => {
    async function getLoader() {
      const { hatch } = await import("ldrs");
      hatch.register();
    }
    getLoader();
  }, []);

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
