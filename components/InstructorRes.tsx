import { useEffect } from "react";
import { useContext, useState } from "react";
import { listInstructors, listReservations } from "../src/graphql/queries";
import { clientContext } from "./clientContext";
import { getCurrentUser } from "aws-amplify/auth";
import ResCard from "./ResCard";

var instructorId: string = "";

export default function InstructorRes(props: { instructorId?: string }) {
  const client = useContext(clientContext);
  const [reservations, setReservations] = useState<any>([]);
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
        setReservations(response.data.listReservations.items);
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

        <div className="card" style={{ padding: "25px", overflow: "auto" }}>
          <span style={{ display: "flex", justifyContent: "center" }}>
            <h3>Instructors</h3>
          </span>
          <table className="table" style={{ minHeight: "300px" }}>
            <thead>
              <tr>
                <th>select</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor: any, index: number) => (
                <>
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        id={`btncheck${index}`}
                        autoComplete="off"
                      />
                    </td>
                    <td>{instructor.name} </td>

                    <td>{instructor.phone_number}</td>
                    <td>{instructor.email}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
