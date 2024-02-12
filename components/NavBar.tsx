import { signOut } from "aws-amplify/auth";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar  fixed-top text-center navbar-expand-sm bg-body-tertiary ">
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Reservations
                </Link>
              </li>

              <li className="nav-item dropdown "></li>
            </ul>
          </div>
        </div>
        <span
          className="nav-item "
          style={{ position: "absolute", right: "15px" }}
        >
          <Link
            role="button"
            onClick={async () => {
              alert("signing Out");
              try {
                signOut();
              } catch (e) {
                alert(e);
              }
            }}
            className="nav-link "
            to="#"
          >
            Sign Out
          </Link>
        </span>
      </nav>
    </>
  );
}
