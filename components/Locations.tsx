const locations = {
  "Camelback Mountain Resort": [
    "Tannersville, PA",
    "https://cdn.dashhudson.com/media/full/1678375871.218180235937.jpeg",
  ],
  "Blue Mountain Resort": [
    "Palmerton, PA",
    "https://www.skibluemt.com/wp-content/uploads/2023/10/SLP_8090-scaled.jpg",
  ],
  "Jack Frost Big Boulder": [
    "Blakeslee, PA",
    "https://uncoveringpa.com/wp-content/uploads/2016/02/Snow-Tubing-at-Jack-Frost-Ski-Area.jpg",
  ],
  "Shawnee Mountain Ski Area": [
    "East Stroudsburg, PA",
    "https://www.mainebiz.biz/sites/default/files/styles/article_small_cover_image/public/2021-10/shawnee.jpeg?h=22280f4f&itok=T1pG6eRz",
  ],
};

export default function Locations() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          bottom: "20px",
          margin: "0px",
          color: "white",
          position: "relative",
        }}
      >
        Summits
      </h1>

      <div
        className="trips"
        style={{
          justifyContent: "flex-start",
          position: "relative",
          padding: "10px",
        }}
      >
        {Object.entries(locations).map(([resort, [location, src]]) => (
          <div key={resort} className="card location">
            <img
              className="card-img-top"
              style={{ height: "200px" }}
              src={src}
              alt="trip"
            />
            <footer className="card-body">
              <h5 className="card-title">{resort}</h5>
              <p className="card-text">- {location}</p>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
}
