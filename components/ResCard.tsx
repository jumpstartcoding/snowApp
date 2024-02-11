import { Button, Input } from "@aws-amplify/ui-react";
import { Reservation } from "./HomePage";

const onSubmit = (id: string) => {
  console.log("Accept", id);
};

export default function ResCard(props: {
  reservations: Reservation[];
  tag: string;
}) {
  return (
    <>
      {props.reservations[0] ? (
        <div
          className="card"
          style={{
            flex: "0 0 20rem",
            width: "15rem",
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
              {props.reservations.map((reservation: Reservation, index) => (
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
                      {reservation.date}
                    </button>
                  </h2>
                  <div
                    id={`${props.tag}${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h5>Customer Name:</h5>
                      {reservation.firstName} {reservation.lastName}
                      <h5>Phone Number:</h5>
                      {reservation.phoneNumber}
                      <h5># of Guests</h5>
                      <Input type="text" placeholder="3" readOnly />
                      {reservation ? (
                        <footer className="text-center">
                          <Button
                            style={{ marginTop: "10px" }}
                            onClick={() => onSubmit(reservation.id)}
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
        {}
      )}
    </>
  );
}
