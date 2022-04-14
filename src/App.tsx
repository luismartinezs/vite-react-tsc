import { useState } from "react";
import BarSection from "@/components/BarSection";

const App = (): JSX.Element => {
  const headerHeight = 54;
  const barHeight = 24;

  return (
    <div className="font-base text-gray-700 overflow-x-hidden bg-white dark:bg-gray-800 transition duration-300">
      <BarSection barHeight={barHeight} />
    </div>
  );
};

export default App;
