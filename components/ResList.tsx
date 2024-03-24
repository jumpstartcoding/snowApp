const ResList = (props: { reservations: any[] }) => {
  props.reservations.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="reservation-list">
      {props.reservations.map((reservation: any, index) => (
        <div
          data-bs-toggle="collapse"
          data-bs-target={`#collapseDetails${index}`}
          aria-expanded="false"
          aria-controls={`collapseDetails${index}`}
          role="button"
          className="event-item"
          key={index}
        >
          <header className="event-header">
            <span className="event-time">
              {new Date(reservation.date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              })}
            </span>

            <span className="event-title">{reservation.type}</span>

            <span className="event-title">Tier {reservation.tier || "1"}</span>
          </header>
          <div
            className="collapse collaspe-content"
            id={`collapseDetails${index}`}
          >
            <div className="event-details">
              <h5>Customer Name:</h5>
              <p>{reservation.customer.name}</p>
              <h5>Number:</h5>
              <p> {reservation.customer.phone_number} </p>

              <h5>Email:</h5>
              <p>{reservation.customer.email}</p>
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
