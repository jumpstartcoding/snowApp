import ResCard from "./ResCard";

export default function Reservations() {
  return (
    <>
      <h2 className="section-title" style={{ marginTop: "3.5rem" }}>
        {" "}
        Current Reservations
      </h2>
      <section className="trips">
        <ResCard userReservations={true} />
      </section>
    </>
  );
}
