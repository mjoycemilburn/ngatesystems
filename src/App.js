import { NavLink, Outlet } from "react-router-dom";
import {About} from './routes/About';
import "./styles/style.css";

export default function App() {

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0 1rem 0",
          borderBottom: "solid 1px white",
        }}
      >
        <div className="HomeTitle">North Gate Systems</div>
        <div className="HomeNav">
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "dimGray" : "black",
                color: "#00FF00",
              };
            }}
            to="/about">About</NavLink>
          <span style={{ color: "white", margin:"0 1rem 0 1rem" }}>:</span>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "dimGray" : "black",
                color: "#FF00FF",
              };
            }}
            to="/waypoints">Waypoints</NavLink>
          <span style={{ color: "white", margin: "0 1rem 0 1rem" }}>:</span>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "dimGray" : "black",
                color: "#FFC000",
              };
            }}
            to="/examples" >Examples</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}