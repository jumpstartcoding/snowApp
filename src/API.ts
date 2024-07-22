/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReservationInput = {
  id?: string | null,
  type: string,
  location: string,
  date: string,
  instructorID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tier?: number | null,
  status?: string | null,
  reservationCustomerId: string,
};

export type ModelReservationConditionInput = {
  type?: ModelStringInput | null,
  location?: ModelStringInput | null,
  date?: ModelStringInput | null,
  instructorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelReservationConditionInput | null > | null,
  or?: Array< ModelReservationConditionInput | null > | null,
  not?: ModelReservationConditionInput | null,
  reservationCustomerId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Reservation = {
  __typename: "Reservation",
  id: string,
  type: string,
  location: string,
  date: string,
  instructorID?: string | null,
  instructor?: Instructor | null,
  customer: Customer,
  createdAt: string,
  updatedAt?: string | null,
  tier?: number | null,
  status?: string | null,
  reservationCustomerId: string,
};

export type Instructor = {
  __typename: "Instructor",
  id: string,
  name: string,
  phone_number?: string | null,
  email?: string | null,
  reservations?: ModelReservationConnection | null,
  locations?: Array< string | null > | null,
  tier?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection",
  items:  Array<Reservation | null >,
  nextToken?: string | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name: string,
  phone_number?: string | null,
  email?: string | null,
  reservation?: Reservation | null,
  guest?: number | null,
  createdAt: string,
  updatedAt: string,
  customerReservationId?: string | null,
};

export type UpdateReservationInput = {
  id: string,
  type?: string | null,
  location?: string | null,
  date?: string | null,
  instructorID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tier?: number | null,
  status?: string | null,
  reservationCustomerId?: string | null,
};

export type DeleteReservationInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
  phone_number?: string | null,
  email?: string | null,
  guest?: number | null,
  customerReservationId?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  guest?: ModelIntInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  customerReservationId?: ModelIDInput | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  phone_number?: string | null,
  email?: string | null,
  guest?: number | null,
  customerReservationId?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateInstructorInput = {
  id?: string | null,
  name: string,
  phone_number?: string | null,
  email?: string | null,
  locations?: Array< string | null > | null,
  tier?: number | null,
};

export type ModelInstructorConditionInput = {
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  locations?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  and?: Array< ModelInstructorConditionInput | null > | null,
  or?: Array< ModelInstructorConditionInput | null > | null,
  not?: ModelInstructorConditionInput | null,
};

export type UpdateInstructorInput = {
  id: string,
  name?: string | null,
  phone_number?: string | null,
  email?: string | null,
  locations?: Array< string | null > | null,
  tier?: number | null,
};

export type DeleteInstructorInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  content: string,
  rating?: number | null,
  createdAt?: string | null,
};

export type ModelReviewConditionInput = {
  content?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  content: string,
  rating?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  id: string,
  content?: string | null,
  rating?: number | null,
  createdAt?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  location?: ModelStringInput | null,
  date?: ModelStringInput | null,
  instructorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelReservationFilterInput | null > | null,
  or?: Array< ModelReservationFilterInput | null > | null,
  not?: ModelReservationFilterInput | null,
  reservationCustomerId?: ModelIDInput | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  guest?: ModelIntInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
  customerReservationId?: ModelIDInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelInstructorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  locations?: ModelStringInput | null,
  tier?: ModelIntInput | null,
  and?: Array< ModelInstructorFilterInput | null > | null,
  or?: Array< ModelInstructorFilterInput | null > | null,
  not?: ModelInstructorFilterInput | null,
};

export type ModelInstructorConnection = {
  __typename: "ModelInstructorConnection",
  items:  Array<Instructor | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionReservationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  instructorID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  tier?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReservationFilterInput | null > | null,
  or?: Array< ModelSubscriptionReservationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  guest?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionInstructorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  locations?: ModelSubscriptionStringInput | null,
  tier?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionInstructorFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstructorFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type CreateReservationMutationVariables = {
  input: CreateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type CreateReservationMutation = {
  createReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type UpdateReservationMutationVariables = {
  input: UpdateReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type UpdateReservationMutation = {
  updateReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type DeleteReservationMutationVariables = {
  input: DeleteReservationInput,
  condition?: ModelReservationConditionInput | null,
};

export type DeleteReservationMutation = {
  deleteReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type CreateInstructorMutationVariables = {
  input: CreateInstructorInput,
  condition?: ModelInstructorConditionInput | null,
};

export type CreateInstructorMutation = {
  createInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstructorMutationVariables = {
  input: UpdateInstructorInput,
  condition?: ModelInstructorConditionInput | null,
};

export type UpdateInstructorMutation = {
  updateInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstructorMutationVariables = {
  input: DeleteInstructorInput,
  condition?: ModelInstructorConditionInput | null,
};

export type DeleteInstructorMutation = {
  deleteInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReservationQueryVariables = {
  id: string,
};

export type GetReservationQuery = {
  getReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type ListReservationsQueryVariables = {
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationsQuery = {
  listReservations?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstructorQueryVariables = {
  id: string,
};

export type GetInstructorQuery = {
  getInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstructorsQueryVariables = {
  filter?: ModelInstructorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstructorsQuery = {
  listInstructors?:  {
    __typename: "ModelInstructorConnection",
    items:  Array< {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      content: string,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReservationsByInstructorIDQueryVariables = {
  instructorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReservationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReservationsByInstructorIDQuery = {
  reservationsByInstructorID?:  {
    __typename: "ModelReservationConnection",
    items:  Array< {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnCreateReservationSubscription = {
  onCreateReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type OnUpdateReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnUpdateReservationSubscription = {
  onUpdateReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type OnDeleteReservationSubscriptionVariables = {
  filter?: ModelSubscriptionReservationFilterInput | null,
};

export type OnDeleteReservationSubscription = {
  onDeleteReservation?:  {
    __typename: "Reservation",
    id: string,
    type: string,
    location: string,
    date: string,
    instructorID?: string | null,
    instructor?:  {
      __typename: "Instructor",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      locations?: Array< string | null > | null,
      tier?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      phone_number?: string | null,
      email?: string | null,
      guest?: number | null,
      createdAt: string,
      updatedAt: string,
      customerReservationId?: string | null,
    },
    createdAt: string,
    updatedAt?: string | null,
    tier?: number | null,
    status?: string | null,
    reservationCustomerId: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservation?:  {
      __typename: "Reservation",
      id: string,
      type: string,
      location: string,
      date: string,
      instructorID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      tier?: number | null,
      status?: string | null,
      reservationCustomerId: string,
    } | null,
    guest?: number | null,
    createdAt: string,
    updatedAt: string,
    customerReservationId?: string | null,
  } | null,
};

export type OnCreateInstructorSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorFilterInput | null,
};

export type OnCreateInstructorSubscription = {
  onCreateInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstructorSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorFilterInput | null,
};

export type OnUpdateInstructorSubscription = {
  onUpdateInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstructorSubscriptionVariables = {
  filter?: ModelSubscriptionInstructorFilterInput | null,
};

export type OnDeleteInstructorSubscription = {
  onDeleteInstructor?:  {
    __typename: "Instructor",
    id: string,
    name: string,
    phone_number?: string | null,
    email?: string | null,
    reservations?:  {
      __typename: "ModelReservationConnection",
      nextToken?: string | null,
    } | null,
    locations?: Array< string | null > | null,
    tier?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
