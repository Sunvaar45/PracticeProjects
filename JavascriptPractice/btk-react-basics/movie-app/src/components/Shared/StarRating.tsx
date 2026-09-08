const containerStyle = {
  display: "flex",
  gap: "1rem",
};

const itemContainerStyle = {
  display: "flex",
  gap: ".2rem",
};

const textStyle = {
  margin: 0,
};

export function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        {Array.from({ length: maxRating }, (_value, index) => (
          <i className="bi bi-star" key={index}></i>
        ))}
      </div>
      <p style={textStyle}>4</p>
    </div>
  );
}
