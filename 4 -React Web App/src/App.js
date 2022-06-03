import { LedIndicator } from "./components/LedIndicator";
import { SwapValueButton } from "./components/SwapValueButton";

function App() {
  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-content-center">
        <LedIndicator />
        <SwapValueButton />
      </div>
    </div>
  );
}

export default App;