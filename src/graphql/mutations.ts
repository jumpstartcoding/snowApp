/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReservation = /* GraphQL */ `mutation CreateReservation(
  $input: CreateReservationInput!
  $condition: ModelReservationConditionInput
) {
  createReservation(input: $input, condition: $condition) {
    id
    type
    location
    date
    instructorID
    instructor {
      id
      name
      phone_number
      email
      reservations {
        items {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        nextToken
        __typename
      }
      locations
      tier
      createdAt
      updatedAt
      __typename
    }
    customer {
      id
      name
      phone_number
      email
      reservation {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      guest
      createdAt
      updatedAt
      customerReservationId
      __typename
    }
    createdAt
    updatedAt
    tier
    status
    reservationCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReservationMutationVariables,
  APITypes.CreateReservationMutation
>;
export const updateReservation = /* GraphQL */ `mutation UpdateReservation(
  $input: UpdateReservationInput!
  $condition: ModelReservationConditionInput
) {
  updateReservation(input: $input, condition: $condition) {
    id
    type
    location
    date
    instructorID
    instructor {
      id
      name
      phone_number
      email
      reservations {
        items {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        nextToken
        __typename
      }
      locations
      tier
      createdAt
      updatedAt
      __typename
    }
    customer {
      id
      name
      phone_number
      email
      reservation {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      guest
      createdAt
      updatedAt
      customerReservationId
      __typename
    }
    createdAt
    updatedAt
    tier
    status
    reservationCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReservationMutationVariables,
  APITypes.UpdateReservationMutation
>;
export const deleteReservation = /* GraphQL */ `mutation DeleteReservation(
  $input: DeleteReservationInput!
  $condition: ModelReservationConditionInput
) {
  deleteReservation(input: $input, condition: $condition) {
    id
    type
    location
    date
    instructorID
    instructor {
      id
      name
      phone_number
      email
      reservations {
        items {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        nextToken
        __typename
      }
      locations
      tier
      createdAt
      updatedAt
      __typename
    }
    customer {
      id
      name
      phone_number
      email
      reservation {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      guest
      createdAt
      updatedAt
      customerReservationId
      __typename
    }
    createdAt
    updatedAt
    tier
    status
    reservationCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReservationMutationVariables,
  APITypes.DeleteReservationMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
      instructorID
      instructor {
        id
        name
        phone_number
        email
        reservations {
          items {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          nextToken
          __typename
        }
        locations
        tier
        createdAt
        updatedAt
        __typename
      }
      customer {
        id
        name
        phone_number
        email
        reservation {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        guest
        createdAt
        updatedAt
        customerReservationId
        __typename
      }
      createdAt
      updatedAt
      tier
      status
      reservationCustomerId
      __typename
    }
    guest
    createdAt
    updatedAt
    customerReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
      instructorID
      instructor {
        id
        name
        phone_number
        email
        reservations {
          items {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          nextToken
          __typename
        }
        locations
        tier
        createdAt
        updatedAt
        __typename
      }
      customer {
        id
        name
        phone_number
        email
        reservation {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        guest
        createdAt
        updatedAt
        customerReservationId
        __typename
      }
      createdAt
      updatedAt
      tier
      status
      reservationCustomerId
      __typename
    }
    guest
    createdAt
    updatedAt
    customerReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
      instructorID
      instructor {
        id
        name
        phone_number
        email
        reservations {
          items {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          nextToken
          __typename
        }
        locations
        tier
        createdAt
        updatedAt
        __typename
      }
      customer {
        id
        name
        phone_number
        email
        reservation {
          id
          type
          location
          date
          instructorID
          instructor {
            id
            name
            phone_number
            email
            reservations {
              nextToken
              __typename
            }
            locations
            tier
            createdAt
            updatedAt
            __typename
          }
          customer {
            id
            name
            phone_number
            email
            reservation {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            guest
            createdAt
            updatedAt
            customerReservationId
            __typename
          }
          createdAt
          updatedAt
          tier
          status
          reservationCustomerId
          __typename
        }
        guest
        createdAt
        updatedAt
        customerReservationId
        __typename
      }
      createdAt
      updatedAt
      tier
      status
      reservationCustomerId
      __typename
    }
    guest
    createdAt
    updatedAt
    customerReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createInstructor = /* GraphQL */ `mutation CreateInstructor(
  $input: CreateInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  createInstructor(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservations {
      items {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      nextToken
      __typename
    }
    locations
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstructorMutationVariables,
  APITypes.CreateInstructorMutation
>;
export const updateInstructor = /* GraphQL */ `mutation UpdateInstructor(
  $input: UpdateInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  updateInstructor(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservations {
      items {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      nextToken
      __typename
    }
    locations
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstructorMutationVariables,
  APITypes.UpdateInstructorMutation
>;
export const deleteInstructor = /* GraphQL */ `mutation DeleteInstructor(
  $input: DeleteInstructorInput!
  $condition: ModelInstructorConditionInput
) {
  deleteInstructor(input: $input, condition: $condition) {
    id
    name
    phone_number
    email
    reservations {
      items {
        id
        type
        location
        date
        instructorID
        instructor {
          id
          name
          phone_number
          email
          reservations {
            items {
              id
              type
              location
              date
              instructorID
              createdAt
              updatedAt
              tier
              status
              reservationCustomerId
              __typename
            }
            nextToken
            __typename
          }
          locations
          tier
          createdAt
          updatedAt
          __typename
        }
        customer {
          id
          name
          phone_number
          email
          reservation {
            id
            type
            location
            date
            instructorID
            instructor {
              id
              name
              phone_number
              email
              locations
              tier
              createdAt
              updatedAt
              __typename
            }
            customer {
              id
              name
              phone_number
              email
              guest
              createdAt
              updatedAt
              customerReservationId
              __typename
            }
            createdAt
            updatedAt
            tier
            status
            reservationCustomerId
            __typename
          }
          guest
          createdAt
          updatedAt
          customerReservationId
          __typename
        }
        createdAt
        updatedAt
        tier
        status
        reservationCustomerId
        __typename
      }
      nextToken
      __typename
    }
    locations
    tier
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstructorMutationVariables,
  APITypes.DeleteInstructorMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
    id
    content
    rating
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
    id
    content
    rating
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
    id
    content
    rating
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
