import { useEffect, useRef, useState } from "react";

const RefHook = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputEl = useRef();
  useEffect(() => {
    count.current = count.current + 1;
  });
  let handleRef = () => {
    inputEl.current.style.backgroundColor = "green";
    console.log(inputEl.current);
  };
  return (
    <>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h1>Render Count: {count.current}</h1>
      <input type="text" ref={inputEl} />
      <button onClick={handleRef}>Clicked</button>
    </>
  );
};
export default RefHook;
