import { Button, useNotifications } from "ui";
import { useFirebaseAuth } from "../services/firebase/AuthenticationProvider";
import {
  loginWithGithub,
  loginWithGoogle,
  logout,
} from "../services/firebase/firebase";

export default function Web() {
  const user = useFirebaseAuth();
  const notifications = useNotifications();

  return (
    <div>
      <h1>Build in Public Journal</h1>
      <Button onClick={() => loginWithGoogle(notifications)}>
        Login with Google
      </Button>
      <Button onClick={() => loginWithGithub(notifications)}>
        Login with Github
      </Button>
      <Button onClick={logout}>Logout</Button>
      <p>Am I logged in? {user ? user?.email : "NOPE"}</p>
    </div>
  );
}
