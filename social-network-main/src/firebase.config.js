import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrNbAA17ziQzEbUe5V61V47PmM8WzwaQU",
  authDomain: "social-network-app-c89fe.firebaseapp.com",
  projectId: "social-network-app-c89fe",
  storageBucket: "social-network-app-c89fe.appspot.com",
  messagingSenderId: "491337162898",
  appId: "1:491337162898:web:663b056b6522205f3c064b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
