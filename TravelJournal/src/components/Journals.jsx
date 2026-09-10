import Journal from "./Journal";
import data from "../constants/data";
const Journals = () => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <Journal
            key={item.id}
            location={item.location}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            googleMapsUrl={item.googleMapsUrl}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Journals;
