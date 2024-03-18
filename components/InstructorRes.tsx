import { useEffect } from "react";
import { useContext, useState } from "react";
import { listInstructors } from "../src/graphql/queries";
import { clientContext } from "./clientContext";

export default function InstructorRes() {
  const client = useContext(clientContext);

  const [instructors, setInstructors] = useState<any>([]);

  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    setFetching(true);
    async function fetchData() {
      try {
        const inResponse = await client.graphql({
          query: listInstructors,
          variables: {
            filter: {},
          },
        });
        console.log(inResponse);

        setInstructors(inResponse.data.listInstructors.items);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px", padding: "25px" }}>
        {!fetching ? (
          <>
            <div
              className="card"
              style={{
                padding: "10px 30px",
                minHeight: "250px",
                maxHeight: "100%",
              }}
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
                      gap: "10px",
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
