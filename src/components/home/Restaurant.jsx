import { Card } from "../Cards/Card";
import { useFoodStore } from "../store/Store";

export function Restaurant() {
  const { foodList, addToCart, cart } = useFoodStore();

  console.log(cart);
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      {foodList.map((item) => (
        <Card
          key={item.index}
          name={item.name}
          offer={item.offer}
          image={item.image}
          description={item.description}
          price={item.price}
          onClickCard={() => addToCart(item)}
        />
      ))}
    </div>
  );
}
