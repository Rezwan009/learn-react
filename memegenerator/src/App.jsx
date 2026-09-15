import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [data, setData] = useState(null);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/1`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
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
