import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import WindowTracker from "./components/WindowTracker";
function App() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }
  const [allMemes, setAllMemes] = useState([]);

  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // useEffect(() => {
  //   fetch(`https://api.imgflip.com/get_memes`)
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.memes));
  // }, []);

  return (
    <>
      <Header />
      <main>
        <div>
          <button onClick={toggle}>Toggle WindowTracker</button>
          {show && <WindowTracker />}
        </div>
        <div>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Get next character
          </button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <div className="form">
          <label>
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
          <button>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
          <img src={meme.imageUrl} />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottomText}</span>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
