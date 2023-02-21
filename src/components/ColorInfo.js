function ColorInfo({ color }) {
  function copyToClickboard(event) {
    const { innerText } = event.target;
    navigator.clipboard.writeText(innerText);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        width: "200px",
        padding: "5px 10px",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={copyToClickboard}
    >
      {color}
    </div>
  );
}

export default ColorInfo;
