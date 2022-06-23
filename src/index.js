import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import App from "./App";
import { About } from "./routes/About";
import { Waypoints } from "./routes/Waypoints";
import { Examples } from "./routes/Examples";

import "./styles/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="about" element={<About postTitle="About" />} />
        <Route path="waypoints" element={<Waypoints />} />
        <Route path="examples" element={<Examples />} />
        <Route path="/" element={<About postTitle="About" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

