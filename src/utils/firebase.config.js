import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_API_KEY,

  // eslint-disable-next-line no-undef
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  // eslint-disable-next-line no-undef
  databaseURL: process.env.REACT_APP_DATABASE_URL,

  // eslint-disable-next-line no-undef
  projectId: process.env.REACT_APP_PROJECT_ID,

  // eslint-disable-next-line no-undef
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  // eslint-disable-next-line no-undef
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  // eslint-disable-next-line no-undef
  appId: process.env.REACT_APP_APP_ID,

  // eslint-disable-next-line no-undef
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
console.log(firebaseConfig.apiKey, firebaseConfig.projectId)
//app initialization
const app = initializeApp(firebaseConfig)
//bd initialization
export const db = getFirestore(app)
//collection definition
export const employeesCollectionRef = collection(db, "employees")
export const auth = getAuth(app)
