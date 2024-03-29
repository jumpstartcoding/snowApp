import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { useState } from "react";
import CreateRes from "./CreateRes";
import { Button } from "@aws-amplify/ui-react";

import ResList from "./ResList";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect } from "react";
import { getReservations } from "./Crud";

export default function ResCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [createRes, setCreateRes] = useState<boolean>(false);
  const [events, setEvents] = useState<any | undefined>([]);
  const [calendarView, setCalendarView] = useState<"dayGridMonth" | "listWeek">(
    "dayGridMonth"
  );
  const handleBackToCalendar = () => {
    setCalendarView("dayGridMonth"); // Switch back to month view
    setCreateRes(false);
  };

  const client = useContext(clientContext);

  const handleDateClick = (arg: Date) => {
    console.log("Date clicked:", arg);
    setCalendarView("listWeek"); // Switch to list view
    setSelectedDate(arg);
  };
  const [trips, setTrips] = useState<any | undefined>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const reservation = getReservations(client);
    reservation.then((response) => {
      setTrips(response.data.listReservations?.items);
      isLoading(false);
      response.data.listReservations?.items.map((elt: any, index) => {
        setEvents((prevData: any) => {
          const newData = [...prevData];
          newData[index] = { title: elt.type, start: elt.date };
          return newData;
        });
      });
    });
  }, [calendarView, createRes]);

  return (
    <>
      <div className="fc-container">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            listPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          eventDisplay={"block"}
          initialView={calendarView}
          dateClick={(info) => handleDateClick(info.date)}
          eventContent={renderEventContent}
          headerToolbar={{
            center: "title",
            right: "dayGridMonth,listYear",
            left: "prev,next",
          }}
          events={events}
          eventDidMount={(info) => {
            if (info.event.extendedProps.status === "done") {
              // Change background color of row
              info.el.style.backgroundColor = "red";

              // Change color of dot marker
              var dotEl = info.el.getElementsByClassName(
                "fc-event-dot"
              )[0] as HTMLElement;
              if (dotEl) {
                dotEl.style.backgroundColor = "white";
              }
            }
          }}
        />
        {selectedDate && calendarView === "listWeek" && (
          <div className="side-panel">
            <header
              style={{
                display: "flex",
                marginBottom: "10px",
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <Button
                type="button"
                aria-label="Close"
                className=" btn-close"
                onClick={handleBackToCalendar}
              ></Button>
              <Button
                style={{ alignSelf: "end" }}
                className="side-panel-button "
                onClick={() => setCreateRes(!createRes)}
              >
                {!createRes ? "Create Reservation" : "View Reservations"}
              </Button>
            </header>

            <h2>
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
              })}
            </h2>
            <section className="dropdown">
              {createRes ? (
                <CreateRes date={selectedDate} />
              ) : (
                !loading && (
                  <ResList
                    reservations={trips.filter((res: any) => {
                      return (
                        new Date(res.date).toLocaleDateString() ===
                        selectedDate.toLocaleDateString()
                      );
                    })}
                  />
                )
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
}

function renderEventContent(eventInfo: {
  timeText: string;
  event: { title: string; start: Date };
}) {
  return (
    <>
      <b>
        {eventInfo.event.start.toLocaleString("en-US", {
          hour: "numeric",
          timeZone: "UTC",
        })}
      </b>
      <i style={{ paddingLeft: "5px" }}>{eventInfo.event.title}</i>
    </>
  );
}
