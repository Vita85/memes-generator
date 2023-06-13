import { useEffect, useState } from "react";

function App() {
  const [memes, setMemes] = useState([]);
  const [singleMeme, setSingleMeme] = useState(
    "https://i.imgflip.com/24y43o.jpg"
  ); //передаємо зображення дефолтне, для того, щоб користувач при завантаженні сторінки його бачив ще до того, як виконається  useEffect

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);
  //тут ми зберегли всі меми. які витягнули useEffect-ом

  const onClickSetNewMeme = () => {
    const randomImage = Math.floor(Math.random() * 99);
    setSingleMeme(memes[randomImage].url);
  };
  //рандомно за допомогою фун-ї  randomImage повертаємо з бази картинок memes 1 картинку, по її url

  const [memesText, setMemesText] = useState({
    topText: "",
    bottomText: "",
  });

  const onChangeSetMemesText = (event) => {
    setMemesText((prevInfo) => {
      return {
        ...prevInfo,
        [event.target.name]: event.target.value,
      };
    });
  };
  //тут в залежності від імені ключа записується в інпут і виводиться в певний параграф
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
          <input
            type="text"
            placeholder="Top meme text"
            value={memesText.topText}
            onChange={onChangeSetMemesText}
            name="topText"
          />

          <input
            type="text"
            placeholder="Bottom meme text"
            value={memesText.bottomText}
            onChange={onChangeSetMemesText}
            name="bottomText"
          />
        </div>

        <div className="generator" onClick={onClickSetNewMeme}>
          <p>Get a new meme image</p>
          <img src="./img/picture.svg" alt="" />
        </div>

        <div className="image-container">
          <p className="top">{memesText.topText}</p>
          <p className="bottom">{memesText.bottomText}</p>
          <img src={singleMeme} alt="" />
        </div>
        
      </div>
    </div>
  );
}
export default App;
