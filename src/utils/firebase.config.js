import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAoPNhegflVO-Z36Bb3lRwCgcphojBUK5o",

  authDomain: "wealth-health-dk.firebaseapp.com",

  databaseURL:
    "https://wealth-health-dk-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "wealth-health-dk",

  storageBucket: "wealth-health-dk.appspot.com",

  messagingSenderId: "236483992111",

  appId: "1:236483992111:web:65219898fedcc7328e84da",

  measurementId: "G-79HZBNFWDZ",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
