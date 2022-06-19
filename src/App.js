import "./App.css";
import Playground, { Paint } from "./components/Playground";
import Name from "./components/Name";

function App() {
  return (
    <div className="App">
      <h1>This is example how to use hook</h1>
      <Playground />
      <Name />
    </div>
  );
}

export default App;
