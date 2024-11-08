import "./App.css";
import MemoHook from "./pages/memoHook";
import StateHook from "./pages/stateHook";
import EffectHook from "./pages/effectHook";
import RefHook from "./pages/refHook";

function App() {
  return (
    <>
      <StateHook />
      <EffectHook />
      <RefHook />
      <MemoHook />
    </>
  );
}

export default App;
