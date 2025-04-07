import { Card } from "../Cards/Card";
import { useFoodStore } from "../store/Store";
import toast from "react-hot-toast";
import { IoCheckmarkCircle } from "react-icons/io5";

export function Restaurant() {
  const { foodList, addToCart, cart } = useFoodStore();
  const notify = () =>
    toast("added to cart", {
      icon: <IoCheckmarkCircle style={{ color: "green" }} />,
    });

  const handleCardClick = (item) => {
    notify();
    addToCart(item);
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      }}>
      {foodList.map((item) => (
        <Card
          key={item.index}
          name={item.name}
          offer={item.offer}
          image={item.image}
          description={item.description}
          price={item.price}
          onClickCard={() => handleCardClick(item)}
        />
      ))}
    </div>
  );
}
