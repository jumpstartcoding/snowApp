import ResCard from "./ResCard";
import "./SignIn.css";

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
            <></>
          ) : (
            <section className="trips">
              {resType === "Ski" ? (
                <ResCard key="1" userId={userID.id} tag="Ski"></ResCard>
              ) : (
                <ResCard key="2" userId={userID.id} tag="Snowboard"></ResCard>
              )}
            </section>
          )}
        </main>
      </div>
      <div className="sideBarIcons">
        <button onClick={() => handleClick("Snowboard")}>
          <span id="snow" className="snowIcon"></span>
        </button>
        <button onClick={() => handleClick("Ski")}>
          <span id="ski" className="snowIcon"></span>
        </button>
      </div>
    </>
  );
}
export default HomePage;
