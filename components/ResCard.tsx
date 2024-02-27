import { Button } from "@aws-amplify/ui-react";
import { useContext, useEffect, useState } from "react";
import { clientContext } from "../components/clientContext";
import { updateReservation } from "../src/graphql/mutations";
import { listReservations } from "../src/graphql/queries";

async function acceptReservation(
  userId: string,
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

export default function ResCard(props: { tag: string; userId: string }) {
  const client = useContext(clientContext);
  const [reservations, setReservations] = useState<any>([]);
  const [loading, setLoading] = useState(
    Array(reservations.length).fill(false)
  );

  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTrips() {
      try {
        setFetching(true);
        const response = await client.graphql({
          query: listReservations,
          variables: { filter: {} },
        });
        setReservations(
          response.data.listReservations.items
            .filter((res) => res.type === props.tag)
            .slice()
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
        );
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    }
    fetchTrips();
    setFetching(false);
  }, [reservations, client]);

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
                margin: "25px",
                padding: "25px",
                borderColor: `${
                  reservation.status === "new" ? "green" : "red"
                }`,
              }}
            >
              <header>
                <h5 className="card-title">
                  {new Date(reservation.date).toLocaleDateString()}
                </h5>
                {reservation.status === "new" && (
                  <Button
                    isLoading={loading[index]}
                    onClick={async () => {
                      try {
                        await acceptReservation(
                          props.userId,
                          reservation.id,
                          client,
                          setLoading,
                          index
                        );
                      } catch (error) {
                        alert("Reservation Not Accepted");
                        console.error("Error accepting reservation:", error);
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
                  <strong>Name</strong>
                  {reservation.customer.name}
                </p>
                <p>
                  <strong>Phone Number</strong>
                  {reservation.customer.phone_number}
                </p>
                <p>
                  <strong>Email</strong>
                  {reservation.customer.email}
                </p>
                <p>
                  <strong># of Guests</strong>
                  {reservation.customer.guest >= 0
                    ? reservation.customer.guest
                    : 0}
                </p>
              </div>
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
