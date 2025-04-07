export function Card({ image, name, description, price, offer, onClickCard }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "10rem",
      }}
      onClick={onClickCard}
    >
      <div style={{ height: "70%", width: "100%" }}>
        <img
          src={image}
          style={{
            height: "100%",
            borderRadius: "10px 10px 0 0",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        style={{
          bottom: 70,
          position: "absolute",
          backgroundColor: "#00aaff",
          color: "white",
          paddingInline: "10px",
        }}
      >
        {offer} offer
      </div>
      <div style={{ paddingInline: "0.5rem" }}>
        <div style={{ display: "flex", fontWeight: "500" }}>{name}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#ababab",
          }}
        >
          <div>{description}</div>
          <div>{`${price} for one`}</div>
        </div>
      </div>
    </div>
  );
}
