import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
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
//app initialization
const app = initializeApp(firebaseConfig)
//bd initialization
export const db = getFirestore(app)
//collection definition
export const employeesCollectionRef = collection(db, "employees")
export const auth = getAuth(app)
