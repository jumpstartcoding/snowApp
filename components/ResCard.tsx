import { Button } from "@aws-amplify/ui-react";

import { useContext, useEffect, useState } from "react";
import { clientContext } from "../components/clientContext";
import { updateCustomer, updateReservation } from "../src/graphql/mutations";
import { listReservations } from "../src/graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
async function editReservation(reservation: any, resId: string, client: any) {
  const input = {
    id: resId,
    name: reservation.name,
    phone_number: reservation.number,
    email: reservation.email,
    guest: reservation.guest,
  };

  try {
    const response = await client.graphql({
      query: updateCustomer,
      variables: { input: input },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function acceptReservation(
  userId: any,
  resId: string,
  client: any,
  setLoading: any,
  index: number
) {
  const input = {
    id: resId,
    instructorID: userId,
    status: "accepted",
  };
  try {
    setLoading((prevLoading: any) => {
      const newLoading = [...prevLoading];
      newLoading[index] = true;
      return newLoading;
    });
    const response = await client.graphql({
      query: updateReservation,
      variables: { input: input },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading((prevLoading: any) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  }
}

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
            .filter((res) => {
              if (props.userReservations) {
                if (user === res.instructorID) {
                  console.log("User is instructor:", user, res);
                }
                return user === res.instructorID;
              } else {
                return res.type === props.tag;
              }
            })
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
      }
    }
    fetchTrips();
    setFetching(false);
  }, [props.tag]);
  const [loading, setLoading] = useState(
    Array(reservations.length).fill(false)
  );

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
                flex: "0 0 23rem",
                width: "20rem",
                height: "22rem",
                overflow: "auto",
                margin: "25px",
                padding: "25px",
                borderColor: `${
                  reservation.status === "new" ? "green" : "red"
                }`,
              }}
            >
              {
                <>
                  <header>
                    <h5 className="card-title">
                      {new Date(reservation.date).toLocaleDateString()}
                    </h5>
                    {reservation.status === "new" && (
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

                    <button
                      className="btn-primary btn"
                      style={{
                        display: `${!edit[index] ? "none" : "unset"} `,
                      }}
                      onClick={async () =>
                        await editReservation(
                          reservations[index].customer, // Pass the correct reservation object
                          reservation.customer.id, // Pass the reservation ID
                          client
                        )
                      }
                    >
                      Submit
                    </button>
                  </div>
                </>
              }
              <button
                id={`btnEdit${index}`}
                style={{
                  width: "50px",
                  backgroundColor: "white",
                  border: "none",
                  marginTop: `${edit ? "20px" : "0px"}`,
                  alignSelf: "flex-start",
                }}
                onClick={() => toggleEditMode(index)}
              >
                {!edit ? (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          {!fetching ? (
            <div
              className="spinner-grow text-warning"
              style={{
                top: "50%",
                left: "50%",
                position: "fixed",
              }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <div>No Reservations</div>
            </>
          )}
        </>
      )}
    </>
  );
}
