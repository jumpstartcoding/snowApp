import { Form } from "react-router-dom";
import { Button, Input, Label } from "@aws-amplify/ui-react";
import "./SignIn.css";
export default function CreateRes() {
  return (
    <>
      <Form className="createRes ">
        <section>
          <Input
            className="input"
            type="text"
            name="firstName"
            id="firstName"
          />
          <Input className="input" type="text" name="lastName" id="lastName" />
        </section>

        <section>
          <Label id="fNameLabel" htmlFor="firstName">
            First Name
          </Label>
          <Label htmlFor="lastName">Last Name</Label>
        </section>

        <Input className="input" type="email" name="email" id="email" />
        <Label htmlFor="email">Email</Label>

        <Input className="input" type="tel" name="phone" id="phone" />
        <Label htmlFor="phone">Phone Number</Label>

        <Input className="input" type="number" name="guests" id="guests" />
        <Label htmlFor="guests"># of Guests</Label>

        <section style={{ justifyContent: "center" }}>
          <input type="checkbox" name="skiRes" id="skiRes" />
          <Label htmlFor="snowBoardRes"> Ski </Label>
          <input type="checkbox" name="snowBoardRes" id="snowBoardRes" />

          <Label htmlFor="snowBoardRes"> SnowBoard </Label>
        </section>
        <Label htmlFor="date">Date</Label>

        <Input className="input" type="date" id="date" />
        <Button style={{ position: "relative", top: "1rem" }}>Create</Button>
      </Form>
    </>
  );
}
