import { useFoodStore } from "../store/Store";

export function SearchBar() {
  const { search, onSearch } = useFoodStore();

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    onSearch(searchTerm);
  };

  console.log("on search", search);
  return (
    <div
      className="iputadd"
      style={{
        border: "1px solid #bababa",
        width: "50%",
        height: "3rem",
        borderRadius: "10px",
      }}>
      <input
        onChange={handleSearch}
        placeholder={"Search food"}
        style={{ width: "100%", height: "100%", paddingInline: "10px" }}
      />
    </div>
  );
}
