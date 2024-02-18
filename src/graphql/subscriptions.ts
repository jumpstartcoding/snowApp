/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReservation = /* GraphQL */ `subscription OnCreateReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onCreateReservation(filter: $filter) {
    id
    type
    location
    date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
    instructorReservationsId
    reservationInstructorId
    reservationCustomerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReservationSubscriptionVariables,
  APITypes.OnCreateReservationSubscription
>;
export const onUpdateReservation = /* GraphQL */ `subscription OnUpdateReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onUpdateReservation(filter: $filter) {
    id
    type
    location
    date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
    instructorReservationsId
    reservationInstructorId
    reservationCustomerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReservationSubscriptionVariables,
  APITypes.OnUpdateReservationSubscription
>;
export const onDeleteReservation = /* GraphQL */ `subscription OnDeleteReservation(
  $filter: ModelSubscriptionReservationFilterInput
) {
  onDeleteReservation(filter: $filter) {
    id
    type
    location
    date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
    instructorReservationsId
    reservationInstructorId
    reservationCustomerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReservationSubscriptionVariables,
  APITypes.OnDeleteReservationSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
      instructorReservationsId
      reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
      instructorReservationsId
      reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
    id
    name
    phone_number
    email
    reservation {
      id
      type
      location
      date
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
              instructorReservationsId
              reservationInstructorId
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
          instructorReservationsId
          reservationInstructorId
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
      instructorReservationsId
      reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateInstructor = /* GraphQL */ `subscription OnCreateInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onCreateInstructor(filter: $filter) {
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnCreateInstructorSubscriptionVariables,
  APITypes.OnCreateInstructorSubscription
>;
export const onUpdateInstructor = /* GraphQL */ `subscription OnUpdateInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onUpdateInstructor(filter: $filter) {
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstructorSubscriptionVariables,
  APITypes.OnUpdateInstructorSubscription
>;
export const onDeleteInstructor = /* GraphQL */ `subscription OnDeleteInstructor(
  $filter: ModelSubscriptionInstructorFilterInput
) {
  onDeleteInstructor(filter: $filter) {
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
              instructorReservationsId
              reservationInstructorId
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
                createdAt
                updatedAt
                tier
                status
                instructorReservationsId
                reservationInstructorId
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
            instructorReservationsId
            reservationInstructorId
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
        instructorReservationsId
        reservationInstructorId
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstructorSubscriptionVariables,
  APITypes.OnDeleteInstructorSubscription
>;
