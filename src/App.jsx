import { AppRouter } from "./components/Router/AppRouter";
import { Toaster } from "react-hot-toast";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
            fontSize: "1rem",
          },
        }}
      />
      <AppRouter />
    </div>
  );
}
