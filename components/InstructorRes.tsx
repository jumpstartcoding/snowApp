import { useEffect } from "react";
import { useContext, useState } from "react";
import { listInstructors, listReservations } from "../src/graphql/queries";
import { clientContext } from "./clientContext";
import { getCurrentUser } from "aws-amplify/auth";

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
          <>
            <button onClick={() => setRefresh(true)}>Refresh</button>
            <div
              className="card"
              style={{ padding: "10px 30px", maxHeight: "100%" }}
            >
              <span style={{ alignSelf: "center" }}>
                <h3>Instructors</h3>
              </span>

              {instructors.map((instructor: any, index: number) => (
                <div
                  key={index}
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseDetails${index}`}
                  aria-expanded="false"
                  aria-controls={`collapseDetails${index}`}
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      overflowX: "scroll",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span id="ski" className="snowIcon"></span>

                    <strong>{instructor.email}</strong>
                  </span>
                  <hr />
                  <div className="collapse" id={`collapseDetails${index}`}>
                    <h2>Details</h2>
                    <section
                      style={{ overflow: "auto" }}
                      className="collaspe-content"
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>Contact Information</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <td>{instructor.name || "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>{instructor.email || "N/A"}</td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>{instructor.phone_number || "N/A"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </section>
                  </div>
                </div>
              ))}
            </div>
          </>
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
