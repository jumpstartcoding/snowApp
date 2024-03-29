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
                <Link className="nav-link " aria-current="page" to="/home">
                  Portal
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>

      <div className="image-container">
        <header className="title">
          <h1 style={{ color: "white" }}>Summit Sessions</h1>
          <Link
            to="#reserve"
            className="btn"
            type="button"
            onClick={() => scrollToElement("reserve")}
          >
            <strong> Reserve Now</strong>
          </Link>
        </header>

        <div id="reserve">
          <h1 style={{ textAlign: "center" }}>Book Your Reservation</h1>
          <CreateRes />
        </div>

        <section id="summits" className="clientTrips">
          <Locations />
        </section>
      </div>
    </>
  );
}
