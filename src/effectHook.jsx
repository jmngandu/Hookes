import { useEffect, useState } from "react";
function EffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]);
  return (
    <div>
      <h1>i rendered {count} times!</h1>
    </div>
  );
}

export default EffectHook;
