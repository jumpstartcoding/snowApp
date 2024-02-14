/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReservation = /* GraphQL */ `query GetReservation($id: ID!) {
  getReservation(id: $id) {
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
    reservationCustomerId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReservationQueryVariables,
  APITypes.GetReservationQuery
>;
export const listReservations = /* GraphQL */ `query ListReservations(
  $filter: ModelReservationFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      reservationCustomerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReservationsQueryVariables,
  APITypes.ListReservationsQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        reservationCustomerId
        __typename
      }
      guest
      createdAt
      updatedAt
      customerReservationId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getInstructor = /* GraphQL */ `query GetInstructor($id: ID!) {
  getInstructor(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstructorQueryVariables,
  APITypes.GetInstructorQuery
>;
export const listInstructors = /* GraphQL */ `query ListInstructors(
  $filter: ModelInstructorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstructorsQueryVariables,
  APITypes.ListInstructorsQuery
>;
