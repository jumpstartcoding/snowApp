import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
import SignIn from "../components/SignIn";
Amplify.configure(config);

export function App() {
  return (
    <>
      <div>
        <SignIn></SignIn>
      </div>
    </>
  );
}

export default App;
