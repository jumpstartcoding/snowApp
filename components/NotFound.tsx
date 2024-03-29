import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "var(--custom-gray-color)",
        }}
      >
        <h1>404 Page Not Found</h1>

        <Link to="/">Go To Home Page</Link>
      </div>
    </>
  );
}
