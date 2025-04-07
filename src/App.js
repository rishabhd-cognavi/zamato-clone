import { Router } from "react-router-dom";
import { Navigation } from "./components";
import { AppRouter } from "./components/Router/AppRouter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
