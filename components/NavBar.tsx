import { signOut } from "aws-amplify/auth";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  children: ReactNode; // Explicitly type the children prop
}

export default function NavBar({ children }: NavBarProps) {
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
                <Link className="nav-link" to="/reservations">
                  Reservations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
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
          <button
            onClick={async () => {
              try {
                await signOut();
              } catch (e) {
                console.log("SignOut Button:", e);
              }
            }}
            className="nav-link "
          >
            Sign Out
          </button>
        </span>
      </nav>
      {children}
    </>
  );
}
