import { createContext } from "react";
import { generateClient } from "@aws-amplify/api";

const client = generateClient();
export const clientContext = createContext(client);
