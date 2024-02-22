import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { useState } from "react";
import { DateClickArg } from "fullcalendar";
import CreateRes from "./CreateRes";
import { Button } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
import ResList from "./ResList";
import { clientContext } from "../components/clientContext";
import { useContext, useEffect } from "react";

import { listReservations } from "../src/graphql/queries";

const events = [
  { title: "Ski", start: new Date() },
  { title: "Snowboard", start: new Date() },
  {
    title: "Meeting",
    start: new Date("02-23-2024"),
    extendedProps: {
      status: "done",
    },
  },
  {
    title: "Meet",
    start: new Date("02-23-2024"),
  },
];

export default function ResCalendar(props: {
  events?: { title: string; start: Date };
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [createRes, setCreateRes] = useState<boolean>(false);
  const [calendarView, setCalendarView] = useState<"dayGridMonth" | "listWeek">(
    "dayGridMonth"
  );
  const handleBackToCalendar = () => {
    setCalendarView("dayGridMonth"); // Switch back to month view
    setCreateRes(false);
  };
  function getDayEvents(): (
    | { title: string; start: Date; extendedProps?: undefined }
    | { title: string; start: Date; extendedProps: { status: string } }
  )[] {
    if (!selectedDate) return []; // Return empty array if no date is selected

    const selectedDateString = selectedDate.toISOString().split("T")[0];

    return events.filter((event) => {
      const eventDateString = event.start.toISOString().split("T")[0];
      return eventDateString === selectedDateString;
    });
  }
  const client = useContext(clientContext);
  const dayEvents = getDayEvents();
  const handleDateClick = (arg: DateClickArg) => {
    console.log("Date clicked:", arg?.allDay);
    setCalendarView("listWeek"); // Switch to list view
    setSelectedDate(new Date(arg.date));
  };
  const [trips, setTrips] = useState<any | undefined>([]);
  const [loading, isLoading] = useState(true);
  const ye = client.graphql({
    query: listReservations,
    variables: {
      filter: {},
    },
  });
  useEffect(() => {
    ye.then((response) => {
      setTrips(response.data.listReservations.items);
      isLoading(false);
    });
  }, [calendarView]);

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "100px", padding: "25px" }}>
        <FullCalendar
          editable={true}
          selectable={true}
          initialView={calendarView}
          events={events}
          dateClick={(info) => handleDateClick(info)}
          eventContent={renderEventContent}
          headerToolbar={{
            right: "today,dayGridMonth,timeGridDay,listYear",
            left: "prev,next",
            center: "title",
          }}
          plugins={[
            dayGridPlugin,
            listPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
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
            <header style={{ display: "flex" }}>
              <Button
                className="side-panel-button "
                onClick={handleBackToCalendar}
              >
                Back to Calendar
              </Button>
              <Button
                className="side-panel-button "
                onClick={() => setCreateRes(!createRes)}
              >
                Create Reservation
              </Button>
            </header>

            <h2>
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
              })}
            </h2>
            <section className="dropdown">
              {!loading && (
                <ResList
                  reservations={trips.filter((res: any) => {
                    console.log(
                      res.date.split("T")[0],
                      "ccdcd  ",
                      selectedDate.toISOString().split("T")[0]
                    );
                    return (
                      res.date.split("T")[0] ===
                      selectedDate.toISOString().split("T")[0]
                    );
                  })}
                />
              )}
            </section>

            {createRes && <CreateRes date={selectedDate} />}
          </div>
        )}
      </div>
    </>
  );
}

function renderEventContent(eventInfo: {
  timeText: string;
  event: { title: string };
}) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
