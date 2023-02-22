import { Outlet } from "react-router-dom";
import "./App.css";

import Birthday from "./assets/birthday.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Birthday})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
