import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import Favorites from "./Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    if (!favorites.find(fav => fav.title === book.title)) {
      setFavorites([...favorites, book]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Readify – Your AI Book Buddy</h1>
      <ChatWindow addToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
