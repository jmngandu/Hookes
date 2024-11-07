import { useState } from "react";

import "./App.css";

function App() {
  const [car, setCar] = useState({
    name: "mercedes",
    color: "black",
    model: "S550",
    year: "2023",
  });
  let handleChangeColor = () => {};
  setCar((prev) => {
    return {
      name: "Toyota",
      color: "gray",
      model: "hilux",
      year: "2024",
    };
  });
  return (
    <>
      <h1>My favorate car is {car.name}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={handleChangeColor}>change car</button>
    </>
  );
}

export default App;
