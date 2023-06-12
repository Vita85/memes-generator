import { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  });

  // const randomImage = Math.floor(Math.random(setMemes) * 99);
  // useEffect(() => {
  //   setMemes(randomImage)
  // }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="logo">
            <img src="./img/Troll Face.png" alt="Troll" />
            <h2>Meme Generator</h2>
          </div>
          <p>by your Name</p>
        </header>
        <div className="forms">
          <input type="text" placeholder="Top meme text" />
          <input type="text" placeholder="Bottom meme text" />
        </div>
        <div className="generator" onClick={setMemes}>
          <p>Get a new meme image</p>
          <img src="./img/picture.svg" alt="" />
        </div>
        <div className="image-container">
          {memes.map((el) => {
              return (
                <MemeCard img={el.url}/>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
