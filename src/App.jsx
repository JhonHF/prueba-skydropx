import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prev) => prev + 1);

  return (
    <div>
      {count}
      <button onClick={handleIncrease}>subale</button>
    </div>
  );
};
