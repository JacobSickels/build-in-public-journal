import { MantineProvider } from "ui";
import { FirebaseAuthProvider } from "../services/firebase/AuthenticationProvider";
import "../styles/reset.css";

const App = ({ Component, pageProps }) => {
  return (
    <FirebaseAuthProvider>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </FirebaseAuthProvider>
  );
};

export default App;
