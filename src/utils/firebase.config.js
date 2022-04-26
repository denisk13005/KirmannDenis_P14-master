import { initializeApp } from "firebase/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAoPNhegflVO-Z36Bb3lRwCgcphojBUK5o",

  authDomain: "wealth-health-dk.firebaseapp.com",

  projectId: "wealth-health-dk",

  storageBucket: "wealth-health-dk.appspot.com",

  messagingSenderId: "236483992111",

  appId: "1:236483992111:web:65219898fedcc7328e84da",

  measurementId: "G-79HZBNFWDZ",
}

const app = initializeApp(firebaseConfig)

export default app
export const auth = app.auth()
