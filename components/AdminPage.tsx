import { useState } from "react";
import CreateRes from "./CreateRes";
import ResCard from "./ResCard";
import Reviews from "./Reviews";
import InstructorRes from "./InstructorRes";
import ListingsPage from "./ListingsPage";

export default function AdminPage() {
  const [pageElement, setPageElement] = useState<string>("instructors");

  const handleClick = (page: string) => setPageElement(page);

  const renderContent = () => {
    switch (pageElement) {
      case "instructors":
        return <InstructorRes />;
      case "create":
        return (
          <>
            <h3 className="section-title">Create Reservation</h3>
            <CreateRes />
          </>
        );
      case "reviews":
        return (
          <>
            <h3 className="section-title">Reviews</h3>
            <Reviews />
          </>
        );
      case "listings":
        return <ListingsPage />;
      case "reservations":
      default:
        return (
          <>
            <h3 className="section-title">All Reservations</h3>
            <section className="trips">
              <ResCard />
            </section>
          </>
        );
    }
  };

  const SidebarIcon = ({
    id,
    icon,
    onClick,
    label,
  }: {
    id: string;
    icon: string;
    onClick: () => void;
    label: string;
  }) => (
    <span key={id} style={{ textAlign: "center" }}>
      <button onClick={onClick} className="sidebar-button" aria-label={label}>
        <span className={`fa fa-${icon} icon`}></span>
      </button>
      <p className="sidebar-button-id">{label}</p>
    </span>
  );

  return (
    <main className="admin-page">
      <div className="sidebar">
        <SidebarIcon
          id="instuctor"
          icon="user far"
          onClick={() => handleClick("instructors")}
          label="Instructors"
        />
        <SidebarIcon
          id="ski"
          icon="clipboard-list"
          onClick={() => handleClick("reservations")}
          label="Reservations"
        />
        <SidebarIcon
          id="createIcon"
          icon="plus-circle"
          onClick={() => handleClick("create")}
          label="Create Reservation"
        />
        <SidebarIcon
          id="reviewsIcon"
          icon="star far"
          onClick={() => handleClick("reviews")}
          label="Reviews"
        />
        <SidebarIcon
          id="listingsIcon"
          icon="list"
          onClick={() => handleClick("listings")}
          label="Listings"
        />
      </div>
      <div className="content">{renderContent()}</div>
    </main>
  );
}
