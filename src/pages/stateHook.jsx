import { useState } from "react";

function StateHook() {
  const [car, setCar] = useState({
    name: "Mercedes",
    color: "black",
    model: "S550",
    year: "2023",
  });

  let handleChangeColor = () => {
    setCar((prev) => {
      return {
        ...prev,
        color: "white",
      };
    });
  };

  return (
    <>
      <h1>My favorite car is {car.name}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={handleChangeColor}>Change color</button>
    </>
  );
}

export default StateHook;
