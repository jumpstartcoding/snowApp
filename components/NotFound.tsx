import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Page Not Found</h1>

        <Link to="/">Go To Home Page</Link>
      </div>
    </>
  );
}
