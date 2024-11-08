import { useState } from "react";

const RefHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <h1>{count}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
    </>
  );
};
export default RefHook;
