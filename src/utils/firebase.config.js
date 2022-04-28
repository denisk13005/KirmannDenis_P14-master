import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBIt7TfqYQF7xCKddViRF03yg9SRQHJe_s",

  authDomain: "argent-bank-kd.firebaseapp.com",

  projectId: "argent-bank-kd",

  storageBucket: "argent-bank-kd.appspot.com",

  messagingSenderId: "829164940158",

  appId: "1:829164940158:web:e9106b30d3b46226bf612f",

  measurementId: "G-N9E5K1GMYY",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
