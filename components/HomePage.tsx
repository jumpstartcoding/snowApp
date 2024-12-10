import ResCard from "./ResCard";
import "./SignIn.css";
import UserDetails from "./UserDetails";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect, useState } from "react";
import { fetchUserAttributes } from "aws-amplify/auth";

import { createInstructor } from "../src/graphql/mutations";

async function createInstruct(
  client: any,
  userId: string | undefined,
  signInDetails: any
) {
  try {
    if (userId && signInDetails) {
      const input = {
        id: userId,
        name:
          signInDetails.given_name + (" " + signInDetails.family_name || "") ||
          "N/A",
        // Other optional fields can be added here
        phone_number: signInDetails.phone_number || "N/A",
        email: signInDetails.email || "N/A",
        tier: 1,
      };
      const response = await client.graphql({
        query: createInstructor,
        variables: {
          input: input,
        },
      });
      console.log("New Instructor", response);
    }
  } catch (error) {
    console.log(error);
  }
}

function HomePage() {
  const [resType, setResType] = useState<string>("Snowboard");
  const [user, setUser] = useState<any>();
  const [userID, setUserID] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(true); // Introduce loading state
  const [userCredentials, setUserCredentials] = useState<boolean>(false);

  const client = useContext(clientContext);
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const user = await fetchUserAttributes();
        if (isMounted) {
          setUserID(user.sub);
          setUser(user);
          await createInstruct(client, user.sub, user);
          setLoading(false); // Data loaded, set loading state to false
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();

    // Define the cleanup function directly
    return () => {
      isMounted = false;
    };
  }, [userCredentials]);

  const handleClick = (type: string) => setResType(type);
  function retrievedUserCredentials() {
    setUserCredentials(true);
  }

  return !loading && !user?.given_name ? (
    <UserDetails
      client={client}
      user={user}
      retrievedUserCredentials={retrievedUserCredentials}
    />
  ) : (
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
        <div></div>
        <h1 className="section-title">
          {resType === "create" ? (
            <>Create Reservation</>
          ) : (
            <>{resType} Trips</>
          )}
        </h1>

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
            <></>
          ) : (
            <section style={{ marginBottom: "100px" }} className="trips">
              {resType === "Ski" ? (
                <ResCard key="1" userId={userID} tag="Ski"></ResCard>
              ) : (
                <ResCard key="2" userId={userID} tag="Snowboard"></ResCard>
              )}
            </section>
          )}
        </main>
      </div>
      <div className="sidebar">
        <button
          className="sidebar-button"
          onClick={() => handleClick("Snowboard")}
        >
          <span id="snow" className="snowIcon"></span>
          <p className="sidebar-button-id">SnowBoard</p>
        </button>
        <button className="sidebar-button" onClick={() => handleClick("Ski")}>
          <span id="ski" className="snowIcon">
            {" "}
          </span>
          <p className="sidebar-button-id">Ski</p>
        </button>
      </div>
    </>
  );
}

export default HomePage;
