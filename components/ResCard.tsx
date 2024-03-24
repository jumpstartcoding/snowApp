import { Button } from "@aws-amplify/ui-react";

import { useContext, useEffect, useState } from "react";
import { clientContext } from "../components/clientContext";
import {
  editReservation,
  acceptReservation,
  Loading,
} from "../components/Crud";
import { listReservations } from "../src/graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";

export default function ResCard(props: {
  tag?: string;
  userId?: string;
  userReservations?: boolean;
}) {
  const client = useContext(clientContext);
  const [reservations, setReservations] = useState<any>([]);
  useEffect(() => {
    async function fetchTrips() {
      try {
        setFetching(true);
        const response = await client.graphql({
          query: listReservations,
          variables: {
            filter: {},
          },
        });
        const fetchAndFilterReservations = async () => {
          const user = (await getCurrentUser()).userId;
          return response.data.listReservations.items
            .filter((res) =>
              props.userReservations
                ? user === res.instructorID
                : props.tag
                ? res.type === props.tag
                : res
            )
            .slice()
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            );
        };

        fetchAndFilterReservations().then((filteredReservations) => {
          setReservations(filteredReservations);
        });
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setFetching(false);
      }
    }
    fetchTrips();
  }, []);
  const [loading, setLoading] = useState<boolean[]>([]);

  const [fetching, setFetching] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean[]>([]);
  const toggleEditMode = (index: number) => {
    const newEditModes = [...edit];
    newEditModes[index] = !newEditModes[index];
    setEdit(newEditModes);
  };

  const onChange = (
    e: { target: { name: any; value: any } },
    index: number
  ) => {
    const { name, value } = e.target;

    setReservations((prevReservations: any[]) => {
      const updatedReservations = [...prevReservations];

      updatedReservations[index] = {
        ...updatedReservations[index],
        customer: {
          ...updatedReservations[index].customer,
          [name]: value,
        },
      };

      return updatedReservations;
    });
  };

  return (
    <>
      {reservations.length > 0 ? (
        <>
          {reservations.map((reservation: any, index: number) => (
            <div
              key={index}
              className="card"
              style={{
                flex: "0 0 20rem",
                padding: "25px",
              }}
            >
              {
                <>
                  <header>
                    <h5
                      style={{
                        color: `${
                          reservation.status === "new" ? "green" : "red"
                        }`,
                      }}
                      className="card-title"
                    >
                      {new Date(reservation.date).toLocaleDateString()}
                    </h5>
                    {reservation.status === "new" && !edit[index] && (
                      <Button
                        isLoading={loading[index]}
                        onClick={async () => {
                          try {
                            reservation.status = "accepted";
                            await acceptReservation(
                              props.userId,
                              reservation.id,
                              client,
                              setLoading,
                              loading,
                              index
                            );
                          } catch (error) {
                            alert("Reservation Not Accepted");
                            console.error(
                              "Error accepting reservation:",
                              error
                            );
                          }
                        }}
                      >
                        Accept
                      </Button>
                    )}
                  </header>

                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {reservation.location}
                    {` ${reservation.tier ? reservation.tier : ""}`}
                  </h6>
                  <div className="card-body">
                    <p>
                      <label htmlFor={`name${index}`}>Name</label>

                      <input
                        className={`${!edit[index] ? " " : "edit-input"} hide`}
                        id={`name${index}`}
                        name="name"
                        type="text"
                        readOnly={!edit[index]}
                        onChange={(e) => onChange(e, index)}
                        defaultValue={reservation.customer.name}
                      />
                    </p>
                    <p>
                      <label htmlFor={`number${index}`}>Phone Number</label>
                      <input
                        className={`${!edit[index] ? " " : "edit-input"} hide`}
                        type="text"
                        id={`number${index}`}
                        name="number"
                        readOnly={!edit[index]}
                        onChange={(e) => onChange(e, index)}
                        defaultValue={reservation.customer.phone_number}
                      />
                    </p>
                    <p>
                      <label htmlFor={`email${index}`}>Email</label>
                      <input
                        className={`${!edit[index] ? " " : "edit-input"} hide`}
                        type="email"
                        name="email"
                        id={`email${index}`}
                        readOnly={!edit[index]}
                        onChange={(e) => onChange(e, index)}
                        defaultValue={reservation.customer.email}
                      />
                    </p>
                    <p>
                      <label htmlFor={`guest${index}`}># of Guests</label>
                      <input
                        className={`${!edit[index] ? "" : "edit-input"} hide`}
                        type="number"
                        name="guest"
                        id={`guest${index}`}
                        readOnly={!edit[index]}
                        onChange={(e) => onChange(e, index)}
                        defaultValue={
                          reservation.customer.guest >= 0
                            ? reservation.customer.guest
                            : 0
                        }
                      />
                    </p>
                    <footer
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        isLoading={loading[index]}
                        className="btn-primary btn"
                        style={{
                          display: `${!edit[index] ? "none" : "unset"} `,
                        }}
                        onClick={async () => {
                          await editReservation(
                            reservations[index].customer, // Pass the correct reservation object
                            reservation.customer.id, // Pass the reservation ID
                            setLoading,
                            loading,
                            index,
                            client
                          );
                        }}
                      >
                        Submit
                      </Button>

                      {!props.tag && !props.userReservations && (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {" "}
                            <button
                              style={{
                                marginTop: `${edit[index] ? "10px" : "100px"}`,

                                height: "25px",
                                width: "25px",
                              }}
                            >
                              X
                            </button>
                            <button
                              id={`btnEdit${index}`}
                              style={{
                                width: "50px",
                                backgroundColor: "white",
                                border: "none",
                                alignSelf: "flex-end",
                                marginTop: `${edit[index] ? "10px" : "100px"}`,
                              }}
                              onClick={() => toggleEditMode(index)}
                            >
                              {!edit[index] ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-arrow-left-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </>
                      )}
                    </footer>
                  </div>
                </>
              }
            </div>
          ))}
        </>
      ) : (
        <>
          <Loading fetching={fetching} />
        </>
      )}
    </>
  );
}
