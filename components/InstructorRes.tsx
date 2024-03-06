import { useEffect } from "react";
import { useContext, useState } from "react";
import { listInstructors, listReservations } from "../src/graphql/queries";
import { clientContext } from "./clientContext";
import { getCurrentUser } from "aws-amplify/auth";
import ResCard from "./ResCard";

var instructorId: string = "";

export default function InstructorRes(props: { instructorId?: string }) {
  const client = useContext(clientContext);

  const [instructors, setInstructors] = useState<any>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        instructorId = props.instructorId
          ? props.instructorId
          : await getCurrentUser().then((response) => response.userId);
        const response = await client.graphql({
          query: listReservations,
          variables: {
            filter: {
              instructorID: { eq: instructorId },
            },
          },
        });
        const inResponse = await client.graphql({
          query: listInstructors,
          variables: {
            filter: {},
          },
        });
        console.log(response);
        console.log(inResponse);

        setInstructors(inResponse.data.listInstructors.items);
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
            <ResCard tag="one" userId={instructorId} />
          </section>
        ) : (
          <div
            style={{ position: "absolute", top: "50%", left: "50%" }}
            className="spinner-grow text-warning "
          ></div>
        )}

        <div className="card" style={{ padding: "25px", overflow: "auto" }}>
          <span style={{ display: "flex", justifyContent: "center" }}>
            <h3>Instructors</h3>
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {instructors.map((instructor: any, index: number) => (
              <>
                <span
                  key={index}
                  style={{
                    display: "flex",
                    border: "3px solid blue",

                    borderRadius: "40px",
                    padding: "5px 15px ",
                    justifyContent: "space-between",
                  }}
                >
                  <header
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <span id="ski" className="snowIcon"></span>
                    <section>
                      <strong>{instructor.name}</strong>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        {instructor.number}
                      </strong>
                    </section>
                  </header>
                  <footer
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      alignItems: "flex-end",
                      alignSelf: "flex-end",
                    }}
                  >
                    <h6 style={{ fontSize: "14px" }}>
                      {" "}
                      {instructor.type} Instructor
                    </h6>
                    {instructor.email}
                  </footer>
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
