import "./App.css";
import EffectHook from "./pages/effectHook";
import RefHook from "./pages/refHook";
import StateHook from "./pages/stateHook";

function App() {
  return (
    <>
      <StateHook />
      <EffectHook />
      <RefHook />
    </>
  );
}

export default App;
