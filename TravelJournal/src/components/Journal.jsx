const Journal = ({
  imageUrl,
  location,
  title,
  startDate,
  endDate,
  description,
  googleMapsUrl,
}) => {
  console.log(location);
  return (
    <article className="journals">
      <img src={imageUrl} alt={title} />

      <div className="details">
        <div className="location">
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          {location}
        </div>

        <h2>{title}</h2>

        <p>
          {startDate} - {endDate}
        </p>

        <p>{description}</p>

        <a href={googleMapsUrl}>Google Maps</a>
      </div>
    </article>
  );
};

export default Journal;
