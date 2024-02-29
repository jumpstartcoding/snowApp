import { Form } from "react-router-dom";
import { Button, Input, Label } from "@aws-amplify/ui-react";
import "./SignIn.css";
import {
  createReservation,
  createCustomer,
  updateCustomer,
} from "../src/graphql/mutations";
import { useContext, useEffect, useState } from "react";
import { clientContext } from "./clientContext";

export default function CreateRes(props: { date?: Date }) {
  const client = useContext(clientContext);
  const [loading, isLoading] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(
    props.date
      ? props.date.toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]
  );
  useEffect(() => {
    if (props.date) setCurrentDate(props.date.toISOString().split("T")[0]);
  });

  const [reservation, setReservation] = useState({
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guest: 0,
    },
    date: new Date(currentDate).toISOString(),
    type: "",
    tier: 1,
    location: "",
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
            guest: reservation.customer.guest,
          },
        },
      });
      const yup = await client.graphql({
        query: createReservation,
        variables: {
          input: {
            date: reservation.date,
            type: reservation.type,
            location: reservation.location,
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
    } catch (e) {
      console.log("submit error", e);
      alert("Reservation Not Submitted Please try again");
    }
    isLoading(false);
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
      setReservation({ ...reservation, [name]: new Date(value).toISOString() });
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
      <Form onSubmit={onSubmit}>
        <Label id="fNameLabel" htmlFor="firstName">
          First Name
        </Label>

        <Input
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          value={reservation.customer.firstName}
          onChange={handleChange}
        />
        <Label id="lNameLabel" htmlFor="lastName">
          Last Name
        </Label>
        <Input
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          value={reservation.customer.lastName}
          onChange={handleChange}
        />

        <Label id="emailLabel" htmlFor="email">
          Email
        </Label>
        <Input
          className="input"
          type="email"
          name="email"
          autoComplete="email"
          id="email"
          value={reservation.customer.email}
          onChange={handleChange}
        />
        <Label id="phoneNumberLabel" htmlFor="phone">
          Phone Number
        </Label>
        <Input
          className="input"
          type="tel"
          name="phone"
          autoComplete="phone"
          id="phone"
          value={reservation.customer.phone}
          onChange={handleChange}
        />
        <Label id="guestLabel" htmlFor="guests">
          # of Guests
        </Label>
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
          <Label id="skiLabel" style={{ marginRight: "10px" }} htmlFor="skiRes">
            Ski
          </Label>
          <input
            type="checkbox"
            name="type"
            id="snowBoardRes"
            value="Snowboard"
            onChange={handleChange}
          />

          <Label id="snowBoardResLabel" htmlFor="snowBoardRes">
            {" "}
            SnowBoard{" "}
          </Label>
        </section>
        <Label id="locationLabel" htmlFor="location">
          Location
        </Label>

        <select
          name="location"
          id="location"
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option value="CamelBack">CamelBack</option>
          <option value="Vermont">Vermont</option>
          <option value="NYC">NYC</option>
          <option value="Colorado">Colorado</option>
        </select>

        <Label id="dateLabel" htmlFor="date">
          Date
        </Label>
        <Input
          className="input"
          type="date"
          id="date"
          name="date"
          defaultValue={currentDate}
          onChange={handleChange}
        />
        <Button
          isLoading={loading}
          name="resButton"
          loadingText="Loading..."
          type="submit"
          style={{ position: "relative", top: "1rem" }}
        >
          Create
        </Button>
      </Form>
    </>
  );
}
