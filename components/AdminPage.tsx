import { useState } from "react";
import CreateRes from "./CreateRes";
import ResCard from "./ResCard";
import Reviews from "./Reviews";
import InstructorRes from "./InstructorRes";

export default function AdminPage() {
  const [pageElement, setPageElement] = useState<string>("instructors");
  const handleClick = (e: string) => setPageElement(e);
  return (
    <>
      <main>
        {pageElement === "instructors" ? (
          <InstructorRes />
        ) : pageElement === "create" ? (
          <>
            <h3
              className="section-title"
              style={{ textAlign: "center", marginTop: "4rem" }}
            >
              Create Reservation
            </h3>
            <CreateRes />
          </>
        ) : pageElement === "reviews" ? (
          <>
            <h3
              className="section-title"
              style={{ textAlign: "center", marginTop: "4rem" }}
            >
              Reviews
            </h3>
            <Reviews />
          </>
        ) : (
          <div
            style={{
              padding: "20px 5px",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h3
              className="section-title"
              style={{ textAlign: "center", marginTop: "4rem" }}
            >
              {" "}
              All Reservations
            </h3>
            <section className="trips">
              <ResCard />
            </section>
          </div>
        )}
      </main>

      <div className="sideBarIcons">
        <button onClick={async () => handleClick("instructors")}>
          <span id="instuctor" className="snowIcon"></span>
        </button>
        <button onClick={async () => handleClick("reservations")}>
          <span id="ski" className="snowIcon"></span>
        </button>
        <button onClick={async () => handleClick("create")}>
          <span id="createIcon" className="snowIcon"></span>
        </button>
        <button onClick={async () => handleClick("reviews")}>
          <span id="reviewsIcon" className="snowIcon"></span>
        </button>
      </div>
    </>
  );
}
