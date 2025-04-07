export function Card({ image, name, description, price, offer, onClickCard }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "14rem",
        height: "18rem",
      }}
      onClick={onClickCard}>
      <div style={{ height: "70%", width: "100%" }}>
        <img
          src={image}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px 10px 0 0",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          bottom: 90,
          position: "absolute",
          backgroundColor: "#00aaff",
          color: "white",
          paddingInline: "10px",
        }}>
        {offer} offer
      </div>
      <div style={{ paddingInline: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            fontWeight: "500",
            justifyContent: "space-between",
          }}>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "start",
              width: "60%",
            }}>
            {name}
          </div>
          <div>{`${price} for one`}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#ababab",
            overflow: "hidden",
          }}>
          <div
            style={{
              width: "80%",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "start",
              height: "3rem",
              display: "-webkit-box",
              WebkitLineClamp: "3",
            }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
