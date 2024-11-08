import { useState } from "react";

const RefHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  let handleIncre = () => {
    setCount((count) => count + 1);
    setValue((value) => value - 1);
  };

  let handleDecre = () => {
    setCount((count) => count - 1);
    setValue((value) => value + 1);
  };
  return (
    <>
      <button onClick={handleIncre}>-1</button>
      <h1>{value}</h1>
      <h1>{count}</h1>
      <button onClick={handleDecre}>+1</button>
    </>
  );
};
export default RefHook;
