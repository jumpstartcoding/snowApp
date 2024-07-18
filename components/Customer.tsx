import { Link } from "react-router-dom";
import CreateRes from "./CreateRes";
import Locations from "./Locations";

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Customer() {
  return (
    <>
      <nav
        id="clientNav"
        className="navbar  fixed-top text-center navbar-expand-sm bg-body-tertiary "
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white", opacity: 0.8 }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#summits"
                  type="button"
                  onClick={() => scrollToElement("summits")}
                >
                  Summits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">
                  Employee Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="image-container">
        <header className="title">
          <h1 style={{ color: "white" }}>Summit Sessions</h1>
          <Link
            style={{ minWidth: "200px" }}
            to="#reserve"
            className="btn"
            type="button"
            onClick={() => scrollToElement("reserve")}
          >
            <strong> Reserve Now</strong>
          </Link>
        </header>
        <section
          style={{
            display: "block",
            minHeight: "500px",
            padding: "50px",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <h1>
            {" "}
            <strong style={{ color: "var(--custom-orange-color)" }}>
              Our Philosophy
            </strong>
          </h1>
          <hr />
          <p className="text">
            We believe that skiing and snowboarding are more than just sports;
            they're ways of life. Our philosophy is rooted in a love for the
            mountains and a passion for sharing that love with others. <br />{" "}
            <br />
            Whether you're carving down groomed runs, navigating through powder,
            or mastering the terrain park, our instructors will help you build
            confidence, improve technique, and achieve your personal best on the
            slopes.
          </p>
        </section>

        <section id="summits" className="clientTrips">
          <Locations />
        </section>
        <div id="reserve">
          <h1 style={{ textAlign: "center" }}>Book Your Reservation</h1>
          <CreateRes customerInput={true}> </CreateRes>
        </div>
      </div>
    </>
  );
}
