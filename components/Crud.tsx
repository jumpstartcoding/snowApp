import {
  updateCustomer,
  createReview,
  updateReservation,
  deleteReservation,
  deleteCustomer,
  createListing,
} from "../src/graphql/mutations";
import { listReservations, listReviews } from "../src/graphql/queries";
import { V6Client, GraphQLResult } from "@aws-amplify/api-graphql";
import { ListReservationsQuery, ListReviewsQuery } from "../src/API";

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

export async function allReviews(
  client: V6Client<never>
): Promise<GraphQLResult<ListReviewsQuery>> {
  const response = await client.graphql({
    query: listReviews,
    variables: {
      filter: {},
    },
  });

  return response;
}
export async function postReview(
  review: { name: string; feedback: string; date: string },
  client: V6Client<never>
) {
  // Ensure the date is properly formatted
  const formattedDate = review.date.includes("T")
    ? review.date
    : new Date(review.date).toISOString();

  const input = {
    name: review.name,
    date: formattedDate,
    content: review.feedback,
  };

  try {
    const response = await client.graphql({
      query: createReview,
      variables: { input: input },
    });
    console.log(response);
  } catch (error) {
    console.error("Error posting review:", error);
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

export async function getReservations(
  client: V6Client<never>
): Promise<GraphQLResult<ListReservationsQuery>> {
  const response = await client.graphql({
    query: listReservations,
    variables: {
      filter: {},
    },
  });
  return response;
}

export async function addListing(
  listing: {
    lat: number;
    long: number;
    title: string;
    description: string;
    url: string;
    image: string;
  },
  client: V6Client<never>
) {
  try {
    const response = await client.graphql({
      query: createListing,
      variables: { input: listing },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
