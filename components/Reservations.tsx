import ResCard from "./ResCard";

export default function Reservations() {
  return (
    <>
      <div
        className="trips"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "75px",
        }}
      >
        <h2> Current Reservations</h2>
        <section className="trips">
          <ResCard userReservations={true} />
        </section>
      </div>
    </>
  );
}
