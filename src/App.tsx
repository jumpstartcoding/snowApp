import "@aws-amplify/ui-react/styles.css";
import { useContext } from "react";

import HomePage from "../components/HomePage";
import { clientContext } from "../components/clientContext";

export function App() {
  const client = useContext(clientContext);
  return (
    <>
      <div>
        <clientContext.Provider value={client}>
          <HomePage></HomePage>
        </clientContext.Provider>
      </div>
    </>
  );
}

export default App;
