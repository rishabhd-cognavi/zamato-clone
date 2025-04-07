import { Filter } from "../components/filter/Filter";
import { Restaurant } from "../components/home";

export function Home() {
  return (
    <>
      <Filter />
      <div style={{ paddingInline: "1rem" }}>
        <h2
          style={{
            display: "flex",
            paddingBlock: "0.5rem",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            fontWeight: "600",
          }}>
          Food Delivery Restaurants in Delhi NCR
        </h2>
        <Restaurant />
      </div>
    </>
  );
}
