// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const alertFirebaseError = (error: { code: string }, notifications: any) => {
  if (error.code === "auth/account-exists-with-different-credential") {
    notifications.showNotification({
      color: "red",
      message:
        "There is already an account registered with this email address!",
    });
  }
};

const loginWithGoogle = (notifications: any) => {
  try {
    signInWithPopup(auth, googleAuthProvider);
  } catch (e) {
    alertFirebaseError(e, notifications);
  }
};

// Any here should be NotificationsContextProps but mantine doesn't export the type?
const loginWithGithub = async (notifications: any) => {
  try {
    await signInWithPopup(auth, githubAuthProvider);
  } catch (e) {
    alertFirebaseError(e, notifications);
  }
};

const logout = () => signOut(auth);

export {
  loginWithGoogle,
  loginWithGithub,
  logout,
  getAuth,
  onAuthStateChanged,
  googleAuthProvider,
  database as default,
};
