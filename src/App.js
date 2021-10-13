import "./App.css";

import CalculateEMI from "./screens/CalculateEMI";
import { BrowserRouter, Route } from "react-router-dom";
import Result from "./screens/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={CalculateEMI} exact />
        <Route path="/result" component={Result} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
