import React from "react";

function Favorites({ favorites }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>❤️ Favorites</h2>
      {favorites.map((book, index) => (
        <div key={index} style={{ background: "#f7f7f7", margin: "5px", padding: "5px" }}>
          <strong>{book.title}</strong>
          <p>{book.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
