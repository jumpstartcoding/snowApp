import {
  updateCustomer,
  updateReservation,
  deleteReservation,
  deleteCustomer,
} from "../src/graphql/mutations";
import { listReservations } from "../src/graphql/queries";
import { V6Client } from "@aws-amplify/api-graphql";

export async function removeReservation(
  resID: string,
  custID: string,
  client: V6Client<never>,
  setLoading: React.Dispatch<React.SetStateAction<boolean[]>>,
  loading: boolean[],
  index: number
) {
  try {
    setLoading({ ...loading, [index]: true });
    const response = await client.graphql({
      query: deleteReservation,
      variables: { input: { id: resID } },
    });
    console.log(response);
    const responseTwo = await client.graphql({
      query: deleteCustomer,
      variables: {
        input: { id: custID },
      },
    });
    console.log(responseTwo);
  } catch (error) {
    console.log(error);
    alert("Deleting Reservation Failed");
  } finally {
    setLoading({ ...loading, [index]: false });
  }
}

export async function editReservation(
  reservation: any,
  resId: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean[]>>,
  loading: boolean[],
  index: number,
  client: V6Client<never>
) {
  const input = {
    id: resId,
    name: reservation.name,
    phone_number: reservation.number,
    email: reservation.email,
    guest: reservation.guest,
  };

  try {
    setLoading({ ...loading, [index]: true });
    const response = await client.graphql({
      query: updateCustomer,
      variables: { input: input },
    });
    console.log(response);
    alert("Reservation Update Complete");
  } catch (error) {
    console.log(error);
    alert("Reservation Update Failed");
  } finally {
    setLoading({ ...loading, [index]: false });
  }
}

export async function acceptReservation(
  userId: any,
  resId: string,
  client: V6Client<never>,
  setLoading: React.Dispatch<React.SetStateAction<boolean[]>>,
  loading: boolean[],
  index: number
) {
  const input = {
    id: resId,
    instructorID: userId,
    status: "accepted",
  };
  try {
    setLoading({ ...loading, [index]: true });
    const response = await client.graphql({
      query: updateReservation,
      variables: { input: input },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading({ ...loading, [index]: false });
  }
}

export const Loading = (props: { fetching: boolean }) => {
  return props.fetching ? (
    <div
      className="spinner-grow text-warning"
      style={{
        top: "50%",
        left: "50%",
        position: "fixed",
      }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>
      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,50%)",
          position: "absolute",
        }}
      >
        <h3>No Reservations</h3>
      </div>
    </>
  );
};

export async function getReservations(client: V6Client) {
  const response = await client.graphql({
    query: listReservations,
    variables: {
      filter: {},
    },
  });
  return response;
}
