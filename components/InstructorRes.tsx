import { useEffect } from "react";
import { useContext, useState } from "react";
import { listInstructors } from "../src/graphql/queries";
import { clientContext } from "./clientContext";
import { Loading } from "./Crud";

export default function InstructorRes() {
  const client = useContext(clientContext);

  const [instructors, setInstructors] = useState<any>([]);

  const [fetching, setFetching] = useState<boolean>(false);
  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
    setFetching(true);
    async function fetchData() {
      try {
        const inResponse = await client.graphql({
          query: listInstructors,
          variables: {
            filter: {},
          },
        });

        if (isMounted) {
          setInstructors(inResponse.data.listInstructors.items);
          console.log("im here");
          setFetching(false);
        }
      } catch (error) {
        console.log(error);
        setFetching(false);
      }
    }

    fetchData();

    // Cleanup function to run on component unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          padding: "25px",
        }}
      >
        {!fetching ? (
          <>
            <div
              className="card"
              id="instructorCard"
              style={{
                padding: "50px 30px",
              }}
            >
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
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="orange"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                    </span>

                    <strong>{instructor.email}</strong>
                  </span>
                  <hr />
                  <div className="collapse" id={`collapseDetails${index}`}>
                    <h5>Contact Information</h5>
                    <section
                      style={{ overflow: "auto" }}
                      className="collaspe-content"
                    >
                      <table>
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
          <Loading fetching={true} />
        )}
      </div>
    </>
  );
}
