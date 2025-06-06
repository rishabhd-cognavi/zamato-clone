import { useNavigate, useNavigation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { SearchBar } from "../SearchBar/SearchBar";
export function Navigation() {
  const nav = useNavigate();

  const home = () => nav("/");
  const cart = () => nav("/cart");
  return (
    <div
      style={{
        display: "flex",
        paddingInline: "1rem",
        paddingBlock: "2rem",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderBottom: "1px solid #f2f4f5",
      }}>
      <div style={{ fontWeight: "700", fontSize: "2rem" }} onClick={home}>
        Zomato
      </div>
      <SearchBar />

      <div style={{ display: "flex", gap: "2rem" }}>
        <LuShoppingCart
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
          onClick={cart}
        />
        <CiUser
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
      </div>
    </div>
  );
}
