import ResCard from "./ResCard";
import NavBar from "./NavBar";
import "./SignIn.css";
import CreateRes from "./CreateRes";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect, useState } from "react";

import { listReservations } from "../src/graphql/queries";

export interface Reservations {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  guests: string;
  date: string;
  type: string;
  tier: string;
}

function HomePage() {
  const [trips, setTrips] = useState<any | undefined>([]);
  const [renders, setRender] = useState(0);
  const [loading, isLoading] = useState(true);
  const client = useContext(clientContext);
  const [resType, setResType] = useState("Snowboard");
  const ye = client.graphql({
    query: listReservations,
    variables: {
      filter: {},
    },
  });
  useEffect(() => {
    ye.then((response) => {
      setTrips(response.data.listReservations.items);
      isLoading(false);

      response.data.listReservations.items.map((elt) => {
        setRender(renders + 1);

        console.log(renders, " :Aaa:", elt.customer.name);
      });
    });
  }, [resType]);

  //const { user } = useAuthenticator((context) => [context.user]);

  const handleClick = (type: string) => setResType(type);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "flex-start",

          backgroundColor: "white",
          width: "100%",

          overflow: "auto",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
          {resType === "create" ? (
            <>Create Reservation</>
          ) : (
            <>{resType} Trips</>
          )}
        </h1>
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
          {resType === "create" ? (
            <CreateRes />
          ) : loading ? (
            <div
              className="spinner-grow text-warning"
              style={{ marginTop: "100px" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <section className="trips">
              {resType === "Ski" ? (
                <>
                  <ResCard reservations={trips} tag="one"></ResCard>
                  <ResCard reservations={trips} tag="onesws"></ResCard>
                  <ResCard reservations={trips} tag="onesww"></ResCard>
                </>
              ) : (
                <ResCard reservations={trips} tag="onswswe"></ResCard>
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
        <button onClick={async () => handleClick("create")}>
          <span id="createIcon" className="snowIcon"></span>
        </button>
      </div>
    </>
  );
}
export default HomePage;
