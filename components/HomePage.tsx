import ResCard from "./ResCard";
import NavBar from "./NavBar";
import "./SignIn.css";
import CreateRes from "./CreateRes";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect, useState } from "react";

import { listReservations } from "../src/graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
import { createInstructor } from "../src/graphql/mutations";
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

async function createInstruct(client: any, userId: string, signInDetails: any) {
  try {
    if (userId && signInDetails) {
      const input = {
        id: userId,
        name: "empty",
        // Other optional fields can be added here
        phone_number: "123456789",
        email: signInDetails.loginId,
        locations: ["Location1", "Location2"],
        tier: 1,
      };
      const response = await client.graphql({
        query: createInstructor,
        variables: {
          input: input,
        },
      });
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
function HomePage() {
  const [trips, setTrips] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [resType, setResType] = useState<string>("Snowboard");
  const [userID, setUserID] = useState<{
    id: string;
    signIn: string | undefined;
  }>({
    id: "",
    signIn: undefined,
  });
  const client = useContext(clientContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const { userId, signInDetails } = await getCurrentUser();
        setUserID({ id: userId, signIn: signInDetails?.loginId });
        await createInstruct(client, userId, signInDetails);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await client.graphql({
          query: listReservations,
          variables: { filter: {} },
        });
        setTrips(response.data.listReservations.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trips:", error);
        setLoading(false);
      }
    }
    fetchTrips();
  }, [resType, client]);

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
                  <ResCard
                    userId={userID.id}
                    reservations={trips}
                    tag="one"
                  ></ResCard>
                  <ResCard
                    userId={userID.id}
                    reservations={trips}
                    tag="onesws"
                  ></ResCard>
                  <ResCard
                    userId={userID.id}
                    reservations={trips}
                    tag="onesww"
                  ></ResCard>
                </>
              ) : (
                <ResCard
                  userId={userID.id}
                  reservations={trips}
                  tag="onswswe"
                ></ResCard>
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
