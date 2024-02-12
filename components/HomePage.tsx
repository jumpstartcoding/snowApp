import ResCard from "./ResCard";
import NavBar from "./NavBar";
import "./SignIn.css";
import { useState } from "react";

import CreateRes from "./CreateRes";

export interface Reservation {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  guests: string;
  date: string;
  type: string;
  tier: string;
}
let reservationsData: Reservation[] = [
  {
    id: "1",
    firstName: "Vaughn",
    lastName: "John",
    phoneNumber: "324679823",
    guests: "3",
    date: "1/1/2020",
    type: "Ski",
    tier: "4",
  },
  {
    id: "2",
    firstName: "Pablo",
    lastName: "Felipe",
    phoneNumber: "22333823",
    guests: "3",
    date: "1/12/2020",
    type: "Ski",
    tier: "1",
  },
  {
    id: "3",
    firstName: "Asken",
    lastName: "March",
    phoneNumber: "444679823",
    guests: "2",
    date: "2/12/2023",
    type: "Snowboard",
    tier: "1",
  },
];

const skiTrips = reservationsData.filter((e) => e.type === "Ski");
const snowBoardTrips = reservationsData.filter((e) => e.type === "Snowboard");

function HomePage(props: { user?: any; signOut?: any }) {
  console.log(props);
  const [resType, setResType] = useState("Snowboard");
  const handleClick = (type: string) => setResType(type);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "flex-start",

          backgroundColor: "orange",
          width: "100%",

          overflow: "auto",
        }}
      >
        <NavBar />

        <main
          style={{
            display: "flex",
            overflowX: "hidden",
            overflowY: "scroll",
            alignItems: "center",
            flexDirection: "column",

            backgroundColor: "white",
          }}
        >
          <h1>
            {resType === "create" ? (
              <>Create Reservation</>
            ) : (
              <>{resType} Trips</>
            )}
          </h1>
          {resType === "create" ? (
            <CreateRes />
          ) : (
            <section
              style={{
                justifyContent: "left",
              }}
            >
              {resType === "Ski" ? (
                <>
                  <ResCard reservations={skiTrips} tag="one"></ResCard>
                  <ResCard reservations={skiTrips} tag="onesws"></ResCard>
                  <ResCard reservations={skiTrips} tag="onesww"></ResCard>
                </>
              ) : resType === "Snowboard" ? (
                <ResCard reservations={snowBoardTrips} tag="onswswe"></ResCard>
              ) : (
                <div>
                  <p>feefe</p>
                </div>
              )}
            </section>
          )}
        </main>
      </div>
      <div className="sideBarIcons ">
        <button onClick={() => handleClick("Snowboard")}>
          <span id="snow" className="snowIcon"></span>
        </button>
        <button onClick={() => handleClick("Ski")}>
          <span id="ski" className="snowIcon"></span>
        </button>
        <button onClick={() => handleClick("create")}>
          <span id="createIcon" className="snowIcon"></span>
        </button>
      </div>
    </>
  );
}
export default HomePage;
