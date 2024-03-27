import "@aws-amplify/ui-react/styles.css";
import { ReactNode, useContext } from "react";
import { clientContext } from "../components/clientContext";

interface appProps {
  children: ReactNode;
}

export function App({ children }: appProps) {
  const client = useContext(clientContext);
  return (
    <>
      <clientContext.Provider value={client}>{children}</clientContext.Provider>
    </>
  );
}

export default App;
