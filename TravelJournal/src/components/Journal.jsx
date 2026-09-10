
const Journal = () => {
  return (
    <article className="journals">
      <img src="../../src/assets/hero.png" alt="hero" />
      <div className="details">
        <div className="location">
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          Japan
        </div>
        <h2>Mount Fuji</h2>
        <p>Date: 12 Jan, 2021 - 24 Jan, 2021</p>
        <p>
          Welcome to my travel journals! Here you can find all my adventures and
          experiences from around the world.
        </p>
        <a href="#">Google Maps</a>
      </div>
    </article>
  );
}

export default Journal