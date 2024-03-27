import { Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Form } from "react-router-dom";

import { updateUserAttributes } from "aws-amplify/auth";
import { updateInstructor } from "../src/graphql/mutations";
import { V6Client } from "@aws-amplify/api-graphql";

async function handleUpdateNameAttributes(firstName: string, lastName: string) {
  try {
    const attributes = await updateUserAttributes({
      userAttributes: {
        given_name: firstName,
        family_name: lastName,
      },
    });
    console.log(attributes);
  } catch (error) {
    console.log(error);
  }
}

export default function UserDetails(props: {
  client: V6Client<never>;
  user: any;
  retrievedUserCredentials: () => void;
}) {
  const [userInstructorName, setUserInstructorName] = useState({
    userFirstName: "",
    userLastName: "",
    userNumber: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUserInstructorName({ ...userInstructorName, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await handleUpdateNameAttributes(
        userInstructorName.userFirstName,
        userInstructorName.userLastName
      );
      console.log(response);

      const input = {
        id: props.user.sub ?? "",
        name:
          userInstructorName.userFirstName +
          " " +
          userInstructorName.userLastName,
        phone_number: userInstructorName.userNumber,
      };
      const response2 = await props.client.graphql({
        query: updateInstructor,
        variables: {
          input: input,
        },
      });
      console.log("Update Instructor", response2);
      props.retrievedUserCredentials();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form className="userDetails" action="submit" onSubmit={handleSubmit}>
        <h3>Please fill out the following details:</h3>
        <input
          className="input"
          type="text"
          placeholder="First Name"
          id="userFirstName"
          name="userFirstName"
          onChange={handleChange}
          autoComplete="given-name"
        />
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          id="userLastName"
          name="userLastName"
          onChange={handleChange}
          autoComplete="family-name"
        />
        <input
          className="input"
          type="text"
          name="userNumber"
          id="userNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          autoComplete="tel"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
