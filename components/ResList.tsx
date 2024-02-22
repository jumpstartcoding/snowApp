const ResList = (props: { reservations: any[] }) => {
  return (
    <div className="reservation-list">
      {props.reservations.map((reservation: any, index) => (
        <div className="event-item" key={index}>
          <div
            data-bs-toggle="collapse"
            data-bs-target={`#collapseDetails${index}`}
            aria-expanded="false"
            aria-controls={`collapseDetails${index}`}
            role="button"
          >
            <div className="event-header">
              <span className="event-time">{reservation.location}</span>
              <span className="event-title">
                Tier {reservation.tier || "1"}
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white", padding: "10px" }}
            className="collapse collaspe-content"
            id={`collapseDetails${index}`}
          >
            <div className="event-details">
              <h5>Customer Name:</h5>
              <p>{reservation.customer.name}</p>
              <h5>Number:</h5>
              <p> {reservation.customer.phone_number} </p>
              <h5># of Guests</h5>
              <p>{reservation.customer.guest} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResList;
