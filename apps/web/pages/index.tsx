import { Button } from "ui";
import { useFirebaseAuth } from "../services/firebase/AuthenticationProvider";
import { loginWithGoogle, logout } from "../services/firebase/firebase";

export default function Web() {
  const user = useFirebaseAuth();

  return (
    <div>
      <h1>Build in Public Journal</h1>
      <Button onClick={loginWithGoogle}>Login with Google</Button>
      <Button onClick={logout}>Logout</Button>
      <p>Am I logged in? {user ? user?.email : "NOPE"}</p>
    </div>
  );
}
