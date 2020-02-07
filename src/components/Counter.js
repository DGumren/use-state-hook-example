import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count + </button>
    </div>
  );
};
export default Counter;
