import { signOut } from "aws-amplify/auth";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show"); // Collapse the navbar
    }
    navigate(path); // Navigate to the desired route
  };

  return (
    <>
      <nav
        style={{ position: "fixed" }}
        className="navbar fixed-top text-center navbar-expand-sm bg-body-tertiary"
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
                <span
                  className="nav-link"
                  onClick={() => handleLinkClick("/home")}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleLinkClick("/home/reservations")}
                >
                  Reservations
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleLinkClick("/home/calendar")}
                >
                  Calendar
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleLinkClick("/home/admin")}
                >
                  Admin
                </span>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="nav-item"
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
            className="btn btn-outline-danger"
          >
            Sign Out
          </button>
        </span>
      </nav>
      <div style={{ paddingTop: "20px" }}>{children}</div>
    </>
  );
}
