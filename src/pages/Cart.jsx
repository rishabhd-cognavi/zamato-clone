import {
  MdDelete,
  MdOutlineAddCircleOutline,
  MdOutlineDoDisturbOn,
} from "react-icons/md";
import { BsFillCartXFill } from "react-icons/bs";
import { useFoodStore } from "../components/store/Store";

export function Cart() {
  const { cart, inc, dec, deleteCartItem, deleteCart } = useFoodStore();
  const handleDelete = () => {
    deleteCart();
  };
  return (
    <div>
      <div style={{ paddingBlock: "1rem", paddingInline: "0.5rem" }}>
        {cart.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}>
            No Item in cart
          </div>
        )}
        {cart.map((item) => {
          return (
            <div
              key={item.index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBlockEnd: "1rem",
              }}>
              <div style={{ height: "5rem", width: "8rem" }}>
                <img
                  src={item.image}
                  alt="foodImage"
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div>
                  <div>{`Order X ${item.count}`}</div>
                  <div>{`Total Price ${item.count * item.price}`}</div>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "1rem" }}>
                  <MdOutlineAddCircleOutline
                    style={{ height: "1.5rem", width: "1.5rem" }}
                    onClick={() => inc(item.index)}
                  />
                  <MdOutlineDoDisturbOn
                    style={{ height: "1.5rem", width: "1.5rem" }}
                    onClick={() => dec(item.index)}
                  />
                </div>
                <div>
                  <MdDelete
                    className="deleteHover"
                    style={{ height: "2rem", width: "2rem", color: "red" }}
                    onClick={() => deleteCartItem(item.index)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <div
          style={{
            backgroundColor: "rgba(250, 253, 255,1)",
            paddingBlock: "1rem",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "2rem",
            gap: "2rem",
            alignItems: "center",
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>Delete you cart</span>
            <BsFillCartXFill
              style={{ height: "2rem", width: "2rem", color: "red" }}
              onClick={handleDelete}
            />
          </div>
          <div style={{ fontWeight: "500", fontSize: "1.254rem" }}>
            Total{" "}
            {cart.reduce((count, item) => {
              console.log(count, item);
              count = count + Number(item.price * item.count);
              return count;
            }, 0)}
          </div>
        </div>
      )}
    </div>
  );
}
