import "@aws-amplify/ui-react/styles.css";
import { ReactNode, useContext } from "react";

import HomePage from "../components/HomePage";
import { clientContext } from "../components/clientContext";

interface appProps {
  children: ReactNode;
}
export function App({ children }: appProps) {
  const client = useContext(clientContext);
  return (
    <>
      <div>
        <clientContext.Provider value={client}>
          {children}
        </clientContext.Provider>
      </div>
    </>
  );
}

export default App;
