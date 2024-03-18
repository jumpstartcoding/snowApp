import ResCard from "./ResCard";
import "./SignIn.css";
import CreateRes from "./CreateRes";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect, useState } from "react";
import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

import { createInstructor } from "../src/graphql/mutations";

async function createInstruct(client: any, userId: string, signInDetails: any) {
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
        const user = (await fetchAuthSession()).tokens?.idToken?.payload;
        console.log(user);
        setUserID({ id: userId, signIn: signInDetails?.loginId });
        await createInstruct(client, userId, user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

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
            <div
              className="container "
              style={{
                margin: "15px 0px 75px 0px",
                padding: "0px 50px",
                boxShadow: " -2px 0 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CreateRes />
            </div>
          ) : (
            <section className="trips">
              {resType === "Ski" ? (
                <>
                  <ResCard userId={userID.id} tag="Ski"></ResCard>
                </>
              ) : (
                <ResCard userId={userID.id} tag="Snowboard"></ResCard>
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
