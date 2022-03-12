import { MantineProvider, NotificationsProvider } from "ui";
import { FirebaseAuthProvider } from "../services/firebase/AuthenticationProvider";
import "../styles/reset.css";

const App = ({ Component, pageProps }) => {
  return (
    <FirebaseAuthProvider>
      <MantineProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </FirebaseAuthProvider>
  );
};

export default App;
