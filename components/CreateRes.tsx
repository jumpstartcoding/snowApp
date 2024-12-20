import { Form } from "react-router-dom";
import { Button, Input } from "@aws-amplify/ui-react";
import "./SignIn.css";
import {
  createReservation,
  createCustomer,
  updateCustomer,
} from "../src/graphql/mutations";
import { ReactNode, useContext, useEffect, useState } from "react";
import { clientContext } from "./clientContext";

export default function CreateRes(props: {
  date?: Date;
  customerInput?: boolean;
  children?: ReactNode;
}) {
  const client = useContext(clientContext);
  const [loading, isLoading] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(
    props.date
      ? props.date.toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]
  );
  const [resSubmitted, setResSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (props.date) setCurrentDate(props.date.toISOString().split("T")[0]);
  }, []);

  const [reservation, setReservation] = useState({
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guest: 0,
    },
    date: new Date(currentDate).toISOString(),
    time: "12:00",
    type: "",
    tier: 1,
    location: "Blue Mountain",
    status: "new",
  });

  const onSubmit = async (e: { preventDefault: () => void }) => {
    isLoading(!loading);
    try {
      e.preventDefault();

      console.log("res:", reservation);

      const cust = await client.graphql({
        query: createCustomer,
        variables: {
          input: {
            name:
              reservation.customer.firstName +
              " " +
              reservation.customer.lastName,
            email: reservation.customer.email,
            phone_number: reservation.customer.phone,
            guest:
              reservation.customer.guest < 0 ? 0 : reservation.customer.guest,
          },
        },
      });
      const yup = await client.graphql({
        query: createReservation,
        variables: {
          input: {
            date: reservation.date.replace(
              /T.*/,
              "T" + reservation.time + ":00.000Z"
            ),

            type: reservation.type,
            location:
              reservation.location.length <= 0
                ? "CamelBack"
                : reservation.location,
            status: "new",
            reservationCustomerId: cust.data.createCustomer.id,
          },
        },
      });

      const updateCust = await client.graphql({
        query: updateCustomer,
        variables: {
          input: {
            id: cust.data.createCustomer.id,
            customerReservationId: yup.data.createReservation.id,
          },
        },
      });
      console.log("create Res:", yup);

      console.log("create Cust:", cust);
      console.log("updated Cust:", updateCust);

      setReservation({
        ...reservation,
        customer: {
          firstName: " ",
          lastName: " ",
          email: " ",
          phone: " ",
          guest: 0,
        },

        type: " ",
        tier: 1,
        location: " ",
      });
      setResSubmitted(true);
    } catch (e) {
      console.log("submit error", e);
      alert("Reservation Not Submitted Please try again");
    } finally {
      isLoading(false);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "email" ||
      name === "phone" ||
      name === "guest"
    ) {
      setReservation({
        ...reservation,
        customer: { ...reservation.customer, [name]: value },
      });
    } else if (name === "date") {
      setReservation({
        ...reservation,
        [name]: new Date(value).toISOString(),
      });
      console.log("got her", reservation.time);
      var elt = reservation.date.replace(
        /T.*/,
        "T" + reservation.time + ":00.000Z"
      );
      console.log("dssdsds", elt);
    } else {
      setReservation({
        ...reservation,
        [name]: value,
      });
      console.log(name, "  ", value);
    }
  };

  return (
    <>
      <div
        className="container "
        style={{
          marginBottom: "50px",
          padding: "25px 50px",
          boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
        }}
      >
        <Form method="post" onSubmit={onSubmit}>
          {props.children}
          <label
            className="create-res-label"
            id="fNameLabel"
            htmlFor="firstName"
          >
            First Name
          </label>

          <Input
            className="input"
            type="text"
            name="firstName"
            id="firstName"
            value={reservation.customer.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            required
          />
          <label
            className="create-res-label"
            id="lNameLabel"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <Input
            className="input"
            type="text"
            name="lastName"
            id="lastName"
            value={reservation.customer.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />

          <label className="create-res-label" id="emailLabel" htmlFor="email">
            Email
          </label>
          <Input
            className="input"
            type="email"
            name="email"
            autoComplete="email"
            id="email"
            value={reservation.customer.email}
            onChange={handleChange}
            required
          />
          <label
            className="create-res-label"
            id="phoneNumberLabel"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <Input
            className="input"
            type="tel"
            name="phone"
            autoComplete="tel"
            id="phone"
            value={reservation.customer.phone}
            onChange={handleChange}
            required
          />
          <label className="create-res-label" id="guestLabel" htmlFor="guests">
            # of Guests
          </label>
          <Input
            className="input"
            type="number"
            name="guest"
            id="guests"
            value={reservation.customer.guest}
            onChange={handleChange}
          />

          <section style={{ justifyContent: "center" }}>
            <input
              type="checkbox"
              name="type"
              id="skiRes"
              value="Ski"
              onChange={handleChange}
            />
            <label
              className="create-res-label"
              id="skiLabel"
              style={{ marginRight: "10px" }}
              htmlFor="skiRes"
            >
              Ski
            </label>
            <input
              type="checkbox"
              name="type"
              id="snowBoardRes"
              value="Snowboard"
              onChange={handleChange}
            />

            <label
              className="create-res-label"
              id="snowBoardResLabel"
              htmlFor="snowBoardRes"
            >
              {" "}
              SnowBoard{" "}
            </label>
          </section>
          <label
            className="create-res-label"
            id="locationLabel"
            htmlFor="location"
          >
            Location
          </label>

          <select
            name="location"
            id="location"
            className="form-select input"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option value="Blue Mountain">Blue Mountain</option>
            <option value="CamelBack">CamelBack</option>
            <option value="Jack Frost">Jack Frost</option>
            <option value="Shawnee Mountain">Shawnee Mountain</option>
          </select>

          <label className="create-res-label" id="dateLabel" htmlFor="date">
            Date
          </label>
          <Input
            className="input"
            type="date"
            id="date"
            name="date"
            defaultValue={currentDate}
            onChange={handleChange}
          />
          <label className="create-res-label" id="dateLabel" htmlFor="time">
            Time
          </label>
          <Input
            className="input"
            onChange={handleChange}
            type="time"
            name="time"
            id="time"
          />
          <Button
            isLoading={loading}
            name="resButton"
            loadingText="Loading..."
            type="submit"
            style={{ position: "relative", margin: "30px 0px" }}
          >
            Create
          </Button>
        </Form>
      </div>
      {props.customerInput === true && resSubmitted === true && (
        <div
          className="modal"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <div
            className="card "
            style={{
              padding: "10px ",
              maxWidth: "500px",
              height: "fit-content",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100px" }}
              onClick={() => setResSubmitted(false)}
            >
              {" "}
              Close{" "}
            </button>
            <p style={{ fontSize: "36px", margin: "100px 25px" }}>
              <strong>
                Thank You {reservation.customer.firstName} For Reserving With
                Summit Sessions!
              </strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
