import { createContext } from "react";
import { generateClient } from "@aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
const client = generateClient();
export const clientContext = createContext(client);
