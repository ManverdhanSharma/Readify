import React from "react";

function BookCard({ text, addToFavorites }) {
  const titleMatch = text.match(/Title: (.*)/i);
  const title = titleMatch ? titleMatch[1] : "Untitled Book";

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginTop: "10px" }}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={() => addToFavorites({ title, text })}>Add to Favorites</button>
    </div>
  );
}

export default BookCard;
