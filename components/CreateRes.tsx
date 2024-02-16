import { Form } from "react-router-dom";
import { Button, Input, Label } from "@aws-amplify/ui-react";
import "./SignIn.css";
import { createReservation, createCustomer } from "../src/graphql/mutations";
import { useContext, useEffect, useState } from "react";
import { clientContext } from "../components/clientContext";

export default function CreateRes() {
  const client = useContext(clientContext);
  const [reservation, setReservation] = useState({
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guest: 0,
    },
    date: "",
    type: "",
    tier: 1,
    location: "",
    status: "new",
  });
  useEffect(() => {
    // Get the current date
    const currentDate = new Date().toISOString();
    setReservation({
      ...reservation,
      date: currentDate,
    });
  }, []);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      console.log("res:", reservation);
      const yup = await client.graphql({
        query: createReservation,
        variables: {
          input: {
            date: reservation.date,
            type: reservation.type,
            location: reservation.location,
            status: "new",
          },
        },
      });
      console.log("create Res:", yup);

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
            customerReservationId: yup.data.createReservation.id,
          },
        },
      });
      console.log("create Cust:", cust);

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
        style={{
          marginBottom: "100px",
        }}
      >
        <Form className="card createRes " onSubmit={onSubmit}>
          <section>
            <Label id="fNameLabel" htmlFor="firstName">
              First Name
            </Label>
            <Label id="lNameLabel" htmlFor="lastName">
              Last Name
            </Label>
          </section>
          <section>
            <Input
              className="input"
              type="text"
              name="firstName"
              id="firstName"
              value={reservation.customer.firstName}
              onChange={handleChange}
            />
            <Input
              className="input"
              type="text"
              name="lastName"
              id="lastName"
              value={reservation.customer.lastName}
              onChange={handleChange}
            />
          </section>
          <Label id="emailLabel" htmlFor="email">
            Email
          </Label>
          <Input
            className="input"
            type="email"
            name="email"
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
            <Label
              id="skiLabel"
              style={{ marginRight: "10px" }}
              htmlFor="skiRes"
            >
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
          <input
            className="input"
            type="text"
            list="locationList"
            name="location"
            id="location"
            onChange={handleChange}
          />
          <datalist id="locationList">
            <option value="CamelBack"></option>
            <option value="Vermont">Tier 4 Only</option>
            <option value="NYC"></option>
            <option value="Colorado"></option>
          </datalist>

          <Label id="dateLabel" htmlFor="date">
            Date
          </Label>
          <Input
            className="input"
            type="date"
            id="date"
            onChange={handleChange}
          />
          <Button
            // isLoading={true}
            name="resButton"
            loadingText="Loading..."
            type="submit"
            style={{ position: "relative", top: "1rem" }}
          >
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
