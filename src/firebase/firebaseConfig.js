import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH2IfF4_jhqSurewjnwoWAc9N7QUXXnkU",
  authDomain: "valiteach-601d6.firebaseapp.com",
  projectId: "valiteach-601d6",
  storageBucket: "valiteach-601d6.firebasestorage.app",
  messagingSenderId: "477624049666",
  appId: "1:477624049666:web:958918cdaf8f65b9c1871b",
  measurementId: "G-TS0LFSE1KT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
