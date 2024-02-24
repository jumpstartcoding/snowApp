import { useEffect } from "react";
import { useContext, useState } from "react";
import { listReservations } from "../src/graphql/queries";
import { clientContext } from "./clientContext";
import { getCurrentUser } from "aws-amplify/auth";
import ResCard from "./ResCard";

var instructorId: string = "";

export default function InstructorRes(props: { instructorId?: string }) {
  const client = useContext(clientContext);
  const [reservations, setReservations] = useState<any>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  useEffect(() => {
    console.log("Effect running...");
    console.log("Refresh state:", refresh);
    console.log("Instructor ID:", instructorId);

    async function fetchData() {
      try {
        instructorId = props.instructorId
          ? props.instructorId
          : await getCurrentUser().then((response) => response.userId);
        const response = await client.graphql({
          query: listReservations,
          variables: {
            filter: { reservationInstructorId: { eq: instructorId } },
          },
        });
        console.log(response);
        setReservations(response.data.listReservations.items);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [refresh]);
  return (
    <>
      <div style={{ marginTop: "50px", padding: "25px" }}>
        {!refresh ? (
          <section style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setRefresh(true)}>Refresh</button>
            <ResCard
              reservations={reservations}
              tag="one"
              userId={instructorId}
            />
          </section>
        ) : (
          <div
            style={{ position: "absolute", top: "50%", left: "50%" }}
            className="spinner-grow text-warning "
          ></div>
        )}
      </div>
    </>
  );
}
