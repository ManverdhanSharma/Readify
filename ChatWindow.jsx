import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function ChatWindow({ addToFavorites }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/api/recommend", { message });
    setResponse(res.data.reply);
  };

  return (
    <div>
      <textarea
        rows="3"
        style={{ width: "100%" }}
        placeholder="Ask Readify about books..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
      {response && (
        <BookCard text={response} addToFavorites={addToFavorites} />
      )}
    </div>
  );
}

export default ChatWindow;
