import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  let handleChangeColor = () => {
    setColor("green");
  };
  return (
    <>
      <h1>I like color {color}</h1>
      <button onClick={handleChangeColor}>change</button>
    </>
  );
}

export default App;
