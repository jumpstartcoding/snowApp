import { Button, Input } from "@aws-amplify/ui-react";

import { useContext, useState } from "react";
import { clientContext } from "../components/clientContext";
import { updateReservation } from "../src/graphql/mutations";

async function acceptReservation(
  userId: string,
  resId: string,
  client: any
): Promise<void> {
  const input = {
    id: resId,
    reservationInstructorId: userId,
  };
  try {
    const response = await client.graphql({
      query: updateReservation,
      variables: { input: input },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export default function ResCard(props: {
  reservations: any[];
  tag: string;
  userId: string;
}) {
  const client = useContext(clientContext);
  console.log(props.reservations);
  const [loading, isLoading] = useState<boolean>(false);

  return (
    <>
      {props.reservations[0] ? (
        <div
          className="card"
          style={{
            flex: "0 0 23rem",
            width: "20rem",
            height: "22rem",
            overflow: "scroll",
            margin: "25px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {props.reservations[0].type} Reservation
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Camelback Tier 2
            </h6>

            <div className="accordion" id="accordionExample">
              {props.reservations.map((reservation: any, index) => (
                <div key={reservation.id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${props.tag}${index}`}
                      aria-expanded="false"
                      aria-controls={`${props.tag}${index}`}
                    >
                      {reservation.date.split("T")[0]}
                    </button>
                  </h2>
                  <div
                    id={`${props.tag}${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h5>Customer Name:</h5>
                      {reservation.customer.name} <h5>Phone Number:</h5>
                      {reservation.customer.phone_number}
                      <h5># of Guests</h5>
                      <Input
                        name="guestAmount"
                        type="text"
                        placeholder={
                          (reservation.customer.guest >= 0 &&
                            reservation.customer.guest) ||
                          "0"
                        }
                        readOnly
                      />
                      {reservation ? (
                        <footer className="text-center">
                          <Button
                            isLoading={loading}
                            style={{ marginTop: "10px" }}
                            onClick={async () => {
                              try {
                                isLoading(true);
                                await acceptReservation(
                                  props.userId,
                                  reservation.id,
                                  client
                                );
                              } catch (error) {
                                console.error(
                                  "Error accepting reservation:",
                                  error
                                );
                              } finally {
                                isLoading(false);
                              }
                            }}
                          >
                            Accept
                          </Button>
                        </footer>
                      ) : (
                        <>
                          <footer className="text-center">
                            <div
                              className="spinner-grow spinner-grow-sm text-primary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </footer>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
