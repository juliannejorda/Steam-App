import React, { useState } from "react";
import axios from "axios";

function Home() {
  // favGame: is the id of the fave game, is whats used to call
  const [favGame, setFavGame] = useState();
  // gameName is where we will update after our GET req the name
  const [gameName, setGameName] = useState();

  function sendGameRequest() {
    axios
      .get(`http://localhost:3001/appid/${favGame}`)
      .then((res) => {
        console.log(res);
        setGameName(res.data);
      })
      .catch((err) => console.log(err));
  }
  // 1085660
  return (
    <div>
      <h1> Testing!</h1>
      <h2>Our input is: {favGame}</h2>
      <h3>Our game name is: {gameName}</h3>
      <input
        type="text"
        placeholder="Fav Game"
        onChange={(e) => setFavGame(e.target.value)}
      />
      <button onClick={sendGameRequest}>Request game name</button>
    </div>
  );
}

export default Home;
