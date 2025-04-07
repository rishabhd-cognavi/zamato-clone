import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Cart } from "../../pages/Cart";
import { Home } from "../../pages/Home";
import { Navigation } from "../navigation";

export function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
