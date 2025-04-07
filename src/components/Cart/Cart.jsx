import { useFoodStore } from "../store/Store";
import {
  MdDelete,
  MdOutlineAddCircleOutline,
  MdOutlineDoDisturbOn,
} from "react-icons/md";

export function Cart() {
  const { cart, inc, dec, deleteCartItem } = useFoodStore();
  return (
    <div>
      <div style={{ paddingBlock: "1rem", paddingInline: "0.5rem" }}>
        {cart.map((item) => {
          return (
            <div
              key={item.index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBlockEnd: "1rem",
              }}
            >
              <div style={{ height: "5rem", width: "8rem" }}>
                <img
                  src={item.image}
                  alt="foodImage"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div>
                  <div>{`Order X ${item.count}`}</div>
                  <div>{`Total Price ${item.count * item.price}`}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <MdOutlineAddCircleOutline onClick={() => inc(item.index)} />
                  <MdOutlineDoDisturbOn onClick={() => dec(item.index)} />
                </div>
                <div>
                  <MdDelete onClick={() => deleteCartItem(item.index)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "rgba(250, 253, 255,1)",
          paddingBlock: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div>
          Total{" "}
          {cart.reduce((count, item) => {
            console.log(count, item);
            count = count + Number(item.price * item.count);
            return count;
          }, 0)}
        </div>
      </div>
    </div>
  );
}
